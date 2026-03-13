import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'diningVenue',
  title: 'Dining Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Venue Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'type',
      title: 'Venue Type',
      type: 'string',
      options: {
        list: [
          { title: 'Restaurant', value: 'restaurant' },
          { title: 'Poolside Bar', value: 'poolside-bar' },
          { title: 'Piano Lounge', value: 'piano-lounge' },
          { title: 'In-Room Dining', value: 'in-room' },
        ],
      },
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'string',
      description: 'e.g., "Daily 6:30 AM – 10:30 PM"',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'menuItem' }] }],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'type', media: 'heroImage' },
  },
})
