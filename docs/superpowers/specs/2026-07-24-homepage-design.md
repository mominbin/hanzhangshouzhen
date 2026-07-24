# 上海含章收珍软件科技 — 公司主页设计文档

**日期:** 2026-07-24
**状态:** 已确认
**版本:** v1.0

---

## 1. 项目概述

为「上海含章收珍软件科技有限公司」创建一个现代化的公司主页。公司主营业务为承接软件开发任务：企业管理平台、移动App、小程序、企业官网。

核心目标：
- 展示公司技术实力和服务能力
- 优化 SEO，提升搜索引擎可见度
- 支持暗黑/明亮双模式切换
- 美观时尚，参考 sjolt.ai 的设计风格

## 2. 设计系统

### 2.1 色彩方案

| 用途 | 暗黑模式 | 明亮模式 |
|------|----------|----------|
| 主色 | `#6366f1` → `#a855f7`（靛蓝-紫罗兰渐变） | 同 |
| 背景 | `#0a0a1a`（深空蓝黑） | `#ffffff` / `#f8fafc`（浅灰白） |
| 卡片背景 | `rgba(255,255,255,0.03)` | `#ffffff` + `border #e5e7eb` |
| 正文 | `#e0e7ff` | `#1e1b4b` |
| 辅助文字 | `#94a3b8` | `#6b7280` |
| 强调文字 | `#a5b4fc` | `#6366f1` |
| 边框 | `rgba(255,255,255,0.06)` | `#f1f5f9` / `#e5e7eb` |

### 2.2 字体

- 中文：PingFang SC, Microsoft YaHei, sans-serif
- 英文：Inter, system-ui, sans-serif
- 标题字重：700-800
- 正文字重：400
- 使用 CSS 变量实现主题切换

### 2.3 图标

- 服务板块使用 Emoji 或 SVG 图标
- 后续可替换为自定义图标库（Lucide Icons）

### 2.4 动效

- 滚动渐入动画（Framer Motion `useInView`）
- 导航栏滚动背景渐显
- 服务卡片悬浮缩放 + 阴影
- 数字滚动计数效果（统计板块）
- Hero 区域粒子/光晕背景动画
- 平滑锚点滚动

## 3. 页面结构

单页滚动设计，从上到下共 8 个板块：

### 3.1 导航栏 (Navbar)
- **固定顶部**，滚动后背景由透明变为实色 + 毛玻璃效果
- Logo（左）：渐变方块图标 + "含章收珍" 文字
- 菜单（右）：首页 / 服务 / 案例 / 关于 / 联系
- 主题切换按钮（最右）：太阳/月亮图标
- 移动端：汉堡菜单折叠

### 3.2 Hero 首屏
- 全宽大标题：「用代码创造价值」（渐变文字）
- 副标题：「专注于企业管理平台 · 移动App · 小程序 · 企业官网定制开发」
- 标签：「🚀 专业软件开发团队」
- 双 CTA 按钮：
  - 主按钮（渐变紫蓝）：「免费咨询」
  - 次按钮（描边）：「查看案例 →」
- 背景：暗色模式有光晕/粒子效果，亮色模式有柔和渐变
- 高度：视口 80-90%

### 3.3 服务展示 (Services)
- 板块标题：「全方位软件解决方案」
- 4 个服务卡片（2x2 网格，移动端纵向排列）：
  1. 📱 **移动App开发** — iOS / Android 原生及跨平台
  2. 🖥️ **管理平台开发** — 企业级 Web 管理系统
  3. 📦 **小程序开发** — 微信生态全链路
  4. 🌐 **企业官网开发** — 品牌展示型网站
- 每张卡片包含：图标 + 标题 + 简短描述
- 悬浮效果：卡片上移 + 边框变亮

### 3.4 项目案例 (Projects)
- 板块标题：「精选案例」
- 展示 1-2 个精选项目（卡片式）
- 每张卡片包含：项目截图、名称、类型标签、简介
- 如暂无实际项目，可用"能力展示"替代，描述可交付的项目类型
- 支持按类型筛选（全部 / 管理平台 / 移动App / 小程序 / 官网）

