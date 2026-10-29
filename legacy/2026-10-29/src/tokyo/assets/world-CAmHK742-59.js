// tokyo/assets/world-CAmHK742 59 — pos
// Lines 19269-19642 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
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
