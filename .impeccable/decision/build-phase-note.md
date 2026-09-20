# build-phase 状态机为何不适用

`build-phase start` 的调用方式记载在 new-work.md 的 **Comp-led** 章节下，它是 comp-led 路径的状态机。
本次是 **code-led**（用户在方向轮决策页选择 `buildPath: "code"`），且本机无图像生成工具与 API key，
comp 物理上无法生产。

new-work.md 对 code-led 的原文规定：

> **Code-led**: no comp of this page and no apology for it; the QUALITY BAR boards
> still calibrate finish, and the ambition moves into the written contract, the
> FIRST VIEWPORT block plus a named signature interaction and motion grammar,
> which the finish reviewer audits in behavior.

以及：

> On a code-led build the comp round is skipped by contract, never by drift:
> the ambition it would have carried lives in the direction contract's FIRST
> VIEWPORT block and named signature interaction.

`advance --force` 被正确拒绝——规则写明「缺工具、做不到」不构成降级 comp 权威的理由。
两者并不矛盾：force 是给「用户用言语降级 comp 权威」用的，而 code-led 是**从未进入该路径**。

故：状态文件移至本目录存档，不删除（留痕）。野心由 surface brief 的
FIRST VIEWPORT 块 + 具名招牌交互 + 动效语法承载，由 finish review 按行为审计。

surface brief: `.impeccable/surfaces/app-page-tsx.md`
seed key: `4d45f41c`
