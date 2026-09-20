import TicketHead from './components/TicketHead'
import LineItems from './components/LineItems'
import Totals from './components/Totals'
import Delivered from './components/Delivered'
import Endorsements from './components/Endorsements'
import Supplier from './components/Supplier'
import Action from './components/Action'
import TicketFoot from './components/TicketFoot'

/**
 * 首页 —— 一份票据
 *
 * 顺序依票据的语法与 s0-brief 的信息优先级：
 *   能做什么（明细行项）→ 合计收口 → 做过什么（已交付联次）
 *   → 别人怎么说（签收意见）→ 你是谁（供方信息）→ 怎么联系（开票动作）
 *
 * 合计紧接明细表，不放在页末 —— 那是票据收口行项的位置。
 * 首版把它放到约 1,900px 之外，与「整屏一份票据」的方向契约相悖。
 */
export default function HomePage() {
  return (
    <>
      <TicketHead />
      <main>
        <LineItems />
        <Totals />
        <Delivered />
        <Endorsements />
        <Supplier />
        <Action />
      </main>
      <TicketFoot />
    </>
  )
}
