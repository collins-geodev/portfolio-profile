import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl gap-4`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/25 bg-brand-cyan/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cyan">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-glow" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && <p className="text-base leading-relaxed text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
