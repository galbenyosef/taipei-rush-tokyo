// tokyo/assets/region-tokyo-55J_WESF 236 — math
// Lines 89920-90094 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* fxe(e, t) {
  let n = (e) => Math.max(0, SF ** 4 - Math.abs(e) ** 4) ** 0.25 * 0.985,
    r = 0.05;
  for (let i = -SF; i < SF - 0.001; i += 8) {
    let a = Math.min(SF, i + 8),
      o = n(i),
      s = n(a),
      c = Math.min(o, s);
    (e.col(Math.round((i + SF) / 8) % 2 ? DF : uxe).mat(0.95, 0, 0.14, TF),
      e.flat(i, -c, a, c, r, t.c(`lawn`), 4, 4));
    let l = Math.max(o, s);
    l - c > 0.05 &&
      (e.flat(i, -l, a, -c, r, t.c(`lawn`), 4, 4),
      e.flat(i, c, a, l, r, t.c(`lawn`), 4, 4));
  }
  yield;
  let i = (t, n, i, a, o, s = 16) => {
      (e.col(o).mat(0.95, 0, 0.14, TF), e.disc(t, r + a, n, i, s));
    },
    [a, o] = CF,
    s = [a, o - wF],
    c = [a - wF, o - wF],
    l = [a - wF, o];
  (i(a, o, 3, 0.005, OF, 20),
    i(a - wF * 0.5, o - wF * 0.5, 2.6, 0.005, OF, 16));
  for (let e of [s, c, l]) i(e[0], e[1], 2, 0.005, OF, 12);
  e.col(16053486).mat(0.9, 0, 0.3, TF);
  let u = 0.1,
    d = 0.062,
    f = (e, t) => {
      let n = 0;
      for (
        ;
        n < 200 &&
        Math.abs(a + e * n) ** 4 + Math.abs(o + t * n) ** 4 < (SF - 0.5) ** 4;
      )
        n += 0.5;
      return n;
    },
    p = f(0, -1),
    m = f(-1, 0);
  (e.flat(a - u, o - p, a + u, o - 0.5, d),
    e.flat(a - m, o - u, a - 0.5, o + u, d));
  for (let [t, n] of [
    [0.9, 0],
    [0, 0.9],
  ]) {
    let r = a + t - n * 0,
      i = o + n;
    (e.flat(r - 0.7, i - 0.7, r + 0.7, i - 0.62, d),
      e.flat(r - 0.7, i + 0.62, r + 0.7, i + 0.7, d));
  }
  e.col(16777215).mat(0.9, 0, 0.35, TF);
  for (let t of [s, c, l])
    e.box(t[0] - 0.22, r, t[1] - 0.22, t[0] + 0.22, 0.14, t[1] + 0.22);
  (e.box(a - 0.25, r, o - 0.25, a + 0.25, 0.08, o + 0.25),
    e.box(
      a - wF * 0.5 - 0.3,
      0.3,
      o - wF * 0.5 - 0.08,
      a - wF * 0.5 + 0.3,
      0.37,
      o - wF * 0.5 + 0.08,
    ),
    e.col(OF).mat(0.95, 0, 0.14, TF),
    e.cylY(a - wF * 0.5, o - wF * 0.5, 0.055, 0.3, 2.6, 16, 1, !0),
    yield);
  let h = kF(16, hF),
    g = kF(16, -30.4),
    _ = (e) => LF(AF(g, e), AF(g, e + 1));
  (MF(e, g, 0, g, _F, () => dxe, 0.16, !0, _),
    MF(e, g, _F, h, _F, () => 15909632, 0.2, !1, _));
  for (let t of [
    [a, o - p],
    [a - m, o],
  ])
    (e.col(16172032).mat(0.6, 0.3, 0.35, TF),
      e.cylY(t[0], t[1], 0, 30, 0.35, 8, 0.25, !0),
      e.box(t[0] - 0.05, 4, t[1] - 1.2, t[0] + 0.05, 28, t[1] + 1.2),
      e.pole(t[0], t[1], 0.4, 0, 30));
  let v = (SF ** 4 - 256) ** 0.25 - 0.5;
  for (let [t, n, r, i] of [
    [v - 3, -10, v, 10],
    [-10, v - 3, 10, v],
  ])
    (e.col(2501168).mat(0.8, 0, 0.12, TF),
      e.box(t, 0, n, r, 0.9, i),
      e.col(1719162).mat(0.6, 0.2, 0.18, TF),
      e.box(t - 0.2, 1.5, n - 0.2, r + 0.2, 1.7, i + 0.2),
      e.solid(t, n, r, i, 0, 1.7));
  let y = [];
  for (let e = -0.75; e <= 0.750001; e += 0.25) {
    let t = Math.PI / 4 + e;
    y.push([a + Math.cos(t) * 14, o + Math.sin(t) * 14]);
  }
  for (let t = 0; t + 1 < y.length; t++)
    (e.col(3159098).mat(0.6, 0.2, 0.1, TF),
      tM(
        e,
        jF(y[t], _F),
        jF(y[t + 1], _F),
        jF(y[t + 1], 9),
        jF(y[t], 9),
        [-1, 0, -1],
      ));
  let b = kF(16, -30.2);
  for (let t = 0; t < b.length; t++) {
    let n = b[t],
      r = b[(t + 1) % b.length];
    if (LF(n, r)) continue;
    let i = r[0] - n[0],
      a = r[1] - n[1],
      o = Math.hypot(i, a);
    e.solidRot(
      (n[0] + r[0]) / 2,
      (n[1] + r[1]) / 2,
      o / 2 + 0.3,
      0.3,
      Math.atan2(a, i),
      0,
      3.5999999999999996,
    );
  }
}
var PF = cF.find((e) => e[2] === `22`),
  FF = sF(PF[0], PF[1], 0).z,
  IF = 2.2;
