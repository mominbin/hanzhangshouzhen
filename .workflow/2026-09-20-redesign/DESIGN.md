# DESIGN.md · 视觉系统定义

| | |
|---|---|
| **run-id** | `2026-09-20-redesign` |
| **轨道** | 轨 B · Next.js 静态导出 |
| **依据** | `s0-brief.md`（S0 产出） |
| **风格变体** | `taste-skill` v2（主方案）+ `redesign-skill`（审计清单）+ `output-skill`（输出纪律） |
| **日期** | 2026-09-20 |

---

## 0. 变体选型依据

13 个变体中选定 **`taste-skill` v2**，理由均为可核对项：

- **受众对得上**：§0.A 明确区分 "B2B procurement panel vs. design-conscious consumer"；§1.A 档位表含 "trust-first / regulated / accessibility-critical"（VARIANCE 3-4 / MOTION 2-3 / DENSITY 4-5），是唯一为「给决策者看的可信站」预设档位的变体。
- **双模式对得上**：§8 Dark Mode Protocol 规定 Tailwind `dark:` 策略，与项目既有的 `next-themes` class 策略同构。
- **约束无硬违规**：§3.C 原文将 Lucide 列为 "Acceptable only when … **the project already depends on it**" —— 本项目已装 `lucide-react`，走该豁免。`motion/react` vs `framer-motion` 也有 legacy 通道。
- **唯一覆盖 SEO 的变体**：§11.B 把 "SEO baseline" 列为 redesign 审计项并定性「**SEO migration is the #1 redesign risk**」。本项目主流量来自百度，这是决定性差异。
- **唯一有 WCAG 数值的变体**：全库仅它出现 `4.5:1` / `3:1`，能与已配置的 `impeccable detect` 门禁对接。

**已排除**（逐文件实读后判定）：
| 变体 | 排除理由 |
|---|---|
| `taste-skill-v1` | 硬违规：MUST 用 `@phosphor-icons/react` 或 `@radix-ui/react-icons` |
| `gpt-tasteskill` | 硬违规：强制 GSAP 包 + Phosphor 图标；且首选「居中大图 + 暗色径向渐晕」= 本次要删的那类 |
| `soft-skill` | 硬违规：禁 Lucide；假定 `Clash Display` / `PP Editorial New` 商用字体可用。且其 §3.B 首选原型 "Ethereal Glass"（深 OLED 黑 + 发光紫 orb + 玻璃胶囊导航）**就是本次要拆掉的那套** |
| `brutalist-skill` | 违反双模式约束（原文 "Dark mode exclusivity… Never mix light and dark"）；核心手法全大写排版在中文不成立 |
| `minimalist-skill` | 半违规：禁 Lucide。且全文**零 dark mode 提及** |
| `imagegen-frontend-web/mobile`、`brandkit`、`image-to-code-skill` | 本机无图像生成工具，核心步骤无法执行 |
| `stitch-skill` | 前置条件 Google Stitch 或 Stitch MCP 不满足；且其 DESIGN.md 推荐 `Fraunces`/`Instrument Serif`，与 `taste-skill` v2 §4.1 的明令禁用**直接打架** |

---

## 1. 排版网格

| 项 | 值 |
|---|---|
| 内容最大宽度 | `1152px`（`max-w-6xl`）；长文正文约束 `72ch` |
| 列系统 | 12 列，gutter `24px`（移动端 `16px`） |
| 间距基准 | **4px 基准刻度**：`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128` |
| 基线 | 正文 `line-height: 1.65`；标题 `1.15`（中文标题需比拉丁更松，避免字符挤顶） |
| 板块纵向留白 | 桌面 `96px`，平板 `72px`，移动 `56px` |

**禁止**：任何不在上述刻度内的间距值（无魔数）。

## 2. 断点定义（G1 要求 ≥3 档）

| 名称 | 宽度 | 目标 |
|---|---|---|
| `mobile` | `375px` | 手机竖屏（最小支持） |
| `tablet` | `768px` | 平板竖屏 |
| `desktop` | `1440px` | 桌面（设计基准） |

中间过渡用 Tailwind 默认断点（`sm:640` `md:768` `lg:1024` `xl:1280`）实现，**门禁只需验证上述三档无溢出**。

## 3. 留白密度

**全局唯一一档：舒适（Comfortable）**。

依据 S0：受众是中小企业决策者，在百度搜索结果里点进来快速判断「靠不靠谱」。密集排版会增加认知负担，过疏则显得内容空洞。舒适档 = 板块间 `96px`、卡片内边距 `32px`、正文行高 `1.65`。

**禁止**在同一页面混用密度档位。

