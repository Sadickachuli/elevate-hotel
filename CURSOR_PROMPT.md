# ELEVATE SUITES KIGALI — CURSOR MASTER BUILD PROMPT
> Give this entire document to Cursor (Claude Opus 4.6 agent) as your opening prompt.

---

## 🎯 MISSION

You are building the **complete, production-ready website** for **Elevate Hotel by Lidace** — a luxury boutique hotel in Nyarutarama, Kigali, Rwanda. The monorepo scaffold already exists in this folder. Your job is to fill every page with real content and world-class design.

**Do not ask questions. Build everything. Use placeholder image components where photos are needed (we will swap them in later). Every page must be fully designed, content-complete, and pixel-perfect.**

---

## 🏨 ABOUT THE PROPERTY

**Full Name:** Elevate Hotel by Lidace
**Tagline:** *Where Luxury Meets Elevation*
**Location:** KG 13 Ave, Nyarutarama, Kigali, Rwanda (near Nyarutarama Golf Course)
**Address:** Nyarutarama-Kigali-Rwanda, KG 13, Avenue 88
**Phone:** +250 788 308 193 / +250 788 280 068
**Email:** reservations.elevatesuites@gmail.com
**Website:** elevatesuiteskigali.com
**Part of:** The Elevate Precinct development by Lidace Group

**Positioning:** The gold standard of Rwandan hospitality — competing directly with Marriott Kigali, Serena Kigali, and internationally with Saxon Johannesburg. Unparalleled blend of luxury and privacy in an experience not readily available elsewhere in Rwanda.

**Total GFA:** 8,364 sqm | **Parking:** 80+ spaces

---

## 🎨 DESIGN SYSTEM — IMPLEMENT EXACTLY

### Design Inspiration
Combine three reference properties into one unified aesthetic:
- **Saxon Hotel (Johannesburg):** Intimate, understated ultra-luxury. Warm champagne/ivory tones, organic textures, private villa intimacy, no ostentation.
- **Serena Kigali:** African luxury meets international standard. Earthy warmth, lush garden integration, local art and cultural authenticity.
- **Marriott Kigali:** Contemporary architectural precision, clean lines, sophisticated urban confidence.

The result: **warm contemporary African luxury** — never cold or corporate. Think golden candlelight, warm marble, tropical gardens, curated art, and absolute privacy.

---

### Color Palette (Tailwind CSS custom tokens — update `tailwind.config.ts`)

```ts
colors: {
  brand: {
    // Core Elevate brand colors (from logo: deep navy + gold)
    navy:       '#0E1628',   // Deep navy — hero backgrounds, footer, V-Club
    gold:       '#C9A84C',   // Elevate gold — CTAs, dividers, accents
    'gold-light': '#E8C96A', // Hover state for gold

    // Warm luxury palette (Saxon/Serena inspired)
    ivory:      '#FAF6EE',   // Primary background
    cream:      '#F0E6D3',   // Section alternates, cards
    beige:      '#E8D5B7',   // Borders, subtle backgrounds
    sand:       '#C4A882',   // Secondary text, muted elements
    taupe:      '#8B7355',   // Body text on light backgrounds
    walnut:     '#4A3728',   // Dark body text, headings on light
    charcoal:   '#1C1C1E',   // Near-black — headings, navbar scrolled
    'off-white': '#F8F4EE',  // Alternative ivory

    // Marble/stone accent
    marble:     '#E8E4E0',   // Marble-inspired neutral
  }
}
```

### Typography (Google Fonts — already in layout.tsx)

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display headings (H1/H2) | Playfair Display | 400, 700 | Italic for elegance on hero sections |
| Section headings (H3/H4) | Playfair Display | 600 | Regular |
| Body text | Inter | 300, 400 | Light weight for luxury feel |
| Captions, labels, nav | Inter | 400, 500 | Tracked uppercase for labels |
| Accent / pull quotes | Cormorant Garamond | 300 italic | Add this font — sophisticated long-form |

