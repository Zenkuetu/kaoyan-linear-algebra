// 发布暂存 + 打包：从 git 提交（默认 HEAD）取出库本体，暂存到 STAGE，再打成规范 ZIP。
// 用法: node stage-release.mjs <版本号> [--ref <git ref>]
//   node stage-release.mjs 1.2                 # 暂存并打包 linear-algebra-vault-v1.2.zip
//   node stage-release.mjs 1.2 --ref v1.1      # 用历史提交复刻老包（对拍用）
// 说明：只打包 线代知识网/ 与 .obsidian/ 两个前缀下的**已提交**文件 —— 插件、workspace.json、
// 未跟踪文件天然不进包；内容取自提交对象，所以 Obsidian 在后台写 scale 之类的个人状态不会污染发布包。
// ZIP 规范：内部路径一律正斜杠、文件名置 UTF-8 标志位(bit 11)、deflate 压缩，打完再逐项回读校验 CRC。
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { execFileSync } from 'node:child_process';
import { REPO, STAGE } from './paths.mjs';

const PREFIXES = ['线代知识网/', '.obsidian/'];

const args = process.argv.slice(2);
const version = args[0];
const ref = args.includes('--ref') ? args[args.indexOf('--ref') + 1] : 'HEAD';
if (!version) { console.error('用法: node stage-release.mjs <版本号> [--ref <ref>]'); process.exit(2); }
const git = (...a) => execFileSync('git', ['-c', 'core.quotepath=false', ...a], { cwd: REPO, encoding: 'utf8', maxBuffer: 64e6 });

// ---------- CRC32 ----------
const T = (() => { const t = new Int32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1); t[n] = c; } return t; })();
const crc32 = b => { let c = -1; for (let i = 0; i < b.length; i++) c = T[(c ^ b[i]) & 0xFF] ^ (c >>> 8); return (c ^ -1) >>> 0; };

// ---------- 1) 收集提交里的库文件 ----------
const files = git('ls-tree', '-r', '-z', ref).split('\0').filter(Boolean).map(l => {
  const m = l.match(/^\d+ blob ([0-9a-f]+)\t([\s\S]*)$/);
  return { sha: m[1], file: m[2] };
}).filter(e => PREFIXES.some(p => e.file.startsWith(p))).sort((a, b) => (a.file < b.file ? -1 : a.file > b.file ? 1 : 0));
if (!files.length) { console.error('没有匹配的库文件，检查 --ref'); process.exit(1); }

// ---------- 2) 重建暂存区 ----------
fs.rmSync(STAGE, { recursive: true, force: true });
for (const e of files) {
  const dst = path.join(STAGE, e.file);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, execFileSync('git', ['cat-file', 'blob', e.sha], { cwd: REPO, maxBuffer: 64e6 }));
}

