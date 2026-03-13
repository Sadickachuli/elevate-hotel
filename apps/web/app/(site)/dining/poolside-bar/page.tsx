'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Sun } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger, fadeInRight } from '@/lib/animations'

const menuHighlights = [
  { category: 'Light Bites', items: ['Mezze Platter', 'Grilled Halloumi Salad', 'Crispy Calamari', 'Bruschetta Trio'] },
  { category: 'From the Grill', items: ['Chicken Satay Skewers', 'Beef Sliders', 'Grilled Vegetable Wrap', 'Fish Tacos'] },
  { category: 'Sundowners', items: ['Aperol Spritz', 'Gin & Tonic Elevation', 'Tropical Sangria', 'Virgin Mojito'] },
  { category: 'Refreshments', items: ['Fresh Fruit Smoothies', 'Cold-Pressed Juices', 'Iced Coffee', 'Sparkling Water'] },
]

export default function GemilliTerracePage() {
  return (
    <>
      <HeroSection
        title="Garden Views. Open Skies. Perfect Evenings."
        subtitle="An alfresco terrace carved from lush tropical gardens. Where Kigali's gentle climate meets elevated light dining and cocktails."
        overline="GEMILLI TERRACE"
        imageLabel="Gemilli Terrace — Garden View"
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dining', href: '/dining' },
          { label: 'Gemilli Terrace', href: '/dining/poolside-bar' },
        ]}
      />

      <section className="py-6 bg-brand-cream">
        <div className="container-luxury flex items-center justify-center gap-3 text-brand-taupe">
          <Clock className="w-4 h-4 text-brand-gold" />
          <span className="text-sm">Open daily 11:00 AM – 10:00 PM</span>
        </div>
      </section>

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="label-overline">Gemilli Terrace</motion.p>
              <motion.div variants={fadeInUp} className="gold-divider !mx-0" />
              <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-brand-navy">
                Dining Under the Kigali Sky
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 text-brand-taupe leading-relaxed">
                The Gemilli Terrace is where nature and gastronomy converge. Nestled within Elevate&apos;s lush tropical gardens, this alfresco venue offers a relaxed yet refined dining experience. Enjoy light lunches, afternoon cocktails, and evening sundowners as the golden light filters through the canopy above.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 text-brand-taupe leading-relaxed">
                As the sun sets over Kigali, the terrace transforms into an intimate evening destination — string lights, candlelit tables, and the gentle sounds of the garden creating the perfect backdrop for any occasion.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
              <ImagePlaceholder aspect="portrait" label="Gemilli Terrace — Evening Ambiance" />
            </motion.div>
          </div>

          <div className="text-center mb-12">
            <Sun className="w-8 h-8 text-brand-gold mx-auto mb-4" strokeWidth={1} />
            <h3 className="font-heading text-3xl text-brand-navy">Terrace Menu Highlights</h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {menuHighlights.map((section) => (
              <motion.div key={section.category} variants={fadeInUp} className="bg-white border border-brand-beige/50 p-6">
                <h4 className="font-heading text-lg text-brand-gold mb-4">{section.category}</h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-brand-taupe flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream text-center">
        <div className="container-luxury">
          <p className="font-heading text-2xl text-brand-navy mb-4">Reserve Your Terrace Table</p>
          <p className="text-brand-taupe mb-6">Outdoor dining at its finest. Perfect for groups, dates, or solo retreats.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Make a Reservation</Link>
            <Link href="/dining/special-events" className="btn-outline">Private Events</Link>
          </div>
        </div>
      </section>
    </>
  )
}
