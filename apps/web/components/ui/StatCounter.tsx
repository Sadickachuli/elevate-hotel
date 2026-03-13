'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatCounterProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  label: string
}

export default function StatCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 2000,
  label,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl text-brand-gold">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xs tracking-[0.2em] uppercase text-brand-sand mt-2">{label}</div>
    </div>
  )
}
