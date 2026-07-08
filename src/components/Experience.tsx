import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Briefcase, MapPin, ChevronRight } from 'lucide-react'
import { experience } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 60%'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 })

  return (
    <section id="experience" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Career Journey"
          title={
            <>
              19+ years across <span className="text-gradient">utility, oil &amp; gas &amp; geoscience</span>
            </>
          }
          subtitle="From geological field surveys to governing the geospatial backbone of Nigeria's largest electricity distributor."
        />

        <div ref={ref} className="relative mt-16 pl-2">
          {/* rail */}
          <div className="absolute left-[15px] top-2 h-full w-px bg-white/10 sm:left-[19px]" />
          <motion.div
            className="absolute left-[15px] top-2 w-px origin-top bg-gradient-to-b from-brand-cyan via-brand-teal to-brand-violet sm:left-[19px]"
            style={{ scaleY: lineScale, height: '100%' }}
          />

          <div className="space-y-9">
            {experience.map((role, i) => (
              <Reveal key={`${role.company}-${role.period}`} delay={i * 0.04} className="relative pl-12 sm:pl-16">
                {/* node */}
                <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-ink-850 sm:h-10 sm:w-10">
                  <span
                    className={`grid h-full w-full place-items-center rounded-full ${
                      role.current ? 'bg-brand-cyan/15 text-brand-cyan' : 'text-slate-400'
                    }`}
                  >
                    <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  {role.current && (
                    <span className="absolute inset-0 animate-ping rounded-full border border-brand-cyan/40" />
                  )}
                </span>

                <div className="glass rounded-2xl p-5 transition-colors hover:border-brand-cyan/30 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                        {role.title}
                      </h3>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
                        <span className="font-medium text-brand-cyan">{role.company}</span>
                        <span className="text-slate-600">·</span>
                        <span className="inline-flex items-center gap-1 text-slate-400">
                          <MapPin className="h-3 w-3" />
                          {role.location}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`inline-flex w-fit shrink-0 items-center rounded-full border px-3 py-1 text-xs font-medium ${
                        role.current
                          ? 'border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald'
                          : 'border-white/10 bg-white/[0.03] text-slate-400'
                      }`}
                    >
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-1 text-xs italic text-slate-500">{role.note}</p>

                  <ul className="mt-4 space-y-2">
                    {role.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-slate-400">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal/70" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
