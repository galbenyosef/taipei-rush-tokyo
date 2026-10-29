// tokyo/assets/characters-p5grEi98 06 — math
// Lines 1824-1975 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function xt(e) {
  let t = new y();
  (t.setAttribute(`position`, new x(e.pos, 3)),
    t.setAttribute(`normal`, new x(e.nor, 3)),
    t.setAttribute(`color`, new x(e.col, 3)),
    t.setAttribute(`uv`, new x(e.uv, 2)),
    t.setAttribute(`uvRect`, new x(e.rect, 4)),
    t.setAttribute(`surf`, new x(e.surf, 4)),
    t.setAttribute(`skinIndex`, new x(e.si, 4)),
    t.setAttribute(`skinWeight`, new x(e.sw, 4)),
    t.setIndex(new x(e.idx, 1)),
    t.addGroup(0, e.n0, 0),
    e.idx.length > e.n0 && t.addGroup(e.n0, e.idx.length - e.n0, 1));
  let n = e.bounds;
  return (
    n && n.length >= 10
      ? ((t.boundingSphere = new o(new D(n[0], n[1], n[2]), n[3])),
        (t.boundingBox = new O(
          new D(n[4], n[5], n[6]),
          new D(n[7], n[8], n[9]),
        )))
      : (t.computeBoundingSphere(), t.computeBoundingBox()),
    t
  );
}
function B(e, t, n, r) {
  ((e.i[0] = t),
    (e.i[1] = n),
    (e.w[0] = 1 - r),
    (e.w[1] = r),
    (e.i[2] = e.i[3] = 0),
    (e.w[2] = e.w[3] = 0));
}
function V(e, t, n) {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
}
function St(e, t, n, r, i) {
  let a = 0;
  for (; a < n.length && i < n[a];) a++;
  let o = -1,
    s = 1 / 0;
  if (a - 1 >= 0) {
    let e = Math.abs(i - n[a - 1]);
    e < s && ((s = e), (o = a - 1));
  }
  if (a < n.length) {
    let e = Math.abs(i - n[a]);
    e < s && ((s = e), (o = a));
  }
  if (o < 0 || s > r) {
    B(e, t[a], t[a], 0);
    return;
  }
  let c = (n[o] + r - i) / (2 * r),
    l = c < 0 ? 0 : c > 1 ? 1 : c * c * (3 - 2 * c);
  B(e, t[o], t[o + 1], l);
}
function Ct(e, t, n) {
  if (n <= 0) return;
  for (let t = 0; t < 4; t++) e.w[t] *= 1 - n;
  for (let r = 0; r < 4; r++)
    if (e.i[r] === t && e.w[r] > 0) {
      e.w[r] += n;
      return;
    }
  let r = 0;
  for (let t = 1; t < 4; t++) e.w[t] < e.w[r] && (r = t);
  ((e.i[r] = t), (e.w[r] = n));
}
var wt = Math.PI * 2;
function Tt(e, t, n) {
  let r = e.length;
  if (n <= e[0][0]) return e[0][t];
  if (n >= e[r - 1][0]) return e[r - 1][t];
  let i = 0;
  for (; i < r - 2 && n > e[i + 1][0];) i++;
  let a = e[Math.max(0, i - 1)],
    o = e[i],
    s = e[i + 1],
    c = e[Math.min(r - 1, i + 2)],
    l = (n - o[0]) / (s[0] - o[0]),
    u = s[0] - o[0],
    d = ((s[t] - a[t]) / Math.max(1e-6, s[0] - a[0])) * u,
    f = ((c[t] - o[t]) / Math.max(1e-6, c[0] - o[0])) * u,
    p = l * l,
    m = p * l;
  return (
    (2 * m - 3 * p + 1) * o[t] +
    (m - 2 * p + l) * d +
    (-2 * m + 3 * p) * s[t] +
    (m - p) * f
  );
}
function Et(e, t, n, r, i, a = 2) {
  let o = Math.sin(e),
    s = Math.cos(e),
    c = o >= 0 ? t : n,
    l = s >= 0 ? r : i,
    u = Math.abs(o) / c,
    d = Math.abs(s) / l;
  return a === 2
    ? 1 / Math.sqrt(u * u + d * d)
    : 1 / (u ** +a + d ** +a) ** (1 / a);
}
var Dt = (e, t) => Math.exp(-(e * e) / (t * t)),
  Ot = (e, t) => {
    let n = (e - t) % wt;
    return (n > Math.PI && (n -= wt), n < -Math.PI && (n += wt), n);
  },
  kt = new D(),
  At = new D(),
  jt = new D(),
  Mt = new D(),
  Nt = new D(),
  Pt = new D(),
  Ft = new D(),
  It = new D(0, 0, -1);
function Lt(e, t, n, r, i, a) {
  (Mt.subVectors(e.b, e.a),
    Nt.subVectors(e.c, e.b),
    t <= 1
      ? n.copy(e.a).addScaledVector(Mt, t)
      : n.copy(e.b).addScaledVector(Nt, t - 1));
  let o = Pt.copy(Mt).normalize(),
    s = Ft.copy(Nt).normalize(),
    c = V(0.8, 1.2, t);
  (r
    .copy(o)
    .multiplyScalar(1 - c)
    .addScaledVector(s, c)
    .normalize(),
    i.copy(It).addScaledVector(r, -It.dot(r)).normalize(),
    a.crossVectors(r, i).normalize());
}
function Rt(e, t, n, r = 0) {
  return Et(
    t,
    Tt(e.keys, 1, n) + r,
    Tt(e.keys, 2, n) + r,
    Tt(e.keys, 3, n) + r,
    Tt(e.keys, 4, n) + r,
  );
}
function zt(e, t, n, r, i) {
  Lt(e, n, i, kt, At, jt);
  let a = Rt(e, t, n, r);
  return (
    i.addScaledVector(jt, Math.sin(t) * a).addScaledVector(At, Math.cos(t) * a),
    i
  );
}
