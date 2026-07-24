# 上海含章收珍软件科技 — 公司主页实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 从零搭建上海含章收珍软件科技公司主页，Next.js 14 + TypeScript + Tailwind CSS，支持暗黑/明亮双模式，所有内容通过 config/site.ts 管理。

**Architecture:** Next.js 14 App Router 单页应用，8 个板块组件，Framer Motion 动效，next-themes 主题切换，集中式内容配置。全部使用 Mock 数据，CSS 占位图。

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS 3.4, next-themes, Framer Motion, Lucide React

---

### Task 1: 项目脚手架搭建

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`, `postcss.config.js`
- Create: `app/globals.css`, `app/layout.tsx`, `app/page.tsx`
- Create: `.gitignore`

- [ ] **Step 1: 初始化 package.json 并安装依赖**

```bash
cd /d/workspace/homePage
cat > package.json << 'PKGJSON'
{
  "name": "hanzhang-homepage",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "next-themes": "^0.3.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/node": "^20.14.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
PKGJSON
npm install
```

Expected: `npm install` 成功，无错误

- [ ] **Step 2: 创建 tsconfig.json**

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: 创建 next.config.js**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

- [ ] **Step 4: 创建 tailwind.config.ts**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#a5b4fc',
          dark: '#4f46e5',
        },
        accent: {
          DEFAULT: '#a855f7',
          light: '#c4b5fd',
          dark: '#7c3aed',
        },
        dark: {
          bg: '#0a0a1a',
          card: 'rgba(255,255,255,0.03)',
          border: 'rgba(255,255,255,0.06)',
          text: '#e0e7ff',
          muted: '#94a3b8',
        },
        light: {
          bg: '#ffffff',
          card: '#f8fafc',
          border: '#f1f5f9',
          text: '#1e1b4b',
          muted: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'Microsoft YaHei', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 5: 创建 postcss.config.js**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 6: 创建 app/globals.css — CSS 变量和 Tailwind 指令**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-bg: #ffffff;
    --color-bg-secondary: #f8fafc;
    --color-card: #ffffff;
    --color-card-hover: #f1f5f9;
    --color-text: #1e1b4b;
    --color-text-muted: #6b7280;
    --color-text-accent: #6366f1;
    --color-border: #f1f5f9;
    --color-border-hover: #e5e7eb;
    --color-nav-bg: rgba(255, 255, 255, 0.8);
    --color-hero-gradient: linear-gradient(135deg, #f8fafc, #f1f5f9, #faf5ff);
    --color-cta-bg: linear-gradient(135deg, #6366f1, #a855f7);
    --color-glow: rgba(99, 102, 241, 0.15);
  }

  .dark {
    --color-bg: #0a0a1a;
    --color-bg-secondary: #0f0f23;
    --color-card: rgba(255, 255, 255, 0.03);
    --color-card-hover: rgba(255, 255, 255, 0.06);
    --color-text: #e0e7ff;
    --color-text-muted: #94a3b8;
    --color-text-accent: #a5b4fc;
    --color-border: rgba(255, 255, 255, 0.06);
    --color-border-hover: rgba(255, 255, 255, 0.12);
    --color-nav-bg: rgba(10, 10, 26, 0.8);
    --color-hero-gradient: transparent;
    --color-cta-bg: linear-gradient(135deg, #6366f1, #a855f7);
    --color-glow: rgba(99, 102, 241, 0.2);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    transition: background-color 0.3s ease, color 0.3s ease;
  }
}

@layer components {
  .gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent;
  }

  .gradient-bg {
    background: var(--color-cta-bg);
  }

  .card {
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    transition: all 0.3s ease;
  }

  .card:hover {
    background: var(--color-card-hover);
    border-color: var(--color-border-hover);
    transform: translateY(-4px);
  }

  .section-padding {
    @apply px-4 py-16 md:px-8 md:py-24 lg:px-16;
  }

  .container-max {
    @apply max-w-6xl mx-auto;
  }
}
```

- [ ] **Step 7: 创建 app/layout.tsx — 根布局**

```typescript
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { siteConfig } from '@/config/site'
import './globals.css'

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: 'website',
    locale: 'zh_CN',
    siteName: siteConfig.company.name,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteConfig.company.name,
              description: siteConfig.seo.description,
              url: 'https://www.hanzhangshouzhen.com',
              contactPoint: {
                '@type': 'ContactPoint',
                email: siteConfig.contact.email,
                telephone: siteConfig.contact.phone,
                contactType: 'customer service',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 8: 创建 app/page.tsx — 主页占位**

```typescript
export default function HomePage() {
  return (
    <main>
      <h1>含章收珍 — 即将上线</h1>
    </main>
  )
}
```

- [ ] **Step 9: 创建 .gitignore**

```
node_modules/
.next/
out/
.env
.env.local
.superpowers/
```

- [ ] **Step 10: 验证项目能启动**

```bash
npx next build
```

Expected: 构建成功，无错误

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind CSS and theme system"
```

---

### Task 2: 站点配置文件

**Files:**
- Create: `config/site.ts`

- [ ] **Step 1: 创建 config/site.ts**

```typescript
export interface Service {
  icon: string
  title: string
  desc: string
  featured: boolean
}

export interface Project {
  id: string
  name: string
  type: string
  category: string
  description: string
  image: string
  tech: string[]
}

export interface Stat {
  label: string
  value: number
  suffix: string
}

export interface Partner {
  name: string
  logo: string
}

export interface Testimonial {
  name: string
  title: string
  content: string
  avatar: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SiteConfig {
  company: {
    name: string
    shortName: string
    slogan: string
    tagline: string
    description: string
    icp: string
    founded: number
  }
  contact: {
    email: string
    phone: string
    wechat: string
    address: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  services: Service[]
  projects: Project[]
  stats: Stat[]
  partners: Partner[]
  testimonials: Testimonial[]
  nav: NavItem[]
  seo: {
    title: string
    description: string
    keywords: string
  }
  social: {
    github: string
    juejin: string
  }
}

export const siteConfig: SiteConfig = {
  company: {
    name: '上海含章收珍软件科技有限公司',
    shortName: '含章收珍',
    slogan: '用代码创造价值',
    tagline: '含章可贞，收珍聚宝 — 以技术匠心为客户创造数字化价值',
    description: '专注于企业管理平台 · 移动App · 小程序 · 企业官网定制开发',
    icp: '沪ICP备XXXXXXXX号',
    founded: 2024,
  },
  contact: {
    email: 'contact@hanzhangshouzhen.com',
    phone: '400-XXX-XXXX',
    wechat: 'hanzhangshouzhen',
    address: '上海市浦东新区',
  },
  hero: {
    badge: '🚀 专业软件开发团队',
    title: '用代码创造价值',
    subtitle: '专注于企业管理平台 · 移动App · 小程序 · 企业官网定制开发',
    primaryCta: '免费咨询',
    secondaryCta: '查看案例',
  },
  services: [
    {
      icon: '📱',
      title: '移动App开发',
      desc: 'iOS / Android 原生及跨平台开发，Flutter/React Native 技术栈，从UI设计到应用商店上架全流程服务',
      featured: true,
    },
    {
      icon: '🖥️',
      title: '管理平台开发',
      desc: '企业级 Web 管理系统，数据可视化大屏、流程自动化、权限管理、报表中心，提升运营效率',
      featured: true,
    },
    {
      icon: '📦',
      title: '小程序开发',
      desc: '微信生态全链路开发，从账号申请、功能开发到上线运营一站式服务，覆盖电商、预约、社区等场景',
      featured: false,
    },
    {
      icon: '🌐',
      title: '企业官网开发',
      desc: '品牌展示型网站设计与开发，SEO 优化、响应式设计、高性能加载，打造专业企业形象',
      featured: false,
    },
  ],
  projects: [
    {
      id: '1',
      name: '智慧门店管理平台',
      type: '管理平台',
      category: '管理平台',
      description: '为连锁零售企业打造的综合性门店管理系统，包含进销存、会员管理、数据分析、库存预警等功能模块，帮助企业实现数字化运营转型。',
      image: '/images/projects/project1.jpg',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    },
    {
      id: '2',
      name: 'FitLife 健身App',
      type: '移动App',
      category: '移动App',
      description: '面向健身爱好者的移动应用，支持AI训练计划定制、饮食营养记录、社区互动分享、运动数据追踪等功能。',
      image: '/images/projects/project2.jpg',
      tech: ['Flutter', 'Firebase', 'TensorFlow Lite', 'GraphQL'],
    },
  ],
  stats: [
    { label: '完成项目', value: 20, suffix: '+' },
    { label: '服务客户', value: 15, suffix: '+' },
    { label: '技术团队', value: 10, suffix: '人+' },
    { label: '行业经验', value: 5, suffix: '年+' },
  ],
  partners: [
    { name: '腾讯云', logo: '/images/partners/tencent.png' },
    { name: '阿里云', logo: '/images/partners/alibaba.png' },
    { name: '华为云', logo: '/images/partners/huawei.png' },
    { name: 'AWS', logo: '/images/partners/aws.png' },
  ],
  testimonials: [
    {
      name: '张总',
      title: '某连锁零售企业 CIO',
      content: '含章收珍团队为我们的门店管理系统提供了优质的技术方案，项目交付准时，售后响应及时，非常推荐！',
      avatar: '/images/avatars/avatar1.jpg',
    },
    {
      name: '李总',
      title: '某互联网公司 CEO',
      content: '从零到一帮我们搭建了移动App，技术能力和沟通效率都很出色，已经是我们的长期技术合作伙伴。',
      avatar: '/images/avatars/avatar2.jpg',
    },
  ],
  nav: [
    { label: '首页', href: '#hero' },
    { label: '服务', href: '#services' },
    { label: '案例', href: '#projects' },
    { label: '关于', href: '#about' },
    { label: '联系', href: '#contact' },
  ],
  seo: {
    title: '上海含章收珍软件科技 | 专业软件开发定制服务',
    description: '上海含章收珍软件科技有限公司，专注企业管理平台、移动App、小程序、企业官网定制开发，提供全方位软件解决方案。',
    keywords: '软件开发,小程序开发,移动App开发,企业管理平台,上海软件公司,定制开发',
  },
  social: {
    github: 'https://github.com/hanzhangshouzhen',
    juejin: '',
  },
}
```

- [ ] **Step 2: 验证 TypeScript 编译**

```bash
npx tsc --noEmit
```

Expected: 无类型错误

- [ ] **Step 3: Commit**

```bash
git add config/site.ts
git commit -m "feat: add site configuration with mock data"
```

---

### Task 3: 通用 UI 组件 + 动画封装

**Files:**
- Create: `app/components/ui/SectionHeader.tsx`
- Create: `app/components/ui/AnimatedSection.tsx`
- Create: `app/components/ui/PlaceholderImage.tsx`

- [ ] **Step 1: 创建 SectionHeader 组件**

```typescript
// app/components/ui/SectionHeader.tsx
'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 md:mb-16"
    >
      <span className="inline-block text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-3">
        {label}
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
```

- [ ] **Step 2: 创建 AnimatedSection 包装组件**

```typescript
// app/components/ui/AnimatedSection.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export default function AnimatedSection({ children, className = '', id, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className={`section-padding ${className}`}
    >
      <div className="container-max">
        {children}
      </div>
    </motion.section>
  )
}
```

- [ ] **Step 3: 创建 PlaceholderImage 组件（CSS 占位图）**

```typescript
// app/components/ui/PlaceholderImage.tsx
interface PlaceholderImageProps {
  text: string
  className?: string
  rounded?: boolean
}

export default function PlaceholderImage({ text, className = '', rounded = false }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10 border border-[var(--color-border)] ${rounded ? 'rounded-full' : 'rounded-lg'} ${className}`}
      style={{ minHeight: '48px' }}
    >
      <span className="text-xs md:text-sm" style={{ color: 'var(--color-text-muted)' }}>
        {text}
      </span>
    </div>
  )
}
```

- [ ] **Step 4: 验证编译**

```bash
npx tsc --noEmit
```

- [ ] **Step 5: Commit**

```bash
git add app/components/ui/
git commit -m "feat: add SectionHeader, AnimatedSection, and PlaceholderImage components"
```

---

### Task 4: 主题切换按钮

**Files:**
- Create: `app/components/ThemeToggle.tsx`

- [ ] **Step 1: 创建 ThemeToggle 组件**

```typescript
// app/components/ThemeToggle.tsx
'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-primary transition-colors duration-200"
      aria-label={theme === 'dark' ? '切换到明亮模式' : '切换到暗黑模式'}
    >
      <Sun className="w-4 h-4 absolute transition-all duration-300 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
      <Moon className="w-4 h-4 absolute transition-all duration-300 -rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/ThemeToggle.tsx
