import { defineType, defineField } from 'sanity'

/**
 * Global site settings — managed by staff via Sanity Studio.
 * Singleton document (only one instance).
 */
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'hotelName', title: 'Hotel Name', type: 'string', initialValue: 'Elevate Suites Kigali' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text', rows: 2 }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'tiktok', title: 'TikTok URL', type: 'url' }),
        defineField({ name: 'twitter', title: 'Twitter/X URL', type: 'url' }),
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'bookingCta',
      title: 'Booking CTA Text',
      type: 'string',
      initialValue: 'Book Your Stay',
    }),
    defineField({
      name: 'announcement',
      title: 'Announcement Banner',
      type: 'object',
      fields: [
        defineField({ name: 'enabled', title: 'Show Banner', type: 'boolean', initialValue: false }),
        defineField({ name: 'text', title: 'Banner Text', type: 'string' }),
        defineField({ name: 'link', title: 'Banner Link', type: 'url' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
