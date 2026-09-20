import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { siteConfig } from '@/config/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.baseUrl),
  // ── 基础 SEO ──
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: siteConfig.seo.baseUrl,
  },
  // ── Open Graph (微信 / 朋友圈 / Slack / Discord 分享卡片) ──
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: 'website',
    locale: 'zh_CN',
    siteName: siteConfig.company.shortName,
    url: siteConfig.seo.baseUrl,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.company.name,
      },
    ],
  },
  // ── Twitter Card ──
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  // ── 百度站长验证 (替换 content 为实际验证码) ──
  other: {
    'baidu-site-verification': 'REPLACE_WITH_YOUR_VERIFICATION_CODE',
  },
}

// ── JSON-LD 结构化数据 ──
const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.company.name,
  alternateName: siteConfig.company.shortName,
  description: siteConfig.seo.description,
  url: siteConfig.seo.baseUrl,
  foundingDate: String(siteConfig.company.founded),
  logo: `${siteConfig.seo.baseUrl}/images/logo.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.contact.address,
    addressCountry: 'CN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    contactType: 'customer service',
    availableLanguage: ['Chinese'],
  },
  sameAs: [
    siteConfig.social.github,
  ].filter(Boolean),
}

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.company.name,
  url: siteConfig.seo.baseUrl,
  description: siteConfig.seo.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.seo.baseUrl}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: '首页',
      item: siteConfig.seo.baseUrl,
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 字体走系统栈，不加载 Web 字体 —— Google Fonts 在国内不可达。
            显示字体用宋体（中国官方票据的标题字体），正文用黑体，
            票据编号用等宽。定义见 globals.css 的 --font-* 。 */}

        {/* 揭示动效的启用标志。
            滚动揭示的初始隐藏态只在 .js-reveal 下生效，而该类由这段
            同步脚本设置 —— 它必须先于渲染执行。
            这样一旦 JS 包加载失败（网络、缓存、老版本 bundle），
            该类不存在，内容一律可见，不会出现「首屏以下全空」。
            @media (scripting: none) 覆盖不到「脚本可解析但执行失败」的情况。 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-reveal')`,
          }}
        />
        {/* ── 百度统计 (替换 YOUR_BAIDU_TONGJI_ID) ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                // 替换 BAIDU_TONGJI_ID 为你的百度统计 ID
                // var hm = document.createElement("script");
                // hm.src = "https://hm.baidu.com/hm.js?BAIDU_TONGJI_ID";
                // var s = document.getElementsByTagName("script")[0];
                // s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
      </head>
      <body>
        {/* ── JSON-LD 结构化数据 ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
