'use client'

const aspectMap = {
  hero: 'aspect-video min-h-[70vh]',
  landscape: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  cinematic: 'aspect-[21/9]',
  card: 'aspect-[4/3]',
}

interface ImagePlaceholderProps {
  aspect?: keyof typeof aspectMap
  label?: string
  className?: string
  dark?: boolean
}

export default function ImagePlaceholder({
  aspect = 'landscape',
  label,
  className = '',
  dark = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden ${aspectMap[aspect]} ${className}`}
      style={{
        background: dark
          ? 'linear-gradient(135deg, #1a2540 0%, #0E1628 50%, #162035 100%)'
          : 'linear-gradient(135deg, #E8D5B7 0%, #D4BFA0 40%, #C4A882 100%)',
        boxShadow: 'inset 0 0 80px rgba(0,0,0,0.12)',
      }}
    >
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: dark
            ? 'repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(201,168,76,0.03) 20px, rgba(201,168,76,0.03) 21px)'
            : 'repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(139,115,85,0.06) 20px, rgba(139,115,85,0.06) 21px)',
        }}
      />
      {/* Warm vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: dark
            ? 'radial-gradient(ellipse at 40% 40%, rgba(201,168,76,0.06) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 60% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)',
        }}
      />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`font-accent italic text-sm tracking-wide ${
              dark ? 'text-white/20' : 'text-brand-taupe/30'
            }`}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
