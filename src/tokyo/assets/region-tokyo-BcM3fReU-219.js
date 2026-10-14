// tokyo/assets/region-tokyo-BcM3fReU 219 — math
// Lines 90217-90503 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var cX = [
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
    skip: (e, t) => e < sX(t)[1],
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
    skip: (e, t) => e > sX(t)[0],
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
    skip: (e, t) => sw(e, t) > -20,
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
    skip: (e, t) => sw(e, t) < 30,
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
];
function lX(e, t) {
  let n = 55;
  return (
    e > 636 && (n &= -2),
    e < -488 && (n &= -3),
    t > 830 && (n &= -17),
    t < -1530 && (n &= -33),
    n
  );
}
function uX(e, t, n) {
  if (
    aX(t, n) ||
    e.water?.at(t, n) ||
    e.water?.at(t + 10, n) ||
    e.water?.at(t - 10, n) ||
    e.water?.at(t, n + 10) ||
    e.water?.at(t, n - 10) ||
    (t < aY.faceX + 8 &&
      t > aY.westX - 140 &&
      n > aY.minZ - 300 &&
      n < aY.maxZ + 120)
  )
    return !0;
  if (n < 980) {
    let [e, r] = sX(n);
    if (t > e - 6 && t < r + 9) return !0;
  }
  return !!(
    oX(t, n, _Y.x, _Y.z, 70) ||
    oX(t, n, vY.x, vY.z, 95) ||
    oX(t, n, 615, -1385, 70) ||
    oX(t, n, 850, -765, 90) ||
    oX(t, n, 880, -1280, 55) ||
    oX(t, n, -866, -688, 80)
  );
}
function dX(e, t, n) {
  let r = 0;
  for (let i of cX) {
    let a = new ne(P(n, `tokyo-far`, i.id));
    for (let n = i.z0 + i.cell / 2; n < i.z1; n += i.cell)
      for (let o = i.x0 + i.cell / 2; o < i.x1; o += i.cell) {
        let s = a.next(),
          c = a.next(),
          l = a.next(),
          u = a.next(),
          d = a.next(),
          f = a.next(),
          p = SY(o, n),
          m = p < 300 ? 1 : p < 700 ? 0.3 : 0.13;
        if (s > i.fill * m) continue;
        let h = Math.min(1.8, 1 / Math.sqrt(m)),
          g = o + (c - 0.5) * i.cell * 0.2,
          _ = n + (l - 0.5) * i.cell * 0.2;
        if (uX(t, g, _) || (i.skip && i.skip(g, _))) continue;
        let v = i.cell * (0.55 + 0.35 * u) * h,
          y = i.cell * (0.55 + 0.35 * d) * h,
          b = Math.round(i.floors[0] + (i.floors[1] - i.floors[0]) * f * f),
          x = i.towers ? a.next() < i.towers : !1;
        x && (b = Math.round(b * (2 + 2 * a.next())));
        let S = b * 3.3 + 1,
          C = SY(g, _);
        if (x && S > 60) {
          (DY(e, t, g, _, Math.min(v, 40), Math.min(y, 40), S, 100 + r, {
            glass: a.next() < 0.5 ? [0.36, 0.43, 0.5] : [0.58, 0.58, 0.56],
            crown: 3 + a.next() * 5,
          }),
            r++);
          continue;
        }
        let w = t.height(g, _) - 0.5,
          T = rX[Math.floor(a.next() * rX.length)],
          E = 0.88 + 0.2 * a.next(),
          D = C < 260;
        (e
          .setColor(T[0] * E, T[1] * E, T[2] * E)
          .setEmit(0, 0, D ? 0 : 1 + ((r * 7) % 997)),
          e.boxMinMax(
            g - v / 2,
            w,
            _ - y / 2,
            g + v / 2,
            w + S,
            _ + y / 2,
            lX(g, _),
          ),
          e.noEmit(),
          D &&
            EY(
              e,
              g,
              w,
              _,
              v,
              y,
              S,
              Math.max(6.6, S / 4),
              [T[0] * 0.3, T[1] * 0.32, T[2] * 0.36],
              3.6,
              CY(g, _),
            ),
          a.next() < 0.3 &&
            C < 160 &&
            (e.setColor(0.52, 0.52, 0.5),
            e.box(
              g + (a.next() - 0.5) * v * 0.4,
              w + S,
              _ + (a.next() - 0.5) * y * 0.4,
              Math.min(6, v * 0.35),
              2.4,
              Math.min(5, y * 0.35),
            )),
          r++);
      }
  }
  return r;
}
var fX = 1.1,
  pX = 0.15,
  mX = -1;
function hX() {
  let e = [
      { axis: `x`, at: RC, from: UC, to: zC, dir: 1, stone: !0 },
      { axis: `z`, at: UC, from: gX(UC), to: RC, dir: -1, stone: !1 },
      { axis: `z`, at: zC, from: VC, to: RC, dir: 1, stone: !0 },
      { axis: `x`, at: VC, from: BC, to: zC, dir: -1, stone: !0 },
      { axis: `z`, at: BC, from: HC, to: VC, dir: 1, stone: !0 },
      { axis: `x`, at: HC, from: BC, to: BC + 46, dir: 1, stone: !1 },
    ],
    t = [];
  for (let n of e) {
    let e = [[n.from, n.to]];
    for (let t of _w) {
      let r = Math.min(
          t.x - t.half * Math.abs(t.dz) - 0.01,
          t.x + t.dx * t.len,
        ),
        i = Math.max(t.x + t.half * Math.abs(t.dz) + 0.01, t.x + t.dx * -6),
        a = Math.min(t.z - t.half * Math.abs(t.dx) - 0.01, t.z + t.dz * t.len),
        o = Math.max(t.z + t.half * Math.abs(t.dx) + 0.01, t.z + t.dz * -6),
        [s, c, l, u] = n.axis === `x` ? [a, o, r, i] : [r, i, a, o];
      if (n.at < l || n.at > u) continue;
      let d = [];
      for (let [t, n] of e)
        c <= t || s >= n
          ? d.push([t, n])
          : (s > t && d.push([t, s]), c < n && d.push([c, n]));
      e = d;
    }
    for (let [r, i] of e) i - r > 0.3 && t.push({ ...n, from: r, to: i });
  }
  return t;
}
var gX = (e) => lw(e);
function _X(e) {
  for (let t = -6; t < 0; t += 0.5)
    for (let n of [-1, 1]) {
      let r = n * (e.half + 0.8);
      if (Cw(e.x + e.dx * t - e.dz * r, e.z + e.dz * t + e.dx * r) > 0.5)
        return t;
    }
  return -0.5;
}
function vX(e, t) {
  let n = 0.6,
    [r, i, a, o] =
      e.axis === `x`
        ? [e.at - e.dir * n, t, e.at + e.dir * n, t]
        : [t, e.at - e.dir * n, t, e.at + e.dir * n];
  return [Cw(r, i), Cw(a, o)];
}
var yX = 11,
  bX = () => (yX = (Math.imul(yX, 1103515245) + 12345) >>> 0) / 4294967296;
function xX(e, t, n, r, i, a, o = 0) {
  let s = t.at + t.dir * o;
  t.axis === `x`
    ? t.dir > 0
      ? e.quad(s, i, r, s, i, n, s, a, n, s, a, r)
      : e.quad(s, i, n, s, i, r, s, a, r, s, a, n)
    : t.dir > 0
      ? e.quad(n, i, s, r, i, s, r, a, s, n, a, s)
      : e.quad(r, i, s, n, i, s, n, a, s, r, a, s);
}
