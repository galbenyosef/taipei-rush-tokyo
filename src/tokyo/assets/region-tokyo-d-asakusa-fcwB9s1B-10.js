// tokyo/assets/region-tokyo-d-asakusa-fcwB9s1B 10 — setmaterial
// Lines 2631-2948 of readable/tokyo/assets/region-tokyo-d-asakusa-fcwB9s1B.pretty.js (statement-aligned).
function Dt(e, t, n) {
  let r = O,
    i = t.white(),
    a = t.uv(`arc:panel`),
    o = Et(n),
    s = r.x1 - r.x0;
  for (let c = 0; c < 4; c++) {
    let l = r.x0 + (s * c) / 4,
      u = r.x0 + (s * (c + 1)) / 4,
      d = e.begin();
    (d.setMaterial(0.35, 0.1, 0.28, 19), L(d, 16777215));
    for (let e = l; e < u - 0.01; e += wt) {
      let t = Math.min(u, e + wt);
      for (let n = 0; n < Ct; n++) {
        let [r, i] = o[n],
          [s, c] = o[n + 1];
        d.quad(e, i, r, t, i, r, t, c, s, e, c, s, a.u0, a.v0, a.u1, a.v1);
      }
    }
    (d.setMaterial(0.25, 0.4, 0, 0), L(d, 11844800));
    for (let e = 0; e < Ct; e++) {
      let [t, n] = o[e],
        [r, a] = o[e + 1];
      d.quad(
        l,
        a + 0.08,
        r,
        u,
        a + 0.08,
        r,
        u,
        n + 0.08,
        t,
        l,
        n + 0.08,
        t,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      );
    }
    (d.setMaterial(0.45, 0.7, 0, 16), L(d, 5922918));
    for (let e = l; e <= u + 0.01; e += wt) {
      for (let t = 0; t < Ct; t++) {
        let [n, r] = o[t],
          [a, s] = o[t + 1];
        B(d, e, r - 0.1, n, e, s - 0.1, a, 0.07, i);
      }
      (d.setMaterial(0.5, 0, 0.9, 17), L(d, 16773328));
      for (let t of [-2.2, 2.2]) {
        let a = (r.zn + r.zs) / 2 + t,
          o = n + r.spring + 0.2;
        z(d, e - 0.25, o - 0.16, a - 0.25, e + 0.25, o, a + 0.25, i, !0);
      }
      (d.setMaterial(0.45, 0.7, 0, 16), L(d, 5922918));
      for (let t of [-2.2, 2.2]) {
        let a = (r.zn + r.zs) / 2 + t,
          o = n + r.spring + 0.2,
          s =
            n +
            r.spring +
            (r.crown - r.spring) *
              Math.sqrt(Math.max(0, 1 - (t / ((r.zs - r.zn) / 2)) ** 2)) -
            0.1;
        B(d, e, o, a, e, s, a, 0.012, i);
      }
    }
    for (let e of [r.zn + 0.14, r.zs - 0.14])
      B(d, l, n + r.spring - 0.12, e, u, n + r.spring - 0.12, e, 0.1, i);
    B(
      d,
      l,
      n + r.crown - 0.12,
      (r.zn + r.zs) / 2,
      u,
      n + r.crown - 0.12,
      (r.zn + r.zs) / 2,
      0.06,
      i,
    );
    for (let e = l + wt; e < u - 0.5; e += wt * 2) {
      let a = Math.round((e - r.x0) / (wt * 2)) % 2 ? 2 : 1,
        o = t.uv(`arc:banner:${a}`);
      Ot(d, e, (r.zn + r.zs) / 2, n + 5, n + 6.6, 0.32, o, i);
    }
    e.end(`arcade-${c}`, (l + u) / 2, (r.zn + r.zs) / 2, 420);
  }
  let c = e.begin(),
    l = t.uv(`arc:gate`);
  for (let e of [r.x0 + 0.25, r.x1 - 0.25]) {
    let t = r.zn + 1.4,
      a = r.zs - 1.4,
      o = n + r.spring - 1.75,
      s = n + r.spring - 0.25;
    (c.setMaterial(0.6, 0, 0.35, 19),
      L(c, 16777215),
      R(c, e - 0.08, t, e - 0.08, a, o, s, l),
      R(c, e + 0.08, a, e + 0.08, t, o, s, l),
      c.setMaterial(0.5, 0.6, 0, 16),
      L(c, 3817026),
      z(c, e - 0.07, o - 0.06, t - 0.06, e + 0.07, s + 0.06, t, i),
      z(c, e - 0.07, o - 0.06, a, e + 0.07, s + 0.06, a + 0.06, i),
      z(c, e - 0.07, s, t, e + 0.07, s + 0.06, a, i),
      B(c, e, s + 0.06, t + 0.5, e, n + r.spring - 0.1, t + 0.5, 0.03, i),
      B(c, e, s + 0.06, a - 0.5, e, n + r.spring - 0.1, a - 0.5, 0.03, i));
  }
  e.end(`arcade-gates`, (r.x0 + r.x1) / 2, (r.zn + r.zs) / 2, 420);
}
function Ot(e, t, n, r, i, a, o, s) {
  (e.setMaterial(0.8, 0, 0.12, 17),
    L(e, 16777215),
    R(e, t - 0.01, n - a, t - 0.01, n + a, r, i, o),
    R(e, t + 0.01, n + a, t + 0.01, n - a, r, i, o),
    e.setMaterial(0.5, 0.6, 0, 16),
    L(e, 3815994),
    B(e, t, i + 0.04, n - a - 0.05, t, i + 0.04, n + a + 0.05, 0.02, s));
}
function kt(e, t, n) {
  let r = t.white(),
    i = e.begin(),
    a = 605.15,
    o = 614.85,
    s = -1277.6,
    c = n + 4.5,
    l = n + 5.8;
  (i.setMaterial(0.45, 0.6, 0, 0), L(i, 6975090));
  for (let e of [a, o])
    z(i, e - 0.11, n, -1277.7099999999998, e + 0.11, l + 0.2, -1277.49, r);
  (z(i, a, l + 0.05, -1277.6799999999998, o, l + 0.2, -1277.52, r),
    i.setMaterial(0.6, 0, 0.38, 3),
    L(i, 16777215));
  let u = t.uv(`orange:gate`);
  (R(i, 605.35, -1277.54, 614.65, -1277.54, c, l, u),
    R(i, 614.65, -1277.6599999999999, 605.35, -1277.6599999999999, c, l, u));
  let d = t.uv(`orange:flag`);
  i.setMaterial(0.8, 0, 0.12, 1);
  for (let [e, t] of [
    [a, -1],
    [o, 1],
  ]) {
    let r = e + t * 0.15,
      a = e + t * 0.75;
    (R(
      i,
      Math.max(r, a),
      -1277.61,
      Math.min(r, a),
      -1277.61,
      n + 2.4,
      n + 4.2,
      d,
    ),
      R(
        i,
        Math.min(r, a),
        -1277.59,
        Math.max(r, a),
        -1277.59,
        n + 2.4,
        n + 4.2,
        d,
      ));
  }
  (e.end(`orange-gate`, 610, s, 300),
    e.circles.push(
      { x: a, z: s, r: 0.16, y0: n, y1: l },
      { x: o, z: s, r: 0.16, y0: n, y1: l },
    ));
}
var At = [
    `asa.lantern.nikomi`,
    `asa.lantern.motsuyaki`,
    `asa.lantern.sake`,
    `asa.lantern.hoppy`,
    `asa.lantern.izakaya`,
  ],
  jt = 1.75;
