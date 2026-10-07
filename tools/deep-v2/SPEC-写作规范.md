# 通俗层写作规范（deep-v2）

> 这份规范是给"逐章补写通俗层"用的。每条规则后面都写了**为什么**——因为每条都是踩过坑才加的。
> 写作对象：`deep-v2/m-<章>-<x>.json`，字段 `oneline / pain / gap / intro / detail / usage / selfcheck`。

## 一、讲解顺序（固定六段，不许调换）

| 段 | 内容 | 必须做到 |
| --- | --- | --- |
| `pain` 先看要解决什么 | 具体题目/具体动作，**痛点** | 第一句就能独立读懂，不许出现后面章节的概念 |
| `gap` 直接办法为什么不够 | 土办法 + 它的劣势，**逐条编号** | 至少 3 条，写成"坑一 / 第一个坑 / 劣势一"这种显式编号 |
| `intro` 于是引入 | 新概念 + **逐条回应上面的坑** | 先用一句引子"上面那三个坑，逐个补上："，再按同一编号逐条回应 |
| `detail` 细节 | 定义、算例、公式、操作步骤 | 算例必须写全中间步骤 |
| `usage` 怎么用 | 选择题/填空题/解答题各怎么考 | 具体到"给什么条件、求什么" |
| `selfcheck` 30 秒自测 | 3 条 | 第 1 条通常就是本点的最小算例 |

## 二、七条硬规则

### R1 只用已经学过的概念引入
引入某章知识点时，只能用**更早章节**（以及本章更早的知识点）的概念。
章节顺序：行列式 → 矩阵 → 向量组 → 线性方程组 → 特征值 → 二次型 → 附录（线性空间与线性变换）。

- 后面才讲的术语（"变换""线性组合""线性空间""基"…）不许用来引入当前知识点；
- 如果某个后续视角确实好用，只能放在引入段**末尾**，写成引用块，并明确标注"**现在不懂它不影响做题**"。
- 反例（真实踩过的坑）：用"矩阵乘法是变换的复合"引入矩阵乘法 —— 读者在第二章根本不知道"变换"是什么，整段读不通。

### R2 禁止悬空引用（编号必须一一对上）
`intro` 里的"坑一 / 劣势一 / 第一个坑"必须能在 `gap` 里找到**同一写法的编号**。

- 引子句：`上面那三个坑，逐个补上：`
- 回应项用清单：`- **坑一补上 · 交叉项不再漏**：…` 或 `- **劣势一补上**：…`
- 编号写法必须与 `gap` 一致：`gap` 写"劣势一"，`intro` 就写"劣势一"，不要写成"对应第一个劣势"。
- 反例：`gap` 只写了"第二个坑""第三个坑"（第一个漏编号），`intro` 却说"对应第一个坑" —— 读者数不出来指的是谁。
- 本规则由 `check-notes.mjs` 自动检查（含负向测试）。

### R3 不许循环论证
不许用**正要建立的规则**去证明这条规则本身。

- 反例：用"把 $(1,1)$ 代进去，正确答案是 $(5,11)$"来否掉"对应位置相乘" —— 而 $(5,11)$ 这个"正确答案"恰恰要靠矩阵乘法的行列规则才算得出来。
- 正确做法：验证必须落在更基础的东西上 —— 代入消元、算术、具体反例。

### R4 每条断言都要能独立复算
- 所有数字、公式、算例都要能用手算或脚本复算一遍（不许"看起来对"）；
- 反例必须真的能反：例如要反 $r(AB) = r(A)r(B)$，取 $A = B = O$ 无效（两边都是 0），应取 $A = B = E$；
- 涉及前提的结论要把前提写全：如 $r(A^{\mathrm{T}}A) = r(A)$ 需要 $A$ 为实矩阵；$A^{*}$ 的秩分级公式需要 $n \ge 2$；
- 审校必须**自己动手重算**，不能只读文字。

