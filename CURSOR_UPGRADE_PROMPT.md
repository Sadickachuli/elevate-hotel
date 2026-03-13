# ELEVATE SUITES KIGALI — DESIGN UPGRADE PROMPT v2
> This is a full redesign pass on the existing codebase. Read every section carefully and implement all changes.

---

## 🚨 CRITICAL PROBLEMS TO FIX FIRST

The current build has serious design issues that must be corrected before anything else:


1. **Too dark everywhere** — Black/near-black backgrounds make the site feel heavy and depressing. The only section allowed to be dark is the V-Club landing and the Footer. Every other section must use warm ivory, cream, or beige.
2. **No Saxon-style booking bar** — The hero needs a horizontal booking widget docked at the bottom (like saxon.co.za) — check-in, check-out, room type, guests, CTA button.
3. **No dropdown submenus** — The navbar is flat. It needs rich dropdown mega-menus with icons and subcategories like Saxon.
4. **Generic design** — No uniquely Elevate elements. The site looks like any hotel template. We need custom SVG ornamental dividers, diamond patterns, crest watermarks, and signature Elevate touches.
5. **Animations are too simple or missing** — Need parallax hero, counter animations, hover microinteractions, and image zoom on cards.
6. **Logo not being used** — The actual Elevate logo (`/public/logo.png`) must be used in the Navbar, Footer, and hero. Use an `<Image>` component. A raw file `logo-source.jpg` is already in `/public/` — use it as a reference, but the user will swap in the clean PNG at `public/logo.png`.

---

## 🎨 REDESIGNED COLOR PHILOSOPHY

**The Rule:** Warm ivory and beige are the dominant background colors. Navy is an ACCENT used for dramatic contrast sections only. Gold is the signature throughout.

### Updated Usage Map:
| Section | Background | Text |
|---------|-----------|------|
| Navbar (scrolled) | `#0E1628` navy | white |
| Navbar (transparent on hero) | transparent | white |
| Hero | Full image with warm overlay | white |
| Brand statement | `#FAF6EE` ivory | `#1C1C1E` charcoal |
| Room cards | `#F0E6D3` cream | `#3D2B1F` walnut |
| Feature sections | `#FAF6EE` ivory | charcoal |
| Alternating sections | `#EDE0C8` warm beige | charcoal |
| CTA banner | `#0E1628` navy | white (SPARINGLY) |
| Dining section | `#F5EDD6` warm ivory | charcoal |
| V-Wellness | `#F0EBE1` warm sand | charcoal |
| V-Club | `#0A0A0A` near-black | white/gold ONLY |
| Reviews/testimonials | `#EDE0C8` warm beige | charcoal |
| Footer | `#0E1628` navy | white |

**NEVER use pure `#000000` black as a background anywhere except V-Club.**

---

## 🏛️ UNIQUE ELEVATE DESIGN ELEMENTS TO CREATE

These must be custom-built SVG/CSS components — not generic icons or placeholders.

### 1. `ElevateOrnament` component — `components/ui/ElevateOrnament.tsx`
A horizontal ornamental divider inspired by the Elevate crest's baroque filigree.

```tsx
// Three variants:
// 'full' — gold line with centered diamond + flanking scrollwork SVG
// 'minimal' — two short gold rules with a small diamond center
// 'crest' — a small version of the V shield centered between rules

// Example 'full' variant markup concept:
// ───── ❖ ─────────── [SVG scrollwork] ───────────── ❖ ─────
// Use inline SVG, color: brand-gold, width: auto
```

### 2. `DiamondPattern` component — `components/ui/DiamondPattern.tsx`
A subtle repeating diamond/lattice pattern (like the cross-hatch on the Elevate logo background and the lobby screen divider). Used as background texture on certain sections.

```tsx
// Pure CSS or SVG pattern
// Very low opacity (3-5%) on ivory/cream backgrounds for texture
// Higher opacity (8-10%) on navy backgrounds
// Use as absolute positioned overlay inside a relative parent
```

### 3. `GoldCrestWatermark` component — `components/ui/GoldCrestWatermark.tsx`
A large, barely-visible Elevate "V" crest watermark used as a decorative background element on testimonials, brand story, and hero sections.

