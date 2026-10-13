// tokyo__assets__region-tokyo-BcM3fReU 141 — col
// Lines 61570-61891 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function LP(e, t, n, r, i, a, o, s, c, l, u, d = !0) {
  let f = (o - a) / 3;
  for (let o = 0; o < 3; o++) {
    let p = (c * (o + 1)) / 3,
      m = a + o * f,
      h = m + f * 0.62;
    if (
      (e
        .col(l)
        .box(
          t - p,
          m,
          n - p,
          r + p,
          h,
          i + p,
          e.coarse ? e.white : u,
          e.coarse ? 0 : 2.4,
          e.coarse ? 0 : h - m,
          e.white,
          !0,
        ),
      e.coarse || o === 0)
    )
      continue;
    let g = 0.14 + o * 0.02,
      _ = f * 0.38;
    o === 2 ? e.push().col(EP).mat(0.35, 0.8, 0.12, 1) : e.col(l, 0.9);
    let v = Math.max(1, Math.round((r - t) / s));
    for (let a = 0; a <= v; a++) {
      let o = t + ((r - t) * a) / v;
      (e.box(o - g, h, n - p - g, o + g, h + _, n - p + g),
        d && e.box(o - g, h, i + p - g, o + g, h + _, i + p + g));
    }
    o === 2 && e.pop();
  }
}
function RP(e, t, n, r, i, a, o, s, c = 2.6) {
  (e.wall(i, r - 0.02, n, r - 0.02, o, s, t, c, s - o),
    e.wall(n, a + 0.02, i, a + 0.02, o, s, t, c, s - o),
    e.wall(n - 0.02, r, n - 0.02, a, o, s, t, c, s - o),
    e.wall(i + 0.02, a, i + 0.02, r, o, s, t, c, s - o));
}
function zP(e, t, n, r, i, a, o) {
  let s = 0.85;
  e.col(o);
  let c = (a, o) => {
    (e.box(t, a, n - 0.06, r, a + o, n + 0.06),
      e.box(t, a, i - 0.06, r, a + o, i + 0.06),
      e.box(t - 0.06, a, n, t + 0.06, a + o, i),
      e.box(r - 0.06, a, n, r + 0.06, a + o, i));
  };
  if ((c(a + s - 0.1, 0.12), !e.coarse)) {
    c(a + 0.35, 0.08);
    for (let [c, l, u, d] of [
      [t, n, r, n],
      [t, i, r, i],
      [t, n, t, i],
      [r, n, r, i],
    ]) {
      let t = Math.hypot(u - c, d - l),
        n = Math.max(1, Math.round(t / 1.5));
      for (let t = 0; t <= n; t++) {
        let r = c + ((u - c) * t) / n,
          i = l + ((d - l) * t) / n;
        (e.col(o).box(r - 0.07, a, i - 0.07, r + 0.07, a + s, i + 0.07),
          (t === 0 || t === n) &&
            e
              .push()
              .col(EP)
              .mat(0.35, 0.8, 0.1, 1)
              .lathe(
                r,
                i,
                [0.1, a + s, 0.12, a + s + 0.1, 0.02, a + s + 0.32],
                6,
              )
              .pop());
      }
    }
  }
}
function BP(e, t, n, r, i, a) {
  let o = r + a + 1.2;
  e.push().col(wP).mat(0.6, 0, 0.1, 1);
  for (let t of [-1, 1])
    e.box(
      n + a * 0.42 * t - 0.06,
      r,
      i - 0.06,
      n + a * 0.42 * t + 0.06,
      o,
      i + 0.06,
    );
  (e.box(n - a * 0.5, o - 0.12, i - 0.12, n + a * 0.5, o, i + 0.12),
    e.coarse ||
      (e.col(2762274).mat(0.7, 0, 0, 0),
      e.quad(
        n + a * 0.6,
        o,
        i - 0.45,
        n - a * 0.6,
        o,
        i - 0.45,
        n - a * 0.6,
        o + 0.42,
        i,
        n + a * 0.6,
        o + 0.42,
        i,
      ),
      e.quad(
        n - a * 0.6,
        o,
        i + 0.45,
        n + a * 0.6,
        o,
        i + 0.45,
        n + a * 0.6,
        o + 0.42,
        i,
        n - a * 0.6,
        o + 0.42,
        i,
      )),
    e.pop(),
    kO(e, n, o - 0.2, i, a, t.chochin),
    e.pole(n, i, a * 0.45, r, o));
}
function VP(e, t, n, r) {
  (e.push().col(11775652).mat(0.9, 0, 0, 0),
    e.box(t - 0.55 * r, 0, n - 0.55 * r, t + 0.55 * r, 0.35 * r, n + 0.55 * r),
    e.cylY(t, n, 0.35 * r, 1.5 * r, 0.17 * r, 6, 0.15 * r, !1),
    e.box(
      t - 0.42 * r,
      1.5 * r,
      n - 0.42 * r,
      t + 0.42 * r,
      1.7 * r,
      n + 0.42 * r,
    ),
    e.coarse ||
      (e
        .col(15983280)
        .mat(0.6, 0, 0.7, 1)
        .box(
          t - 0.24 * r,
          1.7 * r,
          n - 0.24 * r,
          t + 0.24 * r,
          2.15 * r,
          n + 0.24 * r,
        ),
      e.col(11775652).mat(0.9, 0, 0, 0)),
    e.lathe(
      t,
      n,
      [
        0.62 * r,
        2.15 * r,
        0.66 * r,
        2.25 * r,
        0.25 * r,
        2.6 * r,
        0.08 * r,
        2.7 * r,
      ],
      6,
      Math.PI / 6,
    ),
    e.lathe(t, n, [0.1 * r, 2.7 * r, 0.13 * r, 2.82 * r, 0.01, 3 * r], 6),
    e.pop(),
    e.pole(t, n, 0.5 * r, 0, 2.6 * r));
}
function HP(e, t, n, r) {
  (e.push().col(3885636).mat(0.5, 0.6, 0, 0),
    e.cylY(t, n, 0, 6.2, 0.09, 6, 0.07, !1));
  let i = t + r * 0.7;
  (e.box(Math.min(t, i), 5.75, n - 0.04, Math.max(t, i), 5.85, n + 0.04),
    e.col(13123615).mat(0.6, 0, 0.1, 1),
    e.box(i - 0.3, 4.95, n - 0.3, i + 0.3, 5.05, n + 0.3),
    e.col(16116432).mat(0.4, 0, 0.75, 1),
    e.box(i - 0.26, 5.05, n - 0.26, i + 0.26, 5.55, n + 0.26),
    e.col(13123615).mat(0.6, 0, 0.1, 1),
    e.box(i - 0.33, 5.55, n - 0.33, i + 0.33, 5.63, n + 0.33),
    e.col(6265476).mat(0.6, 0.3, 0, 0),
    e.lathe(i, n, [0.5, 5.63, 0.12, 5.9, 0.03, 6], 4, Math.PI / 4),
    e.pop(),
    e.pole(t, n, 0.12, 0, 6.2));
}
function UP(e, t, n, r) {
  let i = e.sub(t, 0, n, r);
  (e.push().col(12433581).mat(0.9, 0, 0.04, 1),
    e.box(-0.85, 0, -0.85, 0.85, 0.35, 0.85),
    e.box(-0.62, 0.35, -0.62, 0.62, 1.55, 0.62, WP ?? e.white),
    e.box(-0.75, 1.55, -0.75, 0.75, 1.75, 0.75));
  let a = 1.75;
  if (
    (e.col(12894132),
    e.box(-0.32, a, -0.15, 0.32, 2.3, 0.55),
    e.obox(0, 2.5, -0.05, 0.3, 0.45, 0.28, 0),
    !e.coarse)
  ) {
    (e.lathe(
      0,
      -0.2,
      [0.05, 2.8, 0.36, 2.95, 0.4, 3.2, 0.3, 3.45, 0.05, 3.55],
      7,
    ),
      e.box(-0.18, 2.87, -0.6, 0.18, 3.13, -0.3));
    for (let t of [-1, 1])
      e.rod(t * 0.2, a, -0.45, t * 0.2, 2.5, -0.25, 0.09, 5);
    e.lathe(0, 0.55, [0.12, 2.15, 0.2, 2.5, 0.05, 2.85], 5);
  }
  (e.pop(),
    e.leave(i),
    e.solid(t - 0.85, n - 0.85, t + 0.85, n + 0.85, 0, 3.4));
}
var WP = null;
function GP(e, t) {
  let n = 0.5,
    r = e.sub(0, 0, gP, 0);
  for (let t of [-1, 1]) {
    let r = t * 3.2;
    if (
      (e.col(13222838).mat(0.85, 0, 0.04, 1),
      e.box(r - 1, 0, -1, r + 1, 0.42, 1, WP ?? e.white, 2, 0.42),
      e.box(r - 0.78, 0.42, -0.78, r + 0.78, 1, 0.78),
      e.col(EP).mat(0.3, 0.85, 0.12, 1),
      e.lathe(
        r,
        0,
        [0.7, 1, 0.66, 1.25, 0.58, 1.55, 0.53, 1.85, 0.5, 1.95],
        e.seg(12),
        0,
        e.white,
        !1,
        !0,
      ),
      e.col(kP).mat(0.55, 0.35, 0.06, 1),
      e.cylY(r, 0, 1.9, 8.15, n, 12, n * 0.92, !1),
      !e.coarse)
    ) {
      e.col(6196088);
      for (let t = 2.7; t < 7.8; t += 0.95) {
        let i = n + (n * 0.92 - n) * ((t - 1 - 0.9) / 6.25) + 0.03;
        e.lathe(r, 0, [i, t, i, t + 0.06], 10, 0, e.white, !1, !0);
      }
    }
    (e.pole(r, 0, 0.58, 0, 8.2), e.solid(r - 1, -1, r + 1, 1, 0, 1));
  }
  (e.col(kP).mat(0.55, 0.35, 0.06, 1),
    e.box(-3.2 - 1.35, 6.05, -0.22, 4.550000000000001, 6.6, 0.22),
    e.box(-0.35, 6.6, -0.18, 0.35, 7.6, 0.18));
  let i = e.sub(0, 0, 0, 0);
  (IP(e, 5.1, 7.6, 0.55, 0.5, 0.12, 10),
    e.col(7117446),
    IP(e, 5.550000000000001, 8.15, 0.7, 0.62, 0.24, 12),
    e.leave(i),
    e.col(16777215).mat(0.45, 0.3, 0.25, Y),
    e.panel(0.78, -0.24, -0.78, -0.24, 6, 8.2, t.gaku),
    e.coarse || e.panel(-0.78, 0.24, 0.78, 0.24, 6, 8.2, t.gaku),
    e.leave(r));
}
function KP(e, t, n, r, i, a, o, s, c, l = t.bay, u = 3.2) {
  let d = 3.6,
    f = d + (o - 1) * 3,
    p = [
      [i, r, n, r, c.s, `s`],
      [n, a, i, a, c.n, `n`],
      [n, r, n, a, c.e, `e`],
      [i, a, i, r, c.w, `w`],
    ];
  for (let [t, n, r, i, a, o] of p) {
    if (c.hide?.includes(o)) {
      e.col(s, 0.85).mat(0.85, 0, 0, 0).panel(t, n, r, i, 0, f);
      continue;
    }
    (a
      ? (e.col(16777215).mat(0.6, 0, 0.55, Y),
        e.wall(t, n, r, i, 0, d, a, u, d))
      : (e.col(s, 0.92).mat(0.85, 0, 0, 0), e.panel(t, n, r, i, 0, d)),
      e.col(s).mat(0.8, 0, 0.5, Y | 32),
      e.wall(
        t,
        n,
        r,
        i,
        d,
        f,
        l,
        u * (e.coarse ? 2 : 1),
        3 * (e.coarse ? 2 : 1),
      ));
  }
  if ((e.col(9277067).mat(0.85, 0, 0, 0), e.flat(n, r, i, a, f), !e.coarse)) {
    (e.col(s, 0.9),
      e.box(n, f, r, i, f + 0.6, r + 0.2),
      e.box(n, f, a - 0.2, i, f + 0.6, a),
      e.box(n, f, r, n + 0.2, f + 0.6, a),
      e.box(i - 0.2, f, r, i, f + 0.6, a));
    let t = (n + i) / 2,
      o = (r + a) / 2;
    (e.col(12171442).box(t - 1.6, f, o - 1.4, t + 1.6, f + 2.6, o + 1.4),
      e
        .col(10131604)
        .box(
          n - 0.12,
          3.35,
          r - 0.12,
          i + 0.12,
          d,
          a + 0.12,
          e.white,
          0,
          0,
          null,
          !0,
        ));
  }
  e.solid(n, r, i, a, 0, f + 0.6);
}
