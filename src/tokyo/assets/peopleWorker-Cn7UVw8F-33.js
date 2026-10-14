// tokyo/assets/peopleWorker-Cn7UVw8F 33 — height
// Lines 15659-15946 of readable/tokyo/assets/peopleWorker-Cn7UVw8F.pretty.js (statement-aligned).
function Oa(e) {
  let t = e.w * e.h <= 65536;
  if (t) {
    let t = Ea.get(e.key);
    if (t && t.width === e.w && t.height === e.h)
      return (Ea.delete(e.key), Ea.set(e.key, t), t);
  }
  if (!e.paint) throw Error(`[characters] tile ${e.key} has no painter`);
  let [n, r] = t ? Ca(e.w, e.h) : Ta(e.w, e.h);
  if ((r.clearRect(0, 0, e.w, e.h), e.paint(r, 0, 0, e.w, e.h), t))
    for (Ea.set(e.key, n), Da += e.w * e.h * 4; Da > 6291456 && Ea.size > 1;) {
      let [e, t] = Ea.entries().next().value;
      (Ea.delete(e), (Da -= t.width * t.height * 4), (t.width = t.height = 1));
    }
  return n;
}
function ka() {
  for (let e of Ea.values()) e.width = e.height = 1;
  (Ea.clear(), (Da = 0), wa && (wa[0].width = wa[0].height = 1), (wa = null));
}
function Aa(e, t, n, r) {
  let i = Oa(r),
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
let ja = 0;
new M();
var Ma = class {
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
      n = new zn(e);
    ((n.colorSpace = h),
      (n.premultiplyAlpha = !0),
      (n.generateMipmaps = !0),
      (n.minFilter = a),
      (n.magFilter = i),
      (n.anisotropy = 4),
      (n.name = `char-atlas-${ja}`));
    let r = {
      id: ja++,
      size: this.size,
      height: this.height,
      canvas: e,
      g: t,
      tex: n,
      shelves: [],
      nextY: 0,
      cache: /* @__PURE__ */ new Map(),
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
        r.uploadedVersion = n.version;
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
    e.sealed || Na(e.g, t, n, r, i, a, e.scale, s, c);
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
      n?.cache.has(t.key) || (r += (t.w + t.gutter * 2) * (t.h + t.gutter * 2));
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
        (Pa(i), (i = this.newPage()), i.busy++);
      }
    } finally {
      Pa(i);
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
function Na(e, t, n, r, i, a, o, s, c = 0) {
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
      ? Aa(e, t, n, a)
      : (e.clearRect(t, n, r, i),
        e.save(),
        e.translate(t, n),
        e.scale(o, o),
        Aa(e, 0, 0, a),
        e.restore());
}
function Pa(e) {
  e.busy = Math.max(0, e.busy - 1);
}
let Fa = null;
function Ia() {
  return (Fa ??= new Ma(2048));
}
const La = /* @__PURE__ */ new Map(),
  K = (e, t = 1) => {
    let n = t >= 1 ? 1e3 : t <= 0 ? 0 : Math.round(t * 1e3),
      r = (e & 16777215) * 1001 + n,
      i = La.get(r);
    if (i === void 0) {
      let n = (e >> 16) & 255,
        a = (e >> 8) & 255,
        o = e & 255;
      ((i =
        t >= 1
          ? `rgb(${n},${a},${o})`
          : `rgba(${n},${a},${o},${t.toFixed(3)})`),
        La.size >= 4096 && La.clear(),
        La.set(r, i));
    }
    return i;
  };
function Ra() {
  La.clear();
}
function q(e, t, n) {
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
function J(e, t) {
  return t >= 1 ? q(e, 16777215, Math.min(1, t - 1)) : q(0, e, Math.max(0, t));
}
function za(e) {
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
function Ba(e, t, n) {
  for (let r = -1; r <= 1; r++) for (let i = -1; i <= 1; i++) n(i * e, r * t);
}
