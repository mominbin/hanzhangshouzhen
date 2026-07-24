/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 静态导出，兼容 Cloudflare Pages / 阿里云 OSS 等
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
