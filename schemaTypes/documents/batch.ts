import {defineArrayMember, defineField, defineType} from 'sanity'

export const batchType = defineType({
  name: 'batch',
  title: 'Batch',
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
    defineField({name: 'batchNumber', title: 'Batch Number', type: 'string'}),
    defineField({
      name: 'causeTitle',
      title: 'Cause Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ngo',
      title: 'NGO',
      type: 'reference',
      to: [{type: 'ngo'}],
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'releaseDate', title: 'Release Date', type: 'date'}),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Live', value: 'live'},
          {title: 'Archived', value: 'archived'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'heroImage', title: 'Hero Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'overview', title: 'Overview', type: 'text'}),
    defineField({name: 'whyThisBatchExists', title: 'Why This Batch Exists', type: 'blockContent'}),
    defineField({
      name: 'artists',
      title: 'Artists',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'artist'}]})],
    }),
    defineField({
      name: 'designs',
      title: 'Designs',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'design'}]})],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      causeTitle: 'causeTitle',
      ngoName: 'ngo.name',
      releaseDate: 'releaseDate',
      media: 'heroImage',
    },
    prepare(selection) {
      const cause = selection.causeTitle || 'Cause TBD'
      const ngo = selection.ngoName || 'NGO TBD'
      const release = selection.releaseDate || 'Release TBD'

      return {
        title: selection.title,
        subtitle: `${cause} + ${ngo} + ${release}`,
        media: selection.media,
      }
    },
  },
})
