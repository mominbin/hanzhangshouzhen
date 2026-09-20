'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

/**
 * 明暗切换
 *
 * 控件坐在棕红地面上，所以取纸白系。
 * 分段式，像表单上的选择项；零圆角、零阴影，靠底色标记当前态。
 * 不用图标：控件用文字直说自己的动作（craft-floor：controls name their action）。
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <span className="inline-block h-[18px] w-[76px]" aria-hidden="true" />

  const isDark = resolvedTheme === 'dark'

  return (
    <span
      role="group"
      aria-label="颜色模式"
      className="inline-flex items-stretch border border-on-ground/50 font-mono text-[11px] leading-none"
    >
      {(['light', 'dark'] as const).map((mode) => {
        const active = (mode === 'dark') === isDark
        return (
          <button
            key={mode}
            type="button"
            onClick={() => setTheme(mode)}
            aria-pressed={active}
            className={
              'px-2 py-[5px] transition-colors ' +
              (active
                ? 'bg-on-ground text-ground'
                : 'text-on-muted hover:text-on-ground')
            }
          >
            {mode === 'light' ? '明' : '暗'}
          </button>
        )
      })}
    </span>
  )
}
