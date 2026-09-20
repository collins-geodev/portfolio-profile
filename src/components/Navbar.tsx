import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'
import { navLinks, contact, profile } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/70 backdrop-blur-xl' : 'bg-transparent'
      }`}
      style={{ height: 'var(--nav-h)' }}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] origin-left bg-brand-gradient"
        style={{ scaleX: progress, width: '100%' }}
      />
      <nav className="container-max flex h-full items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Collins Anyanwu — home">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-ink-850 font-display text-lg font-bold text-white shadow-inset-line">
            <span className="text-gradient">CA</span>
            <span className="absolute inset-0 rounded-xl ring-1 ring-brand-cyan/0 transition group-hover:ring-brand-cyan/40" />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-sm font-semibold text-white">Collins Anyanwu</span>
            <span className="text-[11px] tracking-wide text-slate-400">{profile.title}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-brand-cyan/30 bg-white/[0.05]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden !px-5 !py-2.5 text-[13px] sm:inline-flex"
          >
            <FileText className="h-4 w-4" />
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-full origin-top border-b border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={contact.resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                <FileText className="h-4 w-4" />
                Download Résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
