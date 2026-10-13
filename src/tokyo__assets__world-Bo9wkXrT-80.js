// tokyo__assets__world-Bo9wkXrT 80 — math
// Lines 26485-26814 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
var ig = class {
    tiles = [];
    index;
    total;
    constructor(e, t, n, r) {
      let i = e.index.array,
        a = e.attributes.position.array,
        o = e.attributes.position.count,
        s = Math.floor(i.length / 3),
        c = new Int32Array(s),
        l = new Map(),
        u = [],
        d = [],
        f = new Map(),
        p = 1 << 24,
        m = 1 << 25;
      for (let e = 0; e < s; e++) {
        let r = i[e * 3],
          o = i[e * 3 + 1],
          s = i[e * 3 + 2],
          h = n ? n(r, o, s) : null,
          g;
        if (h === null || h === `detail` || h === `main`) {
          let e = (a[r * 3] + a[o * 3] + a[s * 3]) / 3,
            n = (a[r * 3 + 2] + a[o * 3 + 2] + a[s * 3 + 2]) / 3;
          g =
            (Math.floor(e / t) + 2048) * 4096 +
            (Math.floor(n / t) + 2048) +
            (h === `detail` ? m : h === `main` ? p : 0);
        } else {
          let e = f.get(h);
          (e === void 0 && f.set(h, (e = -1 - f.size)), (g = e));
        }
        let _ = l.get(g);
        (_ === void 0 && ((_ = u.length), l.set(g, _), u.push(g), d.push(0)),
          (c[e] = _),
          (d[_] += 3));
      }
      let h = new Map();
      for (let [e, t] of f) h.set(t, e);
      ((this.total = s * 3),
        (this.index =
          o <= 65536
            ? new Uint16Array(this.total)
            : new Uint32Array(this.total)));
      let g = new Int32Array(u.length),
        _ = [],
        v = 0;
      for (let e = 0; e < u.length; e++)
        ((g[e] = v), (v += d[e]), _.push(new be()));
      let y = this.index;
      for (let e = 0; e < s; e++) {
        let t = c[e],
          n = _[t],
          r = g[t];
        for (let t = 0; t < 3; t++) {
          let o = i[e * 3 + t];
          ((y[r++] = o),
            n.expandByPoint(tg.set(a[o * 3], a[o * 3 + 1], a[o * 3 + 2])));
        }
        g[t] = r;
      }
      v = 0;
      for (let e = 0; e < u.length; e++) {
        let t = u[e],
          n = _[e];
        (r && r(t < 0 ? h.get(t) : ``, n),
          this.tiles.push({
            start: v,
            count: d[e],
            box: n,
            detail: t >= m,
            mainOnly: t >= p && t < m,
          }),
          (v += d[e]));
      }
    }
    maxVisible(e, t) {
      let n = this.tiles;
      if (!t) {
        let t = 0;
        for (let r of n) !r.detail && (e || !r.mainOnly) && (t += r.count);
        return t;
      }
      let { area: r, dist: i, detailDist: a } = t;
      return rg(n, r, 150, (t) => (t.mainOnly && !e ? 0 : t.detail ? a : i));
    }
    view(e, t = !0, n) {
      return new ag(this, e, t, Math.max(3, this.maxVisible(t, n)));
    }
  },
  ag = class {
    t;
    allowMainOnly;
    geometry = new V();
    idx;
    vis;
    first = !0;
    tris = 0;
    visibleTiles = 0;
    capacity;
    grown = 0;
    constructor(e, t, n = !0, r = e.total) {
      ((this.t = e), (this.allowMainOnly = n));
      for (let e of Object.keys(t.attributes))
        this.geometry.setAttribute(e, t.attributes[e]);
      ((this.capacity = Math.min(e.total, r)),
        (this.idx = this.makeIndex(this.capacity)),
        this.geometry.setDrawRange(0, 0),
        (this.geometry.boundingSphere = new T(new U(), 1e7)),
        (this.vis = new Uint8Array(e.tiles.length)));
    }
    get total() {
      return this.t.total;
    }
    makeIndex(e) {
      let t = this.t.index instanceof Uint16Array ? Uint16Array : Uint32Array,
        n = new H(new t(e), 1);
      return (n.setUsage(S), this.geometry.setIndex(n), n);
    }
    update(e, t) {
      let n = this.t.tiles,
        r = this.first,
        i = 0;
      for (let a = 0; a < n.length; a++) {
        let o = n[a],
          s = (
            o.detail
              ? t && t(o.box)
              : (!o.mainOnly || this.allowMainOnly) && e(o.box)
          )
            ? 1
            : 0;
        (s !== this.vis[a] && ((this.vis[a] = s), (r = !0)),
          s && (i += o.count));
      }
      if (!r) return this.geometry.drawRange.count;
      ((this.first = !1),
        i > this.capacity &&
          ((this.capacity = Math.min(this.t.total, Math.ceil(i * 1.25))),
          (this.idx = this.makeIndex(this.capacity)),
          this.grown++));
      let a = this.idx.array,
        o = this.t.index,
        s = 0,
        c = 0;
      for (let e = 0; e < n.length; e++) {
        if (!this.vis[e]) continue;
        let t = n[e];
        (a.set(o.subarray(t.start, t.start + t.count), s), (s += t.count), c++);
      }
      return (
        this.geometry.setDrawRange(0, s),
        this.idx.clearUpdateRanges(),
        this.idx.addUpdateRange(0, Math.max(3, s)),
        (this.idx.needsUpdate = !0),
        (this.tris = s / 3),
        (this.visibleTiles = c),
        s
      );
    }
  },
  og = class e {
    mesh;
    tiles;
    mat;
    col;
    vis;
    first = !0;
    visible = 0;
    dropped = 0;
    constructor(t, n, i, a, o) {
      if (((this.mesh = t), n instanceof e))
        ((this.tiles = n.tiles), (this.mat = n.mat), (this.col = n.col));
      else {
        this.tiles = [];
        let e = n.length,
          t = new Map();
        for (let r = 0; r < e; r++) {
          let e = n[r].elements,
            i =
              (Math.floor(e[12] / a) + 2048) * 4096 +
              (Math.floor(e[14] / a) + 2048),
            o = t.get(i);
          (o || t.set(i, (o = [])), o.push(r));
        }
        ((this.mat = new Float32Array(e * 16)),
          (this.col = i ? new Float32Array(e * 3) : null));
        let r = 0;
        for (let e of t.values()) {
          let t = new be();
          for (let a = 0; a < e.length; a++) {
            let s = n[e[a]];
            (s.toArray(this.mat, (r + a) * 16),
              this.col && i && i[e[a]].toArray(this.col, (r + a) * 3));
            let c = s.elements,
              l = Math.max(
                Math.hypot(c[0], c[1], c[2]),
                Math.hypot(c[4], c[5], c[6]),
                Math.hypot(c[8], c[9], c[10]),
              );
            (t.expandByPoint(
              tg.set(c[12] - o * l, c[13] - o * l * 0.2, c[14] - o * l),
            ),
              t.expandByPoint(
                tg.set(c[12] + o * l, c[13] + o * l * 2, c[14] + o * l),
              ));
          }
          (this.tiles.push({ start: r, count: e.length, box: t }),
            (r += e.length));
        }
      }
      ((this.vis = new Uint8Array(this.tiles.length)),
        t &&
          (t.instanceMatrix.setUsage(S),
          this.col &&
            !t.instanceColor &&
            (t.instanceColor = new r(
              new Float32Array(t.instanceMatrix.count * 3),
              3,
            )),
          t.instanceColor?.setUsage(S),
          (t.count = 0),
          (t.frustumCulled = !1)));
    }
    get count() {
      return this.mat.length / 16;
    }
    maxWithin(e, t, n = 40) {
      return rg(this.tiles, t, n, () => e);
    }
    update(e) {
      let t = this.mesh;
      if (!t) return 0;
      let n = this.tiles,
        r = this.first;
      for (let t = 0; t < n.length; t++) {
        let i = +!!e(n[t].box);
        i !== this.vis[t] && ((this.vis[t] = i), (r = !0));
      }
      if (!r) return this.visible;
      this.first = !1;
      let i = t.instanceMatrix.array,
        a = t.instanceColor ? t.instanceColor.array : null,
        o = i.length / 16,
        s = 0;
      this.dropped = 0;
      for (let e = 0; e < n.length; e++) {
        if (!this.vis[e]) continue;
        let t = n[e],
          r = Math.min(t.count, o - s);
        (r < t.count && (this.dropped += t.count - r),
          !(r <= 0) &&
            (i.set(this.mat.subarray(t.start * 16, (t.start + r) * 16), s * 16),
            a &&
              this.col &&
              a.set(this.col.subarray(t.start * 3, (t.start + r) * 3), s * 3),
            (s += r)));
      }
      t.count = s;
      let c = t.instanceMatrix;
      if (
        (c.clearUpdateRanges(),
        c.addUpdateRange(0, Math.max(16, s * 16)),
        (c.needsUpdate = !0),
        t.instanceColor)
      ) {
        let e = t.instanceColor;
        (e.clearUpdateRanges(),
          e.addUpdateRange(0, Math.max(3, s * 3)),
          (e.needsUpdate = !0));
      }
      return ((this.visible = s), s);
    }
  },
  sg = new we(),
  cg = class {
    move;
    turn;
    enabled;
    gate;
    frustum = new y();
    cam = new U();
    maxDist = 1 / 0;
    detailDist = 0;
    constructor(e = 3, t = M.degToRad(3), n = !0, r = 120) {
      ((this.move = e),
        (this.turn = t),
        (this.enabled = n),
        (this.gate = new Ie(e, t, r)));
    }
    get rebuilds() {
      return this.gate.rebuilds;
    }
    test = (e) =>
      this.maxDist < 1 / 0 &&
      e.distanceToPoint(this.cam) > this.maxDist + this.move
        ? !1
        : this.frustum.intersectsBox(e);
    testDetail = (e) =>
      this.detailDist <= 0 ||
      e.distanceToPoint(this.cam) > this.detailDist + this.move
        ? !1
        : this.frustum.intersectsBox(e);
    stale(e, t = !1) {
      return !this.enabled || this.gate.stale(e, t);
    }
    set(e, t = 1 / 0) {
      return (
        this.cam.setFromMatrixPosition(e.matrixWorld),
        (this.maxDist = t),
        this.enabled
          ? (this.frustum = this.gate.set(e))
          : (sg.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            this.frustum.setFromProjectionMatrix(
              sg,
              e.coordinateSystem,
              e.reversedDepth,
            )),
        this
      );
    }
  },
  lg = 512,
  ug = 320,
  dg = [0.985, 0.978],
  fg = [0.006, 0.216, 0.47, 0.92],
  pg = [0.51, 0.216, 0.95, 0.92],
  mg = [0.012, 0.19],
  hg = 0.62;
