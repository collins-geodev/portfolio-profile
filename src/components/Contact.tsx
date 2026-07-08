import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'
import { contact, profile } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const infoCards = [
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phoneHref}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contact.location,
    href: undefined,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: contact.linkedinLabel,
    href: contact.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: contact.githubLabel,
    href: contact.github,
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`,
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const field =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-brand-cyan/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20'

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-cyan/10 blur-[120px]" />
      <div className="container-max relative">
        <SectionHeading
          eyebrow="Get in Touch"
          title={
            <>
              Let&apos;s build the <span className="text-gradient">spatial data layer</span> for
              your next project
            </>
          }
          subtitle="Open to remote and international opportunities in database administration, GIS and geoscience data management."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <div className="space-y-3">
            {infoCards.map((c, i) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const Wrapper: any = c.href ? motion.a : motion.div
              return (
                <Reveal key={c.label} delay={i * 0.05}>
                  <Wrapper
                    {...(c.href ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan/30"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-cyan/10 text-brand-cyan transition-colors group-hover:bg-brand-cyan group-hover:text-ink-950">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wide text-slate-500">{c.label}</div>
                      <div className="truncate text-sm font-medium text-white">{c.value}</div>
                    </div>
                    {c.href && (
                      <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500 transition-colors group-hover:text-brand-cyan" />
                    )}
                  </Wrapper>
                </Reveal>
              )
            })}

            <Reveal delay={0.3}>
              <div className="flex items-center gap-3 rounded-2xl border border-brand-emerald/20 bg-brand-emerald/[0.05] p-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-emerald opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-emerald" />
                </span>
                <span className="text-sm font-medium text-brand-emerald">
                  {profile.availability}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="left" className="glass rounded-3xl p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={field}
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-400" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} resize-none`}
                  placeholder="Tell me about your project or opportunity…"
                />
              </div>
              <button type="submit" className="btn-primary w-full group">
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Opening your mail app…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    Send Message
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-500">
                Prefer email? Reach me directly at{' '}
                <a href={`mailto:${contact.email}`} className="text-brand-cyan hover:underline">
                  {contact.email}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