```tsx
// Add to layout.tsx
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})
```

### Spacing & Layout
- Max content width: `1320px` (container-luxury class)
- Section vertical padding: `py-24 md:py-32` (generous breathing room)
- Hero sections: Full viewport height (`min-h-screen`)
- Image aspect ratios: `16:9` for hero, `4:3` for cards, `1:1` for portrait/suite details

### Global CSS Classes to define in `globals.css`

```css
.container-luxury {
  @apply max-w-[1320px] mx-auto px-6 md:px-10 lg:px-16;
}
.section-padding {
  @apply py-24 md:py-32;
}
.font-heading {
  font-family: var(--font-heading); /* Playfair Display */
}
.font-body {
  font-family: var(--font-body); /* Inter */
}
.font-accent {
  font-family: var(--font-cormorant); /* Cormorant Garamond */
}
.text-gold-rule {
  @apply flex items-center gap-4 text-brand-gold tracking-[0.25em] uppercase text-xs font-semibold;
}
.text-gold-rule::before,
.text-gold-rule::after {
  content: '';
  @apply flex-1 h-px bg-brand-gold/30;
}
.btn-primary {
  @apply bg-brand-gold text-brand-navy px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-semibold
         hover:bg-brand-gold-light transition-all duration-300 inline-flex items-center gap-2;
}
.btn-outline {
  @apply border border-brand-gold text-brand-gold px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-semibold
         hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 inline-flex items-center gap-2;
}
.btn-ghost-light {
  @apply border border-white/40 text-white px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-semibold
         hover:border-white hover:bg-white/10 transition-all duration-300;
}
.gold-divider {
  @apply w-16 h-px bg-brand-gold mx-auto my-6;
}
.label-overline {
  @apply text-brand-gold tracking-[0.3em] uppercase text-xs font-semibold;
}
```

### Image Placeholder Component
Since no real photos are available yet, create `/components/ui/ImagePlaceholder.tsx`:

```tsx
// Renders a styled placeholder that looks intentional, not broken
// Shows aspect ratio, category label, and subtle gradient
interface ImagePlaceholderProps {
  aspect?: 'hero' | 'landscape' | 'square' | 'portrait'
  label?: string
  className?: string
  dark?: boolean
}
```

Use `bg-brand-navy` for dark placeholders (hero, V-Club) and `bg-brand-cream` for light ones.

---

## 🗂️ PAGE-BY-PAGE SPECIFICATIONS

---

### 1. HOME PAGE — `app/(site)/page.tsx`
The cinematic entry point. Saxon-level drama, Marriott-level clarity.

**Section 1 — Cinematic Hero**
- Full viewport, dark overlay on placeholder
- Subtle animated text reveal (use `framer-motion` or CSS animation)
- Logo centered or top-left
- Headline: `"Where Kigali's Finest Await"` (Playfair Display, 72–96px, white, italic)
- Subline: `"Nestled beside the Nyarutarama Golf Course — an elevation of privacy, luxury, and African soul."`
- CTAs: `[Book Your Stay]` (gold filled) + `[Explore the Property]` (outline white)
- Scroll indicator arrow (animated pulse)
- Navbar: transparent on load → dark navy on scroll

**Section 2 — Introduction / Brand Statement**
- Center-aligned, off-white background
- Gold overline: `"ELEVATE HOTEL BY LIDACE"`
- Headline: `"A New Standard of Rwandan Luxury"`
- Body (Cormorant Garamond, 20px): *"Situated in the vibrant city of Kigali, Elevate Hotel Suite provides a stunning panoramic view of the Golf Course. Crafted to deliver an unparalleled blend of luxury and privacy, our establishment offers an exceptional experience not readily available elsewhere in Rwanda — a comprehensive range of outstanding services, all under one extraordinary roof."*
- Gold divider
- 3 stat pills: `8,364 sqm` | `40+ Keys` | `Since 2026`

