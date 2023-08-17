/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool, StructureBuilder } from 'sanity/desk'
import deskStructure from 'deskStructure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'



// see https://www.sanity.io/docs/api-versioning for how versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import {media, mediaAssetSource} from 'sanity-plugin-media'


export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  //edit schemas in './sanity/schema'
  schema,
  plugins: [
    deskTool({
      structure: (S, context) => 
      S.list()
      .title(`LPP`)
      .items([
        // S.listItem()
        //   .title('Globaler')
        //   .child(S.document().schemaType('globals').documentId('globals')),
        // S.divider(),
        orderableDocumentListDeskItem({
          type: 'images',
          title: 'Image collections',
          S,
          context,
        }),
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            "images",
            "media.tag"
          ].includes(listItem.getId())
      ),
      ])
      
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    vercelDeployTool(),
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: previousAssetSources => {
        return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
      }
    }
  }
})


