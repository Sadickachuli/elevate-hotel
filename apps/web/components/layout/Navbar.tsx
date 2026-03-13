'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, Menu, X, ChevronDown,
  Bed, Star, Diamond, Key, Crown, BellRing, Utensils,
  Coffee, TreePalm, Lamp, PartyPopper,
  Dumbbell, Sparkles, Hand, Droplets,
  Lock, ClipboardList, FileText,
  Palette, Leaf, Map, Hotel,
} from 'lucide-react'

interface DropdownItem {
  icon: React.ElementType
  label: string
  desc: string
  href: string
}

interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
  dark?: boolean
}

const navItems: NavItem[] = [
  {
    label: 'Hotel',
    href: '/accommodations',
    dropdown: [
      { icon: Bed, label: 'Accommodations', desc: 'Overview of all room types', href: '/accommodations' },
      { icon: Hotel, label: 'Standard Rooms', desc: '18 rooms, from $120/night', href: '/accommodations/standard' },
      { icon: Star, label: 'Deluxe Rooms', desc: '5 rooms, from $180/night', href: '/accommodations/deluxe' },
      { icon: Diamond, label: 'VIP Studio', desc: '10 rooms, from $250/night', href: '/accommodations/vip-studio' },
      { icon: Key, label: 'Suites', desc: '6 suites, from $380/night', href: '/accommodations/suite' },
      { icon: Crown, label: 'Presidential', desc: 'The pinnacle of Elevate', href: '/accommodations/presidential' },
      { icon: BellRing, label: 'Guest Services', desc: 'Everything at your service', href: '/accommodations/guest-services' },
      { icon: Utensils, label: 'In-Room Dining', desc: 'Available 6AM–11PM', href: '/accommodations/in-room-dining' },
    ],
  },
  {
    label: 'Dining',
    href: '/dining',
    dropdown: [
      { icon: Coffee, label: 'V-Coffee & Restaurant', desc: 'All-day fine dining', href: '/dining/restaurant' },
      { icon: TreePalm, label: 'Gemilli Terrace', desc: 'Alfresco garden dining', href: '/dining/poolside-bar' },
      { icon: Lamp, label: 'Cave Bar', desc: 'Underground cocktail lounge', href: '/dining/piano-lounge' },
      { icon: PartyPopper, label: 'Private Events', desc: 'Host the extraordinary', href: '/dining/special-events' },
    ],
  },
  {
    label: 'V-Wellness',
    href: '/wellness',
    dropdown: [
      { icon: Sparkles, label: 'Spa & Treatments', desc: 'Book a treatment', href: '/wellness' },
      { icon: Dumbbell, label: 'Mini Gym', desc: 'Fitness facilities', href: '/wellness' },
      { icon: Hand, label: 'Nail Bar', desc: 'Luxury nail studio', href: '/wellness' },
      { icon: Droplets, label: 'Steam & Sauna', desc: 'Thermal experiences', href: '/wellness' },
    ],
  },
  {
    label: 'V-Club',
    href: '/v-club',
    dark: true,
    dropdown: [
      { icon: Lock, label: 'The Club', desc: "Private members' sanctuary", href: '/v-club' },
      { icon: ClipboardList, label: 'Membership', desc: 'Join the circle', href: '/v-club/membership' },
      { icon: FileText, label: 'Brochure', desc: 'Download our guide', href: '/v-club/brochure' },
    ],
  },
  {
    label: 'Experience',
    href: '/experience',
    dropdown: [
      { icon: Palette, label: 'Art Collection', desc: 'Curated Rwandan art', href: '/experience/art-gallery' },
      { icon: Leaf, label: 'Sustainability', desc: 'Our green commitment', href: '/experience/sustainability' },
      { icon: Map, label: 'Explore Kigali', desc: 'Curated city guide', href: '/experience/explore-kigali' },
    ],
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const openDropdown = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(label)
  }

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200)
  }

  const closeDropdownNow = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(null)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-navy/97 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-luxury flex items-center justify-between h-[80px] lg:h-[90px]">
        {/* Logo — larger */}
        <Link href="/" className="relative z-50 flex-shrink-0">
          <Image
            src="/logo-source.webp"
            alt="Elevate Hotel by Lidace"
            width={180}
            height={70}
            className="object-contain h-[50px] lg:h-[60px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav — centered */}
        <ul className="hidden lg:flex items-center gap-0">
          {navItems.map((item, idx) => {
            const isRight = idx >= navItems.length - 2
            const isActive = activeDropdown === item.label

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1 px-4 py-3 text-white/90 text-[11px] uppercase tracking-[0.2em] hover:text-brand-gold transition-colors duration-300 group"
                  onClick={closeDropdownNow}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        isActive ? 'rotate-180 text-brand-gold' : 'text-white/40'
                      }`}
                    />
                  )}
                  <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>

                {/* Dropdown panel */}
                <AnimatePresence>
                  {item.dropdown && isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full ${isRight ? 'right-0' : 'left-0'} min-w-[320px] shadow-2xl border-t-2 border-brand-gold ${
                        item.dark
                          ? 'bg-brand-navy text-white'
                          : 'bg-brand-ivory'
                      }`}
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="py-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href + sub.label}
                            href={sub.href}
                            onClick={closeDropdownNow}
                            className={`flex items-start gap-3.5 px-5 py-3 transition-all duration-200 border-l-2 border-transparent hover:border-brand-gold ${
                              item.dark
                                ? 'hover:bg-white/5'
                                : 'hover:bg-brand-cream/60'
                            }`}
                          >
                            <sub.icon
                              className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0"
                              strokeWidth={1.5}
                            />
                            <div>
                              <span className={`text-sm font-medium block ${
                                item.dark ? 'text-white' : 'text-brand-walnut'
                              }`}>
                                {sub.label}
                              </span>
                              <span className={`text-xs mt-0.5 block ${
                                item.dark ? 'text-white/40' : 'text-brand-taupe'
                              }`}>
                                {sub.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
          <a
            href="tel:+250788308193"
            className="flex items-center gap-2 text-white/60 text-xs hover:text-brand-gold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            +250 788 308 193
          </a>
          <Link href="/booking" className="btn-primary !py-2.5 !text-xs">
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-brand-navy z-40 overflow-y-auto"
          >
            <div className="pt-24 pb-12 px-8">
              <div className="mb-8">
                <Image
                  src="/logo-source.webp"
                  alt="Elevate Hotel by Lidace"
                  width={160}
                  height={60}
                  className="object-contain h-[50px] w-auto"
                />
              </div>

              <nav className="space-y-0">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-white/10">
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label
                        )
                      }
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="font-heading text-xl text-white">
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-brand-gold transition-transform duration-200 ${
                          mobileExpanded === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {item.dropdown && mobileExpanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-2 space-y-0.5">
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.href + sub.label}
                                href={sub.href}
                                className="flex items-center gap-3 py-2.5 px-3 text-white/60 hover:text-brand-gold hover:bg-white/5 transition-all rounded"
                                onClick={() => setIsOpen(false)}
                              >
                                <sub.icon className="w-4 h-4 text-brand-gold/50 flex-shrink-0" strokeWidth={1.5} />
                                <div>
                                  <span className="text-sm block">{sub.label}</span>
                                  <span className="text-[11px] text-white/30 block">{sub.desc}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              <div className="mt-10 space-y-4">
                <Link
                  href="/booking"
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Your Stay
                </Link>
                <a
                  href="tel:+250788308193"
                  className="flex items-center justify-center gap-2 text-white/50 text-sm hover:text-brand-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +250 788 308 193
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
