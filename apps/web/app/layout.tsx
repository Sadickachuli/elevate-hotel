import type { Metadata } from 'next'
import { Montserrat, Cormorant_Garamond } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

const headingFont = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const accentFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Elevate Hotel by Lidace | Luxury Boutique Hotel Kigali',
    template: '%s | Elevate Hotel by Lidace',
  },
  description:
    'Experience unparalleled luxury in the heart of Kigali. Elevate Hotel by Lidace offers world-class accommodations, fine dining, V-Wellness spa, and exclusive V-Club membership in Nyarutarama.',
  keywords: [
    'luxury hotel Kigali',
    'boutique hotel Rwanda',
    'Elevate Hotel',
    'Elevate Suites Kigali',
    'Nyarutarama hotel',
    '5 star hotel Kigali',
    'V-Club Kigali',
    'luxury spa Rwanda',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Elevate Hotel by Lidace',
    title: 'Elevate Hotel by Lidace | Where Luxury Meets Elevation',
    description:
      'Kigali\'s finest luxury boutique hotel. 40 keys, V-Wellness spa, V-Club membership, and world-class dining in Nyarutarama.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
