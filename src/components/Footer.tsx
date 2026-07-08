import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { contact, navLinks, profile } from '../data/content'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
      <div className="container-max px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-ink-850 font-display text-lg font-bold">
                <span className="text-gradient">CA</span>
              </span>
              <span className="font-display text-base font-semibold text-white">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {profile.title} — {profile.subtitle}. Turning geological, spatial and operational data
              into decisions that power millions.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Github, href: contact.github, label: 'GitHub' },
                { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:text-brand-cyan"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-400 transition-colors hover:text-brand-cyan">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-brand-cyan">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phoneHref}`} className="transition-colors hover:text-brand-cyan">
                  {contact.phone}
                </a>
              </li>
              <li>{contact.location}</li>
              <li>
                <a href={contact.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-cyan">
                  {contact.githubLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 {profile.name}. Built with React, TypeScript, Tailwind &amp; Framer Motion.
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-brand-cyan/40 hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
