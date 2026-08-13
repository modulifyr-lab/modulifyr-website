'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface RevealProps {
  children:   ReactNode
  className?: string
  delay?:     number
  variant?:   'fade-up' | 'fade-scale' | 'rotate-in'
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up'
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const prefersReduced = mediaQuery.matches

    if (prefersReduced) {
      el.style.transform = 'none'
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            if (prefersReduced) {
              el.style.transform = 'none'
            } else {
              if (variant === 'fade-up') {
                el.style.transform = 'translateY(0)'
              } else if (variant === 'fade-scale') {
                el.style.transform = 'scale(1)'
              } else if (variant === 'rotate-in') {
                el.style.transform = 'rotate(0deg) translateY(0)'
              }
            }
          }, delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, variant])

  let initialTransform = 'translateY(18px)'
  if (variant === 'fade-scale') {
    initialTransform = 'scale(0.95)'
  } else if (variant === 'rotate-in') {
    initialTransform = 'rotate(-5deg) translateY(18px)'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    0,
        transform:  initialTransform,
        transition: 'opacity 0.55s ease, transform 0.55s ease',
      }}
    >
      {children}
    </div>
  )
}
