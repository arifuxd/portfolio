import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'category' }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
    ],
})
