import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '2rem',
            fontFamily: '"PingFang SC", "Microsoft YaHei", system-ui, sans-serif',
            background: '#0f0f23',
            color: '#e0e7ff',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '5rem', margin: 0, fontWeight: 800, color: '#6366f1' }}>404</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1rem', color: '#94a3b8' }}>
            页面未找到 — 您访问的页面不存在或已被移动
          </p>
          <a
            href="/"
            style={{
              display: 'inline-block',
              marginTop: '2rem',
              padding: '0.75rem 2.5rem',
              borderRadius: '9999px',
              background: '#6366f1',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
            }}
          >
            返回首页
          </a>
          <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#64748b' }}>
            上海含章收珍软件科技有限公司
          </p>
        </div>
      </body>
    </html>
  )
}
