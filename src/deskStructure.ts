import type {StructureResolver} from 'sanity/structure'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('ArtEffect Content')
    .items([
      S.listItem()
        .title('Batches')
        .schemaType('batch')
        .child(S.documentTypeList('batch').title('Batches')),
      S.listItem()
        .title('Designs')
        .schemaType('design')
        .child(S.documentTypeList('design').title('Designs')),
      S.listItem()
        .title('Products')
        .schemaType('product')
        .child(S.documentTypeList('product').title('Products')),
      S.divider(),
      S.listItem()
        .title('Artists')
        .schemaType('artist')
        .child(S.documentTypeList('artist').title('Artists')),
      S.listItem().title('NGOs').schemaType('ngo').child(S.documentTypeList('ngo').title('NGOs')),
    ])
