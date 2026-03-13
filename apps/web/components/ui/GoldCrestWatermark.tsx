interface GoldCrestWatermarkProps {
  opacity?: number
  className?: string
  position?: 'center' | 'bottom-right'
}

export default function GoldCrestWatermark({
  opacity = 0.05,
  className = '',
  position = 'center',
}: GoldCrestWatermarkProps) {
  const posClass = position === 'center'
    ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    : 'bottom-8 right-8'

  return (
    <div
      className={`absolute pointer-events-none ${posClass} ${className}`}
      style={{ opacity }}
    >
      <svg
        width="400"
        height="480"
        viewBox="0 0 400 480"
        className="w-[300px] h-[360px] md:w-[400px] md:h-[480px]"
      >
        <path
          d="M200 20 L60 120 L60 340 C60 400 120 450 200 480 C280 450 340 400 340 340 L340 120 Z"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
        />
        <text
          x="200"
          y="300"
          textAnchor="middle"
          fill="#C9A84C"
          fontFamily="var(--font-heading)"
          fontStyle="italic"
          fontSize="200"
          fontWeight="400"
        >
          V
        </text>
      </svg>
    </div>
  )
}
