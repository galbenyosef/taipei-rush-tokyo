// tokyo/assets/region-tokyo-d-ueno-CEorO8m2 09 — math
// Lines 2565-2905 of readable/tokyo/assets/region-tokyo-d-ueno-CEorO8m2.pretty.js (statement-aligned).
function wt(e, t, n, r) {
  let i = t.uv(`bark`),
    a = t.uv(`pine-pad`),
    o = t.white(),
    s = be.x - H.viewX,
    c = be.z - H.viewZ,
    l = Math.hypot(s, c),
    u = s / l,
    d = c / l,
    f = Math.hypot(H.x - H.viewX, H.z - H.viewZ),
    p = H.viewX + u * f,
    m = H.viewZ + d * f,
    h = r,
    g = 1.25,
    _ = -d,
    v = u,
    y = p + _ * 1.9,
    b = m + v * 1.9;
  (e.setMaterial(0.95, 0, 0, 0), E(e, 16777215));
  let x = (t, n, r, a, o, s, c) => M(e, t, n, r, a, o, s, c, i);
  (x(y, n, b, y - _ * 0.4, h - 1.6, b - v * 0.4, 0.2),
    x(
      y - _ * 0.4,
      h - 1.6,
      b - v * 0.4,
      p + _ * g * 0.8,
      h - g * 0.55,
      m + v * g * 0.8,
      0.16,
    ));
  for (let e = 0; e < 18; e++) {
    let t = (e / 18) * Math.PI * 2 - 0.6,
      n = ((e + 1) / 18) * Math.PI * 2 - 0.6,
      r = 0.12 - (e / 18) * 0.05,
      i = 0.12 - ((e + 1) / 18) * 0.05;
    x(
      p + _ * Math.cos(t) * g,
      h + Math.sin(t) * g,
      m + v * Math.cos(t) * g,
      p + _ * Math.cos(n) * g,
      h + Math.sin(n) * g,
      m + v * Math.cos(n) * g,
      (r + i) / 2,
    );
  }
  let S = h + g;
  (x(p + _ * 0.3, S - 0.1, m + v * 0.3, p - _ * 1.6, S + 1.4, m - v * 1.6, 0.1),
    x(p + _ * 0.6, S, m + v * 0.6, p + _ * 2.6, S + 0.9, m + v * 2.6, 0.09),
    e.setMaterial(0.9, 0, 0, 0));
  for (let [t, n, r, i] of [
    [-0.6, 0.15, 0, 0.9],
    [0.5, 0.25, 0.1, 0.8],
    [-1.6, 1.4, -0.2, 1],
    [-0.8, 1.2, 0.3, 0.8],
    [2.6, 0.95, 0.2, 0.9],
    [1.6, 0.7, -0.2, 0.75],
    [0.2, 1.5, 0, 0.7],
    [-2.2, 0.9, 0.2, 0.7],
    [3.1, 0.4, -0.1, 0.6],
  ]) {
    let o = p + _ * t + u * r,
      s = m + v * t + d * r;
    j(e, o, S + n, s, i * 1.1, i * 0.32, i * 1.1, a, 3, 7);
  }
  (E(e, 9058858), e.setMaterial(0.8, 0, 0, 0));
  let C = H.viewX + u * 1.2,
    w = H.viewZ + d * 1.2;
  (M(
    e,
    C - _ * 3,
    z + 0.95,
    w - v * 3,
    C + _ * 3,
    z + 0.95,
    w + v * 3,
    0.06,
    o,
  ),
    M(
      e,
      C - _ * 3,
      z + 0.5,
      w - v * 3,
      C + _ * 3,
      z + 0.5,
      w + v * 3,
      0.04,
      o,
    ));
  for (let t = -3; t <= 3; t += 1.5)
    M(e, C + _ * t, z, w + v * t, C + _ * t, z + 1, w + v * t, 0.05, o);
}
function Tt(e, t, n, r) {
  let i = e.plan,
    o = i.waterLevel,
    c = new a(s(`ueno-lotus-field`, 1)),
    l = n === 0 ? 8.5 : n === 1 ? 7 : 6,
    u = (e, t) =>
      we.some((n) => e > n.minX && e < n.maxX && t > n.minZ && t < n.maxZ),
    d = (e, t) =>
      i.surfaceAt(e, t) === `water` &&
      i.surfaceAt(e + 2.4, t) === `water` &&
      i.surfaceAt(e - 2.4, t) === `water` &&
      i.surfaceAt(e, t + 2.4) === `water` &&
      i.surfaceAt(e, t - 2.4) === `water`,
    f = 0;
  for (let e = Ce.x0; e < Ce.x1; e += l)
    for (let t = Ce.z0; t < Ce.z1; t += l) {
      let i = e + (c.next() - 0.5) * l * 0.8,
        a = t + (c.next() - 0.5) * l * 0.8,
        s = c.next(),
        p = Math.floor(c.next() * 4),
        m = c.next() * Math.PI * 2;
      if (s < 0.22 || u(i, a) || !d(i, a)) continue;
      let h = Math.cos(m),
        g = Math.sin(m),
        _ = 0.85 + c.next() * 0.4;
      for (let e of [`green`, `brown`, `dead`])
        r.instances.push({
          model: `lotus-${e}-${p}`,
          x: i,
          y: o,
          z: a,
          fx: h,
          fz: g,
          s: _,
          range: n === 0 ? 130 : 190,
          when: (t) => bt(t) === e,
        });
      (!(p & 1) &&
        s > 0.5 &&
        r.instances.push({
          model: `lotus-bloom-${p >> 1}`,
          x: i,
          y: o,
          z: a,
          fx: h,
          fz: g,
          s: _,
          range: 180,
          when: (e) => e.m === 7 || (e.m === 8 && e.d <= 20),
        }),
        f++);
    }
  (r.uniques.push({
    name: `boat-pier`,
    write: (e) => St(e, t, o),
    cx: (W.x0 + W.x1) / 2,
    cz: (W.z0 + W.z1) / 2,
    range: 320,
  }),
    r.uniques.push({
      name: `boat-kiosk`,
      write: (e) => Ct(e, t),
      cx: (G.x0 + G.x1) / 2,
      cz: (G.z0 + G.z1) / 2,
      range: 260,
    }),
    r.floors.push({
      cx: (W.x0 + W.x1) / 2,
      cz: (W.z0 + W.z1) / 2,
      hx: (W.x1 - W.x0) / 2,
      hz: (W.z1 - W.z0) / 2,
      y0: 0.32,
      y1: 0.32,
      heading: 0,
    }),
    r.boxes.push({
      minX: G.x0,
      minZ: G.z0,
      maxX: G.x1,
      maxZ: G.z1,
      y0: 0,
      y1: 3.2,
    }),
    r.instances.push({
      model: `boat-board`,
      x: W.x0 + 0.8,
      y: 0.32,
      z: W.z0 + 1.2,
      fx: 0,
      fz: 1,
      range: 110,
    }));
  let p = i.groundHeight(H.x, H.z);
  (r.uniques.push({
    name: `tsuki-no-matsu`,
    write: (e) => wt(e, t, p, z + 1.62),
    cx: H.x,
    cz: H.z,
    range: 420,
  }),
    r.circles.push({ x: H.x, z: H.z, r: 0.35, y0: p, y1: p + 4 }),
    r.instances.push({
      model: `matsu-board`,
      x: H.viewX + 2.6,
      y: z,
      z: H.viewZ - 1.4,
      fx: 0,
      fz: 1,
      range: 90,
    }),
    r.instances.push({
      model: `hasu-board`,
      x: -292,
      y: i.groundHeight(-292, -1007.6),
      z: -1007.6,
      fx: 0,
      fz: -1,
      range: 120,
    }));
}
var Et = (e) => [
    {
      name: `matsu-board`,
      write: (t) => {
        (t.setMaterial(0.8, 0, 0, 0),
          E(t, 4864554),
          O(t, -0.05, 0, -0.05, 0.05, 1.2, 0.05, e.white()),
          E(t, 16777215),
          t.setMaterial(0.8, 0, 0.08, 1),
          k(
            t,
            0,
            0,
            1,
            1.75,
            0.38,
            0.03,
            0,
            1,
            e.uv(`bark`),
            e.uv(`matsu-board`),
          ));
      },
    },
  ],
  Dt = 3,
  Ot = 6;
