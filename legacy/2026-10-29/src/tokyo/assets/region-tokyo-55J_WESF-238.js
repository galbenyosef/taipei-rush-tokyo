// tokyo/assets/region-tokyo-55J_WESF 238 — math
// Lines 90433-90708 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var vxe = {
  id: `tokyo-dome-interior`,
  site: (e) => ({
    x: KP.x,
    z: KP.z,
    gy: e.groundHeight(KP.x, KP.z),
    facing: 0,
  }),
  name: { ja: `東京ドーム`, zh: `東京巨蛋`, en: `Tokyo Dome` },
  near: 60,
  interior: !0,
  build: _xe,
  far(e) {
    (e.col(DF).mat(1, 0, 0, TF), e.flat(-1, -1, 1, 1, 0.04));
  },
  bounds: () => [KP.x - 70, KP.z - 70, KP.x + 70, KP.z + 70],
  farBoxes: () => [],
  roofs: [{ lx0: -68, lz0: -68, lx1: 68, lz1: 68, y: 34 }],
  anchors: [
    {
      key: `tokyo-dome-field`,
      lx: CF[0] - 9,
      lz: CF[1] - 9,
      turn: 0,
      name: { zh: `東京巨蛋 球場`, en: `Tokyo Dome, the field` },
    },
    {
      key: `tokyo-dome-concourse`,
      lx: 70 + pF - 3,
      lz: FF,
      turn: 0,
      name: { zh: `東京巨蛋 2樓大廳`, en: `Tokyo Dome, 2F concourse` },
    },
  ],
};
r.add({ 東京巨蛋城: `東京ドームシティ` });
var zF = { x: -826, z: -720 },
  BF = (e) => e - zF.x,
  VF = (e) => e - zF.z,
  HF = (e, t, n, r) => [
    [BF(n), VF(t)],
    [BF(e), VF(t)],
    [BF(e), VF(r)],
    [BF(n), VF(r)],
  ],
  UF = { x0: -845, x1: -809, z0: -684, z1: -653, h: 14 },
  WF = { x0: -843, x1: -811, z0: -677, z1: -657 },
  yxe = [
    [UF.h, 128, 0],
    [128, 134, 2.7],
    [134, 140, 5.4],
    [140, 146, 8.1],
    [146, 155, 10.8],
  ],
  GF = { x0: -846, x1: -809, z0: -811, z1: -786, h: 50.4 },
  KF = { x0: -836, x1: -818, z0: -786, z1: -738, h: 16 },
  qF = 4.2,
  JF = -827,
  bxe = 50.5,
  YF = -754,
  XF = 30,
  ZF = { x0: -819.5, x1: -815.6, z0: -733, z1: -709, y: 6.4 },
  xxe = [
    [-813, 7.4, -712],
    [-813, 7.4, -724],
    [-812.6, 10, -742],
    [-812.4, 17, -760],
    [-812.6, 25, -778],
    [-813.4, 29, -792],
    [-818, 30.5, -798],
    [-830, 31, -802],
    [-842, 31, -803.5],
    [-856, 33, -804.5],
    [-872, 45, -804.6],
    [-890, 60, -804.6],
    [-908, 75, -804.6],
    [-918, 80.5, -805],
    [-926, 81, -806.2],
    [-930, 80.5, -808.2],
    [-926, 79.5, -810.3],
    [-918, 74, -810.5],
    [-911, 52, -810.5],
    [-905, 26, -810.5],
    [-897, 11, -810.5],
    [-887, 13.5, -810.5],
    [-877, 24, -810.5],
    [-867, 17, -810.4],
    [-858, 29, -810],
    [-850, 39, -808.4],
    [-838, 44.5, -803],
    [-827, 46.5, -796],
    [-821.5, 47, -786],
    [-820.5, 48.5, -774],
    [-821.5, 50, -763],
    [-825, 50.5, -756.4],
    [-831, 50.4, -753.4],
    [-835.6, 48.5, -747],
    [-836, 42, -737],
    [-835.5, 31, -722],
    [-834.5, 20, -707],
    [-832, 12, -694],
    [-824, 8, -688.5],
    [-816, 7.4, -692],
    [-813.2, 7.4, -701],
  ],
  QF = (e, t, n = 0) =>
    e > GF.x0 + n && e < GF.x1 - n && t > GF.z0 + n && t < GF.z1 - n,
  Sxe = (e, t, n = 0) =>
    e > KF.x0 - n && e < KF.x1 + n && t > KF.z0 - n && t < KF.z1 + n,
  $F = null;
