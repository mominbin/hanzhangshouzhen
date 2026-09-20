'use client'

import { siteConfig } from '@/config/site'
import { useInView } from './useInView'

/**
 * 签收意见
 *
 * 客户评价是两条真实评价（见 PRODUCT.md 的 Evidence on Hand）。
 * 票据世界的「签收意见栏」正是它们的容器 —— 内容真实，形式也对。
 * 评价原文一字未改。
 *
 * 显影顺序取自这个动作本身：先落墨写下意见，签字栏线随后绘制。
 */
export default function Endorsements() {
  const { ref, seen } = useInView<HTMLElement>('-8% 0px -12% 0px')

  return (
    <section ref={ref} data-reveal={String(seen)} className="mx-auto max-w-[1180px] px-6 md:px-10">
      <div className="pb-3 pt-12 md:pt-16">
        <h2 className="rv-ink font-display text-[clamp(1.25rem,2.6vw,1.75rem)] tracking-[-0.01em] text-on-ground">
          签收意见
        </h2>
        <p className="rv-ink mt-2 max-w-[64ch] text-[14px] text-on-muted" style={{ '--i': 1 } as React.CSSProperties}>
          以下为已交付客户的签收意见原文。
        </p>
        <span aria-hidden="true" className="rv-rule mt-3 block h-px w-full bg-on-ground/30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {siteConfig.testimonials.map((t, i) => (
          <blockquote
            key={t.name}
            className={`g-rule-b py-8 md:py-10 ${
              i === 0 ? 'md:rule-r md:pr-10' : 'md:pl-10'
            }`}
          >
            {/* 先落墨：写下意见 */}
            <p
              className="rv-ink max-w-[46ch] font-display text-[clamp(1rem,1.9vw,1.15rem)] leading-relaxed text-on-ground"
              style={{ '--i': 2 + i * 2 } as React.CSSProperties}
            >
              &ldquo;{t.content}&rdquo;
            </p>

            <footer className="mt-6 flex items-end justify-between gap-6">
              <div className="rv-ink" style={{ '--i': 3 + i * 2 } as React.CSSProperties}>
                <span className="g-field-label">签收人</span>
                <cite className="font-display not-italic text-[15px] text-on-ground">{t.name}</cite>
                <p className="mt-0.5 text-[13px] text-on-muted">{t.title}</p>
              </div>

              {/* 后签字：栏线随后绘制。票据本来的空白，不该被填满。 */}
              <div className="shrink-0 text-right">
                <span className="g-field-label md:text-right">签字 / 日期</span>
                <span
                  aria-hidden="true"
                  className="rv-rule mb-1.5 block h-px w-[104px] bg-on-ground/50"
                  style={{ '--i': 4 + i * 2 } as React.CSSProperties}
                />
                <span className="block h-5 w-[104px]" />
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
