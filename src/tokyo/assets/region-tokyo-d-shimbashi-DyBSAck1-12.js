// tokyo/assets/region-tokyo-d-shimbashi-DyBSAck1 12 — setmaterial
// Lines 3497-3784 of readable/tokyo/assets/region-tokyo-d-shimbashi-DyBSAck1.pretty.js (statement-aligned).
function Wt(e, t, n, r, i) {
  if (n.vacant || n.special === `sushi`) return;
  let a = t.white(),
    o = Rt(n),
    s = n.trade;
  Ut(e, t, n, o, r);
  let c = n.lane ? 0.62 : 1.45,
    l = n.lane ? 1.05 : 2.3;
  if (s.eat) {
    (e.setMaterial(0.9, 0, 0, 0), N(e, parseInt(s.awn[0].slice(1), 16)));
    for (let t = 0; t < 3; t++)
      Y(
        e,
        o,
        0.3 + t * 0.135,
        0.3 + (t + 1) * 0.135 - 0.01,
        0.05,
        r + 1.75,
        r + 2.6,
        a,
      );
    (e.setMaterial(0.2, 0.1, 0.1, 1), N(e, 16777215));
    let n = t.uv(`mkt:goods:${s.id}`),
      [i, c] = J(o, 0.72, 0.08),
      [l, u] = J(o, 0.94, 0.55);
    (e.setMaterial(0.5, 0.2, 0, 0),
      N(e, 5913124),
      I(
        e,
        Math.min(i, l),
        r,
        Math.min(c, u),
        Math.max(i, l),
        r + 0.85,
        Math.max(c, u),
        a,
      ),
      e.setMaterial(0.2, 0.1, 0.1, 0),
      N(e, 16777215),
      X(e, o, 0.72, 0.94, 0.08, r + 1.35, 0.55, r + 0.86, n));
  } else {
    (e.setMaterial(0.85, 0, 0, 0), N(e, 15658730));
    let [n, l] = J(o, 0.07, 0.12),
      [u, d] = J(o, 0.93, c);
    if (
      (I(
        e,
        Math.min(n, u),
        r,
        Math.min(l, d),
        Math.max(n, u),
        r + 0.74,
        Math.max(l, d),
        a,
      ),
      e.setMaterial(0.5, 0, 0.05, 0),
      N(e, 16777215),
      X(
        e,
        o,
        0.07,
        0.93,
        0.12,
        r + 0.98,
        c,
        r + 0.76,
        t.uv(`mkt:goods:${s.id}`),
      ),
      i >= 1 && (s.id === `fish` || s.id === `maguro` || s.id === `kai`))
    ) {
      (e.setMaterial(0.85, 0, 0, 0), N(e, 16053490));
      let [t, n] = J(o, 0.97, c * 0.5 + 0.1);
      for (let i = 0; i < 3; i++)
        I(
          e,
          t - 0.3,
          r + i * 0.22,
          n - 0.22,
          t + 0.3,
          r + i * 0.22 + 0.2,
          n + 0.22,
          a,
        );
    }
  }
  let u = t.uv(`mkt:awn:${s.id}:${n.striped ? `s` : `p`}`);
  (e.setMaterial(0.9, 0, 0, 0),
    N(e, 16777215),
    X(e, o, 0, 1, 0, r + 2.7, l, r + 2.3, u),
    N(e, 16777215, 0.55),
    X(e, o, 0, 1, 0, r + 2.69, l, r + 2.29, u, !0),
    n.special !== `horumon` &&
      (N(e, 16777215),
      Y(e, o, 0, 1, l, r + 2.02, r + 2.3, t.uv(`mkt:val:${n.name}`))));
  let d = ((n.x0 * 3 + n.z0 * 17) | 0) % 5;
  if (i >= 1 && !n.lane && d < 2) {
    let [t, n] = J(o, 0.02, (s.eat ? 0.8 : c) + 0.45);
    if ((e.setMaterial(0.7, 0, 0, 0), d === 0))
      for (let i = 0; i < 3; i++)
        (N(e, i % 2 ? 14197783 : 2775728),
          I(
            e,
            t - 0.27,
            r + i * 0.3,
            n - 0.2,
            t + 0.27,
            r + i * 0.3 + 0.29,
            n + 0.2,
            a,
          ));
    else {
      (N(e, 8027778),
        I(e, t - 0.35, r + 0.12, n - 0.5, t + 0.35, r + 0.18, n + 0.5, a),
        N(e, 1710618));
      for (let [i, o] of [
        [-0.3, -0.45],
        [0.3, -0.45],
        [0.3, 0.45],
        [-0.3, 0.45],
      ])
        I(
          e,
          t + i - 0.04,
          r,
          n + o - 0.04,
          t + i + 0.04,
          r + 0.12,
          n + o + 0.04,
          a,
        );
      (N(e, 16053490),
        I(e, t - 0.3, r + 0.18, n - 0.4, t + 0.3, r + 0.42, n + 0.1, a));
    }
  }
  if (i >= 1 && (s.eat || ((n.x0 * 7 + n.z0 * 3) | 0) % 3 == 0)) {
    let [n, i] = J(o, 0.06, (s.eat ? 0.6 : c) + 0.25);
    (e.setMaterial(0.6, 0.4, 0, 0),
      N(e, 12106944),
      R(e, n, i, r, r + 2.55, 0.02, a, 4),
      e.setMaterial(0.9, 0, 0, 0),
      N(e, 16777215));
    let l = (o.rx - o.lx) / o.wid,
      u = (o.rz - o.lz) / o.wid,
      d = t.uv(`mkt:nobori:${s.id}`);
    (P(
      e,
      n + o.nx * 0.01,
      i + o.nz * 0.01,
      n + l * 0.46 + o.nx * 0.01,
      i + u * 0.46 + o.nz * 0.01,
      r + 0.85,
      r + 2.45,
      d,
    ),
      P(
        e,
        n + l * 0.46 - o.nx * 0.01,
        i + u * 0.46 - o.nz * 0.01,
        n - o.nx * 0.01,
        i - o.nz * 0.01,
        r + 0.85,
        r + 2.45,
        d,
      ));
  }
  (e.setMaterial(0.3, 0, 1, 0), N(e, 16773316));
  for (let t of [0.3, 0.7]) {
    let [n, i] = J(o, t, l * 0.55);
    I(e, n - 0.05, r + 2.08, i - 0.05, n + 0.05, r + 2.2, i + 0.05, a);
  }
}
function Gt(e, t, n, r) {
  if (n.vacant || n.special === `sushi`) return;
  let i = t.white(),
    a = Rt(n);
  (e.setMaterial(0.6, 0.3, 0, 0),
    N(e, 16777215),
    Y(e, a, 0.04, 0.96, 0.02, r, r + 2.62, t.uv(`mkt:shut:${n.shut}`)),
    e.setMaterial(0.9, 0, 0, 0),
    N(e, parseInt(n.trade.awn[0].slice(1), 16)));
  let [o, s] = J(a, 0.02, 0),
    [c, l] = J(a, 0.98, 0.22);
  I(
    e,
    Math.min(o, c),
    r + 2.58,
    Math.min(s, l),
    Math.max(o, c),
    r + 2.72,
    Math.max(s, l),
    i,
  );
}
function Kt(e, t, n) {
  let r = t.white(),
    i = { x0: 409, z0: 497, x1: 443.2, z1: 575 },
    a = n.plan.groundHeight((i.x0 + i.x1) / 2, i.z0),
    o = 15.2,
    s = e.begin();
  (s.setMaterial(0.7, 0.1, 0, 0),
    N(s, 10133152),
    I(s, i.x0, a + 5.2, i.z0, i.x1, a + o, i.z1, r, !0),
    I(s, i.x0, a, i.z0 + 4.2, i.x1, a + 5.2, i.z1, r));
  for (let e of [i.x0, i.x1])
    I(s, e - 0.3, a, i.z0, e + 0.3, a + 5.2, i.z0 + 4.2, r);
  N(s, 16777215);
  let c = t.uv(`uogashi:fac`),
    l = Math.round((i.x1 - i.x0) / 6);
  for (let e = 0; e < l; e++) {
    let t = i.x1 - ((i.x1 - i.x0) * e) / l,
      n = i.x1 - ((i.x1 - i.x0) * (e + 1)) / l;
    P(s, t, i.z0 - 0.02, n, i.z0 - 0.02, a + 6.6, a + o - 0.6, c);
  }
  let u = Math.round((i.z1 - i.z0) / 6);
  for (let e = 0; e < u; e++) {
    let t = i.z1 - ((i.z1 - i.z0) * e) / u,
      n = i.z1 - ((i.z1 - i.z0) * (e + 1)) / u;
    P(s, i.x1 + 0.02, t, i.x1 + 0.02, n, a + 6.6, a + o - 0.6, c);
  }
  (s.setMaterial(0.6, 0, 0.25, 3),
    P(
      s,
      i.x1 - 4,
      i.z0 - 0.06,
      i.x1 - 22,
      i.z0 - 0.06,
      a + 5.4,
      a + 6.4,
      t.uv(`uogashi:sign`),
    ),
    s.setMaterial(0.7, 0, 0, 0),
    P(
      s,
      i.x0 + 5.2,
      i.z0 - 0.06,
      i.x0 + 3.2,
      i.z0 - 0.06,
      a + 1.2,
      a + 2.2,
      t.uv(`uogashi:note`),
    ),
    N(s, 11843252));
  for (let e = i.x0; e <= i.x1 + 0.01; e += (i.x1 - i.x0) / 5)
    I(s, e - 0.3, a, i.z0 - 0.3, e + 0.3, a + 5.2, i.z0 + 0.1, r);
  (N(s, 8027776),
    I(s, i.x0, a + 5, i.z0 - 2.4, i.x1, a + 5.25, i.z0, r),
    s.setMaterial(0.5, 0.6, 0, 0),
    N(s, 9080466));
  for (let [e, t, n, c] of [
    [i.x0, i.z0, i.x1, i.z0],
    [i.x1, i.z0, i.x1, i.z1],
    [i.x1, i.z1, i.x0, i.z1],
    [i.x0, i.z1, i.x0, i.z0],
  ])
    z(s, e, a + o + 1.1, t, n, a + o + 1.1, c, 0.03, r);
  (e.end(`uogashi`, (i.x0 + i.x1) / 2, (i.z0 + i.z1) / 2, 520),
    (s = e.begin()),
    s.setMaterial(0.6, 0, 0.15, 0),
    N(s, 16777215));
  let d = t.uv(`mkt:int:fish`);
  for (let e = 0; e < 5; e++) {
    let t = i.x1 - ((i.x1 - i.x0) * e) / 5 - 0.3,
      n = i.x1 - ((i.x1 - i.x0) * (e + 1)) / 5 + 0.3;
    P(s, t, i.z0 + 4.15, n, i.z0 + 4.15, a, a + 3.6, d);
  }
  (N(s, 3815992),
    F(s, i.x0, i.z0, i.x1, i.z0 + 4, a + 4.6, r, !0),
    e.end(`uogashi-open`, (i.x0 + i.x1) / 2, i.z0, 200, `mktOpen`),
    (s = e.begin()),
    s.setMaterial(0.6, 0.3, 0, 0),
    N(s, 16777215));
  for (let e = 0; e < 5; e++) {
    let n = i.x1 - ((i.x1 - i.x0) * e) / 5 - 0.3,
      r = i.x1 - ((i.x1 - i.x0) * (e + 1)) / 5 + 0.3;
    P(s, n, i.z0 + 0.12, r, i.z0 + 0.12, a, a + 4.4, t.uv(`mkt:shut:${e % 3}`));
  }
  (e.end(`uogashi-shut`, (i.x0 + i.x1) / 2, i.z0, 200, `mktClosed`),
    e.box(i.x0, i.z0 + 0.1, i.x1, i.z1, a, a + o + 1.2));
  let f = h.yard;
  ((s = e.begin()), s.setMaterial(0.6, 0.5, 0, 0), N(s, 6978154));
  for (let [e, t, n, i] of [
    [f.x0, f.z1, f.x1, f.z1],
    [f.x1, f.z0, f.x1, f.z1],
  ])
    (z(s, e, a + 1.8, t, n, a + 1.8, i, 0.03, r),
      z(s, e, a + 0.9, t, n, a + 0.9, i, 0.02, r));
  e.end(`uogashi-yard`, (f.x0 + f.x1) / 2, (f.z0 + f.z1) / 2, 160);
}
