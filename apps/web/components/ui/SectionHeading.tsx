interface SectionHeadingProps {
  overline?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : ''}`}>
      {overline && (
        <p className="label-overline mb-4">{overline}</p>
      )}
      {overline && <div className={`gold-divider ${isCenter ? '' : 'mx-0'}`} />}
      <h2
        className={`font-heading text-4xl md:text-5xl lg:text-[3.5rem] leading-tight ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg font-light max-w-2xl leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-brand-taupe'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
