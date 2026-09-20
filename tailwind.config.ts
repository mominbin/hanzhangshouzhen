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
        // 强调色走 CSS 变量通道，随主题切换（亮 #0F766E / 暗 #2DD4BF），
        // 并保留 bg-primary/10 这类透明度修饰符。
        primary: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          hover: 'rgb(var(--accent-hover-rgb) / <alpha-value>)',
        },
        // accent 与 primary 同族：原紫罗兰双色渐变是 AI 味来源，
        // 同族后 from-primary to-accent 变为同色，视觉上不再成"渐变"。
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          hover: 'rgb(var(--accent-hover-rgb) / <alpha-value>)',
        },
        dark: {
          bg: '#0C0C0E',
          card: '#161618',
          border: '#26262A',
          text: '#EDEDEF',
          muted: '#A1A1A6',
        },
        light: {
          bg: '#FAFAF8',
          card: '#FFFFFF',
          border: '#E3E2DD',
          text: '#1A1A1C',
          muted: '#5C5C61',
        },
      },
      fontFamily: {
        // 移除 'Geist'：无字体文件、无 @font-face、Google Fonts 不可达，
        // 是从未生效的死声明（检测器 overused-font 的误报来源）。
        sans: ['PingFang SC', 'HarmonyOS Sans SC', 'Microsoft YaHei', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        control: '6px',
        card: '10px',
      },
      // 移除 float / glow 关键帧：全项目无任何组件使用，且 glow 属 AI 味手法
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
}

export default config
