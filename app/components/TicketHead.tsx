'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'
import ThemeToggle from './ThemeToggle'

/**
 * 票头 · 购方栏
 *
 * 这是页面的第一屏。它不做「hero」——它做一份票据的抬头：
 * 开票方、票据编号、日期在上，购方栏留白在下。
 *
 * 购方栏的留白是刻意的：那一栏是空的，等着填上访客自己公司的名字。
 * 页面上唯一的邀请动作就从这里开始。
 */
export default function TicketHead() {
  const [today, setToday] = useState('')
  useEffect(() => {
    const d = new Date()
    setToday(
      `${d.getFullYear()} 年 ${String(d.getMonth() + 1).padStart(2, '0')} 月 ${String(d.getDate()).padStart(2, '0')} 日`
    )
  }, [])

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header>
      {/* 票眉：细条，联次 + 编号 */}
      <div className="rule-b bg-paper-sunk">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-2 md:px-10">
          <span className="font-body text-[11px] tracking-[0.14em] text-ink-muted">
            记账联 · 存根
          </span>
          <span className="flex items-center gap-5">
            <span className="hidden font-mono text-[11px] text-ink-muted sm:inline">
              №&nbsp;HZSZ-{new Date().getFullYear()}-001
            </span>
            {/* 主行动常驻可见：不给访客「滚到底才找得到联系方式」的麻烦 */}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="font-mono text-[12px] text-seal underline decoration-seal/40 underline-offset-[4px] transition-colors hover:decoration-seal"
            >
              {siteConfig.contact.phone}
            </a>
          </span>
        </div>
      </div>

      {/* 棕红通栏：开票方。print-wipe 让它像被打印头扫过一样显影 */}
      <div className="band">
        <div className="print-wipe mx-auto max-w-[1180px] px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-band-on-muted">
                开票方 / ISSUER
              </p>
              <h1 className="mt-3 font-display text-[clamp(1.6rem,4.4vw,3rem)] leading-[1.2] tracking-[-0.02em] text-band-on">
                {siteConfig.company.name}
              </h1>
              <p className="mt-3 max-w-[54ch] font-body text-[15px] leading-relaxed text-band-on-muted">
                {siteConfig.hero.title}。{siteConfig.hero.subtitle}
              </p>
            </div>

            {/* 导航：票据的栏目索引，不是浮在空中的玻璃条 */}
            <nav aria-label="票据栏目" className="no-print">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 font-body text-[13px]">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={go(item.href)}
                      className="text-band-on-muted underline decoration-band-on-muted/40 underline-offset-[5px] transition-colors hover:text-band-on hover:decoration-band-on"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="flex items-center">
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* 购方栏：留白等着填 */}
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="relative grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="md:rule-r py-6 md:pr-8">
            <span className="field-label">购方名称 / BUYER</span>
            {/* 空白字段就是一条空栏线 —— 票据本来的样子，不用破折号去填，
                也不用低对比度去暗示「此处为空」（那样既不像票据也不达 AA）。 */}
            <p className="mt-2 border-b border-rule-strong pb-1 font-display text-[clamp(.95rem,1.8vw,1.15rem)] leading-snug text-ink-muted">
              此处开给贵司
            </p>
          </div>
          <div className="rule-t md:rule-t-0 md:rule-r py-6 md:px-8">
            <span className="field-label">开票日期</span>
            <p className="font-mono text-[14px] text-ink">{today || ' '}</p>
          </div>
          <div className="rule-t md:rule-t-0 py-6 md:pl-8">
            <span className="field-label">服务项目</span>
            <p className="font-body text-[14px] text-ink">详见下表 · 共四项</p>
          </div>
          {/* 栏线随打印绘制。绝对定位的 1px 元素，不驱动 layout。 */}
          <span
            aria-hidden="true"
            className="rule-draw absolute inset-x-0 bottom-0 h-px bg-rule"
            style={{ animationDelay: '420ms' }}
          />
        </div>
      </div>
    </header>
  )
}