function LF(e, t) {
  let n = (e[0] + t[0]) / 2,
    r = (e[1] + t[1]) / 2;
  return n > 0 && Math.abs(r - FF) < 5.2;
}
function* pxe(e) {
  let t = (e) => e % 4 == 1;
  (NF(e, 8, hF, _F, mF, JP, xF, t, 0.18), yield);
  let n = kF(8, gF),
    r = kF(8, pF);
  MF(e, n, bF, n, vF, () => 855828, 0.05, !0);
  let i = kF(8, -16.05);
  e.col(16777215).mat(0.4, 0, 1, TF);
  for (let t = 0; t < i.length; t++) {
    let n = AF(i, t),
      r = AF(i, t + 1),
      a = (n[0] + r[0]) / 2,
      o = (n[1] + r[1]) / 2,
      s = Math.hypot(a, o),
      c = [1745919, 16747034, 2282347, 16777215][t % 4];
    (e.col(c).mat(0.4, 0, 0.9, TF),
      tM(
        e,
        jF(n, 11.549999999999999),
        jF(r, 11.549999999999999),
        jF(r, 11.85),
        jF(n, 11.85),
        [-a / s, 0, -o / s],
      ));
  }
  for (let t = 0; t < n.length; t++) {
    let i = AF(n, t),
      a = AF(n, t + 1),
      o = AF(r, t),
      s = AF(r, t + 1);
    (e.col(14210768).mat(0.8, 0, 0.22, TF),
      tM(e, jF(i, bF), jF(a, bF), jF(s, 11.6), jF(o, 11.6), [0, -1, 0]));
  }
  (NF(e, 8, gF, vF, pF, yF, axe, t, 0.18), yield);
  let a = kF(8, pF);
  MF(e, a, yF, a, 34, () => 13618372, 0.25, !0);
  let o = kF(16, -2);
  for (let t = 0; t < o.length; t++) {
    let n = o[t];
    (e.col(16776170).mat(0.3, 0, 2.2, TF),
      e.box(n[0] - 0.6, 31.8, n[1] - 0.6, n[0] + 0.6, 32.4, n[1] + 0.6));
  }
}
