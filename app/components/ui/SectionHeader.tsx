'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 md:mb-16"
    >
      <span className="inline-block text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-3">
        {label}
      </span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
