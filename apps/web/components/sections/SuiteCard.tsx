import Link from 'next/link'
// import Image from 'next/image'
// import { urlFor } from '@/sanity/lib/image'
// import type { Suite } from '@shared/types'

/**
 * SUITE CARD — Used on accommodations overview and homepage.
 *
 * TODO: Accept Suite type prop and render with Sanity image
 */

interface SuiteCardProps {
  name: string
  slug: string
  category: string
  tagline?: string
  pricePerNight?: number
  // heroImage: SanityImage
}

export default function SuiteCard({ name, slug, category, tagline, pricePerNight }: SuiteCardProps) {
  return (
    <Link href={`/accommodations/${slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-navy mb-4">
        {/* TODO: Next/Image with Sanity image URL */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-brand-cream">
          <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">{category}</p>
          <h3 className="font-heading text-2xl group-hover:text-brand-gold transition-colors">{name}</h3>
          {tagline && <p className="text-sm mt-1 opacity-80">{tagline}</p>}
          {pricePerNight && (
            <p className="text-sm mt-2">
              From <span className="text-brand-gold font-semibold">{pricePerNight.toLocaleString()} RWF</span>/night
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
