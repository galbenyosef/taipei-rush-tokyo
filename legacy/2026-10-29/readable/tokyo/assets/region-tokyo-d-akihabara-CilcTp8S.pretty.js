import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import {
  B as t,
  V as n,
  fn as r,
  ln as i,
  on as a,
  un as o,
  wr as s,
  wt as c,
} from "./engine-wUBYs8Z3.js";
import {
  $t as l,
  Dn as u,
  On as d,
  Qt as f,
  Zt as p,
  an as m,
  cn as h,
  fn as g,
  hn as _,
  in as v,
  pn as y,
  rn as b,
  tn as x,
  wn as S,
} from "./region-tokyo-55J_WESF.js";
var C = 2048,
  w = 2816,
  ee = `white`,
  T = 4,
  te = class {
    cells = new Map();
    order = [];
    used = 0;
    overflow = 0;
    tex = null;
    slowMs = 0;
    slowKey = ``;
    size = 0;
    constructor() {
      this.need(ee, 32, 32, (e, t, n, r, i) => {
        ((e.fillStyle = `#ffffff`), e.fillRect(t, n, r, i));
      });
    }
    has(e) {
      return this.cells.has(e);
    }
    need(e, t, n, r) {
      if (this.cells.has(e)) return e;
      let i = {
        key: e,
        x: -1,
        y: -1,
        w: Math.min(C, Math.ceil(t)),
        h: Math.ceil(n),
        paint: r,
      };
      return (this.cells.set(e, i), this.order.push(i), (this.packed = !1), e);
    }
    packed = !1;
    pack() {
      if (this.packed) return;
      this.packed = !0;
      let e = this.order
          .map((e, t) => ({ c: e, i: t }))
          .sort((e, t) =>
            e.c.key === `white`
              ? -1
              : t.c.key === `white`
                ? 1
                : t.c.h - e.c.h || e.i - t.i,
          ),
        t = 0,
        n = 0,
        r = 0;
      this.overflow = 0;
      let i = [];
      for (let { c: a } of e) {
        if (
          (t + a.w + T > 2048 && ((t = 0), (n += r + T), (r = 0)),
          n + a.h > 2816)
        ) {
          (this.overflow++, (a.x = -1));
          continue;
        }
        ((a.x = t),
          (a.y = n),
          (t += a.w + T),
          (r = Math.max(r, a.h)),
          i.push(a));
      }
      ((this.used = n + r), (this.order = i));
    }
    uv(e) {
      this.pack();
      let t = this.cells.get(e);
      (!t || t.x < 0) && (t = this.cells.get(ee));
      let n = 1.5;
      return {
        u0: (t.x + n) / C,
        v0: 1 - (t.y + t.h - n) / w,
        u1: (t.x + t.w - n) / C,
        v1: 1 - (t.y + n) / w,
      };
    }
    white() {
      this.pack();
      let e = this.cells.get(ee),
        t = (e.x + e.w / 2) / C,
        n = 1 - (e.y + e.h / 2) / w;
      return { u0: t, v0: n, u1: t, v1: n };
    }
    *paint(e) {
      this.pack();
      let t = Math.round((e * w) / C),
        [n, a] = r(e, t);
      S(n, a);
      let o = e / C;
      yield;
      for (let e of this.order) {
        let t = performance.now();
        (a.save(),
          a.setTransform(o, 0, 0, o, 0, 0),
          a.beginPath(),
          a.rect(e.x, e.y, e.w, e.h),
          a.clip());
        try {
          e.paint(a, e.x, e.y, e.w, e.h);
        } catch (t) {
          console.warn(`[akihabara] atlas cell ${e.key} failed`, t);
        }
        a.restore();
        let n = performance.now() - t;
        (n > this.slowMs && ((this.slowMs = n), (this.slowKey = e.key)), yield);
      }
      let s = i(n, { mipmaps: !0, anisotropy: 4 });
      return ((s.name = `akihabara-atlas`), (this.tex = s), (this.size = e), s);
    }
  };
function E(e, t, n, r, i, a, o = 0.55, s) {
  ((e.globalAlpha = 1),
    (e.fillStyle = a),
    (e.globalAlpha = o),
    e.fillRect(t, n, r, i),
    (e.globalAlpha = 1),
    s &&
      ((e.strokeStyle = s),
      (e.lineWidth = Math.max(2, Math.min(r, i) * 0.05)),
      e.strokeRect(
        t + e.lineWidth,
        n + e.lineWidth,
        r - e.lineWidth * 2,
        i - e.lineWidth * 2,
      )));
}
function D(e, t, n, r, i, a) {
  ((e.globalAlpha = 1), (e.fillStyle = a), e.fillRect(t, n, r, i));
}
function O(e, t, n, r, i, a, o = 0.5) {
  (e.save(),
    (e.globalCompositeOperation = `copy`),
    (e.globalAlpha = o),
    (e.fillStyle = a),
    e.beginPath(),
    e.rect(t, n, r, i),
    e.clip(),
    e.fillRect(t, n, r, i),
    e.restore());
}
var k = {
    w65: { minX: -183.75, minZ: -757.75, maxX: -161.75, maxZ: -706.25 },
    w66: { minX: -183.75, minZ: -693.75, maxX: -161.75, maxZ: -624.25 },
    e90: { minX: -128.25, minZ: -757.75, maxX: -86.25, maxZ: -697.25 },
    e91: { minX: -128.25, minZ: -684.75, maxX: -86.25, maxZ: -618.25 },
  },
  ne = 17.5,
  re = [
    {
      box: { ...k.w65 },
      label: `akiba-sotokanda3-north (中央通り west + 裏通り)`,
    },
    {
      box: { ...k.w66 },
      label: `akiba-sotokanda3-south (中央通り west + 裏通り)`,
    },
    {
      box: {
        minX: k.e90.minX,
        minZ: k.e90.minZ,
        maxX: k.e90.minX + ne,
        maxZ: k.e90.maxZ,
      },
      label: `akiba-sotokanda4 (中央通り east row)`,
    },
    {
      box: {
        minX: k.e91.minX,
        minZ: k.e91.minZ,
        maxX: k.e91.minX + ne,
        maxZ: -652,
      },
      label: `akiba-sotokanda1-north (中央通り east row)`,
    },
    {
      box: {
        minX: k.e91.minX,
        minZ: -636,
        maxX: k.e91.minX + ne,
        maxZ: k.e91.maxZ,
      },
      label: `akiba-sotokanda1-south (中央通り east row)`,
    },
  ],
  ie = { minX: -215, minZ: -790, maxX: -40, maxZ: -540 },
  ae = { x: -145, hokotenZ0: -770, hokotenZ1: -612 },
  oe = { x: -190, z0: -770, z1: -612 },
  se = [-172.75, k.w65.maxX - 0.12],
  ce = [k.w65.minX + 0.12, -172.75],
  le = [k.e90.minX + 0.12, k.e90.minX + ne],
  ue = [
    {
      id: `w65`,
      x: se,
      dir: `E`,
      specs: [
        [
          -757.75,
          -750.5,
          `anzen`,
          2,
          `anzen`,
          `akiba.anzen.name`,
          { corner: `N` },
        ],
        [-750.5, -742.5, `gacha`, 7, `gacha`, `akiba.gacha.name`],
        [-742.5, -735.5, `retro`, 6, `retro`, `akiba.shop.retro`],
        [-735.5, -727.5, `pcshop`, 8, `pcparts`, `tsukuyo`],
        [-727.5, -720.5, `zakkyo`, 9, `figure`, `akiba.word.figure`],
        [
          -720.5,
          -706.25,
          `softnap`,
          8,
          `electronics`,
          `softnap`,
          { corner: `S`, v: 0 },
        ],
      ],
    },
    {
      id: `w66`,
      x: se,
      dir: `E`,
      specs: [
        [
          -693.75,
          -682.75,
          `office`,
          18,
          `konbini`,
          `brand.lawsan`,
          {
            corner: `N`,
            poi: {
              id: `convenience-62`,
              dir: `N`,
              at: 5.6,
              width: 6,
              kind: `konbini`,
              name: `LAWSAN`,
              category: `trade.konbini.name`,
              hours: `24H`,
            },
          },
        ],
        [-682.75, -673.75, `arcade`, 7, `crane`, `gigoo`],
        [-673.75, -663.75, `softnap`, 8, `electronics`, `softnap`, { v: 1 }],
        [-663.75, -652, `redarcade`, 7, `crane`, `akiba.tophat.name`],
        [-636, -630.5, `onoden`, 5, `electronics`, `akiba.onoden.name`],
        [-630.5, -624.25, `naox`, 8, `dutyfree`, `naox`, { corner: `S` }],
      ],
    },
    {
      id: `u65`,
      x: ce,
      dir: `W`,
      specs: [
        [-757.75, -748, `pcshop`, 5, `junk`, `chanpara`, { corner: `N` }],
        [-748, -741, `kebab`, 3, `kebab`, `akiba.shop.kebab`],
        [-741, -734, `maid`, 5, `maid`, `akiba.maid.name.2`],
        [-734, -727, `junk`, 4, `junk`, `trade.junk.sign.junk`],
        [-727, -716, `mandarara`, 8, `figure`, `mandarara`],
        [
          -716,
          -706.25,
          `zakkyo`,
          6,
          `konbini`,
          `brand.lawsan`,
          {
            corner: `S`,
            poi: {
              id: `convenience-61`,
              dir: `W`,
              at: 4.9,
              width: 6,
              kind: `konbini`,
              name: `LAWSAN`,
              category: `trade.konbini.name`,
              hours: `24H`,
            },
          },
        ],
      ],
    },
    {
      id: `u66`,
      x: ce,
      dir: `W`,
      specs: [
        [
          -693.75,
          -685,
          `retro`,
          5,
          `retro`,
          `akiba.shop.retro`,
          { corner: `N`, v: 1 },
        ],
        [-685, -677, `card`, 5, `card`, `akiba.shop.card`],
        [-677, -669, `maid`, 5, `maid`, `akiba.maid.name.3`],
        [-669, -661, `junk`, 4, `junk`, `trade.junk.sign.junk`, { v: 1 }],
        [-661, -652, `radiodept`, 4, `pcparts`, `akiba.radiodept.name`],
        [
          -636,
          -624.25,
          `zakkyo`,
          4,
          `ramen`,
          `trade.ramen.name`,
          { corner: `S` },
        ],
      ],
    },
    {
      id: `e90`,
      x: le,
      dir: `W`,
      specs: [
        [
          -757.75,
          -751,
          `zakkyo`,
          6,
          `gacha`,
          `akiba.word.gacha`,
          { corner: `N`, v: 2 },
        ],
        [-751, -744, `maid`, 7, `maid`, `akiba.maid.name.1`],
        [-744, -730, `donco`, 8, `donco`, `doncoyote`],
        [-730, -720, `anime`, 8, `figure`, `animake`],
        [-720, -711, `arcade`, 7, `crane`, `titlestation`],
        [
          -711,
          -697.25,
          `piccamera`,
          8,
          `electronics`,
          `piccamera`,
          {
            corner: `S`,
            poi: {
              id: `bubbletea-93`,
              dir: `S`,
              at: 6.6,
              width: 3.2,
              kind: `tea`,
              name: `珍煮紅`,
              category: `trade.tea-stand.name`,
              hours: `10:00-21:00`,
            },
          },
        ],
      ],
    },
    {
      id: `e91`,
      x: le,
      dir: `W`,
      specs: [
        [
          -684.75,
          -673.5,
          `zakkyo`,
          8,
          `card`,
          `akiba.word.toreka`,
          { corner: `N`, v: 3 },
        ],
        [-673.5, -666.5, `kebab`, 5, `kebab`, `akiba.shop.kebab`, { v: 1 }],
        [-666.5, -652, `hobby`, 10, `figure`, `akiba.hobby.name`],
        [-636, -627, `gamies`, 7, `figure`, `akiba.gamies.name`],
        [-627, -618.25, `karaoke`, 8, `crane`, `gigoo`, { corner: `S` }],
      ],
    },
  ],
  de = 4.3,
  fe = 3.45,
  pe = (e) => de + (e - 1) * fe + 0.9;
function me() {
  let e = [],
    t = ue.map((t) =>
      t.specs.map(([n, r, i, a, o, s, c]) => {
        let l = {
          id: `${t.id}-${e.length}`,
          x0: t.x[0],
          x1: t.x[1],
          z0: n,
          z1: r,
          dir: t.dir,
          floors: a,
          kind: i,
          shop: o,
          name: s,
          ...c,
        };
        return (e.push(l), l);
      }),
    );
  ue.forEach((e, n) => {
    let r = t[n];
    r.forEach((t, n) => {
      let i =
          n > 0 && Math.abs(r[n - 1].z1 - t.z0) < 1 ? pe(r[n - 1].floors) : 0,
        a =
          n + 1 < r.length && Math.abs(r[n + 1].z0 - t.z1) < 1
            ? pe(r[n + 1].floors)
            : 0;
      e.dir === `E`
        ? ((t.coverL = a), (t.coverR = i))
        : ((t.coverL = i), (t.coverR = a));
    });
  });
  let n = (e, t) => {
    for (let n of e) {
      let e = 1 / 0;
      for (let r of t)
        r.z1 > n.z0 + 0.5 &&
          r.z0 < n.z1 - 0.5 &&
          (e = Math.min(e, pe(r.floors)));
      n.coverB = Number.isFinite(e) ? e : 0;
    }
  };
  return (n(t[0], t[2]), n(t[2], t[0]), n(t[1], t[3]), n(t[3], t[1]), e);
}
var he = new Uint8Array(256);
for (let e = 0; e < 256; e++) he[e] = Math.round(255 * (e / 255) ** 2.2);
var ge = (e) => he[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function A(e, t, n = 1) {
  return (
    e.setColor(
      ge(((t >> 16) & 255) * n),
      ge(((t >> 8) & 255) * n),
      ge((t & 255) * n),
    ),
    e
  );
}
function j(e, t, n, r, i, a, o, s) {
  let c = e.n;
  return (
    e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1),
    c
  );
}
function _e(e, t, n, r, i, a, o, s, c, l, u, d) {
  let f = s.u1 - s.u0,
    p = s.v1 - s.v0;
  e.quad(
    t,
    a,
    n,
    r,
    a,
    i,
    r,
    o,
    i,
    t,
    o,
    n,
    s.u0 + f * c,
    s.v0 + p * u,
    s.u0 + f * l,
    s.v0 + p * d,
  );
}
function ve(e, t, n, r, i, a, o, s = !1) {
  s
    ? e.quad(t, a, n, r, a, n, r, a, i, t, a, i, o.u0, o.v0, o.u1, o.v1)
    : e.quad(t, a, i, r, a, i, r, a, n, t, a, n, o.u0, o.v0, o.u1, o.v1);
}
function M(e, t, n, r, i, a, o, s, c, l, u, d, f = !0) {
  let p = c,
    m = -s,
    h = p * a,
    g = m * a,
    _ = s * o,
    v = c * o,
    y = [t - h + _, n - g + v],
    b = [t + h + _, n + g + v],
    x = [t - h - _, n - g - v],
    S = [t + h - _, n + g - v];
  (j(e, y[0], y[1], b[0], b[1], r, i, u ?? l),
    j(e, S[0], S[1], x[0], x[1], r, i, d ?? l),
    j(e, b[0], b[1], S[0], S[1], r, i, l),
    j(e, x[0], x[1], y[0], y[1], r, i, l),
    f &&
      e.quad(
        y[0],
        i,
        y[1],
        b[0],
        i,
        b[1],
        S[0],
        i,
        S[1],
        x[0],
        i,
        x[1],
        l.u0,
        l.v0,
        l.u1,
        l.v1,
      ));
}
function ye(e, t, n, r, i, a, o, s = 6) {
  let c = e.n;
  for (let c = 0; c <= s; c++) {
    let l = (c / s) * Math.PI * 2,
      u = Math.cos(l),
      d = Math.sin(l);
    (e.vertex(t + u * a, r, n + d * a, u, 0, d, o.u0, o.v0),
      e.vertex(t + u * a, i, n + d * a, u, 0, d, o.u0, o.v1));
  }
  for (let t = 0; t < s; t++) {
    let n = c + t * 2;
    e.tri(n, n + 1, n + 2).tri(n + 1, n + 3, n + 2);
  }
}
function be(e, t, n, r, i, a, o, s, c) {
  let l = i - t,
    u = a - n,
    d = o - r,
    f = Math.hypot(l, u, d) || 1,
    p = l / f,
    m = u / f,
    h = d / f,
    g = -h,
    _ = 0,
    v = p;
  Math.abs(m) > 0.9 && ((g = 1), (_ = 0), (v = 0));
  let y = Math.hypot(g, _, v) || 1;
  ((g = (g / y) * s), (_ = (_ / y) * s), (v = (v / y) * s));
  let b = m * v - h * _,
    x = h * g - p * v,
    S = p * _ - m * g,
    C = [
      [g + b, _ + x, v + S],
      [-g + b, -_ + x, -v + S],
      [-g - b, -_ - x, -v - S],
      [g - b, _ - x, v - S],
    ];
  for (let s = 0; s < 4; s++) {
    let l = C[s],
      u = C[(s + 1) % 4];
    e.quad(
      t + l[0],
      n + l[1],
      r + l[2],
      t + u[0],
      n + u[1],
      r + u[2],
      i + u[0],
      a + u[1],
      o + u[2],
      i + l[0],
      a + l[1],
      o + l[2],
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    );
  }
}
function xe(e, t, n, r, i, a, o = 1) {
  return (
    (e[0] = a * o),
    (e[1] = 0),
    (e[2] = -i * o),
    (e[3] = 0),
    (e[4] = 0),
    (e[5] = o),
    (e[6] = 0),
    (e[7] = 0),
    (e[8] = i * o),
    (e[9] = 0),
    (e[10] = a * o),
    (e[11] = 0),
    (e[12] = t),
    (e[13] = n),
    (e[14] = r),
    (e[15] = 1),
    e
  );
}
var Se = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  N = (e) => (b(e) ? v(e) : e),
  P = (e, t) => (b(e) ? m(e, t) : e);
