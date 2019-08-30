export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
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
