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
        paper: 'var(--paper)',
        'paper-sunk': 'var(--paper-sunk)',
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
          faint: 'var(--ink-faint)',
        },
        band: {
          DEFAULT: 'var(--band)',
          deep: 'var(--band-deep)',
          on: 'var(--on-band)',
          'on-muted': 'var(--on-band-muted)',
        },
        vote: 'var(--blue)',          // 抵扣联蓝
        seal: 'var(--seal)',          // 监制章红 —— 全站唯一高饱和
        rule: {
          DEFAULT: 'var(--rule-color)',
          strong: 'var(--rule-strong)',
        },
        hover: 'var(--row-hover)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      // 票据世界零圆角
      borderRadius: { none: '0' },
      // 票据世界零阴影
      boxShadow: { none: 'none' },
    },
  },
  plugins: [],
}

export default config
