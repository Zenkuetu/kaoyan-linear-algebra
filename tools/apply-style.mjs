// 把阅读增强样式装进 Obsidian 配置目录，并在 appearance.json 里启用（幂等、保留原有设置）
import fs from 'node:fs';
import path from 'node:path';

import { VAULT_ROOT, SNIPPET as SRC } from './paths.mjs';   // 路径统一由 paths.mjs 解析（默认相对仓库根推导）
const NAME = 'linalg-reading';

const OBS = path.join(VAULT_ROOT, '.obsidian');
const SNIP = path.join(OBS, 'snippets');
fs.mkdirSync(SNIP, { recursive: true });

const dst = path.join(SNIP, NAME + '.css');
fs.copyFileSync(SRC, dst);
console.log('已安装样式片段: ' + dst + '  (' + fs.statSync(dst).size + ' 字节)');

const ap = path.join(OBS, 'appearance.json');
let cfg = {};
if (fs.existsSync(ap)) {
  try { cfg = JSON.parse(fs.readFileSync(ap, 'utf8')); }
  catch (e) { console.error('appearance.json 解析失败，将重写: ' + e.message); cfg = {}; }
}
const list = new Set(Array.isArray(cfg.enabledCssSnippets) ? cfg.enabledCssSnippets : []);
list.add(NAME);
cfg.enabledCssSnippets = [...list];
fs.writeFileSync(ap, JSON.stringify(cfg, null, 2) + '\n', 'utf8');

// 回读校验
const back = JSON.parse(fs.readFileSync(ap, 'utf8'));
const on = Array.isArray(back.enabledCssSnippets) && back.enabledCssSnippets.includes(NAME);
console.log('appearance.json: ' + JSON.stringify(back));
console.log(on ? '✅ 样式片段已置为启用' : '❌ 未能启用样式片段');
process.exit(on ? 0 : 1);
