import {defineArrayMember, defineField, defineType} from 'sanity'

export const designType = defineType({
  name: 'design',
  title: 'Design',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 120},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'batch',
      title: 'Batch',
      type: 'reference',
      to: [{type: 'batch'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: [{type: 'artist'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artworkImage',
      title: 'Artwork Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}})],
    }),
    defineField({
      name: 'meaning',
      title: 'Meaning',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'symbolism', title: 'Symbolism', type: 'text'}),
    defineField({
      name: 'availableColors',
      title: 'Available Colors',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'mockups',
      title: 'Mockups',
      type: 'array',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}})],
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'product'}]})],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      artistName: 'artist.name',
      batchTitle: 'batch.title',
      media: 'artworkImage',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.artistName || 'Artist TBD'} · ${selection.batchTitle || 'Batch TBD'}`,
        media: selection.media,
      }
    },
  },
})
