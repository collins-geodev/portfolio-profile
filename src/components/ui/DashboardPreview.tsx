import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { QrCode, ScanLine, MapPin, Layers, Database, Bot, TrendingUp } from 'lucide-react'
import type { PreviewKind } from '../../data/content'

/* ----------------------------- primitives ----------------------------- */

const accentHex: Record<string, { a: string; b: string }> = {
  cyan: { a: '#22d3ee', b: '#38bdf8' },
  violet: { a: '#8b5cf6', b: '#6366f1' },
  emerald: { a: '#10b981', b: '#2dd4bf' },
}

export function BrowserChrome({
  url,
  accent = 'cyan',
  children,
}: {
  url: string
  accent?: 'cyan' | 'violet' | 'emerald'
  children: ReactNode
}) {
  const c = accentHex[accent]
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-card">
      <div className="flex items-center gap-2 border-b border-white/10 bg-ink-850 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex max-w-[70%] items-center gap-2 truncate rounded-lg border border-white/10 bg-ink-950/70 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.a }} />
          <span className="truncate font-mono text-[11px] text-slate-400">{url}</span>
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-ink-900 to-ink-950 p-3.5 sm:p-4">
        {children}
      </div>
    </div>
  )
}

function Bar({ h, delay, color }: { h: number; delay: number; color: string }) {
  return (
    <motion.div
      className="w-full rounded-t-[3px]"
      style={{ background: color }}
      initial={{ height: 0 }}
      whileInView={{ height: `${h}%` }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}

function Donut({ pct, color }: { pct: number; color: string }) {
  const r = 22
  const circ = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 56 56" className="h-16 w-16 -rotate-90">
      <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
      <motion.circle
        cx="28"
        cy="28"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ * (1 - pct / 100) }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />
    </svg>
  )
}

/** Stylised geospatial network with pulsing asset pins. */
function MiniMap({ accent, dots = 7 }: { accent: 'cyan' | 'violet' | 'emerald'; dots?: number }) {
  const c = accentHex[accent]
  const points = Array.from({ length: dots }, (_, i) => ({
    x: 12 + ((i * 37) % 78),
    y: 14 + ((i * 53) % 62),
    d: (i % 4) * 0.4,
  }))
  return (
    <svg viewBox="0 0 100 80" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`mm-${accent}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c.a} stopOpacity="0.25" />
          <stop offset="1" stopColor={c.b} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="100" height="80" fill={`url(#mm-${accent})`} />
      {[16, 32, 48, 64].map((y) => (
        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />
      ))}
      {[20, 40, 60, 80].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />
      ))}
      <motion.path
        d="M6 60 L28 44 L46 52 L64 30 L86 38"
        fill="none"
        stroke={c.a}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeDasharray="1.5 2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
      {points.map((p, i) => (
        <g key={i}>
          <motion.circle
            cx={p.x}
            cy={p.y}
            r="4.5"
            fill={c.a}
            opacity="0.25"
            animate={{ r: [3, 6, 3], opacity: [0.25, 0, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: p.d }}
          />
          <circle cx={p.x} cy={p.y} r="1.7" fill={c.b} />
        </g>
      ))}
    </svg>
  )
}

