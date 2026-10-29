// tokyo/assets/region-tokyo-A7LxHjud 271 — panel
// Lines 100719-101030 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function eV(e, t, n, r, i, a, o, s) {
  let c = XB(o.seed),
    l = Math.hypot(r - t, i - n),
    u = (r - t) / l,
    d = (i - n) / l,
    f = [0];
  for (; f[f.length - 1] < l - 0.01;) {
    let e = c.range(o.ws[0], o.ws[1]),
      t = l - f[f.length - 1];
    (t - e < o.ws[0] * 0.8 && (e = t), f.push(f[f.length - 1] + e));
  }
  let p = f.slice(1).map(() => c.range(o.h[0], o.h[1])),
    m = (e) => [t + u * e, n + d * e],
    h = (e) => [e[0] - a[0] * o.depth, e[1] - a[1] * o.depth];
  if (e.coarse) {
    let t = p.reduce((e, t) => e + t, 0) / p.length,
      n = m(0),
      r = m(l),
      i = h(n),
      a = h(r);
    (e.push().col(c.pick(o.walls)).mat(0.9, 0, 0, 0),
      e.panel(n[0], n[1], r[0], r[1], 2.6, t),
      o.hiddenBack || e.panel(a[0], a[1], i[0], i[1], 0, t),
      e.panel(i[0], i[1], n[0], n[1], 0, t),
      e.panel(r[0], r[1], a[0], a[1], 0, t),
      e.col(16769712).mat(0.6, 0, 0.3, 1),
      e.panel(n[0], n[1], r[0], r[1], 0, 2.6),
      e.col(6249044).mat(0.75, 0.3, 0, 0),
      e.quad(
        n[0],
        t,
        n[1],
        r[0],
        t,
        r[1],
        a[0],
        t + 0.5,
        a[1],
        i[0],
        t + 0.5,
        i[1],
      ),
      e.pop());
    for (let e = 0; e + 1 < f.length; e++)
      s?.(e, m(f[e]), m(f[e + 1]), p[e], c);
    return f;
  }
  for (let t = 0; t + 1 < f.length; t++) {
    let n = f[t],
      r = f[t + 1],
      i = p[t],
      l = m(n),
      u = m(r),
      d = h(l),
      g = h(u),
      _ = c.pick(o.walls);
    (e.push().col(_, c.range(0.88, 1.06)).mat(0.9, 0, 0, 0),
      e.panel(l[0], l[1], u[0], u[1], 2.6, i));
    let v = i + 0.5;
    (e.col($B(_, 0.72)), o.hiddenBack || e.panel(g[0], g[1], d[0], d[1], 0, v));
    let y = t > 0 ? p[t - 1] : -1,
      b = t + 2 < f.length ? p[t + 1] : -1;
    if (i > y) {
      let t = Math.max(0, y);
      e.quad(d[0], t, d[1], l[0], t, l[1], l[0], i, l[1], d[0], v, d[1]);
    }
    if (i > b) {
      let t = Math.max(0, b);
      e.quad(u[0], t, u[1], g[0], t, g[1], g[0], v, g[1], u[0], i, u[1]);
    }
    e.col(c.pick([7169372, 5988193, 8018504, 5067092])).mat(0.75, 0.3, 0, 0);
    let x = a[0] * 0.35,
      S = a[1] * 0.35;
    (e.quad(
      l[0] + x,
      i,
      l[1] + S,
      u[0] + x,
      i,
      u[1] + S,
      g[0],
      i + 0.5,
      g[1],
      d[0],
      i + 0.5,
      d[1],
    ),
      e.pop(),
      s?.(t, l, u, i, c),
      e.solid(
        Math.min(l[0], u[0], d[0], g[0]),
        Math.min(l[1], u[1], d[1], g[1]),
        Math.max(l[0], u[0], d[0], g[0]),
        Math.max(l[1], u[1], d[1], g[1]),
        0,
        i,
      ));
  }
  return f;
}
function tV(e, t, n, r, i, a, o, s = 0.5) {
  let c = -r[0] * s,
    l = -r[1] * s;
  (e.push(),
    e.col($B(a, 0.8)).mat(0.9, 0, 0, 0),
    e.panel(t[0], t[1], n[0], n[1], 2.35, 2.6),
    e.quad(
      n[0],
      2.35,
      n[1],
      t[0],
      2.35,
      t[1],
      t[0] + c,
      2.35,
      t[1] + l,
      n[0] + c,
      2.35,
      n[1] + l,
    ),
    e.panel(t[0], t[1], t[0] + c, t[1] + l, 0, 2.35),
    e.panel(n[0] + c, n[1] + l, n[0], n[1], 0, 2.35));
  let u = (r, i, a = 1, o) => {
    (e.col(r).mat(0.6, 0, i, o ? G : a),
      o
        ? e.wall(t[0] + c, t[1] + l, n[0] + c, n[1] + l, 0, 2.35, o, 2.2, 2.35)
        : e.panel(t[0] + c, t[1] + l, n[0] + c, n[1] + l, 0, 2.35));
  };
  if (i === `shutter`)
    (e.col(10132636).mat(0.6, 0.5, 0, 0),
      e.panel(t[0] + c, t[1] + l, n[0] + c, n[1] + l, 0, 2.35));
  else if (i === `glass`)
    u(o.pick([16774372, 16051420, 16775404]), 0.22, 1, ZB.doors);
  else if (i === `counter`) {
    (u(o.pick([16773336, 16508616, 16777215]), 0.24, 1, ZB.shoji),
      e.col(7031340).mat(0.7, 0, 0, 0));
    let i = r[0] * 0.15,
      a = r[1] * 0.15;
    e.panel(
      t[0] + c + i * 2,
      t[1] + l + a * 2,
      n[0] + c + i * 2,
      n[1] + l + a * 2,
      0,
      1.05,
    );
  } else {
    u($B(a, 0.55), 0, 0);
    let i = Math.hypot(n[0] - t[0], n[1] - t[1]),
      s = (n[0] - t[0]) / i,
      d = (n[1] - t[1]) / i,
      f = i * o.range(0.15, 0.45),
      p = Math.min(i - 0.15, f + 0.85),
      m = t[0] + c + s * f - r[0] * -0.02,
      h = t[1] + l + d * f - r[1] * -0.02,
      g = t[0] + c + s * p - r[0] * -0.02,
      _ = t[1] + l + d * p - r[1] * -0.02;
    (e.col(o.pick([4861726, 2959912, 8068634, 2373194])).mat(0.6, 0, 0, 0),
      e.panel(m, h, g, _, 0, 2),
      e.col(16767136).mat(0.5, 0, 0.32, 1));
    let v = r[0] * 0.02,
      y = r[1] * 0.02;
    e.panel(
      m + s * 0.22 + v,
      h + d * 0.22 + y,
      g - s * 0.22 + v,
      _ - d * 0.22 + y,
      1.2,
      1.7,
    );
  }
  e.pop();
}
function nV(e, t, n, r, i, a = 2.3, o = 0.75, s = 3) {
  let c = r[0] * 0.08,
    l = r[1] * 0.08;
  e.push().col(i).mat(0.95, 0, 0, 0);
  for (let r = 0; r < s; r++) {
    let i = r / s + 0.012,
      u = (r + 1) / s - 0.012,
      d = t[0] + (n[0] - t[0]) * i + c,
      f = t[1] + (n[1] - t[1]) * i + l,
      p = t[0] + (n[0] - t[0]) * u + c,
      m = t[1] + (n[1] - t[1]) * u + l;
    (e.panel(d, f, p, m, a - o, a), e.panel(p, m, d, f, a - o, a));
  }
  e.pop();
}
function rV(e, t, n, r, i) {
  (e.push().col(15000284).mat(0.7, 0.1, 0, 0),
    KB(e, t + i[0] * 0.2, r + i[1] * 0.2, i, 0.8, 0.3, n, n + 0.55),
    e.col(4868680),
    KB(e, t + i[0] * 0.36, r + i[1] * 0.36, i, 0.42, 0.02, n + 0.07, n + 0.48),
    e.pop());
}
function iV(e, t, n, r, i, a, o, s, c) {
  if (e.coarse) return;
  let l = HB(r),
    u = Math.min(1.1, i * 0.32),
    d = r[0] * 0.03,
    f = r[1] * 0.03;
  (e
    .push()
    .col(a.pick([16767392, 16304272, 16770752]))
    .mat(0.5, 0, 0.22, 1),
    e.panel(
      t - l[0] * u + d,
      n - l[1] * u + f,
      t + l[0] * u + d,
      n + l[1] * u + f,
      0.9,
      2.2,
    ),
    e.col(3811870).mat(0.8, 0, 0, 0),
    e.panel(
      t - l[0] * (u + 0.12) + d * 0.5,
      n - l[1] * (u + 0.12) + f * 0.5,
      t + l[0] * (u + 0.12) + d * 0.5,
      n + l[1] * (u + 0.12) + f * 0.5,
      0.75,
      2.35,
    ),
    e.col(3811870).mat(0.8, 0, 0, 0),
    e.col(16178350).mat(0.5, 0, 0.22, 1),
    e.panel(
      t - l[0] * 0.45 + d,
      n - l[1] * 0.45 + f,
      t + l[0] * 0.45 + d,
      n + l[1] * 0.45 + f,
      3.5,
      4.3,
    ),
    e.pop(),
    GB(e, t, 2.55, n, r, Math.min(i - 0.4, 2), 0.55, 0.08, s, o, c, {
      raw: !0,
      lit: 0.5,
      px: 12,
      flat: !0,
    }),
    YB(
      e,
      t + l[0] * (u + 0.45) + r[0] * 0.35,
      2.45,
      n + l[1] * (u + 0.45) + r[1] * 0.35,
      0.6,
    ));
}
function aV(e, t, n) {
  let r = e.w.n;
  n();
  let i = e.w.pos,
    a = e.ox,
    o = e.gy,
    s = e.oz;
  for (let n = r; n < e.w.n; n++)
    ((i[n * 3] = a + (i[n * 3] - a) * t),
      (i[n * 3 + 1] = o + (i[n * 3 + 1] - o) * t),
      (i[n * 3 + 2] = s + (i[n * 3 + 2] - s) * t));
}
function bwe(e, t, n, r, i) {
  let a = e.w.n;
  i();
  let o = Math.cos(e.facing),
    s = Math.sin(e.facing),
    c = e.wx(0, n),
    l = e.gy + t,
    u = e.wz(0, n),
    d = Math.cos(r),
    f = Math.sin(r),
    p = (e, t, n, r, i) => {
      let a = e[t] - n,
        c = e[t + 1] - r,
        l = e[t + 2] - i,
        u = a * o + l * s,
        p = 0 * l - s * c,
        m = s * a - o * l,
        h = o * c - 0 * a;
      ((e[t] = n + a * d + p * f + o * u * (1 - d)),
        (e[t + 1] = r + c * d + m * f),
        (e[t + 2] = i + l * d + h * f + s * u * (1 - d)));
    };
  for (let t = a; t < e.w.n; t++)
    (p(e.w.pos, t * 3, c, l, u), p(e.w.nor, t * 3, 0, 0, 0));
}
r.add({
  歌舞伎町塔: `歌舞伎町タワー`,
  電影城廣場: `シネシティ広場`,
  新宿東峰大樓: `新宿東峰ビル`,
  燈台: `凪`,
  藍: `朔`,
  新宿黃金街: `新宿ゴールデン街`,
});
var oV = (e, t) => (n) => ({ x: e, z: t, gy: n.groundHeight(e, t), facing: 0 }),
  sV = { x: -2107.5, z: 0.5 },
  cV = { x0: -17, x1: 17, z0: -15.5, z1: 16, h: 44 },
  lV = { x0: -15, x1: 15, z0: -13.5, z1: 14, h: 112 },
  uV = { x0: -12.5, x1: 12.5, z0: -11, z1: 12, h: 206 },
  dV = 225,
  fV = (e) => zk(e.x0, e.z0, e.x1, e.z1, 0);
function pV(e) {
  return [
    [[e.x0, e.z1], [e.x1, e.z1], zB],
    [[e.x1, e.z1], [e.x1, e.z0], BB],
    [[e.x1, e.z0], [e.x0, e.z0], RB],
    [[e.x0, e.z0], [e.x0, e.z1], VB],
  ];
}
function mV(e, t) {
  let n = 1 - (2 * e - 1) ** 2,
    r = 0.5 + 0.5 * Math.sin(e * 19 + t) * Math.sin(e * 7.3 + t * 1.7);
  return Math.max(0.12, 0.25 + 0.75 * n * (0.55 + 0.45 * r));
}
