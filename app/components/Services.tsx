'use client'

import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { siteConfig } from '@/config/site'

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-max">
        <SectionHeader
          label="我们的服务"
          title="全方位软件解决方案"
          description="从移动端到管理后台，从微信生态到品牌官网，提供一站式技术解决方案"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card p-6 md:p-8 group cursor-default"
            >
              <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2">
                {service.title}
                {service.featured && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    核心服务
                  </span>
                )}
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
