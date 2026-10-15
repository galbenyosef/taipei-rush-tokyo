// tokyo/assets/region-tokyo-BcM3fReU 218 — math
// Lines 89868-90216 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function jY(e, t) {
  let n = (n, r, i, a, o, s, c) => DY(e, t, n, r, i, a, o, s, c);
  (n(-20, 862, 46, 30, 213, 11, { glass: [0.42, 0.5, 0.56], crown: 6 }),
    n(28, 848, 40, 34, 193, 12, { crown: 8 }),
    n(-84, 874, 44, 36, 216, 13, { glass: [0.5, 0.52, 0.54] }),
    n(84, 886, 42, 32, 173, 14, { glass: [0.3, 0.36, 0.42], crown: 5 }),
    n(-140, 904, 36, 36, 117, 15),
    n(17, 962, 46, 46, 235, 16, { glass: [0.46, 0.52, 0.58], crown: 10 }),
    n(-560, 612, 48, 48, 255, 21, {
      taper: 0.25,
      crown: 12,
      glass: [0.4, 0.48, 0.55],
    }),
    n(-596, 668, 46, 40, 266, 22, { crown: 8 }),
    n(-530, 470, 40, 40, 147, 23, { glass: [0.55, 0.55, 0.52] }),
    n(-698, 945, 52, 52, 325, 24, {
      taper: 0.2,
      glass: [0.5, 0.55, 0.58],
      crown: 6,
    }),
    n(-996, 1042, 60, 52, 238, 25, { glass: [0.3, 0.33, 0.36], crown: 14 }),
    n(-930, 820, 44, 44, 248, 26, { taper: 0.18, glass: [0.42, 0.5, 0.56] }),
    [
      [724, 709, 192],
      [760, 660, 178],
      [700, 560, 165],
      [860, 470, 170],
      [931, 466, 190],
      [905, 380, 150],
      [990, 690, 195],
      [1010, 560, 168],
      [820, 300, 140],
      [1180, 520, 180],
      [1230, 640, 170],
      [1150, 760, 155],
      [1280, 420, 160],
    ].forEach(([e, t, r], i) =>
      n(e, t, 30 + (i % 3) * 4, 30 + ((i + 1) % 3) * 4, r, 31 + i, {
        glass: [0.62, 0.62, 0.6],
        crown: 4,
      }),
    ),
    [
      [-2351, 388, 60, 40, 243],
      [-2420, 470, 50, 50, 235],
      [-2312, 330, 50, 44, 210],
      [-2290, 392, 46, 40, 225],
      [-2276, 300, 42, 42, 209],
      [-2236, 268, 34, 26, 204],
      [-2306, 438, 44, 40, 178],
      [-2380, 300, 40, 40, 200],
      [-2200, 650, 34, 34, 240],
      [-2340, 520, 42, 40, 186],
    ].forEach(([e, t, r, i, a], o) =>
      n(e, t, r, i, a, 41 + o, {
        glass: o % 2 ? [0.5, 0.52, 0.54] : [0.36, 0.42, 0.48],
        crown: o === 0 ? 30 : 6,
      }),
    ),
    n(-2038, -1199, 54, 54, 240, 61, { glass: [0.55, 0.55, 0.53] }),
    n(-640, -760, 46, 40, 142, 62, { glass: [0.5, 0.52, 0.54] }));
  let r = -866,
    i = -688,
    a = t.height(r, i);
  (e.setColor(0.86, 0.87, 0.86),
    e.cyl(r, a, i, 62, 16, 20, !1),
    e.cyl(r, a + 16, i, 62, 18, 20, !0, 34));
}
var MY = 48,
  NY = Math.atan2(806, -1384),
  PY = 64,
  FY = 256,
  IY = 1004,
  LY = 1005,
  RY = new Float64Array(98),
  zY = new Float64Array(98);
