// tokyo__assets__region-tokyo-d-nihonbashi-DhEI_3CD 07 — setinfo
// Lines 2958-3241 of readable/tokyo__assets__region-tokyo-d-nihonbashi-DhEI_3CD.pretty.js (statement-aligned).
function Yt(e, t, n, r, i, a) {
  let o = n[0] - t[0],
    s = n[1] - t[1],
    c = n[2] - t[2],
    l = r[0] - t[0],
    u = r[1] - t[1],
    d = r[2] - t[2],
    f = s * d - c * u,
    p = c * l - o * d,
    m = o * u - s * l,
    h = Math.hypot(f, p, m) || 1;
  ((f /= h),
    (p /= h),
    (m /= h),
    e.quad4(
      t[0],
      t[1],
      t[2],
      n[0],
      n[1],
      n[2],
      r[0],
      r[1],
      r[2],
      r[0],
      r[1],
      r[2],
      f,
      p,
      m,
      i,
      a,
      i,
      a,
      i,
      a,
      i,
      a,
    ));
}
function Xt(e, t, n, r, i, a, o, s) {
  let c = lt(s),
    l = (e, s) => {
      let c = (e / 8) * Math.PI * 2,
        l = -Math.PI / 2 + (s / 4) * Math.PI;
      return [
        t + Math.cos(c) * Math.cos(l) * i,
        n + Math.sin(l) * a,
        r + Math.sin(c) * Math.cos(l) * o,
      ];
    };
  for (let t = 0; t < 4; t++)
    for (let n = 0; n < 8; n++) {
      let r = l(n, t),
        i = l(n + 1, t),
        a = l(n + 1, t + 1),
        o = l(n, t + 1);
      t === 0
        ? Yt(e, r, a, o, c.u, c.v)
        : t === 3
          ? Yt(e, r, i, o, c.u, c.v)
          : (Yt(e, r, a, o, c.u, c.v), Yt(e, r, i, a, c.u, c.v));
    }
}
function Zt(e, t, n) {
  for (let r of Ft)
    n.push(w(e[U(r.x - 2, r.z - 2, r.x + 2, r.z + 2)].sign, lt, r, t));
}
function Qt(e, t, n, r, i, a, o) {
  let s = P(i, 2);
  e.setTint(16777215).setInfo(0, 0, 0, 0);
  for (let i = 0; i < 4; i++) {
    let a = F(t, i),
      c = Math.max(1, Math.round(a.L / 6));
    for (let t = 0; t < c; t++) {
      let l = (t * a.L) / c,
        u = ((t + 1) * a.L) / c;
      if (o && o.side === i && u > o.s - o.w / 2 && l < o.s + o.w / 2) {
        (l < o.s - o.w / 2 && B(e, a, 0, l, o.s - o.w / 2, n, n + r, s),
          u > o.s + o.w / 2 && B(e, a, 0, o.s + o.w / 2, u, n, n + r, s));
        continue;
      }
      B(e, a, 0, l, u, n, n + r, s);
    }
    B(e, Jt(a), 0.02, 0, a.L, n, n + r, mt(`white`));
    for (let t = 0; t < c; t++)
      (e.setInfo(2, (i * 31 + t * 17) & 255, 210, 0),
        H(
          e,
          a,
          ((t + 0.5) * a.L) / c,
          0.08,
          0.09,
          0.09,
          n + r,
          n + r + 0.18,
          `orange`,
        ));
    e.setInfo(0, 0, 0, 0);
  }
  let c = 0.15;
  (a.push({ x0: t.x0, z0: t.z0, x1: t.x1, z1: t.z0 + c, h: n + r }),
    a.push({ x0: t.x0, z0: t.z1 - c, x1: t.x1, z1: t.z1, h: n + r }),
    a.push({ x0: t.x0, z0: t.z0, x1: t.x0 + c, z1: t.z1, h: n + r }),
    a.push({ x0: t.x1 - c, z0: t.z0, x1: t.x1, z1: t.z1, h: n + r }));
}
function $t(e, t, n, r) {
  e.setTint(16777215).setInfo(0, 0, 60, 0);
  for (let i of r)
    B(e, t, 0.04, i.s, i.s + i.w, n + i.y, n + i.y + i.h, P(i.c, 2));
}
function en(e, t, n, r, i) {
  (e.setTint(16777215).setInfo(0, 0, 0, 0),
    H(e, t, n - r / 2, 0.1, 0.15, 0.15, i, i + 3.6, `steel`),
    H(e, t, n + r / 2, 0.1, 0.15, 0.15, i, i + 3.6, `steel`),
    H(e, t, n, 0.05, r / 2, 0.06, i + 3.4, i + 3.6, `steel`),
    e.setInfo(2, 0, 200, 0),
    H(e, t, n + r / 2, 0.1, 0.12, 0.12, i + 3.6, i + 3.85, `orange`));
}
function tn(e, t, n, r, i, a) {
  (e.setTint(16777215).setInfo(0, 0, 0, 0),
    V(e, t - 0.8, r, n - 0.8, t + 0.8, i, n + 0.8, `orange`),
    V(e, t - 0.9, i, n - 0.9, t + 0.9, i + 2.2, n + 0.9, `white`));
  let o = I(t, n, a, 1);
  (H(e, o, 0, 13, 0.6, 13.5, i + 1.6, i + 2.6, `orange`),
    H(e, o, 0, -5, 0.8, 4.5, i + 1.4, i + 2.4, `orange`),
    H(e, o, 0, -7.5, 1.2, 1.5, i + 0.2, i + 1.4, `granite`),
    V(e, t - 0.1, i + 2.6, n - 0.1, t + 0.1, i + 5.4, n + 0.1, `orange`),
    e.setInfo(2, 7, 255, 0),
    V(e, t - 0.2, i + 5.4, n - 0.2, t + 0.2, i + 5.8, n + 0.2, `red`),
    H(e, o, 0, 26.2, 0.2, 0.2, i + 2.6, i + 3, `red`));
}
function nn(e, t, n) {
  let r = Pt,
    i = e[U(r.x0, r.z0, r.x1, r.z1)],
    a = i.sign,
    o = i.body;
  Qt(a, r, t, 3, `hoarding.c1`, n, { side: 2, s: 4, w: 4.4 });
  let c = F(r, 1),
    l = F(r, 2),
    u = F(r, 3);
  ($t(a, c, t, [
    { s: 2, c: `koji`, w: 1, h: 1.375, y: 0.9 },
    { s: 3.4, c: `owabi`, w: 0.75, h: 1.375, y: 0.85 },
  ]),
    $t(a, l, t, [
      { s: 8.6, c: `koji`, w: 1, h: 1.375, y: 0.9 },
      { s: 10, c: `owabi`, w: 0.75, h: 1.375, y: 0.85 },
    ]),
    $t(a, u, t, [{ s: 10.5, c: `owabi`, w: 0.75, h: 1.375, y: 0.85 }]),
    en(a, l, 4, 4.4, t));
  let d = r.x0 + 0.6,
    f = r.x0 + 8.6,
    p = r.z0 + 0.6,
    m = r.z0 + 4;
  (o.setTint(15790834),
    R(o, x.ZWIN, 3, s.OFFICE, 7, 160),
    o.box(d, t, p, f, t + 5.6, m, 3, 2, 1, 31),
    a.setTint(16777215).setInfo(0, 0, 0, 0),
    V(a, d - 0.05, t + 2.7, p - 0.05, f + 0.05, t + 2.95, m + 0.05, `blue`),
    n.push({ x0: d, z0: p, x1: f, z1: m, h: t + 5.6 }));
  let h = r.x0 + 7.5,
    g = r.z0 + 15;
  (V(a, h - 2.4, t, g - 1.8, h + 2.4, t + 0.9, g - 0.9, `black`),
    V(a, h - 2.4, t, g + 0.9, h + 2.4, t + 0.9, g + 1.8, `black`),
    V(a, h - 1.8, t + 0.9, g - 1.4, h + 1.6, t + 3, g + 1.4, `blue`),
    V(a, h - 1.6, t + 3, g - 1.2, h - 0.2, t + 4.2, g + 0.2, `blue`),
    V(a, h + 1.6, t + 0.6, g - 0.5, h + 2.4, t + 18.5, g + 0.5, `blue`),
    V(a, h + 1.75, t + 18.5, g - 0.35, h + 2.25, t + 19.6, g + 0.35, `yellow`),
    V(a, h + 2.5, t, g - 0.35, h + 3.2, t + 9, g + 0.35, `steel`),
    a.setInfo(2, 3, 220, 0),
    V(a, h - 1, t + 4.2, g - 0.6, h - 0.6, t + 4.5, g - 0.2, `orange`),
    n.push({ x0: h - 2.4, z0: g - 1.8, x1: h + 3.2, z1: g + 1.8, h: t + 4.2 }),
    a.setInfo(0, 0, 0, 0));
  for (let e = 0; e < 3; e++) {
    let n = r.z1 - 2 - e * 0.62;
    V(a, r.x0 + 1.2, t, n - 0.28, r.x1 - 1.4, t + 0.56, n + 0.28, `steel`);
  }
  (a.setInfo(0, 0, 0, 0),
    V(a, r.x1 - 1.2, t, r.z0 + 6, r.x1 - 1, t + 6.5, r.z0 + 6.2, `steel`),
    a.setInfo(0, 0, 230, 0),
    V(
      a,
      r.x1 - 1.6,
      t + 6.5,
      r.z0 + 5.8,
      r.x1 - 0.6,
      t + 6.9,
      r.z0 + 6.6,
      `warm`,
    ));
}
function rn(e, t, n) {
  let r = Nt,
    i = e[U(r.x0, r.z0, r.x1, r.z1)],
    a = i.sign,
    o = i.body;
  Qt(a, r, t, 3, `hoarding`, n, { side: 3, s: 14, w: 5 });
  let c = F(r, 3),
    l = F(r, 0);
  ($t(a, c, t, [
    { s: 4, c: `kenchiku`, w: 1.1, h: (176 / 128) * 1.1, y: 0.9 },
    { s: 6.2, c: `owabi`, w: 0.75, h: 1.375, y: 0.85 },
  ]),
    $t(a, l, t, [
      { s: 6, c: `kenchiku`, w: 1.1, h: (176 / 128) * 1.1, y: 0.9 },
    ]),
    en(a, c, 14, 5, t));
  let u = r.core;
  for (let e = 0; e < 4; e++) {
    let n = F(u, e),
      r = Math.max(1, Math.round(n.L / 3.4)),
      i = n.L / r,
      o = Math.round(u.h / 4.2),
      s = u.h / o;
    for (let e = 0; e < o; e++)
      for (let o = 0; o < r; o++)
        (a.setTint(16777215).setInfo(0, (o * 7 + e) & 255, 12, 0),
          B(
            a,
            n,
            0,
            o * i,
            (o + 1) * i,
            t + e * s,
            t + (e + 1) * s,
            P(`skin.sheet.${(o + e) % 2}`, 3),
          ));
  }
  a.setTint(16777215).setInfo(0, 0, 0, 0);
  for (let e = 0; e <= 4; e++)
    for (let n of [u.z0, u.z1]) {
      let r = u.x0 + ((u.x1 - u.x0) * e) / 4;
      V(
        a,
        r - 0.35,
        t + u.h,
        n - 0.35,
        r + 0.35,
        t + u.h + 4.2,
        n + 0.35,
        `steel`,
      );
    }
  (o.setTint(10132116),
    R(o, x.CONCRETE, 1, s.NONE, 0, 0),
    o.hrect(u.x0, u.z0, u.x1, u.z1, t + u.h, !0, 0, 0, 4, 4),
    n.push({ x0: u.x0, z0: u.z0, x1: u.x1, z1: u.z1, h: t + u.h }),
    tn(a, r.craneX, r.craneZ, t + u.h, t + r.craneH, Q * 1.2));
}
function an(e, t, n, r, i, a, o, s, c) {
  let l = I(t, n, r, i);
  e.setTint(16777215).setInfo(0, 0, 0, 0);
  for (let t of [0, i]) {
    let [n, r] = L(l, t, 0);
    (ht(e, n, r, 0.14, o, o + a, 10, `vermilion`),
      V(e, n - 0.2, o, r - 0.2, n + 0.2, o + 0.3, r + 0.2, `black`),
      c.push({ x0: n - 0.2, z0: r - 0.2, x1: n + 0.2, z1: r + 0.2, h: o + a }));
  }
  (H(e, l, i / 2, 0, i / 2 + 0.55, 0.18, o + a, o + a + 0.22, `black`),
    H(e, l, i / 2, 0, i / 2 + 0.4, 0.14, o + a - 0.22, o + a, `vermilion`),
    H(
      e,
      l,
      i / 2,
      0,
      i / 2 + 0.25,
      0.1,
      o + a - 0.75,
      o + a - 0.58,
      `vermilion`,
    ),
    e.setInfo(0, 0, 70, 0),
    B(
      e,
      l,
      0.12,
      i / 2 - 0.2,
      i / 2 + 0.2,
      o + a - 0.6 - 0.5,
      o + a - 0.6 + 0.5 - 0.5,
      P(s, 2),
    ));
}
