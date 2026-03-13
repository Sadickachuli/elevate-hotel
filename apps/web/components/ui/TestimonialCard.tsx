interface TestimonialCardProps {
  quote: string
  guestName: string
  guestTitle: string
  rating?: number
}

function GoldStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#C9A84C">
      <path d="M8 0l2.35 4.76 5.25.77-3.8 3.7.9 5.24L8 12.18l-4.7 2.47.9-5.24-3.8-3.7 5.25-.77z" />
    </svg>
  )
}

export default function TestimonialCard({
  quote,
  guestName,
  guestTitle,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white/60 border border-brand-beige/60 p-8 relative">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-gold" />
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <GoldStar key={i} />
        ))}
      </div>
      <p className="font-accent italic text-lg text-brand-charcoal leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 pt-4 border-t border-brand-beige/40">
        <p className="text-sm text-brand-walnut font-semibold">{guestName}</p>
        <p className="text-xs text-brand-taupe mt-0.5">{guestTitle}</p>
      </div>
    </div>
  )
}
