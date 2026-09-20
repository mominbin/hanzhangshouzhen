'use client'

import { useInView } from './useInView'

/**
 * 合计 · 收口
 *
 * 票据的语法：合计紧接在行项表之后收口，不是放在页面最末。
 * 首版把合计放到 y≈2,880（行项表在 y≈1,000），相隔约 1,900px ——
 * 与「整屏一份票据」的方向契约相悖，已上移。
 *
 * 双线收口 → 合计落墨 → 监制章按下。顺序即这个动作本身：
 * 先有栏线，再填写，再盖章。
 */
export default function Totals() {
  const { ref, seen } = useInView<HTMLElement>('-6% 0px -10% 0px')

  return (
    <section
      ref={ref}
      data-reveal={String(seen)}
      aria-label="合计"
      className="mx-auto max-w-[1180px] px-6 md:px-10"
    >
      <div className="g-rule-double rv-rule" />
      <div className="grid grid-cols-1 gap-y-6 py-6 md:grid-cols-[1.8fr_1fr] md:items-center md:gap-x-10">
        <div className="rv-ink" style={{ '--i': 1 } as React.CSSProperties}>
          <span className="g-field-label">合计 / TOTAL</span>
          <p className="font-display text-[clamp(1.25rem,2.8vw,1.9rem)] leading-snug tracking-[-0.01em] text-on-ground">
            肆 项服务 · 贰 个已交付案例 · 肆 家云厂商背书
          </p>
        </div>
        <div className="md:text-right">
          <span
            className="g-field-label rv-ink md:text-right"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            监制
          </span>
          {/* 监制章在合计区进入视口时按下 —— 世界的原生动作。
              地面上取纸白（章红 on 棕红 仅 1.29:1，红压红看不见）。 */}
          <span className="g-seal seal-press text-[12px]" data-pressed={seen}>
            上海含章收珍 · 交付监制
          </span>
        </div>
      </div>
      <div className="g-rule-double rv-rule" style={{ '--i': 1 } as React.CSSProperties} />
    </section>
  )
}
