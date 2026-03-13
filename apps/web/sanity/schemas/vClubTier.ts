import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'vClubTier',
  title: 'V-Club Membership Tier',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Tier Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'price', title: 'Annual Price (RWF)', type: 'number' }),
    defineField({ name: 'benefits', title: 'Benefits', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'featured', title: 'Featured Tier', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'image', title: 'Tier Image', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'price', media: 'image' },
  },
})
