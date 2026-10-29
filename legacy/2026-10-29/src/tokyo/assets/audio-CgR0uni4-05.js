// tokyo/assets/audio-CgR0uni4 05 — math
// Lines 2812-2855 of readable/tokyo/assets/audio-CgR0uni4.pretty.js (statement-aligned).
function R(e, t, n, r) {
  let i = new Float32Array(e),
    a = r.map(() => n.next() * s);
  for (let n = 0; n < e; n++) {
    let e = 0;
    for (let i = 0; i < r.length; i++) e += Math.sin((s * r[i] * n) / t + a[i]);
    i[n] = 0.5 + (0.5 * e) / r.length;
  }
  return i;
}
function z(e, t, n, r, i = 0.8) {
  return k({ sr: n, ch: [oe(e, n, r), oe(t, n, r)] }, i);
}
function Oe(e, t, n, r, i, a, o, s, c, l, u) {
  let d = p(n, i);
  (S(d, n, c), x(d, n, l));
  let f = e.length;
  for (let c = Math.round(r * a); c > 0; c--) {
    let r = Math.floor(i.next() * (f - 1)),
      a = i.range(o, s) * n,
      c = Math.min(Math.round(a * 5), f - r),
      l = Math.floor(i.next() * (d.length - c - 1)),
      p = i.next(),
      m = u * p * p * p,
      h = ((i.bi() + 1) * Math.PI) / 4,
      g = Math.cos(h) * m,
      _ = Math.sin(h) * m,
      v = Math.exp(-1 / a),
      y = 1;
    for (let n = 0; n < c; n++, y *= v) {
      let i = d[l + n] * y;
      ((e[r + n] += i * g), (t[r + n] += i * _));
    }
  }
}
function ke(e, t, n, r, i, a, o) {
  for (let s = Math.round(r * a); s > 0; s--) {
    let r = Math.round(0.06 * n),
      a = p(r, i);
    (C(a, n, i.range(900, 2600), 0.9),
      D(a, n, 5e-4, i.range(0.006, 0.02)),
      j(e, t, a, i.bi() * 0.9, o * i.range(0.3, 1), i.next() * (e.length - r)));
  }
}
