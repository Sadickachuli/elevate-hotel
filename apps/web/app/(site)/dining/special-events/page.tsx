'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import ElevateOrnament from '@/components/ui/ElevateOrnament'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger } from '@/lib/animations'

const venues = [
  { name: 'Private Lounge', capacity: 'Up to 30 guests', desc: 'Intimate setting with dedicated service, perfect for corporate dinners and private celebrations.', imageLabel: 'Private Lounge — Event Setup' },
  { name: 'Gemilli Terrace', capacity: 'Up to 60 guests', desc: 'Open-air garden terrace for receptions, cocktail parties, and alfresco dining events.', imageLabel: 'Gemilli Terrace — Evening Reception' },
  { name: 'Cave Bar', capacity: 'Up to 40 guests', desc: 'Underground exclusivity for cocktail soirées, launches, and unforgettable gatherings.', imageLabel: 'Cave Bar — Cocktail Soirée' },
  { name: 'Full Venue Buyout', capacity: 'Up to 150 guests', desc: 'Exclusive access to all dining venues for large-scale events, weddings, and galas.', imageLabel: 'Full Venue — Gala Setup' },
]

const eventTypes = ['Corporate Dinner', 'Private Celebration', 'Brunch Event', 'Business Lunch', 'Wedding Dinner', 'Cocktail Reception', 'Product Launch', 'Other']

export default function SpecialEventsPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '',
    eventType: '', venue: '', date: '', guestCount: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: 'Special Event Inquiry' }),
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const updateField = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  return (
    <>
      <HeroSection
        title="Host the Extraordinary"
        subtitle="From corporate gatherings to intimate celebrations, create unforgettable moments at Elevate."
        overline="SPECIAL EVENTS"
        imageLabel="Special Events — Gala Dinner"
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dining', href: '/dining' },
          { label: 'Special Events', href: '/dining/special-events' },
        ]}
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <ElevateOrnament className="mb-6" />
          <SectionHeading
            overline="Event Venues"
            title="Spaces for Every Occasion"
            subtitle="Four distinctive venues, each offering a unique atmosphere for your special event."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {venues.map((venue) => (
              <motion.div
                key={venue.name}
                variants={fadeInUp}
                className="group bg-white border border-brand-beige/50 hover:border-brand-gold/30 transition-colors overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImagePlaceholder label={venue.imageLabel} aspect="landscape" className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-xl text-brand-navy">{venue.name}</h3>
                  <p className="text-xs text-brand-gold tracking-wider uppercase mt-1">{venue.capacity}</p>
                  <p className="mt-3 text-sm text-brand-taupe leading-relaxed">{venue.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <ElevateOrnament className="mb-6" />
          <SectionHeading
            overline="Inquire"
            title="Plan Your Event"
            subtitle="Tell us about your vision and we'll craft the perfect experience."
          />

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Full Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="input-luxury" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Company</label>
                <input type="text" value={formData.company} onChange={(e) => updateField('company', e.target.value)} className="input-luxury" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Email *</label>
                <input type="email" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="input-luxury" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Phone</label>
                <input type="tel" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="input-luxury" />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Event Type *</label>
                <select required value={formData.eventType} onChange={(e) => updateField('eventType', e.target.value)} className="input-luxury">
                  <option value="">Select type</option>
                  {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Preferred Date</label>
                <input type="date" value={formData.date} onChange={(e) => updateField('date', e.target.value)} className="input-luxury" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Guest Count</label>
                <input type="number" min="1" value={formData.guestCount} onChange={(e) => updateField('guestCount', e.target.value)} className="input-luxury" placeholder="Approx." />
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Tell Us About Your Event</label>
              <textarea rows={5} value={formData.message} onChange={(e) => updateField('message', e.target.value)} className="input-luxury resize-none" />
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <button type="submit" disabled={status === 'sending'} className="btn-primary">
                {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </motion.div>

            {status === 'sent' && (
              <p className="text-center text-brand-gold">Thank you! Our events team will contact you within 24 hours.</p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-600">Something went wrong. Please try again or call us directly.</p>
            )}
          </motion.form>
        </div>
      </section>
    </>
  )
}
