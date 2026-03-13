import {defineField, defineType} from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
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
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'shortBio', title: 'Short Bio', type: 'text'}),
    defineField({name: 'fullBio', title: 'Full Bio', type: 'blockContent'}),
    defineField({name: 'instagram', title: 'Instagram', type: 'url'}),
    defineField({name: 'portfolioUrl', title: 'Portfolio URL', type: 'url'}),
    defineField({name: 'featuredQuote', title: 'Featured Quote', type: 'string'}),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'shortBio',
      media: 'profileImage',
    },
  },
})
