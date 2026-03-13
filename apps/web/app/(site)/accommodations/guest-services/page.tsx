'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import ElevateOrnament from '@/components/ui/ElevateOrnament'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger } from '@/lib/animations'

const services = [
  { title: '24/7 Concierge', desc: 'Personal assistance around the clock. From restaurant reservations to city tours, your concierge team is always ready.', imageLabel: 'Concierge Desk' },
  { title: 'Airport Transfer', desc: 'Meet & greet service from Kigali International Airport. Just 15 minutes away, we ensure a seamless arrival.', imageLabel: 'Airport Transfer Vehicle' },
  { title: 'Laundry & Dry Cleaning', desc: 'Same-day service available for all garments. Express service within 4 hours upon request.', imageLabel: 'Laundry Service' },
  { title: 'Business Center', desc: 'Fully equipped 2,680 sqm conference facility on site. Meeting rooms, presentation equipment, and secretarial support.', imageLabel: 'Business Center & Conference' },
  { title: 'Golf Access', desc: 'Adjacent to the prestigious Nyarutarama Golf Course. Tee-time arrangements available through concierge.', imageLabel: 'Nyarutarama Golf Course' },
  { title: 'Padel Court', desc: 'On-site members\' facility available to hotel guests. Equipment provided, coaching sessions available.', imageLabel: 'Padel Court' },
  { title: 'Souvenir Boutique', desc: 'Curated Rwandan crafts, luxury items, and artisanal goods. Take a piece of Rwanda home with you.', imageLabel: 'Souvenir Boutique' },
  { title: 'Private Parking', desc: '80+ secured parking spaces with 24/7 surveillance. Valet parking available for suite guests.', imageLabel: 'Private Parking Area' },
  { title: 'Wake-Up & Turn-Down', desc: 'Personalised room preparation morning and evening. Your room, always at its finest.', imageLabel: 'Turn-Down Service' },
  { title: 'Currency Exchange', desc: 'Available at reception during operating hours. Major currencies accepted with competitive rates.', imageLabel: 'Reception & Currency Exchange' },
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
                className="group bg-white border border-brand-beige/50 hover:border-brand-gold/30 transition-colors overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImagePlaceholder label={service.imageLabel} aspect="landscape" className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
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
