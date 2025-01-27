/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "assets.codepen.io"],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig

