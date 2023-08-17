import { SchemaTypeDefinition } from 'sanity'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'images',
      type: 'document',
      title: 'Images',
      fields: [
        {
          name: "orderRank",
          type: "string",
          hidden: true
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: Rule => Rule.required().error('Needs a title'),
        },
        {
          name: "images",
          title: "Content",
          type: "array",
          validation: Rule => Rule.required().error('Need one image').min(1),
          of: [
            {
              type: "object",
              name: "objects",
              title: "Images",
              preview: {
                select: {
                  media: 'images',
                }
              },
              fields: [
                {
                  title: "Images",
                  name: "images",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
            {
              type: "object",
              name: "video",
              title: "Video",
              preview: {
                select: {
                  title: 'title',
                  subtitle: "hallo",
                }
              },
              fields: [
                {
                  title: "Video URL from vimeo",
                  description: 'Paste in the url from vimeo',
                  name: "videoUrl",
                  type: "url",
                },
              ],
            },
          ],
          options: {
            layout: "grid",
          },
        },
        
      ]
    },

    // globals

    {
      name: 'globals',
      type: 'document',
      title: 'Globals',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'body',
          title: 'Body',
          type: 'string',
        },
        {
          name: 'info',
          title: 'Contact information',
          type: 'string',
        },
        {
          name: 'contact',
          title: 'Contact',
          type: 'array',
          of: [
          {
            type: 'object',
            name: 'contact',
            title: 'contact',
            fields: [    
              {
                name: 'contact',
                title: 'Contact',
                description: 'Various ways of contact e.g. instagram, e-mail, phone..',
                type: 'string',
              },
              {
              title: "Link",
              name: "href",
              type: "url",
              validation: (Rule) =>
                Rule.uri({
                  scheme: ["http", "https", "mailto", "tel"],
                }),
              }
            ]
          }
          ]
          
        },
        {
          name: 'clients',
          title: 'Selected clients',
          type: 'array',
          of: [
            {
              title: 'client',
              name: 'client',
              type: 'string',
            }
          ]
        },
        {
          title: "SEO Image",
          name: "seoimage",
          type: "image",
          description: 'The image displayed when shared on facebook, twitter etc. May take some time to change due to facebook chaching',
          options: {
            hotspot: true,
          },
        },
      ]
    },
  ],
}

