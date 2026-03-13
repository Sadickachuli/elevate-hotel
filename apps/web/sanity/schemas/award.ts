import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'award',
  title: 'Award / Press',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Award Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'organization', title: 'Awarding Organization', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'number' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({ name: 'image', title: 'Badge / Logo', type: 'image' }),
    defineField({ name: 'link', title: 'Press Link', type: 'url' }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['Award', 'Press Mention', 'Certification'] },
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'year', media: 'image' },
  },
})
