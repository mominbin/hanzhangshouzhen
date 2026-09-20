'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'

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
    <section id="contact" className="mx-auto max-w-[1180px] px-6 md:px-10">
      {/* 合计区：双线收口 */}
      <div className="mt-12 md:mt-16">
        <div className="rule-double" />
        <div className="grid grid-cols-1 gap-y-6 py-6 md:grid-cols-[1.8fr_1fr] md:items-start md:gap-x-10">
          <div>
            <span className="field-label">合计 / TOTAL</span>
            <p className="font-display text-[clamp(1.15rem,2.4vw,1.6rem)] leading-snug tracking-[-0.01em] text-ink">
              肆 项服务 · 贰 个已交付案例 · 肆 家云厂商背书
            </p>
          </div>
          <div className="md:text-right">
            <span className="field-label md:text-right">监制</span>
            <span className="seal text-[12px]">
              上海含章收珍 · 交付监制
            </span>
          </div>
        </div>
        <div className="rule-double" />
      </div>

      {/* 备注栏 + 开票动作 */}
      <div className="grid grid-cols-1 gap-y-10 py-12 md:grid-cols-[1.4fr_1fr] md:gap-x-12 md:py-16">
        <div>
          <h2 className="font-display text-[clamp(1.25rem,2.6vw,1.75rem)] tracking-[-0.01em] text-ink">
            备注栏
          </h2>
          <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-ink-muted">
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

        <div className="rule-l md:pl-12">
          <span className="field-label">开票动作 / ACTION</span>

          <button type="button" onClick={act} className="act mt-4 w-full justify-center md:w-auto">
            {copied ? '已复制，正在拨号…' : '复制备注并致电'}
          </button>

          <dl className="mt-8 space-y-4">
            <div>
              <dt className="field-label">电话 / 微信</dt>
              <dd>
                <a href={`tel:${phone}`} className="font-mono text-[17px] text-ink underline decoration-rule-strong underline-offset-[5px] transition-colors hover:text-seal">
                  {siteConfig.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="field-label">邮箱</dt>
              <dd>
                <a href={`mailto:${siteConfig.contact.email}`} className="font-mono text-[14px] text-ink-muted underline decoration-rule-strong underline-offset-[5px] transition-colors hover:text-seal">
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
