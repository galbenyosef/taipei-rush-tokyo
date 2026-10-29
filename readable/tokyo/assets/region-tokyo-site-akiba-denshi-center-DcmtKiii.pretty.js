import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { Q as t } from "./world-CVm1JHks.js";
import { _ as n, in as r, r as i } from "./region-tokyo-A7LxHjud.js";
import { n as a } from "./sites-kit-BhplXgcu.js";
import {
  N as o,
  P as s,
  R as c,
  T as l,
  V as u,
  k as d,
  m as f,
  v as p,
  y as m,
  z as h,
} from "./region-tokyo-sites-kit-DAwzVR8Q.js";
var g = e({ default: () => v }),
  _ = [1, 2, 3, 4, 5, 6, 7, 8].map((e) => `sites.denshi.tag-${e}`),
  v = t({
    state: (e) => +!!i(n.hours, e),
    art: [
      {
        key: `name`,
        w: 512,
        h: 64,
        legibility: 9,
        paint: (e, t, n, i) =>
          c(
            e,
            t,
            n,
            {
              bg: `#1a3a7a`,
              fg: `#ffffff`,
              text: r(`sites.denshi.name`),
              sub: r(`sites.denshi.sub`),
              subColor: `#ffe94a`,
              style: `lightbox`,
            },
            i,
          ),
      },
      {
        key: `drawers`,
        w: 256,
        h: 128,
        paint: (e, t, n, r) => u(e, t, n, { kind: `parts` }, r),
      },
      {
        key: `tags`,
        w: 256,
        h: 64,
        paint: (e, t, n, i) =>
          h(
            e,
            t,
            n,
            {
              cols: 4,
              rows: 2,
              cells: _.map((e, t) => ({
                bg: t % 3 ? `#ffffff` : `#ffeb5a`,
                fg: t % 2 ? `#c8161c` : `#1a1a1a`,
                text: r(e),
              })),
            },
            i,
          ),
      },
    ],
    *near(e) {
      let { w: t, d: n } = e.frame,
        r = -n / 2,
        i = n / 2,
        c = e.state > 0,
        u = e.lm,
        h = 1.25;
      (s(e, { x0: -t / 2, z0: r, x1: t / 2, z1: i, color: 9079428 }),
        u.setPaint(m(12104870, 0.9)),
        u.box(-t / 2 + 0.1, 0, r + 0.2, t / 2 - 0.1, 6.2, i - 0.1, 23),
        u.box(-t / 2 + 0.1, 2.9, r + 0.2, -1.25, 6.2, r + 0.4, 32),
        u.box(h, 2.9, r + 0.2, t / 2 - 0.1, 6.2, r + 0.4, 32),
        u.box(-1.25, 2.6, r + 0.2, h, 6.2, r + 0.4, 32),
        u.setPaint(m(4871776, 0.2, 0.4)));
      for (let e of [-t / 2 + 1, t / 2 - 4])
        u.box(e, 4.4, r + 0.16, e + 3, 5.6, r + 0.2, 32);
      (o(e, {
        x0: -t / 2 + 0.4,
        x1: t / 2 - 0.4,
        y0: 3,
        y1: 4.05,
        z: r + 0.12,
        key: `name`,
        lit: !0,
        depth: 0.12,
      }),
        d(e, -t / 2 + 0.3, r + 0.1, 0, 6.2, 8027778),
        yield);
      for (let n of [-1, 1]) {
        let i = n < 0 ? -t / 2 + 0.2 : 1.35,
          a = n < 0 ? -1.35 : t / 2 - 0.2;
        (c
          ? (e.art.tex(e.atlas.r(`drawers`), 16777215, 0.25),
            e.art.rectZ(i, 0.2, a, 2.6, r + 1.6, -1),
            u.setPaint(m(13620182, 0.5, 0.3)),
            u.box(i + 0.1, 0, r + 0.3, a - 0.1, 0.95, r + 0.75),
            u.setPaint(m(12112092, 0.05, 0.4)),
            u.box(i + 0.1, 0.95, r + 0.3, a - 0.1, 1, r + 0.75, 4),
            l(
              e,
              `tags`,
              n < 0 ? 0 : 7,
              4,
              2,
              i + 0.3,
              0.45,
              a - 0.3,
              0.88,
              r + 0.29,
              0,
            ),
            u.setPaint(p(15791871, 2.4)),
            u.box(i + 0.2, 2.62, r + 0.9, a - 0.2, 2.66, r + 1, 8))
          : (u.setPaint(m(10133668, 0.55, 0.5)),
            u.box(i, 0, r + 0.3, a, 2.6, r + 0.36, 32)),
          e.box(i, r + 0.2, a, r + 1.6, 0, 2.6));
      }
      (u.setPaint(m(14210768, 0.9)),
        u.box(-t / 2 + 0.2, 2.6, r + 0.4, t / 2 - 0.2, 2.7, i - 0.2, 8),
        u.setPaint(m(3815994, 0.7, 0.3)),
        u.box(-0.3, 2.45, r + 0.6, -0.1, 2.52, i - 0.4),
        f(e, {
          x0: -3.15,
          x1: -1.25,
          z0: r + 1.7,
          z1: i - 0.6,
          side: -1,
          open: c,
          drawersKey: `drawers`,
          tagsKey: `tags`,
        }),
        yield,
        f(e, {
          x0: h,
          x1: 3.15,
          z0: r + 1.7,
          z1: i - 0.6,
          side: 1,
          open: c,
          drawersKey: `drawers`,
          tagsKey: `tags`,
        }),
        e.floor(-1.25, r, h, i - 0.6, 0),
        e.art.col(c ? 15265008 : 3815994, c ? 0.3 : 0),
        e.art.rectZ(-1.25, 0, h, 2.6, i - 0.55, -1),
        c &&
          a(e, {
            x: 0.3,
            z: r + 4.5,
            rot: Math.PI,
            pose: `stand`,
            palette: `casual`,
          }));
    },
  });
export { g as t };
