// 统一路径解析：默认全部从本文件位置（<仓库>/tools）推导，clone 到任何机器都能直接跑。
// 需要时用环境变量覆盖：LA_VAULT_ROOT / LA_BUILD / LA_STAGE；
// 或在 tools/local-paths.json 里写 {"vaultRoot": "...", "build": "...", "stage": "..."}（该文件不进仓库）。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const CODEGEN = path.dirname(fileURLToPath(import.meta.url)); // <仓库>/tools
export const REPO = path.dirname(CODEGEN);                           // 仓库根

const localFile = path.join(CODEGEN, 'local-paths.json');
let local = {};
if (fs.existsSync(localFile)) {
  try { local = JSON.parse(fs.readFileSync(localFile, 'utf8')); }
  catch (e) { console.error('tools/local-paths.json 解析失败，已忽略：' + e.message); }
}
const pick = (env, key, fallback) => process.env[env] || local[key] || fallback;

export const VAULT_ROOT = pick('LA_VAULT_ROOT', 'vaultRoot', REPO);  // Obsidian 打开的库根（含 .obsidian）
export const VAULT = path.join(VAULT_ROOT, '线代知识网');            // 库内容目录
export const DEEP2 = path.join(CODEGEN, 'deep-v2');                  // 通俗层（草稿 + 转换后的 JSON）
export const DRAFT = path.join(DEEP2, '_draft');                     // 103 篇正文草稿
export const MANIFEST = path.join(DEEP2, '_input', '_manifest.json');
export const SNIPPET = path.join(CODEGEN, 'install', 'obsidian-snippet.css');
export const BUILD = pick('LA_BUILD', 'build', path.join(REPO, '.build', '_vault_test'));  // build.js 的输出
export const STAGE = pick('LA_STAGE', 'stage', path.join(REPO, '.build', '_gh_publish'));  // 发布暂存区
