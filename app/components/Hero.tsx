'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-28 md:pb-20"
    >
      {/* 背景：纯色画布。原紫色径向光晕已移除（AI 味特征），
          随之去掉 overflow-hidden —— 它本是为裁切光晕而加，
          却会裁掉绝对定位子元素（检测器 clipped-overflow-container）。 */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--color-bg)' }}
      />

      {/* Content — asymmetric split */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* Left: copy */}
          <div className="flex-1 max-w-[60ch]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  background: 'var(--color-card)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-accent)',
                }}
              >
                {siteConfig.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight mb-5"
              style={{ color: 'var(--color-text)' }}
            >
              {siteConfig.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg mb-8 leading-relaxed max-w-[48ch]"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {siteConfig.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 items-start"
            >
              {/* Primary CTA — dominant, larger, full-width on mobile */}
              <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
                  className="w-full sm:w-auto px-10 py-3.5 rounded-[6px] text-base font-semibold text-white transition-colors duration-200 inline-block text-center"
                  style={{ background: 'var(--color-cta-bg)' }}
                >
                  {siteConfig.hero.primaryCta}
                </a>
                {/* Reassurance microcopy */}
                <span className="text-xs text-center sm:text-left" style={{ color: 'var(--color-text-muted)' }}>
                  专业对接沟通，快速梳理需求
                </span>
              </div>

              {/* Secondary CTA — text link, low weight */}
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); handleScroll('#projects') }}
                className="text-sm font-medium transition-colors duration-200 hover:text-primary flex items-center gap-1.5"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {siteConfig.hero.secondaryCta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right: product screenshot — real asset the site already ships */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 hidden lg:block"
          >
            <div
              className="rounded-[10px] overflow-hidden border"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <img
                src="/images/projects/project3.webp"
                alt="手机回收订单管理系统"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
                width={1861}
                height={962}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
