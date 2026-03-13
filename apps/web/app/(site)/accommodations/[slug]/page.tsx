'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Wifi, Wind, Coffee, Tv, Lock, ShieldCheck, Maximize2, Users, BedDouble, Eye, ArrowLeft } from 'lucide-react'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import BookingWidget from '@/components/booking/BookingWidget'
import ElevateOrnament from '@/components/ui/ElevateOrnament'
import RoomCard from '@/components/ui/RoomCard'
import { fadeInUp, stagger, fadeInLeft } from '@/lib/animations'

const suiteData: Record<string, {
  name: string; category: string; count: number; description: string; longDescription: string;
  price: string; size: string; maxGuests: number; bedType: string; view: string;
  amenities: string[]; included: string[];
}> = {
  standard: {
    name: 'Standard Room', category: 'Standard', count: 18,
    description: 'Elegant comfort with premium linens, en-suite marble bathroom, garden or courtyard views.',
    longDescription: 'The Standard Room at Elevate Hotel is a refined sanctuary designed for the discerning traveler who values quality without compromise. Each of our 18 standard rooms features premium Egyptian cotton linens, a marble-appointed en-suite bathroom, and thoughtful touches that reflect Rwanda\'s warm hospitality. Floor-to-ceiling windows invite natural light and offer views of our manicured gardens or serene courtyard.',
    price: '$120', size: '28 sqm', maxGuests: 2, bedType: 'King or Twin', view: 'Garden / Courtyard',
    amenities: ['High-Speed WiFi', 'Air Conditioning', 'Smart TV', 'In-Room Safe', 'Minibar', 'Rain Shower', 'Premium Toiletries', 'Blackout Curtains', 'Work Desk', 'Room Service'],
    included: ['Daily breakfast at V-Coffee & Restaurant', 'Complimentary WiFi', 'Access to Mini Gym', 'Daily housekeeping', 'Welcome amenity on arrival'],
  },
  deluxe: {
    name: 'Deluxe Room', category: 'Deluxe', count: 5,
    description: 'Elevated comfort with upgraded furnishings, larger workdesk, premium minibar.',
    longDescription: 'The Deluxe Room represents a step above, offering additional space and premium upgrades for guests who desire a more generous experience. The five Deluxe rooms at Elevate feature upgraded furnishings, an expanded workspace ideal for the modern executive, and a premium minibar stocked with curated selections.',
    price: '$180', size: '35 sqm', maxGuests: 2, bedType: 'King', view: 'Garden',
    amenities: ['High-Speed WiFi', 'Air Conditioning', 'Smart TV', 'In-Room Safe', 'Premium Minibar', 'Rain Shower', 'Dual Vanity', 'Premium Toiletries', 'Blackout Curtains', 'Executive Work Desk', 'Room Service', 'Nespresso Machine'],
    included: ['Daily breakfast at V-Coffee & Restaurant', 'Complimentary WiFi', 'Access to Mini Gym', 'Daily housekeeping', 'Welcome amenity on arrival', 'Evening turndown service', 'Late checkout upon availability'],
  },
  'vip-studio': {
    name: 'VIP Room / Studio', category: 'VIP Studio', count: 10,
    description: 'Spacious studio layout with separate sitting area, private balcony access.',
    longDescription: 'The VIP Studio redefines hotel living with a spacious open-plan layout that seamlessly merges sleeping, working, and living zones. Ten VIP Studios offer guests private balcony access with views across the Nyarutarama landscape.',
    price: '$250', size: '45 sqm', maxGuests: 3, bedType: 'King + Daybed', view: 'Nyarutarama / Garden',
    amenities: ['High-Speed WiFi', 'Air Conditioning', 'Smart TV', 'In-Room Safe', 'Premium Minibar', 'Rain Shower & Bathtub', 'Walk-in Wardrobe', 'Private Balcony', 'Sitting Area', 'Nespresso Machine', 'Bluetooth Speaker', 'Room Service'],
    included: ['Daily breakfast at V-Coffee & Restaurant', 'Complimentary WiFi', 'Access to Mini Gym & V-Wellness', 'Daily housekeeping', 'Welcome amenity on arrival', 'Evening turndown service', 'Priority restaurant reservations', 'Complimentary parking'],
  },
  suite: {
    name: 'Suite', category: 'Suite', count: 6,
    description: 'Full living suite with separate bedroom, lounge, rain shower + soaking tub.',
    longDescription: 'Our six Suites are designed for guests who consider space a luxury in itself. A separate bedroom with a king-size bed, an expansive living room with plush seating, and a dedicated dining area create a private apartment-like experience.',
    price: '$380', size: '65 sqm', maxGuests: 3, bedType: 'King', view: 'Panoramic Garden / Golf',
    amenities: ['High-Speed WiFi', 'Air Conditioning', '55" Smart TV', 'In-Room Safe', 'Full Minibar', 'Rain Shower & Soaking Tub', 'Walk-in Wardrobe', 'Separate Living Room', 'Dining Area', 'Nespresso & Kettle', 'Bluetooth Speaker', 'Dedicated Concierge', 'Room Service'],
    included: ['Daily breakfast at V-Coffee & Restaurant', 'Complimentary WiFi', 'Full V-Wellness access', 'Daily housekeeping', 'Premium welcome amenity', 'Evening turndown service', 'Priority restaurant reservations', 'Complimentary parking', 'Airport transfer (one way)', 'Laundry credits'],
  },
  presidential: {
    name: 'Presidential Room', category: 'Presidential', count: 1,
    description: 'The pinnacle of Elevate luxury — expansive layout, private butler, panoramic Golf Course views.',
    longDescription: 'The Presidential Room is the singular crown jewel of Elevate Hotel — a one-of-a-kind experience. Spanning 120 square metres, this extraordinary residence features a grand master bedroom, a formal living and dining room, a private study, and a palatial bathroom with dual vanities, soaking tub, and walk-in rain shower.',
    price: 'POA', size: '120 sqm', maxGuests: 4, bedType: 'Super King', view: 'Panoramic Golf Course',
    amenities: ['High-Speed WiFi', 'Climate Control', '65" Smart TV + Sound System', 'In-Room Safe', 'Full Minibar & Wine Fridge', 'Rain Shower & Soaking Tub', 'Walk-in Wardrobe', 'Living Room & Study', 'Dining Room', 'Nespresso & Tea Service', 'Bang & Olufsen Speaker', 'Private Butler', '24/7 Dedicated Concierge', 'Private Entrance Option'],
    included: ['Daily breakfast (in-suite or restaurant)', 'Complimentary WiFi', 'Unlimited V-Wellness access', 'Twice-daily housekeeping', 'Premium welcome package', 'Evening turndown service', 'Priority access to all venues', 'Complimentary parking (2 vehicles)', 'Airport transfer (round trip)', 'Full laundry service', 'Private check-in/check-out'],
  },
}

