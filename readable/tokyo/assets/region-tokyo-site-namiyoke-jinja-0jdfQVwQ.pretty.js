import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { Q as t } from "./world-CVm1JHks.js";
import { in as n } from "./region-tokyo-A7LxHjud.js";
import {
  P as r,
  T as i,
  Z as a,
  a as o,
  i as s,
  n as c,
  o as l,
  t as u,
  y as d,
  z as f,
} from "./region-tokyo-sites-kit-DAwzVR8Q.js";
var p = e({ default: () => h });
function m(e, t, n, r, a, o) {
  let s = e.lm;
  (s.push(),
    s.translate(t, 0, n),
    s.rotateY(-r),
    s.setPaint(d(10131084, 0.9)),
    s.box(-1.9, 0, -1.6, 1.9, 0.5, 1.9),
    s.setPaint(d(13123626, 0.6)));
  for (let [e, t] of [
    [-1.7, -1.4],
    [1.7, -1.4],
    [-1.7, 1.7],
    [1.7, 1.7],
  ])
    s.box(e - 0.1, 0.5, t - 0.1, e + 0.1, 3.4, t + 0.1);
  (s.setPaint(d(14209216, 0.9)),
    s.box(-1.8, 0.5, 1.6, 1.8, 3.3, 1.8, 35),
    s.setPaint(d(4881002, 0.6, 0.3)),
    s.quad(
      [2.3, 3.3, -2],
      [-2.3, 3.3, -2],
      [-2.3, 4.6, 0.15],
      [2.3, 4.6, 0.15],
    ),
    s.quad(
      [-2.3, 3.3, 2.3],
      [2.3, 3.3, 2.3],
      [2.3, 4.6, 0.15],
      [-2.3, 4.6, 0.15],
    ),
    s.setPaint(d(3031096, 0.7)),
    s.quad(
      [-2.3, 3.26, -2],
      [2.3, 3.26, -2],
      [2.3, 4.56, 0.15],
      [-2.3, 4.56, 0.15],
    ),
    s.quad(
      [2.3, 3.26, 2.3],
      [-2.3, 3.26, 2.3],
      [-2.3, 4.56, 0.15],
      [2.3, 4.56, 0.15],
    ),
    s.setPaint(d(3828314, 0.6, 0.3)),
    s.box(-2.35, 4.55, 0, 2.35, 4.75, 0.3));
  let c = a ? 14178858 : 12064284;
  (s.setPaint(d(1718826, 0.7)),
    s.sphere(0, 1.75, 0.55, 1.15, 12, 8, s.p, 0.95),
    s.setPaint(d(c, 0.35, 0.1)),
    s.sphere(0, 1.7, 0.1, 0.95, 12, 8, s.p, 0.9),
    s.box(-0.75, 1.1, -0.75, 0.75, 1.45, -0.25),
    s.setPaint(d(14200906, 0.3, 0.9)));
  for (let e of [-0.38, 0.38]) s.sphere(e, 2.05, -0.72, 0.2, 8, 6);
  s.setPaint(d(1052688, 0.5));
  for (let e of [-0.38, 0.38]) s.sphere(e, 2.05, -0.86, 0.09, 6, 4);
  (s.setPaint(d(1710618, 0.6)),
    s.box(-0.6, 1.2, -0.95, 0.6, 1.5, -0.7),
    s.setPaint(d(a ? 1315860 : 16052454, 0.4)));
  for (let e = 0; e < 6; e++)
    s.box(-0.5 + e * 0.18, 1.42, -0.98, -0.4 + e * 0.18, 1.52, -0.86);
  (s.setPaint(d(14200906, 0.3, 0.9)),
    s.box(-0.85, 2.35, -0.82, 0.85, 2.48, -0.6),
    s.pop(),
    e.art.push(),
    e.art.translate(t, 0, n),
    e.art.rotateY(-r),
    i(e, `plaques`, o, 2, 1, -0.45, 3.45, 0.45, 4.35, -2.06, 0),
    e.art.pop(),
    e.box(t - 1.9, n - 1.9, t + 1.9, n + 1.9, 0, 3.4));
}
var h = t({
  art: [
    {
      key: `gaku`,
      w: 32,
      h: 128,
      legibility: 2,
      paint: (e, t, r, i) =>
        a(
          e,
          t,
          r,
          {
            bg: `#1a1a1a`,
            fg: `#e8c86a`,
            text: n(`sites.namiyoke.gaku`),
            style: `plain`,
            serif: !0,
          },
          i,
        ),
    },
    {
      key: `plaques`,
      w: 64,
      h: 128,
      paint: (e, t, r, i) =>
        f(
          e,
          t,
          r,
          {
            cols: 2,
            rows: 1,
            cells: [
              {
                bg: `#f4ead2`,
                fg: `#1a1a1a`,
                text: n(`sites.namiyoke.ojishi`),
                v: !0,
                serif: !0,
              },
              {
                bg: `#f4ead2`,
                fg: `#1a1a1a`,
                text: n(`sites.namiyoke.mejishi`),
                v: !0,
                serif: !0,
              },
            ],
          },
          i,
        ),
    },
    {
      key: `tsuka`,
      w: 128,
      h: 128,
      paint: (e, t, r, i) =>
        f(
          e,
          t,
          r,
          {
            cols: 3,
            rows: 1,
            cells: [
              {
                bg: `#9a968c`,
                fg: `#1a1a1a`,
                text: n(`sites.namiyoke.tamago`),
                v: !0,
                serif: !0,
              },
              {
                bg: `#a8a49a`,
                fg: `#1a1a1a`,
                text: n(`sites.namiyoke.sushi`),
                v: !0,
                serif: !0,
              },
              {
                bg: `#8e8a80`,
                fg: `#1a1a1a`,
                text: n(`sites.namiyoke.ebi`),
                v: !0,
                serif: !0,
              },
            ],
          },
          i,
        ),
    },
    {
      key: `shide`,
      w: 32,
      h: 64,
      paint: (e, t, n) => {
        ((e.fillStyle = `#ffffff`),
          e.fillRect(0, 0, t, n),
          (e.fillStyle = `#d8d8d0`));
        for (let r = 0; r < 4; r++)
          e.fillRect((r % 2) * t * 0.5, (r / 4) * n, t * 0.5, 2);
      },
    },
  ],
  *near(e) {
    let { w: t, d: n } = e.frame,
      a = -n / 2,
      f = n / 2,
      p = e.lm;
    (r(e, { x0: -t / 2, z0: a, x1: t / 2, z1: f, color: 10130570 }),
      p.setPaint(d(11578530, 0.9)),
      p.box(-1.2, 0, a, 1.2, 0.05, f - 4.6, 4),
      e.floor(-t / 2, a, t / 2, f, 0),
      s(e, -t / 2 + 0.2, a + 0.25, -2.2, a + 0.25),
      s(e, 2.2, a + 0.25, t / 2 - 0.2, a + 0.25),
      s(e, -t / 2 + 0.2, a + 0.25, -t / 2 + 0.2, f - 0.2),
      s(e, t / 2 - 0.2, a + 0.25, t / 2 - 0.2, f - 0.2),
      p.setPaint(d(14209216, 0.9)),
      p.box(-t / 2 + 0.2, 0, f - 0.4, t / 2 - 0.2, 2.6, f - 0.15, 36),
      yield,
      o(e, { x: 0, z: a + 1, span: 3.2, h: 4.6, kind: `myojin`, gaku: `gaku` }),
      m(e, -t / 2 + 2.5, -0.6, Math.PI / 2, !1, 0),
      yield,
      m(e, t / 2 - 2.5, -0.6, -Math.PI / 2, !0, 1),
      yield,
      u(e, -t / 2 + 2.6, a + 3.6, 0));
    let h = a + 3.2;
    for (let n = 0; n < 3; n++) {
      let r = t / 2 - 1.6 - n * 1.3;
      (p.setPaint(d(9078396, 0.9)),
        p.box(r - 0.55, 0, h - 0.4, r + 0.55, 0.35, h + 0.4),
        p.setPaint(d([10131084, 11052186, 9341568][n], 0.85)),
        p.box(r - 0.42, 0.35, h - 0.16, r + 0.42, 1.9 - n * 0.2, h + 0.16),
        i(
          e,
          `tsuka`,
          n,
          3,
          1,
          r - 0.3,
          0.55,
          r + 0.3,
          1.75 - n * 0.2,
          h - 0.17,
          0,
        ),
        e.box(r - 0.55, h - 0.4, r + 0.55, h + 0.4, 0, 1.9));
    }
    for (let t of [a + 6.5, f - 6.2])
      for (let n of [-1.9, 1.9]) l(e, n, t, 1.9);
    c(e, {
      x: 0,
      z: f - 2.6,
      w: 7,
      d: 3.6,
      h: 3.6,
      color: 15261900,
      shide: `shide`,
    });
  },
});
export { p as t };