function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-white/10 bg-white/[0.03] ${className}`}>{children}</div>
  )
}

/* ------------------------------- QR view ------------------------------- */

function QrPreview() {
  const color = accentHex.cyan.a
  return (
    <div className="grid h-full grid-cols-[1.05fr_1fr] gap-3">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
          <QrCode className="h-3.5 w-3.5 text-brand-cyan" /> Smart QR Registry
        </div>
        <Panel className="relative grid flex-1 place-items-center overflow-hidden p-3">
          <div className="relative grid h-[62%] w-[62%] place-items-center rounded-lg border border-brand-cyan/40 bg-ink-950">
            <QrCode className="h-3/4 w-3/4 text-white/85" strokeWidth={1.2} />
            <motion.div
              className="absolute inset-x-2 h-0.5 rounded bg-brand-cyan shadow-glow"
              animate={{ top: ['12%', '84%', '12%'] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            {['left-1 top-1', 'right-1 top-1', 'left-1 bottom-1', 'right-1 bottom-1'].map((p) => (
              <span key={p} className={`absolute ${p} h-3 w-3 border-brand-cyan/80`} style={{ borderTopWidth: p.includes('top') ? 2 : 0, borderBottomWidth: p.includes('bottom') ? 2 : 0, borderLeftWidth: p.includes('left') ? 2 : 0, borderRightWidth: p.includes('right') ? 2 : 0 }} />
            ))}
          </div>
          <div className="mt-2 flex items-center gap-1 text-[9px] font-medium text-brand-cyan">
            <ScanLine className="h-3 w-3" /> Scanning DT-04821…
          </div>
        </Panel>
        <div className="grid grid-cols-2 gap-2">
          {[
            { k: 'Scans today', v: '1,284' },
            { k: 'Uptime', v: '99.9%' },
          ].map((s) => (
            <Panel key={s.k} className="px-2.5 py-1.5">
              <div className="font-display text-sm font-bold text-white">{s.v}</div>
              <div className="text-[9px] text-slate-400">{s.k}</div>
            </Panel>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <Panel className="relative flex-1 overflow-hidden">
          <MiniMap accent="cyan" dots={8} />
          <div className="absolute left-2 top-2 flex items-center gap-1 rounded bg-ink-950/70 px-1.5 py-0.5 text-[9px] text-white">
            <MapPin className="h-2.5 w-2.5 text-brand-cyan" /> Asset map
          </div>
        </Panel>
        <Panel className="p-2">
          <div className="mb-1 text-[9px] font-semibold uppercase tracking-wide text-slate-400">
            Recent scans
          </div>
          {[
            ['PT-1180 · Ikeja', color],
            ['DT-04821 · Shomolu', '#2dd4bf'],
            ['DT-07310 · Oshodi', '#8b5cf6'],
          ].map(([t, c]) => (
            <div key={t} className="flex items-center gap-1.5 py-0.5 text-[10px] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />
              <span className="truncate">{t}</span>
              <span className="ml-auto font-mono text-[8px] text-slate-500">verified</span>
            </div>
          ))}
        </Panel>
      </div>
    </div>
  )
}

/* ---------------------------- Asset dashboard -------------------------- */

function AssetPreview() {
  const tabs = ['Executive', 'Network', 'Metering', 'DT Map', 'Table']
  const bars = [72, 54, 88, 40, 63, 48, 30]
  return (
    <div className="grid h-full grid-cols-[70px_1fr] gap-3">
      <div className="flex flex-col gap-1.5">
        <div className="mb-1 flex items-center gap-1 text-[10px] font-bold text-white">
          <Layers className="h-3 w-3 text-brand-violet" /> IE&nbsp;Assets
        </div>
        {tabs.map((t, i) => (
          <div
            key={t}
            className={`truncate rounded-md px-2 py-1 text-[9px] ${
              i === 0
                ? 'bg-brand-violet/20 font-semibold text-white'
                : 'text-slate-400'
            }`}
          >
            {t}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="grid grid-cols-3 gap-2">
          {[
            { v: '20,641', k: 'Transformers' },
            { v: '23', k: 'Data layers' },
            { v: '99.9%', k: 'Uptime' },
          ].map((s) => (
            <Panel key={s.k} className="px-2 py-1.5">
              <div className="font-display text-[13px] font-bold text-white">{s.v}</div>
              <div className="text-[8px] text-slate-400">{s.k}</div>
            </Panel>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-[1.4fr_1fr] gap-2">
          <Panel className="flex flex-col p-2">
            <div className="mb-1 text-[9px] text-slate-400">Transformers by BU</div>
            <div className="flex flex-1 items-end gap-1.5">
              {bars.map((h, i) => (
                <Bar key={i} h={h} delay={i * 0.08} color={i % 2 ? '#8b5cf6' : '#6366f1'} />
              ))}
            </div>
          </Panel>
          <Panel className="flex flex-col items-center justify-center p-2">
            <div className="mb-1 self-start text-[9px] text-slate-400">Metering</div>
            <div className="relative grid place-items-center">
              <Donut pct={78} color="#8b5cf6" />
              <span className="absolute font-display text-[11px] font-bold text-white">78%</span>
            </div>
          </Panel>
        </div>
        <Panel className="flex items-center gap-2 p-1.5">
          <Bot className="h-3.5 w-3.5 shrink-0 text-brand-violet" />
          <div className="truncate rounded bg-ink-950/60 px-2 py-1 text-[9px] text-slate-400">
            “How many unmetered DTs in Ikeja?” — Data Intelligence Assistant
          </div>
        </Panel>
      </div>
    </div>
  )
}

/* ----------------------------- IDB dashboard -------------------------- */

function IdbPreview() {
  const vendorBars = [64, 82, 46, 70, 55]
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
        <Database className="h-3.5 w-3.5 text-brand-emerald" /> IDB 3.0 · Asset Tagging Monitor
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { v: '9,412', k: 'Total poles' },
          { v: '7,180', k: 'Good' },
          { v: '1,244', k: 'Replace' },
          { v: '988', k: 'New' },
        ].map((s, i) => (
          <Panel key={s.k} className="px-2 py-1.5">
            <div className="font-display text-[12px] font-bold" style={{ color: ['#2dd4bf', '#10b981', '#f59e0b', '#22d3ee'][i] }}>
              {s.v}
            </div>
            <div className="text-[8px] text-slate-400">{s.k}</div>
          </Panel>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-[1fr_1.15fr] gap-2">
        <Panel className="flex flex-col p-2">
          <div className="mb-1 text-[9px] text-slate-400">Assets by vendor</div>
          <div className="flex flex-1 items-end gap-2">
            {vendorBars.map((h, i) => (
              <Bar key={i} h={h} delay={i * 0.09} color={i % 2 ? '#10b981' : '#2dd4bf'} />
            ))}
          </div>
        </Panel>
        <Panel className="relative overflow-hidden">
          <MiniMap accent="emerald" dots={9} />
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded bg-ink-950/70 px-1.5 py-0.5 text-[9px] text-white">
            <TrendingUp className="h-2.5 w-2.5 text-brand-emerald" /> Run-rate 52/day
          </div>
        </Panel>
      </div>
      <Panel className="p-1.5">
        <div className="flex items-center justify-between text-[9px] text-slate-400">
          <span>DT performance &amp; field-officer analysis</span>
          <span className="font-mono text-brand-emerald">20 feeders</span>
        </div>
        <div className="mt-1 flex gap-1">
          {[88, 72, 64, 91, 58, 80].map((w, i) => (
            <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-brand-emerald"
                initial={{ width: 0 }}
                whileInView={{ width: `${w}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.06 }}
              />
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}

