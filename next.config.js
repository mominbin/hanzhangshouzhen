/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export / no Next.js image optimization needed for this site
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
