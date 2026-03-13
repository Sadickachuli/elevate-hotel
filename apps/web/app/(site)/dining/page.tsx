'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionHeading from '@/components/ui/SectionHeading'
import ElevateOrnament from '@/components/ui/ElevateOrnament'
import { fadeInUp, stagger } from '@/lib/animations'

const venues = [
  {
    name: 'V-Coffee & Main Restaurant',
    slug: '/dining/restaurant',
    desc: 'All-day dining featuring international cuisine elevated with Rwandan soul. From sunrise breakfasts to elegant dinner service.',
    hours: '6:30 AM – 10:30 PM',
    imageLabel: 'V-Coffee & Restaurant — Interior',
  },
  {
    name: 'Gemilli Terrace',
    slug: '/dining/poolside-bar',
    desc: 'Alfresco terrace dining overlooking the gardens. Light meals, sundowners, and cocktails under the open Kigali sky.',
    hours: '11:00 AM – 10:00 PM',
    imageLabel: 'Gemilli Terrace — Evening',
  },
  {
    name: 'Cave Bar',
    slug: '/dining/piano-lounge',
    desc: 'Underground cocktail bar with intimate atmosphere. Exposed stone walls, moody lighting, and hand-crafted cocktails.',
    hours: '5:00 PM – 1:00 AM',
    imageLabel: 'Cave Bar — Cocktails',
  },
  {
    name: 'Private Lounge',
    slug: '/dining/special-events',
    desc: 'Exclusive private dining for corporate events, celebrations, and VIP guests. Bespoke menus and dedicated service.',
    hours: 'By Reservation',
    imageLabel: 'Private Lounge — Table Setting',
  },
]

export default function DiningPage() {
  return (
    <>
      <HeroSection
        title="Where Every Meal Becomes a Memory"
        subtitle="Four distinct venues, one extraordinary culinary journey. From alfresco garden terraces to underground cocktail sanctuaries."
        overline="DINING"
        imageLabel="Dining — Aerial Overview"
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dining', href: '/dining' },
        ]}
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <ElevateOrnament className="mb-6" />
          <SectionHeading
            overline="Dining at Elevate"
            title="Flavour. Atmosphere. Distinction."
            subtitle="Every dining experience at Elevate is crafted to be remembered."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {venues.map((venue) => (
              <motion.div key={venue.name} variants={fadeInUp}>
                <Link href={venue.slug} className="group block">
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      aspect="card"
                      label={venue.imageLabel}
                      dark
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs text-brand-gold tracking-wider uppercase">{venue.hours}</span>
                      <h3 className="font-heading text-2xl text-white mt-1 group-hover:text-brand-gold transition-colors">
                        {venue.name}
                      </h3>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-brand-taupe leading-relaxed">{venue.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-warm-beige text-center">
        <div className="container-luxury">
          <p className="font-accent italic text-xl text-brand-charcoal max-w-2xl mx-auto mb-6">
            For reservations, private events, or special dietary requirements, our team is here to assist.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dining/special-events" className="btn-primary">Host an Event</Link>
            <Link href="/contact" className="btn-outline">Make a Reservation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
