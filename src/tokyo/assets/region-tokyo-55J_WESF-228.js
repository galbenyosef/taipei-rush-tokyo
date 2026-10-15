// tokyo/assets/region-tokyo-55J_WESF 228 — col
// Lines 87966-88141 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Obe(e, t, n, r) {
  let i = 6.75,
    a = CP,
    o = -36.6,
    s = -30.6,
    c = 3.3,
    l = 6.6,
    u = Math.min(n * i, n * a),
    d = Math.max(n * i, n * a);
  if (
    (e.col(zP[r][3], 1.05).mat(0.85, 0, 0.55, sP),
    e.panel(d - 0.4, -35, u + 0.4, -35, 0, 2.6999999999999997),
    e
      .col(15261900)
      .mat(0.8, 0, 0.6, sP)
      .flat(
        u + 0.4,
        -36.25,
        d - 0.4,
        -35,
        2.6999999999999997,
        e.white,
        0,
        0,
        !1,
      ),
    !e.coarse)
  ) {
    let t = zP[r];
    e.col(5913638)
      .mat(0.7, 0, 0.08, sP)
      .box(u + 0.8, 0, -36.2, d - 0.8, 0.85, -35.5);
    for (let n = 0; n < 6; n++) {
      let r = u + 1 + ((d - u - 2) * (n + 0.5)) / 6;
      e.col(t[n % 3])
        .mat(0.6, 0, 0.3, sP)
        .box(r - 0.55, 0.85, -36.1, r + 0.55, 1.05 + (n % 3) * 0.08, -35.6);
    }
  }
  (jP(e, 0.2),
    e.box(u, 2.6999999999999997, o, d, c, -36.25, e.white, 0, 0, null, !0));
  for (let t of [u, (u + d) / 2, d]) e.box(t - 0.2, 0, o, t + 0.2, c, -36.2);
  (e.box(u, 0, -36.25, u + 0.25, c, s),
    e.box(d - 0.25, 0, -36.25, d, c, s),
    e.push().col(16777215).mat(0.5, 0, 0.45, G));
  for (let n of [(u * 3 + d) / 4, (u + d * 3) / 4])
    e.panel(
      n + 1.2,
      -36.660000000000004,
      n - 1.2,
      -36.660000000000004,
      2.73,
      3.27,
      t.boards[r],
    );
  if (
    (e.pop(),
    e
      .col(uP)
      .mat(0.85, 0, 0.1, sP)
      .box(u, c, -36.2, d, l, s, t.plaster, 2, 3.3),
    jP(e, 0.16).box(
      u - 0.05,
      6.199999999999999,
      -36.300000000000004,
      d + 0.05,
      l,
      -36.15,
    ),
    !e.coarse)
  ) {
    e.col(16777215).mat(0.6, 0, 0.6, G | 32);
    for (let n of [(u * 3 + d) / 4, (u + d * 3) / 4])
      e.panel(
        n + 0.9,
        -36.230000000000004,
        n - 0.9,
        -36.230000000000004,
        4.3,
        5.6,
        t.shoji,
      );
    for (let n = u + 2.5; n < d - 1.5; n += 4.5)
      NP(e, t, n, 2.65, -37.050000000000004);
  }
  (AP(e),
    iC(e, (u + d) / 2, -36.4, 3.25, (d - u) / 2 + 0.2, 1.1, {
      ...kP(t, mP, lP),
      rise: 0.55,
      R: (d - u) / 2 + 0.2,
      ridgeH: 0,
      eave: 0.9,
      sori: 0.03,
      curve: 1.1,
      thick: 0.18,
      rows: 2,
    }),
    iC(e, (u + d) / 2, -33.4, 6.5, (d - u) / 2 + 0.5, 3.5, {
      ...kP(t, mP, lP),
      rise: 1.9,
      curve: 1.2,
      sori: 0.12,
      eave: 0.7,
      thick: 0.25,
      ridgeH: 0.4,
      rows: 3,
    }),
    e.solid(u, o, d, s, 0, 9));
}
function kbe(e, t) {
  let n = OP(t);
  (e.col(cP).mat(0.6, 0, 0.3, sP),
    e.box(-6, 0, -37.9, 6, 7.4, -31.1),
    e.col(mP).mat(0.8, 0.05, 0, 0),
    e.extrudeX(
      [-28.6, 7.2, -40.4, 7.2, bP, 11.3],
      -8.6,
      8.6,
      !0,
      !0,
      n.kawara,
    ));
  for (let t of [-1, 1])
    (e.col(14273464).mat(0.85, 0, 0.35, G | 32),
      HP(e, t, xP, 0, -30.2, CP, 7, 36.6),
      e.col(mP).mat(0.8, 0.05, 0, 0),
      HP(e, t, 5.25, 7, -30.2, 11.95, 8.2, 36.6));
}
var WP =
    (e, t) =>
    (n, r, i, a, o, s, c = !1) => ({
      x0: e.x - i,
      x1: e.x - n,
      z0: e.z - a,
      z1: e.z - r,
      y0: t,
      y1: t + o,
      rgb: s,
      lit: c,
    }),
  Abe = {
    id: `nakamise`,
    site: (e) => ({
      x: _P.x,
      z: _P.z,
      gy: e.groundHeight(_P.x, _P.z),
      facing: oP,
    }),
    name: {
      ja: `雷門・仲見世`,
      zh: `雷門・仲見世`,
      en: `Kaminarimon & Nakamise`,
    },
    near: 230,
    build: Dbe,
    far: kbe,
    farBoxes: (e, t) => {
      let n = WP(t, t.gy);
      return [
        n(-6, -37.9, 6, -31.1, 11.6, [0.55, 0.14, 0.08]),
        n(xP, -30.2, CP, 36.6, 8.2, [0.62, 0.55, 0.5], !0),
        n(-21.6, -30.2, -5.45, 36.6, 8.2, [0.62, 0.55, 0.5], !0),
      ];
    },
    anchors: [
      {
        key: `kaminarimon`,
        lx: 0,
        lz: -40.7,
        turn: oP,
        name: { zh: `雷門`, en: `Kaminarimon` },
      },
    ],
    roofs: [{ lx0: -2.4, lz0: -37.5, lx1: 2.4, lz1: -31.5, y: 6 }],
    blip: !1,
  };
