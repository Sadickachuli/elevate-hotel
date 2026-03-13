'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Clock, Instagram, Facebook } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import { fadeInUp, stagger } from '@/lib/animations'

const subjects = [
  { value: 'booking', label: 'Booking Inquiry' },
  { value: 'vclub', label: 'V-Club Membership' },
  { value: 'events', label: 'Private Events' },
  { value: 'general', label: 'General Inquiry' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/api/contact', {
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

  return (
    <>
      <HeroSection
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello."
        imageLabel="Contact — Reception"
        compact
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]}
        overline="Contact"
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            {/* Form */}
            <motion.form
              initial="hidden"
              animate="visible"
              variants={stagger}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.h2 variants={fadeInUp} className="font-heading text-3xl text-brand-navy mb-2">Send a Message</motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="input-luxury" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="input-luxury" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="input-luxury" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Subject *</label>
                  <select required value={formData.subject} onChange={(e) => updateField('subject', e.target.value)} className="input-luxury">
                    <option value="">Select a subject</option>
                    {subjects.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Message *</label>
                <textarea required rows={6} value={formData.message} onChange={(e) => updateField('message', e.target.value)} className="input-luxury resize-none" />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <button type="submit" disabled={status === 'sending'} className="btn-primary">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>

              {status === 'sent' && (
                <motion.p variants={fadeInUp} className="text-brand-gold">Thank you! We will be in touch shortly.</motion.p>
              )}
              {status === 'error' && (
                <motion.p variants={fadeInUp} className="text-red-600">Something went wrong. Please try again.</motion.p>
              )}
            </motion.form>

            {/* Info Panel */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="bg-white border border-brand-beige p-8">
                <h3 className="font-heading text-xl text-brand-navy mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <a
                    href="https://maps.google.com/?q=Nyarutarama+Kigali+Rwanda+KG+13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-brand-taupe hover:text-brand-gold transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>KG 13 Ave, Nyarutarama,<br />Kigali, Rwanda</span>
                  </a>
                  <a href="tel:+250788308193" className="flex items-center gap-3 text-sm text-brand-taupe hover:text-brand-gold transition-colors">
                    <Phone className="w-5 h-5 text-brand-gold" />
                    +250 788 308 193
                  </a>
                  <a href="https://wa.me/250788308193" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-brand-taupe hover:text-brand-gold transition-colors">
                    <MessageCircle className="w-5 h-5 text-brand-gold" />
                    WhatsApp +250 788 308 193
                  </a>
                  <a href="mailto:reservations.elevatesuites@gmail.com" className="flex items-center gap-3 text-sm text-brand-taupe hover:text-brand-gold transition-colors">
                    <Mail className="w-5 h-5 text-brand-gold" />
                    reservations.elevatesuites@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white border border-brand-beige p-8">
                <h3 className="font-heading text-xl text-brand-navy mb-4">Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-brand-taupe">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span><strong className="text-brand-walnut">Reception:</strong> 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-taupe">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span><strong className="text-brand-walnut">Reservations:</strong> 8:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white border border-brand-beige p-8">
                <h3 className="font-heading text-xl text-brand-navy mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 border border-brand-beige flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all text-brand-taupe">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 border border-brand-beige flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all text-brand-taupe">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-brand-cream border border-brand-beige p-8">
                <div className="text-center text-brand-sand">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-brand-gold" />
                  <p className="text-xs tracking-[0.2em] uppercase">Google Maps</p>
                  <p className="text-xs mt-1">KG 13 Ave, Nyarutarama, Kigali</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
