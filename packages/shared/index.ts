/**
 * Shared TypeScript types for Elevate Suites Kigali
 * Used by both the Next.js web app and Sanity Studio.
 */

// ─── SANITY BASE TYPES ──────────────────────────────────
export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

// ─── SUITE ───────────────────────────────────────────────
export type SuiteCategory = 'standard' | 'executive' | 'presidential'

export interface Suite extends SanityDocument {
  _type: 'suite'
  name: string
  slug: SanitySlug
  category: SuiteCategory
  tagline?: string
  description?: any[] // Portable Text
  heroImage?: SanityImage
  gallery?: SanityImage[]
  amenities?: string[]
  size?: number
  maxGuests?: number
  pricePerNight?: number
  featured: boolean
  order?: number
}

// ─── DINING ──────────────────────────────────────────────
export type DiningVenueType = 'restaurant' | 'poolside-bar' | 'piano-lounge' | 'in-room'

export interface DiningVenue extends SanityDocument {
  _type: 'diningVenue'
  name: string
  slug: SanitySlug
  type: DiningVenueType
  tagline?: string
  description?: any[]
  heroImage?: SanityImage
  gallery?: SanityImage[]
  openingHours?: string
  menuItems?: MenuItem[]
}

export interface MenuItem extends SanityDocument {
  _type: 'menuItem'
  name: string
  description?: string
  price?: number
  category?: string
  dietary?: string[]
  image?: SanityImage
  featured: boolean
}

// ─── GALLERY ─────────────────────────────────────────────
export type GalleryCategory = 'Suites' | 'Dining' | 'Views' | 'V-Club' | 'Exterior' | 'Events' | 'Kigali'

export interface GalleryImage extends SanityDocument {
  _type: 'galleryImage'
  title?: string
  image: SanityImage
  alt: string
  category: GalleryCategory
  order?: number
}

// ─── EVENT ───────────────────────────────────────────────
export interface Event extends SanityDocument {
  _type: 'event'
  title: string
  slug: SanitySlug
  description?: any[]
  date: string
  endDate?: string
  image?: SanityImage
  price?: number
  type?: string
  featured: boolean
}

// ─── REVIEW ──────────────────────────────────────────────
export interface Review extends SanityDocument {
  _type: 'review'
  guestName: string
  content: string
  rating: number
  source?: string
  date?: string
  featured: boolean
}

// ─── V-CLUB ─────────────────────────────────────────────
export interface VClubTier extends SanityDocument {
  _type: 'vClubTier'
  name: string
  slug: SanitySlug
  description?: string
  price?: number
  benefits?: string[]
  featured: boolean
  order?: number
  image?: SanityImage
}

// ─── SITE SETTINGS ───────────────────────────────────────
export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings'
  hotelName: string
  tagline?: string
  logo?: SanityImage
  phone?: string
  email?: string
  whatsapp?: string
  address?: string
  socialMedia?: {
    instagram?: string
    facebook?: string
    tiktok?: string
    twitter?: string
    linkedin?: string
  }
  bookingCta?: string
  announcement?: {
    enabled: boolean
    text?: string
    link?: string
  }
}

// ─── BOOKING (Stubbed — PMS TBD) ────────────────────────
export interface BookingRequest {
  suiteId: string
  checkIn: string
  checkOut: string
  guests: number
  guestName: string
  guestEmail: string
  guestPhone: string
  specialRequests?: string
}

export interface BookingConfirmation {
  confirmationNumber: string
  status: 'confirmed' | 'pending' | 'cancelled'
  suite: Suite
  checkIn: string
  checkOut: string
  totalPrice: number
}