const allSlugs = Object.keys(suiteData)

const amenityIcons: Record<string, typeof Wifi> = {
  'High-Speed WiFi': Wifi, 'Air Conditioning': Wind, 'Smart TV': Tv,
  'In-Room Safe': Lock, 'Blackout Curtains': ShieldCheck, 'Nespresso Machine': Coffee,
}

export default function SuiteDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const suite = suiteData[slug]
  const [mainImage, setMainImage] = useState(0)

  if (!suite) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-ivory pt-20">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-brand-navy mb-4">Suite Not Found</h1>
          <Link href="/accommodations" className="btn-primary">View All Suites</Link>
        </div>
      </div>
    )
  }

  const galleryImages = [
    `${suite.name} — Bedroom`,
    `${suite.name} — Bathroom`,
    `${suite.name} — Living Area`,
    `${suite.name} — View`,
    `${suite.name} — Detail`,
  ]

  const otherRooms = allSlugs
    .filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => ({
      name: suiteData[s].name,
      slug: s,
      category: suiteData[s].category,
      description: suiteData[s].description,
      priceFrom: suiteData[s].price,
      imageLabel: `${suiteData[s].name} — Preview`,
    }))

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder aspect="hero" label={galleryImages[0]} dark className="!min-h-full w-full !aspect-auto" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,22,40,0.7) 0%, rgba(14,22,40,0.3) 50%, rgba(14,22,40,0.15) 100%)' }} />
        </div>
        <div className="relative z-10 container-luxury pb-12 pt-40">
          <h1 className="text-section-title text-white">{suite.name}</h1>
          <p className="mt-2 text-white/60 text-lg">{suite.description}</p>
          <ElevateOrnament variant="minimal" light className="!mx-0 !justify-start max-w-[160px]" />
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-brand-ivory border-b border-brand-beige/50">
        <div className="container-luxury py-3 flex items-center gap-2 text-xs">
          <Link href="/" className="text-brand-taupe hover:text-brand-gold transition-colors">Home</Link>
          <span className="text-brand-sand">/</span>
          <Link href="/accommodations" className="text-brand-taupe hover:text-brand-gold transition-colors">Accommodations</Link>
          <span className="text-brand-sand">/</span>
          <span className="text-brand-walnut">{suite.name}</span>
        </div>
      </div>

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
            {/* Main content */}
            <div>
              {/* Gallery: main + thumbnails */}
              <div className="mb-10">
                <ImagePlaceholder aspect="landscape" label={galleryImages[mainImage]} className="w-full mb-3" />
                <div className="grid grid-cols-4 gap-3">
                  {galleryImages.slice(1).map((label, i) => (
                    <button
                      key={label}
                      onClick={() => setMainImage(i + 1)}
                      className={`relative overflow-hidden border-2 transition-colors ${
                        mainImage === i + 1 ? 'border-brand-gold' : 'border-transparent hover:border-brand-beige'
                      }`}
                    >
                      <ImagePlaceholder aspect="card" label={label} className="w-full" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick stats as chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Maximize2, text: suite.size },
                  { icon: Users, text: `Up to ${suite.maxGuests} guests` },
                  { icon: BedDouble, text: suite.bedType },
                  { icon: Eye, text: suite.view },
                ].map((stat) => (
                  <span key={stat.text} className="flex items-center gap-2 text-sm text-brand-walnut bg-brand-cream px-4 py-2 border border-brand-beige/50">
                    <stat.icon className="w-4 h-4 text-brand-gold" /> {stat.text}
                  </span>
                ))}
              </div>

              <ElevateOrnament variant="minimal" className="!mx-0 !justify-start max-w-[120px]" />
              <h2 className="font-heading text-3xl text-brand-charcoal mt-2 mb-4">About This Room</h2>
              <p className="text-editorial">{suite.longDescription}</p>

              <div className="mt-12">
                <h3 className="font-heading text-2xl text-brand-charcoal mb-6">Room Amenities</h3>
                <div className="flex flex-wrap gap-3">
                  {suite.amenities.map((a) => {
                    const Icon = amenityIcons[a] || Wifi
                    return (
                      <span key={a} className="flex items-center gap-2 text-sm text-brand-walnut bg-brand-cream px-3 py-2 border border-brand-beige/40">
                        <Icon className="w-3.5 h-3.5 text-brand-gold" strokeWidth={1.5} />
                        {a}
                      </span>
                    )
                  })}
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-heading text-2xl text-brand-charcoal mb-6">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {suite.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-brand-walnut">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="lg:sticky lg:top-24 h-fit">
              <BookingWidget
                defaultRoom={slug}
                roomName={suite.name}
                priceFrom={suite.price}
              />
            </div>
          </div>

          {/* You may also like */}
          <div className="mt-24 pt-12 border-t border-brand-beige">
            <div className="text-center mb-12">
              <ElevateOrnament variant="minimal" />
              <h2 className="font-heading text-3xl text-brand-charcoal mt-4">You May Also Like</h2>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {otherRooms.map((room) => (
                <RoomCard key={room.slug} {...room} />
              ))}
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-beige">
            <Link href="/accommodations" className="flex items-center gap-2 text-sm text-brand-taupe hover:text-brand-gold transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to All Accommodations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
