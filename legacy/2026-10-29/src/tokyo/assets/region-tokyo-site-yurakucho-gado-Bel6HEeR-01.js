// tokyo/assets/region-tokyo-site-yurakucho-gado-Bel6HEeR 01 — key
// Lines 1-175 of readable/tokyo/assets/region-tokyo-site-yurakucho-gado-Bel6HEeR.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { nt as t } from "./world-CAmHK742.js";
import { in as n, o as r, r as i } from "./region-tokyo-55J_WESF.js";
import { n as a } from "./sites-kit-BhplXgcu.js";
import {
  B as o,
  P as s,
  U as c,
  c as l,
  q as u,
  z as d,
} from "./region-tokyo-sites-kit-CgUCzK9Y.js";
var f = e({ default: () => p }),
  p = t({
    state: (e) => +!!i(r.hours, e),
    art: [
      {
        key: `signs`,
        w: 256,
        h: 64,
        legibility: 9,
        paint: (e, t, r, i) =>
          d(
            e,
            t,
            r,
            {
              cols: 1,
              rows: 2,
              cells: [
                {
                  bg: `#f4ead2`,
                  fg: `#1a1a1a`,
                  text: n(`sites.yurakucho.tofukuton`),
                  style: `wood`,
                  serif: !0,
                },
                {
                  bg: `#c8161c`,
                  fg: `#ffffff`,
                  text: n(`sites.yurakucho.hinomoto`),
                  style: `lightbox`,
                  serif: !0,
                },
              ],
            },
            i,
          ),
      },
      {
        key: `lanterns`,
        w: 128,
        h: 64,
        paint: (e, t, r, i) =>
          c(
            e,
            t,
            r,
            {
              items: [
                { text: n(`sites.yurakucho.lantern`) },
                { text: n(`sites.yurakucho.big-lantern`) },
              ],
            },
            i,
          ),
      },
      {
        key: `noren`,
        w: 128,
        h: 64,
        paint: (e, t, r, i) =>
          u(
            e,
            t,
            r,
            { bg: `#1e2a4a`, text: n(`sites.common.yakitori`), panels: 3 },
            i,
          ),
      },
      {
        key: `posters`,
        w: 128,
        h: 64,
        paint: (e, t, r, i) =>
          d(
            e,
            t,
            r,
            {
              cols: 4,
              rows: 2,
              cells: [1, 2, 3, 4].map((e) => ({
                bg: [`#f4e4c0`, `#e8d4a8`, `#f0dcb8`, `#fff2d8`][e - 1],
                fg: `#5a1a0a`,
                text: n(`sites.yurakucho.menu-${e}`),
                v: !0,
              })),
            },
            i,
          ),
      },
      {
        key: `chalk`,
        w: 64,
        h: 128,
        paint: (e, t, r, i) =>
          o(
            e,
            t,
            r,
            {
              lines: [
                n(`sites.yurakucho.menu-2`),
                n(`sites.yurakucho.hoppy`),
                n(`sites.yurakucho.otoshi`),
              ],
            },
            i,
          ),
      },
    ],
    *near(e) {
      let { w: t, d: n } = e.frame,
        r = -n / 2,
        i = e.state > 0;
      s(e, {
        x0: -t / 2,
        z0: r,
        x1: t / 2,
        z1: -72.5 - e.site.x,
        color: 9078398,
      });
      let o = -72.5 - e.site.x,
        c = o + 1.3;
      (yield* l(e, {
        o0: -6.4,
        o1: 0,
        face: o,
        recess: c,
        open: i,
        kind: `izakaya`,
        signKey: `signs`,
        signCell: [1, 1, 2],
        lanternKey: `lanterns`,
        lanternCell: [1, 2],
        bigLantern: !0,
        norenKey: `noren`,
        backKey: `posters`,
        wood: 4857364,
      }),
        yield* l(e, {
          o0: 1.6,
          o1: 8,
          face: o,
          recess: c,
          open: i,
          kind: `grill`,
          signKey: `signs`,
          signCell: [0, 1, 2],
          lanternKey: `lanterns`,
          lanternCell: [0, 2],
          backKey: `posters`,
          menuKey: `chalk`,
        }),
        i &&
          a(e, {
            x: 5.6,
            z: r + 0.2,
            rot: 0.4,
            pose: `stand`,
            palette: `office`,
          }));
    },
  });