## 4. 配色层级

### 4.1 决策：换掉紫罗兰

当前 `primary #6366f1` → `accent #a855f7` 渐变是 `impeccable detect` 判定的 `ai-color-palette`（原文措辞：「**Purple/violet gradients and cyan-on-dark are the most recognizable tells of AI-generated UIs**」）。

**实测确认规则边界**（本次用灵敏测试逐项验证，含紫色对照组）：

| 紫色用法 | 是否触发 `ai-color-palette` |
|---|---|
| 实心块背景 | ❌ 不触发 |
| **渐变** | ✅ 触发 |
| **渐变文字** | ✅ 触发（另加 `gradient-text`×2） |
| **文字色** | ✅ 触发 |

**对其他色相的实测结果**：靛青 `#0F766E`、钢蓝 `#1E40AF`、朱砂 `#B91C1C`、赭石 `#92400E`、石墨 `#334155`、墨绿 `#065F46`、青 `#0E7490` —— **全部不触发**。即该规则是**紫色专用**，不是「所有鲜艳色」。

> ⚠️ **假阴性机制（实测发现）**：检测器**不解析 CSS `var()`**。若用变量间接声明紫色，`ai-color-palette` 不会报。真实项目的紫色能被抓到，只因 Tailwind 编译后落成了字面值。**不要用变量来规避此规则**——那是欺骗门禁。

### 4.2 选定配色

**基座：暖纸 / 石墨（中性，近无彩）**
**强调色：靛青 `#0F766E`（轨内唯一强调色）**

| 角色 | 亮色模式 | 暗色模式 |
|---|---|---|
| 画布 | `#FAFAF8`（暖白，非纯白） | `#0C0C0E`（近黑，非蓝黑） |
| 次级面 | `#F2F1ED` | `#141416` |
| 卡片 | `#FFFFFF` | `#161618` |
| 边框 | `#E3E2DD` | `#26262A` |
| 主文字 | `#1A1A1C` | `#EDEDEF` |
| 次级文字 | `#5C5C61` | `#A1A1A6` |
| **强调色** | **`#0F766E`** | **`#2DD4BF`** |
| 强调色悬停 | `#115E59` | `#5EEAD4` |

**为什么是靛青而非钢蓝**：钢蓝是最保守的选择，但也是**国内企业站最泛滥的选择**——换掉紫色却撞进另一片红海，辨识度没有提升。靛青在 B2B 语境里读作「沉稳、技术、可信」，且在企业站中不常见。

### 4.3 对比度数值表（G1 判据，全部实算）

| 组合 | 比值 | 要求 | 结论 |
|---|---|---|---|
| 白字 on 靛青 `#0F766E` | **5.47:1** | ≥4.5:1 | ✅ |
| 白字 on 靛青悬停 `#115E59` | **7.58:1** | ≥4.5:1 | ✅ |
| 主文字 `#1A1A1C` on 画布 `#FAFAF8` | **14.05:1** | ≥4.5:1 | ✅ |
| 次级文字 `#5C5C61` on 画布 `#FAFAF8` | **6.34:1** | ≥4.5:1 | ✅ |
| 暗色主文字 `#EDEDEF` on `#0C0C0E` | **16.71:1** | ≥4.5:1 | ✅ |
| 暗色次级 `#A1A1A6` on `#0C0C0E` | **7.60:1** | ≥4.5:1 | ✅ |
| 暗色强调 `#2DD4BF` on `#0C0C0E` | **10.50:1** | ≥4.5:1 | ✅ |
| **控件边框** `#888886` on `#FAFAF8` | **3.40:1** | ≥3:1（1.4.11） | ✅ |
| **控件边框** `#666668` on `#0C0C0E` | **3.41:1** | ≥3:1（1.4.11） | ✅ |

> **G1 拦下的一个真实缺陷**：初版 `--color-border-strong` 定为 `#CFCEC8` / `#34343A`，实测仅 **1.51:1 / 1.58:1**，**不达 WCAG 1.4.11 的 3:1** —— 表单输入框边界会看不清。已重算为 `#888886` / `#666668`。这是门禁在实现之前就拦下问题的实例。
>
> 注：`--color-border`（`#E3E2DD` / `#26262A`，1.24:1 / 1.30:1）为**装饰性分割线**，不承担控件识别功能，不受 1.4.11 约束，保持不变。

**对照被替换的方案**：白字 on `#6366f1` = 4.47:1（**差 0.03 不达标**）；白字 on `#a855f7` = 3.96:1（**差 0.54**）。

## 5. 一致性规则

