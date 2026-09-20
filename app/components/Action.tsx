'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'
import { useInView } from './useInView'

/**
 * 合计 + 开票动作
 *
 * 票据的收口处：双线夹住合计行，右侧是监制章与主行动。
 * 合计用中文大写数字 —— 那是票据本身的语法，不是装饰。
 *
 * 备注栏是真实可用的：访客写下需求，按钮把需求复制到剪贴板并调起电话。
 * 原站的表单没有后端，提交只会假装成功 —— 这里不假装。
 */
export default function Action() {
  const [note, setNote] = useState('')
  const [copied, setCopied] = useState(false)
  const { ref, seen } = useInView<HTMLElement>('-8% 0px -12% 0px')

  const phone = siteConfig.contact.phone.replace(/\s/g, '')

  const act = async () => {
    const body = note.trim()
      ? `【需求】${note.trim()}\n【来自】含章收珍官网备注栏`
      : '【来自】含章收珍官网'
    try {
      await navigator.clipboard.writeText(body)
      setCopied(true)
      setTimeout(() => setCopied(false), 2600)
    } catch {
      /* 剪贴板不可用时静默降级：电话仍可拨通 */
    }
    window.location.href = `tel:${phone}`
  }

  return (
    <section
      id="contact"
      ref={ref}
      data-reveal={String(seen)}
      className="mx-auto max-w-[1180px] px-6 md:px-10"
    >
      {/* 合计已上移，紧接明细行项表收口（票据的语法：合计收行项）。
          本区只留备注栏与开票动作。 */}
      <div className="grid grid-cols-1 gap-y-10 pt-12 pb-12 md:grid-cols-[1.4fr_1fr] md:gap-x-12 md:pt-16 md:pb-16">
        <div>
          <h2
            className="rv-ink font-display text-[clamp(1.25rem,2.6vw,1.75rem)] tracking-[-0.01em] text-ink"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            备注栏
          </h2>
          <p className="rv-ink mt-3 max-w-[62ch] text-[15px] leading-relaxed text-ink-muted" style={{ '--i': 3 } as React.CSSProperties}>
            写下您要做的东西，一句话就够。按下右边的按钮，这段备注会被复制到剪贴板，
            同时拨通电话；接通后直接粘贴即可，不用重新讲一遍。
          </p>

          <label htmlFor="note" className="field-label mt-8">
            需求备注 / REMARKS
          </label>
          <textarea
            id="note"
            rows={5}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="例：我们做连锁零售，想做一个门店的进销存后台，要和现有的收银系统对接"
            className="input resize-y"
          />
          <p className="mt-2 text-[12px] text-ink-muted">
            未填写也可以直接拨打。备注只是帮您少讲一遍。
          </p>
        </div>

        {/* 存根线：把开票动作标成票据的存根联。移动端也要留出间距，
            否则文字紧贴栏线（原先是 md:pl-12，移动端零内边距）。 */}
        <div className="rule-l pl-6 md:pl-12">
          <span className="field-label rv-ink" style={{ '--i': 3 } as React.CSSProperties}>
            开票动作 / ACTION
          </span>

          {/* 描边次级，不填充 —— 世界里唯一的高饱和实心红留给首屏合计区的
              「立刻咨询」。本按钮仍是真的、仍可用，只是不与主行动争注意力。 */}
          <button
            type="button"
            onClick={act}
            data-copied={copied}
            className="act-quiet mt-4 w-full justify-center md:w-auto"
          >
            {copied ? '已复制，正在拨号…' : '复制备注并致电'}
          </button>

          <dl className="rv-ink mt-8 space-y-4" style={{ '--i': 4 } as React.CSSProperties}>
            <div>
              <dt className="field-label">电话 / 微信</dt>
              <dd>
                <a href={`tel:${phone}`} className="font-mono text-[17px] text-ink underline decoration-rule-strong underline-offset-[5px] transition-colors hover:text-ink">
                  {siteConfig.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="field-label">邮箱</dt>
              <dd>
                <a href={`mailto:${siteConfig.contact.email}`} className="font-mono text-[14px] text-ink-muted underline decoration-rule-strong underline-offset-[5px] transition-colors hover:text-ink">
                  {siteConfig.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="field-label">地址</dt>
              <dd className="text-[14px] text-ink-muted">{siteConfig.contact.address}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
