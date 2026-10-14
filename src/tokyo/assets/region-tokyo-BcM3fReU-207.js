// tokyo/assets/region-tokyo-BcM3fReU 207 — math
// Lines 85587-85908 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function wq(e, t) {
  for (let n of t) {
    let t = new ne(n.seed ^ 1540483477),
      r = bq[n.ty],
      i = 14210252;
    n.ty === Im.ZAKKYO
      ? (i = t.weighted(Bm))
      : n.ty === Im.MANSION
        ? (i = t.weighted(Vm))
        : n.ty === Im.SHITAMACHI
          ? (i = t.weighted(Wm))
          : n.ty === Im.DEPATO
            ? (i = t.weighted(Ym))
            : n.ty === Im.KURA
              ? (i = t.next() < 0.5 ? 5920854 : 15789282)
              : n.ty === Im.OFFICE &&
                (i = n.tower && !n.podium ? t.weighted(Um) : t.weighted(Hm));
    let a = (n.x0 + n.x1) / 2,
      o = (n.z0 + n.z1) / 2,
      s = (n.x1 - n.x0) / 2,
      c = (n.z1 - n.z0) / 2,
      l = n.gH + (n.floors - 1) * n.fh,
      u = n.ty === Im.SHITAMACHI || n.ty === Im.KURA,
      d = u ? l : n.h;
    e.setMaterial(0.88, 0, 0, 0);
    let f = [];
    for (let e = 0; e < 4; e++) (n.street >> e) & 1 && f.push(e);
    if (n.ty === Im.OFFICE && n.tower) {
      let l = n.podium,
        u = 5926528;
      if (l) {
        (xq(e, i, r), e.box(a, l / 2, o, s, l / 2, c));
        let d = Math.min(6, Math.min(s, c) * 0.24);
        (e.setMaterial(0.25, 0.4, 0, 0),
          xq(e, u, 1.1),
          e.box(a, (l + n.h) / 2, o, s - d, (n.h - l) / 2, c - d),
          Tq(
            e,
            n,
            { x0: n.x0 + d, z0: n.z0 + d, x1: n.x1 - d, z1: n.z1 - d },
            f.length ? f.slice(0, 2) : [0, 2],
            l,
            n.h - 2.4,
            t,
            !0,
          ));
      } else
        (e.setMaterial(0.25, 0.4, 0, 0),
          xq(e, u, 1.15),
          e.box(a, n.h / 2, o, s, n.h / 2, c),
          Tq(
            e,
            n,
            n,
            f.length ? f.slice(0, 2) : [0, 2],
            n.gH,
            n.h - 2.4,
            t,
            !0,
          ));
      continue;
    }
    if ((xq(e, i, r), e.box(a, d / 2, o, s, d / 2, c), u)) {
      xq(e, n.ty === Im.KURA ? 4212302 : t.weighted(Km), 0.85);
      let r = f[0] ?? 0;
      Sq(e, n, l, n.h - l, r === 0 || r === 2);
    }
    let p = (f[0] ?? 0) % 2 ? n.z1 - n.z0 : n.x1 - n.x0;
    n.floors >= 4 &&
      p >= 6 &&
      n.ty !== Im.KURA &&
      Tq(
        e,
        n,
        n,
        f.length ? f.slice(0, 1) : [0],
        n.gH,
        l - 0.6,
        t,
        n.ty === Im.OFFICE || n.ty === Im.ZAKKYO || n.ty === Im.DEPATO,
      );
  }
}
function Tq(e, t, n, r, i, a, o, s) {
  let c = t.fh * (t.floors > 16 ? 3 : 2),
    l = 0;
  for (let u = i + t.fh * 0.3; u + t.fh * 0.45 <= a && l < 6; u += c, l++) {
    let i = o.next() < (s ? 0.35 : 0.55);
    (e.setMaterial(0.3, 0.2, i ? 0.55 : 0, 1),
      i
        ? e.setColor(V(s ? 150 : 170), V(s ? 160 : 142), V(s ? 168 : 104))
        : e.setColor(V(62), V(70), V(82)));
    for (let i of r) Cq(e, n, i, u, u + t.fh * 0.45);
  }
}
function Eq(e, t) {
  return e >= pg.minX - 2 &&
    e <= pg.maxX + 2 &&
    t >= pg.minZ - 2 &&
    t <= pg.maxZ + 2
    ? `moat`
    : e >= mg.minX - 2 &&
        e <= mg.maxX + 2 &&
        t >= mg.minZ - 2 &&
        t <= mg.maxZ + 2
      ? `pond`
      : t >= fg.top - 3 && t <= fg.bottom + 3 && e <= fg.mouth
        ? `nihonbashi`
        : t >= ug.top - 3 && t <= ug.bottom + 3 && e <= ug.mouth
          ? `kanda`
          : `sumida`;
}
var Dq = (e, t) => {
  let n = Math.sin(e * 12.9898 + t * 78.233) * 43758.5453;
  return n - Math.floor(n);
};
function Oq(e, t, n, r, i, a, o, s) {
  if (t === `x` && ll(n, r, i)) return;
  let c = (r + i) / 2;
  if (t === `x` ? Ig(n + s * 0.5, c) : Ig(c, n + s * 0.5))
    return Vg(e, t, n, r, i, a, o, s);
  let l = t === `x` ? Eq(n + s * 2, c) : Eq(c, n + s * 2),
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
      e.setMaterial(0.8, 0, 0, 0).setColor(V(a), V(c), V(l));
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
        let r = t ? 1 + 1 * Dq(c * 3.1 + n, i) : 1.8,
          o = Math.min(m, c + r),
          u = Math.max(p, c);
        if (o - u > 0.05) {
          let r = Dq(u * 7.3 + n * 0.37, i * 3.7 + l),
            c = s < -1.15 ? 0.62 : 1,
            f = t
              ? [128 + r * 30, 120 + r * 26, 104 + r * 22]
              : [150 + r * 22, 146 + r * 20, 136 + r * 18];
          (e
            .setMaterial(0.85, 0, 0, 0)
            .setColor(V(f[0] * c), V(f[1] * c), V(f[2] * c + (c < 1 ? 4 : 0))),
            d(u, o, s, a));
        }
        ((c = o), l++);
      }
    }
    f(t ? 160 : 176, t ? 154 : 172, t ? 140 : 162);
    return;
  }
  if (l === `pond`) {
    (e.setMaterial(0.95, 0, 0, 0).setColor(V(96), V(88), V(70)),
      d(p, m, Math.max(a, -1.05), o));
    for (let t = p; t < m - 0.05;) {
      let r = Math.min(m, t + 0.5 + 0.6 * Dq(t + n, 1)),
        i = Dq(t * 3 + n, 2);
      (e
        .setMaterial(0.9, 0, 0, 0)
        .setColor(V(70 + i * 26), V(68 + i * 22), V(60 + i * 20)),
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
    let s = Dq(t, n),
      c = l === `sumida` ? 132 + s * 16 : 140 + s * 18;
    if (
      (e.setMaterial(0.9, 0, 0, 0).setColor(V(c), V(c - 2), V(c - 6)),
      d(r, i, Math.max(a, -1), o),
      e.setColor(V(66 + s * 10), V(74 + s * 10), V(60 + s * 8)),
      d(r, i, a, Math.min(o, -1)),
      i - r > 1 &&
        (e.setColor(V(96), V(94), V(90)),
        d(i - 0.04, i, -1, o, 0.004),
        s > 0.55))
    ) {
      let n = r + (i - r) * Dq(t, 9);
      (e.setColor(V(176), V(174), V(168)),
        d(n, Math.min(i, n + 0.22), o - 1.1, o - 0.08, 0.004));
    }
  }
  f(178, 176, 170);
}
var kq = {
    armY: 5.6,
    poleH: 6.4,
    pedPoleH: 3.4,
    lampX: [-0.4, 0, 0.4],
    headW: 1.26,
    headH: 0.44,
    pedRedY: 0.2,
    pedGreenY: -0.2,
  },
  Aq = { h: 12, armY: 11.2, arm2Y: 10.2, lowY: 7.6, lampY: 5.4 },
  jq = { tall: 10, reach: 2.2, small: 6.5 },
  Mq = 9278361,
  Nq = 12041409;
function Pq(e, t, n = 2048) {
  let r = new ce(n, n * 2);
  return (
    r.setMaterial(0.7, 0, 0, 0),
    t(r),
    { name: e, geo: Si(r, `tokyo-street:${e}`) }
  );
}
function Fq(e, t, n) {
  (e.setMaterial(0.55, 0.4, 0, 0),
    K(e, Mq),
    $g(e, 0, 0, 0, t, n, 8, n * 0.85),
    K(e, 7041142),
    $g(e, 0, 0, 0, 0.45, n * 1.5, 8, n * 1.35));
}
function Iq(e) {
  let t = kq.headW,
    n = kq.headH;
  (e.setMaterial(0.6, 0.3, 0, 0),
    K(e, Nq),
    Xg(e, 0, 0, -0.06, t / 2, n / 2, 0.08, !0),
    e.setMaterial(0.5, 0, 0, 0),
    K(e, 1776928),
    Yg(
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
    K(e, 2764336));
  for (let t of kq.lampX) e_(e, t, 0, 0.026, [1, 0, 0], [0, 1, 0], 0.15, 12);
  K(e, Nq, 0.85);
  for (let t of kq.lampX)
    (Yg(
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
      Yg(
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
  (K(e, Mq), Xg(e, 0, n / 2 + 0.08, -0.08, 0.05, 0.1, 0.04));
}
function Lq(e) {
  (e.setMaterial(0.6, 0.3, 0, 0),
    K(e, Nq),
    Xg(e, 0, 0, -0.06, 0.2, 0.17, 0.08, !0),
    K(e, 1776928),
    Yg(
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
