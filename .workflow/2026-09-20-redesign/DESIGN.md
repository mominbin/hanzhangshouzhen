---
name: 含章收珍 · 票据世界
description: 页面即一份正式商业凭证。纸面为地，票面棕红只作一条通栏；栏线建立秩序，零圆角、零阴影、零渐变。
colors:
  # ── 地面（纸）──
  paper: "#FDFCF9"
  paper-dark: "#1A1614"
  paper-sunk: "#F6F3EC"
  paper-sunk-dark: "#221D1A"
  # ── 命名材料：票面棕红（两主题同值）──
  band: "#8C3A1E"
  band-deep: "#6B2C15"
  # ── 通栏上的纸白 ──
  on-band: "#FDFCF9"
  on-band-dark: "#E9DECF"
  on-band-muted: "#EFD9CE"
  on-band-muted-dark: "#E2D0C0"
  # ── 纸面上的墨 ──
  ink: "#1C1A17"
  ink-dark: "#EDE7DC"
  ink-muted: "#5A544C"
  ink-muted-dark: "#A69C8E"
  # ── 栏线与控件边框 ──
  rule-color: "#D9D2C4"
  rule-color-dark: "#332E27"
  rule-strong: "#888886"
  rule-strong-dark: "#666668"
  row-hover: "#F2EDE2"
  row-hover-dark: "#241F1B"
  # ── 两枚专色 ──
  seal: "#C0271A"
  seal-dark: "#E8705F"
  vote: "#1B3A6B"
  vote-dark: "#8FB3E0"
  # ── 浏览器表面 ──
  selection-bg: "#8C3A1E"
  selection-bg-dark: "#E8705F"
  selection-fg: "#FDFCF9"
  selection-fg-dark: "#1A1614"
  caret: "#C0271A"
  caret-dark: "#E8705F"
  scrollbar-track: "#F6F3EC"
  scrollbar-track-dark: "#221D1A"
  scrollbar-thumb: "#C9BFAE"
  scrollbar-thumb-dark: "#4A4139"
typography:
  display:
    fontFamily: "Songti SC, SimSun, Noto Serif SC, Source Han Serif SC, serif"
    fontSize: "clamp(1.4rem, 4.4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Songti SC, SimSun, Noto Serif SC, Source Han Serif SC, serif"
    fontSize: "clamp(1.25rem, 2.6vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.7
  title:
    fontFamily: "Songti SC, SimSun, Noto Serif SC, Source Han Serif SC, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "PingFang SC, HarmonyOS Sans SC, Microsoft YaHei, Noto Sans SC, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  caption:
    fontFamily: "PingFang SC, HarmonyOS Sans SC, Microsoft YaHei, Noto Sans SC, system-ui, sans-serif"
    fontSize: "12.5px"
    lineHeight: 1.625
  label:
    fontFamily: "PingFang SC, HarmonyOS Sans SC, Microsoft YaHei, Noto Sans SC, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.08em"
  numeric:
    fontFamily: "JetBrains Mono, SF Mono, Consolas, Courier New, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  none: "0"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s6: "24px"
  s8: "32px"
  s12: "48px"
  s16: "64px"
  s24: "96px"
  s32: "128px"
components:
  ticket-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.on-band}"
    padding: "28px 24px 20px"
    rounded: "{rounded.none}"
  button-primary:
    backgroundColor: "{colors.seal}"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#A31F14"
  button-primary-dark:
    textColor: "{colors.paper-dark}"
  button-primary-hover-dark:
    backgroundColor: "#F08A79"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-quiet-hover:
    backgroundColor: "{colors.row-hover}"
  field-input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px"
    width: "100%"
  field-label:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  line-item-row:
    textColor: "{colors.ink}"
    padding: "16px 0"
    rounded: "{rounded.none}"
  line-item-row-hover:
    backgroundColor: "{colors.row-hover}"
  seal:
    backgroundColor: "transparent"
    textColor: "{colors.seal}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
    size: "12px"
  stamp-mark:
    backgroundColor: "transparent"
    textColor: "{colors.seal}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
    size: "12px"
  void-ticket:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "48px 32px"
    width: "560px"
---

# Design System: 含章收珍 · 票据世界

## Overview

**Creative North Star: "这张票被打印出来，然后被填写、盖章、核销。"**

页面本身就是一份正式商业凭证。它拒绝本品类默认的那个排布 —— 深色底、紫蓝渐变、发光边缘、居中大标题、四张等大服务卡、logo 墙（S1 的方向契约 THESIS 逐条写明要删的就是这些）。留到纸面上的东西必须像票据一样可核验：每一项服务是一个字段，每一行有栏线，每一个数字有出处。

