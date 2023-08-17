/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default config
