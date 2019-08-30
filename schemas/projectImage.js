export default {
  name: 'projectImage',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative Text'
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Image Caption'
    }
  ]
}