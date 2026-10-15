// tokyo/assets/region-tokyo-55J_WESF 390 — cell
// Lines 141475-141817 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var DPe = [
    {
      id: `east`,
      x0: 600,
      x1: 1320,
      z0: -1700,
      z1: 240,
      cell: 38,
      floors: [3, 12],
      fill: 0.78,
      towers: 0.04,
      skip: (e, t) => e < r0(t)[1],
    },
    {
      id: `island`,
      x0: 660,
      x1: 1055,
      z0: 240,
      z1: 985,
      cell: 36,
      floors: [2, 8],
      fill: 0.6,
    },
    {
      id: `toyosu`,
      x0: 1090,
      x1: 1320,
      z0: 300,
      z1: 980,
      cell: 48,
      floors: [4, 14],
      fill: 0.5,
      towers: 0.1,
    },
    {
      id: `asakusa`,
      x0: 590,
      x1: 900,
      z0: -1700,
      z1: -630,
      cell: 34,
      floors: [3, 10],
      fill: 0.8,
      towers: 0.03,
      skip: (e, t) => e > r0(t)[0],
    },
    {
      id: `north`,
      x0: -260,
      x1: 600,
      z0: -1900,
      z1: -1530,
      cell: 36,
      floors: [2, 8],
      fill: 0.75,
      towers: 0.02,
      skip: (e, t) => pb(e, t) > -20,
    },
    {
      id: `yanaka`,
      x0: -900,
      x1: -200,
      z0: -2e3,
      z1: -1530,
      cell: 38,
      floors: [1, 4],
      fill: 0.4,
      skip: (e, t) => pb(e, t) < 30,
    },
    {
      id: `west`,
      x0: -1060,
      x1: -488,
      z0: -1700,
      z1: -480,
      cell: 38,
      floors: [4, 14],
      fill: 0.78,
      towers: 0.05,
    },
    {
      id: `southwest`,
      x0: -1060,
      x1: -488,
      z0: 330,
      z1: 1150,
      cell: 42,
      floors: [6, 20],
      fill: 0.78,
      towers: 0.1,
    },
    {
      id: `south`,
      x0: -488,
      x1: 150,
      z0: 830,
      z1: 1250,
      cell: 38,
      floors: [4, 14],
      fill: 0.8,
      towers: 0.06,
    },
    {
      id: `w-far`,
      x0: -1760,
      x1: -1190,
      z0: -1760,
      z1: 1560,
      cell: 42,
      floors: [3, 14],
      fill: 0.75,
      towers: 0.06,
    },
    {
      id: `s-far`,
      x0: -1190,
      x1: 150,
      z0: 1150,
      z1: 1620,
      cell: 40,
      floors: [3, 14],
      fill: 0.78,
      towers: 0.07,
    },
    {
      id: `nw-far`,
      x0: -2900,
      x1: -1760,
      z0: -1800,
      z1: -880,
      cell: 44,
      floors: [3, 12],
      fill: 0.74,
      towers: 0.04,
    },
    {
      id: `mid-far`,
      x0: -2900,
      x1: -1760,
      z0: -880,
      z1: -80,
      cell: 44,
      floors: [3, 12],
      fill: 0.74,
      towers: 0.04,
    },
    {
      id: `west-far`,
      x0: -2900,
      x1: -2448,
      z0: -80,
      z1: 1900,
      cell: 44,
      floors: [3, 12],
      fill: 0.74,
      towers: 0.05,
    },
    {
      id: `sw-far`,
      x0: -2448,
      x1: -1760,
      z0: 1530,
      z1: 1900,
      cell: 42,
      floors: [3, 12],
      fill: 0.76,
      towers: 0.04,
    },
    {
      id: `ebisu-far`,
      x0: -1760,
      x1: -1190,
      z0: 1560,
      z1: 1900,
      cell: 42,
      floors: [4, 14],
      fill: 0.76,
      towers: 0.06,
    },
  ],
  OPe = 24,
  kPe = 18,
  APe = as.slice(0, -1).map((e, t) => [e[0], e[1], as[t + 1][0], as[t + 1][1]]);
