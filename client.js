import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "bmceyne7",
  dataset: "production",
  apiVersion: "2022-12-15",
  useCdn: false,
});