**纸面为地，棕红只作一条通栏。** `#8C3A1E` 在这个世界里是**命名材料** —— 票面本身，不是可自由分配的主题色。它只出现在一条通栏里，承载开票方与栏目索引；页面地面是纸白。中途曾按「整页由单一材料色域占满」的判定把整页地面翻成棕红，用户看过产物后定调「棕红是一条通栏 更符合我的审美」，改回的提交是 `ff1d4b2`。**用户定调优先于任何判定与契约草案。**

票面密度高、留白少：秩序由栏线建立，不靠空白。零圆角、零阴影、零渐变是法规级的三条 —— 产物里可以逐条验尸（CSS 中 `border-radius` 只出现三处显式的 `0`；`box-shadow` 只出现在 Tailwind preflight 的 `:-moz-ui-invalid{box-shadow:none}`；`gradient` 字样只来自 Tailwind 的 `--tw-gradient-*` 变量声明，没有一条实际渐变）。

### 动效论文

世界的原生动作是：**这张票被打印出来，然后被填写、盖章、核销。** 动效只承担这一套动作，不承担「入场好看」。

- **首屏打印序列**：`print-wipe`（950ms，棕红通栏自左向右显影）→ `rule-draw`（760ms，购方栏底边绘制进来）→ `type-in`（760ms `steps()`，日期与票号逐字打出，针式打印机的读法）。
- **下方板块滚动揭示**：`rv-ink`（落墨，离焦到清晰）+ `rv-rule`（栏线绘制），由 `useInView` 的 IntersectionObserver 触发，同一板块内用 `--i` 以 110ms 错开。
- **章**：`stamp`（820ms 核销章落章）→ `ink-spread`（900ms 墨晕，延迟 300ms）；`seal-press`（680ms 监制章按下）；`ink-flash`（900ms 复制反馈）。
- **降级三层，缺一层都不算完成**：① `@media (scripting: none)` —— 脚本禁用时印章与揭示态直接可见；② `@media (prefers-reduced-motion: reduce)` —— 位移与缩放全降级，状态信息保留；③ `RevealBoot` 1.8s 失效保护 —— 覆盖「脚本可解析但执行失败」（包 404、解析错误、网络中断），此时 `<head>` 里撤下 `.js-reveal`，内容全部可见。
- 缓动唯一：`cubic-bezier(0.16, 1, 0.3, 1)`（`--ease`）。只动 `transform` / `opacity` / `clip-path` / `filter`。无动效库 —— IntersectionObserver + CSS keyframes。

**Key Characteristics:**
- 纸面为地，棕红只此一条通栏，承载开票方与栏目索引
- 零圆角、零阴影、零渐变；深度与秩序都由 1px 栏线画出来
- 宋体标题 / 黑体正文 / 等宽数字，三个声部
- 全站唯一实心按钮：合计区的「立刻咨询」（章红填充）
- 两枚专色各有名分：监制章红（纸面）、抵扣联蓝（案例链接）
- 11px 字段名命名字段，不承担装饰；数字一律等宽
- 404 是一张作废票据，不是通用错误页

## Colors

一张纸、一条棕红通栏、两枚专色 —— 色域窄，名分严。

### Primary

- **票面棕红（Named Material）** (`#8C3A1E`，两主题同值；深一档 `--band-deep` `#6B2C15` 供双线与悬停): 只用于**一条通栏**（票头，承载开票方与栏目索引）与由它派生的收口双线。它是材料，不是主题色：不能拿去刷按钮、刷大段背景、撒在纸面上当装饰。通栏上的字取 `--on-band`（7.47:1）与 `--on-band-muted`（5.65:1）；暗色主题下通栏同为 `#8C3A1E`，字换 `#E9DECF` / `#E2D0C0`（5.77:1 / 5.12:1，见 `.impeccable/review/detect.json`）。

### Secondary

- **监制章红** (`#C0271A` 亮 / `#E8705F` 暗): 印章的本色，也是全站唯一被允许的实心填充色。四份差事：监制章与核销章的描边和文字（5.77:1 / 5.92:1）、**纸面上的焦点环**（`--seal`，5.77:1 / 5.92:1）、票眉上的电话链接、caret。白字压它 5.92:1（主行动按钮自带底色，故可用）。

### Tertiary

- **抵扣联蓝** (`#1B3A6B` 亮 / `#8FB3E0` 暗): 只有一份差事 —— 明细行项里的「参考案例」链接（10.98:1 / 8.29:1）。它叫抵扣联蓝，因为发票的抵扣联是蓝色的；名分之外不添用途。

### Neutral

