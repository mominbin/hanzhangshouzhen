'use client'

import { motion } from 'framer-motion'
import { Smartphone, Monitor, LayoutGrid, Globe } from 'lucide-react'
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

function ServiceIcon({ name }: { name: string }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return (
    <Icon
      size={28}
      strokeWidth={1.5}
      className="transition-colors duration-200 group-hover:text-primary"
      style={{ color: 'var(--color-text-muted)' }}
    />
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
      <div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 h-full">
        <div className="flex-1">
          <div className="mb-4 inline-block">
            <ServiceIcon name={service.icon} />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {service.desc}
          </p>
        </div>
        {service.image && (
          <div className="sm:w-48 flex-shrink-0">
            <div
              className="rounded-lg overflow-hidden border"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover"
              />
            </div>
          </div>
        )}
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

        {/* Asymmetric: featured services get larger cards with screenshot */}
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
              <div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8">
                <div className="flex-1">
                  <div className="mb-4 inline-block">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {service.desc}
                  </p>
                </div>
                <div className="sm:w-48 flex-shrink-0">
                  <div
                    className="rounded-lg overflow-hidden border"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <img
                      src={service.image ?? '/images/projects/project2.png'}
                      alt={service.title}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </div>
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
