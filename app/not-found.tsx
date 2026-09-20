import { siteConfig } from '@/config/site'

/**
 * 404 · 作废票据
 *
 * 这个世界处理「这张票据无效」的原生手势是盖作废章 ——
 * 所以 404 就是一张被作废的票据，而不是一个通用错误页。
 *
 * ⚠️ 本组件由 app/layout.tsx 包裹，不要再输出 <html>/<body>：
 * 曾经输出过，产物里于是出现嵌套的 html/body（非法结构）。
 * 配色一律走 globals.css 的 token，主题由 ThemeProvider 自动切换；
 * 曾经硬编码过 #0C0C0E / #2DD4BF（薄荷绿）并带 6px 圆角 ——
 * 冷黑与圆角都不是这个世界的材料，且那句「已同步 token」的注释是假的。
 */
export default function NotFound() {
  const year = new Date().getFullYear()

  return (
    /* [overflow-x:clip]：作废章的 stamp 动画起手帧是 scale(2.6)，
       而那一帧 opacity 还是 0 —— 撑破布局的是几乎看不见的一帧。
       窄屏上 244px 的章贴着右缘，会把页面顶出 18px 横向滚动条。
       在页面边界裁掉这个纯装饰的瞬时外溢；用 clip 而非 hidden，
       不会产生滚动容器、不影响 sticky。 */
    <main className="flex min-h-screen flex-col [overflow-x:clip]">
      {/* 票眉 */}
      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
        <div className="rule-b flex flex-wrap items-center justify-between gap-x-5 gap-y-1 py-2.5">
          <span className="font-body text-[11px] tracking-[0.14em] text-ink-muted">
            作废联 · VOID
          </span>
          <span className="font-mono text-[11px] text-ink-muted">{siteConfig.company.icp}</span>
        </div>
      </div>

      {/* 票身 */}
      <div className="flex flex-1 items-center justify-center px-6 py-16 md:px-10">
        <div className="relative w-full max-w-[560px]">
          {/* 作废章：盖在票据上沿，略微出框 —— 章本来就不会盖得端正 */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 right-6 z-10"
          >
            <span
              className="stamp-mark text-[clamp(1.5rem,5vw,2.25rem)]"
              data-stamped="true"
            >
              作废
            </span>
          </span>

          <span aria-hidden="true" className="rule-double block" />

          <div className="border-x border-rule px-8 py-12 text-center">
            <span className="field-label">错误代码 / CODE</span>
            <p className="font-mono text-[clamp(3.5rem,12vw,6rem)] leading-none text-ink">
              404
            </p>

            <p className="mt-6 font-body text-[15px] leading-relaxed text-ink-muted">
              您访问的页面不存在或已被移动。
            </p>
            <p className="mt-1 font-body text-[13px] leading-relaxed text-ink-muted">
              这张票据没有开出过 —— 请核对地址，或从首页重新进入。
            </p>

            <a href="/" className="act mt-8">
              返回首页
            </a>
          </div>

          <span aria-hidden="true" className="rule-double block" />
        </div>
      </div>

      {/* 票脚 */}
      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
        <div className="rule-t flex flex-wrap items-center justify-between gap-3 py-4">
          <p className="font-body text-[11.5px] text-ink-muted">
            © {year} {siteConfig.company.name}
          </p>
          <p className="font-mono text-[11px] text-ink-muted">
            记账联 · №&nbsp;HZSZ-{year}-404
          </p>
        </div>
      </div>
    </main>
  )
}
