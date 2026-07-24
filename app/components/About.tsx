'use client'

import { motion } from 'framer-motion'
import { Code2, Users, Shield, Zap } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { siteConfig } from '@/config/site'

const advantages = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: '技术实力',
    desc: '全栈技术团队，覆盖前端、后端、移动端、AI 等多个领域，紧跟技术前沿',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: '项目管理',
    desc: '敏捷开发流程，透明化项目进度管理，定期沟通确保需求精准落地',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: '售后保障',
    desc: '项目交付后提供技术支持和维护服务，及时响应问题，保障系统稳定运行',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: '高效交付',
    desc: '成熟的开发框架和组件库积累，快速启动项目，缩短交付周期',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-max">
        <SectionHeader
          label="关于我们"
          title={siteConfig.company.name}
          description={siteConfig.company.tagline}
        />

        {/* Brand story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            「含章」出自《周易》&ldquo;含章可贞&rdquo;，意为内含美质、坚守正道；
            「收珍」寓意汇聚精华、珍藏价值。
            我们致力于以技术匠心为客户创造数字化价值，让每一行代码都承载品质与信赖。
            公司总部位于上海，拥有经验丰富的全栈开发团队，已成功交付{siteConfig.stats[0].value}+个项目，
            服务覆盖零售、健身、教育、金融等多个行业领域。
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card p-5 md:p-6 text-center group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-semibold mb-1.5 text-sm md:text-base">{item.title}</h4>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
