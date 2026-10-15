const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/postfx-BzHvx3aB.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/three-x0mFGRTI.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./rolldown-runtime-DK3Fl9T5.js";
import { a as t, t as n } from "./ja-DY7SMsVw.js";
import {
  $ as r,
  Bt as i,
  Ct as a,
  D as o,
  Dn as s,
  En as c,
  Et as l,
  F as u,
  Fn as d,
  G as f,
  H as p,
  I as m,
  In as h,
  J as g,
  Jn as _,
  K as v,
  Kn as y,
  L as b,
  Ln as x,
  M as S,
  N as C,
  Nt as w,
  O as T,
  On as E,
  Ot as D,
  Qn as O,
  R as k,
  Rt as A,
  St as j,
  Tt as M,
  U as N,
  Ut as P,
  Vn as ee,
  Vt as te,
  W as F,
  X as I,
  Y as L,
  Yn as ne,
  Z as re,
  _t as R,
  a as z,
  b as ie,
  bn as ae,
  d as oe,
  en as B,
  et as se,
  g as V,
  h as H,
  hn as ce,
  ht as le,
  i as ue,
  ir as de,
  j as fe,
  jn as pe,
  jt as me,
  ln as he,
  mt as ge,
  n as _e,
  nr as ve,
  nt as ye,
  or as be,
  p as xe,
  qn as Se,
  qt as Ce,
  rr as U,
  t as we,
  v as Te,
  vn as Ee,
  wt as De,
  x as W,
} from "./three-x0mFGRTI.js";
import {
  B as Oe,
  D as ke,
  Q as G,
  Rt as Ae,
  V as je,
  c as Me,
  cn as K,
  d as Ne,
  f as Pe,
  fn as Fe,
  ft as Ie,
  hn as Le,
  ht as Re,
  jr as ze,
  l as Be,
  ln as Ve,
  m as He,
  mn as q,
  nt as Ue,
  on as We,
  q as Ge,
  tt as Ke,
  u as qe,
  un as Je,
  z as Ye,
} from "./engine-wUBYs8Z3.js";
import { P as J, m as Xe } from "./characters-CbxAZUc_.js";
import "./tokyo-_rNKO_Y7.js";
var Ze = e({
    F: () => Qe,
    MeshBuilder: () => rt,
    glow: () => et,
    ngon: () => ct,
    paint: () => Y,
    rectPoly: () => st,
    scalePoly: () => lt,
    withP: () => $e,
  }),
  Qe = {
    TOWER: 1,
    BLINK: 2,
    SCROLL: 4,
    TEXCOL: 8,
    ALWAYS: 16,
    WINDOWS: 32,
    SWAY: 64,
    WATER: 128,
  };
function Y(e, t = 0, n = {}) {
  let r = new W(e);
  return {
    r: r.r,
    g: r.g,
    b: r.b,
    ao: 1,
    layer: t,
    su: 4,
    sv: 4,
    rough: 0.85,
    metal: 0,
    flags: 0,
    flood: 0,
    ex: 0,
    er: 0,
    eg: 0,
    eb: 0,
    ei: 0,
    cw: 1,
    ...n,
  };
}
function $e(e, t) {
  return { ...e, ...t };
}
function et(e, t, n = 0, r = {}) {
  let i = new W(e);
  return Y(e, n, { er: i.r, eg: i.g, eb: i.b, ei: t, rough: 0.6, ...r });
}
var tt = new U(),
  nt = new U(),
  rt = class {
    vcap;
    icap;
    vcount = 0;
    icount = 0;
    pos;
    nrm;
    uv;
    col;
    mat;
    lit;
    info;
    idx;
    p = Y(16777215);
    coarse = !1;
    floodBase = null;
    get floodY() {
      return this.floodBits ? ((this.floodBits >> 1) - 1) * 2 : null;
    }
    set floodY(e) {
      this.floodBits =
        e === null ? 0 : Math.max(1, Math.min(127, Math.round(e / 2) + 1)) << 1;
    }
    floodBits = 0;
    stack = [];
    m = new De();
    nm = new a();
    identity = !0;
    constructor(e = 4096) {
      ((this.vcap = e),
        (this.icap = e * 2),
        (this.pos = new Float32Array(this.vcap * 3)),
        (this.nrm = new Float32Array(this.vcap * 3)),
        (this.uv = new Float32Array(this.vcap * 2)),
        (this.col = new Uint8Array(this.vcap * 4)),
        (this.mat = new Uint8Array(this.vcap * 4)),
        (this.lit = new Uint8Array(this.vcap * 4)),
        (this.info = new Uint8Array(this.vcap * 4)),
        (this.idx = new Uint32Array(this.icap)));
    }
    push() {
      return (this.stack.push(this.m.clone()), this);
    }
    pop() {
      let e = this.stack.pop();
      return (e && this.m.copy(e), this.sync(), this);
    }
    sync() {
      this.nm.getNormalMatrix(this.m);
      let e = this.m.elements;
      this.identity =
        e[0] === 1 &&
        e[5] === 1 &&
        e[10] === 1 &&
        e[12] === 0 &&
        e[13] === 0 &&
        e[14] === 0 &&
        e[1] === 0 &&
        e[2] === 0 &&
        e[4] === 0 &&
        e[6] === 0 &&
        e[8] === 0 &&
        e[9] === 0;
    }
    translate(e, t, n) {
      return (this.m.multiply(it.makeTranslation(e, t, n)), this.sync(), this);
    }
    rotateY(e) {
      return (this.m.multiply(it.makeRotationY(e)), this.sync(), this);
    }
    rotateX(e) {
      return (this.m.multiply(it.makeRotationX(e)), this.sync(), this);
    }
    rotateZ(e) {
      return (this.m.multiply(it.makeRotationZ(e)), this.sync(), this);
    }
    scale(e, t, n) {
      return (this.m.multiply(it.makeScale(e, t, n)), this.sync(), this);
    }
    place(e, t, n, r) {
      return (this.m.makeRotationY(-r).setPosition(e, t, n), this.sync(), this);
    }
    reset() {
      return (this.m.identity(), (this.stack.length = 0), this.sync(), this);
    }
    copyFrame(e) {
      return (this.m.copy(e.m), this.sync(), this);
    }
    toWorld(e, t, n, r = new U()) {
      return r.set(e, t, n).applyMatrix4(this.m);
    }
    setPaint(e) {
      return ((this.p = e), this);
    }
    seg(e, t = 3) {
      return this.coarse ? Math.max(t, Math.ceil(e / 2)) : e;
    }
    grow(e, t) {
      if (this.vcount + e > this.vcap) {
        let t = this.vcap;
        for (; this.vcount + e > t;) t *= 2;
        ((this.pos = ot(this.pos, t * 3)),
          (this.nrm = ot(this.nrm, t * 3)),
          (this.uv = ot(this.uv, t * 2)),
          (this.col = ot(this.col, t * 4)),
          (this.mat = ot(this.mat, t * 4)),
          (this.lit = ot(this.lit, t * 4)),
          (this.info = ot(this.info, t * 4)),
          (this.vcap = t));
      }
      if (this.icount + t > this.icap) {
        let e = this.icap;
        for (; this.icount + t > e;) e *= 2;
        ((this.idx = ot(this.idx, e)), (this.icap = e));
      }
    }
    vert(e, t, n, r, i, a, o, s, c = this.p) {
      this.vcount >= this.vcap && this.grow(1, 0);
      let l = this.vcount++;
      this.identity
        ? (tt.set(e, t, n), nt.set(r, i, a))
        : (tt.set(e, t, n).applyMatrix4(this.m),
          nt.set(r, i, a).applyMatrix3(this.nm).normalize());
      let u = l * 3,
        d = l * 2,
        f = l * 4;
      return (
        (this.pos[u] = tt.x),
        (this.pos[u + 1] = tt.y),
        (this.pos[u + 2] = tt.z),
        (this.nrm[u] = nt.x),
        (this.nrm[u + 1] = nt.y),
        (this.nrm[u + 2] = nt.z),
        (this.uv[d] = o),
        (this.uv[d + 1] = s),
        (this.col[f] = at(c.r)),
        (this.col[f + 1] = at(c.g)),
        (this.col[f + 2] = at(c.b)),
        (this.col[f + 3] = at(c.ao)),
        (this.mat[f] = at(c.rough)),
        (this.mat[f + 1] = at(c.metal)),
        (this.mat[f + 2] = at(c.flood)),
        (this.mat[f + 3] = at(c.ex)),
        (this.lit[f] = at(c.er)),
        (this.lit[f + 1] = at(c.eg)),
        (this.lit[f + 2] = at(c.eb)),
        (this.lit[f + 3] = at(c.ei / 8)),
        (this.info[f] = c.layer),
        (this.info[f + 1] = c.flags),
        (this.info[f + 2] = this.floodBits),
        (this.info[f + 3] = (c.cw & 15) | (c.office ? 64 : 0)),
        l
      );
    }
    tri(e, t, n) {
      (this.icount + 3 > this.icap && this.grow(0, 3),
        (this.idx[this.icount++] = e),
        (this.idx[this.icount++] = t),
        (this.idx[this.icount++] = n));
    }
    tintRange(e, t, n) {
      for (let r = e; r < t; r++) {
        let e = n(r, this.pos[r * 3], this.pos[r * 3 + 1], this.pos[r * 3 + 2]);
        if (!e) continue;
        let t = r * 4;
        (e.er !== void 0 && (this.lit[t] = at(e.er)),
          e.eg !== void 0 && (this.lit[t + 1] = at(e.eg)),
          e.eb !== void 0 && (this.lit[t + 2] = at(e.eb)),
          e.ei !== void 0 && (this.lit[t + 3] = at(e.ei / 8)),
          e.flood !== void 0 && (this.mat[t + 2] = at(e.flood)),
          e.ao !== void 0 && (this.col[t + 3] = at(e.ao)),
          e.ex !== void 0 && (this.mat[t + 3] = at(e.ex)));
      }
    }
    quad(e, t, n, r, i = 0, a = 0, o = this.p) {
      let s = t[0] - e[0],
        c = t[1] - e[1],
        l = t[2] - e[2],
        u = r[0] - e[0],
        d = r[1] - e[1],
        f = r[2] - e[2],
        p = c * f - l * d,
        m = l * u - s * f,
        h = s * d - c * u,
        g = Math.hypot(p, m, h) || 1;
      ((p /= g), (m /= g), (h /= g));
      let _ = Math.hypot(s, c, l),
        v = Math.hypot(u, d, f),
        y = o.su,
        b = o.sv,
        x = i / y,
        S = a / b,
        C = (i + _) / y,
        w = (a + v) / b,
        T = this.vert(e[0], e[1], e[2], p, m, h, x, S, o);
      return (
        this.vert(t[0], t[1], t[2], p, m, h, C, S, o),
        this.vert(n[0], n[1], n[2], p, m, h, C, w, o),
        this.vert(r[0], r[1], r[2], p, m, h, x, w, o),
        this.tri(T, T + 1, T + 2),
        this.tri(T, T + 2, T + 3),
        T
      );
    }
    quadUV(e, t, n, r, i, a, o, s, c = this.p) {
      let l = t[0] - e[0],
        u = t[1] - e[1],
        d = t[2] - e[2],
        f = r[0] - e[0],
        p = r[1] - e[1],
        m = r[2] - e[2],
        h = u * m - d * p,
        g = d * f - l * m,
        _ = l * p - u * f,
        v = Math.hypot(h, g, _) || 1;
      ((h /= v), (g /= v), (_ /= v));
      let y = this.vert(e[0], e[1], e[2], h, g, _, i, a, c);
      return (
        this.vert(t[0], t[1], t[2], h, g, _, o, a, c),
        this.vert(n[0], n[1], n[2], h, g, _, o, s, c),
        this.vert(r[0], r[1], r[2], h, g, _, i, s, c),
        this.tri(y, y + 1, y + 2),
        this.tri(y, y + 2, y + 3),
        y
      );
    }
    box(e, t, n, r, i, a, o = 55, s, c = 0) {
      if (
        this.coarse &&
        Math.max(Math.abs(r - e), Math.abs(i - t), Math.abs(a - n)) < 0.3
      )
        return this;
      let l = this.p,
        u = s ?? l,
        d = t - c;
      return (
        o & 32 &&
          this.quad([r, t, n], [e, t, n], [e, i, n], [r, i, n], 0, d, l),
        o & 16 &&
          this.quad([e, t, a], [r, t, a], [r, i, a], [e, i, a], 0, d, l),
        o & 1 && this.quad([r, t, a], [r, t, n], [r, i, n], [r, i, a], 0, d, l),
        o & 2 && this.quad([e, t, n], [e, t, a], [e, i, a], [e, i, n], 0, d, l),
        o & 4 && this.quad([e, i, a], [r, i, a], [r, i, n], [e, i, n], 0, 0, u),
        o & 8 && this.quad([e, t, n], [r, t, n], [r, t, a], [e, t, a], 0, 0, u),
        this
      );
    }
    boxc(e, t, n, r, i, a, o = 55, s) {
      return this.box(
        e - r / 2,
        t - i / 2,
        n - a / 2,
        e + r / 2,
        t + i / 2,
        n + a / 2,
        o,
        s,
      );
    }
    prism(e, t, n, r = { top: !0 }, i = 0) {
      return (this.loft(e, t, e, n, r, i), this);
    }
    loft(e, t, n, r, i = {}, a = 0) {
      let o = e.length / 2,
        s = 0;
      for (let i = 0; i < o; i++) {
        let c = (i + 1) % o,
          l = e[i * 2],
          u = e[i * 2 + 1],
          d = e[c * 2],
          f = e[c * 2 + 1],
          p = n[c * 2],
          m = n[c * 2 + 1],
          h = n[i * 2],
          g = n[i * 2 + 1],
          _ = Math.hypot(d - l, f - u);
        (_ < 1e-5 && Math.hypot(p - h, m - g) < 1e-5) ||
          (this.quad(
            [d, t, f],
            [l, t, u],
            [h, r, g],
            [p, r, m],
            -s - _,
            t - a,
            this.p,
          ),
          (s += _));
      }
      return (
        i.top && this.cap(n, r, !0, typeof i.top == `object` ? i.top : this.p),
        i.bottom && this.cap(e, t, !1, this.p),
        this
      );
    }
    cap(e, t, n, r = this.p) {
      let i = [];
      for (let t = 0; t < e.length; t += 2) i.push(new ve(e[t], e[t + 1]));
      let a = pe.triangulateShape(i, []),
        o = this.vcount;
      for (let e of i)
        this.vert(e.x, t, e.y, 0, n ? 1 : -1, 0, e.x / r.su, e.y / r.sv, r);
      for (let e of a) {
        let t = i[e[0]],
          r = i[e[1]],
          a = i[e[2]];
        (r.x - t.x) * (a.y - t.y) - (r.y - t.y) * (a.x - t.x) < 0 === n
          ? this.tri(o + e[0], o + e[1], o + e[2])
          : this.tri(o + e[0], o + e[2], o + e[1]);
      }
      return this;
    }
    cylinder(e, t, n, r, i, a, o = 12, s = !0, c = this.p, l = 0) {
      if (this.coarse) {
        if (Math.max(n, r) < 0.13) return this;
        o = this.seg(o);
      }
      let u = this.vcount,
        d = a - i,
        f = (n - r) / (d || 1);
      for (let s = 0; s <= o; s++) {
        let u = l + (s / o) * Math.PI * 2,
          p = Math.cos(u),
          m = Math.sin(u),
          h = Math.hypot(1, f),
          g = (s / o) * Math.PI * 2 * Math.max(n, r);
        (this.vert(
          e + p * n,
          i,
          t + m * n,
          p / h,
          f / h,
          m / h,
          g / c.su,
          0,
          c,
        ),
          this.vert(
            e + p * r,
            a,
            t + m * r,
            p / h,
            f / h,
            m / h,
            g / c.su,
            d / c.sv,
            c,
          ));
      }
      for (let e = 0; e < o; e++) {
        let t = u + e * 2;
        (this.tri(t, t + 1, t + 3), this.tri(t, t + 3, t + 2));
      }
      return (
        s &&
          (r > 1e-4 && this.disc(e, a, t, r, o, !0, c, l),
          n > 1e-4 && this.disc(e, i, t, n, o, !1, c, l)),
        this
      );
    }
    disc(e, t, n, r, i, a, o = this.p, s = 0) {
      if (this.coarse && r < 0.5) return this;
      let c = this.vert(e, t, n, 0, a ? 1 : -1, 0, 0.5, 0.5, o);
      for (let c = 0; c <= i; c++) {
        let l = s + (c / i) * Math.PI * 2;
        this.vert(
          e + Math.cos(l) * r,
          t,
          n + Math.sin(l) * r,
          0,
          a ? 1 : -1,
          0,
          0.5 + Math.cos(l) * 0.5,
          0.5 + Math.sin(l) * 0.5,
          o,
        );
      }
      for (let e = 0; e < i; e++)
        a
          ? this.tri(c, c + 2 + e, c + 1 + e)
          : this.tri(c, c + 1 + e, c + 2 + e);
      return this;
    }
    lathe(e, t, n, r = 12, i = this.p, a = 0, o = 0) {
      r = this.seg(r, 4);
      let s = n.length / 2,
        c = this.vcount;
      for (let c = 0; c <= r; c++) {
        let l = o + (c / r) * Math.PI * 2,
          u = Math.cos(l),
          d = Math.sin(l),
          f = 0;
        for (let o = 0; o < s; o++) {
          let l = n[o * 2],
            p = n[o * 2 + 1],
            m = Math.max(0, o - 1),
            h = Math.min(s - 1, o + 1),
            g = n[h * 2] - n[m * 2],
            _ = n[h * 2 + 1] - n[m * 2 + 1],
            v = -g,
            y = Math.hypot(_, v) || 1;
          ((_ /= y),
            (v /= y),
            o > 0 &&
              (f += Math.hypot(n[o * 2] - n[o * 2 - 2], p - n[o * 2 - 1])),
            this.vert(
              e + u * l,
              a + p,
              t + d * l,
              u * _,
              v,
              d * _,
              (c / r) * 4,
              f / i.sv,
              i,
            ));
        }
      }
      for (let e = 0; e < r; e++)
        for (let t = 0; t < s - 1; t++) {
          let n = c + e * s + t,
            r = c + (e + 1) * s + t;
          (this.tri(n, r + 1, r), this.tri(n, n + 1, r + 1));
        }
      return this;
    }
    sphere(e, t, n, r, i = 10, a = 6, o = this.p, s = 1) {
      if (this.coarse) {
        if (r < 0.12) return this;
        a = this.seg(a, 2);
      }
      let c = [];
      for (let e = 0; e <= a; e++) {
        let t = -Math.PI / 2 + (e / a) * Math.PI;
        c.push(Math.max(1e-4, Math.cos(t) * r), Math.sin(t) * r * s);
      }
      return this.lathe(e, n, c, i, o, t);
    }
    sweep(e, t, n, r = this.p, i = !1, a = null) {
      if (this.coarse) {
        if (t < 0.13 && n < 0.13) return this;
        e.length > 3 &&
          (e = e.filter((t, n) => n % 2 == 0 || n === e.length - 1));
      }
      let o = e.length;
      if (o < 2) return this;
      let s = [],
        c = 0,
        l = [0];
      for (let t = 1; t < o; t++)
        ((c += Math.hypot(
          e[t][0] - e[t - 1][0],
          e[t][1] - e[t - 1][1],
          e[t][2] - e[t - 1][2],
        )),
          l.push(c));
      for (let r = 0; r < o; r++) {
        let u = e[Math.max(0, r - 1)],
          d = e[Math.min(o - 1, r + 1)],
          f = d[0] - u[0],
          p = d[1] - u[1],
          m = d[2] - u[2],
          h = Math.hypot(f, p, m) || 1;
        ((f /= h), (p /= h), (m /= h));
        let g = -m,
          _ = f,
          v = Math.hypot(g, _);
        (v < 1e-4 && ((g = 1), (_ = 0), (v = 1)), (g /= v), (_ /= v));
        let y = 0 * m - _ * p,
          b = _ * f - g * m,
          x = g * p - 0 * f,
          S = a ? a(l[r] / (c || 1)) : 1,
          C = (t / 2) * S,
          w = (n / 2) * S,
          T = i ? w : 0,
          E = e[r],
          D = E[0] + y * T,
          O = E[1] + b * T,
          k = E[2] + x * T;
        s.push([
          [D - g * C - y * w, O - 0 * C - b * w, k - _ * C - x * w],
          [D + g * C - y * w, O + 0 * C - b * w, k + _ * C - x * w],
          [D + g * C + y * w, O + 0 * C + b * w, k + _ * C + x * w],
          [D - g * C + y * w, O - 0 * C + b * w, k - _ * C + x * w],
        ]);
      }
      for (let e = 0; e < o - 1; e++) {
        let t = s[e],
          n = s[e + 1];
        for (let i = 0; i < 4; i++) {
          let a = (i + 1) % 4;
          this.quad(t[i], n[i], n[a], t[a], l[e], 0, r);
        }
      }
      let u = s[0],
        d = s[o - 1];
      return (
        this.quad(u[0], u[1], u[2], u[3], 0, 0, r),
        this.quad(d[3], d[2], d[1], d[0], 0, 0, r),
        this
      );
    }
    stairs(e, t, n, r, i, a, o, s = this.p, c = this.p) {
      if (this.coarse) {
        let o = n + r;
        return (
          this.quad([e, a, o], [t, a, o], [t, i, n], [e, i, n], 0, 0, c),
          this.quad([e, i, n], [e, i, o], [e, a, o], [e, a, o], 0, 0, s),
          this.quad([t, i, o], [t, i, n], [t, a, o], [t, a, o], 0, 0, s),
          this
        );
      }
      let l = (a - i) / o,
        u = r / o;
      for (let r = 0; r < o; r++) {
        let a = n + r * u,
          o = i + r * l,
          d = o + l;
        (this.quad([t, o, a], [e, o, a], [e, d, a], [t, d, a], 0, 0, s),
          this.quad(
            [e, d, a + u],
            [t, d, a + u],
            [t, d, a],
            [e, d, a],
            0,
            0,
            c,
          ));
      }
      for (let r = 0; r < o; r++) {
        let a = n + r * u,
          o = a + u,
          c = i + (r + 1) * l;
        (this.quad([e, i, a], [e, i, o], [e, c, o], [e, c, a], 0, 0, s),
          this.quad([t, i, o], [t, i, a], [t, c, a], [t, c, o], 0, 0, s));
      }
      return this;
    }
    extrude(e, t, n = this.p, r = !0) {
      let i = [];
      for (let t = 0; t < e.length; t += 2) i.push(new ve(e[t], e[t + 1]));
      pe.isClockWise(i) && i.reverse();
      let a = pe.triangulateShape(i, []),
        o = -t / 2,
        s = t / 2,
        c = (e) => {
          let t = i[e[0]],
            n = i[e[1]],
            r = i[e[2]];
          return (n.x - t.x) * (r.y - t.y) - (n.y - t.y) * (r.x - t.x);
        },
        l = this.vcount;
      for (let e of i)
        this.vert(e.x, e.y, o, 0, 0, -1, e.x / n.su, e.y / n.sv, n);
      for (let e of a)
        c(e) < 0
          ? this.tri(l + e[0], l + e[1], l + e[2])
          : this.tri(l + e[0], l + e[2], l + e[1]);
      if (r) {
        let e = this.vcount;
        for (let e of i)
          this.vert(e.x, e.y, s, 0, 0, 1, e.x / n.su, e.y / n.sv, n);
        for (let t of a)
          c(t) > 0
            ? this.tri(e + t[0], e + t[1], e + t[2])
            : this.tri(e + t[0], e + t[2], e + t[1]);
      }
      let u = i.length,
        d = 0;
      for (let e = 0; e < u; e++) {
        let t = i[e],
          r = i[(e + 1) % u],
          a = t.distanceTo(r);
        (this.quad(
          [t.x, t.y, o],
          [r.x, r.y, o],
          [r.x, r.y, s],
          [t.x, t.y, s],
          d,
          0,
          n,
        ),
          (d += a));
      }
      return this;
    }
    patch(e, t, n, r = this.p, i = 1, a = 1, o = !1) {
      let s = this.vcount,
        c = new U(),
        l = new U(),
        u = new U(),
        d = new U(),
        f = new U(),
        p = 0.001;
      for (let s = 0; s <= t; s++)
        for (let m = 0; m <= e; m++) {
          let h = m / e,
            g = s / t;
          n(h, g, c);
          let _ = g,
            v = l;
          for (
            let e = 0;
            e < 3 &&
            (n(Math.min(1, h + p), _, l),
            n(Math.max(0, h - p), _, u),
            n(h, Math.min(1, _ + p), d),
            n(h, Math.max(0, _ - p), f),
            l.sub(u),
            d.sub(f),
            (v = l.cross(d)),
            !(v.lengthSq() > 1e-14));
            e++
          )
            _ = _ > 0.5 ? _ - 0.03 : _ + 0.03;
          (v.lengthSq() <= 1e-14 && v.set(0, 1, 0),
            v.normalize(),
            o && v.negate(),
            this.vert(
              c.x,
              c.y,
              c.z,
              v.x,
              v.y,
              v.z,
              (h * i) / r.su,
              (g * a) / r.sv,
              r,
            ));
        }
      for (let n = 0; n < t; n++)
        for (let t = 0; t < e; t++) {
          let r = s + n * (e + 1) + t,
            i = r + 1,
            a = r + e + 2,
            c = r + e + 1;
          o
            ? (this.tri(r, a, i), this.tri(r, c, a))
            : (this.tri(r, i, a), this.tri(r, a, c));
        }
      return this;
    }
    append(e) {
      if (e.empty) return this;
      this.grow(e.vcount, e.icount);
      let t = this.vcount,
        n = this.icount;
      (this.pos.set(e.pos.subarray(0, e.vcount * 3), t * 3),
        this.nrm.set(e.nrm.subarray(0, e.vcount * 3), t * 3),
        this.uv.set(e.uv.subarray(0, e.vcount * 2), t * 2),
        this.col.set(e.col.subarray(0, e.vcount * 4), t * 4),
        this.mat.set(e.mat.subarray(0, e.vcount * 4), t * 4),
        this.lit.set(e.lit.subarray(0, e.vcount * 4), t * 4),
        this.info.set(e.info.subarray(0, e.vcount * 4), t * 4));
      for (let r = 0; r < e.icount; r++) this.idx[n + r] = e.idx[r] + t;
      return ((this.vcount += e.vcount), (this.icount += e.icount), this);
    }
    get empty() {
      return this.icount === 0;
    }
    cutout() {
      return this.stampW(32);
    }
    stampW(e, t = 0, n = this.vcount) {
      for (let r = t; r < n; r++) this.info[r * 4 + 3] |= e;
      return this;
    }
    build() {
      let e = new V(),
        t = this.vcount;
      (e.setAttribute(`position`, new H(this.pos.slice(0, t * 3), 3)),
        e.setAttribute(`normal`, new H(this.nrm.slice(0, t * 3), 3)),
        e.setAttribute(`uv`, new H(this.uv.slice(0, t * 2), 2)),
        e.setAttribute(`aCol`, new H(this.col.slice(0, t * 4), 4, !0)),
        e.setAttribute(`aMat`, new H(this.mat.slice(0, t * 4), 4, !0)),
        e.setAttribute(`aLight`, new H(this.lit.slice(0, t * 4), 4, !0)),
        e.setAttribute(`aInfo`, new H(this.info.slice(0, t * 4), 4, !1)));
      let n =
        t > 65535
          ? this.idx.slice(0, this.icount)
          : Uint16Array.from(this.idx.subarray(0, this.icount));
      return (
        e.setIndex(new H(n, 1)),
        e.computeBoundingSphere(),
        e.computeBoundingBox(),
        e
      );
    }
    view() {
      let e = new V(),
        t = this.vcount;
      return (
        e.setAttribute(`position`, new H(this.pos.subarray(0, t * 3), 3)),
        e.setAttribute(`normal`, new H(this.nrm.subarray(0, t * 3), 3)),
        e.setAttribute(`uv`, new H(this.uv.subarray(0, t * 2), 2)),
        e.setAttribute(`aCol`, new H(this.col.subarray(0, t * 4), 4, !0)),
        e.setAttribute(`aMat`, new H(this.mat.subarray(0, t * 4), 4, !0)),
        e.setAttribute(`aLight`, new H(this.lit.subarray(0, t * 4), 4, !0)),
        e.setAttribute(`aInfo`, new H(this.info.subarray(0, t * 4), 4, !1)),
        e.setIndex(new H(this.idx.subarray(0, this.icount), 1)),
        e
      );
    }
    bounds() {
      let e = 1 / 0,
        t = 1 / 0,
        n = -1 / 0,
        r = -1 / 0;
      for (let i = 0; i < this.vcount; i++) {
        let a = this.pos[i * 3],
          o = this.pos[i * 3 + 2];
        (a < e && (e = a),
          a > n && (n = a),
          o < t && (t = o),
          o > r && (r = o));
      }
      return { x0: e, z0: t, x1: n, z1: r };
    }
    buildTiles(e, t = this.bounds()) {
      let n = e * e,
        r = e / Math.max(0.001, t.x1 - t.x0),
        i = e / Math.max(0.001, t.z1 - t.z0),
        a = new Uint8Array(this.icount / 3),
        o = new Uint32Array(n);
      for (let n = 0; n < this.icount / 3; n++) {
        let s = 0,
          c = 0;
        for (let e = 0; e < 3; e++) {
          let t = this.idx[n * 3 + e];
          ((s += this.pos[t * 3]), (c += this.pos[t * 3 + 2]));
        }
        let l = Math.min(e - 1, Math.max(0, Math.floor((s / 3 - t.x0) * r))),
          u = Math.min(e - 1, Math.max(0, Math.floor((c / 3 - t.z0) * i)));
        ((a[n] = u * e + l), o[u * e + l]++);
      }
      let s = new Int32Array(this.vcount).fill(-1),
        c = new Uint32Array(this.vcount),
        l = [];
      for (let e = 0; e < n; e++) {
        if (!o[e]) {
          l.push(null);
          continue;
        }
        let t = new Uint32Array(o[e] * 3),
          n = 0,
          r = 0;
        for (let i = 0; i < a.length; i++)
          if (a[i] === e)
            for (let e = 0; e < 3; e++) {
              let a = this.idx[i * 3 + e];
              (s[a] < 0 && ((s[a] = n), (c[n++] = a)), (t[r++] = s[a]));
            }
        let i = new Float32Array(n * 3),
          u = new Float32Array(n * 3),
          d = new Float32Array(n * 2),
          f = new Uint8Array(n * 4),
          p = new Uint8Array(n * 4),
          m = new Uint8Array(n * 4),
          h = new Uint8Array(n * 4);
        for (let e = 0; e < n; e++) {
          let t = c[e];
          s[t] = -1;
          for (let n = 0; n < 3; n++)
            ((i[e * 3 + n] = this.pos[t * 3 + n]),
              (u[e * 3 + n] = this.nrm[t * 3 + n]));
          ((d[e * 2] = this.uv[t * 2]), (d[e * 2 + 1] = this.uv[t * 2 + 1]));
          for (let n = 0; n < 4; n++)
            ((f[e * 4 + n] = this.col[t * 4 + n]),
              (p[e * 4 + n] = this.mat[t * 4 + n]),
              (m[e * 4 + n] = this.lit[t * 4 + n]),
              (h[e * 4 + n] = this.info[t * 4 + n]));
        }
        let g = new V();
        (g.setAttribute(`position`, new H(i, 3)),
          g.setAttribute(`normal`, new H(u, 3)),
          g.setAttribute(`uv`, new H(d, 2)),
          g.setAttribute(`aCol`, new H(f, 4, !0)),
          g.setAttribute(`aMat`, new H(p, 4, !0)),
          g.setAttribute(`aLight`, new H(m, 4, !0)),
          g.setAttribute(`aInfo`, new H(h, 4, !1)),
          g.setIndex(new H(n > 65535 ? t : Uint16Array.from(t), 1)),
          g.computeBoundingSphere(),
          g.computeBoundingBox(),
          l.push(g));
      }
      return l;
    }
    clear() {
      return (
        (this.vcount = 0),
        (this.icount = 0),
        (this.floodBase = null),
        (this.floodBits = 0),
        this.reset(),
        this
      );
    }
    release() {
      return (
        this.clear(),
        (this.vcap = 4),
        (this.icap = 8),
        (this.pos = new Float32Array(12)),
        (this.nrm = new Float32Array(12)),
        (this.uv = new Float32Array(8)),
        (this.col = new Uint8Array(16)),
        (this.mat = new Uint8Array(16)),
        (this.lit = new Uint8Array(16)),
        (this.info = new Uint8Array(16)),
        (this.idx = new Uint32Array(8)),
        this
      );
    }
  },
  it = new De();
function at(e) {
  return e <= 0 ? 0 : e >= 1 ? 255 : (e * 255 + 0.5) | 0;
}
function ot(e, t) {
  let n = new e.constructor(t);
  return (n.set(e), n);
}
function st(e, t, n, r) {
  return [e, r, e, t, n, t, n, r];
}
function ct(e, t, n, r, i = 0) {
  let a = [];
  for (let o = 0; o < r; o++) {
    let s = i + (o / r) * Math.PI * 2;
    a.push(e + Math.cos(s) * n, t + Math.sin(s) * n);
  }
  return a;
}
function lt(e, t, n, r) {
  let i = [];
  for (let a = 0; a < e.length; a += 2)
    i.push(t + (e[a] - t) * r, n + (e[a + 1] - n) * r);
  return i;
}
var X = {
  PLAIN: 0,
  LIT: 1,
  BRICK: 2,
  STONE: 3,
  ROOF_TILE: 4,
  WIN_OFFICE: 5,
  GLASS_101: 6,
  BRICK_ARCH_WIN: 7,
  BRICK_RECT_WIN: 8,
  LATTICE: 9,
  TEMPLE_DOOR: 10,
  PAINTED_BEAM: 11,
  PAVING: 12,
  PAVING_RED: 13,
  GRASS: 14,
  WATER: 15,
  GRAVEL: 16,
  CORRUGATED: 17,
  CONCRETE: 18,
  SMALL_TILE: 19,
  METAL_PANEL: 20,
  MARBLE: 21,
  GRANITE: 22,
  WOOD: 23,
  LEAVES: 24,
  BARK: 25,
  GLASS_MALL: 26,
  WIN_HOTEL: 27,
  WIN_STATION: 28,
  ROCK: 29,
  WIN_COLONIAL_WHITE: 30,
  DOOR_GOD: 31,
  WIN_HOSPITAL: 32,
  CUT_PORCELAIN: 33,
  FOLIAGE: 34,
  COUNT: 35,
};
function ut(e) {
  let t = e.atlas?.slots;
  return t === 1 || t === 2 ? t : e.interior === `full` ? 2 : 1;
}
function dt(e) {
  return e.atlas?.midArt === !0;
}
var ft = {
    high: {
      near: { calls: 6, tris: 6e4 },
      mid: { calls: 2, tris: 1e4 },
      interior: { calls: 3, tris: 4e4 },
    },
    low: {
      near: { calls: 3, tris: 25e3 },
      mid: { calls: 1, tris: 5e3 },
      interior: { calls: 2, tris: 2e4 },
    },
  },
  pt = {
    proxyTris: { high: 25e3, low: 12e3 },
    proxyCalls: 1,
    clusterNearCalls: 14,
    clusterNearCallsMobile: 10,
    clusterNearTris: 14e4,
    clusterRadius: 130,
    resolveMs: { desktop: 40, mobile: 60 },
    maxClaimRects: 80,
  },
  mt = {
    mid: { build: 260, drop: 305 },
    near: { build: 130, drop: 160 },
    interior: {
      desktop: { build: 35, drop: 47 },
      mobile: { build: 25, drop: 35 },
    },
    quality: { low: 0.6, medium: 0.8, high: 1, ultra: 1.3 },
    mobile: 0.6,
    hero: 1.25,
    dropFactor: 1.12,
    teleport: 70,
    lru: {
      nearMobile: 4,
      nearDesktop: 8,
      midMobile: 16,
      midDesktop: 32,
      nearMaxMobile: 6,
      nearMaxDesktop: 12,
      nearTrisMobile: 45e3,
      nearTrisDesktop: 14e4,
      nearCallsMobile: 12,
      nearCallsDesktop: 18,
    },
  },
  ht = { desktop: 384, mobile: 256 },
  gt = { desktop: ht.desktop * 4, mobile: ht.mobile * 4 },
  _t = 0.45;
function vt(e) {
  return e;
}
var yt = Object.freeze([]),
  bt = yt,
  xt = new Map(),
  St = null,
  Ct = new Set();
function wt(e) {
  return xt.get(e) ?? null;
}
function Tt() {
  for (let e of [...Ct])
    try {
      e(bt);
    } catch (e) {
      console.warn(`[test] sites public listener failed`, e);
    }
}
function Et(e, t, n) {
  let r = new Map();
  for (let e of n) r.set(e.id, e);
  let i = [];
  for (let e of t) {
    if (!e.ok) continue;
    let t = r.get(e.id);
    t &&
      i.push(
        Object.freeze({
          id: e.id,
          name: Object.freeze({ zh: t.name.zh, en: t.name.en }),
          category: t.category,
          district: t.district,
          cluster: t.cluster ?? null,
          icon: t.map.icon,
          minimap: !!t.map.minimap,
          hero: !!t.hero,
          interior: t.interior,
          x: e.x,
          z: e.z,
          y: e.y,
          w: e.w,
          d: e.d,
          facing: e.facing,
          rect: Object.freeze({
            minX: e.rect.minX,
            minZ: e.rect.minZ,
            maxX: e.rect.maxX,
            maxZ: e.rect.maxZ,
          }),
          address: Object.freeze({ zh: e.address.zh, en: e.address.en }),
          blurb: Object.freeze({ zh: t.blurb.zh, en: t.blurb.en }),
        }),
      );
  }
  ((St = e), (bt = Object.freeze(i)));
  let a = new Map();
  for (let e of i) a.set(e.id, e);
  ((xt = a), Tt());
}
function Dt(e) {
  St === e && ((St = null), (bt = yt), (xt = new Map()), Tt());
}
var Ot = class e {
    pos;
    nrm;
    uv;
    tint;
    info;
    idx;
    vc = 0;
    ic = 0;
    dry = !1;
    mn = [1 / 0, 1 / 0, 1 / 0];
    mx = [-1 / 0, -1 / 0, -1 / 0];
    track(e, t, n) {
      let r = this.mn,
        i = this.mx;
      (e < r[0] && (r[0] = e),
        t < r[1] && (r[1] = t),
        n < r[2] && (r[2] = n),
        e > i[0] && (i[0] = e),
        t > i[1] && (i[1] = t),
        n > i[2] && (i[2] = n));
    }
    tr = 255;
    tg = 255;
    tb = 255;
    i0 = 0;
    i1 = 1;
    i2 = 0;
    i3 = 0;
    remap = 0;
    constructor(e = 8192, t = e * 2) {
      ((this.pos = new Float32Array(e * 3)),
        (this.nrm = new Int8Array(e * 4)),
        (this.uv = new Float32Array(e * 2)),
        (this.tint = new Uint8Array(e * 4)),
        (this.info = new Uint8Array(e * 4)),
        (this.idx = new Uint32Array(t)));
    }
    static dryBuilder() {
      let t = new e(0, 0);
      return ((t.dry = !0), t);
    }
    get empty() {
      return this.ic === 0;
    }
    setTint(e) {
      return (
        (this.tr = (e >> 16) & 255),
        (this.tg = (e >> 8) & 255),
        (this.tb = e & 255),
        this
      );
    }
    setTintRGB(e, t, n) {
      return (
        (this.tr = Math.max(0, Math.min(255, Math.round(e * 255)))),
        (this.tg = Math.max(0, Math.min(255, Math.round(t * 255)))),
        (this.tb = Math.max(0, Math.min(255, Math.round(n * 255)))),
        this
      );
    }
    setInfo(e, t, n, r) {
      return this.remap
        ? ((this.i0 = e & 255),
          (this.i1 = (this.remap << 4) & 255),
          (this.i2 = t & 255),
          (this.i3 = n & 255),
          this)
        : ((this.i0 = e & 255),
          (this.i1 = t & 255),
          (this.i2 = n & 255),
          (this.i3 = r & 255),
          this);
    }
    grow(e, t) {
      if (this.vc + e > this.pos.length / 3) {
        let t = Math.max((this.pos.length / 3) * 2, this.vc + e + 1024),
          n = new Float32Array(t * 3);
        (n.set(this.pos), (this.pos = n));
        let r = new Int8Array(t * 4);
        (r.set(this.nrm), (this.nrm = r));
        let i = new Float32Array(t * 2);
        (i.set(this.uv), (this.uv = i));
        let a = new Uint8Array(t * 4);
        (a.set(this.tint), (this.tint = a));
        let o = new Uint8Array(t * 4);
        (o.set(this.info), (this.info = o));
      }
      if (this.ic + t > this.idx.length) {
        let e = Math.max(this.idx.length * 2, this.ic + t + 2048),
          n = new Uint32Array(e);
        (n.set(this.idx), (this.idx = n));
      }
    }
    v(e, t, n, r, i, a, o, s) {
      let c = this.vc++,
        l = c * 3;
      ((this.pos[l] = e), (this.pos[l + 1] = t), (this.pos[l + 2] = n));
      let u = c * 4;
      return (
        (this.nrm[u] = r * 127),
        (this.nrm[u + 1] = i * 127),
        (this.nrm[u + 2] = a * 127),
        (this.uv[c * 2] = o),
        (this.uv[c * 2 + 1] = s),
        (this.tint[u] = this.tr),
        (this.tint[u + 1] = this.tg),
        (this.tint[u + 2] = this.tb),
        (this.info[u] = this.i0),
        (this.info[u + 1] = this.i1),
        (this.info[u + 2] = this.i2),
        (this.info[u + 3] = this.i3),
        c
      );
    }
    quad4(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S) {
      if (this.dry) {
        ((this.vc += 4),
          (this.ic += 6),
          this.track(e, t, n),
          this.track(r, i, a),
          this.track(o, s, c),
          this.track(l, u, d));
        return;
      }
      this.grow(4, 6);
      let C = this.v(e, t, n, f, p, m, h, g);
      (this.v(r, i, a, f, p, m, _, v),
        this.v(o, s, c, f, p, m, y, b),
        this.v(l, u, d, f, p, m, x, S));
      let w = this.idx,
        T = this.ic;
      ((w[T++] = C),
        (w[T++] = C + 1),
        (w[T++] = C + 2),
        (w[T++] = C),
        (w[T++] = C + 2),
        (w[T++] = C + 3),
        (this.ic = T));
    }
    wall(e, t, n, r, i, a, o, s, c, l, u) {
      if (i <= 1e-4 || o - a <= 1e-4) return;
      let d = e + n * i,
        f = t + r * i;
      this.quad4(
        e,
        a,
        t,
        d,
        a,
        f,
        d,
        o,
        f,
        e,
        o,
        t,
        -r,
        0,
        n,
        s,
        l,
        c,
        l,
        c,
        u,
        s,
        u,
      );
    }
    wallRot(e, t, n, r, i, a, o, s) {
      if (i <= 1e-4 || o - a <= 1e-4) return;
      let c = e + n * i,
        l = t + r * i;
      this.quad4(
        e,
        a,
        t,
        c,
        a,
        l,
        c,
        o,
        l,
        e,
        o,
        t,
        -r,
        0,
        n,
        s.u1,
        s.v0,
        s.u1,
        s.v1,
        s.u0,
        s.v1,
        s.u0,
        s.v0,
      );
    }
    wallSloped(e, t, n, r, i, a, o, s, c, l, u, d, f) {
      if (i <= 1e-4) return;
      let p = e + n * i,
        m = t + r * i;
      this.quad4(
        e,
        a,
        t,
        p,
        a,
        m,
        p,
        s,
        m,
        e,
        o,
        t,
        -r,
        0,
        n,
        c,
        u,
        l,
        u,
        l,
        f,
        c,
        d,
      );
    }
    hrect(e, t, n, r, i, a, o, s, c, l) {
      n - e <= 1e-4 ||
        r - t <= 1e-4 ||
        (a
          ? this.quad4(
              e,
              i,
              t,
              e,
              i,
              r,
              n,
              i,
              r,
              n,
              i,
              t,
              0,
              1,
              0,
              o,
              l,
              o,
              s,
              c,
              s,
              c,
              l,
            )
          : this.quad4(
              e,
              i,
              t,
              n,
              i,
              t,
              n,
              i,
              r,
              e,
              i,
              r,
              0,
              -1,
              0,
              o,
              s,
              c,
              s,
              c,
              l,
              o,
              l,
            ));
    }
    box(e, t, n, r, i, a, o = 1, s = 1, c = 1, l = 31) {
      let u = r - e,
        d = a - n;
      (l & 1 && this.wall(r, n, -1, 0, u, t, i, 0, o, 0, s),
        l & 2 && this.wall(r, a, 0, -1, d, t, i, 0, o, 0, s),
        l & 4 && this.wall(e, a, 1, 0, u, t, i, 0, o, 0, s),
        l & 8 && this.wall(e, n, 0, 1, d, t, i, 0, o, 0, s),
        l & 16 && this.hrect(e, n, r, a, i, !0, 0, 0, o, c),
        l & 32 && this.hrect(e, n, r, a, t, !1, 0, 0, o, c));
    }
    solidBox(e, t, n, r, i, a, o, s) {
      let c = r - e,
        l = a - n;
      (this.wall(r, n, -1, 0, c, t, i, o, o, s, s),
        this.wall(r, a, 0, -1, l, t, i, o, o, s, s),
        this.wall(e, a, 1, 0, c, t, i, o, o, s, s),
        this.wall(e, n, 0, 1, l, t, i, o, o, s, s),
        this.hrect(e, n, r, a, i, !0, o, s, o, s));
    }
    cylinder(e, t, n, r, i, a, o, s, c, l) {
      if (this.dry) {
        ((this.vc += a * 4 + (s ? a + 1 : 0)),
          (this.ic += a * 6 + (s ? a * 3 : 0)),
          this.track(e - n, r, t - n),
          this.track(e + n, i, t + n));
        return;
      }
      let u = c !== void 0 && l !== void 0;
      this.grow(a * 4 + (s ? a + 1 : 0), a * 6 + (s ? a * 3 : 0));
      for (let s = 0; s < a; s++) {
        let d = (s / a) * Math.PI * 2,
          f = ((s + 1) / a) * Math.PI * 2,
          p = Math.cos(d),
          m = Math.sin(d),
          h = Math.cos(f),
          g = Math.sin(f),
          _ = Math.cos((d + f) / 2),
          v = Math.sin((d + f) / 2),
          y = (1 - s / a) * o,
          b = (1 - (s + 1) / a) * o;
        u
          ? this.quad4(
              e + h * n,
              r,
              t + g * n,
              e + p * n,
              r,
              t + m * n,
              e + p * n,
              i,
              t + m * n,
              e + h * n,
              i,
              t + g * n,
              _,
              0,
              v,
              c,
              l,
              c,
              l,
              c,
              l,
              c,
              l,
            )
          : this.quad4(
              e + h * n,
              r,
              t + g * n,
              e + p * n,
              r,
              t + m * n,
              e + p * n,
              i,
              t + m * n,
              e + h * n,
              i,
              t + g * n,
              _,
              0,
              v,
              b,
              0,
              y,
              0,
              y,
              1,
              b,
              1,
            );
      }
      if (s) {
        let r = this.v(e, i, t, 0, 1, 0, 0.5, 0.95),
          o = this.vc;
        for (let r = 0; r < a; r++) {
          let o = (r / a) * Math.PI * 2;
          this.v(
            e + Math.cos(o) * n,
            i,
            t + Math.sin(o) * n,
            0,
            1,
            0,
            0.5 + Math.cos(o) * 0.4,
            0.95,
          );
        }
        let s = this.idx,
          c = this.ic;
        for (let e = 0; e < a; e++)
          ((s[c++] = r), (s[c++] = o + ((e + 1) % a)), (s[c++] = o + e));
        this.ic = c;
      }
    }
    build(t = !1, n) {
      return e.concat([this], t, n)?.geo ?? null;
    }
    static concat(e, t = !1, n) {
      let r = 0,
        i = 0;
      for (let t of e) ((r += t.vc), (i += t.ic));
      if (!i) return null;
      let a =
          t && e.length === 1 && e[0].vc * 3 === e[0].pos.length ? e[0] : null,
        o = a ? a.pos : new Float32Array(r * 3),
        s = a ? a.nrm : new Int8Array(r * 4),
        c = a ? a.uv : new Float32Array(r * 2),
        l = a ? a.tint : new Uint8Array(r * 4),
        u = a ? a.info : new Uint8Array(r * 4),
        f =
          r > 65535
            ? a && a.ic === a.idx.length
              ? a.idx
              : new Uint32Array(i)
            : new Uint16Array(i),
        p = [],
        m = 0,
        h = 0;
      if (a) {
        if (f !== a.idx) for (let e = 0; e < i; e++) f[e] = a.idx[e];
        p.push(0, i);
      }
      for (let t of a ? [] : e) {
        (p.push(h),
          o.set(t.pos.subarray(0, t.vc * 3), m * 3),
          s.set(t.nrm.subarray(0, t.vc * 4), m * 4),
          c.set(t.uv.subarray(0, t.vc * 2), m * 2),
          l.set(t.tint.subarray(0, t.vc * 4), m * 4),
          u.set(t.info.subarray(0, t.vc * 4), m * 4));
        for (let e = 0; e < t.ic; e++) f[h + e] = t.idx[e] + m;
        ((m += t.vc), (h += t.ic));
      }
      a || p.push(h);
      let g = new V();
      (g.setAttribute(`position`, new H(o, 3)),
        g.setAttribute(`normal`, new H(s, 4, !0)),
        g.setAttribute(`uv`, new H(c, 2)),
        g.setAttribute(`aTint`, new H(l, 4, !0)),
        g.setAttribute(`aInfo`, new H(u, 4, !1)),
        g.setIndex(new H(f, 1)));
      let _ = n ?? null;
      if (!_)
        for (let t of e) {
          let e = t.bounds();
          e && (_ = _ ? _.union(e) : e);
        }
      return (
        (g.boundingBox = _ ? _.clone() : new xe()),
        (g.boundingSphere = g.boundingBox.getBoundingSphere(new d())),
        { geo: g, starts: p }
      );
    }
    bounds(e = 0) {
      if (this.vc <= e) return null;
      if (this.dry)
        return new xe(new U().fromArray(this.mn), new U().fromArray(this.mx));
      let t = new xe(),
        n = this.pos;
      for (let r = e; r < this.vc; r++) {
        let e = n[r * 3],
          i = n[r * 3 + 1],
          a = n[r * 3 + 2];
        (e < t.min.x && (t.min.x = e),
          i < t.min.y && (t.min.y = i),
          a < t.min.z && (t.min.z = a),
          e > t.max.x && (t.max.x = e),
          i > t.max.y && (t.max.y = i),
          a > t.max.z && (t.max.z = a));
      }
      return t;
    }
    reset() {
      ((this.vc = 0), (this.ic = 0), this.mn.fill(1 / 0), this.mx.fill(-1 / 0));
    }
    hash(e = 2166136261) {
      if (this.dry) return Math.imul(e ^ this.vc, 16777619) ^ this.ic;
      let t = (t, n) => {
        let r = new Uint8Array(t.buffer, t.byteOffset, n);
        for (let t = 0; t < n; t++) e = Math.imul(e ^ r[t], 16777619);
      };
      return (
        t(this.pos, this.vc * 12),
        t(this.nrm, this.vc * 4),
        t(this.uv, this.vc * 8),
        t(this.tint, this.vc * 4),
        t(this.info, this.vc * 4),
        t(this.idx, this.ic * 4),
        e >>> 0
      );
    }
  },
  kt = { x0: 10, y0: 26, x1: 246, y1: 248 },
  At = kt.x0,
  jt = kt.x1,
  Z = kt.y0,
  Mt = kt.y1;
(jt - At, Mt - Z);
var Nt = {
    food: {
      floor: 1,
      ceil: 0,
      counter: 0,
      people: 1.4,
      staff: !1,
      shelves: 0,
      depth: [5, 9],
      warm: 0.45,
      counterCol: 12106942,
    },
    goods: {
      floor: 0,
      ceil: 0,
      counter: 1,
      people: 1,
      staff: !0,
      shelves: 1,
      depth: [6, 11],
      warm: 0.2,
      counterCol: 9075302,
    },
    noodle: {
      floor: 1,
      ceil: 0,
      counter: 0,
      people: 1.5,
      staff: !1,
      shelves: 0,
      depth: [5, 8],
      warm: 0.6,
      counterCol: 12106942,
    },
    clinic: {
      floor: 4,
      ceil: 0,
      counter: 0,
      people: 1.2,
      staff: !1,
      shelves: 0,
      depth: [6, 10],
      warm: 0,
      counterCol: 10470351,
    },
    lobby: {
      floor: 3,
      ceil: 1,
      counter: 1,
      people: 0.3,
      staff: !0,
      shelves: 0,
      depth: [6, 10],
      warm: 0.7,
      counterCol: 5981746,
    },
    conv: {
      floor: 4,
      ceil: 4,
      counter: 5,
      people: 1.3,
      staff: !1,
      shelves: 1,
      depth: [8, 12],
      warm: 0,
      counterCol: 15264492,
    },
    tea: {
      floor: 1,
      ceil: 0,
      counter: 2,
      people: 0.4,
      staff: !0,
      shelves: 0,
      depth: [3, 4.5],
      warm: 0.35,
      counterCol: 11040330,
    },
    claw: {
      floor: 3,
      ceil: 3,
      counter: 0,
      people: 1,
      staff: !1,
      shelves: 1,
      depth: [5, 9],
      warm: 0.5,
      counterCol: 2760752,
    },
    pharm: {
      floor: 4,
      ceil: 4,
      counter: 1,
      people: 1,
      staff: !0,
      shelves: 1,
      depth: [5, 9],
      warm: 0,
      counterCol: 15002854,
    },
    breakfast: {
      floor: 1,
      ceil: 0,
      counter: 2,
      people: 1,
      staff: !0,
      shelves: 0,
      depth: [4, 7],
      warm: 0.4,
      counterCol: 12896458,
    },
    lottery: {
      floor: 1,
      ceil: 0,
      counter: 1,
      people: 1.3,
      staff: !0,
      shelves: 0,
      depth: [4, 7],
      warm: 0.5,
      counterCol: 9132595,
    },
    scooter: {
      floor: 5,
      ceil: 2,
      counter: 0,
      people: 0.7,
      staff: !1,
      shelves: 1,
      depth: [5, 9],
      warm: 0.3,
      counterCol: 6975088,
    },
    oldshop: {
      floor: 6,
      ceil: 2,
      counter: 2,
      people: 0.6,
      staff: !0,
      shelves: 1,
      depth: [6, 12],
      warm: 0.9,
      counterCol: 7029796,
    },
    salon: {
      floor: 4,
      ceil: 1,
      counter: 0,
      people: 1.3,
      staff: !1,
      shelves: 0,
      depth: [5, 8],
      warm: 0.35,
      counterCol: 2763310,
    },
    phone: {
      floor: 4,
      ceil: 4,
      counter: 3,
      people: 1,
      staff: !0,
      shelves: 1,
      depth: [4, 8],
      warm: 0,
      counterCol: 13161692,
    },
    cafe: {
      floor: 2,
      ceil: 1,
      counter: 1,
      people: 1.3,
      staff: !0,
      shelves: 0,
      depth: [5, 9],
      warm: 1,
      counterCol: 6964260,
    },
    boutique: {
      floor: 2,
      ceil: 1,
      counter: 0,
      people: 0.9,
      staff: !1,
      shelves: 1,
      depth: [5, 9],
      warm: 0.55,
      counterCol: 15262424,
    },
    office: {
      floor: 0,
      ceil: 0,
      counter: 1,
      people: 0.7,
      staff: !0,
      shelves: 0,
      depth: [5, 9],
      warm: 0.1,
      counterCol: 14209216,
    },
    bakery: {
      floor: 1,
      ceil: 1,
      counter: 3,
      people: 1,
      staff: !0,
      shelves: 1,
      depth: [4, 8],
      warm: 0.85,
      counterCol: 15789284,
    },
    convDoor: {
      floor: 4,
      ceil: 4,
      counter: 2,
      people: 0.8,
      staff: !0,
      shelves: 1,
      depth: [6, 9],
      warm: 0,
      counterCol: 14212576,
    },
    books: {
      floor: 2,
      ceil: 0,
      counter: 1,
      people: 1.2,
      staff: !0,
      shelves: 1,
      depth: [6, 11],
      warm: 0.4,
      counterCol: 6965808,
    },
    hardware: {
      floor: 5,
      ceil: 0,
      counter: 1,
      people: 0.6,
      staff: !0,
      shelves: 1,
      depth: [6, 12],
      warm: 0.15,
      counterCol: 8022616,
    },
    grocery: {
      floor: 0,
      ceil: 0,
      counter: 1,
      people: 1.1,
      staff: !0,
      shelves: 1,
      depth: [6, 11],
      warm: 0.25,
      counterCol: 11577496,
    },
    grill: {
      floor: 1,
      ceil: 0,
      counter: 2,
      people: 0.6,
      staff: !0,
      shelves: 0,
      depth: [3, 5],
      warm: 0.5,
      counterCol: 12567493,
    },
    florist: {
      floor: 1,
      ceil: 1,
      counter: 0,
      people: 0.6,
      staff: !1,
      shelves: 1,
      depth: [4, 7],
      warm: 0.55,
      counterCol: 8018490,
    },
    lounge: {
      floor: 3,
      ceil: 3,
      counter: 1,
      people: 0.8,
      staff: !0,
      shelves: 0,
      depth: [6, 10],
      warm: 0.6,
      counterCol: 3809320,
    },
    gym: {
      floor: 3,
      ceil: 0,
      counter: 0,
      people: 1.4,
      staff: !1,
      shelves: 0,
      depth: [8, 14],
      warm: 0,
      counterCol: 2763824,
    },
    laundry: {
      floor: 4,
      ceil: 0,
      counter: 0,
      people: 0.5,
      staff: !1,
      shelves: 1,
      depth: [5, 8],
      warm: 0,
      counterCol: 15264492,
    },
  },
  Pt = [
    [13157563, 11973031],
    [14471094, 13352354],
    [10646602, 9068092],
    [4999237, 3946807],
    [15001834, 13949404],
    [8159096, 7106408],
    [10836544, 9588536],
  ],
  Ft = [
    2899546, 9080466, 15131354, 12101768, 1973794, 8007734, 5925444, 4876942,
  ],
  Q = {
    APT_WIN: 0,
    APT_SMALL: 4,
    APT_BALC: 6,
    APT_STAIR: 8,
    MID_WIN: 9,
    MID_BALC: 12,
    OFFICE: 14,
    GLASS: 16,
    PODIUM: 19,
    HOTEL: 20,
    SIDE: 21,
    SHUTTER: 24,
    SHOP_FOOD: 26,
    SHOP_GOODS: 27,
    SHOP_NOODLE: 28,
    SHOP_CLINIC: 29,
    LOBBY: 30,
    RES_DOOR: 31,
    CONV: 32,
    TEA: 33,
    CLAW: 34,
    PHARM: 35,
    BREAKFAST: 36,
    LOTTERY: 37,
    HALF_SHUTTER: 38,
    SCOOTER_SHOP: 39,
    ARCH: 40,
    BRICK_WIN: 41,
    BRICK: 43,
    PARAPET_ORN: 44,
    OLD_DOOR: 45,
    OLD_SHOP: 46,
    ARCADE_FLOOR: 47,
    ROOF_GREEN: 48,
    ROOF_GREY: 49,
    TIN: 50,
    TIN_WIN: 51,
    TIN_ROOF: 52,
    ARCADE_CEIL: 53,
    COLUMN: 54,
    CONCRETE: 55,
    CAGE: 56,
    CAGE_SIDE: 57,
    AC_FRONT: 58,
    AC_SIDE: 59,
    TANK_STEEL: 60,
    TANK_BLUE: 61,
    RAIL: 62,
    LAUNDRY: 63,
    SHOP_SALON: 64,
    SHOP_PHONE: 65,
    SHOP_CAFE: 66,
    SHOP_BOUTIQUE: 67,
    SHOP_OFFICE: 68,
    SHOP_BAKERY: 69,
    CONV_DOOR: 70,
    PLINTH: 71,
    SHOP_BOOKS: 72,
    SHOP_HARDWARE: 73,
    SHOP_GROCERY: 74,
    SHOP_GRILL: 75,
    SHOP_FLORIST: 76,
    SHOP_LOUNGE: 77,
    SHOP_GYM: 78,
    SHOP_LAUNDRY: 79,
    NET_GREEN: 80,
    NET_BLUE: 81,
    LATTICE: 82,
    BOUGAIN: 83,
  },
  It = {
    [Q.SHOP_FOOD]: `food`,
    [Q.SHOP_GOODS]: `goods`,
    [Q.SHOP_NOODLE]: `noodle`,
    [Q.SHOP_CLINIC]: `clinic`,
    [Q.LOBBY]: `lobby`,
    [Q.CONV]: `conv`,
    [Q.TEA]: `tea`,
    [Q.CLAW]: `claw`,
    [Q.PHARM]: `pharm`,
    [Q.BREAKFAST]: `breakfast`,
    [Q.LOTTERY]: `lottery`,
    [Q.SCOOTER_SHOP]: `scooter`,
    [Q.OLD_SHOP]: `oldshop`,
    [Q.SHOP_SALON]: `salon`,
    [Q.SHOP_PHONE]: `phone`,
    [Q.SHOP_CAFE]: `cafe`,
    [Q.SHOP_BOUTIQUE]: `boutique`,
    [Q.SHOP_OFFICE]: `office`,
    [Q.SHOP_BAKERY]: `bakery`,
    [Q.CONV_DOOR]: `convDoor`,
    [Q.SHOP_BOOKS]: `books`,
    [Q.SHOP_HARDWARE]: `hardware`,
    [Q.SHOP_GROCERY]: `grocery`,
    [Q.SHOP_GRILL]: `grill`,
    [Q.SHOP_FLORIST]: `florist`,
    [Q.SHOP_LOUNGE]: `lounge`,
    [Q.SHOP_GYM]: `gym`,
    [Q.SHOP_LAUNDRY]: `laundry`,
  };
(kt.x0, kt.y0, kt.x1 - kt.x0, kt.y1 - kt.y0);
var Lt = [13116186, 16774352, 16765471],
  Rt = [10361622, 16771496, 16106818],
  zt = [16106496, 11736079, 1710618],
  Bt = [1855395, 16777215, 16765952],
  Vt = [1323102, 16052448, 8373503],
  Ht = [2062909, 16777215, 16769658],
  Ut = [1014914, 16777215, 12580080],
  Wt = [15225871, 16777215, 16773792],
  Gt = [16513262, 13115420, 1855395],
  Kt = [16513262, 1855395, 13902618],
  qt = [16514294, 1736508, 1855395],
  Jt = [1446671, 15253608, 12092974],
  Yt = [4861468, 16180936, 14263642],
  Xt = [7029796, 16642264, 2759184],
  Zt = [5974662, 16774048, 16743129],
  Qt = [15755941, 16777215, 16773366],
  $t = [1182480, 16728018, 4191487],
  en = [725012, 4191487, 16728018],
  tn = [726030, 4063098, 16756768],
  nn = [1314827, 16756768, 16726570],
  rn = [3817285, 16777215, 15777856],
  an = {
    "beef-noodle": {
      trade: `beef-noodle`,
      category: `牛肉麵`,
      weight: 1,
      interior: `noodle`,
      eatery: !0,
      sub: `BEEF NOODLES`,
      names: [
        `老張牛肉麵`,
        `林家牛肉麵`,
        `阿忠牛肉麵`,
        `牛大哥牛肉麵`,
        `川味牛肉麵`,
        `老山東牛肉麵`,
      ],
      menu: [
        `紅燒牛肉麵 180`,
        `清燉牛肉麵 170`,
        `番茄牛肉麵 190`,
        `牛肉湯麵 120`,
        `小菜 30`,
      ],
      colors: [Lt, Rt, zt, Gt],
      style: [`box`, `box`, `white`],
      hours: `11:00-21:00`,
    },
    "braised-rice": {
      trade: `braised-rice`,
      category: `滷肉飯`,
      weight: 1,
      interior: `food`,
      eatery: !0,
      sub: `五十年老店`,
      names: [
        `老王滷肉飯`,
        `金豐滷肉飯`,
        `黃記魯肉飯`,
        `阿英滷肉飯`,
        `圓環滷肉飯`,
      ],
      menu: [`滷肉飯 35`, `雞肉飯 40`, `貢丸湯 30`, `燙青菜 35`, `滷蛋 15`],
      colors: [zt, Lt, Gt],
      style: [`box`, `white`],
      hours: `10:30-20:30`,
    },
    dumplings: {
      trade: `dumplings`,
      category: `水餃`,
      weight: 1,
      interior: `food`,
      eatery: !0,
      sub: `手工水餃 鍋貼`,
      names: [`福記水餃館`, `巷口水餃`, `山東餃子館`, `老鄉水餃`, `北方餃子館`],
      menu: [
        `高麗菜水餃 6/顆`,
        `韭菜水餃 6/顆`,
        `鍋貼 6/顆`,
        `酸辣湯 35`,
        `玉米濃湯 35`,
      ],
      colors: [Gt, Ht, Lt],
      style: [`white`, `box`],
      hours: `11:00-20:00`,
    },
    noodles: {
      trade: `noodles`,
      category: `麵店`,
      weight: 1,
      interior: `noodle`,
      eatery: !0,
      sub: `切仔麵 黑白切`,
      names: [`豪記麵店`, `老張擔擔麵`, `阿婆切仔麵`, `福州乾拌麵`, `意麵王`],
      menu: [`陽春麵 45`, `乾麵 50`, `餛飩湯 50`, `擔擔麵 60`, `滷蛋 15`],
      colors: [Gt, zt, Bt],
      style: [`white`, `box`],
      hours: `10:00-20:00`,
    },
    bento: {
      trade: `bento`,
      category: `便當`,
      weight: 1,
      interior: `food`,
      eatery: !0,
      sub: `排骨 雞腿 焢肉`,
      names: [`好味道便當`, `池中飯包`, `正點便當`, `阿吉便當`, `鐵路排骨飯`],
      menu: [
        `排骨便當 90`,
        `雞腿便當 100`,
        `焢肉便當 90`,
        `魚排便當 95`,
        `素食便當 80`,
      ],
      colors: [Bt, Lt, Wt],
      style: [`box`],
      hours: `10:30-20:00`,
    },
    ramen: {
      trade: `ramen`,
      category: `拉麵`,
      weight: 1,
      interior: `noodle`,
      eatery: !0,
      sub: `RAMEN`,
      names: [`麵屋 一丁`, `豚骨一番`, `北海道拉麵`, `鬼鐵棒拉麵`, `麵屋 赤鬼`],
      menu: [
        `豚骨拉麵 260`,
        `味噌拉麵 250`,
        `醬油拉麵 240`,
        `叉燒丼 120`,
        `煎餃 90`,
      ],
      colors: [Jt, [16052194, 1710618, 13115420], Rt],
      style: [`wood`, `white`, `box`],
      hours: `11:30-22:00`,
    },
    hotpot: {
      trade: `hotpot`,
      category: `火鍋`,
      weight: 1,
      interior: `food`,
      eatery: !0,
      sub: `麻辣鍋 吃到飽`,
      names: [`一品麻辣火鍋`, `石頭火鍋`, `鍋神麻辣鍋`, `老蜀川火鍋`, `涮之葉`],
      menu: [
        `麻辣鍋 380`,
        `酸菜白肉鍋 320`,
        `牛五花 180`,
        `手工丸子 120`,
        `冰淇淋 無限供應`,
      ],
      colors: [Rt, Lt, Jt],
      style: [`box`, `neon`],
      hours: `11:30-02:00`,
    },
    stirfry: {
      trade: `stirfry`,
      category: `熱炒`,
      weight: 1,
      interior: `food`,
      eatery: !0,
      sub: `現撈 熱炒 啤酒`,
      names: [
        `日日鮮海產`,
        `阿財熱炒100`,
        `海龍熱炒`,
        `三兄弟熱炒`,
        `好兄弟海產`,
      ],
      menu: [
        `三杯雞 200`,
        `炒海瓜子 180`,
        `蝦仁炒飯 120`,
        `炒空心菜 100`,
        `台啤 60`,
      ],
      colors: [nn, Lt, Bt],
      style: [`neon`, `box`],
      hours: `17:00-02:00`,
    },
    lumei: {
      trade: `lumei`,
      category: `滷味`,
      weight: 1,
      interior: `grill`,
      eatery: !0,
      sub: `麻辣 滷味`,
      names: [`王記滷味`, `天天滷味`, `大腸王滷味`, `老攤滷味`],
      menu: [`豆干 15`, `海帶 15`, `米血 20`, `王子麵 25`, `百頁豆腐 25`],
      colors: [Lt, Wt, zt],
      style: [`box`],
      hours: `16:00-01:00`,
    },
    "fried-chicken": {
      trade: `fried-chicken`,
      category: `鹹酥雞`,
      weight: 1,
      interior: `grill`,
      eatery: !0,
      sub: `營業到凌晨`,
      names: [`阿美鹹酥雞`, `正宗鹹酥雞`, `豪霸雞排`, `炸雞大師`],
      menu: [`鹹酥雞 70`, `雞排 80`, `甜不辣 40`, `四季豆 40`, `地瓜條 40`],
      colors: [zt, Lt, Wt],
      style: [`box`],
      hours: `15:00-01:00`,
    },
    vermicelli: {
      trade: `vermicelli`,
      category: `麵線`,
      weight: 1,
      interior: `food`,
      eatery: !0,
      sub: `大腸 蚵仔`,
      names: [`林記蚵仔麵線`, `阿崇麵線`, `老街大腸麵線`],
      menu: [`大腸麵線 大65`, `大腸麵線 小50`, `蚵仔麵線 60`, `綜合麵線 70`],
      colors: [Lt, zt, Gt],
      style: [`box`, `white`],
      hours: `09:00-22:00`,
    },
    "shaved-ice": {
      trade: `shaved-ice`,
      category: `冰品`,
      weight: 1,
      interior: `food`,
      eatery: !0,
      sub: `芒果冰 豆花`,
      names: [`金華豆花`, `老牌冰菓室`, `芒果冰館`, `古早味豆花`, `雪花冰`],
      menu: [`芒果雪花冰 180`, `紅豆牛奶冰 60`, `豆花 45`, `仙草冰 50`],
      colors: [Qt, Ut, [16773848, 14174746, 2792026]],
      style: [`box`, `white`],
      hours: `11:00-23:00`,
    },
    xiaolongbao: {
      trade: `xiaolongbao`,
      category: `小籠包`,
      weight: 1,
      interior: `food`,
      eatery: !0,
      sub: `湯包 點心`,
      names: [`鼎泰瘋`, `京頂樓`, `杭洲小籠湯包`, `高紀`],
      menu: [`小籠包 250`, `蝦仁燒賣 280`, `排骨蛋炒飯 260`, `酸辣湯 100`],
      colors: [[16183780, 3811866, 11805482], Jt, Rt],
      style: [`white`, `wood`],
      hours: `10:00-21:00`,
    },
    coffee: {
      trade: `coffee`,
      category: `咖啡`,
      weight: 1,
      interior: `cafe`,
      eatery: !1,
      sub: `COFFEE`,
      names: [`路易沙咖啡`, `巷弄咖啡`, `慢半拍咖啡`, `日光珈琲`, `森林咖啡`],
      menu: [`美式咖啡 45`, `拿鐵 65`, `手沖單品 120`, `司康 60`],
      colors: [Yt, Jt, [16051680, 3811866, 8018490], rn],
      style: [`wood`, `white`, `box`],
      hours: `07:30-21:00`,
    },
    izakaya: {
      trade: `izakaya`,
      category: `居酒屋`,
      weight: 1,
      interior: `cafe`,
      eatery: !0,
      sub: `串燒 生啤`,
      names: [
        `居酒屋 花子`,
        `小料理 月之家`,
        `炭火串燒 鳥貴`,
        `酒場 三丁目`,
        `居酒屋 大吉`,
      ],
      menu: [`雞肉串燒 50`, `生啤酒 150`, `鹽烤鯖魚 220`, `玉子燒 80`],
      colors: [[15854296, 1710618, 11805482], Jt, Xt],
      style: [`white`, `wood`],
      hours: `18:00-02:00`,
    },
    vegetarian: {
      trade: `vegetarian`,
      category: `素食`,
      weight: 1,
      interior: `food`,
      eatery: !0,
      sub: `自助餐 秤重`,
      names: [`蓮花素食`, `全家福自助餐`, `菩提素食`, `善緣素食館`],
      menu: [`自助餐 秤重計價`, `素食便當 80`, `味噌湯 免費`],
      colors: [Ht, qt, [15918792, 2779690, 13142570]],
      style: [`box`, `white`],
      hours: `10:30-20:00`,
    },
    "stinky-tofu": {
      trade: `stinky-tofu`,
      category: `臭豆腐`,
      weight: 1,
      interior: `grill`,
      eatery: !0,
      sub: `深坑 麻辣`,
      names: [`深坑臭豆腐`, `阿婆臭豆腐`, `臭臭鍋專賣`],
      menu: [`脆皮臭豆腐 60`, `麻辣臭豆腐 80`, `臭臭鍋 120`, `台式泡菜 20`],
      colors: [Lt, zt],
      style: [`box`],
      hours: `15:00-24:00`,
    },
    "soy-milk": {
      trade: `soy-milk`,
      category: `豆漿`,
      weight: 1,
      interior: `breakfast`,
      eatery: !0,
      sub: `燒餅 油條`,
      names: [`永和豆漿大王`, `世紀豆漿`, `復興豆漿`, `四方豆漿`],
      menu: [`燒餅油條 45`, `鹹豆漿 35`, `甜豆漿 20`, `飯糰 40`, `蛋餅 30`],
      colors: [Lt, Gt, zt],
      style: [`box`, `white`],
      hours: `05:00-11:30`,
    },
    breakfast: {
      trade: `breakfast`,
      category: `早餐`,
      weight: 1,
      interior: `breakfast`,
      eatery: !0,
      sub: `漢堡 蛋餅 奶茶`,
      names: [`早安美之城`, `晨間廚房`, `拉雅早午餐`, `麥味燈`],
      menu: [`培根蛋餅 40`, `蘿蔔糕 35`, `豬肉漢堡 45`, `奶茶 25`],
      colors: [zt, Wt, [16774872, 13902618, 1736508]],
      style: [`box`, `white`],
      hours: `06:00-13:00`,
    },
    bakery: {
      trade: `bakery`,
      category: `麵包`,
      weight: 1,
      interior: `bakery`,
      eatery: !1,
      sub: `BAKERY`,
      names: [`金閣麵包`, `美珍麵包坊`, `日出烘焙`, `老師傅麵包`],
      menu: [`菠蘿麵包 30`, `奶酥麵包 35`, `蔥麵包 35`, `生日蛋糕 預訂`],
      colors: [[16181968, 8010266, 13115420], Yt, Gt],
      style: [`white`, `wood`],
      hours: `07:00-22:00`,
    },
    optician: {
      trade: `optician`,
      category: `眼鏡`,
      weight: 1,
      interior: `phone`,
      sub: `驗光配鏡`,
      names: [`大華眼鏡`, `光明眼鏡`, `明亮眼鏡`, `視界眼鏡`],
      menu: [`專業驗光`, `隱形眼鏡`, `老花眼鏡`, `太陽眼鏡`],
      colors: [Bt, Vt, Kt],
      style: [`box`, `white`],
      hours: `10:30-22:00`,
    },
    phone: {
      trade: `phone`,
      category: `通訊`,
      weight: 1,
      interior: `phone`,
      sub: `手機 門號 配件`,
      names: [`快樂通訊行`, `神通通訊`, `全球通訊`, `大眾電信`],
      menu: [`門號申辦`, `手機維修`, `螢幕更換`, `保護貼 199`],
      colors: [Lt, Bt, Wt, en],
      style: [`box`, `neon`],
      hours: `11:00-22:00`,
    },
    computer: {
      trade: `computer`,
      category: `電腦`,
      weight: 1,
      interior: `phone`,
      sub: `維修 組裝`,
      names: [`世界電腦`, `燦昆3C`, `光華電腦`, `大通資訊`],
      menu: [`電腦維修`, `筆電 平板`, `記憶體 硬碟`, `組裝 升級`],
      colors: [$t, Bt, rn],
      style: [`neon`, `box`],
      hours: `11:00-21:30`,
    },
    electrical: {
      trade: `electrical`,
      category: `電器`,
      weight: 1,
      interior: `hardware`,
      sub: `冷氣 冰箱 洗衣機`,
      names: [`大通電器行`, `聲豹電器`, `國際派電器`, `山洋電器行`],
      menu: [`冷氣 冰箱`, `洗衣機`, `安裝 維修`, `舊機回收`],
      colors: [Bt, Lt, Kt],
      style: [`box`, `white`],
      hours: `09:00-21:00`,
    },
    hardware: {
      trade: `hardware`,
      category: `五金`,
      weight: 1,
      interior: `hardware`,
      sub: `水電 工具`,
      names: [`金興五金行`, `順發五金百貨`, `大有五金`, `永豐五金`],
      menu: [`水電材料`, `油漆 工具`, `鎖匙 打鑰匙`, `螺絲 零件`],
      colors: [Bt, zt, Ht],
      style: [`box`],
      hours: `08:00-20:00`,
    },
    stationery: {
      trade: `stationery`,
      category: `書局`,
      weight: 1,
      interior: `books`,
      sub: `文具 影印`,
      names: [`光華書局`, `建國文具`, `三明書局`, `金時文具`],
      menu: [`文具`, `影印 護貝`, `參考書`, `禮品`],
      colors: [Kt, Ht, Bt],
      style: [`white`, `box`],
      hours: `09:00-22:00`,
    },
    clinic: {
      trade: `clinic`,
      category: `診所`,
      weight: 1,
      interior: `clinic`,
      sub: `健保特約`,
      names: [
        `長春牙醫診所`,
        `長青中醫診所`,
        `仁愛小兒科`,
        `康健皮膚科`,
        `安心家醫科`,
        `明德耳鼻喉科`,
      ],
      menu: [
        `門診時間`,
        `上午 09:00-12:00`,
        `下午 15:00-18:00`,
        `夜診 18:30-21:30`,
      ],
      colors: [qt, Kt, Ut],
      style: [`white`, `box`],
      hours: `09:00-21:30`,
    },
    salon: {
      trade: `salon`,
      category: `美髮`,
      weight: 1,
      interior: `salon`,
      sub: `剪 燙 染`,
      names: [`美美髮廊`, `萬國髮藝`, `曼度髮型`, `小林髮廊`, `一剪 HAIR`],
      menu: [`洗髮 250`, `剪髮 400`, `染髮 1200`, `燙髮 1500`],
      colors: [Zt, Qt, rn, $t],
      style: [`box`, `neon`],
      hours: `10:00-21:00`,
    },
    laundry: {
      trade: `laundry`,
      category: `洗衣`,
      weight: 1,
      interior: `laundry`,
      sub: `乾洗 修改`,
      names: [`新新洗衣`, `白雪洗衣`, `潔寶自助洗衣`],
      menu: [`乾洗`, `水洗 燙衣`, `修改衣服`, `自助洗衣 24H`],
      colors: [Kt, Ut, Bt],
      style: [`white`, `box`],
      hours: `08:00-21:00`,
    },
    realty: {
      trade: `realty`,
      category: `房屋`,
      weight: 1,
      interior: `office`,
      sub: `買賣 租賃`,
      names: [`大安房屋`, `好宅房屋`, `信誼房屋`, `住福不動產`],
      menu: [`買賣 租賃`, `三房二廳 1680萬`, `套房出租 1.2萬`, `免費估價`],
      colors: [Wt, Ht, [16513262, 15225871, 1736508]],
      style: [`box`, `white`],
      hours: `09:30-21:30`,
    },
    pawn: {
      trade: `pawn`,
      category: `當舖`,
      weight: 1,
      interior: `office`,
      sub: `汽機車借款`,
      names: [`萬福當舖`, `大發當舖`, `合法當舖`],
      menu: [`汽機車借款`, `黃金 名錶`, `3C 精品`, `保密 快速`],
      colors: [Rt, Jt],
      style: [`box`],
      hours: `09:00-21:00`,
    },
    jewelry: {
      trade: `jewelry`,
      category: `銀樓`,
      weight: 1,
      interior: `phone`,
      sub: `金飾 鑽石`,
      names: [`金龍銀樓`, `寶城銀樓`, `金興銀樓`],
      menu: [`黃金 買賣`, `金飾 訂做`, `鑽石 對戒`, `彌月金飾`],
      colors: [Rt, Jt, Lt],
      style: [`box`, `wood`],
      hours: `10:00-21:00`,
    },
    "tea-leaf": {
      trade: `tea-leaf`,
      category: `茶行`,
      weight: 1,
      interior: `oldshop`,
      sub: `烏龍 包種 高山茶`,
      names: [`萬華老茶行`, `林茂泰茶行`, `有紀名茶`, `鋒圃茶莊`],
      menu: [`凍頂烏龍`, `文山包種`, `東方美人`, `高山茶`],
      colors: [Xt, Jt, Ht],
      style: [`wood`],
      hours: `09:00-20:00`,
    },
    herbal: {
      trade: `herbal`,
      category: `青草`,
      weight: 1,
      interior: `oldshop`,
      sub: `青草茶 苦茶`,
      names: [`青草巷 青草行`, `保安堂中藥行`, `百年青草店`, `回春堂`],
      menu: [`青草茶 20`, `苦茶 30`, `中藥材`, `洛神花茶 30`],
      colors: [Ht, Xt, qt],
      style: [`box`, `wood`],
      hours: `08:00-21:00`,
    },
    "dried-goods": {
      trade: `dried-goods`,
      category: `南北貨`,
      weight: 1,
      interior: `oldshop`,
      sub: `乾貨 年貨`,
      names: [`乾源南北貨`, `聯華南北貨`, `永樂乾貨`, `金泰興`],
      menu: [`香菇 干貝`, `烏魚子`, `蝦米 魷魚`, `年貨大街`],
      colors: [Rt, Xt, zt],
      style: [`wood`, `box`],
      hours: `08:30-19:00`,
    },
    buddhist: {
      trade: `buddhist`,
      category: `佛具`,
      weight: 1,
      interior: `oldshop`,
      sub: `神像 香 金紙`,
      names: [`慈光佛具`, `福德佛具`, `妙音佛具店`, `天成金紙`],
      menu: [`神像 雕刻`, `佛珠 念珠`, `香 金紙`, `神桌 供品`],
      colors: [Rt, Jt, [16106496, 10361622, 10361622]],
      style: [`box`, `wood`],
      hours: `08:00-20:00`,
    },
    scooter: {
      trade: `scooter`,
      category: `機車行`,
      weight: 1,
      interior: `scooter`,
      sub: `維修 保養`,
      names: [`阿明機車行`, `光洋機車`, `三羊機車行`, `順風機車`],
      menu: [`機車維修`, `換機油 250`, `輪胎 電池`, `中古機車`],
      colors: [Bt, Lt, Ht, zt],
      style: [`box`],
      hours: `08:30-20:30`,
    },
    fashion: {
      trade: `fashion`,
      category: `服飾`,
      weight: 1,
      interior: `boutique`,
      sub: `FASHION`,
      names: [`潮流服飾`, `韓風女裝`, `古著倉庫`, `東京衣舖`, `STREET 17`],
      menu: [`新品上市`, `全館8折`, `買二送一`, `歡迎試穿`],
      colors: [rn, $t, [16052458, 1710618, 14695050], Qt],
      style: [`box`, `neon`, `white`],
      hours: `12:00-22:30`,
    },
    sneakers: {
      trade: `sneakers`,
      category: `球鞋`,
      weight: 1,
      interior: `boutique`,
      sub: `SNEAKERS`,
      names: [`球鞋專賣`, `鞋博士`, `街頭鞋舖`, `KICKS 西門`],
      menu: [`限量球鞋`, `新品到貨`, `會員9折`, `運動襪 買三送一`],
      colors: [rn, en, Lt],
      style: [`box`, `neon`],
      hours: `12:00-22:30`,
    },
    cosmetics: {
      trade: `cosmetics`,
      category: `藥妝`,
      weight: 1,
      interior: `pharmacy`,
      sub: `美妝 保養`,
      names: [`屈臣是`, `康是妹`, `日樂本舖`, `美妝天堂`],
      menu: [`美妝 保養品`, `面膜 買一送一`, `會員點數`, `藥師諮詢`],
      colors: [Ut, Qt, Bt],
      style: [`box`],
      hours: `10:00-23:00`,
    },
    tattoo: {
      trade: `tattoo`,
      category: `刺青`,
      weight: 1,
      interior: `salon`,
      sub: `TATTOO`,
      names: [`刺青工作室`, `黑墨刺青`, `龍紋刺青`, `INK 西門`],
      menu: [`刺青 設計`, `穿環`, `洗眉 補色`, `預約制`],
      colors: [$t, [1052688, 15790320, 13902618], tn],
      style: [`neon`, `box`],
      hours: `13:00-23:00`,
    },
    "game-arcade": {
      trade: `game-arcade`,
      category: `電子遊樂場`,
      weight: 1,
      interior: `arcade`,
      sub: `GAME CENTER`,
      names: [`歡樂熊樂園`, `萬岱遊樂場`, `歡樂城`],
      menu: [`夾娃娃`, `太鼓達人`, `賽車 射擊`, `代幣 10元`],
      colors: [en, $t, nn],
      style: [`neon`],
      hours: `10:00-24:00`,
    },
    wedding: {
      trade: `wedding`,
      category: `婚紗`,
      weight: 1,
      interior: `boutique`,
      sub: `WEDDING`,
      names: [`巴璃婚紗`, `香榭婚紗攝影`, `白宮婚紗`, `幸福婚紗`],
      menu: [`婚紗攝影`, `禮服出租`, `海外婚紗`, `新娘秘書`],
      colors: [
        [16513010, 12094026, 1710618],
        [1710618, 15259312, 15259312],
        Qt,
      ],
      style: [`white`, `box`],
      hours: `11:00-21:00`,
    },
    fruit: {
      trade: `fruit`,
      category: `水果`,
      weight: 1,
      interior: `grocery`,
      sub: `當季水果`,
      names: [`新鮮水果行`, `阿義水果`, `四季水果`],
      menu: [`芒果 一斤 80`, `芭樂 一斤 40`, `西瓜 切片`, `禮盒`],
      colors: [Ht, Wt, zt],
      style: [`box`],
      hours: `08:00-23:00`,
    },
    "pepper-bun": {
      trade: `pepper-bun`,
      category: `胡椒餅`,
      weight: 1,
      interior: `grill`,
      eatery: !0,
      sub: `炭烤 現做`,
      names: [`福州胡椒餅`, `炭烤胡椒餅`, `阿公胡椒餅`],
      menu: [`胡椒餅 60`, `蔥肉餅 50`, `一次限買10個`],
      colors: [Lt, zt],
      style: [`box`],
      hours: `15:00-24:00`,
    },
    hotel: {
      trade: `hotel`,
      category: `旅店`,
      weight: 1,
      interior: `office`,
      sub: `HOTEL`,
      names: [`天天大旅社`, `西門商旅`, `城市旅店`, `華麗大飯店`],
      menu: [`休息 3H 800`, `住宿 1880`, `商務套房`, `24H 櫃台`],
      colors: [Vt, Jt, nn],
      style: [`box`, `neon`],
      hours: `24H`,
    },
    massage: {
      trade: `massage`,
      category: `按摩`,
      weight: 1,
      interior: `salon`,
      sub: `腳底 指壓`,
      names: [`舒活腳底按摩`, `足福養生館`, `千手指壓`, `輕鬆按摩`],
      menu: [`腳底按摩 40分 600`, `全身指壓 60分 900`, `肩頸 30分 450`],
      colors: [Ht, tn, Zt],
      style: [`box`, `neon`],
      hours: `10:00-02:00`,
    },
    bank: {
      trade: `bank`,
      category: `銀行`,
      weight: 1,
      interior: `office`,
      sub: `BANK`,
      names: [`信義商業銀行`, `台北富民銀行`, `國泰安銀行`, `第一華銀行`],
      menu: [`ATM 24H`, `外幣兌換`, `房屋貸款`, `營業時間 9:00-15:30`],
      colors: [Ht, Vt, [16513262, 748346, 748346]],
      style: [`white`, `box`],
      hours: `09:00-15:30`,
    },
  },
  on = (e) => Object.entries(e).map(([e, t]) => ({ ...an[e], weight: t }));
(on({
  fashion: 4,
  sneakers: 3,
  "beef-noodle": 2,
  vermicelli: 2,
  lumei: 1.5,
  "fried-chicken": 1.5,
  cosmetics: 2,
  phone: 2,
  tattoo: 1.5,
  "game-arcade": 1,
  ramen: 1.5,
  hotpot: 1,
  "shaved-ice": 1,
  optician: 1,
  hotel: 1,
  coffee: 1,
  "braised-rice": 1,
}),
  on({
    buddhist: 3,
    herbal: 3,
    "tea-leaf": 2,
    "braised-rice": 2.5,
    vermicelli: 1.5,
    noodles: 2,
    clinic: 1.5,
    pawn: 1,
    scooter: 1.5,
    hardware: 1.5,
    massage: 1.5,
    "shaved-ice": 1,
    "dried-goods": 1,
    jewelry: 1,
    "soy-milk": 1,
    lumei: 1,
    fruit: 1,
  }),
  on({
    bento: 2.5,
    stationery: 2.5,
    "beef-noodle": 2,
    dumplings: 2,
    clinic: 2,
    coffee: 2,
    optician: 1.5,
    "soy-milk": 1.5,
    noodles: 1.5,
    phone: 1,
    bakery: 1,
    laundry: 1,
    bank: 1,
    "braised-rice": 1,
    realty: 1,
  }),
  on({
    izakaya: 3,
    coffee: 2.5,
    wedding: 2,
    ramen: 2,
    hotel: 1.5,
    massage: 1.5,
    bakery: 1.5,
    salon: 1.5,
    "beef-noodle": 1.5,
    hardware: 1.5,
    electrical: 1,
    clinic: 1,
    "braised-rice": 1,
    bank: 1,
    fashion: 1,
    dumplings: 1,
  }),
  on({
    computer: 2.5,
    phone: 2,
    electrical: 2,
    coffee: 2,
    clinic: 1.5,
    "pepper-bun": 1,
    bakery: 1.5,
    "braised-rice": 1.5,
    bento: 1.5,
    laundry: 1,
    realty: 1.5,
    salon: 1,
    noodles: 1,
    "soy-milk": 1,
    hardware: 1,
    bank: 1,
  }),
  on({
    coffee: 3,
    ramen: 2,
    hotpot: 2,
    fashion: 2,
    cosmetics: 2,
    realty: 2,
    bank: 2,
    phone: 1.5,
    bakery: 1.5,
    xiaolongbao: 1,
    salon: 1.5,
    clinic: 1,
    "beef-noodle": 1,
    optician: 1,
  }),
  on({
    xiaolongbao: 1.5,
    "shaved-ice": 2,
    coffee: 3,
    "beef-noodle": 2,
    stationery: 1.5,
    fashion: 2,
    cosmetics: 1.5,
    salon: 2,
    clinic: 1.5,
    dumplings: 1.5,
    bakery: 1.5,
    optician: 1,
    realty: 1,
    noodles: 1,
    "soy-milk": 1,
    ramen: 1,
  }),
  on({
    "fried-chicken": 2.5,
    "stinky-tofu": 2,
    fashion: 2.5,
    phone: 2,
    lumei: 1.5,
    "shaved-ice": 1.5,
    "beef-noodle": 1,
    bento: 1,
    "soy-milk": 1,
    sneakers: 1.5,
    optician: 1,
    scooter: 1,
    clinic: 1,
    "game-arcade": 1,
    "pepper-bun": 1,
  }));
var sn = [-1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18],
  cn = [12, 13, 16, 19, 20, 21, 21.5, 22, 22.5, 23, 24, 25, 26];
function ln(e) {
  let t = e.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);
  if (!t) return 0;
  let n = +t[1] + t[2] / 60,
    r = +t[3] + t[4] / 60;
  if ((r <= n && (r += 24), r - n >= 23.5)) return 0;
  let i = 1;
  for (let e = 1; e < sn.length; e++) sn[e] <= n + 0.01 && (i = e);
  let a = cn.length - 1;
  for (let e = cn.length - 1; e >= 0; e--) cn[e] >= r - 0.01 && (a = e);
  return i * cn.length + a;
}
function un(e) {
  return e ? sn[Math.floor(e / cn.length)] : -1;
}
function dn(e) {
  return e ? cn[e % cn.length] : 1 / 0;
}
Ne.map((e) => ({
  id: e.zh,
  zh: e.zh,
  en: e.en,
  sub: e.tagline?.zh ?? `手搖飲`,
  bg: e.colors[0],
  fg: e.colors[1],
  accent: e.colors[2],
}));
var fn = (e) => `float[${e.length}](${e.map((e) => e.toFixed(2)).join(`, `)})`,
  pn = (e) => {
    let t = e / 255;
    return t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
  },
  mn = (e) =>
    `vec3(${pn((e >> 16) & 255).toFixed(4)}, ${pn((e >> 8) & 255).toFixed(4)}, ${pn(e & 255).toFixed(4)})`;
function hn() {
  let e = [],
    t = [],
    n = [];
  for (let r = 0; r < 88; r++) {
    let i = It[r],
      a = i ? Nt[i] : null;
    (e.push(
      a
        ? `vec4(${a.floor.toFixed(1)}, ${a.ceil.toFixed(1)}, ${a.counter.toFixed(1)}, ${a.people.toFixed(2)})`
        : `vec4(-1.0)`,
    ),
      t.push(
        a
          ? `vec4(${a.shelves.toFixed(1)}, ${a.depth[0].toFixed(2)}, ${a.depth[1].toFixed(2)}, ${a.warm.toFixed(2)})`
          : `vec4(0.0)`,
      ),
      n.push(
        a
          ? `vec4(${mn(a.counterCol)}, ${a.staff ? `1.0` : `0.0`})`
          : `vec4(0.0)`,
      ));
  }
  let r = Pt.flatMap(([e, t]) => [mn(e), mn(t)]),
    i = kt.x1 - kt.x0,
    a = kt.y1 - kt.y0;
  return `
#define B_NT 88
const vec4 B_RA[B_NT] = vec4[B_NT](${e.join(`, `)});
const vec4 B_RB[B_NT] = vec4[B_NT](${t.join(`, `)});
const vec4 B_RC[B_NT] = vec4[B_NT](${n.join(`, `)});
const vec3 B_FLOORC[${r.length}] = vec3[${r.length}](${r.join(`, `)});
const vec3 B_SHIRT[${Ft.length}] = vec3[${Ft.length}](${Ft.map(mn).join(`, `)});
const float B_PAD = 3.0 / 256.0;
const float B_SPAN = 1.0 - 2.0 * B_PAD;
vec2 bWallUv(vec2 tOrg, vec2 bw) {
  vec2 lt = vec2(${kt.x0.toFixed(1)} + clamp(bw.x, 0.0, 1.0) * ${i.toFixed(1)}, ${kt.y1.toFixed(1)} - clamp(bw.y, 0.0, 1.0) * ${a.toFixed(1)}) / 256.0;
  return (tOrg + vec2(B_PAD) + lt * B_SPAN) * vec2(1.0 / BLD_COLS, 1.0 / BLD_ROWS);
}
vec3 bWall(vec2 tOrg, vec2 bw, vec2 g1, vec2 g2) { return textureGrad(uAtlas, bWallUv(tOrg, bw), g1, g2).rgb; }
float bSdBox(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
/** a standing person (plane parallel to the glass, zp metres deep, xp across the cell): blends into col, may take t */
void bPerson(vec3 p, vec3 d, float kU, float mU, float mV, float xp, float zp, float s, vec3 shirt, float sd, vec3 lightC, float fpx, inout float t, inout vec3 col) {
  float tp = zp * kU / d.z;
  if (tp >= t) return;
  vec3 q = p + d * tp;
  vec2 l = vec2((q.x - xp) * mU, q.y * mV) / s;
  float head = length(vec2(l.x * 1.1, l.y - 1.56)) - 0.105;
  float torso = bSdBox(l - vec2(0.0, 1.18), vec2(0.15, 0.23)) - 0.055;
  float legs = bSdBox(vec2(abs(l.x) - 0.075, l.y - 0.47), vec2(0.062, 0.47));
  float dd = min(head, min(torso, legs));
  float fp = fpx * (1.0 + tp) / s;
  float cov = 1.0 - smoothstep(-fp, fp, dd);
  if (cov <= 0.001) return;
  vec3 skin = vec3(0.5, 0.33, 0.23), hair = vec3(0.016, 0.014, 0.012);
  vec3 pants = mix(vec3(0.03, 0.035, 0.05), vec3(0.28, 0.24, 0.18), step(0.7, fract(sd * 7.7)));
  float faceAway = step(0.62, fract(sd * 3.1));
  vec3 pc = head < 0.0 ? mix(skin, hair, clamp(step(1.585, l.y) + faceAway, 0.0, 1.0)) : (torso < 0.01 ? shirt : pants);
  // lit from the ceiling: brighter shoulders, a soft rim on the silhouette edge
  pc = (pc + 0.02) * lightC * (0.5 + 0.6 * smoothstep(0.1, 1.7, l.y)) * (1.0 + 0.35 * smoothstep(-2.0 * fp, 0.0, dd));
  col = mix(col, pc, cov);
  if (cov > 0.5) t = tp;
}
/**
 * Interior mapping: the view ray enters the storefront glass at (fr, 0) and travels through a box room (cell width ×
 * cell height × depth). Cell size in metres comes from the screen-space derivatives of the flat quad (udx/udy uv,
 * pdx/pdy world position), so wide shopfronts, narrow bays and tall ground floors all get correct perspective.
 */
vec3 bRoom(int ti, vec2 fr, vec2 tOrg, vec2 udx, vec2 udy, vec2 gdx, vec2 gdy, vec3 pdx, vec3 pdy, float uh) {
  vec4 A = B_RA[ti], Bq = B_RB[ti], Cq = B_RC[ti];
  vec3 N = normalize(vWN);
  vec3 Tt = vec3(N.z, 0.0, -N.x);
  vec3 V = vCRel;
  float sx = dot(pdx, Tt), sy = dot(pdy, Tt);
  float kUs = (udx.x * sx + udy.x * sy) / max(sx * sx + sy * sy, 1e-12);
  float kVs = (udx.y * pdx.y + udy.y * pdy.y) / max(pdx.y * pdx.y + pdy.y * pdy.y, 1e-12);
  float kU = clamp(abs(kUs), 0.05, 3.0), kV = clamp(abs(kVs), 0.05, 3.0);
  vec3 d = vec3(dot(V, Tt) * (kUs < 0.0 ? -kU : kU), V.y * (kVs < 0.0 ? -kV : kV), -dot(V, N) * kU);
  if (d.z < 1e-4) return vec3(0.0);
  if (abs(d.x) < 1e-5) d.x = 1e-5;
  if (abs(d.y) < 1e-5) d.y = 1e-5;
  float mU = 1.0 / kU, mV = 1.0 / kV;
  vec3 p = vec3(fr, 0.0);
  float r1 = fract(uh * 17.13), r2 = fract(uh * 61.7 + 0.21), r3 = fract(uh * 137.9 + 0.57), r4 = fract(uh * 311.3 + 0.83), r5 = fract(uh * 733.1 + 0.37);
  float Dm = mix(Bq.y, Bq.z, r1);
  vec3 tb = (vec3(step(0.0, d.x), step(0.0, d.y), Dm * kU) - p) / d;
  float t = min(tb.x, min(tb.y, tb.z));
  vec3 h = p + d * t;
  float hz = h.z * mU;
  // (no mirroring: back walls carry menus and signs) — per-shop crop of the back wall instead
  float mir = 0.0;
  float crop = 0.16 * r2;
  // texture footprint grows with the distance behind the glass; clamp the mip so tiles never bleed
  float texN = float(textureSize(uAtlas, 0).x);
  vec2 g1 = gdx * (1.0 + t), g2 = gdy * (1.0 + t);
  float gg = max(dot(g1, g1), dot(g2, g2)) * texN * texN;
  float lk = exp2(min(0.0, 4.0 - 0.5 * log2(max(gg, 1e-8))));
  g1 *= lk;
  g2 *= lk;
  float ceilT = A.y;
  vec3 lightC = mix(vec3(0.9, 0.96, 1.0), vec3(1.0, 0.84, 0.64), clamp(Bq.w + (r5 - 0.5) * 0.35, 0.0, 1.0));
  // some tube-lit shops have LED panels instead, some panel-lit ones tubes
  if (ceilT < 0.5 && r3 > 0.7) ceilT = 4.0; else if (ceilT > 3.5 && r3 > 0.75) ceilT = 0.0;
  if (abs(ceilT - 3.0) < 0.5) lightC = vec3(1.0, 0.72, 0.95);
  float fpx = length(pdx) * 1.2;
  vec3 col;
  if (t == tb.z) {
    col = bWall(tOrg, vec2(crop * r4 + h.x * (1.0 - crop), h.y), g1 * (1.0 - crop), g2 * (1.0 - crop));
  } else if (t == tb.x) {
    // side wall: the back wall's edge strip repeats along the depth (shelving), or its plain wall colour
    float su = fract(hz / 1.35 + r3) * 0.2;
    float ex = d.x > 0.0 ? 1.0 - su : su;
    float lodS = min(4.0 + log2(texN / 2048.0), 0.5 * log2(max(max(dot(gdx, gdx), dot(gdy, gdy)) * texN * texN, 1e-8)) + log2(1.0 + t) + 0.6);
    vec3 shelf = textureLod(uAtlas, bWallUv(tOrg, vec2(mix(ex, 1.0 - ex, mir), h.y)), lodS).rgb;
    // plain side wall: the back wall's own upper-wall colour above a wainscot sampled from its bottom edge
    float lbS = 2.6 + log2(texN / 2048.0);
    vec3 plain = mix(textureLod(uAtlas, bWallUv(tOrg, vec2(0.05, 0.1)), lbS).rgb, textureLod(uAtlas, bWallUv(tOrg, vec2(0.05, 0.86)), lbS).rgb, smoothstep(1.0, 1.1, h.y * mV));
    // shelving reaches ~2.4 m; above it the side wall is plain (no repeated posters / header strips)
    col = mix(plain, shelf, Bq.x * (1.0 - smoothstep(2.3, 2.45, h.y * mV))) * 0.74;
    col *= 0.72 + 0.28 * smoothstep(0.0, 0.8, Dm - hz);
  } else if (d.y < 0.0) {
    // floor tiles / planks, darker along the walls
    int fi = int(A.x + 0.5) * 2;
    vec3 fa = B_FLOORC[fi], fb = B_FLOORC[fi + 1];
    vec2 fm = vec2(h.x * mU, hz);
    bool wood = abs(A.x - 2.0) < 0.5;
    vec2 tsz = wood ? vec2(1.2, 0.16) : vec2(0.6);
    float row = floor(fm.y / tsz.y);
    vec2 tc = vec2(floor(fm.x / tsz.x + (wood ? row * 0.37 : 0.0)), row);
    float chk = wood ? fract(sin(dot(tc, vec2(12.9898, 78.233))) * 43758.5453) : mod(tc.x + tc.y, 2.0);
    float aa = 1.0 - smoothstep(0.08, 0.35, fpx * (1.0 + t) * 3.0 / tsz.y);
    vec2 gf = abs(fract(fm / tsz + vec2(wood ? row * 0.37 : 0.0, 0.0)) - 0.5);
    float grout = smoothstep(0.46, 0.5, max(gf.x, gf.y)) * aa;
    col = mix((fa + fb) * 0.5, mix(fa, fb, chk), aa) * (1.0 - 0.3 * grout);
    float wd = min(h.x, 1.0 - h.x) * mU;
    col *= (0.66 + 0.34 * smoothstep(0.0, 0.9, wd)) * (0.72 + 0.28 * smoothstep(0.0, 0.9, Dm - hz)) * 0.9;
  } else {
    // ceiling: fluorescent tubes / LED panels / downlights / old warm tubes / dark lounge with an LED cove
    float xm = h.x * mU;
    col = ceilT > 2.5 && ceilT < 3.5 ? vec3(0.012, 0.01, 0.014) : (ceilT > 1.5 && ceilT < 2.5 ? vec3(0.36, 0.32, 0.26) : vec3(0.56, 0.56, 0.54));
    float lamp = 0.0;
    if (ceilT < 0.5 || ceilT > 3.5) {
      float lanes = ceilT > 3.5 ? 1.4 : 1.7;
      float lane = abs(fract(xm / lanes + 0.5 * r4) - 0.5) * lanes;
      float seg = step(fract(hz / 1.8 + r5), 0.72);
      float w = ceilT > 3.5 ? 0.14 : 0.05;
      lamp = (1.0 - smoothstep(w, w + 0.04, lane)) * seg;
      col += 0.14 * (1.0 - smoothstep(w, w + 0.6, lane));
    } else if (ceilT < 1.5) {
      vec2 c = (fract(vec2(xm, hz) / 1.3 + vec2(r4, r5)) - 0.5) * 1.3;
      float rr = length(c);
      lamp = 1.0 - smoothstep(0.07, 0.1, rr);
      col += 0.22 * (1.0 - smoothstep(0.1, 0.5, rr));
    } else if (ceilT < 2.5) {
      float lane = abs(fract(xm / 2.4 + 0.5) - 0.5) * 2.4;
      float seg = step(fract(hz / 2.8 + r5), 0.45);
      lamp = (1.0 - smoothstep(0.045, 0.08, lane)) * seg;
    } else {
      float e = min(h.x, 1.0 - h.x) * mU;
      col += vec3(0.5, 0.06, 0.4) * (1.0 - smoothstep(0.0, 0.3, e)) + vec3(0.05, 0.3, 0.45) * (1.0 - smoothstep(0.0, 0.3, Dm - hz));
    }
    col = mix(col, vec3(1.2), lamp);
  }
  col *= lightC;
  // ---- mid-ground: counter / display cases / gondolas, clerk, shoppers
  float ct = A.z, cx0 = 0.0, cx1 = 0.0, zc = 0.0;
  if (ct > 0.5) {
    float hc = 1.0;
    if (ct < 1.5) { float sd = step(0.5, r3); cx0 = mix(0.06, 0.56, sd); cx1 = cx0 + 0.38; zc = mix(1.3, 2.2, r4); }
    else if (ct < 2.5) { cx0 = 0.03; cx1 = 0.97; zc = mix(0.7, 1.05, r4); hc = 1.02; }
    else if (ct < 3.5) { cx0 = 0.07; cx1 = 0.93; zc = mix(1.1, 1.8, r4); hc = 0.95; }
    else if (ct < 4.5) { cx0 = 0.04; cx1 = 0.96; zc = max(1.4, Dm - 1.3); hc = 1.05; }
    else { cx0 = 0.1; cx1 = 0.9; zc = mix(2.2, 3.4, r4); hc = 1.45; }
    zc = min(zc, Dm - 0.5);
    float tcz = zc * kU / d.z;
    if (tcz < t) {
      vec3 q = p + d * tcz;
      float qy = q.y * mV;
      bool gap = (ct > 2.5 && ct < 3.5 && abs(q.x - 0.5) < 0.035) || (ct > 4.5 && abs(q.x - 0.5) < 0.09);
      if (q.x > cx0 && q.x < cx1 && qy < hc && !gap) {
        t = tcz;
        hz = zc;
        vec3 cc = Cq.rgb;
        if (ct > 4.5) cc = bWall(tOrg, vec2(fract(q.x * 1.3 + r2), 0.05 + qy / hc * 0.28), g1, g2);
        else if (ct > 2.5 && ct < 3.5) {
          float inside = step(0.32, qy) * step(qy, hc - 0.07);
          vec3 goods = bWall(tOrg, vec2(fract(q.x * 2.1 + r2), 0.42 + (qy - 0.32) * 0.3), g1, g2);
          cc = mix(cc * 0.55, mix(vec3(0.95), goods, 0.55) * 1.1, inside);
        }
        col = cc * lightC * (0.6 + 0.4 * smoothstep(0.0, hc, qy));
        col = mix(col, lightC * 0.95, step(hc - 0.03, qy) * 0.55);
      } else if (d.y < 0.0 && p.y * mV > hc) {
        float tt = (hc * kV - p.y) / d.y;
        if (tt < t) {
          vec3 qt = p + d * tt;
          float zz = qt.z * mU;
          if (qt.x > cx0 && qt.x < cx1 && zz > zc && zz < zc + 0.6) {
            t = tt;
            hz = zz;
            col = mix(Cq.rgb, vec3(0.75), 0.4) * lightC;
          }
        }
      }
    }
    if (Cq.w > 0.5) bPerson(p, d, kU, mU, mV, mix(cx0 + 0.1, cx1 - 0.1, r5), min(zc + 0.55, Dm - 0.2), 0.97 + 0.08 * r3, B_SHIRT[int(r2 * 7.99)], r4, lightC, fpx, t, col);
  }
  for (int i = 0; i < 2; i++) {
    float fi = float(i);
    float pr = fract(uh * (23.7 + fi * 41.3) + fi * 0.5);
    if (pr * 2.0 >= A.w) continue;
    float zp = mix(1.0, max(1.2, Dm - 1.0), fract(pr * 7.13 + fi * 0.37));
    if (ct > 0.5 && abs(zp - zc) < 0.45) zp = max(0.8, zc - 0.5);
    float xp = mix(0.15, 0.85, fract(pr * 13.37 + fi * 0.61));
    bPerson(p, d, kU, mU, mV, xp, zp, 0.92 + 0.14 * fract(pr * 5.3), B_SHIRT[int(fract(pr * 3.7) * 7.99)], pr, lightC, fpx, t, col);
  }
  col *= 1.0 - 0.35 * smoothstep(2.0, 12.0, hz);
  return col * vTint;
}
`;
}
var gn = `
const float B_OPH[${sn.length}] = ${fn(sn)};
const float B_CLH[${cn.length}] = ${fn(cn)};
float bShopOpen(float code, float hour) {
  float oi = floor(code / ${cn.length.toFixed(1)} + 0.001);
  float ci = code - oi * ${cn.length.toFixed(1)};
  float oh = B_OPH[int(clamp(oi, 0.0, ${(sn.length - 1).toFixed(1)}))];
  float ch = B_CLH[int(clamp(ci, 0.0, ${(cn.length - 1).toFixed(1)}))];
  float h = hour < 5.0 ? hour + 24.0 : hour;
  return oh < 0.0 ? 1.0 : step(oh, h) * step(h, ch);
}
`,
  _n = {
    RES: 0,
    SHOP: 1,
    CEIL: 2,
    OFFICE: 3,
    NONE: 4,
    LIT: 5,
    SIGN: 6,
    SCREEN: 7,
    TICKER: 8,
  },
  vn = {
    uLitRes: { value: 0.55 },
    uLitOff: { value: 0.25 },
    uFakeRefl: { value: 1 },
    uSkyCol: { value: new W(12109526) },
    uRooms: { value: 1 },
    uHour: { value: 12 },
  },
  yn = [
    [0, 0.3],
    [2, 0.12],
    [5, 0.08],
    [6.5, 0.3],
    [8, 0.16],
    [17, 0.2],
    [19, 0.5],
    [21, 0.55],
    [22, 0.5],
    [24, 0.3],
  ],
  bn = [
    [0, 0.06],
    [2, 0.035],
    [5, 0.04],
    [7, 0.2],
    [9, 0.6],
    [17, 0.6],
    [19, 0.4],
    [21, 0.25],
    [23, 0.08],
    [24, 0.06],
  ];
function xn(e, t) {
  for (let n = 1; n < e.length; n++)
    if (t <= e[n][0])
      return (
        e[n - 1][1] +
        ((t - e[n - 1][0]) / (e[n][0] - e[n - 1][0])) * (e[n][1] - e[n - 1][1])
      );
  return e[e.length - 1][1];
}
function Sn(e) {
  ((vn.uLitRes.value = xn(yn, e)),
    (vn.uLitOff.value = xn(bn, e)),
    (vn.uHour.value = e));
}
var Cn = `
attribute vec3 aTint;
attribute vec4 aInfo;
varying vec3 vTint;
varying vec4 vInfo;
varying vec2 vTUv;
varying vec3 vWPos;
varying float vWNy;
varying vec3 vWN;
varying vec3 vCRel;
`,
  wn = `
uniform sampler2D uAtlas;
#ifndef BLD_CUTOUT
uniform sampler2D uSignTex;
uniform sampler2D uAdTex;
uniform sampler2D uTickTex;
#endif
#ifdef BLD_LM
uniform sampler2D uLm;
uniform vec4 uLmXf;
#endif
uniform float uHour;
uniform float uRooms;
${gn}
uniform float uLitRes;
uniform float uLitOff;
uniform float uWet;
uniform float uFakeRefl;
uniform vec3 uSkyCol;
varying vec3 vTint;
varying vec4 vInfo;
varying vec2 vTUv;
varying vec3 vWPos;
varying float vWNy;
varying vec3 vWN;
varying vec3 vCRel;
float bHash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float bHash1(float n) { return fract(sin(n) * 43758.5453); }
/** integer hash of integer-valued coordinates (no sin(): its precision on large arguments shows up as patterns) */
float bIHash(vec3 p) {
  uvec3 q = uvec3(ivec3(floor(p + 0.5)) + 65536);
  uint h = q.x * 0x8da6b343u ^ q.y * 0xd8163841u ^ q.z * 0xcb1ab31fu;
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  return float(h >> 8u) / 16777216.0;
}
/** smooth value noise (patchy weathering in world space) */
float bNoise(vec2 p, float s) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = bHash(vec3(i, s)), b = bHash(vec3(i + vec2(1.0, 0.0), s));
  float c = bHash(vec3(i + vec2(0.0, 1.0), s)), d = bHash(vec3(i + vec2(1.0, 1.0), s));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
${hn()}
`,
  Tn = `
  vec2 bUdx = dFdx(vTUv), bUdy = dFdy(vTUv);
  // camera-relative position: small magnitudes → exact derivatives (world coords jitter the room by ~2% per pixel quad)
  vec3 bPdx = dFdx(vCRel), bPdy = dFdy(vCRel);
  vec2 cellId = floor(vTUv);
  vec2 fr = vTUv - cellId;
  float variants = mod(vInfo.y, 16.0);
  float bMode = floor(vInfo.y / 16.0 + 0.01);
  float seed = vInfo.z;
  float tile = vInfo.x;
  vec4 tex = vec4(1.0);
  float glass = 0.0;
  float bRoomOn = 0.0;
  float bShopM = 0.0;
  vec3 albedo = vec3(1.0);
  // emission of the merged sign / LED-screen / ticker layers
  vec3 bSpecE = vec3(0.0);
#ifndef BLD_CUTOUT
  if (bMode > 5.5) {
    if (bMode < 6.5) {
      // shop signs, lanterns, crown strips, aviation lights: sign atlas, flicker per sign (aInfo.x), level aInfo.w
      tex = textureGrad(uSignTex, vTUv, bUdx, bUdy);
      albedo = tex.rgb * vTint;
      float sd = vInfo.z, fm = vInfo.x;
      float neon = 1.0 - 0.85 * step(0.965, bHash1(floor(uTime * 14.0) + sd * 7.13));
      float blink = step(0.45, fract(uTime * 0.55 + sd * 0.037));
      float chase = 0.55 + 0.45 * sin(uTime * 5.0 - vTUv.y * 90.0 + sd);
      float fl = fm < 0.5 ? 1.0 : fm < 1.5 ? neon : fm < 2.5 ? blink : chase;
      bSpecE = tex.rgb * 1.35 * fl * (vInfo.w / 128.0) * vTint;
    } else if (bMode < 7.5) {
      // LED screen: cycles through the 2 × 4 ad frames (7 s each, quick fade), scanlines
      float cyc = uTime / 7.0 + vInfo.z * 0.37;
      float fi = mod(floor(cyc), 8.0);
      vec2 org = vec2(mod(fi, 2.0), 3.0 - floor(fi / 2.0));
      vec2 sk = vec2(0.5, 0.25);
      float ph = fract(cyc);
      float fade = smoothstep(0.0, 0.05, ph) * smoothstep(1.0, 0.96, ph);
      vec3 sc = textureGrad(uAdTex, (org + clamp(vTUv, 0.0, 1.0)) * sk, bUdx * sk, bUdy * sk).rgb;
      albedo = vec3(0.02);
      bSpecE = sc * 1.25 * (0.15 + 0.85 * fade) * (0.9 + 0.1 * sin(gl_FragCoord.y * 1.7));
    } else {
      // red dot-matrix ticker (跑馬燈): the strip scrolls
      vec2 tu = vec2(vTUv.x * 0.25 + uTime * 0.03 + vInfo.z / 255.0, vTUv.y);
      vec3 tc = textureGrad(uTickTex, tu, bUdx * vec2(0.25, 1.0), bUdy * vec2(0.25, 1.0)).rgb;
      albedo = vec3(0.02);
      bSpecE = tc * 1.6;
    }
  } else
#endif
  {
  float h1 = bHash(vec3(cellId, seed));
  tile = vInfo.x + floor(h1 * variants);
  // shop faces carry their opening hours (aInfo.z): outside them the roll-up shutter comes down, glow off
  float bClosed = step(0.5, bMode) * (1.0 - step(1.5, bMode)) * (1.0 - bShopOpen(seed, uHour));
  // (a closed shop never shows the 出租 for-rent shutter variant)
  tile = mix(tile, 24.0, bClosed);
  bMode = mix(bMode, 4.0, bClosed);
  vec2 tOrg = vec2(mod(tile, BLD_COLS), floor(tile / BLD_COLS + 0.001));
  const float PAD = 3.0 / 256.0;
  const float SPAN = 1.0 - 2.0 * PAD;
  const vec2 TSC = vec2(1.0 / BLD_COLS, 1.0 / BLD_ROWS);
  vec2 auv = (tOrg + vec2(PAD + fr.x * SPAN, PAD + (1.0 - fr.y) * SPAN)) * TSC;
  vec2 gdx = bUdx * vec2(SPAN, -SPAN) * TSC;
  vec2 gdy = bUdy * vec2(SPAN, -SPAN) * TSC;
  // clamp the mip level so tiles never bleed into their atlas neighbours
  float texN = float(textureSize(uAtlas, 0).x);
  float g2 = max(dot(gdx, gdx), dot(gdy, gdy)) * texN * texN;
  float lodK = exp2(min(0.0, 4.5 - 0.5 * log2(max(g2, 1e-8))));
  tex = textureGrad(uAtlas, auv, gdx * lodK, gdy * lodK);
#ifdef BLD_CUTOUT
  if (tex.a < 0.5) discard;
#else
  glass = 1.0 - tex.a;
#endif
  // shop rooms behind the glass (interior mapping, roomArt.ts): aTint = the room's light / goods tint, frame untinted
#ifndef BLD_CUTOUT
  {
    int bti = int(tile + 0.5);
    if (uRooms > 0.5 && bMode > 0.5 && bMode < 1.5 && vInfo.w > 0.5 && bti >= 0 && bti < B_NT) {
      if (B_RA[bti].x > -0.5) {
        bRoomOn = 1.0;
        if (glass > 0.004) {
          float uh = bHash(vec3(floor(vTint.rg * 255.0 + 0.5) + cellId * vec2(3.17, 5.31), floor(vTint.b * 255.0 + 0.5) + seed * 0.37));
          vec3 rc = bRoom(bti, fr, tOrg, bUdx, bUdy, gdx * lodK, gdy * lodK, bPdx, bPdy, uh);
          tex.rgb = mix(tex.rgb, rc, glass);
        }
      }
    }
  }
#endif
  // homes: the window glass and its curtains are not painted in the wall colour
  float bIsRes = 1.0 - step(0.5, bMode);
  albedo = tex.rgb * mix(vTint, vec3(1.0), max(bRoomOn, glass * bIsRes * 0.85));
  {
    // every home has its own curtain / glass tone (the atlas paints one per window variant)
    float hc = bHash(vec3(cellId, seed + 21.3));
    vec3 jit = (0.84 + 0.28 * hc) * mix(vec3(1.03, 0.98, 0.91), vec3(0.94, 0.98, 1.04), fract(hc * 7.13));
    albedo *= mix(vec3(1.0), jit, glass * bIsRes);
  }
  bShopM = step(0.5, bMode) * (1.0 - step(2.5, bMode));
  // interiors seen through shop glass are dimmer than the sunlit street
  albedo *= 1.0 - (0.42 + 0.3 * bRoomOn) * glass * step(0.5, bMode) * (1.0 - step(1.5, bMode));
  // weathering in world space (so repeated tiles never read as a pattern): patchy discolouration, rain streaks
  // washing down from every floor slab / sill, splash-back grime near the pavement; roofs get blotches
  // (skipped on the low-quality Lambert variant: the painted atlas grime has to do on phones)
#ifndef BLD_LOW
  {
    float along = vWPos.x + vWPos.z;
    float vn = bNoise(vec2(along * 0.13, vWPos.y * 0.11), seed * 0.37);
    float isWall = (1.0 - glass) * (1.0 - step(0.5, abs(vWNy))) * (1.0 - bShopM);
    float colId = floor(along * 1.45);
    float sk = step(0.6, bHash(vec3(colId, 7.3, seed))) * (0.45 + 0.55 * bHash(vec3(colId, 2.1, seed)));
    float streak = sk * smoothstep(0.3, 1.0, fr.y) * (0.55 + 0.45 * vn) * step(3.0, vWPos.y);
    float splash = 1.0 - smoothstep(0.2, 2.2, vWPos.y);
    float dirt = (vn - 0.45) * 0.2 + streak * 0.16 + splash * (0.1 + 0.12 * vn);
    albedo *= 1.0 - isWall * dirt;
    float isRoof = step(0.5, vWNy);
    albedo *= 1.0 - isRoof * (bNoise(vWPos.xz * 0.21, seed) - 0.4) * 0.22;
  }
#endif
  // cheap baked AO: darker near the ground, slightly lighter up high
  float bAo = mix(0.78, 1.0, smoothstep(0.0, 3.2, vWPos.y)) * mix(1.0, 1.06, smoothstep(20.0, 90.0, vWPos.y));
  albedo *= bAo * (1.0 - 0.3 * uWet * (1.0 - glass));
  }
  diffuseColor.rgb *= albedo;
  float reflK = glass * (bMode < 0.5 || abs(bMode - 3.0) < 0.5 ? 1.0 : 0.45);
`,
  En = `
  roughnessFactor = mix(roughnessFactor, 0.1, reflK);
  roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.55, uWet);
`,
  Dn = `
  metalnessFactor = mix(metalnessFactor, abs(bMode - 3.0) < 0.5 ? 0.14 : 0.04, reflK);
`,
  On = `
  float bLitW = 0.0;
  if (bMode < 5.5) {
    float isRes = 1.0 - step(0.5, bMode);
    float isShop = step(0.5, bMode) * (1.0 - step(1.5, bMode));
    float isCeil = step(1.5, bMode) * (1.0 - step(2.5, bMode));
    float isOff = step(2.5, bMode) * (1.0 - step(3.5, bMode));
    float tb = vInfo.x;
    float panes = (tb > 8.5 && tb < 11.5) || (tb > 15.5 && tb < 18.5) ? 2.0 : (tb > 13.5 && tb < 15.5) ? 4.0 : 1.0;
    vec2 win = vec2(cellId.x * panes + floor(fr.x * panes), cellId.y);
    float occ = vInfo.w / 128.0;
    float hW = bHash(vec3(win + 17.0, seed + 3.1));
    float hF = bHash(vec3(cellId.y, seed, 5.1));
    float h3 = bHash(vec3(win, seed + 7.7));
    float h4 = bHash(vec3(win + 3.0, seed + 11.0));
    // homes: floors differ a little (households)
    float pRes = uLitRes * occ * (0.65 + 0.7 * hF);
    // offices: tenants light whole zones — runs of 2–6 window columns on one floor, boundaries shifted per floor —
    // busy floors stay lit, and a lit zone has only a few dark panes (clustered office lights, not a per-pane scatter
    // that reads as camouflage from a distance). Integer hashes per floor / zone / pane.
    float fO = bIHash(vec3(cellId.y, seed, 5.0));
    float zW = 2.0 + floor(fO * 5.0);
    float zId = floor((win.x + floor(fract(fO * 13.1) * zW)) / zW);
    float hZ = bIHash(vec3(zId, cellId.y, seed * 8.0 + 3.0));
    float hP = bIHash(vec3(win, seed * 8.0 + 6.0));
    float busy = step(fO, uLitOff * 0.4);
    float zLit = max(busy, step(hZ, uLitOff * 0.7 * occ));
    bLitW = mix(step(hW, pRes), zLit * step(0.1, hP), isOff);
    // the room: brighter toward the ceiling, a ceiling-panel line, blinds half / fully drawn in some windows
    float dyW = abs(bUdx.y) + abs(bUdy.y);
    float yW = fr.y;
    float grad = mix(0.5, 1.2, smoothstep(0.12, 0.92, yW)) + 0.45 * smoothstep(0.84, 0.9, yW) * (1.0 - smoothstep(0.9, 0.95, yW)) * isOff;
    float hB = bHash(vec3(win, seed + 9.7));
    float bl = fract(yW * 24.0);
    float aa = clamp(1.0 - dyW * 24.0 * 1.5, 0.0, 1.0);
    float slats = mix(0.62, 0.3 + 0.7 * smoothstep(0.25, 0.5, bl), aa);
    float drop = mix(0.35, 1.0, fract(hB * 13.7));
    float blinds = mix(1.0, slats, step(0.72, hB) * step(1.0 - drop, yW));
    vec3 warm = mix(vec3(1.0, 0.62, 0.3), vec3(1.0, 0.84, 0.58), h3);
    vec3 wcol = h3 > 0.84 ? vec3(0.72, 0.86, 1.0) : warm;
    // TV flicker in a few lit rooms
    float tv = step(0.94, h3) * (0.65 + 0.35 * sin(uTime * 9.0 + seed + win.x * 3.0));
    wcol = mix(wcol, vec3(0.45, 0.6, 1.0) * tv, step(0.94, h3));
    float lum = dot(tex.rgb, vec3(0.3, 0.59, 0.11));
    vec3 winE = mix(wcol, wcol * tex.rgb * 2.2, 0.35) * mix(0.35, 1.0, lum) * (0.4 + 0.6 * h4) * grad * blinds * bLitW * glass;
    // offices: cool fluorescent or warm LED per tenant (busy floors: one company per floor), even ceiling light
    float hT = mix(hZ, fO, busy);
    vec3 offCol = mix(vec3(0.74, 0.87, 1.0), vec3(1.0, 0.86, 0.66), step(0.66, fract(hT * 7.31)));
    offCol = mix(offCol, vec3(0.95, 0.95, 0.92), step(0.86, fract(hT * 3.71)));
    // one brightness per floor / zone (a little per pane); dark zones keep a faint corridor / exit-sign glow
    float offK = (busy > 0.5 ? 0.5 + 0.2 * fract(fO * 5.7) : 0.38 + 0.3 * fract(hZ * 9.1)) * (0.92 + 0.16 * hP);
    vec3 offE = offCol * glass * (offK * grad * blinds * bLitW + 0.02 * (1.0 - bLitW) * step(0.6, fract(hZ * 5.3)));
    // lit shop interiors: bright but readable (bloom adds the glow)
    // aInfo.w = interior brightness (0..200; convenience stores brightest)
    // (capped below the bloom threshold: lit rooms, not light boxes)
    vec3 shopE = min(tex.rgb * glass * (0.34 + min(vInfo.w, 200.0) / 150.0), vec3(0.9));
    vec3 ceilE = vec3(1.0, 0.98, 0.9) * glass * 2.2;
    float isLit = step(4.5, bMode) * (1.0 - step(5.5, bMode));
    // arcades glow warm at night (spill from shops and ceiling tubes)
    vec3 spill = albedo * vec3(1.0, 0.9, 0.75) * (isLit * 0.38 + isCeil * 0.55);
    totalEmissiveRadiance += isRes * winE + isOff * offE + isShop * shopE + isCeil * ceilE + spill;
#ifdef BLD_LM
    if (vWPos.y < 10.0) {
      // street lamps / shop fronts light the lower storeys too: the streets module's light map, sampled on the
      // pavement 1.5 m in front of the wall, fading up the façade
      vec2 luv = (vWPos.xz + vWN.xz * 1.5 - uLmXf.xy) * uLmXf.zw;
      vec3 lmc = textureLod(uLm, luv, 0.0).rgb * 3.0;
      float fall = 1.0 - smoothstep(0.3, 10.0, vWPos.y);
      totalEmissiveRadiance += albedo * lmc * (fall * fall * 0.3) * (1.0 - 0.7 * glass);
    }
#endif
    // daytime bounce light under arcades (ceilings would otherwise be black)
    bShopDay = isShop * shopE * (0.14 + 0.3 * bRoomOn) + isCeil * (ceilE * 0.1 + albedo * 0.32) + isLit * albedo * 0.06;
    bLitW *= isRes;
  }
#ifndef BLD_CUTOUT
  else if (bMode < 6.5) {
    totalEmissiveRadiance += bSpecE;
    bShopDay += bSpecE * 0.04;
  } else bAlways += bSpecE;
#endif
  {
    // fallback sky reflection on glass (fresnel) when there is no scene.environment
    float fres = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 3.0);
    bShopDay += uSkyCol * reflK * (0.1 + 0.55 * fres) * uFakeRefl * (1.0 - 0.6 * bLitW);
  }
`;
function kn(e, t, n) {
  ((e.uniforms.uAtlas = { value: t }),
    n &&
      ((e.uniforms.uSignTex = { value: n.signs }),
      (e.uniforms.uAdTex = { value: n.ads }),
      (e.uniforms.uTickTex = { value: n.ticker }),
      n.lightMap &&
        ((e.uniforms.uLm = { value: n.lightMap.texture }),
        (e.uniforms.uLmXf = { value: n.lightMap.xf }))),
    (e.uniforms.uLitRes = vn.uLitRes),
    (e.uniforms.uLitOff = vn.uLitOff),
    (e.uniforms.uWet = q.uWet),
    (e.uniforms.uFakeRefl = vn.uFakeRefl),
    (e.uniforms.uSkyCol = vn.uSkyCol),
    (e.uniforms.uHour = vn.uHour),
    (e.uniforms.uRooms = vn.uRooms),
    (e.vertexShader = e.vertexShader
      .replace(`#include <common>`, `#include <common>\n${Cn}`)
      .replace(
        `#include <uv_vertex>`,
        `#include <uv_vertex>
  vTint = aTint; vInfo = aInfo; vTUv = uv; vWPos = position; vWNy = normal.y; vWN = normal; vCRel = position - cameraPosition;`,
      )),
    (e.fragmentShader = e.fragmentShader
      .replace(`#include <common>`, `#include <common>\n${wn}`)
      .replace(`#include <map_fragment>`, Tn)
      .replace(
        `#include <roughnessmap_fragment>`,
        `#include <roughnessmap_fragment>\n${En}`,
      )
      .replace(
        `#include <metalnessmap_fragment>`,
        `#include <metalnessmap_fragment>\n${Dn}`,
      )
      .replace(
        `#include <emissivemap_fragment>`,
        `vec3 bShopDay = vec3(0.0);\nvec3 bAlways = vec3(0.0);\n${On}\n#include <emissivemap_fragment>`,
      )
      .replace(
        `#include <aomap_fragment>`,
        `#include <aomap_fragment>
  totalEmissiveRadiance += bShopDay * (1.0 - uNight) + bAlways;`,
      )));
}
function An(e, t, n = !1, r = null) {
  let i = t ? 2 : 0,
    a = n
      ? new D({ color: 16777215, side: i, emissive: 0 })
      : new me({
          color: 16777215,
          roughness: 0.86,
          metalness: 0,
          envMapIntensity: 0.9,
          side: i,
          emissive: 0,
        });
  ((a.defines = { BLD_COLS: (8).toFixed(1), BLD_ROWS: (11).toFixed(1) }),
    t && (a.defines.BLD_CUTOUT = ``),
    n && (a.defines.BLD_LOW = ``),
    !t && r?.lightMap && (a.defines.BLD_LM = ``),
    (a.forceSinglePass = !0),
    (a.onBeforeCompile = (n) => kn(n, e, t ? null : r)));
  let o = (t ? `bld-facade-cut` : `bld-facade`) + (n ? `-l` : ``);
  ((a.name = o), (a.customProgramCacheKey = () => o), Le(a, 0));
  let s = a.customProgramCacheKey();
  return ((a.customProgramCacheKey = () => s), a);
}
var jn = 4,
  Mn = new ve(),
  Nn = class {
    name;
    scale;
    anisotropy;
    canvas = null;
    g = null;
    entries = new Map();
    order = [];
    rects = new Map();
    queue = [];
    slots = new Map();
    slotTick = 0;
    seed = 1;
    width;
    height = 0;
    texture = null;
    upTex = null;
    upY = 0;
    strip = null;
    stripTex = null;
    maxUploadMs = 0;
    placeholder;
    started = !1;
    ready = !1;
    paintMs = 0;
    maxStepMs = 0;
    listeners = [];
    releaseListeners = [];
    uploaded = !1;
    paints = 0;
    constructor(e, t = 1, n = 4) {
      ((this.name = e),
        (this.scale = t),
        (this.anisotropy = n),
        (this.width = Math.round(2048 * t)));
      let r = document.createElement(`canvas`);
      r.width = r.height = 4;
      let i = r.getContext(`2d`);
      ((i.fillStyle = `#fff`),
        i.fillRect(0, 0, 4, 4),
        (this.placeholder = this.makeTexture(r)),
        (this.placeholder.name = `interiors-${e}-placeholder`),
        this.add(`white`, 16, 16, (e, t, n) => {
          ((e.fillStyle = `#fff`), e.fillRect(-4, -4, t + 8, n + 8));
        }));
    }
    makeTexture(e) {
      let t = new Te(e);
      return (
        (t.colorSpace = c),
        (t.anisotropy = this.anisotropy),
        (t.generateMipmaps = !0),
        (t.minFilter = le),
        (t.magFilter = ge),
        t
      );
    }
    add(e, t, n, r) {
      if (this.entries.has(e) || this.started) return;
      let i = { name: e, w: t, h: n, sw: 0, sh: 0, paint: r, x: 0, y: 0 };
      (this.entries.set(e, i), this.order.push(i));
    }
    reserve(e, t, n, r) {
      if (this.slots.has(e) || this.started) return;
      let i = { w: t, h: n, names: [], ids: [], used: [] };
      for (let a = 0; a < r; a++) {
        let r = `${e}#${a}`;
        (i.names.push(r),
          i.ids.push(null),
          i.used.push(0),
          this.add(r, t, n, (e, t, n) => {
            ((e.fillStyle = `#d8d4cc`), e.fillRect(-4, -4, t + 8, n + 8));
          }));
      }
      this.slots.set(e, i);
    }
    onReady(e) {
      (this.listeners.push(e), this.live && this.texture && e(this.texture));
    }
    onRelease(e) {
      this.releaseListeners.push(e);
    }
    release() {
      if (this.started) {
        for (let e of this.releaseListeners)
          try {
            e(this.placeholder);
          } catch (e) {
            console.error(`[interiors] atlas release listener failed`, e);
          }
        (this.texture?.dispose(),
          this.upTex && this.upTex !== this.texture && this.upTex.dispose(),
          (this.texture = this.upTex = null),
          (this.upY = 0),
          this.freeStrip(),
          this.canvas && (this.canvas.width = this.canvas.height = 1),
          (this.canvas = null),
          (this.g = null),
          (this.queue = []),
          (this.started = this.ready = this.uploaded = !1));
        for (let e of this.slots.values()) (e.ids.fill(null), e.used.fill(0));
      }
    }
    begin() {
      if (this.started) return;
      this.started = !0;
      let e = performance.now(),
        t = this.scale,
        n = this.width;
      for (let e of this.order)
        ((e.sw = Math.max(2, Math.ceil(e.w * t))),
          (e.sh = Math.max(2, Math.ceil(e.h * t))));
      let r = [...this.order].sort((e, t) => t.sh - e.sh || t.sw - e.sw),
        i = 0,
        a = 0,
        o = 0,
        s = Math.round(4096 * t);
      for (let e of r) {
        let t = e.sw + 8,
          r = e.sh + 8;
        if ((i + t > n && ((i = 0), (a += o), (o = 0)), a + r > s)) {
          (console.warn(`[interiors] atlas '${this.name}' full at ${e.name}`),
            (e.x = 0),
            (e.y = 0));
          continue;
        }
        ((e.x = i + jn), (e.y = a + jn), (i += t), (o = Math.max(o, r)));
      }
      let c = Math.min(s, Math.ceil((a + o) / 64) * 64);
      this.height = c;
      let l = document.createElement(`canvas`);
      ((l.width = n),
        (l.height = c),
        (this.canvas = l),
        (this.g = l.getContext(`2d`)),
        (this.g.fillStyle = `#808080`),
        this.g.fillRect(0, 0, n, c));
      for (let e of this.order) {
        let t = (e.x + 0.5) / n,
          r = (e.x + e.sw - 0.5) / n,
          i = 1 - (e.y + 0.5) / c,
          a = 1 - (e.y + e.sh - 0.5) / c;
        this.rects.set(e.name, { u0: t, v0: a, u1: r, v1: i });
      }
      ((this.queue = [...this.order]), (this.paintMs += performance.now() - e));
    }
    paintEntry(e) {
      let t = this.g;
      this.seed = Pn(e.name);
      let n = () => (
          (this.seed = (this.seed * 1664525 + 1013904223) >>> 0),
          this.seed / 4294967296
        ),
        r = this.scale;
      (t.save(),
        t.translate(e.x, e.y),
        t.beginPath(),
        t.rect(-4, -4, e.sw + 8, e.sh + 8),
        t.clip(),
        r !== 1 && t.scale(e.sw / e.w, e.sh / e.h));
      try {
        e.paint(t, e.w, e.h, n);
      } catch (t) {
        console.error(`[interiors] atlas painter failed`, e.name, t);
      }
      t.restore();
    }
    step(e) {
      if (this.ready) return !0;
      this.started || this.begin();
      let t = performance.now();
      for (; this.queue.length;) {
        let n = this.queue.shift(),
          r = performance.now();
        this.paintEntry(n);
        let i = performance.now();
        if (
          (i - r > this.slowest.ms &&
            ((this.slowest.ms = i - r), (this.slowest.name = n.name)),
          i - t > e)
        )
          break;
      }
      let n = performance.now() - t;
      return (
        (this.paintMs += n),
        (this.maxStepMs = Math.max(this.maxStepMs, n)),
        this.queue.length || this.complete(),
        this.ready
      );
    }
    slowest = { name: ``, ms: 0 };
    finish() {
      if (this.ready) return;
      this.started || this.begin();
      let e = performance.now();
      for (; this.queue.length;) this.paintEntry(this.queue.shift());
      ((this.paintMs += performance.now() - e), this.complete());
    }
    complete() {
      !this.ready && this.canvas && ((this.ready = !0), this.paints++);
    }
    uploadStep(e, t = 256) {
      if (this.uploaded) return !0;
      if (!this.ready || !this.canvas) return !1;
      let n = performance.now(),
        r = this.width,
        i = this.height;
      try {
        if (this.upTex) {
          let n = Math.min(t, i - this.upY);
          this.strip ||
            ((this.strip = document.createElement(`canvas`)),
            (this.stripTex = new Te(this.strip)));
          let a = this.strip;
          (a.width !== r || a.height !== n) && ((a.width = r), (a.height = n));
          let o = a.getContext(`2d`);
          (o.clearRect(0, 0, r, n),
            o.drawImage(this.canvas, 0, this.upY, r, n, 0, 0, r, n));
          let s = this.upY + n >= i;
          ((this.upTex.generateMipmaps = s),
            Mn.set(0, i - this.upY - n),
            e.copyTextureToTexture(this.stripTex, this.upTex, null, Mn),
            (this.upY += n),
            s && this.goLive());
        } else {
          let t = new fe(null, r, i);
          ((t.colorSpace = c),
            (t.anisotropy = this.anisotropy),
            (t.generateMipmaps = !0),
            (t.minFilter = le),
            (t.magFilter = ge),
            (t.flipY = !0),
            (t.name = `interiors-${this.name}`),
            (t.source.dataReady = !1),
            (t.needsUpdate = !0),
            e.initTexture(t),
            (this.upTex = t),
            (this.upY = 0));
        }
      } catch (t) {
        (console.warn(
          `[interiors] atlas strip upload failed — uploading the page at once`,
          t,
        ),
          this.uploadWhole(e));
      }
      let a = performance.now() - n;
      return (a > this.maxUploadMs && (this.maxUploadMs = a), this.uploaded);
    }
    uploadWhole(e) {
      if (!this.canvas) return;
      this.upTex && this.upTex.dispose();
      let t = this.makeTexture(this.canvas);
      ((t.name = `interiors-${this.name}`), (t.needsUpdate = !0));
      try {
        e.initTexture(t);
      } catch (e) {
        console.warn(`[interiors] atlas upload failed`, e);
      }
      ((this.upTex = null), (this.texture = t), this.finishLive());
    }
    goLive() {
      let e = this.upTex;
      ((e.generateMipmaps = !0),
        (this.texture = e),
        (this.upTex = null),
        this.finishLive());
    }
    finishLive() {
      ((this.uploaded = !0),
        this.freeStrip(),
        this.canvas &&
          ((this.canvas.width = this.canvas.height = 1), (this.g = null)));
      for (let e of this.listeners)
        try {
          e(this.texture);
        } catch (e) {
          console.error(`[interiors] atlas ready listener failed`, e);
        }
    }
    freeStrip() {
      (this.strip && (this.strip.width = this.strip.height = 1),
        (this.strip = null),
        (this.stripTex = null));
    }
    upload(e) {
      let t = 0;
      for (; !this.uploadStep(e, 1024) && this.ready && t++ < 64;);
    }
    dyn(e, t, n, r) {
      let i = this.slots.get(e);
      if (!i || !this.texture || !r) return this.r(`white`);
      this.slotTick++;
      let a = i.ids.indexOf(t);
      if (a < 0) {
        a = 0;
        for (let e = 1; e < i.ids.length; e++) i.used[e] < i.used[a] && (a = e);
        let e = this.entries.get(i.names[a]),
          o = document.createElement(`canvas`);
        ((o.width = e.sw), (o.height = e.sh));
        let s = o.getContext(`2d`);
        this.seed = Pn(t);
        let c = () => (
          (this.seed = (this.seed * 1664525 + 1013904223) >>> 0),
          this.seed / 4294967296
        );
        (s.save(), this.scale !== 1 && s.scale(e.sw / e.w, e.sh / e.h));
        try {
          n(s, e.w, e.h, c);
        } catch (e) {
          console.error(`[interiors] dynamic painter failed`, t, e);
        }
        s.restore();
        try {
          let n = new Te(o);
          (r.copyTextureToTexture(
            n,
            this.texture,
            null,
            new ve(e.x, this.height - e.y - e.sh),
          ),
            n.dispose(),
            (i.ids[a] = t));
        } catch (e) {
          return (
            console.warn(`[interiors] dynamic slot copy failed`, e),
            this.r(`white`)
          );
        }
      }
      return ((i.used[a] = this.slotTick), this.r(i.names[a]));
    }
    get live() {
      return this.ready && this.uploaded;
    }
    has(e) {
      return this.entries.has(e);
    }
    r(e) {
      return (
        this.rects.get(e) ??
        this.rects.get(`white`) ?? { u0: 0, v0: 0, u1: 0.001, v1: 0.001 }
      );
    }
    sub(e, t, n, r, i) {
      let a = this.r(e);
      return {
        u0: a.u0 + (a.u1 - a.u0) * t,
        v0: a.v0 + (a.v1 - a.v0) * n,
        u1: a.u0 + (a.u1 - a.u0) * r,
        v1: a.v0 + (a.v1 - a.v0) * i,
      };
    }
    info() {
      return {
        name: this.name,
        scale: this.scale,
        w: this.width,
        h: this.height,
        regions: this.order.length,
        started: this.started,
        ready: this.ready,
        uploaded: this.uploaded,
        paints: this.paints,
        paintMs: +this.paintMs.toFixed(1),
        maxStepMs: +this.maxStepMs.toFixed(2),
        maxUploadMs: +this.maxUploadMs.toFixed(2),
        slowest: `${this.slowest.name} ${this.slowest.ms.toFixed(1)}`,
        canvasPx: this.canvas ? this.canvas.width * this.canvas.height : 0,
      };
    }
  };
function Pn(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return t >>> 0;
}
function Fn(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.quadraticCurveTo(t + r, n, t + r, n + a),
    e.lineTo(t + r, n + i - a),
    e.quadraticCurveTo(t + r, n + i, t + r - a, n + i),
    e.lineTo(t + a, n + i),
    e.quadraticCurveTo(t, n + i, t, n + i - a),
    e.lineTo(t, n + a),
    e.quadraticCurveTo(t, n, t + a, n),
    e.closePath());
}
function In(e, t = 1) {
  let n = new l({ name: `interior-room`, map: e, vertexColors: !0, fog: !1 });
  return (
    (n.userData = {
      uLight: { value: new W(t, t, t) },
      uFlicker: { value: 0 },
    }),
    (n.onBeforeCompile = (e) => {
      ((e.uniforms.uLight = n.userData.uLight),
        (e.uniforms.uFlicker = n.userData.uFlicker),
        (e.uniforms.uTime = q.uTime),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec3 vIWorld;`,
          )
          .replace(
            `#include <worldpos_vertex>`,
            `#include <worldpos_vertex>
vIWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform vec3 uLight;
uniform float uFlicker;
uniform float uTime;
varying vec3 vIWorld;`,
          )
          .replace(
            `#include <color_fragment>`,
            `#if defined( USE_COLOR_ALPHA )
          float em = vColor.a;
          // candle / lantern flicker on strongly emissive parts (uFlicker = amount)
          float fl = 1.0 + uFlicker * em * (0.10 * sin(uTime * 9.0 + vIWorld.x * 3.1 + vIWorld.z * 2.3) + 0.06 * sin(uTime * 23.0 + vIWorld.y * 7.0));
          diffuseColor.rgb *= vColor.rgb * mix(uLight, vec3(1.0), em) * fl;
        #elif defined( USE_COLOR )
          diffuseColor.rgb *= vColor.rgb * uLight;
        #endif`,
          )),
        (e.fragmentShader = e.fragmentShader.replace(
          `#include <opaque_fragment>`,
          `diffuseColor.a = opacity;
#include <opaque_fragment>`,
        )));
    }),
    (n.customProgramCacheKey = () => `interior-room-v2`),
    n
  );
}
function Ln() {
  return new me({
    name: `interior-glass`,
    vertexColors: !0,
    transparent: !0,
    depthWrite: !1,
    roughness: 0.05,
    metalness: 0.15,
    envMapIntensity: 1.1,
    side: 0,
  });
}
function Rn() {
  let e = new l({
    name: `interior-portal`,
    colorWrite: !1,
    depthWrite: !0,
    depthTest: !0,
    fog: !1,
  });
  return ((e.side = 0), e);
}
var zn = class {
    limit;
    release;
    entries = [];
    constructor(e, t) {
      if (
        ((this.limit = e),
        (this.release = t),
        !Number.isSafeInteger(e) || e < 0 || e > 64)
      )
        throw RangeError(`inactive resource cache limit must be in [0, 64]`);
    }
    get size() {
      return this.entries.length;
    }
    retain(e) {
      for (
        this.remove(e), this.entries.push(e);
        this.entries.length > this.limit;
      )
        this.release(this.entries.shift());
    }
    remove(e) {
      let t = this.entries.indexOf(e);
      t >= 0 && this.entries.splice(t, 1);
    }
    clear() {
      let e;
      for (let t of this.entries.splice(0))
        try {
          this.release(t);
        } catch (t) {
          e ??= t;
        }
      if (e !== void 0) throw e;
    }
  },
  Bn = Symbol(`interiors-wait`),
  Vn = { sync: !1 },
  Hn = { R: 250, S: 20 },
  Un = class {
    sites = [];
    active = [];
    get activeSites() {
      return this.active;
    }
    caps = new Map();
    timer = 0;
    cand = [];
    counts = new Map();
    jobs = [];
    budget = 2.5;
    lastBuildMs = 0;
    maxSliceMs = 0;
    warm = new Map();
    holds = new Map();
    keep = null;
    relT = 0;
    released = 0;
    paused = !1;
    add(e) {
      (this.sites.push(e), e.built && this.active.push(e));
    }
    cap(e, t) {
      this.caps.set(e, t);
    }
    hold(e, t) {
      let n = performance.now() + t;
      ((this.holds.get(e) ?? 0) < n && this.holds.set(e, n), (this.timer = 0));
    }
    unhold(e) {
      this.holds.delete(e);
    }
    held(e) {
      let t = this.holds.get(e);
      return t === void 0
        ? !1
        : t > performance.now() || (this.holds.delete(e), !1);
    }
    get holding() {
      return this.holds;
    }
    pin(e) {
      return (e.pinned?.() ?? !1) || this.held(e);
    }
    update(e, t, n, r) {
      if (!this.paused) {
        if (
          ((this.timer -= e),
          this.timer <= 0 && ((this.timer = 0.25), this.scan(t, n, r)),
          this.jobs.length)
        ) {
          let e = performance.now(),
            t = this.jobs[0];
          try {
            let n = this.step(t);
            for (
              ;
              !n.done && n.value !== Bn && performance.now() - e < this.budget;
            )
              n = this.step(t);
            n.done &&
              (this.setBuilt(t.s, !0),
              this.jobs.shift(),
              (this.lastBuildMs = t.ms + (performance.now() - e)));
          } catch (e) {
            (console.error(`[interiors] build failed`, t.s.id, e),
              this.jobs.shift());
          }
          let n = performance.now() - e;
          ((t.ms += n), n > this.maxSliceMs && (this.maxSliceMs = n));
        }
        for (let t = 0; t < this.active.length; t++) this.active[t].tick?.(e);
        if (((this.relT += e), this.relT >= 1 && this.warm.size)) {
          let e = this.relT;
          ((this.relT = 0), this.releaseFar(e, t, n, r));
        } else this.warm.size || (this.relT = 0);
      }
    }
    releaseFar(e, t, n, r) {
      let i = Hn.R,
        a = 0;
      for (let [o, s] of this.warm) {
        if (o.built || this.building(o)) {
          this.warm.delete(o);
          continue;
        }
        if (this.pin(o) || this.keep?.(o)) {
          this.warm.set(o, 0);
          continue;
        }
        let c = o.y === void 0 ? 0 : n - o.y;
        if ((o.x - t) ** 2 + (o.z - r) ** 2 + c * c < i * i) {
          s && this.warm.set(o, 0);
          continue;
        }
        let l = s + e;
        if (l < Hn.S || a >= 2) {
          this.warm.set(o, l);
          continue;
        }
        (this.warm.delete(o), this.releaseSite(o), a++);
      }
    }
    releaseSite(e) {
      try {
        (e.release?.(), this.released++);
      } catch (t) {
        console.error(`[interiors] release failed`, e.id, t);
      }
    }
    tier(e) {
      return e.built
        ? `built`
        : this.building(e)
          ? `building`
          : this.warm.has(e)
            ? `warm`
            : `cold`;
    }
    get warmCount() {
      return this.warm.size;
    }
    worstStep = { id: ``, step: 0, label: ``, ms: 0 };
    step(e) {
      let t = performance.now(),
        n = e.it.next(),
        r = performance.now() - t;
      return (
        (e.n = (e.n ?? 0) + 1),
        r > this.worstStep.ms &&
          ((this.worstStep.id = e.s.id),
          (this.worstStep.step = e.n),
          (this.worstStep.label =
            typeof n.value == `string` ? n.value : n.done ? `done` : ``),
          (this.worstStep.ms = r)),
        n
      );
    }
    setBuilt(e, t) {
      if (e.built === t) return;
      if (((e.built = t), t)) {
        (this.warm.delete(e), this.active.push(e));
        return;
      }
      let n = this.active.indexOf(e);
      (n >= 0 && this.active.splice(n, 1), e.release && this.warm.set(e, 0));
    }
    drop(e) {
      try {
        e.dispose();
      } catch (t) {
        console.error(`[interiors] dispose failed`, e.id, t);
      }
      this.setBuilt(e, !1);
    }
    building(e) {
      for (let t of this.jobs) if (t.s === e) return !0;
      return !1;
    }
    cancel(e) {
      for (let t = 0; t < this.jobs.length; t++)
        this.jobs[t].s === e &&
          (this.jobs.splice(t--, 1), e.release && this.warm.set(e, 0));
    }
    scan(e, t, n) {
      let r = this.cand;
      r.length = 0;
      for (let i of this.sites) {
        let a = i.y === void 0 ? 0 : t - i.y,
          o = Math.sqrt((i.x - e) ** 2 + (i.z - n) ** 2 + a * a),
          s = this.pin(i);
        (i.built && o > i.dropR && !s && this.drop(i),
          !i.built && o > i.dropR && !s && this.cancel(i),
          !(!s && !i.built && o < i.buildR && i.canBuild && !i.canBuild()) &&
            ((s && !i.built && i.openNow && !i.openNow() && this.held(i)) ||
              (!i.built && (o < i.buildR || s) && i.ready && !i.ready()) ||
              ((o < i.buildR || (i.built && o <= i.dropR) || s) &&
                r.push({ s: i, d: s ? -1 : o }))));
      }
      (r.sort((e, t) => e.d - t.d), this.counts.clear());
      for (let e of r) {
        let t = this.counts.get(e.s.group) ?? 0;
        if (t >= (this.caps.get(e.s.group) ?? 99)) {
          (e.s.built && !this.pin(e.s) && this.drop(e.s), this.cancel(e.s));
          continue;
        }
        if (
          (this.counts.set(e.s.group, t + 1), !e.s.built && !this.building(e.s))
        ) {
          let t = performance.now();
          try {
            let n = e.s.build();
            (this.warm.delete(e.s),
              n && typeof n.next == `function`
                ? (this.jobs.push({ s: e.s, it: n, ms: performance.now() - t }),
                  e.d < 0 &&
                    this.jobs.length > 1 &&
                    this.jobs.unshift(this.jobs.pop()))
                : (this.setBuilt(e.s, !0),
                  (this.lastBuildMs = performance.now() - t)));
          } catch (t) {
            console.error(`[interiors] build failed`, e.s.id, t);
          }
        }
      }
    }
    flush() {
      let e = Vn.sync;
      Vn.sync = !0;
      try {
        for (; this.jobs.length;) {
          let e = this.jobs.shift();
          try {
            let t = e.it.next();
            for (; !t.done;) t = e.it.next();
            this.setBuilt(e.s, !0);
          } catch (t) {
            console.error(`[interiors] build failed`, e.s.id, t);
          }
        }
      } finally {
        Vn.sync = e;
      }
    }
    releaseAll() {
      this.jobs.length = 0;
      for (let e of [...this.active]) this.drop(e);
      for (let e of [...this.warm.keys()]) this.releaseSite(e);
      (this.warm.clear(), this.holds.clear());
    }
    get pending() {
      return this.jobs.length;
    }
    pendingSites(e = []) {
      e.length = 0;
      for (let t of this.jobs) e.push(t.s);
      return e;
    }
    get builtCount() {
      return this.active.length;
    }
  };
function Wn(e) {
  let t = 0,
    n = new Set();
  for (let r of e) {
    let e = r.geometry;
    if (e && !n.has(e)) {
      n.add(e);
      for (let n in e.attributes) {
        let r = e.attributes[n];
        t += r.count * r.itemSize * (r.array?.BYTES_PER_ELEMENT ?? 4);
      }
      e.index && (t += e.index.count * (e.index.array?.BYTES_PER_ELEMENT ?? 4));
    }
  }
  return t;
}
var Gn = class {
    spots = [];
    active = null;
    timer = 0;
    blocked = !1;
    add(e) {
      return (
        this.spots.push(e),
        () => {
          let t = this.spots.indexOf(e);
          (t >= 0 && this.spots.splice(t, 1),
            this.active === e && (this.active = null));
        }
      );
    }
    clear() {
      ((this.spots.length = 0), (this.active = null));
    }
    update(e, t) {
      if (this.blocked || !this.spots.length) {
        this.active = null;
        return;
      }
      if (((this.timer -= t), this.timer <= 0)) {
        ((this.timer = 0.1), (this.active = null));
        let t = `foot`;
        try {
          t = e.player.mode;
        } catch {}
        if (t !== `foot`) return;
        let n = e.player.position,
          r = 1 / 0;
        for (let e of this.spots) {
          let t = Math.hypot(n.x - e.x, n.z - e.z);
          t > e.r ||
            Math.abs(n.y - e.y) > 2.5 ||
            t >= r ||
            ((r = t), (this.active = e));
        }
      }
      let n = this.active;
      if (!n) return;
      let r = n.label();
      if (r) {
        try {
          e.ui.prompt(r);
        } catch {}
        e.input.pressed(`interact`) && n.act();
      }
    }
  },
  Kn = class {
    ctx;
    useHemi;
    color = new W(1, 1, 1);
    intensity = 0;
    wantC = new W(1, 1, 1);
    wantK = 0;
    hemi = void 0;
    setK = -1;
    baseK = 0;
    setC = new W();
    baseC = new W();
    setG = new W();
    baseG = new W();
    constructor(e, t) {
      ((this.ctx = e), (this.useHemi = t));
    }
    want(e, t) {
      t <= this.wantK || ((this.wantK = t), this.wantC.setHex(e));
    }
    update(e) {
      let t = Math.min(1, e * 3.5);
      ((this.intensity += (this.wantK - this.intensity) * t),
        this.wantK > 0 && this.color.lerp(this.wantC, t),
        this.intensity < 0.004 && this.wantK === 0 && (this.intensity = 0),
        (this.wantK = 0));
      let n = q.uCharFill?.value;
      if (
        (n?.isVector4
          ? n.set(this.color.r, this.color.g, this.color.b, this.intensity)
          : n?.isColor &&
            n.set(
              this.color.r * this.intensity,
              this.color.g * this.intensity,
              this.color.b * this.intensity,
            ),
        !this.useHemi)
      )
        return;
      if (this.hemi === void 0) {
        this.hemi = null;
        for (let e of this.ctx.scene.children)
          e.isHemisphereLight && (this.hemi = e);
      }
      let r = this.hemi;
      if (!r) return;
      (r.intensity !== this.setK && (this.baseK = r.intensity),
        r.color.equals(this.setC) || this.baseC.copy(r.color),
        r.groundColor.equals(this.setG) || this.baseG.copy(r.groundColor));
      let i = this.intensity;
      if (i <= 0) {
        this.setK >= 0 &&
          ((r.intensity = this.baseK),
          r.color.copy(this.baseC),
          r.groundColor.copy(this.baseG),
          (this.setK = -1));
        return;
      }
      let a = Math.min(1, i);
      ((r.intensity =
        this.baseK + (Math.max(this.baseK, 1.6 * i) - this.baseK) * a),
        r.color.copy(this.baseC).lerp(this.color, 0.8 * a),
        r.groundColor.copy(this.baseG).lerp(this.color, 0.55 * a),
        (this.setK = r.intensity),
        this.setC.copy(r.color),
        this.setG.copy(r.groundColor));
    }
  },
  qn = class {
    ctx;
    saved = new Map();
    on = !1;
    constructor(e) {
      this.ctx = e;
    }
    set(e) {
      if (e === this.on) return;
      this.on = e;
      let t = null;
      try {
        t = this.ctx.player.object;
      } catch {}
      if (t) {
        if (e)
          (this.saved.clear(),
            t.traverse((e) => {
              e.isGroup &&
                (this.saved.set(e, e.renderOrder), (e.renderOrder = -29));
            }));
        else {
          for (let [e, t] of this.saved) e.renderOrder = t;
          this.saved.clear();
        }
      }
    }
  },
  Jn = [];
function Yn(e) {
  Jn.push(e);
  let t = !0;
  return () => {
    if (!t) return;
    t = !1;
    let n = Jn.indexOf(e);
    n >= 0 && Jn.splice(n, 1);
  };
}
function Xn(e, t, n) {
  for (let r = 0; r < Jn.length; r++) {
    let i = Jn[r];
    try {
      if (i.contains(e, t, n)) return i;
    } catch {}
  }
  return null;
}
var Zn = `interiors-menu-style`,
  Qn = `
.imenu-bd{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:flex-end;
  padding:max(12px,env(safe-area-inset-top)) max(16px,calc(env(safe-area-inset-right) + 10px)) max(12px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));
  background:linear-gradient(90deg,rgba(0,0,0,0) 35%,rgba(0,0,0,0.28));box-sizing:border-box;touch-action:none;-webkit-tap-highlight-color:transparent}
.imenu{position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:min(400px,100%);max-height:100%;
  background:rgba(14,18,22,0.93);color:#f4f4f0;border-radius:14px;padding:14px 14px 10px;font-family:${K};
  box-shadow:0 12px 40px rgba(0,0,0,0.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);user-select:none;-webkit-user-select:none;touch-action:pan-y}
.imenu-hd{display:flex;align-items:flex-start;gap:10px}
.imenu-title{flex:1;font-size:21px;font-weight:800;letter-spacing:1px;line-height:1.2;padding-top:3px}
.imenu-x{flex:none;width:44px;height:44px;margin:-6px -6px 0 0;border:0;border-radius:12px;background:rgba(255,255,255,0.1);
  color:#fff;font:700 22px/44px ${K};cursor:pointer;padding:0}
.imenu-x:active{background:rgba(255,255,255,0.25)}
.imenu-say{margin:6px 0 2px;font-size:14px;line-height:1.35;color:#ffe9b0}
.imenu-say b{color:#fff;font-weight:700;margin-right:2px}
.imenu-sub{font-size:12.5px;opacity:.68;margin:2px 0 8px}
.imenu-rows{flex:1 1 auto;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;margin:0 -4px;padding:0 4px}
.imenu-row{display:flex;align-items:center;gap:10px;min-height:48px;padding:6px 8px;border-radius:10px;margin:3px 0;
  background:rgba(255,255,255,0.05);cursor:pointer;box-sizing:border-box;border:2px solid transparent}
.imenu-row.sel{border-color:var(--acc);background:rgba(255,255,255,0.12)}
.imenu-row.dis{opacity:.45;cursor:default}
.imenu-row:active:not(.dis){background:rgba(255,255,255,0.2)}
.imenu-num{flex:none;width:24px;height:24px;border-radius:6px;background:var(--acc);color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:14px}
.imenu-glyph{flex:none;width:34px;height:34px;border-radius:50%;background:#fff;color:#222;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:17px}
.imenu-txt{flex:1;min-width:0}
.imenu-name{font-size:16px;font-weight:700;line-height:1.25}
.imenu-desc{font-size:12px;opacity:.72;line-height:1.25}
.imenu-price{flex:none;font-size:16px;font-weight:800;color:#ffd66b}
.imenu-ft{display:flex;justify-content:space-between;gap:10px;font-size:12.5px;opacity:.8;margin-top:8px}
.imenu-ft .cash{flex:none;color:#ffd66b;font-weight:700}
.imenu-bd.touch .imenu-num{display:none}
@media (max-height:500px){
  .imenu{padding:10px 12px 8px}
  .imenu-title{font-size:17px;padding-top:6px}
  .imenu-say{font-size:12.5px;margin:2px 0 0}
  .imenu-sub{display:none}
  .imenu-row{min-height:44px;padding:4px 8px;margin:2px 0}
  .imenu-glyph{width:28px;height:28px;font-size:15px}
  .imenu-name{font-size:14.5px}
  .imenu-desc{font-size:11.5px}
  .imenu-ft{margin-top:5px;font-size:12px}
}
@media (orientation:portrait) and (max-width:600px){
  .imenu-bd{align-items:flex-end;justify-content:center;padding:0;background:linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,0.3))}
  .imenu{width:100%;max-height:62%;border-radius:16px 16px 0 0;
    padding:12px max(14px,env(safe-area-inset-right)) max(12px,env(safe-area-inset-bottom)) max(14px,env(safe-area-inset-left))}
}
`,
  $n = class {
    ctx;
    bd = null;
    rowsEl = null;
    rowEls = [];
    cashEl = null;
    hintEl = null;
    opts = null;
    keyHandler = (e) => this.onKey(e);
    openedAt = 0;
    sel = -1;
    device = ``;
    stickT = 0;
    stickDir = 0;
    constructor(e) {
      this.ctx = e;
    }
    get open() {
      return !!this.bd;
    }
    get owner() {
      return this.opts?.owner;
    }
    show(e) {
      (this.close(!0), (this.opts = e));
      let t = this.ctx,
        n = (e) => t.t(e);
      if (!document.getElementById(Zn)) {
        let e = document.createElement(`style`);
        ((e.id = Zn), (e.textContent = Qn), document.head.appendChild(e));
      }
      let r = document.createElement(`div`);
      ((r.className = `imenu-bd`), r.style.setProperty(`--acc`, e.accent));
      let i = document.createElement(`div`);
      ((i.className = `imenu`), (i.style.borderTop = `5px solid ${e.accent}`));
      let a = e.speaker
        ? `<div class="imenu-say"><b>${er(n(e.speaker.name))}：</b>${er(n(e.speaker.line))}</div>`
        : ``;
      ((i.innerHTML = `<div class="imenu-hd"><div class="imenu-title">${er(n(e.title))}</div>
        <button class="imenu-x" aria-label="${er(n({ zh: `離開`, en: `Close` }))}">✕</button></div>
      ${a}${e.subtitle ? `<div class="imenu-sub">${er(n(e.subtitle))}</div>` : ``}
      <div class="imenu-rows"></div>
      <div class="imenu-ft"><span class="hint"></span><span class="cash"></span></div>`),
        (this.rowsEl = i.querySelector(`.imenu-rows`)),
        (this.cashEl = i.querySelector(`.cash`)),
        (this.hintEl = i.querySelector(`.hint`)),
        (this.rowEls = []),
        e.items.forEach((e, t) => {
          let r = document.createElement(`div`);
          ((r.className = `imenu-row`),
            (r.innerHTML = `<div class="imenu-num">${t + 1}</div><div class="imenu-glyph">${er(e.glyph)}</div>
        <div class="imenu-txt"><div class="imenu-name">${er(n(e.name))}</div><div class="imenu-desc"></div></div>
        <div class="imenu-price">${Re(e.price, Ie)}</div>`),
            r.addEventListener(`click`, (e) => {
              (e.stopPropagation(), this.setSel(t), this.choose(t));
            }),
            r.addEventListener(`mouseenter`, () => this.setSel(t)),
            this.rowsEl.appendChild(r),
            this.rowEls.push(r));
        }),
        i.querySelector(`.imenu-x`).addEventListener(`click`, (e) => {
          (e.stopPropagation(), this.close());
        }),
        r.addEventListener(`pointerdown`, (e) => {
          e.target === r &&
            performance.now() - this.openedAt > 250 &&
            (e.preventDefault(), this.close());
        }),
        i.addEventListener(`pointerdown`, (e) => e.stopPropagation()),
        r.appendChild(i),
        document.body.appendChild(r),
        (this.bd = r),
        (this.openedAt = performance.now()),
        (this.sel = -1),
        (this.device = ``),
        this.refresh(),
        this.updateDevice(),
        window.addEventListener(`keydown`, this.keyHandler, !0));
      try {
        t.ui.setExternalMenu?.(!0);
      } catch {}
      try {
        t.player.setControlEnabled(!1);
      } catch {}
      try {
        document.pointerLockElement && document.exitPointerLock();
      } catch {}
    }
    update(e) {
      if (!this.bd) return;
      this.updateDevice();
      let t = this.ctx.input;
      if (
        t.device !== `gamepad` ||
        performance.now() - this.openedAt < 220 ||
        !(this.opts?.items.length ?? 0)
      )
        return;
      t.pressed(`phone`)
        ? this.move(-1)
        : t.pressed(`lookBehind`) && this.move(1);
      let n = t.axis(`moveY`),
        r = n > 0.55 ? -1 : +(n < -0.55);
      (r === this.stickDir
        ? r &&
          ((this.stickT += e),
          this.stickT > 0.32 && ((this.stickT = 0.2), this.move(r)))
        : ((this.stickDir = r), (this.stickT = 0), r && this.move(r)),
        t.pressed(`jump`)
          ? this.choose(this.sel < 0 ? 0 : this.sel)
          : (t.pressed(`sprint`) ||
              t.pressed(`pause`) ||
              t.pressed(`interact`)) &&
            this.close());
    }
    updateDevice() {
      let e = this.ctx.input.device;
      if (
        (e === `kbm` &&
          !this.device &&
          typeof matchMedia == `function` &&
          matchMedia(`(pointer: coarse)`).matches &&
          (e = `touch`),
        e === this.device || !this.hintEl || !this.bd)
      )
        return;
      ((this.device = e), this.bd.classList.toggle(`touch`, e === `touch`));
      let t =
        e === `touch`
          ? {
              zh: `點選商品購買 · 點空白處或 ✕ 離開`,
              en: `Tap an item to buy · tap outside or ✕ to leave`,
            }
          : e === `gamepad`
            ? {
                zh: `十字鍵選擇 · Ⓐ 購買 · Ⓑ 離開`,
                en: `D-pad to pick · Ⓐ buy · Ⓑ leave`,
              }
            : {
                zh: `數字鍵 / ↑↓ Enter 購買 · E / Esc 離開`,
                en: `Number keys / ↑↓ Enter to buy · E / Esc to leave`,
              };
      ((this.hintEl.textContent = this.ctx.t(t)),
        e === `gamepad` && this.sel < 0 && this.setSel(0));
    }
    move(e) {
      let t = this.opts?.items.length ?? 0;
      if (t) {
        this.setSel(
          this.sel < 0 ? (e > 0 ? 0 : t - 1) : (this.sel + e + t) % t,
        );
        try {
          this.ctx.audio.play(`ui_hover`, { ui: !0, volume: 0.5 });
        } catch {}
      }
    }
    setSel(e) {
      if (e === this.sel) return;
      (this.rowEls[this.sel]?.classList.remove(`sel`), (this.sel = e));
      let t = this.rowEls[e];
      if (t) {
        t.classList.add(`sel`);
        try {
          t.scrollIntoView({ block: `nearest` });
        } catch {}
      }
    }
    refresh() {
      let e = this.opts;
      if (!e) return;
      let t = (e) => this.ctx.t(e);
      (e.items.forEach((e, n) => {
        let r = this.rowEls[n];
        if (!r) return;
        let i = !e.can || e.can();
        (r.classList.toggle(`dis`, i !== !0),
          (r.querySelector(`.imenu-desc`).textContent = t(
            i === !0 ? e.desc : i,
          )));
      }),
        this.cashEl &&
          (this.cashEl.textContent = Re(this.ctx.state.money, {
            group: `none`,
          })));
    }
    onKey(e) {
      if (ze(e.target) || !this.bd) return;
      let t = this.opts?.items.length ?? 0,
        n = !0;
      if (/^Digit[1-9]$/.test(e.code) || /^Numpad[1-9]$/.test(e.code)) {
        let n = Number(e.code.slice(-1)) - 1;
        n < t && (this.setSel(n), this.choose(n));
      } else
        e.code === `ArrowUp` || e.code === `KeyW`
          ? this.move(-1)
          : e.code === `ArrowDown` || e.code === `KeyS`
            ? this.move(1)
            : (e.code === `Enter` || e.code === `Space`) && this.sel >= 0
              ? this.choose(this.sel)
              : (e.code === `Escape` || e.code === `KeyE`) &&
                  performance.now() - this.openedAt > 150
                ? this.close()
                : (n = !1);
      n && (e.preventDefault(), e.stopPropagation());
    }
    choose(e) {
      let t = this.opts;
      if (!t || !t.items[e]) return;
      let n = t.items[e];
      if ((!n.can || n.can()) !== !0) {
        try {
          this.ctx.audio.play(`ui_back`, { ui: !0 });
        } catch {}
        return;
      }
      (n.buy(), this.refresh());
    }
    close(e = !1) {
      if (!this.bd) return;
      (this.bd.remove(),
        (this.bd = null),
        (this.rowsEl = null),
        (this.rowEls = []),
        (this.cashEl = this.hintEl = null),
        window.removeEventListener(`keydown`, this.keyHandler, !0));
      try {
        this.ctx.ui.setExternalMenu?.(!1);
      } catch {}
      try {
        this.ctx.player.setControlEnabled(!0);
      } catch {}
      let t = this.opts;
      ((this.opts = null), e || t?.onClose?.());
    }
    dispose() {
      this.close(!0);
    }
  };
function er(e) {
  return e.replace(
    /[&<>"]/g,
    (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` })[e],
  );
}
var tr = {
    [J.armL]: [0.04, 0, -0.07],
    [J.armR]: [0.02, 0, 0.07],
    [J.foreL]: [0.22, 0, 0],
    [J.foreR]: [0.26, 0, 0],
    [J.fingersL]: [0, 0, 0.3],
    [J.fingersR]: [0, 0, -0.3],
  },
  nr = (e) => (t) => Math.max(e + 0.1, 0.3),
  rr = {
    [J.thighL]: [1.5, 0, -0.06],
    [J.thighR]: [1.5, 0, 0.06],
    [J.shinL]: [-1.45, 0, 0],
    [J.shinR]: [-1.45, 0, 0],
    [J.footL]: [-0.05, 0, 0],
    [J.footR]: [-0.05, 0, 0],
  },
  ir = {
    [J.thighL]: [0.12, 0, -0.03],
    [J.thighR]: [0.12, 0, 0.03],
    [J.shinL]: [-1.62, 0, 0],
    [J.shinR]: [-1.62, 0, 0],
    [J.footL]: [0.55, 0, 0],
    [J.footR]: [0.55, 0, 0],
  },
  ar = {
    [J.armL]: [0.55, 0, 0.32],
    [J.armR]: [0.55, 0, -0.32],
    [J.foreL]: [1.75, 0, 0],
    [J.foreR]: [1.75, 0, 0],
    [J.handL]: [0, 0.6, 0],
    [J.handR]: [0, -0.6, 0],
    [J.fingersL]: [0, 0, 0.05],
    [J.fingersR]: [0, 0, -0.05],
  },
  or = {
    stand: { bones: { ...tr } },
    attention: {
      bones: {
        [J.armL]: [0, 0, -0.03],
        [J.armR]: [0, 0, 0.03],
        [J.foreL]: [0.05, 0, 0],
        [J.foreR]: [0.05, 0, 0],
        [J.fingersL]: [0, 0, 0.9],
        [J.fingersR]: [0, 0, -0.9],
        [J.chest]: [0.03, 0, 0],
      },
    },
    browse: {
      bones: {
        ...tr,
        [J.armR]: [1.05, 0, 0.12],
        [J.foreR]: [0.55, 0, 0],
        [J.head]: [-0.12, 0.1, 0],
        [J.neck]: [-0.05, 0.05, 0],
      },
    },
    look: {
      bones: {
        ...tr,
        [J.head]: [0.18, 0.35, 0],
        [J.neck]: [0.1, 0.2, 0],
        [J.spine]: [0.03, 0.1, 0],
      },
    },
    phone: {
      bones: {
        ...tr,
        [J.armL]: [0.3, 0, -0.3],
        [J.foreL]: [1.5, 0, 0],
        [J.handL]: [-0.2, 0.9, 0],
        [J.head]: [-0.3, 0, 0],
        [J.neck]: [-0.2, 0, 0],
      },
    },
    hold: {
      bones: {
        ...tr,
        [J.armR]: [0.15, 0, -0.05],
        [J.foreR]: [1.35, 0, 0],
        [J.fingersR]: [0, 0, -0.9],
      },
    },
    point: {
      bones: {
        ...tr,
        [J.armR]: [1.35, 0, 0.35],
        [J.foreR]: [0.1, 0, 0],
        [J.head]: [0, -0.2, 0],
      },
    },
    counter: {
      bones: {
        [J.armL]: [0.5, 0, 0.12],
        [J.armR]: [0.5, 0, -0.12],
        [J.foreL]: [0.95, 0, 0],
        [J.foreR]: [0.95, 0, 0],
        [J.chest]: [-0.08, 0, 0],
        [J.fingersL]: [0, 0, 0.2],
        [J.fingersR]: [0, 0, -0.2],
      },
    },
    cook: {
      bones: {
        [J.armL]: [0.45, 0, 0.2],
        [J.armR]: [0.7, 0, -0.1],
        [J.foreL]: [1.1, 0, 0],
        [J.foreR]: [1.2, 0, 0],
        [J.chest]: [-0.14, 0, 0],
        [J.head]: [-0.3, 0, 0],
        [J.fingersR]: [0, 0, -0.9],
      },
    },
    handsup: {
      bones: {
        [J.armL]: [2.55, 0, -0.45],
        [J.armR]: [2.55, 0, 0.45],
        [J.foreL]: [0.55, 0, 0],
        [J.foreR]: [0.55, 0, 0],
        [J.handL]: [0.3, 0, 0],
        [J.handR]: [0.3, 0, 0],
        [J.fingersL]: [0, 0, -0.1],
        [J.fingersR]: [0, 0, 0.1],
        [J.chest]: [0.08, 0, 0],
        [J.head]: [0.05, 0, 0],
      },
    },
    cower: {
      bones: {
        [J.thighL]: [1.95, 0, -0.18],
        [J.thighR]: [1.95, 0, 0.18],
        [J.shinL]: [-2.35, 0, 0],
        [J.shinR]: [-2.35, 0, 0],
        [J.footL]: [0.35, 0, 0],
        [J.footR]: [0.35, 0, 0],
        [J.spine]: [-0.35, 0, 0],
        [J.chest]: [-0.3, 0, 0],
        [J.head]: [-0.4, 0, 0],
        [J.armL]: [2.3, 0, 0.2],
        [J.armR]: [2.3, 0, -0.2],
        [J.foreL]: [2.1, 0, 0],
        [J.foreR]: [2.1, 0, 0],
      },
      hipsY: (e) => e.shinLen * 0.62 + 0.12,
    },
    sit: {
      bones: {
        ...rr,
        [J.armL]: [0.55, 0, -0.05],
        [J.armR]: [0.55, 0, 0.05],
        [J.foreL]: [0.75, 0, 0],
        [J.foreR]: [0.75, 0, 0],
        [J.spine]: [0.04, 0, 0],
      },
      hipsY: nr(0.43),
    },
    stool: {
      bones: {
        ...rr,
        [J.shinL]: [-1.8, 0, 0],
        [J.shinR]: [-1.8, 0, 0],
        [J.armL]: [0.6, 0, -0.05],
        [J.armR]: [0.6, 0, 0.05],
        [J.foreL]: [0.9, 0, 0],
        [J.foreR]: [0.9, 0, 0],
      },
      hipsY: nr(0.7),
    },
    eat: {
      bones: {
        ...rr,
        [J.armL]: [0.6, 0, -0.05],
        [J.foreL]: [0.85, 0, 0],
        [J.armR]: [0.75, 0, -0.2],
        [J.foreR]: [2.05, 0, 0],
        [J.head]: [-0.12, 0, 0],
        [J.chest]: [-0.12, 0, 0],
      },
      hipsY: nr(0.43),
    },
    kneel: { bones: { ...ir, ...tr }, hipsY: (e) => e.thighLen + 0.09 },
    pray: {
      bones: {
        ...ir,
        ...ar,
        [J.head]: [-0.25, 0, 0],
        [J.chest]: [-0.12, 0, 0],
      },
      hipsY: (e) => e.thighLen + 0.09,
    },
    incense: {
      bones: {
        ...ar,
        [J.armL]: [0.85, 0, 0.3],
        [J.armR]: [0.85, 0, -0.3],
        [J.foreL]: [1.45, 0, 0],
        [J.foreR]: [1.45, 0, 0],
        [J.head]: [-0.1, 0, 0],
      },
    },
  },
  sr = 25;
function cr(e, t) {
  let n = e.bones;
  for (let t = 0; t < sr && t < n.length; t++)
    (n[t].rotation.set(0, 0, 0), n[t].position.copy(e.rest[t]));
  (n[J.lidL].scale.set(1, 0.001, 1), n[J.lidR].scale.set(1, 0.001, 1));
  let r = or[t];
  for (let e in r.bones) {
    let t = r.bones[e];
    n[+e].rotation.set(t[0], t[1], t[2]);
  }
  (r.hipsY && (n[J.hips].position.y = r.hipsY(e)),
    r.hipsZ && (n[J.hips].position.z = e.rest[J.hips].z - r.hipsZ));
}
var lr = new Set([`umbrella`, `helmet`, `deliveryBox`]),
  ur = new Map(),
  dr = 28,
  fr = new U(),
  pr = new de(),
  mr = new W(),
  hr = new W();
function gr(e) {
  let t = ur.get(e.id);
  if (t) return (ur.delete(e.id), ur.set(e.id, t), t);
  for (t = Xe(e, { lod: 1, atlas: null }), ur.set(e.id, t); ur.size > dr;) {
    let e = ur.keys().next().value;
    (ur.get(e)?.dispose(), ur.delete(e));
  }
  return t;
}
function _r(e, t = !1) {
  return t || !e.acc?.some((e) => lr.has(e.kind))
    ? e
    : { ...e, id: `${e.id}~in`, acc: e.acc.filter((e) => !lr.has(e.kind)) };
}
function vr(e, t) {
  let n = gr(e);
  (cr(n, t), n.root.updateMatrixWorld(!0));
  let r = n.mesh,
    i = r.geometry,
    a = i.attributes.position,
    o = i.attributes.normal,
    s = i.attributes.color,
    c = a.count,
    l = new Float32Array(c * 3),
    u = new Float32Array(c * 3);
  for (let e = 0; e < c; e++)
    (r.getVertexPosition(e, fr),
      pr.set(o.getX(e), o.getY(e), o.getZ(e), 0),
      r.applyBoneTransform(e, pr),
      (l[e * 3] = fr.x),
      (l[e * 3 + 1] = fr.y),
      (l[e * 3 + 2] = fr.z),
      (u[e * 3] = pr.x),
      (u[e * 3 + 1] = pr.y),
      (u[e * 3 + 2] = pr.z));
  let d = null;
  if (s) {
    d = new Float32Array(c * 3);
    for (let e = 0; e < c; e++)
      ((d[e * 3] = s.getX(e)),
        (d[e * 3 + 1] = s.getY(e)),
        (d[e * 3 + 2] = s.getZ(e)));
  }
  let f = i.index,
    p = null;
  if (f) {
    p = c > 65535 ? new Uint32Array(f.count) : new Uint16Array(f.count);
    for (let e = 0; e < f.count; e++) p[e] = f.getX(e);
  }
  return (cr(n, `stand`), { pos: l, nor: u, col: d, idx: p });
}
function yr(e, t, n = {}) {
  let r = t.pos.length / 3,
    i = e.vcount,
    a = n.scale ?? 1,
    o = n.tint === void 0 ? null : mr.setHex(n.tint),
    s = n.mono === void 0 ? null : hr.setHex(n.mono),
    c = n.emit ?? 0,
    l = t.pos,
    u = t.nor,
    d = t.col,
    f = t.idx;
  (e.reserve(r, f ? f.length : r), (e.reg = e.white), e.push().scale(a));
  for (let t = 0; t < r; t++) {
    let n = t * 3;
    (s
      ? ((e.r = s.r), (e.g = s.g), (e.b = s.b))
      : d
        ? ((e.r = d[n]), (e.g = d[n + 1]), (e.b = d[n + 2]))
        : (e.r = e.g = e.b = 0.7),
      o && ((e.r *= o.r), (e.g *= o.g), (e.b *= o.b)),
      (e.a = c),
      e.v(l[n], l[n + 1], l[n + 2], u[n], u[n + 1], u[n + 2], 0.5, 0.5));
  }
  e.pop();
  let p = 0;
  if (f)
    for (let t = 0; t + 2 < f.length; t += 3)
      (e.tri(i + f[t], i + f[t + 1], i + f[t + 2]), p++);
  else
    for (let t = 0; t + 2 < r; t += 3)
      (e.tri(i + t, i + t + 1, i + t + 2), p++);
  return p;
}
var br = 4e3,
  xr = class {
    allow;
    make;
    worker = null;
    started = !1;
    dead = !1;
    seq = 1;
    pending = new Map();
    heroCapable;
    stats = {
      bakes: 0,
      heroes: 0,
      workerMs: 0,
      syncBakes: 0,
      syncMs: 0,
      errors: 0,
    };
    constructor(e = !0, t) {
      ((this.allow = e),
        (this.make = t),
        (this.heroCapable =
          e &&
          typeof Worker < `u` &&
          typeof OffscreenCanvas < `u` &&
          typeof createImageBitmap == `function`));
    }
    get live() {
      return !this.allow || this.dead
        ? !1
        : (this.started || this.start(), !!this.worker);
    }
    start() {
      if (((this.started = !0), typeof Worker < `u`))
        try {
          let e = this.make
            ? this.make()
            : new Worker(
                new URL(
                  `/tokyo/assets/peopleWorker-Cn7UVw8F.js`,
                  `` + import.meta.url,
                ),
                { type: `module`, name: `interiors-people` },
              );
          ((e.onmessage = (e) => this.onMessage(e.data)),
            (e.onerror = (e) => {
              (e.preventDefault?.(),
                console.warn(
                  `[interiors] people worker unavailable — people are built on the main thread`,
                ),
                this.kill());
            }),
            (this.worker = e));
        } catch {
          ((this.worker = null), (this.dead = !0));
        }
    }
    kill() {
      ((this.dead = !0), this.worker?.terminate(), (this.worker = null));
      for (let e of this.pending.values())
        `runSync` in e ? (e.inFlight = !1) : (e.failed = e.done = !0);
      this.pending.clear();
    }
    lastReply = 0;
    watchT = 0;
    watch() {
      if (this.watchT || this.dead) return;
      let e = this.lastReply + Ke - performance.now();
      this.watchT = setTimeout(
        () => {
          if (((this.watchT = 0), this.pending.size && !this.dead)) {
            if (performance.now() - this.lastReply < 15e3) return this.watch();
            (console.warn(
              `[interiors] people worker silent for ${Ke / 1e3} s — people are built on the main thread`,
            ),
              this.kill());
          }
        },
        Math.max(250, e),
      );
    }
    posted() {
      (this.pending.size <= 1 && (this.lastReply = performance.now()),
        this.watch());
    }
    onMessage(e) {
      this.lastReply = performance.now();
      let t = this.pending.get(e.id);
      if (t && (this.pending.delete(e.id), !t.done)) {
        if (((this.stats.workerMs += e.ms ?? 0), e.error)) {
          if (
            (this.stats.errors++,
            console.warn(
              `[interiors] people worker job failed`,
              e.error.split(`
`)[0],
            ),
            `runSync` in t)
          ) {
            t.inFlight = !1;
            return;
          }
          t.failed = t.done = !0;
          return;
        }
        `runSync` in t
          ? ((t.data = e.bake ?? null),
            (t.done = !0),
            (t.inFlight = !1),
            this.stats.bakes++)
          : ((t.data = e.hero ?? null),
            (t.ms = e.ms ?? 0),
            (t.failed = !t.data),
            (t.done = !0),
            this.stats.heroes++);
      }
    }
    bake(e, t, n = !1) {
      let r = _r(e, n),
        i = this.stats,
        a = {
          done: !1,
          data: null,
          desc: r,
          pose: t,
          t0: performance.now(),
          inFlight: !1,
          runSync() {
            if (this.done) return;
            let e = performance.now();
            try {
              this.data = vr(this.desc, this.pose);
            } catch (e) {
              (console.warn(`[interiors] person bake failed`, e),
                (this.data = null));
            }
            ((this.done = !0),
              i.syncBakes++,
              (i.syncMs += performance.now() - e));
          },
        };
      if (this.live && !Vn.sync) {
        let e = this.seq++;
        this.pending.set(e, a);
        try {
          (this.worker.postMessage({ id: e, t: `bake`, desc: r, pose: t }),
            (a.inFlight = !0),
            this.posted());
        } catch {
          this.pending.delete(e);
        }
      }
      return a;
    }
    mustSync(e) {
      return (
        Vn.sync || !e.inFlight || !this.live || performance.now() - e.t0 > br
      );
    }
    hero(e, t, n) {
      let r = { done: !1, failed: !1, data: null, desc: e, ms: 0 };
      if (!this.heroCapable || !this.live) return ((r.done = r.failed = !0), r);
      let i = this.seq++;
      this.pending.set(i, r);
      try {
        (this.worker.postMessage({
          id: i,
          t: `hero`,
          desc: e,
          faceRes: t,
          atlasSize: n,
        }),
          this.posted());
      } catch {
        (this.pending.delete(i), (r.done = r.failed = !0));
      }
      return r;
    }
    resetHeroes() {
      if (this.worker && !this.dead)
        try {
          this.worker.postMessage({ id: 0, t: `reset` });
        } catch {}
    }
    dispose() {
      (this.worker?.terminate(),
        (this.worker = null),
        (this.dead = !0),
        this.pending.clear());
    }
  };
function* Sr(e, t) {
  for (; !t.done;) {
    if (e.mustSync(t)) {
      t.runSync();
      break;
    }
    yield Bn;
  }
  return t.data;
}
var Cr = new WeakMap();
function wr(e) {
  let t = Cr.get(e.scene);
  if (!t) {
    ((t = new g()), (t.name = `interiors`), e.scene.add(t), Cr.set(e.scene, t));
    let n = window.__gpuMemory;
    try {
      n?.claim?.(`interiors`, [t]);
    } catch {}
  }
  return t;
}
function Tr(e) {
  let t = wr(e);
  return (t.parent !== e.scene && e.scene.add(t), t);
}
var Er = new W(),
  Dr = new Float64Array(512),
  Or = [],
  kr = 0,
  Ar = 4 << 20,
  jr = (e) =>
    e.P.byteLength +
    e.N.byteLength +
    e.T.byteLength +
    e.C.byteLength +
    e.I.byteLength,
  Mr = new Float32Array(),
  Nr = new Float32Array(16),
  Pr = new Uint32Array();
function Fr(e) {
  let t = -1;
  for (let n = 0; n < Or.length; n++) {
    let r = Or[n];
    r.P.length / 3 >= e &&
      r.I.length >= e * 2 &&
      (t < 0 || r.P.length < Or[t].P.length) &&
      (t = n);
  }
  if (t < 0) return null;
  let n = Or.splice(t, 1)[0];
  return ((kr -= jr(n)), n);
}
function Ir() {
  ((Or.length = 0), (kr = 0));
}
var Lr = () => kr,
  Rr = class e {
    white;
    P;
    N;
    T;
    C;
    I;
    vcount = 0;
    icount = 0;
    m = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    stack = [];
    r = 1;
    g = 1;
    b = 1;
    a = 0;
    reg;
    both = !1;
    constructor(e, t = 4096) {
      this.white = e;
      let n = Fr(t);
      ((this.P = n?.P ?? new Float32Array(t * 3)),
        (this.N = n?.N ?? new Float32Array(t * 3)),
        (this.T = n?.T ?? new Float32Array(t * 2)),
        (this.C = n?.C ?? new Float32Array(t * 4)),
        (this.I = n?.I ?? new Uint32Array(t * 2)),
        (this.reg = e));
    }
    release(e = !0) {
      if (!this.P.length) return;
      let t = { P: this.P, N: this.N, T: this.T, C: this.C, I: this.I },
        n = jr(t);
      (e && kr + n <= Ar && (Or.push(t), (kr += n)),
        (this.P = this.N = this.T = this.C = Mr),
        (this.I = Pr));
    }
    col(e, t = 0, n = 1) {
      return (
        Er.setHex(e),
        (this.r = Er.r * n),
        (this.g = Er.g * n),
        (this.b = Er.b * n),
        (this.a = t),
        (this.reg = this.white),
        this
      );
    }
    rgb(e, t, n, r = this.a) {
      return ((this.r = e), (this.g = t), (this.b = n), (this.a = r), this);
    }
    tex(e, t = 16777215, n = 0, r = 1) {
      return (this.col(t, n, r), (this.reg = e), this);
    }
    push() {
      return (this.stack.push(this.m.slice()), this);
    }
    pop() {
      let e = this.stack.pop();
      return (e && (this.m = e), this);
    }
    reset() {
      return (
        this.m.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        (this.stack.length = 0),
        this
      );
    }
    mul(e) {
      let t = this.m,
        n = Nr;
      for (let r = 0; r < 4; r++)
        for (let i = 0; i < 4; i++)
          n[r * 4 + i] =
            t[i] * e[r * 4] +
            t[4 + i] * e[r * 4 + 1] +
            t[8 + i] * e[r * 4 + 2] +
            t[12 + i] * e[r * 4 + 3];
      t.set(n);
    }
    translate(e, t, n) {
      let r = this.m;
      return (
        (r[12] += r[0] * e + r[4] * t + r[8] * n),
        (r[13] += r[1] * e + r[5] * t + r[9] * n),
        (r[14] += r[2] * e + r[6] * t + r[10] * n),
        this
      );
    }
    rotateY(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (
        this.mul([t, 0, -n, 0, 0, 1, 0, 0, n, 0, t, 0, 0, 0, 0, 1]),
        this
      );
    }
    rotateX(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (
        this.mul([1, 0, 0, 0, 0, t, n, 0, 0, -n, t, 0, 0, 0, 0, 1]),
        this
      );
    }
    rotateZ(e) {
      let t = Math.cos(e),
        n = Math.sin(e);
      return (
        this.mul([t, n, 0, 0, -n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        this
      );
    }
    scale(e, t = e, n = e) {
      return (this.mul([e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1]), this);
    }
    grow(e, t) {
      if (this.vcount + e > this.P.length / 3) {
        let t = Math.max((this.P.length / 3) * 2, this.vcount + e + 256),
          n = (e, n) => {
            let r = new Float32Array(t * n);
            return (r.set(e), r);
          };
        ((this.P = n(this.P, 3)),
          (this.N = n(this.N, 3)),
          (this.T = n(this.T, 2)),
          (this.C = n(this.C, 4)));
      }
      if (this.icount + t > this.I.length) {
        let e = new Uint32Array(
          Math.max(this.I.length * 2, this.icount + t + 512),
        );
        (e.set(this.I), (this.I = e));
      }
    }
    emitRange(e, t, n) {
      for (let r = e; r < t; r++) {
        let e = r * 4 + 3;
        this.C[e] < n && (this.C[e] = n);
      }
    }
    reserve(e, t) {
      this.grow(e, t);
    }
    v(e, t, n, r, i, a, o, s) {
      let c = this.m,
        l = this.vcount++,
        u = l * 3;
      ((this.P[u] = c[0] * e + c[4] * t + c[8] * n + c[12]),
        (this.P[u + 1] = c[1] * e + c[5] * t + c[9] * n + c[13]),
        (this.P[u + 2] = c[2] * e + c[6] * t + c[10] * n + c[14]));
      let d = c[0] * r + c[4] * i + c[8] * a,
        f = c[1] * r + c[5] * i + c[9] * a,
        p = c[2] * r + c[6] * i + c[10] * a,
        m = Math.hypot(d, f, p) || 1;
      ((this.N[u] = d / m), (this.N[u + 1] = f / m), (this.N[u + 2] = p / m));
      let h = this.reg;
      ((this.T[l * 2] = h.u0 + (h.u1 - h.u0) * o),
        (this.T[l * 2 + 1] = h.v0 + (h.v1 - h.v0) * s));
      let g = l * 4;
      return (
        (this.C[g] = this.r),
        (this.C[g + 1] = this.g),
        (this.C[g + 2] = this.b),
        (this.C[g + 3] = this.a),
        l
      );
    }
    tri(e, t, n) {
      ((this.I[this.icount++] = e),
        (this.I[this.icount++] = t),
        (this.I[this.icount++] = n));
    }
    quad(e, t, n, r, i, a, o, s, c, l, u, d, f = 0, p = 0, m = 1, h = 1) {
      this.grow(4, 6);
      let g = r - e,
        _ = i - t,
        v = a - n,
        y = l - e,
        b = u - t,
        x = d - n,
        S = _ * x - v * b,
        C = v * y - g * x,
        w = g * b - _ * y,
        T = Math.hypot(S, C, w) || 1;
      ((S /= T), (C /= T), (w /= T));
      let E = this.v(e, t, n, S, C, w, f, p),
        D = this.v(r, i, a, S, C, w, m, p),
        O = this.v(o, s, c, S, C, w, m, h),
        k = this.v(l, u, d, S, C, w, f, h);
      (this.tri(E, D, O),
        this.tri(E, O, k),
        (this.both &&=
          ((this.both = !1),
          this.quad(l, u, d, o, s, c, r, i, a, e, t, n, f, h, m, p),
          !0)));
    }
    rectZ(e, t, n, r, i, a = -1, o = 0, s = 0, c = 1, l = 1) {
      a < 0
        ? this.quad(n, t, i, e, t, i, e, r, i, n, r, i, o, s, c, l)
        : this.quad(e, t, i, n, t, i, n, r, i, e, r, i, o, s, c, l);
    }
    rectX(e, t, n, r, i, a = 1, o = 0, s = 0, c = 1, l = 1) {
      a > 0
        ? this.quad(i, t, n, i, t, e, i, r, e, i, r, n, o, s, c, l)
        : this.quad(i, t, e, i, t, n, i, r, n, i, r, e, o, s, c, l);
    }
    rectY(e, t, n, r, i, a = 1, o = 0, s = 0, c = 1, l = 1) {
      a > 0
        ? this.quad(e, i, r, n, i, r, n, i, t, e, i, t, o, s, c, l)
        : this.quad(e, i, t, n, i, t, n, i, r, e, i, r, o, s, c, l);
    }
    box(e, t, n, r, i, a, o = 63) {
      (o & 32 && this.rectZ(e, t, r, i, n, -1),
        o & 16 && this.rectZ(e, t, r, i, a, 1),
        o & 1 && this.rectX(n, t, a, i, r, 1),
        o & 2 && this.rectX(n, t, a, i, e, -1),
        o & 4 && this.rectY(e, n, r, a, i, 1),
        o & 8 && this.rectY(e, n, r, a, t, -1));
    }
    boxc(e, t, n, r, i, a, o = 63) {
      this.box(e - r, t, n - a, e + r, t + i, n + a, o);
    }
    boxFront(e, t, n, r, i, a, o, s, c = 63, l = 16777215, u = this.a) {
      let d = this.a;
      (this.col(s, d),
        this.box(e, t, n, r, i, a, c & -33),
        c & 32 && (this.tex(o, l, u), this.rectZ(e, t, r, i, n, -1)),
        (this.a = d));
    }
    cyl(e, t, n, r, i, a, o = 10, s = !0, c = !1) {
      this.grow((o + 1) * 2 + o * 2 + 4, o * 12);
      let l = this.vcount,
        u = n - r,
        d = a - i,
        f = Math.hypot(u, d) || 1;
      for (let s = 0; s <= o; s++) {
        let c = (s / o) * Math.PI * 2,
          l = Math.cos(c),
          p = Math.sin(c),
          m = (l * d) / f,
          h = u / f,
          g = (p * d) / f;
        (this.v(e + l * n, i, t + p * n, m, h, g, s / o, 0),
          this.v(e + l * r, a, t + p * r, m, h, g, s / o, 1));
      }
      for (let e = 0; e < o; e++) {
        let t = l + e * 2;
        (this.tri(t, t + 1, t + 3), this.tri(t, t + 3, t + 2));
      }
      if (s && r > 0.001) {
        let n = this.v(e, a, t, 0, 1, 0, 0.5, 0.5),
          i = this.vcount;
        for (let n = 0; n <= o; n++) {
          let i = (n / o) * Math.PI * 2;
          this.v(
            e + Math.cos(i) * r,
            a,
            t + Math.sin(i) * r,
            0,
            1,
            0,
            0.5 + Math.cos(i) * 0.5,
            0.5 + Math.sin(i) * 0.5,
          );
        }
        for (let e = 0; e < o; e++) this.tri(n, i + e + 1, i + e);
      }
      if (c && n > 0.001) {
        let r = this.v(e, i, t, 0, -1, 0, 0.5, 0.5),
          a = this.vcount;
        for (let r = 0; r <= o; r++) {
          let a = (r / o) * Math.PI * 2;
          this.v(
            e + Math.cos(a) * n,
            i,
            t + Math.sin(a) * n,
            0,
            -1,
            0,
            0.5 + Math.cos(a) * 0.5,
            0.5 + Math.sin(a) * 0.5,
          );
        }
        for (let e = 0; e < o; e++) this.tri(r, a + e, a + e + 1);
      }
    }
    lathe(e, t, n, r = 12, i = 0, a = 1) {
      let o = n.length / 2;
      this.grow((r + 1) * o, r * (o - 1) * 6);
      let s = this.vcount;
      for (let s = 0; s <= r; s++) {
        let c = (s / r) * Math.PI * 2,
          l = Math.cos(c),
          u = Math.sin(c);
        for (let c = 0; c < o; c++) {
          let d = n[c * 2],
            f = n[c * 2 + 1],
            p = Math.max(0, c - 1),
            m = Math.min(o - 1, c + 1),
            h = n[m * 2] - n[p * 2],
            g = n[m * 2 + 1] - n[p * 2 + 1],
            _ = Math.hypot(h, g) || 1,
            v = g / _,
            y = -h / _;
          this.v(
            e + l * d,
            f,
            t + u * d,
            l * v,
            y,
            u * v,
            i + (a - i) * (s / r),
            c / (o - 1),
          );
        }
      }
      for (let e = 0; e < r; e++)
        for (let t = 0; t < o - 1; t++) {
          let n = s + e * o + t,
            r = s + (e + 1) * o + t;
          (this.tri(n, r + 1, r), this.tri(n, n + 1, r + 1));
        }
    }
    sphere(e, t, n, r, i = 10, a = 7, o = 1, s = 1, c = 1) {
      this.grow((i + 1) * (a + 1), i * a * 6);
      let l = this.vcount;
      for (let l = 0; l <= a; l++) {
        let u = (l / a) * Math.PI,
          d = Math.sin(u),
          f = Math.cos(u);
        for (let u = 0; u <= i; u++) {
          let p = (u / i) * Math.PI * 2,
            m = Math.cos(p) * d,
            h = f,
            g = Math.sin(p) * d;
          this.v(
            e + m * r * s,
            t + h * r * o,
            n + g * r * c,
            m / s,
            h / o,
            g / c,
            u / i,
            1 - l / a,
          );
        }
      }
      for (let e = 0; e < a; e++)
        for (let t = 0; t < i; t++) {
          let n = l + e * (i + 1) + t,
            r = n + i + 1;
          (this.tri(n, n + 1, r), this.tri(n + 1, r + 1, r));
        }
    }
    disc(e, t, n, r, i = 16, a = !0) {
      this.grow(i + 2, i * 3);
      let o = this.v(e, t, n, 0, a ? 1 : -1, 0, 0.5, 0.5),
        s = this.vcount;
      for (let o = 0; o <= i; o++) {
        let s = (o / i) * Math.PI * 2;
        this.v(
          e + Math.cos(s) * r,
          t,
          n + Math.sin(s) * r,
          0,
          a ? 1 : -1,
          0,
          0.5 + Math.cos(s) * 0.5,
          0.5 - Math.sin(s) * 0.5,
        );
      }
      for (let e = 0; e < i; e++)
        a ? this.tri(o, s + e + 1, s + e) : this.tri(o, s + e, s + e + 1);
    }
    extrude(e, t, n, r = !0) {
      let i = e.length / 2;
      this.grow(i * 2 + i * 4, i * 12);
      let a = this.vcount,
        o = 1 / 0,
        s = -1 / 0,
        c = 1 / 0,
        l = -1 / 0;
      for (let t = 0; t < i; t++)
        ((o = Math.min(o, e[t * 2])),
          (s = Math.max(s, e[t * 2])),
          (c = Math.min(c, e[t * 2 + 1])),
          (l = Math.max(l, e[t * 2 + 1])));
      let u = (e) => (e - o) / (s - o || 1),
        d = (e) => (e - c) / (l - c || 1);
      for (let n = 0; n < i; n++)
        this.v(
          e[n * 2],
          e[n * 2 + 1],
          t,
          0,
          0,
          -1,
          1 - u(e[n * 2]),
          d(e[n * 2 + 1]),
        );
      for (let e = 1; e < i - 1; e++) this.tri(a, a + e + 1, a + e);
      let f = this.vcount;
      for (let t = 0; t < i; t++)
        this.v(
          e[t * 2],
          e[t * 2 + 1],
          n,
          0,
          0,
          1,
          u(e[t * 2]),
          d(e[t * 2 + 1]),
        );
      for (let e = 1; e < i - 1; e++) this.tri(f, f + e, f + e + 1);
      if (r)
        for (let r = 0; r < i; r++) {
          let a = (r + 1) % i,
            o = e[r * 2],
            s = e[r * 2 + 1],
            c = e[a * 2],
            l = e[a * 2 + 1];
          this.quad(o, s, t, c, l, t, c, l, n, o, s, n);
        }
    }
    shade(e, t, n) {
      for (let r = e; r < t; r++) {
        let e = r * 3,
          t = n(
            this.P[e],
            this.P[e + 1],
            this.P[e + 2],
            this.N[e],
            this.N[e + 1],
            this.N[e + 2],
          ),
          i = r * 4;
        ((this.C[i] *= t), (this.C[i + 1] *= t), (this.C[i + 2] *= t));
      }
    }
    bakeLight(e, t, n) {
      let r = n.lights ?? [],
        [i, a, o] = n.amb,
        s = n.dir,
        c = 1;
      s && (c = Math.hypot(s.x, s.y, s.z) || 1);
      let l = s ? s.k / c : 0,
        u = s ? s.x : 0,
        d = s ? s.y : 0,
        f = s ? s.z : 0,
        p = s ? (s.r ?? 1) : 0,
        m = s ? (s.g ?? 1) : 0,
        h = s ? (s.b ?? 1) : 0,
        g = r.length,
        _ = Dr.length >= g * 8 ? Dr : (Dr = new Float64Array(g * 8));
      for (let e = 0; e < g; e++) {
        let t = r[e],
          n = e * 8;
        ((_[n] = t.x),
          (_[n + 1] = t.y),
          (_[n + 2] = t.z),
          (_[n + 3] = t.r),
          (_[n + 4] = 1 / t.r),
          (_[n + 5] = t.c[0]),
          (_[n + 6] = t.c[1]),
          (_[n + 7] = t.c[2]));
      }
      let v = this.P,
        y = this.N;
      for (let r = e; r < t; r++) {
        let e = r * 3,
          t = r * 4,
          c = v[e],
          b = v[e + 1],
          x = v[e + 2],
          S = y[e],
          C = y[e + 1],
          w = y[e + 2],
          T = i,
          E = a,
          D = o;
        if (s) {
          let e = Math.max(0, S * u + C * d + w * f) * l;
          ((T += e * p), (E += e * m), (D += e * h));
        }
        for (let e = 0; e < g; e++) {
          let t = e * 8,
            n = _[t + 3],
            r = _[t] - c;
          if (r > n || r < -n) continue;
          let i = _[t + 2] - x;
          if (i > n || i < -n) continue;
          let a = _[t + 1] - b,
            o = r * r + a * a + i * i;
          if (o >= n * n) continue;
          let s = Math.sqrt(o),
            l = 1 - s * _[t + 4],
            u = s > 1e-4 ? Math.max(0, (S * r + C * a + w * i) / s) : 1,
            d = l * l * (0.3 + 0.7 * u);
          ((T += _[t + 5] * d), (E += _[t + 6] * d), (D += _[t + 7] * d));
        }
        if (n.floorAO) {
          let e = Math.min(1, Math.max(0, b / n.floorAO)),
            t = 0.78 + 0.22 * e * (2 - e);
          ((T *= t), (E *= t), (D *= t));
        }
        let O = this.C[t + 3];
        ((this.C[t] *= T + (1 - T) * O),
          (this.C[t + 1] *= E + (1 - E) * O),
          (this.C[t + 2] *= D + (1 - D) * O));
      }
    }
    toGeometry() {
      return e.merge([this]).geo;
    }
    static merge(t) {
      let n = 0,
        r = 0;
      for (let e of t) ((n += e.vcount), (r += e.icount));
      let i = new Float32Array(n * 3),
        a = new Float32Array(n * 3),
        o = new Float32Array(n * 2),
        s = new Float32Array(n * 4),
        c = n > 65535 ? new Uint32Array(r) : new Uint16Array(r),
        l = [],
        u = [],
        d = 0,
        f = 0;
      for (let e of t) {
        let t = e.vcount;
        (i.set(e.P.subarray(0, t * 3), d * 3),
          a.set(e.N.subarray(0, t * 3), d * 3),
          o.set(e.T.subarray(0, t * 2), d * 2),
          s.set(e.C.subarray(0, t * 4), d * 4));
        let n = e.I;
        if (d === 0) c.set(n.subarray(0, e.icount), f);
        else for (let t = 0; t < e.icount; t++) c[f + t] = n[t] + d;
        (l.push([d, t]), u.push([f, e.icount]), (d += t), (f += e.icount));
      }
      let p = new V();
      return (
        p.setAttribute(`position`, new H(i, 3)),
        p.setAttribute(`normal`, new H(a, 3)),
        p.setAttribute(`uv`, new H(o, 2)),
        p.setAttribute(`color`, new H(s, 4)),
        p.setIndex(new H(c, 1)),
        e.bounds(p, i, n),
        { geo: p, verts: l, tris: u }
      );
    }
    static bounds(e, t, n) {
      let r = 1 / 0,
        i = 1 / 0,
        a = 1 / 0,
        o = -1 / 0,
        s = -1 / 0,
        c = -1 / 0;
      for (let e = 0; e < n * 3; e += 3) {
        let n = t[e],
          l = t[e + 1],
          u = t[e + 2];
        (n < r && (r = n),
          n > o && (o = n),
          l < i && (i = l),
          l > s && (s = l),
          u < a && (a = u),
          u > c && (c = u));
      }
      if (n) {
        let l = (r + o) / 2,
          u = (i + s) / 2,
          f = (a + c) / 2,
          p = 0;
        for (let e = 0; e < n * 3; e += 3) {
          let n = t[e] - l,
            r = t[e + 1] - u,
            i = t[e + 2] - f,
            a = n * n + r * r + i * i;
          a > p && (p = a);
        }
        ((e.boundingBox = new xe(new U(r, i, a), new U(o, s, c))),
          (e.boundingSphere = new d(new U(l, u, f), Math.sqrt(p))));
      } else ((e.boundingBox = new xe()), (e.boundingSphere = new d()));
      return e;
    }
    get triangles() {
      return this.icount / 3;
    }
  };
function zr(e, t, n, r, i, a, o, s, c = 0.35) {
  let l = o.tile ?? 0,
    u = Vr(t, r, l, c),
    d = Vr(n, i, l, c);
  o.reg ? e.tex(o.reg, o.hex, o.emit ?? 0) : e.col(o.hex, o.emit ?? 0);
  for (let o = 0; o + 1 < u.length; o++)
    for (let c = 0; c + 1 < d.length; c++) {
      let f = u[o],
        p = u[o + 1],
        m = d[c],
        h = d[c + 1],
        [g, _] = l
          ? Hr(f - t, p - t, l)
          : [(f - t) / (r - t), (p - t) / (r - t)],
        [v, y] = l
          ? Hr(m - n, h - n, l)
          : [(m - n) / (i - n), (h - n) / (i - n)];
      e.rectY(f, m, p, h, a, s ? 1 : -1, g, v, _, y);
    }
}
function Br(e, t, n, r, i, a, o, s, c = 0.35, l = o) {
  let u = s.tile ?? 0,
    d = Vr(r, i, u, c),
    f = [a];
  for (let e of [0.3, l - 0.3]) e > a + 0.01 && e < o - 0.01 && f.push(e);
  if (u)
    for (let e = Math.ceil((a + 0.001) / u) * u; e < o - 0.001; e += u)
      f.push(e);
  (f.push(o),
    f.sort((e, t) => e - t),
    s.reg ? e.tex(s.reg, s.hex, s.emit ?? 0) : e.col(s.hex, s.emit ?? 0));
  for (let s = 0; s + 1 < d.length; s++)
    for (let c = 0; c + 1 < f.length; c++) {
      let l = d[s],
        p = d[s + 1],
        m = f[c],
        h = f[c + 1];
      if (h - m < 0.001) continue;
      let [g, _] = u
          ? Hr(l - r, p - r, u)
          : [(l - r) / (i - r), (p - r) / (i - r)],
        [v, y] = u ? Hr(m, h, u) : [(m - a) / (o - a), (h - a) / (o - a)];
      switch (t) {
        case `front`:
          e.rectZ(l, m, p, h, n, 1, g, v, _, y);
          break;
        case `back`:
          (([g, _] = [1 - _, 1 - g]), e.rectZ(l, m, p, h, n, -1, g, v, _, y));
          break;
        case `left`:
          (([g, _] = [1 - _, 1 - g]), e.rectX(l, m, p, h, n, 1, g, v, _, y));
          break;
        case `right`:
          e.rectX(l, m, p, h, n, -1, g, v, _, y);
      }
    }
}
function Vr(e, t, n, r) {
  let i = [e];
  if (n)
    for (let r = Math.ceil((e + 0.001) / n) * n; r < t - 0.001; r += n)
      i.push(r);
  (r > 0 && t - e > r * 2.5 && i.push(e + r, t - r),
    i.push(t),
    i.sort((e, t) => e - t));
  let a = [];
  for (let e of i) (!a.length || e - a[a.length - 1] > 0.001) && a.push(e);
  return a;
}
function Hr(e, t, n) {
  let r = Math.floor((e + 1e-4) / n),
    i = e / n - r,
    a = t / n - r;
  return [i, Math.min(1, a)];
}
function Ur(e, t) {
  let n = e.vcount,
    { x0: r, z0: i, x1: a, z1: o, h: s } = t;
  (zr(e, r, i, a, o, 0, t.floor, !0),
    t.ceiling && zr(e, r, i, a, o, s, t.ceiling, !1));
  let c = t.openings ?? [],
    l = [
      [`front`, i, r, a],
      [`back`, o, r, a],
      [`left`, r, i, o],
      [`right`, a, i, o],
    ];
  for (let [n, r, i, a] of l) {
    let o = t.walls && n in t.walls ? t.walls[n] : t.wall;
    if (!o) continue;
    let l = c.filter((e) => e.wall === n).sort((e, t) => e.a - t.a),
      u = i;
    for (let t of l)
      (t.a > u + 0.001 && Br(e, n, r, u, t.a, 0, s, o, 0.35, s),
        t.y0 > 0.01 && Br(e, n, r, t.a, t.b, 0, t.y0, o, 0.35, s),
        t.y1 < s - 0.01 && Br(e, n, r, t.a, t.b, t.y1, s, o, 0.35, s),
        (u = t.b));
    if ((a > u + 0.001 && Br(e, n, r, u, a, 0, s, o, 0.35, s), t.baseboard)) {
      e.col(t.baseboard.hex);
      let o = t.baseboard.h,
        s = 0.015,
        c = i,
        u = [];
      for (let e of l) e.y0 < o && (e.a > c && u.push([c, e.a]), (c = e.b));
      a > c && u.push([c, a]);
      for (let [t, i] of u)
        n === `front`
          ? e.box(t, 0, r, i, o, r + s)
          : n === `back`
            ? e.box(t, 0, r - s, i, o, r)
            : n === `left`
              ? e.box(r, 0, t, r + s, o, i)
              : e.box(r - s, 0, t, r, o, i);
    }
  }
  let u = e.vcount,
    d = t.ao ?? 0.3;
  if (d > 0) {
    let t = [0, 0, 0, 0];
    e.shade(n, u, (e, n, c) => {
      if (
        ((t[0] = Math.abs(e - r)),
        (t[1] = Math.abs(a - e)),
        (t[2] = Math.abs(c - i)),
        (t[3] = Math.abs(o - c)),
        t.sort((e, t) => e - t),
        n < 0.01 || n > s - 0.01)
      ) {
        let e =
          Math.exp(-t[0] / 0.3) * (n < 0.01 ? 1 : 0.7) +
          Math.exp(-t[1] / 0.4) * 0.35 * Math.exp(-t[0] / 0.3);
        return 1 - d * Math.min(1, e);
      }
      let l = Math.exp(-Math.min(n, s - n) / 0.28),
        u = Math.exp(-t[1] / 0.35);
      return 1 - d * Math.min(1, Math.max(l * 0.75, u * 0.55) + l * u * 0.3);
    });
  }
  return [n, u];
}
function Wr(e, t, n, r, i, a, o, s = {}) {
  let c = s.body ?? 15330284,
    l = s.back ?? 14014940,
    u = o.length;
  (e.col(4869973),
    e.box(t, 0, r, n, 0.12, r + i, 39),
    e.col(l),
    e.box(t, 0.12, r + i - 0.04, n, a, r + i, 39),
    e.col(c),
    e.box(t, 0, r, t + 0.04, a, r + i, 63),
    e.box(n - 0.04, 0, r, n, a, r + i, 63));
  let d = s.seg ?? 0.9,
    f = (a - 0.2) / u;
  for (let a = 0; a < u; a++) {
    let l = 0.12 + a * f;
    (e.col(c), e.box(t + 0.04, l, r, n - 0.04, l + 0.03, r + i - 0.04, 36));
    let u = Math.min(f - 0.07, 0.34 + (a === 0 ? 0.05 : 0)),
      p = Math.max(1, Math.round((n - t - 0.08) / d)),
      m = (n - t - 0.08) / p;
    for (let n = 0; n < p; n++) {
      let s = t + 0.04 + n * m,
        c = s + m,
        d = ((n * 7 + a * 3) % 5) * 0.012;
      (e.tex(o[a], 16777215, 0.02),
        e.rectZ(s, l + 0.03, c, l + 0.03 + u, r + 0.03 + d, -1),
        e.col(10133670),
        e.rectY(s, r + 0.03 + d, c, r + i - 0.05, l + 0.03 + u, 1));
    }
    s.edge &&
      (e.tex(s.edge, 16777215, 0.02),
      e.box(t + 0.04, l - 0.045, r - 0.012, n - 0.04, l + 0.03, r + 0.01, 36));
  }
  s.top !== !1 && (e.col(c), e.box(t, a, r, n, a + 0.03, r + i, 63));
}
function Gr(e, t, n, r, i, a, o, s = {}) {
  let c = 0.45;
  (e
    .push()
    .translate(t, 0, (n + r) / 2)
    .rotateY(Math.PI / 2),
    Wr(e, -(r - n) / 2, (r - n) / 2, -0.45, c, i, a, {
      edge: s.edge,
      body: s.body,
      top: !1,
    }),
    e.pop(),
    e
      .push()
      .translate(t, 0, (n + r) / 2)
      .rotateY(-Math.PI / 2),
    Wr(e, -(r - n) / 2, (r - n) / 2, -0.45, c, i, o, {
      edge: s.edge,
      body: s.body,
      top: !1,
    }),
    e.pop(),
    e.col(s.body ?? 15330284),
    e.box(t - c, i, n, t + c, i + 0.04, r, 63));
  for (let [a, o] of [
    [n, -1],
    [r, 1],
  ]) {
    e.col(13685976);
    let n = o < 0 ? a - 0.04 : a,
      r = o < 0 ? a : a + 0.04;
    (e.box(t - c, 0, n, t + c, i, r, 63),
      s.end &&
        (e.tex(s.end, 16777215, 0.05),
        o < 0
          ? e.rectZ(t - c + 0.04, 0.2, t + c - 0.04, i - 0.15, a - 0.045, -1)
          : e.rectZ(t - c + 0.04, 0.2, t + c - 0.04, i - 0.15, a + 0.045, 1)));
  }
}
function Kr(e, t, n, r, i, a, o, s = {}) {
  let c = s.depth ?? 0.75,
    l = s.frame ?? 2764081,
    u = Math.max(1, Math.round((r - n) / 0.78)),
    d = (r - n) / u,
    f = i - c;
  (e.col(l),
    e.box(n, 0, f, r, 0.22, i, 36),
    e.box(n, a - 0.34, f, r, a, i, 44),
    e.box(n - 0.05, 0, f, n, a, i, 63),
    e.box(r, 0, f, r + 0.05, a, i, 63),
    s.header &&
      (e.tex(s.header, 16777215, 0.75, 1.1),
      e.rectZ(n + 0.02, a - 0.31, r - 0.02, a - 0.03, f - 0.012, -1)));
  for (let r = 0; r < u; r++) {
    let i = n + r * d,
      s = i + d;
    (e.tex(o[r % o.length], 16777215, 0.45, 1.08),
      e.rectZ(i + 0.03, 0.24, s - 0.03, a - 0.36, f + 0.18, -1),
      e.col(14674158, 0.35),
      e.rectX(f, 0.22, f + 0.18, a - 0.34, i + 0.03, 1),
      e.rectX(f, 0.22, f + 0.18, a - 0.34, s - 0.03, -1),
      e.col(16055295, 0.8, 1.6),
      e.rectY(i + 0.03, f, s - 0.03, f + 0.18, a - 0.36, -1),
      e.col(l),
      e.box(s - 0.025, 0.22, f - 0.03, s + 0.025, a - 0.34, f, 35),
      e.col(13225683),
      e.box(i + 0.07, 0.8, f - 0.07, i + 0.1, 1.55, f - 0.03, 63),
      t.col(14217460, 0.12),
      (t.both = !0),
      t.rectZ(i + 0.03, 0.24, s - 0.03, a - 0.36, f - 0.015, -1),
      (t.both = !1));
  }
}
function qr(e, t, n, r = 0.72, i = 12597547) {
  (e.col(9343896),
    e.cyl(t, n, 0.2, 0.18, 0, 0.03, 10, !0),
    e.cyl(t, n, 0.025, 0.025, 0.03, r - 0.05, 6, !1),
    e.col(i),
    e.cyl(t, n, 0.17, 0.17, r - 0.06, r, 12, !0));
}
function Jr(e, t, n, r, i, a, o, s, c, l, u, d = 3.2, f = 16777215) {
  for (let p = 0; p < o; p++)
    for (let m = 0; m < s; m++) {
      let h = t + ((p + 0.5) * (r - t)) / o,
        g = n + ((m + 0.5) * (i - n)) / s;
      (e.col(12172996),
        e.box(
          h - c / 2 - 0.03,
          a - 0.03,
          g - l / 2 - 0.03,
          h + c / 2 + 0.03,
          a - 0.005,
          g + l / 2 + 0.03,
          59,
        ),
        u ? e.tex(u, f, 1, d) : e.col(f, 1, d),
        e.rectY(h - c / 2, g - l / 2, h + c / 2, g + l / 2, a - 0.032, -1));
    }
}
function Yr(e, t, n, r, i, a, o, s = 0, c = 0.15, l = 0.4) {
  (e.push().translate(n, r, i).rotateY(s),
    e.col(10133670),
    e.box(-a / 2 + 0.05, o / 2, -0.004, -a / 2 + 0.06, o / 2 + l, 0.004),
    e.box(a / 2 - 0.06, o / 2, -0.004, a / 2 - 0.05, o / 2 + l, 0.004),
    e.col(16777215, c),
    e.box(-a / 2, -o / 2, -0.012, a / 2, o / 2, 0.012, 15),
    e.tex(t, 16777215, c),
    e.rectZ(-a / 2, -o / 2, a / 2, o / 2, -0.013, -1),
    e.rectZ(-a / 2, -o / 2, a / 2, o / 2, 0.013, 1),
    e.pop());
}
function Xr(e, t, n, r = 1, i = 15262422, a = 4160058) {
  (e.col(i),
    e.lathe(t, n, [0.14 * r, 0, 0.19 * r, 0.34 * r, 0.2 * r, 0.38 * r], 10),
    e.col(3812127),
    e.disc(t, 0.36 * r, n, 0.18 * r, 10),
    e.col(a, 0.02));
  for (let i = 0; i < 7; i++) {
    let a = i * 2.4,
      o = (0.08 + (i % 3) * 0.05) * r;
    e.sphere(
      t + Math.cos(a) * o,
      (0.55 + (i % 4) * 0.13) * r,
      n + Math.sin(a) * o,
      (0.17 - (i % 3) * 0.02) * r,
      7,
      5,
      0.75,
    );
  }
}
function Zr(e, t, n, r = 0, i = 12597547, a = 9343896) {
  (e.push().translate(t, 0, n).rotateY(r), e.col(a));
  for (let [t, n] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    e.box(
      t * 0.19 - 0.015,
      0,
      n * 0.19 - 0.015,
      t * 0.19 + 0.015,
      0.44,
      n * 0.19 + 0.015,
      51,
    );
  for (let t of [-1, 1])
    e.box(
      t * 0.19 - 0.015,
      0.44,
      0.175,
      t * 0.19 + 0.015,
      0.86,
      0.19 + 0.015,
      51,
    );
  (e.col(i),
    e.box(-0.21, 0.42, -0.21, 0.21, 0.46, 0.21, 63),
    e.box(-0.2, 0.62, 0.17, 0.2, 0.84, 0.2, 63),
    e.pop());
}
function Qr(e, t) {
  (e.col(2895667),
    e.box(-0.22, 0, -0.1, 0.22, 0.12, 0.25),
    e.box(-0.03, 0.12, 0.06, 0.03, 0.34, 0.1),
    e.push().translate(0, 0.36, 0.08).rotateX(0.35),
    e.col(1776928),
    e.box(-0.2, -0.13, -0.02, 0.2, 0.13, 0.02),
    t ? e.tex(t, 16777215, 0.9, 1.2) : e.col(3903446, 0.9),
    e.rectZ(-0.18, -0.11, 0.18, 0.11, 0.021, 1),
    e.pop(),
    e.col(1776928),
    e.box(-0.12, 0.12, -0.12, 0.12, 0.3, -0.08),
    e.col(5227511, 0.9),
    e.rectZ(-0.1, 0.14, 0.1, 0.28, -0.121, -1));
}
var $r = class {
    px;
    py;
    pz;
    facing;
    c;
    s;
    constructor(e, t, n, r) {
      ((this.px = e),
        (this.py = t),
        (this.pz = n),
        (this.facing = r),
        (this.c = Math.cos(r)),
        (this.s = Math.sin(r)));
    }
    wx(e, t) {
      return this.px + e * this.c - t * this.s;
    }
    wz(e, t) {
      return this.pz + e * this.s + t * this.c;
    }
    lx(e, t) {
      let n = e - this.px,
        r = t - this.pz;
      return n * this.c + r * this.s;
    }
    lz(e, t) {
      let n = e - this.px,
        r = t - this.pz;
      return -n * this.s + r * this.c;
    }
    heading(e) {
      return this.facing + e;
    }
    place(e) {
      (e.position.set(this.px, this.py, this.pz),
        e.rotation.set(0, -this.facing, 0),
        e.updateMatrix(),
        e.updateMatrixWorld(!0));
    }
    box(e, t, n, r, i, a, o, s = `wall`) {
      let c = (t + r) / 2,
        l = (n + i) / 2;
      return e.addOBB(
        this.wx(c, l),
        this.wz(c, l),
        Math.abs(r - t) / 2,
        Math.abs(i - n) / 2,
        this.facing,
        this.py + a,
        this.py + o,
        s,
      );
    }
    circle(e, t, n, r, i, a, o = `pole`) {
      return e.addCircle(
        this.wx(t, n),
        this.wz(t, n),
        r,
        this.py + i,
        this.py + a,
        o,
      );
    }
    aabb(e, t, n, r) {
      let i = [this.wx(e, t), this.wx(n, t), this.wx(n, r), this.wx(e, r)],
        a = [this.wz(e, t), this.wz(n, t), this.wz(n, r), this.wz(e, r)];
      return {
        minX: Math.min(...i),
        maxX: Math.max(...i),
        minZ: Math.min(...a),
        maxZ: Math.max(...a),
      };
    }
    inside(e, t, n, r, i, a, o = 0) {
      let s = this.lx(e, t),
        c = this.lz(e, t);
      return s >= n - o && s <= i + o && c >= r - o && c <= a + o;
    }
  },
  ei = 0,
  ti = class {
    disabled;
    added;
    on = !1;
    constructor(e, t) {
      ((this.disabled = e), (this.added = t));
      for (let e of t) e.disabled = !0;
    }
    set(e) {
      if (e !== this.on) {
        this.on = e;
        for (let t of this.disabled) t.disabled = e;
        for (let t of this.added) t.disabled = !e;
      }
    }
    get active() {
      return this.on;
    }
  };
function ni(e, t, n = []) {
  let r = Math.max(e.minX, t.minX),
    i = Math.min(e.maxX, t.maxX),
    a = Math.max(e.minZ, t.minZ),
    o = Math.min(e.maxZ, t.maxZ);
  return r >= i || a >= o
    ? (n.push(e), n)
    : (e.minZ < a - 0.001 &&
        n.push({ minX: e.minX, maxX: e.maxX, minZ: e.minZ, maxZ: a }),
      e.maxZ > o + 0.001 &&
        n.push({ minX: e.minX, maxX: e.maxX, minZ: o, maxZ: e.maxZ }),
      e.minX < r - 0.001 && n.push({ minX: e.minX, maxX: r, minZ: a, maxZ: o }),
      e.maxX > i + 0.001 && n.push({ minX: i, maxX: e.maxX, minZ: a, maxZ: o }),
      n);
}
function ri(e, t, n, r) {
  let i = [],
    a = e.query(t.minX, t.minZ, t.maxX, t.maxZ, i),
    o = [];
  for (let e = 0; e < a; e++) {
    let n = i[e];
    n.disabled ||
      n.maxX <= t.minX ||
      n.minX >= t.maxX ||
      n.maxZ <= t.minZ ||
      n.minZ >= t.maxZ ||
      (r(n) && o.push(n));
  }
  let s = [],
    c = [];
  for (let r of o)
    if (r.kind === ei) {
      ((c.length = 0), ni(r, t, c));
      for (let t of c)
        s.push(e.addBox(t.minX, t.minZ, t.maxX, t.maxZ, r.minY, r.maxY, r.tag));
      if (r.maxY > n + 0.02) {
        let i = Math.max(r.minX, t.minX),
          a = Math.min(r.maxX, t.maxX),
          o = Math.max(r.minZ, t.minZ),
          c = Math.min(r.maxZ, t.maxZ);
        s.push(e.addBox(i, o, a, c, Math.max(r.minY, n), r.maxY, r.tag));
      }
    }
  return new ti(o, s);
}
var ii = 0.75,
  ai = 1.6;
function oi(e, t, n, r) {
  let i = (Math.atan2(n - e, -(r - t)) * 180) / Math.PI;
  return i < 0 ? i + 360 : i;
}
function si(e, t) {
  let n = Math.abs((((e - t) % 360) + 360) % 360);
  return n > 180 ? 360 - n : n;
}
function ci(e, t, n) {
  let r = t.plan;
  if (e.kind === `landmark`) {
    let t = r.landmark(e.id);
    return t ? { x: t.x, z: t.z, exact: !0 } : null;
  }
  if (e.kind === `site`) {
    let t = n.get(e.id);
    return t && t.ok ? { x: t.x, z: t.z, exact: !0 } : null;
  }
  let i = r.mrtStations.find((t) => t.id === e.id);
  if (e.exit !== void 0 && t.entrances) {
    let n = String(e.exit);
    for (let r of t.entrances)
      if (r.stationId === e.id && r.exit !== void 0 && String(r.exit) === n)
        return { x: r.x ?? r.cx, z: r.z ?? r.cz, exact: !0 };
  }
  return i ? { x: i.ex, z: i.ez, exact: e.exit === void 0 } : null;
}
function li(e, t, n) {
  let r = (e.bearing * Math.PI) / 180,
    i = e.dist * n;
  return { x: t.x + Math.sin(r) * i, z: t.z - Math.cos(r) * i };
}
function ui(e) {
  let t = Math.max(0, Math.min(1, (Math.abs(e) - 200) / 600));
  return { min: vi(ii + -0.33 * t), max: vi(ai + 0.09999999999999987 * t) };
}
function di(e, t) {
  let n = e.tolDeg ?? 35,
    r = (Math.atan2(10, Math.max(t, 1)) * 180) / Math.PI;
  return _i(Math.min(180, n + r));
}
function fi(e, t) {
  let n = _i(si(t.planBearing, e.bearing)),
    r = di(e, t.planDist),
    i = ui(e.dist),
    a = t.expDist > 0 ? t.planDist / t.expDist : t.planDist < 1 ? 1 : 1 / 0,
    o = Math.abs(t.planDist - t.expDist) <= 8;
  return {
    bearingErr: n,
    tolDeg: r,
    bearingOk: t.planDist < 4 || n <= r,
    ratio: vi(a),
    localScale: e.dist > 0 ? vi(t.planDist / e.dist) : 0,
    band: i,
    distOk: o || (a >= i.min && a <= i.max),
    slack: o,
  };
}
function pi(e, t) {
  let n = fi(e, t),
    r = [];
  if (
    (n.bearingOk ||
      r.push(
        `bearing ${t.planBearing}° vs real ${t.expBearing}° (±${n.tolDeg}°)`,
      ),
    !n.distOk)
  ) {
    let i = e.dist > 0 ? t.expDist / e.dist : 0,
      a = Math.round(n.band.min * i * 100) / 100,
      o = Math.round(n.band.max * i * 100) / 100;
    r.push(
      `dist ${t.planDist} m vs ${t.expDist} m nominal — local scale ${n.localScale}× of ${e.dist} m real, outside the ${a}–${o}× band (compression is non-uniform: band is tight ≤200 m real and widens beyond, nominal ${Math.round(i * 100) / 100}×)`,
    );
  }
  return `anchor-off ${t.id}: ${r.join(` · `) || `unknown`}`;
}
function mi(e, t, n, r, i) {
  let a = _i(oi(t.x, t.z, n, r)),
    o = _i(Math.hypot(n - t.x, r - t.z)),
    s = _i(e.dist * i),
    c = fi(e, { planBearing: a, planDist: o, expDist: s }),
    l = c.bearingOk && c.distOk;
  return {
    id: `${e.kind}:${e.id}${e.exit === void 0 ? `` : `#${e.exit}`}`,
    planBearing: a,
    planDist: o,
    expBearing: e.bearing,
    expDist: s,
    ok: l,
  };
}
function hi(e, t, n, r) {
  let i = [];
  for (let a of e ?? []) {
    let e = ci(a, t, n);
    if (!e) {
      r.push(`anchor-missing ${a.kind}:${a.id}`);
      continue;
    }
    (e.exact ||
      r.push(
        `anchor-exit-missing mrt:${a.id}#${a.exit} (station entrance used)`,
      ),
      i.push({ ref: a, at: e, expected: li(a, e, t.scale) }));
  }
  return i;
}
function gi(e, t, n) {
  if (!e.length) return 0;
  let r = 0;
  for (let i of e) r += Math.hypot(t - i.expected.x, n - i.expected.z);
  return r / e.length;
}
function _i(e) {
  return Math.round(e * 10) / 10;
}
function vi(e) {
  return Number.isFinite(e) ? Math.round(e * 1e3) / 1e3 : e;
}
function yi(e) {
  return e.roadGeometry === `polyline` ? `polyline-unsupported` : null;
}
function bi(e, t) {
  return e.zh === t.zh && (t.sec === void 0 || t.sec === null || e.n === t.sec);
}
function xi(e, t, n, r) {
  return Fi(t) ? n >= t.from - 0.5 && n <= t.to + 0.5 : bi(Ui(e, t, n), r);
}
function Si(e) {
  return e.sec ? `${e.zh} sec${e.sec}` : e.zh;
}
function Ci(e, t, n, r) {
  return e.axis === `x` ? { x: t, z: e.at + n * r } : { x: e.at + n * r, z: t };
}
function wi(e, t, n) {
  return e.axis === `x` ? t : n;
}
function Ti(e, t) {
  return e.axis === `x`
    ? t === `N`
      ? -1
      : +(t === `S`)
    : t === `E`
      ? 1
      : t === `W`
        ? -1
        : 0;
}
function Ei(e, t) {
  return e.axis === `x` ? (t < 0 ? `N` : `S`) : t < 0 ? `W` : `E`;
}
function Di(e, t) {
  return e.axis === `x`
    ? t > 0
      ? 0
      : Math.PI
    : t > 0
      ? -Math.PI / 2
      : Math.PI / 2;
}
function Oi(e, t, n, r, i, a) {
  let o = t - i / 2,
    s = t + i / 2,
    c = e.at + n * r,
    l = e.at + n * (r + a),
    u = Math.min(c, l),
    d = Math.max(c, l);
  return e.axis === `x`
    ? { minX: o, maxX: s, minZ: u, maxZ: d }
    : { minX: u, maxX: d, minZ: o, maxZ: s };
}
function ki(e, t = 0) {
  let n = e.halfTotal + t;
  return e.axis === `x`
    ? { minX: e.from - t, maxX: e.to + t, minZ: e.at - n, maxZ: e.at + n }
    : { minX: e.at - n, maxX: e.at + n, minZ: e.from - t, maxZ: e.to + t };
}
var Ai = 2.5;
function ji(e) {
  let t = e?.zh;
  if (typeof t != `string` || !t.startsWith(`lot:`)) return null;
  let [n, r] = t.slice(4).split(`|`),
    i = (n ?? ``).trim();
  return i ? { landmarkId: i, zh: r?.trim() || void 0 } : null;
}
var Mi = new WeakMap(),
  Ni = new WeakMap(),
  Pi = new WeakMap();
function Fi(e) {
  return Mi.has(e);
}
function Ii(e, t) {
  return { zh: e, sec: ``, en: t, n: 0, full: { zh: e, en: t } };
}
function Li(e, t) {
  let n = ji(t);
  if (!n) return [];
  let r = Pi.get(e);
  r || Pi.set(e, (r = new Map()));
  let i = `${n.landmarkId}|${n.zh ?? ``}`,
    a = r.get(i);
  if (a) return a;
  let o = [],
    s = e.landmark(n.landmarkId);
  if (s) {
    let t = Ii(n.zh ?? s.name.zh, s.name.en),
      r = s.x - s.w / 2,
      i = s.x + s.w / 2,
      a = s.z - s.d / 2,
      c = s.z + s.d / 2,
      l = [
        { axis: `x`, at: a, from: r, to: i },
        { axis: `x`, at: c, from: r, to: i },
        { axis: `z`, at: i, from: a, to: c },
        { axis: `z`, at: r, from: a, to: c },
      ];
    for (let r = 0; r < l.length; r++) {
      let i = l[r],
        a = {
          id: `site-lot-edge:${n.landmarkId}:${`NSEW`[r]}`,
          name: { zh: t.zh, en: t.en },
          axis: i.axis,
          at: i.at,
          from: i.from,
          to: i.to,
          kind: `minor`,
          lanesPerDir: 0,
          median: 0,
          sidewalk: 3,
          speedKmh: 0,
          pedestrian: !0,
          index: -1 - r,
          halfWidth: 0,
          halfTotal: Ai,
          major: !1,
        };
      (Mi.set(a, t),
        Ni.set(a, Ri(e, a)),
        o.push({ road: a, s0: i.from, s1: i.to }));
    }
  }
  return (r.set(i, o), o);
}
function Ri(e, t) {
  let n = [],
    r = 0;
  for (let i of e.roads) {
    if (i.axis === t.axis) continue;
    let e = i.at;
    if (
      e < t.from - i.halfTotal - 30 ||
      e > t.to + i.halfTotal + 30 ||
      t.at < i.from - i.halfTotal ||
      t.at > i.to + i.halfTotal
    )
      continue;
    let a = Ci(t, e, 0, 0),
      o = {
        id: t.index * 1e3 - r++,
        x: a.x,
        z: a.z,
        roads: [i],
        halfX: t.axis === `x` ? i.halfTotal : Ai,
        halfZ: t.axis === `x` ? Ai : i.halfTotal,
        signal: !1,
        out: [],
        in: [],
        kind: `tee`,
      };
    n.push({ node: o, s: e, half: t.axis === `x` ? o.halfX : o.halfZ });
  }
  return (n.sort((e, t) => e.s - t.s || e.node.id - t.node.id), n);
}
function zi(e) {
  let t = e.lanesPerDir ?? 0;
  if (t <= 0) return 3.5;
  let n = (e.halfWidth - (e.median ?? 0) / 2) / t;
  return n > 0.5 ? n : 3.5;
}
function Bi(e, t) {
  let n = zi(e),
    r = (e.median ?? 0) / 2 + 0.5 * n;
  return Math.max(0, Math.floor(2 * (r - t) * 10) / 10);
}
function Vi(e, t, n, r) {
  let i = t - n / 2,
    a = t + n / 2,
    o = e.at - r / 2,
    s = e.at + r / 2;
  return e.axis === `x`
    ? { minX: i, maxX: a, minZ: o, maxZ: s }
    : { minX: o, maxX: s, minZ: i, maxZ: a };
}
function Hi(e) {
  let t = e.halfWidth;
  return e.axis === `x`
    ? { minX: e.from, maxX: e.to, minZ: e.at - t, maxZ: e.at + t }
    : { minX: e.at - t, maxX: e.at + t, minZ: e.from, maxZ: e.to };
}
function Ui(e, t, n) {
  let r = Mi.get(t);
  if (r) return r;
  let i = Ci(t, n, 0, 0);
  return e.streetLabel(t, i.x, i.z);
}
function Wi(e, t, n) {
  let r = t.name.zh;
  if (!r.endsWith(`東西路`) && !r.endsWith(`南北路`)) return 1;
  let i = Ui(e, t, n).zh;
  return i.endsWith(`西路`) || i.endsWith(`北路`) ? -1 : 1;
}
function Gi(e, t, n) {
  let r = `${Ki(t)}|${n?.lane ? `L` : ``}`,
    i = qi.get(e);
  i || qi.set(e, (i = new Map()));
  let a = i.get(r);
  if (a) return a.slice();
  let o = Ji(e, t, n);
  return (i.set(r, o), o.slice());
}
function Ki(e) {
  return `${e?.zh ?? ``}#${e?.sec ?? ``}`;
}
var qi = new WeakMap();
function Ji(e, t, n) {
  let r = Li(e, t);
  if (r.length || ji(t)) return r.slice();
  let i = [];
  for (let n of Zi(e, t.zh)) {
    let r = ia(e, n),
      a = NaN,
      o = !1;
    for (let s = 0; s < r.length; s++) {
      let c = r[s],
        l =
          c.zh === t.zh &&
          (t.sec === void 0 || t.sec === null || c.n === t.sec);
      if (s > 0 && l !== o) {
        let u = aa(e, n, t, r[s - 1].s, c.s, o);
        l ? (a = u) : i.push({ road: n, s0: a, s1: u });
      } else s === 0 && l && (a = c.s);
      o = l;
    }
    o && i.push({ road: n, s0: a, s1: n.to });
  }
  if (n?.lane)
    for (let n of e.roads) {
      let r = n.lane;
      r &&
        r.parent.axis !== n.axis &&
        bi(Ui(e, r.parent, n.at), t) &&
        i.push({ road: n, s0: n.from, s1: n.to, lane: !0 });
    }
  return i;
}
var Yi = new WeakMap(),
  Xi = new WeakMap();
function Zi(e, t) {
  return Qi(e).get(t) ?? $i;
}
function Qi(e) {
  let t = Yi.get(e);
  if (!t) {
    t = new Map();
    for (let n of e.roads) {
      if (n.lane || !(n.to - n.from > 0)) continue;
      let r = Ui(e, n, n.from).zh,
        i = Ui(e, n, n.to).zh;
      for (let e of r === i ? [r] : [r, i]) {
        let r = t.get(e);
        (r || t.set(e, (r = [])), r.push(n));
      }
    }
    Yi.set(e, t);
  }
  return t;
}
var $i = [],
  ea = [``, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`, `十`],
  ta = /^(.+?)([一二三四五六七八九十]+)段$/,
  na = {
    牯嶺街: [
      { zh: `重慶南路`, sec: 3 },
      { zh: `重慶南路`, sec: 2 },
      { zh: `重慶南路` },
    ],
  };
function ra(e, t, n = !1) {
  for (let r of t) if (Gi(e, r, { lane: n }).some((e) => !e.lane)) return [];
  let r = [],
    i = new Set(t.map(Ki)),
    a = (t) => {
      let a = Ki(t);
      i.has(a) ||
        (i.add(a), Gi(e, t, { lane: n }).some((e) => !e.lane) && r.push(t));
    },
    o = [...Qi(e).keys()];
  for (let e of t) {
    let t = e?.zh;
    if (typeof t != `string` || !t || ji(e)) continue;
    let n = ta.exec(t)?.[1] ?? t,
      r = e.sec == null ? 0 : e.sec;
    r > 0 && ea[r] && a({ zh: `${n}${ea[r]}段` });
    let i = o
      .map((e) => {
        let t = ta.exec(e);
        return t && t[1] === n ? { zh: e, n: ea.indexOf(t[2]) } : null;
      })
      .filter((e) => !!e)
      .sort((e, t) => Math.abs(e.n - r) - Math.abs(t.n - r) || e.n - t.n);
    for (let e of i) a({ zh: e.zh });
    for (let e of na[n] ?? []) a(e);
  }
  return r;
}
function ia(e, t) {
  let n = Xi.get(e);
  n || Xi.set(e, (n = new Map()));
  let r = n.get(t);
  if (r) return r;
  let i = t.to - t.from,
    a = Math.max(1, Math.ceil(i / 24)),
    o = [];
  for (let n = 0; n <= a; n++) {
    let r = n === a ? t.to : t.from + (i * n) / a,
      s = Ui(e, t, r);
    o.push({ s: r, zh: s.zh, n: s.n });
  }
  return (n.set(t, o), o);
}
function aa(e, t, n, r, i, a) {
  let o = r,
    s = i;
  for (; Math.abs(s - o) > 0.25;) {
    let r = (o + s) / 2;
    bi(Ui(e, t, r), n) === a ? (o = r) : (s = r);
  }
  return (o + s) / 2;
}
var oa = new WeakMap();
function sa(e, t) {
  let n = Ni.get(t);
  if (n) return n;
  let r = oa.get(e);
  if (!r) {
    r = new Map();
    for (let t of e.nodes)
      for (let e of t.roads) {
        let n = r.get(e);
        (n || r.set(e, (n = [])),
          n.push({
            node: t,
            s: wi(e, t.x, t.z),
            half: e.axis === `x` ? t.halfX : t.halfZ,
          }));
      }
    for (let e of r.values())
      e.sort((e, t) => e.s - t.s || e.node.id - t.node.id);
    oa.set(e, r);
  }
  return r.get(t) ?? [];
}
function ca(e, t, n) {
  let r = la.get(e);
  r || la.set(e, (r = new Map()));
  let i = Ki(n);
  for (let e of t)
    i += `|${e.road.index}@${e.road.at.toFixed(1)}:${e.s0.toFixed(1)}:${e.s1.toFixed(1)}${e.lane ? `L` : ``}`;
  let a = r.get(i);
  if (a) return a.slice();
  let o = ua(e, t, n);
  return (r.set(i, o), o.slice());
}
var la = new WeakMap();
function ua(e, t, n) {
  let r = [],
    i = new Set();
  for (let a of t) {
    let t = Fi(a.road) ? 30 : 0;
    for (let o of sa(e, a.road))
      if (
        o.node.kind !== `end` &&
        !(o.s < a.s0 - o.half - 1 - t || o.s > a.s1 + o.half + 1 + t)
      )
        for (let t of o.node.roads) {
          if (t === a.road) continue;
          let s = `${a.road.index}:${o.node.id}`;
          i.has(s) ||
            (da(e, t, o.node, n) &&
              (i.add(s), r.push({ ...o, road: a.road, crossRoad: t })));
        }
  }
  return r;
}
function da(e, t, n, r) {
  let i = wi(t, n.x, n.z),
    a = t.axis === `x` ? n.halfX : n.halfZ;
  for (let n of [0, -(a + 4), a + 4]) {
    let a = i + n;
    if (!(a < t.from - 0.01 || a > t.to + 0.01) && bi(Ui(e, t, a), r))
      return !0;
  }
  return !1;
}
function fa(e) {
  (Pi.delete(e),
    qi.delete(e),
    Yi.delete(e),
    Xi.delete(e),
    oa.delete(e),
    la.delete(e));
}
var pa = 0.5,
  ma = new Set([`lot`, `plaza`, `park`]),
  ha = 1.2;
function ga(e) {
  if (!e || !e.length) return ma;
  let t = new Set(ma);
  for (let n of e) t.add(n);
  return t;
}
var _a = new Set([
  `convenience`,
  `bubbletea`,
  `breakfast`,
  `claw`,
  `pharmacy`,
  `lottery`,
]);
function va(e, t, n = 0) {
  return (
    e.maxX + n > t.minX &&
    e.minX - n < t.maxX &&
    e.maxZ + n > t.minZ &&
    e.minZ - n < t.maxZ
  );
}
function ya(e, t, n = 0) {
  return (
    e.minX >= t.minX - n &&
    e.maxX <= t.maxX + n &&
    e.minZ >= t.minZ - n &&
    e.maxZ <= t.maxZ + n
  );
}
function ba(e, t) {
  return {
    minX: e.minX + t,
    minZ: e.minZ + t,
    maxX: e.maxX - t,
    maxZ: e.maxZ - t,
  };
}
function xa(e, t, n = 0) {
  let r = e.hw + n,
    i = e.hl + n,
    a = Math.sin(e.heading),
    o = -Math.cos(e.heading),
    s = Math.cos(e.heading),
    c = Math.sin(e.heading),
    l = Math.abs(s) * r + Math.abs(a) * i,
    u = Math.abs(c) * r + Math.abs(o) * i;
  if (
    e.cx + l <= t.minX ||
    e.cx - l >= t.maxX ||
    e.cz + u <= t.minZ ||
    e.cz - u >= t.maxZ
  )
    return !1;
  let d = (t.minX + t.maxX) / 2,
    f = (t.minZ + t.maxZ) / 2,
    p = (t.maxX - t.minX) / 2,
    m = (t.maxZ - t.minZ) / 2,
    h = d - e.cx,
    g = f - e.cz;
  return !(
    Math.abs(h * s + g * c) >= r + Math.abs(s) * p + Math.abs(c) * m ||
    Math.abs(h * a + g * o) >= i + Math.abs(a) * p + Math.abs(o) * m
  );
}
function Sa(e, t, n, r) {
  let i = Math.max(r.minX, Math.min(e, r.maxX)),
    a = Math.max(r.minZ, Math.min(t, r.maxZ));
  return (e - i) ** 2 + (t - a) ** 2 < n * n;
}
function Ca(e, t, n = ma) {
  let r = t.minX + 0.3,
    i = t.maxX - 0.3,
    a = t.minZ + 0.3,
    o = t.maxZ - 0.3,
    s = (t.minX + t.maxX) / 2,
    c = (t.minZ + t.maxZ) / 2;
  for (let t of [r, s, i])
    for (let r of [a, c, o]) {
      let i = e.surfaceAt(t, r);
      if (!n.has(i)) return i;
    }
  return null;
}
function wa(e, t) {
  let n = Math.max(e.minX - t.maxX, t.minX - e.maxX),
    r = Math.max(e.minZ - t.maxZ, t.minZ - e.maxZ);
  return n >= 0 && r >= 0 ? Math.hypot(n, r) : Math.max(n, r);
}
function Ta(e, t) {
  let n = [],
    r = e.bounds,
    i = Math.min(
      t.minX - r.minX,
      r.maxX - t.maxX,
      t.minZ - r.minZ,
      r.maxZ - t.maxZ,
    );
  i < 10 &&
    n.push(
      `fringe-bounds lot is ${Math.max(0, i).toFixed(1)} m from the world edge (needs 10 m: the edge walls and the unbuilt apron are out there)`,
    );
  let a = (t.minX + t.maxX) / 2,
    o = (t.minZ + t.maxZ) / 2;
  return (
    typeof e.inCity == `function` &&
      !e.inCity(a, o) &&
      n.push(
        `fringe-outside-city lot centre is outside plan.inCity() — no streets, peds or traffic reach it`,
      ),
    n
  );
}
function Ea(e) {
  return {
    minX: e.x - e.w / 2,
    maxX: e.x + e.w / 2,
    minZ: e.z - e.d / 2,
    maxZ: e.z + e.d / 2,
  };
}
var Da = 96,
  Oa = new WeakMap(),
  ka = 0;
function Aa(e, t, n = Da) {
  let r = 1 / 0,
    i = 1 / 0,
    a = -1 / 0,
    o = -1 / 0,
    s = [];
  for (let n of e) {
    let e = t(n);
    (s.push(e),
      Number.isFinite(e.minX) &&
        Number.isFinite(e.minZ) &&
        ((r = Math.min(r, e.minX)),
        (i = Math.min(i, e.minZ)),
        (a = Math.max(a, e.maxX)),
        (o = Math.max(o, e.maxZ))));
  }
  Number.isFinite(r) || ((r = i = 0), (a = o = 0));
  let c = Math.max(1, Math.min(512, Math.ceil((a - r) / n) + 1)),
    l = Math.max(1, Math.min(512, Math.ceil((o - i) / n) + 1)),
    u = {
      minX: r,
      minZ: i,
      nx: c,
      nz: l,
      cell: n,
      cells: Array(c * l),
      all: e.slice(),
    };
  for (let t = 0; t < e.length; t++) {
    let a = s[t];
    if (!Number.isFinite(a.minX)) continue;
    let o = ja((a.minX - r) / n, c),
      d = ja((a.maxX - r) / n, c),
      f = ja((a.minZ - i) / n, l),
      p = ja((a.maxZ - i) / n, l);
    for (let n = f; n <= p; n++)
      for (let r = o; r <= d; r++) {
        let i = n * c + r;
        (u.cells[i] ??= []).push(e[t]);
      }
  }
  return u;
}
function ja(e, t) {
  let n = Math.floor(e);
  return n < 0 ? 0 : n >= t ? t - 1 : n;
}
function Ma(e, t, n, r) {
  let i = ++ka,
    a = ja((t.minX - n - e.minX) / e.cell, e.nx),
    o = ja((t.maxX + n - e.minX) / e.cell, e.nx),
    s = ja((t.minZ - n - e.minZ) / e.cell, e.nz),
    c = ja((t.maxZ + n - e.minZ) / e.cell, e.nz);
  for (let t = s; t <= c; t++)
    for (let n = a; n <= o; n++) {
      let a = e.cells[t * e.nx + n];
      if (a) for (let e of a) Oa.get(e) !== i && (Oa.set(e, i), r.push(e));
    }
  return r;
}
var Na = new WeakMap();
function Pa(e) {
  let t = Na.get(e);
  if (t) return t;
  let n = e.roads.map((e) => ({ road: e, rect: ki(e), way: Hi(e) })),
    r = [];
  for (let t of e.landmarks)
    t.zone !== `pedestrian` && r.push({ id: t.id, rect: Ea(t) });
  let i = e.mrtStations.map((e) => ({ id: e.id, x: e.ex, z: e.ez })),
    a = [];
  for (let t of e.pois)
    _a.has(t.kind) &&
      a.push({ id: String(t.id), kind: t.kind, x: t.x, z: t.z });
  let o = (e) => ({ minX: e.x, maxX: e.x, minZ: e.z, maxZ: e.z });
  return (
    (t = {
      roads: Aa(n, (e) => e.rect),
      blocks: Aa(e.blocks, (e) => e),
      landmarks: Aa(r, (e) => e.rect),
      mrt: Aa(i, o),
      pois: Aa(a, o),
    }),
    Na.set(e, t),
    t
  );
}
function Fa(e) {
  Pa(e);
}
function Ia(e) {
  Na.delete(e);
}
function La(e, t, n) {
  let r = e.plan,
    i = Pa(r),
    a = [];
  for (let e of Ma(i.roads, t, 0, Ra)) va(e.rect, t) && a.push(e);
  Ra.length = 0;
  let o = [];
  for (let e of Ma(i.blocks, t, pa, za)) va(e, t, 0.5) && o.push(e);
  za.length = 0;
  let s = [];
  for (let e of Ma(i.landmarks, t, 2, Ba)) va(e.rect, t, 2) && s.push(e);
  Ba.length = 0;
  let c = [];
  for (let n of [e.entrances, e.obstacles])
    if (n)
      for (let e of n) {
        let n = Math.max(e.hw, e.hl) * 1.5 + 3;
        e.cx + n > t.minX &&
          e.cx - n < t.maxX &&
          e.cz + n > t.minZ &&
          e.cz - n < t.maxZ &&
          c.push(e);
      }
  let l = [];
  for (let e of Ma(i.mrt, t, 4, Va)) Sa(e.x, e.z, 4, t) && l.push(e);
  return (
    (Va.length = 0),
    {
      plan: r,
      env: e,
      roads: a,
      blocks: o,
      landmarks: s,
      transit: c,
      mrt: l,
      placed: n.filter((e) => va(e.rect, t, 1)),
    }
  );
}
var Ra = [],
  za = [],
  Ba = [],
  Va = [],
  Ha = {};
function Ua(e, t, n = Ha) {
  let r = e.plan.bounds;
  if (t.minX < r.minX || t.maxX > r.maxX || t.minZ < r.minZ || t.maxZ > r.maxZ)
    return `bounds`;
  for (let r of e.roads)
    if (r.road !== n.host && va(r.rect, t, -0.05)) {
      if (va(r.way, t, -0.05)) return `road`;
      if (!n.allowSidewalk) return `sidewalk`;
    }
  if (n.requireBlock !== !1) {
    let n = !1;
    for (let r of e.blocks)
      if (ya(t, r, 0.5)) {
        n = !0;
        break;
      }
    if (!n) return `block`;
  }
  for (let n of e.landmarks) if (va(n.rect, t, 2)) return `landmark:${n.id}`;
  for (let n of e.transit) if (xa(n, t, 3)) return `transit`;
  for (let n of e.mrt) if (Sa(n.x, n.z, 4, t)) return `mrt:${n.id}`;
  for (let n of e.placed) if (va(n.rect, t, 1)) return `site:${n.id}`;
  if (e.env.claimed) {
    let n = ba(t, 0.2);
    if (e.env.claimed(n.minX, n.minZ, n.maxX, n.maxZ, `buildings`))
      return `district-claim`;
  }
  let i = Ca(e.plan, t, n.surfaces ?? ma);
  return i ? `surface:${i}` : null;
}
var Wa = [
  `road`,
  `sidewalk`,
  `claim`,
  `landmark`,
  `mrt`,
  `site`,
  `block`,
  `surface`,
  `other`,
];
function Ga(e) {
  let t = e.split(`:`)[0];
  switch (t) {
    case `road`:
    case `sidewalk`:
    case `block`:
    case `surface`:
    case `mrt`:
    case `site`:
      return t;
    case `transit`:
      return `mrt`;
    case `landmark`:
      return `landmark`;
    case `district-claim`:
      return `claim`;
    default:
      return `other`;
  }
}
function Ka(e, t = 3) {
  let n = {},
    r = 0;
  for (let [t, i] of e) {
    let e = Ga(t);
    ((n[e] = (n[e] ?? 0) + i), (r += i));
  }
  let i = {};
  for (let e of Wa) n[e] && (i[e] = n[e]);
  let a = [...e]
    .sort((e, t) => t[1] - e[1] || (e[0] < t[0] ? -1 : 1))
    .slice(0, t)
    .map(([e, t]) => `${e}×${t}`);
  return { total: r, by: i, top: a };
}
function qa(e) {
  let t = Object.entries(e.by).map(([e, t]) => `${e}×${t}`);
  return t.length
    ? `${t.join(` `)}${e.top.length ? ` · top ${e.top.join(`, `)}` : ``}`
    : `none`;
}
function Ja(e, t) {
  let n = [],
    r = Ma(Pa(e).pois, t, 1, Ya);
  for (let e of r)
    e.x >= t.minX - 1 &&
      e.x <= t.maxX + 1 &&
      e.z >= t.minZ - 1 &&
      e.z <= t.maxZ + 1 &&
      n.push(
        `poi-in-lot ${e.kind}:${e.id} — a generated walk-in storefront stands inside the lot (the site must cover or replace it)`,
      );
  if (((Ya.length = 0), n.sort(), n.length > 2)) {
    let e = [...new Set(n.map((e) => e.split(` `)[1].split(`:`)[0]))]
      .sort()
      .join(`, `);
    return [
      `poi-in-lot ${n.length} generated walk-in storefronts stand inside the lot (${e}) — the site must cover or replace them`,
    ];
  }
  return n;
}
var Ya = [],
  Xa = 0.5,
  Za = 1e5,
  Qa = 0.2,
  $a = pt.clusterRadius,
  eo = { desktop: mt.lru.nearDesktop, mobile: mt.lru.nearMobile };
function to(e) {
  return e.placement ?? {};
}
function no(e) {
  return e.cluster ?? null;
}
function ro(e) {
  (Ia(e), fa(e));
}
function io(e) {
  return e && /v2\b|compressed-v2/.test(e) ? 0.25 : 0.4;
}
function ao(e, t, n) {
  let r = Math.cos(e.facing),
    i = Math.sin(e.facing);
  return { x: e.x + t * r - n * i, z: e.z + t * i + n * r };
}
function oo(e, t, n, r, i) {
  let a = { minX: 1 / 0, minZ: 1 / 0, maxX: -1 / 0, maxZ: -1 / 0 };
  for (let [o, s] of [
    [t, n],
    [r, n],
    [t, i],
    [r, i],
  ]) {
    let t = ao(e, o, s);
    ((a.minX = Math.min(a.minX, t.x)),
      (a.maxX = Math.max(a.maxX, t.x)),
      (a.minZ = Math.min(a.minZ, t.z)),
      (a.maxZ = Math.max(a.maxZ, t.z)));
  }
  return (
    (a.minX = Io(a.minX)),
    (a.maxX = Io(a.maxX)),
    (a.minZ = Io(a.minZ)),
    (a.maxZ = Io(a.maxZ)),
    a
  );
}
function so(e, t) {
  Fa(t.plan);
  let n = new Set(e.map((e) => e.id)),
    r = e.map((e, t) => ({ m: e, i: t })),
    i = new Map(),
    a = Array(e.length),
    o = [],
    s = new Set();
  for (; r.length;) {
    let e = r.findIndex(({ m: e }) =>
      (e.placement?.anchors ?? []).every(
        (t) =>
          t.kind !== `site` || t.id === e.id || !n.has(t.id) || i.has(t.id),
      ),
    );
    e < 0 && (e = 0);
    let { m: c, i: l } = r.splice(e, 1)[0],
      u;
    ((u = s.has(c.id) ? No(c, [`duplicate-id ${c.id}`], []) : go(c, t, o, i)),
      s.add(c.id),
      (a[l] = u),
      i.has(c.id) || i.set(c.id, u),
      u.ok && o.push(u));
  }
  return (lo(e, a), a);
}
function co(e, t) {
  let n = new Map(e.map((e) => [e.id, e])),
    r = t.filter((e) => e.ok),
    i = [];
  for (let e = 0; e < r.length; e++)
    for (let t = e + 1; t < r.length; t++) {
      let n = r[e],
        a = r[t];
      if (wa(n.rect, a.rect) > 41) continue;
      let o = wa(n.rect, a.rect);
      for (let e of a.claims) o = Math.min(o, wa(n.rect, e));
      for (let e of n.claims) o = Math.min(o, wa(a.rect, e));
      o < 1 && i.push({ a: n.id, b: a.id, gap: o });
    }
  let a = new Map();
  for (let e of r) {
    let t = no(n.get(e.id) ?? {}) ?? `(none)`;
    (a.get(t) ?? (a.set(t, []), a.get(t))).push(e);
  }
  let o = [];
  for (let [e, t] of [...a].sort((e, t) => (e[0] < t[0] ? -1 : 1))) {
    let n = 0,
      i = t[0]?.id ?? ``;
    for (let e of t) {
      let t = 0;
      for (let n of r) Math.hypot(n.x - e.x, n.z - e.z) <= $a && t++;
      t > n && ((n = t), (i = e.id));
    }
    o.push({
      cluster: e,
      sites: t.length,
      densest: n,
      at: i,
      overDesktopLru: n > eo.desktop,
      overMobileLru: n > eo.mobile,
    });
  }
  return { placed: r.length, spacing: i, clusters: o };
}
function lo(e, t) {
  let n = co(e, t),
    r = new Map(t.map((e) => [e.id, e]));
  for (let e of n.spacing) {
    let t =
        e.gap < 0
          ? `overlaps '${e.b}' by ${(-e.gap).toFixed(2)} m`
          : `stands ${e.gap.toFixed(2)} m from '${e.b}' (min 1 m) — that slot is too narrow to walk down and will z-fight`,
      n =
        e.gap < 0
          ? `overlaps '${e.a}' by ${(-e.gap).toFixed(2)} m`
          : `stands ${e.gap.toFixed(2)} m from '${e.a}' (min 1 m) — that slot is too narrow to walk down and will z-fight`;
    (uo(r.get(e.a), e.a, `spacing ${t}`), uo(r.get(e.b), e.b, `spacing ${n}`));
  }
  for (let e of n.clusters) {
    if (e.cluster === `(none)` || !e.overMobileLru) continue;
    let t = e.overDesktopLru
      ? `${eo.desktop} desktop / ${eo.mobile} mobile`
      : `${eo.mobile} mobile`;
    uo(
      r.get(e.at),
      e.at,
      `cluster '${e.cluster}' packs ${e.densest} sites inside ${$a} m of here — over the near LRU (${t}), so walking it rebuilds near tiers`,
    );
  }
  return n;
}
function uo(e, t, n) {
  if (!e) return;
  let r = fo(t, n);
  e.warnings.includes(r) || e.warnings.push(r);
}
function fo(e, t) {
  return `[${e}] ${t}`;
}
var po = {},
  mo = [
    {
      id: `off-block`,
      why: `no city block on this map version has room for this lot — placed kerbside outside the block grid (road / pavement / landmark / MRT / district-claim / surface clearances all still hold)`,
      relax: { offBlock: !0 },
    },
    {
      id: `wide-search`,
      why: `the addressed stretch is blocked on this map version — doubled placement.search to find the nearest free lot on the same frontage`,
      relax: { offBlock: !0, wide: !0 },
    },
    {
      id: `off-frontage`,
      why: `the street-plate interval over the addressed block is too short on this map version — slid past the end of the plate but stayed on the SAME road (the plate in the dossier is the one actually under the lot)`,
      relax: { offBlock: !0, wide: !0, offFrontage: !0 },
    },
    {
      id: `kerb-overlap`,
      why: `nothing clears the pavement band here on this map version — the lot front overlaps the walking band like a 騎樓 arcade; the carriageway itself is still clear`,
      relax: { offBlock: !0, wide: !0, offFrontage: !0, sidewalk: !0 },
    },
  ];
function ho(e, t, n) {
  return !!(
    (e.wide && !t.wide) ||
    (e.offBlock && !t.offBlock && n.has(`block`)) ||
    (e.offFrontage && !t.offFrontage && n.has(`off-frontage`)) ||
    (e.sidewalk && !t.sidewalk && n.has(`sidewalk`))
  );
}
function go(e, t, n = [], r) {
  try {
    return _o(e, t, n, r ?? new Map(n.map((e) => [e.id, e])));
  } catch (t) {
    return No(e, [`internal-error ${t?.message ?? String(t)}`], []);
  }
}
function _o(e, t, n, r) {
  let i = t.plan,
    a = [],
    o = yi(i);
  if (o) return No(e, [o], a);
  let s = e.placement,
    c = xo(e);
  if (c.length) return No(e, c, a);
  let l = hi(s.anchors, t, r, a),
    u = n
      .filter((t) => t.ok && t.id !== e.id)
      .map((e) => ({ id: e.id, rect: e.rect })),
    d = [s.frontage, ...(s.alt ?? [])],
    f = [...d, ...ra(i, d, !!s.lane)],
    p = So(s.cross[0]),
    m = [],
    h = null,
    g = [],
    _ = [],
    v = null;
  for (let e of f) {
    let t = Gi(i, e, { lane: !!s.lane }),
      n = t.filter((e) => !e.lane);
    if (!n.length) {
      m.push(`frontage-not-found ${Si(e)}`);
      continue;
    }
    let r = [];
    for (let t of p)
      if (((r = ca(i, n, t)), r.length)) {
        t !== p[0] &&
          a.push(`cross-alt ${Si(t)} (${Si(p[0])} does not meet ${Si(e)})`);
        break;
      }
    if (!r.length) {
      if (
        (m.push(`cross-not-found ${p.map(Si).join(` / `)} on ${Si(e)}`), !v)
      ) {
        let r = Co(i, n);
        r.length && (v = { ref: e, iv: t, cn: r });
      }
      continue;
    }
    ((h = e),
      (g = t),
      (_ = r.sort(
        (e, t) => e.road.index - t.road.index || e.node.id - t.node.id,
      )));
    break;
  }
  if (
    (!h &&
      v &&
      ((h = v.ref),
      (g = v.iv),
      (_ = v.cn),
      a.push(
        `cross-fallback-midblock ${m.join(`; `)} — placed from the nearest node on ${Si(h)} instead of dropping the site; add a cross street this map version really has (placement.cross[0] accepts a list of alternatives)`,
      )),
    !h)
  )
    return No(e, m, a);
  h !== s.frontage && a.push(`frontage-alt ${Si(h)} (${m.join(`; `)})`);
  let y = vo(e, a),
    b = 0,
    x = (n, r = po) => {
      let o = wo(e, n === `undercroft` ? _[0]?.road : void 0, t.forceMinLot),
        s = {
          meta: e,
          env: t,
          plan: i,
          ref: h,
          intervals: g,
          targets: l,
          placedRects: u,
          reasons: new Map(),
          tried: 0,
          best: null,
          mode: n,
          vcache: new Map(),
          relax: r,
          opts: {
            requireBlock: n === `lot` && !r.offBlock,
            surfaces: ga(
              n === `undercroft`
                ? [...(to(e).surfaces ?? []), `road`, `crosswalk`]
                : to(e).surfaces,
            ),
          },
        };
      b = 0;
      for (let e = 0; e < o.length && !s.best; e++) {
        b = e;
        let [t, n] = o[e];
        for (let e of _) To(s, e, t, n, a);
      }
      return s;
    },
    S = x(y);
  !S.best &&
    y === `undercroft` &&
    !yo(S) &&
    (a.push(
      `undercroft-fallback ${Si(h)} is not elevated in this map version — placed as a normal kerbside lot (add a placement.alt frontage that IS elevated here if the undercroft reading matters)`,
    ),
    (y = `lot`),
    (S = x(y)));
  let C = ``;
  if (!S.best && y === `lot`) {
    let e = po;
    for (let t of mo) {
      if (!ho(t.relax, e, S.reasons)) continue;
      e = t.relax;
      let n = x(y, t.relax);
      if (((C = C ? `${C}, ${t.id}` : t.id), (S = n), n.best)) {
        (a.push(`${t.id} ${Si(h)} — ${t.why}`), (C = ``));
        break;
      }
    }
  }
  let w = S.best,
    T = bo(S);
  if (!w) {
    let t = y === `lot` ? `` : ` [mode ${y}]`;
    return C
      ? No(
          e,
          [
            `no-valid-lot unplaceable ${Si(h)} — nothing fits on this map version even after the relaxation ladder (rungs spent: ${C}); ${S.tried} candidates, rejected ${qa(T)}. MAP: this plan carries no lot on that frontage — make room there, or give the meta an alt frontage ref (placement.alt) that this plan really has.`,
          ],
          Lo(a),
          T,
        )
      : No(
          e,
          [`no-valid-lot${t} (${S.tried} tried; rejected ${qa(T)})`],
          Lo(a),
          T,
        );
  }
  return (
    b > 0 &&
      a.push(
        `shrunk ${e.lot.w}×${e.lot.d} → ${w.w}×${w.d} (the full lot did not fit anywhere on the stretch)`,
      ),
    y === `undercroft` &&
      a.push(
        `undercroft lot sits in the ${w.road.median.toFixed(0)} m median under the elevated ${Ui(i, w.road, w.s).full.zh}; entrance faces ${Ei(w.road, w.sideSign)}`,
      ),
    y === `beyond`
      ? a.push(
          `beyond lot sits past the ${Ei(w.road, w.sideSign)} curb of ${Ui(i, w.road, w.s).full.zh}, outside the block grid`,
        )
      : s.side &&
        Ei(w.road, w.sideSign) !== s.side &&
        a.push(
          `side-flipped ${s.side} → ${Ei(w.road, w.sideSign)} (no lot on the ${s.side} side of ${Ui(i, w.road, w.s).full.zh})`,
        ),
    ji(h) &&
      a.push(
        `lot-edge-frontage ${Ui(i, w.road, w.s).full.zh} (${Ei(w.road, w.sideSign)} edge of ${ji(h)?.landmarkId})`,
      ),
    w.lane &&
      a.push(
        `lane-frontage ${Ui(i, w.road, w.s).full.zh} (no room on the named street, so the lot fronts its generated 巷)`,
      ),
    w.slide > 0 &&
      !w.lane &&
      a.push(
        `slid ${w.slide} m along ${Ui(i, w.road, w.s).full.zh} (${Ei(w.road, w.sideSign)} side) to find room`,
      ),
    T.total && (w.slide > 0 || b > 0 || w.lane) && a.push(`rejected ${qa(T)}`),
    ko(e, t, w, l, a, T)
  );
}
function vo(e, t) {
  let n = to(e).mode;
  return !n || n === `lot`
    ? `lot`
    : n === `undercroft` || n === `beyond`
      ? n
      : (t.push(
          `unknown placement.mode '${String(n)}' — falling back to 'lot'`,
        ),
        `lot`);
}
function yo(e) {
  let t = 0,
    n = 0;
  for (let [r, i] of e.reasons)
    ((n += i),
      (r.startsWith(`not-elevated:`) || r.startsWith(`no-median-under:`)) &&
        (t += i));
  return n === 0 || t < n;
}
function bo(e) {
  return Ka(e.reasons, 3);
}
function xo(e) {
  let t = [],
    n = e.placement;
  ((!n || !n.frontage || !n.frontage.zh) &&
    t.push(`placement.frontage missing`),
    (!n ||
      !Array.isArray(n.cross) ||
      n.cross.length < 1 ||
      n.cross.length > 2) &&
      t.push(`placement.cross must list 1–2 roads`),
    (!e.lot || !(e.lot.w > 0) || !(e.lot.d > 0)) &&
      t.push(`lot.w/lot.d must be > 0`),
    Array.isArray(e.proxy) &&
      e.proxy.length > 8 &&
      t.push(`proxy has ${e.proxy.length} boxes (max 8)`));
  let r = to(e);
  return (
    r.mode === `beyond` &&
      !n?.side &&
      t.push(
        `placement.mode 'beyond' needs an explicit side (which bank of the frontage the lot is on)`,
      ),
    r.gate &&
      (!r.gate.alongFrom?.zh || !Number.isFinite(r.gate.offset)) &&
      t.push(`placement.gate needs {alongFrom:{zh}, offset:number}`),
    t
  );
}
function So(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function Co(e, t) {
  let n = [];
  for (let r of t)
    for (let t of sa(e, r.road))
      t.s < r.s0 - t.half - 1 ||
        t.s > r.s1 + t.half + 1 ||
        n.push({ ...t, road: r.road, crossRoad: r.road });
  return n.sort((e, t) => e.road.index - t.road.index || e.node.id - t.node.id);
}
function wo(e, t, n = !1) {
  let r = t ? Bi(t, ha) : 1 / 0,
    i = e.lot.w,
    a = Math.min(e.lot.d, r),
    o = Math.min(i, e.lot.minW ?? i),
    s = Math.min(a, e.lot.minD ?? a),
    c = [],
    l = n
      ? [[o, s]]
      : [
          [i, a],
          [o, a],
          [i, s],
          [o, s],
        ];
  for (let e of l)
    e[0] > 0 &&
      e[1] > 0 &&
      (c.some((t) => t[0] === e[0] && t[1] === e[1]) || c.push(e));
  return c.length ? c : [[e.lot.w, e.lot.d]];
}
function To(e, t, n, r, i) {
  let { plan: a, meta: o, ref: s } = e,
    c = o.placement,
    l = t.road,
    u = c.setback ?? 0.5,
    d = Math.max(0, c.search ?? 60) * (e.relax.wide ? 2 : 1);
  if (e.mode === `undercroft`) {
    if (!l.elevated) {
      Po(e, `not-elevated:${l.name.zh}`);
      return;
    }
    if (!(Bi(l, 1.2) >= 2)) {
      Po(e, `no-median-under:${l.name.zh}`);
      return;
    }
  }
  let f = 1,
    p = NaN,
    m = !1,
    h = So(c.cross[1]);
  if (h.length) {
    let n = e.intervals.filter((e) => e.road === l && !e.lane),
      r;
    for (let e of h)
      if (
        ((r = ca(a, n, e)
          .filter((e) => e.node !== t.node)
          .sort(
            (e, n) =>
              Math.abs(e.s - t.s) - Math.abs(n.s - t.s) ||
              e.node.id - n.node.id,
          )[0]),
        r)
      )
        break;
    r
      ? ((f = r.s > t.s ? 1 : -1), (p = r.s - f * r.half), (m = !0))
      : i.push(`cross1-not-found ${h.map(Si).join(` / `)} on ${Si(s)}`);
  }
  if (!m && Fi(l)) {
    ((f = (l.from + l.to) / 2 >= t.s ? 1 : -1), (m = !0));
    let e = sa(a, l).filter((e) => (e.s - t.s) * f > 0.5),
      n = f > 0 ? e[0] : e[e.length - 1];
    p = n ? n.s - f * n.half : f > 0 ? l.to : l.from;
  }
  if (!m) {
    let n = Wi(a, l, t.s + t.half + 4);
    for (let e of [n, -n]) {
      let n = t.s + e * (t.half + 4);
      if (!(n < l.from || n > l.to) && xi(a, l, n, s)) {
        ((f = e), (m = !0));
        break;
      }
    }
    if (!m) {
      Po(e, `no-stretch`);
      return;
    }
    let r = sa(a, l).filter((e) => (e.s - t.s) * f > 0.5),
      i = f > 0 ? r[0] : r[r.length - 1];
    p = i ? i.s - f * i.half : f > 0 ? l.to : l.from;
  }
  let g = t.s + f * (t.half + 4),
    _ = e.intervals.find(
      (e) => e.road === l && !e.lane && g >= e.s0 - 0.5 && g <= e.s1 + 0.5,
    );
  _ && (p = f > 0 ? Math.min(p, _.s1) : Math.max(p, _.s0));
  let v = t.s + f * t.half,
    y = Math.max(0, (p - v) * f),
    b = c.along ?? Math.max(0, (y - n) / 2),
    x = v + f * (b + n / 2),
    S = [
      [1, 0],
      [-1, 0],
    ];
  if (c.side) {
    let t = Ti(l, c.side);
    t
      ? (S =
          e.mode === `beyond`
            ? [[t, 0]]
            : [
                [t, 0],
                [-t, Za],
              ])
      : (Po(
          e,
          `side-${c.side}-invalid-on-${l.axis === `x` ? `EW` : `NS`}-road`,
        ),
        i.push(
          `side-ignored ${c.side} is not a side of ${l.name.zh} in this map version — placed on whichever side has room`,
        ));
  }
  let C = l.halfTotal + u,
    w = Math.max(n, o.lot.w),
    T = Math.max(r, o.lot.d),
    E = d + w + 2,
    D = e.mode === `undercroft` ? T / 2 + 2 : C + T + 2,
    O = Eo(e, Fo(Oi(l, x, 1, 0, 2 * E, D), Oi(l, x, -1, 0, 2 * E, D)));
  for (let t = 0; t <= d && !(e.best && t >= e.best.score); t += 2)
    for (let i of t === 0 ? [0] : [t, -t]) {
      let a = x + f * i,
        o = 0;
      if (!Do(e.intervals, l, a)) {
        if (!e.relax.offFrontage || a < l.from || a > l.to) {
          Po(e, `off-frontage`);
          continue;
        }
        o = 8;
      }
      for (let [i, s] of S) Oo(e, O, l, a, i, C, n, r, t, !1, s + o);
    }
  if (c.lane && e.mode === `lot`) {
    let t = Ci(l, x, 0, 0);
    for (let i of e.intervals) {
      if (!i.lane || !i.road.lane || i.road.lane.parent !== l) continue;
      let o = i.road,
        s = o.at,
        c = Math.abs(s - (l.axis === `x` ? t.x : t.z));
      if (c > d + n) continue;
      let f = l.at,
        p = (o.from + o.to) / 2 > f ? 1 : -1,
        m = sa(a, o).reduce(
          (e, t) => (!e || Math.abs(t.s - f) < Math.abs(e.s - f) ? t : e),
          null,
        ),
        h = f + p * (m ? m.half : l.halfWidth),
        g = o.halfTotal + u,
        _ = Eo(
          e,
          Fo(
            Oi(o, h + (d / 2) * p, 1, 0, d + 2 * n + 4, g + r + 2),
            Oi(o, h + (d / 2) * p, -1, 0, d + 2 * n + 4, g + r + 2),
          ),
        );
      for (let t = 0; t <= d; t += 2) {
        let i = 8 + c + t;
        if (e.best && i >= e.best.score) break;
        let a = h + p * (n / 2 + t);
        if (a < o.from || a > o.to) break;
        for (let t of [1, -1]) Oo(e, _, o, a, t, g, n, r, i, !0, 0);
      }
    }
  }
}
function Eo(e, t) {
  let n = `${t.minX.toFixed(2)},${t.minZ.toFixed(2)},${t.maxX.toFixed(2)},${t.maxZ.toFixed(2)}`,
    r = e.vcache.get(n);
  return (r || e.vcache.set(n, (r = La(e.env, t, e.placedRects))), r);
}
function Do(e, t, n) {
  for (let r of e)
    if (r.road === t && !r.lane && n >= r.s0 && n <= r.s1) return !0;
  return !1;
}
function Oo(e, t, n, r, i, a, o, s, c, l, u = 0) {
  e.tried++;
  let d = e.mode === `undercroft` && !l,
    f = d ? Vi(n, r, o, s) : Oi(n, r, i, a, o, s);
  e.opts.host = d ? n : null;
  let p = Ua(t, f, e.opts),
    m = 0;
  if (p === `sidewalk` && e.relax.sidewalk) {
    e.opts.allowSidewalk = !0;
    let n = Ua(t, f, e.opts);
    ((e.opts.allowSidewalk = !1), (p = n), n || (m = 8));
  }
  if (p) {
    Po(e, p);
    return;
  }
  let h = (f.minX + f.maxX) / 2,
    g = (f.minZ + f.maxZ) / 2,
    _ = c + u + m + Xa * gi(e.targets, h, g);
  (!e.best || _ < e.best.score - 1e-9) &&
    (e.best = {
      score: _,
      road: n,
      s: r,
      sideSign: i,
      rect: f,
      w: o,
      d: s,
      lane: l,
      slide: c,
      mode: d ? `undercroft` : l ? `lot` : e.mode,
    });
}
function ko(e, t, n, r, i, a) {
  let o = t.plan,
    { road: s, s: c, sideSign: l, rect: u, w: d, d: f } = n,
    p = (u.minX + u.maxX) / 2,
    m = (u.minZ + u.maxZ) / 2,
    h = n.mode === `undercroft` ? Di(s, -l) : Di(s, l),
    g = Ui(o, s, c),
    _ = Ci(s, c, l, n.mode === `undercroft` ? f / 2 : s.halfTotal),
    v = [],
    y = {
      id: e.id,
      ok: !0,
      rejections: a,
      mode: n.mode,
      x: p,
      z: m,
      y: o.groundHeight(p, m),
      facing: h,
      w: d,
      d: f,
      rect: u,
      frontage: {
        roadIndex: s.index,
        label: g,
        halfWidth: s.halfWidth,
        halfTotal: s.halfTotal,
        sidewalk: s.sidewalk,
      },
      address: Mo(o, s, _, g, e.houseNo),
      claims: [],
      anchors: [],
      replaces: [],
      warnings: i,
      errors: v,
    },
    b = n.mode === `undercroft`,
    x = b ? 0 : s.sidewalk - 2,
    S = e.claims?.length
      ? e.claims
      : [
          {
            x0: -e.lot.w / 2,
            z0: -e.lot.d / 2,
            x1: e.lot.w / 2,
            z1: e.lot.d / 2,
            scope: `buildings`,
          },
        ],
    C = e.lot.w > 0 ? d / e.lot.w : 1,
    w = e.lot.d > 0 ? f / e.lot.d : 1;
  for (let t of S) {
    let n = Math.min(t.z0, t.z1) * w,
      r = Math.min(t.x0, t.x1) * C,
      a = Math.max(t.x0, t.x1) * C,
      o = Math.max(t.z0, t.z1) * w,
      c = -f / 2 - n;
    (!b &&
      t.scope === `props` &&
      c > x + 0.01 &&
      x > 0 &&
      (i.push(
        `props-claim-clipped ${c.toFixed(1)} m → ${x.toFixed(1)} m past the lot line (${s.sidewalk.toFixed(1)} m pavement keeps 2 m clear)`,
      ),
      (n = -f / 2 - x),
      (c = x)),
      c > 0.01 &&
        (b || t.scope !== `props` || c > x + 0.01) &&
        v.push(
          b
            ? `claim-blocks-lane ${t.scope} reaches ${c.toFixed(1)} m past the undercroft lot edge, into a traffic lane of ${g.full.zh}`
            : `claim-blocks-sidewalk ${t.scope} reaches ${c.toFixed(1)} m past the lot line (props only, max ${Math.max(0, x).toFixed(1)} m)`,
        ));
    let l = d / 2,
      u = f / 2;
    t.scope !== `props` &&
      (r < -l - 0.5 || a > l + 0.5 || o > u + 0.5) &&
      i.push(`claim-outside-lot ${t.scope}`);
    let p = Math.max(r, -d / 2),
      m = Math.min(a, d / 2),
      h = Math.min(o, f / 2),
      _ = t.scope === `props` ? n : Math.max(n, -f / 2);
    if (m - p < 0.5 || h - _ < 0.5) continue;
    let S = ba(oo(y, p, _, m, h), Qa),
      T = b ? `props` : t.scope;
    y.claims.push({
      minX: S.minX,
      minZ: S.minZ,
      maxX: S.maxX,
      maxZ: S.maxZ,
      scope: T,
      label: `site:${e.id}`,
    });
  }
  for (let e of r) {
    let n = mi(e.ref, e.at, p, m, t.scale);
    (y.anchors.push(n), n.ok || i.push(pi(e.ref, n)));
  }
  (i.push(...Ja(o, u)), i.push(...Ta(o, u)));
  for (let t of e.placement?.replaces ?? []) {
    let e = !!o.landmark(t.id);
    (y.replaces.push({ id: t.id, note: t.note, known: e }),
      e ||
        i.push(
          `replaces-unknown '${t.id}' is not a plan landmark id (cityData.ts LANDMARKS)`,
        ));
  }
  let T = Ao(e, t, y, n, i);
  return (
    T && (y.gate = T),
    (y.warnings = Lo(i).map((t) => (t.startsWith(`[`) ? t : fo(e.id, t)))),
    v.length && (y.ok = !1),
    y
  );
}
function Ao(e, t, n, r, i) {
  let a = to(e).gate;
  if (!a) return;
  let o = t.plan,
    s = ca(
      o,
      [{ road: r.road, s0: r.road.from, s1: r.road.to }],
      a.alongFrom,
    ).sort((e, t) => e.node.id - t.node.id)[0];
  if (!s) {
    i.push(
      `gate-cross-not-found ${Si(a.alongFrom)} does not meet ${Ui(o, r.road, r.s).full.zh} — gate falls back to the lot's own frontage point`,
    );
    let e = Ci(r.road, r.s, r.sideSign, r.road.halfTotal);
    return { x: e.x, z: e.z, offset: 0, from: Si(a.alongFrom) };
  }
  let c = r.s >= s.s ? 1 : -1,
    l = s.s + c * (s.half + Math.max(0, a.offset)),
    u = Ci(r.road, l, r.sideSign, r.road.halfTotal),
    d = Math.hypot(u.x - n.x, u.z - n.z);
  return (
    d > r.w / 2 + 40 &&
      i.push(
        `gate is ${d.toFixed(0)} m from the lot centre — check placement.gate.offset (${a.offset} m from ${Si(a.alongFrom)})`,
      ),
    { x: u.x, z: u.z, offset: a.offset, from: Si(a.alongFrom) }
  );
}
function jo(e) {
  let t = e.trim().replace(/\s+/g, ``),
    r = /^(?:(\d+)巷)?(?:(\d+)弄)?(?:(\d+(?:-\d+)?)號?)?$/.exec(t);
  if (!r || (!r[1] && !r[2] && !r[3])) {
    let e = t
      .replace(/(\d+)巷/g, `Ln. $1, `)
      .replace(/(\d+)弄/g, `Aly. $1, `)
      .replace(/(\d+)號?/g, `No. $1, `)
      .replace(/[^\x20-\x7e]/g, ``);
    return { zh: t, en: e.replace(/,\s*$/, ``) + (e.trim() ? `, ` : ``) };
  }
  let [, i, a, o] = r,
    s = `${i ? (n.on ? n.t(`${i}巷`, `${i}巷`) : `${i}巷`) : ``}${a ? (n.on ? n.t(`${a}弄`, `${a}弄`) : `${a}弄`) : ``}${o ? (n.on ? n.t(`${o}號`, `${o}号`) : `${o}號`) : ``}`,
    c = [];
  return (
    o && c.push(`No. ${o}`),
    a && c.push(`Aly. ${a}`),
    i && c.push(`Ln. ${i}`),
    { zh: s, en: c.length ? `${c.join(`, `)}, ` : `` }
  );
}
function Mo(e, t, n, r, i) {
  let a = r.full,
    o = () => ({ zh: a.zh, en: a.en, ...(a.ja ? { ja: a.ja } : {}) });
  if (Fi(t) && !i) return o();
  if (i) {
    let e = jo(i);
    return { zh: `${r.full.zh}${e.zh}`, en: `${e.en}${r.full.en}` };
  }
  let s = e;
  if (typeof s.address == `function`) {
    let e = s.address(t, n.x, n.z);
    if (e && e.zh) return { zh: e.zh, en: e.en, ...(e.ja ? { ja: e.ja } : {}) };
  }
  return o();
}
function No(e, t, n, r) {
  return {
    id: e?.id ?? `?`,
    ok: !1,
    rejections: r,
    x: 0,
    z: 0,
    y: 0,
    facing: 0,
    w: e?.lot?.w ?? 0,
    d: e?.lot?.d ?? 0,
    rect: { minX: 0, minZ: 0, maxX: 0, maxZ: 0 },
    address: { zh: ``, en: `` },
    claims: [],
    anchors: [],
    replaces: (e?.placement?.replaces ?? []).map((e) => ({
      id: e.id,
      note: e.note,
      known: !1,
    })),
    warnings: Lo(n).map((t) => (t.startsWith(`[`) ? t : fo(e?.id ?? `?`, t))),
    errors: t,
  };
}
function Po(e, t) {
  e.reasons.set(t, (e.reasons.get(t) ?? 0) + 1);
}
function Fo(e, t) {
  return {
    minX: Math.min(e.minX, t.minX),
    minZ: Math.min(e.minZ, t.minZ),
    maxX: Math.max(e.maxX, t.maxX),
    maxZ: Math.max(e.maxZ, t.maxZ),
  };
}
function Io(e) {
  let t = Math.round(e * 1e6) / 1e6;
  return Object.is(t, -0) ? 0 : t;
}
function Lo(e) {
  return [...new Set(e)];
}
function Ro(e) {
  if (!e) return 0;
  let t = e.index;
  if (t)
    return Math.floor(
      (e.drawRange.count === 1 / 0
        ? t.count
        : Math.min(t.count, e.drawRange.count)) / 3,
    );
  let n = e.getAttribute(`position`);
  return n
    ? Math.floor(
        (e.drawRange.count === 1 / 0
          ? n.count
          : Math.min(n.count, e.drawRange.count)) / 3,
      )
    : 0;
}
function zo(e, t = { calls: 0, tris: 0 }) {
  if (((t.calls = 0), (t.tris = 0), !e)) return t;
  let n = (e) => {
    if (!e.visible) return;
    let r = e;
    if (r.isMesh && r.geometry) {
      let e = Ro(r.geometry);
      if (e > 0) {
        let n = r.isInstancedMesh ? Math.max(0, r.count ?? 0) : 1;
        if (n > 0) {
          let i = Array.isArray(r.material)
            ? Math.max(1, r.geometry.groups.length)
            : 1;
          ((t.calls += i), (t.tris += e * n));
        }
      }
    }
    let i = e.children;
    for (let e = 0; e < i.length; e++) n(i[e]);
  };
  return (n(e), t);
}
function Bo(e, t) {
  return e === `far` ? null : ft[t][e];
}
function Vo(e, t, n) {
  let r = Bo(e, t);
  if (!r) return null;
  let i = [];
  return (
    n.calls > r.calls && i.push(`${n.calls} calls > ${r.calls}`),
    n.tris > r.tris && i.push(`${n.tris} tris > ${r.tris}`),
    i.length ? `${e}/${t}: ${i.join(`, `)}` : null
  );
}
var Ho = { menu: 0, decal: 1, other: 1, plaque: 2, signH: 3, signV: 9 };
function Uo(e) {
  let t = e.toLowerCase();
  return /vert|vsign|blade|neon/.test(t)
    ? `signV`
    : /floor|pavers|terrazzo/.test(t)
      ? `other`
      : /plaque|lacquer|shrine|hall/.test(t)
        ? `plaque`
        : /sign|fascia|logo|name|mark|banner/.test(t)
          ? `signH`
          : /menu|price|soldout|^(st|sg|col)-/.test(t)
            ? `menu`
            : /decal|poster|notice|sticker|couplet|ad$|-ad|ad-/.test(t)
              ? `decal`
              : `other`;
}
var Wo = class {
    buf = new Float64Array(4096);
  },
  Go = [
    `width`,
    `actualBoundingBoxLeft`,
    `actualBoundingBoxRight`,
    `actualBoundingBoxAscent`,
    `actualBoundingBoxDescent`,
    `fontBoundingBoxAscent`,
    `fontBoundingBoxDescent`,
    `alphabeticBaseline`,
    `hangingBaseline`,
  ],
  Ko = 1,
  qo = 2,
  Jo = 3,
  Yo = 4,
  Xo = 5,
  Zo = 6,
  Qo = 7,
  $o = 8,
  es = 9,
  ts = 10,
  ns = 11,
  rs = 12,
  is = 13,
  as = 14,
  os = 15,
  ss = 16,
  cs = 17,
  ls = 18,
  us = 19,
  ds = 20,
  fs = 21,
  ps = 22,
  ms = 23,
  hs = 24,
  gs = 25,
  _s = 26,
  vs = 27,
  ys = 28,
  bs = 29,
  xs = 30,
  Ss = 31,
  Cs = 32,
  ws = 33,
  Ts = 34,
  Es = 35,
  Ds = 36,
  Os = 37,
  ks = 38,
  As = 39,
  js = 40,
  Ms = 41,
  Ns = 42,
  Ps =
    `fillStyle.strokeStyle.lineWidth.lineCap.lineJoin.miterLimit.lineDashOffset.font.textAlign.textBaseline.direction.letterSpacing.wordSpacing.fontKerning.globalAlpha.globalCompositeOperation.shadowBlur.shadowColor.shadowOffsetX.shadowOffsetY.imageSmoothingEnabled.imageSmoothingQuality.filter.fontStretch.fontVariantCaps.textRendering.lang`.split(
      `.`,
    ),
  Fs = {};
for (let e = 0; e < Ps.length; e++) Fs[Ps[e]] = e;
var Is = [
    `font`,
    `letterSpacing`,
    `wordSpacing`,
    `fontKerning`,
    `direction`,
    `fontStretch`,
    `fontVariantCaps`,
    `textRendering`,
    `lang`,
  ],
  Ls = {
    fillStyle: `#000000`,
    strokeStyle: `#000000`,
    lineWidth: 1,
    lineCap: `butt`,
    lineJoin: `miter`,
    miterLimit: 10,
    lineDashOffset: 0,
    font: `10px sans-serif`,
    textAlign: `start`,
    textBaseline: `alphabetic`,
    direction: `inherit`,
    letterSpacing: `0px`,
    wordSpacing: `0px`,
    fontKerning: `auto`,
    globalAlpha: 1,
    globalCompositeOperation: `source-over`,
    shadowBlur: 0,
    shadowColor: `rgba(0, 0, 0, 0)`,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    imageSmoothingEnabled: !0,
    imageSmoothingQuality: `low`,
    filter: `none`,
    fontStretch: `normal`,
    fontVariantCaps: `normal`,
    textRendering: `auto`,
    lang: `inherit`,
  },
  Rs = class {
    id;
    rec;
    constructor(e, t) {
      ((this.id = e), (this.rec = t));
    }
    addColorStop(e, t) {
      this.rec.stop(this.id, e, t);
    }
  },
  zs = class {
    ctx;
    cur = {};
    constructor(e) {
      this.ctx = e;
    }
    text(e, t) {
      let n = this.ctx;
      for (let t = 0; t < Is.length; t++) {
        let r = Is[t],
          i = e[r];
        i !== this.cur[r] && (r in n && (n[r] = i), (this.cur[r] = i));
      }
      return this.ctx.measureText(t);
    }
  },
  Bs = class {
    measure;
    scratch;
    buf;
    n = 0;
    strs = [];
    strIndex = new Map();
    gid = 0;
    st = { ...Ls };
    stack = [];
    dash = [];
    dashStack = [];
    constructor(e, t = null) {
      ((this.measure = e),
        (this.scratch = t),
        (this.buf = t ? t.buf : new Float64Array(1024)));
    }
    room(e) {
      let t = this.n + e;
      if (t > this.buf.length) {
        let e = this.buf.length * 2;
        for (; e < t;) e *= 2;
        let n = new Float64Array(e);
        (n.set(this.buf.subarray(0, this.n)),
          (this.buf = n),
          this.scratch && (this.scratch.buf = n));
      }
      return this.buf;
    }
    p1(e) {
      let t = this.room(1);
      t[this.n++] = e;
    }
    p2(e, t) {
      let n = this.room(2);
      ((n[this.n++] = e), (n[this.n++] = t));
    }
    p3(e, t, n) {
      let r = this.room(3);
      ((r[this.n++] = e), (r[this.n++] = t), (r[this.n++] = n));
    }
    p4(e, t, n, r) {
      let i = this.room(4);
      ((i[this.n++] = e),
        (i[this.n++] = t),
        (i[this.n++] = n),
        (i[this.n++] = r));
    }
    p5(e, t, n, r, i) {
      let a = this.room(5);
      ((a[this.n++] = e),
        (a[this.n++] = t),
        (a[this.n++] = n),
        (a[this.n++] = r),
        (a[this.n++] = i));
    }
    p6(e, t, n, r, i, a) {
      let o = this.room(6);
      ((o[this.n++] = e),
        (o[this.n++] = t),
        (o[this.n++] = n),
        (o[this.n++] = r),
        (o[this.n++] = i),
        (o[this.n++] = a));
    }
    p7(e, t, n, r, i, a, o) {
      (this.p6(e, t, n, r, i, a), this.p1(o));
    }
    p8(e, t, n, r, i, a, o, s) {
      (this.p6(e, t, n, r, i, a), this.p2(o, s));
    }
    get g() {
      return this;
    }
    take() {
      let e = {
        nums: this.buf.slice(0, this.n),
        strs: this.strs,
        grads: this.gid,
      };
      return ((this.n = 0), (this.strs = []), this.strIndex.clear(), e);
    }
    get size() {
      return this.n;
    }
    s(e) {
      let t = this.strIndex.get(e);
      return (
        t === void 0 &&
          ((t = this.strs.length), this.strs.push(e), this.strIndex.set(e, t)),
        t
      );
    }
    set(e, t) {
      this.st[e] = t;
      let n = Fs[e];
      if (t instanceof Rs) this.p3(Es, n, t.id);
      else if (typeof t == `number`) this.p3(ws, n, t);
      else if (typeof t == `boolean`) this.p3(Ds, n, +!!t);
      else if (typeof t == `string`) this.p3(Ts, n, this.s(t));
      else
        throw Error(`site art recorder: ${e} = ${typeof t} is not recordable`);
    }
    get fillStyle() {
      return this.st.fillStyle;
    }
    set fillStyle(e) {
      this.set(`fillStyle`, e);
    }
    get strokeStyle() {
      return this.st.strokeStyle;
    }
    set strokeStyle(e) {
      this.set(`strokeStyle`, e);
    }
    get lineWidth() {
      return this.st.lineWidth;
    }
    set lineWidth(e) {
      this.set(`lineWidth`, e);
    }
    get lineCap() {
      return this.st.lineCap;
    }
    set lineCap(e) {
      this.set(`lineCap`, e);
    }
    get lineJoin() {
      return this.st.lineJoin;
    }
    set lineJoin(e) {
      this.set(`lineJoin`, e);
    }
    get miterLimit() {
      return this.st.miterLimit;
    }
    set miterLimit(e) {
      this.set(`miterLimit`, e);
    }
    get lineDashOffset() {
      return this.st.lineDashOffset;
    }
    set lineDashOffset(e) {
      this.set(`lineDashOffset`, e);
    }
    get font() {
      return this.st.font;
    }
    set font(e) {
      this.set(`font`, e);
    }
    get textAlign() {
      return this.st.textAlign;
    }
    set textAlign(e) {
      this.set(`textAlign`, e);
    }
    get textBaseline() {
      return this.st.textBaseline;
    }
    set textBaseline(e) {
      this.set(`textBaseline`, e);
    }
    get direction() {
      return this.st.direction;
    }
    set direction(e) {
      this.set(`direction`, e);
    }
    get letterSpacing() {
      return this.st.letterSpacing;
    }
    set letterSpacing(e) {
      this.set(`letterSpacing`, e);
    }
    get wordSpacing() {
      return this.st.wordSpacing;
    }
    set wordSpacing(e) {
      this.set(`wordSpacing`, e);
    }
    get fontKerning() {
      return this.st.fontKerning;
    }
    set fontKerning(e) {
      this.set(`fontKerning`, e);
    }
    get fontStretch() {
      return this.st.fontStretch;
    }
    set fontStretch(e) {
      this.set(`fontStretch`, e);
    }
    get fontVariantCaps() {
      return this.st.fontVariantCaps;
    }
    set fontVariantCaps(e) {
      this.set(`fontVariantCaps`, e);
    }
    get textRendering() {
      return this.st.textRendering;
    }
    set textRendering(e) {
      this.set(`textRendering`, e);
    }
    get globalAlpha() {
      return this.st.globalAlpha;
    }
    set globalAlpha(e) {
      this.set(`globalAlpha`, e);
    }
    get globalCompositeOperation() {
      return this.st.globalCompositeOperation;
    }
    set globalCompositeOperation(e) {
      this.set(`globalCompositeOperation`, e);
    }
    get shadowBlur() {
      return this.st.shadowBlur;
    }
    set shadowBlur(e) {
      this.set(`shadowBlur`, e);
    }
    get shadowColor() {
      return this.st.shadowColor;
    }
    set shadowColor(e) {
      this.set(`shadowColor`, e);
    }
    get shadowOffsetX() {
      return this.st.shadowOffsetX;
    }
    set shadowOffsetX(e) {
      this.set(`shadowOffsetX`, e);
    }
    get shadowOffsetY() {
      return this.st.shadowOffsetY;
    }
    set shadowOffsetY(e) {
      this.set(`shadowOffsetY`, e);
    }
    get imageSmoothingEnabled() {
      return this.st.imageSmoothingEnabled;
    }
    set imageSmoothingEnabled(e) {
      this.set(`imageSmoothingEnabled`, e);
    }
    get imageSmoothingQuality() {
      return this.st.imageSmoothingQuality;
    }
    set imageSmoothingQuality(e) {
      this.set(`imageSmoothingQuality`, e);
    }
    get filter() {
      return this.st.filter;
    }
    set filter(e) {
      this.set(`filter`, e);
    }
    get lang() {
      return this.st.lang;
    }
    set lang(e) {
      this.set(`lang`, e);
    }
    save() {
      (this.stack.push({ ...this.st }),
        this.dashStack.push(this.dash),
        this.p1(ds));
    }
    restore() {
      let e = this.stack.pop();
      e && (this.st = e);
      let t = this.dashStack.pop();
      (t && (this.dash = t), this.p1(fs));
    }
    setLineDash(e) {
      let t = Array.from(e, Number);
      ((this.dash = t), this.p2(Cs, t.length));
      for (let e = 0; e < t.length; e++) this.p1(t[e]);
    }
    getLineDash() {
      return this.dash.slice();
    }
    translate(e, t) {
      this.p3(ps, e, t);
    }
    rotate(e) {
      this.p2(ms, e);
    }
    scale(e, t) {
      this.p3(hs, e, t);
    }
    transform(e, t, n, r, i, a) {
      this.p7(vs, e, t, n, r, i, a);
    }
    setTransform(e, t, n, r, i, a) {
      if (typeof e != `number`) {
        if (e !== void 0)
          throw Error(
            `site art recorder: setTransform(DOMMatrix) is not recordable`,
          );
        this.p1(_s);
        return;
      }
      this.p7(gs, e, t ?? 0, n ?? 0, r ?? 1, i ?? 0, a ?? 0);
    }
    resetTransform() {
      this.p1(_s);
    }
    fillRect(e, t, n, r) {
      this.p5(Ko, e, t, n, r);
    }
    strokeRect(e, t, n, r) {
      this.p5(qo, e, t, n, r);
    }
    clearRect(e, t, n, r) {
      this.p5(Jo, e, t, n, r);
    }
    beginPath() {
      this.p1(Yo);
    }
    closePath() {
      this.p1(Xo);
    }
    moveTo(e, t) {
      this.p3(Zo, e, t);
    }
    lineTo(e, t) {
      this.p3(Qo, e, t);
    }
    quadraticCurveTo(e, t, n, r) {
      this.p5($o, e, t, n, r);
    }
    bezierCurveTo(e, t, n, r, i, a) {
      this.p7(es, e, t, n, r, i, a);
    }
    arc(e, t, n, r, i, a) {
      this.p6(a ? ns : ts, e, t, n, r, i);
    }
    arcTo(e, t, n, r, i) {
      this.p6(js, e, t, n, r, i);
    }
    ellipse(e, t, n, r, i, a, o, s) {
      this.p8(s ? is : rs, e, t, n, r, i, a, o);
    }
    rect(e, t, n, r) {
      this.p5(as, e, t, n, r);
    }
    roundRect(e, t, n, r, i) {
      let a =
        i === void 0 ? [0] : typeof i == `number` ? [i] : Array.from(i, Number);
      if (a.some((e) => typeof e != `number` || e !== e))
        throw Error(
          `site art recorder: roundRect(DOMPointInit) is not recordable`,
        );
      this.p6(Ms, e, t, n, r, a.length);
      for (let e = 0; e < a.length; e++) this.p1(a[e]);
    }
    fill(e) {
      if (e !== void 0 && typeof e != `string`)
        throw Error(`site art recorder: fill(Path2D) is not recordable`);
      this.p1(e === `evenodd` ? ss : os);
    }
    stroke(e) {
      if (e !== void 0)
        throw Error(`site art recorder: stroke(Path2D) is not recordable`);
      this.p1(cs);
    }
    clip(e) {
      if (e !== void 0 && typeof e != `string`)
        throw Error(`site art recorder: clip(Path2D) is not recordable`);
      this.p1(e === `evenodd` ? us : ls);
    }
    fillText(e, t, n, r) {
      r === void 0
        ? this.p4(ys, this.s(String(e)), t, n)
        : this.p5(bs, this.s(String(e)), t, n, r);
    }
    strokeText(e, t, n, r) {
      r === void 0
        ? this.p4(xs, this.s(String(e)), t, n)
        : this.p5(Ss, this.s(String(e)), t, n, r);
    }
    measureText(e) {
      if (!this.measure) throw Error(`site art recorder: no measuring context`);
      return this.measure.text(this.st, String(e));
    }
    createLinearGradient(e, t, n, r) {
      let i = this.gid++;
      return (this.p6(Os, i, e, t, n, r), new Rs(i, this));
    }
    createRadialGradient(e, t, n, r, i, a) {
      let o = this.gid++;
      return (this.p8(ks, o, e, t, n, r, i, a), new Rs(o, this));
    }
    createConicGradient(e, t, n) {
      let r = this.gid++;
      return (this.p5(Ns, r, e, t, n), new Rs(r, this));
    }
    stop(e, t, n) {
      this.p4(As, e, t, this.s(String(n)));
    }
  };
function Vs(e) {
  return { i: 0, grads: Array(e.grads).fill(null) };
}
var Hs = typeof performance < `u` ? () => performance.now() : () => Date.now();
function Us(e, t, n, r = 0) {
  let i = t.nums,
    a = t.strs,
    o = n.grads,
    s = i.length,
    c = e,
    l = r > 0 ? Hs() : 0,
    u = n.i,
    d = 0;
  for (; u < s;) {
    if (r > 0 && !(++d & 7) && Hs() - l >= r) return ((n.i = u), !1);
    let t = i[u++];
    switch (t) {
      case Ko:
        (e.fillRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case qo:
        (e.strokeRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Jo:
        (e.clearRect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Yo:
        e.beginPath();
        break;
      case Xo:
        e.closePath();
        break;
      case Zo:
        (e.moveTo(i[u], i[u + 1]), (u += 2));
        break;
      case Qo:
        (e.lineTo(i[u], i[u + 1]), (u += 2));
        break;
      case $o:
        (e.quadraticCurveTo(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case es:
        (e.bezierCurveTo(
          i[u],
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
          i[u + 5],
        ),
          (u += 6));
        break;
      case ts:
        (e.arc(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4]), (u += 5));
        break;
      case ns:
        (e.arc(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], !0), (u += 5));
        break;
      case js:
        (e.arcTo(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4]), (u += 5));
        break;
      case rs:
        (e.ellipse(
          i[u],
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
          i[u + 5],
          i[u + 6],
        ),
          (u += 7));
        break;
      case is:
        (e.ellipse(
          i[u],
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
          i[u + 5],
          i[u + 6],
          !0,
        ),
          (u += 7));
        break;
      case as:
        (e.rect(i[u], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Ms: {
        let t = i[u + 4],
          n = [];
        for (let e = 0; e < t; e++) n.push(i[u + 5 + e]);
        (e.roundRect(i[u], i[u + 1], i[u + 2], i[u + 3], t === 1 ? n[0] : n),
          (u += 5 + t));
        break;
      }
      case os:
        e.fill();
        break;
      case ss:
        e.fill(`evenodd`);
        break;
      case cs:
        e.stroke();
        break;
      case ls:
        e.clip();
        break;
      case us:
        e.clip(`evenodd`);
        break;
      case ds:
        e.save();
        break;
      case fs:
        e.restore();
        break;
      case ps:
        (e.translate(i[u], i[u + 1]), (u += 2));
        break;
      case ms:
        (e.rotate(i[u]), (u += 1));
        break;
      case hs:
        (e.scale(i[u], i[u + 1]), (u += 2));
        break;
      case vs:
        (e.transform(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], i[u + 5]),
          (u += 6));
        break;
      case gs:
        (e.setTransform(i[u], i[u + 1], i[u + 2], i[u + 3], i[u + 4], i[u + 5]),
          (u += 6));
        break;
      case _s:
        e.resetTransform();
        break;
      case ys:
        (e.fillText(a[i[u]], i[u + 1], i[u + 2]), (u += 3));
        break;
      case bs:
        (e.fillText(a[i[u]], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case xs:
        (e.strokeText(a[i[u]], i[u + 1], i[u + 2]), (u += 3));
        break;
      case Ss:
        (e.strokeText(a[i[u]], i[u + 1], i[u + 2], i[u + 3]), (u += 4));
        break;
      case Cs: {
        let t = i[u],
          n = [];
        for (let e = 0; e < t; e++) n.push(i[u + 1 + e]);
        (e.setLineDash(n), (u += 1 + t));
        break;
      }
      case ws:
        ((c[Ps[i[u]]] = i[u + 1]), (u += 2));
        break;
      case Ts:
        ((c[Ps[i[u]]] = a[i[u + 1]]), (u += 2));
        break;
      case Ds:
        ((c[Ps[i[u]]] = i[u + 1] !== 0), (u += 2));
        break;
      case Es:
        ((c[Ps[i[u]]] = o[i[u + 1]]), (u += 2));
        break;
      case Os:
        ((o[i[u]] = e.createLinearGradient(
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
        )),
          (u += 5));
        break;
      case ks:
        ((o[i[u]] = e.createRadialGradient(
          i[u + 1],
          i[u + 2],
          i[u + 3],
          i[u + 4],
          i[u + 5],
          i[u + 6],
        )),
          (u += 7));
        break;
      case Ns:
        ((o[i[u]] = e.createConicGradient(i[u + 1], i[u + 2], i[u + 3])),
          (u += 4));
        break;
      case As:
        (o[i[u]]?.addColorStop(i[u + 1], a[i[u + 2]]), (u += 3));
        break;
      default:
        throw Error(`site art replay: bad opcode ${t} at ${u - 1}`);
    }
  }
  return ((n.i = u), !0);
}
function Ws(e, t, n, r, i, a) {
  (e.save(),
    e.translate(t, n),
    e.beginPath(),
    e.rect(-a, -a, r + a * 2, i + a * 2),
    e.clip());
}
var Gs = [
    `font`,
    `letterSpacing`,
    `wordSpacing`,
    `fontKerning`,
    `direction`,
    `fontStretch`,
    `fontVariantCaps`,
    `textRendering`,
    `lang`,
  ],
  Ks = 4e3;
function qs(e) {
  let t = ``;
  for (let n = 0; n < Gs.length; n++) t += String(e[Gs[n]]) + ``;
  return t;
}
function Js(e, t) {
  let n = {};
  for (let r = 0; r < 9; r++) n[Go[r]] = e[t + r];
  return n;
}
function Ys(e, t) {
  let n = /(\d+(?:\.\d+)?)px/.exec(String(e.font ?? ``)),
    r = n ? +n[1] : 10,
    i = 0;
  for (let e of t) {
    let t = e.codePointAt(0) ?? 0;
    i += t >= 11904 ? r : e === ` ` ? r * 0.3 : r * 0.55;
  }
  return {
    width: i,
    actualBoundingBoxLeft: 0,
    actualBoundingBoxRight: i,
    actualBoundingBoxAscent: r * 0.8,
    actualBoundingBoxDescent: r * 0.2,
    fontBoundingBoxAscent: r * 0.9,
    fontBoundingBoxDescent: r * 0.25,
    alphabeticBaseline: 0,
    hangingBaseline: r * 0.8,
  };
}
var Xs = class {
    map = new Map();
    hits = 0;
    misses = 0;
    get size() {
      return this.map.size;
    }
    get(e, t) {
      return this.map.get(e + `` + t);
    }
    put(e, t, n = 0) {
      this.map.size >= Ks && this.map.clear();
      let r = new Float64Array(9);
      for (let e = 0; e < 9; e++) r[e] = t[n + e];
      this.map.set(qs(e[0]) + `` + e[1], r);
    }
    putMetrics(e, t) {
      let n = t,
        r = new Float64Array(9);
      for (let e = 0; e < 9; e++) r[e] = +(n[Go[e]] ?? 0) || 0;
      this.put(e, r);
    }
    clear() {
      this.map.clear();
    }
  },
  Zs = class {
    cache;
    queue = [];
    queued = new Set();
    constructor(e) {
      this.cache = e;
    }
    get missed() {
      return this.queue.length > 0;
    }
    text(e, t) {
      let n = qs(e),
        r = this.cache.get(n, t);
      if (r) return (this.cache.hits++, Js(r, 0));
      this.cache.misses++;
      let i = n + `` + t;
      if (!this.queued.has(i)) {
        this.queued.add(i);
        let n = {};
        for (let t = 0; t < Gs.length; t++) n[Gs[t]] = e[Gs[t]];
        this.queue.push([n, t]);
      }
      return Ys(e, t);
    }
  },
  Qs = () => (typeof performance < `u` ? performance.now() : Date.now()),
  $s = class e {
    create;
    idleMs = 1e4;
    static TIMEOUT_MS = 12e3;
    w = null;
    seq = 1;
    pending = new Map();
    idle = 0;
    off = null;
    stats = {
      spawns: 0,
      measures: 0,
      queries: 0,
      paints: 0,
      workerMsMax: 0,
      failures: 0,
      why: ``,
    };
    constructor(e) {
      ((this.create = e),
        e
          ? (typeof Worker > `u` ||
              typeof OffscreenCanvas > `u` ||
              typeof createImageBitmap != `function`) &&
            (this.off = `no Worker / OffscreenCanvas`)
          : (this.off = `no worker`));
    }
    get usable() {
      return this.off === null;
    }
    ensure() {
      if (this.off) return null;
      if (this.w) return this.w;
      try {
        let e = this.create();
        return (
          (e.onmessage = (e) => this.onReply(e.data)),
          (e.onerror = (e) => {
            (e.preventDefault?.(),
              this.disable(`worker error: ${e.message ?? `load failed`}`));
          }),
          (this.w = e),
          this.stats.spawns++,
          e
        );
      } catch (e) {
        return (this.disable(`spawn failed: ${String(e)}`), null);
      }
    }
    onReply(e) {
      let t = this.pending.get(e.id);
      if (e.t === `x`) {
        this.disable(e.why);
        return;
      }
      if (!t) {
        e.t === `p` && e.bmp.close();
        return;
      }
      (this.pending.delete(e.id),
        t.abandoned && e.t === `p` ? e.bmp.close() : (t.reply = e),
        (t.done = !0),
        e.t === `p` &&
          (this.stats.paints++,
          e.ms > this.stats.workerMsMax &&
            (this.stats.workerMsMax = Math.round(e.ms * 10) / 10)),
        this.armIdle());
    }
    armIdle() {
      (this.idle && clearTimeout(this.idle),
        (this.idle = 0),
        !this.pending.size &&
          this.w &&
          (this.idle = setTimeout(() => {
            ((this.idle = 0),
              !this.pending.size &&
                this.w &&
                (this.w.terminate(), (this.w = null)));
          }, this.idleMs)));
    }
    disable(e) {
      (this.off === null &&
        ((this.off = e),
        this.stats.failures++,
        (this.stats.why = e.slice(0, 160)),
        typeof console < `u` &&
          console.info(
            `[init] sites atlas paints on the main thread (${e.slice(0, 120)})`,
          )),
        this.idle && clearTimeout(this.idle),
        (this.idle = 0),
        (this.w &&= (this.w.terminate(), null)));
      for (let e of this.pending.values()) ((e.done = !0), (e.reply = null));
      this.pending.clear();
    }
    send(e) {
      let t = { done: !1, reply: null, t0: Qs() },
        n = this.ensure();
      if (!n) return ((t.done = !0), t);
      (this.idle && clearTimeout(this.idle),
        (this.idle = 0),
        this.pending.set(e.id, t));
      try {
        n.postMessage(e);
      } catch (e) {
        this.disable(`post failed: ${String(e)}`);
      }
      return t;
    }
    poll(t) {
      return (
        !t.done &&
        (Qs() - t.t0 > e.TIMEOUT_MS &&
          this.disable(`no reply in ${e.TIMEOUT_MS} ms`),
        !t.done)
      );
    }
    measure(e) {
      return (
        this.stats.measures++,
        (this.stats.queries += e.length),
        this.send({ t: `m`, id: this.seq++, q: e })
      );
    }
    paint(e, t, n, r) {
      return this.send({
        t: `p`,
        id: this.seq++,
        size: e,
        white: t,
        gutter: n,
        arts: r,
      });
    }
    dispose() {
      (this.idle && clearTimeout(this.idle),
        (this.idle = 0),
        this.w?.terminate(),
        (this.w = null));
      for (let e of this.pending.values())
        (e.reply && e.reply.t === `p` && e.reply.bmp.close(),
          (e.done = !0),
          (e.reply = null));
      this.pending.clear();
    }
  },
  ec = `"PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC",system-ui,sans-serif`,
  tc = `"Songti TC","Noto Serif TC","PMingLiU","MingLiU",serif`,
  nc = Symbol(`sites-atlas-wait`),
  rc = 4,
  ic = 32,
  ac = 16,
  oc = 3,
  sc = 2,
  cc = 120,
  lc = 1.5,
  uc = 1.5,
  dc = 6,
  fc = typeof location < `u` && /[?&]sitesworker=0(&|$)/.test(location.search),
  pc = 0.95,
  mc = 12,
  hc = [],
  gc = [],
  _c = 9;
function vc(e) {
  return typeof e.legibility == `number` ? e.legibility : Ho[Uo(e.key)];
}
function yc(e, t) {
  return t > e.upto ? 1 : t === e.upto ? e.factor : (e.under ?? e.factor);
}
var bc = [0, 1, 2, 3],
  xc = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55],
  Sc = 0.55,
  Cc = (() => {
    let e = [],
      t = new Set();
    for (let n of bc)
      for (let r of [!1, !0])
        if (!(r && n === bc[0]))
          for (let i of xc) {
            let a = r ? Sc : i;
            if (a > i) continue;
            let o = `${n}:${i}:${a}`;
            t.has(o) || (t.add(o), e.push({ upto: n, factor: i, under: a }));
          }
    return e;
  })(),
  wc = new Set();
function $() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
var Tc = class e {
    renderer;
    anisotropy;
    size;
    slotPx;
    perRow;
    slotCount;
    headless;
    scale;
    whitePx;
    white;
    tex = null;
    canvas = null;
    g = null;
    src = null;
    owner;
    slots = new Map();
    rects = new Map();
    ghostOwner;
    ghosts = new Map();
    disposed = !1;
    paintCount = new Map();
    gens = new Map();
    stealer = null;
    whiteOnly = null;
    countersOut = {
      slotCount: 0,
      slotsUsed: 0,
      sitesResident: 0,
      paints: 0,
      repaints: 0,
      evictions: 0,
      uploads: 0,
      repaintsPerSec: 0,
      missed: 0,
      full: 0,
      defers: 0,
      stepMaxMs: 0,
      steals: 0,
      maxRepaintsPerSite: 0,
      everPainted: 0,
      painterMaxMs: 0,
      painterMaxKey: ``,
      fontWarmMs: 0,
      reclaims: 0,
      dropped: 0,
      droppedKeys: [],
    };
    repaintWindowAt = 0;
    repaintWindowN = 0;
    lastUploadAt = -1 / 0;
    client;
    measures = new Xs();
    mainMeasure = null;
    canvasDirty = !1;
    stepKind = ``;
    workerAllowed = !1;
    loading = !0;
    ready = !1;
    scratch = new Wo();
    static DUMMY = { u0: 0, v0: 0, u1: 1, v1: 1 };
    static DUMMY_WHITE = { u0: 0.5, v0: 0.5, u1: 0.5, v1: 0.5 };
    constructor(t, n, r = 4) {
      ((this.renderer = t),
        (this.anisotropy = r),
        (this.size = n ? gt.mobile : gt.desktop),
        (this.slotPx = n ? ht.mobile : ht.desktop),
        (this.scale = this.slotPx / 512),
        (this.perRow = Math.floor(this.size / this.slotPx)),
        (this.slotCount = this.perRow * this.perRow),
        (this.owner = Array(this.slotCount).fill(null)),
        (this.ghostOwner = Array(this.slotCount).fill(null)),
        (this.headless = !t || typeof document > `u`),
        (this.whitePx = Math.max(ac, Math.round(ic * this.scale))));
      let i = this.whitePx / 2 / this.size;
      ((this.white = this.headless
        ? e.DUMMY_WHITE
        : { u0: i, v0: i, u1: i, v1: i }),
        (this.client = this.headless
          ? null
          : new $s(
              fc
                ? null
                : () =>
                    new Worker(
                      new URL(
                        `/tokyo/assets/artWorker-B424lVEq.js`,
                        `` + import.meta.url,
                      ),
                      { type: `module`, name: `sites-art` },
                    ),
            )),
        this.client && n && (this.client.idleMs = 4e3),
        this.client &&
          (this.countersOut.worker = this.client.usable
            ? `deferred until the load settles`
            : (this.client.off ?? ``)));
    }
    gameReady() {
      this.ready = !0;
    }
    allowWorker() {
      this.workerAllowed ||
        ((this.workerAllowed = !0),
        (this.loading = !1),
        (this.ready = !0),
        this.client?.usable && (this.countersOut.worker = ``));
    }
    worker() {
      return this.workerAllowed && this.client?.usable ? this.client : null;
    }
    get created() {
      return this.tex !== null;
    }
    get slotsUsed() {
      let e = 0;
      for (let t of this.owner) t !== null && e++;
      return e;
    }
    get slotsFree() {
      return this.slotCount - this.slotsUsed;
    }
    get stats() {
      let e = this.countersOut;
      ((e.slotCount = this.slotCount),
        (e.slotsUsed = this.slotsUsed),
        (e.sitesResident = this.slots.size),
        (e.everPainted = this.paintCount.size));
      let t = $();
      return (
        t - this.repaintWindowAt >= 1e3 &&
          ((e.repaintsPerSec = this.repaintWindowN),
          (this.repaintWindowN = 0),
          (this.repaintWindowAt = t)),
        e
      );
    }
    get counters() {
      return this.stats;
    }
    rectsGen(e) {
      return this.gens.get(e) ?? 0;
    }
    paintsOf(e) {
      return this.paintCount.get(e) ?? 0;
    }
    setStealer(e) {
      this.stealer = e;
    }
    sinceUpload() {
      return this.lastUploadAt === -1 / 0 ? 1 / 0 : $() - this.lastUploadAt;
    }
    get texture() {
      return this.ensure();
    }
    ensure() {
      if (this.tex) return this.tex;
      if (this.headless)
        return (
          (this.tex = new ee()),
          (this.tex.name = `sites-atlas-headless`),
          this.tex
        );
      let e = this.size,
        t = new fe(null, e, e, B, _);
      ((t.name = `sites-atlas`),
        (t.source.dataReady = !1),
        (t.colorSpace = c),
        (t.flipY = !1),
        (t.generateMipmaps = !0),
        (t.minFilter = le),
        (t.magFilter = ge),
        (t.wrapS = t.wrapT = ie),
        (t.anisotropy = this.anisotropy),
        (t.unpackAlignment = 4),
        (t.needsUpdate = !0),
        (this.tex = t));
      try {
        (this.renderer.initTexture(t),
          this.seedWhite() || (this.beginSlotCanvas(0), this.upload(0)));
      } catch (e) {
        console.warn(`[init] sites atlas allocation failed`, e);
      }
      return t;
    }
    ensureCanvas() {
      if (this.g) return this.g;
      if (this.headless) return null;
      let e = document.createElement(`canvas`);
      ((e.width = this.slotPx), (e.height = this.slotPx));
      let t = e.getContext(`2d`);
      return t
        ? ((this.canvas = e),
          (this.g = t),
          (this.src = new ee(e)),
          (this.src.name = `sites-atlas-src`),
          this.warmFontCache(),
          t)
        : null;
    }
    warmFontCache() {
      if (this.headless || typeof document > `u`) return;
      let e = $();
      try {
        let e = document.createElement(`canvas`);
        e.width = e.height = 16;
        let t = e.getContext(`2d`);
        if (!t) return;
        for (let e of [ec, tc])
          for (let n of [14, 48])
            ((t.font = `900 ${n}px ${e}`), t.fillText(`國街豆漿一`, 0, 14));
      } catch {}
      this.countersOut.fontWarmMs = Math.round(($() - e) * 100) / 100;
    }
    beginSlotCanvas(e) {
      this.canvasDirty &&
        this.canvas &&
        ((this.canvas.width = this.slotPx), (this.canvasDirty = !1));
      let t = this.ensureCanvas();
      t &&
        (t.setTransform(1, 0, 0, 1, 0, 0),
        (t.globalAlpha = 1),
        (t.globalCompositeOperation = `source-over`),
        (t.fillStyle = `#808080`),
        t.fillRect(0, 0, this.slotPx, this.slotPx),
        e === 0 &&
          ((t.fillStyle = `#ffffff`),
          t.fillRect(0, 0, this.whitePx, this.whitePx)));
    }
    slotOrigin(e) {
      return [
        (e % this.perRow) * this.slotPx,
        Math.floor(e / this.perRow) * this.slotPx,
      ];
    }
    upload(e) {
      if (!this.renderer || !this.tex || !this.src) return;
      let [t, n] = this.slotOrigin(e),
        r = $();
      (this.renderer.copyTextureToTexture(
        this.src,
        this.tex,
        null,
        new ve(t, n),
        0,
        0,
      ),
        (this.countersOut.syncUploads =
          (this.countersOut.syncUploads ?? 0) + 1),
        this.noteUpload(r));
    }
    noteUpload(e) {
      let t = this.countersOut;
      (t.uploads++, (this.lastUploadAt = $()));
      let n = this.lastUploadAt - e;
      ((t.uploadMsSum = (t.uploadMsSum ?? 0) + n),
        n > (t.uploadMaxMs ?? 0) &&
          (t.uploadMaxMs = Math.round(n * 100) / 100));
    }
    noteRaster(e, t, n) {
      let r = this.countersOut;
      e > (r.rasterMaxMs ?? 0) &&
        ((r.rasterMaxMs = Math.round(e * 100) / 100),
        (r.rasterMaxKey = `${t}/${n}`));
    }
    snapshot() {
      if (!this.canvas || typeof createImageBitmap != `function`) return null;
      let e = { bmp: null, done: !1, abandoned: !1 },
        t = $();
      try {
        createImageBitmap(this.canvas).then(
          (t) => {
            (e.abandoned ? t.close() : (e.bmp = t), (e.done = !0));
          },
          () => {
            e.done = !0;
          },
        );
      } catch {
        return null;
      }
      let n = $() - t;
      return (
        n > (this.countersOut.snapCallMaxMs ?? 0) &&
          (this.countersOut.snapCallMaxMs = Math.round(n * 100) / 100),
        e
      );
    }
    seedWhite() {
      let e = this.renderer;
      if (!e || !this.tex) return !1;
      let t = e.properties.get(this.tex).__webglTexture;
      if (!t) return !1;
      let n = e.getContext(),
        r = this.whitePx,
        i = new Uint8Array(r * r * 4).fill(255);
      (e.state.bindTexture(n.TEXTURE_2D, t, n.TEXTURE0),
        e.state.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !1),
        e.state.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1));
      try {
        (n.texSubImage2D(
          n.TEXTURE_2D,
          0,
          0,
          0,
          r,
          r,
          n.RGBA,
          n.UNSIGNED_BYTE,
          i,
        ),
          n.generateMipmap(n.TEXTURE_2D));
      } finally {
        e.state.unbindTexture();
      }
      return !0;
    }
    mainMeasurer() {
      if (this.mainMeasure) return this.mainMeasure;
      if (typeof document > `u`) return null;
      let e = document.createElement(`canvas`);
      e.width = e.height = 8;
      let t = e.getContext(`2d`);
      return t ? (this.mainMeasure = new zs(t)) : null;
    }
    *resolveMeasures(e, t) {
      let n = this.countersOut;
      n.measured = (n.measured ?? 0) + e.length;
      let r = this.worker();
      if (r) {
        this.stepKind = `measure-post`;
        let i = r.measure(e);
        try {
          for (; r.poll(i);)
            if (((this.stepKind = `measure-wait`), yield nc, !t())) return !1;
        } finally {
          i.done || (i.abandoned = !0);
        }
        let a = i.reply;
        if (a && a.t === `m` && a.r.length === e.length * 9) {
          for (let t = 0; t < e.length; t++)
            this.measures.put(e[t], a.r, t * 9);
          return !0;
        }
        n.worker = r.off ?? ``;
      }
      let i = this.mainMeasurer();
      if (!i) return !0;
      let a = $();
      for (let n = 0; n < e.length; n++)
        if (
          ((this.stepKind = `measure`),
          this.measures.putMetrics(e[n], i.text(e[n][0], e[n][1])),
          n < e.length - 1 && $() - a > uc)
        ) {
          if ((yield, !t())) return !1;
          a = $();
        }
      return !0;
    }
    uploadBitmap(e, t) {
      let n = this.renderer;
      if (!n || !this.tex) return !1;
      let r = n.properties.get(this.tex).__webglTexture;
      if (!r) return !1;
      let i = n.getContext(),
        [a, o] = this.slotOrigin(e),
        s = $();
      (n.state.bindTexture(i.TEXTURE_2D, r, i.TEXTURE0),
        n.state.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1),
        n.state.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1));
      try {
        (i.texSubImage2D(i.TEXTURE_2D, 0, a, o, i.RGBA, i.UNSIGNED_BYTE, t),
          i.generateMipmap(i.TEXTURE_2D));
      } finally {
        n.state.unbindTexture();
      }
      return (
        (this.countersOut.snapUploads =
          (this.countersOut.snapUploads ?? 0) + 1),
        this.noteUpload(s),
        !0
      );
    }
    addSlot(e) {
      let t = this.slots.get(e);
      if (!t || t.length >= oc || this.disposed) return null;
      let n = -1;
      for (let e = 0; e < this.slotCount && n < 0; e++)
        this.owner[e] === null && this.ghostOwner[e] === null && (n = e);
      for (let e = 0; e < this.slotCount && n < 0; e++)
        this.owner[e] === null && (n = e);
      if (n < 0) return null;
      let r = this.ghostOwner[n];
      return (r && this.dropGhost(r), (this.owner[n] = e), t.push(n), t);
    }
    allocSlot(e, t = 1) {
      let n = this.slots.get(e);
      if (n) return n;
      if (this.disposed) return null;
      this.ensure();
      let r = Math.max(1, Math.min(oc, t | 0));
      if (this.slotsFree < r && this.stealer) {
        this.countersOut.steals++;
        try {
          this.stealer(e, r);
        } catch (e) {
          console.warn(`[test] sites atlas stealer failed`, e);
        }
        if (this.disposed) return null;
      }
      let i = [];
      for (let e = 0; e < this.slotCount && i.length < r; e++)
        this.owner[e] === null && this.ghostOwner[e] === null && i.push(e);
      for (let e = 0; e < this.slotCount && i.length < r; e++)
        this.owner[e] === null &&
          this.ghostOwner[e] !== null &&
          !i.includes(e) &&
          i.push(e);
      if (i.length < r) return null;
      for (let t of i) {
        let n = this.ghostOwner[t];
        (n && this.dropGhost(n), (this.owner[t] = e));
      }
      return (this.slots.set(e, i), i);
    }
    freeSlot(e) {
      let t = this.slots.get(e);
      if (!t) return;
      this.countersOut.evictions++;
      for (let n of t) this.owner[n] === e && (this.owner[n] = null);
      this.slots.delete(e);
      let n = this.rects.get(e);
      if ((this.rects.delete(e), n && n.size)) {
        for (let n of t) this.owner[n] === null && (this.ghostOwner[n] = e);
        this.ghosts.set(e, { slots: t.slice(), rects: n });
      }
    }
    dropGhost(e) {
      let t = this.ghosts.get(e);
      if (t) {
        for (let n of t.slots)
          this.ghostOwner[n] === e && (this.ghostOwner[n] = null);
        this.ghosts.delete(e);
      }
    }
    reclaim(e, t, n) {
      let r = this.ghosts.get(e);
      if (!r || this.disposed || r.slots.length < Math.max(1, n)) return !1;
      for (let t of r.slots)
        if (this.owner[t] !== null || this.ghostOwner[t] !== e) return !1;
      if (t) {
        for (let e of t) if (!r.rects.has(e.key)) return !1;
      }
      for (let t of r.slots) ((this.owner[t] = e), (this.ghostOwner[t] = null));
      return (
        this.slots.set(e, r.slots),
        this.rects.set(e, r.rects),
        this.ghosts.delete(e),
        this.countersOut.reclaims++,
        !0
      );
    }
    slotsOf(e) {
      return this.slots.get(e) ?? null;
    }
    dryPack(e, t = 1, n = !0) {
      let r = [];
      for (let e = 0; e < Math.max(1, t); e++) r.push(n ? e : e + 1);
      let { placed: i, missed: a } = this.planFor(r, e ?? gc),
        o = 0;
      for (let e of i)
        o = Math.max(
          o,
          (e.slot === r[0] ? 0 : this.slotPx * r.indexOf(e.slot)) +
            e.y +
            e.h +
            rc,
        );
      let s = this.slotPx * Math.max(1, t);
      return {
        arts: (e ?? []).length,
        height: o,
        capacity: s,
        fill: s > 0 ? o / s : 0,
        missed: a,
      };
    }
    noteTierDown(e, t) {
      let n = `${this.slotPx}:${e.length}:${e[0]?.key ?? ``}:${t.upto}:${t.factor}`;
      if (wc.has(n)) return;
      wc.add(n);
      let r = e
        .filter((e) => vc(e) <= t.upto)
        .map((e) => `${e.key}@${Math.round(yc(t, vc(e)) * 100)}%`);
      r.length &&
        console.info(
          `[init] sites atlas tier-down (${this.slotPx} px slot): ${r.join(`, `)} — painted smaller to keep 5% slot headroom`,
        );
    }
    packHeight(e, t) {
      let n = 0;
      for (let r of t)
        n = Math.max(
          n,
          (r.slot === e[0] ? 0 : this.slotPx * e.indexOf(r.slot)) +
            r.y +
            r.h +
            rc,
        );
      return n;
    }
    pack(e, t) {
      let n = this.packAt(e, t, null);
      if (t.length === 0 || this.fitsGate(e, n)) return n;
      let r = _c;
      for (let e = 0; e < t.length; e++) {
        let n = vc(t[e]);
        n < r && (r = n);
      }
      for (let i of Cc) {
        if (i.upto < r) continue;
        let a = this.packAt(e, t, i);
        if (
          ((a.missed.length < n.missed.length ||
            (a.missed.length === n.missed.length &&
              this.packHeight(e, a.placed) < this.packHeight(e, n.placed))) &&
            (n = a),
          this.fitsGate(e, a))
        )
          return (this.noteTierDown(t, i), a);
      }
      return n;
    }
    fitsGate(e, t) {
      let n = this.slotPx * Math.max(1, e.length);
      return t.missed.length === 0 && this.packHeight(e, t.placed) <= n * pc;
    }
    planFor(e, t) {
      let n = this.pack(e, t);
      if (t.length === 0 || this.fitsGate(e, n))
        return { keep: t, dropped: hc, ...n };
      let r = t.slice(),
        i = [];
      for (;;) {
        let t = -1,
          a = 0,
          o = 0;
        for (let e = 0; e < r.length; e++) {
          let n = vc(r[e]);
          if (n >= _c) continue;
          let i = r[e].w * r[e].h;
          (t < 0 || n < a || (n === a && i > o)) && ((t = e), (a = n), (o = i));
        }
        if (
          t < 0 ||
          (i.push(r[t].key),
          r.splice(t, 1),
          (n = this.pack(e, r)),
          r.length === 0 || this.fitsGate(e, n))
        )
          break;
      }
      return { keep: r, dropped: i, ...n };
    }
    planPack(e, t = 1, n = !0) {
      let r = [];
      for (let e = 0; e < Math.max(1, t); e++) r.push(n ? e : e + 1);
      let i = this.planFor(r, e ?? gc);
      return { keep: i.keep, dropped: i.dropped };
    }
    noteDropped(e, t) {
      let n = this.countersOut;
      n.dropped += t.length;
      for (let r = 0; r < t.length && !(n.droppedKeys.length >= mc); r++)
        n.droppedKeys.push(`${e}/${t[r]}`);
      console.warn(
        `[test] sites atlas trim ${e} (${this.slotPx} px slot): ${t.join(`,`)} — no rung of the shrink ladder fit`,
      );
    }
    packAt(e, t, n) {
      let r = this.slotPx,
        i = this.scale,
        a = [...t].sort(
          (e, t) => t.h - e.h || t.w - e.w || (e.key < t.key ? -1 : 1),
        ),
        o = [],
        s = [],
        c = 0,
        l = 0,
        u = 0,
        d = 0,
        f = () => {
          ((l = 0),
            (u = 0),
            (d = 0),
            e[c] === 0 && ((l = this.whitePx + rc), (d = this.whitePx + rc)));
        };
      f();
      for (let t of a) {
        let a = n ? yc(n, vc(t)) : 1,
          p = Math.max(1, Math.min(r - 8, Math.round(t.w * i * a))),
          m = Math.max(1, Math.min(r - 8, Math.round(t.h * i * a))),
          h = p + 8,
          g = m + 8,
          _ = !1;
        for (; c < e.length;) {
          if ((l + h > r && ((l = 0), (u += d), (d = 0)), u + g <= r)) {
            _ = !0;
            break;
          }
          (c++, c < e.length && f());
        }
        if (!_) {
          s.push(t.key);
          continue;
        }
        (o.push({ key: t.key, slot: e[c], x: l + rc, y: u + rc, w: p, h: m }),
          (l += h),
          (d = Math.max(d, g)));
      }
      return { placed: o, missed: s };
    }
    *paint(e, t, n = 1) {
      if (!t || t.length === 0 || this.reclaim(e, t, n)) return;
      let r = this.allocSlot(e, n);
      if (!r) {
        (this.countersOut.full++,
          console.warn(
            `[test] sites atlas full — ${e} wanted ${n} of ${this.slotCount} slots, uses white`,
          ));
        return;
      }
      let i = (this.paintCount.get(e) ?? 0) + 1;
      (this.paintCount.set(e, i),
        i > 1
          ? (this.countersOut.repaints++,
            this.repaintWindowN++,
            i - 1 > this.countersOut.maxRepaintsPerSite &&
              (this.countersOut.maxRepaintsPerSite = i - 1))
          : this.countersOut.paints++);
      let a = this.planFor(r, t);
      for (; (a.missed.length > 0 || a.dropped.length > 0) && this.addSlot(e);)
        a = this.planFor(this.slots.get(e), t);
      let o = a.placed,
        s = a.missed;
      (a.dropped.length && this.noteDropped(e, a.dropped),
        s.length &&
          ((this.countersOut.missed += s.length),
          console.warn(
            `[test] sites atlas slot overflow ${e}: ${s.join(`,`)}`,
          )));
      let c = new Map();
      for (let e of t) c.set(e.key, e);
      let l = new Map(),
        u = this.size;
      for (let e of o) {
        let [t, n] = this.slotOrigin(e.slot),
          r = t + e.x,
          i = n + e.y;
        l.set(e.key, {
          u0: (r + 0.5) / u,
          u1: (r + e.w - 0.5) / u,
          v0: (i + e.h - 0.5) / u,
          v1: (i + 0.5) / u,
        });
      }
      if (this.headless) {
        this.rects.set(e, l);
        return;
      }
      let d = () => !this.disposed && this.slots.get(e) === r;
      if (!(
        this.sinceUpload() < sc && (this.countersOut.defers++, yield, !d())
      ))
        for (let t of r) {
          let n = o.filter((e) => e.slot === t);
          if (n.length === 0) continue;
          let i = $(),
            a = Array(n.length).fill(null),
            s = this.loading && !this.ready,
            u = this.loading,
            f = [];
          if (!u) for (let e = 0; e < n.length; e++) f.push(e);
          for (let t = 0; f.length > 0 && !u; t++) {
            let r = t >= dc,
              i = [],
              o = [],
              s = new Set();
            for (let t of f) {
              let l = n[t],
                f = c.get(l.key),
                p = r ? null : new Zs(this.measures),
                m = new Bs(p ?? this.mainMeasurer(), this.scratch);
              this.stepKind = `rec:${l.key}`;
              let h = $(),
                g = !1;
              try {
                f.paint(m.g, l.w, l.h, new Oe(je(`site-art`, e, l.key)));
              } catch {
                g = !0;
              }
              let _ = $() - h;
              if (
                (_ > this.countersOut.painterMaxMs &&
                  ((this.countersOut.painterMaxMs = Math.round(_ * 100) / 100),
                  (this.countersOut.painterMaxKey = `${e}/${l.key}`)),
                g)
              ) {
                u = !0;
                break;
              }
              if (p && p.missed) {
                (i.push(t),
                  (this.countersOut.rerecords =
                    (this.countersOut.rerecords ?? 0) + 1));
                for (let e of p.queue) {
                  let t = JSON.stringify(e);
                  s.has(t) || (s.add(t), o.push(e));
                }
              } else a[t] = m.take();
              if ((yield, !d())) return;
            }
            if (((f = i), u || f.length === 0)) break;
            if (o.length && !(yield* this.resolveMeasures(o, d))) return;
          }
          let p = !1,
            m = this.tex,
            h = this.worker();
          if (!u && h) {
            this.stepKind = `post`;
            let e = [];
            for (let t = 0; t < n.length; t++)
              e.push({ x: n[t].x, y: n[t].y, w: n[t].w, h: n[t].h, ops: a[t] });
            let r = h.paint(this.slotPx, t === 0 ? this.whitePx : 0, rc, e),
              i = null;
            try {
              for (; h.poll(r);)
                if (((this.stepKind = `paint-wait`), yield nc, !d())) return;
              let e = r.reply;
              (e && e.t === `p` && (i = e.bmp),
                (this.stepKind = `upload`),
                i && this.tex === m && (p = this.uploadBitmap(t, i)));
            } finally {
              (r.done || (r.abandoned = !0), i?.close());
            }
            p
              ? (this.countersOut.workerPaints =
                  (this.countersOut.workerPaints ?? 0) + 1)
              : (this.countersOut.worker = h.off ?? `upload failed`);
          }
          if (!p) {
            ((this.countersOut.mainPaints =
              (this.countersOut.mainPaints ?? 0) + 1),
              this.beginSlotCanvas(t));
            let r = this.g;
            if (!r) return;
            for (let t = 0; t < n.length; t++) {
              let i = n[t],
                o = c.get(i.key),
                l = a[t];
              if (((this.canvasDirty = !0), Ws(r, i.x, i.y, i.w, i.h, rc), l)) {
                let t = Vs(l);
                for (;;) {
                  this.stepKind = `replay:${i.key}`;
                  let n = $(),
                    a = Us(r, l, t, lc),
                    o = $() - n;
                  if (
                    (o > (this.countersOut.replayMaxMs ?? 0) &&
                      (this.countersOut.replayMaxMs =
                        Math.round(o * 100) / 100),
                    a)
                  )
                    break;
                  if ((yield, !d())) return;
                  this.stepKind = `flush:${i.key}`;
                  let s = $(),
                    c = this.snapshot();
                  if (
                    (c && (c.abandoned = !0),
                    this.noteRaster($() - s, e, i.key),
                    yield,
                    !d())
                  )
                    return;
                }
              } else {
                this.stepKind = `paint:${i.key}`;
                let t = $();
                try {
                  o.paint(r, i.w, i.h, new Oe(je(`site-art`, e, i.key)));
                } catch (t) {
                  console.error(`[test] sites art painter failed`, e, i.key, t);
                }
                let n = $() - t;
                !s &&
                  n > this.countersOut.painterMaxMs &&
                  ((this.countersOut.painterMaxMs = Math.round(n * 100) / 100),
                  (this.countersOut.painterMaxKey = `${e}/${i.key}`));
              }
              if ((r.restore(), (this.canvasDirty = !1), yield, !d())) return;
              if (t < n.length - 1) {
                this.stepKind = `flush:${i.key}`;
                let t = $(),
                  n = this.snapshot();
                if (
                  (n && (n.abandoned = !0),
                  this.noteRaster($() - t, e, i.key),
                  yield,
                  !d())
                )
                  return;
              }
            }
            this.stepKind = `snapshot`;
            let i = $(),
              o = this.snapshot();
            if ((this.noteRaster($() - i, e, n[n.length - 1].key), o)) {
              let e = this.tex;
              try {
                for (let e = 0; !o.done && e < cc; e++)
                  if (
                    ((this.countersOut.snapWaitFrames =
                      (this.countersOut.snapWaitFrames ?? 0) + 1),
                    (this.stepKind = `snapshot-wait`),
                    yield nc,
                    !d())
                  )
                    return;
                ((this.stepKind = `upload`),
                  o.bmp && this.tex === e && (p = this.uploadBitmap(t, o.bmp)));
              } finally {
                ((o.abandoned = !0), o.bmp?.close(), (o.bmp = null));
              }
            }
            p || this.upload(t);
          }
          let g = this.rects.get(e);
          (g || this.rects.set(e, (g = new Map())),
            (t === r[0] || !g.size) && this.gens.set(e, this.rectsGen(e) + 1));
          for (let e of n) g.set(e.key, l.get(e.key));
          let _ = $() - i;
          if (
            (_ > this.countersOut.stepMaxMs &&
              (this.countersOut.stepMaxMs = Math.round(_ * 100) / 100),
            yield,
            !d())
          )
            return;
        }
    }
    view(t) {
      let n = this.white,
        r = () => this.sinceUpload();
      return this.headless
        ? { white: n, r: () => e.DUMMY, sinceUpload: r }
        : {
            white: n,
            r: (e) => this.rects.get(t)?.get(e) ?? n,
            sinceUpload: r,
          };
    }
    whiteView() {
      if (!this.whiteOnly) {
        let e = this.white;
        this.whiteOnly = {
          white: e,
          r: () => e,
          sinceUpload: () => this.sinceUpload(),
        };
      }
      return this.whiteOnly;
    }
    painted(e, t) {
      if (!t || t.length === 0) return !0;
      let n = this.rects.get(e);
      if (!n) return !1;
      for (let e of t) if (!n.has(e.key)) return !1;
      return !0;
    }
    slotsInUse() {
      return this.slots.size;
    }
    releaseGpu() {
      this.slots.size ||
        !this.tex ||
        this.headless ||
        (this.tex.dispose(),
        (this.tex = null),
        this.src?.dispose(),
        (this.src = null),
        this.canvas && ((this.canvas.width = 1), (this.canvas.height = 1)),
        (this.canvas = null),
        (this.g = null),
        this.rects.clear(),
        this.ghosts.clear(),
        this.ghostOwner.fill(null),
        this.measures.clear(),
        (this.mainMeasure = null),
        (this.scratch = new Wo()),
        (this.countersOut.releases = (this.countersOut.releases ?? 0) + 1));
    }
    dispose() {
      ((this.disposed = !0),
        this.client?.dispose(),
        this.tex?.dispose(),
        this.src?.dispose(),
        (this.tex = null),
        (this.src = null),
        this.canvas && ((this.canvas.width = 1), (this.canvas.height = 1)),
        (this.canvas = null),
        (this.g = null),
        this.slots.clear(),
        this.rects.clear(),
        this.paintCount.clear(),
        (this.stealer = null),
        (this.whiteOnly = null),
        this.owner.fill(null),
        this.ghosts.clear(),
        this.ghostOwner.fill(null));
    }
  },
  Ec = `site`,
  Dc = class {
    world;
    label;
    cs = [];
    fs = [];
    disposed = !1;
    constructor(e, t) {
      ((this.world = e), (this.label = t));
    }
    get colliderCount() {
      return this.cs.length;
    }
    get floorCount() {
      return this.fs.length;
    }
    addBox(e, t, n, r, i = 0, a = 1e3, o = Ec) {
      let s = this.world.addBox(e, t, n, r, i, a, o);
      return (this.cs.push(s), s);
    }
    addOBB(e, t, n, r, i, a = 0, o = 1e3, s = Ec) {
      let c = this.world.addOBB(e, t, n, r, i, a, o, s);
      return (this.cs.push(c), c);
    }
    addCircle(e, t, n, r = 0, i = 1e3, a = Ec) {
      let o = this.world.addCircle(e, t, n, r, i, a);
      return (this.cs.push(o), o);
    }
    addFloor(e, t, n, r, i, a = i, o = 0, s = Ec) {
      let c = this.world.addFloor(e, t, n, r, i, a, o, s);
      return (this.fs.push(c), c);
    }
    dispose() {
      if (!this.disposed) {
        this.disposed = !0;
        for (let e = 0; e < this.cs.length; e++) this.world.remove(this.cs[e]);
        for (let e = 0; e < this.fs.length; e++)
          this.world.removeFloor(this.fs[e]);
        ((this.cs.length = 0), (this.fs.length = 0));
      }
    }
  };
function Oc(e, t) {
  return new Dc(e, t);
}
var kc = new Set(),
  Ac = class {
    frame;
    list = [];
    cos;
    sin;
    colliders = 0;
    floors = 0;
    scope = null;
    warnings = [];
    constructor(e) {
      ((this.frame = e),
        (this.cos = Math.cos(e.facing)),
        (this.sin = Math.sin(e.facing)));
    }
    wx(e, t) {
      return this.frame.ox + e * this.cos - t * this.sin;
    }
    wz(e, t) {
      return this.frame.oz + e * this.sin + t * this.cos;
    }
    box(e, t, n, r, i = 0, a = i + 3) {
      let o = (e + n) / 2,
        s = (t + r) / 2;
      this.push({
        kind: `obb`,
        cx: this.wx(o, s),
        cz: this.wz(o, s),
        hx: Math.abs(n - e) / 2,
        hz: Math.abs(r - t) / 2,
        h: this.frame.facing,
        y0: this.frame.y0 + Math.min(i, a),
        y1: this.frame.y0 + Math.max(i, a),
      });
    }
    obb(e, t, n, r, i, a = 0, o = a + 3) {
      this.push({
        kind: `obb`,
        cx: this.wx(e, t),
        cz: this.wz(e, t),
        hx: Math.abs(n),
        hz: Math.abs(r),
        h: this.frame.facing - i,
        y0: this.frame.y0 + Math.min(a, o),
        y1: this.frame.y0 + Math.max(a, o),
      });
    }
    circle(e, t, n, r = 0, i = r + 3) {
      this.push({
        kind: `circle`,
        x: this.wx(e, t),
        z: this.wz(e, t),
        r: Math.abs(n),
        y0: this.frame.y0 + Math.min(r, i),
        y1: this.frame.y0 + Math.max(r, i),
      });
    }
    floor(e, t, n, r, i) {
      let a = (e + n) / 2,
        o = (t + r) / 2;
      this.push({
        kind: `floor`,
        cx: this.wx(a, o),
        cz: this.wz(a, o),
        hx: Math.abs(n - e) / 2,
        hz: Math.abs(r - t) / 2,
        h: this.frame.facing,
        y0: this.frame.y0 + i,
        y1: this.frame.y0 + i,
      });
    }
    stairs(e, t, n, r, i, a, o) {
      let s = Math.max(1, Math.round(i)),
        c = a;
      (c > 0 || (c = 0.15),
        c > 0.45 &&
          (this.warnings.push(`stairs rise ${a.toFixed(2)} > ${_t} clamped`),
          (c = _t)));
      let l = Math.sin(r),
        u = -Math.cos(r),
        d = this.frame.facing + r,
        f = Math.abs(n) / 2,
        p = Math.abs(o) / 2;
      for (let n = 0; n < s; n++) {
        let r = (n + 0.5) * Math.abs(o),
          i = e + l * r,
          a = t + u * r,
          s = this.wx(i, a),
          m = this.wz(i, a),
          h = this.frame.y0 + (n + 1) * c;
        (this.push({
          kind: `floor`,
          cx: s,
          cz: m,
          hx: f,
          hz: p,
          h: d,
          y0: h,
          y1: h,
        }),
          this.push({
            kind: `obb`,
            cx: s,
            cz: m,
            hx: f,
            hz: p,
            h: d,
            y0: this.frame.y0 - 0.3,
            y1: h - c / 2,
          }));
      }
      return c;
    }
    push(e) {
      (this.list.push(e),
        e.kind === `floor` ? this.floors++ : this.colliders++);
    }
    commit(e, t) {
      if (!e || this.list.length === 0) return null;
      this.list.length > 220 &&
        t !== `sites:shells` &&
        !kc.has(t) &&
        (kc.add(t),
        console.warn(
          `[test] sites ${t} registers ${this.list.length} collision shapes (> 220) — merge walls into fewer boxes`,
        ));
      let n = Oc(e, t);
      for (let e of this.list)
        e.kind === `obb`
          ? n.addOBB(e.cx, e.cz, e.hx, e.hz, e.h, e.y0, e.y1, Ec)
          : e.kind === `circle`
            ? n.addCircle(e.x, e.z, e.r, e.y0, e.y1, Ec)
            : n.addFloor(e.cx, e.cz, e.hx, e.hz, e.y0, e.y1, e.h, Ec);
      return ((this.scope = n), n);
    }
  },
  jc = 3e4,
  Mc = -1,
  Nc = !1;
function Pc() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function Fc(e, t, n, r = Lc) {
  let i = Ic(e, t, n, r);
  for (;;) {
    let e = i.next();
    if (e.done) return e.value;
  }
}
function* Ic(e, t, n, r = Lc) {
  let i = Array.isArray(e) ? e : [e],
    a = 0,
    o = 0;
  for (let e of i) {
    let t = e.getAttribute(`position`).count;
    ((a += t), (o += e.index ? e.index.count : t));
  }
  let s = new oe(i.length, Math.max(3, a), Math.max(3, o), t);
  s.name = n;
  let c = [];
  for (let e of i) (c.push(s.addInstance(s.addGeometry(e))), yield);
  ((s.perObjectFrustumCulled = !1), (s.sortObjects = !1));
  let l = 1 / 0,
    u = 1 / 0,
    f = 1 / 0,
    p = -1 / 0,
    m = -1 / 0,
    h = -1 / 0;
  for (let e of i) {
    let t = e.getAttribute(`position`).array;
    for (let e = 0; e < t.length; e += 3) {
      let n = t[e],
        r = t[e + 1],
        i = t[e + 2];
      (n < l && (l = n),
        n > p && (p = n),
        r < u && (u = r),
        r > m && (m = r),
        i < f && (f = i),
        i > h && (h = i));
    }
  }
  let g =
      l <= p
        ? new xe(new U(l, u, f), new U(p, m, h))
        : new xe(new U(), new U()),
    _ = g.getBoundingSphere(new d());
  ((s.boundingBox = g),
    (s.boundingSphere = _),
    (s.geometry.boundingBox = g.clone()),
    (s.geometry.boundingSphere = _.clone()));
  for (let e of i) e.dispose();
  if (r.length) {
    let e = r.map((e) => c[e]).filter((e) => e !== void 0),
      t = oe.prototype;
    ((s.onBeforeShadow = function (n, r, i, a, o, c, l) {
      for (let t = 0; t < e.length; t++) s.setVisibleAt(e[t], !1);
      t.onBeforeShadow.call(s, n, r, i, a, o, c, l);
    }),
      (s.onBeforeRender = function (n, r, i, a, o, c) {
        for (let t = 0; t < e.length; t++) s.setVisibleAt(e[t], !0);
        t.onBeforeRender.call(s, n, r, i, a, o, c);
      }));
  }
  return s;
}
var Lc = [];
function Rc(e) {
  return !!e.isBatchedMesh;
}
function zc(e) {
  let t = null;
  try {
    t = e?.landmarks?.material ?? null;
  } catch {
    t = null;
  }
  if (t) return { lm: t, leaf: t };
  let n = Pc();
  return (
    Mc < 0
      ? (Mc = n)
      : !Nc &&
        e?.landmarks &&
        `material` in e.landmarks &&
        n - Mc > jc &&
        ((Nc = !0),
        console.error(
          `[sites] landmark material still missing after 30 s — every site renders flat on sites-ext (check landmarks.init / LandmarksAPI.material)`,
        )),
    { lm: null, leaf: null }
  );
}
function Bc(e) {
  let t = e?.quality;
  return !t || t.mobile || t.level === `low` ? `low` : `high`;
}
function Vc(e, t, n = Bc(e), r) {
  let i = new fe(new Uint8Array([255, 255, 255, 255]), 1, 1, B, _);
  ((i.name = `sites-atlas-placeholder`),
    (i.colorSpace = c),
    (i.needsUpdate = !0));
  let a = t.created ? t.texture : i,
    o = In(a, 0.95);
  o.name = `sites-ext`;
  let s = In(a, 1);
  s.name = `sites-room`;
  let l = n === `high` && !r ? Ln() : null;
  l && ((l.name = `sites-glass`), (l.map = i));
  let u = zc(e),
    d = null;
  return (
    r && (d = Je(`opaque`, { policy: r.policy, map: a, name: `sites-city` })),
    {
      city: d,
      cityLook: r?.look ?? null,
      lm: u.lm ?? o,
      leaf: u.leaf ?? u.lm ?? o,
      ext: o,
      room: s,
      glass: l,
      lmFallback: !u.lm,
      leafFallback: !u.leaf,
      atlas: t,
      atlasBound: a !== i,
      placeholder: i,
      lmSource: u.lm ? `landmarks.material` : `fallback`,
    }
  );
}
function Hc(e, t) {
  if (!t.lmFallback && !t.leafFallback) return !0;
  let n = zc(e);
  return (
    n.lm &&
      t.lmFallback &&
      ((t.lm = n.lm), (t.lmFallback = !1), (t.lmSource = `landmarks.material`)),
    n.leaf && t.leafFallback && ((t.leaf = n.leaf), (t.leafFallback = !1)),
    !t.lmFallback
  );
}
function Uc(e, t) {
  !t.atlasBound && t.atlas.created && Gc(t);
  let n = q.uNight.value;
  t.ext.userData.uLight.value.setScalar(0.95 + (0.14 - 0.95) * n);
  let r = 1;
  try {
    r = e?.renderer?.gl?.toneMappingExposure || 1;
  } catch {
    r = 1;
  }
  t.room.userData.uLight.value.setScalar(1 / r ** 0.55);
}
function Wc(e) {
  (e.placeholder.dispose(),
    e.ext.dispose(),
    e.room.dispose(),
    e.glass?.dispose(),
    e.city?.dispose());
}
function Gc(e) {
  if (e.atlasBound) return;
  let t = e.atlas.texture;
  ((e.ext.map = t),
    (e.room.map = t),
    e.city && (e.city.map = t),
    (e.atlasBound = !0));
}
function Kc(e) {
  e.atlasBound &&=
    ((e.ext.map = e.placeholder),
    (e.room.map = e.placeholder),
    e.city && (e.city.map = e.placeholder),
    !1);
}
function qc(e) {
  let t = new V();
  (t.setAttribute(
    `position`,
    new H(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
  ),
    t.setAttribute(
      `normal`,
      new H(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    t.setAttribute(`uv`, new H(new Float32Array(6), 2)),
    t.setAttribute(`color`, new H(new Float32Array(12).fill(1), 4)));
  let n = new V();
  (n.setAttribute(
    `position`,
    new H(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
  ),
    n.setAttribute(
      `normal`,
      new H(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    n.setAttribute(`uv`, new H(new Float32Array(6), 2)),
    n.setAttribute(`aCol`, new H(new Uint8Array(12).fill(255), 4, !0)),
    n.setAttribute(`aMat`, new H(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aLight`, new H(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aInfo`, new H(new Uint8Array(12), 4, !1)),
    n.setIndex(new H(new Uint16Array([0, 1, 2]), 1)));
  let r = null,
    i = null,
    a = null,
    o = null,
    s = (e, t, n, r = !1) => {
      let i = new M(e, t);
      return (
        (i.name = n),
        (i.frustumCulled = !1),
        (i.castShadow = r),
        (i.receiveShadow = r),
        i
      );
    };
  return {
    protos() {
      if (e.city)
        return (
          r || ((a ??= Jc()), (r = [s(a, e.city, `sites-prewarm-city`, !0)]), r)
        );
      let c = e.lmFallback ? null : e.lm;
      if (r && i === c) return r;
      i = c;
      let l = [
        s(t, e.ext, `sites-prewarm-ext`),
        s(t, e.room, `sites-prewarm-room`),
      ];
      return (
        e.glass && l.push(s(t, e.glass, `sites-prewarm-glass`)),
        c &&
          (o?.dispose(),
          (o = Fc(n.clone(), c, `sites-prewarm-lm`)),
          (o.frustumCulled = !1),
          (o.castShadow = !0),
          (o.receiveShadow = !0),
          l.push(o)),
        (r = l),
        l
      );
    },
    dispose() {
      ((r = null),
        o?.dispose(),
        (o = null),
        t.dispose(),
        n.dispose(),
        a?.dispose());
    },
  };
}
function Jc() {
  let e = new V();
  return (
    e.setAttribute(
      `position`,
      new H(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
    ),
    e.setAttribute(
      `normal`,
      new H(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    e.setAttribute(`uv`, new H(new Float32Array(6), 2)),
    e.setAttribute(`color`, new H(new Float32Array(9).fill(1), 3)),
    e.setAttribute(`aCity`, new H(new Uint8Array(12), 4, !0)),
    e.setIndex(new H(new Uint16Array([0, 1, 2]), 1)),
    e
  );
}
var Yc = {
    id: `_sites`,
    name: { zh: `地標與名店`, en: `Landmarks & famous shops` },
    claims: [],
  },
  Xc = 0.05,
  Zc = 64,
  Qc = 4096,
  $c = 8192,
  el = pt.maxClaimRects,
  tl = { raw: 0, merged: 0, sites: 0, ms: 0 };
function nl() {
  return tl;
}
function rl() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function il() {
  ((Yc.claims.length = 0),
    (tl = { raw: 0, merged: 0, sites: 0, ms: 0 }),
    ul++,
    (cl = null),
    (ll = null),
    (fl.queries = 0),
    (fl.rejected = 0),
    (fl.buildMs = 0),
    (fl.rects = 0),
    (dl = !1));
}
function al(e) {
  let t = new Map();
  for (let n of e) {
    let e = Math.min(n.minX, n.maxX),
      r = Math.max(n.minX, n.maxX),
      i = Math.min(n.minZ, n.maxZ),
      a = Math.max(n.minZ, n.maxZ);
    if (!(r - e > 1e-4) || !(a - i > 1e-4) || !Number.isFinite(e + r + i + a))
      continue;
    let o = t.get(n.scope);
    (o || t.set(n.scope, (o = [])),
      o.push({
        minX: e,
        minZ: i,
        maxX: r,
        maxZ: a,
        scope: n.scope,
        label: n.label,
      }));
  }
  let n = [];
  for (let e of t.values()) {
    e.sort(
      (e, t) =>
        (t.maxX - t.minX) * (t.maxZ - t.minZ) -
        (e.maxX - e.minX) * (e.maxZ - e.minZ),
    );
    for (let t = 0; t < 4; t++) {
      let t = !1;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (r)
          for (let i = n + 1; i < e.length; i++) {
            let n = e[i];
            if (!n) continue;
            if (
              r.minX <= n.minX + Xc &&
              r.maxX >= n.maxX - Xc &&
              r.minZ <= n.minZ + Xc &&
              r.maxZ >= n.maxZ - Xc
            ) {
              ((e[i] = null), (t = !0));
              continue;
            }
            let a =
                Math.abs(r.minX - n.minX) <= Xc &&
                Math.abs(r.maxX - n.maxX) <= Xc,
              o =
                Math.abs(r.minZ - n.minZ) <= Xc &&
                Math.abs(r.maxZ - n.maxZ) <= Xc,
              s = n.minZ <= r.maxZ + Xc && r.minZ <= n.maxZ + Xc,
              c = n.minX <= r.maxX + Xc && r.minX <= n.maxX + Xc;
            ((a && s) || (o && c)) &&
              ((r.minX = Math.min(r.minX, n.minX)),
              (r.maxX = Math.max(r.maxX, n.maxX)),
              (r.minZ = Math.min(r.minZ, n.minZ)),
              (r.maxZ = Math.max(r.maxZ, n.maxZ)),
              (r.label = r.label === n.label ? r.label : `${r.label}+`),
              (e[i] = null),
              (t = !0));
          }
      }
      if (!t) break;
    }
    for (let t = 0; t < 3; t++) {
      let t = !1;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (r)
          for (let i = n + 1; i < e.length; i++) {
            let n = e[i];
            if (!n) continue;
            let a = Math.min(r.minX, n.minX),
              o = Math.max(r.maxX, n.maxX),
              s = Math.min(r.minZ, n.minZ),
              c = Math.max(r.maxZ, n.maxZ),
              l = (o - a) * (c - s),
              u = (r.maxX - r.minX) * (r.maxZ - r.minZ),
              d = (n.maxX - n.minX) * (n.maxZ - n.minZ),
              f = Math.max(
                0,
                Math.min(r.maxX, n.maxX) - Math.max(r.minX, n.minX),
              ),
              p = Math.max(
                0,
                Math.min(r.maxZ, n.maxZ) - Math.max(r.minZ, n.minZ),
              );
            l - (u + d - f * p) > Math.max(0.75, l * 0.02) ||
              ((r.minX = a),
              (r.maxX = o),
              (r.minZ = s),
              (r.maxZ = c),
              (r.label = r.label === n.label ? r.label : `${r.label}+`),
              (e[i] = null),
              (t = !0));
          }
      }
      if (!t) break;
    }
    for (let t of e) t && n.push(t);
  }
  return ol(n);
}
function ol(e) {
  let t = [],
    n = new Map();
  for (let t of e) {
    let e = n.get(t.label);
    (e || n.set(t.label, (e = [])), e.push(t));
  }
  for (let e of n.values()) {
    if (e.length > 1)
      for (let t = 0; t < 3; t++) {
        let t = !1;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          if (r)
            for (let i = n + 1; i < e.length; i++) {
              let n = e[i];
              if (!n) continue;
              let a = Math.min(r.minX, n.minX),
                o = Math.max(r.maxX, n.maxX),
                s = Math.min(r.minZ, n.minZ),
                c = Math.max(r.maxZ, n.maxZ),
                l = Math.max(
                  0,
                  Math.min(r.maxX, n.maxX) - Math.max(r.minX, n.minX),
                ),
                u = Math.max(
                  0,
                  Math.min(r.maxZ, n.maxZ) - Math.max(r.minZ, n.minZ),
                ),
                d = (r.maxX - r.minX) * (r.maxZ - r.minZ),
                f = (n.maxX - n.minX) * (n.maxZ - n.minZ);
              (o - a) * (c - s) - (d + f - l * u) >
                Math.max(0.75, (d + f) * 0.02) ||
                ((r.minX = a),
                (r.maxX = o),
                (r.minZ = s),
                (r.maxZ = c),
                (r.scope = r.scope === n.scope ? r.scope : `all`),
                (e[i] = null),
                (t = !0));
            }
        }
        if (!t) break;
      }
    for (let n of e) n && t.push(n);
  }
  return t;
}
function sl(e) {
  let t = rl(),
    n = [],
    r = 0;
  for (let t of e) {
    if (!t.ok) continue;
    let e = !1;
    for (let r of t.claims) (n.push(r), (e = !0));
    e && r++;
  }
  let i = al(n),
    a = Yc.claims;
  a.length = 0;
  for (let e of i) a.push(e);
  return (
    (tl = {
      raw: n.length,
      merged: a.length,
      sites: r,
      ms: Math.round((rl() - t) * 100) / 100,
    }),
    ul++,
    (cl = null),
    (ll = null),
    a.length > el &&
      console.warn(
        `[test] sites claims: ${a.length} merged rects > ${el} — every ctx.districts.claimed() call (thousands during buildings.init) walks them all; author fewer / bigger meta.claims rects`,
      ),
    a.length
  );
}
var cl = null,
  ll = null,
  ul = 0,
  dl = !1,
  fl = { queries: 0, buildMs: 0, rects: 0, rejected: 0 },
  pl = class {
    claims = [];
    cells = new Map();
    oversize = [];
    stamp;
    tick = 0;
    queries = 0;
    tested = 0;
    constructor(e) {
      for (let t of e)
        t && t.maxX > t.minX && t.maxZ > t.minZ && this.claims.push(t);
      this.stamp = new Int32Array(this.claims.length);
      for (let e = 0; e < this.claims.length; e++) {
        let t = this.claims[e],
          n = Math.floor(t.minX / 64),
          r = Math.floor(t.maxX / 64),
          i = Math.floor(t.minZ / 64),
          a = Math.floor(t.maxZ / 64);
        if ((r - n + 1) * (a - i + 1) > Zc) {
          this.oversize.push(e);
          continue;
        }
        for (let t = i; t <= a; t++)
          for (let i = n; i <= r; i++) {
            let n = (i + Qc) * $c + (t + Qc),
              r = this.cells.get(n);
            (r || this.cells.set(n, (r = [])), r.push(e));
          }
      }
    }
    get size() {
      return this.claims.length;
    }
    get cellCount() {
      return this.cells.size;
    }
    claimed(e, t, n, r, i) {
      this.queries++;
      let a = ++this.tick;
      for (let o of this.oversize)
        if (((this.stamp[o] = a), this.hit(o, e, t, n, r, i))) return !0;
      let o = Math.floor(e / 64),
        s = Math.floor(n / 64),
        c = Math.floor(t / 64),
        l = Math.floor(r / 64);
      for (let u = c; u <= l; u++)
        for (let c = o; c <= s; c++) {
          let o = this.cells.get((c + Qc) * $c + (u + Qc));
          if (o)
            for (let s = 0; s < o.length; s++) {
              let c = o[s];
              if (
                this.stamp[c] !== a &&
                ((this.stamp[c] = a), this.hit(c, e, t, n, r, i))
              )
                return !0;
            }
        }
      return !1;
    }
    hit(e, t, n, r, i, a) {
      this.tested++;
      let o = this.claims[e];
      return o.scope !== `all` && o.scope !== a
        ? !1
        : r > o.minX && t < o.maxX && i > o.minZ && n < o.maxZ;
    }
  };
function ml(e) {
  let t = [];
  if (e) {
    for (let n of e) if (n?.claims) for (let e of n.claims) t.push(e);
  }
  return new pl(t);
}
var hl = 12e4,
  gl = 24;
function _l(e) {
  return new Promise((t) => setTimeout(t, e));
}
function vl(e) {
  let { ctx: t } = e,
    n = new Map();
  for (let t of e.resolved) n.set(t.id, t);
  let r = new Map();
  for (let t of e.metas) r.set(t.id, t);
  let i = (t) => {
      let r = n.get(t);
      if (!r) return null;
      let i = e.streamer(),
        a = i?.get(t),
        o = i?.shownTier(t) ?? (r.ok ? `far` : null),
        s = i?.tierStats(t, `mid`) ?? null,
        c = i?.tierStats(t, `near`) ?? null,
        l = i?.tierStats(t, `interior`) ?? null,
        u = o === `mid` ? s : o === `near` ? c : o === `interior` ? l : null,
        d = e.atlas()?.slotsOf(t),
        f = d && d.length ? d[0] : null;
      return {
        id: t,
        tier: o,
        calls: u?.calls ?? 0,
        tris: u?.tris ?? 0,
        colliders: u?.colliders ?? 0,
        buildMs: u?.buildMs ?? 0,
        slot: f,
        mid: s,
        near: c,
        interior: l,
        quarantined: a?.quarantined ?? !1,
        d: a ? +a.d.toFixed(1) : NaN,
      };
    },
    a = (e, t) => {
      let n = e.frontage;
      if (!n) return t;
      let r = Math.max(1.5, n.sidewalk),
        i = r * 0.5,
        a = r + 2 * n.halfWidth,
        o = a + r * 0.5;
      return t <= r
        ? Math.max(t, Math.min(i, r))
        : t >= a
          ? Math.max(t, o)
          : t - r < a - t
            ? i
            : o;
    },
    o = (t, n) => {
      let r = 1,
        i = 1 / 0;
      for (let a of [1, -1]) {
        let o = 0;
        for (let r = 0.25; r <= 1.001; r += 0.25) {
          let i = ao(t, a * n * r, -t.d / 2 - gl * 0.5);
          for (let n of e.resolved)
            n.ok &&
              n.id !== t.id &&
              i.x > n.rect.minX &&
              i.x < n.rect.maxX &&
              i.z > n.rect.minZ &&
              i.z < n.rect.maxZ &&
              (o += 1);
        }
        if ((o < i && ((i = o), (r = a)), o === 0)) break;
      }
      return r;
    },
    s = (e, n, r = 0) => {
      let i = r,
        s = -e.d / 2 - a(e, n);
      if (n > 60 && !r) {
        let t = e.frontage,
          r = Math.min(n, Math.max(10, t ? t.sidewalk + t.halfWidth : gl)),
          a = Math.sqrt(Math.max(0, n * n - r * r));
        ((i = o(e, a) * a), (s = -e.d / 2 - r));
      }
      let c = ao(e, i, s),
        l = ao(e, 0, 0),
        u = Math.atan2(l.x - c.x, -(l.z - c.z));
      t.player.teleport(c.x, c.z, u);
      try {
        t.cameraRig?.snapBehind?.(u);
      } catch {}
    },
    c = async (t, n, r, i = hl) => {
      let a = e.streamer();
      if (!a) return n === `far` ? `ok` : `failed`;
      for (; performance.now() - r < i;) {
        if (
          (a.scan(),
          n === `interior`
            ? a.get(t)?.interior.visible
            : a.exteriorTier(t) === n)
        )
          return `ok`;
        let e = a.get(t);
        if (e?.quarantined || (n !== `far` && e && e.tierOf(n).state === 4))
          return `failed`;
        await _l(100);
      }
      return `timeout`;
    },
    l = async (r, a, l, u) => {
      let d = n.get(r),
        f = e.streamer(),
        p = a === `facade` ? `near` : a,
        m = Math.max(1e3, u?.timeoutMs ?? hl);
      if (!d || !d.ok)
        return (
          console.warn(`[test] sites view: unknown or unplaced site '${r}'`),
          null
        );
      let h = (e) => {
        let t = i(r);
        return (
          t &&
          ((t.wantTier = p),
          (t.reachedReason = e),
          (t.reachedTier = e === `ok` && t.tier === p),
          t.reachedTier ||
            console.warn(
              `[test] sites view: '${r}' did not reach tier '${p}' (${e}, shown ${t.tier ?? `none`})`,
            ),
          t)
        );
      };
      l !== void 0 && t.env?.setHour?.(l);
      let g = f?.radiiOf(r),
        _ = performance.now();
      if (!g) return (s(d, 320), h(p === `far` ? `ok` : `unplaced`));
      if (p === `far`) s(d, Math.max(320, g.midD + 30 + d.w / 2));
      else if (p === `mid`)
        s(d, Math.max(g.nearD + 10 + d.w / 2, Math.min(180, g.midB - 20)));
      else if (a === `facade`) {
        let e = Math.max(4, Math.min(d.w * 0.45, 26));
        s(d, 1.2, o(d, e) * e);
      } else if (p === `near`) s(d, Math.min(30, g.nearB * 0.5));
      else if (p === `interior`) {
        s(d, Math.min(4, g.intB * 0.3));
        let e = await c(r, `interior`, _, m),
          n = e === `ok` ? f.firstVolume(r) : null;
        if (n) {
          let e = ao(d, n.x, n.z);
          t.player.teleport(e.x, e.z, d.facing + Math.PI, d.y + n.y);
          try {
            t.cameraRig?.snapBehind?.(d.facing + Math.PI);
          } catch {}
          f.scan();
        } else
          console.warn(
            `[test] sites view: '${r}' interior not available (${e})`,
          );
        return (
          l !== void 0 && t.env?.setHour?.(l),
          h(e === `ok` && !n ? `no-volume` : e)
        );
      }
      let v = await c(r, p, _, m);
      return (l !== void 0 && t.env?.setHour?.(l), h(v));
    },
    u = null,
    d = () => {
      if (u) return u;
      let t = e.resolved.filter((e) => e.ok && r.has(e.id)),
        n = t.map((e, t) => t),
        i = (e) => {
          for (; n[e] !== e;) e = n[e] = n[n[e]];
          return e;
        },
        a = (e, t) => {
          let r = i(e),
            a = i(t);
          r !== a && (n[a] = r);
        },
        o = pt.clusterRadius * pt.clusterRadius;
      for (let e = 0; e < t.length; e++) {
        let n = r.get(t[e].id)?.cluster;
        for (let i = e + 1; i < t.length; i++) {
          let s = r.get(t[i].id)?.cluster,
            c = t[e].x - t[i].x,
            l = t[e].z - t[i].z;
          ((n && s && n === s) || c * c + l * l <= o) && a(e, i);
        }
      }
      let s = new Map();
      for (let e = 0; e < t.length; e++) {
        let t = i(e),
          n = s.get(t);
        n ? n.push(e) : s.set(t, [e]);
      }
      let c = [];
      for (let e of s.values()) {
        let n = 0,
          i = 0;
        for (let r of e) ((n += t[r].x), (i += t[r].z));
        ((n /= e.length), (i /= e.length));
        let a = 0,
          o = [];
        for (let s of e) {
          a = Math.max(a, Math.hypot(t[s].x - n, t[s].z - i));
          let e = r.get(t[s].id)?.cluster;
          e && !o.includes(e) && o.push(e);
        }
        let s = e.map((e) => t[e].id).sort();
        c.push({
          ids: s,
          x: +n.toFixed(1),
          z: +i.toFixed(1),
          radius: +a.toFixed(1),
          label: o.sort()[0] ?? `@${s[0]}`,
        });
      }
      return (
        c.sort(
          (e, t) => t.ids.length - e.ids.length || (e.label < t.label ? -1 : 1),
        ),
        (u = c),
        c
      );
    },
    f = () => {
      let t = e.streamer(),
        n = { tris: pt.clusterNearTris, calls: pt.clusterNearCalls };
      return d().map((e) => {
        let i = 0,
          a = 0,
          o = 0,
          s = 0;
        for (let n of e.ids) {
          let e = r.get(n);
          e && (s += ut(e));
          let c = t?.tierStats(n, `near`);
          c && (c.visible || c.cached) && (o++, (i += c.calls), (a += c.tris));
        }
        return {
          id: e.label,
          sites: e.ids,
          x: e.x,
          z: e.z,
          radius: e.radius,
          near: { sites: o, calls: i, tris: a },
          atlasSlots: s,
          budget: n,
          over: a > n.tris || i > n.calls,
        };
      });
    },
    p = () => {
      let t = e.atlas(),
        n = e.streamer(),
        r = 0;
      if (n)
        for (let e of n.recs) {
          let t = n.tierStats(e.id, `near`),
            i = n.tierStats(e.id, `interior`);
          ((t && (t.visible || t.cached)) || (i && (i.visible || i.cached))) &&
            (r += ut(e.meta));
        }
      let i = t?.slotCount ?? 0,
        a = t?.slotsUsed ?? 0;
      return {
        size: t?.size ?? 0,
        slotPx: t?.slotPx ?? 0,
        slots: i,
        slotsUsed: a,
        free: t?.slotsFree ?? Math.max(0, i - a),
        pressure: i ? +(a / i).toFixed(3) : 0,
        demand: r,
        stats: t?.stats ?? null,
      };
    },
    m = () => {
      let e = t.scene;
      if (!e) return null;
      let n = null;
      if (
        (e.traverse((e) => {
          let t = e.userData;
          !n && t && t.sites === `far` && (n = e);
        }),
        !n)
      )
        return null;
      let r = 0,
        i = 0,
        a = !1;
      return (
        n.traverse((e) => {
          let t = e;
          if (!t.isMesh || !t.geometry) return;
          (r++, t.visible && (a = !0));
          let n = t.geometry.index
            ? t.geometry.index.count
            : (t.geometry.attributes?.position?.count ?? 0);
          i += Math.floor(n / 3);
        }),
        { meshes: r, tris: i, visible: a && n.visible }
      );
    };
  return {
    ready: !1,
    list() {
      let t = e.streamer();
      return e.resolved.map((e) => {
        let n = r.get(e.id);
        return {
          id: e.id,
          ok: e.ok,
          tier: t?.shownTier(e.id) ?? (e.ok ? `far` : null),
          x: +e.x.toFixed(1),
          z: +e.z.toFixed(1),
          facing: +e.facing.toFixed(4),
          w: +e.w.toFixed(2),
          d: +e.d.toFixed(2),
          y: +e.y.toFixed(2),
          quarantined: t?.get(e.id)?.quarantined ?? !1,
          interior: n?.interior ?? `none`,
          hero: n?.hero === !0,
        };
      });
    },
    stats: i,
    view: l,
    clusters: f,
    perf: () => {
      let n = e.streamer(),
        r = t.quality?.mobile || t.quality?.level === `low` ? `low` : `high`,
        i = ft[r],
        a = {
          mid: { sites: 0, calls: 0, tris: 0 },
          near: { sites: 0, calls: 0, tris: 0 },
          interior: { sites: 0, calls: 0, tris: 0 },
        },
        o = { sites: 0, calls: 0, tris: 0 },
        s = [];
      if (n)
        for (let e of n.recs)
          for (let t of [`mid`, `near`, `interior`]) {
            let r = n.tierStats(e.id, t);
            if (!r || !(r.visible || r.cached)) continue;
            let c = a[t];
            (c.sites++,
              (c.calls += r.calls),
              (c.tris += r.tris),
              r.visible &&
                (o.sites++, (o.calls += r.calls), (o.tris += r.tris)));
            let l = i[t];
            (r.calls > l.calls || r.tris > l.tris) &&
              s.push(
                `${e.id}:${t} ${r.calls}c/${(r.tris / 1e3).toFixed(1)}k (≤${l.calls}c/${(l.tris / 1e3).toFixed(0)}k)`,
              );
          }
      let c = f()
        .filter((e) => e.over)
        .map(
          (e) =>
            `${e.id} ${e.near.sites} sites ${e.near.calls}c/${(e.near.tris / 1e3).toFixed(1)}k`,
        );
      return {
        tiers: a,
        visible: o,
        far: m(),
        atlas: p(),
        counts: n?.counts() ?? null,
        lastSliceMs: +(n?.lastSliceMs ?? 0).toFixed(2),
        over: s,
        hotClusters: c,
        budgets: {
          near: i.near,
          mid: i.mid,
          proxyCalls: pt.proxyCalls,
          proxyTris: pt.proxyTris[r],
        },
      };
    },
    get atlas() {
      return p();
    },
    get lastSliceMs() {
      return +(e.streamer()?.lastSliceMs ?? 0).toFixed(2);
    },
    get stream() {
      return e.streamer()?.report() ?? null;
    },
    get errors() {
      return e.errors;
    },
    get counts() {
      return e.streamer()?.counts() ?? null;
    },
    busy() {
      return e.streamer()?.busyTiers() ?? [];
    },
    volumes(t) {
      return (e.streamer()?.get(t)?.interior.handle?.indoor ?? []).map((e) => ({
        x0: e.x0,
        z0: e.z0,
        x1: e.x1,
        z1: e.z1,
        ceilY: e.ceilY,
        floorY: e.floorY ?? 0,
        maxCamDist: e.maxCamDist,
        openFront: e.openFront !== !1,
      }));
    },
  };
}
var yl = new Set([
    `convenience`,
    `bubbletea`,
    `breakfast`,
    `claw`,
    `pharmacy`,
    `lottery`,
  ]),
  bl = new Set([`shrine`, `betelnut`]),
  xl = [
    { x0: 470, x1: 655, z0: 118, z1: 178, maxFloors: 8 },
    { x0: 470, x1: 655, z0: 178, z1: 240, maxFloors: 16 },
  ],
  Sl = (e, t) => xl.find((n) => e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1),
  Cl = 10,
  wl = 150,
  Tl = 320,
  El = new Set([`temple`, `landmark`, `market`, `station`, `plaza`]),
  Dl = (e, t) =>
    Math.hypot(
      Math.max(0, e.x0 - t.x1, t.x0 - e.x1),
      Math.max(0, e.z0 - t.z1, t.z0 - e.z1),
    );
function Ol(e) {
  return (
    Math.round(
      (((e.facing % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) /
        (Math.PI / 2),
    ) % 4
  );
}
function kl(e, t) {
  return t === 0 || t === 2 ? e.x : e.z;
}
function Al(e, t) {
  let n = [e];
  for (let e of t) {
    let t = [];
    for (let r of n) {
      if (e.b <= r.a || e.a >= r.b) {
        t.push(r);
        continue;
      }
      (e.a > r.a && t.push({ a: r.a, b: e.a }),
        e.b < r.b && t.push({ a: e.b, b: r.b }));
    }
    n = t;
  }
  return n.filter((e) => e.b - e.a > 0.5);
}
var jl = class {
  plan;
  keepOpen;
  lots = [];
  nextId = 0;
  poisByBlock = new Map();
  constructor(e, t = []) {
    ((this.plan = e), (this.keepOpen = t));
    for (let t of e.pois) {
      let e = this.poisByBlock.get(t.blockId);
      (e || this.poisByBlock.set(t.blockId, (e = [])), e.push(t));
    }
    for (let t of e.blocks) this.layoutBlock(t);
  }
  reservedRects(e) {
    return e.reserved.map((e) => {
      let t =
        Math.round(
          (((e.facing % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) /
            (Math.PI / 2),
        ) % 4;
      return {
        x0: e.x - e.w / 2 - 2,
        z0: e.z - e.d / 2 - 2,
        x1: e.x + e.w / 2 + 2,
        z1: e.z + e.d / 2 + 2,
        front: t,
        open: e.kind === `temple` ? [t, (t + 2) % 4] : [t],
      };
    });
  }
  overlapsReserved(e, t) {
    return t.some(
      (t) => e.x1 > t.x0 && e.x0 < t.x1 && e.z1 > t.z0 && e.z0 < t.z1,
    );
  }
  makeLot(e, t, n, r, i, a, o = !1) {
    let s = 0.05,
      c = [
        Math.abs(t.z0 - e.minZ) < s,
        Math.abs(t.x1 - e.maxX) < s,
        Math.abs(t.z1 - e.maxZ) < s,
        Math.abs(t.x0 - e.minX) < s,
      ],
      l = [
        c[0] ? e.north : null,
        c[1] ? e.east : null,
        c[2] ? e.south : null,
        c[3] ? e.west : null,
      ],
      u = {
        ...t,
        id: this.nextId++,
        block: e,
        type: n,
        front: r,
        street: c,
        road: l,
        arcade: [0, 0, 0, 0],
        floors: i,
        district: e.district,
        seed: a.int(0, 255),
        pois: [],
        interior: o,
        alley: [!1, !1, !1, !1],
      };
    if (n === `apt` || n === `mid`) {
      let r = e.district.style,
        a = (je(`pocket`, e.id) % 1e3) / 1e3,
        o =
          (je(`floors`, e.id, Math.round(t.x0 * 10), Math.round(t.z0 * 10)) %
            1e3) /
          1e3;
      r.floors[1] <= 16 && a < 0.07 + 0.12 * r.old
        ? ((u.type = `apt`), (u.floors = o < 0.3 ? 2 : o < 0.85 ? 3 : 4))
        : n === `apt`
          ? o < 0.12
            ? (u.floors = Math.max(3, i - 1))
            : o > 0.88 && (u.floors = i + (r.floors[1] >= 8 ? 2 : 1))
          : o < 0.14
            ? (u.floors = Math.max(6, Math.round(i * 0.72)))
            : o > 0.84 &&
              r.towers >= 0.2 &&
              (u.floors = Math.min(26, Math.round(i * 1.4)));
      let s = Sl((t.x0 + t.x1) / 2, (t.z0 + t.z1) / 2);
      s && (u.floors = Math.min(u.floors, s.maxFloors));
    }
    return (this.lots.push(u), u);
  }
  limitSites(e) {
    let t = e
        .filter((e) => El.has(e.kind))
        .map((e) => ({
          x0: e.x - e.w / 2,
          x1: e.x + e.w / 2,
          z0: e.z - e.d / 2,
          z1: e.z + e.d / 2,
        })),
      n = this.lots
        .filter((e) => e.type === `site`)
        .sort((e, t) => je(`site`, e.id) - je(`site`, t.id)),
      r = [];
    for (let e of n) {
      if (
        r.length < Cl &&
        t.every((t) => Dl(e, t) >= wl) &&
        r.every((t) => Dl(e, t) >= Tl)
      ) {
        r.push(e);
        continue;
      }
      let n = new Oe(je(Pe, `site-conv`, e.id)),
        i = Math.min(e.x1 - e.x0, e.z1 - e.z0),
        a = e.block.district.style;
      ((e.type =
        a.floors[1] >= 7 && i >= 11 && n.chance(0.2 + 1.2 * a.towers)
          ? `mid`
          : `apt`),
        (e.floors = this.floorsFor(e.type, e.block, n)));
      let o = Sl((e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2);
      o && (e.floors = Math.min(e.floors, o.maxFloors));
    }
    return r.length;
  }
  pickType(e, t) {
    let n = e.district.style,
      r = [];
    return (
      n.old >= 0.9
        ? r.push([`shophouse`, 0.55])
        : n.old >= 0.55 && r.push([`shophouse`, 0.08]),
      r.push([`apt`, 0.3 + 0.9 * n.old]),
      n.floors[1] >= 7 &&
        r.push([`mid`, 0.2 + 1.2 * n.towers + (n.floors[0] >= 5 ? 0.25 : 0)]),
      t.weighted(r)
    );
  }
  floorsFor(e, t, n) {
    let [r, i] = t.district.style.floors;
    switch (e) {
      case `shophouse`:
        return n.weighted([
          [2, 3],
          [3, 4],
          [4, 1],
        ]);
      case `apt`:
        return Math.max(
          3,
          Math.min(
            n.weighted([
              [4, 4],
              [5, 5],
              [3, 1],
              [6, 1],
            ]),
            Math.max(4, i),
          ),
        );
      case `mid`:
        return n.int(Math.max(7, r), Math.max(8, Math.min(16, i)));
      case `low`:
        return n.int(1, 2);
      case `setback`:
        return n.int(1, 2);
      default:
        return n.int(Math.max(18, r), Math.max(22, i + 5));
    }
  }
  widthFor(e, t) {
    switch (e) {
      case `shophouse`:
        return t.range(4.4, 6.6);
      case `apt`:
        return t.range(6.5, 12.5);
      case `mid`:
        return t.range(14, 26);
      default:
        return t.range(8, 12);
    }
  }
  layoutBlock(e) {
    let t = e.district.style;
    if (t.floors[1] <= 0) return;
    let n = new Oe(je(Pe, `bld`, e.id)),
      r = this.reservedRects(e),
      i = e.maxX - e.minX,
      a = e.maxZ - e.minZ,
      o = this.poisByBlock.get(e.id) ?? [],
      s = t.towers >= 0.6 ? t.towers * 0.8 : t.towers * 0.22;
    (!r.length &&
      i >= 38 &&
      a >= 38 &&
      !e.zones.length &&
      n.chance(s) &&
      !Sl((e.minX + e.maxX) / 2, (e.minZ + e.maxZ) / 2) &&
      this.layoutTowerBlock(e, n, o)) ||
      this.layoutPerimeter(e, n, r, o, i, a);
  }
  layoutTowerBlock(e, t, n) {
    let r = [!1, !1, !1, !1];
    for (let e of n) yl.has(e.kind) && (r[Ol(e)] = !0);
    let i = (e, n) =>
        Math.max(
          r[n] ? 8.5 : 0,
          e ? (e.major ? t.range(6, 10) : t.range(3, 5.5)) : 3,
        ),
      a = {
        x0: e.minX + i(e.west, 3),
        x1: e.maxX - i(e.east, 1),
        z0: e.minZ + i(e.north, 0),
        z1: e.maxZ - i(e.south, 2),
      },
      o = a.x1 - a.x0,
      s = a.z1 - a.z0;
    if (o < 22 || s < 22) return !1;
    let c = [];
    if (o >= 92) {
      let e = (a.x0 + a.x1) / 2 + t.range(-8, 8);
      c.push({ ...a, x1: e - 7 }, { ...a, x0: e + 7 });
    } else if (s >= 92) {
      let e = (a.z0 + a.z1) / 2 + t.range(-8, 8);
      c.push({ ...a, z1: e - 7 }, { ...a, z0: e + 7 });
    } else c.push(a);
    let l = [
        [e.north, 0],
        [e.east, 1],
        [e.south, 2],
        [e.west, 3],
      ],
      u = (e) =>
        e ? (e.kind === `boulevard` ? 3 : e.kind === `arterial` ? 2 : 1) : 0,
      d = 0;
    for (let [e, t] of l) u(e) > u(l[d][0]) && (d = t);
    for (let n of c) {
      let r = n.x1 - n.x0,
        i = n.z1 - n.z0,
        a = Math.min(44, Math.max(16, r - t.range(4, 12))),
        o = Math.min(40, Math.max(16, i - t.range(4, 12))),
        s = (n.x0 + n.x1) / 2 + t.range(-1, 1) * (r - a) * 0.3,
        c = (n.z0 + n.z1) / 2 + t.range(-1, 1) * (i - o) * 0.3,
        l = this.floorsFor(`tower`, e, t),
        u = this.makeLot(e, n, `tower`, d, l, t);
      ((u.tower = {
        x0: s - a / 2,
        x1: s + a / 2,
        z0: c - o / 2,
        z1: c + o / 2,
        floors: l,
      }),
        (u.podiumFloors = t.int(2, 5)),
        (u.street = [!0, !0, !0, !0]));
    }
    for (let r of n) yl.has(r.kind) && this.kioskForPoi(e, r, t);
    return !0;
  }
  kioskForPoi(e, t, n) {
    let r = Ol(t),
      i = kl(t, r),
      a;
    a =
      r === 0
        ? {
            x0: i - t.width / 2,
            x1: i + t.width / 2,
            z0: e.minZ,
            z1: e.minZ + 6,
          }
        : r === 2
          ? {
              x0: i - t.width / 2,
              x1: i + t.width / 2,
              z0: e.maxZ - 6,
              z1: e.maxZ,
            }
          : r === 3
            ? {
                z0: i - t.width / 2,
                z1: i + t.width / 2,
                x0: e.minX,
                x1: e.minX + 6,
              }
            : {
                z0: i - t.width / 2,
                z1: i + t.width / 2,
                x0: e.maxX - 6,
                x1: e.maxX,
              };
    for (let t of this.lots)
      if (
        t.block === e &&
        a.x1 > t.x0 + 0.1 &&
        a.x0 < t.x1 - 0.1 &&
        a.z1 > t.z0 + 0.1 &&
        a.z0 < t.z1 - 0.1
      )
        return;
    let o = this.makeLot(e, a, `setback`, r, 1, n);
    ((o.type = `low`), o.pois.push(t));
  }
  layoutPerimeter(e, t, n, r, i, a) {
    let o = e.district.style,
      s = n.flatMap((t) =>
        t.open.map((n) =>
          n === 0
            ? { x0: t.x0, x1: t.x1, z0: e.minZ - 1, z1: t.z0 }
            : n === 2
              ? { x0: t.x0, x1: t.x1, z0: t.z1, z1: e.maxZ + 1 }
              : n === 3
                ? { x0: e.minX - 1, x1: t.x0, z0: t.z0, z1: t.z1 }
                : { x0: t.x1, x1: e.maxX + 1, z0: t.z0, z1: t.z1 },
        ),
      );
    for (let t of this.keepOpen)
      t.x1 > e.minX &&
        t.x0 < e.maxX &&
        t.z1 > e.minZ &&
        t.z0 < e.maxZ &&
        s.push(t);
    let c = (e) => t.range(12.5, Math.max(13, Math.min(e, 19))),
      l,
      u,
      d = a < 36;
    d
      ? ((l = a * t.range(0.44, 0.56)), (u = a - l))
      : ((l = c(a / 2 - 3)), (u = c(a / 2 - 3)));
    let f = !d && a - l - u >= 8,
      p = 0,
      m = 0,
      h = i < 36;
    f &&
      (h
        ? ((p = i * t.range(0.44, 0.56)), (m = i - p))
        : ((p = c(i / 2 - 3)), (m = c(i / 2 - 3))));
    for (let t = 0; t < 3; t++)
      for (let t of r) {
        let n = Ol(t);
        if (n !== 1 && n !== 3) continue;
        let r = t.z - t.width / 2,
          i = t.z + t.width / 2,
          o = e.minZ + l;
        r < o &&
          i > o &&
          ((l =
            i - e.minZ + 0.3 <= a - (d ? 8 : u + (f ? 8 : 0))
              ? i - e.minZ + 0.3
              : Math.max(6, r - e.minZ - 0.3)),
          d && (u = a - l));
        let s = e.maxZ - u;
        r < s &&
          i > s &&
          ((u =
            e.maxZ - r + 0.3 <= a - (d ? 8 : l + (f ? 8 : 0))
              ? e.maxZ - r + 0.3
              : Math.max(6, e.maxZ - i - 0.3)),
          d && (l = a - u));
      }
    f = !d && a - l - u >= 8;
    let g = { 0: [], 1: [], 2: [], 3: [] },
      _ = (e) =>
        r
          .filter((t) => Ol(t) === e)
          .map((t) => ({
            a: kl(t, e) - t.width / 2 - 1,
            b: kl(t, e) + t.width / 2 + 1,
          })),
      v = (e, n, r) => {
        for (let i = 0; i < 6; i++) {
          let i = t.range(3.2, 4.2),
            a = t.range(n + 16, r - 16),
            o = { a: a - i / 2, b: a + i / 2 };
          if (!e.some((e) => _(e).some((e) => o.b > e.a && o.a < e.b))) {
            for (let t of e) g[t].push(o);
            return;
          }
        }
      },
      y = e.zones.length > 0 && i < 50;
    (!y &&
      i >= 58 &&
      t.chance(0.7) &&
      (d
        ? v([0, 2], e.minX, e.maxX)
        : v([t.chance(0.5) ? 0 : 2], e.minX + p, e.maxX - m)),
      !y &&
        f &&
        a - l - u >= 40 &&
        t.chance(0.55) &&
        v(h ? [1, 3] : [t.chance(0.5) ? 1 : 3], e.minZ + l, e.maxZ - u));
    let b = [
      { side: 0, a0: e.minX, a1: e.maxX, depth: l },
      { side: 2, a0: e.minX, a1: e.maxX, depth: u },
    ];
    f &&
      b.push(
        { side: 3, a0: e.minZ + l, a1: e.maxZ - u, depth: p },
        { side: 1, a0: e.minZ + l, a1: e.maxZ - u, depth: m },
      );
    let x = (t) =>
      !!(t === 0 ? e.north : t === 1 ? e.east : t === 2 ? e.south : e.west);
    for (let i of b) {
      let a = (t, n, r) => {
          switch (i.side) {
            case 0:
              return { x0: t, x1: n, z0: e.minZ, z1: e.minZ + r };
            case 2:
              return { x0: t, x1: n, z0: e.maxZ - r, z1: e.maxZ };
            case 3:
              return { z0: t, z1: n, x0: e.minX, x1: e.minX + r };
            default:
              return { z0: t, z1: n, x0: e.maxX - r, x1: e.maxX };
          }
        },
        c = [...g[i.side]],
        l = [],
        u = [],
        p = a(i.a0, i.a1, i.depth);
      for (let t of n) {
        let n =
          i.side === 0 || i.side === 2
            ? { a: t.x0, b: t.x1 }
            : { a: t.z0, b: t.z1 };
        if (t.open.includes(i.side) && n.b > i.a0 && n.a < i.a1) {
          c.push(n);
          continue;
        }
        if (!(p.x1 > t.x0 && p.x0 < t.x1 && p.z1 > t.z0 && p.z0 < t.z1))
          continue;
        let r =
          i.side === 0
            ? t.z0 - e.minZ
            : i.side === 2
              ? e.maxZ - t.z1
              : i.side === 3
                ? t.x0 - e.minX
                : e.maxX - t.x1;
        r >= 7
          ? l.push({ ...n, d: r - 0.3 })
          : (c.push(n), u.push({ ...n, d: r - 0.3 }));
      }
      let m = (e, t) => {
          let n = 1 / 0;
          for (let r of l) t > r.a && e < r.b && (n = Math.min(n, r.d));
          return n;
        },
        _ = r.filter((e) => Ol(e) === i.side),
        v = [];
      for (let n of _) {
        if (!bl.has(n.kind)) continue;
        let r = kl(n, i.side);
        if (r < i.a0 || r > i.a1) continue;
        let o = {
          a: Math.max(i.a0, r - n.width / 2 - 0.7),
          b: Math.min(i.a1, r + n.width / 2 + 0.7),
        };
        if (
          (o.a - i.a0 < 1.6 && (o.a = i.a0),
          i.a1 - o.b < 1.6 && (o.b = i.a1),
          c.some((e) => o.b > e.a && o.a < e.b))
        )
          continue;
        (v.push(o), c.push(o));
        let s = a(o.a, o.b, i.depth);
        if (i.depth > 9) {
          let n = { ...s };
          (i.side === 0
            ? (n.z0 += 4.5)
            : i.side === 2
              ? (n.z1 -= 4.5)
              : i.side === 3
                ? (n.x0 += 4.5)
                : (n.x1 -= 4.5),
            this.makeLot(
              e,
              n,
              `setback`,
              i.side,
              this.floorsFor(`setback`, e, t),
              t,
            ));
        }
      }
      let y = _.filter((e) => yl.has(e.kind)).map((e) => ({
          a: kl(e, i.side) - e.width / 2,
          b: kl(e, i.side) + e.width / 2,
        })),
        b = Al({ a: i.a0, b: i.a1 }, c),
        S = i.side === 0 || i.side === 2;
      for (let r of b) {
        let c = r.a,
          l = null;
        for (; c < r.b - 0.01;) {
          let u = l && t.chance(0.6) ? l : this.pickType(e, t);
          l = u;
          let p = this.widthFor(u, t);
          S && Math.abs(c - e.minX) < 0.01 && x(3) && (p = Math.max(p, 8));
          let v = c + p,
            b = u === `shophouse` ? 4 : 5.5;
          r.b - v < b && (v = r.b);
          for (let e of y)
            v > e.a + 0.01 &&
              v < e.b - 0.01 &&
              (v = e.b - c >= b || e.a - c < b ? e.b : e.a);
          if ((r.b - v < b && (v = r.b), v - c < 3.2)) {
            c = v;
            continue;
          }
          (u === `mid` && v - c < 11 && (u = `apt`),
            !y.some((e) => e.b > c && e.a < v) &&
              v - c >= 11 &&
              o.floors[1] >= 6 &&
              !e.zones.length &&
              t.chance(0.022) &&
              (u = `site`),
            u === `shophouse` && v - c > 9 && (u = `apt`));
          let C =
              S &&
              ((Math.abs(c - e.minX) < 0.01 && f) ||
                (Math.abs(v - e.maxX) < 0.01 && f)),
            w = i.depth;
          (!C && !(S && d) && u !== `mid` && (w *= t.range(0.8, 1)),
            !S && h && (w = i.depth),
            (w = Math.min(w, m(c, v))));
          let T = a(c, v, w);
          if (!this.overlapsReserved(T, n) && !this.overlapsReserved(T, s)) {
            let n = this.makeLot(e, T, u, i.side, this.floorsFor(u, e, t), t);
            for (let e of g[i.side])
              (Math.abs(v - e.a) < 0.05 && (n.alley[S ? 1 : 2] = !0),
                Math.abs(c - e.b) < 0.05 && (n.alley[S ? 3 : 0] = !0));
            for (let e of _) {
              if (!yl.has(e.kind)) continue;
              let t = kl(e, i.side);
              t >= c - 0.01 && t <= v + 0.01 && n.pois.push(e);
            }
          }
          c = v;
        }
      }
      for (let n of _) {
        if (!yl.has(n.kind)) continue;
        let r = kl(n, i.side),
          o = u.find((e) => r > e.a && r < e.b);
        if (!o || o.d < 2.5) continue;
        let c = r - n.width / 2,
          l = r + n.width / 2;
        if (g[i.side].some((e) => l > e.a && c < e.b)) continue;
        let d = a(c, l, Math.min(i.depth, o.d));
        this.overlapsReserved(d, s) ||
          this.makeLot(e, d, `low`, i.side, 1, t).pois.push(n);
      }
    }
    for (let t of r) {
      if (!yl.has(t.kind) || this.lots.some((e) => e.pois.includes(t)))
        continue;
      let n = Ol(t);
      for (let r = this.lots.length - 1; r >= 0; r--) {
        let i = this.lots[r];
        if (i.block !== e || !i.street[n]) continue;
        let a = kl(t, n),
          [o, s] = n === 0 || n === 2 ? [i.x0, i.x1] : [i.z0, i.z1];
        if (a >= o - 0.01 && a <= s + 0.01) {
          i.pois.push(t);
          break;
        }
      }
    }
    for (let i of r) {
      if (!yl.has(i.kind) || this.lots.some((e) => e.pois.includes(i)))
        continue;
      let r = Ol(i),
        a = kl(i, r),
        o = 6,
        c = (t) =>
          r === 0
            ? {
                x0: a - i.width / 2,
                x1: a + i.width / 2,
                z0: e.minZ,
                z1: e.minZ + t,
              }
            : r === 2
              ? {
                  x0: a - i.width / 2,
                  x1: a + i.width / 2,
                  z0: e.maxZ - t,
                  z1: e.maxZ,
                }
              : r === 3
                ? {
                    z0: a - i.width / 2,
                    z1: a + i.width / 2,
                    x0: e.minX,
                    x1: e.minX + t,
                  }
                : {
                    z0: a - i.width / 2,
                    z1: a + i.width / 2,
                    x0: e.maxX - t,
                    x1: e.maxX,
                  },
        l = n.map((e) => ({
          x0: e.x0 + 1.5,
          x1: e.x1 - 1.5,
          z0: e.z0 + 1.5,
          z1: e.z1 - 1.5,
        }));
      for (
        ;
        o > 2.2 &&
        (this.overlapsReserved(c(o), l) ||
          this.lots.some(
            (t) =>
              t.block === e &&
              this.overlapsReserved(c(o), [
                {
                  x0: t.x0 + 0.1,
                  x1: t.x1 - 0.1,
                  z0: t.z0 + 0.1,
                  z1: t.z1 - 0.1,
                },
              ]),
          ));
      )
        o -= 0.5;
      this.overlapsReserved(c(o), s) && (o = Math.min(o, 3.2));
      let u = c(o);
      o <= 2.2 ||
        this.overlapsReserved(u, this.keepOpen) ||
        this.makeLot(e, u, `low`, r, 1, t).pois.push(i);
    }
    if (f) {
      let r = {
          x0: e.minX + p + 3.5,
          x1: e.maxX - m - 3.5,
          z0: e.minZ + l + 3.5,
          z1: e.maxZ - u - 3.5,
        },
        i = r.x1 - r.x0,
        a = r.z1 - r.z0;
      if (i >= 10 && a >= 10 && o.towers < 0.6) {
        let o = t.next();
        if (o < 0.5) {
          let o = i >= a,
            c = Math.max(1, Math.round((o ? i : a) / t.range(14, 22))),
            d = ((o ? i : a) - (c - 1) * 3) / c;
          for (let i = 0; i < c; i++) {
            let a = (o ? r.x0 : r.z0) + i * (d + 3),
              c = o
                ? { x0: a, x1: a + d, z0: r.z0, z1: r.z1 }
                : { x0: r.x0, x1: r.x1, z0: a, z1: a + d };
            this.overlapsReserved(c, n) ||
              this.overlapsReserved(c, s) ||
              this.hitsLaneCorridor(c, e, g, l, u) ||
              this.makeLot(e, c, `apt`, 0, t.int(3, 5), t, !0);
          }
        } else if (o < 0.8) {
          let i = { x0: r.x0 + 1, x1: r.x1 - 1, z0: r.z0 + 1, z1: r.z1 - 1 };
          !this.overlapsReserved(i, n) &&
            !this.overlapsReserved(i, s) &&
            !this.hitsLaneCorridor(i, e, g, l, u) &&
            this.makeLot(e, i, `low`, 0, t.int(1, 2), t, !0);
        }
      }
    }
    for (let t of r) bl.has(t.kind) && this.clearYard(e, t);
    let S = [0, 0, 0, 0],
      C = [e.north, e.east, e.south, e.west];
    for (let e = 0; e < 4; e++) {
      let n = C[e];
      if (!n || n.pedestrian) continue;
      let r =
        n.kind === `boulevard` || n.kind === `arterial`
          ? 0.35 + 0.6 * Math.max(o.old, o.shops * 0.75)
          : 0.18 + 0.5 * o.old;
      (o.towers >= 0.6 && (r *= 0.3), t.chance(r) && (S[e] = t.range(3, 3.8)));
    }
    for (let n of this.lots) {
      if (
        n.block !== e ||
        n.interior ||
        n.type === `tower` ||
        n.type === `setback` ||
        n.type === `low` ||
        n.type === `site`
      )
        continue;
      let r = n.x1 - n.x0,
        i = n.z1 - n.z0;
      for (let e = 0; e < 4; e++)
        n.street[e] &&
          S[e] &&
          ((e === 0 || e === 2 ? i : r) < S[e] + 5 ||
            t.chance(0.07) ||
            (n.arcade[e] = S[e]));
    }
  }
  clearYard(e, t) {
    let n = Ol(t),
      r = kl(t, n),
      i = t.width / 2 + 0.25 + 0.15,
      a = 2.75,
      o =
        n === 0
          ? { x0: r - i, x1: r + i, z0: e.minZ - 1, z1: e.minZ + a }
          : n === 2
            ? { x0: r - i, x1: r + i, z0: e.maxZ - a, z1: e.maxZ + 1 }
            : n === 3
              ? { x0: e.minX - 1, x1: e.minX + a, z0: r - i, z1: r + i }
              : { x0: e.maxX - a, x1: e.maxX + 1, z0: r - i, z1: r + i },
      s = 0.05;
    for (let t = this.lots.length - 1; t >= 0; t--) {
      let n = this.lots[t];
      if (
        n.block !== e ||
        n.interior ||
        !(
          n.x1 > o.x0 + s &&
          n.x0 < o.x1 - s &&
          n.z1 > o.z0 + s &&
          n.z0 < o.z1 - s
        )
      )
        continue;
      let r = [
          [{ ...n, x0: o.x1 }, 3],
          [{ ...n, x1: o.x0 }, 1],
          [{ ...n, z0: o.z1 }, 0],
          [{ ...n, z1: o.z0 }, 2],
        ],
        i = null,
        a = 0;
      for (let e of r) {
        let [t] = e,
          r = t.x1 - t.x0,
          o = t.z1 - t.z0;
        r < 3.5 ||
          o < 3.5 ||
          n.pois.some(
            (e) =>
              e.x < t.x0 - 0.01 ||
              e.x > t.x1 + 0.01 ||
              e.z < t.z0 - 0.01 ||
              e.z > t.z1 + 0.01,
          ) ||
          (r * o > a && ((a = r * o), (i = e)));
      }
      if (!i) {
        this.lots.splice(t, 1);
        continue;
      }
      let [c, l] = i;
      ((n.x0 = c.x0), (n.x1 = c.x1), (n.z0 = c.z0), (n.z1 = c.z1));
      let u = [
        Math.abs(n.z0 - e.minZ) < s,
        Math.abs(n.x1 - e.maxX) < s,
        Math.abs(n.z1 - e.maxZ) < s,
        Math.abs(n.x0 - e.minX) < s,
      ];
      ((n.street = u),
        (n.road = [
          u[0] ? e.north : null,
          u[1] ? e.east : null,
          u[2] ? e.south : null,
          u[3] ? e.west : null,
        ]),
        n.street[n.front] ||
          (n.front = [0, 1, 2, 3].find((e) => n.street[e]) ?? n.front),
        ((n.open ??= [!1, !1, !1, !1])[l] = !0),
        n.tower &&
          ((n.tower.x0 = Math.max(n.tower.x0, n.x0 + 2)),
          (n.tower.x1 = Math.min(n.tower.x1, n.x1 - 2)),
          (n.tower.z0 = Math.max(n.tower.z0, n.z0 + 2)),
          (n.tower.z1 = Math.min(n.tower.z1, n.z1 - 2))));
    }
  }
  hitsLaneCorridor(e, t, n, r, i) {
    for (let a of [0, 2])
      for (let o of n[a]) {
        let n = a === 0 ? t.minZ : t.maxZ - i - 4,
          s = a === 0 ? t.minZ + r + 4 : t.maxZ;
        if (e.x1 > o.a && e.x0 < o.b && e.z1 > n && e.z0 < s) return !0;
      }
    return !1;
  }
};
function Ml(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0,
    a = 1 / 0,
    o = -1 / 0,
    s = e[0];
  for (let c of e)
    (c.x0 < t && (t = c.x0),
      c.z0 < n && (n = c.z0),
      c.x1 > r && (r = c.x1),
      c.z1 > i && (i = c.z1),
      c.y0 < a && (a = c.y0),
      c.y1 > o && ((o = c.y1), (s = c)));
  return {
    kind: s.kind === `planter` ? `lowwall` : s.kind,
    x0: t,
    z0: n,
    x1: r,
    z1: i,
    y0: a,
    y1: o,
    site: s.site,
    v: s.v,
  };
}
var Nl = 14,
  Pl = 2,
  Fl = 1,
  Il = 12,
  Ll = 12e4,
  Rl = 4e4,
  zl = 80,
  Bl = 30,
  Vl = 600,
  Hl = 2,
  Ul = 1.2,
  Wl = 0.3;
function Gl(e, t, n = 0) {
  return (
    e.x1 > t.x0 - n && e.x0 < t.x1 + n && e.z1 > t.z0 - n && e.z0 < t.z1 + n
  );
}
function Kl() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function ql(e, t, n) {
  let r =
    2166136261 ^ Math.imul(t | 0, 2654435761) ^ Math.imul(n | 0, 2246822507);
  for (let t = 0; t < e.length; t++)
    r = Math.imul(r ^ e.charCodeAt(t), 16777619);
  return (
    (r ^= r >>> 15),
    (r = Math.imul(r, 739982445)),
    (r ^= r >>> 12),
    (r >>> 0) / 4294967296
  );
}
function Jl(e) {
  try {
    let t = jl.prototype;
    if (!t || typeof t.layoutBlock != `function`) return null;
    let n = Object.create(t),
      r = [];
    for (let t of [`police`, `hospital`]) {
      let n = e.spawns?.[t];
      n && r.push({ x0: n.x - 10, x1: n.x + 10, z0: n.z - 10, z1: n.z + 10 });
    }
    let i = new Map();
    for (let t of e.pois ?? []) {
      let e = i.get(t.blockId);
      (e || i.set(t.blockId, (e = [])), e.push(t));
    }
    ((n.plan = e),
      (n.keepOpen = r),
      (n.lots = []),
      (n.nextId = 0),
      (n.poisByBlock = i));
    let a = new Map();
    return (e) => {
      let t = a.get(e.id);
      if (t) return t;
      let r = n.lots.length;
      return (
        n.layoutBlock(e),
        (t = n.lots
          .slice(r)
          .map((e) => ({ x0: e.x0, z0: e.z0, x1: e.x1, z1: e.z1 }))),
        (n.lots.length = 0),
        a.set(e.id, t),
        t
      );
    };
  } catch (e) {
    return (
      console.warn(
        `[init] sites gaps: lot layout unavailable, using raster fallback`,
        e,
      ),
      null
    );
  }
}
function Yl(e, t, n) {
  let r = [];
  for (let i = 0; i < n; i++)
    for (let a = 0; a < t; a++) {
      if (!e[i * t + a]) continue;
      let o = a + 1;
      for (; o < t && e[i * t + o];) o++;
      let s = i + 1;
      grow: for (; s < n;) {
        for (let n = a; n < o; n++) if (!e[s * t + n]) break grow;
        s++;
      }
      for (let n = i; n < s; n++) for (let r = a; r < o; r++) e[n * t + r] = 0;
      r.push({ i0: a, j0: i, i1: o, j1: s });
    }
  return (
    r.sort(
      (e, t) => (t.i1 - t.i0) * (t.j1 - t.j0) - (e.i1 - e.i0) * (e.j1 - e.j0),
    ),
    r
  );
}
function Xl(e, t, n) {
  let r = n * 0.6,
    i = (e, t, n, r) => Math.max(0, Math.min(t, r) - Math.max(e, n));
  for (let n = t; n < e.length; n++) {
    let a = e[n];
    if (
      !(a.street[0] || a.street[1] || a.street[2] || a.street[3]) &&
      !(Math.min(a.x1 - a.x0, a.z1 - a.z0) < 2.5)
    ) {
      for (let n = t; n < e.length; n++) {
        let t = e[n];
        if (t === a || Math.min(t.x1 - t.x0, t.z1 - t.z0) >= 2.5) continue;
        let o = i(a.z0, a.z1, t.z0, t.z1) >= 0.5 * (a.z1 - a.z0),
          s = i(a.x0, a.x1, t.x0, t.x1) >= 0.5 * (a.x1 - a.x0);
        (t.street[1] && o && Math.abs(t.x0 - a.x1) <= r && (a.street[1] = !0),
          t.street[3] && o && Math.abs(a.x0 - t.x1) <= r && (a.street[3] = !0),
          t.street[0] && s && Math.abs(a.z0 - t.z1) <= r && (a.street[0] = !0),
          t.street[2] && s && Math.abs(t.z0 - a.z1) <= r && (a.street[2] = !0));
      }
      (a.street[0] || a.street[1] || a.street[2] || a.street[3]) &&
        (a.behindStrip = !0);
    }
  }
}
function Zl(e, t, n, r, i) {
  let a = e.x1 - e.x0,
    o = e.z1 - e.z0,
    s = Math.min(a, o),
    c = (e.x0 + e.x1) / 2,
    l = (e.z0 + e.z1) / 2,
    u = 0.15;
  try {
    u = n.groundHeight(c, l);
  } catch {}
  let d = ql(t, Math.round(c * 4), Math.round(l * 4) + r),
    f = e.street[0] || e.street[1] || e.street[2] || e.street[3],
    p = (e, n, r, a, o, s) => {
      a - n < 0.05 ||
        o - r < 0.05 ||
        i.push({
          kind: e,
          x0: n,
          z0: r,
          x1: a,
          z1: o,
          y0: u,
          y1: u + s,
          site: t,
          v: d,
        });
    };
  if (!f) {
    s < 2.5
      ? p(`party`, e.x0, e.z0, e.x1, e.z1, 5.5 + d * 3)
      : p(
          `shed`,
          e.x0 + 0.1,
          e.z0 + 0.1,
          e.x1 - 0.1,
          e.z1 - 0.1,
          Math.min(6.2, 2.9 + 0.25 * s + d * 0.8),
        );
    return;
  }
  if (s < 2.5) {
    p(`planter`, e.x0 + 0.1, e.z0 + 0.1, e.x1 - 0.1, e.z1 - 0.1, 0.55);
    return;
  }
  if (e.behindStrip) {
    p(`lowwall`, e.x0, e.z0, e.x1, e.z1, 0.95 + d * 0.15);
    return;
  }
  let m = 0.25,
    h = 0.95 + d * 0.15,
    g = Math.min(1.2, s * 0.3),
    [_, v, y, b] = e.street;
  (_ && p(`lowwall`, e.x0, e.z0, e.x1, e.z0 + m, h),
    y && p(`lowwall`, e.x0, e.z1 - m, e.x1, e.z1, h),
    b &&
      p(`lowwall`, e.x0, e.z0 + (_ ? m : 0), e.x0 + m, e.z1 - (y ? m : 0), h),
    v &&
      p(`lowwall`, e.x1 - m, e.z0 + (_ ? m : 0), e.x1, e.z1 - (y ? m : 0), h));
  let x = e.x0 + (b ? m : 0),
    S = e.x1 - (v ? m : 0),
    C = e.z0 + (_ ? m : 0),
    w = e.z1 - (y ? m : 0);
  if (
    (_ || p(`planter`, x, C, S, C + g, 0.6),
    y || p(`planter`, x, w - g, S, w, 0.6),
    b || p(`planter`, x, C + (_ ? 0 : g), x + g, w - (y ? 0 : g), 0.6),
    v || p(`planter`, S - g, C + (_ ? 0 : g), S, w - (y ? 0 : g), 0.6),
    s >= 6)
  ) {
    let e = (S - x) * 0.18,
      t = (w - C) * 0.18;
    p(`planter`, c - e, l - t, c + e, l + t, 0.5);
  }
}
function Ql(e, t) {
  let n = Kl(),
    r = {
      bySite: new Map(),
      items: [],
      stats: {
        ms: 0,
        sites: 0,
        rects: 0,
        items: 0,
        cells: 0,
        method: `none`,
        blocks: 0,
        skipped: 0,
        truncated: !1,
        msLayout: 0,
        probes: 0,
        trimmed: 0,
        merged: 0,
      },
    },
    i = new Map(),
    a = e?.plan;
  if (!a || !Array.isArray(a.blocks)) return r;
  let o = e.districts,
    s = null;
  try {
    s = ml(o?.packs);
  } catch {
    s = null;
  }
  let c = s
      ? (e, t, n, r) => s.claimed(e, t, n, r, `buildings`)
      : (e, t, n, r) => {
          try {
            return !!o?.claimed(e, t, n, r, `buildings`);
          } catch {
            return !1;
          }
        },
    l = (e, t) => {
      r.stats.probes++;
      try {
        return a.surfaceAt(e, t) === `lot`;
      } catch {
        return !1;
      }
    },
    u = Jl(a);
  r.stats.method = u ? `layout` : `raster`;
  let d = e.buildings?.buildings ?? [],
    f = new Map(),
    p = (e, t) => (e + 4096) * 8192 + (t + 4096);
  for (let e of d) {
    let t = Math.floor(e.x0 / 64),
      n = Math.floor(e.x1 / 64),
      r = Math.floor(e.z0 / 64),
      i = Math.floor(e.z1 / 64);
    if (!((n - t + 1) * (i - r + 1) > 64))
      for (let a = r; a <= i; a++)
        for (let r = t; r <= n; r++) {
          let t = p(r, a),
            n = f.get(t);
          (n || f.set(t, (n = [])), n.push(e));
        }
  }
  let m = new Set(),
    h = (e, t, n) => {
      ((n.length = 0), m.clear());
      let r = Math.floor((e.x0 - t) / 64),
        i = Math.floor((e.x1 + t) / 64),
        a = Math.floor((e.z0 - t) / 64),
        o = Math.floor((e.z1 + t) / 64);
      for (let s = a; s <= o; s++)
        for (let a = r; a <= i; a++) {
          let r = f.get(p(a, s));
          if (r)
            for (let i of r) m.has(i) || (m.add(i), Gl(i, e, t) && n.push(i));
        }
      return n;
    },
    g = [],
    _ = new Map();
  for (let e of a.blocks) {
    let t = Math.floor(e.minX / 64),
      n = Math.floor(e.maxX / 64),
      r = Math.floor(e.minZ / 64),
      i = Math.floor(e.maxZ / 64);
    if (!((n - t + 1) * (i - r + 1) > 256))
      for (let a = r; a <= i; a++)
        for (let r = t; r <= n; r++) {
          let t = p(r, a),
            n = _.get(t);
          (n || _.set(t, (n = [])), n.push(e));
        }
  }
  let v = new Set(),
    y = (e) => {
      v.clear();
      let t = [];
      for (let n of e) {
        let e = Math.floor(n.x0 / 64),
          r = Math.floor(n.x1 / 64),
          i = Math.floor(n.z0 / 64),
          a = Math.floor(n.z1 / 64);
        for (let n = i; n <= a; n++)
          for (let i = e; i <= r; i++) {
            let e = _.get(p(i, n));
            if (e) for (let n of e) v.has(n) || (v.add(n), t.push(n));
          }
      }
      return t;
    },
    b = new Set(),
    x = new Set(),
    S = 0;
  for (let e of t)
    if (e.ok) {
      if (S > Ll || Kl() - n > zl) {
        (r.stats.skipped++, (r.stats.truncated = !0));
        continue;
      }
      try {
        let t = e.claims.filter(
          (e) => e.scope === `buildings` || e.scope === `all`,
        );
        if (!t.length) continue;
        let n = t.map((e) => ({
            x0: e.minX,
            z0: e.minZ,
            x1: e.maxX,
            z1: e.maxZ,
          })),
          o = [];
        for (let e of y(n)) {
          let t = { x0: e.minX, z0: e.minZ, x1: e.maxX, z1: e.maxZ };
          if (n.some((e) => Gl(e, t))) {
            if (u) {
              let t = [];
              try {
                x.has(e.id) || (x.add(e.id), r.stats.blocks++);
                let n = Kl();
                ((t = u(e)), (r.stats.msLayout += Kl() - n));
              } catch (n) {
                (console.warn(
                  `[init] sites gaps: layout failed for block ${e.id}`,
                  n,
                ),
                  (t = []));
              }
              for (let r of t) {
                if (!n.some((e) => Gl(e, r))) continue;
                let t = `${r.x0.toFixed(1)},${r.z0.toFixed(1)},${r.x1.toFixed(1)},${r.z1.toFixed(1)}`;
                b.has(t) || (b.add(t), o.push({ r, b: e }));
              }
            } else
              for (let t of n) {
                let n = {
                  x0: Math.max(e.minX, t.x0 - Il),
                  z0: Math.max(e.minZ, t.z0 - Il),
                  x1: Math.min(e.maxX, t.x1 + Il),
                  z1: Math.min(e.maxZ, t.z1 + Il),
                };
                n.x1 - n.x0 > 1 && n.z1 - n.z0 > 1 && o.push({ r: n, b: e });
              }
          }
        }
        if (!o.length) continue;
        let s = { id: e.id, rects: [], items: [] },
          d = [];
        for (let { r: e, b: t } of o) {
          let n = e.x0,
            i = e.z0,
            a = e.x1 - e.x0,
            o = e.z1 - e.z0,
            s = a * o > Vl ? Hl : 1,
            f = Math.max(0, Math.floor(a / s + 1e-6)),
            p = Math.max(0, Math.floor(o / s + 1e-6));
          if (f < 1 || p < 1 || f * p > Rl) continue;
          if (S + f * p > Ll) {
            r.stats.truncated = !0;
            break;
          }
          S += f * p;
          let m = a / f,
            _ = o / p,
            v = h(e, 1, g),
            y = new Uint8Array(f * p),
            b = 0,
            x = Math.max(1, Math.ceil(Ul / m)),
            C = Math.max(1, Math.ceil(Ul / _)),
            w = !u || e.x0 - t.minX < 1.7,
            T = !u || t.maxX - e.x1 < 1.7,
            E = !u || e.z0 - t.minZ < 1.7,
            D = !u || t.maxZ - e.z1 < 1.7,
            O = !u;
          for (let e = 0; e < p; e++) {
            let t = i + e * _,
              r = t + _,
              a = (E && e < C) || (D && e >= p - C);
            for (let i = 0; i < f; i++) {
              let o = n + i * m,
                s = o + m,
                u = (o + s) / 2,
                d = (t + r) / 2;
              if (
                !((O || a || (w && i < x) || (T && i >= f - x)) && !l(u, d)) &&
                !c(o + Wl, t + Wl, s - Wl, r - Wl)
              ) {
                if (v.length) {
                  let e = !1;
                  for (let t of v)
                    u > t.x0 - 0.5 &&
                      u < t.x1 + 0.5 &&
                      d > t.z0 - 0.5 &&
                      d < t.z1 + 0.5 &&
                      (e = !0);
                  if (e) continue;
                }
                ((y[e * f + i] = 1), b++);
              }
            }
          }
          if (((r.stats.cells += b), !b)) continue;
          let k = d.length;
          for (let e of Yl(y, f, p)) {
            let r = {
                x0: n + e.i0 * m,
                z0: i + e.j0 * _,
                x1: n + e.i1 * m,
                z1: i + e.j1 * _,
                street: [!1, !1, !1, !1],
                a: 0,
              },
              a = r.x1 - r.x0,
              o = r.z1 - r.z0;
            if (((r.a = a * o), r.a < Pl || Math.min(a, o) < Fl)) continue;
            let s = 0.6;
            ((r.street = [
              r.z0 - t.minZ < s,
              t.maxX - r.x1 < s,
              t.maxZ - r.z1 < s,
              r.x0 - t.minX < s,
            ]),
              d.push(r));
          }
          Xl(d, k, Math.max(m, _));
        }
        d.sort((e, t) => t.a - e.a);
        let f = [];
        for (let t = 0; t < d.length && s.rects.length < 6; t++) {
          let { a: n, ...r } = d[t],
            i = [];
          if ((Zl(r, e.id, a, t, i), i.length)) {
            if (s.rects.length && s.items.length + i.length > Nl) break;
            (s.rects.push(r), f.push(i));
            for (let e of i) s.items.push(e);
          }
        }
        if (!s.rects.length) continue;
        (r.bySite.set(e.id, s),
          i.set(e.id, f),
          r.stats.sites++,
          (r.stats.rects += s.rects.length));
      } catch (t) {
        console.warn(`[init] sites gaps failed for ${e.id}`, t);
      }
    }
  let C = 0;
  for (let e of r.bySite.values()) C += e.items.length;
  for (let e = 0; C > 240 && e < 4e3; e++) {
    let e = null,
      t = -1;
    for (let n of r.bySite.values()) {
      if (e && n.items.length <= e.items.length) continue;
      let r = i.get(n.id);
      if (!r) continue;
      let a = -1,
        o = 1;
      for (let e = 0; e < r.length; e++)
        r[e].length > o && ((o = r[e].length), (a = e));
      a < 0 || ((e = n), (t = a));
    }
    if (!e || t < 0) break;
    let n = i.get(e.id),
      a = Ml(n[t]);
    ((C -= n[t].length - 1),
      (r.stats.merged += n[t].length - 1),
      (n[t] = [a]),
      (e.items.length = 0));
    for (let t of n) for (let n of t) e.items.push(n);
  }
  for (let e = 0; e < 2 && C > 240; e++) {
    let t = +(e === 0);
    for (let e = 0; C > 240 && e < 4e3; e++) {
      let e = null;
      for (let n of r.bySite.values())
        n.rects.length > t &&
          (!e || n.items.length > e.items.length) &&
          (e = n);
      if (!e) break;
      let n = i.get(e.id)?.pop();
      if ((e.rects.pop(), !n)) break;
      ((e.items.length -= n.length),
        (C -= n.length),
        r.stats.rects--,
        (r.stats.trimmed += n.length));
    }
  }
  for (let [e, t] of [...r.bySite])
    if (!t.items.length) r.bySite.delete(e);
    else for (let e of t.items) r.items.push(e);
  ((r.stats.sites = r.bySite.size),
    (r.stats.items = r.items.length),
    (r.stats.ms = Math.round((Kl() - n) * 100) / 100));
  let w = r.stats;
  return (
    (w.trimmed || w.merged) &&
      console.info(
        `[init] sites gaps: ${w.items} fillers kept, ${w.merged} folded into coarse massing, ${w.trimmed} trimmed to the 240-item far-layer budget`,
      ),
    w.truncated
      ? console.warn(
          `[test] sites gaps: budget ran out after ${w.ms} ms — ${w.skipped} sites got no fillers (their dropped lots stay bare ground)`,
        )
      : w.ms > Bl &&
        console.info(
          `[init] sites gaps ${w.ms} ms (${w.sites} sites, ${w.blocks} block layouts ${w.msLayout.toFixed(1)} ms, ${w.probes} surface probes) — above the ${Bl} ms soft target`,
        ),
    r
  );
}
var $l = 64,
  eu = new (class e {
    byId = new Map();
    cells = new Map();
    nextId = 1;
    static key(e, t) {
      let n = e < -511 ? 0 : e > 511 ? 1022 : e + 511,
        r = t < -511 ? 0 : t > 511 ? 1022 : t + 511;
      return n * 1024 + r;
    }
    register(t, n, r = t) {
      let i = {
        id: this.nextId++,
        owner: t,
        label: r,
        minX: Math.min(n.minX, n.maxX),
        maxX: Math.max(n.minX, n.maxX),
        minZ: Math.min(n.minZ, n.maxZ),
        maxZ: Math.max(n.minZ, n.maxZ),
        minY: n.minY ?? -1 / 0,
        maxY: n.maxY ?? 1 / 0,
      };
      this.byId.set(i.id, i);
      for (let t = Math.floor(i.minX / $l); t <= Math.floor(i.maxX / $l); t++)
        for (
          let n = Math.floor(i.minZ / $l);
          n <= Math.floor(i.maxZ / $l);
          n++
        ) {
          let r = e.key(t, n),
            a = this.cells.get(r);
          (a || this.cells.set(r, (a = [])), a.push(i.id));
        }
      let a = !0;
      return {
        id: i.id,
        owner: t,
        dispose: () => {
          a && ((a = !1), this.remove(i.id));
        },
      };
    }
    remove(t) {
      let n = this.byId.get(t);
      if (n) {
        this.byId.delete(t);
        for (let r = Math.floor(n.minX / $l); r <= Math.floor(n.maxX / $l); r++)
          for (
            let i = Math.floor(n.minZ / $l);
            i <= Math.floor(n.maxZ / $l);
            i++
          ) {
            let n = e.key(r, i),
              a = this.cells.get(n);
            if (!a) continue;
            let o = a.indexOf(t);
            (o >= 0 && a.splice(o, 1), a.length || this.cells.delete(n));
          }
      }
    }
    overlaps(t, n, r = 0.05) {
      let i = Math.min(t.minX, t.maxX),
        a = Math.max(t.minX, t.maxX),
        o = Math.min(t.minZ, t.maxZ),
        s = Math.max(t.minZ, t.maxZ),
        c = t.minY ?? -1 / 0,
        l = t.maxY ?? 1 / 0;
      for (let t = Math.floor(i / $l); t <= Math.floor(a / $l); t++)
        for (let u = Math.floor(o / $l); u <= Math.floor(s / $l); u++) {
          let d = this.cells.get(e.key(t, u));
          if (d)
            for (let e = 0; e < d.length; e++) {
              let t = this.byId.get(d[e]);
              if (
                (n === void 0 || t.owner !== n) &&
                t.minX < a - r &&
                t.maxX > i + r &&
                t.minZ < s - r &&
                t.maxZ > o + r &&
                t.minY < l &&
                t.maxY > c
              )
                return t;
            }
        }
      return null;
    }
    query(t, n = []) {
      let r = new Set(),
        i = Math.min(t.minX, t.maxX),
        a = Math.max(t.minX, t.maxX),
        o = Math.min(t.minZ, t.maxZ),
        s = Math.max(t.minZ, t.maxZ);
      for (let t = Math.floor(i / $l); t <= Math.floor(a / $l); t++)
        for (let c = Math.floor(o / $l); c <= Math.floor(s / $l); c++) {
          let l = this.cells.get(e.key(t, c));
          if (l)
            for (let e of l) {
              if (r.has(e)) continue;
              let t = this.byId.get(e);
              t.minX < a &&
                t.maxX > i &&
                t.minZ < s &&
                t.maxZ > o &&
                (r.add(e), n.push(t));
            }
        }
      return n;
    }
    all() {
      return [...this.byId.values()];
    }
    get size() {
      return this.byId.size;
    }
    clear() {
      (this.byId.clear(), this.cells.clear());
    }
    releaseOwners(e) {
      let t = 0;
      for (let n of [...this.byId.values()])
        for (let r of e)
          if (n.owner.startsWith(r)) {
            (this.remove(n.id), t++);
            break;
          }
      return t;
    }
  })(),
  tu = 0.5,
  nu = 40;
function ru(e, t, n, r, i, a, o) {
  if (r.length === 0) return -1;
  let s = i - e.x,
    c = o - e.z,
    l = s * t + c * n,
    u = -s * n + c * t,
    d = a - e.y;
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if (
      !(l < t.x0 || l > t.x1 || u < t.z0 || u > t.z1) &&
      !(d < -0.6 || d > t.ceilY - 0.2)
    )
      return e;
  }
  return -1;
}
function iu(e) {
  switch (e) {
    case `temple`:
      return { room: `temple`, light: 16763024 };
    case `snack`:
    case `restaurant`:
    case `cafe`:
    case `bakery`:
    case `shop`:
    case `market`:
      return { room: `store`, light: 16773596 };
    case `museum`:
    case `government`:
    case `heritage`:
    case `university`:
    case `school`:
    case `mall`:
    case `hotel`:
    case `venue`:
      return { room: `hall`, light: 16773854 };
    default:
      return { room: `room`, light: 16771531 };
  }
}
function au(e, t, n, r) {
  if (n.length === 0) return () => {};
  let i = Math.cos(t.facing),
    a = Math.sin(t.facing),
    o = iu(r),
    s = n[0],
    c = (s.x0 + s.x1) / 2,
    l = (s.z0 + s.z1) / 2;
  return Yn({
    id: `site:${e}`,
    room: o.room,
    light: o.light,
    x: t.x + c * i - l * a,
    y: t.y + (s.floorY ?? 0),
    z: t.z + c * a + l * i,
    contains: (e, r, o) => ru(t, i, a, n, e, r - 0.9, o) >= 0,
    camera: (e, r, o, s) => {
      let c = ru(t, i, a, n, e, r - 0.9, o);
      return c < 0
        ? !1
        : ((s.ceilY = t.y + n[c].ceilY), (s.maxDist = n[c].maxCamDist), !0);
    },
  });
}
function ou(e, t = eu) {
  let n = [],
    r = { minX: 0, minZ: 0, maxX: 0, maxZ: 0, minY: 0, maxY: 0 };
  for (let { meta: i, site: a } of e) {
    if (!a.ok || i.interior === `none`) continue;
    let e = a.rect;
    ((r.minX = e.minX),
      (r.minZ = e.minZ),
      (r.maxX = e.maxX),
      (r.maxZ = e.maxZ),
      (r.minY = a.y - tu),
      (r.maxY = a.y + nu));
    try {
      n.push(t.register(`sites:${i.id}`, r, `sites:${i.id}#lot`));
    } catch (e) {
      console.warn(`[sites] ${i.id}: interior claim failed`, e);
    }
  }
  return n;
}
var su = 2,
  cu = [1],
  lu = 110,
  uu = 16,
  du = 70,
  fu = 2,
  pu = {
    finishes: 0,
    afterUpload: 0,
    finishMaxMs: 0,
    slices: 0,
    slowSlices: 0,
    sliceMaxMs: 0,
    atlasSlices: 0,
    atlasSlowSlices: 0,
    atlasSliceMaxMs: 0,
  };
function mu() {
  return pu;
}
var hu = 2.5,
  gu = new Set();
function _u(e, t) {
  (pu.slices++,
    t > pu.sliceMaxMs && (pu.sliceMaxMs = Math.round(t * 100) / 100),
    e.endsWith(`:atlas`) &&
      (pu.atlasSlices++,
      t > 2.5 && pu.atlasSlowSlices++,
      t > pu.atlasSliceMaxMs &&
        (pu.atlasSliceMaxMs = Math.round(t * 100) / 100)),
    !(t <= 2.5) &&
      (pu.slowSlices++,
      !gu.has(e) &&
        (gu.add(e),
        vu &&
          console.warn(
            `[test] sites slow slice ${e} ${t.toFixed(2)} ms > ${hu} — yield more often (≤3k tris per yield)`,
          ))));
}
var vu =
  typeof location < `u` && new URLSearchParams(location.search).has(`debug`);
function yu() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function bu(e) {
  let t = e.info,
    n = e.lit,
    r = e.vcount * 4,
    i = 0;
  for (let e = 0; e < r; e += 4)
    t[e] === X.PLAIN && n[e + 3] > 0 && ((t[e] = X.LIT), i++);
  return i;
}
function xu(e, t) {
  let n = e.getAttribute(`aCol`),
    r = e.getAttribute(`aLight`),
    i = e.getAttribute(`position`).count,
    a = new Float32Array(i * 4),
    o = new Float32Array(i * 2),
    s = n?.array,
    c = r?.array;
  for (let e = 0; e < i; e++) {
    let n = e * 4;
    if (s) {
      let e = s[n + 3] / 255,
        t = s[n] / 255,
        r = s[n + 1] / 255,
        i = s[n + 2] / 255;
      ((a[n] = t * e), (a[n + 1] = r * e), (a[n + 2] = i * e));
    } else a[n] = a[n + 1] = a[n + 2] = 0.6;
    ((a[n + 3] = c && c[n + 3] > 0 ? 1 : 0),
      (o[e * 2] = t.u0),
      (o[e * 2 + 1] = t.v0));
  }
  (e.setAttribute(`color`, new H(a, 4)),
    e.setAttribute(`uv`, new H(o, 2)),
    e.deleteAttribute(`aCol`),
    e.deleteAttribute(`aMat`),
    e.deleteAttribute(`aLight`),
    e.deleteAttribute(`aInfo`));
}
var Su = new Set([`mid`, `near`]);
function Cu(e, t, n, r, i) {
  let a = Math.cos(i),
    o = Math.sin(i),
    s = e.getAttribute(`position`);
  if (s) {
    let e = s.array;
    for (let i = 0; i < e.length; i += 3) {
      let s = e[i],
        c = e[i + 2];
      ((e[i] = t + s * a - c * o),
        (e[i + 1] += n),
        (e[i + 2] = r + s * o + c * a));
    }
    s.needsUpdate = !0;
  }
  let c = e.getAttribute(`normal`);
  if (c) {
    let e = c.array;
    for (let t = 0; t < e.length; t += 3) {
      let n = e[t],
        r = e[t + 2];
      ((e[t] = n * a - r * o), (e[t + 2] = n * o + r * a));
    }
    c.needsUpdate = !0;
  }
  return (e.computeBoundingSphere(), e.computeBoundingBox(), e);
}
var wu = class {
  scene;
  material;
  parts = new Map();
  dirty = !1;
  mesh = null;
  rebuilds = 0;
  constructor(e, t) {
    ((this.scene = e), (this.material = t));
  }
  add(e, t) {
    this.parts.get(e) !== t && (this.parts.set(e, t), (this.dirty = !0));
  }
  remove(e) {
    this.parts.delete(e) && (this.dirty = !0);
  }
  get size() {
    return this.parts.size;
  }
  flush() {
    if (!this.dirty) return;
    ((this.dirty = !1), this.rebuilds++);
    let e = this.mesh;
    if (
      (e && (e.parent?.remove(e), e.geometry.dispose(), (this.mesh = null)),
      this.parts.size === 0)
    )
      return;
    let t = Tu(this.parts.values());
    if (!t) return;
    let n = new M(t, this.material);
    ((n.name = `sites:glass-batch`),
      (n.userData.owner = `sites`),
      (n.castShadow = !1),
      (n.receiveShadow = !1),
      (n.matrixAutoUpdate = !1),
      n.updateMatrix(),
      (n.frustumCulled = !1),
      (this.mesh = n),
      this.scene.add(n));
  }
  dispose() {
    ((this.mesh &&=
      (this.mesh.parent?.remove(this.mesh),
      this.mesh.geometry.dispose(),
      null)),
      this.parts.clear(),
      (this.dirty = !1));
  }
};
function Tu(e) {
  let t = [],
    n = 0,
    r = 0;
  for (let i of e) {
    let e = i.getAttribute(`position`),
      a = i.getIndex();
    e && a && a.count !== 0 && (t.push(i), (n += e.count), (r += a.count));
  }
  if (!t.length) return null;
  let i = new V();
  for (let [e, r] of [
    [`position`, 3],
    [`normal`, 3],
    [`uv`, 2],
    [`color`, 4],
  ]) {
    let a = new Float32Array(n * r),
      o = 0;
    for (let n of t) {
      let t = n.getAttribute(e),
        i = n.getAttribute(`position`).count;
      if (t && t.itemSize === r) a.set(t.array, o);
      else if (e === `color`)
        for (let e = o; e < o + i * 4; e += 4)
          ((a[e] = 1), (a[e + 1] = 1), (a[e + 2] = 1));
      o += i * r;
    }
    i.setAttribute(e, new H(a, r));
  }
  let a = n > 65535 ? new Uint32Array(r) : new Uint16Array(r),
    o = 0,
    s = 0;
  for (let e of t) {
    let t = e.getIndex();
    for (let e = 0; e < t.count; e++) a[s++] = o + t.getX(e);
    o += e.getAttribute(`position`).count;
  }
  return (
    i.setIndex(new H(a, 1)),
    i.computeBoundingSphere(),
    i.computeBoundingBox(),
    i
  );
}
function Eu(e, t, n) {
  let r = t ? new M(e, t) : new M(e);
  return (
    (r.name = n),
    (r.castShadow = !1),
    (r.receiveShadow = !1),
    (r.matrixAutoUpdate = !1),
    r.updateMatrix(),
    r
  );
}
function Du(e, t, n, r) {
  let i = e.ctx ?? null,
    a = e.q,
    o = n.facing,
    s = Math.cos(o),
    c = Math.sin(o),
    l = n.x,
    u = n.z,
    d = n.y,
    f = `sites:${t.id}:${r}`,
    p = new Ac({ ox: l, oz: u, y0: d, facing: o }),
    m = e.atlasView,
    h = new rt(r === `mid` ? 2048 : 8192),
    _ = a === `low` || r === `interior` ? null : new rt(1024),
    v = new Rr(m.white, r === `mid` ? 1024 : 4096),
    y = r === `interior` ? new Rr(m.white, 4096) : null,
    b = a === `high` && e.mats?.glass ? new Rr(m.white, 512) : null,
    x = [],
    S = [],
    C = [],
    w = (e, t, n, r, i) => {
      let a = 0,
        o = 0,
        s = Math.max(1e-6, (n - e) * (r - t));
      for (let [c, l, u, d, f] of C) {
        let p = Math.min(n, u) - Math.max(e, c),
          m = Math.min(r, d) - Math.max(t, l);
        if (p <= 0.05 || m <= 0.05 || f > i - 1.2) continue;
        let h = (p * m) / s;
        (h > o + 0.02 || (Math.abs(h - o) <= 0.02 && f > a)) &&
          ((a = f), (o = Math.max(h, o)));
      }
      return a;
    },
    T = [],
    E = [],
    D = n.frontage?.label ?? { zh: ``, en: `` },
    O = {
      w: n.w,
      d: n.d,
      sx: (t.lot?.w ?? 0) > 0 ? n.w / t.lot.w : 1,
      sz: (t.lot?.d ?? 0) > 0 ? n.d / t.lot.d : 1,
      y0: d,
      facing: o,
      sidewalk: e.sidewalk ?? n.frontage?.sidewalk ?? 3,
      road: D,
      wx: (e, t) => l + e * s - t * c,
      wz: (e, t) => u + e * c + t * s,
    },
    k = {
      meta: t,
      site: n,
      tier: r,
      q: a,
      rng: new Oe(je(t.id, r)),
      state: 0,
      frame: O,
      lm: h,
      leaves: _,
      art: v,
      room: y,
      glass: b,
      atlas: m,
      box: (e, t, n, r, i = 0, a = i + 3) => p.box(e, t, n, r, i, a),
      obb: (e, t, n, r, i, a = 0, o = a + 3) => p.obb(e, t, n, r, i, a, o),
      circle: (e, t, n, r = 0, i = r + 3) => p.circle(e, t, n, r, i),
      floor: (e, t, n, r, i) => {
        (C.push([
          Math.min(e, n),
          Math.min(t, r),
          Math.max(e, n),
          Math.max(t, r),
          i,
        ]),
          p.floor(e, t, n, r, i));
      },
      stairs: (e, t, n, r, i, a, o) => {
        let s = Math.max(1, Math.round(i)),
          c = p.stairs(e, t, n, r, s, a, o),
          l = Math.abs(n) / 2,
          u = Math.abs(o);
        (h.push(), h.translate(e, 0, t), h.rotateY(-r));
        for (let e = 0; e < s; e++) {
          let t = 23 | (e === s - 1 ? 32 : 0);
          h.box(-l, 0, -(e + 1) * u, l, (e + 1) * c, -e * u, t);
        }
        h.pop();
      },
      interact: (e) => {
        x.push(e);
      },
      indoor: (e, t, n, i, a, o = 2.5, s) => {
        r === `interior`
          ? S.push({
              x0: Math.min(e, n),
              z0: Math.min(t, i),
              x1: Math.max(e, n),
              z1: Math.max(t, i),
              ceilY: a,
              floorY: 0,
              maxCamDist: o,
              openFront: s,
            })
          : E.push(`indoor() outside the interior tier ignored`);
      },
      live: (e, t, n, r) => {
        if (T.length >= su) {
          E.push(`live() over ${su} per tier ignored`);
          return;
        }
        T.push({ x: e, z: t, rot: n, pose: r });
      },
      glow: (e, t) => et(e, t, X.LIT),
    },
    A = null;
  function* j(n = !0) {
    if (A) return A;
    let s = yu(),
      c = 0,
      C = () => {
        let e = yu();
        ((c += e - s), (s = e));
      };
    pu.finishes++;
    try {
      m.sinceUpload() < fu && pu.afterUpload++;
    } catch {}
    let D = e.mats,
      k = new g();
    ((k.name = f),
      (k.userData.owner = `sites`),
      k.position.set(l, d, u),
      (k.rotation.y = -o),
      (k.matrixAutoUpdate = !1),
      k.updateMatrix());
    let j = m.white;
    h.empty || bu(h);
    let M = (D?.cityLook && D.city) || null,
      N = !!D && D.lm === D.ext,
      P = !!D && D.leaf === D.ext,
      ee = !!D && !N && !M,
      te =
        ee &&
        r === `near` &&
        a === `high` &&
        (e.camDist ?? 0) <= lu &&
        i?.quality?.shadows !== !1,
      F = !!_ && !_.empty && !M;
    F && !P && _.cutout();
    let I = ee && F && !P && D.leaf === D.lm;
    if (M) {
      let n = D.cityLook.geometry(h, _, v, j);
      if ((C(), yield, (s = yu()), n)) {
        let o = Eu(n, M, `${f}:city`);
        o.receiveShadow = !0;
        let s = 0;
        for (let e of t.proxy) s = Math.max(s, (e.y ?? 0) + e.h);
        ((o.castShadow =
          r === `near` &&
          a === `high` &&
          s >= uu &&
          (e.camDist ?? 0) <= du &&
          i?.quality?.shadows !== !1),
          k.add(o));
      }
    } else if (ee) {
      let e = [];
      if ((h.empty || e.push(h.view()), I && e.push(_.view()), e.length)) {
        C();
        let t = yield* Ic(
          e,
          D.lm,
          `${f}:lm`,
          te && e.length === 2 ? cu : void 0,
        );
        ((s = yu()),
          (t.receiveShadow = !0),
          (t.castShadow = te && !h.empty),
          (t.matrixAutoUpdate = !1),
          t.updateMatrix(),
          k.add(t));
      }
      if (F && !I) {
        let e = _.build();
        xu(e, j);
        let t = Eu(e, D?.leaf, `${f}:leaves`);
        ((t.matrixAutoUpdate = !1), t.updateMatrix(), k.add(t));
      }
    } else {
      let e = h.empty ? null : h.build(),
        t = F ? _.build() : null;
      if (e) {
        N && xu(e, j);
        let t = Eu(e, D?.lm, `${f}:lm`);
        ((t.receiveShadow = !N), k.add(t));
      }
      if (t) {
        P && xu(t, j);
        let e = Eu(t, D?.leaf, `${f}:leaves`);
        ((e.receiveShadow = !P), k.add(e));
      }
    }
    (C(), yield, (s = yu()));
    let L = !!b && b.icount > 0 && !!D?.glass && Su.has(r),
      ne = L ? Cu(b.toGeometry(), l, d, u, o) : null;
    if (
      (v.icount > 0 &&
        !M &&
        (k.add(Eu(v.toGeometry(), D?.ext, `${f}:art`)), C(), yield, (s = yu())),
      y && y.icount > 0)
    ) {
      let e = Eu(y.toGeometry(), D?.room, `${f}:room`);
      ((e.renderOrder = -30), k.add(e), C(), yield, (s = yu()));
    }
    (b &&
      b.icount > 0 &&
      D?.glass &&
      !L &&
      k.add(Eu(b.toGeometry(), D.glass, `${f}:glass`)),
      h.release(),
      _?.release(),
      v.release(!1),
      y?.release(!1),
      b?.release(!1));
    let re = zo(k);
    globalThis.__SITE_MESH_DEBUG &&
      console.warn(
        `[meshdbg] ${t.id} ${r}/${a} ` +
          k.children
            .map(
              (e) =>
                `${e.name.split(`:`).pop()}=${(e.geometry?.getIndex()?.count ?? 0) / 3}t`,
            )
            .join(` `),
      );
    let R = Vo(r, a, re);
    if (R) {
      if (a === `low`) {
        for (let e of [...k.children])
          (e.name.endsWith(`:leaves`) || e.name.endsWith(`:glass`)) &&
            (k.remove(e), e.geometry.dispose());
        (zo(k, re), (R = Vo(r, a, re)));
      }
      R && console.warn(`[test] sites over-budget ${t.id} ${R}`);
    }
    for (let e of [...E, ...p.warnings])
      console.warn(`[test] sites ${t.id}:${r} ${e}`);
    for (let e of S) e.floorY = w(e.x0, e.z0, e.x1, e.z1, e.ceilY);
    let z = n ? p.commit(i?.statics, f) : null,
      ie = [];
    if (i && T.length) {
      let e = i.peds?.spawnScripted?.bind(i.peds);
      if (e)
        for (let n of T)
          try {
            let t = e(O.wx(n.x, n.z), O.wz(n.x, n.z), {
              heading: o + n.rot,
              pose: n.pose ?? `idle`,
              y: d,
            });
            t && (t.stop(n.pose ?? `idle`, o + n.rot), ie.push(t));
          } catch (e) {
            console.warn(`[test] sites ${t.id} live() failed`, e);
          }
    }
    let ae = !1,
      oe = {
        root: k,
        calls: re.calls,
        tris: re.tris,
        scope: z,
        spots: x,
        indoor: S,
        over: R,
        colliderCount: p.colliders,
        floorCount: p.floors,
        glass: ne,
        dispose() {
          if (!ae) {
            ((ae = !0),
              ne?.dispose(),
              k.parent?.remove(k),
              k.traverse((e) => {
                if (Rc(e)) return e.dispose();
                let t = e.geometry;
                t?.isBufferGeometry && t.dispose();
              }),
              k.clear(),
              z?.dispose());
            for (let e of ie)
              try {
                e.release();
              } catch {}
            ((ie.length = 0), (x.length = 0), (S.length = 0));
          }
        },
      };
    return (
      (A = oe),
      C(),
      c > pu.finishMaxMs && (pu.finishMaxMs = Math.round(c * 100) / 100),
      oe
    );
  }
  return {
    b: k,
    colliders: p,
    finish: () => {
      let e = j(!0);
      for (;;) {
        let t = e.next();
        if (t.done) return t.value;
      }
    },
    finishSteps: j,
  };
}
function Ou(e, t, n, r, i) {
  let a = Math.cos(e.facing),
    o = Math.sin(e.facing);
  return (
    (i.x = e.x + t * a - r * o),
    (i.y = e.y + n),
    (i.z = e.z + t * o + r * a),
    i
  );
}
var ku = pt.proxyCalls,
  Au = 0.35,
  ju = 0.15,
  Mu = pt.proxyTris,
  Nu = 0.8,
  Pu = 1.5,
  Fu = new Map();
function Iu(e, t) {
  let n = Fu.get(e);
  return (n || Fu.set(e, (n = t())), n);
}
var Lu = (e, t, n, r) => ({
  flags: Qe.WINDOWS,
  er: e,
  eg: t,
  eb: n,
  ei: 1.4,
  ex: r,
});
function Ru(e, t, n) {
  let r = n >= 6.5;
  return Iu(`${e}|${t ?? -1}|${+!!r}`, () => {
    switch (e) {
      case `brick`:
        return r
          ? Y(t ?? 16777215, X.BRICK_RECT_WIN, {
              su: 4.2,
              sv: 3.6,
              rough: 0.8,
              flood: 0.6,
              ...Lu(1, 0.85, 0.6, 0.35),
            })
          : Y(t ?? 11034687, X.BRICK, {
              su: 1.1,
              sv: 1.1,
              rough: 0.85,
              flood: 0.5,
            });
      case `redbrick`:
        return r
          ? Y(t ?? 16777215, X.BRICK_ARCH_WIN, {
              su: 4.2,
              sv: 5.5,
              rough: 0.82,
              flood: 0.8,
              ...Lu(1, 0.82, 0.55, 0.45),
            })
          : Y(t ?? 12140846, X.BRICK, {
              su: 1.1,
              sv: 1.1,
              rough: 0.85,
              flood: 0.6,
            });
      case `concrete`:
        return r
          ? Y(t ?? 15789024, X.WIN_OFFICE, {
              su: 3.4,
              sv: 3.4,
              rough: 0.6,
              flood: 0.3,
              ...Lu(1, 0.95, 0.85, 0.5),
            })
          : Y(t ?? 12104358, X.CONCRETE, { su: 4, sv: 4 });
      case `tile`:
        return r
          ? Y(t ?? 15920868, X.WIN_HOTEL, {
              su: 2.8,
              sv: 3.2,
              rough: 0.6,
              flood: 0.3,
              ...Lu(1, 0.78, 0.5, 0.4),
            })
          : Y(t ?? 14275784, X.SMALL_TILE, { su: 2, sv: 2, rough: 0.5 });
      case `stone`:
        return Y(t ?? 15130576, X.STONE, {
          su: 2.5,
          sv: 1.2,
          rough: 0.65,
          flood: 0.9,
        });
      case `glass`:
        return Y(t ?? 16777215, X.GLASS_MALL, {
          su: 4,
          sv: 4,
          rough: 0.15,
          metal: 0.35,
          ...Lu(0.95, 0.9, 0.8, 0.55),
        });
      case `wood`:
        return Y(t ?? 12094042, X.WOOD, { su: 2, sv: 2, rough: 0.75 });
      case `white`:
        return r
          ? Y(t ?? 16182490, X.WIN_COLONIAL_WHITE, {
              su: 4,
              sv: 5,
              rough: 0.65,
              flood: 0.6,
              ...Lu(1, 0.88, 0.65, 0.5),
            })
          : Y(t ?? 15855076, X.PLAIN, { rough: 0.6, flood: 0.5 });
      case `green`:
        return Y(t ?? 5603391, X.LEAVES, { su: 3, sv: 3, rough: 0.95 });
      default:
        return Y(t ?? 13157046, X.CONCRETE, { su: 4, sv: 4 });
    }
  });
}
function zu(e, t) {
  return e === `green`
    ? Ru(`green`, t, 0)
    : e === `glass`
      ? Iu(`top-glass`, () =>
          Y(8227474, X.METAL_PANEL, { su: 3, sv: 3, rough: 0.4, metal: 0.4 }),
        )
      : Iu(`top-concrete`, () => Y(9407622, X.CONCRETE, { su: 6, sv: 6 }));
}
function Bu(e) {
  switch (e) {
    case `temple`:
      return Iu(`roof-temple`, () =>
        Y(13593148, X.ROOF_TILE, { su: 1.6, sv: 1.6, rough: 0.55, flood: 0.8 }),
      );
    case `hip`:
      return Iu(`roof-hip`, () =>
        Y(7235682, X.ROOF_TILE, { su: 1.6, sv: 1.6, rough: 0.7 }),
      );
    default:
      return Iu(`roof-gable`, () =>
        Y(10115909, X.ROOF_TILE, { su: 1.6, sv: 1.6, rough: 0.7 }),
      );
  }
}
var Vu = () =>
    Iu(`ridge-temple`, () => Y(12072234, X.PLAIN, { rough: 0.45, flood: 0.8 })),
  Hu = () => Iu(`fascia`, () => Y(3812904, X.PLAIN, { rough: 0.7 })),
  Uu = () =>
    Iu(`soffit`, () => Y(5982784, X.WOOD, { su: 2, sv: 2, rough: 0.8 })),
  Wu = () =>
    Iu(`plinth`, () => Y(9341572, X.GRANITE, { su: 2, sv: 2, rough: 0.6 }));
function Gu(e, t, n, r, i) {
  let a = n[0] - t[0],
    o = n[1] - t[1],
    s = n[2] - t[2],
    c = r[0] - t[0],
    l = r[1] - t[1],
    u = r[2] - t[2],
    d = o * u - s * l,
    f = s * c - a * u,
    p = a * l - o * c,
    m = Math.hypot(d, f, p) || 1;
  ((d /= m), (f /= m), (p /= m));
  let h = Math.abs(d) > Math.abs(p),
    g = (e) => (h ? e[2] : e[0]) / i.su,
    _ = e.vert(t[0], t[1], t[2], d, f, p, g(t), t[1] / i.sv, i);
  (e.vert(n[0], n[1], n[2], d, f, p, g(n), n[1] / i.sv, i),
    e.vert(r[0], r[1], r[2], d, f, p, g(r), r[1] / i.sv, i),
    e.tri(_, _ + 1, _ + 2));
}
function Ku(e, t, n, r) {
  (e.quad(
    [t.hx, t.y, -t.hz],
    [-t.hx, t.y, -t.hz],
    [-n.hx, n.y, -n.hz],
    [n.hx, n.y, -n.hz],
    0,
    0,
    r,
  ),
    e.quad(
      [-t.hx, t.y, t.hz],
      [t.hx, t.y, t.hz],
      [n.hx, n.y, n.hz],
      [-n.hx, n.y, n.hz],
      0,
      0,
      r,
    ),
    e.quad(
      [t.hx, t.y, t.hz],
      [t.hx, t.y, -t.hz],
      [n.hx, n.y, -n.hz],
      [n.hx, n.y, n.hz],
      0,
      0,
      r,
    ),
    e.quad(
      [-t.hx, t.y, -t.hz],
      [-t.hx, t.y, t.hz],
      [-n.hx, n.y, n.hz],
      [-n.hx, n.y, -n.hz],
      0,
      0,
      r,
    ));
}
function qu(e, t, n) {
  let r = t.y - n,
    i = t.y;
  e.quad(
    [-t.hx, i, -t.hz],
    [t.hx, i, -t.hz],
    [t.hx, i, t.hz],
    [-t.hx, i, t.hz],
    0,
    0,
    Uu(),
  );
  let a = Hu();
  (e.quad(
    [t.hx, r, -t.hz],
    [-t.hx, r, -t.hz],
    [-t.hx, i, -t.hz],
    [t.hx, i, -t.hz],
    0,
    0,
    a,
  ),
    e.quad(
      [-t.hx, r, t.hz],
      [t.hx, r, t.hz],
      [t.hx, i, t.hz],
      [-t.hx, i, t.hz],
      0,
      0,
      a,
    ),
    e.quad(
      [t.hx, r, t.hz],
      [t.hx, r, -t.hz],
      [t.hx, i, -t.hz],
      [t.hx, i, t.hz],
      0,
      0,
      a,
    ),
    e.quad(
      [-t.hx, r, -t.hz],
      [-t.hx, r, t.hz],
      [-t.hx, i, t.hz],
      [-t.hx, i, -t.hz],
      0,
      0,
      a,
    ));
}
function Ju(e) {
  return !e.roof || e.roof === `flat`
    ? 0
    : e.roofH === void 0
      ? Math.min(6, Math.max(1.2, Math.min(e.w, e.d) * 0.35))
      : Math.max(0, e.roofH);
}
function Yu(e) {
  return (e.y ?? 0) + e.h + (e.roof && e.roof !== `flat` ? Ju(e) : 0);
}
function Xu(e, t) {
  let { nx: n, nz: r, d0: i, half: a } = t;
  if (!(a > 0)) return null;
  let o = e.rot ?? 0,
    s = Math.cos(o),
    c = Math.sin(o),
    l = Math.abs(s * n - c * r),
    u = Math.abs(c * n + s * r),
    d = Math.max(0, e.w / 2),
    f = Math.max(0, e.d / 2),
    p = d * l + f * u,
    m = e.x * n + e.z * r + i;
  if (Math.abs(m) + p <= a + 1e-4) return null;
  let h = { ...e },
    g = Math.sign(m) * Math.max(0, Math.min(Math.abs(m), a - Math.min(p, a)));
  g !== m && ((h.x = e.x + (g - m) * n), (h.z = e.z + (g - m) * r), (m = g));
  let _ = Math.max(0, a - Math.abs(m));
  if (p > _ + 1e-4) {
    if (u <= 0.001)
      h.w = Math.min(e.w, Math.max(0.2, (2 * _) / Math.max(l, 0.001)));
    else if (l <= 0.001) h.d = Math.min(e.d, Math.max(0.2, (2 * _) / u));
    else {
      let t = Math.max(0.02, _ / p);
      ((h.w = Math.min(e.w, Math.max(0.2, e.w * t))),
        (h.d = Math.min(e.d, Math.max(0.2, e.d * t))));
    }
  }
  return h;
}
function Zu(e, t, n, r) {
  r.length = 0;
  let i = Math.cos(t.facing),
    a = Math.sin(t.facing),
    o = (e, t) => [e * i + t * a, -e * a + t * i];
  if (n.placement?.mode === `undercroft` && t.frontage) {
    let n = e.plan?.roads?.find((e) => e.index === t.frontage.roadIndex);
    if (n) {
      let e = Bi(n, ha) / 2,
        i = t.warnings.some((e) => e.includes(`undercroft-fallback`));
      if (e > 0 && !i) {
        let [i, a] = n.axis === `x` ? o(0, 1) : o(1, 0),
          s = n.axis === `x` ? t.z - n.at : t.x - n.at;
        r.push({
          nx: i,
          nz: a,
          d0: s,
          half: e,
          why: `the free median under road#${n.index}`,
        });
      }
    }
  }
  let s = 1 / 0,
    c = -1 / 0,
    l = 1 / 0,
    u = -1 / 0;
  for (let e of t.claims)
    (e.minX < s && (s = e.minX),
      e.maxX > c && (c = e.maxX),
      e.minZ < l && (l = e.minZ),
      e.maxZ > u && (u = e.maxZ));
  if (s > c) return;
  let [d, f] = o(1, 0);
  r.push({
    nx: d,
    nz: f,
    d0: t.x - (s + c) / 2,
    half: (c - s) / 2 + 0.6,
    why: `the site claim rect (X)`,
  });
  let [p, m] = o(0, 1);
  r.push({
    nx: p,
    nz: m,
    d0: t.z - (l + u) / 2,
    half: (u - l) / 2 + 0.6,
    why: `the site claim rect (Z)`,
  });
}
function Qu(e, t, n = {}) {
  let r = n.inset ?? 0,
    i = n.low ?? 0,
    a = n.detail === `mid`,
    o = Math.max(0.1, t.w / 2 - r),
    s = Math.max(0.1, t.d / 2 - r),
    c = n.plain ? `flat` : (t.roof ?? `flat`),
    l = Math.max(0.2, t.h + (n.plain ? Ju(t) * 0.65 : 0)),
    u = t.y ?? 0,
    d = Ru(t.mat, t.color, l);
  if (
    (e.push(),
    e.translate(t.x, u, t.z),
    t.rot && e.rotateY(t.rot),
    e.setPaint(d),
    c === `flat`)
  ) {
    let n = l - i,
      r = o,
      c = s;
    if (
      (e.box(-r, 0, -c, r, n, c, 55, zu(t.mat, t.color), -u),
      a && t.mat !== `green` && n > 3)
    ) {
      let t = 0.25,
        i = n + 0.7;
      (e.box(-r, n, -c, r, i, -c + t, 55, void 0, -u),
        e.box(-r, n, c - t, r, i, c, 55, void 0, -u),
        e.box(-r, n, -c + t, -r + t, i, c - t, 55, void 0, -u),
        e.box(r - t, n, -c + t, r, i, c - t, 55, void 0, -u));
    }
  } else {
    let n = Ju(t),
      a = l;
    e.box(-o, 0, -s, o, a, s, 51, void 0, -u);
    let f = Bu(c),
      p = o,
      m = s;
    if (
      (e.push(),
      s > o && (e.rotateY(Math.PI / 2), (p = s), (m = o)),
      c === `gable`)
    ) {
      let t = 0.4 + r,
        o = a + n - i,
        s = -p - t,
        c = p + t,
        l = -m - t,
        u = m + t;
      (e.quad([c, a, l], [s, a, l], [s, o, 0], [c, o, 0], 0, 0, f),
        e.quad([s, a, u], [c, a, u], [c, o, 0], [s, o, 0], 0, 0, f),
        Gu(e, [p, a, m], [p, a, -m], [p, o, 0], d),
        Gu(e, [-p, a, -m], [-p, a, m], [-p, o, 0], d),
        e.quad([s, a, l], [c, a, l], [c, a, u], [s, a, u], 0, 0, Uu()));
    } else if (c === `hip`) {
      let t = 0.6 + r,
        o = { hx: p + t, hz: m + t, y: a };
      (Ku(e, o, { hx: Math.max(0, o.hx - o.hz), hz: 0, y: a + n - i }, f),
        qu(e, o, 0.22));
    } else {
      let t = 1 + r,
        o = { hx: p + t, hz: m + t, y: a },
        s = { hx: o.hx - o.hz * 0.3, hz: o.hz * 0.68, y: a + n * 0.24 },
        c = a + n - i,
        l = Math.max(0.5, o.hx - o.hz * 0.95),
        u = { hx: l, hz: 0, y: c };
      (Ku(e, o, s, f), Ku(e, s, u, f), qu(e, o, 0.3));
      let h = Math.max(0.3, Math.min(0.5, n * 0.1)),
        g = Math.max(0.4, Math.min(0.9, n * 0.16));
      (e.setPaint(Vu()), e.box(-l, c - 0.15, -h / 2, l, c + g, h / 2));
      for (let t of [-1, 1]) {
        (e.push(), e.translate(t * l, c + g * 0.5, 0), e.rotateZ(t * 0.45));
        let r = Math.max(0.8, Math.min(2.2, n * 0.35));
        (e.box(t > 0 ? 0 : -r, -g * 0.5, -h / 2, t > 0 ? r : 0, g * 0.5, h / 2),
          e.pop());
      }
      e.setPaint(d);
    }
    (e.pop(), e.setPaint(d));
  }
  if (a && t.mat !== `green` && t.mat !== `glass` && l > 2.5) {
    let t = 0.06;
    (e.setPaint(Wu()),
      e.box(
        -o - t,
        0,
        -s - t,
        o + t,
        Math.min(0.9, l * 0.25),
        s + t,
        55,
        void 0,
        -u,
      ));
  }
  e.pop();
}
function $u(e, t, n = `mid`) {
  for (let r of t)
    Qu(e, r, {
      inset: n === `far` ? Au : 0,
      low: n === `far` ? ju : 0,
      detail: n,
    });
}
var ed = {
  wall: () =>
    Iu(`gap-wall`, () =>
      Y(13222322, X.CONCRETE, { su: 3, sv: 3, rough: 0.85 }),
    ),
  coping: () =>
    Iu(`gap-coping`, () => Y(9275520, X.GRANITE, { su: 2, sv: 2, rough: 0.6 })),
  planter: () =>
    Iu(`gap-planter`, () =>
      Y(10721932, X.SMALL_TILE, { su: 1.5, sv: 1.5, rough: 0.6 }),
    ),
  soil: () =>
    Iu(`gap-soil`, () => Y(4864556, X.GRAVEL, { su: 2, sv: 2, rough: 1 })),
  shrub: () =>
    Iu(`gap-shrub`, () => Y(5208634, X.LEAVES, { su: 2, sv: 2, rough: 0.95 })),
  shrub2: () =>
    Iu(`gap-shrub2`, () => Y(6983493, X.LEAVES, { su: 2, sv: 2, rough: 0.95 })),
  tin: () =>
    Iu(`gap-tin`, () =>
      Y(12041404, X.CORRUGATED, { su: 1.2, sv: 1.2, rough: 0.5, metal: 0.4 }),
    ),
  tinRoof: () =>
    Iu(`gap-tinroof`, () =>
      Y(6262696, X.CORRUGATED, { su: 1.2, sv: 1.2, rough: 0.5, metal: 0.4 }),
    ),
  party: () =>
    Iu(`gap-party`, () =>
      Y(11774618, X.CONCRETE, { su: 4, sv: 4, rough: 0.9 }),
    ),
};
function td(e, t) {
  let { x0: n, z0: r, x1: i, z1: a, y0: o, y1: s } = t,
    c = i - n,
    l = a - r;
  switch (t.kind) {
    case `lowwall`:
      (e.setPaint(ed.wall()),
        e.box(n, o, r, i, s - 0.08, a, 55, void 0, o),
        e.setPaint(ed.coping()),
        e.box(n - 0.04, s - 0.08, r - 0.04, i + 0.04, s, a + 0.04, 63));
      break;
    case `planter`: {
      (e.setPaint(ed.planter()), e.box(n, o, r, i, s, a, 51, void 0, o));
      let u = Math.min(0.12, c * 0.2, l * 0.2);
      (e.setPaint(ed.soil()),
        e.box(n + u, o, r + u, i - u, s - 0.06, a - u, 4),
        e.setPaint(ed.planter()),
        e.box(n, s - 0.001, r, i, s, r + u, 4),
        e.box(n, s - 0.001, a - u, i, s, a, 4),
        e.box(n, s - 0.001, r + u, n + u, s, a - u, 4),
        e.box(i - u, s - 0.001, r + u, i, s, a - u, 4));
      let d = c >= l,
        f = d ? c : l,
        p = d ? l : c,
        m = Math.max(0.35, Math.min(0.8, p * 0.5)),
        h = Math.max(0.1, p - 2 * u - 0.08),
        g = Math.max(0.1, f - 2 * u - 0.08),
        _ = (t, o, c, l, u, f) => {
          (e.setPaint(f),
            d
              ? e.box(
                  n + t,
                  s - 0.06,
                  (r + a) / 2 - l,
                  n + o,
                  u,
                  (r + a) / 2 - c,
                  55,
                )
              : e.box(
                  (n + i) / 2 - l,
                  s - 0.06,
                  r + t,
                  (n + i) / 2 - c,
                  u,
                  r + o,
                  55,
                ));
        },
        v = (f - g) / 2;
      _(v, v + g, -h / 2, h / 2, s + m, ed.shrub());
      let y = Math.max(1, Math.min(3, Math.floor(g / 2.5)));
      for (let e = 0; e < y; e++) {
        let n = (e + 0.5) / y,
          r = Math.min(g / y, 1.6) * 0.8,
          i = h * 0.8,
          a = v + n * g,
          o = 0.15 + 0.2 * (((t.v * 97 + e * 37) % 10) / 10);
        _(a - r / 2, a + r / 2, -i / 2, i / 2, s + m + o, ed.shrub2());
      }
      break;
    }
    case `shed`: {
      let t = s - o;
      (e.setPaint(ed.tin()), e.box(n, o, r, i, s - 0.25, a, 51, void 0, o));
      let u = 0.25,
        d = Math.min(0.6, 0.08 * Math.max(c, l)),
        f = ed.tinRoof(),
        p = s - 0.25,
        m = s - 0.25 + d,
        h = ed.tin();
      if (
        (c >= l
          ? (e.quad(
              [i + u, p, a + u],
              [n - u, p, a + u],
              [n - u, m, r - u],
              [i + u, m, r - u],
              0,
              0,
              h,
            ),
            e.quad(
              [n - u, p, a + u],
              [i + u, p, a + u],
              [i + u, m, r - u],
              [n - u, m, r - u],
              0,
              0,
              f,
            ),
            Gu(e, [i, p, a], [i, p, r], [i, m, r], h),
            Gu(e, [n, p, r], [n, p, a], [n, m, r], h),
            e.quad([i, p, r], [n, p, r], [n, m, r], [i, m, r], 0, 0, h))
          : (e.quad(
              [i + u, p, r - u],
              [i + u, p, a + u],
              [n - u, m, a + u],
              [n - u, m, r - u],
              0,
              0,
              h,
            ),
            e.quad(
              [i + u, p, a + u],
              [i + u, p, r - u],
              [n - u, m, r - u],
              [n - u, m, a + u],
              0,
              0,
              f,
            ),
            Gu(e, [i, p, r], [n, p, r], [n, m, r], h),
            Gu(e, [n, p, a], [i, p, a], [n, m, a], h),
            e.quad([n, p, r], [n, p, a], [n, m, a], [n, m, r], 0, 0, h)),
        t > 4.5)
      ) {
        e.setPaint(
          Iu(`gap-win`, () =>
            Y(2961974, X.LIT, {
              rough: 0.3,
              metal: 0.3,
              er: 1,
              eg: 0.8,
              eb: 0.55,
              ei: 0.8,
              flags: Qe.WINDOWS,
              ex: 0.35,
            }),
          ),
        );
        let t = o + 2.4,
          c = Math.min(s - 0.8, t + 1.1);
        c > t + 0.4 &&
          (e.box(n + 0.6, t, r - 0.04, i - 0.6, c, r, 32),
          e.box(n + 0.6, t, a, i - 0.6, c, a + 0.04, 16));
      }
      break;
    }
    case `party`:
      (e.setPaint(ed.party()), e.box(n, o, r, i, s, a, 55, void 0, o));
  }
}
function nd(e, t) {
  let { x0: n, z0: r, x1: i, z1: a, y0: o, y1: s } = t;
  (e.setPaint(
    t.kind === `shed` ? ed.tin() : t.kind === `party` ? ed.party() : ed.wall(),
  ),
    e.box(n, o, r, i, s, a, 55, void 0, o));
}
function rd() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function id(e, t) {
  let n = new Map();
  for (let t of e) {
    let e = `${Math.floor(t.x / 640)},${Math.floor(t.z / 640)}`,
      r = n.get(e);
    (r ||
      n.set(
        e,
        (r = {
          cx: 0,
          cz: 0,
          sites: [],
          gaps: [],
          mesh: null,
          orig: null,
          hiddenCount: 0,
          far: null,
          maxH: 0,
        }),
      ),
      r.sites.push(t));
  }
  let r = [...n.values()];
  for (let e of r)
    ((e.cx = e.sites.reduce((e, t) => e + t.x, 0) / e.sites.length),
      (e.cz = e.sites.reduce((e, t) => e + t.z, 0) / e.sites.length));
  for (; r.length > ku;) {
    let e = 0,
      t = 1,
      n = 1 / 0;
    for (let i = 0; i < r.length; i++)
      for (let a = i + 1; a < r.length; a++) {
        let o = Math.hypot(r[i].cx - r[a].cx, r[i].cz - r[a].cz);
        o < n && ((n = o), (e = i), (t = a));
      }
    let i = r[e],
      a = r[t],
      o = i.sites.length,
      s = a.sites.length;
    ((i.cx = (i.cx * o + a.cx * s) / (o + s)),
      (i.cz = (i.cz * o + a.cz * s) / (o + s)),
      i.sites.push(...a.sites),
      r.splice(t, 1));
  }
  let i = new Map();
  for (let e of r) for (let t of e.sites) i.set(t.id, e);
  for (let e of t) i.get(e.site)?.gaps.push(e);
  return (r.sort((e, t) => e.cz - t.cz || e.cx - t.cx), r);
}
function ad(e) {
  let t = 0;
  for (let n of e) {
    let e = 1 / 0,
      r = -1 / 0,
      i = 1 / 0,
      a = -1 / 0;
    for (let t of n.sites)
      (t.x < e && (e = t.x),
        t.x > r && (r = t.x),
        t.z < i && (i = t.z),
        t.z > a && (a = t.z));
    if (e > r) continue;
    let o = Math.hypot(r - e, a - i);
    o > t && (t = o);
  }
  return Math.round(t);
}
function od(e, t, n, r, i) {
  let a = new Map();
  for (let e of n) a.set(e.id, e);
  let o = t.filter((e) => e.ok && (a.get(e.id)?.proxy?.length ?? 0) > 0),
    s = new Map(),
    c = id(o, i?.items ?? []);
  c.forEach((e, t) => {
    for (let n of e.sites)
      s.set(n.id, {
        id: n.id,
        cell: t,
        start: 0,
        count: 0,
        hidden: !1,
        range: { start: 0, count: 0 },
      });
  });
  let l = new g();
  ((l.name = `sites-far`),
    (l.userData.hlodIgnore = !0),
    (l.userData.sites = `far`),
    (l.userData.owner = `sites`),
    (l.matrixAutoUpdate = !1));
  let u = e.quality?.mobile || e.quality?.level === `low` ? Mu.low : Mu.high,
    d = [],
    f = {
      sites: o.length,
      cells: c.length,
      tris: 0,
      gapItems: i?.items.length ?? 0,
      buildMs: 0,
      sliceMaxMs: 0,
      waitingForMaterial: !1,
      extFallback: !1,
      meshes: 0,
      hidden: 0,
      spanM: ad(c),
      triCap: u,
      degraded: 0,
      skipped: 0,
    };
  c.length > ku &&
    console.warn(
      `[test] sites proxy: ${c.length} cells > ${ku} — the far layer would cost one draw call each`,
    );
  let p = !1,
    m = !1,
    h = null,
    _ = null;
  try {
    let t = e.statics;
    if (t && i && i.items.length) {
      let e = Oc(t, `sites:gaps`);
      for (let t of i.items)
        e.addBox(t.x0, t.z0, t.x1, t.z1, t.y0 - 0.2, t.y1, `site`);
      _ = e;
    }
  } catch (e) {
    console.warn(`[init] sites gap colliders failed`, e);
  }
  function v(e) {
    e.mesh &&
      (e.mesh.visible =
        !f.waitingForMaterial &&
        (e.hiddenCount < e.sites.length || e.gaps.length > 0));
  }
  function y(e, t) {
    let n = e.mesh,
      r = e.orig;
    if (!n || !r || t.count <= 0) return;
    let i = n.geometry.index,
      a = i.array,
      o = t.start + t.count;
    if (t.hidden) a.fill(0, t.start, o);
    else for (let e = t.start; e < o; e++) a[e] = r[e];
    ((t.range.start = t.start), (t.range.count = t.count));
    let s = i.updateRanges;
    (s.indexOf(t.range) < 0 && s.push(t.range), (i.needsUpdate = !0));
  }
  function b() {
    if (f.extFallback || r.city) return !0;
    r.lmFallback && Hc(e, r);
    let t = !r.lmFallback;
    if (((f.waitingForMaterial = !t), t)) for (let e of d) e.material = r.lm;
    for (let e of c) v(e);
    return t;
  }
  function x() {
    if (!(f.extFallback || p)) {
      ((f.extFallback = !0), (f.waitingForMaterial = !1));
      for (let e of d)
        (xu(e.geometry, r.atlas.white),
          (e.material = r.ext),
          (e.receiveShadow = !1));
      for (let e of c) (e.far instanceof M && (e.far.material = r.ext), v(e));
      console.warn(
        `[test] sites proxy: landmark material never appeared — far layer falls back to the sites-ext material (flat shading, no fog match) so the massing stays on screen; expose LandmarksAPI.shared = {main, foliage}`,
      );
    }
  }
  function S(e) {
    if (p || e <= 0) {
      p || x();
      return;
    }
    h = setTimeout(() => {
      ((h = null), !p && (b() || S(e - 1)));
    }, 1e3);
  }
  let C = [];
  async function w() {
    let t = rd(),
      n = rd(),
      i = 0,
      h = 0,
      g = u * 0.45,
      _ = async () => {
        let t = rd() - n;
        (t > f.sliceMaxMs && (f.sliceMaxMs = t),
          t > Pu &&
            typeof e?.yieldFrame == `function` &&
            ((f.buildMs += t), await e.yieldFrame(), (n = rd())));
      };
    for (let t = 0; t < c.length; t++) {
      if (p) return;
      let o = c[t],
        m = new rt(2048);
      m.coarse = !0;
      for (let t of o.sites) {
        let n = a.get(t.id),
          r = s.get(t.id);
        ((r.start = m.icount), m.place(t.x, t.y, t.z, t.facing));
        let c = n.lot.w > 0 ? t.w / n.lot.w : 1,
          l = n.lot.d > 0 ? t.d / n.lot.d : 1,
          d = c < 0.999 || l < 0.999;
        Zu(e, t, n, C);
        let h = !1,
          g = 0;
        for (let e of n.proxy.slice(0, 8)) {
          let n = i >= u * 0.97;
          if (n && g > 0) {
            f.skipped++;
            continue;
          }
          let r = e;
          if (d) {
            let t = Math.min(c, l),
              n = e.rot ? t : c,
              i = e.rot ? t : l;
            r = { ...e, x: e.x * c, z: e.z * l, w: e.w * n, d: e.d * i };
          }
          for (let e = 0; e < C.length; e++) {
            let n = Xu(r, C[e]);
            n &&
              ((r = n),
              h ||
                ((h = !0),
                console.warn(
                  `[test] sites proxy: ${t.id} far massing trimmed to ${C[e].why} — the authored box reached outside it`,
                )));
          }
          let a = n || i >= u * Nu,
            s = m.icount;
          (Qu(m, r, { inset: Au, low: ju, detail: `far`, plain: a }),
            (i += (m.icount - s) / 3),
            g++,
            a && (r.roof ?? `flat`) !== `flat` && f.degraded++);
          let v = Yu(r);
          if ((v > o.maxH && (o.maxH = v), await _(), p)) return;
        }
        if ((m.reset(), (r.count = m.icount - r.start), await _(), p)) return;
      }
      if (o.gaps.length) {
        ((m.coarse = !1), m.reset());
        for (let e of o.gaps) {
          if (i + h >= u) {
            f.skipped++;
            continue;
          }
          let t = m.icount;
          (h >= g ? (nd(m, e), f.degraded++) : td(m, e),
            (h += (m.icount - t) / 3));
        }
        if (((m.coarse = !0), await _(), p)) return;
      }
      if (m.icount === 0) continue;
      if (typeof e?.yieldFrame == `function`) {
        if (((f.buildMs += rd() - n), await e.yieldFrame(), p)) return;
        n = rd();
      }
      let b = m.build();
      b.name = `sites-far-${t}`;
      let x = (r.cityLook && r.city) || null;
      (!x && !f.extFallback && r.lmFallback && Hc(e, r),
        !x &&
          !f.extFallback &&
          r.lmFallback &&
          ((f.extFallback = !0), (f.waitingForMaterial = !1)),
        x
          ? r.cityLook.convert(b, r.atlas.white)
          : f.extFallback && xu(b, r.atlas.white));
      let S = x
        ? new M(b, x)
        : f.extFallback
          ? new M(b, r.ext)
          : Fc(b, r.lm, `sites-far-${t}`);
      ((b = S.geometry),
        (S.name = `sites-far-${t}`),
        (S.renderOrder = 1),
        (S.castShadow = !1),
        (S.receiveShadow = !!x || !f.extFallback),
        (S.frustumCulled = !0),
        (S.matrixAutoUpdate = !1),
        S.updateMatrix(),
        (S.userData.sites = `far`),
        f.extFallback || x
          ? ((S.userData.keepCpu = !0), (b.userData.keepCpu = !0))
          : We(S),
        (S.userData.hlodIgnore = !0),
        (o.mesh = S),
        (o.orig = b.index.array.slice()),
        (f.tris += m.icount / 3),
        d.push(S),
        l.add(S));
      for (let e of o.sites) {
        let t = s.get(e.id);
        t.hidden && (o.hiddenCount++, y(o, t));
      }
      (v(o), await _());
    }
    if (
      ((f.buildMs += rd() - n),
      (f.buildMs = Math.round(f.buildMs * 100) / 100),
      p)
    )
      return;
    m = !0;
    try {
      (e.scene?.add(l), l.updateMatrixWorld(!0));
    } catch {}
    (b() || S(60), (f.meshes = d.length));
    let x = Math.round(rd() - t),
      w = Math.round(f.tris);
    (o.length &&
      console.info(
        `[init] sites proxy ${o.length} sites · ${d.length} meshes · ${w}/${u} tris · ${f.buildMs} ms cpu (${x} ms wall) · ${f.gapItems} gap fillers · span ${f.spanM} m` +
          (f.degraded || f.skipped
            ? ` · budget: ${f.degraded} flattened, ${f.skipped} dropped`
            : ``),
      ),
      d.length > ku &&
        console.warn(
          `[test] sites proxy over budget: ${d.length} draw calls > ${ku}`,
        ),
      w > u && console.warn(`[test] sites proxy over budget: ${w} tris > ${u}`),
      f.sliceMaxMs > 2.5 &&
        console.warn(
          `[test] sites proxy slice ${f.sliceMaxMs.toFixed(1)} ms > 2.5 ms (one site's massing is too heavy)`,
        ));
  }
  return {
    ready: o.length
      ? w().catch((e) => console.warn(`[test] sites proxy build failed`, e))
      : Promise.resolve(),
    root: l,
    meshes: d,
    stats: f,
    get gapColliders() {
      return _?.colliderCount ?? 0;
    },
    has(e) {
      return s.has(e);
    },
    isHidden(e) {
      return s.get(e)?.hidden ?? !1;
    },
    range(e) {
      let t = s.get(e);
      return t && m ? [t.start, t.count] : null;
    },
    setHidden(e, t) {
      let n = s.get(e);
      if (!n || n.hidden === t || p) return;
      ((n.hidden = t), (f.hidden += t ? 1 : -1));
      let r = c[n.cell];
      r.mesh && ((r.hiddenCount += t ? 1 : -1), y(r, n), v(r));
    },
    dispose() {
      if (!p) {
        ((p = !0), h && clearTimeout(h), (h = null), l.removeFromParent());
        for (let t of c) {
          if (t.far) {
            try {
              e.env?.removeFar?.(t.far);
            } catch {}
            (t.far.removeFromParent(), (t.far = null));
          }
          ((t.mesh &&=
            (Rc(t.mesh) ? t.mesh.dispose() : t.mesh.geometry.dispose(),
            t.mesh.removeFromParent(),
            null)),
            (t.orig = null));
        }
        d.length = 0;
        try {
          _?.dispose();
        } catch {}
        ((_ = null), s.clear());
      }
    },
  };
}
var sd = Symbol(`sites-next-frame`),
  cd = {
    jobs: 0,
    steps: 0,
    cancelled: 0,
    failed: 0,
    stepMaxMs: 0,
    stepMaxLabel: ``,
    slices: 0,
    long: [],
    concurrentOpenFrames: 0,
    openMaxJobs: 0,
    tokenWaits: 0,
    frameMaxMs: 0,
    framesOver4: 0,
    framesOver8: 0,
    msTotal: 0,
    msFast: 0,
  },
  ld = 4,
  ud = { v: `` },
  dd =
    typeof location < `u` && /[?&]sitefast=0/.test(location.search) ? 2.5 : 1,
  fd = !1;
function pd(e) {
  fd = e;
}
var md = !1;
function hd(e) {
  md = e;
}
var gd = -1,
  _d = 0;
function vd(e) {
  return !md && e.budgetMs <= 6;
}
function yd(e) {
  return vd(e) ? e.frameNo === gd && _d >= (fd ? dd : 2.5) : !1;
}
var bd = 0,
  xd = null,
  Sd = !1;
function Cd(e) {
  if (e.frameNo !== gd) {
    if (Sd) {
      let e = cd;
      (_d > e.frameMaxMs && (e.frameMaxMs = Math.round(_d * 100) / 100),
        _d > 4 && e.framesOver4++,
        _d > 8 && e.framesOver8++);
    }
    ((gd = e.frameNo), (_d = 0), (bd = 0), (xd = null), (Sd = vd(e)));
  }
}
function wd(e, t, n, r) {
  e &&
    (Cd(e),
    (_d += t),
    (cd.msTotal += t),
    fd && (cd.msFast += t),
    !(r || n === xd) &&
      ((xd = n),
      vd(e) &&
        (++bd === 2 && cd.concurrentOpenFrames++,
        bd > cd.openMaxJobs && (cd.openMaxJobs = bd))));
}
var Td = null;
function Ed(e, t) {
  return !vd(e) || Td === null || Td === t;
}
function Dd(e, t, n) {
  if (t < ld) return;
  let r = cd.long;
  (r.length >= 48 && r.shift(),
    r.push([Math.round(n), Math.round(t * 10) / 10, e]));
}
var Od = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  kd = new Set(),
  Ad = class {
    label;
    it;
    work;
    state = `queued`;
    steps = 0;
    cancelled = !1;
    done;
    constructor(e, t, n) {
      ((this.label = e),
        (this.it = t),
        (this.work = n),
        (this.done = this.drive()));
    }
    cancel() {
      this.state !== `done` &&
        this.state !== `failed` &&
        this.state !== `cancelled` &&
        ((this.cancelled = !0), Td === this && (Td = null));
    }
    close() {
      try {
        this.it.return?.(void 0);
      } catch {}
    }
    async drive() {
      (cd.jobs++, kd.add(this));
      try {
        let e = this.work;
        for (
          e ? await e.nextFrame() : await Promise.resolve(),
            cd.slices++,
            this.state = `running`;
          ;
        ) {
          if (this.cancelled)
            return (
              this.close(),
              (this.state = `cancelled`),
              cd.cancelled++,
              `cancelled`
            );
          if (e && yd(e)) {
            (await e.nextFrame(), cd.slices++);
            continue;
          }
          if (e && !Ed(e, this)) {
            (cd.tokenWaits++, await e.nextFrame(), cd.slices++);
            continue;
          }
          (e && vd(e) && (Td = this), (ud.v = ``));
          let t = Od(),
            n = this.it.next(),
            r = Od() - t;
          if (
            (wd(e, r, this, n.value === sd),
            this.steps++,
            cd.steps++,
            r > cd.stepMaxMs &&
              ((cd.stepMaxMs = Math.round(r * 100) / 100),
              (cd.stepMaxLabel = this.label)),
            r >= ld &&
              Dd(
                `step ${this.label}${ud.v ? `/` + ud.v : ``}#${this.steps}`,
                r,
                t,
              ),
            n.done)
          )
            return ((this.state = `done`), `done`);
          n.value === sd
            ? (Td === this && (Td = null),
              e ? await e.nextFrame() : await Promise.resolve(),
              cd.slices++)
            : e && e.remaining() <= 0 && (await e.nextFrame(), cd.slices++);
        }
      } catch (e) {
        throw ((this.state = `failed`), cd.failed++, e);
      } finally {
        (Td === this && (Td = null), kd.delete(this));
      }
    }
  };
function jd(e, t, n) {
  return new Ad(t, n, e ?? null);
}
function Md(e) {
  let t = 0;
  for (let n of kd) n.label.startsWith(e) && (n.cancel(), t++);
  return t;
}
var Nd = 0,
  Pd = 1,
  Fd = 2,
  Id = 3,
  Ld = 4,
  Rd = [`none`, `loading`, `building`, `ready`, `failed`],
  zd = 0.25,
  Bd = 256,
  Vd = 2,
  Hd = 45,
  Ud = 1,
  Wd = 8,
  Gd = 1500,
  Kd = 1,
  qd = 3,
  Jd = 3,
  Yd = 2,
  Xd = 12,
  Zd = [null],
  Qd = [],
  $d = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  ef = 8;
function tf(e) {
  return new Promise((t) => setTimeout(t, Math.max(0, e)));
}
function nf(e, t) {
  return new Promise((n) => {
    let r = !1,
      i = () => {
        r || ((r = !0), clearTimeout(a), n());
      },
      a = setTimeout(i, Math.max(0, t));
    Promise.all(e).then(i, i);
  });
}
var rf = class {
    s;
    tier;
    state = Nd;
    gen = 0;
    job = null;
    handle = null;
    col = null;
    scope = null;
    visible = !1;
    cached = !1;
    hiddenAt = 0;
    buildMs = 0;
    bytes = 0;
    builds = 0;
    artGen = -1;
    builtState = 0;
    lives = [];
    peds = [];
    spots = [];
    spotOff = [];
    indoorOff = null;
    label;
    constructor(e, t) {
      ((this.s = e), (this.tier = t), (this.label = `sites:${e.meta.id}:${t}`));
    }
    get busy() {
      return this.state === Pd || this.state === Fd;
    }
  },
  af = class {
    meta;
    site;
    index;
    id;
    shown = `far`;
    mid;
    near;
    interior;
    d = 1 / 0;
    radii = { midB: 0, midD: 0, nearB: 0, nearD: 0, intB: 0, intD: 0 };
    cos;
    sin;
    mods = 0;
    modsPromise = null;
    scene = null;
    interiorMod = null;
    arts = [];
    paintState = 0;
    quarantined = !1;
    hasNear;
    hasInt;
    stamp = -1;
    active = !1;
    proxyHidden = !1;
    nearCalls = 0;
    constructor(e, t, n, r) {
      ((this.meta = e),
        (this.site = t),
        (this.index = n),
        (this.id = e.id),
        (this.mid = new rf(this, `mid`)),
        (this.near = new rf(this, `near`)),
        (this.interior = new rf(this, `interior`)),
        (this.cos = Math.cos(t.facing)),
        (this.sin = Math.sin(t.facing)),
        (this.hasNear = r.hasScene(e.id)),
        (this.hasInt = e.interior !== `none` && r.hasInterior(e.id)));
    }
    tierOf(e) {
      return e === `mid` ? this.mid : e === `near` ? this.near : this.interior;
    }
  };
function of(e, t, n) {
  let r = Math.max(e.minX - t, 0, t - e.maxX),
    i = Math.max(e.minZ - n, 0, n - e.maxZ);
  return Math.sqrt(r * r + i * i);
}
function* sf(e) {
  $u(e.lm, e.meta.proxy, `mid`);
}
var cf = class {
  env;
  recs = [];
  byId = new Map();
  atlasPainter = null;
  glass = null;
  nearCache;
  midCache;
  nearCap;
  nearCapMax;
  nearTriCap;
  nearCallCap;
  clusterCallCap;
  nearAdmitD = 1 / 0;
  admitD = new Float64Array(Xd);
  admitC = new Float64Array(Xd);
  grid = new Map();
  active = [];
  activeNext = [];
  cand = [];
  candD = [];
  candN = 0;
  scanId = 0;
  timer = zd;
  dirty = !0;
  lastX = NaN;
  lastZ = NaN;
  boostUntil = -1 / 0;
  prepUntil = -1 / 0;
  prepX = 0;
  prepY = void 0;
  prepZ = 0;
  prepGen = 0;
  secX = NaN;
  secZ = NaN;
  fast = !1;
  speedX = 0;
  speedZ = 0;
  speedT = -1 / 0;
  buildMode;
  radiiLevel = ``;
  radiiMobile = !1;
  disposed = !1;
  tmp = { x: 0, y: 0, z: 0 };
  lastSliceMs = 0;
  tel = {
    builds: 0,
    rebuilds: 0,
    cancels: 0,
    preempts: 0,
    quarantines: 0,
    maxConcurrent: 0,
    evicts: 0,
    demotes: 0,
    demoted: 0,
    staleArt: 0,
  };
  scans = 0;
  scanMs = 0;
  constructor(e, t) {
    this.env = e;
    let n = e.ctx.params?.get(`sitesbuild`);
    this.buildMode = n === `0` ? 0 : n === `mid` ? 1 : 2;
    let r = mt.lru,
      i = e.mobile ? Ae() : 0,
      a = i >= 2 ? 2 : i >= 1 ? 3 : 1 / 0,
      o = i >= 2 ? 4 : i >= 1 ? 8 : 1 / 0;
    ((this.nearCap = Math.min(a, e.mobile ? r.nearMobile : r.nearDesktop)),
      (this.nearCapMax = Math.min(
        a,
        e.mobile ? r.nearMaxMobile : r.nearMaxDesktop,
      )),
      (this.nearTriCap =
        (e.mobile ? r.nearTrisMobile : r.nearTrisDesktop) * (i >= 1 ? 0.6 : 1)),
      (this.nearCallCap = e.mobile ? r.nearCallsMobile : r.nearCallsDesktop),
      (this.clusterCallCap = e.mobile
        ? pt.clusterNearCallsMobile
        : pt.clusterNearCalls),
      (this.nearCache = new zn(this.nearCapMax, (e) => this.evicted(e))),
      (this.midCache = new zn(
        Math.min(o, e.mobile ? r.midMobile : r.midDesktop),
        (e) => this.evicted(e),
      )));
    for (let n of t) {
      if (!n.site.ok) continue;
      let t = new af(n.meta, n.site, this.recs.length, e.catalog);
      (this.recs.push(t), this.byId.set(t.id, t));
    }
    (this.refreshRadii(!0),
      e.atlas.setStealer((e, t) =>
        this.stealSlot(this.byId.get(e) ?? null, t),
      ));
  }
  get(e) {
    return this.byId.get(e);
  }
  refreshRadii(e = !1) {
    let t = this.env.ctx.quality,
      n = t?.level ?? `high`,
      r = !!t?.mobile;
    if (!e && n === this.radiiLevel && r === this.radiiMobile) return;
    ((this.radiiLevel = n), (this.radiiMobile = r));
    let i =
        this.env.mobile || t?.mobile
          ? mt.mobile
          : (mt.quality[t?.level ?? `high`] ?? 1),
      a = this.env.mobile ? mt.interior.mobile : mt.interior.desktop;
    for (let e of this.recs) {
      let t = e.meta.hero ? mt.hero : 1,
        n = e.radii;
      ((n.midB = mt.mid.build * i * t),
        (n.midD = mt.mid.drop * i * t),
        (n.nearB = mt.near.build * i * t),
        (n.nearD = mt.near.drop * i * t),
        (n.intB = a.build * t),
        (n.intD = a.drop * t));
    }
    this.grid.clear();
    for (let e of this.recs) {
      let t = e.site.rect,
        n = e.radii.midD + 8,
        r = Math.floor((t.minX - n) / Bd),
        i = Math.floor((t.maxX + n) / Bd),
        a = Math.floor((t.minZ - n) / Bd),
        o = Math.floor((t.maxZ + n) / Bd);
      for (let t = r; t <= i; t++)
        for (let n = a; n <= o; n++) {
          let r = lf(t, n),
            i = this.grid.get(r);
          (i || this.grid.set(r, (i = [])), i.push(e));
        }
    }
  }
  update(e) {
    if (this.disposed || this.recs.length === 0) return;
    let t = $d();
    if (
      (hd(t < this.boostUntil || t < this.prepUntil),
      this.glass?.flush(),
      (this.timer += e),
      $d() < this.prepUntil)
    ) {
      if (this.timer < zd && !this.dirty) return;
      ((this.timer = 0),
        (this.dirty = !1),
        this.scan(this.prepX, this.prepY, this.prepZ, !1));
      return;
    }
    if (this.lastX === this.lastX) {
      let e = this.env.ctx.player?.position ?? this.env.ctx.camera?.position;
      if (e) {
        let t = e.x - this.lastX,
          n = e.z - this.lastZ;
        if (t * t + n * n > mt.teleport * mt.teleport) {
          ((this.timer = 0), (this.dirty = !1), this.scan(e.x, e.y, e.z, !0));
          return;
        }
      }
    }
    (this.timer < zd && !this.dirty) ||
      ((this.timer = 0), (this.dirty = !1), this.scan());
  }
  scan(e, t, n, r = !1) {
    if (this.disposed) return;
    let i = $d(),
      a = this.env.ctx,
      o,
      s,
      c;
    if (e !== void 0 && n !== void 0 && e === e && n === n)
      ((o = e),
        (s = n),
        (c =
          t !== void 0 && t === t
            ? t
            : ((a.player?.position ?? a.camera?.position)?.y ?? 0)));
    else {
      let e = a.player?.position ?? a.camera?.position;
      if (!e) return;
      ((o = e.x), (s = e.z), (c = e.y));
    }
    let l = `foot`;
    try {
      l = a.player?.mode ?? `foot`;
    } catch {}
    let u = l === `foot`;
    (this.refreshRadii(), this.computeNearAdmit(o, s));
    let d = a.player?.velocity,
      f = d ? Math.sqrt(d.x * d.x + d.z * d.z) : 0,
      p = a.player?.position;
    if (p) {
      let e = (i - this.speedT) / 1e3;
      if (e > 0.05 && e < 2) {
        let t = p.x - this.speedX,
          n = p.z - this.speedZ,
          r = Math.sqrt(t * t + n * n);
        r < mt.teleport && (f = Math.max(f, r / e));
      }
      ((this.speedX = p.x), (this.speedZ = p.z), (this.speedT = i));
    }
    ((this.fast = !u && f > Wd && !($d() < this.prepUntil)), pd(this.fast));
    let m = $d() < this.prepUntil,
      h = NaN,
      g = NaN;
    if (m) {
      let e = a.player?.position ?? a.camera?.position;
      (Math.abs(o - this.prepX) < 1 && Math.abs(s - this.prepZ) < 1
        ? e && ((h = e.x), (g = e.z))
        : ((h = this.prepX), (g = this.prepZ)),
        h === h && Math.abs(h - o) < 1 && Math.abs(g - s) < 1 && (h = g = NaN));
    }
    ((this.secX = h), (this.secZ = g));
    let _ = r && this.lastX !== this.lastX;
    if (!_ && (r || !m) && this.lastX === this.lastX) {
      let e = o - this.lastX,
        t = s - this.lastZ;
      _ = e * e + t * t > mt.teleport * mt.teleport;
    }
    if (_) {
      for (let e of this.recs)
        (this.cancel(e.mid), this.cancel(e.near), this.cancel(e.interior));
      try {
        this.env.onJump?.();
      } catch {}
      this.boostUntil = $d() + Ud * 1e3;
    }
    ((this.lastX = o), (this.lastZ = s));
    let v = ++this.scanId;
    this.candN = 0;
    let y = this.activeNext;
    y.length = 0;
    let b = this.grid.get(lf(Math.floor(o / Bd), Math.floor(s / Bd)));
    if (b)
      for (let e = 0; e < b.length; e++) this.visit(b[e], v, o, s, c, u, y);
    if (h === h) {
      let e = this.grid.get(lf(Math.floor(h / Bd), Math.floor(g / Bd)));
      if (e)
        for (let t = 0; t < e.length; t++) this.visit(e[t], v, o, s, c, u, y);
    }
    let x = this.active;
    for (let e = 0; e < x.length; e++) this.visit(x[e], v, o, s, c, u, y);
    ((this.activeNext = x),
      (this.active = y),
      this.startCandidates(),
      this.glass?.flush(),
      this.scans++,
      (this.scanMs = $d() - i),
      Dd(r ? `scan (jump)` : `scan`, this.scanMs, i));
  }
  async prepareAt(e, t, n, r = Gd) {
    if (this.disposed || this.recs.length === 0) return;
    let i = $d() + Math.max(0, r),
      a = ++this.prepGen;
    ((this.boostUntil = i),
      (this.prepX = e),
      (this.prepY = n),
      (this.prepZ = t),
      (this.prepUntil = i),
      this.scan(e, n, t, !0));
    try {
      for (let r = 0; r < 200; r++) {
        if (this.disposed || a !== this.prepGen) return;
        let r = i - $d();
        if (r <= 0) return;
        let o = [];
        for (let e of this.active)
          (e.near.job && o.push(e.near.job.done),
            e.mid.job && o.push(e.mid.job.done),
            e.interior.job && o.push(e.interior.job.done));
        if (o.length === 0) {
          let i = !1;
          for (let e of this.active)
            i ||= e.near.busy || e.mid.busy || e.interior.busy;
          if (!i) {
            this.scan(e, n, t, !1);
            for (let e of this.active)
              i ||= e.near.busy || e.mid.busy || e.interior.busy;
            if (!i) return;
          }
          if ((await tf(Math.min(r, ef)), this.disposed || a !== this.prepGen))
            return;
          this.scan(e, n, t, !1);
          continue;
        }
        if ((await nf(o, r), this.disposed || a !== this.prepGen)) return;
        this.scan(e, n, t, !1);
      }
    } finally {
      a === this.prepGen &&
        ((this.prepUntil = -1 / 0),
        (this.secX = this.secZ = NaN),
        (this.dirty = !0));
    }
  }
  visit(e, t, n, r, i, a, o) {
    if (e.stamp === t) return;
    ((e.stamp = t), this.evaluate(e, n, r, i, a));
    let s =
      e.shown !== `far` ||
      e.mid.visible ||
      e.near.visible ||
      e.interior.visible ||
      e.mid.busy ||
      e.near.busy ||
      e.interior.busy ||
      e.d < e.radii.midD;
    ((e.active = s), s && o.push(e));
  }
  evaluate(e, t, n, r, i) {
    let a = of(e.site.rect, t, n);
    this.secX === this.secX &&
      (a = Math.min(a, of(e.site.rect, this.secX, this.secZ)));
    let o = (e.d = a),
      s = e.radii,
      c = e.mid,
      l = e.near,
      u = e.interior;
    if (e.quarantined) {
      (e.shown !== `far` && this.showExt(e, null),
        u.visible && this.hide(u, !0));
      return;
    }
    if (e.scene?.state) {
      let t = this.stateOf(e);
      (t !== e.near.builtState && this.restate(e, e.near, o),
        t !== e.interior.builtState && this.restate(e, e.interior, o));
    }
    let d =
        this.buildMode === 2 &&
        e.hasNear &&
        l.state !== Ld &&
        this.admitNear(e, o) &&
        (!this.fast || l.state === Id || l.busy),
      f = `far`;
    if (
      (d && o < (l.visible || l.busy ? s.nearD : s.nearB)
        ? (f = `near`)
        : o < (c.visible || c.busy || l.visible ? s.midD : s.midB) &&
          (f = `mid`),
      f === `near`
        ? (c.busy && this.cancel(c),
          l.state === Id
            ? this.showExt(e, l)
            : (l.state === Nd && this.want(l, o),
              e.shown === `far` && c.state === Id && this.showExt(e, c)))
        : f === `mid`
          ? (l.busy && this.cancel(l),
            c.state === Id
              ? this.showExt(e, c)
              : c.state === Nd && !this.fast
                ? this.want(c, o)
                : c.state === Ld && this.showExt(e, null))
          : (l.busy && this.cancel(l),
            c.busy && this.cancel(c),
            e.shown !== `far` && this.showExt(e, null),
            e.paintState === 2 && this.maybeFreeSlot(e)),
      e.hasInt && u.state !== Ld && this.buildMode === 2)
    ) {
      let a = this.env.ctx.player?.position;
      (u.visible &&
        u.handle &&
        ru(
          e.site,
          e.cos,
          e.sin,
          u.handle.indoor,
          a ? a.x : t,
          a ? a.y : r,
          a ? a.z : n,
        ) >= 0) ||
      (i && o < (u.visible || u.busy ? s.intD : s.intB))
        ? u.state === Id
          ? this.show(u)
          : u.state === Nd && this.want(u, o)
        : (u.busy && this.cancel(u), u.visible && this.hide(u, !0));
    } else u.visible && this.hide(u, !0);
    this.syncProxy(e);
  }
  stateOf(e) {
    let t = e.scene?.state;
    if (!t) return 0;
    try {
      return t(this.env.ctx) | 0;
    } catch {
      return 0;
    }
  }
  restate(e, t, n) {
    if (t.state === Id) {
      if (t.visible) {
        if (n < Hd || t.tier === `interior`) return;
        (this.release(t),
          t.tier === `near` &&
            this.showExt(e, e.mid.state === Id ? e.mid : null));
        return;
      }
      this.release(t);
    }
  }
  computeNearAdmit(e, t) {
    if (((this.nearAdmitD = 1 / 0), !this.env.mobile)) return;
    let n = 0,
      r = 0;
    for (let i of this.recs) {
      let a = i.near;
      if (a.visible || a.busy) {
        n += a.handle?.calls ?? (i.nearCalls || Yd);
        continue;
      }
      if (!i.hasNear || a.state === Ld || i.quarantined) continue;
      let o = of(i.site.rect, e, t);
      if (o >= i.radii.nearB || (r === Xd && o >= this.admitD[11])) continue;
      let s = a.handle?.calls ?? (i.nearCalls || Yd),
        c = r < Xd ? r : 11;
      for (; c > 0 && this.admitD[c - 1] > o;)
        ((this.admitD[c] = this.admitD[c - 1]),
          (this.admitC[c] = this.admitC[c - 1]),
          c--);
      ((this.admitD[c] = o), (this.admitC[c] = s), r < Xd && r++);
    }
    for (let e = 0; e < r; e++) {
      if (n + this.admitC[e] > this.clusterCallCap) {
        ((this.nearAdmitD = this.admitD[e] - 0.001),
          this.tel.demoted === 0 && this.tel.demotes++,
          (this.tel.demoted = r - e));
        return;
      }
      n += this.admitC[e];
    }
    this.tel.demoted = 0;
  }
  admitNear(e, t) {
    return t <= this.nearAdmitD || e.near.visible || e.near.busy;
  }
  want(e, t) {
    let n = this.candN++;
    ((this.cand[n] = e),
      (this.candD[n] =
        e.tier === `interior` ? t - 1e3 : e.tier === `near` ? t : t + 50));
  }
  busyCount() {
    let e = 0;
    for (let t of this.recs)
      (t.mid.busy && e++, t.near.busy && e++, t.interior.busy && e++);
    return e;
  }
  startCandidates() {
    let e = this.candN;
    if (this.buildMode === 0 && e) {
      for (let t = 0; t < e; t++) this.cand[t] = null;
      this.candN = 0;
      return;
    }
    if (e === 0) return;
    let t = $d() < this.boostUntil ? qd : Kd,
      n = this.busyCount();
    n > this.tel.maxConcurrent && (this.tel.maxConcurrent = n);
    for (let r = 0; r < e; r++) {
      let r = -1,
        i = 1 / 0;
      for (let t = 0; t < e; t++) {
        let e = this.cand[t];
        e &&
          e.state === Nd &&
          this.candD[t] < i &&
          ((i = this.candD[t]), (r = t));
      }
      if (r < 0) break;
      let a = this.cand[r];
      this.cand[r] = null;
      let o = a.tier === `interior`;
      (n >= t &&
        (!o ||
          !this.preemptExterior(a.s) ||
          ((n = this.busyCount()), n >= t))) ||
        (n++, this.start(a));
    }
    for (let t = 0; t < e; t++) this.cand[t] = null;
    this.candN = 0;
  }
  preemptExterior(e) {
    let t = null,
      n = -1 / 0;
    for (let r of this.recs)
      if (r !== e)
        for (let e = 0; e < 2; e++) {
          let i = e === 0 ? r.mid : r.near;
          i.busy && r.d > n && ((n = r.d), (t = i));
        }
    return t
      ? (this.cancel(t), this.tel.preempts++, (this.dirty = !0), !0)
      : !1;
  }
  ensureModules(e) {
    return e.mods === 2
      ? Promise.resolve()
      : e.modsPromise
        ? e.modsPromise
        : ((e.mods = 1),
          (e.modsPromise = (async () => {
            let [t, n] = await Promise.all([
              e.hasNear
                ? this.env.catalog.loadScene(e.id)
                : Promise.resolve(null),
              e.hasInt
                ? this.env.catalog.loadInterior(e.id)
                : Promise.resolve(null),
            ]);
            if (this.disposed) return;
            (e.hasNear &&
              !t &&
              this.quarantine(e, `scene chunk failed to load`),
              e.hasInt &&
                !n &&
                ((e.hasInt = !1),
                this.fail(e.interior, `interior chunk failed to load`)),
              (e.scene = t),
              (e.interiorMod = n));
            let r = [],
              i = new Set();
            for (let e of [...(t?.art ?? []), ...(n?.art ?? [])])
              e && !i.has(e.key) && (i.add(e.key), r.push(e));
            ((e.arts = r), (e.mods = 2));
          })()),
          e.modsPromise);
  }
  start(e) {
    let t = e.s,
      n = ++e.gen;
    ((e.state = Pd),
      this.ensureModules(t).then(
        () => {
          if (this.disposed || e.gen !== n || e.state !== Pd) return;
          if (
            t.quarantined ||
            (e.tier === `near` && !t.scene) ||
            (e.tier === `interior` && !t.interiorMod)
          ) {
            (e.state === Pd && (e.state = t.quarantined ? Nd : Ld),
              (this.dirty = !0));
            return;
          }
          e.state = Fd;
          let r = jd(this.env.ctx.work, e.label, this.work(e, n));
          ((e.job = r),
            r.done.then(
              (t) => {
                (e.job === r && (e.job = null),
                  t === `done` &&
                    e.gen === n &&
                    e.state === Fd &&
                    (e.state = Nd));
              },
              (t) => {
                (e.job === r && (e.job = null),
                  e.gen === n &&
                    this.fail(
                      e,
                      `build job failed: ${t?.message ?? String(t)}`,
                    ));
              },
            ));
        },
        (r) => {
          e.gen === n &&
            this.quarantine(t, `chunk load failed: ${r?.message ?? String(r)}`);
        },
      ));
  }
  *work(e, t) {
    let n = e.s,
      r = this.env,
      i = r.atlas,
      a = n.id,
      o = !1,
      s = 0;
    try {
      let c = e.tier !== `mid` || dt(n.meta),
        l = c ? n.arts : Qd;
      if (l.length && !i.painted(a, l)) {
        for (; n.paintState === 1;) yield sd;
        for (
          ;
          this.atlasPainter &&
          this.atlasPainter !== n &&
          this.atlasPainter.paintState === 1;
        )
          yield sd;
        if (n.paintState !== 2 || !i.painted(a, l)) {
          let e = ut(n.meta);
          (!i.slotsOf(a) && i.slotsFree < e && this.stealSlot(n, e),
            (n.paintState = 1),
            (o = !0),
            (this.atlasPainter = n));
          let t = i.paint(a, l, e);
          try {
            for (;;) {
              let e = $d(),
                n = t.next(),
                r = $d() - e;
              if (
                ((ud.v = `atlas:${i.stepKind}`),
                r > s && (s = r),
                _u(`${a}:atlas`, r),
                n.done)
              )
                break;
              n.value === nc ? yield sd : yield;
            }
          } finally {
            t.return(void 0);
          }
          ((n.paintState = 2),
            (o = !1),
            this.atlasPainter === n && (this.atlasPainter = null));
        }
      }
      ((r.mats.lmFallback || r.mats.leafFallback) &&
        ((ud.v = `mats`), Hc(r.ctx, r.mats)),
        i.created && Gc(r.mats),
        (e.artGen = l.length ? i.rectsGen(a) : -1),
        yield);
      let u = 0;
      ud.v = `genA`;
      let d = $d(),
        f = Du(
          {
            ctx: r.ctx,
            mats: r.mats,
            atlasView: c ? i.view(a) : i.whiteView(),
            q: r.q,
            camDist: n.d,
          },
          n.meta,
          n.site,
          e.tier,
        ),
        p = e.tier === `mid` ? 0 : this.stateOf(n);
      ((f.b.state = p), (e.builtState = p));
      let m = e.lives;
      ((m.length = 0),
        (f.b.live = (t, n, r, i) => {
          if (m.length >= Vd) {
            console.warn(
              `[test] sites ${a}:${e.tier} live() over ${Vd} per tier ignored`,
            );
            return;
          }
          m.push({ x: t, z: n, rot: r, pose: i });
        }));
      let h;
      if (
        ((h =
          e.tier === `interior`
            ? n.interiorMod.build(f.b)
            : e.tier === `near`
              ? n.scene.near(f.b)
              : n.scene?.mid
                ? n.scene.mid(f.b)
                : sf(f.b)),
        (u += $d() - d),
        yield,
        this.disposed || e.gen !== t)
      )
        return;
      if (h)
        for (let n = 0; ; n++) {
          ud.v = n === 0 ? `gen0` : `gen`;
          let r = $d(),
            i = h.next(),
            a = $d() - r;
          if (((u += a), a > s && (s = a), _u(e.label, a), i.done)) break;
          if ((yield, this.disposed || e.gen !== t)) return;
        }
      if ((yield, this.disposed || e.gen !== t)) return;
      let g = f.finishSteps(!1),
        _ = null;
      for (let n = 0; ; n++) {
        ud.v = `fin${n}`;
        let r = $d(),
          i = g.next(),
          a = $d() - r;
        if (
          ((u += a), a > s && (s = a), _u(`${e.label}:finish${n}`, a), i.done)
        ) {
          _ = i.value;
          break;
        }
        if ((yield, this.disposed || e.gen !== t)) return;
      }
      let v = !1;
      e.bytes = uf(_.root);
      try {
        let n = r.ctx.renderer;
        if (n && typeof n.uploadDraw == `function`) {
          let r = _.root.children;
          for (let i = 0; i < r.length; i++) {
            let a = r[i];
            if (!a.isMesh) continue;
            We(a);
            let o = a.geometry.attributes;
            for (let r in o) {
              if ((yield, this.disposed || e.gen !== t)) return;
              ud.v = `up`;
              let i = $d();
              mf(n, o[r]);
              let a = $d() - i;
              ((u += a), a > s && (s = a), _u(`${e.label}:upload`, a));
            }
            if ((yield, this.disposed || e.gen !== t)) return;
            ud.v = `up`;
            let c = $d();
            ((Zd[0] = a), n.uploadDraw(Zd), (Zd[0] = null));
            let l = $d() - c;
            ((u += l), l > s && (s = l), _u(`${e.label}:upload`, l));
          }
          if ((yield, this.disposed || e.gen !== t)) return;
        }
        v = !0;
      } finally {
        v || _.dispose();
      }
      ((e.handle = _),
        e.tier === `near` && (e.s.nearCalls = _.calls ?? 0),
        (e.col = f.colliders),
        (e.scope = null),
        (e.buildMs = u),
        (this.lastSliceMs = s),
        this.makeSpots(e),
        (e.state = Id),
        (e.job = null),
        e.builds++,
        this.tel.builds++,
        e.builds > 1 && this.tel.rebuilds++,
        this.park(e),
        (this.dirty = !0));
    } catch (t) {
      this.fail(e, `build failed: ${t?.stack ?? String(t)}`);
    } finally {
      (o && n.paintState === 1 && (n.paintState = 0),
        o && this.atlasPainter === n && (this.atlasPainter = null));
    }
  }
  makeSpots(e) {
    let t = e.handle;
    if (((e.spots.length = 0), !t || t.spots.length === 0)) return;
    let n = this.env.ctx,
      r = e.s.site,
      i = e.s.id;
    for (let a of t.spots) {
      let t = Ou(r, a.x, a.y, a.z, this.tmp),
        o = a.label;
      e.spots.push({
        x: t.x,
        y: t.y,
        z: t.z,
        r: a.r,
        label: () => {
          let e = typeof o == `function` ? o() : o;
          return e ? n.t(e) : null;
        },
        act: () => {
          try {
            a.act(n, r);
          } catch (e) {
            console.error(`[test] sites ${i} spot action failed`, e);
          }
        },
      });
    }
  }
  cancel(e) {
    if (!e.busy) return;
    (this.tel.cancels++, e.gen++);
    let t = e.job;
    ((e.job = null), (e.state = Nd), t?.cancel());
  }
  fail(e, t) {
    (e.gen++, (e.job = null), (e.state = Ld));
    let n = `${e.s.id}:${e.tier} ${t}`;
    (this.env.errors.push(n),
      console.error(`[test] sites ${n}`),
      (this.dirty = !0));
  }
  quarantine(e, t) {
    if (e.quarantined) return;
    ((e.quarantined = !0), this.tel.quarantines++);
    let n = `${e.id} quarantined: ${t}`;
    (this.env.errors.push(n), console.error(`[test] sites ${n}`));
    for (let t of [e.mid, e.near, e.interior])
      (this.cancel(t), (t.state === Pd || t.state === Fd) && (t.state = Nd));
    this.dirty = !0;
  }
  showExt(e, t) {
    let n = t ? t.tier : `far`;
    (t && this.show(t),
      n !== `mid` && e.mid.visible && this.hide(e.mid, !0),
      n !== `near` && e.near.visible && this.hide(e.near, !0),
      (e.shown = n),
      this.syncProxy(e));
  }
  syncProxy(e) {
    let t = e.shown !== `far` || e.interior.visible,
      n = this.env.proxy();
    if (!n) {
      e.proxyHidden = !1;
      return;
    }
    if (e.proxyHidden !== t) {
      e.proxyHidden = t;
      try {
        n.setHidden(e.id, t);
      } catch (e) {
        console.warn(`[test] sites proxy.setHidden failed`, e);
      }
    }
  }
  syncAllProxies() {
    for (let e of this.recs)
      ((e.proxyHidden = !(e.shown !== `far` || e.interior.visible)),
        this.syncProxy(e));
  }
  cacheOf(e) {
    return e.tier === `mid` ? this.midCache : this.nearCache;
  }
  glassBatch() {
    if (!this.glass) {
      let e = this.env.mats.glass;
      if (!e) return null;
      this.glass = new wu(this.env.ctx.scene, e);
    }
    return this.glass;
  }
  show(e) {
    if (e.visible || !e.handle) return;
    let t = this.env.ctx;
    if (
      (e.artGen >= 0 &&
        e.artGen !== this.env.atlas.rectsGen(e.s.id) &&
        (this.tel.staleArt++,
        this.tel.staleArt <= 3 &&
          console.warn(
            `[test] sites stale atlas art ${e.label}: built on rects gen ${e.artGen}, atlas at ${this.env.atlas.rectsGen(e.s.id)}`,
          )),
      (e.cached &&= (this.cacheOf(e).remove(e), !1)),
      t.scene.add(e.handle.root),
      e.handle.glass && this.glassBatch()?.add(e.label, e.handle.glass),
      !e.scope && e.col && e.col.list.length)
    )
      try {
        e.scope = e.col.commit(t.statics, e.label);
      } catch (e) {
        console.warn(`[test] sites collider re-commit failed`, e);
      }
    let n = this.env.interactions;
    for (let t = 0; t < e.spots.length; t++) e.spotOff.push(n.add(e.spots[t]));
    (this.spawnPeds(e),
      e.tier === `interior` &&
        e.handle.indoor.length &&
        (e.indoorOff = au(
          e.s.id,
          e.s.site,
          e.handle.indoor,
          e.s.meta.category,
        )),
      (e.visible = !0),
      e.tier !== `mid` && this.trimResident());
  }
  hide(e, t) {
    if (e.visible) {
      e.visible = !1;
      let t = e.handle?.root;
      (t?.parent?.remove(t),
        e.handle?.glass && this.glass?.remove(e.label),
        e.scope?.dispose(),
        (e.scope = null));
      for (let t = 0; t < e.spotOff.length; t++) e.spotOff[t]();
      ((e.spotOff.length = 0),
        this.releasePeds(e),
        e.indoorOff?.(),
        (e.indoorOff = null));
    }
    t && e.handle && !e.cached && this.park(e);
  }
  park(e) {
    if (e.visible) {
      this.hide(e, !0);
      return;
    }
    (e.scope?.dispose(),
      (e.scope = null),
      !e.cached &&
        e.handle &&
        ((e.cached = !0),
        (e.hiddenAt = $d()),
        this.cacheOf(e).retain(e),
        e.tier !== `mid` && this.trimResident()));
  }
  evicted(e) {
    ((e.cached = !1), this.release(e));
  }
  release(e) {
    (e.cached && ((e.cached = !1), this.cacheOf(e).remove(e)),
      this.hide(e, !1),
      e.scope?.dispose(),
      (e.scope = null));
    let t = e.handle;
    if (((e.handle = null), (e.col = null), (e.spots.length = 0), t))
      try {
        t.dispose();
      } catch (e) {
        console.warn(`[test] sites tier dispose failed`, e);
      }
    (e.state === Id && (e.state = Nd), this.maybeFreeSlot(e.s));
  }
  trimResident() {
    let e = 0,
      t = 0,
      n = 0,
      r = 0;
    for (let i of this.recs)
      (i.near.handle &&
        (e++, (t += i.near.handle.tris ?? 0), (n += i.near.handle.calls ?? 0)),
        i.interior.handle &&
          (e++,
          (t += i.interior.handle.tris ?? 0),
          (r += i.interior.handle.calls ?? 0)));
    for (;;) {
      let i =
        t > this.nearTriCap ||
        n > this.clusterCallCap ||
        n + r > this.nearCallCap;
      if (!i && e <= this.nearCapMax) break;
      let a = null,
        o = -1 / 0;
      for (let e = 0; e < 2 && a === null && (e !== 1 || i); e++)
        for (let t of this.recs) {
          if (e === 0 && t.d < t.radii.nearB) continue;
          let n = t.near,
            r = t.interior;
          (n.cached &&
            (e === 0 || t.d >= t.radii.nearB) &&
            (t.d > o || (t.d === o && a !== null && n.hiddenAt < a.hiddenAt)) &&
            ((a = n), (o = t.d)),
            r.cached &&
              (e === 0 || t.d >= t.radii.intB) &&
              (t.d > o ||
                (t.d === o && a !== null && r.hiddenAt < a.hiddenAt)) &&
              ((a = r), (o = t.d)));
        }
      if (!a) break;
      ((t -= a.handle?.tris ?? 0),
        a.tier === `interior`
          ? (r -= a.handle?.calls ?? 0)
          : (n -= a.handle?.calls ?? 0),
        this.tel.evicts++,
        this.release(a),
        e--);
    }
  }
  maybeFreeSlot(e) {
    e.mid.handle ||
      e.near.handle ||
      e.interior.handle ||
      e.mid.busy ||
      e.near.busy ||
      e.interior.busy ||
      (e.paintState !== 1 &&
        (e.d < e.radii.midD ||
          this.env.atlas.slotsFree > Jd ||
          this.dropSlot(e)));
  }
  dropSlot(e) {
    (this.env.atlas.slotsOf(e.id) && this.env.atlas.freeSlot(e.id),
      (e.paintState = 0));
  }
  stealable(e, t) {
    return !(
      e === t ||
      !this.env.atlas.slotsOf(e.id) ||
      e.near.visible ||
      e.interior.visible ||
      (e.mid.visible && dt(e.meta)) ||
      e.mid.busy ||
      e.near.busy ||
      e.interior.busy ||
      e.paintState === 1
    );
  }
  stealSlot(e, t) {
    let n = this.env.atlas,
      r = 0;
    for (; n.slotsFree < t && r++ < 16;) {
      let t = null,
        n = !1;
      for (let r of this.recs) {
        if (!this.stealable(r, e)) continue;
        let i = r.d >= r.radii.nearB;
        (t && n && !i) ||
          ((!t || (i && !n) || r.d > t.d) && ((t = r), (n = i)));
      }
      if (!t) return;
      ((dt(t.meta) || !t.mid.visible) && this.release(t.mid),
        this.release(t.near),
        this.release(t.interior),
        this.dropSlot(t));
    }
  }
  spawnPeds(e) {
    let t = this.env.ctx;
    if (!e.lives.length) return;
    let n = t.peds?.spawnScripted?.bind(t.peds);
    if (!n) return;
    let r = e.s.site,
      i = r.facing;
    for (let t of e.lives)
      try {
        let a = Ou(r, t.x, 0, t.z, this.tmp),
          o = t.pose ?? `idle`,
          s = n(a.x, a.z, {
            heading: i + t.rot,
            pose: o,
            y: r.y,
            indoors: e.tier === `interior`,
          });
        s && (s.stop(o, i + t.rot), e.peds.push(s));
      } catch (t) {
        console.warn(`[test] sites ${e.s.id} live() failed`, t);
      }
  }
  releasePeds(e) {
    for (let t of e.peds)
      try {
        t.release();
      } catch {}
    e.peds.length = 0;
  }
  shownTier(e) {
    let t = this.byId.get(e);
    if (!t) return null;
    let n = t.interior.visible ? t.interior.handle : null;
    if (n && n.indoor.length) {
      let e = this.env.ctx.player?.position;
      if (e && ru(t.site, t.cos, t.sin, n.indoor, e.x, e.y, e.z) >= 0)
        return `interior`;
    }
    return t.shown;
  }
  exteriorTier(e) {
    return this.byId.get(e)?.shown ?? null;
  }
  tierStats(e, t) {
    let n = this.byId.get(e);
    if (!n) return null;
    let r = n.tierOf(t),
      i = r.handle;
    return {
      tier: t,
      state: Rd[r.state],
      visible: r.visible,
      cached: r.cached,
      calls: i?.calls ?? 0,
      tris: i?.tris ?? 0,
      colliders: i?.colliderCount ?? 0,
      floors: i?.floorCount ?? 0,
      spots: r.spots.length,
      indoor: i?.indoor.length ?? 0,
      buildMs: +r.buildMs.toFixed(2),
      over: i?.over ?? null,
    };
  }
  firstVolume(e) {
    let t = this.byId.get(e)?.interior.handle?.indoor[0];
    return t
      ? {
          x: (t.x0 + t.x1) / 2,
          z: t.z0 + (t.z1 - t.z0) * 0.25,
          y: t.floorY ?? 0,
        }
      : null;
  }
  radiiOf(e) {
    return this.byId.get(e)?.radii ?? null;
  }
  report() {
    let e = mt.lru;
    return {
      tel: this.tel,
      counts: this.counts(),
      atlas: this.env.atlas.counters,
      build: mu(),
      work: cd,
      caps: {
        builds: Kd,
        buildsVeiled: qd,
        near: this.nearCap,
        mid: this.env.mobile ? e.midMobile : e.midDesktop,
      },
    };
  }
  unbuiltAt(e, t) {
    for (let n of this.recs) {
      if (n.quarantined) continue;
      let r = n.site.rect;
      if (
        !(
          e < r.minX - 2 ||
          e > r.maxX + 2 ||
          t < r.minZ - 2 ||
          t > r.maxZ + 2
        ) &&
        ((n.hasNear && n.near.state !== Id && n.near.state !== Ld) ||
          (n.hasInt && n.interior.state !== Id && n.interior.state !== Ld))
      )
        return !0;
    }
    return !1;
  }
  tierMap() {
    let e = {};
    for (let t of this.recs) {
      let n = t.interior.visible
          ? `+int`
          : t.interior.busy
            ? `+int…`
            : t.interior.cached
              ? `+int(parked)`
              : ``,
        r = t.near.busy ? ` (near…)` : t.mid.busy ? ` (mid…)` : ``;
      if (t.shown === `far` && !n && !r && !t.near.cached && !t.mid.cached)
        continue;
      let i =
        t.shown === `far` && (t.near.cached || t.mid.cached)
          ? `parked`
          : t.shown;
      e[t.id] = `${i}${n}${r}`;
    }
    return e;
  }
  geoMB() {
    let e = 0;
    for (let t of this.recs)
      (t.mid.handle && (e += t.mid.bytes),
        t.near.handle && (e += t.near.bytes),
        t.interior.handle && (e += t.interior.bytes));
    return e / 1048576;
  }
  busyTiers() {
    let e = [];
    for (let t of this.recs)
      for (let n of [t.mid, t.near, t.interior])
        n.busy &&
          e.push({
            id: t.id,
            tier: n.tier,
            state: n.state,
            job: n.job ? n.job.state : null,
            steps: n.job ? n.job.steps : 0,
            paintState: t.paintState,
            d: Math.round(t.d),
          });
    return e;
  }
  counts() {
    let e = 0,
      t = 0,
      n = 0,
      r = 0,
      i = 0;
    for (let a of this.recs) {
      a.quarantined && i++;
      for (let i of [a.mid, a.near, a.interior])
        (i.visible && e++,
          i.cached && t++,
          i.busy && n++,
          i.state === Ld && r++);
    }
    return {
      visible: e,
      cached: t,
      busy: n,
      failed: r,
      quarantined: i,
      active: this.active.length,
    };
  }
  dispose() {
    if (!this.disposed) {
      this.disposed = !0;
      try {
        this.env.atlas.setStealer(null);
      } catch {}
      Md(`sites:`);
      for (let e of this.recs) {
        for (let t of [e.mid, e.near, e.interior])
          (t.busy && (t.gen++, t.job?.cancel(), (t.job = null), (t.state = Nd)),
            this.release(t));
        this.dropSlot(e);
      }
      try {
        (this.nearCache.clear(), this.midCache.clear());
      } catch {}
      (this.glass?.dispose(),
        (this.glass = null),
        (this.active.length = 0),
        (this.activeNext.length = 0),
        this.grid.clear(),
        this.byId.clear());
    }
  }
};
function lf(e, t) {
  return (e + 2048) * 4096 + (t + 2048);
}
function uf(e) {
  let t = 0,
    n = e.children;
  for (let e = 0; e < n.length; e++) {
    let r = n[e].geometry;
    if (r) {
      for (let e in r.attributes) t += r.attributes[e].array?.byteLength ?? 0;
      r.index && (t += r.index.array.byteLength);
    }
  }
  return t;
}
var df = null,
  ff = null,
  pf = [null];
function mf(e, t) {
  if (e.uploadDraw && t) {
    (ff ||
      ((df = new V()),
      (df.boundingSphere = new d(new U(), 1)),
      (df.boundingBox = new xe(new U(-1, -1, -1), new U(1, 1, 1))),
      (ff = new M(df)),
      (ff.name = `sites-upload-carrier`),
      (ff.frustumCulled = !1)),
      df.setAttribute(`position`, t),
      (pf[0] = ff));
    try {
      e.uploadDraw(pf);
    } finally {
      (df.deleteAttribute(`position`), (pf[0] = null));
    }
  }
}
var hf = 3,
  gf = 15,
  _f = 40,
  vf = 40 / 3.6,
  yf = 70,
  bf = 3,
  xf = 12,
  Sf = 30,
  Cf = 25,
  wf = 18,
  Tf = 96;
function Ef(e) {
  switch (e) {
    case `shop`:
    case `temple`:
    case `market`:
    case `landmark`:
      return e;
    default:
      return `landmark`;
  }
}
function Df(e, t, n) {
  let r = {},
    i = new Map();
  for (let e of n) i.set(e.id, e);
  let a = [],
    o = [];
  for (let e of t) e.ok && i.has(e.id) && a.push(e.id);
  let s = a.length,
    c = new Float64Array(s),
    l = new Float64Array(s),
    u = new Float64Array(s),
    d = new Float64Array(s),
    f = new Uint8Array(s);
  {
    let e = 0;
    for (let n of t) {
      if (!n.ok) continue;
      let t = i.get(n.id);
      if (!t) continue;
      let r = Math.hypot(n.w, n.d) / 2;
      ((c[e] = n.x),
        (l[e] = n.z),
        (u[e] = (r + gf) * (r + gf)),
        (d[e] = (r + _f) * (r + _f)));
      let a = n.address?.zh ?? ``,
        s = n.address?.en ?? ``,
        f = t.name.ja,
        p = n.address?.ja;
      (o.push({
        zh: a ? `${t.name.zh}・${a}` : t.name.zh,
        en: s ? `${t.name.en} · ${s}` : t.name.en,
        ...(f && (p || !a) ? { ja: p ? `${f}・${p}` : f } : {}),
      }),
        e++);
    }
  }
  let p = [],
    m = e.ui,
    h = 0,
    g = 0,
    _ = 0,
    v = 0;
  if (m && typeof m.addBlip == `function`) {
    let t = (() => {
        try {
          return e.plan?.landmarks ?? [];
        } catch {
          return [];
        }
      })(),
      n = [],
      r = Array.from({ length: s }, (e, t) => t).sort((e, t) => {
        let n = i.get(a[e]),
          r = i.get(a[t]);
        return (
          Number(!!r.hero) - Number(!!n.hero) ||
          (r.priority ?? 0) - (n.priority ?? 0) ||
          e - t
        );
      });
    for (let e of r) {
      let r = i.get(a[e]),
        o = `sites-${a[e]}`,
        s = r.map.minimap;
      if (s) {
        for (let n of t)
          if (Math.hypot(n.x - c[e], n.z - l[e]) <= Sf) {
            ((s = !1), h++);
            break;
          }
      }
      if (s) {
        for (let t of n)
          if (Math.hypot(t.x - c[e], t.z - l[e]) <= Cf) {
            ((s = !1), h++);
            break;
          }
      }
      if (
        (s && g >= wf && ((s = !1), _++),
        s && (n.push({ x: c[e], z: l[e] }), g++),
        p.length >= Tf)
      ) {
        v++;
        continue;
      }
      try {
        (m.addBlip(o, {
          x: c[e],
          z: l[e],
          icon: Ef(r.map.icon),
          label: { zh: r.name.zh, en: r.name.en },
          mapOnly: !s,
        }),
          p.push(o));
      } catch (e) {
        console.warn(`[init] sites blip ${o} failed`, e);
      }
    }
  }
  Et(r, t, n);
  let y = 0,
    b = !1,
    x = 0,
    S = 0,
    C = 0,
    w = !1,
    T = { duration: bf, kind: `info` },
    E = NaN,
    D = NaN,
    O = 0;
  function k() {
    let t = e.vehicles?.playerVehicle;
    return Math.max(t ? Math.abs(t.speed || 0) : 0, O);
  }
  function A(e, t, n) {
    let r = -1,
      i = 1 / 0,
      a = n || C > 0,
      p = !a && k() > vf;
    for (let o = 0; o < s; o++) {
      let s = e - c[o],
        m = t - l[o],
        h = s * s + m * m;
      if (f[o]) {
        h > d[o] && (f[o] = 0);
        continue;
      }
      if (!(h > u[o])) {
        if (a) {
          ((f[o] = 1), n || S++);
          continue;
        }
        p || (h < i && ((i = h), (r = o)));
      }
    }
    if (r >= 0) {
      ((f[r] = 1), x++, (C = xf));
      try {
        m?.notify(o[r], T);
      } catch {}
    }
  }
  return {
    get blips() {
      return p.length;
    },
    get toasts() {
      return x;
    },
    get minimapBlips() {
      return g;
    },
    get dedupedBlips() {
      return h;
    },
    get cappedBlips() {
      return _;
    },
    get skippedBlips() {
      return v;
    },
    get suppressedToasts() {
      return S;
    },
    resetArrivals() {
      ((E = D = NaN), (O = 0), f.fill(0), (b = !1), (y = 0), (C = 0));
    },
    update(t, n, r) {
      if (w || s === 0 || (C > 0 && (C -= t), (y += t), y < 1 / hf)) return;
      let i = y;
      if (((y = 0), !Number.isFinite(n) || !Number.isFinite(r))) return;
      if (E === E) {
        let e = n - E,
          t = r - D,
          a = Math.sqrt(e * e + t * t);
        O = a < yf ? a / i : 0;
      }
      ((E = n), (D = r));
      let a = e.player?.mode;
      a !== `cutscene` &&
        a !== `dead` &&
        a !== `busted` &&
        (A(n, r, !b), (b = !0));
    },
    dispose() {
      if (!w) {
        if (((w = !0), m && typeof m.removeBlip == `function`))
          for (let e of p)
            try {
              m.removeBlip(e);
            } catch {}
        ((p.length = 0), Dt(r));
      }
    },
  };
}
var Of = typeof performance < `u` ? () => performance.now() : () => Date.now(),
  kf = 1e4,
  Af = 30,
  jf = 3e3,
  Mf = Object.assign({});
function Nf(e) {
  for (let t of Object.values(Mf)) {
    let n = t?.createSiteInteractions;
    if (typeof n == `function`)
      try {
        let t = n(e);
        if (t && typeof t.add == `function` && typeof t.update == `function`)
          return t;
      } catch (e) {
        console.warn(
          `[sites] createSiteInteractions failed, using the interiors kit fallback`,
          e,
        );
      }
  }
  let t = new Gn();
  return {
    add: (e) => t.add(e),
    update: (e, n) => t.update(e, n),
    dispose: () => t.clear(),
  };
}
function Pf(e) {
  return !!e.quality?.mobile || e.quality?.level === `low`;
}
function Ff(e, t, n, r, i, a, o) {
  let s = {},
    c = {},
    l = [],
    u = 0;
  for (let e of t) {
    e.ok ? u++ : (s[e.id] = e.errors[0] ?? `no placement found`);
    let t = e.rejections?.by;
    if (t) for (let e in t) c[e] = (c[e] ?? 0) + (t[e] ?? 0);
    for (let t of e.replaces ?? []) l.push({ site: e.id, ...t });
  }
  return {
    metas: e.length,
    ok: u,
    failed: e.length - u,
    claims: i,
    claimsRaw: a,
    ms: Math.round(r * 100) / 100,
    failures: s,
    rejects: c,
    errors: n,
    landmarkRequests: l,
    claimedPois: o,
  };
}
function If(e, t) {
  let n = t.catalog,
    r = e.params?.get(`sites`) !== `0`,
    i = new Set((e.params?.get(`sitesoff`) ?? ``).split(`,`).filter(Boolean)),
    a = [],
    o = [],
    s = [],
    c = null,
    l = null,
    u = null,
    d = null,
    f = null,
    p = null,
    m = null,
    h = null,
    g = null,
    _ = null,
    v = [],
    y = !1,
    b = 0,
    x = 0,
    S = 0,
    C = 0,
    w = -1,
    T = -1,
    E = !1,
    D = 0,
    O = Of(),
    k = [],
    A = (e) => k.push(`${e} ${(Of() - O).toFixed(1)}`);
  if (r) {
    try {
      ((o = n.metas().filter((e) => !i.has(e.id))), A(`metas`));
      for (let e of n.errors) a.push(e);
      if (o.length) {
        let t;
        try {
          t = e.transit?.entrances;
        } catch {
          t = void 0;
        }
        A(`entrances`);
        let r = Of(),
          i = null;
        try {
          i = ml(e.districts?.packs);
        } catch {
          i = null;
        }
        (A(`claimIdx`),
          (s = (n.resolve ?? so)(o, {
            plan: e.plan,
            scale: io(),
            entrances: t,
            obstacles: [],
            claimed: i
              ? (e, t, n, r, a) =>
                  i.claimed(e, t, n, r, a === `props` ? `props` : `buildings`)
              : (t, n, r, i, a) =>
                  !!e.districts?.claimed(
                    t,
                    n,
                    r,
                    i,
                    a === `props` ? `props` : `buildings`,
                  ),
          })),
          (b = Of() - r),
          A(`resolve`),
          ro(e.plan));
        let c = Pf(e) ? pt.resolveMs.mobile : pt.resolveMs.desktop;
        b > c &&
          console.warn(
            `[sites] resolve slow: ${b.toFixed(1)}ms for ${o.length} metas (budget ${c.toFixed(0)}ms)`,
          );
        let l = !!e.params?.has(`debug`);
        for (let e of s) {
          for (let t of e.errors) a.push(`${e.id}: ${t}`);
          if (l)
            for (let t of e.warnings)
              console.info(
                `[sites] ${t.startsWith(`[`) ? t : `${e.id}: ${t}`}`,
              );
        }
      }
    } catch (e) {
      ((s = []),
        a.push(`resolve failed: ${e?.message ?? String(e)}`),
        console.error(`[sites] resolve failed`, e));
    }
    A(`errors`);
    let r = sl(s);
    (t.registerPack?.(Yc), A(`claims`));
    try {
      let t = Yc.claims.filter(
        (e) => e.scope === `buildings` || e.scope === `all`,
      );
      D = e.plan?.claimPois?.(t) ?? 0;
    } catch (e) {
      console.warn(`[sites] POI claims failed`, e);
    }
    A(`pois`);
    let d = 0;
    for (let e of s) e.ok && d++;
    let f = nl(),
      p = [];
    for (let e of s) e.ok || p.push(e.id);
    if (
      (console.log(
        `[init] sites ${d}/${o.length} resolved in ${b.toFixed(1)} ms · ${r} claims` +
          (f.raw > f.merged ? ` (merged from ${f.raw})` : ``) +
          (D ? ` · ${D} POIs in site lots` : ``) +
          (p.length
            ? ` · ${p.length} failed: ${p.slice(0, 6).join(`, `)}${p.length > 6 ? `…` : ``}`
            : ``),
      ),
      d > 0)
    ) {
      let t = Pf(e),
        r = 4;
      try {
        r = Math.min(4, e.renderer.gl.capabilities.getMaxAnisotropy());
      } catch {
        r = 4;
      }
      ((c = new Tc(e.renderer?.gl, t, r)),
        A(`atlas`),
        (l = Vc(
          null,
          c,
          Bc(e),
          n.look
            ? { look: n.look, policy: e.quality?.materials ?? `pbr` }
            : void 0,
        )),
        (u = qc(l)),
        A(`mats`));
      try {
        v = ou(j());
      } catch (e) {
        console.warn(`[sites] interior lot claims failed`, e);
      }
      A(`lotClaims`);
    }
    (typeof window < `u` &&
      ((_ = vl({
        ctx: e,
        metas: o,
        resolved: s,
        errors: a,
        streamer: () => g,
        atlas: () => c,
      })),
      (_.resolve = Ff(o, s, a, b, r, f.raw, D)),
      (window.__sites = _)),
      (e.params?.has(`debug`) || e.params?.has(`sitesprof`)) &&
        (A(`debug`),
        console.log(
          `[init] sites constructor ${(Of() - O).toFixed(1)} ms (resolve ${b.toFixed(1)}) · ${k.join(` · `)}`,
        )));
  }
  function j() {
    let e = new Map();
    for (let t of o) e.set(t.id, t);
    let t = [];
    for (let n of s) {
      let r = e.get(n.id);
      n.ok && r && t.push({ meta: r, site: n });
    }
    return t;
  }
  let M = (t) => {
      let n = new Ac({ ox: 0, oz: 0, y0: 0, facing: 0 });
      for (let { meta: e, site: r } of t) {
        let t = new Ac({ ox: r.x, oz: r.z, y0: r.y, facing: r.facing }),
          i = e.lot.w > 0 ? r.w / e.lot.w : 1,
          a = e.lot.d > 0 ? r.d / e.lot.d : 1;
        if (e.solids && e.solids.length)
          for (let n of e.solids)
            t.box(n.x0 * i, n.z0 * a, n.x1 * i, n.z1 * a, n.y0 ?? 0, n.y1);
        else {
          let n = Math.min(i, a);
          for (let r of e.proxy) {
            let e = r.rot ? n : i,
              o = r.rot ? n : a;
            t.obb(
              r.x * i,
              r.z * a,
              (r.w * e) / 2,
              (r.d * o) / 2,
              r.rot ?? 0,
              r.y ?? 0,
              Yu(r),
            );
          }
        }
        for (let e of t.list) n.list.push(e);
      }
      n.list.length && e.statics && (d = n.commit(e.statics, `sites:shells`));
    },
    N = {
      ensureResident(e, t, n) {
        return y || !g || !Number.isFinite(e) || !Number.isFinite(t)
          ? Promise.resolve()
          : g.prepareAt(e, t, void 0, n?.timeoutMs ?? kf).catch((e) => {
              console.warn(`[sites] ensureResident failed`, e);
            });
      },
      unbuiltAt(e, t) {
        return !y && !!g && g.unbuiltAt(e, t);
      },
      residency: () => {
        let e = g,
          t = c;
        return {
          off: !e,
          sites: e?.recs.length ?? 0,
          tiers: e?.tierMap() ?? {},
          counts: e?.counts() ?? {
            visible: 0,
            cached: 0,
            busy: 0,
            failed: 0,
            quarantined: 0,
            active: 0,
          },
          geoMB: Math.round((e?.geoMB() ?? 0) * 10) / 10,
          atlasMB:
            t && t.created
              ? Math.round(((t.size * t.size * 4 * 4) / 3 / 1048576) * 10) / 10
              : 0,
          slots: t ? `${t.slotsUsed}/${t.slotCount}` : `0/0`,
          tel: {
            builds: e?.tel.builds ?? 0,
            rebuilds: e?.tel.rebuilds ?? 0,
            cancels: e?.tel.cancels ?? 0,
            evicts: e?.tel.evicts ?? 0,
          },
        };
      },
    };
  return {
    name: `sites`,
    get sites() {
      return s;
    },
    get resolveMs() {
      return b;
    },
    get updateMs() {
      return Math.round(S * 1e3) / 1e3;
    },
    prepareAt(e, t, n, r) {
      return y || !g
        ? Promise.resolve()
        : g.prepareAt(e, t, n, r).catch((e) => {
            console.warn(`[sites] prepareAt failed`, e);
          });
    },
    prewarm(e) {
      if (l && u) return (Hc(e, l), u.protos());
    },
    init(e) {
      if (!r || y || !c || !l) {
        _ && (_.ready = !0);
        return;
      }
      let t = j(),
        i = !!(e.params?.has(`debug`) || e.params?.has(`sitesprof`)),
        u = Of();
      Hc(e, l);
      try {
        M(t);
      } catch (e) {
        (a.push(`shells failed: ${e?.message ?? String(e)}`),
          console.error(`[sites] shells failed`, e));
      }
      try {
        p = n.gaps === null ? null : Ql(e, s);
      } catch (e) {
        ((p = null),
          console.warn(`[sites] computeGaps failed (no gap fillers)`, e));
      }
      _ && ((_.gaps = p?.items ?? []), (_.gapStats = p?.stats));
      try {
        f = od(e, s, o, l, p);
      } catch (e) {
        ((f = null),
          a.push(`proxy layer failed: ${e?.message ?? String(e)}`),
          console.error(`[sites] proxy layer failed`, e));
      }
      try {
        m = Df(e, s, o);
      } catch (e) {
        ((m = null), console.warn(`[sites] UI failed`, e));
      }
      if (
        (i &&
          console.log(
            `[init] sites shells+gaps+proxy+ui ${(Of() - u).toFixed(1)} ms`,
          ),
        (h = Nf(e)),
        (g = new cf(
          {
            ctx: e,
            atlas: c,
            mats: l,
            q: Bc(e),
            mobile: Pf(e),
            interactions: h,
            errors: a,
            catalog: n,
            proxy: () => f,
            onJump: () => m?.resetArrivals(),
          },
          t,
        )),
        f)
      ) {
        let t = f;
        t.ready.then(() => {
          (!y && f === t && g?.syncAllProxies(), ro(e.plan));
        });
      } else ro(e.plan);
      ((e.sites = N),
        e.events?.once?.(`game:ready`, () => {
          ((w = Of()), c?.gameReady());
        }),
        _ && (_.ready = !0),
        i && console.log(`[init] sites init ${(Of() - u).toFixed(1)} ms`));
    },
    update(e, t) {
      if (!g || !l) return;
      if (c && !E && w >= 0) {
        let e = Of();
        (t.districts?.pending ?? 0) > 0
          ? (T = -1)
          : T < 0
            ? (T = e)
            : e - T >= jf && ((E = !0), c.allowWorker());
      }
      let n = !(x++ & 15),
        r = n ? Of() : 0;
      if ((Uc(t, l), g.update(e), h?.update(t, e), m)) {
        let n = t.player?.position;
        n && m.update(e, n.x, n.z);
      }
      (c &&
        c.created &&
        (c.slotsInUse() === 0
          ? ((C += e), C > Af && ((C = 0), Kc(l), c.releaseGpu()))
          : (C = 0)),
        n && (S += (Of() - r - S) / 20));
    },
    dispose() {
      if (!y) {
        y = !0;
        try {
          g?.dispose();
        } catch (e) {
          console.warn(`[sites] streamer dispose failed`, e);
        }
        ((g = null),
          h?.dispose(),
          (h = null),
          m?.dispose(),
          (m = null),
          f?.dispose(),
          (f = null),
          (p = null),
          d?.dispose(),
          (d = null),
          u?.dispose(),
          (u = null));
        for (let e of v) e.dispose();
        ((v = []),
          c?.dispose(),
          l && Wc(l),
          (c = null),
          (l = null),
          il(),
          e.sites === N && delete e.sites,
          typeof window < `u` &&
            _ &&
            window.__sites === _ &&
            delete window.__sites,
          (_ = null));
      }
    },
  };
}
var Lf = {
  clear: {
    cloud: 0.32,
    overcast: 0,
    sunOcc: 1,
    haze: 1,
    rain: 0,
    storm: 0,
    wind: 0.25,
    mist: 0,
  },
  cloudy: {
    cloud: 0.74,
    overcast: 0.55,
    sunOcc: 0.4,
    haze: 1.35,
    rain: 0,
    storm: 0,
    wind: 0.45,
    mist: 0,
  },
  rain: {
    cloud: 0.96,
    overcast: 0.88,
    sunOcc: 0.14,
    haze: 2.1,
    rain: 0.72,
    storm: 0.15,
    wind: 0.6,
    mist: 0.15,
  },
  storm: {
    cloud: 1,
    overcast: 1,
    sunOcc: 0.07,
    haze: 2.7,
    rain: 1,
    storm: 1,
    wind: 1,
    mist: 0.1,
  },
  fog: {
    cloud: 0.62,
    overcast: 0.72,
    sunOcc: 0.32,
    haze: 5.2,
    rain: 0,
    storm: 0,
    wind: 0.1,
    mist: 1,
  },
};
function Rf(e, t) {
  ((e.cloud = t.cloud),
    (e.overcast = t.overcast),
    (e.sunOcc = t.sunOcc),
    (e.haze = t.haze),
    (e.rain = t.rain),
    (e.storm = t.storm),
    (e.wind = t.wind),
    (e.mist = t.mist));
}
function zf(e, t, n, r) {
  ((e.cloud = t.cloud + (n.cloud - t.cloud) * r),
    (e.overcast = t.overcast + (n.overcast - t.overcast) * r),
    (e.sunOcc = t.sunOcc + (n.sunOcc - t.sunOcc) * r),
    (e.haze = t.haze + (n.haze - t.haze) * r),
    (e.rain = t.rain + (n.rain - t.rain) * r),
    (e.storm = t.storm + (n.storm - t.storm) * r),
    (e.wind = t.wind + (n.wind - t.wind) * r),
    (e.mist = t.mist + (n.mist - t.mist) * r));
}
var Bf = [
    [-90, 0.008, 0.011, 0.026],
    [-13, 0.008, 0.011, 0.026],
    [-8, 0.016, 0.022, 0.055],
    [-3, 0.045, 0.06, 0.15],
    [0, 0.1, 0.14, 0.3],
    [5, 0.14, 0.24, 0.5],
    [12, 0.15, 0.3, 0.62],
    [30, 0.13, 0.3, 0.68],
    [90, 0.11, 0.28, 0.68],
  ],
  Vf = [
    [-90, 0.052, 0.038, 0.036],
    [-13, 0.052, 0.038, 0.036],
    [-8, 0.065, 0.05, 0.068],
    [-3, 0.19, 0.14, 0.2],
    [0, 0.58, 0.38, 0.32],
    [5, 0.76, 0.58, 0.46],
    [12, 0.7, 0.68, 0.66],
    [30, 0.6, 0.67, 0.76],
    [90, 0.58, 0.66, 0.77],
  ],
  Hf = [
    [-90, 0, 0, 0],
    [-12, 0, 0, 0],
    [-6, 0.07, 0.025, 0.03],
    [-2, 0.42, 0.14, 0.05],
    [1, 0.75, 0.28, 0.07],
    [5, 0.45, 0.2, 0.05],
    [12, 0.1, 0.05, 0.015],
    [25, 0, 0, 0],
    [90, 0, 0, 0],
  ],
  Uf = [
    [-90, 0, 0, 0],
    [-6, 0, 0, 0],
    [-1, 0.55, 0.22, 0.07],
    [3, 1.3, 0.62, 0.26],
    [10, 1.15, 0.86, 0.56],
    [40, 0.8, 0.76, 0.68],
    [90, 0.75, 0.72, 0.66],
  ],
  Wf = [
    [-90, 1, 0.35, 0.12],
    [-3, 1, 0.35, 0.12],
    [0, 1, 0.45, 0.2],
    [4, 1, 0.62, 0.36],
    [10, 1, 0.8, 0.6],
    [25, 1, 0.93, 0.84],
    [60, 1, 0.97, 0.93],
    [90, 1, 0.97, 0.93],
  ],
  Gf = [
    [-90, 0.19, 0.18, 0.182],
    [-13, 0.19, 0.18, 0.182],
    [-6, 0.2, 0.21, 0.29],
    [-2, 0.28, 0.28, 0.42],
    [2, 0.52, 0.48, 0.54],
    [8, 0.58, 0.6, 0.7],
    [20, 0.56, 0.66, 0.84],
    [90, 0.56, 0.67, 0.86],
  ],
  Kf = [
    [-90, 0.2, 0.14, 0.1],
    [-13, 0.2, 0.14, 0.1],
    [-6, 0.18, 0.135, 0.11],
    [-2, 0.21, 0.16, 0.13],
    [4, 0.34, 0.28, 0.23],
    [20, 0.37, 0.34, 0.3],
    [90, 0.37, 0.34, 0.3],
  ],
  qf = [
    [-90, 0.05, 0.036, 0.03],
    [-13, 0.05, 0.036, 0.03],
    [-6, 0.08, 0.055, 0.065],
    [-2, 0.5, 0.27, 0.26],
    [2, 1.05, 0.58, 0.38],
    [8, 1.05, 0.92, 0.82],
    [25, 1.02, 1.02, 1.04],
    [90, 1.02, 1.02, 1.04],
  ],
  Jf = [
    [-90, 0.02, 0.016, 0.018],
    [-13, 0.02, 0.016, 0.018],
    [-6, 0.035, 0.032, 0.048],
    [-2, 0.18, 0.14, 0.2],
    [2, 0.36, 0.3, 0.36],
    [8, 0.48, 0.51, 0.58],
    [25, 0.55, 0.6, 0.7],
    [90, 0.55, 0.6, 0.7],
  ];
function Yf(e, t, n) {
  if (t <= e[0][0]) return n.setRGB(e[0][1], e[0][2], e[0][3]);
  for (let r = 1; r < e.length; r++) {
    let i = e[r];
    if (t <= i[0]) {
      let a = e[r - 1],
        o = (t - a[0]) / (i[0] - a[0]);
      return (
        (o = o * o * (3 - 2 * o)),
        n.setRGB(
          a[1] + (i[1] - a[1]) * o,
          a[2] + (i[2] - a[2]) * o,
          a[3] + (i[3] - a[3]) * o,
        )
      );
    }
  }
  let r = e[e.length - 1];
  return n.setRGB(r[1], r[2], r[3]);
}
function Xf(e, t) {
  if (t <= e[0][0]) return e[0][1];
  for (let n = 1; n < e.length; n++)
    if (t <= e[n][0]) {
      let [r, i] = e[n - 1],
        [a, o] = e[n],
        s = (t - r) / (a - r);
      return ((s = s * s * (3 - 2 * s)), i + (o - i) * s);
    }
  return e[e.length - 1][1];
}
var Zf = new W(0.46, 0.4, 0.33),
  Qf = 1.35,
  $f = 0.3,
  ep = [
    [-90, 0],
    [-2.5, 0],
    [0, 0.9],
    [5, 1.6],
    [15, 2.5],
    [40, 3.1],
    [90, 3.2],
  ],
  tp = [
    [-90, 1.5],
    [-12, 1.5],
    [-6, 1.45],
    [-2, 1.25],
    [3, 1.06],
    [10, 1],
    [90, 1],
  ],
  np = (25.03 * Math.PI) / 180,
  rp = (10 * Math.PI) / 180,
  ip = (-4 * Math.PI) / 180;
function ap(e, t, n) {
  let r = Math.sin(np) * Math.sin(t) + Math.cos(np) * Math.cos(t) * Math.cos(e),
    i = -Math.cos(t) * Math.sin(e),
    a = Math.cos(np) * Math.sin(t) - Math.sin(np) * Math.cos(t) * Math.cos(e);
  return n.set(i, r, -a).normalize();
}
function op(e) {
  let t = ((e % 24) + 24) % 24;
  return t >= 6.5 && t <= 17.5
    ? 0
    : t > 17.5 && t < 19
      ? G(17.5, 19, t)
      : t > 5.5 && t < 6.5
        ? 1 - G(5.5, 6.5, t)
        : 1;
}
var sp = class {
  sunDir = new U(0, 1, 0);
  moonDir = new U(0, -1, 0);
  lightDir = new U(0, 1, 0);
  sunEl = 45;
  moonEl = -10;
  night = 0;
  dim = 0;
  zenith = new W();
  horizon = new W();
  sunset = new W();
  sunGlow = new W();
  sunDisk = new W();
  moonCol = new W();
  cloudLit = new W();
  cloudAmb = new W();
  stars = 0;
  lightColor = new W();
  lightIntensity = 3;
  shadowStrength = 1;
  moonLit = !1;
  hemiSky = new W();
  hemiGround = new W();
  hemiIntensity = 1.4;
  exposure = 1;
  hazeScale = 170;
  mistColor = new W(0.7, 0.72, 0.74);
  mist = 0;
  gloom = 0;
  envIntensity = 0.5;
  bloomNight = 0;
  sunVis = 1;
  golden = 0;
  tc = new W();
  region = null;
  compute(e, t) {
    let n = this.region;
    if (n) n.bodies(e, this.sunDir, this.moonDir);
    else {
      let t = ((e - 12) / 24) * Math.PI * 2;
      (ap(t, rp, this.sunDir), ap(t + (200 * Math.PI) / 180, ip, this.moonDir));
    }
    let r = (Math.asin(Ge(this.sunDir.y, -1, 1)) * 180) / Math.PI;
    ((this.sunEl = r),
      (this.moonEl = (Math.asin(Ge(this.moonDir.y, -1, 1)) * 180) / Math.PI));
    let i = t.overcast,
      a = t.storm,
      o = n ? n.night(e, r) : op(e);
    ((this.dim = Ge(
      Math.max(o, 0.32 * a + 0.1 * i * (1 - o) + 0.08 * t.rain),
      0,
      1,
    )),
      (this.night = Ge(Math.max(o, 0.42 * G(0.6, 1, a)), 0, 1)),
      Yf(Bf, r, this.zenith),
      Yf(Vf, r, this.horizon),
      Yf(Hf, r, this.sunset).multiplyScalar(1 - 0.85 * i),
      Yf(Uf, r, this.sunGlow).multiplyScalar(Math.max(0.08, 1 - 0.9 * i)));
    let s =
        this.horizon.r * 0.2126 +
        this.horizon.g * 0.7152 +
        this.horizon.b * 0.0722,
      c = i * 0.85;
    (this.tc.setRGB(s * 0.95, s * 0.98, s * 1.03),
      this.horizon.lerp(this.tc, c),
      this.tc.multiplyScalar(0.8),
      this.zenith.lerp(this.tc, i * 0.92));
    let l = 1 - 0.45 * a - 0.22 * t.rain;
    (this.horizon.multiplyScalar(l), this.zenith.multiplyScalar(l));
    let u = G(-2, -9, r);
    if (u > 0) {
      let e = u * (0.25 + i);
      ((this.horizon.r += 0.03 * e),
        (this.horizon.g += 0.017 * e),
        (this.horizon.b += 0.011 * e),
        (this.zenith.r += 0.008 * e * i),
        (this.zenith.g += 0.005 * e * i),
        (this.zenith.b += 0.004 * e * i));
    }
    if (((this.mist = t.mist), t.mist > 0)) {
      let e = Math.max(0.05, s * (1 - 0.5 * u));
      (this.mistColor.setRGB(e * 0.97, e * 0.99, e * 1.02),
        u > 0 && this.mistColor.lerp(this.tc.setRGB(0.11, 0.08, 0.065), u),
        this.horizon.lerp(this.mistColor, t.mist * 0.75),
        this.zenith.lerp(this.mistColor, t.mist * 0.45));
    }
    this.sunVis = G(2.5, 6, r);
    let d = G(-3, 3, r) * (1 - G(12, 26, r)) * (1 - 0.75 * i);
    ((this.golden = d), Yf(Wf, r, this.lightColor));
    let f = Xf(ep, r) * (0.12 + 0.88 * t.sunOcc) * this.sunVis * (1 - 0.18 * d);
    (this.sunDisk
      .copy(this.lightColor)
      .multiplyScalar(
        40 * t.sunOcc * t.sunOcc * G(-1.5, 2, r) * (0.35 + 0.65 * this.sunVis),
      ),
      Yf(qf, r, this.cloudLit),
      Yf(Jf, r, this.cloudAmb),
      this.tc.setRGB(s * 0.92, s * 0.94, s * 0.98),
      this.cloudLit.lerp(this.tc, i * 0.7),
      this.tc.multiplyScalar(0.72),
      this.cloudAmb.lerp(this.tc, i * 0.6));
    let p = 1 - 0.5 * a - 0.3 * t.rain;
    if (
      (this.cloudLit.multiplyScalar(p), this.cloudAmb.multiplyScalar(p), u > 0)
    ) {
      let e = u * (0.6 + i * 0.9);
      ((this.cloudLit.r += 0.035 * e),
        (this.cloudLit.g += 0.02 * e),
        (this.cloudLit.b += 0.012 * e),
        (this.cloudAmb.r += 0.012 * e),
        (this.cloudAmb.g += 0.008 * e),
        (this.cloudAmb.b += 0.006 * e));
    }
    let m = G(-2, 6, this.moonEl),
      h = 0.12 * G(-3, -9, r) * m * (0.25 + 0.75 * t.sunOcc);
    (this.moonCol
      .setRGB(1.25, 1.3, 1.42)
      .multiplyScalar(G(-1, -7, r) * m * (1 - 0.85 * t.cloud * i)),
      (this.stars = G(-7, -14, r) * (1 - 0.9 * i) * (1 - t.mist)),
      (this.moonLit = f < h),
      f >= h
        ? (this.lightDir.copy(this.sunDir),
          (this.lightIntensity = f),
          (this.shadowStrength =
            0.92 * G(0.05, 0.9, f) * (0.15 + 0.85 * t.sunOcc * t.sunOcc)))
        : (this.lightDir.copy(this.moonDir),
          this.lightColor.setRGB(0.8, 0.84, 0.95),
          (this.lightIntensity = h),
          (this.shadowStrength = 0.4 * G(0.02, 0.2, h))),
      Yf(Gf, r, this.hemiSky),
      Yf(Kf, r, this.hemiGround));
    let g =
      this.hemiSky.r * 0.2126 +
      this.hemiSky.g * 0.7152 +
      this.hemiSky.b * 0.0722;
    (this.tc.setRGB(g * 0.96, g, g * 1.05),
      this.hemiSky.lerp(this.tc, i * 0.7));
    let _ = 1 - u;
    if (
      ((this.hemiIntensity =
        (1.25 + 0.35 * i * _) *
        (1 - 0.35 * a) *
        (1 - 0.1 * t.rain) *
        (1 + Qf * d)),
      t.mist > 0 && this.hemiSky.lerp(this.mistColor, t.mist * 0.4 * _),
      !this.moonLit)
    ) {
      let e = Ge(f / 2.6, 0, 1) * (0.35 + 0.65 * t.sunOcc);
      (this.tc.copy(this.lightColor).multiply(Zf),
        this.hemiGround.lerp(this.tc, 0.45 * e),
        this.hemiGround.multiplyScalar(1 + 0.25 * e));
    }
    ((this.exposure = Xf(tp, r) * (1 + 0.06 * i * _ + 0.08 * a) * (1 + $f * d)),
      (this.hazeScale = 330 / Math.max(0.2, t.haze)),
      (this.gloom = Ge(i * 0.6 + a * 0.4, 0, 1)),
      (this.envIntensity = 0.26),
      (this.bloomNight = Ge(Math.max(this.night, a * 0.6), 0, 1)),
      n && n.tone && n.tone(this, t, e));
  }
  skyBase(e, t, n, r, i = 1) {
    let a = Ge(t, 0, 1),
      o = 1 - (1 - a) ** 2.6;
    r.copy(this.horizon).lerp(this.zenith, o);
    let s = Math.hypot(e, n),
      c = this.sunDir,
      l = Math.hypot(c.x, c.z),
      u =
        s > 1e-4 && l > 1e-4
          ? ((e * c.x + n * c.z) / (s * l)) * 0.5 + 0.5
          : 0.5,
      d = Math.exp(-a * 5.5) * u * u;
    ((r.r += this.sunset.r * d),
      (r.g += this.sunset.g * d),
      (r.b += this.sunset.b * d));
    let f = Math.max(0, e * c.x + t * c.y + n * c.z),
      p = (0.16 * f ** 5 + 0.85 * f ** 42) * i;
    return (
      (r.r += this.sunGlow.r * p),
      (r.g += this.sunGlow.g * p),
      (r.b += this.sunGlow.b * p),
      r
    );
  }
};
function cp(e, t) {
  return e === `rain` || e === `storm` || t() <= 0.34;
}
function lp(e, t, n) {
  let r = t >= 13 && t <= 17,
    i = [
      [`clear`, e === `storm` ? 2 : 4],
      [`cloudy`, 3],
      [`rain`, 1.1],
      [`storm`, e === `clear` ? 0.3 + (r ? 1.2 : 0) : r ? 1.5 : 0.35],
      [`fog`, t >= 4 && t <= 8 ? 2 : 0.15],
    ],
    a = 0;
  for (let [t, n] of i) t !== e && (a += n);
  let o = n() * a;
  for (let [t, n] of i) if (t !== e && ((o -= n), o <= 0)) return t;
  return e === `clear` ? `cloudy` : `clear`;
}
function up(e, t) {
  return e === `storm` ? 1 + t() : e === `rain` ? 1 + t() * 1.5 : 2 + t() * 3;
}
var dp = !1;
function fp() {
  if (dp) return;
  dp = !0;
  let e = _e;
  ((e.fog_pars_vertex = `
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogRel;
#endif`),
    (e.fog_vertex = `
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogRel = mvPosition.xyz * mat3( viewMatrix );
#endif`),
    (e.fog_pars_fragment = `
#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  varying vec3 vFogRel;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
  float taipeiHaze( float dist, float relY ) {
    // fogNear = haze scale (integer part) + height-scale code (fraction, see fog.ts)
    float dens = 0.25 / max( floor( fogNear ), 1.0 );
    float fh = fract( fogNear );
    float H = fh > 0.0 ? ${(90).toFixed(1)} + fh * 500.0 : ${(90).toFixed(1)};
    float camY = max( cameraPosition.y, 0.0 );
    float k = clamp( relY / H, -60.0, 60.0 );
    float ht = 1.0 - 0.5 * k;
    if ( abs( k ) > 0.01 ) ht = ( 1.0 - exp( - k ) ) / k;
    float tau = dens * dist * exp( - camY / H ) * ht;
    return 1.0 - exp( - tau );
  }
#endif`),
    (e.fog_fragment = `
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = taipeiHaze( length( vFogRel ), vFogRel.y );
    #ifndef FOG_NO_CLIP
      // near the far plane: dissolve (ordered dither) into the far layer's LOD instead of a fog wall
      float fogClip = smoothstep( fogFar * 0.91, fogFar * 0.985, vFogDepth );
      if ( fogClip > 0.0 ) {
        vec2 fq = mod( floor( gl_FragCoord.xy ), 4.0 );
        vec2 f0 = mod( fq, 2.0 );
        vec2 f1 = floor( fq * 0.5 );
        float th = ( 4.0 * mod( 2.0 * f0.x + 3.0 * f0.y, 4.0 ) + mod( 2.0 * f1.x + 3.0 * f1.y, 4.0 ) + 0.5 ) / 16.0;
        if ( fogClip > th ) discard;
      }
    #endif
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`));
}
function pp(e, t) {
  let n = Math.min(0.998, Math.max(0, (t - 90) / 500));
  return Math.max(1, Math.floor(e)) + n;
}
function mp(e, t, n, r) {
  let i = 0.25 / Math.max(Math.floor(e), 1),
    a = e - Math.floor(e),
    o = a > 0 ? 90 + a * 500 : 90,
    s = Math.max(-60, Math.min(60, r / o)),
    c = Math.abs(s) > 0.01 ? (1 - Math.exp(-s)) / s : 1 - 0.5 * s;
  return 1 - Math.exp(-i * t * Math.exp(-Math.max(0, n) / o) * c);
}
var hp = (e, t) =>
  e.dir === t.dir &&
  e.dirShadow === t.dirShadow &&
  e.point === t.point &&
  e.spot === t.spot &&
  e.hemi === t.hemi &&
  e.unsupported === t.unsupported;
function gp(e, t) {
  let n = { dir: 0, dirShadow: 0, point: 0, spot: 0, hemi: 0, unsupported: !1 };
  return (
    e.traverseVisible((e) => {
      let r = e;
      r.isLight &&
        e !== t &&
        (r.isDirectionalLight
          ? r.castShadow
            ? n.dirShadow++
            : n.dir++
          : r.isPointLight
            ? r.castShadow
              ? (n.unsupported = !0)
              : n.point++
            : r.isSpotLight
              ? r.castShadow || r.map
                ? (n.unsupported = !0)
                : n.spot++
              : r.isHemisphereLight
                ? n.hemi++
                : r.isAmbientLight || (n.unsupported = !0));
    }),
    n
  );
}
var _p = class {
    dir;
    hemi;
    group = new g();
    extra = [];
    sig = null;
    constructor(e, t) {
      ((this.dir = e), (this.hemi = t), (this.group.name = `env-light-rig`));
    }
    sync(e, t) {
      if (this.sig && hp(this.sig, e)) return !1;
      ((this.renderer = t), (this.sig = { ...e }));
      for (let e of this.extra) (this.group.remove(e), e.dispose());
      if (((this.extra.length = 0), e.unsupported))
        return (this.dir && (this.dir.castShadow = !1), !0);
      let n = e.dirShadow,
        r = e.dir,
        i = e.hemi;
      (this.dir &&
        (n > 0
          ? (this.shadowed(this.dir), n--)
          : ((this.dir.castShadow = !1), r > 0 ? r-- : (r = -1))),
        this.hemi && i--);
      let a = (e) => {
        ((e.intensity = 0), this.extra.push(e), this.group.add(e));
      };
      for (let e = 0; e < n; e++) {
        let e = new m(16777215, 0);
        (this.shadowed(e), a(e), this.group.add(e.target));
      }
      for (let e = 0; e < r; e++) a(new m(16777215, 0));
      for (let t = 0; t < e.point; t++) a(new P(16777215, 0, 1, 2));
      for (let t = 0; t < e.spot; t++) a(new x(16777215, 0, 1, 0.5, 0, 2));
      for (let e = 0; e < i; e++) a(new I(16777215, 16777215, 0));
      for (let e of this.extra) e.name = `env-rig-` + e.type;
      return !0;
    }
    renderer = null;
    shadowed(e) {
      if (
        ((e.castShadow = !0),
        (e.shadow.autoUpdate = !1),
        (e.shadow.needsUpdate = !1),
        e.shadow.map)
      )
        return;
      let t = this.renderer,
        n = !t || t.shadowMap.type === 1 || t.shadowMap.type === 2;
      e.shadow.mapSize.set(4, 4);
      let r = new be(4, 4, {
        format: Ee,
        type: _,
        depthBuffer: !0,
        generateMipmaps: !1,
        minFilter: w,
        magFilter: w,
      });
      r.texture.name = `env-rig.shadowMap`;
      let i = new u(4, 4, O);
      if (
        ((i.format = C),
        (i.name = `env-rig.shadowMapDepth`),
        n
          ? ((i.compareFunction = t?.state.buffers.depth.getReversed()
              ? 518
              : 515),
            (i.minFilter = i.magFilter = ge))
          : (i.minFilter = i.magFilter = w),
        (r.depthTexture = i),
        (e.shadow.map = r),
        t)
      ) {
        let e = t.getRenderTarget();
        (t.setRenderTarget(r), t.clear(!0, !0, !1), t.setRenderTarget(e));
      }
    }
    dispose() {
      for (let e of this.extra) e.dispose();
      this.extra.length = 0;
    }
  },
  vp = class {
    scene = new s();
    camera = new i(60, 1, 500, 12e3);
    sun = new m(16777215, 1);
    hemi = new I(16777215, 4473924, 1);
    enabled = !0;
    onPre = null;
    onFarCamera = null;
    nearFrac = 0.8;
    restoreAutoClearColor = null;
    rig = new _p(this.sun, this.hemi);
    constructor() {
      ((this.scene.name = `env-far-layer`),
        (this.scene.matrixWorldAutoUpdate = !0),
        this.scene.add(this.sun, this.sun.target, this.hemi, this.rig.group),
        (this.camera.matrixAutoUpdate = !1),
        (this.camera.matrixWorldAutoUpdate = !1));
    }
    hookBefore = null;
    hookAfter = null;
    mainScene = null;
    mainCamera = null;
    ensureInstalled() {
      let e = this.mainScene;
      e &&
        this.mainCamera &&
        (e.onBeforeRender !== this.hookBefore ||
          e.onAfterRender !== this.hookAfter) &&
        this.install(e, this.mainCamera);
    }
    prevBefore = null;
    prevAfter = null;
    install(e, t) {
      ((this.mainScene = e),
        (this.mainCamera = t),
        e.onBeforeRender !== this.hookBefore &&
          (this.prevBefore = e.onBeforeRender),
        e.onAfterRender !== this.hookAfter &&
          (this.prevAfter = e.onAfterRender));
      let n = this.prevBefore,
        r = this.prevAfter;
      ((e.onBeforeRender = (r, i, a, o, s, c) => {
        (n.call(e, r, i, a, o, s, c),
          a === t && (this.onPre?.(t), this.enabled && this.renderFar(r, t)));
      }),
        (e.onAfterRender = (t, n, i, a, o, s) => {
          (this.restoreAutoClearColor !== null &&
            ((t.autoClearColor = this.restoreAutoClearColor),
            (this.restoreAutoClearColor = null)),
            r.call(e, t, n, i, a, o, s));
        }),
        (this.hookBefore = e.onBeforeRender),
        (this.hookAfter = e.onAfterRender));
    }
    renderFar(e, t) {
      let n = this.camera,
        r = Math.max(50, t.far * this.nearFrac),
        i = Math.max(12e3, t.far * 1.5);
      ((n.fov !== t.fov ||
        n.aspect !== t.aspect ||
        n.near !== r ||
        n.far !== i ||
        n.zoom !== t.zoom) &&
        ((n.fov = t.fov),
        (n.aspect = t.aspect),
        (n.near = r),
        (n.far = i),
        (n.zoom = t.zoom),
        n.updateProjectionMatrix()),
        n.matrixWorld.copy(t.matrixWorld),
        n.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.onFarCamera?.(n));
      let a = e.autoClear;
      ((e.autoClear = !1),
        e.clear(!0, !0, !1),
        e.render(this.scene, n),
        e.clearDepth(),
        (e.autoClear = a),
        this.restoreAutoClearColor === null &&
          (this.restoreAutoClearColor = e.autoClearColor),
        (e.autoClearColor = !1));
    }
  },
  yp = `
float eHash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float eHash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
float eNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = eHash12(i);
  float b = eHash12(i + vec2(1.0, 0.0));
  float c = eHash12(i + vec2(0.0, 1.0));
  float d = eHash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float eFbm4(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { s += a * eNoise(p); p = p * 2.07 + vec2(17.13, 9.71); a *= 0.5; }
  return s;
}
float eFbm5(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { s += a * eNoise(p); p = p * 2.03 + vec2(11.7, 5.3); a *= 0.5; }
  return s;
}
`,
  bp = `
uniform vec3 uSkySun;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uSunset;
uniform vec3 uSunGlow;
`,
  xp = `
vec3 skyBase(vec3 dir) {
  float y = clamp(dir.y, 0.0, 1.0);
  float t = 1.0 - pow(1.0 - y, 2.6);
  vec3 col = mix(uHorizon, uZenith, t);
  float hl = length(dir.xz);
  float sl = length(uSkySun.xz);
  float side = (hl > 1e-4 && sl > 1e-4) ? dot(dir.xz / hl, uSkySun.xz / sl) * 0.5 + 0.5 : 0.5;
  float band = exp(-y * 5.5) * side * side;
  col += uSunset * band;
  float mu = max(dot(dir, uSkySun), 0.0);
  col += uSunGlow * (0.16 * pow(mu, 5.0) + 0.85 * pow(mu, 42.0));
  return col;
}
`;
function Sp() {
  return {
    uSkySun: { value: new U(0, 1, 0) },
    uZenith: { value: new W() },
    uHorizon: { value: new W() },
    uSunset: { value: new W() },
    uSunGlow: { value: new W() },
    uSunDisk: { value: new W() },
    uMoonDir: { value: new U(0, -1, 0) },
    uMoonCol: { value: new W() },
    uCloudLit: { value: new W() },
    uCloudAmb: { value: new W() },
    uCloudCover: { value: 0.3 },
    uStars: { value: 0 },
    uFlash: { value: 0 },
    uFlashDir: { value: new U(1, 0.2, 0).normalize() },
    uWindOff: { value: new ve() },
    uSkyTime: { value: 0 },
    uGround: { value: new W(0.08, 0.075, 0.07) },
    uEnvMode: { value: 0 },
    uRainbow: { value: 0 },
    uShafts: { value: 0 },
  };
}
var Cp = `
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
#ifdef USE_REVERSED_DEPTH_BUFFER
  gl_Position = vec4(p.xy, 0.0, p.w); // reversed-Z: the far plane is depth 0
#else
  gl_Position = p.xyww;
#endif
}
`,
  wp = `
${bp}
uniform vec3 uSunDisk;
uniform vec3 uMoonDir;
uniform vec3 uMoonCol;
uniform vec3 uCloudLit;
uniform vec3 uCloudAmb;
uniform float uCloudCover;
uniform float uStars;
uniform float uFlash;
uniform vec3 uFlashDir;
uniform vec2 uWindOff;
uniform float uSkyTime;
uniform vec3 uGround;
uniform float uEnvMode;
uniform float uRainbow;
uniform float uShafts;
varying vec3 vDir;
vec3 skyHue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
${yp}
${xp}

void main() {
  vec3 dir = normalize(vDir);
  float y = dir.y;
  vec3 col = skyBase(dir);
  float mu = dot(dir, uSkySun);
  float mm = dot(dir, uMoonDir);

  // ---- stars (few: Taipei light pollution)
  if (uStars > 0.002 && y > 0.03 && uEnvMode < 0.5) {
    vec3 sp = dir * 120.0;
    vec3 ci = floor(sp);
    float h = eHash13(ci);
    if (h > 0.9952) {
      vec3 jit = vec3(eHash13(ci + 1.7), eHash13(ci + 3.1), eHash13(ci + 5.3)) * 0.6 + 0.2;
      float d = length(fract(sp) - jit);
      float mag = (h - 0.9952) / 0.0048;
      float tw = 0.7 + 0.3 * sin(uSkyTime * (1.5 + h * 30.0) + h * 400.0);
      col += vec3(0.85, 0.92, 1.0) * smoothstep(0.17, 0.0, d) * (0.15 + mag * mag * 1.6) * tw * uStars * smoothstep(0.03, 0.3, y);
    }
  }

  // ---- moon
  if (mm > 0.95 && uEnvMode < 0.5) {
    float disk = smoothstep(0.999905, 0.99993, mm);
    vec3 mr = (dir - uMoonDir) * 2600.0;
    float mottle = 0.7 + 0.3 * eNoise(mr.xy + mr.zx * 0.7);
    col += uMoonCol * (disk * mottle * 0.75);
  }
  col += uMoonCol * (0.012 * pow(max(mm, 0.0), 1500.0) + 0.01 * pow(max(mm, 0.0), 60.0));

  // ---- clouds
  float dens = 0.0;
  if (uEnvMode > 0.5) {
    // env-map capture: no per-pixel clouds (cheap); overcast is already in the gradient colours
    col = mix(col, mix(uCloudLit, uCloudAmb, 0.55), uCloudCover * uCloudCover * 0.5 * smoothstep(0.0, 0.3, y));
  } else if (y > -0.04 && uCloudCover > 0.01) {
    float yy = max(y, 0.0);
    vec2 cp = dir.xz / (yy + 0.085) * 0.4 + uWindOff;
    #ifdef SKY_LOW
    float n = eFbm4(cp * 1.8);
    #else
    float n = eFbm5(cp * 1.8);
    #endif
    float n2 = eNoise(cp * 0.31 + 7.3);
    float base = n * 0.9 + n2 * 0.38 - 0.12;
    float cov = uCloudCover;
    float lo = 0.98 - cov * 1.02;
    dens = smoothstep(lo, lo + 0.2 + cov * 0.3, base);
    float thick = clamp((base - lo) * 1.5 + cov * 0.35, 0.0, 1.0);
    // self-shadowing: compare with the density one step towards the sun (lit edges face the sun,
    // backs and bases fall into shadow) → clouds read as volumes, not decals
    float shade = clamp(0.2 + thick * 0.5 + (0.5 - n) * 0.95, 0.0, 1.0);
    #ifndef SKY_LOW
    if (dens > 0.01) {
      float sl = length(uSkySun.xz);
      vec2 sxz = sl > 1e-3 ? uSkySun.xz / sl : vec2(0.0, 1.0);
      float ns = eFbm4(cp * 1.8 + sxz * (0.1 + 0.1 * (1.0 - max(uSkySun.y, 0.0))));
      float ds = (n - ns) * 0.9;
      float lit = clamp(0.5 + ds * 3.2, 0.0, 1.0);
      shade = clamp(shade * 0.6 + (1.0 - lit) * 0.55 - 0.08, 0.0, 1.0);
    }
    #endif
    vec3 cc = mix(uCloudLit, uCloudAmb, shade);
    // heavy overcast: broad darker cells / rain shafts so the sky isn't a flat sheet
    cc *= 1.0 - smoothstep(0.7, 1.0, cov) * 0.4 * smoothstep(0.3, 0.75, n2);
    cc += uSunGlow * 0.6 * pow(max(mu, 0.0), 5.0) * (1.0 - 0.55 * thick);
    cc += uMoonCol * 0.05 * pow(max(mm, 0.0), 24.0);
    cc += vec3(0.8, 0.85, 1.0) * uFlash * (0.6 + thick) * (0.4 + 0.6 * pow(max(dot(dir, uFlashDir), 0.0), 3.0));
    dens *= smoothstep(-0.03, 0.2, y);
    col = mix(col, cc, dens);
  }

  // ---- rainbow after a shower (primary 40–42°, faint reversed secondary ~51°)
  if (uRainbow > 0.001 && uEnvMode < 0.5 && y > -0.02) {
    float ang = acos(clamp(dot(dir, -uSkySun), -1.0, 1.0));
    float t1 = (ang - 0.700) / 0.036;
    float t2 = (0.905 - ang) / 0.05;
    float bow = 0.0;
    vec3 rc = vec3(0.0);
    if (t1 > -0.3 && t1 < 1.3) {
      float w = smoothstep(-0.3, 0.2, t1) * smoothstep(1.3, 0.8, t1);
      rc += skyHue(0.78 * (1.0 - clamp(t1, 0.0, 1.0))) * w;
      bow = 1.0;
    }
    if (t2 > -0.3 && t2 < 1.3) {
      float w = smoothstep(-0.3, 0.2, t2) * smoothstep(1.3, 0.8, t2) * 0.35;
      rc += skyHue(0.78 * (1.0 - clamp(t2, 0.0, 1.0))) * w;
    }
    // Alexander's dark band between the bows, brighter sky inside the primary
    float inside = smoothstep(0.72, 0.66, ang) * 0.06;
    col = col * (1.0 + inside * uRainbow) + rc * uRainbow * 0.3 * (1.0 - dens * 0.7) * smoothstep(-0.02, 0.08, y) * (0.5 + 0.5 * bow);
  }

  // ---- distant rain shafts under heavy clouds (storms / showers seen across the basin)
  if (uShafts > 0.01 && uEnvMode < 0.5 && y > -0.03 && y < 0.3) {
    float az = atan(dir.z, dir.x);
    float cols = smoothstep(0.52, 0.85, eNoise(vec2(az * 9.0 + 3.0, 0.0)) * 0.7 + eNoise(vec2(az * 23.0, 5.0)) * 0.3);
    float streak = 0.75 + 0.25 * eNoise(vec2(az * 140.0, y * 6.0 - uSkyTime * 0.8));
    float h = smoothstep(0.3, 0.02, y) * smoothstep(-0.03, 0.02, y);
    vec3 shaftCol = mix(uCloudAmb, uHorizon, 0.35) * 0.8;
    col = mix(col, shaftCol, cols * streak * h * uShafts * 0.75);
  }

  // ---- sun disk
  float sd = smoothstep(0.99988, 0.99993, mu);
  col += uSunDisk * sd * (1.0 - dens);

  // ---- lightning glow in open sky
  col += vec3(0.55, 0.6, 0.8) * uFlash * 0.25 * (0.3 + 0.7 * pow(max(dot(dir, uFlashDir), 0.0), 4.0));

  // ---- below horizon
  if (y < 0.0) {
    if (uEnvMode > 0.5) col = mix(col, uGround, smoothstep(0.0, -0.2, y));
    else col *= 1.0 - 0.12 * smoothstep(0.0, -0.25, y);
  }

  // multiplicative dither against banding in the gradient
  col *= 1.0 + (eHash12(gl_FragCoord.xy + fract(uSkyTime * 7.0) * 91.0) - 0.5) * 0.018;
  gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Tp(e, t, n = !1, r) {
  let i = t ? { ...e, uEnvMode: { value: 1 } } : e,
    a = wp;
  return (
    r &&
      ((i = { ...i, ...r.uniforms }),
      (a = a
        .replace(`void main() {`, `${r.pars}\nvoid main() {`)
        .replace(`  // ---- sun disk`, `${r.main}\n  // ---- sun disk`))),
    new E({
      defines: n ? { SKY_LOW: `` } : {},
      name: t ? `env-sky-capture` : `env-sky`,
      uniforms: i,
      vertexShader: Cp,
      fragmentShader: a,
      side: 1,
      depthWrite: !1,
      depthTest: !0,
      fog: !1,
    })
  );
}
function Ep(e) {
  let t = new h(1, 48, 24),
    n = new M(t, e);
  return (
    (n.frustumCulled = !1),
    (n.renderOrder = 1e4),
    (n.name = `env-sky`),
    n
  );
}
var Dp = class {
  cell;
  x0;
  z0;
  nx;
  nz;
  bits;
  count;
  far = null;
  constructor(e, t = 8, n = 640, r, i = 0, a = 32) {
    this.cell = t;
    let o = e.bounds,
      s = e.dataset.water,
      c = i > 0 && r ? a : t;
    ((this.x0 = Math.floor((o.minX - n) / c) * c),
      (this.z0 = Math.floor((o.minZ - n) / c) * c),
      (this.nx = Math.ceil((o.maxX + n - this.x0) / c) * (c / t)),
      (this.nz = Math.ceil((o.maxZ + n - this.z0) / c) * (c / t)),
      (this.bits = new Uint8Array(this.nx * this.nz)));
    let l = s.at,
      u = 0;
    for (let e = 0; e < this.nz; e++) {
      let n = this.z0 + (e + 0.5) * t;
      for (let i = 0; i < this.nx; i++) {
        let a = this.x0 + (i + 0.5) * t;
        (a < s.westX || n < s.northZ || (l && l(a, n)) || (r && r(a, n))) &&
          ((this.bits[e * this.nx + i] = 1), u++);
      }
    }
    if (i > 0 && r) {
      let e = Math.floor(-i / a) * a,
        n = Math.ceil((i - e) / a),
        o = new Uint8Array(n * n),
        s = this.x0 + this.nx * t,
        c = this.z0 + this.nz * t;
      for (let t = 0; t < n; t++) {
        let i = e + (t + 0.5) * a;
        for (let l = 0; l < n; l++) {
          let d = e + (l + 0.5) * a;
          (d > this.x0 && d < s && i > this.z0 && i < c) ||
            (r(d, i) && ((o[t * n + l] = 1), u++));
        }
      }
      this.far = { cell: a, x0: e, z0: e, n, bits: o };
    }
    this.count = u;
  }
  at(e, t) {
    let n = Math.floor((e - this.x0) / this.cell),
      r = Math.floor((t - this.z0) / this.cell);
    if (n < 0 || r < 0 || n >= this.nx || r >= this.nz) {
      let n = this.far;
      if (!n) return !1;
      let r = Math.floor((e - n.x0) / n.cell),
        i = Math.floor((t - n.z0) / n.cell);
      return (
        r >= 0 && i >= 0 && r < n.n && i < n.n && n.bits[i * n.n + r] === 1
      );
    }
    return this.bits[r * this.nx + n] === 1;
  }
  rects(e = 4) {
    let t = Op(this.bits, this.nx, this.nz, this.x0, this.z0, this.cell, e),
      n = this.far;
    return (n && t.push(...Op(n.bits, n.n, n.n, n.x0, n.z0, n.cell, e)), t);
  }
};
function Op(e, t, n, r, i, a, o) {
  let s = [],
    c = new Map();
  for (let l = 0; l <= n; l++) {
    let u = new Set();
    if (l < n) {
      let n = 0;
      for (; n < t;) {
        if (!e[l * t + n]) {
          n++;
          continue;
        }
        let o = n + 1;
        for (; o < t && e[l * t + o];) o++;
        let s = n * 65536 + o,
          d = c.get(s);
        (d
          ? (d.z1 = i + (l + 1) * a)
          : c.set(s, {
              x0: r + n * a,
              x1: r + o * a,
              z0: i + l * a,
              z1: i + (l + 1) * a,
            }),
          u.add(s),
          (n = o));
      }
    }
    for (let [e, t] of c)
      u.has(e) ||
        (s.push({ x0: t.x0 - o, z0: t.z0 - o, x1: t.x1 + o, z1: t.z1 + o }),
        c.delete(e));
  }
  return s;
}
function kp(e, t) {
  let n = Math.imul(e | 0, 374761393) ^ Math.imul(t | 0, 668265263);
  return (
    (n = Math.imul(n ^ (n >>> 13), 1274126177)),
    (n ^= n >>> 16),
    (n >>> 0) / 4294967296
  );
}
function Ap(e, t = 0) {
  return { inset: 0.01 + 0.04 * kp(e, 7919 + t), dh: 0.05 * kp(e, 104729 + t) };
}
function jp(e, t) {
  let n = Math.floor(e),
    r = Math.floor(t),
    i = e - n,
    a = t - r,
    o = i * i * (3 - 2 * i),
    s = a * a * (3 - 2 * a),
    c = kp(n, r),
    l = kp(n + 1, r),
    u = kp(n, r + 1),
    d = kp(n + 1, r + 1);
  return c + (l - c) * o + (u - c) * s + (c - l - u + d) * o * s;
}
function Mp(e, t, n = 4) {
  let r = 0,
    i = 0.5,
    a = 0;
  for (let o = 0; o < n; o++)
    ((r += i * jp(e, t)),
      (a += i),
      (e = e * 2.03 + 17.1),
      (t = t * 2.03 + 9.3),
      (i *= 0.5));
  return r / a;
}
function Np(e, t, n = 4) {
  let r = 0,
    i = 0.5,
    a = 0,
    o = 1;
  for (let s = 0; s < n; s++) {
    let n = 1 - Math.abs(jp(e, t) * 2 - 1);
    ((n *= n),
      (n *= o),
      (o = Math.min(1, n * 1.6)),
      (r += i * n),
      (a += i),
      (e = e * 2.1 + 5.3),
      (t = t * 2.1 + 11.9),
      (i *= 0.5));
  }
  return r / a;
}
var Pp = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  Fp = -3.2,
  Ip = { x: -330, z: -1130 },
  Lp = 55,
  Rp = 110,
  zp = 300,
  Bp = -0.04,
  Vp = 5200,
  Hp = class {
    plan;
    B;
    hotelPad = Lp;
    basin;
    riverX;
    riverNorthZ;
    sw;
    gapY;
    water;
    rt;
    constructor(e, t) {
      ((this.plan = e), (this.B = e.bounds));
      let n = e.dataset.water;
      ((this.riverX = n.westX),
        (this.riverNorthZ = n.northZ),
        (this.sw = e.sidewalkHeight),
        (this.basin = Number.isFinite(n.westX) && Number.isFinite(n.northZ)),
        (this.rt = this.basin ? null : (t ?? null)),
        (this.water = this.basin
          ? null
          : new Dp(e, 8, 640, this.rt?.water, this.rt?.waterExtent ?? 0)),
        (this.gapY = this.basin
          ? Bp
          : Math.min(Fp, ...(n.levels ?? []).map((e) => e.level - 2.5))));
    }
    raised(e, t) {
      return !this.basin && this.plan.terrainLift(e, t) > 0.5;
    }
    westBank(e) {
      return (
        -1212 +
        22 * Math.sin(e * 0.0021 + 1.3) +
        12 * Math.sin(e * 0.0063 + 0.4)
      );
    }
    northBank(e) {
      return (
        -1135 +
        16 * Math.sin(e * 0.0027 + 0.6) +
        10 * Math.sin(e * 0.0071) +
        48 * Math.exp(-(((e + 330) / 170) ** 2))
      );
    }
    outside(e, t) {
      let n = this.B,
        r = Math.max(n.minX - e, 0, e - n.maxX),
        i = Math.max(n.minZ - t, 0, t - n.maxZ);
      return Math.hypot(r, i);
    }
    inCity(e, t) {
      let n = this.B;
      return e >= n.minX && e <= n.maxX && t >= n.minZ && t <= n.maxZ;
    }
    reachable(e, t) {
      return e >= this.riverX && t >= this.riverNorthZ;
    }
    bankDist(e, t) {
      let n = this.westBank(t) - e,
        r = e > this.riverX - 4 ? this.northBank(e) - t : -1e9;
      return Math.max(n, r);
    }
    dazhiPlain(e, t) {
      if (!this.basin || e < this.riverX - 4 || e > 2400) return 0;
      let n = this.northBank(e) - t,
        r = 700 - 380 * G(200, 900, e),
        i = this.knoll(e, t);
      return (
        (1 - G(2e3, 2400, e)) * (1 - G(r - 90, r, n)) * (1 - G(0.2, 0.55, i))
      );
    }
    knoll(e, t) {
      let n = (e - Ip.x) / 250,
        r = (t - Ip.z + 90) / 190;
      return Math.exp(-1.6 * (n * n + r * r));
    }
    yuanshan(e, t) {
      let n = e - Ip.x,
        r = t - Ip.z,
        i = n / 230,
        a = (r + 110) / 165,
        o =
          Rp *
          Math.exp(-2 * (i * i + a * a)) *
          (1 + 0.1 * (Mp(e / 80 + 2.1, t / 80 - 0.7, 2) - 0.5)),
        s = Lp * (1 - G(58, 120, Math.hypot(n * 0.85, r))),
        c = Pp(0.5 + (0.5 * (o - s)) / 14);
      return s + (o - s) * c + 14 * c * (1 - c) * 0.5;
    }
    northLand(e, t) {
      let n = this.northBank(e) - t,
        r = G(250, 900, e),
        i =
          2.2 +
          20 *
            G(420, 1250, n) *
            (0.55 + 0.45 * Mp(e / 700 + 1.3, t / 700 - 4.1, 2)),
        a = 1350 - 650 * r,
        o = G(a, a + 1300, n);
      if (o > 0) {
        let n = Mp(e / 1100 + 3.1, t / 1100 - 1.7, 4),
          a = Np(e / 800 - 7.3, t / 800 + 2.9, 3),
          s = G(0.25, 0.8, n * 0.75 + a * 0.35) ** 1.2;
        ((i += o * ((1 - r) * (230 + 600 * s) + r * (130 + 300 * s))),
          (i += o * (Mp(e / 520, t / 520, 3) - 0.5) * 0.12 * i));
      }
      return (
        Math.hypot(e - Ip.x, t - Ip.z) < zp * 1.5 &&
          (i = Math.max(i, this.yuanshan(e, t))),
        i
      );
    }
    edgeUrban(e, t) {
      if (!this.basin)
        return this.rt && this.rt.forest ? 1 - this.rt.forest(e, t) : 1;
      let n = this.B,
        r = 0;
      return (
        e > n.maxX - 4 &&
          e < 1990 &&
          t > n.minZ - 40 &&
          t < 170 &&
          (r =
            G(1990, 1930, e) * G(170, 120, t) * G(n.maxX - 4, n.maxX + 4, e)),
        t > n.maxZ - 4 &&
          t < 1500 &&
          e > -990 &&
          e < 1100 &&
          (r = Math.max(
            r,
            G(1500, 1440, t) * G(1100, 1040, e) * G(n.maxZ - 4, n.maxZ + 4, t),
          )),
        r
      );
    }
    relief(e, t, n) {
      let r = Math.hypot(e - 100, t + 250),
        i = G(1750, 3300, r),
        a = Math.atan2(t + 250, e - 100) - -2.2;
      a = Math.atan2(Math.sin(a), Math.cos(a));
      let o = Math.exp(-(a * a) / 0.05),
        s = Mp(e / 1300 + 3.1, t / 1300 - 1.7, 4),
        c = Np(e / 900 - 7.3, t / 900 + 2.9, 3),
        l = Mp(e / 3e3, t / 3e3, 2);
      return (
        i *
          (120 +
            430 * G(0.25, 0.8, s * 0.75 + c * 0.35) ** 1.3 * (0.6 + 0.8 * l)) *
          (1 - 0.9 * o) +
        (n > 20
          ? (Mp(e / 520, t / 520, 3) - 0.5) * Math.min(1, n / 150) * 0.16 * n
          : 0)
      );
    }
    height(e, t) {
      let n = this.plan;
      if (!this.basin) {
        if (this.water.at(e, t))
          return Math.min(Fp, n.waterLevelAt(e, t) - 1.7);
        let r = this.rt;
        return (
          this.sw +
          n.hillHeight(e, t) +
          n.terrainLift(e, t) +
          (r && r.height ? r.height(e, t) : 0)
        );
      }
      if (this.inCity(e, t)) return Bp;
      if (this.reachable(e, t)) {
        let r =
            this.sw +
            n.hillHeight(
              Math.max(e, this.riverX + 0.01),
              Math.max(t, this.riverNorthZ + 0.01),
            ),
          i = G(750, 1350, this.outside(e, t));
        return i <= 0 ? r : r + i * this.relief(e, t, r);
      }
      let r = this.westBank(t) - e,
        i = e > this.riverX - 4 ? this.northBank(e) - t : -1e9,
        a;
      if (i > r) a = this.northLand(e, t);
      else {
        let r = n.hillHeight(e, t),
          i = r > 160 ? 160 + (r - 160) * 0.62 : r;
        a = Math.max(2.2, i + this.relief(e, t, i));
      }
      let o = Math.max(r, i),
        s = 10 + 1.1 * Math.min(a, 120),
        c = G(-8, s, o);
      if (i > r) {
        let n = G(0.25, 0.5, this.knoll(e, t)) * G(10, 40, a);
        n > 0 && (c = Math.max(c, n * G(-4, 24, o)));
      }
      return Fp + (a - Fp) * c;
    }
    kind(e, t) {
      return this.inCity(e, t)
        ? this.basin || !this.raised(e, t)
          ? `city`
          : `land`
        : this.basin
          ? this.reachable(e, t)
            ? `land`
            : this.bankDist(e, t) > 6
              ? `farbank`
              : `water`
          : this.water.at(e, t)
            ? `water`
            : `land`;
    }
  };
function Up(e, t) {
  let n = [];
  for (let [t, r, i] of e) {
    let e = Math.max(1, Math.round((r - t) / i));
    for (let i = 0; i <= e; i++) n.push(t + ((r - t) * i) / e);
  }
  (n.push(...t), n.sort((e, t) => e - t));
  let r = [];
  for (let e of n) (!r.length || e - r[r.length - 1] > 0.6) && r.push(e);
  for (let e of t) {
    let t = 0;
    for (let n = 1; n < r.length; n++)
      Math.abs(r[n] - e) < Math.abs(r[t] - e) && (t = n);
    r[t] = e;
  }
  return r;
}
var Wp = (e, t, n) => new W(e, t, n),
  Gp = {
    forestDark: Wp(0.03, 0.066, 0.028),
    forest: Wp(0.052, 0.105, 0.036),
    forestLight: Wp(0.11, 0.17, 0.05),
    bamboo: Wp(0.14, 0.2, 0.06),
    lawn: Wp(0.12, 0.2, 0.06),
    rock: Wp(0.15, 0.135, 0.11),
    mud: Wp(0.075, 0.068, 0.05),
    urban: Wp(0.16, 0.155, 0.145),
    gap: Wp(0.09, 0.088, 0.085),
    distant: Wp(0.05, 0.085, 0.05),
  },
  Kp = { x0: 892, x1: 1052, z0: 274, z1: 412, step: 2.5 };
function qp(e, t, n, r) {
  let i = t.length,
    a = n.length,
    o = i * a,
    s = new Float32Array(o * 3),
    c = new Float32Array(o * 3),
    l = new Float32Array(o * 3),
    u = new Float32Array(o * 2),
    d = new W(),
    f = new W();
  for (let o = 0; o < a; o++)
    for (let p = 0; p < i; p++) {
      let m = o * i + p,
        h = t[p],
        g = n[o],
        _ = r[m];
      ((s[m * 3] = h), (s[m * 3 + 1] = _), (s[m * 3 + 2] = g));
      let v = Math.max(0, p - 1),
        y = Math.min(i - 1, p + 1),
        b = Math.max(0, o - 1),
        x = Math.min(a - 1, o + 1),
        S = (r[o * i + y] - r[o * i + v]) / (t[y] - t[v]),
        C = (r[x * i + p] - r[b * i + p]) / (n[x] - n[b]),
        w = Math.hypot(S, 1, C);
      ((c[m * 3] = -S / w), (c[m * 3 + 1] = 1 / w), (c[m * 3 + 2] = -C / w));
      let T = Math.hypot(S, C),
        E = 0;
      if (p > 0 && p < i - 1 && o > 0 && o < a - 1) {
        let e = r[o * i + p - 1],
          a = r[o * i + p + 1],
          s = r[(o - 1) * i + p],
          c = r[(o + 1) * i + p],
          l = t[p] - t[p - 1],
          u = t[p + 1] - t[p],
          d = n[o] - n[o - 1],
          f = n[o + 1] - n[o];
        E =
          (2 * ((a - _) / u - (_ - e) / l)) / (l + u) +
          (2 * ((c - _) / f - (_ - s) / d)) / (d + f);
      }
      let D = e.kind(h, g),
        O = 1;
      if (D === `city`) (d.copy(Gp.gap), (O = 0), (u[m * 2 + 1] = 1));
      else {
        let t = jp(h / 900 + 3.3, g / 900 - 1.1);
        (d.copy(Gp.forestDark).lerp(Gp.forest, 0.35 + 0.65 * t),
          t > 0.66 && d.lerp(Gp.bamboo, (t - 0.66) * 1.4));
        let n = 1 - G(1.5, 9, _ - (D === `farbank` ? 2.2 : e.sw));
        (d.lerp(Gp.lawn, n * 0.85), (O *= 1 - n * 0.75));
        let r = D === `land` ? e.edgeUrban(h, g) * (1 - G(5, 14, _ - e.sw)) : 0;
        (r > 0 && (d.lerp(Gp.urban, r * 0.9), (O *= 1 - r)),
          T > 1.25 && d.lerp(Gp.rock, G(1.25, 2.6, T) * (0.6 - 0.42 * O)));
        let i = G(0.002, 0.02, E) * G(0.08, 0.4, T),
          a = G(0.004, 0.03, -E) * G(0.08, 0.4, T);
        if ((d.multiplyScalar(1 - 0.38 * i + 0.12 * a), D === `farbank`)) {
          let t = e.dazhiPlain(h, g),
            n = (1 - G(4, 18, _)) * (e.bankDist(h, g) > 50 ? 1 : 0.3);
          (d.lerp(Gp.urban, Math.max(n, t) * 0.85), (O *= 1 - Math.max(n, t)));
        }
        (D === `water` || D === `farbank`) &&
          _ < 0.6 &&
          (d.copy(Gp.mud).lerp(f.setRGB(0.1, 0.12, 0.06), G(-2, 0.6, _)),
          (O = 0));
        let o = G(2600, 4500, Math.hypot(h, g));
        d.lerp(Gp.distant, o * 0.5);
      }
      ((l[m * 3] = d.r),
        (l[m * 3 + 1] = d.g),
        (l[m * 3 + 2] = d.b),
        (u[m * 2] = O));
    }
  return { pos: s, nrm: c, col: l, ter: u };
}
function Jp(e, t, n, r) {
  let i = [],
    a = Math.max(1, Math.round((t - e) / n));
  for (let n = 0; n <= a; n++) i.push(e + ((t - e) * n) / a);
  for (let n of r) n > e && n < t && i.push(n);
  i.sort((e, t) => e - t);
  let o = [];
  for (let e of i) (!o.length || e - o[o.length - 1] > 0.05) && o.push(e);
  return o;
}
function Yp(e, t, n) {
  let r = 0;
  for (; r + 1 < e.length - 1 && e[r + 1] < t;) r++;
  let i = (t - e[r]) / Math.max(1e-6, e[r + 1] - e[r]);
  return n(r) + (n(r + 1) - n(r)) * Math.min(1, Math.max(0, i));
}
function Xp(e, t, n = [Kp], r = 1) {
  let i = e.B,
    a = Vp,
    o = (t ? 1.6 : 1) * r,
    s = Up(
      [
        [-5200, -2600, 260 * o],
        [-2600, -1500, 48 * o],
        [-1500, -960, 22 * o],
        [-960, 900, 26 * o],
        [900, 1900, 14 * o],
        [1900, 2700, 45 * o],
        [2700, a, 260 * o],
      ],
      [
        i.minX,
        i.maxX,
        ...(e.basin ? [e.riverX, e.riverX - 1.5] : []),
        ...n.flatMap((e) => [e.x0, e.x1]),
      ],
    ),
    c = Up(
      [
        [-5200, -2700, 260 * o],
        [-2700, -1500, 48 * o],
        [-1500, -1030, 16 * o],
        [-1030, 560, 24 * o],
        [560, 1500, 14 * o],
        [1500, 2700, 45 * o],
        [2700, a, 260 * o],
      ],
      [
        i.minZ,
        i.maxZ,
        ...(e.basin ? [e.riverNorthZ, e.riverNorthZ - 1.5] : []),
        ...n.flatMap((e) => [e.z0, e.z1]),
      ],
    ),
    l = s.length,
    u = c.length,
    f = l * u,
    p = new Float32Array(f);
  for (let t = 0; t < u; t++)
    for (let n = 0; n < l; n++) p[t * l + n] = e.height(s[n], c[t]);
  let m = qp(e, s, c, p),
    h = (e, t) => n.some((n) => e > n.x0 && e < n.x1 && t > n.z0 && t < n.z1),
    g = new Uint32Array((l - 1) * (u - 1) * 6 + 6),
    _ = 0,
    v = (e, t, n, r) => {
      if (_ + 6 > g.length) {
        let e = new Uint32Array(Math.ceil(g.length * 1.5) + 6);
        (e.set(g.subarray(0, _)), (g = e));
      }
      ((g[_] = e),
        (g[_ + 1] = n),
        (g[_ + 2] = t),
        (g[_ + 3] = t),
        (g[_ + 4] = n),
        (g[_ + 5] = r),
        (_ += 6));
    };
  for (let t = 0; t + 1 < u; t++)
    for (let n = 0; n + 1 < l; n++) {
      let i = (s[n] + s[n + 1]) / 2,
        a = (c[t] + c[t + 1]) / 2;
      if ((e.inCity(i, a) && !(r > 1 && e.raised(i, a))) || h(i, a)) continue;
      let o = t * l + n,
        u = o + 1,
        d = o + l,
        f = d + 1;
      (p[o] < -3.1500000000000004 &&
        p[u] < -3.1500000000000004 &&
        p[d] < -3.1500000000000004 &&
        p[f] < -3.1500000000000004) ||
        v(o, u, d, f);
    }
  let y = [m],
    b = f;
  for (let t of n) {
    let n = Jp(t.x0, t.x1, t.step * o, s),
      r = Jp(t.z0, t.z1, t.step * o, c),
      i = s.indexOf(t.x0),
      a = s.indexOf(t.x1),
      u = c.indexOf(t.z0),
      d = c.indexOf(t.z1);
    if (i < 0 || a < 0 || u < 0 || d < 0) continue;
    let f = s.slice(i, a + 1),
      m = c.slice(u, d + 1),
      h = n.length,
      g = r.length,
      _ = new Float32Array(h * g);
    for (let t = 0; t < g; t++)
      for (let o = 0; o < h; o++) {
        let s = n[o],
          c = r[t],
          v;
        ((v =
          t === 0
            ? Yp(f, s, (e) => p[u * l + i + e])
            : t === g - 1
              ? Yp(f, s, (e) => p[d * l + i + e])
              : o === 0
                ? Yp(m, c, (e) => p[(u + e) * l + i])
                : o === h - 1
                  ? Yp(m, c, (e) => p[(u + e) * l + a])
                  : e.height(s, c)),
          (_[t * h + o] = v));
      }
    y.push(qp(e, n, r, _));
    for (let e = 0; e + 1 < g; e++)
      for (let t = 0; t + 1 < h; t++) {
        let n = b + e * h + t,
          r = n + 1,
          i = n + h;
        v(n, r, i, i + 1);
      }
    b += h * g;
  }
  let x = b + 4,
    S = new Float32Array(x * 3),
    C = new Float32Array(x * 3),
    w = new Float32Array(x * 3),
    T = new Float32Array(x * 2),
    E = 0;
  for (let e of y)
    (S.set(e.pos, E * 3),
      C.set(e.nrm, E * 3),
      w.set(e.col, E * 3),
      T.set(e.ter, E * 2),
      (E += e.pos.length / 3));
  ([
    [i.minX, i.minZ],
    [i.maxX, i.minZ],
    [i.minX, i.maxZ],
    [i.maxX, i.maxZ],
  ].forEach(([t, n], r) => {
    (S.set([t, e.gapY, n], (b + r) * 3),
      C.set([0, 1, 0], (b + r) * 3),
      w.set([Gp.gap.r, Gp.gap.g, Gp.gap.b], (b + r) * 3),
      T.set([0, 1], (b + r) * 2));
  }),
    v(b, b + 1, b + 2, b + 3));
  let D = new V();
  (D.setAttribute(`position`, new H(S, 3)),
    D.setAttribute(`normal`, new H(C, 3)),
    D.setAttribute(`color`, new H(w, 3)),
    D.setAttribute(`aTer`, new H(T, 2)));
  let O = g.subarray(0, _);
  return (
    D.setIndex(new H(x <= 65536 ? Uint16Array.from(O) : O, 1)),
    (D.boundingSphere = new d(new U(0, 0, 0), a * 1.5)),
    { geometry: D, tris: _ / 3 }
  );
}
function Zp(e, t = !1) {
  let n = new D({ vertexColors: !0 });
  return (
    (n.name = e ? `env-terrain-far` : `env-terrain`),
    (n.defines = t
      ? { FOG_NO_CLIP: `` }
      : { FOG_NO_CLIP: ``, TERRAIN_BUMP: `` }),
    (n.onBeforeCompile = (e) => {
      ((e.uniforms.uWet = q.uWet),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
attribute vec2 aTer;
varying vec2 vTer;
varying vec3 vTWorld;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
vTer = aTer;
vTWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
          )
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
#ifdef USE_REVERSED_DEPTH_BUFFER
if (aTer.y > 0.5) gl_Position.z -= 0.0002 * gl_Position.w;
#else
if (aTer.y > 0.5) gl_Position.z += 0.0004 * gl_Position.w;
#endif`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
        uniform float uWet;
        varying vec2 vTer;
        varying vec3 vTWorld;
        ${yp}
        // triplanar value noise: the three planar projections blended by the (sharpened) normal, so steep
        // flanks get undistorted detail instead of plan-projected streaks; negligible planes are skipped
        float eTri(vec3 p, vec3 w, float s, float o) {
          float r = 0.0, ws = 0.0;
          const mat2 R = mat2(0.8, -0.6, 0.6, 0.8);
          if (w.y > 0.03) { r += w.y * eNoise(R * p.xz * s + o); ws += w.y; }
          if (w.x > 0.03) { r += w.x * eNoise(R * p.zy * s + o + 3.1); ws += w.x; }
          if (w.z > 0.03) { r += w.z * eNoise(R * p.xy * s + o + 7.3); ws += w.z; }
          return r / max(ws, 1e-3);
        }`,
          )
          .replace(
            `#include <normal_fragment_maps>`,
            `#include <normal_fragment_maps>
        vec3 tN = inverseTransformDirection(normalize(vNormal), viewMatrix);
        vec3 tW = pow(abs(tN), vec3(4.0));
        tW /= (tW.x + tW.y + tW.z);
        #ifdef TERRAIN_BUMP
        {
          // canopy / rock relief: bump-map the normal with world-space triplanar noise (lit by the sun)
          float bD = length(vTWorld - cameraPosition);
          // fade with distance and at grazing angles (avoids sparkly aliasing)
          float bk = (1.0 - smoothstep(220.0, 1000.0, bD)) * smoothstep(0.08, 0.35, abs(dot(normal, normalize(vViewPosition))));
          bk *= max(vTer.x, 0.6 * (1.0 - smoothstep(0.6, 0.85, tN.y)));
          if (bk > 0.001) {
            float hC = (eTri(vTWorld, tW, 0.15, 0.0) * 0.55 + eTri(vTWorld, tW, 0.41, 7.0) * 0.3 + eTri(vTWorld, tW, 0.97, 3.1) * 0.15) * 1.5 * bk;
            vec3 sp = -vViewPosition;
            vec3 sx = dFdx(sp), sy = dFdy(sp);
            vec2 dh = vec2(dFdx(hC), dFdy(hC));
            vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
            float bdet = dot(sx, r1) * faceDirection;
            vec3 grad = sign(bdet) * (dh.x * r1 + dh.y * r2);
            normal = normalize(abs(bdet) * normal - grad);
          }
        }
        #endif`,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
        {
          vec3 tN0 = inverseTransformDirection(normalize(vNormal), viewMatrix);
          vec3 tW0 = pow(abs(tN0), vec3(4.0));
          tW0 /= (tW0.x + tW0.y + tW0.z);
          float tDist = length(vTWorld - cameraPosition);
          vec2 wq = vTWorld.xz;
          float mid = eNoise(wq * 0.0055 + 1.7) * 0.55 + eNoise(wq * 0.017 - 4.2) * 0.45;
          float land = 1.0 - vTer.y;
          diffuseColor.rgb *= mix(1.0, 0.72 + 0.56 * mid, land * (0.35 + 0.65 * vTer.x));
          // yellow-green / blue-green hue drift across the forest
          float hueN = eNoise(wq * 0.0031 + 9.1);
          diffuseColor.rgb *= mix(vec3(1.0), mix(vec3(0.85, 0.97, 1.1), vec3(1.15, 1.05, 0.8), hueN), vTer.x * 0.8);
          float det = (1.0 - smoothstep(350.0, 1600.0, tDist)) * vTer.x;
          float cn = eTri(vTWorld, tW0, 0.15, 0.0) * 0.62 + eTri(vTWorld, tW0, 0.41, 7.0) * 0.38;
          diffuseColor.rgb *= mix(1.0, 0.6 + 0.7 * cn, det);
          // steep faces (> ~40°): exposed soil & rock break up the canopy (landslide scars, cut slopes); subtle under forest
          float steep = (1.0 - smoothstep(0.5, 0.78, tN0.y)) * land * (1.0 - smoothstep(900.0, 2200.0, tDist));
          if (steep > 0.01) {
            float rn = eTri(vTWorld, tW0, 0.045, 11.0) * 0.6 + eTri(vTWorld, tW0, 0.19, 5.0) * 0.4;
            float expo = steep * smoothstep(0.5, 0.78, rn + 0.2 * (1.0 - vTer.x)) * mix(1.0, 0.3, vTer.x);
            vec3 soil = mix(vec3(0.13, 0.09, 0.055), vec3(0.16, 0.145, 0.12), smoothstep(0.45, 0.75, eTri(vTWorld, tW0, 0.6, 2.0)));
            diffuseColor.rgb = mix(diffuseColor.rgb, soil * (0.75 + 0.5 * cn), expo * 0.65);
          }
          // river banks: a concrete / riprap revetment (堤岸護坡) from below the water line (-0.8) up to ~1.6 m on
          // every sloped bank face, with a dark wet band and a pale dry crest — not a stretched lawn
          float rvK = smoothstep(-2.6, -1.4, vTWorld.y) * (1.0 - smoothstep(1.1, 1.8, vTWorld.y)) * (1.0 - smoothstep(0.9, 0.985, tN0.y)) * land;
          if (rvK > 0.01) {
            float rr = eTri(vTWorld, tW0, 1.6, 2.0) * 0.6 + eTri(vTWorld, tW0, 0.37, 8.0) * 0.4;
            vec3 rev = mix(vec3(0.2, 0.198, 0.186), vec3(0.34, 0.33, 0.31), smoothstep(0.25, 0.75, rr));
            rev *= 0.62 + 0.38 * smoothstep(-0.9, 0.2, vTWorld.y);
            diffuseColor.rgb = mix(diffuseColor.rgb, rev, rvK);
          }
          #ifdef TERRAIN_BUMP
          // close range (walkable hills, trails, lawns): 0.3–5 m ground detail. Under forest canopy (vTer.x) the
          // canopy colour gives way to a forest floor — humus, moss cushions, leaf-litter drifts; open lawns and
          // river banks keep their grass colour and only get grass-scale variation (fresh / sun-dried patches,
          // clover). Both are mean-preserving, so no darker ring follows the camera across open ground.
          float nearK = (1.0 - smoothstep(18.0, 80.0, tDist)) * land;
          if (nearK > 0.001) {
            float f1 = eTri(vTWorld, tW0, 1.3, 3.7);
            float f2 = eTri(vTWorld, tW0, 3.7, -1.3);
            float fc = smoothstep(0.35, 0.7, vTer.x);
            if (fc > 0.001) {
              float f3 = eTri(vTWorld, tW0, 0.35, 11.0);
              float leaf = smoothstep(0.5, 0.8, f3 * 0.6 + f1 * 0.4);
              vec3 floorCol = mix(vec3(0.055, 0.092, 0.036), vec3(0.11, 0.086, 0.055), leaf);
              floorCol = mix(floorCol, vec3(0.1, 0.096, 0.086), smoothstep(0.74, 0.92, f2 * 0.55 + f1 * 0.45) * 0.6);
              diffuseColor.rgb = mix(diffuseColor.rgb, floorCol, nearK * fc * 0.45);
            }
            float g = f1 * 0.55 + f2 * 0.45;
            diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * g, nearK);
            float lawnK = nearK * (1.0 - fc);
            if (lawnK > 0.001) {
              float f4 = eTri(vTWorld, tW0, 0.21, 5.3);
              vec3 dry = vec3(1.1, 1.03, 0.78), lush = vec3(0.9, 1.05, 0.96);
              diffuseColor.rgb *= mix(vec3(1.0), mix(dry, lush, smoothstep(0.3, 0.7, f4 * 0.7 + f2 * 0.3)), lawnK * 0.55);
            }
          }
          #endif
          diffuseColor.rgb *= 1.0 - 0.3 * uWet * (1.0 - vTer.y);
        }`,
          )));
    }),
    (n.customProgramCacheKey = () =>
      t ? `env-terrain-v5-low` : `env-terrain-v5`),
    n
  );
}
function Qp(e) {
  let t = [],
    n = [],
    r = [],
    i = new W();
  for (let a of e) {
    let e = a.geo.index ? a.geo.toNonIndexed() : a.geo;
    e.computeVertexNormals();
    let o = e.attributes.position,
      s = e.attributes.normal;
    e.computeBoundingBox();
    let c = e.boundingBox,
      l = (c.min.x + c.max.x) / 2,
      u = (c.min.y + c.max.y) / 2,
      d = (c.min.z + c.max.z) / 2;
    for (let e = 0; e < o.count; e++) {
      let f = o.getY(e),
        p = (f - c.min.y) / Math.max(0.01, c.max.y - c.min.y);
      (i.copy(a.bottom).lerp(a.top, p), t.push(o.getX(e), f, o.getZ(e)));
      let m = o.getX(e) - l,
        h = o.getY(e) - u,
        g = o.getZ(e) - d,
        _ = Math.hypot(m, h, g) || 1;
      ((m /= _), (h /= _), (g /= _));
      let v = a.soft,
        y = s.getX(e) * (1 - v) + m * v,
        b = s.getY(e) * (1 - v) + h * v,
        x = s.getZ(e) * (1 - v) + g * v,
        S = Math.hypot(y, b, x) || 1;
      (n.push(y / S, b / S, x / S), r.push(i.r, i.g, i.b));
    }
  }
  let a = new V();
  return (
    a.setAttribute(`position`, new N(t, 3)),
    a.setAttribute(`normal`, new N(n, 3)),
    a.setAttribute(`color`, new N(r, 3)),
    a
  );
}
var $p = (e, t, n, r, i, a, o, s, c = 0) => {
    let l = new re(1, 0);
    return (
      c && l.rotateY(c),
      l.scale(r, i, a),
      l.translate(e, t, n),
      { geo: l, top: o, bottom: s, soft: 0.95 }
    );
  },
  em = (
    e,
    t,
    n,
    r = 0,
    i = new W(0.25, 0.19, 0.13),
    a = new W(0.18, 0.13, 0.09),
  ) => {
    let o = new T(n, t, e, 4, 1, !0);
    return (
      o.translate(0, r + e / 2, 0),
      { geo: o, top: i, bottom: a, soft: 0 }
    );
  };
function tm() {
  let e = new W(0.19, 0.29, 0.075),
    t = new W(0.04, 0.075, 0.028),
    n = new W(0.12, 0.22, 0.07),
    r = new W(0.03, 0.06, 0.025),
    i = Qp([
      $p(0, 6.3, 0, 4.4, 3.7, 4.4, e, t),
      $p(3, 4.6, 1.5, 3.2, 2.7, 3.2, e, t, 0.7),
      $p(-2.4, 5, -1.9, 2.9, 2.5, 2.9, e, t, 1.9),
      em(4.6, 0.42, 0.26, -0.1),
    ]),
    a = Qp([
      $p(0, 9, 0, 2.3, 4.6, 2.3, n, r),
      $p(0.3, 5.6, -0.2, 2.9, 3.2, 2.9, n, r, 0.9),
      em(6.5, 0.34, 0.2, -0.1),
    ]),
    o = [],
    s = new W(0.2, 0.3, 0.08),
    c = new W(0.08, 0.14, 0.04);
  for (let e = 0; e < 7; e++) {
    let t = (e / 7) * Math.PI * 2 + (e % 2) * 0.2,
      n = new V(),
      r = 3.4,
      i = new Float32Array([
        0,
        0,
        0,
        r * 0.55,
        0.5,
        -0.55,
        r,
        -1.3,
        0,
        r * 0.55,
        0.5,
        0.55,
      ]);
    (n.setAttribute(`position`, new H(i, 3)),
      n.setIndex([0, 2, 1, 0, 3, 2, 0, 1, 2, 0, 2, 3]),
      n.rotateY(t),
      n.translate(0, 9.2, 0),
      o.push({ geo: n, top: s, bottom: c, soft: 0.35 }));
  }
  return [
    i,
    a,
    Qp([
      ...o,
      $p(0, 9.3, 0, 0.55, 0.5, 0.55, s, c),
      em(9.3, 0.2, 0.15, -0.1, new W(0.42, 0.4, 0.34), new W(0.3, 0.28, 0.24)),
    ]),
  ];
}
var nm = { uTreeFade: { value: new ve(600, 760) }, uWindAmt: { value: 0.3 } };
function rm() {
  let e = new D({ vertexColors: !0 });
  return (
    (e.name = `env-trees`),
    (e.defines = { FOG_NO_CLIP: `` }),
    (e.onBeforeCompile = (e) => {
      ((e.uniforms.uTreeFade = nm.uTreeFade),
        (e.uniforms.uWindAmt = nm.uWindAmt),
        (e.uniforms.uTime = q.uTime),
        (e.uniforms.uWet = q.uWet),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform vec2 uTreeFade;
uniform float uWindAmt;
uniform float uTime;
varying vec3 vLeafP;
varying float vLeafSeed;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
          vec4 tiW = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          #else
          vec4 tiW = modelMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          #endif
          float tdist = distance(tiW.xyz, cameraPosition);
          float tk = 1.0 - smoothstep(uTreeFade.x, uTreeFade.y, tdist);
          float h = max(transformed.y - 2.5, 0.0) / 6.0;
          float sw = sin(uTime * 1.4 + tiW.x * 0.05 + tiW.z * 0.07) + 0.5 * sin(uTime * 2.3 + tiW.z * 0.11);
          transformed.x += sw * 0.12 * uWindAmt * h;
          transformed.z += sw * 0.07 * uWindAmt * h;
          transformed *= tk;
          // leaf-clump texture coordinates: object space (moves with the crown), per-tree offset
          vLeafP = transformed;
          vLeafSeed = fract(tiW.x * 0.137 + tiW.z * 0.091);
        }`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>\nuniform float uWet;\nvarying vec3 vLeafP;\nvarying float vLeafSeed;\n${yp}`,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
        {
          // clumped foliage: dark gaps between leaf masses + sunlit tufts (breaks up the blob crowns in the
          // mid range; the nearest ~115–340 m are drawn with leaf-card crowns, forest.ts)
          float lf = 1.0 - smoothstep(260.0, 520.0, length(vViewPosition));
          if (lf > 0.001) {
            vec3 q = vLeafP * 1.35 + vLeafSeed * 17.0;
            float n = eNoise(q.xz + q.y * 0.7) * 0.6 + eNoise(q.zy * 2.1 + 3.3) * 0.4;
            diffuseColor.rgb *= mix(1.0, 0.62 + 0.62 * smoothstep(0.25, 0.8, n), lf);
          }
          diffuseColor.rgb *= 1.0 - 0.2 * uWet;
        }`,
          )));
    }),
    (e.customProgramCacheKey = () => `env-trees-v3`),
    e
  );
}
function im(e, t, n) {
  let r = { matrices: [], colors: [], species: [], colliders: [] },
    i = new De(),
    a = new Ce(),
    o = new U(),
    s = new U(),
    c = new U(0, 1, 0),
    l = e.B,
    u = 1,
    d = (t, d, f, p) => {
      u++;
      let m = kp(u, 11),
        h = kp(u, 23),
        g = kp(u, 37),
        _ = kp(u, 51),
        v = t + (m - 0.5) * f * 0.9,
        y = d + (h - 0.5) * f * 0.9,
        b = e.kind(v, y);
      if (b === `city` || b === `water`) return;
      let x = e.outside(v, y);
      if (
        x < 9 ||
        x > (b === `land` ? 720 : 520) ||
        (p && ((b !== `land` && e.knoll(v, y) < 0.3) || x > 440)) ||
        n(v, y)
      )
        return;
      let S = e.height(v, y);
      if (
        S < 0.4 ||
        (b === `land` && e.edgeUrban(v, y) > 0.3 && S - e.sw < 8) ||
        (v < l.minX && v > e.riverX - 2 && y > l.minZ)
      )
        return;
      let C = S - (b === `farbank` ? 2.2 : e.sw);
      if (
        b === `farbank` &&
        ((e.dazhiPlain(v, y) > 0.3 && C < 10) ||
          (C < 6 && e.bankDist(v, y) > 45))
      )
        return;
      let w = e.height(v + 3, y) - e.height(v - 3, y),
        T = e.height(v, y + 3) - e.height(v, y - 3);
      if (
        Math.hypot(w, T) / 6 > 4.5 ||
        g > (p ? 0.85 * G(3, 11, C) : 0.12 + 0.88 * G(1.5, 14, C)) ||
        Math.hypot(v + 330, y + 1130) < 70
      )
        return;
      let E = kp(u, 67),
        D = C > 3 && C < 75 ? (x < 500 ? 0.17 : 0.07) : 0,
        O = E < D ? 2 : +(E < D + (C > 30 ? 0.3 : 0.14)),
        k = O === 2 ? 0.8 + _ * 0.45 : C > 18 ? 1 + _ * 0.85 : 0.75 + _ * 0.6;
      (s.set(v, S - (O === 2 ? 0.2 : 0.6), y),
        a.setFromAxisAngle(c, m * Math.PI * 2),
        O === 2
          ? o.set(k, k * (0.85 + g * 0.3), k)
          : o.set(
              k * (0.9 + h * 0.25),
              k * (0.85 + g * 0.35),
              k * (0.9 + _ * 0.2),
            ),
        i.compose(s, a, o),
        r.matrices.push(i.clone()),
        r.colors.push(
          O === 2 ? am(0.5, h, g).multiplyScalar(1.05) : am(m, h, g),
        ),
        r.species.push(O),
        b === `land` && x < 900 && r.colliders.push({ x: v, z: y, y: S }));
    },
    f = 30 / Math.sqrt(Math.max(0.2, t));
  for (let e = -1500; e < 1300; e += f)
    for (let t = -1500; t < 1700; t += f) d(t, e, f, !1);
  let p = 14 / Math.sqrt(Math.max(0.2, t));
  for (let e = l.minZ - 440; e < l.maxZ + 440; e += p)
    for (let t = l.minX - 440; t < l.maxX + 440; t += p)
      (t > l.minX && t < l.maxX && e > l.minZ && e < l.maxZ) ||
        d(t + p * 0.5, e + p * 0.5, p, !0);
  return r;
}
function am(e, t, n) {
  let r = new W(1, 1, 1),
    i = 0.78 + n * 0.42;
  return (
    e < 0.12
      ? r.setRGB(1.12, 1.08, 0.7)
      : e < 0.2
        ? r.setRGB(0.8, 0.95, 0.95)
        : t < 0.012 && r.setRGB(1.7, 0.95, 1.05),
    r.multiplyScalar(i)
  );
}
function om(e = 256) {
  let t = [8, 16, 32, 64],
    n = [1, 0.55, 0.3, 0.14],
    r = t.map((e, t) => {
      let n = new Float32Array(e * e),
        r = 1234567 + t * 7919;
      for (let e = 0; e < n.length; e++)
        ((r = (Math.imul(r, 1664525) + 1013904223) >>> 0),
          (n[e] = r / 4294967296));
      return n;
    }),
    i = new Float32Array(e * e);
  for (let a = 0; a < e; a++)
    for (let o = 0; o < e; o++) {
      let s = 0;
      for (let i = 0; i < t.length; i++) {
        let c = t[i],
          l = (o / e) * c,
          u = (a / e) * c,
          d = Math.floor(l),
          f = Math.floor(u),
          p = l - d,
          m = u - f,
          h = p * p * (3 - 2 * p),
          g = m * m * (3 - 2 * m),
          _ = r[i],
          v = d % c,
          y = (d + 1) % c,
          b = f % c,
          x = (f + 1) % c,
          S = _[b * c + v],
          C = _[b * c + y],
          w = _[x * c + v],
          T = _[x * c + y];
        s += n[i] * (S + (C - S) * h + (w - S) * g + (S - C - w + T) * h * g);
      }
      i[a * e + o] = s;
    }
  let [a, o] = Fe(e, e),
    s = o.createImageData(e, e),
    c = 3.2;
  for (let t = 0; t < e; t++)
    for (let n = 0; n < e; n++) {
      let r = i[t * e + ((n + 1) % e)] - i[t * e + ((n - 1 + e) % e)],
        a = i[((t + 1) % e) * e + n] - i[((t - 1 + e) % e) * e + n],
        o = -r * c,
        l = -a * c,
        u = 1,
        d = Math.hypot(o, l, u);
      ((o /= d), (l /= d), (u /= d));
      let f = (t * e + n) * 4;
      ((s.data[f] = (o * 0.5 + 0.5) * 255),
        (s.data[f + 1] = (l * 0.5 + 0.5) * 255),
        (s.data[f + 2] = (u * 0.5 + 0.5) * 255),
        (s.data[f + 3] = 255));
    }
  o.putImageData(s, 0, 0);
  let l = new Te(a);
  return (
    (l.colorSpace = ``),
    (l.wrapS = l.wrapT = ae),
    (l.anisotropy = 4),
    (l.needsUpdate = !0),
    l
  );
}
function sm(e, t) {
  return {
    uSkySun: e.uSkySun,
    uZenith: e.uZenith,
    uHorizon: e.uHorizon,
    uSunset: e.uSunset,
    uSunGlow: e.uSunGlow,
    uMoonDir: e.uMoonDir,
    uMoonCol: e.uMoonCol,
    uFlash: e.uFlash,
    uNormalMap: { value: t },
    uLightDir: { value: new U(0, 1, 0) },
    uLightCol: { value: new W(1, 1, 1) },
    uAmbient: { value: new W(0.4, 0.45, 0.5) },
    uDeep: { value: new W(0.03, 0.045, 0.035) },
    uWTime: { value: 0 },
    uWNight: { value: 0 },
    uWRain: { value: 0 },
    uCloudShade: { value: 0 },
  };
}
var cm = `
varying vec3 vWPos;
#include <common>
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWPos = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,
  lm = (e) => {
    let t = Number.isFinite(e.westX) ? e.westX : -1e7;
    return `
${bp}
uniform vec3 uMoonDir;
uniform vec3 uMoonCol;
uniform float uFlash;
uniform sampler2D uNormalMap;
uniform vec3 uLightDir;
uniform vec3 uLightCol;
uniform vec3 uAmbient;
uniform vec3 uDeep;
uniform float uWTime;
uniform float uWNight;
uniform float uWRain;
uniform float uCloudShade;
varying vec3 vWPos;
#include <common>
#include <fog_pars_fragment>
${yp}
${xp}

void main() {
  vec3 toCam = cameraPosition - vWPos;
  float dist = length(toCam);
  vec3 V = toCam / dist;
  vec2 p = vWPos.xz;
  float t = uWTime;
  // river current flows north / downstream: bias scroll along -z (Tamsui) and -x (Keelung)
  vec2 flow = vWPos.x < ${t.toFixed(1)} ? vec2(0.0, -1.0) : vec2(-1.0, 0.0);
  vec3 n1 = texture2D(uNormalMap, p * 0.043 + flow * t * 0.018 + vec2(t * 0.004, 0.0)).xyz * 2.0 - 1.0;
  vec3 n2 = texture2D(uNormalMap, p * 0.117 + vec2(-t * 0.011, t * 0.017)).xyz * 2.0 - 1.0;
  vec3 n3 = texture2D(uNormalMap, p * 0.0115 + flow * t * 0.006).xyz * 2.0 - 1.0;
  float farF = smoothstep(40.0, 1400.0, dist);
  vec2 d = n1.xy * 0.55 + n2.xy * 0.18 * (1.0 - farF) + n3.xy * 0.75;
  float str = mix(0.2, 0.075, farF) * (1.0 + uWRain * 0.9);
  // rain ripple rings near the camera
  if (uWRain > 0.01 && dist < 70.0) {
    vec2 rp = p * 0.55;
    vec2 ci = floor(rp);
    vec2 cf = fract(rp);
    float h = eHash12(ci);
    float ph = fract(t * 1.1 + h);
    vec2 c0 = vec2(eHash12(ci + 3.1), eHash12(ci + 7.7)) * 0.6 + 0.2;
    vec2 dv = cf - c0;
    float r = length(dv);
    float ring = exp(-abs(r - ph * 0.42) * 38.0) * (1.0 - ph);
    d += (dv / max(r, 1e-3)) * ring * 1.6 * uWRain * (1.0 - smoothstep(30.0, 70.0, dist));
  }
  vec3 N = normalize(vec3(d.x * str, 1.0, d.y * str));
  float NdV = max(dot(N, V), 0.0);
  float F = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
  vec3 R = reflect(-V, N);
  R.y = abs(R.y) + 0.002;
  vec3 refl = skyBase(R);
  // overcast skies reflect flatter / greyer
  refl = mix(refl, vec3(dot(refl, vec3(0.2126, 0.7152, 0.0722))), uCloudShade * 0.5);
  vec3 body = uDeep * (uAmbient + uLightCol * max(uLightDir.y, 0.0) * 0.3);
  // murky Tamsui: reflections are muted by suspended silt
  vec3 col = mix(body, refl * 0.85, F * 0.9);
  float rs = max(dot(R, uLightDir), 0.0);
  col += uLightCol * (pow(rs, 420.0) * 7.0 + pow(rs, 36.0) * 0.12) * (1.0 - 0.75 * uCloudShade);
  col += uMoonCol * (pow(max(dot(R, uMoonDir), 0.0), 900.0) * 1.2 + pow(max(dot(R, uMoonDir), 0.0), 60.0) * 0.05);
  // night: the far bank's skyline mirrored in the river. The (rippled) reflection ray is traced to the far bank's
  // building wall (Tamsui: New Taipei at x ≈ -1225; Keelung: Shilin / Dazhi at z ≈ -1150) and picks up light
  // where it meets the skyline's height band: window rows, street-level lamps / shop fronts and the odd muted
  // neon, all anchored to positions ALONG the bank. Ripples stretch them into broken streaks; from high above
  // the rays pass over the rooftops, so an aerial view never shows a painted-on sheet of colour.
  if (${e.banks ? `uWNight > 0.01` : `false`}) {
    bool tam = vWPos.x < ${(t - 2).toFixed(1)};
    float bankD = tam ? vWPos.x + 1225.0 : vWPos.z + 1150.0;
    float rd = tam ? -R.x : -R.z;
    if (rd > 0.03 && bankD > 0.0) {
      vec3 H = vWPos + R * (bankD / rd);
      float along = tam ? H.z : H.x;
      float hy = H.y;
      float mass = smoothstep(0.3, 0.55, eNoise(vec2(along * 0.03, 2.7)));
      float top = 24.0 + 75.0 * eNoise(vec2(along * 0.011, 5.3));
      float band = smoothstep(2.0, 6.0, hy) * (1.0 - smoothstep(top * 0.8, top, hy)) * mass;
      float win = pow(eNoise(vec2(along * 0.55, hy * 0.3)), 3.0) * 2.2;
      float street = (1.0 - smoothstep(1.0, 10.0, hy)) * smoothstep(-2.0, 1.5, hy) * pow(eNoise(vec2(along * 0.22, 9.1)), 2.0) * 2.6;
      vec3 lc = mix(vec3(1.0, 0.62, 0.3), vec3(0.75, 0.85, 1.0), eNoise(vec2(along * 0.05, 4.0)));
      float neon = step(0.93, eNoise(vec2(along * 0.021, 8.0)));
      lc = mix(lc, vec3(0.82, 0.55, 0.66), neon * 0.8);
      // ripples break every streak into short glints: wave crests (along the view distance) + the normal-map slope
      float seg = eNoise(vec2(dist * 0.42 - t * 0.9, along * 0.35)) * 0.65 + eNoise(vec2(dist * 1.3 + t * 1.7, along * 0.9)) * 0.35;
      float glint = smoothstep(0.38, 0.72, seg + d.y * 0.45);
      float hFade = 1.0 - 0.5 * smoothstep(40.0, 220.0, cameraPosition.y);
      vec3 add = lc * (win * band + street * mass) * uWNight * (0.35 + F * 2.4) * smoothstep(6.0, 60.0, dist) * (0.3 + 0.9 * glint) * hFade;
      col += min(add, vec3(0.6));
    }
  }
  col += vec3(0.7, 0.75, 0.95) * uFlash * F * 0.9;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`;
  };
function um(e, t, n, r) {
  let i = lm(n),
    a = { ...Se.clone(ue.fog), ...e };
  return (
    r &&
      !n.banks &&
      ((a = { ...a, ...r.uniforms }),
      (i = i
        .replace(`void main() {`, `${r.pars}\nvoid main() {`)
        .replace(
          `  col += vec3(0.7, 0.75, 0.95) * uFlash * F * 0.9;`,
          `${r.main}\n  col += vec3(0.7, 0.75, 0.95) * uFlash * F * 0.9;`,
        ))),
    new E({
      name: t ? `env-water-far` : `env-water`,
      uniforms: a,
      vertexShader: cm,
      fragmentShader: i,
      fog: !0,
      defines: { FOG_NO_CLIP: `` },
    })
  );
}
function dm(e, t, n = 4) {
  let r = e.rects(n).map((e) => ({ ...e, y: NaN }));
  for (let e of t ?? []) {
    let t = e.minX - n,
      i = e.maxX,
      a = e.minZ - n,
      o = e.maxZ + n,
      s = [];
    for (let e of r) {
      if (e.x1 <= t || e.x0 >= i || e.z1 <= a || e.z0 >= o) {
        s.push(e);
        continue;
      }
      (e.z0 < a && s.push({ ...e, z1: a }),
        e.z1 > o && s.push({ ...e, z0: o }));
      let n = Math.max(e.z0, a),
        r = Math.min(e.z1, o);
      (e.x0 < t && s.push({ ...e, x1: t, z0: n, z1: r }),
        e.x1 > i && s.push({ ...e, x0: i, z0: n, z1: r }));
    }
    (s.push({ x0: t, x1: i, z0: a, z1: o, y: e.level }), (r = s));
  }
  return r;
}
function fm(e, t, n, r) {
  let i = Vp,
    a = t.westX,
    o = t.northZ,
    s = (
      n
        ? dm(n, r)
        : [
            { x0: -i, x1: a - 1.5, z0: -i, z1: i, y: e },
            { x0: a - 1.5, x1: i, z0: -i, z1: o - 1.5, y: e },
          ]
    ).map((t) => [t.x0, t.x1, t.z0, t.z1, Number.isFinite(t.y) ? t.y : e]),
    c = [],
    l = [];
  for (let [e, t, r, i, a] of s) {
    let o = n ? 1 : 8,
      s = n ? 1 : 8,
      u = c.length / 3;
    for (let n = 0; n <= s; n++)
      for (let l = 0; l <= o; l++)
        c.push(e + ((t - e) * l) / o, a, r + ((i - r) * n) / s);
    for (let e = 0; e < s; e++)
      for (let t = 0; t < o; t++) {
        let n = u + e * (o + 1) + t;
        l.push(n, n + o + 1, n + 1, n + 1, n + o + 1, n + o + 2);
      }
  }
  let u = new V();
  return (
    u.setAttribute(`position`, new N(c, 3)),
    u.setIndex(l),
    (u.boundingSphere = new d(new U(), i * 1.5)),
    u
  );
}
var pm = [0.998, 0.004],
  mm = new Float32Array(),
  hm = new Uint32Array(),
  gm = 0.85,
  _m = class {
    a;
    n = 0;
    constructor(e = 16384) {
      this.a = new Float32Array(Math.max(16, Math.ceil(e)));
    }
    reserve(e) {
      if (this.n + e <= this.a.length) return;
      let t = new Float32Array(
        Math.max(Math.ceil(this.a.length * 1.5), this.n + e),
      );
      (t.set(this.a.subarray(0, this.n)), (this.a = t));
    }
    p3(e, t, n) {
      this.reserve(3);
      let r = this.a,
        i = this.n;
      ((r[i] = e), (r[i + 1] = t), (r[i + 2] = n), (this.n = i + 3));
    }
    p2(e, t) {
      (this.reserve(2),
        (this.a[this.n] = e),
        (this.a[this.n + 1] = t),
        (this.n += 2));
    }
    out() {
      return this.n >= this.a.length * gm
        ? this.a.subarray(0, this.n)
        : this.a.slice(0, this.n);
    }
    free() {
      ((this.a = mm), (this.n = 0));
    }
  },
  vm = class {
    a;
    n = 0;
    constructor(e = 16384) {
      this.a = new Uint32Array(Math.max(16, Math.ceil(e)));
    }
    reserve(e) {
      if (this.n + e <= this.a.length) return;
      let t = new Uint32Array(
        Math.max(Math.ceil(this.a.length * 1.5), this.n + e),
      );
      (t.set(this.a.subarray(0, this.n)), (this.a = t));
    }
    p3(e, t, n) {
      this.reserve(3);
      let r = this.a,
        i = this.n;
      ((r[i] = e), (r[i + 1] = t), (r[i + 2] = n), (this.n = i + 3));
    }
    out() {
      return this.n >= this.a.length * gm
        ? this.a.subarray(0, this.n)
        : this.a.slice(0, this.n);
    }
    free() {
      ((this.a = hm), (this.n = 0));
    }
  },
  ym = class {
    a;
    n = 0;
    lx = NaN;
    ly = NaN;
    lz = NaN;
    lw = NaN;
    hx = 0;
    hy = 0;
    hz = 0;
    hw = 0;
    constructor(e = 16384) {
      this.a = new Uint16Array(Math.max(16, Math.ceil(e)));
    }
    reserve(e) {
      if (this.n + e <= this.a.length) return;
      let t = new Uint16Array(
        Math.max(Math.ceil(this.a.length * 1.5), this.n + e),
      );
      (t.set(this.a.subarray(0, this.n)), (this.a = t));
    }
    p4(e, t, n, r) {
      (this.reserve(4),
        e !== this.lx && (this.hx = S.toHalfFloat((this.lx = e))),
        t !== this.ly && (this.hy = S.toHalfFloat((this.ly = t))),
        n !== this.lz && (this.hz = S.toHalfFloat((this.lz = n))),
        r !== this.lw && (this.hw = S.toHalfFloat((this.lw = r))));
      let i = this.a,
        a = this.n;
      ((i[a] = this.hx),
        (i[a + 1] = this.hy),
        (i[a + 2] = this.hz),
        (i[a + 3] = this.hw),
        (this.n = a + 4));
    }
    attribute() {
      let e =
          this.n >= this.a.length * gm
            ? this.a.subarray(0, this.n)
            : this.a.slice(0, this.n),
        t = new p(bm, 4);
      return ((t.array = e), (t.count = e.length / 4), t);
    }
    free() {
      ((this.a = bm), (this.n = 0));
    }
  },
  bm = new Uint16Array();
function xm(e) {
  return !!(e & 32768) && (e & 32767) > 14336;
}
var Sm = new Int8Array(),
  Cm = class {
    a;
    n = 0;
    constructor(e) {
      this.a = new Int8Array(Math.max(16, Math.ceil(e) * 4));
    }
    reserve(e) {
      if (this.n + e * 4 <= this.a.length) return;
      let t = new Int8Array(
        Math.max(Math.ceil((this.a.length * 1.5) / 4) * 4, this.n + e * 4),
      );
      (t.set(this.a.subarray(0, this.n)), (this.a = t));
    }
    p3(e, t, n) {
      this.reserve(1);
      let r = this.a,
        i = this.n;
      ((r[i] = Math.round(e * 127)),
        (r[i + 1] = Math.round(t * 127)),
        (r[i + 2] = Math.round(n * 127)),
        (r[i + 3] = 0),
        (this.n = i + 4));
    }
    get(e, t) {
      let n = this.a,
        r = e * 4;
      return t.set(n[r] / 127, n[r + 1] / 127, n[r + 2] / 127);
    }
    set(e, t, n, r) {
      let i = this.a,
        a = e * 4;
      ((i[a] = Math.round(t * 127)),
        (i[a + 1] = Math.round(n * 127)),
        (i[a + 2] = Math.round(r * 127)));
    }
    attribute() {
      let e =
        this.n >= this.a.length * gm
          ? this.a.subarray(0, this.n)
          : this.a.slice(0, this.n);
      return new H(e, 4, !0);
    }
    free() {
      ((this.a = Sm), (this.n = 0));
    }
  },
  wm = class {
    a;
    n = 0;
    float = !1;
    constructor(e) {
      this.a = new Uint16Array(Math.max(16, Math.ceil(e) * 2));
    }
    reserve(e) {
      if (this.n + e <= this.a.length) return;
      let t = this.float
        ? new Float32Array(Math.max(Math.ceil(this.a.length * 1.5), this.n + e))
        : new Uint16Array(Math.max(Math.ceil(this.a.length * 1.5), this.n + e));
      (t.set(this.a.subarray(0, this.n)), (this.a = t));
    }
    toFloat() {
      let e = new Float32Array(this.a.length),
        t = this.a;
      for (let n = 0; n < this.n; n++) e[n] = t[n] / 65535;
      ((this.a = e), (this.float = !0));
    }
    p2(e, t) {
      (this.reserve(2),
        !this.float &&
          !(e >= 0 && e <= 1 && t >= 0 && t <= 1) &&
          this.toFloat());
      let n = this.a,
        r = this.n;
      (this.float
        ? ((n[r] = e), (n[r + 1] = t))
        : ((n[r] = Math.round(e * 65535)), (n[r + 1] = Math.round(t * 65535))),
        (this.n = r + 2));
    }
    attribute() {
      let e =
        this.n >= this.a.length * gm
          ? this.a.subarray(0, this.n)
          : this.a.slice(0, this.n);
      return new H(e, 2, !this.float);
    }
    free() {
      ((this.a = bm), (this.n = 0));
    }
  };
function Tm(e, t) {
  let n = 0,
    r = e.length / 3 - 1;
  for (; n <= r;) {
    let i = (n + r) >> 1;
    if (t < e[i * 3]) r = i - 1;
    else if (t >= e[i * 3 + 1]) n = i + 1;
    else return e[i * 3 + 2];
  }
  return 0;
}
var Em = class {
    pos;
    nrm;
    col;
    uv;
    emi;
    idx;
    boxC = null;
    boxH = null;
    curBox = [0, 0, 0, -1, -1, -1];
    color = new W(1, 1, 1);
    emit = [0, 0, 0];
    v = new U();
    n = new U();
    a = new U();
    b = new U();
    constructor(e = 5461, t = e * 1.5) {
      ((this.pos = new _m(e * 3)),
        (this.nrm = new Cm(e)),
        (this.col = new ym(e * 4)),
        (this.uv = new wm(e)),
        (this.emi = new ym(e * 4)),
        (this.idx = new vm(t)));
    }
    get vertexCount() {
      return this.pos.n / 3;
    }
    get triangleCount() {
      return this.idx.n / 3;
    }
    get indexCount() {
      return this.idx.n;
    }
    emitZOverride = null;
    tierRanges = [];
    curTier = 0;
    baseTier = 0;
    tierStart = 0;
    setTier(e) {
      if (e === this.curTier) return;
      let t = this.pos.n / 3;
      (this.curTier > 0 &&
        t > this.tierStart &&
        this.tierRanges.push(this.tierStart, t, this.curTier),
        (this.curTier = e),
        (this.tierStart = t));
    }
    detail(e) {
      return (this.setTier(e ? 2 : this.baseTier), this);
    }
    mainOnly(e) {
      return (
        (this.baseTier = +!!e),
        this.curTier !== 2 && this.setTier(this.baseTier),
        this
      );
    }
    tierOf(e) {
      return Tm(this.tierRanges, e);
    }
    tierTable() {
      return Int32Array.from(this.tierRanges);
    }
    setColor(e, t, n) {
      return (
        typeof e == `number` ? this.color.setRGB(e, t, n) : this.color.copy(e),
        this
      );
    }
    setHex(e) {
      return (this.color.setHex(e, R), this);
    }
    setEmit(e = 0, t = 0, n = 0) {
      return ((this.emit = [e, t, n]), this);
    }
    noEmit() {
      return ((this.emit = [0, 0, 0]), this);
    }
    setOwnerBox(e, t, n, r, i, a) {
      if (!this.boxC) {
        let e = this.pos.n;
        ((this.boxC = new _m(Math.max(this.pos.a.length, e + 3))),
          (this.boxH = new _m(Math.max(this.pos.a.length, e + 3))),
          this.boxC.reserve(e),
          (this.boxC.n = e),
          this.boxH.reserve(e),
          this.boxH.a.fill(-1, 0, e),
          (this.boxH.n = e));
      }
      return ((this.curBox = [e, t, n, r, i, a]), this);
    }
    vert(e, t, n, r, i, a, o, s) {
      if (
        (this.pos.p3(e, t, n),
        this.nrm.p3(r, i, a),
        this.col.p4(this.color.r, this.color.g, this.color.b, 1),
        this.uv.p2(o, s),
        this.emi.p4(
          this.emit[0],
          this.emit[1],
          this.emitZOverride ?? this.emit[2],
          0,
        ),
        this.boxC)
      ) {
        let e = this.curBox;
        (this.boxC.p3(e[0], e[1], e[2]), this.boxH.p3(e[3], e[4], e[5]));
      }
      return this.pos.n / 3 - 1;
    }
    quad(e, t, n, r, i, a, o, s, c, l, u, d, f) {
      (this.a.set(r - e, i - t, a - n),
        this.b.set(l - e, u - t, d - n),
        this.n.crossVectors(this.a, this.b).normalize());
      let p = this.n;
      p.lengthSq() < 0.5 && p.set(0, 1, 0);
      let [m, h, g, _] = f ?? [pm[0], pm[1], pm[0], pm[1]],
        v = this.vert(e, t, n, p.x, p.y, p.z, m, h);
      (this.vert(r, i, a, p.x, p.y, p.z, g, h),
        this.vert(o, s, c, p.x, p.y, p.z, g, _),
        this.vert(l, u, d, p.x, p.y, p.z, m, _),
        this.idx.p3(v, v + 1, v + 2),
        this.idx.p3(v, v + 2, v + 3));
    }
    boxMinMax(e, t, n, r, i, a, o = 55) {
      (o & 1 && this.quad(r, t, a, r, t, n, r, i, n, r, i, a),
        o & 2 && this.quad(e, t, n, e, t, a, e, i, a, e, i, n),
        o & 4 && this.quad(e, i, a, r, i, a, r, i, n, e, i, n),
        o & 8 && this.quad(e, t, n, r, t, n, r, t, a, e, t, a),
        o & 16 && this.quad(e, t, a, r, t, a, r, i, a, e, i, a),
        o & 32 && this.quad(r, t, n, e, t, n, e, i, n, r, i, n));
    }
    box(e, t, n, r, i, a, o = 0, s = 55) {
      if (o === 0) {
        this.boxMinMax(e - r / 2, t, n - a / 2, e + r / 2, t + i, n + a / 2, s);
        return;
      }
      let c = Math.cos(o),
        l = Math.sin(o),
        u = this.pos.n;
      this.boxMinMax(-r / 2, t, -a / 2, r / 2, t + i, a / 2, s);
      let d = this.pos.a,
        f = this.nrm,
        p = this.n;
      for (let t = u; t < this.pos.n; t += 3) {
        let r = d[t],
          i = d[t + 2];
        ((d[t] = e + r * c + i * l), (d[t + 2] = n - r * l + i * c));
        let a = t / 3;
        (f.get(a, p), f.set(a, p.x * c + p.z * l, p.y, -p.x * l + p.z * c));
      }
    }
    frustum(e, t, n, r, i, a, o, s, c = !0) {
      let l = t + s,
        u = [e - r / 2, n - i / 2, e + r / 2, n + i / 2],
        d = [e - a / 2, n - o / 2, e + a / 2, n + o / 2];
      (this.quad(u[0], t, u[3], u[2], t, u[3], d[2], l, d[3], d[0], l, d[3]),
        this.quad(u[2], t, u[1], u[0], t, u[1], d[0], l, d[1], d[2], l, d[1]),
        this.quad(u[2], t, u[3], u[2], t, u[1], d[2], l, d[1], d[2], l, d[3]),
        this.quad(u[0], t, u[1], u[0], t, u[3], d[0], l, d[3], d[0], l, d[1]),
        c &&
          this.quad(
            d[0],
            l,
            d[3],
            d[2],
            l,
            d[3],
            d[2],
            l,
            d[1],
            d[0],
            l,
            d[1],
          ));
    }
    beam(e, t, n, r, i, a, o, s) {
      let c = r - e,
        l = i - t,
        u = a - n,
        d = Math.hypot(c, l, u);
      if (d < 1e-4) return;
      let f = this.v.set(c / d, l / d, u / d),
        p = Math.abs(f.y) > 0.95 ? new U(1, 0, 0) : new U(0, 1, 0),
        m = new U()
          .crossVectors(f, p)
          .normalize()
          .multiplyScalar(o / 2),
        h = new U()
          .crossVectors(m, f)
          .normalize()
          .multiplyScalar(s / 2),
        g = (r, i, a) => [
          e + c * r + m.x * i + h.x * a,
          t + l * r + m.y * i + h.y * a,
          n + u * r + m.z * i + h.z * a,
        ];
      for (let [[e, t], [n, r]] of [
        [
          [1, -1],
          [1, 1],
        ],
        [
          [1, 1],
          [-1, 1],
        ],
        [
          [-1, 1],
          [-1, -1],
        ],
        [
          [-1, -1],
          [1, -1],
        ],
      ]) {
        let i = g(0, e, t),
          a = g(1, e, t),
          o = g(1, n, r),
          s = g(0, n, r);
        this.quad(
          i[0],
          i[1],
          i[2],
          a[0],
          a[1],
          a[2],
          o[0],
          o[1],
          o[2],
          s[0],
          s[1],
          s[2],
        );
      }
    }
    cyl(e, t, n, r, i, a = 8, o = !0, s = r) {
      for (let o = 0; o < a; o++) {
        let c = (o / a) * Math.PI * 2,
          l = ((o + 1) / a) * Math.PI * 2,
          u = Math.cos(c),
          d = Math.sin(c),
          f = Math.cos(l),
          p = Math.sin(l);
        this.quad(
          e + f * r,
          t,
          n + p * r,
          e + u * r,
          t,
          n + d * r,
          e + u * s,
          t + i,
          n + d * s,
          e + f * s,
          t + i,
          n + p * s,
        );
      }
      if (o)
        for (let r = 0; r < a; r++) {
          let o = (r / a) * Math.PI * 2,
            c = ((r + 1) / a) * Math.PI * 2;
          this.tri(
            e,
            t + i,
            n,
            e + Math.cos(c) * s,
            t + i,
            n + Math.sin(c) * s,
            e + Math.cos(o) * s,
            t + i,
            n + Math.sin(o) * s,
          );
        }
    }
    tri(e, t, n, r, i, a, o, s, c) {
      (this.a.set(r - e, i - t, a - n),
        this.b.set(o - e, s - t, c - n),
        this.n.crossVectors(this.a, this.b).normalize());
      let l = this.n,
        u = this.vert(e, t, n, l.x, l.y, l.z, pm[0], pm[1]);
      (this.vert(r, i, a, l.x, l.y, l.z, pm[0], pm[1]),
        this.vert(o, s, c, l.x, l.y, l.z, pm[0], pm[1]),
        this.idx.p3(u, u + 1, u + 2));
    }
    flat(e, t, n, r, i, a) {
      this.quad(e, i, r, n, i, r, n, i, t, e, i, t, a);
    }
    doubleSided() {
      let e = this.pos.n / 3,
        t = this.idx.n;
      (this.pos.reserve(e * 3),
        this.nrm.reserve(e),
        this.uv.reserve(e * 2),
        this.col.reserve(e * 4),
        this.emi.reserve(e * 4),
        this.idx.reserve(t));
      let n = this.pos.a,
        r = this.nrm.a,
        i = this.uv.a,
        a = this.col.a,
        o = this.emi.a;
      (n.copyWithin(e * 3, 0, e * 3),
        i.copyWithin(e * 2, 0, e * 2),
        a.copyWithin(e * 4, 0, e * 4),
        o.copyWithin(e * 4, 0, e * 4));
      for (let t = 0; t < e * 4; t++) r[e * 4 + t] = -r[t];
      ((this.pos.n = e * 6),
        (this.nrm.n = e * 8),
        (this.uv.n = e * 4),
        (this.col.n = this.emi.n = e * 8),
        this.boxC &&
          (this.boxC.reserve(e * 3),
          this.boxH.reserve(e * 3),
          this.boxC.a.copyWithin(e * 3, 0, e * 3),
          this.boxH.a.copyWithin(e * 3, 0, e * 3),
          (this.boxC.n = this.boxH.n = e * 6)));
      let s = this.idx.a;
      for (let n = 0; n < t; n += 3)
        ((s[t + n] = s[n] + e),
          (s[t + n + 1] = s[n + 2] + e),
          (s[t + n + 2] = s[n + 1] + e));
      return ((this.idx.n = t * 2), this);
    }
    transformSince(e, t) {
      let n = new a().getNormalMatrix(t),
        r = this.pos.a,
        i = this.nrm;
      for (let a = e * 3; a < this.pos.n; a += 3) {
        (this.v.set(r[a], r[a + 1], r[a + 2]).applyMatrix4(t),
          (r[a] = this.v.x),
          (r[a + 1] = this.v.y),
          (r[a + 2] = this.v.z));
        let e = a / 3;
        (i.get(e, this.n).applyMatrix3(n).normalize(),
          i.set(e, this.n.x, this.n.y, this.n.z));
      }
    }
    build() {
      ((this.baseTier = 0), this.setTier(0));
      let e = new V();
      (e.setAttribute(`position`, new H(this.pos.out(), 3)),
        e.setAttribute(`normal`, this.nrm.attribute()),
        e.setAttribute(`color`, this.col.attribute()),
        e.setAttribute(`uv`, this.uv.attribute()),
        e.setAttribute(`aEmit`, this.emi.attribute()),
        this.boxC &&
          (e.setAttribute(`aBoxC`, new H(this.boxC.out(), 3)),
          e.setAttribute(`aBoxH`, new H(this.boxH.out(), 3))));
      let t = this.pos.n / 3,
        n = this.idx.a.subarray(0, this.idx.n);
      return (
        e.setIndex(
          t > 65535 ? new H(this.idx.out(), 1) : new H(Uint16Array.from(n), 1),
        ),
        e.computeBoundingSphere(),
        this.dispose(),
        e
      );
    }
    dispose() {
      (this.pos.free(),
        this.nrm.free(),
        this.col.free(),
        this.uv.free(),
        this.emi.free(),
        this.idx.free(),
        this.boxC?.free(),
        this.boxH?.free(),
        (this.boxC = null),
        (this.boxH = null));
    }
  },
  Dm = 1024;
function Om(e, t, n, r) {
  return [e / Dm, 1 - (t + r) / 768, (e + n) / Dm, 1 - t / 768];
}
function km(e) {
  let t = (e - 1) % 24;
  return Om((t % 8) * 128 + 2, Math.floor(t / 8) * 48 + 2, 124, 44);
}
var Am = Om(0, 192, 512, 96),
  jm = Om(512, 192, 256, 96),
  Mm = Om(768, 192, 256, 96);
function Nm(e) {
  let t = e % 12;
  return Om((t % 6) * 160 + 2, 288 + Math.floor(t / 6) * 80 + 2, 156, 76);
}
function Pm(e) {
  return Om((e % 8) * 124 + 2, 450, 120, 36);
}
function Fm(e) {
  let t = e % 16;
  return t < 8 ? Om(t * 128 + 3, 147, 122, 42) : Pm(t - 8);
}
function Im(e) {
  return Om((e % 4) * 256 + 1, 513, 254, 126);
}
function Lm(e) {
  return Om((e % 2) * 128 + 1, 641, 126, 126);
}
var Rm = Om(257, 641, 254, 126),
  zm = Om(513, 641, 126, 126),
  Bm = Om(641, 641, 254, 62),
  Vm = Om(641, 705, 126, 62);
function Hm() {
  let [e, t] = Fe(Dm, 768);
  ((t.fillStyle = `#ffffff`), t.fillRect(0, 0, Dm, 768));
  for (let e = 1; e <= 24; e++) {
    let n = e - 1,
      r = (n % 8) * 128,
      i = Math.floor(n / 8) * 48;
    ((t.fillStyle = `#0f4d63`),
      t.fillRect(r, i, 128, 48),
      (t.strokeStyle = `#e8f1f2`),
      (t.lineWidth = 2),
      t.strokeRect(r + 4, i + 4, 120, 40),
      (t.fillStyle = `#ffffff`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      (t.font = `bold 22px ${K}`),
      t.fillText(`第${e}號水門`, r + 64, i + 20),
      (t.font = `bold 10px ${K}`),
      t.fillText(`WATER GATE ${e}`, r + 64, i + 38));
  }
  {
    let e = [
      [`便當`, `#c0392b`, `#fff4d6`],
      [`五金行`, `#1f4e79`, `#ffffff`],
      [`藥局`, `#1d7a46`, `#ffffff`],
      [`牛肉麵`, `#7b2d12`, `#ffe0a8`],
      [`水電行`, `#f2c14e`, `#1b1b1b`],
      [`早餐店`, `#e67e22`, `#ffffff`],
      [`機車行`, `#2c3e50`, `#ffd400`],
      [`自助餐`, `#8e44ad`, `#ffffff`],
    ];
    for (let n = 0; n < e.length; n++) {
      let [r, i, a] = e[n],
        o = n * 128;
      ((t.fillStyle = i),
        t.fillRect(o + 1, 146, 126, 46),
        (t.strokeStyle = a),
        (t.globalAlpha = 0.5),
        (t.lineWidth = 2),
        t.strokeRect(o + 4, 149, 120, 40),
        (t.globalAlpha = 1),
        (t.fillStyle = a),
        (t.textAlign = `center`),
        (t.textBaseline = `middle`),
        (t.font = `900 30px ${K}`),
        t.fillText(r, o + 64, 170, 114));
    }
  }
  {
    let e = t.createLinearGradient(0, 192, 0, 288);
    (e.addColorStop(0, `#3a2518`),
      e.addColorStop(1, `#23160e`),
      (t.fillStyle = e),
      t.fillRect(0, 192, 512, 96),
      (t.strokeStyle = `#d9a95b`),
      (t.lineWidth = 4),
      t.strokeRect(5, 197, 502, 86),
      (t.fillStyle = `#ffe2a8`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      (t.font = `900 50px ${K}`),
      t.fillText(`大稻埕碼頭`, 256, 232),
      (t.font = `bold 17px ${K}`),
      t.fillText(`DADAOCHENG WHARF  ·  1851`, 256, 270));
  }
  ((t.fillStyle = `#1f6b3a`),
    t.fillRect(512, 192, 256, 96),
    (t.fillStyle = `#fff`),
    (t.textAlign = `center`),
    (t.textBaseline = `middle`),
    (t.font = `900 40px ${K}`),
    t.fillText(`河濱公園`, 640, 230),
    (t.font = `bold 16px ${K}`),
    t.fillText(`RIVERSIDE PARK`, 640, 268),
    (t.fillStyle = `#b3122e`),
    t.fillRect(768, 192, 256, 96),
    (t.fillStyle = `#fff`),
    (t.textAlign = `center`),
    (t.textBaseline = `middle`),
    (t.font = `900 44px ${K}`),
    t.fillText(`美樂華`, 896, 230),
    (t.font = `bold 18px ${K}`),
    t.fillText(`MIRA HAPPY`, 896, 268));
  let n = new Oe(9771),
    r = [
      `#f2c14e`,
      `#f78154`,
      `#4d9078`,
      `#5fad56`,
      `#b4436c`,
      `#3c6997`,
      `#f5f0e1`,
      `#1e2749`,
      `#ef476f`,
      `#06d6a0`,
      `#118ab2`,
      `#ffd166`,
    ];
  for (let e = 0; e < 12; e++) {
    let i = (e % 6) * 160,
      a = 288 + Math.floor(e / 6) * 80;
    switch (
      (t.save(),
      t.beginPath(),
      t.rect(i, a, 160, 80),
      t.clip(),
      (t.fillStyle = r[e % r.length]),
      t.fillRect(i, a, 160, 80),
      e)
    ) {
      case 0:
      case 6: {
        let n = t.createLinearGradient(0, a, 0, a + 80);
        (n.addColorStop(0, e === 0 ? `#ff9a5a` : `#2b2f6b`),
          n.addColorStop(1, e === 0 ? `#ffd28a` : `#b04a7a`),
          (t.fillStyle = n),
          t.fillRect(i, a, 160, 80),
          (t.fillStyle = e === 0 ? `#ffef9a` : `#ffe8f0`),
          t.beginPath(),
          t.arc(i + 118, a + 44, 14, 0, Math.PI * 2),
          t.fill(),
          (t.fillStyle = `#243447`));
        let r = i + 50;
        t.fillRect(r - 1, a + 6, 2, 8);
        for (let e = 0; e < 8; e++) {
          let n = a + 14 + e * 5.5;
          (t.beginPath(),
            t.moveTo(r - 4, n),
            t.lineTo(r + 4, n),
            t.lineTo(r + 6, n + 5.5),
            t.lineTo(r - 6, n + 5.5),
            t.fill());
        }
        t.fillRect(r - 9, a + 58, 18, 10);
        for (let e = 0; e < 14; e++)
          t.fillRect(i + e * 12, a + 64 - ((e * 37) % 13), 10, 20);
        t.fillStyle = `#1b3d5c`;
        for (let e = 0; e < 3; e++) {
          t.beginPath();
          for (let n = 0; n <= 160; n += 8)
            t.lineTo(i + n, a + 70 + e * 4 + Math.sin(n * 0.15 + e) * 2);
          (t.lineTo(i + 160, a + 80), t.lineTo(i, a + 80), t.fill());
        }
        break;
      }
      case 1:
      case 7:
        ((t.fillStyle = `#fff4dc`),
          t.beginPath(),
          t.moveTo(i + 58, a + 14),
          t.lineTo(i + 102, a + 14),
          t.lineTo(i + 96, a + 72),
          t.lineTo(i + 64, a + 72),
          t.fill(),
          (t.fillStyle = `#c98b5a`),
          t.fillRect(i + 60, a + 34, 40, 34),
          (t.fillStyle = `#2a1a12`));
        for (let e = 0; e < 12; e++)
          (t.beginPath(),
            t.arc(
              i + 66 + (e % 5) * 7,
              a + 58 + Math.floor(e / 5) * 5,
              2.6,
              0,
              7,
            ),
            t.fill());
        ((t.fillStyle = `#e63946`),
          t.fillRect(i + 84, a + 2, 5, 30),
          (t.fillStyle = `#fff`),
          (t.font = `900 16px ${K}`),
          (t.textAlign = `left`),
          t.fillText(`珍奶`, i + 8, a + 26));
        break;
      case 2:
      case 8:
        for (let n = 0; n < 4; n++) {
          let o = i + 12 + n * 38,
            s = a + 50;
          ((t.fillStyle = r[(e + n * 3) % r.length]),
            t.beginPath(),
            t.ellipse(o + 14, s, 16, 8, 0, 0, 7),
            t.fill(),
            (t.fillStyle = `#222`),
            t.beginPath(),
            t.arc(o + 2, s + 10, 5, 0, 7),
            t.fill(),
            t.beginPath(),
            t.arc(o + 26, s + 10, 5, 0, 7),
            t.fill(),
            (t.fillStyle = `#333`),
            t.fillRect(o + 22, s - 20, 3, 14));
        }
        ((t.fillStyle = `#1e2749`),
          (t.font = `900 18px ${K}`),
          (t.textAlign = `left`),
          t.fillText(`機車瀑布`, i + 8, a + 22));
        break;
      case 3:
      case 9:
        ((t.fillStyle = e === 3 ? `#8c1c13` : `#1d3557`),
          t.fillRect(i, a, 160, 80));
        for (let n = 0; n < 3; n++)
          for (let r = 0; r < 9; r++) {
            let o = i + r * 20 + (n % 2) * 10,
              s = a + 14 + n * 26;
            ((t.fillStyle = [`#f4d35e`, `#fdfcdc`, `#ee964b`][(r + n) % 3]),
              t.beginPath(),
              t.moveTo(o, s - 9),
              t.lineTo(o + 9, s),
              t.lineTo(o, s + 9),
              t.lineTo(o - 9, s),
              t.fill(),
              (t.fillStyle = e === 3 ? `#8c1c13` : `#1d3557`),
              t.fillRect(o - 2.5, s - 2.5, 5, 5));
          }
        break;
      case 4:
      case 10:
        ((t.fillStyle = `#12355b`), t.fillRect(i, a, 160, 80));
        for (let e = 0; e < 5; e++) {
          let n = i + 16 + e * 32,
            r = a + 16 + (e % 2) * 8;
          ((t.fillStyle = `#d62828`),
            t.beginPath(),
            t.ellipse(n, r + 10, 10, 13, 0, 0, 7),
            t.fill(),
            (t.fillStyle = `#fcbf49`),
            t.fillRect(n - 6, r - 4, 12, 3),
            t.fillRect(n - 6, r + 22, 12, 3));
        }
        for (let e = 0; e < 3; e++) {
          let n = i + 30 + e * 50,
            r = a + 64;
          ((t.fillStyle = e === 1 ? `#fff` : `#f77f00`),
            t.beginPath(),
            t.ellipse(n, r, 14, 6, 0.2, 0, 7),
            t.fill(),
            t.beginPath(),
            t.moveTo(n - 12, r),
            t.lineTo(n - 22, r - 6),
            t.lineTo(n - 22, r + 6),
            t.fill());
        }
        break;
      default: {
        for (let e = 0; e < 7; e++)
          ((t.fillStyle = r[n.int(0, r.length - 1)]),
            t.fillRect(
              i + n.range(-20, 150),
              a + n.range(-20, 70),
              n.range(20, 70),
              n.range(15, 50),
            ));
        ((t.fillStyle = `#ffffff`),
          (t.strokeStyle = `#1e2749`),
          (t.lineWidth = 4),
          (t.textAlign = `center`),
          (t.textBaseline = `middle`),
          (t.font = `900 34px ${K}`));
        let o = e === 5 ? `台北` : `TAIPEI`;
        (t.strokeText(o, i + 80, a + 42), t.fillText(o, i + 80, a + 42));
      }
    }
    ((t.globalAlpha = 0.12), (t.fillStyle = `#000`));
    for (let e = 0; e < 10; e++)
      t.fillRect(
        i + n.range(0, 160),
        a + n.range(0, 30),
        n.range(1, 3),
        n.range(20, 60),
      );
    ((t.globalAlpha = 1), t.restore());
  }
  let i = [
      `雞排`,
      `珍珠奶茶`,
      `精釀啤酒`,
      `烤魷魚`,
      `鹹酥雞`,
      `芒果冰`,
      `烤玉米`,
      `咖啡`,
    ],
    a = [
      `#e63946`,
      `#8d5524`,
      `#f4a261`,
      `#264653`,
      `#e76f51`,
      `#ffb703`,
      `#2a9d8f`,
      `#3d405b`,
    ];
  for (let e = 0; e < 8; e++) {
    let n = e * 124;
    ((t.fillStyle = a[e]),
      t.fillRect(n, 448, 124, 40),
      (t.fillStyle = `#fff`),
      (t.textAlign = `center`),
      (t.textBaseline = `middle`),
      (t.font = `900 24px ${K}`),
      t.fillText(i[e], n + 62, 469));
  }
  return (Um(t), Ve(e, { srgb: !0, mipmaps: !0, anisotropy: 4 }));
}
function Um(e) {
  let t = new Oe(4411);
  ((e.textAlign = `center`), (e.textBaseline = `middle`));
  for (let n = 0; n < 4; n++) {
    let r = n * 256;
    if (
      (e.save(), e.beginPath(), e.rect(r, 512, 256, 128), e.clip(), n === 0)
    ) {
      let t = e.createLinearGradient(0, 512, 0, 612);
      (t.addColorStop(0, `#7fb8e6`),
        t.addColorStop(1, `#d9eef7`),
        (e.fillStyle = t),
        e.fillRect(r, 512, 256, 128),
        (e.fillStyle = `#5f9b54`),
        e.beginPath(),
        e.moveTo(r, 592));
      for (let t = 0; t <= 256; t += 16)
        e.lineTo(
          r + t,
          574 + Math.sin(t * 0.04 + 1) * 12 + Math.sin(t * 0.11) * 5,
        );
      (e.lineTo(r + 256, 612),
        e.lineTo(r, 612),
        e.fill(),
        (e.fillStyle = `#86bf5a`),
        e.fillRect(r, 600, 256, 14));
      for (let t = 0; t < 9; t++) {
        let n = r + 14 + t * 29;
        ((e.fillStyle = `#3f7a3a`),
          e.beginPath(),
          e.arc(n, 592, 9, 0, 7),
          e.fill(),
          (e.fillStyle = `#6b4a2b`),
          e.fillRect(n - 1.5, 598, 3, 8));
      }
      ((e.fillStyle = `#ffffff`),
        e.fillRect(r, 614, 256, 26),
        (e.fillStyle = `#1d6b3a`),
        (e.font = `900 15px ${K}`),
        e.fillText(`施工中 請注意安全  UNDER CONSTRUCTION`, r + 128, 627, 244));
    } else if (n === 1) {
      let n = e.createLinearGradient(r, 0, r + 256, 0);
      (n.addColorStop(0, `#0f1c33`),
        n.addColorStop(1, `#23395d`),
        (e.fillStyle = n),
        e.fillRect(r, 512, 256, 128),
        (e.fillStyle = `#c9a45c`),
        e.fillRect(r + 180, 530, 26, 104),
        e.fillRect(r + 212, 552, 20, 82),
        (e.fillStyle = `#e8d3a2`));
      for (let n = 0; n < 12; n++)
        for (let i = 0; i < 3; i++)
          t.chance(0.55) && e.fillRect(r + 183 + i * 8, 534 + n * 8, 5, 4);
      ((e.fillStyle = `#e8c982`),
        (e.textAlign = `left`),
        (e.font = `900 34px ${K}`),
        e.fillText(`璞悅天際`, r + 14, 554),
        (e.font = `bold 13px ${K}`),
        e.fillText(`南港 · 百米水岸地標`, r + 16, 586),
        (e.fillStyle = `#ffffff`),
        (e.font = `bold 12px ${K}`),
        e.fillText(`預約賞屋 0800-168-101`, r + 16, 612),
        (e.textAlign = `center`));
    } else if (n === 2) {
      ((e.fillStyle = `#f4f4ef`),
        e.fillRect(r, 512, 256, 128),
        (e.fillStyle = `#2f8f4e`),
        e.fillRect(r, 524, 256, 16),
        e.fillRect(r, 618, 256, 8),
        (e.fillStyle = `#1b3f6b`),
        (e.font = `900 24px ${K}`),
        e.fillText(`大豐營造 工程告示`, r + 128, 562),
        (e.font = `bold 13px ${K}`),
        (e.fillStyle = `#333333`),
        e.fillText(`敦親睦鄰 施工期間造成不便 敬請見諒`, r + 128, 590),
        e.fillText(`工地主任 ☎ 02-2785-XXXX`, r + 128, 608),
        (e.strokeStyle = `#c9c9c0`),
        (e.lineWidth = 2));
      for (let t = 1; t < 4; t++)
        (e.beginPath(),
          e.moveTo(r + t * 64, 512),
          e.lineTo(r + t * 64, 524),
          e.stroke());
    } else {
      let n = e.createLinearGradient(0, 512, 0, 640);
      (n.addColorStop(0, `#2d3a78`),
        n.addColorStop(0.6, `#e27d60`),
        n.addColorStop(1, `#f6c177`),
        (e.fillStyle = n),
        e.fillRect(r, 512, 256, 128),
        (e.fillStyle = `#1f2442`));
      let i = r;
      for (; i < r + 256;) {
        let n = t.range(12, 26),
          r = t.range(20, 70);
        (e.fillRect(i, 640 - r, n - 2, r), (i += n));
      }
      e.fillStyle = `#ffd28a`;
      for (let n = 0; n < 60; n++)
        e.fillRect(r + t.range(0, 256), 512 + t.range(70, 124), 2, 2);
      ((e.fillStyle = `#ffffff`),
        (e.font = `900 22px ${K}`),
        e.fillText(`新城 · 新生活`, r + 128, 542));
    }
    ((e.globalAlpha = 0.18), (e.fillStyle = `#000`));
    for (let t = 1; t < 4; t++) e.fillRect(r + t * 64 - 1, 512, 2, 128);
    e.globalAlpha = 0.08;
    for (let n = 0; n < 14; n++)
      e.fillRect(
        r + t.range(0, 256),
        512 + t.range(60, 128),
        t.range(1, 3),
        t.range(10, 40),
      );
    ((e.globalAlpha = 1), e.restore());
  }
  let n = (t, n, r, i) => {
    (e.restore(), e.save(), e.beginPath(), e.rect(t, n, r, i), e.clip());
  };
  e.save();
  for (let r = 0; r < 2; r++) {
    let i = r * 128;
    (n(i, 640, 128, 128),
      (e.fillStyle = r === 0 ? `#8a969c` : `#2f6ea3`),
      e.fillRect(i, 640, 128, 128));
    for (let t = 0; t < 128; t += 8)
      ((e.fillStyle = `rgba(255,255,255,0.18)`),
        e.fillRect(i + t, 640, 3, 128),
        (e.fillStyle = `rgba(0,0,0,0.22)`),
        e.fillRect(i + t + 5, 640, 2, 128));
    (r === 1 && ((e.fillStyle = `#f2f2f2`), e.fillRect(i, 660, 128, 16)),
      (e.globalAlpha = 0.28),
      (e.fillStyle = `#7a4a26`));
    for (let n = 0; n < 10; n++)
      e.fillRect(
        i + t.range(0, 124),
        640 + t.range(60, 110),
        t.range(2, 5),
        t.range(10, 30),
      );
    e.globalAlpha = 1;
  }
  (n(256, 640, 256, 128),
    (e.fillStyle = `#f28c1a`),
    e.fillRect(256, 640, 256, 128),
    (e.fillStyle = `#ffffff`));
  for (let t = -4; t < 12; t++)
    (e.beginPath(),
      e.moveTo(256 + t * 24, 768),
      e.lineTo(256 + t * 24 + 12, 768),
      e.lineTo(256 + t * 24 + 40, 740),
      e.lineTo(256 + t * 24 + 28, 740),
      e.fill());
  ((e.fillStyle = `#1a1a1a`),
    e.fillRect(264, 648, 240, 88),
    (e.fillStyle = `#ffd400`),
    (e.font = `900 28px ${K}`),
    e.fillText(`道路施工 前方封閉`, 384, 680, 228),
    (e.font = `bold 13px ${K}`),
    (e.fillStyle = `#ffffff`),
    e.fillText(`ROAD WORK · ROAD CLOSED AHEAD`, 384, 716, 228),
    n(512, 640, 128, 128),
    (e.fillStyle = `#ffd21f`),
    e.fillRect(512, 640, 128, 128),
    (e.fillStyle = `#1b4f9c`),
    e.fillRect(520, 648, 112, 78),
    (e.fillStyle = `#ffffff`),
    (e.font = `900 64px Arial, sans-serif`),
    e.fillText(`P`, 576, 690),
    (e.fillStyle = `#1b1b1b`),
    (e.font = `900 18px ${K}`),
    e.fillText(`計時停車`, 576, 746),
    n(640, 640, 256, 64),
    (e.fillStyle = `#b31d1d`),
    e.fillRect(640, 640, 256, 64),
    (e.fillStyle = `#ffffff`),
    (e.font = `900 26px ${K}`),
    e.fillText(`鴻運貨運 南港站`, 768, 666),
    (e.font = `bold 11px ${K}`),
    e.fillText(`HONG-YUN FREIGHT · NANGANG YARD`, 768, 692),
    n(640, 704, 128, 64),
    (e.fillStyle = `#9aa0a4`),
    e.fillRect(640, 704, 128, 64));
  for (let t = 0; t < 64; t += 4)
    ((e.fillStyle = t % 8 == 0 ? `rgba(255,255,255,0.2)` : `rgba(0,0,0,0.18)`),
      e.fillRect(640, 704 + t, 128, 2));
  ((e.globalAlpha = 0.5),
    (e.fillStyle = `#3b3b3b`),
    (e.font = `900 16px ${K}`),
    e.fillText(`吉屋出租`, 704, 736),
    (e.globalAlpha = 1),
    e.restore());
}
var Wm = {
  uWheelCenter: { value: new U(0, 0, 0) },
  uWheelAngle: { value: 0 },
  uLitFrac: { value: 0.5 },
  uLodNear: { value: 800 },
};
function Gm(e, t) {
  let n = new D({ vertexColors: !0, map: e });
  n.name = `env-props-${t}`;
  let r = { value: +(t === `lod`) };
  return (
    (n.defines = { FOG_NO_CLIP: `` }),
    (n.onBeforeCompile = (e) => {
      ((e.uniforms.uNight = q.uNight),
        (e.uniforms.uTime = q.uTime),
        (e.uniforms.uWet = q.uWet),
        (e.uniforms.uWheelCenter = Wm.uWheelCenter),
        (e.uniforms.uLitFrac = Wm.uLitFrac),
        (e.uniforms.uWheelAngle = Wm.uWheelAngle),
        (e.uniforms.uLodNear = Wm.uLodNear),
        (e.uniforms.uLodCull = r),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
attribute vec3 aEmit;
varying vec3 vEmit;
varying vec3 vPWorld;
varying vec3 vPNrm;
uniform vec3 uWheelCenter;
uniform float uWheelAngle;
attribute vec3 aBoxC;
attribute vec3 aBoxH;
uniform float uLodNear;
uniform float uLodCull;`,
          )
          .replace(
            `#include <project_vertex>`,
            `#include <project_vertex>
        if (uLodCull > 0.5) {
          // city LOD: drop the whole owner box while any part of it is nearer than uLodNear (view depth): the real
          // city still covers that range, and a box crossing the far camera's near plane would be sliced
          vec3 lr2 = vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
          float lDepth = -(dot(lr2, aBoxC) + viewMatrix[3][2]);
          if (aBoxH.x >= 0.0 && lDepth - dot(abs(lr2), aBoxH) < uLodNear) gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
        }`,
          )
          .replace(
            `#include <beginnormal_vertex>`,
            `#include <beginnormal_vertex>
        if (aEmit.z < -0.5) {
          float wc = cos(uWheelAngle), ws = sin(uWheelAngle);
          objectNormal = vec3(wc * objectNormal.x - ws * objectNormal.y, ws * objectNormal.x + wc * objectNormal.y, objectNormal.z);
        }`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
        if (aEmit.z < -0.5) {
          // ferris wheel parts spin around the hub (props mesh is in world space)
          float wc = cos(uWheelAngle), ws = sin(uWheelAngle);
          vec3 wd = transformed - uWheelCenter;
          transformed = uWheelCenter + vec3(wc * wd.x - ws * wd.y, ws * wd.x + wc * wd.y, wd.z);
        }
        vEmit = aEmit;
        vPWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vPNrm = normalize(mat3(modelMatrix) * objectNormal);`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
        uniform float uNight;
        uniform float uTime;
        uniform float uWet;
        uniform vec3 uWheelCenter;
        uniform float uLitFrac;
        varying vec3 vEmit;
        varying vec3 vPWorld;
        varying vec3 vPNrm;
        ${yp}
        vec3 eHue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
        // one family of lattice lines at integer t, half-width w (in cells), anti-aliased; its mean coverage once a cell
        // shrinks under ~2 px (no moiré on a 2 km tower)
        float tkLatLine(float t, float w) {
          float fw = max(fwidth(t), 1e-4);
          float d = abs(fract(t + 0.5) - 0.5);
          return mix(clamp((w - d) / fw + 0.5, 0.0, 1.0), 2.0 * w, smoothstep(0.3, 0.75, fw));
        }`,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
        float pWinLit = 0.0;
        float pWinCage = 0.0;
        vec3 pWinTint = vec3(1.0);
        vec3 pWinCol = vec3(0.0);
        if (vEmit.z > 1003.5 && vEmit.z < 1005.5) {
          // 《東京狂飆》 the Skytree's steel truss (regions/tokyo/environment/skytree.ts): the UV is a lattice coordinate
          // (u × 64 = diamonds round, v × 256 = diamond rows), not an atlas texel — diagonals both ways, a ring every second
          // row, a column at every diamond vertex; between them the shadowed inner structure. 1005 = the night skin
          // (environment/lights.ts): lit lines, dim gaps.
          vec2 lq = vec2(vMapUv.x * 64.0, vMapUv.y * 256.0);
          bool lDay = vEmit.z < 1004.5;
          float lw = 0.08;
          float lm = 1.0 - (1.0 - tkLatLine(lq.x + lq.y, lw)) * (1.0 - tkLatLine(lq.x - lq.y, lw))
            * (1.0 - tkLatLine(lq.y * 0.5, lDay ? lw * 0.7 : lw * 0.4)) * (1.0 - tkLatLine(lq.x, lw * 0.5));
          vec3 lgap = lDay ? vec3(0.42, 0.47, 0.54) : vec3(0.1);
          diffuseColor.rgb = diffuse * vColor.rgb * mix(lgap, vec3(1.0), lm);
        } else if (vEmit.z > 999.5 && vPNrm.y > 0.5) {
          // procedural ground surfaces near the camera (edge districts): 1001 = sidewalk tiles, 1002 = asphalt
          float nearP = 1.0 - smoothstep(35.0, 150.0, distance(vPWorld, cameraPosition));
          if (nearP > 0.001) {
            vec2 gp = vPWorld.xz;
            if (vEmit.z < 1001.5) {
              vec2 q = gp / 0.3;
              q.x += step(1.0, mod(floor(q.y), 2.0)) * 0.5;
              vec2 cid = floor(q), fq = fract(q);
              float t = eHash12(cid);
              float joint = 1.0 - smoothstep(0.025, 0.07, min(min(fq.x, 1.0 - fq.x), min(fq.y, 1.0 - fq.y)));
              vec3 tc = diffuseColor.rgb * (0.9 + 0.2 * t);
              if (t > 0.86) tc *= vec3(1.1, 0.93, 0.86);
              tc *= (1.0 - 0.28 * joint) * (0.9 + 0.12 * eNoise(gp * 1.3));
              diffuseColor.rgb = mix(diffuseColor.rgb, tc, nearP);
            } else {
              float n = eNoise(gp * 3.1) * 0.45 + eNoise(gp * 13.0) * 0.3 + eNoise(gp * 0.31) * 0.25;
              diffuseColor.rgb *= mix(1.0, 0.82 + 0.34 * n, nearP);
            }
          }
        } else if (vEmit.z > 1002.5 && vEmit.z < 1003.5) {
          // 1003 = lit shop interior seen through the glazing (edge-district walk-ups): shelves of goods on a
          // bright back wall, a ceiling light band — instead of a flat white lightbox
          float su = abs(vPNrm.x) > 0.5 ? vPWorld.z : vPWorld.x;
          float sy = vPWorld.y;
          float sf = fract(sy / 0.46);
          float board = smoothstep(0.0, 0.05, sf) * (1.0 - smoothstep(0.1, 0.16, sf));
          vec2 pc = floor(vec2(su / 0.16, sy / 0.46));
          float h1 = eHash12(pc + vEmit.x), h2 = eHash12(pc + 7.1);
          vec3 goods = mix(vec3(0.95, 0.9, 0.8), vec3(0.35 + 0.65 * h1, 0.35 + 0.65 * h2, 0.35 + 0.65 * eHash12(pc + 3.3)), 0.55);
          goods *= 0.75 + 0.25 * step(0.25, fract(su / 0.16));
          vec3 wall = mix(goods, vec3(0.92, 0.9, 0.86), board * 0.85);
          // aisle gaps (whole shelf units missing) and a darker counter zone
          wall *= mix(1.0, 0.55, step(0.82, eHash12(vec2(floor(su / 1.3), 2.0))));
          diffuseColor.rgb *= wall;
        } else if (vEmit.z > 0.5 && vEmit.z < 999.5 && abs(vPNrm.y) < 0.5) {
          float wu = abs(vPNrm.x) > 0.5 ? vPWorld.z : vPWorld.x;
          float wv = vPWorld.y;
          vec2 wc = vec2(wu / 3.2, wv / 3.3);
          vec2 cell = floor(wc);
          vec2 f = fract(wc);
          float inWinS = step(0.14, f.x) * step(f.x, 0.86) * step(0.26, f.y) * step(f.y, 0.88);
          // procedural LOD: fwp = window cells per pixel
          float fwp = max(fwidth(wc.x), fwidth(wc.y));
          float aa = smoothstep(0.22, 0.55, fwp);
          float inWin = mix(inWinS, 0.45, aa);
          float bh = eHash12(vec2(vEmit.z, 1.3));
          float lf = uLitFrac * (0.15 + 0.85 * bh * bh);
          vec3 glass = diffuseColor.rgb * 0.32 + vec3(0.025, 0.035, 0.05);
          // close range (edge walk-ups, riverside blocks): Taipei 公寓 facade detail — mosaic-tile grout, grime
          // streaks under the sills, AC boxes, aluminium frames + centre mullion, sky-reflecting glass, curtains
          // and iron window cages (鐵窗). Fades out by ~0.09 window cells per pixel.
          float nearW = 1.0 - smoothstep(0.02, 0.09, fwp);
          if (nearW > 0.001) {
            float r1 = eHash12(cell + vEmit.z * 3.1), r2 = eHash12(cell * 1.7 + 9.2 + bh), r3 = eHash12(cell * 2.3 + 4.1 + vEmit.z);
            vec2 tq = abs(fract(vec2(wu, wv) / 0.21) - 0.5);
            float grout = smoothstep(0.43, 0.49, max(tq.x, tq.y));
            float streak = (1.0 - step(0.26, f.y)) * (1.0 - smoothstep(0.2, 0.36, abs(f.x - 0.5))) * (0.45 + 0.55 * eNoise(vec2(wu * 7.0, wv * 0.6)));
            vec3 wallC = diffuseColor.rgb * (1.0 - nearW * (0.08 * grout + 0.2 * streak));
            if (r3 < 0.32) {
              vec2 ac = (f - vec2(0.72, 0.13)) / vec2(0.12, 0.085);
              if (max(abs(ac.x), abs(ac.y)) < 1.0) {
                wallC = mix(wallC, vec3(0.66, 0.66, 0.64), nearW);
                wallC *= 1.0 - 0.45 * nearW * (1.0 - smoothstep(0.42, 0.55, length((ac - vec2(0.35, 0.0)) * vec2(1.0, 0.72))));
              }
            }
            diffuseColor.rgb = wallC;
            if (inWinS > 0.5) {
              float gy = (f.y - 0.26) / 0.62;
              vec3 g2 = mix(vec3(0.02, 0.024, 0.03), vec3(0.14, 0.16, 0.19), 0.25 + 0.55 * gy + 0.2 * eHash12(cell + 0.7));
              if (r1 < 0.42) {
                float side = step(0.5, f.x);
                vec3 cc = r2 < 0.33 ? vec3(0.55, 0.5, 0.4) : (r2 < 0.66 ? vec3(0.48, 0.38, 0.36) : vec3(0.36, 0.42, 0.46));
                float cm = (r1 < 0.2 ? side : 1.0 - side) * 0.85;
                g2 = mix(g2, cc * 0.55, cm);
                // lit at night: the curtain glows in its own colour, a little dimmer than the open pane
                pWinTint = mix(vec3(1.0), cc * 1.35, cm * nearW);
              }
              float fr = max(max(step(f.x, 0.165), step(0.835, f.x)), max(step(f.y, 0.285), step(0.855, f.y)));
              fr = max(fr, step(abs(f.x - 0.5), 0.012));
              g2 = mix(g2, vec3(0.5, 0.51, 0.52), fr);
              // interior depth: the lit room is brighter at the top (ceiling light), frames never glow
              pWinTint *= (1.0 - fr * nearW) * mix(1.0, 0.75 + 0.35 * gy, nearW);
              if (r2 > 0.52) {
                float bars = step(0.8, fract(f.x * 15.0 + 0.3)) + step(abs(f.y - 0.58), 0.012) + step(abs(f.y - 0.3), 0.012);
                pWinCage = clamp(bars, 0.0, 1.0) * nearW;
                g2 = mix(g2, vec3(0.15, 0.13, 0.11), pWinCage * 0.95);
              }
              glass = mix(glass, g2, nearW);
            }
          }
          diffuseColor.rgb = mix(diffuseColor.rgb, glass, inWin * 0.9);
          // lit windows: near = exact rectangles; far = grouped cells rendered as ~2px light points
          float lvl = max(0.0, ceil(log2(fwp * 3.5)));
          float scl = exp2(min(lvl, 5.0));
          vec2 gc = wc / scl;
          vec2 gcell = floor(gc);
          vec2 gf = fract(gc) - 0.5;
          float r = eHash12((lvl < 0.5 ? cell : gcell * 7.31 + lvl) + vEmit.z * 13.7);
          float pLit = lvl < 0.5 ? lf : 1.0 - pow(1.0 - lf, scl * 0.9);
          // (《東京狂飆》 whole floors lit or dark, as offices and flats read at night — not single sparkling cells)
          if (lvl < 0.5) pLit = step(eHash12(vec2(cell.y, vEmit.z * 1.7 + 0.3)), lf) > 0.5 ? 0.85 : 0.1;
          float shape = lvl < 0.5 ? inWinS : smoothstep(0.42, 0.18, length(gf));
          pWinLit = shape * step(r, pLit) * (lvl < 0.5 ? 1.0 : 0.9);
          // (《東京狂飆》 one light colour per building, a fifth of the windows another: a tower reads as one lit grid,
          // not confetti)
          float wch = eHash12(vec2(vEmit.z, 2.7));
          if (eHash12((lvl < 0.5 ? cell : gcell) + 5.3) < 0.2) wch = fract(wch + 0.5);
          pWinCol = wch < 0.5 ? vec3(1.0, 0.68, 0.36) : (wch < 0.8 ? vec3(0.8, 0.9, 1.0) : vec3(0.85, 1.0, 0.82));
        }
        diffuseColor.rgb *= 1.0 - 0.22 * uWet * step(0.5, vPNrm.y);`,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
        {
          float mode = vEmit.y;
          float on = uNight;
          if (mode > 0.5 && mode < 1.5) on = 1.0;
          else if (mode > 1.5 && mode < 2.5) on = mix(0.3, 1.0, uNight) * step(0.55, fract(uTime * 0.7 + vEmit.z * 0.37));
          else if (mode > 2.5 && mode < 3.5) on = step(0.9, fract(uTime * 1.05)) + step(0.9, fract(uTime * 1.05 + 0.18));
          else if (mode > 3.5 && mode < 4.5) on = uNight;
          else if (mode > 4.5) on = 1.0;
          vec3 ec = diffuseColor.rgb;
          if (mode > 3.5 && mode < 4.5) {
            vec3 d = vPWorld - uWheelCenter;
            float ang = atan(d.y, d.x) / 6.2831853;
            float rad = length(d.xy) / 36.0;
            float phase = floor(mod(uTime / 12.0, 3.0));
            float h = phase < 0.5 ? ang + uTime * 0.05 : (phase < 1.5 ? rad * 0.8 - uTime * 0.25 : ang * 3.0 - uTime * 0.12);
            ec = eHue(fract(h)) * 0.9 + 0.1;
          }
          totalEmissiveRadiance += ec * vEmit.x * on;
          // lit windows: full strength on distant skylines, softer up close (walk-ups beside the player)
          totalEmissiveRadiance += pWinCol * pWinTint * pWinLit * (1.0 - 0.85 * pWinCage) * 1.25 * mix(0.08, 1.0, uNight) * mix(0.5, 1.0, smoothstep(40.0, 320.0, distance(vPWorld, cameraPosition)));
        }`,
          )));
    }),
    (n.customProgramCacheKey = () => `env-props-tk6`),
    n
  );
}
var Km = 4.5,
  qm = 2.2;
function Jm(e, t, n, r, i) {
  let a = n.bounds,
    o = new Oe(29134),
    s = [],
    c = [],
    l = (e, n) => t.height(e, n),
    u = (e, t) => Math.abs(l(e, t) - 0.15) < 0.9,
    d = n.roads.filter(
      (e) =>
        e.axis === `x` &&
        e.from <= a.minX + 1 &&
        !e.pedestrian &&
        Math.abs(e.at - a.minZ) > 30,
    ),
    f = n.roads.filter(
      (e) =>
        e.axis === `z` &&
        e.from <= a.minZ + 1 &&
        !e.pedestrian &&
        Math.abs(e.at - a.minX) > 30,
    );
  (d.sort((e, t) => e.at - t.at), f.sort((e, t) => e.at - t.at));
  let p = 3,
    m = d.map((e) => ({ c: e.at, half: e.halfTotal, n: p++ })),
    h = (e, t = 0) => !1,
    g = f
      .map((e) => ({ c: e.at, half: e.halfTotal, n: p++ }))
      .filter((e) => !h(e.c, e.half)),
    _ = [],
    v = a.minX - 0.2 - qm,
    y = a.minX - 0.2,
    b = a.minZ - 0.2 - qm,
    x = a.minZ - 0.2,
    S = 2.8,
    C = (e, t, n, r) => {
      let i = [],
        a = t;
      for (let e of r) {
        let t = e.c - e.half - S,
          n = e.c + e.half + S;
        (t > a && i.push([a, t]), (a = Math.max(a, n)));
      }
      a < n && i.push([a, n]);
      for (let [t, n] of i) w(e, t, n);
      for (let t of r) T(e, t);
    },
    w = (t, n, i) => {
      let a = Km;
      if (t === `z`) {
        (e.setColor(0.4, 0.395, 0.375),
          e.boxMinMax(v, -0.6, n, y, a, i, 5),
          e.setColor(0.25, 0.25, 0.235),
          e.quad(v, -0.6, n, v, -0.6, i, v, 1, i, v, 1, n),
          e.setColor(0.43, 0.425, 0.4),
          e.quad(v, 1, n, v, 1, i, v, a, i, v, a, n),
          e.setColor(0.52, 0.51, 0.49),
          e.boxMinMax(v - 0.25, a, n, y + 0.15, 4.8, i, 7));
        for (let t = n + 8; t + 7 < i - 4; t += 26 + o.range(0, 30)) {
          if (!o.chance(0.62)) continue;
          let n = 6.4;
          (e.setColor(1, 1, 1),
            e.quad(
              v - 0.03,
              1.1,
              t,
              v - 0.03,
              1.1,
              t + n,
              v - 0.03,
              4.2,
              t + n,
              v - 0.03,
              4.2,
              t,
              Nm(o.int(0, 11)),
            ),
            (t += n));
        }
        r?.addBox(v, n, y, i, -1, 4.8, `wall`);
      } else {
        (e.setColor(0.4, 0.395, 0.375),
          e.boxMinMax(n, -0.6, b, i, a, x, 20),
          e.setColor(0.25, 0.25, 0.235),
          e.quad(i, -0.6, b, n, -0.6, b, n, 1, b, i, 1, b),
          e.setColor(0.43, 0.425, 0.4),
          e.quad(i, 1, b, n, 1, b, n, a, b, i, a, b),
          e.setColor(0.52, 0.51, 0.49),
          e.boxMinMax(n, a, b - 0.25, i, 4.8, x + 0.15, 52));
        for (let t = n + 8; t + 7 < i - 4; t += 26 + o.range(0, 30)) {
          if (!o.chance(0.62)) continue;
          let n = 6.4;
          (e.setColor(1, 1, 1),
            e.quad(
              t + n,
              1.1,
              b - 0.03,
              t,
              1.1,
              b - 0.03,
              t,
              4.2,
              b - 0.03,
              t + n,
              4.2,
              b - 0.03,
              Nm(o.int(0, 11)),
            ),
            (t += n));
        }
        r?.addBox(n, b, i, x, -1, 4.8, `wall`);
      }
    },
    T = (t, n) => {
      let a = -0.4,
        o = 5.7,
        s = n.c - n.half - S,
        l = n.c + n.half + S;
      if (t === `z`) {
        let t = (v + y) / 2;
        _.push({ x: t, z: n.c, n: n.n, axis: `x` });
        for (let [t, o] of [
          [s, n.c - n.half],
          [n.c + n.half, l],
        ])
          (e.setColor(0.47, 0.46, 0.44),
            e.boxMinMax(v - 0.4, a, t, y + 0.4, 7, o),
            r?.addBox(v - 0.4, t, y + 0.4, o, -1, 7, `wall`),
            e.setColor(0.18, 0.3, 0.34),
            e.boxMinMax(
              v - 1.2,
              0.1,
              t < n.c ? t - 7 : o,
              v - 0.5,
              4.2,
              t < n.c ? t : o + 7,
            ),
            e.setColor(1, 0.85, 0.6).setEmit(3, 0),
            e.boxMinMax(
              v - 0.7,
              4.8,
              (t + o) / 2 - 0.3,
              v - 0.4,
              5.3,
              (t + o) / 2 + 0.3,
            ),
            e.noEmit(),
            i?.add(v - 3, 0.3, (t + o) / 2, 5, 1, 0.8, 0.55, 0.28));
        (e.setColor(0.45, 0.44, 0.42),
          e.boxMinMax(v - 0.4, o, n.c - n.half, y + 0.4, 7, n.c + n.half, 15));
        let d = 7.2,
          f = 5.72;
        (e.setColor(1, 1, 1).setEmit(0.55, 0),
          e.quad(
            v - 0.43,
            f,
            n.c - d / 2,
            v - 0.43,
            f,
            n.c + d / 2,
            v - 0.43,
            7.02,
            n.c + d / 2,
            v - 0.43,
            7.02,
            n.c - d / 2,
            km(n.n),
          ),
          e.quad(
            y + 0.43,
            f,
            n.c + d / 2,
            y + 0.43,
            f,
            n.c - d / 2,
            y + 0.43,
            7.02,
            n.c - d / 2,
            y + 0.43,
            7.02,
            n.c + d / 2,
            km(n.n),
          ),
          e.noEmit(),
          u(v - 8, n.c) &&
            (e.setColor(0.38, 0.37, 0.35),
            e.flat(v - 16, n.c - n.half * 0.6, v, n.c + n.half * 0.6, 0.2),
            e.flat(-928.3, n.c - 3, v - 16, n.c + 3, 0.2),
            c.push([v - 17, n.c - n.half - 2, y + 1, n.c + n.half + 2])));
      } else {
        let t = (b + x) / 2;
        _.push({ x: n.c, z: t, n: n.n, axis: `z` });
        for (let [t, i] of [
          [s, n.c - n.half],
          [n.c + n.half, l],
        ])
          (e.setColor(0.47, 0.46, 0.44),
            e.boxMinMax(t, a, b - 0.4, i, 7, x + 0.4),
            r?.addBox(t, b - 0.4, i, x + 0.4, -1, 7, `wall`),
            e.setColor(0.18, 0.3, 0.34),
            e.boxMinMax(
              t < n.c ? t - 7 : i,
              0.1,
              b - 1.2,
              t < n.c ? t : i + 7,
              4.2,
              b - 0.5,
            ),
            e.setColor(1, 0.85, 0.6).setEmit(3, 0),
            e.boxMinMax(
              (t + i) / 2 - 0.3,
              4.8,
              b - 0.7,
              (t + i) / 2 + 0.3,
              5.3,
              b - 0.4,
            ),
            e.noEmit());
        (e.setColor(0.45, 0.44, 0.42),
          e.boxMinMax(n.c - n.half, o, b - 0.4, n.c + n.half, 7, x + 0.4, 60));
        let i = 7.2,
          d = 5.72;
        (e.setColor(1, 1, 1).setEmit(0.55, 0),
          e.quad(
            n.c + i / 2,
            d,
            b - 0.43,
            n.c - i / 2,
            d,
            b - 0.43,
            n.c - i / 2,
            7.02,
            b - 0.43,
            n.c + i / 2,
            7.02,
            b - 0.43,
            km(n.n),
          ),
          e.quad(
            n.c - i / 2,
            d,
            x + 0.43,
            n.c + i / 2,
            d,
            x + 0.43,
            n.c + i / 2,
            7.02,
            x + 0.43,
            n.c - i / 2,
            7.02,
            x + 0.43,
            km(n.n),
          ),
          e.noEmit(),
          u(n.c, b - 8) &&
            (e.setColor(0.38, 0.37, 0.35),
            e.flat(n.c - n.half * 0.6, b - 16, n.c + n.half * 0.6, b, 0.2)),
          c.push([n.c - n.half - 2, b - 17, n.c + n.half + 2, x + 1]));
      }
    };
  (C(`z`, b, a.maxZ + 60, m),
    C(`x`, v, a.maxX + 4, g),
    e.setColor(0.47, 0.46, 0.44),
    e.boxMinMax(v - 0.4, -0.4, b - 0.4, v + qm + 0.4, 5.1, b + qm + 0.4));
  {
    let t = n.roads.find(
        (e) => e.axis === `z` && e.major && Math.abs(e.at - (a.minX + 30)) < 20,
      ),
      r = t ? t.at - t.halfTotal - 0.4 : a.minX + 17;
    if (r - y > 4) {
      let t = x + 1,
        n = m.map((e) => [e.c - e.half - 0.5, e.c + e.half + 0.5]),
        i = [];
      for (let [e, r] of n) (e > t && i.push([t, e]), (t = Math.max(t, r)));
      i.push([t, a.maxZ - 2]);
      for (let [t, n] of i)
        if (!(n - t < 6)) {
          (e.setColor(0.36, 0.35, 0.33),
            e.boxMinMax(y + 0.6, 0, t, r, 0.3, n, 55),
            e.setColor(0.13, 0.21, 0.07),
            e.flat(y + 0.8, t + 0.2, r - 0.2, n - 0.2, 0.3 + Ye.GROUND));
          for (let e = t + 5; e < n - 4; e += 13 + o.range(0, 6))
            s.push({
              x: (y + r) / 2 + o.range(-1.5, 1.5),
              z: e,
              y: 0.3,
              s: o.range(0.42, 0.58),
            });
        }
    }
  }
  let E =
      m.find((e) => Math.abs(e.c - -440) < 30) ?? m[Math.floor(m.length / 2)],
    D = { x: (Be + v) / 2, z: E ? E.c : -440 },
    O = D.z - 58,
    k = D.z + 58,
    A = (() => {
      let e = m.find((e) => Math.abs(e.c - 120) < 40);
      return e ? e.c + e.half + 32 : 190;
    })(),
    j = { x0: -958.5, x1: -939.5, z0: A - 16, z1: A + 16 };
  (c.push([Be - 30, O - 2, v, k + 2]),
    c.push([j.x0 - 2, j.z0 - 2, j.x1 + 2, j.z1 + 2]));
  let M = (e) => e > O && e < k,
    N = (e, t) => e > j.x0 - 1 && e < j.x1 + 1 && t > j.z0 - 1 && t < j.z1 + 1,
    P = (e, t) => m.some((n) => Math.abs(e - n.c) < n.half * 0.6 + t),
    ee = [],
    te = (e) => (
      e &&
        Math.hypot(e.b.x - e.a.x, e.b.z - e.a.z) > 11 &&
        ee.push({ kind: e.kind, width: e.width, y: e.y, points: [e.a, e.b] }),
      null
    ),
    F = (e, t, n, r, i, a, o, s) =>
      e
        ? ((e.b = { x: o, z: s }), e)
        : { kind: t, width: n, y: r, a: { x: i, z: a }, b: { x: o, z: s } },
    I = null,
    L = null,
    ne = b - 30,
    re = a.maxZ + 620,
    R = 0,
    z = Be,
    ie = 0;
  for (let t = ne; t < re; t += 6) {
    ie++;
    let n = t + 6,
      c = t + 3;
    if (!u(-930, c) || !u(-950, c)) {
      ((I = te(I)), (L = te(L)));
      continue;
    }
    let d = t > a.maxZ + 60;
    if (!M(c)) {
      (e.setColor(0.34, 0.335, 0.32),
        e.flat(z, t, z + 2.8, n, 0.24),
        e.setColor(0.23, 0.23, 0.215),
        e.quad(z, -2.2, t, z, -2.2, n, z, 0.24, n, z, 0.24, t),
        e.quad(
          z + 2.8,
          0.1,
          n,
          z + 2.8,
          0.1,
          t,
          z + 2.8,
          0.24,
          t,
          z + 2.8,
          0.24,
          n,
        ),
        e.setColor(0.13, 0.19, 0.17));
      for (let r = t; r < n - 0.1; r += 3)
        e.boxMinMax(z + 0.55, 0.24, r - 0.045, z + 0.64, 1.25, r + 0.045, 51);
      (e.boxMinMax(z + 0.53, 1.2, t, z + 0.66, 1.3, n, 7),
        e.boxMinMax(z + 0.56, 0.72, t, z + 0.63, 0.78, n, 7),
        r?.addBox(z + 0.4, t, z + 0.8, n, -1, 1.3, `wall`));
    }
    if (M(c)) I = te(I);
    else {
      let r = l(-930, c) + 0.04;
      (e.setColor(0.3, 0.095, 0.07),
        e.flat(-931.7, t, -928.3, n, r),
        e.setColor(0.8, 0.8, 0.76),
        e.flat(-931.6, t, -931.45, n, r + 0.004),
        e.flat(-928.55, t, -928.4, n, r + 0.004),
        e.flat(-930.07, t + 1, -929.93, t + 3.4, r + 0.004),
        (I = F(I, `bike`, 3.4, r, -930, t, -930, n)));
    }
    if (!M(c) && !N(-948, c)) {
      e.setColor(0.41, 0.4, 0.37);
      let r = l(-948, c) + 0.035;
      (e.flat(-949.3, t, -946.7, n, r),
        (L = F(L, `walk`, 2.6, r, -948, t, -948, n)));
    } else L = te(L);
    if (Math.floor(t / 30) !== Math.floor(n / 30) && !P(c, 4) && !M(c)) {
      let t = Math.floor(n / 30) * 30,
        a = l(-926.4, t);
      (e.setColor(0.2, 0.24, 0.22),
        e.boxMinMax(-926.5, a, t - 0.09, -926.3, a + 5.2, t + 0.09),
        e.beam(-926.4, a + 5.1, t, -928.2, a + 5.35, t, 0.1, 0.1),
        e.setColor(0.16, 0.18, 0.18),
        e.boxMinMax(-928.7, a + 5.18, t - 0.24, -927.8, a + 5.36, t + 0.24),
        e.setColor(1, 0.86, 0.62).setEmit(5, 0),
        e.boxMinMax(-928.6, a + 5.12, t - 0.18, -927.9, a + 5.18, t + 0.18, 11),
        e.noEmit(),
        r?.addCircle(-926.4, t, 0.15, a, a + 5.3, `pole`),
        i?.add(-928.3, a + 0.06, t, 7.5, 1, 0.74, 0.44, 0.34),
        R++);
    }
    if (
      Math.floor(t / 42) !== Math.floor(n / 42) &&
      !M(c) &&
      !N(-946, c) &&
      !P(c, 3)
    ) {
      let t = Math.floor(n / 42) * 42,
        i = l(-946, t);
      (e.setColor(0.36, 0.22, 0.12),
        e.boxMinMax(-945.9, i + 0.42, t - 0.9, -945.4, i + 0.5, t + 0.9),
        e.boxMinMax(-945.35, i + 0.5, t - 0.9, -945.25, i + 0.95, t + 0.9),
        e.setColor(0.15, 0.15, 0.15),
        e.boxMinMax(-945.85, i, t - 0.8, -945.3, i + 0.42, t - 0.7),
        e.boxMinMax(-945.85, i, t + 0.7, -945.3, i + 0.42, t + 0.8),
        r?.addBox(-945.95, t - 0.95, -945.2, t + 0.95, i, i + 0.95, `bench`));
    }
    !M(c) && !P(c, 5) && !d
      ? (ie % 3 == 0 &&
          !N(-939, c) &&
          s.push({
            x: -939 + o.range(-1, 1),
            z: c + o.range(-2, 2),
            y: l(-939, c),
            s: o.range(0.5, 0.72),
          }),
        ie % 3 == 1 &&
          s.push({
            x: -915.5 + o.range(-1.5, 1.5),
            z: c + o.range(-2, 2),
            y: l(-916, c),
            s: o.range(0.55, 0.8),
          }),
        ie % 5 == 2 &&
          !N(-953, c) &&
          s.push({
            x: -953.5 + o.range(-0.8, 0.8),
            z: c + o.range(-2, 2),
            y: l(-953, c),
            s: o.range(0.45, 0.62),
          }))
      : d &&
        o.chance(0.4) &&
        s.push({
          x: o.range(-945, -905),
          z: c,
          y: l(-925, c),
          s: o.range(0.6, 0.95),
        });
  }
  ((I = te(I)), (L = te(L)), c.push([z - 2, ne, v, re]));
  for (let t = v - 40; t < a.maxX; t += 6) {
    let n = t + 3,
      a = -995;
    if (
      !u(n, a) ||
      !u(n, -1020) ||
      g.some((e) => Math.abs(n - e.c) < e.half * 0.6) ||
      h(t, 1) ||
      h(t + 6, 1)
    ) {
      I = te(I);
      continue;
    }
    let o = l(n, a) + 0.04;
    ((I = F(I, `bike`, 3.4, o, t, a, t + 6, a)),
      e.setColor(0.3, 0.095, 0.07),
      e.flat(t, -996.7, t + 6, -993.3, o),
      e.setColor(0.8, 0.8, 0.76),
      e.flat(t + 1, -995.07, t + 3.4, -994.93, o + 0.004),
      e.setColor(0.34, 0.335, 0.32),
      e.flat(t, -1030, t + 6, -1027.2, 0.24),
      e.setColor(0.13, 0.19, 0.17),
      e.boxMinMax(t, 1.2, -1029.47, t + 6, 1.3, -1029.34, 7));
    for (let n = t; n < t + 6 - 0.1; n += 2)
      e.boxMinMax(n - 0.045, 0.24, -1029.45, n + 0.045, 1.25, -1029.36, 60);
    if (
      (r?.addBox(t, -1029.6, t + 6, -1029.2, -1, 1.3, `wall`),
      Math.floor(t / 30) !== Math.floor((t + 6) / 30))
    ) {
      let n = Math.floor((t + 6) / 30) * 30;
      (e.setColor(0.2, 0.24, 0.22),
        e.boxMinMax(n - 0.09, o, -991.7, n + 0.09, o + 5.2, -991.5),
        e.setColor(0.16, 0.18, 0.18),
        e.boxMinMax(n - 0.24, o + 5.18, -993.8, n + 0.24, o + 5.36, -992.9),
        e.setColor(1, 0.86, 0.62).setEmit(5, 0),
        e.boxMinMax(n - 0.18, o + 5.12, -993.7, n + 0.18, o + 5.18, -993, 56),
        e.noEmit(),
        i?.add(n, o + 0.06, -993.4, 7.5, 1, 0.74, 0.44, 0.34),
        R++);
    }
  }
  return (
    (I = te(I)),
    Xm(e, D, O, k, v, r, o, i),
    Zm(e, j, r),
    { trees: s, blocked: Ym(c), gates: _, wharf: D, lampCount: R, paths: ee }
  );
}
function Ym(e) {
  return (t, n) => {
    for (let [r, i, a, o] of e) if (t > r && t < a && n > i && n < o) return !0;
    return !1;
  };
}
function Xm(e, t, n, r, i, a, o, s) {
  let c = Be,
    l = 0.22;
  {
    let t = c + 6,
      a = i - 0.1;
    (e.setColor(0.24, 0.23, 0.21), e.flat(t, n, a, r, 0.216));
    for (let i = n; i < r - 0.1; i += 4)
      for (let n = t; n < a - 0.1; n += 4) {
        let t =
          0.3 +
          o.next() * 0.06 +
          ((Math.floor(n / 4) + Math.floor(i / 4)) % 2 == 0 ? 0.02 : 0);
        (e.setColor(t * 1.04, t, t * 0.92),
          e.flat(
            n + 0.06,
            i + 0.06,
            Math.min(a, n + 4) - 0.06,
            Math.min(r, i + 4) - 0.06,
            l,
          ));
      }
  }
  (e.setColor(0.33, 0.22, 0.13), e.flat(c, n, c + 6, r, 0.24));
  for (let t = n; t < r; t += 1.2)
    (e.setColor(0.27, 0.18, 0.1), e.flat(c, t, c + 6, t + 0.06, 0.245));
  (e.setColor(0.23, 0.22, 0.2),
    e.quad(c, -2.2, n, c, -2.2, r, c, l, r, c, l, n),
    e.setColor(0.12, 0.13, 0.14),
    e.boxMinMax(c + 0.3, 1.05, n, c + 0.4, 1.12, r, 7));
  for (let t = n; t < r; t += 2.5)
    e.boxMinMax(c + 0.31, l, t - 0.04, c + 0.39, 1.1, t + 0.04, 55);
  (a?.addBox(c + 0.2, n, c + 0.5, t.z - 8, -1, 1.2, `wall`),
    a?.addBox(c + 0.2, t.z + 8, c + 0.5, r, -1, 1.2, `wall`));
  let u = t.z - 6,
    d = t.z + 6;
  (e.setColor(0.3, 0.2, 0.12),
    e.boxMinMax(c - 30, -0.55, u, c, -0.25, d),
    e.setColor(0.2, 0.2, 0.21));
  for (let t = c - 28; t < c; t += 7)
    (e.cyl(t, -2.5, u - 0.3, 0.3, 3.6, 6),
      e.cyl(t, -2.5, d + 0.3, 0.3, 3.6, 6));
  (e.setColor(0.75, 0.75, 0.72),
    e.boxMinMax(c - 30, 0.55, u - 0.05, c, 0.62, u + 0.05, 7),
    e.boxMinMax(c - 30, 0.55, d - 0.05, c, 0.62, d + 0.05, 7));
  {
    let n = c - 42,
      r = t.z - 12;
    (e.setColor(0.9, 0.9, 0.88),
      e.boxMinMax(n - 10, -1.4, r - 2.8, n + 10, 0.4, r + 2.8),
      e.setColor(0.1, 0.33, 0.58),
      e.boxMinMax(n - 10.05, -0.5, r - 2.85, n + 10.05, -0.1, r + 2.85, 51),
      e.setColor(0.93, 0.93, 0.9).setEmit(0, 0, 7),
      e.boxMinMax(n - 6, 0.4, r - 2.2, n + 6, 2.9, r + 2.2),
      e.noEmit(),
      e.setColor(0.85, 0.2, 0.15),
      e.boxMinMax(n - 6.3, 2.9, r - 2.5, n + 6.3, 3.15, r + 2.5),
      e.setColor(1, 0.3, 0.2).setEmit(3, 5),
      e.boxMinMax(n - 0.15, 3.15, r - 0.15, n + 0.15, 3.6, r + 0.15),
      e.noEmit());
  }
  let f = [
    [0.62, 0.08, 0.09],
    [0.85, 0.42, 0.12],
    [0.05, 0.36, 0.34],
    [0.06, 0.15, 0.24],
    [0.85, 0.66, 0.08],
    [0.2, 0.42, 0.62],
  ];
  [t.z - 52, t.z - 45, t.z - 38, t.z + 38, t.z + 45, t.z + 52].forEach(
    (t, n) => {
      let r = i - 9,
        o = 6.1,
        c = 2.45,
        u = f[n % f.length];
      (e.setColor(u[0], u[1], u[2]),
        e.boxMinMax(
          r - c / 2,
          l,
          t - o / 2,
          r + c / 2,
          2.8200000000000003,
          t + o / 2,
          53,
        ),
        e.setColor(u[0] * 0.8, u[1] * 0.8, u[2] * 0.8));
      for (let n = -2.75; n < o / 2; n += 0.6)
        e.boxMinMax(
          r + c / 2,
          0.32,
          t + n - 0.05,
          r + c / 2 + 0.05,
          2.72,
          t + n + 0.05,
          1,
        );
      (e.setColor(1, 0.82, 0.55).setEmit(1.8, 0),
        e.quad(
          r + c / 2 - 0.05,
          l,
          t - o / 2 + 0.1,
          r + c / 2 - 0.05,
          l,
          t + o / 2 - 0.1,
          r + c / 2 - 0.05,
          2.72,
          t + o / 2 - 0.1,
          r + c / 2 - 0.05,
          2.72,
          t - o / 2 + 0.1,
        ),
        e.noEmit(),
        e.setColor(0.85, 0.83, 0.78),
        e.boxMinMax(
          r - c / 2 - 0.1,
          l,
          t - o / 2 + 0.2,
          r - c / 2 + 0.5,
          1.27,
          t + o / 2 - 0.2,
        ),
        e.setColor(0.92, 0.92, 0.88),
        e.quad(
          r - c / 2 - 1.6,
          2.52,
          t - o / 2,
          r - c / 2 - 1.6,
          2.52,
          t + o / 2,
          r - c / 2,
          2.8200000000000003,
          t + o / 2,
          r - c / 2,
          2.8200000000000003,
          t - o / 2,
        ),
        e.setColor(1, 1, 1).setEmit(0.9, 0),
        e.quad(
          r - c / 2 - 0.02,
          2.8000000000000003,
          t - o / 2 + 0.3,
          r - c / 2 - 0.02,
          2.8000000000000003,
          t + o / 2 - 0.3,
          r - c / 2 - 0.02,
          3.62,
          t + o / 2 - 0.3,
          r - c / 2 - 0.02,
          3.62,
          t - o / 2 + 0.3,
          Pm(n + (n > 2 ? 2 : 0)),
        ),
        e.noEmit(),
        a?.addBox(
          r - c / 2,
          t - o / 2,
          r + c / 2,
          t + o / 2,
          0,
          2.8200000000000003,
          `building`,
        ),
        s?.add(r - c / 2 - 1.8, 0.27, t, 3.6, 1, 0.78, 0.5, 0.42));
    },
  );
  for (let n = 0; n < 10; n++) {
    let r = t.z + (n < 5 ? -1 : 1) * o.range(14, 34),
      s = o.range(c + 10, i - 16);
    (e.setColor(0.85, 0.85, 0.82),
      e.cyl(s, l, r, 0.45, 0.75, 8),
      e.setColor(0.2, 0.2, 0.2),
      e.boxMinMax(s - 0.03, l, r - 0.03, s + 0.03, 2.62, r + 0.03));
    let u = [
      [0.8, 0.15, 0.12],
      [0.95, 0.75, 0.2],
      [0.15, 0.45, 0.35],
      [0.95, 0.95, 0.9],
    ][n % 4];
    (e.setColor(u[0], u[1], u[2]),
      e.cyl(s, 2.27, r, 1.4, 0.45, 8, !1, 0.05),
      a?.addCircle(s, r, 0.5, 0, 1.02, `pole`));
  }
  let p = [
    [c + 7, n + 4],
    [i - 5, n + 4],
    [c + 7, t.z - 20],
    [i - 5, t.z - 20],
    [c + 7, t.z + 20],
    [i - 5, t.z + 20],
    [c + 7, r - 4],
    [i - 5, r - 4],
  ];
  for (let [t, n] of p)
    (e.setColor(0.15, 0.15, 0.16),
      e.boxMinMax(t - 0.08, l, n - 0.08, t + 0.08, 6.22, n + 0.08),
      a?.addCircle(t, n, 0.12, 0, 6.22, `pole`));
  for (let [t, n] of [
    [0, 3],
    [1, 2],
    [2, 5],
    [3, 4],
    [4, 7],
    [5, 6],
    [0, 2],
    [1, 3],
    [4, 6],
    [5, 7],
  ]) {
    let [r, i] = p[t],
      [a, o] = p[n],
      c = Math.hypot(a - r, o - i),
      l = Math.max(6, Math.floor(c / 1.4));
    (s?.add(
      (r + a) / 2,
      0.27,
      (i + o) / 2,
      Math.min(9, c * 0.35),
      1,
      0.72,
      0.42,
      0.2,
    ),
      e.noEmit().setColor(0.08, 0.08, 0.08));
    let u = r,
      d = i,
      f = 6.02;
    for (let t = 1; t <= l; t++) {
      let n = t / l,
        s = r + (a - r) * n,
        c = i + (o - i) * n,
        p = 6.02 - Math.sin(n * Math.PI) * 1.4;
      (e.beam(u, f, d, s, p, c, 0.025, 0.025), (u = s), (d = c), (f = p));
    }
    for (let t = 1; t < l; t++) {
      let n = t / l,
        s = r + (a - r) * n,
        c = i + (o - i) * n,
        u = 6.02 - Math.sin(n * Math.PI) * 1.4 - 0.08,
        d = t % 5 == 0;
      (e.setColor(1, d ? 0.6 : 0.86, d ? 0.35 : 0.62).setEmit(8, 0),
        e.boxMinMax(
          s - 0.045,
          u - 0.1,
          c - 0.045,
          s + 0.045,
          u,
          c + 0.045,
          63,
        ));
    }
    e.noEmit();
  }
  {
    let n = c + 3.2,
      r = t.z,
      i = 4.4;
    (e.setColor(0.14, 0.14, 0.15),
      e.boxMinMax(n - 0.15, l, r - 6 - 0.4, n + 0.15, 6.95, r - 6 - 0.1),
      e.boxMinMax(n - 0.15, l, r + 6 + 0.1, n + 0.15, 6.95, r + 6 + 0.4),
      e.boxMinMax(
        n - 0.12,
        4.28,
        r - 6 - 0.1,
        n + 0.12,
        6.65 + 0.12,
        r + 6 + 0.1,
      ),
      e.setColor(1, 1, 1).setEmit(1.4, 0),
      e.quad(
        n + 0.14,
        i,
        r + 6,
        n + 0.14,
        i,
        r - 6,
        n + 0.14,
        6.65,
        r - 6,
        n + 0.14,
        6.65,
        r + 6,
        Am,
      ),
      e.quad(
        n - 0.14,
        i,
        r - 6,
        n - 0.14,
        i,
        r + 6,
        n - 0.14,
        6.65,
        r + 6,
        n - 0.14,
        6.65,
        r - 6,
        Am,
      ),
      e.noEmit(),
      a?.addBox(n - 0.2, r - 6 - 0.4, n + 0.2, r - 6 - 0.1, 0, 6.65, `pole`),
      a?.addBox(n - 0.2, r + 6 + 0.1, n + 0.2, r + 6 + 0.4, 0, 6.65, `pole`));
  }
  {
    let n = i - 3,
      r = t.z + 22;
    (e.setColor(0.15, 0.3, 0.2),
      e.boxMinMax(n - 0.1, l, r - 1.4, n + 0.1, 2.8200000000000003, r + 1.4),
      e.setColor(1, 1, 1).setEmit(0.6, 0),
      e.quad(
        n - 0.12,
        1.42,
        r - 1.3,
        n - 0.12,
        1.42,
        r + 1.3,
        n - 0.12,
        2.62,
        r + 1.3,
        n - 0.12,
        2.62,
        r - 1.3,
        jm,
      ),
      e.noEmit());
  }
}
function Zm(e, t, n) {
  let r = 0.2;
  (e.setColor(0.08, 0.26, 0.16), e.flat(t.x0, t.z0, t.x1, t.z1, r));
  let i = (t.x0 + t.x1) / 2,
    a = (t.z0 + t.z1) / 2,
    o = 7.5;
  (e.setColor(0.1, 0.22, 0.42),
    e.flat(i - o, a - 14, i + o, a + 14, 0.20400000000000001),
    e.setColor(0.55, 0.2, 0.1),
    e.flat(i - 2.45, a - 14, i + 2.45, a - 14 + 5.8, 0.20600000000000002),
    e.flat(i - 2.45, a + 14 - 5.8, i + 2.45, a + 14, 0.20600000000000002));
  let s = (t, n, r, i) => {
      (e.setColor(0.9, 0.9, 0.88), e.flat(t, n, r, i, 0.20800000000000002));
    },
    c = 0.06;
  (s(i - o, a - 14, i + o, a - 14 + c),
    s(i - o, a + 14 - c, i + o, a + 14),
    s(i - o, a - 14, i - o + c, a + 14),
    s(i + o - c, a - 14, i + o, a + 14),
    s(i - o, a - c / 2, i + o, a + c / 2));
  let l = (t, n, r, i, a, o) => {
    for (let s = 0; s < o; s++) {
      let l = i + ((a - i) * s) / o,
        u = i + ((a - i) * (s + 1)) / o,
        d = t + Math.cos(l) * r,
        f = n + Math.sin(l) * r,
        p = t + Math.cos(u) * r,
        m = n + Math.sin(u) * r;
      (e.setColor(0.9, 0.9, 0.88),
        e.beam(d, 0.20800000000000002, f, p, 0.20800000000000002, m, c, 0.004));
    }
  };
  (l(i, a, 1.8, 0, Math.PI * 2, 20),
    l(i, a - 14 + 1.6, 6.75, 0.15, Math.PI - 0.15, 18),
    l(i, a + 14 - 1.6, 6.75, Math.PI + 0.15, Math.PI * 2 - 0.15, 18));
  for (let t of [-1, 1]) {
    let o = a + t * 13.7;
    (e.setColor(0.2, 0.22, 0.25),
      e.boxMinMax(
        i - 0.1,
        r,
        o - 0.1 + t * 0.9,
        i + 0.1,
        3.5,
        o + 0.1 + t * 0.9,
      ),
      e.beam(i, 3.5, o + t * 0.9, i, 3.5, o - t * 0.1, 0.12, 0.12),
      e.setColor(0.95, 0.95, 0.93),
      e.boxMinMax(
        i - 0.9,
        3.1,
        o - 0.03 - t * 0.1,
        i + 0.9,
        4.15,
        o + 0.03 - t * 0.1,
      ),
      e.setColor(0.95, 0.4, 0.1),
      e.boxMinMax(
        i - 0.23,
        3.25,
        o - t * 0.62 - 0.23,
        i + 0.23,
        3.2800000000000002,
        o - t * 0.62 + 0.23,
        63,
      ),
      n?.addCircle(i, o + t * 0.9, 0.15, 0, 3.5, `pole`));
  }
  e.setColor(0.18, 0.35, 0.25);
  let u = 0.05;
  (e.boxMinMax(t.x0, r, t.z0, t.x1, 1.2, t.z0 + u, 55),
    e.boxMinMax(t.x0, r, t.z1 - u, t.x1, 1.2, t.z1, 55),
    e.boxMinMax(t.x0, r, t.z0, t.x0 + u, 1.2, a - 3, 55),
    e.boxMinMax(t.x0, r, a + 3, t.x0 + u, 1.2, t.z1, 55));
}
var Qm = 12.3,
  $m = [
    [1, 0.2, 0.35],
    [0.2, 0.85, 1],
    [1, 0.55, 0.1],
    [0.4, 1, 0.45],
    [1, 0.9, 0.3],
    [0.8, 0.35, 1],
    [1, 1, 1],
  ],
  eh = [
    [0.6, 0.58, 0.54],
    [0.66, 0.62, 0.55],
    [0.52, 0.54, 0.55],
    [0.72, 0.71, 0.67],
    [0.42, 0.47, 0.5],
    [0.6, 0.53, 0.48],
    [0.55, 0.56, 0.52],
    [0.36, 0.42, 0.46],
  ];
function th(e, t, n) {
  let r = new Oe(64123),
    i = 0,
    a = n.bounds,
    o = [],
    s = (t, n, a, o, s, c, u, d, f = !0) => {
      let p = u ? eh[4 + r.int(0, 1) * 3] : eh[r.int(0, eh.length - 1)],
        m = 0.9 + r.next() * 0.2;
      e.setColor(p[0] * m, p[1] * m, p[2] * m).setEmit(0, 0, 1 + r.int(0, 998));
      let h = r.chance(0.15) ? r.range(-0.25, 0.25) : 0;
      if (
        (e.box(t, c, n, a, s, o, h, 55),
        e.noEmit(),
        e.setColor(0.35, 0.35, 0.34),
        f &&
          (s < 45 && r.chance(0.6)
            ? (e.box(
                t + r.range(-a / 4, a / 4),
                c + s,
                n + r.range(-o / 4, o / 4),
                2.4,
                1.8,
                2.4,
                0,
              ),
              e.setColor(0.55, 0.62, 0.72),
              e.cyl(
                t + r.range(-a / 4, a / 4),
                c + s,
                n + r.range(-o / 4, o / 4),
                0.9,
                1.6,
                6,
              ))
            : s >= 45 && e.box(t, c + s, n, a * 0.55, 3.5, o * 0.55, h)),
        s > 70 &&
          (e.setColor(1, 0.12, 0.08).setEmit(6, 2, r.int(1, 99)),
          e.box(t - a * 0.25, c + s + 3.5, n, 0.5, 0.5, 0.5),
          e.box(t + a * 0.25, c + s + 3.5, n, 0.5, 0.5, 0.5),
          e.noEmit()),
        d)
      ) {
        let i = [
          [0.3, 0.9, 1],
          [1, 0.35, 0.7],
          [0.95, 0.95, 1],
          [0.5, 1, 0.55],
        ][r.int(0, 3)];
        (e.setColor(i[0], i[1], i[2]).setEmit(2.2, 0),
          e.box(t, c + s - 2.2, n, a + 0.3, 1.1, o + 0.3, h, 51),
          e.noEmit());
      }
      if (s < 70 && r.chance(0.2)) {
        let i = Math.min(a * 0.85, r.range(9, 16)),
          u = r.range(3, 5.5),
          d = l,
          f = t + d[0] * (a / 2 - 1),
          p = n + d[1] * (o / 2 - 1),
          m = c + s;
        e.setColor(0.2, 0.2, 0.22);
        for (let t of [-0.4, 0.4]) {
          let n = f + (d[1] === 0 ? 0 : t * i),
            r = p + (d[0] === 0 ? 0 : t * i);
          e.boxMinMax(n - 0.15, m, r - 0.15, n + 0.15, m + 2.2, r + 0.15);
        }
        let h = $m[r.int(0, $m.length - 1)];
        (e.setColor(h[0], h[1], h[2]).setEmit(r.range(1.6, 3.2), 0),
          d[0] === 0
            ? e.boxMinMax(
                f - i / 2,
                m + 2.2,
                p - 0.25,
                f + i / 2,
                m + 2.2 + u,
                p + 0.25,
              )
            : e.boxMinMax(
                f - 0.25,
                m + 2.2,
                p - i / 2,
                f + 0.25,
                m + 2.2 + u,
                p + i / 2,
              ),
          e.noEmit());
      }
      i++;
    },
    c = (e, t) => o.some(([n, r, i, a]) => e > n && e < i && t > r && t < a),
    l = [1, 0],
    u = n.roads.find((e) => e.id === `civic`)?.at ?? -300,
    d = n.roads.find((e) => e.id === `heping`)?.at ?? 280,
    f = n.roads.find((e) => e.id === `jianguo`)?.at ?? -40,
    p = a.minX - 2.4,
    m = a.minZ - 2.4,
    h = [];
  {
    let n = u,
      r = t.westBank(n) - 70,
      i = 11.5;
    (o.push([r - 260, n - 30, p, n + 30]),
      h.push({
        minX: t.westBank(n) - 4,
        minZ: n - i,
        maxX: p + 3.4,
        maxZ: n + i,
        y: Qm,
        axis: `x`,
      }));
    for (let t = p; t > r - 220; t -= 20) {
      let a = t,
        o = t - 20,
        s = t > r ? Qm : Qm - ((r - a) / 220) * 9.700000000000001,
        c = o > r ? Qm : Qm - ((r - o) / 220) * 9.700000000000001;
      (e.setColor(0.2, 0.2, 0.21),
        e.quad(a, s, n - i, o, c, n - i, o, c, n + i, a, s, n + i),
        e.setColor(0.3, 0.3, 0.29),
        e.quad(
          a,
          s - 1.9,
          n + i,
          o,
          c - 1.9,
          n + i,
          o,
          c - 1.9,
          n - i,
          a,
          s - 1.9,
          n - i,
        ),
        e.setColor(0.55, 0.54, 0.51),
        e.quad(
          o,
          c - 1.9,
          n + i,
          a,
          s - 1.9,
          n + i,
          a,
          s + 1,
          n + i,
          o,
          c + 1,
          n + i,
        ),
        e.quad(
          a,
          s - 1.9,
          n - i,
          o,
          c - 1.9,
          n - i,
          o,
          c + 1,
          n - i,
          a,
          s + 1,
          n - i,
        ),
        e.setColor(0.75, 0.75, 0.7));
      for (let t of [-3.3, 3.3])
        e.quad(
          a - 2,
          s + 0.02,
          n + t - 0.08,
          a - 6,
          (s + c) / 2 + 0.02,
          n + t - 0.08,
          a - 6,
          (s + c) / 2 + 0.02,
          n + t + 0.08,
          a - 2,
          s + 0.02,
          n + t + 0.08,
        );
      (e.setColor(0.8, 0.65, 0.1),
        e.quad(
          a,
          s + 0.02,
          n - 0.1,
          o,
          c + 0.02,
          n - 0.1,
          o,
          c + 0.02,
          n + 0.1,
          a,
          s + 0.02,
          n + 0.1,
        ));
    }
    for (let a = p - 30; a > r; a -= 46) {
      let r = Math.max(Fp, t.height(a, n) - 0.5);
      (e.setColor(0.52, 0.51, 0.48),
        e.cyl(a, r, n - 5, 1.5, 8.8 - r, 10, !1),
        e.cyl(a, r, n + 5, 1.5, 8.8 - r, 10, !1),
        e.boxMinMax(a - 1.7, 10.4 - 1.7, n - i + 1, a + 1.7, 10.4, n + i - 1));
    }
    for (let t = p - 12; t > r - 150; t -= 34) {
      let i = t > r ? Qm : Qm - ((r - t) / 220) * 9.700000000000001;
      for (let r of [-1, 1]) {
        let a = n + r * 11.1;
        (e.setColor(0.35, 0.36, 0.36),
          e.boxMinMax(t - 0.12, i, a - 0.12, t + 0.12, i + 8, a + 0.12),
          e.beam(t, i + 7.9, a, t, i + 8.1, a - r * 2.2, 0.12, 0.12),
          e.setColor(1, 0.55, 0.2).setEmit(7, 0),
          e.boxMinMax(
            t - 0.3,
            i + 7.75,
            a - r * 2.2 - 0.35,
            t + 0.3,
            i + 7.95,
            a - r * 2.2 + 0.35,
          ),
          e.noEmit());
      }
    }
  }
  {
    let n = d + 40,
      r = Be + 1,
      i = t.westBank(n) - 25,
      a = r - i;
    o.push([i - 40, n - 20, r, n + 20]);
    let s = (e) => 0.3 + (2.6 - 0.3) * e + 7.5 * Math.sin(Math.PI * e),
      c = 3.2;
    for (let t = 0; t < 40; t++) {
      let i = t / 40,
        o = (t + 1) / 40,
        l = r - a * i,
        u = r - a * o,
        d = s(i),
        f = s(o);
      (e.setColor(0.5, 0.48, 0.45),
        e.quad(l, d, n - c, u, f, n - c, u, f, n + c, l, d, n + c),
        e.setColor(0.35, 0.34, 0.32),
        e.quad(
          l,
          d - 0.9,
          n + c,
          u,
          f - 0.9,
          n + c,
          u,
          f - 0.9,
          n - c,
          l,
          d - 0.9,
          n - c,
        ),
        e.quad(
          u,
          f - 0.9,
          n + c,
          l,
          d - 0.9,
          n + c,
          l,
          d + 0.2,
          n + c,
          u,
          f + 0.2,
          n + c,
        ),
        e.quad(
          l,
          d - 0.9,
          n - c,
          u,
          f - 0.9,
          n - c,
          u,
          f + 0.2,
          n - c,
          l,
          d + 0.2,
          n - c,
        ),
        e.setColor(0.8, 0.8, 0.78),
        e.beam(l, d + 1.1, n - c + 0.1, u, f + 1.1, n - c + 0.1, 0.08, 0.08),
        e.beam(l, d + 1.1, n + c - 0.1, u, f + 1.1, n + c - 0.1, 0.08, 0.08));
      let p = d + 30 * Math.sin(Math.PI * i),
        m = f + 30 * Math.sin(Math.PI * o);
      for (let r of [-1, 1])
        (e.setColor(0.62, 0.07, 0.05),
          e.beam(l, p, n + r * 3.6, u, m, n + r * 3.6, 0.9, 1.1),
          e.setColor(0.75, 0.9, 1).setEmit(2.6, 0),
          e.beam(
            l,
            p + 0.62,
            n + r * 3.6,
            u,
            m + 0.62,
            n + r * 3.6,
            0.25,
            0.14,
          ),
          e.noEmit(),
          t % 2 == 0 &&
            t > 0 &&
            (e.setColor(0.85, 0.85, 0.85),
            e.beam(l, d, n + r * 3.6, l, p, n + r * 3.6, 0.12, 0.12)));
      t % 5 == 0 &&
        t > 0 &&
        (e.setColor(0.62, 0.07, 0.05),
        e.beam(
          l,
          (p + d) / 2 + 12,
          n - c - 0.4,
          l,
          (p + d) / 2 + 12,
          n + c + 0.4,
          0.5,
          0.5,
        ));
    }
    for (let i of [0.25, 0.5, 0.75]) {
      let o = r - a * i,
        c = Math.max(Fp, t.height(o, n) - 0.5);
      (e.setColor(0.55, 0.54, 0.5), e.cyl(o, c, n, 1.3, s(i) - 0.9 - c, 8, !1));
    }
  }
  {
    let n = f,
      r = 11.5,
      i = m - 30,
      a = !1;
    for (let e = m - 4; e > -1700; e -= 2)
      if (t.height(n, e) > 19.3) {
        ((i = e), (a = !0));
        break;
      }
    let s = a ? i : t.northBank(n) - 70,
      c = s - 150;
    h.push({
      minX: n - r,
      minZ: Math.max(s, t.northBank(n) - 4),
      maxX: n + r,
      maxZ: m + 3.4,
      y: Qm,
      axis: `z`,
    });
    let l = a ? i : -2e3,
      u = (e) => {
        if (a || e >= s) return Qm;
        let r = t.height(n, e) + 0.15;
        if (e <= c) return r;
        let i = (s - e) / (s - c);
        return Qm + (r - Qm) * (i * i * (3 - 2 * i));
      };
    o.push([n - 40, l - 20, n + 40, m]);
    for (let i = m; i > l + 0.5; i -= 16) {
      let o = i,
        d = Math.max(l, i - 16),
        f = u(o),
        p = u(d),
        h = !a && o <= c;
      if (
        (e.setColor(0.2, 0.2, 0.21),
        e.quad(n - r, f, o, n + r, f, o, n + r, p, d, n - r, p, d),
        h ||
          (e.setColor(0.3, 0.3, 0.29),
          e.quad(
            n - r,
            p - 1.9,
            d,
            n + r,
            p - 1.9,
            d,
            n + r,
            f - 1.9,
            o,
            n - r,
            f - 1.9,
            o,
          ),
          e.setColor(0.55, 0.54, 0.51),
          e.quad(
            n + r,
            f - 1.9,
            o,
            n + r,
            p - 1.9,
            d,
            n + r,
            p + 1,
            d,
            n + r,
            f + 1,
            o,
          ),
          e.quad(
            n - r,
            p - 1.9,
            d,
            n - r,
            f - 1.9,
            o,
            n - r,
            f + 1,
            o,
            n - r,
            p + 1,
            d,
          )),
        e.setColor(0.8, 0.65, 0.1),
        e.quad(
          n - 0.1,
          f + 0.02,
          o,
          n + 0.1,
          f + 0.02,
          o,
          n + 0.1,
          p + 0.02,
          d,
          n - 0.1,
          p + 0.02,
          d,
        ),
        !h && o < m - 20 && Math.round(o) % 48 < 16)
      ) {
        let i = Math.max(Fp, t.height(n, o) - 0.5);
        i < f - 4 &&
          (e.setColor(0.52, 0.51, 0.48),
          e.cyl(n - 5, i, o, 1.5, f - 3.5 - i, 10, !1),
          e.cyl(n + 5, i, o, 1.5, f - 3.5 - i, 10, !1),
          e.boxMinMax(
            n - r + 1,
            f - 3.6,
            o - 1.7,
            n + r - 1,
            f - 1.9,
            o + 1.7,
          ));
      }
      if (!a && o < s && Math.round(o / 16) % 2 == 0)
        for (let t of [-1, 1])
          (e.setColor(0.3, 0.3, 0.3),
            e.boxMinMax(
              n + t * 12 - 0.12,
              f,
              o - 0.12,
              n + t * 12 + 0.12,
              f + 8,
              o + 0.12,
            ),
            e.setColor(1, 0.62, 0.28).setEmit(6, 0),
            e.boxMinMax(
              n + t * 10 - 0.3,
              f + 7.8,
              o - 0.3,
              n + t * 10 + 0.3,
              f + 8.1,
              o + 0.3,
            ),
            e.noEmit());
    }
    if (a) {
      let t = i;
      (e.setColor(0.58, 0.57, 0.54),
        e.boxMinMax(n - r - 8, 8.3, t - 3, n + r + 8, 26.3, t),
        e.setColor(0.02, 0.02, 0.02),
        e.quad(
          n - r + 1,
          Qm,
          t + 0.02,
          n + r - 1,
          Qm,
          t + 0.02,
          n + r - 1,
          20.3,
          t + 0.02,
          n - r + 1,
          20.3,
          t + 0.02,
        ),
        e.setColor(1, 0.55, 0.2).setEmit(5, 0));
      for (let r = 0; r < 6; r++)
        e.boxMinMax(
          n - 6 + r * 2.4,
          19.5,
          t - 0.3 - r * 0.02,
          n - 5 + r * 2.4,
          19.8,
          t + 0.05,
        );
      (e.noEmit(),
        e.setColor(0.3, 0.42, 0.3),
        e.boxMinMax(n - r - 8.5, 25.8, t - 3.3, n + r + 8.5, 26.6, t + 0.3));
    }
  }
  {
    let n = 8.5;
    for (let r = -2600; r < 2600; r += 24) {
      let i = t.westBank(r) - 38,
        a = t.westBank(r + 24) - 38;
      if (!(Math.abs(r - u) < 20)) {
        if (
          (e.setColor(0.24, 0.24, 0.25),
          e.quad(a - 7, n, r + 24, a + 7, n, r + 24, i + 7, n, r, i - 7, n, r),
          e.setColor(0.5, 0.49, 0.47),
          e.quad(
            a + 7,
            7.1,
            r + 24,
            i + 7,
            7.1,
            r,
            i + 7,
            9.4,
            r,
            a + 7,
            9.4,
            r + 24,
          ),
          e.quad(
            i - 7,
            7.1,
            r,
            a - 7,
            7.1,
            r + 24,
            a - 7,
            9.4,
            r + 24,
            i - 7,
            9.4,
            r,
          ),
          Math.round(r / 24) % 2 == 0)
        ) {
          let n = t.height(i, r) - 0.3;
          (e.setColor(0.45, 0.44, 0.42),
            e.boxMinMax(i - 1.2, n, r - 1, i + 1.2, 7.1, r + 1));
        }
        Math.round(r / 24) % 2 == 1 &&
          (e.setColor(1, 0.55, 0.2).setEmit(6, 0),
          e.boxMinMax(i + 6.2, 15, r - 0.3, i + 6.8, 15.3, r + 0.3),
          e.boxMinMax(i - 6.8, 15, r + 11.7, i - 6.2, 15.3, r + 12.3),
          e.noEmit(),
          e.setColor(0.3, 0.3, 0.3),
          e.boxMinMax(i + 6.9, n, r - 0.1, i + 7.1, 15.3, r + 0.1),
          e.boxMinMax(i - 7.1, n, r + 11.9, i - 6.9, 15.3, r + 12.1));
      }
    }
  }
  {
    for (let e = -2500; e < 2500;) {
      let n = r.range(30, 44),
        i = t.westBank(e) - 58,
        a = 0;
      for (; i > -2350;) {
        let o = r.range(14, 26),
          l = Math.min(n - 6, r.range(14, 24)),
          u = i - o / 2,
          d = e + n / 2 + r.range(-3, 3);
        if (((i -= o + r.range(6, 16)), a++, c(u, d))) continue;
        let f = t.height(u, d);
        if (f > 9 || t.kind(u, d) !== `farbank`) continue;
        let p = t.westBank(d) - u,
          m = Math.hypot(u + 1850, d - 650) < 380,
          h = Math.hypot(u + 1500, d + 700) < 320,
          g;
        ((g =
          a <= 1
            ? r.chance(0.75)
              ? r.range(45, 110)
              : r.range(25, 50)
            : m
              ? r.chance(0.5)
                ? r.range(70, 170)
                : r.range(25, 60)
              : h
                ? r.chance(0.35)
                  ? r.range(55, 100)
                  : r.range(18, 45)
                : r.chance(0.08)
                  ? r.range(50, 90)
                  : r.range(12, 40)),
          !(p > 900 && r.chance(0.5)) &&
            s(
              u,
              d,
              o,
              l,
              g,
              f - 0.5,
              g > 80 && r.chance(0.5),
              g > 60 && r.chance(0.18),
              p < 220,
            ));
      }
      e += n;
    }
    let n = -1860,
      a = t.height(n, 640);
    (e.setColor(0.42, 0.5, 0.56).setEmit(0, 0, 777),
      e.box(n, a - 0.5, 640, 32, 150, 32),
      e.box(n, a + 149.5, 640, 24, 30, 24),
      e.box(n, a + 179.5, 640, 14, 12, 14),
      e.noEmit(),
      e.setColor(0.9, 0.95, 1).setEmit(3, 0),
      e.box(n, a + 186, 640, 14.4, 1.2, 14.4, 0, 51),
      e.setColor(1, 0.12, 0.08).setEmit(8, 2, 3),
      e.box(n, a + 192, 640, 0.8, 0.8, 0.8),
      e.noEmit(),
      i++);
  }
  l = [0, 1];
  let g = t.northBank(430) - 105;
  for (let e = Be + 20; e < 2300;) {
    let n = r.range(34, 52),
      i = t.northBank(e) - 62,
      a = 0,
      o = e < -150;
    for (; i > -2100;) {
      let l = r.range(16, 30),
        u = Math.min(n - 8, r.range(16, 34)),
        d = e + n / 2,
        f = i - l / 2;
      if (
        ((i -= l + r.range(10, 22)),
        a++,
        t.dazhiPlain(d, f) < 0.6 || Math.hypot(d - 430, f - g) < 95 || c(d, f))
      )
        continue;
      let p = t.northBank(d) - f;
      if (d > -760 && d < -420 && p < 300) continue;
      let m = t.height(d, f);
      if (m > 9) continue;
      let h;
      ((h = o
        ? r.chance(0.12)
          ? r.range(40, 70)
          : r.range(12, 36)
        : a <= 1
          ? r.range(30, 85)
          : r.range(18, 70)),
        s(
          d,
          f,
          u,
          l,
          h,
          m - 0.5,
          !o && r.chance(0.55),
          h > 55 && r.chance(0.25),
          a <= 2,
        ));
    }
    e += n;
  }
  let _ = [];
  for (let n = Be + 24; n < 2350; n += 34) {
    let r = t.northBank(n) - 24,
      i = t.height(n, r);
    if (i < 1.2 || i > 5 || Math.hypot(n - 430, r - g) < 110 || c(n, r))
      continue;
    let a = n + 34,
      o = t.northBank(a) - 24;
    (t.height(a, o) < 5 &&
      t.height(a, o) > 1.2 &&
      (e.setColor(0.3, 0.1, 0.075),
      e.quad(
        n,
        i + 0.05,
        r + 1.7,
        a,
        i + 0.05,
        o + 1.7,
        a,
        i + 0.05,
        o - 1.7,
        n,
        i + 0.05,
        r - 1.7,
      ),
      e.setColor(0.42, 0.41, 0.38),
      e.quad(
        n,
        i + 0.05,
        r - 6,
        a,
        i + 0.05,
        o - 6,
        a,
        i + 0.05,
        o - 8.6,
        n,
        i + 0.05,
        r - 8.6,
      )),
      e.setColor(0.2, 0.24, 0.22),
      e.boxMinMax(n - 0.1, i, r - 3.4, n + 0.1, i + 5.2, r - 3.2),
      e.setColor(1, 0.84, 0.6).setEmit(5, 0),
      e.boxMinMax(n - 0.25, i + 5, r - 3.55, n + 0.25, i + 5.25, r - 3.05),
      e.noEmit(),
      _.push({ x: n, y: i + 5.1, z: r - 3.3 }));
  }
  let v = t.height(430, g);
  {
    (e.setColor(0.86, 0.85, 0.82).setEmit(0, 0, 321),
      e.box(430, v - 0.5, g + 4, 120, 24.5, 62),
      e.noEmit(),
      e.setColor(0.72, 0.1, 0.12),
      e.box(430, v + 24, g + 4, 121, 1.6, 63, 0, 55));
    let t = 11.2,
      n = v + 8;
    (e.setColor(1, 1, 1).setEmit(1.5, 0),
      e.quad(
        415,
        n,
        g + 35.1,
        445,
        n,
        g + 35.1,
        445,
        n + t,
        g + 35.1,
        415,
        n + t,
        g + 35.1,
        Mm,
      ),
      e.noEmit());
    let r = v + 24 + 44;
    e.setColor(0.92, 0.92, 0.9);
    for (let t of [-1, 1])
      (e.beam(414, v + 24, g + t * 5, 430, r, g + t * 3.2, 1.3, 1.3),
        e.beam(446, v + 24, g + t * 5, 430, r, g + t * 3.2, 1.3, 1.3));
    i++;
  }
  return {
    wheelCenter: new U(430, v + 24 + 44, g),
    buildings: i,
    parkLamps: _,
    decks: h,
  };
}
function nh(e, t) {
  let n = e.vertexCount;
  ((e.emitZOverride = -1),
    rh(e),
    e.transformSince(n, new De().makeTranslation(t.x, t.y, t.z)),
    (e.emitZOverride = null),
    e.noEmit());
}
function rh(e) {
  for (let t of [-1, 1]) {
    let n = t * 1.7;
    for (let t = 0; t < 56; t++) {
      let r = (t / 56) * Math.PI * 2,
        i = ((t + 1) / 56) * Math.PI * 2;
      (e.setColor(0.95, 0.95, 0.95).setEmit(2.4, 4),
        e.beam(
          Math.cos(r) * 37,
          Math.sin(r) * 37,
          n,
          Math.cos(i) * 37,
          Math.sin(i) * 37,
          n,
          0.6,
          0.6,
        ),
        e.beam(
          Math.cos(r) * 34,
          Math.sin(r) * 34,
          n,
          Math.cos(i) * 34,
          Math.sin(i) * 34,
          n,
          0.35,
          0.35,
        ),
        t % 2 == 0 &&
          (e.setColor(0.9, 0.9, 0.9).setEmit(1.2, 4),
          e.beam(
            0,
            0,
            n * 1.8,
            Math.cos(r) * 34,
            Math.sin(r) * 34,
            n,
            0.25,
            0.25,
          )));
    }
  }
  e.setColor(0.8, 0.8, 0.8).noEmit();
  for (let t = 0; t < 56; t += 1) {
    let n = (t / 56) * Math.PI * 2;
    e.beam(
      Math.cos(n) * 37,
      Math.sin(n) * 37,
      -1.7,
      Math.cos(n) * 37,
      Math.sin(n) * 37,
      1.7,
      0.2,
      0.2,
    );
  }
  let t = [
    [0.85, 0.15, 0.2],
    [0.95, 0.75, 0.15],
    [0.2, 0.55, 0.85],
    [0.3, 0.7, 0.35],
  ];
  for (let n = 0; n < 28; n++) {
    let r = (n / 28) * Math.PI * 2,
      i = Math.cos(r) * 38.6,
      a = Math.sin(r) * 38.6,
      o = t[n % 4];
    (e.setColor(o[0], o[1], o[2]).setEmit(0.4, 0),
      e.boxMinMax(i - 1.1, a - 1.3, -1.1, i + 1.1, a + 1.1, 1.1));
  }
  (e.noEmit().setColor(0.7, 0.7, 0.7), e.beam(0, 0, -4, 0, 0, 4, 2.2, 2.2));
}
function ih(e, t) {
  let n = 0;
  for (let r = -2600; r < 2400; r += 22)
    for (let i = -2600; i < 2600; i += 22) {
      let a = t.kind(i, r);
      if (a === `city` || a === `water`) continue;
      let o = t.outside(i, r);
      if (o < 60) continue;
      let s = t.height(i, r);
      if (s < 25 || s > 420) continue;
      let c = kp(Math.round(i), Math.round(r)),
        l = Mp(i / 520 + 3.7, r / 520 - 1.3, 3),
        u = Math.abs(l - 0.5) < 0.012 || Math.abs(l - 0.62) < 0.009,
        d = Mp(i / 160 - 9.1, r / 160 + 4.4, 2) > 0.74;
      if (!(u && c < 0.3) && !(d && c < 0.16)) continue;
      let f = (kp(Math.round(i) + 7, Math.round(r)) - 0.5) * 22 * 0.8,
        p = (kp(Math.round(i), Math.round(r) + 7) - 0.5) * 22 * 0.8,
        m = i + f,
        h = r + p,
        g = t.height(m, h),
        _ = c < 0.4,
        v = 1.6 + (o > 900 ? 1.2 : 0);
      (e.setColor(_ ? 1 : 0.85, _ ? 0.66 : 0.92, _ ? 0.32 : 1).setEmit(7, 0),
        e.boxMinMax(
          m - v / 2,
          g + 1.2,
          h - v / 2,
          m + v / 2,
          g + 1.2 + v,
          h + v / 2,
        ),
        n++);
    }
  e.noEmit();
  let r = [
      [-200, -1650],
      [700, -1600],
      [-1e3, -1500],
      [1150, 620],
      [350, 900],
      [1010, 360],
    ],
    i = 0;
  for (let [n, a] of r) {
    let r = n,
      o = a,
      s = t.height(n, a);
    for (let e = 0; e < 24; e++) {
      let i = (e / 24) * Math.PI * 2;
      for (let e of [40, 90, 150]) {
        let c = n + Math.cos(i) * e,
          l = a + Math.sin(i) * e,
          u = t.height(c, l);
        u > s && ((s = u), (r = c), (o = l));
      }
    }
    let c = n === 1010 ? 0 : 38;
    c > 0 &&
      (e.setColor(0.75, 0.72, 0.7),
      e.frustum(r, s - 1, o, 5, 5, 0.8, 0.8, c),
      e.setColor(1, 0.1, 0.06).setEmit(12, 2, ++i * 17),
      e.boxMinMax(r - 1.1, s + c - 1, o - 1.1, r + 1.1, s + c + 1.2, o + 1.1),
      e.boxMinMax(
        r - 0.9,
        s + c * 0.5,
        o - 0.9,
        r + 0.9,
        s + c * 0.5 + 1.8,
        o + 0.9,
      ),
      e.noEmit());
  }
  return n;
}
var ah = class {
    pos = [];
    uv = [];
    col = [];
    idx = [];
    add(e, t, n, r, i, a, o, s) {
      let c = this.pos.length / 3;
      for (let [c, l] of [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
      ])
        (this.pos.push(e + c * r, t, n + l * r),
          this.uv.push(c, l),
          this.col.push(i * s, a * s, o * s));
      this.idx.push(c, c + 3, c + 2, c, c + 2, c + 1);
    }
    get count() {
      return this.pos.length / 12;
    }
    build() {
      let e = new V();
      (e.setAttribute(`position`, new N(this.pos, 3)),
        e.setAttribute(`uv`, new N(this.uv, 2)),
        e.setAttribute(`color`, new N(this.col, 3)),
        e.setIndex(this.idx),
        e.computeBoundingSphere(),
        (this.pos = []),
        (this.uv = []),
        (this.col = []),
        (this.idx = []));
      let t = new E({
          name: `env-light-pools`,
          uniforms: { uNight: q.uNight, uWet: q.uWet },
          vertexShader: `
        attribute vec3 color;
        varying vec2 vUv;
        varying vec3 vCol;
        void main() {
          vUv = uv;
          vCol = color;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
          fragmentShader: `
        uniform float uNight;
        uniform float uWet;
        varying vec2 vUv;
        varying vec3 vCol;
        void main() {
          float r2 = dot(vUv, vUv);
          if (r2 > 1.0) discard;
          float f = (1.0 - r2);
          f = f * f * (0.6 + 0.4 * f);
          gl_FragColor = vec4(vCol * f * 0.55 * uNight * smoothstep(0.08, 0.22, uNight) * (1.0 + 0.8 * uWet), 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
          transparent: !0,
          blending: 2,
          depthWrite: !1,
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -2,
          fog: !1,
        }),
        n = new M(e, t);
      return ((n.name = `env-light-pools`), (n.renderOrder = 5), n);
    }
  },
  oh = `
uniform vec3 uCam;
uniform vec3 uCamVel;
uniform float uRTime;
uniform float uFall;
uniform vec2 uWind;
uniform vec3 uBox;
uniform float uGroundY;
uniform float uIntensity;
// roofed areas (arcades, market roofs): xz rect (minX, minZ, maxX, maxZ) + roof height per slot
uniform vec4 uOcc[4];
uniform vec4 uOccY;
attribute vec4 aSeed;
varying float vAlpha;
varying vec2 vUv;
float rainOcc(vec3 p) {
  float o = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 r = uOcc[i];
    if (p.x > r.x && p.x < r.z && p.z > r.y && p.z < r.w && p.y < uOccY[i]) o = 1.0;
  }
  return o;
}
void main() {
  vec3 wp;
  if (aSeed.w < 2.0) {
    vec3 vel = vec3(uWind.x, -uFall * (0.82 + 0.36 * aSeed.w), uWind.y);
    vec3 p = aSeed.xyz * uBox + vel * uRTime;
    vec3 origin = uCam - vec3(uBox.x * 0.5, uBox.y * 0.38, uBox.z * 0.5);
    p = origin + mod(p - origin, uBox);
    vec3 rel = vel - uCamVel;
    float speed = length(rel);
    vec3 dir = rel / max(speed, 0.001);
    float len = clamp(speed * 0.032, 0.35, 1.6);
    vec3 toCam = uCam - p;
    float dist = length(toCam);
    vec3 side = normalize(cross(dir, toCam / max(dist, 0.001)) + vec3(1e-5));
    float w = 0.0022 + dist * 0.00095;
    wp = p + dir * (position.y - 0.5) * len + side * position.x * w;
    vAlpha = uIntensity * smoothstep(0.5, 2.5, dist) * (1.0 - smoothstep(uBox.x * 0.32, uBox.x * 0.5, dist));
    vAlpha *= step(uGroundY - 0.2, p.y) * (1.0 - rainOcc(p));
    vUv = position.xy;
  } else {
    float tt = uRTime * 2.4 + aSeed.w * 7.13;
    float cyc = floor(tt);
    float ph = fract(tt);
    vec2 rnd = vec2(
      fract(sin(cyc * 12.9898 + aSeed.x * 311.7) * 43758.5453),
      fract(sin(cyc * 78.233 + aSeed.y * 183.3) * 24634.6345));
    vec2 off = (rnd - 0.5) * 30.0;
    vec3 base = vec3(uCam.x + off.x, uGroundY + 0.03, uCam.z + off.y);
    vec3 tc = uCam - base;
    vec3 right = normalize(vec3(-tc.z, 0.0, tc.x) + vec3(1e-5, 0.0, 0.0));
    float s = 0.05 + ph * 0.2;
    wp = base + right * position.x * s + vec3(0.0, position.y * s * 0.9, 0.0);
    vAlpha = uIntensity * (1.0 - ph) * smoothstep(15.0, 6.0, length(off)) * (1.0 - rainOcc(base));
    vUv = vec2(position.x, position.y + 2.0);
  }
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`,
  sh = `
uniform vec3 uRainCol;
varying float vAlpha;
varying vec2 vUv;
void main() {
  float a;
  if (vUv.y > 1.5) {
    vec2 q = vec2(vUv.x, vUv.y - 2.0);
    float r = length(vec2(q.x, (q.y - 0.1) * 1.6));
    a = smoothstep(1.0, 0.75, r) * smoothstep(0.35, 0.7, r) * 0.9;
  } else {
    a = (1.0 - abs(vUv.x)) * smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
  }
  a *= vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uRainCol, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  ch = class {
    mesh;
    uniforms = {
      uCam: { value: new U() },
      uCamVel: { value: new U() },
      uRTime: { value: 0 },
      uFall: { value: 11 },
      uWind: { value: new ve(1, 0.5) },
      uBox: { value: new U(34, 20, 34) },
      uGroundY: { value: 0 },
      uIntensity: { value: 0 },
      uRainCol: { value: new W(0.6, 0.62, 0.66) },
      uOcc: { value: [0, 1, 2, 3].map(() => new de(1e9, 1e9, -1e9, -1e9)) },
      uOccY: { value: new de(-1e9, -1e9, -1e9, -1e9) },
    };
    occ = [];
    occId = 0;
    occBest = [-1, -1, -1, -1];
    occBestD = [0, 0, 0, 0];
    sheltered = !1;
    geo;
    maxStreaks = 0;
    splashes = 0;
    lastCam = new U();
    vel = new U();
    hasLast = !1;
    constructor(e) {
      this.geo = new se();
      let t = new Float32Array([-1, 0, 0, 1, 0, 0, 1, 1, 0, -1, 1, 0]);
      (this.geo.setAttribute(`position`, new H(t, 3)),
        this.geo.setIndex([0, 1, 2, 0, 2, 3]),
        this.allocate(e));
      let n = new E({
        name: `env-rain`,
        uniforms: this.uniforms,
        vertexShader: oh,
        fragmentShader: sh,
        transparent: !0,
        depthWrite: !1,
        fog: !1,
      });
      ((this.mesh = new M(this.geo, n)),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 50),
        (this.mesh.visible = !1),
        (this.mesh.name = `env-rain`));
    }
    addOccluder(e, t) {
      let n = ++this.occId;
      return (
        this.occ.push({
          id: n,
          minX: Math.min(e.minX, e.maxX),
          minZ: Math.min(e.minZ, e.maxZ),
          maxX: Math.max(e.minX, e.maxX),
          maxZ: Math.max(e.minZ, e.maxZ),
          y: t,
        }),
        n
      );
    }
    covered(e, t, n) {
      for (let r = 0; r < this.occ.length; r++) {
        let i = this.occ[r];
        if (e > i.minX && e < i.maxX && t > i.minZ && t < i.maxZ && n < i.y)
          return !0;
      }
      return !1;
    }
    removeOccluder(e) {
      let t = this.occ.findIndex((t) => t.id === e);
      (t >= 0 && this.occ.splice(t, 1),
        this.occ.length || this.pickOccluders(0, 0));
    }
    pickOccluders(e, t) {
      let n = this.occBest,
        r = this.occBestD;
      for (let e = 0; e < 4; e++) ((n[e] = -1), (r[e] = 0xde0b6b3a7640000));
      for (let i = 0; i < this.occ.length; i++) {
        let a = this.occ[i],
          o = Math.max(a.minX - e, 0, e - a.maxX),
          s = Math.max(a.minZ - t, 0, t - a.maxZ),
          c = o * o + s * s;
        if (c > 3600) continue;
        let l = 3;
        if (!(c >= r[l])) {
          for (; l > 0 && c < r[l - 1];)
            ((r[l] = r[l - 1]), (n[l] = n[l - 1]), l--);
          ((r[l] = c), (n[l] = i));
        }
      }
      let i = this.uniforms,
        a = i.uOccY.value;
      for (let e = 0; e < 4; e++) {
        let t = n[e] >= 0 ? this.occ[n[e]] : null;
        (t
          ? i.uOcc.value[e].set(t.minX, t.minZ, t.maxX, t.maxZ)
          : i.uOcc.value[e].set(1e9, 1e9, -1e9, -1e9),
          a.setComponent(e, t ? t.y : -1e9));
      }
    }
    allocate(e) {
      let t = Math.min(700, Math.floor(e * 0.18)),
        n = e - t;
      if (n === this.maxStreaks && t === this.splashes) return;
      ((this.maxStreaks = n), (this.splashes = t));
      let i = t + n,
        a = t,
        o = new Float32Array(i * 4),
        s = 625341585,
        c = () => (
          (s ^= s << 13),
          (s ^= s >>> 17),
          (s ^= s << 5),
          (s >>> 0) / 4294967296
        );
      for (let e = 0; e < i; e++)
        ((o[e * 4] = c()),
          (o[e * 4 + 1] = c()),
          (o[e * 4 + 2] = c()),
          (o[e * 4 + 3] = e < a ? 2 + c() : c()));
      (this.geo.setAttribute(`aSeed`, new r(o, 4)),
        (this.geo.instanceCount = 0));
    }
    preRender(e, t) {
      let n = this.uniforms,
        r = e.position;
      if (this.hasLast && t > 0) {
        let e = Math.min(1, t * 6);
        ((this.vel.x += ((r.x - this.lastCam.x) / t - this.vel.x) * e),
          (this.vel.y += ((r.y - this.lastCam.y) / t - this.vel.y) * e),
          (this.vel.z += ((r.z - this.lastCam.z) / t - this.vel.z) * e),
          this.vel.lengthSq() > 3600 && this.vel.set(0, 0, 0));
      }
      (this.lastCam.copy(r),
        (this.hasLast = !0),
        n.uCam.value.copy(r),
        n.uCamVel.value.copy(this.vel).multiplyScalar(0.85),
        this.mesh.visible && this.occ.length && this.pickOccluders(r.x, r.z));
    }
    update(e, t, n, r, i) {
      let a = this.uniforms;
      ((a.uRTime.value = t),
        (a.uIntensity.value = Math.min(1, e * 1.3) * 0.42),
        a.uWind.value.set(1.2 + n * 5.5, 0.6 + n * 2.5),
        (a.uFall.value = 9.5 + e * 3),
        (a.uGroundY.value = r),
        a.uRainCol.value.copy(i));
      let o = Math.floor(this.maxStreaks * Math.min(1, e * 1.15)),
        s = e > 0.02 && !this.sheltered;
      ((this.geo.instanceCount = s ? this.splashes + o : 0),
        (this.mesh.visible = s));
    }
  };
function lh(e) {
  let t = e >>> 0 || 1,
    n = () => (
      (t = (Math.imul(t, 1664525) + 1013904223) >>> 0),
      t / 4294967296
    ),
    r = [],
    i = [],
    a = (e, t, n) => {
      let a = r.length / 3;
      for (let o = 0; o < e.length; o++) {
        let s = o / (e.length - 1),
          c = t + (n - t) * s,
          [l, u] = e[o];
        if ((r.push(l - c, u, 0, l + c, u, 0), o > 0)) {
          let e = a + (o - 1) * 2;
          i.push(e, e + 1, e + 3, e, e + 3, e + 2);
        }
      }
    },
    o = [],
    s = 0;
  for (let e = 0; e <= 34; e++) {
    let t = 1 - e / 34;
    (o.push([s, t]), (s += (n() - 0.5) * 0.09));
  }
  a(o, 0.006, 0.003);
  for (let e = 0; e < 4; e++) {
    let [e, t] = o[3 + Math.floor(n() * 20.4)],
      r = n() < 0.5 ? -1 : 1,
      i = [[e, t]],
      s = 5 + Math.floor(n() * 9);
    for (let a = 0; a < s; a++)
      ((e += r * (0.01 + n() * 0.03)),
        (t -= 0.012 + n() * 0.02),
        i.push([e, t]));
    a(i, 0.0035, 0.001);
  }
  let c = new V();
  return (c.setAttribute(`position`, new N(r, 3)), c.setIndex(i), c);
}
var uh = class {
  mesh;
  variants = [];
  strokes = [];
  t = 99;
  flash = 0;
  dir = new U(1, 0.3, 0).normalize();
  pendingThunder = [];
  mat;
  constructor() {
    for (let e = 0; e < 4; e++) this.variants.push(lh(1234 + e * 7777));
    ((this.mat = new l({
      color: new W(6, 6.5, 9),
      transparent: !0,
      blending: 2,
      depthWrite: !1,
      side: 2,
      fog: !1,
    })),
      (this.mat.name = `env-lightning`),
      (this.mat.forceSinglePass = !0),
      (this.mesh = new M(this.variants[0], this.mat)),
      (this.mesh.visible = !1),
      (this.mesh.frustumCulled = !1),
      (this.mesh.renderOrder = 2e4),
      (this.mesh.name = `env-lightning`));
  }
  strike(e, t, n, r, i = !0) {
    let a = n() * Math.PI * 2,
      o = 650 + n() * 2300,
      s = e.x + Math.cos(a) * o,
      c = e.z + Math.sin(a) * o,
      l = Math.max(-1, t(s, c)),
      u = 420 + n() * 260;
    (this.dir.set(s - e.x, u * 0.6, c - e.z).normalize(),
      (this.mesh.geometry =
        this.variants[Math.floor(n() * this.variants.length)]),
      this.mesh.position.set(s, l, c),
      this.mesh.scale.set(u * 0.9, u - l + 20, 1),
      this.mesh.rotation.set(0, Math.atan2(e.x - s, e.z - c), 0),
      (this.mesh.visible = !1),
      (this.withBolt = i),
      (this.t = 0),
      (this.strokes.length = 0));
    let d = 2 + Math.floor(n() * 3),
      f = 0;
    for (let e = 0; e < d; e++)
      (this.strokes.push(f), (f += 0.05 + n() * 0.18));
    let p = o / 343 + n() * 0.4,
      m = Math.max(0.25, Math.min(1, 1.35 - o / 2600));
    return (this.pendingThunder.push({ at: r + p, volume: m }), o);
  }
  withBolt = !0;
  update(e, t, n) {
    this.t += e;
    let r = 0;
    for (let e of this.strokes) {
      let t = this.t - e;
      t >= 0 && (r += Math.exp(-t * 22) * (t < 0.03 ? t / 0.03 : 1));
    }
    ((this.flash = Math.min(1.6, r)),
      (this.mesh.visible = this.withBolt && this.flash > 0.12),
      (this.mat.opacity = Math.min(1, this.flash)));
    for (let e = this.pendingThunder.length - 1; e >= 0; e--) {
      let r = this.pendingThunder[e];
      t >= r.at && (n(r.volume), this.pendingThunder.splice(e, 1));
    }
    return this.flash > 0.001;
  }
};
function dh() {
  let e = new Em(),
    t = (e, t, n = 0) => {
      let r = [];
      for (let i = 0; i < 10; i++) {
        let a = (i / 10) * Math.PI * 2;
        r.push([Math.cos(a) * t, Math.sin(a) * t * 1.05 + n, e]);
      }
      return r;
    },
    n = (t, n, r) => {
      for (let i = 0; i < 10; i++) {
        let a = (i + 1) % 10,
          o = t[i][1] < -0.3 && t[a][1] < -0.3;
        (r && o ? e.setColor(0.55, 0.6, 0.66) : e.setColor(0.92, 0.93, 0.94),
          e.quad(
            t[a][0],
            t[a][1],
            t[a][2],
            t[i][0],
            t[i][1],
            t[i][2],
            n[i][0],
            n[i][1],
            n[i][2],
            n[a][0],
            n[a][1],
            n[a][2],
          ));
      }
    },
    r = [
      [-20, 0.25, -0.3],
      [-18.6, 1.2, -0.15],
      [-16.8, 1.85, 0],
      [-14, 2, 0],
      [12, 2, 0],
      [15.5, 1.5, 0.35],
      [18.5, 0.7, 0.9],
      [19.6, 0.2, 1.1],
    ];
  for (let e = 0; e + 1 < r.length; e++)
    n(
      t(r[e][0], r[e][1], r[e][2]),
      t(r[e + 1][0], r[e + 1][1], r[e + 1][2]),
      !0,
    );
  (e.setColor(0.05, 0.07, 0.1),
    e.quad(-1, 0.9, -17.4, 1, 0.9, -17.4, 0.8, 1.35, -16.6, -0.8, 1.35, -16.6),
    e.setColor(1, 0.85, 0.6).setEmit(1.4, 0),
    e.quad(2.01, 0.35, -13, 2.01, 0.35, 11, 2.01, 0.7, 11, 2.01, 0.7, -13),
    e.quad(-2.01, 0.35, 11, -2.01, 0.35, -13, -2.01, 0.7, -13, -2.01, 0.7, 11),
    e.noEmit(),
    e.setColor(0.1, 0.35, 0.55),
    e.quad(
      2.005,
      -0.25,
      -15,
      2.005,
      -0.25,
      13,
      2.005,
      0.05,
      13,
      2.005,
      0.05,
      -15,
    ),
    e.quad(
      -2.005,
      -0.25,
      13,
      -2.005,
      -0.25,
      -15,
      -2.005,
      0.05,
      -15,
      -2.005,
      0.05,
      13,
    ));
  let i = (t) => {
    let n = 17.5,
      r = -0.9,
      i = 0.2;
    e.setColor(0.86, 0.87, 0.88);
    let a = [
      [t * 1.6, r, -3.5],
      [t * n, i, 3.8],
      [t * n, i, 6.3],
      [t * 1.6, r, 3.5],
    ];
    (t > 0
      ? (e.quad(
          a[0][0],
          a[0][1] + 0.25,
          a[0][2],
          a[3][0],
          a[3][1] + 0.25,
          a[3][2],
          a[2][0],
          a[2][1] + 0.1,
          a[2][2],
          a[1][0],
          a[1][1] + 0.1,
          a[1][2],
        ),
        e.quad(
          a[0][0],
          a[0][1],
          a[0][2],
          a[1][0],
          a[1][1],
          a[1][2],
          a[2][0],
          a[2][1],
          a[2][2],
          a[3][0],
          a[3][1],
          a[3][2],
        ))
      : (e.quad(
          a[0][0],
          a[0][1] + 0.25,
          a[0][2],
          a[1][0],
          a[1][1] + 0.1,
          a[1][2],
          a[2][0],
          a[2][1] + 0.1,
          a[2][2],
          a[3][0],
          a[3][1] + 0.25,
          a[3][2],
        ),
        e.quad(
          a[0][0],
          a[0][1],
          a[0][2],
          a[3][0],
          a[3][1],
          a[3][2],
          a[2][0],
          a[2][1],
          a[2][2],
          a[1][0],
          a[1][1],
          a[1][2],
        )),
      e.setColor(0.8, 0.8, 0.82),
      e.beam(t * 6, -1.9, -4.5, t * 6, -1.9, 0.5, 1.5, 1.5),
      e.setColor(0.15, 0.15, 0.16),
      e.boxMinMax(t * 6 - 0.6, -2.5, -4.55, t * 6 + 0.6, -1.3, -4.45));
    let o = t * 17.6;
    (t < 0
      ? e.setColor(1, 0.1, 0.08).setEmit(9, 5)
      : e.setColor(0.1, 1, 0.25).setEmit(9, 5),
      e.boxMinMax(o - 0.2, i, 4.1, o + 0.2, 0.55, 4.6),
      e.setColor(1, 1, 1).setEmit(28, 3),
      e.boxMinMax(o - 0.2, i, 5.5, o + 0.2, 0.55, 6),
      e.noEmit(),
      e.setColor(1, 0.97, 0.9).setEmit(34, 5),
      e.boxMinMax(t * 2.3 - 0.25, -1.1, -3.85, t * 2.3 + 0.25, -0.7, -3.6),
      e.noEmit());
  };
  (i(1), i(-1));
  for (let t of [-1, 1]) {
    e.setColor(0.86, 0.87, 0.88);
    let n = [t * 0.8, 1, 14.5],
      r = [t * 6.5, 1.4, 18.5],
      i = [t * 6.5, 1.4, 19.8],
      a = [t * 0.8, 1, 19];
    (t > 0
      ? e.quad(
          n[0],
          n[1],
          n[2],
          a[0],
          a[1],
          a[2],
          i[0],
          i[1],
          i[2],
          r[0],
          r[1],
          r[2],
        )
      : e.quad(
          n[0],
          n[1],
          n[2],
          r[0],
          r[1],
          r[2],
          i[0],
          i[1],
          i[2],
          a[0],
          a[1],
          a[2],
        ),
      t > 0
        ? e.quad(
            n[0],
            n[1] - 0.1,
            n[2],
            r[0],
            r[1] - 0.1,
            r[2],
            i[0],
            i[1] - 0.1,
            i[2],
            a[0],
            a[1] - 0.1,
            a[2],
          )
        : e.quad(
            n[0],
            n[1] - 0.1,
            n[2],
            a[0],
            a[1] - 0.1,
            a[2],
            i[0],
            i[1] - 0.1,
            i[2],
            r[0],
            r[1] - 0.1,
            r[2],
          ));
  }
  e.setColor(0.36, 0.13, 0.38);
  for (let t of [-1, 1]) {
    let n = t * 0.15,
      r = [
        [n, 1.6, 13.2],
        [n, 1.6, 19.5],
        [n, 8.5, 20.8],
        [n, 8.5, 17.8],
      ];
    t > 0
      ? e.quad(
          r[0][0],
          r[0][1],
          r[0][2],
          r[1][0],
          r[1][1],
          r[1][2],
          r[2][0],
          r[2][1],
          r[2][2],
          r[3][0],
          r[3][1],
          r[3][2],
        )
      : e.quad(
          r[1][0],
          r[1][1],
          r[1][2],
          r[0][0],
          r[0][1],
          r[0][2],
          r[3][0],
          r[3][1],
          r[3][2],
          r[2][0],
          r[2][1],
          r[2][2],
        );
  }
  return (
    e.setColor(1, 0.1, 0.06).setEmit(14, 2, 5),
    e.boxMinMax(-0.2, 2.1, 0, 0.2, 2.45, 0.4),
    e.boxMinMax(-0.2, -2.45, 2, 0.2, -2.1, 2.4),
    e.setColor(1, 1, 1).setEmit(6, 5),
    e.boxMinMax(-0.15, 1.1, 19.6, 0.15, 1.4, 19.9),
    e.noEmit(),
    e.doubleSided().build()
  );
}
var fh = class {
  active = !1;
  t = 0;
  duration = 1;
  pos = new U();
  start = new U();
  end = new U();
  heading = Math.PI / 2;
  pitch = 0.05;
  roll = 0;
  cooldown = 40;
  landing = !1;
  ld = {
    x0: -3600,
    xTd: 150,
    xEnd: 1080,
    h0: 320,
    z: -1013,
    y: 2.95,
    tTd: 1,
    tStop: 1,
  };
  begin(e) {
    this.landing = !1;
    let t = -640 + (e() - 0.5) * 60;
    (this.start.set(-3600, 300, t - 40), this.end.set(1500, 20, t + 10));
    let n = this.start.distanceTo(this.end);
    ((this.duration = n / 78), (this.t = 0), (this.active = !0));
  }
  update(e, t) {
    if (!this.active)
      return (
        (this.cooldown -= e),
        this.cooldown <= 0 &&
          (this.begin(t), (this.cooldown = 130 + t() * 140)),
        !1
      );
    if (this.landing) return this.updateLanding(e);
    if (((this.t += e / this.duration), this.t >= 1))
      return ((this.active = !1), !1);
    let n = this.t;
    (this.pos.lerpVectors(this.start, this.end, n),
      (this.pos.y =
        this.start.y + (this.end.y - this.start.y) * (n * 0.92 + 0.08 * n * n)),
      (this.pos.z += Math.sin(n * Math.PI * 2) * 45 * (1 - n)));
    let r = Math.cos(n * Math.PI * 2) * 45 * Math.PI * 2 * (1 - n),
      i = this.end.x - this.start.x;
    return (
      (this.heading = Math.atan2(i, -r)),
      (this.roll = -Math.sin(n * Math.PI * 2) * 0.18 * (1 - n)),
      (this.pitch = 0.05 + (n > 0.9 ? (n - 0.9) * 0.6 : 0)),
      !0
    );
  }
  updateLanding(e) {
    let t = this.ld;
    this.t += e;
    let n = this.t;
    if (n >= this.duration)
      return ((this.active = !1), (this.landing = !1), !1);
    if (n < t.tTd) {
      let e = n / t.tTd;
      this.pos.x = t.x0 + (t.xTd - t.x0) * e;
      let r = Math.max(0, (n - (t.tTd - 6)) / 6),
        i = (t.h0 - t.y) * (1 - e) * (1 - 0.4 * r * r) + t.y;
      ((this.pos.y = i),
        (this.pos.z = t.z + Math.sin(e * Math.PI) * 30 * (1 - e)),
        (this.pitch = 0.04 + 0.06 * r),
        (this.roll = -Math.sin(e * Math.PI * 2) * 0.06 * (1 - e)));
    } else {
      let e = n - t.tTd,
        r = Math.min(e, 16),
        i = t.xTd + 76 * r - 2 * r * r;
      (e > 16 && (i += 11 * (e - 16)),
        this.pos.set(Math.min(i, t.xEnd), t.y, t.z),
        (this.pitch = Math.max(0, 0.08 - e * 0.03)),
        (this.roll = 0));
    }
    return ((this.heading = Math.PI / 2), !0);
  }
};
function ph() {
  let e = new Em();
  (e.setColor(0.93, 0.93, 0.9),
    e.boxMinMax(-2.6, -0.6, -8, 2.6, 1.1, 9),
    e.tri(-2.6, 1.1, -8, 2.6, 1.1, -8, 0, 1.1, -12),
    e.quad(0, -0.6, -12, -2.6, -0.6, -8, -2.6, 1.1, -8, 0, 1.1, -12),
    e.quad(2.6, -0.6, -8, 0, -0.6, -12, 0, 1.1, -12, 2.6, 1.1, -8),
    e.setColor(0.1, 0.33, 0.62),
    e.boxMinMax(-2.62, 0.1, -8, 2.62, 0.55, 9, 51),
    e.setColor(0.95, 0.95, 0.92).setEmit(0, 0, 0),
    e.boxMinMax(-2.1, 1.1, -5, 2.1, 3.4, 6.5),
    e.setColor(1, 0.82, 0.55).setEmit(1.6, 0),
    e.boxMinMax(-2.12, 2, -4.6, 2.12, 2.9, 6.1, 51),
    e.noEmit(),
    e.setColor(0.1, 0.33, 0.62),
    e.boxMinMax(-2.4, 3.4, -5.4, 2.4, 3.65, 6.9),
    e.setColor(0.85, 0.85, 0.82),
    e.boxMinMax(-2.3, 3.65, 6.5, 2.3, 4.5, 6.6),
    e.boxMinMax(-0.1, 3.65, -3.2, 0.1, 6.5, -3),
    e.setColor(1, 0.1, 0.08).setEmit(8, 5),
    e.boxMinMax(-2.5, 3.5, -5.3, -2.2, 3.8, -5),
    e.setColor(0.1, 1, 0.3).setEmit(8, 5),
    e.boxMinMax(2.2, 3.5, -5.3, 2.5, 3.8, -5),
    e.setColor(1, 1, 0.95).setEmit(9, 0),
    e.boxMinMax(-0.18, 6.5, -3.28, 0.18, 6.85, -2.92),
    e.noEmit(),
    e.setColor(0.8, 0.83, 0.84));
  let t = -0.55;
  for (let n of [-1, 1])
    (e.quad(n * 2.4, t, 8, n * 2.9, t, 8, n * 11, t, 42, n * 9, t, 42),
      e.quad(n * 2.9, t, 8, n * 2.4, t, 8, n * 9, t, 42, n * 11, t, 42));
  return (
    e.quad(-1.8, t, 9, 1.8, t, 9, 1.2, t, 26, -1.2, t, 26),
    e.doubleSided().build()
  );
}
var mh = class {
    path;
    length;
    speed;
    pos = new U();
    heading = 0;
    s = 0.3;
    dir = 1;
    constructor(e, t, n = 5.5) {
      ((this.path = e), (this.length = t), (this.speed = n));
    }
    update(e) {
      ((this.s += (this.dir * e * this.speed) / this.length),
        this.s > 1
          ? ((this.s = 1), (this.dir = -1))
          : this.s < 0 && ((this.s = 0), (this.dir = 1)),
        this.path(this.s, this.pos));
      let t = this.pos.x,
        n = this.pos.z,
        r = Math.min(1, Math.max(0, this.s + this.dir * 0.002));
      this.path(r, this.pos);
      let i = this.pos.x - t,
        a = this.pos.z - n;
      (i * i + a * a > 1e-8 && (this.heading = Math.atan2(i, -a)),
        this.path(this.s, this.pos));
    }
  },
  hh = 9;
function gh() {
  let e = [],
    t = [],
    n = (n, r, i, a) => {
      (e.push(...n, ...r, ...i), t.push(...a));
    },
    r = [0, 0.02, -0.55],
    i = [0, 0, 0.45],
    a = [0, 0.09, 0],
    o = [0, -0.07, 0],
    s = [-0.08, 0, 0],
    c = [0.08, 0, 0];
  for (let [e, t] of [
    [a, s],
    [s, o],
    [o, c],
    [c, a],
  ])
    (n(r, e, t, [0, 0, 0]), n(i, t, e, [0, 0, 0]));
  (n([0, 0.02, -0.55], [0.03, 0.14, -0.72], [-0.03, 0.14, -0.72], [0, 0, 0]),
    n([0, 0.14, -0.72], [0.01, 0.12, -0.9], [-0.01, 0.12, -0.9], [0, 0, 0]));
  for (let e of [-1, 1]) {
    let t = [e * 0.06, 0.02, -0.18],
      r = [e * 0.06, 0.02, 0.2],
      i = [e * 0.5, 0.03, -0.12],
      a = [e * 0.5, 0.03, 0.22],
      o = [e * 0.95, 0, 0.12],
      s = (e) => Math.abs(e[0]) / 0.95,
      c = (e, t, r) => {
        (n(e, t, r, [s(e), s(t), s(r)]), n(e, r, t, [s(e), s(r), s(t)]));
      };
    (c(t, i, r), c(r, i, a), c(i, o, a));
  }
  let l = new V();
  return (
    l.setAttribute(`position`, new N(e, 3)),
    l.setAttribute(`aWing`, new N(t, 1)),
    l.computeVertexNormals(),
    l
  );
}
var _h = class {
    center;
    rx;
    rz;
    mesh;
    offsets = [];
    m = new De();
    q = new Ce();
    e = new k(0, 0, 0, `YXZ`);
    p = new U();
    s = new U(1.35, 1.35, 1.35);
    t = Math.random() * 100;
    visibleK = 1;
    constructor(e, t, n) {
      ((this.center = e), (this.rx = t), (this.rz = n));
      let r = new D({ color: 16053230, emissive: 6052694 });
      ((r.name = `env-egrets`),
        (r.side = 2),
        (r.onBeforeCompile = (e) => {
          ((e.uniforms.uTime = q.uTime),
            (e.vertexShader = e.vertexShader
              .replace(
                `#include <common>`,
                `#include <common>
attribute float aWing;
uniform float uTime;`,
              )
              .replace(
                `#include <begin_vertex>`,
                `#include <begin_vertex>
          {
            #ifdef USE_INSTANCING
            float ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.21;
            #else
            float ph = 0.0;
            #endif
            float cyc = mod(uTime * 0.35 + ph, 3.0);
            float flap = cyc < 1.8 ? sin(uTime * 7.5 + ph * 3.0) : 0.15;   // flap, then glide
            transformed.y += flap * 0.42 * aWing * aWing;
          }`,
              )));
        }),
        (r.customProgramCacheKey = () => `env-egrets`),
        (this.mesh = new ye(gh(), r, hh)),
        (this.mesh.name = `env-egrets`),
        (this.mesh.frustumCulled = !1));
      for (let e = 0; e < hh; e++) {
        let t = e % 2 == 0 ? 1 : -1,
          n = Math.ceil(e / 2);
        this.offsets.push({
          x: t * n * 2.2 + Math.sin(e * 7.1) * 0.6,
          y: Math.sin(e * 3.3) * 0.8,
          z: n * 1.9 + Math.cos(e * 5.7) * 0.5,
          ph: e * 1.37,
        });
      }
    }
    update(e, t, n, r = 700) {
      ((this.t += e),
        (this.visibleK += (t - this.visibleK) * Math.min(1, e * 0.5)));
      let i = this.t * 0.022,
        a = this.center.x + Math.cos(i) * this.rx,
        o = this.center.z + Math.sin(i) * this.rz;
      if (
        ((this.mesh.visible =
          this.visibleK > 0.05 && (!n || Math.hypot(n.x - a, n.z - o) < r)),
        !this.mesh.visible)
      )
        return;
      let s = -Math.sin(i) * this.rx,
        c = Math.cos(i) * this.rz,
        l = Math.atan2(s, -c),
        u = -0.25 * Math.sign(this.rx * this.rz),
        d = 16 + Math.sin(this.t * 0.21) * 5 + (1 - this.visibleK) * 40,
        f = Math.cos(l),
        p = Math.sin(l);
      for (let e = 0; e < hh; e++) {
        let t = this.offsets[e],
          n = t.x,
          r = t.z,
          i = n * f - r * p,
          s = n * p + r * f;
        (this.p.set(
          a + i,
          d + t.y + Math.sin(this.t * 0.9 + t.ph) * 0.4,
          o + s,
        ),
          this.e.set(0.04 * Math.sin(this.t + t.ph), -l, u),
          this.q.setFromEuler(this.e),
          this.m.compose(this.p, this.q, this.s),
          this.mesh.setMatrixAt(e, this.m));
      }
      this.mesh.instanceMatrix.needsUpdate = !0;
    }
  },
  vh = `
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,
  yh = `
uniform sampler2D tDepth;
uniform vec4 uProjInfo;   // P[0][0], P[1][1], near, far
float aoDepth(vec2 uv) {
#ifdef USE_REVERSED_DEPTH_BUFFER
  return 1.0 - texture2D(tDepth, uv).r; // reversed-Z: near = 1, far = 0 (same mapping, mirrored)
#else
  return texture2D(tDepth, uv).r;
#endif
}
float aoViewZ(vec2 uv) {
  float d = aoDepth(uv);
  float n = uProjInfo.z, f = uProjInfo.w;
  return (n * f) / ((f - n) * d - f);
}
vec3 aoViewPos(vec2 uv, float vz) {
  vec2 ndc = uv * 2.0 - 1.0;
  return vec3(ndc.x * -vz / uProjInfo.x, ndc.y * -vz / uProjInfo.y, vz);
}
`,
  bh = `
${yh}
uniform vec2 uTexel;       // one texel of the depth texture (full resolution)
uniform float uRadius;     // world radius (m)
uniform float uIntensity;
uniform float uBias;
uniform float uMaxPx;      // max sample radius in full-res pixels
uniform float uFadeDist;   // AO fades out towards this view distance
uniform float uFrameH;     // full-res height in pixels
varying vec2 vUv;

float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

void main() {
  // snap to a full-resolution texel centre: at reduced resolution vUv sits on texel corners, where
  // nearest-filtered depth fetches of the neighbours would alias (row banding on the ground)
  vec2 uv0 = (floor(vUv / uTexel) + 0.5) * uTexel;
  float d0 = aoDepth(uv0);
  if (d0 >= 0.99999) { gl_FragColor = vec4(1.0); return; }
  float z = aoViewZ(uv0);
  vec3 P = aoViewPos(uv0, z);
  // normal: smallest depth step on each axis (robust at silhouettes)
  vec2 tx = vec2(uTexel.x, 0.0), ty = vec2(0.0, uTexel.y);
  float zr = aoViewZ(uv0 + tx), zl = aoViewZ(uv0 - tx), zu = aoViewZ(uv0 + ty), zd = aoViewZ(uv0 - ty);
  vec3 dx = abs(zr - z) < abs(z - zl) ? aoViewPos(uv0 + tx, zr) - P : P - aoViewPos(uv0 - tx, zl);
  vec3 dy = abs(zu - z) < abs(z - zd) ? aoViewPos(uv0 + ty, zu) - P : P - aoViewPos(uv0 - ty, zd);
  vec3 N = normalize(cross(dx, dy));
  float fade = 1.0 - smoothstep(uFadeDist * 0.6, uFadeDist, -z);
  float rPx = min(uRadius * uProjInfo.y * 0.5 * uFrameH / -z, uMaxPx);
  if (rPx < 1.5 || fade <= 0.0) { gl_FragColor = vec4(1.0); return; }
  float ang = ign(gl_FragCoord.xy) * 6.2831853;
  float occ = 0.0;
  float R2 = uRadius * uRadius;
  for (int i = 0; i < AO_SAMPLES; i++) {
    float t = (float(i) + 0.5) / float(AO_SAMPLES);
    float a = ang + float(i) * 2.3999632;
    vec2 off = vec2(cos(a), sin(a)) * (t * rPx) * uTexel;
    vec2 suv = (floor((uv0 + off) / uTexel) + 0.5) * uTexel;
    float sz = aoViewZ(suv);
    vec3 v = aoViewPos(suv, sz) - P;
    float vv = dot(v, v);
    // cosine-weighted horizon term with a small angle bias (kills flat-surface self-occlusion banding),
    // quadratic falloff to the world radius
    float cosT = dot(v, N) * inversesqrt(vv + 1e-4);
    occ += max(0.0, cosT - uBias) * max(0.0, 1.0 - vv / R2);
  }
  float ao = max(0.0, 1.0 - uIntensity * occ / float(AO_SAMPLES));
  ao = mix(1.0, ao, fade);
  gl_FragColor = vec4(ao, ao, ao, 1.0);
}
`,
  xh = `
${yh}
uniform sampler2D tAO;
uniform vec2 uAOTexel;
varying vec2 vUv;
void main() {
  float z0 = aoViewZ(vUv);
  float sum = 0.0, wsum = 0.0;
  for (int y = -1; y <= 1; y++)
    for (int x = -1; x <= 1; x++) {
      vec2 uv = vUv + vec2(float(x), float(y)) * uAOTexel;
      float w = 1.0 / (1.0 + abs(aoViewZ(uv) - z0) * 4.0 / max(1.0, -z0 * 0.05));
      sum += texture2D(tAO, uv).r * w;
      wsum += w;
    }
  float ao = sum / max(wsum, 1e-4);
  gl_FragColor = vec4(ao, ao, ao, 1.0);
}
`;
function Sh(e, t, n = 8) {
  class r extends e.Pass {
    aoTarget;
    blurTarget;
    aoMat;
    blurMat;
    quad;
    quadScene = new s();
    quadCam = new A(-1, 1, 1, -1, 0, 1);
    fullH = 1;
    cam;
    constructor(e, t = 8) {
      (super(`TaipeiAO`),
        (this.cam = e),
        (this.needsSwap = !1),
        (this.needsDepthTexture = !0));
      let n = {
        depthBuffer: !1,
        type: _,
        format: B,
        minFilter: ge,
        magFilter: ge,
      };
      ((this.aoTarget = new be(1, 1, n)),
        (this.blurTarget = new be(1, 1, n)),
        (this.aoTarget.texture.name = `TaipeiAO.raw`),
        (this.blurTarget.texture.name = `TaipeiAO`));
      let r = { value: new de(1, 1, 0.3, 900) };
      ((this.aoMat = new E({
        name: `env-ao`,
        defines: { AO_SAMPLES: t },
        uniforms: {
          tDepth: { value: null },
          uProjInfo: r,
          uTexel: { value: new ve(1, 1) },
          uRadius: { value: 1.8 },
          uIntensity: { value: 2.8 },
          uBias: { value: 0.12 },
          uMaxPx: { value: 90 },
          uFadeDist: { value: 220 },
          uFrameH: { value: 720 },
        },
        vertexShader: vh,
        fragmentShader: bh,
        depthTest: !1,
        depthWrite: !1,
      })),
        (this.blurMat = new E({
          name: `env-ao-blur`,
          uniforms: {
            tDepth: this.aoMat.uniforms.tDepth,
            uProjInfo: r,
            tAO: { value: this.aoTarget.texture },
            uAOTexel: { value: new ve(1, 1) },
          },
          vertexShader: vh,
          fragmentShader: xh,
          depthTest: !1,
          depthWrite: !1,
        })));
      let i = new V();
      (i.setAttribute(
        `position`,
        new H(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3),
      ),
        (this.quad = new M(i, this.aoMat)),
        (this.quad.frustumCulled = !1),
        this.quadScene.add(this.quad));
    }
    get texture() {
      return this.blurTarget.texture;
    }
    get uniforms() {
      return this.aoMat.uniforms;
    }
    setDepthTexture(e) {
      this.aoMat.uniforms.tDepth.value = e;
    }
    render(e) {
      if (!this.aoMat.uniforms.tDepth.value) return;
      let t = this.cam,
        n = t.projectionMatrix.elements;
      this.aoMat.uniforms.uProjInfo.value.set(n[0], n[5], t.near, t.far);
      let r = e.getRenderTarget();
      ((this.quad.material = this.aoMat),
        e.setRenderTarget(this.aoTarget),
        e.render(this.quadScene, this.quadCam),
        (this.quad.material = this.blurMat),
        e.setRenderTarget(this.blurTarget),
        e.render(this.quadScene, this.quadCam),
        e.setRenderTarget(r));
    }
    resize(e, t, n) {
      let r = Math.max(1, Math.ceil(e / n)),
        i = Math.max(1, Math.ceil(t / n));
      (this.aoTarget.setSize(r, i),
        this.blurTarget.setSize(r, i),
        (this.fullH = t),
        this.aoMat.uniforms.uTexel.value.set(1 / e, 1 / t),
        (this.aoMat.uniforms.uFrameH.value = t),
        (this.aoMat.uniforms.uMaxPx.value = Math.min(120, t * 0.09)),
        this.blurMat.uniforms.uAOTexel.value.set(1 / r, 1 / i));
    }
    setSize(e, t) {
      this.resize(e, t, this.divisor());
    }
    divisor = () => 2;
    dispose() {
      (this.aoTarget.dispose(),
        this.blurTarget.dispose(),
        this.aoMat.dispose(),
        this.blurMat.dispose(),
        super.dispose());
    }
    get frameHeight() {
      return this.fullH;
    }
  }
  return new r(t, n);
}
var Ch = null;
function wh() {
  return (
    Ch ||
      ((Ch = t(
        () => import(`./postfx-BzHvx3aB.js`).then((e) => e.t),
        __vite__mapDeps([0, 1, 2]),
      )),
      Ch.catch(() => {
        Ch = null;
      })),
    Ch
  );
}
var Th = `
uniform float uExposure;
uniform vec3 uLift;
uniform vec3 uGain;
uniform float uSat;
uniform float uContrast;
uniform float uToe;
uniform float uVignette;
uniform float uGrain;
uniform float uGTime;
uniform vec3 uShadowTint;
uniform vec3 uHighTint;
#ifdef USE_AO
uniform sampler2D tAO;
uniform float uAOAmount;
uniform float uAODebug;
#endif

vec3 gRRT(vec3 v) {
  vec3 a = v * (v + 0.0245786) - 0.000090537;
  vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
  return a / b;
}
vec3 gACES(vec3 color) {
  const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
  const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
  color = IN * color;
  color = gRRT(color);
  color = OUT * color;
  return clamp(color, 0.0, 1.0);
}
float gHash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // NaN / Inf guard: a non-finite scene pixel came out of ACES as NaN = a BLACK pixel (a black block once bloom spread
  // it). NaN is rejected by its bits (exponent all ones + mantissa ≠ 0): min / max with a NaN operand are undefined in
  // GLSL ES (ANGLE-Vulkan / Android GL may return the NaN) and fast-math may fold x != x away — an integer test can't
  // be. ±Inf then clamps like any value (well-defined); ACES saturates far below 1e4 → invisible
  vec3 hdr = inputColor.rgb;
  if (any(greaterThan(floatBitsToUint(hdr) & uvec3(0x7fffffffu), uvec3(0x7f800000u)))) hdr = vec3(0.0);
  hdr = min(max(hdr, vec3(0.0)), vec3(1e4));
  #ifdef USE_AO
  {
    // ambient occlusion on the HDR colour; emissive / very bright pixels (neon, lamps, sky glints) are spared
    float ao = texture2D(tAO, uv).r;
    float lin = dot(hdr, vec3(0.2126, 0.7152, 0.0722)) * uExposure;
    ao = mix(ao, 1.0, smoothstep(0.6, 2.4, lin));
    hdr *= mix(1.0, ao, uAOAmount);
    if (uAODebug > 0.5) { outputColor = vec4(vec3(texture2D(tAO, uv).r), 1.0); return; }
  }
  #endif
  vec3 c = gACES(hdr * (uExposure / 0.6));
  c = pow(c, vec3(1.0 / 2.2));
  c = c * uGain + uLift * (1.0 - c);
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  // split toning: tint shadows and highlights separately (film-like colour separation instead of a flat CG grade)
  c *= mix(uShadowTint, uHighTint, smoothstep(0.08, 0.75, l));
  l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(vec3(l), c, uSat);
  // contrast around mid-grey; at night the toe is protected (uToe): the pivot curve would otherwise crush
  // everything below ~sRGB 12 to black — unlit asphalt, lawns and shadowed walls must stay dimly readable
  vec3 cc = (c - 0.5) * uContrast + 0.5;
  c = mix(cc, mix(c, cc, smoothstep(0.03, 0.3, c)), uToe);
  vec2 d = uv - 0.5;
  c *= 1.0 - dot(d, d) * uVignette;
  float n = gHash(uv * 1733.0 + fract(uGTime) * 97.0) + gHash(uv * 917.0 - fract(uGTime * 1.37) * 53.0) - 1.0;
  c += n * uGrain + (gHash(uv * 3113.0 + uGTime) - 0.5) / 255.0;
  c = pow(max(c, vec3(0.0)), vec3(2.2));
  outputColor = vec4(c, inputColor.a);
}
`,
  Eh = `
uniform sampler2D inputBuffer;
uniform float threshold;
uniform float smoothing;
varying vec2 vUv;
varying vec2 vUv00; varying vec2 vUv01; varying vec2 vUv02; varying vec2 vUv03;
varying vec2 vUv04; varying vec2 vUv05; varying vec2 vUv06; varying vec2 vUv07;
varying vec2 vUv08; varying vec2 vUv09; varying vec2 vUv10; varying vec2 vUv11;
float cb(const in vec2 uv) { return float(uv.s >= 0.0 && uv.s <= 1.0 && uv.t >= 0.0 && uv.t <= 1.0); }
vec4 pf(const in vec2 uv) {
  // firefly / Inf / NaN clamp: one non-finite scene pixel poisoned a whole 8×8 (then 16, 32…) block of the mip chain
  // — black squares around bright highlights at night. 256 is far above any lamp / neon / sign emission.
  vec4 t = texture2D(inputBuffer, uv);
  // NaN → 0 by its bits, THEN the clamp (portable: min / max with a NaN operand are undefined in GLSL ES — ANGLE's
  // Vulkan / GL backends on Android make no promise — while ±Inf clamps like any value)
  if (any(greaterThan(floatBitsToUint(t) & uvec4(0x7fffffffu), uvec4(0x7f800000u)))) return vec4(0.0);
  t = min(max(t, vec4(0.0)), vec4(256.0));
  float l = dot(t.rgb, vec3(0.2126, 0.7152, 0.0722));
  return t * (smoothstep(threshold, threshold + smoothing, l) * cb(uv));
}
void main() {
  vec4 c = 0.125 * (pf(vUv00) + pf(vUv01) + pf(vUv02) + pf(vUv03));
  c += 0.05556 * (pf(vUv04) + pf(vUv05) + pf(vUv06) + pf(vUv07) + pf(vUv08) + pf(vUv09) + pf(vUv10) + pf(vUv11) + pf(vUv));
  gl_FragColor = c;
  #include <colorspace_fragment>
}
`;
function Dh(e) {
  let t = e.mipmapBlurPass,
    n = e.luminanceMaterial,
    r = new E({
      name: `env-bloom-prefilter`,
      uniforms: {
        inputBuffer: new y(null),
        texelSize: new y(new ve()),
        threshold: n.uniforms.threshold,
        smoothing: n.uniforms.smoothing,
      },
      blending: 0,
      toneMapped: !1,
      depthWrite: !1,
      depthTest: !1,
      vertexShader: t.downsamplingMaterial.vertexShader,
      fragmentShader: Eh,
    });
  return (
    (e.luminancePass.enabled = !1),
    (t.render = function (e, t) {
      let {
          scene: n,
          camera: i,
          downsamplingMaterial: a,
          upsamplingMaterial: o,
          downsamplingMipmaps: s,
          upsamplingMipmaps: c,
        } = this,
        l = s[0];
      ((this.fullscreenMaterial = r),
        (r.uniforms.inputBuffer.value = t.texture),
        r.uniforms.texelSize.value.set(
          0.5 / Math.max(1, l.width),
          0.5 / Math.max(1, l.height),
        ),
        e.setRenderTarget(l),
        e.render(n, i));
      let u = l;
      this.fullscreenMaterial = a;
      for (let t = 1; t < s.length; t++) {
        let r = s[t];
        (a.setSize(u.width, u.height),
          (a.inputBuffer = u.texture),
          e.setRenderTarget(r),
          e.render(n, i),
          (u = r));
      }
      this.fullscreenMaterial = o;
      for (let t = c.length - 1; t >= 0; --t) {
        let r = c[t];
        (o.setSize(u.width, u.height),
          (o.inputBuffer = u.texture),
          (o.supportBuffer = s[t].texture),
          e.setRenderTarget(r),
          e.render(n, i),
          (u = r));
      }
    }),
    r
  );
}
function Oh(e) {
  class t extends e.Effect {
    constructor() {
      super(`TaipeiGrade`, Th, {
        blendFunction: e.BlendFunction.SRC,
        uniforms: new Map([
          [`uExposure`, new y(1)],
          [`uLift`, new y(new U(0, 0, 0))],
          [`uGain`, new y(new U(1, 1, 1))],
          [`uSat`, new y(1.05)],
          [`uContrast`, new y(1.04)],
          [`uToe`, new y(0)],
          [`uVignette`, new y(0.55)],
          [`uGrain`, new y(0.012)],
          [`uGTime`, new y(0)],
          [`uShadowTint`, new y(new U(1, 1, 1))],
          [`uHighTint`, new y(new U(1, 1, 1))],
          [`tAO`, new y(null)],
          [`uAOAmount`, new y(1)],
          [`uAODebug`, new y(0)],
        ]),
      });
    }
    setAO(e) {
      (this.defines.set(`USE_AO`, `1`), (this.u(`tAO`).value = e));
    }
    u(e) {
      return this.uniforms.get(e);
    }
  }
  return new t();
}
function kh(e) {
  let t = e.extensions,
    n = t.has(`EXT_color_buffer_float`);
  return { half: n || t.has(`EXT_color_buffer_half_float`), r11: n };
}
function Ah(e, t) {
  let n = e.getContext(),
    r = e.getRenderTarget(),
    i = !0;
  try {
    for (let r of t)
      if (
        r &&
        (e.setRenderTarget(r),
        n.checkFramebufferStatus(n.FRAMEBUFFER) !== n.FRAMEBUFFER_COMPLETE)
      ) {
        i = !1;
        break;
      }
  } catch {
    i = !1;
  } finally {
    e.setRenderTarget(r);
  }
  return i;
}
async function jh(e, t, n, r) {
  let i = await wh(),
    a = kh(e);
  if (!a.half)
    throw Error(
      `no renderable float colour buffer (EXT_color_buffer_half_float / EXT_color_buffer_float)`,
    );
  let o = r.frameFormat ?? `r11`;
  o === `r11` && !a.r11 && (o = `16f`);
  let s = Mh(i, e, t, n, r, o);
  if (!Ah(e, s.targets)) {
    if ((s.fx.dispose(), o === `16f`))
      throw Error(`post-processing targets are not renderable`);
    if (
      (console.warn(
        `[environment] R11F_G11F_B10F scene target incomplete — using RGBA16F`,
      ),
      (s = Mh(i, e, t, n, r, `16f`)),
      !Ah(e, s.targets))
    )
      throw (
        s.fx.dispose(),
        Error(`post-processing targets are not renderable`)
      );
  }
  return s;
}
function Mh(e, t, n, r, i, a) {
  let {
      BloomEffect: o,
      EffectComposer: s,
      EffectPass: c,
      RenderPass: l,
      SMAAEffect: d,
      SMAAPreset: f,
    } = e,
    p = new s(t, { frameBufferType: L, multisampling: 0 });
  p.addPass(new l(n, r));
  let m = null;
  i.aoSamples &&
    r.isPerspectiveCamera &&
    ((m = Sh(e, r, i.aoSamples)),
    (m.divisor = () => (t.getPixelRatio() >= 1.5 ? 4 : 2)),
    (m.needsDepthTexture = !1),
    p.addPass(m));
  let h = [],
    g = null;
  if (i.smaa && i.aa === `fxaa`) h.push(new e.FXAAEffect());
  else if (i.smaa) {
    g = new d({
      preset:
        i.smaaPreset === `high`
          ? f.HIGH
          : i.smaaPreset === `medium`
            ? f.MEDIUM
            : f.LOW,
    });
    let e = g.renderTargetEdges;
    ((e.texture.format = ce), e.dispose(), h.push(g));
  }
  let _ = null,
    v = {};
  if (i.bloom) {
    ((_ = new o({
      mipmapBlur: !0,
      luminanceThreshold: 1,
      luminanceSmoothing: 0.3,
      intensity: 0.8,
      radius: 0.72,
      levels: Math.max(2, Math.min(5, i.bloomLevels ?? 3)),
    })),
      Dh(_));
    let e = _,
      t = e.setSize.bind(e);
    e.setSize = (e, n) => {
      t(Math.max(1, Math.ceil(e / 4)), Math.max(1, Math.ceil(n / 4)));
    };
    let n = e.update.bind(e),
      r = !0;
    ((e.update = (t, i, a) => {
      if (v.bloomActive) (n(t, i, a), (r = !0));
      else if (r) {
        r = !1;
        let n = e.mipmapBlurPass.upsamplingMipmaps[0],
          i = t.getRenderTarget();
        (t.setRenderTarget(n), t.clear(!0, !1, !1), t.setRenderTarget(i));
      }
    }),
      h.push(_));
  }
  let y = Oh(e);
  (m && y.setAO(m.texture),
    i.vignette || ((y.u(`uVignette`).value = 0), (y.u(`uGrain`).value = 0)),
    h.push(y));
  let b = new c(r, ...h);
  if ((p.addPass(b), a === `r11`))
    for (let e of [p.inputBuffer, p.outputBuffer])
      ((e.texture.type = ne), (e.texture.format = he), e.dispose());
  let x = p,
    S = t.state.buffers.depth.getReversed();
  if (m || x.depthRenderTarget || S) {
    x.deleteDepthTexture();
    let e = new u(1, 1);
    ((e.type = F),
      (e.name = `EffectComposer.InputDepth`),
      (p.inputBuffer.depthTexture = e),
      p.inputBuffer.dispose(),
      m?.setDepthTexture(e),
      b.setDepthTexture(e));
  }
  let C = t.getSize(new ve());
  p.setSize(C.x, C.y, !1);
  let w = [p.inputBuffer],
    T = _ ? _.mipmapBlurPass?.downsamplingMipmaps : void 0;
  return (
    T?.[0] && w.push(T[0]),
    g && w.push(g.renderTargetEdges),
    Object.assign(v, {
      fx: {
        render(e) {
          p.render(e);
        },
        setSize(e, t) {
          p.setSize(e, t, !1);
        },
        dispose() {
          p.dispose();
        },
      },
      bloom: _,
      grade: y,
      smaa: g,
      composer: p,
      ao: m,
      bloomActive: !0,
      frameFormat: a,
      targets: w,
    }),
    v
  );
}
var Nh = [
  [0.62, 0.25, 1],
  [1, 0.16, 0.14],
  [1, 0.5, 0.1],
  [1, 0.85, 0.15],
  [0.25, 1, 0.35],
  [0.2, 0.55, 1],
  [0.38, 0.28, 1],
];
function Ph(e, t, n, r = [], i = (e, n) => t.hillHeight(e, n), a) {
  for (let t = 0; t < r.length; t++) {
    let n = r[t],
      i = (n.x1 - n.x0) / 2,
      a = (n.y1 - n.y0) / 2,
      o = (n.z1 - n.z0) / 2;
    (e.setOwnerBox(
      (n.x0 + n.x1) / 2,
      (n.y0 + n.y1) / 2,
      (n.z0 + n.z1) / 2,
      i,
      a,
      o,
    ),
      e.setColor(n.r, n.g, n.b).setEmit(0, 0, n.seed));
    let s = Ap(t, 1);
    (e.boxMinMax(
      n.x0 + s.inset,
      n.y0,
      n.z0 + s.inset,
      n.x1 - s.inset,
      n.y1 + s.dh,
      n.z1 - s.inset,
      55,
    ),
      e.noEmit());
  }
  let o = [
      [0.66, 0.64, 0.6],
      [0.72, 0.7, 0.64],
      [0.58, 0.58, 0.57],
      [0.62, 0.6, 0.55],
      [0.5, 0.54, 0.56],
      [0.68, 0.62, 0.57],
    ],
    s = a ? a(e, i) : 0;
  for (let n of a ? [] : t.blocks) {
    let r = new Oe(je(t.dataset.seed, `lod`, n.id)),
      i = n.district.style;
    if (i.floors[1] <= 0) continue;
    let a = n.maxX - n.minX,
      c = n.maxZ - n.minZ,
      l = Math.max(1, Math.round(a / 24)),
      u = Math.max(1, Math.round(c / 24)),
      d = a / l,
      f = c / u;
    for (let a = 0; a < l; a++)
      for (let c = 0; c < u; c++) {
        let p = n.minX + d * (a + 0.5),
          m = n.minZ + f * (c + 0.5);
        if (
          n.reserved.some(
            (e) =>
              Math.abs(p - e.x) < e.w / 2 + 4 &&
              Math.abs(m - e.z) < e.d / 2 + 4,
          )
        )
          continue;
        let h = a > 0 && a < l - 1 && c > 0 && c < u - 1,
          g = r.int(i.floors[0], i.floors[1]);
        (r.chance(i.towers * 0.5) && (g = Math.round(g * r.range(1.4, 2.6))),
          h && (g = Math.max(2, Math.round(g * 0.6))));
        let _ = Math.max(7, g * 3.3),
          v = o[r.int(0, o.length - 1)],
          y = 0.9 + r.next() * 0.2,
          b = g > 18 && r.chance(0.6),
          x = d * r.range(0.78, 0.94),
          S = f * r.range(0.78, 0.94),
          C = t.terrainLift(p, m);
        (e.setOwnerBox(p, C + 0.1 + _ / 2, m, x / 2, _ / 2, S / 2),
          b
            ? e.setColor(0.36 * y, 0.43 * y, 0.47 * y)
            : e.setColor(v[0] * y, v[1] * y, v[2] * y),
          e.setEmit(0, 0, 1 + r.int(0, 998)));
        let w = Ap(s, 2);
        if (
          (e.box(
            p,
            C + 0.1,
            m,
            x - 2 * w.inset,
            _ + w.dh,
            S - 2 * w.inset,
            0,
            55,
          ),
          e.noEmit(),
          !h && r.chance(i.neon * 0.25))
        ) {
          let t = [
            [1, 0.25, 0.45],
            [0.3, 0.9, 1],
            [1, 0.75, 0.25],
            [0.5, 1, 0.4],
          ][r.int(0, 3)];
          (e.setColor(t[0], t[1], t[2]).setEmit(2.2, 0),
            e.box(
              p,
              C + _ * r.range(0.35, 0.8),
              m,
              d * 0.3,
              2.5,
              f * 0.3,
              0,
              51,
            ),
            e.noEmit());
        }
        s++;
      }
  }
  for (let r of t.landmarks) {
    if (n.has(r.id) || r.zone || r.kind === `park` || r.kind === `market`)
      continue;
    if (r.id === `taipei101`) {
      (e.setOwnerBox(r.x, 255, r.z - 8, 48, 256, 56), Lh(e, r.x, r.z));
      continue;
    }
    if (r.id === `grand-hotel`) {
      let t = i(r.x, r.z);
      (e.setOwnerBox(r.x, t + 26, r.z, 52, 32, 20), Rh(e, r.x, r.z, t));
      continue;
    }
    if (r.id === `sunyatsen`) {
      (e.setOwnerBox(r.x, 16, r.z, r.w * 0.4, 16.2, r.d * 0.4),
        Fh(e, r.x, r.z, r.w, r.d));
      continue;
    }
    if (r.id === `taipei-dome`) {
      (e.setOwnerBox(r.x, 17, r.z, r.w * 0.48, 17.2, r.d * 0.48),
        Ih(e, r.x, r.z, Math.min(r.w, r.d) * 0.46));
      continue;
    }
    let a =
        {
          cityhall: 45,
          "xinyi-mall": 55,
          presidential: 26,
          cks: 42,
          "main-station": 32,
          "ntu-hospital": 36,
          "police-hq": 30,
          sogo: 48,
          arena: 30,
          redhouse: 12,
          bopiliao: 9,
          longshan: 16,
          xingtian: 16,
          "ciyou-temple": 16,
          dihua: 12,
        }[r.id] ?? 20,
      o = r.kind === `temple`,
      s = r.id === `presidential` ? 60 : a + (r.id === `cks` ? 22 : 0),
      c = t.terrainLift(r.x, r.z);
    (e.setOwnerBox(r.x, c + s / 2, r.z, r.w * 0.31, s / 2 + 0.2, r.d * 0.31),
      e
        .setColor(o ? 0.62 : 0.7, o ? 0.2 : 0.68, o ? 0.14 : 0.64)
        .setEmit(0, 0, o ? 0 : 555),
      e.box(r.x, c + 0.1, r.z, r.w * 0.62, a, r.d * 0.62),
      e.noEmit(),
      r.id === `presidential` &&
        (e.setColor(0.62, 0.3, 0.22), e.box(r.x, 0.1, r.z, 12, 60, 12)),
      r.id === `cks` &&
        (e.setColor(0.18, 0.3, 0.62),
        e.frustum(r.x, a, r.z, r.w * 0.5, r.d * 0.5, 6, 6, 22)));
  }
  return s;
}
function Fh(e, t, n, r, i) {
  let a = r * 0.36,
    o = i * 0.36;
  (e.setColor(0.72, 0.7, 0.66),
    e.box(t, 0.1, n, a * 2 + 10, 1.6, o * 2 + 10),
    e.setColor(0.86, 0.82, 0.72).setEmit(0, 0, 0),
    e.box(t, 1.7, n, a * 2, 12, o * 2),
    e.setColor(0.35, 0.3, 0.26),
    e.box(t, 1.7, n + o + 0.2, a * 1.2, 9, 0.6, 0, 16),
    e.setColor(0.86, 0.62, 0.14).setEmit(0.18, 0),
    e.frustum(t, 13.7, n, a * 2 + 12, o * 2 + 12, a * 2 + 6, o * 2 + 6, 1.6),
    e.frustum(t, 15.3, n, a * 2 + 6, o * 2 + 6, a * 0.9, o * 0.35, 10),
    e.setColor(0.8, 0.54, 0.1),
    e.box(t, 25.3, n, a * 0.9, 2.2, 3),
    e.frustum(t - a * 0.45, 25.3, n, 3, 3, 1, 1, 5.5, !0),
    e.frustum(t + a * 0.45, 25.3, n, 3, 3, 1, 1, 5.5, !0),
    e.noEmit());
}
function Ih(e, t, n, r) {
  (e.setColor(0.55, 0.56, 0.57), e.cyl(t, 0.1, n, r * 1.02, 6, 20, !1));
  let i = [
    [0, 1],
    [0.28, 0.97],
    [0.52, 0.88],
    [0.72, 0.72],
    [0.87, 0.5],
    [0.97, 0.24],
  ];
  for (let a = 0; a + 1 < i.length; a++) {
    let [o, s] = i[a],
      [c, l] = i[a + 1],
      u = 0.84 + 0.04 * a;
    (e.setColor(u, u + 0.01, u + 0.02).setEmit(0.05 * a, 0),
      e.cyl(
        t,
        6 + o * 24,
        n,
        r * s,
        (c - o) * 24,
        20,
        a + 2 === i.length,
        r * l,
      ));
  }
  e.noEmit();
}
function Lh(e, t, n) {
  let r = Nh[new Date().getDay()];
  (e.setColor(0.6, 0.62, 0.6), e.box(t, 0.1, n - 38, 96, 30, 34, 0, 55));
  let i = () => e.setColor(0.2, 0.31, 0.3).setEmit(0, 0, 101);
  (i(), e.frustum(t, 0.1, n, 64, 64, 52, 52, 92));
  let a = 92;
  for (let o = 0; o < 8; o++)
    (i(),
      e.frustum(t, a, n, 42, 42, 54, 54, 33),
      e.noEmit(),
      e.setColor(r[0], r[1], r[2]).setEmit(3.2, 0),
      e.box(t, a + 31.5, n, 54.6, 1.2, 54.6, 0, 51),
      e.noEmit(),
      (a += 33));
  (i(),
    e.frustum(t, a, n, 38, 38, 28, 28, 22),
    e.frustum(t, a + 22, n, 24, 24, 16, 16, 18),
    e.frustum(t, a + 40, n, 14, 14, 9, 9, 22),
    e.noEmit(),
    e.setColor(0.7, 0.72, 0.72),
    e.frustum(t, a + 62, n, 5, 5, 1.2, 1.2, 63),
    e.setColor(1, 0.95, 0.85).setEmit(5, 0),
    e.box(t, a + 60, n, 9.4, 1.2, 9.4, 0, 51),
    e.setColor(1, 0.15, 0.1).setEmit(10, 2, 11),
    e.box(t, a + 124, n, 1.4, 1.4, 1.4),
    e.noEmit());
}
function Rh(e, t, n, r) {
  (e.setColor(0.6, 0.1, 0.07).setEmit(0.25, 0, 0),
    e.box(t, r - 4, n, 96, 38, 30),
    e.setColor(0.92, 0.88, 0.8).setEmit(0.2, 0));
  for (let i = 0; i < 12; i++)
    e.box(t - 48 + 4 + i * 8, r, n + 15 + 0.2, 1.6, 32, 0.6);
  (e.noEmit(),
    e.setColor(0.85, 0.55, 0.12).setEmit(0.3, 0),
    e.frustum(t, r + 34, n, 102, 38, 69.12, 4, 14),
    e.setColor(0.72, 0.1, 0.08),
    e.box(t, r + 34 + 14, n, 69.12, 1.4, 4),
    e.noEmit(),
    e.setColor(0.6, 0.1, 0.07),
    e.box(t, r + 34, n, 20, 10, 21),
    e.setColor(0.85, 0.55, 0.12).setEmit(0.3, 0),
    e.frustum(t, r + 34 + 10, n, 26, 24, 6, 2, 10),
    e.noEmit());
}
var zh = 1001,
  Bh = 1002,
  Vh = 1003,
  Hh = Me.maxX + 210,
  Uh = Me.maxZ + 200,
  Wh = Hh - 9,
  Gh = Uh - 9,
  Kh = [
    [0.54, 0.52, 0.48],
    [0.5, 0.48, 0.44],
    [0.56, 0.5, 0.44],
    [0.46, 0.48, 0.47],
    [0.52, 0.5, 0.42],
    [0.43, 0.41, 0.39],
    [0.6, 0.58, 0.54],
    [0.44, 0.5, 0.45],
    [0.58, 0.47, 0.4],
  ],
  qh = [
    [0.6, 0.58, 0.54],
    [0.66, 0.62, 0.55],
    [0.52, 0.54, 0.55],
    [0.72, 0.71, 0.67],
    [0.42, 0.47, 0.5],
    [0.36, 0.42, 0.46],
    [0.55, 0.56, 0.52],
  ],
  Jh = [
    [1, 0.25, 0.4],
    [0.25, 0.85, 1],
    [1, 0.6, 0.15],
    [0.45, 1, 0.5],
    [1, 0.9, 0.35],
    [0.9, 0.9, 1],
  ];
async function Yh(e, t, n, r, i, a = async () => {}) {
  let o = n.bounds,
    s = new Oe(973285),
    c = [],
    l = [];
  e.mainOnly(!0);
  let u = [],
    d = [],
    f = new xe(new U(o.maxX, -10, o.maxZ), new U(o.maxX, 400, o.maxZ)),
    p = 0,
    m = (e, n) => t.height(e, n),
    h = qe,
    g = (e) => {
      let t = 1 / 0,
        n = -1 / 0;
      for (let r = 0; r <= 2; r++)
        for (let i = 0; i <= 2; i++) {
          let a = m(
            e.x0 + ((e.x1 - e.x0) * r) / 2,
            e.z0 + ((e.z1 - e.z0) * i) / 2,
          );
          ((t = Math.min(t, a)), (n = Math.max(n, a)));
        }
      return [t, n];
    },
    _ = (e, t) => e < Hh && t < Uh,
    v = (e) => {
      (f.expandByPoint(new U(e.x0, 0, e.z0)),
        f.expandByPoint(new U(e.x1, 0, e.z1)));
    },
    y = (e, t, n, i, a, o, s = `building`) => {
      r &&
        _((e + n) / 2, (t + i) / 2) &&
        r.addBox(
          Math.min(e, n),
          Math.min(t, i),
          Math.max(e, n),
          Math.max(t, i),
          a,
          o,
          s,
        );
    },
    b = (e, t, n, r, i) => {
      let a = Math.sign(r - n),
        o = n,
        s = m(e === `x` ? n : t, e === `x` ? t : n);
      for (let c = n; a > 0 ? c <= r : c >= r; c += a * 6) {
        let n = m(e === `x` ? c : t, e === `x` ? t : c);
        if (n - h > i || n < h - 1.5 || Math.abs(n - s) > 0.66) break;
        ((s = n), (o = c));
      }
      return o;
    },
    x = (t) => {
      let { axis: n, at: a, halfWidth: o, halfTotal: l } = t,
        u = Math.min(t.from, t.to),
        f = Math.max(t.from, t.to);
      if (f - u < 4) return;
      let p = (e, t) => (n === `x` ? [e, a + t] : [a + t, e]),
        g = (e) => {
          let [t, n] = p(e, 0);
          return Math.max(m(t, n), h - 0.4) + 0.012;
        },
        b = (t, r, i, a, o, s) => {
          let [c, l] = p(t, i),
            [u, d] = p(r, i),
            [f, m] = p(r, a),
            [h, g] = p(t, a);
          n === `x`
            ? e.quad(h, o, g, f, s, m, u, s, d, c, o, l)
            : e.quad(c, o, l, u, s, d, f, s, m, h, o, g);
        },
        x = (t, r, i, a, o, s, c) => {
          let [l, u] = p(t, i),
            [d, f] = p(r, i);
          (n === `x` ? 1 : -1) * c < 0
            ? e.quad(d, o, f, l, a, u, l, a + s, u, d, o + s, f)
            : e.quad(l, a, u, d, o, f, d, o + s, f, l, a + s, u);
        },
        S = t.walk ? 12 : 30;
      for (let i = u; i < f - 0.01; i += S) {
        let a = Math.min(f, i + S),
          c = g(i),
          u = g(a),
          d = Math.abs(u - c) < 0.08,
          m = 0.95 + 0.1 * s.next();
        if (
          (e.setColor(0.17 * m, 0.17 * m, 0.175 * m).setEmit(0, 0, Bh),
          b(i, a, -o, o, c, u),
          e.noEmit(),
          e.detail(!0),
          e.setColor(0.78, 0.78, 0.74),
          b(i, a, -o + 0.3, -o + 0.45, c + 0.004, u + 0.004),
          b(i, a, o - 0.45, o - 0.3, c + 0.004, u + 0.004),
          t.median >= 2.5)
        ) {
          let r = t.median / 2;
          if (
            (e.setColor(0.55, 0.54, 0.5),
            x(i, a, r, c, u, 0.22, 1),
            x(i, a, -r, c, u, 0.22, -1),
            e.detail(!1),
            e.setColor(0.2, 0.3, 0.12),
            b(i, a, -r, r, c + 0.22, u + 0.22),
            t.walk && Math.round(i / S) % 2 == 0)
          ) {
            let [r, o] = p((i + a) / 2, 0);
            (e.detail(!0),
              e.setColor(0.13, 0.24, 0.08),
              e.box(
                r,
                (c + u) / 2 + 0.2,
                o,
                n === `x` ? 3 : t.median * 0.6,
                0.9,
                n === `x` ? t.median * 0.6 : 3,
              ));
          }
          let [o, s] = p(i, -r),
            [l, d] = p(a, r);
          y(
            Math.min(o, l),
            Math.min(s, d),
            Math.max(o, l),
            Math.max(s, d),
            Math.min(c, u),
            Math.max(c, u) + 0.4,
            `curb`,
          );
        } else
          (e.setColor(0.85, 0.66, 0.12),
            b(i, a, -0.25, -0.12, c + 0.004, u + 0.004),
            b(i, a, 0.12, 0.25, c + 0.004, u + 0.004));
        e.detail(!0);
        let h = Math.max(t.median / 2, 0.25);
        for (let n = 1; n < t.lanes; n++) {
          let r = h + n * ((o - h) / t.lanes),
            s = i + 1,
            l = Math.min(a, i + 5),
            d = c + ((u - c) * (s - i)) / (a - i) + 0.004,
            f = c + ((u - c) * (l - i)) / (a - i) + 0.004;
          e.setColor(0.8, 0.8, 0.76);
          for (let e of [-1, 1]) b(s, l, e * r - 0.07, e * r + 0.07, d, f);
        }
        let v = d ? 0.14 : 0.03;
        for (let n of [-1, 1]) {
          let s = n > 0 ? o : -l,
            f = n > 0 ? l : -o;
          (e.detail(!0),
            e.setColor(0.52, 0.5, 0.47),
            x(
              i,
              a,
              n > 0 ? o : -o,
              c - 0.05,
              u - 0.05,
              v + 0.05,
              n > 0 ? -1 : 1,
            ),
            e.detail(!1),
            e
              .setColor(
                0.6 + 0.04 * ((Math.round(i / S) + n + 2) % 2),
                0.57,
                0.53,
              )
              .setEmit(0, 0, zh),
            b(i, a, s, f, c + v, u + v),
            e.noEmit());
          let [m, h] = p(i, s),
            [g, y] = p(a, f);
          r &&
            t.walk &&
            d &&
            _((m + g) / 2, (h + y) / 2) &&
            r.addFloorRect(
              Math.min(m, g),
              Math.min(h, y),
              Math.max(m, g),
              Math.max(h, y),
              Math.max(c, u) + v,
              `sidewalk`,
            );
        }
      }
      e.detail(!0);
      let C = t.major ? 28 : 34,
        w = 0;
      for (let n = u + 10; n < f - 6; n += C, w++)
        for (let a of t.major ? [-1, 1] : [w % 2 ? 1 : -1]) {
          let s = n + (a > 0 ? C / 2 : 0);
          if (s > f - 4) continue;
          let [c, l] = p(s, a * (o + 0.6)),
            [u, d] = p(s, a * (o - 1.8)),
            m = g(s) + 0.1;
          t.walk && _(c, l)
            ? (e.setColor(0.36, 0.38, 0.38),
              e.boxMinMax(c - 0.1, m, l - 0.1, c + 0.1, m + 8.2, l + 0.1),
              e.beam(c, m + 8.1, l, u, m + 8.4, d, 0.12, 0.12),
              e.setColor(0.22, 0.23, 0.24),
              e.boxMinMax(
                u - 0.35,
                m + 8.25,
                d - 0.35,
                u + 0.35,
                m + 8.45,
                d + 0.35,
              ),
              e.setColor(1, 0.9, 0.74).setEmit(5, 0),
              e.boxMinMax(
                u - 0.28,
                m + 8.19,
                d - 0.28,
                u + 0.28,
                m + 8.25,
                d + 0.28,
                11,
              ),
              e.noEmit(),
              r?.addCircle(c, l, 0.14, m, m + 8.3, `pole`),
              i?.add(u, m - 0.06, d, 12, 1, 0.86, 0.66, 0.42))
            : (e.setColor(1, 0.86, 0.66).setEmit(5, 0),
              e.boxMinMax(
                u - 0.3,
                m + 8,
                d - 0.3,
                u + 0.3,
                m + 8.3,
                d + 0.3,
                15,
              ),
              e.noEmit());
        }
      e.detail(!1);
      for (let e = u; e < f - 1; e += 60) {
        let r = Math.min(f, e + 60);
        c.push({
          axis: n,
          at: a,
          from: e,
          to: r,
          halfWidth: o,
          lanesPerDir: r - e > 50 ? t.lanes : 1,
          median: t.median,
          major: t.major,
          y: (g(e) + g(r)) / 2,
          always: !0,
        });
      }
      let [T, E] = p(u, -l),
        [D, O] = p(f, l),
        k = {
          x0: Math.min(T, D),
          z0: Math.min(E, O),
          x1: Math.max(T, D),
          z1: Math.max(E, O),
        };
      (d.push(k), v(k));
    },
    S = (t, n, r, i, a) => {
      e.detail(!0);
      let o = Math.max(m(t === `x` ? r : n, t === `x` ? n : r), h) + 0.012,
        s = Math.ceil((i * 2) / 1.6);
      for (let a = 0; a < s; a++) {
        let c = -i + (a + 0.5) * ((i * 2) / s),
          [l, u] = t === `x` ? [r, n + c] : [n + c, r];
        (e.setColor(
          a % 2 ? 0.92 : 0.85,
          a % 2 ? 0.92 : 0.2,
          a % 2 ? 0.9 : 0.12,
        ),
          t === `x`
            ? e.frustum(l, o, u, 0.62, 1.5, 0.3, 1.4, 0.95)
            : e.frustum(l, o, u, 1.5, 0.62, 1.4, 0.3, 0.95),
          a % 3 == 1 &&
            (e.setColor(1, 0.7, 0.15).setEmit(3.5, 2, a * 7 + 3),
            e.box(l, o + 0.95, u, 0.22, 0.22, 0.22),
            e.noEmit()));
      }
      let [c, l] = t === `x` ? [r - 0.4, n - i] : [n - i, r - 0.4],
        [u, d] = t === `x` ? [r + 0.4, n + i] : [n + i, r + 0.4];
      y(c, l, u, d, o, o + 1.2, `barrier`);
      let [f, p] = t === `x` ? [r - a * 2.2, n] : [n, r - a * 2.2];
      e.setColor(0.25, 0.25, 0.26);
      for (let n of [-1.3, 1.3]) {
        let [r, i] = t === `x` ? [f, p + n] : [f + n, p];
        e.boxMinMax(r - 0.05, o, i - 0.05, r + 0.05, o + 2.1, i + 0.05);
      }
      e.setColor(1, 1, 1).setEmit(0.35, 0);
      let g = 1.55,
        _ = o + 0.9,
        v = o + 2.35;
      if (t === `x`) {
        let t = f - a * 0.06;
        a > 0
          ? e.quad(t, _, p - g, t, _, p + g, t, v, p + g, t, v, p - g, Rm)
          : e.quad(t, _, p + g, t, _, p - g, t, v, p - g, t, v, p + g, Rm);
      } else {
        let t = p - a * 0.06;
        a > 0
          ? e.quad(f + g, _, t, f - g, _, t, f - g, v, t, f + g, v, t, Rm)
          : e.quad(f - g, _, t, f + g, _, t, f + g, v, t, f - g, v, t, Rm);
      }
      (e.setColor(0.3, 0.3, 0.3).setEmit(0, 0),
        t === `x`
          ? e.boxMinMax(
              f + a * 0.02 - 0.03,
              _,
              p - g,
              f + a * 0.02 + 0.03,
              v,
              p + g,
              3,
            )
          : e.boxMinMax(
              f - g,
              _,
              p + a * 0.02 - 0.03,
              f + g,
              v,
              p + a * 0.02 + 0.03,
              48,
            ),
        e.noEmit(),
        y(f - 0.3, p - 0.3, f + 0.3, p + 0.3, o, o + 2.4, `sign`));
      for (let s = -2; s <= 2; s++) {
        let [c, l] =
          t === `x`
            ? [r - a * (5 + Math.abs(s) * 1.5), n + (i / 3) * s]
            : [n + (i / 3) * s, r - a * (5 + Math.abs(s) * 1.5)];
        (e.setColor(0.95, 0.35, 0.08),
          e.frustum(c, o, l, 0.38, 0.38, 0.06, 0.06, 0.7),
          e.setColor(0.95, 0.95, 0.92),
          e.frustum(c, o + 0.36, l, 0.22, 0.22, 0.16, 0.16, 0.12, !1));
      }
      e.detail(!1);
    },
    C = (t, n, i, a, o, s, c) => {
      let l = Math.hypot(i - t, a - n);
      if (l < 0.5) return;
      let u = (i - t) / l,
        d = (a - n) / l,
        f = Math.max(1, Math.round(l / (o === `hoard` ? 6 : 4))),
        p = l / f;
      for (let i = 0; i < f; i++) {
        let a = i * p,
          l = (i + 1) * p,
          f = (a + l) / 2;
        if (c && f > c[0] && f < c[1]) continue;
        let h = t + u * a,
          g = n + d * a,
          v = t + u * l,
          y = n + d * l,
          b = Math.min(m(h, g), m(v, y)) - 0.05,
          x =
            o === `hoard`
              ? Im(Math.floor(Zh(h * 0.13 + g * 0.71) * 4))
              : Lm(o === `corr` ? 0 : 1);
        if (
          (e.setColor(1, 1, 1),
          e.quad(h, b, g, v, b, y, v, b + s, y, h, b + s, g, x),
          e.setColor(
            o === `hoard` ? 0.7 : 0.5,
            o === `hoard` ? 0.72 : 0.52,
            o === `hoard` ? 0.7 : 0.55,
          ),
          e.quad(v, b, y, h, b, g, h, b + s, g, v, b + s, y),
          e.detail(!0),
          e.setColor(0.3, 0.32, 0.33),
          e.boxMinMax(h - 0.07, b, g - 0.07, h + 0.07, b + s + 0.1, g + 0.07),
          o === `hoard` &&
            i % 2 == 0 &&
            (e.setColor(1, 0.15, 0.08).setEmit(4, 2, Math.floor(h + g) & 255),
            e.box((h + v) / 2, b + s, (g + y) / 2, 0.16, 0.16, 0.16),
            e.noEmit()),
          e.detail(!1),
          r)
        ) {
          let e = (h + v) / 2,
            t = (g + y) / 2;
          _(e, t) &&
            r.addOBB(
              e,
              t,
              0.12,
              p / 2 + 0.05,
              Math.atan2(v - h, -(y - g)),
              b,
              b + s,
              `fence`,
            );
        }
      }
    },
    w = (e, t, n, r, i = 8) => {
      ((e.x0 + e.x1) / 2, (e.z0 + e.z1) / 2);
      let a = (e) => [e / 2 - i / 2, e / 2 + i / 2];
      (C(e.x0, e.z1, e.x1, e.z1, t, n, r === `s` ? a(e.x1 - e.x0) : void 0),
        C(e.x1, e.z1, e.x1, e.z0, t, n, r === `e` ? a(e.z1 - e.z0) : void 0),
        C(e.x1, e.z0, e.x0, e.z0, t, n, r === `n` ? a(e.x1 - e.x0) : void 0),
        C(e.x0, e.z0, e.x0, e.z1, t, n, r === `w` ? a(e.z1 - e.z0) : void 0));
    },
    T = (t, n, i, a, o, c) => {
      let [u, d] = g({ x0: t, z0: n, x1: i, z1: a }),
        f = Math.max(d, h) - 0.02;
      (d - u > 0.25 &&
        (e.setColor(0.46, 0.45, 0.42),
        e.boxMinMax(
          t - 0.15,
          u - 0.3,
          n - 0.15,
          i + 0.15,
          f + 0.02,
          a + 0.15,
          55,
        )),
        r &&
          _((t + i) / 2, (n + a) / 2) &&
          r.addFloorRect(t, n, i, a, f + 0.02, `floor`));
      let m = Kh[s.int(0, Kh.length - 1)],
        v = 0.9 + s.next() * 0.15,
        b = f + 3.6 + (c - 1) * 3.1,
        x = 3.2,
        S = { x0: t, z0: n, x1: i, z1: a };
      o === `n`
        ? (S.z0 += x)
        : o === `s`
          ? (S.z1 -= x)
          : o === `e`
            ? (S.x1 -= x)
            : (S.x0 += x);
      let C = s.chance(0.35);
      (e.setColor(0.3, 0.29, 0.28),
        e.boxMinMax(S.x0, f, S.z0, S.x1, f + 3.6, S.z1, 55));
      let w = o === `n` || o === `s` ? i - t : a - n,
        T = f + 0.05,
        E = f + 3,
        D = 0.6,
        O = (t) => {
          o === `n`
            ? e.quad(
                S.x1 - D,
                T,
                S.z0 - 0.02,
                S.x0 + D,
                T,
                S.z0 - 0.02,
                S.x0 + D,
                E,
                S.z0 - 0.02,
                S.x1 - D,
                E,
                S.z0 - 0.02,
                t,
              )
            : o === `s`
              ? e.quad(
                  S.x0 + D,
                  T,
                  S.z1 + 0.02,
                  S.x1 - D,
                  T,
                  S.z1 + 0.02,
                  S.x1 - D,
                  E,
                  S.z1 + 0.02,
                  S.x0 + D,
                  E,
                  S.z1 + 0.02,
                  t,
                )
              : o === `e`
                ? e.quad(
                    S.x1 + 0.02,
                    T,
                    S.z1 - D,
                    S.x1 + 0.02,
                    T,
                    S.z0 + D,
                    S.x1 + 0.02,
                    E,
                    S.z0 + D,
                    S.x1 + 0.02,
                    E,
                    S.z1 - D,
                    t,
                  )
                : e.quad(
                    S.x0 - 0.02,
                    T,
                    S.z0 + D,
                    S.x0 - 0.02,
                    T,
                    S.z1 - D,
                    S.x0 - 0.02,
                    E,
                    S.z1 - D,
                    S.x0 - 0.02,
                    E,
                    S.z0 + D,
                    t,
                  );
        };
      if (C) (e.setColor(0.92, 0.92, 0.9), O(Vm));
      else {
        let t = [
          [1, 0.86, 0.62],
          [0.95, 0.97, 1],
          [1, 0.78, 0.55],
        ][s.int(0, 2)];
        (e.setColor(t[0] * 0.55, t[1] * 0.55, t[2] * 0.55).setEmit(1, 0, Vh),
          O(),
          e.noEmit());
      }
      let k = 1 + s.int(0, 998);
      (e.setColor(m[0] * v, m[1] * v, m[2] * v).setEmit(0, 0, k),
        e.boxMinMax(t, f + 3.6, n, i, b, a, 63),
        e.noEmit(),
        e.detail(!0));
      let A = Math.max(2, Math.round(w / 4.5) + 1);
      e.setColor(m[0] * v * 0.92, m[1] * v * 0.92, m[2] * v * 0.92);
      for (let r = 0; r < A; r++) {
        let s = r / (A - 1),
          c,
          l;
        (o === `n`
          ? ((c = t + 0.3 + s * (i - t - 0.6)), (l = n + 0.3))
          : o === `s`
            ? ((c = t + 0.3 + s * (i - t - 0.6)), (l = a - 0.3))
            : o === `e`
              ? ((c = i - 0.3), (l = n + 0.3 + s * (a - n - 0.6)))
              : ((c = t + 0.3), (l = n + 0.3 + s * (a - n - 0.6))),
          e.boxMinMax(c - 0.3, f, l - 0.3, c + 0.3, f + 3.6, l + 0.3, 51),
          y(c - 0.3, l - 0.3, c + 0.3, l + 0.3, f, f + 3.6, `pillar`));
      }
      let j = Jh[s.int(0, Jh.length - 1)];
      e.setColor(j[0] * 0.8, j[1] * 0.8, j[2] * 0.8).setEmit(0.4, 0);
      let M = s.chance(0.6) ? 1.8 : 0.5,
        N = Fm(s.int(0, 15));
      if (o === `n` || o === `s`) {
        let r = o === `n` ? n - 0.08 : a + 0.08;
        e.boxMinMax(
          t + 0.8,
          f + 3.75,
          Math.min(r, r + (o === `n` ? 0.12 : -0.12)),
          i - 0.8,
          f + 4.75,
          Math.max(r, r + (o === `n` ? 0.12 : -0.12)),
          55,
        );
        let c = (t + i) / 2,
          l = Math.min((i - t) / 2 - 1.1, 2.3),
          u = o === `n` ? r - 0.02 : r + 0.02;
        if (
          (e.setColor(1, 1, 1).setEmit(M, 0),
          o === `n`
            ? e.quad(
                c + l,
                f + 3.8,
                u,
                c - l,
                f + 3.8,
                u,
                c - l,
                f + 4.7,
                u,
                c + l,
                f + 4.7,
                u,
                N,
              )
            : e.quad(
                c - l,
                f + 3.8,
                u,
                c + l,
                f + 3.8,
                u,
                c + l,
                f + 4.7,
                u,
                c - l,
                f + 4.7,
                u,
                N,
              ),
          e.setColor(j[0] * 0.8, j[1] * 0.8, j[2] * 0.8).setEmit(M, 0),
          s.chance(0.55))
        ) {
          let n = s.chance(0.5) ? t + 0.6 : i - 0.6;
          e.boxMinMax(
            n - 0.1,
            f + 4.8,
            r + (o === `n` ? -1.4 : 0.2),
            n + 0.1,
            f + 4.8 + s.range(3, 6),
            r + (o === `n` ? -0.2 : 1.4),
          );
        }
      } else {
        let r = o === `e` ? i + 0.08 : t - 0.08;
        e.boxMinMax(
          Math.min(r, r + (o === `w` ? 0.12 : -0.12)),
          f + 3.75,
          n + 0.8,
          Math.max(r, r + (o === `w` ? 0.12 : -0.12)),
          f + 4.75,
          a - 0.8,
          59,
        );
        let s = (n + a) / 2,
          c = Math.min((a - n) / 2 - 1.1, 2.3),
          l = o === `e` ? r + 0.02 : r - 0.02;
        (e.setColor(1, 1, 1).setEmit(M, 0),
          o === `e`
            ? e.quad(
                l,
                f + 3.8,
                s + c,
                l,
                f + 3.8,
                s - c,
                l,
                f + 4.7,
                s - c,
                l,
                f + 4.7,
                s + c,
                N,
              )
            : e.quad(
                l,
                f + 3.8,
                s - c,
                l,
                f + 3.8,
                s + c,
                l,
                f + 4.7,
                s + c,
                l,
                f + 4.7,
                s - c,
                N,
              ));
      }
      e.noEmit();
      for (let r = 1; r < c; r++) {
        let c = f + 3.6 + (r - 1) * 3.1 + 0.4;
        for (let r = 0; r < Math.max(1, Math.floor(w / 6)); r++) {
          if (!s.chance(0.45)) continue;
          let l = (r + 0.5) / Math.max(1, Math.floor(w / 5)),
            u = s.chance(0.35);
          if (o === `n` || o === `s`) {
            let r = t + l * (i - t),
              s = o === `n` ? n - 0.25 : a + 0.25;
            (e.setColor(0.86, 0.86, 0.84),
              e.box(r + 1.2, c, s, 0.8, 0.55, 0.45),
              u &&
                (e.setColor(0.32, 0.25, 0.2),
                e.box(
                  r - 0.6,
                  c + 0.3,
                  s + (o === `n` ? -0.2 : 0.2),
                  1.6,
                  1.6,
                  0.35,
                )));
          } else {
            let r = n + l * (a - n),
              s = o === `w` ? t - 0.25 : i + 0.25;
            (e.setColor(0.86, 0.86, 0.84),
              e.box(s, c, r + 1.2, 0.45, 0.55, 0.8),
              u &&
                (e.setColor(0.32, 0.25, 0.2),
                e.box(
                  s + (o === `w` ? -0.2 : 0.2),
                  c + 0.3,
                  r - 0.6,
                  0.35,
                  1.6,
                  1.6,
                )));
          }
        }
      }
      if ((e.detail(!1), s.chance(0.55))) {
        let r = [
          [0.25, 0.42, 0.6],
          [0.3, 0.5, 0.35],
          [0.62, 0.3, 0.2],
          [0.7, 0.7, 0.68],
        ][s.int(0, 3)];
        e.setColor(0.62, 0.6, 0.56);
        let o = t + 0.6,
          c = i - 0.6,
          l = n + 0.6,
          u = a - 0.6,
          d = s.range(0.35, 0.7),
          f = o + (c - o) * d;
        (e.boxMinMax(o, b, l, f, b + 2.4, u, 51),
          e.setColor(r[0], r[1], r[2]),
          e.boxMinMax(
            o - 0.3,
            b + 2.4,
            l - 0.3,
            f + 0.3,
            b + 2.6,
            u + 0.3,
            55,
          ));
      }
      (e.setColor(0.82, 0.84, 0.86),
        e.detail(!0),
        e.cyl(
          t + (i - t) * s.range(0.55, 0.85),
          b,
          n + (a - n) * s.range(0.3, 0.7),
          0.8,
          1.6,
          6,
          !1,
        ),
        e.setColor(0.55, 0.53, 0.5),
        e.boxMinMax(t, b, n, i, b + 1, n + 0.2, 23),
        e.boxMinMax(t, b, a - 0.2, i, b + 1, a, 39),
        e.detail(!1),
        y(S.x0, S.z0, S.x1, S.z1, f, b),
        l.push({
          x0: t,
          z0: n,
          x1: i,
          z1: a,
          y0: u - 0.3,
          y1: b + 0.8,
          r: m[0] * v,
          g: m[1] * v,
          b: m[2] * v,
          seed: k,
        }),
        p++);
    },
    E = (t, n, r, i) => {
      let a = Math.max(m(t, n), h);
      e.detail(!0);
      let o = [
          [0.85, 0.85, 0.82],
          [0.2, 0.42, 0.72],
          [0.82, 0.62, 0.12],
          [0.7, 0.18, 0.14],
          [0.3, 0.5, 0.32],
        ],
        s = o[i % o.length],
        c = e.vertexCount;
      (e.setColor(0.15, 0.15, 0.16),
        e.boxMinMax(-1.1, 0.35, -4.2, 1.1, 0.8, 4.2),
        e.setColor(s[0], s[1], s[2]),
        e.boxMinMax(-1.15, 0.8, -4.3, 1.15, 3, -2.6),
        e.setColor(0.08, 0.1, 0.12),
        e.quad(-1, 2, -4.32, 1, 2, -4.32, 1, 2.8, -4.32, -1, 2.8, -4.32),
        i % 3 == 0
          ? (e.setColor(0.9, 0.9, 0.88),
            e.boxMinMax(-1.25, 0.9, -2.4, 1.25, 3.6, 4.3))
          : i % 3 == 1
            ? (e.setColor(s[0] * 0.8, s[1] * 0.8, s[2] * 0.8),
              e.boxMinMax(-1.2, 0.9, -2.4, 1.2, 2.2, 4.2, 59),
              e.setColor(0.45, 0.4, 0.33),
              e.frustum(0, 2.2, 0.9, 2.2, 5.8, 1.2, 4, 0.6))
            : (e.setColor(0.9, 0.88, 0.8),
              e.beam(0, 2.2, -2.2, 0, 2.9, 3.6, 2.2, 2.2),
              e.setColor(s[0], s[1], s[2]),
              e.beam(0, 2.25, -1.2, 0, 2.8, 2.8, 2.3, 0.4)),
        e.setColor(0.07, 0.07, 0.07));
      for (let t of [-3.3, 1.2, 3.1])
        for (let n of [-1.2, 1.2]) e.box(n, 0, t, 0.4, 0.9, 0.9);
      let l = new De().makeRotationY(r).setPosition(t, a, n);
      e.transformSince(c, l);
      let u = Math.cos(r),
        d = Math.sin(r);
      e.detail(!1);
      let f = Math.abs(u) * 1.3 + Math.abs(d) * 4.4,
        p = Math.abs(d) * 1.3 + Math.abs(u) * 4.4;
      y(t - f, n - p, t + f, n + p, a, a + 3.6, `vehicle`);
    },
    D = (t, n, r) => {
      let i = Math.max(m(t, n), h);
      e.detail(!0);
      let a = [
          [0.9, 0.9, 0.9],
          [0.1, 0.1, 0.11],
          [0.55, 0.57, 0.6],
          [0.6, 0.1, 0.08],
          [0.15, 0.25, 0.45],
          [0.95, 0.8, 0.15],
        ],
        o = a[s.int(0, a.length - 1)],
        c = e.vertexCount;
      (e.setColor(o[0], o[1], o[2]),
        e.boxMinMax(-0.88, 0.3, -2.2, 0.88, 0.95, 2.2),
        e.frustum(0, 0.95, 0.15, 1.72, 2.4, 1.5, 1.6, 0.55),
        e.setColor(0.08, 0.1, 0.12),
        e.quad(
          -0.78,
          1,
          -1.04,
          0.78,
          1,
          -1.04,
          0.72,
          1.45,
          -0.62,
          -0.72,
          1.45,
          -0.62,
        ),
        e.setColor(0.06, 0.06, 0.06));
      for (let t of [-1.35, 1.35])
        for (let n of [-0.82, 0.82]) e.box(n, 0, t, 0.25, 0.62, 0.62);
      (e.transformSince(c, new De().makeRotationY(r).setPosition(t, i, n)),
        e.detail(!1));
      let l = Math.abs(Math.cos(r)),
        u = Math.abs(Math.sin(r));
      y(
        t - (l * 0.95 + u * 2.25),
        n - (u * 0.95 + l * 2.25),
        t + (l * 0.95 + u * 2.25),
        n + (u * 0.95 + l * 2.25),
        i,
        i + 1.5,
        `vehicle`,
      );
    },
    O = (t, n, r, i, a) => {
      e.mainOnly(!1);
      let o = e.vertexCount,
        c = s.chance(0.5) ? [0.88, 0.66, 0.1] : [0.85, 0.85, 0.82];
      (e.setColor(0.45, 0.45, 0.43),
        e.boxMinMax(-2.2, -0.5, -2.2, 2.2, 0.6, 2.2),
        e.setColor(c[0], c[1], c[2]));
      for (let [t, n] of [
        [-0.8, -0.8],
        [0.8, -0.8],
        [0.8, 0.8],
        [-0.8, 0.8],
      ])
        e.boxMinMax(t - 0.12, 0, n - 0.12, t + 0.12, r, n + 0.12, 51);
      e.detail(!0);
      for (let t = 3; t < r - 1; t += 3.2)
        (e.beam(-0.8, t, -0.8, 0.8, t + 3, -0.8, 0.09, 0.09),
          e.beam(0.8, t, 0.8, -0.8, t + 3, 0.8, 0.09, 0.09),
          e.beam(-0.8, t, 0.8, -0.8, t + 3, -0.8, 0.09, 0.09),
          e.beam(0.8, t, -0.8, 0.8, t + 3, 0.8, 0.09, 0.09));
      (e.detail(!1),
        e.setColor(0.3, 0.3, 0.3),
        e.boxMinMax(-1.2, r, -1.2, 1.2, r + 1.4, 1.2),
        e.setColor(0.85, 0.86, 0.86),
        e.boxMinMax(1.2, r + 0.2, -1.4, 3, r + 2.2, -0.2),
        e.setColor(c[0], c[1], c[2]));
      let l = r * 0.85;
      (e.beam(0, r + 1.4, -0.5, l, r + 1.4, -0.5, 0.18, 0.18),
        e.beam(0, r + 1.4, 0.5, l, r + 1.4, 0.5, 0.18, 0.18),
        e.beam(0, r + 2.6, 0, l, r + 1.6, 0, 0.16, 0.16),
        e.detail(!0));
      for (let t = 2; t < l; t += 4)
        e.beam(
          t,
          r + 1.4,
          0,
          t + 2,
          r + 1.4 + 1.2 * (1 - t / l),
          0,
          0.07,
          0.07,
        );
      (e.detail(!1),
        e.beam(0, r + 1.4, 0, -l * 0.3, r + 1.4, 0, 0.9, 0.3),
        e.setColor(0.55, 0.55, 0.52),
        e.boxMinMax(-l * 0.3, r - 0.6, -0.9, -l * 0.3 + 3.2, r + 1.4, 0.9),
        e.setColor(c[0], c[1], c[2]),
        e.boxMinMax(-0.3, r + 1.4, -0.3, 0.3, r + 7, 0.3),
        e.beam(0, r + 7, 0, l * 0.7, r + 1.5, 0, 0.06, 0.06),
        e.beam(0, r + 7, 0, -l * 0.3, r + 1.5, 0, 0.06, 0.06));
      let u = l * s.range(0.35, 0.8);
      (e.setColor(0.15, 0.15, 0.15),
        e.boxMinMax(u - 0.03, r * 0.45, -0.03, u + 0.03, r + 1.4, 0.03),
        e.setColor(0.9, 0.7, 0.1),
        e.boxMinMax(u - 0.35, r * 0.45 - 0.8, -0.2, u + 0.35, r * 0.45, 0.2),
        e.setColor(1, 0.1, 0.06).setEmit(9, 2, s.int(1, 99)),
        e.box(0, r + 7, 0, 0.4, 0.4, 0.4),
        e.box(l, r + 1.2, 0, 0.35, 0.35, 0.35),
        e.box(-l * 0.3, r + 1.4, 0, 0.35, 0.35, 0.35),
        e.noEmit(),
        e.transformSince(o, new De().makeRotationY(i).setPosition(t, a, n)),
        e.mainOnly(!0),
        y(t - 1.2, n - 1.2, t + 1.2, n + 1.2, a, a + r, `crane`));
    },
    k = (t, n, r) => {
      let i = Math.max(g(t)[1], h),
        a = 3.2,
        o = Math.max(2, Math.round((t.x1 - t.x0) / 7)),
        s = Math.max(2, Math.round((t.z1 - t.z0) / 7));
      for (let c = 0; c < n; c++) {
        let n = i + c * a;
        (e.setColor(0.62, 0.61, 0.58),
          e.boxMinMax(
            t.x0 - 0.3,
            n + a - 0.3,
            t.z0 - 0.3,
            t.x1 + 0.3,
            n + a,
            t.z1 + 0.3,
            63,
          ),
          e.setColor(0.56, 0.55, 0.52));
        for (let r = 0; r <= o; r++)
          for (let i = 0; i <= s; i++) {
            if (r > 0 && r < o && i > 0 && i < s && (r + i) % 2) continue;
            let c = t.x0 + ((t.x1 - t.x0) * r) / o,
              l = t.z0 + ((t.z1 - t.z0) * i) / s;
            e.boxMinMax(
              c - 0.35,
              n,
              l - 0.35,
              c + 0.35,
              n + a - 0.3,
              l + 0.35,
              51,
            );
          }
        c < r &&
          (e.setColor(0.7, 0.69, 0.66).setEmit(0, 0, 0),
          e.boxMinMax(
            t.x0 + 0.2,
            n,
            t.z0 + 0.2,
            t.x1 - 0.2,
            n + a - 0.3,
            t.z1 - 0.2,
            51,
          ));
      }
      e.detail(!0);
      let c = i + n * a;
      e.setColor(0.35, 0.22, 0.14);
      for (let n = 0; n <= o; n++)
        for (let r = 0; r <= s; r += s) {
          let i = t.x0 + ((t.x1 - t.x0) * n) / o,
            a = t.z0 + ((t.z1 - t.z0) * r) / s;
          e.boxMinMax(i - 0.2, c, a - 0.2, i + 0.2, c + 1.6, a + 0.2, 51);
        }
      (e.detail(!1), e.setColor(0.16, 0.42, 0.24));
      let u = Math.min(n, r + 2) * a;
      return (
        e.quad(
          t.x0 - 1.2,
          i,
          t.z1 + 1.2,
          t.x1 + 1.2,
          i,
          t.z1 + 1.2,
          t.x1 + 1.2,
          i + u,
          t.z1 + 1.2,
          t.x0 - 1.2,
          i + u,
          t.z1 + 1.2,
        ),
        e.quad(
          t.x1 + 1.2,
          i,
          t.z1 + 1.2,
          t.x1 + 1.2,
          i,
          t.z0 - 1.2,
          t.x1 + 1.2,
          i + u,
          t.z0 - 1.2,
          t.x1 + 1.2,
          i + u,
          t.z1 + 1.2,
        ),
        e.quad(
          t.x1 + 1.2,
          i,
          t.z0 - 1.2,
          t.x0 - 1.2,
          i,
          t.z0 - 1.2,
          t.x0 - 1.2,
          i + u,
          t.z0 - 1.2,
          t.x1 + 1.2,
          i + u,
          t.z0 - 1.2,
        ),
        e.quad(
          t.x0 - 1.2,
          i,
          t.z0 - 1.2,
          t.x0 - 1.2,
          i,
          t.z1 + 1.2,
          t.x0 - 1.2,
          i + u,
          t.z1 + 1.2,
          t.x0 - 1.2,
          i + u,
          t.z0 - 1.2,
        ),
        y(t.x0 - 1.2, t.z0 - 1.2, t.x1 + 1.2, t.z1 + 1.2, i, c, `building`),
        l.push({
          x0: t.x0 - 1.2,
          z0: t.z0 - 1.2,
          x1: t.x1 + 1.2,
          z1: t.z1 + 1.2,
          y0: i - 0.3,
          y1: c,
          r: 0.5,
          g: 0.54,
          b: 0.5,
          seed: 0,
        }),
        p++,
        c
      );
    },
    A = (t, n) => {
      let [r, i] = g(t);
      i - r > 1.2 ||
        (e.setColor(n[0], n[1], n[2]),
        e.flat(t.x0, t.z0, t.x1, t.z1, i + 0.02));
    },
    j = (e, t, n) => {
      let r = t === `n` || t === `s`,
        i = r ? e.x0 : e.z0,
        a = r ? e.x1 : e.z1,
        o = i + 0.5;
      for (; o < a - 6;) {
        let r = Math.min(a - 0.5 - o, s.range(8, 13));
        if (r < 6) break;
        let i = s.int(4, 6);
        (t === `n`
          ? T(o, e.z0 + 0.5, o + r, e.z0 + 0.5 + n, `n`, i)
          : t === `s`
            ? T(o, e.z1 - 0.5 - n, o + r, e.z1 - 0.5, `s`, i)
            : t === `w`
              ? T(e.x0 + 0.5, o, e.x0 + 0.5 + n, o + r, `w`, i)
              : T(e.x1 - 0.5 - n, o, e.x1 - 0.5, o + r, `e`, i),
          (o += r + (s.chance(0.18) ? 3 : 0.1)));
      }
    },
    M = (t, n, r, i, a) => {
      e.mainOnly(!0);
      let o = { x0: t - r / 2, z0: n - i / 2, x1: t + r / 2, z1: n + i / 2 },
        [c, u] = g(o),
        d = Kh[s.int(0, Kh.length - 1)],
        f = 0.85 + s.next() * 0.2;
      (e.setColor(0.46, 0.45, 0.42),
        u - c > 0.2 &&
          e.boxMinMax(
            o.x0 - 0.1,
            c - 0.3,
            o.z0 - 0.1,
            o.x1 + 0.1,
            u,
            o.z1 + 0.1,
            55,
          ));
      let m = u + a * 3.1,
        h = 1 + s.int(0, 998);
      if (
        (e.setColor(d[0] * f, d[1] * f, d[2] * f).setEmit(0, 0, h),
        e.boxMinMax(o.x0, u, o.z0, o.x1, m, o.z1, 55),
        e.noEmit(),
        s.chance(0.6))
      ) {
        let t = [
          [0.25, 0.42, 0.6],
          [0.3, 0.5, 0.35],
          [0.62, 0.3, 0.2],
          [0.7, 0.7, 0.68],
        ][s.int(0, 3)];
        (e.setColor(0.6, 0.58, 0.55),
          e.boxMinMax(
            o.x0 + 0.5,
            m,
            o.z0 + 0.5,
            o.x0 + r * 0.6,
            m + 2.3,
            o.z1 - 0.5,
            51,
          ),
          e.setColor(t[0], t[1], t[2]),
          e.boxMinMax(
            o.x0 + 0.2,
            m + 2.3,
            o.z0 + 0.2,
            o.x0 + r * 0.6 + 0.3,
            m + 2.5,
            o.z1 - 0.2,
            55,
          ));
      } else
        (e.setColor(0.82, 0.84, 0.86), e.cyl(t + r * 0.2, m, n, 0.7, 1.4, 6));
      (y(o.x0, o.z0, o.x1, o.z1, c - 0.3, m, `building`),
        l.push({
          x0: o.x0,
          z0: o.z0,
          x1: o.x1,
          z1: o.z1,
          y0: c - 0.3,
          y1: m,
          r: d[0] * f,
          g: d[1] * f,
          b: d[2] * f,
          seed: h,
        }),
        p++);
    },
    N = (t, n, r, i) => {
      let a = t.x1 - t.x0,
        o = t.z1 - t.z0;
      if (a < 14 || o < 14) return;
      let [c, l] = g(t);
      if (l - c > 16 || c > h + 36) return;
      (v(t), d.push(t));
      let u = l - c > 2.5,
        f = Math.min(14, Math.min(a, o) / 2 - 2),
        p = s.next(),
        m = !u && !r && p < 0.22,
        _ = { n: !1, s: !1, e: !1, w: !1 };
      if (!m) {
        for (let e of [`n`, `s`, `e`, `w`]) _[e] = n[e] && e !== i;
        (!_.n && !_.s && !_.e && !_.w && (_.s = !0),
          _.n && j({ x0: t.x0, z0: t.z0, x1: t.x1, z1: t.z0 + f + 1 }, `n`, f),
          _.s && j({ x0: t.x0, z0: t.z1 - f - 1, x1: t.x1, z1: t.z1 }, `s`, f));
        let e = t.z0 + (_.n ? f + 1.5 : 0),
          r = t.z1 - (_.s ? f + 1.5 : 0);
        (_.w &&
          r - e > 8 &&
          j({ x0: t.x0, z0: e, x1: t.x0 + f + 1, z1: r }, `w`, f),
          _.e &&
            r - e > 8 &&
            j({ x0: t.x1 - f - 1, z0: e, x1: t.x1, z1: r }, `e`, f));
      }
      let b = {
          x0: t.x0 + (_.w ? f + 2 : 0.5),
          z0: t.z0 + (_.n ? f + 2 : 0.5),
          x1: t.x1 - (_.e ? f + 2 : 0.5),
          z1: t.z1 - (_.s ? f + 2 : 0.5),
        },
        x = b.x1 - b.x0,
        S = b.z1 - b.z0;
      if (x < 12 || S < 12) return;
      let [C, T] = g(b),
        N =
          i ??
          (n.s && !_.s
            ? `s`
            : n.n && !_.n
              ? `n`
              : n.w && !_.w
                ? `w`
                : n.e && !_.e
                  ? `e`
                  : `s`);
      if (T - C > 2.5 || u) {
        for (let e = b.x0 + 6; e < b.x1 - 5; e += 13)
          for (let t = b.z0 + 6; t < b.z1 - 5; t += 13)
            s.chance(0.75) &&
              M(
                e + s.range(-1.5, 1.5),
                t + s.range(-1.5, 1.5),
                s.range(8, 10.5),
                s.range(8, 10.5),
                s.int(2, 4),
              );
        return;
      }
      let ee = s.next(),
        te = r
          ? ee < 0.45
            ? `site`
            : ee < 0.75
              ? `yard`
              : `parking`
          : ee < 0.6
            ? `parking`
            : `site`,
        F = b,
        I = T;
      if (te === `parking`) {
        (A(F, [0.2, 0.2, 0.21]), w(F, `corr2`, 1.9, N, 9));
        for (let t = F.x0 + 4; t < F.x1 - 4; t += 2.8)
          for (let n of [F.z0 + 5, F.z1 - 5])
            (F.z1 - F.z0 < 16 && n > F.z0 + 5) ||
              (e.setColor(0.8, 0.8, 0.75),
              e.flat(t - 0.06, n - 2.6, t + 0.06, n + 2.6, I + 0.03),
              s.chance(0.62) &&
                t + 2.8 < F.x1 - 4 &&
                D(t + 1.4, n, n < (F.z0 + F.z1) / 2 ? 0 : Math.PI));
        let t =
            N === `w`
              ? F.x0 + 1.5
              : N === `e`
                ? F.x1 - 1.5
                : (F.x0 + F.x1) / 2 + 6,
          n =
            N === `s`
              ? F.z1 - 1.5
              : N === `n`
                ? F.z0 + 1.5
                : (F.z0 + F.z1) / 2 + 6;
        (e.setColor(0.3, 0.3, 0.3),
          e.boxMinMax(t - 0.07, I, n - 0.07, t + 0.07, I + 3.6, n + 0.07),
          e.setColor(1, 1, 1).setEmit(0.8, 0));
        let r = zm;
        (e.quad(
          t - 0.65,
          I + 2.2,
          n + 0.06,
          t + 0.65,
          I + 2.2,
          n + 0.06,
          t + 0.65,
          I + 3.5,
          n + 0.06,
          t - 0.65,
          I + 3.5,
          n + 0.06,
          r,
        ),
          e.quad(
            t + 0.65,
            I + 2.2,
            n - 0.06,
            t - 0.65,
            I + 2.2,
            n - 0.06,
            t - 0.65,
            I + 3.5,
            n - 0.06,
            t + 0.65,
            I + 3.5,
            n - 0.06,
            r,
          ),
          e.quad(
            t - 0.06,
            I + 2.2,
            n - 0.65,
            t - 0.06,
            I + 2.2,
            n + 0.65,
            t - 0.06,
            I + 3.5,
            n + 0.65,
            t - 0.06,
            I + 3.5,
            n - 0.65,
            r,
          ),
          e.quad(
            t + 0.06,
            I + 2.2,
            n + 0.65,
            t + 0.06,
            I + 2.2,
            n - 0.65,
            t + 0.06,
            I + 3.5,
            n - 0.65,
            t + 0.06,
            I + 3.5,
            n + 0.65,
            r,
          ),
          e.noEmit(),
          y(t - 0.2, n - 0.2, t + 0.2, n + 0.2, I, I + 3.6, `pole`),
          P((F.x0 + F.x1) / 2, (F.z0 + F.z1) / 2, I, 7));
        return;
      }
      if (te === `yard`) {
        if (
          (A(F, [0.24, 0.23, 0.22]),
          w(F, `corr`, 2.6, N, 10),
          N === `n` || N === `s`)
        ) {
          let t = (F.x0 + F.x1) / 2,
            n = N === `n` ? F.z0 : F.z1;
          (e.setColor(0.3, 0.3, 0.32),
            e.boxMinMax(t - 5.2, I, n - 0.12, t - 4.9, I + 5.2, n + 0.12),
            e.boxMinMax(t + 4.9, I, n - 0.12, t + 5.2, I + 5.2, n + 0.12),
            e.setColor(1, 1, 1).setEmit(0.6, 0));
          let r = N === `n` ? n - 0.14 : n + 0.14;
          (N === `n`
            ? e.quad(
                t + 4.9,
                I + 4,
                r,
                t - 4.9,
                I + 4,
                r,
                t - 4.9,
                I + 5.4,
                r,
                t + 4.9,
                I + 5.4,
                r,
                Bm,
              )
            : e.quad(
                t - 4.9,
                I + 4,
                r,
                t + 4.9,
                I + 4,
                r,
                t + 4.9,
                I + 5.4,
                r,
                t - 4.9,
                I + 5.4,
                r,
                Bm,
              ),
            e.noEmit());
        } else {
          let t = (F.z0 + F.z1) / 2,
            n = N === `w` ? F.x0 : F.x1;
          (e.setColor(0.3, 0.3, 0.32),
            e.boxMinMax(n - 0.12, I, t - 5.2, n + 0.12, I + 5.2, t - 4.9),
            e.boxMinMax(n - 0.12, I, t + 4.9, n + 0.12, I + 5.2, t + 5.2),
            e.setColor(1, 1, 1).setEmit(0.6, 0));
          let r = N === `w` ? n - 0.14 : n + 0.14;
          (N === `w`
            ? e.quad(
                r,
                I + 4,
                t - 4.9,
                r,
                I + 4,
                t + 4.9,
                r,
                I + 5.4,
                t + 4.9,
                r,
                I + 5.4,
                t - 4.9,
                Bm,
              )
            : e.quad(
                r,
                I + 4,
                t + 4.9,
                r,
                I + 4,
                t - 4.9,
                r,
                I + 5.4,
                t - 4.9,
                r,
                I + 5.4,
                t + 4.9,
                Bm,
              ),
            e.noEmit());
        }
        let t = s.int(0, 5),
          n = x >= S,
          r = n ? F.x0 : F.z0,
          i = n ? F.x1 : F.z1;
        for (let e = r + 5; e < i - 5; e += 4.2)
          s.chance(0.3) ||
            (n
              ? (E(
                  e,
                  F.z0 + 7 + s.range(0, 1.5),
                  s.chance(0.5) ? 0 : Math.PI,
                  t++,
                ),
                S > 34 &&
                  s.chance(0.6) &&
                  E(
                    e,
                    F.z1 - 7 - s.range(0, 1.5),
                    s.chance(0.5) ? 0 : Math.PI,
                    t++,
                  ))
              : (E(
                  F.x0 + 7 + s.range(0, 1.5),
                  e,
                  Math.PI / 2 + (s.chance(0.5) ? 0 : Math.PI),
                  t++,
                ),
                x > 34 &&
                  s.chance(0.6) &&
                  E(
                    F.x1 - 7 - s.range(0, 1.5),
                    e,
                    Math.PI / 2 + (s.chance(0.5) ? 0 : Math.PI),
                    t++,
                  )));
        if (x > 30 && S > 30) {
          let t = (F.x0 + F.x1) / 2,
            n = (F.z0 + F.z1) / 2;
          for (let r = 0; r < 4; r++) {
            let i = [
                [0.7, 0.2, 0.15],
                [0.15, 0.35, 0.6],
                [0.25, 0.5, 0.35],
                [0.8, 0.6, 0.15],
              ][r % 4],
              a = I + (r === 3 ? 2.6 : 0),
              o = n - 2.6 + (r % 3) * 2.6;
            (e.setColor(i[0], i[1], i[2]),
              e.boxMinMax(t - 6, a, o - 1.2, t + 6, a + 2.6, o + 1.2),
              y(t - 6, o - 1.2, t + 6, o + 1.2, a, a + 2.6, `container`));
          }
        }
        (P(F.x0 + 3, F.z0 + 3, I, 9), P(F.x1 - 3, F.z1 - 3, I, 9));
        return;
      }
      (A(F, [0.36, 0.31, 0.25]), w(F, `hoard`, 3, N, 9));
      let L = {
        x0: F.x0 + Math.min(9, x * 0.2),
        z0: F.z0 + Math.min(10, S * 0.2),
        x1: F.x1 - Math.min(9, x * 0.2),
        z1: F.z1 - Math.min(10, S * 0.2),
      };
      if (L.x1 - L.x0 > 10 && L.z1 - L.z0 > 10) {
        let e = s.int(5, 14),
          t = k(L, e, Math.max(1, e - s.int(2, 5))),
          n =
            N === `e` || N === `w`
              ? { x: (L.x0 + L.x1) / 2, z: L.z1 + 4.5 }
              : { x: L.x1 + 4.5, z: (L.z0 + L.z1) / 2 };
        n.x < F.x1 - 2 &&
          n.z < F.z1 - 2 &&
          O(n.x, n.z, t + s.range(14, 24), s.range(0, Math.PI * 2), I);
      }
      let ne = F.x0 + 2,
        re = F.z0 + 2;
      (e.setColor(0.2, 0.4, 0.7),
        e.boxMinMax(ne, I, re, ne + 6, I + 2.6, re + 2.4),
        e.setColor(0.9, 0.9, 0.88),
        e.boxMinMax(ne, I + 2.6, re, ne + 6, I + 5.2, re + 2.4),
        y(ne, re, ne + 6, re + 2.4, I, I + 5.2, `container`),
        e.setColor(0.62, 0.55, 0.42),
        e.frustum(F.x1 - 5, I, F.z1 - 5, 6, 5, 1.2, 1, 2.2),
        P(F.x0 + 2, F.z1 - 2, I, 8));
    },
    P = (t, n, r, a) => {
      (e.detail(!0),
        e.setColor(0.3, 0.3, 0.3),
        e.boxMinMax(t - 0.08, r, n - 0.08, t + 0.08, r + a, n + 0.08),
        e.setColor(1, 0.92, 0.78).setEmit(6, 0),
        e.boxMinMax(t - 0.35, r + a - 0.3, n - 0.35, t + 0.35, r + a, n + 0.35),
        e.noEmit(),
        e.detail(!1),
        y(t - 0.12, n - 0.12, t + 0.12, n + 0.12, r, r + a, `pole`),
        i?.add(t, r + 0.08, n, 11, 1, 0.9, 0.75, 0.26));
    },
    ee = n.roads
      .filter((e) => e.axis === `x` && e.to >= o.maxX - 1 && !e.pedestrian)
      .sort((e, t) => e.at - t.at),
    te = 1960,
    F = [];
  for (let e of ee) {
    let t = b(`x`, e.at, o.maxX, te, 30);
    t <= o.maxX + 20 ||
      F.push({
        axis: `x`,
        at: e.at,
        from: o.maxX,
        to: t,
        halfWidth: e.halfWidth,
        halfTotal: e.halfTotal,
        lanes: e.lanesPerDir,
        median: e.median,
        major: !0,
        walk: !0,
      });
  }
  for (let e of F) {
    let t = Math.min(e.to, Wh - 1);
    (x({ ...e, to: t }),
      t < e.to - 2 &&
        (S(`x`, e.at, t - 0.8, e.halfTotal - 0.2, 1),
        x({ ...e, from: Hh + 12, walk: !1 })));
  }
  let I = [1004, 1190, 1370, 1550, 1730, 1910],
    L = o.minZ + 6;
  for (let e of I) {
    let t = e < Hh,
      n = t ? 3.6 : e === 1550 ? 12 : 8,
      r = n + (t ? 2.2 : 4.5),
      i = F.filter((t) => t.to >= e + r).map((e) => [
        e.at - e.halfTotal,
        e.at + e.halfTotal,
      ]),
      a = L,
      o = b(`z`, e, L, 200, t ? 25 : 40);
    for (let [s, c] of [...i, [1e9, 1e9]]) {
      let i = a,
        l = Math.min(s, o);
      if (
        (l - i > 8 &&
          x({
            axis: `z`,
            at: e,
            from: i,
            to: l,
            halfWidth: n,
            halfTotal: r,
            lanes: t ? 1 : n > 10 ? 3 : 2,
            median: n > 10 ? 4 : 0,
            major: !t,
            walk: t,
          }),
        (a = c),
        a >= o)
      )
        break;
    }
    if (t)
      for (let t of F)
        if (t.to >= e)
          u.push({
            x: e,
            z: t.at,
            halfX: n,
            halfZ: t.halfWidth,
            signal: !1,
            always: !0,
          });
        else
          for (let t of F)
            t.to >= e &&
              u.push({
                x: e,
                z: t.at,
                halfX: n,
                halfZ: t.halfWidth,
                signal: !0,
                always: !0,
                y: Math.max(m(e, t.at), h),
              });
  }
  {
    let t = o.minZ - 0.2 - 2.2,
      n = o.minZ - 0.2;
    (e.setColor(0.4, 0.395, 0.375),
      e.boxMinMax(o.maxX - 0.5, -0.6, t, Wh, 4.5, n, 21),
      e.setColor(0.52, 0.51, 0.49),
      e.boxMinMax(o.maxX - 0.5, 4.5, t - 0.25, Wh, 4.8, n + 0.15, 52),
      r?.addBox(o.maxX - 0.5, t, Wh, n, -1, 4.8, `wall`));
  }
  {
    let e = [],
      t = o.minZ + 0.5;
    for (let n of F)
      (e.push([t, n.at - n.halfTotal - 0.5]), (t = n.at + n.halfTotal + 0.5));
    e.push([t, t + 120]);
    for (let t = 0; t < e.length; t++) {
      let [n, r] = e[t];
      if (r - n < 16) continue;
      let i = { n: t > 0, s: t < e.length - 1 };
      (N(
        { x0: o.maxX + 6, z0: n, x1: 997.7, z1: r },
        { ...i, e: !0, w: !1 },
        !1,
      ),
        N(
          { x0: 1010.3, z0: n, x1: Wh - 0.5, z1: r },
          { ...i, e: !1, w: !0 },
          !0,
          `w`,
        ));
    }
  }
  {
    let e = o.minZ,
      t = [
        ...F.filter((e) => e.to > Wh).map((e) => [
          e.at - e.halfTotal,
          e.at + e.halfTotal,
        ]),
        [1e9, 1e9],
      ];
    for (let [n, r] of t) {
      let t = Math.min(n, 700),
        i = e;
      for (let n = e; n < t; n += 6)
        Math.abs(m(Wh, n) - h) < 1.2 ||
          (n - i > 6 && C(Wh, i, Wh, n, `hoard`, 3), (i = n + 6));
      if ((t - i > 6 && C(Wh, i, Wh, t, `hoard`, 3), (e = r), e > 700)) break;
    }
  }
  await a();
  let ne = n.roads
      .filter((e) => e.axis === `z` && e.to >= o.maxZ - 1 && !e.pedestrian)
      .sort((e, t) => e.at - t.at),
    re = 1480,
    R = [];
  for (let e of ne) {
    let t = b(`z`, e.at, o.maxZ, re, 40);
    t <= o.maxZ + 16 ||
      R.push({
        axis: `z`,
        at: e.at,
        from: o.maxZ,
        to: t,
        halfWidth: e.halfWidth,
        halfTotal: e.halfTotal,
        lanes: e.lanesPerDir,
        median: e.median,
        major: !0,
        walk: !0,
      });
  }
  for (let e of R) {
    let t = Math.min(e.to, Gh - 1);
    (x({ ...e, to: t }),
      t < e.to - 2
        ? (S(`z`, e.at, t - 0.8, e.halfTotal - 0.2, 1),
          x({ ...e, from: Uh + 12, walk: !1 }))
        : e.to < Gh - 12 && S(`z`, e.at, e.to - 1, e.halfTotal - 0.2, 1));
  }
  let z = [664, 840, 1e3, 1160, 1320];
  for (let e of z) {
    let t = e < Uh,
      n = t ? 3.6 : e === 1e3 ? 12 : 8,
      r = n + (t ? 2.2 : 4.5),
      i = o.minX + 4,
      a = o.maxX + 60,
      s = R.filter((t) => t.to >= e + r).map((e) => [
        e.at - e.halfTotal,
        e.at + e.halfTotal,
      ]),
      c = i;
    for (let [i, o] of [...s, [1e9, 1e9]]) {
      let s = c,
        l = Math.min(i, a),
        u = m(c, e);
      for (let i = c; i <= l; i += 6) {
        let a = m(i, e),
          o = a - h < (t ? 30 : 45) && a > h - 1.5 && Math.abs(a - u) < 0.66;
        if (((u = a), !o || i + 6 > l)) {
          let a = o ? l : i - 1;
          (a - s > 14 &&
            x({
              axis: `x`,
              at: e,
              from: s,
              to: a,
              halfWidth: n,
              halfTotal: r,
              lanes: t ? 1 : n > 10 ? 3 : 2,
              median: n > 10 ? 4 : 0,
              major: !t,
              walk: t,
            }),
            (s = i + 6));
        }
      }
      if (((c = o), c >= a)) break;
    }
    for (let r of R)
      r.to >= e &&
        m(r.at, e) - h < 40 &&
        u.push({
          x: r.at,
          z: e,
          halfX: r.halfWidth,
          halfZ: n,
          signal: !t,
          always: !0,
          y: Math.max(m(r.at, e), h),
        });
  }
  {
    let e = [],
      t = o.minX + 0.5;
    for (let n of R)
      (e.push([t, n.at - n.halfTotal - 0.5]), (t = n.at + n.halfTotal + 0.5));
    e.push([t, o.maxX]);
    for (let t = 0; t < e.length; t++) {
      let [n, r] = e[t];
      if (r - n < 16) continue;
      let i = { w: t > 0, e: t < e.length - 1 };
      (N(
        { x0: n, z0: o.maxZ + 6, x1: r, z1: 657.7 },
        { ...i, n: !1, s: !0 },
        !1,
      ),
        N(
          { x0: n, z0: 670.3, x1: r, z1: Gh - 0.5 },
          { ...i, n: !0, s: !1 },
          !0,
          `n`,
        ));
    }
  }
  {
    let e = o.minX,
      t = [
        ...R.filter((e) => e.to > Gh).map((e) => [
          e.at - e.halfTotal,
          e.at + e.halfTotal,
        ]),
        [1e9, 1e9],
      ];
    for (let [n, r] of t) {
      let t = Math.min(n, o.maxX + 200),
        i = e;
      for (let n = e; n < t; n += 6)
        Math.abs(m(n, Gh) - h) < 1.2 ||
          (n - i > 6 && C(n, Gh, i, Gh, `hoard`, 3), (i = n + 6));
      if ((t - i > 6 && C(t, Gh, i, Gh, `hoard`, 3), (e = r), e > o.maxX + 200))
        break;
    }
  }
  await a();
  let ie = (t, n, r, i, a, o, c, l, u) => {
      e.mainOnly(!1);
      let d = c ? qh[4 + s.int(0, 1)] : qh[s.int(0, qh.length - 1)],
        f = 0.9 + s.next() * 0.2;
      if (
        (e
          .setColor(d[0] * f, d[1] * f, d[2] * f)
          .setEmit(0, 0, 1 + s.int(0, 998)),
        e.box(t, o, n, r, a, i, 0, 55),
        e.noEmit(),
        l)
      ) {
        if (
          (e.setColor(0.36, 0.36, 0.35),
          a < 45 && s.chance(0.6)
            ? (e.detail(!0),
              e.box(
                t + s.range(-r / 4, r / 4),
                o + a,
                n + s.range(-i / 4, i / 4),
                2.4,
                1.8,
                2.4,
              ),
              e.setColor(0.55, 0.62, 0.72),
              e.cyl(
                t + s.range(-r / 4, r / 4),
                o + a,
                n + s.range(-i / 4, i / 4),
                0.9,
                1.6,
                6,
              ),
              e.detail(!1))
            : a >= 45 && e.box(t, o + a, n, r * 0.55, 3.5, i * 0.55, 0, 55),
          a > 70 &&
            (e.setColor(1, 0.12, 0.08).setEmit(6, 2, s.int(1, 99)),
            e.box(t - r * 0.25, o + a + 3.5, n, 0.5, 0.5, 0.5),
            e.box(t + r * 0.25, o + a + 3.5, n, 0.5, 0.5, 0.5),
            e.noEmit()),
          a > 60 && s.chance(0.25))
        ) {
          let c = Jh[s.int(0, Jh.length - 1)];
          (e.setColor(c[0], c[1], c[2]).setEmit(2, 0),
            e.box(t, o + a - 2.2, n, r + 0.3, 1.1, i + 0.3, 0, 51),
            e.noEmit());
        }
        if (a < 60 && s.chance(0.16)) {
          let c = Math.min(r * 0.85, s.range(9, 15)),
            l = s.range(3, 5),
            d = t + u[0] * (r / 2 - 1),
            f = n + u[1] * (i / 2 - 1),
            p = o + a,
            m = Jh[s.int(0, Jh.length - 1)];
          (e.setColor(0.2, 0.2, 0.22),
            e.boxMinMax(d - 0.15, p, f - 0.15, d + 0.15, p + 2.2, f + 0.15),
            e.setColor(m[0], m[1], m[2]).setEmit(s.range(1.6, 3), 0),
            u[0] === 0
              ? e.boxMinMax(
                  d - c / 2,
                  p + 2.2,
                  f - 0.25,
                  d + c / 2,
                  p + 2.2 + l,
                  f + 0.25,
                )
              : e.boxMinMax(
                  d - 0.25,
                  p + 2.2,
                  f - c / 2,
                  d + 0.25,
                  p + 2.2 + l,
                  f + c / 2,
                ),
            e.noEmit());
        }
        p++;
      }
    },
    ae = (e, t, n) => {
      let [r, i] = g(e);
      if (i - r > 34 || r > 70) return;
      let a = i - r > 8;
      (v(e), d.push(e));
      let o = e.x1 - e.x0,
        c = e.z1 - e.z0,
        l = Math.max(1, Math.round(o / 34)),
        u = Math.max(1, Math.round(c / 30)),
        f = o / l,
        p = c / u,
        m = t === `nangang` ? e.x0 - Hh : e.z0 - Uh;
      for (let r = 0; r < l; r++)
        for (let i = 0; i < u; i++) {
          if (s.chance(0.08)) continue;
          let o = e.x0 + f * (r + 0.5) + s.range(-2, 2),
            c = e.z0 + p * (i + 0.5) + s.range(-2, 2),
            l = f * s.range(0.62, 0.9),
            u = p * s.range(0.62, 0.9),
            [d, h] = g({
              x0: o - l / 2,
              z0: c - u / 2,
              x1: o + l / 2,
              z1: c + u / 2,
            });
          if (h - d > 9) continue;
          let _ = d;
          if (a) {
            ie(
              o,
              c,
              l * 0.85,
              u * 0.85,
              s.range(9, 20),
              _ - 0.5,
              !1,
              m < 700,
              n,
            );
            continue;
          }
          let v;
          ((v =
            t === `nangang`
              ? Math.hypot(o - 1640, c + 520) < 330
                ? s.chance(0.55)
                  ? s.range(70, 160)
                  : s.range(30, 60)
                : s.chance(0.18)
                  ? s.range(50, 95)
                  : s.range(18, 45)
              : s.chance(0.1)
                ? s.range(50, 90)
                : s.range(14, 42)),
            m < 60 && (v = Math.min(v, s.range(20, 48))),
            ie(o, c, l, u, v, _ - 0.5, v > 80 && s.chance(0.6), m < 700, n));
        }
      s.chance(t === `nangang` ? 0.22 : 0.1) &&
        O(
          e.x0 + o * s.range(0.2, 0.8),
          e.z0 + c * s.range(0.2, 0.8),
          s.range(50, 90),
          s.range(0, 6.28),
          i,
        );
    };
  {
    let e = [o.minZ - 20, ...F.map((e) => e.at), 160],
      t = [Hh + 16, ...I.filter((e) => e > Hh), te];
    for (let n = 0; n + 1 < e.length; n++)
      for (let r = 0; r + 1 < t.length; r++) {
        let i = e[n] + (n === 0 ? 0 : 16),
          a = e[n + 1] - 16,
          s = t[r] + (r === 0 ? 0 : 12),
          c = t[r + 1] - 12;
        a - i < 20 ||
          c - s < 20 ||
          i < -1e3 ||
          ae(
            { x0: s, z0: Math.max(i, o.minZ + 4), x1: c, z1: a },
            `nangang`,
            [-1, 0],
          );
      }
  }
  {
    let e = [o.minX - 30, ...R.map((e) => e.at), o.maxX + 120],
      n = [Uh + 16, ...z.filter((e) => e > Uh), re];
    for (let r = 0; r + 1 < e.length; r++)
      for (let i = 0; i + 1 < n.length; i++) {
        let a = e[r] + (r === 0 ? 0 : 16),
          o = e[r + 1] - 16,
          s = n[i] + (i === 0 ? 0 : 12),
          c = n[i + 1] - 12;
        c - s < 20 ||
          o - a < 20 ||
          a < t.westBank(s) + 60 ||
          ae({ x0: Math.max(a, -950), z0: s, x1: o, z1: c }, `south`, [0, -1]);
      }
  }
  await a();
  {
    let e = [
      { x0: o.minX - 40, z0: Uh + 14, x1: o.maxX + 260, z1: 1320 },
      { x0: Hh + 14, z0: -120, x1: 1760, z1: 700 },
    ];
    for (let n of e)
      for (let e = n.z0; e < n.z1; e += 24)
        for (let r = n.x0; r < n.x1; r += 24) {
          let n = Zh(r * 0.37 + e * 1.13),
            i = Zh(r * 1.71 - e * 0.53),
            a = r + (n - 0.5) * 24 * 0.7,
            o = e + (i - 0.5) * 24 * 0.7;
          if (t.kind(a, o) !== `land`) continue;
          let s = m(a, o) - h;
          if (
            s < 3 ||
            s > 75 ||
            Math.hypot(m(a + 4, o) - m(a - 4, o), m(a, o + 4) - m(a, o - 4)) /
              8 >
              0.5
          )
            continue;
          let c = Zh(Math.floor(a / 90) * 3.1 + Math.floor(o / 90) * 7.7),
            l = (0.75 - s / 110) * (c < 0.55 ? 1 : 0.25);
          if (Zh(a * 0.91 + o * 0.29) > l) continue;
          let u = !1;
          for (let e of d)
            if (a > e.x0 - 8 && a < e.x1 + 8 && o > e.z0 - 8 && o < e.z1 + 8) {
              u = !0;
              break;
            }
          if (u) continue;
          let f = 7 + n * 4,
            p = 7 + i * 4;
          M(a, o, f, p, 2 + Math.floor(Zh(a + o) * 3));
          let g = {
            x0: a - f / 2 - 2,
            z0: o - p / 2 - 2,
            x1: a + f / 2 + 2,
            z1: o + p / 2 + 2,
          };
          (d.push(g), v(g));
        }
  }
  let oe = Xh(d);
  return (
    e.mainOnly(!1),
    {
      lightRoads: c,
      lightNodes: u,
      buildings: p,
      blocked: oe,
      bounds: f,
      lodBoxes: l,
    }
  );
}
function Xh(e) {
  let t = new Map(),
    n = (e, t) => (e + 512) * 4096 + (t + 512);
  for (let r of e)
    for (
      let e = Math.floor((r.x0 - 3) / 64);
      e <= Math.floor((r.x1 + 3) / 64);
      e++
    )
      for (
        let i = Math.floor((r.z0 - 3) / 64);
        i <= Math.floor((r.z1 + 3) / 64);
        i++
      ) {
        let a = n(e, i),
          o = t.get(a);
        (o || t.set(a, (o = [])), o.push(r));
      }
  return (e, r) => {
    let i = t.get(n(Math.floor(e / 64), Math.floor(r / 64)));
    if (!i) return !1;
    for (let t of i)
      if (e > t.x0 - 3 && e < t.x1 + 3 && r > t.z0 - 3 && r < t.z1 + 3)
        return !0;
    return !1;
  };
}
function Zh(e) {
  let t = Math.sin(e * 127.1 + 311.7) * 43758.5453;
  return t - Math.floor(t);
}
var Qh = { uPx: { value: 0.002 }, uSplit: { value: 760 } },
  $h = `
uniform float uTime;
uniform float uNight;
uniform float uLodNear;
uniform float uPx;
uniform float uSplit;
/** 1 = the main-view copy (was the MAIN_VIEW define: one program for both views) */
uniform float uMainView;
attribute vec2 aCorner;
attribute vec3 aCol;
attribute vec4 aP;
attribute vec4 aQ;
varying vec3 vCol;
varying vec2 vC;
varying float vKind;
#include <common>
#include <fog_pars_vertex>
void main() {
  vec3 c = position;
  float kind = aP.w;
  vec3 dir = vec3(1.0, 0.0, 0.0);
  vec3 col = aCol;
  // kind 3 = streak of an 'always' road
  float always = kind > 1.5 ? step(2.5, kind) : aQ.w;
  if (kind > 1.5) {
    // car streak: slides along its road (aQ = from, to, phase, axisZ), aP.z = signed speed
    float span = aQ.y - aQ.x;
    float s = mod(aQ.z + uTime * abs(aP.z), span);
    float along = aP.z >= 0.0 ? aQ.x + s : aQ.y - s;
    if (aQ.w > 0.5) { c.z = along; dir = vec3(0.0, 0.0, sign(aP.z)); }
    else { c.x = along; dir = vec3(sign(aP.z), 0.0, 0.0); }
    float toward = dot(dir, cameraPosition - c);
    col = toward > 0.0 ? vec3(1.0, 0.9, 0.74) * 2.1 : vec3(1.0, 0.1, 0.045) * 1.7;
    col *= smoothstep(0.0, 30.0, s) * smoothstep(0.0, 30.0, span - s);
  }
  vec4 mvC = viewMatrix * vec4(c, 1.0);
  float depth = -mvC.z;
  float ext = (kind > 0.5 && kind < 1.5) ? aP.x : 0.0;
  bool mainView = uMainView > 0.5;
  bool cull = mainView ? (always < 0.5 || depth > uSplit) : (always < 0.5 ? depth - ext < uLodNear : depth < uSplit);
  if (cull) {
    gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
    vCol = vec3(0.0);
    vC = vec2(2.0);
    vKind = 0.0;
    return;
  }
  float pxW = uPx * max(depth, 1.0);
  vec4 mvPosition;
  if (kind < 0.5) {
    // lamp sprite (camera-facing), ≥ aP.y px radius; in the main view (edge districts, near the camera) only a
    // tight halo — the real lamp heads & light pools are there too
    float rw = aP.x * (mainView ? 0.42 : 1.0);
    if (mainView) col *= 0.75;
    float r = max(rw, pxW * aP.y);
    col *= clamp((rw * rw) / (r * r), 0.32, 1.0);
    mvPosition = mvC + vec4(aCorner * r, 0.0, 0.0);
  } else if (kind < 1.5) {
    // flat light wash along the carriageway (aP = halfLen, halfWidth, axisZ)
    vec3 ax = aP.z > 0.5 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
    vec3 pp = aP.z > 0.5 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 0.0, 1.0);
    float hw = max(aP.y, pxW * 1.2);
    col *= clamp(aP.y / hw, 0.45, 1.0);
    mvPosition = viewMatrix * vec4(c + ax * aCorner.x * aP.x + pp * aCorner.y * hw, 1.0);
  } else {
    // streak: ribbon between tail and head, facing the camera
    vec3 vd = normalize((viewMatrix * vec4(dir, 0.0)).xyz);
    vec3 side = cross(vd, normalize(mvC.xyz));
    side = length(side) > 1e-3 ? normalize(side) : vec3(0.0, 1.0, 0.0);
    float w = max(aP.y, pxW * 1.25);
    col *= clamp(aP.y / w, 0.4, 1.0);
    mvPosition = mvC + vec4(vd * aCorner.x * (aP.x * 0.5 + w) + side * aCorner.y * w, 0.0);
  }
  // main view: near the camera the real lamp heads and light pools take over: the grid only fills in the distance
  if (mainView) col *= smoothstep(70.0, 220.0, depth);
  vCol = col * uNight * smoothstep(0.08, 0.22, uNight);
  vC = aCorner;
  vKind = kind;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,
  eg = `
varying vec3 vCol;
varying vec2 vC;
varying float vKind;
#include <common>
#include <fog_pars_fragment>
void main() {
  float f;
  if (vKind < 0.5) {
    float r2 = dot(vC, vC);
    if (r2 > 1.0) discard;
    f = exp(-r2 * 7.0) + 0.1 * (1.0 - r2);
  } else if (vKind < 1.5) {
    float a = 1.0 - vC.y * vC.y;
    f = a * a;
  } else {
    f = (1.0 - vC.y * vC.y) * smoothstep(1.0, 0.55, abs(vC.x));
  }
  vec3 col = vCol * f;
  #ifdef USE_FOG
  // haze swallows distant lights (additive: attenuate instead of mixing towards the fog colour)
  col *= 1.0 - 0.82 * taipeiHaze(length(vFogRel), vFogRel.y);
  #endif
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  tg = class {
    cap = 0;
    nv = 0;
    ni = 0;
    pos = new Float32Array();
    corner = new Float32Array();
    col = new Float32Array();
    p = new Float32Array();
    q = new Float32Array();
    idx = new Uint32Array();
    counts = { lamps: 0, wash: 0, streaks: 0, nodes: 0 };
    constructor(e = 2048) {
      this.grow(e * 4);
    }
    grow(e) {
      let t = Math.max(e, Math.ceil(this.cap * 1.5)),
        n = (e, n, r) => {
          let i = new r(t * n);
          return (i.set(e.subarray(0, this.nv * n)), i);
        };
      ((this.pos = n(this.pos, 3, Float32Array)),
        (this.corner = n(this.corner, 2, Float32Array)),
        (this.col = n(this.col, 3, Float32Array)),
        (this.p = n(this.p, 4, Float32Array)),
        (this.q = n(this.q, 4, Float32Array)));
      let r = new Uint32Array((t / 4) * 6);
      (r.set(this.idx.subarray(0, this.ni)), (this.idx = r), (this.cap = t));
    }
    quad(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      this.nv + 4 > this.cap && this.grow(this.nv + 4);
      let m = this.nv;
      for (let h = 0; h < 4; h++) {
        let g = m + h;
        ((this.pos[g * 3] = e),
          (this.pos[g * 3 + 1] = t),
          (this.pos[g * 3 + 2] = n),
          (this.corner[g * 2] = h === 0 || h === 3 ? -1 : 1),
          (this.corner[g * 2 + 1] = h < 2 ? -1 : 1),
          (this.col[g * 3] = r),
          (this.col[g * 3 + 1] = i),
          (this.col[g * 3 + 2] = a),
          (this.p[g * 4] = o),
          (this.p[g * 4 + 1] = s),
          (this.p[g * 4 + 2] = c),
          (this.p[g * 4 + 3] = l),
          (this.q[g * 4] = u),
          (this.q[g * 4 + 1] = d),
          (this.q[g * 4 + 2] = f),
          (this.q[g * 4 + 3] = p));
      }
      let h = this.idx,
        g = this.ni;
      ((h[g] = m),
        (h[g + 1] = m + 1),
        (h[g + 2] = m + 2),
        (h[g + 3] = m),
        (h[g + 4] = m + 2),
        (h[g + 5] = m + 3),
        (this.ni = g + 6),
        (this.nv = m + 4));
    }
    lamp(e, t, n, r, i, a, o, s, c = !1) {
      (this.quad(e, t, n, a, o, s, r, i, 0, 0, 0, 0, 0, +!!c),
        this.counts.lamps++);
    }
    wash(e, t, n, r, i, a, o, s, c, l = !1) {
      (this.quad(e, t, n, o, s, c, i, a, +!!r, 1, 0, 0, 0, +!!l),
        this.counts.wash++);
    }
    streak(e, t, n, r, i, a, o, s, c, l = !1) {
      (this.quad(
        e ? t : r,
        n,
        e ? r : t,
        1,
        1,
        1,
        s,
        c,
        o,
        l ? 3 : 2,
        r,
        i,
        a,
        +!!e,
      ),
        this.counts.streaks++);
    }
    build() {
      let e = new V(),
        t = this.nv,
        n = t >= this.cap * 0.85,
        r = (e, r) => (n ? e.subarray(0, t * r) : e.slice(0, t * r));
      (e.setAttribute(`position`, new H(r(this.pos, 3), 3)),
        e.setAttribute(`aCorner`, new H(r(this.corner, 2), 2)),
        e.setAttribute(`aCol`, new H(r(this.col, 3), 3)),
        e.setAttribute(`aP`, new H(r(this.p, 4), 4)),
        e.setAttribute(`aQ`, new H(r(this.q, 4), 4)));
      let i = this.idx.subarray(0, this.ni);
      return (
        e.setIndex(
          t > 65535
            ? new H(n ? i : i.slice(), 1)
            : new H(Uint16Array.from(i), 1),
        ),
        (e.boundingSphere = new d(new U(), 8e3)),
        e
      );
    }
  },
  ng = (e, t) => {
    let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
    return n - Math.floor(n);
  };
function rg(e) {
  return new E({
    name: e ? `env-city-lights-main` : `env-city-lights`,
    uniforms: {
      ...Se.clone(ue.fog),
      uTime: q.uTime,
      uNight: q.uNight,
      uLodNear: Wm.uLodNear,
      uPx: Qh.uPx,
      uSplit: Qh.uSplit,
      uMainView: { value: +!!e },
    },
    vertexShader: $h,
    fragmentShader: eg,
    transparent: !0,
    blending: 2,
    depthWrite: !1,
    fog: !0,
  });
}
function ig(e, t, n, r) {
  let i = ag(new tg(), e, t, n, !1, r),
    a = ag(new tg(), e, t, n, !0, r),
    o = new M(i.build(), rg(!1));
  ((o.name = `env-city-lights`), (o.frustumCulled = !1), (o.renderOrder = 4));
  let s = new M(a.build(), rg(!0));
  return (
    (s.name = `env-city-lights-main`),
    (s.frustumCulled = !1),
    (s.renderOrder = 4),
    { mesh: o, main: s, counts: i.counts }
  );
}
function ag(e, t, n, r, i, a) {
  let o = [1, 0.87, 0.68],
    s = [1, 0.6, 0.26];
  for (let n of t) {
    let t = n.to - n.from;
    if (t < 8 || (i && !n.always)) continue;
    let r = n.axis === `z`,
      c = n.y ?? 0,
      l = ng(n.at, n.from),
      u = !n.major && l < 0.45 ? s : o,
      d = n.halfWidth > 9,
      f = n.pedestrian ? 24 : (n.major ? 31 : 42) * (a.thin ?? 1),
      p = n.major ? 2.6 : n.pedestrian ? 2.2 : 1.8,
      m = d ? 3.6 : n.major ? 3.1 : 2.3,
      h = d ? 1.9 : n.major ? 1.6 : 1.25,
      g = n.halfWidth + 0.8,
      _ = 0,
      v = n.major || n.halfWidth > 5.5;
    for (let t = n.from + f * 0.5 + l * 6; t < n.to - 4; t += f, _++) {
      let i = v || _ % 2 == 0 ? -1 : 1,
        a = v ? 1 : i;
      for (let o = i; o <= a; o += 2) {
        let i = t + (o > 0 && n.major ? f * 0.5 : 0);
        if (i > n.to - 4) continue;
        let a = n.at + o * g,
          s = p * (0.85 + 0.3 * ng(i, a));
        e.lamp(
          r ? a : i,
          c + 7.5,
          r ? i : a,
          m,
          h,
          u[0] * s,
          u[1] * s,
          u[2] * s,
          n.always,
        );
      }
      if (n.median >= 3 && _ % 2 == 0) {
        let i = p * 0.9;
        e.lamp(
          r ? n.at : t,
          c + 9,
          r ? t : n.at,
          m,
          h,
          o[0] * i,
          o[1] * i,
          o[2] * i,
          n.always,
        );
      }
    }
    let y = Math.max(1, Math.round(t / 64)),
      b = t / y,
      x = n.major ? 0.16 : 0.11;
    for (let t = 0; t < y; t++) {
      let i = n.from + b * (t + 0.5);
      e.wash(
        r ? n.at : i,
        c + 0.35,
        r ? i : n.at,
        r,
        b * 0.5,
        n.halfWidth + 2.2,
        u[0] * x,
        u[1] * x * 0.95,
        u[2] * x * 0.9,
        n.always,
      );
    }
    if (!n.pedestrian && n.lanesPerDir >= 2 && t > 120)
      for (let i = 0; i < 2; i++) {
        let o = i === 0 ? 1 : -1;
        for (let i = 0; i < Math.min(3, n.lanesPerDir); i++) {
          let s = ke(n.median * 0.5, i, a.laneWidth, a.side) * (r ? -o : o),
            l = Math.max(
              1,
              Math.floor(t / ((n.major ? 62 : 90) * (a.thin ?? 1))),
            );
          for (let a = 0; a < l; a++) {
            let l = ng(a * 3.1 + i, n.at + o * 17) * t,
              u = (11 + 6 * ng(a, i + o * 5 + n.at)) * o;
            e.streak(
              r,
              n.at + s,
              c + 0.9,
              n.from,
              n.to,
              l,
              u,
              5 + 3 * ng(a + 9, i),
              0.9,
              n.always,
            );
          }
        }
      }
  }
  for (let t of r) e.lamp(t.x, t.y, t.z, 2.4, 1.3, 2, 1.62, 1.1, !0);
  for (let t of n) {
    if (i && !t.always) continue;
    let n = t.y ?? 0,
      r = Math.max(t.halfX, t.halfZ),
      a = t.signal ? 0.55 : 0.32;
    if (
      (e.lamp(
        t.x,
        n + 2,
        t.z,
        r * 1.25,
        2.2,
        1 * a,
        0.8 * a,
        0.58 * a,
        t.always,
      ),
      t.signal)
    )
      for (let [r, i] of [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
      ])
        e.lamp(
          t.x + r * (t.halfX + 1.5),
          n + 8,
          t.z + i * (t.halfZ + 1.5),
          3.2,
          1.7,
          2.6,
          2.3,
          1.85,
          t.always,
        );
    e.counts.nodes++;
  }
  return e;
}
var og = new v(),
  sg = new De(),
  cg = new U(),
  lg = class {
    cam = new U();
    maxDist = 1 / 0;
    detailDist = 0;
    test = (e) =>
      this.maxDist < 1 / 0 && e.distanceToPoint(this.cam) > this.maxDist
        ? !1
        : og.intersectsBox(e);
    testDetail = (e) =>
      this.detailDist <= 0 || e.distanceToPoint(this.cam) > this.detailDist
        ? !1
        : og.intersectsBox(e);
    set(e, t = 1 / 0) {
      return (
        sg.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        og.setFromProjectionMatrix(sg, e.coordinateSystem, e.reversedDepth),
        this.cam.setFromMatrixPosition(e.matrixWorld),
        (this.maxDist = t),
        this
      );
    }
  };
function ug(e, t, n, r) {
  let i = Math.max(1, Math.ceil((t.x1 - t.x0) / n)),
    a = Math.max(1, Math.ceil((t.z1 - t.z0) / n)),
    o = new Float64Array(i * a);
  for (let s of e) {
    let e = r(s);
    if (e <= 0 || s.count <= 0) continue;
    let c = s.box,
      l = Math.max(0, Math.ceil((c.min.x - e - t.x0) / n) - 1),
      u = Math.min(i - 1, Math.floor((c.max.x + e - t.x0) / n)),
      d = Math.max(0, Math.ceil((c.min.z - e - t.z0) / n) - 1),
      f = Math.min(a - 1, Math.floor((c.max.z + e - t.z0) / n));
    for (let r = l; r <= u; r++) {
      let i = t.x0 + r * n,
        l = Math.max(0, c.min.x - (i + n), i - c.max.x);
      for (let i = d; i <= f; i++) {
        let u = t.z0 + i * n,
          d = Math.max(0, c.min.z - (u + n), u - c.max.z);
        l * l + d * d <= e * e && (o[r * a + i] += s.count);
      }
    }
  }
  let s = 0;
  for (let e = 0; e < o.length; e++) o[e] > s && (s = o[e]);
  return s;
}
var dg = class {
    tiles = [];
    index;
    total;
    constructor(e, t, n, r) {
      let i = e.index.array,
        a = e.attributes.position.array,
        o = e.attributes.position.count,
        s = Math.floor(i.length / 3),
        c = new Int32Array(s),
        l = new Map(),
        u = [],
        d = [],
        f = new Map(),
        p = 1 << 24,
        m = 1 << 25;
      for (let e = 0; e < s; e++) {
        let r = i[e * 3],
          o = i[e * 3 + 1],
          s = i[e * 3 + 2],
          h = n ? n(r, o, s) : null,
          g;
        if (h === null || h === `detail` || h === `main`) {
          let e = (a[r * 3] + a[o * 3] + a[s * 3]) / 3,
            n = (a[r * 3 + 2] + a[o * 3 + 2] + a[s * 3 + 2]) / 3;
          g =
            (Math.floor(e / t) + 2048) * 4096 +
            (Math.floor(n / t) + 2048) +
            (h === `detail` ? m : h === `main` ? p : 0);
        } else {
          let e = f.get(h);
          (e === void 0 && f.set(h, (e = -1 - f.size)), (g = e));
        }
        let _ = l.get(g);
        (_ === void 0 && ((_ = u.length), l.set(g, _), u.push(g), d.push(0)),
          (c[e] = _),
          (d[_] += 3));
      }
      let h = new Map();
      for (let [e, t] of f) h.set(t, e);
      ((this.total = s * 3),
        (this.index =
          o <= 65536
            ? new Uint16Array(this.total)
            : new Uint32Array(this.total)));
      let g = new Int32Array(u.length),
        _ = [],
        v = 0;
      for (let e = 0; e < u.length; e++)
        ((g[e] = v), (v += d[e]), _.push(new xe()));
      let y = this.index;
      for (let e = 0; e < s; e++) {
        let t = c[e],
          n = _[t],
          r = g[t];
        for (let t = 0; t < 3; t++) {
          let o = i[e * 3 + t];
          ((y[r++] = o),
            n.expandByPoint(cg.set(a[o * 3], a[o * 3 + 1], a[o * 3 + 2])));
        }
        g[t] = r;
      }
      v = 0;
      for (let e = 0; e < u.length; e++) {
        let t = u[e],
          n = _[e];
        (r && r(t < 0 ? h.get(t) : ``, n),
          this.tiles.push({
            start: v,
            count: d[e],
            box: n,
            detail: t >= m,
            mainOnly: t >= p && t < m,
          }),
          (v += d[e]));
      }
    }
    maxVisible(e, t) {
      let n = this.tiles;
      if (!t) {
        let t = 0;
        for (let r of n) !r.detail && (e || !r.mainOnly) && (t += r.count);
        return t;
      }
      let { area: r, dist: i, detailDist: a } = t;
      return ug(n, r, 150, (t) => (t.mainOnly && !e ? 0 : t.detail ? a : i));
    }
    view(e, t = !0, n) {
      return new fg(this, e, t, Math.max(3, this.maxVisible(t, n)));
    }
  },
  fg = class {
    t;
    allowMainOnly;
    geometry = new V();
    idx;
    vis;
    first = !0;
    tris = 0;
    visibleTiles = 0;
    capacity;
    grown = 0;
    constructor(e, t, n = !0, r = e.total) {
      ((this.t = e), (this.allowMainOnly = n));
      for (let e of Object.keys(t.attributes))
        this.geometry.setAttribute(e, t.attributes[e]);
      ((this.capacity = Math.min(e.total, r)),
        (this.idx = this.makeIndex(this.capacity)),
        this.geometry.setDrawRange(0, 0),
        (this.geometry.boundingSphere = new d(new U(), 1e7)),
        (this.vis = new Uint8Array(e.tiles.length)));
    }
    get total() {
      return this.t.total;
    }
    makeIndex(e) {
      let t = this.t.index instanceof Uint16Array ? Uint16Array : Uint32Array,
        n = new H(new t(e), 1);
      return (n.setUsage(b), this.geometry.setIndex(n), n);
    }
    update(e, t) {
      let n = this.t.tiles,
        r = this.first,
        i = 0;
      for (let a = 0; a < n.length; a++) {
        let o = n[a],
          s = (
            o.detail
              ? t && t(o.box)
              : (!o.mainOnly || this.allowMainOnly) && e(o.box)
          )
            ? 1
            : 0;
        (s !== this.vis[a] && ((this.vis[a] = s), (r = !0)),
          s && (i += o.count));
      }
      if (!r) return this.geometry.drawRange.count;
      ((this.first = !1),
        i > this.capacity &&
          ((this.capacity = Math.min(this.t.total, Math.ceil(i * 1.25))),
          (this.idx = this.makeIndex(this.capacity)),
          this.grown++));
      let a = this.idx.array,
        o = this.t.index,
        s = 0,
        c = 0;
      for (let e = 0; e < n.length; e++) {
        if (!this.vis[e]) continue;
        let t = n[e];
        (a.set(o.subarray(t.start, t.start + t.count), s), (s += t.count), c++);
      }
      return (
        this.geometry.setDrawRange(0, s),
        this.idx.clearUpdateRanges(),
        this.idx.addUpdateRange(0, Math.max(3, s)),
        (this.idx.needsUpdate = !0),
        (this.tris = s / 3),
        (this.visibleTiles = c),
        s
      );
    }
  },
  pg = class e {
    mesh;
    tiles;
    mat;
    col;
    vis;
    first = !0;
    visible = 0;
    dropped = 0;
    constructor(t, n, i, a, o) {
      if (((this.mesh = t), n instanceof e))
        ((this.tiles = n.tiles), (this.mat = n.mat), (this.col = n.col));
      else {
        this.tiles = [];
        let e = n.length,
          t = new Map();
        for (let r = 0; r < e; r++) {
          let e = n[r].elements,
            i =
              (Math.floor(e[12] / a) + 2048) * 4096 +
              (Math.floor(e[14] / a) + 2048),
            o = t.get(i);
          (o || t.set(i, (o = [])), o.push(r));
        }
        ((this.mat = new Float32Array(e * 16)),
          (this.col = i ? new Float32Array(e * 3) : null));
        let r = 0;
        for (let e of t.values()) {
          let t = new xe();
          for (let a = 0; a < e.length; a++) {
            let s = n[e[a]];
            (s.toArray(this.mat, (r + a) * 16),
              this.col && i && i[e[a]].toArray(this.col, (r + a) * 3));
            let c = s.elements,
              l = Math.max(
                Math.hypot(c[0], c[1], c[2]),
                Math.hypot(c[4], c[5], c[6]),
                Math.hypot(c[8], c[9], c[10]),
              );
            (t.expandByPoint(
              cg.set(c[12] - o * l, c[13] - o * l * 0.2, c[14] - o * l),
            ),
              t.expandByPoint(
                cg.set(c[12] + o * l, c[13] + o * l * 2, c[14] + o * l),
              ));
          }
          (this.tiles.push({ start: r, count: e.length, box: t }),
            (r += e.length));
        }
      }
      ((this.vis = new Uint8Array(this.tiles.length)),
        t &&
          (t.instanceMatrix.setUsage(b),
          this.col &&
            !t.instanceColor &&
            (t.instanceColor = new r(
              new Float32Array(t.instanceMatrix.count * 3),
              3,
            )),
          t.instanceColor?.setUsage(b),
          (t.count = 0),
          (t.frustumCulled = !1)));
    }
    get count() {
      return this.mat.length / 16;
    }
    maxWithin(e, t, n = 40) {
      return ug(this.tiles, t, n, () => e);
    }
    update(e) {
      let t = this.mesh;
      if (!t) return 0;
      let n = this.tiles,
        r = this.first;
      for (let t = 0; t < n.length; t++) {
        let i = +!!e(n[t].box);
        i !== this.vis[t] && ((this.vis[t] = i), (r = !0));
      }
      if (!r) return this.visible;
      this.first = !1;
      let i = t.instanceMatrix.array,
        a = t.instanceColor ? t.instanceColor.array : null,
        o = i.length / 16,
        s = 0;
      this.dropped = 0;
      for (let e = 0; e < n.length; e++) {
        if (!this.vis[e]) continue;
        let t = n[e],
          r = Math.min(t.count, o - s);
        (r < t.count && (this.dropped += t.count - r),
          !(r <= 0) &&
            (i.set(this.mat.subarray(t.start * 16, (t.start + r) * 16), s * 16),
            a &&
              this.col &&
              a.set(this.col.subarray(t.start * 3, (t.start + r) * 3), s * 3),
            (s += r)));
      }
      t.count = s;
      let c = t.instanceMatrix;
      if (
        (c.clearUpdateRanges(),
        c.addUpdateRange(0, Math.max(16, s * 16)),
        (c.needsUpdate = !0),
        t.instanceColor)
      ) {
        let e = t.instanceColor;
        (e.clearUpdateRanges(),
          e.addUpdateRange(0, Math.max(3, s * 3)),
          (e.needsUpdate = !0));
      }
      return ((this.visible = s), s);
    }
  },
  mg = new De(),
  hg = class {
    move;
    turn;
    enabled;
    gate;
    frustum = new v();
    cam = new U();
    maxDist = 1 / 0;
    detailDist = 0;
    constructor(e = 3, t = j.degToRad(3), n = !0, r = 120) {
      ((this.move = e),
        (this.turn = t),
        (this.enabled = n),
        (this.gate = new He(e, t, r)));
    }
    get rebuilds() {
      return this.gate.rebuilds;
    }
    test = (e) =>
      this.maxDist < 1 / 0 &&
      e.distanceToPoint(this.cam) > this.maxDist + this.move
        ? !1
        : this.frustum.intersectsBox(e);
    testDetail = (e) =>
      this.detailDist <= 0 ||
      e.distanceToPoint(this.cam) > this.detailDist + this.move
        ? !1
        : this.frustum.intersectsBox(e);
    stale(e, t = !1) {
      return !this.enabled || this.gate.stale(e, t);
    }
    set(e, t = 1 / 0) {
      return (
        this.cam.setFromMatrixPosition(e.matrixWorld),
        (this.maxDist = t),
        this.enabled
          ? (this.frustum = this.gate.set(e))
          : (mg.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            this.frustum.setFromProjectionMatrix(
              mg,
              e.coordinateSystem,
              e.reversedDepth,
            )),
        this
      );
    }
  },
  gg = 512,
  _g = 320,
  vg = [0.985, 0.978],
  yg = [0.006, 0.216, 0.47, 0.92],
  bg = [0.51, 0.216, 0.95, 0.92],
  xg = [0.012, 0.19],
  Sg = 0.62;
function Cg(e = 4) {
  let t = document.createElement(`canvas`);
  ((t.width = gg), (t.height = _g));
  let n = t.getContext(`2d`);
  (n.clearRect(0, 0, gg, _g),
    (n.fillStyle = `#fff`),
    n.fillRect(496, 0, 16, 16));
  let r = new Oe(986711);
  for (let e = 0; e < 3; e++) {
    let t = e === 0 ? 190 : e === 1 ? 280 : 170,
      i = e === 0 ? 74 : e === 1 ? 102 : 110;
    for (let a = 0; a < t; a++) {
      let t = r.range(0, Math.PI * 2),
        a = Math.sqrt(r.next()) * i,
        o = 120 + Math.cos(t) * a,
        s = 132 + Math.sin(t) * a * 0.9,
        c = r.range(10, 18),
        l = c * r.range(0.36, 0.5),
        u = (1 - s / 256) * 0.55 + (1 - o / 240) * 0.2,
        d =
          (e === 0 ? 0.5 : e === 1 ? 0.75 : 0.97) *
          (0.72 + u * 0.5) *
          r.range(0.85, 1.12),
        f = r.range(-12, 12);
      (n.save(),
        n.translate(o, s),
        n.rotate(r.range(0, Math.PI * 2)),
        (n.fillStyle = `rgb(${Math.round((196 + f) * d)},${Math.round(232 * d)},${Math.round((168 - f * 0.6) * d)})`),
        n.beginPath(),
        n.ellipse(0, 0, c / 2, l / 2, 0, 0, Math.PI * 2),
        n.fill(),
        (n.strokeStyle = `rgba(255,255,235,${0.1 + u * 0.12})`),
        (n.lineWidth = 1),
        n.beginPath(),
        n.moveTo(-c * 0.4, 0),
        n.lineTo(c * 0.4, 0),
        n.stroke(),
        n.restore());
    }
  }
  for (let e = 0; e < 2; e++) {
    let t = e === 0 ? 16 : 22;
    for (let i = 0; i < t; i++) {
      let t = r.range(0, Math.PI * 2),
        i = r.range(0, 40),
        a = 376 + Math.cos(t) * i,
        o = 132 + Math.sin(t) * i,
        s = t + r.range(-0.6, 0.6),
        c = r.range(50, 95),
        l = e === 0 ? 0.55 : 0.9;
      ((n.strokeStyle = `rgba(70,60,45,${e === 0 ? 0.5 : 0.8})`),
        (n.lineWidth = 1.2),
        n.beginPath(),
        n.moveTo(a, o),
        n.lineTo(a + Math.cos(s) * c, o + Math.sin(s) * c),
        n.stroke());
      let u = Math.round(c / 3.2);
      for (let e = 0; e < u; e++) {
        let t = (e + 0.5) / u,
          i = a + Math.cos(s) * c * t,
          d = o + Math.sin(s) * c * t;
        for (let e of [-1, 1]) {
          let a = s + e * r.range(0.5, 0.9),
            o = r.range(9, 15) * (1 - t * 0.35),
            c =
              l *
              (0.72 + ((1 - d / 256) * 0.5 + 0.25) * 0.5) *
              r.range(0.85, 1.1);
          (n.save(),
            n.translate(i + Math.cos(a) * o * 0.5, d + Math.sin(a) * o * 0.5),
            n.rotate(a),
            (n.fillStyle = `rgb(${Math.round(176 * c)},${Math.round(224 * c)},${Math.round(176 * c)})`),
            n.beginPath(),
            n.ellipse(0, 0, o / 2, 1.7, 0, 0, Math.PI * 2),
            n.fill(),
            n.restore());
        }
      }
    }
  }
  ((n.fillStyle = `rgb(58,74,48)`), n.fillRect(0, 258, gg, 60));
  for (let e = 0; e < 2600; e++) {
    let e = r.range(0, gg),
      t = r.range(259, 317),
      i = r.range(3, 6),
      a = i * r.range(0.35, 0.5),
      o = r.range(0.55, 1.05);
    (n.save(),
      n.translate(e, t),
      n.rotate(r.range(0, Math.PI * 2)),
      (n.fillStyle = `rgb(${Math.round(150 * o)},${Math.round(186 * o)},${Math.round(128 * o)})`),
      n.beginPath(),
      n.ellipse(0, 0, i / 2, a / 2, 0, 0, Math.PI * 2),
      n.fill(),
      n.restore());
  }
  let i = new Te(t);
  return (
    (i.name = `env-forest-leaves`),
    (i.colorSpace = c),
    (i.premultiplyAlpha = !0),
    (i.generateMipmaps = !0),
    (i.minFilter = le),
    (i.magFilter = ge),
    (i.anisotropy = Math.min(4, e)),
    (i.needsUpdate = !0),
    i
  );
}
var wg = class {
    pos = [];
    nrm = [];
    col = [];
    uv = [];
    idx = [];
    get n() {
      return this.pos.length / 3;
    }
    build() {
      let e = new V();
      return (
        e.setAttribute(`position`, new N(this.pos, 3)),
        e.setAttribute(`normal`, new N(this.nrm, 3)),
        e.setAttribute(`color`, new N(this.col, 3)),
        e.setAttribute(`uv`, new N(this.uv, 2)),
        e.setIndex(this.idx),
        e.computeBoundingSphere(),
        e
      );
    }
  },
  Tg = (e, t, n) => {
    let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
    return r - Math.floor(r);
  },
  Eg = new U(),
  Dg = new U(),
  Og = new U(),
  kg = new U(),
  Ag = new U(),
  jg = new U(),
  Mg = new U(),
  Ng = new U(),
  Pg = new W();
function Fg(e, t) {
  let [n, r, i] = t.centre,
    a = 1 / 0,
    o = -1 / 0;
  for (let e of t.lobes)
    ((a = Math.min(a, e.c[1] - e.r[1])), (o = Math.max(o, e.c[1] + e.r[1])));
  let s = 0.12 * (o - a),
    c = (e, a, o, c) => c.set(e - n, (a - r) * t.ny + s, o - i).normalize();
  for (let n = 0; n < t.lobes.length; n++) {
    let r = t.lobes[n],
      i = new re(1, 0);
    (i.rotateY(Tg(t.seed, n, 9) * 6.28),
      i.scale(r.r[0] * 0.56, r.r[1] * 0.52, r.r[2] * 0.56),
      i.translate(r.c[0], r.c[1] - r.r[1] * 0.05, r.c[2]));
    let s = i.toNonIndexed().attributes.position,
      l = e.n;
    for (let r = 0; r < s.count; r++) {
      let i = s.getX(r),
        u = s.getY(r),
        d = s.getZ(r);
      (e.pos.push(i, u, d), c(i, u, d, Dg), e.nrm.push(Dg.x, Dg.y, Dg.z));
      let f = (u - a) / Math.max(0.01, o - a);
      (Pg.copy(t.bottom)
        .lerp(t.top, 0.25 + 0.75 * f)
        .multiplyScalar(0.8 / Sg),
        e.col.push(Pg.r, Pg.g, Pg.b));
      let p = Math.floor(r / 3),
        m = r % 3,
        h = 0.02 + Tg(t.seed, n * 131 + p, 10) * 0.8,
        g = xg[0],
        _ = xg[1] - xg[0];
      (e.uv.push(
        m === 0 ? h : m === 1 ? h + 0.16 : h + 0.08,
        m === 2 ? g + _ : g,
      ),
        e.idx.push(l + r));
    }
  }
  let [l, u, d, f] = t.uv,
    p = [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ];
  for (let s = 0; s < t.lobes.length; s++) {
    let m = t.lobes[s];
    for (let h = 0; h < m.cards; h++) {
      let g = Tg(t.seed, s * 97 + h, 1),
        _ = Tg(t.seed, s * 97 + h, 2),
        v = Tg(t.seed, s * 97 + h, 3),
        y = g * Math.PI * 2,
        b = Math.acos(1 - 1.85 * _),
        x = 0.62 + v * 0.4;
      (Eg.set(
        m.c[0] + Math.sin(b) * Math.cos(y) * m.r[0] * x,
        m.c[1] + Math.cos(b) * m.r[1] * x,
        m.c[2] + Math.sin(b) * Math.sin(y) * m.r[2] * x,
      ),
        Dg.set(
          Eg.x - n + (Tg(t.seed, s * 97 + h, 11) - 0.5) * 1.4 * m.r[0],
          (Eg.y - r) * 0.45 * t.ny,
          Eg.z - i + (Tg(t.seed, s * 97 + h, 12) - 0.5) * 1.4 * m.r[2],
        ).normalize(),
        Ag.set(Tg(t.seed, h, 4) - 0.5, 1, Tg(t.seed, h, 5) - 0.5).normalize(),
        Og.crossVectors(Ag, Dg),
        Og.lengthSq() < 1e-6 && Og.set(1, 0, 0),
        Og.normalize(),
        kg.crossVectors(Dg, Og).normalize());
      let S = Tg(t.seed, s * 97 + h, 6) * Math.PI * 2,
        C = Math.cos(S),
        w = Math.sin(S);
      (jg.copy(Og).multiplyScalar(C).addScaledVector(kg, w),
        Mg.copy(kg).multiplyScalar(C).addScaledVector(Og, -w));
      let T = (Tg(t.seed, h, 7) - 0.5) * 0.7;
      Mg.addScaledVector(Dg, T).normalize();
      let E = m.size * (0.8 + Tg(t.seed, s * 97 + h, 8) * 0.45),
        D = (Eg.y - a) / Math.max(0.01, o - a),
        O =
          (0.62 + 0.38 * Math.min(1, D * 1.15)) *
          (0.74 + 0.26 * ((x - 0.62) / 0.4)),
        k = 0.9 + Tg(t.seed, h, 9) * 0.2;
      Pg.copy(t.bottom)
        .lerp(t.top, Math.min(1, D * 0.7 + 0.3))
        .multiplyScalar((O * k) / Sg);
      let A = e.n;
      for (let [t, n] of p) {
        let r = Eg.x + (jg.x * t + Mg.x * n) * E * 0.5,
          i = Eg.y + (jg.y * t + Mg.y * n) * E * 0.5,
          a = Eg.z + (jg.z * t + Mg.z * n) * E * 0.5;
        (e.pos.push(r, i, a),
          c(r, i, a, Ng),
          e.nrm.push(Ng.x, Ng.y, Ng.z),
          e.col.push(Pg.r, Pg.g, Pg.b),
          e.uv.push(l + ((t + 1) / 2) * (d - l), u + ((n + 1) / 2) * (f - u)));
      }
      e.idx.push(A, A + 1, A + 2, A, A + 2, A + 3);
    }
  }
}
function Ig(e, t, n, r, i, a, o, s, c, l, u, d) {
  let f = new U(t, n, r),
    p = new U(i, a, o),
    m = f.distanceTo(p),
    h = new T(c, s, m, l, 1, !0);
  (h.applyQuaternion(
    new Ce().setFromUnitVectors(new U(0, 1, 0), p.clone().sub(f).normalize()),
  ),
    h.translate((t + i) / 2, (n + a) / 2, (r + o) / 2));
  let g = h.attributes.position,
    _ = h.attributes.normal,
    v = e.n;
  for (let t = 0; t < g.count; t++) {
    (e.pos.push(g.getX(t), g.getY(t), g.getZ(t)),
      e.nrm.push(_.getX(t), _.getY(t), _.getZ(t)));
    let r = Math.min(
      1,
      Math.max(
        0,
        (g.getY(t) - Math.min(n, a)) / Math.max(0.01, Math.abs(a - n)),
      ),
    );
    (Pg.copy(d).lerp(u, r),
      e.col.push(Pg.r, Pg.g, Pg.b),
      e.uv.push(vg[0], vg[1]));
  }
  let y = h.index.array;
  for (let t = 0; t < y.length; t++) e.idx.push(v + y[t]);
}
var Lg = new W(0.25, 0.19, 0.13),
  Rg = new W(0.16, 0.12, 0.085);
function zg() {
  let e = new W(0.19, 0.29, 0.075),
    t = new W(0.045, 0.08, 0.03),
    n = new W(0.12, 0.22, 0.07),
    r = new W(0.03, 0.062, 0.026),
    i = new wg();
  (Ig(i, 0, -0.1, 0, 0, 4.5, 0, 0.42, 0.26, 6, Lg, Rg),
    Ig(i, 0, 3.6, 0, 2.3, 5, 1.1, 0.2, 0.1, 5, Lg, Rg),
    Ig(i, 0, 3.9, 0, -1.9, 5.3, -1.4, 0.18, 0.09, 5, Lg, Rg),
    Fg(i, {
      centre: [0.2, 5.6, -0.1],
      ny: 1.1,
      top: e,
      bottom: t,
      uv: yg,
      seed: 11,
      lobes: [
        { c: [0, 6.3, 0], r: [4.4, 3.7, 4.4], cards: 36, size: 2.7 },
        { c: [3, 4.6, 1.5], r: [3.2, 2.7, 3.2], cards: 18, size: 2.3 },
        { c: [-2.4, 5, -1.9], r: [2.9, 2.5, 2.9], cards: 17, size: 2.2 },
      ],
    }),
    Fg(i, {
      centre: [1.6, 0.8, -2.6],
      ny: 1.2,
      top: n,
      bottom: r,
      uv: yg,
      seed: 23,
      lobes: [{ c: [1.6, 1, -2.6], r: [1.7, 1.2, 1.7], cards: 9, size: 1.35 }],
    }));
  let a = new wg();
  return (
    Ig(a, 0, -0.1, 0, 0, 7.6, 0, 0.34, 0.18, 6, Lg, Rg),
    Fg(a, {
      centre: [0.1, 7.6, 0],
      ny: 0.55,
      top: n,
      bottom: r,
      uv: bg,
      seed: 37,
      lobes: [
        { c: [0, 9, 0], r: [2.3, 4.6, 2.3], cards: 22, size: 2 },
        { c: [0.3, 5.6, -0.2], r: [2.9, 3.2, 2.9], cards: 18, size: 2.2 },
      ],
    }),
    [i.build(), a.build()]
  );
}
function Bg() {
  let e = new W(0.15, 0.25, 0.07),
    t = new W(0.035, 0.07, 0.028),
    n = new wg();
  return (
    Fg(n, {
      centre: [0, 0.6, 0],
      ny: 1.2,
      top: e,
      bottom: t,
      uv: yg,
      seed: 53,
      lobes: [
        { c: [0, 0.85, 0], r: [1.5, 1, 1.5], cards: 11, size: 1.35 },
        { c: [0.9, 0.55, 0.6], r: [0.9, 0.65, 0.9], cards: 5, size: 1.05 },
      ],
    }),
    n.build()
  );
}
function Vg(e, t, n, r) {
  let i = { m: [], c: [] },
    a = new Ce(),
    o = new U(),
    s = new U(),
    c = new U(0, 1, 0),
    l = 0;
  for (let u = n.z0; u < n.z1; u += r)
    for (let d = n.x0; d < n.x1; d += r) {
      l++;
      let n = d + (Tg(l, 1, 13) - 0.5) * r * 0.95,
        f = u + (Tg(l, 2, 13) - 0.5) * r * 0.95,
        p = e(n, f);
      if (!t(n, f, p)) continue;
      let m = 0.55 + Tg(l, 3, 13) * 0.75;
      (s.set(n, p - 0.15, f),
        a.setFromAxisAngle(c, Tg(l, 4, 13) * Math.PI * 2),
        o.set(
          m * (0.85 + Tg(l, 5, 13) * 0.35),
          m * (0.75 + Tg(l, 6, 13) * 0.5),
          m,
        ),
        i.m.push(new De().compose(s, a, o)));
      let h = 0.8 + Tg(l, 7, 13) * 0.4,
        g = Tg(l, 8, 13) < 0.2 ? 1.12 : 1;
      i.c.push(new W(h * g, h, h * (g > 1 ? 0.8 : 1)));
    }
  return i;
}
function Hg(e) {
  let t = new D({ vertexColors: !0, map: e, alphaTest: 0.45, side: 2 });
  return (
    (t.name = `env-trees-near`),
    (t.defines = { FOG_NO_CLIP: `` }),
    (t.onBeforeCompile = (e) => {
      ((e.uniforms.uTreeFade = nm.uTreeFade),
        (e.uniforms.uWindAmt = nm.uWindAmt),
        (e.uniforms.uTime = q.uTime),
        (e.uniforms.uWet = q.uWet),
        (e.uniforms.uNight = q.uNight),
        (e.uniforms.uSunDir = q.uSunDir),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform vec2 uTreeFade;
uniform float uWindAmt;
uniform float uTime;
varying vec3 vFW;`,
          )
          .replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
        {
          #ifdef USE_INSTANCING
          mat4 tM = modelMatrix * instanceMatrix;
          #else
          mat4 tM = modelMatrix;
          #endif
          vec4 tiW = tM * vec4(0.0, 0.0, 0.0, 1.0);
          float tdist = distance(tiW.xyz, cameraPosition);
          float tk = 1.0 - smoothstep(uTreeFade.x, uTreeFade.y, tdist);
          float h = max(transformed.y - 2.5, 0.0) / 6.0;
          float sw = sin(uTime * 1.4 + tiW.x * 0.05 + tiW.z * 0.07) + 0.5 * sin(uTime * 2.3 + tiW.z * 0.11);
          // leaf flutter on top of the crown sway (cards only move at their own phase)
          float fl = sin(uTime * 4.1 + position.x * 1.7 + position.z * 1.3 + tiW.x) * 0.035 * uWindAmt * h;
          transformed.x += sw * 0.12 * uWindAmt * h + fl;
          transformed.z += sw * 0.07 * uWindAmt * h - fl;
          transformed *= tk;
          vFW = (tM * vec4(transformed, 1.0)).xyz;
        }`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform float uWet;
uniform float uNight;
uniform vec3 uSunDir;
varying vec3 vFW;`,
          )
          .replace(
            `#include <map_fragment>`,
            `{
          // camera inside a crown (trail switchbacks): dither the leaves away within ~1.6 m of the eye
          float tcd = distance(vFW, cameraPosition);
          if (tcd < 1.6) {
            if (tcd < 1.1) discard;
            vec2 tq = mod(floor(gl_FragCoord.xy), 4.0);
            float tb = mod(tq.x * 4.0 + tq.y * 11.0 + tq.x * tq.y * 3.0, 16.0) / 16.0;
            if (tb > (tcd - 1.1) / 0.5) discard;
          }
        }
        vec4 fTex = texture2D(map, vMapUv);
        {
          // alpha-tested leaves thin out in the small mips: raise coverage with the mip level
          vec2 tdx = dFdx(vMapUv) * vec2(${gg}.0, ${_g}.0), tdy = dFdy(vMapUv) * vec2(${gg}.0, ${_g}.0);
          float mipL = max(0.0, 0.5 * log2(max(dot(tdx, tdx), dot(tdy, tdy))));
          fTex.rgb /= max(fTex.a, 1e-4);
          fTex.a = min(1.0, fTex.a * (1.0 + 0.3 * mipL));
        }
        diffuseColor *= fTex;`,
          )
          .replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.2 * uWet;`,
          )
          .replace(
            `#include <normal_fragment_begin>`,
            `float faceDirection = 1.0;
vec3 normal = normalize( vNormal );`,
          )
          .replace(
            `#include <emissivemap_fragment>`,
            `#include <emissivemap_fragment>
        {
          // sunlight through the leaves when the crown is backlit
          vec3 sdv = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
          float bl = pow(max(0.0, dot(normalize(-vViewPosition), sdv)), 3.0) * max(0.0, uSunDir.y + 0.05);
          totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.9, 0.5) * bl * 0.9 * (1.0 - uNight);
        }`,
          )));
    }),
    (t.customProgramCacheKey = () => `env-trees-near-v1`),
    t
  );
}
var Ug = [`clear`, `cloudy`, `rain`, `storm`, `fog`],
  Wg = 0.35,
  Gg = 0.08,
  Kg = 700,
  qg = [
    { rect: { minX: -804.05, minZ: 446.5, maxX: -796.85, maxZ: 540 }, y: 7.3 },
  ];
function Jg(e, t = !1) {
  if (
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`gpumem`) !== `0`
  ) {
    e.setIndex(null);
    for (let n of Object.keys(e.attributes)) {
      if (t && n === `position`) continue;
      let r = e.attributes[n];
      r.isBufferAttribute &&
        r.usage === 35044 &&
        r.onUpload(function () {
          let e = this.array.constructor;
          this.array = new e(0);
        });
    }
  }
}
var Yg = [7e5, 104e4],
  Xg = [67e3, 100500];
function Zg(e, t, n) {
  let r = e.attributes.aEmit.array,
    i = new U();
  return new dg(
    e,
    260,
    (e) => {
      if (xm(r[e * 4 + 2])) return `wheel`;
      let n = Tm(t, e);
      return n === 2 ? `detail` : n === 1 ? `main` : null;
    },
    (e, t) => {
      if (e !== `wheel`) return;
      let r =
        Math.max(t.max.x - n.x, n.x - t.min.x, t.max.y - n.y, n.y - t.min.y) +
        2;
      t.expandByPoint(i.set(n.x - r, n.y - r, t.min.z)).expandByPoint(
        i.set(n.x + r, n.y + r, t.max.z),
      );
    },
  );
}
var Qg = (e) => {
  let t = Math.sin(e * 127.1 + 311.7) * 43758.5453;
  return t - Math.floor(t);
};
function $g(e, t) {
  let n = e.plan.dataset.water,
    i = n.westX,
    a = n.northZ,
    c = e.plan.sidewalkHeight,
    l = Number.isFinite(i) && Number.isFinite(a),
    u = { westX: i, northZ: a, banks: l },
    d = e.params,
    p = d.get(`hour`),
    h =
      p !== null && p !== `` && isFinite(Number(p))
        ? ((Number(p) % 24) + 24) % 24
        : 16,
    g = d.get(`timescale`),
    _ = d.get(`weather`),
    v = _ && Ug.includes(_) ? _ : null,
    y = (Date.now() ^ 2654435769) >>> 0 || 1,
    b = () => (
      (y ^= y << 13),
      (y ^= y >>> 17),
      (y ^= y << 5),
      (y >>> 0) / 4294967296
    );
  (e.quality.bloom || e.quality.postFx) &&
    d.get(`postfx`) !== `0` &&
    wh().catch(() => {});
  let x = new sp();
  x.region = t?.atmos ?? null;
  let S = new m(16777215, 3);
  S.name = `env-sun`;
  let C = new I(12571903, 5918792, 1.2);
  C.name = `env-hemi`;
  let w = new f(12109526, 170, e.quality.drawDistance),
    T = w.color,
    E = new f(12109526, 170, 1e7);
  E.color = T;
  let D = v ?? `clear`,
    O = { ...Lf[D] },
    k = { ...O },
    A = { ...O },
    N = 1,
    P = 1,
    ee = 2 + b() * 2,
    F = v === `rain` || v === `storm` ? 0.85 : 0,
    ne = Math.floor(h),
    re = 4,
    R = +(d.get(`rainbow`) === `1`),
    ie = d.get(`rainbow`) === `1` ? 1e9 : 0,
    ae = !1,
    oe = 0,
    B = new vp(),
    se = Sp(),
    V,
    H,
    ce,
    le = new fh(),
    ue = [],
    de = [],
    fe = null,
    pe = null,
    me,
    he = null,
    ge = !1,
    _e = () => {
      if (((e.renderer.gl.toneMappingExposure = 1), !he)) return;
      let t = he.grade;
      ((t.u(`uExposure`).value = 1),
        t.u(`uLift`).value.set(0, 0.004, 0.01),
        t.u(`uGain`).value.set(1, 1, 1),
        t.u(`uShadowTint`).value.set(1, 1, 1),
        t.u(`uHighTint`).value.set(1, 1, 1),
        (t.u(`uSat`).value = 1.1),
        (t.u(`uContrast`).value = 1.07),
        (t.u(`uToe`).value = 0),
        he.ao && (t.u(`uAOAmount`).value = 0.85),
        he.bloom && ((he.bloomActive = !1), (he.bloom.intensity = 0)));
    },
    be = null,
    Se = null,
    Te = new s(),
    Ee = new _p(null, null);
  (Te.add(Ee.group), (Te.fog = new f(0, 1e7, 1e8)));
  let Oe = 0,
    ke = 0,
    Ae = null,
    je = -99,
    Me = -1,
    K = { rain: null, wind: null, river: null },
    Ne = 1 / 60,
    Pe = 0,
    Fe = !0,
    Ie = 0,
    Le = new U(),
    Re = !1,
    ze = [],
    Be = [],
    Ve = [],
    He = [],
    We = new U(),
    Ke = (e) => e.distanceToPoint(We) < 115 && et.test(e),
    qe = (e) => et.test(e) && e.distanceToPoint(We) >= 115,
    Je = null,
    Ye = null,
    J = { m: [], c: [] },
    Xe = (e) => e.distanceToPoint(We) < 95 && et.test(e),
    Ze = [],
    Qe = 0,
    Y = [],
    $e = [],
    et = new lg(),
    tt = new lg(),
    nt = e.params.get(`envgate`) !== `0`,
    rt = new hg(3, j.degToRad(3), nt),
    it = new hg(3, j.degToRad(3), nt),
    at = (e, t) => {
      let n = e[e.length - 1];
      return t.n === e.length && t.e === n
        ? !1
        : ((t.n = e.length), (t.e = n), !0);
    },
    ot = { n: -1, e: null },
    st = { n: -1, e: null },
    ct = [],
    lt = null,
    X = null,
    ut = 2.5,
    dt = () => {
      let t = e.plan.bounds;
      if (!l)
        return {
          x0: t.minX - 760,
          z0: t.minZ - 760,
          x1: t.maxX + 760,
          z1: t.maxZ + 760,
        };
      let n = t.minX - 700,
        r = t.minZ - 700;
      if (V) {
        n = 1 / 0;
        for (let e = t.minZ - 200; e <= t.maxZ + 200; e += 50)
          n = Math.min(n, V.westBank(e));
        r = 1 / 0;
        for (let e = t.minX - 200; e <= t.maxX + 200; e += 50)
          r = Math.min(r, V.northBank(e));
      }
      return {
        x0: n - 60,
        z0: r - 60,
        x1: Math.max(t.maxX, Hh) + 60,
        z1: Math.max(t.maxZ, Uh) + 60,
      };
    },
    ft = (e, t) => {
      Z.viewCap[e] = [t.capacity, t.total, t.grown];
    },
    pt = new U(),
    mt = (e) => e.distanceToPoint(pt) < 420 && et.test(e),
    ht = null,
    gt = null,
    _t = [],
    vt = (e) => {
      for (let t = 0; t < _t.length; t++) if (e.test(_t[t])) return !0;
      return !1;
    },
    yt = null,
    bt = null,
    xt = null,
    St = null,
    Ct = new xe(),
    wt = new ve(),
    Tt = d.get(`lightning`) === `1`,
    Et = !1,
    Dt = 0,
    Ot = [],
    kt = [],
    At = null,
    jt = d.get(`aodebug`) === `1`,
    Z = {
      initMs: 0,
      terrainTris: 0,
      terrainFarTris: 0,
      propsTris: 0,
      trees: 0,
      shrubs: 0,
      buildings: 0,
      lodBoxes: 0,
      hillLights: 0,
      updateMs: 0,
      envMs: 0,
      propsBreakdown: {},
      drawn: { main: {}, far: {}, trees: 0, treesNear: 0, shrubs: 0 },
      cullMs: 0,
      trailTreesRemoved: 0,
      trailShrubs: 0,
      cityLights: { lamps: 0, wash: 0, streaks: 0, nodes: 0 },
      edgeBuildings: 0,
      edgesMs: 0,
      detailTris: 0,
      phaseMs: {},
      builderFill: {},
      viewCap: {},
    },
    Mt = new U(),
    Nt = new U(),
    Pt = new W(),
    Ft = new U(),
    Q = new U(),
    It = new U(),
    Lt = new U(0, 1, 0),
    Rt = null,
    zt = null,
    Bt = new Set([`taipei101`]),
    Vt = [],
    Ht = () => {
      let n = new Em(Xg[0], Xg[1]);
      ((Z.lodBoxes = Ph(
        n,
        e.plan,
        Bt,
        Vt,
        V ? (e, t) => V.height(e, t) : void 0,
        t?.cityLod,
      )),
        (Z.builderFill.lod = [n.vertexCount, n.indexCount]));
      let r = n.build(),
        i = new dg(r, 400).view(r, !1);
      if ((Jg(r), Rt)) {
        let e = $e.findIndex((e) => e.mesh === Rt);
        (e >= 0 && $e.splice(e, 1),
          Rt.geometry.dispose(),
          (Rt.geometry = i.geometry));
      } else
        ((Rt = new M(i.geometry, Gm(zt, `lod`))),
          (Rt.frustumCulled = !1),
          (Rt.name = `env-city-lod`),
          B.scene.add(Rt));
      $e.push({ view: i, mesh: Rt });
    },
    Ut = (e, t, n) => {
      for (let r of e) {
        let e = r.view.update(t.test, t.testDetail);
        ((r.mesh.visible = e > 0), (n[r.mesh.name] = r.view.tris));
      }
    },
    Wt = (t, n) => {
      (Rf(k, O),
        Rf(A, Lf[t]),
        (N = +(n <= 0)),
        (P = Math.max(0.001, n)),
        n <= 0 && Rf(O, A),
        t !== D && ((D = t), e.events.emit(`weather:changed`, { weather: t })));
    },
    Gt = (t) => {
      if ((e.events.emit(`time:hour`, { hour: t }), v || (--ee, ee > 0)))
        return;
      let n = D;
      if (!cp(n, b)) return;
      let r = lp(n, t, b);
      (Wt(r, 60 + b() * 70), (ee = up(r, b)));
    },
    Kt = (t) => {
      try {
        e.audio.play(`thunder`, { volume: t, ui: !0, rate: 0.85 + b() * 0.3 });
      } catch {}
    },
    qt = () => {
      let e = Math.floor(h),
        t = Math.floor((h - e) * 60);
      return `${e < 10 ? `0` : ``}${e}:${t < 10 ? `0` : ``}${t}`;
    },
    Jt = 0,
    Yt = async (t) => {
      let n = ++Jt;
      if (((he &&= (e.renderer.setPostFx(null), null)), t))
        try {
          let r = await jh(e.renderer.gl, e.scene, e.camera, t);
          if (n !== Jt) {
            r.fx.dispose();
            return;
          }
          ((he = r), e.renderer.setPostFx(r.fx), (Dt = 3));
        } catch (e) {
          n === Jt &&
            console.warn(`[environment] post-processing unavailable`, e);
        }
    },
    Xt = () => {
      let t = e.quality,
        n = t.bloom && d.get(`bloom`) !== `0`;
      if (d.get(`postfx`) === `0` || (!n && !t.postFx)) return Yt(null);
      let r = Math.min(window.devicePixelRatio || 1, t.maxPixelRatio),
        i = t.postFx && t.antialias && r < 1.5 && d.get(`smaa`) !== `0`;
      return Yt({
        bloom: n,
        smaa: i,
        smaaPreset: t.level === `ultra` ? `medium` : `low`,
        vignette: t.postFx,
        aoSamples:
          d.get(`ao`) === `0`
            ? 0
            : t.level === `ultra`
              ? 12
              : t.level === `high`
                ? 8
                : 0,
        bloomLevels: t.level === `ultra` ? 4 : t.level === `high` ? 3 : 2,
        frameFormat: d.get(`rtfmt`) === `16f` ? `16f` : `r11`,
      });
    },
    Zt = () => {
      let t = e.quality;
      S.castShadow = t.shadows;
      let n = t.level === `ultra` ? 90 : t.level === `high` ? 70 : 55,
        r = S.shadow.camera;
      ((r.left = -n),
        (r.right = n),
        (r.top = n),
        (r.bottom = -n),
        (r.near = 1),
        (r.far = 1500),
        r.updateProjectionMatrix(),
        S.shadow.mapSize.x !== t.shadowMapSize &&
          (S.shadow.mapSize.set(t.shadowMapSize, t.shadowMapSize),
          S.shadow.map?.dispose(),
          (S.shadow.map = null)),
        (S.shadow.bias = -35e-5),
        (S.shadow.normalBias = 0.045),
        (S.shadow.radius =
          t.level === `ultra` ? 2.6 : t.level === `high` ? 2.2 : 1.6));
    },
    Qt = (t) => {
      let n = S.shadow.camera.right,
        r = e.player?.position ?? t.position;
      (t.getWorldDirection(Mt),
        (Mt.y = 0),
        Mt.lengthSq() < 1e-6 && Mt.set(0, 0, -1),
        Mt.normalize(),
        It.set(r.x + Mt.x * n * 0.35, r.y, r.z + Mt.z * n * 0.35));
      let i = x.lightDir;
      (Ft.crossVectors(Lt, i),
        Ft.lengthSq() < 1e-6 && Ft.set(1, 0, 0),
        Ft.normalize(),
        Q.crossVectors(i, Ft).normalize());
      let a = (2 * n) / S.shadow.mapSize.x,
        o = It.dot(Ft),
        s = It.dot(Q);
      (It.addScaledVector(Ft, Math.round(o / a) * a - o),
        It.addScaledVector(Q, Math.round(s / a) * a - s),
        S.target.position.copy(It),
        S.position.copy(It).addScaledVector(i, Kg),
        S.target.updateMatrixWorld(),
        S.updateMatrixWorld());
      let c = S.shadow.camera,
        l = Ge(i.y, 0.02, 1),
        u = Math.sqrt(1 - l * l),
        d = Math.max(0, It.y - e.plan.groundHeight(It.x, It.z)),
        f = n * 2.2 * u + 560 * l,
        p = n * 1.6 * u + (40 + d) * l + 10,
        m = Math.max(1, Kg - f),
        h = Kg + p;
      (Math.abs(c.near - m) > 2 || Math.abs(c.far - h) > 2) &&
        ((c.near = m), (c.far = h), c.updateProjectionMatrix());
    },
    $t = null,
    en = null,
    tn = !1,
    nn = null,
    rn = () =>
      e.quality.level !== `low` &&
      d.get(`envmap`) !== `0` &&
      (nn ??= kh(e.renderer.gl).half),
    an = (t = !0) => {
      if (!be) return;
      if (!rn()) {
        (e.scene.environment &&
          ((e.scene.environment = null),
          (B.scene.environment = null),
          Se?.dispose(),
          (Se = null),
          $t?.dispose(),
          ($t = null)),
          (je = h));
        return;
      }
      let n = performance.now();
      try {
        let n =
          e.quality.level === `low`
            ? 32
            : e.quality.level === `medium`
              ? 64
              : 128;
        if (
          (!$t || $t.width !== n) &&
          ($t?.dispose(),
          Se?.dispose(),
          (Se = null),
          (tn = !1),
          ($t = new z(n, { type: L, generateMipmaps: !1 })),
          (en = new o(0.1, 100, $t)),
          !Ah(e.renderer.gl, [$t]))
        )
          throw Error(`env cube target is not renderable`);
        if (!Se) {
          let e = be;
          (e._setSize &&
            e._allocateTargets &&
            (e._setSize(n), (Se = e._allocateTargets())),
            (tn = !1));
        }
        if (!tn) {
          tn = !0;
          let e = be._ggxMaterial;
          e?.defines &&
            `GGX_SAMPLES` in e.defines &&
            e.defines.GGX_SAMPLES !== 16 &&
            ((e.defines.GGX_SAMPLES = 16), (e.needsUpdate = !0));
        }
        if (!t && Se) {
          ((e.scene.environment = Se.texture),
            (B.scene.environment = Se.texture),
            (je = -99));
          return;
        }
        en.update(e.renderer.gl, Te);
        let r = be.fromCubemap($t.texture, Se);
        ((Se = r),
          (e.scene.environment = r.texture),
          (B.scene.environment = r.texture));
      } catch (t) {
        (console.warn(`[environment] env map failed`, t),
          (be = null),
          $t?.dispose(),
          ($t = null),
          (e.scene.environment = null),
          (B.scene.environment = null));
      }
      ((je = h),
        (Me = O.cloud * 3 + O.overcast * 5 + O.mist * 7 + O.storm * 11),
        (Z.envMs = performance.now() - n));
    },
    on = (t) => {
      x.compute(h, O);
      let n = ce ? ce.flash : 0;
      (S.color.copy(x.lightColor), (S.intensity = x.lightIntensity));
      let r = e.quality.level,
        i = x.moonLit ? (r === `ultra` ? 0.25 : 9) : 0.02,
        a = S.castShadow && x.shadowStrength > i && x.lightIntensity > 0.01;
      ((S.shadow.intensity = a
        ? x.shadowStrength * G(i, i + 0.08, x.shadowStrength)
        : 0),
        (S.shadow.autoUpdate = !1));
      let o =
          r === `medium` || (r === `high` && Ie < 7)
            ? 1 / 30
            : r === `ultra`
              ? 1 / 60
              : 0,
        s = performance.now() / 1e3;
      if (
        ((Fe = a && (!o || s + 1e-6 >= Pe)),
        S.castShadow && !S.shadow.map && (Fe = !0),
        Fe && o)
      ) {
        let e = Math.max(0, s - Pe);
        Pe = s + o - (e % o);
      }
      S.shadow.needsUpdate = Fe;
      let c = !!Se;
      (C.color.copy(x.hemiSky),
        C.groundColor.copy(x.hemiGround),
        (C.intensity = x.hemiIntensity * (c ? 0.6 : 0.9) + n * 2.2),
        n > 0 && C.color.lerp(Pt.setRGB(0.75, 0.8, 1), Math.min(1, n)),
        B.sun.color.copy(S.color),
        (B.sun.intensity = S.intensity),
        B.sun.position.copy(x.lightDir).multiplyScalar(1e3),
        B.hemi.color.copy(C.color),
        B.hemi.groundColor.copy(C.groundColor),
        (B.hemi.intensity = C.intensity),
        (e.scene.environmentIntensity = x.envIntensity),
        (B.scene.environmentIntensity = x.envIntensity),
        (q.uNight.value = x.night),
        q.uSunDir.value.copy(x.lightDir),
        (q.uWet.value = F),
        se.uSkySun.value.copy(x.sunDir),
        se.uMoonDir.value.copy(x.moonDir),
        se.uZenith.value.copy(x.zenith),
        se.uHorizon.value.copy(x.horizon),
        se.uSunset.value.copy(x.sunset),
        se.uSunGlow.value.copy(x.sunGlow),
        se.uSunDisk.value.copy(x.sunDisk),
        se.uMoonCol.value.copy(x.moonCol),
        se.uCloudLit.value.copy(x.cloudLit),
        se.uCloudAmb.value.copy(x.cloudAmb),
        (se.uCloudCover.value = O.cloud),
        (se.uShafts.value = Ge(O.rain * 0.7 + O.storm * 0.5 - 0.15, 0, 1)),
        (se.uStars.value = x.stars),
        (se.uFlash.value = n),
        ce && se.uFlashDir.value.copy(ce.dir),
        (oe += t * (0.004 + O.wind * 0.012)),
        se.uWindOff.value.set(oe, oe * 0.35),
        (se.uSkyTime.value = e.time.real % 1e3),
        se.uGround.value.copy(x.hemiGround).multiplyScalar(0.3),
        me &&
          (me.uLightDir.value.copy(x.lightDir),
          me.uLightCol.value
            .copy(x.lightColor)
            .multiplyScalar(x.lightIntensity * (0.25 + 0.75 * O.sunOcc)),
          me.uAmbient.value
            .copy(x.hemiSky)
            .lerp(x.hemiGround, 0.35)
            .multiplyScalar(x.hemiIntensity * 0.5),
          (me.uWTime.value = e.time.real % 3600),
          (me.uWNight.value = x.night),
          (me.uWRain.value = O.rain),
          (me.uCloudShade.value = O.overcast),
          me.uDeep.value
            .setRGB(0.028, 0.042, 0.034)
            .lerp(Pt.setRGB(0.05, 0.043, 0.032), O.rain * 0.8)));
      let l = x.exposure;
      if (((e.renderer.gl.toneMappingExposure = l), he)) {
        let t = he.grade;
        ((t.u(`uExposure`).value = l * (1 + n * 0.25)),
          (t.u(`uGTime`).value = e.time.real % 100));
        let r = x.sunEl,
          i = G(-2, 3, r) * (1 - G(9, 18, r)) * (1 - O.overcast),
          a = x.night,
          o = h < 12 ? G(-3, 4, r) * (1 - G(14, 30, r)) : 0,
          s = h >= 12 ? G(-9, -1, r) * (1 - G(-1, 6, r)) : 0,
          c = G(25, 55, r) * (1 - O.overcast),
          u = Math.max(O.overcast, O.rain),
          d = t.u(`uLift`).value,
          f = t.u(`uGain`).value,
          p = 1 - a,
          m = x.golden * p;
        (d.set(
          0.004 * i + 0.002 * s + 0.0025 * a + 0.012 * m,
          (0.004 + 0.004 * o) * p + 0.002 * a + 0.008 * m,
          (0.01 + 0.01 * O.rain + 0.008 * o + 0.01 * s) * p + 0.0025 * a,
        ),
          f.set(
            1 + 0.05 * i + 0.03 * a + 0.012 * c - 0.01 * o,
            1 - 0.005 * i - 0.008 * a + 0.004 * c,
            1 - 0.07 * i - 0.02 * a - 0.01 * c + 0.02 * o,
          ));
        let g = t.u(`uShadowTint`).value,
          _ = t.u(`uHighTint`).value;
        if (
          (g.set(
            1 - 0.035 * i - 0.02 * s - 0.012 * a - 0.015 * c - 0.01 * u,
            1 - 0.01 * i - 0.02 * s + 0.003 * a + 0.004 * u,
            1 + 0.05 * i + 0.05 * s * p + 0.01 * a + 0.03 * c + 0.004 * u,
          ),
          _.set(
            1 + 0.05 * i + 0.065 * a + 0.02 * c + 0.015 * o - 0.01 * u,
            1 + 0.012 * i + 0.018 * a + 0.008 * c + 0.01 * o,
            1 - 0.05 * i - 0.045 * a - 0.015 * c - 0.01 * o + 0.01 * u,
          ),
          (t.u(`uSat`).value =
            (1.1 + 0.05 * a + 0.05 * i - 0.03 * o) *
            (1 - 0.2 * O.overcast * (1 - a)) *
            (1 - 0.2 * O.mist)),
          (t.u(`uContrast`).value =
            1.07 +
            0.03 * a +
            0.02 * c -
            0.03 * o -
            0.07 * O.mist -
            0.02 * O.rain -
            0.06 * m),
          (t.u(`uToe`).value = G(0.3, 0.9, a)),
          he.ao &&
            (t.u(`uAOAmount`).value = (0.85 + 0.15 * u) * (1 - 0.35 * a)),
          he.ao && jt && (t.u(`uAODebug`).value = 1),
          he.bloom)
        ) {
          let e = x.bloomNight,
            t = Math.max(e, Math.min(1, n * 2));
          ((he.bloomActive = t > Wg || Dt > 0),
            Dt > 0 && Dt--,
            (he.bloom.intensity = he.bloomActive
              ? (0.4 + 0.3 * e) * G(Wg, 0.6, t)
              : 0),
            (he.bloom.luminanceMaterial.threshold = 1.45 - 0.15 * e));
        }
      }
      ge && _e();
      let u = e.camera.far,
        d = 90 + 170 * Ge(O.overcast * 0.4 + O.rain * 0.8 + O.mist * 0.9, 0, 1);
      ((w.near = pp(x.hazeScale * Ge(u / 900, 0.55, 1.25), d)),
        (w.far = u),
        (E.near = w.near),
        (B.scene.fog = e.scene.fog ? E : null),
        nm.uTreeFade.value.set(u * 0.66, u * 0.82),
        (nm.uWindAmt.value = 0.25 + O.wind * 1.1),
        (Wm.uLitFrac.value =
          0.55 -
          0.1 * Ge(h >= 0 && h < 5 ? 1 - Math.abs(h - 2.5) / 2.5 : 0, 0, 1)));
    },
    sn = (e) => {
      e.getWorldDirection(Nt);
      let t = Math.hypot(Nt.x, Nt.z);
      t < 0.001 && (Nt.set(0, 0, -1), (t = 1));
      let n = 1 / Math.hypot(1, 0.03);
      (x.skyBase((Nt.x / t) * n, 0.03 * n, (Nt.z / t) * n, T, 0.3),
        x.mist > 0 && T.lerp(x.mistColor, x.mist * 0.6));
      let r = ce ? ce.flash : 0;
      (r > 0 && T.lerp(Pt.setRGB(0.6, 0.64, 0.8), Math.min(0.5, r * 0.4)),
        S.castShadow && Fe && Qt(e),
        H?.preRender(e, Ne));
      let i = performance.now(),
        a = e;
      if (
        ((Wm.uLodNear.value = a.far * 0.9),
        (Qh.uSplit.value = a.far * 0.85),
        et.set(e),
        lt &&
          X &&
          (pt.setFromMatrixPosition(a.matrixWorld),
          (lt.visible = x.night > Gg && X.update(mt) > 0)),
        bt && St)
      ) {
        let e = x.night > Gg && Ct.distanceToPoint(a.position) < a.far * 0.85;
        bt.visible = e && St.update(et.test) > 0;
      }
      if (
        ((et.detailDist = Math.min(a.far * 0.8, 380)),
        rt.stale(e, at(Y, ot)) &&
          (rt.set(e), (rt.detailDist = et.detailDist), Ut(Y, rt, Z.drawn.main)),
        ht && (ht.visible = vt(et)),
        Be.length)
      ) {
        ((et.maxDist = a.far * 0.84), We.setFromMatrixPosition(a.matrixWorld));
        let e = 0,
          t = 0;
        for (let n = 0; n < Be.length; n++) {
          let r = He[n],
            i = Be[n].update(r ? qe : et.test);
          if (((ze[n].visible = i > 0), (e += i), r)) {
            let e = r.update(Ke);
            ((Ve[n].visible = e > 0), (t += e));
          }
        }
        if (((Z.drawn.trees = e), (Z.drawn.treesNear = t), Ye && Je)) {
          let e = Ye.update(Xe);
          ((Je.visible = e > 0), (Z.drawn.shrubs = e));
        }
      }
      Z.cullMs = Z.cullMs * 0.9 + (performance.now() - i) * 0.1;
    },
    cn = (t) => {
      let n = performance.now();
      if ((tt.set(t), yt && xt)) {
        let n = x.night > Gg;
        ((yt.visible = n && xt.update(tt.test) > 0),
          n &&
            (e.renderer.gl.getDrawingBufferSize(wt),
            (Qh.uPx.value =
              (2 * Math.tan(j.degToRad(t.fov) / 2)) /
              Math.max(1, wt.y * (t.zoom || 1)))));
      }
      (it.stale(t, at($e, st)) && Ut($e, it.set(t), Z.drawn.far),
        gt && (gt.visible = vt(tt)),
        (Z.cullMs += (performance.now() - n) * 0.1));
    },
    ln = (t) => {
      if (!ze.length || !Ze.length) return;
      let n = 1 / 0,
        r = -1 / 0,
        i = 1 / 0,
        a = -1 / 0;
      for (let e of t)
        ((n = Math.min(n, e.x)),
          (r = Math.max(r, e.x)),
          (i = Math.min(i, e.z)),
          (a = Math.max(a, e.z)));
      let o = t[t.length - 1],
        s = (e, s, c, l) => {
          if (e < n - 14 || e > r + 14 || s < i - 14 || s > a + 14) return !1;
          if (Math.hypot(e - o.x, s - o.z) < l) return !0;
          for (let n = 0; n < t.length; n++) {
            let r = e - t[n].x,
              i = s - t[n].z;
            if (r * r + i * i < c * c) return !0;
          }
          return !1;
        },
        c = Ze.map(() => ({ m: [], c: [] })),
        l = 0;
      for (let e = 0; e < Ze.length; e++) {
        let t = Ze[e];
        for (let n = 0; n < t.m.length; n++) {
          let r = t.m[n].elements;
          if (s(r[12], r[14], 4.5, 13)) {
            l++;
            continue;
          }
          (c[e].m.push(t.m[n]), c[e].c.push(t.c[n]));
        }
      }
      let u = c[0].m,
        d = c[0].c;
      for (let e of ct) s(e.x, e.z, 4.5, 13) && (e.c.disabled = !0);
      let f = new Ce(),
        p = new U(),
        m = new U(),
        h = 0;
      for (let n = 1; n + 1 < t.length && u.length < Qe; n += 3) {
        let r = t[n - 1],
          i = t[n + 1],
          a = i.x - r.x,
          o = i.z - r.z,
          c = Math.hypot(a, o) || 1,
          l = Qg(n * 1.7 + 0.3),
          g = Qg(n * 3.1 + 7.7),
          _ = Qg(n * 5.3 + 2.1),
          v = (n / 3) % 2 < 1 ? 1 : -1,
          y = 2.4 + l * 4.6,
          b = t[n].x + (-o / c) * y * v,
          x = t[n].z + (a / c) * y * v;
        if (s(b, x, 2.2, 9)) continue;
        let S = e.plan.groundHeight(b, x),
          C = 0.2 + g * 0.22;
        (f.setFromAxisAngle(Lt, _ * Math.PI * 2),
          m.set(b, S - 0.35 - C * 1.2, x),
          p.set(C * (1 + l * 0.3), C * (0.8 + _ * 0.35), C),
          u.push(new De().compose(m, f, p)),
          d.push(am(_, g, l).multiplyScalar(0.85)),
          h++);
      }
      if (Je && J.m.length) {
        let e = [],
          t = [];
        for (let n = 0; n < J.m.length; n++) {
          let r = J.m[n].elements;
          s(r[12], r[14], 2.6, 11) || (e.push(J.m[n]), t.push(J.c[n]));
        }
        Ye = new pg(Je, e, t, 100, 2.5);
      }
      for (let e = 0; e < ze.length; e++)
        ((Be[e] = new pg(ze[e], c[e].m, c[e].c, 100, e === 1 ? 10 : 7)),
          Ve[e] && (He[e] = new pg(Ve[e], Be[e], null, 100, 0)));
      ((Z.trailTreesRemoved = l), (Z.trailShrubs = h));
    },
    un = () => {
      let t = gp(e.scene),
        n = e.renderer.gl,
        r = B.rig.sync(t, n),
        i = Ee.sync(t, n);
      return r || i;
    },
    dn = () => {
      if (!Ae) return null;
      let t = e.renderer.gl.properties.get(Ae).uniforms;
      if (!t) return null;
      let n = (e) => {
          let n = t[e]?.value;
          return Array.isArray(n) ? n.length : -1;
        },
        r = n(`directionalLights`);
      if (r < 0) return null;
      let i = Math.max(0, n(`directionalLightShadows`));
      return {
        dir: r - i,
        dirShadow: i,
        point: Math.max(0, n(`pointLights`)),
        spot: Math.max(0, n(`spotLights`)),
        hemi: Math.max(0, n(`hemisphereLights`)),
        unsupported:
          n(`pointLightShadows`) > 0 ||
          n(`spotLightShadows`) > 0 ||
          n(`rectAreaLights`) > 0 ||
          n(`spotLightMap`) > 0,
      };
    },
    fn = (e) => {
      if (((ke -= e), ke > 0)) return;
      ke = 0.5;
      let t = dn();
      t && B.rig.sig && !hp(t, B.rig.sig) && (un() || (ke = 10));
    },
    pn = (t) => {
      let n = V;
      fe = new mh(
        (t, r) => {
          let a = -1450 + 2400 * t,
            o = (i + n.westBank(a)) / 2 + Math.sin(a * 0.004) * 25;
          return r.set(o, e.plan.waterLevel, a);
        },
        2400,
        5.5,
      );
      let r = ph();
      for (let [n, i] of [
        [e.scene, `boat`],
        [B.scene, `boat-far`],
      ]) {
        let e = Gm(t, i),
          a = new M(r, e);
        ((a.name = `env-boat`), n.add(a), de.push(a));
      }
    },
    mn = () => {
      (e.events.on(`quality:changed`, () => {
        (Zt(), H.allocate(e.quality.rainParticles), Xt(), (je = -99));
      }),
        e.events.on(`player:spawned`, () => {
          try {
            (K.rain?.stop(),
              K.wind?.stop(),
              K.river?.stop(),
              (K = {
                rain: e.audio.loop(`rain`, { volume: 0, ui: !0 }),
                wind: e.audio.loop(`wind`, { volume: 0, ui: !0 }),
                river: l
                  ? e.audio.loop(`ambient_river`, {
                      volume: 0,
                      x: i,
                      y: 0,
                      z: 0,
                    })
                  : null,
              }));
          } catch {
            K = { rain: null, wind: null, river: null };
          }
        }));
    },
    hn = {
      name: `environment`,
      get hour() {
        return h;
      },
      setHour(t) {
        h = ((t % 24) + 24) % 24;
        let n = Math.floor(h);
        (n !== ne && ((ne = n), e.events.emit(`time:hour`, { hour: n })),
          (je = -99));
      },
      timeScale: g !== null && isFinite(Number(g)) ? Number(g) : 1,
      get weather() {
        return D;
      },
      setWeather(e, t = 45) {
        Ug.includes(e) && (Wt(e, t), (ee = 2 + b() * 2));
      },
      get rain() {
        return O.rain;
      },
      get night() {
        return q.uNight.value;
      },
      sun: S,
      fogColor: T,
      lightning() {
        ce &&
          ce.strike(
            e.camera.position,
            (e, t) => V.height(e, t),
            b,
            e.time.real,
            !0,
          );
      },
      get wet() {
        return F;
      },
      get sunDirection() {
        return x.sunDir;
      },
      get flash() {
        return ce ? ce.flash : 0;
      },
      get wind() {
        return O.wind;
      },
      timeString: qt,
      addFar(e) {
        B.scene.add(e);
        let t = e.userData?.landmark;
        typeof t == `string` && !Bt.has(t) && (Bt.add(t), Rt && Ht());
      },
      removeFar(e) {
        B.scene.remove(e);
      },
      terrainHeight(t, n) {
        return V ? V.height(t, n) : e.plan.groundHeight(t, n);
      },
      spawnPlane() {
        le.begin(b);
      },
      get farLayer() {
        return B;
      },
      get gloom() {
        return x.dim;
      },
      setSheltered(e) {
        ((Et = !!e), H && (H.sheltered = Et));
      },
      holdLook(e) {
        ge = !!e;
      },
      addRainOccluder(e, t) {
        if (H) return H.addOccluder(e, t);
        let n = -(Ot.length + 1);
        return (Ot.push({ id: n, rect: e, y: t, real: 0 }), n);
      },
      removeRainOccluder(e) {
        if (e < 0) {
          let t = Ot.find((t) => t.id === e);
          t && (t.real && H && H.removeOccluder(t.real), (t.real = -1));
          return;
        }
        H?.removeOccluder(e);
      },
      isSheltered(t, n, r) {
        if (Et) return !0;
        let i = r ?? e.plan.groundHeight(t, n) + 0.5;
        if (H) return H.covered(t, n, i);
        for (let e of Ot) {
          if (e.real === -1) continue;
          let r = e.rect;
          if (
            t > Math.min(r.minX, r.maxX) &&
            t < Math.max(r.minX, r.maxX) &&
            n > Math.min(r.minZ, r.maxZ) &&
            n < Math.max(r.minZ, r.maxZ) &&
            i < e.y
          )
            return !0;
        }
        return !1;
      },
      get paths() {
        return kt;
      },
      _debug: {
        atmos: x,
        wCur: O,
        far: B,
        stats: Z,
        get gates() {
          return { main: rt.rebuilds, far: it.rebuilds };
        },
        get post() {
          return he;
        },
        get envRT() {
          return Se;
        },
        regenEnv: () => an(),
        get pmrem() {
          return be;
        },
        get cubeCam() {
          return en;
        },
        get cubeRT() {
          return $t;
        },
        envScene: Te,
        setPost(e) {
          return Yt(e);
        },
      },
      async init() {
        let n = performance.now(),
          r = e.quality;
        (fp(),
          (e.scene.background = null),
          (e.scene.fog = w),
          (B.scene.fog = E),
          e.scene.add(S, S.target, C),
          Zt(),
          B.install(e.scene, e.camera),
          (B.onPre = sn),
          (B.onFarCamera = cn),
          (B.enabled = d.get(`envfar`) !== `0`));
        let o = performance.now(),
          s = (e) => {
            let t = performance.now();
            ((Z.phaseMs[e] = (Z.phaseMs[e] ?? 0) + (t - o)), (o = t));
          },
          f = async (t) => {
            (s(t), await e.yieldFrame(), (o = performance.now()));
          },
          p = r.level === `low`,
          m = Tp(se, !1, p, t?.sky);
        (B.scene.add(Ep(m)),
          Te.add(Ep(Tp(se, !0, !1, t?.sky))),
          (V = new Hp(e.plan, t?.terrain)));
        let h = Xp(V, r.level === `low`, l ? void 0 : []);
        await f(`terrain`);
        let g = Xp(V, r.level === `low`, [], 2.1);
        ((Z.terrainTris = h.tris), (Z.terrainFarTris = g.tris));
        let _ = new dg(h.geometry, 320).view(h.geometry, !0, {
            area: dt(),
            dist: ut * r.drawDistance,
            detailDist: 0,
          }),
          v = new dg(g.geometry, 400).view(g.geometry, !1);
        (ft(`env-terrain`, _), ft(`env-terrain-far`, v));
        let y = new M(_.geometry, Zp(!1, p));
        ((y.receiveShadow = !0),
          (y.frustumCulled = !1),
          (y.name = `env-terrain`),
          (Ae = y.material));
        let T = new M(v.geometry, Zp(!0, p));
        if (
          ((T.frustumCulled = !1),
          (T.name = `env-terrain-far`),
          Y.push({ view: _, mesh: y }),
          $e.push({ view: v, mesh: T }),
          e.scene.add(y),
          B.scene.add(T),
          await f(`terrainFar`),
          l)
        ) {
          let t = e.plan.waterLevel,
            n = (n, r, i, a) => {
              let o = Math.hypot(i - n, a - r);
              o < 0.5 ||
                e.statics.addOBB(
                  (n + i) / 2,
                  (r + a) / 2,
                  0.6,
                  o / 2 + 0.3,
                  Math.atan2(i - n, -(a - r)),
                  Fp - 4,
                  t + 4,
                  `wall`,
                );
            },
            r = (e, t, r, i) => {
              let a = Math.max(1, Math.ceil((t - e) / r));
              for (let r = 0; r < a; r++) {
                let o = i(e + ((t - e) * r) / a),
                  s = i(e + ((t - e) * (r + 1)) / a);
                n(o[0], o[1], s[0], s[1]);
              }
            },
            o = -1700,
            s = 1300,
            c = 2400;
          (r(o, s, 30, (e) => [V.westBank(e) + 5, e]),
            r(i - 4, c, 30, (e) => [e, V.northBank(e) + 5]),
            r(o, V.northBank(i) + 5, 30, (e) => [i - 8, e]),
            n(V.westBank(o) + 5, o, i - 8, o),
            n(V.westBank(s) + 5, s, i, s),
            n(c, a, c, V.northBank(c) + 5));
        }
        me = sm(se, om(256));
        let k = e.plan.dataset.water.levels,
          A = fm(e.plan.waterLevel, u, l ? null : V.water, l ? void 0 : k);
        if (
          ((ht = new M(A, um(me, !1, u, t?.water))),
          (ht.frustumCulled = !1),
          (ht.name = `env-water`),
          (gt = new M(A, um(me, !0, u, t?.water))),
          (gt.frustumCulled = !1),
          (gt.name = `env-water-far`),
          e.scene.add(ht),
          B.scene.add(gt),
          l)
        ) {
          let t = 5200,
            n = e.plan.waterLevel,
            r = Fp - 2,
            o = n + 2;
          for (let e = -5200; e < t; e += 300) {
            let t = 1 / 0;
            for (let n = 0; n <= 6; n++)
              t = Math.min(t, V.westBank(e + (300 * n) / 6));
            _t.push(new xe(new U(t - 30, r, e), new U(i + 1, o, e + 300)));
          }
          for (let e = i - 320; e < t; e += 300) {
            let t = 1 / 0;
            for (let n = 0; n <= 6; n++)
              t = Math.min(t, V.northBank(e + (300 * n) / 6));
            _t.push(new xe(new U(e, r, t - 30), new U(e + 300, o, a + 1)));
          }
        } else {
          let t = e.plan.waterLevel;
          for (let e of dm(V.water, k)) {
            let n = Number.isFinite(e.y) ? e.y : t;
            _t.push(
              new xe(
                new U(e.x0, Math.min(Fp, n - 1.7) - 2, e.z0),
                new U(e.x1, n + 2, e.z1),
              ),
            );
          }
        }
        await f(`water`);
        let j = Hm();
        (d.get(`keepcanvas`) !== `1` &&
          (j.onUpdate = () => {
            j.onUpdate = null;
            let e = j.image;
            e &&
              typeof e.getContext == `function` &&
              ((e.width = 1), (e.height = 1));
          }),
          (zt = j));
        let P = new Em(Yg[0], Yg[1]),
          ee = new ah(),
          te = P.triangleCount,
          F = l
            ? Jm(P, V, e.plan, e.statics, ee)
            : {
                trees: [],
                blocked: () => !1,
                gates: [],
                wharf: { x: 0, z: 0 },
                lampCount: 0,
                paths: [],
              },
          I = P.triangleCount;
        await f(`riverside`);
        let L = l
          ? th(P, V, e.plan)
          : {
              wheelCenter: new U(0, -2e3, 0),
              buildings: 0,
              parkLamps: [],
              decks: [],
            };
        for (let t of L.decks) {
          e.statics.addFloorRect(
            t.minX,
            t.minZ,
            t.maxX,
            t.maxZ,
            t.y,
            `env-bridge`,
          );
          let n = t.y - 2,
            r = t.y + 1;
          if (t.axis === `x`) {
            let i = t.maxX - 3.4;
            (e.statics.addBox(
              t.minX,
              t.minZ - 0.1,
              i,
              t.minZ + 0.35,
              n,
              r,
              `env-bridge`,
            ),
              e.statics.addBox(
                t.minX,
                t.maxZ - 0.35,
                i,
                t.maxZ + 0.1,
                n,
                r,
                `env-bridge`,
              ));
          } else {
            let i = t.maxZ - 3.4;
            (e.statics.addBox(
              t.minX - 0.1,
              t.minZ,
              t.minX + 0.35,
              i,
              n,
              r,
              `env-bridge`,
            ),
              e.statics.addBox(
                t.maxX - 0.35,
                t.minZ,
                t.maxX + 0.1,
                i,
                n,
                r,
                `env-bridge`,
              ));
          }
        }
        let ne = P.triangleCount;
        await f(`farbank`);
        let re = performance.now(),
          R = l
            ? await Yh(P, V, e.plan, e.statics, ee, () => f(`edges`))
            : {
                lodBoxes: [],
                lightRoads: [],
                lightNodes: [],
                buildings: 0,
                blocked: () => !1,
                bounds: new xe(),
              };
        Z.edgesMs = performance.now() - re;
        let z = P.triangleCount;
        ((Z.hillLights = l ? ih(P, V) : 0),
          !l && t?.props && (t.props(P, V), t.statics?.()),
          (Z.propsBreakdown = {
            riverside: I - te,
            farbank: ne - I,
            edges: z - ne,
            hillLights: P.triangleCount - z,
          }),
          (Z.edgeBuildings = R.buildings));
        let ie = R.blocked;
        Vt = R.lodBoxes;
        let ae = dt(),
          oe = (e, t = 0) => ({ area: ae, dist: e, detailDist: t });
        if (ee.count > 0) {
          lt = ee.build();
          let t = lt.geometry;
          ((X = new dg(t, 200).view(t, !0, oe(420))),
            ft(`env-light-pools`, X),
            (lt.geometry = X.geometry),
            (lt.frustumCulled = !1),
            e.scene.add(lt));
        }
        Z.buildings = L.buildings;
        let de = e.plan.bounds.maxZ + 190;
        if (
          ((kt = F.paths
            .map((e) => ({
              ...e,
              points: e.points.map((e) => ({ x: e.x, z: Math.min(e.z, de) })),
            }))
            .filter(
              (e) =>
                Math.hypot(
                  e.points[1].x - e.points[0].x,
                  e.points[1].z - e.points[0].z,
                ) > 11,
            )),
          Wm.uWheelCenter.value.copy(L.wheelCenter),
          l && nh(P, L.wheelCenter),
          (Z.propsTris = P.triangleCount),
          (Z.builderFill.props = [P.vertexCount, P.indexCount]),
          await f(`edges`),
          P.triangleCount > 0)
        ) {
          let t = P.build(),
            n = Zg(t, P.tierTable(), L.wheelCenter);
          for (let e of n.tiles) e.detail && (Z.detailTris += e.count / 3);
          await f(`propsTiles`);
          let r = n.view(t, !0, oe(ut * e.quality.drawDistance, 380)),
            i = n.view(t, !1);
          (ft(`env-props`, r), ft(`env-props-far`, i), Jg(t));
          let a = new M(r.geometry, Gm(j, `main`));
          ((a.frustumCulled = !1),
            (a.receiveShadow = l),
            l || (a.userData.noWarm = !0),
            (a.name = `env-props`));
          let o = new M(i.geometry, Gm(j, `far`));
          ((o.frustumCulled = !1),
            (o.name = `env-props-far`),
            Y.push({ view: r, mesh: a }),
            $e.push({ view: i, mesh: o }),
            e.scene.add(a),
            B.scene.add(o));
        }
        Ht();
        {
          let t = e.plan.roads.map((e) => ({
              axis: e.axis,
              at: e.at,
              from: e.from,
              to: e.to,
              halfWidth: e.halfWidth,
              lanesPerDir: e.lanesPerDir,
              median: e.median,
              major: e.major,
              pedestrian: e.pedestrian,
            })),
            n = e.plan.nodes
              .filter((e) => e.kind !== `end`)
              .map((e) => ({
                x: e.x,
                z: e.z,
                halfX: e.halfX,
                halfZ: e.halfZ,
                signal: e.signal,
              }));
          for (let e of R.lightRoads) t.push(e);
          for (let e of R.lightNodes) n.push(e);
          let i =
              Number(e.params.get(`lightsthin`) ?? 0) ||
              (r.level === `low` ? 2 : 1),
            a = ig(t, n, L.parkLamps, {
              laneWidth: e.plan.laneWidth,
              side: e.plan.side,
              thin: i,
            }),
            o = e.plan.bounds,
            s = (e, t) => {
              let n = e.attributes.aP;
              return new dg(
                e,
                400,
                (e) => (n.getW(e) > 1.5 ? `streaks` : null),
                (e, t) => {
                  e === `streaks`
                    ? t.set(
                        Mt.set(o.minX - 1200, -20, o.minZ - 200),
                        Nt.set(o.maxX + 1200, 160, o.maxZ + 1e3),
                      )
                    : t.expandByScalar(18);
                },
              ).view(e, !0, t);
            };
          ((xt = s(a.mesh.geometry)),
            (St = s(a.main.geometry, oe(ut * r.drawDistance))),
            ft(`env-city-lights`, xt),
            ft(`env-city-lights-main`, St),
            Jg(a.mesh.geometry),
            Jg(a.main.geometry),
            (yt = a.mesh),
            (yt.geometry = xt.geometry),
            (yt.visible = !1),
            B.scene.add(yt),
            (bt = a.main),
            (bt.geometry = St.geometry),
            (bt.visible = !1),
            e.scene.add(bt),
            Ct.copy(R.bounds));
          for (let e of L.parkLamps) Ct.expandByPoint(Mt.set(e.x, e.y, e.z));
          Z.cityLights = a.counts;
        }
        (await f(`lod+lights`),
          t?.ready?.({
            scene: e.scene,
            farScene: B.scene,
            propsMaterial: (e) => Gm(j, e),
            atmos: x,
            weather: O,
            field: V,
          }));
        let fe = l
            ? im(V, r.propDensity, (e, t) => F.blocked(e, t) || ie(e, t))
            : { matrices: [], colors: [], species: [], colliders: [] },
          ge = F.trees,
          _e = fe.matrices.length + ge.length,
          ve = Array.from({ length: 3 }, () => ({ m: [], c: [] }));
        for (let e = 0; e < fe.matrices.length; e++)
          (ve[fe.species[e]].m.push(fe.matrices[e]),
            ve[fe.species[e]].c.push(fe.colors[e]));
        let Se = ve[0].m,
          Ee = ve[0].c,
          W = new Ce(),
          Oe = new U(),
          ke = new U();
        for (let t of ge) {
          let n = (((t.x * 7.13 + t.z * 3.7) % 1) + 1) % 1;
          (W.setFromAxisAngle(Lt, n * Math.PI * 2),
            ke.set(t.x, t.y - 0.2, t.z),
            Oe.set(t.s, t.s * (0.9 + n * 0.3), t.s),
            Se.push(new De().compose(ke, W, Oe)),
            Ee.push(am(n, 0.5, (n * 3.3) % 1).multiplyScalar(1.1)),
            e.statics.addCircle(
              t.x,
              t.z,
              0.35 * Math.max(0.6, t.s),
              t.y,
              t.y + 4,
              `tree`,
            ));
        }
        let G = tm(),
          je = rm();
        Qe = ve[0].m.length + 400;
        for (let t = 0; t < 3; t++) {
          let n = Math.max(1, t === 0 ? Qe : ve[t].m.length),
            r = new ye(G[t], je, n);
          ((r.name = t === 0 ? `env-trees` : `env-trees-${t}`),
            ze.push(r),
            Be.push(new pg(r, ve[t].m, ve[t].c, 100, t === 1 ? 10 : 7)),
            e.scene.add(r));
        }
        if (!p && l) {
          let t = zg(),
            n = Hg(Cg(e.renderer.gl.capabilities.getMaxAnisotropy()));
          for (let r = 0; r < t.length; r++) {
            let i = Be[r],
              a = Math.max(
                1,
                Math.min(
                  i.count + (r === 0 ? 400 : 0),
                  i.maxWithin(115, ae) + (r === 0 ? 400 : 16),
                ),
              ),
              o = new ye(t[r], n, a);
            ((o.name = `env-trees-near-${r}`),
              Ve.push(o),
              He.push(new pg(o, i, null, 100, 0)),
              e.scene.add(o));
          }
          let i = e.plan.bounds,
            a = (e, t) => F.blocked(e, t) || ie(e, t);
          J = Vg(
            (e, t) => V.height(e, t),
            (e, t, n) => {
              if (V.kind(e, t) !== `land`) return !1;
              let r = V.outside(e, t);
              if (r < 12 || r > 330) return !1;
              let i = n - c;
              return i < 2.5 || (V.edgeUrban(e, t) > 0.3 && i < 9)
                ? !1
                : !a(e, t);
            },
            {
              x0: i.minX - 340,
              x1: i.maxX + 340,
              z0: i.minZ - 340,
              z1: i.maxZ + 340,
            },
            7.5 / Math.sqrt(Math.max(0.3, r.propDensity)),
          );
          let o = new pg(null, J.m, J.c, 100, 2.5);
          ((Je = new ye(
            Bg(),
            n,
            Math.max(1, Math.min(o.count, o.maxWithin(95, ae) + 16)),
          )),
            (Je.name = `env-shrubs`),
            (Ye = new pg(Je, o, null, 100, 0)),
            e.scene.add(Je),
            (Z.shrubs = J.m.length));
        }
        ((Ze = ve),
          (ct = fe.colliders.map((t) => ({
            x: t.x,
            z: t.z,
            c: e.statics.addCircle(t.x, t.z, 0.5, t.y - 1, t.y + 6, `tree`),
          }))),
          (Z.trees = _e),
          await f(`trees`));
        let Me = dh();
        for (let [t, n] of l
          ? [
              [e.scene, `plane`],
              [B.scene, `plane-far`],
            ]
          : []) {
          let e = Gm(j, n),
            r = new M(Me, e);
          ((r.visible = !1),
            (r.rotation.order = `YXZ`),
            (r.name = `env-plane`),
            t.add(r),
            ue.push(r));
        }
        if (d.get(`plane`) === `1`) {
          le.begin(b);
          for (let e = 0; e < 660; e++) le.update(1 / 30, b);
        } else le.cooldown = 35 + b() * 50;
        (l &&
          (pn(j),
          (pe = new _h(
            { x: (i + V.westBank(-250)) / 2 - 10, z: -250 },
            60,
            430,
          )),
          e.scene.add(pe.mesh)),
          (H = new ch(r.rainParticles)),
          (H.sheltered = Et));
        for (let e of Ot) e.real === 0 && (e.real = H.addOccluder(e.rect, e.y));
        if (l) for (let e of qg) H.addOccluder(e.rect, e.y);
        (e.scene.add(H.mesh),
          (ce = new uh()),
          B.scene.add(ce.mesh),
          (await Ue(
            Xt().then(() => !0),
            8e3,
            `postfx`,
            () => !1,
          )) ||
            (Jt++,
            console.warn(
              `[environment] post-processing chunk not loaded after 8 s — rendering without post-processing`,
            )));
        try {
          be = new we(e.renderer.gl);
        } catch {
          be = null;
        }
        (N >= 1 && Rf(O, Lf[D]), on(0), an(!1), on(0), mn());
        for (let e of [
          yt,
          bt,
          lt,
          H.mesh,
          ce.mesh,
          pe?.mesh,
          ...ue,
          ...ze,
          ...Ve,
          Je,
        ])
          e && (e.visible = !0);
        (he?.bloom && (he.bloomActive = !0),
          un(),
          s(`rest`),
          (Z.initMs = performance.now() - n),
          console.info(
            `[init] environment ${Z.initMs.toFixed(0)}ms · terrain ${Z.terrainTris} tris · props ${Z.propsTris} tris · ${Z.buildings} far buildings · ${Z.trees} trees · gates ${F.gates.length} · lamps ${F.lampCount}`,
          ));
      },
      prewarm() {
        try {
          (un(), rn() && be && an());
        } catch (e) {
          console.warn(`[environment] light rig sync failed`, e);
        }
        let e = [],
          t = (t) => {
            if (!t) return;
            let n = t,
              i;
            if (n.isInstancedMesh) {
              let e = new ye(n.geometry, n.material, 1);
              (n.instanceColor &&
                (e.instanceColor = new r(new Float32Array(3).fill(1), 3)),
                (i = e));
            } else i = new M(t.geometry, t.material);
            ((i.castShadow = t.castShadow),
              (i.receiveShadow = t.receiveShadow),
              (i.renderOrder = t.renderOrder),
              (i.frustumCulled = !1),
              (i.name = t.name + `-prewarm`),
              e.push(i));
          };
        (t(H?.mesh), t(lt), t(bt), t(pe?.mesh));
        for (let e of Ve) t(e);
        return (t(Je), e);
      },
      start() {
        try {
          let t = e.landmarks?.trail;
          t && t.length > 1 && ln(t);
        } catch (e) {
          console.warn(`[environment] trail clearing failed`, e);
        }
        if (
          ((Ze = []),
          (J = { m: [], c: [] }),
          (ct = []),
          d.get(`envstub`) !== `hide`)
        )
          return;
        let t = new xe(),
          n = e.plan.bounds;
        for (let r of [...e.scene.children]) {
          let i = r;
          i.isMesh &&
            !i.name.startsWith(`env-`) &&
            (i.geometry.boundingBox || i.geometry.computeBoundingBox(),
            t.copy(i.geometry.boundingBox),
            !(t.min.x > -1500) &&
              (t.min.x <= -2500
                ? (i.visible = !1)
                : ((i.material.clippingPlanes = [
                    new te(new U(1, 0, 0), -n.minX),
                    new te(new U(-1, 0, 0), n.maxX),
                    new te(new U(0, 0, 1), -n.minZ),
                    new te(new U(0, 0, -1), n.maxZ),
                  ]),
                  (e.renderer.gl.localClippingEnabled = !0))));
        }
      },
      update(n) {
        let r = performance.now();
        ((Ne = n),
          B.ensureInstalled(),
          hn.timeScale !== 0 &&
            ((h += (n * hn.timeScale) / 60),
            h >= 24 && (h -= 24),
            h < 0 && (h += 24)));
        let o = Math.floor(h);
        if ((o !== ne && ((ne = o), Gt(o)), N < 1)) {
          N = Math.min(1, N + n / P);
          let e = N * N * (3 - 2 * N);
          zf(O, k, A, e);
        }
        ((F =
          O.rain > 0.05
            ? Math.min(1, F + n * (0.03 + 0.1 * O.rain))
            : Math.max(0, F - n * (0.0035 + 0.006 * O.sunOcc * (1 - x.dim)))),
          O.rain > 0.4 && (ae = !0),
          ae && O.rain < 0.15 && ((ae = !1), (ie = 150)),
          (ie -= n));
        let s = +(ie > 0 && x.sunEl > 2 && x.sunEl < 42 && O.sunOcc > 0.3);
        if (
          ((R += (s - R) * Math.min(1, n * 0.25)),
          (se.uRainbow.value = R * Ge((O.sunOcc - 0.3) * 2, 0, 1)),
          ce)
        ) {
          let t = O.storm > 0.55 || Tt,
            r = O.storm > 0.1 && O.rain > 0.5;
          if ((t || r) && ((re -= n), re <= 0)) {
            let n = t ? b() < 0.7 : b() < 0.15;
            (ce.strike(
              e.camera.position,
              (e, t) => V.height(e, t),
              b,
              e.time.real,
              n,
            ),
              (re = t ? 3 + b() * (Tt ? 3 : 11) : 25 + b() * 40));
          }
          ce.update(n, e.time.real, Kt);
        }
        let c = e.player?.position;
        if (c && n > 0) {
          if (Re) {
            let e = Math.min(
              60,
              Math.hypot(c.x - Le.x, c.y - Le.y, c.z - Le.z) / n,
            );
            Ie += (e - Ie) * Math.min(1, n * 8);
          }
          (Le.copy(c), (Re = !0));
        }
        if ((on(n), t?.update?.(n), fn(n), H)) {
          let t = x.dim;
          (Pt.copy(x.hemiSky).multiplyScalar(x.hemiIntensity * 0.34),
            (Pt.r += 0.1 * t),
            (Pt.g += 0.08 * t),
            (Pt.b += 0.07 * t));
          let n = ce ? ce.flash : 0;
          ((Pt.r += n * 0.8),
            (Pt.g += n * 0.85),
            (Pt.b += n),
            H.update(
              O.rain,
              e.time.real % 3600,
              O.wind,
              e.player?.position.y ?? 0,
              Pt,
            ));
        }
        let u = l && le.update(n, b);
        for (let e of ue)
          ((e.visible = u),
            u &&
              (e.position.copy(le.pos),
              e.rotation.set(le.pitch, -le.heading, le.roll)));
        if (u) {
          if (!At)
            try {
              At = e.audio.loop(`jet`, {
                volume: 1,
                x: le.pos.x,
                y: le.pos.y,
                z: le.pos.z,
              });
            } catch {
              At = null;
            }
          At &&
            (At.setPosition(le.pos.x, le.pos.y, le.pos.z),
            At.setParam?.(
              `thrust`,
              le.pos.y > 120 ? 0.55 : 0.4 + 0.15 * (le.pos.y / 120),
            ));
        } else if (At) {
          try {
            At.stop();
          } catch {}
          At = null;
        }
        if (
          ((Wm.uWheelAngle.value =
            (Wm.uWheelAngle.value - n * 0.012) % (Math.PI * 2)),
          pe &&
            pe.update(
              n,
              (1 - x.dim) * (O.rain < 0.3) * (O.storm < 0.3),
              e.camera.position,
              e.camera.far * 0.8,
            ),
          fe)
        ) {
          fe.update(n);
          for (let e of de)
            (e.position.copy(fe.pos), (e.rotation.y = -fe.heading));
        }
        if (((Oe -= n), Oe <= 0)) {
          Oe = 0.5;
          let t = O.cloud * 3 + O.overcast * 5 + O.mist * 7 + O.storm * 11,
            n = Math.abs(h - je);
          n > 12 && (n = 24 - n);
          let r = ce ? ce.flash : 0,
            i = e.quality.level === `medium` ? 1 : 0.5;
          rn() && (n > i || Math.abs(t - Me) > 0.3) && r < 0.01 && an();
        }
        if (
          (K.rain && K.rain.setVolume(Math.min(1, O.rain * 1.1)),
          K.wind &&
            K.wind.setVolume(Ge((O.wind - 0.3) * 0.8 + O.storm * 0.3, 0, 0.8)),
          K.river)
        ) {
          let t = e.camera.position,
            n = t.x - i,
            r = t.z - a;
          (n < r
            ? K.river.setPosition(i - 5, e.plan.waterLevel, t.z)
            : K.river.setPosition(t.x, e.plan.waterLevel, a - 5),
            K.river.setVolume(Ge(1 - Math.min(n, r) / 160, 0, 1) * 0.55));
        }
        Z.updateMs = Z.updateMs * 0.95 + (performance.now() - r) * 0.05;
      },
    };
  return hn;
}
var e_ = 3,
  t_ = 3,
  n_ = {
    uStreetLm: { value: null },
    uLmXf: { value: new de(0, 0, 0, 0) },
    uLmGain: { value: 1.3 },
    uLmNight: q.uNight,
    uLmWet: q.uWet,
  },
  r_ = `varying vec3 vLmW;
varying float vLmNy;`,
  i_ = `
  {
    vec4 lmw = vec4(transformed, 1.0);
    vec3 lmn = objectNormal;
    #ifdef USE_BATCHING
    lmw = batchingMatrix * lmw;
    lmn = mat3(batchingMatrix) * lmn;
    #endif
    #ifdef USE_INSTANCING
    lmw = instanceMatrix * lmw;
    lmn = mat3(instanceMatrix) * lmn;
    #endif
    lmw = modelMatrix * lmw;
    vLmW = lmw.xyz;
    vLmNy = normalize(mat3(modelMatrix) * lmn).y;
  }`,
  a_ = `
  uniform sampler2D uStreetLm;
  uniform vec4 uLmXf;
  uniform float uLmGain;
  uniform float uLmNight;
  uniform float uLmWet;
  varying vec3 vLmW;
  varying float vLmNy;
  vec4 lmSample() {
    vec2 luv = (vLmW.xz - uLmXf.xy) * uLmXf.zw;
    if (luv.x < 0.0 || luv.y < 0.0 || luv.x > 1.0 || luv.y > 1.0) return vec4(0.0);
    return texture2D(uStreetLm, luv) * ${e_.toFixed(1)};
  }
  float lmNightK() { return smoothstep(0.25, 0.75, uLmNight); }
  // overlapping pools (junction floods, rows of shop fronts) compress instead of blowing out to white
  vec3 lmCompress(vec3 L) { return L * uLmGain / (1.0 + 0.35 * L); }
  // lamp-lit radiance of an albedo, with a soft knee: dark asphalt reads lit, white paint / pale granite under a
  // junction flood stays below the daylight white point
  vec3 lmLit(vec3 alb, vec3 L) { vec3 c = alb * L; return c / (1.0 + 2.6 * c); }
  vec3 lmStreet() {
    float k = lmNightK();
    if (k <= 0.0) return vec3(0.0);
    vec4 s = lmSample();
    vec3 L = vLmW.y < ${t_.toFixed(1)} ? s.rgb : s.aaa * vec3(1.0, 0.72, 0.42);
    return lmCompress(L) * smoothstep(-0.15, 0.55, vLmNy) * k;
  }
  vec3 lmProp() {
    float k = lmNightK();
    if (k <= 0.0) return vec3(0.0);
    vec3 L = lmSample().rgb;
    float hk = 1.0 - smoothstep(8.5, 13.0, vLmW.y);
    return lmCompress(L) * hk * (0.3 + 0.7 * max(vLmNy, 0.0)) * k;
  }`;
function o_(e) {
  Object.assign(e, n_);
}
export {
  kt as $,
  xr as A,
  Wn as B,
  Ur as C,
  Ir as D,
  Lr as E,
  Kn as F,
  Fn as G,
  Rn as H,
  Gn as I,
  An as J,
  _n as K,
  qn as L,
  yr as M,
  $n as N,
  Tr as O,
  Xn as P,
  un as Q,
  Hn as R,
  qr as S,
  Rr as T,
  In as U,
  Ln as V,
  Nn as W,
  dn as X,
  Sn as Y,
  ln as Z,
  Gr as _,
  $g as a,
  Ze as at,
  Qr as b,
  Vp as c,
  If as d,
  Ot as et,
  ri as f,
  Kr as g,
  Zr as h,
  o_ as i,
  Qe as it,
  Sr as j,
  wr as k,
  Ap as l,
  Jr as m,
  i_ as n,
  vt as nt,
  Em as o,
  et as ot,
  $r as p,
  vn as q,
  r_ as r,
  X as rt,
  pm as s,
  Y as st,
  a_ as t,
  wt as tt,
  mp as u,
  Yr as v,
  zr as w,
  Wr as x,
  Xr as y,
  Un as z,
};
