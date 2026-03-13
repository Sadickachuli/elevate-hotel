'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger } from '@/lib/animations'

const categories = ['All', 'Suites', 'Dining', 'Wellness', 'V-Club', 'Exterior', 'Kigali']

const galleryImages = [
  { id: 1, label: 'Hotel Exterior — Main Entrance', category: 'Exterior', aspect: 'landscape' as const },
  { id: 2, label: 'Presidential Suite — Bedroom', category: 'Suites', aspect: 'portrait' as const },
  { id: 3, label: 'V-Coffee & Restaurant — Interior', category: 'Dining', aspect: 'landscape' as const },
  { id: 4, label: 'V-Wellness — Treatment Room', category: 'Wellness', aspect: 'square' as const },
  { id: 5, label: 'V-Club — Private Lounge', category: 'V-Club', aspect: 'landscape' as const },
  { id: 6, label: 'Kigali — Cityscape at Dusk', category: 'Kigali', aspect: 'landscape' as const },
  { id: 7, label: 'Suite — Marble Bathroom', category: 'Suites', aspect: 'portrait' as const },
  { id: 8, label: 'Cave Bar — Cocktails', category: 'Dining', aspect: 'square' as const },
  { id: 9, label: 'Hotel Exterior — Garden Path', category: 'Exterior', aspect: 'landscape' as const },
  { id: 10, label: 'VIP Studio — Living Area', category: 'Suites', aspect: 'landscape' as const },
  { id: 11, label: 'Gemilli Terrace — Evening', category: 'Dining', aspect: 'portrait' as const },
  { id: 12, label: 'V-Wellness — Steam Room', category: 'Wellness', aspect: 'square' as const },
  { id: 13, label: 'Standard Room — Detail', category: 'Suites', aspect: 'landscape' as const },
  { id: 14, label: 'V-Club — Padel Court', category: 'V-Club', aspect: 'landscape' as const },
  { id: 15, label: 'Nyarutarama Golf Course', category: 'Kigali', aspect: 'landscape' as const },
  { id: 16, label: 'Hotel Lobby — Art Installation', category: 'Exterior', aspect: 'portrait' as const },
  { id: 17, label: 'Deluxe Room — Workspace', category: 'Suites', aspect: 'landscape' as const },
  { id: 18, label: 'Restaurant — Chef Preparing', category: 'Dining', aspect: 'square' as const },
  { id: 19, label: 'Wellness — Nail Bar', category: 'Wellness', aspect: 'landscape' as const },
  { id: 20, label: 'V-Club — Golf Simulator', category: 'V-Club', aspect: 'landscape' as const },
  { id: 21, label: 'Kigali Convention Centre', category: 'Kigali', aspect: 'landscape' as const },
  { id: 22, label: 'Hotel — Parking & Entrance', category: 'Exterior', aspect: 'landscape' as const },
  { id: 23, label: 'Suite — Soaking Tub View', category: 'Suites', aspect: 'portrait' as const },
  { id: 24, label: 'Kigali — Hills at Sunrise', category: 'Kigali', aspect: 'landscape' as const },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (idx: number) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }
  const prevImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }

  return (
    <>
      <HeroSection
        title="A Visual Journey Through Elevate"
        subtitle="Explore the spaces, experiences, and beauty that define Kigali's finest hotel."
        imageLabel="Gallery — Hero Collage"
        compact
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery', href: '/gallery' }]}
        overline="Gallery"
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-gold text-brand-navy font-semibold'
                    : 'border border-brand-beige text-brand-taupe hover:border-brand-gold hover:text-brand-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  variants={fadeInUp}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid mb-4 cursor-pointer group"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      aspect={img.aspect}
                      label={img.label}
                      dark={img.category === 'V-Club' || img.category === 'Dining'}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-brand-gold text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {img.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-navy/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-6 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-6 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <div className="max-w-4xl w-full mx-6" onClick={(e) => e.stopPropagation()}>
              <ImagePlaceholder
                aspect="landscape"
                label={filtered[lightboxIndex]?.label}
                dark
                className="w-full"
              />
              <p className="text-center mt-4 text-white/50 text-sm">
                {filtered[lightboxIndex]?.label}
                <span className="mx-3 text-white/20">|</span>
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
