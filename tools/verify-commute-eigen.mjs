// 验证"可交换 + 特征值互异 ⇒ A 的特征向量也是 B 的特征向量"这条定理，并弄清"互异"这个条件到底管什么。
// 用精确有理数（BigInt 分数）算，不用浮点，避免"看起来对"。
// 用法: node verify-commute-eigen.mjs

// ---------- 有理数 ----------
const g = (a, b) => (b ? g(b, a % b) : a < 0n ? -a : a);
class Q {
  constructor(n, d = 1n) {
    n = BigInt(n); d = BigInt(d);
    if (d === 0n) throw new Error('分母为 0');
    if (d < 0n) { n = -n; d = -d; }
    const k = g(n < 0n ? -n : n, d) || 1n;
    this.n = n / k; this.d = d / k;
  }
  add(o) { return new Q(this.n * o.d + o.n * this.d, this.d * o.d); }
  sub(o) { return new Q(this.n * o.d - o.n * this.d, this.d * o.d); }
  mul(o) { return new Q(this.n * o.n, this.d * o.d); }
  div(o) { if (o.n === 0n) throw new Error('除零'); return new Q(this.n * o.d, this.d * o.n); }
  isZero() { return this.n === 0n; }
  neg() { return new Q(-this.n, this.d); }
  toString() { return this.d === 1n ? String(this.n) : this.n + '/' + this.d; }
}
const q = (n, d = 1n) => new Q(n, d);
const ZERO = q(0), ONE = q(1);

// ---------- 矩阵（数组的数组） ----------
const mat = (A, B) => A.map(r => B[0].map((_, j) => r.reduce((s, x, k) => s.add(x.mul(B[k][j])), ZERO)));
const eq = (A, B) => A.every((r, i) => r.every((x, j) => x.sub(B[i][j]).isZero()));
const col = (A, j) => A.map(r => r[j]);
const mulVec = (A, v) => A.map(r => r.reduce((s, x, k) => s.add(x.mul(v[k])), ZERO));
const isZeroVec = (v) => v.every(x => x.isZero());
// v 与 w 是否平行（v ≠ 0）：二维/三维都用"所有 2×2 子式为零"
function parallel(v, w) {
  for (let i = 0; i < v.length; i++) for (let j = i + 1; j < v.length; j++) {
    if (!v[i].mul(w[j]).sub(v[j].mul(w[i])).isZero()) return false;
  }
  return true;
}

// 解 AB = BA 的线性方程组：未知量是 B 的 n² 个元素，求其解空间的一组基
function commutantBasis(A) {
  const n = A.length, N = n * n;
  const rows = [];
  for (let i = 0; i < n; i++) for (let k = 0; k < n; k++) {
    const row = new Array(N).fill(ZERO);
    // (AB)_{ik} = Σ_j A_ij B_jk   → 未知量索引 j*n+k
    // (BA)_{ik} = Σ_j B_ij A_jk   → 未知量索引 i*n+j
    for (let j = 0; j < n; j++) {
      row[j * n + k] = row[j * n + k].add(A[i][j]);
      row[i * n + j] = row[i * n + j].sub(A[j][k]);
    }
    rows.push(row);
  }
  // 高斯-约当求零空间
  const pivots = []; let r = 0;
  for (let c = 0; c < N && r < rows.length; c++) {
    let p = -1;
    for (let i = r; i < rows.length; i++) if (!rows[i][c].isZero()) { p = i; break; }
    if (p < 0) continue;
    [rows[r], rows[p]] = [rows[p], rows[r]];
    const pv = rows[r][c];
    rows[r] = rows[r].map(x => x.div(pv));
    for (let i = 0; i < rows.length; i++) {
      if (i !== r && !rows[i][c].isZero()) {
        const f = rows[i][c];
        rows[i] = rows[i].map((x, j) => x.sub(f.mul(rows[r][j])));
      }
    }
    pivots.push(c); r++;
  }
  const free = [];
  for (let c = 0; c < N; c++) if (!pivots.includes(c)) free.push(c);
  const basis = [];
  for (const f of free) {
    const v = new Array(N).fill(ZERO); v[f] = ONE;
    pivots.forEach((pc, i) => { v[pc] = rows[i][f].neg(); });
    // 摊成 n×n
    basis.push(Array.from({ length: n }, (_, i) => v.slice(i * n, i * n + n)));
  }
  return basis;
}
const linComb = (basis, coefs) => basis[0].map((_, i) => basis[0][i].map((_, j) =>
  basis.reduce((s, M, k) => s.add(M[i][j].mul(coefs[k])), ZERO)));

// ---------- 用例 ----------
let bad = 0;
const A1 = [ // 特征值 1,2,3 互异
  [q(1), q(1), q(0)],
  [q(0), q(2), q(1)],
  [q(0), q(0), q(3)],
];
const eig1 = [ // 属于 1,2,3 的特征向量
  [q(1), q(0), q(0)],
  [q(1), q(1), q(0)],
  [q(1), q(2), q(2)],
];
console.log('=== 用例一：A 的特征值 1,2,3 互异 ===');
const B1 = commutantBasis(A1);
console.log('与 A 可交换的矩阵解空间维数 = ' + B1.length + '（预期 = n = 3）');
const coefs = [q(2), q(-1), q(3)];
const Bm = linComb(B1, coefs);
console.log('取解空间里一个随机组合 B =');
for (const row of Bm) console.log('   [ ' + row.map(x => x.toString().padStart(6)).join('  ') + ' ]');
console.log('AB = BA ？  ' + eq(mat(A1, Bm), mat(Bm, A1)));
for (let i = 0; i < eig1.length; i++) {
  const x = eig1[i], Bx = mulVec(Bm, x);
  const ok = parallel(x, Bx);
  if (!ok) bad++;
  // 顺便把对应的特征值 μM = Bx/x 的比值算出来
  let mu = '—';
  for (let k = 0; k < x.length; k++) if (!x[k].isZero()) { mu = Bx[k].div(x[k]).toString(); break; }
  console.log('  A 的特征向量 x' + (i + 1) + '（λ=' + (i + 1) + '）：B x 与 x 平行 = ' + ok + '，μ = ' + mu);
}

