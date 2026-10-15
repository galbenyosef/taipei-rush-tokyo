// tokyo/assets/region-tokyo-55J_WESF 172 — col
// Lines 70640-70916 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function uT(e, t, n, r, i = 7, a = -1, o = aT) {
  let s = (e) => n + a * e;
  e.push().col(10133926).mat(0.5, 0.6, 0, 0);
  for (let t of [-i / 2 + 0.4, i / 2 - 0.4])
    (e.box(
      Math.min(s(0), s(0.12)),
      o,
      r + t - 0.06,
      Math.max(s(0), s(0.12)),
      o + 2.75,
      r + t + 0.06,
    ),
      e.pole(s(0.06), r + t, 0.1, o, o + 2.7));
  (e.col(15001318).mat(0.4, 0.3, 0.1, 1),
    e.box(
      Math.min(s(-0.9), s(1.3)),
      o + 2.75,
      r - i / 2,
      Math.max(s(-0.9), s(1.3)),
      o + 2.9,
      r + i / 2,
    ),
    e.coarse ||
      (e.col(12110031).mat(0.15, 0.2, 0, 0),
      e.box(
        Math.min(s(-0.8), s(-0.72)),
        o + 0.25,
        r - i / 2 + 0.6,
        Math.max(s(-0.8), s(-0.72)),
        o + 2.4,
        r + i / 2 - 0.6,
      ),
      e
        .col(6975090)
        .mat(0.5, 0.5, 0, 0)
        .box(
          Math.min(s(-0.65), s(-0.2)),
          o + 0.42,
          r - 1.8,
          Math.max(s(-0.65), s(-0.2)),
          o + 0.5,
          r + 1.8,
        )),
    e.pop(),
    dT(
      e,
      t.c(`signBus`),
      n - a * 0.5,
      r + i / 2 + 1.2,
      a < 0 ? -Math.PI / 2 : Math.PI / 2,
      o,
    ));
}
function dT(e, t, n, r, i, a = aT, o = 1.8) {
  let s = n,
    c = r,
    l = a + 2.3;
  (e.push().col(2763823).mat(0.5, 0.6, 0, 0),
    e.cylY(s, c, a, l + 0.5, 0.06, 6),
    e.pole(s, c, 0.1, a, l));
  let u = Math.cos(i),
    d = Math.sin(i),
    f = Math.sin(i),
    p = -Math.cos(i),
    m = o * 0.25;
  e.col(16777215).mat(0.5, 0, 0.35, G);
  let h = s - (o / 2) * u + f * 0.08,
    g = c - (o / 2) * d + p * 0.08,
    _ = s + (o / 2) * u + f * 0.08,
    v = c + (o / 2) * d + p * 0.08;
  (e.panel(h, g, _, v, l, l + m, t),
    e.coarse ||
      e.panel(
        _ - f * 0.16,
        v - p * 0.16,
        h - f * 0.16,
        g - p * 0.16,
        l,
        l + m,
        t,
      ),
    e.pop());
}
function fT(e, t, n, r, i) {
  (e.col(rT).mat(0.9, 0, 0, 0), sT(e, Jw, n, tT, r, 0.03));
  let a = n + (i ? 9 : 10),
    o = r - (i ? 10 : 9);
  (cT(e, nT.x0, a, nT.x1, o, 16777215, t.c(`lawn`), e.coarse ? 11 : 5.5),
    e.col(3103274).mat(0.95, 0, 0, 0),
    e.box(
      Kw(nT.x0 + 1),
      oT,
      qw(a + 1),
      Kw(nT.x1 - 1),
      0.9700000000000001,
      qw(a + 2.2),
    ),
    e.box(
      Kw(nT.x0 + 1),
      oT,
      qw(o - 2.2),
      Kw(nT.x1 - 1),
      0.9700000000000001,
      qw(o - 1),
    ));
  let s = [a + (o - a) * 0.3, a + (o - a) * 0.7];
  for (let t = 0; t < 2; t++)
    (UC(e, Kw((nT.x0 + nT.x1) / 2), qw(s[t]), 10 + t, (i ? 31 : 37) + t),
      e.pole(Kw((nT.x0 + nT.x1) / 2), qw(s[t]), 0.35, 0, 4));
  let c = (a + o) / 2;
  if (
    (uT(e, t, Kw(-43.4), qw(c + (i ? -7 : 7)), 8, -1),
    dT(e, t.c(`signTaxi`), Kw(-43.8), qw(c + (i ? 11 : -11)), -Math.PI / 2),
    !e.coarse)
  ) {
    e.col(15263970).mat(0.7, 0, 0.02, 0);
    let t = 0.045;
    for (let n = a - 3; n < o + 3; n += 4)
      sT(e, nT.x1 + 5, n, nT.x1 + 5.15, n + 2.2, t);
    (sT(e, nT.x0 - 0.1, a - 4.2, nT.x1 + 0.1, a - 4.05, t),
      sT(e, nT.x0 - 0.1, o + 4.05, nT.x1 + 0.1, o + 4.2, t));
    for (let n = nT.x1 + 0.6; n < -45.6; n += 1.2)
      sT(e, n, c - 2, n + 0.6, c + 2, t);
    e.col(14726144).mat(0.7, 0, 0.02, 0);
    let n = i ? c + 3 : a,
      r = i ? o : c - 3;
    sT(e, -47.9, n, -47.75, r, t);
    for (let i = n; i <= r; i += 5.5) sT(e, -47.9, i, tT, i + 0.15, t);
  }
  (e.col(16777215).mat(0.85, 0, 0.03, G),
    sT(e, tT, n, -32.1, r, aT, t.c(`paving`), e.coarse ? 16 : 4),
    e.col(iT).mat(0.85, 0, 0.04, 0),
    e.box(Kw(tT) - 0.3, 0, qw(n), Kw(tT), 0.13, qw(r)));
}
function* vhe(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 16 : 4;
  (e.col(16777215).mat(0.85, 0, 0.03, G), sT(e, Jw, Qw, -32.1, $w, aT, n, r));
  for (let n of [-1, 1]) {
    let r = n < 0 ? -eT.zb : eT.za,
      i = n < 0 ? -eT.za : eT.zb;
    (cT(e, eT.x0, r, eT.x1, i, 16777215, t.c(`lawn`), e.coarse ? 13.5 : 4.5),
      lT(e, eT.x0 - 0.6, r - 0.6, eT.x1 + 0.6, r - 0.6),
      lT(e, eT.x0 - 0.6, i + 0.6, eT.x1 + 0.6, i + 0.6),
      lT(e, eT.x0 - 0.6, r - 0.6, eT.x0 - 0.6, i + 0.6),
      lT(e, eT.x1 + 0.6, r - 0.6, eT.x1 + 0.6, i + 0.6));
  }
  if ((yield, !e.coarse))
    for (let t = eT.x0 + 2; t <= eT.x1; t += 8.5)
      for (let n of [-1, 1])
        (WC(e, Kw(t), 0, qw(n * 10.5), 5.2),
          e.pole(Kw(t), qw(n * 10.5), 0.12, 0, 5));
  if (!e.coarse)
    for (let t of [-eT.zb - 2.5, eT.zb + 2.5])
      for (let n of [eT.x0 + 2, eT.x1 - 2])
        (WC(e, Kw(n), 0, qw(t), 5.2), e.pole(Kw(n), qw(t), 0.12, 0, 5));
  for (let t of [-37.5, 37.5])
    for (let n = -69, r = 0; n <= eT.x1; n += 12, r++)
      (UC(e, Kw(n), qw(t), 9 + (r % 3), 50 + r + (t > 0 ? 20 : 0)),
        e.pole(Kw(n), qw(t), 0.35, 0, 4));
  (lT(e, -73.4, -36, -73.4, -11), lT(e, -73.4, 11, -73.4, 36), yield);
  for (let t of [-1, 1]) {
    let n = t < 0 ? -34 : 22,
      r = t < 0 ? -22 : 34;
    if (
      (e.col(iT).mat(0.85, 0, 0.04, G),
      e.box(Kw(-41), 0, qw(n), Kw(-36.5), 0.45, qw(r)),
      e.col(3879720).mat(1, 0, 0, 0),
      sT(e, -40.8, n + 0.2, -36.7, r - 0.2, 0.46),
      e.solid(Kw(-41), qw(n), Kw(-36.5), qw(r), 0, 0.45, `prop`),
      !e.coarse)
    )
      for (let i = 0; i < 2; i++) {
        let a = n + 3.4 + i * (r - n - 6.8),
          o = e.sub(Kw(-38.8), 0.45, qw(a), 0);
        (HC(e, 0, 0, 4.6 + i * 0.6, 70 + i + (t > 0 ? 10 : 0)), e.leave(o));
      }
  }
  if (!e.coarse)
    for (let n of [-1, 1]) {
      let r = Kw(-39),
        i = qw(n * 6.5);
      (e.col(14277076).mat(0.35, 0.7, 0, 0),
        e.cylY(r, i, 0, 11, 0.09, 8, 0.06),
        e.lathe(r, i, [0.01, 11, 0.16, 11.15, 0.01, 11.35], 6),
        e
          .col(10130826)
          .mat(0.8, 0, 0, 0)
          .box(r - 0.4, 0, i - 0.4, r + 0.4, 0.3, i + 0.4),
        e.col(16777215).mat(0.8, 0, 0.15, G));
      let a = t.c(`flag`),
        o = 8.6,
        s = 10.6,
        c = r - 3,
        l = i + 0.12,
        u = r - 3 / 2,
        d = i - 0.14;
      (e
        .panel(c, l, u, d, o, s, a, 0, 0, 0.5, 1)
        .panel(u, d, r, i, o, s, a, 0.5, 0, 1, 1),
        e
          .panel(r, i, u, d, o, s, a, 1, 0, 0.5, 1)
          .panel(u, d, c, l, o, s, a, 0.5, 0, 0, 1),
        e.pole(r, i, 0.12, 0, 10));
    }
  (yield,
    fT(e, t, Xw, Qw, !0),
    yield,
    fT(e, t, $w, Zw, !1),
    e.col(16777215).mat(0.85, 0, 0.03, G),
    sT(e, Jw, Zw, -32.1, 110, aT, n, r),
    e.mat(0.85, 0, 0, 0).col(16777215));
}
function yhe(e, t) {
  (e.col(13947338).mat(0.85, 0, 0, 0),
    sT(e, Jw, Qw, Yw, $w, aT, t.c(`paving`), 0),
    e.col(5208629));
  for (let t of [-1, 1])
    sT(e, eT.x0, t < 0 ? -eT.zb : eT.za, eT.x1, t < 0 ? -eT.za : eT.zb, oT);
  (e.col(rT),
    sT(e, Jw, Xw, tT, Qw, 0.03),
    sT(e, Jw, $w, tT, Zw, 0.03),
    e.col(16777215));
}
function bhe(e) {
  return { x: Gw.x, z: Gw.z, gy: e.groundHeight(Gw.x, Gw.z), facing: 0 };
}
var xhe = {
    id: `marunouchi-plaza`,
    site: bhe,
    name: {
      ja: `丸の内駅前広場`,
      zh: `丸之內站前廣場`,
      en: `Marunouchi Station Plaza`,
    },
    near: 200,
    build: vhe,
    far: yhe,
    bounds: () => [Jw, Xw, Yw, 110],
    farBoxes: () => [],
  },
  pT = { x: 40, z: 6 },
  mT = (e) => e - pT.x,
  hT = (e) => e - pT.z,
  gT = -58,
  _T = 72,
  vT = 20.6,
  She = 44,
  yT = 32,
  bT = 7.6,
  xT = 13.6,
  Che = (e) => {
    let t = (e - 7) / 65;
    return 20 + 4.5 * (1 - t * t);
  },
  ST = 34,
  CT = 60.5,
  wT = 62.75,
  TT = -56,
  ET = 70,
  DT = { x0: 45, x1: 49, z0: 6, z1: 64 },
  whe = 3947840,
  The = 12170669,
  OT = 0.04,
  kT = 0.17;
function AT(e, t, n, r, i, a, o = e.white, s = 0) {
  e.flat(mT(t), hT(n), mT(r), hT(i), a, o, s, s);
}
var jT = 10;
function MT(e, t) {
  let n = ((((t - gT) % jT) + jT) % jT) / jT;
  return (
    xT +
    (Che(t) - xT) * e ** 1.5 -
    0.45 * Math.sin(Math.PI * n) * Math.sin(Math.PI * Math.min(1, e * 1.15))
  );
}
