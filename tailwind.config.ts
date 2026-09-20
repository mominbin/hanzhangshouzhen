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
        paper: { DEFAULT: "var(--paper)", sunk: "var(--paper-sunk)" },
        band: {
          DEFAULT: "var(--band)",
          deep: "var(--band-deep)",
          on: "var(--on-band)",
          muted: "var(--on-band-muted)",
        },
        ink: { DEFAULT: "var(--ink)", muted: "var(--ink-muted)" },
        rule: { DEFAULT: "var(--rule-color)", strong: "var(--rule-strong)" },
        seal: "var(--seal)",
        vote: "var(--vote)",
        hover: "var(--row-hover)",
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      borderRadius: { none: '0' },
      boxShadow: { none: 'none' },
    },
  },
  plugins: [],
}

export default config
