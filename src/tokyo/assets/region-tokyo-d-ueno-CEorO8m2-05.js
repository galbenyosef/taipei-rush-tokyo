// tokyo/assets/region-tokyo-d-ueno-CEorO8m2 05 — math
// Lines 1256-1595 of readable/tokyo/assets/region-tokyo-d-ueno-CEorO8m2.pretty.js (statement-aligned).
function Ke(e, t) {
  let n = t.uv(`conc`),
    r = t.white(),
    i = t.uv(`bunka-eave`),
    { x0: a, x1: o, z0: s, z1: c } = V,
    l = z,
    u = a + 2.2,
    d = o - 0.2,
    f = s + 2.2,
    p = c - 2.2;
  (e.setMaterial(0.2, 0.1, 0, 0),
    E(e, 16777215),
    K(e, u, f, u, p, l, l + 7.6, t.uv(`bunka-lobby`), 6),
    K(e, d, f, u, f, l, l + 7.6, t.uv(`bunka-lobby`), 6),
    K(e, u, p, d, p, l, l + 7.6, t.uv(`bunka-lobby`), 6),
    e.setMaterial(0.9, 0, 0, 0),
    E(e, 11841186));
  for (let t = s + 1.1; t <= c - 1; t += 4.4)
    O(e, a + 0.8, l, t - 0.35, a + 1.5, l + 7.6, t + 0.35, n);
  for (let t = a + 1.1; t <= o - 1; t += 4.4)
    (O(e, t - 0.35, l, s + 0.8, t + 0.35, l + 7.6, s + 1.5, n),
      O(e, t - 0.35, l, c - 1.5, t + 0.35, l + 7.6, c - 0.8, n));
  E(e, 16777215);
  let m = l + 7.6,
    h = l + 10.6,
    g = 0.7,
    _ = (t, n, r, a, o, s) => {
      for (let c = 0; c < 10; c++) {
        let l = c / 10,
          u = (c + 1) / 10,
          d = (e) =>
            1.5 * (Math.max(0, Math.abs(e - 0.5) * 2 - 0.55) / 0.45) ** 2,
          f = t + (r - t) * l,
          p = n + (a - n) * l,
          _ = t + (r - t) * u,
          v = n + (a - n) * u;
        e.quad(
          f,
          m,
          p,
          _,
          m,
          v,
          _ + o * g,
          h + d(u),
          v + s * g,
          f + o * g,
          h + d(l),
          p + s * g,
          i.u0 + (i.u1 - i.u0) * l,
          i.v0,
          i.u0 + (i.u1 - i.u0) * u,
          i.v1,
        );
      }
    };
  (_(a, s, a, c, -1, 0),
    _(o, s, a, s, 0, -1),
    _(a, c, o, c, 0, 1),
    _(o, c, o, s, 1, 0),
    e.setMaterial(0.95, 0, 0, 0),
    E(e, 7236196),
    ne(e, a, s, o, c, m, r, !0),
    E(e, 9341570),
    ne(e, a - g, s - g, o + g, c + g, h - 0.2, n),
    E(e, 16777215));
  let v = a + 4.5,
    y = o - 3.5,
    b = s + 5,
    x = c - 5,
    S = l + 17.5;
  (D(e, v, b, v, x, h - 0.2, S, t.uv(`bunka-wall`)),
    D(e, y, b, v, b, h - 0.2, S, t.uv(`bunka-wall`)),
    D(e, v, x, y, x, h - 0.2, S, t.uv(`bunka-wall`)),
    D(e, y, x, y, b, h - 0.2, S, t.uv(`bunka-wall`)),
    E(e, 9210500));
  for (let t = 0; t < 6; t++) {
    let r = (t / 6) * Math.PI,
      i = ((t + 1) / 6) * Math.PI,
      a = (y - v) / 2,
      o = (v + y) / 2,
      s = o - Math.cos(r) * a,
      c = S + Math.sin(r) * 2.2,
      l = o - Math.cos(i) * a,
      u = S + Math.sin(i) * 2.2;
    (e.quad(s, c, x, l, u, x, l, u, b, s, c, b, n.u0, n.v0, n.u1, n.v1),
      e.quad(
        s,
        S,
        x,
        l,
        S,
        x,
        l,
        u,
        x,
        s,
        c + 0.001,
        x,
        n.u0,
        n.v0,
        n.u1,
        n.v1,
      ),
      e.quad(
        l,
        S,
        b,
        s,
        S,
        b,
        s,
        c,
        b,
        l,
        u + 0.001,
        b,
        n.u0,
        n.v0,
        n.u1,
        n.v1,
      ));
  }
  let C = s - 1.1,
    w = c + 1,
    T = a - 1.1,
    ee = o;
  (e.setMaterial(0.7, 0, 0, 0), E(e, 16777215));
  let te = (n, i, a, o, s) => {
    let c = Math.hypot(a - n, o - i),
      u = Math.max(1, Math.round(c / 4.8));
    for (let c = 0; c < u; c++) {
      let d = c / u,
        f = (c + 1) / u,
        p = c === s ? `hoard-notice` : `hoard`;
      (D(
        e,
        n + (a - n) * d,
        i + (o - i) * d,
        n + (a - n) * f,
        i + (o - i) * f,
        l,
        l + 3,
        t.uv(p),
      ),
        D(
          e,
          n + (a - n) * f,
          i + (o - i) * f,
          n + (a - n) * d,
          i + (o - i) * d,
          l,
          l + 3,
          r,
        ));
    }
  };
  (te(ee, C, T, C, 1),
    te(T, C, T, w, 2),
    te(T, w, ee, w, 1),
    e.setMaterial(0.6, 0, 0, 0),
    D(
      e,
      T + 6.2,
      C - 0.03,
      T + 3.8,
      C - 0.03,
      l + 0.9,
      l + 2.5,
      t.uv(`hoard-board`),
    ),
    D(
      e,
      T + 2.2,
      C - 0.03,
      T + 1,
      C - 0.03,
      l + 0.6,
      l + 2.2,
      t.uv(`hoard-owabi`),
    ),
    D(
      e,
      T - 0.03,
      w - 3.2,
      T - 0.03,
      w - 2,
      l + 0.6,
      l + 2.2,
      t.uv(`hoard-owabi`),
    ));
}
function qe(e, t) {
  (t.uniques.push({
    name: `koenguchi`,
    write: (t) => Ge(t, e),
    cx: (B.x0 + B.x1) / 2,
    cz: (B.z0 + B.z1) / 2,
    range: 520,
  }),
    t.uniques.push({
      name: `bunka-kaikan`,
      write: (t) => Ke(t, e),
      cx: (V.x0 + V.x1) / 2,
      cz: (V.z0 + V.z1) / 2,
      range: 620,
    }),
    t.boxes.push({
      minX: B.x0,
      minZ: B.z0,
      maxX: B.x1,
      maxZ: B.z1,
      y0: z - 1,
      y1: z + B.h + 0.5,
    }),
    t.boxes.push({
      minX: V.x0 - 1.15,
      minZ: V.z0 - 1.15,
      maxX: V.x1,
      maxZ: V.z1 + 1.05,
      y0: z - 1,
      y1: z + 20,
    }),
    t.instances.push({
      model: `pylon`,
      x: -160.5,
      y: z,
      z: -1246.5,
      fx: -1,
      fz: 0,
      range: 120,
    }),
    t.circles.push({ x: -160.5, z: -1246.5, r: 0.35, y0: z, y1: z + 2.6 }));
}
var Je = 3;
function Ye(e) {
  (e.need(`ks-tile`, 128, 128, Xe),
    e.need(`ks-sky`, 512, 64, Ze),
    e.need(`ks-name`, 384, 112, Qe),
    e.need(`ks-door`, 192, 160, $e),
    e.need(`ks-poster`, 96, 128, et),
    e.need(`stone-name`, 96, 256, tt),
    e.need(`park-map`, 384, 256, nt),
    e.need(`bus-flag`, 96, 96, rt),
    e.need(`bus-table`, 64, 128, it));
}
function Xe(e, t, n, r, i) {
  I(e, t, n, r, i, `#b9b2a4`);
  for (let a = 0; a < 8; a++)
    for (let o = 0; o < 4; o++)
      I(
        e,
        t + (a * r) / 8 + 1,
        n + (o * i) / 4 + 1,
        r / 8 - 2,
        i / 4 - 2,
        [`#c7c0b2`, `#bfb8aa`, `#cbc4b6`, `#c2bbad`][(a * 3 + o) % 4],
      );
  R(e, 33, t, n, r, i, 140, 1.2, [`#9a9486`, `#d6d0c2`], 0.3);
}
function Ze(e, t, n, r, i) {
  (F(e, t, n, r, i, `#14306e`, 0.6),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#4fa6e0`),
    (e.lineWidth = i * 0.12),
    e.beginPath(),
    e.moveTo(t + r * 0.04, n + i * 0.8),
    e.quadraticCurveTo(t + r * 0.45, n - i * 0.1, t + r * 0.96, n + i * 0.55),
    e.stroke(),
    P(
      e,
      N(`ueno.keisei.skyliner`),
      t + r * 0.5,
      n + i * 0.5,
      r * 0.4,
      i * 0.5,
      `#ffffff`,
      `900`,
    ),
    P(
      e,
      N(`ueno.keisei.narita`),
      t + r * 0.84,
      n + i * 0.78,
      r * 0.22,
      i * 0.2,
      `#cfe4ff`,
      `700`,
    ));
}
function Qe(e, t, n, r, i) {
  (F(e, t, n, r, i * 0.66, `#14306e`, 0.6),
    P(
      e,
      N(`ueno.keisei.operator`),
      t + r * 0.2,
      n + i * 0.33,
      r * 0.26,
      i * 0.24,
      `#ffffff`,
      `700`,
    ),
    P(
      e,
      N(`ueno.keisei.name`),
      t + r * 0.62,
      n + i * 0.33,
      r * 0.5,
      i * 0.42,
      `#ffffff`,
      `900`,
    ),
    F(e, t, n + i * 0.66, r, i * 0.34, `#ffffff`, 0.6),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#14306e`),
    (e.lineWidth = 3),
    e.beginPath(),
    e.arc(t + r * 0.08, n + i * 0.83, i * 0.13, 0, Math.PI * 2),
    e.stroke(),
    P(
      e,
      N(`ueno.keisei.number`),
      t + r * 0.08,
      n + i * 0.83,
      i * 0.2,
      i * 0.11,
      `#14306e`,
      `900`,
    ),
    de(
      e,
      N(`ueno.keisei.latin`),
      t + r * 0.16,
      n + i * 0.83,
      r * 0.5,
      i * 0.2,
      `#14306e`,
      `700`,
    ));
}
