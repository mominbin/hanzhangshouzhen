import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const seoTitle = '上海含章收珍软件科技 | 专业软件开发定制服务'
const seoDescription = '上海含章收珍软件科技有限公司，专注企业管理平台、移动App、小程序、企业官网定制开发，提供全方位软件解决方案。'

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: ['上海软件公司', '软件开发定制', '企业管理平台', '小程序开发', 'App开发', '企业官网'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    type: 'website',
    locale: 'zh_CN',
    siteName: '含章收珍软件科技',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '上海含章收珍软件科技有限公司',
  description: seoDescription,
  url: 'https://hanzhangsoft.com',
  foundingDate: '2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
