// tokyo/assets/world-CVm1JHks 19 — math
// Lines 5448-6035 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var Wr = () => Ir,
  Gr = class e {
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
      let n = Hr(t);
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
        n = Rr(t);
      (e && Ir + n <= Lr && (Fr.push(t), (Ir += n)),
        (this.P = this.N = this.T = this.C = zr),
        (this.I = Vr));
    }
    col(e, t = 0, n = 1) {
      return (
        Nr.setHex(e),
        (this.r = Nr.r * n),
        (this.g = Nr.g * n),
        (this.b = Nr.b * n),
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
        n = Br;
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
        _ = Pr.length >= g * 8 ? Pr : (Pr = new Float64Array(g * 8));
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
      let p = new z();
      return (
        p.setAttribute(`position`, new B(i, 3)),
        p.setAttribute(`normal`, new B(a, 3)),
        p.setAttribute(`uv`, new B(o, 2)),
        p.setAttribute(`color`, new B(s, 4)),
        p.setIndex(new B(c, 1)),
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
          d = (a + c) / 2,
          f = 0;
        for (let e = 0; e < n * 3; e += 3) {
          let n = t[e] - l,
            r = t[e + 1] - u,
            i = t[e + 2] - d,
            a = n * n + r * r + i * i;
          a > f && (f = a);
        }
        ((e.boundingBox = new pe(new U(r, i, a), new U(o, s, c))),
          (e.boundingSphere = new p(new U(l, u, d), Math.sqrt(f))));
      } else ((e.boundingBox = new pe()), (e.boundingSphere = new p()));
      return e;
    }
    get triangles() {
      return this.icount / 3;
    }
  };
