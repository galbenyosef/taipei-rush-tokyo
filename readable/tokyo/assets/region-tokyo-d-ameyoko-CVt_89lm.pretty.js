import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { F as t, I as n } from "./engine-14d5lda2.js";
import { Zt as r, en as i, hn as a, tn as o } from "./region-tokyo-A7LxHjud.js";
import {
  C as s,
  S as c,
  T as l,
  _ as u,
  a as d,
  b as f,
  d as p,
  f as m,
  g as h,
  h as g,
  i as _,
  l as v,
  m as y,
  p as b,
  u as x,
  v as S,
  w as C,
  x as w,
  y as T,
} from "./region-tokyo-d-ueno-DfmWW0p_.js";
var E = { face: -139.66, back: -110.6, soffit: 6.05 },
  D = [
    [-1155, -1068.5],
    [-1051.5, -1009.5],
  ],
  O = 4.5,
  k = { x: -145, west: -150.25, east: -139.75, z0: -1170, z1: -950 },
  A = -1041.6,
  j = { x0: -138.4, x1: -127, z0: -925.5, z1: -912.5 },
  M = { x0: -173.25, x1: -160.4, z0: -937.75, z1: -890 },
  N = { x0: -108, x1: 60 },
  ee = [
    { minX: -160, minZ: -1162, maxX: -105, maxZ: -1e3 },
    { minX: -160, minZ: -1e3, maxX: 65, maxZ: -905 },
    { minX: -180, minZ: -942, maxX: -155, maxZ: -885 },
    { minX: -135, minZ: -840, maxX: -75, maxZ: -780 },
  ],
  P = 3,
  F = (e, t, n, r, i, a = {}) => ({
    look: e,
    name: t,
    bg: n,
    fg: r,
    hours: i,
    ...a,
  }),
  I = [
    F(`fish`, `ameyoko.shop.fish.name`, `#1d4e9e`, `#ffffff`, [9, 19]),
    F(`dried`, `ameyoko.shop.dried.name`, `#f2e6c8`, `#6a2a10`, [10, 19]),
    F(`plaza`, `ameyoko.shop.plaza.name`, `#2a2a2a`, `#ffd84a`, [10, 20], {
      sub: `ameyoko.shop.plaza.sub`,
    }),
    F(`sweets`, `ameyoko.shop.sweets.name`, `#e60012`, `#ffffff`, [10, 19]),
    F(`cosme`, `ameyoko.shop.cosme.name`, `#ffffff`, `#d8287a`, [10, 20]),
    F(`bag`, `ameyoko.shop.bag.name`, `#3a2a1e`, `#f0d8a0`, [10, 20]),
    F(`fruit`, `ameyoko.shop.fruit.name`, `#2e9a3a`, `#ffffff`, [10, 19]),
    F(`fish`, `ameyoko.shop.fish2.name`, `#ffffff`, `#c01818`, [9, 19], {
      v: 1,
    }),
    F(`sneaker`, `ameyoko.shop.sneaker.name`, `#111111`, `#ffffff`, [10, 20]),
    F(`kebab`, `ameyoko.shop.kebab.name`, `#c8102e`, `#ffffff`, [11, 21], {
      sub: `ameyoko.shop.kebab.latin`,
    }),
    F(`asia`, `ameyoko.shop.asia.name`, `#ffcc00`, `#c01818`, [10, 20]),
    F(`jeans`, `ameyoko.shop.jeans.name`, `#24324a`, `#ffffff`, [10, 20]),
    F(`tea`, `ameyoko.shop.tea.name`, `#2a4a2a`, `#e8d8a0`, [10, 19]),
    F(`dried`, `ameyoko.shop.dried.name`, `#f2e6c8`, `#6a2a10`, [10, 19], {
      v: 1,
    }),
    F(`watch`, `ameyoko.shop.watch.name`, `#0a0a0a`, `#e8c860`, [10, 20]),
    F(`fish`, `ameyoko.shop.fish.name`, `#1d4e9e`, `#ffffff`, [9, 19], {
      v: 2,
    }),
    F(
      `yakitori`,
      `ameyoko.shop.yakitori.name`,
      `#4a2a18`,
      `#ffffff`,
      [12, 23],
      { lanterns: !0 },
    ),
    F(`niku`, `ameyoko.shop.niku.name`, `#ffffff`, `#c01818`, [11, 22], {
      sub: `ameyoko.shop.niku.menu`,
    }),
    F(`motsu`, `ameyoko.shop.motsu.name`, `#b81c1c`, `#ffffff`, [10, 24], {
      lanterns: !0,
      sub: `ameyoko.shop.motsu.sub`,
    }),
  ],
  L = [
    F(`motsu`, `ameyoko.shop.motsu.name`, `#b81c1c`, `#ffffff`, [10, 24], {
      lanterns: !0,
      sub: `ameyoko.shop.motsu.sub`,
      v: 1,
    }),
    F(`don`, `ameyoko.shop.don.name`, `#1a1a1a`, `#ffffff`, [10, 20], {
      sub: `ameyoko.shop.don.menu`,
    }),
    F(
      `military`,
      `ameyoko.shop.military.name`,
      `#4a5230`,
      `#f0e8c8`,
      [11, 19.5],
      { sub: `ameyoko.shop.military.sub` },
    ),
    F(`sweets`, `ameyoko.shop.sweets.name`, `#e60012`, `#ffffff`, [10, 19], {
      v: 1,
    }),
    F(`plaza`, `ameyoko.shop.plaza.name`, `#2a2a2a`, `#ffd84a`, [10, 20], {
      sub: `ameyoko.shop.plaza.sub`,
      v: 1,
    }),
    F(`cosme`, `ameyoko.shop.cosme.name`, `#ffffff`, `#d8287a`, [10, 20], {
      v: 1,
    }),
    F(`fish`, `ameyoko.shop.fish2.name`, `#ffffff`, `#c01818`, [9, 19], {
      v: 3,
    }),
    F(`kebab`, `ameyoko.shop.kebab.name`, `#c8102e`, `#ffffff`, [11, 21], {
      sub: `ameyoko.shop.kebab.latin`,
      v: 1,
    }),
    F(`bag`, `ameyoko.shop.bag.name`, `#3a2a1e`, `#f0d8a0`, [10, 20], { v: 1 }),
  ],
  R = [
    `fish`,
    `dried`,
    `sweets`,
    `kebab`,
    `motsu`,
    `niku`,
    `cosme`,
    `bag`,
    `sneaker`,
    `military`,
    `asia`,
    `don`,
    `tea`,
    `fruit`,
    `jeans`,
    `yakitori`,
    `watch`,
    `plaza`,
  ],
  z = (e) => `ut-fa-${e.name}-${e.v ?? 0}`;