| 项 | 规则 |
|---|---|
| 圆角 | `6px`（按钮/输入）、`10px`（卡片）、`0`（图片容器与分割线）——**禁用 `rounded-full` 于大容器与主按钮** |
| 阴影 | **近乎无**。仅卡片 hover 用 `0 2px 8px rgba(0,0,0,.05)`。**禁用** `shadow-md/lg/xl` 及「1px 边框 + 宽模糊阴影」组合（后者被检测器判为 AI 味 advisory） |
| 边框 | 统一 `1px solid`，颜色取上表「边框」 |
| 图标 | `lucide-react`（既有依赖，`taste-skill` §3.C 豁免口），**统一 `strokeWidth={1.75}`** |
| 动效 | 只动 `transform` 与 `opacity`；缓动 `cubic-bezier(.16,1,.3,1)`；入场 `translateY(12px)+opacity` 600ms；**禁用 bounce/elastic** |

## 6. 字体系统（**自建，13 个变体全都没覆盖 CJK**）

经逐文件核实：**全部 13 个变体零 CJK 指引**，字体建议全是拉丁（Geist / Outfit / Satoshi / Cabinet Grotesk），其中 **Geist 正是本项目已被判定「用滥」的那个**。

### 6.1 实测发现：Geist 是死声明

`tailwind.config.ts` 把 `'Geist'` 列在字体栈首位，但：
- 项目内**无 Geist 字体文件**，**无对应 `@font-face`**（只有名为 `'Geist Fallback'` 的度量兜底声明，`src: local('PingFang SC'), local('Microsoft YaHei')`）
- **Google Fonts 不可达**（`fonts.googleapis.com` / `fonts.gstatic.com` 均 HTTP 000），`next/font/google` 会在构建时失败

**浏览器实测**（canvas 宽度比对，纯拉丁样本）：`"Geist"` = 463.3，与 `sans-serif` / `PingFang SC` / `Microsoft YaHei` 完全同宽，而真实存在的 `Noto Sans SC` = 442.48。

→ **`Geist` 从未被渲染**。`overused-font` 这一条针对的是**不生效的声明**。这是检测器的一类已知假阳性。

### 6.2 字体方案

**系统字体栈，不加载任何 Web 字体**（国内首屏最快，且规避 Google Fonts 不可达）：

```
--font-sans: "PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei",
             "Noto Sans SC", system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Consolas, monospace;
```

- **移除死掉的 `Geist` token**（这一步即消除 2 条 `overused-font`）
- **标题与正文同族，靠字重与字号拉开层级**：中文无大小写，用字体族变化做层级容易失控；改以 `font-weight 600→700` + `字号比 1.25` 建立层级
- **不引入拉丁显示字体**：中文站点的标题以汉字为主，拉丁字体只在极少数字符（数字、英文术语）出现，投入产出比低

> ⚠️ **保留决策**：`taste-skill` 反复使用 `uppercase + tracking-[0.18em]` 型小标签（§4.7 限定「每 3 节最多 1 个」）。**中文无大小写，宽字距反伤可读性** —— 该机制在中文语境下改用「字号缩小 + 字重提升 + 前置短横线」替代，不照搬。

## 7. 信息顺序调整（依 S0 优先级）

S0 指出当前板块顺序与用户决策顺序不一致——**品牌故事（优先级 5）排在案例（优先级 2）之前**。

**调整为**：`Hero → Services → Projects → Testimonials → About → Contact`

> **更正 S0 简报的一处错误**：S0 依据项目 `.wolf/anatomy.md` 的描述，称页面含 Stats 板块（团队人数 / 行业经验）。实测发现 **`app/components/Stats.tsx` 未被任何文件引用，是死代码** —— 实际渲染中「技术团队 5人+ / 行业经验 10年+」这组数字**从未出现**。（旁证：`Stats.tsx` 引用的 `.gradient-text` 类在 `globals.css` 中根本没有定义，因为它从不渲染。）
>
> 依 S0 范围外声明（❌ 不新增板块），本次**不新增** Stats 渲染。该缺口**上报用户决定**，不擅自补。

仍在范围外声明内（只调既有板块顺序，不新增板块）。

---

## 8. 待验证项

| # | 项 | 状态 |
|---|---|---|
| 1 | 靛青在企业站中的实际观感 | 需 **人工闸口 1** 确认 |
| 2 | 信息顺序调整是否影响百度已有排名 | `taste-skill` §11.C 要求冻结主导航文案与 URL，本次不动文案与锚点 id |
| 3 | 暗色模式下的强调色 `#2DD4BF` 是否偏亮 | 实测 10.50:1 对比度充足，观感需人工确认 |