- **纸** (`--paper` `#FDFCF9` / `#1A1614`): 页面地面。两主题都是暖色纸 —— 亮色不是纯白，暗色不是蓝黑（「夜里的账房」）。
- **下沉面** (`--paper-sunk` `#F6F3EC` / `#221D1A`): 刻下去一层的面。当前只服务浏览器表面（滚动条轨道）。
- **墨** (`--ink` `#1C1A17` / `#EDE7DC`): 纸面上的正文与标题。16.92:1 / 14.60:1。
- **次级墨** (`--ink-muted` `#5A544C` / `#A69C8E`): 字段名、说明、票脚。7.29:1 / 6.65:1。
- **栏线** (`--rule-color` `#D9D2C4` / `#332E27`): 1px 装饰性分栏线，不承担控件识别，不受 WCAG 1.4.11 约束。
- **控件边框** (`--rule-strong` `#888886` / `#666668`): 输入框、次级按钮、签字线、票眉下划线。3.46:1 / 3.14:1 —— 达 1.4.11 的 3:1。
- **行悬停** (`--row-hover` `#F2EDE2` / `#241F1B`): 行项与备注事项的 hover 底色。
- **通栏纸白两阶** (`--on-band` `#FDFCF9` / `#E9DECF`，`--on-band-muted` `#EFD9CE` / `#E2D0C0`): 只准用在棕红通栏之内，出通栏即失效（纸面上另有墨色）。
- **浏览器表面**: 选中 `#8C3A1E` + `#FDFCF9`（暗色 `#E8705F` + `#1A1614`）、光标章红、滚动条轨道取下沉面、滑钮 `#C9BFAE` / `#4A4139`。世界管到浏览器自己的家具。

### Named Rules

**命名材料律。** 棕红是票面材料，不是可自由分配的主题色。它是**一条通栏**，不是地面，也不是点缀 —— 这三种用法只有通栏成立，另两种都被否过。

**两枚专色律。** 印章红与抵扣联蓝各有名分，不互换、不混用、不添第三枚。红是盖章与行动的颜色，蓝是「指向别处」的颜色。

**过地换色律。** 章红在纸面上可作文字、描边、填充、焦点环；一到棕红通栏里就一律不可用（章红 on 棕红仅 1.29:1）。通栏之内的焦点环必须改取 `--on-band` —— 曾一度全站取章红而地面是棕红，15 个可聚焦元素里 6 个焦点环隐形。

**唯一实心律。** 全站只有一枚填充实心红：合计区的「立刻咨询」。其余行动一律描边（`.act-quiet`）。

## Typography

**Display Font:** Songti SC（回退 SimSun / Noto Serif SC / Source Han Serif SC，serif）
**Body Font:** PingFang SC（回退 HarmonyOS Sans SC / Microsoft YaHei / Noto Sans SC，system-ui，sans-serif）
**Label/Mono Font:** JetBrains Mono（回退 SF Mono / Consolas / Courier New，monospace）

**Character:** 宋体是中国官方票据的标题字体 —— 这是行业事实，不是平台默认回退。它的横细竖粗与大字面把「票头的开票方」读成公文，而不读成网站 hero。正文换黑体承担可读性，票号、日期、序号一定走等宽，tabular-nums 全局打开（`body { font-variant-numeric: tabular-nums }`）。三族字体都是系统栈，全站不加载任何 Web 字体（Google Fonts 在国内不可达；理由见附录 A.2）。

**字重上很克制**：标题一律 400 —— Tailwind preflight 把标题的 `font-size` / `font-weight` 设为 `inherit`，层级由**字体族 + 字号 + 字距**建立，不靠加粗。全站只有 `.act` / `.act-quiet` 用 600。

### Hierarchy

- **Display** (400, `clamp(1.4rem, 4.4vw, 3rem)`, 1.2, 字距 -0.02em): 票头的公司全称（h1），宋体。移动端下限 1.4rem 是算过的：390px 屏 14 字 × 22.4px = 313px，容得进 342px 容器，「司」不会被孤到第二行（实测移动端 1 行 @22.4px）。
- **Headline** (400, `clamp(1.25rem, 2.6vw, 1.75rem)`, 行高随 body 1.7): 板块标题（h2）与合计行的大写金额。字号停在 1.75rem —— 票面不是海报。
- **Title** (400, 18px 桌面 / 17px 移动, 1.375): 明细行项的项目名；联次与供方名称用 `clamp(1.05rem, 2vw, 1.3rem)`；备注事项的条目名 16px。
- **Body** (400, 16px, 1.7): 全站基准。段落实际取 13.5–15px 并配 `leading-relaxed`（1.625）；行宽用 `max-w-[52ch]`–`[70ch]` 收住（正文段 52–62ch，说明段 40–70ch）。
- **Caption** (12–12.5px, 1.625): 票据说明、备案、注解。正文的下限在这里，票脚与版权另有 11.5px。
- **Label** (400, 11px, 字距 0.08em, 墨次级): 字段名。票眉另用 0.14em（联次、票号、开票方/ISSUER）。
- **Numeric** (400, 11–20px, 等宽): 票号、日期、备案号、行项序号（13px）、联次序号（20px）、合计。等宽是数字的制服。

