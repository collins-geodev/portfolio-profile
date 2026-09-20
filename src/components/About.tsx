import { motion } from 'framer-motion'
import { Quote, GraduationCap, Compass, Sparkles } from 'lucide-react'
import { profile, competencies, impactStats } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal, StaggerGroup, staggerItem } from './ui/Reveal'
import { Counter } from './ui/Counter'

const decimalsFor = (v: number) => (Number.isInteger(v) ? 0 : 1)

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              The spatial intelligence layer behind{' '}
              <span className="text-gradient">Africa&apos;s largest utility</span>
            </>
          }
          subtitle="Geologist by training, GIS developer and enterprise administrator by craft — building and governing the systems that keep a 1M+ customer network running."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Narrative */}
          <Reveal className="glass relative overflow-hidden rounded-3xl p-7 sm:p-9">
            <Quote className="absolute right-6 top-6 h-16 w-16 text-brand-cyan/10" />
            <p className="relative text-lg leading-relaxed text-slate-300">{profile.summary}</p>

            <div className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Geoscience foundation</div>
                  <div className="text-sm text-slate-400">
                    B.Tech Geology · Master&apos;s in GIS
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-violet/10 text-brand-violet">
                  <Compass className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Field to production</div>
                  <div className="text-sm text-slate-400">
                    GNSS surveys to enterprise geodatabases
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Competencies */}
          <Reveal direction="left" className="glass rounded-3xl p-7 sm:p-9">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              <Sparkles className="h-4 w-4" />
              Core Competencies
            </div>
            <StaggerGroup className="mt-6 grid grid-cols-1 gap-2.5" stagger={0.06}>
              {competencies.map((c) => (
                <motion.div
                  key={c.label}
                  variants={staggerItem}
                  className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-colors hover:border-brand-cyan/30 hover:bg-white/[0.04]"
                >
                  <c.icon className="h-5 w-5 shrink-0 text-brand-teal transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium text-slate-300">{c.label}</span>
                </motion.div>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>

        {/* Impact metrics */}
        <StaggerGroup
          className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
          stagger={0.07}
        >
          {impactStats.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-colors hover:border-brand-cyan/40"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-8 h-16 bg-brand-cyan/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <s.icon className="mx-auto h-6 w-6 text-brand-cyan" />
              <div className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                <Counter value={s.value} suffix={s.suffix} decimals={decimalsFor(s.value)} />
              </div>
              <div className="mt-1 text-xs leading-tight text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
