import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

const structure = (S: any, context: any) =>
  S.list()
    .title(`LPP`)
    .items([
      S.listItem()
        .title('Globaler')
        .child(S.document().schemaType('globals').documentId('globals')),
      S.divider(),
      orderableDocumentListDeskItem({
        type: 'images',
        title: 'Images',
        S,
        context,
      }),
    ])

export default { structure }
