'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Monitor, LayoutGrid, Globe, X, Maximize2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { siteConfig } from '@/config/site'
import type { Service } from '@/config/site'

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Monitor,
  LayoutGrid,
  Globe,
}

function ServiceIcon({ name, size = 24 }: { name: string; size?: number }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return (
    <Icon
      size={size}
      strokeWidth={1.5}
      className="transition-colors duration-200 group-hover:text-primary flex-shrink-0"
      style={{ color: 'var(--color-text-muted)' }}
    />
  )
}

function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.8)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-white/10"
        aria-label="关闭"
      >
        <X size={24} className="text-white" />
      </button>
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        src={src}
        alt={alt}
        decoding="async"
        className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}
      />
    </motion.div>
  )
}

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="relative sm:w-48 flex-shrink-0 group/img cursor-pointer" onClick={() => setOpen(true)}>
        <div
          className="rounded-xl overflow-hidden border transition-shadow duration-300 group-hover/img:shadow-lg"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={400}
            height={250}
            className="w-full h-32 object-cover transition-transform duration-500 group-hover/img:scale-105"
          />
        </div>
        {/* hover: zoom icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 rounded-xl"
          style={{ background: 'rgba(0,0,0,0.3)' }}
        >
          <Maximize2 size={20} className="text-white" />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <ImageLightbox src={src} alt={alt} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card overflow-hidden group h-full"
    >
      <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8 h-full">
        <div className="flex-1 flex flex-col">
          {/* Icon + Title same row */}
          <div className="flex items-center gap-3 mb-3">
            <ServiceIcon name={service.icon} />
            <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
              {service.title}
            </h3>
          </div>
          <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: 'var(--color-text-muted)' }}>
            {service.desc}
          </p>
        </div>
        {service.image && <ServiceImage src={service.image} alt={service.title} />}
      </div>
    </motion.div>
  )
}

export default function Services() {
  const featured = siteConfig.services.filter((s) => s.featured)
  const others = siteConfig.services.filter((s) => !s.featured)

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-max">
        <SectionHeader
          label="我们的服务"
          title="全方位软件解决方案"
          description="从移动端到管理后台，从微信生态到品牌官网，提供一站式技术解决方案"
        />

        {/* Featured services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
          {featured.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-8">
                <div className="flex-1 flex flex-col">
                  {/* Icon + Title same row */}
                  <div className="flex items-center gap-3 mb-3">
                    <ServiceIcon name={service.icon} />
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: 'var(--color-text-muted)' }}>
                    {service.desc}
                  </p>
                </div>
                <ServiceImage
                  src={service.image ?? '/images/projects/project2.webp'}
                  alt={service.title}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {others.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
