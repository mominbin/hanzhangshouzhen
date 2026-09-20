'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * 进入视口触发一次。
 *
 * 用于票据世界的两处「落章」：核销章与监制章。
 * 系统开启减弱动态效果时直接返回 true —— 印章是内容，不能因为不播动画就不显示。
 *
 * 用 IntersectionObserver 而非动效库：两个触发点不值得为此背一个依赖。
 */
export function useInView<T extends HTMLElement>(rootMargin = '-15% 0px -15% 0px') {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { rootMargin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return { ref, seen }
}
