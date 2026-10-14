// tokyo/assets/characters-BvEb7Acx 01 — height
// Lines 1-350 of readable/tokyo/assets/characters-BvEb7Acx.pretty.js (statement-aligned).
import {
  $ as e,
  Ct as t,
  Et as n,
  J as r,
  Kt as i,
  Mn as a,
  Nn as o,
  O as s,
  Ot as c,
  Pn as l,
  R as u,
  Tn as d,
  Tt as f,
  U as p,
  Vn as m,
  Vt as h,
  er as g,
  f as _,
  g as v,
  h as y,
  ht as b,
  jn as x,
  jt as S,
  m as C,
  mt as w,
  n as T,
  nr as E,
  nt as D,
  p as O,
  tr as k,
  v as A,
  wt as j,
  x as M,
  y as N,
} from "./three-CC5Mkdpe.js";
import { cn as P, nn as ee, tt as te } from "./engine-BuS5QxN0.js";
var ne = class {
  reqs = [];
  byKey = new Map();
  tile(e, t, n, r, i, a = 8) {
    let o = this.byKey.get(e);
    if (o) return o;
    let s = this.reqs.length;
    this.reqs.push({ key: e, w: t, h: n, repeat: r, gutter: a, paint: i });
    let c = { x: -(s + 1), y: 0, w: 1, h: 1 };
    return (this.byKey.set(e, c), c);
  }
  reset() {
    ((this.reqs.length = 0), this.byKey.clear());
  }
  rollback(e) {
    for (let t = e; t < this.reqs.length; t++)
      this.byKey.delete(this.reqs[t].key);
    this.reqs.length = Math.min(e, this.reqs.length);
  }
  get area() {
    let e = 0;
    for (let t of this.reqs) e += (t.w + t.gutter * 2) * (t.h + t.gutter * 2);
    return e;
  }
};
function re(e, t) {
  for (let n = 0; n < e.length; n += 4) {
    let r = e[n];
    if (r >= 0) continue;
    let i = t[-r - 1];
    if (!i) {
      e[n] = e[n + 1] = e[n + 2] = e[n + 3] = 0;
      continue;
    }
    ((e[n] = i.x), (e[n + 1] = i.y), (e[n + 2] = i.w), (e[n + 3] = i.h));
  }
}
var ie = typeof document < `u`;
function ae(e, t) {
  if (ie) {
    let n = document.createElement(`canvas`);
    return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
  }
  let n = new OffscreenCanvas(e, t);
  return [n, n.getContext(`2d`)];
}
var oe = null;
function se(e, t) {
  oe ??= ae(e, t);
  let [n, r] = oe;
  return (
    (n.width !== e || n.height !== t) && ((n.width = e), (n.height = t)),
    r.setTransform(1, 0, 0, 1, 0, 0),
    oe
  );
}
var ce = new Map(),
  le = 0,
  ue = 6 << 20,
  de = 65536;
function fe(e) {
  let t = e.w * e.h <= de;
  if (t) {
    let t = ce.get(e.key);
    if (t && t.width === e.w && t.height === e.h)
      return (ce.delete(e.key), ce.set(e.key, t), t);
  }
  if (!e.paint) throw Error(`[characters] tile ${e.key} has no painter`);
  let [n, r] = t ? ae(e.w, e.h) : se(e.w, e.h);
  if ((r.clearRect(0, 0, e.w, e.h), e.paint(r, 0, 0, e.w, e.h), t))
    for (ce.set(e.key, n), le += e.w * e.h * 4; le > ue && ce.size > 1;) {
      let [e, t] = ce.entries().next().value;
      (ce.delete(e), (le -= t.width * t.height * 4), (t.width = t.height = 1));
    }
  return n;
}
function pe() {
  for (let e of ce.values()) e.width = e.height = 1;
  (ce.clear(), (le = 0), oe && (oe[0].width = oe[0].height = 1), (oe = null));
}
function me(e, t, n, r) {
  let i = fe(r),
    { w: a, h: o, gutter: s } = r,
    c = a + s * 2,
    l = o + s * 2,
    u = t + s,
    d = n + s;
  if ((e.save(), e.clearRect(t, n, c, l), r.repeat)) {
    (e.beginPath(), e.rect(t, n, c, l), e.clip());
    for (let t = -1; t <= 1; t++)
      for (let n = -1; n <= 1; n++) e.drawImage(i, u + n * a, d + t * o);
  } else e.drawImage(i, u, d);
  e.restore();
}
var he = 0,
  ge = null,
  _e = 1;
