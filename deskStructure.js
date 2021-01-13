import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Page')
        .child(
          S.document()
            .schemaType('about')
            .documentId('aboutPage')
        ),
        S.listItem()
        .title('File Storage')
        .child(
          S.document()
            .schemaType('files')
            .documentId('fileStorage')
        ),
        S.listItem()
        .title('News Page')
        .child(
          S.document()
            .schemaType('news')
            .documentId('newsPage')
        ),
        S.listItem()
        .title('Press Mentions')
        .child(
          S.document()
            .schemaType('press')
            .documentId('pressPage')
        ),
      ...S.documentTypeListItems().filter(listItem => !['about', 'files', 'news', 'press'].includes(listItem.getId()))
    ])