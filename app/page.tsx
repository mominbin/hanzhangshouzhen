import TicketHead from './components/TicketHead'
import LineItems from './components/LineItems'
import Delivered from './components/Delivered'
import Endorsements from './components/Endorsements'
import Supplier from './components/Supplier'
import Action from './components/Action'
import TicketFoot from './components/TicketFoot'

/**
 * 首页 —— 一份票据
 *
 * 阅读顺序即说服顺序，依 s0-brief 的信息优先级：
 *   能做什么（明细行项）→ 做过什么（已交付联次）→ 别人怎么说（签收意见）
 *   → 你是谁（供方信息）→ 怎么联系（开票动作）
 *
 * 原先把「关于我们」排在「他们信任我们」之前，与访客的决策顺序不一致，已调正。
 */
export default function HomePage() {
  return (
    <>
      <TicketHead />
      <main>
        <LineItems />
        <Delivered />
        <Endorsements />
        <Supplier />
        <Action />
      </main>
      <TicketFoot />
    </>
  )
}
