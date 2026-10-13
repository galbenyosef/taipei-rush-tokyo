// tokyo__assets__region-tokyo-d-akihabara-BJsB2qLX 01 — cells
// Lines 1-170 of readable/tokyo__assets__region-tokyo-d-akihabara-BJsB2qLX.pretty.js (statement-aligned).
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import {
  B as t,
  St as n,
  V as r,
  en as i,
  in as a,
  on as o,
  rn as s,
  sr as c,
} from "./engine-BuS5QxN0.js";
import {
  At as l,
  Ct as u,
  Dt as d,
  It as f,
  Lt as p,
  Mt as m,
  Tt as h,
  Xt as g,
  Zt as _,
  jt as v,
  kt as y,
  qt as b,
  wt as x,
  zt as S,
} from "./region-tokyo-BcM3fReU.js";
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
        [n, r] = o(e, t);
      b(n, r);
      let i = e / C;
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
          console.warn(`[akihabara] atlas cell ${e.key} failed`, t);
        }
        r.restore();
        let n = performance.now() - t;
        (n > this.slowMs && ((this.slowMs = n), (this.slowKey = e.key)), yield);
      }
      let a = s(n, { mipmaps: !0, anisotropy: 4 });
      return ((a.name = `akihabara-atlas`), (this.tex = a), (this.size = e), a);
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