**Section 3 — Accommodations Tease** (Saxon-style editorial)
- Alternating layout: image left/right with content
- Featured rooms: Standard, Deluxe, VIP Studio, Suite, Presidential
- Each card: Room name, short description, key amenity icons, `[View Suite]` link
- Background: cream `#F0E6D3`

**Section 4 — The Precinct** (anchor/context section)
- Dark navy background
- 3-column grid showing hotel's unique offer:
  - 🏨 **The Hotel** — 40 keys across 5 categories, world-class amenities
  - 🌿 **V-Wellness** — 456 sqm private spa sanctuary
  - 🔐 **V-Club** — Exclusive members-only private club
- Each with gold icon, heading, 2-line description, link

**Section 5 — Dining Preview**
- Full-width editorial image split
- Left: Dark overlay with V-Coffee & Restaurant text
- Right: Cave Bar teaser
- Headline: `"Flavour. Atmosphere. Distinction."`

**Section 6 — V-Wellness Feature** (Serena-inspired warmth)
- Warm beige background
- Left: Large placeholder (spa/wellness aesthetic — beige/cream tone)
- Right: Content
  - Overline: `"V-WELLNESS SPA"`
  - Headline: `"Surrender to Stillness"`
  - Description of spa offering
  - List of key facilities: Mini Gym, Nail Bar, Steam Rooms, Massage Rooms, Couple Suites, Doctor's Office
  - CTA: `[Discover V-Wellness]`

**Section 7 — Location**
- Map embed placeholder (Google Maps of Nyarutarama)
- Text: Near Kigali National Airport, Convention Center, Nyarutarama Golf Course, City Center
- Address card with phone/email

**Section 8 — Reviews / Social Proof**
- 3 curated Google review cards (fabricated but realistic)
- Dark navy background, gold stars, italic Cormorant Garamond quotes
- Names: "Sarah M. — Business Traveler", "Jean-Pierre K. — Kigali Resident", "Emma T. — Leisure Guest"

**Section 9 — V-Club Teaser** (high-security, exclusive feel)
- Very dark background (near black)
- Minimal text, maximum atmosphere
- Headline: `"Some Doors Open by Invitation Only"` (white, italic Playfair)
- Subline about V-Club private membership
- CTA: `[Learn About Membership]` (gold outline)

**Footer**
- Dark navy
- Logo top-center
- 4-column links: Hotel, Dining, Wellness, V-Club
- Contact info + social icons (Instagram, Facebook, TikTok)
- Copyright + legal links
- `"Part of the Elevate Precinct by Lidace"`

---

### 2. NAVBAR — `components/layout/Navbar.tsx`
- Transparent on hero, transitions to `bg-brand-navy/95 backdrop-blur` on scroll
- Logo: Elevate crest (use SVG text placeholder until logo file added)
- Left links: Hotel | Dining | V-Wellness | V-Club | Experience
- Right: Phone number (small) + `[Book Now]` gold button
- Mobile: Hamburger → full-screen dark overlay menu
- Active page indicator: gold underline

---

### 3. ACCOMMODATIONS OVERVIEW — `app/(site)/accommodations/page.tsx`

**Hero:** `"Suites Designed for the Extraordinary"` — dark hero, full width

**Room Categories Grid:**

| Category | Count | Description |
|----------|-------|-------------|
| Standard Room | 18 | Elegant comfort with premium linens, en-suite marble bathroom, garden or courtyard views. From $120/night |
| Deluxe Room | 5 | Elevated comfort with upgraded furnishings, larger workdesk, premium minibar. From $180/night |
| VIP Room / Studio | 10 | Spacious studio layout with separate sitting area, private balcony access. From $250/night |
| Suite | 6 | Full living suite with separate bedroom, lounge, rain shower + soaking tub. From $380/night |
| Presidential Room | 1 | The pinnacle of Elevate luxury — expansive layout, private butler, panoramic Golf Course views. POA |

