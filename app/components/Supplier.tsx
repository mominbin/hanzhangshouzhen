'use client'

import { siteConfig } from '@/config/site'

/**
 * 供方信息
 *
 * 公司自述 + 四项备注事项 + 背书单位。
 * 四项优势用带栏线的清单呈现 —— 不做「图标 + 标题 + 文字」的等大卡片，
 * 那是本品类的默认套路，也是 craft-floor 明确拒绝的页面骨架。
 */
const remarks = [
  { title: '技术实力', desc: '全栈技术团队，覆盖前端、后端、移动端、AI 等多个领域，紧跟技术前沿' },
  { title: '项目管理', desc: '敏捷开发流程，透明化项目进度管理，定期沟通确保需求精准落地' },
  { title: '售后保障', desc: '项目交付后提供技术支持和维护服务，及时响应问题，保障系统稳定运行' },
  { title: '高效交付', desc: '成熟的开发框架和组件库积累，快速启动项目，缩短交付周期' },
]

export default function Supplier() {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-6 md:px-10">
      <div className="rule-b pb-3 pt-12 md:pt-16">
        <h2 className="font-display text-[clamp(1.25rem,2.6vw,1.75rem)] tracking-[-0.01em] text-ink">
          供方信息
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-y-10 py-8 md:grid-cols-[1fr_1.3fr] md:gap-x-12 md:py-10">
        <div className="rule-b pb-8 md:rule-b-0 md:pb-0">
          <span className="field-label">供方名称</span>
          <p className="font-display text-[clamp(1.05rem,2vw,1.3rem)] leading-snug text-ink">
            {siteConfig.company.name}
          </p>
          <p className="mt-4 max-w-[52ch] text-[14px] leading-relaxed text-ink-muted">
            {siteConfig.company.tagline}
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <dt className="field-label">成立</dt>
              <dd className="font-mono text-[14px] text-ink">{siteConfig.company.founded} 年</dd>
            </div>
            <div>
              <dt className="field-label">所在地</dt>
              <dd className="text-[14px] text-ink">{siteConfig.contact.address}</dd>
            </div>
            <div className="col-span-2">
              <dt className="field-label">备案</dt>
              <dd className="font-mono text-[13px] text-ink-muted">{siteConfig.company.icp}</dd>
            </div>
          </dl>
        </div>

        <div>
          <span className="field-label">备注事项 / REMARKS</span>
          <ul>
            {remarks.map((r, i) => (
              <li
                key={r.title}
                className="rule-b grid grid-cols-[40px_1fr] items-baseline gap-x-4 py-4 transition-colors duration-150 hover:bg-hover"
              >
                <span className="font-mono text-[12px] text-ink-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-[16px] text-ink">{r.title}</h3>
                  <p className="mt-1 max-w-[56ch] text-[13.5px] leading-relaxed text-ink-muted">
                    {r.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 背书单位 */}
      <div className="rule-t rule-b py-6">
        <span className="field-label">背书单位 / ENDORSED BY</span>
        <ul className="mt-2 flex flex-wrap items-center gap-x-10 gap-y-3">
          {siteConfig.partners.map((p) => (
            <li key={p.name} className="font-display text-[15px] tracking-[0.02em] text-ink-muted">
              {p.name}
            </li>
          ))}
        </ul>
        <p className="mt-3 max-w-[70ch] text-[12px] text-ink-muted">
          以上为技术合作与云服务供应商，非客户或投资方。
        </p>
      </div>
    </section>
  )
}
