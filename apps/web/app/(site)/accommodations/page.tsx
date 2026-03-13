'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Wifi, Wind, Coffee, BellRing, ShieldCheck, Tv, Lock, Shirt, Moon, ConciergeBell } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ElevateOrnament from '@/components/ui/ElevateOrnament'
import RoomCard from '@/components/ui/RoomCard'
import { fadeInUp, stagger } from '@/lib/animations'

const suites = [
  { name: 'Standard Room', slug: 'standard', category: '18 Rooms', description: 'Elegant comfort with premium linens, en-suite marble bathroom, garden or courtyard views.', priceFrom: '$120', imageLabel: 'Standard Room — Bedroom' },
  { name: 'Deluxe Room', slug: 'deluxe', category: '5 Rooms', description: 'Elevated comfort with upgraded furnishings, larger workdesk, premium minibar.', priceFrom: '$180', imageLabel: 'Deluxe Room — Interior' },
  { name: 'VIP Room / Studio', slug: 'vip-studio', category: '10 Rooms', description: 'Spacious studio layout with separate sitting area, private balcony access.', priceFrom: '$250', imageLabel: 'VIP Studio — Living Area' },
  { name: 'Suite', slug: 'suite', category: '6 Suites', description: 'Full living suite with separate bedroom, lounge, rain shower + soaking tub.', priceFrom: '$380', imageLabel: 'Suite — Master Bedroom' },
  { name: 'Presidential Room', slug: 'presidential', category: '1 Room', description: 'The pinnacle of Elevate luxury — expansive layout, private butler, panoramic Golf Course views.', priceFrom: 'POA', imageLabel: 'Presidential Suite — Panoramic View' },
]

const amenities = [
  { icon: Wifi, label: 'High-Speed WiFi' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Coffee, label: 'In-Room Dining' },
  { icon: BellRing, label: 'Room Service' },
  { icon: Moon, label: 'Turndown Service' },
  { icon: ConciergeBell, label: '24h Concierge' },
  { icon: Shirt, label: 'Laundry Service' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Lock, label: 'In-Room Safe' },
  { icon: ShieldCheck, label: 'Blackout Curtains' },
]

export default function AccommodationsPage() {
  return (
    <>
      <HeroSection
        title="Suites Designed for the Extraordinary"
        subtitle="Five distinct room categories, each an expression of warmth, privacy, and world-class comfort."
        overline="Accommodations"
        imageLabel="Elevate Hotel — Lobby"
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Accommodations', href: '/accommodations' },
        ]}
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <ElevateOrnament variant="crest" className="max-w-[240px] mx-auto" />
            <p className="text-overline mt-4 mb-3">Choose Your Elevation</p>
            <h2 className="text-section-title text-brand-charcoal">Our Room Categories</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {suites.slice(0, 3).map((suite) => (
              <RoomCard key={suite.slug} {...suite} />
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-[calc(66.666%+12px)] mx-auto"
          >
            {suites.slice(3).map((suite) => (
              <RoomCard key={suite.slug} {...suite} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Amenities strip */}
      <section className="py-12 bg-brand-warm-beige">
        <div className="container-luxury">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
          >
            {amenities.map((a) => (
              <motion.div key={a.label} variants={fadeInUp} className="flex flex-col items-center text-center gap-2 py-3">
                <a.icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                <span className="text-[11px] text-brand-walnut tracking-wider uppercase">{a.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-brand-cream text-center">
        <div className="container-luxury">
          <ElevateOrnament variant="minimal" />
          <h2 className="font-heading text-3xl text-brand-charcoal mt-4 mb-3">Enhancing Every Stay</h2>
          <p className="text-brand-taupe mb-8">Beyond the room, explore our dining, wellness, and concierge offerings.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/accommodations/in-room-dining" className="btn-primary">In-Room Dining</Link>
            <Link href="/accommodations/guest-services" className="btn-outline">Guest Services</Link>
            <Link href="/wellness" className="btn-outline">V-Wellness Spa</Link>
          </div>
        </div>
      </section>
    </>
  )
}
