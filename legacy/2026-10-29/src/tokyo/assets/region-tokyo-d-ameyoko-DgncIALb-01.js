// tokyo/assets/region-tokyo-d-ameyoko-DgncIALb 01 — need
// Lines 1-172 of readable/tokyo/assets/region-tokyo-d-ameyoko-DgncIALb.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { B as t, V as n } from "./engine-wUBYs8Z3.js";
import { Zt as r, en as i, hn as a, tn as o } from "./region-tokyo-55J_WESF.js";
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
} from "./region-tokyo-d-ueno-CufCWRy0.js";
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
