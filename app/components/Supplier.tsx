'use client'

import { siteConfig } from '@/config/site'
import { useInView } from './useInView'

/**
 * 供方信息
 *
 * 公司自述 + 四项备注事项 + 背书单位。
 * 四项优势用带栏线的清单呈现 —— 不做「图标 + 标题 + 文字」的等大卡片，
 * 那是本品类的默认套路，也是 craft-floor 明确拒绝的页面骨架。
 *
 * 显影：它本来就是一份清单，所以逐条落墨（同级错开）。
 */
const remarks = [
  { title: '技术实力', desc: '全栈技术团队，覆盖前端、后端、移动端、AI 等多个领域，紧跟技术前沿' },
  { title: '项目管理', desc: '敏捷开发流程，透明化项目进度管理，定期沟通确保需求精准落地' },
  { title: '售后保障', desc: '项目交付后提供技术支持和维护服务，及时响应问题，保障系统稳定运行' },
  { title: '高效交付', desc: '成熟的开发框架和组件库积累，快速启动项目，缩短交付周期' },
]

export default function Supplier() {
  const { ref, seen } = useInView<HTMLElement>('-8% 0px -12% 0px')

  return (
    <section
      id="about"
      ref={ref}
      data-reveal={String(seen)}
      className="mx-auto max-w-[1180px] px-6 md:px-10"
    >
      <div className="pb-3 pt-12 md:pt-16">
        <h2 className="rv-ink font-display text-[clamp(1.25rem,2.6vw,1.75rem)] tracking-[-0.01em] text-on-ground">
          供方信息
        </h2>
        <span aria-hidden="true" className="rv-rule mt-3 block h-px w-full bg-on-ground/30" />
      </div>

      <div className="grid grid-cols-1 gap-y-10 py-8 md:grid-cols-[1fr_1.3fr] md:gap-x-12 md:py-10">
        <div className="rv-ink border-b border-on-ground/30 pb-8 md:border-b-0 md:pb-0">
          <span className="g-field-label">供方名称</span>
          <p className="font-display text-[clamp(1.05rem,2vw,1.3rem)] leading-snug text-on-ground">
            {siteConfig.company.name}
          </p>
          <p className="mt-4 max-w-[52ch] text-[14px] leading-relaxed text-on-muted">
            {siteConfig.company.tagline}
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <dt className="g-field-label">成立</dt>
              <dd className="font-mono text-[14px] text-on-ground">{siteConfig.company.founded} 年</dd>
            </div>
            <div>
              <dt className="g-field-label">所在地</dt>
              <dd className="text-[14px] text-on-ground">{siteConfig.contact.address}</dd>
            </div>
            <div className="col-span-2">
              <dt className="g-field-label">备案</dt>
              <dd className="font-mono text-[13px] text-on-muted">{siteConfig.company.icp}</dd>
            </div>
          </dl>
        </div>

        <div>
          <span className="g-field-label">备注事项 / REMARKS</span>
          <ul>
            {remarks.map((r, i) => (
              <li
                key={r.title}
                className="rv-ink g-rule-b grid grid-cols-[40px_1fr] items-baseline gap-x-4 py-4 transition-colors duration-150 hover:bg-on-ground/10"
                style={{ '--i': i + 1 } as React.CSSProperties}
              >
                <span className="font-mono text-[12px] text-on-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-[16px] text-on-ground">{r.title}</h3>
                  <p className="mt-1 max-w-[56ch] text-[13.5px] leading-relaxed text-on-muted">
                    {r.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 背书单位 */}
      <div className="g-rule-t g-rule-b py-6">
        <span className="g-field-label rv-ink" style={{ '--i': 5 } as React.CSSProperties}>
          背书单位 / ENDORSED BY
        </span>
        <ul className="mt-2 flex flex-wrap items-center gap-x-10 gap-y-3">
          {siteConfig.partners.map((p, i) => (
            <li
              key={p.name}
              className="rv-ink font-display text-[15px] tracking-[0.02em] text-on-muted"
              style={{ '--i': 6 + i } as React.CSSProperties}
            >
              {p.name}
            </li>
          ))}
        </ul>
        <p className="rv-ink mt-3 max-w-[70ch] text-[12px] text-on-muted" style={{ '--i': 10 } as React.CSSProperties}>
          以上为技术合作与云服务供应商，非客户或投资方。
        </p>
      </div>
    </section>
  )
}
