import {defineArrayMember, defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 120},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'design',
      title: 'Design',
      type: 'reference',
      to: [{type: 'design'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          {title: 'Tee', value: 'tee'},
          {title: 'Hoodie', value: 'hoodie'},
          {title: 'Sweatshirt', value: 'sweatshirt'},
        ],
      },
    }),
    defineField({name: 'color', title: 'Color', type: 'string'}),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          options: {list: ['XS', 'S', 'M', 'L', 'XL', 'XXL']},
        }),
      ],
    }),
    defineField({name: 'price', title: 'Price', type: 'number'}),
    defineField({name: 'sku', title: 'SKU', type: 'string'}),
    defineField({name: 'stock', title: 'Stock', type: 'number'}),
    defineField({
      name: 'productImages',
      title: 'Product Images',
      type: 'array',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}})],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Coming Soon', value: 'coming-soon'},
          {title: 'Sold Out', value: 'sold-out'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      designName: 'design.name',
      status: 'status',
      media: 'productImages.0',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.designName || 'Design TBD'} · ${selection.status || 'Status TBD'}`,
        media: selection.media,
      }
    },
  },
})
