import {
  Dt as e,
  Et as t,
  Fn as n,
  Gn as r,
  In as i,
  Jt as a,
  Ln as o,
  Mt as s,
  On as c,
  Rn as l,
  S as u,
  Tt as d,
  Ut as f,
  W as p,
  Y as m,
  ar as h,
  b as g,
  et as _,
  f as v,
  g as y,
  gt as b,
  h as x,
  ht as S,
  k as C,
  kt as w,
  m as T,
  n as E,
  or as D,
  p as O,
  rt as k,
  sr as A,
  v as j,
  wt as ee,
  z as M,
} from "./three-C4coU-vx.js";
import { nt as N, pn as te, yn as ne } from "./engine-14d5lda2.js";
var re = class {
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
function ie(e, t) {
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
var ae = typeof document < `u`;
function oe(e, t) {
  if (ae) {
    let n = document.createElement(`canvas`);
    return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
  }
  let n = new OffscreenCanvas(e, t);
  return [n, n.getContext(`2d`)];
}
var se = null;
function ce(e, t) {
  se ??= oe(e, t);
  let [n, r] = se;
  return (
    (n.width !== e || n.height !== t) && ((n.width = e), (n.height = t)),
    r.setTransform(1, 0, 0, 1, 0, 0),
    se
  );
}
var le = new Map(),
  ue = 0,
  de = 6 << 20,
  fe = 65536;
function pe(e) {
  let t = e.w * e.h <= fe;
  if (t) {
    let t = le.get(e.key);
    if (t && t.width === e.w && t.height === e.h)
      return (le.delete(e.key), le.set(e.key, t), t);
  }
  if (!e.paint) throw Error(`[characters] tile ${e.key} has no painter`);
  let [n, r] = t ? oe(e.w, e.h) : ce(e.w, e.h);
  if ((r.clearRect(0, 0, e.w, e.h), e.paint(r, 0, 0, e.w, e.h), t))
    for (le.set(e.key, n), ue += e.w * e.h * 4; ue > de && le.size > 1;) {
      let [e, t] = le.entries().next().value;
      (le.delete(e), (ue -= t.width * t.height * 4), (t.width = t.height = 1));
    }
  return n;
}
function me() {
  for (let e of le.values()) e.width = e.height = 1;
  (le.clear(), (ue = 0), se && (se[0].width = se[0].height = 1), (se = null));
}
function he(e, t, n, r) {
  let i = pe(r),
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
var ge = 0,
  _e = null,
  ve = 1;
function ye(e) {
  (e.renderer !== void 0 && (_e = e.renderer),
    e.textureScale !== void 0 && (ve = e.textureScale <= 0.5 ? 0.5 : 1));
}
var be = { sealed: 0, gpuTiles: 0, gpuMs: 0 },
  xe = null,
  Se = new h(),
  Ce = class {
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
        n = new j(e);
      ((n.colorSpace = c),
        (n.premultiplyAlpha = !0),
        (n.generateMipmaps = !0),
        (n.minFilter = b),
        (n.magFilter = S),
        (n.anisotropy = 4),
        (n.name = `char-atlas-${ge}`));
      let r = {
        id: ge++,
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
          ((r.uploadedVersion = n.version), Ee(r));
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
        ? Oe(e, t, n, r, i, (t) => we(t, 0, 0, r, i, a, e.scale, s, c), o)
        : we(e.g, t, n, r, i, a, e.scale, s, c);
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
          (Te(i), (i = this.newPage()), i.busy++);
        }
      } finally {
        Te(i);
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
function we(e, t, n, r, i, a, o, s, c = 0) {
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
      ? he(e, t, n, a)
      : (e.clearRect(t, n, r, i),
        e.save(),
        e.translate(t, n),
        e.scale(o, o),
        he(e, 0, 0, a),
        e.restore());
}
function Te(e) {
  ((e.busy = Math.max(0, e.busy - 1)), Ee(e));
}
function Ee(e) {
  !_e ||
    e.sealed ||
    e.dead ||
    e.busy > 0 ||
    e.dirty ||
    e.uploadedVersion !== e.tex.version ||
    ((e.canvas.width = e.canvas.height = 1), (e.sealed = !0), be.sealed++);
}
var De = !1;
function Oe(e, t, n, r, i, a, o) {
  let s = _e;
  if (!s) return;
  let c = performance.now();
  if (!xe) {
    let e = document.createElement(`canvas`);
    xe = { c: e, g: e.getContext(`2d`), tex: new j(e) };
  }
  let l = xe;
  (l.c.width !== r || l.c.height !== i
    ? ((l.c.width = r), (l.c.height = i))
    : (l.g.setTransform(1, 0, 0, 1, 0, 0), l.g.clearRect(0, 0, r, i)),
    a(l.g));
  let u = e.tex;
  u.generateMipmaps = o;
  try {
    (s.copyTextureToTexture(l.tex, u, null, Se.set(t, e.height - n - i)),
      be.gpuTiles++);
  } catch (e) {
    (De || console.warn(`[characters] atlas tile copy failed`, e), (De = !0));
  } finally {
    u.generateMipmaps = !0;
  }
  be.gpuMs += performance.now() - c;
}
function ke() {
  xe && (xe.c.width = xe.c.height = 1);
}
var Ae = null;
function je() {
  return (Ae ??= ve < 1 ? new Ce(1024, ve) : new Ce(2048));
}
var Me = new Map(),
  P = (e, t = 1) => {
    let n = t >= 1 ? 1e3 : t <= 0 ? 0 : Math.round(t * 1e3),
      r = (e & 16777215) * 1001 + n,
      i = Me.get(r);
    if (i === void 0) {
      let n = (e >> 16) & 255,
        a = (e >> 8) & 255,
        o = e & 255;
      ((i =
        t >= 1
          ? `rgb(${n},${a},${o})`
          : `rgba(${n},${a},${o},${t.toFixed(3)})`),
        Me.size >= 4096 && Me.clear(),
        Me.set(r, i));
    }
    return i;
  };
function Ne() {
  Me.clear();
}
function F(e, t, n) {
  let r = (e >> 16) & 255,
    i = (e >> 8) & 255,
    a = e & 255,
    o = (t >> 16) & 255,
    s = (t >> 8) & 255,
    c = t & 255;
  return (
    (Math.round(r + (o - r) * n) << 16) |
    (Math.round(i + (s - i) * n) << 8) |
    Math.round(a + (c - a) * n)
  );
}
function I(e, t) {
  return t >= 1 ? F(e, 16777215, Math.min(1, t - 1)) : F(0, e, Math.max(0, t));
}
function Pe(e) {
  let t = e >>> 0 || 1;
  return () => {
    ((t |= 0), (t = (t + 1831565813) | 0));
    let e = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function Fe(e, t, n) {
  for (let r = -1; r <= 1; r++) for (let i = -1; i <= 1; i++) n(i * e, r * t);
}
var Ie = (e, t, n, r, i) => {
    let a = Pe(77);
    ((e.fillStyle = `rgb(236,236,236)`), e.fillRect(t, n, r, i));
    for (let o = 0; o < r; o += 2)
      ((e.fillStyle = `rgba(255,255,255,${(0.1 + a() * 0.16).toFixed(3)})`),
        e.fillRect(t + o, n, 1, i));
    for (let o = 0; o < i; o += 2)
      ((e.fillStyle = `rgba(0,0,0,${(0.02 + a() * 0.05).toFixed(3)})`),
        e.fillRect(t, n + o, r, 1));
    for (let o = 0; o < 90; o++)
      ((e.fillStyle =
        a() < 0.5 ? `rgba(255,255,255,0.18)` : `rgba(0,0,0,0.06)`),
        e.fillRect(t + a() * r, n + a() * i, 2 + a() * 5, 1));
  },
  Le = (e, t, n, r, i) => {
    let a = Pe(4242),
      o = new Float32Array(r * i).fill(0.34),
      s = new Float32Array(r * i),
      c = (e, t, n, i, a, c) => {
        let l = Math.floor(e - n - 1),
          u = Math.ceil(e + n + 1);
        for (let d = l; d <= u; d++) {
          let l = Math.max(0, 1 - Math.abs(d + 0.5 - e) / n);
          if (l <= 0) continue;
          let u = t * r + (((d % r) + r) % r);
          ((s[u] = Math.max(s[u], l * a)), (o[u] += (i - o[u]) * l * c));
        }
      };
    for (let e = 0; e < 8; e++) {
      let t = ((e + 0.2 + a() * 0.6) / 8) * r,
        n = (r / 8) * (0.75 + 0.5 * a()),
        o = 1 + Math.floor(a() * 2),
        s = a() * Math.PI * 2,
        l = (0.6 + a() * 1.6) * (r / 128);
      for (let e = 0; e < 22; e++) {
        let e = (a() - 0.5) * n * (0.35 + 0.65 * a()),
          r = 1 - 0.75 * (Math.abs(e) / (n * 0.5)) ** 1.6,
          u =
            a() < 0.2 ? 0.95 : a() < 0.5 ? 0.25 + 0.2 * a() : 0.55 + 0.3 * a(),
          d = 1 + Math.floor(a() * 3),
          f = a() * Math.PI * 2,
          p = a() * 0.8,
          m = 0.7 + a() * 0.9;
        for (let n = 0; n < i; n++) {
          let h = (n / i) * Math.PI * 2;
          c(
            t + e + l * Math.sin(h * o + s) + p * Math.sin(h * d + f),
            n,
            m,
            u,
            Math.max(0.15, r) * (0.8 + 0.2 * a()),
            0.55,
          );
        }
      }
    }
    for (let e = 0; e < 26; e++) {
      let e = a() * r,
        t = 1 + Math.floor(a() * 2),
        n = a() * Math.PI * 2,
        o = (1 + a() * 4) * (r / 128),
        s = 0.4 + 0.5 * a();
      for (let r = 0; r < i; r++)
        c(
          e + o * Math.sin((r / i) * Math.PI * 2 * t + n),
          r,
          0.6,
          s,
          0.3 + 0.25 * a(),
          0.5,
        );
    }
    let l = e.createImageData(r, i);
    for (let e = 0; e < r * i; e++) {
      let t = Math.min(1, Math.max(0, o[e]));
      ((l.data[e * 4] = Math.round(t * 255)),
        (l.data[e * 4 + 1] = Math.round(Math.min(1, s[e]) ** (1 / 2.2) * 255)),
        (l.data[e * 4 + 2] = Math.round(t * 230)),
        (l.data[e * 4 + 3] = 255));
    }
    e.putImageData(l, t, n);
  };
function Re(e, t, n, r) {
  return (i, a, o, s, c) => {
    let l = Pe(r);
    switch (((i.fillStyle = P(t)), i.fillRect(a, o, s, c), e)) {
      case `stripes`:
        i.fillStyle = P(n);
        for (let e = 0; e < 4; e++)
          i.fillRect(a, o + (e * c) / 4, s, c / 4 / 2.6);
        break;
      case `plaid`: {
        let e = F(n, 16777215, 0.55);
        ((i.globalAlpha = 0.55),
          (i.fillStyle = P(n)),
          i.fillRect(a, o + c * 0.1, s, c * 0.34),
          i.fillRect(a + s * 0.1, o, s * 0.34, c),
          (i.globalAlpha = 0.35),
          i.fillRect(a, o + c * 0.62, s, c * 0.12),
          i.fillRect(a + s * 0.62, o, s * 0.12, c),
          (i.globalAlpha = 0.9),
          (i.fillStyle = P(e)),
          i.fillRect(a, o + c * 0.54, s, c * 0.025),
          i.fillRect(a + s * 0.54, o, s * 0.025, c),
          (i.fillStyle = P(F(t, 0, 0.5))),
          i.fillRect(a, o + c * 0.26, s, c * 0.02),
          i.fillRect(a + s * 0.26, o, s * 0.02, c),
          (i.globalAlpha = 1),
          ze(i, a, o, s, c, 0.07));
        break;
      }
      case `check`: {
        let e = s / 4;
        ((i.globalAlpha = 0.5), (i.fillStyle = P(n)));
        for (let t = 0; t < 4; t++)
          (i.fillRect(a + t * e, o, e / 2, c),
            i.fillRect(a, o + t * e, s, e / 2));
        i.globalAlpha = 1;
        break;
      }
      case `dots`: {
        i.fillStyle = P(n);
        let e = s / 3;
        for (let t = 0; t < 3; t++)
          for (let n = 0; n < 3; n++) {
            let r = a + (n + 0.5 + (t % 2) * 0.5) * e,
              l = o + (t + 0.5) * e;
            Fe(s, c, (t, n) => {
              (i.beginPath(),
                i.arc(r + t, l + n, e * 0.16, 0, Math.PI * 2),
                i.fill());
            });
          }
        break;
      }
      case `floral`: {
        let e = [n, F(n, 16777215, 0.45), F(n, 16724821, 0.4), 16773832],
          r = F(3111482, t, 0.25);
        for (let e = 0; e < 16; e++) {
          let e = a + l() * s,
            t = o + l() * c,
            n = l() * Math.PI,
            u = s * (0.05 + l() * 0.05);
          ((i.fillStyle = P(r)),
            Fe(s, c, (r, a) => {
              (i.beginPath(),
                i.ellipse(e + r, t + a, u, u * 0.38, n, 0, Math.PI * 2),
                i.fill());
            }));
        }
        for (let t = 0; t < 9; t++) {
          let t = a + l() * s,
            n = o + l() * c,
            r = s * (0.06 + l() * 0.06),
            u = l() * 6,
            d = e[Math.floor(l() * e.length)];
          Fe(s, c, (e, a) => {
            i.fillStyle = P(d);
            for (let o = 0; o < 5; o++) {
              let s = u + (o * Math.PI * 2) / 5;
              (i.beginPath(),
                i.ellipse(
                  t + e + Math.cos(s) * r * 0.55,
                  n + a + Math.sin(s) * r * 0.55,
                  r * 0.52,
                  r * 0.36,
                  s,
                  0,
                  Math.PI * 2,
                ),
                i.fill());
            }
            ((i.fillStyle = P(F(d, 0, 0.35), 0.8)),
              i.beginPath(),
              i.arc(t + e, n + a, r * 0.22, 0, Math.PI * 2),
              i.fill(),
              (i.fillStyle = `rgba(255,236,150,0.95)`),
              i.beginPath(),
              i.arc(t + e, n + a, r * 0.11, 0, Math.PI * 2),
              i.fill());
          });
        }
        for (let t = 0; t < 22; t++) {
          let n = a + l() * s,
            r = o + l() * c;
          ((i.fillStyle = P(e[t % 3], 0.9)),
            Fe(s, c, (e, t) => {
              (i.beginPath(),
                i.arc(n + e, r + t, s * 0.012 + l() * s * 0.01, 0, Math.PI * 2),
                i.fill());
            }));
        }
        break;
      }
      case `camo`: {
        let e = [n, F(t, 0, 0.35), F(n, 14207136, 0.5)];
        for (let t = 0; t < 26; t++) {
          let n = a + l() * s,
            r = o + l() * c,
            u = s * (0.06 + l() * 0.08);
          ((i.fillStyle = P(e[t % 3])),
            Fe(s, c, (e, t) => {
              i.beginPath();
              for (let a = 0; a < 7; a++) {
                let o = (a / 7) * Math.PI * 2,
                  s = u * (0.6 + l() * 0.6),
                  c = n + e + Math.cos(o) * s * 1.4,
                  d = r + t + Math.sin(o) * s;
                a === 0 ? i.moveTo(c, d) : i.lineTo(c, d);
              }
              (i.closePath(), i.fill());
            }));
        }
        break;
      }
      case `denim`:
        ze(i, a, o, s, c, 0.22);
        for (let e = 0; e < 70; e++)
          ((i.fillStyle = `rgba(255,255,255,${(0.05 + l() * 0.1).toFixed(3)})`),
            i.fillRect(a + l() * s, o + l() * c, 1, 4 + l() * 12));
        break;
      case `knit`: {
        let e = s / 8;
        for (let t = 0; t < 8; t++) {
          ((i.fillStyle = `rgba(0,0,0,0.16)`),
            i.fillRect(a + t * e, o, 1.5, c));
          for (let n = 0; n < 8; n++) {
            let r = o + (n * c) / 8;
            ((i.strokeStyle = `rgba(255,255,255,0.18)`),
              (i.lineWidth = 1.4),
              i.beginPath(),
              i.moveTo(a + t * e + 2, r + 1),
              i.lineTo(a + t * e + e / 2, r + c / 8 - 2),
              i.lineTo(a + t * e + e - 2, r + 1),
              i.stroke());
          }
        }
        break;
      }
      default:
        ze(i, a, o, s, c, 0.05);
    }
  };
}
function ze(e, t, n, r, i, a) {
  (e.save(), (e.strokeStyle = `rgba(0,0,0,${a})`), (e.lineWidth = 1));
  for (let a = -i; a < r + i; a += 3)
    (e.beginPath(), e.moveTo(t + a, n), e.lineTo(t + a + i, n + i), e.stroke());
  e.strokeStyle = `rgba(255,255,255,${a * 0.6})`;
  for (let a = -i + 1; a < r + i; a += 6)
    (e.beginPath(), e.moveTo(t + a, n), e.lineTo(t + a + i, n + i), e.stroke());
  e.restore();
}
function Be(e, t, n) {
  return (r, i, a, o, s) => {
    (r.clearRect(i, a, o, s),
      (r.fillStyle = P(e)),
      r.fillRect(i + o * 0.3, a, o * 0.4, s),
      (r.fillStyle = P(I(e, 0.78))),
      r.fillRect(i + o * 0.3, a, 1.5, s),
      r.fillRect(i + o * 0.7 - 1.5, a, 1.5, s));
    for (let e = 0; e < n; e++) {
      let c = a + ((e + 0.5) / n) * s;
      ((r.fillStyle = P(I(t, 0.7))),
        r.beginPath(),
        r.arc(i + o / 2, c + 0.8, o * 0.17, 0, Math.PI * 2),
        r.fill(),
        (r.fillStyle = P(t)),
        r.beginPath(),
        r.arc(i + o / 2, c, o * 0.16, 0, Math.PI * 2),
        r.fill(),
        (r.fillStyle = `rgba(0,0,0,0.35)`));
      for (let [e, t] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        r.fillRect(
          i + o / 2 + e * o * 0.05 - 0.6,
          c + t * o * 0.05 - 0.6,
          1.3,
          1.3,
        );
    }
  };
}
function Ve(e, t) {
  return (n, r, i, a, o) => {
    (n.clearRect(r, i, a, o),
      (n.fillStyle = P(e)),
      n.fillRect(r + a * 0.25, i, a * 0.5, o),
      (n.fillStyle = P(t)));
    for (let e = 0; e < o; e += 3)
      n.fillRect(r + a * 0.4 + ((e / 3) % 2) * a * 0.08, i + e, a * 0.14, 2);
    ((n.fillStyle = P(I(t, 0.85))),
      n.fillRect(r + a * 0.38, i + o * 0.04, a * 0.24, o * 0.05));
  };
}
function He(e, t, n) {
  return (r, i, a, o, s) => {
    (r.clearRect(i, a, o, s),
      r.save(),
      r.beginPath(),
      n === `jeans`
        ? (r.moveTo(i + o * 0.08, a + s * 0.06),
          r.lineTo(i + o * 0.92, a + s * 0.06),
          r.lineTo(i + o * 0.88, a + s * 0.72),
          r.lineTo(i + o * 0.5, a + s * 0.94),
          r.lineTo(i + o * 0.12, a + s * 0.72))
        : n === `chest`
          ? r.rect(i + o * 0.08, a + s * 0.08, o * 0.84, s * 0.84)
          : (r.moveTo(i + o * 0.22, a + s * 0.05),
            r.lineTo(i + o * 0.78, a + s * 0.05),
            r.lineTo(i + o * 0.95, a + s * 0.6),
            r.lineTo(i + o * 0.95, a + s * 0.95),
            r.lineTo(i + o * 0.05, a + s * 0.95),
            r.lineTo(i + o * 0.05, a + s * 0.6)),
      r.closePath(),
      (r.fillStyle = P(I(e, 0.96))),
      r.fill(),
      (r.lineWidth = Math.max(2, o * 0.03)),
      (r.strokeStyle = P(I(e, 0.72))),
      r.stroke(),
      r.setLineDash([o * 0.035, o * 0.025]),
      (r.lineWidth = Math.max(1, o * 0.014)),
      (r.strokeStyle = P(t)),
      r.stroke(),
      n === `pouch` &&
        (r.setLineDash([]),
        (r.strokeStyle = P(I(e, 0.55))),
        (r.lineWidth = o * 0.03),
        r.beginPath(),
        r.moveTo(i + o * 0.22, a + s * 0.05),
        r.lineTo(i + o * 0.06, a + s * 0.58),
        r.moveTo(i + o * 0.78, a + s * 0.05),
        r.lineTo(i + o * 0.94, a + s * 0.58),
        r.stroke()),
      r.restore());
  };
}
function Ue(e, t, n) {
  return (r, i, a, o, s) => {
    ((r.fillStyle = P(e)), r.fillRect(i, a, o, s));
    for (let e = 0; e < 16; e++)
      ((r.fillStyle = `rgba(0,0,0,0.14)`),
        r.fillRect(i + (e * o) / 16, a, o / 16 / 3, s));
    n &&
      ((r.fillStyle = P(t)),
      r.fillRect(i, a + s * 0.3, o, s * 0.12),
      r.fillRect(i, a + s * 0.55, o, s * 0.12));
  };
}
function We(e, t, n) {
  return (r, i, a, o, s) => {
    r.clearRect(i, a, o, s);
    let c = i + o / 2,
      l = a + s / 2,
      u = (e, t = !0) => `${t ? `900` : `600`} ${Math.round(e)}px ${te}`;
    switch (((r.textAlign = `center`), (r.textBaseline = `middle`), e)) {
      case `jie`: {
        let e = `#e8b54a`,
          t = `#f3e6c4`;
        ((r.fillStyle = P(n)),
          r.beginPath(),
          r.arc(c, l - s * 0.04, o * 0.4, 0, Math.PI * 2),
          r.fill(),
          (r.strokeStyle = e),
          (r.lineWidth = o * 0.022),
          r.stroke(),
          (r.fillStyle = `#c8202c`),
          r.beginPath(),
          r.arc(c, l - s * 0.02, o * 0.25, Math.PI, 0),
          r.fill(),
          (r.strokeStyle = `#f07a1e`),
          (r.lineWidth = o * 0.012));
        for (let e = 0; e <= 8; e++) {
          let t = Math.PI + (e / 8) * Math.PI;
          (r.beginPath(),
            r.moveTo(
              c + Math.cos(t) * o * 0.27,
              l - s * 0.02 + Math.sin(t) * o * 0.27,
            ),
            r.lineTo(
              c + Math.cos(t) * o * 0.36,
              l - s * 0.02 + Math.sin(t) * o * 0.36,
            ),
            r.stroke());
        }
        r.fillStyle = t;
        let i = l + s * 0.1,
          a = s * 0.045;
        for (let e = 0; e < 8; e++) {
          let t = i - (e + 1) * a;
          (r.beginPath(),
            r.moveTo(c - o * 0.035, t + a),
            r.lineTo(c - o * 0.05, t + a * 0.1),
            r.lineTo(c + o * 0.05, t + a * 0.1),
            r.lineTo(c + o * 0.035, t + a),
            r.fill());
        }
        (r.fillRect(c - o * 0.04, i, o * 0.08, s * 0.05),
          r.fillRect(c - o * 0.006, i - 8 * a - s * 0.08, o * 0.012, s * 0.08),
          (r.fillStyle = `#ffffff`));
        for (let [e, t] of [
          [-0.2, 1],
          [0.19, 0.9],
          [-0.05, 0.7],
        ])
          for (let n = 0; n < 3; n++)
            (r.beginPath(),
              r.arc(
                c + (e + (n - 1) * 0.05 * t) * o,
                i + s * 0.03 - (n === 1 ? s * 0.02 : 0),
                o * 0.045 * t,
                0,
                Math.PI * 2,
              ),
              r.fill());
        ((r.font = u(s * 0.2)),
          (r.fillStyle = e),
          (r.strokeStyle = `#3a2410`),
          (r.lineWidth = o * 0.014),
          r.strokeText(`台北`, c, l + s * 0.27),
          r.fillText(`台北`, c, l + s * 0.27),
          (r.font = u(s * 0.07)),
          (r.fillStyle = t),
          Ge(
            r,
            `TAIPEI  RUSH`,
            c,
            l - s * 0.04,
            o * 0.44,
            -Math.PI / 2,
            s * 0.07,
          ));
        break;
      }
      case `wen`: {
        ((r.fillStyle = P(t)),
          r.beginPath(),
          r.moveTo(c - o * 0.42, l - s * 0.05),
          r.quadraticCurveTo(c - o * 0.2, l - s * 0.32, c, l - s * 0.12),
          r.quadraticCurveTo(
            c + o * 0.2,
            l - s * 0.32,
            c + o * 0.42,
            l - s * 0.05,
          ),
          r.quadraticCurveTo(c + o * 0.2, l - s * 0.1, c, l + s * 0.02),
          r.quadraticCurveTo(
            c - o * 0.2,
            l - s * 0.1,
            c - o * 0.42,
            l - s * 0.05,
          ),
          r.fill());
        let e = o * 0.035;
        for (let t = 0; t < 3; t++)
          for (let i = -6; i < 6; i++)
            (i + t) % 2 ||
              ((r.fillStyle = P(n)),
              r.fillRect(c + i * e, l - s * 0.2 + t * e, e, e));
        ((r.fillStyle = `#ff6f61`),
          r.beginPath(),
          r.ellipse(c, l + s * 0.1, o * 0.07, s * 0.09, 0, 0, Math.PI * 2),
          r.fill(),
          (r.fillStyle = `#ffd98a`),
          r.fillRect(c - o * 0.05, l + s * 0.005, o * 0.1, s * 0.02),
          r.fillRect(c - o * 0.05, l + s * 0.18, o * 0.1, s * 0.02),
          (r.font = u(s * 0.12)),
          (r.fillStyle = P(t)),
          r.fillText(`夜市車神`, c, l + s * 0.33));
        break;
      }
      case `taipei`:
        ((r.fillStyle = P(t)),
          (r.font = u(s * 0.24)),
          r.fillText(`TAIPEI`, c, l - s * 0.06),
          (r.font = u(s * 0.12, !1)),
          r.fillText(`臺 北 · 101`, c, l + s * 0.16),
          r.fillRect(i + o * 0.15, l + s * 0.06, o * 0.7, s * 0.015));
        break;
      case `logo`:
        ((r.fillStyle = P(t)),
          r.beginPath(),
          r.moveTo(c - o * 0.2, l + s * 0.16),
          r.lineTo(c, l - s * 0.24),
          r.lineTo(c + o * 0.2, l + s * 0.16),
          r.closePath(),
          r.fill(),
          (r.fillStyle = P(n)),
          r.beginPath(),
          r.moveTo(c - o * 0.08, l + s * 0.16),
          r.lineTo(c + o * 0.02, l - s * 0.04),
          r.lineTo(c + o * 0.12, l + s * 0.16),
          r.closePath(),
          r.fill(),
          (r.fillStyle = P(t)),
          (r.font = u(s * 0.13)),
          r.fillText(`SUMMIT`, c, l + s * 0.33));
        break;
      case `band`:
        ((r.fillStyle = P(t)),
          (r.font = u(s * 0.16)),
          r.fillText(`臺北雜音`, c, l - s * 0.28),
          r.beginPath(),
          r.moveTo(c + o * 0.06, l - s * 0.16),
          r.lineTo(c - o * 0.12, l + s * 0.06),
          r.lineTo(c, l + s * 0.06),
          r.lineTo(c - o * 0.08, l + s * 0.26),
          r.lineTo(c + o * 0.14, l - s * 0.02),
          r.lineTo(c + o * 0.02, l - s * 0.02),
          r.closePath(),
          r.fill(),
          (r.font = u(s * 0.1)),
          r.fillText(`TAIPEI NOISE`, c, l + s * 0.38));
        break;
      case `rider-pink`:
      case `rider-green`: {
        let t = e === `rider-pink`;
        if (
          ((r.fillStyle = t ? `#ffffff` : `#111111`),
          r.beginPath(),
          r.arc(c, l - s * 0.12, o * 0.19, 0, Math.PI * 2),
          r.fill(),
          (r.fillStyle = t ? P(n) : `#3ce07a`),
          t)
        ) {
          (r.beginPath(),
            r.arc(c, l - s * 0.1, o * 0.11, 0, Math.PI * 2),
            r.fill());
          for (let e of [-1, 1])
            (r.beginPath(),
              r.arc(c + e * o * 0.09, l - s * 0.2, o * 0.045, 0, Math.PI * 2),
              r.fill());
          r.fillStyle = `#ffffff`;
          for (let e of [-1, 1])
            (r.beginPath(),
              r.arc(c + e * o * 0.04, l - s * 0.12, o * 0.017, 0, Math.PI * 2),
              r.fill());
          (r.beginPath(),
            r.ellipse(c, l - s * 0.06, o * 0.035, s * 0.022, 0, 0, Math.PI * 2),
            r.fill());
        } else ((r.font = u(s * 0.2)), r.fillText(`食`, c, l - s * 0.11));
        ((r.fillStyle = t ? `#ffffff` : `#111111`),
          (r.font = u(s * 0.14)),
          r.fillText(t ? `餓熊外送` : `快食GO`, c, l + s * 0.16),
          (r.font = u(s * 0.08)),
          r.fillText(t ? `FOODBEAR` : `EATZ GO`, c, l + s * 0.3));
        break;
      }
      case `police`:
        ((r.fillStyle = P(t)),
          (r.font = u(s * 0.2)),
          r.fillText(`警 察`, c, l - s * 0.12),
          (r.font = u(s * 0.16)),
          r.fillText(`POLICE`, c, l + s * 0.12));
        break;
      case `school`:
        ((r.fillStyle = P(t)),
          (r.font = u(s * 0.2, !1)),
          r.fillText(`北城高中`, c, l - s * 0.14),
          (r.font = u(s * 0.17, !1)),
          r.fillText(`110521`, c, l + s * 0.14));
    }
  };
}
function Ge(e, t, n, r, i, a, o) {
  let s = t.length,
    c = (s * o * 0.62) / i;
  for (let o = 0; o < s; o++) {
    let l = a - c / 2 + (o + 0.5) * (c / s);
    (e.save(),
      e.translate(n + Math.cos(l) * i, r + Math.sin(l) * i),
      e.rotate(l + Math.PI / 2),
      e.fillText(t[o], 0, 0),
      e.restore());
  }
}
function Ke(e, t, n, r, i) {
  return (a, o, s, c, l) => {
    let u = Pe(e.length * 31 + (t & 255)),
      d = (e) => s + e * l,
      f = (e) => o + e * c,
      p = e === `sneaker` || e === `boot`,
      m = e === `dress` || e === `loafer` || e === `heel` || e === `flat`;
    (a.clearRect(o, s, c, l), (a.fillStyle = P(t)), a.fillRect(o, s, c, l));
    for (let e = 0; e < 40; e++)
      ((a.fillStyle = m
        ? `rgba(255,255,255,${(0.03 + u() * 0.05).toFixed(3)})`
        : `rgba(0,0,0,${(0.02 + u() * 0.03).toFixed(3)})`),
        a.fillRect(f(u()), d(u()), c * (0.05 + u() * 0.2), 1));
    let h = p ? 0.2 : e === `rainboot` ? 0.13 : 0.11;
    if (
      ((a.fillStyle = P(r)),
      a.fillRect(o, d(0), c, h * l),
      a.fillRect(o, d(1 - h), c, h * l),
      (a.fillStyle = P(I(r, 0.72))),
      a.fillRect(o, d(h) - 1.5, c, 2),
      a.fillRect(o, d(1 - h) - 0.5, c, 2),
      p)
    ) {
      a.fillStyle = P(I(r, 0.85));
      for (let e = 0; e < 18; e++)
        (a.fillRect(f(e / 18), d(0), 1, h * l * 0.5),
          a.fillRect(f(e / 18), d(1 - h * 0.5), 1, h * l * 0.5));
      ((a.fillStyle = P(I(r, 0.9))),
        a.fillRect(o, d(h * 0.6), c, 1.5),
        a.fillRect(o, d(1 - h * 0.6), c, 1.5));
    }
    if (p) {
      ((a.fillStyle = P(I(t, 0.94))),
        a.fillRect(f(0.84), d(h), c * 0.16, l * (1 - 2 * h)),
        (a.strokeStyle = P(I(t, 0.75))),
        a.setLineDash([3, 2]),
        (a.lineWidth = 1),
        a.beginPath(),
        a.moveTo(f(0.84), d(h)),
        a.lineTo(f(0.84), d(1 - h)),
        a.stroke(),
        a.setLineDash([]),
        (a.fillStyle = P(n)),
        a.fillRect(o, d(0.36), c * 0.1, l * 0.28));
      for (let e of [0.27, 0.73])
        ((a.fillStyle = P(n)),
          a.beginPath(),
          a.moveTo(f(0.18), d(e + 0.1 * (e < 0.5 ? -1 : 1) * 0)),
          a.bezierCurveTo(
            f(0.35),
            d(e + 0.07),
            f(0.55),
            d(e + 0.02),
            f(0.72),
            d(e - 0.1),
          ),
          a.lineTo(f(0.7), d(e - 0.04)),
          a.bezierCurveTo(
            f(0.52),
            d(e + 0.07),
            f(0.34),
            d(e + 0.12),
            f(0.18),
            d(e + 0.08),
          ),
          a.closePath(),
          a.fill());
      ((a.fillStyle = P(I(t, 0.9))),
        a.fillRect(f(0.34), d(0.42), c * 0.34, l * 0.16),
        (a.strokeStyle = P(e === `boot` ? 3811866 : 16185074)),
        (a.lineWidth = 2.2));
      for (let e = 0; e < 6; e++) {
        let t = 0.36 + e * 0.05;
        (a.beginPath(),
          a.moveTo(f(t), d(0.43)),
          a.lineTo(f(t + 0.035), d(0.57)),
          a.moveTo(f(t), d(0.57)),
          a.lineTo(f(t + 0.035), d(0.43)),
          a.stroke());
      }
      a.fillStyle = P(I(t, 0.6));
      for (let e = 0; e < 7; e++)
        (a.fillRect(f(0.355 + e * 0.05), d(0.425), 2, 2),
          a.fillRect(f(0.355 + e * 0.05), d(0.565), 2, 2));
      ((a.fillStyle = `rgba(20,18,16,0.95)`),
        a.fillRect(o, d(0.46), c * 0.28, l * 0.08));
    } else if (m) {
      if (
        ((a.strokeStyle = P(I(t, 0.6))),
        (a.lineWidth = 1.2),
        a.beginPath(),
        a.ellipse(
          f(0.83),
          d(0.5),
          c * 0.1,
          l * 0.22,
          0,
          Math.PI * 0.5,
          Math.PI * 1.5,
        ),
        a.stroke(),
        e === `loafer` &&
          ((a.fillStyle = P(I(t, 0.82))),
          a.fillRect(f(0.52), d(0.4), c * 0.06, l * 0.2)),
        e === `dress`)
      ) {
        ((a.strokeStyle = P(I(t, 0.45))), (a.lineWidth = 1.5));
        for (let e = 0; e < 4; e++)
          (a.beginPath(),
            a.moveTo(f(0.46 + e * 0.045), d(0.46)),
            a.lineTo(f(0.46 + e * 0.045), d(0.54)),
            a.stroke());
      }
      ((a.fillStyle = `rgba(16,14,12,0.95)`),
        a.fillRect(o, d(0.47), c * 0.26, l * 0.06),
        i && a.clearRect(f(0.18), d(0.36), c * 0.55, l * 0.28));
    } else
      e === `rainboot` &&
        ((a.fillStyle = `rgba(255,255,255,0.12)`),
        a.fillRect(o, d(0.3), c, l * 0.05),
        (a.fillStyle = `rgba(16,14,12,0.9)`),
        a.fillRect(o, d(0.46), c * 0.2, l * 0.08));
  };
}
function qe(e, t) {
  return (n, r, i, a, o) => {
    let s = [e, 16052974, t, 16052974, e, 16052974],
      c = a / s.length;
    s.forEach((e, t) => {
      ((n.fillStyle = P(e)), n.fillRect(r + t * c, i, c + 1, o));
    });
    for (let e = 0; e < o; e += 4)
      for (let t = 0; t < a; t += 4)
        ((n.fillStyle =
          ((t + e) / 4) % 2 ? `rgba(0,0,0,0.12)` : `rgba(255,255,255,0.1)`),
          n.fillRect(r + t, i + e, 4, 2));
  };
}
var L = {
    hips: 0,
    spine: 1,
    chest: 2,
    neck: 3,
    head: 4,
    armL: 5,
    foreL: 6,
    handL: 7,
    armR: 8,
    foreR: 9,
    handR: 10,
    thighL: 11,
    shinL: 12,
    footL: 13,
    thighR: 14,
    shinR: 15,
    footR: 16,
    shoulderL: 17,
    shoulderR: 18,
    fingersL: 19,
    fingersR: 20,
    hair: 21,
    lidL: 22,
    lidR: 23,
    jaw: 24,
    eyeL: 25,
    eyeR: 26,
  },
  Je = Object.keys(L).sort((e, t) => L[e] - L[t]),
  Ye = [
    -1,
    L.hips,
    L.spine,
    L.chest,
    L.neck,
    L.shoulderL,
    L.armL,
    L.foreL,
    L.shoulderR,
    L.armR,
    L.foreR,
    L.hips,
    L.thighL,
    L.shinL,
    L.hips,
    L.thighR,
    L.shinR,
    L.chest,
    L.chest,
    L.handL,
    L.handR,
    L.head,
    L.head,
    L.head,
    L.head,
    L.head,
    L.head,
  ],
  R = {
    pelvis: 0,
    torso: 1,
    head: 2,
    lUpper: 3,
    lFore: 4,
    rUpper: 5,
    rFore: 6,
    lThigh: 7,
    lShin: 8,
    rThigh: 9,
    rShin: 10,
    rItem: 11,
    lItem: 12,
    static: 13,
  },
  Xe = [
    R.pelvis,
    R.torso,
    R.torso,
    R.head,
    R.head,
    R.lUpper,
    R.lFore,
    R.lFore,
    R.rUpper,
    R.rFore,
    R.rFore,
    R.lThigh,
    R.lShin,
    R.lShin,
    R.rThigh,
    R.rShin,
    R.rShin,
    R.torso,
    R.torso,
    R.lFore,
    R.rFore,
    R.head,
    R.head,
    R.head,
    R.head,
    R.head,
    R.head,
  ];
function Ze(e) {
  let t = [];
  for (let e = 0; e < 27; e++) {
    let n = new v();
    ((n.name = Je[e]), t.push(n));
  }
  for (let n = 0; n < 27; n++) {
    let r = Ye[n],
      i = e.p[n].clone();
    (r >= 0 && (i.sub(e.p[r]), t[r].add(t[n])), t[n].position.copy(i));
  }
  return t;
}
var z = {
    cloth: 0,
    skin: 1,
    hair: 2,
    eye: 3,
    gloss: 4,
    metal: 5,
    screen: 6,
    reflect: 7,
    lens: 8,
    satin: 9,
  },
  Qe = new u(),
  $e = new D(),
  et = new D(),
  tt = new ee(),
  nt = [0, 0],
  rt = { i: [0, 0, 0, 0], w: [1, 0, 0, 0] },
  it = { x: 0, y: 0, w: 0, h: 0 },
  at = new Float64Array(3072),
  ot = new Float64Array(64),
  st = new Float64Array(64),
  ct = new Int32Array(6144),
  lt = new Float64Array(3072),
  ut = new Int32Array(1024),
  dt = new Int32Array(3072),
  ft = new Int32Array(2048);
function pt(e, t) {
  return e.length >= t ? e : new Float64Array(Math.max(t, e.length * 2));
}
function mt(e, t) {
  return e.length >= t ? e : new Int32Array(Math.max(t, e.length * 2));
}
var ht = -1,
  gt = 0,
  _t = 0,
  vt = 0;
function yt(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = 1 / 0,
    i = -1 / 0,
    a = -1 / 0,
    o = -1 / 0;
  for (let s = 0; s < e.length; s += 3) {
    let c = e[s],
      l = e[s + 1],
      u = e[s + 2];
    (c < t && (t = c),
      l < n && (n = l),
      u < r && (r = u),
      c > i && (i = c),
      l > a && (a = l),
      u > o && (o = u));
  }
  let s = (t + i) / 2,
    c = (n + a) / 2,
    l = (r + o) / 2,
    u = 0;
  for (let t = 0; t < e.length; t += 3) {
    let n = e[t] - s,
      r = e[t + 1] - c,
      i = e[t + 2] - l,
      a = n * n + r * r + i * i;
    a > u && (u = a);
  }
  return new Float32Array([s, c, l, Math.sqrt(u), t, n, r, i, a, o]);
}
var bt = class {
  blank = it;
  textured = !0;
  nv = 0;
  n0 = 0;
  n1 = 0;
  cap;
  _pos;
  _nor;
  _col;
  _uv;
  _rect;
  _surf;
  _si;
  _sw;
  _part;
  _glow;
  _i0;
  _i1;
  views = {};
  _idxV = null;
  constructor(e = 2048) {
    let t = (this.cap = Math.max(64, e | 0));
    ((this._pos = new Float32Array(t * 3)),
      (this._nor = new Float32Array(t * 3)),
      (this._col = new Float32Array(t * 3)),
      (this._uv = new Float32Array(t * 2)),
      (this._rect = new Float32Array(t * 4)),
      (this._surf = new Float32Array(t * 4)),
      (this._si = new Uint16Array(t * 4)),
      (this._sw = new Float32Array(t * 4)),
      (this._part = new Float32Array(t)),
      (this._glow = new Float32Array(t)),
      (this._i0 = new Uint32Array(t * 3)),
      (this._i1 = new Uint32Array(256)));
  }
  reset() {
    ((this.nv = this.n0 = this.n1 = 0), (this._idxV = null));
  }
  mark() {
    return [this.nv, this.n0, this.n1];
  }
  rollback(e) {
    ((this.nv = e[0]), (this.n0 = e[1]), (this.n1 = e[2]), (this._idxV = null));
  }
  get vertexCount() {
    return this.nv;
  }
  get triangleCount() {
    return (this.n0 + this.n1) / 3;
  }
  view(e, t, n) {
    let r = this.views[e];
    if (r && r.length === n && r.buffer === t.buffer) return r;
    let i = t.subarray(0, n);
    return ((this.views[e] = i), i);
  }
  get pos() {
    return this.view(`pos`, this._pos, this.nv * 3);
  }
  get nor() {
    return this.view(`nor`, this._nor, this.nv * 3);
  }
  get col() {
    return this.view(`col`, this._col, this.nv * 3);
  }
  get uv() {
    return this.view(`uv`, this._uv, this.nv * 2);
  }
  get rect() {
    return this.view(`rect`, this._rect, this.nv * 4);
  }
  get surf() {
    return this.view(`surf`, this._surf, this.nv * 4);
  }
  get si() {
    return this.view(`si`, this._si, this.nv * 4);
  }
  get sw() {
    return this.view(`sw`, this._sw, this.nv * 4);
  }
  get part() {
    return this.view(`part`, this._part, this.nv);
  }
  get glow() {
    return this.view(`glow`, this._glow, this.nv);
  }
  get idx() {
    let e = this._idxV;
    return e &&
      e[0].length === this.n0 &&
      e[1].length === this.n1 &&
      e[0].buffer === this._i0.buffer &&
      e[1].buffer === this._i1.buffer
      ? e
      : (this._idxV = [
          this._i0.subarray(0, this.n0),
          this._i1.subarray(0, this.n1),
        ]);
  }
  reserve(e) {
    let t = this.nv + e;
    if (t <= this.cap) return;
    let n = this.cap;
    for (; n < t;) n *= 2;
    let r = (e, t) => {
      let r = new e.constructor(n * t);
      return (r.set(e.subarray(0, this.nv * t)), r);
    };
    ((this._pos = r(this._pos, 3)),
      (this._nor = r(this._nor, 3)),
      (this._col = r(this._col, 3)),
      (this._uv = r(this._uv, 2)),
      (this._rect = r(this._rect, 4)),
      (this._surf = r(this._surf, 4)),
      (this._si = r(this._si, 4)),
      (this._sw = r(this._sw, 4)),
      (this._part = r(this._part, 1)),
      (this._glow = r(this._glow, 1)),
      (this.cap = n));
  }
  pushTris(e, t, n) {
    let r = n ? this._i1 : this._i0,
      i = n ? this.n1 : this.n0;
    if (i + t > r.length) {
      let e = r.length;
      for (; e < i + t;) e *= 2;
      let a = new Uint32Array(e);
      (a.set(r.subarray(0, i)), (r = a), n ? (this._i1 = a) : (this._i0 = a));
    }
    for (let n = 0; n < t; n++) r[i + n] = e[n];
    n ? (this.n1 += t) : (this.n0 += t);
  }
  pushVertex(e, t, n, r, i, a, o) {
    let s = this.nv++,
      c = s * 2,
      l = s * 3,
      u = s * 4,
      d = this._pos;
    ((d[l] = e), (d[l + 1] = t), (d[l + 2] = n));
    let f, p, m;
    typeof a.color == `number`
      ? (a.color !== ht &&
          (Qe.setHex(a.color),
          (ht = a.color),
          (gt = Qe.r),
          (_t = Qe.g),
          (vt = Qe.b)),
        (f = gt),
        (p = _t),
        (m = vt))
      : (a.color(e, t, n, r, i, Qe), (f = Qe.r), (p = Qe.g), (m = Qe.b));
    let h = this._col;
    ((h[l] = f * o), (h[l + 1] = p * o), (h[l + 2] = m * o));
    let g = rt;
    typeof a.skin == `number`
      ? ((g.i[0] = a.skin),
        (g.i[1] = g.i[2] = g.i[3] = 0),
        (g.w[0] = 1),
        (g.w[1] = g.w[2] = g.w[3] = 0))
      : ((g.i[0] = g.i[1] = g.i[2] = g.i[3] = 0),
        (g.w[0] = 1),
        (g.w[1] = g.w[2] = g.w[3] = 0),
        a.skin(e, t, n, r, i, g));
    let _ = g.w[0] + g.w[1] + g.w[2] + g.w[3];
    _ > 1e-6 || ((g.w[0] = 1), (g.w[1] = g.w[2] = g.w[3] = 0), (_ = 1));
    let v = 0;
    for (let e = 0; e < 4; e++)
      ((g.i[e] < 0 || g.i[e] >= 27) && (g.i[e] = 0),
        g.w[e] > g.w[v] && (v = e));
    let y = this._si,
      b = this._sw;
    ((y[u] = g.i[0]),
      (y[u + 1] = g.i[1]),
      (y[u + 2] = g.i[2]),
      (y[u + 3] = g.i[3]),
      (b[u] = g.w[0] / _),
      (b[u + 1] = g.w[1] / _),
      (b[u + 2] = g.w[2] / _),
      (b[u + 3] = g.w[3] / _),
      (this._part[s] = a.part ?? Xe[g.i[v]]),
      (this._glow[s] = a.glow ?? 0));
    let x =
        a.rough === void 0
          ? 0.8
          : typeof a.rough == `number`
            ? a.rough
            : a.rough(e, t, n, r, i),
      S =
        a.emissive ??
        (typeof a.bump == `function` ? a.bump(e, t, n, r, i) : a.bump) ??
        0,
      C = this._uv,
      w = this._rect,
      T = this._surf,
      E = this.textured ? a.tex : void 0,
      D = E ? E.rect : this.blank;
    (E
      ? (E.uv(e, t, n, r, i, nt), (C[c] = nt[0]), (C[c + 1] = nt[1]))
      : ((C[c] = 0.5), (C[c + 1] = 0.5)),
      (w[u] = D.x),
      (w[u + 1] = D.y),
      (w[u + 2] = D.w),
      (w[u + 3] = D.h),
      (T[u] = a.kind ?? 0),
      (T[u + 1] = x),
      (T[u + 2] = E ? E.mode : 0),
      (T[u + 3] = S));
  }
  grid(e, t) {
    let { nu: n, nv: r, closed: i } = e,
      a = n + 1,
      o = this.nv,
      s = (r + 1) * a;
    this.reserve(s + 2);
    let c = (at = pt(at, s * 3)),
      l = (ot = pt(ot, a)),
      u = (st = pt(st, r + 1));
    for (let t = 0; t <= r; t++) {
      let n = t / r;
      u[t] = e.vWarp ? e.vWarp(n) : n;
    }
    for (let t = 0; t < a; t++) {
      let r = t / n;
      l[t] = e.uWarp ? e.uWarp(r) : r;
    }
    for (let t = 0, o = 0; t <= r; t++)
      for (let r = 0; r < a; r++, o += 3)
        (e.point(i && r === n ? l[0] : l[r], u[t], $e),
          (c[o] = $e.x),
          (c[o + 1] = $e.y),
          (c[o + 2] = $e.z));
    let d = t.shade ?? 0;
    for (let e = 0; e <= r; e++)
      for (let r = 0; r < a; r++) {
        let o = (e * a + r) * 3,
          s = i && r === n ? 1 : l[r];
        this.pushVertex(
          c[o],
          c[o + 1],
          c[o + 2],
          s,
          u[e],
          t,
          1 - d * (1 - u[e]),
        );
      }
    let f = (ct = mt(ct, n * r * 6 + n * 6)),
      p = 0,
      m = !!e.invert != !!t.flip;
    for (let t = 0; t < r; t++)
      for (let r = 0; r < n; r++) {
        if (e.skip && e.skip(r, t)) continue;
        let n = o + t * a + r,
          i = n + 1,
          s = n + a,
          c = s + 1;
        m
          ? ((f[p++] = n),
            (f[p++] = s),
            (f[p++] = i),
            (f[p++] = i),
            (f[p++] = s),
            (f[p++] = c))
          : ((f[p++] = n),
            (f[p++] = i),
            (f[p++] = s),
            (f[p++] = i),
            (f[p++] = c),
            (f[p++] = s));
      }
    let h = (e, r) => {
      let i = 0,
        s = 0,
        l = 0;
      for (let t = 0; t < n; t++) {
        let n = (e * a + t) * 3;
        ((i += c[n]), (s += c[n + 1]), (l += c[n + 2]));
      }
      ((i /= n), (s /= n), (l /= n));
      let u = this.nv;
      this.pushVertex(i, s, l, 0.5, +!!r, t, 1 - d * +!r);
      for (let t = 0; t < n; t++) {
        let n = o + e * a + t,
          i = n + 1;
        ((f[p++] = u),
          r === m
            ? ((f[p++] = n), (f[p++] = i))
            : ((f[p++] = i), (f[p++] = n)));
      }
    };
    return (
      e.cap0 && h(0, !1),
      e.cap1 && h(r, !0),
      this.computeNormals(o, this.nv, f, p),
      this.pushTris(f, p, +!!t.transparent),
      o
    );
  }
  geo(e, t, n, r = !1) {
    let i = e.attributes.position,
      a = e.attributes.normal,
      o = e.attributes.uv,
      s = this.nv,
      c = i.count;
    this.reserve(c);
    let l = 1 / 0,
      u = -1 / 0,
      d = (at = pt(at, c * 3));
    for (let e = 0; e < c; e++)
      ($e.fromBufferAttribute(i, e),
        t && $e.applyMatrix4(t),
        (d[e * 3] = $e.x),
        (d[e * 3 + 1] = $e.y),
        (d[e * 3 + 2] = $e.z),
        $e.y < l && (l = $e.y),
        $e.y > u && (u = $e.y));
    let f = n.shade ?? 0;
    for (let e = 0; e < c; e++) {
      let t = d[e * 3],
        r = d[e * 3 + 1],
        i = d[e * 3 + 2],
        a = u > l ? (r - l) / (u - l) : 1,
        s = o ? o.getX(e) : 0,
        c = o ? o.getY(e) : 0;
      this.pushVertex(t, r, i, s, c, n, 1 - f * (1 - a));
    }
    let p = e.index ? e.index.array : null,
      m = p ? p.length : c - (c % 3),
      h = (ct = mt(ct, m)),
      g = 0;
    for (let e = 0; e < m; e += 3) {
      let t = p ? p[e] : e,
        r = p ? p[e + 1] : e + 1,
        i = p ? p[e + 2] : e + 2;
      ((h[g++] = s + t),
        (h[g++] = s + (n.flip ? i : r)),
        (h[g++] = s + (n.flip ? r : i)));
    }
    if (r && a) {
      t && tt.getNormalMatrix(t);
      let e = this._nor;
      for (let r = 0; r < a.count; r++) {
        (et.fromBufferAttribute(a, r),
          t && et.applyMatrix3(tt),
          et.normalize(),
          n.flip && et.negate());
        let i = (s + r) * 3;
        ((e[i] = et.x), (e[i + 1] = et.y), (e[i + 2] = et.z));
      }
    } else this.computeNormals(s, this.nv, h, g);
    (this.pushTris(h, g, +!!n.transparent), e.dispose());
  }
  computeNormals(e, t, n, r) {
    let i = t - e,
      a = this._pos,
      o = (dt = mt(dt, i * 3)),
      s = (ut = mt(ut, i)),
      c = 16;
    for (; c < i * 2;) c <<= 1;
    let l = (ft = mt(ft, c));
    l.fill(-1, 0, c);
    let u = c - 1;
    for (let t = 0; t < i; t++) {
      let n = (e + t) * 3,
        r = Math.round(a[n] * 2e4),
        i = Math.round(a[n + 1] * 2e4),
        c = Math.round(a[n + 2] * 2e4);
      ((o[t * 3] = r), (o[t * 3 + 1] = i), (o[t * 3 + 2] = c));
      let d =
          (Math.imul(r, 73856093) ^
            Math.imul(i, 19349663) ^
            Math.imul(c, 83492791)) &
          u,
        f = -1;
      for (;;) {
        let e = l[d];
        if (e < 0) {
          ((l[d] = t), (f = t));
          break;
        }
        if (o[e * 3] === r && o[e * 3 + 1] === i && o[e * 3 + 2] === c) {
          f = e;
          break;
        }
        d = (d + 1) & u;
      }
      s[t] = f;
    }
    let d = (lt = pt(lt, i * 3));
    d.fill(0, 0, i * 3);
    for (let t = 0; t < r; t += 3) {
      let r = n[t],
        i = n[t + 1],
        o = n[t + 2],
        c = a[r * 3],
        l = a[r * 3 + 1],
        u = a[r * 3 + 2],
        f = a[i * 3] - c,
        p = a[i * 3 + 1] - l,
        m = a[i * 3 + 2] - u,
        h = a[o * 3] - c,
        g = a[o * 3 + 1] - l,
        _ = a[o * 3 + 2] - u,
        v = p * _ - m * g,
        y = m * h - f * _,
        b = f * g - p * h,
        x = s[r - e] * 3;
      ((d[x] += v),
        (d[x + 1] += y),
        (d[x + 2] += b),
        (x = s[i - e] * 3),
        (d[x] += v),
        (d[x + 1] += y),
        (d[x + 2] += b),
        (x = s[o - e] * 3),
        (d[x] += v),
        (d[x + 1] += y),
        (d[x + 2] += b));
    }
    let f = this._nor;
    for (let t = 0; t < i; t++) {
      let n = s[t] * 3,
        r = d[n],
        i = d[n + 1],
        a = d[n + 2],
        o = Math.sqrt(r * r + i * i + a * a) || 1,
        c = (e + t) * 3;
      ((f[c] = r / o), (f[c + 1] = i / o), (f[c + 2] = a / o));
    }
  }
  tint(e, t, n) {
    let r = this._pos;
    for (let i = e; i < t; i++)
      n(r[i * 3], r[i * 3 + 1], r[i * 3 + 2], this._col, i * 3);
  }
  heroArrays() {
    let e = this.nv,
      t = this.n0 + this.n1,
      n = e > 65535 ? new Uint32Array(t) : new Uint16Array(t);
    return (
      n.set(this._i0.subarray(0, this.n0)),
      n.set(this._i1.subarray(0, this.n1), this.n0),
      {
        pos: this._pos.slice(0, e * 3),
        nor: this._nor.slice(0, e * 3),
        col: this._col.slice(0, e * 3),
        uv: this._uv.slice(0, e * 2),
        rect: this._rect.slice(0, e * 4),
        surf: this._surf.slice(0, e * 4),
        si: this._si.slice(0, e * 4),
        sw: this._sw.slice(0, e * 4),
        idx: n,
        n0: this.n0,
      }
    );
  }
  buildHero() {
    return xt(this.heroArrays());
  }
  buildCrowd() {
    let e = new y(),
      t = this.nv;
    (e.setAttribute(`position`, new x(this._pos.slice(0, t * 3), 3)),
      e.setAttribute(`normal`, new x(this._nor.slice(0, t * 3), 3)),
      e.setAttribute(`color`, new x(this._col.slice(0, t * 3), 3)));
    let n = this._part.slice(0, t),
      r = new Float32Array(t * 4);
    for (let e = 0; e < t; e++)
      ((r[e * 4] = n[e]),
        (r[e * 4 + 1] = 7),
        (r[e * 4 + 2] = 0),
        (r[e * 4 + 3] = this._glow[e]));
    (e.setAttribute(`part`, new x(n, 1)), e.setAttribute(`aInfo`, new x(r, 4)));
    let i = this.n0 + this.n1,
      a = t > 65535 ? new Uint32Array(i) : new Uint16Array(i);
    return (
      a.set(this._i0.subarray(0, this.n0)),
      a.set(this._i1.subarray(0, this.n1), this.n0),
      e.setIndex(new x(a, 1)),
      e.computeBoundingSphere(),
      e.computeBoundingBox(),
      e
    );
  }
};
function xt(e) {
  let t = new y();
  (t.setAttribute(`position`, new x(e.pos, 3)),
    t.setAttribute(`normal`, new x(e.nor, 3)),
    t.setAttribute(`color`, new x(e.col, 3)),
    t.setAttribute(`uv`, new x(e.uv, 2)),
    t.setAttribute(`uvRect`, new x(e.rect, 4)),
    t.setAttribute(`surf`, new x(e.surf, 4)),
    t.setAttribute(`skinIndex`, new x(e.si, 4)),
    t.setAttribute(`skinWeight`, new x(e.sw, 4)),
    t.setIndex(new x(e.idx, 1)),
    t.addGroup(0, e.n0, 0),
    e.idx.length > e.n0 && t.addGroup(e.n0, e.idx.length - e.n0, 1));
  let n = e.bounds;
  return (
    n && n.length >= 10
      ? ((t.boundingSphere = new o(new D(n[0], n[1], n[2]), n[3])),
        (t.boundingBox = new O(
          new D(n[4], n[5], n[6]),
          new D(n[7], n[8], n[9]),
        )))
      : (t.computeBoundingSphere(), t.computeBoundingBox()),
    t
  );
}
function B(e, t, n, r) {
  ((e.i[0] = t),
    (e.i[1] = n),
    (e.w[0] = 1 - r),
    (e.w[1] = r),
    (e.i[2] = e.i[3] = 0),
    (e.w[2] = e.w[3] = 0));
}
function V(e, t, n) {
  let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
  return r * r * (3 - 2 * r);
}
function St(e, t, n, r, i) {
  let a = 0;
  for (; a < n.length && i < n[a];) a++;
  let o = -1,
    s = 1 / 0;
  if (a - 1 >= 0) {
    let e = Math.abs(i - n[a - 1]);
    e < s && ((s = e), (o = a - 1));
  }
  if (a < n.length) {
    let e = Math.abs(i - n[a]);
    e < s && ((s = e), (o = a));
  }
  if (o < 0 || s > r) {
    B(e, t[a], t[a], 0);
    return;
  }
  let c = (n[o] + r - i) / (2 * r),
    l = c < 0 ? 0 : c > 1 ? 1 : c * c * (3 - 2 * c);
  B(e, t[o], t[o + 1], l);
}
function Ct(e, t, n) {
  if (n <= 0) return;
  for (let t = 0; t < 4; t++) e.w[t] *= 1 - n;
  for (let r = 0; r < 4; r++)
    if (e.i[r] === t && e.w[r] > 0) {
      e.w[r] += n;
      return;
    }
  let r = 0;
  for (let t = 1; t < 4; t++) e.w[t] < e.w[r] && (r = t);
  ((e.i[r] = t), (e.w[r] = n));
}
var wt = Math.PI * 2;
function Tt(e, t, n) {
  let r = e.length;
  if (n <= e[0][0]) return e[0][t];
  if (n >= e[r - 1][0]) return e[r - 1][t];
  let i = 0;
  for (; i < r - 2 && n > e[i + 1][0];) i++;
  let a = e[Math.max(0, i - 1)],
    o = e[i],
    s = e[i + 1],
    c = e[Math.min(r - 1, i + 2)],
    l = (n - o[0]) / (s[0] - o[0]),
    u = s[0] - o[0],
    d = ((s[t] - a[t]) / Math.max(1e-6, s[0] - a[0])) * u,
    f = ((c[t] - o[t]) / Math.max(1e-6, c[0] - o[0])) * u,
    p = l * l,
    m = p * l;
  return (
    (2 * m - 3 * p + 1) * o[t] +
    (m - 2 * p + l) * d +
    (-2 * m + 3 * p) * s[t] +
    (m - p) * f
  );
}
function Et(e, t, n, r, i, a = 2) {
  let o = Math.sin(e),
    s = Math.cos(e),
    c = o >= 0 ? t : n,
    l = s >= 0 ? r : i,
    u = Math.abs(o) / c,
    d = Math.abs(s) / l;
  return a === 2
    ? 1 / Math.sqrt(u * u + d * d)
    : 1 / (u ** +a + d ** +a) ** (1 / a);
}
var Dt = (e, t) => Math.exp(-(e * e) / (t * t)),
  Ot = (e, t) => {
    let n = (e - t) % wt;
    return (n > Math.PI && (n -= wt), n < -Math.PI && (n += wt), n);
  },
  kt = new D(),
  At = new D(),
  jt = new D(),
  Mt = new D(),
  Nt = new D(),
  Pt = new D(),
  Ft = new D(),
  It = new D(0, 0, -1);
function Lt(e, t, n, r, i, a) {
  (Mt.subVectors(e.b, e.a),
    Nt.subVectors(e.c, e.b),
    t <= 1
      ? n.copy(e.a).addScaledVector(Mt, t)
      : n.copy(e.b).addScaledVector(Nt, t - 1));
  let o = Pt.copy(Mt).normalize(),
    s = Ft.copy(Nt).normalize(),
    c = V(0.8, 1.2, t);
  (r
    .copy(o)
    .multiplyScalar(1 - c)
    .addScaledVector(s, c)
    .normalize(),
    i.copy(It).addScaledVector(r, -It.dot(r)).normalize(),
    a.crossVectors(r, i).normalize());
}
function Rt(e, t, n, r = 0) {
  return Et(
    t,
    Tt(e.keys, 1, n) + r,
    Tt(e.keys, 2, n) + r,
    Tt(e.keys, 3, n) + r,
    Tt(e.keys, 4, n) + r,
  );
}
function zt(e, t, n, r, i) {
  Lt(e, n, i, kt, At, jt);
  let a = Rt(e, t, n, r);
  return (
    i.addScaledVector(jt, Math.sin(t) * a).addScaledVector(At, Math.cos(t) * a),
    i
  );
}
function Bt(e) {
  let t = e.sex === `f`,
    n = e.height,
    r = n / 1.72,
    i = e.build === `slim` ? 0 : e.build === `avg` ? 1 : 2,
    a = e.age === `elder`,
    o = e.age === `student`,
    s = e.stoop ?? (a ? 0.45 : 0),
    c = Math.max(0, i - 1),
    l = Math.max(0, 1 - i),
    u = 1 + 0.16 * c - 0.07 * l - (o ? 0.04 : 0),
    d =
      (t ? 0.88 : 1) *
      (1 + 0.05 * c - 0.03 * l) *
      (o ? 0.95 : 1) *
      (a ? 0.96 : 1),
    f = (t ? 1.07 : 1) * (1 + 0.1 * c - 0.04 * l),
    p = (t ? 0.86 : 1) * (1 + 0.3 * c - 0.06 * l) * (a ? 1.1 : 1),
    m = (0.045 * c + (a && !t ? 0.03 : 0) + (a && t ? 0.02 : 0)) * r,
    h = t ? (o ? 0.022 : a ? 0.026 : 0.032) * r * (1 + 0.3 * c) : 0,
    g = t ? 0 : (0.01 + 0.004 * c) * r,
    _ = (t ? 0.03 : 0.02) * r * (1 + 0.3 * c),
    v = [];
  for (let e = 0; e < 27; e++) v.push(new D());
  let y = n / (o ? 7 : a ? 7.15 : t ? 7.25 : 7.4),
    b = 0.185 * r * d,
    x = (t ? 0.093 : 0.09) * r * (1 + 0.08 * c),
    S = -0.05 * s * r;
  (v[L.hips].set(0, 0.555 * n, 0),
    v[L.spine].set(0, 0.625 * n, 0),
    v[L.chest].set(0, 0.73 * n, S * 0.3),
    v[L.neck].set(0, 0.848 * n, 0.012 * r + S),
    v[L.head].set(0, n - y * 0.93, -0.004 * r + S * 1.4),
    v[L.shoulderL].set(-0.03 * r, 0.83 * n, -0.02 * r + S * 0.6),
    v[L.shoulderR].set(0.03 * r, 0.83 * n, -0.02 * r + S * 0.6));
  let C = 0.792 * n,
    w = 0.643 * n,
    T = 0.5 * n;
  for (let e of [-1, 1]) {
    let i = e < 0 ? L.armL : L.armR,
      a = e < 0 ? L.foreL : L.foreR,
      o = e < 0 ? L.handL : L.handR;
    (v[i].set(e * b, C, S * 0.6),
      v[a].set(e * (b + 0.024 * r + 0.01 * c * r), w, 0.012 * r + S * 0.4),
      v[o].set(e * (b + 0.04 * r + 0.018 * c * r), T, -0.012 * r),
      v[e < 0 ? L.fingersL : L.fingersR]
        .copy(v[o])
        .add(new D(e * 0.004 * r, -0.098 * r * (t ? 0.93 : 1), -0.004 * r)));
    let s = e < 0 ? L.thighL : L.thighR,
      l = e < 0 ? L.shinL : L.shinR,
      u = e < 0 ? L.footL : L.footR;
    (v[s].set(e * x, 0.53 * n, 0),
      v[l].set(e * x * 0.97, 0.287 * n, -0.006 * r),
      v[u].set(e * x * 0.95, 0.05 * n, 0.012 * r));
  }
  let E = new D(0, n - y * 0.455, -0.008 * r + S * 1.5),
    O = y * (t ? 0.315 : 0.325) * (1 + 0.03 * c),
    k = new D(O, y * 0.455, y * 0.39);
  (v[L.hair].set(0, E.y + k.y * 0.2, E.z + k.z * 0.9),
    v[L.jaw].set(0, E.y - k.y * 0.25, E.z + k.z * 0.1),
    v[L.lidL].set(-O * 0.4, E.y - y * 0.05, E.z - k.z * 0.9),
    v[L.lidR].set(O * 0.4, E.y - y * 0.05, E.z - k.z * 0.9),
    v[L.eyeL].set(-O * 0.4, E.y - y * 0.06, E.z - k.z * 0.75),
    v[L.eyeR].set(O * 0.4, E.y - y * 0.06, E.z - k.z * 0.75));
  let A = (e) => e * n,
    j = (e) => e * r,
    ee = [
      [A(0.468), j(0.022) * f, j(0.018) * u, j(0.028) * u, j(0.01)],
      [A(0.492), j(0.082) * f, j(0.042) * u, j(0.078) * u, j(0.008)],
      [A(0.515), j(0.152) * f, j(0.062) * u, j(0.1) * u, j(0.005)],
      [A(0.54), j(0.166) * f, j(0.072) * u, j(0.103) * u, j(0.002)],
      [A(0.56), j(0.163) * f, j(0.09) * u, j(0.093) * u, 0],
      [
        A(0.6),
        j(0.15) * (f * 0.5 + p * 0.5),
        j(0.092) * u,
        j(0.083) * u,
        j(-0.003),
      ],
      [A(0.625), j(0.143) * p, j(0.094) * u, j(0.08) * u, j(-0.004)],
      [
        A(0.665),
        j(0.148) * (p * 0.4 + d * 0.6),
        j(0.1) * u,
        j(0.085) * u,
        j(-0.004),
      ],
      [
        A(0.72),
        j(0.16) * d * u,
        j(0.108) * u,
        j(0.093) * u,
        j(-0.008) + S * 0.4,
      ],
      [A(0.77), j(0.168) * d * u, j(0.102) * u, j(0.1) * u, j(-0.01) + S * 0.6],
      [A(0.8), j(0.17) * d * u, j(0.09) * u, j(0.1) * u, j(-0.006) + S * 0.8],
      [A(0.818), j(0.162) * d, j(0.076) * u, j(0.09) * u, j(0) + S * 0.9],
      [A(0.836), j(0.132) * d, j(0.061), j(0.075), j(0.006) + S],
      [A(0.848), j(0.095), j(0.052), j(0.06), j(0.011) + S],
      [A(0.855), j(0.064), j(0.047), j(0.052), j(0.014) + S],
    ];
  if (t) for (let e of ee) e[0] > A(0.64) && e[0] < A(0.82) && (e[2] *= 0.95);
  let M =
      (1 + 0.14 * c - 0.08 * l) *
      (t ? 0.86 : 1) *
      (o ? 0.92 : 1) *
      (a ? 0.94 : 1),
    N = (e) => e * r * M,
    te = [];
  for (let e of [-1, 1]) {
    let t = e < 0 ? L.armL : L.armR,
      n = e < 0 ? L.foreL : L.foreR,
      r = e < 0 ? L.handL : L.handR,
      i = (t, n) => (e > 0 ? [t, n] : [n, t]),
      a = (e, t, n, r, a) => [e, ...i(N(t), N(n)), N(r), N(a)];
    te.push({
      side: e,
      a: v[t].clone(),
      b: v[n].clone(),
      c: v[r].clone(),
      tMin: -0.2,
      keys: [
        a(-0.2, 0.03, 0.03, 0.035, 0.035),
        a(-0.1, 0.04, 0.032, 0.044, 0.045),
        a(0.02, 0.046, 0.037, 0.048, 0.05),
        a(0.25, 0.048, 0.04, 0.046, 0.05),
        a(0.55, 0.04, 0.039, 0.046, 0.043),
        a(0.85, 0.036, 0.035, 0.036, 0.038),
        a(1, 0.035, 0.034, 0.034, 0.038),
        a(1.18, 0.039, 0.037, 0.038, 0.036),
        a(1.5, 0.032, 0.031, 0.031, 0.029),
        a(1.85, 0.021, 0.021, 0.028, 0.027),
        a(2, 0.019, 0.019, 0.027, 0.026),
      ],
      bones: [e < 0 ? L.shoulderL : L.shoulderR, t, n, r],
    });
  }
  let ne =
      (1 + 0.15 * c - 0.08 * l) *
      (t ? 0.97 : 1) *
      (o ? 0.93 : 1) *
      (a ? 0.92 : 1),
    re = (e) => e * r * ne,
    ie = [];
  for (let e of [-1, 1]) {
    let n = e < 0 ? L.thighL : L.thighR,
      r = e < 0 ? L.shinL : L.shinR,
      i = e < 0 ? L.footL : L.footR,
      a = (t, n) => (e > 0 ? [t, n] : [n, t]),
      o = (e, t, n, r, i) => [e, ...a(re(t), re(n)), re(r), re(i)],
      s = t ? 1.06 : 1;
    ie.push({
      side: e,
      a: v[n].clone(),
      b: v[r].clone(),
      c: v[i].clone(),
      tMin: -0.16,
      keys: [
        o(-0.16, 0.078 * s, 0.05, 0.082, 0.088),
        o(0, 0.086 * s, 0.058, 0.084, 0.088 * s),
        o(0.15, 0.083 * s, 0.064 * s, 0.08, 0.082),
        o(0.45, 0.07, 0.064, 0.07, 0.068),
        o(0.78, 0.054, 0.053, 0.058, 0.052),
        o(0.98, 0.048, 0.047, 0.056, 0.046),
        o(1.12, 0.047, 0.045, 0.048, 0.05),
        o(1.3, 0.05, 0.047, 0.044, 0.064),
        o(1.55, 0.042, 0.039, 0.036, 0.048),
        o(1.8, 0.031, 0.03, 0.03, 0.033),
        o(2, 0.03, 0.028, 0.03, 0.032),
      ],
      bones: [L.hips, n, r, i],
    });
  }
  let ae = (t ? 0.047 : 0.056) * r * (1 + 0.1 * c),
    oe = new D(0, 0.815 * n, 0.012 * r + S * 0.9),
    se = new D(0, E.y - k.y * 0.35, E.z + k.z * 0.28);
  return {
    H: n,
    s: r,
    female: t,
    mass: i,
    elder: a,
    student: o,
    stoop: s,
    joints: { p: v, height: n, headC: E, headR: k },
    torsoKeys: ee,
    torsoBottom: ee[0][0],
    torsoTop: ee[ee.length - 1][0],
    bust: h,
    belly: m,
    glutes: _,
    pecs: g,
    arms: [te[0], te[1]],
    legs: [ie[0], ie[1]],
    neckBase: oe,
    neckTop: se,
    neckR: ae,
    headC: E,
    headR: k,
    headH: y,
    handLen: 0.19 * r * (t ? 0.92 : 1),
    handW: 0.085 * r * (t ? 0.9 : 1) * (1 + 0.05 * c),
    footLen: 0.255 * r * (t ? 0.92 : 1),
    footW: 0.095 * r * (t ? 0.92 : 1),
  };
}
function H(e, t) {
  return Tt(e.torsoKeys, 4, t);
}
function Vt(e, t, n, r = !1) {
  let i = e.torsoKeys,
    a = Tt(i, 1, n),
    o = Et(
      t,
      a,
      a,
      Tt(i, 2, n),
      Tt(i, 3, n),
      2 + 0.45 * V(e.H * 0.5, e.H * 0.6, n) * (1 - V(e.H * 0.8, e.H * 0.84, n)),
    ),
    s = e.H,
    c = Math.cos(t);
  if (e.bust > 0 || e.pecs > 0) {
    let i = n - s * (e.female ? 0.735 : 0.76),
      a = i > 0 ? Dt(i, s * 0.045) : Dt(i, s * (e.female ? 0.022 : 0.03)),
      c = e.female ? 0.44 : 0.5,
      l = Dt(Ot(t, c), 0.34) + Dt(Ot(t, -c), 0.34);
    (r && Math.abs(Ot(t, 0)) < c && (l = Math.max(l, Dt(0, 1) * 0.98)),
      (o += (e.bust + e.pecs) * a * l));
  }
  if (e.belly > 0) {
    let t = Dt(n - s * 0.6, s * 0.06);
    o += e.belly * t * Math.max(0, c) ** 1.5;
  }
  {
    let r = n - s * 0.49,
      i = r > 0 ? Dt(r, s * 0.035) : Dt(r, s * 0.02),
      a = Dt(Ot(t, Math.PI - 0.5), 0.45) + Dt(Ot(t, Math.PI + 0.5), 0.45);
    o += e.glutes * i * a;
  }
  r ||
    (o -= 0.005 * e.s * Dt(Ot(t, Math.PI), 0.12) * Dt(n - s * 0.68, s * 0.1));
  {
    let r = Dt(n - s * 0.775, s * 0.04),
      i = Dt(Ot(t, Math.PI - 0.55), 0.3) + Dt(Ot(t, Math.PI + 0.55), 0.3);
    o += 0.008 * e.s * r * i;
  }
  if (r && n < s * 0.61) {
    let r = Ht(e, t, n) + 0.006 * e.s;
    o += Math.max(0, r - o) * V(s * 0.61, s * 0.545, n);
  }
  return o;
}
function Ht(e, t, n) {
  let r = Math.sin(t),
    i = -Math.cos(t),
    a = H(e, n),
    o = 0;
  for (let t of e.legs) {
    let e = t.a.y - t.b.y,
      s = (t.a.y - n) / e;
    if (s < -0.2 || s > 1.1) continue;
    let c = Tt(t.keys, t.side > 0 ? 1 : 2, s),
      l = Tt(t.keys, 3, s),
      u = Tt(t.keys, 4, s),
      d =
        Math.abs(r) * c +
        Math.max(0, -i) * l * 0 +
        (i < 0 ? l : u) * Math.abs(i),
      f = Math.max(0.01, d / Math.max(0.7, Math.abs(r) + Math.abs(i))),
      p = t.a.x + (t.b.x - t.a.x) * Math.max(0, s),
      m = t.a.z + (t.b.z - t.a.z) * Math.max(0, s) - a,
      h = p * r + m * i,
      g = p - h * r,
      _ = m - h * i,
      v = f * f - (g * g + _ * _);
    v <= 0 || (o = Math.max(o, h + Math.sqrt(v)));
  }
  return o;
}
function Ut(e, t, n, r) {
  let i = e.joints.p,
    a = (i[L.hips].y + i[L.spine].y) * 0.5 + 0.02 * e.s,
    o = (i[L.spine].y + i[L.chest].y) * 0.5,
    s = e.neckBase.y + 0.02 * e.s;
  St(r, [L.neck, L.chest, L.spine, L.hips], [s, o, a], 0.06 * e.s, n);
  let c = Math.sin(t),
    l = V(0.3, 0.95, Math.abs(c)) * V(e.H * 0.72, e.H * 0.81, n);
  l > 0 && Ct(r, c > 0 ? L.shoulderR : L.shoulderL, l * 0.55);
  let u = V(e.H * 0.54, e.H * 0.47, n) * (0.25 + 0.2 * Math.abs(Math.cos(t)));
  u > 0 &&
    Ct(r, c > 0 ? L.thighR : L.thighL, u * V(0.05, 0.4, Math.abs(c) + 0.2));
}
function Wt(e, t, n) {
  let [r, i, a, o] = e.bones;
  t < 0.4
    ? B(n, r, i, V(-0.2, 0.12, t))
    : t < 1.6
      ? B(n, i, a, V(0.88, 1.12, t))
      : B(n, a, o, V(1.9, 2.05, t));
}
var Gt = Math.PI * 2,
  U = (e, t) => Math.exp(-(e * e) / (t * t)),
  Kt = (e, t, n) => e + (t - e) * n,
  qt = (e, t, n) => (e < t ? t : e > n ? n : e);
function Jt(e, t) {
  let n = Math.max(0, 1 - t * t);
  return e.eyeD - e.eyeH * n ** 0.62 * (1 - 0.14 * t) - e.tilt * t;
}
function Yt(e, t) {
  let n = Math.max(0, 1 - t * t);
  return e.eyeD + e.eyeH * 0.62 * n ** 0.9 * (1 + 0.12 * t) - e.tilt * t;
}
function Xt(e, t) {
  return e.mouthD - e.smile * 0.011 * t * t + 0.0015 * U(t, 0.35);
}
function Zt(e, t) {
  let n = Math.min(1, Math.abs(t));
  return (
    e.full *
    (0.02 * (1 - n * n) ** 0.55 +
      0.0042 * U(n - 0.3, 0.16) -
      0.0034 * U(t, 0.09)) *
    (1 - V(0.92, 1, n) * 0)
  );
}
function Qt(e, t) {
  let n = Math.min(1, Math.abs(t));
  return e.full * 0.029 * (1 - n * n) ** 0.62;
}
function $t(e, t) {
  let n = e.face,
    r = t.female,
    i = t.headH * (0.975 + 0.05 * n.length),
    a = n.jaw,
    o = +!!t.student,
    s = i / 0.23,
    c = !r,
    l = (r ? 0.86 : 0.93) + 0.16 * a,
    u = 0.37 + 0.012 * a,
    d = [
      [0, 0, 0, 0, 0],
      [0.02, 0.13, 0.12, 0.15, 0.006],
      [0.06, 0.225, 0.212, 0.27, 0.006],
      [0.13, 0.292, 0.296, 0.36, 0.005],
      [0.22, 0.322, 0.345, 0.41, 0.003],
      [0.31, 0.333, 0.377, 0.43, 0.001],
      [0.4, 0.33, 0.399, 0.425, 0],
      [0.47, 0.327, 0.406, 0.4, 0],
      [0.53, 0.33, 0.399, 0.372, 0],
      [0.6, 0.326 + 0.012 * (n.cheek - 0.5), 0.396, 0.325, 0],
      [0.67, 0.312 - 0.008 * (1 - a), 0.4, 0.255, 0],
      [0.75, 0.286 * Kt(1, l, 0.5), 0.404, 0.17, 0.002],
      [0.83, 0.25 * l, 0.396, 0.1, 0.006],
      [0.9, 0.206 * l, u + 0.008, 0.055, 0.013],
      [0.95, 0.156 * Kt(0.92, 1.12, a), u - 0.012, 0.035, 0.019],
      [0.985, 0.092 * Kt(0.92, 1.15, a), u - 0.058, 0.025, 0.025],
      [1, 0.035, u - 0.12, 0.018, 0.03],
    ],
    f = +!!r + 0.5 * o,
    p = d.map((e) => {
      let n = V(0.55, 0.95, e[0]),
        r = 1 - f * (0.045 * n + 0.06 * V(0.82, 0.97, e[0]));
      return [
        e[0],
        e[1] * i * (1 + 0.02 * (t.mass - 1)) * r,
        e[2] * i,
        e[3] * i,
        e[4] * i,
      ];
    });
  if (t.mass > 1)
    for (let e of p)
      e[0] > 0.6 && (e[1] *= 1 + 0.06 * (t.mass - 1) * V(0.6, 0.9, e[0]));
  let m = n.eyeSize,
    h = 0.7 + 0.6 * n.lips,
    g = {
      eyeT: 0.355 * n.eyeGap,
      eyeD: 0.52 + 0.01 * (n.length - 0.5),
      eyeW: 0.158 * m * (r ? 1.04 : 1),
      eyeH:
        0.0235 *
        m *
        (0.82 + 0.34 * n.lid) *
        (t.elder ? 0.85 : 1) *
        (r ? 1.06 : 1),
      tilt: n.eyeTilt * 0.05,
      irisR: 0.0058 * s * (0.95 + 0.1 * m),
      irisDrop: 0.004,
      browD: 0.448 - 0.012 * n.browArch,
      browIn: 0.1,
      browOut: 0.56,
      noseTipD: 0.665 + 0.03 * n.noseL,
      noseBaseD: 0.695 + 0.025 * n.noseL,
      noseW: 0.135 * (0.85 + 0.35 * n.noseW),
      mouthD: 0.782 + 0.012 * n.noseL,
      mouthW: 0.232 * n.mouthW * (r ? 0.96 : 1),
      chinD: 0.975,
      Theta: 1.15,
      d0: 0.1,
      d1: 1.06,
      mPerRad: 0.4 * i,
      mPerD: i,
      full: h,
      smile: n.smile,
    },
    _ = 1 - qt((n.lid - 0.2) / 0.5, 0, 1),
    v = {
      crownY: t.H,
      cz: t.headC.z,
      hh: i,
      s,
      keys: p,
      nF: 2.25,
      lay: g,
      face: n,
      female: r,
      male: c,
      elder: t.elder,
      sock: 0.0034 * s,
      browRidge:
        (r ? 0.0012 : 0.0026) * s * (t.elder ? 1.25 : 1) * (o ? 0.7 : 1),
      frontal: (8e-4 + 8e-4 * o + (r ? 6e-4 : 0)) * s,
      temple: 0.0026 * s * (t.mass > 1.5 ? 0.4 : 1),
      cheekBone: (0.0028 + 0.0036 * n.cheek) * s,
      cheekFat:
        (0.0015 +
          0.003 * o +
          (r ? 0.0012 : 0) +
          0.0022 * Math.max(0, t.mass - 1)) *
        s,
      buccal:
        (t.mass > 1.4 || o
          ? 3e-4
          : 0.0014 + (t.elder ? 0.001 : 0) + (t.mass < 0.5 ? 6e-4 : 0)) * s,
      muzzle: 0.0036 * s,
      naso:
        (35e-5 +
          0.0012 * n.wrinkles +
          (t.elder ? 6e-4 : 0) +
          4e-4 * Math.max(0, n.smile)) *
        s,
      lipUp: (0.0014 + 0.0016 * n.lips) * s,
      lipLo: (0.0019 + 0.0022 * n.lips) * s,
      crease: 9e-4 * s,
      chin: (r ? 0.0024 : 0.0034) * s,
      chinSq: c ? 8e-4 * s * (0.5 + a) : 0,
      jawAngle: (c ? 0.0022 * (0.5 + a) : 6e-4) * s,
      lidTm: 0.00105 * s,
      lidUpMax: (0.0024 + 0.0014 * _ + (t.elder ? 8e-4 : 0)) * s,
      lidLoMax: 0.0017 * s,
      lidCrease: (1 - _) * 55e-5 * s,
      lidCreaseD: 0.009 + 0.008 * n.lid,
      aegyo: r && !t.elder ? 6e-4 * s : 2e-4 * s,
      eyes: [
        { c: new D(), r: 0.0122 * s * (0.94 + 0.06 * m), side: -1 },
        { c: new D(), r: 0.0122 * s * (0.94 + 0.06 * m), side: 1 },
      ],
    };
  for (let e of v.eyes) {
    let t = e.side * g.eyeT,
      n = g.eyeD + 0.003,
      r = nn(v, t, n) - 0.0011 * s,
      a = v.crownY - n * i;
    e.c.set(Math.sin(t) * r, a, on(v, n) - Math.cos(t) * r + e.r);
  }
  return v;
}
function en(e, t, n) {
  let r = e.length;
  if (n <= e[0][0]) return e[0][t];
  if (n >= e[r - 1][0]) return e[r - 1][t];
  let i = 0;
  for (; i < r - 2 && n > e[i + 1][0];) i++;
  let a = e[Math.max(0, i - 1)],
    o = e[i],
    s = e[i + 1],
    c = e[Math.min(r - 1, i + 2)],
    l = (n - o[0]) / (s[0] - o[0]),
    u = s[0] - o[0],
    d = ((s[t] - a[t]) / Math.max(1e-6, s[0] - a[0])) * u,
    f = ((c[t] - o[t]) / Math.max(1e-6, c[0] - o[0])) * u,
    p = l * l,
    m = p * l;
  return (
    (2 * m - 3 * p + 1) * o[t] +
    (m - 2 * p + l) * d +
    (-2 * m + 3 * p) * s[t] +
    (m - p) * f
  );
}
var tn = (e, t) => {
  let n = (e - t) % Gt;
  return (n > Math.PI && (n -= Gt), n < -Math.PI && (n += Gt), n);
};
function nn(e, t, n) {
  let r = e.keys,
    i = en(r, 1, n),
    a = en(r, 2, n),
    o = en(r, 3, n),
    s = Math.sin(t),
    c = Math.cos(t),
    l = c >= 0 ? a : o;
  if (i < 1e-5 || l < 1e-5) return 0;
  let u = c >= 0 ? e.nF - 0.2 * V(0.35, 0.62, n) - 0.33 * V(0.62, 0.9, n) : 2,
    d = Math.abs(s) / i,
    f = Math.abs(c) / l;
  return 1 / (d ** +u + f ** +u) ** (1 / u);
}
function rn(e, t, n) {
  let r = e.lay,
    i = t / r.mouthW,
    a = Math.abs(i);
  if (a > 1.8) return 0;
  let o = Xt(r, Math.min(1.2, a)),
    s = n - o,
    c = 1 - V(0.8, 1.22, a),
    l = 0;
  if (s < 0) {
    let t = Math.max(0.004, Zt(r, i)),
      n = -s / t,
      a;
    ((a =
      n <= 1
        ? 0.32 +
          0.68 *
            Math.sin(Math.min(1, n / 0.78) * Math.PI * 0.5) ** 0.8 *
            (n > 0.78 ? 1 - (0.1 * (n - 0.78)) / 0.22 : 1)
        : 0.9 * (1 - V(1, 2.3, n)) - 0.18 * U(n - 1.9, 0.5)),
      (l += e.lipUp * a * c));
  } else {
    let t = s / Math.max(0.005, Qt(r, i)),
      n;
    ((n =
      t <= 1
        ? 0.3 +
          0.7 *
            Math.sin(Math.min(1, t / 0.5) * Math.PI * 0.5) *
            (t > 0.5 ? 1 - 0.42 * V(0.5, 1, t) : 1)
        : 0.58 * (1 - V(1, 1.75, t)) - 0.55 * U(t - 2, 0.55)),
      (l += e.lipLo * n * c));
  }
  ((l -= e.crease * U(s, 0.0022) * (1 - V(0.75, 1.1, a))),
    (l -= 0.0011 * e.s * U(a - 1.02, 0.14) * U(s, 0.012)));
  let u = r.noseBaseD + 0.006,
    d = o - Zt(r, i);
  if (n > u - 0.01 && n < d + 0.004) {
    let r = V(u - 0.01, u + 0.012, n) * (1 - V(d - 0.002, d + 0.004, n));
    l +=
      r * e.s * (-55e-5 * U(t, 0.024) + 35e-5 * U(Math.abs(t) - 0.052, 0.02));
  }
  return l;
}
function an(e, t, n) {
  let r = nn(e, t, n);
  if (Math.cos(t) <= 0) return r;
  let i = e.lay,
    a = e.s,
    o = tn(t, 0),
    s = Math.abs(o),
    c = i.mPerRad;
  {
    let t = ((s - i.eyeT) * c) / (i.eyeW * c * 1.45),
      o =
        ((n - (i.eyeD - 0.004)) * e.hh) / (n < i.eyeD ? 0.017 * a : 0.013 * a);
    r -= e.sock * Math.exp(-(t * t + o * o));
  }
  if (
    ((r +=
      e.browRidge *
      U(s - (i.eyeT - 0.03), 0.27) *
      U(n - (i.browD + 0.012), 0.032)),
    (r += e.browRidge * 0.6 * U(o, 0.1) * U(n - 0.462, 0.03)),
    (r += e.frontal * U(s - 0.34, 0.24) * U(n - 0.27, 0.08)),
    (r -= e.temple * U(s - 1.18, 0.22) * U(n - 0.38, 0.09)),
    (r += e.cheekBone * U(s - 0.74, 0.22) * U(n - 0.6, 0.05)),
    (r += e.cheekBone * 0.35 * U(s - 1.15, 0.2) * U(n - 0.58, 0.035)),
    (r -= e.buccal * U(s - 0.9, 0.22) * U(n - 0.765, 0.07)),
    (r += e.cheekFat * U(s - 0.55, 0.28) * U(n - 0.72, 0.075)),
    (r += e.muzzle * U(o, 0.42) * U(n - 0.785, 0.075)),
    s < 0.6 && n > 0.62 && n < 0.9)
  ) {
    let t = i.noseW * 1.18 * c,
      o = (i.noseBaseD - 0.012) * e.hh,
      l = i.mouthW * 1.32 * c,
      u = (i.mouthD + 0.04) * e.hh,
      d = s * c,
      f = n * e.hh,
      p = l - t,
      m = u - o,
      h = qt(((d - t) * p + (f - o) * m) / (p * p + m * m), 0, 1),
      g = t + p * h,
      _ = o + m * h,
      v = (d - g) * m - (f - _) * p > 0 ? 1 : -1,
      y = Math.hypot(d - g, f - _),
      b = V(-0.05, 0.1, h) * (1 - V(0.85, 1.15, h));
    ((r -= e.naso * U(y, 0.0022 * a) * b),
      v > 0 && (r += e.naso * 0.9 * U(y - 0.0042 * a, 0.0038 * a) * b));
  }
  return (
    (r += rn(e, o, n)),
    (r += e.chin * U(o, 0.27) * U(n - 0.935, 0.042)),
    e.chinSq && (r += e.chinSq * U(s - 0.13, 0.085) * U(n - 0.95, 0.03)),
    (r += e.jawAngle * U(s - 1.22, 0.2) * U(n - 0.885, 0.05)),
    r
  );
}
function on(e, t) {
  return e.cz + en(e.keys, 4, t);
}
function sn(e, t) {
  let n = e.lay,
    r = tn(t, 0);
  return {
    e: r < 0 ? e.eyes[0] : e.eyes[1],
    q: (Math.abs(r) - n.eyeT) / n.eyeW,
  };
}
function cn(e, t, n) {
  let r = e.lay,
    i = qt(t, -1, 1),
    a = Jt(r, i),
    o = Yt(r, i);
  if (n <= a) {
    let r = a - n,
      o = e.lidTm + (e.lidUpMax - e.lidTm) * V(0, 0.03, r);
    return (
      (o -=
        e.lidCrease *
        U(r - e.lidCreaseD * (1 - 0.25 * i * i), 0.0045) *
        (1 - V(0.7, 1.05, Math.abs(t)))),
      o
    );
  }
  if (n >= o) {
    let r = n - o;
    return (
      e.lidTm * 0.9 +
      (e.lidLoMax - e.lidTm * 0.9) * V(0, 0.03, r) +
      e.aegyo * U(r - 0.009, 0.007) * (1 - V(0.6, 1.05, Math.abs(t)))
    );
  }
  return 0;
}
function ln(e, t, n) {
  let r = n - (e.lay.eyeD - 0.002),
    i = r < 0 ? 0.046 : 0.036;
  return 1 - V(0.78, 1.18, Math.hypot(t / (t < 0 ? 1.28 : 1.35), r / i));
}
var un = new D(),
  dn = new D();
function fn(e, t, n, r, i) {
  let a = nn(e, n, r);
  return (
    dn.set(Math.sin(n) * a, e.crownY - r * e.hh, on(e, r) - Math.cos(n) * a),
    i.subVectors(dn, t.c).normalize()
  );
}
function pn(e, t, n, r, i, a) {
  return (fn(e, t, n, r, un), a.copy(t.c).addScaledVector(un, t.r + i));
}
var mn = new D(),
  hn = new D();
function gn(e, t, n, r) {
  let i = an(e, t, n),
    a = e.crownY - n * e.hh;
  if (
    (mn.set(Math.sin(t) * i, a, on(e, n) - Math.cos(t) * i), Math.cos(t) > 0.3)
  ) {
    let { e: a, q: o } = sn(e, t),
      s = ln(e, o, n);
    if (s > 0) {
      pn(e, a, t, n, cn(e, o, n), hn);
      let c = on(e, n),
        l = Math.hypot(hn.x, hn.z - c) >= i ? s : s * V(0.55, 1, s);
      r.lerpVectors(mn, hn, l);
      let u = a.r + e.lidTm * 0.85,
        d = r.x - a.c.x,
        f = r.y - a.c.y,
        p = r.z - a.c.z,
        m = Math.hypot(d, f, p);
      return (
        m < u &&
          p < 0 &&
          r.set(a.c.x + (d / m) * u, a.c.y + (f / m) * u, a.c.z + (p / m) * u),
        r
      );
    }
  }
  return r.copy(mn);
}
function _n(e, t, n, r = !0) {
  return r ? (gn(e, t, n, vn), Math.hypot(vn.x, vn.z - on(e, n))) : nn(e, t, n);
}
var vn = new D();
function W(e, t, n, r, i, a = !0) {
  let o = e.crownY - n * e.hh;
  if (!a) {
    let a = nn(e, t, n) + r;
    return i.set(
      Math.sin(t) * a,
      o + (r > 0 && n < 0.05 ? r * (1 - n / 0.05) : 0),
      on(e, n) - Math.cos(t) * a,
    );
  }
  return (
    gn(e, t, n, i),
    r !== 0 && ((i.x += Math.sin(t) * r), (i.z -= Math.cos(t) * r)),
    i
  );
}
function yn(e, t, n, r) {
  ((r[0] = 0.5 + tn(t, 0) / (2 * e.Theta)),
    (r[1] = 1 - (n - e.d0) / (e.d1 - e.d0)));
}
var bn = new D(),
  xn = new D(),
  Sn = new D(),
  Cn = new D();
function wn(e, t, n, r, i = 0) {
  let a = 0.004,
    o = 0.0035;
  (W(e, t - a, n, 0, bn), W(e, t + a, n, 0, xn), xn.sub(bn));
  let s = i > 0 ? n : Math.max(0, n - o),
    c = i < 0 ? n : Math.min(1, n + o);
  (W(e, t, s, 0, Cn),
    W(e, t, c, 0, Sn),
    Sn.sub(Cn),
    r.crossVectors(Sn, xn).normalize(),
    W(e, t, n, 0, bn));
  let l = bn.x,
    u = bn.z - on(e, n);
  return (r.x * l + r.z * u < 0 && l * l + u * u > 1e-8 && r.negate(), r);
}
function Tn(e) {
  let t = [];
  if (e === 0) {
    for (let e = 0; e < 3; e++) t.push(-Math.PI + (e / 3) * (Math.PI - 1.2));
    for (let e = -1.2; e < 1.199999; e += 0.1715) t.push(e);
    for (let e = 0; e <= 3; e++) t.push(1.2 + (e / 3) * (Math.PI - 1.2));
  } else {
    for (let e = 0; e < 2; e++) t.push(-Math.PI + (e / 2) * (Math.PI - 1));
    for (let e = -1; e < 1 - 1e-6; e += 0.4) t.push(e);
    for (let e = 0; e <= 2; e++) t.push(1 + (e / 2) * (Math.PI - 1));
  }
  return t;
}
function En(e) {
  return e === 0
    ? [
        0, 0.06, 0.17, 0.3, 0.41, 0.48, 0.525, 0.57, 0.62, 0.67, 0.72, 0.765,
        0.8, 0.845, 0.9, 0.955, 1,
      ]
    : [0, 0.12, 0.3, 0.46, 0.6, 0.72, 0.84, 0.94, 1];
}
var Dn = 6,
  On = 7,
  kn = 9,
  An = 10,
  jn = 11,
  Mn = 12,
  Nn = 16,
  Pn = 17,
  Fn = 18,
  In = 19,
  Ln = 20,
  Rn = 22,
  zn = [
    0, 0.08, 0.17, 0.26, 0.34, 0.4, 0.445, 0.475, 0.495, 0.505, 0.51, 0.515,
    0.525, 0.555, 0.6, 0.645, 0.705, 0.74, 0.76, 0.78, 0.78, 0.795, 0.815, 0.85,
    0.9, 0.945, 0.978, 1,
  ],
  Bn = [0, 1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 22, 23, 24, 25, 26, 27],
  Vn = [0, 2, 4, 6, 13, 15, 17, 23, 25, 27],
  Hn = 1.95;
function Un(e, t) {
  let n = e.lay,
    r = Math.abs(t),
    i = zn.slice();
  i[Nn] = n.noseBaseD + 0.006;
  let a = (r - n.eyeT) / n.eyeW,
    o = Math.abs(a),
    s = o <= 1 ? 1 : 1 - V(1, a > 0 ? 2.7 : 2.25, o);
  if (s > 0) {
    let t = qt(a, -1, 1),
      r = Jt(n, t),
      o = Yt(n, t),
      c = [
        Math.max(r - (0.029 + 0.008 * e.face.lid), i[Dn] + 0.006),
        r - 0.012,
        r - 0.0035,
        r,
        o,
        o + 0.0035,
        o + 0.026,
      ];
    for (let e = 0; e < 7; e++) i[On + e] = Kt(i[On + e], c[e], s);
  }
  let c = t / n.mouthW,
    l = Math.abs(c),
    u = l <= 1 ? 1 : 1 - V(1, 1.75, l);
  if (u > 0) {
    let e = qt(c, -1, 1),
      t = Xt(n, e),
      r = Zt(n, e),
      a = Qt(n, e),
      o = [0, t - r, t, t, t + a * 0.5, t + a, t + a + 0.032];
    o[0] = Kt(i[Nn], o[1], 0.5);
    for (let e = 0; e < 7; e++) i[Pn + e] = Kt(i[Pn + e], o[e], u);
    i[Pn] = Math.max(i[Pn], i[Nn] + 0.008);
  }
  for (let e = 1; e < i.length; e++) i[e] < i[e - 1] && (i[e] = i[e - 1]);
  return i;
}
function Wn(e) {
  let t = e.lay,
    n = t.eyeT - t.eyeW,
    r = t.eyeT + t.eyeW,
    i = [n * 0.36, n * 0.7];
  for (let e of [-1, -0.5, 0.05, 0.55, 1]) i.push(t.eyeT + e * t.eyeW);
  for (let e = 1; e <= 6; e++) i.push(r + (Hn - r) * (e / 6) ** 0.92);
  let a = [...i.map((e) => -e).reverse(), 0, ...i];
  return {
    th: a,
    eyeCol: a.map((e) => {
      let n = (Math.abs(e) - t.eyeT) / t.eyeW;
      return n >= -1.0001 && n <= 1.0001;
    }),
  };
}
var Gn = new D(),
  G = new D(),
  Kn = new u();
function qn(e, t, n, r, i = !1, a = !1) {
  let o = e.lay,
    s = Math.max(0, Math.cos(t)),
    c = Math.abs(t) / o.mouthW,
    l = Xt(o, Math.min(1, c)),
    u = V(l - 0.004, l + 0.05, n) * V(0.1, 0.5, s) * (1 - V(0.985, 1, n) * 0.3);
  (i && (u = Math.max(u, 1 - V(0.9, 1.4, c))),
    a && (u = 0),
    B(r, L.head, L.jaw, u));
}
function Jn(e, t, n, r, i) {
  i.setHex(t);
  let a = Math.abs(tn(n, 0)),
    o =
      U(a - 0.6, 0.3) * U(r - 0.66, 0.08) * 0.1 +
      U(a, 0.12) * U(r - 0.66, 0.05) * 0.08 +
      U(a, 0.25) * U(r - 0.93, 0.04) * 0.04;
  ((i.r += o * 0.32), (i.g -= o * 0.1), (i.b -= o * 0.08));
  let s = V(0.93, 1, r) * (1 - Math.cos(n) * 0.3) * 0.16;
  if (e) {
    let t = e.lay;
    ((s += 0.16 * U(a - (t.eyeT - t.eyeW * 0.95), 0.06) * U(r - t.eyeD, 0.03)),
      (s += 0.08 * U(a - t.eyeT, 0.2) * U(r - (Jt(t, 0) - 0.03), 0.014)),
      (s += 0.1 * U(a, 0.09) * U(r - (t.noseBaseD + 0.01), 0.012)));
    let n = a / t.mouthW;
    if (
      ((s += 0.14 * U(n - 1.03, 0.14) * U(r - Xt(t, 1), 0.012)),
      (s += 0.08 * U(a, 0.25) * U(r - (t.mouthD + 0.065), 0.014)),
      (s += 0.06 * U(a - 1.55, 0.18) * U(r - 0.58, 0.1)),
      e.male && !e.elder)
    ) {
      let e =
        V(0.7, 0.8, r) * U(a, 1) * (1 - U(n, 0.9) * U(r - t.mouthD, 0.03));
      ((i.r -= 0.03 * e), (i.g -= 0.015 * e));
    }
  }
  return (i.multiplyScalar(1 - Math.min(0.45, s)), i);
}
function Yn(e, t, n) {
  let r = e.lay,
    i = Math.abs(t),
    a = 0.54;
  ((a -= 0.1 * U(i, 0.45) * U(n - 0.33, 0.12)),
    (a -= 0.12 * U(i, 0.12) * U(n - 0.62, 0.08)),
    (a -= 0.05 * U(i, 0.3) * U(n - 0.94, 0.04)));
  let o = i / r.mouthW,
    s = Xt(r, Math.min(1, o));
  return (
    (1 - V(0.85, 1.1, o)) *
      (n > s - Zt(r, o) - 0.003 && n < s + Qt(r, o) + 0.003) &&
      (a = e.face.lipColor ? 0.24 : 0.36),
    a
  );
}
function Xn(e) {
  if (e.lod === 0) {
    let t = Qn(e);
    for (; !t.next().done;);
  } else ar(e);
}
function* Zn(e) {
  e.lod === 0 ? yield* Qn(e) : ar(e);
}
function* Qn(e) {
  let { m: t, h: n, faceRect: r, cover: i } = e,
    a = n.lay,
    { th: o, eyeCol: s } = Wn(n),
    c = o.length - 1,
    l = o.map((e) => Un(n, e)),
    u = zn.length - 1,
    d = (e) => (e < 0 ? n.eyes[0] : n.eyes[1]),
    f = [];
  for (let e = 0; e <= c; e++) {
    let t = o[e],
      r = [];
    for (let i = 0; i <= u; i++) {
      let a = l[e][i],
        o = new D();
      if (s[e] && i >= kn && i <= Mn) {
        let e =
          i === An || i === jn
            ? 35e-5 * n.s
            : i === kn
              ? n.lidTm
              : n.lidTm * 0.9;
        pn(n, d(t), t, a, e, o);
      } else gn(n, t, a, o);
      r.push(o);
    }
    f.push(r);
  }
  let p = o.findIndex((e) => e > a.eyeT + a.eyeW + 0.1),
    m = c - p,
    h = zn.map((e, t) => t),
    g = (e) => (e < 0.52 || e > a.noseBaseD - 0.012 ? -1 : 0.09),
    _ = (c, u, d, p) => {
      let m = [];
      for (let e = c; e <= u; e++) m.push(e);
      let h = m.map((e) => d.map((t) => f[e][t].clone()));
      for (let [e, t] of p) {
        let n = m.indexOf(e);
        if (!(n < 0))
          for (let r = 0; r < d.length; r++) {
            if (t.includes(d[r])) continue;
            let i = r,
              a = r;
            for (; i > 0 && !t.includes(d[i]);) i--;
            for (; a < d.length - 1 && !t.includes(d[a]);) a++;
            let o = l[e][d[i]],
              s = l[e][d[a]],
              c = (l[e][d[r]] - o) / Math.max(1e-6, s - o);
            h[n][r].lerpVectors(h[n][i], h[n][a], c);
          }
      }
      let _ = m.length - 1,
        v = d.length - 1,
        y = (e, t) => !!i && i(o[m[e]], l[m[e]][d[t]]),
        b = (e, t) => {
          let n = l[m[e]][d[t]],
            r = g(n);
          return r > 0 && Math.abs(o[m[e]]) < r - 0.012;
        },
        x = (e, t) =>
          !!(
            (s[m[e]] && s[m[e + 1]] && d[t] === An && d[t + 1] === jn) ||
            (y(e, t) && y(e + 1, t) && y(e, t + 1) && y(e + 1, t + 1)) ||
            (b(e, t) && b(e + 1, t) && b(e, t + 1) && b(e + 1, t + 1))
          ),
        S = [0, 0],
        C = (e, t) => [Math.round(e * _), Math.round(t * v)],
        w = t.grid(
          {
            nu: _,
            nv: v,
            closed: !1,
            point: (e, t, n) => {
              let [r, i] = C(e, t);
              return n.copy(h[r][i]);
            },
            skip: x,
          },
          {
            color: (t, r, i, c, u, f) => {
              let [p, h] = C(c, u),
                g = m[p],
                _ = d[h],
                v = o[g],
                y = l[g][_];
              if ((Jn(n, e.skin, v, y, f), _ === In || _ === Ln)) {
                let e = Math.abs(v) / a.mouthW;
                e < 1 && f.lerp(Kn.setHex(5905954), 0.55 * (1 - e * e));
              }
              if (s[g] && (_ === An || _ === jn)) {
                let e = (Math.abs(v) - a.eyeT) / a.eyeW;
                (f.multiplyScalar(_ === An ? 0.55 : 0.85),
                  _ === jn && f.lerp(Kn.setHex(14191238), 0.35),
                  e < -0.9 && f.lerp(Kn.setHex(13662840), 0.6));
              }
              return (s[g] && _ === kn && f.multiplyScalar(0.8), f);
            },
            skin: (e, t, r, i, a, s) => {
              let [c, u] = C(i, a),
                f = d[u];
              qn(
                n,
                o[m[c]],
                l[m[c]][f],
                s,
                f >= Ln && f <= Rn,
                f >= Fn && f <= In,
              );
            },
            kind: z.skin,
            rough: (e, t, r, i, a) => {
              let [c, u] = C(i, a),
                f = m[c],
                p = d[u];
              return s[f] && (p === jn || p === Mn)
                ? 0.16
                : Yn(n, o[f], l[f][p]);
            },
            bump: 1,
            tex: r
              ? {
                  rect: r,
                  mode: 0,
                  uv: (e, t, n, r, i, s) => {
                    let [c, u] = C(r, i);
                    (yn(a, o[m[c]], l[m[c]][d[u]], S),
                      (s[0] = S[0]),
                      (s[1] = S[1]));
                  },
                }
              : void 0,
          },
        ),
        T = t.nor;
      for (let e = 0; e <= v; e++)
        for (let t = 0; t <= _; t++) {
          let r = m[t],
            i = d[e];
          if (s[r] && i >= kn && i <= Mn) continue;
          let a = (w + e * (_ + 1) + t) * 3,
            c = l[r][i];
          (c < 0.02
            ? G.set(0, 1, 0)
            : (wn(n, o[r], Math.min(0.995, c), G, i === In ? -1 : +(i === Ln)),
              c > 0.97 &&
                G.lerp(
                  Gn.set(0, -1, 0.3).normalize(),
                  V(0.97, 1, c),
                ).normalize()),
            (T[a] = G.x),
            (T[a + 1] = G.y),
            (T[a + 2] = G.z));
        }
    };
  (yield,
    _(m, p, h, [
      [m, Bn],
      [p, Bn],
    ]),
    yield,
    _(0, m, Bn, [[0, Vn]]),
    _(p, c, Bn, [[c, Vn]]),
    $n(e, l[0]),
    yield,
    er(e),
    rr(e),
    yield,
    ir(e),
    sr(e));
}
function $n(e, t) {
  let { m: n, h: r, cover: i } = e,
    a = (e) => Hn + e * (Gt - 2 * Hn),
    o = Vn.map((e) => t[e]),
    s = o.length - 1,
    c = (e, t) => !!i && i(a(e), o[Math.round(t * s)]),
    l = n.grid(
      {
        nu: 6,
        nv: s,
        closed: !1,
        point: (e, t, n) => gn(r, a(e), o[Math.round(t * s)], n),
        skip: (e, t) =>
          c(e / 6, t / s) &&
          c((e + 1) / 6, t / s) &&
          c(e / 6, (t + 1) / s) &&
          c((e + 1) / 6, (t + 1) / s),
      },
      {
        color: (t, n, i, c, l, u) =>
          Jn(r, e.skin, a(c), o[Math.round(l * s)], u),
        skin: L.head,
        kind: z.skin,
        rough: 0.55,
        bump: 0.6,
      },
    ),
    u = n.nor;
  for (let e = 0; e <= s; e++)
    for (let t = 0; t <= 6; t++) {
      let n = (l + e * 7 + t) * 3,
        i = o[e];
      (i < 0.02
        ? G.set(0, 1, 0)
        : (wn(r, a(t / 6), Math.min(0.995, i), G),
          i > 0.97 &&
            G.lerp(Gn.set(0, -1, 0.3).normalize(), V(0.97, 1, i)).normalize()),
        (u[n] = G.x),
        (u[n + 1] = G.y),
        (u[n + 2] = G.z));
    }
}
function er(e) {
  let { m: t, h: n, b: r } = e,
    i = n.lay,
    a = n.s,
    o = Kn.setHex(e.skin).multiplyScalar(0.9).getHex(),
    s = e.lashColor ?? 1182472,
    c = e.lashLen ?? 0.3;
  for (let l of n.eyes) {
    let u = l.side,
      d = u < 0 ? L.eyeL : L.eyeR,
      f = u < 0 ? L.lidL : L.lidR;
    r.joints.p[d].copy(l.c);
    let p = (Math.PI / 180) * 75,
      m = (Math.PI / 180) * 44,
      h = Math.cos(0.62),
      g = (e, t, n) => {
        let r = (e * 2 - 1) * p,
          i = (t * 2 - 1) * m;
        return n.set(
          Math.sin(r) * Math.cos(i),
          Math.sin(i),
          -Math.cos(r) * Math.cos(i),
        );
      },
      _ = t.grid(
        {
          nu: 6,
          nv: 3,
          closed: !1,
          point: (e, t, n) => {
            g(e, t, G);
            let r = -G.z,
              i = r > h ? ((r - h) / (1 - h)) ** 1.4 * 7e-4 * a : 0;
            return n.copy(l.c).addScaledVector(G, l.r + i);
          },
          invert: !0,
        },
        {
          color: (e, t, n, r, i, a) => {
            g(r, i, G);
            let o = 1 - Math.max(0, -G.z) ** 0.8;
            return (
              a
                .setRGB(1, 1, 1)
                .multiplyScalar(1 - 0.5 * o - 0.22 * V(0.1, 0.55, G.y)),
              a
            );
          },
          skin: d,
          kind: z.eye,
          rough: 0.05,
          tex: e.eyeRect
            ? {
                rect: e.eyeRect,
                mode: 2,
                uv: (e, t, n, r, i, a) => {
                  let o = (r * 2 - 1) * p,
                    s = (i * 2 - 1) * m;
                  ((a[0] = 0.5 + o / Math.PI),
                    (a[1] = 0.5 + s / (Math.PI / 2)));
                },
              }
            : void 0,
        },
      );
    for (let e = 0; e <= 3; e++)
      for (let n = 0; n <= 6; n++) {
        g(n / 6, e / 3, G);
        let r = (_ + e * 7 + n) * 3;
        ((t.nor[r] = G.x), (t.nor[r + 1] = G.y), (t.nor[r + 2] = G.z));
      }
    let v = [-1, -0.5, 0.05, 0.55, 1],
      y = (e) => u * (i.eyeT + e * i.eyeW);
    if (
      (pn(n, l, y(0), Jt(i, 0) - 0.001, 0.0012 * a, r.joints.p[f]),
      t.grid(
        {
          nu: v.length - 1,
          nv: 2,
          closed: !1,
          point: (e, t, r) => {
            let o = v[Math.round(e * (v.length - 1))],
              s = Kt(Jt(i, o) - 0.002, Yt(i, o) + 0.001, t);
            return pn(
              n,
              l,
              y(o),
              s,
              8e-4 * a + 4e-4 * a * Math.sin(t * Math.PI),
              r,
            );
          },
          invert: u < 0,
        },
        {
          color: (e, t, n, r, i, a) => a.setHex(i > 0.9 ? tr(o, s, 0.6) : o),
          skin: f,
          kind: z.skin,
          rough: 0.5,
        },
      ),
      e.lashRect)
    ) {
      let r = [-0.8, -0.35, 0.1, 0.55, 1.02],
        o = (0.0042 + 0.0048 * c) * a,
        d = new D(),
        f = new D(),
        p = new D();
      t.grid(
        {
          nu: r.length - 1,
          nv: 2,
          closed: !1,
          point: (e, t, s) => {
            let c = r[Math.round(e * (r.length - 1))],
              m = qt(c, -1, 1),
              h = Jt(i, m) - 0.0028;
            (pn(n, l, y(m), h, n.lidTm + 2e-4 * a, d),
              f.subVectors(d, l.c).normalize(),
              p.set(0, 1, 0).addScaledVector(f, -f.y).normalize());
            let g = t,
              _ =
                o *
                (0.55 + 0.45 * Math.sin(((m + 1) / 2) * Math.PI * 0.9)) *
                (c > 1 ? 0.85 : 1);
            return (
              s
                .copy(d)
                .addScaledVector(f, _ * (0.55 * g - 0.1 * g * g))
                .addScaledVector(p, _ * (0.3 * g + 0.55 * g * g)),
              (s.x += u * _ * 0.35 * g * Math.max(0, m)),
              s
            );
          },
          invert: u > 0,
        },
        {
          color: s,
          skin: L.head,
          kind: z.hair,
          rough: 0.6,
          tex: {
            rect: e.lashRect,
            mode: 2,
            uv: (e, t, n, r, i, a) => ((a[0] = r), (a[1] = i)),
          },
        },
      );
    }
  }
}
function tr(e, t, n) {
  return Kn.setHex(e).lerp(nr.setHex(t), n).getHex();
}
var nr = new u();
function rr(e) {
  let { m: t, h: n, lod: r, faceRect: i } = e,
    a = n.lay,
    o = n.face,
    s = n.s,
    c = o.bridge,
    l = 0.85 + 0.35 * o.noseW,
    u = 0.9 + 0.2 * o.noseL,
    d = (0.0125 + 0.004 * c) * s * u,
    f = [
      [0.46, 0.085, 3e-4 * s, 0, 0],
      [0.515, 0.11, (0.0016 + 0.0018 * c) * s, 0, 0],
      [0.567, 0.13, (0.0034 + 0.0032 * c) * s, 0, 0],
      [0.617, 0.15, (0.0058 + 0.004 * c) * s * u, 0, 0],
      [a.noseTipD - 0.022, 0.172 * l, d * 0.84, 1, 0],
      [a.noseTipD, 0.185 * l, d, 1, -0.004],
      [a.noseTipD + 0.013, 0.19 * l, d * 0.9, 1, -0.008],
      [a.noseBaseD - 0.009, 0.188 * l, d * 0.55, 2, -0.014],
      [a.noseBaseD + 0.004, 0.182 * l, 0, 3, -0.024],
    ],
    p = r === 0 ? f : [f[0], f[2], f[4], f[5], f[8]],
    m =
      r === 0
        ? [-1, -0.76, -0.5, -0.24, 0, 0.24, 0.5, 0.76, 1]
        : [-1, -0.4, 0, 0.4, 1],
    h = m.length - 1,
    g = p.length - 1,
    _ = [0, 0],
    v = (e, t, n) => {
      let r = Math.max(0, Math.min(1, 0.5 + (0.5 * (e - t)) / n));
      return t + (e - t) * r + n * r * (1 - r);
    },
    y = (e, t) => {
      let n = Math.abs(e);
      if (n >= 1) return 0;
      let r = (1 - n * n) * (1 - n * n),
        i = t[2];
      if (t[3] === 0) return i * (0.55 * U(e, 0.3) + 0.45 * r);
      if (t[3] === 1) {
        let t = i * Math.max(0, 1 - (e / 0.5) * (e / 0.5)) ** 0.6,
          a = i * 0.95 * U(n - 0.55, 0.2);
        return v(t, a, i * 0.18) * r;
      }
      if (t[3] === 2) {
        let t = i * U(e, 0.14),
          a = i * 1.05 * U(n - 0.55, 0.18),
          o = i * 0.35 * U(n - 0.3, 0.11);
        return Math.max(0, (Math.max(t, a) - o) * r);
      }
      return 0;
    },
    b = (e, t) => e[0] + e[4] * t * t,
    x = (e) => {
      let t = Math.abs(e);
      return 45e-5 * s * (1 - V(0.62, 0.95, t)) - 5e-4 * s * V(0.8, 1, t);
    },
    S = (e, t, r) => {
      let i = Math.round(t * g),
        a = Math.round(e * h),
        o = p[i],
        c = m[a];
      return W(n, c * o[1], b(o, c), y(c, o) + (i === 0 ? -4e-4 * s : x(c)), r);
    },
    C = t.vertexCount;
  t.grid(
    { nu: h, nv: g, closed: !1, point: S },
    {
      color: (t, r, i, a, o, s) => {
        let c = Math.round(o * g),
          l = Math.round(a * h),
          u = m[l],
          d = Math.abs(u);
        Jn(n, e.skin, u * p[c][1], b(p[c], u), s);
        let f = p[c][3];
        return (
          f >= 2 &&
            s.multiplyScalar(1 - (f === 3 ? 0.55 : 0.4) * U(d - 0.3, 0.12)),
          f >= 1 && c >= g - 3 && s.multiplyScalar(1 - 0.1 * U(d - 0.78, 0.1)),
          f === 1 &&
            d < 0.5 &&
            ((s.r = Math.min(1, s.r * 1.04)), (s.g *= 0.985)),
          s
        );
      },
      skin: L.head,
      kind: z.skin,
      rough: (e, t, n, r, i) =>
        p[Math.round(i * g)][3] >= 2
          ? 0.55
          : 0.38 + 0.12 * Math.abs(m[Math.round(r * h)]),
      bump: 0.8,
      tex: i
        ? {
            rect: i,
            mode: 0,
            uv: (e, t, r, i, a, o) => {
              let s = Math.round(a * g),
                c = Math.round(i * h);
              (yn(n.lay, m[c] * p[s][1], b(p[s], m[c]), _),
                (o[0] = _[0]),
                (o[1] = _[1]));
            },
          }
        : void 0,
    },
  );
  let w = t.nor;
  for (let e = 0; e <= g; e++)
    for (let t = 0; t <= h; t++) {
      let r = V(0.95, 0.45, Math.abs(m[t])) * (e === 0 ? 0 : e === 1 ? 0.6 : 1);
      if (r >= 0.999) continue;
      let i = (C + e * (h + 1) + t) * 3;
      (wn(n, m[t] * p[e][1], b(p[e], m[t]), G),
        Gn.set(w[i], w[i + 1], w[i + 2]),
        G.lerp(Gn, r).normalize(),
        (w[i] = G.x),
        (w[i + 1] = G.y),
        (w[i + 2] = G.z));
    }
}
function ir(e) {
  let { m: t, h: n, lod: r } = e;
  if (e.earsHidden) return;
  let i = n.s,
    a = 0.058 * i,
    o = 0.032 * i,
    s = Kn.setHex(e.skin)
      .multiply(new u(1.03, 0.92, 0.88))
      .getHex(),
    c = Kn.setHex(e.skin)
      .multiply(new u(0.78, 0.66, 0.64))
      .getHex(),
    l = Kn.setHex(e.skin)
      .multiply(new u(1.04, 0.9, 0.86))
      .getHex();
  for (let e of [-1, 1]) {
    let u = W(n, e * 1.6, 0.585, -0.001, new D(), !1),
      d = new D(e, 0, 0.12).normalize(),
      f = new D(0, 1, 0),
      p = new D();
    (f.applyAxisAngle(d, e * 0.2),
      p.crossVectors(d, f).multiplyScalar(-e),
      p.z > 0 && p.negate());
    let m = r === 0 ? 8 : 5,
      h =
        r === 0
          ? [
              [1, 0.45],
              [1.03, 1],
              [0.84, 0.9],
              [0.62, 0.72],
              [0.3, 0.15],
            ]
          : [
              [1, 0.5],
              [0.9, 0.9],
              [0.2, 0.1],
            ],
      g = h.length - 1,
      _ = (e, t) => {
        let n = e * Gt,
          r = Math.max(0, Math.cos(n));
        ((t[0] = Math.sin(n) * o * (0.5 + 0.12 * r) + o * 0.18),
          (t[1] =
            Math.cos(n) *
            a *
            0.5 *
            (n > Math.PI * 0.8 && n < Math.PI * 1.2 ? 0.95 : 1)));
      },
      v = [0, 0];
    (t.grid(
      {
        nu: m,
        nv: g,
        closed: !0,
        point: (e, t, n) => {
          let r = Math.round(t * g),
            [a, s] = h[r];
          _(e, v);
          let c = v[0] < 0 ? 0.7 : 1,
            l = v[0] * a * (r >= 3 ? c : 1),
            m = v[1] * a,
            y = (0.004 + 0.012 * Math.max(0, v[0] / o)) * i * s;
          return (
            n
              .copy(u)
              .addScaledVector(p, -l)
              .addScaledVector(f, m)
              .addScaledVector(d, y),
            n
          );
        },
        invert: e < 0,
        cap1: !0,
      },
      {
        color: (e, t, n, r, i, a) => {
          let o = Math.round(i * g);
          return a.setHex(o >= g - 1 ? c : o === 1 ? l : s);
        },
        skin: L.head,
        kind: z.skin,
        rough: 0.55,
        bump: 0.5,
      },
    ),
      t.grid(
        {
          nu: m,
          nv: 1,
          closed: !0,
          point: (e, t, n) => {
            _(e, v);
            let r = (0.004 + 0.012 * Math.max(0, v[0] / o)) * i * 0.45,
              a = t < 0.5 ? 1 : 0.7;
            return (
              n
                .copy(u)
                .addScaledVector(p, -v[0] * a)
                .addScaledVector(f, v[1] * a)
                .addScaledVector(d, t < 0.5 ? r : -0.004 * i),
              n
            );
          },
          invert: e > 0,
        },
        {
          color: Kn.setHex(s).multiplyScalar(0.85).getHex(),
          skin: L.head,
          kind: z.skin,
          rough: 0.6,
        },
      ));
  }
}
function ar(e) {
  let { m: t, h: n, lod: r } = e,
    i = Tn(r),
    a = En(r),
    o = i.length - 1,
    s = a.length - 1,
    c = i.slice();
  c[o] = i[0] + Gt;
  let l = (e) => c[Math.round(e * o)],
    u = (e) => a[Math.round(e * s)],
    d = {
      color: (t, r, i, a, o, s) => Jn(n, e.skin, l(a), u(o), s),
      skin: (e, t, r, i, a, o) => qn(n, l(i), u(a), o),
      kind: z.skin,
      rough: 0.58,
    },
    f = t.grid(
      { nu: o, nv: s, closed: !1, point: (e, t, r) => W(n, l(e), u(t), 0, r) },
      d,
    ),
    p = t.nor;
  for (let e = 0; e <= s; e++)
    for (let t = 0; t <= o; t++) {
      let r = (f + e * (o + 1) + t) * 3,
        i = a[e];
      (i < 0.03
        ? G.set(0, 1, 0)
        : (wn(n, c[t], Math.min(0.995, i), G),
          i > 0.97 &&
            G.lerp(Gn.set(0, -1, 0.3).normalize(), V(0.97, 1, i)).normalize()),
        (p[r] = G.x),
        (p[r + 1] = G.y),
        (p[r + 2] = G.z));
    }
  (rr(e), or(e), sr(e));
}
function or(e) {
  let { m: t, h: n } = e,
    r = n.lay,
    i = n.face,
    a = (e, r, i, a, o, s, c) =>
      t.grid(
        {
          nu: 2,
          nv: 1,
          closed: !1,
          point: (t, s, c) =>
            W(
              n,
              Kt(e, r, t),
              Kt(i, a, s) + (t === 0.5 ? (s < 0.5 ? -0.006 : 0.004) : 0),
              o,
              c,
            ),
        },
        { color: s, skin: c, kind: z.skin, rough: 0.6 },
      ),
    o = e.b.elder ? 10130572 : 2760215;
  for (let e of [-1, 1]) {
    let t = e * r.eyeT,
      n = t - e * r.eyeW * 0.85,
      s = t + e * r.eyeW * 0.9;
    a(
      Math.min(n, s),
      Math.max(n, s),
      r.eyeD - r.eyeH * 0.9,
      r.eyeD + r.eyeH * 0.5,
      0.0022,
      2102799,
      L.head,
    );
    let c = e * 0.12,
      l = e * 0.52;
    a(
      Math.min(c, l),
      Math.max(c, l),
      r.browD - 0.012 * (0.6 + i.brow),
      r.browD + 0.008,
      0.0024,
      o,
      L.head,
    );
  }
  let s =
    i.lipColor ||
    Kn.setHex(e.skin)
      .multiply(new u(0.92, 0.62, 0.6))
      .getHex();
  a(-r.mouthW, r.mouthW, r.mouthD - 0.012, r.mouthD + 0.016, 0.0025, s, L.jaw);
}
function sr(e) {
  let { m: t, h: n, b: r, lod: i } = e,
    a = i === 0 ? 10 : 6,
    o = r.H * 0.808,
    s = n.crownY - 0.8 * n.hh,
    c = on(n, 0.8) + 0.035 * n.hh,
    l = r.neckBase.z,
    u = r.neckR,
    d = i === 0 ? [0, 0.22, 0.48, 0.74, 1] : [0, 0.5, 1],
    f = d.length - 1,
    p = !r.female,
    m = new D(),
    h = (e) => Kt(0.8, 0.7, V(0, 0.8, -Math.cos(e)));
  t.grid(
    {
      nu: a,
      nv: f,
      closed: !0,
      point: (e, t, i) => {
        let a = d[Math.round(t * f)],
          s = e * Gt,
          g = n.crownY - h(s) * n.hh,
          _ = Kt(o, g, a),
          v = Kt(l, c, a * a),
          y = Math.sin(s),
          b = Math.cos(s),
          x = u * (1 - 0.1 * a) * (1 + 0.16 * (1 - a) * (1 - a)),
          S = u * (0.9 + 0.08 * (1 - a)),
          C = u * (1.02 + 0.08 * (1 - a)),
          w = b > 0 ? S : C,
          T = 1 / Math.sqrt((y / x) ** 2 + (b / w) ** 2),
          E = Kt(0.95, 0.55, a);
        ((T +=
          (p ? 0.0035 : 0.002) *
          r.s *
          (U(tn(s, E), 0.3) + U(tn(s, -E), 0.3)) *
          Math.sin(a * Math.PI)),
          (T -= 0.002 * r.s * U(tn(s, 0), 0.22) * (1 - a) * 0.6));
        let D =
          p && !r.student
            ? 0.0042 * r.s * U(y, 0.25) * Math.max(0, b) * U(a - 0.58, 0.18)
            : 0;
        ((T += D), i.set(y * T, _, v - b * T));
        let O = V(0, 0.6, -b) * V(0.45, 1, a);
        return (O > 0 && i.lerp(W(n, s, h(s), -0.0015 * n.s, m, !1), O), i);
      },
      invert: !0,
    },
    {
      color: (t, n, r, i, a, o) => {
        o.setHex(e.skin);
        let c = i * Gt;
        return (
          o.multiplyScalar(
            1 - 0.12 * V(s - 0.06, s, n) * Math.max(0, Math.cos(c)),
          ),
          o
        );
      },
      skin: (e, t, n, r, i, a) =>
        B(a, L.neck, L.head, V(Kt(o, s, 0.45), Kt(o, s, 0.95), t)),
      kind: z.skin,
      rough: 0.56,
      bump: 0.6,
    },
  );
}
function cr(e) {
  return !!e.tiles || !!(e.atlas && e.page);
}
function lr(e, t, n, r, i, a) {
  return e.tiles
    ? e.tiles.tile(t, n, r, i, a)
    : e.atlas && e.page
      ? e.atlas.tile(e.page, t, n, r, i, a)
      : null;
}
var ur = 0.045,
  dr = 0.11;
function fr(e, t, n, r = 16777215) {
  let i = t ?? `solid`;
  return cr(e)
    ? i === `solid` || i === `knit`
      ? {
          vcol: n,
          rect:
            i === `knit`
              ? lr(
                  e,
                  `knit:ffffff`,
                  128,
                  128,
                  !0,
                  Re(`knit`, 15921906, 16777215, 5),
                )
              : lr(e, `weave`, 128, 128, !0, Ie),
          tileM: i === `knit` ? 0.06 : ur,
        }
      : i === `denim`
        ? {
            vcol: n,
            rect: lr(
              e,
              `denim`,
              128,
              128,
              !0,
              Re(`denim`, 15790320, 16777215, 9),
            ),
            tileM: 0.05,
          }
        : {
            vcol: 16777215,
            rect: lr(
              e,
              `pat:${i}:${n.toString(16)}:${r.toString(16)}`,
              128,
              128,
              !0,
              Re(i, n, r, (n ^ (r << 3)) & 65535),
            ),
            tileM: i === `stripes` ? 0.09 : dr,
          }
    : {
        vcol: F(
          n,
          r,
          {
            stripes: 0.3,
            floral: 0.4,
            plaid: 0.35,
            check: 0.3,
            dots: 0.12,
            camo: 0.4,
            knit: 0,
            denim: 0,
            solid: 0,
          }[i] ?? 0,
        ),
        rect: null,
        tileM: 1,
      };
}
function pr(e) {
  return lr(e, `hair3`, 128, 128, !0, Le);
}
function mr(e, t, n, r) {
  return lr(e, `rib:${t}:${n}:${r}`, 128, 64, !0, Ue(t, n, r));
}
function hr(e, t, n, r) {
  return t === `none`
    ? null
    : lr(e, `print:${t}:${n}:${r}`, 256, 256, !1, We(t, n, r));
}
function gr(e, t, n) {
  return lr(e, `placket:${t}:${n}`, 32, 256, !1, Be(t, n, 6));
}
function _r(e, t, n) {
  return lr(e, `zip:${t}:${n}`, 16, 256, !1, Ve(t, n));
}
function vr(e, t, n, r) {
  return lr(e, `pocket:${r}:${t}:${n}`, 96, 96, !1, He(t, n, r));
}
function yr(e, t) {
  return Math.max(1, Math.round((Math.PI * 2 * e) / t));
}
var br = new u();
function K(e, t) {
  return br.setHex(e).multiplyScalar(t).getHex();
}
var q = Math.PI * 2,
  xr = (e, t, n) => e + (t - e) * n,
  Sr = (e, t) => Math.exp(-(e * e) / (t * t)),
  Cr = (e, t) => {
    let n = (e - t) % q;
    return (n > Math.PI && (n -= q), n < -Math.PI && (n += q), n);
  },
  wr = { none: -1, short: 0.4, elbow: 0.95, long: 1.93 },
  Tr = {
    tee: {
      hem: 0.502,
      sleeve: `short`,
      off: 0.004,
      loose: 0.45,
      collar: `crew`,
      neckF: 0.834,
      neckB: 0.846,
    },
    polo: {
      hem: 0.506,
      sleeve: `short`,
      off: 0.005,
      loose: 0.4,
      collar: `polo`,
      neckF: 0.838,
      neckB: 0.85,
    },
    shirt: {
      hem: 0.49,
      sleeve: `long`,
      off: 0.0045,
      loose: 0.32,
      collar: `shirt`,
      neckF: 0.838,
      neckB: 0.852,
    },
    uniform: {
      hem: 0.5,
      sleeve: `short`,
      off: 0.0045,
      loose: 0.38,
      collar: `shirt`,
      neckF: 0.838,
      neckB: 0.852,
    },
    blouse: {
      hem: 0.53,
      sleeve: `short`,
      off: 0.004,
      loose: 0.62,
      collar: `crew`,
      neckF: 0.818,
      neckB: 0.842,
    },
    tank: {
      hem: 0.505,
      sleeve: `none`,
      off: 0.003,
      loose: 0.25,
      collar: `crew`,
      neckF: 0.795,
      neckB: 0.828,
      armhole: !0,
    },
    hoodie: {
      hem: 0.49,
      sleeve: `long`,
      off: 0.011,
      loose: 0.8,
      collar: `hood`,
      neckF: 0.836,
      neckB: 0.85,
      rib: !0,
    },
    sweater: {
      hem: 0.5,
      sleeve: `long`,
      off: 0.009,
      loose: 0.6,
      collar: `crew`,
      neckF: 0.836,
      neckB: 0.848,
      rib: !0,
    },
    police: {
      hem: 0.5,
      sleeve: `long`,
      off: 0.005,
      loose: 0.38,
      collar: `shirt`,
      neckF: 0.838,
      neckB: 0.852,
    },
    rider: {
      hem: 0.49,
      sleeve: `long`,
      off: 0.012,
      loose: 0.72,
      collar: `high`,
      neckF: 0.842,
      neckB: 0.855,
      rib: !0,
    },
    sailor: {
      hem: 0.515,
      sleeve: `long`,
      off: 0.0045,
      loose: 0.5,
      collar: `none`,
      neckF: 0.812,
      neckB: 0.85,
    },
    yukata: {
      hem: 0.5,
      sleeve: `elbow`,
      off: 0.006,
      loose: 0.45,
      collar: `none`,
      neckF: 0.79,
      neckB: 0.852,
    },
  },
  Er = {
    bomber: {
      hem: 0.52,
      sleeve: `long`,
      off: 0.02,
      loose: 0.85,
      gap: 0.2,
      collar: `rib`,
      ribHem: !0,
      neck: 0.848,
    },
    cropped: {
      hem: 0.632,
      sleeve: `long`,
      off: 0.013,
      loose: 0.6,
      gap: 0.26,
      collar: `rib`,
      ribHem: !0,
      neck: 0.846,
    },
    blazer: {
      hem: 0.455,
      sleeve: `long`,
      off: 0.012,
      loose: 0.3,
      gap: 0.24,
      collar: `lapel`,
      ribHem: !1,
      neck: 0.85,
    },
    cardigan: {
      hem: 0.47,
      sleeve: `long`,
      off: 0.009,
      loose: 0.5,
      gap: 0.26,
      collar: `v`,
      ribHem: !0,
      neck: 0.845,
    },
    vest: {
      hem: 0.5,
      sleeve: `none`,
      off: 0.012,
      loose: 0.25,
      gap: 0,
      collar: `v`,
      ribHem: !1,
      neck: 0.84,
    },
    windbreaker: {
      hem: 0.49,
      sleeve: `long`,
      off: 0.016,
      loose: 0.8,
      gap: 0,
      collar: `high`,
      ribHem: !1,
      neck: 0.855,
    },
    poncho: {
      hem: 0.44,
      sleeve: `none`,
      off: 0.03,
      loose: 1,
      gap: 0,
      collar: `none`,
      ribHem: !1,
      neck: 0.85,
    },
    jacket: {
      hem: 0.505,
      sleeve: `long`,
      off: 0.011,
      loose: 0.3,
      gap: 0.2,
      collar: `lapel`,
      ribHem: !1,
      neck: 0.85,
    },
    gakuran: {
      hem: 0.475,
      sleeve: `long`,
      off: 0.012,
      loose: 0.32,
      gap: 0,
      collar: `high`,
      ribHem: !1,
      neck: 0.852,
    },
    happi: {
      hem: 0.45,
      sleeve: `elbow`,
      off: 0.012,
      loose: 0.55,
      gap: 0.16,
      collar: `none`,
      ribHem: !1,
      neck: 0.846,
    },
  },
  Dr = {
    jeans: {
      waist: 0.572,
      legT: 1.93,
      off: 0.006,
      loose: 0.22,
      pattern: `denim`,
    },
    slacks: { waist: 0.585, legT: 1.96, off: 0.005, loose: 0.45 },
    shorts: { waist: 0.575, legT: 0.55, off: 0.006, loose: 0.55 },
    skirt: {
      waist: 0.605,
      legT: -1,
      off: 0.004,
      loose: 0,
      skirt: { hem: 0.33, flare: 0.13, pleats: 12 },
    },
    pencil: {
      waist: 0.6,
      legT: -1,
      off: 0.004,
      loose: 0,
      skirt: { hem: 0.3, flare: -0.01, pleats: 0 },
    },
    longskirt: {
      waist: 0.6,
      legT: -1,
      off: 0.004,
      loose: 0,
      skirt: { hem: 0.075, flare: 0.22, pleats: 0 },
    },
    wide: { waist: 0.62, legT: 1.985, off: 0.005, loose: 1, flare: 0.012 },
    track: { waist: 0.58, legT: 1.9, off: 0.007, loose: 0.5 },
    leggings: { waist: 0.6, legT: 1.92, off: 0.0018, loose: 0 },
    robe: {
      waist: 0.6,
      legT: -1,
      off: 0.005,
      loose: 0,
      skirt: { hem: 0.07, flare: 0.035, pleats: 0 },
    },
  };
function Or(e, t) {
  let n = t.H,
    r = Dr[e.bottom.style],
    i = {
      style: e.bottom.style,
      waistY: r.waist * n,
      legT: r.legT,
      off: r.off,
      loose: r.loose,
      flare: r.flare ?? 0,
      color: e.bottom.color,
      color2: e.bottom.color2 ?? e.bottom.color,
      pattern: e.bottom.pattern ?? r.pattern ?? `solid`,
      patternColor: e.bottom.patternColor ?? 16777215,
      belt: e.bottom.belt ?? 0,
      skirt: r.skirt
        ? {
            hemY: r.skirt.hem * n,
            flare: r.skirt.flare,
            pleats: r.skirt.pleats,
          }
        : null,
    },
    a = null;
  if (e.top.style !== `none`) {
    let t = Tr[e.top.style],
      r = e.top.sleeve ?? t.sleeve,
      o = wr[r];
    r === `short` &&
      (e.top.style === `polo` || e.top.style === `uniform`) &&
      (o = 0.36);
    let s = e.top.tucked ?? e.top.style === `police`;
    ((a = {
      style: e.top.style,
      hemY: s ? i.waistY - 0.035 : (t.hem - (e.top.length ?? 0) / n) * n,
      neckF: t.neckF * n,
      neckB: t.neckB * n,
      sleeveT: o,
      off: t.off,
      loose: s ? t.loose * 0.6 : (e.top.fit ?? t.loose),
      tucked: s,
      armhole: !!t.armhole,
      collar: t.collar,
      rib: !!t.rib,
      color: e.top.color,
      color2: e.top.color2 ?? e.top.color,
      pattern:
        e.top.pattern ??
        (e.top.style === `sweater` || e.top.style === `tank`
          ? `knit`
          : `solid`),
      patternColor: e.top.patternColor ?? 16777215,
      print: e.top.print ?? `none`,
    }),
      e.top.style === `police` && (a.hemY = i.waistY - 0.035));
  }
  let o = null;
  if (e.outer) {
    let t = Er[e.outer.style];
    a &&
      (e.outer.style === `vest` || e.outer.style === `poncho`) &&
      (a.hemY = Math.max(a.hemY, 0.74 * n));
    let r = e.outer.sleeve ?? t.sleeve;
    o = {
      style: e.outer.style,
      hemY: e.outer.length ? (t.hem - e.outer.length / n) * n : t.hem * n,
      neckY: t.neck * n,
      sleeveT: wr[r],
      off:
        t.off +
        (a && (a.style === `hoodie` || a.style === `sweater`) ? 0.006 : 0),
      loose: t.loose,
      gap: e.outer.closed ? 0 : t.gap,
      ...(e.outer.over ? { over: !0 } : null),
      collar: t.collar,
      ribHem: t.ribHem,
      color: e.outer.color,
      color2: e.outer.color2 ?? e.outer.color,
      pattern:
        e.outer.pattern ?? (e.outer.style === `cardigan` ? `knit` : `solid`),
      patternColor: e.outer.patternColor ?? 16777215,
      print: e.outer.print ?? `none`,
    };
  }
  let s = e.shoes.style,
    c =
      s === `boot` || s === `rainboot`
        ? 1.58
        : s === `slipper` || s === `sandal`
          ? 2.2
          : 1.97,
    l = null;
  e.socks &&
    s !== `slipper` &&
    s !== `sandal` &&
    (l = {
      color: e.socks,
      topT: e.age === `student` && i.skirt ? 1.52 : 1.74,
    });
  let u = t.torsoTop;
  return (
    !a && !o
      ? (u = (i.skirt, i.waistY - 0.03))
      : ((u = Math.min(a ? a.neckF : 1 / 0, o && !a ? o.neckY : 1 / 0) - 0.025),
        a?.armhole && (u = Math.min(u, 0.785 * n))),
    { top: a, outer: o, bottom: i, socks: l, shoeT: c, skinY0: u }
  );
}
function kr(e, t, n, r, i, a = !0) {
  let o = Vt(e, t, n, a);
  if (i > 0) {
    let r = xr(1.1, 0.08, Math.min(1, i)),
      a = e.H * 0.77;
    for (let i = 1; i <= 6; i++) {
      let s = n + i * 0.035;
      if (s > a) break;
      o = Math.max(o, Vt(e, t, s, !0) - r * (s - n));
    }
  }
  let s = Math.abs(Cr(t, 0)) - Math.PI / 2,
    c =
      V(e.H * 0.72, e.H * 0.77, n) *
      (1 - V(e.H * 0.785, e.H * 0.812, n)) *
      Math.exp(-(s * s) / 0.3);
  return o + (r + i * 0.006) * (1 - 0.75 * c);
}
function Ar(e) {
  let { top: t, outer: n, bottom: r } = e;
  return t && !t.tucked && t.hemY < r.waistY
    ? { hemY: t.hemY, off: t.off, loose: t.loose }
    : n && (n.gap === 0 || n.over) && n.hemY < r.waistY
      ? { hemY: n.hemY, off: n.off, loose: n.loose }
      : null;
}
function jr(e, t, n, r, i) {
  if (!t || r < t.hemY - 0.005) return i;
  let a = V(t.hemY - 0.005, t.hemY + 0.012, r),
    o = kr(e, n, r, t.off, t.loose) - 0.006;
  return i > o ? xr(i, o, a) : i;
}
function Mr(e, t, n, r, i, a, o, s) {
  let c = Rt(e, t, n),
    l = 0.45 + 0.55 * V(-0.05, 0.4, n);
  return c + (r + i * 0.008) * l + s * V(a, o, n);
}
function Nr(e, t, n, r, i, a) {
  let o = Rt(e, t, n);
  if (i > 0) {
    let r = Rt(e, t, 0.2) * 0.96;
    o = Math.max(o, xr(o, r, i * V(-0.1, 0.25, n)));
  }
  return o + r + a * V(1, 2, n);
}
var Pr = [
    0.468, 0.492, 0.515, 0.54, 0.568, 0.598, 0.63, 0.665, 0.7, 0.735, 0.768,
    0.795, 0.818, 0.836, 0.853,
  ],
  Fr = [0.468, 0.5, 0.56, 0.625, 0.69, 0.76, 0.81, 0.853],
  Ir = [
    -0.2, -0.06, 0.12, 0.38, 0.65, 0.86, 0.97, 1.08, 1.25, 1.5, 1.75, 1.93, 2,
  ],
  Lr = [-0.2, 0.1, 0.6, 0.95, 1.1, 1.6, 2],
  Rr = [
    -0.16, -0.02, 0.18, 0.42, 0.66, 0.86, 0.97, 1.08, 1.25, 1.5, 1.75, 1.93, 2,
  ],
  zr = [-0.16, 0.2, 0.7, 0.95, 1.1, 1.6, 2];
function Br(e, t, n, r) {
  let i = [t];
  for (let a of e) a > t + r && a < n - r && i.push(a);
  return (i.push(n), i);
}
function Vr(e, t, n, r = 0, i = 0) {
  let a = [];
  return (
    t && a.push({ p: e[0], k: 0 }),
    e.forEach((t, n) =>
      a.push({
        p: t,
        k: 1,
        tight:
          (n === 0 && r) || (r && t < e[0] + 0.03)
            ? r
            : i && t > e[e.length - 1] - 0.03
              ? i
              : 0,
      }),
    ),
    n && a.push({ p: e[e.length - 1], k: 0 }),
    a
  );
}
function Hr(e, t) {
  let n = e.b,
    r = t.thetas.length - 1,
    i = t.rows.length - 1,
    a = t.rows[0].p,
    o = t.rows[i].p,
    s = (e) => t.thetas[Math.round(e * r)],
    c = (e, n) => {
      let r = t.rows[Math.round(n * i)];
      if (!t.yLo || !t.yHi) return r.p;
      let c = s(e),
        l = o > a ? (r.p - a) / (o - a) : 0;
      return xr(t.yLo(c), t.yHi(c), l);
    };
  return (
    e.m.grid(
      {
        nu: r,
        nv: i,
        closed: !1,
        point: (e, a, o) => {
          let s = Math.round(e * r),
            l = Math.round(a * i),
            u = t.thetas[s],
            d = c(e, a),
            f = t.rows[l],
            p = f.k * (t.colK ? t.colK[s] : 1),
            m = t.R(u, d) + (t.bump ? t.bump(u, d) : 0) - (f.tight ?? 0),
            h = p >= 1 ? m : xr(t.Ru(u, d), m, p);
          return o.set(Math.sin(u) * h, d, H(n, d) - Math.cos(u) * h);
        },
        invert: !0,
      },
      t.attrs,
    ),
    { th: s, yy: c, nu: r, nv: i }
  );
}
var Ur = new D(),
  Wr = new D(),
  Gr = new D(),
  Kr = new D();
function qr(e, t, n) {
  let r = t.rows.length - 1;
  e.m.grid(
    {
      nu: n,
      nv: r,
      closed: !0,
      cap0: t.rows[0].p <= t.limb.tMin + 1e-6 && t.limb.bones[0] !== L.hips,
      point: (e, n, i) => {
        let a = t.rows[Math.round(n * r)],
          o = e * q,
          s = t.R(o, a.p) - (a.tight ?? 0),
          c = a.k >= 1 ? s : xr(t.Ru(o, a.p), s, a.k);
        return (
          Lt(t.limb, a.p, Ur, Wr, Gr, Kr),
          i
            .copy(Ur)
            .addScaledVector(Kr, Math.sin(o) * c)
            .addScaledVector(Gr, Math.cos(o) * c)
        );
      },
    },
    t.attrs,
  );
}
function Jr(e, t) {
  if (e.rect)
    return { rect: e.rect, mode: 1, uv: (e, n, r, i, a, o) => t(i, a, o) };
}
function Yr(e) {
  let { b: t, fit: n, lod: r } = e,
    i = t.H,
    a = r === 0 ? Pr : Fr,
    o = e.nT,
    s = [];
  for (let e = 0; e <= o; e++) s.push(-Math.PI + (e / o) * q);
  let { top: c, outer: l, bottom: u } = n,
    d = e.desc.skin,
    f = r === 0 ? 0.006 : 0.02,
    p = t.torsoTop;
  n.skinY0 < p - 0.005 &&
    Hr(e, {
      thetas: s,
      closed: !0,
      rows: Br(
        a.map((e) => e * i),
        n.skinY0,
        p,
        f,
      ).map((e) => ({ p: e, k: 1 })),
      R: (e, n) => Vt(t, e, n),
      Ru: (e, n) => Vt(t, e, n),
      attrs: {
        color: (e, t, n, r, a, c) => {
          c.setHex(d);
          let l = s[Math.round(r * o)];
          c.multiplyScalar(
            1 -
              0.08 *
                Sr(Math.abs(l) - Math.PI / 2, 0.35) *
                Sr(t - 0.76 * i, 0.03 * i),
          );
        },
        skin: (e, n, r, i, a, c) => Ut(t, s[Math.round(i * o)], n, c),
        kind: z.skin,
        rough: 0.62,
      },
    });
  {
    let r =
        c && !c.tucked
          ? Math.min(u.waistY, c.hemY + 0.025)
          : l && l.hemY < u.waistY && l.gap === 0
            ? l.hemY + 0.025
            : u.waistY,
      d = u.skirt ? Math.max(t.torsoBottom, u.skirt.hemY) : t.torsoBottom;
    if ((!u.skirt || (u.skirt.hemY, t.torsoBottom), !u.skirt)) {
      let p = Br(
          a.map((e) => e * i),
          d,
          r,
          f,
        ),
        m = fr(e, u.pattern, u.color, u.patternColor),
        h = m.rect ? yr(0.15, m.tileM) : 1,
        g = Vr(p, !1, !(c && !c.tucked && r < u.waistY)),
        _ = Ar(n);
      Hr(e, {
        thetas: s,
        closed: !0,
        rows: g,
        R: (e, n) =>
          jr(
            t,
            _,
            e,
            n,
            kr(t, e, n, u.off, 0, n > t.H * 0.54) +
              (n > u.waistY - 0.04 ? 0.002 : 0),
          ),
        Ru: (e, n) => Vt(t, e, n, !0),
        attrs: {
          color: (e, n, r, a, c, l) => {
            let f = s[Math.round(a * o)];
            l.setHex(m.vcol);
            let p =
              V(d + 0.07, d, n) * 0.28 +
              0.16 * Sr(Cr(f, 0), 0.45) * V(t.H * 0.56, t.H * 0.49, n);
            (l.multiplyScalar(
              1 -
                p -
                (Math.round(c * (g.length - 1)) === g.length - 1 ? 0.2 : 0),
            ),
              u.pattern === `denim` &&
                l.multiplyScalar(
                  1 +
                    0.12 * Math.max(0, Math.cos(f)) * Sr(n - 0.5 * i, 0.05 * i),
                ));
          },
          skin: (e, n, r, i, a, c) => Ut(t, s[Math.round(i * o)], n, c),
          kind: z.cloth,
          rough: u.pattern === `denim` ? 0.9 : 0.85,
          tex: Jr(m, (e, t, n) => {
            ((n[0] = (e - 0.5) * h),
              (n[1] = g[Math.round(t * (g.length - 1))].p / m.tileM));
          }),
        },
      });
      let v = !!l && l.gap === 0 && l.hemY < u.waistY - 0.02;
      if (
        (u.belt &&
          (!c || c.tucked) &&
          !v &&
          $r(e, u.waistY - 0.012, u.belt, u.off + 0.003),
        e.lod === 0 &&
          u.pattern === `denim` &&
          (!c || c.tucked || c.hemY > 0.53 * i))
      ) {
        let n = vr(e, u.color, 13933114, `jeans`);
        for (let r of [-1, 1])
          n &&
            Zr(
              e,
              (e, n) => kr(t, e, n, u.off, 0),
              Math.PI + r * 0.62,
              0.36,
              0.495 * i,
              0.555 * i,
              n,
              z.cloth,
              0.9,
              2,
            );
      }
    }
  }
  if (c) {
    let n =
      l && l.gap === 0 && l.sleeveT > 0
        ? `all`
        : l && l.gap > 0
          ? `front`
          : `none`;
    if (n !== `all` || l?.style === `vest`) {
      let r = fr(e, c.pattern, c.color, c.patternColor),
        d = r.rect ? yr(0.16, r.tileM) : 1,
        p = s,
        m = !0;
      if (n === `front` && l) {
        let e = Math.min(Math.PI * 0.9, l.gap + 0.55),
          t = Math.max(4, Math.round((e * 2) / (q / o)));
        p = [];
        for (let n = 0; n <= t; n++) p.push(-e + (n / t) * e * 2);
        m = !1;
      }
      let h = (e) => {
          let t = Math.max(0, Math.cos(e)),
            n = xr(c.neckB, c.neckF, t ** 1.5);
          return (
            c.armhole &&
              (n -=
                0.018 * i * Sr(Math.abs(Cr(e, 0)), 0.5) +
                0.01 * i * Sr(Math.abs(Cr(e, Math.PI)), 0.6)),
            n
          );
        },
        g = (e) =>
          c.hemY +
          (c.style === `shirt` && !c.tucked
            ? 0.012 * Sr(Math.abs(e) - Math.PI / 2, 0.5)
            : 0),
        _ = Br(
          a.map((e) => e * i),
          c.hemY,
          c.neckB,
          f,
        ),
        v = c.rib ? 0.004 : 0,
        y = Vr(_, !c.tucked, !0, v, 0),
        b = y.length - 1,
        x = y[0].p,
        S = y[b].p,
        C = K(r.vcol, 0.9);
      Hr(e, {
        thetas: p,
        closed: m,
        rows: y,
        yLo: g,
        yHi: h,
        R: (e, n) => kr(t, e, n, c.off, c.loose),
        Ru: (e, n) =>
          n > 0.7 * i ? Vt(t, e, n) - 0.001 : kr(t, e, n, u.off, 0) - 0.002,
        attrs: {
          color: (e, t, n, a, o, s) => {
            let l = p[Math.round(a * (p.length - 1))],
              u = Math.round(o * b);
            (s.setHex(u === b || u === 0 ? C : r.vcol),
              c.rib && t < c.hemY + 0.035 && s.setHex(K(r.vcol, 0.93)));
            let d = Sr(Math.abs(l) - Math.PI / 2, 0.4);
            (s.multiplyScalar(
              1 -
                0.12 * d * Sr(t - 0.73 * i, 0.05 * i) -
                0.05 * V(0.62 * i, 0.52 * i, t),
            ),
              c.tucked &&
                s.multiplyScalar(
                  1 - 0.12 * V(c.hemY + 0.08, c.hemY + 0.035, t),
                ));
          },
          skin: (e, n, r, i, a, o) =>
            Ut(t, p[Math.round(i * (p.length - 1))], n, o),
          kind:
            c.style === `police` || c.style === `rider`
              ? z.cloth
              : c.style === `blouse`
                ? z.satin
                : z.cloth,
          rough: c.style === `blouse` ? 0.55 : c.style === `rider` ? 0.6 : 0.88,
          tex: Jr(r, (e, t, n) => {
            let i = p[Math.round(e * (p.length - 1))];
            n[0] = ((i + Math.PI) / q) * d;
            let a = S > x ? (y[Math.round(t * b)].p - x) / (S - x) : 0;
            n[1] = xr(g(i), h(i), a) / r.tileM;
          }),
        },
      });
      let w = (e, n) => kr(t, e, n, c.off, c.loose);
      if (c.print !== `none` && e.lod === 0 && n !== `all`) {
        let t = hr(
          e,
          c.print,
          c.color2 === c.color
            ? Xr(c.color) > 0.5
              ? 1842210
              : 16052714
            : c.color2,
          c.color,
        );
        t &&
          (c.print === `school`
            ? Zr(e, w, 0.42, 0.14, 0.742 * i, 0.772 * i, t, z.cloth, 0.8, 2)
            : Zr(e, w, 0, 0.52, 0.64 * i, 0.77 * i, t, z.cloth, 0.85, 2));
      }
      if (
        e.lod === 0 &&
        (c.collar === `shirt` || c.collar === `polo`) &&
        n !== `all`
      ) {
        let t = gr(e, c.color, c.style === `police` ? 13214785 : 15855592),
          n = c.collar === `polo` ? 0.745 * i : c.hemY + 0.01;
        if (
          (t && Zr(e, w, 0, 0.07, n, c.neckF - 0.004, t, z.cloth, 0.85, 2),
          c.style === `uniform` || c.style === `police` || c.style === `shirt`)
        ) {
          let t = vr(e, c.color, K(c.color, 0.8), `chest`);
          t && Zr(e, w, -0.48, 0.3, 0.7 * i, 0.745 * i, t, z.cloth, 0.85, 2);
        }
      }
      if (e.lod === 0 && c.style === `hoodie` && n !== `all`) {
        let t = vr(e, c.color, K(c.color, 0.75), `pouch`);
        t && Zr(e, w, 0, 0.95, c.hemY + 0.04, 0.6 * i, t, z.cloth, 0.9, 2);
      }
      let T =
        r.rect &&
        c.pattern &&
        c.pattern !== `solid` &&
        c.pattern !== `knit` &&
        c.pattern !== `denim`
          ? c.color
          : r.vcol;
      (n !== `all` || c.collar === `hood`) &&
        ei(e, c.collar, c, w, h, T, c.color2);
    }
  }
  if (l && l.style !== `poncho`) {
    let r = fr(e, l.pattern, l.color, l.patternColor),
      c = r.rect ? yr(0.17, r.tileM) : 1,
      d = l.gap,
      p = s,
      m;
    if (d > 0) {
      let e = o;
      ((p = [d, d]), (m = [0, 1]));
      for (let t = 1; t < e; t++)
        (p.push(d + (t / e) * (q - 2 * d)), m.push(1));
      (p.push(q - d, q - d), m.push(1, 0));
    }
    let h = (e) =>
        d +
        (l.collar === `lapel` || l.collar === `v`
          ? 0.35 * V(0.66 * i, 0.83 * i, e)
          : 0.05 * V(0.78 * i, 0.84 * i, e)),
      g = Vr(
        Br(
          a.map((e) => e * i),
          l.hemY,
          l.neckY,
          f,
        ),
        !0,
        !0,
        l.ribHem ? 0.008 : 0,
        0,
      ),
      _ = g.length - 1,
      v = (e, r) => {
        let i =
          r < u.waistY + 0.01 && !u.skirt
            ? kr(t, e, r, u.off + 0.004, 0)
            : Vt(t, e, r, !0);
        return n.top && r >= n.top.hemY - 0.005
          ? Math.max(i, kr(t, e, r, n.top.off, n.top.loose))
          : i;
      },
      y = (e, n) => kr(t, e, n, l.off, l.loose),
      b = (e, t) => {
        if (d <= 0) return p[e];
        let n = h(t);
        return n + ((p[e] - d) / (q - 2 * d)) * (q - 2 * n);
      },
      x = p.length - 1,
      S = (e) =>
        l.hemY + (l.style === `blazer` ? 0.03 * i * Sr(Cr(e, 0), 0.5) * 0 : 0);
    if (
      (e.m.grid(
        {
          nu: x,
          nv: _,
          closed: !1,
          point: (e, n, r) => {
            let i = Math.round(e * x),
              a = Math.round(n * _),
              o = g[a],
              s = o.p === g[0].p ? S(p[i]) : o.p,
              c = b(i, s),
              l = o.k * (m ? m[i] : 1),
              u = y(c, s) - (o.tight ?? 0),
              d = l >= 1 ? u : xr(v(c, s) - 0.001, u, l);
            return r.set(Math.sin(c) * d, s, H(t, s) - Math.cos(c) * d);
          },
          invert: !0,
        },
        {
          color: (e, t, n, a, o, s) => {
            let c = Math.round(a * x),
              u = Math.round(o * _),
              d = b(c, t),
              f = l.ribHem && t < l.hemY + 0.05;
            (s.setHex(f ? l.color2 : r.vcol),
              m && m[c] === 0 && s.setHex(K(r.vcol, 0.8)),
              (u === 0 || u === _) && s.setHex(K(r.vcol, 0.82)));
            let p = Sr(Math.abs(Cr(d, 0)) - Math.PI / 2, 0.4);
            (s.multiplyScalar(1 - 0.14 * p * Sr(t - 0.72 * i, 0.06 * i)),
              (l.style === `bomber` || l.style === `windbreaker`) &&
                s.multiplyScalar(
                  1 -
                    0.05 * Math.abs(Math.sin((t / (0.07 * i)) * Math.PI)) ** 6,
                ));
          },
          skin: (e, n, r, i, a, o) => Ut(t, b(Math.round(i * x), n), n, o),
          kind:
            l.style === `bomber` || l.style === `windbreaker`
              ? z.satin
              : z.cloth,
          rough:
            l.style === `bomber`
              ? 0.5
              : l.style === `windbreaker`
                ? 0.45
                : 0.85,
          tex: Jr(r, (e, t, n) => {
            let i = Math.round(e * x),
              a = g[Math.round(t * _)].p;
            ((n[0] = (b(i, a) / q) * c), (n[1] = a / r.tileM));
          }),
        },
      ),
      e.lod === 0 && d === 0 && l.style !== `vest` && l.style !== `gakuran`)
    ) {
      let t = _r(e, K(l.color, 0.8), 12172482);
      t &&
        Zr(e, y, 0, 0.05, l.hemY + 0.005, l.neckY - 0.006, t, z.cloth, 0.6, 2);
    }
    if (l.print !== `none` && e.lod === 0) {
      let t = hr(e, l.print, l.color2, l.color);
      t && Zr(e, y, Math.PI, 1.05, 0.6 * i, 0.8 * i, t, z.cloth, 0.7, 2);
    }
    if (l.style === `vest`) {
      for (let t of [0.63 * i, 0.705 * i]) Qr(e, y, t, 0.022, 14673642);
      if (e.lod === 0) {
        let t = hr(e, `police`, 15922679, l.color);
        t &&
          e.desc.top.style === `police` &&
          Zr(e, y, Math.PI, 0.9, 0.735 * i, 0.8 * i, t, z.reflect, 0.5, 2);
      }
    }
    l.collar !== `none` && ni(e, l, y);
  } else l && l.style === `poncho` && ri(e, l);
}
function Xr(e) {
  return (
    (0.299 * ((e >> 16) & 255) + 0.587 * ((e >> 8) & 255) + 0.114 * (e & 255)) /
    255
  );
}
function Zr(e, t, n, r, i, a, o, s, c, l) {
  let u = e.b,
    d = Math.max(2, Math.ceil(r / 0.2)),
    f = Math.max(2, Math.ceil((a - i) / 0.09));
  e.m.grid(
    {
      nu: d,
      nv: f,
      closed: !1,
      point: (e, o, s) => {
        let c = n + (e - 0.5) * r,
          l = xr(i, a, o),
          d = t(c, l) + 0.0016;
        return s.set(Math.sin(c) * d, l, H(u, l) - Math.cos(c) * d);
      },
      invert: !0,
    },
    {
      color: 16777215,
      skin: (e, t, i, a, o, s) => Ut(u, n + (a - 0.5) * r, t, s),
      kind: s,
      rough: c,
      tex: {
        rect: o,
        mode: l,
        uv: (e, t, n, r, i, a) => ((a[0] = 1 - r), (a[1] = i)),
      },
    },
  );
}
function Qr(e, t, n, r, i) {
  let a = e.b,
    o = e.nT;
  e.m.grid(
    {
      nu: o,
      nv: 1,
      closed: !0,
      point: (e, i, o) => {
        let s = e * q,
          c = n + (i - 0.5) * r,
          l = t(s, c) + 0.0015;
        return o.set(Math.sin(s) * l, c, H(a, c) - Math.cos(s) * l);
      },
      invert: !0,
    },
    {
      color: i,
      skin: (e, t, n, r, i, o) => Ut(a, r * q, t, o),
      kind: z.reflect,
      rough: 0.4,
      emissive: 1,
    },
  );
}
function $r(e, t, n, r) {
  let i = e.b,
    a = 0.032 * i.s;
  e.m.grid(
    {
      nu: e.nT,
      nv: 3,
      closed: !0,
      point: (e, n, o) => {
        let s = e * q,
          c = Math.round(n * 3),
          l = t + (c < 2 ? -0.5 : 0.5) * a,
          u = Vt(i, s, l, !0) + r + (c === 0 || c === 3 ? 0 : 0.004);
        return o.set(Math.sin(s) * u, l, H(i, l) - Math.cos(s) * u);
      },
      invert: !0,
    },
    {
      color: n,
      skin: (e, t, n, r, a, o) => Ut(i, r * q, t, o),
      kind: z.gloss,
      rough: 0.45,
    },
  );
  let o = Vt(i, 0, t, !0) + r + 0.006,
    s = new T(0.045 * i.s, a * 1.15, 0.006);
  e.m.geo(s, new d().makeTranslation(0, t, H(i, t) - o), {
    color: 13157044,
    skin: L.hips,
    kind: z.metal,
    rough: 0.3,
  });
}
function ei(e, t, n, r, i, a, o) {
  let s = e.b,
    c = s.H,
    l = e.lod === 0 ? 16 : 8;
  if (t === `crew` || t === `rib` || t === `high`) {
    let r = t === `high` ? 0.05 * s.s : 0.012 * s.s,
      c = mr(e, n.rib || t !== `crew` ? o : a, a, !1);
    e.m.grid(
      {
        nu: l,
        nv: 2,
        closed: !0,
        point: (e, n, a) => {
          let o = e * q - Math.PI,
            c = i(o),
            l = Math.round(n * 2),
            u = c + (l === 0 ? -0.004 : l === 1 ? r * 0.6 : r),
            d =
              (t === `high`
                ? Math.max(s.neckR * 1.18, Vt(s, o, c) * 0.9)
                : Vt(s, o, c)) +
              (t === `high` ? 0.008 : 0.004) +
              (l === 2 ? -0.001 : 0.002);
          return a.set(Math.sin(o) * d, u, H(s, c) - Math.cos(o) * d);
        },
        invert: !0,
      },
      {
        color: n.rib || t !== `crew` ? o : K(a, 0.94),
        skin: (e, t, n, r, i, a) => Ut(s, r * q - Math.PI, t, a),
        kind: z.cloth,
        rough: 0.9,
        tex: c
          ? {
              rect: c,
              mode: 1,
              uv: (e, t, n, r, i, a) => ((a[0] = r * 6), (a[1] = i)),
            }
          : void 0,
      },
    );
    return;
  }
  if (t === `shirt` || t === `polo`) {
    let o = (t === `polo` ? 0.022 : 0.028) * s.s,
      u = (t === `polo` ? 0.034 : 0.04) * s.s,
      d = 0.16,
      f = l,
      p = t === `polo` && n.color2 !== n.color ? n.color2 : a;
    e.m.grid(
      {
        nu: f,
        nv: 3,
        closed: !1,
        point: (e, t, n) => {
          let a = Cr(d + e * (q - 2 * d) - 0, 0),
            l = Math.max(0, Math.cos(a)),
            f = i(a) + 0.002,
            p = Math.max(s.neckR + 0.006, Vt(s, a, f) * 0.92),
            m = Math.round(t * 3),
            h = p,
            g = f;
          if (m === 1) ((g = f + o), (h = p + 0.002));
          else if (m === 2) ((g = f + o + 0.004), (h = p + 0.009));
          else if (m === 3) {
            let e = Sr(Math.abs(a) - d, 0.25);
            ((g = f + o - u * (1 + 0.8 * e) + 0.004),
              (h = r(a, Math.max(g, 0.78 * c)) + 0.004 + 0.012 * l));
          }
          return n.set(Math.sin(a) * h, g, H(s, f) - Math.cos(a) * h);
        },
        invert: !1,
      },
      {
        color: (e, t, n, r, i, a) =>
          a.setHex(Math.round(i * 3) === 0 ? K(p, 0.8) : p),
        skin: (e, t, n, r, i, a) => {
          (Ut(s, Cr(d + r * (q - 2 * d), 0), t, a), Ct(a, L.neck, 0.3));
        },
        kind: z.cloth,
        rough: 0.85,
      },
    );
    return;
  }
  t === `hood` && ti(e, n, r, i, a);
}
function ti(e, t, n, r, i) {
  let a = e.b,
    o = e.lod === 0 ? 14 : 7,
    s = e.lod === 0 ? 8 : 4,
    c = K(i, 0.7);
  if (
    (e.m.grid(
      {
        nu: o,
        nv: s,
        closed: !0,
        point: (e, t, n) => {
          let i = t * 2 - 1,
            o = Math.PI + i * 2.3 * 0.5,
            s = Math.cos(i * Math.PI * 0.5),
            c = r(o) + 0.004,
            l = (0.018 + 0.038 * s) * a.s,
            u = e * q,
            d =
              Math.max(a.neckR + 0.02, Vt(a, o, c) * 0.95) +
              l * 0.9 +
              Math.cos(u) * l,
            f = c + Math.sin(u) * l * 0.55 - s * 0.03 * a.s;
          return n.set(Math.sin(o) * d, f, H(a, c) - Math.cos(o) * d);
        },
      },
      {
        color: (e, t, n, r, a, o) => o.setHex(r < 0.25 ? c : i),
        skin: (e, t, n, r, i, a) => {
          B(a, L.chest, L.neck, 0.25);
        },
        kind: z.cloth,
        rough: 0.92,
      },
    ),
    e.lod === 0)
  )
    for (let t of [-1, 1]) {
      let i = t * 0.28,
        o = r(i) - 0.005,
        s = n(i, o) + 0.004,
        c = 0.16 * a.s,
        l = new C(0.0022, 0.0022, c, 4, 1, !1),
        u = new d().makeTranslation(
          Math.sin(i) * s,
          o - c / 2,
          H(a, o) - Math.cos(i) * s - 0.004,
        );
      e.m.geo(l, u, {
        color: 15855592,
        skin: L.chest,
        kind: z.cloth,
        rough: 0.8,
      });
    }
}
function ni(e, t, n) {
  let r = e.b,
    i = e.lod === 0 ? 16 : 8;
  if (t.collar === `rib` || t.collar === `high`) {
    let n = (t.collar === `high` ? 0.055 : 0.028) * r.s,
      a = t.gap > 0 ? t.gap + 0.08 : 0;
    e.m.grid(
      {
        nu: i,
        nv: 2,
        closed: a === 0,
        point: (e, i, o) => {
          let s = a + e * (q - 2 * a),
            c = Math.round(i * 2),
            l = t.neckY - 0.01,
            u = l + (c === 0 ? 0 : c === 1 ? n * 0.6 : n),
            d =
              Math.max(r.neckR + 0.012, Vt(r, s, l) * 0.95) +
              (c === 0 ? 0.012 : 0.009) +
              t.off * 0.4;
          return o.set(Math.sin(s) * d, u, H(r, l) - Math.cos(s) * d);
        },
        invert: !0,
      },
      {
        color: t.color2,
        skin: (e, t, n, r, i, a) => (B(a, L.chest, L.neck, 0.35), void 0),
        kind: z.cloth,
        rough: 0.85,
      },
    );
    return;
  }
  if (t.collar === `lapel` || t.collar === `v`) {
    let i = r.H;
    for (let a of [-1, 1])
      e.m.grid(
        {
          nu: 1,
          nv: 4,
          closed: !1,
          point: (e, o, s) => {
            let c = xr(0.66 * i, t.neckY + 0.005, o),
              l = t.gap + 0.35 * V(0.66 * i, 0.83 * i, c),
              u =
                t.collar === `lapel`
                  ? (0.06 + 0.4 * Math.sin(o * Math.PI * 0.85)) * 0.5
                  : 0.08,
              d = a * (l + e * u),
              f = n(d, c) + 0.004 + 0.003 * (1 - e);
            return s.set(Math.sin(d) * f, c, H(r, c) - Math.cos(d) * f);
          },
          invert: a > 0,
        },
        {
          color: K(t.color, 0.92),
          skin: (e, t, n, i, o, s) => Ut(r, a * 0.4, t, s),
          kind: z.cloth,
          rough: 0.8,
        },
      );
  }
}
function ri(e, t) {
  let n = e.b,
    r = n.H,
    i = e.lod === 0 ? 16 : 8,
    a =
      e.lod === 0
        ? [0.86, 0.835, 0.8, 0.74, 0.64, 0.54, 0.46, 0.44]
        : [0.86, 0.81, 0.7, 0.55, 0.44],
    o = a.length - 1,
    s = (e, t) => {
      let i = t * r,
        a = V(0.86 * r, 0.79 * r, i),
        o =
          xr(
            n.neckR + 0.02,
            0.3 * n.s * (0.8 + 0.2 * Math.abs(Math.sin(e))),
            a,
          ) + (0.79 * r - i > 0 ? (0.79 * r - i) * 0.25 : 0);
      return Math.max(o, Vt(n, e, Math.max(i, n.torsoBottom), !0) + 0.04);
    };
  (e.m.grid(
    {
      nu: i,
      nv: o,
      closed: !0,
      point: (e, t, i) => {
        let c = e * q,
          l = a[Math.round(t * o)],
          u = l * r,
          d = s(c, l) * (1 + 0.03 * Math.sin(c * 7) * V(0.7, 0.44, l));
        return i.set(
          Math.sin(c) * d,
          u,
          H(n, Math.max(u, n.torsoBottom)) - Math.cos(c) * d,
        );
      },
    },
    {
      color: (e, n, i, a, o, s) =>
        s.setHex(K(t.color, 0.92 + 0.08 * V(0.5 * r, 0.8 * r, n))),
      skin: (e, t, n, i, a, o) => {
        B(o, L.chest, L.spine, V(0.75 * r, 0.55 * r, t));
        let s = Math.sin(i * q);
        Math.abs(s) > 0.6 &&
          t < 0.78 * r &&
          Ct(o, s > 0 ? L.armR : L.armL, 0.35 * V(0.78 * r, 0.6 * r, t));
      },
      kind: z.gloss,
      rough: 0.3,
      transparent: !1,
    },
  ),
    e.m.grid(
      {
        nu: i,
        nv: o,
        closed: !0,
        point: (e, t, i) => {
          let c = e * q,
            l = a[Math.round(t * o)],
            u = l * r,
            d =
              s(c, l) * (1 + 0.03 * Math.sin(c * 7) * V(0.7, 0.44, l)) - 0.004;
          return i.set(
            Math.sin(c) * d,
            u,
            H(n, Math.max(u, n.torsoBottom)) - Math.cos(c) * d,
          );
        },
        invert: !0,
      },
      { color: K(t.color, 0.6), skin: L.chest, kind: z.gloss, rough: 0.4 },
    ));
}
function ii(e) {
  let { b: t, fit: n, lod: r } = e,
    i = r === 0 ? Ir : Lr,
    a = e.nL,
    o = e.desc.skin,
    s = r === 0 ? 0.03 : 0.1,
    { top: c, outer: l } = n,
    u = l && l.sleeveT > 0 && l.style !== `poncho` ? l : null,
    d = c && c.sleeveT > 0 ? c : null,
    f = e.desc.acc.find((e) => e.kind === `armSleeves`);
  for (let n of t.arms) {
    let t = n.side,
      c = n.tMin;
    if (u) {
      let r = fr(e, u.pattern, u.color, u.patternColor),
        o = u.sleeveT,
        l = Br(i, n.tMin, o, s),
        f = u.style === `bomber` || u.style === `cropped` ? 0.006 : 0,
        p = Vr(l, !1, !0, 0, f),
        m =
          d && d.sleeveT >= o - 0.05
            ? (e, t) => Mr(n, e, t, d.off, d.loose, 0, 1, 0)
            : (e, t) => Rt(n, e, t) - 0.001,
        h = r.rect ? yr(0.06, r.tileM) : 1;
      (qr(
        e,
        {
          limb: n,
          rows: p,
          R:
            u.style === `happi`
              ? (e, t) => Mr(n, e, t, u.off * 0.8, u.loose, 0.3, 0.95, 0.045)
              : (e, t) => Mr(n, e, t, u.off * 0.8, u.loose, 1.4, 1.9, 0.004),
          Ru: m,
          attrs: {
            color: (e, n, i, a, s, c) => {
              let l = p[Math.round(s * (p.length - 1))].p;
              (c.setHex(f && l > o - 0.12 ? u.color2 : r.vcol),
                oi(c, a, t, l),
                u.style === `bomber` &&
                  c.multiplyScalar(1 - 0.05 * Math.abs(Math.sin(l * 7)) ** 6));
            },
            skin: (e, t, r, i, a, o) =>
              Wt(n, p[Math.round(a * (p.length - 1))].p, o),
            kind:
              u.style === `bomber` || u.style === `windbreaker`
                ? z.satin
                : z.cloth,
            rough: u.style === `bomber` ? 0.5 : 0.85,
            tex: Jr(
              r,
              (e, t, n) => (
                (n[0] = e * h),
                (n[1] = (p[Math.round(t * (p.length - 1))].p * 0.3) / r.tileM)
              ),
            ),
          },
        },
        a,
      ),
        (c = o - 0.06),
        d &&
          d.sleeveT > o + 0.05 &&
          (si(e, n, d, o - 0.05, d.sleeveT), (c = d.sleeveT - 0.06)));
    } else d && (si(e, n, d, n.tMin, d.sleeveT), (c = d.sleeveT - 0.06));
    let l = f && r === 0 ? Math.max(c + 0.02, 0.55) : 9,
      p = l < 9 ? l + 0.08 : 1.99;
    if (c < p - 0.05) {
      let l = Br(i, c, p, s).map((e) => ({ p: e, k: 1 }));
      if (
        (qr(
          e,
          {
            limb: n,
            rows: l,
            R: (e, t) => Rt(n, e, t),
            Ru: (e, t) => Rt(n, e, t),
            attrs: {
              color: (e, n, i, a, s, c) => {
                let u = l[Math.round(s * (l.length - 1))].p;
                (c.setHex(f && r === 1 && u > 0.6 ? (f.color ?? 15921906) : o),
                  Math.abs(u - 1) < 0.1 && c.multiply(ai),
                  oi(c, a, t, u, -0.04));
              },
              skin: (e, t, r, i, a, o) =>
                Wt(n, l[Math.round(a * (l.length - 1))].p, o),
              kind: z.skin,
              rough: 0.6,
            },
          },
          a,
        ),
        f && r === 0)
      ) {
        let r = Vr(Br(Lr, Math.max(c + 0.02, 0.55), 1.96, s), !0, !0, 0, 0);
        qr(
          e,
          {
            limb: n,
            rows: r,
            R: (e, t) => Rt(n, e, t) + 0.004 + 0.004 * Sr(t - 1.95, 0.08),
            Ru: (e, t) => Rt(n, e, t) - 0.001,
            attrs: {
              color: (e, n, i, a, o, s) => {
                (s.setHex(f.color ?? 15921906),
                  oi(s, a, t, r[Math.round(o * (r.length - 1))].p));
              },
              skin: (e, t, i, a, o, s) =>
                Wt(n, r[Math.round(o * (r.length - 1))].p, s),
              kind: z.satin,
              rough: 0.55,
            },
          },
          a,
        );
      }
    }
  }
}
var ai = new u(1.03, 0.97, 0.95);
function oi(e, t, n, r, i = 0.1) {
  let a = Math.sin(t * q) * n;
  e.multiplyScalar(1 - i * Math.max(0, -a) * (r < 1.1 ? 1 : 0.5));
}
function si(e, t, n, r, i) {
  let a = e.lod === 0 ? Ir : Lr,
    o = e.lod === 0 ? 0.03 : 0.1,
    s = fr(e, n.pattern, n.color, n.patternColor),
    c = Br(a, r, i, o),
    l = i > 1.8,
    u = l && n.rib ? 0.006 : 0,
    d = Vr(c, !1, !0, 0, u),
    f = l
      ? 0.002
      : n.style === `blouse`
        ? 0.014
        : n.style === `yukata`
          ? 0.05
          : 0.009,
    p = s.rect ? yr(0.06, s.tileM) : 1,
    m = d.length - 1;
  qr(
    e,
    {
      limb: t,
      rows: d,
      R: (e, a) => Mr(t, e, a, n.off, n.loose * 0.8, l ? 1.4 : r + 0.2, i, f),
      Ru: (e, n) => Rt(t, e, n) - 0.001,
      attrs: {
        color: (e, r, a, o, c, f) => {
          let p = Math.round(c * m);
          if (
            (f.setHex(
              p === m
                ? K(s.vcol, 0.8)
                : u && d[p].p > i - 0.1
                  ? K(n.color2, 0.95)
                  : s.vcol,
            ),
            l)
          ) {
            let e = o * q,
              n =
                Math.max(0, Math.cos(e)) * 0.6 +
                Math.max(0, -Math.sin(e) * t.side) * 0.4;
            f.multiplyScalar(
              1 -
                0.18 * n * Sr(d[p].p - 1, 0.08) -
                0.07 * Sr(d[p].p - 1.78, 0.1),
            );
          }
          oi(f, o, t.side, d[p].p);
        },
        skin: (e, n, r, i, a, o) => Wt(t, d[Math.round(a * m)].p, o),
        kind: n.style === `blouse` ? z.satin : z.cloth,
        rough: n.style === `blouse` ? 0.55 : 0.88,
        tex: Jr(
          s,
          (e, t, n) => (
            (n[0] = e * p),
            (n[1] = (d[Math.round(t * m)].p * 0.3) / s.tileM)
          ),
        ),
      },
    },
    e.nL,
  );
}
function ci(e) {
  let { b: t, fit: n, lod: r } = e,
    i = r === 0 ? Rr : zr,
    a = e.nL,
    o = e.desc.skin,
    s = r === 0 ? 0.03 : 0.1,
    { bottom: c } = n,
    l = Math.min(2, n.shoeT);
  for (let r of t.legs) {
    let t = r.side,
      u = r.tMin;
    if (c.legT > 0) {
      let n = fr(e, c.pattern, c.color, c.patternColor),
        o = Math.min(c.legT, l + 0.02),
        d = Br(i, r.tMin, o, s),
        f = c.style === `track` ? 0.008 : 0,
        p = Vr(d, !1, o < 1.99, 0, f),
        m = p.length - 1,
        h = n.rect ? yr(0.08, n.tileM) : 1;
      (qr(
        e,
        {
          limb: r,
          rows: p,
          R: (e, t) => Nr(r, e, t, c.off, c.loose, c.flare),
          Ru: (e, t) => Rt(r, e, t) - 0.001,
          attrs: {
            color: (e, r, i, a, s, l) => {
              let u = Math.round(s * m),
                d = p[u].p,
                f = a * q;
              l.setHex(n.vcol);
              let h = Math.sin(f) * t;
              if (
                (l.multiplyScalar(
                  1 -
                    0.18 * Math.max(0, -h) * V(0.5, 0, d) -
                    (u === m && o < 1.99 ? 0.25 : 0),
                ),
                c.pattern === `denim`)
              ) {
                let e = Math.max(0, Math.cos(f));
                l.multiplyScalar(
                  1 +
                    0.22 * e * Sr(d - 0.4, 0.3) +
                    0.15 * e * Sr(d - 1, 0.12) -
                    0.08 * Math.max(0, -h),
                );
              }
              c.style === `slacks` &&
                Math.abs(Cr(f, 0)) < 0.2 &&
                l.multiplyScalar(1.06);
              let g = Math.max(0, -Math.cos(f));
              (l.multiplyScalar(
                1 -
                  0.16 * g * Sr(d - 1.02, 0.07) -
                  0.06 * Math.max(0, Math.cos(f)) * Sr(d - 0.12, 0.08),
              ),
                o > 1.8 &&
                  d > 1.62 &&
                  l.multiplyScalar(
                    1 -
                      0.1 *
                        Math.abs(Math.sin((d - 1.62) * 26 + f * 2)) *
                        V(1.62, 1.8, d),
                  ),
                c.style === `track` &&
                  Math.abs(Cr(f, t > 0 ? Math.PI / 2 : -Math.PI / 2)) < 0.3 &&
                  l.setHex(c.color2));
            },
            skin: (e, t, n, i, a, o) => Wt(r, p[Math.round(a * m)].p, o),
            kind: z.cloth,
            rough: 0.88,
            tex: Jr(
              n,
              (e, t, r) => (
                (r[0] = e * h),
                (r[1] = (p[Math.round(t * m)].p * 0.42) / n.tileM)
              ),
            ),
          },
        },
        a,
      ),
        (u = o - 0.06));
    }
    if (u < l - 0.04) {
      let d = n.socks ? Math.max(u + 0.02, n.socks.topT) : 9,
        f = [];
      d < l
        ? (d > u + 0.05 && f.push([u, d + 0.01, o, z.skin]),
          f.push([Math.max(u, d - 0.01), l, n.socks.color, z.cloth]))
        : f.push([u, l, o, z.skin]);
      for (let [n, o, l, u] of f) {
        let d = Br(i, n, o, s).map((e) => ({ p: e, k: 1 })),
          f = u === z.cloth,
          p = d.length - 1;
        qr(
          e,
          {
            limb: r,
            rows: d,
            R: (e, t) =>
              Rt(r, e, t) +
              (f ? 0.002 + (t < n + 0.05 ? 0.001 : 0) : 0) +
              (c.style, 0),
            Ru: (e, t) => Rt(r, e, t),
            attrs: {
              color: (e, r, i, a, o, s) => {
                let c = d[Math.round(o * p)].p;
                (s.setHex(l),
                  !f && Math.abs(c - 1) < 0.12 && s.multiply(ai),
                  f &&
                    d[Math.round(o * p)].p < n + 0.04 &&
                    s.multiplyScalar(0.92),
                  oi(s, a, t, c, 0.06));
              },
              skin: (e, t, n, i, a, o) => Wt(r, d[Math.round(a * p)].p, o),
              kind: u,
              rough: f ? 0.9 : 0.6,
            },
          },
          a,
        );
      }
    }
  }
  c.skirt && ui(e);
}
function li(e) {
  let { b: t, fit: n } = e,
    r = n.bottom.skirt,
    i = n.bottom,
    a = n.top,
    o = a && !a.tucked ? Math.min(i.waistY, a.hemY + 0.03) : i.waistY,
    s = r.hemY,
    c = r.pleats,
    l = t.legs[1].a.x,
    u = t.torsoBottom,
    d = (e, n) => {
      let r = Math.max(
          0,
          (t.legs[1].a.y - n) / (t.legs[1].a.y - t.legs[1].b.y),
        ),
        i = Rt(t.legs[1], Math.PI / 2, Math.min(1.2, r)) + 0.012,
        a = l + i,
        o = i * 1.12,
        s = Math.sin(e),
        c = Math.cos(e);
      return 1 / Math.sqrt((s / a) ** 2 + (c / o) ** 2);
    },
    f = Ar(n);
  return (e, n) => {
    let a = n > u ? kr(t, e, n, i.off + 0.004, 0.3) : 0,
      l = Math.max(
        a,
        d(e, n),
        n < u + 0.06 ? kr(t, e, u + 0.06, i.off + 0.004, 0.3) * 0.98 : 0,
      ),
      p = Math.max(0, t.H * 0.56 - n),
      m = l + r.flare * p;
    if (c) {
      let r = ((((e / q) * c) % 1) + 1) % 1;
      m += (Math.abs(r - 0.5) * 2 - 0.5) * 0.012 * V(o, s, n) * t.s;
    }
    return jr(t, f, e, n, m);
  };
}
function ui(e) {
  let { b: t, fit: n, lod: r } = e;
  t.H;
  let i = n.bottom.skirt,
    a = n.bottom,
    o = n.top,
    s = o && !o.tucked ? Math.min(a.waistY, o.hemY + 0.03) : a.waistY,
    c = i.hemY,
    l = i.pleats,
    u = l ? (r === 0 ? l * 2 : l) : e.nT,
    d =
      r === 0
        ? Math.max(4, Math.ceil((s - c) / 0.065))
        : Math.max(2, Math.ceil((s - c) / 0.15)),
    f = fr(e, a.pattern, a.color, a.patternColor),
    p = t.torsoBottom,
    m = li(e),
    h = [];
  h.push({ y: s, k: 1 });
  for (let e = 1; e < d; e++) h.push({ y: xr(s, c, e / d), k: 1 });
  (h.push({ y: c, k: 1 }), h.push({ y: c + 0.004, k: 0.9 }));
  let g = h.length - 1,
    _ = f.rect ? yr(0.18, f.tileM) : 1;
  (e.m.grid(
    {
      nu: u,
      nv: g,
      closed: !0,
      point: (e, n, r) => {
        let i = h[Math.round(n * g)],
          a = e * q,
          o = m(a, i.y) * i.k + (i.k, 0);
        return r.set(
          Math.sin(a) * o,
          i.y,
          H(t, Math.max(i.y, p)) - Math.cos(a) * o,
        );
      },
    },
    {
      color: (e, t, n, r, i, a) => {
        let o = Math.round(i * g);
        if ((a.setHex(o >= g - 1 ? K(f.vcol, 0.55) : f.vcol), l)) {
          let e = (((r * l) % 1) + 1) % 1;
          a.multiplyScalar(e < 0.5 ? 1 : 0.86);
        }
        a.multiplyScalar(1 - 0.08 * V(s - 0.05, s, t));
      },
      skin: (e, t, n, r, i, a) => {
        let o = r * q,
          s = V(p + 0.05, c, t);
        B(a, L.hips, L.hips, 0);
        let l = 0.5 + 0.5 * Math.max(-1, Math.min(1, Math.sin(o) * 2.5));
        (Ct(a, L.thighR, 0.55 * s * l), Ct(a, L.thighL, 0.55 * s * (1 - l)));
      },
      kind: z.cloth,
      rough: 0.85,
      tex: Jr(
        f,
        (e, t, n) => (
          (n[0] = e * _),
          (n[1] = h[Math.round(t * g)].y / f.tileM)
        ),
      ),
    },
  ),
    e.m.grid(
      {
        nu: Math.max(8, u >> 1),
        nv: 2,
        closed: !0,
        point: (e, n, r) => {
          let i = xr(c + 0.004, xr(c, s, 0.5), n),
            a = e * q,
            o = m(a, i) - 0.005;
          return r.set(
            Math.sin(a) * o,
            i,
            H(t, Math.max(i, p)) - Math.cos(a) * o,
          );
        },
      },
      {
        color: K(f.vcol, 0.45),
        skin: (e, t, n, r, i, a) => {
          let o = r * q,
            s = V(p + 0.05, c, t);
          B(a, L.hips, L.hips, 0);
          let l = 0.5 + 0.5 * Math.max(-1, Math.min(1, Math.sin(o) * 2.5));
          (Ct(a, L.thighR, 0.55 * s * l), Ct(a, L.thighL, 0.55 * s * (1 - l)));
        },
        kind: z.cloth,
        rough: 0.9,
      },
    ));
  let v = !!n.outer && n.outer.gap === 0 && n.outer.hemY < a.waistY - 0.02;
  n.bottom.belt &&
    (!o || o.tucked) &&
    !v &&
    $r(e, a.waistY - 0.012, n.bottom.belt, a.off + 0.006);
}
var di = Math.PI * 2,
  fi = (e, t, n) => e + (t - e) * n;
function pi(e, t, n, r, i) {
  let a = Math.sin(e),
    o = Math.cos(e);
  ((i[0] = t * Math.sign(a) * Math.abs(a) ** (2 / r)),
    (i[1] = n * Math.sign(o) * Math.abs(o) ** (2 / r)));
}
function mi(e) {
  let { b: t, m: n, lod: r } = e,
    i = e.desc.skin,
    a = t.joints.p,
    o = t.s * (t.female ? 0.93 : 1) * (t.student ? 0.95 : 1),
    s = F(i, 16771296, 0.45),
    c = K(i, 0.94),
    l = F(i, 15245456, 0.12),
    u = [0, 0];
  for (let e of [-1, 1]) {
    let t = e < 0 ? L.handL : L.handR,
      d = e < 0 ? L.fingersL : L.fingersR,
      f = a[t],
      p = a[d],
      m = new D().subVectors(p, f).normalize(),
      h = new D(e, 0, 0),
      g = new D().crossVectors(m, h).normalize();
    (g.z > 0 && g.negate(),
      h.crossVectors(g, m).normalize().multiplyScalar(-1),
      h.x * e < 0 && h.negate());
    let _ = f.distanceTo(p),
      v =
        r === 0
          ? [
              [-0.25, 0.025, 0.0148],
              [0.1, 0.034, 0.0138],
              [0.6, 0.042, 0.0122],
              [1, 0.04, 0.0106],
            ]
          : [
              [-0.2, 0.027, 0.021],
              [0.5, 0.042, 0.017],
              [1, 0.04, 0.015],
            ],
      y = v.length - 1,
      b = {
        color: (e, t, n, r, a, o) => {
          let s = Math.round(a * y);
          (o.setHex(s === y ? c : i),
            Math.sin(r * di) < -0.3 && o.lerp(hi.setHex(l), 0.6));
        },
        skin: (n, r, i, a, o, s) => {
          let c = Math.round(o * y);
          c === 0
            ? B(s, e < 0 ? L.foreL : L.foreR, t, 0.5)
            : B(s, t, d, c === y ? 0.2 : 0);
        },
        kind: z.skin,
        rough: 0.62,
      };
    n.grid(
      {
        nu: 6,
        nv: y,
        closed: !0,
        point: (e, t, n) => {
          let r = v[Math.round(t * y)];
          pi(e * di, r[2] * o, r[1] * o, 2.6, u);
          let i =
            u[0] < 0
              ? u[0] * (1.12 + 0.12 * Math.max(0, u[1] / (r[1] * o)))
              : u[0];
          return n
            .copy(f)
            .addScaledVector(m, r[0] * _)
            .addScaledVector(h, i)
            .addScaledVector(g, u[1]);
        },
        invert: e < 0,
      },
      b,
    );
    let x = r === 0 ? 4 : 1,
      S =
        r === 0
          ? [
              [0.74, 0.074, 0.0088, 0.3],
              [0.25, 0.082, 0.0092, 0.36],
              [-0.24, 0.077, 0.0088, 0.42],
              [-0.72, 0.061, 0.0078, 0.5],
            ]
          : [[0, 0.078, 0.034, 0.25]],
      C = r === 0 ? [0, 0.52, 1] : [0, 0.6, 1],
      w = C.length - 1,
      T = r === 0 ? 5 : 6,
      E = new D(),
      O = new D(),
      k = new D();
    for (let a = 0; a < x; a++) {
      let [c, l, f, _] = S[a],
        v = l * o,
        y = f * o,
        b = (r === 0 ? 0.0068 : 0.012) * o,
        x = 0.041 * o - y,
        D = c * 0.06,
        A = (e, t) => {
          let n = _ * 0.55,
            r = _ * 1.05,
            i = Math.min(e, 0.52),
            a = Math.max(0, e - 0.52);
          return (
            t
              .copy(p)
              .addScaledVector(g, c * x)
              .addScaledVector(m, -0.012 * o * (1 - e)),
            O.copy(m)
              .multiplyScalar(Math.cos(n))
              .addScaledVector(h, -Math.sin(n))
              .addScaledVector(g, D)
              .normalize(),
            t.addScaledVector(O, i * v),
            a > 0 &&
              (O.copy(m)
                .multiplyScalar(Math.cos(n + r))
                .addScaledVector(h, -Math.sin(n + r))
                .addScaledVector(g, D)
                .normalize(),
              t.addScaledVector(O, a * v)),
            t
          );
        };
      n.grid(
        {
          nu: T,
          nv: w,
          closed: !0,
          cap1: !0,
          point: (e, t, n) => {
            let r = Math.round(t * w),
              i = C[r];
            (A(i, E),
              A(Math.min(1, i + 0.05), k)
                .sub(E)
                .normalize(),
              i >= 1 && A(0.95, k).sub(E).negate().normalize());
            let a = gi.copy(h).addScaledVector(k, -h.dot(k)).normalize(),
              o = _i.crossVectors(k, a).normalize();
            o.dot(g) < 0 && o.negate();
            let s = e * di,
              c = i >= 1 ? 0.62 : 1 - 0.18 * i;
            return (
              pi(s, b * c, y * c, 2.8, u),
              n.copy(E).addScaledVector(a, u[0]).addScaledVector(o, u[1])
            );
          },
          invert: e < 0,
        },
        {
          color: (e, t, n, a, o, c) => {
            let l = Math.round(o * w);
            c.setHex(i);
            let u = Math.sin(a * di);
            l >= w && u > 0.3 && r === 0
              ? c.setHex(s)
              : l === 0 && c.multiplyScalar(0.96);
          },
          skin: (e, n, r, i, a, o) =>
            B(o, t, d, V(0, 0.2, C[Math.round(a * w)])),
          kind: z.skin,
          rough: 0.6,
        },
      );
    }
    if (r === 0) {
      let e = f
          .clone()
          .addScaledVector(m, 0.36 * _)
          .addScaledVector(g, 0.022 * o)
          .addScaledVector(h, -0.007 * o),
        r = m
          .clone()
          .multiplyScalar(0.84)
          .addScaledVector(g, 0.4)
          .addScaledVector(h, -0.36)
          .normalize(),
        a = new D().crossVectors(r, h).normalize(),
        c = new D().crossVectors(a, r).normalize(),
        l = 0.056 * o,
        u = [
          [-0.25, 0.0125],
          [0.45, 0.0094],
          [1, 0.0078],
        ];
      n.grid(
        {
          nu: 5,
          nv: u.length - 1,
          closed: !0,
          cap1: !0,
          point: (t, n, i) => {
            let s = u[Math.round(n * (u.length - 1))],
              d = t * di,
              f = -0.01 * o * s[0] * s[0];
            return i
              .copy(e)
              .addScaledVector(r, s[0] * l)
              .addScaledVector(a, Math.cos(d) * s[1] * o)
              .addScaledVector(c, Math.sin(d) * s[1] * 0.9 * o + f);
          },
          invert: !0,
        },
        {
          color: (e, t, n, r, a, o) =>
            o.setHex(Math.round(a * 2) === 2 && Math.sin(r * di) > 0.3 ? s : i),
          skin: t,
          kind: z.skin,
          rough: 0.6,
        },
      );
    }
  }
}
var hi = new u(),
  gi = new D(),
  _i = new D(),
  vi = {
    sneaker: {
      hc: 0.098,
      hi: 0.075,
      ht: 0.05,
      sole: 0.028,
      w: 1.02,
      toe: 1,
      gloss: !1,
      open: !1,
    },
    dress: {
      hc: 0.08,
      hi: 0.066,
      ht: 0.036,
      sole: 0.014,
      w: 0.94,
      toe: 0.7,
      gloss: !0,
      open: !1,
    },
    loafer: {
      hc: 0.074,
      hi: 0.064,
      ht: 0.036,
      sole: 0.016,
      w: 0.96,
      toe: 0.8,
      gloss: !0,
      open: !1,
    },
    flat: {
      hc: 0.05,
      hi: 0.035,
      ht: 0.028,
      sole: 0.008,
      w: 0.95,
      toe: 0.8,
      gloss: !1,
      open: !0,
    },
    heel: {
      hc: 0.055,
      hi: 0.035,
      ht: 0.026,
      sole: 0.008,
      w: 0.9,
      toe: 0.6,
      gloss: !0,
      open: !0,
    },
    boot: {
      hc: 0.1,
      hi: 0.07,
      ht: 0.04,
      sole: 0.02,
      w: 1.1,
      toe: 0.9,
      gloss: !1,
      open: !1,
    },
    rainboot: {
      hc: 0.1,
      hi: 0.075,
      ht: 0.045,
      sole: 0.018,
      w: 1.12,
      toe: 1,
      gloss: !0,
      open: !1,
    },
  };
function yi(e) {
  let t = e.desc.shoes.style;
  if (t === `slipper` || t === `sandal`) {
    for (let n of [-1, 1]) (Ci(e, n), wi(e, n, t === `sandal`));
    return;
  }
  let n = vi[t] ?? vi.sneaker;
  for (let r of [-1, 1])
    (xi(e, r, n),
      (t === `boot` || t === `rainboot`) && Si(e, r, t === `rainboot`));
}
function bi(e, t) {
  let n = e.b,
    r = n.joints.p[t < 0 ? L.footL : L.footR],
    i = t * 0.09;
  return {
    A: r,
    fwd: new D(Math.sin(i), 0, -Math.cos(i)),
    right: new D(Math.cos(i), 0, Math.sin(i)),
    heelZ: 0.058 * n.s,
    len: n.footLen,
  };
}
function xi(e, t, n) {
  let { b: r, m: i, lod: a, desc: o } = e,
    s = r.s * (r.female ? 0.95 : 1),
    { A: c, fwd: l, right: u, heelZ: f, len: p } = bi(e, t),
    m = o.shoes.color,
    h = o.shoes.color2 ?? m,
    g =
      o.shoes.sole ??
      (n.gloss
        ? o.shoes.style === `rainboot`
          ? K(o.shoes.color, 0.8)
          : 4863014
        : 15855593),
    _ =
      a === 0
        ? [0, 0.07, 0.25, 0.45, 0.65, 0.82, 0.94, 1]
        : [0, 0.2, 0.55, 0.85, 1],
    v = _.length - 1,
    y = a === 0 ? 12 : 6,
    b = [0, 0],
    x = 0.047 * s * n.w,
    S = (e) => {
      let t = 0.62 + 0.38 * Math.sin(Math.min(1, e / 0.3) * Math.PI * 0.5),
        r =
          e > 0.75
            ? Math.max(0, 1 - (e - 0.75) / 0.25) ** (0.5 * n.toe + 0.2)
            : 1,
        i = 1 + 0.08 * Math.exp(-((e - 0.68) ** 2) / 0.02);
      return x * t * Math.max(0.12, r) * i;
    },
    C = (e) => {
      let t =
          e < 0.3
            ? n.hc
            : e < 0.62
              ? fi(n.hc, n.hi, (e - 0.3) / 0.32)
              : fi(n.hi, n.ht, (e - 0.62) / 0.38),
        r =
          e < 0.04
            ? 0.75 + 6 * e
            : e > 0.95
              ? Math.max(0.25, 1 - (e - 0.95) * 14)
              : 1;
      return t * s * r;
    },
    w = (e) => -t * 0.006 * s * Math.sin(e * Math.PI),
    E = (e, t, r) => {
      let i = _[Math.round(t * v)],
        a = e * di,
        o = S(i),
        d = C(i);
      pi(a, o, 1, 3.4, b);
      let m = 0.5 - 0.5 * b[1],
        h = m * d;
      b[0] *= 1 - 0.3 * (Math.max(0, m - 0.25) / 0.75) ** 1.6;
      let g = -f + i * p,
        y = i > 0.85 ? (i - 0.85) * 0.05 * s : 0;
      return r
        .set(c.x, 0, c.z)
        .addScaledVector(u, w(i) + b[0])
        .addScaledVector(l, g)
        .setY(h + y + (n.gloss && n.hc < 0.06 && i < 0.25 && b[1], 0));
    },
    O = o.shoes.style,
    k = lr(e, `shoe:${O}:${m}:${h}:${g}`, 256, 128, !1, Ke(O, m, h, g, n.open));
  if (
    (i.grid(
      { nu: y, nv: v, closed: !0, cap0: !0, cap1: !0, point: E, invert: !0 },
      {
        tex: k
          ? {
              rect: k,
              mode: 0,
              uv: (e, t, n, r, i, a) => {
                ((a[0] = _[Math.round(i * v)]), (a[1] = 1 - r));
              },
            }
          : void 0,
        color: (e, t, r, i, c, l) => {
          let u = _[Math.round(c * v)];
          pi(i * di, 1, 1, 2.8, b);
          let d = 0.5 - 0.5 * b[1],
            f = C(u);
          (t < n.sole * s * 0.95 || (d < 0.2 && f > 0)
            ? l.setHex(g)
            : l.setHex(m),
            !n.gloss &&
              !n.open &&
              t > n.sole * s &&
              Math.abs(b[0]) > 0.7 &&
              u > 0.3 &&
              u < 0.62 &&
              d > 0.3 &&
              d < 0.62 &&
              l.setHex(h),
            !n.gloss && u < 0.12 && d > 0.45 && l.setHex(h),
            n.open && d > 0.8 && u > 0.2 && u < 0.72 && l.setHex(o.skin),
            !n.gloss &&
              !n.open &&
              d > 0.9 &&
              u > 0.36 &&
              u < 0.62 &&
              a === 0 &&
              l.setHex(K(h === m ? 16053488 : h, 1)),
            u <= 0.3 && d > 0.92 && l.multiplyScalar(0.35));
        },
        skin: (e, n, r, i, a, o) => {
          let c = _[Math.round(a * v)];
          B(
            o,
            t < 0 ? L.footL : L.footR,
            t < 0 ? L.shinL : L.shinR,
            c < 0.35 && n > 0.06 * s ? 0.35 : 0,
          );
        },
        kind: n.gloss ? z.gloss : z.cloth,
        rough: n.gloss ? 0.28 : 0.75,
      },
    ),
    o.shoes.style === `heel`)
  ) {
    let e = new T(0.022 * s, 0.03, 0.026 * s),
      n = new D(c.x, 0.015, c.z).addScaledVector(l, -f + 0.02 * s);
    i.geo(e, new d().makeTranslation(n.x, n.y, n.z), {
      color: 1380882,
      skin: t < 0 ? L.footL : L.footR,
      kind: z.gloss,
      rough: 0.3,
    });
  }
}
function Si(e, t, n) {
  let { b: r, m: i, desc: a } = e,
    o = r.legs[t < 0 ? 0 : 1],
    s = n ? 1.45 : 1.55,
    c = [s, s + 0.02, 1.7, 1.85, 2],
    l = new D(),
    u = new D(),
    d = new D(),
    f = new D(),
    p = e.nL;
  i.grid(
    {
      nu: p,
      nv: c.length - 1,
      closed: !0,
      point: (e, t, r) => {
        let i = Math.round(t * (c.length - 1)),
          a = c[i],
          s = e * di,
          p = Rt(o, s, a) + (i === 0 ? 0.002 : n ? 0.016 : 0.01);
        return (
          Lt(o, a, l, u, d, f),
          r
            .copy(l)
            .addScaledVector(f, Math.sin(s) * p)
            .addScaledVector(d, Math.cos(s) * p)
        );
      },
    },
    {
      color: (e, t, n, r, i, o) =>
        o.setHex(
          Math.round(i * (c.length - 1)) <= 1
            ? K(a.shoes.color, 0.8)
            : a.shoes.color,
        ),
      skin: (e, t, n, r, i, a) => Wt(o, c[Math.round(i * (c.length - 1))], a),
      kind: n ? z.gloss : z.cloth,
      rough: n ? 0.25 : 0.7,
    },
  );
}
function Ci(e, t) {
  let { b: n, m: r, lod: i, desc: a } = e,
    o = n.s * (n.female ? 0.93 : 1),
    { A: s, fwd: c, right: l, heelZ: u, len: d } = bi(e, t),
    f = 0.012 * o,
    p = i === 0 ? [0, 0.12, 0.35, 0.6, 0.8, 0.9, 1] : [0, 0.4, 1],
    m = p.length - 1,
    h = i === 0 ? 10 : 5,
    g = [0, 0],
    _ = F(a.skin, 16771296, 0.4),
    v = (e) => {
      let n = (e * -t + 1) / 2;
      return 1 - 0.14 * n * n - 0.02 * n;
    };
  r.grid(
    {
      nu: h,
      nv: m,
      closed: !0,
      cap0: !0,
      cap1: !0,
      point: (e, t, n) => {
        let r = Math.round(t * m),
          a = p[r],
          h =
            0.044 *
            o *
            (0.6 + 0.4 * Math.sin(Math.min(1, a / 0.35) * Math.PI * 0.5)) *
            (a > 0.8 ? Math.max(0.55, 1 - (a - 0.8) * 1.6) : 1),
          _ =
            (a < 0.35
              ? fi(0.085, 0.062, a / 0.35)
              : a < 0.75
                ? fi(0.062, 0.028, (a - 0.35) / 0.4)
                : fi(0.028, 0.016, (a - 0.75) / 0.25)) * o;
        pi(e * di, h, 1, 2.6, g);
        let y = 0.5 - 0.5 * g[1],
          b = g[0] / h,
          x = -u + a * d * 0.98;
        a > 0.8 && i === 0 && (x = -u + d * (0.8 + (a - 0.8) * v(b)) * 0.98);
        let S =
          a > 0.82 && y > 0.5 && i === 0
            ? 0.0025 * o * Math.abs(Math.cos(b * Math.PI * 2.5)) ** 6
            : 0;
        return n
          .set(s.x, 0, s.z)
          .addScaledVector(l, g[0])
          .addScaledVector(c, x)
          .setY(f + y * _ - S);
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, o, s) => {
        let c = p[Math.round(o * m)];
        (s.setHex(a.skin),
          pi(r * di, 1, 1, 2.6, g),
          c >= 0.93 && g[1] < -0.3 && i === 0 && s.setHex(_),
          0.5 - 0.5 * g[1] < 0.15 && s.multiplyScalar(0.85));
      },
      skin: t < 0 ? L.footL : L.footR,
      kind: z.skin,
      rough: 0.6,
    },
  );
}
function wi(e, t, n) {
  let { b: r, m: i, desc: a } = e,
    o = r.s * (r.female ? 0.95 : 1),
    { A: s, fwd: c, right: l, heelZ: u, len: d } = bi(e, t),
    f = t < 0 ? L.footL : L.footR,
    p = a.shoes.color2 ?? 16053492,
    m = a.shoes.color,
    h = a.shoes.sole ?? m,
    g = e.lod === 0 ? [0, 0.12, 0.45, 0.8, 1] : [0, 0.5, 1],
    _ = g.length - 1,
    v = e.lod === 0 ? 8 : 5,
    y = [0, 0],
    b = 0.014 * o;
  i.grid(
    {
      nu: v,
      nv: _,
      closed: !0,
      cap0: !0,
      cap1: !0,
      point: (e, t, n) => {
        let r = g[Math.round(t * _)],
          i =
            0.05 *
            o *
            (0.75 + 0.25 * Math.sin(Math.min(1, r / 0.4) * Math.PI * 0.5)) *
            (r > 0.85 ? Math.max(0.35, 1 - (r - 0.85) * 4) : 1) *
            (r < 0.05 ? 0.8 : 1);
        pi(e * di, i, 1, 4, y);
        let a = 0.5 - 0.5 * y[1];
        return n
          .set(s.x, 0, s.z)
          .addScaledVector(l, y[0])
          .addScaledVector(c, -u - 0.012 * o + r * (d + 0.03 * o))
          .setY(a * b);
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, a) => a.setHex(t > b * 0.8 ? p : h),
      skin: f,
      kind: z.gloss,
      rough: 0.55,
    },
  );
  let x = n ? [0.45, 0.72] : [0.62];
  for (let t of x) {
    let r = -u + t * d,
      a = 0.052 * o,
      p = (n ? 0.03 : 0.036) * o,
      h = (n ? 0.012 : 0.05) * o,
      g = e.lod === 0 ? 6 : 3;
    (i.grid(
      {
        nu: g,
        nv: 1,
        closed: !1,
        point: (e, t, n) => {
          let i = Math.PI * e,
            o = -Math.cos(i) * a,
            u = b + Math.sin(i) * p + 0.002,
            d = r + (t - 0.5) * h;
          return n
            .set(s.x, 0, s.z)
            .addScaledVector(l, o)
            .addScaledVector(c, d)
            .setY(u);
        },
        invert: !1,
      },
      { color: m, skin: f, kind: z.gloss, rough: 0.5 },
    ),
      i.grid(
        {
          nu: g,
          nv: 1,
          closed: !1,
          point: (e, t, n) => {
            let i = Math.PI * e,
              o = -Math.cos(i) * (a - 0.003),
              u = b + Math.sin(i) * (p - 0.003) + 0.002,
              d = r + (t - 0.5) * h;
            return n
              .set(s.x, 0, s.z)
              .addScaledVector(l, o)
              .addScaledVector(c, d)
              .setY(u);
          },
          invert: !0,
        },
        { color: K(m, 0.6), skin: f, kind: z.gloss, rough: 0.5 },
      ));
  }
}
var Ti = Math.PI * 2,
  Ei = (e, t, n) => e + (t - e) * n,
  Di = (e, t) => Math.exp(-(e * e) / (t * t)),
  Oi = [
    [0, 0.2],
    [0.5, 0.215],
    [0.95, 0.3],
    [1.28, 0.52],
    [1.45, 0.5],
    [1.62, 0.42],
    [1.9, 0.5],
    [2.4, 0.64],
    [Math.PI, 0.72],
  ],
  ki = [
    [0, 0.19],
    [0.55, 0.205],
    [0.95, 0.27],
    [1.28, 0.5],
    [1.45, 0.5],
    [1.62, 0.44],
    [1.9, 0.52],
    [2.4, 0.66],
    [Math.PI, 0.74],
  ],
  Ai = [
    [0, 0.19],
    [0.55, 0.205],
    [0.84, 0.27],
    [1.04, 0.47],
    [1.6, 0.52],
    [2.2, 0.55],
    [Math.PI, 0.58],
  ];
function ji(e, t) {
  let n = e.length;
  if (t <= e[0][0]) return e[0][1];
  for (let r = 0; r < n - 1; r++)
    if (t <= e[r + 1][0]) {
      let n = (t - e[r][0]) / (e[r + 1][0] - e[r][0]),
        i = n * n * (3 - 2 * n);
      return Ei(e[r][1], e[r + 1][1], i);
    }
  return e[n - 1][1];
}
var Mi = (e) => {
  let t = ((e % Ti) + Ti) % Ti;
  return (t > Math.PI && (t = Ti - t), t);
};
function Ni(e, t) {
  let n =
    (e, t, n = 0.32, r = 0.1) =>
    (i, a) =>
      Ei(e, t, V(n - r, n + r, a + 0.08 * (Mi(i) / Math.PI)));
  switch (e) {
    case `bald`:
      return null;
    case `buzz`:
      return { hl: Oi, th: () => 0.0028, shave: 0.35 };
    case `fade`:
      return {
        hl: Oi,
        th: (e, t) =>
          n(0.014, 0.0026, 0.3, 0.14)(e, t) +
          0.006 * Di(Mi(e), 0.5) * Di(t - 0.12, 0.1),
        shave: 0.45,
        tufts: `back`,
      };
    case `sidepart`:
      return {
        hl: Oi,
        th: (e, t) =>
          n(0.014, 0.006, 0.36, 0.14)(e, t) +
          0.006 * V(-0.6, 0.6, Math.sin(e)) * V(0.35, 0.1, t) +
          0.004 * Di(Mi(e), 0.5) * Di(t - 0.15, 0.1),
        tufts: `side`,
      };
    case `twoblock`:
      return {
        hl: Oi,
        th: (e, t) =>
          Ei(0.015, 0.0035, V(0.28, 0.42, t) * V(0.8, 1.1, Mi(e))) *
          (t > 0.3 && Mi(e) < 0.95 ? 0.6 : 1),
        bangs: { d: 0.36, span: 0.95, jag: 0.03, th: 0.007, sweep: 0.03 },
        shave: 0.35,
        tufts: `front`,
      };
    case `bowl`:
      return {
        hl: [
          [0, 0.4],
          [0.9, 0.42],
          [1.35, 0.5],
          [1.62, 0.46],
          [2.2, 0.56],
          [Math.PI, 0.62],
        ],
        th: () => 0.017,
        bangs: { d: 0.4, span: 1.15, jag: 0.004, th: 0.013 },
      };
    case `spiky`:
      return { hl: Oi, th: n(0.012, 0.004, 0.32), spikes: 16, shave: 0.25 };
    case `undercut`:
      return {
        hl: Oi,
        th: (e, t) =>
          Mi(e) < 1.05 && t < 0.33 + 0.1 * (1 - Mi(e) / 1.05)
            ? 0.022 + 0.012 * Di(Mi(e), 0.45) * Di(t - 0.12, 0.1)
            : 0.0022,
        shave: 0.6,
        tufts: `back`,
      };
    case `elder`:
      return {
        hl: [
          [0, 0.24],
          [0.5, 0.26],
          [0.95, 0.33],
          [1.28, 0.52],
          [1.62, 0.44],
          [2.4, 0.64],
          [Math.PI, 0.7],
        ],
        th: n(0.009, 0.005, 0.35),
      };
    case `balding`:
      return {
        hl: [
          [0, 0.3],
          [0.95, 0.36],
          [1.28, 0.52],
          [1.62, 0.44],
          [2.4, 0.64],
          [Math.PI, 0.7],
        ],
        th: () => 0.006,
        crown: 0.3,
        shave: 0.2,
      };
    case `perm`:
      return {
        hl: [
          [0, 0.19],
          [0.95, 0.27],
          [1.3, 0.48],
          [1.62, 0.44],
          [2.4, 0.6],
          [Math.PI, 0.66],
        ],
        th: (e, t) => 0.02 + 0.006 * V(0.1, 0.4, t),
        curls: 1,
      };
    case `bob`:
      return {
        hl: Ai,
        th: (e, t) => 0.014 + 0.005 * V(0.2, 0.45, t),
        curtain: { span0: 0.92, endY: -0.95, th: 0.014, curl: 1, part: -0.35 },
        bangs: { d: 0.3, span: 0.7, jag: 0, th: 0.01, sweep: 0.12 },
      };
    case `long`:
      return {
        hl: Ai,
        th: (e, t) => 0.011 + 0.004 * V(0.2, 0.45, t),
        curtain: { span0: 0.86, endY: 0.7, th: 0.013, part: 0 },
      };
    case `wavy`:
      return {
        hl: Ai,
        th: (e, t) => 0.013 + 0.006 * V(0.2, 0.45, t),
        curtain: { span0: 0.88, endY: 0.76, th: 0.016, wave: 1, part: -0.4 },
      };
    case `bangs`:
      return {
        hl: Ai,
        th: () => 0.012,
        bangs: { d: 0.405, span: 1.02, jag: 0.006, th: 0.009 },
        curtain: { span0: 1.02, endY: 0.795, th: 0.014, curl: 0.4 },
      };
    case `ponytail`:
      return {
        hl: ki,
        th: () => 0.0065,
        tail: `pony`,
        bangs: { d: 0.3, span: 0.72, jag: 0.022, th: 0.0055, sweep: 0.1 },
        locks: !0,
      };
    case `bun`:
      return { hl: ki, th: () => 0.007, tail: `bun`, locks: !0 };
  }
  return null;
}
function Pi(e, t, n, r, i) {
  if ((W(e, t, n, 0, i, !1), r === 0)) return i;
  let a = 1 - V(0, 0.35, n),
    o = V(0.75, 1, n),
    s = Math.sin(t) * (1 - a),
    c = -Math.cos(t) * (1 - a),
    l = a - 0.3 * o,
    u = Math.hypot(s, l, c) || 1;
  return i.set(i.x + (s / u) * r, i.y + (l / u) * r, i.z + (c / u) * r);
}
var Fi = (e) => Math.sin(e * 23.1) * 0.6 + Math.sin(e * 41.7 + 1.3) * 0.4;
function Ii(e) {
  let t = e.bangs;
  return (n) => {
    let r = Mi(n),
      i = ji(e.hl, r) + 0.006 * Fi(n) * V(0.3, 0.9, r);
    if (t && r < t.span) {
      let e = V(t.span, t.span - 0.2, r),
        a = t.jag * Fi(n * 1.7),
        o = (t.sweep ?? 0) * Math.sin(n * 1.3);
      i = Ei(i, t.d + a + o, e);
    }
    return i;
  };
}
function Li(e, t) {
  let n = Ni(e, t);
  return !n || n.crown ? null : Ii(n);
}
function Ri(e, t) {
  let n = Ni(e, t);
  if (!n) return null;
  let r = Ii(n),
    i = 0.035,
    a = n.crown;
  return a === void 0
    ? (e, t) => t < r(e) - i
    : (e, t) => Mi(e) > 1.12 && t > a + i && t < r(e) - i;
}
function zi(e, t) {
  let n = Ni(e, t);
  return !!n?.curtain && n.curtain.span0 < 1.4;
}
function Bi(e, t) {
  let { desc: n, h: r, b: i, m: a, lod: o } = e,
    s = Ni(n.hair.style, i.female);
  if (!s) return;
  let c = r.hh / 0.23,
    l = n.hair.color,
    u = n.hair.color2 ?? l,
    d = K(l, 0.62),
    f = n.skin,
    p = pr(e),
    m = z.hair,
    h = 0.55,
    g = s.bangs,
    _ = Ii(s),
    v = (e) => t.d > 0 && e < t.d,
    y = s.bangs || n.hair.style === `bowl` || n.hair.style === `bob`,
    b = [
      `twoblock`,
      `sidepart`,
      `fade`,
      `undercut`,
      `spiky`,
      `bowl`,
      `elder`,
    ].includes(n.hair.style),
    x = !!s.curtain || s.tail !== void 0,
    S = (e) =>
      (s.th(0, e) +
        s.th(Math.PI / 2, e) +
        s.th(Math.PI, e) +
        s.th(-Math.PI / 2, e)) *
      0.25,
    C = (e, n) => {
      let r = (n < 0.16 ? Ei(S(n), s.th(e, n), V(0, 0.16, n)) : s.th(e, n)) * c;
      return (
        b &&
          (r *=
            1 +
            0.32 *
              Math.sin(e * 12 + 2.2 * Math.sin(n * 9)) *
              V(0.04, 0.2, n) *
              V(0.004 * c, 0.012 * c, r)),
        (!y || Mi(e) > (s.bangs?.span ?? 0) + 0.1) &&
          (r *= 0.22 + 0.78 * V(_(e), _(e) - 0.16, n)),
        b && (r *= 1 - 0.45 * V(0.22, 0.42, n) * V(0.7, 1.3, Mi(e))),
        g &&
          Mi(e) < g.span &&
          n > 0.24 &&
          (r = Ei(r, g.th * c, V(0.24, 0.3, n))),
        s.curls &&
          (r +=
            s.curls *
            0.005 *
            c *
            (0.5 +
              0.5 * Math.sin(e * 9 + n * 21) * Math.sin(n * 27 - e * 6.5))),
        v(n) && (r *= t.squash),
        r
      );
    },
    w = s.crown ?? 0,
    T = [];
  if (s.crown) {
    let e = o === 0 ? 20 : 10;
    for (let t = 0; t <= e; t++) T.push(1 + (t / e) * (Ti - 2));
  } else if (o === 0) {
    for (let e = 0; e < 5; e++) T.push(-Math.PI + (e / 5) * (Math.PI - 1.25));
    for (let e = -1.25; e < 1.249999; e += 1.25 / 7) T.push(e);
    for (let e = 0; e <= 5; e++) T.push(1.25 + (e / 5) * (Math.PI - 1.25));
  } else for (let e = 0, t = 10; e <= 10; e++) T.push(-Math.PI + (e / 10) * Ti);
  let E = T.length - 1,
    D = (
      o === 0
        ? s.curls
          ? [0, 0.14, 0.3, 0.46, 0.62, 0.8, 1]
          : [0, 0.22, 0.48, 0.74, 1]
        : [0, 0.45, 1]
    ).map((e) => ({ f: e, band: -1, k: 1, cut: 0 }));
  (s.crown && o === 0 && (D[0].cut = 0.6),
    o === 0 && D.push({ f: 1, band: 0.02, k: 1, cut: 0.3 }),
    D.push({ f: 1, band: 0, k: 1, cut: o === 0 ? 0.62 : 0 }),
    D.push({ f: 1, band: 0, k: 0, cut: o === 0 ? 0.85 : 0 }));
  let O = D.length - 1,
    k = (e, t) => {
      let n = _(e);
      return t.band >= 0 ? n - t.band : Ei(w, n - (o === 0 ? 0.045 : 0), t.f);
    },
    A = x ? 9 : 12,
    j = (e, t, n, r, i, a) => {
      let o = T[Math.round(r * E)];
      ((a[0] = ((o + Math.PI) / Ti) * A),
        (a[1] = k(o, D[Math.round(i * O)]) * 2.4));
    },
    ee = (e, t, n, r, i) => {
      i.setHex(l);
      let a = 1.08 - 0.28 * V(0.3, 0.75, t);
      (i.multiplyScalar(a), r && i.setHex(d));
      let o =
        (s.shave
          ? Math.min(1, s.shave * 1.6) * V(0.007 * c, 0.0025 * c, n)
          : 0) + (b ? 0.25 * V(0.35, 0.55, t) * V(0.9, 1.4, Mi(e)) : 0);
      return (o > 0 && i.lerp(Ui.setHex(f), o * 0.62), i);
    };
  a.grid(
    {
      nu: E,
      nv: O,
      closed: !1,
      point: (e, t, n) => {
        let i = T[Math.round(e * E)],
          a = D[Math.round(t * O)],
          o = k(i, a);
        return Pi(r, i, o, a.k > 0 ? C(i, o) : 6e-4, n);
      },
    },
    {
      color: (e, t, n, r, i, a) => {
        let o = T[Math.round(r * E)],
          s = D[Math.round(i * O)],
          c = k(o, s);
        return ee(o, c, C(o, c), s.k === 0, a);
      },
      skin: L.head,
      kind: m,
      rough: h,
      bump: (e, t, n, r, i) => (p ? D[Math.round(i * O)].cut : 0),
      tex: p ? { rect: p, mode: 3, uv: j } : void 0,
    },
  );
  let M = e.trim ?? 0;
  if (o === 0 && M < 2 && p && !s.crown && !v(0.2) && S(0.2) * c > 0.0045 * c) {
    let e = T.filter((e, t) => t % 2 == 0 || t === E),
      t = e.length - 1,
      n = [0, 0.3, 0.62, 0.9],
      i = n.length - 1,
      o = (0.0022 + 0.0014 * !!x) * c,
      s = (e, t) => Ei(0, _(e) - (x ? 0.02 : 0.055), t);
    a.grid(
      {
        nu: t,
        nv: i,
        closed: !1,
        point: (a, c, l) => {
          let u = e[Math.round(a * t)],
            d = s(u, n[Math.round(c * i)]);
          return Pi(r, u, d, C(u, d) + o * (1 - 0.5 * n[Math.round(c * i)]), l);
        },
      },
      {
        color: (r, a, o, c, l, d) => {
          let f = e[Math.round(c * t)],
            p = s(f, n[Math.round(l * i)]);
          return ee(f, p, C(f, p), !1, d)
            .multiplyScalar(1.06)
            .lerp(Ui.setHex(u), 0.25);
        },
        skin: L.head,
        kind: m,
        rough: h,
        bump: (e, t, n, r, a) =>
          Math.round(a * i) === i ? 0.8 : Math.round(a * i) === 0 ? 0.55 : 0.46,
        tex: {
          rect: p,
          mode: 3,
          uv: (r, a, o, c, l, u) => {
            let d = e[Math.round(c * t)];
            ((u[0] = ((d + Math.PI) / Ti) * A * 1.15 + 0.37),
              (u[1] = s(d, n[Math.round(l * i)]) * 2.4 + 0.21));
          },
        },
      },
    );
  }
  (s.curtain && Gi(e, s, _, C, l, u, d, p, t),
    o === 0 &&
      !v(0.1) &&
      (s.tufts && Ki(e, s.tufts, _, C, l, u, p),
      s.bangs &&
        s.bangs.jag > 0.01 &&
        Ki(e, `fringe`, _, C, l, u, p, s.bangs.span),
      s.locks && qi(e, _, C, l, u, p),
      p && (Vi(e, s, _, C, l, u, p), M < 2 && Hi(e, s, _, C, l, u, p))),
    s.tail === `pony` && Ji(e, l, u, d, p),
    s.tail === `bun` && Yi(e, l, d, p),
    s.spikes && o === 0 && Xi(e, s.spikes, C, l));
}
function Vi(e, t, n, r, i, a, o) {
  let { h: s, m: c } = e,
    l = s.hh / 0.23,
    d = (e.desc.seed * 13 + 5) >>> 0,
    f = () => (d = (d * 1664525 + 1013904223) >>> 0) / 4294967296,
    p = t.bangs && t.bangs.jag <= 0.01 ? t.bangs.span : (t.bangs, 0),
    m = t.curtain ? t.curtain.span0 : 99,
    h = [],
    g = (e.trim ?? 0) >= 3 ? 0.28 : 0.19;
  for (let e = -Math.PI + 0.08; e < Math.PI; e += g * (Mi(e) > 2.2 ? 1.6 : 1)) {
    let n = Mi(e);
    n < p ||
      n > m - 0.05 ||
      (t.crown !== void 0 && n < 1.05) ||
      h.push(e + (f() - 0.5) * 0.05);
  }
  let _ = new D(),
    v = new u(),
    y = new u();
  for (let t of h) {
    let u = Mi(t),
      d = n(t),
      p = (u < 0.9 ? 0.06 : u < 1.7 ? 0.07 : 0.065) * (0.8 + 0.4 * f()),
      m = d - p * 0.8,
      h = d + p * 0.22,
      g = (u < 1 ? 0.06 : 0.02) * Math.sign(t) * (0.5 + f()),
      b = 0.1 + 0.05 * f();
    (v.setHex(i).multiplyScalar(0.92),
      y.setHex(i).lerp(Ui.setHex(a), 0.3).lerp(Ui.setHex(e.desc.skin), 0.12));
    let x = [0, 0.55, 1];
    c.grid(
      {
        nu: 1,
        nv: 2,
        closed: !1,
        point: (e, n, i) => {
          let a = x[Math.round(n * 2)],
            o = Ei(m, h, a),
            c = t + (e - 0.5) * b * (1 - 0.35 * a) + g * a * a,
            u = r(c, Math.min(o, d)) * (o < d ? 0.95 : 0.15),
            f = Math.max(u, 8e-4 * l) + 4e-4 * l * Math.sin(a * Math.PI);
          return (Pi(s, c, Math.min(o, 0.99), f, _), i.copy(_));
        },
        invert: !1,
      },
      {
        color: (e, t, n, r, i, a) => a.copy(v).lerp(y, i),
        skin: L.head,
        kind: z.hair,
        rough: 0.55,
        bump: (e, t, n, r, i) => 0.12 + 0.72 * i * i,
        tex: {
          rect: o,
          mode: 3,
          uv: (e, n, r, i, a, o) => (
            (o[0] = i * 0.9 + t * 3.1),
            (o[1] = a * 0.5 + t)
          ),
        },
      },
    );
  }
}
function Hi(e, t, n, r, i, a, o) {
  let { h: s, m: c } = e,
    l = s.hh / 0.23,
    u = (e.desc.seed * 29 + 11) >>> 0,
    d = () => (u = (u * 1664525 + 1013904223) >>> 0) / 4294967296,
    f = t.curtain || t.tail ? 6 : 4,
    p = new D(),
    m = new D(),
    h = new D(),
    g = Wi.setHex(i).lerp(Ui.setHex(a), 0.4).getHex();
  for (let e = 0; e < f; e++) {
    let i = (d() * 2 - 1) * Math.PI,
      a = 0.05 + d() * Math.max(0.05, Math.min(0.5, n(i) - 0.12));
    if (t.crown !== void 0 && a < t.crown + 0.05) continue;
    let u = r(i, a) * 0.85;
    (Pi(s, i, a, u, p), Pi(s, i, a, u + 0.01, m), m.sub(p).normalize());
    let f = (0.03 + 0.03 * d()) * l,
      _ = new D(Math.cos(i), 0, Math.sin(i)),
      v = new D(0, -1, 0).addScaledVector(m, 0.9).normalize();
    c.grid(
      {
        nu: 1,
        nv: 2,
        closed: !1,
        point: (e, t, n) => {
          let r = t;
          return (
            h
              .copy(p)
              .addScaledVector(m, f * (0.35 * r + 0.25 * r * r))
              .addScaledVector(v, f * 0.8 * r * r)
              .addScaledVector(_, (e - 0.5) * 0.009 * l * (1 - 0.5 * r)),
            n.copy(h)
          );
        },
      },
      {
        color: (e, t, n, r, i, a) => a.setHex(g).multiplyScalar(0.85 + 0.2 * i),
        skin: L.head,
        kind: z.hair,
        rough: 0.55,
        bump: (e, t, n, r, i) => 0.55 + 0.3 * i,
        tex: {
          rect: o,
          mode: 3,
          uv: (t, n, r, i, a, o) => (
            (o[0] = i * 0.3 + e * 0.29),
            (o[1] = a * 0.4 + e * 0.13)
          ),
        },
      },
    );
  }
}
var Ui = new u(),
  Wi = new u();
function Gi(e, t, n, r, i, a, o, s, c) {
  let { h: l, b: u, m: d, lod: f } = e,
    p = t.curtain,
    m = l.hh / 0.23,
    h = p.span0,
    g = f === 0 ? 12 : 6,
    _ = p.endY > 0 ? p.endY * u.H : l.crownY + p.endY * l.hh,
    v = (e) => l.crownY - n(e) * l.hh,
    y = f === 0 ? 6 : 3,
    b = p.th * m,
    x = [];
  for (let e = 0; e <= g; e++) x.push(h + (e / g) * (Ti - 2 * h));
  let S = (t, n) => {
      let i = (l.crownY - n) / l.hh,
        a = 0;
      return (
        i <= 1 &&
          (a = Math.max(
            a,
            Math.max(
              _n(l, t, Math.max(0, i), !1),
              i > 0.3 ? _n(l, t, Math.min(0.99, i), !0) + 0.002 * m : 0,
            ) +
              r(t, Math.min(i, 0.9)) * 0.9,
          )),
        n < u.torsoTop &&
          (a = Math.max(
            a,
            Vt(u, t, n, !0) +
              0.01 +
              (e.fit.top ? e.fit.top.off + 0.004 : 0) +
              (e.fit.outer ? e.fit.outer.off + 0.006 : 0),
          )),
        (a = Math.max(a, u.neckR + 0.016 * m)),
        a
      );
    },
    C = (e) => {
      let t = (l.crownY - e) / l.hh;
      return t < 0.85
        ? on(l, Math.max(0, t))
        : e < u.torsoTop
          ? H(u, e)
          : Ei(on(l, 0.85), H(u, u.torsoTop), V(0.85, 1.25, t));
    },
    w = x.map((e) => {
      let t = v(e) + 0.05 * l.hh,
        n = [],
        r = 0,
        i = t;
      for (let a = 0; a <= y; a++) {
        let o = a / y,
          s = Ei(t, _, o ** 0.9),
          c = S(e, s);
        (a > 0 && (c = Math.max(c, r - 0.28 * (i - s))),
          p.wave &&
            (c +=
              p.wave *
              0.006 *
              m *
              Math.sin((t - s) * 38 + e * 2) *
              V(0, 0.2, o)),
          p.curl && a === y && (c -= p.curl * 0.012 * m),
          (r = c),
          (i = s));
        let l =
          a === y
            ? (0.012 + 0.018 * Math.abs(Math.sin(e * 7.3 + 1.1))) *
              m *
              (p.curl ? 0.3 : 1)
            : 0;
        n.push([s - l, c]);
      }
      return n;
    }),
    T = (y + 1) * 2 - 1,
    E = (e) => (e === 0 || e === g ? 0.15 : e === 1 || e === g - 1 ? 0.7 : 1);
  d.grid(
    {
      nu: g,
      nv: T,
      closed: !1,
      point: (e, t, n) => {
        let r = Math.round(e * g),
          i = Math.round(t * T),
          a = x[r],
          o = i <= y,
          s = o ? i : T - i,
          [c, l] = w[r][s],
          u = o ? l : l - b * E(r) * (s === 0 ? 0.3 : 1),
          d = s === y && p.curl ? c + 0.01 * p.curl * m : c,
          f = C(d);
        return n.set(Math.sin(a) * u, d, f - Math.cos(a) * u);
      },
    },
    {
      color: (e, t, n, r, s, c) => {
        let l = Math.round(s * T),
          u = l <= y,
          d = (u ? l : T - l) / y;
        return (
          c.setHex(i).lerp(Ui.setHex(a), V(0.4, 1, d)),
          u
            ? c.multiplyScalar(
                1 - 0.12 * d * (1 - Math.cos(x[Math.round(r * g)])) * 0.5,
              )
            : c.setHex(o).lerp(Ui.setHex(i), 0.3 * d),
          c
        );
      },
      skin: (e, t, n, r, i, a) => {
        let o = (l.crownY - t) / l.hh;
        (B(a, L.head, L.chest, V(0.95, 1.6, o)),
          o > 1.2 && Ct(a, L.spine, 0.1 * V(1.2, 2.5, o)));
      },
      kind: z.hair,
      rough: 0.55,
      bump: (e, t, n, r, i) => {
        Math.round(r * g);
        let a = Math.round(i * T),
          o = a <= y ? a : T - a;
        return o === y ? 0.56 : o === y - 1 ? 0.12 : 0;
      },
      tex: s
        ? {
            rect: s,
            mode: 3,
            uv: (e, t, n, r, i, a) => {
              ((a[0] = r * 9), (a[1] = -t * 2.6));
            },
          }
        : void 0,
    },
  );
}
function Ki(e, t, n, r, i, a, o, s = 1) {
  let { h: c, m: l } = e,
    d = c.hh / 0.23,
    f = (e.desc.seed * 7 + 3) >>> 0,
    p = () => (f = (f * 1664525 + 1013904223) >>> 0) / 4294967296,
    m = Math.round(
      (t === `fringe` ? (s < 0.8 ? 6 : 9) : 11) *
        ((e.trim ?? 0) >= 2 ? 0.6 : 1),
    ),
    h = new D(),
    g = new u();
  for (let e = 0; e < m; e++) {
    let u, f, _, v, y;
    if (t === `fringe`) {
      let t = -s * 0.9 + (e / (m - 1)) * s * 1.8 + (p() - 0.5) * 0.06,
        r = n(t);
      ((u = t - 0.02),
        (f = r - 0.13),
        (_ = t + (p() - 0.5) * 0.08 + 0.03 * Math.sin(t)),
        (v = r + 0.012 + 0.02 * p()),
        (y = 0.1 + 0.05 * p()));
    } else {
      let e = (p() * 2 - 1) * 1.05,
        r = 0.04 + p() * 0.24,
        i = 0.12 + 0.08 * p();
      (t === `front`
        ? ((u = e * 0.7), (f = r), (_ = e), (v = Math.min(n(e) - 0.02, r + i)))
        : t === `back`
          ? ((u = e),
            (f = r + 0.03),
            (_ = e * 1.1),
            (v = Math.max(0, r - i * 0.9)))
          : ((u = -0.5 + (e + 1.05) * 0.4),
            (f = 0.05 + r * 0.5),
            (_ = u + i * 2.2),
            (v = f + i * 0.35)),
        (y = 0.16 + 0.08 * p()));
    }
    let b = [0, 0.5, 1],
      x = (t === `fringe` ? 0.0025 : 0.0055) * d;
    g.setHex(i).lerp(Ui.setHex(a), 0.2 + 0.3 * p());
    let S = g.getHex();
    l.grid(
      {
        nu: 2,
        nv: 2,
        closed: !1,
        point: (e, t, n) => {
          let i = b[Math.round(t * 2)],
            a = Ei(u, _, i),
            o = Ei(f, v, i),
            s = (_ - u) * 0.4,
            l = v - f,
            d = Math.hypot(s, l) || 1,
            p = -l / d / 0.4,
            m = s / d,
            g = (y * 0.5 * (1 - i) ** 0.8 + 0.004) * (e - 0.5) * 2,
            S = a + p * g * 0.4,
            C = Math.max(0, o + m * g * 0.4),
            w = +(e === 0.5);
          return (
            Pi(
              c,
              S,
              C,
              r(S, Math.min(C, 0.99)) * 0.92 + x * (0.4 + w) * (1 - 0.6 * i),
              h,
            ),
            n.copy(h)
          );
        },
        invert: !1,
      },
      {
        color: (e, t, n, r, i, a) =>
          a.setHex(S).multiplyScalar(r === 0.5 ? 1.1 : 0.8 + 0.1 * i),
        skin: L.head,
        kind: z.hair,
        rough: 0.55,
        bump: (e, t, n, r, i) => (r === 0.5 ? 0.05 : 0.5) + 0.4 * i * i,
        tex: o
          ? {
              rect: o,
              mode: 3,
              uv: (t, n, r, i, a, o) => (
                (o[0] = i * 0.6 + e * 0.37),
                (o[1] = a * 0.8)
              ),
            }
          : void 0,
      },
    );
  }
}
function qi(e, t, n, r, i, a) {
  let { h: o, m: s } = e,
    c = o.hh / 0.23,
    l = new D(),
    u = [0, 0.3, 0.6, 0.85, 1],
    d = u.length - 1;
  for (let e of [-1, 1])
    for (let f = 0; f < 1; f++) {
      let p = e * (0.98 + 0.12 * f),
        m = e * (1.12 + 0.1 * f),
        h = t(p) - 0.08,
        g = 0.78 + 0.1 * f,
        _ = 0.12 - 0.015 * f;
      for (let t of [!1, !0])
        s.grid(
          {
            nu: 2,
            nv: d,
            closed: !1,
            point: (r, i, a) => {
              let s = u[Math.round(i * d)],
                f =
                  Ei(p, m, s) +
                  e * 0.04 * Math.sin(s * Math.PI) +
                  (r - 0.5) * _ * (1 - 0.75 * s),
                v = Ei(h, g, s ** 0.9),
                y =
                  s < 0.25
                    ? n(f, Math.min(v, 0.9)) * 0.9 + 0.001
                    : 0.006 * c + 0.004 * c * Math.sin(s * Math.PI);
              return (
                Pi(
                  o,
                  f,
                  Math.min(v, 0.97),
                  y + (r === 0.5 ? 0.0015 * c : 0) + (t ? -8e-4 : 0),
                  l,
                ),
                a.copy(l)
              );
            },
            invert: e > 0 ? !t : t,
          },
          {
            color: (e, n, a, o, s, c) =>
              c
                .setHex(r)
                .lerp(Ui.setHex(i), 0.3 * u[Math.round(s * d)])
                .multiplyScalar(t ? 0.6 : 1),
            skin: L.head,
            kind: z.hair,
            rough: 0.55,
            bump: (e, t, n, r, i) => (r === 0.5 ? 0.1 : 0.45) + 0.45 * i * i,
            tex: a
              ? {
                  rect: a,
                  mode: 3,
                  uv: (e, t, n, r, i, a) => (
                    (a[0] = r * 0.5 + f * 0.3),
                    (a[1] = i)
                  ),
                }
              : void 0,
          },
        );
    }
}
function Ji(e, t, n, r, i) {
  let { h: a, b: o, m: s, lod: c } = e,
    l = a.hh / 0.23,
    u = Pi(a, Math.PI, 0.3, 0.004 * l, new D());
  o.joints.p[L.hair].copy(u);
  let d = 0.3 * l,
    f = c === 0 ? [0, 0.03, 0.08, 0.25, 0.5, 0.75, 1] : [0, 0.1, 0.5, 1],
    p = f.length - 1,
    m = c === 0 ? 7 : 5,
    h = (e, t) =>
      t.set(
        0.008 * l * Math.sin(e * 3),
        u.y + 0.012 * l * Math.sin(e * 3) - d * e ** 1.1,
        u.z +
          0.018 * l +
          0.03 * l * Math.sin(Math.min(1, e * 1.6) * Math.PI * 0.5) -
          0.018 * l * e * e,
      ),
    g = new D(),
    _ = new D(),
    v = new D(),
    y = new D(1, 0, 0),
    b = new D(),
    x = (e) =>
      (e < 0.03
        ? 0.02
        : e < 0.08
          ? 0.016
          : 0.022 * (1 - e) +
            0.006 +
            0.012 * Math.sin(Math.min(1, e * 1.4) * Math.PI)) * l;
  s.grid(
    {
      nu: m,
      nv: p,
      closed: !0,
      cap0: !0,
      cap1: !0,
      point: (e, t, n) => {
        let r = f[Math.round(t * p)];
        (h(r, g),
          h(Math.min(1, r + 0.02), _),
          v.subVectors(_, g).normalize(),
          b.crossVectors(v, y).normalize());
        let i = e * Ti,
          a = x(r);
        return n
          .copy(g)
          .addScaledVector(y, Math.cos(i) * a)
          .addScaledVector(b, Math.sin(i) * a * 0.95);
      },
    },
    {
      color: (r, i, a, o, s, c) => {
        let l = f[Math.round(s * p)];
        return l > 0.02 && l < 0.07
          ? c.setHex(e.desc.hair.color2 === void 0 ? 2763312 : 12597320)
          : c
              .setHex(t)
              .lerp(Ui.setHex(n), V(0.3, 1, l))
              .multiplyScalar(l < 0.1 ? 0.8 : 1);
      },
      skin: (e, t, n, r, i, a) =>
        B(a, L.head, L.hair, V(0.05, 0.3, f[Math.round(i * p)])),
      kind: z.hair,
      rough: 0.55,
      bump: (e, t, n, r, i) =>
        f[Math.round(i * p)] >= 1 ? 0.8 : f[Math.round(i * p)] >= 0.8 ? 0.3 : 0,
      tex: i
        ? {
            rect: i,
            mode: 3,
            uv: (e, t, n, r, i, a) => ((a[0] = r * 3), (a[1] = i * 3)),
          }
        : void 0,
    },
  );
}
function Yi(e, t, n, r) {
  let { h: i, m: a, lod: o } = e,
    s = i.hh / 0.23,
    c = Pi(i, Math.PI, 0.2, 0.03 * s, new D()),
    u = new l(0.042 * s, o === 0 ? 10 : 6, o === 0 ? 7 : 4);
  (u.scale(1, 0.85, 0.8),
    a.geo(u, new d().makeTranslation(c.x, c.y, c.z), {
      color: (e, n, r, i, a, o) =>
        o.setHex(t).multiplyScalar(0.85 + 0.2 * V(c.y - 0.03, c.y + 0.03, n)),
      skin: L.head,
      kind: z.hair,
      rough: 0.55,
      tex: r
        ? {
            rect: r,
            mode: 3,
            uv: (e, t, n, r, i, a) => ((a[0] = r * 4), (a[1] = i * 2)),
          }
        : void 0,
    }));
}
function Xi(e, t, n, r) {
  let { h: i, m: a } = e,
    o = i.hh / 0.23,
    s = (t) => {
      let n = Math.sin(t * 91.7 + e.desc.seed) * 43758.5453;
      return n - Math.floor(n);
    },
    c = new D(),
    l = new D(),
    u = new D(),
    d = new D(),
    f = new D();
  for (let e = 0; e < t; e++) {
    let t = (s(e) * 2 - 1) * Math.PI * 0.9,
      m = 0.04 + s(e + 50) * 0.26;
    (Pi(i, t, m, n(t, m) * 0.7, c),
      Pi(i, t, m, n(t, m) * 0.7 + 0.03 * o, l),
      u.subVectors(l, c).normalize(),
      l
        .copy(c)
        .addScaledVector(u, (0.022 + 0.018 * s(e + 9)) * o)
        .add(new D(0, 0.006 * o, 0.012 * o)),
      d.set(0, 1, 0).cross(u).normalize(),
      d.lengthSq() < 0.1 && d.set(1, 0, 0),
      f.crossVectors(u, d).normalize());
    let h = 0.011 * o,
      g = [0, 1, 2, 3].map((e) =>
        c
          .clone()
          .addScaledVector(d, Math.cos((e * Math.PI) / 2) * h)
          .addScaledVector(f, Math.sin((e * Math.PI) / 2) * h),
      ),
      _ = [];
    for (let e = 0; e < 4; e++) {
      let t = g[e],
        n = g[(e + 1) % 4];
      _.push(t.x, t.y, t.z, n.x, n.y, n.z, l.x, l.y, l.z);
    }
    let v = new y();
    (v.setAttribute(`position`, new p(_, 3)),
      a.geo(v, null, {
        color: (e, t, n, i, a, o) =>
          o.setHex(r).multiplyScalar(t > c.y + 0.01 ? 1.1 : 0.8),
        skin: L.head,
        kind: z.hair,
        rough: 0.5,
      }));
  }
}
var Zi = Math.PI * 2,
  Qi = (e, t, n) => e + (t - e) * n,
  $i = (e, t) => Math.exp(-(e * e) / (t * t)),
  ea = new d(),
  ta = new a(),
  na = new M(),
  ra = new D(),
  ia = new D(1, 1, 1);
function J(e, t, n, r = 0, i = 0, a = 0, o = 1, s = 1, c = 1) {
  return ea
    .compose(ra.set(e, t, n), ta.setFromEuler(na.set(r, i, a)), ia.set(o, s, c))
    .clone();
}
function aa(e) {
  for (let t of e) {
    if (t.kind === `helmet`) return { d: 0.5, squash: 0.25 };
    if (t.kind === `cap` || t.kind === `policeCap`)
      return { d: 0.3, squash: 0.35 };
    if (t.kind === `bucket`) return { d: 0.34, squash: 0.35 };
  }
  return { d: 0, squash: 1 };
}
function oa(e) {
  let t = e.desc.hair.style,
    n = e.h.hh / 0.23;
  return (
    ({
      bald: 0,
      buzz: 0.003,
      balding: 0.006,
      elder: 0.008,
      perm: 0.012,
      bowl: 0.008,
      undercut: 0.01,
      spiky: 0.008,
    }[t] ?? 0.007) *
      n +
    0.006 * n
  );
}
var sa = new Set([`lanyard`, `watch`, `earbuds`, `necklace`]),
  ca = new Map();
function la(e) {
  for (let t of e.desc.acc)
    if (!(e.lod === 1 && sa.has(t.kind)))
      switch (t.kind) {
        case `mask`:
          ua(e, t);
          break;
        case `glasses`:
        case `sunglasses`:
          fa(e, t, t.kind === `sunglasses`);
          break;
        case `cap`:
        case `bucket`:
        case `policeCap`:
        case `visor`:
          pa(e, t);
          break;
        case `helmet`:
          ga(e, t);
          break;
        case `backpack`:
        case `schoolbag`:
          Sa(e, t, t.kind === `schoolbag`);
          break;
        case `deliveryBox`:
          Ca(e, t);
          break;
        case `tote`:
        case `shoulderBag`:
          wa(e, t);
          break;
        case `marketBag`:
          Ea(e, t);
          break;
        case `cup`:
          Oa(e, t);
          break;
        case `phone`:
          ka(e, t);
          break;
        case `umbrella`:
          Aa(e, t);
          break;
        case `lanyard`:
          Na(e, t);
          break;
        case `watch`:
          Ma(e, t);
          break;
        case `earbuds`:
          va(e);
          break;
        case `headband`:
          _a(e, t);
          break;
        case `apron`:
          Fa(e, t);
          break;
        case `necklace`:
          Pa(e, t);
          break;
        case `fan`:
          ja(e, t);
          break;
        default:
          ca.get(t.kind)?.(e, t);
      }
}
function ua(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = n.lay,
    s = t.color ?? 12573166,
    c = i === 0 ? 10 : 6,
    l = i === 0 ? 5 : 3,
    u = (o.eyeD + o.noseBaseD) * 0.5 + 0.035;
  if (
    (r.grid(
      {
        nu: c,
        nv: l,
        closed: !1,
        point: (e, t, r) => {
          let i = Qi(-1.28, 1.28, e),
            s = Qi(u, 1, t),
            c =
              (0.004 +
                0.014 * $i(i, 0.35) * $i(s - o.noseTipD, 0.14) +
                0.006 * $i(i, 0.7)) *
              a,
            l = Math.abs(e * 2 - 1) ** 6;
          return (
            W(n, i, Math.min(1, s), c * (1 - l) + 0.0015, r),
            s > 0.97 && (r.y -= (s - 0.97) * n.hh * 0.6),
            r
          );
        },
      },
      {
        color: (e, t, n, r, i, a) => {
          a.setHex(s);
          let o = Math.abs(Math.sin(i * Math.PI * 3.2));
          return (a.multiplyScalar(0.93 + 0.07 * o), a);
        },
        skin: (e, t, n, r, i, a) => B(a, L.head, L.jaw, V(0.55, 0.9, i) * 0.6),
        kind: z.cloth,
        rough: 0.9,
      },
    ),
    i === 0)
  ) {
    let t =
        (((s >> 16) & 255) * 0.3 + ((s >> 8) & 255) * 0.59 + (s & 255) * 0.11) /
          255 <
        0.45
          ? K(s, 0.8)
          : 14079183,
      r = [new D(), new D(), new D()];
    for (let i of [-1, 1])
      for (let [o, s, c] of [
        [0.15, 1.62, 0.5],
        [0.85, 1.7, 0.7],
      ]) {
        let l = Qi(u, 1, o);
        for (let e = 0; e <= 2; e++) {
          let t = e / 2;
          W(
            n,
            i * Qi(1.28, s, t),
            Qi(l, c, t),
            (0.004 - 0.001 * t + 0.0015 * Math.sin(t * Math.PI)) * a,
            r[e],
          );
        }
        (da(e, r[0], r[1], 0.0022, t, L.head),
          da(e, r[1], r[2], 0.0022, t, L.head));
      }
  }
}
function da(e, t, n, r, i, o) {
  let s = new D().subVectors(n, t),
    c = s.length(),
    l = new T(r, c, r * 0.6),
    u = t.clone().add(n).multiplyScalar(0.5),
    f = new a().setFromUnitVectors(new D(0, 1, 0), s.normalize());
  e.m.geo(l, new d().compose(u, f, new D(1, 1, 1)), {
    color: i,
    skin: o,
    kind: z.cloth,
    rough: 0.8,
  });
}
function fa(e, t, n) {
  let { h: r, m: i, lod: a } = e,
    o = r.hh / 0.23,
    s = r.lay,
    c = t.color ?? (n ? 1381655 : 2761760),
    l = s.eyeW * 1.32,
    u = (n ? 0.07 : 0.058) * (r.hh / r.hh),
    d = 0.012 * o,
    f = a === 0 ? 12 : 6;
  for (let t of [-1, 1]) {
    let p = t * s.eyeT,
      m = s.eyeD + 0.004,
      h = (e, t, i) => {
        let a = (e / f) * Zi,
          o = Math.sign(Math.cos(a)) * Math.abs(Math.cos(a)) ** 0.7,
          s = Math.sign(Math.sin(a)) * Math.abs(Math.sin(a)) ** 0.7,
          c = p + o * (l + i),
          h = m + s * (u * 0.5 + i * 0.3) + (n && s > 0 ? 0.01 : 0),
          g = _n(r, p, m) + d,
          _ = r.crownY - h * r.hh;
        return t.set(
          Math.sin(c) * g,
          _,
          on(r, h) - Math.cos(c) * g * (1 - 0.02 * Math.abs(o)),
        );
      };
    if (
      (i.grid(
        {
          nu: f,
          nv: 1,
          closed: !0,
          point: (e, t, n) => h(Math.round(e * f), n, t < 0.5 ? 0.012 : 0),
          invert: !1,
        },
        { color: c, skin: L.head, kind: z.gloss, rough: 0.25 },
      ),
      h(0, new D(), 0),
      i.grid(
        {
          nu: f,
          nv: 1,
          closed: !0,
          point: (e, t, n) =>
            t < 0.5
              ? h(Math.round(e * f), n, 0.001)
              : n.set(
                  Math.sin(p) * (_n(r, p, m) + d),
                  r.crownY - m * r.hh,
                  on(r, m) - Math.cos(p) * (_n(r, p, m) + d),
                ),
          invert: !0,
        },
        n
          ? {
              color: 1184790,
              skin: L.head,
              kind: z.lens,
              rough: 0.05,
              emissive: 0.9,
              transparent: !0,
            }
          : {
              color: 14674158,
              skin: L.head,
              kind: z.lens,
              rough: 0.05,
              emissive: 0.18,
              transparent: !0,
            },
      ),
      a === 0)
    ) {
      let n = h(0, new D(), 0.012);
      t < 0 && h(f / 2, n, 0.012);
      let i = W(r, t * 1.55, 0.47, 0.004 * o, new D());
      da(e, h(t > 0 ? 0 : f / 2, new D(), 0.01), i, 0.004, c, L.head);
    }
  }
  da(
    e,
    W(r, -s.eyeT + s.eyeW * 1.3, s.eyeD - 0.02, 0.013 * o, new D()),
    W(r, s.eyeT - s.eyeW * 1.3, s.eyeD - 0.02, 0.013 * o, new D()),
    0.004,
    c,
    L.head,
  );
}
function pa(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = t.kind,
    s =
      t.color ??
      (o === `policeCap` ? 1778742 : o === `visor` ? 15755914 : 2237998),
    c = t.color2 ?? (o === `policeCap` ? 921362 : K(s, 0.85)),
    l = oa(e),
    u = i === 0 ? 18 : 8;
  if (o !== `visor`) {
    let e = (e) =>
        o === `bucket`
          ? 0.34
          : o === `policeCap`
            ? 0.3
            : Qi(0.42, 0.28, (Math.cos(e) + 1) / 2),
      t = i === 0 ? [0, 0.18, 0.4, 0.62, 0.82, 1] : [0, 0.5, 1],
      c = t.length - 1,
      d = o === `policeCap`;
    if (
      (r.grid(
        {
          nu: u,
          nv: c,
          closed: !1,
          point: (r, i, o) => {
            let s = -Math.PI + r * Zi,
              u = t[Math.round(i * c)],
              f = e(s) * u;
            return (
              W(n, s, f, l + (d ? 0.02 * a * (1 - u) + 0.01 * a : 0), o, !1),
              d &&
                ((o.y = Math.min(o.y, n.crownY + l + 0.028 * a)),
                (o.z -= 0.012 * a * (1 - u))),
              f < 0.02 && (o.y += l),
              o
            );
          },
        },
        {
          color: (e, n, r, a, o, l) => {
            if ((l.setHex(s), !d && i === 0)) {
              let e = Math.abs(Math.sin(a * Math.PI * 6));
              l.multiplyScalar(0.92 + 0.08 * Math.min(1, e * 4));
            }
            return (d && t[Math.round(o * c)] > 0.75 && l.setHex(921362), l);
          },
          skin: L.head,
          kind: z.cloth,
          rough: 0.8,
        },
      ),
      d)
    ) {
      let e = new g(0.012 * a, 8),
        t = W(n, 0, 0.18, l + 0.024 * a, new D(), !1);
      r.geo(e, J(t.x, t.y, t.z - 0.004, 0.1, Math.PI, 0), {
        color: 14201418,
        skin: L.head,
        kind: z.metal,
        rough: 0.3,
      });
    }
  } else
    r.grid(
      {
        nu: u,
        nv: 1,
        closed: !0,
        point: (e, t, r) =>
          W(
            n,
            -Math.PI + e * Zi,
            0.3 + (t - 0.5) * 0.09,
            l * 0.6 + 0.002,
            r,
            !1,
          ),
      },
      { color: c, skin: L.head, kind: z.cloth, rough: 0.8 },
    );
  let d = o === `bucket` ? `round` : o === `policeCap` ? `peak` : `bill`,
    f = o === `bucket` ? 0.34 : o === `visor` ? 0.3 : 0.28,
    p =
      (o === `visor`
        ? 0.095
        : o === `policeCap`
          ? 0.05
          : o === `bucket`
            ? 0.045
            : 0.075) * a,
    m = d === `round` ? Math.PI : o === `visor` ? 1.25 : 1,
    h = i === 0 ? 12 : 6,
    _ = (e, t, r, i) => {
      let a = d === `round` ? -Math.PI + e * Zi : -m + e * m * 2,
        s = d === `round` ? 1 : Math.cos((a / m) * Math.PI * 0.5) ** 0.6;
      W(n, a, f, l + 0.002, r, !1);
      let c = Math.sin(a),
        u = -Math.cos(a),
        h = p * s * t,
        g =
          d === `round`
            ? 0.35
            : o === `policeCap`
              ? 0.55
              : o === `visor`
                ? 0.12
                : 0.22;
      return (
        (r.x += c * h),
        (r.z += u * h),
        (r.y -= h * g + (i ? 0 : 0.003)),
        r
      );
    };
  for (let e of [!0, !1])
    r.grid(
      {
        nu: d === `round` ? u : h,
        nv: 1,
        closed: !1,
        point: (t, n, r) => _(t, n, r, e),
        invert: !e,
      },
      {
        color: e
          ? o === `policeCap`
            ? c
            : o === `visor`
              ? s
              : K(s, 0.95)
          : o === `visor`
            ? K(s, 0.7)
            : K(c, 0.6),
        skin: L.head,
        kind: o === `policeCap` || o === `visor` ? z.gloss : z.cloth,
        rough: o === `policeCap` ? 0.2 : 0.75,
      },
    );
}
var ma = new D(),
  ha = new D();
function ga(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = t.color ?? 15921904,
    s = t.color2 ?? 2237480,
    c = 0.028 * a,
    l = i === 0 ? 16 : 12,
    u =
      i === 0
        ? [0, 0.15, 0.36, 0.58, 0.78, 0.92, 1]
        : [0, 0.22, 0.48, 0.74, 0.92, 1],
    d = u.length - 1,
    f = (e) => {
      let t = Math.abs(Math.atan2(Math.sin(e), Math.cos(e)));
      return t < 0.9
        ? 0.27
        : t < 1.9
          ? Qi(0.27, 0.62, (t - 0.9) / 1)
          : Qi(0.62, 0.66, (t - 1.9) / 1.24);
    },
    p = ma.set(0, n.crownY - 0.45 * n.hh, on(n, 0.45)),
    m = (e, t, r, i) => {
      (W(n, e, t, 0, i, !1), ha.subVectors(i, p));
      let a = ha.length() || 1;
      return i.addScaledVector(ha, r / a);
    };
  (r.grid(
    {
      nu: l,
      nv: d,
      closed: !1,
      point: (e, t, n) => {
        let r = -Math.PI + e * Zi,
          i = u[Math.round(t * d)];
        return m(r, f(r) * i, c * (1 - 0.15 * i * i), n);
      },
    },
    {
      color: (e, n, r, a, c, l) => {
        let f = u[Math.round(c * d)];
        return (
          l.setHex(f > 0.93 ? s : o),
          i === 0 &&
            Math.abs(a - 0.5) < 0.03 &&
            f < 0.9 &&
            l.setHex(K(t.color2 ?? 14169132, 1)),
          l
        );
      },
      skin: L.head,
      kind: z.gloss,
      rough: 0.22,
    },
  ),
    r.grid(
      {
        nu: l,
        nv: 1,
        closed: !1,
        point: (e, t, r) => {
          let i = -Math.PI + e * Zi;
          return t < 0.5
            ? m(i, f(i), c * 0.85, r)
            : W(n, i, f(i), 0.004, r, !1);
        },
        invert: !0,
      },
      { color: 1710620, skin: L.head, kind: z.cloth, rough: 0.9 },
    ));
  let h = 0.8;
  for (let e of [!0, !1])
    r.grid(
      {
        nu: 8,
        nv: 1,
        closed: !1,
        point: (t, r, i) => {
          let o = -0.8 + t * h * 2;
          W(n, o, 0.27, c + 0.002, i, !1);
          let s = Math.cos((o / h) * Math.PI * 0.5);
          return (
            (i.x += Math.sin(o) * 0.035 * a * s * r),
            (i.z += -Math.cos(o) * 0.035 * a * s * r),
            (i.y += 0.004 * a * r - (e ? 0 : 0.003)),
            i
          );
        },
        invert: !e,
      },
      { color: e ? o : s, skin: L.head, kind: z.gloss, rough: 0.3 },
    );
  if (i === 0)
    for (let t of [-1, 1])
      da(
        e,
        W(n, t * 1.45, 0.55, c * 0.7, new D(), !1),
        W(n, t * 0.9, 1, 0.004 * a, new D()),
        0.006,
        1579034,
        L.head,
      );
}
function _a(e, t) {
  let { h: n, m: r } = e,
    i = oa(e);
  r.grid(
    {
      nu: e.lod === 0 ? 18 : 8,
      nv: 1,
      closed: !0,
      point: (e, t, r) =>
        W(
          n,
          -Math.PI + e * Zi,
          0.2 + (t - 0.5) * 0.06 + 0.08 * Math.max(0, -Math.cos(e * Zi)),
          i + 0.002,
          r,
          !1,
        ),
    },
    { color: t.color ?? 14826074, skin: L.head, kind: z.satin, rough: 0.5 },
  );
}
function va(e) {
  let { h: t, m: n } = e,
    r = t.hh / 0.23;
  for (let e of [-1, 1]) {
    let i = W(t, e * 1.57, 0.585, 0.005 * r, new D(), !1),
      a = new l(0.0055 * r, 5, 3);
    n.geo(a, J(i.x, i.y, i.z), {
      color: 16185078,
      skin: L.head,
      kind: z.gloss,
      rough: 0.2,
    });
    let o = new C(0.0022 * r, 0.0022 * r, 0.02 * r, 5, 1, !0);
    n.geo(o, J(i.x, i.y - 0.012 * r, i.z + 0.002), {
      color: 16185078,
      skin: L.head,
      kind: z.gloss,
      rough: 0.2,
    });
  }
}
function ya(e, t, n) {
  let r = e.fit,
    i = r.outer ? r.outer.off : r.top ? r.top.off : 0,
    a = r.outer ? r.outer.loose : r.top ? r.top.loose : 0;
  return kr(e.b, t, n, i, a);
}
function ba(e, t, n) {
  let { b: r, m: i } = e,
    a = r.H;
  for (let o of [-1, 1]) {
    let s = o * 0.3,
      c = [
        { t: o * (Math.PI - 0.45), y: 0.79 * a },
        { t: o * (Math.PI / 2 + 0.25), y: 0.835 * a },
        { t: o * 0.9, y: 0.83 * a },
        { t: o * 0.55, y: 0.78 * a },
        { t: o * 0.45, y: 0.7 * a },
        { t: o * 0.55, y: n },
      ],
      l = c.length - 1;
    i.grid(
      {
        nu: 1,
        nv: l,
        closed: !1,
        point: (t, n, i) => {
          let o = c[Math.round(n * l)],
            s = o.t + (t - 0.5) * 0.34 * (o.y > 0.82 * a ? 0.45 : 1),
            u = o.y,
            d =
              ya(e, s, Math.min(u, r.torsoTop - 0.01)) +
              0.006 +
              (u > 0.82 * a ? 0.008 : 0);
          return i.set(
            Math.sin(s) * d,
            u + (o.y > 0.82 * a ? 0.012 : 0),
            H(r, Math.min(u, r.torsoTop)) - Math.cos(s) * d,
          );
        },
        invert: o < 0,
      },
      {
        color: t,
        skin: (e, t, n, i, a, o) => Ut(r, s, t, o),
        kind: z.cloth,
        rough: 0.8,
      },
    );
  }
}
function xa(e, t, n, r, i = 2) {
  let a = new T(e, t, n, i, i, i),
    o = a.attributes.position,
    s = e / 2 - r,
    c = t / 2 - r,
    l = n / 2 - r,
    u = new D(),
    d = new D();
  for (let e = 0; e < o.count; e++)
    (u.fromBufferAttribute(o, e),
      d.set(
        Math.max(-s, Math.min(s, u.x)),
        Math.max(-c, Math.min(c, u.y)),
        Math.max(-l, Math.min(l, u.z)),
      ),
      u.sub(d),
      u.lengthSq() > 1e-10 && u.setLength(r),
      u.add(d),
      o.setXYZ(e, u.x, u.y, u.z));
  return (a.deleteAttribute(`normal`), a);
}
function Sa(e, t, n) {
  let { b: r, m: i } = e,
    a = r.H,
    o = r.s,
    s = t.color ?? (n ? 2306639 : 2961203),
    c = t.color2 ?? K(s, 0.75),
    l = (n ? 0.28 : 0.3) * o,
    u = (n ? 0.34 : 0.4) * o,
    d = (n ? 0.1 : 0.13) * o,
    f = 0.68 * a,
    p = H(r, f) + ya(e, Math.PI, f) + d / 2 + 0.01,
    m = xa(l, u, d, 0.035 * o, e.lod === 0 ? 3 : 1);
  if (
    (i.geo(m, J(0, f, p, 0.06, 0, 0), {
      color: (e, t, n, r, i, a) => (
        a.setHex(s),
        n > p + d * 0.3 && t < f && a.setHex(c),
        t < f - u * 0.46 && a.multiplyScalar(0.8),
        a
      ),
      skin: (e, t, n, r, i, a) =>
        B(a, L.chest, L.spine, V(f, f - u * 0.5, t) * 0.4),
      kind: z.cloth,
      rough: 0.75,
    }),
    e.lod === 0)
  ) {
    let e = xa(l * 0.75, u * 0.38, d * 0.35, 0.02 * o, 2);
    i.geo(e, J(0, f - u * 0.2, p + d * 0.55, 0.06, 0, 0), {
      color: c,
      skin: L.chest,
      kind: z.cloth,
      rough: 0.75,
    });
  }
  ba(e, K(s, 0.7), f - u * 0.35);
}
function Ca(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = n.s,
    o = t.color ?? 15217276,
    s = 0.4 * a,
    c = 0.42 * a,
    l = 0.3 * a,
    u = 0.7 * i,
    d = H(n, u) + ya(e, Math.PI, u) + l / 2 + 0.012,
    p = xa(s, c, l, 0.025 * a, e.lod === 0 ? 2 : 1);
  r.geo(p, J(0, u, d), {
    color: (e, t, n, r, i, a) => a.setHex(t > u + c * 0.46 ? K(o, 0.8) : o),
    skin: L.chest,
    kind: z.gloss,
    rough: 0.45,
  });
  let m = hr(
    e,
    ((o >> 8) & 255) > ((o >> 16) & 255) ? `rider-green` : `rider-pink`,
    16777215,
    o,
  );
  if (m) {
    let e = new f(s * 0.8, c * 0.8);
    r.geo(
      e,
      J(0, u, d + l / 2 + 0.002),
      {
        color: 16777215,
        skin: L.chest,
        kind: z.cloth,
        rough: 0.6,
        tex: {
          rect: m,
          mode: 2,
          uv: (e, t, n, r, i, a) => ((a[0] = r), (a[1] = i)),
        },
      },
      !0,
    );
  }
  ba(e, 2763310, u - c * 0.3);
}
function wa(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = n.s,
    o = t.kind === `tote`,
    s = t.color ?? (o ? 15327695 : 3812388),
    c = (o ? 0.3 : 0.2) * a,
    l = (o ? 0.32 : 0.16) * a,
    u = 0.06 * a,
    d = (o ? 0.5 : 0.53) * i,
    f = 1.35,
    p = ya(e, f, Math.max(d, n.torsoBottom + 0.02)) + u / 2 + 0.01,
    m = Math.sin(f) * p + 0.03 * a,
    h = H(n, d) - Math.cos(f) * p,
    g = xa(u, l, c, (o ? 0.012 : 0.02) * a, e.lod === 0 ? 2 : 1);
  (r.geo(g, J(m, d, h, 0, 0, 0.04), {
    color: (e, t, n, r, i, a) =>
      a.setHex(s).multiplyScalar(t > d + l * 0.3 && !o ? 0.85 : 1),
    skin: (e, t, n, r, i, a) => {
      B(a, L.hips, L.chest, 0.5);
    },
    kind: o ? z.cloth : z.gloss,
    rough: o ? 0.9 : 0.4,
  }),
    Ta(
      e,
      o
        ? [
            [1.12, 0.585],
            [1, 0.68],
            [1.05, 0.78],
            [1.4, 0.842],
            [1.85, 0.8],
            [2.02, 0.69],
            [1.92, 0.585],
          ]
        : [
            [1.3, 0.575],
            [0.75, 0.64],
            [0.1, 0.71],
            [-0.55, 0.775],
            [-1.15, 0.83],
            [-1.57, 0.848],
            [-2.05, 0.82],
            [-2.6, 0.76],
            [Math.PI, 0.7],
            [2.55, 0.635],
            [1.85, 0.585],
          ],
      (o ? 0.03 : 0.026) * a,
      o ? K(s, 0.85) : 2760730,
    ));
}
function Ta(e, t, n, r) {
  let { b: i, m: a } = e,
    o = i.H,
    s = t.length - 1;
  for (let c of [!1, !0])
    a.grid(
      {
        nu: 1,
        nv: s,
        closed: !1,
        point: (r, a, c) => {
          let [l, u] = t[Math.round(a * s)],
            d = Math.min(i.torsoTop - 0.004, u * o + (r - 0.5) * n),
            f = V(0.8 * o, 0.845 * o, d),
            p = ya(e, l, d) + 0.005 + 0.006 * f;
          return c.set(
            Math.sin(l) * p,
            d + 0.006 * f,
            H(i, d) - Math.cos(l) * p,
          );
        },
        invert: c,
      },
      {
        color: c ? K(r, 0.7) : r,
        skin: (e, n, r, a, o, c) => Ut(i, t[Math.round(o * s)][0], n, c),
        kind: z.cloth,
        rough: 0.7,
      },
    );
}
function Ea(e, t) {
  let { b: n, m: r } = e,
    i = n.s,
    a = n.joints.p[L.handL],
    o = 0.3 * i,
    s = 0.26 * i,
    c = 0.12 * i,
    l = new D(a.x - 0.02 * i, a.y - 0.09 * i - s / 2, a.z),
    u = xa(c, s, o, 0.02 * i, e.lod === 0 ? 3 : 1),
    d = [t.color ?? 14168620, 15921902, t.color2 ?? 2772904, 15921902],
    f = lr(e, `marketbag:${d[0]}:${d[2]}`, 128, 128, !0, qe(d[0], d[2]));
  (r.geo(u, J(l.x, l.y, l.z), {
    color: f ? 16777215 : d[0],
    skin: L.handL,
    kind: z.gloss,
    rough: 0.5,
    part: R.lItem,
    tex: f
      ? {
          rect: f,
          mode: 1,
          uv: (e, t, n, r, i, a) => ((a[0] = r * 2), (a[1] = i * 2)),
        }
      : void 0,
  }),
    da(
      e,
      new D(l.x, l.y + s / 2, l.z - o * 0.3),
      new D(a.x, a.y - 0.06 * i, a.z),
      0.018 * i,
      d[0],
      L.handL,
    ),
    da(
      e,
      new D(l.x, l.y + s / 2, l.z + o * 0.3),
      new D(a.x, a.y - 0.06 * i, a.z),
      0.018 * i,
      d[0],
      L.handL,
    ));
}
function Da(e, t) {
  let n = e.b.joints.p,
    r = n[t < 0 ? L.handL : L.handR],
    i = n[t < 0 ? L.fingersL : L.fingersR];
  return r
    .clone()
    .lerp(i, 0.85)
    .add(new D(-t * 0.012 * e.b.s, 0, -0.008 * e.b.s));
}
function Oa(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Da(e, 1),
    s = 0.15 * a,
    c = 0.037 * a,
    l = 0.043 * a,
    u = t.color ?? 13081194,
    d = new C(l, c, s, i === 0 ? 12 : 6, 1, !1),
    f = o.y + 0.02 * a;
  n.geo(d, J(o.x + 0.012 * a, f, o.z), {
    color: (e, t, n, r, i, a) => {
      let o = (t - (f - s / 2)) / s;
      return (
        a.setHex(u),
        o < 0.22 && a.setHex(2759186),
        o > 0.86 && a.setHex(15921128),
        o > 0.4 && o < 0.62 && a.setHex(16052972),
        a
      );
    },
    skin: L.handR,
    kind: z.gloss,
    rough: 0.2,
  });
  let p = new C(0.0055 * a, 0.0055 * a, 0.1 * a, 5);
  n.geo(
    p,
    J(o.x + 0.02 * a, f + s / 2 + 0.035 * a, o.z + 0.004, 0.12, 0, -0.1),
    { color: t.color2 ?? 3116906, skin: L.handR, kind: z.gloss, rough: 0.3 },
  );
}
function ka(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Da(e, -1),
    o = xa(0.009 * i, 0.15 * i, 0.072 * i, 0.004 * i, 1);
  n.geo(o, J(a.x + 0.015 * i, a.y, a.z - 0.01 * i, 0, 0, 0), {
    color: t.color ?? 1842466,
    skin: L.handL,
    kind: z.gloss,
    rough: 0.25,
  });
  let s = new f(0.066 * i, 0.138 * i);
  n.geo(
    s,
    J(a.x + 0.015 * i + 0.0048 * i, a.y, a.z - 0.01 * i, 0, Math.PI / 2, 0),
    { color: 9423103, skin: L.handL, kind: z.screen, rough: 0.1, emissive: 1 },
    !0,
  );
}
function Aa(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Da(e, 1),
    s = 0.78 * a,
    c = t.color ?? 2842526,
    l = t.color2 ?? K(c, 0.8),
    u = new C(0.006 * a, 0.006 * a, s, 5);
  n.geo(u, J(o.x, o.y - s / 2 + 0.05 * a, o.z), {
    color: 2763310,
    skin: L.handR,
    kind: z.metal,
    rough: 0.3,
  });
  let d = 0.52 * a,
    f = new D(o.x, o.y - s + 0.05 * a, o.z),
    p = i === 0 ? 16 : 8;
  for (let e of [!0, !1])
    n.grid(
      {
        nu: p,
        nv: 2,
        closed: !0,
        point: (t, n, r) => {
          let i = t * Zi,
            o = Math.round(n * 2) / 2,
            s = 1 - 0.04 * Math.abs(Math.cos(i * 4)),
            c = d * o * s,
            l = 0.2 * a * o * o;
          return r.set(
            f.x + Math.cos(i) * c,
            f.y + l + (e ? 0 : 0.004),
            f.z + Math.sin(i) * c,
          );
        },
        invert: e,
      },
      {
        color: (t, n, r, i, a, o) =>
          o.setHex(Math.floor(i * 8) % 2 ? c : l).multiplyScalar(e ? 1 : 0.7),
        skin: L.handR,
        kind: z.gloss,
        rough: 0.35,
      },
    );
}
function ja(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Da(e, 1),
    o = new g(0.1 * i, 10);
  n.geo(
    o,
    J(a.x + 0.02 * i, a.y - 0.14 * i, a.z - 0.02, 0, Math.PI / 2, 0),
    { color: t.color ?? 15852228, skin: L.handR, kind: z.cloth, rough: 0.8 },
    !0,
  );
  let s = new g(0.1 * i, 10);
  n.geo(
    s,
    J(a.x + 0.018 * i, a.y - 0.14 * i, a.z - 0.02, 0, -Math.PI / 2, 0),
    { color: t.color2 ?? 12730415, skin: L.handR, kind: z.cloth, rough: 0.8 },
    !0,
  );
  let c = new C(0.004 * i, 0.004 * i, 0.1 * i, 4);
  n.geo(c, J(a.x + 0.02 * i, a.y - 0.03 * i, a.z - 0.02), {
    color: 6965802,
    skin: L.handR,
    kind: z.gloss,
    rough: 0.5,
  });
}
function Ma(e, t) {
  let { m: n, b: i } = e,
    a = i.arms[0],
    o = i.s,
    s = a.c.clone().lerp(a.b, 0.06),
    c = new r(0.029 * o, 0.006 * o, 3, 10);
  n.geo(c, J(s.x, s.y, s.z, Math.PI / 2, 0, 0.05), {
    color: t.color ?? 1579034,
    skin: L.foreL,
    kind: z.gloss,
    rough: 0.3,
  });
  let l = new C(0.014 * o, 0.014 * o, 0.006 * o, 6);
  n.geo(l, J(s.x - 0.031 * o, s.y, s.z, 0, 0, Math.PI / 2), {
    color: t.color2 ?? 14343384,
    skin: L.foreL,
    kind: z.metal,
    rough: 0.25,
  });
}
function Na(e, t) {
  let { m: n, b: r } = e,
    i = r.H,
    a = r.s,
    o = 0.72 * i,
    s = ya(e, 0, o) + 0.008,
    c = new D(0, o, H(r, o) - s),
    l = t.color ?? 2777784;
  for (let t of [-1, 1])
    da(
      e,
      new D(t * 0.06 * a, 0.845 * i, H(r, 0.845 * i) - 0.03 * a),
      c.clone().add(new D(t * 0.01, 0.045 * a, 0)),
      0.012 * a,
      l,
      L.chest,
    );
  let u = xa(0.055 * a, 0.085 * a, 0.003, 0.004 * a, 1);
  n.geo(u, J(c.x, c.y, c.z, -0.05, 0, 0), {
    color: (e, t, n, r, i, o) => o.setHex(t > c.y + 0.02 * a ? l : 16053490),
    skin: L.chest,
    kind: z.gloss,
    rough: 0.3,
  });
}
function Pa(e, t) {
  let { m: n, b: i } = e,
    a = 0.838 * i.H,
    o = new r(i.neckR * 1.3, 0.0018, 3, 12);
  n.geo(o, J(0, a, H(i, a) - 0.012, Math.PI / 2 - 0.35, 0, 0), {
    color: t.color ?? 14729328,
    skin: L.chest,
    kind: z.metal,
    rough: 0.2,
  });
}
function Fa(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = t.color ?? 2767450,
    o = 0.6 * i,
    s = 0.33 * i,
    c = e.lod === 0 ? 8 : 4,
    l = e.lod === 0 ? 6 : 3,
    u = (e, t) => {
      let r = n.legs[1].a.x,
        i = 0.095 * n.s,
        a = r + i,
        o = i * 1.15;
      return (
        1 / Math.sqrt((Math.sin(e) / a) ** 2 + (Math.cos(e) / o) ** 2) +
        0.02 +
        0 * t
      );
    };
  r.grid(
    {
      nu: c,
      nv: l,
      closed: !1,
      point: (t, r, i) => {
        let a = -1.05 + t * 1.05 * 2,
          c = Qi(s, o, r),
          l =
            Math.max(c > n.torsoBottom ? ya(e, a, c) + 0.01 : 0, u(a, c)) +
            0.004 +
            (1 - r) * 0.02;
        return i.set(
          Math.sin(a) * l,
          c,
          H(n, Math.max(c, n.torsoBottom)) - Math.cos(a) * l,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, s) =>
        s.setHex(a).multiplyScalar(t > o - 0.03 ? 0.85 : 1),
      skin: (e, t, r, i, a, o) => {
        B(o, L.hips, L.hips, 0);
        let c = V(n.torsoBottom, s, t);
        Ct(o, i < 0.5 ? L.thighL : L.thighR, 0.4 * c);
      },
      kind: z.cloth,
      rough: 0.85,
    },
  );
}
function Ia(e) {
  let t = e.face;
  return `face3:${e.id}:${e.skin}:${e.hair.color}:${e.hair.style}:${Object.values(t).join(`,`)}:${e.age}:${e.sex}`;
}
function La(e, t, n = null) {
  return (r, i, a, o) => {
    let s = e.face,
      c = e.sex === `f`,
      l = e.age === `elder`,
      u = e.age === `student`,
      d = Pe(e.seed * 7 + 13),
      f = (e) => i + (0.5 + e / (2 * t.Theta)) * o,
      p = (e) => a + ((e - t.d0) / (t.d1 - t.d0)) * o,
      m = o / 512,
      h = e.skin;
    (r.clearRect(i, a, o, o), (r.lineCap = `round`), (r.lineJoin = `round`));
    let g = (e, t, n, i, a, o) => {
        if (o <= 0) return;
        (r.save(), r.translate(e, t), r.scale(1, i / n));
        let s = r.createRadialGradient(0, 0, 0, 0, 0, n);
        (s.addColorStop(0, P(a, o)),
          s.addColorStop(1, P(a, 0)),
          (r.fillStyle = s),
          r.fillRect(-n, -n, n * 2, n * 2),
          r.restore());
      },
      _ = F(I(h, 0.62), 6961728, 0.25),
      v = F(h, 14700650, 0.55),
      y = F(h, 13131850, 0.5);
    for (let e = 0; e < 70; e++) {
      let e = (d() * 2 - 1) * 1.1,
        t = 0.2 + d() * 0.8,
        n = (0.02 + d() * 0.05) * o;
      g(
        f(e),
        p(t),
        n,
        n * (0.6 + d() * 0.6),
        d() < 0.5 ? y : I(h, 1.08),
        0.02 + d() * 0.025,
      );
    }
    for (let e of [-1, 1])
      (g(f(e * 0.64), p(0.655), 0.13 * o, 0.065 * o, v, 0.04 + 0.24 * s.blush),
        g(f(e * 1.3), p(0.6), 0.05 * o, 0.08 * o, y, 0.1));
    if (
      (g(
        f(0),
        p(t.noseTipD - 0.01),
        0.055 * o,
        0.04 * o,
        F(h, 13652048, 0.4),
        0.14,
      ),
      g(f(0), p(0.93), 0.1 * o, 0.035 * o, y, 0.08),
      g(f(0), p(0.3), 0.2 * o, 0.1 * o, 16777215, 0.035),
      u || (c && s.blush > 0.2))
    ) {
      let e = u ? 26 : 12;
      for (let t = 0; t < e; t++)
        g(
          f((d() < 0.5 ? -1 : 1) * (0.2 + d() * 0.45)),
          p(0.6 + d() * 0.1),
          (1 + d() * 1.4) * m,
          (1 + d() * 1.4) * m,
          I(h, 0.72),
          0.2,
        );
    }
    for (let e of [-1, 1])
      (g(f(e * 0.8), p(0.73), 0.07 * o, 0.06 * o, _, 0.08),
        g(f(e * 0.1), p(0.6), 0.022 * o, 0.075 * o, _, 0.12),
        g(
          f(e * (t.eyeT - t.eyeW * 1.05)),
          p(t.eyeD - 0.004),
          0.018 * o,
          0.022 * o,
          _,
          0.2,
        ),
        g(
          f(e * (t.noseW * 1.02)),
          p(t.noseBaseD - 0.008),
          0.016 * o,
          0.013 * o,
          _,
          0.18,
        ));
    if (
      (g(f(0), p(t.noseBaseD + 0.012), 0.03 * o, 0.01 * o, _, 0.12),
      g(f(0), p(0.6), 0.025 * o, 0.09 * o, 16777215, 0.07),
      n)
    ) {
      let i = e.hair.color;
      for (let e = -1.45; e <= 1.45; e += 0.01) {
        let a = n(e);
        if (a > t.d1 - 0.02) continue;
        let o = f(e),
          s = r.createLinearGradient(0, p(a - 0.014), 0, p(a + 0.028));
        (s.addColorStop(0, P(i, 0.72)),
          s.addColorStop(0.4, P(i, 0.24)),
          s.addColorStop(1, P(i, 0)),
          (r.fillStyle = s),
          r.fillRect(
            o - 0.6 * m,
            p(a - 0.014),
            3 * m,
            p(a + 0.028) - p(a - 0.014),
          ));
      }
      r.lineWidth = 0.7 * m;
      for (let e = 0; e < 320; e++) {
        let e = (d() * 2 - 1) * 1.42,
          t = n(e),
          a = f(e),
          o = p(t - 0.006 + d() * 0.006);
        ((r.strokeStyle = P(i, 0.3 + 0.35 * d())),
          r.beginPath(),
          r.moveTo(a, o),
          r.quadraticCurveTo(
            a + (d() - 0.5) * 3 * m,
            o + 4 * m,
            a + (d() - 0.5) * 5 * m,
            o + (4 + 8 * d()) * m,
          ),
          r.stroke());
      }
    }
    let b = e.hair.color,
      x = l ? 9078143 : F(b, 3356740, 0.3);
    if (s.facial !== `none`) {
      let e = t.mouthW,
        n = (n, r) => {
          let i = Math.abs(n),
            a = i / e;
          return a < 1.05 &&
            r > Xt(t, Math.min(1, a)) - Zt(t, a) - 0.003 &&
            r < Xt(t, Math.min(1, a)) + Qt(t, a) + 0.003
            ? !1
            : s.facial === `mustache`
              ? r > t.noseBaseD + 0.008 &&
                r < Xt(t, Math.min(1, a)) - Zt(t, a) &&
                i < e * 1.15
              : s.facial === `goatee`
                ? (r > t.mouthD + 0.03 && i < 0.3) ||
                  (r > t.noseBaseD + 0.01 &&
                    r < Xt(t, Math.min(1, a)) - Zt(t, a) &&
                    i < e * 1.1)
                : r > 0.68 + 0.1 * Math.min(1, i / 1) &&
                  i < 1.3 &&
                  !(r < t.noseBaseD + 0.012 && i < t.noseW * 1.2);
        },
        i = s.facial === `stubble`;
      (i || s.facial === `beard`) &&
        g(f(0), p(0.9), 0.36 * o, 0.13 * o, 3818064, i ? 0.1 : 0.18);
      let a = Math.round(o * o * (i ? 0.07 : 0.1));
      for (let e = 0; e < a; e++) {
        let e = (d() * 2 - 1) * 1.3,
          t = 0.62 + d() * 0.4;
        if (!n(e, t)) continue;
        r.fillStyle = P(x, (i ? 0.16 : 0.5) * (0.4 + d() * 0.6));
        let a = (i ? 0.7 : 1.2) * m * (0.6 + d());
        r.fillRect(f(e), p(t), a, a * (i ? 1.2 : 2.4));
      }
    }
    let S = s.wrinkles;
    if (S > 0.02) {
      ((r.strokeStyle = P(I(h, 0.6), 0.12 + 0.18 * S)),
        (r.lineWidth = 1.4 * m));
      for (let e = 0; e < 3; e++) {
        let t = 0.25 + e * 0.045;
        r.beginPath();
        for (let n = -0.55; n <= 0.55; n += 0.05) {
          let i = p(t + 0.006 * Math.sin(n * 7 + e));
          n === -0.55 ? r.moveTo(f(n), i) : r.lineTo(f(n), i);
        }
        r.stroke();
      }
      for (let e of [-1, 1]) {
        let n = e * (t.eyeT + t.eyeW * 1.12),
          i = t.eyeD - t.tilt;
        for (let t = -1; t <= 1; t++)
          (r.beginPath(),
            r.moveTo(f(n), p(i + t * 0.012)),
            r.lineTo(f(n + e * 0.1), p(i + t * 0.03)),
            r.stroke());
        r.beginPath();
        for (let n = -0.6; n <= 0.9; n += 0.1) {
          let i = f(e * (t.eyeT + n * t.eyeW)),
            a = p(Yt(t, n) + 0.03);
          n === -0.6 ? r.moveTo(i, a) : r.lineTo(i, a);
        }
        r.stroke();
      }
    }
    {
      let e = 0.02 + 0.16 * S + (s.smile > 0 ? 0.04 * s.smile : 0);
      ((r.strokeStyle = P(I(h, 0.55), e)), (r.lineWidth = (2.4 + 2 * S) * m));
      for (let e of [-1, 1])
        (r.beginPath(),
          r.moveTo(f(e * (t.noseW * 1.18)), p(t.noseBaseD - 0.012)),
          r.quadraticCurveTo(
            f(e * (t.mouthW * 1.3)),
            p(t.mouthD - 0.03),
            f(e * (t.mouthW * 1.3)),
            p(t.mouthD + 0.04),
          ),
          r.stroke());
    }
    if (l)
      for (let e = 0; e < 7; e++)
        g(
          f((d() * 2 - 1) * 0.9),
          p(0.25 + d() * 0.5),
          (2 + d() * 3) * m,
          (2 + d() * 3) * m,
          8016438,
          0.3,
        );
    let C = l ? F(b, 10130572, 0.6) : F(b, 1708557, 0.35);
    for (let e of [-1, 1]) {
      let n = [];
      for (let r = 0; r <= 16; r++) {
        let i = r / 16,
          a = e * (t.browIn + (t.browOut - t.browIn) * i),
          o =
            Math.sin(Math.min(1, i / 0.68) * Math.PI * 0.5) *
            (i < 0.68 ? 1 : 1 - ((i - 0.68) / 0.32) * 0.9),
          l =
            t.browD +
            0.012 -
            (0.012 + 0.022 * s.browArch) * o -
            t.tilt * 0.3 * i,
          u =
            (0.016 + 0.014 * s.brow) *
            (1 - 0.72 * i * i) *
            (c ? 0.85 : 1.05) *
            (i < 0.16 ? 0.45 + 0.55 * Math.sin((i / 0.16) * Math.PI * 0.5) : 1);
        n.push([a, l, u]);
      }
      let i = f(n[0][0]),
        a = f(n[5][0]),
        o = r.createLinearGradient(i, 0, a, 0);
      (o.addColorStop(0, P(C, 0)),
        o.addColorStop(1, P(C, c ? 0.3 : 0.36)),
        (r.fillStyle = o),
        r.beginPath(),
        n.forEach(([e, t, n], i) =>
          i ? r.lineTo(f(e), p(t - n * 0.45)) : r.moveTo(f(e), p(t - n * 0.45)),
        ));
      for (let e = n.length - 1; e >= 0; e--)
        r.lineTo(f(n[e][0]), p(n[e][1] + n[e][2] * 0.45));
      (r.closePath(), r.fill());
      let l = Math.round(110 + 90 * s.brow);
      for (let t = 0; t < l; t++) {
        let t = d() ** 0.9,
          [i, a, o] = n[Math.min(15, Math.floor(t * 16))],
          s = a + (d() - 0.5) * o * 0.95,
          c = (t < 0.22 ? -1.3 : t < 0.55 ? -0.6 : -0.18) + (d() - 0.5) * 0.35,
          l = (5 + 6 * d()) * m * (t < 0.22 ? 0.75 : 1.15),
          u = f(i),
          h = p(s);
        ((r.strokeStyle = P(F(C, 0, d() * 0.35), 0.5 + 0.4 * d())),
          (r.lineWidth = (0.75 + 0.55 * d()) * m),
          r.beginPath(),
          r.moveTo(u, h),
          r.quadraticCurveTo(
            u + e * Math.cos(c) * l * 0.5,
            h + Math.sin(c) * l * 0.55,
            u + e * Math.cos(c) * l,
            h + Math.sin(c) * l + 1.2 * m,
          ),
          r.stroke());
      }
    }
    let w = 1051143;
    for (let e of [-1, 1]) {
      let n = (n) => f(e * (t.eyeT + n * t.eyeW)),
        i = (e, i, a) => {
          r.beginPath();
          for (let o = 0; o <= 24; o++) {
            let s = e + ((i - e) * o) / 24,
              c = Math.max(-1, Math.min(1, s)),
              l = n(s),
              u = p(Jt(t, c) - a(c));
            o === 0 ? r.moveTo(l, u) : r.lineTo(l, u);
          }
        },
        a = 0.024 + 0.01 * s.lid;
      ((r.fillStyle = P(
        c && !l
          ? F(F(h, 9064520, 0.3), 6965850, 0.25 * s.liner)
          : F(h, 9067096, 0.2),
        c ? 0.34 + 0.2 * s.liner : 0.28,
      )),
        i(-1.05, 1.1, (e) => a * Math.max(0, 1 - e * e) ** 0.5 + 0.002));
      for (let e = 24; e >= 0; e--) {
        let i = -1.05 + (2.15 * e) / 24;
        r.lineTo(n(i), p(Jt(t, Math.max(-1, Math.min(1, i))) + 0.001));
      }
      if ((r.closePath(), r.fill(), s.lid > 0.25)) {
        let e = 0.009 + 0.008 * s.lid;
        ((r.strokeStyle = P(I(h, 0.45), 0.18 + 0.3 * s.lid)),
          (r.lineWidth = 1.5 * m),
          i(-0.72, 1.02, (t) => e * (1 - 0.25 * t * t)),
          r.stroke());
      }
      let _ = 0.05 + 0.4 * s.liner;
      ((r.fillStyle = P(w, 0.95)),
        i(-1, 1, () => -0.0012),
        r.lineTo(n(1 + _), p(Jt(t, 1) - 0.01 - _ * 0.045)));
      for (let e = 24; e >= 0; e--) {
        let i = -1 + (e / 24) * 2,
          a =
            (0.0042 + (0.003 + 0.006 * s.liner) * ((i + 1) / 2) ** 1.3) *
            (c ? 1.1 : 0.9);
        r.lineTo(n(i), p(Jt(t, i) - a));
      }
      (r.closePath(), r.fill());
      let v = c ? 30 : 18;
      r.strokeStyle = P(w, 0.75);
      for (let i = 0; i < v; i++) {
        let a = -0.85 + (i / (v - 1)) * 1.9,
          o = Math.min(1, a),
          s = n(a),
          l = p(Jt(t, o) - 0.004),
          u = (c ? 5 : 3) * m * (0.6 + 0.8 * ((a + 1) / 2)),
          d = -Math.PI / 2 + e * (0.25 + 0.8 * Math.max(0, a));
        ((r.lineWidth = 0.9 * m),
          r.beginPath(),
          r.moveTo(s, l),
          r.lineTo(s + Math.cos(d) * u, l + Math.sin(d) * u),
          r.stroke());
      }
      ((r.strokeStyle = P(3810848, 0.45)),
        (r.lineWidth = 1.3 * m),
        r.beginPath());
      for (let e = 0; e <= 14; e++) {
        let i = -0.6 + (e / 14) * 1.6,
          a = n(i),
          o = p(Yt(t, Math.min(1, i)) + 0.0045);
        e === 0 ? r.moveTo(a, o) : r.lineTo(a, o);
      }
      (r.stroke(), (r.strokeStyle = P(w, 0.4)), (r.lineWidth = 0.7 * m));
      for (let i = 0; i < (c ? 14 : 8); i++) {
        let i = -0.4 + d() * 1.35,
          a = n(i),
          o = p(Yt(t, Math.min(1, i)) + 0.004);
        (r.beginPath(),
          r.moveTo(a, o),
          r.lineTo(
            a + e * (1 + 2 * Math.max(0, i)) * m,
            o + (2.2 + 1.5 * d()) * m,
          ),
          r.stroke());
      }
      (g(n(-1.02), p(t.eyeD), 3.4 * m, 3 * m, 14256774, 0.6),
        g(
          f(e * (t.eyeT - 0.04)),
          p(Yt(t, 0) + 0.03),
          t.eyeW * o * 0.32,
          0.016 * o,
          6965848,
          l ? 0.24 : u ? 0.05 : 0.1,
        ),
        c &&
          !l &&
          g(
            f(e * t.eyeT),
            p(Yt(t, 0) + 0.012),
            t.eyeW * o * 0.28,
            0.01 * o,
            16777215,
            0.12,
          ));
    }
    {
      let e = t.mouthW,
        n = F(F(h, 12736604, 0.4), 9060424, l ? 0.25 : 0),
        i = s.lipColor ? F(n, s.lipColor, 0.85) : n,
        a = I(i, 0.84),
        c = (e) => -1 + (2 * e) / 28,
        u = (n, i, a, o) => {
          r.beginPath();
          for (let i = 0; i <= 28; i++) {
            let a = c(i),
              s = Xt(t, a),
              l = n ? s - Zt(t, a) - o : s + Qt(t, a) + o;
            i === 0
              ? r.moveTo(f(a * e * (1 + o * 4)), p(l))
              : r.lineTo(f(a * e * (1 + o * 4)), p(l));
          }
          for (let i = 28; i >= 0; i--) {
            let a = c(i);
            r.lineTo(
              f(a * e * (1 + o * 4)),
              p(Xt(t, a) + (n ? 0.0015 : -0.0015)),
            );
          }
          (r.closePath(), (r.fillStyle = P(i, a)), r.fill());
        };
      (u(!0, i, 0.22, 0.002),
        u(!1, i, 0.22, 0.002),
        u(!0, a, 0.92, 0),
        u(!1, i, 0.92, 0),
        (r.strokeStyle = P(I(i, 0.7), 0.25)),
        (r.lineWidth = 0.8 * m));
      for (let n = 0; n < 26; n++) {
        let i = -0.85 + (n / 25) * 1.7 + (d() - 0.5) * 0.03,
          a = Xt(t, i),
          o = n % 2 == 0,
          s = o ? a - Zt(t, i) * 0.85 : a + Qt(t, i) * 0.1,
          c = o ? a - Zt(t, i) * 0.15 : a + Qt(t, i) * 0.85;
        (r.beginPath(),
          r.moveTo(f(i * e), p(s)),
          r.lineTo(f(i * e * (1 + 0.02 * (d() - 0.5))), p(c)),
          r.stroke());
      }
      (g(
        f(e * 0.08),
        p(Xt(t, 0) + Qt(t, 0) * 0.45),
        e * o * 0.2,
        0.007 * o,
        16777215,
        s.lipColor ? 0.3 : 0.18,
      ),
        (r.strokeStyle = P(I(i, 0.35), 0.9)),
        (r.lineWidth = 1.5 * m),
        r.beginPath());
      for (let n = 0; n <= 28; n++) {
        let i = c(n) * 1.02;
        n === 0
          ? r.moveTo(f(i * e), p(Xt(t, Math.max(-1, Math.min(1, i)))))
          : r.lineTo(f(i * e), p(Xt(t, Math.max(-1, Math.min(1, i)))));
      }
      r.stroke();
      for (let n of [-1, 1])
        g(f(n * e * 1.02), p(Xt(t, 1)), 3.2 * m, 2.6 * m, I(h, 0.42), 0.4);
      ((r.strokeStyle = P(I(h, 0.78), 0.1)), (r.lineWidth = 2 * m));
      for (let n of [-1, 1])
        (r.beginPath(),
          r.moveTo(f(n * 0.045), p(t.noseBaseD + 0.01)),
          r.lineTo(f(n * e * 0.28), p(Xt(t, 0.28) - Zt(t, 0.28))),
          r.stroke());
    }
    s.mole === 1
      ? g(f(0.5), p(0.72), 2.4 * m, 2.4 * m, 3810328, 0.85)
      : s.mole === 2 &&
        g(f(-0.2), p(t.mouthD + 0.06), 2.2 * m, 2.2 * m, 3810328, 0.85);
  };
}
function Ra(e) {
  return `eye:${e.face.iris}:${+(e.age === `elder`)}`;
}
function za(e, t) {
  return (n, r, i, a, o) => {
    let s = Pe(e.face.iris * 3 + 7),
      c = e.age === `elder`,
      l = a / 180,
      u = r + a / 2,
      d = i + o / 2,
      f = t * l;
    ((n.fillStyle = P(c ? 15327180 : 16052200)), n.fillRect(r, i, a, o));
    let p = n.createLinearGradient(r, 0, r + a, 0);
    (p.addColorStop(0, `rgba(200,120,115,0.35)`),
      p.addColorStop(0.28, `rgba(210,170,165,0.06)`),
      p.addColorStop(0.72, `rgba(210,170,165,0.06)`),
      p.addColorStop(1, `rgba(200,120,115,0.35)`),
      (n.fillStyle = p),
      n.fillRect(r, i, a, o),
      (n.lineCap = `round`));
    for (let e = 0; e < 18; e++) {
      let t = e % 2 ? 1 : -1,
        r = u + t * (a * (0.3 + s() * 0.18)),
        i = d + (s() - 0.5) * o * 0.7;
      ((n.strokeStyle = `rgba(190,60,60,${(0.1 + s() * 0.16).toFixed(3)})`),
        (n.lineWidth = 0.5 + s() * 0.7),
        n.beginPath(),
        n.moveTo(r, i));
      for (let e = 0; e < 4; e++)
        ((r -= t * (6 + s() * 10)), (i += (s() - 0.5) * 8), n.lineTo(r, i));
      n.stroke();
    }
    let m = e.face.iris,
      h = n.createRadialGradient(u, d, f * 0.2, u, d, f);
    (h.addColorStop(0, P(I(m, 0.7))),
      h.addColorStop(0.35, P(I(m, 1.3))),
      h.addColorStop(0.62, P(m)),
      h.addColorStop(0.88, P(I(m, 0.7))),
      h.addColorStop(1, P(1182214)),
      (n.fillStyle = h),
      n.beginPath(),
      n.arc(u, d, f, 0, Math.PI * 2),
      n.fill());
    for (let e = 0; e < 120; e++) {
      let e = s() * Math.PI * 2,
        t = f * (0.34 + s() * 0.1),
        r = f * (0.62 + s() * 0.32);
      ((n.strokeStyle =
        s() < 0.55
          ? P(I(m, 1.55), 0.18 + s() * 0.2)
          : P(I(m, 0.5), 0.2 + s() * 0.2)),
        (n.lineWidth = 0.6 + s() * 0.9),
        n.beginPath(),
        n.moveTo(u + Math.cos(e) * t, d + Math.sin(e) * t),
        n.lineTo(
          u + Math.cos(e + (s() - 0.5) * 0.08) * r,
          d + Math.sin(e + (s() - 0.5) * 0.08) * r,
        ),
        n.stroke());
    }
    ((n.strokeStyle = P(I(m, 1.45), 0.35)), (n.lineWidth = 1.4), n.beginPath());
    for (let e = 0; e <= 48; e++) {
      let t = (e / 48) * Math.PI * 2,
        r = f * (0.46 + 0.04 * Math.sin(t * 7 + s()));
      e === 0
        ? n.moveTo(u + Math.cos(t) * r, d + Math.sin(t) * r)
        : n.lineTo(u + Math.cos(t) * r, d + Math.sin(t) * r);
    }
    n.stroke();
    let g = n.createRadialGradient(u, d, f * 0.86, u, d, f * 1.12);
    (g.addColorStop(0, `rgba(14,8,6,0)`),
      g.addColorStop(0.45, `rgba(14,8,6,0.75)`),
      g.addColorStop(1, `rgba(14,8,6,0)`),
      (n.fillStyle = g),
      n.beginPath(),
      n.arc(u, d, f * 1.12, 0, Math.PI * 2),
      n.fill());
    let _ = n.createRadialGradient(u, d, 0, u, d, f * 0.38);
    (_.addColorStop(0, `#020101`),
      _.addColorStop(0.85, `#050303`),
      _.addColorStop(1, P(I(m, 0.4), 0)),
      (n.fillStyle = _),
      n.beginPath(),
      n.arc(u, d, f * 0.38, 0, Math.PI * 2),
      n.fill(),
      (n.fillStyle = `rgba(255,255,255,0.35)`),
      n.beginPath(),
      n.ellipse(
        u + f * 0.28,
        d - f * 0.32,
        f * 0.12,
        f * 0.1,
        0,
        0,
        Math.PI * 2,
      ),
      n.fill());
  };
}
function Ba(e) {
  return (t, n, r, i, a) => {
    let o = Pe(e ? 911 : 577);
    (t.clearRect(n, r, i, a), (t.lineCap = `round`));
    let s = e ? 90 : 60;
    for (let c = 0; c < s; c++) {
      let l = (c + o() * 0.8) / s,
        u = n + l * i,
        d =
          a *
          (e ? 0.62 + 0.38 * o() : 0.45 + 0.35 * o()) *
          (0.6 + 0.4 * Math.sin(l * Math.PI * 0.95 + 0.1)),
        f = (l - 0.3) * 10 + (o() - 0.5) * 3;
      ((t.strokeStyle = `rgba(235,235,235,${(0.85 + o() * 0.15).toFixed(3)})`),
        (t.lineWidth = e ? 1.6 : 1.3),
        t.beginPath(),
        t.moveTo(u, r + a),
        t.quadraticCurveTo(u + f * 0.3, r + a - d * 0.6, u + f, r + a - d),
        t.stroke());
    }
  };
}
var Va = 5e3,
  Ha = 1500,
  Ua = new D();
function Wa(e) {
  let t = e.joints.p;
  for (let n of [-1, 1]) {
    let r = n < 0 ? 0 : 1,
      i = n < 0 ? L.thighL : L.thighR,
      a = n < 0 ? L.shinL : L.shinR,
      o = n < 0 ? L.footL : L.footR;
    (t[i].set(n * 0.095, 0.92, 0),
      t[a].set(n * 0.095, 0.5, -0.006),
      t[o].set(n * 0.095, 0.086, 0.012));
    let s = n < 0 ? L.armL : L.armR,
      c = n < 0 ? L.foreL : L.foreR,
      l = n < 0 ? L.handL : L.handR,
      u = n < 0 ? L.fingersL : L.fingersR;
    (t[s].set(n * 0.205, 1.4, 0),
      t[c].set(n * 0.215, 1.115, 0.012),
      t[l].set(n * 0.222, 0.865, -0.01),
      t[u]
        .copy(t[l])
        .add(Ua.set(n * 0.004, -0.098 * (e.female ? 0.93 : 1), -0.004)));
    let d = e.arms[r],
      f = e.legs[r];
    (d.a.copy(t[s]),
      d.b.copy(t[c]),
      d.c.copy(t[l]),
      f.a.copy(t[i]),
      f.b.copy(t[a]),
      f.c.copy(t[o]));
  }
}
function* Ga(e, t) {
  let { lod: n, conform: r, skip: i } = t,
    a = r ? { ...e, height: 1.72 } : e,
    o = new bt(n === 0 ? 6144 : 2048);
  o.blank = it;
  let s = t.textured && n === 0 ? new re() : null;
  o.textured = !!s;
  let c = a.id === `jie` || a.id === `wen`,
    l = t.faceRes ?? (c ? 512 : 384),
    u = n === 0 ? Va : Ha,
    d = a.sex === `f`,
    f = Bt(a);
  r && Wa(f);
  let p = $t(a, f),
    m = Or(a, f);
  yield;
  let h = Li(a.hair.style, f.female),
    g = s
      ? s.tile(Ia(a) + `:` + l, l, l, !1, (e, t, n, r) =>
          La(a, p.lay, h)(e, t, n, r),
        )
      : null,
    _ = (Math.asin(Math.min(0.9, p.lay.irisR / p.eyes[0].r)) * 180) / Math.PI,
    v = s ? s.tile(Ra(a), 256, 128, !1, za(a, _)) : null,
    y = s ? s.tile(`lash:${+!!d}`, 128, 32, !1, Ba(d)) : null,
    b = Ri(a.hair.style, f.female),
    x = {},
    S = 0,
    C = (e, t) => {
      (i?.includes(e) || t(),
        (x[e] = o.triangleCount - S),
        (S = o.triangleCount));
    };
  (i?.includes(`head`) ||
    (yield* Zn({
      m: o,
      h: p,
      b: f,
      lod: n,
      skin: a.skin,
      faceRect: g,
      eyeRect: v,
      lashRect: y,
      cover: b,
      earsHidden: zi(a.hair.style, f.female) && !i?.includes(`hair`),
      lashColor: 985608,
      lashLen: d
        ? 0.55 + 0.45 * a.face.liner
        : a.age === `student`
          ? 0.3
          : 0.15,
    })),
    (x.head = S = o.triangleCount));
  let w = o.mark(),
    T = s ? s.reqs.length : 0,
    E = S;
  yield;
  for (let e = 0; ; e++) {
    e > 0 && (o.rollback(w), s?.rollback(T), (S = E));
    let t = a.seed >>> 0 || 1,
      r = {
        desc: a,
        b: f,
        h: p,
        m: o,
        lod: n,
        atlas: null,
        page: null,
        tiles: s,
        rnd: () => ((t = (t * 1664525 + 1013904223) >>> 0), t / 4294967296),
        nT: n === 0 ? [14, 12, 12, 10][e] : [8, 7, 7, 6][e],
        nL: n === 0 ? [9, 8, 8, 7][e] : [6, 6, 5, 5][e],
        fit: m,
        trim: e,
      };
    if (
      (C(`hair`, () => Bi(r, aa(a.acc))),
      yield,
      C(`torso`, () => Yr(r)),
      yield,
      C(`arms`, () => ii(r)),
      C(`hands`, () => mi(r)),
      yield,
      C(`legs`, () => ci(r)),
      C(`feet`, () => yi(r)),
      yield,
      C(`acc`, () => la(r)),
      o.triangleCount <= u || e >= 3)
    )
      return { m: o, b: f, h: p, tiles: s, breakdown: x, trim: e };
    yield;
  }
}
function Ka(e) {
  for (;;) {
    let t = e.next();
    if (t.done) return t.value;
  }
}
function qa(e, t) {
  return Ka(Ga(e, t));
}
var Ja = `
attribute vec4 uvRect;
attribute vec4 surf;
varying vec2 vUvT;
varying vec4 vRect;
varying vec4 vSurf;
varying vec3 vObjP;
`,
  Ya = `
uniform sampler2D uAtlas;
uniform float uHasAtlas;
uniform float uNight;
uniform float uWet;
uniform vec3 uSunDir;
uniform vec4 uCharFill;
varying vec2 vUvT;
varying vec4 vRect;
varying vec4 vSurf;
varying vec3 vObjP;
// per-fragment values shared with the RE_Direct wrapper
int gChK;
vec3 gHairT;
float gTexL;
vec3 gAlbedo;
float chHash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float chNoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(chHash(i), chHash(i + vec3(1.0, 0.0, 0.0)), f.x), mix(chHash(i + vec3(0.0, 1.0, 0.0)), chHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(chHash(i + vec3(0.0, 0.0, 1.0)), chHash(i + vec3(1.0, 0.0, 1.0)), f.x), mix(chHash(i + vec3(0.0, 1.0, 1.0)), chHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
// derivative bump with unnormalized screen-space sigmas → the height is in meters (true slopes at any distance)
vec3 chPerturb(vec3 p, vec3 n, vec2 dH) {
  vec3 sx = dFdx(p), sy = dFdy(p);
  vec3 r1 = cross(sy, n), r2 = cross(n, sx);
  float det = dot(sx, r1);
  vec3 grad = sign(det) * (dH.x * r1 + dH.y * r2);
  return normalize(abs(det) * n - grad);
}
`,
  Xa = `
  int chK = int(vSurf.x + 0.5);
  gChK = chK;
  float chMode = vSurf.z;
  float chTexL = 0.75;
  float chH = 0.0;
  bool chKill = false;
  // strand direction (hair tiles run along v) from the UV derivatives — computed in uniform control flow
  vec3 chP = -vViewPosition;
  vec3 chDp1 = dFdx(chP), chDp2 = dFdy(chP);
  vec2 chDuv1 = dFdx(vUvT), chDuv2 = dFdy(vUvT);
  float chPix = length(fwidth(vObjP)); // meters per pixel (bind-pose space)
  if (uHasAtlas > 0.5 && vRect.z > 0.0) {
    vec2 st = vUvT;
    bool rep = (chMode > 0.5 && chMode < 1.5) || chMode > 2.5;
    vec2 f = rep ? fract(st) : clamp(st, 0.0, 1.0);
    vec2 gx = chDuv1 * vRect.zw, gy = chDuv2 * vRect.zw;
    // clamp the mip level so tiles never bleed into their atlas neighbours (8 px gutters → level ≤ 3)
    vec2 tsz = vec2(textureSize(uAtlas, 0));
    float lod = log2(max(max(length(gx * tsz), length(gy * tsz)), 1e-6));
    float over = max(lod - 3.0, 0.0);
    float kk = exp2(-over);
    vec4 tx = textureGrad(uAtlas, vRect.xy + f * vRect.zw, gx * kk, gy * kk);
    if (chMode > 2.5) {
      // hair strands: R luminance, G coverage (cut where below the per-vertex threshold, dithered)
      chTexL = tx.r;
      float cut = vSurf.w;
      if (cut > 0.0 && tx.g < cut + (chHash(vec3(gl_FragCoord.xy, 0.0)) - 0.5) * 0.12) chKill = true;
      float far = smoothstep(0.0, 1.5, over);
      diffuseColor.rgb *= mix(0.55 + 0.6 * tx.r, 0.86, far);
      chH = tx.r * 0.00045 * (1.0 - far);
    } else if (rep) {
      chTexL = dot(tx.rgb, vec3(0.3333));
      if (over > 0.0) {
        // far away: fade to the tile's average (4 blurred quadrant samples)
        vec4 avg = 0.25 * (textureLod(uAtlas, vRect.xy + vec2(0.25, 0.25) * vRect.zw, 4.0) + textureLod(uAtlas, vRect.xy + vec2(0.75, 0.25) * vRect.zw, 4.0)
          + textureLod(uAtlas, vRect.xy + vec2(0.25, 0.75) * vRect.zw, 4.0) + textureLod(uAtlas, vRect.xy + vec2(0.75, 0.75) * vRect.zw, 4.0));
        tx = mix(tx, avg, smoothstep(0.0, 1.2, over));
      }
      diffuseColor.rgb *= tx.rgb;
      // woven relief from the tile luminance (cloth), fades with the mip clamp
      if (chK == 0 || chK == 9) chH = chTexL * 0.00035 * (1.0 - smoothstep(0.0, 1.0, over));
    } else {
      float inside = step(0.0, st.x) * step(st.x, 1.0) * step(0.0, st.y) * step(st.y, 1.0);
      tx *= inside;
      if (chMode > 1.5) {
        if (tx.a < 0.5) chKill = true;
        diffuseColor.rgb *= tx.rgb / max(tx.a, 1e-3);
      } else {
        diffuseColor.rgb = diffuseColor.rgb * (1.0 - tx.a) + tx.rgb;
      }
    }
  }
  gTexL = chTexL;
  if (chK == 1) {
    // skin micro relief: pores (~1 mm) + fine undulation (~4 mm) + a few larger soft bumps; fades before aliasing
    float amp = max(vSurf.w, 0.55);
    float pF = 1.0 - smoothstep(0.00025, 0.0007, chPix);
    float uF = 1.0 - smoothstep(0.0012, 0.003, chPix);
    float pores = chNoise(vObjP * 1150.0);
    float fine = chNoise(vObjP * 270.0 + 3.1);
    chH = amp * ((1.0 - pores * pores) * 0.00004 * pF + fine * 0.00011 * uF + chNoise(vObjP * 60.0) * 0.00018);
    gTexL = pores;
  } else if (chK == 0 || chK == 9) {
    // soft fabric wrinkles (≈ 3–6 cm) so no garment reads as a smooth CG shell
    chH += (chNoise(vObjP * 24.0) + 0.5 * chNoise(vObjP * 55.0 + 7.0)) * 0.0011;
    // compression folds: broken, warped bands across the limbs / torso (bind pose: limbs hang vertically),
    // strongest at the elbows, knees, ankles and the waist (heights for a ~1.55–1.8 m body)
    float fy = vObjP.y;
    float warp = chNoise(vObjP * 9.0) * 2.6 + chNoise(vObjP * 21.0) * 0.9;
    float band = 0.5 + 0.5 * sin(fy * 250.0 + warp * 3.2 + vObjP.x * 35.0 + vObjP.z * 20.0);
    float jt = exp(-pow((fy - 1.08) / 0.08, 2.0)) + exp(-pow((fy - 0.49) / 0.08, 2.0)) + 0.8 * exp(-pow((fy - 0.14) / 0.09, 2.0)) + 0.45 * exp(-pow((fy - 0.97) / 0.06, 2.0));
    float broken = smoothstep(0.3, 0.72, chNoise(vObjP * 6.5 + 1.7));
    chH += band * band * (0.18 + jt) * broken * 0.0016 * (1.0 - smoothstep(0.004, 0.012, chPix));
  }
  vec2 chDH = vec2(dFdx(chH), dFdy(chH));
  // hair strand tangent (direction of increasing tile v) from the cotangent frame; fallback: projected up
  {
    vec3 nG = normalize(cross(chDp1, chDp2));
    vec3 dp2perp = cross(chDp2, nG), dp1perp = cross(nG, chDp1);
    vec3 tv = dp2perp * chDuv1.y + dp1perp * chDuv2.y;
    vec3 upV = (viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz;
    gHairT = dot(tv, tv) > 1e-14 ? normalize(tv) : upV;
  }
  if (chKill) discard;
  if (chK == 0 || chK == 2 || chK == 9) diffuseColor.rgb *= 1.0 - 0.18 * uWet;
  if (chK == 8) diffuseColor.a = vSurf.w;
  gAlbedo = diffuseColor.rgb;
`,
  Za = `
  roughnessFactor = vSurf.y;
  if (chK == 1) roughnessFactor *= 0.86 + 0.3 * gTexL; // pore breakup of the skin sheen
  if (chK == 0 || chK == 2 || chK == 9 || chK == 1) roughnessFactor = mix(roughnessFactor, 0.3, uWet * 0.55);
`,
  Qa = `
  metalnessFactor = chK == 5 ? 0.85 : 0.0;
`,
  $a = `
  if (chK <= 2 || chK == 9) normal = chPerturb(-vViewPosition, normal, chDH);
  if (chK == 2) gHairT = normalize(gHairT - normal * dot(gHairT, normal) + 1e-5);
`,
  eo = `
void charDirect(const in IncidentLight directLight, const in vec3 N, const in vec3 V, inout ReflectedLight reflectedLight) {
  vec3 L = directLight.direction;
  float ndl = dot(N, L);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  if (gChK == 1) {
    // subsurface look: wrapped diffuse beyond the Lambert terminator, red-shifted (blood & melanin scatter)
    float wrapR = clamp((ndl + 0.5) / 1.5, 0.0, 1.0);
    float wrapG = clamp((ndl + 0.22) / 1.22, 0.0, 1.0);
    float lam = clamp(ndl, 0.0, 1.0);
    vec3 scatter = vec3(wrapR * wrapR, wrapG * wrapG, wrapG * wrapG * 0.92) - vec3(lam);
    reflectedLight.directDiffuse += directLight.color * gAlbedo * max(scatter, vec3(0.0)) * vec3(0.85, 0.42, 0.34) * RECIPROCAL_PI;
    // back-light transmission at thin silhouettes (ears, nose wings, fingers)
    float back = pow(clamp(dot(V, -L), 0.0, 1.0), 4.0) * pow(1.0 - ndv, 2.0);
    reflectedLight.directDiffuse += directLight.color * gAlbedo * vec3(1.0, 0.3, 0.2) * back * 0.25;
  } else if (gChK == 2) {
    // Kajiya-Kay: primary (shifted toward the root, white) + secondary (toward the tip, hair-tinted, noisy)
    vec3 T = gHairT;
    vec3 H = normalize(L + V);
    vec3 T1 = normalize(T + N * 0.12), T2 = normalize(T - N * 0.1);
    float th1 = dot(T1, H), th2 = dot(T2, H);
    float s1 = pow(sqrt(max(0.0, 1.0 - th1 * th1)), 110.0);
    float s2 = pow(sqrt(max(0.0, 1.0 - th2 * th2)), 22.0);
    float strand = 0.35 + 1.2 * gTexL * gTexL;
    float vis = smoothstep(-0.15, 0.35, ndl);
    // the white primary lobe scales with the hair's lightness: near-black hair keeps a thin sheen instead of turning
    // silver-grey under a high sun (seen from behind / above); blond / dyed hair keeps the full highlight
    float prim = 0.045 + 0.075 * clamp(dot(gAlbedo, vec3(0.3333)) * 7.0, 0.0, 1.0);
    reflectedLight.directSpecular += directLight.color * vis * (vec3(prim) * s1 * strand + gAlbedo * 0.9 * s2 * strand);
    // Kajiya diffuse: strands light from any side (softer terminator than Lambert)
    float tl = dot(T, L);
    float kd = sqrt(max(0.0, 1.0 - tl * tl));
    reflectedLight.directDiffuse += directLight.color * gAlbedo * RECIPROCAL_PI * max(0.0, 0.35 * kd * smoothstep(-0.4, 0.3, ndl) - 0.25 * max(ndl, 0.0));
  } else if (gChK == 0 || gChK == 9) {
    // cloth fuzz / satin sheen: grazing retro-scatter, lit from the light side
    float wrap = clamp((ndl + 0.3) / 1.3, 0.0, 1.0);
    float sheen = gChK == 9 ? pow(1.0 - ndv, 2.0) * 0.45 : pow(1.0 - ndv, 4.0) * 0.55;
    reflectedLight.directSpecular += directLight.color * gAlbedo * sheen * wrap * RECIPROCAL_PI;
  }
}
void RE_Direct_Physical(const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
  RE_Direct_Physical_Base(directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
  charDirect(directLight, geometryNormal, geometryViewDir, reflectedLight);
}
`,
  to = `
  {
    vec3 Vv = normalize(vViewPosition);
    float ndv = clamp(dot(normal, Vv), 0.0, 1.0);
    float rim = pow(1.0 - ndv, 3.0);
    vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    float up = dot(normal, upV) * 0.5 + 0.5;
    float day = 1.0 - uNight;
    // night readability: soft overhead fill + cool rim (city lights)
    totalEmissiveRadiance += diffuseColor.rgb * uNight * (0.05 + 0.12 * up);
    // character fill of lit venues (walk-in interiors, stations): albedo × rgb × intensity
    totalEmissiveRadiance += diffuseColor.rgb * uCharFill.rgb * uCharFill.w;
    totalEmissiveRadiance += vec3(0.62, 0.72, 1.0) * rim * (0.02 + 0.2 * uNight) * (0.4 + 0.6 * dot(diffuseColor.rgb, vec3(0.33)));
    if (chK == 1) {
      // skin: warm ambient bounce (light scattered inside the skin never looks grey in shade)
      totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.5, 0.4) * (0.01 + 0.018 * day) * (0.6 + 0.4 * up);
    } else if (chK == 2) {
      // hair: faint sky sheen along the strands so dark hair keeps a shape in shade
      vec3 Hs = normalize(upV + Vv);
      float ts = dot(gHairT, Hs);
      float sh = pow(sqrt(max(0.0, 1.0 - ts * ts)), 30.0);
      totalEmissiveRadiance += vec3(0.5, 0.56, 0.66) * sh * (0.012 + 0.03 * gTexL) * (day + 0.4 * uNight);
    } else if (chK == 3) {
      totalEmissiveRadiance += diffuseColor.rgb * 0.035;
    } else if (chK == 6) {
      totalEmissiveRadiance += diffuseColor.rgb * vSurf.w * (0.7 + 1.6 * uNight);
    } else if (chK == 7) {
      // retro-reflective tape: bright toward the viewer at night (headlights / street lights)
      totalEmissiveRadiance += diffuseColor.rgb * vSurf.w * (0.08 + 1.3 * uNight * pow(ndv, 1.5));
    } else if (chK == 8) {
      totalEmissiveRadiance += vec3(0.9, 0.95, 1.0) * pow(1.0 - ndv, 3.0) * 0.25;
    }
  }
`,
  no = null;
function ro() {
  if (!no) {
    let e = ne.uCharFill;
    no = e && e.value?.isVector4 ? e : { value: new A(0, 0, 0, 0) };
  }
  return no;
}
function io(e, t) {
  ((e.onBeforeCompile = (e) => {
    ((e.uniforms.uAtlas = { value: t }),
      (e.uniforms.uHasAtlas = { value: +!!t }),
      (e.uniforms.uNight = ne.uNight),
      (e.uniforms.uWet = ne.uWet),
      (e.uniforms.uSunDir = ne.uSunDir),
      (e.uniforms.uCharFill = ro()),
      (e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
` + Ja,
        )
        .replace(
          `#include <uv_vertex>`,
          `#include <uv_vertex>
  vUvT = uv; vRect = uvRect; vSurf = surf; vObjP = position;`,
        )));
    let n = E.lights_physical_pars_fragment.replace(
      `void RE_Direct_Physical(`,
      `void RE_Direct_Physical_Base(`,
    );
    e.fragmentShader = e.fragmentShader
      .replace(
        `#include <common>`,
        `#include <common>
` + Ya,
      )
      .replace(
        `#include <lights_physical_pars_fragment>`,
        n +
          `
` +
          eo,
      )
      .replace(
        `#include <color_fragment>`,
        `#include <color_fragment>
` + Xa,
      )
      .replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>
` + Za,
      )
      .replace(
        `#include <metalnessmap_fragment>`,
        `#include <metalnessmap_fragment>
` + Qa,
      )
      .replace(
        `#include <normal_fragment_maps>`,
        `#include <normal_fragment_maps>
` + $a,
      )
      .replace(
        `#include <emissivemap_fragment>`,
        `#include <emissivemap_fragment>
` + to,
      );
  }),
    (e.customProgramCacheKey = () => `charlib-hero-v4`));
}
var ao = new Map();
function oo(e) {
  let t = ao.get(e);
  if (t) return t;
  let n = new s({ vertexColors: !0, roughness: 0.8, metalness: 0 });
  (io(n, e), (n.name = `char-hero`));
  let r = new s({
    vertexColors: !0,
    roughness: 0.05,
    metalness: 0,
    transparent: !0,
    depthWrite: !1,
  });
  return (io(r, e), (r.name = `char-hero-lens`), (t = [n, r]), ao.set(e, t), t);
}
var so = `
attribute vec4 aInfo;
attribute vec4 iAnim; // phase, gait 0..2
uniform float uTime;
mat3 cRX(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
mat3 cRZ(float a) { float c = cos(a), s = sin(a); return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0); }
void crowdAnimate(inout vec3 p, inout vec3 n) {
  int pt = int(aInfo.x + 0.5);
  float phase = iAnim.x, gait = iAnim.y;
  float walkA = clamp(gait, 0.0, 1.0);
  float sp = sin(phase);
  float hipLp = sp * 0.37 * walkA, hipRp = -hipLp;
  float kneeL = walkA * (0.08 + 0.6 * max(0.0, cos(phase + 0.5)));
  float kneeR = walkA * (0.08 + 0.6 * max(0.0, -cos(phase + 0.5)));
  float shLp = -sp * 0.3 * walkA, shRp = sp * 0.3 * walkA;
  float elL = 0.15 * walkA + max(0.0, -sp) * 0.3 * walkA + 0.1, elR = 0.15 * walkA + max(0.0, sp) * 0.3 * walkA + 0.1;
  float rootY = -0.86 * (1.0 - cos(hipLp));
  if (pt >= 7 && pt <= 10) {
    bool left = pt <= 8;
    float side = left ? -1.0 : 1.0;
    vec3 hc = vec3(side * 0.095, 0.92, 0.0);
    if (pt == 8 || pt == 10) { vec3 kc = vec3(hc.x, 0.5, 0.0); mat3 K = cRX(-(left ? kneeL : kneeR)); p = kc + K * (p - kc); n = K * n; }
    mat3 H = cRX(left ? hipLp : hipRp); p = hc + H * (p - hc); n = H * n;
  } else if (pt >= 3 && pt <= 6 || pt == 11 || pt == 12) {
    bool right = pt == 5 || pt == 6 || pt == 11;
    float side = right ? 1.0 : -1.0;
    vec3 sc = vec3(side * 0.205, 1.4, 0.0), ec = vec3(side * 0.215, 1.115, 0.0);
    mat3 S = cRX(right ? shRp : shLp) * cRZ(side * 0.06);
    mat3 E = cRX(right ? elR : elL);
    if (pt >= 11) { vec3 wc = vec3(ec.x, 0.865, 0.0); vec3 wp = sc + S * (ec - sc + E * (wc - ec)); p = wp + (p - wc); }
    else { if (pt == 4 || pt == 6) { p = ec + E * (p - ec); n = E * n; } p = sc + S * (p - sc); n = S * n; }
  }
  if (pt != 13) p.y += rootY;
}
`;
function co() {
  let e = new w({ vertexColors: !0 });
  return (
    (e.onBeforeCompile = (e) => {
      ((e.uniforms.uTime = ne.uTime),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
` + so,
          )
          .replace(
            `#include <beginnormal_vertex>`,
            `vec3 objectNormal = vec3(normal);
  vec3 cP = position;
  crowdAnimate(cP, objectNormal);`,
          )
          .replace(`#include <begin_vertex>`, `vec3 transformed = cP;`)));
    }),
    (e.customProgramCacheKey = () => `charlib-crowd-preview-v1`),
    e
  );
}
var lo = Math.PI * 2;
function uo(e) {
  let t = e.joints.p;
  for (let n of [-1, 1]) {
    let r = n < 0 ? 0 : 1,
      i = e.arms[r],
      a = e.legs[r];
    (i.a.set(n * 0.205, 1.4, 0),
      i.b.set(n * 0.215, 1.115, 0.012),
      i.c.set(n * 0.222, 0.865, -0.01),
      a.a.set(n * 0.095, 0.92, 0),
      a.b.set(n * 0.095, 0.5, -0.006),
      a.c.set(n * 0.095, 0.086, 0.012),
      t[n < 0 ? L.armL : L.armR].copy(i.a),
      t[n < 0 ? L.thighL : L.thighR].copy(a.a));
  }
}
function fo(e) {
  let t = { ...e, height: 1.72 },
    n = Bt(t);
  uo(n);
  let r = $t(t, n),
    i = Or(t, n),
    a = new bt();
  ((a.blank = it), (a.textured = !1));
  let o = n.H,
    s = t.skin,
    c = i.outer ? i.outer.color : i.top ? i.top.color : s,
    l = i.top ? i.top.color : s,
    u = i.bottom.color,
    d = t.shoes.color,
    f = t.hair.style === `bald` ? s : t.hair.color,
    p = t.acc.find(
      (e) =>
        e.kind === `cap` ||
        e.kind === `helmet` ||
        e.kind === `visor` ||
        e.kind === `policeCap` ||
        e.kind === `bucket`,
    ),
    m = i.bottom.skirt,
    h = [0.47, 0.575, 0.74, 0.815, 0.868].map((e) => e * o),
    g = i.outer ? i.outer.hemY : i.top ? i.top.hemY : i.bottom.waistY;
  a.grid(
    {
      nu: 6,
      nv: h.length - 1,
      closed: !0,
      cap1: !0,
      point: (e, t, r) => {
        let i = Math.round(t * (h.length - 1)),
          a = h[i],
          o = e * lo - Math.PI + Math.PI / 6,
          s = i === h.length - 1 ? n.neckR + 0.004 : Vt(n, o, a, !0) + 0.012;
        return (
          i === h.length - 2 && (s += 0.03 * Math.abs(Math.sin(o))),
          i === 0 && m && (s += 0.03 + m.flare * 0.25),
          r.set(
            Math.sin(o) * s,
            i === 0 && m ? Math.max(m.hemY + 0.02, a - 0.12) : a,
            H(n, a) - Math.cos(o) * s,
          )
        );
      },
    },
    {
      color: (e, t, n, r, a, d) => {
        let f = Math.cos(r * lo - Math.PI + Math.PI / 6);
        return (
          t > 0.86 * o
            ? d.setHex(s)
            : t < g - 0.01
              ? d.setHex(u)
              : i.outer && i.outer.gap > 0 && f > 0.85
                ? d.setHex(l)
                : d.setHex(c),
          d
        );
      },
      skin: (e, t, n, r, i, a) => mo(a, t < 0.6 * o ? L.hips : L.chest),
      kind: z.cloth,
      rough: 0.85,
      shade: 0.15,
    },
  );
  let _ = [0, 0.3, 0.6, 0.9];
  a.grid(
    {
      nu: 5,
      nv: _.length - 1,
      closed: !0,
      cap1: !0,
      point: (e, t, n) => {
        let i = _[Math.round(t * (_.length - 1))],
          a = e * lo - Math.PI;
        return (
          W(r, a, i, i < 0.01 ? 0 : i < 0.4 ? 0.01 : 0.003, n, !1),
          i < 0.01 && (n.y += 0.01),
          n
        );
      },
    },
    {
      color: (e, n, r, i, a, o) => {
        let c = _[Math.round(a * (_.length - 1))],
          l = -Math.cos(i * lo - Math.PI);
        return (
          c <
          (p
            ? 0.34
            : t.hair.style === `bald`
              ? -1
              : 0.36 +
                0.3 * Math.max(0, l) +
                (t.hair.style === `long` ||
                t.hair.style === `wavy` ||
                t.hair.style === `bangs` ||
                t.hair.style === `bob`
                  ? 0.4 * Math.max(0, l + 0.3)
                  : 0))
            ? o.setHex(p ? (p.color ?? 2763310) : f)
            : o.setHex(s),
          o
        );
      },
      skin: L.head,
      kind: z.skin,
      rough: 0.6,
    },
  );
  for (let e of n.arms) ho(a, e, !0, i, c, u, d, s, !!m, o);
  for (let e of n.legs) ho(a, e, !1, i, c, u, d, s, !!m, o);
  let v = a.buildCrowd();
  return (
    (v.userData = {
      triangles: a.triangleCount,
      height: e.height,
      scale: e.height / 1.72,
      id: e.id,
      lod: 2,
    }),
    v
  );
}
var po = new D();
function mo(e, t) {
  ((e.i[0] = t),
    (e.i[1] = e.i[2] = e.i[3] = 0),
    (e.w[0] = 1),
    (e.w[1] = e.w[2] = e.w[3] = 0));
}
function ho(e, t, n, r, i, a, o, s, c, l) {
  let u = n ? [-0.05, 1, 2, 2.4] : [-0.05, 1, 2, 2.14],
    d = n ? (r.outer?.sleeveT ?? r.top?.sleeveT ?? 0) : c ? -1 : r.bottom.legT,
    f = n ? i : a,
    p = n ? (t.side < 0 ? L.armL : L.armR) : t.side < 0 ? L.thighL : L.thighR,
    m = n ? (t.side < 0 ? L.foreL : L.foreR) : t.side < 0 ? L.shinL : L.shinR,
    h = u.length - 1,
    g = r.bottom.skirt ? r.bottom.skirt.hemY : 0;
  e.grid(
    {
      nu: 3,
      nv: h,
      closed: !0,
      cap1: !0,
      point: (e, r, i) => {
        let a = u[Math.round(r * h)];
        return (
          zt(
            t,
            e * lo + (t.side < 0 ? Math.PI / 3 : 0),
            Math.min(a, 2),
            n
              ? a > 2.05
                ? -0.012
                : d > a
                  ? 0.012
                  : 0.002
              : a > 2.05
                ? 0.018
                : d > a
                  ? 0.01
                  : 0.002,
            i,
          ),
          a > 2 &&
            (po.subVectors(t.c, t.b).normalize(),
            i.addScaledVector(po, (a - 2) * (n ? 0.19 : 0.1)),
            n || (i.z -= 0.05)),
          i
        );
      },
    },
    {
      color: (e, t, r, i, l, p) => {
        let m = u[Math.round(l * h)];
        return !n && m > 2.05
          ? p.setHex(o)
          : n && m > 2.05
            ? p.setHex(s)
            : !n && c
              ? p.setHex(t > g ? a : s)
              : p.setHex(d >= m - 0.02 ? f : s);
      },
      skin: (e, t, n, r, i, a) => mo(a, u[Math.round(i * h)] >= 0.99 ? m : p),
      kind: z.cloth,
      rough: 0.8,
    },
  );
}
function go(e, t, r) {
  let a = xt(r.arrays),
    o = Ze({ p: r.joints }),
    s = o.map((e) => e.position.clone()),
    [c, l] = oo(r.page ? r.page.tex : null),
    u = new i(a, [c, l]);
  ((u.name = `char-${e.id}`),
    (u.castShadow = !0),
    (u.receiveShadow = !0),
    (u.frustumCulled = !0),
    (u.boundingSphere = a.boundingSphere.clone()),
    (u.boundingSphere.radius *= 1.35));
  let d = new m();
  ((d.name = `character-${e.id}`),
    d.add(o[L.hips]),
    d.add(u),
    d.updateMatrixWorld(!0));
  let f = new n(o);
  (u.bind(f),
    o[L.lidL].scale.set(1, 0.001, 1),
    o[L.lidR].scale.set(1, 0.001, 1));
  let p = r.joints;
  return {
    desc: e,
    lod: t,
    root: d,
    mesh: u,
    bones: o,
    skeleton: f,
    rest: s,
    joints: p.map((e) => e.clone()),
    triangles: r.triangles,
    breakdown: r.breakdown,
    trim: r.trim,
    height: r.height,
    thighLen: p[L.thighL].distanceTo(p[L.shinL]),
    shinLen: p[L.shinL].distanceTo(p[L.footL]),
    dispose() {
      (a.dispose(), f.dispose());
    },
  };
}
function _o(e, t, n) {
  let r = e.m.heroArrays();
  return (
    n && ie(r.rect, n),
    {
      arrays: r,
      page: t,
      joints: e.b.joints.p,
      height: e.b.H,
      triangles: e.m.triangleCount,
      breakdown: e.breakdown,
      trim: e.trim,
    }
  );
}
function vo(e) {
  return e.atlas === void 0 ? je() : e.atlas;
}
var yo = new WeakMap(),
  bo = 1,
  xo = new Map(),
  So = 8,
  Co = 3e4,
  wo = null;
function To() {
  (wo !== null && clearTimeout(wo), (wo = null), xo.clear(), me(), Ne(), ke());
}
function Eo() {
  (wo !== null && clearTimeout(wo),
    (wo = setTimeout(() => {
      ((wo = null), Go.size || Lo.length ? Eo() : To());
    }, Co)));
}
function Do(e, t, n, r) {
  let i = 0;
  return (
    n && ((i = yo.get(n) ?? 0), i || yo.set(n, (i = bo++))),
    `${i}|${t}|${r.faceRes ?? ``}|${r.skip?.join(`,`) ?? ``}|${JSON.stringify(e)}`
  );
}
function Oo(e) {
  let t = e.arrays;
  return {
    ...e,
    arrays: {
      pos: t.pos.slice(),
      nor: t.nor.slice(),
      col: t.col.slice(),
      uv: t.uv.slice(),
      rect: t.rect.slice(),
      surf: t.surf.slice(),
      si: t.si.slice(),
      sw: t.sw.slice(),
      idx: t.idx.slice(),
      n0: t.n0,
      bounds: t.bounds ?? yt(t.pos),
    },
    joints: e.joints.map((e) => e.clone()),
  };
}
function ko(e) {
  let t = xo.get(e);
  return t ? (xo.delete(e), xo.set(e, t), Eo(), Oo(t)) : null;
}
function Ao(e, t) {
  for (xo.set(e, Oo(t)); xo.size > So;) xo.delete(xo.keys().next().value);
  Eo();
}
function jo(e, t = {}) {
  return Ka(Mo(e, t));
}
function* Mo(e, t = {}) {
  return go(e, t.lod ?? 0, yield* No(e, t));
}
function* No(e, t) {
  let n = t.lod ?? 0,
    r = vo(t),
    i = Do(e, n, r, t),
    a = ko(i);
  if (a) return a;
  let o = yield* Ga(e, {
      lod: n,
      textured: n === 0 && !!r,
      conform: !1,
      faceRes: t.faceRes,
      skip: t.skip,
    }),
    s = null,
    c = null;
  if (o.tiles && r) {
    yield;
    let e = yield* r.resolveSteps(o.tiles.reqs);
    ((s = e.page), (c = e.rects), r.flush());
  }
  let l = _o(o, s, c);
  return (Ao(i, l), l);
}
function Po(e, t = {}) {
  if (t.lod === 2) return fo(e);
  let n = qa(e, {
      lod: t.lod ?? 1,
      textured: !1,
      conform: t.conformPeds !== !1,
    }),
    r = n.m.buildCrowd();
  return (
    (r.userData = {
      triangles: n.m.triangleCount,
      breakdown: n.breakdown,
      trim: n.trim,
      height: e.height,
      scale: e.height / 1.72,
      id: e.id,
    }),
    r
  );
}
function Fo(e) {
  return jo(e, { lod: 1, atlas: null });
}
var Io = new (class {
    w = null;
    seq = 1;
    pending = new Map();
    broken = !1;
    noPaint = !1;
    built = 0;
    workerMs = 0;
    applyMs = 0;
    applyMax = 0;
    noteApply(e) {
      ((this.applyMs += e), (this.applyMax = Math.max(this.applyMax, e)));
    }
    start() {
      if (this.w || this.broken) return this.w;
      if (typeof Worker > `u`) return ((this.broken = !0), null);
      try {
        let e = new Worker(
          new URL(`/tokyo/assets/charWorker-DPNUr-Eu.js`, `` + import.meta.url),
          { type: `module` },
        );
        ((e.onmessage = (e) => {
          this.lastReply = performance.now();
          let t = e.data,
            n = this.pending.get(t.id);
          n &&
            (this.pending.delete(t.id),
            t.error
              ? n.reject(Error(t.error))
              : (this.built++, (this.workerMs += t.ms ?? 0), n.resolve(t)));
        }),
          (e.onerror = (e) => {
            (e.preventDefault?.(),
              console.warn(
                `[characters] build worker unavailable — building on the main thread (sliced)`,
              ),
              this.fail());
          }),
          (this.w = e));
      } catch {
        this.broken = !0;
      }
      return this.w;
    }
    lastReply = 0;
    watchT = 0;
    watch() {
      if (this.watchT || this.broken) return;
      let e = this.lastReply + N - performance.now();
      this.watchT = setTimeout(
        () => {
          if (((this.watchT = 0), this.pending.size && !this.broken)) {
            if (performance.now() - this.lastReply < 15e3) return this.watch();
            (console.warn(
              `[characters] build worker silent for ${N / 1e3} s — building on the main thread (sliced)`,
            ),
              this.fail());
          }
        },
        Math.max(250, e),
      );
    }
    fail() {
      ((this.broken = !0), this.w?.terminate(), (this.w = null));
      let e = [...this.pending.values()];
      this.pending.clear();
      for (let t of e) t.reject(Error(`worker failed`));
    }
    run(e) {
      let t = this.start();
      if (!t) return null;
      let n = this.seq++,
        r = { ...e, id: n };
      return new Promise((e, i) => {
        (this.pending.size || (this.lastReply = performance.now()),
          this.pending.set(n, { resolve: e, reject: i, job: r }),
          this.watch());
        try {
          t.postMessage(r);
        } catch (e) {
          (this.pending.delete(n), i(e));
        }
      });
    }
    get inFlight() {
      return this.pending.size;
    }
  })(),
  Lo = [],
  Ro = !1,
  zo = 0,
  Bo =
    typeof requestAnimationFrame == `function`
      ? (e) => requestAnimationFrame(e)
      : (e) => setTimeout(e, 16);
function Vo() {
  if (((Ro = !1), !Lo.length)) return;
  let e = performance.now(),
    t = Lo[0].budget;
  do {
    let e = Lo[0];
    try {
      let t = e.it.next();
      t.done && (Lo.shift(), e.resolve(t.value));
    } catch (t) {
      (Lo.shift(), e.reject(t));
    }
  } while (Lo.length && performance.now() - e < t);
  ((zo += performance.now() - e), Lo.length && Ho());
}
function Ho() {
  Ro || ((Ro = !0), Bo(Vo));
}
function Uo(e, t = 2) {
  return new Promise((n, r) => {
    (Lo.push({ it: e, budget: Math.max(0.5, t), resolve: n, reject: r }), Ho());
  });
}
function Wo(e) {
  let t = [];
  for (let n = 0; n < 27; n++)
    t.push(new D(e[n * 3], e[n * 3 + 1], e[n * 3 + 2]));
  return t;
}
var Go = new Map();
function Ko(e, t = {}) {
  let n = t.lod ?? 0,
    r = vo(t),
    i = Do(e, n, r, t),
    a = ko(i);
  if (a) return Promise.resolve(go(e, n, a));
  let o = Go.get(i);
  if (o) return o.then((t) => go(e, n, Oo(t)));
  let s = qo(e, n, r, i, t);
  Go.set(i, s);
  let c = () => void Go.delete(i);
  return (
    s.then(c, c),
    s.then((t) => {
      let r = performance.now(),
        i = go(e, n, t);
      return (
        t.applyMs !== void 0 && Io.noteApply(t.applyMs + performance.now() - r),
        i
      );
    })
  );
}
function qo(e, t, n, r, i) {
  let a = t === 0 && !!n,
    o = () => Uo(No(e, i), i.budgetMs);
  if (i.worker === !1 || Io.broken || (a && Io.noPaint)) return o();
  let s = Io.run({
    kind: `hero`,
    desc: e,
    lod: t,
    textured: a,
    conform: !1,
    faceRes: i.faceRes,
    skip: i.skip,
  });
  return s
    ? s.then(
        (e) => {
          if (e.noPaint) return ((Io.noPaint = !0), o());
          let t = performance.now(),
            i = null,
            s = {
              pos: e.pos,
              nor: e.nor,
              col: e.col,
              uv: e.uv,
              rect: e.rect,
              surf: e.surf,
              si: e.si,
              sw: e.sw,
              idx: e.idx,
              n0: e.n0,
              bounds: e.bounds,
            };
          if (a && e.tiles && e.tiles.length && n) {
            let t = n.resolve(
              e.tiles,
              e.sheet ? { src: e.sheet, xy: e.xy } : void 0,
            );
            ((i = t.page), ie(s.rect, t.rects), n.flush());
          }
          e.sheet?.close();
          let c = {
            arrays: s,
            page: i,
            joints: Wo(e.joints),
            height: e.height,
            triangles: e.triangles,
            breakdown: e.breakdown,
            trim: e.trim,
          };
          return (Ao(r, c), (c.applyMs = performance.now() - t), c);
        },
        (e) => (
          console.warn(
            `[characters] worker build failed, building on the main thread`,
            e,
          ),
          o()
        ),
      )
    : o();
}
function Jo(e, t = {}) {
  if (t.lod === 2) return Promise.resolve(fo(e));
  let n = t.lod ?? 1,
    r = t.conformPeds !== !1,
    i = () =>
      Uo(
        (function* () {
          let t = yield* Ga(e, { lod: n, textured: !1, conform: r }),
            i = t.m.buildCrowd();
          return (
            (i.userData = {
              triangles: t.m.triangleCount,
              breakdown: t.breakdown,
              trim: t.trim,
              height: e.height,
              scale: e.height / 1.72,
              id: e.id,
            }),
            i
          );
        })(),
        t.budgetMs,
      );
  if (t.worker === !1 || Io.broken) return i();
  let a = Io.run({ kind: `crowd`, desc: e, lod: n, textured: !1, conform: r });
  return a
    ? a.then(
        (t) => {
          let n = new y();
          return (
            n.setAttribute(`position`, new x(t.pos, 3)),
            n.setAttribute(`normal`, new x(t.nor, 3)),
            n.setAttribute(`color`, new x(t.col, 3)),
            n.setAttribute(`part`, new x(t.part, 1)),
            n.setAttribute(`aInfo`, new x(t.info, 4)),
            n.setIndex(new x(t.idx, 1)),
            n.computeBoundingSphere(),
            n.computeBoundingBox(),
            (n.userData = {
              triangles: t.triangles,
              breakdown: t.breakdown,
              trim: t.trim,
              height: e.height,
              scale: e.height / 1.72,
              id: e.id,
            }),
            n
          );
        },
        (e) => (
          console.warn(
            `[characters] worker crowd build failed, building on the main thread`,
            e,
          ),
          i()
        ),
      )
    : i();
}
function Yo() {
  return {
    worker: !Io.broken,
    paintsInWorker: !Io.noPaint,
    built: Io.built,
    workerMs: +Io.workerMs.toFixed(1),
    applyMs: +Io.applyMs.toFixed(2),
    applyMaxMs: +Io.applyMax.toFixed(2),
    inFlight: Io.inFlight,
    slicedQueued: Lo.length,
    slicedMs: +zo.toFixed(1),
  };
}
var Xo = (e, t, n) => (e < t ? t : e > n ? n : e),
  Zo = class {
    ch;
    phase = 0;
    t = 0;
    blinkT = 1 + Math.random() * 2;
    blinkP = -1;
    sacT = 0.5 + Math.random();
    gazeTX = 0;
    gazeTY = 0;
    gazeX = 0;
    gazeY = 0;
    carry;
    stance;
    constructor(e, t = 0) {
      ((this.ch = e),
        (this.t = t * 13.1),
        (this.stance = (e.desc.seed ?? t) % 2 ? 1 : -1));
      let n = (t) => e.desc.acc.some((e) => e.kind === t);
      this.carry = {
        umbrella: n(`umbrella`),
        cup: n(`cup`),
        phone: n(`phone`),
        bagL: n(`marketBag`),
        fan: n(`fan`),
      };
    }
    update(e, t) {
      let n = this.ch.bones;
      this.t += e;
      let r = this.t,
        i = Xo(t.gait, 0, 2),
        a = Xo(i, 0, 1),
        o = Xo(i - 1, 0, 1),
        s = 1 - Xo(i * 3, 0, 1),
        c = (1.35 + 0.9 * o) * (this.ch.height / 1.72);
      ((this.phase += (t.speed / c) * Math.PI * 2 * e),
        this.phase > Math.PI * 2 && (this.phase -= Math.PI * 2));
      let l = this.phase,
        u = Math.sin(l),
        d = this.ch.desc.stoop ?? (this.ch.desc.age === `elder` ? 0.45 : 0),
        f = u * (0.37 * a + 0.33 * o),
        p = -f,
        m =
          a * (0.08 + 0.6 * Math.max(0, Math.cos(l + 0.5))) +
          o * (0.35 + 1.05 * Math.max(0, Math.cos(l + 0.3))),
        h =
          a * (0.08 + 0.6 * Math.max(0, -Math.cos(l + 0.5))) +
          o * (0.35 + 1.05 * Math.max(0, -Math.cos(l + 0.3))),
        g = Math.sin(r * 0.19) * s;
      ((m += 0.08 * Math.max(0, g) + d * 0.1),
        (h += 0.08 * Math.max(0, -g) + d * 0.1));
      let _ = 0.3 * a + 0.55 * o,
        v = -u * _,
        y = u * _,
        b = Math.max(
          0,
          (this.ch.desc.build === `heavy`
            ? 1
            : this.ch.desc.build === `avg`
              ? 0.35
              : 0) - 0.2,
        ),
        x = 0.07 * a + 0.1 * o + (0.018 + 0.05 * b) * s + 0.02,
        S = x,
        C = 0.15 * a + 1.15 * o + 0.3 * s + Math.max(0, -u) * 0.3 * a,
        w = 0.15 * a + 1.15 * o + 0.34 * s + Math.max(0, u) * 0.3 * a;
      ((v += 0.06 * s), (y += 0.045 * s));
      let T = -0.42 * s - 0.2 * a * (1 - o),
        E = 0.42 * s + 0.2 * a * (1 - o),
        D = 0,
        O = 0,
        k = 0,
        A = 0.035 * a + 0.24 * o + d * 0.3 + 0.012 * Math.sin(r * 1.7) * s,
        j = u * (0.06 * a + 0.1 * o),
        ee = -d * 0.25 + s * 0.04 * Math.sin(r * 0.31),
        M = 1 - o,
        N = this.carry;
      ((N.umbrella || N.cup || N.fan) && (E *= 1 - M),
        (N.phone || N.bagL) && (T *= 1 - M),
        N.umbrella
          ? ((y += (0.32 - y) * M),
            (S += (-0.3 - S) * M),
            (w += (1.72 - w) * M),
            (D = Math.PI - (y + w)))
          : N.cup
            ? ((y += (0.12 + y * 0.3 - y) * M),
              (w += (1.35 - w) * M),
              (S += (-0.05 - S) * M),
              (D = -(y + w) + 0.05))
            : N.fan &&
              ((y += (0.35 - y) * M),
              (w += (1.9 + 0.25 * Math.sin(r * 9) - w) * M),
              (S += (0.15 - S) * M)),
        N.phone
          ? ((v += (0.3 - v) * M),
            (C += (1.45 - C) * M),
            (x += (-0.3 - x) * M),
            (ee += 0.4 * M * (1 - o)),
            (O = -0.2),
            (k = 0.9))
          : N.bagL &&
            ((v += (v * 0.3 - v) * M),
            (x += (0.2 - x) * M),
            (C += (0.06 - C) * M)));
      let te =
          -0.86 * (1 - Math.cos(f)) * (this.ch.height / 1.72) * 0.7 +
          o * 0.045 * Math.abs(Math.cos(l)) -
          0.012 * Math.abs(g) -
          d * 0.015,
        ne = this.stance * s * (d > 0.3 ? 0.4 : 1),
        re = +(ne > 0),
        ie = +(ne < 0),
        ae = Math.abs(ne);
      ((m += 0.2 * re * ae),
        (h += 0.2 * ie * ae),
        n[L.thighL].rotation.set(
          f + 0.1 * re * ae,
          0,
          -0.02 - 0.05 * re * ae + 0.045 * ne,
        ),
        n[L.thighR].rotation.set(
          p + 0.1 * ie * ae,
          0,
          0.02 + 0.05 * ie * ae + 0.045 * ne,
        ),
        n[L.shinL].rotation.set(-m, 0, 0),
        n[L.shinR].rotation.set(-h, 0, 0),
        n[L.footL].rotation.set(
          -(f - m) - 0.1 * a * Math.max(0, -Math.sin(l + 0.4)),
          0,
          0.02,
        ),
        n[L.footR].rotation.set(
          -(p - h) - 0.1 * a * Math.max(0, Math.sin(l + 0.4)),
          0,
          -0.02,
        ),
        n[L.armL].rotation.set(v, 0, -x),
        n[L.armR].rotation.set(y, 0, S),
        n[L.foreL].rotation.set(C, T, 0),
        n[L.foreR].rotation.set(w, E, 0));
      let oe = 0.05 * s + 0.02,
        se = 0.035 * s;
      (n[L.shoulderL].rotation.set(0, -oe + 0.04 * u * a, se),
        n[L.shoulderR].rotation.set(0, oe + 0.04 * u * a, -se),
        n[L.handL].rotation.set(O, k, 0),
        n[L.handR].rotation.set(D, 0, 0));
      let ce = 0.25 + 0.35 * o;
      (n[L.fingersL].rotation.set(0, 0, ce + (N.phone || N.bagL ? 0.5 : 0)),
        n[L.fingersR].rotation.set(
          0,
          0,
          -(ce + (N.umbrella || N.cup || N.fan ? 0.6 : 0)),
        ),
        n[L.spine].rotation.set(-A * 0.5, -j * 0.5, 0),
        n[L.chest].rotation.set(
          -A * 0.5 + 0.015 * Math.sin(r * 1.6) * s,
          -j * 0.5,
          0,
        ),
        n[L.hips].rotation.set(
          0,
          j * 0.6 + 0.06 * ne,
          u * 0.03 * a - 0.045 * ne,
        ),
        (n[L.chest].rotation.z = 0.035 * ne));
      let le = this.ch.rest[L.hips];
      n[L.hips].position.set(
        le.x + 0.012 * g + 0.022 * ne,
        le.y + te - 0.008 * ae,
        le.z,
      );
      let ue =
        (t.look ?? 0) + s * 0.25 * Math.sin(r * 0.23) * Math.sin(r * 0.11 + 2);
      if (
        (n[L.neck].rotation.set(-ee * 0.5, ue * 0.4, 0),
        n[L.head].rotation.set(
          -ee * 0.5 + (a > 0 ? 0.02 * Math.sin(l * 2) : 0),
          ue * 0.6 - j * 0.8,
          (0.035 * ne + 0.02 * Math.sin(r * 0.17)) * s,
        ),
        (this.sacT -= e),
        this.sacT <= 0)
      ) {
        this.sacT = 0.5 + Math.random() * 2.2;
        let e = Math.random() < 0.35;
        ((this.gazeTY =
          (Math.random() - 0.5) * (e ? 0.2 : 0.06) * (0.4 + 0.6 * s)),
          (this.gazeTX = (Math.random() - 0.5) * 0.06 - 0.02 * a));
      }
      let de = Math.min(1, e * 28);
      ((this.gazeX += (this.gazeTX - this.gazeX) * de),
        (this.gazeY += (this.gazeTY + ue * 0.35 - this.gazeY) * de),
        n[L.eyeL].rotation.set(this.gazeX, this.gazeY, 0),
        n[L.eyeR].rotation.set(this.gazeX, this.gazeY, 0),
        n[L.hair].rotation.set(
          0.1 * a * Math.sin(l * 2 + 1) + 0.05 * o,
          0.12 * a * Math.sin(l),
          0.08 * Math.sin(r * 1.3) * s,
        ),
        (this.blinkT -= e));
      let fe = 0.001;
      if (this.blinkP >= 0) {
        this.blinkP += e;
        let t = this.blinkP;
        ((fe = t < 0.06 ? t / 0.06 : t < 0.16 ? 1 - (t - 0.06) / 0.1 : 0.001),
          t >= 0.16 && (this.blinkP = -1));
      } else
        this.blinkT <= 0 &&
          ((this.blinkP = 0), (this.blinkT = 2 + Math.random() * 3.5));
      if (
        ((fe = Math.max(0.001, fe)),
        n[L.lidL].scale.set(1, fe, 1),
        n[L.lidR].scale.set(1, fe, 1),
        t.talk !== void 0 || t.jaw !== void 0)
      ) {
        let i = Xo(t.talk ?? 0, 0, 1);
        this.talkW += (i - this.talkW) * Math.min(1, e * 8);
        let a = Math.abs(
            Math.sin(r * 11.7) * (0.55 + 0.45 * Math.sin(r * 3.1 + 1.3)),
          ),
          o = this.talkW * (0.03 + 0.1 * a) + Xo(t.jaw ?? 0, 0, 1) * 0.22;
        n[L.jaw].rotation.set(-o, 0, 0);
      }
    }
    talkW = 0;
  },
  Y = {
    porcelain: 15980224,
    fair: 15518125,
    light: 14990748,
    medium: 14199428,
    tan: 13211248,
    deep: 11566682,
  },
  X = {
    black: 1709073,
    softBlack: 2431766,
    darkBrown: 3022873,
    brown: 4862498,
    ash: 6970450,
    auburn: 5909022,
    grey: 9407108,
    white: 13223359,
  };
function Z(e = {}) {
  return {
    jaw: 0.5,
    length: 0.5,
    cheek: 0.5,
    eyeSize: 1,
    eyeTilt: 0.1,
    eyeGap: 1,
    lid: 0.5,
    noseW: 0.5,
    noseL: 0.5,
    bridge: 0.4,
    lips: 0.5,
    mouthW: 1,
    brow: 0.5,
    browArch: 0.4,
    iris: 3810328,
    lipColor: 0,
    blush: 0.1,
    liner: 0,
    facial: `none`,
    wrinkles: 0,
    mole: 0,
    smile: 0.1,
    ...e,
  };
}
var Q = (...e) => e.map((e) => (typeof e == `string` ? { kind: e } : e)),
  Qo = {
    id: `jie`,
    name: { zh: `阿傑`, en: `Jie` },
    sex: `m`,
    age: `adult`,
    build: `avg`,
    height: 1.76,
    skin: 14264707,
    face: Z({
      jaw: 0.58,
      length: 0.45,
      cheek: 0.55,
      eyeSize: 1.02,
      eyeTilt: 0.14,
      lid: 0.42,
      noseW: 0.5,
      bridge: 0.55,
      lips: 0.42,
      mouthW: 1.02,
      brow: 0.8,
      browArch: 0.3,
      smile: 0.3,
      facial: `stubble`,
      iris: 3021842,
    }),
    hair: { style: `twoblock`, color: 1314830, color2: 2759700 },
    top: { style: `tee`, color: 15921386, print: `band`, color2: 1842210 },
    outer: { style: `bomber`, color: 4016690, color2: 15234332, print: `jie` },
    bottom: { style: `jeans`, color: 4874886, belt: 2759957 },
    shoes: {
      style: `sneaker`,
      color: 16053490,
      color2: 13115436,
      sole: 15526111,
    },
    socks: 15921906,
    acc: Q(
      { kind: `watch`, color: 1118483, color2: 13685976 },
      { kind: `necklace`, color: 14278112 },
    ),
    seed: 101,
  },
  $o = {
    id: `wen`,
    name: { zh: `小雯`, en: `Wen` },
    sex: `f`,
    age: `adult`,
    build: `slim`,
    height: 1.64,
    skin: 15781814,
    face: Z({
      jaw: 0.3,
      length: 0.5,
      cheek: 0.55,
      eyeSize: 1.08,
      eyeTilt: 0.2,
      eyeGap: 1,
      lid: 0.62,
      noseW: 0.35,
      noseL: 0.45,
      bridge: 0.55,
      lips: 0.62,
      mouthW: 0.95,
      brow: 0.45,
      browArch: 0.6,
      lipColor: 12863311,
      blush: 0.25,
      liner: 0.75,
      mole: 1,
      smile: 0.05,
      iris: 3350543,
    }),
    hair: { style: `ponytail`, color: 1905679, color2: 5913124 },
    top: { style: `tank`, color: 1579036, tucked: !0 },
    outer: { style: `cropped`, color: 15987180, color2: 2074006, print: `wen` },
    bottom: { style: `wide`, color: 14997695, belt: 2761760 },
    shoes: {
      style: `sneaker`,
      color: 16513782,
      color2: 3126182,
      sole: 15722972,
    },
    acc: Q(
      { kind: `necklace`, color: 15257738 },
      { kind: `watch`, color: 15328474, color2: 13215850 },
      { kind: `earbuds` },
    ),
    seed: 202,
  };
function $(e, t, n, r) {
  return { id: e, name: { zh: t, en: n }, seed: r.seed ?? es(e), ...r };
}
function es(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
var ts = [
    $(`office-m`, `上班族`, `Office worker`, {
      sex: `m`,
      age: `adult`,
      build: `avg`,
      height: 1.74,
      skin: Y.light,
      face: Z({ jaw: 0.55, eyeSize: 0.95, lid: 0.3, brow: 0.6, smile: 0 }),
      hair: { style: `sidepart`, color: X.black },
      top: { style: `shirt`, color: 13623538, tucked: !0 },
      bottom: { style: `slacks`, color: 3026998, belt: 1774865 },
      shoes: { style: `dress`, color: 1380879 },
      acc: Q(
        `glasses`,
        { kind: `lanyard`, color: 2777784 },
        { kind: `backpack`, color: 2961203 },
        `watch`,
      ),
    }),
    $(`office-f`, `粉領族`, `Office lady`, {
      sex: `f`,
      age: `adult`,
      build: `slim`,
      height: 1.6,
      skin: Y.fair,
      face: Z({
        jaw: 0.3,
        eyeSize: 1.04,
        lid: 0.7,
        lipColor: 12079194,
        blush: 0.2,
        liner: 0.3,
        browArch: 0.5,
      }),
      hair: { style: `bob`, color: X.darkBrown, color2: X.brown },
      top: { style: `blouse`, color: 15986146, sleeve: `short` },
      outer: { style: `cardigan`, color: 14272422, color2: 13482388 },
      bottom: { style: `pencil`, color: 2765382 },
      shoes: { style: `heel`, color: 1709590 },
      acc: Q(
        { kind: `tote`, color: 13216138 },
        { kind: `lanyard`, color: 13120556 },
        { kind: `mask`, color: 15263978 },
      ),
    }),
    $(`student-m`, `高中生（男）`, `High-school boy`, {
      sex: `m`,
      age: `student`,
      build: `slim`,
      height: 1.7,
      skin: Y.light,
      face: Z({
        jaw: 0.4,
        eyeSize: 1.02,
        lid: 0.35,
        cheek: 0.4,
        brow: 0.55,
        smile: 0.15,
      }),
      hair: { style: `bowl`, color: X.black },
      top: {
        style: `uniform`,
        color: 16185074,
        print: `school`,
        color2: 2768780,
      },
      bottom: { style: `slacks`, color: 12168070 },
      shoes: {
        style: `sneaker`,
        color: 1776415,
        color2: 15921906,
        sole: 15921906,
      },
      socks: 15921906,
      acc: Q({ kind: `schoolbag`, color: 2306639 }, `glasses`, `earbuds`),
    }),
    $(`student-f`, `高中生（女）`, `High-school girl`, {
      sex: `f`,
      age: `student`,
      build: `slim`,
      height: 1.58,
      skin: Y.porcelain,
      face: Z({
        jaw: 0.25,
        eyeSize: 1.1,
        lid: 0.55,
        cheek: 0.45,
        lips: 0.55,
        blush: 0.3,
        browArch: 0.35,
        smile: 0.25,
      }),
      hair: { style: `bangs`, color: X.black },
      top: {
        style: `uniform`,
        color: 16316660,
        print: `school`,
        color2: 11544634,
        tucked: !0,
      },
      bottom: { style: `skirt`, color: 2042436 },
      shoes: { style: `loafer`, color: 1709330 },
      socks: 15921906,
      acc: Q(
        { kind: `schoolbag`, color: 2042436 },
        { kind: `cup`, color: 13081194, color2: 3116906 },
      ),
    }),
    $(`auntie`, `阿姨`, `Auntie`, {
      sex: `f`,
      age: `adult`,
      build: `heavy`,
      height: 1.55,
      skin: Y.medium,
      face: Z({
        jaw: 0.6,
        cheek: 0.7,
        eyeSize: 0.92,
        lid: 0.6,
        wrinkles: 0.35,
        lipColor: 11549258,
        blush: 0.15,
        smile: 0.35,
        browArch: 0.7,
        brow: 0.3,
      }),
      hair: { style: `perm`, color: 3809304, color2: 5910560 },
      top: {
        style: `blouse`,
        color: 11543882,
        pattern: `floral`,
        patternColor: 16106818,
        sleeve: `short`,
      },
      bottom: { style: `wide`, color: 1842210 },
      shoes: { style: `flat`, color: 3811876 },
      acc: Q(
        { kind: `visor`, color: 14834572 },
        { kind: `armSleeves`, color: 15920872 },
        { kind: `marketBag` },
      ),
    }),
    $(`uncle`, `歐吉桑`, `Uncle`, {
      sex: `m`,
      age: `elder`,
      build: `heavy`,
      height: 1.66,
      skin: Y.tan,
      face: Z({
        jaw: 0.7,
        cheek: 0.6,
        eyeSize: 0.9,
        lid: 0.3,
        wrinkles: 0.6,
        facial: `stubble`,
        smile: 0.2,
        brow: 0.6,
      }),
      hair: { style: `balding`, color: 6972767 },
      top: { style: `tank`, color: 15921386 },
      bottom: { style: `shorts`, color: 3815988 },
      shoes: { style: `slipper`, color: 2382016, color2: 16053492 },
      acc: Q({ kind: `fan`, color: 15852228, color2: 12730415 }),
      stoop: 0.2,
    }),
    $(`ama`, `阿嬤`, `Grandma`, {
      sex: `f`,
      age: `elder`,
      build: `slim`,
      height: 1.5,
      skin: Y.medium,
      face: Z({
        jaw: 0.5,
        eyeSize: 0.88,
        lid: 0.7,
        wrinkles: 0.85,
        smile: 0.4,
        browArch: 0.3,
        brow: 0.3,
      }),
      hair: { style: `elder`, color: 12104362 },
      top: {
        style: `blouse`,
        color: 7101066,
        pattern: `floral`,
        patternColor: 15259376,
        sleeve: `elbow`,
      },
      bottom: { style: `wide`, color: 2894384 },
      shoes: { style: `flat`, color: 2236964 },
      acc: Q(
        { kind: `fan` },
        { kind: `marketBag`, color: 2772904, color2: 14168620 },
      ),
      stoop: 0.45,
    }),
    $(`agong`, `阿公`, `Grandpa`, {
      sex: `m`,
      age: `elder`,
      build: `slim`,
      height: 1.62,
      skin: Y.tan,
      face: Z({
        jaw: 0.5,
        eyeSize: 0.88,
        lid: 0.4,
        wrinkles: 0.9,
        smile: 0.25,
        brow: 0.45,
      }),
      hair: { style: `elder`, color: X.white },
      top: { style: `polo`, color: 14208950, tucked: !0 },
      bottom: { style: `slacks`, color: 4867384, belt: 2759957 },
      shoes: { style: `loafer`, color: 4862498 },
      acc: Q({ kind: `cap`, color: 5922136 }, `glasses`),
      stoop: 0.4,
    }),
    $(`rider-pink`, `外送員（餓熊）`, `FOODBEAR rider`, {
      sex: `m`,
      age: `adult`,
      build: `avg`,
      height: 1.72,
      skin: Y.tan,
      face: Z({ jaw: 0.6, eyeSize: 0.95, lid: 0.35, brow: 0.7, smile: 0 }),
      hair: { style: `fade`, color: X.black },
      top: {
        style: `rider`,
        color: 15217276,
        color2: 2763312,
        print: `rider-pink`,
      },
      bottom: { style: `jeans`, color: 3029586 },
      shoes: {
        style: `sneaker`,
        color: 2763310,
        color2: 15217276,
        sole: 15790314,
      },
      acc: Q(
        { kind: `helmet`, color: 15217276, color2: 1842208 },
        { kind: `deliveryBox`, color: 15217276 },
        { kind: `mask`, color: 1842208 },
      ),
    }),
    $(`rider-green`, `外送員（快食GO）`, `EATZ GO rider`, {
      sex: `f`,
      age: `adult`,
      build: `avg`,
      height: 1.63,
      skin: Y.light,
      face: Z({
        jaw: 0.4,
        eyeSize: 1,
        lid: 0.5,
        brow: 0.5,
        lipColor: 11554896,
      }),
      hair: { style: `ponytail`, color: X.darkBrown },
      top: {
        style: `rider`,
        color: 3129201,
        color2: 1381653,
        print: `rider-green`,
      },
      bottom: { style: `track`, color: 1842208, color2: 3129201 },
      shoes: { style: `sneaker`, color: 15921902, color2: 3129201 },
      acc: Q(
        { kind: `helmet`, color: 15921904, color2: 3129201 },
        { kind: `deliveryBox`, color: 4113517 },
        { kind: `armSleeves`, color: 1842208 },
      ),
    }),
    $(`police`, `警察`, `Police officer`, {
      sex: `m`,
      age: `adult`,
      build: `avg`,
      height: 1.78,
      skin: Y.light,
      face: Z({ jaw: 0.7, eyeSize: 0.95, lid: 0.35, brow: 0.7, smile: -0.1 }),
      hair: { style: `fade`, color: X.black },
      top: { style: `police`, color: 2240847, color2: 14267207 },
      outer: { style: `vest`, color: 12118076, color2: 14673642, closed: !0 },
      bottom: { style: `slacks`, color: 1581624, belt: 1052947 },
      shoes: { style: `dress`, color: 986897 },
      acc: Q({ kind: `policeCap` }, `watch`),
    }),
    $(`tourist`, `觀光客`, `Tourist`, {
      sex: `f`,
      age: `adult`,
      build: `avg`,
      height: 1.66,
      skin: Y.fair,
      face: Z({
        jaw: 0.35,
        eyeSize: 1.05,
        lid: 0.8,
        lipColor: 13658730,
        blush: 0.2,
        smile: 0.5,
      }),
      hair: { style: `long`, color: 5913124, color2: 9068608 },
      top: { style: `tee`, color: 16184558, print: `taipei`, color2: 13115436 },
      bottom: { style: `shorts`, color: 6981294, pattern: `denim` },
      shoes: { style: `sneaker`, color: 16052974, color2: 9085120 },
      acc: Q(
        { kind: `bucket`, color: 14207144 },
        `sunglasses`,
        { kind: `shoulderBag`, color: 8014378 },
        `phone`,
      ),
    }),
    $(`hipster`, `文青`, `Hipster`, {
      sex: `m`,
      age: `adult`,
      build: `slim`,
      height: 1.75,
      skin: Y.fair,
      face: Z({
        jaw: 0.35,
        eyeSize: 0.98,
        lid: 0.3,
        brow: 0.45,
        facial: `goatee`,
        smile: 0.05,
      }),
      hair: { style: `wavy`, color: X.darkBrown },
      top: { style: `tee`, color: 2763310, print: `band`, color2: 15262420 },
      bottom: { style: `wide`, color: 12166270 },
      shoes: {
        style: `sneaker`,
        color: 1776415,
        color2: 15921906,
        sole: 15921902,
      },
      acc: Q(
        { kind: `tote`, color: 15327695 },
        { kind: `glasses`, color: 6965802 },
        `earbuds`,
      ),
    }),
    $(`ximen-girl`, `西門町潮妹`, `Ximen trendsetter`, {
      sex: `f`,
      age: `adult`,
      build: `slim`,
      height: 1.62,
      skin: Y.porcelain,
      face: Z({
        jaw: 0.2,
        eyeSize: 1.12,
        lid: 0.85,
        eyeTilt: 0.15,
        lipColor: 13650016,
        blush: 0.35,
        liner: 0.5,
        browArch: 0.45,
        smile: 0.2,
      }),
      hair: { style: `wavy`, color: 6969936, color2: 11047040 },
      top: {
        style: `tee`,
        color: 16316146,
        fit: 0.9,
        print: `logo`,
        color2: 1842210,
      },
      bottom: {
        style: `skirt`,
        color: 3813456,
        pattern: `plaid`,
        patternColor: 14207152,
      },
      shoes: {
        style: `sneaker`,
        color: 16185074,
        color2: 16185074,
        sole: 16448250,
      },
      socks: 16053490,
      acc: Q({ kind: `shoulderBag`, color: 1579035 }, `phone`, {
        kind: `cup`,
        color: 15251656,
        color2: 14695018,
      }),
    }),
    $(`vendor`, `夜市攤販`, `Night-market vendor`, {
      sex: `m`,
      age: `adult`,
      build: `heavy`,
      height: 1.7,
      skin: Y.tan,
      face: Z({
        jaw: 0.75,
        cheek: 0.7,
        eyeSize: 0.92,
        lid: 0.3,
        brow: 0.7,
        wrinkles: 0.25,
        smile: 0.45,
        facial: `mustache`,
      }),
      hair: { style: `buzz`, color: X.black },
      top: { style: `tee`, color: 15262420 },
      bottom: { style: `shorts`, color: 2763310 },
      shoes: { style: `rainboot`, color: 15921902 },
      acc: Q(
        { kind: `apron`, color: 2767450 },
        { kind: `headband`, color: 15921906 },
      ),
    }),
    $(`jogger`, `河濱跑者`, `Riverside jogger`, {
      sex: `f`,
      age: `adult`,
      build: `slim`,
      height: 1.65,
      skin: Y.medium,
      face: Z({ jaw: 0.35, eyeSize: 1, lid: 0.45, blush: 0.35, smile: 0.2 }),
      hair: { style: `ponytail`, color: X.black },
      top: { style: `tank`, color: 16740193 },
      bottom: { style: `leggings`, color: 1710622 },
      shoes: {
        style: `sneaker`,
        color: 2763312,
        color2: 13168698,
        sole: 15790314,
      },
      acc: Q({ kind: `cap`, color: 16053490 }, `earbuds`, {
        kind: `watch`,
        color: 13168698,
      }),
    }),
    $(`rain-commuter`, `雨衣騎士`, `Rain-poncho commuter`, {
      sex: `m`,
      age: `adult`,
      build: `avg`,
      height: 1.72,
      skin: Y.light,
      face: Z({ jaw: 0.5, eyeSize: 0.95, lid: 0.4, smile: -0.1 }),
      hair: { style: `fade`, color: X.black },
      top: { style: `shirt`, color: 15263978, sleeve: `short` },
      outer: { style: `poncho`, color: 3832008 },
      bottom: { style: `slacks`, color: 2764342 },
      shoes: { style: `sandal`, color: 1842206, color2: 2763308 },
      acc: Q(
        { kind: `helmet`, color: 2763824, color2: 1381655 },
        { kind: `mask`, color: 12573166 },
      ),
    }),
    $(`salaryman`, `業務`, `Sales rep`, {
      sex: `m`,
      age: `adult`,
      build: `avg`,
      height: 1.76,
      skin: Y.light,
      face: Z({ jaw: 0.6, eyeSize: 0.96, lid: 0.45, brow: 0.55, smile: 0.35 }),
      hair: { style: `undercut`, color: X.black },
      top: { style: `shirt`, color: 16185076, tucked: !0 },
      outer: { style: `blazer`, color: 2371656, color2: 1844792 },
      bottom: { style: `slacks`, color: 2371656, belt: 1380879 },
      shoes: { style: `dress`, color: 1708556 },
      acc: Q({ kind: `shoulderBag`, color: 1380879 }, `watch`),
    }),
    $(`mom`, `媽媽`, `Mom`, {
      sex: `f`,
      age: `adult`,
      build: `avg`,
      height: 1.6,
      skin: Y.light,
      face: Z({
        jaw: 0.45,
        cheek: 0.6,
        eyeSize: 0.98,
        lid: 0.6,
        wrinkles: 0.15,
        lipColor: 12083312,
        smile: 0.3,
      }),
      hair: { style: `bob`, color: X.brown },
      top: { style: `polo`, color: 8042696 },
      bottom: { style: `slacks`, color: 15129800 },
      shoes: { style: `flat`, color: 13154464 },
      acc: Q(
        { kind: `shoulderBag`, color: 9067066 },
        { kind: `mask`, color: 15921908 },
        `phone`,
      ),
    }),
    $(`ntu-student`, `大學生`, `College student`, {
      sex: `m`,
      age: `adult`,
      build: `avg`,
      height: 1.73,
      skin: Y.light,
      face: Z({ jaw: 0.45, eyeSize: 1, lid: 0.4, brow: 0.6, smile: 0.1 }),
      hair: { style: `twoblock`, color: X.softBlack },
      top: { style: `hoodie`, color: 10133156, color2: 9080468 },
      bottom: { style: `track`, color: 1579036, color2: 15921906 },
      shoes: { style: `slipper`, color: 2382016, color2: 16053492 },
      acc: Q(
        { kind: `backpack`, color: 3820090 },
        { kind: `cup`, color: 3810328, color2: 1842204 },
      ),
    }),
    $(`clerk`, `超商店員`, `Store clerk`, {
      sex: `f`,
      age: `adult`,
      build: `avg`,
      height: 1.6,
      skin: Y.fair,
      face: Z({
        jaw: 0.35,
        eyeSize: 1.02,
        lid: 0.55,
        lipColor: 13131888,
        blush: 0.2,
        smile: 0.4,
      }),
      hair: { style: `bun`, color: X.darkBrown },
      top: { style: `polo`, color: 16053488, color2: 2067020 },
      bottom: { style: `slacks`, color: 1842210 },
      shoes: {
        style: `sneaker`,
        color: 1842210,
        color2: 1842210,
        sole: 2763310,
      },
      acc: Q(
        { kind: `apron`, color: 2067020 },
        { kind: `lanyard`, color: 15235102 },
      ),
    }),
    $(`worker`, `工人`, `Construction worker`, {
      sex: `m`,
      age: `adult`,
      build: `heavy`,
      height: 1.71,
      skin: Y.deep,
      face: Z({
        jaw: 0.75,
        eyeSize: 0.92,
        lid: 0.3,
        brow: 0.8,
        facial: `beard`,
        wrinkles: 0.3,
        smile: 0.1,
      }),
      hair: { style: `buzz`, color: X.black },
      top: { style: `tee`, color: 5921362 },
      outer: { style: `vest`, color: 15759906, color2: 14673642, closed: !0 },
      bottom: { style: `jeans`, color: 3820130 },
      shoes: { style: `boot`, color: 6965802 },
      acc: Q(
        { kind: `helmet`, color: 15909402, color2: 1842204 },
        { kind: `armSleeves`, color: 2763310 },
      ),
    }),
    $(`taxi-uncle`, `小黃司機`, `Taxi driver`, {
      sex: `m`,
      age: `adult`,
      build: `heavy`,
      height: 1.68,
      skin: Y.tan,
      face: Z({
        jaw: 0.65,
        cheek: 0.6,
        eyeSize: 0.92,
        lid: 0.35,
        facial: `stubble`,
        wrinkles: 0.4,
        smile: 0.3,
        mole: 2,
      }),
      hair: { style: `sidepart`, color: 2762276 },
      top: { style: `polo`, color: 15779880, color2: 1842204 },
      bottom: { style: `slacks`, color: 3026482, belt: 1380879 },
      shoes: { style: `loafer`, color: 1840144 },
      acc: Q({ kind: `sunglasses` }, `watch`),
    }),
    $(`temple-lady`, `廟口阿姨`, `Temple volunteer`, {
      sex: `f`,
      age: `elder`,
      build: `avg`,
      height: 1.54,
      skin: Y.medium,
      face: Z({ jaw: 0.5, eyeSize: 0.9, lid: 0.6, wrinkles: 0.6, smile: 0.5 }),
      hair: { style: `bun`, color: 9077886 },
      top: { style: `shirt`, color: 9054778, sleeve: `long` },
      bottom: { style: `wide`, color: 2763310 },
      shoes: { style: `flat`, color: 1842204 },
      acc: Q(
        { kind: `visor`, color: 16115400 },
        { kind: `umbrella`, color: 9058906, color2: 6957636 },
      ),
      stoop: 0.3,
    }),
  ],
  ns = [
    $(`mp`, `憲兵`, `Military police`, {
      sex: `m`,
      age: `adult`,
      build: `avg`,
      height: 1.79,
      skin: Y.light,
      face: Z({ jaw: 0.68, eyeSize: 0.94, lid: 0.3, brow: 0.72, smile: -0.15 }),
      hair: { style: `buzz`, color: X.black },
      top: {
        style: `shirt`,
        color: 6121544,
        color2: 4871225,
        pattern: `camo`,
        patternColor: 3358763,
        tucked: !0,
        sleeve: `long`,
      },
      bottom: {
        style: `slacks`,
        color: 5923909,
        pattern: `camo`,
        patternColor: 3358763,
        belt: 15921902,
      },
      shoes: { style: `boot`, color: 855310 },
      acc: Q(
        { kind: `helmet`, color: 16119282, color2: 15132386 },
        { kind: `watch`, color: 1381655 },
      ),
    }),
  ],
  rs = [Qo, $o, ...ts, ...ns];
function is(e) {
  return rs.find((t) => t.id === e);
}
var as = [
    16052974, 1842210, 2767450, 9051178, 3824186, 14207144, 6982320, 15245480,
    15779880, 5921378, 11061472, 3111530,
  ],
  os = [
    2767450, 1842210, 3820130, 12168070, 5921362, 3026998, 14997695, 4874886,
  ],
  ss = [`fade`, `sidepart`, `twoblock`, `spiky`, `buzz`, `undercut`, `bowl`],
  cs = [`bob`, `long`, `ponytail`, `bun`, `wavy`, `bangs`];
function ls(e, t) {
  let n = e >>> 0 || 1,
    r = () => (n = (n * 1664525 + 1013904223) >>> 0) / 4294967296,
    i = (e) => e[Math.floor(r() * e.length)],
    a = (typeof t == `string` ? is(t) : t) ?? i(ts),
    o = a.sex === `f`,
    s = Object.values(Y),
    c = JSON.parse(JSON.stringify(a));
  ((c.id = `${a.id}~${e}`),
    (c.seed = e),
    (c.skin = i(s)),
    (c.height = a.height + (r() - 0.5) * 0.08),
    a.age !== `elder` &&
      ((c.hair.style = i(o ? cs : ss)),
      (c.hair.color = i([
        X.black,
        X.softBlack,
        X.darkBrown,
        X.brown,
        X.black,
        o ? X.ash : X.black,
      ])),
      (c.hair.color2 = r() < 0.25 ? i([X.brown, X.ash, X.auburn]) : void 0)),
    [`police`, `rider`, `uniform`].includes(c.top.style) ||
      ((c.top.color = i(as)),
      c.top.pattern &&
        c.top.pattern !== `floral` &&
        (c.top.pattern =
          r() < 0.3 ? i([`stripes`, `check`, `solid`]) : `solid`)),
    ![`police`].includes(c.top.style) &&
      c.bottom.style !== `skirt` &&
      (c.bottom.color = i(os)));
  let l = c.face;
  return (
    (l.jaw = Math.min(1, Math.max(0, l.jaw + (r() - 0.5) * 0.4))),
    (l.cheek = Math.min(1, Math.max(0, l.cheek + (r() - 0.5) * 0.4))),
    (l.eyeSize *= 0.94 + r() * 0.12),
    (l.eyeTilt += (r() - 0.5) * 0.1),
    (l.lid = Math.min(1, Math.max(0, l.lid + (r() - 0.5) * 0.6))),
    (l.noseW = r()),
    (l.bridge = r() * 0.8),
    (l.lips = r()),
    (l.brow = Math.min(1, Math.max(0, l.brow + (r() - 0.5) * 0.4))),
    (l.browArch = r()),
    (l.smile = (r() - 0.3) * 0.5),
    (l.mole = r() < 0.15 ? 1 + Math.floor(r() * 2) : 0),
    c
  );
}
var us = { x: -757, z: -252.6 },
  ds = 0.022,
  fs = -1,
  ps = 0,
  ms = us.z + -11;
async function hs(n) {
  let r = n.params.get(`charlab`);
  if (!r) return null;
  let i = n.params.get(`charsel`)?.split(`,`).filter(Boolean),
    a = i ? i.map((e) => rs.find((t) => t.id === e)).filter(Boolean) : rs,
    o = new m();
  ((o.name = `charlab`), n.scene.add(o));
  let s = [],
    c = performance.now(),
    l = 0,
    u = n.params.get(`charasync`) ?? `1`,
    d = async (e, t, r, i) => {
      let a = n.params.get(`charskip`)?.split(`,`),
        o = i === 1 ? { lod: 1, atlas: null, skip: a } : { skip: a };
      return {
        ch:
          u === `0` ? jo(e, o) : await Ko(e, { ...o, worker: u !== `sliced` }),
        desc: e,
        x: t,
        z: r,
      };
    },
    p = ({ ch: e, desc: t, x: r, z: i }) => {
      l += e.triangles;
      let a =
        (n.groundAt ? n.groundAt(r, i, 1) : n.plan.groundHeight(r, i)) + ds;
      (e.root.position.set(r, a, i), (e.root.rotation.y = ps), o.add(e.root));
      let c = {
        desc: t,
        ch: e,
        anim: new Zo(e, s.length),
        x: r,
        z: i,
        heading: -0,
      };
      return (s.push(c), c);
    },
    h = [];
  if (r === `lod`) {
    let e = a.slice(0, 12);
    h.push(e, e);
  } else if (r === `faces`) h.push(a.slice(0, 8));
  else if (a.length <= 8) h.push(a);
  else {
    let e = Math.ceil(a.length / 2);
    h.push(a.slice(0, e), a.slice(e));
  }
  let g = r === `faces` ? 0.3 : a.length <= 8 ? 1.25 : 0.92,
    _ = [us.z + fs * 1.3, us.z - fs * 1.4];
  if (r === `crowd` || r === `tiny`) vs(n, o, a, g, _, r === `tiny` ? 2 : 1);
  else {
    let e = [];
    for (let t = 0; t < h.length; t++) {
      let i = h[t],
        a = i.length;
      for (let o = 0; o < a; o++) {
        let s =
            us.x +
            (o - (a - 1) / 2) * g +
            (t === 1 && r !== `lod` ? g * 0.5 : 0),
          c = d(i[o], s, _[t], +(r === `lod` && t === 1));
        (e.push(c),
          u === `0` && (p(await c), o % 2 == 1 && (await n.yieldFrame())));
      }
    }
    if (u !== `0`) for (let t of await Promise.all(e)) p(t);
  }
  let v = n.params.get(`charatlas`);
  if (v !== null) {
    let n = je().pages[Number(v) || 0];
    if (n) {
      let r = new t(
        new f(6, 6),
        new e({ map: n.tex, transparent: !0, premultipliedAlpha: !0 }),
      );
      (r.position.set(us.x, 4, us.z - -3), (r.rotation.y = Math.PI), o.add(r));
    }
  }
  gs(n, o, s, n.params.get(`charlabels`) !== `0`);
  let y = Number(n.params.get(`charfov`)),
    b = Number(n.params.get(`charpeds`) ?? `0.25`);
  try {
    Number.isFinite(b) && (n.peds.density = b);
  } catch {}
  (console.log(
    `[test] charlab: ${s.length} characters, ${l} tris total (${s.map((e) => `${e.desc.id}:${e.ch?.triangles}`).join(` `)}) built in ${(performance.now() - c).toFixed(0)}ms (${u === `0` ? `sync` : u === `sliced` ? `sliced` : `worker`}; ${JSON.stringify(Yo())})`,
  ),
    (window.__charlab = {
      list: s.map((e) => ({
        id: e.desc.id,
        x: e.x,
        z: e.z,
        height: e.desc.height,
        tris: e.ch?.triangles,
        parts: e.ch?.breakdown,
      })),
      cam: (e, t = `face`) => {
        let r = s.find((t) => t.desc.id === e) ?? s[Number(e)] ?? s[0],
          i = r.desc.height,
          a = n.plan.groundHeight(r.x, r.z),
          o = a + i - (i / 1.72) * 0.115,
          c = (e) => e.map((e) => e.toFixed(3)).join(`,`);
        switch (t) {
          case `bust`:
            return c([r.x, o - 0.12, r.z + fs * 1.25, r.x, o - 0.2, r.z]);
          case `body`:
            return c([r.x, a + 1.2, r.z + fs * 3.2, r.x, a + 0.9, r.z]);
          case `back`:
            return c([r.x, a + 1.35, r.z - fs * 2.6, r.x, a + 1, r.z]);
          case `crown`:
            return c([r.x, o + 0.32, r.z - fs * 0.7, r.x, o - 0.02, r.z]);
          case `side`:
            return c([r.x + 2.6, a + 1.2, r.z + fs * 0.3, r.x, a + 0.95, r.z]);
          case `feet`:
            return c([r.x + 0.25, a + 0.55, r.z + fs * 1.1, r.x, a + 0.1, r.z]);
          default:
            return c([r.x, o, r.z + fs * 0.62, r.x, o - 0.01, r.z]);
        }
      },
      wide: () => `${us.x},1.55,${ms},${us.x},0.95,${us.z}`,
      faces: (e = 1.55, t = 1.35) =>
        `${us.x},${e},${_[0] + fs * t},${us.x},${e - 0.02},${_[0]}`,
    }));
  let x = 0;
  return {
    update(e) {
      ((x += e),
        Number.isFinite(y) &&
          y > 5 &&
          n.camera.fov !== y &&
          ((n.camera.fov = y), n.camera.updateProjectionMatrix()));
      for (let t = 0; t < s.length; t++) {
        let n = s[t];
        n.ch &&
          n.anim &&
          (r === `walk`
            ? n.anim.update(e, { gait: 1, speed: 1.35 })
            : r === `run`
              ? n.anim.update(e, { gait: 2, speed: 3.6 })
              : n.anim.update(e, { gait: 0, speed: 0 }),
          r === `turn` && (n.ch.root.rotation.y = ps + x * 0.6 + t * 0.5));
      }
    },
  };
}
function gs(n, r, i, a) {
  if (!i.length) return;
  let o = [];
  for (let e of i) {
    let t = new C(0.36, 0.38, 0.03, 24);
    (t.translate(e.x, n.plan.groundHeight(e.x, e.z) + ds - 0.015, e.z),
      o.push(t));
  }
  let l = _s(o),
    u = new t(l, new s({ color: 2763824, roughness: 0.4, metalness: 0.1 }));
  if (((u.receiveShadow = !0), r.add(u), !a)) return;
  let d = Math.ceil(i.length / 5),
    f = document.createElement(`canvas`);
  ((f.width = 1280), (f.height = 64 * d));
  let m = f.getContext(`2d`);
  ((m.textAlign = `center`), (m.textBaseline = `middle`));
  let h = [],
    g = [],
    _ = [];
  i.forEach((e, t) => {
    let r = (t % 5) * 256,
      i = Math.floor(t / 5) * 64;
    ((m.fillStyle = `rgba(12,14,18,0.78)`),
      m.beginPath(),
      m.roundRect(r + 6, i + 6, 244, 52, 14),
      m.fill(),
      (m.fillStyle = `#ffd98a`),
      (m.font = `800 26px ${te}`),
      m.fillText(e.desc.name?.zh ?? e.desc.id, r + 128, i + 25.6),
      (m.fillStyle = `#d8dde6`),
      (m.font = `600 13px ${te}`),
      m.fillText(e.desc.name?.en ?? ``, r + 128, i + 47.36));
    let a = 0.52,
      o = (64 / 256) * a,
      s = n.plan.groundHeight(e.x, e.z) + e.desc.height + 0.3,
      c = h.length / 3,
      l = e.x - (a / 2) * 1,
      u = e.x + (a / 2) * 1;
    h.push(
      l,
      s - o / 2,
      e.z,
      u,
      s - o / 2,
      e.z,
      u,
      s + o / 2,
      e.z,
      l,
      s + o / 2,
      e.z,
    );
    let d = r / f.width,
      p = (r + 256) / f.width,
      v = 1 - (i + 64) / f.height,
      y = 1 - i / f.height;
    (g.push(d, v, p, v, p, y, d, y), _.push(c, c + 1, c + 2, c, c + 2, c + 3));
  });
  let v = new y();
  (v.setAttribute(`position`, new p(h, 3)),
    v.setAttribute(`uv`, new p(g, 2)),
    v.setIndex(_));
  let b = new j(f);
  b.colorSpace = c;
  let x = new t(v, new e({ map: b, transparent: !0, depthWrite: !1 }));
  r.add(x);
}
function _s(e) {
  let t = [],
    n = [],
    r = [];
  for (let i of e) {
    let e = t.length / 3,
      a = i.attributes.position,
      o = i.attributes.normal;
    for (let e = 0; e < a.count; e++)
      (t.push(a.getX(e), a.getY(e), a.getZ(e)),
        n.push(o.getX(e), o.getY(e), o.getZ(e)));
    let s = i.index;
    for (let t = 0; t < s.count; t++) r.push(e + s.getX(t));
    i.dispose();
  }
  let i = new y();
  return (
    i.setAttribute(`position`, new p(t, 3)),
    i.setAttribute(`normal`, new p(n, 3)),
    i.setIndex(r),
    i
  );
}
function vs(e, t, n, r, i, o = 1) {
  let s = co(),
    c = Math.min(n.length, 12),
    l = 0;
  for (let u = 0; u < c; u++) {
    let f = n[u],
      p = Po(f, { lod: o });
    l += p.userData.triangles;
    let m = new _(new Float32Array(8), 4);
    for (let e = 0; e < 2; e++)
      m.setXYZW(e, e * 1.7 + u, e === 0 ? 0 : 1, 0, 0);
    p.setAttribute(`iAnim`, m);
    let h = new k(p, s, 2),
      g = new d(),
      v = p.userData.scale;
    for (let t = 0; t < 2; t++) {
      let n = us.x + (u - (c - 1) / 2) * r,
        o = i[t];
      (g.compose(
        new D(n, e.plan.groundHeight(n, o) + ds, o),
        new a().setFromEuler(new M(0, ps, 0)),
        new D(v, v, v),
      ),
        h.setMatrixAt(t, g));
    }
    ((h.frustumCulled = !1),
      (h.castShadow = !0),
      t.add(h),
      (h.onBeforeRender = () => {
        for (let e = 0; e < 2; e++) m.setX(e, m.getX(e) + 0.08);
        m.needsUpdate = !0;
      }));
  }
  console.log(
    `[test] charlab crowd (lod ${o}): ${c} crowd geometries, ${l} tris total, avg ${(l / c).toFixed(0)}`,
  );
}
var ys = {
    HIPS: 0,
    SPINE: 1,
    CHEST: 2,
    NECK: 3,
    HEAD: 4,
    ARM_L: 5,
    FORE_L: 6,
    HAND_L: 7,
    ARM_R: 8,
    FORE_R: 9,
    HAND_R: 10,
    THIGH_L: 11,
    SHIN_L: 12,
    FOOT_L: 13,
    THIGH_R: 14,
    SHIN_R: 15,
    FOOT_R: 16,
    HAIR: 17,
    W_BAT: 18,
    W_PISTOL: 19,
    W_SMG: 20,
    W_PHONE: 21,
    FING_L: 22,
    FING_R: 23,
    HELMET: 24,
    CAP: 25,
    W_TEA: 26,
    W_UMB: 27,
    LID_L: 28,
    LID_R: 29,
  },
  bs = [
    L.hips,
    L.spine,
    L.chest,
    L.neck,
    L.head,
    L.armL,
    L.foreL,
    L.handL,
    L.armR,
    L.foreR,
    L.handR,
    L.thighL,
    L.shinL,
    L.footL,
    L.thighR,
    L.shinR,
    L.footR,
    L.hair,
    -1,
    -1,
    -1,
    -1,
    L.fingersL,
    L.fingersR,
    -1,
    -1,
    -1,
    -1,
    L.lidL,
    L.lidR,
  ],
  xs = [
    [ys.W_BAT, L.handR],
    [ys.W_PISTOL, L.handR],
    [ys.W_SMG, L.handR],
    [ys.W_PHONE, L.handL],
    [ys.HELMET, L.head],
    [ys.CAP, L.head],
    [ys.W_TEA, L.handL],
    [ys.W_UMB, L.handL],
  ];
function Ss(e) {
  let t = [],
    n = [];
  for (let r = 0; r < 30; r++) {
    let i = bs[r];
    i >= 0 && ((t[r] = e.bones[i]), (n[r] = e.joints[i].clone()));
  }
  let r = e.joints,
    i = (e, t) => r[e].clone().lerp(r[t], 0.6);
  for (let [a, o] of xs) {
    let s = new v();
    s.name = `socket-${a}`;
    let c;
    ((c =
      o === L.head
        ? new D(0, r[L.hair].y, r[L.head].z)
        : i(o, o === L.handR ? L.fingersR : L.fingersL)),
      (n[a] = c.clone()),
      s.position.copy(c).sub(r[o]),
      e.bones[o].add(s),
      (t[a] = s));
  }
  return {
    bones: t,
    rest: t.map((e) => e.position.clone()),
    joints: n,
    thighLen: e.thighLen,
    shinLen: e.shinLen,
    hipHeight: r[L.hips].y,
  };
}
var Cs = null,
  ws = {
    id: `_charlab`,
    name: { zh: `角色實驗室`, en: `Character Lab` },
    async init(e) {
      (ye({
        renderer: e.params.get(`charseal`) === `0` ? null : e.renderer.gl,
        textureScale: e.quality.textureScale,
      }),
        e.params.get(`charlab`) && (Cs = await hs(e)));
    },
    update(e) {
      Cs?.update(e);
    },
  };
export {
  $t as A,
  yi as C,
  Yr as D,
  ci as E,
  Je as F,
  Xe as I,
  Ye as L,
  it as M,
  bt as N,
  Or as O,
  L as P,
  Li as S,
  ii as T,
  oo as _,
  Qo as a,
  aa as b,
  Z as c,
  Zo as d,
  Po as f,
  Fo as g,
  Ko as h,
  X as i,
  Bt as j,
  Xn as k,
  is as l,
  jo as m,
  Ss as n,
  Y as o,
  Jo as p,
  ts as r,
  $o as s,
  ws as t,
  ls as u,
  La as v,
  mi as w,
  Bi as x,
  la as y,
};
