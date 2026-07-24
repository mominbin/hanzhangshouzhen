'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `项目咨询 - ${form.name}`
    const body = `${form.message}%0D%0A%0D%0A姓名：${form.name}%0D%0A联系方式：${form.contact}`
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="card overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: CTA text + contact info */}
            <div className="p-8 md:p-12 gradient-bg text-white flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                准备好开始您的项目了吗？
              </h2>
              <p className="text-white/80 text-sm md:text-base mb-8">
                告诉我们您的需求，我们将在 24 小时内与您联系，提供免费的技术咨询和方案建议。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/70" />
                  <span className="text-sm">{siteConfig.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/70" />
                  <span className="text-sm">{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-white/70" />
                  <span className="text-sm">微信：{siteConfig.contact.wechat}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white/70" />
                  <span className="text-sm">{siteConfig.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                    您的姓名
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="请输入您的姓名"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors duration-200 focus:outline-none focus:border-primary"
                    style={{
                      background: 'var(--color-card)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                    联系方式
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="手机号 / 微信 / 邮箱"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors duration-200 focus:outline-none focus:border-primary"
                    style={{
                      background: 'var(--color-card)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                    需求描述
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="请简要描述您的项目需求..."
                    className="w-full px-4 py-2.5 rounded-lg border text-sm transition-colors duration-200 focus:outline-none focus:border-primary resize-none"
                    style={{
                      background: 'var(--color-card)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                    submitted ? 'bg-green-500' : 'gradient-bg hover:opacity-90'
                  }`}
                >
                  {submitted ? (
                    <>✓ 已发送</>
                  ) : (
                    <><Send className="w-4 h-4" /> 发送需求</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