function kt(e) {
  for (let t = 0; t < Ot; t++) e.need(`bonbori-${t}`, 64, 128, At(t));
  (e.need(`sakura-banner`, 384, 64, jt),
    e.need(`zoo-sign`, 512, 96, Mt),
    e.need(`zoo-hashi`, 96, 256, Nt(0)),
    e.need(`zoo-arigato`, 96, 256, Nt(1)),
    e.need(`zoo-hours`, 160, 96, Pt),
    e.need(`zoo-booth`, 192, 128, Ft),
    e.need(`zoo-gate`, 256, 96, It),
    e.need(`hedge`, 128, 64, (e, t, n, r, i) => {
      (I(e, t, n, r, i, `#36552c`),
        R(e, 6, t, n, r, i, 400, 3, [`#4a6e38`, `#28401f`, `#5a7e44`], 0.6));
    }),
    e.need(`post-front`, 64, 96, Lt),
    e.need(`heaven-board`, 96, 128, (e, t, n, r, i) => {
      (I(e, t, n, r, i, `#fbf6ea`),
        I(e, t, n, r, i * 0.22, `#e8711a`),
        P(
          e,
          N(`ueno.heaven.name`),
          t + r / 2,
          n + i * 0.11,
          r * 0.86,
          i * 0.14,
          `#ffffff`,
          `900`,
        ),
        P(
          e,
          N(`ueno.heaven.license`),
          t + r / 2,
          n + i * 0.34,
          r * 0.86,
          i * 0.08,
          `#e8711a`,
          `800`,
        ));
      for (let a = 0; a < 3; a++)
        ((e.fillStyle = [`#e02020`, `#2a6ad0`, `#f0c020`][a]),
          e.beginPath(),
          e.ellipse(
            t + r * (0.3 + a * 0.2),
            n + i * (0.56 - (a % 2) * 0.06),
            r * 0.05,
            i * 0.09,
            0.3 * (a - 1),
            0,
            Math.PI * 2,
          ),
          e.fill());
      P(
        e,
        N(`ueno.heaven.thanks`),
        t + r / 2,
        n + i * 0.82,
        r * 0.86,
        i * 0.1,
        `#2a2a2a`,
        `800`,
      );
    }),
    e.need(`pigeon`, 32, 32, (e, t, n, r, i) => {
      (I(e, t, n, r, i, `#8a8e96`),
        I(e, t, n + i * 0.3, r, i * 0.2, `#6a7a78`));
    }));
}
function At(e) {
  return (t, n, r, i, a) => {
    (F(t, n, r, i, a, `#fbf6ea`, 0.65),
      I(t, n, r, i, a * 0.16, `#d83a3a`),
      I(t, n, r + a * 0.92, i, a * 0.08, `#d83a3a`));
    for (let e = 0; e < 5; e++)
      L(
        t,
        n + i * (0.18 + (e % 2) * 0.12),
        r + a * (0.24 + e * 0.05),
        i * 0.06,
        `#f4a6c0`,
      );
    (x(
      t,
      N(`ueno.sakura.bonbori.${(e % 6) + 1}`),
      n + i * 0.58,
      r + a * 0.2,
      r + a * 0.88,
      i * 0.5,
      `#2a2a2a`,
      void 0,
      `800`,
    ),
      P(
        t,
        N(`ueno.sakura.matsuri`),
        n + i / 2,
        r + a * 0.08,
        i * 0.9,
        a * 0.1,
        `#ffffff`,
        `800`,
      ));
  };
}