function te(e) {
  for (let t of R) e.need(`ut-in-${t}`, 256, 176, ne(t));
  for (let t of [...I, ...L]) e.need(z(t), 384, 72, re(t));
  for (let t of [0, 1, 2]) e.need(`ut-upper-${t}`, 256, 112, ie(t));
  for (let t of R) e.need(`ut-shutter-${t}`, 192, 144, ae(t));
  (e.need(`ut-back`, 128, 128, oe),
    e.need(`ut-post`, 32, 128, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#6a6c6e`),
        g(e, 2, t, n, r, i, 40, 2, [`#4a4c4e`, `#8a8c8e`, `#7a5a3a`], 0.4));
    }),
    e.need(`chochin`, 64, 96, se),
    e.need(`ut-ye-0`, 64, 160, B(0)),
    e.need(`ut-ye-1`, 64, 160, B(1)),
    e.need(`ut-pop-0`, 128, 64, V(`ameyoko.pop.yasui`, `#ffe100`, `#e60012`)),
    e.need(`ut-pop-1`, 128, 64, V(`ameyoko.pop.tokka`, `#e60012`, `#ffffff`)),
    e.need(
      `ut-pop-2`,
      128,
      64,
      V(`ameyoko.pop.kakuyasu`, `#ffffff`, `#e60012`),
    ));
}
function ne(e) {
  return (r, i, o, s, c) => {
    let l = new t(n(`ut-in`, e)),
      u = () => l.next(),
      [d, f] = {
        fish: [
          `#e8eef0`,
          [`#c0c8d0`, `#d84a3a`, `#e8e8f0`, `#8a98a8`, `#f08a5a`],
        ],
        dried: [
          `#e8dcc0`,
          [`#a87a4a`, `#6a8a3a`, `#c8a060`, `#8a5a2a`, `#e0c890`],
        ],
        sweets: [
          `#f4ead8`,
          [`#e60012`, `#ffcc00`, `#2a6ad0`, `#f080a0`, `#5a3a1a`, `#ffffff`],
        ],
        kebab: [`#f4d8a0`, [`#8a4a1a`, `#c8102e`, `#f0c060`, `#ffffff`]],
        motsu: [`#5a3a22`, [`#d8c8a8`, `#2a5ab0`, `#f0c020`, `#b81c1c`]],
        niku: [`#f0eae0`, [`#c88a3a`, `#d8a050`, `#b87030`, `#ffffff`]],
        cosme: [
          `#ffffff`,
          [`#f080b0`, `#a0d0f0`, `#f0d060`, `#d0a0e0`, `#e0e0e0`],
        ],
        bag: [
          `#e8e0d4`,
          [`#3a2a1e`, `#8a5a3a`, `#c8a070`, `#1a1a1a`, `#a03a2a`],
        ],
        sneaker: [
          `#f0f0f0`,
          [`#ffffff`, `#1a1a1a`, `#e03030`, `#3060d0`, `#f0c020`],
        ],
        military: [`#c8c0a8`, [`#4a5230`, `#6a6a48`, `#3a3a2a`, `#8a8060`]],
        asia: [
          `#f0e4c8`,
          [`#e02020`, `#f0c020`, `#2a8a3a`, `#f08a20`, `#ffffff`],
        ],
        don: [`#f4ecd8`, [`#d83a3a`, `#f0a030`, `#ffffff`, `#3a7a3a`]],
        tea: [`#e8e0c8`, [`#2a5a2a`, `#3a7a3a`, `#1a1a1a`, `#c8a050`]],
        fruit: [
          `#f4f0e0`,
          [`#f0c020`, `#e04030`, `#80c040`, `#f08a20`, `#f8e060`],
        ],
        jeans: [`#e8e8ea`, [`#2a3a5a`, `#3a4a7a`, `#5a6a9a`, `#1a2440`]],
        yakitori: [`#4a2a18`, [`#f0a040`, `#d8c8a8`, `#2a2a2a`, `#b81c1c`]],
        watch: [`#f4f4f6`, [`#c8c8d0`, `#e8c860`, `#1a1a1a`, `#a0a0a8`]],
        plaza: [`#3a3a3e`, [`#f0e0b0`, `#e04030`, `#30a0e0`, `#f0c020`]],
      }[e];
    (b(r, i, o, s, c, d, 0.55),
      x(
        r,
        i,
        o + c * 0.88,
        s,
        c * 0.12,
        e === `motsu` || e === `yakitori` ? `#3a2416` : `#8a8478`,
        0.5,
      ));
    for (let e = 0; e < 4; e++)
      y(
        r,
        i + s * (0.08 + e * 0.24),
        o + c * 0.03,
        s * 0.16,
        c * 0.02,
        `#fffbe8`,
      );
    if (e === `plaza`) {
      ((r.fillStyle = `#26262a`),
        r.beginPath(),
        r.moveTo(i, o),
        r.lineTo(i + s * 0.38, o + c * 0.36),
        r.lineTo(i + s * 0.38, o + c * 0.7),
        r.lineTo(i, o + c),
        r.fill(),
        r.beginPath(),
        r.moveTo(i + s, o),
        r.lineTo(i + s * 0.62, o + c * 0.36),
        r.lineTo(i + s * 0.62, o + c * 0.7),
        r.lineTo(i + s, o + c),
        r.fill());
      for (let e = 0; e < 4; e++) {
        let t = e / 4,
          n = 1 - t * 0.7,
          a = f[e % f.length];
        (b(
          r,
          i + s * (0.04 + t * 0.32),
          o + c * (0.2 + t * 0.17),
          s * 0.08 * n,
          c * 0.42 * n,
          a,
          0.6,
        ),
          b(
            r,
            i + s * (0.88 - t * 0.32),
            o + c * (0.2 + t * 0.17),
            s * 0.08 * n,
            c * 0.42 * n,
            f[(e + 2) % f.length],
            0.6,
          ));
      }
      b(r, i + s * 0.42, o + c * 0.4, s * 0.16, c * 0.26, `#f8f0d8`, 0.6);
      return;
    }
    if (e === `motsu` || e === `yakitori`) {
      for (let e = 0; e < 12; e++)
        y(
          r,
          i + s * (0.06 + e * 0.075),
          o + c * 0.1,
          s * 0.055,
          c * 0.3,
          `#f4ecd8`,
        );
      let t = v(`ameyoko.motsu.menu`).split(`・`);
      for (let e = 0; e < 12; e++)
        a(
          r,
          t[e % t.length],
          i + s * (0.087 + e * 0.075),
          o + c * 0.12,
          o + c * 0.38,
          s * 0.04,
          `#1a1a1a`,
          void 0,
          `800`,
        );
      y(r, i, o + c * 0.55, s, c * 0.08, `#8a5a2a`);
      for (let e = 0; e < 5; e++) {
        let t = i + s * (0.1 + e * 0.18);
        (y(
          r,
          t,
          o + c * 0.36,
          s * 0.06,
          c * 0.22,
          [`#3a3a42`, `#5a4a3a`, `#2a3a4a`][e % 3],
        ),
          p(r, t + s * 0.03, o + c * 0.33, s * 0.025, `#e0b890`),
          y(
            r,
            t - s * 0.01,
            o + c * 0.7,
            s * 0.08,
            c * 0.16,
            e % 2 ? `#2a5ab0` : `#f0c020`,
          ));
      }
      if (e === `yakitori`) {
        (y(r, i + s * 0.66, o + c * 0.46, s * 0.28, c * 0.08, `#2a2a2a`),
          (r.globalAlpha = 0.35),
          (r.fillStyle = `#d0d0d0`));
        for (let e = 0; e < 5; e++)
          r.fillRect(
            i + s * (0.68 + e * 0.05),
            o + c * 0.15,
            s * 0.03,
            c * 0.3,
          );
        r.globalAlpha = 1;
      }
      return;
    }
    if (e === `kebab`) {
      (y(r, i + s * 0.12, o + c * 0.2, s * 0.16, c * 0.5, `#d84a1a`),
        (r.fillStyle = `#7a3a12`),
        r.beginPath(),
        r.moveTo(i + s * 0.4, o + c * 0.18),
        r.lineTo(i + s * 0.5, o + c * 0.18),
        r.lineTo(i + s * 0.48, o + c * 0.66),
        r.lineTo(i + s * 0.42, o + c * 0.66),
        r.fill(),
        y(r, i + s * 0.445, o + c * 0.1, s * 0.01, c * 0.62, `#c0c0c0`));
      for (let e = 0; e < 4; e++)
        y(
          r,
          i + s * (0.58 + (e % 2) * 0.18),
          o + c * (0.12 + Math.floor(e / 2) * 0.2),
          s * 0.15,
          c * 0.16,
          [`#f0c060`, `#c84a2a`, `#80b040`, `#f4e0b0`][e],
        );
      (y(r, i, o + c * 0.66, s, c * 0.22, `#c8102e`),
        h(
          r,
          v(`ameyoko.shop.kebab.latin`),
          i + s / 2,
          o + c * 0.77,
          s * 0.7,
          c * 0.12,
          `#ffffff`,
          `900`,
        ));
      return;
    }
    if (e === `jeans` || e === `bag` || e === `military`) {
      for (let t = 0; t < 2; t++)
        for (let n = 0; n < 9; n++) {
          let a = f[Math.floor(u() * f.length)],
            l = i + s * (0.04 + n * 0.107),
            d = o + c * (0.12 + t * 0.38);
          (y(r, l, d, s * 0.085, c * (e === `bag` ? 0.18 : 0.32), a),
            e === `bag` &&
              y(r, l + s * 0.02, d - c * 0.04, s * 0.045, c * 0.04, `#2a2a2a`));
        }
      if (e === `military`)
        for (let e = 0; e < 4; e++)
          p(
            r,
            i + s * (0.15 + e * 0.22),
            o + c * 0.8,
            s * 0.05,
            `#4a5230`,
            c * 0.04,
          );
      return;
    }
    if (e === `sneaker`) {
      for (let e = 0; e < 5; e++)
        for (let t = 0; t < 10; t++) {
          let n = i + s * (0.04 + t * 0.096),
            a = o + c * (0.1 + e * 0.15);
          (y(
            r,
            n,
            a + c * 0.04,
            s * 0.08,
            c * 0.05,
            f[Math.floor(u() * f.length)],
          ),
            y(r, n, a + c * 0.085, s * 0.08, c * 0.012, `#ffffff`));
        }
      return;
    }
    let m = e === `cosme` || e === `watch` ? 4 : 3;
    for (let e = 0; e < m; e++) {
      y(r, i, o + c * (0.32 + e * 0.16), s, c * 0.012, `#6a6258`);
      for (let t = 0; t < 16; t++) {
        let n = f[Math.floor(u() * f.length)];
        y(
          r,
          i + s * (0.02 + t * 0.061),
          o + c * (0.32 + e * 0.16) - c * (0.06 + u() * 0.06),
          s * 0.05,
          c * 0.1,
          n,
        );
      }
    }
    if (
      e === `fish` ||
      e === `fruit` ||
      e === `niku` ||
      e === `watch` ||
      e === `don`
    ) {
      y(r, i, o + c * 0.66, s, c * 0.2, e === `fish` ? `#f4f8fa` : `#d8e4e8`);
      for (let t = 0; t < 12; t++) {
        let n = i + s * (0.04 + t * 0.08);
        e === `fish`
          ? ((r.fillStyle = f[t % f.length]),
            r.beginPath(),
            r.ellipse(
              n + s * 0.03,
              o + c * 0.74,
              s * 0.035,
              c * 0.025,
              0.2,
              0,
              Math.PI * 2,
            ),
            r.fill())
          : y(r, n, o + c * 0.7, s * 0.05, c * 0.06, f[t % f.length]);
      }
      for (let e = 0; e < 5; e++)
        y(
          r,
          i + s * (0.08 + e * 0.19),
          o + c * 0.62,
          s * 0.07,
          c * 0.05,
          `#ff8a1a`,
        );
      if (e === `fish`)
        for (let e = 0; e < 3; e++)
          p(r, i + s * (0.2 + e * 0.3), o + c * 0.08, s * 0.05, `#ff5030`);
    }
  };
}
function re(e) {
  return (t, n, r, i, a) => {
    (b(t, n, r, i, a, e.bg, 0.62),
      e.sub
        ? (h(
            t,
            v(e.name),
            n + i * 0.4,
            r + a * 0.5,
            i * 0.62,
            a * 0.68,
            e.fg,
            `900`,
          ),
          h(
            t,
            v(e.sub),
            n + i * 0.84,
            r + a * 0.52,
            i * 0.26,
            a * 0.3,
            e.fg,
            `700`,
          ))
        : h(
            t,
            v(e.name),
            n + i / 2,
            r + a * 0.52,
            i * 0.86,
            a * 0.68,
            e.fg,
            `900`,
          ),
      y(t, n, r + a * 0.92, i, a * 0.08, `#2a2a2a`));
  };
}
function ie(e) {
  return (t, n, r, i, a) => {
    let o = [`#c8c4b8`, `#b8b4a8`, `#d4cdb8`][e];
    y(t, n, r, i, a, o);
    for (let e = 0; e < 32; e++)
      y(t, n + (i * e) / 32, r, i / 64, a, `#a8a498`);
    (g(
      t,
      40 + e,
      n,
      r,
      i,
      a,
      220,
      2.5,
      [`#8a6a4a`, `#7a766c`, `#a08060`],
      0.35,
    ),
      (t.globalAlpha = 0.2),
      (t.fillStyle = `#4a463e`));
    for (let e = 0; e < 18; e++)
      t.fillRect(
        n + ((e * 53) % 100) * (i / 100),
        r,
        2,
        a * (0.4 + ((e * 29) % 50) / 100),
      );
    ((t.globalAlpha = 1),
      e === 1
        ? (y(t, n + i * 0.1, r + a * 0.25, i * 0.5, a * 0.4, `#d8b8a0`),
          h(
            t,
            v(`ameyoko.pop.sen`),
            n + i * 0.35,
            r + a * 0.45,
            i * 0.44,
            a * 0.26,
            `#a83a2a`,
            `900`,
          ))
        : e === 2 &&
          (y(t, n + i * 0.55, r + a * 0.2, i * 0.38, a * 0.5, `#2a4a8a`),
          h(
            t,
            v(`ameyoko.pop.menzei`),
            n + i * 0.74,
            r + a * 0.45,
            i * 0.32,
            a * 0.25,
            `#ffffff`,
            `900`,
          )));
  };
}
function ae(e) {
  let t = [...I, ...L].find((t) => t.look === e),
    n = R.indexOf(e);
  return (e, r, i, a, o) => {
    y(e, r, i, a, o, [`#a8acae`, `#b4b0a4`, `#9ea4a8`][n % 3]);
    for (let t = 0; t < 36; t++) y(e, r, i + (o * t) / 36, a, 1.5, `#8a8e90`);
    if (
      (g(e, 70 + n, r, i, a, o, 150, 2, [`#7a7e80`, `#c0c4c6`, `#8a6a4a`], 0.3),
      h(
        e,
        v(t.name),
        r + a / 2,
        i + o * 0.3,
        a * 0.86,
        o * 0.16,
        n % 2 ? `#1d4e9e` : `#c01818`,
        `900`,
      ),
      n % 3 == 0 &&
        u(
          e,
          v(`ameyoko.sign.a`) + v(`ameyoko.sign.me`) + v(`ameyoko.sign.yoko`),
          r + a / 2,
          i + o * 0.58,
          a * 0.4,
          o * 0.16,
          `#e60012`,
          `#ffffff`,
          `900`,
        ),
      n % 4 == 1)
    ) {
      ((e.strokeStyle = [`#2a2a2a`, `#3a6ad0`][n % 2]),
        (e.lineWidth = 3),
        e.beginPath(),
        e.moveTo(r + a * 0.1, i + o * 0.8));
      for (let t = 1; t < 8; t++)
        e.lineTo(r + a * (0.1 + t * 0.05), i + o * (0.8 - (t % 2) * 0.1));
      e.stroke();
    }
    y(e, r, i + o * 0.94, a, o * 0.06, `#5a5e60`);
  };
}
function oe(e, t, n, r, i) {
  y(e, t, n, r, i, `#9c988e`);
  for (let a = 0; a < 8; a++) y(e, t, n + (i * a) / 8, r, 1, `#86827a`);
  g(e, 91, t, n, r, i, 200, 2, [`#7a766c`, `#b4b0a6`, `#6a5a4a`], 0.3);
}
function se(e, t, n, r, i) {
  b(e, t, n, r, i, `#d42a1e`, 0.66);
  for (let a = 1; a < 8; a++) y(e, t, n + (i * a) / 8, r, 1, `#a81e14`);
  (a(
    e,
    v(`ameyoko.pop.nikomi`),
    t + r / 2,
    n + i * 0.15,
    n + i * 0.85,
    r * 0.5,
    `#1a1a1a`,
    void 0,
    `900`,
  ),
    y(e, t, n, r, i * 0.06, `#1a1a1a`),
    y(e, t, n + i * 0.94, r, i * 0.06, `#1a1a1a`));
}
function B(e) {
  return (t, n, r, i, o) => {
    (b(t, n, r, i, o, e ? `#ffffff` : `#d81818`, 0.6),
      a(
        t,
        v(e ? `ameyoko.yearend.shogatsu` : `ameyoko.yearend.saimatsu`),
        n + i / 2,
        r + o * 0.06,
        r + o * 0.94,
        i * 0.7,
        e ? `#d81818` : `#ffffff`,
        void 0,
        `900`,
      ));
  };
}
function V(e, t, n) {
  return (r, i, a, o, s) => {
    (b(r, i, a, o, s, t, 0.6),
      u(
        r,
        v(e),
        i + o / 2,
        a + s / 2,
        o * 0.88,
        s * 0.72,
        n,
        t === `#ffffff` ? `#ffe100` : `#1a1a1a`,
        `900`,
      ));
  };
}
function ce(e, t) {
  return {
    name: `ut-open-${t}`,
    write: (n) => {
      let r = O / 2 - 0.2,
        i = 3.05,
        a = e.white();
      (n.setMaterial(0.5, 0, 0.42, P | 16),
        w(n, 16777215),
        l(n, -r, -1.6, r, -1.6, 0.02, i, e.uv(`ut-in-${t}`)),
        n.setMaterial(0.7, 0, 0.3, 17),
        w(n, t === `motsu` || t === `yakitori` ? 6965810 : 15262938),
        n.quad(
          -r,
          i,
          0,
          r,
          i,
          0,
          r,
          i,
          -1.6,
          -r,
          i,
          -1.6,
          a.u0,
          a.v0,
          a.u1,
          a.v1,
        ),
        n.setMaterial(0.8, 0, 0, 16),
        w(n, t === `motsu` || t === `yakitori` ? 4863012 : 12104358),
        l(n, -r, 0, -r, -1.6, 0.02, i, a),
        l(n, r, -1.6, r, 0, 0.02, i, a),
        w(n, 6973022),
        n.quad(
          -r,
          0.03,
          -1.6,
          r,
          0.03,
          -1.6,
          r,
          0.03,
          0,
          -r,
          0.03,
          0,
          a.u0,
          a.v0,
          a.u1,
          a.v1,
        ));
    },
  };
}
var le = (e) => {
  let t = R.map((t) => ce(e, t));
  for (let n of R)
    t.push({
      name: `ut-shutter-${n}`,
      write: (t) => {
        (t.setMaterial(0.6, 0.4, 0, 0),
          w(t, 16777215),
          l(
            t,
            -(O / 2 - 0.2),
            0.05,
            O / 2 - 0.2,
            0.05,
            0.02,
            3.05,
            e.uv(`ut-shutter-${n}`),
          ));
      },
    });
  t.push({
    name: `chochin`,
    write: (t) => {
      (t.setMaterial(0.8, 0, 0.6, P),
        w(t, 16777215),
        T(t, 0, -0.42, 0, 0.22, 0.32, 0.22, e.uv(`chochin`), 5, 8),
        t.setMaterial(0.6, 0, 0, 0),
        w(t, 1710618),
        f(t, -0.01, -0.1, -0.01, 0.01, 0, 0.01, e.white()));
    },
  });
  for (let n of [0, 1])
    t.push({
      name: `ut-ye-${n}`,
      write: (t) => {
        (t.setMaterial(0.8, 0, 0.3, P | 16),
          w(t, 16777215),
          l(t, -0.32, 0.02, 0.32, 0.02, -1.7, 0, e.uv(`ut-ye-${n}`)),
          l(t, 0.32, -0.02, -0.32, -0.02, -1.7, 0, e.uv(`ut-ye-${n}`)));
      },
    });
  return t;
};
function H() {
  let e = [];
  return (
    D.forEach(([t, n], r) => {
      let i = r === 0 ? I : L,
        a = Math.floor((n - t) / O),
        o = (n - t - a * O) / 2;
      for (let n = 0; n < a; n++) {
        let r = t + o + n * O;
        e.push({ z0: r, z1: r + O, d: i[Math.min(i.length - 1, n)] });
      }
    }),
    e
  );
}
function ue(e, r) {
  let i = r.white(),
    a = E.face,
    o = E.soffit,
    s = H(),
    c = new t(n(`ut-row`, 1));
  for (let t of s)
    if (
      (e.setMaterial(0.5, 0, 0.5, 18),
      w(e, 16777215),
      l(e, a - 0.25, t.z0 + 0.08, a - 0.25, t.z1 - 0.08, 3.15, 4, r.uv(z(t.d))),
      e.setMaterial(0.7, 0.2, 0, 16),
      w(e, 2763306),
      e.quad(
        a - 0.25,
        3.15,
        t.z0 + 0.08,
        a - 0.25,
        3.15,
        t.z1 - 0.08,
        a,
        3.15,
        t.z1 - 0.08,
        a,
        3.15,
        t.z0 + 0.08,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      e.setMaterial(0.85, 0, 0, 0),
      w(e, 16777215),
      l(
        e,
        a,
        t.z0,
        a,
        t.z1,
        4,
        o,
        r.uv(`ut-upper-${Math.floor(c.next() * 3)}`),
      ),
      w(e, 9209982),
      l(e, a, t.z0, a, t.z0 + 0.2, 0, 3.15, i),
      l(e, a, t.z1 - 0.2, a, t.z1, 0, 3.15, i),
      l(e, a, t.z0 + 0.2, a, t.z1 - 0.2, 3.05, 3.15, i),
      c.next() < 0.45)
    ) {
      (e.setMaterial(0.6, 0, 0.3, P | 16), w(e, 16777215));
      let n = (t.z0 + t.z1) / 2 + (c.next() - 0.5) * 1.6;
      l(
        e,
        a - 0.03,
        n - 0.7,
        a - 0.03,
        n + 0.7,
        4.3,
        5,
        r.uv(`ut-pop-${Math.floor(c.next() * 3)}`),
      );
    }
  (e.setMaterial(0.6, 0.5, 0, 0), w(e, 16777215));
  for (let t of s)
    f(e, a - 0.18, 0, t.z0 - 0.12, a + 0.05, o, t.z0 + 0.12, r.uv(`ut-post`));
  for (let [, t] of D)
    f(e, a - 0.18, 0, t - 0.12, a + 0.05, o, t + 0.12, r.uv(`ut-post`));
  e.setMaterial(0.9, 0, 0, 0);
  for (let [t, n] of D)
    (w(e, 16777215),
      d(e, E.back, t, a, t, 0, o, r.uv(`ut-back`), 4),
      d(e, a, n, E.back, n, 0, o, r.uv(`ut-back`), 4),
      d(e, E.back, n, E.back, t, 0, o, r.uv(`ut-back`), 4.5));
}
function de(e, t) {
  t.uniques.push({
    name: `undertrack-row`,
    write: (t) => ue(t, e),
    cx: E.face,
    cz: (D[0][0] + D[1][1]) / 2,
    range: 600,
  });
  let n = E.face,
    r = 0;
  for (let e of H()) {
    let i = (e.z0 + e.z1) / 2,
      [a, o] = e.d.hours,
      s = (e) => e.h >= a && e.h < o;
    if (
      (t.instances.push({
        model: `ut-open-${e.d.look}`,
        x: n,
        y: 0.15,
        z: i,
        fx: -1,
        fz: 0,
        range: 220,
        when: s,
      }),
      t.instances.push({
        model: `ut-shutter-${e.d.look}`,
        x: n,
        y: 0.15,
        z: i,
        fx: -1,
        fz: 0,
        range: 220,
        when: (e) => !s(e),
      }),
      e.d.lanterns)
    )
      for (let e of [-1.3, 1.3])
        t.instances.push({
          model: `chochin`,
          x: n - 0.45,
          y: 3.1,
          z: i + e,
          fx: -1,
          fz: 0,
          range: 160,
        });
    (t.instances.push({
      model: `ut-ye-${+(r % 3 == 2)}`,
      x: n - 0.4,
      y: 3.12,
      z: e.z0 + 0.6,
      fx: -1,
      fz: 0,
      range: 180,
      when: (e) => e.yearEnd,
    }),
      r++);
  }
  for (let [e, r] of D)
    t.boxes.push({
      minX: n,
      minZ: e,
      maxX: E.back,
      maxZ: r,
      y0: 0,
      y1: E.soffit,
    });
}
var U = 3;
function fe(e) {
  for (let t of [`a`, `me`, `yoko`]) e.need(`sign-${t}`, 96, 96, pe(t));
  (e.need(`sign-clock`, 96, 96, me),
    e.need(`sign-banner`, 512, 48, (e, t, n, r, i) => {
      (b(e, t, n, r, i, `#ffffff`, 0.55),
        h(
          e,
          v(`ameyoko.sign.banner`),
          t + r / 2,
          n + i * 0.52,
          r * 0.9,
          i * 0.7,
          `#1d4e9e`,
          `900`,
        ));
    }),
    e.need(`granite`, 128, 128, (e, t, n, r, i) => {
      y(e, t, n, r, i, `#9b9a96`);
      for (let a = 0; a < 4; a++)
        for (let o = 0; o < 4; o++)
          y(
            e,
            t + (a * r) / 4 + 1,
            n + (o * i) / 4 + 1,
            r / 4 - 2,
            i / 4 - 2,
            [`#a7a6a1`, `#9f9e99`, `#ababa5`, `#a2a19c`][(a + o * 3) % 4],
          );
      g(e, 71, t, n, r, i, 260, 1.4, [`#7a7a76`, `#c6c5c0`, `#8a8986`], 0.4);
    }),
    e.need(`bamboo`, 128, 64, (e, t, n, r, i) => {
      y(e, t, n, r, i, `#e8e0c8`);
      for (let a = 0; a < 10; a++)
        y(
          e,
          t + r * (0.05 + a * 0.095),
          n,
          r * 0.035,
          i,
          [`#5a8a3a`, `#6e9a46`, `#4a7a32`][a % 3],
        );
      for (let a = 1; a < 4; a++) y(e, t, n + (i * a) / 4, r, 1.5, `#3e5e2a`);
    }),
    e.need(`panda-sign`, 256, 128, he),
    e.need(`panda-plate`, 96, 48, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#2a2a2a`),
        h(
          e,
          v(`ameyoko.panda.teppanda`),
          t + r / 2,
          n + i * 0.35,
          r * 0.8,
          i * 0.36,
          `#e8d8a0`,
          `900`,
        ),
        h(
          e,
          v(`ameyoko.panda.plate`),
          t + r / 2,
          n + i * 0.75,
          r * 0.9,
          i * 0.22,
          `#e8d8a0`,
          `700`,
        ));
    }),
    e.need(`iron`, 64, 64, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#3a3a3c`),
        g(e, 15, t, n, r, i, 120, 2, [`#2a2a2c`, `#5a5a5e`, `#6a4a3a`], 0.4));
    }),
    e.need(`iron-face`, 64, 64, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#4a4a4e`),
        p(e, t + r / 2, n + i * 0.3, r * 0.22, `#b8a888`),
        p(e, t + r * 0.32, n + i * 0.55, r * 0.12, `#1a1a1c`),
        p(e, t + r * 0.68, n + i * 0.55, r * 0.12, `#1a1a1c`));
    }));
  for (let t of [0, 1]) e.need(`jewel-flag-${t}`, 64, 192, ge(t));
  e.need(`kaitori`, 96, 128, (e, t, n, r, i) => {
    (y(e, t, n, r, i, `#1a1a1a`),
      y(e, t + r * 0.06, n + i * 0.04, r * 0.88, i * 0.3, `#d4a82a`),
      a(
        e,
        v(`ameyoko.jewel.kaitori`),
        t + r / 2,
        n + i * 0.38,
        n + i * 0.96,
        r * 0.42,
        `#f0d060`,
        void 0,
        `900`,
      ),
      h(e, `¥`, t + r / 2, n + i * 0.19, r * 0.5, i * 0.22, `#1a1a1a`, `900`));
  });
}
function pe(e) {
  return (t, n, r, i, a) => {
    (b(t, n, r, i, a, `#ffffff`, 0.6),
      (t.strokeStyle = `#d0d0d0`),
      (t.lineWidth = 3),
      t.beginPath(),
      t.arc(n + i / 2, r + a / 2, i * 0.46, 0, Math.PI * 2),
      t.stroke(),
      h(
        t,
        v(`ameyoko.sign.${e}`),
        n + i / 2,
        r + a / 2,
        i * 0.7,
        a * 0.7,
        `#d81818`,
        `900`,
      ));
  };
}
function me(e, t, n, r, i) {
  (y(e, t, n, r, i, `#1d5aa8`),
    p(e, t + r / 2, n + i / 2, r * 0.4, `#ffffff`),
    (e.fillStyle = `#1a1a1a`));
  for (let a = 0; a < 12; a++) {
    let o = (a / 12) * Math.PI * 2;
    e.fillRect(
      t + r / 2 + Math.cos(o) * r * 0.34 - 1.5,
      n + i / 2 + Math.sin(o) * i * 0.34 - 1.5,
      3,
      3,
    );
  }
  ((e.strokeStyle = `#1a1a1a`),
    (e.lineWidth = 3),
    e.beginPath(),
    e.moveTo(t + r / 2, n + i / 2),
    e.lineTo(t + r * 0.38, n + i * 0.36),
    e.moveTo(t + r / 2, n + i / 2),
    e.lineTo(t + r * 0.66, n + i * 0.34),
    e.stroke());
}
function he(e, t, n, r, i) {
  (y(e, t, n, r, i, `#ffffff`),
    y(e, t, n, r, i * 0.08, `#2e8a3a`),
    y(e, t, n + i * 0.92, r, i * 0.08, `#2e8a3a`),
    m(e, t + r * 0.16, n + i * 0.48, i * 0.26),
    h(
      e,
      v(`ameyoko.panda.hiroba`),
      t + r * 0.63,
      n + i * 0.4,
      r * 0.6,
      i * 0.24,
      `#1a1a1a`,
      `900`,
    ),
    h(
      e,
      v(`ameyoko.panda.michi`),
      t + r * 0.63,
      n + i * 0.72,
      r * 0.6,
      i * 0.14,
      `#2e8a3a`,
      `700`,
    ));
}
function ge(e) {
  return (t, n, r, i, o) => {
    (b(t, n, r, i, o, e ? `#1a2a5a` : `#ffffff`, 0.6),
      y(t, n, r, i, o * 0.05, `#c8a040`),
      y(t, n, r + o * 0.95, i, o * 0.05, `#c8a040`),
      (t.fillStyle = e ? `#a8d8f8` : `#4a7ad0`),
      t.beginPath(),
      t.moveTo(n + i * 0.3, r + o * 0.1),
      t.lineTo(n + i * 0.7, r + o * 0.1),
      t.lineTo(n + i * 0.82, r + o * 0.15),
      t.lineTo(n + i * 0.5, r + o * 0.24),
      t.lineTo(n + i * 0.18, r + o * 0.15),
      t.fill(),
      a(
        t,
        v(`ameyoko.jewel.town`),
        n + i * 0.42,
        r + o * 0.28,
        r + o * 0.92,
        i * 0.5,
        e ? `#ffffff` : `#1a2a5a`,
        void 0,
        `900`,
      ),
      t.save(),
      t.translate(n + i * 0.84, r + o * 0.6),
      t.rotate(Math.PI / 2),
      h(t, v(`ameyoko.jewel.latin`), 0, 0, o * 0.6, i * 0.16, `#c8a040`, `800`),
      t.restore());
  };
}
function W(e, t, n, r, i, a, o, s = 14) {
  let c = e.vertex(t, n, r, 0, 0, o, (a.u0 + a.u1) / 2, (a.v0 + a.v1) / 2);
  for (let c = 0; c <= s; c++) {
    let l = (c / s) * Math.PI * 2,
      u = Math.cos(l),
      d = Math.sin(l);
    e.vertex(
      t + u * i,
      n + d * i,
      r,
      0,
      0,
      o,
      a.u0 + (a.u1 - a.u0) * (0.5 + o * u * 0.5),
      a.v0 + (a.v1 - a.v0) * (0.5 + d * 0.5),
    );
  }
  for (let t = 0; t < s; t++)
    o > 0 ? e.tri(c, c + 1 + t, c + 2 + t) : e.tri(c, c + 2 + t, c + 1 + t);
}
function _e(e, t) {
  let n = t.white(),
    r = k.west - 0.3,
    i = k.east - 0.05,
    a = A;
  (e.setMaterial(0.5, 0.5, 0, 0),
    w(e, 14211284),
    c(e, r, a, 0.02, 6.9, 0.12, n, 8),
    e.setMaterial(0.6, 0.1, 0, 0),
    w(e, 16053488),
    f(e, r, 5, a - 0.18, i, 5.5, a + 0.18, n),
    e.setMaterial(0.6, 0, 0.3, U),
    w(e, 16777215),
    l(e, i - 0.3, a - 0.2, r + 0.4, a - 0.2, 4.3, 4.9, t.uv(`sign-banner`)),
    l(e, r + 0.4, a + 0.2, i - 0.3, a + 0.2, 4.3, 4.9, t.uv(`sign-banner`)));
  let o = 0.6,
    s = [r + (i - r) * 0.22, r + (i - r) * 0.5, r + (i - r) * 0.78],
    u = [`a`, `me`, `yoko`];
  for (let n = 0; n < 3; n++)
    (W(e, s[n], 6.1, a + 0.2, 0.68, t.uv(`sign-${u[n]}`), 1),
      W(e, s[2 - n], 6.1, a - 0.2, 0.68, t.uv(`sign-${u[n]}`), -1));
  (e.setMaterial(0.6, 0.1, 0, 0), w(e, 16053488));
  for (let t of s) f(e, t - 0.7, 5.5, a - 0.17, t + 0.7, 5.55, a + 0.17, n);
  (w(e, 1923752),
    f(e, r - 0.3, 6.55, a - o, i + 0.3, 6.72, a + o, n),
    w(e, 1923752));
  let d = 7.25,
    p = 6.7,
    m = 0.6;
  (e.quad(
    r - 0.3,
    p,
    a + m,
    i + 0.3,
    p,
    a + m,
    i + 0.3,
    d,
    a,
    r - 0.3,
    d,
    a,
    n.u0,
    n.v0,
    n.u1,
    n.v1,
  ),
    e.quad(
      i + 0.3,
      p,
      a - m,
      r - 0.3,
      p,
      a - m,
      r - 0.3,
      d,
      a,
      i + 0.3,
      d,
      a,
      n.u0,
      n.v0,
      n.u1,
      n.v1,
    ));
  for (let [t, o] of [
    [r - 0.3, -1],
    [i + 0.3, 1],
  ])
    e.quad(
      t,
      p,
      a + m,
      t,
      p,
      a - m,
      t + o * 0.5,
      7.5,
      a - m - 0.15,
      t + o * 0.5,
      7.5,
      a + m + 0.15,
      n.u0,
      n.v0,
      n.u1,
      n.v1,
    );
  (w(e, 1923752),
    c(e, (r + i) / 2, a, d, 7.5, 0.05, n, 5),
    e.setMaterial(0.6, 0, 0.3, U),
    w(e, 16777215),
    W(e, (r + i) / 2, 8.1, a + 0.12, 0.55, t.uv(`sign-clock`), 1),
    W(e, (r + i) / 2, 8.1, a - 0.12, 0.55, t.uv(`sign-clock`), -1),
    e.setMaterial(0.6, 0.2, 0, 0),
    w(e, 1923752));
  for (let t = 0; t < 12; t++) {
    let o = (t / 12) * Math.PI * 2;
    f(
      e,
      (r + i) / 2 + Math.cos(o) * 0.55 - 0.06,
      8.1 + Math.sin(o) * 0.55 - 0.06,
      a - 0.12,
      (r + i) / 2 + Math.cos(o) * 0.55 + 0.06,
      8.1 + Math.sin(o) * 0.55 + 0.06,
      a + 0.12,
      n,
    );
  }
}
function ve(e, r) {
  let i = r.white(),
    { x0: a, x1: o, z0: c, z1: u } = j;
  (e.setMaterial(0.8, 0, 0, 0),
    w(e, 16777215),
    _(e, a, c, o, u, 0.17, r.uv(`granite`), 3));
  let d = [
    [a + 0.4, c + 0.3, o - 0.4, c + 1.1],
    [o - 1.1, c + 1.4, o - 0.3, u - 0.6],
  ];
  for (let [a, o, c, l] of d) {
    (w(e, 16777215),
      s(
        e,
        (a + c) / 2,
        (o + l) / 2,
        0.15,
        0.8,
        (c - a) / 2,
        (l - o) / 2,
        0,
        1,
        r.uv(`bamboo`),
        r.uv(`bamboo`),
        r.uv(`bamboo`),
      ),
      e.setMaterial(0.8, 0, 0, 0));
    let u = new t(n(`ame-bamboo`, Math.round(a), Math.round(o)));
    for (let t = 0; t < 14; t++) {
      let t = a + 0.15 + u.next() * (c - a - 0.3),
        n = o + 0.15 + u.next() * (l - o - 0.3),
        r = 2.2 + u.next() * 1.4;
      (w(e, u.next() < 0.5 ? 5933626 : 7248454),
        C(
          e,
          t,
          0.8,
          n,
          t + (u.next() - 0.5) * 0.3,
          0.8 + r,
          n + (u.next() - 0.5) * 0.3,
          0.025,
          i,
        ),
        w(e, 4880946));
      for (let a = 0; a < 3; a++) {
        let o = 0.8 + r * (0.62 + a * 0.17),
          s = u.next() * Math.PI * 2;
        T(
          e,
          t + Math.cos(s) * 0.18,
          o,
          n + Math.sin(s) * 0.18,
          0.26,
          0.07,
          0.12,
          i,
          2,
          5,
        );
      }
    }
  }
  (e.setMaterial(0.6, 0.3, 0, 0), w(e, 3050042));
  let p = a + 4.4,
    m = (c + u) / 2 - 2.5;
  for (let t of [-1.3, 1.3])
    f(e, p, 0.15, m + t - 0.05, p + 0.1, 2.6, m + t + 0.05, i);
  (e.setMaterial(0.6, 0, 0.25, 1),
    w(e, 16777215),
    l(e, p - 0.05, m - 1.4, p - 0.05, m + 1.4, 1.2, 2.6, r.uv(`panda-sign`)));
}
var ye = (e) => [
  {
    name: `teppanda`,
    write: (t) => {
      let n = e.uv(`iron`),
        r = e.white();
      (t.setMaterial(0.9, 0, 0, 0),
        w(t, 10131600),
        s(t, 0, 0, 0, 0.55, 0.55, 0.45, 0, 1, r, e.uv(`panda-plate`)),
        t.setMaterial(0.35, 0.8, 0, 0),
        w(t, 16777215),
        T(t, 0, 0.98, 0, 0.42, 0.45, 0.38, n, 5, 10),
        T(t, 0, 1.6, 0.05, 0.34, 0.3, 0.32, e.uv(`iron-face`), 5, 10));
      for (let e of [-1, 1])
        (T(t, e * 0.24, 1.86, 0.02, 0.1, 0.1, 0.07, n, 3, 6),
          T(t, e * 0.3, 1.08, 0.18, 0.12, 0.22, 0.12, n, 3, 6),
          T(t, e * 0.2, 0.66, 0.3, 0.14, 0.1, 0.2, n, 3, 6));
      T(t, 0, 1.54, 0.34, 0.07, 0.05, 0.05, n, 3, 6);
    },
  },
  ...[0, 1].map((t) => ({
    name: `jewel-flag-${t}`,
    write: (n) => {
      let r = e.white(),
        i = e.uv(`jewel-flag-${t}`);
      (n.setMaterial(0.6, 0.5, 0, 0),
        w(n, 9080466),
        c(n, 0, 0, 0, 6.6, 0.09, r, 6, !0));
      for (let e of [1, -1])
        (C(n, 0, 6.15, 0, 0, 6.15, e * 0.95, 0.025, r),
          C(n, 0, 4.05, 0, 0, 4.05, e * 0.95, 0.025, r));
      (n.setMaterial(0.8, 0, 0.22, U | 16), w(n, 16777215));
      for (let e of [1, -1]) {
        let t = e > 0 ? 0.18 : -0.92,
          r = e > 0 ? 0.92 : -0.18;
        (l(n, 0.012, r, 0.012, t, 4, 6.1, i),
          l(n, -0.012, t, -0.012, r, 4, 6.1, i));
      }
    },
  })),
  {
    name: `kaitori`,
    write: (t) => {
      (t.setMaterial(0.6, 0, 0.2, 1), w(t, 16777215));
      let n = e.uv(`kaitori`);
      (t.quad(
        -0.3,
        0,
        0.2,
        0.3,
        0,
        0.2,
        0.3,
        1.1,
        0.02,
        -0.3,
        1.1,
        0.02,
        n.u0,
        n.v0,
        n.u1,
        n.v1,
      ),
        t.quad(
          0.3,
          0,
          -0.2,
          -0.3,
          0,
          -0.2,
          -0.3,
          1.1,
          -0.02,
          0.3,
          1.1,
          -0.02,
          n.u0,
          n.v0,
          n.u1,
          n.v1,
        ));
    },
  },
];
function be(e, i, a) {
  let o = e.plan;
  (a.uniques.push({
    name: `ameyoko-sign`,
    write: (e) => _e(e, i),
    cx: k.x,
    cz: A,
    range: 420,
  }),
    a.circles.push({ x: k.west - 0.3, z: A, r: 0.14, y0: 0, y1: 7 }),
    a.uniques.push({
      name: `panda-hiroba`,
      write: (e) => ve(e, i),
      cx: (j.x0 + j.x1) / 2,
      cz: (j.z0 + j.z1) / 2,
      range: 300,
    }));
  let s = j.x0 + 2.4,
    c = (j.z0 + j.z1) / 2 + 2.6;
  (a.instances.push({
    model: `teppanda`,
    x: s,
    y: 0.17,
    z: c,
    fx: -1,
    fz: 0,
    range: 150,
  }),
    a.circles.push({ x: s, z: c, r: 0.6, y0: 0, y1: 2 }),
    a.boxes.push({
      minX: j.x0 + 0.4,
      minZ: j.z0 + 0.3,
      maxX: j.x1 - 0.4,
      maxZ: j.z0 + 1.1,
      y0: 0,
      y1: 1,
      tag: `prop`,
    }),
    a.boxes.push({
      minX: j.x1 - 1.1,
      minZ: j.z0 + 1.4,
      maxX: j.x1 - 0.3,
      maxZ: j.z1 - 0.6,
      y0: 0,
      y1: 1,
      tag: `prop`,
    }));
  let l = o.roads.find((e) => e.id === `kasuga`),
    u = o.dataset.sidewalkHeight ?? 0.15;
  if (l) {
    let e = r(o),
      i = e.nodesOf(l),
      s = new t(n(`ame-jewel`, 1));
    for (let t = 0; t + 1 < i.length; t++)
      for (let n of [-1, 1]) {
        let r = e.primaryLights(l, i[t], i[t + 1], n);
        if (r && r.kind === `tall`)
          for (let e of r.ts) {
            if (e < N.x0 || e > N.x1) continue;
            let t = l.at + n * (l.halfWidth + 0.55);
            (a.instances.push({
              model: `jewel-flag-${Math.floor(s.next() * 2)}`,
              x: e,
              y: u,
              z: t,
              fx: 0,
              fz: -n,
              range: 240,
            }),
              a.circles.push({ x: e, z: t, r: 0.12, y0: 0, y1: 6.6 }));
          }
      }
    for (let e of [-96, -58, -22, 12]) {
      let t = l.at + l.halfTotal - 0.9;
      a.instances.push({
        model: `kaitori`,
        x: e,
        y: u,
        z: t,
        fx: 0,
        fz: -1,
        range: 110,
        when: (e) => e.wd !== 0 && e.h >= 10 && e.h < 18,
      });
    }
  }
}
var G = 3,
  K = 4.1;
