'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, MessageCircle, Mail, Info } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import { fadeInUp, stagger } from '@/lib/animations'

const roomCategories = [
  { value: 'standard', label: 'Standard Room — From $120/night' },
  { value: 'deluxe', label: 'Deluxe Room — From $180/night' },
  { value: 'vip-studio', label: 'VIP Studio — From $250/night' },
  { value: 'suite', label: 'Suite — From $380/night' },
  { value: 'presidential', label: 'Presidential Room — POA' },
]

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', checkIn: '', checkOut: '',
    room: '', guests: '2', specialRequests: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const updateField = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  if (status === 'sent') {
    return (
      <>
        <div className="min-h-screen bg-brand-ivory flex items-center justify-center pt-20">
          <div className="text-center max-w-lg mx-auto px-6">
            <div className="gold-divider !my-0 !mb-8" />
            <h1 className="font-heading text-4xl text-brand-navy">Thank You</h1>
            <p className="mt-6 text-brand-taupe leading-relaxed">
              Your reservation request has been received. Our team will confirm your booking within 2 hours during operating hours (8:00 AM – 8:00 PM EAT).
            </p>
            <p className="mt-4 text-sm text-brand-sand">
              A confirmation email has been sent to <span className="text-brand-walnut">{formData.email}</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/" className="btn-primary">Return Home</Link>
              <a href="https://wa.me/250788308193" target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <HeroSection
        title="Reserve Your Elevation"
        subtitle="Begin your extraordinary stay at Kigali's finest boutique hotel."
        imageLabel="Booking — Hotel View"
        compact
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Booking', href: '/booking' }]}
        overline="Reservations"
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
            <motion.form
              initial="hidden"
              animate="visible"
              variants={stagger}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-2 p-4 bg-brand-cream/80 border border-brand-beige/50 text-sm text-brand-taupe">
                <Info className="w-4 h-4 text-brand-gold flex-shrink-0" />
                Our online booking system is launching soon. For immediate reservations, contact us directly.
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="input-luxury" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="input-luxury" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Phone *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="input-luxury" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Guests</label>
                  <select value={formData.guests} onChange={(e) => updateField('guests', e.target.value)} className="input-luxury">
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Check-In Date *</label>
                  <input type="date" required value={formData.checkIn} onChange={(e) => updateField('checkIn', e.target.value)} className="input-luxury" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Check-Out Date *</label>
                  <input type="date" required value={formData.checkOut} onChange={(e) => updateField('checkOut', e.target.value)} className="input-luxury" />
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Room Category *</label>
                <select required value={formData.room} onChange={(e) => updateField('room', e.target.value)} className="input-luxury">
                  <option value="">Select a room</option>
                  {roomCategories.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Special Requests</label>
                <textarea rows={4} value={formData.specialRequests} onChange={(e) => updateField('specialRequests', e.target.value)} className="input-luxury resize-none" placeholder="Airport transfer, dietary requirements, celebrations, etc." />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
                  {status === 'sending' ? 'Submitting...' : 'Check Availability'}
                </button>
              </motion.div>

              {status === 'error' && (
                <p className="text-red-600 text-sm text-center">Something went wrong. Please try again or contact us directly.</p>
              )}
            </motion.form>

            <div className="space-y-6">
              <div className="bg-white border border-brand-beige p-8">
                <h3 className="font-heading text-xl text-brand-navy mb-6">Contact Us Directly</h3>
                <div className="space-y-4">
                  <a href="https://wa.me/250788308193" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-brand-taupe hover:text-brand-gold transition-colors">
                    <MessageCircle className="w-5 h-5 text-brand-gold" /> WhatsApp +250 788 308 193
                  </a>
                  <a href="tel:+250788308193" className="flex items-center gap-3 text-sm text-brand-taupe hover:text-brand-gold transition-colors">
                    <Phone className="w-5 h-5 text-brand-gold" /> +250 788 308 193
                  </a>
                  <a href="tel:+250788280068" className="flex items-center gap-3 text-sm text-brand-taupe hover:text-brand-gold transition-colors">
                    <Phone className="w-5 h-5 text-brand-gold" /> +250 788 280 068
                  </a>
                  <a href="mailto:reservations.elevatesuites@gmail.com" className="flex items-center gap-3 text-sm text-brand-taupe hover:text-brand-gold transition-colors">
                    <Mail className="w-5 h-5 text-brand-gold" /> reservations.elevatesuites@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-brand-navy p-8 text-center">
                <p className="text-white/70 text-sm leading-relaxed">
                  Reservation hours:<br />
                  <span className="text-white font-semibold">8:00 AM – 8:00 PM EAT</span>
                </p>
                <p className="text-white/40 text-xs mt-3">Reception available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
