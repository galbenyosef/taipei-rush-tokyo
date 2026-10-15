// tokyo/assets/worker-DuEI-Qg4 05 — math
// Lines 2755-2798 of readable/tokyo/assets/worker-DuEI-Qg4.pretty.js (statement-aligned).
function R(e, n, r, i) {
  let a = new Float32Array(e),
    o = i.map(() => r.next() * t);
  for (let r = 0; r < e; r++) {
    let e = 0;
    for (let a = 0; a < i.length; a++) e += Math.sin((t * i[a] * r) / n + o[a]);
    a[r] = 0.5 + (0.5 * e) / i.length;
  }
  return a;
}
function z(e, t, n, r, i = 0.8) {
  return C({ sr: n, ch: [ie(e, n, r), ie(t, n, r)] }, i);
}
function Se(e, t, n, r, i, a, o, c, l, u, d) {
  let f = s(n, i);
  (g(f, n, l), h(f, n, u));
  let p = e.length;
  for (let s = Math.round(r * a); s > 0; s--) {
    let r = Math.floor(i.next() * (p - 1)),
      a = i.range(o, c) * n,
      s = Math.min(Math.round(a * 5), p - r),
      l = Math.floor(i.next() * (f.length - s - 1)),
      u = i.next(),
      m = d * u * u * u,
      h = ((i.bi() + 1) * Math.PI) / 4,
      g = Math.cos(h) * m,
      _ = Math.sin(h) * m,
      v = Math.exp(-1 / a),
      y = 1;
    for (let n = 0; n < s; n++, y *= v) {
      let i = f[l + n] * y;
      ((e[r + n] += i * g), (t[r + n] += i * _));
    }
  }
}
function Ce(e, t, n, r, i, a, o) {
  for (let c = Math.round(r * a); c > 0; c--) {
    let r = Math.round(0.06 * n),
      a = s(r, i);
    (_(a, n, i.range(900, 2600), 0.9),
      x(a, n, 5e-4, i.range(0.006, 0.02)),
      T(e, t, a, i.bi() * 0.9, o * i.range(0.3, 1), i.next() * (e.length - r)));
  }
}
