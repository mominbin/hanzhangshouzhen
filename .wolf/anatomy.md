# Project Anatomy

## Directory Structure
```
/
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles, CSS variables, utility classes
│   ├── layout.tsx          # Root layout with SEO, JSON-LD, Inter font
│   └── page.tsx            # Home page (placeholder)
├── .wolf/                  # Project intelligence
├── docs/                   # Documentation, specs, plans
├── .superpowers/           # Superpowers configuration
├── next.config.js          # Next.js config
├── tailwind.config.ts      # Tailwind CSS config with custom theme
├── postcss.config.js       # PostCSS with Tailwind + Autoprefixer
├── tsconfig.json           # TypeScript config with @/* paths
├── package.json            # Dependencies and scripts
└── .gitignore
```

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4 with dark mode (class strategy)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes

## Theme System
- Light/dark mode via CSS variables on `:root` and `.dark`
- Custom color palette: primary (blue), accent (cyan), dark (slate), light (slate)
- Utility classes: `.gradient-text`, `.gradient-bg`, `.card`, `.section-padding`, `.container-max`
- Animations: `float` (yoyo translateY 0 -> -20 -> 0), `glow` (opacity 0.5 -> 1)
- Font stack: Inter (Google Fonts) + PingFang SC + Microsoft YaHei
