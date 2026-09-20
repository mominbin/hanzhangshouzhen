'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'
import ThemeToggle from './ThemeToggle'

/**
 * 票头 · 购方栏
 *
 * 纸面为地，棕红作通栏 —— 用户明确定调的形式（「棕红是一条通栏 更符合我的审美」）。
 * 通栏承载开票方与栏目索引；票眉与购方栏落在纸面上。
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
    <header>
      {/* 票眉：联次、票号、备案号、电话 */}
      <div className="rule-b">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-5 gap-y-1 px-6 py-2.5 md:px-10">
          <span className="font-body text-[11px] tracking-[0.14em] text-ink-muted">
            记账联 · 存根
          </span>
          <span className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="hidden sm:inline">
              <span
                className="type-in font-mono text-[11px] text-ink-muted"
                style={{ '--chars': 16, animationDelay: '180ms' } as React.CSSProperties}
              >
                №&nbsp;HZSZ-{new Date().getFullYear()}-001
              </span>
            </span>
            <span className="font-mono text-[11px] text-ink-muted">{siteConfig.company.icp}</span>
            {/* 主行动常驻可见 */}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="font-mono text-[12px] text-seal underline decoration-seal/40 underline-offset-[4px] transition-opacity hover:decoration-seal"
            >
              {siteConfig.contact.phone}
            </a>
          </span>
        </div>
      </div>

      {/* ── 棕红通栏：开票方 + 栏目索引 ── */}
      <div className="band on-band relative overflow-hidden">
        <div className="print-wipe mx-auto max-w-[1180px] px-6 pt-7 pb-5 md:px-10 md:pt-8 md:pb-6">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div id="hero">
              <p className="font-mono text-[11px] tracking-[0.14em] text-band-muted">
                开票方 / ISSUER
              </p>
              {/* 下限 1.4rem：移动端 390px 时 14 字 × 22.4px = 313px，
                  容得下 342px 的容器，不会把「司」孤零零地挤到第二行。
                  text-wrap: balance 是给更长的公司名兜底。 */}
              <h1 className="mt-3 font-display text-[clamp(1.4rem,4.4vw,3rem)] leading-[1.2] tracking-[-0.02em] text-band-on [text-wrap:balance]">
                {siteConfig.company.name}
              </h1>
              <p className="mt-3 max-w-[54ch] font-body text-[15px] leading-relaxed text-band-muted">
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
                      className="text-band-muted underline decoration-band-muted/40 underline-offset-[5px] transition-colors hover:text-band-on hover:decoration-band-on"
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
        {/* 底边只由下面那条 rule-draw 提供 —— 再给 grid 加 rule-b 会与它
            叠成一条 2px 的双线，而且静态边框首帧就在，动效等于白做。 */}
        <div className="relative grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="py-4 md:border-r md:border-rule md:pr-8">
            <span className="field-label">购方名称 / BUYER</span>
            {/* 空白字段就是一条空栏线 —— 票据本来的样子 */}
            <p className="mt-2 border-b border-rule-strong pb-1 font-display text-[clamp(.95rem,1.8vw,1.15rem)] leading-snug text-ink-muted">
              此处开给贵司
            </p>
          </div>
          <div className="border-t border-rule py-4 md:border-t-0 md:border-r md:border-rule md:px-8">
            <span className="field-label">开票日期</span>
            <p className="font-mono text-[14px] text-ink">
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
          <div className="border-t border-rule py-4 md:border-t-0 md:pl-8">
            <span className="field-label">服务项目</span>
            <p className="font-body text-[14px] text-ink">详见下表 · 共四项</p>
          </div>
          {/* 首屏打印序列的第二拍：购方栏底边绘制进来 */}
          <span
            aria-hidden="true"
            className="rule-draw absolute inset-x-0 bottom-0 h-px bg-rule-strong"
            style={{ animationDelay: '800ms' }}
          />
        </div>
      </div>
    </header>
  )
}
