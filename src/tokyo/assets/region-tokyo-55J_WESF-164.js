// tokyo/assets/region-tokyo-55J_WESF 164 — math
// Lines 68182-68469 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function VC(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function vme(e, t, n, r, i, a, o) {
  e.lathe(
    t,
    r,
    [
      0.01,
      n - a * 0.35,
      i * 0.75,
      n - a * 0.3,
      i,
      n,
      i * 0.7,
      n + a * 0.55,
      0.01,
      n + a * 0.7,
    ],
    o,
    (t * 7 + r * 3) % 1,
  );
}
function HC(e, t, n, r, i) {
  let a = VC(i),
    o = a() * Math.PI * 2,
    s = 0.12 + a() * 0.22,
    c = t + Math.cos(o) * s * r,
    l = n + Math.sin(o) * s * r,
    u = t + Math.cos(o + 0.6) * s * r * 0.35,
    d = n + Math.sin(o + 0.6) * s * r * 0.35;
  (e.push().col(5062192).mat(0.95, 0, 0, 0),
    e.rod(t, 0, n, u, r * 0.5, d, r * 0.04, 6, r * 0.03),
    e.rod(u, r * 0.5, d, c, r * 0.86, l, r * 0.03, 5, r * 0.016));
  let f = e.coarse ? 2 : 3 + Math.floor(a() * 2),
    p = [[c, r * 0.9, l, r * 0.17 + a() * 0.4]];
  for (let t = 0; t < f; t++) {
    let n = 0.5 + 0.32 * (t / Math.max(1, f - 1)) + a() * 0.05,
      i = u + (c - u) * ((n - 0.5) / 0.36),
      s = d + (l - d) * ((n - 0.5) / 0.36),
      m = o + Math.PI * (0.55 + t * 0.9 + a() * 0.4),
      h = r * (0.22 + a() * 0.12) * (1.1 - n * 0.5),
      g = i + Math.cos(m) * h,
      _ = s + Math.sin(m) * h,
      v = r * n + h * 0.18;
    (e.coarse || e.rod(i, r * n, s, g, v, _, r * 0.014, 4, r * 0.008),
      p.push([g, v + 0.25, _, r * (0.13 + a() * 0.05)]));
  }
  for (let [t, n, r, i] of p)
    (e.col(2244650, 0.85 + a() * 0.3).mat(0.95, 0, 0, 0),
      vme(e, t, n, r, i, i * 0.55, e.coarse ? 5 : 7));
  e.pop();
}
function UC(e, t, n, r, i) {
  let a = VC(i);
  (e.push().col(7036754).mat(0.95, 0, 0, 0),
    e.rod(t, 0, n, t, r * 0.45, n, r * 0.035, 6, r * 0.025));
  let o = 0.9 + a() * 0.2;
  e.col(4156212, o);
  let s = e.coarse ? 5 : 7;
  (e.lathe(
    t,
    n,
    [
      0.2,
      r * 0.35,
      r * 0.22,
      r * 0.42,
      r * 0.3,
      r * 0.6,
      r * 0.27,
      r * 0.8,
      r * 0.14,
      r * 0.95,
      0.02,
      r,
    ],
    s,
    a(),
  ),
    e.pop());
}
function yme(e, t, n, r, i = 1) {
  if (
    (e.push().col(13222580).mat(0.8, 0, 0.06, G),
    e.box(
      t - 0.45 * i,
      n,
      r - 0.45 * i,
      t + 0.45 * i,
      n + 1.2 * i,
      r + 0.45 * i,
    ),
    e.col(3814184).mat(0.45, 0.7, 0, 0),
    e.cylY(t, r, n + 1.2 * i, n + 4.6 * i, 0.16 * i, 8, 0.11 * i, !1),
    !e.coarse)
  ) {
    e.lathe(
      t,
      r,
      [0.28 * i, n + 1.2 * i, 0.2 * i, n + 1.6 * i, 0.14 * i, n + 1.7 * i],
      8,
    );
    for (let a = 0; a < 4; a++) {
      let o = (a / 4) * Math.PI * 2 + Math.PI / 4,
        s = t + Math.cos(o) * 0.7 * i,
        c = r + Math.sin(o) * 0.7 * i;
      (e.col(3814184).mat(0.45, 0.7, 0, 0),
        e.rod(t, n + 4.3 * i, r, s, n + 4.75 * i, c, 0.05 * i, 4),
        e.col(16183518).mat(0.3, 0, 0.6, 1),
        e.lathe(
          s,
          c,
          [
            0.01,
            n + 4.75 * i,
            0.24 * i,
            n + 4.95 * i,
            0.24 * i,
            n + 5.15 * i,
            0.01,
            n + 5.35 * i,
          ],
          6,
        ));
    }
  }
  (e.col(16183518).mat(0.3, 0, 0.7, 1),
    e.lathe(
      t,
      r,
      [
        0.01,
        n + 4.6 * i,
        0.3 * i,
        n + 4.85 * i,
        0.3 * i,
        n + 5.2 * i,
        0.01,
        n + 5.5 * i,
      ],
      e.coarse ? 4 : 8,
    ),
    e.col(3814184).mat(0.45, 0.7, 0, 0),
    e.lathe(t, r, [0.12 * i, n + 5.5 * i, 0.03 * i, n + 6.2 * i], 6),
    e.pop(),
    e.pole(t, r, 0.45 * i, n, n + 5));
}
function WC(e, t, n, r, i = 4.2) {
  (e.push().col(3092788).mat(0.5, 0.6, 0, 0),
    e.cylY(t, r, n, n + i, 0.09, 6, 0.07, !1),
    e.col(15985360).mat(0.3, 0, 0.6, 1),
    e.box(t - 0.22, n + i, r - 0.22, t + 0.22, n + i + 0.55, r + 0.22),
    e.col(3092788).mat(0.5, 0.6, 0, 0),
    e.lathe(t, r, [0.34, n + i + 0.55, 0.02, n + i + 0.85], 4, Math.PI / 4),
    e.pop());
}
function GC(e, t, n, r, i, a) {
  let o = i * 0.36;
  (e.push().col(16777215).mat(0.6, 0, 0.5, G),
    e.lathe(
      t,
      r,
      [
        o * 0.62,
        n - i,
        o * 0.95,
        n - i * 0.82,
        o,
        n - i * 0.5,
        o * 0.95,
        n - i * 0.18,
        o * 0.62,
        n,
      ],
      e.coarse ? 6 : 10,
      0,
      a,
    ),
    e.pop());
}
var KC = { x: -494.5, z: 165 },
  qC = -8.5,
  bme = 8.5,
  JC = -1.65,
  YC = 10.5,
  XC = 12.85,
  ZC = 6.4,
  QC = 2.5,
  $C = [
    [-7.6, -1.3],
    [1.3, 7.6],
  ],
  ew = { lx: -35, w: 3.6, deck: 11.4 },
  tw = { lx: -37, lz: 37.5 },
  nw = 13090994,
  rw = 15724264,
  iw = 9212312;
