export default {
  name: 'richText',
  type: 'array',
  title: 'Text',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [         
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'string',
                title: 'URL',
                // validation: Rule => Rule
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: '',
                type: 'boolean',
                value: 'true'
              }
            ]
          }
        ]
      }
    }
  ]
}