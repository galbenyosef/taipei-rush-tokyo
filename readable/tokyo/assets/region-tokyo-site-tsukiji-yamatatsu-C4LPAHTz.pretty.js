import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { Q as t } from "./world-CVm1JHks.js";
import { c as n, in as r, r as i } from "./region-tokyo-A7LxHjud.js";
import { n as a, r as o } from "./sites-kit-BhplXgcu.js";
import {
  G as s,
  I as c,
  P as l,
  R as u,
  V as d,
  Y as f,
  p,
  w as m,
  y as h,
  z as g,
} from "./region-tokyo-sites-kit-DAwzVR8Q.js";
var _ = e({ default: () => v }),
  v = t({
    state: (e) => +!!i(n.hours, e),
    art: [
      {
        key: `tenants`,
        w: 256,
        h: 64,
        paint: (e, t, n, i) =>
          f(
            e,
            t,
            n,
            [1, 2, 3, 4, 5, 6, 7, 8].map((e) => r(`sites.tenant.${e}`)),
            i,
          ),
      },
      {
        key: `signs`,
        w: 256,
        h: 64,
        legibility: 9,
        paint: (e, t, n, i) =>
          g(
            e,
            t,
            n,
            {
              cols: 1,
              rows: 2,
              cells: [
                {
                  bg: `#ffffff`,
                  fg: `#c8161c`,
                  text: r(`sites.tsukiji.yamatatsu`),
                  style: `lightbox`,
                  serif: !0,
                },
                {
                  bg: `#0a2a5a`,
                  fg: `#ffffff`,
                  text: r(`sites.tsukiji.daisho`),
                  style: `lightbox`,
                  serif: !0,
                },
              ],
            },
            i,
          ),
      },
      {
        key: `tamago`,
        w: 128,
        h: 64,
        paint: (e, t, n, r) => d(e, t, n, { kind: `tamago` }, r),
      },
      {
        key: `fish`,
        w: 128,
        h: 64,
        paint: (e, t, n, i) =>
          d(e, t, n, { kind: `fish`, price: r(`sites.tsukiji.price-1`) }, i),
      },
      {
        key: `cards`,
        w: 256,
        h: 64,
        paint: (e, t, n, i) =>
          g(
            e,
            t,
            n,
            {
              cols: 4,
              rows: 2,
              cells: [1, 2, 3, 4, 5, 6, 7, 8].map((e) => ({
                bg: e % 3 ? `#ffffff` : `#ffeb5a`,
                fg: e % 2 ? `#c8161c` : `#1a1a1a`,
                text: r(`sites.tsukiji.card-${e}`),
              })),
            },
            i,
          ),
      },
      {
        key: `kushitama`,
        w: 128,
        h: 128,
        legibility: 2,
        paint: (e, t, n, i) =>
          s(
            e,
            t,
            n,
            {
              title: r(`sites.tsukiji.yamatatsu`),
              items: [
                [r(`sites.tsukiji.kushitama`), ``],
                [r(`sites.tsukiji.tamagoyaki`), ``],
              ],
              style: `yellow`,
            },
            i,
          ),
      },
      {
        key: `hours`,
        w: 256,
        h: 32,
        paint: (e, t, n, i) =>
          u(
            e,
            t,
            n,
            {
              bg: `#ffffff`,
              fg: `#1a1a1a`,
              text: r(`sites.tsukiji.hours`),
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
      l(e, { x0: -t / 2, z0: r, x1: t / 2, z1: r + 1.2 });
      let s = yield* m(e, {
        floors: 3,
        groundH: 3.9,
        floorH: 2.9,
        wall: 13157044,
        trim: 9077878,
        windows: `grid`,
        recess: 0,
        tenants: `tenants`,
      });
      (p(e, {
        x0: s.x0 + 0.1,
        x1: -0.3,
        z: r + 0.6,
        open: i,
        goodsKey: `tamago`,
        signKey: `signs`,
        signCell: [0, 1, 2],
        awning: 15913502,
        stripe: 16777215,
        kind: `tamago`,
      }),
        yield,
        p(e, {
          x0: 0.3,
          x1: s.x1 - 0.1,
          z: r + 0.6,
          open: i,
          goodsKey: `fish`,
          cardKey: `cards`,
          signKey: `signs`,
          signCell: [1, 1, 2],
          awning: 1718906,
          stripe: 16777215,
          kind: `fish`,
        }),
        i &&
          (e.art.tex(e.atlas.r(`kushitama`), 16777215, 0),
          e.art.rectZ(-4.6, 0.9, -3.6, 1.9, r + 0.55, -1),
          o(e, {
            path: [
              [-2.6, r - 0.9],
              [-2.6, r - 2.2],
              [-4.4, r - 2.6],
              [-6.4, r - 2.6],
            ],
            people: 5,
            palette: `tourist`,
            spacing: 0.85,
          }),
          a(e, {
            x: -5.2,
            z: r + 1.4,
            rot: 0,
            pose: `cook`,
            palette: `vendor`,
          })),
        e.lm.setPaint(h(14209732, 0.8)),
        e.art.tex(e.atlas.r(`hours`), 16777215, 0),
        e.art.rectX(r + 1.5, 2.2, r + 6, 2.75, s.x1 + 0.02, 1));
    },
  });
export { _ as t };
