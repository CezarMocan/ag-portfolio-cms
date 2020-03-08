export default {
  type: 'object',
  name: 'richTextContainer',
  title: 'Rich Text Container',
  fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title (internal use only)'
      },
      {
        name: 'textMinScale',
        type: 'number',
        title: 'Text minimum display scale (% of window width)',
        description: `A value between 0 and 100 representing the minimum width of the
          text blocks with respect to the screen width. 100 means full screen width.
        `
      },
      {
        name: 'textMaxScale',
        type: 'number',
        title: 'Text maximum display scale (% of window width)',
        description: `A value between 0 and 100 representing the maximum width of the
          text blocks with respect to the screen width. 100 means full screen.
        `
      },    
      {
        name: 'textBoxHeightRatio',
        type: 'number',
        title: 'Text box proportions (box height as % of text height)',
        description: `A value between 0 and 100 representing what percentage of the calculated height
        of the text its bounding box will be. For example, a value of 100 means that the height of the
        box is equal to the height of the text, so no scrolling is required. A value of 20 means that
        the height of the box is 20% of the height of the text, so the user needs to scroll down in order
        to access the other 80% of the copy.
        `
      },
      {
          name: 'text',
          type: 'richText'
      }
  ]
}