```tsx
// Large SVG "V" in Playfair-inspired style
// Opacity 4-7%, gold color
// Absolutely positioned, pointer-events-none
// Typically bottom-right or centered behind content
```

### 4. `SectionDivider` component — `components/ui/SectionDivider.tsx`
Used between major sections instead of hard color breaks.

```tsx
// Variants: 'wave' (subtle SVG wave), 'angle' (slight diagonal cut), 'straight' (clean line with ornament)
// Inherits background colors from parent/next section
```

---

## 🧭 NAVBAR REDESIGN — Complete rewrite of `components/layout/Navbar.tsx`

### Structure:
```
[Logo left]    [Nav links center with dropdowns]    [Phone + BOOK NOW right]
```

### Behavior:
- **Transparent** on page load (over hero image)
- **Smooth transition** to `bg-brand-navy/97 backdrop-blur-md` when scrolled 80px
- Logo: Use `<Image src="/logo.png" />` — white version on dark, colored on light (use CSS filter or two logo variants)
- BOOK NOW: Gold filled button, always visible

### Mega-dropdown menus (like Saxon):
Each nav item with children shows a dropdown panel on hover with a 200ms delay.

**HOTEL (dropdown):**
```
🛏  Accommodations    Overview of all room types
🏨  Standard Rooms    18 rooms, from $120/night
⭐  Deluxe Rooms      5 rooms, from $180/night
💎  VIP Studio        10 rooms, from $250/night
🔑  Suites            6 suites, from $380/night
👑  Presidential      The pinnacle of Elevate
──────────────────────
🛎  Guest Services    Everything at your service
🍽  In-Room Dining    Available 6AM–11PM
```

**DINING (dropdown):**
```
☕  V-Coffee & Restaurant   All-day fine dining
🌿  Gemilli Terrace         Alfresco garden dining
🕯  Cave Bar                Underground cocktail lounge
🥂  Private Events          Host the extraordinary
```

**V-WELLNESS (dropdown):**
```
💆  Spa & Treatments     Book a treatment
💪  Mini Gym             Fitness facilities
💅  Nail Bar             Luxury nail studio
🧖  Massage Rooms        Single & couples suites
🌡  Steam & Sauna        Thermal experiences
```

**V-CLUB (dropdown — darker, exclusive styling):**
```
🔐  The Club             Private members' sanctuary
📋  Membership           Join the circle
📄  Brochure             Download our guide
```

**EXPERIENCE (dropdown):**
```
🎨  Art Collection       Curated Rwandan art
🌱  Sustainability       Our green commitment
🗺  Explore Kigali       Curated city guide
```

### Dropdown panel design:
- Background: `#FAF6EE` ivory with subtle drop shadow
- Border-top: 2px solid `brand-gold`
- Each item: icon (small, gold) + label (dark) + description (taupe, small)
- Hover state: gold left-border, slight background tint
- Animation: `opacity 0→1` + `translateY -8px→0` over 200ms

### Mobile menu:
- Full-screen slide-in from right
- Dark navy background
- Logo top, close X top right
- Accordion-style expandable sections
- Gold CTA at bottom: `[Book Your Stay]`

---

## 🏠 HOMEPAGE — Full redesign of `app/(site)/page.tsx`

### Section 1 — Hero (completely rebuild)

```
Layout:
- Full viewport height (100vh)
- Background: Full-bleed ImagePlaceholder (warm, tropical, high-end hotel aesthetic)
- Overlay: warm gradient from bottom (rgba(14,22,40,0.2) top → rgba(14,22,40,0.65) bottom)
  NOT a pure black overlay — it should feel warm, not cold
- Content: centered, bottom-third of viewport

Typography:
- Overline (animated in first): "NYARUTARAMA · KIGALI · RWANDA" in gold, tracked wide
- H1 (animated second): "Where Kigali's" (line 1, white)
               "Finest Await" (line 2, italic Playfair, gold)
  Size: clamp(56px, 8vw, 96px)
- Subtitle (animated third, 0.4s delay): short tagline
- CTAs (animated last): [Explore the Property] ghost-white + [Book Your Stay] gold

Animation: Each element slides up from y:40 with opacity 0→1, staggered 0.2s

Scroll indicator: animated bouncing chevron down, "Scroll to discover" text

Unique touch: Very subtle animated particle shimmer (CSS only, gold dots floating,
very low opacity 0.15) — gives the hero a living, premium feel
```