function xe(e) {
  (e.need(`dp-glass`, 96, 160, Se),
    e.need(`dp-crown`, 256, 96, Ce),
    e.need(`dp-show`, 256, 128, we),
    e.need(`dp-door`, 192, 128, Te),
    e.need(`dp-stone`, 128, 128, (e, t, n, r, i) => {
      y(e, t, n, r, i, `#d8ccb0`);
      for (let a = 1; a < 4; a++) y(e, t, n + (i * a) / 4, r, 1, `#c4b89c`);
      g(e, 52, t, n, r, i, 300, 1.6, [`#bcae90`, `#e8dcc2`, `#a89a7e`], 0.3);
    }),
    e.need(`dp-vsign`, 96, 384, Ee),
    e.need(`dp-roof`, 512, 96, De));
}
function Se(e, t, n, r, i) {
  y(e, t, n, r, i, `#2e3a44`);
  for (let a = 0; a < 3; a++)
    y(
      e,
      t + r * (0.03 + a * 0.33),
      n + i * 0.03,
      r * 0.3,
      i * 0.94,
      [`#3a4a56`, `#34424c`, `#40505c`][a],
    );
  (y(e, t, n + i * 0.46, r, i * 0.03, `#1e262c`),
    (e.globalAlpha = 0.14),
    (e.fillStyle = `#ffffff`),
    e.fillRect(t + r * 0.1, n, r * 0.08, i),
    (e.globalAlpha = 1));
}
function Ce(e, t, n, r, i) {
  y(e, t, n, r, i, `#d2c4a4`);
  for (let a = 0; a < 8; a++) {
    let o = t + (r * (a + 0.5)) / 8;
    ((e.fillStyle = `#b8a888`),
      e.beginPath(),
      e.moveTo(o - r * 0.05, n + i * 0.75),
      e.lineTo(o, n + i * 0.2),
      e.lineTo(o + r * 0.05, n + i * 0.75),
      e.fill(),
      y(e, o - r * 0.008, n + i * 0.1, r * 0.016, i * 0.8, `#a8987a`));
  }
  (y(e, t, n + i * 0.85, r, i * 0.15, `#b0a080`),
    y(e, t, n, r, i * 0.06, `#b0a080`));
}
function we(e, t, n, r, i) {
  b(e, t, n, r, i, `#f4ece0`, 0.6);
  for (let a = 0; a < 3; a++) {
    let o = t + r * (0.2 + a * 0.3);
    (y(
      e,
      o - r * 0.04,
      n + i * 0.3,
      r * 0.08,
      i * 0.45,
      [`#8a3a2a`, `#3a4a6a`, `#c8a060`][a],
    ),
      (e.fillStyle = `#e8d8c8`),
      e.beginPath(),
      e.arc(o, n + i * 0.24, r * 0.03, 0, Math.PI * 2),
      e.fill(),
      y(e, o - r * 0.012, n + i * 0.75, r * 0.024, i * 0.12, `#c8c0b0`));
  }
  (y(e, t, n + i * 0.88, r, i * 0.12, `#c8b88a`),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#b08a3a`),
    (e.lineWidth = 4),
    e.strokeRect(t + 2, n + 2, r - 4, i - 4));
}
function Te(e, t, n, r, i) {
  b(e, t, n, r, i, `#f0e4cc`, 0.62);
  for (let a = 0; a < 4; a++) {
    let o = t + r * (0.06 + a * 0.235);
    ((e.globalAlpha = 1),
      (e.strokeStyle = `#b08a3a`),
      (e.lineWidth = 5),
      e.strokeRect(o, n + i * 0.18, r * 0.2, i * 0.8),
      y(e, o + r * 0.09, n + i * 0.5, r * 0.02, i * 0.14, `#b08a3a`));
  }
  (y(e, t, n, r, i * 0.14, `#8a1a1a`),
    h(
      e,
      v(`ameyoko.depato.name`),
      t + r / 2,
      n + i * 0.07,
      r * 0.5,
      i * 0.11,
      `#f4e8c8`,
      `900`,
    ));
}
function Ee(e, t, n, r, i) {
  (b(e, t, n, r, i, `#b81c1c`, 0.62),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#f4e8c8`),
    (e.lineWidth = 3),
    e.beginPath(),
    e.arc(t + r / 2, n + i * 0.08, r * 0.3, 0, Math.PI * 2),
    e.stroke(),
    (e.fillStyle = `#f4e8c8`),
    e.beginPath(),
    e.ellipse(t + r / 2, n + i * 0.08, r * 0.08, r * 0.22, 0.5, 0, Math.PI * 2),
    e.fill(),
    a(
      e,
      v(`ameyoko.depato.short`),
      t + r / 2,
      n + i * 0.17,
      n + i * 0.96,
      r * 0.66,
      `#ffffff`,
      void 0,
      `900`,
    ));
}
function De(e, t, n, r, i) {
  (b(e, t, n, r, i, `#ffffff`, 0.6),
    y(e, t, n + i * 0.86, r, i * 0.14, `#b81c1c`),
    h(
      e,
      v(`ameyoko.depato.short`),
      t + r * 0.42,
      n + i * 0.45,
      r * 0.5,
      i * 0.68,
      `#b81c1c`,
      `900`,
    ),
    h(
      e,
      v(`ameyoko.depato.latin`),
      t + r * 0.82,
      n + i * 0.48,
      r * 0.28,
      i * 0.3,
      `#b81c1c`,
      `800`,
    ));
}
function Oe(e, t) {
  let { x0: n, x1: r, z0: i, z1: a } = M,
    o = 0.15,
    s = 33.349999999999994,
    c = t.white(),
    u = t.uv(`dp-glass`),
    p = t.uv(`dp-stone`);
  (e.setMaterial(0.3, 0.1, 0.45, G | 16), w(e, 16777215));
  let m = o,
    h = 4.75,
    g = Math.round((a - i) / 6);
  for (let r = 0; r < g; r++) {
    let o = i + ((a - i) * r) / g,
      s = i + ((a - i) * (r + 1)) / g;
    l(
      e,
      n,
      o + 0.4,
      n,
      s - 0.4,
      0.55,
      4.15,
      t.uv(r === 2 ? `dp-door` : `dp-show`),
    );
  }
  let _ = Math.round((r - n) / 6);
  for (let a = 0; a < _; a++) {
    let o = n + ((r - n) * a) / _,
      s = n + ((r - n) * (a + 1)) / _;
    l(e, s - 0.4, i, o + 0.4, i, 0.55, 4.15, t.uv(`dp-show`));
  }
  (e.setMaterial(0.8, 0, 0, 0), w(e, 16777215));
  for (let t = 0; t <= g; t++) {
    let r = i + ((a - i) * t) / g;
    f(e, n - 0.3, m, r - 0.45, n + 0.1, h, r + 0.45, p);
  }
  for (let t = 0; t <= _; t++) {
    let a = n + ((r - n) * t) / _;
    f(e, a - 0.45, m, i - 0.3, a + 0.45, h, i + 0.1, p);
  }
  (f(e, n - 0.35, 4.15, i - 0.35, r, h, a, p), w(e, 9050650));
  let v = i + ((a - i) * 2) / g,
    y = i + ((a - i) * 3) / g;
  f(e, n - 2.4, 3.65, v, n, 3.9, y, c);
  let b = 29.249999999999996;
  (e.setMaterial(0.85, 0, 0, 0),
    w(e, 16777215),
    d(e, n, i, n, a, h, b, p, 4.1),
    d(e, r, i, n, i, h, b, p, 4.1),
    w(e, 14997692));
  let x = Math.round((a - i) / 3),
    S = Math.round((r - n) / 3);
  for (let t = 0; t <= x; t++) {
    let r = i + ((a - i) * t) / x;
    f(e, n - 0.35, h, r - 0.22, n, 30.449999999999996, r + 0.22, p);
  }
  for (let t = 0; t <= S; t++) {
    let a = n + ((r - n) * t) / S;
    f(e, a - 0.22, h, i - 0.35, a + 0.22, 30.449999999999996, i, p);
  }
  (e.setMaterial(0.35, 0.1, 0.5, 35), w(e, 16777215));
  for (let t = 1; t < 7; t++) {
    let o = 0.55 + K * t + 0.5,
      s = o + K - 1;
    for (let t = 0; t < x; t++) {
      let r = i + ((a - i) * t) / x + 0.45,
        c = i + ((a - i) * (t + 1)) / x - 0.45;
      l(e, n - 0.04, r, n - 0.04, c, o, s, u);
    }
    for (let t = 0; t < S; t++) {
      let a = n + ((r - n) * t) / S + 0.45,
        c = n + ((r - n) * (t + 1)) / S - 0.45;
      l(e, c, i - 0.04, a, i - 0.04, o, s, u);
    }
  }
  (e.setMaterial(0.8, 0, 0, 0), w(e, 16777215));
  let C = 29.249999999999996;
  (d(e, n, i, n, a, C, s, t.uv(`dp-crown`), 8),
    d(e, r, i, n, i, C, s, t.uv(`dp-crown`), 8),
    d(e, n, a, r, a, o, s, p, 6),
    d(e, r, a, r, i, o, s, p, 6),
    w(e, 11575424),
    f(e, n - 0.3, s, i - 0.3, r, 33.949999999999996, a, c),
    e.setMaterial(0.5, 0, 0.5, 2),
    w(e, 16777215),
    l(
      e,
      r - 0.6,
      i + 0.4,
      n + 0.6,
      i + 0.4,
      34.949999999999996,
      38.55,
      t.uv(`dp-roof`),
    ),
    l(
      e,
      n + 0.4,
      i + 0.6,
      n + 0.4,
      i + 20,
      34.949999999999996,
      38.55,
      t.uv(`dp-roof`),
    ),
    e.setMaterial(0.6, 0.5, 0, 0),
    w(e, 4868682),
    l(e, n + 0.6, i + 0.45, r - 0.6, i + 0.45, 34.949999999999996, 38.55, c),
    l(e, n + 0.45, i + 20, n + 0.45, i + 0.6, 34.949999999999996, 38.55, c));
  for (let t = 0; t < 4; t++)
    (f(
      e,
      n + 0.6 + t * ((r - n - 1.2) / 3) - 0.08,
      33.949999999999996,
      i + 0.4,
      n + 0.6 + t * ((r - n - 1.2) / 3) + 0.08,
      34.949999999999996,
      i + 0.6,
      c,
    ),
      f(
        e,
        n + 0.4,
        33.949999999999996,
        i + 0.6 + t * 6.4 - 0.08,
        n + 0.6,
        34.949999999999996,
        i + 0.6 + t * 6.4 + 0.08,
        c,
      ));
  (e.setMaterial(0.5, 0, 0.55, G), w(e, 16777215));
  let T = n - 1.2,
    E = i + 4;
  (f(e, T - 0.05, 7.15, E - 0.05, n, 7.550000000000001, E + 0.05, c),
    l(e, T, E - 0.4, T, E + 0.4, 8.15, 26.15, t.uv(`dp-vsign`)),
    l(e, T + 0.3, E + 0.4, T + 0.3, E - 0.4, 8.15, 26.15, t.uv(`dp-vsign`)),
    e.setMaterial(0.6, 0.3, 0, 0),
    w(e, 9050650),
    f(e, T, 8.15, E - 0.45, T + 0.3, 26.15, E - 0.4, c),
    f(e, T, 8.15, E + 0.4, T + 0.3, 26.15, E + 0.45, c));
}
function ke(e, t) {
  let { x0: n, x1: r, z0: i, z1: a } = M;
  (t.uniques.push({
    name: `takezakaya`,
    write: (t) => Oe(t, e),
    cx: (n + r) / 2,
    cz: (i + a) / 2,
    range: 900,
  }),
    t.boxes.push({
      minX: n,
      minZ: i,
      maxX: r,
      maxZ: a,
      y0: 0,
      y1: 37.349999999999994,
    }));
}
var q = 3,
  J = { x: -104, z: -810 },
  Ae = 22,
  Y = 4.5,
  X = [
    `leather`,
    `ceramic`,
    `glass`,
    `wood`,
    `hat`,
    `print`,
    `accessory`,
    `coffee`,
  ];
