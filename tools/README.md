# tools —— 生成器与校验工具链

内容分三层，这个目录是全部的可执行部分：

```
数据层   dc.js · matrices.js · vectors.js · equations.js · eigen.js · quadratic.js   每个知识点一个对象
         edges.js                                                                  164 条关系边
通俗层   deep-v2/_draft/*.md       103 篇正文草稿（先写这里）
         deep-v2/m-*.json          由 draft2json.mjs 校验后转换而来
产物层   build.js <输出目录>        103 篇笔记 + 7 章节页 + 4 汇总页
         canvas-v2.js <输出目录>   6 张 Canvas 关系图
```

## 路径：不用再改脚本

所有脚本的路径统一由 `tools/paths.mjs` 推导，默认全部相对**仓库根**，clone 到任何机器都能直接跑：

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `VAULT_ROOT` | 仓库根 | Obsidian 打开的库根（含 `.obsidian`） |
| `VAULT` | `<仓库根>/线代知识网` | 库内容 |
| `CODEGEN` | `<仓库根>/tools` | 本目录 |
| `DRAFT` | `tools/deep-v2/_draft` | 正文草稿 |
| `BUILD` | `<仓库根>/.build/_vault_test` | 构建产物 |
| `STAGE` | `<仓库根>/.build/_gh_publish` | 发布暂存区 |

要改就改配置，别改脚本：环境变量 `LA_VAULT_ROOT` / `LA_BUILD` / `LA_STAGE`，或写一个 `tools/local-paths.json`（已在 `.gitignore` 里）：

```json
{ "vaultRoot": "D:/我的库", "build": "D:/tmp/_vault_test", "stage": "D:/tmp/_gh_publish" }
```

## 标准流程

```bash
node tools/draft2json.mjs --all                 # 草稿 → deep-v2/m-*.json（写盘前先校验结构与 LaTeX）
node tools/build.js        .build/_vault_test   # 生成笔记 + 章节页 + 汇总页
node tools/canvas-v2.js    .build/_vault_test   # 生成 6 张 Canvas
node tools/sync-vault.mjs                       # 与已安装库对比（dry run）
node tools/sync-vault.mjs --apply               # 真正同步进库
```

## 校验套件（每次改动都跑）

```bash
node tools/check-notes.mjs            .build/_vault_test    # 结构 + LaTeX + 编号一致性 + 重复 ID
node tools/check-template.mjs         .build/_vault_test tools/deep-v2   # 叙事骨架 + 通俗层覆盖
node tools/check-links.mjs            .build/_vault_test    # 双链可解析
node tools/check-mislinks.mjs         .build/_vault_test    # 矩阵记号不被误判成双链
node tools/check-contain.mjs          .build/_vault_test    # Canvas 节点不越界
node tools/check-oneline.mjs          tools/deep-v2         # 「一句话」视觉宽度 ≤ 46
node tools/check-jargon.mjs           tools/deep-v2         # 引入段术语越界（加 --vault 可查渲染后笔记）
node tools/check-connectivity.mjs                           # 关系图连通块数（应为 1）
node tools/check-vault-connectivity.mjs .build/_vault_test  # 整库连通块数（应为 1）
node tools/verify-fix-landing.mjs     .build/_vault_test    # 高危修复是否真的落在产物里
node tools/check-tag-combos.mjs                             # 标签组合推导
node tools/check-graph-config.mjs                           # 图谱配色组 / 箭头 / 插件开关（发布前必跑）
node tools/verify-sync.mjs                                  # 同步前逐文件对比
```

## 发布

```bash
node tools/stage-release.mjs 1.2      # 暂存 + 打包 .build/_gh_publish/linear-algebra-vault-v1.2.zip
gh release create v1.2 --title "v1.2" --notes-file RELEASE-NOTES.md <zip>
```

打包器自己写、不用 .NET 的 `ZipFile`：内部路径一律正斜杠、文件名标 UTF-8 标记、逐项校验 CRC 与解压结果（macOS / Linux 上解压才不会得到 `.obsidian\app.json` 这种怪名字）。

## 已知坑（详见 HISTORY.md）

- **Obsidian 开着的时候会把它内存里的图谱状态写回 `.obsidian/graph.json`**，把三个节点配色组和箭头冲掉；装了 Extended Graph 的话，插件保存的「状态」也会在打开图谱时把它顶掉 —— 所以 `check-graph-config.mjs` 在发布前必跑，而且配置好之后要**重启 Obsidian** 才生效。
- `tools/latex-whitelist.json` 曾经漏提交（脚本跑不起来），现已补齐。
