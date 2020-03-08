import { IoIosAperture } from 'react-icons/io'

export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  icon: IoIosAperture,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title'
    },    
    {
      name: 'year',
      type: 'string',
      title: 'Project Year'
    },    
    {
      name: 'url',
      type: 'string',
      title: 'Project URL',
      description: 'This is what goes after http://avg.studio/ in the URL.'
    },    
    {
      name: 'orderNumber',
      type: 'number',
      title: 'Order Number',
      description: 'This is the project order number. The projects will be presented on the website in ascending order of their respective order numbers.'
    },
    {
      name: 'projectBlocks',
      type: 'array',
      of: [
        {
          type: 'projectImage',
          title: 'Image'
        },
        {
          type: 'richTextContainer',
          title: 'Text'
        }
      ]
    }
  ],
  orderings: [
    {
      title: 'Order number',
      name: 'OrderNumberAsc',
      by: [
        { field: 'orderNumber', direction: 'asc' }
      ]
    }
  ],
  initialValue: () => ({
    url: 'your-url-here',
    title: 'Unpublished Project'
  })
}
