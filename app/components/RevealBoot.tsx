'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    __revealBoot?: () => void
  }
}

/**
 * 揭示动效的就绪信号。
 *
 * `<head>` 的内联脚本会设置 .js-reveal（让首屏以下初始隐藏）
 * 并起一个 1.8s 的失效保护计时器。本组件挂载即撤销该计时器，
 * 表示应用已就绪，滚动揭示的观察器马上会接管。
 *
 * 若包加载失败（404、解析错误、网络中断），本组件永不挂载，
 * 计时器到点撤下 .js-reveal —— 内容全部可见，不会出现首屏以下全空。
 *
 * 仅靠 @media (scripting: none) 不够：它覆盖不了
 * 「脚本可解析但执行失败」这一类。
 */
export default function RevealBoot() {
  useEffect(() => {
    window.__revealBoot?.()
  }, [])
  return null
}
