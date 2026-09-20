'use client'

import { siteConfig } from '@/config/site'
import { useInView } from './useInView'

/**
 * 票据底部
 *
 * 票据的收尾：供方联系方式、票据说明、版权与备案。
 * 没有「快速链接」式的三栏 —— 那是网页 footer 的习惯，不是票据的。
 */
export default function TicketFoot() {
  const year = new Date().getFullYear()
  const { ref, seen } = useInView<HTMLElement>('-8% 0px -8% 0px')

  return (
    <footer ref={ref} data-reveal={String(seen)} className="mx-auto max-w-[1180px] px-6 md:px-10">
      <div className="rv-rule g-rule-double mt-12 md:mt-16" />

      <div className="grid grid-cols-1 gap-y-8 py-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-x-10">
        <div className="rv-ink" style={{ '--i': 1 } as React.CSSProperties}>
          <span className="g-field-label">供方联系</span>
          <address className="not-italic">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="font-mono text-[15px] text-on-ground underline decoration-on-ground/50 underline-offset-[5px] transition-colors hover:text-on-ground"
            >
              {siteConfig.contact.phone}
            </a>
            <br />
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-mono text-[13px] text-on-muted underline decoration-on-ground/50 underline-offset-[5px] transition-colors hover:text-on-ground"
            >
              {siteConfig.contact.email}
            </a>
            <br />
            <span className="text-[13px] text-on-muted">{siteConfig.contact.address}</span>
          </address>
        </div>

        <div className="rv-ink" style={{ '--i': 1.5 } as React.CSSProperties}>
          <span className="g-field-label">票据说明</span>
          <p className="max-w-[40ch] text-[12.5px] leading-relaxed text-on-muted">
            本页为上海含章收珍软件科技有限公司的服务项目说明，形式取商业凭证体例。
            页内所列案例、客户评价与合作方均为真实内容。
          </p>
        </div>

        <div className="rv-ink" style={{ '--i': 2 } as React.CSSProperties}>
          <span className="g-field-label">备案</span>
          <p className="font-mono text-[12.5px] text-on-muted">{siteConfig.company.icp}</p>
          {siteConfig.social.github && (
            <p className="mt-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12.5px] text-on-muted underline decoration-on-ground/50 underline-offset-[5px] transition-colors hover:text-on-ground"
              >
                开源主页
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="g-rule-t flex flex-wrap items-center justify-between gap-3 py-4">
        <p className="font-body text-[11.5px] text-on-muted">
          © {year} {siteConfig.company.name}
        </p>
        <p className="font-mono text-[11px] text-on-muted">
          记账联 · №&nbsp;HZSZ-{year}-001
        </p>
      </div>
    </footer>
  )
}
