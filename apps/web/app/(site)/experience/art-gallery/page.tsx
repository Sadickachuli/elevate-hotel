'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger } from '@/lib/animations'

const artworks = [
  { title: 'Resilience', artist: 'Innocent Nkurunziza', medium: 'Acrylic on Canvas', location: 'Main Lobby' },
  { title: 'Golden Hills', artist: 'Pacifique Niyonsenga', medium: 'Mixed Media', location: 'Restaurant Entrance' },
  { title: 'Ubuntu', artist: 'Emmanuel Nkuranga', medium: 'Sculpture, Bronze', location: 'V-Club Lounge' },
  { title: 'Dawn Over Kigali', artist: 'Colleen Mwiza', medium: 'Oil on Canvas', location: 'Presidential Suite' },
  { title: 'Threads of Time', artist: 'Angelique Mukandutiye', medium: 'Textile Installation', location: 'Spa Corridor' },
  { title: 'The Gathering', artist: 'Bruce Tuyishime', medium: 'Acrylic on Canvas', location: 'Conference Center' },
]

export default function ArtGalleryPage() {
  return (
    <>
      <HeroSection
        title="Stories on Every Wall"
        subtitle="A curated collection of Rwandan and African contemporary art woven through every public space."
        imageLabel="Art Gallery — Lobby Installation"
        compact
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Experience', href: '/experience' }, { label: 'Art Gallery', href: '/experience/art-gallery' }]}
        overline="Art Gallery"
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="font-accent italic text-xl text-brand-taupe leading-relaxed">
              Every hallway, lobby, and suite tells a visual story. Working with leading Rwandan artists and galleries, our collection celebrates the vibrancy, resilience, and beauty of African contemporary art.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {artworks.map((art) => (
              <motion.div key={art.title} variants={fadeInUp} className="group">
                <ImagePlaceholder
                  aspect="portrait"
                  label={`${art.title} — ${art.artist}`}
                  className="mb-4"
                />
                <h3 className="font-heading text-xl text-brand-navy">{art.title}</h3>
                <p className="text-sm text-brand-gold mt-1">{art.artist}</p>
                <p className="text-xs text-brand-taupe mt-1">{art.medium} — {art.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream text-center">
        <div className="container-luxury">
          <p className="font-accent italic text-xl text-brand-taupe mb-6">Art tours available upon request through our concierge team.</p>
          <Link href="/contact" className="btn-primary">Arrange an Art Tour</Link>
        </div>
      </section>
    </>
  )
}
