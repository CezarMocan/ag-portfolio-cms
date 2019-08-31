import { GoTelescope } from 'react-icons/go'

export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  icon: GoTelescope,
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
