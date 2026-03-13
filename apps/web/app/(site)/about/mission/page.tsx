'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Shield, Fingerprint, Award, Heart } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp, stagger } from '@/lib/animations'

const values = [
  { icon: ArrowUp, name: 'Elevation', desc: 'We raise every standard, every time. From the smallest detail to the grandest gesture, excellence is non-negotiable.' },
  { icon: Shield, name: 'Privacy', desc: 'Your experience is yours alone. Discretion, security, and personal space are fundamental to our philosophy.' },
  { icon: Fingerprint, name: 'Authenticity', desc: 'Proudly Rwandan, globally refined. Our roots are in Rwanda\'s culture, our reach is international.' },
  { icon: Award, name: 'Excellence', desc: 'Mediocrity has no home here. We pursue the highest standard in every service, every interaction, every day.' },
  { icon: Heart, name: 'Warmth', desc: 'The best luxury is deeply human. Genuine care, personal attention, and heartfelt hospitality define us.' },
]

export default function MissionPage() {
  return (
    <>
      <HeroSection
        title="Our Mission & Values"
        subtitle="The principles that guide everything we do at Elevate."
        imageLabel="Mission — Team & Service"
        compact
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Mission & Values', href: '/about/mission' }]}
        overline="Mission & Values"
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury text-center max-w-3xl mx-auto mb-20">
          <p className="label-overline">Our Mission</p>
          <div className="gold-divider" />
          <p className="font-accent italic text-2xl md:text-3xl text-brand-navy leading-relaxed">
            &ldquo;To redefine luxury hospitality in Rwanda by delivering exceptional, personalised experiences rooted in African elegance, global standards, and an unwavering commitment to our guests.&rdquo;
          </p>
        </div>

        <div className="container-luxury">
          <SectionHeading
            overline="Our Values"
            title="What We Stand For"
            subtitle="Five core values that define the Elevate experience."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {values.map((v) => (
              <motion.div
                key={v.name}
                variants={fadeInUp}
                className="bg-white border border-brand-beige/50 p-8 text-center hover:border-brand-gold/30 transition-colors"
              >
                <v.icon className="w-10 h-10 text-brand-gold mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-xl text-brand-navy">{v.name}</h3>
                <p className="mt-3 text-sm text-brand-taupe leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