git commit -m "feat: add theme toggle button with Sun/Moon icon animation"
```

---

### Task 5: 导航栏 (Navbar)

**Files:**
- Create: `app/components/Navbar.tsx`

- [ ] **Step 1: 创建 Navbar 组件**

```typescript
// app/components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { siteConfig } from '@/config/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-nav-bg)] backdrop-blur-xl border-b border-[var(--color-border)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
            含
          </div>
          <span className="font-bold text-base hidden sm:block group-hover:text-primary transition-colors">
            {siteConfig.company.shortName}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
              className="px-3 py-2 text-sm rounded-lg transition-colors duration-200 hover:text-primary"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)]"
            aria-label="菜单"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-nav-bg)] backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className="px-3 py-2.5 text-sm rounded-lg transition-colors hover:text-primary hover:bg-[var(--color-card-hover)]"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/Navbar.tsx
git commit -m "feat: add responsive navbar with scroll awareness and mobile menu"
```

---

### Task 6: Hero 首屏

**Files:**
- Create: `app/components/Hero.tsx`

- [ ] **Step 1: 创建 Hero 组件**

```typescript
// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient background for light mode */}
        <div
          className="absolute inset-0 dark:opacity-0 transition-opacity duration-500"
          style={{ background: 'var(--color-hero-gradient)' }}
        />
        {/* Glow orbs for dark mode */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, var(--color-glow), transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1), transparent)' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium mb-6 border"
            style={{
              background: 'var(--color-card)',
              borderColor: 'rgba(99,102,241,0.3)',
              color: 'var(--color-text-accent)',
            }}
          >
            {siteConfig.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 gradient-text"
        >
          {siteConfig.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg mb-10 max-w-xl mx-auto"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {siteConfig.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-3 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}
          >
            {siteConfig.hero.primaryCta}
          </button>
          <button
            onClick={() => handleScroll('#projects')}
            className="px-8 py-3 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105 flex items-center gap-2"
            style={{
              borderColor: 'var(--color-border-hover)',
              color: 'var(--color-text)',
            }}
          >
            {siteConfig.hero.secondaryCta}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: 'var(--color-border-hover)' }}
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/Hero.tsx
git commit -m "feat: add hero section with gradient text, glow effects, and scroll indicator"
```

---

### Task 7: 服务展示 (Services)

**Files:**
- Create: `app/components/Services.tsx`

- [ ] **Step 1: 创建 Services 组件**

```typescript
// app/components/Services.tsx
'use client'

