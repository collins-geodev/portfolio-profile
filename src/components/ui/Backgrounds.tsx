import { useEffect, useRef } from 'react'

/** Soft animated aurora blobs used behind hero / sections. */
export function AuroraBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -left-32 top-0 h-[38rem] w-[38rem] rounded-full bg-brand-cyan/20 blur-[120px] animate-aurora" />
      <div className="absolute right-[-10rem] top-24 h-[34rem] w-[34rem] rounded-full bg-brand-violet/20 blur-[130px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-[-12rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-brand-emerald/15 blur-[130px] animate-aurora [animation-delay:-12s]" />
    </div>
  )
}

/** Subtle moving grid — evokes a coordinate / map graticule. */
export function GridOverlay({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-grid-lines [background-size:48px_48px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] ${className}`}
      aria-hidden
    />
  )
}

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * Lightweight constellation canvas: drifting nodes joined by lines when
 * close, with a gentle pull toward the cursor. Pauses when off-screen or
 * when the user prefers reduced motion.
 */
export function ParticleField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    let nodes: Node[] = []
    const mouse = { x: -9999, y: -9999 }
    let raf = 0
    let running = true

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(70, Math.floor((width * height) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const dist = Math.hypot(dx, dy)
        if (dist < 140) {
          n.x -= dx * 0.0016
          n.y -= dy * 0.0016
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(56, 189, 248, 0.75)'
        ctx.fill()
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 128) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.14 * (1 - d / 128)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      if (running) raf = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    if (reduce) {
      draw() // one static frame
      return
    }
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
      if (running) raf = requestAnimationFrame(draw)
      else cancelAnimationFrame(raf)
    })
    io.observe(canvas)

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      io.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} aria-hidden />
}
