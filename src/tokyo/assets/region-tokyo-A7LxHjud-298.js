// tokyo/assets/region-tokyo-A7LxHjud 298 — math
// Lines 108721-109067 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function* _Ee(e, t) {
  let [n, r] = oW(t.plan, `omote-gyro`);
  gW(e, -n, -r, n, r, _W(t, n, r));
  for (let t = 0; t < IW.n; t++) {
    let n = t * IW.st,
      r = IW.rot[t];
    if (
      (e.col(3092788).mat(0.6, 0.3, 0, 0),
      e.obox(0, n + 0.4, 0, IW.hx, 0.4, IW.hz, r),
      t > 0 && LW(e, n, r),
      e
        .col(t === 0 ? 14272936 : 5266016)
        .mat(0.12, 0.55, t === 0 ? 0.42 : 0.12, 1),
      e.obox(
        0,
        n + 0.8 + (IW.st - 0.8) / 2,
        0,
        IW.hx - 0.7,
        (IW.st - 0.8) / 2,
        IW.hz - 0.7,
        r,
      ),
      !e.coarse)
    ) {
      let t = Math.cos(r),
        i = Math.sin(r),
        a = (e, n) => [e * t - n * i, e * i + n * t];
      e.col(2500651).mat(0.5, 0.4, 0, 0);
      for (let t = -2; t <= 2; t++) {
        let r = a(t * 2.2 + 0.08, -(IW.hz - 0.7) - 0.03),
          i = a(t * 2.2 - 0.08, -(IW.hz - 0.7) - 0.03);
        e.panel(r[0], r[1], i[0], i[1], n + 0.8, n + IW.st);
      }
    }
  }
  if (
    (e.col(3092788).mat(0.6, 0.3, 0, 0),
    e.obox(0, IW.n * IW.st + 0.4, 0, IW.hx, 0.4, IW.hz, 0.12),
    LW(e, IW.n * IW.st, 0.12),
    e.coarse)
  )
    return;
  yield;
  let i = IW.rot[1],
    a = [Math.sin(i), -Math.cos(i)];
  (fW(
    e,
    `GYRE`,
    a[0] * (IW.hz + 0.02) - 2.5 * Math.cos(i),
    IW.st + 0.12,
    a[1] * (IW.hz + 0.02) - 2.5 * Math.sin(i),
    a,
    0.6,
    16777215,
    0.8,
  ),
    e.solid(-6.6, -9.4, 6.6, 9.4, 0, IW.n * IW.st + 0.8));
}
function vEe(e) {
  (e.col(4080712).mat(0.4, 0.4, 0.1, 1),
    e.box(-IW.hx, 0, -IW.hz, IW.hx, IW.n * IW.st + 0.8, IW.hz));
}
var RW = { h: 14, lean: 0.6 };
function* yEe(e, t) {
  let [n, r] = oW(t.plan, `omote-fendo`);
  gW(e, -n, -r, n, r, _W(t, n, r));
  let i = r - RW.lean,
    a = (e) => -i - RW.lean * (e / RW.h);
  if (
    (e.col(14932163).mat(0.8, 0, 0, 0),
    e.box(-n, 0, -i + 0.2, n, RW.h, r),
    e.quad(n, 0, a(0), -n, 0, a(0), -n, RW.h, a(RW.h), n, RW.h, a(RW.h)),
    e.quad(-n, 0, a(0), -n, 0, -i + 0.2, -n, RW.h, -i + 0.2, -n, RW.h, a(RW.h)),
    e.quad(n, 0, -i + 0.2, n, 0, a(0), n, RW.h, a(RW.h), n, RW.h, -i + 0.2),
    e.flat(-n, a(RW.h), n, -i + 0.2, RW.h),
    e.coarse)
  )
    return;
  yield;
  let o = (2 * n) / 3,
    s = RW.h / 3;
  for (let t = 0; t < 3; t++)
    for (let r = 0; r < 3; r++) {
      let i = n - (r + 0.5) * o,
        c = o * 0.34,
        l = t * s + 0.35,
        u = t * s + s - c - 0.45,
        d = (e, t) => a(e) - t;
      (e
        .col(t === 0 ? 15785136 : 7232576)
        .mat(0.3, 0.3, t === 0 ? 0.55 : 0.32, 1),
        e.quad(
          i + c,
          l,
          d(l, 0.03),
          i - c,
          l,
          d(l, 0.03),
          i - c,
          u,
          d(u, 0.03),
          i + c,
          u,
          d(u, 0.03),
        ));
      let f = (e, t) => [i + Math.cos(e) * t, u + Math.sin(e) * t];
      for (let t = 0; t < 6; t++) {
        let [n, r] = f((t / 6) * Math.PI, c),
          [a, o] = f(((t + 1) / 6) * Math.PI, c);
        e.triFace(i, u, d(u, 0.03), a, o, d(o, 0.03), n, r, d(r, 0.03));
      }
      e.col(16774364).mat(0.3, 0, 0.95, 1);
      for (let [t, n] of [
        [i + c + 0.12, i + c],
        [i - c, i - c - 0.12],
      ])
        e.quad(
          t,
          l,
          d(l, 0.06),
          n,
          l,
          d(l, 0.06),
          n,
          u,
          d(u, 0.06),
          t,
          u,
          d(u, 0.06),
        );
      for (let t = 0; t < 6; t++) {
        let n = (t / 6) * Math.PI,
          r = ((t + 1) / 6) * Math.PI,
          [i, a] = f(n, c + 0.12),
          [o, s] = f(r, c + 0.12),
          [l, u] = f(r, c),
          [p, m] = f(n, c);
        e.quad(
          i,
          a,
          d(a, 0.06),
          p,
          m,
          d(m, 0.06),
          l,
          u,
          d(u, 0.06),
          o,
          s,
          d(s, 0.06),
        );
      }
    }
  (fW(e, `FENDI`, 0, RW.h - 0.95, a(RW.h) - 0.12, RB, 0.6, 3812896, 0),
    e.solid(-n, -i - RW.lean, n, r, 0, RW.h));
}
function bEe(e, t) {
  let [n, r] = oW(t.plan, `omote-fendo`);
  (e.col(14932163).mat(0.8, 0, 0.1, 1), e.box(-n, 0, -r, n, RW.h, r));
}
var zW = [0, 5.6, 11.4, 15.6, 21.2, 25.6, 30],
  BW = [0.24, 0.13, 0.2, 0.11, 0.18, 0.13];
