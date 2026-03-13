import {defineArrayMember, defineField, defineType} from 'sanity'

export const ngoType = defineType({
  name: 'ngo',
  title: 'NGO',
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
    defineField({name: 'logo', title: 'Logo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'shortDescription', title: 'Short Description', type: 'text'}),
    defineField({name: 'fullStory', title: 'Full Story', type: 'blockContent'}),
    defineField({name: 'mission', title: 'Mission', type: 'text'}),
    defineField({
      name: 'impactStats',
      title: 'Impact Stats',
      type: 'array',
      of: [defineArrayMember({type: 'impactStat'})],
    }),
    defineField({name: 'website', title: 'Website', type: 'url'}),
    defineField({name: 'instagram', title: 'Instagram', type: 'url'}),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'mission',
      media: 'logo',
    },
  },
})
