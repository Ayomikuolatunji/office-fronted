/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://college-img-preview.s3.eu-west-3.amazonaws.com/',
  },
}

module.exports = nextConfig
