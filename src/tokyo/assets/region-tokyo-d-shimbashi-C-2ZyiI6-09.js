// tokyo/assets/region-tokyo-d-shimbashi-C-2ZyiI6 09 — math
// Lines 2608-2935 of readable/tokyo/assets/region-tokyo-d-shimbashi-C-2ZyiI6.pretty.js (statement-aligned).
function wt(e, t, n) {
  let r = t.white(),
    i = t.uv(`kosho:books`),
    { x0: a, x1: o, z0: s, z1: c } = k,
    l = Math.floor((c - s) / 3.4);
  for (let t = 0; t < l; t++) {
    let c = s + t * 3.4 + 0.2,
      l = c + 3;
    (e.setMaterial(0.6, 0.4, 0, 0), N(e, 13159632));
    for (let [t, i] of [
      [a, c],
      [o, c],
      [o, l],
      [a, l],
    ])
      R(e, t, i, n, n + 2.3, 0.025, r, 4);
    (e.setMaterial(0.9, 0, 0, 0),
      N(e, 16053490),
      I(e, a - 0.1, n + 2.3, c - 0.1, o + 0.1, n + 2.42, l + 0.1, r),
      e.setMaterial(0.8, 0, 0, 0),
      N(e, 8022608),
      I(e, o - 1, n, c + 0.2, o - 0.1, n + 0.7, l - 0.2, r),
      N(e, 16777215),
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
      N(e, 6969920),
      I(e, a + 0.2, n, c + 0.2, a + 1, n + 1.3, l - 0.2, r));
  }
  (e.setMaterial(0.8, 0, 0, 0),
    N(e, 16777215),
    P(
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
function Tt(e, t, n, r) {
  let i = n.plan.groundHeight(d.x, d.z);
  (yt(e.begin(), t, d.x, i + g + 0.34, d.z, r),
    e.end(`c11`, d.x, d.z, 520),
    bt(e.begin(), t, i, r),
    e.end(`sl-plinth`, d.x, d.z, 420),
    xt(e.begin(), t, i, r),
    e.end(`sl-surrounds`, d.x, d.z, 220),
    St(e.begin(), t, n.plan.groundHeight(A.camera.x, A.camera.z)),
    e.end(`tv-crew`, A.camera.x, A.camera.z, 160, `crew`),
    wt(e.begin(), t, n.plan.groundHeight((k.x0 + k.x1) / 2, (k.z0 + k.z1) / 2)),
    e.end(`kosho`, (k.x0 + k.x1) / 2, (k.z0 + k.z1) / 2, 180, `kosho`),
    Ct(e.begin(), t, n),
    e.end(`shiodome-guchi`, x.x, x.z, 200),
    e.box(p.x0, p.z0, p.x1, p.z1, i, i + g + 4.3),
    e.circles.push({
      x: p.x1 + 0.5,
      z: p.z1 + 0.55,
      r: 0.12,
      y0: i,
      y1: i + 4,
    }),
    e.circles.push({ x: ne.x, z: ne.z, r: 0.6, y0: i, y1: i + 2.6 }),
    e.box(p.x0 - v - 0.7, p.z1 - 3.4, p.x0 - v - 0.5, p.z1 - 1.8, i, i + 1.8),
    e.box(x.x - 1.2, x.z - 1.3, x.x + 1, x.z + 1.3, i, i + 2),
    e.box(E.x - 0.35, E.z - 0.65, E.x + 0.35, E.z + 0.65, i, i + 2));
}
var Et = [`yakitori`, `sake`, `yakiton`, `oden`];
function Dt(e) {
  for (let t = 0; t < 13; t++)
    (e.need(`gado:board:${t}`, 320, 56, Be(t)),
      e.need(`gado:front:${t}`, 320, 128, Ve(t)),
      e.need(`gado:shutter:${t}`, 128, 96, He(t)));
  e.need(`gado:aboard`, 96, 144, Ue);
  for (let t of Et)
    e.need(`lantern:${t}`, 64, 96, We(`shim.gado.lantern.${t}`));
}
function Ot(e, t, n, r, i, a, o = 0.2, s = 0.52) {
  (e.setMaterial(0.7, 0, 0.55, 3), N(e, 16777215));
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
    N(e, 1315860),
    I(
      e,
      t - o * 0.75,
      n - 0.05,
      r - o * 0.75,
      t + o * 0.75,
      n + 0.02,
      r + o * 0.75,
      a,
    ),
    I(
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
var G = { x: 0, z: 0 };
function kt(e, t, n, r) {
  let i = te(n.plan)?.byId.get(`jr-main`) ?? null;
  if (!i) return 0;
  let a = t.white(),
    o = n.plan,
    s = 0;
  for (let n = 0; n < ae.length; n++) {
    let [c, l] = ae[n];
    if (!i.brick.some(([e, t]) => c >= e && c + 8 <= t)) continue;
    let d = n % 13,
      f = c + 1.6,
      p = c + 8,
      m = (e) => (l < 0 ? i.edge0.at(e) : i.edge1.at(e)),
      h = (e, t) => (i.path.pos(e, m(e) - l * u + l * t, G), [G.x, G.z]),
      g = (e, t, n, r, i, a, o) => {
        let [s, c] = h(l < 0 ? n : t, r),
          [u, d] = h(l < 0 ? t : n, r);
        P(e, s, c, u, d, i, a, o);
      },
      _ = (f + p) / 2,
      [v, y] = h(_, 0),
      b = o.groundHeight(v, y);
    i.path.pos(_, m(_) + l, G);
    let x = G.x - h(_, u)[0],
      S = G.z - h(_, u)[1],
      C = Math.hypot(x, S) || 1,
      w = x / C,
      T = S / C,
      E = e.begin();
    (E.setMaterial(0.6, 0, 0, 0),
      N(E, 1709072),
      g(E, f + 0.2, p - 0.2, 0.1, b + 2.4, b + 3.04, a),
      E.setMaterial(0.6, 0, 0.32, 3),
      N(E, 16777215),
      g(E, f + 0.25, p - 0.25, 0.2, b + 2.44, b + 3, t.uv(`gado:board:${d}`)));
    for (let e of [f + 0.55, p - 0.55]) {
      let [n, r] = h(e, u + 0.3);
      Ot(
        E,
        n,
        b + 2.32,
        r,
        t.uv(`lantern:${Et[(d + +(e > _)) % Et.length]}`),
        a,
      );
    }
    if (
      (e.end(`gado-${c}${l < 0 ? `w` : `e`}`, v, y, 220),
      (E = e.begin()),
      E.setMaterial(0.35, 0.1, 0.42, 3),
      N(E, 16777215),
      g(E, f, p, 0.04, b, b + 2.4, t.uv(`gado:front:${d}`)),
      d % 3 != 2)
    ) {
      let [e, t] = h(f + 0.15, 0.05),
        [n, r] = h(f + 1.35, 0.6);
      (E.setMaterial(0.4, 0.7, 0, 0),
        N(E, 10133154),
        I(
          E,
          Math.min(e, n),
          b,
          Math.min(t, r),
          Math.max(e, n),
          b + 0.92,
          Math.max(t, r),
          a,
        ),
        E.setMaterial(0.9, 0, 0.9, 0),
        N(E, 16734746),
        I(
          E,
          Math.min(e, n) + 0.06,
          b + 0.92,
          Math.min(t, r) + 0.06,
          Math.max(e, n) - 0.06,
          b + 0.97,
          Math.max(t, r) - 0.06,
          a,
        ),
        E.setMaterial(0.4, 0.7, 0, 0),
        N(E, 6975090),
        I(
          E,
          Math.min(e, n),
          b + 1.85,
          Math.min(t, r),
          Math.max(e, n),
          b + 2.05,
          Math.max(t, r),
          a,
        ));
    }
    let [ee, D] = h(_ + 0.6, u + 1.15),
      O = o.surfaceAt(ee, D);
    if (O !== `road` && O !== `crosswalk` && O !== `water`) {
      for (let e of r >= 1 ? [-1.5, 1.5] : [0]) {
        let [t, r] = h(_ + e, u + 1.15);
        (E.setMaterial(0.7, 0, 0, 0),
          N(E, (n + e) % 2 ? 14197783 : 2775728),
          I(E, t - 0.24, b, r - 0.18, t + 0.24, b + 0.33, r + 0.18, a),
          I(E, t - 0.24, b + 0.33, r - 0.18, t + 0.24, b + 0.66, r + 0.18, a),
          N(E, 12094040),
          I(E, t - 0.48, b + 0.66, r - 0.34, t + 0.48, b + 0.69, r + 0.34, a),
          N(E, 13112860));
        for (let e of [-1, 1]) {
          let n = t + T * e * 0.75 + w * 0.55,
            i = r - w * e * 0.75 + T * 0.55;
          I(E, n - 0.18, b, i - 0.14, n + 0.18, b + 0.34, i + 0.14, a);
        }
      }
      if (d % 2 == 0) {
        let [e, n] = h(f - 0.6, u + 0.5),
          r = t.uv(`gado:aboard`);
        (E.setMaterial(0.7, 0, 0.08, 1), N(E, 16777215));
        let i = T * 0.3,
          a = -w * 0.3;
        E.quad(
          e - i + w * 0.18,
          b,
          n - a + T * 0.18,
          e + i + w * 0.18,
          b,
          n + a + T * 0.18,
          e + i + w * 0.02,
          b + 1,
          n + a + T * 0.02,
          e - i + w * 0.02,
          b + 1,
          n - a + T * 0.02,
          r.u0,
          r.v0,
          r.u1,
          r.v1,
        );
      }
    }
    (e.end(`gado-${c}${l < 0 ? `w` : `e`}-open`, v, y, 160, `gadoOpen`),
      (E = e.begin()),
      E.setMaterial(0.6, 0.3, 0, 0),
      N(E, 16777215),
      g(E, f, p, 0.04, b, b + 2.4, t.uv(`gado:shutter:${d}`)),
      e.end(`gado-${c}${l < 0 ? `w` : `e`}-shut`, v, y, 160, `gadoClosed`),
      s++);
  }
  return s;
}
function At(e) {
  let t = te(e.plan)?.byId.get(`jr-main`) ?? null;
  if (!t) return [];
  let n = [];
  for (let [r, i] of ae) {
    let a = r + 1.6 + 6.4 / 2 + 0.6,
      o = i < 0 ? t.edge0.at(a) : t.edge1.at(a);
    t.path.pos(a, o + i * 1.6, G);
    let s = G.x,
      c = G.z;
    t.path.pos(a, o, G);
    let l = s - G.x,
      u = c - G.z,
      d = Math.hypot(l, u) || 1,
      f = e.plan.surfaceAt(s, c);
    f !== `road` &&
      f !== `crosswalk` &&
      n.push({ x: s, z: c, fx: l / d, fz: u / d });
  }
  return n;
}
var K = 3.3,
  jt = 2.9,
  Mt = 0.6,
  Nt = 10,
  Pt = (e) => K + (e - 1) * jt + Mt;
function Ft(e, t) {
  for (let n = 0; n < 8; n++) {
    let r = e.weighted(Ge.map((e) => [e, e.weight])),
      i = r.names[Math.floor(e.next() * r.names.length)];
    if (!(t.includes(i) && n < 7))
      return (t.push(i), t.length > 9 && t.shift(), { trade: r, name: i });
  }
  let n = Ge[0];
  return { trade: n, name: n.names[0] };
}
