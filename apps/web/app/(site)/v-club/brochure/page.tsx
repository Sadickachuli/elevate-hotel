'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, FileText } from 'lucide-react'
import { fadeInUp, stagger } from '@/lib/animations'

export default function BrochurePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="container-luxury py-32 text-center max-w-xl mx-auto"
      >
        <motion.div variants={fadeInUp}>
          <div className="w-px h-12 bg-brand-gold/40 mx-auto mb-8" />
          <FileText className="w-12 h-12 text-brand-gold mx-auto mb-6" strokeWidth={1} />
          <p className="label-overline">V-Club</p>
          <h1 className="font-heading text-4xl text-white mt-4 italic">
            Digital Brochure
          </h1>
          <p className="mt-6 text-white/50 leading-relaxed">
            Download our comprehensive V-Club membership brochure. Discover the full range of benefits, facilities, and membership tiers available at Elevate&apos;s exclusive private club.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-10">
          <button className="btn-primary">
            <Download className="w-4 h-4" />
            Download Brochure (PDF)
          </button>
          <p className="mt-4 text-xs text-white/30">PDF — Available soon</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-4">Prefer to speak with us directly?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/v-club/membership" className="btn-outline !text-xs">Apply for Membership</Link>
            <Link href="/contact" className="btn-ghost-light !text-xs">Contact Us</Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
