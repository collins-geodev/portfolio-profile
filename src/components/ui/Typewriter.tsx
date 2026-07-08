import { useEffect, useState } from 'react'

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pause?: number
  className?: string
}

/** Rotating typewriter effect that types and deletes each phrase in turn. */
export function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 38,
  pause = 1500,
  className,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const delta = deleting ? deletingSpeed : typingSpeed
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      )
    }, delta)
    return () => clearTimeout(t)
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block w-[3px] translate-y-0.5 animate-blink bg-brand-cyan align-middle" style={{ height: '1em' }} />
    </span>
  )
}
