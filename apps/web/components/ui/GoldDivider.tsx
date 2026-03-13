interface GoldDividerProps {
  className?: string
  wide?: boolean
}

export default function GoldDivider({ className = '', wide = false }: GoldDividerProps) {
  return (
    <div
      className={`h-px bg-brand-gold mx-auto my-8 ${wide ? 'w-24' : 'w-16'} ${className}`}
    />
  )
}