### 3.5 关于我们 (About)
- 公司全称展示
- 品牌 Slogan：「含章可贞，收珍聚宝 — 以技术匠心为客户创造数字化价值」
- 品牌故事段落（可后续补充详细内容）
- 团队优势：技术实力、项目管理、售后保障

### 3.6 客户评价 / 合作伙伴 (Testimonials)
- 如无实际评价，先展示合作伙伴或技术栈 Logo 墙
- 或展示数据统计：项目数量、服务客户、成立年限等数字滚动动画
- 后续可替换为真实客户评价

### 3.7 联系 CTA (Contact)
- 渐变背景卡片（全宽）
- 标题：「准备好开始您的项目了吗？」
- 副标题：引导用户联系咨询
- CTA 按钮 + 联系方式（邮箱/电话）
- 可嵌入简易联系表单（姓名、联系方式、需求描述）

### 3.8 页脚 (Footer)
- 版权信息：© 2026 上海含章收珍软件科技有限公司
- ICP 备案号占位
- 快速链接：首页 / 服务 / 案例 / 关于 / 联系
- 社交媒体链接占位（微信、GitHub 等）

## 4. SEO 策略

### 4.1 元数据
- **Title**: 上海含章收珍软件科技 | 专业软件开发定制服务
- **Description**: 上海含章收珍软件科技有限公司，专注企业管理平台、移动App、小程序、企业官网定制开发，提供全方位软件解决方案。
- **Keywords**: 软件开发, 小程序开发, 移动App开发, 企业管理平台, 上海软件公司, 定制开发

### 4.2 结构化数据
- Organization Schema (JSON-LD)
- BreadcrumbList Schema
- SoftwareApplication Schema（案例展示页）

### 4.3 技术实现
- Next.js SSR/SSG 渲染
- 语义化 HTML5 标签（`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`）
- `alt` 属性覆盖所有图片
- Open Graph 标签（社交分享）
- sitemap.xml 自动生成
- robots.txt

## 5. 技术架构

### 5.1 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 14 (App Router) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS 3.4 |
| 主题切换 | next-themes |
| 动效 | Framer Motion |
| 图标 | Lucide React |
| 部署 | Vercel（绑定自定义域名） |
| 分析 | Vercel Analytics（可选） |

### 5.2 项目结构

