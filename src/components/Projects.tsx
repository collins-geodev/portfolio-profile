import { forwardRef, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Star, ExternalLink, Layers3 } from 'lucide-react'
import {
  projects,
  projectFilters,
  type Project,
  type ProjectCategory,
} from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { TiltCard } from './ui/TiltCard'
import { BrowserChrome, DashboardPreview } from './ui/DashboardPreview'

const accentText: Record<string, string> = {
  cyan: 'text-brand-cyan',
  violet: 'text-brand-violet',
  emerald: 'text-brand-emerald',
}
const accentBorder: Record<string, string> = {
  cyan: 'hover:border-brand-cyan/40',
  violet: 'hover:border-brand-violet/40',
  emerald: 'hover:border-brand-emerald/40',
}
const accentChip: Record<string, string> = {
  cyan: 'border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan',
  violet: 'border-brand-violet/30 bg-brand-violet/10 text-brand-violet',
  emerald: 'border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald',
}

/* --------------------------- featured showcase -------------------------- */

function FeaturedShowcase({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1
  return (
    <Reveal className="group relative">
      <div
        className={`grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-7 lg:grid-cols-2 lg:gap-12 lg:p-9 ${accentBorder[project.accent]} transition-colors`}
      >
        {/* Preview */}
        <div className={`perspective ${reversed ? 'lg:order-2' : ''}`}>
          <TiltCard className="group" max={7}>
            <BrowserChrome url={project.liveUrl ?? 'localhost'} accent={project.accent}>
              <DashboardPreview kind={project.preview} accent={project.accent} />
            </BrowserChrome>
          </TiltCard>
        </div>

        {/* Details */}
        <div className={reversed ? 'lg:order-1' : ''}>
          <div className="flex flex-wrap items-center gap-2">
            {project.flagship && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
                <Star className="h-3.5 w-3.5 fill-amber-300" /> Flagship Project
              </span>
            )}
            <span className={`chip ${accentChip[project.accent]}`}>{project.category}</span>
          </div>

          <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className={`mt-1 text-sm font-medium ${accentText[project.accent]}`}>
            {project.tagline}
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">{project.description}</p>

          {project.metrics && (
            <div className="mt-5 grid grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-center">
                  <div className="font-display text-base font-bold text-white">{m.value}</div>
                  <div className="text-[11px] text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {project.features && (
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accentText[project.accent]}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <div className="mt-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary group/btn"
              >
                Open Live App
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  )
}

/* ------------------------------ grid card ------------------------------ */

const ProjectCard = forwardRef<HTMLElement, { project: Project }>(({ project }, ref) => {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${accentBorder[project.accent]}`}
    >
      <div className="relative border-b border-white/10 p-3">
        <div className="aspect-[16/9] overflow-hidden rounded-lg">
          <div className="h-full w-full bg-gradient-to-br from-ink-900 to-ink-950 p-3">
            <DashboardPreview kind={project.preview} accent={project.accent} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display text-lg font-semibold text-white">{project.title}</h4>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`shrink-0 rounded-lg border border-white/10 p-1.5 text-slate-400 transition-colors hover:text-white ${accentBorder[project.accent]}`}
              aria-label={`Open ${project.title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className="chip !px-2.5 !py-0.5 !text-[11px]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
})
ProjectCard.displayName = 'ProjectCard'

/* ------------------------------ section -------------------------------- */

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  const availableFilters = useMemo(() => {
    const present = new Set(rest.map((p) => p.category))
    return projectFilters.filter((f) => f === 'All' || present.has(f as ProjectCategory))
  }, [rest])

  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const visible = filter === 'All' ? rest : rest.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Live products, dashboards &amp; <span className="text-gradient">geospatial apps</span>
            </>
          }
          subtitle="Enterprise-grade platforms built for a 1M+ customer utility — from QR-powered field intelligence to executive analytics."
        />

        <div className="mt-14 space-y-8">
          {featured.map((p, i) => (
            <FeaturedShowcase key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Filterable grid */}
        <div className="mt-20">
          <div className="flex flex-col items-center gap-6">
            <Reveal className="flex items-center gap-2 text-lg font-semibold text-white">
              <Layers3 className="h-5 w-5 text-brand-cyan" />
              More Projects
            </Reveal>
            <div className="flex flex-wrap justify-center gap-2">
              {availableFilters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`relative rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    filter === f
                      ? 'border-transparent text-ink-950'
                      : 'border-white/10 text-slate-400 hover:border-brand-cyan/40 hover:text-white'
                  }`}
                >
                  {filter === f && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-brand-gradient"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">
                    {f}
                    {f !== 'All' && (
                      <span className="ml-1.5 opacity-70">
                        {rest.filter((p) => p.category === f).length}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
