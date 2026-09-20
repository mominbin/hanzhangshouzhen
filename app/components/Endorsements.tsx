'use client'

import { siteConfig } from '@/config/site'

/**
 * 签收意见
 *
 * 客户评价是两条真实评价（见 PRODUCT.md 的 Evidence on Hand）。
 * 票据世界的「签收意见栏」正是它们的容器 —— 内容真实，形式也对。
 * 评价原文一字未改。
 */
export default function Endorsements() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 md:px-10">
      <div className="rule-b pb-3 pt-12 md:pt-16">
        <h2 className="font-display text-[clamp(1.25rem,2.6vw,1.75rem)] tracking-[-0.01em] text-ink">
          签收意见
        </h2>
        <p className="mt-2 max-w-[64ch] text-[14px] text-ink-muted">
          以下为已交付客户的签收意见原文。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {siteConfig.testimonials.map((t, i) => (
          <blockquote
            key={t.name}
            className={`rule-b py-8 md:py-10 ${
              i === 0 ? 'md:rule-r md:pr-10' : 'md:pl-10'
            }`}
          >
            <p className="max-w-[46ch] font-display text-[clamp(1rem,1.9vw,1.15rem)] leading-relaxed text-ink">
              &ldquo;{t.content}&rdquo;
            </p>

            <footer className="mt-6 flex items-end justify-between gap-6">
              <div>
                <span className="field-label">签收人</span>
                <cite className="font-display not-italic text-[15px] text-ink">{t.name}</cite>
                <p className="mt-0.5 text-[13px] text-ink-muted">{t.title}</p>
              </div>

              {/* 签收栏：票据本来的空白，不该被填满 */}
              <div className="shrink-0 text-right">
                <span className="field-label md:text-right">签字 / 日期</span>
                <div className="rule-b mb-1.5 h-5 w-[104px]" />
                <div className="h-5 w-[104px]" />
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
