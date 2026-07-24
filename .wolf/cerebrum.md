# Cerebrum — Preferences, Learnings, Do-Not-Repeat

## Preferences
- 用户偏好暗黑+明亮双模式，默认暗黑
- 用户偏好集中式内容管理（config/site.ts），方便后续修改
- 所有内容先 Mock，后续替换真实数据
- 使用紫蓝科技色系（indigo #6366f1 + purple #a855f7）
- 完整企业版布局（8+板块）
- 管理平台 + 移动App 为主力服务
- 参考 sjolt.ai 的现代简约设计风格

## Learnings
- Next.js 14 App Router + next-themes 配合 Tailwind darkMode: 'class'
- CSS 变量 + Tailwind 自定义颜色需保持一致
- ESLint 10 与 Next.js 14 不兼容，需使用 ESLint 8
- react/no-unescaped-entities: JSX 中的中文引号需转义为 HTML entities

## Do-Not-Repeat
- 不要在 globals.css 和 tailwind.config.ts 中定义不一致的颜色值
- 不要在不检查 ESLint 兼容性的情况下升级 ESLint 版本
- 不要在 JSX 中直接使用中文引号 ""，使用 &ldquo; &rdquo;
