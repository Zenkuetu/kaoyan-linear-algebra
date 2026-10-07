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
{ "build": "../临时/_vault_test", "stage": "../临时/_gh_publish" }
```

（值可以是相对路径——相对当前工作目录解析——也可以是绝对路径；`vaultRoot` 默认就是仓库根，一般不用写。）

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
node tools/stage-release.mjs 1.4      # 从提交取库本体暂存 + 打包 .build/linear-algebra-vault-v1.4.zip
git push origin main && git push origin refs/tags/v1.4
gh release create v1.4 --title "v1.4 — …" --notes-file .build/v1.4-notes.md .build/linear-algebra-vault-v1.4.zip
```

> **推不上去先看代理。** 直连 `github.com` 会被重置（`Failed to connect to github.com` / `Recv failure: Connection was reset`），得让本地代理在跑，并让 git / gh 走它：
>
> ```bash
> set HTTPS_PROXY=http://127.0.0.1:7892   # 端口以 Clash 的混合端口为准
> set HTTP_PROXY=http://127.0.0.1:7892
> ```
>
> **系统代理开着只保证浏览器通，git 不读 Windows 的代理设置**，必须靠这两个环境变量（或 `git config --global http.proxy`）；`gh` 同理。发布说明单独切一份到 `.build/v1.4-notes.md`（只取 `RELEASE-NOTES.md` 里该版本那一段），不要把整份说明塞进单个 release。

打包器自己写、不用 .NET 的 `ZipFile`：内部路径一律正斜杠、文件名标 UTF-8 标记、逐项校验 CRC 与解压结果（macOS / Linux 上解压才不会得到 `.obsidian\app.json` 这种怪名字）。

## 已知坑（详见 HISTORY.md）

- **Obsidian 开着的时候会把它内存里的图谱状态写回 `.obsidian/graph.json`**，把三个节点配色组和箭头冲掉；装了 Extended Graph 的话，插件保存的「状态」也会在打开图谱时把它顶掉 —— 所以 `check-graph-config.mjs` 在发布前必跑，而且配置好之后要**重启 Obsidian** 才生效。
- `tools/latex-whitelist.json` 曾经漏提交（脚本跑不起来），现已补齐。

## `.obsidian` 里哪些进仓库

| 文件 | 入库 | 说明 |
| --- | --- | --- |
| `.obsidian/graph.json` | ✅ | 三个节点配色组 + 箭头，属发布配置 |
| `.obsidian/plugins/extended-graph/{main.js,manifest.json,styles.css,LICENSE}` | ✅ | 插件本体（GPLv3），随包分发 |
| `.obsidian/plugins/extended-graph/data.json` | ✅ | **只放分发必需的键**（功能开关、连线颜色、`states` 里的配色组与箭头）；面板折叠状态、钉住的节点坐标、导出勾选这类使用痕迹一律不入库 |
| `.obsidian/{app.json,appearance.json,core-plugins.json,community-plugins.json}` | ✅ | 库级设置；`community-plugins.json` 不跟踪的话解压出来插件是关着的 |
| `.obsidian/workspace.json`、`.obsidian/cache/`、`.trash/` | ❌ | 个人布局与缓存，见 `.gitignore` |

上面这几份**运行时会一直被 Obsidian / 插件重写**（`graph.json` 的 `scale`、`data.json` 被补回的默认键、`app.json` 的结尾换行），所以 `git status` 会常年有改动。本机可以把它们设成 skip-worktree，工作区就干净了：

```bash
git update-index --skip-worktree .obsidian/graph.json .obsidian/app.json .obsidian/plugins/extended-graph/data.json
# 真要提交它们的新改动时先解除：
git update-index --no-skip-worktree <文件>
```

注意：**发布包永远取自提交**（`stage-release.mjs` 从 git 对象读），所以本地运行时的膨胀不会污染发布包。