function eI(e) {
  if (e === 2.5 && $F) return $F;
  let t = bye(
      xxe.map(([e, t, n]) => [BF(e), t, VF(n)]),
      e,
    ),
    n = { pts: t, F: xye(t) };
  return (e === 2.5 && ($F = n), n);
}
function Cxe() {
  let { pts: e } = eI(2.5),
    t = new Map(),
    n = tI(),
    r = e.length;
  for (let i = 0; i < r; i++) {
    let a = e[i],
      o = e[(i + 1) % r];
    if (QF(a[0] + zF.x, a[2] + zF.z) !== QF(o[0] + zF.x, o[2] + zF.z))
      for (let e of n) {
        let [n, r, i, s] = e.ab,
          c = i - n,
          l = s - r,
          u = o[0] - a[0],
          d = o[2] - a[2],
          f = u * l - d * c;
        if (Math.abs(f) < 1e-6) continue;
        let p = ((n - a[0]) * l - (r - a[2]) * c) / f,
          m = ((n - a[0]) * d - (r - a[2]) * u) / f;
        if (p < 0 || p > 1 || m < 0 || m > 1) continue;
        let h = a[1] + (o[1] - a[1]) * p,
          g = m * Math.hypot(c, l),
          _ = Math.floor((h - 3.4) / qF) * qF,
          v = Math.ceil((h + 3.4) / qF) * qF;
        (t.get(e.key) ?? t.set(e.key, []).get(e.key)).push([
          g - 3.4,
          g + 3.4,
          _,
          v,
        ]);
      }
  }
  return t;
}
function tI() {
  let e = HF(GF.x0, GF.z0, GF.x1, GF.z1);
  return e.map((t, n) => {
    let r = e[(n + 1) % 4];
    return { key: `f${n}`, ab: [t[0], t[1], r[0], r[1]] };
  });
}
function nI(e, t, n, r, i, a, o, s, c, l, u) {
  let d = Math.hypot(r - t, i - n),
    f = (r - t) / d,
    p = (i - n) / d,
    m = [
      ...new Set([
        a,
        o,
        ...s.flatMap((e) => [
          Math.max(a, Math.min(o, e[2])),
          Math.max(a, Math.min(o, e[3])),
        ]),
      ]),
    ].sort((e, t) => e - t);
  for (let r = 0; r + 1 < m.length; r++) {
    let i = m[r],
      a = m[r + 1];
    if (a - i < 0.001) continue;
    let o = s
        .filter((e) => e[2] <= i + 0.001 && e[3] >= a - 0.001)
        .map((e) => [Math.max(0, e[0]), Math.min(d, e[1])])
        .sort((e, t) => e[0] - t[0]),
      h = 0,
      g = (r, o) => {
        o - r < 0.001 ||
          e.wall(
            t + f * r,
            n + p * r,
            t + f * o,
            n + p * o,
            i,
            a,
            c,
            l,
            u,
            void 0,
            r,
          );
      };
    for (let [e, t] of o) (g(h, e), (h = Math.max(h, t)));
    g(h, d);
  }
  e.push().col(2764339).mat(0.8, 0, 0, 0);
  let h = p,
    g = -f;
  for (let [r, i, a, o] of s) {
    let s = (e, r, i) => [t + f * e + h * i, r, n + p * e + g * i];
    (tM(e, s(r, a, 0), s(i, a, 0), s(i, a, 0.6), s(r, a, 0.6), [0, 1, 0]),
      tM(e, s(r, o, 0), s(i, o, 0), s(i, o, 0.6), s(r, o, 0.6), [0, -1, 0]),
      tM(e, s(r, a, 0), s(r, o, 0), s(r, o, 0.6), s(r, a, 0.6), [f, 0, p]),
      tM(e, s(i, a, 0), s(i, o, 0), s(i, o, 0.6), s(i, a, 0.6), [-f, 0, -p]));
  }
  e.pop();
}
function* wxe(e, t) {
  let n = t.c(`office`),
    r = HF(UF.x0, UF.z0, UF.x1, UF.z1);
  (e.col(16777215).mat(0.4, 0.1, 0.3, G),
    zk(e, r, 0, 5, t.c(`doors`), 2.4, 5),
    e.col(16053230).mat(0.5, 0.1, 0.12, G | 32),
    zk(e, r, 5, UF.h - 0.6, n, 3.6, 4.2),
    e.col(15921644).mat(0.6, 0.05, 0.04, 1),
    Hk(e, r, 0.3, UF.h - 0.6, UF.h + 0.4),
    e.solid(BF(UF.x0), VF(UF.z0), BF(UF.x1), VF(UF.z1), 0, UF.h + 0.4),
    yield);
  for (let [t, r, i] of yxe) {
    let a = HF(WF.x0 + i, WF.z0, WF.x1 - i, WF.z1);
    (e.col(16250867).mat(0.45, 0.08, 0.2, G | 32),
      zk(e, a, t + 0.4, r - 0.5, n, e.coarse ? 7.2 : 3.6, e.coarse ? 7.2 : 3.6),
      e.col(16053488).mat(0.55, 0.05, 0.05, 1),
      Hk(e, a, 0.25, r - 0.5, r + 0.4));
  }
  if (!e.coarse) {
    e.col(16514040).mat(0.6, 0.05, 0.015, 1);
    for (let t of [WF.x0, WF.x1])
      for (let n of [WF.z0, WF.z1]) {
        let r = t === WF.x0 ? 1 : -1,
          i = n === WF.z0 ? 1 : -1;
        e.box(
          Math.min(BF(t), BF(t + r * 2.2)),
          UF.h + 0.4,
          Math.min(VF(n), VF(n) - i * 0.6),
          Math.max(BF(t), BF(t + r * 2.2)),
          127.5,
          Math.max(VF(n), VF(n) - i * 0.6),
        );
      }
    let t = (t, n, r, i) => {
        let a = Math.hypot(r - t, i - n),
          o = (r - t) / a,
          s = (i - n) / a,
          c = -s,
          l = o;
        for (let r = 3.1; r < a - 2.9; r += 1.8) {
          let i = t + o * r,
            a = n + s * r,
            u = Math.min(i - o * 0.3, i + o * 0.3 + c * 0.45),
            d = Math.max(i - o * 0.3, i + o * 0.3 + c * 0.45),
            f = Math.min(a - s * 0.3, a + s * 0.3 + l * 0.45),
            p = Math.max(a - s * 0.3, a + s * 0.3 + l * 0.45);
          e.box(u, UF.h + 0.4, f, d, 127.5, p);
        }
      },
      n = HF(WF.x0, WF.z0, WF.x1, WF.z1);
    for (let e = 0; e < 4; e++)
      t(n[e][0], n[e][1], n[(e + 1) % 4][0], n[(e + 1) % 4][1]);
    (e.col(14277334).mat(0.7, 0.1, 0, 0),
      e.box(BF(-830), 155.4, VF(-655), BF(-824), 158.5, VF(-647)),
      e.col(15263972).mat(0.5, 0.5, 0, 0),
      e.cylY(BF(-827), VF(-651), 158.5, 166, 0.25, 6, 0.12, !1));
  }
  (Wk(e, BF(WF.x0 + 11.4), 155.4, VF(WF.z0 + 0.6), 0.45),
    Wk(e, BF(WF.x1 - 11.4), 155.4, VF(WF.z1 - 0.6), 0.45),
    Wk(e, BF(-827), 166, VF(-651), 0.4),
    e.solid(BF(WF.x0), VF(WF.z0), BF(WF.x1), VF(WF.z1), UF.h, 155));
}
