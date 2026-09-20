// 404 页面 · 硬编码暗色（不依赖主题上下文）
// 配色已同步至 run-id 2026-09-20-redesign 的暗色 token
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
            fontFamily: '"PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif',
            background: '#0C0C0E',
            color: '#EDEDEF',
            textAlign: 'center',
          }}
        >
          {/* 10.50:1 on #0C0C0E */}
          <h1 style={{ fontSize: '5rem', margin: 0, fontWeight: 800, color: '#2DD4BF' }}>404</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1rem', color: '#A1A1A6' }}>
            页面未找到 — 您访问的页面不存在或已被移动
          </p>
          <a
            href="/"
            style={{
              display: 'inline-block',
              marginTop: '2rem',
              padding: '0.75rem 2.5rem',
              borderRadius: '6px',
              background: '#2DD4BF',
              color: '#0C0C0E',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
            }}
          >
            返回首页
          </a>
          <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#A1A1A6' }}>
            上海含章收珍软件科技有限公司
          </p>
        </div>
      </body>
    </html>
  )
}
