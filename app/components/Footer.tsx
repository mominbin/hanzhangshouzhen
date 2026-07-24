'use client'

import { Github } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="container-max px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                含
              </div>
              <span className="font-bold">{siteConfig.company.shortName}</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              {siteConfig.company.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">快速链接</h4>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors hover:text-primary"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-semibold text-sm mb-3">联系我们</h4>
            <div className="space-y-1.5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.address}</p>
            </div>
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-sm transition-colors hover:text-primary"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
        >
          <p>&copy; {currentYear} {siteConfig.company.name}. All rights reserved.</p>
          <p>{siteConfig.company.icp}</p>
        </div>
      </div>
    </footer>
  )
}
