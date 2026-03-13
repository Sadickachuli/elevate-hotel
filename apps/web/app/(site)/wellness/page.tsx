'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Droplets, Dumbbell, Sparkles, Heart, Users, Stethoscope, DoorOpen, Building } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import ElevateOrnament from '@/components/ui/ElevateOrnament'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger, fadeInLeft, fadeInRight } from '@/lib/animations'

const facilities = [
  { icon: DoorOpen, name: 'Wellness Reception', desc: 'Marble & walnut welcome desk, serene arrival experience with herbal tea on arrival.' },
  { icon: Dumbbell, name: 'Mini Gym', desc: 'Fully equipped with Matrix & Reebok equipment, treadmills, free weights, and personal training.' },
  { icon: Sparkles, name: 'Nail Bar', desc: 'Luxury manicure & pedicure studio featuring OPI products and expert nail technicians.' },
  { icon: DoorOpen, name: 'Changing Rooms', desc: 'Private ladies & gents changing rooms with lockers, vanity stations, and premium amenities.' },
  { icon: Droplets, name: 'Wet Area', desc: 'Plunge pools and dedicated relaxation zone for post-treatment serenity.' },
  { icon: Droplets, name: 'Steam Rooms', desc: 'Separate eucalyptus-infused steam rooms for ladies and gents.' },
  { icon: Heart, name: 'Single Massage Rooms', desc: 'Two private treatment rooms with en-suite shower, ambient lighting, and aromatherapy.' },
  { icon: Users, name: 'Couple Massage Rooms', desc: 'Two romantic treatment suites with rose wall art, designed for shared wellness experiences.' },
  { icon: Stethoscope, name: 'Therapist & Doctor\'s Office', desc: 'On-site medical professional for wellness consultations and treatment planning.' },
  { icon: Building, name: 'Art-Lined Corridors', desc: 'Therapeutic walkways adorned with curated Rwandan art, part of the healing journey.' },
  { icon: Building, name: 'Wellness Office', desc: 'Treatment planning & consultation space for personalised wellness programmes.' },
]

const treatments = [
  { name: 'Swedish Massage', duration: '60 / 90 min', price: 'From $80' },
  { name: 'Deep Tissue Massage', duration: '60 / 90 min', price: 'From $90' },
  { name: 'Hot Stone Therapy', duration: '90 min', price: 'From $100' },
  { name: 'Couple\'s Ritual', duration: '120 min', price: 'From $200' },
  { name: 'Signature Facial', duration: '60 min', price: 'From $70' },
  { name: 'Luxury Mani-Pedi', duration: '90 min', price: 'From $60' },
  { name: 'Detox Body Wrap', duration: '90 min', price: 'From $95' },
  { name: 'Steam & Sauna Session', duration: '45 min', price: 'From $30' },
]

export default function WellnessPage() {
  return (
    <>
      <HeroSection
        title="The Art of Complete Restoration"
        subtitle="A dedicated 456 sqm wellness sanctuary where healing is an art form."
        overline="V-WELLNESS"
        imageLabel="V-Wellness Spa — Reception"
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Wellness', href: '/wellness' },
        ]}
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <ImagePlaceholder aspect="portrait" label="V-Wellness — Treatment Room" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="label-overline">V-Wellness — 456 sqm Private Spa</motion.p>
              <motion.div variants={fadeInUp} className="gold-divider !mx-0" />
              <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-brand-navy">
                Surrender to Stillness
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 font-accent italic text-xl text-brand-taupe leading-relaxed">
                A dedicated wellness sanctuary where healing is an art form. The V-Wellness at Elevate offers a comprehensive programme of restorative treatments, fitness, and beauty within a space designed to awaken every sense.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 text-brand-taupe leading-relaxed">
                Spanning 456 square metres, V-Wellness is a world apart — designed with natural stone, warm timber, ambient lighting, and the gentle sound of water. Every element is curated to guide you from the pace of daily life into a state of profound calm.
              </motion.p>
            </motion.div>
          </div>

          <ElevateOrnament className="mb-6" />
          <SectionHeading
            overline="Facilities"
            title="11 Dedicated Wellness Spaces"
            subtitle="Each space within V-Wellness has been designed with a singular purpose: your restoration."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {facilities.map((f) => (
              <motion.div
                key={f.name}
                variants={fadeInUp}
                className="bg-white border border-brand-beige/50 p-6 hover:border-brand-gold/30 transition-colors"
              >
                <f.icon className="w-7 h-7 text-brand-gold mb-3" strokeWidth={1.5} />
                <h3 className="font-heading text-lg text-brand-navy">{f.name}</h3>
                <p className="mt-2 text-sm text-brand-taupe leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-brand-warm-beige">
        <div className="container-luxury">
          <ElevateOrnament className="mb-6" />
          <SectionHeading
            overline="Treatments"
            title="Our Treatment Menu"
            subtitle="A selection of our signature therapies. Bespoke programmes available on consultation."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            {treatments.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                className={`flex items-center justify-between py-5 ${
                  i < treatments.length - 1 ? 'border-b border-brand-charcoal/10' : ''
                }`}
              >
                <div>
                  <h4 className="text-brand-charcoal font-heading text-lg">{t.name}</h4>
                  <p className="text-xs text-brand-taupe mt-0.5">{t.duration}</p>
                </div>
                <span className="text-brand-gold font-heading text-lg">{t.price}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">Book a Treatment</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream text-center">
        <div className="container-luxury">
          <p className="font-accent italic text-xl text-brand-taupe max-w-2xl mx-auto mb-6">
            V-Wellness is available to all hotel guests and V-Club members. Day passes available upon request.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="btn-outline">Book Your Stay</Link>
            <Link href="/v-club" className="btn-outline">Join V-Club</Link>
          </div>
        </div>
      </section>
    </>
  )
}
