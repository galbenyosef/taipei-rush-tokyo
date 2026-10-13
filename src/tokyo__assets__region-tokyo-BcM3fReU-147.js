// tokyo__assets__region-tokyo-BcM3fReU 147 — col
// Lines 63245-63423 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function jF(e, t, n, r, i, a) {
  let o = 1.05;
  if (
    (e.col(EF).mat(0.8, 0, 0.12, Y),
    e.box(r, 12.55, i - o, n, yF, i, t.c(`granite`), 2.4, 0.45),
    e.flat(r, i - o, n, i, 12.55, t.c(`granite`), 0, 0, !1),
    e.col(16777215).emis(0.14, Y),
    e.wall(
      n,
      i - o + 0.05,
      r,
      i - o + 0.05,
      yF,
      14.1,
      t.A.sub(`tnmBay`, 0, 0, 1, 0.234),
      a,
      1.1,
    ),
    e.col(EF).emis(0.08, Y),
    e.box(r, 14.1, i - o, n, 14.25, i - o + 0.3),
    !e.coarse)
  ) {
    e.col(EF, 0.95).emis(0.12, Y);
    for (let t = r; t <= n + 0.001; t += a)
      e.box(t - 0.28, 11.75, i - o + 0.15, t + 0.28, 12.55, i);
  }
  e.emis(0, 0);
}
function MF(e, t, n) {
  (e.col(15524556).mat(0.75, 0, 0.12, Y),
    e.lathe(t, n, [0.36, 14.25, 0.33, 15.7], e.seg(8), 0, e.white, !1, !0),
    e.col(15983296).emis(0.5, 1),
    e.lathe(t, n, [0.33, 15.7, 0.32, bF], e.seg(8), 0, e.white, !1, !0),
    e.col(15654072).emis(0.42, 1),
    e.box(t - 0.5, bF, n - 0.5, t + 0.5, 16.65, n),
    e.coarse || e.box(t - 0.85, 16.65, n - 0.6, t + 0.85, xF, n),
    e.emis(0, 0));
}
function NF(e, t, n, r = 3.8, i = 10.4, a = 2.2) {
  let o = 0.35,
    s = t - a / 2,
    c = t + a / 2;
  (e.col(EF, 0.92).mat(0.85, 0, 0.1, Y),
    e.panel(s, n + o, s, n, r, i),
    e.panel(c, n, c, n + o, r, i),
    e.flat(s, n, c, n + o, i, e.white, 0, 0, !1),
    e.flat(s, n, c, n + o, r),
    e.col(2763306).mat(0.2, 0.3, 0.04, Y),
    e.panel(c, n + o, s, n + o, r, i),
    e.col(5919044).mat(0.5, 0.6, 0, 0));
  for (let t of [0.33, 0.67])
    e.box(s + a * t - 0.05, r, n + o - 0.08, s + a * t + 0.05, i, n + o - 0.02);
  for (let t of [0.2, 0.55, 0.85])
    e.box(
      s,
      r + (i - r) * t - 0.05,
      n + o - 0.08,
      c,
      r + (i - r) * t + 0.05,
      n + o - 0.02,
    );
}
function PF(e, t, n, r) {
  let i = r >>> 0,
    a = () => (i = (Math.imul(i, 1103515245) + 12345) >>> 0) / 4294967296;
  (e.push().col(5918276).mat(0.95, 0, 0, 0),
    e.rod(t, 0, n, t + 0.2, 6.5, n - 0.1, 0.9, 8, 0.65));
  let o = e.coarse ? 3 : 5,
    s = [[t + 0.2, 17, n - 0.1, 8.6, 11]];
  for (let r = 0; r < o; r++) {
    let i = (r / o) * Math.PI * 2 + a() * 0.5,
      c = 4.2 + a() * 1.8,
      l = t + Math.cos(i) * c,
      u = n + Math.sin(i) * c,
      d = 12 + a() * 4;
    (e.rod(t + 0.2, 5.8, n - 0.1, l, d, u, 0.45, 6, 0.22),
      s.push([
        t + Math.cos(i) * (c + 1.5),
        d + 1.2,
        n + Math.sin(i) * (c + 1.5),
        3.8 + a() * 1.2,
        4.5 + a(),
      ]));
  }
  for (let [t, n, r, i, o] of s)
    (e.col(5600047, 0.9 + a() * 0.2).mat(0.95, 0, 0, 0),
      e.lathe(
        t,
        r,
        [
          0.05,
          n - o * 0.82,
          i * 0.62,
          n - o * 0.66,
          i * 0.95,
          n - o * 0.3,
          i,
          n,
          i * 0.88,
          n + o * 0.38,
          i * 0.55,
          n + o * 0.72,
          0.05,
          n + o * 0.85,
        ],
        e.coarse ? 7 : 12,
        a() * 3,
        e.white,
        !1,
        !0,
      ));
  (e.pop(), e.pole(t, n, 1, 0, 6));
}
function FF(e, t, n, r, i) {
  (e.col(4020780).mat(0.95, 0, 0, 0),
    e.lathe(
      t,
      n,
      [
        r,
        0.02,
        r * 0.95,
        i * 0.35,
        r * 0.75,
        i * 0.75,
        r * 0.4,
        i * 0.95,
        0.05,
        i,
      ],
      e.seg(9),
      0,
      e.white,
      !1,
      !0,
    ));
}
function IF(e, t, n, r, i, a, o) {
  let s = Math.max(1, Math.round(Math.abs(n - t) / o));
  for (let o = 0; o <= s; o++) {
    let c = t + ((n - t) * o) / s;
    (e.panel(c + 0.03, r - 0.03, c - 0.03, r - 0.03, i, a),
      e.panel(c - 0.03, r + 0.03, c + 0.03, r + 0.03, i, a));
  }
  (e.box(Math.min(t, n), a - 0.08, r - 0.05, Math.max(t, n), a, r + 0.05),
    e.box(Math.min(t, n), i, r - 0.05, Math.max(t, n), i + 0.08, r + 0.05));
}
function LF(e, t, n, r, i, a, o) {
  let s = t.c(`granite`),
    c = e.coarse ? 1 : 5;
  for (let t = 0; t < c; t++) {
    let l = (o * t) / c,
      u = (o * (t + 1)) / c,
      d = t % 2 ? 0 : 0.04;
    (e.col(14078666, 0.9 + (t % 3) * 0.05).mat(0.9, 0, 0.12, Y),
      e.box(
        n - i / 2 - d,
        l,
        r - a / 2 - d,
        n + i / 2 + d,
        u,
        r + a / 2 + d,
        s,
        1.9,
        1.3,
      ));
  }
  (e
    .col(13617857)
    .box(
      n - i / 2 - 0.08,
      o,
      r - a / 2 - 0.08,
      n + i / 2 + 0.08,
      o + 0.22,
      r + a / 2 + 0.08,
    ),
    e.solid(n - i / 2, r - a / 2, n + i / 2, r + a / 2, 0, o + 0.2, `wall`));
}
