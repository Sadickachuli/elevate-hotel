'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Phone } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import { fadeInUp, stagger } from '@/lib/animations'

export default function ManageBookingPage() {
  const [confirmationNumber, setConfirmationNumber] = useState('')
  const [email, setEmail] = useState('')
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearched(true)
  }

  return (
    <>
      <HeroSection
        title="Manage Your Booking"
        subtitle="View, modify, or cancel your reservation."
        imageLabel="Manage Booking"
        compact
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury max-w-xl mx-auto">
          <motion.form
            initial="hidden"
            animate="visible"
            variants={stagger}
            onSubmit={handleSearch}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">
                Confirmation Number
              </label>
              <input
                type="text"
                required
                value={confirmationNumber}
                onChange={(e) => setConfirmationNumber(e.target.value)}
                className="input-luxury"
                placeholder="e.g. ELV-ABC123"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-luxury"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <button type="submit" className="btn-primary w-full justify-center">
                <Search className="w-4 h-4" /> Find Booking
              </button>
            </motion.div>
          </motion.form>

          {searched && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-brand-cream border border-brand-beige p-8 text-center"
            >
              <p className="text-brand-taupe mb-4">
                Our online booking management system is launching soon. For immediate assistance with your reservation, please contact us directly.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+250788308193" className="btn-primary">
                  <Phone className="w-4 h-4" /> Call Us
                </a>
                <a href="https://wa.me/250788308193" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}

          <div className="mt-8 text-center">
            <Link href="/booking" className="text-sm text-brand-gold hover:text-brand-gold-light transition-colors">
              Need to make a new reservation?
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
