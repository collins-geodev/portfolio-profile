import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Loader2, Radio } from 'lucide-react'
import { survey } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { BrowserChrome } from './ui/DashboardPreview'

/** Full form, for the "open in a new tab" links. */
const formUrl = `https://survey123.arcgis.com/share/${survey.itemId}`
/** Embedded form, with Survey123's own header/navbar/footer stripped. */
const embedUrl = `${formUrl}?hide=${survey.hide}&width=1`

interface WebFormMessage {
  event?: string
  contentHeight?: number
}

const loadedEvents = ['survey123:webform:formLoaded', 'survey123:onFormLoaded']

/** ink-900 -- the tone the form's page background is recoloured to. */
const FORM_BG = '#080d1a'
/** Height of the empty theme band the form leaves above its first question. */
const THEME_BAND = 30

export function Survey() {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState<number | null>(null)
  const [loaded, setLoaded] = useState(false)

  /* If the web form ever posts its rendered height back, grow to fit it. */
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!survey.allowedOrigins.includes(event.origin)) return
      if (event.source !== frameRef.current?.contentWindow) return
      if (typeof event.data !== 'string') return

      let payload: WebFormMessage
      try {
        payload = JSON.parse(event.data)
      } catch {
        return
      }

      if (payload.event && loadedEvents.includes(payload.event) && payload.contentHeight) {
        setHeight(payload.contentHeight)
      }
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <section id="survey" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Live Field Tool"
          title={
            <>
              Field capture that feeds the <span className="text-gradient">geodatabase</span>
            </>
          }
          subtitle="The same Survey123 form crews run at the pole, embedded and live — fill it in right here."
        />

        <Reveal className="mt-12">
          <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-brand-emerald/40 sm:p-7 lg:grid-cols-2 lg:gap-12 lg:p-9">
            {/* Live form */}
            <div>
              <BrowserChrome
                url={`survey123.arcgis.com/share/${survey.itemId.slice(0, 8)}…`}
                accent="emerald"
                flush
                bodyStyle={{
                  ...(height ? { height } : { height: 'clamp(380px, 46vh, 500px)' }),
                  // The colour the form's white page is mapped onto (see below).
                  background: FORM_BG,
                  // Keep the blend below confined to this box, so it cannot pick
                  // up the page's background gradients.
                  isolation: 'isolate',
                }}
              >
                {!loaded && (
                  <div className="absolute inset-0 z-10 grid place-items-center bg-ink-900">
                    <div className="flex flex-col items-center gap-3 text-slate-400">
                      <Loader2 className="h-5 w-5 animate-spin text-brand-emerald" />
                      <p className="text-xs">Loading the live form…</p>
                    </div>
                  </div>
                )}
                {/* Survey123 ships no dark theme and the document is cross-origin,
                    so its CSS is out of reach -- the frame is recoloured instead.
                    invert(1) turns the white page pure black and darkens the text;
                    hue-rotate puts the hues back where they started, so the green
                    headings stay green; screen over an opaque backdrop then maps
                    black to exactly FORM_BG while leaving the light text alone.
                    The negative top crops the theme band above the first question. */}
                <iframe
                  ref={frameRef}
                  name="survey123webform"
                  title={survey.title}
                  src={embedUrl}
                  onLoad={() => setLoaded(true)}
                  className="absolute inset-x-0 w-full border-0"
                  style={{
                    top: -THEME_BAND,
                    height: `calc(100% + ${THEME_BAND}px)`,
                    filter: 'invert(1) hue-rotate(180deg)',
                    mixBlendMode: 'screen',
                  }}
                  allow="geolocation https://survey123.arcgis.com; camera https://survey123.arcgis.com; microphone https://survey123.arcgis.com"
                />
              </BrowserChrome>

              <p className="mt-3 text-center text-[11px] text-slate-500">
                Trouble loading?{' '}
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-emerald hover:underline"
                >
                  Open the form in a new tab
                </a>
                .
              </p>
            </div>

            {/* Details */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-emerald/30 bg-brand-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-emerald">
                  <Radio className="h-3.5 w-3.5" /> Live Form
                </span>
                <span className="chip border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald">
                  {survey.category}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                {survey.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-emerald">{survey.tagline}</p>
              <p className="mt-4 leading-relaxed text-slate-400">{survey.description}</p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {survey.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-center"
                  >
                    <div className="font-display text-base font-bold text-white">{m.value}</div>
                    <div className="text-[11px] text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {survey.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {survey.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a href={formUrl} target="_blank" rel="noreferrer" className="btn-primary group/btn">
                  Open Full Form
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