```
homePage/
├── app/
│   ├── layout.tsx          # 根布局（metadata + 主题Provider）
│   ├── page.tsx             # 主页
│   ├── globals.css          # 全局样式 + CSS变量
│   └── components/
│       ├── Navbar.tsx        # 导航栏
│       ├── Hero.tsx          # 首屏
│       ├── Services.tsx      # 服务展示
│       ├── Projects.tsx      # 项目案例
│       ├── About.tsx         # 关于我们
│       ├── Testimonials.tsx  # 客户评价/数据
│       ├── Contact.tsx       # 联系CTA
│       ├── Footer.tsx        # 页脚
│       ├── ThemeToggle.tsx   # 主题切换按钮
│       └── ui/               # 通用UI组件
├── public/
│   └── images/               # 静态图片
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### 5.3 响应式断点

- Mobile: < 640px (单列布局)
- Tablet: 640px - 1024px (2列网格)
- Desktop: > 1024px (完整布局，最大宽度 1200px)

## 6. 非功能需求

- **性能**: Lighthouse 评分 > 90，首次内容绘制 < 1.5s
- **可访问性**: WCAG 2.1 AA 级别
- **SEO**: 全页面 SSR，结构化数据完整
- **国际化**: 当前仅中文，架构预留 i18n 扩展空间
- **可维护性**: 组件化、TypeScript 类型覆盖

## 7. 内容配置策略

所有内容集中管理在 `config/site.ts` 配置文件中，便于后续修改。初始版本使用 Mock 数据。

### 7.1 配置文件结构

```typescript
// config/site.ts
export const siteConfig = {
  company: {
    name: '上海含章收珍软件科技有限公司',
    shortName: '含章收珍',
    slogan: '用代码创造价值',
    tagline: '含章可贞，收珍聚宝 — 以技术匠心为客户创造数字化价值',
    description: '专注于企业管理平台 · 移动App · 小程序 · 企业官网定制开发',
    logo: '/images/logo.svg',           // Mock: 渐变方块占位
    icp: '沪ICP备XXXXXXXX号',           // Mock
    founded: 2024,                      // Mock
  },
  contact: {
    email: 'contact@hanzhangshouzhen.com',  // Mock
    phone: '400-XXX-XXXX',                   // Mock
    wechat: 'hanzhangshouzhen',              // Mock
    address: '上海市浦东新区',                // Mock
  },
  hero: {
    badge: '🚀 专业软件开发团队',
    title: '用代码创造价值',
    subtitle: '专注于企业管理平台 · 移动App · 小程序 · 企业官网定制开发',
    primaryCta: '免费咨询',
    secondaryCta: '查看案例',
  },
  services: [
    { icon: '📱', title: '移动App开发', desc: 'iOS / Android 原生及跨平台开发，Flutter/React Native 技术栈', featured: true },
    { icon: '🖥️', title: '管理平台开发', desc: '企业级 Web 管理系统，数据可视化、流程自动化、权限管理', featured: true },
    { icon: '📦', title: '小程序开发', desc: '微信生态全链路开发，从账号申请到上线运营一站式服务', featured: false },
    { icon: '🌐', title: '企业官网开发', desc: '品牌展示型网站，SEO 优化、响应式设计、高性能加载', featured: false },
  ],
  projects: [
    {
      id: '1',
      name: '智慧门店管理平台',           // Mock
      type: '管理平台',
      category: '管理平台',
      description: '为连锁零售企业打造的综合性门店管理系统，包含进销存、会员管理、数据分析等功能模块',
      image: '/images/projects/project1.jpg',  // Mock: 占位图
      tech: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      id: '2',
      name: 'FitLife 健身App',             // Mock
      type: '移动App',
      category: '移动App',
      description: '面向健身爱好者的移动应用，支持训练计划定制、饮食记录、社区互动等功能',
      image: '/images/projects/project2.jpg',  // Mock: 占位图
      tech: ['Flutter', 'Firebase', 'AI'],
    },
  ],
  stats: [
    { label: '完成项目', value: 20, suffix: '+' },    // Mock
    { label: '服务客户', value: 15, suffix: '+' },     // Mock
    { label: '技术团队', value: 10, suffix: '人+' },   // Mock
    { label: '行业经验', value: 5, suffix: '年+' },    // Mock
  ],
  partners: [
    { name: '腾讯云', logo: '/images/partners/tencent.png' },    // Mock
    { name: '阿里云', logo: '/images/partners/alibaba.png' },    // Mock
    { name: '华为云', logo: '/images/partners/huawei.png' },     // Mock
    { name: 'AWS', logo: '/images/partners/aws.png' },           // Mock
  ],
  testimonials: [
    {
      name: '张总',
      title: '某连锁零售企业 CIO',
      content: '含章收珍团队为我们的门店管理系统提供了优质的技术方案，项目交付准时，售后响应及时，非常推荐！',
      avatar: '/images/avatars/avatar1.jpg',  // Mock
    },
    {
      name: '李总',
      title: '某互联网公司 CEO',
      content: '从零到一帮我们搭建了移动App，技术能力和沟通效率都很出色。',
      avatar: '/images/avatars/avatar2.jpg',  // Mock
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
    keywords: '软件开发, 小程序开发, 移动App开发, 企业管理平台, 上海软件公司, 定制开发',
  },
  social: {
    github: 'https://github.com/hanzhangshouzhen',   // Mock
    juejin: '',                                       // 待补充
  },
}
```

### 7.2 Mock 图片策略

- Logo：CSS 渐变方块占位（无需实际图片文件）
- 项目截图：CSS 渐变占位图（带文字），后续替换为真实截图
- 头像：CSS 圆形渐变占位
- 合作伙伴 Logo：纯文字展示 + 简单图标，无需图片文件

## 8. 待定事项（后续替换为真实数据）

- [ ] 编辑 `config/site.ts` 替换 Mock 数据
- [ ] 替换项目截图为真实图片
- [ ] 更新 ICP 备案号
- [ ] 配置自定义域名
