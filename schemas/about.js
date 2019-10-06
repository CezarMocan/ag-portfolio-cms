import { IoIosFingerPrint } from 'react-icons/io'

export default {
  name: 'about',
  type: 'document',
  title: 'Personal Information',
  icon: IoIosFingerPrint,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Display Title'
    },  
    {
      name: 'description',
      type: 'richText',
      title: 'About You'
    }
  ],
  // preview: {
  //     title: 'title'
  //     // subtitle: 'McTestFace'
  // }
}
