// tokyo__assets__region-tokyo-site-nishiginza-lucky-CBTbuSQh 01 — art
// Lines 1-246 of readable/tokyo__assets__region-tokyo-site-nishiginza-lucky-CBTbuSQh.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { l as t } from "./world-Bo9wkXrT.js";
import { At as n, d as r, i, r as a } from "./region-tokyo-BcM3fReU.js";
import { n as o, r as s } from "./sites-kit-BhplXgcu.js";
import {
  K as c,
  P as l,
  R as u,
  T as d,
  V as f,
  Z as p,
  _ as m,
  u as h,
  v as g,
  y as _,
  z as v,
} from "./region-tokyo-sites-kit-X3MRd0jr.js";
var y = e({ default: () => b }),
  b = t({
    state: (e) => (a(r.hours, e) ? (i(e) ? 2 : 1) : 0),
    art: [
      {
        key: `sign`,
        w: 256,
        h: 64,
        legibility: 9,
        paint: (e, t, r, i) =>
          u(
            e,
            t,
            r,
            {
              bg: `#d8161c`,
              fg: `#ffffff`,
              text: n(`sites.lucky.name`),
              style: `lightbox`,
            },
            i,
          ),
      },
      {
        key: `windows`,
        w: 256,
        h: 128,
        paint: (e, t, r, i) =>
          v(
            e,
            t,
            r,
            {
              cols: 4,
              rows: 2,
              cells: [
                `window-1`,
                `window-2`,
                `window-3`,
                `window-4`,
                `window-5`,
                `window-6`,
                `window-10`,
                `window-1`,
              ].map((e, t) => ({
                bg: t === 0 ? `#ffd21e` : `#ffffff`,
                fg: `#c8161c`,
                text: n(`sites.lucky.${e}`),
                v: !0,
              })),
            },
            i,
          ),
      },
      {
        key: `jumbo`,
        w: 64,
        h: 256,
        legibility: 2,
        paint: (e, t, r, i) =>
          c(
            e,
            t,
            r,
            {
              text: n(`sites.lucky.jumbo`),
              bg: `#c8161c`,
              fg: `#ffe680`,
              band: `#f2c040`,
            },
            i,
          ),
      },
      {
        key: `takarakuji`,
        w: 32,
        h: 128,
        legibility: 2,
        paint: (e, t, r, i) =>
          p(
            e,
            t,
            r,
            {
              bg: `#ffffff`,
              fg: `#d8161c`,
              text: n(`sites.lucky.takarakuji`),
              style: `lightbox`,
            },
            i,
          ),
      },
      {
        key: `queue`,
        w: 256,
        h: 64,
        paint: (e, t, r, i) =>
          v(
            e,
            t,
            r,
            {
              cols: 1,
              rows: 2,
              cells: [
                {
                  bg: `#ffffff`,
                  fg: `#1a1a1a`,
                  text: n(`sites.lucky.queue`),
                  style: `plain`,
                },
                {
                  bg: `#1a1a1a`,
                  fg: `#f2d27a`,
                  text: n(`sites.lucky.okunohosomichi`),
                  style: `plain`,
                  serif: !0,
                },
              ],
            },
            i,
          ),
      },
      {
        key: `shops`,
        w: 128,
        h: 64,
        paint: (e, t, n, r) => f(e, t, n, { kind: `window` }, r),
      },
    ],
    *near(e) {
      let { w: t, d: n } = e.frame,
        r = -n / 2,
        i = n / 2,
        a = e.state,
        c = a > 0,
        u = e.lm;
      (l(e, { x0: -t / 2, z0: r, x1: t / 2, z1: i }),
        u.setPaint(_(14208956, 0.85)),
        u.box(-t / 2 + 0.15, 0, r + 0.75, t / 2 - 0.15, 6.6, i - 0.2, 55),
        u.setPaint(_(12103320, 0.85)),
        u.box(-t / 2 + 0.1, 3.2, r + 0.6, t / 2 - 0.1, 3.5, r + 0.8),
        u.box(-t / 2 + 0.1, 6.3, r + 0.6, t / 2 - 0.1, 6.6, r + 0.8));
      for (let n = 0; n < 3; n++) {
        let i = -t / 2 + 0.6 + n * 3.6,
          a = i + 3;
        (e.art.tex(e.atlas.r(`shops`), 16777215, c ? 0.5 : 0),
          e.art.rectZ(i, 0.4, a, 2.8, r + 0.73, -1),
          u.setPaint(_(m.alu, 0.3, 0.7)),
          u.box(i - 0.05, 0.3, r + 0.7, a + 0.05, 0.4, r + 0.78),
          u.setPaint(_(5924464, 0.2, 0.4)),
          u.box(i, 4, r + 0.72, a, 5.8, r + 0.74, 32));
      }
      if (
        (yield,
        h(e, {
          x0: 2.6,
          x1: t / 2 - 0.3,
          z: r + 0.75,
          open: c,
          windows: 7,
          signKey: `sign`,
          windowKey: `windows`,
        }),
        e.lm.setPaint(_(m.black, 0.5)),
        e.lm.box(t / 2 - 0.45, 3.6, r - 0.2, t / 2 - 0.2, 6.2, r + 0.75),
        e.art.tex(e.atlas.r(`takarakuji`), 16777215, +!!c),
        e.art.rectX(r - 0.15, 3.7, r + 0.7, 6.1, t / 2 - 0.46, -1),
        e.art.rectX(r + 0.7, 3.7, r - 0.15, 6.1, t / 2 - 0.19, 1),
        yield,
        a === 2)
      ) {
        for (let n = 0; n < 4; n++) {
          let i = -t / 2 + 1.4 + n * 3.2;
          (e.art.tex(e.atlas.r(`jumbo`), 16777215, 0.6),
            e.art.rectZ(i, 3.6, i + 0.7, 6.1, r + 0.7, -1));
        }
        (u.setPaint(_(11015196, 0.95)),
          u.box(-t / 2 + 0.3, 0.02, r - 1.4, 3, 0.05, r + 0.1, 4),
          s(e, {
            path: [
              [3.1, r - 0.6],
              [-t / 2 + 0.6, r - 0.6],
            ],
            people: 14,
            palette: `casual`,
            spacing: 0.75,
          }),
          d(
            e,
            `queue`,
            0,
            1,
            2,
            -t / 2 + 0.3,
            1.9,
            -t / 2 + 2.3,
            2.3,
            r + 0.7,
            0,
          ),
          d(e, `queue`, 1, 1, 2, -2, 2.9, 1.6, 3.15, r + 0.7, 0.6),
          o(e, {
            x: -t / 2 + 0.7,
            z: r - 1.6,
            rot: Math.PI / 2,
            pose: `point`,
            palette: `worker`,
          }),
          u.setPaint(g(16726554, 2.5, !0)),
          u.box(-t / 2 + 0.66, 1.1, r - 1.7, -t / 2 + 0.72, 1.6, r - 1.64));
      } else
        c &&
          (o(e, {
            x: 4.4,
            z: r - 0.5,
            rot: Math.PI,
            pose: `stand`,
            palette: `elder`,
          }),
          o(e, {
            x: 3.4,
            z: r - 1.1,
            rot: Math.PI,
            pose: `phone`,
            palette: `office`,
          }));
    },
  });
