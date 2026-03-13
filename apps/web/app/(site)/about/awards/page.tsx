'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award, Newspaper, Mail } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { fadeInUp, stagger } from '@/lib/animations'

const awards = [
  { year: '2026', title: 'Award Placeholder', org: 'To be announced' },
  { year: '2026', title: 'Award Placeholder', org: 'To be announced' },
  { year: '2026', title: 'Award Placeholder', org: 'To be announced' },
  { year: '2026', title: 'Award Placeholder', org: 'To be announced' },
]

export default function AwardsPage() {
  return (
    <>
      <HeroSection
        title="Awards & Recognition"
        subtitle="Positioning to become the defining luxury address in East Africa."
        imageLabel="Awards — Hotel Trophy Display"
        compact
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Awards', href: '/about/awards' }]}
        overline="Awards & Recognition"
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="font-accent italic text-2xl text-brand-taupe leading-relaxed">
              &ldquo;Positioned to become the defining luxury address in East Africa.&rdquo;
            </p>
          </div>

          <SectionHeading
            overline="Awards"
            title="Recognition & Accolades"
            subtitle="Our awards collection will grow as we welcome guests from around the world."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="border border-brand-beige/50 p-8 text-center bg-white"
              >
                <Award className="w-10 h-10 text-brand-gold/30 mx-auto mb-4" strokeWidth={1} />
                <p className="text-xs text-brand-gold tracking-wider uppercase">{award.year}</p>
                <h3 className="font-heading text-lg text-brand-navy mt-2">{award.title}</h3>
                <p className="text-xs text-brand-sand mt-1">{award.org}</p>
              </motion.div>
            ))}
          </motion.div>

          <SectionHeading
            overline="Press"
            title="In the Media"
            subtitle="Featured coverage and media mentions. For press inquiries, contact us below."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="aspect-[3/1] bg-brand-cream border border-brand-beige/50 flex items-center justify-center"
              >
                <Newspaper className="w-8 h-8 text-brand-sand/40" strokeWidth={1} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-sm text-brand-taupe mb-2">Media & Press Contact</p>
            <a href="mailto:reservations.elevatesuites@gmail.com" className="flex items-center justify-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors">
              <Mail className="w-4 h-4" /> reservations.elevatesuites@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