function je(e) {
  for (let t of X) e.need(`ar-in-${t}`, 192, 160, Me(t));
  (e.need(`ar-closed`, 192, 160, Z(`ameyoko.arcade.owari`)),
    e.need(`ar-closed-wed`, 192, 160, Z(`ameyoko.arcade.teikyu`)),
    e.need(`ar-fascia`, 384, 48, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#f4f4f2`),
        y(e, t, n + i * 0.9, r, i * 0.1, `#d8d8d4`));
    }));
  for (let t of X)
    e.need(`ar-plate-${t}`, 160, 40, (e, n, r, i, a) => {
      (b(e, n, r, i, a, `#ffffff`, 0.55),
        h(
          e,
          v(`ameyoko.arcade.${t}`),
          n + i / 2,
          r + a * 0.52,
          i * 0.9,
          a * 0.62,
          `#3a3a3a`,
          `700`,
        ));
    });
  (e.need(`ar-sign`, 256, 192, Ne),
    e.need(`ar-wall`, 128, 128, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#ecebe6`),
        g(e, 17, t, n, r, i, 120, 1.5, [`#d4d3ce`, `#f8f8f4`], 0.35));
    }));
}
function Me(e) {
  return (t, n, r, i, a) => {
    b(t, n, r, i, a, `#f6f2ea`, 0.6);
    let o = {
      leather: [`#8a5a32`, `#5a3a22`, `#b07a48`, `#3a2a1e`],
      ceramic: [`#e8e4dc`, `#6a8aa0`, `#c8b8a0`, `#2a3a4a`],
      glass: [`#9ad0e0`, `#e0a0c0`, `#f0e080`, `#80c0a0`],
      wood: [`#c8a070`, `#a07850`, `#e0c090`, `#6a4a30`],
      hat: [`#2a2a2a`, `#c8b090`, `#8a2a2a`, `#4a5a7a`],
      print: [`#f0ece0`, `#c03030`, `#2a2a2a`, `#3a5aa0`],
      accessory: [`#e8c860`, `#c0c0c8`, `#e080a0`, `#80a0e0`],
      coffee: [`#5a3a22`, `#e8dcc8`, `#2a2a2a`, `#a07a50`],
    }[e];
    for (let e = 0; e < 3; e++) {
      y(
        t,
        n + i * 0.05,
        r + a * (0.22 + e * 0.17),
        i * 0.9,
        a * 0.012,
        `#b8b2a8`,
      );
      for (let s = 0; s < 9; s++) {
        let c = i * (0.05 + ((s * 7 + e * 3) % 4) * 0.012);
        y(
          t,
          n + i * (0.07 + s * 0.1),
          r + a * (0.22 + e * 0.17) - a * 0.1,
          c,
          a * 0.1,
          o[(s + e) % o.length],
        );
      }
    }
    (y(t, n + i * 0.12, r + a * 0.72, i * 0.76, a * 0.06, `#9a7a56`),
      y(t, n + i * 0.16, r + a * 0.78, i * 0.04, a * 0.18, `#7a5e42`),
      y(t, n + i * 0.8, r + a * 0.78, i * 0.04, a * 0.18, `#7a5e42`),
      y(t, n + i * 0.46, r + a * 0.5, i * 0.08, a * 0.22, `#3a4a5a`),
      p(t, n + i * 0.5, r + a * 0.46, i * 0.035, `#e0b890`));
    for (let e = 0; e < 3; e++)
      p(t, n + i * (0.25 + e * 0.25), r + a * 0.05, i * 0.025, `#fff4d8`);
  };
}
function Z(e) {
  return (t, n, r, i, a) => {
    y(t, n, r, i, a, `#4a4c50`);
    for (let e = 0; e < 6; e++)
      y(
        t,
        n + i * (0.05 + e * 0.16),
        r + a * 0.2,
        i * 0.12,
        a * 0.5,
        `#585a5e`,
      );
    (y(t, n + i * 0.22, r + a * 0.4, i * 0.56, a * 0.14, `#f4f4f2`),
      h(t, v(e), n + i / 2, r + a * 0.47, i * 0.52, a * 0.1, `#3a3a3a`, `800`));
  };
}
function Ne(e, t, n, r, i) {
  (b(e, t, n, r, i, `#ffffff`, 0.55),
    h(
      e,
      v(`ameyoko.arcade.name`),
      t + r / 2,
      n + i * 0.26,
      r * 0.86,
      i * 0.2,
      `#2a2a2a`,
      `900`,
    ),
    h(
      e,
      v(`ameyoko.arcade.latin`),
      t + r / 2,
      n + i * 0.48,
      r * 0.7,
      i * 0.12,
      `#2a2a2a`,
      `700`,
    ),
    y(e, t + r * 0.2, n + i * 0.6, r * 0.6, 2, `#2a2a2a`),
    h(
      e,
      v(`ameyoko.arcade.hours`),
      t + r / 2,
      n + i * 0.74,
      r * 0.8,
      i * 0.1,
      `#2a2a2a`,
      `700`,
    ));
}
function Pe(e) {
  let t = o(e)?.byId.get(`jr-main`);
  if (!t) return null;
  let n = t.path.project(J.x, J.z).s,
    r = [],
    a = [],
    s = [],
    c = { x: 0, z: 0 },
    l = { x: 0, z: 0 },
    u = { x: 0, z: 0 },
    d = 0,
    f = 1 / 0,
    p = -1 / 0;
  for (let e = n - Ae; e + Y <= n + Ae + 0.01; e += Y) {
    let n = !0;
    for (let r = Math.floor(e); r <= Math.ceil(e + Y); r++)
      t.kinds[r] !== i.Frame && (n = !1);
    if (!n) continue;
    ((f = Math.min(f, e)), (p = Math.max(p, e + Y)));
    let a = t.deck.at(e + Y / 2) - 1.95;
    (t.path.pos(e, 0, c),
      t.path.pos(e + Y, 0, l),
      s.push({
        cx: (c.x + l.x) / 2,
        cz: (c.z + l.z) / 2,
        hx: Y / 2,
        hz: (t.edge1.at(e) - t.edge0.at(e)) / 2 - 0.4,
        heading: Math.atan2(l.z - c.z, l.x - c.x),
        top: a,
      }));
    for (let n of [-1, 1]) {
      let i = n < 0 ? t.edge0.at(e) + 0.35 : t.edge1.at(e) - 0.35;
      (t.path.pos(e, i, c),
        t.path.pos(e + Y, i, l),
        t.path.pos(e + Y / 2, 0, u));
      let o = c.x,
        s = c.z,
        f = l.x,
        p = l.z,
        m = (o + f) / 2 - u.x,
        h = (s + p) / 2 - u.z;
      -(p - s) * m + (f - o) * h < 0 && ([o, s, f, p] = [f, p, o, s]);
      let g = Math.hypot(m, h) || 1;
      r.push({
        ax: o,
        az: s,
        bx: f,
        bz: p,
        nx: m / g,
        nz: h / g,
        top: a,
        craft: X[d++ % X.length],
      });
    }
  }
  if (!r.length) return null;
  for (let [e, n] of [
    [f, -1],
    [p, 1],
  ]) {
    (t.path.pos(e, t.edge0.at(e) + 0.35, c),
      t.path.pos(e, t.edge1.at(e) - 0.35, l),
      t.path.pos(e - n * 2, 0, u));
    let r = c.x,
      i = c.z,
      o = l.x,
      s = l.z,
      d = (r + o) / 2 - u.x,
      f = (i + s) / 2 - u.z;
    (-(s - i) * d + (o - r) * f < 0 && ([r, i, o, s] = [o, s, r, i]),
      a.push({ ax: r, az: i, bx: o, bz: s, top: t.deck.at(e) - 1.95 }));
  }
  return { bays: r, ends: a, cores: s };
}
function Fe(e, t, n) {
  let r = t.white();
  for (let i of n.bays) {
    let n = i.bx - i.ax,
      a = i.bz - i.az,
      o = (e) => [i.ax + n * e, i.az + a * e];
    (e.setMaterial(0.7, 0, 0, 0), w(e, 16777215));
    let [s, c] = o(0.06),
      [u, d] = o(0.94);
    (l(e, i.ax, i.az, s, c, 0.15, i.top, t.uv(`ar-wall`)),
      l(e, u, d, i.bx, i.bz, 0.15, i.top, t.uv(`ar-wall`)),
      l(e, s, c, u, d, 3.3, i.top, t.uv(`ar-fascia`)),
      e.setMaterial(0.5, 0, 0.45, q | 16));
    let [f, p] = o(0.3),
      [m, h] = o(0.7);
    (l(
      e,
      f + i.nx * 0.03,
      p + i.nz * 0.03,
      m + i.nx * 0.03,
      h + i.nz * 0.03,
      3.45,
      3.95,
      t.uv(`ar-plate-${i.craft}`),
    ),
      e.setMaterial(0.5, 0.6, 0, 0),
      w(e, 2763306));
    for (let t of [0.06, 0.37, 0.63, 0.94]) {
      let [n, a] = o(t);
      e.box(
        n + i.nx * 0.05,
        1.725,
        a + i.nz * 0.05,
        0.05,
        1.575,
        0.05,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      );
    }
    let [g, _] = o(0.06),
      [v, y] = o(0.94);
    l(
      e,
      g + i.nx * 0.06,
      _ + i.nz * 0.06,
      v + i.nx * 0.06,
      y + i.nz * 0.06,
      3.22,
      3.3,
      r,
    );
  }
  for (let r of n.ends) {
    (e.setMaterial(0.7, 0, 0, 0),
      w(e, 16777215),
      l(e, r.ax, r.az, r.bx, r.bz, 0.15, r.top, t.uv(`ar-wall`)),
      e.setMaterial(0.5, 0, 0.45, 2));
    let n = (r.ax + r.bx) / 2,
      i = (r.az + r.bz) / 2,
      a = r.bx - r.ax,
      o = r.bz - r.az,
      s = Math.hypot(a, o) || 1,
      c = a / s,
      u = o / s,
      d = -u,
      f = c;
    l(
      e,
      n - c * 2.4 + d * 0.04,
      i - u * 2.4 + f * 0.04,
      n + c * 2.4 + d * 0.04,
      i + u * 2.4 + f * 0.04,
      1.4,
      5,
      t.uv(`ar-sign`),
    );
  }
}
var Ie = (e) => [
  ...X.map((t) => ({
    name: `ar-open-${t}`,
    write: (n) => {
      (n.setMaterial(0.3, 0.1, 0.45, q | 16),
        w(n, 16777215),
        l(n, -1.98, -0.1, Y * 0.44, -0.1, 0.02, 3.05, e.uv(`ar-in-${t}`)));
    },
  })),
  ...[`ar-closed`, `ar-closed-wed`].map((t) => ({
    name: t === `ar-closed` ? `ar-shut` : `ar-shut-wed`,
    write: (n) => {
      (n.setMaterial(0.3, 0.1, 0, 16),
        w(n, 16777215),
        l(n, -1.98, -0.1, Y * 0.44, -0.1, 0.02, 3.05, e.uv(t)));
    },
  })),
];
function Le(e, t, n) {
  let r = Pe(e);
  if (!r) return;
  n.uniques.push({
    name: `artisan-arcade`,
    write: (e) => Fe(e, t, r),
    cx: J.x,
    cz: J.z,
    range: 420,
  });
  let i = (e) => e.wd !== 3 && e.h >= 11 && e.h < 19;
  for (let e of r.cores)
    n.obbs.push({
      cx: e.cx,
      cz: e.cz,
      hx: e.hx,
      hz: e.hz,
      heading: e.heading,
      y0: 0,
      y1: e.top,
    });
  for (let e of r.bays) {
    let t = (e.ax + e.bx) / 2,
      r = (e.az + e.bz) / 2;
    (n.instances.push({
      model: `ar-open-${e.craft}`,
      x: t,
      y: 0.15,
      z: r,
      fx: e.nx,
      fz: e.nz,
      range: 200,
      when: i,
    }),
      n.instances.push({
        model: `ar-shut`,
        x: t,
        y: 0.15,
        z: r,
        fx: e.nx,
        fz: e.nz,
        range: 200,
        when: (e) => e.wd !== 3 && !i(e),
      }),
      n.instances.push({
        model: `ar-shut-wed`,
        x: t,
        y: 0.15,
        z: r,
        fx: e.nx,
        fz: e.nz,
        range: 200,
        when: (e) => e.wd === 3,
      }));
  }
}
var Re = e({
    init: () => ze,
    start: () => Be,
    stats: () => Ue,
    unload: () => He,
    update: () => Ve,
  }),
  Q = S({
    id: `ameyoko`,
    pageH: 2048,
    cells(e) {
      (te(e), fe(e), xe(e), je(e));
    },
    content(e, t) {
      let n = {
        uniques: [],
        models: [],
        instances: [],
        circles: [],
        boxes: [],
        obbs: [],
        floors: [],
      };
      return (
        n.models.push(...le(t), ...ye(t), ...Ie(t)),
        de(t, n),
        be(e, t, n),
        ke(t, n),
        Le(e.plan, t, n),
        n
      );
    },
  }),
  { init: ze, start: Be, update: Ve, unload: He } = Q,
  Ue = Q.stats,
  We = Math.PI / 2,
  $ = -Math.PI / 2,
  Ge = [
    {
      id: `tokyo:ameyoko:lane`,
      kind: `area`,
      x: -145,
      z: -1051,
      radius: 300,
      hours: [9.5, 20],
      points: [
        [-150.25, -1150],
        [-139.75, -1150],
        [-139.75, -952],
        [-150.25, -952],
      ],
      label: { ja: `アメ横通り`, zh: `阿美橫通`, en: `The Ameyoko lane` },
      note: `stalls 9:30–20:00 (T1-I), the under-track shops behind them; the crowd peaks 12/28–31 (the TV year-end crush)`,
    },
    {
      id: `tokyo:ameyoko:ameyoko-sign`,
      kind: `spot`,
      x: -145,
      z: -1036,
      heading: 0,
      radius: 200,
      label: {
        ja: `アメ横の看板（時計）`,
        zh: `阿美橫招牌（時鐘）`,
        en: `The Ameyoko sign and clock`,
      },
      copyKey: `ameyoko.sign.banner`,
      note: `the three-disc sign with the clock at the センタービル fork — the meeting point under it`,
    },
    {
      id: `tokyo:ameyoko:motsu-daitoryo`,
      kind: `entrance`,
      x: -140.4,
      z: -1071.25,
      heading: $,
      radius: 160,
      hours: [10, 24],
      label: {
        ja: `もつ焼 大社長`,
        zh: `烤內臟 大社長`,
        en: `Motsuyaki Daishacho`,
      },
      copyKey: `ameyoko.shop.motsu.name`,
      note: `the standing もつ焼 bar under the tracks by the 上野六丁目 crossing (beer crates, red lanterns); a second counter across it (z −1048.5)`,
    },
    {
      id: `tokyo:ameyoko:niku-koyama`,
      kind: `entrance`,
      x: -140.4,
      z: -1075.75,
      heading: $,
      radius: 150,
      hours: [11, 22],
      label: { ja: `肉の小山`, zh: `肉之小山`, en: `Niku no Koyama` },
      copyKey: `ameyoko.shop.niku.name`,
      note: `the croquette counter (メンチカツ 200円) — a stop for a snack-run mission`,
    },
    {
      id: `tokyo:ameyoko:gado-crossing`,
      kind: `spot`,
      x: -125,
      z: -1060,
      heading: We,
      radius: 200,
      label: {
        ja: `上野六丁目 ガード下`,
        zh: `上野六丁目 高架橋下`,
        en: `Under the tracks at Ueno 6-chome`,
      },
      note: `the street under the girder span between the two under-track runs (the cut-through from the lane to the east side)`,
    },
    {
      id: `tokyo:ameyoko:plaza-passage`,
      kind: `entrance`,
      x: -140.4,
      z: -1143.25,
      heading: $,
      radius: 160,
      hours: [10, 20],
      label: {
        ja: `アメ横高架下プラザ 入口`,
        zh: `阿美橫高架下廣場 入口`,
        en: `Ameyoko Under-track Plaza entrance`,
      },
      copyKey: `ameyoko.shop.plaza.name`,
      note: `the corridor into the viaduct (not walk-in yet: a T2-Interiors / T3 hook); a second one at z −1032.75`,
    },
    {
      id: `tokyo:ameyoko:kebab`,
      kind: `spot`,
      x: -140.6,
      z: -1111.75,
      heading: $,
      radius: 150,
      hours: [11, 21],
      label: { ja: `ケバブ屋`, zh: `沙威瑪攤`, en: `The kebab stand` },
      copyKey: `ameyoko.shop.kebab.name`,
    },
    {
      id: `tokyo:ameyoko:fish-row`,
      kind: `spot`,
      x: -140.8,
      z: -1152.25,
      heading: $,
      radius: 160,
      hours: [9, 19],
      label: {
        ja: `アメ横の鮮魚店`,
        zh: `阿美橫鮮魚店`,
        en: `The Ameyoko fishmongers`,
      },
      note: `the 上野-end fish shops (and the stalls in front); 12/28–31 the tuna, crab and 数の子 rush`,
    },
    {
      id: `tokyo:ameyoko:panda-hiroba`,
      kind: `spot`,
      x: -134.2,
      z: -918,
      heading: $,
      radius: 200,
      label: {
        ja: `おかちまちパンダ広場`,
        zh: `御徒町熊貓廣場`,
        en: `Okachimachi Panda Square`,
      },
      copyKey: `ameyoko.panda.hiroba`,
      note: `JR 御徒町 南口; てっぱんだ (rub its forehead for exam luck)`,
    },
    {
      id: `tokyo:ameyoko:jewel-town`,
      kind: `area`,
      x: -20,
      z: -945,
      radius: 260,
      hours: [10, 18],
      points: [
        [-108, -962],
        [60, -962],
        [60, -925],
        [-108, -925],
      ],
      label: {
        ja: `ジュエリータウンおかちまち`,
        zh: `御徒町珠寶街`,
        en: `Jewelry Town Okachimachi`,
      },
      copyKey: `ameyoko.jewel.town`,
      note: `the wholesalers along 春日通り east of the tracks (T2-S 御徒町 宝石問屋); closed Sundays`,
    },
    {
      id: `tokyo:ameyoko:market-run`,
      kind: `route`,
      x: -112,
      z: -1056,
      radius: 320,
      points: [
        [-145, -952],
        [-145, -1041.6],
        [-145, -1060],
        [-125, -1060],
        [-80, -1060],
        [-80, -1150],
        [-145, -1160],
      ],
      label: {
        ja: `アメ横 抜け道ルート`,
        zh: `阿美橫 捷徑路線`,
        en: `Through the market and back`,
      },
      note: `up the crowded lane from 御徒町, under the tracks at the 上野六丁目 crossing, back north along the east-side street (a chase on foot)`,
    },
  ];
export { M as i, Re as n, ee as r, Ge as t };
