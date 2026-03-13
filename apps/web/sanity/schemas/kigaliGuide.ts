import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'kigaliGuide',
  title: 'Explore Kigali - Guide Entry',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Place Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Restaurants', 'Culture', 'Nature', 'Nightlife', 'Shopping', 'Adventure'] },
    }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'website', title: 'Website', type: 'url' }),
    defineField({ name: 'recommended', title: 'Staff Recommended', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'image' },
  },
})
