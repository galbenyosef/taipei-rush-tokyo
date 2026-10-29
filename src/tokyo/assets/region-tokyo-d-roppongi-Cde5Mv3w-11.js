// tokyo/assets/region-tokyo-d-roppongi-Cde5Mv3w 11 — setmaterial
// Lines 3015-3336 of readable/tokyo/assets/region-tokyo-d-roppongi-Cde5Mv3w.pretty.js (statement-aligned).
function ht(e, t, i) {
  let o = e.plan,
    s = [],
    c = [],
    l = [],
    u = new n(r(`rop-kit`, 1)),
    d = o.dataset.sidewalkHeight ?? 0.15,
    f = p(o);
  for (let e of [
    { id: `w-gaien-higashi`, t0: 780, t1: 1062 },
    { id: `w-roppongi-w`, t0: -1e3, t1: -880 },
    { id: `w-sotobori-akasaka`, t0: 430, t1: 618 },
  ]) {
    let t = o.roads.find((t) => t.id === e.id);
    if (!t) continue;
    let n = f.nodesOf(t),
      r = 0;
    for (let a = 0; a + 1 < n.length; a++)
      for (let o of [-1, 1]) {
        let c = f.primaryLights(t, n[a], n[a + 1], o);
        if (c && c.kind === `tall`)
          for (let n of c.ts) {
            if (n < e.t0 || n > e.t1 || ((r++ & 1) == 1 && i < 1)) continue;
            let a = o * (t.halfWidth + 0.55),
              c = t.axis === `z` ? t.at + a : n,
              l = t.axis === `z` ? n : t.at + a;
            s.push({
              model: `plate`,
              x: c,
              y: d,
              z: l,
              fx: t.axis === `z` ? o : 0,
              fz: t.axis === `z` ? 0 : o,
              range: 90,
            });
          }
      }
  }
  for (let e of t)
    if (e.shop === `bar` || e.shop === `club`)
      for (let t of [e.dir, e.lane].filter(Boolean)) {
        let n = Ue(e, t),
          [r, i] = L(n, n.L * (0.3 + u.next() * 0.4), 0.75),
          o = t === e.lane;
        s.push({
          model: `aboard:${Math.floor(u.next() * 4)}`,
          x: r,
          y: o ? G + a.GROUND : d,
          z: i,
          fx: n.nx,
          fz: n.nz,
          range: 110,
          when: lt,
        });
      }
  for (let [e, t, n] of dt())
    (s.push({
      model: `lane-lamp:${n % 3}`,
      x: e,
      y: G + a.GROUND,
      z: t,
      fx: n & 1 ? -1 : 1,
      fz: 0,
      range: 160,
    }),
      c.push({ x: e, z: t, r: 0.08, h: 4.4 }));
  (s.push({
    model: `saka`,
    x: B.x0 + 0.5,
    y: G + a.GROUND,
    z: B.z0 + 1.6,
    fx: 0,
    fz: -1,
    range: 90,
  }),
    s.push({
      model: `saka`,
      x: B.x1 - 0.5,
      y: G + a.GROUND,
      z: B.z1 - 1.6,
      fx: 0,
      fz: 1,
      range: 90,
    }),
    c.push(
      { x: B.x0 + 0.5, z: B.z0 + 1.6, r: 0.15, h: 1.7 },
      { x: B.x1 - 0.5, z: B.z1 - 1.6, r: 0.15, h: 1.7 },
    ));
  let m = o.roads.find((e) => e.id === `w-roppongi-w`);
  if (m) {
    let e = m.at + m.halfWidth + 0.75;
    (s.push({ model: `taxi`, x: -919, y: d, z: e, fx: 0, fz: -1, range: 140 }),
      c.push({ x: -919, z: e, r: 0.06, h: 2.9 }));
  }
  for (let [e, t] of [
    [-901.5, 1030],
    [-901.5, 1049],
    [-882, 1029.5],
    [-892, 1049.2],
  ])
    s.push({
      model: `tree:${(e + t) & 1}`,
      x: e,
      y: G,
      z: t,
      fx: 0,
      fz: 1,
      range: 260,
    });
  return { instances: s, circles: c, obbs: l };
}
function gt(e, t) {
  let n = t.white(),
    r = G + a.GROUND;
  (ut.forEach(([i, o], s) => {
    (e.setMaterial(0.92, 0, 0.5, 3),
      A(e, 16774890),
      M(e, B.x0, i, B.x1, o, r, t.uv(`lanepave:${s}`)),
      e.setMaterial(0.92, 0, 0, 0),
      A(e, 12104874),
      M(e, B.x0, i, B.x0 + 0.45, o, r + a.PAINT, n),
      M(e, B.x1 - 0.45, i, B.x1, o, r + a.PAINT, n),
      A(e, 15263970),
      M(e, B.x0 + 0.6, i + 0.6, B.x0 + 0.72, o - 0.6, r + a.PAINT, n),
      M(e, B.x1 - 0.72, i + 0.6, B.x1 - 0.6, o - 0.6, r + a.PAINT, n));
  }),
    A(e, 15790314),
    M(e, B.x0 + 0.8, 995.9, B.x1 - 0.8, 996.35, r + a.PAINT, n),
    M(e, B.x0 + 0.8, 1051.9, B.x1 - 0.8, 1052.35, r + a.PAINT, n));
}
function _t(e, t) {
  let n = t.uv(`girder`),
    r = 6.4,
    i = H.deckTop - 0.25,
    a = i - 2;
  (e.setMaterial(0.5, 0, 0.3, 3), A(e, 16777215));
  let o = H.z - H.deckHalf - 0.14,
    s = H.z + H.deckHalf + 0.14;
  (j(e, H.x + r / 2, o, H.x - r / 2, o, a, i, n),
    j(e, H.x - r / 2, s, H.x + r / 2, s, a, i, n),
    e.setMaterial(0.6, 0.4, 0, 0),
    A(e, 3817544));
  let c = t.white();
  for (let t of [o, s])
    N(
      e,
      H.x,
      t < H.z ? t + 0.07 : t - 0.07,
      a - 0.05,
      i + 0.05,
      3.25,
      0.045,
      0,
      1,
      c,
    );
}
function vt(e, t) {
  let n = t.white(),
    r = t.uv(`wall:stone`),
    i = { x0: -905, x1: -878.37, z0: 1026, z1: 1052.63 },
    o = 0.35,
    s = 1035,
    c = 1042.5,
    l = 4.2,
    u = [];
  (e.setMaterial(0.9, 0, 0, 0), A(e, 16777215));
  let d = (t, n, i, a) => {
    (N(
      e,
      (t + i) / 2,
      (n + a) / 2,
      0.04999999999999999,
      2.9499999999999997,
      (i - t) / 2,
      (a - n) / 2,
      0,
      1,
      r,
    ),
      u.push({
        x: (t + i) / 2,
        z: (n + a) / 2,
        hx: (i - t) / 2,
        hz: (a - n) / 2,
        y0: 0,
        y1: 2.9499999999999997,
      }));
  };
  (d(i.x0, i.z1 - o, i.x1, i.z1),
    d(i.x0, i.z0, i.x0 + o, i.z1),
    d(i.x0, i.z0, i.x1, i.z0 + o),
    d(i.x1 - o, i.z0, i.x1, s),
    d(i.x1 - o, c, i.x1, i.z1),
    d(i.x1 - l, 1034.65, i.x1, s),
    d(i.x1 - l, c, i.x1, 1042.85),
    A(e, 9077880));
  for (let [t, r, a, l] of [
    [i.x0, i.z1 - o, i.x1, i.z1],
    [i.x1 - o, i.z0, i.x1, s],
    [i.x1 - o, c, i.x1, i.z1],
  ])
    M(e, t - 0.05, r - 0.05, a + 0.05, l + 0.05, 2.9599999999999995, n);
  (e.setMaterial(0.5, 0.7, 0, 0), A(e, 2764340));
  let f = i.x1 - l - o / 2;
  for (let t = 1035.2; t < 1042.4; t += 0.22)
    N(e, f, t, G, 2.35, 0.025, 0.025, 0, 1, n);
  (N(e, f, 2077.5 / 2, 2.25, 2.4, 7.5 / 2, 0.05, 0, 1, n),
    N(e, f, 2077.5 / 2, 0.25, 0.37, 7.5 / 2, 0.05, 0, 1, n),
    u.push({ x: f, z: 2077.5 / 2, hx: 0.08, hz: 7.5 / 2, y0: 0, y1: 2.4 }),
    e.setMaterial(0.6, 0, 0.1, 1),
    A(e, 16777215),
    j(
      e,
      i.x1 - 3.1,
      1035.025,
      i.x1 - 0.5,
      1035.025,
      1.45,
      2.1,
      t.uv(`embassy-plate`),
    ));
  let p = i.x1 - 1.9;
  (e.setMaterial(0.6, 0.1, 0, 0),
    A(e, 15921902),
    N(e, p + 0.6, 1041.15, G, 2.4499999999999997, 0.6, 0.65, 0, 1, n),
    e.setMaterial(0.6, 0, 0.2, 1),
    A(e, 16777215),
    j(e, p + 1.225, 1041.8, p + 1.225, 1040.5, 2, 2.35, t.uv(`keibi`)),
    e.setMaterial(0.2, 0.2, 0.35, 1),
    A(e, 14215408),
    j(e, p + 1.225, 1041.6, p + 1.225, 1040.7, 1.15, 1.8499999999999999, n),
    e.setMaterial(0.6, 0.3, 0, 0),
    A(e, 3816e3),
    M(e, p - 0.05, 1040.45, p + 1.25, 1041.85, 2.46, n),
    u.push({
      x: p + 0.6,
      z: 1041.15,
      hx: 0.6,
      hz: 0.65,
      y0: 0,
      y1: 2.4499999999999997,
    }));
  let m = { x0: -899, x1: -886.5, z0: 1032.5, z1: 1046 };
  (e.setMaterial(0.8, 0, 0, 0),
    A(e, 15789284),
    N(
      e,
      (m.x0 + m.x1) / 2,
      (m.z0 + m.z1) / 2,
      G,
      11.35,
      (m.x1 - m.x0) / 2,
      (m.z1 - m.z0) / 2,
      0,
      1,
      n,
    ),
    e.setMaterial(0.2, 0.3, 0.2, 35),
    A(e, 16777215));
  let h = t.uv(`win:blind`);
  for (let t = 0; t < 3; t++) {
    let n = 1.15 + t * 3.4;
    for (let t = m.z0 + 1.2; t < m.z1 - 1.5; t += 3.1)
      j(e, m.x1 + 0.02, t + 2, m.x1 + 0.02, t, n, n + 2.1, h);
    for (let t = m.x0 + 1.2; t < m.x1 - 1.5; t += 3.1)
      j(e, t, m.z1 + 0.02, t + 2, m.z1 + 0.02, n, n + 2.1, h);
  }
  return (
    u.push({
      x: (m.x0 + m.x1) / 2,
      z: (m.z0 + m.z1) / 2,
      hx: (m.x1 - m.x0) / 2,
      hz: (m.z1 - m.z0) / 2,
      y0: 0,
      y1: 11.35,
    }),
    e.setMaterial(0.95, 0, 0, 16),
    A(e, 6261322),
    M(e, i.x0 + o, i.z0 + o, i.x1 - l - o, i.z1 - o, G + a.GROUND, n),
    e.setMaterial(0.4, 0.8, 0, 0),
    A(e, 14211292),
    ie(e, -884, 1048.5, G, 9.65, 0.06, n, 6),
    u
  );
}
var K = G + 7.45,
  q = { x0: -931, x1: -879.2, z0: 499, z1: 600 },
  yt = [
    [q.x0, q.z0, q.x1, q.z1],
    [-896, 480, q.x1, q.z0],
  ],
  J = { xb: -936.8, xt: -925, z0: 542, z1: 548 },
  Y = { xb: -936.6, xt: -925, z0: 508, z1: 510.8 },
  X = { xb: -878.6, xt: -891, z0: 516, z1: 520 },
  Z = { x0: -916, x1: -908, zb: 607.3, zt: 594 },
  bt = [
    [q.x0, J.z0, J.xt, J.z1],
    [q.x0, Y.z0, Y.xt, Y.z1],
    [X.xt, X.z0, q.x1, X.z1],
    [Z.x0, Z.zt, Z.x1, q.z1],
  ],
  Q = 14173482,
  xt = 6197114;
function St(e) {
  (e.need(`gaku:hie`, 48, 128, je(`roppongi.hie.name`)),
    e.need(`gaku:inari`, 40, 128, je(`roppongi.hie.inari`)),
    e.need(`gaku:sannobashi`, 48, 96, je(`roppongi.hie.sannobashi`)),
    e.need(`hieboard`, 160, 120, Me),
    e.need(
      `otokozaka`,
      160,
      48,
      Ne(`roppongi.hie.otokozaka`, `#4a2e18`, `#ffffff`),
    ),
    e.need(`shagohyo`, 40, 200, Tt),
    e.need(`lantern:sanno`, 48, 80, Ae(`roppongi.hie.sanno`, `#f4ead0`)),
    e.need(`hono`, 24, 96, Et),
    e.need(`wall:ishigaki`, 64, 64, Ce(`stone`, `#9e9a90`)));
  for (let t of [0, 1, 2]) e.need(`ishigaki:${t}`, 96, 96, Ct(t));
  e.need(`gravel`, 96, 96, wt);
}
