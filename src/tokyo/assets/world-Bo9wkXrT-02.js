// tokyo/assets/world-Bo9wkXrT 02 — math
// Lines 164-979 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
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
    m = new we();
    nm = new o();
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
      for (let t = 0; t < e.length; t += 2) i.push(new ce(e[t], e[t + 1]));
      let a = me.triangulateShape(i, []),
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
      for (let t = 0; t < e.length; t += 2) i.push(new ce(e[t], e[t + 1]));
      me.isClockWise(i) && i.reverse();
      let a = me.triangulateShape(i, []),
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
  it = new we();
