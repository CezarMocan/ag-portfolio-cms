import { IoIosFingerPrint } from 'react-icons/io'

export default {
  name: 'files',
  type: 'document',
  title: 'File Storage',
  icon: IoIosFingerPrint,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Display Title',
      default: 'files',
      hidden: true
    },  
    {
      name: 'allFiles',
      title: 'Site-wide file storage',
      description: 'Use this section for hosting files you might want to link to in the content of your site, such as PDFs (press, CVs, etc.), videos, sound files, etc.',
      type: 'array',
      of: [
        {
          name: 'individual-file',
          title: 'File',
          type: 'file',
        }
      ]
    }
  ],
  // preview: {
  //     title: 'title'
  //     // subtitle: 'McTestFace'
  // }
}
