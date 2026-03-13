'use client'

import { motion } from 'framer-motion'
import { Leaf, Sun, Droplets, Recycle, Heart, Globe } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp, stagger } from '@/lib/animations'

const initiatives = [
  { icon: Sun, title: 'Solar Energy', desc: 'Our property integrates solar panels to reduce reliance on grid energy, contributing to Rwanda\'s clean energy goals.' },
  { icon: Leaf, title: 'Local Sourcing', desc: 'We source over 80% of our produce from Rwandan farms, supporting local agriculture and reducing carbon footprint.' },
  { icon: Heart, title: 'Artisan Support', desc: 'From art to furnishings, we partner with Rwandan artisans and craftspeople, providing livelihoods and preserving culture.' },
  { icon: Droplets, title: 'Water Conservation', desc: 'Advanced water recycling systems and rainwater harvesting reduce our consumption by an estimated 40%.' },
  { icon: Recycle, title: 'Plastic-Free Operations', desc: 'Guest amenities, packaging, and operations are designed to minimize plastic use — aligning with Rwanda\'s ban.' },
  { icon: Globe, title: 'Responsible Tourism', desc: 'We partner with local organizations to promote ethical tourism, cultural preservation, and community development.' },
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
                className="bg-white border border-brand-beige/50 p-8 text-center hover:border-brand-gold/30 transition-colors"
              >
                <item.icon className="w-10 h-10 text-brand-gold mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-xl text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-brand-taupe leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
