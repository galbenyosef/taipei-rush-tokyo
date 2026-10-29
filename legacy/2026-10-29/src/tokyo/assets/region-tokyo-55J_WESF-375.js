// tokyo/assets/region-tokyo-55J_WESF 375 — math
// Lines 136031-136359 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function u$(e, t) {
  let n = Iv();
  for (let r of t) {
    let t = ((r.seed >>> 0) % 254) / 255,
      i = (r, i) => e.setMaterial(r, i, n ? t : 0, n ? 64 : 0),
      a = new ie(r.seed ^ 1540483477),
      o = fNe[r.ty],
      s = 14210252;
    r.ty === uu.ZAKKYO
      ? (s = a.weighted(du))
      : r.ty === uu.MANSION
        ? (s = a.weighted(fu))
        : r.ty === uu.SHITAMACHI
          ? (s = a.weighted(hu))
          : r.ty === uu.DEPATO
            ? (s = a.weighted(_u))
            : r.ty === uu.KURA
              ? (s = a.next() < 0.5 ? 5920854 : 15789282)
              : r.ty === uu.OFFICE &&
                (s = r.tower && !r.podium ? a.weighted(mu) : a.weighted(pu));
    let c = (r.x0 + r.x1) / 2,
      l = (r.z0 + r.z1) / 2,
      u = (r.x1 - r.x0) / 2,
      d = (r.z1 - r.z0) / 2,
      f = r.gH + (r.floors - 1) * r.fh,
      p = r.ty === uu.SHITAMACHI || r.ty === uu.KURA,
      m = p ? f : r.h;
    i(0.88, 0);
    let h = [];
    for (let e = 0; e < 4; e++) (r.street >> e) & 1 && h.push(e);
    if (r.ty === uu.OFFICE && r.tower) {
      let t = r.podium,
        f = 5926528;
      if (t) {
        (l$(e, s, o), e.box(c, t / 2, l, u, t / 2, d));
        let p = Math.min(6, Math.min(u, d) * 0.24);
        (i(0.25, 0.4),
          l$(e, f, 1.1),
          e.box(c, (t + r.h) / 2, l, u - p, (r.h - t) / 2, d - p),
          n ||
            d$(
              e,
              r,
              { x0: r.x0 + p, z0: r.z0 + p, x1: r.x1 - p, z1: r.z1 - p },
              h.length ? h.slice(0, 2) : [0, 2],
              t,
              r.h - 2.4,
              a,
              !0,
            ));
      } else
        (i(0.25, 0.4),
          l$(e, f, 1.15),
          e.box(c, r.h / 2, l, u, r.h / 2, d),
          n ||
            d$(
              e,
              r,
              r,
              h.length ? h.slice(0, 2) : [0, 2],
              r.gH,
              r.h - 2.4,
              a,
              !0,
            ));
      continue;
    }
    if ((l$(e, s, o), e.box(c, m / 2, l, u, m / 2, d), p)) {
      let t = r.ty === uu.KURA ? 4212302 : a.weighted(gu);
      (e.setMaterial(0.88, 0, 0, 0), l$(e, t, 0.85));
      let n = h[0] ?? 0;
      pNe(e, r, f, r.h - f, n === 0 || n === 2);
    }
    let g = (h[0] ?? 0) % 2 ? r.z1 - r.z0 : r.x1 - r.x0;
    !n &&
      r.floors >= 4 &&
      g >= 6 &&
      r.ty !== uu.KURA &&
      d$(
        e,
        r,
        r,
        h.length ? h.slice(0, 1) : [0],
        r.gH,
        f - 0.6,
        a,
        r.ty === uu.OFFICE || r.ty === uu.ZAKKYO || r.ty === uu.DEPATO,
      );
  }
}
function d$(e, t, n, r, i, a, o, s) {
  let c = t.fh * (t.floors > 16 ? 3 : 2),
    l = 0;
  for (let u = i + t.fh * 0.3; u + t.fh * 0.45 <= a && l < 6; u += c, l++) {
    let i = o.next() < (s ? 0.35 : 0.55);
    (e.setMaterial(0.3, 0.2, i ? 0.55 : 0, 1),
      i
        ? e.setColor(R(s ? 150 : 170), R(s ? 160 : 142), R(s ? 168 : 104))
        : e.setColor(R(62), R(70), R(82)));
    for (let i of r) mNe(e, n, i, u, u + t.fh * 0.45);
  }
}
function f$(e, t) {
  return e >= zp.minX - 2 &&
    e <= zp.maxX + 2 &&
    t >= zp.minZ - 2 &&
    t <= zp.maxZ + 2
    ? `moat`
    : e >= Bp.minX - 2 &&
        e <= Bp.maxX + 2 &&
        t >= Bp.minZ - 2 &&
        t <= Bp.maxZ + 2
      ? `pond`
      : t >= Mp.top - 3 && t <= Mp.bottom + 3 && e <= Mp.mouth
        ? `nihonbashi`
        : t >= Ap.top - 3 && t <= Ap.bottom + 3 && e <= Ap.mouth
          ? `kanda`
          : `sumida`;
}
var p$ = (e, t) => {
  let n = Math.sin(e * 12.9898 + t * 78.233) * 43758.5453;
  return n - Math.floor(n);
};
function hNe(e, t, n, r, i, a, o, s) {
  if (t === `x` && Tie(n, r, i)) return;
  let c = (r + i) / 2;
  if (t === `x` ? em(n + s * 0.5, c) : em(c, n + s * 0.5))
    return am(e, t, n, r, i, a, o, s);
  let l = t === `x` ? f$(n + s * 2, c) : f$(c, n + s * 2),
    u = s * 0.015,
    d = (r, i, a, o, c = 0) => {
      let l = n + u + s * c;
      t === `x`
        ? s > 0
          ? e.quad(l, a, i, l, a, r, l, o, r, l, o, i)
          : e.quad(l, a, r, l, a, i, l, o, i, l, o, r)
        : s > 0
          ? e.quad(r, a, l, i, a, l, i, o, l, r, o, l)
          : e.quad(i, a, l, r, a, l, r, o, l, i, o, l);
    },
    f = (a, c, l) => {
      e.setMaterial(0.8, 0, 0, 0).setColor(R(a), R(c), R(l));
      let u = o + 0.012,
        d = n,
        f = n - s * 0.32,
        p = Math.min(d, f),
        m = Math.max(d, f);
      t === `x`
        ? e.quad(p, u, i, m, u, i, m, u, r, p, u, r)
        : e.quad(r, u, m, i, u, m, i, u, p, r, u, p);
    },
    p = Math.min(r, i),
    m = Math.max(r, i);
  if (l === `moat` || l === `nihonbashi`) {
    let t = l === `moat`,
      r = 0.62,
      i = 0;
    for (let s = a; s < o - 0.02; s += r, i++) {
      let a = Math.min(o, s + r),
        c = p - (i % 2 ? (t ? 0.6 : 0.9) : 0),
        l = 0;
      for (; c < m;) {
        let r = t ? 1 + 1 * p$(c * 3.1 + n, i) : 1.8,
          o = Math.min(m, c + r),
          u = Math.max(p, c);
        if (o - u > 0.05) {
          let r = p$(u * 7.3 + n * 0.37, i * 3.7 + l),
            c = s < -1.15 ? 0.62 : 1,
            f = t
              ? [128 + r * 30, 120 + r * 26, 104 + r * 22]
              : [150 + r * 22, 146 + r * 20, 136 + r * 18];
          (e
            .setMaterial(0.85, 0, 0, 0)
            .setColor(R(f[0] * c), R(f[1] * c), R(f[2] * c + (c < 1 ? 4 : 0))),
            d(u, o, s, a));
        }
        ((c = o), l++);
      }
    }
    f(t ? 160 : 176, t ? 154 : 172, t ? 140 : 162);
    return;
  }
  if (l === `pond`) {
    (e.setMaterial(0.95, 0, 0, 0).setColor(R(96), R(88), R(70)),
      d(p, m, Math.max(a, -1.05), o));
    for (let t = p; t < m - 0.05;) {
      let r = Math.min(m, t + 0.5 + 0.6 * p$(t + n, 1)),
        i = p$(t * 3 + n, 2);
      (e
        .setMaterial(0.9, 0, 0, 0)
        .setColor(R(70 + i * 26), R(68 + i * 22), R(60 + i * 20)),
        d(t, r, a, -1.05 + 0.15 * i, 0.06),
        (t = r));
    }
    return;
  }
  let h = l === `sumida` ? 5 : 4;
  for (let t = Math.floor(p / h) * h; t < m; t += h) {
    let r = Math.max(p, t),
      i = Math.min(m, t + h);
    if (i - r < 0.02) continue;
    let s = p$(t, n),
      c = l === `sumida` ? 132 + s * 16 : 140 + s * 18;
    if (
      (e.setMaterial(0.9, 0, 0, 0).setColor(R(c), R(c - 2), R(c - 6)),
      d(r, i, Math.max(a, -1), o),
      e.setColor(R(66 + s * 10), R(74 + s * 10), R(60 + s * 8)),
      d(r, i, a, Math.min(o, -1)),
      i - r > 1 &&
        (e.setColor(R(96), R(94), R(90)),
        d(i - 0.04, i, -1, o, 0.004),
        s > 0.55))
    ) {
      let n = r + (i - r) * p$(t, 9);
      (e.setColor(R(176), R(174), R(168)),
        d(n, Math.min(i, n + 0.22), o - 1.1, o - 0.08, 0.004));
    }
  }
  f(178, 176, 170);
}
var m$ = {
    armY: 5.6,
    poleH: 6.4,
    pedPoleH: 3.4,
    lampX: [-0.4, 0, 0.4],
    headW: 1.26,
    headH: 0.44,
    pedRedY: 0.2,
    pedGreenY: -0.2,
  },
  h$ = { h: 12, armY: 11.2, arm2Y: 10.2, lowY: 7.6, lampY: 5.4 },
  g$ = { tall: 10, reach: 2.2, small: 6.5 },
  _$ = 9278361,
  v$ = 12041409;
