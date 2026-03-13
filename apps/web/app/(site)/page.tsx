'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, ArrowRight, MapPin, Phone, Mail, Plane, Flag, Building2, Palmtree } from 'lucide-react'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ElevateOrnament from '@/components/ui/ElevateOrnament'
import DiamondPattern from '@/components/ui/DiamondPattern'
import GoldCrestWatermark from '@/components/ui/GoldCrestWatermark'
import StatCounter from '@/components/ui/StatCounter'
import TestimonialCard from '@/components/ui/TestimonialCard'
import RoomCard from '@/components/ui/RoomCard'
import BookingBar from '@/components/sections/BookingBar'
import { fadeInUp, fadeIn, stagger, staggerSlow, fadeInLeft, fadeInRight } from '@/lib/animations'

const rooms = [
  { name: 'Standard Room', slug: 'standard', category: 'Standard', description: 'Elegant comfort with premium linens, en-suite marble bathroom, and garden views.', priceFrom: '$120', imageLabel: 'Standard Room — Bedroom' },
  { name: 'Deluxe Room', slug: 'deluxe', category: 'Deluxe', description: 'Elevated comfort with upgraded furnishings, larger workdesk, and premium minibar.', priceFrom: '$180', imageLabel: 'Deluxe Room — Interior' },
  { name: 'VIP Studio', slug: 'vip-studio', category: 'VIP Studio', description: 'Spacious studio layout with separate sitting area and private balcony.', priceFrom: '$250', imageLabel: 'VIP Studio — Living Area' },
  { name: 'Suite', slug: 'suite', category: 'Suite', description: 'Full living suite with separate bedroom, lounge, rain shower and soaking tub.', priceFrom: '$380', imageLabel: 'Suite — Master Bedroom' },
  { name: 'Presidential', slug: 'presidential', category: 'Presidential', description: 'The pinnacle — expansive layout, private butler, panoramic Golf Course views.', priceFrom: 'POA', imageLabel: 'Presidential Suite — Panoramic View' },
]

