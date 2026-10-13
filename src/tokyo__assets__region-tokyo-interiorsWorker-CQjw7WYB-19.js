// tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB 19 — push
// Lines 7032-7776 of readable/tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
var Rn = class e {
    constructor(e = [], t = []) {
      ((this.uuid = A()),
        (this.bones = e.slice(0)),
        (this.boneInverses = t),
        (this.boneMatrices = null),
        (this.boneTexture = null),
        this.init());
    }
    init() {
      let e = this.bones,
        t = this.boneInverses;
      if (
        ((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0)
      )
        this.calculateInverses();
      else if (e.length !== t.length) {
        (T(
          `Skeleton: Number of inverse bone matrices does not match amount of bones.`,
        ),
          (this.boneInverses = []));
        for (let e = 0, t = this.bones.length; e < t; e++)
          this.boneInverses.push(new Ce());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = new Ce();
        (this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
          this.boneInverses.push(t));
      }
    }
    pose() {
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = this.bones[e];
        t && t.matrixWorld.copy(this.boneInverses[e]).invert();
      }
      for (let e = 0, t = this.bones.length; e < t; e++) {
        let t = this.bones[e];
        t &&
          (t.parent && t.parent.isBone
            ? (t.matrix.copy(t.parent.matrixWorld).invert(),
              t.matrix.multiply(t.matrixWorld))
            : t.matrix.copy(t.matrixWorld),
          t.matrix.decompose(t.position, t.quaternion, t.scale));
      }
    }
    update() {
      let e = this.bones,
        t = this.boneInverses,
        n = this.boneMatrices,
        r = this.boneTexture;
      for (let r = 0, i = e.length; r < i; r++) {
        let i = e[r] ? e[r].matrixWorld : Ln;
        (In.multiplyMatrices(i, t[r]), In.toArray(n, r * 16));
      }
      r !== null && (r.needsUpdate = !0);
    }
    clone() {
      return new e(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let e = Math.sqrt(this.bones.length * 4);
      ((e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4)));
      let t = new Float32Array(e * e * 4);
      t.set(this.boneMatrices);
      let n = new Fn(t, e, e, s, o);
      return (
        (n.needsUpdate = !0),
        (this.boneMatrices = t),
        (this.boneTexture = n),
        this
      );
    }
    getBoneByName(e) {
      for (let t = 0, n = this.bones.length; t < n; t++) {
        let n = this.bones[t];
        if (n.name === e) return n;
      }
    }
    dispose() {
      this.boneTexture !== null &&
        (this.boneTexture.dispose(), (this.boneTexture = null));
    }
    fromJSON(e, t) {
      this.uuid = e.uuid;
      for (let n = 0, r = e.bones.length; n < r; n++) {
        let r = e.bones[n],
          i = t[r];
        (i === void 0 &&
          (T(`Skeleton: No bone found with UUID:`, r), (i = new Pn())),
          this.bones.push(i),
          this.boneInverses.push(new Ce().fromArray(e.boneInverses[n])));
      }
      return (this.init(), this);
    }
    toJSON() {
      let e = {
        metadata: {
          version: 4.7,
          type: `Skeleton`,
          generator: `Skeleton.toJSON`,
        },
        bones: [],
        boneInverses: [],
      };
      e.uuid = this.uuid;
      let t = this.bones,
        n = this.boneInverses;
      for (let r = 0, i = t.length; r < i; r++) {
        let i = t[r];
        e.bones.push(i.uuid);
        let a = n[r];
        e.boneInverses.push(a.toArray());
      }
      return e;
    }
  },
  zn = class extends xe {
    constructor(e, t, n, r, i, a, o, s, c) {
      (super(e, t, n, r, i, a, o, s, c),
        (this.isCanvasTexture = !0),
        (this.needsUpdate = !0));
    }
  },
  Bn = class e extends Xt {
    constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
      (super(),
        (this.type = `BoxGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          depth: n,
          widthSegments: r,
          heightSegments: i,
          depthSegments: a,
        }));
      let o = this;
      ((r = Math.floor(r)), (i = Math.floor(i)), (a = Math.floor(a)));
      let s = [],
        c = [],
        l = [],
        u = [],
        d = 0,
        f = 0;
      (p(`z`, `y`, `x`, -1, -1, n, t, e, a, i, 0),
        p(`z`, `y`, `x`, 1, -1, n, t, -e, a, i, 1),
        p(`x`, `z`, `y`, 1, 1, e, n, t, r, a, 2),
        p(`x`, `z`, `y`, 1, -1, e, n, -t, r, a, 3),
        p(`x`, `y`, `z`, 1, -1, e, t, n, r, i, 4),
        p(`x`, `y`, `z`, -1, -1, e, t, -n, r, i, 5),
        this.setIndex(s),
        this.setAttribute(`position`, new Rt(c, 3)),
        this.setAttribute(`normal`, new Rt(l, 3)),
        this.setAttribute(`uv`, new Rt(u, 2)));
      function p(e, t, n, r, i, a, p, m, h, g, _) {
        let v = a / h,
          y = p / g,
          b = a / 2,
          x = p / 2,
          S = m / 2,
          C = h + 1,
          w = g + 1,
          T = 0,
          E = 0,
          D = new N();
        for (let a = 0; a < w; a++) {
          let o = a * y - x;
          for (let s = 0; s < C; s++)
            ((D[e] = (s * v - b) * r),
              (D[t] = o * i),
              (D[n] = S),
              c.push(D.x, D.y, D.z),
              (D[e] = 0),
              (D[t] = 0),
              (D[n] = m > 0 ? 1 : -1),
              l.push(D.x, D.y, D.z),
              u.push(s / h),
              u.push(1 - a / g),
              (T += 1));
        }
        for (let e = 0; e < g; e++)
          for (let t = 0; t < h; t++) {
            let n = d + t + C * e,
              r = d + t + C * (e + 1),
              i = d + (t + 1) + C * (e + 1),
              a = d + (t + 1) + C * e;
            (s.push(n, r, a), s.push(r, i, a), (E += 6));
          }
        (o.addGroup(f, E, _), (f += E), (d += T));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments,
      );
    }
  },
  Vn = class e extends Xt {
    constructor(e = 1, t = 32, n = 0, r = Math.PI * 2) {
      (super(),
        (this.type = `CircleGeometry`),
        (this.parameters = {
          radius: e,
          segments: t,
          thetaStart: n,
          thetaLength: r,
        }),
        (t = Math.max(3, t)));
      let i = [],
        a = [],
        o = [],
        s = [],
        c = new N(),
        l = new M();
      (a.push(0, 0, 0), o.push(0, 0, 1), s.push(0.5, 0.5));
      for (let i = 0, u = 3; i <= t; i++, u += 3) {
        let d = n + (i / t) * r;
        ((c.x = e * Math.cos(d)),
          (c.y = e * Math.sin(d)),
          a.push(c.x, c.y, c.z),
          o.push(0, 0, 1),
          (l.x = (a[u] / e + 1) / 2),
          (l.y = (a[u + 1] / e + 1) / 2),
          s.push(l.x, l.y));
      }
      for (let e = 1; e <= t; e++) i.push(e, e + 1, 0);
      (this.setIndex(i),
        this.setAttribute(`position`, new Rt(a, 3)),
        this.setAttribute(`normal`, new Rt(o, 3)),
        this.setAttribute(`uv`, new Rt(s, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
    }
  },
  Hn = class e extends Xt {
    constructor(
      e = 1,
      t = 1,
      n = 1,
      r = 32,
      i = 1,
      a = !1,
      o = 0,
      s = Math.PI * 2,
    ) {
      (super(),
        (this.type = `CylinderGeometry`),
        (this.parameters = {
          radiusTop: e,
          radiusBottom: t,
          height: n,
          radialSegments: r,
          heightSegments: i,
          openEnded: a,
          thetaStart: o,
          thetaLength: s,
        }));
      let c = this;
      ((r = Math.floor(r)), (i = Math.floor(i)));
      let l = [],
        u = [],
        d = [],
        f = [],
        p = 0,
        m = [],
        h = n / 2,
        g = 0;
      (_(),
        a === !1 && (e > 0 && v(!0), t > 0 && v(!1)),
        this.setIndex(l),
        this.setAttribute(`position`, new Rt(u, 3)),
        this.setAttribute(`normal`, new Rt(d, 3)),
        this.setAttribute(`uv`, new Rt(f, 2)));
      function _() {
        let a = new N(),
          _ = new N(),
          v = 0,
          y = (t - e) / n;
        for (let c = 0; c <= i; c++) {
          let l = [],
            g = c / i,
            v = g * (t - e) + e;
          for (let e = 0; e <= r; e++) {
            let t = e / r,
              i = t * s + o,
              c = Math.sin(i),
              m = Math.cos(i);
            ((_.x = v * c),
              (_.y = -g * n + h),
              (_.z = v * m),
              u.push(_.x, _.y, _.z),
              a.set(c, y, m).normalize(),
              d.push(a.x, a.y, a.z),
              f.push(t, 1 - g),
              l.push(p++));
          }
          m.push(l);
        }
        for (let n = 0; n < r; n++)
          for (let r = 0; r < i; r++) {
            let a = m[r][n],
              o = m[r + 1][n],
              s = m[r + 1][n + 1],
              c = m[r][n + 1];
            ((e > 0 || r !== 0) && (l.push(a, o, c), (v += 3)),
              (t > 0 || r !== i - 1) && (l.push(o, s, c), (v += 3)));
          }
        (c.addGroup(g, v, 0), (g += v));
      }
      function v(n) {
        let i = p,
          a = new M(),
          m = new N(),
          _ = 0,
          v = n === !0 ? e : t,
          y = n === !0 ? 1 : -1;
        for (let e = 1; e <= r; e++)
          (u.push(0, h * y, 0), d.push(0, y, 0), f.push(0.5, 0.5), p++);
        let b = p;
        for (let e = 0; e <= r; e++) {
          let t = (e / r) * s + o,
            n = Math.cos(t),
            i = Math.sin(t);
          ((m.x = v * i),
            (m.y = h * y),
            (m.z = v * n),
            u.push(m.x, m.y, m.z),
            d.push(0, y, 0),
            (a.x = n * 0.5 + 0.5),
            (a.y = i * 0.5 * y + 0.5),
            f.push(a.x, a.y),
            p++);
        }
        for (let e = 0; e < r; e++) {
          let t = i + e,
            r = b + e;
          (n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), (_ += 3));
        }
        (c.addGroup(g, _, n === !0 ? 1 : 2), (g += _));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  Un = class e extends Xt {
    constructor(e = [], t = [], n = 1, r = 0) {
      (super(),
        (this.type = `PolyhedronGeometry`),
        (this.parameters = { vertices: e, indices: t, radius: n, detail: r }));
      let i = [],
        a = [];
      (o(r),
        c(n),
        l(),
        this.setAttribute(`position`, new Rt(i, 3)),
        this.setAttribute(`normal`, new Rt(i.slice(), 3)),
        this.setAttribute(`uv`, new Rt(a, 2)),
        r === 0 ? this.computeVertexNormals() : this.normalizeNormals());
      function o(e) {
        let n = new N(),
          r = new N(),
          i = new N();
        for (let a = 0; a < t.length; a += 3)
          (f(t[a + 0], n), f(t[a + 1], r), f(t[a + 2], i), s(n, r, i, e));
      }
      function s(e, t, n, r) {
        let i = r + 1,
          a = [];
        for (let r = 0; r <= i; r++) {
          a[r] = [];
          let o = e.clone().lerp(n, r / i),
            s = t.clone().lerp(n, r / i),
            c = i - r;
          for (let e = 0; e <= c; e++)
            e === 0 && r === i
              ? (a[r][e] = o)
              : (a[r][e] = o.clone().lerp(s, e / c));
        }
        for (let e = 0; e < i; e++)
          for (let t = 0; t < 2 * (i - e) - 1; t++) {
            let n = Math.floor(t / 2);
            t % 2 == 0
              ? (d(a[e][n + 1]), d(a[e + 1][n]), d(a[e][n]))
              : (d(a[e][n + 1]), d(a[e + 1][n + 1]), d(a[e + 1][n]));
          }
      }
      function c(e) {
        let t = new N();
        for (let n = 0; n < i.length; n += 3)
          ((t.x = i[n + 0]),
            (t.y = i[n + 1]),
            (t.z = i[n + 2]),
            t.normalize().multiplyScalar(e),
            (i[n + 0] = t.x),
            (i[n + 1] = t.y),
            (i[n + 2] = t.z));
      }
      function l() {
        let e = new N();
        for (let t = 0; t < i.length; t += 3) {
          ((e.x = i[t + 0]), (e.y = i[t + 1]), (e.z = i[t + 2]));
          let n = h(e) / 2 / Math.PI + 0.5,
            r = g(e) / Math.PI + 0.5;
          a.push(n, 1 - r);
        }
        (p(), u());
      }
      function u() {
        for (let e = 0; e < a.length; e += 6) {
          let t = a[e + 0],
            n = a[e + 2],
            r = a[e + 4];
          Math.max(t, n, r) > 0.9 &&
            Math.min(t, n, r) < 0.1 &&
            (t < 0.2 && (a[e + 0] += 1),
            n < 0.2 && (a[e + 2] += 1),
            r < 0.2 && (a[e + 4] += 1));
        }
      }
      function d(e) {
        i.push(e.x, e.y, e.z);
      }
      function f(t, n) {
        let r = t * 3;
        ((n.x = e[r + 0]), (n.y = e[r + 1]), (n.z = e[r + 2]));
      }
      function p() {
        let e = new N(),
          t = new N(),
          n = new N(),
          r = new N(),
          o = new M(),
          s = new M(),
          c = new M();
        for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
          (e.set(i[l + 0], i[l + 1], i[l + 2]),
            t.set(i[l + 3], i[l + 4], i[l + 5]),
            n.set(i[l + 6], i[l + 7], i[l + 8]),
            o.set(a[u + 0], a[u + 1]),
            s.set(a[u + 2], a[u + 3]),
            c.set(a[u + 4], a[u + 5]),
            r.copy(e).add(t).add(n).divideScalar(3));
          let d = h(r);
          (m(o, u + 0, e, d), m(s, u + 2, t, d), m(c, u + 4, n, d));
        }
      }
      function m(e, t, n, r) {
        (r < 0 && e.x === 1 && (a[t] = e.x - 1),
          n.x === 0 && n.z === 0 && (a[t] = r / 2 / Math.PI + 0.5));
      }
      function h(e) {
        return Math.atan2(e.z, -e.x);
      }
      function g(e) {
        return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
      }
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.vertices, t.indices, t.radius, t.detail);
    }
  },
  Wn = class e extends Un {
    constructor(e = 1, t = 0) {
      (super(
        [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
        [
          0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
          2,
        ],
        e,
        t,
      ),
        (this.type = `OctahedronGeometry`),
        (this.parameters = { radius: e, detail: t }));
    }
    static fromJSON(t) {
      return new e(t.radius, t.detail);
    }
  },
  Gn = class e extends Xt {
    constructor(e = 1, t = 1, n = 1, r = 1) {
      (super(),
        (this.type = `PlaneGeometry`),
        (this.parameters = {
          width: e,
          height: t,
          widthSegments: n,
          heightSegments: r,
        }));
      let i = e / 2,
        a = t / 2,
        o = Math.floor(n),
        s = Math.floor(r),
        c = o + 1,
        l = s + 1,
        u = e / o,
        d = t / s,
        f = [],
        p = [],
        m = [],
        h = [];
      for (let e = 0; e < l; e++) {
        let t = e * d - a;
        for (let n = 0; n < c; n++) {
          let r = n * u - i;
          (p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s));
        }
      }
      for (let e = 0; e < s; e++)
        for (let t = 0; t < o; t++) {
          let n = t + c * e,
            r = t + c * (e + 1),
            i = t + 1 + c * (e + 1),
            a = t + 1 + c * e;
          (f.push(n, r, a), f.push(r, i, a));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new Rt(p, 3)),
        this.setAttribute(`normal`, new Rt(m, 3)),
        this.setAttribute(`uv`, new Rt(h, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.widthSegments, t.heightSegments);
    }
  },
  Kn = class e extends Xt {
    constructor(
      e = 1,
      t = 32,
      n = 16,
      r = 0,
      i = Math.PI * 2,
      a = 0,
      o = Math.PI,
    ) {
      (super(),
        (this.type = `SphereGeometry`),
        (this.parameters = {
          radius: e,
          widthSegments: t,
          heightSegments: n,
          phiStart: r,
          phiLength: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (t = Math.max(3, Math.floor(t))),
        (n = Math.max(2, Math.floor(n))));
      let s = Math.min(a + o, Math.PI),
        c = 0,
        l = [],
        u = new N(),
        d = new N(),
        f = [],
        p = [],
        m = [],
        h = [];
      for (let f = 0; f <= n; f++) {
        let g = [],
          _ = f / n,
          v = a + _ * o,
          y = e * Math.cos(v),
          b = Math.sqrt(e * e - y * y),
          x = 0;
        f === 0 && a === 0
          ? (x = 0.5 / t)
          : f === n && s === Math.PI && (x = -0.5 / t);
        for (let e = 0; e <= t; e++) {
          let n = e / t,
            a = r + n * i;
          ((u.x = -b * Math.cos(a)),
            (u.y = y),
            (u.z = b * Math.sin(a)),
            p.push(u.x, u.y, u.z),
            d.copy(u).normalize(),
            m.push(d.x, d.y, d.z),
            h.push(n + x, 1 - _),
            g.push(c++));
        }
        l.push(g);
      }
      for (let e = 0; e < n; e++)
        for (let r = 0; r < t; r++) {
          let t = l[e][r + 1],
            i = l[e][r],
            o = l[e + 1][r],
            c = l[e + 1][r + 1];
          ((e !== 0 || a > 0) && f.push(t, i, c),
            (e !== n - 1 || s < Math.PI) && f.push(i, o, c));
        }
      (this.setIndex(f),
        this.setAttribute(`position`, new Rt(p, 3)),
        this.setAttribute(`normal`, new Rt(m, 3)),
        this.setAttribute(`uv`, new Rt(h, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  qn = class e extends Xt {
    constructor(
      e = 1,
      t = 0.4,
      n = 12,
      r = 48,
      i = Math.PI * 2,
      a = 0,
      o = Math.PI * 2,
    ) {
      (super(),
        (this.type = `TorusGeometry`),
        (this.parameters = {
          radius: e,
          tube: t,
          radialSegments: n,
          tubularSegments: r,
          arc: i,
          thetaStart: a,
          thetaLength: o,
        }),
        (n = Math.floor(n)),
        (r = Math.floor(r)));
      let s = [],
        c = [],
        l = [],
        u = [],
        d = new N(),
        f = new N(),
        p = new N();
      for (let s = 0; s <= n; s++) {
        let m = a + (s / n) * o;
        for (let a = 0; a <= r; a++) {
          let o = (a / r) * i;
          ((f.x = (e + t * Math.cos(m)) * Math.cos(o)),
            (f.y = (e + t * Math.cos(m)) * Math.sin(o)),
            (f.z = t * Math.sin(m)),
            c.push(f.x, f.y, f.z),
            (d.x = e * Math.cos(o)),
            (d.y = e * Math.sin(o)),
            p.subVectors(f, d).normalize(),
            l.push(p.x, p.y, p.z),
            u.push(a / r),
            u.push(s / n));
        }
      }
      for (let e = 1; e <= n; e++)
        for (let t = 1; t <= r; t++) {
          let n = (r + 1) * e + t - 1,
            i = (r + 1) * (e - 1) + t - 1,
            a = (r + 1) * (e - 1) + t,
            o = (r + 1) * e + t;
          (s.push(n, i, o), s.push(i, a, o));
        }
      (this.setIndex(s),
        this.setAttribute(`position`, new Rt(c, 3)),
        this.setAttribute(`normal`, new Rt(l, 3)),
        this.setAttribute(`uv`, new Rt(u, 2)));
    }
    copy(e) {
      return (
        super.copy(e),
        (this.parameters = Object.assign({}, e.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new e(
        t.radius,
        t.tube,
        t.radialSegments,
        t.tubularSegments,
        t.arc,
        t.thetaStart,
        t.thetaLength,
      );
    }
  };
