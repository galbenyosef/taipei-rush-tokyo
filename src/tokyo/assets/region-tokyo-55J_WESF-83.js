// tokyo/assets/region-tokyo-55J_WESF 83 — minx
// Lines 37675-38001 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Lce(e) {
  let t = (t) =>
      Float64Array.from(
        e
          .filter((e) => e.over === t)
          .flatMap((e) => [e.minX, e.maxX, e.minZ, e.maxZ]),
      ),
    n = t(`kanda`),
    r = t(`nihonbashi`),
    i = t(`sumida`),
    a = t(`nihonbashi-reach`),
    o = Np.outer,
    s = Np.inner,
    c = Pp,
    l = Fp,
    u = (e, t, n) => {
      for (let r = 0; r < e.length; r += 4)
        if (t >= e[r] && t <= e[r + 1] && n >= e[r + 2] && n <= e[r + 3])
          return !0;
      return !1;
    },
    d = Wp;
  return (e, t) => {
    if (t >= Ap.top && t <= jp.bottom && e >= Ap.west && e <= Ap.mouth) {
      if (e < jp.east) {
        if (t < jp.top) return !1;
      } else if (t > Ap.bottom || (e < Ap.gorgeX && t < Ap.topWest)) return !1;
      return !u(n, e, t);
    }
    if (t >= Mp.top && t <= Mp.bottom && e >= Mp.west && e <= Mp.mouth)
      return !u(r, e, t);
    if (e >= zp.minX && e <= zp.maxX && t >= zp.minZ && t <= zp.maxZ) return !0;
    if (e >= o.minX && e <= o.maxX && t >= o.minZ && t <= o.maxZ)
      return !(e > s.minX && e < s.maxX && t > s.minZ && t < s.maxZ);
    if (e >= c.minX && e <= c.maxX && t >= c.minZ && t <= c.maxZ) return !0;
    if (e >= l.minX && e <= l.maxX && t >= l.minZ && t <= l.maxZ)
      return !u(a, e, t);
    if (e >= Ip.minX && e <= Ip.maxX && t >= Ip.minZ && t <= Ip.maxZ) return !0;
    if (e >= Lp.minX && e <= Lp.maxX && t >= Lp.minZ && t <= Lp.maxZ)
      return !(e >= Rp.minX && e <= Rp.maxX && t >= Rp.minZ && t <= Rp.maxZ);
    if (e >= Bp.minX && e <= Bp.maxX && t >= Bp.minZ && t <= Bp.maxZ)
      return !(
        (e >= Vp.minX && e <= Vp.maxX && t >= Vp.minZ && t <= Vp.maxZ) ||
        (e >= Hp.minX && e <= Hp.maxX && t >= Hp.minZ && t <= Hp.maxZ) ||
        (e >= Up.minX && e <= Up.maxX && t >= Up.minZ && t <= Up.maxZ)
      );
    if (e >= Gp.westX && e <= 880 && t >= Gp.upNorthZ && t <= 900) {
      if (u(i, e, t)) return !1;
      let n = !1;
      for (let r = 0, i = d.length - 1; r < d.length; i = r++) {
        let a = d[r][0],
          o = d[r][1],
          s = d[i][0],
          c = d[i][1];
        o > t != c > t && e < ((s - a) * (t - o)) / (c - o) + a && (n = !n);
      }
      return n;
    }
    return !1;
  };
}
var Jp = jp,
  Yp = 0.15,
  Xp = 1.25,
  Zp = 2.6,
  Qp = {
    x0: -297,
    xLand: -291,
    x1: -282.6,
    top: Yp,
    width: 1.4,
    rise: 0.3,
    run: 0.3,
  },
  $p = Jp.level + 0.45,
  em = (e, t, n = 0) =>
    e < Jp.east + n && t >= Jp.top - n && t <= Jp.bottom + n;