function aw(e) {
  for (let [t, n] of $C)
    if (e > t && e < n) {
      let r = (t + n) / 2,
        i = (n - t) / 2,
        a = (e - r) / i;
      return -1.3499999999999999 + Math.sqrt(Math.max(0, 1 - a * a)) * i;
    }
  return null;
}
var ow = (e) =>
  e < -18
    ? 0.3
    : e < -6
      ? 0.3 + 2.2 * Math.sin(((e + 18) / 12) * Math.PI * 0.5)
      : QC;
function sw(e, t, n) {
  let r = t.c(`granite`),
    i = e.coarse ? 2 : 1,
    a = n * ZC;
  for (let t = -18; t < 10.499; t += i) {
    let o = Math.min(YC, t + i),
      s = ow(t) + 0.05,
      c = ow(o) + 0.05,
      l = aw(t + 0.001),
      u = aw(o - 0.001),
      d = l ?? (t >= -8.7 && t <= bme ? JC : -0.2),
      f = u ?? (o >= -8.7 && o <= 8.7 ? JC : -0.2),
      p = Math.min(d, f),
      m = Math.max(s, c);
    for (let i = Math.floor(p / 2) * 2; i < m; i += 2) {
      let l = Math.max(i, d),
        u = Math.max(i, f),
        p = Math.min(i + 2, s),
        m = Math.min(i + 2, c);
      if (p <= l + 0.001 && m <= u + 0.001) continue;
      let h = (((t % 2) + 2) % 2) / 2,
        g = h + (o - t) / 2,
        _ = (e) => (e - i) / 2;
      n > 0
        ? e.quad(
            a,
            u,
            o,
            a,
            l,
            t,
            a,
            Math.max(l, p),
            t,
            a,
            Math.max(u, m),
            o,
            r,
            g,
            _(u),
            h,
            _(Math.max(l, p)),
          )
        : e.quad(
            a,
            l,
            t,
            a,
            u,
            o,
            a,
            Math.max(u, m),
            o,
            a,
            Math.max(l, p),
            t,
            r,
            h,
            _(l),
            g,
            _(Math.max(u, m)),
          );
    }
  }
}
