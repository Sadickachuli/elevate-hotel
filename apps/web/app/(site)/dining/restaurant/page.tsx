'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionHeading from '@/components/ui/SectionHeading'
import ElevateOrnament from '@/components/ui/ElevateOrnament'
import { fadeInUp, stagger, fadeInLeft, fadeInRight } from '@/lib/animations'

const menuSections = [
  {
    title: 'Starters',
    items: [
      { name: 'Avocado & Prawn Tower', desc: 'Fresh prawns layered with Rwandan avocado, citrus dressing', price: '$16' },
      { name: 'Beef Carpaccio', desc: 'Thinly sliced tenderloin, rocket, parmesan, truffle oil', price: '$18' },
      { name: 'Roasted Vegetable Soup', desc: 'Seasonal vegetables, herb croutons, cream swirl', price: '$12' },
    ],
  },
  {
    title: 'Main Courses',
    items: [
      { name: 'Grilled Tilapia Fillet', desc: 'Lake Kivu tilapia, lemon butter, sautéed spinach, herb rice', price: '$26' },
      { name: 'Rwandan-Spiced Lamb Rack', desc: 'Herb-crusted rack, root vegetable purée, mint jus', price: '$36' },
      { name: 'Pan-Roasted Chicken Supreme', desc: 'Free-range chicken, wild mushroom risotto, thyme jus', price: '$28' },
      { name: 'Mushroom Risotto', desc: 'Arborio rice, wild mushrooms, parmesan, truffle oil', price: '$22' },
    ],
  },
  {
    title: 'Rwandan Signatures',
    items: [
      { name: 'Brochettes de Boeuf', desc: 'Traditional beef skewers, grilled plantain, pili pili sauce', price: '$24' },
      { name: 'Isombe with Ugali', desc: 'Cassava leaves in rich groundnut sauce, traditional maize porridge', price: '$18' },
      { name: 'Matoke & Groundnut Sauce', desc: 'Steamed green bananas in aromatic peanut stew', price: '$16' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Chocolate Fondant', desc: 'Warm dark chocolate cake, liquid centre, vanilla bean ice cream', price: '$14' },
      { name: 'Passion Fruit Panna Cotta', desc: 'Creamy Italian custard, tropical passion fruit coulis', price: '$12' },
      { name: 'Seasonal Fruit Platter', desc: 'Fresh Rwandan tropical fruits with mint and honey', price: '$10' },
    ],
  },
]

export default function RestaurantPage() {
  return (
    <>
      <HeroSection
        title="The Heart of Elevate's Culinary World"
        subtitle="International cuisine elevated with Rwandan soul. Fresh local ingredients, expert culinary team, elegant setting with views of the garden."
        overline="V-COFFEE & RESTAURANT"
        imageLabel="V-Coffee & Restaurant — Main Dining"
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dining', href: '/dining' },
          { label: 'Restaurant', href: '/dining/restaurant' },
        ]}
      />

      <section className="py-12 bg-brand-warm-beige">
        <div className="container-luxury flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { label: 'Breakfast', time: '6:30 – 10:30' },
            { label: 'Lunch', time: '12:00 – 15:00' },
            { label: 'Dinner', time: '18:30 – 22:30' },
          ].map((slot) => (
            <div key={slot.label} className="flex items-center gap-3 text-brand-taupe">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span className="text-sm">
                <span className="text-brand-charcoal font-semibold">{slot.label}</span> {slot.time}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <ImagePlaceholder aspect="portrait" label="Restaurant — Chef at Work" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="label-overline">V-Coffee & Main Restaurant</motion.p>
              <motion.div variants={fadeInUp} className="gold-divider !mx-0" />
              <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-brand-navy">
                Where Tradition Meets Innovation
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 text-brand-taupe leading-relaxed">
                Our V-Coffee & Main Restaurant is the culinary heart of Elevate Hotel. An all-day dining experience that seamlessly transitions from leisurely breakfast to elegant dinner service. The kitchen draws inspiration from international cuisine, elevated with the finest Rwandan ingredients and a deep respect for local culinary traditions.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 text-brand-taupe leading-relaxed">
                The setting is warm and refined — natural light flooding through garden-facing windows, African art adorning the walls, and tables spaced for privacy. Whether you are here for a business breakfast or a romantic dinner, the experience is always memorable.
              </motion.p>
            </motion.div>
          </div>

          <ElevateOrnament className="mb-6" />
          <SectionHeading
            overline="The Menu"
            title="A Taste of Excellence"
            subtitle="Select highlights from our evolving seasonal menu."
          />

          <div className="max-w-3xl mx-auto">
            {menuSections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={stagger}
                className={`${idx > 0 ? 'mt-14 pt-14 border-t border-brand-beige' : ''}`}
              >
                <motion.h3 variants={fadeInUp} className="font-heading text-2xl text-brand-navy mb-6">{section.title}</motion.h3>
                <div className="space-y-5">
                  {section.items.map((item) => (
                    <motion.div key={item.name} variants={fadeInUp} className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-brand-walnut font-semibold">{item.name}</h4>
                        <p className="text-sm text-brand-taupe mt-0.5">{item.desc}</p>
                      </div>
                      <span className="text-brand-gold font-heading text-lg whitespace-nowrap">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream text-center">
        <div className="container-luxury">
          <p className="font-heading text-2xl text-brand-navy mb-4">Reserve Your Table</p>
          <p className="text-brand-taupe mb-6">For reservations and special dietary requirements, please get in touch.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Reserve a Table</Link>
            <a href="tel:+250788308193" className="btn-outline">Call +250 788 308 193</a>
          </div>
        </div>
      </section>
    </>
  )
}