function tm(e) {
  return (e.dataset.bridges ?? []).filter(
    (e) => e.over === `kanda` && e.minX < Jp.east,
  );
}
var nm = (e, t) => {
  let n = Math.sin(e * 12.9898 + t * 78.233) * 43758.5453;
  return n - Math.floor(n);
};
function rm(e, t, n) {
  let r = e / n,
    i = t / n,
    a = Math.floor(r),
    o = Math.floor(i),
    s = r - a,
    c = i - o,
    l = s * s * (3 - 2 * s),
    u = c * c * (3 - 2 * c),
    d = nm(a, o),
    f = nm(a + 1, o),
    p = nm(a, o + 1),
    m = nm(a + 1, o + 1);
  return d + (f - d) * l + (p - d) * u + (d - f - p + m) * l * u;
}
function im(e, t, n, r, i, a, o, s, c) {
  let l = Math.max(1, Math.ceil((i - r) / o - 0.01)),
    u = n + s * 0.015,
    d = t === `x` ? s : 0,
    f = t === `z` ? s : 0,
    p = e.n,
    m = [0, 0, 0];
  for (let n of a)
    for (let a = 0; a <= l; a++) {
      let o = r + ((i - r) * a) / l;
      (c(o, n, m),
        e.setColor(R(m[0]), R(m[1]), R(m[2])),
        t === `z`
          ? e.vertex(o, n, u, d, 0, f, 0, 0)
          : e.vertex(u, n, o, d, 0, f, 0, 0));
    }
  let h = (t === `z`) != s > 0;
  for (let t = 0; t + 1 < a.length; t++)
    for (let n = 0; n < l; n++) {
      let r = p + t * (l + 1) + n,
        i = r + 1,
        a = r + l + 1,
        o = a + 1;
      h ? e.tri(r, o, i).tri(r, a, o) : e.tri(r, i, o).tri(r, o, a);
    }
}
function am(e, t, n, r, i, a, o, s) {
  let c = Math.min(r, i),
    l = Math.max(r, i);
  if ((e.setMaterial(0.92, 0, 0, 0), o - a < 2)) {
    im(e, t, n, c, l, [a, o - 0.12, o - 0.12, o], 4, s, (e, t, n) => {
      let r = t > o - 0.13 ? 1.12 : 0.92 + 0.12 * rm(e, t, 2.5);
      ((n[0] = 150 * r), (n[1] = 148 * r), (n[2] = 142 * r));
    });
    return;
  }
  let u = Jp.level,
    d = u + Zp,
    f = (e) => 0.62 + 0.38 * Math.min(1, Math.max(0, (e - u) / (o - u)));
  (im(e, t, n, c, l, [a, u + 0.18, u + 0.42], 3, s, (e, t, n) => {
    let r = rm(e, 3.1, 1.7),
      i = f(t) * (t < u + 0.2 ? 0.7 : 0.9);
    ((n[0] = (52 + 18 * r) * i),
      (n[1] = (64 + 18 * r) * i),
      (n[2] = (46 + 12 * r) * i));
  }),
    im(e, t, n, c, l, [u + 0.42, u + 1.5, d], 2.5, s, (e, t, n) => {
      let r = rm(e, t, 1.3),
        i = rm(e + 40, t, 3.2),
        a = f(t) * (0.86 + 0.24 * r);
      ((n[0] = (128 - 22 * i) * a),
        (n[1] = (124 - 12 * i) * a),
        (n[2] = (112 - 18 * i) * a));
    }),
    im(e, t, n, c, l, [d, d + 0.22], 4, s, (e, t, n) => {
      let r = f(t) * (1.02 + 0.08 * rm(e, 1, 3));
      ((n[0] = 150 * r), (n[1] = 148 * r), (n[2] = 140 * r));
    }));
  let p = o - 0.42,
    m = [d + 0.22];
  for (let e = d + 1.4; e < p - 0.4; e += 1.25) m.push(e);
  (m.push(p),
    im(e, t, n, c, l, m, 2.2, s, (e, t, n) => {
      let r = rm(e, t, 1.6),
        i = rm(e + 17, t * 1.3, 4.5),
        a = Math.max(0, i - 0.72) * 3.2,
        o = f(t) * (0.7 + 0.5 * r);
      ((n[0] = (52 + 30 * i + 70 * a) * o),
        (n[1] = (84 + 40 * r + 30 * a) * o),
        (n[2] = (38 + 10 * r + 40 * a) * o));
    }),
    im(e, t, n, c, l, [p, o], 4, s, (e, t, n) => {
      let r = 0.95 + 0.1 * rm(e, 2, 2.4);
      ((n[0] = 172 * r), (n[1] = 170 * r), (n[2] = 162 * r));
    }));
}
function Rce(e, t, n, r, i, a) {
  e.quad(t, a, n, r, a, n, r, a, i, t, a, i);
}
function zce(e, t, n) {
  if (n.minX > Jp.east + 8 || n.maxZ < Jp.top - 8 || n.minZ > Jp.bottom + 8)
    return;
  let r = Jp.level;
  for (let i of tm(t)) {
    let t = i.maxX > Jp.east ? i.minX : (i.minX + i.maxX) / 2;
    if (t < n.minX || t >= n.maxX) continue;
    let a = i.minX,
      o = Math.min(i.maxX, Jp.east),
      s = -1.25;
    if (i.maxX > Jp.east) {
      let t = i.minX - 0.02,
        n = Jp.top,
        a = Jp.bottom,
        o = a - n,
        c = r + 1.2,
        l = (n + a) / 2,
        u = o / 2 - 0.9;
      for (let n = 0; n < 10; n++) {
        let i = l - u + (2 * u * n) / 10,
          a = l - u + (2 * u * (n + 1)) / 10,
          o = (e) =>
            c + (-2.15 - c) * Math.sqrt(Math.max(0, 1 - ((e - l) / u) ** 2)),
          d = o(i),
          f = o(a);
        (e.setMaterial(0.95, 0, 0, 0).setColor(R(14), R(17), R(16)),
          e.quad(t, r - 0.2, i, t, r - 0.2, a, t, f, a, t, d, i),
          e.setColor(R(122), R(120), R(112)),
          e.quad(t, d + 0.35, i, t, f + 0.35, a, t, s, a, t, s, i),
          e.setColor(R(146), R(142), R(132)),
          e.quad(t, d, i, t, f, a, t, f + 0.35, a, t, d + 0.35, i));
      }
      (e.setColor(R(112), R(110), R(102)),
        e.quad(t, r - 0.2, n, t, r - 0.2, l - u, t, s, l - u, t, s, n),
        e.quad(t, r - 0.2, l + u, t, r - 0.2, a, t, s, a, t, s, l + u));
      continue;
    }
    let c = Jp.top - 0.05,
      l = Jp.bottom + 0.05;
    (e.setMaterial(0.95, 0, 0, 0).setColor(R(96), R(96), R(92)),
      Rce(e, a, c, o, l, s),
      am(e, `z`, c, a, o, r - 0.2, s, 1),
      am(e, `z`, l, a, o, r - 0.2, s, -1));
  }
}
function om(e, t, n, r, i, a, o, s) {
  for (let c = t; c < n - 0.01; c += 24) {
    let t = Math.min(n, c + 24);
    e.addOBB((c + t) / 2, r, (t - c) / 2, i, 0, a, o, s);
  }
}
function Bce(e, t) {
  let n = Jp.level,
    r = t.bounds.minX - 40,
    i = tm(t),
    a = i.find((e) => e.maxX > Jp.east),
    o = a ? a.minX : Jp.east;
  (om(e, r, o, Jp.top - 0.3, 0.3, n - 4, -0.25, `wall`),
    om(e, r, o, Jp.bottom + 0.3, 0.3, n - 4, -0.25, `wall`),
    a &&
      e.addOBB(
        a.minX + 0.3,
        (Jp.top + Jp.bottom) / 2,
        0.3,
        (Jp.bottom - Jp.top) / 2,
        0,
        n - 4,
        -1.25,
        `wall`,
      ));
  let s = i.map((e) => [e.minX, e.maxX]).sort((e, t) => e[0] - t[0]),
    c = (t, n) => {
      let i = [...s, ...(n ? [n] : [])].sort((e, t) => e[0] - t[0]),
        a = r;
      for (let [n, r] of i)
        (n > a && om(e, a, n, t, 0.08, 0, 1.2, `wall`), (a = Math.max(a, r)));
      a < o && om(e, a, o, t, 0.08, 0, 1.2, `wall`);
    };
  (c(Jp.top - 0.12, [Qp.x1, Qp.x1 + 1.6]), c(Jp.bottom + 0.12, null));
  for (let t of i) {
    let n = Jp.top - 0.5,
      r = Jp.bottom + 0.5;
    for (let i of [t.minX + 0.12, t.maxX - 0.12])
      i > Jp.east + 0.2 ||
        e.addOBB(i, (n + r) / 2, 0.12, (r - n) / 2, 0, 0, 1.2, `wall`);
  }
  if (e.addFloorRect) {
    let t = Jp.top,
      n = Jp.top + Qp.width;
    e.addFloorRect(Qp.x0, t, Qp.xLand, n, $p, `stair`);
    let r = Math.ceil((Qp.top - $p) / Qp.rise),
      i = (Qp.x1 - Qp.xLand) / r;
    for (let a = 1; a <= r; a++) {
      let o = Math.min(Qp.top, $p + a * ((Qp.top - $p) / r));
      e.addFloorRect(
        Qp.xLand + (a - 1) * i,
        t,
        Qp.xLand + a * i,
        n,
        o,
        `stair`,
      );
    }
    (e.addFloorRect(Qp.x1, t, Qp.x1 + 1.6, n, Qp.top, `stair`),
      om(e, Qp.xLand, Qp.x1 + 1.6, n + 0.05, 0.05, $p, Qp.top + 1, `wall`),
      e.addOBB(
        Qp.x1 + 1.65,
        (t + n) / 2,
        0.05,
        Qp.width / 2 + 0.05,
        0,
        -2,
        Qp.top + 1,
        `wall`,
      ),
      e.addOBB(
        Qp.x0 - 0.05,
        (t + n) / 2,
        0.05,
        Qp.width / 2,
        0,
        $p,
        $p + 1,
        `wall`,
      ));
  }
}
var sm = { u: 16 / 2048, v: 1 - 16 / 1280 },
  cm = new Uint8Array(256);
for (let e = 0; e < 256; e++) cm[e] = Math.round(255 * (e / 255) ** 2.2);
var lm = (e) => cm[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function um(e, t, n = 1) {
  return (
    e.setColor(
      lm(((t >> 16) & 255) * n),
      lm(((t >> 8) & 255) * n),
      lm((t & 255) * n),
    ),
    e
  );
}
function dm(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  e.quad(t, n, r, i, a, o, s, c, l, u, d, f, sm.u, sm.v, sm.u, sm.v);
}
function fm(e, t, n, r, i, a, o, s = !1) {
  e.box(t, n, r, i, a, o, sm.u, sm.v, sm.u, sm.v, s);
}
