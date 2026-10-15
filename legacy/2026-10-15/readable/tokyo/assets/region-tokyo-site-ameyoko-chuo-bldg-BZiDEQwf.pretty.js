import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { l as t } from "./world-Bo9wkXrT.js";
import { At as n, g as r, r as i } from "./region-tokyo-BcM3fReU.js";
import { n as a, t as o } from "./sites-kit-BhplXgcu.js";
import {
  F as s,
  I as c,
  M as l,
  N as u,
  P as d,
  R as f,
  T as p,
  V as m,
  Y as h,
  Z as g,
  _,
  j as v,
  v as y,
  w as b,
  y as x,
  z as S,
} from "./region-tokyo-sites-kit-X3MRd0jr.js";
var C = e({ default: () => E }),
  w = [`stall-1`, `stall-2`, `stall-3`, `stall-4`, `stall-5`, `stall-6`],
  T = [2775720, 13116956, 2787914, 14721562, 8006282, 1731210],
  E = t({
    state: (e) => +!!i(r.hours, e),
    art: [
      {
        key: `tenants`,
        w: 256,
        h: 64,
        paint: (e, t, r, i) =>
          h(
            e,
            t,
            r,
            [1, 2, 3, 4, 5, 6, 7, 8].map((e) => n(`sites.tenant.${e}`)),
            i,
          ),
      },
      {
        key: `name`,
        w: 64,
        h: 512,
        legibility: 9,
        paint: (e, t, r, i) =>
          g(
            e,
            t,
            r,
            {
              bg: `#f4f2ec`,
              fg: `#c8161c`,
              text: n(`sites.chuo-bldg.name`),
              style: `lightbox`,
            },
            i,
          ),
      },
      {
        key: `chika`,
        w: 256,
        h: 64,
        legibility: 3,
        paint: (e, t, r, i) =>
          f(
            e,
            t,
            r,
            {
              bg: `#c8161c`,
              fg: `#ffffff`,
              text: n(`sites.chuo-bldg.chika`),
              sub: n(`sites.chuo-bldg.chika-sub`),
              style: `lightbox`,
            },
            i,
          ),
      },
      {
        key: `stalls`,
        w: 256,
        h: 128,
        legibility: 2,
        paint: (e, t, r, i) =>
          S(
            e,
            t,
            r,
            {
              cols: 2,
              rows: 3,
              cells: w.map((e, t) => ({
                bg: [
                  `#ffffff`,
                  `#fff3c8`,
                  `#ffffff`,
                  `#f4e4c8`,
                  `#ffffff`,
                  `#e8f4ff`,
                ][t],
                fg: [
                  `#1a3a8a`,
                  `#c8161c`,
                  `#1a6a3a`,
                  `#8a4a10`,
                  `#4a1a6a`,
                  `#0a4a7a`,
                ][t],
                text: n(`sites.chuo-bldg.${e}`),
              })),
            },
            i,
          ),
      },
      {
        key: `goods`,
        w: 128,
        h: 64,
        paint: (e, t, n, r) => m(e, t, n, { kind: `dry` }, r),
      },
      {
        key: `choco`,
        w: 128,
        h: 64,
        paint: (e, t, r, i) =>
          m(e, t, r, { kind: `choco`, label: n(`sites.chuo-bldg.yasui`) }, i),
      },
      {
        key: `down`,
        w: 128,
        h: 32,
        paint: (e, t, r, i) =>
          f(
            e,
            t,
            r,
            {
              bg: `#ffd21e`,
              fg: `#1a1a1a`,
              text: n(`sites.chuo-bldg.down`),
              style: `plain`,
            },
            i,
          ),
      },
    ],
    mid: c,
    *near(e) {
      let { w: t, d: n } = e.frame,
        r = -n / 2,
        i = e.state > 0;
      d(e, { x0: -t / 2, z0: r, x1: t / 2, z1: r + 0.45 });
      let c = yield* b(e, {
        floors: 8,
        groundH: 4,
        floorH: 2.95,
        wall: 14472904,
        trim: 12103840,
        windows: `band`,
        recess: 0,
        tenants: `tenants`,
      });
      (v(e, {
        x: c.x0 + 0.5,
        y0: 9,
        y1: 21,
        z: c.front,
        out: 1,
        key: `name`,
        lit: !0,
        thick: 0.3,
      }),
        e.lm.setPaint(x(13156528, 0.85)),
        e.lm.box(c.x0, 3, r + 0.05, c.x1, 4, r + 0.4, 40));
      let f = 2.4,
        m = c.x0 + 0.2,
        h = c.x1 - 0.2,
        g = [],
        S = -4 - f / 2 - 0.3,
        C = -2.5;
      for (let e = 0; e < 6; e++) {
        let t = m + ((h - m) * e) / 6,
          n = m + ((h - m) * (e + 1)) / 6 - 0.15;
        if (n > S && t < C) {
          if (t < S) n = S;
          else if (n > C) t = C;
          else continue;
        }
        n - t > 1.2 && g.push([t, n]);
      }
      let w = 0;
      for (let [t, n] of g) {
        if (!i) {
          l(e, { x0: t, x1: n, h: 2.9, z: r + 0.3 });
          continue;
        }
        let a = Math.max(1, Math.round((n - t) / 1.2));
        for (let i = 0; i < a; i++)
          (e.art.tex(e.atlas.r(w % 3 == 2 ? `choco` : `goods`), 16777215, 0.55),
            e.art.rectZ(
              t + ((n - t) * i) / a,
              0.9,
              t + ((n - t) * (i + 1)) / a,
              2.9,
              r + 2.4,
              -1,
            ));
        (e.art.col(16774364, 0.4, 0.8),
          e.art.rectZ(t, 0.05, n, 0.9, r + 2.4, -1),
          e.lm.setPaint(x(9071172, 0.85)),
          e.lm.box(t + 0.1, 0, r - 0.5, n - 0.1, 0.7, r + 0.3),
          e.lm.box(t + 0.1, 0, r + 0.3, n - 0.1, 1.05, r + 0.9));
        let o = w % 3 == 2 ? `choco` : `goods`;
        (e.art.tex(e.atlas.r(o), 16777215, 0),
          e.art.rectY(t + 0.15, r - 0.45, n - 0.15, r + 0.28, 0.72, 1),
          e.art.rectY(t + 0.15, r + 0.32, n - 0.15, r + 0.88, 1.07, 1),
          e.art.box(t + 0.2, 0.72, r - 0.45, n - 0.2, 0.92, r - 0.1, 55),
          e.art.box(t + 0.2, 1.07, r + 0.35, n - 0.2, 1.3, r + 0.75, 55),
          e.box(t + 0.1, r - 0.5, n - 0.1, r + 0.9, 0, 1.05),
          s(e, {
            x0: t,
            x1: n,
            y: 3,
            z: r + 0.05,
            out: 1.3,
            drop: 0.4,
            color: T[w % T.length],
          }),
          p(
            e,
            `stalls`,
            w,
            2,
            3,
            t + 0.05,
            2.28,
            n - 0.05,
            2.58,
            r - 1.27,
            0.6,
          ),
          e.lm.setPaint(y(16773320, 2.6)),
          e.lm.sphere((t + n) / 2, 2.4, r - 0.4, 0.06, 6, 4),
          w++,
          w % 2 == 0 && (yield));
      }
      let E = -4 - f / 2,
        D = -2.8;
      e.lm.setPaint(x(6973024, 0.9));
      for (let t = 0; t < 8; t++)
        e.lm.box(
          E,
          -0.18 * (t + 1),
          r + 0.5 + t * 0.3,
          D,
          -0.18 * t,
          r + 0.8 + t * 0.3,
          36,
        );
      e.lm.setPaint(x(14201370, 0.6));
      for (let t = 0; t < 8; t++)
        e.lm.box(
          E,
          -0.18 * t - 0.02,
          r + 0.5 + t * 0.3,
          D,
          -0.18 * t,
          r + 0.56 + t * 0.3,
          4,
        );
      (e.art.col(i ? 16773336 : 2762790, i ? 0.5 : 0, 0.7),
        e.art.rectZ(E, -1.5, D, 2.6, r + 3, -1),
        e.lm.setPaint(x(_.steel, 0.4, 0.6)));
      for (let t of [-5.25, -2.75])
        e.lm.box(t - 0.03, 0, r + 0.4, t + 0.03, 1, r + 2.8);
      (u(e, {
        x0: -5.5,
        x1: -2.5,
        y0: 2.95,
        y1: 3.75,
        z: r - 0.02,
        key: `chika`,
        lit: !0,
        depth: 0.15,
      }),
        e.art.tex(e.atlas.r(`down`), 16777215, 0.5),
        e.art.rectZ(E, 2.55, D, 2.88, r + 0.3, -1),
        e.box(-5.3, r + 0.4, E, r + 2.8, 0, 1),
        e.box(D, r + 0.4, -2.6999999999999997, r + 2.8, 0, 1),
        yield,
        i &&
          (a(e, {
            x: -4 - f / 2 - 1.8,
            z: r - 0.9,
            rot: 0,
            pose: `point`,
            palette: `vendor`,
          }),
          o(
            e,
            7,
            { x0: -t / 2, z0: r - 3, x1: t / 2, z1: r - 1.6 },
            {
              face: 0 + Math.PI,
              poses: [`stand`, `phone`, `walk`, `stand`],
              palette: `casual`,
              spacing: 1.1,
              avoid: [
                { x0: -5.6000000000000005, z0: r - 3.2, x1: -2.4, z1: r },
              ],
            },
          )));
    },
  });
export { C as t };