### Named Rules

**三声部律。** 宋体负责标题与票面大字，黑体负责正文，等宽负责一切数字与票号。三者不换班 —— 数字用宋体会读成印刷品，正文用等宽会读成终端的截图。

**字段名律。** 11px 小字必须是**某个字段的名字**，紧跟它命名的值。本世界用字段名建立结构，不用装饰性 kicker —— 票头那条「开票方 / ISSUER」坐在 h1 之上，它仍然是字段名，因为它命名的值就是公司全称本身。一个没有值的字段名就是 kicker，不许出现。

**等宽数字律。** 数字一律等宽 + `tabular-nums`。票据靠列对齐，不靠字体美观。

## Layout

内容容器是 **1180px**（`max-w-[1180px]`，全站每一节共用），左右内边距 `px-6`（24px）/ `md:px-10`（40px）。旧稿写的 `1152px`（`max-w-6xl`）从未出现在产物里。

**间距刻度**：`--s1` 4 / `--s2` 8 / `--s3` 12 / `--s4` 16 / `--s6` 24 / `--s8` 32 / `--s12` 48 / `--s16` 64 / `--s24` 96 / `--s32` 128（`globals.css` 的 `:root`；组件里用等值 Tailwind 工具类）。刻度上还有 2px 半步（`py-2.5` = 10px、`gap-y-1.5` = 6px、`mt-0.5` = 2px），实测共 6 处，全部落在票眉、印章与签字线旁的微调 —— 允许，但只在票据家什上。

**没有全站栅格。** 12 栏 + 24px gutter 这类抽象栅格在本产物里不存在；每一节按自己的功能拿列比，同一套栏线把它们缝成一份票据：

- 明细行项：`[64px_1fr_2fr_1.1fr]`（序号 / 项目 / 交付内容 / 参考案例）
- 已交付联次：`[76px_1fr_1.5fr_auto]`（联次 / 项目 / 交付 / 附件与核销章）
- 合计：`[1.8fr_1fr]`　·　备注栏：`[1.4fr_1fr]`　·　供方信息：`[1fr_1.3fr]`　·　签收意见：两等栏
- 购方栏：`md:grid-cols-[1.6fr_1fr_1fr]`（购方名称 / 开票日期 / 服务项目）

**断点**：主切换在 `md`（768px）—— 表头出现、行项从堆叠变四栏、两栏变并置；`sm`（640px）只做一件事：收起票号。门禁量过 375 / 768 / 1440 三档，实测 390px 首屏 h1 单行、首页与 404、桌面与移动**横向溢出均为 0px**。

**节奏**（实测，全部落在 4px 刻度上）：板块标题 `pt-12 md:pt-16`（48 / 64px）+ `pb-3`；行项 `py-4`；联次 `py-6 md:py-7`；通栏 `pt-7 pb-5` / `md:pt-8 md:pb-6`（28/20、32/24px）；票据说明段 `py-8 md:py-10`。整页是一份连续的票，不是一摞卡片。

### Named Rules

**栏线秩序律。** 秩序由栏线建立，不靠留白。要分隔就先考虑加一条线（`.rule-b`），再考虑加一片空；票面密度高是这个世界的优点，不是要修的毛病。

**单一容器律。** 每一节都坐在同一个 1180px 容器里，栏线因此能首尾对齐、连成票面。不要为一个板块另开一个宽度。

**三边律。** 栏线只有 `.rule-t` / `.rule-b` / `.rule-l` 三条边 —— **没有 `.rule-r`**。它们是普通 CSS 类，不是 Tailwind 工具类：`md:rule-r` 这类写法静默失效（评价区两栏的分隔线曾因此从未渲染过一条，直到改用 `md:border-r md:border-rule`）。需要按断点变化时，用 Tailwind 工具类。

## Elevation & Depth

**本系统没有阴影，也不应该有。** 深度是**画**出来的，不是投出来的，全部靠四样东西：① 1px 栏线（`--rule-color`）在纸面上切出栏位；② 双线收口 `.rule-double` —— 两条 1px 的 `--band-deep` 夹住 5px 高度，票据的上下夹口与合计的收口都用它；③ 面层差（`--paper` / `--paper-sunk` / `--row-hover`）—— 同一张纸上略深的一档；④ 印章的旋转叠压 —— 章是压上去的，所以它有角度、有墨晕、有按下的一拍。

产物层面可以验：导出的 CSS 里 `box-shadow` 只出现在 Tailwind preflight（`:-moz-ui-invalid{box-shadow:none}`），没有任何一条设计用阴影；`gradient` 字样只来自 Tailwind 的 `--tw-gradient-*` 变量声明，没有一条实际渐变。404 的作废章起手帧 `scale(2.6)` 会把看不见的一帧顶出布局，用 `[overflow-x:clip]` 在页面边界裁掉装饰性外溢（用 `clip` 不用 `hidden`，不产生滚动容器）。

