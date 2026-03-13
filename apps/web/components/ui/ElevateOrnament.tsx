interface ElevateOrnamentProps {
  variant?: 'full' | 'minimal' | 'crest'
  className?: string
  light?: boolean
}

export default function ElevateOrnament({
  variant = 'minimal',
  className = '',
  light = false,
}: ElevateOrnamentProps) {
  const goldColor = '#C9A84C'
  const lineColor = light ? 'rgba(255,255,255,0.15)' : 'rgba(201,168,76,0.25)'

  if (variant === 'full') {
    return (
      <div className={`flex items-center gap-3 my-8 ${className}`}>
        <div className="flex-1 h-px" style={{ background: lineColor }} />
        <svg width="12" height="12" viewBox="0 0 12 12" className="flex-shrink-0">
          <rect x="6" y="0" width="6" height="6" transform="rotate(45 6 6)" fill={goldColor} />
        </svg>
        <svg width="80" height="16" viewBox="0 0 80 16" className="flex-shrink-0 opacity-60">
          <path d="M0 8 C10 2, 20 2, 25 8 C30 14, 35 14, 40 8 C45 2, 50 2, 55 8 C60 14, 65 14, 70 8 C72 5, 76 4, 80 8" stroke={goldColor} fill="none" strokeWidth="0.8" />
        </svg>
        <svg width="12" height="12" viewBox="0 0 12 12" className="flex-shrink-0">
          <rect x="6" y="0" width="6" height="6" transform="rotate(45 6 6)" fill={goldColor} />
        </svg>
        <div className="flex-1 h-px" style={{ background: lineColor }} />
      </div>
    )
  }

  if (variant === 'crest') {
    return (
      <div className={`flex items-center gap-4 my-8 ${className}`}>
        <div className="flex-1 h-px" style={{ background: lineColor }} />
        <svg width="28" height="32" viewBox="0 0 28 32" className="flex-shrink-0">
          <path
            d="M14 2 L4 10 L4 22 C4 26 8 30 14 32 C20 30 24 26 24 22 L24 10 Z"
            fill="none"
            stroke={goldColor}
            strokeWidth="1"
          />
          <text
            x="14"
            y="21"
            textAnchor="middle"
            fill={goldColor}
            fontFamily="var(--font-heading)"
            fontStyle="italic"
            fontSize="14"
          >
            V
          </text>
        </svg>
        <div className="flex-1 h-px" style={{ background: lineColor }} />
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-4 my-6 ${className}`}>
      <div className="flex-1 h-px max-w-[60px]" style={{ background: lineColor }} />
      <svg width="8" height="8" viewBox="0 0 8 8" className="flex-shrink-0">
        <rect x="4" y="0" width="4" height="4" transform="rotate(45 4 4)" fill={goldColor} />
      </svg>
      <div className="flex-1 h-px max-w-[60px]" style={{ background: lineColor }} />
    </div>
  )
}
