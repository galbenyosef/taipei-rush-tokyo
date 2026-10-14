// tokyo/assets/region-tokyo-d-nihonbashi-DhEI_3CD 05 — math
// Lines 1965-2282 of readable/tokyo/assets/region-tokyo-d-nihonbashi-DhEI_3CD.pretty.js (statement-aligned).
function yt(e, t, n) {
  let r = 0.3;
  (e.hrect(t.x0, t.z0, t.x1, t.z0 + r, n, !0, 0, 0, 1, 0.1),
    e.hrect(t.x0, t.z1 - r, t.x1, t.z1, n, !0, 0, 0, 1, 0.1),
    e.hrect(t.x0, t.z0 + r, t.x0 + r, t.z1 - r, n, !0, 0, 0, 0.1, 1),
    e.hrect(t.x1 - r, t.z0 + r, t.x1, t.z1 - r, n, !0, 0, 0, 0.1, 1));
}
var bt = (e) => e === `mitsu` || e === `taka`;
function xt(e, t, n, r, i, a) {
  let o = e.px + e.tx * t,
    s = e.pz + e.tz * t,
    c = e.px + e.tx * n + e.nx * i,
    l = e.pz + e.tz * n + e.nz * i;
  return [
    Math.min(o, c),
    r,
    Math.min(s, l),
    Math.max(o, c),
    r + 0.22,
    Math.max(s, l),
    a,
  ];
}
function St(e, t, n, r, i) {
  e.setTint(i).setInfo(0, 0, 0, 0);
  let [a, o] = L(t, -r * 0.6, 0),
    [s, c] = L(t, t.L + r * 0.6, r);
  V(
    e,
    Math.min(a, s),
    n,
    Math.min(o, c),
    Math.max(a, s),
    n + 0.55,
    Math.max(o, c),
    `stone`,
  );
  let [l, u] = L(t, -r * 0.3, 0),
    [d, f] = L(t, t.L + r * 0.3, r * 0.55);
  (e.setTint(Math.max(0, i - 1315860)),
    V(
      e,
      Math.min(l, d),
      n - 0.35,
      Math.min(u, f),
      Math.max(l, d),
      n,
      Math.max(u, f),
      `stone`,
    ),
    e.setTint(16777215));
}
function Ct(e, t, n, r, i) {
  e.setTint(i).setInfo(0, 0, 0, 0);
  let [a, o] = L(t, 0, 0),
    [s, c] = L(t, t.L, r);
  (V(
    e,
    Math.min(a, s),
    n,
    Math.min(o, c),
    Math.max(a, s),
    n + 0.3,
    Math.max(o, c),
    `stone`,
  ),
    e.setTint(16777215));
}
function wt(e, t, n, r) {
  (e.setTint(5921374), R(e, x.KAWARA, 1, s.NONE, 0, 0));
  let [i, a] = L(t, 0, 0),
    [o, c] = L(t, t.L, 0),
    [l, u] = L(t, t.L, r),
    [d, f] = L(t, 0, r);
  e.quad4(
    d,
    n,
    f,
    l,
    n,
    u,
    o,
    n + 0.45,
    c,
    i,
    n + 0.45,
    a,
    t.nx * 0.45,
    0.9,
    t.nz * 0.45,
    0,
    0,
    t.L / 2,
    0,
    t.L / 2,
    1,
    0,
    1,
  );
}
function Tt(e, t, n, r, i, a) {
  let o = e.sign,
    s = Math.min(r - n, 2.4),
    c = (n + r) / 2;
  (o.setTint(16777215).setInfo(0, 0, 18, 0),
    B(o, t, 0.12, c - s / 2, c + s / 2, i - 1.05, i, P(`noren.${a}`, 2)),
    B(
      o,
      {
        px: t.px + t.tx * (c + s / 2) + t.nx * 0.115,
        pz: t.pz + t.tz * (c + s / 2) + t.nz * 0.115,
        tx: -t.tx,
        tz: -t.tz,
        nx: -t.nx,
        nz: -t.nz,
        L: s,
      },
      0,
      0,
      s,
      i - 1.05,
      i,
      mt(`indigo`),
    ),
    o.setInfo(0, 0, 0, 0),
    H(o, t, c, 0.12, s / 2 + 0.08, 0.02, i, i + 0.04, `wood`));
}
function Et(e, t, n, r, i, a) {
  let o = P(`flag.${r}`, 2);
  for (let r = 0; r < i; r++) {
    let s = a + (r - (i - 1) / 2) * 2.2,
      [c, l] = L(t, s, 0.1);
    e.setTint(16777215).setInfo(0, 0, 0, 0);
    let [u, d] = L(t, s, 1.6);
    V(
      e,
      Math.min(c, u) - 0.03,
      n + 2.95,
      Math.min(l, d) - 0.03,
      Math.max(c, u) + 0.03,
      n + 3.05,
      Math.max(l, d) + 0.03,
      `gold`,
    );
    let f = I(...L(t, s, 0.9), Math.atan2(t.tx, -t.tz), 1.4);
    (e.setInfo(0, 0, 40, 0),
      B(e, f, 0, 0, 1.4, n + 0.6, n + 2.95, o),
      B(
        e,
        {
          px: f.px + f.tx * 1.4,
          pz: f.pz + f.tz * 1.4,
          tx: -f.tx,
          tz: -f.tz,
          nx: -f.nx,
          nz: -f.nz,
          L: 1.4,
        },
        0,
        0,
        1.4,
        n + 0.6,
        n + 2.95,
        o,
      ));
  }
}
function Dt(e, t, n, r, i) {
  let a = n.colonnade,
    o = e.sign,
    s = r + 0.6,
    c = r + a.top,
    l = a.n,
    u = t.L / l;
  o.setTint(13814456).setInfo(0, 0, 0, 0);
  for (let e = 0; e < l; e++) {
    let [n, i] = L(t, (e + 0.5) * u, a.depth);
    (V(
      o,
      n - a.r * 1.25,
      r,
      i - a.r * 1.25,
      n + a.r * 1.25,
      s + 0.35,
      i + a.r * 1.25,
      `stone`,
    ),
      ht(o, n, i, a.r, s + 0.35, c - 1.1, 16, `stone`),
      ht(o, n, i, a.r * 1.08, c - 1.1, c - 0.55, 12, `stonedark`),
      V(
        o,
        n - a.r * 1.35,
        c - 0.55,
        i - a.r * 1.35,
        n + a.r * 1.35,
        c - 0.25,
        i + a.r * 1.35,
        `stone`,
      ));
  }
  let [d, f] = L(t, 0, 0),
    [p, m] = L(t, t.L, a.depth + a.r * 1.5);
  V(
    o,
    Math.min(d, p),
    c - 0.25,
    Math.min(f, m),
    Math.max(d, p),
    c + 1.4,
    Math.max(f, m),
    `stone`,
  );
  let [h, g] = L(t, -0.3, 0),
    [_, v] = L(t, t.L + 0.3, a.depth + a.r * 1.5 + 0.5);
  (V(
    o,
    Math.min(h, _),
    c + 1.4,
    Math.min(g, v),
    Math.max(h, _),
    c + 1.9,
    Math.max(g, v),
    `stone`,
  ),
    o.setTint(16777215));
}
function Ot(e, t, n, r, i, a) {
  let { body: o, sign: c } = e,
    l = i + t.h,
    u = t.crown ? 6 : 1.4;
  a.push({ x0: t.x0, z0: t.z0, x1: t.x1, z1: t.z1, h: l });
  for (let e = 0; e < 4; e++) {
    let i = F(t, e),
      a = 4.2;
    if (t.skin) {
      let o = Math.max(1, Math.round(i.L / 3.6)),
        s = i.L / o,
        d = Math.max(1, Math.round((l - u - n) / a)),
        f = (l - u - n) / d;
      c.setTint(t.tint ?? 16777215);
      for (let a = 0; a < d; a++)
        for (let l = 0; l < o; l++) {
          let o = +(gt(r + a * 13, l + e * 7) > 0.5);
          (c.setInfo(0, (r + a * 7) & 255, Math.round(t.level * _t[t.skin]), 0),
            B(
              c,
              i,
              0.01,
              l * s,
              (l + 1) * s,
              n + a * f,
              n + (a + 1) * f,
              P(`skin.${t.skin}.${o}`, 3),
            ));
        }
    } else
      (o.setTint(t.tint ?? 13161692),
        R(
          o,
          t.wall ?? x.CURTAIN,
          t.wall && t.wall !== x.CURTAIN ? 1 : 3,
          s.OFFICE,
          r + e,
          t.level,
        ),
        pt(o, i, 0, 0, i.L, n, l - u, 3.2, a, n));
    (o.setTint(t.crown ? 15265006 : 13159630),
      R(o, t.crown ? x.LOUVRE : x.STONE_PLAIN, 1, s.NONE, 0, 0),
      z(
        o,
        i,
        -0.2,
        0,
        i.L,
        l - u,
        l,
        0,
        Math.max(1, i.L / 3.2),
        0,
        t.crown ? u / 3 : 0.5,
      ),
      t.crown &&
        (c.setTint(16777215).setInfo(0, r, 120, 0),
        B(c, i, 0.05, 0, i.L, l - u - 0.35, l - u, mt(`warm`))));
  }
  (o.setTint(12104876),
    R(o, x.ROOF_FLAT, 1, s.NONE, 0, 0),
    o.hrect(
      t.x0,
      t.z0,
      t.x1,
      t.z1,
      l - 0.6,
      !0,
      0,
      0,
      (t.x1 - t.x0) / 6,
      (t.z1 - t.z0) / 6,
    ),
    R(o, x.CONCRETE, 1, s.NONE, 0, 0),
    yt(o, t, l),
    c.setTint(16777215).setInfo(2, r & 255, 255, 0));
  let d = (t.x0 + t.x1) / 2,
    f = (t.z0 + t.z1) / 2;
  V(c, d - 0.25, l, f - 0.25, d + 0.25, l + 0.5, f + 0.25, `red`);
}
var kt = [
  { id: `muromachi`, test: (e, t) => e >= 140 && t < -190 },
  { id: `bridge`, test: (e, t) => e >= 140 && t < -5 },
  { id: `kyobashi`, test: (e) => e >= 140 },
  { id: `yaesu`, test: () => !0 },
];
function U(e, t, n, r) {
  let i = (e + n) / 2,
    a = (t + r) / 2;
  for (let e = 0; e < kt.length; e++) if (kt[e].test(i, a)) return e;
  return kt.length - 1;
}
