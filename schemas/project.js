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
  ]
}
