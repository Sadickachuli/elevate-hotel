'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, BedDouble, Users } from 'lucide-react'

interface BookingBarProps {
  variant?: 'hero' | 'page'
}

export default function BookingBar({ variant = 'hero' }: BookingBarProps) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [room, setRoom] = useState('1')
  const [guests, setGuests] = useState('2')

  const isHero = variant === 'hero'

  return (
    <div
      className={`rounded ${
        isHero
          ? 'bg-white/10 backdrop-blur-md border border-white/15'
          : 'bg-white border border-brand-beige shadow-lg'
      }`}
    >
      {/* Desktop */}
      <div className="hidden lg:flex items-stretch">
        <BookingField
          icon={<Calendar className="w-3.5 h-3.5" />}
          label="Check In"
          isHero={isHero}
        >
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={fieldInputClass(isHero)}
          />
        </BookingField>

        <div className={`w-px ${isHero ? 'bg-white/15' : 'bg-brand-beige'} my-2`} />

        <BookingField
          icon={<Calendar className="w-3.5 h-3.5" />}
          label="Check Out"
          isHero={isHero}
        >
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={fieldInputClass(isHero)}
          />
        </BookingField>

        <div className={`w-px ${isHero ? 'bg-white/15' : 'bg-brand-beige'} my-2`} />

        <BookingField
          icon={<BedDouble className="w-3.5 h-3.5" />}
          label="Rooms"
          isHero={isHero}
        >
          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className={fieldSelectClass(isHero)}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n} className="bg-white text-brand-charcoal">
                {n} {n === 1 ? 'Room' : 'Rooms'}
              </option>
            ))}
          </select>
        </BookingField>

        <div className={`w-px ${isHero ? 'bg-white/15' : 'bg-brand-beige'} my-2`} />

        <BookingField
          icon={<Users className="w-3.5 h-3.5" />}
          label="Guests"
          isHero={isHero}
        >
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className={fieldSelectClass(isHero)}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n} className="bg-white text-brand-charcoal">
                {n} {n === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </BookingField>

        <Link
          href="/booking"
          className="ml-auto bg-brand-gold text-brand-navy px-8 flex items-center text-xs tracking-[0.2em] uppercase font-semibold hover:bg-brand-gold-light transition-all whitespace-nowrap"
        >
          Check Availability
        </Link>
      </div>

      {/* Mobile */}
      <div className="lg:hidden py-3 px-4">
        <Link
          href="/booking"
          className="btn-primary w-full justify-center !py-3 !text-xs"
        >
          Check Availability
        </Link>
      </div>
    </div>
  )
}

function fieldInputClass(isHero: boolean) {
  return `w-full bg-transparent border-none outline-none text-xs ${
    isHero ? 'text-white placeholder:text-white/40' : 'text-brand-walnut placeholder:text-brand-sand'
  }`
}

function fieldSelectClass(isHero: boolean) {
  return `w-full bg-transparent border-none outline-none text-xs appearance-none cursor-pointer ${
    isHero ? 'text-white' : 'text-brand-walnut'
  }`
}

function BookingField({
  icon,
  label,
  isHero,
  children,
}: {
  icon: React.ReactNode
  label: string
  isHero: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex-1 flex items-center gap-2.5 px-4 py-3">
      <span className="text-brand-gold flex-shrink-0">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <span
          className={`block text-[9px] tracking-[0.2em] uppercase font-medium mb-0.5 ${
            isHero ? 'text-white/40' : 'text-brand-sand'
          }`}
        >
          {label}
        </span>
        {children}
      </div>
    </div>
  )
}