import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { siteConfig } from '@/config/site'

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-max">
        <SectionHeader
          label="我们的服务"
          title="全方位软件解决方案"
          description="从移动端到管理后台，从微信生态到品牌官网，提供一站式技术解决方案"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card p-6 md:p-8 group cursor-default"
            >
              <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2">
                {service.title}
                {service.featured && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    核心服务
                  </span>
                )}
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/Services.tsx
git commit -m "feat: add services section with 4 service cards and featured labels"
```

---

### Task 8: 项目案例 (Projects)

**Files:**
- Create: `app/components/Projects.tsx`

- [ ] **Step 1: 创建 Projects 组件**

```typescript
// app/components/Projects.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import PlaceholderImage from './ui/PlaceholderImage'
import { siteConfig } from '@/config/site'

const allCategories = ['全部', ...Array.from(new Set(siteConfig.projects.map((p) => p.category)))]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('全部')

  const filteredProjects = activeCategory === '全部'
    ? siteConfig.projects
    : siteConfig.projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="精选案例"
          title="我们的作品"
          description="每一个项目都是用心打磨的成果"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'border border-[var(--color-border)] hover:border-primary hover:text-primary'
              }`}
              style={activeCategory !== cat ? { color: 'var(--color-text-muted)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <PlaceholderImage
                  text={project.name}
                  className="h-48 md:h-56 rounded-none"
                />
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md font-mono"
                        style={{
                          background: 'var(--color-card-hover)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/Projects.tsx
git commit -m "feat: add projects section with category filter and tech tags"
```

