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
        sans: ['Geist', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}

export default config