function BY(e, t, n, r, i) {
  let a = 2 * (n - t),
    o = 2 * t - n,
    s = r / 3;
  for (let t = 0; t <= r; t++) {
    let n = Math.min(2, Math.floor(t / s)),
      c = (t - n * s) / s,
      l = NY + (n * 2 * Math.PI) / 3,
      u = l + (2 * Math.PI) / 3,
      d = NY + (2 * Math.PI * t) / r,
      f = a * (Math.cos(l) * (1 - c) + Math.cos(u) * c) + o * Math.cos(d),
      p = a * (Math.sin(l) * (1 - c) + Math.sin(u) * c) + o * Math.sin(d);
    if (i) {
      let e = Math.hypot(f, p) || 1;
      ((f += (f / e) * i), (p += (p / e) * i));
    }
    ((e[t * 2] = f), (e[t * 2 + 1] = p));
  }
}
function VY(e, t) {
  let n = 0;
  for (let r = 0; r < t; r++)
    n += Math.hypot(e[r * 2 + 2] - e[r * 2], e[r * 2 + 3] - e[r * 2 + 1]);
  return n;
}
function HY(e, t, n, r, i, a = {}, o = 0) {
  let s = a.sides ?? MY,
    c = a.diamonds ?? 0,
    l = a.aspect ?? 1.35,
    u = a.off ?? 0,
    d = c > 0,
    [f, p, m] = e.emit;
  (d && e.setEmit(f, p, a.kind ?? 1004),
    BY(RY, i[0][1], i[0][2] ?? i[0][1], s, u));
  let h = VY(RY, s);
  for (let a = 1; a < i.length; a++) {
    let [f, ,] = i[a - 1],
      [p, m, g] = i[a];
    BY(zY, m, g ?? m, s, u);
    let _ = VY(zY, s),
      v = d ? o + ((p - f) * c) / (l * 0.5 * (h + _)) : 0,
      y = n + f,
      b = n + p;
    for (let n = 0; n < s; n++) {
      let i = n + 1,
        a = d
          ? [(i / s) * (c / PY), o / FY, (n / s) * (c / PY), v / FY]
          : void 0;
      e.quad(
        t + RY[i * 2],
        y,
        r + RY[i * 2 + 1],
        t + RY[n * 2],
        y,
        r + RY[n * 2 + 1],
        t + zY[n * 2],
        b,
        r + zY[n * 2 + 1],
        t + zY[i * 2],
        b,
        r + zY[i * 2 + 1],
        a,
      );
    }
    (RY.set(zY), (h = _), (o = v));
  }
  return (e.setEmit(f, p, m), o);
}
function UY(e, t, n, r, i, a) {
  for (let o = 0; o < a; o++) {
    let s = NY + (o / a) * Math.PI * 2,
      c = NY + ((o + 1) / a) * Math.PI * 2;
    e.tri(
      t,
      n,
      r,
      t + Math.cos(c) * i,
      n,
      r + Math.sin(c) * i,
      t + Math.cos(s) * i,
      n,
      r + Math.sin(s) * i,
    );
  }
}
function WY() {
  let e = [];
  for (let t of [
    0, 10, 24, 42, 64, 90, 120, 152, 186, 220, 252, 280, 302, 318, 330,
  ]) {
    let n = Math.min(1, t / 320),
      r = 16.5 + 22.76 * (1 - n) ** 1.55,
      i = 16.5 + 3.13 * (1 - n * n) - (t > 320 ? (t - 320) * 0.03 : 0);
    e.push([t, i, Math.max(i, r)]);
  }
  return e;
}
var GY = WY(),
  KY = [
    [330, 16.2],
    [333, 18.6],
    [336, 21.6],
    [339.5, 24.6],
  ],
  qY = [
    [354.5, 24.6],
    [357, 23],
    [360, 19.6],
    [363, 16.4],
    [366, 14.6],
  ],
  JY = [
    [366, 14.6],
    [385, 13.9],
    [405, 13.2],
    [425, 12.5],
    [440, 12],
  ],
  YY = [
    [440, 12],
    [442, 13.8],
    [444.5, 16],
  ],
  XY = [
    [451.5, 16],
    [454, 14.4],
    [457, 11.6],
    [460, 10.6],
  ],
  ZY = [
    [460, 10.6],
    [475, 9.9],
    [490, 9.2],
    [494, 9.4],
    [497, 9.8],
    [499, 8.6],
    [500, 7.2],
  ],
  QY = [];
