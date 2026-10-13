// tokyo__assets__airliner-Bx-acqWB 01 — math
// Lines 1-342 of readable/tokyo__assets__airliner-Bx-acqWB.pretty.js (statement-aligned).
import { nn as e } from "./engine-BuS5QxN0.js";
import { $ as t, et as n, nt as r, rt as i } from "./world-Bo9wkXrT.js";
var a = 3.4,
  o = 2,
  s = 1.6,
  c = 44,
  l = 34,
  u = {
    rush: {
      tail: 13111342,
      cheat: 13111342,
      title: `rx-title`,
      logo: `rx-logo`,
    },
    formosa: {
      tail: 946019,
      cheat: 946019,
      title: `fs-title`,
      logo: `fs-logo`,
    },
    rainbow: {
      tail: 1522298,
      cheat: 15770880,
      title: `lr-title`,
      logo: `lr-logo`,
    },
  },
  d = e,
  f = `"Avenir Next Condensed","Bahnschrift","DIN Condensed","Roboto Condensed","Arial Narrow",sans-serif`;
function p(e, t, n, r, i, a) {
  let o = r;
  for (e.font = `${i} ${o}px ${a}`; o > 8 && e.measureText(t).width > n;)
    ((o -= 2), (e.font = `${i} ${o}px ${a}`));
}
var m = 1.5;
function h(e, t, n) {
  return (r, i, a, o) => {
    if (o) return;
    ((r.fillStyle = `#f4f5f6`),
      r.fillRect(0, 0, i, a),
      r.save(),
      r.scale(1 / m, 1));
    let s = i * m;
    ((r.fillStyle = n),
      (r.textBaseline = `middle`),
      (r.textAlign = `left`),
      p(r, e, s * 0.4, a * 0.66, 900, d),
      r.fillText(e, s * 0.03, a * 0.53));
    let c = r.measureText(e).width;
    (p(r, t, s - c - s * 0.1, a * 0.54, 800, f),
      r.fillText(t, s * 0.07 + c, a * 0.55),
      r.restore());
  };
}
function g(e, t) {
  return (n, r, i, a) => {
    if (a) {
      ((n.fillStyle = `#000`), n.fillRect(0, 0, r, i));
      return;
    }
    ((n.fillStyle = e), n.fillRect(0, 0, r, i), t(n, r, i));
  };
}
var _ = {
  "rx-title": { cw: 4, ch: 1, paint: h(`狂飆航空`, `RUSH AIR`, `#c8102e`) },
  "rx-logo": {
    cw: 2,
    ch: 2,
    paint: g(`#c8102e`, (e, t, n) => {
      ((e.strokeStyle = `#ffffff`), (e.lineCap = `round`));
      for (let r = 0; r < 3; r++)
        ((e.lineWidth = t * (0.075 - r * 0.018)),
          e.beginPath(),
          e.moveTo(t * 0.1, n * (0.74 - r * 0.13)),
          e.quadraticCurveTo(
            t * 0.5,
            n * (0.68 - r * 0.13),
            t * 0.92,
            n * (0.16 + r * 0.05),
          ),
          e.stroke());
      ((e.fillStyle = `#ffffff`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        (e.font = `italic 900 ${Math.round(n * 0.28)}px ${f}`),
        e.fillText(`RX`, t * 0.4, n * 0.85));
    }),
  },
  "fs-title": { cw: 4, ch: 1, paint: h(`寶島航空`, `FORMOSA SKY`, `#0e6f63`) },
  "fs-logo": {
    cw: 2,
    ch: 2,
    paint: g(`#0e6f63`, (e, t, n) => {
      ((e.fillStyle = `#ffffff`),
        e.beginPath(),
        e.moveTo(t * 0.12, n * 0.56),
        e.quadraticCurveTo(t * 0.42, n * 0.24, t * 0.54, n * 0.5),
        e.quadraticCurveTo(t * 0.62, n * 0.18, t * 0.9, n * 0.28),
        e.quadraticCurveTo(t * 0.63, n * 0.42, t * 0.58, n * 0.68),
        e.quadraticCurveTo(t * 0.42, n * 0.46, t * 0.12, n * 0.56),
        e.fill());
    }),
  },
  "lr-title": { cw: 4, ch: 1, paint: h(`長虹航空`, `LONG RAINBOW`, `#173a7a`) },
  "lr-logo": {
    cw: 2,
    ch: 2,
    paint: g(`#173a7a`, (e, t, n) => {
      let r = [`#e94b3c`, `#f0a500`, `#f5d90a`, `#3fae49`, `#2c8fd6`];
      e.lineWidth = t * 0.06;
      for (let i = 0; i < r.length; i++)
        ((e.strokeStyle = r[i]),
          e.beginPath(),
          e.arc(
            t * 0.55,
            n * 0.98,
            t * (0.64 - i * 0.07),
            Math.PI * 1.08,
            Math.PI * 1.78,
          ),
          e.stroke());
    }),
  },
  "cabin-win": {
    cw: 4,
    ch: 1,
    paint: (e, t, n, r) => {
      r || ((e.fillStyle = `#f4f5f6`), e.fillRect(0, 0, t, n));
      let i = (t / 26) * 0.44,
        a = n * 0.52;
      e.fillStyle = r ? `#d0d0d0` : `#1d2733`;
      for (let r = 0; r < 26; r++) {
        let o = (t / 26) * (r + 0.5) - i / 2;
        (e.beginPath(),
          e.roundRect
            ? e.roundRect(o, n * 0.24, i, a, i * 0.45)
            : e.rect(o, n * 0.24, i, a),
          e.fill());
      }
    },
  },
};
function v(e, t = 0, a = 16763274) {
  return t > 0
    ? r(a, t, e.layer, { rough: 0.35, flags: n.TEXCOL })
    : i(16777215, e.layer, { rough: 0.4 });
}
function y(e, t, n, r, i, o, s, c, l) {
  let u = 2.02;
  for (let d = 0; d < c; d++) {
    let f = r + ((i - r) * d) / c,
      p = r + ((i - r) * (d + 1)) / c,
      m = n * u * Math.cos(f),
      h = a + u * Math.sin(f),
      g = n * u * Math.cos(p),
      _ = a + u * Math.sin(p),
      v = t.v0 + ((t.v1 - t.v0) * d) / c,
      y = t.v0 + ((t.v1 - t.v0) * (d + 1)) / c,
      b = n > 0 ? s : o,
      x = n > 0 ? o : s;
    e.quadUV([m, h, b], [m, h, x], [g, _, x], [g, _, b], t.u0, v, t.u1, y, l);
  }
}
function b(e, t, n, r, i) {
  (e.push(), e.translate(0, n, 0), e.rotateX(-Math.PI / 2));
  let a = [];
  for (let e = 0; e < t.length; e += 2) a.push(t[e], -t[e + 1]);
  (e.extrude(a, r, i), e.pop());
}
function x(e, c, l = `rush`, d = !0) {
  let f = u[l],
    p = i(15922422, t.PLAIN, { rough: 0.38, metal: 0.12 }),
    m = i(12172996, t.PLAIN, { rough: 0.45, metal: 0.3 }),
    h = i(2303788, t.PLAIN, { rough: 0.55, metal: 0.2 }),
    g = i(f.tail, t.PLAIN, { rough: 0.4, metal: 0.1 }),
    _ = i(1317668, t.PLAIN, { rough: 0.12, metal: 0.6 }),
    x = e.vcount;
  (e.push(),
    e.translate(0, a, 22),
    e.rotateX(-Math.PI / 2),
    e.lathe(
      0,
      0,
      [
        0.22,
        0,
        0.9,
        2.4,
        1.5,
        5.4,
        1.92,
        8.6,
        o,
        10.6,
        o,
        36.4,
        1.93,
        38.7,
        1.68,
        40.7,
        1.2,
        42.3,
        0.55,
        43.5,
        0.06,
        44,
      ],
      14,
      p,
    ),
    e.pop(),
    e.tintRange(x, e.vcount, (e, t, n) => (n < 2.5 ? { ao: 0.8 } : null)));
  let S = i(f.cheat, t.PLAIN, { rough: 0.4 }),
    C = c.sign(`cabin-win`),
    w = v(C, 1.6),
    T = c.sign(f.title),
    E = v(T);
  for (let t of [1, -1]) {
    let n = 2.015,
      r = -0.03,
      i = -0.15,
      o = t > 0 ? 15.5 : -17.5,
      s = t > 0 ? -17.5 : 15.5;
    (e.quad(
      [t * n * Math.cos(i), a + n * Math.sin(i), o],
      [t * n * Math.cos(i), a + n * Math.sin(i), s],
      [t * n * Math.cos(r), a + n * Math.sin(r), s],
      [t * n * Math.cos(r), a + n * Math.sin(r), o],
      0,
      0,
      S,
    ),
      y(e, C, t, 0.05, 0.31, -15.8, -2, 1, w),
      y(e, C, t, 0.05, 0.31, -0.6, 13.2, 1, w),
      y(e, T, t, 0.37, 0.93, -15.6, -9.3, 3, E));
  }
  {
    let t = 0.42,
      n = 0.8,
      r = -19.4,
      i = 1.51,
      o = 1.81;
    for (let s of [-1, 1]) {
      let c = [s * i * Math.cos(t), a + i * Math.sin(t), r],
        l = [s * o * Math.cos(t), a + o * Math.sin(t), -18],
        u = [s * o * Math.cos(n), a + o * Math.sin(n), -18],
        d = [s * i * Math.cos(n), a + i * Math.sin(n), r];
      s > 0 ? e.quad(l, c, d, u, 0, 0, _) : e.quad(c, l, u, d, 0, 0, _);
    }
  }
  for (let i of [-1, 1])
    (e.push(),
      e.translate(0, 2.0999999999999996, 0),
      e.rotateZ(i * 0.06),
      b(e, [i * 1.4, -4.2, i * 17, 3.4, i * 17, 5.2, i * 1.4, 3.6], 0, 0.34, p),
      e.push(),
      e.translate(i * 16.95, 0, 0),
      e.rotateY(Math.PI / 2),
      e.extrude([-3.4, 0, -5.2, 0, -5.45, 1.9, -4.65, 1.9], 0.12, g),
      e.pop(),
      e
        .setPaint(
          r(i < 0 ? 16722463 : 2817882, 6, t.PLAIN, { flags: n.ALWAYS }),
        )
        .box(i * 17 - 0.15, 0.12, 3.3, i * 17 + 0.15, 0.34, 3.7, 63),
      e.pop(),
      e.push(),
      e.rotateX(-Math.PI / 2),
      e.cylinder(i * 5.9, 1.25, 0.8, 0.88, -0.4, 4.4, 14, !0, m),
      e.disc(i * 5.9, 4.42, 1.25, 0.76, 14, !0, h),
      e.cylinder(i * 5.9, 1.25, 0.3, 0.58, -1.5, -0.4, 10, !0, h),
      e.pop(),
      e
        .setPaint(m)
        .box(i * 5.9 - 0.16, 1.95, -2.8, i * 5.9 + 0.16, 2.4, 0.6, 63));
  for (let t of [-1, 1])
    b(
      e,
      [t * 0.9, 16.4, t * 7.2, 19.6, t * 7.2, 21.2, t * 0.9, 20.2],
      3.95,
      0.22,
      p,
    );
  (e.push(),
    e.rotateY(-Math.PI / 2),
    e.extrude([13.6, 5.1, 19.4, 11.8, 21.5, 11.8, 21.9, 3.8], 0.36, g),
    e.pop());
  let D = c.sign(f.logo),
    O = v(D),
    k = 9.6,
    A = 18.2,
    j = 20.8,
    M = 0.19;
  (e.quadUV(
    [M, 7, j],
    [M, 7, A],
    [M, k, A],
    [M, k, j],
    D.u0,
    D.v0,
    D.u1,
    D.v1,
    O,
  ),
    e.quadUV(
      [-0.19, 7, A],
      [-0.19, 7, j],
      [-0.19, k, j],
      [-0.19, k, A],
      D.u0,
      D.v0,
      D.u1,
      D.v1,
      O,
    ));
  let N = r(16722463, 7, t.PLAIN, { flags: n.BLINK, ex: 0.3 });
  if (
    (e.setPaint(N).box(-0.18, 5.4 - 0.02, -2, 0.18, 5.7, -1.6, 63),
    e.setPaint(N).box(-0.18, 1.4 - 0.3, 3, 0.18, 1.42, 3.4, 63),
    e
      .setPaint(r(16777215, 6, t.PLAIN, { flags: n.ALWAYS }))
      .box(-0.12, 3.9, 21.95, 0.12, 4.2, 22.25, 63),
    d)
  ) {
    let n = i(1447963, t.PLAIN, { rough: 0.9 });
    (e.cylinder(0, -17, 0.09, 0.09, 0.45, 1.7, 6, !1, m),
      e.setPaint(n).box(-0.38, 0, -17.35, 0.38, 0.72, -16.65, 63));
    for (let t of [-1, 1])
      (e.cylinder(t * 3.2, s, 0.13, 0.13, 0.6, 2.0999999999999996, 6, !1, m),
        e
          .setPaint(n)
          .box(
            t * 3.2 - 0.62,
            0,
            1.05,
            t * 3.2 + 0.62,
            1.1,
            2.1500000000000004,
            63,
          ));
  }
}
