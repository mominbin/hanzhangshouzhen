'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import PlaceholderImage from './ui/PlaceholderImage'
import { siteConfig } from '@/config/site'

const allCategories = ['全部', ...Array.from(new Set(siteConfig.projects.map((p) => p.category)))]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('全部')

  const filteredProjects = activeCategory === '全部'
    ? siteConfig.projects
    : siteConfig.projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="精选案例"
          title="我们的作品"
          description="每一个项目都是用心打磨的成果"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'border border-[var(--color-border)] hover:border-primary hover:text-primary'
              }`}
              style={activeCategory !== cat ? { color: 'var(--color-text-muted)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const isPortrait = project.orientation === 'portrait'

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card overflow-hidden group"
                >
                  {isPortrait ? (
                    /* 竖版双列布局：左文字 + 右图 */
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-3/5 p-5 md:p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                            {project.type}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-1 rounded-md font-mono"
                              style={{
                                background: 'var(--color-card-hover)',
                                color: 'var(--color-text-muted)',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="sm:w-2/5 sm:min-h-[320px] bg-[var(--color-card-hover)]">
                        <PlaceholderImage
                          text={project.name}
                          src={project.image}
                          className="w-full h-full rounded-none"
                          portrait
                        />
                      </div>
                    </div>
                  ) : (
                    /* 横版布局：上图下文字 */
                    <>
                      <PlaceholderImage
                        text={project.name}
                        src={project.image}
                        className="h-48 md:h-56 rounded-none"
                      />
                      <div className="p-5 md:p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                            {project.type}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2 py-1 rounded-md font-mono"
                              style={{
                                background: 'var(--color-card-hover)',
                                color: 'var(--color-text-muted)',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
