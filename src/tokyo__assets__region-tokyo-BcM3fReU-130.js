// tokyo__assets__region-tokyo-BcM3fReU 130 — col
// Lines 58099-58375 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function WA(e, t, n, r, i = 7, a = -1, o = zA) {
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
    GA(
      e,
      t.c(`signBus`),
      n - a * 0.5,
      r + i / 2 + 1.2,
      a < 0 ? -Math.PI / 2 : Math.PI / 2,
      o,
    ));
}
function GA(e, t, n, r, i, a = zA, o = 1.8) {
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
  e.col(16777215).mat(0.5, 0, 0.35, Y);
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
function KA(e, t, n, r, i) {
  (e.col(LA).mat(0.9, 0, 0, 0), VA(e, OA, n, FA, r, 0.03));
  let a = n + (i ? 9 : 10),
    o = r - (i ? 10 : 9);
  (HA(e, IA.x0, a, IA.x1, o, 16777215, t.c(`lawn`), e.coarse ? 11 : 5.5),
    e.col(3103274).mat(0.95, 0, 0, 0),
    e.box(
      EA(IA.x0 + 1),
      BA,
      DA(a + 1),
      EA(IA.x1 - 1),
      0.9700000000000001,
      DA(a + 2.2),
    ),
    e.box(
      EA(IA.x0 + 1),
      BA,
      DA(o - 2.2),
      EA(IA.x1 - 1),
      0.9700000000000001,
      DA(o - 1),
    ));
  let s = [a + (o - a) * 0.3, a + (o - a) * 0.7];
  for (let t = 0; t < 2; t++)
    (EO(e, EA((IA.x0 + IA.x1) / 2), DA(s[t]), 10 + t, (i ? 31 : 37) + t),
      e.pole(EA((IA.x0 + IA.x1) / 2), DA(s[t]), 0.35, 0, 4));
  let c = (a + o) / 2;
  if (
    (WA(e, t, EA(-43.4), DA(c + (i ? -7 : 7)), 8, -1),
    GA(e, t.c(`signTaxi`), EA(-43.8), DA(c + (i ? 11 : -11)), -Math.PI / 2),
    !e.coarse)
  ) {
    e.col(15263970).mat(0.7, 0, 0.02, 0);
    let t = 0.045;
    for (let n = a - 3; n < o + 3; n += 4)
      VA(e, IA.x1 + 5, n, IA.x1 + 5.15, n + 2.2, t);
    (VA(e, IA.x0 - 0.1, a - 4.2, IA.x1 + 0.1, a - 4.05, t),
      VA(e, IA.x0 - 0.1, o + 4.05, IA.x1 + 0.1, o + 4.2, t));
    for (let n = IA.x1 + 0.6; n < -45.6; n += 1.2)
      VA(e, n, c - 2, n + 0.6, c + 2, t);
    e.col(14726144).mat(0.7, 0, 0.02, 0);
    let n = i ? c + 3 : a,
      r = i ? o : c - 3;
    VA(e, -47.9, n, -47.75, r, t);
    for (let i = n; i <= r; i += 5.5) VA(e, -47.9, i, FA, i + 0.15, t);
  }
  (e.col(16777215).mat(0.85, 0, 0.03, Y),
    VA(e, FA, n, -32.1, r, zA, t.c(`paving`), e.coarse ? 16 : 4),
    e.col(RA).mat(0.85, 0, 0.04, 0),
    e.box(EA(FA) - 0.3, 0, DA(n), EA(FA), 0.13, DA(r)));
}
function* qA(e, t) {
  let n = t.c(`paving`),
    r = e.coarse ? 16 : 4;
  (e.col(16777215).mat(0.85, 0, 0.03, Y), VA(e, OA, MA, -32.1, NA, zA, n, r));
  for (let n of [-1, 1]) {
    let r = n < 0 ? -PA.zb : PA.za,
      i = n < 0 ? -PA.za : PA.zb;
    (HA(e, PA.x0, r, PA.x1, i, 16777215, t.c(`lawn`), e.coarse ? 13.5 : 4.5),
      UA(e, PA.x0 - 0.6, r - 0.6, PA.x1 + 0.6, r - 0.6),
      UA(e, PA.x0 - 0.6, i + 0.6, PA.x1 + 0.6, i + 0.6),
      UA(e, PA.x0 - 0.6, r - 0.6, PA.x0 - 0.6, i + 0.6),
      UA(e, PA.x1 + 0.6, r - 0.6, PA.x1 + 0.6, i + 0.6));
  }
  if ((yield, !e.coarse))
    for (let t = PA.x0 + 2; t <= PA.x1; t += 8.5)
      for (let n of [-1, 1])
        (OO(e, EA(t), 0, DA(n * 10.5), 5.2),
          e.pole(EA(t), DA(n * 10.5), 0.12, 0, 5));
  if (!e.coarse)
    for (let t of [-PA.zb - 2.5, PA.zb + 2.5])
      for (let n of [PA.x0 + 2, PA.x1 - 2])
        (OO(e, EA(n), 0, DA(t), 5.2), e.pole(EA(n), DA(t), 0.12, 0, 5));
  for (let t of [-37.5, 37.5])
    for (let n = -69, r = 0; n <= PA.x1; n += 12, r++)
      (EO(e, EA(n), DA(t), 9 + (r % 3), 50 + r + (t > 0 ? 20 : 0)),
        e.pole(EA(n), DA(t), 0.35, 0, 4));
  (UA(e, -73.4, -36, -73.4, -11), UA(e, -73.4, 11, -73.4, 36), yield);
  for (let t of [-1, 1]) {
    let n = t < 0 ? -34 : 22,
      r = t < 0 ? -22 : 34;
    if (
      (e.col(RA).mat(0.85, 0, 0.04, Y),
      e.box(EA(-41), 0, DA(n), EA(-36.5), 0.45, DA(r)),
      e.col(3879720).mat(1, 0, 0, 0),
      VA(e, -40.8, n + 0.2, -36.7, r - 0.2, 0.46),
      e.solid(EA(-41), DA(n), EA(-36.5), DA(r), 0, 0.45, `prop`),
      !e.coarse)
    )
      for (let i = 0; i < 2; i++) {
        let a = n + 3.4 + i * (r - n - 6.8),
          o = e.sub(EA(-38.8), 0.45, DA(a), 0);
        (TO(e, 0, 0, 4.6 + i * 0.6, 70 + i + (t > 0 ? 10 : 0)), e.leave(o));
      }
  }
  if (!e.coarse)
    for (let n of [-1, 1]) {
      let r = EA(-39),
        i = DA(n * 6.5);
      (e.col(14277076).mat(0.35, 0.7, 0, 0),
        e.cylY(r, i, 0, 11, 0.09, 8, 0.06),
        e.lathe(r, i, [0.01, 11, 0.16, 11.15, 0.01, 11.35], 6),
        e
          .col(10130826)
          .mat(0.8, 0, 0, 0)
          .box(r - 0.4, 0, i - 0.4, r + 0.4, 0.3, i + 0.4),
        e.col(16777215).mat(0.8, 0, 0.15, Y));
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
    KA(e, t, AA, MA, !0),
    yield,
    KA(e, t, NA, jA, !1),
    e.col(16777215).mat(0.85, 0, 0.03, Y),
    VA(e, OA, jA, -32.1, 110, zA, n, r),
    e.mat(0.85, 0, 0, 0).col(16777215));
}
function JA(e, t) {
  (e.col(13947338).mat(0.85, 0, 0, 0),
    VA(e, OA, MA, kA, NA, zA, t.c(`paving`), 0),
    e.col(5208629));
  for (let t of [-1, 1])
    VA(e, PA.x0, t < 0 ? -PA.zb : PA.za, PA.x1, t < 0 ? -PA.za : PA.zb, BA);
  (e.col(LA),
    VA(e, OA, AA, FA, MA, 0.03),
    VA(e, OA, NA, FA, jA, 0.03),
    e.col(16777215));
}
function YA(e) {
  return { x: TA.x, z: TA.z, gy: e.groundHeight(TA.x, TA.z), facing: 0 };
}
var XA = {
    id: `marunouchi-plaza`,
    site: YA,
    name: {
      ja: `丸の内駅前広場`,
      zh: `丸之內站前廣場`,
      en: `Marunouchi Station Plaza`,
    },
    near: 200,
    build: qA,
    far: JA,
    bounds: () => [OA, AA, kA, 110],
    farBoxes: () => [],
  },
  ZA = { x: 40, z: 6 },
  QA = (e) => e - ZA.x,
  $A = (e) => e - ZA.z,
  ej = -58,
  tj = 72,
  nj = 20.6,
  rj = 44,
  ij = 32,
  aj = 7.6,
  oj = 13.6,
  sj = (e) => {
    let t = (e - 7) / 65;
    return 20 + 4.5 * (1 - t * t);
  },
  cj = 34,
  lj = 60.5,
  uj = 62.75,
  dj = -56,
  fj = 70,
  pj = { x0: 45, x1: 49, z0: 6, z1: 64 },
  mj = 3947840,
  hj = 12170669,
  gj = 0.04,
  _j = 0.17;
function vj(e, t, n, r, i, a, o = e.white, s = 0) {
  e.flat(QA(t), $A(n), QA(r), $A(i), a, o, s, s);
}
var yj = 10;
function bj(e, t) {
  let n = ((((t - ej) % yj) + yj) % yj) / yj;
  return (
    oj +
    (sj(t) - oj) * e ** 1.5 -
    0.45 * Math.sin(Math.PI * n) * Math.sin(Math.PI * Math.min(1, e * 1.15))
  );
}
