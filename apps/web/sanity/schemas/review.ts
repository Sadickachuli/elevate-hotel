import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Guest Review',
  type: 'document',
  fields: [
    defineField({ name: 'guestName', title: 'Guest Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'content', title: 'Review Content', type: 'text', rows: 4 }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
    defineField({ name: 'source', title: 'Source', type: 'string', options: { list: ['Google', 'TripAdvisor', 'Booking.com', 'Direct'] } }),
    defineField({ name: 'date', title: 'Review Date', type: 'date' }),
    defineField({ name: 'featured', title: 'Show on Homepage', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'guestName', subtitle: 'rating' },
  },
})
