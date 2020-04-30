export default {
  name: 'projectVideo',
  type: 'object',
  title: 'Video',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'minScale',
      type: 'number',
      title: 'Minimum Display Scale (%)',
      description: `A value between 0 and 100 representing the minimum width of the
        current video with respect to the screen width. 100 means full screen.
      `
    },
    {
      name: 'maxScale',
      type: 'number',
      title: 'Maximum Display Scale (%)',
      description: `A value between 0 and 100 representing the maximum width of the
        current video with respect to the screen width. 100 means full screen.
      `
    },
    { 
      name: 'video', 
      title: 'Video', 
      type: 'mux.video'
    },
  ],
}