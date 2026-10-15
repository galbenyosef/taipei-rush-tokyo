import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { nt as t } from "./world-CAmHK742.js";
import { in as n, m as r, r as i } from "./region-tokyo-55J_WESF.js";
import {
  A as a,
  C as o,
  G as s,
  L as c,
  P as l,
  R as u,
  Z as d,
  _ as f,
  b as p,
  d as m,
  h,
  q as g,
  y as _,
} from "./region-tokyo-sites-kit-CgUCzK9Y.js";
var v = e({ default: () => y }),
  y = t({
    state: (e) => +!!i(r.hours, e),
    art: [
      {
        key: `noren`,
        w: 256,
        h: 128,
        legibility: 3,
        paint: (e, t, r, i) =>
          g(
            e,
            t,
            r,
            {
              bg: `#f2f0ea`,
              fg: `#1a2a5a`,
              text: n(`sites.tsubame.yu`),
              panels: 4,
              hem: `#1a2a5a`,
            },
            i,
          ),
      },
      {
        key: `sign`,
        w: 256,
        h: 64,
        legibility: 3,
        paint: (e, t, r, i) =>
          u(
            e,
            t,
            r,
            {
              bg: `#6a4426`,
              fg: `#f4ead2`,
              text: n(`sites.tsubame.name`),
              style: `wood`,
              serif: !0,
            },
            i,
          ),
      },
      {
        key: `price`,
        w: 64,
        h: 128,
        paint: (e, t, r, i) =>
          s(
            e,
            t,
            r,
            {
              title: n(`sites.tsubame.name`),
              items: [
                [n(`sites.tsubame.price`), ``],
                [n(`sites.tsubame.hours`), ``],
              ],
              style: `white`,
            },
            i,
          ),
      },
      {
        key: `chimney`,
        w: 64,
        h: 256,
        legibility: 2,
        paint: (e, t, r, i) =>
          d(
            e,
            t,
            r,
            {
              bg: `#c8c2b6`,
              fg: `#2a2a2a`,
              text: n(`sites.tsubame.chimney`),
              style: `plain`,
              serif: !0,
            },
            i,
          ),
      },
      {
        key: `wa`,
        w: 32,
        h: 32,
        paint: (e, t, r, i) =>
          u(
            e,
            t,
            r,
            {
              bg: `#7a5232`,
              fg: `#ffffff`,
              text: n(`sites.tsubame.wa`),
              style: `wood`,
              serif: !0,
            },
            i,
          ),
      },
    ],
    *near(e) {
      let { w: t, d: n } = e.frame,
        r = -n / 2,
        i = e.state > 0,
        s = e.lm;
      l(e, { x0: -t / 2, z0: r, x1: t / 2, z1: n / 2 });
      let u = -t / 2 + 0.2,
        d = t / 2 - 0.2,
        g = n / 2 - 0.3;
      (s.setPaint(_(14867663, 0.9)),
        s.box(u, 0, r + 0.3, d, 6.6, g, 19),
        s.box(u, 3.8, r + 0.3, d, 6.6, r + 0.32, 32),
        s.setPaint(_(4869714, 0.55, 0.2)));
      let v = 6.6,
        y = 6.6 + Math.min(4.2, (d - u) * 0.24);
      (s.quad(
        [d + 0.6, 6.3, r - 0.4],
        [d + 0.6, 6.3, g + 0.5],
        [0, y, g + 0.5],
        [0, y, r - 0.4],
      ),
        s.quad(
          [u - 0.6, 6.3, g + 0.5],
          [u - 0.6, 6.3, r - 0.4],
          [0, y, r - 0.4],
          [0, y, g + 0.5],
        ),
        s.setPaint(_(3027510, 0.7)),
        s.quad(
          [d + 0.6, 6.25, g + 0.5],
          [d + 0.6, 6.25, r - 0.4],
          [0, y - 0.05, r - 0.4],
          [0, y - 0.05, g + 0.5],
        ),
        s.quad(
          [u - 0.6, 6.25, r - 0.4],
          [u - 0.6, 6.25, g + 0.5],
          [0, y - 0.05, g + 0.5],
          [0, y - 0.05, r - 0.4],
        ),
        s.setPaint(_(3817026, 0.6, 0.2)),
        s.box(-0.15, y - 0.1, r - 0.5, 0.15, y + 0.3, g + 0.6),
        s.setPaint(_(f.woodDark, 0.8)),
        s.quad(
          [d, v, r + 0.28],
          [u, v, r + 0.28],
          [0, y - 0.15, r + 0.28],
          [0, y - 0.15, r + 0.28],
        ),
        s.setPaint(_(13153418, 0.6)),
        s.box(-0.35, y - 1.4, r + 0.2, 0.35, y - 0.5, r + 0.26),
        s.setPaint(_(f.woodDark, 0.75)),
        s.box(u, 3.75, r + 0.22, d, 3.95, r + 0.3),
        s.box(u, 5.55, r + 0.22, d, 5.75, r + 0.3));
      let b = Math.max(4, Math.round((d - u) / 1.3));
      for (let e = 0; e <= b; e++) {
        let t = u + ((d - u) * e) / b;
        (s.setPaint(_(f.woodDark, 0.75)),
          s.box(t - 0.07, 3.95, r + 0.22, t + 0.07, 5.55, r + 0.3),
          e < b &&
            (s.setPaint(p(9085096)),
            s.box(
              t + 0.1,
              4.15,
              r + 0.24,
              t + (d - u) / b - 0.1,
              5.35,
              r + 0.26,
              32,
            )));
      }
      for (let e of [u + 0.1, d - 0.1])
        (s.setPaint(_(f.woodDark, 0.75)),
          s.box(e - 0.1, 0, r + 0.2, e + 0.1, 6.6, r + 0.32));
      (s.setPaint(_(14209212, 0.8)),
        s.box(u - 0.6, 6.1499999999999995, r - 0.45, d + 0.6, 6.3, r - 0.35),
        yield,
        h(e, {
          x0: u,
          x1: d,
          z: r + 0.3,
          open: i,
          norenKey: `noren`,
          signKey: `sign`,
          priceKey: `price`,
        }),
        i &&
          (e.art.tex(e.atlas.r(`wa`), 16777215, 0),
          e.art.rectZ(1.75, 1.7, 2.05, 2, r + 0.27, -1),
          c(e, -2.1, r - 0.25)),
        a(e, u + 0.8, r - 0.1, 1.1),
        a(e, d - 0.8, r - 0.1, 1.1),
        o(e, d - 2.4, r - 0.4, Math.PI / 2 + 0.1, 9083048),
        o(e, d - 3.1, r - 0.4, Math.PI / 2 - 0.08, 14211288),
        e.circle(d - 2.75, r - 0.4, 0.6, 0, 1),
        yield,
        m(e, d - 2.2, g - 1.8, 22, `chimney`));
    },
  });
export { v as t };
