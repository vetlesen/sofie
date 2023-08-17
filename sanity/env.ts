export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01'


export const dataset = "production"
export const projectId = "bmceyne7"


// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// )

export const readToken = process.env.SANITY_API_READ_TOKEN

export const previewSecretDocumentId: `${string}.${string}` = 'preview.secret'

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
