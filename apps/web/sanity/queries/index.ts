import { groq } from 'next-sanity'

// ─── SUITES ──────────────────────────────────────────────
export const allSuitesQuery = groq`
  *[_type == "suite"] | order(order asc) {
    _id, name, slug, category, tagline, heroImage, pricePerNight, maxGuests, size, featured
  }
`

export const featuredSuitesQuery = groq`
  *[_type == "suite" && featured == true] | order(order asc) {
    _id, name, slug, category, tagline, heroImage, pricePerNight
  }
`

export const suiteBySlugQuery = groq`
  *[_type == "suite" && slug.current == $slug][0] {
    _id, name, slug, category, tagline, description, heroImage, gallery,
    amenities, size, maxGuests, pricePerNight
  }
`

// ─── DINING ──────────────────────────────────────────────
export const allDiningVenuesQuery = groq`
  *[_type == "diningVenue"] | order(name asc) {
    _id, name, slug, type, tagline, heroImage, openingHours
  }
`

export const diningVenueBySlugQuery = groq`
  *[_type == "diningVenue" && slug.current == $slug][0] {
    ...,
    menuItems[]-> { _id, name, description, price, category, dietary, image, featured }
  }
`

// ─── GALLERY ─────────────────────────────────────────────
export const galleryImagesQuery = groq`
  *[_type == "galleryImage"] | order(order asc) {
    _id, title, image, alt, category
  }
`

export const galleryByCategoryQuery = groq`
  *[_type == "galleryImage" && category == $category] | order(order asc) {
    _id, title, image, alt, category
  }
`

// ─── EVENTS ──────────────────────────────────────────────
export const upcomingEventsQuery = groq`
  *[_type == "event" && date >= now()] | order(date asc) {
    _id, title, slug, description, date, endDate, image, price, type, featured
  }
`

// ─── REVIEWS ─────────────────────────────────────────────
export const featuredReviewsQuery = groq`
  *[_type == "review" && featured == true] | order(date desc) [0..5] {
    _id, guestName, content, rating, source, date
  }
`

// ─── V-CLUB ─────────────────────────────────────────────
export const vClubTiersQuery = groq`
  *[_type == "vClubTier"] | order(order asc) {
    _id, name, slug, description, price, benefits, featured, image
  }
`

// ─── KIGALI GUIDE ────────────────────────────────────────
export const kigaliGuideQuery = groq`
  *[_type == "kigaliGuide"] | order(category asc, name asc) {
    _id, name, slug, description, category, image, address, website, recommended
  }
`

// ─── AWARDS ──────────────────────────────────────────────
export const awardsQuery = groq`
  *[_type == "award"] | order(year desc) {
    _id, title, organization, year, description, image, link, type
  }
`

// ─── SITE SETTINGS ───────────────────────────────────────
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    hotelName, tagline, logo, phone, email, whatsapp, address,
    socialMedia, bookingCta, announcement
  }
`

// ─── PAGES ───────────────────────────────────────────────
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title, slug, heroImage, body, seoTitle, seoDescription
  }
`
