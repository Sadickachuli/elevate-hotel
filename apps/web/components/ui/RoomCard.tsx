'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { imageZoomContainer, revealContent } from '@/lib/animations'

interface RoomCardProps {
  name: string
  slug: string
  category: string
  description: string
  priceFrom: string
  imageLabel?: string
}

export default function RoomCard({
  name,
  slug,
  category,
  description,
  priceFrom,
  imageLabel,
}: RoomCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <Link href={`/accommodations/${slug}`} className="block">
        <motion.div
          className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
          whileHover="hover"
          initial="rest"
        >
          <motion.div variants={imageZoomContainer} className="absolute inset-0">
            <ImagePlaceholder aspect="portrait" dark label={imageLabel || name} className="!aspect-auto absolute inset-0 w-full h-full" />
          </motion.div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-brand-gold text-brand-navy text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-bold">
              {category}
            </span>
          </div>

          {/* Bottom content overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent p-6 pt-20">
            <h3 className="font-heading text-xl text-white">{name}</h3>
            <p className="text-brand-gold/80 text-sm">From {priceFrom}/night</p>

            <motion.div
              variants={revealContent}
              className="overflow-hidden"
            >
              <p className="text-white/60 text-sm mt-2 leading-relaxed">{description}</p>
              <div className="flex items-center gap-2 mt-3 text-brand-gold text-sm font-semibold">
                View Suite <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
