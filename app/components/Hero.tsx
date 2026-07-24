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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient background for light mode */}
        <div
          className="absolute inset-0 dark:opacity-0 transition-opacity duration-500"
          style={{ background: 'var(--color-hero-gradient)' }}
        />
        {/* Glow orbs for dark mode */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, var(--color-glow), transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-0 dark:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1), transparent)' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium mb-6 border"
            style={{
              background: 'var(--color-card)',
              borderColor: 'rgba(99,102,241,0.3)',
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 gradient-text"
        >
          {siteConfig.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg mb-10 max-w-xl mx-auto"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {siteConfig.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-3 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}
          >
            {siteConfig.hero.primaryCta}
          </button>
          <button
            onClick={() => handleScroll('#projects')}
            className="px-8 py-3 rounded-full text-sm font-semibold border transition-all duration-200 hover:scale-105 flex items-center gap-2"
            style={{
              borderColor: 'var(--color-border-hover)',
              color: 'var(--color-text)',
            }}
          >
            {siteConfig.hero.secondaryCta}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: 'var(--color-border-hover)' }}
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