function ve(e) {
  (e.renderer !== void 0 && (ge = e.renderer),
    e.textureScale !== void 0 && (_e = e.textureScale <= 0.5 ? 0.5 : 1));
}
var ye = { sealed: 0, gpuTiles: 0, gpuMs: 0 },
  be = null,
  xe = new g(),
  Se = class {
    size;
    scale;
    height;
    pages = [];
    constructor(e = 2048, t = 1, n = e) {
      ((this.size = e), (this.scale = t), (this.height = n));
    }
    newPage() {
      let e = document.createElement(`canvas`);
      ((e.width = this.size), (e.height = this.height));
      let t = e.getContext(`2d`),
        n = new A(e);
      ((n.colorSpace = d),
        (n.premultiplyAlpha = !0),
        (n.generateMipmaps = !0),
        (n.minFilter = b),
        (n.magFilter = w),
        (n.anisotropy = 4),
        (n.name = `char-atlas-${he}`));
      let r = {
        id: he++,
        size: this.size,
        height: this.height,
        canvas: e,
        g: t,
        tex: n,
        shelves: [],
        nextY: 0,
        cache: new Map(),
        used: 0,
        dirty: !0,
        overflow: !1,
        scale: this.scale,
        sealed: !1,
        busy: 0,
        uploadedVersion: -1,
        dead: !1,
      };
      return (
        (n.onUpdate = () => {
          ((r.uploadedVersion = n.version), Te(r));
        }),
        n.addEventListener(`dispose`, () => {
          r.sealed && (r.dead = !0);
        }),
        this.pages.push(r),
        r
      );
    }
    pageFor(e) {
      let t = this.pages[this.pages.length - 1];
      return t &&
        !t.dead &&
        t.size * t.height * 0.86 - t.used > e * this.scale * this.scale
        ? t
        : this.newPage();
    }
    alloc(e, t, n) {
      for (let r of e.shelves)
        if (n <= r.h && r.h - n < 48 && r.x + t <= e.size) {
          let e = { x: r.x, y: r.y };
          return ((r.x += t), e);
        }
      if (e.nextY + n > e.height) return null;
      let r = { y: e.nextY, h: n, x: t };
      return (e.shelves.push(r), (e.nextY += n), { x: 0, y: r.y });
    }
    blockW(e) {
      return Math.ceil((e.w + e.gutter * 2) * this.scale);
    }
    blockH(e) {
      return Math.ceil((e.h + e.gutter * 2) * this.scale);
    }
    rectAt(e, t, n, r, i, a) {
      let o = e.size,
        s = e.height,
        c = e.scale,
        l = t + r.gutter * c,
        u = n + r.gutter * c,
        d = {
          x: l / o,
          y: 1 - (u + r.h * c) / s,
          w: (r.w * c) / o,
          h: (r.h * c) / s,
        };
      return (
        e.cache.set(r.key, d),
        (e.used += i * a),
        e.sealed || (e.dirty = !0),
        d
      );
    }
    place(e, t, n, r, i, a, o, s, c = 0) {
      e.sealed
        ? De(e, t, n, r, i, (t) => Ce(t, 0, 0, r, i, a, e.scale, s, c), o)
        : Ce(e.g, t, n, r, i, a, e.scale, s, c);
    }
    tile(e, t, n, r, i, a, o = 8) {
      let s = e.cache.get(t);
      if (s) return s;
      let c = { key: t, w: n, h: r, repeat: i, gutter: o, paint: a },
        l = this.blockW(c),
        u = this.blockH(c),
        d = this.alloc(e, l, u);
      return (
        (d ||= ((e.overflow = !0), { x: 0, y: 0 })),
        this.place(e, d.x, d.y, l, u, c, !0),
        this.rectAt(e, d.x, d.y, c, l, u)
      );
    }
    *resolveSteps(e, t) {
      let n = this.pages[this.pages.length - 1],
        r = 0;
      for (let t of e)
        n?.cache.has(t.key) ||
          (r += (t.w + t.gutter * 2) * (t.h + t.gutter * 2));
      let i = this.pageFor(r);
      i.busy++;
      try {
        for (let n = 0; ; n++) {
          let r = [],
            a = !1,
            o = -1;
          if (i.sealed)
            for (let t = 0; t < e.length; t++) i.cache.has(e[t].key) || (o = t);
          let s = null;
          for (let c = 0; c < e.length; c++) {
            let l = e[c],
              u = i.cache.get(l.key);
            if (u) {
              r.push(u);
              continue;
            }
            let d = this.blockW(l),
              f = this.blockH(l),
              p = this.alloc(i, d, f);
            if (!p) {
              if (n === 0) {
                a = !0;
                break;
              }
              r.push({ x: 0, y: 0, w: 0, h: 0 });
              continue;
            }
            let m = c === o;
            (this.place(i, p.x, p.y, d, f, l, m, t, c),
              i.sealed && (s = m ? null : { i: c, x: p.x, y: p.y, W: d, H: f }),
              r.push(this.rectAt(i, p.x, p.y, l, d, f)),
              t || (yield));
          }
          if ((s && this.place(i, s.x, s.y, s.W, s.H, e[s.i], !0, t, s.i), !a))
            return { page: i, rects: r };
          (we(i), (i = this.newPage()), i.busy++);
        }
      } finally {
        we(i);
      }
    }
    resolve(e, t) {
      let n = this.resolveSteps(e, t);
      for (;;) {
        let e = n.next();
        if (e.done) return e.value;
      }
    }
    flush() {
      for (let e of this.pages)
        e.dirty && !e.sealed && ((e.tex.needsUpdate = !0), (e.dirty = !1));
    }
  };
function Ce(e, t, n, r, i, a, o, s, c = 0) {
  if (s) {
    let l = a.w + a.gutter * 2,
      u = a.h + a.gutter * 2;
    (e.clearRect(t, n, r, i),
      e.drawImage(
        s.src,
        s.xy[c * 2],
        s.xy[c * 2 + 1],
        l,
        u,
        t,
        n,
        l * o,
        u * o,
      ));
  } else
    o === 1
      ? me(e, t, n, a)
      : (e.clearRect(t, n, r, i),
        e.save(),
        e.translate(t, n),
        e.scale(o, o),
        me(e, 0, 0, a),
        e.restore());
}
function we(e) {
  ((e.busy = Math.max(0, e.busy - 1)), Te(e));
}
function Te(e) {
  !ge ||
    e.sealed ||
    e.dead ||
    e.busy > 0 ||
    e.dirty ||
    e.uploadedVersion !== e.tex.version ||
    ((e.canvas.width = e.canvas.height = 1), (e.sealed = !0), ye.sealed++);
}
