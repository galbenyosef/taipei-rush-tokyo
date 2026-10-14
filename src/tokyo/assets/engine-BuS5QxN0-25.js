// tokyo/assets/engine-BuS5QxN0 25 — math
// Lines 8788-10289 of readable/tokyo/assets/engine-BuS5QxN0.pretty.js (statement-aligned).
var lc = {
    regionId: `taipei`,
    mapVersion: `taipei-v1`,
    seed: $s,
    drivingSide: `right`,
    bounds: js,
    laneWidth: ks,
    sidewalkHeight: As,
    majorRoads: zs,
    minorStreets: Bs,
    districts: Ps,
    districtExtras: Fs,
    landmarks: Vs,
    hills: Hs,
    spawns: Us,
    stations: Ws,
    namedPlaces: Qs,
    water: { westX: Ms, northZ: Ns, level: -0.8 },
    labels: oc,
    pois: sc,
  },
  Z = 16,
  uc = 64,
  dc = [],
  fc = 64,
  pc = class {
    roads = [];
    nodes = [];
    links = [];
    blocks = [];
    dataset;
    landmarks;
    districts;
    hills;
    bounds;
    side;
    laneWidth;
    sidewalkHeight;
    mrtStations = [];
    pois = [];
    allPois = [];
    claimedPois = [];
    spawns;
    labels;
    riverX;
    riverNorthZ;
    waterFn;
    levelBoxes;
    terrainFn;
    roadGrid = new Map();
    nodeGrid = new Map();
    streetNames;
    corners = [];
    roadLinks = new Map();
    linkCells = new Map();
    linkExt = { x0: 0, x1: -1, z0: 0, z1: -1 };
    nodeCells = new Map();
    nodeExt = { x0: 0, x1: -1, z0: 0, z1: -1 };
    astar = null;
    anyFlush = !1;
    constructor(e = {}) {
      let t = (this.dataset = e.dataset ?? lc);
      ((this.landmarks = t.landmarks),
        (this.districts = t.districts),
        (this.hills = t.hills),
        (this.bounds = t.bounds),
        (this.side = t.drivingSide === `left` ? -1 : 1),
        (this.laneWidth = t.laneWidth),
        (this.sidewalkHeight = t.sidewalkHeight),
        (this.waterLevel = t.water.level),
        (this.riverX = t.water.westX),
        (this.riverNorthZ = t.water.northZ),
        (this.waterFn = t.water.at ?? null),
        (this.levelBoxes = Float64Array.from(
          (t.water.levels ?? []).flatMap((e) => [
            e.minX,
            e.maxX,
            e.minZ,
            e.maxZ,
            e.level,
          ]),
        )),
        (this.terrainFn = t.terrainAt ?? null),
        (this.labels = t.labels),
        (this.streetNames = [...(e.streetNames ?? []), ...t.minorStreets]),
        this.buildRoads(),
        this.buildNodesAndLinks(),
        this.buildIndices(),
        this.buildCorners(),
        this.buildBlocks());
      let n = (e) => {
        if (e.snap === !1) return { x: e.x, z: e.z, heading: e.heading };
        let t = this.snapToSidewalk(e.x, e.z);
        return { x: t.x, z: t.z, heading: e.heading };
      };
      this.spawns = {
        start: n(t.spawns.start),
        hospital: n(t.spawns.hospital),
        police: n(t.spawns.police),
      };
      for (let e of t.stations) {
        let t = this.snapToSidewalk(e.x, e.z);
        this.mrtStations.push({ ...e, ex: t.x, ez: t.z, eh: t.facing });
      }
      let r = t.pois(this.blocks, t.seed),
        i = this.carveBlocks();
      for (let e of r)
        (!i.has(e.blockId) || this.onFrontage(e)) && this.pois.push(e);
      (this.allPois.push(...this.pois),
        this.allPois.forEach((e, t) => this.poiOrder.set(e, t)),
        e.poiClaims && this.findClaimedPois(e.poiClaims));
    }
    poiClaim = new Map();
    poiOrder = new Map();
    findClaimedPois(e) {
      for (let t of this.pois) {
        if (e.honor.has(t.id)) continue;
        let n = t.x - Math.sin(t.facing),
          r = t.z + Math.cos(t.facing),
          i = e.claims.find(
            (e) => n >= e.minX && n <= e.maxX && r >= e.minZ && r <= e.maxZ,
          );
        i && this.poiClaim.set(t, i.label);
      }
    }
    claimPois(e) {
      let t = this.poiClaim.size;
      return (
        e.length && this.findClaimedPois({ claims: [...e], honor: new Set() }),
        this.poiClaim.size - t
      );
    }
    settleClaimedPois(e = () => !1) {
      if (!this.poiClaim.size) return 0;
      let t = 0,
        n = [];
      for (let r of this.pois) {
        let i = this.poiClaim.get(r);
        i === void 0
          ? n.push(r)
          : vc(e, r)
            ? (this.poiClaim.delete(r), n.push(r))
            : ((r.claimed = i), this.claimedPois.push(r), t++);
      }
      if (t) {
        this.pois.length = 0;
        for (let e of n) this.pois.push(e);
      }
      return t;
    }
    honorPoi(e) {
      let t = this.claimedPois.findIndex((t) => t.id === e);
      if (t < 0) return !1;
      let n = this.claimedPois[t];
      (this.claimedPois.splice(t, 1),
        this.poiClaim.delete(n),
        (n.claimed = void 0));
      let r = this.poiOrder.get(n) ?? 1 / 0,
        i = this.pois.findIndex((e) => (this.poiOrder.get(e) ?? 0) > r);
      return (i < 0 && (i = this.pois.length), this.pois.splice(i, 0, n), !0);
    }
    isClaimCandidate(e) {
      return this.poiClaim.has(e);
    }
    nearestPois(e, t, n, r = 1) {
      return this.pois
        .filter((t) => t.kind === e)
        .sort(
          (e, r) =>
            (e.x - t) ** 2 + (e.z - n) ** 2 - ((r.x - t) ** 2 + (r.z - n) ** 2),
        )
        .slice(0, r);
    }
    buildRoads() {
      let e = this.dataset.majorRoads.map((e) => this.makeRoad(e, !0)),
        t = e.filter((e) => e.axis === `z`).sort((e, t) => e.at - t.at),
        n = e.filter((e) => e.axis === `x`).sort((e, t) => e.at - t.at);
      this.roads.push(...e);
      let r = this.landmarks.filter((e) => !e.zone),
        i = this.landmarks.filter((e) => e.zone === `pedestrian`),
        a = yc(t.map((e) => e.at)),
        o = (e, t, n) =>
          e.find((e) => e.at === t && n >= e.from - 1 && n <= e.to + 1) ?? null,
        s = [],
        c = (e, t) => {
          let n = bc(this.streetNames, e.axis, e.at, e.from, e.to);
          n &&
            ((e.name = { zh: n.zh, en: n.en }),
            n.sections && (e.sections = n.sections));
          let r = this.makeRoad(e, !1);
          (this.roads.push(r), n || s.push({ road: r, parent: t }));
        };
      for (let e = 0; e + 1 < a.length; e++) {
        let s = a[e],
          l = a[e + 1],
          u = (s + l) / 2,
          d = n.filter((e) => e.from <= u && e.to >= u);
        for (let e = 0; e + 1 < d.length; e++) {
          let n = d[e].at,
            a = d[e + 1].at,
            f = (n + a) / 2,
            p = i.some((e) => e.kind === `plaza` && xc(e, u, f, 60)) ? 3 : 2;
          if (l - s > 110)
            for (let t = 1; t < p; t++) {
              let o = Math.round(s + ((l - s) * t) / p),
                u = { minX: o - 8, maxX: o + 8, minZ: n, maxZ: a };
              if (r.some((e) => Sc(u, e, 4))) continue;
              let f = i.some((e) => Cc(`z`, o, n, a, e) >= 0.5);
              c(
                {
                  id: `ns-${o}-${n}`,
                  name: { zh: ``, en: `` },
                  axis: `z`,
                  at: o,
                  from: n,
                  to: a,
                  kind: `street`,
                  lanesPerDir: 1,
                  median: 0,
                  sidewalk: 3,
                  speedKmh: 40,
                  pedestrian: f,
                },
                d[e],
              );
            }
          if (a - n > 110)
            for (let e = 1; e < p; e++) {
              let u = Math.round(n + ((a - n) * e) / p),
                d = { minX: s, maxX: l, minZ: u - 8, maxZ: u + 8 };
              if (r.some((e) => Sc(d, e, 4))) continue;
              let f = i.some((e) => Cc(`x`, u, s, l, e) >= 0.5);
              c(
                {
                  id: `ew-${u}-${s}`,
                  name: { zh: ``, en: `` },
                  axis: `x`,
                  at: u,
                  from: s,
                  to: l,
                  kind: `street`,
                  lanesPerDir: 1,
                  median: 0,
                  sidewalk: 3,
                  speedKmh: 40,
                  pedestrian: f,
                },
                o(t, s, u),
              );
            }
        }
      }
      let l = this.labels;
      for (let { road: e, parent: t } of s) {
        if (!t) {
          e.name = l.unnamedLane();
          continue;
        }
        let n = t.axis === `z` ? t.at : e.at,
          r = t.axis === `z` ? e.at : t.at,
          i = this.streetLabel(t, n, r),
          a = l.houseNumber(t, t.axis === `z` ? r : n, 1);
        ((e.lane = { parent: t, no: a }), (e.name = l.laneName(i, a)));
      }
      this.roads.forEach((e, t) => (e.index = t));
      for (let e of this.roads) {
        let [t, n, r, i] = this.roadRect(e, e.halfTotal + 1);
        for (let a = Math.floor(r / Z); a <= Math.floor(i / Z); a++)
          for (let r = Math.floor(t / Z); r <= Math.floor(n / Z); r++) {
            let t = Q(r, a),
              n = this.roadGrid.get(t);
            (n || this.roadGrid.set(t, (n = [])), n.push(e));
          }
      }
    }
    makeRoad(e, t) {
      let n = e.lanesPerDir * this.laneWidth + e.median / 2;
      return {
        ...e,
        index: 0,
        halfWidth: n,
        halfTotal: n + e.sidewalk,
        major: t,
      };
    }
    roadRect(e, t) {
      return e.axis === `x`
        ? [e.from, e.to, e.at - t, e.at + t]
        : [e.at - t, e.at + t, e.from, e.to];
    }
    buildNodesAndLinks() {
      let e = (e, t) => `${Math.round(e * 10)},${Math.round(t * 10)}`,
        t = new Map(),
        n = (n, r) => {
          let i = e(n, r),
            a = t.get(i);
          return (
            a ||
              ((a = {
                id: this.nodes.length,
                x: n,
                z: r,
                roads: [],
                halfX: 0,
                halfZ: 0,
                signal: !1,
                out: [],
                in: [],
                kind: `cross`,
              }),
              t.set(i, a),
              this.nodes.push(a)),
            a
          );
        },
        r = this.roads.filter((e) => e.axis === `x`),
        i = this.roads.filter((e) => e.axis === `z`),
        a = 0.5;
      for (let e of r)
        for (let t of i) {
          if (
            t.at < e.from - a ||
            t.at > e.to + a ||
            e.at < t.from - a ||
            e.at > t.to + a
          )
            continue;
          let r = n(t.at, e.at);
          (r.roads.includes(e) || r.roads.push(e),
            r.roads.includes(t) || r.roads.push(t));
        }
      for (let e of this.roads)
        for (let t of [e.from, e.to]) {
          let [r, i] = e.axis === `x` ? [t, e.at] : [e.at, t],
            a = n(r, i);
          a.roads.includes(e) || a.roads.push(e);
        }
      for (let e of this.nodes) {
        let t = 0,
          n = 0;
        for (let r of e.roads)
          r.axis === `z`
            ? (t = Math.max(t, r.halfWidth))
            : (n = Math.max(n, r.halfWidth));
        ((e.halfX = t), (e.halfZ = n));
        let r = 0;
        for (let t of e.roads) {
          let n = t.axis === `x` ? e.x : e.z;
          (n > t.from + a && r++, n < t.to - a && r++);
        }
        ((e.kind =
          r <= 1 ? `end` : r === 2 ? `corner` : r === 3 ? `tee` : `cross`),
          (e.signal =
            r >= 3 &&
            e.roads.some((e) => e.major) &&
            !e.roads.every((e) => e.pedestrian)));
      }
      for (let e of this.roads) {
        let t = this.nodes
          .filter((t) => t.roads.includes(e))
          .sort((t, n) => (e.axis === `x` ? t.x - n.x : t.z - n.z));
        for (let n = 0; n + 1 < t.length; n++) {
          let r = t[n],
            i = t[n + 1];
          this.addLinkPair(e, r, i);
        }
      }
      for (let e of this.nodes) {
        let t = Q(Math.floor(e.x / Z), Math.floor(e.z / Z)),
          n = this.nodeGrid.get(t);
        (n || this.nodeGrid.set(t, (n = [])), n.push(e));
      }
    }
    addLinkPair(e, t, n) {
      let r = (t, n) => {
          let r = n.x - t.x,
            i = n.z - t.z,
            a = Math.hypot(r, i),
            o = r / a,
            s = i / a,
            c =
              (e.axis === `x` ? t.halfX : t.halfZ) +
              (t.kind === `end` ? 0 : 3.5),
            l =
              (e.axis === `x` ? n.halfX : n.halfZ) +
              (n.kind === `end` ? 0 : 3.5),
            u = t.x + o * c,
            d = t.z + s * c,
            f = n.x - o * l,
            p = n.z - s * l,
            m = {
              id: this.links.length,
              road: e,
              from: t.id,
              to: n.id,
              sx: u,
              sz: d,
              ex: f,
              ez: p,
              dx: o,
              dz: s,
              rx: -s,
              rz: o,
              heading: Math.atan2(o, -s),
              length: Math.max(0.1, a - c - l),
              lanes: e.lanesPerDir,
              speed: e.speedKmh / 3.6,
              reverse: -1,
              pedestrian: !!e.pedestrian,
            };
          return (this.links.push(m), t.out.push(m.id), n.in.push(m.id), m);
        },
        i = r(t, n),
        a = r(n, t);
      return ((i.reverse = a.id), (a.reverse = i.id), i);
    }
    buildIndices() {
      for (let e of this.links) {
        let t = this.roadLinks.get(e.road);
        (t || this.roadLinks.set(e.road, (t = [])), t.push(e));
      }
      let e = this.linkExt;
      for (let t of this.links) {
        let n = this.laneOffset(t, 0),
          r = this.laneOffset(t, Math.max(0, t.lanes - 1)),
          i = t.sx + t.dx * t.length,
          a = t.sz + t.dz * t.length,
          o = 1 / 0,
          s = -1 / 0,
          c = 1 / 0,
          l = -1 / 0;
        for (let [e, u] of [
          [t.sx, t.sz],
          [i, a],
        ])
          for (let i of [n, r, -n, -r]) {
            let n = e + t.rx * i,
              r = u + t.rz * i;
            (n < o && (o = n),
              n > s && (s = n),
              r < c && (c = r),
              r > l && (l = r));
          }
        let u = Math.floor(o / uc),
          d = Math.floor(s / uc),
          f = Math.floor(c / uc),
          p = Math.floor(l / uc);
        for (let e = f; e <= p; e++)
          for (let n = u; n <= d; n++) {
            let r = Q(n, e),
              i = this.linkCells.get(r);
            (i || this.linkCells.set(r, (i = [])), i.push(t));
          }
        (wc(e, u, f), wc(e, d, p));
      }
      for (let e of this.nodes) {
        let t = Math.floor(e.x / fc),
          n = Math.floor(e.z / fc),
          r = Q(t, n),
          i = this.nodeCells.get(r);
        (i || this.nodeCells.set(r, (i = [])),
          i.push(e),
          wc(this.nodeExt, t, n));
      }
    }
    lanePoint(e, t, n, r) {
      let i = es(e.road.median / 2, t, this.laneWidth);
      return (
        (r.x = e.sx + e.dx * n + is(e, i, this.side)),
        (r.z = e.sz + e.dz * n + as(e, i, this.side)),
        r
      );
    }
    laneOffset(e, t) {
      return es(e.road.median / 2, t, this.laneWidth);
    }
    buildCorners() {
      let e = 0.5,
        t = (e, t) => (!e || t.halfWidth > e.halfWidth ? t : e),
        n = (e, t) => {
          if (!e || !t || e.pedestrian || t.pedestrian) return 0;
          let n = Math.min(
            e.halfTotal - e.halfWidth,
            t.halfTotal - t.halfWidth,
          );
          return Math.max(0, Math.min(e.major && t.major ? 2 : 1.4, n - 1));
        };
      for (let r of this.nodes) {
        let i = null,
          a = null,
          o = null,
          s = null;
        for (let n of r.roads)
          n.axis === `x`
            ? (r.x > n.from + e && (s = t(s, n)),
              r.x < n.to - e && (o = t(o, n)))
            : (r.z > n.from + e && (i = t(i, n)),
              r.z < n.to - e && (a = t(a, n)));
        let c = new Float32Array(4),
          l = new Float32Array(4),
          u = new Float32Array(4),
          d = [
            [s, i],
            [o, i],
            [s, a],
            [o, a],
          ];
        for (let e = 0; e < 4; e++) {
          let [t, r] = d[e];
          ((c[e] = n(t, r)),
            (l[e] = r ? r.halfWidth : 0),
            (u[e] = t ? t.halfWidth : 0));
        }
        this.corners[r.id] = { r: c, hx: l, hz: u };
      }
    }
    inCurbCorner(e, t) {
      let n = Math.floor(e / Z),
        r = Math.floor(t / Z);
      for (let i = -1; i <= 1; i++)
        for (let a = -1; a <= 1; a++) {
          let o = this.nodeGrid.get(Q(n + a, r + i));
          if (o)
            for (let n = 0; n < o.length; n++) {
              let r = o[n],
                i = this.corners[r.id];
              if (!i) continue;
              let a = e >= r.x ? 1 : -1,
                s = t >= r.z ? 1 : -1,
                c = (s > 0 ? 2 : 0) + +(a > 0),
                l = i.r[c];
              if (l <= 0) continue;
              let u = (e - r.x) * a - i.hx[c],
                d = (t - r.z) * s - i.hz[c];
              if (u < 0 || d < 0 || u > l || d > l) continue;
              let f = l - u,
                p = l - d;
              if (f * f + p * p > l * l) return !0;
            }
        }
      return !1;
    }
    buildBlocks() {
      let e = this.bounds,
        t = this.roads
          .filter((e) => e.major && e.axis === `z`)
          .sort((e, t) => e.at - t.at),
        n = this.roads
          .filter((e) => e.major && e.axis === `x`)
          .sort((e, t) => e.at - t.at),
        r = [e.minX, ...yc(t.map((e) => e.at)), e.maxX],
        i = (e, n) =>
          e === 0 || e === r.length - 1
            ? r[e]
            : (t.find(
                (t) => t.at === r[e] && n >= t.from - 1 && n <= t.to + 1,
              ) ?? r[e]),
        a = (e) => (typeof e == `number` ? e : e.at),
        o = (e) => (typeof e == `number` ? 0 : e.halfTotal);
      for (let t = 0; t + 1 < r.length; t++) {
        let s = (r[t] + r[t + 1]) / 2,
          c = [e.minZ, ...n.filter((e) => e.from <= s && e.to >= s), e.maxZ];
        for (let e = 0; e + 1 < c.length; e++) {
          let n = c[e],
            r = c[e + 1],
            l = (a(n) + a(r)) / 2,
            u = i(t, l),
            d = i(t + 1, l),
            f = this.roads
              .filter(
                (e) =>
                  !e.major &&
                  e.axis === `z` &&
                  e.at > a(u) &&
                  e.at < a(d) &&
                  e.from <= l &&
                  e.to >= l,
              )
              .sort((e, t) => e.at - t.at),
            p = this.roads
              .filter(
                (e) =>
                  !e.major &&
                  e.axis === `x` &&
                  e.at > a(n) &&
                  e.at < a(r) &&
                  e.from <= s &&
                  e.to >= s,
              )
              .sort((e, t) => e.at - t.at),
            m = [u, ...f, d],
            h = [n, ...p, r];
          for (let e = 0; e + 1 < m.length; e++)
            for (let t = 0; t + 1 < h.length; t++) {
              let n = m[e],
                r = m[e + 1],
                i = h[t],
                s = h[t + 1],
                c = a(n) + o(n),
                l = a(r) - o(r),
                u = a(i) + o(i),
                d = a(s) - o(s);
              if (l - c < 20 || d - u < 20) continue;
              let f = (c + l) / 2,
                p = (u + d) / 2,
                g = {
                  id: this.blocks.length,
                  minX: c,
                  maxX: l,
                  minZ: u,
                  maxZ: d,
                  district: this.districtAt(f, p, !0),
                  reserved: this.landmarks.filter(
                    (e) =>
                      !e.zone &&
                      Sc({ minX: c, maxX: l, minZ: u, maxZ: d }, e, 0),
                  ),
                  zones: this.landmarks.filter(
                    (e) =>
                      e.zone &&
                      Sc({ minX: c, maxX: l, minZ: u, maxZ: d }, e, 0),
                  ),
                  north: typeof i == `number` ? null : i,
                  south: typeof s == `number` ? null : s,
                  west: typeof n == `number` ? null : n,
                  east: typeof r == `number` ? null : r,
                  edge:
                    typeof i == `number` ||
                    typeof s == `number` ||
                    typeof n == `number` ||
                    typeof r == `number`,
                };
              this.blocks.push(g);
            }
        }
      }
    }
    carveBlocks() {
      let e = 0.05,
        t = new Set(),
        n = [],
        r = new Set(),
        i = this.blocks.length;
      for (let a = 0; a < i; a++) {
        let i = [this.blocks[a]];
        for (let t of this.roads) {
          let [n, r, a, o] = this.roadRect(t, t.halfTotal),
            s = [];
          for (let c of i)
            c.maxX > n + e && c.minX < r - e && c.maxZ > a + e && c.minZ < o - e
              ? s.push(...gc(c, n, r, a, o, t, 20))
              : s.push(c);
          i = s;
        }
        if (i.length === 1 && i[0] === this.blocks[a]) continue;
        let o = this.blocks[a];
        (t.add(o.id),
          i.sort(
            (e, t) =>
              (t.maxX - t.minX) * (t.maxZ - t.minZ) -
              (e.maxX - e.minX) * (e.maxZ - e.minZ),
          ));
        let s = i.shift();
        (s
          ? Object.assign(o, {
              minX: s.minX,
              maxX: s.maxX,
              minZ: s.minZ,
              maxZ: s.maxZ,
              north: s.north,
              south: s.south,
              east: s.east,
              west: s.west,
            })
          : r.add(o),
          i.forEach((e, t) => (e.id = hc + o.id * 8 + t)),
          n.push(...i));
      }
      if (!t.size) return t;
      if (r.size) {
        let e = this.blocks.filter((e) => !r.has(e));
        ((this.blocks.length = 0), this.blocks.push(...e));
      }
      for (let e of n) this.blocks.push(e);
      for (let e of this.blocks) {
        if (!t.has(e.id) && e.id < hc) continue;
        let n = { minX: e.minX, maxX: e.maxX, minZ: e.minZ, maxZ: e.maxZ };
        ((e.reserved = this.landmarks.filter((e) => !e.zone && Sc(n, e, 0))),
          (e.zones = this.landmarks.filter((e) => e.zone && Sc(n, e, 0))),
          (e.edge = !e.north || !e.south || !e.west || !e.east));
      }
      return t;
    }
    onFrontage(e) {
      let t = this.blocks.find((t) => t.id === e.blockId);
      if (!t) return !1;
      let n = 0.01,
        r = e.width / 2,
        i = e.x - r >= t.minX - n && e.x + r <= t.maxX + n,
        a = e.z - r >= t.minZ - n && e.z + r <= t.maxZ + n;
      return (
        (!!t.north && Math.abs(e.z - t.minZ) < n && i) ||
        (!!t.south && Math.abs(e.z - t.maxZ) < n && i) ||
        (!!t.west && Math.abs(e.x - t.minX) < n && a) ||
        (!!t.east && Math.abs(e.x - t.maxX) < n && a)
      );
    }
    districtAt(e, t, n = !1) {
      let r = this.districts;
      for (let i of this.dataset.districtExtras)
        if (
          (!n || i.gen !== !1) &&
          e >= i.minX &&
          e < i.maxX &&
          t >= i.minZ &&
          t < i.maxZ
        ) {
          let e = r.find((e) => e.id === i.id);
          if (e) return e;
        }
      for (let n of r)
        if (e >= n.minX && e < n.maxX && t >= n.minZ && t < n.maxZ) return n;
      return r[r.length - 1];
    }
    placeAt(e, t) {
      let n = null,
        r = 1 / 0;
      for (let i of this.dataset.namedPlaces) {
        if (e < i.minX || e > i.maxX || t < i.minZ || t > i.maxZ) continue;
        let a = (i.maxX - i.minX) * (i.maxZ - i.minZ);
        a < r && ((r = a), (n = i));
      }
      return n;
    }
    locationLabel(e, t) {
      let n = this.placeAt(e, t);
      if (n) return n.name;
      let r = this.roadAt(e, t);
      return r ? this.streetLabel(r, e, t).full : this.districtAt(e, t).name;
    }
    inCity(e, t) {
      let n = this.bounds;
      return e >= n.minX && e <= n.maxX && t >= n.minZ && t <= n.maxZ;
    }
    roadsNear(e, t) {
      return this.roadGrid.get(Q(Math.floor(e / Z), Math.floor(t / Z))) ?? mc;
    }
    roadAt(e, t) {
      let n = null,
        r = 1 / 0;
      for (let i of this.roadsNear(e, t)) {
        let a = i.axis === `x` ? e : t;
        if (a < i.from - 2 || a > i.to + 2) continue;
        let o = Math.abs((i.axis === `x` ? t : e) - i.at);
        if (o > i.halfTotal + 1) continue;
        let s = o / Math.max(1, i.halfWidth) - (i.major ? 0.25 : 0);
        s < r && ((r = s), (n = i));
      }
      return n;
    }
    streetLabel(e, t, n) {
      return this.labels.streetLabel(e, t, n);
    }
    address(e, t, n) {
      let r = e ?? this.roadAt(t, n) ?? this.snapToSidewalk(t, n).road;
      if (!r) return this.labels.cityAddress();
      let i = r.axis === `x` ? t : n,
        a = (r.axis === `x` ? n - r.at : t - r.at) >= 0 ? 1 : -1,
        o = this.labels.houseNumber(r, i, a),
        s = this.streetLabel(r, t, n);
      return this.labels.address(s, o);
    }
    surfaceAt(e, t) {
      if (
        e < this.riverX ||
        t < this.riverNorthZ ||
        (this.waterFn !== null && this.waterFn(e, t))
      )
        return `water`;
      let n = null;
      for (let r of this.roadsNear(e, t)) {
        let i = r.axis === `x` ? e : t,
          a = Math.abs((r.axis === `x` ? t : e) - r.at);
        if (i < r.from - r.halfTotal || i > r.to + r.halfTotal) continue;
        let o = i >= r.from - 0.01 && i <= r.to + 0.01;
        if (a <= r.halfWidth && o) return r.pedestrian ? `plaza` : `road`;
        a <= r.halfTotal && o && (n = `sidewalk`);
      }
      if (n === `sidewalk` && this.inCurbCorner(e, t)) return `road`;
      if (n) return n;
      if (!this.inCity(e, t)) return `terrain`;
      for (let n of this.landmarks)
        if (
          n.kind === `park` &&
          Math.abs(e - n.x) <= n.w / 2 &&
          Math.abs(t - n.z) <= n.d / 2
        )
          return `park`;
      return `lot`;
    }
    nodeAt(e, t) {
      let n = Math.floor(e / Z),
        r = Math.floor(t / Z);
      for (let i = -1; i <= 1; i++)
        for (let a = -1; a <= 1; a++) {
          let o = this.nodeGrid.get(Q(n + a, r + i));
          if (o) {
            for (let n of o)
              if (
                Math.abs(e - n.x) <= n.halfX &&
                Math.abs(t - n.z) <= n.halfZ &&
                n.kind !== `end`
              )
                return n;
          }
        }
      return null;
    }
    hillHeight(e, t) {
      let n = this.bounds,
        r = Math.max(n.minX - e, 0, e - n.maxX),
        i = Math.max(n.minZ - t, 0, t - n.maxZ);
      if (r <= 0 && i <= 0) return 0;
      let a = Math.sqrt(r * r + i * i),
        o = 0,
        s = this.riverX,
        c = this.riverNorthZ,
        l = this.hills,
        u = t >= c && e >= s;
      for (let n = 0; n < l.length; n++) {
        let r = l[n];
        if (u && (r.z < c || r.x < s)) continue;
        let i = e - r.x,
          a = t - r.z,
          d = (i * i + a * a) / (r.radius * r.radius);
        if (d >= 9) continue;
        let f = 1,
          p = r.fadeZ;
        if (p) {
          let e = p[0],
            n = p[1];
          if (t >= n) continue;
          if (t > e) {
            let r = (n - t) / (n - e);
            f = r * r * (3 - 2 * r);
          }
        }
        o += r.height * f * Math.exp(-2.302585 * d);
      }
      let d = Math.min(1, a / 140);
      return o * d * d * (3 - 2 * d);
    }
    terrainLift(e, t) {
      return this.terrainFn === null ? 0 : this.terrainFn(e, t);
    }
    groundHeight(e, t) {
      let n = this.baseGround(e, t);
      return this.terrainFn === null ? n : n + this.terrainFn(e, t);
    }
    baseGround(e, t) {
      switch (this.surfaceAt(e, t)) {
        case `road`:
        case `crosswalk`:
          return 0;
        case `plaza`:
          return 0.02;
        case `water`:
          return this.levelBoxes.length ? this.waterLevelAt(e, t) - 1.5 : -3;
        case `terrain`:
          return this.sidewalkHeight + this.hillHeight(e, t);
        case `sidewalk`:
          return this.anyFlush && this.isFlush(e, t) ? 0 : this.sidewalkHeight;
        default:
          return this.sidewalkHeight;
      }
    }
    markFlush(e) {
      for (let t of this.roads) !t.flush && e(t) && (t.flush = !0);
      this.anyFlush = this.roads.some((e) => e.flush);
    }
    isFlush(e, t) {
      if (!this.anyFlush) return !1;
      let n = !1;
      for (let r of this.roadsNear(e, t)) {
        let i = r.axis === `x` ? e : t;
        if (i < r.from - 0.01 || i > r.to + 0.01) continue;
        let a = Math.abs((r.axis === `x` ? t : e) - r.at);
        if (!(a > r.halfTotal || a <= r.halfWidth)) {
          if (!r.flush) return !1;
          n = !0;
        }
      }
      return n;
    }
    waterLevel;
    waterLevelAt(e, t) {
      let n = this.levelBoxes;
      for (let r = 0; r < n.length; r += 5)
        if (e >= n[r] && e <= n[r + 1] && t >= n[r + 2] && t <= n[r + 3])
          return n[r + 4];
      return this.waterLevel;
    }
    snapToSidewalk(e, t) {
      let n = { x: e, z: t, facing: 0, road: null },
        r = 1 / 0,
        i = new Set();
      for (let n = -3; n <= 3; n++)
        for (let r = -3; r <= 3; r++)
          for (let a of this.roadGrid.get(
            Q(Math.floor(e / Z) + r, Math.floor(t / Z) + n),
          ) ?? mc)
            i.add(a);
      if (!i.size) for (let e of this.roads) i.add(e);
      for (let a of i) {
        if (a.pedestrian) continue;
        let i = a.halfWidth + a.sidewalk * 0.5;
        for (let o of [-1, 1]) {
          let s = Math.max(
            a.from + 2,
            Math.min(a.to - 2, a.axis === `x` ? e : t),
          );
          for (let c of _c) {
            let l = s + c;
            if (l < a.from || l > a.to) continue;
            let u = a.axis === `x` ? l : a.at + o * i,
              d = a.axis === `x` ? a.at + o * i : l,
              f = Math.hypot(u - e, d - t);
            if (!(f >= r) && this.surfaceAt(u, d) === `sidewalk`) {
              ((r = f),
                (n = {
                  x: u,
                  z: d,
                  facing:
                    a.axis === `x`
                      ? o > 0
                        ? 0
                        : Math.PI
                      : o > 0
                        ? -Math.PI / 2
                        : Math.PI / 2,
                  road: a,
                }));
              break;
            }
          }
        }
      }
      return n;
    }
    nearestLink(e, t, n = !1) {
      let r = this.roadsNear(e, t);
      return (
        (r.length ? this.nearestLinkIn(r, e, t, n) : null) ??
        this.nearestLinkRing(e, t, n)
      );
    }
    linkCandidate(e, t, n, r, i) {
      if (e.pedestrian && !r) return i;
      let a = t - e.sx,
        o = n - e.sz,
        s = Math.max(0, Math.min(e.length, a * e.dx + o * e.dz)),
        c = os(e, a, o, this.side);
      if (c < 0) return i;
      let l = (c - e.road.median / 2) / this.laneWidth - 0.5,
        u = Math.max(0, Math.min(e.lanes - 1, Math.round(l))),
        d = e.sx + e.dx * s + is(e, this.laneOffset(e, u), this.side),
        f = e.sz + e.dz * s + as(e, this.laneOffset(e, u), this.side),
        p = Math.hypot(d - t, f - n);
      return !i || p < i.dist || (p === i.dist && e.id < i.link.id)
        ? { link: e, s, lane: u, dist: p }
        : i;
    }
    nearestLinkIn(e, t, n, r) {
      let i = null;
      for (let a = 0; a < e.length; a++) {
        let o = this.roadLinks.get(e[a]);
        if (o)
          for (let e = 0; e < o.length; e++)
            i = this.linkCandidate(o[e], t, n, r, i);
      }
      return i;
    }
    nearestLinkRing(e, t, n) {
      let r = null,
        i = this.linkExt;
      if (i.x1 < i.x0) return null;
      let a = Math.floor(e / uc),
        o = Math.floor(t / uc),
        s = Math.max(a - i.x0, i.x1 - a, o - i.z0, i.z1 - o),
        c = Math.max(0, i.x0 - a, a - i.x1, i.z0 - o, o - i.z1);
      for (let l = c; l <= s; l++) {
        let s = Math.max(o - l, i.z0),
          c = Math.min(o + l, i.z1);
        for (let u = s; u <= c; u++) {
          let s = u === o - l || u === o + l || l === 0 ? 1 : 2 * l;
          for (let o = a - l; o <= a + l; o += s) {
            if (o < i.x0 || o > i.x1) continue;
            let a = this.linkCells.get(Q(o, u));
            if (a)
              for (let i = 0; i < a.length; i++)
                r = this.linkCandidate(a[i], e, t, n, r);
          }
        }
        if (r && r.dist < l * uc - 0.001) break;
      }
      return r;
    }
    nearestNode(e, t, n) {
      let r = this.nodes[0],
        i = 1 / 0,
        a = this.nodeExt;
      if (a.x1 < a.x0) return r;
      let o = Math.floor(e / fc),
        s = Math.floor(t / fc),
        c = Math.max(o - a.x0, a.x1 - o, s - a.z0, a.z1 - s),
        l = Math.max(0, a.x0 - o, o - a.x1, a.z0 - s, s - a.z1);
      for (let u = l; u <= c; u++) {
        let c = Math.max(s - u, a.z0),
          l = Math.min(s + u, a.z1);
        for (let d = c; d <= l; d++) {
          let c = d === s - u || d === s + u || u === 0 ? 1 : 2 * u;
          for (let s = o - u; s <= o + u; s += c) {
            if (s < a.x0 || s > a.x1) continue;
            let o = this.nodeCells.get(Q(s, d));
            if (o)
              for (let a = 0; a < o.length; a++) {
                let s = o[a];
                if (n && !n(s)) continue;
                let c = (s.x - e) ** 2 + (s.z - t) ** 2;
                (c < i || (c === i && s.id < r.id)) && ((i = c), (r = s));
              }
          }
        }
        let d = u * fc - 0.001;
        if (d > 0 && i < d * d) break;
      }
      return r;
    }
    findRoute(e, t, n, r, i = !1) {
      let a = this.nearestNode(e, t, (e) => e.kind !== `end`),
        o = this.nearestNode(n, r, (e) => e.kind !== `end`),
        s = (this.astar ??= new Tc(this.nodes.length, this.links.length + 2));
      s.begin();
      let { g: c, f: l, came: u, closed: d } = s;
      for (
        s.touch(a.id),
          s.touch(o.id),
          c[a.id] = 0,
          l[a.id] = Math.hypot(a.x - o.x, a.z - o.z),
          s.push(a.id);
        s.size;
      ) {
        let e = s.pop();
        if (e === o.id) break;
        if (!d[e]) {
          d[e] = 1;
          for (let t of this.nodes[e].out) {
            let n = this.links[t];
            if (n.pedestrian && !i) continue;
            let r = n.to;
            if ((s.touch(r), d[r])) continue;
            let a =
              c[e] +
              n.length / Math.max(5, n.speed) +
              (this.nodes[r].signal ? 4 : 0);
            a < c[r] &&
              ((c[r] = a),
              (u[r] = e),
              (l[r] =
                a +
                Math.hypot(this.nodes[r].x - o.x, this.nodes[r].z - o.z) / 16),
              s.decreased(r),
              s.push(r));
          }
        }
      }
      if (c[o.id] === 1 / 0) return [];
      let f = [];
      for (let e = o.id; e !== -1; e = u[e]) f.push(e);
      return f.reverse();
    }
    fwdLinks = null;
    routeAnchor(e, t, n = !1) {
      if (!this.fwdLinks) {
        this.fwdLinks = new Map();
        for (let e of this.links) {
          let t = this.nodes[e.from],
            n = this.nodes[e.to],
            r = e.road.axis === `x` ? t.x : t.z;
          if ((e.road.axis === `x` ? n.x : n.z) <= r) continue;
          let i = this.fwdLinks.get(e.road);
          (i || this.fwdLinks.set(e.road, (i = [])), i.push(e));
        }
        for (let e of this.fwdLinks.values())
          e.sort((e, t) =>
            e.road.axis === `x`
              ? this.nodes[e.from].x - this.nodes[t.from].x
              : this.nodes[e.from].z - this.nodes[t.from].z,
          );
      }
      let r = new Set(),
        i = (n) => {
          for (let i = -n; i <= n; i++)
            for (let a = -n; a <= n; a++)
              for (let n of this.roadGrid.get(
                Q(Math.floor(e / Z) + a, Math.floor(t / Z) + i),
              ) ?? mc)
                r.add(n);
        },
        a = 2;
      for (; a <= 8 && !r.size; a *= 2) i(a);
      if (!r.size) for (let e of this.roads) r.add(e);
      let o = () => {
          let i = [];
          for (let a of r) {
            if ((a.pedestrian && !n) || !this.fwdLinks.get(a)?.length) continue;
            let r = a.axis === `x` ? e : t,
              o = Math.max(a.from, Math.min(a.to, r)),
              s = Math.abs((a.axis === `x` ? t : e) - a.at),
              c = Math.max(0, s - a.halfTotal) + Math.abs(r - o);
            i.push({
              r: a,
              along: o,
              off: c,
              s: c + (0.5 * s) / (a.halfTotal + 1) - (a.major ? 0.05 : 0),
            });
          }
          return i.sort((e, t) => e.s - t.s);
        },
        s = o();
      if (!s.length && a <= 8) {
        for (let e of this.roads) r.add(e);
        s = o();
      }
      let c = s[0],
        l = (n) =>
          this.walkClear(
            e,
            t,
            n.r.axis === `x` ? n.along : n.r.at,
            n.r.axis === `x` ? n.r.at : n.along,
          );
      if (c && c.off > 0.5 && !l(c)) {
        let e = c,
          t = (t) =>
            t.slice(0, 10).find((t) => t.r !== e.r && t.s < e.s + 150 && l(t)),
          n = t(s);
        (!n && a <= 8 && (i(8), (s = o()), (n = t(s))), (c = n ?? e));
      }
      if (!c) return null;
      let u = c.r,
        d = c.along,
        f = c.off,
        p = this.fwdLinks.get(u),
        m = u.axis === `x`,
        h = p[p.length - 1];
      for (let e of p)
        if ((m ? this.nodes[e.to].x : this.nodes[e.to].z) >= d) {
          h = e;
          break;
        }
      let g = f === 0 ? this.nodeAt(e, t) : null,
        _ = g && (g.id === h.from || g.id === h.to) ? g.id : -1;
      return {
        link: h,
        along: d,
        x: m ? d : u.at,
        z: m ? u.at : d,
        off: f,
        node: _,
      };
    }
    walkGrid = null;
    walkRects(e, t) {
      if (!this.walkGrid) {
        let e = new Map(),
          t = (t) => {
            for (let n = Math.floor(t.z0 / 32); n <= Math.floor(t.z1 / 32); n++)
              for (
                let r = Math.floor(t.x0 / 32);
                r <= Math.floor(t.x1 / 32);
                r++
              ) {
                let i = Q(r, n),
                  a = e.get(i);
                (a || e.set(i, (a = [])), a.push(t));
              }
          },
          n = (e) =>
            this.roads.some((t) => {
              let [n, r, i, a] = this.roadRect(t, t.halfWidth);
              return (
                e.x + e.w / 2 > n &&
                e.x - e.w / 2 < r &&
                e.z + e.d / 2 > i &&
                e.z - e.d / 2 < a
              );
            }),
          r = (e) =>
            !!e.zone ||
            e.kind === `park` ||
            e.kind === `plaza` ||
            e.kind === `station`;
        for (let e of this.landmarks)
          r(e) ||
            n(e) ||
            t({
              x0: e.x - e.w / 2,
              x1: e.x + e.w / 2,
              z0: e.z - e.d / 2,
              z1: e.z + e.d / 2,
              holes: [],
            });
        for (let e of this.blocks)
          t({
            x0: e.minX,
            x1: e.maxX,
            z0: e.minZ,
            z1: e.maxZ,
            holes: [...e.reserved, ...e.zones]
              .filter(r)
              .map((e) => [
                e.x - e.w / 2,
                e.x + e.w / 2,
                e.z - e.d / 2,
                e.z + e.d / 2,
              ]),
          });
        this.walkGrid = e;
      }
      return this.walkGrid.get(Q(Math.floor(e / 32), Math.floor(t / 32))) ?? dc;
    }
    walkObstacle(e, t, n = 0.4) {
      for (let r of this.walkRects(e, t))
        if (
          !(e <= r.x0 + n || e >= r.x1 - n || t <= r.z0 + n || t >= r.z1 - n) &&
          !r.holes.some((n) => e > n[0] && e < n[1] && t > n[2] && t < n[3])
        )
          return r;
      return null;
    }
    walkHomes(e, t) {
      let n = [];
      for (let r of this.walkRects(e, t))
        e > r.x0 &&
          e < r.x1 &&
          t > r.z0 &&
          t < r.z1 &&
          n.push({
            r,
            x: e,
            z: t,
            depth: Math.min(e - r.x0, r.x1 - e, t - r.z0, r.z1 - t),
          });
      return n;
    }
    walkHome(e, t, n, r, i = 0) {
      for (let a of r)
        if (a.r === e && Math.hypot(t - a.x, n - a.z) <= a.depth + 3 + i)
          return !0;
      return !1;
    }
    walkWater(e, t, n) {
      return e < this.riverX ||
        t < this.riverNorthZ ||
        (this.waterFn !== null && this.waterFn(e, t))
        ? !n.some((n) => e > n.r.x0 && e < n.r.x1 && t > n.r.z0 && t < n.r.z1)
        : !1;
    }
    walkClear(e, t, n, r, i = !1, a) {
      let o = Math.hypot(n - e, r - t);
      if (o < 0.5) return !0;
      let s = a ?? [...this.walkHomes(e, t), ...this.walkHomes(n, r)],
        c = Math.ceil(o);
      for (let a = 1; a < c; a++) {
        let l = a / c,
          u = e + (n - e) * l,
          d = t + (r - t) * l,
          f = this.walkObstacle(u, d);
        if (f && !this.walkHome(f, u, d, s)) return !1;
        let p = Math.min(l, 1 - l) * o;
        if (
          (p > 12 && this.walkWater(u, d, s)) ||
          (i && p > 2.5 && this.surfaceAt(u, d) === `road`)
        )
          return !1;
      }
      return !0;
    }
    walkPath(e, t, n, r) {
      let i = [...this.walkHomes(e, t), ...this.walkHomes(n, r)];
      return (
        this.walkPathIn(e, t, n, r, 40, i) ??
        this.walkPathIn(e, t, n, r, 160, i)
      );
    }
    walkPathIn(e, t, n, r, i, a) {
      let o = Math.min(e, n) - i,
        s = Math.min(t, r) - i,
        c = Math.max(e, n) + i - o,
        l = Math.max(t, r) + i - s,
        u = Math.max(2, Math.ceil(Math.sqrt((c * l) / 2e4) * 2) / 2);
      if (u > 5) return null;
      let d = Math.ceil(c / u),
        f = Math.ceil(l / u),
        p = (e, t) =>
          Math.max(0, Math.min(d - 1, Math.floor((e - o) / u))) +
          Math.max(0, Math.min(f - 1, Math.floor((t - s) / u))) * d,
        m = p(e, t),
        h = p(n, r),
        g = new Int8Array(d * f).fill(-1),
        _ = (e) => {
          if (e === m || e === h) return !1;
          if (g[e] < 0) {
            let t = o + ((e % d) + 0.5) * u,
              n = s + (Math.floor(e / d) + 0.5) * u,
              r = this.walkObstacle(t, n, 0.4 - u / 2);
            g[e] =
              (r && !this.walkHome(r, t, n, a, u * 0.75)) ||
              this.walkWater(t, n, a)
                ? 1
                : 0;
          }
          return g[e] === 1;
        },
        v = new Float32Array(d * f).fill(1 / 0),
        y = new Int32Array(d * f).fill(-1),
        b = new Uint8Array(d * f),
        ee = h % d,
        x = Math.floor(h / d),
        S = [],
        C = [],
        w = (e, t) => {
          let n = S.length;
          for (S.push(t), C.push(e); n > 0;) {
            let t = (n - 1) >> 1;
            if (C[t] <= e) break;
            ((S[n] = S[t]), (C[n] = C[t]), (n = t));
          }
          ((S[n] = t), (C[n] = e));
        },
        T = () => {
          let e = S[0],
            t = S.pop(),
            n = C.pop(),
            r = S.length;
          if (r) {
            let e = 0;
            for (;;) {
              let t = 2 * e + 1;
              if (t >= r) break;
              let i = t + 1 < r && C[t + 1] < C[t] ? t + 1 : t;
              if (C[i] >= n) break;
              ((S[e] = S[i]), (C[e] = C[i]), (e = i));
            }
            ((S[e] = t), (C[e] = n));
          }
          return e;
        };
      ((v[m] = 0), w(0, m));
      let te = !1;
      for (; S.length;) {
        let e = T();
        if (b[e]) continue;
        if (((b[e] = 1), e === h)) {
          te = !0;
          break;
        }
        let t = e % d,
          n = Math.floor(e / d);
        for (let r = -1; r <= 1; r++)
          for (let i = -1; i <= 1; i++) {
            if (!i && !r) continue;
            let a = t + i,
              o = n + r;
            if (a < 0 || o < 0 || a >= d || o >= f) continue;
            let s = a + o * d;
            if (b[s] || _(s) || (i && r && (_(a + n * d) || _(t + o * d))))
              continue;
            let c = v[e] + (i && r ? Math.SQRT2 : 1);
            c < v[s] &&
              ((v[s] = c), (y[s] = e), w(c + Math.hypot(a - ee, o - x), s));
          }
      }
      if (!te) return null;
      let E = [];
      for (let e = y[h]; e !== -1 && e !== m; e = y[e])
        E.push({
          x: o + ((e % d) + 0.5) * u,
          z: s + (Math.floor(e / d) + 0.5) * u,
        });
      (E.reverse(), E.push({ x: n, z: r }));
      let ne = [],
        re = e,
        ie = t;
      for (let e = 0; e < E.length;) {
        let t = e;
        for (
          ;
          t + 1 < E.length &&
          this.walkClear(re, ie, E[t + 1].x, E[t + 1].z, !1, a);
        )
          t++;
        (ne.push(E[t]), (re = E[t].x), (ie = E[t].z), (e = t + 1));
      }
      return ne;
    }
    gpsRoute(e, t, n, r, i = !1) {
      let a = this.routeAnchor(e, t, i),
        o = this.routeAnchor(n, r, i);
      if (!a || !o) return this.findRoute(e, t, n, r, i);
      let s = (e, t) => (t.axis === `x` ? this.nodes[e].x : this.nodes[e].z);
      if (a.link === o.link) {
        let e = a.link.road,
          t = Math.min(a.along, o.along),
          n = Math.max(a.along, o.along);
        return [a.link.from, a.link.to]
          .filter((r) => {
            let i = s(r, e),
              a =
                (e.axis === `x` ? this.nodes[r].halfX : this.nodes[r].halfZ) +
                1;
            return i >= t - a && i <= n + a;
          })
          .sort(
            (t, n) => Math.abs(s(t, e) - a.along) - Math.abs(s(n, e) - a.along),
          );
      }
      let c = this.nodes.length,
        l = new Float64Array(c).fill(1 / 0),
        u = new Float64Array(c).fill(1 / 0),
        d = new Int32Array(c).fill(-1),
        f = new Uint8Array(c),
        p = [],
        m = o.x,
        h = o.z,
        g = (e) => {
          let t =
            e === a.node
              ? 0
              : Math.abs(s(e, a.link.road) - a.along) /
                Math.max(5, a.link.speed);
          t >= l[e] ||
            ((l[e] = t),
            (u[e] =
              t + Math.hypot(this.nodes[e].x - m, this.nodes[e].z - h) / 16),
            p.push(e));
        };
      a.node >= 0 ? g(a.node) : (g(a.link.from), g(a.link.to));
      let _ = (e) =>
          o.node >= 0
            ? e === o.node
              ? 0
              : -1
            : e === o.link.from || e === o.link.to
              ? Math.abs(s(e, o.link.road) - o.along) /
                Math.max(5, o.link.speed)
              : -1,
        v = 1 / 0,
        y = -1;
      for (; p.length;) {
        let e = 0;
        for (let t = 1; t < p.length; t++) u[p[t]] < u[p[e]] && (e = t);
        let t = p[e];
        if (((p[e] = p[p.length - 1]), p.pop(), u[t] >= v)) break;
        if (f[t]) continue;
        f[t] = 1;
        let n = _(t);
        n >= 0 && l[t] + n < v && ((v = l[t] + n), (y = t));
        for (let e of this.nodes[t].out) {
          let n = this.links[e];
          if (n.pedestrian && !i) continue;
          let r = n.to;
          if (f[r]) continue;
          let a =
            l[t] +
            n.length / Math.max(5, n.speed) +
            (this.nodes[r].signal ? 4 : 0);
          a < l[r] &&
            ((l[r] = a),
            (d[r] = t),
            (u[r] =
              a + Math.hypot(this.nodes[r].x - m, this.nodes[r].z - h) / 16),
            p.push(r));
        }
      }
      if (y < 0) return [];
      let b = [];
      for (let e = y; e !== -1; e = d[e]) b.push(e);
      return b.reverse();
    }
    linkBetween(e, t) {
      for (let n of this.nodes[e].out)
        if (this.links[n].to === t) return this.links[n];
      return null;
    }
    landmark(e) {
      return this.landmarks.find((t) => t.id === e);
    }
  },
  mc = [],
  hc = 1e5;
