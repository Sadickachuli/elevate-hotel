'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ElevateOrnament from '@/components/ui/ElevateOrnament'

interface HeroCTA {
  label: string
  href: string
  variant: 'primary' | 'outline' | 'ghost'
}

interface HeroSectionProps {
  title: string
  subtitle?: string
  overline?: string
  ctas?: HeroCTA[]
  imageLabel?: string
  showScroll?: boolean
  compact?: boolean
  showOrnament?: boolean
  breadcrumbs?: { label: string; href: string }[]
}

export default function HeroSection({
  title,
  subtitle,
  overline,
  ctas = [],
  imageLabel,
  showScroll = false,
  compact = false,
  showOrnament = true,
  breadcrumbs,
}: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])

  const btnClass = (variant: string) => {
    if (variant === 'primary') return 'btn-primary'
    if (variant === 'outline') return 'btn-outline'
    return 'btn-ghost-light'
  }

  return (
    <>
      <section
        ref={ref}
        className={`relative ${compact ? 'min-h-[45vh]' : 'min-h-screen'} flex items-end overflow-hidden`}
      >
        {/* Parallax image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <ImagePlaceholder aspect="hero" label={imageLabel} dark className="!min-h-full w-full !aspect-auto" />
        </motion.div>

        {/* Warm overlay — NOT pure black */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(14,22,40,0.2) 0%, rgba(14,22,40,0.45) 50%, rgba(14,22,40,0.65) 100%)',
          }}
        />

        <div className={`relative z-10 container-luxury w-full ${compact ? 'pb-12 pt-40' : 'pb-20 pt-40'}`}>
          {overline && (
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ duration: 0.8 }}
              className="text-overline text-white/70 mb-5"
            >
              {overline}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className={`${compact ? 'text-section-title' : 'text-hero'} text-white`}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-5 text-lg text-white/70 font-light max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {showOrnament && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-[200px]"
            >
              <ElevateOrnament variant="minimal" light />
            </motion.div>
          )}

          {ctas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {ctas.map((cta) => (
                <Link key={cta.label} href={cta.href} className={btnClass(cta.variant)}>
                  {cta.label}
                </Link>
              ))}
            </motion.div>
          )}
        </div>

        {showScroll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Scroll to discover</span>
            <ChevronDown className="w-5 h-5 text-white/40 animate-bounce" />
          </motion.div>
        )}
      </section>

      {/* Breadcrumbs below hero */}
      {breadcrumbs && (
        <div className="bg-brand-ivory border-b border-brand-beige/50">
          <div className="container-luxury py-3 flex items-center gap-2 text-xs">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-brand-sand">/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="text-brand-taupe hover:text-brand-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-brand-walnut">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
