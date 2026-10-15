// tokyo/assets/actors-qKVitB-C 74 — math
// Lines 35129-35674 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var yy = 48,
  by = 1.9,
  xy = {
    ximending: 1.9,
    xinyi: 1.3,
    zhongshan: 1.1,
    shilin: 1.35,
    wanhua: 1.05,
    daan: 1,
    zhongzheng: 0.95,
    songshan: 0.95,
    riverside: 0.2,
  },
  Sy = [
    `taipei101`,
    `longshan`,
    `cks`,
    `redhouse`,
    `main-station`,
    `shilin-market`,
    `xinyi-mall`,
    `sogo`,
    `xingtian`,
    `ximen-walk`,
    `raohe-market`,
  ],
  Cy = class {
    plan;
    corners = [];
    edges = [];
    nodeCorner;
    grid = new Map();
    stamp;
    stampN = 1;
    constructor(e) {
      ((this.plan = e),
        (this.nodeCorner = new Int32Array(e.nodes.length * 4).fill(-1)),
        this.buildCorners(),
        this.buildSides(),
        this.buildCrossings(),
        (this.stamp = new Uint32Array(this.edges.length)));
      for (let e of this.edges) this.index(e);
    }
    offsets(e) {
      let t = 0,
        n = 0;
      for (let r of e.roads) {
        let e = r.halfWidth + r.sidewalk / 2;
        r.axis === `z` ? (t = Math.max(t, e)) : (n = Math.max(n, e));
      }
      return { offX: t, offZ: n };
    }
    arms(e) {
      let t = 0.5,
        n = null,
        r = null,
        i = null,
        a = null;
      for (let o of e.roads)
        o.axis === `z`
          ? (o.from < e.z - t && (n = o), o.to > e.z + t && (r = o))
          : (o.from < e.x - t && (i = o), o.to > e.x + t && (a = o));
      return { N: n, S: r, W: i, E: a };
    }
    buildCorners() {
      for (let e of this.plan.nodes) {
        let { offX: t, offZ: n } = this.offsets(e),
          r = [
            [e.x + t, e.z - n],
            [e.x - t, e.z - n],
            [e.x - t, e.z + n],
            [e.x + t, e.z + n],
          ];
        for (let t = 0; t < 4; t++)
          ((this.nodeCorner[e.id * 4 + t] = this.corners.length),
            this.corners.push({
              x: r[t][0],
              z: r[t][1],
              node: e.id,
              edges: [],
            }));
      }
    }
    addEdge(e) {
      let t = e.bx - e.ax,
        n = e.bz - e.az,
        r = Math.hypot(t, n);
      if (r < 0.5) return -1;
      let i = (e.ax + e.bx) / 2,
        a = (e.az + e.bz) / 2,
        o = !1;
      for (let e of this.plan.landmarks)
        (e.kind === `park` || e.id === `cks`) &&
          Math.abs(i - e.x) < e.w / 2 + 14 &&
          Math.abs(a - e.z) < e.d / 2 + 14 &&
          (o = !0);
      let s = {
        ...e,
        id: this.edges.length,
        len: r,
        dx: t / r,
        dz: n / r,
        park: o,
      };
      return (
        this.edges.push(s),
        this.corners[e.a].edges.push(s.id),
        this.corners[e.b].edges.push(s.id),
        s.id
      );
    }
    band(e) {
      let t = e.sidewalk;
      if (e.pedestrian) return [-(t / 2 + e.halfWidth) + 0.6, t / 2 - 0.55];
      let n = t >= 5 ? 1.35 : 0.85;
      return [-t / 2 + n, t / 2 - 0.55];
    }
    sideWeight(e, t, n, r, i, a, o) {
      let s = this.plan,
        c = (t + r) / 2,
        l = (n + i) / 2,
        u = s.districtAt(c, l),
        d = e.pedestrian
          ? 3.2
          : e.kind === `boulevard`
            ? 1.3
            : e.kind === `arterial`
              ? 1.1
              : 0.8;
      d *= xy[u.id] ?? 1;
      let f = r - t,
        p = i - n,
        m = Math.hypot(f, p) || 1,
        h = 0;
      for (let r of s.pois) {
        let i = r.x - t,
          s = r.z - n,
          c = (i * f + s * p) / m;
        if (c < 0 || c > m) continue;
        let l = i * a + s * o;
        l > 0 && l < e.sidewalk + 1 && h++;
      }
      d += Math.min(1.2, h * 0.25);
      for (let e of s.mrtStations)
        Dy(e.ex, e.ez, t, n, r, i) < 45 && (d += 0.8);
      for (let e of Sy) {
        let a = s.landmark(e);
        a &&
          Dy(a.x, a.z, t, n, r, i) < Math.max(a.w, a.d) / 2 + 90 &&
          (d += 0.5);
      }
      return d;
    }
    buildSides() {
      let e = this.plan;
      for (let t of e.roads) {
        let n = e.nodes
            .filter((e) => e.roads.includes(t))
            .sort((e, n) => (t.axis === `x` ? e.x - n.x : e.z - n.z)),
          [r, i] = this.band(t),
          a = t.pedestrian ? 0.02 : kt;
        for (let o = 0; o + 1 < n.length; o++) {
          let s = n[o],
            c = n[o + 1],
            l =
              t.axis === `x`
                ? [
                    [
                      this.nodeCorner[s.id * 4 + 0],
                      this.nodeCorner[c.id * 4 + 1],
                      0,
                      -1,
                    ],
                    [
                      this.nodeCorner[s.id * 4 + 3],
                      this.nodeCorner[c.id * 4 + 2],
                      0,
                      1,
                    ],
                  ]
                : [
                    [
                      this.nodeCorner[s.id * 4 + 2],
                      this.nodeCorner[c.id * 4 + 1],
                      -1,
                      0,
                    ],
                    [
                      this.nodeCorner[s.id * 4 + 3],
                      this.nodeCorner[c.id * 4 + 0],
                      1,
                      0,
                    ],
                  ];
          for (let [n, o, u, d] of l) {
            let l = this.corners[n],
              f = this.corners[o];
            this.addEdge({
              cross: !1,
              a: n,
              b: o,
              ax: l.x,
              az: l.z,
              bx: f.x,
              bz: f.z,
              px: u,
              pz: d,
              latMin: r,
              latMax: i,
              node: -1,
              axis: t.axis,
              signal: !1,
              pedestrian: !!t.pedestrian,
              weight: this.sideWeight(t, l.x, l.z, f.x, f.z, u, d),
              district: e.districtAt((l.x + f.x) / 2, (l.z + f.z) / 2).id,
              y: a,
              road: t,
              deadEnd: s.kind === `end` || c.kind === `end`,
            });
          }
        }
      }
    }
    buildCrossings() {
      let e = this.plan;
      for (let t of e.nodes) {
        let { N: n, S: r, W: i, E: a } = this.arms(t),
          o = t.kind === `end`,
          s = (e) => this.nodeCorner[t.id * 4 + e],
          c = t.roads.find((e) => e.axis === `x`) ?? null,
          l = t.roads.find((e) => e.axis === `z`) ?? null,
          u = (n, r, i, a, s) => {
            let c = n.halfWidth + 0.35,
              l = !!n.pedestrian,
              u = a ? t.x - c : s,
              d = a ? s : t.z - c,
              f = a ? t.x + c : s,
              p = a ? s : t.z + c;
            this.addEdge({
              cross: !0,
              a: r,
              b: i,
              ax: u,
              az: d,
              bx: f,
              bz: p,
              px: +!a,
              pz: +!!a,
              latMin: l ? -1.6 : -1.1,
              latMax: l ? 1.6 : 1.1,
              node: t.id,
              axis: n.axis,
              signal: t.signal && !l,
              pedestrian: l,
              weight: 0,
              district: e.districtAt(t.x, t.z).id,
              y: l ? 0.02 : 0,
              road: n,
              deadEnd: o,
            });
          },
          d = (n, r, i, a, o) => {
            let s = this.corners[r],
              c = this.corners[i],
              [l, u] = this.band(n);
            this.addEdge({
              cross: !1,
              a: r,
              b: i,
              ax: s.x,
              az: s.z,
              bx: c.x,
              bz: c.z,
              px: a,
              pz: o,
              latMin: l,
              latMax: u,
              node: -1,
              axis: n.axis,
              signal: !1,
              pedestrian: !!n.pedestrian,
              weight: 0.6,
              district: e.districtAt(t.x, t.z).id,
              y: n.pedestrian ? 0.02 : kt,
              road: n,
              deadEnd: !1,
            });
          };
        (n
          ? u(n, s(1), s(0), !0, t.z - t.halfZ - by)
          : !o && c && d(c, s(1), s(0), 0, -1),
          r
            ? u(r, s(2), s(3), !0, t.z + t.halfZ + by)
            : !o && c && d(c, s(2), s(3), 0, 1),
          i
            ? u(i, s(1), s(2), !1, t.x - t.halfX - by)
            : !o && l && d(l, s(1), s(2), -1, 0),
          a
            ? u(a, s(0), s(3), !1, t.x + t.halfX + by)
            : !o && l && d(l, s(0), s(3), 1, 0));
      }
    }
    index(e) {
      let t = Math.floor((Math.min(e.ax, e.bx) - 4) / yy),
        n = Math.floor((Math.max(e.ax, e.bx) + 4) / yy),
        r = Math.floor((Math.min(e.az, e.bz) - 4) / yy),
        i = Math.floor((Math.max(e.az, e.bz) + 4) / yy);
      for (let a = r; a <= i; a++)
        for (let r = t; r <= n; r++) {
          let t = Ey(r, a),
            n = this.grid.get(t);
          (n || this.grid.set(t, (n = [])), n.push(e.id));
        }
    }
    edgesNear(e, t, n, r) {
      let i = ++this.stampN,
        a = 0,
        o = Math.floor((e - n) / yy),
        s = Math.floor((e + n) / yy),
        c = Math.floor((t - n) / yy),
        l = Math.floor((t + n) / yy);
      for (let e = c; e <= l; e++)
        for (let t = o; t <= s; t++) {
          let n = this.grid.get(Ey(t, e));
          if (n)
            for (let e = 0; e < n.length; e++) {
              let t = n[e];
              this.stamp[t] !== i && ((this.stamp[t] = i), (r[a++] = t));
            }
        }
      return ((r.length = a), a);
    }
    tmp = [];
    nearestEdge(e, t, n, r, i = !1) {
      let a = this.edgesNear(e, t, n, this.tmp),
        o = n,
        s = !1;
      for (let n = 0; n < a; n++) {
        let a = this.edges[this.tmp[n]];
        if (a.cross && !i) continue;
        let c = e - a.ax,
          l = t - a.az,
          u = c * a.dx + l * a.dz;
        u = u < 0 ? 0 : u > a.len ? a.len : u;
        let d = a.ax + a.dx * u,
          f = a.az + a.dz * u,
          p = (e - d) * a.px + (t - f) * a.pz;
        p = p < a.latMin ? a.latMin : p > a.latMax ? a.latMax : p;
        let m = d + a.px * p,
          h = f + a.pz * p,
          g = Math.hypot(e - m, t - h);
        g < o &&
          ((o = g),
          (s = !0),
          (r.edge = a.id),
          (r.s = u),
          (r.lat = p),
          (r.dist = g));
      }
      return s;
    }
    cornerOf(e, t) {
      return this.nodeCorner[e * 4 + t];
    }
    addPaths(e) {
      for (let t of e) {
        let e = t.points;
        if (e.length < 2) continue;
        let n = Math.max(0.6, (t.width ?? 3) / 2 - 0.4),
          r = this.plan.roads[0],
          i = -1;
        for (let a = 0; a < e.length; a++) {
          let o = this.corners.length;
          if (
            (this.corners.push({ x: e[a].x, z: e[a].z, node: -1, edges: [] }),
            i >= 0)
          ) {
            let e = this.corners[i],
              a = this.corners[o],
              s = Math.hypot(a.x - e.x, a.z - e.z) || 1,
              c = -(a.z - e.z) / s,
              l = (a.x - e.x) / s,
              u = this.addEdge({
                cross: !1,
                a: i,
                b: o,
                ax: e.x,
                az: e.z,
                bx: a.x,
                bz: a.z,
                px: c,
                pz: l,
                latMin: -n,
                latMax: n,
                node: -1,
                axis: `z`,
                signal: !1,
                pedestrian: !1,
                weight: t.kind === `bike` ? 1.4 : 1.1,
                district: this.plan.districtAt(e.x, e.z).id,
                y:
                  t.y ??
                  this.plan.groundHeight((e.x + a.x) / 2, (e.z + a.z) / 2),
                road: r,
                deadEnd: !1,
              });
            if (u >= 0) {
              let e = this.edges[u];
              ((e.park = !0), (e.path = t.kind), this.index(e));
            }
          }
          i = o;
        }
      }
      this.stamp.length < this.edges.length &&
        (this.stamp = new Uint32Array(this.edges.length));
    }
    arcades = new Map();
    addArcades(e) {
      let t = [];
      for (let n of e) {
        let e = (n.x0 + n.x1) / 2,
          r = (n.z0 + n.z1) / 2,
          i = this.edgesNear(
            e,
            r,
            Math.max(n.x1 - n.x0, n.z1 - n.z0) / 2 + 10,
            t,
          );
        for (let e = 0; e < i; e++) {
          let r = this.edges[t[e]];
          if (r.cross) continue;
          let i = (n.x0 - r.ax) * r.px + (n.z0 - r.az) * r.pz,
            a = (n.x1 - r.ax) * r.px + (n.z1 - r.az) * r.pz,
            o = Math.min(i, a),
            s = Math.max(i, a),
            c = r.latMax + 0.55;
          if (o < c - 0.9 || o > c + 0.9 || s - o < 1.8) continue;
          let l = (n.x0 - r.ax) * r.dx + (n.z0 - r.az) * r.dz,
            u = (n.x1 - r.ax) * r.dx + (n.z1 - r.az) * r.dz,
            d = Math.max(0, Math.min(l, u)),
            f = Math.min(r.len, Math.max(l, u));
          if (f - d < 3) continue;
          let p = this.arcades.get(r.id);
          (p || this.arcades.set(r.id, (p = [])),
            p.push(d, f, o + (s - o) * 0.5));
        }
      }
    }
    arcadeLat(e, t) {
      let n = this.arcades.get(e.id);
      if (!n) return NaN;
      for (let e = 0; e < n.length; e += 3)
        if (t > n[e] + 0.8 && t < n[e + 1] - 0.8) return n[e + 2];
      return NaN;
    }
    clear = new Map();
    qcols = [];
    ivA = new Float32Array(16);
    ivB = new Float32Array(16);
    clearance(e, t) {
      if (e.cross) return null;
      let n = this.clear.get(e.id);
      if (n) return n.length ? n : null;
      let r = Math.max(1, Math.ceil(e.len / wy)),
        i = new Float32Array(r * 2),
        a = !1,
        o = 0.3,
        s = e.latMin,
        c = e.latMax;
      for (let n = 0; n < r; n++) {
        let r = n * wy,
          l = Math.min(e.len, r + wy),
          u = e.ax + e.dx * r,
          d = e.az + e.dz * r,
          f = e.ax + e.dx * l,
          p = e.az + e.dz * l,
          m = u + e.px * s,
          h = u + e.px * c,
          g = f + e.px * s,
          _ = f + e.px * c,
          v = d + e.pz * s,
          y = d + e.pz * c,
          b = p + e.pz * s,
          x = p + e.pz * c,
          S = t.query(
            Math.min(m, h, g, _),
            Math.min(v, y, b, x),
            Math.max(m, h, g, _),
            Math.max(v, y, b, x),
            this.qcols,
          ),
          C = 0;
        for (let t = 0; t < S && C < 16; t++) {
          let n = this.qcols[t];
          if (
            n.maxY < e.y + 0.45 ||
            n.minY > e.y + 1.6 ||
            (n.maxX - n.minX < 0.9 && n.maxZ - n.minZ < 0.9)
          )
            continue;
          let r = (n.minX - e.ax) * e.px + (n.minZ - e.az) * e.pz,
            i = (n.maxX - e.ax) * e.px + (n.maxZ - e.az) * e.pz,
            a = Math.min(r, i) - o,
            l = Math.max(r, i) + o;
          l <= s || a >= c || ((this.ivA[C] = a), (this.ivB[C] = l), C++);
        }
        if (C === 0) {
          ((i[n * 2] = s), (i[n * 2 + 1] = c));
          continue;
        }
        a = !0;
        for (let e = 1; e < C; e++) {
          let t = this.ivA[e],
            n = this.ivB[e],
            r = e - 1;
          for (; r >= 0 && this.ivA[r] > t;)
            ((this.ivA[r + 1] = this.ivA[r]),
              (this.ivB[r + 1] = this.ivB[r]),
              r--);
          ((this.ivA[r + 1] = t), (this.ivB[r + 1] = n));
        }
        let w = s,
          T = NaN,
          E = NaN,
          D = 0.12;
        for (let e = 0; e <= C; e++) {
          let t = e < C ? Math.min(c, this.ivA[e]) : c;
          (t - w > D && ((D = t - w), (T = w), (E = t)),
            e < C && (w = Math.max(w, this.ivB[e])));
        }
        ((i[n * 2] = T), (i[n * 2 + 1] = E));
      }
      return (this.clear.set(e.id, a ? i : Ty), a ? i : null);
    }
    fitLat(e, t, n, r) {
      let i = this.clearance(e, t);
      if (!i) return r;
      let a = Math.min(i.length / 2 - 1, Math.max(0, Math.floor(n / wy))),
        o = i[a * 2],
        s = i[a * 2 + 1];
      return Number.isNaN(o) ? NaN : r < o ? o : r > s ? s : r;
    }
  },
  wy = 2,
  Ty = new Float32Array();
