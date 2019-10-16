import { IoIosHeartEmpty } from 'react-icons/io'

export default {
  name: 'news',
  type: 'document',
  title: 'News (First Page)',
  icon: IoIosHeartEmpty,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Admin Interface Title',
      description: `This field is for the admin interface only.`
    },
    {
        name: 'displayTitle',
        type: 'string',
        title: 'Display Title',
        description: `This is what appears in the top-left corner for the landing page only.`
    },
    {
      name: 'color',
      type: 'color',
      title: 'News Highlight Color'
    },
    {
        name: 'items',
        type: 'array',
        description: `These are the blocks that will be placed on the landing page.`,
        of: [
          {
            type: 'projectImage',
            title: 'Image'
          },
          {
            type: 'object',
            title: 'Text Block',
            fields: [
                {
                    name: 'text',
                    type: 'string'
                }
            ]
          }
        ]
    }
  ],
  // preview: {
  //     title: 'title'
  //     // subtitle: 'McTestFace'
  // }
}
