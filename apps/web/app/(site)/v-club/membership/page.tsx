'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '@/lib/animations'

const tiers = ['Silver — V-Club Access', 'Gold — V-Club Premier', 'Platinum — V-Club Private']

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    name: '', title: '', company: '', email: '', phone: '',
    tier: '', source: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/api/vclub-inquiry', {
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
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6 pt-32">
          <div className="w-px h-16 bg-brand-gold/40 mx-auto mb-8" />
          <h1 className="font-heading text-4xl text-white italic">Thank You</h1>
          <p className="mt-6 text-white/50 leading-relaxed">
            A member of our team will be in contact within 24 hours to discuss your V-Club membership.
          </p>
          <p className="mt-4 text-xs text-white/30 tracking-wider uppercase">
            Elevate Hotel by Lidace
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="container-luxury py-32 md:py-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="w-px h-12 bg-brand-gold/40 mx-auto mb-6" />
            <p className="label-overline">V-Club Membership</p>
            <h1 className="font-heading text-4xl md:text-5xl text-white mt-4">
              Begin Your Membership
            </h1>
            <p className="mt-4 text-white/40 text-sm">
              Complete the form below and our membership team will be in touch within 24 hours.
            </p>
          </motion.div>

          <motion.form
            variants={stagger}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp}>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Full Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="input-luxury-dark" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Title</label>
                <input type="text" value={formData.title} onChange={(e) => updateField('title', e.target.value)} className="input-luxury-dark" placeholder="e.g. Mr, Mrs, Dr" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Company</label>
                <input type="text" value={formData.company} onChange={(e) => updateField('company', e.target.value)} className="input-luxury-dark" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Email *</label>
                <input type="email" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="input-luxury-dark" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Phone *</label>
                <input type="tel" required value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="input-luxury-dark" />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Preferred Tier</label>
                <select value={formData.tier} onChange={(e) => updateField('tier', e.target.value)} className="input-luxury-dark">
                  <option value="">Select tier</option>
                  {tiers.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">How did you hear about V-Club?</label>
              <select value={formData.source} onChange={(e) => updateField('source', e.target.value)} className="input-luxury-dark">
                <option value="">Select</option>
                <option value="hotel-guest">Hotel Guest</option>
                <option value="referral">Member Referral</option>
                <option value="social-media">Social Media</option>
                <option value="event">Event</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label className="block text-xs text-white/40 uppercase tracking-wider mb-1.5">Additional Message</label>
              <textarea rows={4} value={formData.message} onChange={(e) => updateField('message', e.target.value)} className="input-luxury-dark resize-none" />
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center pt-4">
              <button type="submit" disabled={status === 'sending'} className="btn-primary">
                {status === 'sending' ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </motion.div>

            {status === 'error' && (
              <p className="text-center text-red-400 text-sm">Something went wrong. Please try again or email reservations.elevatesuites@gmail.com</p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}
