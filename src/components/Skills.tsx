import { motion } from 'framer-motion'
import { skillCategories } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { StaggerGroup, staggerItem } from './ui/Reveal'

const marqueeTech = [
  'ArcGIS Pro',
  'PostgreSQL / PostGIS',
  'Python · ArcPy',
  'FME',
  'Power BI',
  'QGIS',
  'GeoPandas',
  'SQL Server',
  'Survey123',
  'Tableau',
  'Oracle Spatial',
  'React · Next.js',
  'Leaflet.js',
  'AWS',
  'Docker',
  'Google Earth Engine',
]

export function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines [background-size:60px_60px] opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-max relative">
        <SectionHeading
          eyebrow="Technical Toolkit"
          title={
            <>
              Tools I use to <span className="text-gradient">turn data into decisions</span>
            </>
          }
          subtitle="A full-stack geospatial skill set spanning enterprise databases, GIS platforms, automation and business intelligence."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-card"
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${cat.accent} opacity-[0.14] blur-2xl transition-opacity duration-300 group-hover:opacity-25`}
              />
              <div className="relative flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${cat.accent} text-ink-950 shadow-lg`}
                >
                  <cat.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-400">{cat.skills.length} technologies</p>
                </div>
              </div>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="chip hover:border-brand-cyan/40 hover:bg-brand-cyan/10 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-16 mask-fade-x">
        <div className="flex w-max animate-marquee gap-4 will-change-transform">
          {[...marqueeTech, ...marqueeTech].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-mono text-sm text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
