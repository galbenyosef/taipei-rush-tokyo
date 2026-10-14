// tokyo/assets/region-tokyo-site-shimizu-shoten-CjSOYUYc 01 — key
// Lines 1-260 of readable/tokyo/assets/region-tokyo-site-shimizu-shoten-CjSOYUYc.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { l as t } from "./world-Bo9wkXrT.js";
import { At as n, a as r, l as i, r as a } from "./region-tokyo-BcM3fReU.js";
import { n as o, t as s } from "./sites-kit-BhplXgcu.js";
import {
  B as c,
  D as l,
  G as u,
  I as d,
  M as f,
  N as p,
  P as m,
  R as h,
  V as g,
  Y as _,
  _ as v,
  k as y,
  v as b,
  w as x,
  y as S,
} from "./region-tokyo-sites-kit-X3MRd0jr.js";
var C = e({ default: () => w }),
  w = t({
    state: (e) => (a(i.hours, e) ? (r(e) ? 2 : 1) : 0),
    art: [
      {
        key: `tenants`,
        w: 256,
        h: 64,
        paint: (e, t, r, i) =>
          _(
            e,
            t,
            r,
            [1, 2, 3, 4, 5, 6, 7, 8].map((e) => n(`sites.tenant.${e}`)),
            i,
          ),
      },
      {
        key: `sign`,
        w: 512,
        h: 64,
        legibility: 3,
        paint: (e, t, r, i) =>
          h(
            e,
            t,
            r,
            {
              bg: `#f5d21e`,
              fg: `#c8161c`,
              text: n(`sites.shimizu.name`),
              style: `lightbox`,
              weight: 900,
              mark: `志`,
              markBg: `#c8161c`,
            },
            i,
          ),
      },
      {
        key: `sub`,
        w: 512,
        h: 32,
        legibility: 2,
        paint: (e, t, r, i) =>
          h(
            e,
            t,
            r,
            {
              bg: `#c8161c`,
              fg: `#ffffff`,
              text: n(`sites.shimizu.board`),
              style: `plain`,
            },
            i,
          ),
      },
      {
        key: `back`,
        w: 256,
        h: 128,
        paint: (e, t, n, r) => g(e, t, n, { kind: `choco` }, r),
      },
      {
        key: `choco`,
        w: 128,
        h: 64,
        paint: (e, t, n, r) => g(e, t, n, { kind: `choco` }, r),
      },
      {
        key: `card`,
        w: 128,
        h: 64,
        legibility: 1,
        paint: (e, t, r, i) =>
          u(
            e,
            t,
            r,
            { items: [[n(`sites.shimizu.price`), ``]], style: `yellow` },
            i,
          ),
      },
      {
        key: `call`,
        w: 64,
        h: 128,
        legibility: 1,
        paint: (e, t, r, i) =>
          c(
            e,
            t,
            r,
            {
              lines: [
                n(`sites.shimizu.call`),
                n(`sites.shimizu.card`),
                n(`sites.shimizu.oroshi`),
              ],
              frame: `#c8161c`,
            },
            i,
          ),
      },
    ],
    mid: d,
    *near(e) {
      let { w: t, d: n } = e.frame,
        r = -n / 2,
        i = e.state > 0;
      m(e, { x0: -t / 2, z0: r, x1: t / 2, z1: n / 2 });
      let a = yield* x(e, {
        floors: 4,
        groundH: 4.4,
        floorH: 3,
        wall: 13812902,
        trim: 10129018,
        windows: `grid`,
        bays: 1,
        recess: 0,
        tenants: `tenants`,
      });
      yield;
      let c = a.x0 + 0.2,
        u = a.x1 - 0.2;
      if (
        (p(e, {
          x0: a.x0,
          x1: a.x1,
          y0: 3.15,
          y1: 3.95,
          z: r - 0.3,
          key: `sign`,
          lit: !0,
          depth: 0.32,
        }),
        p(e, {
          x0: a.x0,
          x1: a.x1,
          y0: 2.75,
          y1: 3.12,
          z: r - 0.22,
          key: `sub`,
          depth: 0.22,
        }),
        y(e, a.x1 - 0.1, r + 0.15, 4.4, a.top),
        !i)
      ) {
        (f(e, { x0: c, x1: u, h: 2.7, z: r + 0.05, color: 11843248 }),
          e.box(c, r, u, r + 0.3, 0, 2.7));
        return;
      }
      (l(e, {
        x0: c,
        x1: u,
        z: r + 0.05,
        h: 2.7,
        depth: 3.4,
        backKey: `back`,
        light: 16773328,
      }),
        yield);
      let d = e.lm,
        h = e.art,
        g = [
          [r + 0.1, r + 0.75, 0.8],
          [r + 0.75, r + 1.3, 1.05],
          [r + 1.3, r + 1.8, 1.3],
        ];
      for (let [t, n, r] of g) {
        (d.setPaint(S(4864554, 0.8)),
          d.box(c + 0.1, 0, t, u - 0.1, r - 0.12, n));
        let i = Math.max(3, Math.round((u - c) / 0.32));
        for (let a = 0; a < i; a++) {
          let o = c + 0.15 + ((u - c - 0.3) * a) / i,
            s = o + (u - c - 0.3) / i - 0.03,
            l = 0.08 + e.rng.next() * 0.1;
          (h.tex(e.atlas.r(`choco`), [16777215, 15786176, 16769248][a % 3], 0),
            h.box(o, r - 0.12, t + 0.04, s, r - 0.12 + l, n - 0.04, 55));
        }
      }
      (e.box(c, r + 0.05, u, r + 1.85, 0, 1.3),
        yield,
        d.setPaint(S(v.woodDark, 0.8)),
        d.box(c + 0.3, 0, r + 1.9, u - 0.3, 0.45, r + 3.2),
        h.col(16053488, 0));
      for (let e = 0; e < 6; e++) {
        let t = c + 0.3 + ((u - c - 0.6) * e) / 5;
        h.box(
          t - 0.14,
          1.9 + (e % 2) * 0.1,
          r + 3.3,
          t + 0.14,
          2.35 + (e % 2) * 0.1,
          r + 3.38,
        );
      }
      (d.setPaint(S(v.steel, 0.5, 0.6)),
        d.box(c, 2.5, r - 0.25, u, 2.55, r - 0.2));
      for (let t = 0; t < 3; t++) {
        let n = c + ((u - c) * (t + 0.5)) / 3;
        (h.tex(e.atlas.r(`card`), 16777215, 0),
          h.rectZ(n - 0.42, 2, n + 0.42, 2.45, r - 0.24, -1));
      }
      d.setPaint(b(16773576, 3));
      for (let e of [0.25, 0.75])
        d.sphere(c + (u - c) * e, 2.35, r + 0.6, 0.07, 6, 4);
      (h.tex(e.atlas.r(`call`), 16777215, 0),
        h.rectZ(u - 0.55, 1.35, u - 0.05, 2.35, r - 0.02, -1),
        yield,
        e.live(0, r + 2.4, 0, `wave`),
        o(e, {
          x: c + 0.6,
          z: r + 2.3,
          y: 0.45,
          rot: 0.3,
          pose: `carry`,
          palette: `vendor`,
        }));
      let _ = e.state === 2 ? 14 : 6;
      s(
        e,
        _,
        {
          x0: -t / 2 - 0.2,
          z0: r - (e.state === 2 ? 5.5 : 2.6),
          x1: t / 2 + 0.2,
          z1: r - 0.5,
        },
        {
          face: [0, r + 1.6],
          poses: [`stand`, `phone`, `stand`, `point`],
          palette: `casual`,
          spacing: 0.62,
        },
      );
    },
  });