### Named Rules

**平压律。** 深度是画出来的，不是投出来的。要分层就画线、换纸色、盖章 —— 不加阴影、不加模糊、不加玻璃。

**起手帧律。** 动画的起手帧也会撑开布局（`opacity: 0` 的元素照样占据可滚动溢出区）。任何带 scale/位移的入场帧，先想它在最窄视口里把什么顶出去了。

## Shapes

**直角律，无例外。** 全站圆角 0（实测含 404）；`border-radius: 0` 在产物 CSS 里恰好出现三处：`.act` / `.act-quiet` / `.input`，其余元素根本不需要声明。没有 `rounded-full`，没有胶囊，没有圆形头像位。

边框一律 1px solid：栏线用 `--rule-color`，控件与签字线用 `--rule-strong`（1.4.11 需 ≥3:1），双线收口用 `--band-deep`。票据的边缘由栏线夹住 —— 404 的票身就是左右 `border-x` + 上下 `rule-double` 的夹票。

**唯一的非正交几何属于印章**：监制章 `rotate(-3.5deg)`，核销章 `rotate(-7deg)`（`stamp` 的关键帧从 -16deg 落到 -7deg，读作手压下去）。章不会盖得端正，所以它歪着；除此之外，页面里一切皆正。

**空白即栏线**：购方名称那一栏没有填内容，字面写着「此处开给贵司」，下面是一条 `--rule-strong` 的横线 —— 空白字段就用空栏线表达，这是票据本来的样子。签收意见的「签字 / 日期」同理：一条 104px 的短线，后面留白。

### Named Rules

**直角律。** 圆角不属于这个世界。检验一个新构件的办法：把它所有圆角改成 0，若它因此更像票据，那它就还没写完。

**印章特权限。** 只有印章能歪。旋转数值是固定的（-3.5° / -7°），不要在别处借用角度。

## Components

### 棕红通栏（`.band` / TicketHead）

票面的命名材料，全站唯一一条。底色由 `.band` 这条 CSS 规则提供（组件里写 `className="band on-band"`，**没有 `bg-*` 工具类** —— 曾漏掉这条规则，通栏一直是透明的，连带栏内文字对比度与焦点环全部失去参照色）。内含开票方（字段名 + h1 + 一句自述）与栏目索引，`pt-7 pb-5 / md:pt-8 md:pb-6`，`print-wipe` 950ms 显影。它 `overflow-hidden`，给打印序列收边。

### 按钮

- **Shape:** 直角（`border-radius: 0`），padding `12px 24px`（`--s3 --s6`），字号 16px、字重 600。
- **Primary（`.act`，全站唯一）:** 章红填充 + 白字（暗色主题改 `#1A1614` 字与 `#F08A79` 悬停底）。hover `#A31F14`，active `translateY(1px)`，200ms `--ease`。复制成功时 `ink-flash` 900ms（章红 → 深棕 → 章红）。
- **Secondary（`.act-quiet`）:** 描边不填充 —— `1px --rule-strong`、墨色文字；hover 底色 `--row-hover` 且边框转 `--band-deep`；`data-copied='true'` 时描边与文字转章红。世界里只允许一个高饱和实心红，那一席归「立刻咨询」。
- **Focus:** 纸面上 `outline: 2px solid var(--seal)`（offset 1px）；通栏内 `outline-color: var(--on-band)` —— 两处都必须可见。

### 输入 / 字段

- **Style:** `.input` 纸面底、`1px --rule-strong` 边框、直角、padding 12px、`font: inherit`；hover 边框转 `--band-deep`。
- **Focus:** `outline: 2px solid var(--seal)`（offset 0）+ 边框转章红。
- **字段名（`.field-label`）:** 11px、0.08em 字距、`--ink-muted`、块级、下边距 4px。它是这个世界的结构装置：每一个字段名下面都必须坐着它命名的值。

### 导航（栏目索引 + 明暗切换）

- 通栏里的栏目索引：13px 黑体、`--on-band-muted` 文字配 40% 同色下划线，hover 转 `--on-band`；点击 `scrollIntoView({behavior:'smooth'})`；`class="no-print"`，打印时不出现。
- 明暗切换：11px 等宽的分段控件（「明 / 暗」两格），1px `--on-band-muted/60` 外框，选中格用 `--on-band` 底 + `--band` 字。**不用图标** —— 控件用文字直说自己的动作；它有 76×18px 的占位符防挂载前跳动。

### 行项（LineItems / Delivered / Supplier 备注事项）