Each category card: Room name + count, description, key amenities (icons), size in sqm (approximate), CTA to individual page.

**Amenities Banner:** Full-width strip listing: WiFi | Air Conditioning | Room Service | Turndown Service | Minibar | In-Room Dining | 24h Concierge | Laundry | Blackout Curtains | Smart TV | Safe

---

### 4. INDIVIDUAL SUITE PAGE — `app/(site)/accommodations/[slug]/page.tsx`

Dynamic page. Generate static data for all 5 suite categories.

**Page structure:**
- Full-width hero image placeholder (specific to room type)
- Breadcrumb: Home > Accommodations > [Suite Name]
- Split layout: 60% gallery | 40% booking sidebar
- Gallery: 4-image grid with lightbox hook (stub the lightbox)
- Booking sidebar:
  - Room name + category badge
  - Price (from $X/night)
  - Key stats: Size | Max guests | Bed type | View
  - Amenities checklist (icons)
  - `[Check Availability]` gold button → links to `/booking`
  - `[Enquire by WhatsApp]` button (links to wa.me/250788308193)
- Below fold: Long-form room description | What's Included list | Location within property

---

### 5. IN-ROOM DINING — `app/(site)/accommodations/in-room-dining/page.tsx`

- Hero: `"Your Suite, Your Table"`
- Service hours: Available 6:00 AM – 11:00 PM | Late night menu 11 PM – 6 AM
- Menu categories: Breakfast | Light Meals | Main Courses | Desserts | Beverages | Wine & Spirits
- Sample items per category (make them luxurious but believable for Kigali):
  - Breakfast: Continental Spread, Full English, Eggs Benedict, Rwandan Breakfast Plate with Isombe & Umutsima
  - Mains: Pan-seared Nile Perch, Grilled Beef Tenderloin, Vegetable Tagine, Club Sandwich
  - Rwandan Special: Brochettes with Plantain, Ingoyi Stew, Matoke
- Order prompt: "Dial 0 from your room or WhatsApp +250 788 308 193"

---

### 6. GUEST SERVICES — `app/(site)/accommodations/guest-services/page.tsx`

**Services Grid (icon + title + description):**
- 24/7 Concierge — Personal assistance around the clock
- Airport Transfer — Meet & greet from Kigali International Airport (15 min)
- Laundry & Dry Cleaning — Same-day service available
- Business Center — Fully equipped (2,680 sqm conference facility on site)
- Golf Access — Adjacent to Nyarutarama Golf Course
- Padel Court — On-site Members' facility
- Souvenir Boutique — Curated Rwandan crafts and luxury items
- Private Parking — 80+ secured spaces
- Wake-Up & Turn-Down — Personalised room preparation
- Currency Exchange — Available at reception

---

### 7. DINING HUB — `app/(site)/dining/page.tsx`

- Hero: `"Where Every Meal Becomes a Memory"`
- 4 venue cards in a 2x2 grid:
  1. **V-Coffee & Main Restaurant** — All-day dining, international & Rwandan cuisine
  2. **Gemilli Terrace** — Alfresco terrace dining overlooking the gardens
  3. **Cave Bar** — Underground cocktail bar with intimate atmosphere
  4. **Private Lounge** — Exclusive private dining for events & VIP guests

---

### 8. RESTAURANT PAGE — `app/(site)/dining/restaurant/page.tsx`

- Name: **V-Coffee & Main Restaurant**
- Headline: `"The Heart of Elevate's Culinary World"`
- Hours: Breakfast 6:30–10:30 | Lunch 12:00–15:00 | Dinner 18:30–22:30
- Description: International cuisine elevated with Rwandan soul. Fresh local ingredients, expert culinary team, elegant setting with views of the garden.
- Sample Menu Highlights:
  - **Starters:** Avocado & Prawn Tower | Beef Carpaccio | Roasted Vegetable Soup
  - **Mains:** Grilled Tilapia Fillet, Rwandan-spiced Lamb Rack, Pan-Roasted Chicken Supreme, Mushroom Risotto
  - **Rwandan Signatures:** Brochettes de boeuf, Isombe with Ugali, Matoke & Groundnut Sauce
  - **Desserts:** Chocolate Fondant, Passion Fruit Panna Cotta, Seasonal Fruit Platter
