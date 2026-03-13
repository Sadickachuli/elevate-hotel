'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Clock } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger } from '@/lib/animations'

const destinations = [
  {
    name: 'Kigali Genocide Memorial',
    time: '15 min',
    desc: 'A powerful and essential experience. The memorial documents Rwanda\'s 1994 genocide against the Tutsi and serves as a place of remembrance, learning, and healing.',
    imageLabel: 'Kigali Genocide Memorial',
  },
  {
    name: 'Nyarutarama Golf Course',
    time: 'Adjacent',
    desc: 'The prestigious 18-hole course is literally at your doorstep. Tee-time arrangements available through our concierge.',
    imageLabel: 'Nyarutarama Golf Course',
  },
  {
    name: 'Kigali Convention Centre',
    time: '10 min',
    desc: 'Rwanda\'s iconic dome-shaped architectural marvel and East Africa\'s premier conference venue.',
    imageLabel: 'Kigali Convention Centre',
  },
  {
    name: 'Kimironko Market',
    time: '20 min',
    desc: 'The most vibrant local market in Kigali. Browse colourful fabrics, handmade crafts, fresh produce, and authentic Rwandan goods.',
    imageLabel: 'Kimironko Market',
  },
  {
    name: 'Inema Arts Centre',
    time: '15 min',
    desc: 'Rwanda\'s leading contemporary art space. Founded by self-taught artists, featuring exhibitions, workshops, and a vibrant creative community.',
    imageLabel: 'Inema Arts Centre',
  },
  {
    name: 'Heaven Restaurant',
    time: '10 min',
    desc: 'One of Kigali\'s finest restaurants, offering pan-African cuisine with panoramic views of the city.',
    imageLabel: 'Heaven Restaurant — Kigali',
  },
  {
    name: 'Kigali International Airport',
    time: '15 min',
    desc: 'Rwanda\'s modern international gateway. Quick and easy access from Elevate, with airport transfer available.',
    imageLabel: 'Kigali International Airport',
  },
  {
    name: 'Nyandungu Eco Park',
    time: '20 min',
    desc: 'Rwanda\'s first urban wetland eco-tourism park. Boardwalks through restored wetlands, native gardens, and nature trails.',
    imageLabel: 'Nyandungu Eco Park',
  },
]

export default function ExploreKigaliPage() {
  return (
    <>
      <HeroSection
        title="Discover the City of a Thousand Hills"
        subtitle="Kigali is a city of warmth, resilience, and beauty. Let our concierge guide you to its finest experiences."
        imageLabel="Kigali — Panoramic View"
        compact
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Experience', href: '/experience' }, { label: 'Explore Kigali', href: '/experience/explore-kigali' }]}
        overline="Explore Kigali"
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <SectionHeading
            overline="Curated by Our Concierge"
            title="Essential Kigali Experiences"
            subtitle="Handpicked recommendations within easy reach of Elevate Hotel."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="space-y-12"
          >
            {destinations.map((dest, idx) => (
              <motion.div
                key={dest.name}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <ImagePlaceholder aspect="landscape" label={dest.imageLabel} />
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                    <h3 className="font-heading text-2xl text-brand-navy">{dest.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-brand-sand mb-3">
                    <Clock className="w-3 h-3" /> {dest.time} from Elevate
                  </div>
                  <p className="text-brand-taupe leading-relaxed">{dest.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <p className="text-brand-taupe mb-4">Our concierge can arrange transport, guides, and bespoke itineraries.</p>
            <Link href="/contact" className="btn-primary">Speak to Concierge</Link>
          </div>
        </div>
      </section>
    </>
  )
}