页面的视觉锚点：四项服务是**四行行项**，不是四张等大卡片。`.rule-b` 收每一行，`py-4`（联次 `py-6/7`），hover 底色 `--row-hover`，序号等宽右对齐，末尾列是真链接（蓝）或一个破折号。移动端改字段堆叠，栏线照留 —— 堆叠也不许散架。

### 印章

- **监制章（`.seal`）:** 2px 章红描边 + 章红文字 + 宋体 + 0.12em 字距 + `rotate(-3.5deg)`，`8px 12px` 内边距；进入视口时 `seal-press` 680ms 按下（1.75 → 0.93 → 1.02 → 1 倍缩放）。
- **核销章（`.stamp-mark`）:** 3px 章红描边 + 宋体 + `rotate(-7deg)` + `8px 16px`；初始 `opacity: 0`（在 `.js-reveal` 之外可见），`data-stamped='true'` 时落章，随后 `::after` 的 `inset: -6px` 内缩描边做 `ink-spread` 墨晕。已交付的联次不消失，只被核销章覆盖过去。

### 404 = 作废票据（signature）

这个世界处理「这张票据无效」的原生手势是盖作废章，所以 404 就是一张被作废的票据，不是通用错误页：票眉「作废联 · VOID」+ 备案号 → **作废章**（`-top-4 right-6`，`clamp(1.5rem, 5vw, 2.25rem)`，旋转出框，章本来就不会盖得端正）→ 上 `rule-double` 夹口 → 票身（左右 `border-x`、`px-8 py-12`、居中；字段名「错误代码 / CODE」+ 等宽 `clamp(3.5rem, 12vw, 6rem)` 的 404 + 两句说明 + `.act` 返回首页）→ 下 `rule-double` 夹口 → 票脚「记账联 · № HZSZ-2026-404」。实测：对比度 16.92:1 / 14.60:1，作废章 5.77:1 / 5.92:1，圆角 0px。它不属于通用模板 —— 新页面遇到「不存在」时照抄的是**这个手势**，不是这个版式。

## Do's and Don'ts

### Do:

- **Do** 把棕红当**一条通栏**用：它承载开票方与栏目索引，`#8C3A1E` 两主题同值。
- **Do** 把新构件放进 1180px 容器与 4px 刻度里（`--s1`–`--s32`），栏线对齐票面。
- **Do** 用字段名（`.field-label` 11px）命名每一个值；每个字段名紧跟它命名的值。
- **Do** 数字一律等宽 + `tabular-nums`；序号用 `String(i+1).padStart(2,'0')` 补零。
- **Do** 在棕红通栏内取 `--on-band` / `--on-band-muted`，焦点环取 `--on-band`；在纸面上焦点环取 `--seal`。
- **Do** 新增揭示动效时用 `rv-ink` + `rv-rule` + `useInView`，并以 `--i` 以 110ms 错开；同时保证三层降级（`scripting: none`、`prefers-reduced-motion`、`RevealBoot` 1.8s）都覆盖得到。
- **Do** 把 11–11.5px 限制在票据家什（票眉、字段名、票脚）里；正文不小于 12.5px。
- **Do** 出具门禁证据时扫 `out/_next/static/css/*.css`（`impeccable detect` 只解析内联样式，对 Next 静态导出的 HTML 是盲的），并先跑阳性对照再采信阴性结果。

### Don't:

- **Don't** 把棕红铺成整页地面或大面积面板 —— 那是被用户否过的形态（提交 `ff1d4b2` 之前的状态）。
- **Don't** 在棕红通栏上使用章红作文字、描边或填充（1.29:1，看不见）。
- **Don't** 给任何东西加圆角、阴影、渐变、模糊或玻璃 —— 三条法规各自可在产物里验尸。
- **Don't** 引入图标（本仓零图标，无 lucide 依赖）或把 Unicode 字形当图标用。
- **Don't** 给 `.rule-*` 这类普通 CSS 类加 `md:` / `sm:` 前缀（静默失效）；需要断点变化时用 Tailwind 工具类。
- **Don't** 假设 `.rule-r` 存在 —— 只有 t / b / l 三条边。
- **Don't** 在同一个元素上同时放静态边框和动画绘制线（会叠成双线，且动效因首帧已在而完全不可见）。
- **Don't** 新开第二种动效语言：不打 bounce / elastic，不引入动效库，不让非印章的元素旋转。
- **Don't** 用字段名做装饰 —— 没有值的 label 就是 kicker，这个世界不收。
- **Don't** 用 CSS 变量间接声明来让检测器闭嘴（`impeccable detect` 不解析 `var()`，看不见不等于没有）。

---

## 附录 A · 历史决策记录（S1，作于票据世界诞生之前）

