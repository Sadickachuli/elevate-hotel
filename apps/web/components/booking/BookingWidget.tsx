'use client'

import { useState } from 'react'
import Link from 'next/link'

const roomCategories = [
  { value: 'standard', label: 'Standard Room' },
  { value: 'deluxe', label: 'Deluxe Room' },
  { value: 'vip-studio', label: 'VIP Studio' },
  { value: 'suite', label: 'Suite' },
  { value: 'presidential', label: 'Presidential Room' },
]

interface BookingWidgetProps {
  compact?: boolean
  defaultRoom?: string
  roomName?: string
  priceFrom?: string
}

export default function BookingWidget({
  compact = false,
  defaultRoom,
  roomName,
  priceFrom,
}: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [room, setRoom] = useState(defaultRoom || '')

  if (compact) {
    return (
      <div className="bg-brand-navy/95 backdrop-blur-md p-4 flex flex-col lg:flex-row items-end gap-4">
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          <div>
            <label className="block text-xs text-white/50 mb-1 tracking-wider uppercase">Check In</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="input-luxury-dark w-full !py-2.5" />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1 tracking-wider uppercase">Check Out</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="input-luxury-dark w-full !py-2.5" />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1 tracking-wider uppercase">Guests</label>
            <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="input-luxury-dark w-full !py-2.5">
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1 tracking-wider uppercase">Room</label>
            <select value={room} onChange={(e) => setRoom(e.target.value)} className="input-luxury-dark w-full !py-2.5">
              <option value="">Any</option>
              {roomCategories.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>
        </div>
        <Link href="/booking" className="btn-primary whitespace-nowrap">Check Availability</Link>
      </div>
    )
  }

  return (
    <div className="bg-white border border-brand-beige p-8">
      {roomName && (
        <h3 className="font-heading text-2xl text-brand-navy mb-1">{roomName}</h3>
      )}
      {priceFrom && (
        <p className="text-sm text-brand-taupe mb-6">
          From <span className="text-brand-gold font-semibold text-lg">{priceFrom}</span>/night
        </p>
      )}
      {!roomName && <h3 className="font-heading text-2xl text-brand-navy mb-6">Check Availability</h3>}

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Check In</label>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="input-luxury" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Check Out</label>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="input-luxury" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Guests</label>
          <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="input-luxury">
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
        {!defaultRoom && (
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-walnut mb-1.5">Room Type</label>
            <select value={room} onChange={(e) => setRoom(e.target.value)} className="input-luxury">
              <option value="">Select Room</option>
              {roomCategories.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>
        )}
        <Link href="/booking" className="btn-primary w-full mt-2 justify-center">
          Check Availability
        </Link>
        <a
          href="https://wa.me/250788308193"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline w-full justify-center !border-brand-walnut/30 !text-brand-walnut hover:!text-brand-navy"
        >
          Enquire by WhatsApp
        </a>
      </div>
    </div>
  )
}
