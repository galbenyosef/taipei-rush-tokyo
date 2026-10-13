// tokyo__assets__region-tokyo-BcM3fReU 50 — top
// Lines 27779-28092 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function kg(e) {
  let t = (t) =>
      Float64Array.from(
        e
          .filter((e) => e.over === t)
          .flatMap((e) => [e.minX, e.maxX, e.minZ, e.maxZ]),
      ),
    n = t(`kanda`),
    r = t(`nihonbashi`),
    i = t(`sumida`),
    a = (e, t, n) => {
      for (let r = 0; r < e.length; r += 4)
        if (t >= e[r] && t <= e[r + 1] && n >= e[r + 2] && n <= e[r + 3])
          return !0;
      return !1;
    },
    o = vg;
  return (e, t) => {
    if (t >= ug.top && t <= dg.bottom && e >= ug.west && e <= ug.mouth) {
      if (e < dg.east) {
        if (t < dg.top) return !1;
      } else if (t > ug.bottom || (e < ug.gorgeX && t < ug.topWest)) return !1;
      return !a(n, e, t);
    }
    if (t >= fg.top && t <= fg.bottom && e >= fg.west && e <= fg.mouth)
      return !a(r, e, t);
    if (e >= pg.minX && e <= pg.maxX && t >= pg.minZ && t <= pg.maxZ) return !0;
    if (e >= mg.minX && e <= mg.maxX && t >= mg.minZ && t <= mg.maxZ)
      return !(
        (e >= hg.minX && e <= hg.maxX && t >= hg.minZ && t <= hg.maxZ) ||
        (e >= gg.minX && e <= gg.maxX && t >= gg.minZ && t <= gg.maxZ) ||
        (e >= _g.minX && e <= _g.maxX && t >= _g.minZ && t <= _g.maxZ)
      );
    if (e >= yg.westX && e <= 880 && t >= -1020 && t <= 900) {
      if (a(i, e, t)) return !1;
      let n = !1;
      for (let r = 0, i = o.length - 1; r < o.length; i = r++) {
        let a = o[r][0],
          s = o[r][1],
          c = o[i][0],
          l = o[i][1];
        s > t != l > t && e < ((c - a) * (t - s)) / (l - s) + a && (n = !n);
      }
      return n;
    }
    return !1;
  };
}
var Ag = dg,
  jg = 0.15,
  Mg = 1.25,
  Ng = 2.6,
  Pg = {
    x0: -297,
    xLand: -291,
    x1: -282.6,
    top: jg,
    width: 1.4,
    rise: 0.3,
    run: 0.3,
  },
  Fg = Ag.level + 0.45,
  Ig = (e, t, n = 0) =>
    e < Ag.east + n && t >= Ag.top - n && t <= Ag.bottom + n;
