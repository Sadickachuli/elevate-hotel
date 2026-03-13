'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Palette, Leaf, Compass, MapPin, Clock, ArrowRight } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger, fadeInLeft, fadeInRight } from '@/lib/animations'

const kigaliGuide = [
  { name: 'Kigali Genocide Memorial', time: '15 min', desc: 'A moving tribute and essential experience for understanding Rwanda\'s journey.' },
  { name: 'Nyarutarama Golf Course', time: 'Adjacent', desc: 'The prestigious 18-hole course is literally at your doorstep.' },
  { name: 'Kigali Convention Centre', time: '10 min', desc: 'Rwanda\'s architectural icon and East Africa\'s premier conference venue.' },
  { name: 'Kimironko Market', time: '20 min', desc: 'Vibrant local market for fabrics, crafts, spices, and authentic Rwandan goods.' },
  { name: 'Inema Arts Centre', time: '15 min', desc: 'Contemporary Rwandan art gallery featuring local and international artists.' },
  { name: 'Heaven Restaurant', time: '10 min', desc: 'Award-winning dining with panoramic views, one of Kigali\'s finest.' },
  { name: 'Kigali International Airport', time: '15 min', desc: 'Quick, easy access to the modern international gateway.' },
  { name: 'Nyandungu Eco Park', time: '20 min', desc: 'Rwanda\'s first urban wetland eco-tourism park — nature within the city.' },
]

export default function ExperiencePage() {
  return (
    <>
      <HeroSection
        title="Kigali Through Elevated Eyes"
        subtitle="Art, sustainability, and discovery. Every moment at Elevate is an experience worth remembering."
        imageLabel="Experience — Kigali Skyline"
        compact
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Experience', href: '/experience' }]}
        overline="Experience"
      />

      {/* Art Collection */}
      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <ImagePlaceholder aspect="portrait" label="Art Collection — Lobby Installation" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                <span className="label-overline">Art Collection</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="gold-divider !mx-0" />
              <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-brand-navy">
                Stories on Every Wall
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 font-accent italic text-xl text-brand-taupe leading-relaxed">
                Elevate is home to a curated collection of Rwandan and African contemporary art woven through every public space. Every hallway, lobby, and suite tells a visual story.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 text-brand-taupe leading-relaxed">
                Working with leading Rwandan artists and galleries, our collection celebrates the vibrancy, resilience, and beauty of African contemporary art. From large-scale installations in the lobby to intimate pieces in each suite, art is not decoration here — it is part of the experience.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding bg-brand-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="order-2 lg:order-1">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                <span className="label-overline">Sustainability</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="gold-divider !mx-0" />
              <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-brand-navy">
                Luxury with Conscience
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 font-accent italic text-xl text-brand-taupe leading-relaxed">
                We are committed to green luxury. Solar integration, locally sourced produce, support for Rwandan artisans, and responsible tourism are at the core of what we do.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-6 space-y-3">
                {['Solar energy integration throughout the property', 'Locally sourced ingredients from Rwandan farms', 'Support for local artisan communities', 'Water conservation and recycling systems', 'Plastic-free guest amenities', 'Partnership with Rwanda Environment Management Authority'].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-brand-walnut">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight} className="order-1 lg:order-2">
              <ImagePlaceholder aspect="portrait" label="Sustainability — Garden & Solar" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Kigali */}
      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <SectionHeading
            overline="Explore"
            title="Discover Kigali"
            subtitle="Curated recommendations from our concierge team. Kigali is a city of a thousand hills — and a thousand experiences."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {kigaliGuide.map((place) => (
              <motion.div
                key={place.name}
                variants={fadeInUp}
                className="flex items-start gap-5 p-6 bg-white border border-brand-beige/50 hover:border-brand-gold/30 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-brand-cream">
                  <MapPin className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg text-brand-navy">{place.name}</h3>
                    <span className="flex items-center gap-1 text-xs text-brand-sand">
                      <Clock className="w-3 h-3" /> {place.time}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-brand-taupe leading-relaxed">{place.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-sm text-brand-taupe mb-4">Need personalised recommendations? Our concierge team knows every corner of Kigali.</p>
            <Link href="/contact" className="btn-primary">Ask Our Concierge</Link>
          </div>
        </div>
      </section>
    </>
  )
}
