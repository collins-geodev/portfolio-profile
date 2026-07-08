import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  value: number
  decimals?: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

/** Animated count-up that fires once when scrolled into view. */
export function Counter({
  value,
  decimals = 0,
  duration = 1.9,
  prefix = '',
  suffix = '',
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
      else setDisplay(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString('en-US')

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