### Saxon-Style Booking Bar (docked at hero bottom)
```tsx
// Sticky to the bottom of the hero section
// On scroll past hero: transitions to a fixed top bar (below navbar) OR disappears

<div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
  <div className="container-luxury flex items-center gap-0">
    {/* Check In */}
    <BookingField icon={Calendar} label="CHECK IN" placeholder="Arrival Date" />
    {/* Divider */}
    <div className="w-px h-12 bg-white/20" />
    {/* Check Out */}
    <BookingField icon={Calendar} label="CHECK OUT" placeholder="Departure Date" />
    <div className="w-px h-12 bg-white/20" />
    {/* Rooms */}
    <BookingField icon={BedDouble} label="ROOMS" placeholder="1 Room" select />
    <div className="w-px h-12 bg-white/20" />
    {/* Guests */}
    <BookingField icon={Users} label="GUESTS" placeholder="2 Guests" select />
    {/* CTA */}
    <button className="ml-auto bg-brand-gold text-brand-navy px-10 py-6 text-sm tracking-[0.2em]
                       uppercase font-bold hover:bg-brand-gold-light transition-all whitespace-nowrap">
      CHECK AVAILABILITY
    </button>
  </div>
</div>
```

### Section 2 — Brand Statement (warm ivory, NOT dark)
```
Background: brand-ivory #FAF6EE
Left: Large number stat or quote mark (decorative gold, 200px, low opacity)
Center:
  - ElevateOrnament divider (full variant)
  - Small gold overline: "ELEVATE HOTEL BY LIDACE"
  - H2: "A New Standard of Rwandan Luxury" (Playfair, large)
  - ElevateOrnament (minimal variant)
  - Body in Cormorant Garamond italic, 20px, charcoal
  - 3 animated stat counters (count up on scroll):
    [8,364] sqm  |  [40+] Keys  |  [5] Dining Venues

Stat counters: Use framer-motion useInView + useMotionValue for count-up effect
```

### Section 3 — Rooms (editorial, cream background)
```
Background: brand-cream #F0E6D3
Heading section with ElevateOrnament

Room cards: Horizontal scroll on mobile, 3-column grid on desktop
Each card:
  - Full bleed image (ImagePlaceholder with warm tones)
  - On hover: image zooms 1.05x (CSS transform scale, overflow hidden)
  - Gold category badge: "SUITE" or "DELUXE" (top-left absolute)
  - Bottom overlay (gradient): Room name + from price + [View Suite →]
  - The [View Suite] link has a gold underline that animates left→right on hover

NO white card boxes with padding. These should be full editorial image cards.
```

### Section 4 — The Precinct Split (ivory background)
```
NOT dark. Use ivory background.
3 columns, each with:
  - Large gold number (01, 02, 03) — decorative, Playfair 80px
  - Gold thin rule
  - Icon (custom, not lucide — use a simple SVG you define inline)
  - Heading + description
  - Link with gold arrow →
```

### Section 5 — Dining Feature (full-bleed editorial)
```
Full-width section, NO container constraint
Left half: ImagePlaceholder (restaurant/dining, warm amber tones), full height
Right half: bg-brand-navy, content with gold text
  - Overline: "DINING & GASTRONOMY"
  - H2: "Flavour. Atmosphere. Distinction." (white, italic)
  - Short paragraph
  - 4 small venue pills: [V-Coffee] [Gemilli Terrace] [Cave Bar] [Private Events]
  - CTA: [Explore Dining →] gold outline

This section should be min-height 70vh
```

### Section 6 — V-Wellness (warm sand background `#F0EBE1`)
```
Split layout reversed (image right):
Left: Content
  - ElevateOrnament
  - Overline: "V-WELLNESS SPA"
  - H2: "Surrender to Stillness"
  - Body paragraph
  - Icon grid (2x3): 6 key facilities with small icons + labels
  - CTA: gold outline button

Right: ImagePlaceholder (warm spa tones — beige, cream, candlelight)

Background texture: DiamondPattern overlay at 4% opacity
```