- Reservation CTA: `[Reserve a Table]` → contact form

---

### 9. CAVE BAR — `app/(site)/dining/piano-lounge/page.tsx`

- Name: **Cave Bar**
- Tagline: `"Descend into Something Different"`
- Description: Kigali's most intimate cocktail experience. The Cave Bar is Elevate's underground sanctuary — exposed stone walls, moody lighting, hand-crafted cocktails, and a curated spirits collection.
- Hours: 17:00 – 01:00 daily
- Signature cocktails (5): Kigali Mule | Elevate Sour | Golf Club Old Fashioned | The V-Club Martini | Nyarutarama Sunset
- Note: Private hire available for exclusive events

---

### 10. GEMILLI TERRACE — `app/(site)/dining/poolside-bar/page.tsx`

- Name: **Gemilli Terrace**
- Tagline: `"Garden Views. Open Skies. Perfect Evenings."`
- Description: An alfresco terrace carved from lush tropical gardens. The Gemilli Terrace is where Kigali's gentle climate meets elevated light dining and cocktails under the open sky.
- Hours: 11:00 – 22:00
- Menu: Light lunch, afternoon snacks, sundowners, cocktails

---

### 11. SPECIAL EVENTS — `app/(site)/dining/special-events/page.tsx`

- Headline: `"Host the Extraordinary"`
- Venue options: Private Lounge | Gemilli Terrace | Cave Bar | Full Venue Buyout
- Types: Corporate Dinners | Private Celebrations | Brunches | Business Lunches | Wedding Dinners
- Contact form: Name | Company | Event Type | Date | Guest Count | Message | Submit

---

### 12. V-WELLNESS SPA — Create new: `app/(site)/wellness/page.tsx` + add to nav

- Hero: Dark, atmospheric. `"The Art of Complete Restoration"`
- Overline: `"V-WELLNESS — 456 SQM PRIVATE SPA"`
- Description: *"A dedicated wellness sanctuary where healing is an art form. The V-Wellness at Elevate offers a comprehensive programme of restorative treatments, fitness, and beauty within a space designed to awaken every sense."*
- **11 Facilities** (from presentation):
  1. Wellness Reception — Marble & walnut welcome desk, serene arrival experience
  2. Mini Gym — Fully equipped with Matrix & Reebok equipment, treadmills, free weights
  3. Nail Bar — Luxury manicure & pedicure studio, OPI products
  4. Ladies & Gents Changing Rooms — Private lockers, vanity stations
  5. Wet Area — Plunge pools, relaxation zone
  6. Steam Room (Ladies & Gents) — Separate eucalyptus steam rooms
  7. Single Massage Rooms (×2) — Private treatment rooms with en-suite shower
  8. Couple Massage Rooms (×2) — Romantic treatment suites with rose wall art
  9. Therapist & Doctor's Office — On-site medical professional
  10. Corridors — Art-lined therapeutic walkways
  11. Wellness Office — Treatment planning & consultation
- Treatment menu (stubs): Swedish Massage | Deep Tissue | Hot Stone | Couple's Ritual | Facial | Mani-Pedi | Body Wrap | Steam + Sauna
- Booking CTA

---

### 13. V-CLUB — `app/(site)/v-club/page.tsx`

This is the premium gated section. Dark, exclusive, minimal.

