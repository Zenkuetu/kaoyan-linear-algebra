// 检查 Obsidian 库中是否存在"会被误判为双链"的文本
// 精准信号：未被反斜杠转义的 [[ 后面紧跟数字或左括号，例如矩阵记号 [[1,1],[0,1]]。
// Obsidian 会把它当作指向不存在笔记的双链，点击即新建空文件。
import fs from 'node:fs';
import path from 'node:path';

const vault = process.argv[2];
if (!vault) { console.error('用法: node check-mislinks.mjs <库目录>'); process.exit(2); }

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const full = path.join(d, e.name);
    if (e.isDirectory()) { if (!e.name.startsWith('.')) walk(full); }
    else if (/\.(md|canvas)$/.test(e.name)) files.push(full);
  }
})(vault);

// 在字符串里找所有"会被误判"的 [[，返回出现位置
// 判据（避免误伤合法双链如 [[01 关系网索引（章节结构）]]）：
//   未处理（前面既非反斜杠也非零宽空格）+ [[ 之后去掉空格后紧跟"数字(或左括号)" + 紧跟着一个逗号
//   → 形如 [[1,1],[0,1]]、[[1,0],[0,1]] 的矩阵记号。
//   合法双链的目标名不会以"数字,"开头。
function findMislinks(s) {
  const hits = [];
  let i = 0;
  while ((i = s.indexOf('[[', i)) >= 0) {
    const escaped = i > 0 && (s[i - 1] === '\\' || s[i - 1] === '\u200B');   // 反斜杠或零宽空格都算已处理
    let k = i + 2;
    while (k < s.length && (s[k] === ' ' || s[k] === '\t')) k++;
    const m = /^([0-9]+|\([^)]*\))\s*,/.exec(s.slice(k, k + 24));   // 数字或括号后紧跟逗号
    if (!escaped && m) hits.push(i);
    i += 2;
  }
  return hits;
}

let bad = 0;
for (const f of files) {
  const rel = path.relative(vault, f).replace(/\\/g, '/');
  const text = fs.readFileSync(f, 'utf8');
  if (f.endsWith('.md')) {
    text.split(/\r?\n/).forEach((line, i) => {
      for (const at of findMislinks(line)) {
        bad++;
        console.log(`❌ ${rel}:${i + 1}  …${line.slice(Math.max(0, at - 24), at + 34)}…`);
      }
    });
  } else {
    try {
      const j = JSON.parse(text);
      for (const n of j.nodes || []) {
        const t = typeof n.text === 'string' ? n.text.replace(/\n/g, ' ⏎ ') : '';
        for (const at of findMislinks(t)) {
          bad++;
          console.log(`❌ ${rel} 节点 ${n.id}  …${t.slice(Math.max(0, at - 16), at + 26)}…`);
        }
      }
    } catch { /* ignore */ }
  }
}
console.log(bad ? `发现 ${bad} 处会被 Obsidian 误判为双链的矩阵记号` : '✅ 没有会被误判为双链的矩阵记号（合法双链不受影响）');
process.exit(bad ? 1 : 0);
