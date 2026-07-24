'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import PlaceholderImage from './ui/PlaceholderImage'
import { siteConfig } from '@/config/site'

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-max">
        <SectionHeader
          label="客户评价"
          title="他们信任我们"
          description="客户的认可是我们最大的动力"
        />

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {siteConfig.testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card p-6 md:p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'var(--color-text)' }}>
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <PlaceholderImage text={t.name[0]} rounded className="w-10 h-10" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm font-medium mb-6" style={{ color: 'var(--color-text-muted)' }}>
            技术合作伙伴
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {siteConfig.partners.map((partner) => (
              <div
                key={partner.name}
                className="text-sm font-semibold opacity-40 hover:opacity-70 transition-opacity cursor-default"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
