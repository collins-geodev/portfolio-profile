import { useEffect, useRef, useState } from 'react'
import { Check, ExternalLink, Loader2, MapPinned } from 'lucide-react'
import { survey } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const formUrl = `https://survey123.arcgis.com/share/${survey.itemId}`

interface WebFormMessage {
  event?: string
  contentHeight?: number
}

const loadedEvents = ['survey123:webform:formLoaded', 'survey123:onFormLoaded']

export function Survey() {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState<number | null>(null)
  const [loaded, setLoaded] = useState(false)

  /* The web form posts its rendered height back to us so the iframe can grow
     to fit the questions instead of scrolling inside a fixed box. */
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
              Capture network assets with <span className="text-gradient">Survey123</span>
            </>
          }
          subtitle={survey.description}
        />

        <Reveal className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {survey.highlights.map((h) => (
            <span key={h} className="chip">
              <Check className="h-3.5 w-3.5 text-brand-emerald" />
              {h}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-3 shadow-card sm:p-4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-3 pt-1">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan">
                  <MapPinned className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-sm font-semibold text-white">{survey.title}</p>
                  <p className="text-[11px] text-slate-400">{survey.tagline}</p>
                </div>
              </div>
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !px-4 !py-2 text-[13px]"
              >
                <ExternalLink className="h-4 w-4" />
                Open full screen
              </a>
            </div>

            {/* Viewport-sized box; the web form posts its own height when it
                supports the handshake, in which case we grow to fit exactly. */}
            <div
              className="relative w-full overflow-hidden rounded-2xl bg-white"
              style={height ? { height } : { height: 'min(85vh, 880px)', minHeight: 580 }}
            >
              {!loaded && (
                <div className="absolute inset-0 z-10 grid place-items-center bg-ink-900">
                  <div className="flex flex-col items-center gap-3 text-slate-400">
                    <Loader2 className="h-6 w-6 animate-spin text-brand-cyan" />
                    <p className="text-sm">Loading the survey form…</p>
                  </div>
                </div>
              )}
              <iframe
                ref={frameRef}
                name="survey123webform"
                title={survey.title}
                src={formUrl}
                onLoad={() => setLoaded(true)}
                frameBorder={0}
                className="absolute inset-0 h-full w-full border-0"
                allow="geolocation https://survey123.arcgis.com; camera https://survey123.arcgis.com; microphone https://survey123.arcgis.com; local-network-access"
              />
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-500">
            Responses feed the enterprise geodatabase behind the dashboards above. Not loading?{' '}
            <a href={formUrl} target="_blank" rel="noreferrer" className="text-brand-cyan hover:underline">
              Open the form in a new tab
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
