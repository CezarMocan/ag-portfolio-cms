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
      title: 'Year'
    },
    {
      name: 'orderNumber',
      type: 'number',
      title: 'Order Number',
      description: 'This is the project order number. The projects will be presented on the website in ascending order of their respective order numbers.'
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location'
    },
    {
      name: 'client',
      type: 'string',
      title: 'Client (or context)'
    },
    {
      name: 'collaborators',
      type: 'string',
      title: 'Collaborators'
    },
    {
      name: 'description',
      type: 'richText',
      title: 'Description'
    },
    {
      name: 'textMinScale',
      type: 'number',
      title: 'Text minimum display scale',
      description: `A value between 0 and 1 representing the minimum width of the
        text blocks with respect to the screen width. 1 means full screen.
      `
    },
    {
      name: 'textMaxScale',
      type: 'number',
      title: 'Text maximum display scale',
      description: `A value between 0 and 1 representing the maximum width of the
        text blocks with respect to the screen width. 1 means full screen.
      `
    },
    {
      name: 'color',
      type: 'color',
      title: 'Project Highlight Color'
    },
    {
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'projectImage',
          title: 'Image'
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
  ]
}
