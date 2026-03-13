interface SectionDividerProps {
  variant?: 'wave' | 'angle' | 'straight'
  fromColor?: string
  toColor?: string
  className?: string
}

export default function SectionDivider({
  variant = 'straight',
  fromColor = '#FAF6EE',
  toColor = '#F0E6D3',
  className = '',
}: SectionDividerProps) {
  if (variant === 'wave') {
    return (
      <div className={`relative h-16 -mt-1 ${className}`} style={{ background: toColor }}>
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M0 32C240 0 480 64 720 32C960 0 1200 64 1440 32V0H0V32Z"
            fill={fromColor}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'angle') {
    return (
      <div className={`relative h-12 -mt-1 ${className}`} style={{ background: toColor }}>
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <polygon points="0,0 1440,0 1440,0 0,48" fill={fromColor} />
        </svg>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="flex-1 max-w-[80px] h-px bg-brand-gold/20" />
      <svg width="8" height="8" viewBox="0 0 8 8" className="mx-4 flex-shrink-0">
        <rect x="4" y="0" width="4" height="4" transform="rotate(45 4 4)" fill="#C9A84C" opacity="0.4" />
      </svg>
      <div className="flex-1 max-w-[80px] h-px bg-brand-gold/20" />
    </div>
  )
}
