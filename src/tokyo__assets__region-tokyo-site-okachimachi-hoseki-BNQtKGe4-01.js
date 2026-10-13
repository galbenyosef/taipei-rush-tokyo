// tokyo__assets__region-tokyo-site-okachimachi-hoseki-BNQtKGe4 01 — key
// Lines 1-230 of readable/tokyo__assets__region-tokyo-site-okachimachi-hoseki-BNQtKGe4.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { l as t } from "./world-Bo9wkXrT.js";
import {
  At as n,
  Vt as r,
  jt as i,
  r as a,
  u as o,
} from "./region-tokyo-BcM3fReU.js";
import { n as s } from "./sites-kit-BhplXgcu.js";
import {
  D as c,
  E as l,
  I as u,
  M as d,
  P as f,
  R as p,
  T as m,
  V as h,
  Y as g,
  Z as _,
  _ as v,
  j as y,
  w as b,
  x,
  y as S,
  z as C,
} from "./region-tokyo-sites-kit-X3MRd0jr.js";
var w = e({ default: () => E }),
  T = 26587,
  E = t({
    state: (e) => +!!a(o.hours, e),
    art: [
      {
        key: `tenants`,
        w: 256,
        h: 64,
        paint: (e, t, r, i) =>
          g(
            e,
            t,
            r,
            [1, 2, 3, 4, 5, 6, 7, 8].map((e) => n(`sites.tenant.${e}`)),
            i,
          ),
      },
      {
        key: `signs`,
        w: 512,
        h: 96,
        legibility: 3,
        paint: (e, t, r, i) =>
          C(
            e,
            t,
            r,
            {
              cols: 1,
              rows: 3,
              cells: [
                {
                  bg: `#14121a`,
                  fg: `#f2d27a`,
                  text: n(`sites.hoseki.shop-1`),
                  style: `lightbox`,
                },
                {
                  bg: `#ffffff`,
                  fg: `#1a3a8a`,
                  text: n(`sites.hoseki.shop-2`),
                  style: `lightbox`,
                },
                {
                  bg: `#5a0a1a`,
                  fg: `#ffffff`,
                  text: n(`sites.hoseki.shop-3`),
                  style: `lightbox`,
                },
              ],
            },
            i,
          ),
      },
      {
        key: `jewel`,
        w: 256,
        h: 128,
        paint: (e, t, n, r) => h(e, t, n, { kind: `jewel` }, r),
      },
      {
        key: `kaitori`,
        w: 128,
        h: 128,
        legibility: 2,
        paint: (e, t, a, o) => {
          (p(
            e,
            t,
            a * 0.55,
            {
              bg: `#ffd21e`,
              fg: `#c8161c`,
              text: n(`sites.hoseki.kaitori`),
              style: `plain`,
            },
            o,
          ),
            e.save(),
            e.translate(0, a * 0.55),
            p(
              e,
              t,
              a * 0.45,
              {
                bg: `#ffffff`,
                fg: `#1a1a1a`,
                text: i(`sites.hoseki.price`, { price: r(T) }),
                sub: n(`sites.hoseki.oroshi`),
                style: `plain`,
              },
              o,
            ),
            e.restore());
        },
      },
      {
        key: `town`,
        w: 64,
        h: 256,
        legibility: 2,
        paint: (e, t, r, i) =>
          _(
            e,
            t,
            r,
            {
              bg: `#1a3a6a`,
              fg: `#ffe680`,
              text: n(`sites.hoseki.town`),
              style: `plain`,
            },
            i,
          ),
      },
    ],
    mid: u,
    *near(e) {
      let { w: t, d: n } = e.frame,
        r = -n / 2,
        i = e.state > 0;
      f(e, { x0: -t / 2, z0: r, x1: t / 2, z1: r + 1.2 });
      let a = yield* b(e, {
        floors: 3,
        groundH: 3.8,
        floorH: 3.1,
        wall: 13156012,
        trim: 9076848,
        windows: `grid`,
        recess: 0,
        tenants: `tenants`,
      });
      y(e, {
        x: a.x0 + 0.4,
        y0: 4.2,
        y1: 9.2,
        z: a.front,
        out: 0.7,
        key: `town`,
        thick: 0.2,
      });
      let o = a.x1 - a.x0;
      for (let t = 0; t < 3; t++) {
        let n = a.x0 + (o * t) / 3 + 0.12,
          u = a.x0 + (o * (t + 1)) / 3 - 0.12;
        if (
          (e.lm.setPaint(S(6972504, 0.6)),
          e.lm.box(u, 0, r + 0.1, u + 0.24, 3.8, r + 0.35),
          m(e, `signs`, t, 1, 3, n + 0.1, 2.95, u - 0.1, 3.6, r + 0.06, +!!i),
          e.lm.setPaint(S(v.black, 0.5)),
          e.lm.box(n, 2.9, r + 0.08, u, 3.65, r + 0.3),
          !i)
        ) {
          d(e, { x0: n, x1: u, h: 2.85, z: r + 0.35 });
          continue;
        }
        (c(e, {
          x0: n,
          x1: u,
          z: r + 0.35,
          h: 2.85,
          depth: 2.4,
          light: 16317183,
          floor: 14210252,
        }),
          e.lm.setPaint(S(2762806, 0.4, 0.3)),
          e.lm.box(n + 0.3, 0, r + 1.5, u - 0.3, 0.85, r + 2),
          e.art.tex(e.atlas.r(`jewel`), 16777215, 0.7),
          e.art.rectY(n + 0.35, r + 1.52, u - 0.35, r + 1.98, 0.87, 1),
          e.art.rectZ(n + 0.35, 0.3, u - 0.35, 0.82, r + 1.49, -1),
          l(e, {
            x0: n + (u - n) * 0.55,
            x1: u - 0.05,
            z: r + 0.38,
            h: 2.6,
            kind: `sash`,
            open: !1,
            leaves: 1,
          }),
          s(e, {
            x: (n + u) / 2,
            z: r + 2.3,
            rot: 0,
            pose: `stand`,
            palette: `office`,
            scale: 0.96,
          }),
          t === 1 && (yield));
      }
      (e.box(a.x0, r, a.x1, r + 0.4, 0, 3.8),
        i &&
          x(e, {
            x: a.x1 - 1.2,
            z: r - 0.6,
            key: `kaitori`,
            rot: -0.2,
            h: 1.1,
            w: 0.7,
          }));
    },
  });