function F(e) {
  let t = h(e)?.colors ?? [`#e60012`, `#ffffff`, `#1d2088`];
  return [t[0], t[1], t[2]];
}
function Ce(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function I(e, t, n, r, i, a, o, s = `900`, c = g()) {
  let l = Ce(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
function we(e, t, n, r, i, a, o, s, c = `900`) {
  let l = g(),
    u = Ce(e, t, i, a, l, c);
  ((e.font = `${c} ${Math.min(u, a)}px ${l}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    (e.lineJoin = `round`),
    (e.lineWidth = Math.max(2, u * 0.14)),
    (e.strokeStyle = s),
    e.strokeText(t, n, r + a * 0.04),
    (e.fillStyle = o),
    e.fillText(t, n, r + a * 0.04));
}
function Te(e) {
  return (t, n, r, i, a) => {
    (E(t, n, r, i, a, e.bg, 0.58),
      e.acc &&
        (D(t, n, r, i, a * 0.012, e.acc),
        D(t, n, r + a - a * 0.012, i, a * 0.012, e.acc),
        O(t, n + i * 0.06, r, i * 0.05, a, e.acc, 0.7),
        O(t, n + i * 0.89, r, i * 0.05, a, e.acc, 0.7)));
    let o = r + a * 0.04;
    e.top &&
      (D(t, n + i * 0.1, o, i * 0.8, a * 0.07, e.fg),
      I(
        t,
        N(e.top),
        n + i / 2,
        o + a * 0.035,
        i * 0.74,
        a * 0.055,
        e.bg,
        `900`,
      ),
      (o += a * 0.09));
    let s = N(e.main);
    (e.edge &&
      (t.save(),
      (t.shadowColor = e.edge),
      (t.shadowBlur = i * 0.08),
      _(t, s, n + i / 2, o, r + a * 0.96, i * 0.78, e.fg, g(), `900`),
      t.restore()),
      _(t, s, n + i / 2, o, r + a * 0.96, i * 0.78, e.fg, g(), `900`));
  };
}
function Ee(e) {
  return (t, n, r, i, a) => {
    (E(t, n, r, i, a, e.bg, 0.56),
      e.acc &&
        (D(t, n, r, i, a * 0.08, e.acc),
        D(t, n, r + a * 0.92, i, a * 0.08, e.acc)));
    let o = n + a * 0.25,
      s = /\{n\}/.test(N(e.main));
    e.floor &&
      !s &&
      (D(t, o, r + a * 0.14, a * 1.1, a * 0.72, e.fg),
      I(t, `${e.floor}F`, o + a * 0.55, r + a / 2, a * 0.95, a * 0.6, e.bg),
      (o += a * 1.35));
    let c = n + i - a * 0.25,
      l = s ? P(e.main, { n: e.floor ?? 2 }) : N(e.main);
    e.sub
      ? (I(t, l, (o + c) / 2, r + a * 0.38, c - o, a * 0.5, e.fg),
        I(t, N(e.sub), (o + c) / 2, r + a * 0.78, c - o, a * 0.24, e.fg, `700`))
      : I(t, l, (o + c) / 2, r + a / 2, c - o, a * 0.66, e.fg);
  };
}
function De(e, t) {
  return (n, r, i, a, o) => {
    D(n, r, i, a, o, t);
    let s = o / e.length;
    e.forEach((e, t) => {
      let o = i + t * s;
      (E(n, r + a * 0.08, o + s * 0.04, a * 0.84, s * 0.92, e.bg, 0.6),
        D(n, r + a * 0.14, o + s * 0.08, a * 0.72, a * 0.5, `#ffffff`),
        I(
          n,
          `${e.n}F`,
          r + a / 2,
          o + s * 0.08 + a * 0.25,
          a * 0.66,
          a * 0.42,
          e.bg,
        ),
        _(
          n,
          N(e.key),
          r + a / 2,
          o + s * 0.08 + a * 0.58,
          o + s * 0.92,
          a * 0.6,
          e.fg,
          g(),
          `900`,
        ));
    });
  };
}
function Oe(e) {
  return (t, n, r, i, a) => {
    (E(t, n, r, i, a, e.bg, 0.6),
      e.acc &&
        ((t.globalAlpha = 1),
        (t.fillStyle = e.acc),
        t.beginPath(),
        t.moveTo(n, r + a),
        t.lineTo(n + i * 0.3, r + a),
        t.lineTo(n + i * 0.18, r),
        t.lineTo(n, r),
        t.fill()),
      we(
        t,
        N(e.main),
        n + i * 0.56,
        r + a * (e.sub ? 0.4 : 0.5),
        i * 0.8,
        a * (e.sub ? 0.56 : 0.72),
        e.fg,
        e.bg,
      ),
      e.sub &&
        I(
          t,
          N(e.sub),
          n + i * 0.56,
          r + a * 0.82,
          i * 0.8,
          a * 0.2,
          e.fg,
          `700`,
        ));
  };
}
function ke(e, r, i) {
  return (a, o, s, c, l) => {
    let u = new t(n(`akiba-wrap`, e)),
      d = [
        [`#1b2a6b`, `#5b8de0`, `#ffd34d`],
        [`#3a0d4f`, `#d94f9b`, `#ffe0f0`],
        [`#0d3b2e`, `#46c6a3`, `#f4ff8a`],
        [`#4a0e0e`, `#e05a2b`, `#ffe3a1`],
        [`#101820`, `#2a5fa8`, `#7ff0ff`],
      ],
      [f, p, m] = d[e % d.length],
      h = a.createLinearGradient(o, s, o + c * 0.3, s + l);
    (h.addColorStop(0, f),
      h.addColorStop(0.65, p),
      h.addColorStop(1, m),
      (a.globalAlpha = 1),
      (a.fillStyle = h),
      a.fillRect(o, s, c, l));
    for (let e = 0; e < 26; e++) {
      ((a.globalAlpha = 0.18 + u.next() * 0.25), (a.fillStyle = m));
      let e = o + u.next() * c,
        t = s + u.next() * l * 0.7;
      a.fillRect(
        e,
        t,
        c * (0.004 + u.next() * 0.01),
        l * (0.03 + u.next() * 0.1),
      );
    }
    a.globalAlpha = 1;
    let g = o + c * (0.5 + (u.next() - 0.5) * 0.2),
      _ = s + l * 0.36,
      v = c * 0.2,
      y = [`#2b2b3a`, `#f2c14e`, `#e86aa6`, `#4fb6e8`, `#f2f2f2`][e % 5];
    ((a.fillStyle = `#ffe6d5`),
      a.beginPath(),
      a.ellipse(g, _, v * 0.82, v, 0, 0, Math.PI * 2),
      a.fill(),
      (a.fillStyle = y),
      a.beginPath(),
      a.moveTo(g - v * 1.15, _ + v * 0.9));
    for (let e = 0; e <= 9; e++) {
      let t = Math.PI + (e / 9) * Math.PI,
        n = v * (1.05 + (e % 2) * 0.32);
      a.lineTo(g + Math.cos(t) * n, _ - v * 0.05 + Math.sin(t) * n);
    }
    (a.lineTo(g + v * 1.15, _ + v * 0.9),
      a.lineTo(g + v * 0.75, _ + v * 0.1),
      a.lineTo(g - v * 0.75, _ + v * 0.1),
      a.closePath(),
      a.fill());
    for (let t of [-1, 1])
      ((a.fillStyle = [`#3060c0`, `#c03070`, `#30a070`, `#c06020`, `#20a0c0`][
        e % 5
      ]),
        a.beginPath(),
        a.ellipse(
          g + t * v * 0.36,
          _ + v * 0.2,
          v * 0.17,
          v * 0.24,
          0,
          0,
          Math.PI * 2,
        ),
        a.fill(),
        (a.fillStyle = `#ffffff`),
        a.beginPath(),
        a.arc(
          g + t * v * 0.36 - v * 0.06,
          _ + v * 0.1,
          v * 0.06,
          0,
          Math.PI * 2,
        ),
        a.fill());
    ((a.fillStyle = [`#e8e8f0`, `#1a1a2a`, `#c02838`, `#2a4a8a`, `#f0d040`][
      e % 5
    ]),
      a.beginPath(),
      a.moveTo(g - v * 2, s + l * 0.78),
      a.quadraticCurveTo(g, _ + v * 0.9, g + v * 2, s + l * 0.78),
      a.lineTo(g + v * 2.2, s + l),
      a.lineTo(g - v * 2.2, s + l),
      a.fill(),
      e % 2 == 0 &&
        (a.save(),
        a.translate(g + v * 0.8, _ + v * 2.2),
        a.rotate(-0.7),
        (a.fillStyle = `#e8f4ff`),
        a.fillRect(-c * 0.01, -l * 0.32, c * 0.025, l * 0.5),
        (a.fillStyle = `#806020`),
        a.fillRect(-c * 0.03, l * 0.16, c * 0.06, l * 0.015),
        a.restore()),
      we(
        a,
        N(r),
        o + c / 2,
        s + l * 0.84,
        c * 0.92,
        l * 0.07,
        `#ffffff`,
        `#101010`,
      ),
      D(a, o + c * 0.62, s + l * 0.92, c * 0.34, l * 0.05, `#e60012`),
      I(
        a,
        N(i),
        o + c * 0.79,
        s + l * 0.945,
        c * 0.32,
        l * 0.035,
        `#ffffff`,
        `800`,
      ));
  };
}
function Ae(e, n) {
  return (r, i, a, o, s) => {
    let c = new t(n),
      l = [`#0a1a4a`, `#3a0a3a`, `#0a3a2a`, `#2a1a0a`];
    D(r, i, a, o, s, l[n % l.length]);
    for (let e = 0; e < 4; e++) {
      let t = o * 0.2,
        l = i + o * 0.04 + e * o * 0.24;
      (D(
        r,
        l,
        a + s * 0.42,
        t,
        s * 0.46,
        [`#e8e8f0`, `#ffcf30`, `#ff5a8a`, `#40d0ff`][(e + n) % 4],
      ),
        D(
          r,
          l + t * 0.15,
          a + s * 0.5,
          t * 0.7,
          s * 0.26,
          [`#30304a`, `#a03030`, `#304a90`, `#208050`][(e * 3 + n) % 4],
        ),
        I(
          r,
          `¥${(c.int(3, 98) * 100).toLocaleString(`en-US`)}`,
          l + t / 2,
          a + s * 0.82,
          t * 0.9,
          s * 0.1,
          `#101010`,
          `900`,
        ));
    }
    I(r, N(e), i + o / 2, a + s * 0.2, o * 0.92, s * 0.26, `#ffffff`, `900`);
  };
}
function je(e, r) {
  return (i, a, o, s, c) => {
    let l = new t(n(`akiba-shop`, e, r));
    ((i.globalAlpha = 1),
      D(
        i,
        a,
        o,
        s,
        c,
        e === `drug` || e === `donco`
          ? `#f6ecb0`
          : e === `maid`
            ? `#ffe0ee`
            : e === `kebab` || e === `ramen`
              ? `#e8d8c0`
              : `#eef0f2`,
      ),
      D(i, a, o, s, c * 0.08, `#fafaf4`));
    for (let e = a + s * 0.05; e < a + s; e += s * 0.16)
      D(i, e, o + c * 0.02, s * 0.1, c * 0.03, `#ffffff`);
    D(i, a, o + c * 0.86, s, c * 0.14, `#b8b4ac`);
    let u = (e, t, n, r, i) => {
      let c = s / e,
        l = (r - n) / t;
      for (let r = 0; r < t; r++)
        for (let t = 0; t < e; t++)
          i(a + t * c, o + n + r * l, c, l, r * e + t);
    };
    switch (e) {
      case `gacha`:
        (D(i, a, o, s, c, `#2a2a30`),
          u(10, 3, c * 0.05, c * 0.95, (e, t, n, a, o) => {
            let s = [`#f4f4f6`, `#ffd6e6`, `#d6ecff`, `#fff2b0`, `#e0ffe0`][
              (o * 7 + r) % 5
            ];
            (D(i, e + n * 0.06, t + a * 0.04, n * 0.88, a * 0.92, s),
              D(i, e + n * 0.14, t + a * 0.08, n * 0.72, a * 0.38, `#cfe6f0`));
            for (let r = 0; r < 9; r++)
              ((i.fillStyle = [
                `#ff4060`,
                `#40a0ff`,
                `#ffd040`,
                `#60d060`,
                `#ffffff`,
                `#c060ff`,
              ][(r + o) % 6]),
                i.beginPath(),
                i.arc(
                  e + n * (0.22 + (r % 3) * 0.28),
                  t + a * (0.16 + Math.floor(r / 3) * 0.1),
                  n * 0.1,
                  0,
                  Math.PI * 2,
                ),
                i.fill());
            (D(
              i,
              e + n * 0.14,
              t + a * 0.5,
              n * 0.72,
              a * 0.24,
              [`#ff7a3a`, `#3a8aff`, `#ff4a9a`, `#2ab07a`, `#8a5aff`][
                (o + r * 3) % 5
              ],
            ),
              D(i, e + n * 0.3, t + a * 0.54, n * 0.4, a * 0.13, `#ffffff`),
              I(
                i,
                [`¥300`, `¥400`, `¥500`][(o + r) % 3],
                e + n / 2,
                t + a * 0.68,
                n * 0.6,
                a * 0.08,
                `#ffffff`,
                `900`,
              ),
              (i.fillStyle = `#808088`),
              i.beginPath(),
              i.arc(e + n / 2, t + a * 0.84, n * 0.12, 0, Math.PI * 2),
              i.fill());
          }));
        break;
      case `crane`:
        (D(i, a, o, s, c, `#14141c`),
          u(4, 1, c * 0.04, c * 0.98, (e, t, n, a, o) => {
            let s = [`#ff2d87`, `#1e90ff`, `#ffd400`, `#30d0a0`][(o + r) % 4];
            (D(i, e + n * 0.04, t, n * 0.92, a, s),
              D(i, e + n * 0.1, t + a * 0.12, n * 0.8, a * 0.56, `#f4fbff`));
            for (let r = 0; r < 14; r++)
              ((i.fillStyle = [
                `#ffb0c8`,
                `#ffe080`,
                `#a0d8ff`,
                `#c8a0ff`,
                `#ffffff`,
                `#ff8060`,
                `#80e0a0`,
              ][(r + o * 3) % 7]),
                i.beginPath(),
                i.arc(
                  e + n * (0.18 + l.next() * 0.64),
                  t + a * (0.5 + l.next() * 0.16),
                  n * (0.06 + l.next() * 0.05),
                  0,
                  Math.PI * 2,
                ),
                i.fill());
            (D(
              i,
              e + n * 0.36,
              t + a * 0.32,
              n * 0.28,
              a * 0.18,
              [`#2050c0`, `#c02040`, `#20a060`][(o + r) % 3],
            ),
              D(i, e + n * 0.48, t + a * 0.12, n * 0.04, a * 0.12, `#c8c8d0`),
              D(i, e + n * 0.42, t + a * 0.23, n * 0.16, a * 0.03, `#c8c8d0`),
              D(i, e + n * 0.1, t + a * 0.7, n * 0.8, a * 0.12, `#30303a`),
              I(
                i,
                `1PLAY ¥100`,
                e + n / 2,
                t + a * 0.76,
                n * 0.7,
                a * 0.07,
                `#ffffff`,
                `900`,
              ),
              D(i, e + n * 0.1, t + a * 0.84, n * 0.8, a * 0.14, s));
          }));
        break;
      case `figure`:
        u(6, 3, c * 0.1, c * 0.86, (e, t, n, r, a) => {
          D(i, e + n * 0.04, t + r * 0.04, n * 0.92, r * 0.92, `#dfe8ee`);
          for (let o = 0; o < 3; o++) {
            let s = e + n * (0.2 + o * 0.3),
              c = t + r * 0.86;
            ((i.fillStyle = [`#f0c8a8`, `#ffe0d0`, `#e0b090`][o]),
              i.fillRect(s - n * 0.04, c - r * 0.6, n * 0.08, r * 0.2),
              (i.fillStyle = [
                `#e04060`,
                `#4060e0`,
                `#40c080`,
                `#f0c040`,
                `#a040e0`,
                `#202030`,
              ][(o + a) % 6]),
              i.fillRect(s - n * 0.07, c - r * 0.42, n * 0.14, r * 0.42));
          }
        });
        break;
      case `pcparts`:
      case `electronics`:
        (u(14, 6, c * 0.1, c * 0.86, (e, t, n, a, o) => {
          let s = [
            `#202020`,
            `#c01818`,
            `#1a3a8a`,
            `#e8e8e8`,
            `#30a030`,
            `#f0a020`,
          ][(o * 5 + r) % 6];
          (D(i, e + n * 0.06, t + a * 0.1, n * 0.88, a * 0.66, s),
            D(
              i,
              e + n * 0.1,
              t + a * 0.78,
              n * 0.6,
              a * 0.16,
              o % 3 ? `#ffe000` : `#ff2020`,
            ));
        }),
          e === `electronics` &&
            I(
              i,
              N(`trade.electronics.sign.kangen`),
              a + s / 2,
              o + c * 0.05,
              s * 0.5,
              c * 0.06,
              `#c01818`,
            ));
        break;
      case `junk`:
        (D(i, a, o, s, c, `#c8c0b0`),
          u(5, 2, c * 0.18, c * 0.92, (e, t, n, a, o) => {
            D(i, e + n * 0.04, t + a * 0.3, n * 0.92, a * 0.68, `#b08850`);
            for (let r = 0; r < 8; r++)
              D(
                i,
                e + n * (0.08 + l.next() * 0.7),
                t + a * (0.12 + l.next() * 0.2),
                n * 0.2,
                a * 0.2,
                [`#202020`, `#606060`, `#e8e8e0`, `#304060`][r % 4],
              );
            (D(i, e + n * 0.2, t + a * 0.45, n * 0.6, a * 0.28, `#ffffff`),
              I(
                i,
                [`¥100`, `¥300`, `¥500`, `¥1,000`, `¥2,980`][(o + r) % 5],
                e + n / 2,
                t + a * 0.59,
                n * 0.55,
                a * 0.2,
                `#d01010`,
                `900`,
              ));
          }),
          I(
            i,
            N(`trade.junk.sign.junk`),
            a + s * 0.3,
            o + c * 0.1,
            s * 0.5,
            c * 0.1,
            `#202020`,
          ),
          I(
            i,
            N(`trade.junk.sign.henpin`),
            a + s * 0.75,
            o + c * 0.1,
            s * 0.4,
            c * 0.08,
            `#c01010`,
          ));
        break;
      case `dutyfree`:
      case `drug`:
      case `donco`:
        (u(14, 6, c * 0.1, c * 0.88, (t, n, a, o, s) => {
          for (let e = 0; e < 4; e++)
            D(
              i,
              t + a * (0.05 + e * 0.23),
              n + o * 0.15,
              a * 0.2,
              o * 0.6,
              [
                `#e04040`,
                `#4080e0`,
                `#f0f0f0`,
                `#40b060`,
                `#f0c020`,
                `#e080c0`,
              ][(e + s) % 6],
            );
          (s + r) % 3 == 0 &&
            (D(
              i,
              t + a * 0.1,
              n + o * 0.62,
              a * 0.8,
              o * 0.34,
              e === `drug` ? `#ffe100` : `#ffec00`,
            ),
            I(
              i,
              (s % 2 ? `¥` : ``) + (l.int(1, 30) * 100 - 2),
              t + a / 2,
              n + o * 0.79,
              a * 0.74,
              o * 0.24,
              `#e60012`,
              `900`,
            ));
        }),
          e === `dutyfree` &&
            I(
              i,
              N(`common.door.tax-free`),
              a + s / 2,
              o + c * 0.05,
              s * 0.6,
              c * 0.07,
              `#c01818`,
            ));
        break;
      case `maid`:
        (D(i, a, o, s, c, `#ffd0e4`), (i.fillStyle = `#ffb0d0`));
        for (let e = 0; e < 9; e++)
          i.fillRect(a + s * 0.3, o + c * (0.9 - e * 0.09), s * 0.4, c * 0.03);
        (D(i, a + s * 0.04, o + c * 0.2, s * 0.22, c * 0.6, `#ffffff`),
          I(
            i,
            N(`akiba.maid.menu`),
            a + s * 0.15,
            o + c * 0.35,
            s * 0.2,
            c * 0.08,
            `#e0407a`,
            `800`,
          ),
          I(
            i,
            P(`akiba.maid.time`, { price: `¥800` }),
            a + s * 0.15,
            o + c * 0.5,
            s * 0.2,
            c * 0.07,
            `#e0407a`,
            `800`,
          ));
        for (let e = 0; e < 6; e++)
          I(
            i,
            `♡`,
            a + s * (0.78 + l.next() * 0.18),
            o + c * (0.15 + l.next() * 0.6),
            s * 0.08,
            c * 0.1,
            `#ff4a8a`,
          );
        break;
      case `kebab`:
        (D(i, a, o, s, c, `#2a2018`),
          D(i, a, o + c * 0.55, s, c * 0.45, `#c8c0b0`),
          (i.fillStyle = `#a86030`),
          i.beginPath(),
          i.moveTo(a + s * 0.28, o + c * 0.2),
          i.lineTo(a + s * 0.38, o + c * 0.2),
          i.lineTo(a + s * 0.36, o + c * 0.56),
          i.lineTo(a + s * 0.3, o + c * 0.56),
          i.fill(),
          D(i, a + s * 0.5, o + c * 0.1, s * 0.46, c * 0.4, `#f8f0d8`),
          I(
            i,
            N(`akiba.band.kebab`),
            a + s * 0.73,
            o + c * 0.18,
            s * 0.4,
            c * 0.1,
            `#c01818`,
          ));
        for (let e = 0; e < 3; e++)
          D(
            i,
            a + s * (0.53 + e * 0.14),
            o + c * 0.3,
            s * 0.12,
            c * 0.12,
            `#d8a050`,
          );
        break;
      case `konbini`:
        (u(8, 3, c * 0.2, c * 0.86, (e, t, n, r, a) => {
          for (let o = 0; o < 5; o++)
            D(
              i,
              e + n * (0.04 + o * 0.19),
              t + r * 0.2,
              n * 0.16,
              r * 0.6,
              [`#e8e8e8`, `#e04040`, `#40a0e0`, `#f0d040`, `#60c060`][
                (o + a) % 5
              ],
            );
        }),
          D(i, a, o + c * 0.1, s, c * 0.06, `#1e5aa8`));
        break;
      case `karaoke`:
      case `cafe`:
      case `tea`:
        (D(i, a, o, s, c, e === `karaoke` ? `#301030` : `#5a3a28`),
          D(
            i,
            a + s * 0.1,
            o + c * 0.3,
            s * 0.8,
            c * 0.5,
            e === `karaoke` ? `#e04090` : `#d8b890`,
          ),
          I(
            i,
            N(
              e === `karaoke`
                ? `akiba.word.karaoke`
                : e === `tea`
                  ? `trade.tea-stand.name`
                  : `trade.cafe.name`,
            ),
            a + s / 2,
            o + c * 0.55,
            s * 0.7,
            c * 0.2,
            e === `karaoke` ? `#ffffff` : `#3a2010`,
          ));
        break;
      case `ramen`:
        (D(i, a, o, s, c, `#e8dcc4`),
          D(i, a, o + c * 0.5, s, c * 0.14, `#8a5a30`));
        for (let e = 0; e < 6; e++)
          D(
            i,
            a + s * (0.08 + e * 0.15),
            o + c * 0.66,
            s * 0.06,
            c * 0.22,
            `#c03020`,
          );
        D(i, a + s * 0.04, o + c * 0.2, s * 0.14, c * 0.4, `#d0d0d8`);
        break;
      case `card`:
      case `retro`:
        (D(i, a, o + c * 0.08, s, c * 0.6, `#3a3e48`),
          u(14, 5, c * 0.1, c * 0.66, (e, t, n, a, o) => {
            (D(
              i,
              e + n * 0.1,
              t + a * 0.06,
              n * 0.8,
              a * 0.7,
              [
                `#e8d8a8`,
                `#c8d8f0`,
                `#f0c8d0`,
                `#d0e8c8`,
                `#e8e8e8`,
                `#f0d8a0`,
              ][(o * 7 + r) % 6],
            ),
              D(
                i,
                e + n * 0.18,
                t + a * 0.14,
                n * 0.64,
                a * 0.4,
                [
                  `#c04030`,
                  `#3060b0`,
                  `#d0a020`,
                  `#40a070`,
                  `#8040b0`,
                  `#202020`,
                ][(o * 5 + r) % 6],
              ),
              D(i, e + n * 0.15, t + a * 0.8, n * 0.7, a * 0.16, `#ffffff`));
          }),
          D(i, a, o + c * 0.7, s, c * 0.2, `#c8d4dc`));
        for (let e = 0; e < 10; e++)
          D(
            i,
            a + s * (0.03 + e * 0.097),
            o + c * 0.73,
            s * 0.08,
            c * 0.12,
            [`#e0a040`, `#4080d0`, `#d04060`, `#40a070`, `#a060d0`][
              (e + r) % 5
            ],
          );
        D(i, a, o + c * 0.9, s, c * 0.1, `#8a929a`);
        break;
      case `anzen`:
        D(i, a, o, s, c, `#eeede6`);
        for (let e = o; e < o + c; e += c / 14)
          D(i, a, e, s, 1, `rgba(0,0,0,0.08)`);
        (D(i, a + s * 0.38, o + c * 0.18, s * 0.26, c * 0.82, `#8a98a0`),
          D(i, a + s * 0.4, o + c * 0.2, s * 0.22, c * 0.78, `#b8c8d0`),
          D(i, a + s * 0.42, o + c * 0.62, s * 0.18, c * 0.05, `#404448`),
          D(i, a + s * 0.06, o + c * 0.24, s * 0.24, c * 0.42, `#f8f8f4`));
        for (let e = 0; e < 4; e++)
          D(
            i,
            a + s * (0.08 + (e % 2) * 0.11),
            o + c * (0.27 + Math.floor(e / 2) * 0.18),
            s * 0.09,
            c * 0.14,
            [`#2050a0`, `#e0e0e0`, `#c02020`, `#f0c020`][e],
          );
        ((i.fillStyle = `#e01010`),
          i.beginPath(),
          i.arc(a + s * 0.82, o + c * 0.16, s * 0.04, 0, Math.PI * 2),
          i.fill());
        break;
      case `craft`:
      case `books`:
        D(i, a, o, s, c, `#6a4a30`);
        for (let e = 0; e < 4; e++)
          D(
            i,
            a + s * (0.1 + e * 0.22),
            o + c * 0.12,
            s * 0.02,
            c * 0.1,
            `#202020`,
          );
        for (let e = 0; e < 4; e++)
          ((i.fillStyle = `#ffd890`),
            i.beginPath(),
            i.arc(
              a + s * (0.11 + e * 0.22),
              o + c * 0.25,
              s * 0.04,
              0,
              Math.PI * 2,
            ),
            i.fill());
        u(5, 3, c * 0.35, c * 0.9, (t, n, r, a, o) => {
          D(i, t + r * 0.05, n + a * 0.85, r * 0.9, a * 0.1, `#a07850`);
          for (let s = 0; s < 5; s++)
            D(
              i,
              t + r * (0.08 + s * 0.17),
              n + a * (0.25 + (e === `books` ? 0 : 0.2)),
              r * 0.13,
              a * (e === `books` ? 0.6 : 0.4),
              [`#c04030`, `#e0d0b0`, `#305080`, `#40703a`, `#d0a040`][
                (s + o) % 5
              ],
            );
        });
    }
    if (e !== `gacha` && e !== `crane` && e !== `anzen`) {
      ((i.globalAlpha = 0.2),
        (i.fillStyle = `#f4f2ea`),
        i.fillRect(a, o, s, c * 0.86),
        (i.globalAlpha = 1));
      for (let e = 0; e < 3; e++) {
        let t = a + s * (0.15 + l.next() * 0.7),
          n = c * (0.4 + l.next() * 0.08);
        ((i.fillStyle = [`#2a2a34`, `#4a3a30`, `#30404a`][e]),
          i.beginPath(),
          i.arc(t, o + c - n - c * 0.03, s * 0.022, 0, Math.PI * 2),
          i.fill(),
          i.fillRect(t - s * 0.025, o + c - n, s * 0.05, n * 0.62));
      }
    }
  };
}
function Me(e, r) {
  return (i, a, o, s, c) => {
    let l = new t(n(`akiba-win`, e, r));
    i.clearRect(a, o, s, c);
    let u = s / 4;
    for (let t = 0; t < 4; t++) {
      let n = a + t * u + u * 0.06,
        s = o + c * 0.06,
        d = u * 0.88,
        f = c * 0.88,
        p = e === `dark` ? `#5a6a78` : e === `office` ? `#8a96a0` : `#c8ccc8`,
        m = e === `dark` ? `#202830` : e === `office` ? `#3a444c` : `#8a8e8c`,
        h = i.createLinearGradient(0, s, 0, s + f);
      if (
        (h.addColorStop(0, p),
        h.addColorStop(1, m),
        (i.globalAlpha = 1),
        (i.fillStyle = h),
        i.fillRect(n, s, d, f),
        e === `blind` || e === `tenant`)
      )
        for (let e = s; e < s + f; e += f / 9)
          D(i, n, e, d, f * 0.02, `rgba(0,0,0,0.25)`);
      (e === `tenant` &&
        l.next() < 0.5 &&
        D(
          i,
          n + d * 0.1,
          s + f * 0.35,
          d * 0.8,
          f * 0.24,
          [`#ff4a8a`, `#ffd400`, `#40c0ff`, `#ffffff`][(t + r) % 4],
        ),
        (i.globalAlpha = 0.16),
        (i.fillStyle = `#ffffff`),
        i.fillRect(n + d * 0.1, s, d * 0.12, f),
        (i.globalAlpha = 1));
    }
  };
}
function Ne(e, r) {
  return (i, a, o, s, c) => {
    let l = new t(n(`akiba-wall`, e, r));
    if ((D(i, a, o, s, c, r), e === `tile`))
      for (let e = o; e < o + c; e += 6) D(i, a, e, s, 1, `rgba(0,0,0,0.08)`);
    if (e === `panel`)
      for (let e = a; e < a + s; e += s / 4)
        D(i, e, o, 2, c, `rgba(0,0,0,0.12)`);
    if (e === `brick`)
      for (let e = o, t = 0; e < o + c; e += 8, t++) {
        D(i, a, e + 7, s, 1, `#c8bca8`);
        for (let n = a + (t % 2 ? 0 : 9); n < a + s; n += 18)
          D(i, n, e, 1, 7, `#c8bca8`);
      }
    for (let e = 0; e < 6; e++)
      ((i.globalAlpha = 0.06 + l.next() * 0.06),
        (i.fillStyle = `#302820`),
        i.fillRect(a + l.next() * s, o, s * 0.03, c * (0.3 + l.next() * 0.7)));
    i.globalAlpha = 1;
  };
}
function Pe(e, t, n) {
  let r = ke(e, t, n);
  return (i, a, o, s, c) => {
    let l = Math.min(s * 0.42, c * 0.66);
    (i.save(),
      i.beginPath(),
      i.rect(a, o, l, c),
      i.clip(),
      r(i, a, o - c * 0.08, l, c * 1.5),
      i.restore());
    let u = [`#1b2a6b`, `#3a0d4f`, `#0d3b2e`, `#4a0e0e`, `#101820`];
    (D(i, a + l, o, s - l, c, u[e % u.length]),
      we(
        i,
        N(t),
        a + l + (s - l) / 2,
        o + c * 0.38,
        (s - l) * 0.9,
        c * 0.26,
        `#ffffff`,
        `#000000`,
      ),
      D(
        i,
        a + l + (s - l) * 0.2,
        o + c * 0.66,
        (s - l) * 0.6,
        c * 0.16,
        `#ffd400`,
      ),
      I(
        i,
        N(n),
        a + l + (s - l) / 2,
        o + c * 0.74,
        (s - l) * 0.56,
        c * 0.12,
        `#101010`,
        `900`,
      ),
      D(i, a, o, s, c * 0.03, `#ffffff`),
      D(i, a, o + c * 0.97, s, c * 0.03, `#ffffff`));
  };
}
var Fe = { E: [1, 0], W: [-1, 0], N: [0, -1], S: [0, 1] },
  L = 4.3,
  R = 3.45,
  Ie = (e) => L + (e.floors - 1) * R + 0.9,
  Le = [
    `akiba.floor.keitai`,
    `akiba.floor.pc`,
    `akiba.floor.parts`,
    `akiba.floor.camera`,
    `akiba.floor.game`,
    `akiba.floor.hobby`,
    `akiba.floor.toreka`,
    `akiba.floor.kaitori`,
    `akiba.floor.audio`,
    `akiba.floor.menzei`,
  ];
function z(e, t) {
  let [n, r, i] = F(e);
  return { main: `brand.${e}`, top: t, bg: n, fg: r, acc: i };
}
function B(e, t, n) {
  let [r, i, a] = F(e);
  return { main: `brand.${e}`, bg: r, fg: i, acc: a, floor: t, sub: n };
}
function Re(e) {
  let r = new t(n(`akiba-look`, e.id, e.v ?? 0)),
    i = (e) => e[Math.floor(r.next() * e.length)],
    a = [
      { key: `akiba.word.maid`, bg: `#ff5aa0`, fg: `#ffffff` },
      { key: `akiba.word.toreka`, bg: `#6a2ad0`, fg: `#ffffff` },
      { key: `akiba.word.figure`, bg: `#ffffff`, fg: `#e0407a` },
      { key: `akiba.word.kaitori`, bg: `#e60012`, fg: `#ffffff` },
      { key: `akiba.word.game`, bg: `#1d2088`, fg: `#ffffff` },
      { key: `akiba.word.karaoke`, bg: `#f39800`, fg: `#ffffff` },
      { key: `akiba.word.hobby`, bg: `#00a0e9`, fg: `#ffffff` },
      { key: `akiba.word.chuko`, bg: `#ffe100`, fg: `#c00000` },
      { key: `akiba.word.anime`, bg: `#ff8a00`, fg: `#ffffff` },
      { key: `akiba.word.pc`, bg: `#ffffff`, fg: `#1d2088` },
      { key: `akiba.word.menzei`, bg: `#008a4a`, fg: `#ffffff` },
    ],
    o = (e) => {
      let t = [],
        n = Math.floor(r.next() * a.length);
      for (let r = 0; r < e; r++) t.push(a[(n + r * 3) % a.length]);
      return t;
    },
    s = {
      wall: i([
        15262940, 14210252, 13159632, 12104876, 15789800, 11054256, 13945016,
      ]),
      win: i([`dark`, `blind`, `tenant`]),
    };
  switch (e.kind) {
    case `hobby`:
      return {
        wall: 15921902,
        win: `tenant`,
        vsign: {
          main: `akiba.hobby.short`,
          top: `akiba.hobby.latin`,
          bg: `#0b3a8f`,
          fg: `#ffffff`,
          acc: `#7fc8ff`,
        },
        roof: {
          main: `akiba.hobby.name`,
          bg: `#0b3a8f`,
          fg: `#ffffff`,
          acc: `#7fc8ff`,
        },
        stack: o(Math.min(8, e.floors - 1)),
        bands: [
          { main: `akiba.band.figure-kaitori`, bg: `#ffffff`, fg: `#0b3a8f` },
          { main: `akiba.band.card`, bg: `#1d2088`, fg: `#ffffff` },
          { main: `akiba.band.anime-goods`, bg: `#00a0e9`, fg: `#ffffff` },
        ],
      };
    case `gacha`:
      return {
        ...s,
        wall: 16052456,
        vsign: {
          main: `akiba.word.gacha`,
          bg: `#ffe100`,
          fg: `#e60012`,
          acc: `#e60012`,
        },
        bands: [
          {
            main: `akiba.gacha.name`,
            sub: `akiba.gacha.count`,
            bg: `#ff4a8a`,
            fg: `#ffffff`,
            acc: `#ffe100`,
          },
        ],
        stack: o(Math.min(6, e.floors - 1)),
      };
    case `arcade`:
    case `karaoke`: {
      let t = e.name,
        [n, r, i] = F(t);
      if (e.kind === `karaoke`) {
        let [e, n, r] = F(`manekiinu`);
        return {
          wall: 16052974,
          win: `tenant`,
          vsign: z(`manekiinu`),
          vsign2: z(t),
          bands: [
            B(t, 1),
            { main: `brand.manekiinu`, bg: e, fg: n, acc: r, floor: 3 },
            { main: `akiba.word.karaoke`, bg: r, fg: `#ffffff` },
          ],
          roof: B(`manekiinu`),
        };
      }
      return {
        wall: 1710628,
        win: `dark`,
        closedFront: t === `titlestation` ? 2756624 : 1315868,
        vsign: z(t),
        bands: [
          { main: `brand.${t}`, bg: n, fg: r, acc: i },
          {
            main: `akiba.band.crane`,
            bg: `#14141c`,
            fg: t === `titlestation` ? `#ffffff` : i,
          },
          { main: `akiba.floor.medal`, bg: n, fg: r, floor: 3 },
        ],
        roof: { main: `brand.${t}`, bg: n, fg: r, acc: i },
        led: `akiba.band.crane`,
      };
    }
    case `redarcade`:
      return {
        wall: 13111326,
        win: `dark`,
        closedFront: 13111326,
        vsign: {
          main: `akiba.tophat.name`,
          bg: `#ffffff`,
          fg: `#c8101e`,
          acc: `#c8101e`,
        },
        bands: [
          {
            main: `akiba.tophat.name`,
            sub: `akiba.band.crane`,
            bg: `#c8101e`,
            fg: `#ffffff`,
            acc: `#ffffff`,
          },
          { main: `akiba.floor.crane`, bg: `#ffffff`, fg: `#c8101e`, floor: 2 },
          { main: `akiba.floor.video`, bg: `#ffffff`, fg: `#c8101e`, floor: 4 },
        ],
        led: `akiba.band.crane`,
      };
    case `piccamera`:
      return {
        wall: 15790318,
        win: `office`,
        vsign: z(`piccamera`),
        vsign2: {
          main: `akiba.word.menzei`,
          bg: `#ffe100`,
          fg: `#e60012`,
          acc: `#e60012`,
        },
        bands: Le.slice(0, 7).map((e, t) => ({
          main: e,
          floor: t + 2,
          bg: t % 2 ? `#e60012` : `#ffffff`,
          fg: t % 2 ? `#ffffff` : `#e60012`,
        })),
        roof: B(`piccamera`),
        led: `akiba.wrap.gpu`,
      };
    case `gamies`:
      return {
        wall: 16316660,
        win: `tenant`,
        vsign: {
          main: `akiba.gamies.name`,
          bg: `#1a3a9a`,
          fg: `#ffffff`,
          acc: `#ffd400`,
        },
        bands: [
          {
            main: `akiba.gamies.name`,
            sub: `akiba.band.anime-goods`,
            bg: `#1a3a9a`,
            fg: `#ffffff`,
          },
        ],
        wrap: [
          Math.floor(r.next() * 5),
          `akiba.wrap.anisong`,
          `akiba.word.akiba`,
        ],
      };
    case `mandarara`:
      return {
        wall: 1315860,
        win: `dark`,
        closedFront: 1315860,
        vsign: {
          main: `brand.mandarara`,
          bg: `#141414`,
          fg: `#ffffff`,
          acc: `#c8102e`,
        },
        bands: [
          { main: `brand.mandarara`, bg: `#c8102e`, fg: `#ffffff` },
          { main: `akiba.floor.comic`, bg: `#141414`, fg: `#c8102e`, floor: 3 },
        ],
      };
    case `office`:
      return { wall: 12107976, win: `office` };
    case `anzen`:
      return {
        wall: 15790056,
        win: `blind`,
        bands: [{ main: `akiba.anzen.name`, bg: `#1d3a8a`, fg: `#ffffff` }],
      };
    case `donco`:
      return {
        wall: 16769280,
        win: `dark`,
        closedFront: 16769280,
        vsign: z(`doncoyote`),
        vsign2: {
          main: `akiba.word.menzei`,
          bg: `#e60012`,
          fg: `#ffffff`,
          acc: `#ffe100`,
        },
        bands: [
          B(`doncoyote`, void 0, `brand.doncoyote.tagline`),
          { main: `akiba.band.menzei`, bg: `#e60012`, fg: `#ffffff` },
        ],
        roof: B(`doncoyote`),
      };
    case `softnap`:
      return {
        wall: 15264494,
        win: `office`,
        vsign: z(`softnap`),
        bands: Le.slice(e.v ? 4 : 0, (e.v ? 4 : 0) + 6).map((e, t) => ({
          main: e,
          floor: t + 2,
          bg: t % 2 ? `#00479d` : `#ffd400`,
          fg: t % 2 ? `#ffffff` : `#00479d`,
        })),
        roof: B(`softnap`),
        led: `akiba.wrap.gpu`,
      };
    case `naox`:
      return {
        wall: 15790320,
        win: `office`,
        vsign: z(`naox`, `common.door.tax-free`),
        bands: [
          B(`naox`, void 0, `akiba.band.menzei`),
          { main: `akiba.band.kaden`, bg: `#ffffff`, fg: `#e60012` },
        ],
        roof: B(`naox`),
      };
    case `anime`: {
      let t = e.name;
      return {
        ...s,
        win: `blind`,
        vsign: z(t),
        bands: [
          B(t),
          { main: `akiba.band.doujin`, bg: `#ffffff`, fg: F(t)[0] },
        ],
        wrap: [
          Math.floor(r.next() * 5),
          i([`akiba.wrap.movie`, `akiba.wrap.figure`, `akiba.wrap.anisong`]),
          `akiba.word.akiba`,
        ],
      };
    }
    case `pcshop`: {
      let t = e.name;
      return {
        ...s,
        win: `dark`,
        vsign: z(t),
        vsign2: {
          main: `akiba.word.pc`,
          bg: `#ffffff`,
          fg: F(t)[0],
          acc: F(t)[0],
        },
        bands: [
          B(t, void 0, `akiba.band.jisaku`),
          { main: `akiba.band.gpu`, bg: `#101010`, fg: `#ffd400` },
        ],
        roof: { main: `akiba.band.jisaku`, bg: F(t)[0], fg: `#ffffff` },
      };
    }
    case `wrap`:
      return {
        ...s,
        wrap: [
          Math.floor(r.next() * 5),
          i([`akiba.wrap.rpg`, `akiba.wrap.vtuber`, `akiba.wrap.idol`]),
          `akiba.wrap.rpg-sub`,
        ],
        stack: o(4),
      };
    case `radiodept`:
      return {
        wall: 14209216,
        win: `blind`,
        vsign: {
          main: `akiba.radiodept.name`,
          bg: `#ffffff`,
          fg: `#1d2088`,
          acc: `#e60012`,
        },
        bands: [
          {
            main: `akiba.radiodept.name`,
            sub: `akiba.radiodept.sub`,
            bg: `#1d2088`,
            fg: `#ffffff`,
          },
          { main: `akiba.band.musen`, bg: `#ffffff`, fg: `#1d2088` },
          { main: `akiba.band.parts`, bg: `#e60012`, fg: `#ffffff` },
        ],
      };
    case `ishimatsu`:
      return {
        wall: 14999768,
        win: `blind`,
        vsign: {
          main: `akiba.shop.ishimaru`,
          bg: `#d7000f`,
          fg: `#ffffff`,
          acc: `#ffffff`,
        },
        bands: [
          {
            main: `akiba.shop.ishimaru`,
            sub: `akiba.band.kaden`,
            bg: `#d7000f`,
            fg: `#ffffff`,
          },
          { main: `akiba.band.audio`, bg: `#ffffff`, fg: `#d7000f` },
        ],
        roof: {
          main: `akiba.shop.ishimaru`,
          bg: `#ffffff`,
          fg: `#d7000f`,
          acc: `#d7000f`,
        },
      };
    case `onoden`:
      return {
        wall: 15657698,
        win: `office`,
        vsign: {
          main: `akiba.onoden.name`,
          bg: `#00a040`,
          fg: `#ffffff`,
          acc: `#ffe100`,
        },
        bands: [
          {
            main: `akiba.onoden.name`,
            sub: `akiba.band.kaden`,
            bg: `#00a040`,
            fg: `#ffffff`,
          },
        ],
        roof: {
          main: `akiba.onoden.name`,
          bg: `#00a040`,
          fg: `#ffffff`,
          acc: `#ffe100`,
        },
      };
    case `junk`:
      return {
        ...s,
        win: `blind`,
        vsign: {
          main: `akiba.word.chuko`,
          bg: `#ffe100`,
          fg: `#c00000`,
          acc: `#c00000`,
        },
        bands: [
          {
            main: `trade.junk.sign.junk`,
            sub: `trade.junk.sign.mikakunin`,
            bg: `#ffe100`,
            fg: `#c00000`,
          },
        ],
        stack: o(Math.min(4, e.floors - 1)),
      };
    case `maid`:
      return {
        ...s,
        win: `tenant`,
        vsign: {
          main: `akiba.word.maid`,
          bg: `#ff8ac0`,
          fg: `#ffffff`,
          acc: `#ffffff`,
        },
        bands: [
          {
            main: i([
              `akiba.maid.name.1`,
              `akiba.maid.name.2`,
              `akiba.maid.name.3`,
            ]),
            bg: `#ffffff`,
            fg: `#ff4a8a`,
            acc: `#ff8ac0`,
          },
        ],
        stack: o(Math.min(5, e.floors - 1)),
      };
    case `card`:
      return {
        ...s,
        vsign: {
          main: `akiba.word.toreka`,
          bg: `#6a2ad0`,
          fg: `#ffffff`,
          acc: `#ffd400`,
        },
        bands: [
          {
            main: `akiba.shop.card`,
            sub: `akiba.band.card`,
            bg: `#6a2ad0`,
            fg: `#ffffff`,
          },
        ],
        stack: o(Math.min(5, e.floors - 1)),
      };
    case `retro`:
      return {
        ...s,
        vsign: {
          main: `akiba.word.game`,
          bg: `#101010`,
          fg: `#30e030`,
          acc: `#30e030`,
        },
        bands: [
          {
            main: `akiba.shop.retro`,
            sub: `akiba.band.retro`,
            bg: `#101010`,
            fg: `#30e030`,
          },
        ],
        stack: o(Math.min(5, e.floors - 1)),
      };
    default:
      return {
        ...s,
        vsign:
          r.next() < 0.6
            ? {
                main: i([
                  `akiba.word.figure`,
                  `akiba.word.toreka`,
                  `akiba.word.kaitori`,
                  `akiba.word.anime`,
                  `akiba.word.musen`,
                  `akiba.word.denshi`,
                ]),
                bg: i([
                  `#e60012`,
                  `#1d2088`,
                  `#ff5aa0`,
                  `#6a2ad0`,
                  `#008a4a`,
                  `#ff8a00`,
                ]),
                fg: `#ffffff`,
                acc: `#ffe100`,
              }
            : void 0,
        stack: o(Math.min(7, e.floors - 1)),
        bands:
          r.next() < 0.6
            ? [
                {
                  main: i([
                    `akiba.band.chuko-sumaho`,
                    `akiba.band.shinpin-chuko`,
                    `akiba.band.figure-kaitori`,
                    `akiba.band.anime-goods`,
                    `akiba.band.retro`,
                    `akiba.band.card`,
                  ]),
                  bg: i([`#ffffff`, `#ffe100`, `#1d2088`, `#101010`]),
                  fg: i([`#e60012`, `#1d2088`]),
                },
              ]
            : void 0,
      };
  }
}
function ze(e, t) {
  let [n, r] = Fe[t],
    i = r,
    a = -n,
    o = [
      [e.x0, e.z0],
      [e.x1, e.z0],
      [e.x1, e.z1],
      [e.x0, e.z1],
    ].filter(([t, i]) =>
      n ? (n > 0 ? t === e.x1 : t === e.x0) : r > 0 ? i === e.z1 : i === e.z0,
    );
  o.sort((e, t) => e[0] * i + e[1] * a - (t[0] * i + t[1] * a));
  let [s, c] = o[0];
  return {
    ox: s,
    oz: c,
    tx: i,
    tz: a,
    nx: n,
    nz: r,
    L: Math.abs(n ? e.z1 - e.z0 : e.x1 - e.x0),
  };
}
var V = (e, t, n = 0) => [
  e.ox + e.tx * t + e.nx * n,
  e.oz + e.tz * t + e.nz * n,
];
function H(e, t, n, r, i, a, o, s) {
  let [c, l] = V(t, n, o),
    [u, d] = V(t, r, o);
  j(e, c, l, u, d, i, a, s);
}
function Be(e, t) {
  let r = new Map();
  for (let i of t) {
    let t = Re(i);
    (r.set(i.id, t),
      t.vsign && e.need(He(t.vsign), 52, 364, Te(t.vsign)),
      t.vsign2 && e.need(He(t.vsign2), 52, 364, Te(t.vsign2)));
    for (let n of t.bands ?? []) e.need(U(n), 384, 48, Ee(n));
    (t.stack &&
      e.need(
        `stack:${i.id}`,
        52,
        400,
        De(
          t.stack.map((e, n) => ({ n: t.stack.length + 1 - n, ...e })),
          `#3a3a40`,
        ),
      ),
      t.roof && e.need(`roof:${U(t.roof)}`, 288, 100, Oe(t.roof)),
      t.wrap && e.need(`wrap:${t.wrap.join(`|`)}`, 288, 432, ke(...t.wrap)),
      t.led && e.need(`led:${t.led}`, 224, 112, Ae(t.led, n(i.id) % 4)),
      e.need(`win:${t.win}`, 160, 60, Me(t.win, 1)),
      e.need(`shop:${i.shop}`, 288, 144, je(i.shop, 1)),
      i.poi && e.need(`shop:${i.poi.kind}`, 288, 144, je(i.poi.kind, 2)));
    let a = Ue(i, t);
    e.need(U(a), 384, 48, Ee(a));
  }
  for (let t of Ve) e.need(`wrap:${t.join(`|`)}`, 288, 432, ke(...t));
  return (
    e.need(`wall:concrete`, 64, 64, Ne(`concrete`, `#c8c4bc`)),
    e.need(`shutter`, 64, 64, Ne(`panel`, `#b4b8bc`)),
    r
  );
}
var Ve = [
    [0, `akiba.wrap.rpg`, `akiba.wrap.rpg-sub`],
    [3, `akiba.wrap.figure`, `akiba.word.akiba`],
    [4, `akiba.wrap.vtuber`, `akiba.word.akiba`],
  ],
  He = (e) => `v:${e.main}|${e.top ?? ``}|${e.bg}|${e.fg}`,
  U = (e) => `b:${e.main}|${e.sub ?? ``}|${e.bg}|${e.fg}|${e.floor ?? ``}`;
function Ue(e, t) {
  if (t.bands?.length) return t.bands[0];
  let n = t.vsign?.bg ?? `#1d2088`,
    r = t.vsign?.fg ?? `#ffffff`;
  return { main: e.name, bg: n, fg: r };
}
var We = 35,
  W = 3;
function Ge(e, r, i, a, o) {
  let s = new t(n(`akiba-hero`, r.id)),
    c = Ie(r),
    l = a.white(),
    u = ze(r, r.dir),
    d = (e) => {
      if (e === r.dir || e === r.corner) return 0;
      let t = ze(r, e),
        n = u;
      return t.nx === -n.nx && t.nz === -n.nz
        ? (r.coverB ?? 0)
        : ((t.nx === n.tx && t.nz === n.tz ? r.coverR : r.coverL) ?? 0);
    },
    f = a.uv(`win:${i.win}`);
  for (let t of [`N`, `E`, `S`, `W`]) {
    let o = ze(r, t),
      u = d(t);
    if (t !== r.dir && t !== r.corner) {
      if (u >= c - 0.05) continue;
      (e.setMaterial(0.9, 0, 0, 0),
        A(e, i.wall, 0.92),
        H(e, o, 0, o.L, Math.max(0, u), c, 0, l));
      let s = i.wrap
        ? `wrap:${i.wrap.join(`|`)}`
        : c - u > 12 && o.L > 8 && n(r.id, t) % 2 == 0
          ? `wrap:${Ve[n(r.id, `wp`) % Ve.length].join(`|`)}`
          : null;
      if (s && c - u > 9 && o.L > 7) {
        (e.setMaterial(0.6, 0, 0.16, W), A(e, 16777215));
        let t = c - 1.2,
          n = Math.max(u + 0.5, t - (o.L - 1.2) * 1.5);
        H(e, o, 0.6, o.L - 0.6, n, t, 0.06, a.uv(s));
      }
      continue;
    }
    Ke(e, r, i, o, a, t === r.dir, s);
    for (let t = 1; t < r.floors; t++) {
      let n = L + (t - 1) * R,
        r = n + R;
      if (i.closedFront !== void 0) {
        (e.setMaterial(0.7, 0, 0, 0),
          A(e, i.closedFront),
          H(e, o, 0, o.L, n, r, 0, l));
        continue;
      }
      (e.setMaterial(0.85, 0, 0, 0),
        A(e, i.wall),
        H(e, o, 0, o.L, n, n + 0.95, 0, l));
      let a = Math.max(1, Math.round(o.L / 3.6));
      (e.setMaterial(0.2, 0.3, 0.22, We), A(e, 16777215));
      for (let t = 0; t < a; t++)
        H(
          e,
          o,
          (o.L * t) / a + 0.12,
          (o.L * (t + 1)) / a - 0.12,
          n + 0.95,
          r,
          0,
          f,
        );
      (e.setMaterial(0.85, 0, 0, 0), A(e, i.wall, 0.96));
      for (let t = 0; t <= a; t++) {
        let i = (o.L * t) / a;
        H(
          e,
          o,
          Math.max(0, i - 0.12),
          Math.min(o.L, i + 0.12),
          n + 0.95,
          r,
          0,
          l,
        );
      }
    }
    if (
      (e.setMaterial(0.85, 0, 0, 0),
      A(e, i.wall, 0.9),
      H(e, o, 0, o.L, c - 0.9, c, 0, l),
      t === r.dir && i.bands?.length)
    ) {
      let t = i.bands.some(
          (e) => e.floor !== void 0 && /\.floor\./.test(e.main),
        ),
        n = new Map(),
        s = 0,
        c = i.led && r.floors >= 6 ? 2 : -1;
      for (let l = 1; l < r.floors - 1; l++) {
        if (l === c) continue;
        let r = i.bands.find((e) => e.floor === l + 1) ?? null;
        if (!r) {
          if (t || (l - 1) % 2) continue;
          r = i.bands[s++ % i.bands.length];
        }
        let u = U(r);
        if ((n.get(u) ?? 0) >= 2) continue;
        n.set(u, (n.get(u) ?? 0) + 1);
        let d = L + (l - 1) * R + 0.15,
          f = i.closedFront === void 0 ? 1.15 : Math.min(R * 0.7, o.L / 6);
        (e.setMaterial(0.5, 0, 0.3, W), A(e, 16777215));
        let p = Math.min(o.L - 0.4, f * 8),
          m = (o.L - p) / 2;
        H(e, o, m, m + p, d, d + f, 0.12, a.uv(u));
      }
    }
    if (t === r.dir && i.led && r.floors >= 5) {
      let t = r.floors >= 6 ? 8 : 4.8999999999999995,
        n = Math.min(o.L * 0.7, 7, (R * 2 - 0.4) * 2),
        s = n / 2;
      (e.setMaterial(0.3, 0, 0.32, 6),
        A(e, 16777215),
        H(
          e,
          o,
          (o.L - n) / 2,
          (o.L + n) / 2,
          t,
          t + s,
          0.16,
          a.uv(`led:${i.led}`),
        ));
    }
    t === r.dir &&
      i.wrap &&
      r.kind === `wrap` &&
      (e.setMaterial(0.6, 0, 0.18, W),
      A(e, 16777215),
      H(
        e,
        o,
        0.3,
        o.L - 0.3,
        5.5,
        c - 1.4,
        0.14,
        a.uv(`wrap:${i.wrap.join(`|`)}`),
      ));
  }
  (e.setMaterial(0.9, 0, 0, 0),
    A(e, 9079430),
    ve(e, r.x0, r.z0, r.x1, r.z1, c - 0.6, l));
  let p = (t, n, r, i, o) => {
      let [s, c] = V(u, n, 0.35 + o / 2);
      (e.setMaterial(0.5, 0, 0.32, W), A(e, 16777215));
      let d = a.uv(He(t));
      (M(e, s, c, r, i, o / 2, 0.2, u.tx, u.tz, l, d, d),
        e.setMaterial(0.6, 0.4, 0, 0),
        A(e, 5264472));
      let [f, p] = V(u, n, 0.18);
      M(e, f, p, r + 0.3, i - 0.3, 0.17, 0.05, u.tx, u.tz, l);
    },
    m = c - (i.roof ? 0.9 : 0.2),
    h = Math.min(m - 4.6, 26);
  if (
    (i.vsign &&
      r.floors >= 3 &&
      p(i.vsign, 0.9, m - h, m, r.kind === `hobby` ? 2 : 1.3),
    i.vsign2 && r.floors >= 4)
  )
    p(i.vsign2, u.L - 0.9, m - h * 0.7, m, 1);
  else if (i.stack && r.floors >= 3 && u.L > 5) {
    let t = L + i.stack.length * R,
      [n, o] = V(u, u.L - 0.8, 0.85);
    (e.setMaterial(0.5, 0, 0.3, W), A(e, 16777215));
    let s = a.uv(`stack:${r.id}`);
    M(e, n, o, 4.5, Math.min(t, c - 1), 0.5, 0.16, u.tx, u.tz, l, s, s);
  }
  if (i.roof) {
    let t = r.kind === `hobby` ? 5.5 : 3.2,
      n = Math.min(u.L - 0.6, t * 2.86);
    (e.setMaterial(0.7, 0.5, 0, 0), A(e, 6317160));
    for (let n of [0.7, u.L - 0.7]) {
      let [r, i] = V(u, n, -1.2);
      M(e, r, i, c - 0.6, c + t * 0.4, 0.08, 0.6, u.nx, u.nz, l);
    }
    (e.setMaterial(0.5, 0, 0.32, W), A(e, 16777215));
    let [o, s] = V(u, u.L / 2, -0.6),
      d = a.uv(`roof:${U(i.roof)}`);
    M(e, o, s, c + 0.1, c + 0.1 + t, n / 2, 0.2, u.nx, u.nz, l, d, d);
  }
  return (
    !i.roof &&
      o > 0 &&
      s.next() < 0.5 &&
      (e.setMaterial(0.6, 0.2, 0, 0),
      A(e, 14212312),
      M(
        e,
        (r.x0 + r.x1) / 2 + (s.next() - 0.5) * 2,
        (r.z0 + r.z1) / 2,
        c - 0.6,
        c + 1.6,
        0.9,
        0.9,
        0,
        1,
        l,
      )),
    {
      id: r.id,
      h: c,
      cx: (r.x0 + r.x1) / 2,
      cz: (r.z0 + r.z1) / 2,
      hx: (r.x1 - r.x0) / 2,
      hz: (r.z1 - r.z0) / 2,
    }
  );
}
function Ke(e, t, n, r, i, a, o) {
  let s = i.white(),
    c = t.poi && t.poi.dir === (a ? t.dir : t.corner) ? t.poi : null,
    l = 3.1999999999999997;
  (e.setMaterial(0.25, 0.2, 0.16, 17), A(e, 16053492));
  let u = Math.max(1, Math.round(r.L / 3.2));
  for (let n = 0; n < u; n++) {
    let o = (r.L * n) / u,
      s = (r.L * (n + 1)) / u,
      d = (o + s) / 2,
      f = c && Math.abs(d - c.at) <= c.width / 2 + 0.2 ? c.kind : t.shop,
      [p, m] = V(r, o + 0.1, -0.35),
      [h, g] = V(r, s - 0.1, -0.35),
      _ = ((n + +!a) % 2) / 2,
      v = _ + 1 / 2;
    _e(e, p, m, h, g, 0, l, i.uv(`shop:${f}`), _, v, 0, 1);
  }
  (e.setMaterial(0.85, 0, 0, 0), A(e, n.wall, 0.8));
  {
    let [t, n] = V(r, 0, 0),
      [i, a] = V(r, 0, -0.35);
    j(e, i, a, t, n, 0, l, s);
    let [o, c] = V(r, r.L, 0),
      [u, d] = V(r, r.L, -0.35);
    j(e, o, c, u, d, 0, l, s);
  }
  (e.setMaterial(0.6, 0.4, 0, 0), A(e, 3816512));
  for (let t = 0; t <= u; t++) {
    let n = (r.L * t) / u;
    H(e, r, Math.max(0, n - 0.1), Math.min(r.L, n + 0.1), 0, l, 0, s);
  }
  (e.setMaterial(0.85, 0, 0, 0), A(e, 14211284));
  let [d, f] = V(r, 0, -0.35),
    [p, m] = V(r, r.L, 0);
  if (
    (ve(
      e,
      Math.min(d, p),
      Math.min(f, m),
      Math.max(d, p),
      Math.max(f, m),
      l,
      s,
      !0,
    ),
    e.setMaterial(0.5, 0, 0.3, W),
    A(e, 16777215),
    H(e, r, 0, r.L, l, L, 0.05, i.uv(U(Ue(t, n)))),
    !n.closedFront && o.next() < 0.35 && r.L < 12)
  ) {
    (e.setMaterial(0.8, 0, 0, 0),
      A(e, [12589080, 1723048, 2787914, 15763968][Math.floor(o.next() * 4)]));
    let [t, n] = V(r, 0.1, 0),
      [i, a] = V(r, r.L - 0.1, 0),
      [c, l] = V(r, 0.1, 1.2),
      [u, d] = V(r, r.L - 0.1, 1.2);
    e.quad(
      c,
      2.6499999999999995,
      l,
      u,
      2.6499999999999995,
      d,
      i,
      3.15,
      a,
      t,
      3.15,
      n,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
    );
  }
}
function qe(e) {
  for (let t of [0, 1, 2]) e.need(`banner:${t}`, 64, 192, Je(t));
  (e.need(`kyakuhiki`, 96, 128, Ye),
    e.need(`rojo`, 96, 128, Xe),
    e.need(`gachafront`, 128, 160, Ze),
    e.need(`cranefront`, 96, 192, Qe),
    e.need(`aboard:maid`, 96, 128, $e(`maid`)),
    e.need(`aboard:junk`, 96, 128, $e(`junk`)),
    e.need(`junkbox`, 128, 64, et),
    e.need(`vendcan`, 96, 192, tt),
    e.need(`hokoten`, 256, 160, nt),
    e.need(`bridgeplate`, 128, 48, rt),
    e.need(`shop:junk-out`, 320, 160, je(`junk`, 7)));
}
function Je(e) {
  return (t, n, r, i, a) => {
    if (
      (E(t, n, r, i, a, [`#e60012`, `#1d2088`, `#ff8a00`][e % 3], 0.62),
      D(t, n, r, i, a * 0.06, `#ffffff`),
      D(t, n, r + a * 0.94, i, a * 0.06, `#ffffff`),
      e === 2)
    ) {
      _(
        t,
        N(`akiba.street.welcome`),
        n + i / 2,
        r + a * 0.1,
        r + a * 0.9,
        i * 0.62,
        `#ffffff`,
        g(),
        `900`,
      );
      return;
    }
    (_(
      t,
      N(`akiba.street.denkigai`),
      n + i * 0.42,
      r + a * 0.1,
      r + a * 0.9,
      i * 0.56,
      `#ffffff`,
      g(),
      `900`,
    ),
      t.save(),
      t.translate(n + i * 0.84, r + a / 2),
      t.rotate(Math.PI / 2),
      I(
        t,
        N(`akiba.street.akihabara`),
        0,
        0,
        a * 0.8,
        i * 0.22,
        `#ffe100`,
        `900`,
      ),
      t.restore());
  };
}
function Ye(e, t, n, r, i) {
  (D(e, t, n, r, i, `#ffe100`),
    D(e, t + r * 0.05, n + i * 0.04, r * 0.9, i * 0.36, `#e60012`),
    I(
      e,
      N(`akiba.street.kyakuhiki`),
      t + r / 2,
      n + i * 0.22,
      r * 0.84,
      i * 0.26,
      `#ffffff`,
      `900`,
    ),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#e60012`),
    (e.lineWidth = r * 0.05),
    e.beginPath(),
    e.arc(t + r * 0.28, n + i * 0.6, r * 0.16, 0, Math.PI * 2),
    e.moveTo(t + r * 0.17, n + i * 0.69),
    e.lineTo(t + r * 0.39, n + i * 0.51),
    e.stroke(),
    (e.fillStyle = `#202020`),
    e.beginPath(),
    e.arc(t + r * 0.28, n + i * 0.56, r * 0.04, 0, Math.PI * 2),
    e.fill(),
    e.fillRect(t + r * 0.25, n + i * 0.6, r * 0.06, i * 0.08),
    I(
      e,
      N(`akiba.street.kyakuhiki-sub`),
      t + r * 0.7,
      n + i * 0.6,
      r * 0.52,
      i * 0.1,
      `#202020`,
      `800`,
    ),
    I(
      e,
      N(`akiba.street.kyakuhiki-ward`),
      t + r / 2,
      n + i * 0.88,
      r * 0.5,
      i * 0.11,
      `#202020`,
      `900`,
    ));
}
function Xe(e, t, n, r, i) {
  (D(e, t, n, r, i, `#ffffff`),
    D(e, t, n, r, i * 0.3, `#008a4a`),
    I(
      e,
      N(`common.safety.rojo-kinen`),
      t + r / 2,
      n + i * 0.15,
      r * 0.9,
      i * 0.2,
      `#ffffff`,
      `900`,
    ),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#e60012`),
    (e.lineWidth = r * 0.05),
    e.beginPath(),
    e.arc(t + r / 2, n + i * 0.58, r * 0.2, 0, Math.PI * 2),
    e.moveTo(t + r * 0.36, n + i * 0.69),
    e.lineTo(t + r * 0.64, n + i * 0.47),
    e.stroke(),
    D(e, t + r * 0.36, n + i * 0.56, r * 0.24, i * 0.04, `#404040`),
    I(
      e,
      N(`akiba.street.kyakuhiki-ward`),
      t + r / 2,
      n + i * 0.9,
      r * 0.5,
      i * 0.1,
      `#202020`,
      `900`,
    ));
}
function Ze(e, r, i, a, o) {
  for (let s = 0; s < 2; s++) {
    let c = i + (o / 2) * s,
      l = o / 2,
      u = s ? `#ffd6e6` : `#f4f4f6`;
    (D(e, r + a * 0.04, c + l * 0.03, a * 0.92, l * 0.94, u),
      D(e, r + a * 0.12, c + l * 0.08, a * 0.76, l * 0.42, `#d8eef6`));
    let d = new t(n(`gf`, s));
    for (let t = 0; t < 12; t++)
      ((e.fillStyle = [
        `#ff4060`,
        `#40a0ff`,
        `#ffd040`,
        `#60d060`,
        `#ffffff`,
        `#c060ff`,
      ][t % 6]),
        e.beginPath(),
        e.arc(
          r + a * (0.2 + d.next() * 0.6),
          c + l * (0.18 + d.next() * 0.28),
          a * 0.07,
          0,
          Math.PI * 2,
        ),
        e.fill());
    (D(
      e,
      r + a * 0.12,
      c + l * 0.54,
      a * 0.76,
      l * 0.22,
      s ? `#3a8aff` : `#ff7a3a`,
    ),
      I(
        e,
        s ? `¥400` : `¥300`,
        r + a * 0.5,
        c + l * 0.65,
        a * 0.5,
        l * 0.14,
        `#ffffff`,
        `900`,
      ),
      (e.fillStyle = `#7a7a84`),
      e.beginPath(),
      e.arc(r + a * 0.5, c + l * 0.86, a * 0.09, 0, Math.PI * 2),
      e.fill());
  }
}
function Qe(e, n, r, i, a) {
  (D(e, n, r, i, a, `#ff2d87`),
    D(e, n + i * 0.08, r + a * 0.1, i * 0.84, a * 0.5, `#f8fcff`));
  let o = new t(77);
  for (let t = 0; t < 9; t++)
    ((e.fillStyle = [
      `#ffb0c8`,
      `#ffe080`,
      `#a0d8ff`,
      `#c8a0ff`,
      `#ffffff`,
      `#ff8060`,
    ][t % 6]),
      e.beginPath(),
      e.arc(
        n + i * (0.2 + o.next() * 0.6),
        r + a * (0.45 + o.next() * 0.12),
        i * 0.09,
        0,
        Math.PI * 2,
      ),
      e.fill());
  (D(e, n + i * 0.47, r + a * 0.1, i * 0.06, a * 0.12, `#c8c8d0`),
    D(e, n + i * 0.38, r + a * 0.21, i * 0.24, a * 0.025, `#c8c8d0`),
    D(e, n + i * 0.08, r + a * 0.64, i * 0.84, a * 0.1, `#202028`),
    I(e, `¥100`, n + i / 2, r + a * 0.69, i * 0.6, a * 0.07, `#ffe100`, `900`),
    D(e, n, r, i, a * 0.06, `#ffe100`));
}
function $e(e) {
  return (t, n, r, i, a) => {
    if (e === `maid`) {
      (D(t, n, r, i, a, `#ffe0f0`),
        D(t, n + i * 0.06, r + a * 0.04, i * 0.88, a * 0.2, `#ff5aa0`),
        I(
          t,
          N(`akiba.maid.name.1`),
          n + i / 2,
          r + a * 0.14,
          i * 0.8,
          a * 0.14,
          `#ffffff`,
          `900`,
        ),
        I(
          t,
          P(`akiba.maid.aboard`, { n: 3 }),
          n + i / 2,
          r + a * 0.36,
          i * 0.86,
          a * 0.1,
          `#e0407a`,
          `900`,
        ),
        I(
          t,
          N(`akiba.maid.menu`),
          n + i / 2,
          r + a * 0.52,
          i * 0.86,
          a * 0.08,
          `#e0407a`,
          `800`,
        ),
        I(
          t,
          P(`akiba.maid.time`, { price: `¥800` }),
          n + i / 2,
          r + a * 0.66,
          i * 0.8,
          a * 0.09,
          `#e0407a`,
          `900`,
        ));
      for (let e = 0; e < 5; e++)
        I(
          t,
          `♡`,
          n + i * (0.15 + e * 0.17),
          r + a * 0.86,
          i * 0.14,
          a * 0.12,
          `#ff4a8a`,
        );
    } else
      (D(t, n, r, i, a, `#101010`),
        D(t, n + i * 0.05, r + a * 0.04, i * 0.9, a * 0.92, `#1e3a1e`),
        I(
          t,
          N(`trade.junk.sign.junk`),
          n + i / 2,
          r + a * 0.13,
          i * 0.8,
          a * 0.14,
          `#ffe100`,
          `900`,
        ),
        I(
          t,
          P(`akiba.junk.note`, { price: `¥3,980` }),
          n + i / 2,
          r + a * 0.34,
          i * 0.86,
          a * 0.09,
          `#ffffff`,
          `800`,
        ),
        I(
          t,
          N(`akiba.junk.hdd`),
          n + i / 2,
          r + a * 0.48,
          i * 0.86,
          a * 0.09,
          `#ffffff`,
          `800`,
        ),
        I(
          t,
          N(`akiba.junk.mother`),
          n + i / 2,
          r + a * 0.62,
          i * 0.86,
          a * 0.09,
          `#ffffff`,
          `800`,
        ),
        I(
          t,
          N(`trade.junk.sign.henpin`),
          n + i / 2,
          r + a * 0.82,
          i * 0.7,
          a * 0.1,
          `#ff6060`,
          `900`,
        ));
  };
}
function et(e, t, n, r, i) {
  D(e, t, n, r, i, `#b48a52`);
  for (let a = 0; a < 3; a++) {
    let o = t + (a * r) / 3;
    (D(e, o + 2, n + 2, r / 3 - 4, i - 4, [`#c49a62`, `#a87e48`, `#bc9258`][a]),
      D(e, o + r * 0.04, n + i * 0.3, r / 3 - r * 0.08, i * 0.38, `#ffffff`),
      I(
        e,
        [
          P(`akiba.junk.bin`, { price: `¥100` }),
          P(`akiba.junk.cable`, { price: `¥200` }),
          N(`akiba.junk.hdd`),
        ][a],
        o + r / 6,
        n + i * 0.49,
        r / 3 - r * 0.1,
        i * 0.3,
        `#c00000`,
        `900`,
      ));
  }
}
function tt(e, t, n, r, i) {
  (D(e, t, n, r, i, `#f0f0f0`),
    D(e, t, n, r, i * 0.16, `#c01818`),
    I(
      e,
      N(`akiba.shop.oden`),
      t + r / 2,
      n + i * 0.08,
      r * 0.86,
      i * 0.1,
      `#ffffff`,
      `900`,
    ));
  for (let a = 0; a < 3; a++)
    for (let o = 0; o < 4; o++) {
      let s = t + r * (0.08 + o * 0.22),
        c = n + i * (0.2 + a * 0.14);
      (D(
        e,
        s,
        c,
        r * 0.18,
        i * 0.1,
        [`#e8c060`, `#c04020`, `#f0f0e0`, `#4060a0`][(a + o) % 4],
      ),
        D(e, s, c + i * 0.105, r * 0.18, i * 0.02, `#202020`));
    }
  (D(e, t + r * 0.1, n + i * 0.66, r * 0.8, i * 0.1, `#303038`),
    D(e, t + r * 0.2, n + i * 0.84, r * 0.6, i * 0.1, `#202024`));
}
function nt(e, t, n, r, i) {
  (D(e, t, n, r, i, `#ffffff`),
    D(e, t, n, r, i * 0.32, `#1d5aa8`),
    I(
      e,
      N(`akiba.street.hokoten-board`),
      t + r / 2,
      n + i * 0.16,
      r * 0.9,
      i * 0.22,
      `#ffffff`,
      `900`,
    ),
    I(
      e,
      N(`akiba.street.hokoten-hours`),
      t + r / 2,
      n + i * 0.48,
      r * 0.92,
      i * 0.12,
      `#1a1a1a`,
      `800`,
    ),
    I(
      e,
      N(`akiba.street.hokoten-rule`),
      t + r / 2,
      n + i * 0.66,
      r * 0.92,
      i * 0.1,
      `#c01818`,
      `800`,
    ),
    I(
      e,
      N(`akiba.street.satsuei`),
      t + r / 2,
      n + i * 0.82,
      r * 0.92,
      i * 0.09,
      `#1a1a1a`,
      `700`,
    ));
}
function rt(e, t, n, r, i) {
  (D(e, t, n, r, i, `#5a4a32`),
    D(e, t + 3, n + 3, r - 6, i - 6, `#2c241a`),
    I(
      e,
      N(`akiba.bridge.plate`),
      t + r * 0.32,
      n + i / 2,
      r * 0.5,
      i * 0.66,
      `#d8c8a0`,
      `800`,
      y(),
    ),
    I(
      e,
      N(`akiba.bridge.plate-kana`),
      t + r * 0.76,
      n + i / 2,
      r * 0.4,
      i * 0.36,
      `#d8c8a0`,
      `700`,
      y(),
    ));
}
function it(e) {
  let t = [],
    n = new c(1024, 1536),
    r = e.white(),
    i = (e, r) => {
      (n.reset(), r(n), t.push({ name: e, geo: d(n, `akiba-kit-${e}`) }));
    };
  for (let t of [0, 1, 2])
    i(`banner:${t}`, (n) => {
      let i = e.uv(`banner:${t}`);
      (n.setMaterial(0.6, 0.5, 0, 0), A(n, 9080466));
      for (let e of [1, -1])
        (be(n, 0, 6.15, 0, 0, 6.15, e * 0.95, 0.025, r),
          be(n, 0, 4.05, 0, 0, 4.05, e * 0.95, 0.025, r));
      (n.setMaterial(0.8, 0, 0.22, 19), A(n, 16777215));
      for (let e of [1, -1]) {
        let t = e > 0 ? 0.18 : -0.92,
          r = e > 0 ? 0.92 : -0.18;
        (j(n, 0.012, r, 0.012, t, 4, 6.1, i),
          j(n, -0.012, t, -0.012, r, 4, 6.1, i));
      }
    });
  for (let t of [`kyakuhiki`, `rojo`])
    i(t, (n) => {
      let i = e.uv(t);
      (n.setMaterial(0.6, 0, 0, 0),
        A(n, 16777215),
        j(n, -0.22, 0.16, 0.22, 0.16, 1.85, 2.45, i),
        j(n, 0.22, 0.14, -0.22, 0.14, 1.85, 2.45, i),
        A(n, 7369848),
        be(n, 0, 2, 0.05, 0, 2, 0.15, 0.02, r),
        be(n, 0, 2.3, 0.05, 0, 2.3, 0.15, 0.02, r));
    });
  (i(`post`, (e) => {
    (e.setMaterial(0.6, 0.4, 0, 0),
      A(e, 10133668),
      ye(e, 0, 0, 0, 2.6, 0.04, r, 6));
  }),
    i(`gacha`, (t) => {
      let n = e.uv(`gachafront`);
      t.setMaterial(0.4, 0.1, 0.12, 17);
      for (let e = 0; e < 4; e++)
        (A(t, 16777215),
          M(t, -1.2 + e * 0.8, 0, 0.1, 1.85, 0.38, 0.3, 0, 1, r, n));
    }),
    i(`crane`, (t) => {
      let n = e.uv(`cranefront`);
      (t.setMaterial(0.4, 0.2, 0, 0),
        A(t, 15215242),
        M(t, 0, 0, 0, 0.95, 0.5, 0.45, 0, 1, r),
        t.setMaterial(0.15, 0.1, 0.3, 17),
        A(t, 16777215),
        M(t, 0, 0, 0.95, 1.95, 0.5, 0.45, 0, 1, n, n, n),
        t.setMaterial(0.4, 0.2, 0.35, 16),
        A(t, 16769280),
        M(t, 0, 0, 1.95, 2.2, 0.5, 0.45, 0, 1, r));
    }));
  for (let t of [`maid`, `junk`])
    i(`aboard:${t}`, (n) => {
      let r = e.uv(`aboard:${t}`);
      (n.setMaterial(0.7, 0, 0.06, 1), A(n, 16777215));
      let i = 0.18;
      (n.quad(
        -0.3,
        0,
        i,
        0.3,
        0,
        i,
        0.3,
        1,
        0.02,
        -0.3,
        1,
        0.02,
        r.u0,
        r.v0,
        r.u1,
        r.v1,
      ),
        n.quad(
          0.3,
          0,
          -0.18,
          -0.3,
          0,
          -0.18,
          -0.3,
          1,
          -0.02,
          0.3,
          1,
          -0.02,
          r.u0,
          r.v0,
          r.u1,
          r.v1,
        ));
    });
  return (
    i(`junk`, (t) => {
      (t.setMaterial(0.7, 0.3, 0, 0),
        A(t, 9080466),
        M(t, 0, 0, 0, 0.75, 0.75, 0.35, 0, 1, r),
        t.setMaterial(0.85, 0, 0.05, 1),
        A(t, 16777215),
        M(
          t,
          0,
          0,
          0.75,
          1.05,
          0.72,
          0.33,
          0,
          1,
          e.uv(`shop:junk-out`),
          e.uv(`junkbox`),
        ));
    }),
    i(`vendcan`, (t) => {
      (t.setMaterial(0.4, 0.2, 0.25, 1),
        A(t, 16777215),
        M(t, 0, 0, 0, 1.83, 0.5, 0.35, 0, 1, r, e.uv(`vendcan`)));
    }),
    i(`hokoten`, (t) => {
      (t.setMaterial(0.6, 0.4, 0, 0), A(t, 10133668));
      for (let e of [-0.75, 0.75]) ye(t, e, 0, 0, 2.4, 0.04, r, 6);
      (t.setMaterial(0.6, 0, 0.05, 1),
        A(t, 16777215),
        M(
          t,
          0,
          0,
          1.35,
          2.35,
          0.85,
          0.03,
          0,
          1,
          r,
          e.uv(`hokoten`),
          e.uv(`hokoten`),
        ));
    }),
    i(`mansei-lamp`, (t) => {
      (t.setMaterial(0.9, 0, 0, 0),
        A(t, 12103840),
        M(t, 0, 0, 0, 1.6, 0.45, 0.45, 0, 1, r, e.uv(`bridgeplate`)),
        t.setMaterial(0.5, 0.6, 0, 0),
        A(t, 2763308),
        ye(t, 0, 0, 1.6, 3.6, 0.07, r, 6),
        t.setMaterial(0.3, 0, 0.4, 1),
        A(t, 16773320),
        M(t, 0, 0, 3.6, 4.15, 0.2, 0.2, 0, 1, r),
        t.setMaterial(0.5, 0.6, 0, 0),
        A(t, 2763308),
        M(t, 0, 0, 4.15, 4.3, 0.26, 0.26, 0, 1, r));
    }),
    t
  );
}
function at(e, r, i) {
  let a = e.plan,
    o = [],
    s = [],
    c = new t(n(`akiba-kit`, 1)),
    l = a.dataset.sidewalkHeight ?? 0.15,
    u = p(a),
    d = a.roads.find((e) => e.id === `chuo-akihabara`);
  if (d) {
    let e = u.nodesOf(d);
    for (let t = 0; t + 1 < e.length; t++)
      for (let n of [-1, 1]) {
        let r = u.primaryLights(d, e[t], e[t + 1], n);
        if (r && r.kind === `tall`)
          for (let e of r.ts) {
            if (e < ae.hokotenZ0 || e > ae.hokotenZ1) continue;
            let t = d.at + n * (d.halfWidth + 0.55),
              r = e;
            (o.push({
              model: `banner:${Math.floor(c.next() * 3)}`,
              x: t,
              y: l,
              z: r,
              fx: -n,
              fz: 0,
              range: 260,
            }),
              o.push({
                model: Math.round(e) & 1 ? `rojo` : `kyakuhiki`,
                x: t,
                y: l,
                z: r,
                fx: n,
                fz: 0,
                range: 90,
              }));
          }
      }
  }
  let f = me(),
    m = a.roads.find(
      (e) =>
        e.axis === `z` &&
        Math.abs(e.at - oe.x) < 1 &&
        e.from <= -700 &&
        e.to >= -650,
    ),
    h = m ? m.at + m.halfTotal - 0.6 : oe.x + 5.6;
  for (let e = oe.z0 + 14; e < oe.z1 - 8; e += 26)
    (e > -655 && e < -632) ||
      (o.push({ model: `post`, x: h, y: 0, z: e, fx: -1, fz: 0, range: 90 }),
      o.push({
        model: `kyakuhiki`,
        x: h,
        y: 0,
        z: e,
        fx: -1,
        fz: 0,
        range: 90,
      }),
      s.push({ x: h, z: e, r: 0.06, h: 2.6 }));
  for (let e of f) {
    let t = (e.z0 + e.z1) / 2;
    if (e.dir === `W` && e.x0 < -175) {
      let n = e.x0 - 0.75;
      (e.kind === `maid` &&
        o.push({
          model: `aboard:maid`,
          x: n,
          y: 0,
          z: t + 1.6,
          fx: -1,
          fz: 0,
          range: 110,
          when: (e) => e >= 11 && e < 22,
        }),
        (e.kind === `junk` || e.shop === `junk`) &&
          (o.push({
            model: `junk`,
            x: e.x0 - 0.55,
            y: 0,
            z: t - 1.2,
            fx: -1,
            fz: 0,
            range: 110,
            when: (e) => e >= 11 && e < 20,
          }),
          o.push({
            model: `aboard:junk`,
            x: n - 0.2,
            y: 0,
            z: t + 1.8,
            fx: -1,
            fz: 0,
            range: 110,
            when: (e) => e >= 11 && e < 20,
          })));
    }
    let n =
      e.dir === `E` ? { x: e.x1 + 0.45, fx: 1 } : { x: e.x0 - 0.45, fx: -1 };
    if (
      (e.shop === `gacha` &&
        o.push({
          model: `gacha`,
          x: n.x,
          y: e.dir === `E` || e.x0 > -150 ? l : 0,
          z: t,
          fx: n.fx,
          fz: 0,
          range: 120,
          when: (e) => e >= 11 && e < 22,
        }),
      e.shop === `crane` && i >= 0)
    )
      for (let r of [-(e.z1 - e.z0) * 0.28, (e.z1 - e.z0) * 0.28])
        o.push({
          model: `crane`,
          x: n.x,
          y: l,
          z: t + r,
          fx: n.fx,
          fz: 0,
          range: 120,
          when: (e) => e >= 10 || e < 0.5,
        });
  }
  if (
    (o.push({
      model: `vendcan`,
      x: h - 0.1,
      y: 0,
      z: -703.5,
      fx: -1,
      fz: 0,
      range: 120,
    }),
    s.push({ x: h - 0.1, z: -703.5, r: 0.45, h: 1.9 }),
    d)
  ) {
    let e = d.at + d.halfWidth + 1.6;
    for (let t of [ae.hokotenZ0 + 22, ae.hokotenZ1 - 22])
      (o.push({
        model: `hokoten`,
        x: e,
        y: l,
        z: t,
        fx: -1,
        fz: 0,
        range: 160,
      }),
        s.push({ x: e, z: t, r: 0.9, h: 2.4 }));
  }
  let g = (a.dataset.bridges ?? []).find(
    (e) =>
      e.road === `chuo-akihabara` ||
      (e.minX < -145 && e.maxX > -145 && e.over === `kanda`),
  );
  if (g)
    for (let e of [g.minZ + 0.5, g.maxZ - 0.5])
      for (let t of [g.minX + 0.5, g.maxX - 0.5])
        (o.push({
          model: `mansei-lamp`,
          x: t,
          y: l,
          z: e,
          fx: t < -145 ? 1 : -1,
          fz: 0,
          range: 300,
        }),
          s.push({ x: t, z: e, r: 0.5, h: 1.6 }));
  return { instances: o, circles: s, count: o.length, tris: 0 };
}
var ot = 3.9,
  st = 1.6,
  ct = 1.2,
  lt = -200,
  ut = -148,
  G = [
    { kind: `cafe`, name: `akiba.maach.cafe` },
    { kind: `craft`, name: `akiba.maach.zakka` },
    { kind: `craft`, name: `akiba.maach.beer` },
    { kind: `books`, name: `akiba.maach.books` },
  ],
  dt = (e) => ({ main: G[e % G.length].name, bg: `#1c1a18`, fg: `#e8d8b0` });
function ft(e) {
  for (let t = 0; t < G.length; t++) {
    e.need(`maach:${t}`, 192, 128, je(G[t].kind, 30 + t));
    let n = dt(t);
    e.need(`maachplate:${t}`, 256, 40, Ee(n));
  }
  e.need(
    `maachplace`,
    320,
    48,
    Ee({
      main: `akiba.maach.place`,
      sub: `akiba.maach.1912`,
      bg: `#2a2420`,
      fg: `#f0e0c0`,
    }),
  );
}
var K = { x: 0, z: 0 },
  q = { x: 0, z: 0, tx: 0, tz: 0 };
function pt(e, t, n) {
  let r = x(t)?.byId.get(`jr-chuo`);
  if (!r) return;
  let i = n.white(),
    a = 0;
  for (let [t, o] of r.brick)
    for (let s = Math.floor(t / 8) * 8; s < o; s += 8) {
      if (
        s < t - 0.01 ||
        s + 8 > o + 0.01 ||
        (r.path.at(s + 4, q), q.x < lt || q.x > ut)
      )
        continue;
      let c = s + st,
        u = s + 8,
        d = u - c,
        f = (e) => {
          let t = ((e - c) / d) * 2 - 1;
          return ot + 2.0000000000000004 * Math.sqrt(Math.max(0, 1 - t * t));
        },
        p = r.deck.at(s) - ct;
      for (let t of [-1, 1]) {
        let o = t < 0 ? r.edge0.at(s) : r.edge1.at(s),
          m = o - t * (l - 0.08),
          h = a++ % G.length,
          g = (e, t) => (r.path.pos(e, t, K), [K.x, K.z]),
          _ = t < 0;
        for (let r = 0; r < 8; r++) {
          let a = c + (d * r) / 8,
            o = c + (d * (r + 1)) / 8,
            s = Math.min(f(a), p),
            l = Math.min(f(o), p),
            [u, v] = g(_ ? o : a, m),
            [y, b] = g(_ ? a : o, m),
            x = _ ? l : s,
            S = _ ? s : l,
            C = _ ? 1 - (r + 1) / 8 : r / 8,
            w = _ ? 1 - r / 8 : (r + 1) / 8;
          if (
            (e.setMaterial(0.2, 0.2, 0.2, 17),
            A(e, 16777215),
            _e(e, u, v, y, b, 0, 2.6, n.uv(`maach:${h}`), C, w, 0, 1),
            e.setMaterial(0.12, 0.5, 0.1, 17),
            A(e, 5917242),
            e.quad(
              u,
              2.6,
              v,
              y,
              2.6,
              b,
              y,
              S,
              b,
              u,
              x,
              v,
              i.u0,
              i.v0,
              i.u1,
              i.v1,
            ),
            r % 2 == 0)
          ) {
            (e.setMaterial(0.5, 0.6, 0, 0), A(e, 1710620));
            let [n, r] = g(a, m + t * 0.03),
              [o, c] = g(a + 0.07, m + t * 0.03),
              [l, u] = _ ? [o, c] : [n, r],
              [d, f] = _ ? [n, r] : [o, c];
            j(e, l, u, d, f, 0, Math.max(s, 2.6), i);
          }
        }
        (e.setMaterial(0.5, 0.6, 0, 0), A(e, 1710620));
        {
          let [n, r] = g(_ ? u : c, m + t * 0.04),
            [a, o] = g(_ ? c : u, m + t * 0.04);
          j(e, n, r, a, o, 2.55, 2.68, i);
        }
        (e.setMaterial(0.5, 0, 0.25, 19), A(e, 16777215));
        let v = (c + u) / 2;
        {
          let [r, i] = g(_ ? v + 1.4 : v - 1.4, o - t * 0.5),
            [a, s] = g(_ ? v - 1.4 : v + 1.4, o - t * 0.5);
          j(e, r, i, a, s, 3, 3.42, n.uv(`maachplate:${h}`));
        }
      }
    }
  let [o, s] = r.brick[0] ?? [0, 0];
  if (s > o) {
    for (let t = Math.floor(o / 8) * 8; t < s; t += 8)
      if ((r.path.at(t, q), q.x > -158 && q.x < -144)) {
        let i = r.edge0.at(t);
        r.path.pos(t - 1.6, i + -0.06, K);
        let a = K.x,
          o = K.z;
        (r.path.pos(t + 1.6, i + -0.06, K),
          e.setMaterial(0.5, 0, 0.2, 3),
          A(e, 16777215),
          j(e, K.x, K.z, a, o, 4.4, 4.9, n.uv(`maachplace`)));
        break;
      }
  }
}
var mt = [
    [1, `akiba.wrap.movie`, `akiba.word.akiba`],
    [2, `akiba.wrap.rpg`, `akiba.wrap.rpg-sub`],
    [4, `akiba.wrap.anisong`, `akiba.word.akiba`],
    [3, `akiba.wrap.idol`, `akiba.word.akiba`],
  ],
  ht = `jy-akihabara`;
function gt(e) {
  for (let t of mt) e.need(`poster:${t.join(`|`)}`, 288, 128, Pe(...t));
}
var J = { x: 0, z: 0, tx: 0, tz: 0 },
  Y = { x: 0, z: 0 };
function _t(e, t, n) {
  let r = f(t),
    i = r?.m.byId.get(`jr-main`),
    a = i?.platforms.find((e) => e.id === ht),
    o = a && r?.geo.walls.get(a.id);
  if (!r || !i || !a || !o) return;
  let s = [];
  for (let e of r.geo.entrances) {
    if (e.kind !== `jr`) continue;
    let t = i.path.project(e.cx, e.cz);
    if (t.d > 30) continue;
    (i.path.at(t.s, J), i.path.pos(t.s, 0, Y));
    let n = (e.cx - Y.x) * -J.tz + (e.cz - Y.z) * J.tx;
    s.push([t.s, n < 0 ? -1 : 1]);
  }
  let c = i.deck.at(a.sc) - 1.2 - 0.9,
    l = 3.25,
    u = Math.min(c - 0.5, 5.35);
  if (u - l < 1.2) return;
  let d = ((u - l) * 2.25) / 2,
    p = 0;
  for (let t of [-1, 1]) {
    let r = o[t < 0 ? 0 : 1];
    if (Number.isFinite(r))
      for (let o of [-31, -10.5, 10.5, 31]) {
        let c = a.sc + o;
        if (
          s.some(([e, n]) => n === t && Math.abs(e - c) < d + 4) ||
          Math.abs(Math.abs(o) - 20) < d + 3.8
        )
          continue;
        (i.path.at(c, J), i.path.pos(c, r + t * 0.42, Y));
        let f = Y.x - J.tx * d,
          m = Y.z - J.tz * d,
          h = Y.x + J.tx * d,
          g = Y.z + J.tz * d,
          _ = mt[p++ % mt.length];
        (e.setMaterial(0.4, 0, 0.22, 3), A(e, 16777215));
        let v = n.uv(`poster:${_.join(`|`)}`);
        (t > 0 ? j(e, f, m, h, g, l, u, v) : j(e, h, g, f, m, l, u, v),
          e.setMaterial(0.5, 0.6, 0, 0),
          A(e, 10133154),
          i.path.pos(c, r + t * 0.38, Y));
        let y = Y.x - J.tx * (d + 0.08),
          b = Y.z - J.tz * (d + 0.08),
          x = Y.x + J.tx * (d + 0.08),
          S = Y.z + J.tz * (d + 0.08);
        t > 0
          ? j(e, y, b, x, S, 3.17, u + 0.08, n.white())
          : j(e, x, S, y, b, 3.17, u + 0.08, n.white());
      }
  }
}
var vt = e({
    init: () => Ct,
    start: () => wt,
    storefront: () => Dt,
    unload: () => Ot,
    update: () => Et,
  }),
  X = null,
  yt = !1,
  Z = !1,
  bt = -1,
  Q = new Map(),
  xt = Error(`akihabara: dropped while building`);
function St(e) {
  for (let [t, n] of Object.entries(k))
    e.plan.blocks.find(
      (e) =>
        Math.abs(e.minX - n.minX) < 0.6 &&
        Math.abs(e.minZ - n.minZ) < 0.6 &&
        Math.abs(e.maxX - n.maxX) < 0.6 &&
        Math.abs(e.maxZ - n.maxZ) < 0.6,
    ) ||
      console.warn(
        `[akihabara] block ${t} no longer matches the plan (layout.ts BLOCKS)`,
      );
}
async function Ct(e) {
  if (yt || X) return;
  ((yt = !0), (Z = !1));
  let t = performance.now(),
    n = 0,
    r = ``,
    i = performance.now(),
    l = async (t = !1, a = ``) => {
      let o = performance.now() - i;
      if (t || o > 1.2) {
        if ((o > n && ((n = o), (r = a)), await e.yieldFrame(), Z)) throw xt;
        i = performance.now();
      }
    };
  try {
    St(e);
    let f =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      p = me(),
      m = new te(),
      h = Be(m, p);
    if (
      (qe(m),
      ft(m),
      gt(m),
      await l(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      Z)
    )
      throw xt;
    i = performance.now();
    let g = s(2048, e.quality),
      _ = m.paint(g),
      v = _.next();
    for (; !v.done;) (await l(!1, `paint`), (v = _.next()));
    let y = v.value,
      b = [],
      x = new c(8192, 12288),
      S = [],
      C = 0;
    for (let e of p) {
      x.reset();
      let t = Ge(x, e, h.get(e.id), m, f),
        n = d(x, `akiba-${e.id}`);
      ((C += x.ni / 3),
        b.push({ name: `hero:${e.id}`, geo: n }),
        S.push({ hero: e, h: t.h, name: `hero:${e.id}` }),
        await l(!1, `hero`));
    }
    (x.reset(),
      pt(x, e.plan, m),
      x.n &&
        (b.push({ name: `maach`, geo: d(x, `akiba-maach`) }), (C += x.ni / 3)),
      await l(!1, `maach`),
      x.reset(),
      _t(x, e.plan, m),
      x.n &&
        (b.push({ name: `station`, geo: d(x, `akiba-station`) }),
        (C += x.ni / 3)),
      await l(!1, `station`));
    for (let e of it(m)) b.push(e);
    await l(!1, `kit`);
    let w = at(e, m, f),
      ee = o(`opaque`, {
        policy: e.quality.materials,
        map: y,
        batched: !0,
        name: `akihabara`,
      }),
      T = new u(
        `akihabara`,
        ee,
        b,
        p.length + 8 + w.count + 32,
        !!e.quality.shadows,
      );
    ((T.mesh.userData.owner = `akihabara`), T.enableCulling(e.camera));
    for (let e of S) {
      let t = e.hero;
      T.add(
        T.models.get(e.name),
        Se,
        (t.x0 + t.x1) / 2,
        (t.z0 + t.z1) / 2,
        900,
      );
    }
    (T.models.has(`maach`) && T.add(T.models.get(`maach`), Se, -175, -566, 520),
      T.models.has(`station`) &&
        T.add(T.models.get(`station`), Se, -40, -644, 420));
    let E = [],
      D = new Float32Array(16);
    for (let e of w.instances) {
      xe(D, e.x, e.y, e.z, e.fx, e.fz, e.s ?? 1);
      let t = T.add(T.models.get(e.model), D, e.x, e.z, e.range, !e.when);
      e.when && E.push({ id: t, on: e.when, state: !1 });
    }
    await l(!1, `batch`);
    let O = 0;
    for (let t of S) {
      let n = t.hero;
      (e.statics.addOBB(
        (n.x0 + n.x1) / 2,
        (n.z0 + n.z1) / 2,
        (n.x1 - n.x0) / 2,
        (n.z1 - n.z0) / 2,
        0,
        0,
        t.h,
        `building`,
      ),
        O++);
    }
    for (let t of w.circles)
      (e.statics.addCircle(t.x, t.z, t.r, 0, t.h, `pole`), O++);
    Q.clear();
    for (let t of S) {
      let n = t.hero.poi;
      if (!n) continue;
      let r = [...e.plan.pois, ...(e.plan.claimedPois ?? [])].find(
          (e) => e.id === n.id,
        ),
        i = t.hero,
        [a, o] =
          n.dir === `E`
            ? [1, 0]
            : n.dir === `W`
              ? [-1, 0]
              : n.dir === `N`
                ? [0, -1]
                : [0, 1],
        s = o,
        c = -a,
        l = a ? (a > 0 ? i.x1 : i.x0) : s > 0 ? i.x0 : i.x1,
        u = o ? (o > 0 ? i.z1 : i.z0) : c > 0 ? i.z0 : i.z1,
        d = l + s * n.at + a * 0.6,
        f = u + c * n.at + o * 0.6;
      Q.set(n.id, {
        x: d,
        z: f,
        facing: Math.atan2(a, -o),
        width: n.width,
        height: 3.2,
        poiId: n.id,
        kind: r?.kind ?? n.kind,
        brand: r?.brand,
        name: n.name,
        category: n.category,
        hours: n.hours,
      });
    }
    if (Z) throw xt;
    e.scene.add(T.mesh);
    let k = e.params.has(`akibaatlas`);
    (k || a(y),
      (X = {
        batch: T,
        tex: y,
        kit: w,
        timed: E,
        stats: {
          heroes: p.length,
          tris: Math.round(C + w.tris),
          models: b.length,
          instances: T.count,
          atlas: g,
          atlasUsed: m.used,
          overflow: m.overflow,
          colliders: O,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: r,
          slowCell: `${m.slowKey} ${m.slowMs.toFixed(1)}`,
        },
      }));
    for (let e of b) e.geo.dispose();
    ((e.params.has(`debug`) || e.params.has(`akibatest`)) &&
      (window.__akiba = {
        stats: () => X?.stats,
        batch: () =>
          X && {
            count: X.batch.count,
            shown: X.batch.shown,
            tris: X.batch.shownTris,
          },
        storefronts: () => [...Q.values()],
        atlas: () => (k ? y.image.toDataURL(`image/png`) : null),
      }),
      console.info(
        `[init] districts:akihabara ${X.stats.heroes} buildings, ${X.stats.tris} tris, atlas ${g} (${m.used}/2048 used, ${m.overflow} overflow), ${O} colliders, ${X.stats.buildMs} ms (slice max ${X.stats.maxSliceMs} ms)`,
      ));
  } catch (e) {
    if (e !== xt) throw e;
  } finally {
    yt = !1;
  }
}
function wt(e) {
  bt = -1;
}
var Tt = { k: 1 };
function Et(e, t) {
  let n = X;
  if (!n) return;
  let r = t.camera.position;
  ((Tt.k = 1), n.batch.regather(r.x, r.z, Tt.k, 8));
  let i = t.time.elapsed;
  if (i - bt < 1) return;
  bt = i;
  let a = t.env?.hour ?? 12,
    o = t.time.weekday === 0;
  for (let e of n.timed) {
    let t = e.on(a, o);
    t !== e.state && ((e.state = t), n.batch.setOn(e.id, t));
  }
}
function Dt(e) {
  return Q.get(e) ?? null;
}
function Ot(e) {
  Z = !0;
  let t = X;
  ((X = null),
    Q.clear(),
    (bt = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
var kt = Math.PI / 2,
  $ = -Math.PI / 2,
  At = 0,
  jt = [
    {
      id: `tokyo:akihabara:sobu-bridge`,
      kind: `spot`,
      x: -145,
      z: -640,
      heading: At,
      radius: 220,
      label: {
        ja: `中央通り 総武線ガード`,
        zh: `中央通 總武線高架橋下`,
        en: `Chuo-dori under the Sobu Line bridge`,
      },
      note: `the classic view north into Electric Town: yellow 総武線 trains cross overhead`,
    },
    {
      id: `tokyo:akihabara:hokoten`,
      kind: `area`,
      x: -145,
      z: -691,
      radius: 260,
      hours: [13, 17],
      points: [
        [-155, -770],
        [-135, -770],
        [-135, -612],
        [-155, -612],
      ],
      label: {
        ja: `秋葉原 歩行者天国`,
        zh: `秋葉原 行人徒步區`,
        en: `Akihabara pedestrian Sunday`,
      },
      copyKey: `akiba.street.hokoten-board`,
      note: `Sundays only (警視庁); 13–17 October–March, 13–18 April–September; cancelled in bad weather. The carriageway of 中央通り 外神田五丁目 → 万世橋`,
    },
    {
      id: `tokyo:akihabara:hobby-rakuen`,
      kind: `entrance`,
      x: -128.7,
      z: -659.3,
      heading: $,
      radius: 160,
      hours: [10, 20],
      label: {
        ja: `ホビー楽園 秋葉原本店`,
        zh: `模型樂園 秋葉原總店`,
        en: `Hobby Rakuen Akihabara`,
      },
      copyKey: `akiba.hobby.name`,
      note: `the blue-and-white hobby / figure tower on 中央通り (parody); tenant floors of figures, cards, hobby`,
    },
    {
      id: `tokyo:akihabara:gacha-kaikan`,
      kind: `entrance`,
      x: -161.3,
      z: -746.5,
      heading: kt,
      radius: 150,
      hours: [11, 20],
      label: {
        ja: `秋葉原ガチャガチャ会館`,
        zh: `秋葉原扭蛋會館`,
        en: `Akihabara Gacha-gacha Kaikan`,
      },
      copyKey: `akiba.gacha.name`,
      note: `capsule-toy wall (≈ 500 machines in the real one); real hours Mon–Thu 11–20, Fri–Sat 11–22, Sun 11–19`,
    },
    {
      id: `tokyo:akihabara:tophat-arcade`,
      kind: `entrance`,
      x: -161.3,
      z: -657.9,
      heading: kt,
      radius: 160,
      hours: [10, 24],
      label: {
        ja: `トップハット秋葉原`,
        zh: `Top Hat 秋葉原`,
        en: `Top Hat Akihabara (arcade)`,
      },
      copyKey: `akiba.tophat.name`,
      note: `the red ex-Sega arcade at the bridge; crane-game cabinets in the front`,
    },
    {
      id: `tokyo:akihabara:doncoyote`,
      kind: `entrance`,
      x: -128.7,
      z: -737,
      heading: $,
      radius: 160,
      label: { ja: `ドン・コヨーテ`, zh: `唐吉郊狼`, en: `Don Coyote` },
      copyKey: `brand.doncoyote`,
    },
    {
      id: `tokyo:akihabara:softnap-pc`,
      kind: `entrance`,
      x: -161.3,
      z: -713.4,
      heading: kt,
      radius: 160,
      hours: [11, 20],
      label: {
        ja: `ソフトナップ PC館`,
        zh: `SoftNap 電腦館`,
        en: `SoftNap PC store`,
      },
      copyKey: `brand.softnap`,
      note: `T2-Interiors: the electronics-store walk-in candidate (door on 中央通り, west side)`,
    },
    {
      id: `tokyo:akihabara:mandarara`,
      kind: `entrance`,
      x: -184.2,
      z: -721.5,
      heading: $,
      radius: 150,
      hours: [12, 20],
      label: { ja: `まんだらら`, zh: `Mandarara`, en: `Mandarara` },
      copyKey: `brand.mandarara`,
      note: `T2-Interiors: the manga / collectibles walk-in candidate (the black building on the 裏通り)`,
    },
    {
      id: `tokyo:akihabara:maid-street`,
      kind: `spot`,
      x: -185.5,
      z: -737.5,
      heading: $,
      radius: 150,
      hours: [11, 22],
      label: {
        ja: `裏通り メイドカフェ前`,
        zh: `後街 女僕咖啡廳前`,
        en: `Back street, outside the maid cafés`,
      },
      note: `touts stand here (T2-Life); the 客引き行為禁止 plates are on the posts`,
    },
    {
      id: `tokyo:akihabara:denkigai-exit`,
      kind: `entrance`,
      x: -64,
      z: -650,
      heading: $,
      radius: 200,
      label: {
        ja: `秋葉原駅 電気街口`,
        zh: `秋葉原站 電器街口`,
        en: `Akihabara Station, Electric Town exit`,
      },
      copyKey: `akiba.station.welcome`,
    },
    {
      id: `tokyo:akihabara:manseibashi`,
      kind: `spot`,
      x: -145,
      z: -596,
      heading: At,
      radius: 220,
      label: { ja: `万世橋`, zh: `萬世橋`, en: `Manseibashi` },
      copyKey: `akiba.bridge.plate`,
    },
    {
      id: `tokyo:akihabara:maach`,
      kind: `area`,
      x: -174,
      z: -566,
      radius: 200,
      hours: [11, 22],
      points: [
        [-200, -576],
        [-148, -576],
        [-148, -556],
        [-200, -556],
      ],
      label: {
        ja: `万世橋高架下 レンガ回廊`,
        zh: `萬世橋高架下 紅磚迴廊`,
        en: `Manseibashi brick arches`,
      },
      copyKey: `akiba.maach.place`,
      note: `Mon–Sat 11–22, Sun 11–20:30`,
    },
    {
      id: `tokyo:akihabara:suehirocho`,
      kind: `spot`,
      x: -158,
      z: -764,
      heading: At,
      radius: 180,
      label: {
        ja: `外神田五丁目（末広町）`,
        zh: `外神田五丁目（末廣町）`,
        en: `Sotokanda 5 (Suehirocho)`,
      },
      note: `the 歩行者天国 north end; 末広町地域安全センター on the corner; Ginza Line exits`,
    },
    {
      id: `tokyo:akihabara:back-street-chase`,
      kind: `route`,
      x: -170,
      z: -700,
      radius: 300,
      points: [
        [-145, -765],
        [-190, -768],
        [-190, -700],
        [-145, -700],
        [-145, -650],
        [-145, -600],
      ],
      label: { ja: `裏通りの追跡`, zh: `後街追逐`, en: `Back-street chase` },
      note: `末広町 → 裏通り south → 神田明神通り → 中央通り under the 総武線 → 万世橋`,
    },
    {
      id: `tokyo:akihabara:parts-run`,
      kind: `route`,
      x: -120,
      z: -620,
      radius: 300,
      points: [
        [-64, -650],
        [-100, -644],
        [-145, -648],
        [-184, -656],
        [-190, -612],
        [-170, -580],
      ],
      label: { ja: `部品の買い出し`, zh: `跑腿買零件`, en: `Parts run` },
      note: `電気街口 → the parts lanes under the 総武線 (T2-Sites) → 東京電波デパート on the 裏通り → mAAch`,
    },
  ];
export { ie as i, vt as n, re as r, jt as t };