> 这两节写于 2026-09-20 的 S1 阶段，**描述的是当时拟采用的视觉系统，该系统后来从未被构建**（票据世界在同一天稍后诞生，见提交 `4dc9f10` → `ff1d4b2`）。保留它们，因为方法是有效的、且仍在产物里生效；但它们不是本设计系统的描述，不得据以还原配色与版式。

### A.1 变体选型依据（13 选 1）

从 13 个变体中选定 `taste-skill` v2（主方案）+ `redesign-skill`（审计清单）+ `output-skill`（输出纪律），理由均为可核对项：

- **受众对得上**：唯一为「给决策者看的可信站」预设档位的变体（trust-first / regulated / accessibility-critical）。
- **双模式对得上**：其 Dark Mode Protocol 与项目既有的 `next-themes` class 策略同构 —— 这条最终在产物里兑现（`defaultTheme="dark"`、`.dark` 覆盖整组 token）。
- **约束无硬违规**：其 Lucide 豁免口对本项目成立（当时已装 `lucide-react`）。
- **唯一覆盖 SEO 的变体**：把 "SEO baseline" 列为重设计审计项并定性「SEO migration is the #1 redesign risk」。本项目主流量来自百度 —— 这条仍然决定性。
- **唯一有 WCAG 数值的变体**：能与 `impeccable detect` 门禁对接。

**已排除**（逐文件实读后判定）：`taste-skill-v1`（硬性要求特定图标库）、`gpt-tasteskill`（强制 GSAP + 首选暗色径向渐晕，正是要删的那类）、`soft-skill`（首选原型 "Ethereal Glass" 就是本次要拆掉的那套；且假定商用字体可用）、`brutalist-skill`（禁双模式；全大写排版在中文不成立）、`minimalist-skill`（零 dark mode 提及）、`imagegen-*` / `brandkit` / `image-to-code-skill`（本机无图像生成工具）、`stitch-skill`（前置条件不满足）。

**仍然有效的两条遗产**：① 不引入动效库（产物兑现：IntersectionObserver + CSS keyframes，全仓无 `framer-motion` / `motion/react` 引用）；② 图标为零（当时的豁免口最终未被使用）。

### A.2 CJK 字体论证

经逐文件核实：**全部 13 个变体零 CJK 指引**，字体建议全是拉丁（Geist / Outfit / Satoshi / Cabinet Grotesk），其中 Geist 正是本项目已被判定「用滥」的那个。

**实测发现：Geist 是死声明。** 旧 `tailwind.config.ts` 把 `'Geist'` 列在字体栈首位，但项目内无字体文件、无 `@font-face`；`fonts.googleapis.com` / `fonts.gstatic.com` 均不可达（HTTP 000），`next/font/google` 会在构建时失败。浏览器实测（canvas 宽度比对）：`"Geist"` 与 `sans-serif` / `PingFang SC` / `Microsoft YaHei` 完全同宽 —— 它从未被渲染。

**结论已被产物承接的两条**：① 系统字体栈，不加载任何 Web 字体（百度来的首屏最快，且规避不可达域名）；② 不引入拉丁显示字体（中文站点的标题以汉字为主，拉丁只在数字与术语里出现）。

**未承接的一条**：旧稿写「标题与正文同族，靠字重与字号拉开层级」——产物反过来，用了**三个声部**（宋体标题 / 黑体正文 / 等宽数字），因为中国官方票据的标题字体本就是宋体。字重这条则被保留得更极端：标题一律 400，靠字体族与字号建立层级。

### A.3 旧 DESIGN.md 与产物的冲突（本文件已按产物重写）

