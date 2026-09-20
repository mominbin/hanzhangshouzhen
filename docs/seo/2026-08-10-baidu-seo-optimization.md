# 百度 SEO 优化 — 实施记录 & 待办清单

> 日期：2026-08-10  
> 站点：Cloudflare Pages (`*.pages.dev`)  
> 目标：百度搜索引擎为主，尽快被收录  
> 构建状态：✅ 通过（`npm run build` 无错误）

---

## 一、已完成：代码层面优化（10 项）

### 修改的文件

| # | 文件 | 改动 |
|---|------|------|
| 1 | `config/site.ts` | SEO 文本扩写，新增 `ogImage`、`baseUrl` 字段 |
| 2 | `app/layout.tsx` | metadata 完整扩展 + JSON-LD 三件套 + 百度验证 placeholder + 百度统计 placeholder + 移除 Google Fonts |
| 3 | `app/robots.ts` | 增加 Baiduspider crawl-delay:5 + sitemap URL 引用 |
| 4 | `app/sitemap.ts` | 使用 siteConfig.baseUrl 统一管理域名 |
| 5 | `app/components/Hero.tsx` | 2 个 CTA `<button>` → `<a>`（爬虫可遍历） |
| 6 | `app/not-found.tsx` | **新建** — 中文 404 页面 |
| 7 | `public/_headers` | **新建** — Cloudflare Pages 缓存策略 + 安全头 |
| 8 | `public/images/og-image.svg` | **新建** — OG 分享卡片 SVG 模板 |
| 9 | `.wolf/anatomy.md` | **更新** — 项目结构文档 |
| 10 | `.wolf/memory.md` | **更新** — 变更日志 |

### Metadata 现状
```
title:     上海含章收珍软件科技有限公司 - 企业管理平台 | 移动App | 小程序定制开发服务商  (35字)
desc:      上海含章收珍软件科技，专注企业管理平台、移动App、小程序、企业官网定制开发...
           ...提供从需求梳理、UI设计到开发上线、运维迭代的全流程软件解决方案...  (120字)
keywords:  软件开发,小程序开发,移动App开发,企业管理平台,企业官网定制,上海软件公司,
           Flutter开发,HarmonyOS开发
```

### JSON-LD 结构化数据
- **Organization** — 含 logo、address、sameAs
- **WebSite** — 含 SearchAction（站内搜索）
- **BreadcrumbList** — 首页面包屑

### HTTP 缓存策略（`public/_headers`）
```
/images/*        → Cache 1 年（immutable）
/_next/static/*  → Cache 1 年（immutable）
/*.html          → Cache 1 小时
全部             → X-Content-Type-Options, X-Frame-Options, Referrer-Policy
```

---

## 二、待办：你需要手动完成的（按优先级）

### 🔴 P0 — 阻塞性，必须做

#### 1. 修改 `baseUrl` 为实际域名
**文件：** `config/site.ts` 最后一行  
**当前值：** `https://www.hanzhangshouzhen.com`  
**改为：** 你的 Cloudflare Pages 实际 URL，如 `https://hanzhang.pages.dev`

> 这个值会被 sitemap.xml、canonical URL、JSON-LD 等多处引用，必须改成实际部署域名。

#### 2. 注册百度站长平台 + 验证站点
**地址：** https://ziyuan.baidu.com/

步骤：
1. 注册/登录百度站长平台
2. 添加站点（填写你的 pages.dev 域名）
3. 选择验证方式 → **HTML 标签验证**
4. 复制验证码（一串字符，如 `code-abc123def456`）
5. 打开 `app/layout.tsx`，搜索 `REPLACE_WITH_YOUR_VERIFICATION_CODE`，替换为你的验证码
6. 重新部署站点
7. 回到百度站长平台点击"验证"

#### 3. 提交 sitemap
站点验证通过后：
1. 百度站长平台 → 左侧菜单 → 数据引入 → Sitemap
2. 提交 URL：`https://你的域名.pages.dev/sitemap.xml`
3. 等待百度抓取（通常 1-3 天）

---

### 🟡 P1 — 建议尽快做

#### 4. 注册百度统计
**地址：** https://tongji.baidu.com/

步骤：
1. 注册/登录百度统计
2. 添加站点 → 获取统计代码 ID（如 `abc123def456789`）
3. 打开 `app/layout.tsx`，找到百度统计代码段（约第 80 行）
4. 取消注释 3 行代码，替换 `BAIDU_TONGJI_ID` 为你的 ID
5. 部署后即开始记录访问数据

#### 5. 生成 OG 社交分享图片
**文件：** `public/images/og-image.svg`（模板，社交平台不支持 SVG）

步骤：
1. 打开 `public/images/og-image.svg`（浏览器可直接打开）
2. 截图 1200×630 区域
3. 导出为 `public/images/og-image.png`
4. 部署后，微信/Facebook/Twitter 分享链接即可显示卡片图片

---

### 🟢 P2 — 有空再做

#### 6. 百度主动推送（加强收录）
部署后，可以通过 curl 主动推送 URL 给百度：

```bash
curl -H 'Content-Type:text/plain' --data-binary 'https://你的域名.pages.dev' \
  'http://data.zz.baidu.com/urls?site=你的域名.pages.dev&token=你的推送token'
```

> Token 在百度站长平台 → 数据引入 → 普通收录 → 推送接口 中获取

---

## 三、部署检查清单

部署前确认：

- [ ] `config/site.ts` → `baseUrl` 已改为实际域名
- [ ] `app/layout.tsx` → `baidu-site-verification` 已填入验证码
- [ ] `npm run build` 通过（0 错误）
- [ ] 部署到 Cloudflare Pages
- [ ] 访问 `https://你的域名.pages.dev/sitemap.xml` 确认能打开
- [ ] 访问 `https://你的域名.pages.dev/robots.txt` 确认能打开
- [ ] 百度站长平台 → 验证站点 → 提交 sitemap

---

## 四、收录时间线预估

| 阶段 | 预计时间 | 操作 |
|------|---------|------|
| 站点验证 | 当天 | 百度站长平台添加站点 + 验证 |
| 首页收录 | 1-3 天 | 提交 sitemap 后等待百度抓取 |
| 搜索出词 | 1-4 周 | 百度建立索引，逐步分配排名 |
| 排名稳定 | 1-3 个月 | 取决于站点质量 + 外链 + 更新频率 |

> ⚠️ `*.pages.dev` 域名在国内访问速度较慢，可能影响百度抓取频率和排名权重。  
> 如果未来预算允许，绑定自定义域名 + 国内 CDN 能显著改善。

---

## 五、相关文件速查

| 用途 | 文件路径 |
|------|---------|
| SEO 文本配置 | `config/site.ts` |
| 页面 metadata | `app/layout.tsx` |
| robots.txt | `app/robots.ts` |
| sitemap.xml | `app/sitemap.ts` |
| 缓存策略 | `public/_headers` |
| 404 页面 | `app/not-found.tsx` |
| OG 图片模板 | `public/images/og-image.svg` |
