// tokyo/assets/heli-C2W-6EbV 04 — style
// Lines 745-1041 of readable/tokyo/assets/heli-C2W-6EbV.pretty.js (statement-aligned).
function Ke(e) {
  (Le(e, {
    zs: Re(
      -3.9,
      2.9,
      0.18,
      [
        -3.72, -3.42, -3, -2.9, -2.42, -2.32, -1.62, -1.3, -1.06, 0.24, 1.1,
        1.6, 2.1, 2.55,
      ],
    ),
    ring: 28,
    sec: (e, t) => K(t, Fe(Ve, 1, e), Fe(Ve, 2, e), Fe(Ve, 3, e)),
    nUp: 2.5,
    nDn: 3.2,
    style: Ge,
    uv: Y,
    capFront: [0, 1.06, -3.99],
    capBack: null,
  }),
    Le(e, {
      zs: Re(2.86, Ue, 0.45, []),
      ring: 14,
      sec: (e, t) => K(t, J(e), We(e) - J(e), We(e) + J(e)),
      nUp: 2,
      nDn: 2,
      style: () => De,
      uv: (e, t, r, i, a, o, s, c, l, u, d, f, p) => {
        if (Math.abs(p) < 0.35) return !1;
        let m = p > 0,
          h = (e, t, r) => {
            let i = n.clamp((t - M.z0) / (M.z1 - M.z0), 0, 1);
            Ee[e * 2] = m ? M.u1 - i * (M.u1 - M.u0) : M.u0 + i * (M.u1 - M.u0);
            let a = n.clamp((r - We(t)) / J(t), -1, 1) * 0.5 + 0.5;
            Ee[e * 2 + 1] = M.v0 + a * (M.v1 - M.v0);
          };
        return (h(0, r, t), h(1, o, a), h(2, l, c), h(3, f, d), !0);
      },
      capBack: [0, 1.8, 7.109999999999999],
    }));
  {
    let t = [
      [-1.05, 0.12, 1.7, 2.2],
      [-0.75, 0.42, 1.7, 2.46],
      [-0.35, 0.53, 1.7, 2.68],
      [0.3, 0.56, 1.7, 2.74],
      [1, 0.55, 1.7, 2.72],
      [1.6, 0.5, 1.7, 2.62],
      [2.05, 0.4, 1.7, 2.42],
      [2.35, 0.2, 1.7, 2.18],
    ];
    (Le(e, {
      zs: Re(-1.05, 2.35, 0.22, [-0.15, 0.45]),
      ring: 20,
      sec: (e, n) => K(n, Fe(t, 1, e), Fe(t, 2, e), Fe(t, 3, e)),
      nUp: 3,
      nDn: 5,
      style: (e, t, n, r) =>
        Math.abs(r) > 0.6 && t > 2.28 && t < 2.6 && n > -0.15 && n < 0.45
          ? ke
          : De,
      capFront: [0, 1.95, -1.1],
      capBack: [0, 1.95, 2.4],
    }),
      e.style(Ae),
      q(e, 0.2, 2.4, 1.75, 0.27, 2.5, 2.25, 0.1, 0.09, 10, !1),
      e.style(ke),
      q(e, 0.27, 2.5, 2.25, 0.29, 2.53, 2.36, 0.09, 0.085, 10, !0),
      e.style(Ae),
      e.cylY(0, 2.86, 0, 0.11, 0.42, 10, !1),
      e.style(De),
      e.cylY(0, 2.74, 0, 0.32, 0.12, 14, !0, 0.2));
  }
  (e.style(De),
    Be(
      e,
      [
        [6.28, 1.88],
        [6.95, 3.15],
        [7.32, 3.15],
        [7.22, 1.86],
      ],
      -0.065,
      0.065,
      !0,
    ),
    Be(
      e,
      [
        [6.38, 1.66],
        [6.98, 0.98],
        [7.24, 1.02],
        [7.16, 1.68],
      ],
      -0.055,
      0.055,
      !1,
    ),
    e.style(je),
    q(e, 0, 1, 6.95, 0, 0.82, 7.2, 0.025, 0.025, 6, !0),
    e.style(De),
    e.cbox(0, 1.73, 5.55, 2.3, 0.08, 0.55, 0.03, !1));
  for (let t of [-1, 1])
    Be(
      e,
      [
        [5.28, 1.5],
        [5.42, 2.08],
        [5.86, 2.08],
        [5.86, 1.52],
      ],
      t * 1.15 - 0.03,
      t * 1.15 + 0.03,
      !1,
    );
  (e.style(ke), e.cylX(-0.16, 2.38, 6.95, 0.13, 0.24, 10, !0), e.style(je));
  for (let t of [-1, 1]) {
    let n = t * 1.12;
    (q(e, n, 0.05, -2.15, n, 0.05, 1.55, 0.05, 0.05, 8),
      q(e, n, 0.05, -2.15, n, 0.16, -2.5, 0.05, 0.05, 8),
      q(e, n, 0.16, -2.5, n, 0.34, -2.66, 0.05, 0.045, 8, !0),
      q(e, n, 0.05, 1.55, n, 0.1, 1.72, 0.05, 0.045, 8, !0));
    for (let r of [-1.22, 0.78])
      (q(e, n, 0.07, r, t * 0.98, 0.46, r, 0.045, 0.045, 8),
        q(e, t * 0.98, 0.46, r, t * 0.62, 0.6, r, 0.045, 0.045, 8));
    (e.style(Pe),
      e.box(t * 1.18, 0.14, -1.78, 0.2, 0.04, 0.42, ``),
      e.box(t * 1.18, 0.14, -0.4, 0.2, 0.04, 0.42, ``),
      e.style(je));
  }
  for (let t of [-1.22, 0.78]) e.cylX(0, 0.6, t, 0.045, 1.24, 8, !1);
  (e.style(ke),
    e.box(0, 2.24, -1.05, 0.02, 0.22, 0.16, `b`),
    e.box(0, 0.48, -0.6, 0.02, 0.2, 0.18, `t`),
    q(e, 0.32, 1.72, -3.62, 0.36, 1.78, -4, 0.012, 0.012, 5, !0),
    e.style({ color: 16722458, light: O.HEAD, rough: 0.2 }),
    e.box(-1.19, 1.72, 5.58, 0.04, 0.08, 0.14, ``),
    e.style({ color: 1769306, light: O.HEAD, rough: 0.2 }),
    e.box(1.19, 1.72, 5.58, 0.04, 0.08, 0.14, ``),
    e.style({ color: 16777215, light: O.HEAD, rough: 0.2 }),
    e.box(0, 1.98, 7.29, 0.06, 0.08, 0.05, ``),
    e.style({ color: 16720916, light: O.IND_L, rough: 0.2 }),
    ze(e, 0, 2.76, 1.72, 0.07, 8, 4),
    ze(e, 0, 0.6, 0.55, 0.07, 8, 4),
    e.style({ color: 16777215, light: O.BRAKE, rough: 0.2 }),
    e.box(-1.19, 2.06, 5.7, 0.05, 0.06, 0.12, ``),
    e.box(1.19, 2.06, 5.7, 0.05, 0.06, 0.12, ``),
    e.style({ color: 16774365, light: O.REVERSE, rough: 0.1 }),
    e.discZ(0, 0.72, -3.42, 0.11, -1, 10),
    e.style(ke),
    e.cylZ(0, 0.72, -3.36, 0.12, 0.14, 10, !1),
    e.style({ ...ke, variant: 5 }),
    e.box(0, 0.5, -3.08, 0.12, 0.14, 0.12, `t`),
    e.style({ color: 3817286, rough: 0.35, metal: 0.4, variant: 5 }),
    ze(e, 0, 0.38, -3.08, 0.19, 10, 6),
    e.style({ ...Oe, variant: 5 }),
    e.discZ(0, 0.36, -3.26, 0.07, -1, 8),
    e.style({ ...Ae, variant: 6 }),
    e.cylZ(0.55, 0.46, -0.9, 0.13, 0.26, 10, !0),
    e.style({ color: 16774880, light: O.REVERSE, rough: 0.1, variant: 6 }),
    e.discZ(0.55, 0.46, -1.04, 0.11, -1, 10),
    e.style({ ...Ae, variant: 6 }),
    e.box(1.02, 2.1, -0.65, 0.12, 0.12, 0.9, ``),
    e.box(1.3, 2.08, -0.65, 0.52, 0.1, 0.1, ``),
    e.style({ ...ke, variant: 6 }),
    e.cylX(1.5, 2, -0.65, 0.12, 0.22, 10, !0));
}
function qe(e, t, n, r, i, a, o, s, c) {
  let l = (e, c, l) => {
      let u = (e - t) / (n - t),
        d = r + (i - r) * u,
        f = a + (o - a) * u,
        p = -s * u * u,
        m = c === 0 ? -d * 0.35 : c === 2 ? d * 0.65 : -d * 0.05;
      return K(l, e, (c === 1 ? f / 2 : c === 3 ? -f / 2 : 0) + p, m);
    },
    u = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    d = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  for (let r = 0; r < 6; r++) {
    let i = t + ((n - t) * r) / 6,
      a = t + ((n - t) * (r + 1)) / 6;
    e.style(a > n - c + 0.001 ? Ne : Me);
    for (let e = 0; e < 4; e++) (l(i, e, u[e]), l(a, e, d[e]));
    let o = (u[0][1] + u[1][1] + u[2][1] + u[3][1]) / 4,
      s = (u[0][2] + u[1][2] + u[2][2] + u[3][2]) / 4;
    for (let t = 0; t < 4; t++) {
      let n = (t + 1) % 4;
      (K(H, 0, (u[t][1] + u[n][1]) / 2 - o, (u[t][2] + u[n][2]) / 2 - s),
        e.quad(u[t], u[n], d[n], d[t], H));
    }
  }
  e.style(Ne);
  for (let e = 0; e < 4; e++) d[e] = l(n, e, d[e]);
  (K(H, 1, 0, 0), e.tri(d[0], d[1], d[2], H), e.tri(d[0], d[2], d[3], H));
}
function Je(e) {
  for (let t = 0; t < 3; t++) {
    let n = new E();
    (qe(n, 0.52, Ce, 0.36, 0.3, 0.07, 0.04, 0.1, 0.22),
      n.style(Ae),
      n.box(0.42, 0, 0.02, 0.32, 0.09, 0.16, ``));
    let r = new l().makeRotationY((t * Math.PI * 2) / 3 + 0.35);
    (e.append(n, r), n.release());
  }
  (e.style(Ae),
    e.cylY(0, 0, 0, 0.3, 0.07, 3, !0),
    e.style(ke),
    e.cylY(0, 0, 0, 0.17, 0.2, 12, !0),
    e.style(Ae),
    Ye(e, 0, 0.1, 0, 0.17));
}
function Ye(e, t, n, r, i) {
  for (let a = 0; a < 3; a++) {
    let o = (a / 3) * (Math.PI / 2),
      s = ((a + 1) / 3) * (Math.PI / 2);
    for (let a = 0; a < 12; a++) {
      let c = (a / 12) * Math.PI * 2,
        l = ((a + 1) / 12) * Math.PI * 2,
        u = [
          [o, c],
          [o, l],
          [s, l],
          [s, c],
        ],
        d = [R, z, B, V],
        f = [H, U, W, G];
      for (let e = 0; e < 4; e++) {
        let [a, o] = u[e],
          s = Math.sin(a) * Math.cos(o),
          c = Math.cos(a),
          l = Math.sin(a) * Math.sin(o);
        (K(d[e], t + s * i, n + c * i * 0.6, r + l * i), K(f[e], s, c, l));
      }
      e.smoothQuadUV(R, z, B, V, H, U, W, G);
    }
  }
}
function Xe(e) {
  for (let t = 0; t < 2; t++) {
    let n = new E();
    qe(n, 0.1, 0.93, 0.14, 0.12, 0.03, 0.02, 0, 0.1);
    let r = new l()
      .makeRotationX(t * Math.PI)
      .multiply(new l().makeRotationZ(Math.PI / 2));
    (e.append(n, r), n.release());
  }
  (e.style(Ae), e.cylX(-0.03, 0, 0, 0.09, 0.12, 10, !0));
}
var Ze = null;
function Qe() {
  if (Ze) return Ze;
  let e = (e) => ((e.userData.keepCpu = !0), e),
    t = new E();
  Ke(t);
  let n = new E();
  Je(n);
  let r = new E();
  Xe(r);
  let i = new E();
  (i.append(t),
    i.append(n, new l().makeTranslation(xe.x, xe.y, xe.z)),
    i.append(r, new l().makeTranslation(Se.x, Se.y, Se.z)));
  let a = i.buildGeometry(),
    o = e(D(a, 0.16));
  a.dispose();
  let s = e(t.buildGeometry()),
    c = e(n.buildGeometry()),
    u = e(r.buildGeometry());
  return (
    (s.name = `vehicle-heli-body`),
    (c.name = `vehicle-heli-rotor`),
    (u.name = `vehicle-heli-tail-rotor`),
    (o.name = `vehicle-heli-far`),
    (Ze = {
      body: s,
      rotor: c,
      tail: u,
      far: o,
      tris:
        (s.attributes.position.count +
          c.attributes.position.count +
          u.attributes.position.count) /
        3,
    }),
    Ze
  );
}