function Lg(e) {
  return (e.dataset.bridges ?? []).filter(
    (e) => e.over === `kanda` && e.minX < Ag.east,
  );
}
var Rg = (e, t) => {
  let n = Math.sin(e * 12.9898 + t * 78.233) * 43758.5453;
  return n - Math.floor(n);
};
function zg(e, t, n) {
  let r = e / n,
    i = t / n,
    a = Math.floor(r),
    o = Math.floor(i),
    s = r - a,
    c = i - o,
    l = s * s * (3 - 2 * s),
    u = c * c * (3 - 2 * c),
    d = Rg(a, o),
    f = Rg(a + 1, o),
    p = Rg(a, o + 1),
    m = Rg(a + 1, o + 1);
  return d + (f - d) * l + (p - d) * u + (d - f - p + m) * l * u;
}
function Bg(e, t, n, r, i, a, o, s, c) {
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
        e.setColor(V(m[0]), V(m[1]), V(m[2])),
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
function Vg(e, t, n, r, i, a, o, s) {
  let c = Math.min(r, i),
    l = Math.max(r, i);
  if ((e.setMaterial(0.92, 0, 0, 0), o - a < 2)) {
    Bg(e, t, n, c, l, [a, o - 0.12, o - 0.12, o], 4, s, (e, t, n) => {
      let r = t > o - 0.13 ? 1.12 : 0.92 + 0.12 * zg(e, t, 2.5);
      ((n[0] = 150 * r), (n[1] = 148 * r), (n[2] = 142 * r));
    });
    return;
  }
  let u = Ag.level,
    d = u + Ng,
    f = (e) => 0.62 + 0.38 * Math.min(1, Math.max(0, (e - u) / (o - u)));
  (Bg(e, t, n, c, l, [a, u + 0.18, u + 0.42], 3, s, (e, t, n) => {
    let r = zg(e, 3.1, 1.7),
      i = f(t) * (t < u + 0.2 ? 0.7 : 0.9);
    ((n[0] = (52 + 18 * r) * i),
      (n[1] = (64 + 18 * r) * i),
      (n[2] = (46 + 12 * r) * i));
  }),
    Bg(e, t, n, c, l, [u + 0.42, u + 1.5, d], 2.5, s, (e, t, n) => {
      let r = zg(e, t, 1.3),
        i = zg(e + 40, t, 3.2),
        a = f(t) * (0.86 + 0.24 * r);
      ((n[0] = (128 - 22 * i) * a),
        (n[1] = (124 - 12 * i) * a),
        (n[2] = (112 - 18 * i) * a));
    }),
    Bg(e, t, n, c, l, [d, d + 0.22], 4, s, (e, t, n) => {
      let r = f(t) * (1.02 + 0.08 * zg(e, 1, 3));
      ((n[0] = 150 * r), (n[1] = 148 * r), (n[2] = 140 * r));
    }));
  let p = o - 0.42,
    m = [d + 0.22];
  for (let e = d + 1.4; e < p - 0.4; e += 1.25) m.push(e);
  (m.push(p),
    Bg(e, t, n, c, l, m, 2.2, s, (e, t, n) => {
      let r = zg(e, t, 1.6),
        i = zg(e + 17, t * 1.3, 4.5),
        a = Math.max(0, i - 0.72) * 3.2,
        o = f(t) * (0.7 + 0.5 * r);
      ((n[0] = (52 + 30 * i + 70 * a) * o),
        (n[1] = (84 + 40 * r + 30 * a) * o),
        (n[2] = (38 + 10 * r + 40 * a) * o));
    }),
    Bg(e, t, n, c, l, [p, o], 4, s, (e, t, n) => {
      let r = 0.95 + 0.1 * zg(e, 2, 2.4);
      ((n[0] = 172 * r), (n[1] = 170 * r), (n[2] = 162 * r));
    }));
}
function Hg(e, t, n, r, i, a) {
  e.quad(t, a, n, r, a, n, r, a, i, t, a, i);
}
function Ug(e, t, n) {
  if (n.minX > Ag.east + 8 || n.maxZ < Ag.top - 8 || n.minZ > Ag.bottom + 8)
    return;
  let r = Ag.level;
  for (let i of Lg(t)) {
    let t = i.maxX > Ag.east ? i.minX : (i.minX + i.maxX) / 2;
    if (t < n.minX || t >= n.maxX) continue;
    let a = i.minX,
      o = Math.min(i.maxX, Ag.east),
      s = -1.25;
    if (i.maxX > Ag.east) {
      let t = i.minX - 0.02,
        n = Ag.top,
        a = Ag.bottom,
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
        (e.setMaterial(0.95, 0, 0, 0).setColor(V(14), V(17), V(16)),
          e.quad(t, r - 0.2, i, t, r - 0.2, a, t, f, a, t, d, i),
          e.setColor(V(122), V(120), V(112)),
          e.quad(t, d + 0.35, i, t, f + 0.35, a, t, s, a, t, s, i),
          e.setColor(V(146), V(142), V(132)),
          e.quad(t, d, i, t, f, a, t, f + 0.35, a, t, d + 0.35, i));
      }
      (e.setColor(V(112), V(110), V(102)),
        e.quad(t, r - 0.2, n, t, r - 0.2, l - u, t, s, l - u, t, s, n),
        e.quad(t, r - 0.2, l + u, t, r - 0.2, a, t, s, a, t, s, l + u));
      continue;
    }
    let c = Ag.top - 0.05,
      l = Ag.bottom + 0.05;
    (e.setMaterial(0.95, 0, 0, 0).setColor(V(96), V(96), V(92)),
      Hg(e, a, c, o, l, s),
      Vg(e, `z`, c, a, o, r - 0.2, s, 1),
      Vg(e, `z`, l, a, o, r - 0.2, s, -1));
  }
}
function Wg(e, t, n, r, i, a, o, s) {
  for (let c = t; c < n - 0.01; c += 24) {
    let t = Math.min(n, c + 24);
    e.addOBB((c + t) / 2, r, (t - c) / 2, i, 0, a, o, s);
  }
}
function Gg(e, t) {
  let n = Ag.level,
    r = t.bounds.minX - 40,
    i = Lg(t),
    a = i.find((e) => e.maxX > Ag.east),
    o = a ? a.minX : Ag.east;
  (Wg(e, r, o, Ag.top - 0.3, 0.3, n - 4, -0.25, `wall`),
    Wg(e, r, o, Ag.bottom + 0.3, 0.3, n - 4, -0.25, `wall`),
    a &&
      e.addOBB(
        a.minX + 0.3,
        (Ag.top + Ag.bottom) / 2,
        0.3,
        (Ag.bottom - Ag.top) / 2,
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
        (n > a && Wg(e, a, n, t, 0.08, 0, 1.2, `wall`), (a = Math.max(a, r)));
      a < o && Wg(e, a, o, t, 0.08, 0, 1.2, `wall`);
    };
  (c(Ag.top - 0.12, [Pg.x1, Pg.x1 + 1.6]), c(Ag.bottom + 0.12, null));
  for (let t of i) {
    let n = Ag.top - 0.5,
      r = Ag.bottom + 0.5;
    for (let i of [t.minX + 0.12, t.maxX - 0.12])
      i > Ag.east + 0.2 ||
        e.addOBB(i, (n + r) / 2, 0.12, (r - n) / 2, 0, 0, 1.2, `wall`);
  }
  if (e.addFloorRect) {
    let t = Ag.top,
      n = Ag.top + Pg.width;
    e.addFloorRect(Pg.x0, t, Pg.xLand, n, Fg, `stair`);
    let r = Math.ceil((Pg.top - Fg) / Pg.rise),
      i = (Pg.x1 - Pg.xLand) / r;
    for (let a = 1; a <= r; a++) {
      let o = Math.min(Pg.top, Fg + a * ((Pg.top - Fg) / r));
      e.addFloorRect(
        Pg.xLand + (a - 1) * i,
        t,
        Pg.xLand + a * i,
        n,
        o,
        `stair`,
      );
    }
    (e.addFloorRect(Pg.x1, t, Pg.x1 + 1.6, n, Pg.top, `stair`),
      Wg(e, Pg.xLand, Pg.x1 + 1.6, n + 0.05, 0.05, Fg, Pg.top + 1, `wall`),
      e.addOBB(
        Pg.x1 + 1.65,
        (t + n) / 2,
        0.05,
        Pg.width / 2 + 0.05,
        0,
        -2,
        Pg.top + 1,
        `wall`,
      ),
      e.addOBB(
        Pg.x0 - 0.05,
        (t + n) / 2,
        0.05,
        Pg.width / 2,
        0,
        Fg,
        Fg + 1,
        `wall`,
      ));
  }
}
var Kg = { u: 16 / 2048, v: 1 - 16 / 1280 },
  qg = new Uint8Array(256);
for (let e = 0; e < 256; e++) qg[e] = Math.round(255 * (e / 255) ** 2.2);
var Jg = (e) => qg[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function K(e, t, n = 1) {
  return (
    e.setColor(
      Jg(((t >> 16) & 255) * n),
      Jg(((t >> 8) & 255) * n),
      Jg((t & 255) * n),
    ),
    e
  );
}
function Yg(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  e.quad(t, n, r, i, a, o, s, c, l, u, d, f, Kg.u, Kg.v, Kg.u, Kg.v);
}
function Xg(e, t, n, r, i, a, o, s = !1) {
  e.box(t, n, r, i, a, o, Kg.u, Kg.v, Kg.u, Kg.v, s);
}
