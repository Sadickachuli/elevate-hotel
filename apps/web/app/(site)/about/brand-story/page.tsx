'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger, fadeInLeft, fadeInRight } from '@/lib/animations'

const timeline = [
  { year: '2022', title: 'The Vision', desc: 'Lidace Group conceives the Elevate Precinct — a mixed-use development that would redefine luxury living in Kigali.' },
  { year: '2024', title: 'Construction Begins', desc: 'Ground broken on the 8,364 sqm property in Nyarutarama, adjacent to the Golf Course.' },
  { year: '2026', title: 'Grand Opening', desc: 'Elevate Hotel by Lidace opens its doors, setting a new standard for Rwandan hospitality.' },
]

export default function BrandStoryPage() {
  return (
    <>
      <HeroSection
        title="The Story of Elevate"
        subtitle="Born from a singular vision: to create a hospitality experience in Rwanda that rivals the finest in Africa."
        imageLabel="Brand Story — Construction Journey"
        compact
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Brand Story', href: '/about/brand-story' }]}
        overline="Brand Story"
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <ImagePlaceholder aspect="portrait" label="Elevate Hotel — Exterior" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="label-overline">Our Story</motion.p>
              <motion.div variants={fadeInUp} className="gold-divider !mx-0" />
              <motion.p variants={fadeInUp} className="font-accent italic text-xl text-brand-taupe leading-relaxed">
                Elevate was born from a singular vision: to create a hospitality experience in Rwanda that rivals the finest in Africa.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-6 text-brand-taupe leading-relaxed">
                Founded by the Lidace Group — a leader in premium real estate and development across Kigali — Elevate is not merely a hotel. It is a statement. A declaration that Rwanda&apos;s capital is ready to host the world at its highest standard.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 text-brand-taupe leading-relaxed">
                Located in the serene residential enclave of Nyarutarama, on the shores of Kigali&apos;s celebrated Golf Course, Elevate offers something rare: true privacy without sacrifice of service. Here, international travellers, regional executives, and discerning guests find not just accommodation, but a sanctuary — an address that communicates everything before a word is spoken.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 text-brand-taupe leading-relaxed">
                As part of the broader Elevate Precinct — a mixed-use development comprising luxury residences, commercial spaces, and hospitality — the hotel sits at the heart of something larger: a new way of living and experiencing Kigali.
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="label-overline">Our Journey</p>
              <div className="gold-divider" />
              <h2 className="font-heading text-4xl text-brand-navy">The Path to Elevation</h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-gold/20 hidden md:block" />
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className={`relative flex gap-8 ${idx < timeline.length - 1 ? 'mb-12' : ''}`}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-navy flex items-center justify-center relative z-10">
                    <span className="font-heading text-brand-gold text-lg">{item.year}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading text-2xl text-brand-navy">{item.title}</h3>
                    <p className="mt-2 text-brand-taupe leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
