# Project Anatomy — 上海含章收珍软件科技 公司主页

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4 + CSS custom properties (dark/light theme)
- **Theme:** next-themes (class strategy, dark default)
- **Animation:** Framer Motion
- **Icons:** Lucide React

## Directory Structure

```
homePage/
├── app/
│   ├── layout.tsx              # Root layout: metadata, JSON-LD, ThemeProvider
│   ├── page.tsx                # Homepage: assembles all sections
│   ├── globals.css             # CSS variables, utility classes, Tailwind directives
│   ├── robots.ts               # SEO: robots.txt generation
│   ├── sitemap.ts              # SEO: sitemap.xml generation
│   └── components/
│       ├── Navbar.tsx           # Fixed navbar + mobile menu + ThemeToggle
│       ├── Hero.tsx             # Full-viewport hero with gradient text
│       ├── Services.tsx         # 4 service cards grid
│       ├── Projects.tsx         # Project cards with category filter
│       ├── About.tsx            # Brand story + advantages grid
│       ├── Stats.tsx            # Animated counters
│       ├── Testimonials.tsx     # Reviews + partner logos
│       ├── Contact.tsx          # Contact form + CTA
│       ├── Footer.tsx           # Sitemap links + copyright
│       ├── ThemeToggle.tsx      # Sun/Moon animated toggle
│       └── ui/
│           ├── SectionHeader.tsx     # Animated section title
│           ├── AnimatedSection.tsx   # Scroll-animated section wrapper
│           └── PlaceholderImage.tsx  # CSS gradient placeholder
├── config/
│   └── site.ts                 # ALL content managed here (mock data)
├── tailwind.config.ts          # Colors (indigo/purple), fonts, animations
├── next.config.js              # images.unoptimized for static export
├── tsconfig.json               # strict mode, @/* path alias
└── package.json
```

## Page Sections
1. **Navbar** — Fixed, glass-morphism on scroll, mobile hamburger
2. **Hero** — Gradient title, glow orbs, dual CTAs
3. **Services** — 4 cards: App / Platform / Mini-program / Website
4. **Projects** — 2 mock projects with category filter
5. **About** — Brand story (周易) + 4 advantage cards
6. **Stats** — 4 animated counters (scroll-triggered)
7. **Testimonials** — 2 reviews + 4 partner names
8. **Contact** — Split layout: gradient CTA + form
9. **Footer** — Brand, links, contact, ICP + copyright

## Color System
- Primary: #6366f1 (indigo) → #a855f7 (purple) gradient
- Dark bg: #0a0a1a | Light bg: #ffffff
- CSS variables in globals.css synced with tailwind.config.ts

## Key Patterns
- All content in config/site.ts — edit one file to update everything
- CSS custom properties for theme-aware styling
- 'use client' on components with hooks
- Framer Motion whileInView for scroll animations
- PlaceholderImage for mock visuals (no image files needed)