function Mt() {
  let e = [],
    r = new t(n(`asa-hoppy`, 1)),
    i = 0;
  for (let [t, n, a] of [
    [`E`, d.x0 + 0.12, m.x0],
    [`W`, m.x1, d.x1 - 0.12],
  ]) {
    let o = d.z0 + 0.1,
      s = d.z1 - 0.1;
    for (; o < s - 0.5;) {
      let c = r.range(4.4, 7.2);
      s - (o + c) < 3.6 && (c = s - o);
      let l = r.weighted([
        [1, 0.2],
        [2, 0.62],
        [3, 0.18],
      ]);
      (e.push({
        x0: n,
        x1: a,
        z0: o,
        z1: o + c,
        face: t,
        i: (i * 5 + Math.floor(r.next() * 3)) % 12,
        floors: l,
        h: W + (l - 1) * 3 + at,
        fac: [0, 1, 2, 3, 4, 5, 6, 7][Math.floor(r.next() * 8)],
        tent: r.weighted([
          [0, 0.35],
          [1, 0.3],
          [2, 0.15],
          [3, 0.2],
        ]),
        tables: c > 5.8 ? 2 : 1,
        endMin: o === d.z0 + 0.1,
        endMax: !1,
      }),
        i++,
        (o += c));
    }
    e[e.length - 1].endMax = !0;
  }
  return e;
}
function Nt(e) {
  for (let t = 0; t < 12; t++)
    (e.need(`iza:front:${t}`, 320, 160, et(t)),
      e.need(`iza:board:${t}`, 320, 56, tt(t)),
      e.need(`iza:shut:${t}`, 160, 128, nt(t)));
  for (let t of At) e.need(`lantern:${t}`, 64, 96, Ue(t));
  (e.need(`iza:sign`, 512, 128, rt),
    e.need(
      `aboard:hoppy:1`,
      96,
      144,
      Ge(`asa.hoppy.aboard.1`, `asa.hoppy.aboard.2`),
    ),
    e.need(
      `aboard:hoppy:2`,
      96,
      144,
      Ge(`asa.hoppy.aboard.3`, `asa.hoppy.aboard.4`, `#7a1a14`),
    ));
}
var Pt = [
  [13115930, 13115930],
  [13115930, 16052456],
  [2783802, 16052456],
];
function Ft(e, r, a) {
  let o = r.white(),
    s = m;
  (e.setMaterial(0.88, 0, 0, 0),
    L(e, 4868684),
    xe(e, s.x0, s.z0, s.x1, s.z1, a + i.GROUND, o));
  let c = new t(n(`asa-hoppy-floor`, 1));
  L(e, 3815996);
  for (let t = 0; t < 9; t++) {
    let t = s.z0 + 4 + c.next() * (s.z1 - s.z0 - 8),
      n = s.x0 + 0.6 + c.next() * 3.2;
    xe(
      e,
      n,
      t,
      n + 0.8 + c.next() * 1.2,
      t + 0.8 + c.next() * 2.5,
      a + i.GROUND + i.PAINT,
      o,
    );
  }
  L(e, 6974056);
  let l = (s.x0 + s.x1) / 2;
  xe(e, l - 0.15, s.z0 + 0.4, l + 0.15, s.z1 - 0.4, a + i.GROUND + i.PAINT, o);
  let u = r.uv(`iza:sign`);
  for (let [t, n] of [
    [s.z0 + 0.3, -1],
    [s.z1 - 0.3, 1],
  ]) {
    let r = s.x0 + 0.25,
      i = s.x1 - 0.25,
      c = a + 3.85,
      l = a + 4.95;
    (e.setMaterial(0.45, 0.6, 0, 0), L(e, 4869714));
    for (let n of [r, i])
      z(e, n - 0.07, a, t - 0.07, n + 0.07, l + 0.1, t + 0.07, o);
    (e.setMaterial(0.6, 0, 0.4, 3),
      L(e, 16777215),
      n < 0
        ? (R(e, i - 0.1, t - 0.06, r + 0.1, t - 0.06, c, l, u),
          R(e, r + 0.1, t + 0.06, i - 0.1, t + 0.06, c, l, u))
        : (R(e, r + 0.1, t + 0.06, i - 0.1, t + 0.06, c, l, u),
          R(e, i - 0.1, t - 0.06, r + 0.1, t - 0.06, c, l, u)));
  }
}
function It(e, t, n, r, i) {
  let a = t.white(),
    o = m,
    s = r + 4.3,
    c = (e) => [o.x0 + (o.x1 - o.x0) * e, s - 1.4 * e * (1 - e)];
  (e.setMaterial(0.5, 0.5, 0, 0), L(e, 1710618));
  for (let t = 0; t < 8; t++) {
    let [r, i] = c(t / 8),
      [o, s] = c((t + 1) / 8);
    B(e, r, i, n, o, s, n, 0.008, a);
  }
  for (let r = 1; r <= 5; r++) {
    let [o, s] = c(r / 6);
    dt(
      e,
      o,
      s - 0.42,
      n,
      t.uv(`lantern:${At[(((r + i) % At.length) + At.length) % At.length]}`),
      a,
      0.15,
      0.38,
    );
  }
}
