// tokyo/assets/world-Bo9wkXrT 04 — math
// Lines 1004-1543 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
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
  },
  ut = class e {
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
        d =
          r > 65535
            ? a && a.ic === a.idx.length
              ? a.idx
              : new Uint32Array(i)
            : new Uint16Array(i),
        f = [],
        p = 0,
        m = 0;
      if (a) {
        if (d !== a.idx) for (let e = 0; e < i; e++) d[e] = a.idx[e];
        f.push(0, i);
      }
      for (let t of a ? [] : e) {
        (f.push(m),
          o.set(t.pos.subarray(0, t.vc * 3), p * 3),
          s.set(t.nrm.subarray(0, t.vc * 4), p * 4),
          c.set(t.uv.subarray(0, t.vc * 2), p * 2),
          l.set(t.tint.subarray(0, t.vc * 4), p * 4),
          u.set(t.info.subarray(0, t.vc * 4), p * 4));
        for (let e = 0; e < t.ic; e++) d[m + e] = t.idx[e] + p;
        ((p += t.vc), (m += t.ic));
      }
      a || f.push(m);
      let h = new V();
      (h.setAttribute(`position`, new H(o, 3)),
        h.setAttribute(`normal`, new H(s, 4, !0)),
        h.setAttribute(`uv`, new H(c, 2)),
        h.setAttribute(`aTint`, new H(l, 4, !0)),
        h.setAttribute(`aInfo`, new H(u, 4, !1)),
        h.setIndex(new H(d, 1)));
      let g = n ?? null;
      if (!g)
        for (let t of e) {
          let e = t.bounds();
          e && (g = g ? g.union(e) : e);
        }
      return (
        (h.boundingBox = g ? g.clone() : new be()),
        (h.boundingSphere = h.boundingBox.getBoundingSphere(new T())),
        { geo: h, starts: f }
      );
    }
    bounds(e = 0) {
      if (this.vc <= e) return null;
      if (this.dry)
        return new be(new U().fromArray(this.mn), new U().fromArray(this.mx));
      let t = new be(),
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
  dt = { x0: 10, y0: 26, x1: 246, y1: 248 },
  ft = dt.x0,
  pt = dt.x1,
  mt = dt.y0,
  ht = dt.y1;
