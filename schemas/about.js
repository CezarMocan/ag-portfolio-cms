import { IoIosFingerPrint } from 'react-icons/io'

export default {
  name: 'about',
  type: 'document',
  title: 'About',
  icon: IoIosFingerPrint,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Display Title',
      default: 'about',
      hidden: true
    },  
    {
      name: 'description',
      type: 'richText',
      title: 'About You'
    },
  ],
  // preview: {
  //     title: 'title'
  //     // subtitle: 'McTestFace'
  // }
}
