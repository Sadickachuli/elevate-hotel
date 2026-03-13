'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Wine } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger, fadeInLeft } from '@/lib/animations'

const cocktails = [
  { name: 'Kigali Mule', desc: 'Rwandan ginger beer, premium vodka, fresh lime, copper mug', price: '$14' },
  { name: 'Elevate Sour', desc: 'Bourbon, fresh lemon, egg white, Angostura bitters, gold leaf', price: '$16' },
  { name: 'Golf Club Old Fashioned', desc: 'Aged whiskey, demerara sugar, orange peel, aromatic bitters', price: '$18' },
  { name: 'The V-Club Martini', desc: 'Premium gin, dry vermouth, olive or twist, stirred to perfection', price: '$16' },
  { name: 'Nyarutarama Sunset', desc: 'Dark rum, passion fruit, orange juice, grenadine, tropical garnish', price: '$15' },
]

export default function CaveBarPage() {
  return (
    <>
      <HeroSection
        title="Descend into Something Different"
        subtitle="Kigali's most intimate cocktail experience. Underground sanctuary with exposed stone walls, moody lighting, and hand-crafted cocktails."
        overline="CAVE BAR"
        imageLabel="Cave Bar — Interior"
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dining', href: '/dining' },
          { label: 'Cave Bar', href: '/dining/piano-lounge' },
        ]}
      />

      <section className="py-6 bg-brand-warm-beige">
        <div className="container-luxury flex items-center justify-center gap-3 text-brand-taupe">
          <Clock className="w-4 h-4 text-brand-gold" />
          <span className="text-sm">Open daily 5:00 PM – 1:00 AM</span>
        </div>
      </section>

      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <ImagePlaceholder aspect="portrait" label="Cave Bar — Stone Walls" dark />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="label-overline">Cave Bar</motion.p>
              <motion.div variants={fadeInUp} className="w-16 h-px bg-brand-gold my-6" />
              <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-white">
                A World Below
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 text-white/60 leading-relaxed">
                The Cave Bar is Elevate&apos;s underground sanctuary — a cocktail experience unlike any other in Kigali. Descend into a world of exposed stone walls, warm candlelight, and an atmosphere that whispers of secrets and sophistication.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 text-white/60 leading-relaxed">
                Our mixologists craft each cocktail with precision and artistry, using premium spirits, locally sourced ingredients, and techniques honed across the world&apos;s finest bars. The curated spirits collection spans rare whiskeys, premium gins, and vintage cognacs.
              </motion.p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Wine className="w-8 h-8 text-brand-gold mx-auto mb-4" strokeWidth={1} />
              <h3 className="font-heading text-3xl text-white">Signature Cocktails</h3>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              {cocktails.map((cocktail) => (
                <motion.div
                  key={cocktail.name}
                  variants={fadeInUp}
                  className="flex justify-between items-start gap-4 pb-6 border-b border-white/10"
                >
                  <div>
                    <h4 className="text-white font-heading text-xl">{cocktail.name}</h4>
                    <p className="text-sm text-white/50 mt-1">{cocktail.desc}</p>
                  </div>
                  <span className="text-brand-gold font-heading text-xl whitespace-nowrap">{cocktail.price}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-20 text-center border border-white/10 p-10 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl text-white mb-3">Private Hire</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              The Cave Bar is available for exclusive private events. From intimate celebrations to corporate gatherings, create an unforgettable evening underground.
            </p>
            <Link href="/dining/special-events" className="btn-outline">Enquire About Private Hire</Link>
          </div>
        </div>
      </section>
    </>
  )
}