// ---------- 3) 打 ZIP ----------
const stamp = new Date(Number(git('log', '-1', '--format=%ct', ref)) * 1000);
const dosTime = d => ((d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1)) & 0xFFFF;
const dosDate = d => (((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate()) & 0xFFFF;
const time = dosTime(stamp), date = dosDate(stamp);

const parts = []; const central = []; let offset = 0;
for (const e of files) {
  const data = fs.readFileSync(path.join(STAGE, e.file));
  const comp = zlib.deflateRawSync(data, { level: 9 });
  const crc = crc32(data), name = Buffer.from(e.file, 'utf8');
  const lh = Buffer.alloc(30);
  lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4); lh.writeUInt16LE(0x0800, 6); lh.writeUInt16LE(8, 8);
  lh.writeUInt16LE(time, 10); lh.writeUInt16LE(date, 12); lh.writeUInt32LE(crc, 14);
  lh.writeUInt32LE(comp.length, 18); lh.writeUInt32LE(data.length, 22); lh.writeUInt16LE(name.length, 26);
  parts.push(lh, name, comp);
  const ch = Buffer.alloc(46);
  ch.writeUInt32LE(0x02014b50, 0); ch.writeUInt16LE(0x031E, 4); ch.writeUInt16LE(20, 6);
  ch.writeUInt16LE(0x0800, 8); ch.writeUInt16LE(8, 10); ch.writeUInt16LE(time, 12); ch.writeUInt16LE(date, 14);
  ch.writeUInt32LE(crc, 16); ch.writeUInt32LE(comp.length, 20); ch.writeUInt32LE(data.length, 24);
  ch.writeUInt16LE(name.length, 28); ch.writeUInt32LE((0o100644 << 16) >>> 0, 38); ch.writeUInt32LE(offset, 42);
  central.push(ch, name);
  offset += lh.length + name.length + comp.length;
}
const cd = Buffer.concat(central);
const eocd = Buffer.alloc(22);
eocd.writeUInt32LE(0x06054b50, 0); eocd.writeUInt16LE(files.length, 8); eocd.writeUInt16LE(files.length, 10);
eocd.writeUInt32LE(cd.length, 12); eocd.writeUInt32LE(offset, 16);
const zipName = 'linear-algebra-vault-v' + version + '.zip';
const zipPath = path.join(STAGE, '..', zipName);
const zipBuf = Buffer.concat([...parts, cd, eocd]);
fs.writeFileSync(zipPath, zipBuf);

// ---------- 4) 回读自校验 ----------
let e2 = -1;
for (let i = zipBuf.length - 22; i >= 0 && i > zipBuf.length - 70000; i--) if (zipBuf.readUInt32LE(i) === 0x06054b50) { e2 = i; break; }
if (e2 < 0) throw new Error('EOCD 缺失');
const n = zipBuf.readUInt16LE(e2 + 10), cdOff = zipBuf.readUInt32LE(e2 + 16);
const problems = [];
if (n !== files.length) problems.push('条目数 ' + n + ' ≠ ' + files.length);
let p = cdOff;
for (let i = 0; i < n; i++) {
  if (zipBuf.readUInt32LE(p) !== 0x02014b50) { problems.push('第 ' + i + ' 项中央目录损坏'); break; }
  const flags = zipBuf.readUInt16LE(p + 8), method = zipBuf.readUInt16LE(p + 10), crc = zipBuf.readUInt32LE(p + 16);
  const csize = zipBuf.readUInt32LE(p + 20), size = zipBuf.readUInt32LE(p + 24);
  const nlen = zipBuf.readUInt16LE(p + 28), elen = zipBuf.readUInt16LE(p + 30), clen = zipBuf.readUInt16LE(p + 32);
  const name = zipBuf.slice(p + 46, p + 46 + nlen).toString('utf8');
  const lho = zipBuf.readUInt32LE(p + 42);
  if (!(flags & 0x800)) problems.push(name + '：缺 UTF-8 标志');
  if (name.includes('\\')) problems.push(name + '：路径里有反斜杠');
  if (method !== 8) problems.push(name + '：压缩方式不是 deflate');
  const ln = zipBuf.readUInt16LE(lho + 26), le = zipBuf.readUInt16LE(lho + 28);
  const raw = zipBuf.slice(lho + 30 + ln + le, lho + 30 + ln + le + csize);
  const out = zlib.inflateRawSync(raw);
  if (out.length !== size) problems.push(name + '：解压后长度不符');
  if (crc32(out) !== crc) problems.push(name + '：CRC 不符');
  if (Buffer.compare(out, fs.readFileSync(path.join(STAGE, name))) !== 0) problems.push(name + '：内容与暂存区不一致');
  p += 46 + nlen + elen + clen;
}

console.log('提交 ' + git('rev-parse', '--short', ref).trim() + ' ｜ 打包 ' + files.length + ' 个文件 ｜ ' + zipName + '  ' + (zipBuf.length / 1048576).toFixed(2) + ' MB');
console.log('暂存区: ' + STAGE);
console.log('ZIP   : ' + zipPath);
console.log(problems.length ? '❌ 自校验未通过：\n  ' + problems.join('\n  ') : '✅ 自校验通过（条目数 / UTF-8 标志 / 正斜杠 / deflate / CRC / 内容逐项一致）');
if (problems.length) process.exit(1);
