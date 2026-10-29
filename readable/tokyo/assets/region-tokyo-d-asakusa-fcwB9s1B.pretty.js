import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import {
  F as t,
  I as n,
  Lr as r,
  P as i,
  _n as a,
  dn as o,
  hn as s,
  kt as c,
  mn as l,
} from "./engine-14d5lda2.js";
import {
  At as u,
  Bt as d,
  Ct as f,
  Dn as p,
  Dt as m,
  Et as h,
  Ft as g,
  Gt as _,
  Ht as v,
  It as y,
  Jt as b,
  Kt as x,
  Lt as S,
  Mt as C,
  Nt as w,
  On as ee,
  Ot as T,
  Pt as E,
  Rt as D,
  St as O,
  Tt as k,
  Ut as A,
  Vt as te,
  Wt as j,
  Yt as ne,
  Zt as re,
  fn as M,
  hn as ie,
  in as ae,
  jt as oe,
  kt as se,
  on as ce,
  pn as N,
  qt as le,
  rn as ue,
  wn as de,
  wt as fe,
  zt as pe,
} from "./region-tokyo-A7LxHjud.js";
var me = 2048,
  he = 2816,
  ge = `white`,
  _e = 4,
  ve = class {
    cells = new Map();
    order = [];
    used = 0;
    overflow = 0;
    slowMs = 0;
    slowKey = ``;
    size = 0;
    packed = !1;
    constructor() {
      this.need(ge, 32, 32, (e, t, n, r, i) => {
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
        w: Math.min(me, Math.ceil(t)),
        h: Math.ceil(n),
        paint: r,
      };
      return (this.cells.set(e, i), this.order.push(i), (this.packed = !1), e);
    }
    pack() {
      if (this.packed) return;
      this.packed = !0;
      let e = [...this.cells.values()]
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
          (t + a.w + _e > 2048 && ((t = 0), (n += r + _e), (r = 0)),
          n + a.h > 2816)
        ) {
          (this.overflow++, (a.x = -1));
          continue;
        }
        ((a.x = t),
          (a.y = n),
          (t += a.w + _e),
          (r = Math.max(r, a.h)),
          i.push(a));
      }
      ((this.used = n + r), (this.order = i));
    }
    uv(e) {
      this.pack();
      let t = this.cells.get(e);
      (!t || t.x < 0) && (t = this.cells.get(ge));
      let n = 1.5;
      return {
        u0: (t.x + n) / me,
        v0: 1 - (t.y + t.h - n) / he,
        u1: (t.x + t.w - n) / me,
        v1: 1 - (t.y + n) / he,
      };
    }
    white() {
      this.pack();
      let e = this.cells.get(ge),
        t = (e.x + e.w / 2) / me,
        n = 1 - (e.y + e.h / 2) / he;
      return { u0: t, v0: n, u1: t, v1: n };
    }
    *paint(e) {
      this.pack();
      let t = Math.round((e * he) / me),
        [n, r] = a(e, t);
      de(n, r);
      let i = e / me;
      yield;
      for (let e of this.order) {
        let t = performance.now();
        (r.save(),
          r.setTransform(i, 0, 0, i, 0, 0),
          r.beginPath(),
          r.rect(e.x, e.y, e.w, e.h),
          r.clip());
        try {
          e.paint(r, e.x, e.y, e.w, e.h);
        } catch (t) {
          console.warn(`[asakusa] atlas cell ${e.key} failed`, t);
        }
        r.restore();
        let n = performance.now() - t;
        (n > this.slowMs && ((this.slowMs = n), (this.slowKey = e.key)), yield);
      }
      let o = l(n, { mipmaps: !0, anisotropy: 4 });
      return ((o.name = `asakusa-atlas`), (this.size = e), o);
    }
  };
