# Cerebrum

## Project Identity
- Project: hanzhang-homepage (company homepage for 上海含章收珍软件科技有限公司)
- Path: D:\workspace\homePage

## Preferences
- Use `@/*` path aliases for imports
- Use CSS variables for theming (light + dark)
- Chinese-first: html lang="zh-CN", Chinese SEO content

## Do-Not-Repeat
- Never import from relative paths that could use `@/*` alias instead
- Never use `any` type — strict mode is on
- Never skip npm install before build verification
- Never commit without running the build first

## Learnings
- Next.js 14.2 App Router with Tailwind CSS project scaffolded successfully
- Tailwind config uses `content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}']` to scan source files
- The `.gitignore` includes `.superpowers/` to keep that directory out of version control
