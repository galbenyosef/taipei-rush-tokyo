// tokyo/assets/actors-qKVitB-C 32 — math
// Lines 14222-15268 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var Iu = new Float64Array(24),
  Lu = class e {
    P = Nu;
    N = Nu;
    C = Nu;
    UV = Nu;
    D = Nu;
    VV = Nu;
    cap = 0;
    n = 0;
    cr = 1;
    cg = 1;
    cb = 1;
    paint = 0;
    light = 0;
    rough = 0.6;
    metal = 0;
    variant = 0;
    defVariant = 0;
    u = Du[0];
    v = Du[1];
    steer = null;
    constructor() {
      this.adopt(ju.pop() ?? Pu(ku));
    }
    adopt(e) {
      ((this.P = e.P),
        (this.N = e.N),
        (this.C = e.C),
        (this.UV = e.UV),
        (this.D = e.D),
        (this.VV = e.VV),
        (this.cap = e.cap));
    }
    ensure(e) {
      let t = this.n + e;
      if (t <= this.cap) return;
      let n = Math.max(this.cap, ku);
      for (; n < t;) n *= 2;
      let r = Pu(n),
        i = this.n;
      (r.P.set(this.P.subarray(0, i * 3)),
        r.N.set(this.N.subarray(0, i * 3)),
        r.C.set(this.C.subarray(0, i * 3)),
        r.UV.set(this.UV.subarray(0, i * 2)),
        r.D.set(this.D.subarray(0, i * 4)),
        r.VV.set(this.VV.subarray(0, i)),
        this.adopt(r));
    }
    release() {
      (Mu &&
        this.cap &&
        ju.length < Au &&
        ju.push({
          P: this.P,
          N: this.N,
          C: this.C,
          UV: this.UV,
          D: this.D,
          VV: this.VV,
          cap: this.cap,
        }),
        (this.P = this.N = this.C = this.UV = this.D = this.VV = Nu),
        (this.cap = 0),
        (this.n = 0),
        (this.steer = null));
    }
    buildGeometry() {
      let e = this.build();
      return (this.release(), e);
    }
    style(e) {
      let t = e.color ?? 16777215;
      return (
        typeof t == `number` ? Ou.setHex(t) : Ou.copy(t),
        (this.cr = Ou.r),
        (this.cg = Ou.g),
        (this.cb = Ou.b),
        (this.paint = e.paint ?? 0),
        (this.light = e.light ?? 0),
        (this.rough = e.rough ?? 0.6),
        (this.metal = e.metal ?? 0),
        (this.variant = e.variant ?? this.defVariant),
        this
      );
    }
    get vertexCount() {
      return this.n;
    }
    truncate(e) {
      this.n = Math.min(this.n, e);
    }
    vert(e, t, n, r, i, a, o, s) {
      let c = this.n++,
        l = c * 3,
        u = c * 2,
        d = c * 4,
        f = this.P,
        p = this.N,
        m = this.C,
        h = this.D;
      ((f[l] = e),
        (f[l + 1] = t),
        (f[l + 2] = n),
        (p[l] = r),
        (p[l + 1] = i),
        (p[l + 2] = a),
        (m[l] = this.cr),
        (m[l + 1] = this.cg),
        (m[l + 2] = this.cb),
        (this.UV[u] = o),
        (this.UV[u + 1] = s),
        (h[d] = this.paint),
        (h[d + 1] = this.light),
        (h[d + 2] = this.rough),
        (h[d + 3] = this.metal),
        (this.VV[c] = this.variant));
    }
    rawVertex(e, t, n, r, i, a, o, s, c, l, u, d = this.rough) {
      this.ensure(1);
      let f = this.n++,
        p = f * 3,
        m = f * 4,
        h = this.P,
        g = this.N,
        _ = this.C,
        v = this.D;
      ((h[p] = e),
        (h[p + 1] = t),
        (h[p + 2] = n),
        (g[p] = r),
        (g[p + 1] = i),
        (g[p + 2] = a),
        (_[p] = o),
        (_[p + 1] = s),
        (_[p + 2] = c),
        (this.UV[f * 2] = Du[0]),
        (this.UV[f * 2 + 1] = Du[1]),
        (v[m] = l),
        (v[m + 1] = this.light),
        (v[m + 2] = d),
        (v[m + 3] = this.metal),
        (this.VV[f] = u));
    }
    triS(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _) {
      let v = r - e,
        y = i - t,
        b = a - n,
        x = o - e,
        S = s - t,
        C = c - n,
        w = y * C - b * S,
        T = b * x - v * C,
        E = v * S - y * x,
        D = Math.hypot(w, T, E);
      D < 1e-10 ||
        ((w /= D),
        (T /= D),
        (E /= D),
        this.ensure(3),
        w * l + T * u + E * d < 0
          ? ((w = -w),
            (T = -T),
            (E = -E),
            this.vert(e, t, n, w, T, E, f, p),
            this.vert(o, s, c, w, T, E, g, _),
            this.vert(r, i, a, w, T, E, m, h))
          : (this.vert(e, t, n, w, T, E, f, p),
            this.vert(r, i, a, w, T, E, m, h),
            this.vert(o, s, c, w, T, E, g, _)));
    }
    quadS(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
      let h = this.u,
        g = this.v;
      (this.triS(e, t, n, r, i, a, o, s, c, f, p, m, h, g, h, g, h, g),
        this.triS(e, t, n, o, s, c, l, u, d, f, p, m, h, g, h, g, h, g));
    }
    tri(e, t, n, r, i, a, o) {
      let s = this.u,
        c = this.v;
      this.triS(
        e[0],
        e[1],
        e[2],
        t[0],
        t[1],
        t[2],
        n[0],
        n[1],
        n[2],
        r ? r[0] : 0,
        r ? r[1] : 0,
        r ? r[2] : 0,
        i ? i[0] : s,
        i ? i[1] : c,
        a ? a[0] : s,
        a ? a[1] : c,
        o ? o[0] : s,
        o ? o[1] : c,
      );
    }
    quad(e, t, n, r, i) {
      this.quadS(
        e[0],
        e[1],
        e[2],
        t[0],
        t[1],
        t[2],
        n[0],
        n[1],
        n[2],
        r[0],
        r[1],
        r[2],
        i ? i[0] : 0,
        i ? i[1] : 0,
        i ? i[2] : 0,
      );
    }
    quadUV(e, t, n, r, i, a, o, s) {
      (this.triS(
        e[0],
        e[1],
        e[2],
        t[0],
        t[1],
        t[2],
        n[0],
        n[1],
        n[2],
        0,
        0,
        0,
        i,
        a,
        o,
        a,
        o,
        s,
      ),
        this.triS(
          e[0],
          e[1],
          e[2],
          n[0],
          n[1],
          n[2],
          r[0],
          r[1],
          r[2],
          0,
          0,
          0,
          i,
          a,
          o,
          s,
          i,
          s,
        ));
    }
    box(e, t, n, r, i, a, o = `b`) {
      let s = e - r / 2,
        c = e + r / 2,
        l = t - i / 2,
        u = t + i / 2,
        d = n - a / 2,
        f = n + a / 2;
      (o.includes(`t`) ||
        this.quadS(s, u, d, c, u, d, c, u, f, s, u, f, 0, 1, 0),
        o.includes(`b`) ||
          this.quadS(s, l, d, c, l, d, c, l, f, s, l, f, 0, -1, 0),
        o.includes(`f`) ||
          this.quadS(s, l, d, c, l, d, c, u, d, s, u, d, 0, 0, -1),
        o.includes(`r`) ||
          this.quadS(s, l, f, c, l, f, c, u, f, s, u, f, 0, 0, 1),
        o.includes(`l`) ||
          this.quadS(s, l, d, s, l, f, s, u, f, s, u, d, -1, 0, 0),
        o.includes(`R`) ||
          this.quadS(c, l, d, c, l, f, c, u, f, c, u, d, 1, 0, 0));
    }
    cbox(e, t, n, r, i, a, o, s = !0) {
      let c = a / 2,
        l = t - i / 2,
        u = t + i / 2,
        d = Math.min(o, i * 0.45, a * 0.45, r * 0.45),
        f = [
          [n - c, l],
          [n + c, l],
          [n + c, u - d],
          [n + c - d, u],
          [n - c + d, u],
          [n - c, u - d],
        ],
        p = r / 2;
      this.extrude(f, () => p, d, s ? zu : Ru, void 0, e);
    }
    extrude(e, t, n = 0, r = Ru, i, a = 0, o = !0, s) {
      let c = 0,
        l = e.length;
      for (let t = 0; t < l; t++) {
        let n = e[t],
          r = e[(t + 1) % l];
        c += n[0] * r[1] - r[0] * n[1];
      }
      let u = c < 0,
        d = (t) => e[u ? l - 1 - t : t][0],
        f = (t) => e[u ? l - 1 - t : t][1],
        p = (e) => (u ? (l - 2 - e + l) % l : e),
        m = (e) => {
          for (let t = 0; t < r.length; t++)
            if ((u ? (l - 2 - r[t] + l) % l : r[t]) === e) return !0;
          return !1;
        },
        h = new Float64Array(l),
        g = new Float64Array(l),
        _ = new Float64Array(l);
      for (let e = 0; e < l; e++) {
        let r = (e - 1 + l) % l,
          i = (e + 1) % l,
          a = d(e),
          o = f(e),
          s = a - d(r),
          c = o - f(r),
          u = Math.hypot(s, c) || 1;
        ((s /= u), (c /= u));
        let p = d(i) - a,
          m = f(i) - o;
        ((u = Math.hypot(p, m) || 1), (p /= u), (m /= u));
        let v = c,
          y = -s,
          b = m,
          x = -p,
          S = v + b,
          C = y + x,
          w = Math.hypot(S, C) || 1;
        ((S /= w), (C /= w));
        let T = n / Math.max(0.35, S * v + C * y);
        ((h[e] = a - S * T), (g[e] = o - C * T), (_[e] = t(a, o)));
      }
      let v = this.cr,
        y = this.cg,
        b = this.cb,
        x = this.paint,
        S = this.light,
        C = this.rough,
        w = this.metal,
        T = this.variant,
        E = () => {
          ((this.cr = v),
            (this.cg = y),
            (this.cb = b),
            (this.paint = x),
            (this.light = S),
            (this.rough = C),
            (this.metal = w),
            (this.variant = T));
        };
      if (s && n > 0) {
        let e = new Float64Array(l);
        for (let n = 0; n < l; n++) e[n] = t(h[n], g[n]);
        (o && this.smoothSides(l, h, g, e, t, a, s.cell ?? 0.35),
          this.smoothWrap(
            l,
            d,
            f,
            h,
            g,
            _,
            e,
            t,
            n,
            m,
            p,
            i,
            a,
            s.arc,
            Math.cos(s.crease),
            E,
          ));
        return;
      }
      if (o) {
        let e = [];
        for (let t = 0; t < l; t++) e.push(new Ce(h[t], g[t]));
        let t = ve.triangulateShape(e, []),
          n = this.u,
          r = this.v;
        for (let e = -1; e <= 1; e += 2)
          for (let i of t) {
            let t = i[0],
              o = i[1],
              s = i[2];
            this.triS(
              a + e * _[t],
              g[t],
              h[t],
              a + e * _[o],
              g[o],
              h[o],
              a + e * _[s],
              g[s],
              h[s],
              e,
              0,
              0,
              n,
              r,
              n,
              r,
              n,
              r,
            );
          }
      }
      for (let e = 0; e < l; e++) {
        let t = (e + 1) % l;
        if (r.length && m(e)) continue;
        let o = d(e),
          s = f(e),
          c = d(t),
          u = f(t),
          v = u - s,
          y = -(c - o),
          b = Math.hypot(v, y) || 1,
          x = y / b,
          S = v / b,
          C = _[e],
          w = _[t],
          T = i?.(p(e));
        T && (E(), this.overlay(T));
        let D = n,
          O = n;
        if (
          (this.quadS(
            a - C + D,
            s,
            o,
            a + C - D,
            s,
            o,
            a + w - O,
            u,
            c,
            a - w + O,
            u,
            c,
            0,
            x,
            S,
          ),
          T && E(),
          n > 0)
        )
          for (let n = -1; n <= 1; n += 2)
            this.quadS(
              a + n * (C - D),
              s,
              o,
              a + n * (w - O),
              u,
              c,
              a + n * w,
              g[t],
              h[t],
              a + n * C,
              g[e],
              h[e],
              n * 0.7,
              x * 0.7,
              S * 0.7,
            );
      }
    }
    static sideNormal(e, t, n, r) {
      let i = 0.01,
        a = -(e(t, n + i) - e(t, n - i)) / (2 * i),
        o = -(e(t + i, n) - e(t - i, n)) / (2 * i),
        s = Math.hypot(1, a, o);
      return [r / s, a / s, o / s];
    }
    smoothSides(t, n, r, i, a, o, s) {
      let c = 1 / 0,
        l = -1 / 0,
        u = 1 / 0,
        d = -1 / 0;
      for (let e = 0; e < t; e++)
        ((c = Math.min(c, n[e])),
          (l = Math.max(l, n[e])),
          (u = Math.min(u, r[e])),
          (d = Math.max(d, r[e])));
      let f = Math.max(1, Math.round((l - c) / s)),
        p = Math.max(1, Math.round((d - u) / s)),
        m = (l - c) / f,
        h = (d - u) / p,
        g = [];
      for (let e = 0; e < t; e++) g.push([n[e], r[e]]);
      let _ = (e, o) => {
          for (let a = 0; a < t; a++) {
            let s = (a + 1) % t,
              c = n[s] - n[a],
              l = r[s] - r[a],
              u = c * c + l * l;
            if (u < 1e-12) continue;
            let d = ((e - n[a]) * c + (o - r[a]) * l) / u;
            if (d < -1e-6 || d > 1 + 1e-6) continue;
            let f = n[a] + c * d - e,
              p = r[a] + l * d - o;
            if (f * f + p * p < 1e-10) return i[a] + (i[s] - i[a]) * d;
          }
          return a(e, o);
        },
        v = Iu;
      for (let t = 0; t < f; t++)
        for (let n = 0; n < p; n++) {
          let r = c + t * m,
            i = u + n * h,
            s = Bu(
              g,
              t === 0 ? -1 / 0 : r,
              t === f - 1 ? 1 / 0 : r + m,
              n === 0 ? -1 / 0 : i,
              n === p - 1 ? 1 / 0 : i + h,
            );
          if (s.length < 3) continue;
          let l = ve.triangulateShape(
              s.map(([e, t]) => new Ce(e, t)),
              [],
            ),
            d = s.map(([e, t]) => _(e, t));
          for (let t = -1; t <= 1; t += 2) {
            let n = s.map(([n, r]) => e.sideNormal(a, n, r, t));
            for (let e of l) {
              for (let r = 0; r < 3; r++) {
                let i = e[r];
                ((v[r * 3] = o + t * d[i]),
                  (v[r * 3 + 1] = s[i][1]),
                  (v[r * 3 + 2] = s[i][0]),
                  (v[12 + r * 3] = n[i][0]),
                  (v[13 + r * 3] = n[i][1]),
                  (v[14 + r * 3] = n[i][2]));
              }
              let r =
                (v[5] - v[2]) * (v[7] - v[1]) - (v[8] - v[2]) * (v[4] - v[1]);
              Math.abs(r) < 1e-10 ||
                (this.ensure(3),
                r * t < 0
                  ? (this.sqv(0), this.sqv(1), this.sqv(2))
                  : (this.sqv(0), this.sqv(2), this.sqv(1)));
            }
          }
        }
    }
    smoothWrap(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
      let _ = new Float64Array(t),
        v = new Float64Array(t);
      for (let e = 0; e < t; e++) {
        let i = (e + 1) % t,
          a = r(i) - r(e),
          o = -(n(i) - n(e)),
          s = Math.hypot(a, o) || 1;
        ((_[e] = o / s), (v[e] = a / s));
      }
      let y = (e, n) => {
          let r = n ? (e + 1) % t : (e - 1 + t) % t;
          if (u(r) || _[e] * _[r] + v[e] * v[r] < h) return [_[e], v[e]];
          let i = _[e] + _[r],
            a = v[e] + v[r],
            o = Math.hypot(i, a) || 1;
          return [i / o, a / o];
        },
        b = Iu,
        x = (e, t, n, r, i, a, o) => {
          let s = Math.hypot(i, a, o) || 1;
          ((b[e * 3] = t),
            (b[e * 3 + 1] = n),
            (b[e * 3 + 2] = r),
            (b[12 + e * 3] = i / s),
            (b[13 + e * 3] = a / s),
            (b[14 + e * 3] = o / s));
        };
      for (let h = 0; h < t; h++) {
        if (u(h)) continue;
        let _ = (h + 1) % t,
          v = n(h),
          b = r(h),
          S = n(_),
          C = r(_),
          w = o[h] - l,
          T = o[_] - l,
          [E, D] = y(h, 0),
          [O, k] = y(h, 1),
          A = f?.(d(h));
        (A && (g(), this.overlay(A)),
          x(0, p - w, b, v, 0, E, D),
          x(1, p + w, b, v, 0, E, D),
          x(2, p + T, C, S, 0, O, k),
          x(3, p - T, C, S, 0, O, k),
          this.smoothQuadS(),
          A && g());
        for (let t = -1; t <= 1; t += 2) {
          let n = e.sideNormal(c, i[h], a[h], t),
            r = e.sideNormal(c, i[_], a[_], t);
          for (let e = 0; e < m; e++) {
            let o = (e / m) * Math.PI * 0.5,
              c = ((e + 1) / m) * Math.PI * 0.5,
              l = Math.sin(o),
              u = 1 - Math.cos(o),
              d = Math.sin(c),
              f = 1 - Math.cos(c),
              g = Math.cos(o),
              y = Math.cos(c);
            (x(
              0,
              p + t * (w + (s[h] - w) * l),
              b + (a[h] - b) * u,
              v + (i[h] - v) * u,
              n[0] * l,
              E * g + n[1] * l,
              D * g + n[2] * l,
            ),
              x(
                1,
                p + t * (T + (s[_] - T) * l),
                C + (a[_] - C) * u,
                S + (i[_] - S) * u,
                r[0] * l,
                O * g + r[1] * l,
                k * g + r[2] * l,
              ),
              x(
                2,
                p + t * (T + (s[_] - T) * d),
                C + (a[_] - C) * f,
                S + (i[_] - S) * f,
                r[0] * d,
                O * y + r[1] * d,
                k * y + r[2] * d,
              ),
              x(
                3,
                p + t * (w + (s[h] - w) * d),
                b + (a[h] - b) * f,
                v + (i[h] - v) * f,
                n[0] * d,
                E * y + n[1] * d,
                D * y + n[2] * d,
              ),
              this.smoothQuadS());
          }
        }
      }
    }
    overlay(e) {
      (e.color !== void 0 &&
        (typeof e.color == `number` ? Ou.setHex(e.color) : Ou.copy(e.color),
        (this.cr = Ou.r),
        (this.cg = Ou.g),
        (this.cb = Ou.b)),
        e.paint !== void 0 && (this.paint = e.paint),
        e.light !== void 0 && (this.light = e.light),
        e.rough !== void 0 && (this.rough = e.rough),
        e.metal !== void 0 && (this.metal = e.metal),
        e.variant !== void 0 && (this.variant = e.variant));
    }
    cylX(e, t, n, r, i, a = 12, o = !0, s = r) {
      let c = e - i / 2,
        l = e + i / 2,
        u = this.u,
        d = this.v;
      for (let e = 0; e < a; e++) {
        let i = (e / a) * Math.PI * 2,
          f = ((e + 1) / a) * Math.PI * 2,
          p = Math.cos(i),
          m = Math.sin(i),
          h = Math.cos(f),
          g = Math.sin(f),
          _ = t + m * r,
          v = n + p * r,
          y = t + m * s,
          b = n + p * s,
          x = t + g * s,
          S = n + h * s,
          C = t + g * r,
          w = n + h * r,
          T = Iu;
        ((T[0] = c),
          (T[1] = _),
          (T[2] = v),
          (T[3] = l),
          (T[4] = y),
          (T[5] = b),
          (T[6] = l),
          (T[7] = x),
          (T[8] = S),
          (T[9] = c),
          (T[10] = C),
          (T[11] = w),
          (T[12] = 0),
          (T[13] = m),
          (T[14] = p),
          (T[15] = 0),
          (T[16] = m),
          (T[17] = p),
          (T[18] = 0),
          (T[19] = g),
          (T[20] = h),
          (T[21] = 0),
          (T[22] = g),
          (T[23] = h),
          this.smoothQuadS(),
          o &&
            (this.triS(c, t, n, c, C, w, c, _, v, -1, 0, 0, u, d, u, d, u, d),
            this.triS(l, t, n, l, y, b, l, x, S, 1, 0, 0, u, d, u, d, u, d)));
      }
    }
    cylY(e, t, n, r, i, a = 10, o = !0, s = r) {
      let c = t - i / 2,
        l = t + i / 2,
        u = this.u,
        d = this.v;
      for (let t = 0; t < a; t++) {
        let i = (t / a) * Math.PI * 2,
          f = ((t + 1) / a) * Math.PI * 2,
          p = Math.cos(i),
          m = Math.sin(i),
          h = Math.cos(f),
          g = Math.sin(f),
          _ = e + p * r,
          v = n + m * r,
          y = e + h * r,
          b = n + g * r,
          x = e + h * s,
          S = n + g * s,
          C = e + p * s,
          w = n + m * s,
          T = Iu;
        ((T[0] = _),
          (T[1] = c),
          (T[2] = v),
          (T[3] = y),
          (T[4] = c),
          (T[5] = b),
          (T[6] = x),
          (T[7] = l),
          (T[8] = S),
          (T[9] = C),
          (T[10] = l),
          (T[11] = w),
          (T[12] = p),
          (T[13] = 0),
          (T[14] = m),
          (T[15] = h),
          (T[16] = 0),
          (T[17] = g),
          (T[18] = h),
          (T[19] = 0),
          (T[20] = g),
          (T[21] = p),
          (T[22] = 0),
          (T[23] = m),
          this.smoothQuadS(),
          o &&
            (this.triS(e, l, n, C, l, w, x, l, S, 0, 1, 0, u, d, u, d, u, d),
            this.triS(e, c, n, _, c, v, y, c, b, 0, -1, 0, u, d, u, d, u, d)));
      }
    }
    cylZ(e, t, n, r, i, a = 10, o = !0) {
      let s = n - i / 2,
        c = n + i / 2,
        l = this.u,
        u = this.v;
      for (let n = 0; n < a; n++) {
        let i = (n / a) * Math.PI * 2,
          d = ((n + 1) / a) * Math.PI * 2,
          f = Math.cos(i),
          p = Math.sin(i),
          m = Math.cos(d),
          h = Math.sin(d),
          g = e + f * r,
          _ = t + p * r,
          v = e + m * r,
          y = t + h * r,
          b = Iu;
        ((b[0] = g),
          (b[1] = _),
          (b[2] = s),
          (b[3] = v),
          (b[4] = y),
          (b[5] = s),
          (b[6] = v),
          (b[7] = y),
          (b[8] = c),
          (b[9] = g),
          (b[10] = _),
          (b[11] = c),
          (b[12] = f),
          (b[13] = p),
          (b[14] = 0),
          (b[15] = m),
          (b[16] = h),
          (b[17] = 0),
          (b[18] = m),
          (b[19] = h),
          (b[20] = 0),
          (b[21] = f),
          (b[22] = p),
          (b[23] = 0),
          this.smoothQuadS(),
          o &&
            (this.triS(e, t, s, g, _, s, v, y, s, 0, 0, -1, l, u, l, u, l, u),
            this.triS(e, t, c, g, _, c, v, y, c, 0, 0, 1, l, u, l, u, l, u)));
      }
    }
    smoothQuad(e, t, n, r, i, a, o, s) {
      let c = Iu;
      ((c[0] = e[0]),
        (c[1] = e[1]),
        (c[2] = e[2]),
        (c[3] = t[0]),
        (c[4] = t[1]),
        (c[5] = t[2]),
        (c[6] = n[0]),
        (c[7] = n[1]),
        (c[8] = n[2]),
        (c[9] = r[0]),
        (c[10] = r[1]),
        (c[11] = r[2]),
        (c[12] = i[0]),
        (c[13] = i[1]),
        (c[14] = i[2]),
        (c[15] = a[0]),
        (c[16] = a[1]),
        (c[17] = a[2]),
        (c[18] = o[0]),
        (c[19] = o[1]),
        (c[20] = o[2]),
        (c[21] = s[0]),
        (c[22] = s[1]),
        (c[23] = s[2]),
        this.smoothQuadS());
    }
    smoothQuadUV(e, t, n, r, i, a, o, s, c) {
      let l = i[0] + a[0] + o[0] + s[0],
        u = i[1] + a[1] + o[1] + s[1],
        d = i[2] + a[2] + o[2] + s[2],
        f = (t[1] - e[1]) * (n[2] - e[2]) - (t[2] - e[2]) * (n[1] - e[1]),
        p = (t[2] - e[2]) * (n[0] - e[0]) - (t[0] - e[0]) * (n[2] - e[2]),
        m = (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0]),
        h = [e, t, n, r],
        g = [i, a, o, s],
        _ = (e) =>
          this.vert(
            h[e][0],
            h[e][1],
            h[e][2],
            g[e][0],
            g[e][1],
            g[e][2],
            c ? c[e * 2] : this.u,
            c ? c[e * 2 + 1] : this.v,
          );
      (this.ensure(6),
        f * l + p * u + m * d >= 0
          ? (_(0), _(1), _(2), _(0), _(2), _(3))
          : (_(0), _(2), _(1), _(0), _(3), _(2)));
    }
    smoothQuadS() {
      let e = Iu,
        t = e[12] + e[15] + e[18] + e[21],
        n = e[13] + e[16] + e[19] + e[22],
        r = e[14] + e[17] + e[20] + e[23],
        i = e[3] - e[0],
        a = e[4] - e[1],
        o = e[5] - e[2],
        s = e[6] - e[0],
        c = e[7] - e[1],
        l = e[8] - e[2],
        u = a * l - o * c,
        d = o * s - i * l,
        f = i * c - a * s;
      (this.ensure(6),
        u * t + d * n + f * r >= 0
          ? (this.sqv(0),
            this.sqv(1),
            this.sqv(2),
            this.sqv(0),
            this.sqv(2),
            this.sqv(3))
          : (this.sqv(0),
            this.sqv(2),
            this.sqv(1),
            this.sqv(0),
            this.sqv(3),
            this.sqv(2)));
    }
    sqv(e) {
      let t = Iu,
        n = e * 3,
        r = 12 + e * 3;
      this.vert(
        t[n],
        t[n + 1],
        t[n + 2],
        t[r],
        t[r + 1],
        t[r + 2],
        this.u,
        this.v,
      );
    }
    discX(e, t, n, r, i, a = 10) {
      let o = this.u,
        s = this.v;
      for (let c = 0; c < a; c++) {
        let l = (c / a) * Math.PI * 2,
          u = ((c + 1) / a) * Math.PI * 2;
        this.triS(
          e,
          t,
          n,
          e,
          t + Math.sin(l) * r,
          n + Math.cos(l) * r,
          e,
          t + Math.sin(u) * r,
          n + Math.cos(u) * r,
          i,
          0,
          0,
          o,
          s,
          o,
          s,
          o,
          s,
        );
      }
    }
    discZ(e, t, n, r, i, a = 10, o = 1) {
      let s = this.u,
        c = this.v;
      for (let l = 0; l < a; l++) {
        let u = (l / a) * Math.PI * 2,
          d = ((l + 1) / a) * Math.PI * 2;
        this.triS(
          e,
          t,
          n,
          e + Math.cos(u) * r * o,
          t + Math.sin(u) * r,
          n,
          e + Math.cos(d) * r * o,
          t + Math.sin(d) * r,
          n,
          0,
          0,
          i,
          s,
          c,
          s,
          c,
          s,
          c,
        );
      }
    }
    append(e, t) {
      let n = e.vertexCount,
        r = this.n;
      if ((this.ensure(n), !t))
        (this.P.set(e.P.subarray(0, n * 3), r * 3),
          this.N.set(e.N.subarray(0, n * 3), r * 3));
      else {
        let i = new L(),
          a = new l().getNormalMatrix(t);
        for (let o = 0; o < n * 3; o += 3)
          (i.set(e.P[o], e.P[o + 1], e.P[o + 2]).applyMatrix4(t),
            (this.P[r * 3 + o] = i.x),
            (this.P[r * 3 + o + 1] = i.y),
            (this.P[r * 3 + o + 2] = i.z),
            i
              .set(e.N[o], e.N[o + 1], e.N[o + 2])
              .applyMatrix3(a)
              .normalize(),
            (this.N[r * 3 + o] = i.x),
            (this.N[r * 3 + o + 1] = i.y),
            (this.N[r * 3 + o + 2] = i.z));
      }
      (this.C.set(e.C.subarray(0, n * 3), r * 3),
        this.UV.set(e.UV.subarray(0, n * 2), r * 2),
        this.D.set(e.D.subarray(0, n * 4), r * 4),
        this.VV.set(e.VV.subarray(0, n), r),
        (this.n = r + n));
    }
    mirrorX(e = 0) {
      let t = this.n;
      this.ensure(t - e);
      let n = this.P,
        r = this.N,
        i = this.C,
        a = this.UV,
        o = this.D,
        s = this.VV,
        c = t;
      for (let l = e; l < t; l += 3)
        for (let e = 0; e < 3; e++) {
          let t = l + (e === 0 ? 0 : e === 1 ? 2 : 1);
          ((n[c * 3] = -n[t * 3]),
            (n[c * 3 + 1] = n[t * 3 + 1]),
            (n[c * 3 + 2] = n[t * 3 + 2]),
            (r[c * 3] = -r[t * 3]),
            (r[c * 3 + 1] = r[t * 3 + 1]),
            (r[c * 3 + 2] = r[t * 3 + 2]),
            (i[c * 3] = i[t * 3]),
            (i[c * 3 + 1] = i[t * 3 + 1]),
            (i[c * 3 + 2] = i[t * 3 + 2]),
            (a[c * 2] = a[t * 2]),
            (a[c * 2 + 1] = a[t * 2 + 1]),
            (o[c * 4] = o[t * 4]),
            (o[c * 4 + 1] = o[t * 4 + 1]),
            (o[c * 4 + 2] = o[t * 4 + 2]),
            (o[c * 4 + 3] = o[t * 4 + 3]),
            (s[c] = s[t]),
            c++);
        }
      this.n = c;
    }
    build() {
      let e = this.n,
        t = new pe();
      return (
        t.setAttribute(`position`, new P(this.P.slice(0, e * 3), 3)),
        t.setAttribute(`normal`, new P(this.N.slice(0, e * 3), 3)),
        t.setAttribute(`color`, new P(this.C.slice(0, e * 3), 3)),
        t.setAttribute(`uv`, new P(this.UV.slice(0, e * 2), 2)),
        t.setAttribute(`vdata`, new P(this.D.slice(0, e * 4), 4)),
        t.setAttribute(`vvar`, new P(this.VV.slice(0, e), 1)),
        t.computeBoundingBox(),
        t.computeBoundingSphere(),
        t
      );
    }
  },
  Ru = [],
  zu = [0];
