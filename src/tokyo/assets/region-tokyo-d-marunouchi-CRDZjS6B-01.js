// tokyo/assets/region-tokyo-d-marunouchi-CRDZjS6B 01 — math
// Lines 1-331 of readable/tokyo/assets/region-tokyo-d-marunouchi-CRDZjS6B.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import {
  F as t,
  I as n,
  Lr as r,
  _n as i,
  dn as a,
  hn as o,
  kt as s,
  mn as c,
} from "./engine-14d5lda2.js";
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
} from "./region-tokyo-A7LxHjud.js";
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
        [n, r] = i(e, t);
      te(n, r);
      let a = e / L;
      yield;
      for (let e of [j(), F()])
        for (let t of [`500`, `600`, `700`, `800`, `900`])
          ((r.font = `${t} 24px ${e}`),
            r.fillText(`丸の内円ビル将門塚一号館ABC¥1,0`, -999, -999),
            yield);
      for (let e of this.order) {
        let t = performance.now();
        (r.save(),
          r.setTransform(a, 0, 0, a, 0, 0),
          r.beginPath(),
          r.rect(e.x, e.y, e.w, e.h),
          r.clip());
        try {
          e.paint(r, e.x, e.y, e.w, e.h);
        } catch (t) {
          console.warn(`[marunouchi] atlas cell ${e.key} failed`, t);
        }
        r.restore();
        let n = performance.now() - t;
        (n > this.slowMs && ((this.slowMs = n), (this.slowKey = e.key)), yield);
      }
      let o = c(n, { mipmaps: !0, anisotropy: 4 });
      return (
        (o.name = `marunouchi-atlas`),
        (this.tex = o),
        (this.size = e),
        o
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