for (let e = 500, t = 0; e < 612; t++) {
  let n = 6.4 - t * 0.2,
    r = e + 11.5;
  (QY.push([e, r, n]), (e = r + 1.6));
}
var $Y = QY[QY.length - 1][1];
function eX(e, t, n, r, i, a) {
  let o = { diamonds: 15, aspect: 1.45, off: i, kind: a };
  (HY(e, t, n, r, KY, o, HY(e, t, n, r, GY, o)),
    HY(e, t, n, r, JY, o, HY(e, t, n, r, qY, o)),
    HY(e, t, n, r, YY, o));
  let s = HY(e, t, n, r, XY, o);
  HY(e, t, n, r, ZY, { ...o, diamonds: 12 }, s);
}
function tX(e, t, n, r, i, a) {
  for (let [o, s, c] of QY)
    HY(
      e,
      t,
      n,
      r,
      [
        [o, c + i],
        [s, c + i],
      ],
      { sides: 12, diamonds: 6, aspect: 1.6, kind: a },
    );
}
function nX(e, t) {
  let { x: n, z: r } = _Y,
    i = t.height(n, r);
  (e.setColor(0.62, 0.62, 0.6).setEmit(0, 0, 701),
    e.box(n - 10, i, r + 26, 150, 32, 34),
    e.noEmit(),
    e.setColor(0.86, 0.89, 0.92),
    eX(e, n, i, r, 0, IY));
  let a = (t, a, o) => {
      (e.setColor(0.21, 0.2, 0.19).setEmit(1.7, 0),
        HY(e, n, i, r, [
          [t, o],
          [a, o],
        ]));
    },
    o = (t, a, o, s) => {
      (e.setColor(0.93, 0.95, 0.97).setEmit(s, 0),
        HY(e, n, i, r, [
          [t, o],
          [t + a, o],
        ]));
    };
  (a(339.5, 354.5, 24.6),
    o(339.5, 1.4, 25.1, 2.6),
    o(344.6, 0.7, 24.95, 0.6),
    o(349.6, 0.7, 24.95, 0.6),
    o(353.3, 1.2, 25.1, 2.6),
    a(444.5, 451.5, 16),
    o(444.5, 1, 16.45, 2.4),
    o(450.6, 0.9, 16.45, 2.4),
    e.noEmit(),
    e.setColor(0.7, 0.72, 0.75),
    UY(e, n, i + 500, r, 7.2, MY),
    e.setColor(0.84, 0.86, 0.88),
    tX(e, n, i, r, 0, IY),
    e.setColor(0.42, 0.44, 0.47));
  for (let t = 0; t + 1 < QY.length; t++) {
    let [, a, o] = QY[t],
      [s, , c] = QY[t + 1];
    HY(
      e,
      n,
      i,
      r,
      [
        [a, o],
        [a + 0.4, o - 1.2],
        [s - 0.4, c - 1.2],
        [s, c],
      ],
      { sides: 12 },
    );
  }
  let s = QY[QY.length - 1][2];
  (e.setColor(0.8, 0.82, 0.84),
    HY(
      e,
      n,
      i,
      r,
      [
        [$Y, s],
        [$Y + 1, s - 0.8],
        [$Y + 1.2, 1.4],
        [634, 0.35],
      ],
      { sides: 8 },
    ),
    UY(e, n, i + 634, r, 0.35, 8));
  let c = (t, a, o) => {
    e.setColor(1, 0.12, 0.06).setEmit(7, 2, 0);
    for (let s = 0; s < o; s++) {
      let c = NY + (s / o) * Math.PI * 2;
      e.box(
        n + Math.cos(c) * (a + 0.9),
        i + t,
        r + Math.sin(c) * (a + 0.9),
        1.8,
        1.8,
        1.8,
      );
    }
    e.noEmit();
  };
  (c(495, 9.6, 3), c(QY[4][1] - 3, QY[4][2], 2), c(633.2, 0.4, 1));
}
var rX = [
    [0.7, 0.69, 0.66],
    [0.66, 0.63, 0.57],
    [0.58, 0.58, 0.57],
    [0.5, 0.42, 0.36],
    [0.62, 0.6, 0.55],
    [0.44, 0.45, 0.47],
    [0.74, 0.72, 0.68],
  ],
  iX = 14,
  aX = (e, t) =>
    e > -502 && e < (t < -640 ? 575 : 636) + iX && t > -1544 && t < 844,
  oX = (e, t, n, r, i) => Math.abs(e - n) < i && Math.abs(t - r) < i;
function sX(e) {
  if (e > -560) return [565, 640];
  let t = dY(e);
  if (t) return t;
  let n = Math.min(1, Math.max(0, (e + 560) / -460));
  return [565 + 225 * n, 640 + 240 * n];
}