function i0(e, t, n = 0) {
  let r = Math.max(OPe, kPe + n);
  for (let [n, i, a, o] of APe) {
    let s = a - n,
      c = o - i,
      l = s * s + c * c,
      u = l ? Math.max(0, Math.min(1, ((e - n) * s + (t - i) * c) / l)) : 0,
      d = n + s * u - e,
      f = i + c * u - t;
    if (d * d + f * f < r * r) return !0;
  }
  return !1;
}
function jPe(e, t) {
  let n = 4;
  for (let r of v1)
    y1(r, e, t) > 1500 ||
      (r.maxX > e && (n |= 1),
      r.minX < e && (n |= 2),
      r.maxZ > t && (n |= 16),
      r.minZ < t && (n |= 32));
  return n;
}
function MPe(e, t, n) {
  if (
    EPe(t, n) ||
    i0(t, n) ||
    e.water?.at(t, n) ||
    e.water?.at(t + 10, n) ||
    e.water?.at(t - 10, n) ||
    e.water?.at(t, n + 10) ||
    e.water?.at(t, n - 10) ||
    (t < Gv.faceX + 8 &&
      t > Gv.westX - 140 &&
      n > Gv.minZ - 300 &&
      n < Gv.maxZ + 120)
  )
    return !0;
  if (n < 980) {
    let [e, r] = r0(n);
    if (t > e - 6 && t < r + 9) return !0;
  }
  return !!(
    n0(t, n, S1.x, S1.z, 70) ||
    n0(t, n, C1.x, C1.z, 95) ||
    n0(t, n, 662, -1385, 70) ||
    n0(t, n, 850, -765, 90) ||
    n0(t, n, 913, -1280, 55) ||
    n0(t, n, -905, -719, 80) ||
    (x1.sunshine60 && n0(t, n, w1.x, w1.z, 50))
  );
}
function NPe(e, t, n) {
  let r = 0,
    i = Iv() ? 300 : 1 / 0;
  for (let a of DPe) {
    let o = new ie(ge(n, `tokyo-far`, a.id));
    for (let n = a.z0 + a.cell / 2; n < a.z1; n += a.cell)
      for (let s = a.x0 + a.cell / 2; s < a.x1; s += a.cell) {
        let c = o.next(),
          l = o.next(),
          u = o.next(),
          d = o.next(),
          f = o.next(),
          p = o.next(),
          m = E1(s, n);
        if (m >= i) continue;
        let h = m < 300 ? 1 : m < 700 ? 0.3 : 0.13;
        if (c > a.fill * h) continue;
        let g = Math.min(1.8, 1 / Math.sqrt(h)),
          _ = s + (l - 0.5) * a.cell * 0.2,
          v = n + (u - 0.5) * a.cell * 0.2;
        if (MPe(t, _, v) || (a.skip && a.skip(_, v))) continue;
        let y = a.cell * (0.55 + 0.35 * d) * g,
          b = a.cell * (0.55 + 0.35 * f) * g;
        if (i0(_, v, Math.hypot(y, b) / 2)) continue;
        let x = Math.round(a.floors[0] + (a.floors[1] - a.floors[0]) * p * p),
          S = a.towers ? o.next() < a.towers : !1;
        S && (x = Math.round(x * (2 + 2 * o.next())));
        let C = x * 3.3 + 1,
          w = E1(_, v);
        if (S && C > 60) {
          (j1(e, t, _, v, Math.min(y, 40), Math.min(b, 40), C, 100 + r, {
            glass: o.next() < 0.5 ? [0.36, 0.43, 0.5] : [0.58, 0.58, 0.56],
            crown: 3 + o.next() * 5,
          }),
            r++);
          continue;
        }
        let T = t.height(_, v),
          E =
            (T < 0.6
              ? T
              : Math.min(
                  T,
                  t.height(_ - y / 2, v - b / 2),
                  t.height(_ + y / 2, v - b / 2),
                  t.height(_ - y / 2, v + b / 2),
                  t.height(_ + y / 2, v + b / 2),
                )) - 0.5,
          D = t0[Math.floor(o.next() * t0.length)],
          O = 0.88 + 0.2 * o.next(),
          k = w < 260 && i === 1 / 0;
        (e
          .setColor(D[0] * O, D[1] * O, D[2] * O)
          .setEmit(0, 0, k ? 0 : 1 + ((r * 7) % 997)),
          e.boxMinMax(
            _ - y / 2,
            E,
            v - b / 2,
            _ + y / 2,
            E + C,
            v + b / 2,
            jPe(_, v),
          ),
          e.noEmit(),
          k &&
            A1(
              e,
              _,
              E,
              v,
              y,
              b,
              C,
              Math.max(6.6, C / 4),
              [D[0] * 0.3, D[1] * 0.32, D[2] * 0.36],
              3.6,
              D1(_, v),
            ),
          o.next() < 0.3 &&
            w < 160 &&
            (e.setColor(0.52, 0.52, 0.5),
            e.box(
              _ + (o.next() - 0.5) * y * 0.4,
              E + C,
              v + (o.next() - 0.5) * b * 0.4,
              Math.min(6, y * 0.35),
              2.4,
              Math.min(5, b * 0.35),
            )),
          r++);
      }
  }
  return r;
}
var a0 = new te(0.25, 0.62, 1),
  PPe = new te(0.5, 0.2, 1);
function FPe(e) {
  let { x: t, z: n } = S1,
    r = new dte(9e3, 13500);
  return (
    r.setColor(0.9, 0.9, 0.9).setEmit(1.1, 0),
    $1(r, t, e, n, 0.5, W1),
    r.setColor(1, 1, 1).setEmit(1.5, 0),
    e0(r, t, e, n, 0.3, W1),
    r.noEmit(),
    r.build()
  );
}