const reviews = [
  { quote: 'An extraordinary level of service and attention to detail. The Presidential Suite overlooking the golf course was absolutely breathtaking. This is exactly what Kigali needed.', guestName: 'Sarah M.', guestTitle: 'Business Traveler' },
  { quote: 'I joined the V-Club and it has become my second home. The Cave Bar cocktails are world-class, and the spa is the best in the city. Truly elevated.', guestName: 'Jean-Pierre K.', guestTitle: 'Kigali Resident' },
  { quote: 'From the moment we arrived, every detail was perfect. The Gemilli Terrace dinner under the stars was unforgettable. We will return every year.', guestName: 'Emma T.', guestTitle: 'Leisure Guest' },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <>
      {/* ─── Section 1: Cinematic Hero ─── */}
      <section ref={heroRef} className="relative h-screen flex flex-col overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster=""
          >
            <source src="/elevatehotel.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(14,22,40,0.15) 0%, rgba(14,22,40,0.40) 50%, rgba(14,22,40,0.65) 100%)' }} />

        {/* Gold shimmer particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-brand-gold"
              style={{
                left: `${15 + i * 15}%`,
                bottom: '40%',
                opacity: 0.12,
                animation: `float-particle ${3 + i * 0.5}s ease-in-out ${i * 0.8}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Hero content — vertically centered */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="container-luxury w-full text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero text-white"
            >
              Where Kigali&apos;s<br />
              <span className="text-brand-gold">Finest Await</span>
            </motion.h1>
          </div>
        </div>

        {/* Booking Bar — levitating above hero bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 container-luxury mb-8"
        >
          <BookingBar variant="hero" />
        </motion.div>
      </section>

      {/* ─── Section 2: Brand Statement ─── */}
      <section className="section-padding bg-brand-ivory relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="container-luxury text-center max-w-4xl mx-auto relative"
        >
          <motion.div variants={fadeIn}>
            <ElevateOrnament variant="full" />
          </motion.div>
          <motion.p variants={fadeInUp} className="text-overline mb-5">Elevate Hotel by Lidace</motion.p>
          <motion.h2 variants={fadeInUp} className="text-section-title text-brand-charcoal">
            A New Standard of Rwandan Luxury
          </motion.h2>
          <motion.div variants={fadeIn}>
            <ElevateOrnament variant="minimal" />
          </motion.div>
          <motion.p variants={fadeInUp} className="text-pullquote text-brand-taupe mt-4">
            Situated in the vibrant city of Kigali, Elevate Hotel Suite provides a stunning panoramic view of the Golf Course. Crafted to deliver an unparalleled blend of luxury and privacy, our establishment offers an exceptional experience not readily available elsewhere in Rwanda — a comprehensive range of outstanding services, all under one extraordinary roof.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-12 md:gap-20 mt-14">
            <StatCounter end={8364} suffix="" label="Sqm Total GFA" />
            <StatCounter end={40} suffix="+" label="Keys" />
            <StatCounter end={5} suffix="" label="Dining Venues" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Section 3: Rooms Editorial ─── */}
      <section className="section-padding bg-brand-cream">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <ElevateOrnament variant="crest" className="max-w-[240px] mx-auto" />
            <p className="text-overline mt-4 mb-3">Accommodations</p>
            <h2 className="text-section-title text-brand-charcoal">Suites Crafted for the Extraordinary</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.slug} {...room} />
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-[calc(66.666%+12px)] mx-auto"
          >
            {rooms.slice(3).map((room) => (
              <RoomCard key={room.slug} {...room} />
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/accommodations" className="btn-outline">View All Suites</Link>
          </div>
        </div>
      </section>

      {/* ─── Section 4: The Precinct ─── */}
      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <ElevateOrnament variant="minimal" />
            <h2 className="text-section-title text-brand-charcoal mt-4">A World Within a World</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerSlow}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { num: '01', title: 'The Hotel', desc: '40 keys across 5 categories, world-class amenities, and personalised service.', href: '/accommodations' },
              { num: '02', title: 'V-Wellness', desc: '456 sqm private spa sanctuary with steam rooms, gym, nail bar, and couple suites.', href: '/wellness' },
              { num: '03', title: 'V-Club', desc: 'Exclusive members-only club with private dining, padel court, and golf simulator.', href: '/v-club' },
            ].map((item) => (
              <motion.div key={item.num} variants={fadeInUp} className="text-center">
                <span className="text-deco-number block">{item.num}</span>
                <div className="w-10 h-px bg-brand-gold mx-auto -mt-4 mb-5" />
                <h3 className="font-heading text-2xl text-brand-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm text-brand-taupe leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                <Link href={item.href} className="inline-flex items-center gap-1.5 mt-4 text-sm text-brand-gold font-semibold group">
                  Discover <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Section 5: Dining Feature ─── */}
      <section className="relative min-h-[70vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative min-h-[50vh] lg:min-h-full"
          >
            <ImagePlaceholder aspect="hero" label="V-Coffee & Restaurant — Dinner Service" className="absolute inset-0 !min-h-full w-full !aspect-auto" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="bg-brand-navy flex items-center"
          >
            <div className="p-10 md:p-16 lg:p-20">
              <motion.p variants={fadeInUp} className="text-overline text-brand-gold/70">Dining & Gastronomy</motion.p>
              <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-5xl text-white italic mt-4">
                Flavour. Atmosphere.<br />Distinction.
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 text-white/50 leading-relaxed">
                Four dining venues, each with its own character. From sunrise breakfasts at V-Coffee to midnight cocktails in the Cave Bar.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mt-6">
                {['V-Coffee', 'Gemilli Terrace', 'Cave Bar', 'Private Events'].map((venue) => (
                  <span key={venue} className="text-xs text-white/50 border border-white/15 px-3 py-1.5 tracking-wider">
                    {venue}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-8">
                <Link href="/dining" className="btn-outline !border-brand-gold/40 !text-brand-gold hover:!bg-brand-gold hover:!text-brand-navy">
                  Explore Dining <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Section 6: V-Wellness ─── */}
      <section className="section-padding bg-brand-warm-sand relative overflow-hidden">
        <DiamondPattern opacity={0.04} />
        <div className="container-luxury relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeIn}>
                <ElevateOrnament variant="minimal" className="!mx-0 !justify-start" />
              </motion.div>
              <motion.p variants={fadeInUp} className="text-overline">V-Wellness Spa</motion.p>
              <motion.h2 variants={fadeInUp} className="text-section-title text-brand-charcoal mt-3">
                Surrender to Stillness
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 text-editorial">
                A dedicated 456 sqm wellness sanctuary where healing is an art form. The V-Wellness at Elevate offers a comprehensive programme of restorative treatments, fitness, and beauty.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                {['Mini Gym', 'Nail Bar', 'Steam Rooms', 'Massage Rooms', 'Couple Suites', "Doctor's Office"].map((f) => (
                  <span key={f} className="flex items-center gap-2 text-sm text-brand-walnut">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    {f}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-8">
                <Link href="/wellness" className="btn-outline">Discover V-Wellness</Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <ImagePlaceholder aspect="portrait" label="V-Wellness Spa — Treatment Room" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Testimonials ─── */}
      <section className="section-padding bg-brand-warm-beige relative overflow-hidden">
        <GoldCrestWatermark opacity={0.04} />
        <div className="container-luxury relative">
          <div className="text-center mb-16">
            <ElevateOrnament variant="minimal" />
            <p className="text-overline mt-4 mb-3">Guest Experiences</p>
            <h2 className="text-section-title text-brand-charcoal">Words from Our Guests</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {reviews.map((review) => (
              <motion.div key={review.guestName} variants={fadeInUp}>
                <TestimonialCard {...review} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Section 8: Location ─── */}
      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="w-full aspect-video bg-brand-cream border border-brand-beige flex items-center justify-center"
            >
              <div className="text-center text-brand-sand">
                <MapPin className="w-10 h-10 mx-auto mb-3 text-brand-gold" />
                <p className="text-xs tracking-[0.2em] uppercase">Google Maps</p>
                <p className="text-xs mt-1">KG 13 Ave, Nyarutarama, Kigali</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeIn}>
                <ElevateOrnament variant="minimal" className="!mx-0 !justify-start" />
              </motion.div>
              <motion.p variants={fadeInUp} className="text-overline">Find Us</motion.p>
              <motion.h2 variants={fadeInUp} className="text-section-title text-brand-charcoal mt-3 mb-8">
                In the Heart of Kigali
              </motion.h2>

              <div className="space-y-5">
                {[
                  { icon: Plane, place: 'Kigali International Airport', time: '15 minutes' },
                  { icon: Flag, place: 'Nyarutarama Golf Course', time: 'Adjacent' },
                  { icon: Building2, place: 'Kigali Convention Centre', time: '10 minutes' },
                  { icon: Palmtree, place: 'City Centre', time: '12 minutes' },
                ].map((loc) => (
                  <motion.div
                    key={loc.place}
                    variants={fadeInUp}
                    className="flex items-center gap-4 pb-4 border-b border-brand-beige/60"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-brand-cream flex-shrink-0">
                      <loc.icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                    </div>
                    <span className="flex-1 text-brand-walnut">{loc.place}</span>
                    <span className="text-sm text-brand-sand">{loc.time}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-5 text-sm text-brand-taupe">
                <a href="tel:+250788308193" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                  <Phone className="w-4 h-4 text-brand-gold" /> +250 788 308 193
                </a>
                <a href="mailto:reservations.elevatesuites@gmail.com" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                  <Mail className="w-4 h-4 text-brand-gold" /> Email
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 9: V-Club Teaser ─── */}
      <section className="py-32 md:py-40 flex items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
        <GoldCrestWatermark opacity={0.06} />
        {/* Animated radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[600px] h-[600px] rounded-full animate-pulse-glow"
            style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerSlow}
          className="container-luxury text-center max-w-3xl mx-auto relative z-10"
        >
          <motion.p variants={fadeInUp} className="text-overline text-brand-gold/60 tracking-[0.5em] mb-8">
            By Invitation
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-hero text-white">
            Some Doors Open<br />
            <span className="italic text-brand-gold">By Invitation Only.</span>
          </motion.h2>
          <motion.div variants={fadeIn}>
            <ElevateOrnament variant="full" light className="max-w-[280px] mx-auto my-8" />
          </motion.div>
          <motion.p variants={fadeInUp} className="text-white/40 leading-relaxed max-w-xl mx-auto">
            The V-Club is Elevate&apos;s private members sanctuary — a world within a world. Available exclusively to a curated membership, offering unrivalled dining, wellness access, and social spaces.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10">
            <Link href="/v-club/membership" className="btn-outline !border-brand-gold/40">
              Enquire About Membership
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
