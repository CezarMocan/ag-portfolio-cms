import { IoIosHeartEmpty } from 'react-icons/io'

export default {
  name: 'news',
  type: 'document',
  title: 'News (First Page)',
  icon: IoIosHeartEmpty,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Admin Interface Title',
      description: `This field is for the admin interface only.`,
      hidden: true
    },
    {
        name: 'displayTitle',
        type: 'string',
        title: 'Display Title',
        description: `This is what appears in the top-left corner for the landing page only.`
    },
    {
      name: 'desktopShowsImages',
      type: 'boolean',
      title: 'Display images on desktop',
      desription: 'Turn on this toggle if you would like the desktop version of the site to display the attached images on the news page; When the toggle is turned off, images only show up in the mobile version, in the top half of the screen, and the desktop news page remains text-only.',
    },
    {
        name: 'items',
        type: 'array',
        description: `These are the blocks that will be placed on the landing page.`,
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
}