| 旧稿写的 | 产物实际 | 状态 |
|---|---|---|
| `max-w-6xl` = 1152px 内容宽度 | `max-w-[1180px]`，全站每一节 | 已按产物更正 |
| 12 栏网格 + 24px gutter | 无全站栅格；每节按功能给列比 | 已按产物更正 |
| 间距刻度 4/8/12/16/24/32/48/64/96/128，禁任何刻度外值 | 同刻度（`--s1`–`--s32`），另有 6 处 2px 半步用于票眉/印章微调 | 已按产物放宽 |
| 板块留白 桌面 96 / 平板 72 / 移动 56px；密度「舒适档」 | `pt-12 md:pt-16`（48/64px）+ 高密度票面 | 已按产物更正 |
| 画布 `#FAFAF8` / `#0C0C0E`，强调色靛青 `#0F766E` | 纸 `#FDFCF9` / `#1A1614`，棕红通栏 `#8C3A1E` + 两枚专色 | 整体替换（`0F766E` 在产物中 0 次） |
| 圆角 6px（控件）/ 10px（卡片） | 全站 0px（含 404） | 已按产物更正 |
| 卡片 hover 阴影 `0 2px 8px rgba(0,0,0,.05)` | 零阴影（preflight 之外无一条） | 已按产物更正 |
| 图标 `lucide-react`、`strokeWidth 1.75` | 零图标、零图标依赖 | 整体替换 |
| 动效：`translateY(12px)+opacity` 600ms 入场，缓动 `.16,1,.3,1` | 缓动沿用；剧目换成打印/落墨/盖章/核销 + 三层降级 | 部分沿用 |
| 主导航文案与锚点冻结（SEO） | 栏目索引锚点 `#hero` `#services` `#projects` `#about` `#contact` | 沿用 |
| 控件边框 `#888886` / `#666668`（1.4.11 达标） | 以 `--rule-strong` 之名原值保留（3.46:1 / 3.14:1） | **唯一被完整承接的色值** |
| 装饰分割线 `#E3E2DD` / `#26262A` | 栏线改为 `--rule-color` `#D9D2C4` / `#332E27` | 已按产物更正 |
| 板块顺序 Hero → Services → Projects → Testimonials → About → Contact | 票头通栏 → 购方栏 → 明细 → **合计** → 已交付 → 签收意见 → 供方信息 → 备注栏/开票动作 → 票脚 | 顺序沿用，插入票据语法所需的合计收口 |
| 断点门禁 375 / 768 / 1440 | 门禁实跑 390 / 768 / 1440（移动基准取 390） | 已按产物更正 |
| `Stats.tsx` 是死代码，缺口上报用户 | `Stats.tsx` 已不存在；页面不呈现团队规模与年限 | 已消灭 |

## 附录 B · 门禁证据与方法学

### B.1 方法学（`impeccable detect` 对静态导出是盲的）

`impeccable detect` 只解析内联样式。Next.js 静态导出把 CSS 放在外部文件 `out/_next/static/css/1a32a31dce0c5168.css` 里，所以扫 `out/` 目录或 `out/index.html` 得到的是**假阴性** —— 零发现只说明它没看见样式，不说明产物干净。**构建产物的门禁必须单独扫那个 CSS 文件。**

**阴性结果必须配阳性对照**：先拿必然违规的文件证明检测器在工作。本次两组对照 —— 故意违规的内联 `<style>` 文件报出 8 条（`gradient-text`×2、`low-contrast`×2、`overused-font`、`flat-type-hierarchy`、`skipped-heading`、`ai-color-palette`）；故意违规的外部 `.css` 文件报出 1 条（`gradient-text`）。两组都响，才采信产物那侧的 0 条。

### B.2 本次扫描结果（`.impeccable/review/detect.json`）

| 目标 | 结果 |
|---|---|
| `out/_next/static/css/1a32a31dce0c5168.css` | 0 条 |
| `out/index.html` | 0 条 |
| `out/404.html` | **2 条 `tiny-text`（未抑制）** |

### B.3 残留警告：2 条 `tiny-text`，判为非阻塞（如实记录，未做任何 suppress）

- 位置：`out/404.html` 的 11.5px（版权行）与 11px（记账联 · № HZSZ-2026-404 票脚）。
- 记录未做任何抑制：没有使用 ignore、没有为此改值规避、没有把它写进配置藏起来。
- 判为非阻塞的理由：这两处是票眉/票脚的习惯字号 —— 同一套 11px 字段名与票眉在主站出现 19 处，而 `detect` 在主站报 0 条，检测器在同类用法上的判定本身不一致；且 404 的正文（说明句）为 15px / 13px，不依赖该字号。**记录 ≠ 认可**：这个字数值是按产物登记的，不是为让发现消失而立的规则。
- 结论上报：作为非阻塞警告保留在证据里。

### B.4 `detect` 抓不到、需人工/脚本量测的项目

| 项 | 实测 |
|---|---|
| 通栏底色 | `rgb(140, 58, 30)` —— 通栏存在且非透明 |
| h1 on 通栏 | 7.47:1（亮）/ 5.77:1（暗） |
| 栏目索引 on 通栏 | 5.65:1（亮）/ 5.12:1（暗） |
| 焦点环在通栏内 | 5.65:1 / 5.12:1（取 `--on-band`） |
| 焦点环在纸面 | 5.77:1 / 5.92:1（取 `--seal`） |
| 评价区两栏分隔线 | 1px 已渲染（此前因 `md:rule-r` 无效而从未渲染） |
| 购方栏底边 | 1px 单线（此前静态边框与动画线叠成 2px） |
| 圆角 | 全站 0px（含 404） |
| 移动端 h1 | 1 行 @ 22.4px，无孤字 |
| 横向溢出 | 首页与 404、桌面与移动均 0px |
| 404 | 正文 16.92:1 / 14.60:1；作废章 5.77:1 / 5.92:1；圆角 0px |

复现：`python -m http.server 8899 --directory out`，再用无头 Chromium 读 `getComputedStyle` 的渲染色；或直接扫 `out/_next/static/css/*.css`。
