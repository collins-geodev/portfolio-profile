import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  MousePointer2,
} from 'lucide-react'
import portrait from '../assets/collins.jpg'
import { profile, contact, heroStats } from '../data/content'
import { AuroraBackground, GridOverlay, ParticleField } from './ui/Backgrounds'
import { Typewriter } from './ui/Typewriter'
import { Counter } from './ui/Counter'

const orbitBadges = [
  { label: 'PostGIS', angle: -18, r: 1, delay: 0 },
  { label: 'ArcGIS', angle: 60, r: 1, delay: 0.4 },
  { label: 'Python', angle: 150, r: 1, delay: 0.8 },
  { label: 'Power BI', angle: 220, r: 1, delay: 1.2 },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-12"
    >
      <ParticleField className="opacity-70" />
      <AuroraBackground />
      <GridOverlay />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="container-max relative grid grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-12">
        {/* ---- Copy ---- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-emerald/30 bg-brand-emerald/10 px-4 py-1.5 text-sm font-medium text-brand-emerald"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-emerald" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl"
          >
            <span className="text-white">{profile.firstName}</span>{' '}
            <span className="text-gradient animate-gradient-x">{profile.lastName}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-4 flex min-h-[2.4rem] items-center text-xl font-semibold text-slate-200 sm:text-2xl"
          >
            <Typewriter words={profile.roles} className="font-display" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {profile.tagline}{' '}
            <span className="text-slate-300">
              Enterprise geodatabases, spatial ETL automation and decision-grade dashboards for the
              utility, oil &amp; gas and geoscience sectors.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary group">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={contact.resume} target="_blank" rel="noreferrer" className="btn-ghost group">
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand-cyan" />
              {profile.location}
            </span>
            <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <Github className="h-4 w-4 text-brand-cyan" />
              {contact.githubUser}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <Linkedin className="h-4 w-4 text-brand-cyan" />
              in/collinsanyanwu
            </a>
          </motion.div>
        </div>

        {/* ---- Portrait ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative mx-auto aspect-square w-[78%] sm:w-[85%]">
            {/* rotating conic ring */}
            <div className="absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,#22d3ee,#2dd4bf,#8b5cf6,#22d3ee)] opacity-40 blur-md animate-spin-slow" />
            <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_180deg,#22d3ee,#8b5cf6,#2dd4bf,#22d3ee)] opacity-70 animate-spin-slow [animation-direction:reverse]" />
            <div className="absolute inset-0 rounded-full bg-ink-900" />
            <img
              src={portrait}
              alt={`${profile.name} — ${profile.title}`}
              className="absolute inset-[6px] h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-full object-cover object-center shadow-glow-lg"
              loading="eager"
            />
            <div className="absolute inset-[6px] rounded-full ring-1 ring-inset ring-white/10" />

            {/* pulse rings */}
            <span className="absolute inset-0 rounded-full border border-brand-cyan/20 animate-pulse-ring" />

            {/* orbiting tech badges */}
            {orbitBadges.map((b) => {
              const rad = (b.angle * Math.PI) / 180
              const radius = 54 // percentage from center
              const x = 50 + Math.cos(rad) * radius
              const y = 50 + Math.sin(rad) * radius
              return (
                <motion.span
                  key={b.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + b.delay, type: 'spring', stiffness: 260, damping: 18 }}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-ink-850/90 px-3 py-1 text-xs font-semibold text-white shadow-card backdrop-blur animate-float"
                  style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${b.delay}s` }}
                >
                  {b.label}
                </motion.span>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* ---- Stat strip ---- */}
      <div className="container-max relative mt-12 px-5 sm:px-8 lg:mt-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="glass grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4 sm:divide-x sm:divide-white/10"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 px-5 py-4 sm:px-6">
              <s.icon className="h-6 w-6 shrink-0 text-brand-cyan" />
              <div>
                <div className="font-display text-xl font-bold text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="pointer-events-auto absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-brand-cyan xl:flex"
        aria-label="Scroll to about"
      >
        <MousePointer2 className="h-4 w-4 animate-float" />
      </a>
    </section>
  )
}
