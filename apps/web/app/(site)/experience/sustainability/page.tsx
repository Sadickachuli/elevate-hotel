'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger } from '@/lib/animations'

const initiatives = [
  { title: 'Solar Energy', desc: 'Our property integrates solar panels to reduce reliance on grid energy, contributing to Rwanda\'s clean energy goals.', imageLabel: 'Solar Panels — Rooftop' },
  { title: 'Local Sourcing', desc: 'We source over 80% of our produce from Rwandan farms, supporting local agriculture and reducing carbon footprint.', imageLabel: 'Local Farm Produce' },
  { title: 'Artisan Support', desc: 'From art to furnishings, we partner with Rwandan artisans and craftspeople, providing livelihoods and preserving culture.', imageLabel: 'Rwandan Artisan Craftwork' },
  { title: 'Water Conservation', desc: 'Advanced water recycling systems and rainwater harvesting reduce our consumption by an estimated 40%.', imageLabel: 'Water Conservation System' },
  { title: 'Plastic-Free Operations', desc: 'Guest amenities, packaging, and operations are designed to minimize plastic use — aligning with Rwanda\'s ban.', imageLabel: 'Eco-Friendly Amenities' },
  { title: 'Responsible Tourism', desc: 'We partner with local organizations to promote ethical tourism, cultural preservation, and community development.', imageLabel: 'Community & Responsible Tourism' },
]

export default function SustainabilityPage() {
  return (
    <>
      <HeroSection
        title="Luxury with Conscience"
        subtitle="Sustainability is not an afterthought — it is woven into every decision we make."
        imageLabel="Sustainability — Green Roof & Gardens"
        compact
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Experience', href: '/experience' }, { label: 'Sustainability', href: '/experience/sustainability' }]}
        overline="Sustainability"
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-accent italic text-xl text-brand-taupe leading-relaxed">
              We are committed to green luxury. Solar integration, locally sourced produce, support for Rwandan artisans, and responsible tourism are at the core of what we do. We believe that true luxury honours the environment that makes it possible.
            </p>
          </div>

          <SectionHeading
            overline="Our Initiatives"
            title="Building a Greener Future"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {initiatives.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group bg-white border border-brand-beige/50 hover:border-brand-gold/30 transition-colors overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <ImagePlaceholder label={item.imageLabel} aspect="landscape" className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-sm text-brand-taupe leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
