// tokyo/assets/region-tokyo-A7LxHjud 389 — math
// Lines 141316-141565 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Y1(e, t, n, r, i, a = {}, o = 0) {
  let s = a.sides ?? z1,
    c = a.diamonds ?? 0,
    l = a.aspect ?? 1.35,
    u = a.off ?? 0,
    d = c > 0,
    [f, p, m] = e.emit;
  (d && e.setEmit(f, p, a.kind ?? 1004),
    q1(G1, i[0][1], i[0][2] ?? i[0][1], s, u));
  let h = J1(G1, s);
  for (let a = 1; a < i.length; a++) {
    let [f, ,] = i[a - 1],
      [p, m, g] = i[a];
    q1(K1, m, g ?? m, s, u);
    let _ = J1(K1, s),
      v = d ? o + ((p - f) * c) / (l * 0.5 * (h + _)) : 0,
      y = n + f,
      b = n + p;
    for (let n = 0; n < s; n++) {
      let i = n + 1,
        a = d
          ? [(i / s) * (c / V1), o / H1, (n / s) * (c / V1), v / H1]
          : void 0;
      e.quad(
        t + G1[i * 2],
        y,
        r + G1[i * 2 + 1],
        t + G1[n * 2],
        y,
        r + G1[n * 2 + 1],
        t + K1[n * 2],
        b,
        r + K1[n * 2 + 1],
        t + K1[i * 2],
        b,
        r + K1[i * 2 + 1],
        a,
      );
    }
    (G1.set(K1), (h = _), (o = v));
  }
  return (e.setEmit(f, p, m), o);
}
function X1(e, t, n, r, i, a) {
  for (let o = 0; o < a; o++) {
    let s = B1 + (o / a) * Math.PI * 2,
      c = B1 + ((o + 1) / a) * Math.PI * 2;
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
function jPe() {
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
var MPe = jPe(),
  NPe = [
    [330, 16.2],
    [333, 18.6],
    [336, 21.6],
    [339.5, 24.6],
  ],
  PPe = [
    [354.5, 24.6],
    [357, 23],
    [360, 19.6],
    [363, 16.4],
    [366, 14.6],
  ],
  FPe = [
    [366, 14.6],
    [385, 13.9],
    [405, 13.2],
    [425, 12.5],
    [440, 12],
  ],
  IPe = [
    [440, 12],
    [442, 13.8],
    [444.5, 16],
  ],
  LPe = [
    [451.5, 16],
    [454, 14.4],
    [457, 11.6],
    [460, 10.6],
  ],
  RPe = [
    [460, 10.6],
    [475, 9.9],
    [490, 9.2],
    [494, 9.4],
    [497, 9.8],
    [499, 8.6],
    [500, 7.2],
  ],
  Z1 = [];
for (let e = 500, t = 0; e < 612; t++) {
  let n = 6.4 - t * 0.2,
    r = e + 11.5;
  (Z1.push([e, r, n]), (e = r + 1.6));
}
var Q1 = Z1[Z1.length - 1][1];
function $1(e, t, n, r, i, a) {
  let o = { diamonds: 15, aspect: 1.45, off: i, kind: a };
  (Y1(e, t, n, r, NPe, o, Y1(e, t, n, r, MPe, o)),
    Y1(e, t, n, r, FPe, o, Y1(e, t, n, r, PPe, o)),
    Y1(e, t, n, r, IPe, o));
  let s = Y1(e, t, n, r, LPe, o);
  Y1(e, t, n, r, RPe, { ...o, diamonds: 12 }, s);
}
function e0(e, t, n, r, i, a) {
  for (let [o, s, c] of Z1)
    Y1(
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
function zPe(e, t) {
  let { x: n, z: r } = S1,
    i = t.height(n, r);
  (e.setColor(0.62, 0.62, 0.6).setEmit(0, 0, 701),
    e.box(n - 10, i, r + 26, 150, 32, 34),
    e.noEmit(),
    e.setColor(0.86, 0.89, 0.92),
    $1(e, n, i, r, 0, U1));
  let a = (t, a, o) => {
      (e.setColor(0.21, 0.2, 0.19).setEmit(1.7, 0),
        Y1(e, n, i, r, [
          [t, o],
          [a, o],
        ]));
    },
    o = (t, a, o, s) => {
      (e.setColor(0.93, 0.95, 0.97).setEmit(s, 0),
        Y1(e, n, i, r, [
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
    X1(e, n, i + 500, r, 7.2, z1),
    e.setColor(0.84, 0.86, 0.88),
    e0(e, n, i, r, 0, U1),
    e.setColor(0.42, 0.44, 0.47));
  for (let t = 0; t + 1 < Z1.length; t++) {
    let [, a, o] = Z1[t],
      [s, , c] = Z1[t + 1];
    Y1(
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
  let s = Z1[Z1.length - 1][2];
  (e.setColor(0.8, 0.82, 0.84),
    Y1(
      e,
      n,
      i,
      r,
      [
        [Q1, s],
        [Q1 + 1, s - 0.8],
        [Q1 + 1.2, 1.4],
        [634, 0.35],
      ],
      { sides: 8 },
    ),
    X1(e, n, i + 634, r, 0.35, 8));
  let c = (t, a, o) => {
    e.setColor(1, 0.12, 0.06).setEmit(7, 2, 0);
    for (let s = 0; s < o; s++) {
      let c = B1 + (s / o) * Math.PI * 2;
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
  (c(495, 9.6, 3), c(Z1[4][1] - 3, Z1[4][2], 2), c(633.2, 0.4, 1));
}
var t0 = [
    [0.7, 0.69, 0.66],
    [0.66, 0.63, 0.57],
    [0.58, 0.58, 0.57],
    [0.5, 0.42, 0.36],
    [0.62, 0.6, 0.55],
    [0.44, 0.45, 0.47],
    [0.74, 0.72, 0.68],
  ],
  BPe = 14,
  VPe = (e, t) =>
    (e > -502 && e < (t < -640 ? 575 : 636) + BPe && t > -1544 && t < 844) ||
    b1(e, t) < 22,
  n0 = (e, t, n, r, i) => Math.abs(e - n) < i && Math.abs(t - r) < i;
function r0(e) {
  if (e > -560) return [565, 640];
  let t = $v(e);
  if (t) return t;
  if (e < -1035) return [800, 875];
  let n = Math.min(1, Math.max(0, (e + 560) / -460));
  return [565 + 225 * n, 640 + 240 * n];
}
