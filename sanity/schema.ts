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
          name: 'year',
          type: 'string',
          title: 'Year',
          validation: Rule => Rule.required().error('Needs a title'),
        },
        {
          name: 'body',
          type: 'text',
          title: 'Description',
          validation: Rule => Rule.required().error('Needs a title'),
        },
                {
          name: 'infolist',
          title: 'Information list',
          type: 'array',
          of: [
            {
              type: "object",
              name: "objects",
              title: "Information",
              fields: [
                {
                  title: 'Name',
                  description: 'Type, size, studio, client, collaborators..',
                  name: 'info',
                  type: 'string',
                },
                {
                  title: 'Content',
                  name: 'content',
                  type: 'string',
                }
              ],
            },
          ]
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
          type: 'text',
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
                name: 'title',
                title: 'title',
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
          name: 'drawings',
          title: 'Drawings',
          type: 'array',
          of: [
            {
              title: "drawing",
              name: "drawing",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ]
        },

      ]
    },
  ],
}

