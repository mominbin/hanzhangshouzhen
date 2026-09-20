'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/config/site'

/**
 * 已交付 · 联次
 *
 * 两个真实案例是票据的两张联次。进入视口时核销章落下 ——
 * 这是全站唯一一个 authored moment，其余内容默认可见，不做统一入场淡入。
 *
 * 动效语法取自这个世界本身：盖章的动作是压下、微旋、墨点散开。
 * 用 IntersectionObserver 而非 Framer Motion —— 一个观察器足够，不必为此背上整个动效库。
 */
function useStamped<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [stamped, setStamped] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // 系统开启减弱动态效果时直接落章，不播动画
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStamped(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStamped(true)
          io.disconnect()
        }
      },
      { rootMargin: '-15% 0px -15% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, stamped }
}

function Entry({ p, index }: { p: (typeof siteConfig.projects)[number]; index: number }) {
  const { ref, stamped } = useStamped<HTMLLIElement>()

  return (
    <li ref={ref} className="rule-b grid grid-cols-1 gap-y-5 py-6 md:grid-cols-[76px_1fr_1.5fr_auto] md:items-start md:gap-x-8 md:py-7">
      <div>
        <span className="field-label md:mb-0">联次</span>
        <span className="font-mono text-[20px] text-ink">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div>
        <span className="field-label">项目名称</span>
        <h3 className="font-display text-[clamp(1.05rem,2vw,1.3rem)] leading-snug text-ink">
          {p.name}
        </h3>
        <p className="mt-1 font-body text-[13px] text-ink-muted">{p.type}</p>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {p.tech.map((t) => (
            <li key={t} className="font-mono text-[11px] text-ink-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span className="field-label">交付内容</span>
        <p className="max-w-[54ch] text-[14px] leading-relaxed text-ink-muted">{p.description}</p>
      </div>

      <div className="flex flex-col items-start gap-4 md:items-end md:gap-3">
        {/* 附件：真实产品截图。限高而非限宽 —— 竖版截图否则会把行撑到 370px，
            与契约「票面密度高」相悖。
            移动端纵向堆叠：图片与印章并排会超出 375 视口（印章旋转后包围盒更宽）。 */}
        <figure className="flex flex-col items-start gap-2 md:items-end">
          <img
            src={p.image}
            alt={`${p.name} 界面截图`}
            width={p.orientation === 'portrait' ? 720 : 1440}
            height={p.orientation === 'portrait' ? 1280 : 900}
            loading="lazy"
            decoding="async"
            className="max-h-[156px] w-auto max-w-full border border-rule md:max-h-[176px] md:max-w-[300px]"
          />
          <figcaption className="font-body text-[11px] text-ink-muted md:mt-1.5">
            附件 · 实机界面
          </figcaption>
        </figure>

        <span className="stamp-mark text-[12px]" data-stamped={stamped}>
          已交付
        </span>
      </div>
    </li>
  )
}

export default function Delivered() {
  return (
    <section id="projects" className="mx-auto max-w-[1180px] px-6 md:px-10">
      <div className="rule-b pb-3 pt-12 md:pt-16">
        <h2 className="font-display text-[clamp(1.25rem,2.6vw,1.75rem)] tracking-[-0.01em] text-ink">
          已交付 · 联次
        </h2>
      </div>
      <ol>
        {siteConfig.projects.map((p, i) => (
          <Entry key={p.id} p={p} index={i} />
        ))}
      </ol>
    </section>
  )
}
