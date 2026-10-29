import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { Q as t } from "./world-CVm1JHks.js";
import { f as n, in as r, r as i } from "./region-tokyo-A7LxHjud.js";
import { n as a } from "./sites-kit-BhplXgcu.js";
import {
  B as o,
  P as s,
  R as c,
  S as l,
  T as u,
  U as d,
  Z as f,
  a as p,
  b as m,
  k as h,
  n as g,
  o as _,
  r as v,
  s as y,
  t as b,
  y as x,
  z as S,
} from "./region-tokyo-sites-kit-DAwzVR8Q.js";
var C = e({ default: () => E }),
  w = [1, 2, 3, 4, 5, 6, 7, 8].map((e) => `sites.karasumori.bar-${e}`),
  T = [
    [`#1a1a1a`, `#ffffff`],
    [`#f4e8d0`, `#7a1a4a`],
    [`#c8161c`, `#ffffff`],
    [`#ffffff`, `#1a3a6a`],
    [`#2a1a0a`, `#ffd27a`],
    [`#0a0a2a`, `#7ad8ff`],
    [`#f2d21e`, `#1a1a1a`],
    [`#4a2a1a`, `#f4ead2`],
  ],
  E = t({
    state: (e) => +!!i(n.hours, e),
    art: [
      {
        key: `names`,
        w: 256,
        h: 64,
        legibility: 3,
        paint: (e, t, n, i) =>
          S(
            e,
            t,
            n,
            {
              cols: 4,
              rows: 2,
              cells: w.map((e, t) => ({
                bg: T[t][0],
                fg: T[t][1],
                text: r(e),
                style: `lightbox`,
              })),
            },
            i,
          ),
      },
      {
        key: `lanterns`,
        w: 256,
        h: 64,
        paint: (e, t, n, i) =>
          d(
            e,
            t,
            n,
            {
              items: [1, 2, 3, 4].map((e) => ({
                text: r(`sites.karasumori.lantern-${e}`),
              })),
            },
            i,
          ),
      },
      {
        key: `menus`,
        w: 128,
        h: 128,
        paint: (e, t, n, i) =>
          S(
            e,
            t,
            n,
            {
              cols: 2,
              rows: 2,
              cells: [1, 2, 3, 4].map((e) => ({
                bg: `#f4ecd8`,
                fg: `#1a1a1a`,
                text: r(`sites.karasumori.menu-${e}`),
                v: !0,
              })),
            },
            i,
          ),
      },
      {
        key: `gate`,
        w: 256,
        h: 64,
        legibility: 9,
        paint: (e, t, n, i) =>
          c(
            e,
            t,
            n,
            {
              bg: `#1a1a1a`,
              fg: `#f4ead2`,
              text: r(`sites.karasumori.sando`),
              style: `lightbox`,
              serif: !0,
            },
            i,
          ),
      },
      {
        key: `gaku`,
        w: 32,
        h: 128,
        legibility: 2,
        paint: (e, t, n, i) =>
          f(
            e,
            t,
            n,
            {
              bg: `#2a2a2a`,
              fg: `#e8d8a0`,
              text: r(`sites.karasumori.gaku`),
              style: `plain`,
              serif: !0,
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
      {
        key: `chalk`,
        w: 64,
        h: 128,
        paint: (e, t, n, i) =>
          o(
            e,
            t,
            n,
            {
              lines: [
                r(`sites.karasumori.menu-1`),
                r(`sites.karasumori.menu-3`),
                r(`sites.common.nama`),
              ],
            },
            i,
          ),
      },
    ],
    *near(e) {
      let { w: t, d: n } = e.frame,
        r = -n / 2,
        i = n / 2,
        o = e.state > 0,
        c = 1.5,
        d = i - 6.6;
      s(e, { x0: -1.5, z0: r, x1: c, z1: i, color: 8815226 });
      let f = t / 2 - c - 0.15;
      yield* y(e, {
        x0: -1.5,
        x1: c,
        z0: r + 0.2,
        z1: d,
        barD: f,
        gH: 2.6,
        uH: 2.6,
        open: o,
        names: { key: `names`, cols: 4, rows: 2 },
        lanterns: { key: `lanterns`, n: 4 },
        menus: { key: `menus`, cols: 2, rows: 2 },
        gate: { key: `gate`, h: 3.3 },
      });
      let S = e.lm;
      (S.setPaint(x(12103842, 0.9)),
        S.box(-t / 2 + 0.15, 0, r + 0.2, -1.5, 5.5, r + 0.35, 32),
        S.box(c, 0, r + 0.2, t / 2 - 0.15, 5.5, r + 0.35, 32),
        e.art.tex(e.atlas.r(`chalk`), 16777215, 0),
        e.art.rectZ(2, 0.6, 2.6, 1.8, r + 0.18, -1));
      for (let n of [-1, 1]) {
        let i = n < 0 ? -t / 2 + 0.6 : 2.1,
          a = n < 0 ? -2.1 : t / 2 - 0.6;
        for (let e = 0; e < 3; e++) {
          let t = i + ((a - i) * (e + 0.5)) / 3;
          (S.setPaint(m(5925490)),
            S.box(t - 0.6, 3.2, r + 0.17, t + 0.6, 4.3, r + 0.2, 32),
            S.setPaint(x(6972504, 0.8)),
            S.box(t - 0.68, 3.12, r + 0.15, t + 0.68, 3.2, r + 0.22));
        }
        for (let t = 0; t < 2; t++) {
          let a = i + 0.4 + t * 1.3;
          u(
            e,
            `names`,
            (n < 0 ? 4 : 0) + t + 2,
            4,
            2,
            a,
            1.9,
            a + 1.1,
            2.3,
            r + 0.17,
            +!!o,
          );
        }
        (l(e, a - 0.6, 2.7, r - 0.1),
          h(e, n < 0 ? i - 0.3 : a + 0.3, r + 0.1, 0, 5.5));
      }
      (S.setPaint(x(10130570, 0.9)),
        S.box(-t / 2 + 0.15, 0, d, -t / 2 + 0.4, 7, i - 0.15, 5),
        S.box(t / 2 - 0.4, 0, d, t / 2 - 0.15, 7, i - 0.15, 6),
        S.box(-t / 2 + 0.15, 0, i - 0.4, t / 2 - 0.15, 7, i - 0.15, 36),
        S.box(-t / 2 + 0.4, 5.2, d - 0.1, -1.5, 5.5, d + 0.2),
        S.box(c, 5.2, d - 0.1, t / 2 - 0.4, 5.5, d + 0.2),
        S.setPaint(x(7236194, 0.95)),
        S.box(-t / 2 + 0.4, -0.2, d, t / 2 - 0.4, 0.04, i - 0.4, 4),
        S.setPaint(x(11052186, 0.9)),
        S.box(-0.9, -0.2, d, 0.9, 0.06, i - 2.5, 4),
        e.floor(-t / 2 + 0.4, d, t / 2 - 0.4, i - 0.4, 0),
        yield,
        p(e, {
          x: 0,
          z: d + 0.4,
          span: 2.6,
          h: 3.9,
          kind: `myojin`,
          color: 12894908,
          gaku: `gaku`,
        }),
        v(e, -1.9, d + 2.2, 0, `a`),
        v(e, 1.9, d + 2.2, 0, `un`),
        b(e, -t / 2 + 2, d + 3, Math.PI / 2),
        _(e, t / 2 - 1.4, d + 1.6, 1.8),
        g(e, {
          x: 0,
          z: i - 2.4,
          w: 5.2,
          d: 3,
          h: 3.6,
          color: 14210252,
          shide: `shide`,
        }),
        yield,
        o &&
          (a(e, {
            x: -0.6,
            z: r + 3.4,
            rot: -Math.PI / 2,
            pose: `stand`,
            palette: `office`,
            hold: 16042058,
          }),
          a(e, {
            x: 0.7,
            z: r + 6.2,
            rot: Math.PI / 2,
            pose: `lean`,
            palette: `office`,
            hold: 16042058,
          }),
          a(e, {
            x: 0.1,
            z: r + 1,
            rot: Math.PI,
            pose: `phone`,
            palette: `office`,
          })));
    },
  });
export { C as t };
