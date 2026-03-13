'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ConciergeBell, Plane, Shirt, Building2, Flag, CircleDot, ShoppingBag,
  Car, Moon, Banknote,
} from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import ElevateOrnament from '@/components/ui/ElevateOrnament'
import { fadeInUp, stagger } from '@/lib/animations'

const services = [
  { icon: ConciergeBell, title: '24/7 Concierge', desc: 'Personal assistance around the clock. From restaurant reservations to city tours, your concierge team is always ready.' },
  { icon: Plane, title: 'Airport Transfer', desc: 'Meet & greet service from Kigali International Airport. Just 15 minutes away, we ensure a seamless arrival.' },
  { icon: Shirt, title: 'Laundry & Dry Cleaning', desc: 'Same-day service available for all garments. Express service within 4 hours upon request.' },
  { icon: Building2, title: 'Business Center', desc: 'Fully equipped 2,680 sqm conference facility on site. Meeting rooms, presentation equipment, and secretarial support.' },
  { icon: Flag, title: 'Golf Access', desc: 'Adjacent to the prestigious Nyarutarama Golf Course. Tee-time arrangements available through concierge.' },
  { icon: CircleDot, title: 'Padel Court', desc: 'On-site members\' facility available to hotel guests. Equipment provided, coaching sessions available.' },
  { icon: ShoppingBag, title: 'Souvenir Boutique', desc: 'Curated Rwandan crafts, luxury items, and artisanal goods. Take a piece of Rwanda home with you.' },
  { icon: Car, title: 'Private Parking', desc: '80+ secured parking spaces with 24/7 surveillance. Valet parking available for suite guests.' },
  { icon: Moon, title: 'Wake-Up & Turn-Down', desc: 'Personalised room preparation morning and evening. Your room, always at its finest.' },
  { icon: Banknote, title: 'Currency Exchange', desc: 'Available at reception during operating hours. Major currencies accepted with competitive rates.' },
]

export default function GuestServicesPage() {
  return (
    <>
      <HeroSection
        title="At Your Service, Always"
        subtitle="Every detail attended to. Every need anticipated. Your comfort is our highest priority."
        overline="GUEST SERVICES"
        imageLabel="Guest Services — Concierge Desk"
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Accommodations', href: '/accommodations' },
          { label: 'Guest Services', href: '/accommodations/guest-services' },
        ]}
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <ElevateOrnament className="mb-6" />
          <SectionHeading
            overline="Guest Services"
            title="Exceeding Every Expectation"
            subtitle="A comprehensive suite of services designed to make your stay effortless and extraordinary."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="flex gap-6 p-6 bg-white border border-brand-beige/50 hover:border-brand-gold/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center bg-brand-cream">
                    <service.icon className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-brand-navy">{service.title}</h3>
                  <p className="mt-2 text-sm text-brand-taupe leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream text-center">
        <div className="container-luxury">
          <p className="font-accent italic text-xl text-brand-charcoal mb-6">Need something not listed? Our concierge team specialises in making the impossible possible.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+250788308193" className="btn-primary">Call Concierge</a>
            <Link href="/contact" className="btn-outline">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  )
}
