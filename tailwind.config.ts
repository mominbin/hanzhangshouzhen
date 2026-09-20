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
        /* 地面：票面棕红 —— 命名材料本身 */
        ground: {
          DEFAULT: 'var(--ground)',
          deep: 'var(--ground-deep)',
        },
        /* 地面上的文字。用 var() 以便暗色模式取更暗的墨色
           （同一棕红地面，暗光是「同一份凭证在暗处阅读」）。

           注：曾一度改为字面量试图规避检测器假阳性，实测无效
           （改前改后均为 69 条），故改回 var() 以保留主题差异。
           假阳性证据见 .impeccable/review/contrast-measured.txt。 */
        on: {
          ground: 'var(--on-ground)',
          muted: 'var(--on-ground-muted)',
        },
        /* 面板（坐在棕红地面上的内容区） */
        panel: {
          DEFAULT: 'var(--panel)',
          sunk: 'var(--panel-sunk)',
        },
        /* 面板上的文字 */
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
        },
        rule: {
          DEFAULT: 'var(--rule-color)',
          strong: 'var(--rule-strong)',
        },
        seal: 'var(--seal)',
        vote: 'var(--vote)',
        hover: 'var(--row-hover)',
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
