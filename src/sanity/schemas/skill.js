import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const skill = defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'skill' }),
        defineField({
            name: 'name',
            title: 'Skill Name',
            type: 'string',
        }),
        defineField({
            name: 'level',
            title: 'Level (0-100)',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(100),
        }),
    ],
})
