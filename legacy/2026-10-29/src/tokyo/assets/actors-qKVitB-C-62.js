// tokyo/assets/actors-qKVitB-C 62 — math
// Lines 27134-28926 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var y_ = new Me(),
  b_ = new L(),
  x_ = new L(),
  S_ = new R(),
  C_ = new m(),
  w_ = { distance: 0, point: new L(), normal: new L(), tag: ``, body: null },
  T_ = class {
    ctx;
    sim;
    specs = [];
    frustum = new y();
    cand = [];
    tmpB = [];
    candX = 1e9;
    candZ = 1e9;
    candT = 0;
    lastPX = 0;
    lastPZ = 0;
    burst = 0;
    camX = 0;
    camY = 0;
    camZ = 0;
    spawned = 0;
    despawned = 0;
    override = -1;
    density = 1;
    enabled = !0;
    onActivate = () => {};
    pvx = 0;
    pvz = 0;
    pSpeed = 0;
    pdx = 0;
    pdz = -1;
    aIds = [];
    xIds = [];
    xSkip = null;
    xClock = 0.5;
    xT = 0;
    xRefresh = 0;
    xN = 0;
    xWant = 0;
    exprScale = 1;
    xUp = !1;
    rDes = J.despawn;
    expressway = 0;
    aRefresh = 0;
    aT = 0;
    aX = 1e9;
    aZ = 1e9;
    arterial = 0;
    constructor(e, t) {
      ((this.ctx = e), (this.sim = t));
      let n;
      try {
        n = e.vehicles?.specs;
      } catch {
        n = void 0;
      }
      for (let e = 0; e < t_; e++) {
        let t = e_[e],
          r = s_[t],
          i = n?.[t];
        this.specs.push({
          halfW: i?.halfW ?? r[0],
          halfL: i?.halfL ?? r[1],
          height: i?.height ?? r[2],
          mass: i?.mass ?? r[3],
          colors: i?.colors?.length ? i.colors : [16777215, 2236962, 11580602],
        });
      }
      Qg(
        this,
        `candX.candZ.candT.lastPX.lastPZ.burst.camX.camY.camZ.density.pvx.pvz.pSpeed.pdx.pdz.aRefresh.aT.aX.aZ.cHour.cDens.cRush.cShare.cNight.trimT.trimCd.lS.corT.scootK.rk.share.scootWant.feedT.qRefresh.cfx.cfz.xT.xRefresh.xClock.rDes`.split(
          `.`,
        ),
      );
    }
    cFrame = -1;
    cHour = 14;
    cDens = 1;
    cRush = 1;
    cShare = 0.42;
    cNight = 0;
    cTarget = 0;
    refreshHour() {
      let e = this.ctx.time.frame;
      if (e === this.cFrame) return;
      this.cFrame = e;
      let t = 14;
      try {
        let e = this.ctx.env?.hour;
        typeof e == `number` && Number.isFinite(e) && (t = e);
      } catch {
        t = 14;
      }
      ((this.cHour = t),
        (this.cDens = m_(t)),
        (this.cRush = g_(t)),
        (this.cShare = v_(t)),
        (this.cNight =
          t >= 21 || t < 5
            ? 1
            : t >= 19
              ? (t - 19) / 2
              : t < 6.5
                ? (6.5 - t) / 1.5
                : 0));
      let n = this.ctx.quality.level,
        r =
          1 + (this.cRush - 1) * (n === `low` ? 0.5 : n === `medium` ? 1 : 1.6);
      this.cTarget = Math.round(
        this.ctx.quality.maxTrafficVehicles *
          V(this.density, 0, 1.5) *
          this.cDens *
          r,
      );
    }
    hour() {
      return (this.refreshHour(), this.cHour);
    }
    densH() {
      return (this.refreshHour(), this.cDens);
    }
    shareH() {
      return (this.refreshHour(), this.cShare);
    }
    rushK() {
      this.refreshHour();
      let e = this.cRush;
      return e <= 1 ? 0 : (e - 1) / 0.5;
    }
    target() {
      return this.enabled
        ? this.override >= 0
          ? Math.min(this.override, this.sim.cars.length)
          : (this.refreshHour(), Math.min(this.cTarget, this.sim.cars.length))
        : 0;
    }
    night() {
      return (this.refreshHour(), this.cNight);
    }
    updateView() {
      let e = this.ctx.camera;
      (e.updateMatrixWorld(),
        S_.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this.frustum.setFromProjectionMatrix(
          S_,
          e.coordinateSystem,
          e.reversedDepth,
        ));
      let t = this.fp,
        n = this.frustum.planes;
      for (let e = 0; e < 6; e++) {
        let r = n[e];
        ((t[e * 4] = r.normal.x),
          (t[e * 4 + 1] = r.normal.y),
          (t[e * 4 + 2] = r.normal.z),
          (t[e * 4 + 3] = r.constant));
      }
      ((this.camX = e.position.x),
        (this.camY = e.position.y),
        (this.camZ = e.position.z));
      let r = this.ctx.player.position;
      ((this.sim.px = r.x),
        (this.sim.pz = r.z),
        (this.sim.py = r.y),
        (this.xUp = r.y > 2.5));
      let i = this.ctx.camera.far,
        a = this.sim.active;
      for (let e = 0; e < a.length; e++) {
        let n = a[e],
          o = n.x - this.camX,
          s = n.z - this.camZ;
        n.camDist = Math.sqrt(o * o + s * s);
        let c = n.x - r.x,
          l = n.z - r.z;
        if (
          ((n.plDist = Math.sqrt(c * c + l * l)),
          n.camDist > i + 10 || n.camDist > J.hazeDist)
        )
          n.visible = !1;
        else {
          let e = n.y + n.height * 0.5,
            r = -(n.halfL + 1.2),
            i = !0;
          for (let a = 0; a < 24; a += 4)
            if (t[a] * n.x + t[a + 1] * e + t[a + 2] * n.z + t[a + 3] < r) {
              i = !1;
              break;
            }
          n.visible = i;
        }
      }
    }
    fp = new Float64Array(24);
    inView(e, t, n, r = 1) {
      return (
        C_.center.set(e, r, t),
        (C_.radius = n),
        this.frustum.intersectsSphere(C_)
      );
    }
    raysLeft = 1;
    vMin = J.viewSpawnMin;
    vMinS = J.viewSpawnMin;
    vMax = J.viewSpawnMax;
    updateHaze() {
      let e = this.ctx.scene.fog,
        t = J.viewSpawnMin;
      if (e && e.isFog) {
        let n = e;
        t = n.near + (n.far - n.near) * 0.3;
      } else if (e && e.isFogExp2) {
        let n = e.density;
        n > 0 && (t = 0.6 / n);
      }
      ((this.vMin = t < 120 ? 120 : t > 240 ? 240 : t),
        (this.vMax = Math.max(this.vMin + 70, J.viewSpawnMax)),
        (this.vMinS =
          this.pSpeed > 6
            ? Math.max(J.driveSpawnMin, Math.min(this.vMin, this.vMin * 0.62))
            : this.vMin));
    }
    occluded(e, t) {
      if (this.raysLeft <= 0) return !1;
      (this.raysLeft--,
        b_.set(this.camX, this.camY, this.camZ),
        x_.set(e - this.camX, 1.4 - this.camY, t - this.camZ));
      let n = x_.length();
      if (
        n < 1 ||
        (x_.multiplyScalar(1 / n), !this.ctx.statics.raycast(b_, x_, n - 3, w_))
      )
        return !1;
      let r = w_.tag;
      return (
        r !== `tree` &&
        r !== `pole` &&
        r !== `pillar` &&
        r !== `prop` &&
        r !== `floor` &&
        r !== `sign` &&
        r !== `lamp`
      );
    }
    update(e) {
      let t = this.sim,
        n = t.px,
        r = t.pz,
        i = Math.hypot(n - this.lastPX, r - this.lastPZ);
      if (i < 60 && e > 0) {
        let t = Math.min(1, e * 2.5);
        ((this.pvx += ((n - this.lastPX) / e - this.pvx) * t),
          (this.pvz += ((r - this.lastPZ) / e - this.pvz) * t),
          (this.pSpeed = Math.hypot(this.pvx, this.pvz)),
          this.pSpeed > 1 &&
            ((this.pdx = this.pvx / this.pSpeed),
            (this.pdz = this.pvz / this.pSpeed)));
      }
      if (((this.lastPX = n), (this.lastPZ = r), i > 120)) {
        for (let e = t.active.length - 1; e >= 0; e--)
          t.active[e].plDist > J.spawnMin && this.despawn(t.active[e]);
        ((this.candX = 1e9), (this.burst = 1.2));
      }
      this.burst > 0 && (this.burst -= e);
      let a = this.ctx.camera.far,
        o = Math.min(J.despawn, a * 0.45);
      this.rDes = o;
      let s = Math.min(J.hardDespawn, a * 0.85),
        c = this.target(),
        l = t.net,
        u = 0;
      if (l.nL > l.nPlan)
        for (let e = 0; e < t.active.length; e++) {
          let n = t.active[e];
          (n.mode === 0 ? l.expr[n.link] === 1 : t.aboveGround(n) > 1.2) && u++;
        }
      this.xN = u;
      let d = c + (u < this.xWant ? u : this.xWant);
      this.ctx.camera.getWorldDirection(x_);
      let f = x_.x,
        p = x_.z;
      ((this.cfx = f), (this.cfz = p));
      for (let e = t.active.length - 1; e >= 0; e--) {
        let i = t.active[e];
        if (i.plDist > s) this.despawn(i);
        else if (i.visible) continue;
        else if (i.plDist > o) this.despawn(i);
        else if (i.mode === 2 && (i.wrecked || i.abandoned) && i.plDist > 160)
          this.despawn(i);
        else if ((i.stuck > 20 || i.idle > 60) && i.plDist > 40)
          this.despawn(i);
        else if (
          i.mode === 0 &&
          l.deadEnd[i.link] &&
          l.expr[i.link] &&
          i.s > t.links[i.link].length - 25
        )
          this.despawn(i);
        else if (i.plDist > 60 && i.mode === 0) {
          let e = i.x - this.camX,
            t = i.z - this.camZ,
            a = e * f + t * p < -20,
            o =
              Math.sin(i.heading) * (i.x - n) -
                Math.cos(i.heading) * (i.z - r) >
              0;
          a && o && this.despawn(i);
        }
      }
      (t.active.length > d + 2 &&
        (this.trimCd -= e) <= 0 &&
        ((this.trimCd = 0.06),
        this.trim(t.active.length - d - 2 > 4 ? 2 : 1, n, r)),
        (this.raysLeft = this.burst > 0 ? 4 : 1),
        this.updateHaze(),
        (this.rk = this.rushK()),
        (t.congest = this.rk));
      let m = 0,
        h = 0;
      for (let e = 0; e < t.active.length; e++) {
        let n = t.active[e];
        (n.two && m++, n.v > 2.5 && n.plDist < 200 && h++);
      }
      ((this.nTwo = m),
        (this.share = t.active.length > 8 ? m / t.active.length : 0.4),
        (this.movingNear = h));
      let g = this.pSpeed > 6,
        _ = d * 0.55;
      if (t.active.length < d) {
        (Math.hypot(n - this.candX, r - this.candZ) > 25 ||
          (this.candT -= e) <= 0) &&
          this.refreshCandidates(n, r);
        let i = this.burst > 0 ? 14 : g ? 9 : 6,
          a = 0;
        for (
          let e = 0;
          e < i && t.active.length < d && a < (this.burst > 0 ? 6 : 2);
          e++
        )
          this.trySpawn(this.burst > 0, J.spawnMin) && a++;
      }
      let v = d < 60 ? (d / 60) * (d / 60) : 1,
        y = d + Math.round(6 * v),
        b = d + Math.round(4 * v);
      if (
        (g && !this.xUp && t.active.length < y && this.spawnCorridor(e, y),
        t.active.length < b && this.fillArterials(e, b),
        l.nL > l.nPlan && this.fillExpressways(e, c),
        !g || h >= _)
      ) {
        let n = Math.round((g ? 2 + this.rk * 5 : 3 + this.rk * 12) * v);
        t.active.length < d + n && this.feedQueues(e, d + n);
      } else
        t.active.length >= d &&
          (this.trimT -= e) <= 0 &&
          ((this.trimT = g ? 0.2 : 0.4), this.trim(1, n, r, !0));
    }
    movingNear = 0;
    trimT = 0;
    trimCd = 0;
    trim(e, t, n, r = !1) {
      let i = this.sim,
        a = i.net,
        o = this.xN > this.xWant,
        s = i.active.length,
        c = s > 8 ? this.nTwo / s - this.shareH() : 0,
        l = c > 0.04 ? 60 : c < -0.04 ? -60 : 0;
      for (let s = 0; s < e; s++) {
        let e = null,
          s = -1e9;
        for (let c = 0; c < i.active.length; c++) {
          let u = i.active[c];
          if (u.visible || u.plDist < 90 || (r && u.v > 0.5)) continue;
          let d =
            a.nL > a.nPlan &&
            (u.mode === 0 ? a.expr[u.link] === 1 : i.aboveGround(u) > 1.2);
          if (d && !o) continue;
          let f = u.plDist + (u.two ? l : 0) + (d ? 80 : 0);
          u.v < 0.5 && (f += 70);
          let p = u.x - this.camX,
            m = u.z - this.camZ;
          (p * this.cfx + m * this.cfz < -20 && (f += 60),
            this.pSpeed > 5 &&
              (u.x - t) * this.pdx + (u.z - n) * this.pdz > 0 &&
              (f -= 90),
            f > s && ((s = f), (e = u)));
        }
        if (!e) return;
        ((e.mode === 0 ? a.expr[e.link] === 1 : e.y > 1.2) && this.xN--,
          this.despawn(e));
      }
    }
    fillArterials(e, t) {
      if ((this.aT -= e) > 0) return;
      this.aT = 0.35;
      let n = this.sim,
        r = n.net,
        i = n.px,
        a = n.pz;
      if (
        (this.aRefresh -= 0.35) <= 0 ||
        Math.hypot(i - this.aX, a - this.aZ) > 40
      ) {
        ((this.aRefresh = 1.5),
          (this.aX = i),
          (this.aZ = a),
          r.gatherLinks(i, a, 0, 250, this.aIds));
        let e = 0;
        for (let t of this.aIds) {
          let i = n.links[t];
          !i.road.major ||
            i.pedestrian ||
            i.length < 40 ||
            r.expr[t] ||
            (this.aIds[e++] = t);
        }
        this.aIds.length = e;
      }
      let o = this.aIds.length;
      if (!o || n.active.length >= t) return;
      let s =
        (0.35 + 0.45 * this.rk) *
        Math.min(1, this.densH() * 1.1) *
        V(this.density, 0, 1.5) *
        (this.ctx.quality.level === `low` ? 0.5 : 1);
      if (s <= 0.02) return;
      let c = -1,
        l = 0.6,
        u = 0;
      for (let e = 0; e < o; e++) {
        let t = this.aIds[e],
          r = n.links[t],
          o = 0,
          d = 0;
        for (let e = n.hL(t); e >= 0; e = n.nextL[e]) {
          let t = n.cars[e];
          t.v <= 2.5 || (t.two ? (o += 0.5) : (o++, d++));
        }
        let f = (r.length / 100) * r.lanes * s - o,
          p = (r.sx + r.ex) * 0.5,
          m = (r.sz + r.ez) * 0.5,
          h = p - i,
          g = m - a,
          _ = Math.hypot(h, g) || 1;
        (f > 0 &&
          ((f *=
            (this.inView(p, m, r.length * 0.5) ? 1.6 : 0.6) *
            (_ < 150 ? 1.3 : 0.8)),
          this.pSpeed > 5 &&
            (h * this.pdx + g * this.pdz) / _ > 0.4 &&
            (f *= 2)),
          f > l &&
            ((l = f),
            (c = t),
            (u = d / Math.max(1, (r.length / 100) * r.lanes))));
      }
      if (c < 0) return;
      let d = n.links[c],
        f = n.rng,
        p = u < s * 0.5;
      for (let e = 0; e < 4; e++) {
        let e = this.pickKind(!0);
        p && i_(e) && (e = f.next() < 0.35 ? 1 : 2);
        let o = this.specs[e],
          s =
            o.halfL + 3 + f.next() * Math.max(1, d.length * 0.7 - o.halfL - 3),
          c =
            e === 0 || e === 8 || e === 6
              ? d.lanes - 1
              : Math.floor(f.next() * d.lanes),
          l = r.laneOff(d.id, c),
          u = d.sx + d.dx * s + Le(d, l, r.side),
          m = d.sz + d.dz * s + mt(d, l, r.side);
        if (Math.hypot(u - i, m - a) < 30) continue;
        let h = Math.hypot(u - this.camX, m - this.camZ);
        if (
          (this.inView(u, m, o.halfL + 2) &&
            h < this.vMinS &&
            !this.occluded(u, m)) ||
          !this.clearAt(d.id, s, l, o.halfW, o.halfL, 7) ||
          this.bodiesAt(u, 0, m, o.halfL + 1.5)
        )
          continue;
        let g = this.activate(e, d.id, c, s, d.speed * (0.8 + f.next() * 0.15));
        if (!g) return;
        if ((this.arterial++, e === 0)) {
          let e = s,
            i = 1 + Math.floor(f.next() * (2 + this.rk * 3));
          for (
            let a = 0;
            a < i &&
            n.active.length < t &&
            ((e -= 2.4 + f.next() * 2.4), !(e < o.halfL + 2));
            a++
          ) {
            let t = r.laneOff(d.id, d.lanes - 1) - 1.1,
              i = r.curb[d.id] - 0.5,
              a = t + f.next() * (i - t);
            if (!this.laneFree(d.id, a, 0.45, e - 1.4, e + 1.4)) continue;
            let o = this.activate(
              0,
              d.id,
              d.lanes - 1,
              e,
              g.v * (0.95 + f.next() * 0.1),
            );
            if (!o) break;
            ((o.lat = o.latTarget = a),
              n.pose(o, 0),
              n.syncBody(o),
              this.bodyAt(o) ? this.despawn(o) : this.arterial++);
          }
        }
        return;
      }
    }
    lIds = [];
    lS = 0;
    linkAt(e, t, n, r) {
      let i = this.sim;
      i.net.gatherLinks(e, t, 0, 20, this.lIds);
      let a = -1,
        o = 1e9;
      for (let s of this.lIds) {
        let c = i.links[s];
        if (i.net.expr[s] || c.dx * n + c.dz * r < 0.8) continue;
        let l = e - c.sx,
          u = t - c.sz,
          d = l * c.dx + u * c.dz;
        if (d < 0 || d > c.length) continue;
        let f = Je(c, l, u, i.net.side);
        if (f < -1 || f > c.road.halfWidth + 2) continue;
        let p = Math.abs(f - c.road.halfWidth * 0.5);
        p < o && ((o = p), (a = s), (this.lS = d));
      }
      return a;
    }
    corT = 0;
    corK = 0;
    corridor = 0;
    spawnCorridor(e, t) {
      if ((this.corT -= e) > 0) return;
      this.corT = 0.22;
      let n = this.sim,
        r = n.rng,
        i = n.px,
        a = n.pz,
        o = this.pdx,
        s = this.pdz,
        c = this.linkAt(i, a, o, s);
      if (c < 0) return;
      let l = n.links[c],
        u = l.road.axis,
        d = l.road.at,
        f = 0,
        p = 0,
        m = 0;
      for (let e = 0; e < n.active.length; e++) {
        let t = n.active[e];
        if (t.mode === 2) continue;
        let r = u === `x` ? t.z - d : t.x - d;
        if (r > l.road.halfWidth + 1 || r < -l.road.halfWidth - 1) continue;
        let c = t.x - i,
          h = t.z - a,
          g = c * o + h * s;
        g > 200 ||
          g < -80 ||
          (Math.sin(t.heading) * o - Math.cos(t.heading) * s > 0.7
            ? g > 10
              ? f++
              : t.v > this.pSpeed + 1.5 && m++
            : g > 10 && p++);
      }
      let h = this.rk,
        g = Math.min(1, this.densH() * 1.15) * V(this.density, 0, 1.5),
        _ = l.lanes,
        v = Math.round((2 + _ * (2.2 + h * 1.8)) * g),
        y = Math.round((1 + _ * (1.1 + h * 0.9)) * g);
      if (n.active.length >= t) return;
      if (
        (this.corK++,
        this.corK % 2 == 0 &&
          f < v + 2 &&
          m < 2 + h &&
          this.pSpeed < l.speed * 1.2)
      ) {
        let e = 30 + r.next() * 30,
          t = i - o * e,
          c = a - s * e,
          l = this.linkAt(t, c, o, s);
        if (
          l >= 0 &&
          this.placeMoving(
            l,
            this.lS,
            r.next() < 0.62 ? 0 : -1,
            Math.max(n.links[l].speed * 1.25, this.pSpeed + 4),
            !0,
          )
        ) {
          this.corridor++;
          return;
        }
      }
      let b = this.vMinS + 6,
        x = Math.max(b + 20, Math.min(this.vMax, 215)),
        S = f < v,
        C = p < y;
      if (!S && !C) return;
      let w = C && (!S || this.corK % 3 == 0);
      for (let e = 0; e < 3; e++) {
        let e = r.next(),
          t = b + e * e * (x - b),
          c = i + o * t,
          l = a + s * t,
          u = w ? this.linkAt(c, l, -o, -s) : this.linkAt(c, l, o, s);
        if (u < 0) continue;
        let d =
          n.links[u].speed * (w ? 0.85 + r.next() * 0.2 : 0.7 + r.next() * 0.2);
        if (this.placeMoving(u, this.lS, -1, d, !1)) {
          this.corridor++;
          return;
        }
      }
    }
    placeMoving(e, t, n, r, i) {
      let a = this.sim,
        o = a.net,
        s = a.rng,
        c = a.links[e];
      if (c.pedestrian || c.length < 20) return !1;
      let l = n >= 0 ? n : this.pickKind(c.road.major);
      if (l === 6 && !c.road.major) return !1;
      let u = this.specs[l],
        d = V(t, u.halfL + 2, c.length - u.halfL - 8);
      if (d < u.halfL + 2) return !1;
      let f;
      if (l === 0 || l === 8 || l === 6) f = c.lanes - 1;
      else if (i && c.lanes > 1) {
        let t = Je(c, a.px - c.sx, a.pz - c.sz, o.side),
          n = 0,
          r = -1;
        for (let i = 0; i < c.lanes; i++) {
          let a = Math.abs(o.laneOff(e, i) - t);
          a > r && ((r = a), (n = i));
        }
        f = n;
      } else f = Math.floor(s.next() * c.lanes);
      let p = o.laneOff(e, f);
      l === 0 &&
        (p =
          o.laneOff(e, c.lanes - 1) -
          0.8 +
          s.next() * (o.curb[e] - o.laneOff(e, c.lanes - 1) + 0.3));
      let m = c.sx + c.dx * d + Le(c, p, o.side),
        h = c.sz + c.dz * d + mt(c, p, o.side);
      if (Math.hypot(m - a.px, h - a.pz) < 22) return !1;
      let g = Math.hypot(m - this.camX, h - this.camZ);
      if (
        this.inView(m, h, u.halfL + 2) &&
        g < this.vMinS &&
        !this.occluded(m, h)
      )
        return !1;
      for (let e of a.holds)
        if (e.active && (m - e.x) ** 2 + (h - e.z) ** 2 < (e.r + 12) ** 2)
          return !1;
      if (
        !this.clearAt(e, d, p, u.halfW, u.halfL, i ? 9 : 6) ||
        this.bodiesAt(m, 0, h, u.halfL + 2)
      )
        return !1;
      let _ = this.activate(l, e, f, d, r);
      return _
        ? (l === 0 && ((_.lat = _.latTarget = p), a.pose(_, 0), a.syncBody(_)),
          i
            ? (_.vf = V(r / Math.max(1, c.speed), 1.05, 1.6))
            : r < c.speed * 0.85 &&
              (_.vf = Math.min(
                _.vf,
                Math.max(0.72, r / Math.max(1, c.speed) + 0.05),
              )),
          !this.bodyAt(_) || (this.despawn(_), !1))
        : !1;
    }
    refreshCandidates(e, t) {
      let n = Math.min(this.vMax, this.ctx.camera.far * 0.6),
        r = this.sim.net;
      if ((r.gatherLinks(e, t, 12, n, this.cand), r.nL > r.nPlan)) {
        let e = 0;
        for (let t of this.cand) r.expr[t] || (this.cand[e++] = t);
        this.cand.length = e;
      }
      ((this.candX = e), (this.candZ = t), (this.candT = 1.5));
    }
    trySpawn(e, t) {
      let n = this.sim,
        r = this.cand.length;
      if (!r) return !1;
      let i = n.rng,
        a = n.links[this.cand[Math.floor(i.next() * r)]],
        o = (a.sx + a.ex) * 0.5 - n.px,
        s = (a.sz + a.ez) * 0.5 - n.pz,
        c = Math.sqrt(o * o + s * s) || 1,
        l = -(a.dx * o + a.dz * s) / c,
        u =
          (a.road.major ? 3 : 1) *
          (a.lanes >= 3 ? 1.3 : 1) *
          (l > 0.3 ? 1.6 : 1);
      if (
        (this.rk > 0 && c < J.queueRange && (u *= 1 + this.rk * 0.8),
        this.pSpeed > 5)
      ) {
        let e = (o * this.pdx + s * this.pdz) / c;
        e > 0.45 && c > 90 && c < 320 ? (u *= 3.2) : e < -0.25 && (u *= 0.3);
      }
      if (i.next() * 6.3 * (1 + this.rk * 0.8) > u || a.length < 18) return !1;
      let d = this.pickKind(a.road.major),
        f = this.specs[d],
        p = f.halfL + 2 + i.next() * (a.length - f.halfL * 2 - 8);
      if (p < f.halfL + 1) return !1;
      let m;
      m =
        d === 0 || d === 8 || d === 6
          ? a.lanes - 1
          : Math.floor(i.next() * a.lanes);
      let h = n.net.laneOff(a.id, m),
        g = a.sx + a.dx * p + Le(a, h, n.net.side),
        _ = a.sz + a.dz * p + mt(a, h, n.net.side),
        v = g - n.px,
        y = _ - n.pz,
        b = Math.sqrt(v * v + y * y);
      if (b < t) return !1;
      let x = this.inView(g, _, f.halfL + 2);
      if (e) {
        if (b > J.spawnMax + 40 || (!x && i.next() < 0.55)) return !1;
      } else if (x) {
        let e = Math.hypot(g - this.camX, _ - this.camZ);
        if (
          e > Math.min(this.vMax, this.ctx.camera.far * 0.6) ||
          (e < this.vMinS && !this.occluded(g, _))
        )
          return !1;
      } else if (b > J.spawnMax) return !1;
      for (let e of n.holds)
        if (e.active && (g - e.x) ** 2 + (_ - e.z) ** 2 < (e.r + 12) ** 2)
          return !1;
      if (
        !this.clearAt(a.id, p, h, f.halfW, f.halfL, 5) ||
        this.bodiesAt(g, 0, _, f.halfL + 1.5)
      )
        return !1;
      let S = a.speed * 0.8,
        C = this.activate(d, a.id, m, p, S);
      if (
        C &&
        d === 0 &&
        i.next() <
          (0.45 + this.rk * 0.3) *
            (this.share < this.scootWant + 0.03 ? 1 : 0.25)
      ) {
        let e = 1 + Math.floor(i.next() * (3 + this.rk * 3)),
          t = p;
        for (
          let r = 0;
          r < e &&
          this.sim.active.length < this.target() &&
          ((t -= 2.4 + i.next() * 2.6), !(t < f.halfL + 2));
          r++
        ) {
          let e = this.activate(0, a.id, m, t, C.v * (0.95 + i.next() * 0.1));
          if (!e) break;
          let r = n.net.laneOff(a.id, a.lanes - 1) - 1.1,
            o = n.net.curb[a.id] - 0.5;
          if (
            ((e.lat = e.latTarget = r + i.next() * (o - r)),
            !this.clearAt(a.id, t, e.lat, e.halfW, e.halfL, 0.8, e))
          ) {
            this.despawn(e);
            break;
          }
          (n.pose(e, 0), n.syncBody(e));
        }
      }
      return !!C;
    }
    clearAt(e, t, n, r, i, a, o = null) {
      let s = this.sim;
      for (let c = s.hL(e); c >= 0; c = s.nextL[c]) {
        let e = s.cars[c];
        if (
          e !== o &&
          !(Math.abs(e.lat - n) > e.halfW + r + 0.3) &&
          Math.abs(e.s - t) < e.halfL + i + a
        )
          return !1;
      }
      if (t < 12) for (let t = s.hJ(e); t >= 0; t = s.nextJ[t]) return !1;
      return !0;
    }
    pickKind(e) {
      let t = this.night(),
        n = this.hour(),
        r = e && !(n >= 0.5 && n < 5.5),
        i = this.shareH(),
        a = this.sim.active.length,
        o = a > 8 ? this.nTwo / a : i;
      ((this.share = o),
        (this.scootWant = i),
        (this.scootK =
          o > i + 0.04
            ? 0
            : (i / (1 - i) / (40 / 60)) * V(1 + (i - o) * 5, 0.25, 1.8)));
      let s = 0;
      for (let n = 0; n < t_; n++) s += this.kindW(n, t, r, e);
      let c = this.sim.rng.next() * s;
      for (let n = 0; n < t_; n++)
        if (((c -= this.kindW(n, t, r, e)), c <= 0)) return n;
      return 2;
    }
    scootK = 1;
    rk = 0;
    kindW(e, t, n, r) {
      let i = o_[e];
      return (i.majorOnly && !r) || (e === 6 && !n)
        ? 0
        : (i.day + (i.night - i.day) * t) *
            (e === 0 || e === 8 ? this.scootK : 1);
    }
    activate(e, t, n, r, i, a = !0) {
      let o = this.sim;
      if (o.net.expr[t] && (i_(e) || e === 6 || e === 7)) {
        e = o.rng.next() < 0.35 ? 1 : o.rng.next() < 0.7 ? 2 : 3;
        let r = o.links[t];
        n >= r.lanes && (n = r.lanes - 1);
      }
      let s = null;
      for (let e of o.cars)
        if (!e.active && e.freedAt !== o.stamp) {
          s = e;
          break;
        }
      if (!s) return null;
      let c = o.rng,
        l = o_[e],
        u = this.specs[e],
        d = o.links[t];
      ((s.active = !0),
        (s.kind = e),
        (s.halfW = u.halfW),
        (s.halfL = u.halfL),
        (s.height = u.height),
        (s.mass = u.mass),
        (s.two = i_(e)),
        (s.heavy = e === 9),
        (s.seed = c.next()));
      let f = u.colors,
        p = 0;
      if (f.length > 1) {
        let e = c.next();
        p =
          e < 0.38
            ? 0
            : e < 0.62
              ? Math.min(1, f.length - 1)
              : e < 0.8
                ? Math.min(2, f.length - 1)
                : Math.floor(c.next() * f.length);
      }
      ((s.color = f[p]), y_.setHex(s.color));
      let m = 0.92 + c.next() * 0.12;
      ((s.cr = y_.r * m), (s.cg = y_.g * m), (s.cb = y_.b * m));
      let h = () => 0.85 + c.next() * 0.3;
      if (
        ((s.T = l.T * h()),
        (s.s0 = l.s0 * h()),
        (s.a = l.a * h()),
        (s.b = l.b),
        (s.vf = l.speedLo + c.next() * (l.speedHi - l.speedLo)),
        (s.latSpeed = l.latSpeed),
        (s.aLat = l.aLat),
        (s.reaction = l.reactLo + c.next() * (l.reactHi - l.reactLo)),
        (s.jumpy = s.two && c.next() < 0.3),
        (s.latPref = s.two ? -1 + c.next() * 2.1 : -0.12 + c.next() * 0.24),
        (s.midLane = s.two && c.next() < 0.2),
        s.two &&
          ((s.passenger = c.next() < 0.13),
          (s.box =
            !s.passenger && c.next() < 0.14 ? (c.next() < 0.6 ? 1 : 2) : 0),
          (s.riderJ = s.box
            ? d_[s.box - 1]
            : l_[Math.floor(c.next() * l_.length)]),
          (s.riderH = c_[Math.floor(c.next() * c_.length)]),
          (s.ponchoWearer = c.next() < 0.75),
          (s.riderAlt =
            s.passenger && c.next() < 0.5
              ? l_[Math.floor(c.next() * l_.length)]
              : u_[Math.floor(c.next() * u_.length)]),
          (s.mask = c.next() < 0.35)),
        (s.mode = 0),
        (s.link = t),
        (s.lane = n),
        (s.s = r),
        (s.lat = o.laneLat(s, t, n)),
        (s.latTarget = s.lat),
        (s.latVel = 0),
        (s.v = i),
        (s.acc = 0),
        (s.y = o.net.yAt(t, r)),
        (s.hOff = 0),
        (s.lean = 0),
        (s.pitch = 0),
        (s.yawRate = 0),
        (s.stage = 0),
        (s.two2 = !1),
        (s.committed = r + s.halfL > o.net.stopCar[t] - 0.5),
        (s.sawRed = !1),
        (s.greenT = 0),
        (s.slot = -1),
        (s.wslot = -1),
        (s.wFeeder = -1),
        (s.jNode = -1),
        (s.jFrom = -1),
        (s.blinker = 0),
        (s.blinkT = 0),
        (s.hazard = !1),
        (s.braking = !1),
        (s.panic = 0),
        (s.stuck = 0),
        (s.idle = 0),
        (s.blocked = 0),
        (s.hornCd = c.next() * 4),
        (s.ghost = 0),
        (s.bypass = 0),
        (s.bypassS = -1),
        (s.bypassR = -1),
        (s.back = 0),
        (s.backed = 0),
        (s.dodge = 0),
        (s.pathCd = c.next() * 0.3),
        (s.pathHold = !1),
        (s.obsStill = 0),
        (s.obsOncoming = !1),
        (s.ud.kind = e_[e]),
        (s.ud.crossing = !1),
        (s.ud.police = e === 7),
        (s.laneCd = c.next()),
        (s.scootCd = c.next() * 0.3),
        (s.yieldSiren = 0),
        (s.hurry = 0),
        (s.pullOut = 0),
        (s.obsGap = 1e9),
        (s.sideL = s.sideR = !1),
        (s.obsV = 0),
        (s.obsPlayer = !1),
        (s.hitCd = 0),
        (s.svx = s.svz = s.spin = 0),
        (s.rest = 0),
        (s.wrecked = !1),
        (s.burnt = !1),
        (s.abandoned = !1),
        (s.health = 100),
        (s.fireT = 0),
        (s.burnT = 0),
        (s.alert = 0),
        (s.crimeCd = 0),
        (s.hitT = -10),
        (s.hitDv = 0),
        (s.jOff = s.jOffT = 0),
        (s.jHoldS = -1),
        (s.far = !1),
        (s.lod = 0),
        (s.lodAcc = 0),
        (s.dirty = !0),
        (s.dwellS = -1),
        (s.dwellT = 0),
        o.chooseNext(s),
        o.planDwell(s),
        a)
      ) {
        let e = o.net.stopCar[t] - (r + s.halfL);
        if (o.net.sig[t] && e > 0) {
          let n = o.net.axis[t] === 0 ? `x` : `z`;
          this.ctx.signals.state(d.to, n) !== `green` &&
            (s.v = Math.min(
              s.v,
              Math.sqrt(2 * s.b * 0.7 * Math.max(0, e - 2)),
            ));
        }
        for (let e = o.hL(t); e >= 0; e = o.nextL[e]) {
          let t = o.cars[e],
            n = t.s - r - t.halfL - s.halfL;
          n > 0 &&
            n < 30 &&
            Math.abs(t.lat - s.lat) < t.halfW + s.halfW &&
            (s.v = Math.min(s.v, t.v + n * 0.25));
        }
      }
      (o.pose(s, 0), (s.prevHeading = s.heading));
      let g = s.body;
      return (
        (g.halfW = s.halfW),
        (g.halfL = s.halfL),
        (g.radius = Math.hypot(s.halfW, s.halfL)),
        (g.height = s.height),
        (g.mass = s.mass),
        (g.active = !0),
        o.syncBody(s),
        this.ctx.dynamics.add(g),
        o.active.push(s),
        o.insert(s),
        this.spawned++,
        s.two && this.nTwo++,
        this.onActivate(s),
        s
      );
    }
    despawn(e) {
      let t = this.sim;
      if (!e.active) return;
      (t.releaseSlot(e),
        t.releaseWaitSlot(e),
        (e.active = !1),
        (e.visible = !1),
        (e.freedAt = t.stamp),
        this.ctx.dynamics.remove(e.body));
      let n = t.active.indexOf(e);
      (n >= 0 &&
        ((t.active[n] = t.active[t.active.length - 1]),
        t.active.pop(),
        e.two && this.nTwo > 0 && this.nTwo--),
        this.despawned++,
        t.onDespawn(e));
    }
    bodiesAt(e, t, n, r) {
      let i = this.ctx.dynamics.query(e, n, r, this.tmpB);
      for (let e = 0; e < i; e++) {
        let n = this.tmpB[e].y;
        if (n < t + 2.5 && n > t - 2.5) return !0;
      }
      return !1;
    }
    bodyAt(e) {
      let t = this.ctx.dynamics.query(e.x, e.z, e.halfL + 0.6, this.tmpB),
        n = Math.sin(e.heading),
        r = -Math.cos(e.heading);
      for (let i = 0; i < t; i++) {
        let t = this.tmpB[i];
        if (
          t === e.body ||
          t.y > e.y + 2.5 ||
          t.y < e.y - 2.5 ||
          (t.owner === `traffic` && t.userData?.car?.mode !== 2)
        )
          continue;
        let a = t.x - e.x,
          o = t.z - e.z,
          s = a * n + o * r,
          c = a * -r + o * n,
          l = t.kind === `vehicle` ? Math.max(t.halfW, t.halfL) : t.radius;
        if (Math.abs(s) < e.halfL + l + 0.4 && Math.abs(c) < e.halfW + l + 0.3)
          return !0;
      }
      return !1;
    }
    laneFree(e, t, n, r, i) {
      let a = this.sim;
      for (let o = a.hL(e); o >= 0; o = a.nextL[o]) {
        let e = a.cars[o];
        if (
          e.active &&
          !(Math.abs(e.lat - t) > e.halfW + n + 0.25) &&
          e.s + e.halfL > r &&
          e.s - e.halfL < i
        )
          return !1;
      }
      return !0;
    }
    laneFreeExcept(e, t) {
      let n = this.sim;
      for (let r = n.hL(e); r >= 0; r = n.nextL[r]) {
        let e = n.cars[r];
        if (
          e !== t &&
          e.active &&
          !(Math.abs(e.lat - t.lat) > e.halfW + t.halfW + 0.12) &&
          Math.abs(e.s - t.s) < e.halfL + t.halfL + 0.3
        )
          return !1;
      }
      return !0;
    }
    seedQueue(e, t, n, r, i) {
      let a = this.sim,
        o = a.net,
        s = a.links[e],
        c = a.rng,
        l = o.medianHalf[e],
        u = o.curb[e],
        d = 0,
        f = 1e9;
      this.lastScoot = 0;
      for (let r = 0; r < n && d < t; r++) {
        let t = this.activate(
          0,
          e,
          s.lanes - 1,
          s.length - 12 - r * 1.2,
          0,
          !1,
        );
        if (!t) break;
        if (((t.sawRed = !0), o.box[e])) {
          if (
            ((t.lat = l + 0.5 + c.next() * (u - l - 1)),
            a.claimSlot(t, s),
            t.slot < 0)
          ) {
            this.despawn(t);
            break;
          }
          ((t.s = t.slotS - t.halfL - 0.1),
            (t.lat = t.latTarget =
              a.slotLat(e, t.slot % 16) + (t.seed - 0.5) * 0.12));
        } else {
          let n = Math.floor(r / 2),
            i = r % 2;
          ((t.s = o.stopScoot[e] - t.halfL - 0.4 - n * 2.2),
            (t.lat = t.latTarget = u - 0.55 - i * 1.05));
        }
        if (
          (a.pose(t, 0),
          a.syncBody(t),
          !this.laneFreeExcept(e, t) || this.bodyAt(t))
        ) {
          this.despawn(t);
          continue;
        }
        (o.box[e] || (f = Math.min(f, t.s - t.halfL)), d++, this.lastScoot++);
      }
      for (let n = 0; n < r && d < t; n++) {
        let t = Math.floor(c.next() * s.lanes),
          n = t < s.lanes - 1 ? l + (t + 1) * o.laneWidth : u - 0.5,
          r =
            Math.min(o.stopCar[e], f) -
            1.2 -
            Math.floor(c.next() * 3) * 2.3 -
            c.next() * 0.6;
        if (r < 16 || !this.laneFree(e, n, 0.45, r - 1.3, r + 1.3)) continue;
        let i = this.activate(0, e, s.lanes - 1, r, 0, !1);
        if (!i) break;
        if (
          ((i.sawRed = !0),
          (i.lat = i.latTarget = n + (i.seed - 0.5) * 0.25),
          a.pose(i, 0),
          a.syncBody(i),
          this.bodyAt(i))
        ) {
          this.despawn(i);
          continue;
        }
        (d++, this.lastScoot++);
      }
      for (let n = 0; n < s.lanes && d < t; n++) {
        let r = Math.floor(c.next() * (i + 1));
        if (!r) continue;
        let l = o.laneOff(e, n),
          u = Math.min(o.stopCar[e], n === s.lanes - 1 ? f - 0.6 : 1e9);
        for (let t = a.hL(e); t >= 0; t = a.nextL[t]) {
          let e = a.cars[t];
          !e.active ||
            e.two ||
            e.v > 1 ||
            Math.abs(e.lat - l) > e.halfW + 0.9 ||
            (e.s - e.halfL - 1.2 < u && (u = e.s - e.halfL - 1.2));
        }
        for (let i = 0; i < r && d < t; i++) {
          let t = this.pickKind(s.road.major);
          (i_(t) && (t = c.next() < 0.5 ? 1 : 2),
            t === 6 && n !== s.lanes - 1 && (t = 2));
          let r = this.specs[t],
            i = u - r.halfL - 0.9 - c.next() * 0.8;
          if (
            i < r.halfL + 14 ||
            !this.laneFree(e, l, r.halfW, i - r.halfL - 9, i + r.halfL + 0.5)
          )
            break;
          let a = this.activate(t, e, n, i, 0, !1);
          if (!a) break;
          if (this.bodyAt(a)) {
            this.despawn(a);
            break;
          }
          ((a.sawRed = !0), (u = i - a.halfL - 1.4), d++);
        }
      }
      return d;
    }
    nTwo = 0;
    lastScoot = 0;
    share = 0.4;
    scootWant = 0.42;
    queued = 0;
    feedT = 0;
    qRefresh = 0;
    qCursor = 0;
    qIds = [];
    cfx = 0;
    cfz = -1;
    feedQueues(e, t) {
      if ((this.feedT -= e) > 0) return;
      this.feedT = 0.3;
      let n = this.sim,
        r = n.net;
      if ((this.qRefresh -= 0.3) <= 0) {
        ((this.qRefresh = 1.5),
          r.gatherLinks(this.camX, this.camZ, 0, J.queueRange, this.qIds));
        let e = 0;
        for (let t of this.qIds) {
          let i = n.links[t];
          !r.sig[t] ||
            i.pedestrian ||
            i.length < 32 ||
            r.expr[t] ||
            Math.hypot(i.ex - this.camX, i.ez - this.camZ) > J.queueRange ||
            (this.qIds[e++] = t);
        }
        this.qIds.length = e;
      }
      let i = this.qIds.length;
      if (!i) return;
      let a = this.rk,
        o = this.share - this.shareH(),
        s = a > 0.5;
      if (o > (s ? 0.12 : 0.06)) return;
      let c = this.densH();
      for (let e = 0; e < Math.min(3, i); e++) {
        let e = this.qIds[this.qCursor++ % i],
          l = n.links[e],
          u = r.axis[e] === 0 ? `x` : `z`,
          d = this.ctx.signals.state(l.to, u),
          f = this.ctx.signals.remaining(l.to, u),
          p = d === `red` && f >= 7;
        if (!(p || (d === `red` && f >= 3) || (d !== `red` && f < 12)))
          continue;
        let m = r.box[e] === 1,
          h = 0;
        for (let t = n.hL(e); t >= 0; t = n.nextL[t]) {
          let e = n.cars[t];
          e.active && e.two && l.length - e.s < 34 && h++;
        }
        let g = Math.round(
          (m ? 3 + l.lanes * 1.5 + a * (7 + l.lanes * 4) : 1 + a * 3) * c,
        );
        if (h >= g) continue;
        let _ = Math.min(t - n.active.length, 7 + Math.round(a * 5));
        if (_ <= 0) return;
        let v = l.ex - l.dx * 9,
          y = l.ez - l.dz * 9,
          b = Math.hypot(v - this.camX, y - this.camZ),
          x = Math.hypot(v - n.px, y - n.pz),
          S = (v - this.camX) * this.cfx + (y - this.camZ) * this.cfz < -20,
          C = l.dx * (v - n.px) + l.dz * (y - n.pz) > 0;
        if (S && C && x > 60) continue;
        let w =
          b > 16 &&
          (!this.inView(v, y, 13) ||
            b > this.vMin ||
            this.occluded(l.ex - l.dx * 4, l.ez - l.dz * 4));
        if (o > 0.06 && (w || !s || x > 120)) continue;
        let T = 0;
        if (w) {
          if (!p || o > (a > 0.5 ? 0.06 : 0) || x > 120) continue;
          let t = Math.min(g - h, m ? 5 + Math.round(a * 7) : 3);
          T = this.seedQueue(
            e,
            _,
            t,
            a > 0.2 ? Math.round(a * 3 * n.rng.next()) : 0,
            +(a > 0.4),
          );
        } else {
          let t = 0;
          for (let r = n.hL(e); r >= 0; r = n.nextL[r])
            n.cars[r].active &&
              n.cars[r].two &&
              l.length - n.cars[r].s >= 34 &&
              t++;
          let i = r.feeder[e];
          if (i >= 0)
            for (let e = n.hL(i); e >= 0; e = n.nextL[e])
              n.cars[e].active && n.cars[e].two && t++;
          h + t < g && (T = this.feedUpstream(e, Math.min(_, g - h - t)));
        }
        if (T > 0) {
          this.queued += T;
          return;
        }
      }
    }
    fillExpressways(e, t) {
      if (((this.xClock += e), (this.xT -= e) > 0)) return;
      let n = this.burst > 0,
        r = n ? 0.05 : this.xUp ? (this.xWant - this.xN > 8 ? 0.12 : 0.2) : 0.3;
      this.xT = r;
      let i = this.sim,
        a = i.net,
        o = i.rng;
      if ((this.xRefresh -= r) <= 0) {
        ((this.xRefresh = 1.2),
          a.gatherLinks(this.camX, this.camZ, 0, 420, this.xIds));
        let e = 0;
        for (let t of this.xIds)
          a.expr[t] && !a.rampIn[t] && (this.xIds[e++] = t);
        this.xIds.length = e;
      }
      let s = this.xIds.length,
        c =
          (0.5 + 0.8 * this.rk) *
          Math.min(1, this.densH() * 1.15) *
          V(this.density, 0, 1.5) *
          (this.ctx.quality.level === `low` ? 0.5 : 1) *
          this.exprScale;
      if (!s || c < 0.05) {
        this.xWant = 0;
        return;
      }
      let l = -1,
        u = 0.5,
        d = 0,
        f = 0,
        p = 0,
        m = (this.xSkip ??= new Float32Array(a.nL)),
        h = this.xClock;
      for (let e = 0; e < s; e++) {
        let t = this.xIds[e],
          n = i.links[t],
          r = (this.camX - n.sx) * n.dx + (this.camZ - n.sz) * n.dz,
          a = Math.max(0, r - 420),
          o = Math.min(n.length, r + 420);
        if (o - a < 30) continue;
        let s = ((o - a) / 100) * n.lanes * c;
        if (((p += s), m[t] > h)) continue;
        let g = 0;
        for (let e = i.hL(t); e >= 0; e = i.nextL[e]) {
          let t = i.cars[e];
          t.s >= a && t.s <= o && g++;
        }
        let _ = s - g;
        _ > u && ((u = _), (l = t), (d = a), (f = o));
      }
      let g = Math.round(
        (this.xUp ? 26 : this.camY > 5 ? 10 : 4) *
          this.exprScale *
          Math.min(1, t / 100),
      );
      if (
        ((this.xWant = Math.min(g, Math.round(p))),
        l < 0 || this.xN >= this.xWant)
      )
        return;
      let _ = i.links[l],
        v = J.hazeDist - 15,
        y = this.vMinS,
        b = this.rDes - 12,
        x =
          this.xUp &&
          this.pSpeed > 6 &&
          _.dx * this.pdx + _.dz * this.pdz > 0.7,
        S = (this.camX - _.sx) * _.dx + (this.camZ - _.sz) * _.dz,
        C = (i.px - _.sx) * _.dx + (i.pz - _.sz) * _.dz;
      for (let e = 0; e < 12; e++) {
        let t = e % 3,
          r =
            t === 0
              ? S +
                (o.next() < 0.5 ? -1 : 1) * (y + o.next() * Math.max(1, v - y))
              : t === 1
                ? C + (o.next() * 2 - 1) * b
                : d + 6 + o.next() * Math.max(1, f - d - 12);
        if (r < 8 || r > _.length - 20) continue;
        let s = Math.floor(o.next() * _.lanes),
          c = a.laneOff(l, s),
          u = _.sx + _.dx * r + Le(_, c, a.side),
          p = _.sz + _.dz * r + mt(_, c, a.side),
          m = a.yAt(l, r),
          h = Math.hypot(u - this.camX, p - this.camZ);
        if (h < 30) continue;
        let g = this.camY + 1.5 < m || !this.inView(u, p, 4, m + 1),
          w = _.dx * (this.camX - u) + _.dz * (this.camZ - p) > 0;
        if (
          (g ? Math.hypot(u - i.px, p - i.pz) > b : h > v || (!n && h < y)) ||
          (!n &&
            !w &&
            !(x && !g && (u - i.px) * this.pdx + (p - i.pz) * this.pdz > 0)) ||
          !this.clearAt(l, r, c, 0.95, 2.4, 10) ||
          this.bodiesAt(u, m, p, 4)
        )
          continue;
        let T = this.pickKind(!0);
        this.activate(T, l, s, r, _.speed * (0.8 + o.next() * 0.15)) &&
          (this.expressway++, this.xN++);
        return;
      }
      m[l] = h + 2.5;
    }
    feedUpstream(e, t) {
      let n = this.sim,
        r = n.net,
        i = n.rng;
      if (t <= 0) return 0;
      let a = -1,
        o = 0;
      for (let t = 0; t < 2 && a < 0; t++) {
        let s = t === 0 ? e : r.feeder[e];
        if (s < 0) continue;
        let c = n.links[s],
          l = t === 0 ? r.stopCar[e] - 30 : c.length - 6;
        if (!(l < 10))
          for (let e = 0; e < 4; e++) {
            let e = 8 + i.next() * (l - 8),
              t = r.curb[s] - 1.1,
              u = c.sx + c.dx * e + Le(c, t, r.side),
              d = c.sz + c.dz * e + mt(c, t, r.side),
              f = Math.hypot(u - this.camX, d - this.camZ),
              p = Math.hypot(u - n.px, d - n.pz);
            if (
              !(f < 14 || p < 26) &&
              !(
                this.inView(u, d, 3) &&
                f <
                  (this.rk > 0.3
                    ? Math.max(J.driveSpawnMin, this.vMin * 0.62)
                    : this.vMin)
              )
            ) {
              ((a = s), (o = e));
              break;
            }
          }
      }
      if (a < 0) return 0;
      let s = n.links[a],
        c = Math.min(t, 2 + Math.floor(i.next() * (2 + this.rk * 7))),
        l = 0,
        u = o,
        d = r.laneOff(a, s.lanes - 1) - 1.1,
        f = r.curb[a] - 0.5;
      for (let e = 0; e < c && u > 4; e++) {
        let e = d + i.next() * (f - d);
        if (!this.laneFree(a, e, 0.45, u - 1.6, u + 1.6)) {
          u -= 2.6;
          continue;
        }
        let t = this.activate(
          0,
          a,
          s.lanes - 1,
          u,
          s.speed * (0.75 + i.next() * 0.15),
        );
        if (!t) break;
        if (
          ((t.lat = t.latTarget = e),
          n.pose(t, 0),
          n.syncBody(t),
          this.bodyAt(t))
        ) {
          this.despawn(t);
          break;
        }
        (l++, (u -= 2.2 + i.next() * 2.4));
      }
      let p = this.rk > 0.2 ? Math.floor(i.next() * (1 + this.rk * 1.6)) : 0;
      for (let e = 0; e < p; e++) {
        let t = s.lanes > 1 ? Math.floor(i.next() * (s.lanes - 1)) : 0,
          c = this.pickKind(s.road.major);
        (i_(c) || (c === 6 && t !== s.lanes - 1)) &&
          (c = i.next() < 0.4 ? 1 : 2);
        let u = this.specs[c],
          d = o - 3 - e * 9 - i.next() * 5;
        if (d < u.halfL + 3) break;
        let f = r.laneOff(a, t),
          p = s.sx + s.dx * d + Le(s, f, r.side),
          m = s.sz + s.dz * d + mt(s, f, r.side);
        if (
          (this.inView(p, m, u.halfL + 1) &&
            Math.hypot(p - this.camX, m - this.camZ) < this.vMin) ||
          Math.hypot(p - n.px, m - n.pz) < 24 ||
          !this.laneFree(a, f, u.halfW, d - u.halfL - 10, d + u.halfL + 8)
        )
          continue;
        let h = this.activate(c, a, t, d, s.speed * 0.8);
        if (!h) break;
        if (this.bodyAt(h)) {
          this.despawn(h);
          continue;
        }
        l++;
      }
      return l;
    }
    initialFill() {
      let e = this.sim;
      this.raysLeft = 0;
      let t = this.target();
      if (t <= 0) return;
      (this.updateView(), e.rebuildLists(), (this.rk = this.rushK()));
      let n = e.px,
        r = e.pz,
        i = e.net,
        a = e.rng,
        o = this.rk,
        s = [];
      i.gatherLinks(n, r, 0, 170, s);
      let c = !1;
      try {
        c = !!this.ctx.vehicles.playerVehicle;
      } catch {
        c = !1;
      }
      let l = Math.floor(t * (c ? 0.3 + o * 0.1 : 0.45 + o * 0.15)),
        u = Math.round(t * this.shareH() * 0.62),
        d = 0,
        f = 0,
        p = (t) => {
          let i = e.links[t],
            a = Math.hypot(i.ex - n, i.ez - r),
            o = i.ex - i.dx * 15,
            s = i.ez - i.dz * 15;
          return a + (this.inView(o, s, 8) ? 0 : 400);
        };
      s.sort((e, t) => p(e) - p(t));
      for (let t of s) {
        if (d >= l) break;
        let s = e.links[t];
        if (!i.sig[t] || s.pedestrian || i.expr[t]) continue;
        let c = i.axis[t] === 0 ? `x` : `z`;
        if (
          this.ctx.signals.state(s.to, c) === `green` ||
          Math.hypot(s.ex - n, s.ez - r) < 8
        )
          continue;
        let p = i.box[t]
            ? 3 +
              Math.floor(a.next() * (s.lanes * 3)) +
              Math.round(o * (3 + s.lanes * 2))
            : 1 + Math.floor(a.next() * (3 + o * 2)),
          m = u - f,
          h = Math.max(0, Math.min(p, m)),
          g = Math.max(
            0,
            Math.min(Math.round(o * (1 + a.next() * s.lanes * 1.5)), m - h),
          );
        ((d += this.seedQueue(t, l - d, h, g, 2)), (f += this.lastScoot));
      }
      this.refreshCandidates(n, r);
      let m = 0;
      for (; e.active.length < t && m++ < t * 40;) this.trySpawn(!0, 15);
      if (i.nL > i.nPlan) {
        let n = this.burst;
        ((this.burst = 1), (this.xRefresh = 0));
        let r = 0;
        for (let t of e.active)
          (t.mode === 0 ? i.expr[t.link] === 1 : e.aboveGround(t) > 1.2) && r++;
        this.xN = r;
        for (
          let e = 0;
          e < 60 &&
          ((this.xT = 0), this.fillExpressways(0, t), !(this.xN >= this.xWant));
          e++
        );
        this.burst = n;
      }
      e.simulate(3, 0.1);
      for (let t of e.active) t.dirty = !0;
    }
  },
  E_ = 16 / 1024,
  D_ = 1 - 16 / 1024,
  O_ = new Me(),
  k_ = class {
    P = [];
    N = [];
    C = [];
    D = [];
    VV = [];
    r = 1;
    g = 1;
    b = 1;
    paint = 0;
    light = 0;
    rough = 0.6;
    metal = 0;
    vvar = 0;
    style(e, t = 0, n = 0, r = 0.6, i = 0, a = 0) {
      return (
        O_.setHex(e),
        (this.r = O_.r),
        (this.g = O_.g),
        (this.b = O_.b),
        (this.paint = t),
        (this.light = n),
        (this.rough = r),
        (this.metal = i),
        (this.vvar = a),
        this
      );
    }
    tri(e, t, n, r) {
      let i = t[0] - e[0],
        a = t[1] - e[1],
        o = t[2] - e[2],
        s = n[0] - e[0],
        c = n[1] - e[1],
        l = n[2] - e[2],
        u = a * l - o * c,
        d = o * s - i * l,
        f = i * c - a * s,
        p = Math.hypot(u, d, f);
      if (p < 1e-10) return;
      ((u /= p), (d /= p), (f /= p));
      let m = t,
        h = n;
      r &&
        u * r[0] + d * r[1] + f * r[2] < 0 &&
        ((m = n), (h = t), (u = -u), (d = -d), (f = -f));
      for (let t of [e, m, h])
        (this.P.push(t[0], t[1], t[2]),
          this.N.push(u, d, f),
          this.C.push(this.r, this.g, this.b),
          this.D.push(this.paint, this.light, this.rough, this.metal),
          this.VV.push(this.vvar));
    }
    quad(e, t, n, r, i) {
      (this.tri(e, t, n, i), this.tri(e, n, r, i));
    }
    frustum(e, t, n, r, i = !0) {
      let [a, o, s, c] = t,
        [l, u, d, f] = r,
        p = [
          [a - s, e, o - c],
          [a + s, e, o - c],
          [a + s, e, o + c],
          [a - s, e, o + c],
          [l - d, n, u - f],
          [l + d, n, u - f],
          [l + d, n, u + f],
          [l - d, n, u + f],
        ],
        m = (a + l) / 2,
        h = (e + n) / 2,
        g = (o + u) / 2,
        _ = (e, t, n, r) => {
          let i = (p[e][0] + p[t][0] + p[n][0] + p[r][0]) / 4 - m,
            a = (p[e][1] + p[t][1] + p[n][1] + p[r][1]) / 4 - h,
            o = (p[e][2] + p[t][2] + p[n][2] + p[r][2]) / 4 - g;
          this.quad(p[e], p[t], p[n], p[r], [i, a, o]);
        };
      (_(4, 5, 6, 7),
        i || _(0, 1, 2, 3),
        _(0, 1, 5, 4),
        _(3, 2, 6, 7),
        _(0, 3, 7, 4),
        _(1, 2, 6, 5));
    }
    box(e, t, n, r, i, a, o = !0) {
      this.frustum(
        t - i / 2,
        [e, n, r / 2, a / 2],
        t + i / 2,
        [e, n, r / 2, a / 2],
        o,
      );
    }
    limb(e, t, n) {
      let r = t[0] - e[0],
        i = t[1] - e[1],
        a = t[2] - e[2],
        o = Math.hypot(r, i, a) || 1,
        s = r / o,
        c = i / o,
        l = a / o,
        u = -l,
        d = 0,
        f = s,
        p = Math.hypot(u, d, f);
      (p < 1e-4 && ((u = 1), (d = 0), (f = 0), (p = 1)), (u /= p), (f /= p));
      let m = c * f - l * d,
        h = l * u - s * f,
        g = s * d - c * u,
        _ = n / 2,
        v = (e, t, n) => [
          e[0] + (u * t + m * n) * _,
          e[1] + (d * t + h * n) * _,
          e[2] + (f * t + g * n) * _,
        ],
        y = [v(e, -1, -1), v(e, 1, -1), v(e, 1, 1), v(e, -1, 1)],
        b = [v(t, -1, -1), v(t, 1, -1), v(t, 1, 1), v(t, -1, 1)],
        x = (e[0] + t[0]) / 2,
        S = (e[1] + t[1]) / 2,
        C = (e[2] + t[2]) / 2;
      for (let e = 0; e < 4; e++) {
        let t = (e + 1) % 4,
          n = [
            (y[e][0] + y[t][0]) / 2 - x,
            (y[e][1] + y[t][1]) / 2 - S,
            (y[e][2] + y[t][2]) / 2 - C,
          ];
        this.quad(y[e], y[t], b[t], b[e], n);
      }
      this.quad(b[0], b[1], b[2], b[3], [s, c, l]);
    }
    wheel(e, t, n, r, i, a = 6) {
      let o = [];
      for (let e = 0; e < a; e++) {
        let t = ((e + 0.5) / a) * Math.PI * 2;
        o.push([Math.cos(t) * r, Math.sin(t) * r]);
      }
      let s = e - i / 2,
        c = e + i / 2;
      for (let e = 0; e < a; e++) {
        let [r, i] = o[e],
          [l, u] = o[(e + 1) % a];
        this.quad(
          [s, t + i, n + r],
          [c, t + i, n + r],
          [c, t + u, n + l],
          [s, t + u, n + l],
          [0, (i + u) / 2, (r + l) / 2],
        );
      }
      for (let [e, r] of [
        [-1, s],
        [1, c],
      ])
        for (let i = 1; i + 1 < a; i++)
          this.tri(
            [r, t + o[0][1], n + o[0][0]],
            [r, t + o[i][1], n + o[i][0]],
            [r, t + o[i + 1][1], n + o[i + 1][0]],
            [e, 0, 0],
          );
    }
    ring(e, t, n, r, i, a = 0) {
      let [o, s, c, l] = t,
        [u, d, f, p] = r,
        m = [],
        h = [];
      for (let t = 0; t < i; t++) {
        let r = ((t + 0.5) / i) * Math.PI * 2,
          a = Math.cos(r),
          g = Math.sin(r);
        (m.push([o + a * c, e, s + g * l]), h.push([u + a * f, n, d + g * p]));
      }
      for (let e = 0; e < i; e++) {
        let t = (e + 1) % i,
          n = ((e + 1) / i) * Math.PI * 2;
        this.quad(m[e], m[t], h[t], h[e], [Math.cos(n), 0, Math.sin(n)]);
      }
      if (a >= 0) {
        let e = [u, n + a, d];
        for (let t = 0; t < i; t++)
          this.tri(h[t], h[(t + 1) % i], e, [0, 1, 0]);
      }
    }
    build(e) {
      let t = new pe(),
        n = this.P.length / 3,
        r = new Float32Array(n * 2);
      for (let e = 0; e < n; e++) ((r[e * 2] = E_), (r[e * 2 + 1] = D_));
      return (
        t.setAttribute(`position`, new j(this.P, 3)),
        t.setAttribute(`normal`, new j(this.N, 3)),
        t.setAttribute(`color`, new j(this.C, 3)),
        t.setAttribute(`uv`, new j(r, 2)),
        t.setAttribute(`vdata`, new j(this.D, 4)),
        t.setAttribute(`vvar`, new j(this.VV, 1)),
        t.computeBoundingSphere(),
        (t.name = e),
        t
      );
    }
  },
  A_ = 1776670,
  j_ = 1315860,
  M_ = 2832981,
  N_ = 14067847,
  P_ = 1712167,
  F_ = 1,
  I_ = 2;