- Full dark background (near-black `#0A0A0A`)
- Gold text only, no bright colors
- Hero: `"A Circle of Excellence."` (large, centered, Playfair Display, white/gold)
- Subline: *"The V-Club is Elevate's private members sanctuary — a world within a world. Available exclusively to a curated membership, the club offers unrivalled dining, networking, wellness access, and social spaces reserved for those who expect nothing less than the best."*
- **What V-Club offers:**
  - Private Restaurant & Lounge (1,900 sqm facility)
  - Priority access to V-Wellness treatments
  - Members-only Padel Court
  - Business Center & Conference privileges
  - Golf Simulator suite (240 sqm)
  - Personal concierge & dedicated parking
  - Exclusive event access
  - Priority hotel room rates

- **Membership Tiers:**
  | Tier | Name | Description |
  |------|------|-------------|
  | Silver | V-Club Access | Core membership — club access, events, concierge |
  | Gold | V-Club Premier | Full access + spa credits + priority reservations |
  | Platinum | V-Club Private | All-inclusive + dedicated liaison + bespoke services |

- **Membership Inquiry Form** (gated feel):
  - Fields: Full Name | Title | Company | Email | Phone | Tier Interest | How did you hear about us?
  - Submit = sends to reservations.elevatesuites@gmail.com (set up API route)
  - Confirmation message: *"Thank you. A member of our team will be in contact within 24 hours."*

- **Digital Brochure Download** (`/v-club/brochure`): Placeholder page with PDF download button (link to a stub PDF for now)

---

### 14. EXPERIENCE — `app/(site)/experience/page.tsx`

- Hero: `"Kigali Through Elevated Eyes"`
- 3 sections:
  1. **Art Collection** — *"Elevate is home to a curated collection of Rwandan and African contemporary art woven through every public space. Every hallway, lobby, and suite tells a visual story."*
  2. **Sustainability** — *"We are committed to green luxury. Solar integration, locally sourced produce, support for Rwandan artisans, and responsible tourism are at the core of what we do."*
  3. **Explore Kigali** — Curated guide with 8 recommendations:
     - Kigali Genocide Memorial (15 min)
     - Nyarutarama Golf Course (adjacent)
     - Kigali Convention Centre (10 min)
     - Kimironko Market (20 min)
     - Inema Arts Centre (15 min)
     - Heaven Restaurant (10 min)
     - Kigali International Airport (15 min)
     - Nyandungu Eco Park (20 min)

---

### 15. GALLERY — `app/(site)/gallery/page.tsx`

- Filterable masonry grid
- Categories (tabs): All | Suites | Dining | Wellness | V-Club | Exterior | Kigali
- Each image: `ImagePlaceholder` with descriptive label
- Minimum 24 placeholder images across all categories
- Light-box modal on click (stub with basic expand state)
- Heading: `"A Visual Journey Through Elevate"`

---

### 16. BOOKING — `app/(site)/booking/page.tsx`

- Headline: `"Reserve Your Elevation"`
- Booking form with:
  - Check-in / Check-out date pickers
  - Room category select (Standard | Deluxe | VIP Studio | Suite | Presidential)
  - Guest count
  - Special requests textarea
  - Name | Email | Phone
  - `[Check Availability]` button — for now, submits to `/api/booking` and shows confirmation
- Below form: "Or contact us directly" with WhatsApp, phone, email CTAs
- Note: Full PMS sync is pending — form submissions go to email for now

---

### 17. BRAND STORY — `app/(site)/about/brand-story/page.tsx`

- Headline: `"The Story of Elevate"`
- Long-form editorial content:
  *"Elevate was born from a singular vision: to create a hospitality experience in Rwanda that rivals the finest in Africa. Founded by the Lidace Group — a leader in premium real estate and development across Kigali — Elevate is not merely a hotel. It is a statement. A declaration that Rwanda's capital is ready to host the world at its highest standard.*

  *Located in the serene residential enclave of Nyarutarama, on the shores of Kigali's celebrated Golf Course, Elevate offers something rare: true privacy without sacrifice of service. Here, international travellers, regional executives, and discerning guests find not just accommodation, but a sanctuary — an address that communicates everything before a word is spoken.*

  *As part of the broader Elevate Precinct — a mixed-use development comprising luxury residences, commercial spaces, and hospitality — the hotel sits at the heart of something larger: a new way of living and experiencing Kigali."*