console.log('\n=== 用例二：A 的特征值有重根（1,1,2），结论会失效 ===');
// 注意要选"重根但可对角化"的 A（特征子空间本身有 2 维），B 才能在这个子空间内部转；
// 若 A 是 Jordan 块（特征子空间只有 1 维），B 想转也转不动。
const A2 = [
  [q(1), q(0), q(0)],
  [q(0), q(1), q(0)],
  [q(0), q(0), q(2)],
];
const B2 = commutantBasis(A2);
console.log('与 A 可交换的矩阵解空间维数 = ' + B2.length + '（> n，因为重根内部多出的自由度）');
let found = null;
// 在解空间里找一个"把 λ=1 的特征子空间内部搅在一起"的 B
for (const M of B2) {
  const x = [q(1), q(0), q(0)];
  if (!parallel(x, mulVec(M, x))) { found = M; break; }
}
if (found) {
  const x = [q(1), q(0), q(0)];
  console.log('找到反例：AB = BA 成立（' + eq(mat(A2, found), mat(found, A2)) + '）');
  console.log('  x = (1,0,0) 是 A 的特征向量（λ=1），但 B x = (' + mulVec(found, x).map(v => v.toString()).join(', ') + ') 与 x 不平行');
  console.log('  → 所以"重根"这个条件不是可有可无的：重根时 B 可以在特征子空间内部旋转');
} else {
  console.log('（该用例里没找到反例）');
}

console.log('\n=== 用例三：特征值互异时，可交换的 B 一定是 A 的多项式，且解空间维数 = n ===');
// 用 A 的幂 0..n-1 线性表示 B：解 3 个未知数（B 的 n² 个元素给方程）
(function checkPoly() {
  const n = 3, N = n;
  const powers = []; // powers[k] = A^k，k = 0..N-1
  powers.push(A1.map((r, i) => r.map((_, j) => (i === j ? ONE : ZERO)))); // A^0 = E
  for (let k = 1; k < N; k++) powers.push(mat(powers[k - 1], A1));
  // 未知量 c0,c1,c2：Σ c_k (A^k)_{ij} = B_{ij}
  const rows = [], rhs = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    rows.push(powers.map(P => P[i][j]));
    rhs.push(Bm[i][j]);
  }
  // 高斯消元
  let r = 0; const piv = [];
  for (let c = 0; c < N && r < rows.length; c++) {
    let p = -1; for (let i = r; i < rows.length; i++) if (!rows[i][c].isZero()) { p = i; break; }
    if (p < 0) continue;
    [rows[r], rows[p]] = [rows[p], rows[r]]; [rhs[r], rhs[p]] = [rhs[p], rhs[r]];
    const d = rows[r][c]; rows[r] = rows[r].map(x => x.div(d)); rhs[r] = rhs[r].div(d);
    for (let i = 0; i < rows.length; i++) if (i !== r && !rows[i][c].isZero()) {
      const f = rows[i][c];
      rows[i] = rows[i].map((x, j) => x.sub(f.mul(rows[r][j])));
      rhs[i] = rhs[i].sub(f.mul(rhs[r]));
    }
    piv.push(c); r++;
  }
  const c = new Array(N).fill(ZERO);
  piv.forEach((pc, i) => { c[pc] = rhs[i]; });
  // 校验 Σ c_k A^k = B
  let acc = A1.map(r => r.map(() => ZERO));
  for (let k = 0; k < N; k++) acc = acc.map((row, i) => row.map((x, j) => x.add(powers[k][i][j].mul(c[k]))));
  console.log('  B = ' + c.map((x, k) => '(' + x.toString() + ')·A^' + k).join(' + '));
  console.log('  代回验证 B = c0 E + c1 A + c2 A² ？  ' + eq(acc, Bm));
})();

console.log('\n=== 用例四：具体反例（可写进笔记的那组数）===');
(function concrete() {
  const D = [[q(1), q(0), q(0)], [q(0), q(1), q(0)], [q(0), q(0), q(2)]];   // A = diag(1,1,2)
  const Bc = [[q(1), q(1), q(0)], [q(0), q(1), q(0)], [q(0), q(0), q(3)]];  // B 在重根子空间里"转"
  console.log('  A = diag(1,1,2)，B = [[1,1,0],[0,1,0],[0,0,3]]');
  console.log('  AB = BA ？  ' + eq(mat(D, Bc), mat(Bc, D)));
  const e1 = [q(1), q(0), q(0)], e2 = [q(0), q(1), q(0)];
  console.log('  B e1 = (' + mulVec(Bc, e1).map(v => v.toString()).join(',') + ')，与 e1 平行？ ' + parallel(e1, mulVec(Bc, e1)));
  console.log('  B e2 = (' + mulVec(Bc, e2).map(v => v.toString()).join(',') + ')，与 e2 平行？ ' + parallel(e2, mulVec(Bc, e2)));
  console.log('  → e2 是 A 的特征向量（λ=1），却不是 B 的特征向量：重根时结论失效');
})();

console.log('\n=== 结论 ===');
console.log(bad === 0
  ? '用例一：解空间维数 = n，且解空间里任意组合 B 都让 A 的每个特征向量仍是 B 的特征向量 ✅'
  : '用例一出现了 ' + bad + ' 处不平行 ❌');
