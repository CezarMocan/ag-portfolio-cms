import { IoIosFingerPrint } from 'react-icons/io'

export default {
  name: 'press',
  type: 'document',
  title: 'Press',
  icon: IoIosFingerPrint,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Display Title',
      default: 'about',
      hidden: true
    },  
    {
      name: 'items',
      type: 'array',
      title: 'Press Items',
      of: [
        {
          type: 'object',
          name: 'pressItem',
          fields: [
            {
              name: 'title',
              title: 'Article Title',
              type: 'string'
            },
            {
              name: 'publication',
              title: 'Publication',
              type: 'string',
            },
            {
              name: 'year',
              title: 'Year',
              type: 'string'
            },
            {
              name: 'url',
              title: 'Link',
              type: 'string'
            }
          ]
        }
      ]
    },
  ],
}