function* xEe(e, t) {
  let [n, r] = oW(t.plan, `omote-diar`);
  gW(e, -n, -r, n, r, _W(t, n, r));
  for (let t = 0; t < zW.length - 1; t++) {
    let i = zW[t] + 0.22,
      a = zW[t + 1];
    if (
      (e.col(16053488).mat(0.25, 0.05, BW[t], 1),
      e.box(-n, i, -r, n, a, r),
      e.col(13225165).mat(0.4, 0.4, 0.05, 1),
      e.box(-n - 0.05, zW[t], -r - 0.05, n + 0.05, i, r + 0.05),
      !e.coarse)
    ) {
      e.col(15001578).mat(0.3, 0.05, BW[t] * 0.75, 1);
      let o = (t, n, r, o, s, c) => {
        let l = Math.hypot(r - t, o - n),
          u = Math.floor(l / 2.4);
        for (let d = 0; d < u; d++) {
          let u = (d * 2.4 + 0.6) / l,
            f = (d * 2.4 + 1.5) / l;
          e.panel(
            t + (r - t) * u + s * 0.025,
            n + (o - n) * u + c * 0.025,
            t + (r - t) * f + s * 0.025,
            n + (o - n) * f + c * 0.025,
            i + 0.15,
            a - 0.1,
          );
        }
      };
      (o(n, -r, -n, -r, 0, -1), o(-n, -r, -n, r, -1, 0), o(n, r, n, -r, 1, 0));
    }
  }
  (e.col(13225165).mat(0.4, 0.4, 0, 0),
    e.box(-n - 0.05, 30, -r - 0.05, n + 0.05, 30.25, r + 0.05),
    !e.coarse &&
      (yield,
      fW(e, `DIOR`, 0, 4.1, -r - 0.08, RB, 0.75, 7106418, 0.15),
      e.solid(-n, -r, n, r, 0, 30.25)));
}
function SEe(e, t) {
  let [n, r] = oW(t.plan, `omote-diar`);
  (e.col(16053488).mat(0.25, 0.05, 0.4, 1), e.box(-n, 0, -r, n, 30.25, r));
}
var VW = 13214817,
  HW = [
    [-7, -10.5, 2.5, 3, 0, 9.5, VW],
    [1.8, -9, 7, 7, 0, 14, 11120563],
    [-6.5, -8, 5.5, 10.5, 9.8, 18, 9399106],
    [-7, -10.5, 1.2, 2, 18.3, 25.5, VW],
    [0.6, -7.6, 7, 9, 14.3, 27, 8225929],
    [-5, -9.2, 6, 8, 25.8, 31.9, VW],
  ];
