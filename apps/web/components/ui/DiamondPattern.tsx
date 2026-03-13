interface DiamondPatternProps {
  opacity?: number
  className?: string
  light?: boolean
}

export default function DiamondPattern({
  opacity = 0.04,
  className = '',
  light = true,
}: DiamondPatternProps) {
  const color = light ? '#C9A84C' : '#C9A84C'

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <svg width="100%" height="100%" className="w-full h-full">
        <defs>
          <pattern id={`diamond-${light ? 'l' : 'd'}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="20" y="0" width="14" height="14" transform="rotate(45 20 7)" fill="none" stroke={color} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#diamond-${light ? 'l' : 'd'})`} />
      </svg>
    </div>
  )
}