### Section 7 — Testimonials (warm beige `#EDE0C8`)
```
Background: warm beige
GoldCrestWatermark behind content at low opacity

3 review cards, each:
  - 5 gold stars (SVG, not emoji)
  - Quote in Cormorant Garamond italic, 18px
  - Guest name + source (small, taupe)
  - Subtle card border: 1px solid brand-beige darkened slightly

Carousel on mobile (touch swipe), grid on desktop
```

### Section 8 — Location (ivory background)
```
Background: brand-ivory
Split: Map placeholder left | Content right

Content:
  - ElevateOrnament
  - "FIND US" overline
  - Address with gold MapPin icon
  - 4 proximity facts with icons and distances:
    ✈ Kigali International Airport — 15 minutes
    🏌 Nyarutarama Golf Course — Adjacent
    🏛 Kigali Convention Centre — 10 minutes
    🌆 City Centre — 12 minutes
  - Contact bar: phone | WhatsApp | email (all clickable)
```

### Section 9 — V-Club Teaser (DARK section — one of very few)
```
Background: #0A0A0A
Full-viewport-height cinematic section
GoldCrestWatermark at 6% opacity centered

Content centered:
  - Very small: "BY INVITATION" in gold, tracked 0.5em
  - Large: "Some Doors Open" (white, Playfair, 72px)
           "By Invitation Only." (gold, italic)
  - Gold ornamental divider
  - Short paragraph in white/70
  - CTA: [Enquire About Membership] gold outline button

Optional: subtle animated radial glow (CSS radial gradient, gold 0.05 opacity,
slowly pulsing scale 1→1.2 over 3s loop)
```

---

## 🎭 ANIMATION SYSTEM — Complete overhaul

### Install:
```bash
npm install framer-motion
```

### Updated `lib/animations.ts`:
```ts
// All existing variants PLUS:

// Parallax hook
export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

// Count-up animation for stats
export const countUp = { hidden: { opacity: 0 }, visible: { opacity: 1 } }

// Clip-path reveal (elegant wipe from bottom)
export const clipReveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
  }
}

// Image zoom container
export const imageZoomContainer = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Gold line grow (for underline/border animations)
export const goldLineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' } }
}

// Letter spacing expand (for overlines)
export const trackingExpand = {
  hidden: { opacity: 0, letterSpacing: '0em' },
  visible: { opacity: 1, letterSpacing: '0.3em', transition: { duration: 0.8 } }
}
```

### Parallax Hero Image:
```tsx
// In HeroSection.tsx, use useScroll + useTransform
const { scrollY } = useScroll()
const heroY = useTransform(scrollY, [0, 500], [0, 150])

// Apply to image wrapper:
<motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
  <ImagePlaceholder ... />
</motion.div>
```

### Hover microinteractions on every interactive element:
- Room cards: `whileHover={{ y: -4 }}` + image scale
- Buttons: `whileHover={{ scale: 1.02 }}` + color transition
- Nav links: gold underline grows from left on hover (CSS `::after` + transition)
- Social icons: `whileHover={{ rotate: 10, scale: 1.1 }}`
- Gold ornaments: subtle shimmer animation on section entry

### Scroll-triggered section reveals:
Every section uses:
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
  variants={stagger}
>
```

---

## 🃏 ROOM CARDS — Full redesign

Replace the current card design completely:

```tsx
// components/ui/RoomCard.tsx — Full editorial card
// Aspect ratio: 4:5 portrait (taller than wide — more dramatic)
// Structure:
<motion.div
  className="relative overflow-hidden group cursor-pointer"
  whileHover="hover"
  initial="rest"
>
  {/* Image with zoom */}
  <motion.div variants={imageZoomContainer} className="absolute inset-0">
    <ImagePlaceholder aspect="portrait" dark label={name} />
  </motion.div>

  {/* Always visible: category badge top-left */}
  <div className="absolute top-4 left-4 z-10">
    <span className="bg-brand-gold text-brand-navy text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-bold">
      {category}
    </span>
  </div>

  {/* Bottom content — slides up on hover */}
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent p-6">
    <h3 className="font-heading text-xl text-white">{name}</h3>
    <p className="text-brand-gold/80 text-sm">From ${priceFrom}/night</p>

    {/* Hidden content, reveals on hover */}
    <motion.div
      variants={{ rest: { height: 0, opacity: 0 }, hover: { height: 'auto', opacity: 1 } }}
      className="overflow-hidden"
    >
      <p className="text-white/70 text-sm mt-2 leading-relaxed">{shortDesc}</p>
      <div className="flex items-center gap-2 mt-3 text-brand-gold text-sm font-semibold">
        View Suite <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  </div>
