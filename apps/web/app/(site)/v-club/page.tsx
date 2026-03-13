'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import GoldCrestWatermark from '@/components/ui/GoldCrestWatermark'
import ElevateOrnament from '@/components/ui/ElevateOrnament'
import { fadeInUp, stagger } from '@/lib/animations'

const benefits = [
  { title: 'Private Restaurant & Lounge', desc: '1,900 sqm exclusive dining facility reserved for members.', imageLabel: 'V-Club Restaurant & Lounge' },
  { title: 'Priority V-Wellness Access', desc: 'First-priority booking for all spa treatments and wellness programmes.', imageLabel: 'V-Wellness Spa Access' },
  { title: 'Members-Only Padel Court', desc: 'Private court access with equipment provided and coaching available.', imageLabel: 'Padel Court' },
  { title: 'Business Center & Conference', desc: 'Priority access to conference facilities and meeting rooms.', imageLabel: 'Business Center' },
  { title: 'Golf Simulator Suite', desc: '240 sqm state-of-the-art golf simulation experience.', imageLabel: 'Golf Simulator Suite' },
  { title: 'Personal Concierge', desc: 'Dedicated member liaison and private parking privileges.', imageLabel: 'Personal Concierge Service' },
  { title: 'Exclusive Events', desc: 'Members-only soirées, wine dinners, networking evenings, and cultural events.', imageLabel: 'Exclusive Members Event' },
  { title: 'Priority Hotel Rates', desc: 'Preferential rates on all room categories for members and their guests.', imageLabel: 'Hotel Suite — Members Rate' },
]

const tiers = [
  {
    tier: 'Silver',
    name: 'V-Club Access',
    desc: 'Core membership — club access, events, concierge',
    features: ['Access to V-Club lounge & restaurant', 'Members events calendar', 'Personal concierge', 'Dedicated parking', 'Priority reservations'],
  },
  {
    tier: 'Gold',
    name: 'V-Club Premier',
    desc: 'Full access + spa credits + priority reservations',
    features: ['All Silver benefits', 'Monthly V-Wellness spa credits', 'Golf simulator access', 'Padel court booking', 'Guest passes (2/month)', 'Priority event seating'],
    featured: true,
  },
  {
    tier: 'Platinum',
    name: 'V-Club Private',
    desc: 'All-inclusive + dedicated liaison + bespoke services',
    features: ['All Gold benefits', 'Dedicated member liaison', 'Unlimited V-Wellness access', 'Bespoke event hosting', 'Preferential hotel rates', 'Private dining access', 'Complimentary parking (2 vehicles)'],
  },
]

export default function VClubPage() {
  return (
    <>
      {/* Dark Cinematic Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0">
          <ImagePlaceholder aspect="hero" label="V-Club — Private Lounge" dark className="!min-h-full w-full opacity-30" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full animate-pulse-glow" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
        </div>

        <GoldCrestWatermark opacity={0.05} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 container-luxury text-center py-40 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-px h-20 bg-brand-gold/40 mx-auto mb-8 origin-top"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-5xl md:text-7xl text-white italic leading-tight"
          >
            A Circle of Excellence.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 text-white/50 leading-relaxed max-w-xl mx-auto"
          >
            The V-Club is Elevate&apos;s private members sanctuary — a world within a world. Available exclusively to a curated membership, the club offers unrivalled dining, networking, wellness access, and social spaces reserved for those who expect nothing less than the best.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link href="/v-club/membership" className="btn-primary">Apply for Membership</Link>
            <Link href="/v-club/brochure" className="btn-outline !border-brand-gold/40">Download Brochure</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-6"
          >
            <span className="inline-block text-xs text-white/20 tracking-[0.3em] uppercase border border-white/10 px-4 py-2">
              Members Only
            </span>
          </motion.div>
        </motion.div>
      </section>

      <ElevateOrnament variant="full" light />

      {/* Benefits */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="label-overline">Membership Benefits</p>
            <div className="w-16 h-px bg-brand-gold mx-auto my-6" />
            <h2 className="font-heading text-4xl text-white">What V-Club Offers</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeInUp}
                className="group border border-white/10 hover:border-brand-gold/30 transition-colors overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <ImagePlaceholder label={b.imageLabel} aspect="landscape" dark className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading text-lg text-white">{b.title}</h3>
                  <p className="mt-2 text-xs text-white/40 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ElevateOrnament variant="crest" light />

      {/* Tiers */}
      <section className="section-padding bg-brand-navy">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="label-overline">Membership Tiers</p>
            <div className="w-16 h-px bg-brand-gold mx-auto my-6" />
            <h2 className="font-heading text-4xl text-white">Choose Your Level</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {tiers.map((t) => (
              <motion.div
                key={t.tier}
                variants={fadeInUp}
                className={`border p-8 ${
                  t.featured
                    ? 'border-brand-gold bg-brand-gold/5 relative'
                    : 'border-white/10'
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-gold text-brand-navy text-xs font-semibold tracking-wider uppercase px-4 py-1">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <span className="text-xs text-brand-gold tracking-[0.3em] uppercase">{t.tier}</span>
                  <h3 className="font-heading text-2xl text-white mt-2">{t.name}</h3>
                  <p className="text-xs text-white/40 mt-1">{t.desc}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/v-club/membership" className={`w-full justify-center ${t.featured ? 'btn-primary' : 'btn-outline'}`}>
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
