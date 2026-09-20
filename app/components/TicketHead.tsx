'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'
import ThemeToggle from './ThemeToggle'

/**
 * 票头 · 购方栏
 *
 * 直接坐在棕红地面上 —— 不做「hero」，也不做一条通栏。
 * 开票方、票号、备案号、购方栏都在材料本身上，只有内容才坐进纸白面板。
 *
 * 购方栏的留白是刻意的：那一栏是空的，等着填上访客自己公司的名字。
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
    <header className="on-ground">
      {/* 票眉：联次、票号、备案号、电话 —— 契约要求备案号在第一屏的票眉上 */}
      <div className="g-rule-b">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-5 gap-y-1 px-6 py-2.5 md:px-10">
          <span className="font-body text-[11px] tracking-[0.14em] text-on-muted">
            记账联 · 存根
          </span>
          <span className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="hidden sm:inline">
              <span
                className="type-in font-mono text-[11px] text-on-muted"
                style={{ '--chars': 16, animationDelay: '180ms' } as React.CSSProperties}
              >
                №&nbsp;HZSZ-{new Date().getFullYear()}-001
              </span>
            </span>
            <span className="font-mono text-[11px] text-on-muted">{siteConfig.company.icp}</span>
            {/* 主行动常驻可见：不给访客「滚到底才找得到联系方式」的麻烦 */}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="font-mono text-[12px] text-on-ground underline decoration-on-ground/40 underline-offset-[4px] transition-opacity hover:decoration-on-ground"
            >
              {siteConfig.contact.phone}
            </a>
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        {/* 开票方：直接落在棕红地面上 */}
        <div id="hero" className="print-wipe pt-7 pb-5 md:pt-8 md:pb-6">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-on-muted">
                开票方 / ISSUER
              </p>
              <h1 className="mt-3 font-display text-[clamp(1.6rem,4.4vw,3rem)] leading-[1.2] tracking-[-0.02em] text-on-ground">
                {siteConfig.company.name}
              </h1>
              <p className="mt-3 max-w-[54ch] font-body text-[15px] leading-relaxed text-on-muted">
                {siteConfig.hero.title}。{siteConfig.hero.subtitle}
              </p>
            </div>

            {/* 导航：票据的栏目索引 */}
            <nav aria-label="票据栏目" className="no-print">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 font-body text-[13px]">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={go(item.href)}
                      className="text-on-muted underline decoration-on-muted/40 underline-offset-[5px] transition-colors hover:text-on-ground hover:decoration-on-ground"
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

        {/* 购方栏：留白等着填 */}
        <div className="relative grid grid-cols-1 g-rule-b md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="py-4 md:border-r md:border-on-ground/25 md:pr-8">
            <span className="g-field-label">购方名称 / BUYER</span>
            {/* 空白字段就是一条空栏线 —— 票据本来的样子 */}
            <p className="mt-2 border-b border-on-ground/50 pb-1 font-display text-[clamp(.95rem,1.8vw,1.15rem)] leading-snug text-on-muted">
              此处开给贵司
            </p>
          </div>
          <div className="border-t border-on-ground/25 py-4 md:border-t-0 md:border-r md:px-8">
            <span className="g-field-label">开票日期</span>
            <p className="font-mono text-[14px] text-on-ground">
              {today && (
                <span
                  className="type-in"
                  style={{ '--chars': 13, animationDelay: '1560ms' } as React.CSSProperties}
                >
                  {today}
                </span>
              )}
            </p>
          </div>
          <div className="border-t border-on-ground/25 py-4 md:border-t-0 md:pl-8">
            <span className="g-field-label">服务项目</span>
            <p className="font-body text-[14px] text-on-ground">详见下表 · 共四项</p>
          </div>
          <span
            aria-hidden="true"
            className="rule-draw absolute inset-x-0 bottom-0 h-px bg-on-ground/50"
            style={{ animationDelay: '800ms' }}
          />
        </div>
      </div>
    </header>
  )
}