function P(e, t, n, r, i, a, o = 0.55, s) {
  ((e.fillStyle = a),
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
function F(e, t, n, r, i, a) {
  ((e.globalAlpha = 1), (e.fillStyle = a), e.fillRect(t, n, r, i));
}
function I(e, t, n, r, i, a, o = 0.5) {
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
var ye = new Uint8Array(256);
for (let e = 0; e < 256; e++) ye[e] = Math.round(255 * (e / 255) ** 2.2);
var be = (e) => ye[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)];
function L(e, t, n = 1) {
  return (
    e.setColor(
      be(((t >> 16) & 255) * n),
      be(((t >> 8) & 255) * n),
      be((t & 255) * n),
    ),
    e
  );
}
function R(e, t, n, r, i, a, o, s) {
  let c = e.n;
  return (
    e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1),
    c
  );
}
function xe(e, t, n, r, i, a, o, s = !1) {
  s
    ? e.quad(t, a, n, r, a, n, r, a, i, t, a, i, o.u0, o.v0, o.u1, o.v1)
    : e.quad(t, a, i, r, a, i, r, a, n, t, a, n, o.u0, o.v0, o.u1, o.v1);
}
function z(e, t, n, r, i, a, o, s, c = !1) {
  e.box(
    (t + i) / 2,
    (n + a) / 2,
    (r + o) / 2,
    (i - t) / 2,
    (a - n) / 2,
    (o - r) / 2,
    s.u0,
    s.v0,
    s.u1,
    s.v1,
    c,
  );
}
function Se(e, t, n, r, i, a, o, s, c, l, u, d, f = !0) {
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
  (R(e, y[0], y[1], b[0], b[1], r, i, u ?? l),
    R(e, S[0], S[1], x[0], x[1], r, i, d ?? l),
    R(e, b[0], b[1], S[0], S[1], r, i, l),
    R(e, x[0], x[1], y[0], y[1], r, i, l),
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
function Ce(e, t, n, r, i, a, o, s = 6) {
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
function B(e, t, n, r, i, a, o, s, c) {
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
function we(e, t, n, r, i, a, o = 1) {
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
var Te = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
function Ee(e, t, n, r, i, a, o, s, c, l, u = 14) {
  let d = (e, s = 1) => [
    t + i * Math.cos(e) * o * s,
    n + Math.sin(e) * o * s,
    r + a * Math.cos(e) * o * s,
  ];
  for (let t = 0; t < u; t++) {
    let n = d((t / u) * Math.PI * 2),
      r = d(((t + 1) / u) * Math.PI * 2);
    B(e, n[0], n[1], n[2], r[0], r[1], r[2], s, l);
  }
  for (let i = 0; i < c; i++) {
    let a = d((i / c) * Math.PI * 2 + 0.2, 0.96);
    B(e, t, n, r, a[0], a[1], a[2], s * 0.45, l);
  }
}
function De(e, t, n, r, i, a, o) {
  let s = 0,
    c = [0];
  for (let e = 1; e < t.length; e++)
    c.push((s += Math.hypot(t[e][0] - t[e - 1][0], t[e][1] - t[e - 1][1])));
  let l = i.u1 - i.u0,
    u = i.v1 - i.v0,
    d = o - a || 1,
    f = (e) => i.u0 + l * (s ? c[e] / s : 0),
    p = (e) => i.v0 + u * Math.min(1, Math.max(0, (e - a) / d));
  for (let i = 0; i + 1 < t.length; i++) {
    let [a, o] = t[i],
      [s, c] = t[i + 1],
      l = s - a,
      u = c - o,
      d = Math.hypot(l, u) || 1,
      m = -u / d,
      h = l / d,
      g = e.vertex(a, n[i], o, m, 0, h, f(i), p(n[i]));
    (e.vertex(s, n[i + 1], c, m, 0, h, f(i + 1), p(n[i + 1])),
      e.vertex(s, r[i + 1], c, m, 0, h, f(i + 1), p(r[i + 1])),
      e.vertex(a, r[i], o, m, 0, h, f(i), p(r[i])),
      e.tri(g, g + 1, g + 2).tri(g, g + 2, g + 3));
  }
}
var Oe = { shop: `shopOpen`, eat: `eatOpen`, bar: `barOpen` },
  ke = { shop: `shopShut`, eat: `eatShut`, bar: `barShut` },
  Ae = class {
    pieces = [];
    obbs = [];
    circles = [];
    w = new c(16384, 24576);
    tris = 0;
    begin() {
      return this.w.reset();
    }
    end(e, t, n, r, i = `always`, a) {
      this.w.n &&
        ((this.tris += this.w.ni / 3),
        this.pieces.push({
          name: e,
          geo: ee(this.w, `asa-${e}`),
          x: t,
          z: n,
          range: r,
          group: i,
          matrix: a,
        }));
    }
    box(e, t, n, r, i, a) {
      this.obbs.push({
        x: (e + n) / 2,
        z: (t + r) / 2,
        hx: (n - e) / 2,
        hz: (r - t) / 2,
        rot: 0,
        y0: i,
        y1: a,
      });
    }
  },
  V = (e) => ce[e]?.ja ?? (ue(e) ? ae(e) : ``);
function je(e, t, n, r, i, a) {
  e.font = `${a} 100px ${i}`;
  let o = e.measureText(t).width || 1;
  return Math.max(4, Math.min(r, (100 * n) / o));
}
function H(e, t, n, r, i, a, o, s = `900`, c = M()) {
  if (!t) return;
  let l = je(e, t, i, a, c, s);
  ((e.font = `${s} ${Math.min(l, a)}px ${c}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = 1),
    e.fillText(t, n, r + a * 0.04));
}
var Me = (e, t, n, r, i) => {
    ((e.fillStyle = i),
      e.beginPath(),
      e.arc(t, n, r, 0, Math.PI * 2),
      e.fill());
  },
  U = (e) => e,
  Ne = [
    U({
      id: `miyage`,
      names: [
        `asa.shop.miyage.1`,
        `asa.shop.miyage.2`,
        `asa.shop.miyage.3`,
        `asa.shop.miyage.4`,
      ],
      sub: `asa.shop.miyage.sub`,
      sched: `shop`,
      front: `open`,
      board: [`#f4efe2`, `#b0201a`],
      mincho: !1,
      cloth: `#c8281e`,
      lantern: `asa.lantern.miyage`,
      wall: `#efe6d4`,
      goods: [
        `#d23a2a`,
        `#2a4a8a`,
        `#e8c24a`,
        `#ffffff`,
        `#3a8a5a`,
        `#1a1a1a`,
        `#e87a9a`,
      ],
      weight: 6,
    }),
    U({
      id: `ningyoyaki`,
      names: [`asa.shop.kibayashi`],
      sub: `asa.shop.ningyoyaki`,
      sched: `shop`,
      front: `window`,
      board: [`#2a1a10`, `#f1d58a`],
      mincho: !0,
      cloth: `#7a1a14`,
      lantern: `asa.lantern.ningyoyaki`,
      wall: `#d8c09a`,
      goods: [`#c8904a`, `#b07a3a`, `#e0b070`, `#f4e8d0`],
      weight: 1,
    }),
    U({
      id: `okoshi`,
      names: [`asa.shop.senbei`],
      sub: `asa.shop.senbei.sub`,
      sched: `shop`,
      front: `open`,
      board: [`#3a2416`, `#f4e2b8`],
      mincho: !0,
      cloth: `#5a2a14`,
      wall: `#e4d4b4`,
      goods: [`#c89a5a`, `#e0c08a`, `#8a5a2a`, `#f4ecd8`],
      weight: 1.5,
    }),
    U({
      id: `sensu`,
      names: [`asa.shop.sensu`, `asa.shop.tenugui`],
      sched: `shop`,
      front: `open`,
      board: [`#1d2b4a`, `#f2ead4`],
      mincho: !0,
      cloth: `#1d2b4a`,
      wall: `#f0e8d8`,
      goods: [`#c83a2a`, `#2a5a9a`, `#e8d4a4`, `#1a1a1a`, `#8a3a8a`, `#3a8a7a`],
      weight: 1.5,
    }),
    U({
      id: `kimono`,
      names: [`asa.shop.kimono.1`, `asa.shop.kimono.2`],
      sub: `asa.shop.kimono.walk`,
      sched: `shop`,
      front: `kimono`,
      board: [`#f6f0f2`, `#8a1a4a`],
      mincho: !0,
      cloth: `#b0346a`,
      wall: `#f2ece4`,
      goods: [
        `#e86a8a`,
        `#3a5aa8`,
        `#e8b84a`,
        `#7a3a9a`,
        `#2a8a7a`,
        `#c83a2a`,
        `#f2f2f2`,
      ],
      weight: 2,
    }),
    U({
      id: `hakimono`,
      names: [`asa.shop.hakimono`],
      sub: `asa.shop.hakimono.sub`,
      sched: `shop`,
      front: `open`,
      board: [`#2a2016`, `#e8dcc0`],
      mincho: !0,
      cloth: `#3a3a3a`,
      wall: `#e0d4bc`,
      goods: [`#c8a070`, `#1a1a1a`, `#b02a2a`, `#e8e0d0`, `#5a3a2a`],
      weight: 0.8,
    }),
    U({
      id: `token`,
      names: [`asa.shop.token`],
      sched: `shop`,
      front: `open`,
      board: [`#101010`, `#e8c050`],
      mincho: !0,
      cloth: `#202020`,
      wall: `#d8d0c0`,
      goods: [`#202020`, `#c8c8c8`, `#8a1a14`, `#d8b04a`, `#3a3a5a`],
      weight: 1,
    }),
    U({
      id: `matcha`,
      names: [`asa.shop.matcha`],
      sub: `asa.shop.matcha.sub`,
      sched: `shop`,
      front: `glass`,
      board: [`#2f4a2a`, `#f2ecd8`],
      mincho: !1,
      cloth: `#3a5a30`,
      wall: `#e8ecd8`,
      goods: [`#6a9a3a`, `#f4f0e0`, `#3a5a2a`, `#c8d8a0`],
      weight: 1.2,
    }),
    U({
      id: `menchi`,
      names: [`asa.shop.menchi`],
      sub: `asa.shop.menchi.sub`,
      sched: `shop`,
      front: `window`,
      board: [`#f2d23a`, `#b0201a`],
      mincho: !1,
      cloth: `#c8281e`,
      wall: `#f0e0c0`,
      goods: [`#b0702a`, `#d8983a`, `#8a5a2a`],
      weight: 0.8,
    }),
    U({
      id: `melonpan`,
      names: [`asa.shop.kagetsudo`],
      sub: `asa.shop.kagetsudo.sub`,
      sched: `shop`,
      front: `window`,
      board: [`#f8f2e0`, `#2a6a3a`],
      mincho: !0,
      cloth: `#2a6a3a`,
      wall: `#f4ead0`,
      goods: [`#e8c06a`, `#d8a84a`, `#f0d890`],
      weight: 0.8,
    }),
    U({
      id: `imoyokan`,
      names: [`asa.shop.funafuku`],
      sub: `asa.shop.funafuku.sub`,
      sched: `shop`,
      front: `glass`,
      board: [`#f4ecd8`, `#5a2a14`],
      mincho: !0,
      cloth: `#5a2a14`,
      wall: `#efe4cc`,
      goods: [`#e8b84a`, `#5a2a24`, `#f2e2b0`, `#3a1a14`],
      weight: 1,
    }),
    U({
      id: `tempura`,
      names: [`asa.shop.tendon.2`, `asa.shop.daifukuya`],
      sub: `asa.shop.daifukuya.sub`,
      sched: `eat`,
      front: `noren`,
      board: [`#2a1a10`, `#f4e8c8`],
      mincho: !0,
      cloth: `#1d2b5a`,
      lantern: `asa.shop.tendon.lantern`,
      wall: `#e8d0a0`,
      goods: [`#e0a84a`, `#c88a3a`, `#f4e4b8`],
      weight: 1.5,
    }),
    U({
      id: `soba`,
      names: [`asa.shop.soba.2`],
      sub: `asa.shop.soba`,
      sched: `eat`,
      front: `noren`,
      board: [`#1a1410`, `#f2ead4`],
      mincho: !0,
      cloth: `#2a3a2a`,
      lantern: `asa.shop.soba.lantern`,
      wall: `#e4d8bc`,
      goods: [`#6a5a3a`, `#3a2a1a`, `#d8c8a0`],
      weight: 1,
    }),
    U({
      id: `sushi`,
      names: [`asa.shop.sushi`],
      sched: `eat`,
      front: `noren`,
      board: [`#f2ecdc`, `#1a1a1a`],
      mincho: !0,
      cloth: `#1a2a4a`,
      wall: `#ece4d0`,
      goods: [`#e86a4a`, `#f4f0e8`, `#3a3a3a`],
      weight: 0.6,
    }),
    U({
      id: `unagi`,
      names: [`asa.shop.unagi`],
      sched: `eat`,
      front: `noren`,
      board: [`#2a1810`, `#f0dca8`],
      mincho: !0,
      cloth: `#3a1a10`,
      wall: `#e4d0a8`,
      goods: [`#7a4a1a`, `#3a2010`, `#e8c890`],
      weight: 0.6,
    }),
    U({
      id: `kissa`,
      names: [`asa.shop.kissa`],
      sub: `asa.shop.kissa.sub`,
      sched: `shop`,
      front: `glass`,
      board: [`#3a2418`, `#f2e2c0`],
      mincho: !1,
      cloth: `#5a3a24`,
      wall: `#c8a880`,
      goods: [`#5a3a24`, `#e8d8b8`, `#8a5a3a`],
      weight: 1,
    }),
    U({
      id: `yoshoku`,
      names: [`asa.shop.yoshoku`],
      sub: `asa.shop.yoshoku.sub`,
      sched: `eat`,
      front: `glass`,
      board: [`#f4f0e8`, `#1a3a7a`],
      mincho: !1,
      cloth: `#1a3a7a`,
      wall: `#f0e4cc`,
      goods: [`#c8402a`, `#e8c070`, `#5a3a1a`],
      weight: 0.8,
    }),
    U({
      id: `drug`,
      names: [`asa.shop.drug`],
      sched: `shop`,
      front: `open`,
      board: [`#1a5ab8`, `#ffffff`],
      mincho: !1,
      cloth: `#1a5ab8`,
      wall: `#f4f4f4`,
      goods: [`#e83a3a`, `#3a8ae8`, `#f2d23a`, `#ffffff`, `#3ab86a`],
      weight: 0.7,
    }),
  ],
  Pe = [
    U({
      id: `tokiwakado`,
      names: [`asa.shop.tokiwakado`],
      sub: `asa.shop.tokiwakado.sub`,
      sched: `shop`,
      front: `open`,
      board: [`#b01a14`, `#f8e8b0`],
      mincho: !0,
      cloth: `#b01a14`,
      lantern: `asa.lantern.okoshi`,
      wall: `#ecdcb8`,
      goods: [`#e8c06a`, `#c8302a`, `#f4ecd0`, `#2a2a2a`],
      weight: 0,
    }),
    U({
      id: `tsuruju`,
      names: [`asa.shop.tsuruju`],
      sub: `asa.shop.tsuruju.sub`,
      sched: `shop`,
      front: `glass`,
      board: [`#1a1410`, `#f0e2c0`],
      mincho: !0,
      cloth: `#1a1410`,
      wall: `#e8d8b0`,
      goods: [`#a8642a`, `#c88a3a`, `#f0dcb0`],
      weight: 0,
    }),
    U({
      id: `sansho`,
      names: [`asa.shop.sansho`],
      sub: `asa.shop.sansho.sub`,
      sched: `eat`,
      front: `noren`,
      board: [`#1a1410`, `#f2e2b8`],
      mincho: !0,
      cloth: `#f2ece0`,
      lantern: `asa.shop.tendon.lantern`,
      wall: `#e4cc98`,
      goods: [`#e0a84a`, `#c88a3a`],
      weight: 0,
    }),
    U({
      id: `sasayabu`,
      names: [`asa.shop.sasayabu`],
      sub: `asa.shop.soba`,
      sched: `eat`,
      front: `noren`,
      board: [`#1a1410`, `#e8dcc0`],
      mincho: !0,
      cloth: `#2a2a24`,
      lantern: `asa.shop.soba.lantern`,
      wall: `#d8c8a4`,
      goods: [`#6a5a3a`, `#3a2a1a`],
      weight: 0,
    }),
    U({
      id: `kibayashi`,
      names: [`asa.shop.kibayashi`],
      sub: `asa.shop.ningyoyaki`,
      sched: `shop`,
      front: `window`,
      board: [`#2a1a10`, `#f1d58a`],
      mincho: !0,
      cloth: `#7a1a14`,
      lantern: `asa.lantern.ningyoyaki`,
      wall: `#d8c09a`,
      goods: [`#c8904a`, `#b07a3a`, `#e0b070`],
      weight: 0,
    }),
    U({
      id: `kimono-sig`,
      names: [`asa.shop.kimono.1`],
      sub: `asa.shop.kimono.walk`,
      sched: `shop`,
      front: `kimono`,
      board: [`#f6f0f2`, `#8a1a4a`],
      mincho: !0,
      cloth: `#b0346a`,
      wall: `#f2ece4`,
      goods: [`#e86a8a`, `#3a5aa8`, `#e8b84a`, `#7a3a9a`, `#2a8a7a`, `#c83a2a`],
      weight: 0,
    }),
    U({
      id: `kamiura`,
      names: [`asa.shop.kamiura`],
      sub: `asa.shop.kamiura.denki`,
      sched: `bar`,
      front: `glass`,
      board: [`#141414`, `#e8c050`],
      mincho: !0,
      cloth: `#141414`,
      wall: `#c8a070`,
      goods: [`#8a5a2a`, `#e8c070`, `#5a3a1a`],
      weight: 0,
    }),
  ],
  Fe = (e) => [...Pe, ...Ne].find((t) => t.id === e) ?? Ne[0];
function Ie(e, t) {
  return (n, r, i, a, o) => {
    let [s, c] = e.board;
    P(n, r, i, a, o, s, 0.62);
    let l = e.mincho ? N() : M();
    e.mincho &&
      (I(n, r + 4, i + 4, a - 8, 2, c, 0.62),
      I(n, r + 4, i + o - 6, a - 8, 2, c, 0.62));
    let u = e.sub ? V(e.sub) : ``;
    u && a / o > 3.6
      ? (H(n, V(t), r + a * 0.4, i + o * 0.52, a * 0.62, o * 0.72, c, `900`, l),
        H(n, u, r + a * 0.84, i + o * 0.52, a * 0.27, o * 0.36, c, `700`, l))
      : H(n, V(t), r + a / 2, i + o * 0.52, a * 0.9, o * 0.74, c, `900`, l);
  };
}
function Le(e, t) {
  return (n, r, i, a, o) => {
    let [s, c] = e.board;
    (P(n, r, i, a, o, s, 0.6),
      I(n, r + 3, i + 3, a - 6, 3, c, 0.6),
      I(n, r + 3, i + o - 6, a - 6, 3, c, 0.6));
    let l = V(t).replace(/\s+/g, ``);
    ie(
      n,
      l,
      r + a / 2,
      i + o * 0.06,
      i + o * 0.94,
      a * 0.62,
      c,
      e.mincho ? N() : M(),
      `900`,
    );
  };
}
function Re(e) {
  return (r, i, a, o, s) => {
    let c = new t(n(`asa-int`, e.id));
    ((r.globalAlpha = 1), (r.fillStyle = e.wall), r.fillRect(i, a, o, s));
    let l = e.goods;
    if (
      e.front === `noren` ||
      (e.front === `glass` &&
        (e.sched === `eat` || e.sched === `bar` || e.id === `kissa`))
    ) {
      for (let e = 0; e < 10; e++) {
        let t = i + o * (0.05 + e * 0.09);
        ((r.fillStyle = e % 3 == 0 ? `#f6e6b0` : `#f8f2e2`),
          r.fillRect(t, a + s * 0.08, o * 0.07, s * 0.32),
          (r.fillStyle = `#2a1a10`));
        for (let e = 0; e < 4; e++)
          r.fillRect(
            t + o * 0.025,
            a + s * (0.12 + e * 0.06),
            o * 0.02,
            s * 0.035,
          );
      }
      ((r.fillStyle = `#8a5a30`),
        r.fillRect(i, a + s * 0.56, o, s * 0.08),
        (r.fillStyle = `#5c3a1e`),
        r.fillRect(i, a + s * 0.64, o, s * 0.36));
      for (let e = 0; e < 3; e++) {
        let t = i + o * (0.18 + e * 0.28 + c.next() * 0.08);
        ((r.fillStyle = [`#2a2e3a`, `#e8e8e8`, `#5a3a2a`][e % 3]),
          r.fillRect(t - o * 0.03, a + s * 0.46, o * 0.06, s * 0.32),
          Me(r, t, a + s * 0.42, o * 0.022, `#1a1410`));
      }
      return;
    }
    if (e.front === `kimono`) {
      for (let e = 0; e < 18; e++) {
        let t = i + o * (0.03 + e * 0.053);
        ((r.fillStyle = l[e % l.length]),
          r.fillRect(t, a + s * 0.12, o * 0.046, s * 0.6),
          (r.fillStyle = `rgba(255,255,255,0.35)`));
        for (let e = 0; e < 4; e++)
          Me(
            r,
            t + o * 0.023,
            a + s * (0.2 + e * 0.13),
            o * 0.008,
            `rgba(255,255,255,0.45)`,
          );
      }
      ((r.fillStyle = `#9a8a70`),
        r.fillRect(i, a + s * 0.1, o, s * 0.025),
        (r.fillStyle = `#d8d8dc`),
        r.fillRect(i + o * 0.8, a + s * 0.2, o * 0.1, s * 0.7));
      return;
    }
    if (
      e.front === `window` &&
      (e.id === `ningyoyaki` || e.id === `kibayashi`)
    ) {
      ((r.fillStyle = `#c8b090`), r.fillRect(i, a, o, s * 0.5));
      for (let e = 0; e < 6; e++)
        ((r.fillStyle = [`#e8d8b8`, `#d84a3a`, `#f4ecd8`][e % 3]),
          r.fillRect(
            i + o * (0.04 + e * 0.16),
            a + s * 0.1,
            o * 0.13,
            s * 0.16,
          ));
      ((r.fillStyle = `#3a3a3a`),
        r.fillRect(i + o * 0.1, a + s * 0.58, o * 0.8, s * 0.16));
      for (let e = 0; e < 12; e++)
        Me(r, i + o * (0.14 + e * 0.064), a + s * 0.66, o * 0.022, `#c8904a`);
      ((r.fillStyle = `#f4f4f4`),
        r.fillRect(i + o * 0.42, a + s * 0.3, o * 0.12, s * 0.3),
        Me(r, i + o * 0.48, a + s * 0.27, o * 0.03, `#2a1a10`),
        (r.fillStyle = `#ffffff`),
        r.fillRect(i + o * 0.45, a + s * 0.2, o * 0.06, s * 0.035),
        (r.fillStyle = `#8a6a4a`),
        r.fillRect(i, a + s * 0.74, o, s * 0.26));
      return;
    }
    for (let e = 0; e < 4; e++) {
      let t = a + s * (0.06 + e * 0.22);
      ((r.fillStyle = `#b8a888`), r.fillRect(i, t + s * 0.18, o, s * 0.02));
      for (let e = 0; e < 16; e++) {
        let n = i + o * (0.02 + e * 0.061);
        r.fillStyle = l[Math.floor(c.next() * l.length)];
        let a = s * (0.08 + c.next() * 0.09);
        r.fillRect(n, t + s * 0.18 - a, o * 0.05, a);
      }
    }
  };
}
function ze(e) {
  return (r, i, a, o, s) => {
    let c = new t(n(`asa-goods`, e.id));
    ((r.globalAlpha = 1), (r.fillStyle = `#e8e2d4`), r.fillRect(i, a, o, s));
    let l = e.goods;
    for (let t = 0; t < 3; t++)
      for (let n = 0; n < 9; n++) {
        let u = i + (o * n) / 9 + 2,
          d = a + (s * t) / 3 + 2,
          f = o / 9 - 4,
          p = s / 3 - 4;
        ((r.fillStyle = l[Math.floor(c.next() * l.length)]),
          r.fillRect(u, d, f, p),
          c.next() < 0.5 &&
            ((r.fillStyle = `rgba(255,255,255,0.55)`),
            r.fillRect(u + f * 0.15, d + p * 0.2, f * 0.7, p * 0.18)),
          e.id === `sensu` &&
            c.next() < 0.6 &&
            ((r.fillStyle = l[Math.floor(c.next() * l.length)]),
            r.beginPath(),
            r.moveTo(u + f / 2, d + p),
            r.arc(u + f / 2, d + p, p * 0.95, Math.PI * 1.1, Math.PI * 1.9),
            r.fill()));
      }
    for (let e = 0; e < 6; e++)
      ((r.fillStyle = `#ffffff`),
        r.fillRect(i + o * (0.05 + e * 0.16), a + s * 0.86, o * 0.09, s * 0.1),
        (r.fillStyle = `#c81a14`),
        r.fillRect(
          i + o * (0.06 + e * 0.16),
          a + s * 0.89,
          o * 0.06,
          s * 0.04,
        ));
  };
}
function Be(e, t) {
  return (n, r, i, a, o) => {
    ((n.globalAlpha = 1),
      (n.fillStyle = e.cloth),
      n.fillRect(r, i, a, o),
      (n.fillStyle = `rgba(0,0,0,0.35)`));
    for (let e = 1; e < 3; e++)
      n.fillRect(r + (a * e) / 3 - 1, i + o * 0.22, 2, o * 0.78);
    let s = parseInt(e.cloth.slice(1), 16) > 11579568;
    H(
      n,
      V(t).replace(/\s+/g, ``),
      r + a / 2,
      i + o * 0.5,
      a * 0.82,
      o * 0.56,
      s ? `#1a1a1a` : `#f6f2e8`,
      `900`,
      N(),
    );
  };
}
function Ve(e) {
  return (r, i, a, o, s) => {
    let c = new t(n(`asa-shut`, e));
    (F(r, i, a, o, s, [`#a8aaa8`, `#9a9e9c`, `#b4b2aa`, `#8e9294`][e % 4]),
      (r.fillStyle = `rgba(0,0,0,0.12)`));
    for (let e = 0; e < s; e += 5) r.fillRect(i, a + e, o, 1.5);
    if (e % 3 == 1) {
      ((r.fillStyle = `#1d2b5a`),
        r.fillRect(i + o * 0.05, a + s * 0.15, o * 0.9, s * 0.7),
        (r.strokeStyle = `#e8ecf2`),
        (r.lineWidth = 2));
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 6; t++)
          (r.beginPath(),
            r.arc(
              i + o * (0.12 + t * 0.15),
              a + s * (0.72 - e * 0.07),
              o * 0.06,
              Math.PI,
              Math.PI * 2,
            ),
            r.stroke());
      ((r.fillStyle = `#c8281e`),
        r.beginPath(),
        r.ellipse(
          i + o * 0.5,
          a + s * 0.4,
          o * 0.12,
          s * 0.17,
          0,
          0,
          Math.PI * 2,
        ),
        r.fill(),
        H(
          r,
          V(`asa.lantern.asakusa`),
          i + o * 0.5,
          a + s * 0.4,
          o * 0.14,
          s * 0.18,
          `#1a0a08`,
          `900`,
          N(),
        ));
    } else if (c.next() < 0.4) {
      ((r.fillStyle = `#f4f2ea`),
        r.fillRect(i + o * 0.62, a + s * 0.3, o * 0.22, s * 0.2),
        (r.fillStyle = `#5a5a5a`));
      for (let e = 0; e < 3; e++)
        r.fillRect(i + o * 0.65, a + s * (0.34 + e * 0.05), o * 0.16, 2);
    }
  };
}
function He(e) {
  return (r, i, a, o, s) => {
    let c = new t(n(`asa-fac`, e));
    r.globalAlpha = 1;
    let l = Math.floor(e / 3);
    if (l === 0) {
      (F(r, i, a, o, s, [`#3a2a1e`, `#4a3424`, `#2e241c`][e % 3]),
        F(r, i + o * 0.08, a + s * 0.18, o * 0.84, s * 0.58, `#5a4a3a`),
        (r.fillStyle = `#e8dcc0`),
        r.fillRect(i + o * 0.1, a + s * 0.2, o * 0.8, s * 0.54),
        (r.fillStyle = `#2a1e14`));
      for (let e = 0; e < 22; e++)
        r.fillRect(
          i + o * (0.1 + e * 0.0364),
          a + s * 0.2,
          o * 0.014,
          s * 0.54,
        );
      (r.fillRect(i + o * 0.1, a + s * 0.46, o * 0.8, 3),
        F(r, i, a + s * 0.86, o, s * 0.14, `#2a2420`));
    } else if (l === 1) {
      let t = [`#5a8a7a`, `#c8c0b0`, `#9a8a70`][e % 3];
      if ((F(r, i, a, o, s, t), e % 3 == 0)) {
        ((r.strokeStyle = `rgba(30,60,50,0.45)`), (r.lineWidth = 1.5));
        for (let e = 0; e < 8; e++)
          for (let t = 0; t < 10; t++)
            (r.beginPath(),
              r.arc(
                i + (t / 9) * o + (e % 2) * o * 0.055,
                a + s * (0.1 + e * 0.11),
                o * 0.05,
                Math.PI,
                Math.PI * 2,
              ),
              r.stroke());
      }
      for (let e of [0.14, 0.58])
        (F(r, i + o * e, a + s * 0.26, o * 0.28, s * 0.44, `#d8d4c8`),
          F(
            r,
            i + o * e + 4,
            a + s * 0.26 + 4,
            o * 0.28 - 8,
            s * 0.44 - 8,
            `#5a6a72`,
          ),
          (r.fillStyle = `rgba(255,255,255,0.18)`),
          r.fillRect(
            i + o * e + 4,
            a + s * 0.26 + 4,
            (o * 0.28 - 8) / 2,
            s * 0.44 - 8,
          ));
      F(r, i, a + s * 0.9, o, s * 0.1, `rgba(0,0,0,0.2)`);
    } else if (l === 2) {
      let t = [`#9a6a4a`, `#c8b494`, `#8a7a6a`][e % 3];
      (F(r, i, a, o, s, t), (r.fillStyle = `rgba(0,0,0,0.08)`));
      for (let e = 0; e < s; e += 6) r.fillRect(i, a + e, o, 1);
      for (let e = 0; e < o; e += 12) r.fillRect(i + e, a, 1, s);
      let n = 2 + (e % 2);
      for (let e = 0; e < n; e++) {
        let t = i + o * (0.08 + (e * 0.86) / n),
          l = (o * 0.86) / n - o * 0.06;
        (F(r, t, a + s * 0.2, l, s * 0.52, `#b8bcc0`),
          F(
            r,
            t + 3,
            a + s * 0.2 + 3,
            l - 6,
            s * 0.52 - 6,
            c.next() < 0.5 ? `#4a5a66` : `#6a7884`,
          ),
          (r.fillStyle = `#b8bcc0`),
          r.fillRect(t + l / 2 - 1, a + s * 0.2, 2, s * 0.52));
      }
      (F(r, i + o * 0.06, a + s * 0.76, o * 0.88, s * 0.05, `#7a7a78`),
        c.next() < 0.6 &&
          F(r, i + o * 0.72, a + s * 0.8, o * 0.16, s * 0.14, `#e4e4e0`));
    } else {
      F(r, i, a, o, s, [`#e8e6e0`, `#dcdad2`, `#f0ece4`][e % 3]);
      for (let e = 0; e < 3; e++) {
        let t = i + o * (0.06 + e * 0.31);
        (F(r, t, a + s * 0.18, o * 0.26, s * 0.56, `#3a4650`),
          (r.fillStyle = `rgba(255,255,255,0.12)`),
          r.fillRect(t, a + s * 0.18, o * 0.13, s * 0.56));
      }
      F(r, i, a + s * 0.84, o, s * 0.04, `#b8b6b0`);
    }
  };
}
function Ue(e, t = `#d01c14`) {
  return (n, r, i, a, o) => {
    (P(n, r, i, a, o, t, 0.8),
      (n.globalAlpha = 1),
      (n.fillStyle = `rgba(0,0,0,0.22)`));
    for (let e = 1; e < 8; e++) n.fillRect(r, i + (o * e) / 8, a, 1);
    ie(
      n,
      V(e),
      r + a / 2,
      i + o * 0.14,
      i + o * 0.86,
      a * 0.44,
      `#1a0a08`,
      N(),
      `900`,
    );
  };
}
function We(e, t, n) {
  return (r, i, a, o, s) => {
    (F(r, i, a, o, s, t),
      F(r, i, a, o, s * 0.06, `rgba(0,0,0,0.25)`),
      ie(r, V(e), i + o / 2, a + s * 0.1, a + s * 0.9, o * 0.6, n, N(), `900`));
  };
}
function Ge(e, t, n = `#1e2a22`, r = `#f4f0e0`) {
  return (i, a, o, s, c) => {
    (F(i, a, o, s, c, `#6a4a2a`),
      F(i, a + s * 0.07, o + c * 0.05, s * 0.86, c * 0.9, n));
    let l = V(e),
      u = V(t);
    (ie(i, l, a + s * 0.66, o + c * 0.1, o + c * 0.9, s * 0.26, r, M(), `900`),
      u &&
        ie(
          i,
          u,
          a + s * 0.32,
          o + c * 0.1,
          o + c * 0.9,
          s * 0.26,
          `#f2c84a`,
          M(),
          `900`,
        ));
  };
}
function Ke(e, t, n, r, i) {
  (F(e, t, n, r, i, `#f4f2ea`),
    F(e, t, n, r, i * 0.08, `#c8281e`),
    ie(
      e,
      V(`asa.shop.tsuruju.last`),
      t + r / 2,
      n + i * 0.14,
      n + i * 0.92,
      r * 0.62,
      `#1a1a1a`,
      M(),
      `900`,
    ));
}
function qe(e, t, n, r, i = r) {
  return (a, o, s, c, l) => {
    (P(a, o, s, c, l, n, 0.6),
      H(a, V(e), o + c / 2, s + l * 0.33, c * 0.9, l * 0.4, r, `900`),
      t && H(a, V(t), o + c / 2, s + l * 0.73, c * 0.9, l * 0.26, i, `700`));
  };
}
function Je(e, r, i, a, o) {
  let s = new t(n(`asa-bunka-slats`, 1));
  ((e.globalAlpha = 1),
    (e.fillStyle = `#e8c890`),
    e.fillRect(r, i, a, o),
    (e.fillStyle = `rgba(80,60,40,0.35)`));
  for (let t = 0; t < 9; t++)
    e.fillRect(
      r + a * s.next(),
      i + o * (0.35 + s.next() * 0.3),
      a * 0.05,
      o * 0.3,
    );
  ((e.fillStyle = `rgba(255,240,210,0.6)`),
    e.fillRect(r, i + o * 0.04, a, o * 0.05));
  for (let t = 0; t < 46; t++) {
    let n = r + (a * t) / 46,
      s = [`#7a5434`, `#6e4c30`, `#86603c`, `#704e32`][t % 4];
    (I(e, n, i, (a / 46) * 0.55, o, s, 0.5),
      I(e, n + (a / 46) * 0.42, i, (a / 46) * 0.13, o, `#4a321e`, 0.5));
  }
  I(e, r, i + o * 0.95, a, o * 0.05, `#3a3634`, 0.5);
}
function Ye(e, r, i, a, o) {
  ((e.globalAlpha = 1),
    (e.fillStyle = `#b89a74`),
    e.fillRect(r, i, a, o),
    (e.fillStyle = `#f2e6c8`),
    e.fillRect(r, i, a, o * 0.1),
    (e.fillStyle = `#8a7660`),
    e.fillRect(r, i + o * 0.1, a, o * 0.04),
    (e.fillStyle = `#6a5440`),
    e.fillRect(r + a * 0.18, i + o * 0.6, a * 0.5, o * 0.16),
    (e.fillStyle = `#c8a878`),
    e.fillRect(r + a * 0.18, i + o * 0.58, a * 0.5, o * 0.03));
  for (let t = 0; t < 3; t++)
    ((e.fillStyle = `#1e2a40`),
      e.fillRect(r + a * (0.25 + t * 0.14), i + o * 0.42, a * 0.05, o * 0.18),
      Me(e, r + a * (0.275 + t * 0.14), i + o * 0.39, a * 0.016, `#1a1410`));
  let s = new t(n(`asa-bunka-lobby`, 1));
  for (let t = 0; t < 9; t++) {
    let t = r + a * (0.03 + s.next() * 0.92),
      n = o * (0.24 + s.next() * 0.08),
      c = a * (0.018 + s.next() * 0.01);
    ((e.fillStyle = [
      `#d8d8d8`,
      `#3a4a6a`,
      `#a83a3a`,
      `#2a2a2a`,
      `#e8c070`,
      `#6a8a5a`,
    ][Math.floor(s.next() * 6)]),
      e.fillRect(t, i + o * 0.86 - n, c, n * 0.62),
      (e.fillStyle = `#3a3438`),
      e.fillRect(t + c * 0.1, i + o * 0.86 - n * 0.38, c * 0.8, n * 0.38),
      Me(e, t + c / 2, i + o * 0.86 - n - c * 0.45, c * 0.42, `#2a2018`));
  }
  ((e.fillStyle = `#121a24`),
    e.fillRect(r + a * 0.74, i + o * 0.2, a * 0.18, o * 0.22),
    (e.fillStyle = `#4a90c8`),
    e.fillRect(r + a * 0.75, i + o * 0.21, a * 0.16, o * 0.2));
  for (let t = 0; t < 8; t++)
    ((e.fillStyle = [`#d84a3a`, `#3a7ac8`, `#e8c04a`, `#4aa86a`][t % 4]),
      e.fillRect(r + a * (0.02 + t * 0.016), i + o * 0.5, a * 0.012, o * 0.08));
  ((e.fillStyle = `#5a4a3a`), e.fillRect(r, i + o * 0.86, a, o * 0.14));
  let c = e.createLinearGradient(r, i, r, i + o);
  (c.addColorStop(0, `rgba(150,175,200,0.62)`),
    c.addColorStop(0.45, `rgba(60,80,100,0.38)`),
    c.addColorStop(1, `rgba(30,40,50,0.3)`),
    (e.fillStyle = c),
    e.fillRect(r, i, a, o));
  for (let t = 0; t <= 8; t++)
    I(e, r + (a * t) / 8 - 2, i, 4, o, `#2a2a2c`, 0.5);
  I(e, r, i + o * 0.3, a, 3, `#2a2a2c`, 0.5);
}
function Xe(e, t, n, r, i) {
  (P(e, t, n, r, i, `#2e2a26`, 0.55),
    H(
      e,
      V(`asa.bunka.name`),
      t + r / 2,
      n + i * 0.36,
      r * 0.9,
      i * 0.44,
      `#f4f0e6`,
      `700`,
    ),
    H(
      e,
      V(`asa.bunka.latin`),
      t + r / 2,
      n + i * 0.76,
      r * 0.9,
      i * 0.2,
      `#d8d2c4`,
      `500`,
    ));
}
function Ze(e, t, n, r, i) {
  (P(e, t, n, r, i, `#f2f0ea`, 0.55),
    F(e, t, n, r, i * 0.22, `#1a5aa8`),
    H(
      e,
      V(`asa.bunka.info`),
      t + r / 2,
      n + i * 0.11,
      r * 0.8,
      i * 0.17,
      `#ffffff`,
      `800`,
    ),
    H(
      e,
      V(`asa.bunka.hours`),
      t + r / 2,
      n + i * 0.42,
      r * 0.9,
      i * 0.15,
      `#1a1a1a`,
      `700`,
    ),
    H(
      e,
      V(`asa.bunka.terrace`),
      t + r / 2,
      n + i * 0.62,
      r * 0.9,
      i * 0.15,
      `#1a1a1a`,
      `700`,
    ),
    H(
      e,
      V(`asa.bunka.ward`),
      t + r / 2,
      n + i * 0.84,
      r * 0.5,
      i * 0.14,
      `#4a4a4a`,
      `700`,
    ));
}
function Qe(e, t, n, r, i) {
  ((e.globalAlpha = 1),
    (e.fillStyle = `#eef0ee`),
    e.fillRect(t, n, r, i),
    (e.fillStyle = `rgba(160,170,175,0.35)`));
  for (let a = 0; a < 6; a++) e.fillRect(t, n + (i * a) / 6, r, i * 0.04);
  for (let a = 0; a <= 4; a++)
    I(e, t + (r * a) / 4 - 3, n, 6, i, `#5a6066`, 0.5);
  I(e, t, n, r, 4, `#5a6066`, 0.5);
}
function $e(e, t, n, r, i) {
  return (a, o, s, c, l) => {
    (P(a, o, s, c, l, n, 0.65),
      I(a, o + 5, s + 5, c - 10, 4, i, 0.65),
      I(a, o + 5, s + l - 9, c - 10, 4, i, 0.65),
      H(a, V(e), o + c * 0.5, s + l * 0.45, c * 0.7, l * 0.6, r, `900`, N()),
      t && H(a, V(t), o + c * 0.5, s + l * 0.83, c * 0.6, l * 0.14, i, `700`));
  };
}
function et(e) {
  return (r, i, a, o, s) => {
    let c = new t(n(`asa-iza-front`, e));
    I(r, i, a, o, s, `#2a1e16`, 0.5);
    let l = i + o * 0.02,
      u = a + s * 0.04,
      d = o * 0.96,
      f = s * 0.94;
    ((r.globalAlpha = 1),
      (r.fillStyle = [`#efb470`, `#f2c482`, `#e8a862`][e % 3]),
      r.fillRect(l, u, d, f));
    for (let t = 0; t < 10; t++) {
      let n = l + d * (0.03 + (t * 0.94) / 10),
        i = (d * 0.86) / 10;
      ((r.fillStyle = t % 3 == 0 ? `#ffe9a8` : `#fffaf0`),
        r.fillRect(n, u + f * 0.04, i, f * 0.34));
      let a = V(`asa.hoppy.menu.${((t + e) % 10) + 1}`).split(` `)[0];
      ie(
        r,
        a,
        n + i / 2,
        u + f * 0.06,
        u + f * 0.36,
        i * 0.7,
        `#1a1a1a`,
        M(),
        `800`,
      );
    }
    ((r.fillStyle = `#141414`),
      r.fillRect(l + d * 0.84, u + f * 0.42, d * 0.12, f * 0.12));
    for (let t = 0; t < 14; t++)
      ((r.fillStyle = [`#3b5a2a`, `#6a3a1a`, `#d8d0b8`, `#1a2a4a`][
        (t + e) % 4
      ]),
        r.fillRect(
          l + d * (0.04 + t * 0.05),
          u + f * 0.44,
          d * 0.022,
          f * 0.08,
        ));
    ((r.fillStyle = `#8a5a30`),
      r.fillRect(l, u + f * 0.66, d, f * 0.06),
      (r.fillStyle = `#6a4a2a`),
      r.fillRect(l, u + f * 0.72, d, f * 0.28));
    let p = 2 + Math.floor(c.next() * 4);
    for (let e = 0; e < p; e++) {
      let e = l + d * (0.1 + c.next() * 0.8);
      ((r.fillStyle = [`#1e2430`, `#3a3e4a`, `#e8e8e8`, `#5a4a3a`, `#7a2a2a`][
        Math.floor(c.next() * 5)
      ]),
        r.fillRect(e - d * 0.03, u + f * 0.52, d * 0.06, f * 0.36),
        Me(r, e, u + f * 0.49, d * 0.022, `#1a1410`));
    }
    r.fillStyle = `rgba(255,255,255,0.16)`;
    for (let e = 0; e < 6; e++) r.fillRect(l + (d * e) / 6, u, d * 0.04, f);
    ((r.fillStyle = `rgba(255,255,255,0.1)`),
      r.fillRect(l, u + f * 0.4, d, f * 0.03));
  };
}
function tt(e) {
  return (t, n, r, i, a) => {
    let o = e % 4,
      s = [`#f4efe0`, `#1a1410`, `#c8281e`, `#1d2b5a`][o],
      c = [`#b0201a`, `#f4e8c8`, `#ffffff`, `#f4f0e0`][o];
    (P(t, n, r, i, a, s, 0.6),
      H(
        t,
        V(`asa.hoppy.bar.${e + 1}`),
        n + i / 2,
        r + a * 0.52,
        i * 0.92,
        a * 0.76,
        c,
        `900`,
        e % 2 ? N() : M(),
      ));
  };
}
function nt(e) {
  return (t, n, r, i, a) => {
    (F(t, n, r, i, a, `#9a9c9a`), (t.fillStyle = `rgba(0,0,0,0.12)`));
    for (let e = 0; e < a; e += 5) t.fillRect(n, r + e, i, 1.5);
    H(
      t,
      V(`asa.hoppy.bar.${e + 1}`),
      n + i / 2,
      r + a * 0.3,
      i * 0.7,
      a * 0.14,
      `#5a1a14`,
      `900`,
      N(),
    );
  };
}
var rt = $e(`asa.hoppy.name`, `asa.hoppy.sub`, `#b81c16`, `#ffffff`, `#ffe8a0`);
function it(e, t, n, r, i) {
  (F(e, t, n, r, i, `#141414`),
    F(e, t, n + i * 0.82, r, i * 0.18, `#b01a14`),
    H(
      e,
      V(`asa.rick.name`),
      t + r / 2,
      n + i * 0.42,
      r * 0.8,
      i * 0.5,
      `#e8c050`,
      `900`,
      N(),
    ));
}
var W = 3.4,
  at = 0.6,
  ot = (e) => W + (e - 1) * 3 + at;
function st(e, t) {
  for (let n = 0; n < 10; n++) {
    let r = e.weighted(Ne.map((e) => [e, e.weight])),
      i = r.names[Math.floor(e.next() * r.names.length)];
    if (!(t.includes(i) && n < 9))
      return (t.push(i), t.length > 7 && t.shift(), { trade: r, name: i });
  }
  return { trade: Ne[0], name: Ne[0].names[0] };
}
function G(e, r, i, a, o, s, c, l = {}) {
  let u = new t(n(`asa-row`, e)),
    d = [],
    f = [],
    [p, m] = l.floors ?? [2, 4],
    h = l.kinds ?? [0, 1, 2, 3],
    [g, _] = l.width ?? [4.6, 7.6],
    v = [...(l.fixed ?? [])],
    y = [...(l.tail ?? [])],
    b = y.reduce((e, t) => e + t[0], 0),
    x = i,
    S = (e, t, n, i, a) => {
      let c = r === `W` ? [o, o + s] : r === `E` ? [o - s, o] : null,
        d = r === `N` ? [o, o + s] : r === `S` ? [o - s, o] : null,
        p = h[Math.floor(u.next() * h.length)],
        m = p === 0 ? Math.min(a, 3) : a;
      f.push({
        x0: c ? c[0] : e,
        x1: c ? c[1] : t,
        z0: d ? d[0] : e,
        z1: d ? d[1] : t,
        face: r,
        trade: n,
        name: i,
        floors: m,
        h: ot(m),
        fac: p * 3 + Math.floor(u.next() * 3),
        shut: Math.floor(u.next() * 6),
        sode: m >= 2 && u.next() < 0.55,
        lanterns: !!n.lantern && u.next() < 0.8,
        arcade: !!l.arcade,
        endMin: !1,
        endMax: !1,
      });
    },
    C = () => Math.max(p, Math.min(m, p + Math.floor(u.next() * (m - p + 1))));
  for (let [e, t, n, r] of v) {
    let i = c(t);
    (S(x, x + e, i, n ?? i.names[0], r ?? C()), (x += e));
  }
  let w = a - b;
  for (; x < w - 0.5;) {
    let e = u.range(g, _);
    w - (x + e) < g * 0.8 && (e = w - x);
    let t = st(u, d);
    (S(x, x + e, t.trade, t.name, C()), (x += e));
  }
  x = w;
  for (let [e, t, n, r] of y.reverse()) {
    let i = c(t);
    (S(x, x + e, i, n ?? i.names[0], r ?? C()), (x += e));
  }
  return (
    f.length && ((f[0].endMin = !0), (f[f.length - 1].endMax = !0)),
    { id: e, units: f }
  );
}
function ct(e, t) {
  for (let n of t)
    for (let t of n.units)
      (e.need(`shop:board:${t.name}`, 320, 64, Ie(t.trade, t.name)),
        t.sode && e.need(`shop:sode:${t.name}`, 48, 176, Le(t.trade, t.name)),
        e.need(`shop:int:${t.trade.id}`, 256, 144, Re(t.trade)),
        e.need(`shop:goods:${t.trade.id}`, 256, 96, ze(t.trade)),
        t.trade.front === `noren` &&
          e.need(
            `shop:noren:${t.trade.id}`,
            128,
            64,
            Be(t.trade, t.trade.sub ?? t.name),
          ),
        t.trade.lantern &&
          e.need(`lantern:${t.trade.lantern}`, 64, 96, Ue(t.trade.lantern)),
        t.trade.id === `tokiwakado` &&
          e.need(
            `lantern:asa.shop.tokiwakado.lantern`,
            96,
            144,
            Ue(`asa.shop.tokiwakado.lantern`),
          ));
  for (let t = 0; t < 12; t++) e.need(`fac:${t}`, 224, 160, He(t));
  for (let t = 0; t < 6; t++) e.need(`shop:shut:${t}`, 160, 128, Ve(t));
  (e.need(
    `aboard:kimono`,
    96,
    144,
    Ge(`asa.shop.kimono.price`, `asa.shop.kimono.walk`, `#f6f0f2`, `#8a1a4a`),
  ),
    e.need(
      `aboard:ningyo`,
      96,
      144,
      Ge(`asa.shop.ningyoyaki.price`, `asa.shop.ningyoyaki.fresh`),
    ),
    e.need(`aboard:matcha`, 96, 144, Ge(`asa.shop.matcha.sub`, ``, `#2f4a2a`)),
    e.need(
      `panel:kimono`,
      256,
      64,
      qe(
        `asa.shop.kimono.price`,
        `asa.shop.kimono.walk`,
        `#8a1a4a`,
        `#ffffff`,
        `#ffe0ec`,
      ),
    ));
}
function lt(e) {
  switch (e.face) {
    case `W`:
      return {
        lx: e.x0,
        lz: e.z0,
        rx: e.x0,
        rz: e.z1,
        nx: -1,
        nz: 0,
        depth: e.x1 - e.x0,
        wid: e.z1 - e.z0,
      };
    case `E`:
      return {
        lx: e.x1,
        lz: e.z1,
        rx: e.x1,
        rz: e.z0,
        nx: 1,
        nz: 0,
        depth: e.x1 - e.x0,
        wid: e.z1 - e.z0,
      };
    case `N`:
      return {
        lx: e.x1,
        lz: e.z0,
        rx: e.x0,
        rz: e.z0,
        nx: 0,
        nz: -1,
        depth: e.z1 - e.z0,
        wid: e.x1 - e.x0,
      };
    default:
      return {
        lx: e.x0,
        lz: e.z1,
        rx: e.x1,
        rz: e.z1,
        nx: 0,
        nz: 1,
        depth: e.z1 - e.z0,
        wid: e.x1 - e.x0,
      };
  }
}
var K = (e, t, n) => [
  e.lx + (e.rx - e.lx) * t + e.nx * n,
  e.lz + (e.rz - e.lz) * t + e.nz * n,
];
function q(e, t, n, r, i, a, o, s) {
  let [c, l] = K(t, n, i),
    [u, d] = K(t, r, i);
  R(e, c, l, u, d, a, o, s);
}
function J(e, t, n, r, i, a, o, s, c, l = !1) {
  let [u, d] = K(t, n, i),
    [f, p] = K(t, r, i),
    [m, h] = K(t, r, o),
    [g, _] = K(t, n, o);
  l
    ? e.quad(u, a, d, f, a, p, m, s, h, g, s, _, c.u0, c.v0, c.u1, c.v1)
    : e.quad(g, s, _, m, s, h, f, a, p, u, a, d, c.u0, c.v0, c.u1, c.v1);
}
var ut = [
  14209732, 13222578, 12171440, 14077368, 11052186, 13617340, 14736591,
  11576976, 10133664, 11050122,
];
function dt(e, t, n, r, i, a, o = 0.2, s = 0.52) {
  (e.setMaterial(0.7, 0, 0.55, 3), L(e, 16777215));
  let c = i.u1 - i.u0;
  for (let a = 0; a < 8; a++) {
    let l = (a / 8) * Math.PI * 2,
      u = ((a + 1) / 8) * Math.PI * 2,
      d = (a % 4) / 4,
      f = ((a % 4) + 1) / 4;
    e.quad(
      t + Math.cos(u) * o,
      n,
      r + Math.sin(u) * o,
      t + Math.cos(l) * o,
      n,
      r + Math.sin(l) * o,
      t + Math.cos(l) * o,
      n + s,
      r + Math.sin(l) * o,
      t + Math.cos(u) * o,
      n + s,
      r + Math.sin(u) * o,
      i.u0 + c * (1 - f),
      i.v0,
      i.u0 + c * (1 - d),
      i.v1,
    );
  }
  (e.setMaterial(0.6, 0, 0, 0),
    L(e, 1315860),
    z(
      e,
      t - o * 0.75,
      n - 0.05,
      r - o * 0.75,
      t + o * 0.75,
      n + 0.02,
      r + o * 0.75,
      a,
    ),
    z(
      e,
      t - o * 0.75,
      n + s - 0.02,
      r - o * 0.75,
      t + o * 0.75,
      n + s + 0.05,
      r + o * 0.75,
      a,
    ));
}
function ft(e, t, n, r) {
  let i = t.white(),
    a = lt(n),
    o = r + n.h,
    s = Math.floor(n.fac / 3) === 0,
    c = ut[(n.fac * 7 + n.shut) % ut.length];
  e.setMaterial(0.9, 0, 0, 0);
  let [l, u] = K(a, 0, -a.depth),
    [d, f] = K(a, 1, -a.depth),
    [p, m] = K(a, 0, 0),
    [h, g] = K(a, 1, 0);
  if (s) {
    let t = o - at,
      n = t + Math.min(2, a.depth * 0.18);
    (L(e, 4869716),
      e.setMaterial(0.55, 0.15, 0, 0),
      J(e, a, -0.01, 1.01, 0.55, t - 0.12, -a.depth / 2, n, i, !0),
      J(e, a, -0.01, 1.01, -a.depth / 2, n, -a.depth - 0.3, t - 0.12, i, !0),
      e.setMaterial(0.9, 0, 0, 0),
      L(e, c, 0.82));
    let [s, _] = K(a, 0, -a.depth / 2),
      [v, y] = K(a, 1, -a.depth / 2);
    (e.quad(l, t, u, p, t, m, s, n, _, s, n, _, i.u0, i.v0, i.u1, i.v1),
      e.quad(h, t, g, d, t, f, v, n, y, v, n, y, i.u0, i.v0, i.u1, i.v1),
      L(e, c, 0.82),
      R(e, d, f, l, u, r, t, i),
      R(e, l, u, p, m, r, t, i),
      R(e, h, g, d, f, r, t, i));
  } else
    (L(e, 9078656),
      xe(
        e,
        Math.min(n.x0, n.x1),
        Math.min(n.z0, n.z1),
        Math.max(n.x0, n.x1),
        Math.max(n.z0, n.z1),
        o,
        i,
      ),
      L(e, c, 0.82),
      R(e, d, f, l, u, r, o, i),
      R(e, l, u, p, m, r, o, i),
      R(e, h, g, d, f, r, o, i));
  let _ = n.face === `W` || n.face === `S`,
    v = [
      [_ ? n.endMin : n.endMax, l, u, p, m],
      [_ ? n.endMax : n.endMin, h, g, d, f],
    ],
    y = t.uv(`fac:${(n.fac + 1) % 12}`);
  for (let [i, a, o, s, c] of v) {
    if (!i) continue;
    let l = -(c - o),
      u = s - a,
      d = Math.hypot(l, u) || 1,
      f = (l / d) * 0.03,
      p = (u / d) * 0.03,
      m = Math.hypot(s - a, c - o),
      h = Math.max(1, Math.round(m / 6));
    (e.setMaterial(0.85, 0, 0.3, 33), L(e, 16777215));
    for (let t = 1; t < n.floors; t++) {
      let n = r + W + (t - 1) * 3;
      for (let t = 0; t < h; t++)
        R(
          e,
          a + ((s - a) * t) / h + f,
          o + ((c - o) * t) / h + p,
          a + ((s - a) * (t + 1)) / h + f,
          o + ((c - o) * (t + 1)) / h + p,
          n,
          n + 3,
          y,
        );
    }
    if (m > 4) {
      let i = 0.06,
        l = Math.min(0.94, i + 4.6 / m);
      (e.setMaterial(0.6, 0, 0.32, 3),
        R(
          e,
          a + (s - a) * i + f * 3,
          o + (c - o) * i + p * 3,
          a + (s - a) * l + f * 3,
          o + (c - o) * l + p * 3,
          r + 2.66,
          r + 3.24,
          t.uv(`shop:board:${n.name}`),
        ));
    }
    e.setMaterial(0.9, 0, 0, 0);
  }
  (e.setMaterial(0.85, 0, 0.3, 33), L(e, 16777215));
  let b = t.uv(`fac:${n.fac}`),
    x = Math.max(1, Math.round(a.wid / 6));
  for (let t = 1; t < n.floors; t++) {
    let n = r + W + (t - 1) * 3;
    for (let t = 0; t < x; t++) q(e, a, t / x, (t + 1) / x, 0, n, n + 3, b);
  }
  if (
    (e.setMaterial(0.9, 0, 0, 0),
    s || (L(e, c), q(e, a, 0, 1, 0, o - at, o, i)),
    L(e, c, 0.9),
    q(e, a, 0, 0.04, 0, r, r + W, i),
    q(e, a, 0.96, 1, 0, r, r + W, i),
    s &&
      !n.arcade &&
      (e.setMaterial(0.55, 0.15, 0, 0),
      L(e, 5132888),
      J(e, a, -0.02, 1.02, 0, r + W + 0.42, 0.95, r + W + 0.06, i),
      L(e, 2762790),
      J(e, a, -0.02, 1.02, 0, r + W + 0.41, 0.95, r + W + 0.05, i, !0),
      e.setMaterial(0.9, 0, 0, 0)),
    e.setMaterial(0.7, 0, 0, 0),
    L(e, 2762274),
    q(e, a, 0.02, 0.98, 0.06, r + 2.62, r + W, i),
    J(e, a, 0.02, 0.98, 0, r + W, 0.13, r + W, i),
    e.setMaterial(0.6, 0, 0.35, 3),
    L(e, 16777215),
    q(
      e,
      a,
      0.03,
      0.97,
      0.13,
      r + 2.66,
      r + W - 0.04,
      t.uv(`shop:board:${n.name}`),
    ),
    n.sode)
  ) {
    let s = (a.rx - a.lx) / a.wid,
      c = (a.rz - a.lz) / a.wid,
      l = t.uv(`shop:sode:${n.name}`);
    if (n.arcade) {
      let [t, n] = K(a, 0.5, 1.15);
      (e.setMaterial(0.6, 0, 0.3, 19),
        L(e, 16777215),
        Se(e, t, n, r + 3.7, r + 5.4, 0.42, 0.05, s, c, i, l, l),
        e.setMaterial(0.5, 0.6, 0, 16),
        L(e, 4869714),
        B(
          e,
          t - a.nx * 1.15,
          r + 5.55,
          n - a.nz * 1.15,
          t,
          r + 5.55,
          n,
          0.025,
          i,
        ),
        B(e, t, r + 5.4, n, t, r + 5.55, n, 0.015, i));
    } else {
      let [t, u] = K(a, 0.12, 0.5),
        d = r + W + 0.35,
        f = Math.min(o - 0.3, d + Math.min(4.4, (n.floors - 1) * 3 - 0.4));
      f - d > 1.5 &&
        (e.setMaterial(0.6, 0, 0.3, 3),
        L(e, 16777215),
        Se(e, t, u, d, f, 0.45, 0.07, s, c, i, l, l),
        e.setMaterial(0.5, 0.6, 0, 0),
        L(e, 5922402),
        B(
          e,
          t - a.nx * 0.5,
          d + 0.2,
          u - a.nz * 0.5,
          t + a.nx * 0.05,
          d + 0.2,
          u + a.nz * 0.05,
          0.03,
          i,
        ),
        B(
          e,
          t - a.nx * 0.5,
          f - 0.2,
          u - a.nz * 0.5,
          t + a.nx * 0.05,
          f - 0.2,
          u + a.nz * 0.05,
          0.03,
          i,
        ));
    }
  }
  if (n.lanterns && n.trade.lantern) {
    let o = t.uv(`lantern:${n.trade.lantern}`);
    for (let t of [0.12, 0.88]) {
      let [n, s] = K(a, t, 0.42);
      (e.setMaterial(0.5, 0.6, 0, 0),
        L(e, 2763306),
        B(e, n - a.nx * 0.3, r + 3, s - a.nz * 0.3, n, r + 3, s, 0.015, i),
        dt(e, n, r + 2.36, s, o, i));
    }
  }
  if (n.trade.id === `tokiwakado`) {
    let [n, o] = K(a, 0.5, 0.95);
    (e.setMaterial(0.5, 0.6, 0, 0),
      L(e, 2763306),
      B(e, n - a.nx * 0.85, r + 3.25, o - a.nz * 0.85, n, r + 3.25, o, 0.03, i),
      B(e, n, r + 3, o, n, r + 3.25, o, 0.02, i),
      dt(
        e,
        n,
        r + 1.65,
        o,
        t.uv(`lantern:asa.shop.tokiwakado.lantern`),
        i,
        0.52,
        1.3,
      ));
  }
  let S = ((n.x0 * 5 + n.z0 * 11) | 0) % 6;
  if (!s && S < 2 && a.wid > 4.5) {
    let [t, n] = K(a, 0.6, -a.depth * 0.55);
    if (
      (e.setMaterial(0.6, 0.4, 0, 0),
      L(e, S === 0 ? 14211282 : 10132638),
      S === 0)
    ) {
      for (let [r, a] of [
        [-0.45, -0.45],
        [0.45, -0.45],
        [0.45, 0.45],
        [-0.45, 0.45],
      ])
        B(e, t + r, o, n + a, t + r, o + 0.9, n + a, 0.04, i);
      Ce(e, t, n, o + 0.9, o + 2.2, 0.62, i, 10);
    } else
      for (let r = 0; r < 3; r++)
        z(
          e,
          t - 1.2 + r * 0.85,
          o,
          n - 0.3,
          t - 0.5 + r * 0.85,
          o + 0.62,
          n + 0.3,
          i,
        );
  }
}
function pt(e, t, n, r, i, a) {
  let o = t.white(),
    s = t.uv(`shop:int:${n.trade.id}`);
  (e.setMaterial(0.8, 0, 0.22, 16),
    L(e, 16777215),
    q(e, r, 0.04, 0.96, -a, i, i + 2.62, s),
    L(e, 4867648),
    J(e, r, 0.04, 0.96, -a, i + 2.62, 0, i + 2.62, o, !0),
    L(e, 15262940));
  let [c, l] = K(r, 0.04, -a),
    [u, d] = K(r, 0.04, 0),
    [f, p] = K(r, 0.96, -a),
    [m, h] = K(r, 0.96, 0);
  (R(e, u, d, c, l, i, i + 2.62, s),
    R(e, f, p, m, h, i, i + 2.62, s),
    L(e, 8024168),
    xe(
      e,
      Math.min(c, u, f, m),
      Math.min(l, d, p, h),
      Math.max(c, u, f, m),
      Math.max(l, d, p, h),
      i + 0.02,
      o,
    ));
}
function mt(e, t, n, r, i) {
  let a = t.white(),
    o = lt(n),
    s = n.trade;
  pt(e, t, n, o, r, Math.min(o.depth - 0.3, s.front === `open` ? 3.2 : 2.6));
  let c = t.uv(`shop:goods:${s.id}`),
    l = n.arcade ? 16 : 0;
  if (s.front === `open`) {
    let t = n.arcade ? 0.7 : 0.95;
    (e.setMaterial(0.85, 0, 0, l), L(e, 9071176));
    let [s, u] = K(o, 0.08, 0.05),
      [d, f] = K(o, 0.62, t);
    if (
      (z(
        e,
        Math.min(s, d),
        r,
        Math.min(u, f),
        Math.max(s, d),
        r + 0.78,
        Math.max(u, f),
        a,
      ),
      e.setMaterial(0.5, 0, 0.06, l),
      L(e, 16777215),
      J(e, o, 0.08, 0.62, 0.05, r + 1.02, t, r + 0.8, c),
      i >= 1)
    ) {
      let [t, n] = K(o, 0.8, 0.35);
      (e.setMaterial(0.5, 0.5, 0, l),
        L(e, 9080466),
        B(e, t, r, n, t, r + 1.8, n, 0.02, a),
        e.setMaterial(0.8, 0, 0.05, l),
        L(e, 16777215),
        Se(
          e,
          t + o.nx * 0.03,
          n + o.nz * 0.03,
          r + 0.7,
          r + 1.75,
          0.4,
          0.04,
          o.nx,
          o.nz,
          a,
          c,
          c,
          !1,
        ));
    }
  } else if (s.front === `glass` || s.front === `window`) {
    (e.setMaterial(0.4, 0.6, 0, l), L(e, 2763308));
    for (let t of [0.04, 0.35, 0.65, 0.96]) {
      let [n, i] = K(o, t, 0.03);
      z(e, n - 0.04, r, i - 0.04, n + 0.04, r + 2.62, i + 0.04, a);
    }
    let [t, n] = K(o, 0.04, 0.03),
      [i, u] = K(o, 0.96, 0.03);
    if ((B(e, t, r + 2.2, n, i, r + 2.2, u, 0.03, a), s.front === `window`)) {
      (e.setMaterial(0.6, 0.2, 0, l), L(e, 6965806));
      let [t, n] = K(o, 0.06, -0.1),
        [i, s] = K(o, 0.62, 0.55);
      (z(
        e,
        Math.min(t, i),
        r,
        Math.min(n, s),
        Math.max(t, i),
        r + 0.95,
        Math.max(n, s),
        a,
      ),
        e.setMaterial(0.3, 0.1, 0.12, l),
        L(e, 16777215),
        J(e, o, 0.06, 0.62, -0.1, r + 1.12, 0.55, r + 0.96, c));
    }
  } else if (s.front === `noren`) {
    (e.setMaterial(0.7, 0, 0, l), L(e, 3811870));
    for (let t of [0.04, 0.3, 0.7, 0.96]) {
      let [n, i] = K(o, t, 0.03);
      z(e, n - 0.045, r, i - 0.045, n + 0.045, r + 2.5, i + 0.045, a);
    }
    let [n, i] = K(o, 0.04, 0.03),
      [u, d] = K(o, 0.96, 0.03);
    (B(e, n, r + 2.5, i, u, r + 2.5, d, 0.05, a),
      B(e, n, r + 1, i, u, r + 1, d, 0.02, a),
      e.setMaterial(0.9, 0, 0, l),
      L(e, 16777215),
      q(e, o, 0.3, 0.7, 0.09, r + 1.62, r + 2.46, t.uv(`shop:noren:${s.id}`)));
    let [f, p] = K(o, 0.74, 0.08),
      [m, h] = K(o, 0.95, 0.6);
    (e.setMaterial(0.5, 0.2, 0, l),
      L(e, 4863012),
      z(
        e,
        Math.min(f, m),
        r,
        Math.min(p, h),
        Math.max(f, m),
        r + 0.9,
        Math.max(p, h),
        a,
      ),
      e.setMaterial(0.2, 0.1, 0.25, 1 | l),
      L(e, 16777215),
      J(e, o, 0.74, 0.95, 0.08, r + 1.38, 0.6, r + 0.92, c));
  } else if (s.front === `kimono`) {
    for (let [t, n] of [
      [0.2, 14178426],
      [0.42, 3824296],
    ]) {
      let [i, s] = K(o, t, 0.45);
      (e.setMaterial(0.8, 0, 0.05, l),
        L(e, n),
        Ce(e, i, s, r, r + 1.38, 0.2, a, 8),
        L(e, 15253578),
        Ce(e, i, s, r + 0.9, r + 1.12, 0.215, a, 8),
        L(e, 15786708),
        z(e, i - 0.09, r + 1.38, s - 0.09, i + 0.09, r + 1.62, s + 0.09, a),
        L(e, 1315860),
        z(e, i - 0.1, r + 1.62, s - 0.1, i + 0.1, r + 1.72, s + 0.1, a));
    }
    (e.setMaterial(0.6, 0, 0.3, 3 | l),
      L(e, 16777215),
      q(e, o, 0.55, 0.95, 0.06, r + 1.95, r + 2.5, t.uv(`panel:kimono`)));
  }
  if (
    !n.arcade &&
    s.front !== `noren` &&
    s.id !== `tokiwakado` &&
    ((n.x0 * 7 + n.z0 * 3) | 0) % 3 != 0
  ) {
    let t = parseInt(s.cloth.slice(1), 16);
    (e.setMaterial(0.9, 0, 0, 0),
      L(e, t),
      J(e, o, 0, 1, 0, r + 2.58, 1.25, r + 2.2, a),
      L(e, t, 0.55),
      J(e, o, 0, 1, 0, r + 2.57, 1.25, r + 2.19, a, !0),
      L(e, t, 0.8),
      q(e, o, 0, 1, 1.25, r + 1.98, r + 2.2, a));
  }
  let u =
    s.front === `kimono`
      ? `aboard:kimono`
      : s.id === `ningyoyaki` || s.id === `kibayashi`
        ? `aboard:ningyo`
        : s.id === `matcha`
          ? `aboard:matcha`
          : null;
  if (u && i >= 1) {
    let [n, i] = K(o, 0.92, 1),
      s = t.uv(u),
      c = (o.rx - o.lx) / o.wid,
      l = (o.rz - o.lz) / o.wid;
    (e.setMaterial(0.7, 0, 0.08, 1), L(e, 16777215));
    let d = c * 0.28,
      f = l * 0.28;
    (e.quad(
      n - d + o.nx * 0.16,
      r,
      i - f + o.nz * 0.16,
      n + d + o.nx * 0.16,
      r,
      i + f + o.nz * 0.16,
      n + d + o.nx * 0.02,
      r + 0.95,
      i + f + o.nz * 0.02,
      n - d + o.nx * 0.02,
      r + 0.95,
      i - f + o.nz * 0.02,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
    ),
      L(e, 6965802),
      e.quad(
        n + d - o.nx * 0.16,
        r,
        i + f - o.nz * 0.16,
        n - d - o.nx * 0.16,
        r,
        i - f - o.nz * 0.16,
        n - d - o.nx * 0.02,
        r + 0.95,
        i - f - o.nz * 0.02,
        n + d - o.nx * 0.02,
        r + 0.95,
        i + f - o.nz * 0.02,
        a.u0,
        a.v0,
        a.u1,
        a.v1,
      ));
  }
}
function ht(e, t, n, r) {
  let i = lt(n);
  (e.setMaterial(0.6, 0.3, 0, n.arcade ? 16 : 0),
    L(e, 16777215),
    q(e, i, 0.04, 0.96, 0.02, r, r + 2.62, t.uv(`shop:shut:${n.shut}`)));
}
async function gt(e, t, n, r, i, a) {
  let o = 0;
  for (let s of r) {
    if (!s.units.length) continue;
    let r = 1 / 0,
      c = 1 / 0,
      l = -1 / 0,
      u = -1 / 0;
    for (let e of s.units)
      ((r = Math.min(r, e.x0)),
        (c = Math.min(c, e.z0)),
        (l = Math.max(l, e.x1)),
        (u = Math.max(u, e.z1)));
    let d = (r + l) / 2,
      f = (c + u) / 2,
      [p, m] = K(lt(s.units[0]), 0.5, -1),
      h = n.groundHeight(p, m),
      g = e.begin();
    for (let e of s.units) ft(g, t, e, h);
    e.end(`row-${s.id}`, d, f, 520);
    for (let n of [`shop`, `eat`, `bar`]) {
      let r = s.units.filter((e) => e.trade.sched === n);
      if (r.length) {
        g = e.begin();
        for (let e of r) mt(g, t, e, h, i);
        (e.end(`row-${s.id}-${n}-open`, d, f, 200, Oe[n]), (g = e.begin()));
        for (let e of r) ht(g, t, e, h);
        e.end(`row-${s.id}-${n}-shut`, d, f, 200, ke[n]);
      }
    }
    for (let t of s.units) e.box(t.x0, t.z0, t.x1, t.z1, h, h + t.h);
    ((o += s.units.length), await a());
  }
  return o;
}
var _t = 12;
function vt() {
  let e = [],
    t = Fe,
    n = G(`kmd-s`, `N`, x.x0, j.x1, x.z0, _t, t, {
      floors: [3, 6],
      kinds: [1, 2, 3],
      tail: [[7.2, `kibayashi`, void 0, 4]],
    });
  (e.push(n),
    e.push(
      G(`kmd-s-w`, `W`, x.z0 + _t, x.z1, x.x0, x.x1 - x.x0, t, {
        floors: [3, 5],
        kinds: [2, 3],
        width: [8, 8],
      }),
    ));
  let r = G(`namiki-w`, `E`, j.z0 + _t, j.z1, j.x1, j.x1 - j.x0, t, {
    floors: [2, 4],
    kinds: [0, 0, 1, 2],
    fixed: [
      [6.4, `kissa`, void 0, 3],
      [5.6, `hakimono`, void 0, 2],
      [7.4, `sasayabu`, void 0, 2],
    ],
  });
  (e.push(r),
    e.push(
      G(`namiki-e`, `W`, k.z1 + 0.4, pe.z1, pe.x0, pe.x1 - pe.x0, t, {
        floors: [2, 5],
        kinds: [0, 1, 2],
        fixed: [[6, `unagi`, void 0, 2]],
      }),
    ));
  let i = T.z1 + 0.2,
    a = G(`kmd-koban`, `N`, _.x0, b.x0, i, _.z1 - i, t, {
      floors: [3, 4],
      kinds: [2, 3],
      width: [9, 9],
    });
  ((a.units[a.units.length - 1].endMax = !1), e.push(a));
  let o = G(`kmd-s2`, `N`, b.x0, _.x1, _.z0, _.z1 - _.z0, t, {
    floors: [2, 5],
    kinds: [0, 1, 2, 3],
    fixed: [[b.x1 - b.x0, `tsuruju`, void 0, 2]],
    tail: [[6, `kimono-sig`, void 0, 4]],
  });
  ((o.units[o.units.length - 1].endMax = !1), e.push(o));
  let s = G(`kmd-s3`, `N`, le.x0, le.x1, le.z0, le.z1 - le.z0, t, {
    floors: [4, 7],
    kinds: [2, 3],
    width: [9, 10.5],
  });
  ((s.units[0].endMin = !1), e.push(s));
  let c = G(`kmd-n-w`, `S`, v.x0, se, v.z1, v.z1 - v.z0, t, {
    floors: [3, 5],
    kinds: [1, 2, 3],
    tail: [[7.6, `sansho`, void 0, 3]],
  });
  ((c.units[c.units.length - 1].endMax = !1), e.push(c));
  let l = G(`kmd-n-e`, `S`, 684, te.x1, te.z1, te.z1 - te.z0, t, {
    floors: [2, 4],
    kinds: [0, 1, 2],
    fixed: [[10.5, `tokiwakado`, void 0, 3]],
  });
  ((l.units[0].endMin = !1),
    (l.units[l.units.length - 1].endMax = !1),
    e.push(l));
  let u = G(`kmd-n-x`, `S`, A.x0, A.x1, A.z1, A.z1 - A.z0, t, {
    fixed: [[A.x1 - A.x0, `kamiura`, void 0, 4]],
  });
  ((u.units[0].endMin = !1),
    (u.units[0].fac = 7),
    (u.units[0].sode = !0),
    (u.units[0].lanterns = !1),
    e.push(u));
  let d = { arcade: !0, floors: [3, 5], kinds: [1, 2, 3] };
  for (let [n, r] of [
    [E, `arc-n-1`],
    [g, `arc-n-2`],
    [y, `arc-n-3`],
    [S, `arc-n-4`],
    [f, `arc-n-5`],
  ]) {
    let i = G(r, `S`, n.x0, n.x1, n.z1, n.z1 - n.z0, t, {
      ...d,
      fixed:
        r === `arc-n-3`
          ? [[6.5, `melonpan`, void 0, 3]]
          : r === `arc-n-5`
            ? [[9.8, `miyage`, void 0, 3]]
            : void 0,
    });
    for (let e of i.units)
      ((e.endMin = r === `arc-n-1` && e === i.units[0]), (e.endMax = !1));
    e.push(i);
  }
  let p = G(`arc-s-1`, `N`, D.x0, D.x1, D.z0, D.z1 - D.z0, t, {
    ...d,
    fixed: [[6, `menchi`, void 0, 3]],
    tail: [[7, `imoyokan`, void 0, 4]],
  });
  e.push(p);
  let m = G(`arc-s-2`, `N`, fe.x0, fe.x1, fe.z0, fe.z1 - fe.z0, t, {
    ...d,
    fixed: [[6.4, `matcha`, void 0, 3]],
  });
  return ((m.units[m.units.length - 1].endMax = !1), e.push(m), e);
}
var Y = [
    { h: 5.9, rise: 0.9, ridge: 0.5 },
    { h: 4.1, rise: 1.9, ridge: 0.38 },
    { h: 4.1, rise: 1.2, ridge: 0.62 },
    { h: 4.3, rise: 2.1, ridge: 0.47 },
    { h: 3.9, rise: 1.4, ridge: 0.3 },
    { h: 4.6, rise: 1.7, ridge: 0.58 },
    { h: 4.1, rise: 1.2, ridge: 0.44 },
    { h: 5.2, rise: 2.6, ridge: 0.52 },
  ],
  yt = 0.5,
  X = 0.14,
  Z = 0.2;
function bt(e) {
  (e.need(`bunka:slats`, 512, 224, Je),
    e.need(`bunka:lobby`, 512, 192, Ye),
    e.need(`bunka:sign`, 512, 96, Xe),
    e.need(`bunka:plate`, 160, 128, Ze));
}
function xt(e, t, n) {
  if (e < 0) return n[0];
  let r = Y[e],
    i = k,
    a = i.x0 + (i.x1 - i.x0) * r.ridge,
    o = t <= a ? (t - i.x0) / (a - i.x0 || 1) : (i.x1 - t) / (i.x1 - a || 1);
  return n[e + 1] + r.rise * Math.max(0, Math.min(1, o));
}
function St(e, t, n) {
  let r = k,
    i = t.white(),
    a = t.uv(`bunka:slats`),
    o = t.uv(`bunka:lobby`),
    s = [n];
  for (let e of Y) s.push(s[s.length - 1] + e.h);
  let c = e.begin();
  for (let e = 0; e < Y.length; e++) {
    let t = Y[e],
      n = [r.x0, r.x1, r.x0 + (r.x1 - r.x0) * t.ridge];
    (e > 0 && n.push(r.x0 + (r.x1 - r.x0) * Y[e - 1].ridge),
      n.sort((e, t) => e - t));
    let l = n.map((t) => xt(e - 1, t, s) + (e ? X : 0)),
      u = n.map((t) => xt(e, t, s) - Z),
      d = Math.min(...l),
      f = Math.max(...u),
      p = e === 0 ? o : a;
    (c.setMaterial(0.55, 0.1, e === 0 ? 0.4 : 0.32, 3),
      L(c, 16777215),
      De(
        c,
        n.map((e) => [e, r.z0]).reverse(),
        [...l].reverse(),
        [...u].reverse(),
        p,
        d,
        f,
      ),
      De(
        c,
        n.map((e) => [e, r.z1]),
        l,
        u,
        p,
        d,
        f,
      ));
    let m = l[0],
      h = u[0],
      g = l[l.length - 1],
      _ = u[u.length - 1];
    if (
      (R(c, r.x0, r.z0, r.x0, r.z1, m, h, p),
      R(c, r.x1, r.z1, r.x1, r.z0, g, _, p),
      e > 0)
    ) {
      (c.setMaterial(0.85, 0, 0, 0), L(c, 8016948));
      for (let t = r.x0 + 0.45; t < r.x1 - 0.2; t += 0.9) {
        let n = xt(e - 1, t, s) + X,
          a = xt(e, t, s) - Z;
        z(c, t - 0.035, n, r.z0 - 0.22, t + 0.035, a, r.z0, i);
      }
      for (let e = r.z0 + 0.45; e < r.z1 - 0.2; e += 0.9)
        z(c, r.x0 - 0.22, m, e - 0.035, r.x0, h, e + 0.035, i);
    }
    let v = r.x0 + (r.x1 - r.x0) * t.ridge,
      y = r.x0 - yt,
      b = r.x1 + yt,
      x = r.z0 - yt,
      S = r.z1 + yt,
      C = s[e + 1],
      w = C + t.rise,
      ee = t.rise / (v - r.x0 || 1),
      T = t.rise / (r.x1 - v || 1),
      E = C - ee * yt,
      D = C - T * yt;
    (c.setMaterial(0.6, 0.35, 0, 0),
      L(c, e === Y.length - 1 ? 4869198 : 4078650),
      c.quad(
        y,
        E + X,
        S,
        v,
        w + X,
        S,
        v,
        w + X,
        x,
        y,
        E + X,
        x,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      c.quad(
        v,
        w + X,
        S,
        b,
        D + X,
        S,
        b,
        D + X,
        x,
        v,
        w + X,
        x,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      L(c, 5917242),
      c.quad(
        y,
        E - Z,
        x,
        v,
        w - Z,
        x,
        v,
        w - Z,
        S,
        y,
        E - Z,
        S,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      c.quad(
        v,
        w - Z,
        x,
        b,
        D - Z,
        x,
        b,
        D - Z,
        S,
        v,
        w - Z,
        S,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      L(c, 3025962));
    let O = [y, v, b],
      k = [E, w, D];
    (De(
      c,
      O.map((e) => [e, x]).reverse(),
      k.map((e) => e - Z).reverse(),
      k.map((e) => e + X).reverse(),
      i,
      0,
      1,
    ),
      De(
        c,
        O.map((e) => [e, S]),
        k.map((e) => e - Z),
        k.map((e) => e + X),
        i,
        0,
        1,
      ),
      R(c, y, x, y, S, E - Z, E + X, i),
      R(c, b, S, b, x, D - Z, D + X, i));
  }
  (c.setMaterial(0.4, 0.6, 0, 0), L(c, 2763308));
  for (let e of [r.x0 + 4.2, r.x0 + 7, r.x0 + 9.8])
    z(c, e - 0.05, n, r.z0 - 0.08, e + 0.05, n + 3.2, r.z0 + 0.02, i);
  return (
    z(
      c,
      r.x0 + 4.2,
      n + 3.15,
      r.z0 - 0.08,
      r.x0 + 9.8,
      n + 3.3,
      r.z0 + 0.02,
      i,
    ),
    c.setMaterial(0.6, 0, 0.4, 3),
    L(c, 16777215),
    R(
      c,
      r.x1 - 1,
      r.z0 - 0.06,
      r.x0 + 1,
      r.z0 - 0.06,
      n + 4.25,
      n + 5.2,
      t.uv(`bunka:sign`),
    ),
    R(
      c,
      r.x0 + 3.6,
      r.z0 - 0.04,
      r.x0 + 2.4,
      r.z0 - 0.04,
      n + 1.2,
      n + 2.15,
      t.uv(`bunka:plate`),
    ),
    R(
      c,
      r.x0 - 0.06,
      r.z0 + 2,
      r.x0 - 0.06,
      r.z0 + 11,
      n + 4.25,
      n + 5.2,
      t.uv(`bunka:sign`),
    ),
    e.end(`bunka`, (r.x0 + r.x1) / 2, (r.z0 + r.z1) / 2, 900),
    e.box(r.x0, r.z0, r.x1, r.z1, n, s[s.length - 1] + Y[Y.length - 1].rise),
    s[s.length - 1] + Y[Y.length - 1].rise - n
  );
}
var Ct = 8,
  wt = 5.5;
function Tt(e) {
  (e.need(`arc:panel`, 256, 128, Qe),
    e.need(
      `arc:gate`,
      512,
      128,
      $e(
        `asa.arcade.name`,
        `asa.arcade.latin`,
        `#f4efe2`,
        `#9a1a14`,
        `#3a3a3a`,
      ),
    ),
    e.need(
      `arc:banner:1`,
      64,
      192,
      We(`asa.arcade.banner`, `#9a1a14`, `#f8f0dc`),
    ),
    e.need(
      `arc:banner:2`,
      64,
      192,
      We(`asa.arcade.autumn`, `#c8641e`, `#fff4dc`),
    ),
    e.need(
      `orange:gate`,
      512,
      112,
      $e(`asa.orange.name`, `asa.orange.sub`, `#f08a1e`, `#ffffff`, `#5a2a0a`),
    ),
    e.need(
      `orange:flag`,
      64,
      192,
      We(`asa.orange.name`, `#f08a1e`, `#ffffff`),
    ));
}
function Et(e) {
  let t = O,
    n = (t.zn + t.zs) / 2,
    r = (t.zs - t.zn) / 2,
    i = [];
  for (let a = 0; a <= Ct; a++) {
    let o = -1 + (2 * a) / Ct;
    i.push([
      n + o * r,
      e + t.spring + (t.crown - t.spring) * Math.sqrt(Math.max(0, 1 - o * o)),
    ]);
  }
  return i;
}
function Dt(e, t, n) {
  let r = O,
    i = t.white(),
    a = t.uv(`arc:panel`),
    o = Et(n),
    s = r.x1 - r.x0;
  for (let c = 0; c < 4; c++) {
    let l = r.x0 + (s * c) / 4,
      u = r.x0 + (s * (c + 1)) / 4,
      d = e.begin();
    (d.setMaterial(0.35, 0.1, 0.28, 19), L(d, 16777215));
    for (let e = l; e < u - 0.01; e += wt) {
      let t = Math.min(u, e + wt);
      for (let n = 0; n < Ct; n++) {
        let [r, i] = o[n],
          [s, c] = o[n + 1];
        d.quad(e, i, r, t, i, r, t, c, s, e, c, s, a.u0, a.v0, a.u1, a.v1);
      }
    }
    (d.setMaterial(0.25, 0.4, 0, 0), L(d, 11844800));
    for (let e = 0; e < Ct; e++) {
      let [t, n] = o[e],
        [r, a] = o[e + 1];
      d.quad(
        l,
        a + 0.08,
        r,
        u,
        a + 0.08,
        r,
        u,
        n + 0.08,
        t,
        l,
        n + 0.08,
        t,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      );
    }
    (d.setMaterial(0.45, 0.7, 0, 16), L(d, 5922918));
    for (let e = l; e <= u + 0.01; e += wt) {
      for (let t = 0; t < Ct; t++) {
        let [n, r] = o[t],
          [a, s] = o[t + 1];
        B(d, e, r - 0.1, n, e, s - 0.1, a, 0.07, i);
      }
      (d.setMaterial(0.5, 0, 0.9, 17), L(d, 16773328));
      for (let t of [-2.2, 2.2]) {
        let a = (r.zn + r.zs) / 2 + t,
          o = n + r.spring + 0.2;
        z(d, e - 0.25, o - 0.16, a - 0.25, e + 0.25, o, a + 0.25, i, !0);
      }
      (d.setMaterial(0.45, 0.7, 0, 16), L(d, 5922918));
      for (let t of [-2.2, 2.2]) {
        let a = (r.zn + r.zs) / 2 + t,
          o = n + r.spring + 0.2,
          s =
            n +
            r.spring +
            (r.crown - r.spring) *
              Math.sqrt(Math.max(0, 1 - (t / ((r.zs - r.zn) / 2)) ** 2)) -
            0.1;
        B(d, e, o, a, e, s, a, 0.012, i);
      }
    }
    for (let e of [r.zn + 0.14, r.zs - 0.14])
      B(d, l, n + r.spring - 0.12, e, u, n + r.spring - 0.12, e, 0.1, i);
    B(
      d,
      l,
      n + r.crown - 0.12,
      (r.zn + r.zs) / 2,
      u,
      n + r.crown - 0.12,
      (r.zn + r.zs) / 2,
      0.06,
      i,
    );
    for (let e = l + wt; e < u - 0.5; e += wt * 2) {
      let a = Math.round((e - r.x0) / (wt * 2)) % 2 ? 2 : 1,
        o = t.uv(`arc:banner:${a}`);
      Ot(d, e, (r.zn + r.zs) / 2, n + 5, n + 6.6, 0.32, o, i);
    }
    e.end(`arcade-${c}`, (l + u) / 2, (r.zn + r.zs) / 2, 420);
  }
  let c = e.begin(),
    l = t.uv(`arc:gate`);
  for (let e of [r.x0 + 0.25, r.x1 - 0.25]) {
    let t = r.zn + 1.4,
      a = r.zs - 1.4,
      o = n + r.spring - 1.75,
      s = n + r.spring - 0.25;
    (c.setMaterial(0.6, 0, 0.35, 19),
      L(c, 16777215),
      R(c, e - 0.08, t, e - 0.08, a, o, s, l),
      R(c, e + 0.08, a, e + 0.08, t, o, s, l),
      c.setMaterial(0.5, 0.6, 0, 16),
      L(c, 3817026),
      z(c, e - 0.07, o - 0.06, t - 0.06, e + 0.07, s + 0.06, t, i),
      z(c, e - 0.07, o - 0.06, a, e + 0.07, s + 0.06, a + 0.06, i),
      z(c, e - 0.07, s, t, e + 0.07, s + 0.06, a, i),
      B(c, e, s + 0.06, t + 0.5, e, n + r.spring - 0.1, t + 0.5, 0.03, i),
      B(c, e, s + 0.06, a - 0.5, e, n + r.spring - 0.1, a - 0.5, 0.03, i));
  }
  e.end(`arcade-gates`, (r.x0 + r.x1) / 2, (r.zn + r.zs) / 2, 420);
}
function Ot(e, t, n, r, i, a, o, s) {
  (e.setMaterial(0.8, 0, 0.12, 17),
    L(e, 16777215),
    R(e, t - 0.01, n - a, t - 0.01, n + a, r, i, o),
    R(e, t + 0.01, n + a, t + 0.01, n - a, r, i, o),
    e.setMaterial(0.5, 0.6, 0, 16),
    L(e, 3815994),
    B(e, t, i + 0.04, n - a - 0.05, t, i + 0.04, n + a + 0.05, 0.02, s));
}
function kt(e, t, n) {
  let r = t.white(),
    i = e.begin(),
    a = 605.15,
    o = 614.85,
    s = -1277.6,
    c = n + 4.5,
    l = n + 5.8;
  (i.setMaterial(0.45, 0.6, 0, 0), L(i, 6975090));
  for (let e of [a, o])
    z(i, e - 0.11, n, -1277.7099999999998, e + 0.11, l + 0.2, -1277.49, r);
  (z(i, a, l + 0.05, -1277.6799999999998, o, l + 0.2, -1277.52, r),
    i.setMaterial(0.6, 0, 0.38, 3),
    L(i, 16777215));
  let u = t.uv(`orange:gate`);
  (R(i, 605.35, -1277.54, 614.65, -1277.54, c, l, u),
    R(i, 614.65, -1277.6599999999999, 605.35, -1277.6599999999999, c, l, u));
  let d = t.uv(`orange:flag`);
  i.setMaterial(0.8, 0, 0.12, 1);
  for (let [e, t] of [
    [a, -1],
    [o, 1],
  ]) {
    let r = e + t * 0.15,
      a = e + t * 0.75;
    (R(
      i,
      Math.max(r, a),
      -1277.61,
      Math.min(r, a),
      -1277.61,
      n + 2.4,
      n + 4.2,
      d,
    ),
      R(
        i,
        Math.min(r, a),
        -1277.59,
        Math.max(r, a),
        -1277.59,
        n + 2.4,
        n + 4.2,
        d,
      ));
  }
  (e.end(`orange-gate`, 610, s, 300),
    e.circles.push(
      { x: a, z: s, r: 0.16, y0: n, y1: l },
      { x: o, z: s, r: 0.16, y0: n, y1: l },
    ));
}
var At = [
    `asa.lantern.nikomi`,
    `asa.lantern.motsuyaki`,
    `asa.lantern.sake`,
    `asa.lantern.hoppy`,
    `asa.lantern.izakaya`,
  ],
  jt = 1.75;
function Mt() {
  let e = [],
    r = new t(n(`asa-hoppy`, 1)),
    i = 0;
  for (let [t, n, a] of [
    [`E`, d.x0 + 0.12, m.x0],
    [`W`, m.x1, d.x1 - 0.12],
  ]) {
    let o = d.z0 + 0.1,
      s = d.z1 - 0.1;
    for (; o < s - 0.5;) {
      let c = r.range(4.4, 7.2);
      s - (o + c) < 3.6 && (c = s - o);
      let l = r.weighted([
        [1, 0.2],
        [2, 0.62],
        [3, 0.18],
      ]);
      (e.push({
        x0: n,
        x1: a,
        z0: o,
        z1: o + c,
        face: t,
        i: (i * 5 + Math.floor(r.next() * 3)) % 12,
        floors: l,
        h: W + (l - 1) * 3 + at,
        fac: [0, 1, 2, 3, 4, 5, 6, 7][Math.floor(r.next() * 8)],
        tent: r.weighted([
          [0, 0.35],
          [1, 0.3],
          [2, 0.15],
          [3, 0.2],
        ]),
        tables: c > 5.8 ? 2 : 1,
        endMin: o === d.z0 + 0.1,
        endMax: !1,
      }),
        i++,
        (o += c));
    }
    e[e.length - 1].endMax = !0;
  }
  return e;
}
function Nt(e) {
  for (let t = 0; t < 12; t++)
    (e.need(`iza:front:${t}`, 320, 160, et(t)),
      e.need(`iza:board:${t}`, 320, 56, tt(t)),
      e.need(`iza:shut:${t}`, 160, 128, nt(t)));
  for (let t of At) e.need(`lantern:${t}`, 64, 96, Ue(t));
  (e.need(`iza:sign`, 512, 128, rt),
    e.need(
      `aboard:hoppy:1`,
      96,
      144,
      Ge(`asa.hoppy.aboard.1`, `asa.hoppy.aboard.2`),
    ),
    e.need(
      `aboard:hoppy:2`,
      96,
      144,
      Ge(`asa.hoppy.aboard.3`, `asa.hoppy.aboard.4`, `#7a1a14`),
    ));
}
var Pt = [
  [13115930, 13115930],
  [13115930, 16052456],
  [2783802, 16052456],
];
function Ft(e, r, a) {
  let o = r.white(),
    s = m;
  (e.setMaterial(0.88, 0, 0, 0),
    L(e, 4868684),
    xe(e, s.x0, s.z0, s.x1, s.z1, a + i.GROUND, o));
  let c = new t(n(`asa-hoppy-floor`, 1));
  L(e, 3815996);
  for (let t = 0; t < 9; t++) {
    let t = s.z0 + 4 + c.next() * (s.z1 - s.z0 - 8),
      n = s.x0 + 0.6 + c.next() * 3.2;
    xe(
      e,
      n,
      t,
      n + 0.8 + c.next() * 1.2,
      t + 0.8 + c.next() * 2.5,
      a + i.GROUND + i.PAINT,
      o,
    );
  }
  L(e, 6974056);
  let l = (s.x0 + s.x1) / 2;
  xe(e, l - 0.15, s.z0 + 0.4, l + 0.15, s.z1 - 0.4, a + i.GROUND + i.PAINT, o);
  let u = r.uv(`iza:sign`);
  for (let [t, n] of [
    [s.z0 + 0.3, -1],
    [s.z1 - 0.3, 1],
  ]) {
    let r = s.x0 + 0.25,
      i = s.x1 - 0.25,
      c = a + 3.85,
      l = a + 4.95;
    (e.setMaterial(0.45, 0.6, 0, 0), L(e, 4869714));
    for (let n of [r, i])
      z(e, n - 0.07, a, t - 0.07, n + 0.07, l + 0.1, t + 0.07, o);
    (e.setMaterial(0.6, 0, 0.4, 3),
      L(e, 16777215),
      n < 0
        ? (R(e, i - 0.1, t - 0.06, r + 0.1, t - 0.06, c, l, u),
          R(e, r + 0.1, t + 0.06, i - 0.1, t + 0.06, c, l, u))
        : (R(e, r + 0.1, t + 0.06, i - 0.1, t + 0.06, c, l, u),
          R(e, i - 0.1, t - 0.06, r + 0.1, t - 0.06, c, l, u)));
  }
}
function It(e, t, n, r, i) {
  let a = t.white(),
    o = m,
    s = r + 4.3,
    c = (e) => [o.x0 + (o.x1 - o.x0) * e, s - 1.4 * e * (1 - e)];
  (e.setMaterial(0.5, 0.5, 0, 0), L(e, 1710618));
  for (let t = 0; t < 8; t++) {
    let [r, i] = c(t / 8),
      [o, s] = c((t + 1) / 8);
    B(e, r, i, n, o, s, n, 0.008, a);
  }
  for (let r = 1; r <= 5; r++) {
    let [o, s] = c(r / 6);
    dt(
      e,
      o,
      s - 0.42,
      n,
      t.uv(`lantern:${At[(((r + i) % At.length) + At.length) % At.length]}`),
      a,
      0.15,
      0.38,
    );
  }
}
function Lt(e, t, n, r) {
  let i = Mt(),
    a = [],
    o = [];
  t.white();
  let s = e.begin();
  Ft(s, t, n);
  for (let e = m.z0 + 6, r = 0; e < m.z1 - 4; e += 9.5, r++) It(s, t, e, n, r);
  e.end(`hoppy-alley`, (m.x0 + m.x1) / 2, (m.z0 + m.z1) / 2, 360);
  let c = new Map();
  for (let e of i) {
    let t = `${e.face}${Math.floor((e.z0 - m.z0) / 30)}`,
      n = c.get(t);
    (n || c.set(t, (n = [])), n.push(e));
  }
  for (let [i, l] of c) {
    let c = (l[0].z0 + l[l.length - 1].z1) / 2,
      u = (l[0].x0 + l[0].x1) / 2;
    s = e.begin();
    for (let e of l) Rt(s, t, e, n);
    (e.end(`hoppy-${i}`, u, c, 420), (s = e.begin()));
    for (let e of l) zt(s, t, e, n, r, a, o);
    (e.end(`hoppy-${i}-open`, u, c, 160, `barOpen`), (s = e.begin()));
    for (let e of l) {
      let r = lt(e);
      (s.setMaterial(0.6, 0.3, 0, 0),
        L(s, 16777215),
        q(s, r, 0.04, 0.96, 0.02, n, n + 2.62, t.uv(`iza:shut:${e.i}`)));
    }
    e.end(`hoppy-${i}-shut`, u, c, 160, `barShut`);
    for (let t of l) e.box(t.x0, t.z0, t.x1, t.z1, n, n + t.h);
  }
  return { units: i.length, seats: a, tables: o };
}
function Rt(e, t, n, r) {
  let i = t.white(),
    a = lt(n),
    o = r + n.h,
    s = [14209732, 13222578, 12171440, 11052186, 13617340][n.i % 5],
    [c, l] = K(a, 0, -a.depth),
    [u, d] = K(a, 1, -a.depth),
    [f, p] = K(a, 0, 0),
    [m, h] = K(a, 1, 0);
  (e.setMaterial(0.9, 0, 0, 0),
    L(e, n.floors === 1 ? 6974062 : 9078656),
    xe(e, Math.min(n.x0, n.x1), n.z0, Math.max(n.x0, n.x1), n.z1, o, i),
    L(e, s, 0.82),
    R(e, u, d, c, l, r, o, i),
    R(e, c, l, f, p, r, o, i),
    R(e, m, h, u, d, r, o, i));
  let g = n.face === `W`;
  for (let [i, a, o, _, v] of [
    [g ? n.endMin : n.endMax, c, l, f, p],
    [g ? n.endMax : n.endMin, m, h, u, d],
  ]) {
    if (!i) continue;
    let c = -(v - o),
      l = _ - a,
      u = Math.hypot(c, l) || 1,
      d = (c / u) * 0.03,
      f = (l / u) * 0.03,
      p = Math.hypot(_ - a, v - o),
      m = Math.max(1, Math.round(p / 6));
    (e.setMaterial(0.85, 0, 0.3, 33), L(e, 16777215));
    let h = t.uv(`fac:${(n.fac + 2) % 12}`);
    for (let t = 1; t < n.floors; t++) {
      let n = r + W + (t - 1) * 3;
      for (let t = 0; t < m; t++)
        R(
          e,
          a + ((_ - a) * t) / m + d,
          o + ((v - o) * t) / m + f,
          a + ((_ - a) * (t + 1)) / m + d,
          o + ((v - o) * (t + 1)) / m + f,
          n,
          n + 3,
          h,
        );
    }
    e.setMaterial(0.35, 0.1, 0.4, 3);
    let g = 0.45,
      y = 0.92;
    (R(
      e,
      a + (_ - a) * g + d,
      o + (v - o) * g + f,
      a + (_ - a) * y + d,
      o + (v - o) * y + f,
      r + 0.9,
      r + 2.3,
      t.uv(`iza:front:${(n.i + 3) % 12}`),
    ),
      e.setMaterial(0.6, 0, 0.38, 3),
      R(
        e,
        a + (_ - a) * 0.08 + d * 3,
        o + (v - o) * 0.08 + f * 3,
        a + (_ - a) * 0.9 + d * 3,
        o + (v - o) * 0.9 + f * 3,
        r + 2.7,
        r + 3.25,
        t.uv(`iza:board:${n.i}`),
      ),
      e.setMaterial(0.9, 0, 0, 0),
      L(e, s, 0.82));
  }
  (e.setMaterial(0.85, 0, 0.3, 33), L(e, 16777215));
  let _ = t.uv(`fac:${n.fac % 12}`),
    v = Math.max(1, Math.round(a.wid / 6));
  for (let t = 1; t < n.floors; t++) {
    let n = r + W + (t - 1) * 3;
    for (let t = 0; t < v; t++) q(e, a, t / v, (t + 1) / v, 0, n, n + 3, _);
  }
  if (
    (e.setMaterial(0.9, 0, 0, 0),
    L(e, s),
    q(e, a, 0, 1, 0, o - at, o, i),
    q(e, a, 0.04, 0.96, 0, r + 2.6, r + W, i),
    q(e, a, 0, 0.04, 0, r, r + W, i),
    q(e, a, 0.96, 1, 0, r, r + W, i),
    e.setMaterial(0.7, 0, 0, 0),
    L(e, 2762274),
    q(e, a, 0.02, 0.98, 0.06, r + 2.95, r + 3.55, i),
    e.setMaterial(0.6, 0, 0.38, 3),
    L(e, 16777215),
    q(e, a, 0.03, 0.97, 0.12, r + 2.98, r + 3.52, t.uv(`iza:board:${n.i}`)),
    n.tent < 3)
  ) {
    let [t, o] = Pt[n.tent];
    e.setMaterial(0.85, 0, 0, 0);
    let s = t === o ? 1 : 6;
    for (let n = 0; n < s; n++)
      (L(e, n % 2 ? o : t),
        J(e, a, n / s, (n + 1) / s, 0, r + 2.92, jt, r + 2.5, i),
        L(e, n % 2 ? o : t, 0.6),
        J(e, a, n / s, (n + 1) / s, 0, r + 2.91, jt, r + 2.49, i, !0));
    (L(e, t),
      q(e, a, 0, 1, jt, r + 2.24, r + 2.5, i),
      e.setMaterial(0.5, 0.6, 0, 0),
      L(e, 9080466));
    for (let t of [0.02, 0.98]) {
      let [n, o] = K(a, t, 1.7);
      B(e, n, r, o, n, r + 2.5, o, 0.025, i);
    }
  } else
    (e.setMaterial(0.55, 0.15, 0, 0),
      L(e, 5132888),
      J(e, a, -0.02, 1.02, 0, r + 2.92, 0.85, r + 2.6, i),
      L(e, 2762790),
      J(e, a, -0.02, 1.02, 0, r + 2.91, 0.85, r + 2.59, i, !0));
  let y = n.tent < 3 ? 1.65 : 0.6,
    b = a.wid > 5.6 ? 3 : 2;
  for (let o = 0; o < b; o++) {
    let [s, c] = K(a, 0.18 + (0.64 * o) / Math.max(1, b - 1), y);
    dt(
      e,
      s,
      r + (n.tent < 3 ? 1.82 : 2.06),
      c,
      t.uv(`lantern:${At[(n.i + o) % At.length]}`),
      i,
      0.18,
      0.46,
    );
  }
}
function zt(e, t, n, r, i, a, o) {
  let s = t.white(),
    c = lt(n);
  (e.setMaterial(0.35, 0.1, 0.3, 3),
    L(e, 16777215),
    q(e, c, 0.04, 0.96, 0.03, r, r + 2.62, t.uv(`iza:front:${n.i}`)));
  let l = (c.rx - c.lx) / c.wid,
    u = (c.rz - c.lz) / c.wid;
  for (let t = 0; t < n.tables; t++) {
    let [i, d] = K(c, n.tables === 1 ? 0.5 : 0.28 + t * 0.44, 1);
    e.setMaterial(0.7, 0, 0, 0);
    let f = (n.i + t) % 3;
    if (f < 2)
      (L(e, f ? 14197783 : 2775728),
        z(e, i - 0.22, r, d - 0.22, i + 0.22, r + 0.33, d + 0.22, s),
        z(e, i - 0.22, r + 0.33, d - 0.22, i + 0.22, r + 0.66, d + 0.22, s),
        L(e, 12094040),
        z(
          e,
          i - 0.36 * Math.abs(u) - 0.3 * Math.abs(l),
          r + 0.66,
          d - 0.36 * Math.abs(l) - 0.3 * Math.abs(u),
          i + 0.36 * Math.abs(u) + 0.3 * Math.abs(l),
          r + 0.69,
          d + 0.36 * Math.abs(l) + 0.3 * Math.abs(u),
          s,
        ));
    else {
      (L(e, 15262940),
        z(
          e,
          i - 0.32 * Math.abs(u) - 0.55 * Math.abs(l),
          r + 0.68,
          d - 0.32 * Math.abs(l) - 0.55 * Math.abs(u),
          i + 0.32 * Math.abs(u) + 0.55 * Math.abs(l),
          r + 0.71,
          d + 0.32 * Math.abs(l) + 0.55 * Math.abs(u),
          s,
        ),
        L(e, 9080466));
      for (let [t, n] of [
        [-0.5, -0.27],
        [0.5, -0.27],
        [0.5, 0.27],
        [-0.5, 0.27],
      ]) {
        let a = i + l * t + c.nx * n,
          o = d + u * t + c.nz * n;
        B(e, a, r, o, a, r + 0.68, o, 0.015, s);
      }
    }
    (e.setMaterial(0.4, 0.1, 0, 0),
      L(e, 16052456),
      z(e, i - 0.1, r + 0.71, d - 0.1, i + 0.1, r + 0.75, d + 0.1, s),
      L(e, 15253616),
      z(
        e,
        i + l * 0.18 - 0.04,
        r + 0.71,
        d + u * 0.18 - 0.04,
        i + l * 0.18 + 0.04,
        r + 0.86,
        d + u * 0.18 + 0.04,
        s,
      ),
      e.setMaterial(0.7, 0, 0, 0));
    for (let o of [-1, 1]) {
      let c = i + l * o * 0.7,
        f = d + u * o * 0.7;
      (L(e, (n.i + t + o) % 2 ? 13112860 : 2775728),
        z(e, c - 0.17, r, f - 0.17, c + 0.17, r + 0.42, f + 0.17, s),
        a.push({ x: c, z: f, h: Math.atan2(i - c, -(d - f)) }));
    }
    o.push({ x: i, z: d });
  }
  if (i >= 1 && n.i % 2 == 0) {
    let [i, a] = K(c, 0.04, 1.55),
      o = t.uv(`aboard:hoppy:${(n.i >> 1) % 2 ? 2 : 1}`);
    (e.setMaterial(0.7, 0, 0.08, 1), L(e, 16777215));
    let d = l * 0.27,
      f = u * 0.27;
    (e.quad(
      i - d + c.nx * 0.15,
      r,
      a - f + c.nz * 0.15,
      i + d + c.nx * 0.15,
      r,
      a + f + c.nz * 0.15,
      i + d + c.nx * 0.02,
      r + 0.92,
      a + f + c.nz * 0.02,
      i - d + c.nx * 0.02,
      r + 0.92,
      a - f + c.nz * 0.02,
      o.u0,
      o.v0,
      o.u1,
      o.v1,
    ),
      L(e, 6965802),
      e.quad(
        i + d - c.nx * 0.15,
        r,
        a + f - c.nz * 0.15,
        i - d - c.nx * 0.15,
        r,
        a - f - c.nz * 0.15,
        i - d - c.nx * 0.02,
        r + 0.92,
        a - f - c.nz * 0.02,
        i + d - c.nx * 0.02,
        r + 0.92,
        a + f - c.nz * 0.02,
        s.u0,
        s.v0,
        s.u1,
        s.v1,
      ));
  }
}
function Bt(e) {
  (e.need(`rick:name`, 128, 48, it),
    e.need(
      `flag:kaminarimon`,
      64,
      192,
      We(`asa.flag.kaminarimon`, `#9a1a14`, `#f8f0dc`),
    ),
    e.need(
      `flag:asakusa`,
      64,
      192,
      We(`asa.flag.asakusa`, `#1d2b5a`, `#f4f0e0`),
    ),
    e.need(`last`, 64, 96, Ke));
}
function Vt(e, t) {
  let n = t.white();
  for (let [r, i, a] of [
    [`rick-a`, 11539482, 1710618],
    [`rick-b`, 11539482, 8002106],
    [`rick-c`, 1710618, 11539482],
  ]) {
    let o = e.begin(),
      s = 0.6,
      c = 0.62;
    (o.setMaterial(0.5, 0.3, 0, 0), L(o, 1315860));
    for (let e of [-1, 1]) Ee(o, e * c, s, 0, 0, 1, s, 0.03, 12, n, 16);
    L(o, 2763306);
    for (let e of [-1, 1])
      z(
        o,
        e * c - 0.06,
        0.54,
        -0.06,
        e * c + 0.06,
        0.6599999999999999,
        0.06,
        n,
      );
    (B(o, -0.62, s, 0, c, s, 0, 0.03, n),
      o.setMaterial(0.25, 0.2, 0, 0),
      L(o, 1118481),
      z(o, -0.5, 0.72, -0.4, 0.5, 1.05, 0.32, n, !0),
      L(o, 11569722),
      z(o, -0.505, 0.98, -0.405, 0.505, 1, 0.325, n),
      o.setMaterial(0.8, 0, 0, 0),
      L(o, i),
      z(o, -0.46, 1.05, -0.32, 0.46, 1.16, 0.26, n),
      z(o, -0.46, 1.05, -0.42, 0.46, 1.72, -0.32, n),
      o.setMaterial(0.25, 0.2, 0, 0),
      L(o, 1118481));
    for (let e of [-1, 1])
      z(o, e * 0.52 - 0.04, 1.05, -0.42, e * 0.52 + 0.04, 1.36, 0.26, n);
    (o.setMaterial(0.9, 0, 0, 0),
      L(o, a),
      z(o, -0.44, 0.6, 0.26, 0.44, 1.17, 0.3, n),
      o.setMaterial(0.6, 0.05, 0, 0),
      L(o, 921102));
    let l = { y: 1.2, z: -0.38 },
      u = 0.62;
    for (let e = 0; e < 5; e++) {
      let t = Math.PI / 2 + (e / 5) * (Math.PI * 0.42),
        r = Math.PI / 2 + ((e + 1) / 5) * (Math.PI * 0.42),
        i = l.y + Math.sin(t) * u,
        a = l.z + Math.cos(t) * u,
        s = l.y + Math.sin(r) * u,
        c = l.z + Math.cos(r) * u;
      (o.quad(
        -0.56,
        i,
        a,
        0.56,
        i,
        a,
        0.56,
        s,
        c,
        -0.56,
        s,
        c,
        n.u0,
        n.v0,
        n.u1,
        n.v1,
      ),
        o.quad(
          0.56,
          i,
          a,
          -0.56,
          i,
          a,
          -0.56,
          s,
          c,
          0.56,
          s,
          c,
          n.u0,
          n.v0,
          n.u1,
          n.v1,
        ));
    }
    (o.setMaterial(0.5, 0.1, 0, 0),
      L(o, 16777215),
      R(o, 0.42, -0.41, -0.42, -0.41, 0.76, 1, t.uv(`rick:name`)),
      L(o, 1118481),
      z(o, -0.42, 0.36, 0.34, 0.42, 0.42, 0.9, n));
    for (let e of [-1, 1])
      B(o, e * 0.4, 0.42, 0.36, e * 0.45, 0.74, 0.3, 0.02, n);
    for (let e of [-1, 1])
      B(o, e * 0.47, 0.98, 0.3, e * 0.42, 0.34, 2.5, 0.035, n);
    (B(o, -0.42, 0.34, 2.45, 0.42, 0.34, 2.45, 0.03, n),
      L(o, 6965802),
      z(o, -0.3, 0, 2.3, 0.3, 0.3, 2.6, n),
      e.end(`kit:${r}`, 0, 0, 0));
  }
  {
    let r = e.begin();
    (r.setMaterial(0.6, 0.5, 0, 0), L(r, 9080466));
    for (let e of [1, -1])
      (B(r, 0, 6.05, 0, 0, 6.05, e * 0.85, 0.022, n),
        B(r, 0, 4.05, 0, 0, 4.05, e * 0.85, 0.022, n));
    (r.setMaterial(0.8, 0, 0.12, 1), L(r, 16777215));
    for (let e of [1, -1]) {
      let n = t.uv(e > 0 ? `flag:kaminarimon` : `flag:asakusa`),
        i = e > 0 ? 0.16 : -0.82,
        a = e > 0 ? 0.82 : -0.16;
      (R(r, 0.012, a, 0.012, i, 4, 6, n), R(r, -0.012, i, -0.012, a, 4, 6, n));
    }
    e.end(`kit:flag`, 0, 0, 0);
  }
  {
    let r = e.begin();
    (r.setMaterial(0.6, 0.4, 0, 0),
      L(r, 9080466),
      Ce(r, 0, 0, 0, 1.75, 0.02, n, 6),
      r.setMaterial(0.7, 0, 0.05, 1),
      L(r, 16777215));
    let i = t.uv(`last`);
    (Se(r, 0, 0.03, 1.15, 1.75, 0.2, 0.012, 0, 1, n, i, i),
      e.end(`kit:last`, 0, 0, 0));
  }
}
var Ht = (e, t) =>
  h.some(
    (n) =>
      n.scope !== `buildings` &&
      e >= n.minX &&
      e <= n.maxX &&
      t >= n.minZ &&
      t <= n.maxZ,
  );
function Ut(e) {
  let t = [],
    n = e.plan;
  oe.forEach(([e, r, i], a) =>
    t.push({
      model: `rick-${`abc`[a % 3]}`,
      x: e,
      y: n.groundHeight(e, r),
      z: r,
      fx: Math.sin(i),
      fz: -Math.cos(i),
      range: 170,
      group: `day`,
    }),
  );
  let r = re(n),
    i = n.roads.find((e) => e.id === `ne-kaminarimon`);
  if (i) {
    let e = r.nodesOf(i);
    for (let a of [-1, 1])
      for (let o = 0; o + 1 < e.length; o++) {
        let s = r.primaryLights(i, e[o], e[o + 1], a);
        if (s && s.kind === `tall`)
          for (let e of s.ts) {
            let r = a * (i.halfWidth + 0.55),
              o = e,
              s = i.at + r;
            Ht(o, s) ||
              t.push({
                model: `flag`,
                x: o,
                y: n.groundHeight(o, s),
                z: s,
                fx: 0,
                fz: -a,
                range: 260,
              });
          }
      }
  }
  let a = b.x1 + 6.6,
    o = -1254.2;
  return (
    t.push({
      model: `last`,
      x: a,
      y: n.groundHeight(a, o),
      z: o,
      fx: 1,
      fz: 0,
      range: 120,
      group: `day`,
    }),
    t
  );
}
var Wt = e({
    init: () => $t,
    keepResident: () => cn,
    start: () => an,
    unload: () => sn,
    update: () => on,
  }),
  Q = null,
  Gt = !1,
  Kt = !1,
  qt = -1,
  Jt = Error(`asakusa: dropped while building`),
  Yt = { shop: [9.5, 19.5], eat: [11, 20.5], bar: [10.5, 23], day: C },
  $ = (e, [t, n]) => e >= t && e < n,
  Xt = [],
  Zt = [];
function Qt(e) {
  let t = 0;
  for (let n of w) {
    let r = e.plan.blocks.find((e) => e.id === n.block);
    if (!r) {
      t++;
      continue;
    }
    for (let i of ne(e.plan, r, null))
      i.x1 > n.x0 + 0.08 &&
        i.x0 < n.x1 - 0.08 &&
        i.z1 > n.z0 + 0.08 &&
        i.z0 < n.z1 - 0.08 &&
        ((i.x0 >= n.x0 - 0.15 &&
          i.x1 <= n.x1 + 0.15 &&
          i.z0 >= n.z0 - 0.15 &&
          i.z1 <= n.z1 + 0.15) ||
          (t++,
          console.warn(
            `[asakusa] lot run ${n.id}: generic lot ${i.x0.toFixed(2)}…${i.x1.toFixed(2)} × ${i.z0.toFixed(2)}…${i.z1.toFixed(2)} pokes out — the lots moved (data.ts)`,
          )));
  }
  return t;
}
async function $t(e) {
  if (Gt || Q) return;
  ((Gt = !0), (Kt = !1));
  let t = performance.now(),
    n = 0,
    i = ``,
    a = performance.now(),
    c = async (t = !1, r = ``) => {
      let o = performance.now() - a;
      if (t || o > 1.2) {
        if ((o > n && ((n = o), (i = r)), await e.yieldFrame(), Kt)) throw Jt;
        a = performance.now();
      }
    };
  try {
    let l =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      u = Qt(e);
    await c(!0, `check`);
    let d = new ve(),
      f = vt();
    if (
      (ct(d, f),
      bt(d),
      Tt(d),
      Nt(d),
      Bt(d),
      await c(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      Kt)
    )
      throw Jt;
    a = performance.now();
    let h = r(2048, e.quality),
      g = d.paint(h),
      _ = g.next();
    for (; !_.done;) (await c(!1, `paint`), (_ = g.next()));
    let v = _.value,
      y = new Ae(),
      b = e.plan,
      x = await gt(y, d, b, f, l, () => c(!1, `rows`));
    (St(y, d, b.groundHeight((k.x0 + k.x1) / 2, k.z0 + 1)),
      await c(!1, `bunka`),
      Dt(y, d, b.groundHeight((O.x0 + O.x1) / 2, (O.zn + O.zs) / 2)),
      kt(y, d, b.groundHeight(610, -1277.6)),
      await c(!1, `arcade`));
    let S = Lt(y, d, b.groundHeight((m.x0 + m.x1) / 2, (m.z0 + m.z1) / 2), l);
    ((Zt = S.seats), await c(!1, `hoppy`), Vt(y, d));
    let C = Ut(e);
    await c(!1, `kit`);
    let w = y.pieces.map((e) => ({ name: e.name, geo: e.geo })),
      ee = s(`opaque`, {
        policy: e.quality.materials,
        map: v,
        batched: !0,
        name: `asakusa`,
      }),
      T = new p(
        `asakusa`,
        ee,
        w,
        y.pieces.length + C.length + 16,
        !!e.quality.shadows,
      );
    ((T.mesh.userData.owner = `asakusa`), T.enableCulling(e.camera));
    let E = new Map(),
      D = (e, t) => {
        let n = E.get(e);
        (n || E.set(e, (n = [])), n.push(t));
      },
      A = 0;
    for (let e of y.pieces) {
      if (
        ((A += e.geo.getAttribute(`position`).count), e.name.startsWith(`kit:`))
      )
        continue;
      let t = T.add(
        T.models.get(e.name),
        e.matrix ?? Te,
        e.x,
        e.z,
        e.range,
        e.group === `always`,
      );
      e.group !== `always` && D(e.group, t);
    }
    let te = new Float32Array(16);
    for (let e of C) {
      we(te, e.x, e.y, e.z, e.fx, e.fz);
      let t = T.add(
        T.models.get(`kit:${e.model}`),
        te,
        e.x,
        e.z,
        e.range,
        !e.group,
      );
      e.group && D(e.group, t);
    }
    await c(!1, `batch`);
    let j = 0;
    for (let t of y.obbs)
      (e.statics.addOBB(t.x, t.z, t.hx, t.hz, t.rot, t.y0, t.y1, `building`),
        j++);
    for (let t of y.circles)
      (e.statics.addCircle(t.x, t.z, t.r, t.y0, t.y1, `pole`), j++);
    if (Kt) throw Jt;
    e.scene.add(T.mesh);
    let ne = e.params.has(`asaatlas`);
    (ne || o(v),
      (Q = {
        batch: T,
        tex: v,
        groups: E,
        state: new Map(),
        stats: {
          pieces: y.pieces.length,
          instances: T.count,
          tris: Math.round(y.tris),
          verts: A,
          units: x,
          izakaya: S.units,
          atlas: h,
          atlasUsed: d.used,
          overflow: d.overflow,
          colliders: j,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: i,
          slowCell: `${d.slowKey} ${d.slowMs.toFixed(1)}`,
          lotMismatch: u,
        },
      }));
    for (let e of w) e.geo.dispose();
    (tn(S.tables),
      (e.params.has(`debug`) || e.params.has(`asatest`)) &&
        (window.__asakusa = {
          stats: () => Q?.stats,
          batch: () =>
            Q && {
              count: Q.batch.count,
              shown: Q.batch.shown,
              tris: Q.batch.shownTris,
            },
          state: () => Q && Object.fromEntries(Q.state),
          atlas: () => (ne ? v.image.toDataURL(`image/png`) : null),
        }),
      console.info(
        `[init] districts:asakusa ${y.pieces.length} pieces, ${x} shops, ${S.units} izakaya, ${Q.stats.tris} tris / ${A} verts, atlas ${h} (${d.used}/2816 used, ${d.overflow} overflow), ${j} colliders, ${Q.stats.buildMs} ms (slice max ${Q.stats.maxSliceMs} ms at ${i})${u ? `, ${u} lot mismatches` : ``}`,
      ));
  } catch (e) {
    if (e !== Jt) throw e;
  } finally {
    Gt = !1;
  }
}
function en(e, t, n, r, i, a, o) {
  try {
    let s = e.peds.crowd(t, n, r, i, a, o);
    return typeof s == `function` ? s : null;
  } catch {
    return null;
  }
}
function tn(e) {
  Xt = [];
  let t = (e, t, n, r, i) =>
      Xt.push({ x: e, z: t, r: n, on: !1, release: null, want: r, spawn: i }),
    n = (e) => $(e, Yt.day),
    r = (e) => $(e, Yt.shop),
    i = (e) => $(e, Yt.bar);
  for (let [e, r, i] of u)
    t(e, r, 140, n, (t) =>
      en(t, e, r, 0.35, 1, [`vendor`], {
        mode: `watch`,
        lookX: e + Math.sin(i) * 5,
        lookZ: r - Math.cos(i) * 5,
        poses: [`idle`, `wave`, `chat`],
        dress: `festival`,
        sheltered: !1,
      }),
    );
  let a = (b.x0 + b.x1) / 2;
  (t(
    a + 3.5,
    -1254,
    130,
    (e) => $(e, [10, 18.5]),
    (e) =>
      en(
        e,
        a + 3.4,
        -1254,
        1.2,
        9,
        [`tourist`, `auntie`, `tourist`, `elder`, `student`],
        { mode: `queue`, lookX: a, lookZ: b.door - 0.4 },
      ),
  ),
    t(700, -1256.5, 140, r, (e) =>
      en(e, 700, -1256.5, 6, 6, [`tourist`], {
        mode: `mill`,
        dress: `festival`,
      }),
    ),
    t(650, -1256, 140, r, (e) =>
      en(e, 650, -1256, 5, 4, [`tourist`], { mode: `mill`, dress: `festival` }),
    ),
    t(600, -1310, 140, r, (e) =>
      en(e, 600, -1310, 7, 5, [`tourist`], {
        mode: `mill`,
        dress: `festival`,
        sheltered: !0,
      }),
    ));
  for (let e of [568, 588, 626])
    t(e, -1310, 140, r, (t) =>
      en(
        t,
        e,
        -1310,
        8,
        7,
        [`tourist`, `tourist`, `auntie`, `elder`, `student`],
        { mode: `mill`, sheltered: !0 },
      ),
    );
  for (let e of [-1405, -1370, -1335])
    t(500.3, e, 120, i, (t) =>
      en(t, 500.3, e, 5, 5, [`uncle`, `office`, `tourist`, `elder`, `uncle`], {
        mode: `mill`,
      }),
    );
}
var nn = [];
function rn(e, t) {
  let n = e.player.position,
    r =
      t &&
      Math.hypot(
        n.x - 500.3,
        Math.max(0, Math.abs(n.z - (m.z0 + m.z1) / 2) - (m.z1 - m.z0) / 2),
      ) < 70,
    i = e.peds.spawnScripted;
  if (!r || !i) {
    for (let e of nn)
      try {
        e.p?.release();
      } catch {}
    nn = [];
    return;
  }
  let a = Zt.map((e, t) => ({ i: t, d: Math.hypot(e.x - n.x, e.z - n.z) }))
      .filter((e) => e.i % 2 == 0 || e.i % 7 == 3)
      .sort((e, t) => e.d - t.d)
      .slice(0, 14)
      .map((e) => e.i),
    o = new Set(a);
  nn = nn.filter((e) => {
    if (o.has(e.i)) return !0;
    try {
      e.p?.release();
    } catch {}
    return !1;
  });
  let s = new Set(nn.map((e) => e.i)),
    c = [`uncle`, `office`, `uncle`, `elder`, `tourist`, `office`];
  for (let t of a) {
    if (s.has(t)) continue;
    let n = Zt[t],
      r = null;
    try {
      r = i.call(e.peds, n.x, n.z, {
        kind: c[t % c.length],
        pose: `sit`,
        seat: 0.42,
        heading: n.h,
      });
    } catch {
      r = null;
    }
    nn.push({ i: t, p: r });
  }
}
function an(e) {
  qt = -1;
}
function on(e, t) {
  let n = Q;
  if (!n) return;
  let r = t.camera.position;
  n.batch.regather(r.x, r.z, 1, 8);
  let i = t.time.elapsed;
  if (i - qt < 1) return;
  qt = i;
  let a = t.env?.hour ?? 12,
    o = {
      shop: $(a, Yt.shop),
      eat: $(a, Yt.eat),
      bar: $(a, Yt.bar),
      day: $(a, Yt.day),
    },
    s = [
      [`shopOpen`, o.shop],
      [`shopShut`, !o.shop],
      [`eatOpen`, o.eat],
      [`eatShut`, !o.eat],
      [`barOpen`, o.bar],
      [`barShut`, !o.bar],
      [`day`, o.day],
    ];
  for (let [e, t] of s)
    if (n.state.get(e) !== t) {
      n.state.set(e, t);
      for (let r of n.groups.get(e) ?? []) n.batch.setOn(r, t);
    }
  let c = t.player.position;
  for (let e of Xt) {
    let n = Math.hypot(c.x - e.x, c.z - e.z) < e.r && e.want(a);
    if (n && !e.on) ((e.release = e.spawn(t)), (e.on = !0));
    else if (!n && e.on) {
      try {
        e.release?.();
      } catch {}
      ((e.release = null), (e.on = !1));
    }
  }
  rn(t, o.bar);
}
function sn(e) {
  Kt = !0;
  for (let e of Xt)
    try {
      e.release?.();
    } catch {}
  Xt = [];
  for (let e of nn)
    try {
      e.p?.release();
    } catch {}
  ((nn = []), (Zt = []));
  let t = Q;
  ((Q = null),
    (qt = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
function cn() {
  return !1;
}
export { Wt as t };
