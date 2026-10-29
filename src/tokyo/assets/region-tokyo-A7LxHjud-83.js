// tokyo/assets/region-tokyo-A7LxHjud 83 — minx
// Lines 37748-38074 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Yce(e) {
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
    o = Ip.outer,
    s = Ip.inner,
    c = Lp,
    l = Rp,
    u = (e, t, n) => {
      for (let r = 0; r < e.length; r += 4)
        if (t >= e[r] && t <= e[r + 1] && n >= e[r + 2] && n <= e[r + 3])
          return !0;
      return !1;
    },
    d = qp;
  return (e, t) => {
    if (t >= Np.top && t <= Pp.bottom && e >= Np.west && e <= Np.mouth) {
      if (e < Pp.east) {
        if (t < Pp.top) return !1;
      } else if (t > Np.bottom || (e < Np.gorgeX && t < Np.topWest)) return !1;
      return !u(n, e, t);
    }
    if (t >= Fp.top && t <= Fp.bottom && e >= Fp.west && e <= Fp.mouth)
      return !u(r, e, t);
    if (e >= Hp.minX && e <= Hp.maxX && t >= Hp.minZ && t <= Hp.maxZ) return !0;
    if (e >= o.minX && e <= o.maxX && t >= o.minZ && t <= o.maxZ)
      return !(e > s.minX && e < s.maxX && t > s.minZ && t < s.maxZ);
    if (e >= c.minX && e <= c.maxX && t >= c.minZ && t <= c.maxZ) return !0;
    if (e >= l.minX && e <= l.maxX && t >= l.minZ && t <= l.maxZ)
      return !u(a, e, t);
    if (e >= zp.minX && e <= zp.maxX && t >= zp.minZ && t <= zp.maxZ) return !0;
    if (e >= Bp.minX && e <= Bp.maxX && t >= Bp.minZ && t <= Bp.maxZ)
      return !(e >= Vp.minX && e <= Vp.maxX && t >= Vp.minZ && t <= Vp.maxZ);
    if (e >= Up.minX && e <= Up.maxX && t >= Up.minZ && t <= Up.maxZ)
      return !(
        (e >= Wp.minX && e <= Wp.maxX && t >= Wp.minZ && t <= Wp.maxZ) ||
        (e >= Gp.minX && e <= Gp.maxX && t >= Gp.minZ && t <= Gp.maxZ) ||
        (e >= Kp.minX && e <= Kp.maxX && t >= Kp.minZ && t <= Kp.maxZ)
      );
    if (e >= Jp.westX && e <= 880 && t >= Jp.upNorthZ && t <= 900) {
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
var Zp = Pp,
  Qp = 0.15,
  $p = 1.25,
  em = 2.6,
  tm = {
    x0: -297,
    xLand: -291,
    x1: -282.6,
    top: Qp,
    width: 1.4,
    rise: 0.3,
    run: 0.3,
  },
  nm = Zp.level + 0.45,
  rm = (e, t, n = 0) =>
    e < Zp.east + n && t >= Zp.top - n && t <= Zp.bottom + n;
function im(e) {
  return (e.dataset.bridges ?? []).filter(
    (e) => e.over === `kanda` && e.minX < Zp.east,
  );
}
var am = (e, t) => {
  let n = Math.sin(e * 12.9898 + t * 78.233) * 43758.5453;
  return n - Math.floor(n);
};
function om(e, t, n) {
  let r = e / n,
    i = t / n,
    a = Math.floor(r),
    o = Math.floor(i),
    s = r - a,
    c = i - o,
    l = s * s * (3 - 2 * s),
    u = c * c * (3 - 2 * c),
    d = am(a, o),
    f = am(a + 1, o),
    p = am(a, o + 1),
    m = am(a + 1, o + 1);
  return d + (f - d) * l + (p - d) * u + (d - f - p + m) * l * u;
}
function sm(e, t, n, r, i, a, o, s, c) {
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
function cm(e, t, n, r, i, a, o, s) {
  let c = Math.min(r, i),
    l = Math.max(r, i);
  if ((e.setMaterial(0.92, 0, 0, 0), o - a < 2)) {
    sm(e, t, n, c, l, [a, o - 0.12, o - 0.12, o], 4, s, (e, t, n) => {
      let r = t > o - 0.13 ? 1.12 : 0.92 + 0.12 * om(e, t, 2.5);
      ((n[0] = 150 * r), (n[1] = 148 * r), (n[2] = 142 * r));
    });
    return;
  }
  let u = Zp.level,
    d = u + em,
    f = (e) => 0.62 + 0.38 * Math.min(1, Math.max(0, (e - u) / (o - u)));
  (sm(e, t, n, c, l, [a, u + 0.18, u + 0.42], 3, s, (e, t, n) => {
    let r = om(e, 3.1, 1.7),
      i = f(t) * (t < u + 0.2 ? 0.7 : 0.9);
    ((n[0] = (52 + 18 * r) * i),
      (n[1] = (64 + 18 * r) * i),
      (n[2] = (46 + 12 * r) * i));
  }),
    sm(e, t, n, c, l, [u + 0.42, u + 1.5, d], 2.5, s, (e, t, n) => {
      let r = om(e, t, 1.3),
        i = om(e + 40, t, 3.2),
        a = f(t) * (0.86 + 0.24 * r);
      ((n[0] = (128 - 22 * i) * a),
        (n[1] = (124 - 12 * i) * a),
        (n[2] = (112 - 18 * i) * a));
    }),
    sm(e, t, n, c, l, [d, d + 0.22], 4, s, (e, t, n) => {
      let r = f(t) * (1.02 + 0.08 * om(e, 1, 3));
      ((n[0] = 150 * r), (n[1] = 148 * r), (n[2] = 140 * r));
    }));
  let p = o - 0.42,
    m = [d + 0.22];
  for (let e = d + 1.4; e < p - 0.4; e += 1.25) m.push(e);
  (m.push(p),
    sm(e, t, n, c, l, m, 2.2, s, (e, t, n) => {
      let r = om(e, t, 1.6),
        i = om(e + 17, t * 1.3, 4.5),
        a = Math.max(0, i - 0.72) * 3.2,
        o = f(t) * (0.7 + 0.5 * r);
      ((n[0] = (52 + 30 * i + 70 * a) * o),
        (n[1] = (84 + 40 * r + 30 * a) * o),
        (n[2] = (38 + 10 * r + 40 * a) * o));
    }),
    sm(e, t, n, c, l, [p, o], 4, s, (e, t, n) => {
      let r = 0.95 + 0.1 * om(e, 2, 2.4);
      ((n[0] = 172 * r), (n[1] = 170 * r), (n[2] = 162 * r));
    }));
}
function Xce(e, t, n, r, i, a) {
  e.quad(t, a, n, r, a, n, r, a, i, t, a, i);
}
function Zce(e, t, n) {
  if (n.minX > Zp.east + 8 || n.maxZ < Zp.top - 8 || n.minZ > Zp.bottom + 8)
    return;
  let r = Zp.level;
  for (let i of im(t)) {
    let t = i.maxX > Zp.east ? i.minX : (i.minX + i.maxX) / 2;
    if (t < n.minX || t >= n.maxX) continue;
    let a = i.minX,
      o = Math.min(i.maxX, Zp.east),
      s = -1.25;
    if (i.maxX > Zp.east) {
      let t = i.minX - 0.02,
        n = Zp.top,
        a = Zp.bottom,
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
    let c = Zp.top - 0.05,
      l = Zp.bottom + 0.05;
    (e.setMaterial(0.95, 0, 0, 0).setColor(R(96), R(96), R(92)),
      Xce(e, a, c, o, l, s),
      cm(e, `z`, c, a, o, r - 0.2, s, 1),
      cm(e, `z`, l, a, o, r - 0.2, s, -1));
  }
}
function lm(e, t, n, r, i, a, o, s) {
  for (let c = t; c < n - 0.01; c += 24) {
    let t = Math.min(n, c + 24);
    e.addOBB((c + t) / 2, r, (t - c) / 2, i, 0, a, o, s);
  }
}
function Qce(e, t) {
  let n = Zp.level,
    r = t.bounds.minX - 40,
    i = im(t),
    a = i.find((e) => e.maxX > Zp.east),
    o = a ? a.minX : Zp.east;
  (lm(e, r, o, Zp.top - 0.3, 0.3, n - 4, -0.25, `wall`),
    lm(e, r, o, Zp.bottom + 0.3, 0.3, n - 4, -0.25, `wall`),
    a &&
      e.addOBB(
        a.minX + 0.3,
        (Zp.top + Zp.bottom) / 2,
        0.3,
        (Zp.bottom - Zp.top) / 2,
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
        (n > a && lm(e, a, n, t, 0.08, 0, 1.2, `wall`), (a = Math.max(a, r)));
      a < o && lm(e, a, o, t, 0.08, 0, 1.2, `wall`);
    };
  (c(Zp.top - 0.12, [tm.x1, tm.x1 + 1.6]), c(Zp.bottom + 0.12, null));
  for (let t of i) {
    let n = Zp.top - 0.5,
      r = Zp.bottom + 0.5;
    for (let i of [t.minX + 0.12, t.maxX - 0.12])
      i > Zp.east + 0.2 ||
        e.addOBB(i, (n + r) / 2, 0.12, (r - n) / 2, 0, 0, 1.2, `wall`);
  }
  if (e.addFloorRect) {
    let t = Zp.top,
      n = Zp.top + tm.width;
    e.addFloorRect(tm.x0, t, tm.xLand, n, nm, `stair`);
    let r = Math.ceil((tm.top - nm) / tm.rise),
      i = (tm.x1 - tm.xLand) / r;
    for (let a = 1; a <= r; a++) {
      let o = Math.min(tm.top, nm + a * ((tm.top - nm) / r));
      e.addFloorRect(
        tm.xLand + (a - 1) * i,
        t,
        tm.xLand + a * i,
        n,
        o,
        `stair`,
      );
    }
    (e.addFloorRect(tm.x1, t, tm.x1 + 1.6, n, tm.top, `stair`),
      lm(e, tm.xLand, tm.x1 + 1.6, n + 0.05, 0.05, nm, tm.top + 1, `wall`),
      e.addOBB(
        tm.x1 + 1.65,
        (t + n) / 2,
        0.05,
        tm.width / 2 + 0.05,
        0,
        -2,
        tm.top + 1,
        `wall`,
      ),
      e.addOBB(
        tm.x0 - 0.05,
        (t + n) / 2,
        0.05,
        tm.width / 2,
        0,
        nm,
        nm + 1,
        `wall`,
      ));
  }
}
var um = { u: 16 / 2048, v: 1 - 16 / 1280 },
  dm = new Uint8Array(256);
for (let e = 0; e < 256; e++) dm[e] = Math.round(255 * (e / 255) ** 2.2);
var fm = (e) => dm[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function pm(e, t, n = 1) {
  return (
    e.setColor(
      fm(((t >> 16) & 255) * n),
      fm(((t >> 8) & 255) * n),
      fm((t & 255) * n),
    ),
    e
  );
}
function mm(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  e.quad(t, n, r, i, a, o, s, c, l, u, d, f, um.u, um.v, um.u, um.v);
}
function hm(e, t, n, r, i, a, o, s = !1) {
  e.box(t, n, r, i, a, o, um.u, um.v, um.u, um.v, s);
}