---

### Task 9: 关于我们 (About)

**Files:**
- Create: `app/components/About.tsx`

- [ ] **Step 1: 创建 About 组件**

```typescript
// app/components/About.tsx
'use client'

import { motion } from 'framer-motion'
import { Code2, Users, Shield, Zap } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { siteConfig } from '@/config/site'

const advantages = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: '技术实力',
    desc: '全栈技术团队，覆盖前端、后端、移动端、AI 等多个领域，紧跟技术前沿',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: '项目管理',
    desc: '敏捷开发流程，透明化项目进度管理，定期沟通确保需求精准落地',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: '售后保障',
    desc: '项目交付后提供技术支持和维护服务，及时响应问题，保障系统稳定运行',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: '高效交付',
    desc: '成熟的开发框架和组件库积累，快速启动项目，缩短交付周期',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-max">
        <SectionHeader
          label="关于我们"
          title={siteConfig.company.name}
          description={siteConfig.company.tagline}
        />

        {/* Brand story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            「含章」出自《周易》"含章可贞"，意为内含美质、坚守正道；
            「收珍」寓意汇聚精华、珍藏价值。
            我们致力于以技术匠心为客户创造数字化价值，让每一行代码都承载品质与信赖。
            公司总部位于上海，拥有经验丰富的全栈开发团队，已成功交付{siteConfig.stats[0].value}+个项目，
            服务覆盖零售、健身、教育、金融等多个行业领域。
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card p-5 md:p-6 text-center group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-semibold mb-1.5 text-sm md:text-base">{item.title}</h4>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/About.tsx
git commit -m "feat: add about section with brand story and advantages grid"
```

