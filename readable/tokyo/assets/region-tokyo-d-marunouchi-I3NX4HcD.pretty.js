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
  $ as l,
  B as u,
  Dn as d,
  F as f,
  G as p,
  H as m,
  I as h,
  J as g,
  K as _,
  L as v,
  M as y,
  N as b,
  On as x,
  P as S,
  Q as C,
  R as w,
  U as T,
  V as E,
  W as D,
  X as O,
  Y as k,
  Z as A,
  bt as ee,
  fn as j,
  hn as M,
  in as N,
  mn as P,
  pn as F,
  q as I,
  wn as te,
  z as ne,
} from "./region-tokyo-55J_WESF.js";
var L = 2048,
  re = 1152,
  ie = `white`,
  ae = 4,
  oe = class {
    cells = new Map();
    order = [];
    used = 0;
    overflow = 0;
    tex = null;
    slowMs = 0;
    slowKey = ``;
    size = 0;
    constructor() {
      this.need(ie, 32, 32, (e, t, n, r, i) => {
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
        w: Math.min(L, Math.ceil(t)),
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
          (t + a.w + ae > 2048 && ((t = 0), (n += r + ae), (r = 0)),
          n + a.h > 1152)
        ) {
          (this.overflow++, (a.x = -1));
          continue;
        }
        ((a.x = t),
          (a.y = n),
          (t += a.w + ae),
          (r = Math.max(r, a.h)),
          i.push(a));
      }
      ((this.used = n + r), (this.order = i));
    }
    uv(e) {
      this.pack();
      let t = this.cells.get(e);
      (!t || t.x < 0) && (t = this.cells.get(ie));
      let n = 1.5;
      return {
        u0: (t.x + n) / L,
        v0: 1 - (t.y + t.h - n) / re,
        u1: (t.x + t.w - n) / L,
        v1: 1 - (t.y + n) / re,
      };
    }
    white() {
      this.pack();
      let e = this.cells.get(ie),
        t = (e.x + e.w / 2) / L,
        n = 1 - (e.y + e.h / 2) / re;
      return { u0: t, v0: n, u1: t, v1: n };
    }
    *paint(e) {
      this.pack();
      let t = Math.round((e * re) / L),
        [n, a] = r(e, t);
      te(n, a);
      let o = e / L;
      yield;
      for (let e of [j(), F()])
        for (let t of [`500`, `600`, `700`, `800`, `900`])
          ((a.font = `${t} 24px ${e}`),
            a.fillText(`丸の内円ビル将門塚一号館ABC¥1,0`, -999, -999),
            yield);
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
          console.warn(`[marunouchi] atlas cell ${e.key} failed`, t);
        }
        a.restore();
        let n = performance.now() - t;
        (n > this.slowMs && ((this.slowMs = n), (this.slowKey = e.key)), yield);
      }
      let s = i(n, { mipmaps: !0, anisotropy: 4 });
      return (
        (s.name = `marunouchi-atlas`),
        (this.tex = s),
        (this.size = e),
        s
      );
    }
  };
