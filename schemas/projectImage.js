export default {
  name: 'projectImage',
  type: 'image',
  title: 'Image',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      description: `Some of your visitors cannot see images,
        be they blind, color-blind, low-sighted;
        alternative text is of great help for those
        people that can rely on it to have a good idea of
        what\'s on your page.`
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Image Caption'
    },
    {
      name: 'minScale',
      type: 'number',
      title: 'Minimum Display Scale',
      description: `A value between 0 and 1 representing the minimum width of the
        current image with respect to the screen width. 1 means full screen.
      `
    },
    {
      name: 'maxScale',
      type: 'number',
      title: 'Maximum Display Scale',
      description: `A value between 0 and 1 representing the maximum width of the
        current image with respect to the screen width. 1 means full screen.
      `
    },
  ],
  options: {
    metadata: ['palette', 'lqip']
  }
}