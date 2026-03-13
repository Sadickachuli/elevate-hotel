'use client'

import { useState } from 'react'

/**
 * CONTACT FORM
 * Sends inquiries via API route (email or stored in Sanity).
 *
 * TODO: Add form validation
 * TODO: Set up API route for form submission
 * TODO: Add success/error states
 * TODO: Add reCAPTCHA or honeypot for spam protection
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // TODO: POST to /api/contact
      console.log('Submitting:', formData)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 p-3 focus:border-brand-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-gray-300 p-3 focus:border-brand-gold focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border border-gray-300 p-3 focus:border-brand-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Subject</label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full border border-gray-300 p-3 focus:border-brand-gold focus:outline-none"
          >
            <option value="">Select a subject</option>
            <option value="booking">Booking Inquiry</option>
            <option value="vclub">V-Club Membership</option>
            <option value="events">Private Events</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Message</label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-gray-300 p-3 focus:border-brand-gold focus:outline-none resize-none"
        />
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-primary">
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <p className="text-green-600">Thank you! We will be in touch shortly.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
