// tokyo__assets__actors-Bnj6Q1ad 20 — math
// Lines 10657-11474 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var rc = new Float64Array(24),
  ic = class {
    P = ec;
    N = ec;
    C = ec;
    UV = ec;
    D = ec;
    VV = ec;
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
    u = Js[0];
    v = Js[1];
    steer = null;
    constructor() {
      this.adopt(Qs.pop() ?? tc(Xs));
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
      let n = Math.max(this.cap, Xs);
      for (; n < t;) n *= 2;
      let r = tc(n),
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
      ($s &&
        this.cap &&
        Qs.length < Zs &&
        Qs.push({
          P: this.P,
          N: this.N,
          C: this.C,
          UV: this.UV,
          D: this.D,
          VV: this.VV,
          cap: this.cap,
        }),
        (this.P = this.N = this.C = this.UV = this.D = this.VV = ec),
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
        typeof t == `number` ? Ys.setHex(t) : Ys.copy(t),
        (this.cr = Ys.r),
        (this.cg = Ys.g),
        (this.cb = Ys.b),
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
        (this.UV[f * 2] = Js[0]),
        (this.UV[f * 2 + 1] = Js[1]),
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
      this.extrude(f, () => p, d, s ? oc : ac, void 0, e);
    }
    extrude(e, t, n = 0, r = ac, i, a = 0, o = !0) {
      let s = 0,
        c = e.length;
      for (let t = 0; t < c; t++) {
        let n = e[t],
          r = e[(t + 1) % c];
        s += n[0] * r[1] - r[0] * n[1];
      }
      let l = s < 0,
        u = (t) => e[l ? c - 1 - t : t][0],
        d = (t) => e[l ? c - 1 - t : t][1],
        f = (e) => (l ? (c - 2 - e + c) % c : e),
        p = (e) => {
          for (let t = 0; t < r.length; t++)
            if ((l ? (c - 2 - r[t] + c) % c : r[t]) === e) return !0;
          return !1;
        },
        m = new Float64Array(c),
        h = new Float64Array(c),
        g = new Float64Array(c);
      for (let e = 0; e < c; e++) {
        let r = (e - 1 + c) % c,
          i = (e + 1) % c,
          a = u(e),
          o = d(e),
          s = a - u(r),
          l = o - d(r),
          f = Math.hypot(s, l) || 1;
        ((s /= f), (l /= f));
        let p = u(i) - a,
          _ = d(i) - o;
        ((f = Math.hypot(p, _) || 1), (p /= f), (_ /= f));
        let v = l,
          y = -s,
          b = _,
          x = -p,
          S = v + b,
          C = y + x,
          w = Math.hypot(S, C) || 1;
        ((S /= w), (C /= w));
        let T = n / Math.max(0.35, S * v + C * y);
        ((m[e] = a - S * T), (h[e] = o - C * T), (g[e] = t(a, o)));
      }
      let _ = this.cr,
        v = this.cg,
        y = this.cb,
        b = this.paint,
        x = this.light,
        S = this.rough,
        C = this.metal,
        w = this.variant,
        T = () => {
          ((this.cr = _),
            (this.cg = v),
            (this.cb = y),
            (this.paint = b),
            (this.light = x),
            (this.rough = S),
            (this.metal = C),
            (this.variant = w));
        };
      if (o) {
        let e = [];
        for (let t = 0; t < c; t++) e.push(new le(m[t], h[t]));
        let t = ve.triangulateShape(e, []),
          n = this.u,
          r = this.v;
        for (let e = -1; e <= 1; e += 2)
          for (let i of t) {
            let t = i[0],
              o = i[1],
              s = i[2];
            this.triS(
              a + e * g[t],
              h[t],
              m[t],
              a + e * g[o],
              h[o],
              m[o],
              a + e * g[s],
              h[s],
              m[s],
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
      for (let e = 0; e < c; e++) {
        let t = (e + 1) % c;
        if (r.length && p(e)) continue;
        let o = u(e),
          s = d(e),
          l = u(t),
          _ = d(t),
          v = _ - s,
          y = -(l - o),
          b = Math.hypot(v, y) || 1,
          x = y / b,
          S = v / b,
          C = g[e],
          w = g[t],
          E = i?.(f(e));
        E && (T(), this.overlay(E));
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
            _,
            l,
            a - w + O,
            _,
            l,
            0,
            x,
            S,
          ),
          E && T(),
          n > 0)
        )
          for (let n = -1; n <= 1; n += 2)
            this.quadS(
              a + n * (C - D),
              s,
              o,
              a + n * (w - O),
              _,
              l,
              a + n * w,
              h[t],
              m[t],
              a + n * C,
              h[e],
              m[e],
              n * 0.7,
              x * 0.7,
              S * 0.7,
            );
      }
    }
    overlay(e) {
      (e.color !== void 0 &&
        (typeof e.color == `number` ? Ys.setHex(e.color) : Ys.copy(e.color),
        (this.cr = Ys.r),
        (this.cg = Ys.g),
        (this.cb = Ys.b)),
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
          T = rc;
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
          T = rc;
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
          b = rc;
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
      let c = rc;
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
    smoothQuadS() {
      let e = rc,
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
      let t = rc,
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
        let i = new R(),
          a = new c().getNormalMatrix(t);
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
        t = new fe();
      return (
        t.setAttribute(`position`, new I(this.P.slice(0, e * 3), 3)),
        t.setAttribute(`normal`, new I(this.N.slice(0, e * 3), 3)),
        t.setAttribute(`color`, new I(this.C.slice(0, e * 3), 3)),
        t.setAttribute(`uv`, new I(this.UV.slice(0, e * 2), 2)),
        t.setAttribute(`vdata`, new I(this.D.slice(0, e * 4), 4)),
        t.setAttribute(`vvar`, new I(this.VV.slice(0, e), 1)),
        t.computeBoundingBox(),
        t.computeBoundingSphere(),
        t
      );
    }
  },
  ac = [],
  oc = [0],
  sc = {},
  cc = !1;
