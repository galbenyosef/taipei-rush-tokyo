import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { nt as t } from "./world-CAmHK742.js";
import { in as n, r, s as i } from "./region-tokyo-55J_WESF.js";
import { n as a, t as o } from "./sites-kit-BhplXgcu.js";
import {
  D as s,
  E as c,
  F as l,
  I as u,
  M as d,
  N as f,
  O as p,
  P as m,
  R as h,
  V as g,
  Y as _,
  Z as v,
  _ as y,
  j as b,
  w as x,
  y as S,
} from "./region-tokyo-sites-kit-CgUCzK9Y.js";
var C = e({ default: () => w }),
  w = t({
    state: (e) => +!!r(i.hours, e),
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
        key: `v`,
        w: 64,
        h: 512,
        legibility: 9,
        paint: (e, t, r, i) =>
          v(
            e,
            t,
            r,
            {
              bg: `#d8161c`,
              fg: `#ffffff`,
              text: n(`sites.yamashitaya.name`),
              sub: n(`sites.yamashitaya.sub`),
              style: `lightbox`,
            },
            i,
          ),
      },
      {
        key: `h`,
        w: 512,
        h: 64,
        legibility: 3,
        paint: (e, t, r, i) =>
          h(
            e,
            t,
            r,
            {
              bg: `#ffffff`,
              fg: `#d8161c`,
              text: n(`sites.yamashitaya.name`),
              sub: n(`sites.yamashitaya.floors`),
              subColor: `#333333`,
              style: `lightbox`,
              border: `#d8161c`,
            },
            i,
          ),
      },
      {
        key: `panda`,
        w: 256,
        h: 128,
        paint: (e, t, r, i) =>
          g(e, t, r, { kind: `panda`, label: n(`sites.yamashitaya.panda`) }, i),
      },
      {
        key: `thanks`,
        w: 128,
        h: 128,
        legibility: 1,
        paint: (e, t, r, i) => {
          (g(e, t, r, { kind: `panda` }, i),
            e.save(),
            e.translate(0, r * 0.66),
            h(
              e,
              t,
              r * 0.34,
              {
                bg: `#ffffff`,
                fg: `#d8161c`,
                text: n(`sites.yamashitaya.thanks`),
                style: `plain`,
              },
              i,
            ),
            e.restore());
        },
      },
      {
        key: `tax`,
        w: 128,
        h: 32,
        paint: (e, t, r, i) =>
          h(
            e,
            t,
            r,
            {
              bg: `#1a3a8a`,
              fg: `#ffffff`,
              text: n(`sites.yamashitaya.taxfree`),
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
      m(e, { x0: -t / 2, z0: r, x1: t / 2, z1: r + 2.6 });
      let u = yield* x(e, {
        floors: 6,
        groundH: 4.4,
        floorH: 3.2,
        wall: 15261900,
        trim: 13154458,
        windows: `grid`,
        recess: 0,
        tenants: `tenants`,
      });
      b(e, {
        x: u.x1 - 0.6,
        y0: 5.2,
        y1: 17.5,
        z: u.front,
        out: 1.1,
        key: `v`,
        lit: !0,
        thick: 0.35,
      });
      let h = Math.min(u.x1 - u.x0 - 0.6, 11);
      (e.lm.setPaint(S(14161436, 0.5)),
        e.lm.box(u.x0, 3.3, r - 0.02, u.x1, 4.3, r + 0.2, 44),
        f(e, {
          x0: -h / 2,
          x1: h / 2,
          y0: 3.35,
          y1: 4.25,
          z: r - 0.05,
          key: `h`,
          lit: !0,
          depth: 0.25,
          frame: 14161436,
        }));
      let g = 3.2,
        _ = u.x0 + 0.3,
        v = u.x1 - 0.3;
      if (!i) {
        (d(e, { x0: _, x1: v, h: 3.2, z: r + 0.3 }),
          e.box(_, r, v, r + 0.5, 0, 3.2));
        return;
      }
      s(e, { x0: _, x1: v, z: r + 0.3, h: 3.2, depth: 2.3, light: 16774888 });
      for (let [t, n] of [
        [_ + 0.1, 0 - g / 2 - 0.15],
        [1.75, v - 0.1],
      ]) {
        (e.lm.setPaint(S(15788248, 0.6)),
          e.lm.box(t, 0, r + 0.35, n, 0.55, r + 1.2));
        let i = Math.max(1, Math.round((n - t - 0.1) / 1.1));
        for (let a = 0; a < 3; a++) {
          let o = 0.62 + a * 0.78;
          (e.lm.setPaint(S(16052454, 0.6)),
            e.lm.box(t + 0.05, o - 0.05, r + 0.8, n - 0.05, o, r + 1.25));
          for (let s = 0; s < i; s++) {
            let c = t + 0.05 + ((n - t - 0.1) * s) / i,
              l = c + (n - t - 0.1) / i - 0.04;
            (e.art.tex(e.atlas.r(`panda`), 16777215, 0.45),
              e.art.rectZ(
                c,
                o,
                l,
                o + 0.62,
                r + 1,
                -1,
                a % 2 ? 0.5 : 0,
                0.05,
                a % 2 ? 1 : 0.5,
                0.62,
              ));
          }
        }
        (e.art.col(16774888, 0.5, 0.95),
          e.art.rectZ(t + 0.05, 0.55, n - 0.05, 3.1, r + 1.27, -1),
          e.lm.setPaint(S(y.alu, 0.3, 0.7)),
          e.lm.box(t - 0.04, 0, r + 0.3, t + 0.04, 3.2, r + 0.38),
          e.box(t, r + 0.3, n, r + 1.2, 0, 3.1));
      }
      (e.art.tex(e.atlas.r(`thanks`), 16777215, 0.3),
        e.art.rectZ(_ + 0.6, 1, _ + 1.9, 2.3, r + 0.31, -1),
        e.art.tex(e.atlas.r(`tax`), 16777215, 0.4),
        e.art.rectZ(1.6 + 0.3, 2.45, 3.1, 2.75, r + 0.31, -1),
        c(e, {
          x0: 0 - g / 2,
          x1: 1.6,
          z: r + 0.32,
          h: 2.6,
          kind: `sash`,
          open: !0,
          leaves: 2,
        }),
        l(e, {
          x0: _,
          x1: v,
          y: 3.25,
          z: r + 0.25,
          out: 0.9,
          drop: 0.25,
          color: 14161436,
        }),
        p(e, 1.6 + 0.8, r - 0.55, 0.95),
        yield,
        a(e, {
          x: 0 - g / 2 - 0.9,
          z: r - 0.4,
          rot: 0,
          pose: `stand`,
          palette: `vendor`,
        }),
        o(
          e,
          5,
          { x0: -t / 2 + 0.5, z0: r - 2.6, x1: t / 2 - 0.5, z1: r - 1 },
          {
            face: Math.PI,
            poses: [`phone`, `stand`, `point`, `phone`],
            palette: `tourist`,
            spacing: 1.2,
          },
        ));
    },
  });
export { C as t };
