/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    domains: ["college-sigunp-image.s3.amazonaws.com,college-img-preview.s3.eu-west-3.amazonaws.com","localhost"],
},
}

module.exports = nextConfig
