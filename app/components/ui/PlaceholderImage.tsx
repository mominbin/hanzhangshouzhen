'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface PlaceholderImageProps {
  text: string
  src?: string
  className?: string
  rounded?: boolean
  portrait?: boolean
}

export default function PlaceholderImage({ text, src, className = '', rounded = false, portrait = false }: PlaceholderImageProps) {
  const [modalOpen, setModalOpen] = useState(false)

  if (src) {
    return (
      <>
        {/* 缩略图 */}
        <div
          className={`overflow-hidden cursor-pointer ${rounded ? 'rounded-full' : 'rounded-lg'} ${className}`}
          onClick={() => setModalOpen(true)}
        >
          {portrait ? (
            /* 竖版：完整展示图片，点击放大 */
            <motion.img
              src={src}
              alt={text}
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            /* 横版：填满 + hover 平移 */
            <motion.img
              src={src}
              alt={text}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.35 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{ transformOrigin: '100% 100%' }}
            />
          )}
        </div>

        {/* 全图弹窗 */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
            >
              <motion.img
                src={src}
                alt={text}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xl"
                onClick={() => setModalOpen(false)}
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10 border border-[var(--color-border)] ${rounded ? 'rounded-full' : 'rounded-lg'} ${className}`}
      style={{ minHeight: '48px' }}
    >
      <span className="text-xs md:text-sm" style={{ color: 'var(--color-text-muted)' }}>
        {text}
      </span>
    </div>
  )
}