function y$(e, t, n = 2048) {
  let r = new Le(n, n * 2);
  return (
    r.setMaterial(0.7, 0, 0, 0),
    t(r),
    { name: e, geo: ar(r, `tokyo-street:${e}`) }
  );
}
function b$(e, t, n) {
  (e.setMaterial(0.55, 0.4, 0, 0),
    um(e, _$),
    hm(e, 0, 0, 0, t, n, 8, n * 0.85),
    um(e, 7041142),
    hm(e, 0, 0, 0, 0.45, n * 1.5, 8, n * 1.35));
}
function gNe(e) {
  let t = m$.headW,
    n = m$.headH;
  (e.setMaterial(0.6, 0.3, 0, 0),
    um(e, v$),
    fm(e, 0, 0, -0.06, t / 2, n / 2, 0.08, !0),
    e.setMaterial(0.5, 0, 0, 0),
    um(e, 1776928),
    dm(
      e,
      -t / 2 + 0.03,
      -n / 2 + 0.03,
      0.021,
      t / 2 - 0.03,
      -n / 2 + 0.03,
      0.021,
      t / 2 - 0.03,
      n / 2 - 0.03,
      0.021,
      -t / 2 + 0.03,
      n / 2 - 0.03,
      0.021,
    ),
    um(e, 2764336));
  for (let t of m$.lampX) gm(e, t, 0, 0.026, [1, 0, 0], [0, 1, 0], 0.15, 12);
  um(e, v$, 0.85);
  for (let t of m$.lampX)
    (dm(
      e,
      t - 0.17,
      0.17,
      0.02,
      t + 0.17,
      0.17,
      0.02,
      t + 0.17,
      0.17,
      0.16,
      t - 0.17,
      0.17,
      0.16,
    ),
      dm(
        e,
        t + 0.17,
        0.17,
        0.16,
        t + 0.17,
        0.17,
        0.02,
        t - 0.17,
        0.17,
        0.02,
        t - 0.17,
        0.17,
        0.16,
      ));
  (um(e, _$), fm(e, 0, n / 2 + 0.08, -0.08, 0.05, 0.1, 0.04));
}
function _Ne(e) {
  (e.setMaterial(0.6, 0.3, 0, 0),
    um(e, v$),
    fm(e, 0, 0, -0.06, 0.2, 0.17, 0.08, !0),
    um(e, 1776928),
    dm(
      e,
      -0.18,
      -0.15,
      0.021,
      0.18,
      -0.15,
      0.021,
      0.18,
      0.15,
      0.021,
      -0.18,
      0.15,
      0.021,
    ));
}
