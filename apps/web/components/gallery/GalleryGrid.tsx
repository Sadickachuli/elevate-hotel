'use client'

import { useState } from 'react'
// import type { GalleryImage, GalleryCategory } from '@shared/types'

/**
 * GALLERY GRID — Filterable masonry gallery with lightbox
 *
 * Features:
 * - Category filter tabs
 * - Masonry layout (CSS columns or grid)
 * - Click to open lightbox
 * - Lazy loading images
 * - Keyboard navigation in lightbox
 *
 * TODO: Accept galleryImages prop from Sanity
 * TODO: Implement lightbox modal
 * TODO: Add framer-motion animations
 */

const categories = ['All', 'Suites', 'Dining', 'Views', 'V-Club', 'Exterior', 'Events']

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 text-sm uppercase tracking-widest transition-all
              ${activeCategory === cat
                ? 'bg-brand-gold text-brand-navy'
                : 'border border-brand-charcoal/30 text-brand-charcoal hover:border-brand-gold'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {/* TODO: Map over filtered gallery images */}
        {/* TODO: Each image → clickable, opens lightbox */}
        <div className="break-inside-avoid mb-4 bg-gray-200 aspect-[3/4] flex items-center justify-center text-gray-400">
          Gallery images will appear here
        </div>
      </div>

      {/* TODO: Lightbox Modal */}
    </div>
  )
}