- Timeline: 2022 — Concept | 2024 — Construction | 2026 — Opening

---

### 18. MISSION & VALUES — `app/(site)/about/mission/page.tsx`

**Mission:** *"To redefine luxury hospitality in Rwanda by delivering exceptional, personalised experiences rooted in African elegance, global standards, and an unwavering commitment to our guests."*

**Values:**
- **Elevation** — We raise every standard, every time
- **Privacy** — Your experience is yours alone
- **Authenticity** — Proudly Rwandan, globally refined
- **Excellence** — Mediocrity has no home here
- **Warmth** — The best luxury is deeply human

---

### 19. AWARDS & PRESS — `app/(site)/about/awards/page.tsx`

- Placeholder awards grid (to be populated post-launch)
- Press logos placeholder strip
- Quote: *"Positioned to become the defining luxury address in East Africa."*
- Media contact: reservations.elevatesuites@gmail.com

---

### 20. CONTACT — `app/(site)/contact/page.tsx`

- Split layout: form left, info right
- **Form:** Name | Email | Phone | Subject (Booking/V-Club/Events/General) | Message | Submit
- **Info panel:**
  - Address: KG 13 Ave, Nyarutarama, Kigali, Rwanda
  - Phone: +250 788 308 193
  - WhatsApp: +250 788 308 193
  - Email: reservations.elevatesuites@gmail.com
  - Hours: Reception 24/7 | Reservations 8:00–20:00
  - Google Maps embed (stub — `iframe` placeholder div)
  - Social: Instagram | Facebook | TikTok

---

## 🧩 SHARED COMPONENTS TO BUILD

### `components/layout/Navbar.tsx`
- Transparent → navy on scroll (use `useScrollPosition` hook)
- Desktop: Logo center or left, nav links split either side
- Mobile: Full-screen slide-in menu, dark overlay
- Active link: gold dot or underline indicator

### `components/layout/Footer.tsx`
- Background: `brand-navy`
- Logo + tagline
- 4-column nav links
- Contact strip
- Social icons (use `lucide-react` or SVG)
- Copyright: `© 2026 Elevate Hotel by Lidace. All rights reserved.`

### `components/ui/ImagePlaceholder.tsx`
```tsx
// Props: aspect, label, dark, className
// Dark variant: bg-brand-navy/80 with subtle texture overlay
// Light variant: bg-brand-cream with warm gradient
// Always show label text centered
```

### `components/ui/SectionHeading.tsx`
```tsx
// Props: overline, title, subtitle, align ('left' | 'center'), light (boolean)
// Renders: GOLD OVERLINE CAPS → Large Playfair heading → Subtitle in Inter light
// Gold divider line between overline and title
```

### `components/ui/RoomCard.tsx`
```tsx
// Props: name, category, description, priceFrom, amenities[], href
// Image placeholder top, content below
// Hover: subtle lift + gold border reveal
```

### `components/sections/HeroSection.tsx`
```tsx
// Props: title, subtitle, ctaPrimary, ctaSecondary, dark, overlayOpacity
// Full viewport height, centered or left-aligned content
// Gradient overlay bottom-up for text legibility
```

### `components/booking/BookingWidget.tsx`
- Compact horizontal form: Check-in | Check-out | Guests | Room Type | [Check Availability]
- Can appear embedded in hero (sticky bottom bar on homepage) or as full page form
- Mobile: Stacked vertical layout

### `components/ui/GoldDivider.tsx`
- Simple: `<div className="w-16 h-px bg-brand-gold mx-auto my-8" />`

---