---

### Task 10: 数据统计 + 合作伙伴 + 客户评价

**Files:**
- Create: `app/components/Stats.tsx`
- Create: `app/components/Testimonials.tsx`

- [ ] **Step 1: 创建 Stats 组件（数字滚动）**

```typescript
// app/components/Stats.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text mb-1">
        {count}{suffix}
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {siteConfig.stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-center mt-1" style={{ color: 'var(--color-text-muted)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: 创建 Testimonials 组件（评价 + 合作伙伴）**

```typescript
// app/components/Testimonials.tsx
'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import PlaceholderImage from './ui/PlaceholderImage'
import { siteConfig } from '@/config/site'

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-max">
        <SectionHeader
          label="客户评价"
          title="他们信任我们"
          description="客户的认可是我们最大的动力"
        />

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {siteConfig.testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card p-6 md:p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'var(--color-text)' }}>
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <PlaceholderImage text={t.name[0]} rounded className="w-10 h-10" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm font-medium mb-6" style={{ color: 'var(--color-text-muted)' }}>
            技术合作伙伴
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {siteConfig.partners.map((partner) => (
              <div
                key={partner.name}
                className="text-sm font-semibold opacity-40 hover:opacity-70 transition-opacity cursor-default"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Stats.tsx app/components/Testimonials.tsx
git commit -m "feat: add stats counter and testimonials with partner logos"
```

---

### Task 11: 联系 CTA + 页脚

**Files:**
- Create: `app/components/Contact.tsx`
- Create: `app/components/Footer.tsx`

- [ ] **Step 1: 创建 Contact 组件**

```typescript
// app/components/Contact.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission — just show success message
    setSubmitted(true)
    setForm({ name: '', contact: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="card overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: CTA text + contact info */}
            <div className="p-8 md:p-12 gradient-bg text-white flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                准备好开始您的项目了吗？
              </h2>
              <p className="text-white/80 text-sm md:text-base mb-8">
                告诉我们您的需求，我们将在 24 小时内与您联系，提供免费的技术咨询和方案建议。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/70" />
                  <span className="text-sm">{siteConfig.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/70" />
                  <span className="text-sm">{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-white/70" />
                  <span className="text-sm">微信：{siteConfig.contact.wechat}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white/70" />
                  <span className="text-sm">{siteConfig.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                    您的姓名
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="请输入您的姓名"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors duration-200 focus:outline-none focus:border-primary"
                    style={{
                      background: 'var(--color-card)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                    联系方式
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="手机号 / 微信 / 邮箱"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors duration-200 focus:outline-none focus:border-primary"
                    style={{
                      background: 'var(--color-card)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                    需求描述
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="请简要描述您的项目需求..."
                    className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors duration-200 focus:outline-none focus:border-primary resize-none"
                    style={{
                      background: 'var(--color-card)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                    submitted ? 'bg-green-500' : 'gradient-bg hover:opacity-90'
                  }`}
                >
                  {submitted ? (
                    <>✓ 已发送</>
                  ) : (
                    <><Send className="w-4 h-4" /> 发送需求</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: 创建 Footer 组件**

```typescript
// app/components/Footer.tsx
'use client'

import { Github } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-max px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                含
              </div>
              <span className="font-bold">{siteConfig.company.shortName}</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              {siteConfig.company.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">快速链接</h4>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors hover:text-primary"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-semibold text-sm mb-3">联系我们</h4>
            <div className="space-y-1.5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.address}</p>
            </div>
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-sm transition-colors hover:text-primary"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
        >
          <p>© {currentYear} {siteConfig.company.name}. All rights reserved.</p>
          <p>{siteConfig.company.icp}</p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Contact.tsx app/components/Footer.tsx
git commit -m "feat: add contact form with CTA and footer with sitemap links"
```

---

### Task 12: 组装主页

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`（如有需要）

- [ ] **Step 1: 更新 app/page.tsx 组装所有板块**

```typescript
// app/page.tsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: 验证构建**

```bash
npx next build
```

Expected: 构建成功，无错误。注意输出的页面大小和首次加载 JS 体积。

- [ ] **Step 3: 在本地启动开发服务器验证**

```bash
npx next dev
```

打开 http://localhost:3000 检查：
- 暗黑模式默认显示正常
- 主题切换按钮工作正常
- 所有 8 个板块可见
- 移动端汉堡菜单正常
- 锚点导航跳转正常
- 滚动动画触发正常
- 联系表单交互正常

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble all sections into the homepage"
```

---

### Task 13: SEO 优化收尾

**Files:**
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`

- [ ] **Step 1: 创建 robots.ts**

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  }
}
```

- [ ] **Step 2: 创建 sitemap.ts**

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hanzhangshouzhen.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

- [ ] **Step 3: 验证最终构建**

```bash
npx next build
```

Expected: 构建成功，确认 .next 目录包含所有优化输出

- [ ] **Step 4: Commit**

```bash
git add app/robots.ts app/sitemap.ts
git commit -m "feat: add robots.txt and sitemap.xml for SEO"
```

---

## 验证清单

全部任务完成后，逐项确认：

- [ ] `npx next build` 无错误
- [ ] 暗黑模式默认显示，所有板块颜色正确
- [ ] 点击主题切换按钮，主题正确切换
- [ ] 移动端（< 640px）布局正常，汉堡菜单可用
- [ ] 平板端（640-1024px）2 列布局正常
- [ ] 桌面端（> 1024px）完整布局正常
- [ ] 导航锚点跳转平滑
- [ ] Hero 渐变文字、光晕效果正常
- [ ] 服务卡片悬浮效果
- [ ] 项目筛选 Tab 工作正常
- [ ] 统计数字滚动动画正常
- [ ] 联系表单输入正常
- [ ] 页脚内容完整
- [ ] 修改 `config/site.ts` 中的内容后页面自动更新
