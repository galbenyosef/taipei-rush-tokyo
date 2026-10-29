// tokyo/assets/region-tokyo-A7LxHjud 233 — math
// Lines 89371-89476 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function sF(e, t, n) {
  let r = 0.001,
    i = oF(e - r, t, n),
    a = oF(e + r, t, n),
    o = oF(e, t - r, n),
    s = oF(e, t + r, n),
    c = a[0] - i[0],
    l = a[1] - i[1],
    u = a[2] - i[2],
    d = s[0] - o[0],
    f = s[1] - o[1],
    p = s[2] - o[2],
    m = l * p - u * f,
    h = u * d - c * p,
    g = c * f - l * d;
  h < 0 && ((m = -m), (h = -h), (g = -g));
  let _ = Math.hypot(m, h, g) || 1;
  return [m / _, h / _, g / _];
}
function cF(e, t, n, r, i = 0, a = t) {
  let o = e.white,
    s = [];
  for (let c = i; c <= a; c++)
    for (let i = 0; i <= t; i++) {
      let a = -1 + (2 * i) / t,
        l = -1 + (2 * c) / t,
        u = oF(a, l, n),
        d = sF(a, l, n),
        f = (Math.max(0, 1 - a * a) * Math.max(0, 1 - l * l)) ** 0.5;
      (r && e.emis(0.045 + 0.07 * f, 1),
        s.push(e.v(u[0], u[1], u[2], d[0], d[1], d[2], o.u0, o.v0)));
    }
  for (let n = 0; n < a - i; n++)
    for (let r = 0; r < t; r++) {
      let i = s[n * (t + 1) + r],
        a = s[n * (t + 1) + r + 1],
        o = s[(n + 1) * (t + 1) + r + 1],
        c = s[(n + 1) * (t + 1) + r];
      (e.tri(i, c, o), e.tri(i, o, a));
    }
}
function dxe(e, t) {
  for (let n = 0; n < 2; n++)
    for (let r = 1; r < 16; r++) {
      let i = -1 + r * 0.125,
        a = null;
      for (let r = 0; r <= t; r++) {
        let o = -1 + (2 * r) / t,
          [s, c] = n ? [o, i] : [i, o],
          l = oF(s, c, 0),
          u = sF(s, c, 0),
          d = n ? oF(s, c + 0.01, 0) : oF(s + 0.01, c, 0),
          f = d[0] - l[0],
          p = d[2] - l[2],
          m = Math.hypot(f, p) || 1;
        ((f = (f / m) * 0.24), (p = (p / m) * 0.24));
        let h = 0.16,
          g = [l[0] - f + u[0] * h, l[1] + u[1] * h, l[2] - p + u[2] * h],
          _ = [l[0] + f + u[0] * h, l[1] + u[1] * h, l[2] + p + u[2] * h];
        (a && rM(e, a[0], a[1], _, g, u), (a = [g, _]));
      }
    }
}
function lF(e, t, n) {
  let r = e === 0 ? [-t, -1] : e === 1 ? [-1, t] : e === 2 ? [t, 1] : [1, -t],
    i = 0.004,
    [a, o] = rF(r[0], r[1]),
    s =
      e === 0
        ? [-t - i, -1]
        : e === 1
          ? [-1, t + i]
          : e === 2
            ? [t + i, 1]
            : [1, -t - i],
    [c, l] = rF(s[0], s[1]),
    u = c - a,
    d = l - o,
    f = Math.hypot(u, d) || 1;
  ((u /= f), (d /= f));
  let p = -d,
    m = u;
  return { x: a + p * n, z: o + m * n, head: Math.atan2(p, -m) };
}
var uF = [
    [3, -0.5, `22`, !0],
    [3, 0.1, `25`, !0],
    [2, -0.42, `20`, !1],
    [2, 0.02, `21`, !1],
    [1, -0.5, `33`, !1],
    [1, 0.1, `40`, !1],
  ],
  dF = [`22`, `25`];
function fF(e) {
  let t = new Set(),
    n = uF.filter((e) => dF.includes(e[2])).map(([e, t]) => lF(e, t, 0));
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = e[(r + 1) % e.length],
      o = (i[0] + a[0]) / 2,
      s = (i[1] + a[1]) / 2;
    n.some((e) => Math.hypot(e.x - o, e.z - s) < 5) && t.add(r);
  }
  return t;
}
var pF = (e) => 0.5 - (1 * (e - XP)) / 22.4;
