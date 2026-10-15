// tokyo/assets/characters-BvEb7Acx 06 — math
// Lines 1824-1975 of readable/tokyo/assets/characters-BvEb7Acx.pretty.js (statement-aligned).
function bt(e) {
  let t = new v();
  (t.setAttribute(`position`, new y(e.pos, 3)),
    t.setAttribute(`normal`, new y(e.nor, 3)),
    t.setAttribute(`color`, new y(e.col, 3)),
    t.setAttribute(`uv`, new y(e.uv, 2)),
    t.setAttribute(`uvRect`, new y(e.rect, 4)),
    t.setAttribute(`surf`, new y(e.surf, 4)),
    t.setAttribute(`skinIndex`, new y(e.si, 4)),
    t.setAttribute(`skinWeight`, new y(e.sw, 4)),
    t.setIndex(new y(e.idx, 1)),
    t.addGroup(0, e.n0, 0),
    e.idx.length > e.n0 && t.addGroup(e.n0, e.idx.length - e.n0, 1));
  let n = e.bounds;
  return (
    n && n.length >= 10
      ? ((t.boundingSphere = new o(new k(n[0], n[1], n[2]), n[3])),
        (t.boundingBox = new O(
          new k(n[4], n[5], n[6]),
          new k(n[7], n[8], n[9]),
        )))
      : (t.computeBoundingSphere(), t.computeBoundingBox()),
    t
  );
}
function V(e, t, n, r) {
  ((e.i[0] = t),
    (e.i[1] = n),
    (e.w[0] = 1 - r),
    (e.w[1] = r),
    (e.i[2] = e.i[3] = 0),
    (e.w[2] = e.w[3] = 0));
}
function H(e, t, n) {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
}
function xt(e, t, n, r, i) {
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
    V(e, t[a], t[a], 0);
    return;
  }
  let c = (n[o] + r - i) / (2 * r),
    l = c < 0 ? 0 : c > 1 ? 1 : c * c * (3 - 2 * c);
  V(e, t[o], t[o + 1], l);
}
function St(e, t, n) {
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
var Ct = Math.PI * 2;
function wt(e, t, n) {
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
function Tt(e, t, n, r, i, a = 2) {
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
var Et = (e, t) => Math.exp(-(e * e) / (t * t)),
  Dt = (e, t) => {
    let n = (e - t) % Ct;
    return (n > Math.PI && (n -= Ct), n < -Math.PI && (n += Ct), n);
  },
  Ot = new k(),
  kt = new k(),
  At = new k(),
  jt = new k(),
  Mt = new k(),
  Nt = new k(),
  Pt = new k(),
  Ft = new k(0, 0, -1);
function It(e, t, n, r, i, a) {
  (jt.subVectors(e.b, e.a),
    Mt.subVectors(e.c, e.b),
    t <= 1
      ? n.copy(e.a).addScaledVector(jt, t)
      : n.copy(e.b).addScaledVector(Mt, t - 1));
  let o = Nt.copy(jt).normalize(),
    s = Pt.copy(Mt).normalize(),
    c = H(0.8, 1.2, t);
  (r
    .copy(o)
    .multiplyScalar(1 - c)
    .addScaledVector(s, c)
    .normalize(),
    i.copy(Ft).addScaledVector(r, -Ft.dot(r)).normalize(),
    a.crossVectors(r, i).normalize());
}
function Lt(e, t, n, r = 0) {
  return Tt(
    t,
    wt(e.keys, 1, n) + r,
    wt(e.keys, 2, n) + r,
    wt(e.keys, 3, n) + r,
    wt(e.keys, 4, n) + r,
  );
}
function Rt(e, t, n, r, i) {
  It(e, n, i, Ot, kt, At);
  let a = Lt(e, t, n, r);
  return (
    i.addScaledVector(At, Math.sin(t) * a).addScaledVector(kt, Math.cos(t) * a),
    i
  );
}
