// tokyo/assets/region-tokyo-A7LxHjud 398 — box
// Lines 144013-144332 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function A0(e, t, n, r, i, a = 0.36, o = 0.157) {
  let s = typeof r == `number` ? gee.plate(r) : r;
  Qt(e, t, -a / 2, a / 2, n - o / 2, n + o / 2, s, Cee, i);
}
function j0(e, t, n, r, i, a, o, s, c, l, u) {
  let d = r - t,
    f = i - n,
    p = Math.hypot(d, f),
    m = -f / p,
    h = d / p,
    g = 0.013,
    _ = (e, r) => [r, n + f * e + h * g, t + d * e + m * g];
  (e.style({ color: 16777215, light: u }),
    e.quadUV(
      _(a, Math.max(s, c)),
      _(a, Math.min(s, c)),
      _(o, Math.min(s, c)),
      _(o, Math.max(s, c)),
      l.u0,
      l.v0,
      l.u1,
      l.v1,
    ));
}
function M0(e, t, n, r, i, a) {
  (e.style({ color: 10133670, rough: 0.2, metal: 0.8 }),
    e.discZ(t, n, r + 0.002, i * 1.18, -1, 12),
    e.style(a),
    e.discZ(t, n, r - 0.003, i, -1, 12));
}
function AFe(e, t, n, r) {
  for (let i of [-1, 1])
    (e.style(kFe),
      tt(
        e,
        [i * t, n, r],
        [i * (t + 0.03), n + 0.08, r - 0.02],
        0.01,
        0.009,
        5,
      ),
      e.style(O0),
      e.cbox(i * (t + 0.045), n + 0.125, r - 0.03, 0.12, 0.085, 0.06, 0.02),
      e.style(Gt),
      e.box(i * (t + 0.045), n + 0.125, r + 0.002, 0.1, 0.068, 0.01, ``));
}
function N0(e, t, n, r, i, a) {
  for (let o of [-1, 1]) {
    let s = o * t,
      c = r - n,
      l = (n + r) / 2;
    (e.style({ color: 2755854, rough: 0.2, metal: 0.4 }),
      e.box(s, l, i - 0.012, a + 0.025, c + 0.025, 0.05, ``),
      e.style(Pt),
      e.box(s, l + c * 0.2, i + 0.016, a, c * 0.5, 0.02, ``),
      e.style(Et),
      e.box(s, l + c * 0.38, i + 0.024, a * 0.8, c * 0.1, 0.02, ``),
      e.style(o < 0 ? Rt : Yt),
      e.box(s, l - c * 0.14, i + 0.016, a, c * 0.16, 0.02, ``),
      e.style(Fee),
      e.box(s, l - c * 0.34, i + 0.016, a, c * 0.14, 0.02, ``));
  }
}
function P0(e, t, n, r, i, a, o, s, c = 8) {
  e.style(s);
  for (let s = 0; s < c; s++) {
    let l = i + ((a - i) * s) / c,
      u = i + ((a - i) * (s + 1)) / c,
      d = [0, t + Math.cos(l) * r, n + Math.sin(l) * r],
      f = [0, t + Math.cos(u) * r, n + Math.sin(u) * r],
      p = [0, Math.cos((l + u) / 2), Math.sin((l + u) / 2)];
    (e.quad(
      [-o, d[1], d[2]],
      [o, d[1], d[2]],
      [o, f[1], f[2]],
      [-o, f[1], f[2]],
      p,
    ),
      e.quad(
        [-o, d[1], d[2]],
        [o, d[1], d[2]],
        [o, f[1], f[2]],
        [-o, f[1], f[2]],
        [0, -p[1], -p[2]],
      ));
  }
}
function F0(e, t, n, r, i, a, o, s = 16) {
  for (let c = 0; c < s; c++) {
    let l = (c / s) * Math.PI * 2,
      u = ((c + 1) / s) * Math.PI * 2;
    e.quad(
      [t, n + Math.sin(l) * i, r + Math.cos(l) * i],
      [t, n + Math.sin(l) * a, r + Math.cos(l) * a],
      [t, n + Math.sin(u) * a, r + Math.cos(u) * a],
      [t, n + Math.sin(u) * i, r + Math.cos(u) * i],
      [o, 0, 0],
    );
  }
}
function jFe(e, t) {
  let n = Wt.kei,
    r = $e(
      [
        [-1.65, 0.2, `p`],
        [-1.7, 0.34, `p`],
        [-1.7, 0.6, `p`],
        [-1.64, 0.79, `p`],
        [-1.27, 0.95, `g`],
        [-0.72, 1.68, `p`],
        [-0.6, 1.76, `p`],
        [1.52, 1.78, `p`],
        [1.64, 1.72, `g`],
        [1.7, 1.1, `p`],
        [1.71, 0.52, `p`],
        [1.66, 0.2, `p`],
      ],
      0.2,
      [
        { z: n.frontAxle, r: 0.36, wy: 0.29 },
        { z: n.rearAxle, r: 0.36, wy: 0.29 },
      ],
    ),
    i = {
      W: 0.735,
      belt: 1,
      roof: 1.78,
      tumble: 0.07,
      chamfer: 0.06,
      round: 0.32,
      pinch: 0.07,
      halfLen: 1.71,
    };
  yt(e, r, i);
  let a = Ht(i);
  (qt(
    e,
    i,
    [-1.27, 0.95],
    [-0.72, 1.68],
    [1.6, 1.74],
    [1.7, 1.1],
    1.02,
    1.66,
    0.08,
    [-0.12, 1],
    0.055,
  ),
    ot(e, a, [-1.2, -0.12, 1], 0.3, 1),
    it(e, { color: 1118740, rough: 0.6 }, a, 0.55, 1.5, 0.985, 1, [], 0, 0.012),
    bt(e, a, [-0.42, 0.12], 0.9),
    dt(e, 0.72, 1.06, -1.02),
    st(
      e,
      a,
      -1.27,
      0.95,
      -0.72,
      1.68,
      0.56,
      [
        [-0.18, 1.42],
        [0.75, 1.42],
      ],
      se(-0.33, t),
    ),
    It(e, -1.27, 0.95, -0.72, 1.68, 0.58),
    ht(e, a, -1.15, 1.62, 1.01),
    Mt(e, a, -1.42, 0.78, 1.45, 0.86),
    e.style(wt),
    e.box(0, 0.28, -1.69, 1.36, 0.12, 0.06, ``),
    e.box(0, 0.28, 1.69, 1.36, 0.12, 0.06, ``),
    St(e, 0.47, 0.69, -1.665, 0.36, 0.2, 0.1),
    xt(e, 0.62, -1.708, 0.56, 0.13),
    e.style(Bt));
  for (let t of [0.585, 0.625, 0.665])
    e.box(0, t, -1.716, 0.58, 0.012, 0.012, ``);
  (e.box(0, 0.705, -1.712, 0.62, 0.022, 0.02, ``),
    e.style({ color: 789775, rough: 0.7 }),
    e.box(0, 0.4, -1.712, 0.84, 0.1, 0.02, ``),
    Dt(e, { color: 15658730, rough: 0.2 }, 0.52, 0.4, -1.712, 0.1, 0.05, 0.02),
    A0(e, -1.725, 0.47, y0.kei, !0),
    N0(e, 0.6, 0.66, 1.1, 1.705, 0.12),
    e.style(Et),
    e.box(0, 1.74, 1.6, 0.3, 0.025, 0.04, ``),
    e.style({ color: 921361, rough: 0.6 }),
    e.box(0.12, 1.2, 1.708, 0.42, 0.02, 0.012, ``),
    e.style({ color: 1776670, rough: 0.6 }),
    e.box(0, 0.62, 1.713, 0.46, 0.22, 0.012, ``),
    A0(e, 1.722, 0.62, y0.kei, !1),
    e.style({ ...O0, variant: 5 }),
    e.box(0, 1.786, 0.46, 1.26, 0.012, 2.08, `b`));
}
function MFe(e, t) {
  let n = Wt.truck,
    r = $e(
      [
        [-1.66, 0.28, `p`],
        [-1.71, 0.4, `p`],
        [-1.71, 0.98, `p`],
        [-1.67, 1.05, `g`],
        [-1.49, 1.7, `p`],
        [-1.4, 1.78, `p`],
        [-0.46, 1.78, `p`],
        [-0.4, 1.72, `p`],
        [-0.4, 0.28, `p`],
      ],
      0.28,
      [{ z: n.frontAxle, r: 0.34, wy: 0.27 }],
    ),
    i = {
      W: 0.735,
      belt: 1.05,
      roof: 1.78,
      tumble: 0.05,
      chamfer: 0.06,
      round: 0.16,
      pinch: 0.05,
      zc: -1.05,
      halfLen: 0.66,
    };
  yt(e, r, i);
  let a = Ht(i);
  (qt(
    e,
    i,
    [-1.67, 1.05],
    [-1.49, 1.7],
    [-0.5, 1.74],
    [-0.5, 1.06],
    1.07,
    1.68,
    0.06,
    [],
    0.05,
  ),
    ot(e, a, [-1.6, -0.5], 0.36, 1.7),
    bt(e, a, [-0.62], 0.96),
    dt(e, 0.72, 1.18, -1.48),
    st(e, a, -1.67, 1.05, -1.49, 1.7, 0.56, [[-0.8, 1.6]], se(-0.32, t)),
    It(e, -1.67, 1.05, -1.49, 1.7, 0.58),
    e.style(Gt),
    e.box(0, 1.38, -0.398, 1.08, 0.42, 0.012, ``),
    St(e, 0.52, 0.84, -1.69, 0.26, 0.14, 0.06),
    e.style({ color: 1381914, rough: 0.6 }),
    e.box(0, 0.84, -1.714, 0.62, 0.1, 0.012, ``),
    e.style({ color: 9343896, rough: 0.55, metal: 0.3 }),
    e.box(0, 0.36, -1.7, 1.46, 0.14, 0.08, ``),
    A0(e, -1.75, 0.52, y0.kei, !0),
    pt(
      e,
      0,
      -1.48,
      -0.62,
      0.62,
      0.86,
      b0.keiTruckDoor,
      { ...jt, variant: 1 },
      !0,
      (e, t) => a(e, t) + 0.008,
    ),
    e.style({ color: 1908256, rough: 0.8 }),
    e.box(0, 0.42, 0.55, 1, 0.14, 2.3, ``),
    e.style({ color: 5987939, rough: 0.7, metal: 0.3 }),
    e.box(0, 0.64, 0.66, 1.46, 0.05, 2.08, ``),
    e.style(jt),
    e.box(-0.72, 0.8, 0.66, 0.03, 0.28, 2.08, ``),
    e.box(0.72, 0.8, 0.66, 0.03, 0.28, 2.08, ``),
    e.box(0, 0.8, 1.69, 1.46, 0.28, 0.03, ``),
    e.style({ color: 10132898, rough: 0.6 }));
  for (let t of [0.74, 0.86])
    (e.box(-0.737, t, 0.66, 0.006, 0.018, 2, ``),
      e.box(0.737, t, 0.66, 0.006, 0.018, 2, ``),
      e.box(0, t, 1.707, 1.4, 0.018, 0.006, ``));
  e.style({ color: 2895409, rough: 0.55, metal: 0.4 });
  for (let t of [-1, 1]) e.box(t * 0.68, 1.27, -0.35, 0.05, 1.22, 0.05, ``);
  e.box(0, 1.86, -0.35, 1.46, 0.05, 0.08, ``);
  for (let t = -3; t <= 3; t++)
    e.box(t * 0.19, 1.3, -0.36, 0.02, 1.08, 0.02, ``);
  (e.box(0, 1.3, -0.36, 1.36, 0.03, 0.02, ``),
    Dt(e, Pt, 0.6, 0.52, 1.71, 0.16, 0.1, 0.04),
    Dt(e, Rt, 0.42, 0.52, 1.71, 0.08, 0.1, 0.04, Yt),
    e.style({ color: 1118481, rough: 0.9 }),
    e.box(-0.6, 0.2, 1.24, 0.22, 0.22, 0.01, ``),
    e.box(0.6, 0.2, 1.24, 0.22, 0.22, 0.01, ``),
    A0(e, 1.72, 0.5, y0.kei, !1));
  for (let t = 0; t < 3; t++)
    for (let n = 0; n < 3; n++)
      for (let r = 0; r < 2; r++)
        (e.style({
          color: (t + n + r) % 3 == 0 ? 2784450 : 15778344,
          rough: 0.7,
          variant: 1,
        }),
          e.box(
            -0.46 + n * 0.46,
            0.8 + r * 0.28,
            -0.05 + t * 0.6,
            0.44,
            0.26,
            0.56,
            `b`,
          ),
          r === 1 &&
            (e.style({ color: 8367690, rough: 0.85, variant: 1 }),
            e.cylY(-0.46 + n * 0.46, 1, -0.05 + t * 0.6, 0.15, 0.08, 7)));
  let o = [11831898, 10845519, 12753512];
  for (let t = 0; t < 3; t++)
    for (let n = 0; n < 2; n++)
      (e.style({ color: o[(t + n) % 3], rough: 0.9, variant: 2 }),
        e.box(-0.33 + n * 0.66, 0.9, 0 + t * 0.6, 0.6, 0.46, 0.55, `b`));
  (e.style({ color: 2777796, rough: 0.6, variant: 3 }),
    e.cbox(0, 0.93, 0.68, 1.42, 0.56, 1.96, 0.18),
    e.style({ color: 15262415, rough: 0.9, variant: 3 }));
  for (let t of [0, 0.68, 1.36]) e.box(0, 1.215, t, 1.44, 0.012, 0.025, `b`);
}
function I0(e, t, n) {
  (e.style({ color: 1776670, rough: 0.5 }),
    e.box(0, t + 0.015, n, 0.36, 0.03, 0.16, `b`));
}
