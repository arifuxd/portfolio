import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'project' }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
        }),
        defineField({
            name: 'software',
            title: 'Software',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Photoshop', value: 'Photoshop' },
                    { title: 'Illustrator', value: 'Illustrator' },
                    { title: 'After Effects', value: 'After Effects' },
                    { title: 'Premiere Pro', value: 'Premiere Pro' },
                    { title: 'Figma', value: 'Figma' },
                    { title: 'Cinema 4D', value: 'Cinema 4D' },
                    { title: 'Blender', value: 'Blender' },
                    { title: 'Rive', value: 'Rive' },
                    { title: 'Lottifiles', value: 'Lottifiles' },
                ],
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            options: {
                layout: 'grid',
            },
            of: [
                {
                    type: 'image',
                    options: { hotspot: true }
                },
                {
                    type: 'object',
                    name: 'vimeo',
                    title: 'Vimeo Video',
                    fields: [
                        { name: 'id', type: 'string', title: 'Vimeo Video ID' },
                        { name: 'thumbnail', type: 'image', title: 'Thumbnail' }
                    ]
                }
            ],
        }),
    ],
})