function se(e, t, n, r, i, a, o = 0.55, s) {
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
function R(e, t, n, r, i, a) {
  ((e.globalAlpha = 1), (e.fillStyle = a), e.fillRect(t, n, r, i));
}
function z(e, t, n, r, i, a, o = 0.5) {
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
function ce(e) {
  let t = e % 2147483647 || 1;
  return () => (t = (t * 16807) % 2147483647) / 2147483647;
}
var B = (1 + Math.sqrt(5)) / 2,
  le = [
    [-1, B, 0],
    [1, B, 0],
    [-1, -B, 0],
    [1, -B, 0],
    [0, -1, B],
    [0, 1, B],
    [0, -1, -B],
    [0, 1, -B],
    [B, 0, -1],
    [B, 0, 1],
    [-B, 0, -1],
    [-B, 0, 1],
  ],
  ue = [
    [0, 11, 5],
    [0, 5, 1],
    [0, 1, 7],
    [0, 7, 10],
    [0, 10, 11],
    [1, 5, 9],
    [5, 11, 4],
    [11, 10, 2],
    [10, 7, 6],
    [7, 1, 8],
    [3, 9, 4],
    [3, 4, 2],
    [3, 2, 6],
    [3, 6, 8],
    [3, 8, 9],
    [4, 9, 5],
    [2, 4, 11],
    [6, 2, 10],
    [8, 6, 7],
    [9, 8, 1],
  ];
function de(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  let p = ce(o),
    m = e.n,
    h = (a >> 16) & 255,
    g = (a >> 8) & 255,
    _ = a & 255,
    v = 0.9 + p() * 0.2;
  for (let a of le) {
    let o = Math.hypot(a[0], a[1], a[2]),
      m = 0.78 + p() * 0.36,
      y = a[0] / o,
      b = a[1] / o,
      x = a[2] / o,
      S = t + y * i * m,
      C = n + b * i * m * 0.85,
      w = r + x * i * m,
      T = (S - s) / (u * u),
      E = (C - c) / (d * d),
      D = (w - l) / (f * f),
      O = Math.hypot(T, E, D) || 1;
    ((T = (T / O) * 0.7 + y * 0.3),
      (E = (E / O) * 0.7 + b * 0.3),
      (D = (D / O) * 0.7 + x * 0.3));
    let k = Math.hypot(T, E, D) || 1,
      A =
        v *
          (0.8 +
            0.2 * (Math.max(-1, Math.min(1, (C - c) / d)) * 0.5 + 0.5) +
            (E / k) * 0.08) +
        (p() - 0.5) * 0.1,
      ee = (e) =>
        Math.min(255, Math.round(255 * Math.min(1, (e * A) / 255) ** 2.2));
    (e.setColor(ee(h), ee(g), ee(_)),
      e.vertex(S, C, w, T / k, E / k, D / k, I.u, I.v));
  }
  for (let t of ue) e.tri(m + t[0], m + t[2], m + t[1]);
}
function fe(e, t, n, r, i, a, o, s, c, l, u, d = 1) {
  let f = ce(u),
    p = Math.PI * (3 - Math.sqrt(5));
  for (let m = 0; m < s; m++) {
    let h = 1 - (2 * (m + 0.5)) / s,
      g = Math.sqrt(Math.max(0, 1 - h * h)),
      _ = m * p + f() * 0.6,
      v = 0.62 + f() * 0.3,
      y = d < 1 ? 1 - (1 - d) * (h * 0.5 + 0.5) : 1,
      b = t + Math.cos(_) * g * i * v * y,
      x = n + h * a * v,
      S = r + Math.sin(_) * g * o * v * y,
      C = d < 1 ? 0.85 + 0.3 * (1 - (h * 0.5 + 0.5)) : 1;
    de(
      e,
      b,
      x,
      S,
      c * (0.8 + f() * 0.4) * C,
      l[m % l.length],
      u * 31 + m,
      t,
      n,
      r,
      i,
      a,
      o,
    );
  }
  de(e, t, n, r, Math.min(i, a, o) * 0.8, l[0], u + 7, t, n, r, i, a, o);
}
var pe = {
  ginkgo: {
    green: [7117380, 8235856, 6261820, 7643464],
    autumn: [15254058, 15913532, 14265628, 14727204],
    bloom: [9420374, 10472034, 8564814],
    bare: [],
  },
  naka: {
    green: [5801278, 6786886, 5208632, 6261314],
    autumn: [11561518, 12748084, 10246698, 11039790],
    bloom: [7907406, 8827992, 7118406],
    bare: [],
  },
  katsura: {
    green: [7117384, 8038482, 6458946, 7643724],
    autumn: [14197818, 14989386, 13143088, 14462528],
    bloom: [9091162, 10011748, 8302160],
    bare: [],
  },
};
function me(e, t = 0.7) {
  (e.setMaterial(0.7, 0.45, 0, 0),
    g(e, 3420975),
    l(e, -t, 0.012, t, t, 0.012, t, t, 0.012, -t, -t, 0.012, -t));
}
function he(e, t, n, r = 11) {
  (me(e, 0.75),
    e.setMaterial(0.95, 0, 0, 0),
    g(e, 9076336),
    O(e, 0, 0, 0, 8.6, 0.15, 6, 0.09, !1));
  for (let n = 0; n < (t === `bare` ? 11 : 6); n++) {
    let t = n * 2.3 + r,
      i = 3.4 + n * 0.6,
      a = 1.25 - n * 0.07;
    k(e, 0, i, 0, Math.cos(t) * a, i + 1.1, Math.sin(t) * a, 0.045, 3);
  }
  t !== `bare` &&
    (e.setMaterial(0.9, 0, 0, 0),
    fe(
      e,
      0,
      7.4,
      0,
      1.75,
      4.1,
      1.75,
      n ? 18 : 5,
      n ? 0.85 : 1.35,
      pe.ginkgo[t],
      r,
      0.34,
    ));
}
function ge(e, t, n, r = 5, i = `naka`) {
  (me(e, 0.7),
    e.setMaterial(0.95, 0, 0, 0),
    g(e, 6773583),
    O(e, 0, 0, 0, 4, 0.2, 6, 0.13, !1));
  for (let [t, n] of _e) k(e, 0, 3.3, 0, t * 1.6, 6.2, n * 1.6, 0.075, 4);
  if (t === `bare`) {
    for (let [t, n] of _e)
      k(e, t * 1.6, 6.2, n * 1.6, t * 2.6, 7.6, n * 2.6, 0.03, 3);
    return;
  }
  (e.setMaterial(0.9, 0, 0, 0),
    fe(e, 0, 6.9, 0, 2.9, 1.9, 2.9, n ? 16 : 5, n ? 0.95 : 1.55, pe[i][t], r));
}
var _e = [
    [1, 0.3],
    [-0.8, 0.6],
    [0.2, -1],
    [-0.3, -0.7],
    [0.75, -0.65],
  ],
  ve = 16045196;
function ye(e, t, n = 5, r = !1) {
  let i = ce(n * 977 + 3),
    a = r ? 0.34 : 1,
    o = r ? 1.7 : 1;
  (e.setMaterial(0.6, 0, a, 1), g(e, ve));
  let s = 0.21,
    c = 0.6,
    l = 0;
  for (let t = 1; t <= 32; t++) {
    let n = t / 32,
      r = n * Math.PI * 10,
      i = 0.21 - n * 0.07,
      a = Math.cos(r) * i,
      o = 0.6 + n * 3,
      u = Math.sin(r) * i;
    (k(e, s, c, l, a, o, u, 0.018, 3), (s = a), (c = o), (l = u));
  }
  e.setMaterial(0.6, 0, 0.55 * a, 1);
  for (let [t, n] of _e)
    (k(e, 0, 3.3, 0, t * 1.6, 6.2, n * 1.6, 0.014 * o, 3),
      k(e, t * 1.6, 6.2, n * 1.6, t * 2.75, 7.7, n * 2.75, 0.011 * o, 3),
      k(
        e,
        t * 1.6,
        6.2,
        n * 1.6,
        t * 2.3 - n * 0.9,
        8.3,
        n * 2.3 + t * 0.9,
        0.01 * o,
        3,
      ));
  e.setMaterial(0.6, 0, a, 1);
  let u = Math.PI * (3 - Math.sqrt(5));
  for (let n = 0; n < t; n++) {
    let r = 1 - (2 * (n + 0.5)) / t;
    if (r < -0.75) continue;
    let a = Math.sqrt(Math.max(0, 1 - r * r)),
      s = n * u + i() * 0.4,
      c = 1.04 + i() * 0.08,
      l = Math.cos(s) * a,
      d = Math.sin(s) * a,
      f = l * 2.9 * c,
      p = 6.9 + r * 1.9 * c,
      m = d * 2.9 * c,
      h = 0.07 * o,
      g = -d * h,
      _ = l * h;
    (e.quad(
      f - g,
      p,
      m - _,
      f,
      p - h,
      m,
      f + g,
      p,
      m + _,
      f,
      p + h,
      m,
      I.u,
      I.v,
      I.u,
      I.v,
    ),
      e.quad(
        f + g,
        p,
        m + _,
        f,
        p - h,
        m,
        f - g,
        p,
        m - _,
        f,
        p + h,
        m,
        I.u,
        I.v,
        I.u,
        I.v,
      ));
  }
}
function be(e, t, n = 11, r = !1) {
  let i = ce(n * 613 + 5),
    a = r ? 0.34 : 1,
    o = r ? 1.7 : 1;
  (e.setMaterial(0.6, 0, a, 1), g(e, ve));
  let s = 0.21,
    c = 0.8,
    l = 0;
  for (let t = 1; t <= 36; t++) {
    let n = t / 36,
      r = n * Math.PI * 14,
      i = 0.22 - n * 0.09,
      a = Math.cos(r) * i,
      u = 0.8 + n * 5,
      d = Math.sin(r) * i;
    (k(e, s, c, l, a, u, d, 0.018 * o, 3), (s = a), (c = u), (l = d));
  }
  let u = Math.PI * (3 - Math.sqrt(5));
  for (let n = 0; n < t; n++) {
    let r = 1 - (2 * (n + 0.5)) / t,
      a = Math.sqrt(Math.max(0, 1 - r * r)),
      s = 1 - 0.66 * (r * 0.5 + 0.5),
      c = n * u + i() * 0.4,
      l = Math.cos(c) * a,
      d = Math.sin(c) * a,
      f = l * 1.75 * s * 1.08,
      p = 7.4 + r * 4.1,
      m = d * 1.75 * s * 1.08,
      h = 0.07 * o,
      g = -d * h,
      _ = l * h;
    (e.quad(
      f - g,
      p,
      m - _,
      f,
      p - h,
      m,
      f + g,
      p,
      m + _,
      f,
      p + h,
      m,
      I.u,
      I.v,
      I.u,
      I.v,
    ),
      e.quad(
        f + g,
        p,
        m + _,
        f,
        p - h,
        m,
        f - g,
        p,
        m - _,
        f,
        p + h,
        m,
        I.u,
        I.v,
        I.u,
        I.v,
      ));
  }
}
function xe(e, t, n, r, i, a, o, s, c = !0) {
  (e.setMaterial(0.95, 0, 0, 0),
    g(e, 5918272),
    k(e, t, n, r, t, n + i, r, 0.17, 6, 0.1, !1, !1),
    e.setMaterial(0.9, 0, 0, 0),
    fe(e, t, n + i + a * 0.55, r, a, a * 0.8, a, c ? 12 : 5, a * 0.42, o, s));
}
var Se = [
    [3099690, 3824176, 2638886, 3428912],
    [3824174, 4614202, 3296810, 4218420],
    [4876852, 5797950, 4218926, 5403194],
  ],
  Ce = [8036426, 9089110, 7115842];
function V(e, t, n, r, i, a, o, s = j(), c = `bold`) {
  e.font = `${c} ${a}px ${s}`;
  let l = e.measureText(t).width;
  (l > i && (e.font = `${c} ${Math.max(6, Math.floor((a * i) / l))}px ${s}`),
    (e.fillStyle = o),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(t, n, r));
}
var H = (e) => [(e >> 16) & 255, (e >> 8) & 255, e & 255],
  we = (e, t = 1) =>
    `rgb(${Math.min(255, ((e >> 16) & 255) * t) | 0},${Math.min(255, ((e >> 8) & 255) * t) | 0},${Math.min(255, (e & 255) * t) | 0})`;
function U(e, t, n, r, i, a, o, s) {
  let c = e.createLinearGradient(0, r, 0, r + a);
  (c.addColorStop(0, we(o)),
    c.addColorStop(1, we(s)),
    (e.globalAlpha = 1),
    (e.fillStyle = c),
    e.fillRect(n, r, i, a),
    (e.fillStyle = `rgba(255,255,255,0.10)`),
    e.fillRect(n, r + a * 0.06, i, a * 0.05),
    (e.fillStyle = `rgba(20,24,28,0.16)`),
    e.fillRect(n, r + a * 0.62, i, a * 0.08),
    (e.fillStyle = `rgba(255,255,255,${0.05 + t.next() * 0.06})`),
    e.beginPath(),
    e.moveTo(n + i * 0.15, r),
    e.lineTo(n + i * 0.42, r),
    e.lineTo(n + i * 0.2, r + a),
    e.lineTo(n - i * 0.07, r + a),
    e.closePath(),
    e.fill());
}
function Te(e, t, n, r, i, a = 0.18) {
  (e.save(),
    (e.globalCompositeOperation = `destination-in`),
    (e.fillStyle = `rgba(0,0,0,${a})`),
    e.fillRect(t, n, r, i),
    e.restore());
}
var Ee = {
  en: {
    frame: 11967100,
    top: 10465468,
    bot: 5925494,
    spandrel: 0.3,
    mullion: 0.12,
  },
  shinen: {
    frame: 13028560,
    top: 10335430,
    bot: 5005940,
    spandrel: 0.18,
    mullion: 0.05,
    split: !0,
  },
  hagaki: {
    frame: 14672868,
    top: 12109519,
    bot: 7044747,
    spandrel: 0.16,
    mullion: 0.04,
    split: !0,
  },
  park: {
    frame: 15132386,
    top: 10793142,
    bot: 5661290,
    spandrel: 0.22,
    mullion: 0.06,
    fin: 15790316,
  },
  ote: {
    frame: 9082010,
    top: 8229795,
    bot: 3359052,
    spandrel: 0.12,
    mullion: 0.035,
    split: !0,
  },
  one: {
    frame: 13814976,
    top: 10136244,
    bot: 5135462,
    spandrel: 0.34,
    mullion: 0.16,
  },
  meiji: {
    frame: 13616045,
    top: 10004142,
    bot: 5003360,
    spandrel: 0.32,
    mullion: 0.14,
  },
};
function De(e) {
  let r = Ee[e];
  return (i, a, o, s, c) => {
    let l = new t(n(`maru-cw`, e));
    i.clearRect(a, o, s, c);
    let u = s / 4,
      d = c / 4;
    z(i, a, o, s, c, we(r.frame), 0.2);
    for (let e = 0; e < 4; e++)
      for (let t = 0; t < 4; t++) {
        let n = a + t * u + (u * r.mullion) / 2,
          s = o + e * d + d * r.spandrel,
          c = u * (1 - r.mullion),
          f = d * (1 - r.spandrel) - 1;
        (U(i, l, n, s, c, f, r.top, r.bot),
          r.split && z(i, n + c / 2 - 1, s, 2, f, we(r.frame, 0.92), 0.2));
      }
    if (r.fin)
      for (let e = 0; e <= 4; e++)
        z(i, a + e * u - u * 0.07, o, u * 0.14, c, we(r.fin), 0.25);
    for (let e = 0; e < 4; e++)
      z(i, a, o + e * d + d * r.spandrel - 2, s, 2, `rgba(0,0,0,0.25)`, 0.2);
  };
}
function Oe(e, r, i, a, o) {
  let s = new t(n(`maru-pod`, `en`));
  (e.clearRect(r, i, a, o),
    e.save(),
    (e.globalAlpha = 1),
    P(e, s, r, i, a, o, H(12096622), 48, 30),
    e.restore());
  let c = a / 4,
    l = o / 2;
  for (let t = 0; t < 2; t++)
    for (let n = 0; n < 4; n++)
      R(
        e,
        r + n * c + c * 0.2 - 3,
        i + t * l + l * 0.2 - 3,
        c * 0.6 + 6,
        l * 0.6 + 6,
        `#6e5640`,
      );
  Te(e, r, i, a, o);
  for (let t = 0; t < 2; t++)
    for (let n = 0; n < 4; n++) {
      let a = r + n * c + c * 0.2,
        o = i + t * l + l * 0.2;
      (e.clearRect(a, o, c * 0.6, l * 0.6),
        U(e, s, a, o, c * 0.6, l * 0.6, 7109252, 2765368));
    }
}
function ke(e, r, i, a, o) {
  let s = new t(n(`maru-pod`, `shinen`));
  (e.clearRect(r, i, a, o),
    e.save(),
    P(e, s, r, i, a, o, H(14208440), 64, 40),
    e.restore());
  let c = a / 8,
    l = o / 2;
  for (let t = 0; t < 2; t++)
    R(e, r, i + t * l + l * 0.92, a, l * 0.04, `#bcae96`);
  Te(e, r, i, a, o);
  for (let t = 0; t < 2; t++)
    for (let n = 0; n < 8; n++) {
      let a = r + n * c + c * 0.22,
        o = i + t * l + l * 0.12;
      (e.clearRect(a, o, c * 0.56, l * 0.76),
        U(e, s, a, o, c * 0.56, l * 0.76, 7240840, 2896956));
    }
}
function Ae(e, r, i, a, o) {
  let s = new t(n(`maru-post`));
  (e.clearRect(r, i, a, o), R(e, r, i, a, o, `#eeece6`));
  for (let t = i; t < i + o; t += 5) R(e, r, t, a, 0.8, `rgba(0,0,0,0.06)`);
  for (let t = i, n = 0; t < i + o; t += 5, n++)
    for (let i = r + (n % 2) * 5; i < r + a; i += 10)
      R(e, i, t, 0.8, 5, `rgba(0,0,0,0.05)`);
  let c = a / 2;
  for (let t = 0; t < 2; t++)
    R(
      e,
      r + t * c + c * 0.17 - 2.5,
      i + o * 0.22 - 2.5,
      c * 0.66 + 5,
      o * 0.56 + 5,
      `#1a1c1e`,
    );
  for (let t = 0; t < 6; t++)
    R(e, r + s.next() * a, i + o * 0.86, 2, o * 0.14, `rgba(90,86,80,0.10)`);
  Te(e, r, i, a, o);
  for (let t = 0; t < 2; t++) {
    let n = r + t * c + c * 0.17,
      a = i + o * 0.22,
      l = c * 0.66,
      u = o * 0.56;
    for (let t = 0; t < 3; t++)
      for (let r = 0; r < 2; r++) {
        let i = n + (t * l) / 3 + 1.5,
          o = a + (r * u) / 2 + 1.5;
        (e.clearRect(i, o, l / 3 - 3, u / 2 - 3),
          U(e, s, i, o, l / 3 - 3, u / 2 - 3, 8029838, 3423298));
      }
  }
}
function je(e, t, n, r, i) {
  R(e, t, n, r, i, `#eeece6`);
  let a = t + r / 2,
    o = n + i / 2,
    s = Math.min(r, i) * 0.44;
  ((e.fillStyle = `#f8f8f4`),
    e.beginPath(),
    e.arc(a, o, s, 0, Math.PI * 2),
    e.fill(),
    (e.strokeStyle = `#1a1c1e`),
    (e.lineWidth = s * 0.06),
    e.stroke());
  for (let t = 0; t < 12; t++) {
    let n = (t / 12) * Math.PI * 2;
    ((e.lineWidth = s * (t % 3 == 0 ? 0.08 : 0.04)),
      e.beginPath(),
      e.moveTo(a + Math.sin(n) * s * 0.72, o - Math.cos(n) * s * 0.72),
      e.lineTo(a + Math.sin(n) * s * 0.88, o - Math.cos(n) * s * 0.88),
      e.stroke());
  }
  ((e.lineWidth = s * 0.07),
    e.beginPath(),
    e.moveTo(a, o),
    e.lineTo(a + Math.sin(-1.05) * s * 0.5, o - Math.cos(-1.05) * s * 0.5),
    e.moveTo(a, o),
    e.lineTo(a + Math.sin(1.05) * s * 0.75, o - Math.cos(1.05) * s * 0.75),
    e.stroke());
}
function Me(e, t, n, r, i, a, o = 1) {
  R(e, n, r, i, a, `#d8cfc0`);
  for (let s = r, c = 0; s < r + a; s += 5.2, c++) {
    let r = c % 2 ? 6 : 12;
    for (let a = n - (c % 4 == 1 ? 3 : 0); a < n + i; a += r) {
      let n = 0.86 + t.next() * 0.22;
      ((e.fillStyle = `rgb(${(168 * n * o) | 0},${(70 * n * o) | 0},${(52 * n * o) | 0})`),
        e.fillRect(a + 0.6, s + 0.6, r - 1.2, 4));
    }
  }
}
function Ne(e, r, i, a, o) {
  let s = new t(n(`maru-brick`, `bay`));
  (e.clearRect(r, i, a, o), Me(e, s, r, i, a, o));
  let c = r + a * 0.3,
    l = i + o * 0.2,
    u = a * 0.4,
    d = o * 0.6;
  (R(e, c - 5, l - 9, u + 10, 9, `#ece6da`),
    R(e, c - 6, l + d, u + 12, 6, `#ece6da`),
    R(e, c - 4, l, 4, d, `#e2dbcd`),
    R(e, c + u, l, 4, d, `#e2dbcd`),
    R(e, c, l, u, d, `#f2f0ea`),
    R(e, r, i + o - 4, a, 4, `#e8e1d3`),
    Te(e, r, i, a, o));
  for (let t = 0; t < 2; t++)
    for (let n = 0; n < 3; n++) {
      let r = c + 2 + (t * (u - 2)) / 2,
        i = l + 2 + (n * (d - 2)) / 3;
      (e.clearRect(r, i, (u - 2) / 2 - 2, (d - 2) / 3 - 2),
        U(e, s, r, i, (u - 2) / 2 - 2, (d - 2) / 3 - 2, 9080456, 3816502));
    }
}
function Pe(e, r, i, a, o) {
  Me(e, new t(n(`maru-brick`, `plain`)), r, i, a, o);
}
function Fe(e, r, i, a, o) {
  let s = new t(n(`maru-slate`));
  R(e, r, i, a, o, `#3c4044`);
  for (let t = i, n = 0; t < i + o; t += 6, n++)
    for (let i = r - (n % 2) * 5; i < r + a; i += 10) {
      let n = 0.85 + s.next() * 0.25;
      ((e.fillStyle = `rgb(${(66 * n) | 0},${(72 * n) | 0},${(78 * n) | 0})`),
        e.fillRect(i + 0.5, t + 0.5, 9, 5));
    }
}
function Ie(e, r, i, a, o) {
  P(e, new t(n(`maru-granite`)), r, i, a, o, H(14077890), 64, 32);
}
function Le(e, r, i, a, o) {
  let s = new t(n(`maru-colwin`));
  (e.clearRect(r, i, a, o), P(e, s, r, i, a, o, H(13156530), 64, 32));
  let c = r + a * 0.22,
    l = i + o * 0.18,
    u = a * 0.56,
    d = o * 0.66;
  (R(e, c - 3, l - 3, u + 6, d + 6, `#3c3428`),
    Te(e, r, i, a, o),
    e.clearRect(c, l, u, d),
    U(e, s, c, l, u, d, 10132108, 3947572),
    z(e, c + u / 2 - 1.5, l, 3, d, `#3c3428`, 0.2));
}
function Re(e, r = 0) {
  return (i, a, o, s, c) => {
    let l = new t(n(`maru-shop`, e, r));
    (i.clearRect(a, o, s, c),
      z(
        i,
        a,
        o,
        s,
        c,
        e === `boutique` ? `#2a2826` : e === `cafe` ? `#3a3026` : `#6a6660`,
        0.2,
      ));
    let u = s / 2;
    for (let t = 0; t < 2; t++) {
      let n = a + t * u + u * 0.06,
        s = o + c * 0.1,
        d = u * 0.88,
        f = c * 0.86;
      if (e === `lobby`) {
        let e = i.createLinearGradient(0, s, 0, s + f);
        (e.addColorStop(0, `#f2eee4`),
          e.addColorStop(1, `#b8b0a2`),
          (i.fillStyle = e),
          i.fillRect(n, s, d, f),
          R(i, n, s + f * 0.1, d, f * 0.5, `#d8cebc`));
        for (let e = 0; e < 4; e++)
          R(
            i,
            n + d * (0.12 + e * 0.22),
            s + f * 0.66,
            d * 0.05,
            f * 0.22,
            `#7a7c80`,
          );
        R(i, n + d * 0.62, s + f * 0.62, d * 0.32, f * 0.18, `#5a4a3a`);
      } else if (e === `mall`) {
        let e = i.createLinearGradient(0, s, 0, s + f);
        (e.addColorStop(0, `#fbeed6`),
          e.addColorStop(1, `#b8a084`),
          (i.fillStyle = e),
          i.fillRect(n, s, d, f));
        for (let e = 0; e < 4; e++)
          R(
            i,
            n + d * (0.1 + e * 0.22),
            s + f * 0.05,
            d * 0.12,
            f * 0.025,
            `#ffffff`,
          );
        for (let e = 0; e < 2; e++) {
          let t = e ? n + d * 0.66 : n + d * 0.04;
          (R(
            i,
            t,
            s + f * 0.22,
            d * 0.3,
            f * 0.56,
            [`#4a3e34`, `#34404a`, `#5a3434`][(e + r) % 3],
          ),
            R(
              i,
              t + d * 0.03,
              s + f * 0.3,
              d * 0.24,
              f * 0.4,
              [`#f2e2c4`, `#e4ecf0`, `#f4e0dc`][(e + r) % 3],
            ));
        }
        for (let e = 0; e < 3; e++) {
          let t = n + d * (0.38 + e * 0.1 + l.next() * 0.04);
          (R(i, t, s + f * 0.5, d * 0.035, f * 0.3, `#3a3634`),
            R(i, t + d * 0.005, s + f * 0.44, d * 0.025, f * 0.06, `#c8a890`));
        }
        R(i, n, s + f * 0.86, d, f * 0.14, `#8a7a68`);
      } else if (e === `cafe`) {
        let e = i.createLinearGradient(0, s, 0, s + f);
        (e.addColorStop(0, `#f6d8a8`),
          e.addColorStop(1, `#8a5a38`),
          (i.fillStyle = e),
          i.fillRect(n, s, d, f));
        for (let e = 0; e < 3; e++)
          R(
            i,
            n + d * (0.1 + e * 0.3),
            s + f * 0.62,
            d * 0.16,
            f * 0.04,
            `#4a3020`,
          );
        R(i, n, s + f * 0.08, d, f * 0.03, `#ffe8c0`);
      } else {
        let e = i.createRadialGradient(
          n + d / 2,
          s + f * 0.3,
          2,
          n + d / 2,
          s + f * 0.4,
          d * 0.8,
        );
        (e.addColorStop(0, `#fff4dc`),
          e.addColorStop(1, [`#a89070`, `#7c8a96`, `#a08a8a`][r % 3]),
          (i.fillStyle = e),
          i.fillRect(n, s, d, f),
          R(i, n + d * 0.15, s + f * 0.78, d * 0.7, f * 0.08, `#e8e2d6`));
        let t = 1 + Math.floor(l.next() * 2);
        for (let e = 0; e < t; e++) {
          let a = n + d * (t === 1 ? 0.5 : 0.33 + e * 0.34);
          (R(
            i,
            a - d * 0.06,
            s + f * 0.3,
            d * 0.12,
            f * 0.48,
            [`#2a2a2e`, `#c8b090`, `#8a2a2a`, `#f0ece4`][(e + r) % 4],
          ),
            R(i, a - d * 0.03, s + f * 0.2, d * 0.06, f * 0.1, `#d8c8b0`));
        }
      }
      ((i.fillStyle = `rgba(255,255,255,0.10)`),
        i.fillRect(n + d * 0.1, s, d * 0.1, f));
    }
  };
}
function ze(e, t, n, r = {}) {
  return (i, a, o, s, c) => {
    (i.clearRect(a, o, s, c), z(i, a, o, s, c, t, r.lit ?? 0.2));
    let l = r.serif ? F() : j();
    (V(
      i,
      N(e),
      a + s / 2,
      o + c * (r.sub ? 0.4 : 0.52),
      s * 0.9,
      c * (r.sub ? 0.56 : 0.72),
      n,
      l,
      `600`,
    ),
      r.sub &&
        V(
          i,
          N(r.sub),
          a + s / 2,
          o + c * 0.82,
          s * 0.8,
          c * 0.22,
          n,
          j(),
          `500`,
        ));
  };
}
function Be(e, t, n, r, i) {
  (se(e, t, n, r, i, `#ffffff`, 0.55),
    (e.fillStyle = `#e60012`),
    (e.font = `bold ${i * 0.7}px ${j()}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(`〒`, t + i * 0.5, n + i * 0.52),
    V(
      e,
      N(`common.facility.yubinkyoku`),
      t + r * 0.6,
      n + i * 0.52,
      r * 0.6,
      i * 0.6,
      `#e60012`,
      j(),
      `700`,
    ));
}
function Ve(e, t, n, r, i) {
  (R(e, t, n, r, i, `#5a1c22`),
    M(
      e,
      N(`maru.museum.banner`),
      t + r / 2,
      n + i * 0.06,
      n + i * 0.7,
      r * 0.6,
      `#f4ece0`,
      F(),
      `600`,
    ),
    M(
      e,
      N(`maru.museum.name`),
      t + r / 2,
      n + i * 0.74,
      n + i * 0.96,
      r * 0.42,
      `#e8d8b8`,
      F(),
      `500`,
    ));
}
function He(e, r, i, a, o) {
  let s = new t(n(`maru-masa-stone`));
  (P(e, s, r, i, a, o, H(9080448), a, o),
    M(
      e,
      N(`maru.masakado.stone`),
      r + a / 2,
      i + o * 0.08,
      i + o * 0.92,
      a * 0.62,
      `#2e302a`,
      F(),
      `700`,
    ));
}
function Ue(e, t, n, r, i) {
  (R(e, t, n, r, i, `#3a3428`),
    R(e, t + 4, n + 4, r - 8, i - 8, `#f2eee2`),
    V(
      e,
      N(`maru.masakado.board`),
      t + r / 2,
      n + i * 0.16,
      r * 0.8,
      i * 0.14,
      `#2a2620`,
      F(),
      `700`,
    ));
  for (let a = 0; a < 7; a++)
    R(
      e,
      t + r * 0.1,
      n + i * (0.32 + a * 0.08),
      r * (0.8 - (a === 6 ? 0.3 : 0)),
      i * 0.025,
      `rgba(40,36,30,0.55)`,
    );
  V(
    e,
    N(`maru.masakado.manner`),
    t + r / 2,
    n + i * 0.92,
    r * 0.86,
    i * 0.07,
    `#5a2a20`,
    j(),
    `600`,
  );
}
function We(e, t, n, r, i) {
  (e.clearRect(t, n, r, i),
    z(e, t, n, r, i, `#dfe2dc`, 0.6),
    R(e, t, n, r, 3, `#6a5634`),
    R(e, t, n + i - 3, r, 3, `#6a5634`));
  let a = t + r / 2,
    o = n + i * 0.42,
    s = Math.min(r, i) * 0.16,
    c = s * 0.36;
  ((e.globalAlpha = 1),
    (e.fillStyle = `#9a9a8c`),
    e.beginPath(),
    e.arc(a, o, c * 1.25, 0, Math.PI * 2),
    e.fill());
  for (let t = 0; t < 8; t++) {
    let n = (t / 8) * Math.PI * 2;
    (e.beginPath(),
      e.arc(a + Math.cos(n) * s, o + Math.sin(n) * s, c, 0, Math.PI * 2),
      e.fill());
  }
}
function Ge(e, t, n, r, i) {
  e.clearRect(t, n, r, i);
  for (let a = 0; a < 12; a++)
    R(e, t + (a * r) / 12 + 1, n, r / 12 - 3, i, a % 2 ? `#c8a478` : `#d2b084`);
  R(e, t, n, r, i * 0.06, `#b8946a`);
}
function Ke(e, t, n, r, i) {
  (R(e, t, n, r, i, `#2f4a3e`),
    R(e, t + 3, n + 3, r - 6, i - 6, `#f4f2ea`),
    R(e, t + 3, n + 3, r - 6, i * 0.18, `#2f4a3e`),
    V(
      e,
      N(`maru.run.title`),
      t + r / 2,
      n + i * 0.12,
      r * 0.86,
      i * 0.09,
      `#ffffff`,
      j(),
      `700`,
    ));
  let a = t + r / 2,
    o = n + i * 0.42,
    s = r * 0.22;
  ((e.strokeStyle = `#2f6a50`),
    (e.lineWidth = r * 0.05),
    e.beginPath(),
    e.arc(a, o, s, -0.3, Math.PI * 1.6, !1),
    e.stroke(),
    (e.fillStyle = `#2f6a50`),
    e.beginPath());
  let c = a + Math.cos(-0.3) * s,
    l = o + Math.sin(-0.3) * s;
  (e.moveTo(c - r * 0.07, l + r * 0.02),
    e.lineTo(c + r * 0.07, l + r * 0.02),
    e.lineTo(c, l + r * 0.11),
    e.closePath(),
    e.fill(),
    V(
      e,
      N(`maru.run.ccw`),
      t + r / 2,
      n + i * 0.66,
      r * 0.86,
      i * 0.08,
      `#1a2a22`,
      j(),
      `700`,
    ),
    V(
      e,
      N(`maru.run.walker`),
      t + r / 2,
      n + i * 0.77,
      r * 0.6,
      i * 0.08,
      `#c0302a`,
      j(),
      `800`,
    ),
    V(
      e,
      N(`maru.run.distance`),
      t + r / 2,
      n + i * 0.89,
      r * 0.8,
      i * 0.06,
      `#3a3a36`,
      j(),
      `600`,
    ));
}
function qe(e) {
  return (t, n, r, i, a) => {
    (R(t, n, r, i, a, `#2c2a26`),
      R(t, n + 2, r + 2, i - 4, a - 4, `#8a7a5a`),
      V(
        t,
        N(`maru.gallery.work.${e}`),
        n + i / 2,
        r + a * 0.4,
        i * 0.8,
        a * 0.4,
        `#1c1a16`,
        F(),
        `700`,
      ),
      V(
        t,
        N(`maru.gallery.title`),
        n + i / 2,
        r + a * 0.78,
        i * 0.86,
        a * 0.2,
        `#2c2a26`,
        j(),
        `500`,
      ));
  };
}
function Je(e, t, n, r, i) {
  (R(e, t, n, r, i, `#1e3a32`),
    V(
      e,
      N(`maru.terrace.sign`),
      t + r / 2,
      n + i * 0.38,
      r * 0.9,
      i * 0.28,
      `#f4f0e4`,
      j(),
      `700`,
    ),
    V(
      e,
      N(`maru.terrace.hours`),
      t + r / 2,
      n + i * 0.74,
      r * 0.9,
      i * 0.18,
      `#d8e8d0`,
      j(),
      `500`,
    ));
}
function Ye(e) {
  return (r, i, a, o, s) => {
    (P(r, new t(n(`maru-ss`, e)), i, a, o, s, H(9210500), o, s),
      V(
        r,
        N(e),
        i + o / 2,
        a + s / 2,
        o * 0.86,
        s * 0.56,
        `#efeae0`,
        F(),
        `700`,
      ));
  };
}
var Xe = [
  { body: `#e8a020`, band: `#7a3a10`, fg: `#ffffff` },
  { body: `#4ab0c8`, band: `#f4e8c8`, fg: `#1a3a48` },
  { body: `#f4f0e4`, band: `#c0302a`, fg: `#c0302a` },
  { body: `#2e6a3c`, band: `#f0d040`, fg: `#ffffff` },
];
function Ze(e) {
  let t = Xe[(e - 1) % Xe.length];
  return (n, r, i, a, o) => {
    (n.clearRect(r, i, a, o),
      R(n, r, i, a, o, t.body),
      R(n, r, i + o * 0.86, a, o * 0.14, t.band));
    let s = r + a * 0.3,
      c = i + o * 0.22,
      l = a * 0.42,
      u = o * 0.42,
      d = n.createLinearGradient(0, c, 0, c + u);
    (d.addColorStop(0, `#fff2d4`),
      d.addColorStop(1, `#c8a070`),
      (n.fillStyle = d),
      n.fillRect(s, c, l, u),
      R(n, s, c + u * 0.86, l, u * 0.14, `#9a9c9e`),
      R(n, s + l * 0.1, c + u * 0.2, l * 0.12, u * 0.5, `#3a3a3a`),
      V(
        n,
        N(`maru.truck.${e}.name`),
        r + a * 0.15,
        i + o * 0.42,
        a * 0.26,
        o * 0.3,
        t.fg,
        j(),
        `900`,
      ),
      R(n, r + a * 0.76, i + o * 0.22, a * 0.2, o * 0.5, `#1e1e1e`),
      V(
        n,
        N(`maru.truck.${e}.menu`),
        r + a * 0.86,
        i + o * 0.4,
        a * 0.18,
        o * 0.12,
        `#ffffff`,
        j(),
        `700`,
      ),
      V(
        n,
        N(`maru.truck.lunch`),
        r + a * 0.86,
        i + o * 0.6,
        a * 0.18,
        o * 0.1,
        `#ffd84a`,
        j(),
        `700`,
      ),
      V(
        n,
        N(`maru.truck.${e}.name`),
        r + a * 0.5,
        i + o * 0.93,
        a * 0.5,
        o * 0.1,
        t.fg === `#ffffff`
          ? `#ffffff`
          : t.band === `#f4e8c8`
            ? `#1a3a48`
            : `#ffffff`,
        j(),
        `700`,
      ));
  };
}
function Qe(e, t, n, r, i) {
  (R(e, t, n, r, i, `#ffe24a`),
    V(
      e,
      N(`maru.truck.queue`),
      t + r / 2,
      n + i / 2,
      r * 0.86,
      i * 0.6,
      `#1a1a1a`,
      j(),
      `900`,
    ));
}
function $e(e) {
  return (t, n, r, i, a) => {
    R(t, n, r, i, a, `#f2f2ee`);
    for (let e = 0; e < 4; e++)
      R(t, n + (e * i) / 4, r, 1.5, a, `rgba(0,0,0,0.12)`);
    if (
      (R(t, n, r + a * 0.84, i, a * 0.16, `#3c7a4a`),
      R(t, n, r, i, a * 0.04, `#3c7a4a`),
      e)
    )
      (V(
        t,
        N(`maru.site.wood`),
        n + i / 2,
        r + a * 0.32,
        i * 0.86,
        a * 0.2,
        `#5a4028`,
        F(),
        `700`,
      ),
        V(
          t,
          N(`maru.site.title`),
          n + i / 2,
          r + a * 0.56,
          i * 0.92,
          a * 0.1,
          `#2a2a28`,
          j(),
          `600`,
        ),
        V(
          t,
          N(`maru.site.period`),
          n + i / 2,
          r + a * 0.7,
          i * 0.6,
          a * 0.08,
          `#2a2a28`,
          j(),
          `500`,
        ));
    else
      for (let e = 0; e < 26; e++)
        R(
          t,
          n,
          r + a * (0.24 + e * 0.018),
          i,
          a * 0.012,
          e % 3 ? `#c89a64` : `#b08050`,
        );
  };
}
function et(e) {
  return (t, n, r, i, a) => {
    if ((R(t, n, r, i, a, `#ffffff`), e === `plan`)) {
      (R(t, n, r, i, a * 0.16, `#1e4a8a`),
        V(
          t,
          N(`ginza.site.notice`),
          n + i / 2,
          r + a * 0.08,
          i * 0.9,
          a * 0.1,
          `#ffffff`,
          j(),
          `700`,
        ));
      for (let e = 0; e < 9; e++)
        (R(t, n + i * 0.06, r + a * (0.22 + e * 0.08), i * 0.88, 1, `#9aa0a8`),
          R(
            t,
            n + i * 0.08,
            r + a * (0.24 + e * 0.08),
            i * 0.3,
            a * 0.025,
            `rgba(30,30,30,0.6)`,
          ));
    } else
      ((t.fillStyle = `#ffd400`),
        t.beginPath(),
        t.arc(n + i * 0.5, r + a * 0.22, i * 0.12, Math.PI, 0),
        t.fill(),
        R(t, n + i * 0.4, r + a * 0.25, i * 0.2, a * 0.08, `#f2c8a0`),
        R(t, n + i * 0.32, r + a * 0.33, i * 0.36, a * 0.25, `#3a6abf`),
        V(
          t,
          N(`common.safety.koji-owabi`),
          n + i / 2,
          r + a * 0.72,
          i * 0.92,
          a * 0.1,
          `#c0302a`,
          j(),
          `800`,
        ),
        V(
          t,
          N(`common.safety.koji-chu`),
          n + i / 2,
          r + a * 0.88,
          i * 0.6,
          a * 0.1,
          `#1a1a1a`,
          j(),
          `700`,
        ));
  };
}
function tt(e, t, n, r, i) {
  R(e, t, n, r, i, `#d8dadc`);
  for (let a = 0; a < 8; a++)
    R(e, t + (a * r) / 8, n, r / 16, i, `rgba(0,0,0,0.05)`);
  for (let a = n; a < n + i; a += 3)
    R(e, t, a, r, 0.7, `rgba(255,255,255,0.25)`);
}
function nt(e, r, i, a, o) {
  let s = new t(n(`maru-pave-gyoko`));
  R(e, r, i, a, o, `#b8b6b0`);
  for (let t = 0; t < 4; t++)
    for (let n = -1; n < 4; n++) {
      let c = r + (a / 4) * n + (t % 2 ? a / 8 : 0),
        l = i + (t * o) / 4,
        u = 0.94 + s.next() * 0.08;
      ((e.fillStyle = `rgb(${(214 * u) | 0},${(212 * u) | 0},${(206 * u) | 0})`),
        e.fillRect(c + 1, l + 1, a / 4 - 2, o / 4 - 2));
      for (let t = 0; t < 30; t++)
        ((e.fillStyle = `rgba(60,60,60,${0.05 + s.next() * 0.08})`),
          e.fillRect(c + s.next() * (a / 4), l + s.next() * (o / 4), 1.2, 1.2));
    }
}
function rt(e, r, i, a, o) {
  let s = new t(n(`maru-pave-naka`));
  R(e, r, i, a, o, `#8c8478`);
  let c = [`#b4aa9a`, `#a89c8a`, `#c2b8a6`, `#9c9486`, `#b8ae9c`, `#aca290`];
  for (let t = 0; t < 6; t++) {
    let n = r - s.next() * 20,
      l = i + (t * o) / 6;
    for (; n < r + a;) {
      let t = (a / 6) * (0.6 + s.next() * 0.9);
      ((e.fillStyle = c[Math.floor(s.next() * c.length)]),
        e.fillRect(n + 1, l + 1, t - 2, o / 6 - 2),
        (n += t));
    }
  }
}
function it(e, r, i, a, o) {
  let s = new t(n(`maru-pave-garden`));
  R(e, r, i, a, o, `#8a7060`);
  for (let t = i, n = 0; t < i + o; t += 8, n++)
    for (let i = r - (n % 2) * 8; i < r + a; i += 16) {
      let n = 0.85 + s.next() * 0.25;
      ((e.fillStyle = `rgb(${(170 * n) | 0},${(110 * n) | 0},${(84 * n) | 0})`),
        e.fillRect(i + 0.8, t + 0.8, 14.4, 6.4));
    }
}
function at(e, r, i, a, o) {
  let s = new t(n(`maru-gravel`));
  R(e, r, i, a, o, `#c8c6be`);
  for (let t = 0; t < 900; t++) {
    let t = 0.75 + s.next() * 0.35;
    ((e.fillStyle = `rgb(${(210 * t) | 0},${(208 * t) | 0},${(200 * t) | 0})`),
      e.fillRect(r + s.next() * a, i + s.next() * o, 1.6, 1.6));
  }
  for (let t = i + 4; t < i + o; t += 8) R(e, r, t, a, 1, `rgba(0,0,0,0.08)`);
}
function ot(e, r, i, a, o) {
  let s = new t(n(`maru-forest`));
  R(e, r, i, a, o, `#4c5a32`);
  for (let t = 0; t < 700; t++)
    ((e.fillStyle = [`#5e6c3a`, `#6a5a38`, `#3e4a28`, `#7a6a42`, `#566a34`][
      Math.floor(s.next() * 5)
    ]),
      e.fillRect(
        r + s.next() * a,
        i + s.next() * o,
        2 + s.next() * 3,
        1.5 + s.next() * 2,
      ));
}
function st(e) {
  return (r, i, a, o, s) =>
    P(
      r,
      new t(n(`maru-stone`, e)),
      i,
      a,
      o,
      s,
      H(e === `komatsu` ? 9343620 : 14605010),
      48,
      30,
    );
}
function ct(e, r, i, a, o) {
  let s = new t(n(`maru-flowers`));
  R(e, r, i, a, o, `#3e5a2a`);
  for (let t = 0; t < 300; t++)
    ((e.fillStyle = [
      `#f4f0f0`,
      `#e8b4c8`,
      `#f0d040`,
      `#c86a9a`,
      `#6a8a3a`,
      `#4e7a30`,
    ][Math.floor(s.next() * 6)]),
      e.fillRect(r + s.next() * a, i + s.next() * o, 2.5, 2.5));
}
function lt(e, r, i, a, o) {
  let s = new t(n(`maru-roof`));
  R(e, r, i, a, o, `#8e8e8a`);
  for (let t = i; t < i + o; t += 16)
    for (let n = r; n < r + a; n += 16)
      R(
        e,
        n + 0.5,
        t + 0.5,
        15,
        15,
        `rgba(${120 + s.next() * 30},${120 + s.next() * 30},${118 + s.next() * 30},1)`,
      );
}
var W = 35,
  G = 3;
function ut(e) {
  for (let t of [`en`, `shinen`, `hagaki`, `park`, `ote`, `one`, `meiji`])
    e.need(`cw:${t}`, 256, 256, De(t));
  (e.need(`pod:en`, 256, 176, Oe),
    e.need(`pod:shinen`, 256, 176, ke),
    e.need(`post`, 192, 156, Ae),
    e.need(`clock`, 96, 96, je),
    e.need(`brick:bay`, 96, 128, Ne),
    e.need(`brick`, 128, 128, Pe),
    e.need(`slate`, 128, 128, Fe),
    e.need(`granite`, 128, 128, Ie),
    e.need(`colwin`, 96, 160, Le));
  for (let [t, n, r] of [
    [`shop:boutique0`, `boutique`, 0],
    [`shop:boutique1`, `boutique`, 1],
    [`shop:boutique2`, `boutique`, 2],
    [`shop:cafe`, `cafe`, 0],
    [`shop:lobby`, `lobby`, 0],
    [`shop:mall`, `mall`, 0],
    [`shop:mall1`, `mall`, 1],
  ])
    e.need(t, 256, 112, Re(n, r));
  (e.need(
    `name:en`,
    256,
    72,
    ze(`maru.en.name`, `#3a2e24`, `#f4e6c8`, { sub: `maru.en.latin` }),
  ),
    e.need(
      `name:shinen`,
      256,
      64,
      ze(`maru.shinen.name`, `#2a2e32`, `#f2f2ee`),
    ),
    e.need(
      `name:hagaki`,
      256,
      64,
      ze(`maru.hagaki.name`, `#f2f0ea`, `#c0302a`, {
        sub: `maru.hagaki.sub`,
        lit: 0.45,
      }),
    ),
    e.need(
      `name:terrace`,
      160,
      40,
      ze(`maru.shinen.terrace`, `#2a2e32`, `#f2e2c0`),
    ),
    e.need(
      `name:museum`,
      192,
      40,
      ze(`maru.museum.name`, `#2a2420`, `#e8d8b8`, { serif: !0 }),
    ),
    e.need(`post:sign`, 160, 64, Be),
    e.need(`museum:banner`, 56, 240, Ve),
    e.need(`hoard`, 256, 96, $e(!1)),
    e.need(`hoard:banner`, 512, 96, $e(!0)),
    e.need(`notice:plan`, 96, 128, et(`plan`)),
    e.need(`notice:owabi`, 96, 128, et(`owabi`)),
    e.need(`sheet`, 128, 128, tt),
    e.need(`pave:gyoko`, 256, 256, nt),
    e.need(`pave:garden`, 128, 128, it),
    e.need(`gravel`, 128, 128, at),
    e.need(`forest`, 128, 128, ot),
    e.need(`stone:komatsu`, 128, 128, st(`komatsu`)),
    e.need(`stone:inada`, 128, 128, st(`inada`)),
    e.need(`masakado:stone`, 48, 176, He),
    e.need(`masakado:board`, 160, 128, Ue),
    e.need(`kuyo`, 96, 128, We),
    e.need(`hinoki`, 128, 128, Ge),
    e.need(`flowers`, 128, 64, ct),
    e.need(`roof`, 128, 128, lt),
    e.need(`sign:forest`, 160, 48, Ye(`maru.forest.name`)),
    e.need(`sign:square`, 160, 48, Ye(`maru.square.name`)));
}
var dt = (e, t, n, r, i) => {
  let a = e.u1 - e.u0,
    o = e.v1 - e.v0;
  return {
    u0: e.u0 + a * t,
    u1: e.u0 + a * n,
    v0: e.v0 + o * r,
    v1: e.v0 + o * i,
  };
};
function K(e, t, n, r, i, a, o, s) {
  e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1);
}
function q(e, t, n, r, i, a, o, s, c, l) {
  let u = Math.hypot(r - t, i - n);
  if (u < 0.01 || o - a < 0.01) return;
  let d = (r - t) / u,
    f = (i - n) / u,
    p = Array.isArray(s) ? s : [s];
  for (let r = 0, i = 0; r < u - 0.01; r += c, i++) {
    let s = Math.min(u, r + c),
      m = (s - r) / c,
      h = p[i % p.length];
    for (let i = a; i < o - 0.01; i += l) {
      let a = Math.min(o, i + l),
        c = (a - i) / l;
      K(e, t + d * r, n + f * r, t + d * s, n + f * s, i, a, dt(h, 0, m, 0, c));
    }
  }
}
function J(e, t, n, r, i, a, o, s) {
  for (let c = t; c < r - 0.01; c += s) {
    let t = Math.min(r, c + s),
      l = (t - c) / s;
    for (let r = n; r < i - 0.01; r += s) {
      let n = Math.min(i, r + s),
        u = dt(o, 0, l, 0, (n - r) / s);
      e.quad(c, a, n, t, a, n, t, a, r, c, a, r, u.u0, u.v0, u.u1, u.v1);
    }
  }
}
function ft(e, t, n, r) {
  return { N: [n, t, e, t], E: [n, r, n, t], S: [e, r, n, r], W: [e, t, e, r] };
}
function Y(e, t, n, r, i, a, o, s, c, l, u, d = !0) {
  let f = ft(t, n, r, i);
  for (let t of [`N`, `E`, `S`, `W`]) {
    let n = typeof s == `function` ? s(t) : s;
    if (!n) continue;
    let [r, i, u, d] = f[t];
    q(e.w, r, i, u, d, a, o, n, c, l);
  }
  (u && e.w.quad(t, o, i, r, o, i, r, o, n, t, o, n, u.u0, u.v0, u.u1, u.v1),
    d && e.cols.push({ x0: t, z0: n, x1: r, z1: i, y0: a, y1: o }));
}
function X(e, t, n, r, i, a, o, s, c = 0.85, l = 0, u = !1) {
  let d = e.A.white();
  (e.w.setMaterial(c, l, 0, 0),
    g(e.w, s),
    e.w.box(
      (t + r) / 2,
      (a + o) / 2,
      (n + i) / 2,
      (r - t) / 2,
      (o - a) / 2,
      (i - n) / 2,
      d.u0,
      d.v0,
      d.u1,
      d.v1,
    ),
    u && e.cols.push({ x0: t, z0: n, x1: r, z1: i, y0: a, y1: o }));
}
function Z(e, t, n, r, i, a, o, s, c, l = 0.05) {
  let u = (o / 2) * a,
    d = -i * (o / 2),
    f = t + i * l,
    p = r + a * l;
  e.quad(
    f - u,
    n - s / 2,
    p - d,
    f + u,
    n - s / 2,
    p + d,
    f + u,
    n + s / 2,
    p + d,
    f - u,
    n + s / 2,
    p - d,
    c.u0,
    c.v0,
    c.u1,
    c.v1,
  );
}
var pt = 12.8,
  mt = 8.8,
  ht = 12.8,
  gt = 16;
function Q(e, t) {
  let n = e.w,
    r = e.A,
    i = e.base,
    a = r.uv(t.podCell),
    o = ft(t.x0, t.z0, t.x1, t.z1);
  for (let e of [`N`, `E`, `S`, `W`]) {
    let [s, c, l, u] = o[e],
      d = t.shops[e];
    (d
      ? (n.setMaterial(0.25, 0.2, 0.32, G | 16),
        g(n, 16777215),
        q(
          n,
          s,
          c,
          l,
          u,
          i,
          i + t.gh,
          typeof d == `string` ? r.uv(d) : d.map((e) => r.uv(e)),
          6.4,
          t.gh,
        ))
      : (n.setMaterial(0.8, 0, 0.18, W),
        g(n, 16777215),
        q(n, s, c, l, u, i, i + t.gh, a, pt, mt)),
      n.setMaterial(0.75, 0, 0.2, W),
      g(n, 16777215),
      q(n, s, c, l, u, i + t.gh, i + t.pod, a, pt, mt));
  }
  let s = r.white();
  (n.setMaterial(0.6, 0.3, 0, 0),
    g(n, 3947062),
    n.box(
      (t.x0 + t.x1) / 2,
      i + t.gh + 0.12,
      (t.z0 + t.z1) / 2,
      (t.x1 - t.x0) / 2 + 0.9,
      0.12,
      (t.z1 - t.z0) / 2 + 0.9,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
    ),
    n.setMaterial(0.8, 0, 0, 0),
    g(n, 13616822),
    n.box(
      (t.x0 + t.x1) / 2,
      i + t.pod + 0.3,
      (t.z0 + t.z1) / 2,
      (t.x1 - t.x0) / 2 + 0.45,
      0.3,
      (t.z1 - t.z0) / 2 + 0.45,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
    ),
    e.cols.push({
      x0: t.x0,
      z0: t.z0,
      x1: t.x1,
      z1: t.z1,
      y0: 0,
      y1: i + t.pod,
    }));
  let c = r.uv(`roof`);
  (n.setMaterial(0.9, 0, 0, 0),
    g(n, 16777215),
    J(n, t.x0, t.z0, t.x1, t.z1, i + t.pod + 0.6, c, 6));
  let l = r.uv(`cw:${t.cw}`),
    u = i + t.pod + 0.6,
    d = t.crown,
    f = d ? t.top - d.n * 4 : t.top;
  (n.setMaterial(0.42, 0.1, 0.4, W), g(n, 16777215));
  let p = t.t;
  (Y(e, p.x0, p.z0, p.x1, p.z1, u, i + f, l, ht, gt, void 0, !0),
    d &&
      (n.setMaterial(0.42, 0.1, 0.4, W),
      g(n, 16777215),
      Y(
        e,
        p.x0 + d.d,
        p.z0 + d.d,
        p.x1 - d.d,
        p.z1 - d.d,
        i + f,
        i + t.top,
        l,
        ht,
        gt,
        void 0,
        !0,
      ),
      n.setMaterial(0.9, 0, 0, 0),
      g(n, 16777215),
      J(n, p.x0, p.z0, p.x1, p.z1, i + f + 0.02, c, 6)));
  let m = d ? p.x0 + d.d : p.x0,
    h = d ? p.z0 + d.d : p.z0,
    _ = d ? p.x1 - d.d : p.x1,
    v = d ? p.z1 - d.d : p.z1;
  (n.setMaterial(0.9, 0, 0, 0),
    g(n, 16777215),
    J(n, m, h, _, v, i + t.top, c, 6),
    X(e, m, h, _, h + 0.5, i + t.top, i + t.top + 1.4, 13159632, 0.5, 0.4),
    X(e, m, v - 0.5, _, v, i + t.top, i + t.top + 1.4, 13159632, 0.5, 0.4),
    X(e, m, h, m + 0.5, v, i + t.top, i + t.top + 1.4, 13159632, 0.5, 0.4),
    X(e, _ - 0.5, h, _, v, i + t.top, i + t.top + 1.4, 13159632, 0.5, 0.4));
  let y = (m + _) / 2,
    b = (h + v) / 2;
  (X(
    e,
    y - (_ - m) * 0.25,
    b - (v - h) * 0.2,
    y + (_ - m) * 0.2,
    b + (v - h) * 0.25,
    i + t.top,
    i + t.top + 4.5,
    10132636,
  ),
    n.setMaterial(0.3, 0, 0.9, 1),
    g(n, 16722458));
  for (let [e, r] of [
    [m + 0.6, h + 0.6],
    [_ - 0.6, v - 0.6],
  ])
    n.box(e, i + t.top + 1.7, r, 0.18, 0.18, 0.18, s.u0, s.v0, s.u1, s.v1);
}
function _t(e) {
  let t = y.b106,
    n = t.minX + 1.15,
    r = t.maxX - 1.15,
    i = t.minZ + 1.2;
  Q(e, {
    x0: n,
    z0: i,
    x1: r,
    z1: 72.4,
    pod: 31,
    podCell: `pod:en`,
    gh: 5.6,
    shops: {
      E: [`shop:mall`, `shop:boutique2`, `shop:mall1`],
      N: [`shop:boutique1`, `shop:boutique0`, `shop:cafe`, `shop:boutique2`],
      W: [`shop:boutique0`, `shop:cafe`],
      S: [`shop:cafe`, `shop:boutique1`],
    },
    t: { x0: n + 6.5, z0: i + 5.5, x1: r - 6.5, z1: 66.9 },
    top: 150,
    cw: `en`,
  });
  let a = e.w,
    o = e.base;
  (a.setMaterial(0.4, 0, 0.5, G),
    g(a, 16777215),
    Z(a, r, o + 7, i + 6, 1, 0, 7.2, 2, e.A.uv(`name:en`), 0.95),
    Z(a, n + 8, o + 7, i, 0, -1, 7.2, 2, e.A.uv(`name:en`), 0.95));
}
function vt(e) {
  let t = E,
    n = t.minX + 1.15,
    r = t.maxX - 1.15,
    i = t.minZ + 0.4,
    a = t.maxZ - 1.2;
  Q(e, {
    x0: n,
    z0: i,
    x1: r,
    z1: a,
    pod: 31,
    podCell: `pod:shinen`,
    gh: 5.6,
    shops: {
      E: [`shop:mall1`, `shop:boutique0`, `shop:mall`],
      S: [`shop:boutique2`, `shop:cafe`, `shop:boutique1`],
      W: [`shop:cafe`, `shop:boutique0`],
    },
    t: { x0: n + 4.5, z0: i + 3, x1: r - 4.5, z1: a - 4.5 },
    top: 158,
    cw: `shinen`,
    crown: { n: 5, d: 2.6 },
  });
  let o = e.w,
    s = e.base,
    c = e.A.white(),
    l = s + 31 + 0.6;
  (o.setMaterial(0.1, 0.2, 0, 0),
    g(o, 12110028),
    o.box(
      r - 0.1,
      l + 0.55,
      (i + a) / 2,
      0.04,
      0.55,
      (a - i) / 2,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    ),
    o.box(
      (n + r) / 2,
      l + 0.55,
      a - 0.1,
      (r - n) / 2,
      0.55,
      0.04,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    ),
    o.setMaterial(0.9, 0, 0, 0),
    g(o, 5138996));
  for (let e = i + 3; e < a - 2; e += 4.5)
    o.box(r - 1.1, l + 0.35, e, 0.45, 0.35, 0.9, c.u0, c.v0, c.u1, c.v1);
  (o.setMaterial(0.5, 0, 0.55, 1), g(o, 16767136));
  let u = { x0: n + 4.5, z1: a - 4.5, x1: r - 4.5 };
  (o.box(
    u.x1 + 1.2,
    l + 3.4,
    (i + a) / 2,
    1.2,
    0.08,
    (a - i) / 2 - 3,
    c.u0,
    c.v0,
    c.u1,
    c.v1,
  ),
    o.box(
      (n + r) / 2,
      l + 3.4,
      u.z1 + 1.2,
      (r - n) / 2 - 4,
      0.08,
      1.2,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    ),
    o.setMaterial(0.4, 0, 0.5, G),
    g(o, 16777215),
    Z(
      o,
      u.x1,
      l + 2.2,
      (i + a) / 2,
      1,
      0,
      5.4,
      1.35,
      e.A.uv(`name:terrace`),
      0.06,
    ),
    Z(o, r, s + 7, a - 6, 1, 0, 7.2, 1.8, e.A.uv(`name:shinen`), 0.95));
}
function yt(e) {
  let t = y.b106,
    n = t.minX + 1.15,
    r = t.maxX - 1.15,
    i = t.maxZ - 1.15,
    a = e.w,
    o = e.base,
    s = e.A,
    c = s.white();
  Q(e, {
    x0: n,
    z0: 74,
    x1: r - 12.6,
    z1: i - 12.6,
    pod: 31,
    podCell: `pod:shinen`,
    gh: 5.6,
    shops: { N: `shop:boutique1` },
    t: { x0: n + 2.5, z0: 76, x1: r - 14.5, z1: i - 14.5 },
    top: 155,
    cw: `hagaki`,
  });
  let l = 5.2,
    u = o + 5 * l + 0.8,
    d = s.uv(`post`),
    f = { x0: r - 12.6, z0: 74, x1: r, z1: i },
    p = { x0: n, z0: i - 12.6, x1: r - 12.6, z1: i };
  for (let t of [f, p]) {
    let n = ft(t.x0, t.z0, t.x1, t.z1);
    for (let e of [`N`, `E`, `S`, `W`]) {
      if (
        (t === f && e === `W`) ||
        (t === p && e === `E`) ||
        (t === p && e === `N`)
      )
        continue;
      let [r, i, m, h] = n[e],
        _ = (t === f && e === `E`) || e === `S`;
      (a.setMaterial(0.25, 0.2, 0.32, G | 16),
        g(a, 16777215),
        _ &&
          q(
            a,
            r,
            i,
            m,
            h,
            o,
            o + l,
            s.uv(t === f ? `shop:mall` : `shop:mall1`),
            6.4,
            l,
          ),
        a.setMaterial(0.7, 0, 0.22, W),
        g(a, 16777215),
        q(a, r, i, m, h, _ ? o + l : o, u - 0.8, d, 6.4, l),
        a.setMaterial(0.8, 0, 0, 0),
        g(a, 15658214),
        K(a, r, i, m, h, u - 0.8, u, c));
    }
    e.cols.push({ x0: t.x0, z0: t.z0, x1: t.x1, z1: t.z1, y0: 0, y1: u });
  }
  (a.setMaterial(0.95, 0, 0, 0), g(a, 6982216));
  for (let e of [f, p])
    a.quad(
      e.x0 + 0.6,
      u + 0.02,
      e.z1 - 0.6,
      e.x1 - 0.6,
      u + 0.02,
      e.z1 - 0.6,
      e.x1 - 0.6,
      u + 0.02,
      e.z0 + 0.6,
      e.x0 + 0.6,
      u + 0.02,
      e.z0 + 0.6,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    );
  (a.setMaterial(0.1, 0.2, 0, 0),
    g(a, 12110028),
    a.box(
      r - 0.15,
      u + 0.6,
      (74 + i) / 2,
      0.03,
      0.6,
      (i - 74) / 2,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    ),
    a.box(
      (n + r) / 2,
      u + 0.6,
      i - 0.15,
      (r - n) / 2,
      0.6,
      0.03,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    ),
    a.setMaterial(0.5, 0, 0.12, 1),
    g(a, 16777215),
    Z(a, r, u - 3.4, i - 8.5, 1, 0, 2.6, 2.6, s.uv(`clock`), 0.06),
    a.setMaterial(0.4, 0, 0.5, G),
    Z(a, r, o + l + 1, 86, 1, 0, 6.4, 1.6, s.uv(`name:hagaki`), 0.06),
    Z(a, r, o + 3.6, i - 2.2, 1, 0, 2.6, 1.05, s.uv(`post:sign`), 0.08),
    Z(a, r - 4, o + 3.6, i, 0, 1, 2.6, 1.05, s.uv(`post:sign`), 0.08));
}
function bt(e) {
  let t = y.b74,
    n = e.w,
    r = e.base,
    i = e.A;
  (i.white(),
    Q(e, {
      x0: t.minX + 1.15,
      z0: t.minZ + 1.2,
      x1: -163.5,
      z1: 92,
      pod: 31,
      podCell: `pod:shinen`,
      gh: 5.6,
      shops: { W: `shop:boutique2`, E: `shop:cafe`, S: `shop:cafe` },
      t: { x0: t.minX + 2.6, z0: t.minZ + 2.4, x1: -165, z1: 90.5 },
      top: 142,
      cw: `park`,
    }));
  let a = -170.5,
    o = t.maxX - 1,
    s = t.maxZ - 1,
    c = 4.7,
    l = r + 3 * c + 0.9;
  (n.setMaterial(0.85, 0, 0.18, W),
    g(n, 16777215),
    Y(e, a, 95, o, s, r, l - 0.9, i.uv(`brick:bay`), 3.4, c, void 0, !0),
    X(e, -170.62, 94.88, o + 0.12, s + 0.12, r, r + 0.7, 14209216),
    X(e, -170.85, 94.65, o + 0.35, s + 0.35, l - 0.9, l - 0.5, 15262420),
    n.setMaterial(0.85, 0, 0, 0),
    g(n, 16777215),
    Y(e, a, 95, o, s, l - 0.5, l, i.uv(`brick`), 3.4, 0.5, void 0, !1));
  let u = i.uv(`slate`),
    d = 5.2,
    f = (95 + s) / 2;
  (n.setMaterial(0.7, 0.1, 0, 0),
    g(n, 16777215),
    n.quad(
      -170.9,
      l,
      s + 0.4,
      o + 0.4,
      l,
      s + 0.4,
      o - 3,
      l + d,
      f,
      -167.5,
      l + d,
      f,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
    ),
    n.quad(
      o + 0.4,
      l,
      94.6,
      -170.9,
      l,
      94.6,
      -167.5,
      l + d,
      f,
      o - 3,
      l + d,
      f,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
    ),
    n.quad(
      o + 0.4,
      l,
      s + 0.4,
      o + 0.4,
      l,
      94.6,
      o - 3,
      l + d,
      f,
      o - 3,
      l + d,
      f,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
    ),
    n.quad(
      -170.9,
      l,
      94.6,
      -170.9,
      l,
      s + 0.4,
      -167.5,
      l + d,
      f,
      -167.5,
      l + d,
      f,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
    ));
  let p = i.uv(`brick`),
    m = (t, r, i, a, o) => {
      let s = a,
        c = -i,
        d = t - s * o,
        f = r - c * o,
        m = t + s * o,
        h = r + c * o;
      (n.setMaterial(0.85, 0, 0, 0),
        g(n, 16777215),
        q(n, d, f, m, h, l - 0.5, l + 0.6, p, 3.4, 4.7));
      let _ = i * 0.02,
        v = a * 0.02;
      (n.quad(
        d + _,
        l + 0.6,
        f + v,
        m + _,
        l + 0.6,
        h + v,
        t + _,
        l + 4.6,
        r + v,
        t + _,
        l + 4.6,
        r + v,
        p.u0,
        p.v0,
        p.u1,
        p.v1,
      ),
        n.setMaterial(0.7, 0.1, 0, 0));
      let y = t - i * 4,
        b = r - a * 4;
      (n.quad(
        m + i * 0.3,
        l + 0.6,
        h + a * 0.3,
        t + i * 0.3,
        l + 4.7,
        r + a * 0.3,
        y,
        l + 4.7,
        b,
        y + s * o,
        l + 0.6,
        b + c * o,
        u.u0,
        u.v0,
        u.u1,
        u.v1,
      ),
        n.quad(
          t + i * 0.3,
          l + 4.7,
          r + a * 0.3,
          d + i * 0.3,
          l + 0.6,
          f + a * 0.3,
          y - s * o,
          l + 0.6,
          b - c * o,
          y,
          l + 4.7,
          b,
          u.u0,
          u.v0,
          u.u1,
          u.v1,
        ),
        X(e, t - 0.25, r - 0.25, t + 0.25, r + 0.25, l + 4.3, l + 5, 15262420));
    };
  (m(-166.3, s, 0, 1, 2.6), m(o - 4.4, s, 0, 1, 2.6), m(o, 99.6, 1, 0, 2.6));
  for (let [t, r] of [
    [-168.3, f - 1],
    [(a + o) / 2, f + 0.8],
    [o - 2.5, f - 1.2],
  ])
    (n.setMaterial(0.85, 0, 0, 0),
      g(n, 16777215),
      Y(
        e,
        t - 0.55,
        r - 0.4,
        t + 0.55,
        r + 0.4,
        l + 2.5,
        l + d + 2.2,
        p,
        1.1,
        1.6,
        void 0,
        !1,
      ),
      X(
        e,
        t - 0.7,
        r - 0.55,
        t + 0.7,
        r + 0.55,
        l + d + 2.2,
        l + d + 2.5,
        14736076,
      ));
  for (let t of [-164, -160])
    (n.setMaterial(0.85, 0, 0.18, W),
      g(n, 16777215),
      Z(n, t, l + 1.6, 96.6, 0, -1, 1.2, 1.5, i.uv(`brick:bay`), 0),
      X(e, t - 0.75, 96.6, t + 0.75, 98.6, l + 0.6, l + 2.4, 15262420));
  (n.setMaterial(0.85, 0, 0.06, 1),
    g(n, 16777215),
    Z(n, -163.3, r + 7.4, s, 0, 1, 1.5, 6.4, i.uv(`museum:banner`), 0.25),
    Z(n, o - 9.5, r + 7.4, s, 0, 1, 1.5, 6.4, i.uv(`museum:banner`), 0.25),
    n.setMaterial(0.4, 0, 0.45, G),
    Z(n, o, r + 4.6, 104.5, 1, 0, 4.2, 0.9, i.uv(`name:museum`), 0.06),
    xt(e, [
      { x0: -163.5, z0: t.minZ + 1.2, x1: t.maxX - 1, z1: 95 },
      { x0: t.minX + 1.15, z0: 92, x1: a, z1: t.maxZ - 1 },
    ]));
}
function xt(e, r) {
  let i = e.w,
    a = e.base,
    o = e.A,
    s = o.white(),
    c = o.uv(`pave:garden`),
    l = o.uv(`flowers`);
  (i.setMaterial(0.9, 0, 0, 0), g(i, 16777215));
  for (let e of r) J(i, e.x0, e.z0, e.x1, e.z1, a + 0.02, c, 3);
  let u = new t(n(`maru-garden`));
  for (let t of r) {
    let n = t.z1 - t.z0 > t.x1 - t.x0,
      r = Math.max(1, Math.floor((n ? t.z1 - t.z0 : t.x1 - t.x0) / 8));
    for (let o = 0; o < r; o++) {
      let c = (o + 0.5) / r,
        u = n ? t.x0 + (t.x1 - t.x0) * 0.3 : t.x0 + (t.x1 - t.x0) * c,
        d = n ? t.z0 + (t.z1 - t.z0) * c : t.z0 + (t.z1 - t.z0) * 0.32,
        f = n ? 1.2 : 2.4,
        p = n ? 2.4 : 1.2;
      (X(e, u - f, d - p, u + f, d + p, a, a + 0.45, 12103840),
        i.setMaterial(0.95, 0, 0, 0),
        g(i, 16777215),
        J(
          i,
          u - f + 0.12,
          d - p + 0.12,
          u + f - 0.12,
          d + p - 0.12,
          a + 0.47,
          l,
          2.4,
        ),
        e.cols.push({
          x0: u - f,
          z0: d - p,
          x1: u + f,
          z1: d + p,
          y0: 0,
          y1: a + 0.45,
        }));
      let m = n ? u + f + 0.8 : u - f - 0.8,
        h = n ? d - p - 0.6 : d + p + 0.6;
      (i.setMaterial(0.5, 0.5, 0, 0),
        g(i, 2306090),
        O(i, m, h, a, a + 3, 0.07, 8),
        i.setMaterial(0.3, 0, 0.75, 1),
        g(i, 16767392),
        i.box(m, a + 3.3, h, 0.2, 0.3, 0.2, s.u0, s.v0, s.u1, s.v1),
        i.setMaterial(0.5, 0.5, 0, 0),
        g(i, 2306090),
        i.box(m, a + 3.68, h, 0.26, 0.08, 0.26, s.u0, s.v0, s.u1, s.v1),
        e.cols.push({
          x0: m - 0.1,
          z0: h - 0.1,
          x1: m + 0.1,
          z1: h + 0.1,
          y0: 0,
          y1: a + 3,
        }));
    }
    let o = e.detail > 0 ? 3 : 2;
    for (let r = 0; r < o; r++)
      St(
        e,
        n
          ? t.x0 + (t.x1 - t.x0) * 0.75
          : t.x0 + (t.x1 - t.x0) * ((r + 0.5) / o),
        n
          ? t.z0 + (t.z1 - t.z0) * ((r + 0.5) / o)
          : t.z0 + (t.z1 - t.z0) * 0.75,
        u.next() * 3,
      );
  }
  let d = r[0];
  (Ct(e, (d.x0 + d.x1) / 2 + 1.5, d.z0 + (d.z1 - d.z0) * 0.55),
    i.setMaterial(0.8, 0, 0, 0),
    g(i, 16777215));
  let f = o.uv(`sign:square`);
  (X(e, d.x1 - 2.6, d.z1 - 0.9, d.x1 - 0.4, d.z1 - 0.4, a, a + 0.7, 9210500),
    Z(i, d.x1 - 1.5, a + 0.38, d.z1 - 0.4, 0, 1, 2, 0.55, f, 0.01));
}
function St(e, t, n, r) {
  let i = e.w,
    a = e.base,
    o = e.A.white();
  (i.setMaterial(0.5, 0.6, 0, 0),
    g(i, 2895408),
    O(i, t, n, a, a + 0.72, 0.035, 6),
    O(i, t, n, a + 0.72, a + 0.74, 0.38, 10));
  for (let e of [0, Math.PI]) {
    let s = t + Math.cos(r + e) * 0.62,
      c = n + Math.sin(r + e) * 0.62;
    i.box(s, a + 0.44, c, 0.21, 0.02, 0.21, o.u0, o.v0, o.u1, o.v1);
    let l = s + Math.cos(r + e) * 0.2,
      u = c + Math.sin(r + e) * 0.2;
    i.box(
      l,
      a + 0.66,
      u,
      Math.abs(Math.sin(r + e)) * 0.2 + 0.02,
      0.22,
      Math.abs(Math.cos(r + e)) * 0.2 + 0.02,
      o.u0,
      o.v0,
      o.u1,
      o.v1,
    );
    for (let [e, t] of [
      [-0.17, -0.17],
      [0.17, 0.17],
      [-0.17, 0.17],
      [0.17, -0.17],
    ])
      i.box(s + e, a + 0.22, c + t, 0.015, 0.22, 0.015, o.u0, o.v0, o.u1, o.v1);
  }
}
function Ct(e, t, n) {
  let r = e.w,
    i = e.base;
  (X(e, t - 1.6, n - 0.8, t + 1.6, n + 0.8, i, i + 0.4, 6974054, 0.7, 0, !0),
    r.setMaterial(0.35, 0.8, 0, 0),
    g(r, 5917234),
    k(r, t - 1.1, i + 0.6, n, t - 0.1, i + 1.5, n + 0.2, 0.42, 8, 0.3, !0, !0),
    k(r, t - 0.1, i + 1.5, n + 0.2, t + 0.4, i + 1.8, n, 0.3, 8, 0.24, !1, !0),
    k(
      r,
      t + 0.4,
      i + 0.55,
      n - 0.1,
      t + 1.3,
      i + 0.85,
      n + 0.1,
      0.38,
      8,
      0.28,
      !0,
      !0,
    ));
}
function wt(e) {
  let t = y.b45,
    n = e.w,
    r = e.base,
    i = e.A;
  Q(e, {
    x0: -272,
    z0: t.minZ + 2,
    x1: t.maxX - 1.15,
    z1: t.maxZ - 1.15,
    pod: 31,
    podCell: `pod:shinen`,
    gh: 5.6,
    shops: { E: `shop:lobby`, N: `shop:lobby` },
    t: { x0: -270.5, z0: t.minZ + 4, x1: t.maxX - 2.6, z1: t.maxZ - 6 },
    top: 120,
    cw: `meiji`,
  });
  let a = t.minX + 1,
    o = -272,
    s = t.minZ + 5.5,
    c = t.maxZ - 1,
    l = i.uv(`granite`),
    u = i.uv(`colwin`),
    d = r + 6.2,
    f = r + 26.5,
    p = r + 31;
  (n.setMaterial(0.8, 0, 0.18, W),
    g(n, 16777215),
    Y(
      e,
      a,
      s,
      o,
      c,
      r,
      d,
      (e) => (e === `E` ? null : u),
      3.6,
      6.2,
      void 0,
      !0,
    ));
  let m = a + 2.2;
  (n.setMaterial(0.75, 0, 0.18, W),
    g(n, 16777215),
    q(n, m, s, m, c, d, f, u, 3.6, 5.1),
    q(n, a, c, o, c, d, f, u, 3.6, 5.1),
    q(n, o, s, a + 2.2, s, d, f, u, 3.6, 5.1),
    n.setMaterial(0.8, 0, 0, 0),
    g(n, 16777215),
    n.quad(a, f, s, a, f, c, m, f, c, m, f, s, l.u0, l.v0, l.u1, l.v1),
    J(n, a, s, m, c, d + 0.02, l, 3));
  let h = (c - s) / 10;
  for (let t = 0; t < 10; t++) {
    let r = s + h * (t + 0.5),
      i = a + 1;
    (X(e, i - 0.85, r - 0.85, i + 0.85, r + 0.85, d, d + 0.7, 13682872),
      n.setMaterial(0.7, 0, 0, 0),
      g(n, 14538440),
      O(n, i, r, d + 0.7, f - 1.6, 0.72, 12, 0.62, !1),
      g(n, 15130578),
      O(n, i, r, f - 1.6, f - 0.5, 0.64, 12, 0.86, !1),
      X(e, i - 0.95, r - 0.95, i + 0.95, r + 0.95, f - 0.5, f, 15130578),
      e.cols.push({
        x0: i - 0.72,
        z0: r - 0.72,
        x1: i + 0.72,
        z1: r + 0.72,
        y0: d,
        y1: f,
      }));
  }
  (n.setMaterial(0.8, 0, 0, 0),
    g(n, 16777215),
    Y(e, a, s, o, c, f, p - 0.8, l, 3, 3, void 0, !1),
    X(e, a - 0.6, s - 0.6, -271.8, c + 0.6, p - 0.8, p, 14867405),
    n.setMaterial(0.75, 0, 0.18, W),
    g(n, 16777215),
    Y(
      e,
      a + 1.4,
      s + 1.4,
      o,
      c - 1.4,
      p,
      p + 4.2,
      u,
      3.6,
      4.2,
      i.uv(`roof`),
      !1,
    ),
    e.cols.push({ x0: a, z0: s, x1: o, z1: c, y0: 0, y1: p }),
    n.setMaterial(0.85, 0, 0, 0),
    g(n, 16777215),
    J(n, t.minX + 1, t.minZ + 1, -272, s, r + 0.02, i.uv(`pave:gyoko`), 4));
}
function Tt(e) {
  let t = y.b42,
    n = e.w,
    r = e.base,
    i = e.A,
    a = i.white(),
    o = t.minX + 0.6,
    s = t.maxX - 0.6,
    c = t.minZ + 0.6,
    l = t.maxZ - 0.6,
    u = i.uv(`hoard:banner`),
    d = i.uv(`hoard`),
    f = ft(o, c, s, l);
  for (let e of [`N`, `E`, `S`, `W`]) {
    let [t, i, o, s] = f[e],
      c = Math.hypot(o - t, s - i),
      l = (o - t) / c,
      p = (s - i) / c;
    (n.setMaterial(0.8, 0, 0, 0), g(n, 16777215));
    for (let a = 0, o = 0; a < c - 0.01; a += 8, o++) {
      let s = Math.min(c, a + 8),
        f = (e === `S` || e === `W`) && o % 3 == 1 ? u : d;
      K(
        n,
        t + l * a,
        i + p * a,
        t + l * s,
        i + p * s,
        r,
        r + 3,
        dt(f, 0, (s - a) / 8, 0, 1),
      );
    }
    (g(n, 12105908), K(n, o, s, t, i, r, r + 3, a));
  }
  e.cols.push(
    { x0: o, z0: c, x1: o + 0.3, z1: l, y0: 0, y1: r + 3 },
    { x0: s - 0.3, z0: c, x1: s, z1: l, y0: 0, y1: r + 3 },
    { x0: o, z0: c, x1: s, z1: c + 0.3, y0: 0, y1: r + 3 },
    { x0: o, z0: l - 0.3, x1: s, z1: l, y0: 0, y1: r + 3 },
  );
  let p = (o + s) / 2;
  (X(e, p - 4, l - 0.1, p + 4, l + 0.05, r, r + 3 + 0.02, 3963466),
    n.setMaterial(0.6, 0, 0.04, 1),
    g(n, 16777215),
    Z(n, p - 6.5, r + 1.7, l, 0, 1, 1.05, 1.4, i.uv(`notice:plan`), 0.04),
    Z(n, p + 6.2, r + 1.6, l, 0, 1, 0.9, 1.2, i.uv(`notice:owabi`), 0.04),
    Z(n, o, r + 1.7, l - 9, -1, 0, 1.05, 1.4, i.uv(`notice:plan`), 0.04));
  let m = o + 5,
    h = s - 5,
    _ = c + 5,
    v = l - 7,
    b = 4.4;
  X(
    e,
    (m + h) / 2 - 4.5,
    (_ + v) / 2 - 8,
    (m + h) / 2 + 4.5,
    (_ + v) / 2 + 8,
    r,
    r + 52,
    11053218,
    0.9,
    0,
    !0,
  );
  for (let t = 1; t <= 10; t++) {
    let n = r + t * b;
    X(e, m, _, h, v, n - 0.35, n, 9211016);
  }
  (n.setMaterial(0.8, 0, 0, 0), g(n, 13144666));
  let x = Math.max(2, Math.round((h - m) / 6)),
    S = Math.max(2, Math.round((v - _) / 6));
  for (let e = 0; e <= x; e++)
    for (let t = 0; t <= S; t++) {
      if (e !== 0 && e !== x && t !== 0 && t !== S && t !== Math.floor(S / 2))
        continue;
      let i = m + ((h - m) * e) / x,
        o = _ + ((v - _) * t) / S;
      n.box(
        i,
        r + (10 * b) / 2,
        o,
        0.32,
        (10 * b) / 2,
        0.32,
        a.u0,
        a.v0,
        a.u1,
        a.v1,
      );
    }
  let C = i.uv(`sheet`);
  (n.setMaterial(0.9, 0, 0, 0),
    g(n, 16777215),
    Y(
      e,
      m - 0.8,
      _ - 0.8,
      h + 0.8,
      v + 0.8,
      r + 8 * b,
      r + 10 * b + 1.2,
      C,
      6,
      4,
      void 0,
      !1,
    ),
    n.setMaterial(0.5, 0.2, 0, 0),
    g(n, 15253536));
  for (let e = 1; e < 8; e++) {
    let t = r + e * b + 1;
    (n.box(
      (m + h) / 2,
      t,
      v + 0.05,
      (h - m) / 2,
      0.04,
      0.04,
      a.u0,
      a.v0,
      a.u1,
      a.v1,
    ),
      n.box(
        m - 0.05,
        t,
        (_ + v) / 2,
        0.04,
        0.04,
        (v - _) / 2,
        a.u0,
        a.v0,
        a.u1,
        a.v1,
      ));
  }
  e.cols.push({ x0: m, z0: _, x1: h, z1: v, y0: 0, y1: r + 10 * b + 1.2 });
  let w = h - 3,
    T = _ + 4,
    E = r + 78;
  (n.setMaterial(0.6, 0.4, 0, 0), g(n, 14209200));
  for (let [e, t] of [
    [-0.9, -0.9],
    [0.9, -0.9],
    [0.9, 0.9],
    [-0.9, 0.9],
  ])
    O(n, w + e, T + t, r, E, 0.09, 4);
  for (let e = r + 2; e < E; e += 3)
    (k(n, w - 0.9, e, T - 0.9, w + 0.9, e + 3, T - 0.9, 0.04, 3),
      k(n, w + 0.9, e, T - 0.9, w + 0.9, e + 3, T + 0.9, 0.04, 3),
      k(n, w + 0.9, e, T + 0.9, w - 0.9, e + 3, T + 0.9, 0.04, 3),
      k(n, w - 0.9, e, T + 0.9, w - 0.9, e + 3, T - 0.9, 0.04, 3));
  (X(e, w - 1.6, T - 1.6, w + 1.6, T + 1.6, E, E + 2.2, 14209200, 0.6, 0.4),
    X(
      e,
      w + 1.6,
      T - 0.9,
      w + 3.2,
      T + 0.9,
      E + 0.2,
      E + 2.4,
      15263970,
      0.4,
      0.2,
    ),
    n.setMaterial(0.6, 0.4, 0, 0),
    g(n, 12595242),
    k(n, w, E + 2.2, T, w - 32, E + 2.2, T + 30, 0.5, 4),
    k(n, w, E + 6, T, w - 22, E + 2.4, T + 20.6, 0.06, 3),
    k(n, w, E + 2.2, T, w + 9, E + 2.2, T - 8.4, 0.5, 4),
    X(e, w + 6.5, T - 8, w + 9.5, T - 5, E + 0.5, E + 2, 6974054),
    k(n, w, E + 2.2, T, w, E + 7, T, 0.2, 4),
    g(n, 2763306),
    k(n, w - 20, E + 2.2, T + 18.75, w - 20, r + 46, T + 18.75, 0.03, 3),
    n.setMaterial(0.3, 0, 0.9, 1),
    g(n, 16722458),
    n.box(w, E + 7.3, T, 0.2, 0.2, 0.2, a.u0, a.v0, a.u1, a.v1),
    n.box(w - 32, E + 2.6, T + 30, 0.18, 0.18, 0.18, a.u0, a.v0, a.u1, a.v1));
}
function Et(e) {
  let r = y.b40,
    i = h,
    a = e.w,
    o = e.base,
    s = e.A,
    c = s.white();
  (Q(e, {
    x0: i.x1 + 1.5,
    z0: r.minZ + 1.2,
    x1: r.maxX - 1.15,
    z1: r.maxZ - 1.2,
    pod: 31,
    podCell: `pod:shinen`,
    gh: 5.6,
    shops: { S: `shop:lobby`, W: `shop:lobby` },
    t: { x0: i.x1 + 3, z0: r.minZ + 2.4, x1: r.maxX - 2.4, z1: r.maxZ - 3 },
    top: 158,
    cw: `one`,
  }),
    a.setMaterial(0.75, 0, 0.18, W),
    g(a, 16777215),
    Y(
      e,
      r.minX + 1.15,
      r.minZ + 1.2,
      i.x1 + 1.5,
      i.z0 - 1,
      o,
      o + 31,
      s.uv(`pod:shinen`),
      pt,
      mt,
      s.uv(`roof`),
      !0,
    ));
  let l = s.uv(`gravel`),
    u = s.uv(`stone:komatsu`),
    d = s.uv(`stone:inada`);
  (a.setMaterial(0.95, 0, 0, 0),
    g(a, 16777215),
    J(a, i.x0, i.z0, i.x1, i.z1, o + 0.02, l, 2));
  let f = (i.x0 + i.x1) / 2;
  (a.setMaterial(0.7, 0, 0, 0),
    g(a, 16777215),
    J(a, f - 1.1, i.z1 - 4.2, f + 1.1, i.z1, o + 0.05, d, 2),
    J(a, f - 1.1, i.z0 + 2, f + 1.1, i.z0 + 9.6, o + 0.05, d, 2));
  for (let t = 0; t < 6; t++) {
    let n = i.z1 - 4.2 - t * 0.95,
      r = 0.06 + Math.sin(((t + 0.5) / 6) * Math.PI) * 0.28;
    X(e, f - 0.54, n - 0.95, f + 0.54, n, o, o + r, 14210250);
  }
  let p = (t) => {
    let n = f + t * 1.9;
    (a.setMaterial(0.85, 0, 0, 0), g(a, 16777215));
    let r = n + t * 0.4,
      s = i.z1 + 0.6,
      c = n + t * 1.5,
      l = i.z1 - 2.2,
      d = 0.35,
      p = l - s,
      m = -(c - r),
      h = Math.hypot(p, m),
      _ = (p / h) * d,
      v = (m / h) * d;
    (K(a, r, s, c, l, o, o + 1.6, u),
      K(a, c + _, l + v, r + _, s + v, o, o + 1.6, u),
      a.quad(
        r,
        o + 1.6,
        s,
        c,
        o + 1.6,
        l,
        c + _,
        o + 1.6,
        l + v,
        r + _,
        o + 1.6,
        s + v,
        u.u0,
        u.v0,
        u.u1,
        u.v1,
      ),
      K(a, r + _, s + v, r, s, o, o + 1.6, u),
      e.cols.push({
        x0: Math.min(r, c, r + _, c + _),
        z0: Math.min(s, l, s + v, l + v),
        x1: Math.max(r, c, r + _, c + _),
        z1: Math.max(s, l, s + v, l + v),
        y0: 0,
        y1: o + 1.6,
      }));
  };
  (p(-1), p(1));
  for (let t = 0; t < 3; t++)
    X(
      e,
      f - 1.6,
      i.z1 - 0.4 - t * 0.4 - 0.4,
      f + 1.6,
      i.z1 - 0.4 - t * 0.4,
      o,
      o + 0.05 + t * 0.05,
      12106416,
    );
  let m = i.z0 + 0.6,
    _ = i.z0 + 2;
  (X(e, f - 3.4, m - 0.2, f + 3.4, _ + 1.4, o, o + 0.32, 14605010),
    X(e, f - 1, m, f + 1, m + 0.9, o + 0.32, o + 0.75, 9343620, 0.85, 0, !0),
    a.setMaterial(0.6, 0.1, 0, 0),
    g(a, 4606015),
    a.box(f, o + 1.75, m + 0.45, 0.42, 1, 0.11, c.u0, c.v0, c.u1, c.v1),
    k(
      a,
      f - 0.42,
      o + 2.72,
      m + 0.45,
      f + 0.42,
      o + 2.72,
      m + 0.45,
      0.11,
      6,
      0.11,
      !0,
      !0,
    ),
    a.setMaterial(0.95, 0, 0, 0),
    g(a, 8158834),
    a.box(f + 2, o + 0.9, m + 0.2, 0.7, 0.6, 0.45, c.u0, c.v0, c.u1, c.v1),
    a.box(f + 2.2, o + 1.6, m + 0.1, 0.45, 0.3, 0.32, c.u0, c.v0, c.u1, c.v1),
    e.cols.push({
      x0: f - 1,
      z0: m,
      x1: f + 1,
      z1: m + 0.9,
      y0: 0,
      y1: o + 2.8,
    }));
  for (let t of [-1, 1]) Dt(e, f + t * 2.7, _ + 0.8, o + 0.32);
  (X(e, f - 0.35, _ + 0.3, f + 0.35, _ + 0.9, o + 0.32, o + 0.85, 10132112),
    a.setMaterial(0.4, 0.8, 0, 0),
    g(a, 4865578),
    O(a, f, _ + 0.6, o + 0.85, o + 1.15, 0.28, 10, 0.34));
  let v = s.uv(`hinoki`),
    b = s.uv(`kuyo`),
    x = (t, n, r, i, s) => {
      let l = Math.hypot(r - t, i - n),
        u = (r - t) / l,
        d = (i - n) / l,
        f = d,
        p = -u,
        m = 0;
      for (let e = 0; e < l - 0.01; e += 1.8, m++) {
        let r = Math.min(l, e + 1.8),
          i = t + u * (e + r) * 0.5,
          h = n + d * (e + r) * 0.5;
        if (s && (u === 0 ? h : i) > s[0] && (u === 0 ? h : i) < s[1]) continue;
        let _ = 1.6 + (m % 3) * 0.2,
          y = m % 5 == 2;
        (a.setMaterial(y ? 0.2 : 0.85, 0, y ? 0.12 : 0, y ? G : 0),
          g(a, 16777215));
        let x = y ? b : v,
          S = t + u * e,
          C = n + d * e,
          w = t + u * r,
          T = n + d * r;
        (K(a, S, C, w, T, o, o + _, x),
          K(
            a,
            w - f * 0.06,
            T - p * 0.06,
            S - f * 0.06,
            C - p * 0.06,
            o,
            o + _,
            x,
          ),
          a.setMaterial(0.4, 0.7, 0, 0),
          g(a, 8018474),
          a.box(
            (S + w) / 2 - f * 0.03,
            o + _ + 0.04,
            (C + T) / 2 - p * 0.03,
            Math.abs(u) * (r - e) * 0.5 + 0.05,
            0.04,
            Math.abs(d) * (r - e) * 0.5 + 0.05,
            c.u0,
            c.v0,
            c.u1,
            c.v1,
          ));
      }
      e.cols.push({
        x0: Math.min(t, r) - 0.05,
        z0: Math.min(n, i) - 0.05,
        x1: Math.max(t, r) + 0.05,
        z1: Math.max(n, i) + 0.05,
        y0: 0,
        y1: o + 1.6,
      });
    };
  (x(i.x0, i.z0, i.x0, i.z1),
    x(i.x0, i.z1, f - 1.6, i.z1),
    x(f + 1.6, i.z1, i.x1, i.z1),
    a.setMaterial(0.85, 0, 0, 0),
    g(a, 16777215));
  let S = s.uv(`masakado:stone`);
  (a.box(
    f + 3.2,
    o + 0.95,
    i.z1 - 1.2,
    0.28,
    0.95,
    0.18,
    c.u0,
    c.v0,
    c.u1,
    c.v1,
  ),
    Z(a, f + 3.2, o + 0.95, i.z1 - 1.2 + 0.18, 0, 1, 0.52, 1.85, S, 0.005),
    e.cols.push({
      x0: f + 2.9,
      z0: i.z1 - 1.4,
      x1: f + 3.5,
      z1: i.z1 - 1,
      y0: 0,
      y1: o + 1.9,
    }));
  let C = s.uv(`masakado:board`);
  (X(e, f - 4.2, i.z1 - 1.3, f - 4.1, i.z1 - 1.25, o, o + 1, 3814440),
    X(e, f - 2.8, i.z1 - 1.3, f - 2.7, i.z1 - 1.25, o, o + 1, 3814440),
    a.setMaterial(0.7, 0, 0, 0),
    g(a, 16777215),
    Z(a, f - 3.45, o + 1.45, i.z1 - 1.25, 0, 1, 1.5, 1.2, C, 0.02));
  let w = new t(n(`maru-masa-plants`));
  Ot(e, i.x1 - 2.4, i.z0 + 2.4, 2.6, 0);
  for (let t = 0; t < 4; t++) kt(e, i.x0 + 1.4, i.z0 + 3.5 + t * 3.6, w.next());
  a.setMaterial(0.95, 0, 0, 0);
  for (let t = 0; t < (e.detail > 0 ? 14 : 7); t++) {
    g(a, w.next() < 0.5 ? 4090414 : 5143092);
    let e = i.x0 + 0.8 + w.next() * 2.2,
      t = i.z0 + 1 + w.next() * (i.z1 - i.z0 - 6);
    a.box(e, o + 0.25, t, 0.35, 0.25, 0.35, c.u0, c.v0, c.u1, c.v1);
  }
}
function Dt(e, t, n, r) {
  let i = e.w,
    a = e.A.white();
  (i.setMaterial(0.9, 0, 0, 0),
    g(i, 10132112),
    i.box(t, r + 0.1, n, 0.3, 0.1, 0.3, a.u0, a.v0, a.u1, a.v1),
    O(i, t, n, r + 0.2, r + 0.9, 0.11, 6),
    i.box(t, r + 0.95, n, 0.26, 0.05, 0.26, a.u0, a.v0, a.u1, a.v1),
    i.setMaterial(0.6, 0, 0.6, 1),
    g(i, 16765072),
    i.box(t, r + 1.15, n, 0.17, 0.15, 0.17, a.u0, a.v0, a.u1, a.v1),
    i.setMaterial(0.9, 0, 0, 0),
    g(i, 10132112),
    O(i, t, n, r + 1.3, r + 1.5, 0.34, 6, 0.06),
    i.box(t, r + 1.56, n, 0.05, 0.06, 0.05, a.u0, a.v0, a.u1, a.v1),
    e.cols.push({
      x0: t - 0.3,
      z0: n - 0.3,
      x1: t + 0.3,
      z1: n + 0.3,
      y0: 0,
      y1: r + 1.5,
    }));
}
function Ot(e, t, n, r, i) {
  (xe(
    e.w,
    t,
    e.base,
    n,
    r * 0.7,
    r,
    Se[i % Se.length],
    17 + i * 13 + Math.round(t * 7 + n * 3),
    e.detail > 0,
  ),
    e.cols.push({
      x0: t - 0.2,
      z0: n - 0.2,
      x1: t + 0.2,
      z1: n + 0.2,
      y0: 0,
      y1: e.base + 3,
    }));
}
function kt(e, t, n, r) {
  let i = e.w,
    a = e.base;
  (i.setMaterial(0.6, 0, 0, 0), g(i, 11037258));
  for (let e = 0; e < 3; e++) {
    let o = e * 2.1 + r * 3;
    k(
      i,
      t,
      a,
      n,
      t + Math.cos(o) * 0.5,
      a + 3.4,
      n + Math.sin(o) * 0.5,
      0.05,
      4,
    );
  }
  xe(i, t, a + 2.6, n, 0.6, 1.1, Ce, 31 + Math.round(r * 100), e.detail > 0);
}
function At(e) {
  let r = y.b102,
    i = e.w,
    a = e.base,
    o = e.A,
    s = D,
    c = u;
  (Q(e, {
    x0: s.x0,
    z0: r.minZ + 1,
    x1: r.maxX - 1,
    z1: s.z0,
    pod: 18,
    podCell: `pod:shinen`,
    gh: 5.6,
    shops: { S: `shop:lobby`, W: `shop:lobby`, E: `shop:cafe` },
    t: { x0: s.x0 + 1, z0: r.minZ + 1.6, x1: r.maxX - 1.6, z1: s.z0 - 1 },
    top: 158,
    cw: `ote`,
  }),
    i.setMaterial(0.85, 0, 0, 0),
    g(i, 16777215),
    J(i, s.x0, s.z0, s.x1, s.z1, a + 0.02, o.uv(`pave:gyoko`), 4),
    J(i, c.x0, c.z0, c.x1, c.z1, a + 0.03, o.uv(`forest`), 3),
    J(i, c.x0 + 9, c.z0, c.x0 + 11, c.z1, a + 0.05, o.uv(`stone:inada`), 2));
  let l = new t(n(`maru-forest-trees`)),
    d = e.detail > 0 ? 26 : 16;
  for (let t = 0; t < d; t++) {
    let n = c.x0 + 1.2 + l.next() * (c.x1 - c.x0 - 2.4),
      r = c.z0 + 1.2 + l.next() * (c.z1 - c.z0 - 2.4);
    (n > c.x0 + 8.2 && n < c.x0 + 11.8) || Ot(e, n, r, 2.4 + l.next() * 2.2, t);
  }
  (i.setMaterial(0.8, 0, 0, 0),
    g(i, 16777215),
    X(e, c.x0 + 6, c.z1 - 0.9, c.x0 + 8.4, c.z1 - 0.4, a, a + 0.7, 9210500),
    Z(
      i,
      c.x0 + 7.2,
      a + 0.38,
      c.z1 - 0.4,
      0,
      1,
      2.2,
      0.6,
      o.uv(`sign:forest`),
      0.01,
    ));
}
var jt = [`green`, `autumn`, `bloom`, `bare`];
function Mt(e) {
  (e.need(`pave:naka`, 256, 256, rt), e.need(`run:sign`, 128, 192, Ke));
  for (let t = 1; t <= 6; t++) e.need(`plaque:${t}`, 128, 40, qe(t));
  e.need(`terrace:sign`, 192, 80, Je);
  for (let t = 1; t <= 4; t++) e.need(`truck:${t}`, 256, 112, Ze(t));
  e.need(`queue`, 64, 32, Qe);
}
function Nt(e, t) {
  let n = [],
    r = new c(2048, 3072),
    i = e.white(),
    a = (e, t) =>
      n.push(() => (r.reset(), t(r), { name: e, geo: x(r, `maru-kit-${e}`) }));
  for (let e of jt)
    (a(`ginkgo-${e}`, (t) => he(t, e, !0)),
      a(`ginkgo-${e}-far`, (t) => he(t, e, !1)),
      a(`naka-${e}`, (t) => ge(t, e, !0, 5, `naka`)),
      a(`naka-${e}-far`, (t) => ge(t, e, !1, 5, `naka`)),
      a(`katsura-${e}`, (t) => ge(t, e, !0, 9, `katsura`)),
      a(`katsura-${e}-far`, (t) => ge(t, e, !1, 9, `katsura`)));
  (a(`lights-naka`, (e) => ye(e, t > 0 ? 180 : 90, 5, t === 0)),
    a(`lights-ginkgo`, (e) => be(e, t > 0 ? 150 : 70, 11, t === 0)),
    a(`lamp-gyoko`, (e) => {
      (e.setMaterial(0.45, 0.6, 0, 0),
        g(e, 3025962),
        O(e, 0, 0, 0, 6.2, 0.075, 8, 0.06));
      for (let t = 0; t < 3; t++) {
        let n = (t / 3) * Math.PI * 2 + 0.5,
          r = Math.cos(n) * 0.42,
          i = Math.sin(n) * 0.42;
        (k(e, 0, 5.7 + t * 0.18, 0, r, 5.85 + t * 0.18, i, 0.025, 4),
          e.setMaterial(0.45, 0.6, 0, 0),
          g(e, 3025962),
          O(e, r, i, 5.6 + t * 0.18, 5.95 + t * 0.18, 0.11, 8, 0.13),
          e.setMaterial(0.3, 0, 0.85, 1),
          g(e, 16773336),
          O(e, r, i, 5.52 + t * 0.18, 5.6 + t * 0.18, 0.1, 8, 0.1, !1));
      }
    }),
    a(`lamp-naka`, (e) => {
      (e.setMaterial(0.45, 0.6, 0, 0),
        g(e, 4869198),
        O(e, 0, 0, 0, 4.6, 0.07, 8, 0.055),
        e.setMaterial(0.25, 0, 0.8, 1),
        g(e, 16773852),
        O(e, 0, 0, 4.6, 5.5, 0.16, 10, 0.16, !1),
        e.setMaterial(0.45, 0.6, 0, 0),
        g(e, 4869198),
        O(e, 0, 0, 5.5, 5.62, 0.24, 10, 0.2));
    }),
    a(`bench`, (e) => {
      (e.setMaterial(0.8, 0, 0, 0),
        g(e, 9078912),
        A(e, -0.75, 0.2, 0, 0.12, 0.2, 0.22, 0, 1),
        A(e, 0.75, 0.2, 0, 0.12, 0.2, 0.22, 0, 1),
        e.setMaterial(0.75, 0, 0, 0),
        g(e, 10120774),
        A(e, 0, 0.44, 0, 0.95, 0.04, 0.24, 0, 1));
    }),
    a(`planter`, (e) => {
      (e.setMaterial(0.6, 0.2, 0, 0),
        g(e, 3815992),
        O(e, 0, 0, 0, 0.6, 0.45, 10, 0.55),
        e.setMaterial(0.95, 0, 0, 0),
        g(e, 4880948),
        O(e, 0, 0, 0.6, 0.85, 0.5, 10, 0.3),
        g(e, 15250632));
      for (let t = 0; t < 6; t++)
        e.box(
          Math.cos(t) * 0.3,
          0.86,
          Math.sin(t) * 0.3,
          0.07,
          0.05,
          0.07,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        );
    }));
  let o = (t, n, r = 0.6, i = 0.6, a = 0.55) => {
    (t.setMaterial(0.8, 0, 0, 0),
      g(t, 7105126),
      A(t, 0, a / 2, 0, r, a / 2, i, 0, 1),
      t.setMaterial(0.5, 0.3, 0, 0),
      g(t, 16777215));
    let o = e.uv(`plaque:${n}`);
    t.quad(
      -0.42,
      a * 0.25,
      i + 0.01,
      0.42,
      a * 0.25,
      i + 0.01,
      0.42,
      a * 0.75,
      i + 0.01,
      -0.42,
      a * 0.75,
      i + 0.01,
      o.u0,
      o.v0,
      o.u1,
      o.v1,
    );
  };
  (a(`sculpt-1`, (e) => {
    (o(e, 1), e.setMaterial(0.12, 1, 0, 0), g(e, 14212318));
    for (let t = 0; t < 20; t++) {
      let n = (t / 20) * Math.PI * 2,
        r = ((t + 1) / 20) * Math.PI * 2;
      k(
        e,
        Math.cos(n) * 1,
        1.65 + Math.sin(n) * 1,
        0,
        Math.cos(r) * 1,
        1.65 + Math.sin(r) * 1,
        0,
        0.12,
        6,
      );
    }
  }),
    a(`sculpt-2`, (e) => {
      (o(e, 2, 0.9, 0.5),
        e.setMaterial(0.35, 0.8, 0, 0),
        g(e, 5917234),
        k(e, -0.4, 0.55, 0, -0.35, 2.2, 0.05, 0.22, 8, 0.12, !1, !0),
        k(e, 0.4, 0.55, 0, 0.3, 2, -0.05, 0.22, 8, 0.12, !1, !0),
        k(e, -0.35, 2.2, 0.05, -0.32, 2.35, 0.05, 0.14, 8, 0, !1, !1),
        k(e, 0.3, 2, -0.05, 0.27, 2.15, -0.05, 0.14, 8, 0, !1, !1));
    }),
    a(`sculpt-3`, (e) => {
      (o(e, 3, 0.5, 0.5, 0.35), e.setMaterial(0.85, 0, 0, 0));
      for (let t = 0; t < 6; t++)
        (g(e, t % 2 ? 12104358 : 10130570),
          O(
            e,
            Math.sin(t * 1.7) * 0.06,
            Math.cos(t * 1.3) * 0.06,
            0.35 + t * 0.42,
            0.75 + t * 0.42,
            0.38 - t * 0.02,
            10,
          ));
    }),
    a(`sculpt-4`, (e) => {
      (o(e, 4),
        e.setMaterial(0.35, 0.8, 0, 0),
        g(e, 4872762),
        k(e, 0, 0.55, 0, 0.1, 1.5, 0, 0.16, 6, 0.1));
      for (let t = 0; t < 5; t++) {
        let n = t * 1.25;
        k(
          e,
          0.1,
          1.5,
          0,
          0.1 + Math.cos(n) * 0.7,
          2.2 + (t % 2) * 0.3,
          Math.sin(n) * 0.7,
          0.08,
          5,
          0.02,
        );
      }
    }),
    a(`sculpt-5`, (e) => {
      (o(e, 5, 1.2, 0.35, 0.4),
        e.setMaterial(0.15, 0.1, 0, 0),
        g(e, 1973792),
        A(e, 0, 0.9, 0, 1.4, 0.45, 0.12, 0, 1));
    }),
    a(`sculpt-6`, (e) => {
      (o(e, 6),
        e.setMaterial(0.5, 0, 0, 0),
        g(e, 15789800),
        k(e, 0, 0.6, 0, 0, 2.3, 0, 0.42, 12, 0.18, !0, !1),
        k(e, 0, 2.3, 0, 0, 2.75, 0, 0.26, 12, 0.02, !1, !1));
    }),
    a(`terrace-set`, (e) => {
      (e.setMaterial(0.5, 0.6, 0, 0),
        g(e, 2895408),
        O(e, 0, 0, 0, 0.72, 0.035, 6),
        g(e, 15263456),
        O(e, 0, 0, 0.72, 0.75, 0.4, 12),
        g(e, 2895408));
      for (let t = 0; t < 3; t++) {
        let n = (t / 3) * Math.PI * 2,
          r = Math.cos(n) * 0.68,
          a = Math.sin(n) * 0.68;
        (e.box(r, 0.45, a, 0.2, 0.02, 0.2, i.u0, i.v0, i.u1, i.v1),
          e.box(
            r + Math.cos(n) * 0.19,
            0.67,
            a + Math.sin(n) * 0.19,
            Math.abs(Math.sin(n)) * 0.19 + 0.02,
            0.22,
            Math.abs(Math.cos(n)) * 0.19 + 0.02,
            i.u0,
            i.v0,
            i.u1,
            i.v1,
          ));
        for (let [t, n] of [
          [-0.16, -0.16],
          [0.16, 0.16],
          [-0.16, 0.16],
          [0.16, -0.16],
        ])
          e.box(r + t, 0.22, a + n, 0.014, 0.22, 0.014, i.u0, i.v0, i.u1, i.v1);
      }
      (O(e, 0, 0, 0.75, 2.4, 0.025, 6),
        e.setMaterial(0.9, 0, 0, 16),
        g(e, 15789024),
        O(e, 0, 0, 2.05, 2.45, 1.25, 8, 0.05));
    }),
    a(`terrace-sign`, (t) => {
      (t.setMaterial(0.5, 0.5, 0, 0),
        g(t, 2895408),
        O(t, -0.4, 0, 0, 1.1, 0.025, 6),
        O(t, 0.4, 0, 0, 1.1, 0.025, 6),
        t.setMaterial(0.6, 0, 0.05, 1),
        g(t, 16777215));
      let n = e.uv(`terrace:sign`);
      (t.quad(
        -0.55,
        0.75,
        0.03,
        0.55,
        0.75,
        0.03,
        0.55,
        1.2,
        0.03,
        -0.55,
        1.2,
        0.03,
        n.u0,
        n.v0,
        n.u1,
        n.v1,
      ),
        t.quad(
          0.55,
          0.75,
          -0.03,
          -0.55,
          0.75,
          -0.03,
          -0.55,
          1.2,
          -0.03,
          0.55,
          1.2,
          -0.03,
          n.u0,
          n.v0,
          n.u1,
          n.v1,
        ));
    }));
  for (let t = 1; t <= 4; t++)
    a(`truck-${t}`, (n) => {
      let r = e.uv(`truck:${t}`);
      (n.setMaterial(0.4, 0.3, 0, 0),
        g(n, 15658730),
        A(n, -2.25, 1.15, 0, 0.75, 0.85, 1, 0, 1),
        n.setMaterial(0.15, 0.4, 0, 0),
        g(n, 3820118),
        n.quad(
          -3.01,
          1.25,
          -0.85,
          -3.01,
          1.25,
          0.85,
          -3.01,
          1.85,
          0.85,
          -3.01,
          1.85,
          -0.85,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        ),
        n.setMaterial(0.5, 0.1, 0.35, G | 16),
        g(n, 16777215),
        n.quad(
          -1.5,
          0.55,
          1.05,
          2.3,
          0.55,
          1.05,
          2.3,
          2.75,
          1.05,
          -1.5,
          2.75,
          1.05,
          r.u0,
          r.v0,
          r.u1,
          r.v1,
        ),
        n.quad(
          2.3,
          0.55,
          -1.05,
          -1.5,
          0.55,
          -1.05,
          -1.5,
          2.75,
          -1.05,
          2.3,
          2.75,
          -1.05,
          r.u0,
          r.v0,
          r.u1,
          r.v1,
        ),
        n.setMaterial(0.5, 0.1, 0, 0),
        g(n, 15263456),
        n.quad(
          2.3,
          0.55,
          1.05,
          2.3,
          0.55,
          -1.05,
          2.3,
          2.75,
          -1.05,
          2.3,
          2.75,
          1.05,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        ),
        n.quad(
          -1.5,
          2.75,
          1.05,
          2.3,
          2.75,
          1.05,
          2.3,
          2.75,
          -1.05,
          -1.5,
          2.75,
          -1.05,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        ),
        n.quad(
          -1.5,
          2,
          -1.05,
          -1.5,
          2,
          1.05,
          -1.5,
          2.75,
          1.05,
          -1.5,
          2.75,
          -1.05,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        ),
        g(n, 3815994),
        A(n, 0.4, 0.42, 0, 1.9, 0.14, 0.95, 0, 1),
        A(n, -3.02, 0.55, 0, 0.06, 0.12, 0.98, 0, 1),
        n.setMaterial(0.8, 0, 0, 16),
        g(n, [8010256, 1718856, 12595242, 3041852][t - 1]),
        n.quad(
          -0.4,
          2.35,
          1.05,
          1.4,
          2.35,
          1.05,
          1.4,
          2.2,
          1.85,
          -0.4,
          2.2,
          1.85,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        ),
        n.setMaterial(0.9, 0, 0, 0),
        g(n, 1710618));
      for (let e of [-2.2, 1.4])
        for (let t of [-0.95, 0.95])
          k(n, e, 0.36, t - 0.12, e, 0.36, t + 0.12, 0.36, 10, 0.36, !0, !0);
      (n.setMaterial(0.5, 0.4, 0, 0),
        g(n, 10132122),
        O(n, 2.9, 1.7, 0, 2.6, 0.02, 4),
        n.setMaterial(0.8, 0, 0.05, 17),
        g(n, [15769632, 4239560, 12595242, 3041852][t - 1]),
        n.quad(
          2.93,
          1.2,
          1.7,
          2.93,
          1.2,
          2.15,
          2.93,
          2.5,
          2.15,
          2.93,
          2.5,
          1.7,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        ),
        n.quad(
          2.91,
          1.2,
          2.15,
          2.91,
          1.2,
          1.7,
          2.91,
          2.5,
          1.7,
          2.91,
          2.5,
          2.15,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        ));
    });
  return (
    a(`run-sign`, (t) => {
      (t.setMaterial(0.5, 0.5, 0, 0),
        g(t, 4869198),
        O(t, -0.38, 0, 0, 1.9, 0.03, 6),
        O(t, 0.38, 0, 0, 1.9, 0.03, 6),
        t.setMaterial(0.6, 0, 0, 0),
        g(t, 16777215));
      let n = e.uv(`run:sign`);
      (t.quad(
        -0.45,
        0.75,
        0.04,
        0.45,
        0.75,
        0.04,
        0.45,
        2.1,
        0.04,
        -0.45,
        2.1,
        0.04,
        n.u0,
        n.v0,
        n.u1,
        n.v1,
      ),
        g(t, 4869198),
        t.quad(
          0.45,
          0.75,
          0,
          -0.45,
          0.75,
          0,
          -0.45,
          2.1,
          0,
          0.45,
          2.1,
          0,
          i.u0,
          i.v0,
          i.u1,
          i.v1,
        ));
    }),
    a(`queue-card`, (t) => {
      (t.setMaterial(0.6, 0, 0, 0),
        g(t, 9071176),
        O(t, 0, 0, 0.9, 1.9, 0.015, 4),
        g(t, 16777215));
      let n = e.uv(`queue`);
      (t.quad(
        -0.25,
        1.75,
        0.02,
        0.25,
        1.75,
        0.02,
        0.25,
        2,
        0.02,
        -0.25,
        2,
        0.02,
        n.u0,
        n.v0,
        n.u1,
        n.v1,
      ),
        t.quad(
          0.25,
          1.75,
          -0.02,
          -0.25,
          1.75,
          -0.02,
          -0.25,
          2,
          -0.02,
          0.25,
          2,
          -0.02,
          n.u0,
          n.v0,
          n.u1,
          n.v1,
        ));
    }),
    n
  );
}
function Pt(e) {
  let t = [],
    n = new Set();
  for (let r of e.plan.links) {
    if (r.road.id !== `gyoko`) continue;
    let e = Math.min(r.sx, r.ex) + 1.5,
      i = Math.max(r.sx, r.ex) - 1.5,
      a = `${Math.round(e)}|${Math.round(i)}`;
    i <= e || n.has(a) || (n.add(a), t.push([e, i]));
  }
  return t.sort((e, t) => e[0] - t[0]);
}
function Ft(e, r, i) {
  let a = [],
    o = [],
    s = [],
    l = e.plan.sidewalkHeight ?? 0.15,
    u = new t(n(`maru-kit`, 1)),
    d = new c(8192, 12288),
    f = (e, t) => {
      (d.reset(), t(d), d.n && s.push({ name: e, geo: x(d, `maru-${e}`) }));
    },
    m = r.uv(`pave:gyoko`),
    h = Pt(e);
  h.forEach(([e, t], n) =>
    f(`pave-gyoko-${n}`, (n) => {
      (n.setMaterial(0.55, 0, 0, 0),
        g(n, 16777215),
        J(
          n,
          e,
          b.z - (b.median - 0.3),
          t,
          b.z + (b.median - 0.3),
          l + 0.018,
          m,
          4,
        ));
    }),
  );
  for (let [e, t] of h) {
    for (let [n, r] of [
      [6.5, 0],
      [4.4, 5],
    ])
      for (let i of [-1, 1])
        for (let s = e + 2.5 + r; s < t - 2; s += 10)
          (a.push({
            model: `ginkgo`,
            tree: !0,
            x: s,
            y: l,
            z: i * n,
            fx: Math.cos(s),
            fz: Math.sin(s),
            s: 0.92 + u.next() * 0.16,
            range: 380,
          }),
            a.push({
              model: `lights-ginkgo`,
              x: s,
              y: l,
              z: i * n,
              fx: Math.cos(s),
              fz: Math.sin(s),
              range: 320,
              when: `illum-gyoko`,
            }),
            o.push({ x: s, z: i * n, r: 0.25, h: l + 3 }));
    for (let n of [-1, 1])
      for (let r = e + 6.5; r < t - 3; r += 24)
        (a.push({
          model: `lamp-gyoko`,
          x: r,
          y: l,
          z: n * 2.8,
          fx: 0,
          fz: -n,
          range: 300,
        }),
          o.push({ x: r, z: n * 2.8, r: 0.1, h: l + 6 }));
  }
  for (let [e, t] of p(b.x0 - 17.25, b.x1, S))
    for (let n of [-1, 1])
      for (let r = e + 5; r < t - 3; r += 30) {
        let e = n * (b.lanes + 0.6);
        (a.push({
          model: `lamp-gyoko`,
          x: r,
          y: l,
          z: e,
          fx: 0,
          fz: -n,
          range: 300,
        }),
          o.push({ x: r, z: e, r: 0.1, h: l + 6 }));
      }
  let _ = r.uv(`pave:naka`);
  p(w.z0, w.z1, ne, 0.6).forEach(([e, t], n) =>
    f(`pave-naka-${n}`, (n) => {
      (n.setMaterial(0.7, 0, 0, 0),
        g(n, 16777215),
        J(
          n,
          w.x - w.edge + 0.05,
          e,
          w.x - w.carriage - 0.05,
          t,
          l + 0.018,
          _,
          3,
        ),
        J(
          n,
          w.x + w.carriage + 0.05,
          e,
          w.x + w.edge - 0.05,
          t,
          l + 0.018,
          _,
          3,
        ));
    }),
  );
  let y = p(w.z0, w.z1, ne),
    C = 0,
    T = [-142, -60, 34, 92, 170, 290];
  for (let [e, t] of y) {
    for (let n of [-1, 1]) {
      let r = w.x + n * (w.carriage + 1.15),
        s = 0;
      for (let c = e + 3 + (n > 0 ? 5 : 0); c < t - 2; c += 10, s++) {
        let e =
            (Math.floor((c + 400) / 30) + +(n > 0)) % 3 == 2
              ? `katsura`
              : `naka`,
          d = Math.cos(c * 1.7),
          f = Math.sin(c * 1.7);
        (a.push({
          model: e,
          tree: !0,
          x: r,
          y: l,
          z: c,
          fx: d,
          fz: f,
          s: 0.9 + u.next() * 0.18,
          range: 340,
        }),
          a.push({
            model: `lights-naka`,
            x: r,
            y: l,
            z: c,
            fx: d,
            fz: f,
            range: 300,
            when: `illum`,
          }),
          o.push({ x: r, z: c, r: 0.25, h: l + 3 }));
        let p = c + 5;
        p > t - 2 ||
          (s % 2 == 0
            ? (a.push({
                model: `lamp-naka`,
                x: r,
                y: l,
                z: p,
                fx: -n,
                fz: 0,
                range: 240,
              }),
              o.push({ x: r, z: p, r: 0.1, h: l + 5 }))
            : s % 4 == 1 &&
              a.push({
                model: `bench`,
                x: r + n * 0.1,
                y: l,
                z: p,
                fx: -n,
                fz: 0,
                range: 120,
              }),
          s % 3 == 1 &&
            i > 0 &&
            a.push({
              model: `planter`,
              x: w.x + n * (w.edge - 0.7),
              y: l,
              z: p,
              fx: -n,
              fz: 0,
              range: 110,
            }));
      }
    }
    for (let n of T) {
      if (n < e + 2 || n > t - 2) continue;
      let r = C % 2 ? 1 : -1,
        i = w.x + r * (w.carriage + 1.4);
      (a.push({
        model: `sculpt-${(C % 6) + 1}`,
        x: i,
        y: l,
        z: n + 2.5,
        fx: r,
        fz: 0,
        range: 200,
      }),
        o.push({ x: i, z: n + 2.5, r: 0.8, h: l + 2.5 }),
        C++);
    }
  }
  for (let [e, t] of y)
    if (!(t < 20 || e > 112))
      for (let n of [-1, 1]) {
        let r = w.x + n * (w.edge - 2);
        for (let n = e + 4; n < t - 3; n += 4.6)
          a.push({
            model: `terrace-set`,
            x: r,
            y: l,
            z: n,
            fx: 0,
            fz: 1,
            range: 140,
            when: `terrace`,
          });
        a.push({
          model: `terrace-sign`,
          x: w.x + n * (w.carriage + 2.6),
          y: l,
          z: e + 1.5,
          fx: 0,
          fz: -1,
          range: 90,
          when: `terrace`,
        });
      }
  let E = D;
  for (let e = 0; e < 3; e++) {
    let t = E.x0 + 4.5 + e * 8,
      n = E.z0 + 1.6;
    (a.push({
      model: `truck-${(e % 4) + 1}`,
      x: t,
      y: l,
      z: n,
      fx: 0,
      fz: 1,
      range: 200,
      when: `trucks`,
    }),
      o.push(
        { x: t - 0.4, z: n, r: 1.4, h: l + 2.8 },
        { x: t + 1.6, z: n, r: 1.2, h: l + 2.8 },
      ));
  }
  a.push({
    model: `queue-card`,
    x: E.x0 + 6,
    y: l,
    z: E.z1 - 0.4,
    fx: 0,
    fz: -1,
    range: 80,
    when: `trucks`,
  });
  for (let e of [-62, 46, 230])
    (a.push({
      model: `run-sign`,
      x: v.wall + 0.7,
      y: l,
      z: e,
      fx: 0,
      fz: 1,
      range: 120,
    }),
      o.push({ x: v.wall + 0.7, z: e, r: 0.45, h: l + 2.1 }));
  return { instances: a, circles: o, strips: s, tris: 0 };
}
var It = (e, t) => `${e}-${t}`,
  Lt = e({
    illumOn: () => Jt,
    init: () => Xt,
    start: () => Zt,
    unload: () => nn,
    update: () => tn,
  }),
  Rt = [
    { id: `en`, fn: _t, cx: -111, cz: 47, range: 1100 },
    { id: `shinen`, fn: vt, cx: -111, cz: -37, range: 1100 },
    { id: `hagaki`, fn: yt, cx: -111, cz: 93, range: 1100 },
    { id: `ichigokan`, fn: bt, cx: -167, cz: 91, range: 1e3 },
    { id: `colonnade`, fn: wt, cx: -278, cz: 91, range: 900 },
    { id: `site`, fn: Tt, cx: -278, cz: -58, range: 800 },
    { id: `masakado`, fn: Et, cx: -278, cz: -142, range: 1e3 },
    { id: `otemachi`, fn: At, cx: -112, cz: -142, range: 1100 },
  ],
  $ = null,
  zt = !1,
  Bt = !1,
  Vt = -1,
  Ht = [],
  Ut = Error(`marunouchi: dropped while building`),
  Wt = new Float32Array(16);
function Gt(e) {
  for (let [t, n] of Object.entries(y))
    e.plan.blocks.find(
      (e) =>
        Math.abs(e.minX - n.minX) < 0.6 &&
        Math.abs(e.minZ - n.minZ) < 0.6 &&
        Math.abs(e.maxX - n.maxX) < 0.6 &&
        Math.abs(e.maxZ - n.maxZ) < 0.6,
    ) ||
      console.warn(
        `[marunouchi] block ${t} no longer matches the plan (data.ts BLOCKS)`,
      );
}
var Kt = (e, t) => e * 100 + t;
function qt(e) {
  let t = e.time.date;
  return {
    y: t?.y ?? 2026,
    m: t?.m ?? 10,
    d: t?.d ?? 7,
    wd: e.time.weekday ?? 3,
  };
}
function Jt(e, t, n = !1) {
  let r = Kt(e, t);
  return n
    ? r >= Kt(f.gyokoFrom[0], f.gyokoFrom[1]) &&
        r <= Kt(f.gyokoTo[0], f.gyokoTo[1])
    : r >= Kt(f.from[0], f.from[1]) || r <= Kt(f.to[0], f.to[1]);
}
function Yt(e, t, n) {
  let { y: r, m: i, d: a, wd: o } = qt(t),
    s = o === 0 || o === 6 || ee({ y: r, m: i, d: a });
  switch (e) {
    case `illum`:
    case `illum-gyoko`: {
      if (!Jt(i, a, e === `illum-gyoko`)) return !1;
      let t = i === 12 ? f.offDec : f.off;
      return n >= 6 && n < t;
    }
    case `terrace`: {
      let [e, t] = s ? m.weekend : m.weekday;
      return n >= e && n < t;
    }
    case `trucks`:
      return !s && n >= T[0] && n < T[1];
  }
}
async function Xt(e) {
  if (zt || $) return;
  ((zt = !0), (Bt = !1));
  let t = performance.now(),
    n = 0,
    r = ``,
    i = performance.now(),
    l = async (t = !1, a = ``) => {
      let o = performance.now() - i;
      if (t || o > 1.2) {
        if ((o > n && ((n = o), (r = a)), await e.yieldFrame(), Bt)) throw Ut;
        i = performance.now();
      }
    };
  try {
    Gt(e);
    let u =
        e.quality.mobile || e.quality.level === `low`
          ? 0
          : e.quality.level === `medium`
            ? 1
            : 2,
      f = new oe();
    if (
      (ut(f),
      Mt(f),
      await l(!0, `cells`),
      await e.region.signage.fontsReady?.catch(() => !1),
      Bt)
    )
      throw Ut;
    i = performance.now();
    let p = s(2048, e.quality),
      m = f.paint(p),
      h = m.next();
    for (; !h.done;) (await l(!1, `paint`), (h = m.next()));
    let g = h.value,
      v = [],
      y = new c(16384, 24576),
      b = [],
      S = e.plan.sidewalkHeight ?? 0.15,
      w = 0;
    for (let e of Rt)
      (y.reset(),
        e.fn({ w: y, A: f, cols: b, base: S, detail: u }),
        (w += y.ni / 3),
        v.push({ name: `hero:${e.id}`, geo: x(y, `maru-${e.id}`) }),
        await l(!1, `hero ${e.id}`));
    for (let e of Nt(f, u)) (v.push(e()), await l(!1, `kit models`));
    let T = Ft(e, f, u);
    for (let e of T.strips) (v.push(e), (w += (e.geo.index?.count ?? 0) / 3));
    await l(!1, `kit`);
    let E = o(`opaque`, {
        policy: e.quality.materials,
        map: g,
        batched: !0,
        name: `marunouchi`,
      }),
      D = new d(
        `marunouchi`,
        E,
        v,
        Rt.length + T.strips.length + T.instances.length + 64,
        !!e.quality.shadows,
      );
    ((D.mesh.userData.owner = `marunouchi`), D.enableCulling(e.camera));
    let O = (e) => D.models.get(e);
    for (let e of [`ginkgo`, `naka`, `katsura`])
      for (let t of [`green`, `autumn`, `bloom`, `bare`])
        D.setLod(O(It(e, t)), O(`${It(e, t)}-far`), 70);
    let k = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    for (let e of Rt) D.add(O(`hero:${e.id}`), k, e.cx, e.cz, e.range);
    for (let e of T.strips) {
      let t =
        e.geo.boundingBox ?? (e.geo.computeBoundingBox(), e.geo.boundingBox);
      D.add(
        O(e.name),
        k,
        (t.min.x + t.max.x) / 2,
        (t.min.z + t.max.z) / 2,
        260,
      );
    }
    let A = _(e),
      ee = [],
      j = [];
    (T.instances.forEach((e, t) => {
      C(Wt, e.x, e.y, e.z, e.fx, e.fz, e.s ?? 1, e.s ?? 1, e.s ?? 1);
      let n = e.tree ? It(e.model, A) : e.model,
        r = D.add(O(n), Wt, e.x, e.z, e.range, !e.when);
      (e.when && ee.push({ id: r, when: e.when, state: !1 }),
        e.tree && j.push({ id: r, i: t }));
    }),
      await l(!1, `batch`));
    let M = 0;
    for (let t of b)
      (e.statics.addBox(t.x0, t.z0, t.x1, t.z1, t.y0, t.y1, `building`), M++);
    for (let t of T.circles)
      (e.statics.addCircle(t.x, t.z, t.r, 0, t.h, `pole`), M++);
    if (Bt) throw Ut;
    e.scene.add(D.mesh);
    let N = e.params.has(`maruatlas`);
    (N || a(g),
      ($ = {
        batch: D,
        tex: g,
        kit: T,
        timed: ee,
        trees: j,
        season: A,
        stats: {
          heroes: Rt.length,
          tris: Math.round(w),
          models: v.length,
          instances: D.count,
          atlas: p,
          atlasUsed: f.used,
          overflow: f.overflow,
          colliders: M,
          buildMs: Math.round(performance.now() - t),
          maxSliceMs: +n.toFixed(1),
          maxSliceAt: r,
          slowCell: `${f.slowKey} ${f.slowMs.toFixed(1)}`,
        },
      }));
    for (let e of v) e.geo.dispose();
    ((e.params.has(`debug`) || e.params.has(`marutest`)) &&
      (window.__maru = {
        stats: () => $?.stats,
        batch: () =>
          $ && {
            count: $.batch.count,
            shown: $.batch.shown,
            tris: $.batch.shownTris,
          },
        timed: () =>
          $?.timed
            .map((e) => ({ when: e.when, on: e.state }))
            .filter((e, t, n) => n.findIndex((t) => t.when === e.when) === t),
        atlas: () => (N ? g.image.toDataURL(`image/png`) : null),
      }),
      console.info(
        `[init] districts:marunouchi ${$.stats.heroes} heroes, ${$.stats.tris} tris, atlas ${p} (${f.used}/${re} used, ${f.overflow} overflow), ${M} colliders, ${$.stats.buildMs} ms (slice max ${$.stats.maxSliceMs} ms at ${r})`,
      ));
  } catch (e) {
    if (e !== Ut) throw e;
  } finally {
    zt = !1;
  }
}
function Zt(e) {
  ((Vt = -1), (Ht.length = 0));
  let t = D;
  for (let e = 0; e < 3; e++)
    Ht.push({
      on: !1,
      release: null,
      x: t.x0 + 4.5 + e * 8 + 0.4,
      z: t.z1 + 1.6,
    });
}
function Qt(e, t, n) {
  for (let t of e.trees) {
    let r = e.kit.instances[t.i];
    (e.batch.remove(t.id),
      C(Wt, r.x, r.y, r.z, r.fx, r.fz, r.s ?? 1, r.s ?? 1, r.s ?? 1),
      (t.id = e.batch.add(
        e.batch.models.get(It(r.model, n)),
        Wt,
        r.x,
        r.z,
        r.range,
      )));
  }
  e.season = n;
}
function $t(e, t) {
  let n = e.player.position;
  for (let r of Ht) {
    let i = t && Math.hypot(n.x - r.x, n.z - r.z) < 120;
    if (i && !r.on) {
      try {
        let t = e.peds.crowd(r.x, r.z + 1.2, 0.6, 4, [`office`], {
          mode: `queue`,
          lookX: r.x,
          lookZ: r.z - 2.5,
          poses: [`idle`, `phone`],
        });
        r.release = typeof t == `function` ? t : null;
      } catch {
        r.release = null;
      }
      r.on = !0;
    } else if (!i && r.on) {
      try {
        r.release?.();
      } catch {}
      ((r.release = null), (r.on = !1));
    }
  }
}
var en = { k: 1 };
function tn(e, t) {
  let n = $;
  if (!n) return;
  let r = t.camera.position;
  n.batch.regather(r.x, r.z, en.k, 8);
  let i = t.time.elapsed;
  if (i - Vt < 1) return;
  Vt = i;
  let a = t.env?.hour ?? 12,
    o = !1;
  for (let e of n.timed) {
    let r = Yt(e.when, t, a);
    (e.when === `trucks` && (o = r),
      r !== e.state && ((e.state = r), n.batch.setOn(e.id, r)));
  }
  let s = _(t);
  (s !== n.season && Qt(n, t, s), $t(t, o));
}
function nn(e) {
  Bt = !0;
  for (let e of Ht)
    if (e.on)
      try {
        e.release?.();
      } catch {}
  Ht.length = 0;
  let t = $;
  (($ = null),
    (Vt = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
export { Lt as t };
