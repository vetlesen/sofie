import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'v4q3lb9i',
  dataset: 'production',
  apiVersion: '2022-12-15',
  useCdn: false,
})
