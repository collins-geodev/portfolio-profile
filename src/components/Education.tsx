import { motion } from 'framer-motion'
import { GraduationCap, Award, BadgeCheck, Loader2 } from 'lucide-react'
import { education, certifications } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { StaggerGroup, staggerItem, Reveal } from './ui/Reveal'

export function Education() {
  return (
    <section id="education" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand-violet/10 blur-[120px]" />
      <div className="container-max relative">
        <SectionHeading
          eyebrow="Education & Certifications"
          title={
            <>
              Academic grounding &amp; <span className="text-gradient">continuous learning</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* Education */}
          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.08}>
                <div className="glass group flex items-start gap-4 rounded-2xl p-6 transition-colors hover:border-brand-cyan/30">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-teal text-ink-950">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold leading-snug text-white">
                      {e.degree}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{e.school}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-brand-emerald/20 bg-brand-emerald/[0.05] p-6">
                <div className="flex items-center gap-2 text-brand-emerald">
                  <Award className="h-5 w-5" />
                  <span className="text-sm font-semibold">Professional standing</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  GISP certification in progress with GISCI — advancing formal recognition of 19+
                  years of applied GIS and geodatabase practice.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              <BadgeCheck className="h-4 w-4" />
              Certifications
            </div>
            <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.07}>
              {certifications.map((c) => {
                const inProgress = c.year.toLowerCase().includes('progress')
                return (
                  <motion.div
                    key={c.name}
                    variants={staggerItem}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/30"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-cyan/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative flex items-center justify-between">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl ${
                          inProgress
                            ? 'bg-amber-400/10 text-amber-300'
                            : 'bg-brand-cyan/10 text-brand-cyan'
                        }`}
                      >
                        {inProgress ? (
                          <Loader2 className="h-5 w-5 animate-spin-slow" />
                        ) : (
                          <BadgeCheck className="h-5 w-5" />
                        )}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                          inProgress
                            ? 'bg-amber-400/10 text-amber-300'
                            : 'bg-white/[0.04] text-slate-400'
                        }`}
                      >
                        {c.year}
                      </span>
                    </div>
                    <h3 className="relative mt-4 font-display text-sm font-semibold leading-snug text-white">
                      {c.name}
                    </h3>
                    <p className="relative mt-1 text-xs text-slate-400">{c.issuer}</p>
                  </motion.div>
                )
              })}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
