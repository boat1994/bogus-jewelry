import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'seo',
            type: 'group',
            label: 'SEO Settings',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Meta Title',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: 'Meta Description',
                    required: true,
                },
                {
                    name: 'ogImage',
                    type: 'upload',
                    relationTo: 'media',
                    label: 'OpenGraph Image',
                },
            ],
        },
    ],
}
