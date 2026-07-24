'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-primary transition-colors duration-200"
      aria-label={theme === 'dark' ? '切换到明亮模式' : '切换到暗黑模式'}
    >
      <Sun className="w-4 h-4 absolute transition-all duration-300 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
      <Moon className="w-4 h-4 absolute transition-all duration-300 -rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  )
}
