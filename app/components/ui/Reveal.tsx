'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  // Always false on first render, on both server and client — `typeof
  // IntersectionObserver === 'undefined'` is also true during SSR (no DOM
  // APIs in Node), so branching on it here caused a hydration mismatch:
  // the server rendered "visible", the browser's first paint rendered
  // "hidden". Environment detection only happens client-side, in the effect.
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      // Extremely old browser with no IntersectionObserver: reveal on the
      // next frame instead of leaving the content hidden forever. Deferred
      // via rAF (a callback), not called synchronously in the effect body.
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '-80px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className ?? ''}`}
      style={{ transitionDelay: visible && delay ? `${delay}s` : '0s' }}
    >
      {children}
    </div>
  )
}