## ⚙️ TECHNICAL REQUIREMENTS

### Install these packages first:
```bash
npm install framer-motion @sanity/image-url next-sanity lucide-react
```

### Framer Motion animations to use consistently:
- Hero text: `fadeInUp` on mount, 0.8s ease
- Section headings: Scroll-triggered `fadeInUp` with `viewport: { once: true }`
- Cards: `staggerChildren` 0.1s delay per card
- Navbar: Smooth background transition on scroll
- Page transitions: `opacity` fade between routes (add to layout)

```tsx
// Reusable animation variants — create lib/animations.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}
```

### API Routes to create:
- `app/api/contact/route.ts` — Receives contact form, emails to reservations.elevatesuites@gmail.com (use Nodemailer or Resend)
- `app/api/booking/route.ts` — Receives booking request, emails confirmation + forwards to hotel
- `app/api/vclub-inquiry/route.ts` — V-Club membership form submissions

### Environment variables (`.env.local`):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
RESEND_API_KEY=your_key  # or SMTP credentials
CONTACT_EMAIL=reservations.elevatesuites@gmail.com
NEXT_PUBLIC_SITE_URL=https://elevatesuiteskigali.com
```

### Performance:
- Use `next/image` for ALL images (even placeholders — use `fill` prop with relative parent)
- Use `loading="lazy"` on below-fold images
- Implement `generateStaticParams` for suite `[slug]` pages
- Add `metadata` export on every page (SEO)

### SEO Metadata pattern for every page:
```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: '155-character description for search engines',
  openGraph: {
    title: 'Page Title | Elevate Suites Kigali',
    description: '...',
    type: 'website',
  },
}
```

---

## 🚫 IMPORTANT CONSTRAINTS

1. **No real photos yet.** Use `ImagePlaceholder` component everywhere. Make it look designed, not broken. Label each placeholder descriptively (e.g. "Presidential Suite — Bedroom" or "Gemilli Terrace — Evening").

2. **No booking engine yet.** All booking forms submit to API routes that send emails. Add a visible notice: *"Our online booking system is launching soon. For immediate reservations, contact us directly."*

3. **No PMS integration yet.** Stub the availability check — show a "Thank you, we'll confirm within 2 hours" message.

4. **V-Club pages are not gated yet.** Add a visual-only "Members Only" badge but do not implement actual auth. That comes in Phase 2.

5. **Use Unsplash placeholder URLs** for any images needed in `<img>` tags during development, with `https://images.unsplash.com` as source. Pick hotel/luxury/Rwanda/Africa related images.

---

## 🏁 BUILD ORDER (follow this sequence)

1. `globals.css` — Full design token implementation
2. `tailwind.config.ts` — Color palette update
3. `lib/animations.ts` — Framer Motion variants
4. `components/ui/ImagePlaceholder.tsx`
5. `components/ui/SectionHeading.tsx`
6. `components/layout/Navbar.tsx`
7. `components/layout/Footer.tsx`
8. `app/layout.tsx` — Add Cormorant Garamond, page transition wrapper
9. `app/(site)/page.tsx` — Full homepage (all 9 sections)
10. `components/ui/RoomCard.tsx` + `components/booking/BookingWidget.tsx`
11. All accommodation pages (overview + 5 suite slugs + in-room dining + guest services)
12. All dining pages (hub + 4 venues + special events)
13. V-Wellness page (create route)
14. V-Club pages (landing + membership + brochure)
15. Experience pages (hub + art + sustainability + explore kigali)
16. Gallery page
17. Booking page
18. About pages (brand story + mission + awards)
19. Contact page
20. API routes (contact + booking + v-club inquiry)
21. Sanity Studio (`app/studio/[[...tool]]/page.tsx`) — confirm it loads
22. Final pass: metadata on every page, mobile responsiveness check, animation polish

---

*End of master build prompt. Build everything. This is the definitive digital home of Kigali's finest hotel.*