</motion.div>
```

---

## 📝 LOGO IMPLEMENTATION

### Step 1: Create SVG logo component `components/ui/ElevateLogo.tsx`
```tsx
// Two variants: 'light' (gold + white text) for dark backgrounds
//               'dark' (gold + navy text) for light backgrounds
// The crest/shield is represented as an SVG path
// The "V" is Playfair Display italic, large
// "ELEVATE" text below in tracked caps

interface ElevateLogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean // show "ELEVATE SUITES KIGALI" text or just crest
}
```

### Step 2: Reference logo file
The file `public/logo-source.jpg` exists as a reference.
When building, use `public/logo.png` path in `<Image>` tags (user will place the PNG there).

### Step 3: Usage
- Navbar: `<ElevateLogo variant="light" size="md" />` when transparent, switches to same on dark bg
- Footer: `<ElevateLogo variant="light" size="lg" />` centered
- Loading screen: `<ElevateLogo variant="light" size="xl" />` with fade animation
- Favicon: Update `app/favicon.ico` instructions in README

---

## ✨ NEW COMPONENTS TO BUILD

### `components/ui/StatCounter.tsx`
Animated number counter that counts up when scrolled into view.
```tsx
// Props: end (number), prefix?, suffix?, duration? (default 2s), label
// Use framer-motion useInView + useMotionValue + useSpring
// Display: large Playfair number + small Inter label below
```

### `components/ui/TestimonialCard.tsx`
```tsx
// Props: quote, guestName, guestTitle, rating (1-5), source
// Gold stars SVG (not emoji, not lucide)
// Cormorant Garamond italic quote
// Gold left-border accent
```

### `components/sections/BookingBar.tsx`
```tsx
// The Saxon-style horizontal booking bar
// Props: variant: 'hero' (glass, bottom of hero) | 'page' (white, above content)
// Fields: checkIn, checkOut, roomType (select), guests (select), submit
// Mobile: collapsed to single "Book Now" button that expands to full form
```

### `components/ui/ProximityCard.tsx`
```tsx
// For location section: icon + distance + landmark name
// Horizontal pill design with gold icon
```

---

## 🔤 TYPOGRAPHY UPGRADES

Add these CSS classes to `globals.css`:

```css
/* Hero headline — maximum drama */
.text-hero {
  font-size: clamp(48px, 8vw, 96px);
  font-family: var(--font-heading);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

/* Section headline */
.text-section-title {
  font-size: clamp(32px, 5vw, 60px);
  font-family: var(--font-heading);
  line-height: 1.1;
}

/* Pull quote / brand statement */
.text-pullquote {
  font-size: clamp(20px, 2.5vw, 28px);
  font-family: var(--font-cormorant);
  font-style: italic;
  line-height: 1.5;
}

/* Editorial body */
.text-editorial {
  font-size: 17px;
  font-family: var(--font-cormorant);
  line-height: 1.8;
  color: var(--color-taupe);
}

/* Tracked overline */
.text-overline {
  font-size: 11px;
  font-family: var(--font-body);
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #C9A84C; /* brand-gold */
}

/* Large decorative number */
.text-deco-number {
  font-size: clamp(80px, 15vw, 160px);
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: 0.9;
  color: #C9A84C;
  opacity: 0.12;
  user-select: none;
  pointer-events: none;
}
```

---

## 🖼️ IMAGE PLACEHOLDER REDESIGN

The current `ImagePlaceholder` looks too generic. Redesign it:

```tsx
// components/ui/ImagePlaceholder.tsx — REDESIGN
// Remove the camera icon
// Instead: subtle gradient that feels warm and photographic
// Light variant: gradient from '#E8D5B7' to '#C4A882' (warm sand to taupe)
// Dark variant: gradient from '#1a2540' to '#0E1628' (blue-navy depth)
// Overlay: very subtle diagonal texture (CSS background-image repeating-linear-gradient)
// Label: elegant small text, centered, Cormorant Garamond italic, low opacity
// NO placeholder icons
// Add a subtle inner vignette via box-shadow inset

// Aspect ratio classes:
// 'hero': aspect-[16/9] min-h-[70vh]
// 'landscape': aspect-[16/9]
// 'portrait': aspect-[4/5]
// 'square': aspect-square
// 'cinematic': aspect-[21/9]
// 'card': aspect-[4/3]
```

---

## 📄 PAGE-SPECIFIC FIXES

### All interior pages — Hero update:
Replace the current compact hero pattern. Interior heroes should be:
- `min-h-[45vh]` (not too short, not too tall)
- Warm gradient overlay (navy 60%) NOT black
- `ElevateOrnament` divider below the title
- Breadcrumb navigation below hero (small, gold/white text)

### Accommodations `[slug]` page:
- Add a proper image gallery: main large image + 4 thumbnails in a strip below
- Sticky booking sidebar on desktop (scrolls with page but stays visible)
- Room features displayed as icon+label chips (not a boring list)
- "You may also like" section at bottom: 3 other room category cards

### V-Club page:
- Add a subtle animated radial gold glow in the background (pure CSS `@keyframes pulse-glow`)
- Membership tier cards: dark navy border, gold top accent, hover reveals more detail
- The inquiry form should feel exclusive — dark background inputs, gold borders on focus

### Gallery page:
- Masonry layout using CSS columns (`columns-1 sm:columns-2 lg:columns-3`)
- Each image: on hover, show a darkened overlay with the category label in gold
- Filter pills: gold background when active, ghost when inactive (smooth transition)

---

## 🔧 FINAL IMPLEMENTATION CHECKLIST

Work through this in order:

- [ ] `globals.css` — Add all new typography + utility classes
- [ ] `tailwind.config.ts` — Ensure all color tokens are correct
- [ ] `lib/animations.ts` — Add all new variants (clipReveal, imageZoomContainer, goldLineGrow, trackingExpand)
- [ ] `components/ui/ElevateLogo.tsx` — SVG logo component
- [ ] `components/ui/ElevateOrnament.tsx` — Ornamental divider (3 variants)
- [ ] `components/ui/DiamondPattern.tsx` — Texture pattern component
- [ ] `components/ui/GoldCrestWatermark.tsx` — Background V watermark
- [ ] `components/ui/ImagePlaceholder.tsx` — REDESIGN (remove camera icon, warm gradients)
- [ ] `components/ui/StatCounter.tsx` — Animated count-up
- [ ] `components/ui/TestimonialCard.tsx` — Premium review card
- [ ] `components/sections/BookingBar.tsx` — Saxon-style booking widget
- [ ] `components/layout/Navbar.tsx` — Full rebuild with mega-menus + logo
- [ ] `components/layout/Footer.tsx` — Add logo, ensure warm not cold feel
- [ ] `app/(site)/page.tsx` — Full homepage rebuild (all 9 sections + booking bar)
- [ ] `app/(site)/accommodations/page.tsx` — Editorial room cards
- [ ] `app/(site)/accommodations/[slug]/page.tsx` — Gallery + sticky sidebar
- [ ] All section background colors — Audit every page, replace black with ivory/cream/beige
- [ ] All `HeroSection` instances — Warm overlay, ElevateOrnament, breadcrumb
- [ ] V-Club page — Animated glow + premium form
- [ ] Gallery page — Masonry + hover overlays + filter pills
- [ ] Final pass — Check every page on mobile (iPhone 375px), fix any overflow or clipping

---

## ⚠️ ABSOLUTE RULES

1. **No pure black backgrounds** except V-Club and Navbar.
2. **Always use ElevateOrnament** as section dividers — never just a line or nothing.
3. **Every image** uses `ImagePlaceholder` with a descriptive, warm-toned label. No broken images.
4. **Framer Motion** on every section entry. No static sections.
5. **Logo** must appear in Navbar and Footer using `ElevateLogo` component.
6. **Mobile first** — Test every component at 375px width. If it breaks, fix it.
7. **The booking bar** must appear on the homepage hero. No exceptions.
8. **Gold** is the soul of the brand — use it in dividers, icons, accents, CTAs, and hover states everywhere.

---

*Build this like you are designing the hotel's flagship physical property. Every pixel matters. This is the digital front door to Kigali's finest hotel.*
