import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Item Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({ name: 'price', title: 'Price (RWF)', type: 'number' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Beverages', 'Cocktails', 'Wine'],
      },
    }),
    defineField({
      name: 'dietary',
      title: 'Dietary Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Halal', 'Dairy-Free'] },
    }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'image' },
  },
})
