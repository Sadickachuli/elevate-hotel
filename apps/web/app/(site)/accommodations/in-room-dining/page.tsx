'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Clock } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp, stagger } from '@/lib/animations'

const menuCategories = [
  {
    name: 'Breakfast',
    hours: '6:00 AM – 10:30 AM',
    items: [
      { name: 'Continental Spread', desc: 'Fresh pastries, cold cuts, cheeses, fruit, yogurt, and cereals', price: '$18' },
      { name: 'Full English Breakfast', desc: 'Eggs any style, bacon, sausages, baked beans, grilled tomato, toast', price: '$22' },
      { name: 'Eggs Benedict', desc: 'Poached eggs on English muffin with hollandaise and smoked salmon', price: '$20' },
      { name: 'Rwandan Breakfast Plate', desc: 'Isombe, umutsima, sweet potatoes, fresh tropical fruit', price: '$16' },
    ],
  },
  {
    name: 'Light Meals',
    hours: '11:00 AM – 5:00 PM',
    items: [
      { name: 'Elevate Club Sandwich', desc: 'Triple-layer with grilled chicken, bacon, avocado, and aioli', price: '$18' },
      { name: 'Caesar Salad', desc: 'Crisp romaine, parmesan, croutons, classic Caesar dressing', price: '$14' },
      { name: 'Margherita Flatbread', desc: 'San Marzano tomato, mozzarella, fresh basil', price: '$16' },
      { name: 'Soup of the Day', desc: 'Chef\'s daily creation with artisan bread', price: '$12' },
    ],
  },
  {
    name: 'Main Courses',
    hours: '12:00 PM – 10:00 PM',
    items: [
      { name: 'Pan-Seared Nile Perch', desc: 'Lake Kivu perch, lemon butter, roasted vegetables, herb rice', price: '$28' },
      { name: 'Grilled Beef Tenderloin', desc: '250g grass-fed tenderloin, peppercorn jus, truffle mash', price: '$38' },
      { name: 'Vegetable Tagine', desc: 'Slow-cooked seasonal vegetables, couscous, preserved lemon', price: '$22' },
      { name: 'Brochettes with Plantain', desc: 'Traditional Rwandan beef skewers, fried plantain, pili pili sauce', price: '$24' },
      { name: 'Ingoyi Stew', desc: 'Rwandan traditional stew with tender beef and fresh vegetables', price: '$22' },
    ],
  },
  {
    name: 'Desserts',
    hours: 'All Day',
    items: [
      { name: 'Chocolate Fondant', desc: 'Warm dark chocolate with vanilla ice cream', price: '$14' },
      { name: 'Passion Fruit Panna Cotta', desc: 'Creamy panna cotta with tropical coulis', price: '$12' },
      { name: 'Seasonal Fruit Platter', desc: 'Selection of fresh Rwandan tropical fruits', price: '$10' },
      { name: 'Cheese Board', desc: 'Artisanal selection with honeycomb, grapes, and crackers', price: '$18' },
    ],
  },
  {
    name: 'Beverages',
    hours: 'All Day',
    items: [
      { name: 'Rwandan Single-Origin Coffee', desc: 'Freshly ground Arabica from the highlands', price: '$6' },
      { name: 'Specialty Tea Selection', desc: 'Green, chamomile, Earl Grey, Rwandan black tea', price: '$5' },
      { name: 'Fresh Juice', desc: 'Orange, passion fruit, mango, or pineapple', price: '$8' },
      { name: 'Smoothie', desc: 'Tropical blend with banana, mango, and yogurt', price: '$10' },
    ],
  },
]

export default function InRoomDiningPage() {
  return (
    <>
      <HeroSection
        title="Your Suite, Your Table"
        subtitle="Exquisite cuisine delivered to the comfort of your room. Available from dawn until late."
        overline="IN-ROOM DINING"
        imageLabel="In-Room Dining — Table Setting"
        compact
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Accommodations', href: '/accommodations' },
          { label: 'In-Room Dining', href: '/accommodations/in-room-dining' },
        ]}
      />

      <section className="section-padding bg-brand-ivory">
        <div className="container-luxury max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 text-sm text-brand-taupe">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>Full service: 6:00 AM – 11:00 PM</span>
            </div>
            <span className="hidden sm:block text-brand-beige">|</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>Late night menu: 11:00 PM – 6:00 AM</span>
            </div>
          </div>

          {menuCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className={`${idx > 0 ? 'mt-16 pt-16 border-t border-brand-beige' : ''}`}
            >
              <motion.div variants={fadeInUp} className="flex items-baseline justify-between mb-8">
                <h2 className="font-heading text-3xl text-brand-navy">{category.name}</h2>
                <span className="text-xs text-brand-sand tracking-wider uppercase">{category.hours}</span>
              </motion.div>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={fadeInUp}
                    className="flex justify-between items-start gap-4"
                  >
                    <div>
                      <h3 className="text-brand-walnut font-semibold">{item.name}</h3>
                      <p className="text-sm text-brand-taupe mt-0.5">{item.desc}</p>
                    </div>
                    <span className="text-brand-gold font-heading text-lg whitespace-nowrap">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="mt-20 bg-brand-cream p-8 text-center">
            <p className="font-heading text-2xl text-brand-navy mb-4">Ready to Order?</p>
            <p className="text-brand-taupe mb-6">Dial 0 from your room or contact us directly.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+250788308193" className="btn-primary">
                <Phone className="w-4 h-4" /> Call Us
              </a>
              <a href="https://wa.me/250788308193" target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
