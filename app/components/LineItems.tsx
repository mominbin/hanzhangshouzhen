'use client'

import { siteConfig } from '@/config/site'

/**
 * 明细行项表
 *
 * 页面的视觉锚点。四项服务是票据的四行行项 —— 不是四张等大卡片。
 * 顺序号、项目、交付内容、佐证各占一栏，靠栏线建立秩序，不靠留白。
 *
 * 注：票据原始的「金额」栏被「参考案例」取代 ——
 * 价格是商业主张，不得虚构（见 PRODUCT.md 的 Evidence on Hand）。
 * 手上有的真实佐证是案例，就放案例。
 */
export default function LineItems() {
  // 服务 → 真实案例的对应，取自 config/site.ts 的 projects
  const caseByType: Record<string, string> = {
    移动App: '2048集卡 · HarmonyOS',
    管理平台: '手机回收订单管理系统',
  }

  return (
    <section id="services" className="mx-auto max-w-[1180px] px-6 md:px-10">
      <div className="g-rule-b pb-3 pt-8 md:pt-10">
        <h2 className="font-display text-[clamp(1.25rem,2.6vw,1.75rem)] tracking-[-0.01em] text-on-ground">
          服务项目明细
        </h2>
      </div>

      {/* 表头 */}
      <div className="g-rule-b hidden grid-cols-[64px_1fr_2fr_1.1fr] gap-x-6 py-2 md:grid">
        <span className="g-field-label mb-0 text-right">序号</span>
        <span className="g-field-label mb-0">项目名称</span>
        <span className="g-field-label mb-0">交付内容</span>
        <span className="g-field-label mb-0">参考案例</span>
      </div>

      <ol>
        {siteConfig.services.map((svc, i) => {
          const proof = caseByType[svc.title.replace(/开发$/, '')] ?? null
          return (
            <li
              key={svc.title}
              id={i === 0 ? 'service-1' : undefined}
              className="ink-in g-rule-b group transition-colors duration-150 hover:bg-on-ground/10"
              style={{ '--i': i } as React.CSSProperties}
            >
              {/* 桌面：四栏行项 */}
              <div className="hidden grid-cols-[64px_1fr_2fr_1.1fr] items-baseline gap-x-6 py-4 md:grid">
                <span className="font-mono text-right text-[13px] text-on-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[18px] leading-snug text-on-ground">
                  {svc.title}
                </h3>
                <p className="max-w-[52ch] text-[14px] leading-relaxed text-on-muted">
                  {svc.desc}
                </p>
                {proof ? (
                  /* 真链接到对应联次 —— 原先只是看起来像链接的 span（可及性缺陷） */
                  <a
                    href="#projects"
                    className="font-body text-[13px] text-on-ground-link underline decoration-on-ground-link/40 underline-offset-[3px] transition-colors hover:decoration-on-ground-link"
                  >
                    {proof}
                  </a>
                ) : (
                  <span className="font-body text-[13px] text-on-muted">—</span>
                )}
              </div>

              {/* 移动：字段堆叠，仍带栏线 */}
              <div className="space-y-3 py-4 md:hidden">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[12px] text-on-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-[17px] text-on-ground">{svc.title}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-on-muted">{svc.desc}</p>
                <div>
                  <span className="g-field-label">参考案例</span>
                  {proof ? (
                    <a
                      href="#projects"
                      className="font-body text-[13px] text-on-ground-link underline decoration-on-ground-link/40 underline-offset-[3px]"
                    >
                      {proof}
                    </a>
                  ) : (
                    <span className="font-body text-[13px] text-on-muted">—</span>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
