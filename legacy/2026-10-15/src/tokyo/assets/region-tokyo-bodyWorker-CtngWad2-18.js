// tokyo/assets/region-tokyo-bodyWorker-CtngWad2 18 — pos
// Lines 7172-7657 of readable/tokyo/assets/region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
var On = class {
  blank = pn;
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
      (this._i1 = /* @__PURE__ */ new Uint32Array(256)));
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
      ? (a.color !== wn &&
          (sn.setHex(a.color),
          (wn = a.color),
          (Tn = sn.r),
          (En = sn.g),
          (Dn = sn.b)),
        (f = Tn),
        (p = En),
        (m = Dn))
      : (a.color(e, t, n, r, i, sn), (f = sn.r), (p = sn.g), (m = sn.b));
    let h = this._col;
    ((h[l] = f * o), (h[l + 1] = p * o), (h[l + 2] = m * o));
    let g = fn;
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
      (this._part[s] = a.part ?? on[g.i[v]]),
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
      ? (E.uv(e, t, n, r, i, dn), (C[c] = dn[0]), (C[c + 1] = dn[1]))
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
    let c = (mn = Sn(mn, s * 3)),
      l = (hn = Sn(hn, a)),
      u = (gn = Sn(gn, r + 1));
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
        (e.point(i && r === n ? l[0] : l[r], u[t], cn),
          (c[o] = cn.x),
          (c[o + 1] = cn.y),
          (c[o + 2] = cn.z));
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
    let f = (_n = Cn(_n, n * r * 6 + n * 6)),
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
      d = (mn = Sn(mn, c * 3));
    for (let e = 0; e < c; e++)
      (cn.fromBufferAttribute(i, e),
        t && cn.applyMatrix4(t),
        (d[e * 3] = cn.x),
        (d[e * 3 + 1] = cn.y),
        (d[e * 3 + 2] = cn.z),
        cn.y < l && (l = cn.y),
        cn.y > u && (u = cn.y));
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
      h = (_n = Cn(_n, m)),
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
      t && un.getNormalMatrix(t);
      let e = this._nor;
      for (let r = 0; r < a.count; r++) {
        (ln.fromBufferAttribute(a, r),
          t && ln.applyMatrix3(un),
          ln.normalize(),
          n.flip && ln.negate());
        let i = (s + r) * 3;
        ((e[i] = ln.x), (e[i + 1] = ln.y), (e[i + 2] = ln.z));
      }
    } else this.computeNormals(s, this.nv, h, g);
    (this.pushTris(h, g, +!!n.transparent), e.dispose());
  }
  computeNormals(e, t, n, r) {
    let i = t - e,
      a = this._pos,
      o = (bn = Cn(bn, i * 3)),
      s = (yn = Cn(yn, i)),
      c = 16;
    for (; c < i * 2;) c <<= 1;
    let l = (xn = Cn(xn, c));
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
    let d = (vn = Sn(vn, i * 3));
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
    return kn(this.heroArrays());
  }
  buildCrowd() {
    let e = new Dt(),
      t = this.nv;
    (e.setAttribute(`position`, new F(this._pos.slice(0, t * 3), 3)),
      e.setAttribute(`normal`, new F(this._nor.slice(0, t * 3), 3)),
      e.setAttribute(`color`, new F(this._col.slice(0, t * 3), 3)));
    let n = this._part.slice(0, t),
      r = new Float32Array(t * 4);
    for (let e = 0; e < t; e++)
      ((r[e * 4] = n[e]),
        (r[e * 4 + 1] = 7),
        (r[e * 4 + 2] = 0),
        (r[e * 4 + 3] = this._glow[e]));
    (e.setAttribute(`part`, new F(n, 1)), e.setAttribute(`aInfo`, new F(r, 4)));
    let i = this.n0 + this.n1,
      a = t > 65535 ? new Uint32Array(i) : new Uint16Array(i);
    return (
      a.set(this._i0.subarray(0, this.n0)),
      a.set(this._i1.subarray(0, this.n1), this.n0),
      e.setIndex(new F(a, 1)),
      e.computeBoundingSphere(),
      e.computeBoundingBox(),
      e
    );
  }
};
