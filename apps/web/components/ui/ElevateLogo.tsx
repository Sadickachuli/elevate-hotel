'use client'

import Image from 'next/image'

interface ElevateLogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
}

const sizeMap = {
  sm: { h: 36 },
  md: { h: 50 },
  lg: { h: 65 },
  xl: { h: 85 },
}

export default function ElevateLogo({
  variant = 'light',
  size = 'md',
  showText = true,
}: ElevateLogoProps) {
  const { h } = sizeMap[size]

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo-source.webp"
        alt="Elevate Hotel by Lidace"
        width={Math.round(h * 2.5)}
        height={h}
        className="object-contain"
        style={{ height: `${h}px`, width: 'auto' }}
        priority
      />
      {showText && size !== 'sm' && (
        <div className={`hidden sm:block ${variant === 'light' ? 'text-white/60' : 'text-brand-taupe'}`}>
          <span className="text-[9px] tracking-[0.25em] uppercase font-body font-medium block leading-tight">
            Hotel by Lidace
          </span>
        </div>
      )}
    </div>
  )
}
