// tokyo/assets/region-tokyo-A7LxHjud 145 — math
// Lines 61462-62195 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Lx = (e) => Ix[e <= 0 ? 0 : e >= 255 ? 255 : Math.round(e)],
  Ope = class {
    w;
    white;
    coarse = !1;
    colliders = null;
    ox = 0;
    oz = 0;
    gy = 0;
    facing = 0;
    c = 1;
    s = 0;
    stack = [];
    st = { r: 255, g: 255, b: 255, rough: 0.85, metal: 0, emis: 0, flags: 0 };
    constructor(e, t) {
      ((this.w = e), (this.white = t));
    }
    frame(e, t, n, r) {
      return (
        this.place(e, t, n, r),
        (this.stack.length = 0),
        (this.st = {
          r: 255,
          g: 255,
          b: 255,
          rough: 0.85,
          metal: 0,
          emis: 0,
          flags: 0,
        }),
        this.apply(),
        this
      );
    }
    place(e, t, n, r) {
      ((this.ox = e),
        (this.oz = n),
        (this.gy = t),
        (this.facing = r),
        (this.c = Math.cos(r)),
        (this.s = Math.sin(r)));
    }
    sub(e, t, n, r) {
      let i = { ox: this.ox, gy: this.gy, oz: this.oz, facing: this.facing };
      return (
        this.place(this.wx(e, n), this.gy + t, this.wz(e, n), this.facing + r),
        i
      );
    }
    leave(e) {
      return (this.place(e.ox, e.gy, e.oz, e.facing), this);
    }
    wx(e, t) {
      return this.ox + e * this.c - t * this.s;
    }
    wz(e, t) {
      return this.oz + e * this.s + t * this.c;
    }
    lx(e, t) {
      let n = e - this.ox,
        r = t - this.oz;
      return n * this.c + r * this.s;
    }
    lz(e, t) {
      let n = e - this.ox,
        r = t - this.oz;
      return -n * this.s + r * this.c;
    }
    apply() {
      let e = this.st;
      this.w
        .setColor(e.r, e.g, e.b)
        .setMaterial(e.rough, e.metal, e.emis, e.flags);
    }
    col(e, t = 1) {
      return (
        (this.st.r = Lx(((e >> 16) & 255) * t)),
        (this.st.g = Lx(((e >> 8) & 255) * t)),
        (this.st.b = Lx((e & 255) * t)),
        this.apply(),
        this
      );
    }
    mat(e, t = 0, n = 0, r = 0) {
      return (
        Object.assign(this.st, { rough: e, metal: t, emis: n, flags: r }),
        this.apply(),
        this
      );
    }
    emis(e, t = this.st.flags) {
      return ((this.st.emis = e), (this.st.flags = t), this.apply(), this);
    }
    push() {
      let e = this.st;
      return (
        this.stack.push([e.r, e.g, e.b, e.rough, e.metal, e.emis, e.flags]),
        this
      );
    }
    pop() {
      let e = this.stack.pop();
      if (e) {
        let t = this.st;
        (([t.r, t.g, t.b, t.rough, t.metal, t.emis, t.flags] = e),
          this.apply());
      }
      return this;
    }
    get emissive() {
      return this.st.emis;
    }
    seg(e) {
      return this.coarse ? Math.max(3, Math.ceil(e / 2)) : e;
    }
    v(e, t, n, r, i, a, o, s) {
      return this.w.vertex(
        this.wx(e, n),
        this.gy + t,
        this.wz(e, n),
        r * this.c - a * this.s,
        i,
        r * this.s + a * this.c,
        o,
        s,
      );
    }
    tri(e, t, n) {
      this.w.tri(e, t, n);
    }
    quad(
      e,
      t,
      n,
      r,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f = this.white,
      p = 0,
      m = 0,
      h = 1,
      g = 1,
    ) {
      let _ = (e) => f.u0 + (f.u1 - f.u0) * e,
        v = (e) => f.v0 + (f.v1 - f.v0) * e;
      return (
        this.w.quad(
          this.wx(e, n),
          this.gy + t,
          this.wz(e, n),
          this.wx(r, a),
          this.gy + i,
          this.wz(r, a),
          this.wx(o, c),
          this.gy + s,
          this.wz(o, c),
          this.wx(l, d),
          this.gy + u,
          this.wz(l, d),
          _(p),
          v(m),
          _(h),
          v(g),
        ),
        this
      );
    }
    triFace(e, t, n, r, i, a, o, s, c) {
      let l = r - e,
        u = i - t,
        d = a - n,
        f = o - e,
        p = s - t,
        m = c - n,
        h = u * m - d * p,
        g = d * f - l * m,
        _ = l * p - u * f,
        v = Math.hypot(h, g, _) || 1;
      ((h /= v), (g /= v), (_ /= v));
      let y = this.white,
        b = this.v(e, t, n, h, g, _, y.u0, y.v0);
      return (
        this.v(r, i, a, h, g, _, y.u0, y.v0),
        this.v(o, s, c, h, g, _, y.u0, y.v0),
        this.tri(b, b + 1, b + 2),
        this
      );
    }
    grid(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
      let h = (f, p) => {
        let m = e + (r - e) * f,
          h = t + (i - t) * f,
          g = n + (a - n) * f,
          _ = l + (o - l) * f,
          v = u + (s - u) * f,
          y = d + (c - d) * f;
        return [m + (_ - m) * p, h + (v - h) * p, g + (y - g) * p];
      };
      ((p = Math.max(1, Math.round(p))), (m = Math.max(1, Math.round(m))));
      for (let e = 0; e < m; e++)
        for (let t = 0; t < p; t++) {
          let n = h(t / p, e / m),
            r = h((t + 1) / p, e / m),
            i = h((t + 1) / p, (e + 1) / m),
            a = h(t / p, (e + 1) / m);
          this.quad(
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
            f,
          );
        }
      return this;
    }
    panel(e, t, n, r, i, a, o = this.white, s = 0, c = 0, l = 1, u = 1) {
      return this.quad(e, i, t, n, i, r, n, a, r, e, a, t, o, s, c, l, u);
    }
    wall(e, t, n, r, i, a, o, s, c, l, u = 0) {
      let d = Math.hypot(n - e, r - t);
      if (d < 0.001 || a - i < 0.001) return this;
      let f = (n - e) / d,
        p = (r - t) / d,
        m = this.st.emis,
        h = l !== void 0,
        g = 0;
      if (s <= 0.001 || c <= 0.001) return this;
      for (; g < d - 0.001;) {
        let n = (((u + g) % s) + s) % s;
        s - n < 1e-4 && (n = 0);
        let r = Math.min(s - n, d - g),
          _ = n / s,
          v = (n + r) / s,
          y = i;
        for (; y < a - 0.001;) {
          let n = (y - i) % c;
          c - n < 1e-4 && (n = 0);
          let s = Math.min(c - n, a - y),
            u = n / c,
            d = (n + s) / c;
          h && this.emis(m + (l - m) * ((y - i) / (a - i)));
          let b = e + f * g,
            x = t + p * g,
            S = e + f * (g + r),
            C = t + p * (g + r);
          if (h) {
            let e = this.w.n;
            this.quad(
              b,
              y,
              x,
              S,
              y,
              C,
              S,
              y + s,
              C,
              b,
              y + s,
              x,
              o,
              _,
              u,
              v,
              d,
            );
            let t = Math.round(
              Math.min(1, Math.max(0, m + (l - m) * ((y + s - i) / (a - i)))) *
                255,
            );
            ((this.w.ca[(e + 2) * 8 + 6] = t),
              (this.w.ca[(e + 3) * 8 + 6] = t));
          } else
            this.quad(
              b,
              y,
              x,
              S,
              y,
              C,
              S,
              y + s,
              C,
              b,
              y + s,
              x,
              o,
              _,
              u,
              v,
              d,
            );
          y += s;
        }
        g += r;
      }
      return (h && this.emis(m), this);
    }
    flat(e, t, n, r, i, a = this.white, o = 0, s = 0, c = !0) {
      if (!o)
        return (
          c
            ? this.quad(e, i, r, n, i, r, n, i, t, e, i, t, a)
            : this.quad(e, i, t, n, i, t, n, i, r, e, i, r, a),
          this
        );
      for (let l = e; l < n - 0.001; l += o) {
        let e = Math.min(n, l + o);
        for (let n = t; n < r - 0.001; n += s) {
          let t = Math.min(r, n + s),
            u = (e - l) / o,
            d = (t - n) / s;
          c
            ? this.quad(l, i, t, e, i, t, e, i, n, l, i, n, a, 0, 0, u, d)
            : this.quad(l, i, n, e, i, n, e, i, t, l, i, t, a, 0, 0, u, d);
        }
      }
      return this;
    }
    box(e, t, n, r, i, a, o = this.white, s = 0, c = 0, l = null, u = !1) {
      let d = l ?? o;
      return (
        s > 0
          ? (this.wall(r, n, e, n, t, i, o, s, c),
            this.wall(e, a, r, a, t, i, o, s, c),
            this.wall(e, n, e, a, t, i, o, s, c),
            this.wall(r, a, r, n, t, i, o, s, c))
          : (this.panel(r, n, e, n, t, i, o),
            this.panel(e, a, r, a, t, i, o),
            this.panel(e, n, e, a, t, i, o),
            this.panel(r, a, r, n, t, i, o)),
        this.flat(e, n, r, a, i, l ? d : this.white),
        u && this.flat(e, n, r, a, t, this.white, 0, 0, !1),
        this
      );
    }
    obox(e, t, n, r, i, a, o = 0, s = null) {
      let c = Math.cos(o),
        l = Math.sin(o),
        u = (t, r) => [e + t * c - r * l, n + t * l + r * c],
        d = u(-r, -a),
        f = u(r, -a),
        p = u(r, a),
        m = u(-r, a),
        h = t - i,
        g = t + i;
      return (
        this.panel(f[0], f[1], d[0], d[1], h, g, s ?? this.white),
        this.panel(m[0], m[1], p[0], p[1], h, g),
        this.panel(d[0], d[1], m[0], m[1], h, g),
        this.panel(p[0], p[1], f[0], f[1], h, g),
        this.quad(m[0], g, m[1], p[0], g, p[1], f[0], g, f[1], d[0], g, d[1]),
        this
      );
    }
    extrudeX(e, t, n, r = !1, i = !1, a = this.white) {
      let o = e.length / 2,
        s = r ? o : o - 1;
      for (let r = 0; r < s; r++) {
        let i = (r + 1) % o,
          s = e[r * 2],
          c = e[r * 2 + 1],
          l = e[i * 2],
          u = e[i * 2 + 1];
        this.quad(t, c, s, t, u, l, n, u, l, n, c, s, a);
      }
      if (i && o >= 3)
        for (let [r, i] of [
          [n, !1],
          [t, !0],
        ]) {
          let t = this.white,
            n = i ? -1 : 1,
            a = this.w.n;
          for (let i = 0; i < o; i++)
            this.v(r, e[i * 2 + 1], e[i * 2], n, 0, 0, t.u0, t.v0);
          for (let e = 1; e + 1 < o; e++)
            i ? this.tri(a, a + e + 1, a + e) : this.tri(a, a + e, a + e + 1);
        }
      return this;
    }
    extrudeZ(e, t, n, r = !1, i = !1, a = this.white) {
      let o = e.length / 2,
        s = r ? o : o - 1;
      for (let r = 0; r < s; r++) {
        let i = (r + 1) % o,
          s = e[r * 2],
          c = e[r * 2 + 1],
          l = e[i * 2],
          u = e[i * 2 + 1];
        this.quad(s, c, t, l, u, t, l, u, n, s, c, n, a);
      }
      if (i && o >= 3) {
        let r = this.white;
        for (let [i, a] of [
          [n, !1],
          [t, !0],
        ]) {
          let t = this.w.n;
          for (let t = 0; t < o; t++)
            this.v(e[t * 2], e[t * 2 + 1], i, 0, 0, a ? -1 : 1, r.u0, r.v0);
          for (let e = 1; e + 1 < o; e++)
            a ? this.tri(t, t + e + 1, t + e) : this.tri(t, t + e, t + e + 1);
        }
      }
      return this;
    }
    sweep(e, t, n = !0, r = this.white) {
      let i = e.length / 2,
        a = t.length / 2;
      if (i < 2) return this;
      let o = [],
        s = [],
        c = 0;
      if (n)
        for (let t = 0; t < i; t++) {
          let n = (t + 1) % i;
          c += e[t * 2] * e[n * 2 + 1] - e[n * 2] * e[t * 2 + 1];
        }
      let l = c < 0 ? -1 : 1;
      for (let t = 0; t < i; t++) {
        let r = n ? (t - 1 + i) % i : Math.max(0, t - 1),
          a = n ? (t + 1) % i : Math.min(i - 1, t + 1),
          c = e[t * 2] - e[r * 2],
          u = e[t * 2 + 1] - e[r * 2 + 1],
          d = e[a * 2] - e[t * 2],
          f = e[a * 2 + 1] - e[t * 2 + 1];
        (t === r && ((c = d), (u = f)), t === a && ((d = c), (f = u)));
        let p = Math.hypot(c, u) || 1,
          m = Math.hypot(d, f) || 1;
        ((c /= p), (u /= p), (d /= m), (f /= m));
        let h = u * l,
          g = -c * l,
          _ = f * l,
          v = -d * l,
          y = h + _,
          b = g + v,
          x = Math.hypot(y, b) || 1;
        ((y /= x), (b /= x));
        let S = 1 / Math.max(0.3, y * h + b * g);
        (o.push(y * S), s.push(b * S));
      }
      let u = n ? i : i - 1;
      for (let n = 0; n < u; n++) {
        let c = (n + 1) % i;
        for (let i = 0; i + 1 < a; i++) {
          let a = t[i * 2],
            u = t[i * 2 + 1],
            d = t[i * 2 + 2],
            f = t[i * 2 + 3],
            p = (t, n) => [e[t * 2] + o[t] * n, e[t * 2 + 1] + s[t] * n],
            [m, h] = p(c, a),
            [g, _] = p(n, a),
            [v, y] = p(n, d),
            [b, x] = p(c, d);
          l > 0
            ? this.quad(m, u, h, g, u, _, v, f, y, b, f, x, r)
            : this.quad(g, u, _, m, u, h, b, f, x, v, f, y, r);
        }
      }
      return this;
    }
    lathe(e, t, n, r, i = 0, a = this.white, o = !1, s = !1) {
      let c = n.length / 2;
      for (let l = 0; l < r; l++) {
        let u = i + (l / r) * Math.PI * 2,
          d = i + ((l + 1) / r) * Math.PI * 2,
          f = Math.cos(u),
          p = Math.sin(u),
          m = Math.cos(d),
          h = Math.sin(d);
        for (let i = 0; i + 1 < c; i++) {
          let u = n[i * 2],
            d = n[i * 2 + 1],
            g = n[i * 2 + 2],
            _ = n[i * 2 + 3];
          if (u < 1e-4 && g < 1e-4) continue;
          let v = l / r,
            y = (l + 1) / r,
            b = i / (c - 1),
            x = (i + 1) / (c - 1);
          if (s) {
            let n = this.w.n,
              r = g - u,
              i = _ - d,
              s = Math.hypot(r, i) || 1,
              c = i / s,
              l = -r / s,
              S = o ? -1 : 1,
              C = (e) => a.u0 + (a.u1 - a.u0) * e,
              w = (e) => a.v0 + (a.v1 - a.v0) * e;
            (this.v(
              e + f * u,
              d,
              t + p * u,
              f * c * S,
              l * S,
              p * c * S,
              C(v),
              w(b),
            ),
              this.v(
                e + m * u,
                d,
                t + h * u,
                m * c * S,
                l * S,
                h * c * S,
                C(y),
                w(b),
              ),
              this.v(
                e + m * g,
                _,
                t + h * g,
                m * c * S,
                l * S,
                h * c * S,
                C(y),
                w(x),
              ),
              this.v(
                e + f * g,
                _,
                t + p * g,
                f * c * S,
                l * S,
                p * c * S,
                C(v),
                w(x),
              ),
              o
                ? (this.tri(n, n + 1, n + 2), this.tri(n, n + 2, n + 3))
                : (this.tri(n, n + 2, n + 1), this.tri(n, n + 3, n + 2)));
            continue;
          }
          o
            ? this.quad(
                e + f * u,
                d,
                t + p * u,
                e + m * u,
                d,
                t + h * u,
                e + m * g,
                _,
                t + h * g,
                e + f * g,
                _,
                t + p * g,
                a,
                v,
                b,
                y,
                x,
              )
            : this.quad(
                e + m * u,
                d,
                t + h * u,
                e + f * u,
                d,
                t + p * u,
                e + f * g,
                _,
                t + p * g,
                e + m * g,
                _,
                t + h * g,
                a,
                y,
                b,
                v,
                x,
              );
        }
      }
      return this;
    }
    cylY(e, t, n, r, i, a = 8, o = i, s = !0) {
      return (
        this.lathe(e, t, [i, n, o, r], this.seg(a), 0, this.white, !1, !0),
        s && this.disc(e, r, t, o, this.seg(a)),
        this
      );
    }
    disc(e, t, n, r, i = 8, a = !1) {
      let o = this.white,
        s = this.v(e, t, n, 0, a ? -1 : 1, 0, o.u0, o.v0);
      for (let s = 0; s < i; s++) {
        let c = (s / i) * Math.PI * 2;
        this.v(
          e + Math.cos(c) * r,
          t,
          n + Math.sin(c) * r,
          0,
          a ? -1 : 1,
          0,
          o.u0,
          o.v0,
        );
      }
      for (let e = 0; e < i; e++) {
        let t = s + 1 + e,
          n = s + 1 + ((e + 1) % i);
        a ? this.tri(s, t, n) : this.tri(s, n, t);
      }
      return this;
    }
    rod(e, t, n, r, i, a, o, s = 6, c = o) {
      let l = r - e,
        u = i - t,
        d = a - n,
        f = Math.hypot(l, u, d) || 1,
        p = l / f,
        m = u / f,
        h = d / f,
        g,
        _,
        v;
      Math.abs(m) < 0.9
        ? ((g = -h), (_ = 0), (v = p))
        : ((g = 0), (_ = h), (v = -m));
      let y = Math.hypot(g, _, v) || 1;
      ((g /= y), (_ /= y), (v /= y));
      let b = m * v - h * _,
        x = h * g - p * v,
        S = p * _ - m * g,
        C = this.seg(s),
        w = this.white,
        T = this.w.n;
      for (let s = 0; s <= C; s++) {
        let l = (s / C) * Math.PI * 2,
          u = Math.cos(l),
          d = Math.sin(l),
          f = g * u + b * d,
          p = _ * u + x * d,
          m = v * u + S * d;
        (this.v(e + f * o, t + p * o, n + m * o, f, p, m, w.u0, w.v0),
          this.v(r + f * c, i + p * c, a + m * c, f, p, m, w.u0, w.v0));
      }
      for (let e = 0; e < C; e++) {
        let t = T + e * 2;
        (this.tri(t, t + 2, t + 1), this.tri(t + 1, t + 2, t + 3));
      }
      return this;
    }
    solid(e, t, n, r, i, a, o = `building`) {
      if (!this.colliders) return this;
      let s = (e + n) / 2,
        c = (t + r) / 2;
      return (
        this.colliders.push({
          kind: `obb`,
          cx: this.wx(s, c),
          cz: this.wz(s, c),
          hx: Math.abs(n - e) / 2,
          hz: Math.abs(r - t) / 2,
          h: this.facing,
          y0: this.gy + i,
          y1: this.gy + a,
          tag: o,
        }),
        this
      );
    }
    solidRot(e, t, n, r, i, a, o, s = `building`) {
      return (
        this.colliders &&
          this.colliders.push({
            kind: `obb`,
            cx: this.wx(e, t),
            cz: this.wz(e, t),
            hx: n,
            hz: r,
            h: this.facing + i,
            y0: this.gy + a,
            y1: this.gy + o,
            tag: s,
          }),
        this
      );
    }
    pole(e, t, n, r, i, a = `pole`) {
      return (
        this.colliders &&
          this.colliders.push({
            kind: `circle`,
            x: this.wx(e, t),
            z: this.wz(e, t),
            r: n,
            y0: this.gy + r,
            y1: this.gy + i,
            tag: a,
          }),
        this
      );
    }
    floor(e, t, n, r, i, a = i, o = `platform`) {
      if (!this.colliders) return this;
      let s = (e + n) / 2,
        c = (t + r) / 2;
      return (
        this.colliders.push({
          kind: `floor`,
          cx: this.wx(s, c),
          cz: this.wz(s, c),
          hx: Math.abs(n - e) / 2,
          hz: Math.abs(r - t) / 2,
          h: this.facing,
          y0: this.gy + i,
          y1: this.gy + a,
          tag: o,
        }),
        this
      );
    }
  },
  G = 3,
  Rx = [90, 256];
