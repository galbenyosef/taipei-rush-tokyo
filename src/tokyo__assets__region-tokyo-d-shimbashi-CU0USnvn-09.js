// tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn 09 — math
// Lines 2608-2935 of readable/tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function Ct(e, t, n) {
  let r = t.white(),
    i = t.uv(`kosho:books`),
    { x0: a, x1: o, z0: s, z1: c } = k,
    l = Math.floor((c - s) / 3.4);
  for (let t = 0; t < l; t++) {
    let c = s + t * 3.4 + 0.2,
      l = c + 3;
    (e.setMaterial(0.6, 0.4, 0, 0), P(e, 13159632));
    for (let [t, i] of [
      [a, c],
      [o, c],
      [o, l],
      [a, l],
    ])
      z(e, t, i, n, n + 2.3, 0.025, r, 4);
    (e.setMaterial(0.9, 0, 0, 0),
      P(e, 16053490),
      L(e, a - 0.1, n + 2.3, c - 0.1, o + 0.1, n + 2.42, l + 0.1, r),
      e.setMaterial(0.8, 0, 0, 0),
      P(e, 8022608),
      L(e, o - 1, n, c + 0.2, o - 0.1, n + 0.7, l - 0.2, r),
      P(e, 16777215),
      e.quad(
        o - 1,
        n + 0.86,
        c + 0.2,
        o - 1,
        n + 0.86,
        l - 0.2,
        o - 0.1,
        n + 0.72,
        l - 0.2,
        o - 0.1,
        n + 0.72,
        c + 0.2,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      P(e, 6969920),
      L(e, a + 0.2, n, c + 0.2, a + 1, n + 1.3, l - 0.2, r));
  }
  (e.setMaterial(0.8, 0, 0, 0),
    P(e, 16777215),
    F(
      e,
      o + 0.12,
      s + 6.2,
      o + 0.12,
      s + 0.6,
      n + 2.45,
      n + 3.2,
      t.uv(`kosho:banner`),
    ));
}
function wt(e, t, n, r) {
  let i = n.plan.groundHeight(u.x, u.z);
  (vt(e.begin(), t, u.x, i + y + 0.34, u.z, r),
    e.end(`c11`, u.x, u.z, 520),
    yt(e.begin(), t, i, r),
    e.end(`sl-plinth`, u.x, u.z, 420),
    bt(e.begin(), t, i, r),
    e.end(`sl-surrounds`, u.x, u.z, 220),
    xt(e.begin(), t, n.plan.groundHeight(A.camera.x, A.camera.z)),
    e.end(`tv-crew`, A.camera.x, A.camera.z, 160, `crew`),
    Ct(e.begin(), t, n.plan.groundHeight((k.x0 + k.x1) / 2, (k.z0 + k.z1) / 2)),
    e.end(`kosho`, (k.x0 + k.x1) / 2, (k.z0 + k.z1) / 2, 180, `kosho`),
    St(e.begin(), t, n),
    e.end(`shiodome-guchi`, E.x, E.z, 200),
    e.box(m.x0, m.z0, m.x1, m.z1, i, i + y + 4.3),
    e.circles.push({
      x: m.x1 + 0.5,
      z: m.z1 + 0.55,
      r: 0.12,
      y0: i,
      y1: i + 4,
    }),
    e.circles.push({ x: ne.x, z: ne.z, r: 0.6, y0: i, y1: i + 2.6 }),
    e.box(m.x0 - x - 0.7, m.z1 - 3.4, m.x0 - x - 0.5, m.z1 - 1.8, i, i + 1.8),
    e.box(E.x - 1.2, E.z - 1.3, E.x + 1, E.z + 1.3, i, i + 2),
    e.box(D.x - 0.35, D.z - 0.65, D.x + 0.35, D.z + 0.65, i, i + 2));
}
var Tt = [`yakitori`, `sake`, `yakiton`, `oden`];
function Et(e) {
  for (let t = 0; t < 13; t++)
    (e.need(`gado:board:${t}`, 320, 56, ze(t)),
      e.need(`gado:front:${t}`, 320, 128, Be(t)),
      e.need(`gado:shutter:${t}`, 128, 96, Ve(t)));
  e.need(`gado:aboard`, 96, 144, He);
  for (let t of Tt)
    e.need(`lantern:${t}`, 64, 96, Ue(`shim.gado.lantern.${t}`));
}
function Dt(e, t, n, r, i, a, o = 0.2, s = 0.52) {
  (e.setMaterial(0.7, 0, 0.55, 3), P(e, 16777215));
  for (let a = 0; a < 8; a++) {
    let c = (a / 8) * Math.PI * 2,
      l = ((a + 1) / 8) * Math.PI * 2,
      u = (a % 4) / 4,
      d = ((a % 4) + 1) / 4,
      f = i.u1 - i.u0;
    e.quad(
      t + Math.cos(l) * o,
      n,
      r + Math.sin(l) * o,
      t + Math.cos(c) * o,
      n,
      r + Math.sin(c) * o,
      t + Math.cos(c) * o,
      n + s,
      r + Math.sin(c) * o,
      t + Math.cos(l) * o,
      n + s,
      r + Math.sin(l) * o,
      i.u0 + f * (1 - d),
      i.v0,
      i.u0 + f * (1 - u),
      i.v1,
    );
  }
  (e.setMaterial(0.6, 0, 0, 0),
    P(e, 1315860),
    L(
      e,
      t - o * 0.75,
      n - 0.05,
      r - o * 0.75,
      t + o * 0.75,
      n + 0.02,
      r + o * 0.75,
      a,
    ),
    L(
      e,
      t - o * 0.75,
      n + s - 0.02,
      r - o * 0.75,
      t + o * 0.75,
      n + s + 0.05,
      r + o * 0.75,
      a,
    ));
}
var K = { x: 0, z: 0 };
function Ot(e, t, n, r) {
  let i = h(n.plan)?.byId.get(`jr-main`) ?? null;
  if (!i) return 0;
  let a = t.white(),
    o = n.plan,
    s = 0;
  for (let n = 0; n < ie.length; n++) {
    let [c, l] = ie[n];
    if (!i.brick.some(([e, t]) => c >= e && c + 8 <= t)) continue;
    let u = n % 13,
      d = c + 1.6,
      f = c + 8,
      p = (e) => (l < 0 ? i.edge0.at(e) : i.edge1.at(e)),
      m = (e, t) => (i.path.pos(e, p(e) - l * C + l * t, K), [K.x, K.z]),
      h = (e, t, n, r, i, a, o) => {
        let [s, c] = m(l < 0 ? n : t, r),
          [u, d] = m(l < 0 ? t : n, r);
        F(e, s, c, u, d, i, a, o);
      },
      g = (d + f) / 2,
      [_, v] = m(g, 0),
      y = o.groundHeight(_, v);
    i.path.pos(g, p(g) + l, K);
    let b = K.x - m(g, C)[0],
      x = K.z - m(g, C)[1],
      S = Math.hypot(b, x) || 1,
      w = b / S,
      T = x / S,
      E = e.begin();
    (E.setMaterial(0.6, 0, 0, 0),
      P(E, 1709072),
      h(E, d + 0.2, f - 0.2, 0.1, y + 2.4, y + 3.04, a),
      E.setMaterial(0.6, 0, 0.32, 3),
      P(E, 16777215),
      h(E, d + 0.25, f - 0.25, 0.2, y + 2.44, y + 3, t.uv(`gado:board:${u}`)));
    for (let e of [d + 0.55, f - 0.55]) {
      let [n, r] = m(e, C + 0.3);
      Dt(
        E,
        n,
        y + 2.32,
        r,
        t.uv(`lantern:${Tt[(u + +(e > g)) % Tt.length]}`),
        a,
      );
    }
    if (
      (e.end(`gado-${c}${l < 0 ? `w` : `e`}`, _, v, 220),
      (E = e.begin()),
      E.setMaterial(0.35, 0.1, 0.42, 3),
      P(E, 16777215),
      h(E, d, f, 0.04, y, y + 2.4, t.uv(`gado:front:${u}`)),
      u % 3 != 2)
    ) {
      let [e, t] = m(d + 0.15, 0.05),
        [n, r] = m(d + 1.35, 0.6);
      (E.setMaterial(0.4, 0.7, 0, 0),
        P(E, 10133154),
        L(
          E,
          Math.min(e, n),
          y,
          Math.min(t, r),
          Math.max(e, n),
          y + 0.92,
          Math.max(t, r),
          a,
        ),
        E.setMaterial(0.9, 0, 0.9, 0),
        P(E, 16734746),
        L(
          E,
          Math.min(e, n) + 0.06,
          y + 0.92,
          Math.min(t, r) + 0.06,
          Math.max(e, n) - 0.06,
          y + 0.97,
          Math.max(t, r) - 0.06,
          a,
        ),
        E.setMaterial(0.4, 0.7, 0, 0),
        P(E, 6975090),
        L(
          E,
          Math.min(e, n),
          y + 1.85,
          Math.min(t, r),
          Math.max(e, n),
          y + 2.05,
          Math.max(t, r),
          a,
        ));
    }
    let [ee, D] = m(g + 0.6, C + 1.15),
      O = o.surfaceAt(ee, D);
    if (O !== `road` && O !== `crosswalk` && O !== `water`) {
      for (let e of r >= 1 ? [-1.5, 1.5] : [0]) {
        let [t, r] = m(g + e, C + 1.15);
        (E.setMaterial(0.7, 0, 0, 0),
          P(E, (n + e) % 2 ? 14197783 : 2775728),
          L(E, t - 0.24, y, r - 0.18, t + 0.24, y + 0.33, r + 0.18, a),
          L(E, t - 0.24, y + 0.33, r - 0.18, t + 0.24, y + 0.66, r + 0.18, a),
          P(E, 12094040),
          L(E, t - 0.48, y + 0.66, r - 0.34, t + 0.48, y + 0.69, r + 0.34, a),
          P(E, 13112860));
        for (let e of [-1, 1]) {
          let n = t + T * e * 0.75 + w * 0.55,
            i = r - w * e * 0.75 + T * 0.55;
          L(E, n - 0.18, y, i - 0.14, n + 0.18, y + 0.34, i + 0.14, a);
        }
      }
      if (u % 2 == 0) {
        let [e, n] = m(d - 0.6, C + 0.5),
          r = t.uv(`gado:aboard`);
        (E.setMaterial(0.7, 0, 0.08, 1), P(E, 16777215));
        let i = T * 0.3,
          a = -w * 0.3;
        E.quad(
          e - i + w * 0.18,
          y,
          n - a + T * 0.18,
          e + i + w * 0.18,
          y,
          n + a + T * 0.18,
          e + i + w * 0.02,
          y + 1,
          n + a + T * 0.02,
          e - i + w * 0.02,
          y + 1,
          n - a + T * 0.02,
          r.u0,
          r.v0,
          r.u1,
          r.v1,
        );
      }
    }
    (e.end(`gado-${c}${l < 0 ? `w` : `e`}-open`, _, v, 160, `gadoOpen`),
      (E = e.begin()),
      E.setMaterial(0.6, 0.3, 0, 0),
      P(E, 16777215),
      h(E, d, f, 0.04, y, y + 2.4, t.uv(`gado:shutter:${u}`)),
      e.end(`gado-${c}${l < 0 ? `w` : `e`}-shut`, _, v, 160, `gadoClosed`),
      s++);
  }
  return s;
}
function kt(e) {
  let t = h(e.plan)?.byId.get(`jr-main`) ?? null;
  if (!t) return [];
  let n = [];
  for (let [r, i] of ie) {
    let a = r + 1.6 + 6.4 / 2 + 0.6,
      o = i < 0 ? t.edge0.at(a) : t.edge1.at(a);
    t.path.pos(a, o + i * 1.6, K);
    let s = K.x,
      c = K.z;
    t.path.pos(a, o, K);
    let l = s - K.x,
      u = c - K.z,
      d = Math.hypot(l, u) || 1,
      f = e.plan.surfaceAt(s, c);
    f !== `road` &&
      f !== `crosswalk` &&
      n.push({ x: s, z: c, fx: l / d, fz: u / d });
  }
  return n;
}
var q = 3.3,
  At = 2.9,
  jt = 0.6,
  Mt = 10,
  Nt = (e) => q + (e - 1) * At + jt;
function Pt(e, t) {
  for (let n = 0; n < 8; n++) {
    let r = e.weighted(We.map((e) => [e, e.weight])),
      i = r.names[Math.floor(e.next() * r.names.length)];
    if (!(t.includes(i) && n < 7))
      return (t.push(i), t.length > 9 && t.shift(), { trade: r, name: i });
  }
  let n = We[0];
  return { trade: n, name: n.names[0] };
}
