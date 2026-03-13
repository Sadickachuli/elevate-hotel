import Link from 'next/link'
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'
import ElevateLogo from '@/components/ui/ElevateLogo'
import ElevateOrnament from '@/components/ui/ElevateOrnament'

const footerLinks = {
  Hotel: [
    { label: 'Our Suites', href: '/accommodations' },
    { label: 'Guest Services', href: '/accommodations/guest-services' },
    { label: 'In-Room Dining', href: '/accommodations/in-room-dining' },
    { label: 'Book a Stay', href: '/booking' },
  ],
  Dining: [
    { label: 'Restaurant', href: '/dining/restaurant' },
    { label: 'Gemilli Terrace', href: '/dining/poolside-bar' },
    { label: 'Cave Bar', href: '/dining/piano-lounge' },
    { label: 'Special Events', href: '/dining/special-events' },
  ],
  Wellness: [
    { label: 'V-Wellness Spa', href: '/wellness' },
    { label: 'Experience Kigali', href: '/experience' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Our Story', href: '/about/brand-story' },
  ],
  'V-Club': [
    { label: 'Membership', href: '/v-club' },
    { label: 'Apply Now', href: '/v-club/membership' },
    { label: 'Brochure', href: '/v-club/brochure' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-luxury py-20">
        {/* Logo + tagline */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-block">
            <ElevateLogo variant="light" size="lg" showText={false} />
          </Link>
          <p className="mt-4 font-accent italic text-white/50 text-lg">
            Where Luxury Meets Elevation
          </p>
          <ElevateOrnament variant="minimal" light className="max-w-[200px] mx-auto" />
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading text-sm tracking-[0.2em] uppercase text-brand-gold mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-brand-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-white/40">
              <a
                href="https://maps.google.com/?q=Nyarutarama+Kigali+Rwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <MapPin className="w-4 h-4" />
                KG 13 Ave, Nyarutarama, Kigali
              </a>
              <a
                href="tel:+250788308193"
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +250 788 308 193
              </a>
              <a
                href="mailto:reservations.elevatesuites@gmail.com"
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                reservations.elevatesuites@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
                { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:border-brand-gold hover:text-brand-gold transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="container-luxury flex flex-col md:flex-row justify-between items-center text-xs text-white/25 gap-2">
          <p>&copy; 2026 Elevate Hotel by Lidace. All rights reserved.</p>
          <p>Part of the Elevate Precinct by Lidace</p>
        </div>
      </div>
    </footer>
  )
}
