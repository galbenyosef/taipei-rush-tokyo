// tokyo/assets/region-tokyo-A7LxHjud 172 — col
// Lines 70731-71007 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function pT(e, t, n, r, i = 7, a = -1, o = cT) {
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
    mT(
      e,
      t.c(`signBus`),
      n - a * 0.5,
      r + i / 2 + 1.2,
      a < 0 ? -Math.PI / 2 : Math.PI / 2,
      o,
    ));
}
function mT(e, t, n, r, i, a = cT, o = 1.8) {
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
function hT(e, t, n, r, i) {
  (e.col(oT).mat(0.9, 0, 0, 0), uT(e, Zw, n, iT, r, 0.03));
  let a = n + (i ? 9 : 10),
    o = r - (i ? 10 : 9);
  (dT(e, aT.x0, a, aT.x1, o, 16777215, t.c(`lawn`), e.coarse ? 11 : 5.5),
    e.col(3103274).mat(0.95, 0, 0, 0),
    e.box(
      Yw(aT.x0 + 1),
      lT,
      Xw(a + 1),
      Yw(aT.x1 - 1),
      0.9700000000000001,
      Xw(a + 2.2),
    ),
    e.box(
      Yw(aT.x0 + 1),
      lT,
      Xw(o - 2.2),
      Yw(aT.x1 - 1),
      0.9700000000000001,
      Xw(o - 1),
    ));
  let s = [a + (o - a) * 0.3, a + (o - a) * 0.7];
  for (let t = 0; t < 2; t++)
    (KC(e, Yw((aT.x0 + aT.x1) / 2), Xw(s[t]), 10 + t, (i ? 31 : 37) + t),
      e.pole(Yw((aT.x0 + aT.x1) / 2), Xw(s[t]), 0.35, 0, 4));
  let c = (a + o) / 2;
  if (
    (pT(e, t, Yw(-43.4), Xw(c + (i ? -7 : 7)), 8, -1),
    mT(e, t.c(`signTaxi`), Yw(-43.8), Xw(c + (i ? 11 : -11)), -Math.PI / 2),
    !e.coarse)
  ) {
    e.col(15263970).mat(0.7, 0, 0.02, 0);
    let t = 0.045;
    for (let n = a - 3; n < o + 3; n += 4)
      uT(e, aT.x1 + 5, n, aT.x1 + 5.15, n + 2.2, t);
    (uT(e, aT.x0 - 0.1, a - 4.2, aT.x1 + 0.1, a - 4.05, t),
      uT(e, aT.x0 - 0.1, o + 4.05, aT.x1 + 0.1, o + 4.2, t));
    for (let n = aT.x1 + 0.6; n < -45.6; n += 1.2)
      uT(e, n, c - 2, n + 0.6, c + 2, t);
    e.col(14726144).mat(0.7, 0, 0.02, 0);
    let n = i ? c + 3 : a,
      r = i ? o : c - 3;
    uT(e, -47.9, n, -47.75, r, t);
    for (let i = n; i <= r; i += 5.5) uT(e, -47.9, i, iT, i + 0.15, t);
  }
  (e.col(16777215).mat(0.85, 0, 0.03, G),
    uT(e, iT, n, -32.1, r, cT, t.c(`paving`), e.coarse ? 16 : 4),
    e.col(sT).mat(0.85, 0, 0.04, 0),
    e.box(Yw(iT) - 0.3, 0, Xw(n), Yw(iT), 0.13, Xw(r)));
}
function* Ahe(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 16 : 4;
  (e.col(16777215).mat(0.85, 0, 0.03, G), uT(e, Zw, tT, -32.1, nT, cT, n, r));
  for (let n of [-1, 1]) {
    let r = n < 0 ? -rT.zb : rT.za,
      i = n < 0 ? -rT.za : rT.zb;
    (dT(e, rT.x0, r, rT.x1, i, 16777215, t.c(`lawn`), e.coarse ? 13.5 : 4.5),
      fT(e, rT.x0 - 0.6, r - 0.6, rT.x1 + 0.6, r - 0.6),
      fT(e, rT.x0 - 0.6, i + 0.6, rT.x1 + 0.6, i + 0.6),
      fT(e, rT.x0 - 0.6, r - 0.6, rT.x0 - 0.6, i + 0.6),
      fT(e, rT.x1 + 0.6, r - 0.6, rT.x1 + 0.6, i + 0.6));
  }
  if ((yield, !e.coarse))
    for (let t = rT.x0 + 2; t <= rT.x1; t += 8.5)
      for (let n of [-1, 1])
        (qC(e, Yw(t), 0, Xw(n * 10.5), 5.2),
          e.pole(Yw(t), Xw(n * 10.5), 0.12, 0, 5));
  if (!e.coarse)
    for (let t of [-rT.zb - 2.5, rT.zb + 2.5])
      for (let n of [rT.x0 + 2, rT.x1 - 2])
        (qC(e, Yw(n), 0, Xw(t), 5.2), e.pole(Yw(n), Xw(t), 0.12, 0, 5));
  for (let t of [-37.5, 37.5])
    for (let n = -69, r = 0; n <= rT.x1; n += 12, r++)
      (KC(e, Yw(n), Xw(t), 9 + (r % 3), 50 + r + (t > 0 ? 20 : 0)),
        e.pole(Yw(n), Xw(t), 0.35, 0, 4));
  (fT(e, -73.4, -36, -73.4, -11), fT(e, -73.4, 11, -73.4, 36), yield);
  for (let t of [-1, 1]) {
    let n = t < 0 ? -34 : 22,
      r = t < 0 ? -22 : 34;
    if (
      (e.col(sT).mat(0.85, 0, 0.04, G),
      e.box(Yw(-41), 0, Xw(n), Yw(-36.5), 0.45, Xw(r)),
      e.col(3879720).mat(1, 0, 0, 0),
      uT(e, -40.8, n + 0.2, -36.7, r - 0.2, 0.46),
      e.solid(Yw(-41), Xw(n), Yw(-36.5), Xw(r), 0, 0.45, `prop`),
      !e.coarse)
    )
      for (let i = 0; i < 2; i++) {
        let a = n + 3.4 + i * (r - n - 6.8),
          o = e.sub(Yw(-38.8), 0.45, Xw(a), 0);
        (GC(e, 0, 0, 4.6 + i * 0.6, 70 + i + (t > 0 ? 10 : 0)), e.leave(o));
      }
  }
  if (!e.coarse)
    for (let n of [-1, 1]) {
      let r = Yw(-39),
        i = Xw(n * 6.5);
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
    hT(e, t, $w, tT, !0),
    yield,
    hT(e, t, nT, eT, !1),
    e.col(16777215).mat(0.85, 0, 0.03, G),
    uT(e, Zw, eT, -32.1, 110, cT, n, r),
    e.mat(0.85, 0, 0, 0).col(16777215));
}
function jhe(e, t) {
  (e.col(13947338).mat(0.85, 0, 0, 0),
    uT(e, Zw, tT, Qw, nT, cT, t.c(`paving`), 0),
    e.col(5208629));
  for (let t of [-1, 1])
    uT(e, rT.x0, t < 0 ? -rT.zb : rT.za, rT.x1, t < 0 ? -rT.za : rT.zb, lT);
  (e.col(oT),
    uT(e, Zw, $w, iT, tT, 0.03),
    uT(e, Zw, nT, iT, eT, 0.03),
    e.col(16777215));
}
function Mhe(e) {
  return { x: Jw.x, z: Jw.z, gy: e.groundHeight(Jw.x, Jw.z), facing: 0 };
}
var Nhe = {
    id: `marunouchi-plaza`,
    site: Mhe,
    name: {
      ja: `丸の内駅前広場`,
      zh: `丸之內站前廣場`,
      en: `Marunouchi Station Plaza`,
    },
    near: 200,
    build: Ahe,
    far: jhe,
    bounds: () => [Zw, $w, Qw, 110],
    farBoxes: () => [],
  },
  gT = { x: 40, z: 6 },
  _T = (e) => e - gT.x,
  vT = (e) => e - gT.z,
  yT = -58,
  bT = 72,
  xT = 20.6,
  Phe = 44,
  ST = 32,
  CT = 7.6,
  wT = 13.6,
  Fhe = (e) => {
    let t = (e - 7) / 65;
    return 20 + 4.5 * (1 - t * t);
  },
  TT = 34,
  ET = 60.5,
  DT = 62.75,
  OT = -56,
  kT = 70,
  AT = { x0: 45, x1: 49, z0: 6, z1: 64 },
  Ihe = 3947840,
  Lhe = 12170669,
  jT = 0.04,
  MT = 0.17;
function NT(e, t, n, r, i, a, o = e.white, s = 0) {
  e.flat(_T(t), vT(n), _T(r), vT(i), a, o, s, s);
}
var PT = 10;
function FT(e, t) {
  let n = ((((t - yT) % PT) + PT) % PT) / PT;
  return (
    wT +
    (Fhe(t) - wT) * e ** 1.5 -
    0.45 * Math.sin(Math.PI * n) * Math.sin(Math.PI * Math.min(1, e * 1.15))
  );
}