### R5 LaTeX 规范
- 矩阵一律用 `\begin{pmatrix}…\end{pmatrix}`（**不要 `bmatrix`**）；**显式的行列式可以用 `\begin{vmatrix}…\end{vmatrix}`**（更直观），行内写 $|A|$ 用 `\lvert A \rvert`；
- 行间公式 `$$` 必须**独占一行**（同一行的 `$$…$$` 会破坏后面的双链）；
- 公式里**不许出现中文**（中文留在公式外）；
- 矩阵记号不要写成 `[[1,1],[0,1]]`（会被 Obsidian 当双链）；必要时用全角或零宽字符；
- 化简步骤要标注所用变换：`\xrightarrow{\;r_2 - 3r_1\;}`，不许只给结果。

### R6 语言
- 口语化，像讲题，不用"综上""由定理可知"这种论文腔；
- 术语第一次出现先用白话说一遍；
- `oneline` 不超过 46 个视觉宽度单位（中文按 2 计），由 `check-oneline.mjs` 检查。

### R7 每次交付都要过校验
```
node tools/build.js        .build/_vault_test
node tools/canvas-v2.js    .build/_vault_test
node tools/check-notes.mjs .build/_vault_test        # 结构 + LaTeX + 悬空引用
node tools/check-template.mjs .build/_vault_test tools/deep-v2
node tools/check-links.mjs .build/_vault_test        # 链接可解析
node tools/check-mislinks.mjs / check-contain.mjs / check-oneline.mjs
node tools/sync-vault.mjs --apply                    # 同步到已安装库（不删库里的东西）
```
每章写完，另派一个**独立审校**：重算算例、给结论找反例、补前提，并把问题写回 JSON。

## 三、交付节奏

1. 一章一批（行列式 17 / 向量 13 / 方程组 12 / 特征值 17 / 二次型 11 / 附录 6）；
2. 每批写完 → 过校验 → 独立审校 → 应用审校结论 → 重新构建 → 同步；
3. 别一次改全库，改完必跑 `sync-vault.mjs`（先 dry run 看差异，再 `--apply`）。

## 四、工具链（草稿 → JSON，零转义风险）

写正文**不要直接改 JSON**（LaTeX 里的反斜杠会被 JSON 转义搞坏）。流程是：

```
node tools/dump-chapter.mjs           # 生成每章写作简报 tools/deep-v2/_input/m-<章>.md（含 id/标签/现有要点/关系边）
#   → 写草稿 tools/deep-v2/_draft/<知识点id>.md（纯文本，小节标记 ### ONELINE/PAIN/GAP/INTRO/DETAIL/USAGE/SELFCHECK）
node tools/draft2json.mjs --key det   # 校验并写出 tools/deep-v2/m-det-a.json
node tools/draft2json.mjs --key mat   # 已有章节就地更新（第二章矩阵）
node tools/draft2json.mjs --all       # 全部章节
node tools/build.js .build/_vault_test    # 生成笔记（所有命令都在仓库根目录执行）
node tools/canvas-v2.js .build/_vault_test
node tools/check-notes.mjs .build/_vault_test / check-template.mjs / check-links.mjs / check-mislinks.mjs / check-contain.mjs / check-oneline.mjs
node tools/sync-vault.mjs --apply     # 同步进 Obsidian 库（只覆盖有差异的文件，不删库里的东西）
node tools/apply-style.mjs            # 安装/更新阅读样式片段（CSS snippet）
```

`draft2json.mjs` 会在写盘前卡住这些硬性要求（不合格就不出 JSON）：

- 七个小节齐全且非空；`usage` 3 条；`selfcheck` 3 条；`oneline` 视觉宽度 ≤ 46；
- LaTeX 全套检查（见 R5）；
- `gap` 里至少 3 条带编号的"坑/劣势"，`intro` 里至少 3 条"补上"，且编号能一一对应（R2）。

`latexcheck.mjs` 是 LaTeX 检查的唯一实现，`check-notes.mjs`、`check-oneline.mjs`、`draft2json.mjs` 共用它，避免两套标准打架。