/* ------------------------------- generic ------------------------------ */

function GenericPreview({ accent }: { accent: 'cyan' | 'violet' | 'emerald' }) {
  const c = accentHex[accent]
  return (
    <div className="grid h-full grid-cols-2 gap-2.5">
      <Panel className="flex flex-col p-2">
        <div className="mb-1 text-[9px] text-slate-400">Trend</div>
        <svg viewBox="0 0 100 50" className="flex-1">
          <motion.path
            d="M2 42 L18 30 L34 36 L52 16 L70 24 L86 8 L98 14"
            fill="none"
            stroke={c.a}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          />
        </svg>
      </Panel>
      <div className="grid grid-rows-2 gap-2.5">
        <Panel className="flex items-center justify-center">
          <Donut pct={66} color={c.a} />
        </Panel>
        <Panel className="flex items-end gap-1.5 p-2">
          {[50, 74, 40, 88, 60].map((h, i) => (
            <Bar key={i} h={h} delay={i * 0.08} color={i % 2 ? c.a : c.b} />
          ))}
        </Panel>
      </div>
    </div>
  )
}

/* ------------------------------- router ------------------------------- */

export function DashboardPreview({
  kind,
  accent,
}: {
  kind: PreviewKind
  accent: 'cyan' | 'violet' | 'emerald'
}) {
  if (kind === 'qr') return <QrPreview />
  if (kind === 'asset') return <AssetPreview />
  if (kind === 'idb') return <IdbPreview />
  return <GenericPreview accent={accent} />
}