function* CEe(e, t) {
  let [n, r, i, a] = cW(t, sW.luis);
  gW(e, n, r, i, a, Math.max(0, mW(t, n, i, r - 0.5)) / 2);
  let o = e.sub((n + i) / 2, 0, r + 10.5, 0);
  (e.col(7232068).mat(0.6, 0.3, 0, 0),
    e.box(-7, 0, 10.6, 7, 17, a - r - 10.5),
    e.solid(-7, 10.6, 7, a - r - 10.5, 0, 17),
    e.col(15982516).mat(0.4, 0, 0.45, 1),
    e.box(-5.3, 0, -6.8, 5.3, 31.6, 6.6));
  let s = t.c(`shoji`);
  for (let [t, n, r, i, a, o, c] of HW)
    (e.col(c).mat(0.35, 0.75, 0.14, G),
      e.coarse
        ? e.box(t, a, n, r, o, i, e.white, 0, 0, null, a > 0)
        : tEe(e, t, a, n, r, o, i, s, 4.2, 6.2, a > 0));
  if (e.coarse) {
    e.leave(o);
    return;
  }
  (yield,
    dW(e, t, -6.4, 1.6, -10.53, 3.6, 0.5),
    fW(e, `LOUIS VUITTON`, -2.4, 5.2, -10.56, RB, 0.6, 16446434, 0.7));
  for (let [t, n, r, i, a, o] of HW) e.solid(t, n, r, i, a, o);
  e.leave(o);
}
function wEe(e, t) {
  let [n, r, i, a] = cW(t, sW.luis);
  (e.col(VW).mat(0.35, 0.75, 0.25, 1),
    e.box(n, 0, r, i, 31.9, r + 21),
    e.box(n, 0, r + 21, i, 17, a));
}
var UW = { h: 32 };
function TEe(e, t, n) {
  let r = new le(e),
    i = [],
    a = Math.max(4, Math.round(t / 1.3)),
    o = Math.max(2, Math.round(t / 4.5)),
    s = [];
  for (let e = 0; e < o; e++)
    s.push({
      u: (t * (e + 0.5)) / o + r.range(-0.5, 0.5),
      ang: r.range(-0.15, 0.15),
      w: 1.7,
    });
  let c = 0;
  for (; c < n - 0.2 && s.length;) {
    let e = Math.min(n - c, r.range(2.6, 3.5)),
      o = [];
    for (let l of s) {
      let u = l.u + Math.tan(l.ang) * e,
        d = l.ang;
      if (
        ((u < 0.25 || u > t - 0.25) &&
          ((u = Math.max(0.25, Math.min(t - 0.25, u))), (d = -d * 0.7)),
        i.push([l.u, c, u, c + e, l.w]),
        o.length + s.length < a && r.chance(0.3 + (0.45 * c) / n))
      ) {
        let e = r.range(0.3, 0.55);
        (o.push({
          u,
          ang: Math.max(-0.85, d - e),
          w: Math.max(0.38, l.w * 0.8),
        }),
          o.push({
            u,
            ang: Math.min(0.85, d + e),
            w: Math.max(0.38, l.w * 0.8),
          }));
      } else
        o.push({
          u,
          ang: Math.max(-0.7, Math.min(0.7, d * 0.6 + r.range(-0.25, 0.25))),
          w: Math.max(0.38, l.w * 0.9),
        });
    }
    ((s = o.slice(0, a)), (c += e));
  }
  return i;
}
function* EEe(e, t) {
  let [n, r, i, a] = cW(t, sW.toads);
  if (
    (gW(e, n, r, i, a, Math.max(0, mW(t, n, i, r - 0.5)) / 2),
    e.col(9276032).mat(0.12, 0.45, 0.28, 1),
    e.box(n, 0, r, i, UW.h, a),
    e.col(13157304).mat(0.85, 0, 0, 0),
    e.box(n - 0.04, UW.h, r - 0.04, i + 0.04, UW.h + 0.4, a + 0.04),
    e.coarse)
  )
    return;
  yield;
  let o = (t, n, r, i, a, o, s) => {
    let c = Math.hypot(r - t, i - n),
      l = (r - t) / c,
      u = (i - n) / c;
    e.col(13157304).mat(0.85, 0, 0.04, 1);
    for (let [r, i, d, f, p] of TEe(s, c, UW.h)) {
      let s = d - r,
        c = f - i,
        m = Math.hypot(s, c) || 1,
        h = (-c / m) * p * 0.5,
        g = (s / m) * p * 0.5,
        _ = (e, r) => [t + l * e + a * 0.04, r, n + u * e + o * 0.04],
        v = _(r - h, i - g),
        y = _(d - h, f - g),
        b = _(d + h, f + g),
        x = _(r + h, i + g);
      e.quad(
        v[0],
        v[1],
        v[2],
        y[0],
        y[1],
        y[2],
        b[0],
        b[1],
        b[2],
        x[0],
        x[1],
        x[2],
      );
    }
  };
  (o(i, r, n, r, 0, -1, 7601),
    o(n, r, n, a, -1, 0, 7602),
    fW(e, `TOD'S`, (n + i) / 2, 3.9, r - 0.1, RB, 0.55, 16777215, 0.6),
    e.solid(n, r, i, a, 0, UW.h + 0.4));
}
function DEe(e, t) {
  let [n, r, i, a] = cW(t, sW.toads);
  (e.col(10131084).mat(0.6, 0.2, 0.2, 1), e.box(n, 0, r, i, UW.h + 0.4, a));
}
