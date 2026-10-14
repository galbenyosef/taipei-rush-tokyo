// tokyo/assets/region-tokyo-BcM3fReU 161 — math
// Lines 68142-68684 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var YR = Math.PI * 2,
  XR = 1.3,
  ZR = new o(),
  QR = new M(),
  $R = new u(),
  ez = class e {
    mesh;
    F;
    lookGeo = [];
    farGeo = [];
    heroGeo = [];
    propGeo = [];
    zones = [];
    n = 0;
    inst;
    zoneOf;
    X;
    Z;
    Y;
    DX;
    DZ;
    SPAN;
    SPD;
    PAUSE;
    PH;
    HEAD;
    HIDE2;
    LOOK;
    ULOOK;
    rain = !1;
    cur;
    vis;
    actors = [];
    freeInst = [];
    mat;
    frame = 0;
    shown = 0;
    shownTris = 0;
    geoTris = [];
    farPose;
    opts;
    constructor(e, t) {
      ((this.opts = e),
        (this.F = e.walkFrames),
        (this.farPose = new Uint8Array(this.F)));
      for (let e = 0; e < this.F; e++)
        this.farPose[e] = +(Math.abs(Math.sin((e / this.F) * YR)) > 0.5);
      let n = 0,
        r = 0,
        i = [],
        a = (e) => {
          let t = JR(e);
          return (
            i.push(t),
            (n += e.pos.length / 3),
            (r += e.idx.length),
            i.length - 1
          );
        },
        o = t.look.map((e) => e.map(a)),
        s = t.far.map((e) => e.map(a)),
        c = t.hero.map((e) => e.map(a)),
        l = [];
      for (let t of e.props ?? [])
        (i.push(t),
          (n += t.attributes.position.count),
          (r += t.index.count),
          l.push(i.length - 1));
      let u = new v(e.capacity, Math.max(3, n), Math.max(3, r), e.material);
      ((u.name = e.name),
        (u.perObjectFrustumCulled = !1),
        (u.sortObjects = !1),
        (u.frustumCulled = !1),
        (u.castShadow = !1),
        (u.receiveShadow = !0),
        (u.matrixAutoUpdate = !1),
        (u.raycast = () => {}));
      let d = i.map((e) => u.addGeometry(e));
      (i.forEach((e, t) => (this.geoTris[d[t]] = e.index.count / 3)),
        (this.lookGeo = o.map((e) => Int32Array.from(e.map((e) => d[e])))),
        (this.farGeo = s.map((e) => Int32Array.from(e.map((e) => d[e])))),
        (this.heroGeo = c.map((e) => Int32Array.from(e.map((e) => d[e])))),
        (this.propGeo = l.map((e) => d[e])));
      for (let e of i) e.dispose();
      (nz(u), (this.mesh = u));
      let f = e.capacity;
      ((this.inst = new Int32Array(f)),
        (this.zoneOf = new Int32Array(f)),
        (this.X = new Float32Array(f)),
        (this.Z = new Float32Array(f)),
        (this.Y = new Float32Array(f)),
        (this.DX = new Float32Array(f)),
        (this.DZ = new Float32Array(f)),
        (this.SPAN = new Float32Array(f)),
        (this.SPD = new Float32Array(f)),
        (this.PAUSE = new Float32Array(f)),
        (this.PH = new Float32Array(f)),
        (this.HEAD = new Float32Array(f)),
        (this.HIDE2 = new Float32Array(f)),
        (this.LOOK = new Int16Array(f)),
        (this.ULOOK = new Int16Array(f).fill(-1)),
        (this.cur = new Int32Array(f).fill(-1)),
        (this.vis = new Uint8Array(f)));
      for (let e = 0; e < f; e++) {
        let e = u.addInstance(this.lookGeo[0]?.[0] ?? 0);
        (u.setVisibleAt(e, !1), this.freeInst.push(e));
      }
      this.freeInst.reverse();
      let p = u._matricesTexture;
      this.mat =
        p && p.image && p.image.data instanceof Float32Array
          ? p.image.data
          : null;
    }
    static async create(t) {
      let n = [
          AR,
          {
            ...AR,
            lThigh: -0.05,
            rThigh: 0.05,
            lUpper: -0.04,
            rUpper: 0.05,
            rFore: 0.5,
            lFore: 0.2,
          },
        ],
        r = [...kR(t.walkFrames), ...n],
        i = t.extraPoses ?? [],
        a = [],
        o = [],
        s = [],
        c = new Set(t.heroLooks ?? []);
      for (let e = 0; e < t.looks.length; e++) {
        let l = t.looks[e],
          u = t.umbrellaOf?.(e) ?? null;
        if (u !== null) {
          let e = r.map(HR),
            n = (l.height || 1.72) / 1.72,
            i = VR(l, e);
          (a.push(i ? i.map((t, r) => WR(t, e[r], u, n)) : []),
            o.push(qR(GR(l), l.height || 1.72, u)),
            s.push([]),
            t.yieldEvery && (await t.yieldEvery()));
          continue;
        }
        let d = i.length > 0 && (!t.extraFor || t.extraFor(e)),
          f = VR(l, d ? [...r, ...i] : r);
        (a.push(f ?? []),
          o.push(qR(GR(l), l.height || 1.72)),
          s.push(c.has(e) ? (VR(l, d ? [...n, ...i] : n, 0.85, 1) ?? []) : []),
          t.yieldEvery && (await t.yieldEvery()));
      }
      return new e(t, { look: a, far: o, hero: s });
    }
    get frames() {
      return this.F + 2 + (this.opts.extraPoses?.length ?? 0);
    }
    geo(e, t, n = !1) {
      if (n && t >= this.F) {
        let n = this.heroGeo[e];
        if (n && n.length) return n[Math.min(t - this.F, n.length - 1)];
      }
      let r = this.lookGeo[e];
      return r && r.length ? r[Math.min(t, r.length - 1)] : -1;
    }
    prop(e) {
      return this.propGeo[e] ?? -1;
    }
    addZone(e) {
      let t = this.zones.length,
        n = Math.min(e.count, this.freeInst.length),
        r = this.n,
        i = e.bx - e.ax,
        a = e.bz - e.az,
        o = Math.hypot(i, a) || 1,
        s = i / o,
        c = a / o,
        l = e.seed >>> 0 || 1,
        u = () => (
          (l ^= l << 13),
          (l ^= l >>> 17),
          (l ^= l << 5),
          (l >>> 0) / 4294967296
        ),
        d = 0;
      for (let [, t] of e.looks) d += t;
      let f = e.hideR ?? this.opts.hideR,
        p = 1 / 0,
        m = 1 / 0,
        h = -1 / 0,
        g = -1 / 0,
        _ = e.mode === `stand` && e.lines && e.lines.at.length ? e.lines : null,
        v = e.mode === `stand` && !_ ? 0.36 : 0,
        y = () => {
          let t = u() * d,
            n = e.looks[0]?.[0] ?? 0;
          for (let [r, i] of e.looks)
            if ((t -= i) <= 0) {
              n = r;
              break;
            }
          return n;
        };
      for (let i = 0; i < n; i++) {
        let n = this.n++;
        ((this.inst[n] = this.freeInst.pop()), (this.zoneOf[n] = t));
        let a = u() * o,
          l = (u() * 2 - 1) * e.halfWidth;
        if (_) {
          let t = _.at.length;
          ((a = _.at[i % t] + (l / Math.max(0.001, e.halfWidth)) * 0.12),
            (l = _.side * (Math.floor(i / t) * _.gap)));
        } else if (v > 0)
          for (let t = 0; t < 6; t++) {
            let t = e.ax + s * a - c * l,
              i = e.az + c * a + s * l,
              d = !1;
            for (let e = r; e < n && !d; e++)
              d = (this.X[e] - t) ** 2 + (this.Z[e] - i) ** 2 < v;
            if (!d) break;
            ((a = u() * o), (l = (u() * 2 - 1) * e.halfWidth));
          }
        let d = e.ax + s * a - c * l,
          b = e.az + c * a + s * l;
        this.Y[n] = e.y ?? 0;
        let x = y(),
          S = _ ? n - _.at.length : -1,
          C = (e) =>
            (n - 1 >= r && e === this.LOOK[n - 1]) ||
            (S >= r && e === this.LOOK[S]);
        if (e.looks.length > 1) for (let e = 0; e < 4 && C(x); e++) x = y();
        this.LOOK[n] = x;
        let w = e.rainLooks;
        if (w && w.length) {
          let t = 0;
          for (let [, e] of w) t += e;
          let r =
            Math.imul((e.seed ^ (i * 2654435761)) >>> 0, 2246822507) >>> 0;
          r ^= r >>> 13;
          let a = ((r >>> 0) / 4294967296) * t;
          this.ULOOK[n] = w[0][0];
          for (let [e, t] of w)
            if ((a -= t) <= 0) {
              this.ULOOK[n] = e;
              break;
            }
        } else this.ULOOK[n] = -1;
        let T = f[0] + (f[1] - f[0]) * u();
        if (
          ((this.HIDE2[n] = T * T), (this.PH[n] = u() * 997), e.mode === `walk`)
        ) {
          let [t, r] = e.span ?? [20, 70],
            i = t + (r - t) * u(),
            l = u() < 0.5 ? 1 : -1,
            f = l > 0 ? o - a : a;
          i = Math.max(4, Math.min(i, f > 4 ? f : o - f));
          let _ = f > 4 ? l : -l;
          ((this.X[n] = d),
            (this.Z[n] = b),
            (this.DX[n] = s * _),
            (this.DZ[n] = c * _),
            (this.SPAN[n] = i));
          let [v, y] = e.speed ?? [1.05, 1.5];
          this.SPD[n] = v + (y - v) * u();
          let [x, S] = e.pause ?? [1, 8];
          ((this.PAUSE[n] = x + (S - x) * u()),
            (this.HEAD[n] = Math.atan2(s * _, -(c * _))));
          let C = d + s * _ * i,
            w = b + c * _ * i;
          ((p = Math.min(p, d, C)),
            (h = Math.max(h, d, C)),
            (m = Math.min(m, b, w)),
            (g = Math.max(g, b, w)));
        } else {
          ((this.X[n] = d),
            (this.Z[n] = b),
            (this.DX[n] = this.DZ[n] = 0),
            (this.SPAN[n] = 0),
            (this.SPD[n] = 0),
            (this.PAUSE[n] = 3 + u() * 9));
          let t = e.faceJitter ?? 0.5,
            r =
              e.face ??
              Math.atan2(c * Math.sign(l || 1), -(-s * Math.sign(l || 1)));
          ((this.HEAD[n] = r + (u() * 2 - 1) * t),
            (p = Math.min(p, d)),
            (h = Math.max(h, d)),
            (m = Math.min(m, b)),
            (g = Math.max(g, b)));
        }
      }
      return (
        this.zones.push({
          def: e,
          on: !0,
          density: 1,
          m0: r,
          n: this.n - r,
          minX: p,
          minZ: m,
          maxX: h,
          maxZ: g,
          shown: !1,
          wake: 0,
        }),
        t
      );
    }
    setZone(e, t, n = 1) {
      let r = this.zones[e];
      if (!r) return;
      let i = r.on && r.density > 0;
      ((r.on = t),
        (r.density = Math.max(0, Math.min(1, n))),
        !i && r.on && r.density > 0 && (r.wake = 0));
    }
    zoneCount() {
      return this.zones.length;
    }
    zoneInfo(e) {
      let t = this.zones[e];
      return t
        ? {
            id: t.def.id,
            on: t.on,
            density: t.density,
            members: t.n,
            shown: t.shown,
            box: [t.minX, t.minZ, t.maxX, t.maxZ],
          }
        : null;
    }
    actor() {
      let e = this.freeInst.pop();
      return e === void 0 ? -1 : (this.actors.push(e), e);
    }
    releaseActor(e) {
      let t = this.actors.indexOf(e);
      t < 0 ||
        (this.actors.splice(t, 1), this.hideInst(e), this.freeInst.push(e));
    }
    setActor(e, t, n, r, i, a, o = 1) {
      e < 0 ||
        t < 0 ||
        (this.cur[e] !== t &&
          (this.cur[e] >= 0
            ? (this.shownTris -= this.geoTris[this.cur[e]])
            : this.shown++,
          this.mesh.setGeometryIdAt(e, t),
          (this.cur[e] = t),
          (this.shownTris += this.geoTris[t])),
        this.vis[e] || (this.mesh.setVisibleAt(e, !0), (this.vis[e] = 1)),
        this.write(e, n, r, i, a, o));
    }
    setActorM(e, t, n) {
      e < 0 ||
        t < 0 ||
        (this.cur[e] !== t &&
          (this.cur[e] >= 0
            ? (this.shownTris -= this.geoTris[this.cur[e]])
            : this.shown++,
          this.mesh.setGeometryIdAt(e, t),
          (this.cur[e] = t),
          (this.shownTris += this.geoTris[t])),
        this.vis[e] || (this.mesh.setVisibleAt(e, !0), (this.vis[e] = 1)),
        this.mat
          ? (this.mat.set(n, e * 16), (this.dirty = !0))
          : this.mesh.setMatrixAt(e, tz.fromArray(n)));
    }
    hideActor(e) {
      e >= 0 && this.hideInst(e);
    }
    hideInst(e) {
      (this.vis[e] && (this.mesh.setVisibleAt(e, !1), (this.vis[e] = 0)),
        this.cur[e] >= 0 &&
          (this.shown--,
          (this.shownTris -= this.geoTris[this.cur[e]]),
          (this.cur[e] = -1)));
    }
    write(e, t, n, r, i, a) {
      let o = Math.cos(i) * a,
        s = Math.sin(i) * a,
        c = this.mat;
      if (c) {
        let i = e * 16;
        ((c[i] = o),
          (c[i + 1] = 0),
          (c[i + 2] = s),
          (c[i + 3] = 0),
          (c[i + 4] = 0),
          (c[i + 5] = a),
          (c[i + 6] = 0),
          (c[i + 7] = 0),
          (c[i + 8] = -s),
          (c[i + 9] = 0),
          (c[i + 10] = o),
          (c[i + 11] = 0),
          (c[i + 12] = t),
          (c[i + 13] = n),
          (c[i + 14] = r),
          (c[i + 15] = 1),
          (this.dirty = !0));
      } else
        (tz.set(o, 0, -s, t, 0, a, 0, n, s, 0, o, r, 0, 0, 0, 1),
          this.mesh.setMatrixAt(e, tz));
    }
    dirty = !1;
    update(e, t, n = 1) {
      this.frame++;
      let r = e.position.x,
        i = e.position.z;
      (QR.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        ZR.setFromProjectionMatrix(QR, e.coordinateSystem, e.reversedDepth));
      let a = this.opts.farR * n;
      a * a;
      let o = (this.opts.lodR * n) ** 2,
        s = (this.opts.slowR * n) ** 2,
        c = (this.opts.heroR ?? 0) ** 2,
        l = this.frame & 1,
        u = this.F;
      for (let e = 0; e < this.zones.length; e++) {
        let d = this.zones[e];
        if (!d.shown && this.frame < d.wake) continue;
        let f = Math.max(d.minX - r, 0, r - d.maxX),
          p = Math.max(d.minZ - i, 0, i - d.maxZ),
          m = d.def.farR === void 0 ? a : Math.min(a, d.def.farR * n),
          h = m * m,
          g = f * f + p * p;
        if (!(d.on && d.density > 0 && g < h)) {
          if (d.shown) {
            for (let e = d.m0; e < d.m0 + d.n; e++) this.hideInst(this.inst[e]);
            d.shown = !1;
          }
          d.wake =
            this.frame +
            (!d.on || d.density <= 0
              ? 1e9
              : g > h
                ? Math.min(30, Math.floor((Math.sqrt(g) - m) / 5))
                : 0);
          continue;
        }
        d.shown = !0;
        let _ = Math.round(d.n * d.density);
        for (let e = 0; e < d.n; e++) {
          let n = d.m0 + e,
            a = this.inst[n];
          if (e >= _) {
            this.cur[a] >= 0 && this.hideInst(a);
            continue;
          }
          let f = this.X[n],
            p = this.Z[n],
            m = this.HEAD[n],
            g = u,
            v = this.SPAN[n];
          if (
            (v === 0 && (n + this.frame) & 3) ||
            ((f - r) * (f - r) + (p - i) * (p - i) > s &&
              (n & 1) === l &&
              this.cur[a] >= 0)
          )
            continue;
          if (v > 0) {
            let e = this.SPD[n],
              r = v / e,
              i = this.PAUSE[n],
              a = 2 * (r + i),
              o = (t + this.PH[n]) % a;
            o < 0 && (o += a);
            let s,
              c = !0,
              l = !1;
            if (
              (o < r
                ? (s = o * e)
                : o < r + i
                  ? ((s = v), (c = !1))
                  : o < 2 * r + i
                    ? ((s = v - (o - r - i) * e), (l = !0))
                    : ((s = 0), (c = !1), (l = !0)),
              (f += this.DX[n] * s),
              (p += this.DZ[n] * s),
              l && (m += Math.PI),
              c)
            ) {
              let t = (o * e) / XR + this.PH[n];
              g = Math.floor((t - Math.floor(t)) * u);
            } else g = u + (Math.floor((t + this.PH[n]) / 4) & 1);
          } else g = u + (Math.floor((t + this.PH[n]) / this.PAUSE[n]) & 1);
          let y = f - r,
            b = p - i,
            x = y * y + b * b,
            S = x > this.HIDE2[n] && x < h;
          if (
            ((S &&=
              ($R.center.set(f, this.Y[n] + 0.9, p),
              ($R.radius = 1.1),
              ZR.intersectsSphere($R))),
            !S)
          ) {
            this.cur[a] >= 0 && this.hideInst(a);
            continue;
          }
          let C =
              this.rain && this.ULOOK[n] >= 0 ? this.ULOOK[n] : this.LOOK[n],
            w;
          ((w =
            x > o || !this.lookGeo[C].length
              ? this.farGeo[C][g < u ? this.farPose[g] : 0]
              : x < c && g >= u && this.heroGeo[C].length
                ? this.heroGeo[C][Math.min(g - u, this.heroGeo[C].length - 1)]
                : this.lookGeo[C][Math.min(g, this.lookGeo[C].length - 1)]),
            this.cur[a] !== w &&
              (this.cur[a] >= 0
                ? (this.shownTris -= this.geoTris[this.cur[a]])
                : this.shown++,
              this.mesh.setGeometryIdAt(a, w),
              (this.cur[a] = w),
              (this.shownTris += this.geoTris[w])));
          let T = this.vis[a];
          (T || (this.mesh.setVisibleAt(a, !0), (this.vis[a] = 1)),
            (v > 0 || !T) && this.write(a, f, this.Y[n], p, m, 1));
        }
      }
      if (this.dirty) {
        let e = this.mesh._matricesTexture;
        (e && (e.needsUpdate = !0), (this.dirty = !1));
      }
      this.mesh.visible = this.shown > 0;
    }
    get members() {
      return this.n;
    }
    get capacity() {
      return this.opts.capacity;
    }
    dispose() {
      this.mesh.dispose();
    }
  },
  tz = new M();
