// tokyo/assets/actors-Bnj6Q1ad 57 — math
// Lines 27381-29976 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var ug = class {
    plan;
    links;
    nL;
    nN;
    axis;
    major;
    sig;
    deadEnd;
    box;
    stopCar;
    stopScoot;
    twoStage;
    turnStart;
    turnCount;
    turnOut;
    turnType;
    opposing;
    feeder;
    busStop;
    curb;
    medianHalf;
    side;
    laneWidth;
    nPlan;
    expr;
    thru;
    rampIn;
    rampSide;
    profStart;
    profCount;
    prof;
    gx0;
    gz0;
    gw;
    gh;
    cellStart;
    cellLinks;
    stamp;
    stampN = 1;
    constructor(e, t) {
      this.plan = e;
      let n = e.links,
        r = e.nodes,
        i = (this.side = e.side);
      this.laneWidth = e.laneWidth;
      let a = null;
      if (t?.expressways?.length && t.groundAt)
        try {
          ((a = tg(e, t.expressways, n.length, r.length, t.groundAt)),
            a.links.length || (a = null));
        } catch (e) {
          (console.warn(`[traffic] expressway lanes skipped`, e), (a = null));
        }
      let o = a ? n.concat(a.links) : n;
      ((this.links = o), (this.nPlan = n.length));
      let s = (this.nL = o.length);
      if (
        ((this.nN = r.length + (a ? a.nodes.length : 0)),
        (this.expr = new Uint8Array(s)),
        (this.thru = new Uint8Array(s)),
        (this.rampIn = new Uint8Array(s)),
        (this.rampSide = new Uint8Array(s)),
        a)
      )
        for (let e of a.side) this.rampSide[e] = 1;
      ((this.profStart = new Int32Array(s)),
        (this.profCount = new Int32Array(s)),
        (this.prof = new Float32Array(a ? a.prof : [])),
        (this.axis = new Uint8Array(s)),
        (this.major = new Uint8Array(s)),
        (this.sig = new Uint8Array(s)),
        (this.deadEnd = new Uint8Array(s)),
        (this.box = new Uint8Array(s)),
        (this.stopCar = new Float32Array(s)),
        (this.stopScoot = new Float32Array(s)),
        (this.twoStage = new Uint8Array(s)),
        (this.turnStart = new Int32Array(s)),
        (this.turnCount = new Uint8Array(s)),
        (this.opposing = new Int32Array(s).fill(-1)),
        (this.feeder = new Int32Array(s).fill(-1)),
        (this.busStop = new Float32Array(s).fill(-1)),
        (this.curb = new Float32Array(s)),
        (this.medianHalf = new Float32Array(s)));
      let c = [],
        l = [];
      for (let e of o) {
        if (e.id >= this.nPlan) {
          this.virtualLink(e, a, r, c, l);
          continue;
        }
        let n = r[e.to];
        ((this.axis[e.id] = e.road.axis === `x` ? 0 : 1),
          (this.major[e.id] = +!!e.road.major),
          (this.sig[e.id] = +!!n.signal),
          (this.deadEnd[e.id] = +(n.kind === `end`)),
          (this.curb[e.id] = e.road.halfWidth),
          (this.medianHalf[e.id] = e.road.median * 0.5));
        let s = t?.boxDepth ?? J.boxDepth,
          u;
        if (t?.hasBox) {
          let n = !1;
          try {
            n = t.hasBox(e.id);
          } catch {
            n = !1;
          }
          u = n && e.length > s + 10 && !e.pedestrian;
        } else
          u =
            i > 0 &&
            n.signal &&
            e.road.major &&
            e.lanes >= 2 &&
            e.length > 28 &&
            !e.pedestrian;
        ((this.box[e.id] = +!!u),
          (this.stopScoot[e.id] = Math.max(0.5, e.length - 0.4)),
          (this.stopCar[e.id] = u
            ? e.length - s - 0.45
            : Math.max(0.5, e.length - 0.4)),
          (this.twoStage[e.id] = (
            i > 0
              ? u && (!t?.turnLinks || t.turnLinks.has(e.id))
              : n.signal && e.lanes >= 3 && !e.pedestrian
          )
            ? 1
            : 0),
          (this.turnStart[e.id] = c.length));
        let d = 0;
        for (let t of n.out) {
          let n = o[t];
          if (n.pedestrian) continue;
          let r = Dt(z(n.heading - e.heading), i);
          (c.push(t), l.push(r), d++);
        }
        let f = a?.rampOut.get(n.id);
        if (f)
          for (let t of f) {
            let n = o[t];
            if (this.rampSide[t]) {
              let r = Dt(z(n.heading - e.heading), i);
              if (r === sg) continue;
              (c.push(t), l.push(r === ig ? ag : r), d++);
              continue;
            }
            !lg(n.road, e.road) ||
              Math.abs(z(n.heading - e.heading)) > 0.35 ||
              (c.push(t), l.push(ig), d++);
          }
        this.turnCount[e.id] = d;
        for (let t of n.in) {
          let n = o[t];
          n.id !== e.id &&
            lg(n.road, e.road) &&
            Math.abs(z(n.heading - e.heading)) > 2.8 &&
            (this.opposing[e.id] = n.id);
        }
        let p = r[e.from];
        for (let t of p.in) {
          let n = o[t];
          lg(n.road, e.road) &&
            Math.abs(z(n.heading - e.heading)) < 0.35 &&
            (this.feeder[e.id] = n.id);
        }
        !t?.busStops &&
          e.road.major &&
          e.length > 70 &&
          !e.pedestrian &&
          qe(e.id, `bus`) % 3 == 0 &&
          (this.busStop[e.id] = e.length * 0.52);
      }
      if (
        ((this.turnOut = Int32Array.from(c)),
        (this.turnType = Uint8Array.from(l)),
        t?.busStops)
      )
        for (let n of t.busStops) {
          let t = e.nearestLink(n.curbX, n.curbZ);
          if (!t || t.dist > 6) continue;
          let r = t.link;
          if (Math.abs(z(r.heading - n.busHeading)) > 0.4) continue;
          let i = (n.curbX - r.sx) * r.dx + (n.curbZ - r.sz) * r.dz;
          i < 18 ||
            i > r.length - 16 ||
            ((this.busStop[r.id] < 0 || i < this.busStop[r.id]) &&
              (this.busStop[r.id] = i));
        }
      let u = e.bounds;
      ((this.gx0 = Math.floor((u.minX - 40) / cg)),
        (this.gz0 = Math.floor((u.minZ - 40) / cg)),
        (this.gw = Math.floor((u.maxX + 40) / cg) - this.gx0 + 1),
        (this.gh = Math.floor((u.maxZ + 40) / cg) - this.gz0 + 1));
      let d = [];
      for (let e = 0; e < this.gw * this.gh; e++) d.push([]);
      for (let e of o) {
        if (e.pedestrian) continue;
        let t = Math.max(1, Math.ceil(e.length / 16)),
          n = -1;
        for (let r = 0; r <= t; r++) {
          let i = (e.length * r) / t,
            a = e.sx + e.dx * i,
            o = e.sz + e.dz * i,
            s = this.cellOf(a, o);
          if (s < 0 || s === n) continue;
          let c = d[s];
          (c[c.length - 1] !== e.id && c.push(e.id), (n = s));
        }
      }
      this.cellStart = new Int32Array(d.length + 1);
      let f = 0;
      for (let e = 0; e < d.length; e++)
        ((this.cellStart[e] = f), (f += d[e].length));
      ((this.cellStart[d.length] = f), (this.cellLinks = new Int32Array(f)));
      let p = 0;
      for (let e of d) for (let t of e) this.cellLinks[p++] = t;
      this.stamp = new Uint32Array(s);
    }
    virtualLink(e, t, n, r, i) {
      let a = e.id - this.nPlan,
        o = e.id;
      ((this.expr[o] = 1),
        (this.axis[o] = e.road.axis === `x` ? 0 : 1),
        (this.major[o] = 1),
        (this.curb[o] = t.curb[a]),
        (this.medianHalf[o] = t.medianHalf[a]),
        (this.stopScoot[o] = Math.max(0.5, e.length - 0.4)),
        (this.stopCar[o] = Math.max(0.5, e.length - 0.4)),
        (this.profStart[o] = t.profStart[a]),
        (this.profCount[o] = t.profCount[a]),
        (this.turnStart[o] = r.length));
      let s = 0;
      if (e.to >= n.length) {
        let a = t.nodes[e.to - n.length];
        a.kind === `end` ? (this.deadEnd[o] = 1) : (this.thru[o] = 1);
        for (let e of a.out)
          (r.push(e),
            i.push(this.rampSide[o] || this.rampSide[e] ? ag : ig),
            s++);
      } else {
        let t = n[e.to];
        this.sig[o] = +!!t.signal;
        for (let n of t.out) {
          let t = this.links[n];
          if (t.pedestrian) continue;
          let a = Dt(z(t.heading - e.heading), this.side);
          (a === ig || a === (this.rampSide[o] ? ag : og)) &&
            (r.push(n), i.push(a), s++);
        }
        for (let n of t.in) {
          let t = this.links[n];
          lg(t.road, e.road) &&
            Math.abs(z(t.heading - e.heading)) > 2.8 &&
            (this.opposing[o] = t.id);
        }
      }
      (e.from < n.length && e.to >= n.length && (this.rampIn[o] = 1),
        (this.turnCount[o] = s));
    }
    yAt(e, t) {
      if (!this.expr[e]) return 0;
      let n = this.profCount[e],
        r = this.profStart[e],
        i = t / 2;
      (i < 0 && (i = 0), i > n - 1 && (i = n - 1));
      let a = Math.floor(i),
        o = a + 1 < n ? a + 1 : a,
        s = i - a;
      return this.prof[r + a] * (1 - s) + this.prof[r + o] * s;
    }
    gradeAt(e, t) {
      return this.expr[e] ? (this.yAt(e, t + 1) - this.yAt(e, t - 1)) * 0.5 : 0;
    }
    cellOf(e, t) {
      let n = Math.floor(e / cg) - this.gx0,
        r = Math.floor(t / cg) - this.gz0;
      return n < 0 || r < 0 || n >= this.gw || r >= this.gh
        ? -1
        : r * this.gw + n;
    }
    laneOff(e, t) {
      return Fe(this.medianHalf[e], t, this.laneWidth);
    }
    gatherLinks(e, t, n, r, i) {
      i.length = 0;
      let a = ++this.stampN,
        o = Math.floor((e - r) / cg) - this.gx0,
        s = Math.floor((e + r) / cg) - this.gx0,
        c = Math.floor((t - r) / cg) - this.gz0,
        l = Math.floor((t + r) / cg) - this.gz0,
        u = this.links,
        d = r * r,
        f = n * n;
      for (let n = Math.max(0, c); n <= Math.min(this.gh - 1, l); n++)
        for (let r = Math.max(0, o); r <= Math.min(this.gw - 1, s); r++) {
          let o = n * this.gw + r;
          for (let n = this.cellStart[o]; n < this.cellStart[o + 1]; n++) {
            let r = this.cellLinks[n];
            if (this.stamp[r] === a) continue;
            this.stamp[r] = a;
            let o = u[r],
              s = e - o.sx,
              c = t - o.sz,
              l = s * o.dx + c * o.dz;
            l = l < 0 ? 0 : l > o.length ? o.length : l;
            let p = o.sx + o.dx * l - e,
              m = o.sz + o.dz * l - t;
            if (p * p + m * m > d) continue;
            let h = o.sx - e,
              g = o.sz - t,
              _ = o.ex - e,
              v = o.ez - t;
            (h * h + g * g < f && _ * _ + v * v < f) || i.push(r);
          }
        }
      return i.length;
    }
  },
  dg = [`x`, `z`],
  fg = [5, 2, 4, 1, 3, 0],
  pg = class {
    ctx;
    net;
    side;
    waitInBox;
    links;
    cars = [];
    active = [];
    rng = new Pe(8002542);
    holds = [];
    stamp = 1;
    headL;
    stampL;
    headJ;
    stampJ;
    headN;
    stampN;
    occ;
    nextL;
    nextJ;
    nextN;
    inL;
    inJ;
    inN;
    waitSince;
    boxMask;
    wMask;
    now = 0;
    frame = 0;
    dt = 0.016;
    rain = 0;
    congest = 0;
    px = 0;
    pz = 0;
    py = 0;
    sirens = new Float32Array(12);
    nSirens = 0;
    playerVehicleBody = null;
    minInt = 0;
    cGap = 0;
    cVl = 0;
    cS0 = 0;
    v0 = 0;
    dStopF = 0;
    dEntryF = 0;
    why = 0;
    lg = 1e9;
    lv = 0;
    laneAhead = 1e9;
    yielding = !1;
    tmpBodies = [];
    senseSelf = null;
    senseLevel = !1;
    senseY = 0;
    senseFilter = (e) => {
      if (e === this.senseSelf) return !0;
      if (this.senseLevel) {
        let t = e.y - this.senseY;
        if (t > 2.2 || t < -2.2) return !1;
      }
      if (e.owner !== `traffic`) return !0;
      let t = e.userData;
      return (
        !!t && (t.crossing === !0 || (t.car !== void 0 && t.car.mode === 2))
      );
    };
    pedFilter = (e) => e.kind === `ped` || e.kind === `player`;
    hits = 0;
    onDespawn = () => {};
    onHorn = () => {};
    constructor(e, t, n) {
      this.ctx = e;
      let r;
      try {
        let t = e.streets;
        if (t && t.ready !== !1 && typeof t.hasScooterBox == `function`) {
          let n = t.turnBoxes;
          r = {
            hasBox: (e) => t.hasScooterBox(e),
            boxDepth: t.scooterBoxDepth,
            busStops: t.busStops?.length ? t.busStops : void 0,
            turnLinks: n?.length ? new Set(n.map((e) => e.linkId)) : void 0,
            expressways:
              e.params.get(`trafficExpwy`) !== `0` && t.expressways?.length
                ? t.expressways
                : void 0,
            groundAt:
              typeof e.groundAt == `function`
                ? (t, n, r, i) => e.groundAt(t, n, r, i)
                : void 0,
          };
        }
      } catch {
        r = void 0;
      }
      ((this.net = new ug(e.plan, r)),
        (this.side = this.net.side),
        (this.waitInBox = Ze(this.side)),
        (this.links = this.net.links));
      let i = this.net.nL,
        a = this.net.nN;
      ((this.headL = new Int32Array(i)),
        (this.stampL = new Uint32Array(i)),
        (this.headJ = new Int32Array(i)),
        (this.stampJ = new Uint32Array(i)),
        (this.headN = new Int32Array(a)),
        (this.stampN = new Uint32Array(a)),
        (this.occ = new Int16Array(a * 2)),
        (this.waitSince = new Float32Array(a * 2)),
        (this.boxMask = new Uint32Array(i)),
        (this.wMask = new Uint8Array(i)),
        (this.nextL = new Int32Array(t)),
        (this.nextJ = new Int32Array(t)),
        (this.nextN = new Int32Array(t)),
        (this.inL = new Uint32Array(t)),
        (this.inJ = new Uint32Array(t)),
        (this.inN = new Uint32Array(t)));
      for (let e = 0; e < t; e++) {
        let t = n(e);
        this.cars.push(new fm(e, t));
      }
      mm(this, [
        `now`,
        `dt`,
        `rain`,
        `congest`,
        `px`,
        `pz`,
        `py`,
        `senseY`,
        `minInt`,
        `lg`,
        `lv`,
        `laneAhead`,
        `cGap`,
        `cVl`,
        `cS0`,
        `v0`,
        `dStopF`,
        `dEntryF`,
      ]);
    }
    hL(e) {
      return this.stampL[e] === this.stamp ? this.headL[e] : -1;
    }
    hJ(e) {
      return this.stampJ[e] === this.stamp ? this.headJ[e] : -1;
    }
    hN(e) {
      return this.stampN[e] === this.stamp ? this.headN[e] : -1;
    }
    occOf(e, t) {
      return this.stampN[e] === this.stamp ? this.occ[e * 2 + t] : 0;
    }
    insert(e) {
      let t = this.stamp,
        n = e.idx;
      if (e.mode === 0 || e.mode === 3) {
        if (this.inL[n] !== t) {
          this.inL[n] = t;
          let r = e.link;
          (this.stampL[r] !== t && ((this.stampL[r] = t), (this.headL[r] = -1)),
            (this.nextL[n] = this.headL[r]),
            (this.headL[r] = n));
        }
        e.mode === 3 && e.jNode >= 0 && this.insertNode(e, e.jNode, t);
      } else if (e.mode === 1) {
        let r = e.next;
        (r >= 0 &&
          this.inJ[n] !== t &&
          ((this.inJ[n] = t),
          this.stampJ[r] !== t && ((this.stampJ[r] = t), (this.headJ[r] = -1)),
          (this.nextJ[n] = this.headJ[r]),
          (this.headJ[r] = n)),
          e.jNode >= 0 && this.insertNode(e, e.jNode, t));
      }
    }
    insertNode(e, t, n) {
      let r = e.idx;
      this.inN[r] !== n &&
        ((this.inN[r] = n),
        this.stampN[t] !== n &&
          ((this.stampN[t] = n),
          (this.headN[t] = -1),
          (this.occ[t * 2] = 0),
          (this.occ[t * 2 + 1] = 0)),
        (this.nextN[r] = this.headN[t]),
        (this.headN[t] = r),
        e.mode === 1 && this.occ[t * 2 + e.jAxis]++);
    }
    rebuildLists() {
      this.stamp++;
      let e = this.active;
      for (let t = 0; t < e.length; t++) this.insert(e[t]);
    }
    update(e) {
      ((this.dt = e),
        (this.now = this.ctx.time.elapsed),
        this.frame++,
        this.rebuildLists());
      let t = this.active;
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        r.lodAcc += e;
        let i =
          r.camDist < J.fullRate || r.plDist < 25
            ? 1
            : r.camDist < J.lodFar
              ? 2
              : 4;
        if (
          (i === 2 && r.camDist > J.halfRate && !r.visible && (i = 4),
          i > 1 && (this.frame + r.idx) % i !== 0)
        ) {
          r.v > 0.05 &&
            r.visible &&
            (r.mode === 0 || r.mode === 1) &&
            ((r.x += Math.sin(r.heading) * r.v * e),
            (r.z -= Math.cos(r.heading) * r.v * e),
            (r.dirty = !0));
          continue;
        }
        let a = r.lodAcc > 0.15 ? 0.15 : r.lodAcc;
        ((r.lodAcc = 0),
          a === e
            ? this.step(r, e, r.camDist < J.lodNear)
            : this.step(r, a, r.camDist < J.lodNear));
      }
    }
    simulate(e, t = 0.1) {
      let n = Math.round(e / t);
      for (let e = 0; e < n; e++) {
        ((this.dt = t), this.frame++, this.rebuildLists());
        let e = this.active;
        for (let n = 0; n < e.length; n++) this.step(e[n], t, !1);
      }
    }
    step(e, t, n) {
      if (
        ((e.hornCd -= t),
        (e.hitCd -= t),
        (e.laneCd -= t),
        (e.scootCd -= t),
        e.panic > 0 && (e.panic -= t),
        e.ghost > 0 && (e.ghost -= t),
        e.yieldSiren > 0 && (e.yieldSiren -= t),
        e.hurry > 0 && (e.hurry -= t),
        e.dodge > 0 && (e.dodge -= t),
        e.crimeCd > 0 && (e.crimeCd -= t),
        e.alert > 0 && (e.alert -= t),
        e.blinkT > 0 && (e.blinkT -= t) <= 0 && e.mode === 0 && (e.blinker = 0),
        e.mode === 2)
      )
        return this.stepFree(e, t);
      if (e.mode === 3) return this.stepWait2(e, t);
      if (e.back > 0 && e.mode === 0) return this.stepBack(e, t);
      ((this.minInt = 0), (this.why = 0), (this.lg = 1e9), (this.lv = 0));
      let r = this.links[e.link],
        i =
          (e.mode === 1 && e.next >= 0
            ? Math.min(r.speed, this.links[e.next].speed)
            : r.speed) * e.vf;
      if (
        (this.rain > 0.2 && (i *= 1 - 0.12 * this.rain),
        this.congest > 0 &&
          r.road.major &&
          (i *= 1 - this.congest * (e.two ? 0.12 : 0.3)),
        e.panic > 0 ? (i *= 1.45) : e.hurry > 0 && (i *= 1.15),
        e.yieldSiren > 0 && (i *= 0.35),
        this.nSirens && e.mode === 0 && this.yieldToSirens(e),
        (this.v0 = i),
        e.mode === 0
          ? this.linkConstraints(e, r, t, n)
          : this.juncConstraints(e),
        (i = this.v0),
        n && e.camDist < J.senseRange)
      ) {
        let n =
          e.obsOncoming || (e.v > 8 && e.camDist < 70)
            ? 1
            : e.camDist < 90
              ? 2
              : 4;
        (n === 1 || (this.frame + e.idx) % n === 0
          ? this.sense(e)
          : e.obsGap < 1e8 && (e.obsGap -= (e.v - e.obsV) * t),
          e.obsGap < 1e8 &&
            ((this.cGap = e.obsGap),
            (this.cVl = e.obsV),
            (this.cS0 = e.two ? 1 : e.bypass === 0 ? 1.6 : 0.5),
            this.cons(e, 3)),
          e.obsGap < 30 && e.obsV < 0.3 && e.obsV > -0.3
            ? (e.obsStill += t)
            : (e.obsStill = 0));
      } else
        ((e.obsGap = 1e9),
          (e.obsOncoming = !1),
          (e.obsStill = 0),
          (e.sideL = e.sideR = !1));
      (this.holds.length && this.holdConstraints(e),
        e.mode === 1 && this.junctionSidestep(e, t));
      let a = e.v,
        o;
      if (a <= i) {
        let t = i > 0.1 ? a / i : 1;
        o = e.a * (1 - t * t * t * t);
      } else o = Math.max(-e.b, e.a * (1 - (a / i) ** 4));
      let s = o + this.minInt;
      (s < -9 && (s = -9), s > e.a && (s = e.a), (e.acc = s));
      let c = a + s * t;
      c < 0 && (c = 0);
      let l = (a + c) * 0.5 * t;
      ((e.v = c),
        (e.braking = s < -0.9 || c < 0.2),
        this.bookkeeping(e, t),
        e.mode === 0
          ? ((e.s += l),
            this.lateral(e, t),
            e.s >= r.length && this.enterJunction(e, e.s - r.length))
          : ((e.js += l),
            e.js >= e.jLen
              ? this.exitJunction(e, e.js - e.jLen)
              : e.stage === 1 &&
                e.jLen - e.js < 0.6 &&
                e.v < 1.2 &&
                ((e.js = e.jLen), this.pose(e, t), this.exitJunction(e, 0))),
        e.active && this.pose(e, t));
    }
    cons(e, t) {
      let n = this.cGap,
        r = this.cVl,
        i = this.cS0,
        a = e.v,
        o = a - r,
        s = a * e.T + (a * o) / (2 * Math.sqrt(e.a * e.b));
      (s < 0 && (s = 0), (s += i));
      let c = s / (n > 0.05 ? n : 0.05),
        l = -e.a * c * c;
      l < this.minInt && ((this.minInt = l), (this.why = t));
    }
    linkConstraints(e, t, n, r) {
      let i = this.v0,
        a = this.net,
        o = e.link,
        s = t.length - e.s;
      (this.leaderLink(e),
        this.lg < 1e9 &&
          ((this.cGap = this.lg),
          (this.cVl = this.lv),
          (this.cS0 = e.s0),
          this.cons(e, 1)));
      let c,
        l = e.s + e.halfL;
      c = e.two
        ? e.slot >= 0
          ? e.slotS
          : a.box[o] && l < a.stopCar[o] + 0.3
            ? a.stopCar[o]
            : a.stopScoot[o]
        : a.stopCar[o];
      let u = c - l;
      !e.committed && u < -0.4 && (e.committed = !0);
      let d = !0;
      if (!e.committed) {
        let r = (e.v * e.v) / (2 * e.b);
        (u < 40 || u < r * 1.5 + 12) &&
          ((this.dStopF = u),
          (d = this.canEnter(e, t, n)),
          d
            ? u < 0.6 && (e.committed = !0)
            : ((this.cGap = u),
              (this.cVl = 0),
              (this.cS0 = 0.25),
              this.cons(e, this.yielding ? 7 : 2)));
      }
      e.next >= 0 && !e.committed && s < 30 && r
        ? ((e.pathCd -= n) <= 0 &&
            ((e.pathCd = 0.35 + this.rng.next() * 0.2),
            (e.pathHold = this.pathBlocked(e) && !this.reroute(e, t))),
          e.pathHold &&
            ((this.cGap = u),
            (this.cVl = 0),
            (this.cS0 = 0.5),
            this.cons(e, 3)))
        : (e.pathHold = !1);
      let f = e.vTurn;
      if (
        (!a.sig[o] && !a.thru[o] && !e.committed && (f = Math.min(f, 5.5)),
        f < i)
      ) {
        let t = s - 1.5,
          n = Math.sqrt(f * f + 2 * e.b * 0.8 * (t > 0 ? t : 0));
        n < i && (i = n);
      }
      (e.next >= 0 &&
        s < J.lookAhead &&
        ((this.dEntryF = s),
        this.leaderBeyond(e),
        d && s < 16 && this.juncConflicts(e, t.to)),
        s < 35 &&
          e.blinkT <= 0 &&
          !e.two2 &&
          (e.turn === og || e.turn === ag) &&
          ((e.blinker = We(e.turn, this.side)), (e.blinkT = 0.5)),
        e.dwellS >= 0 && this.dwell(e, n, t),
        (r || e.camDist < J.lodFar) &&
          (e.two
            ? e.scootCd <= 0 &&
              ((e.scootCd = 0.2 + this.rng.next() * 0.15),
              this.scooterLat(e, t, s))
            : e.laneCd <= 0 &&
              t.lanes > 1 &&
              ((e.laneCd = 0.5 + this.rng.next() * 0.6),
              this.laneLogic(e, t, s, i))),
        (this.v0 = i));
    }
    leaderLink(e) {
      let t = e.latTarget;
      if (e.two) {
        let n = t - e.lat;
        n > 0.9 ? (t = e.lat + 0.9) : n < -0.9 && (t = e.lat - 0.9);
      }
      let n = (e.lat < t ? e.lat : t) - e.halfW - J.latMargin,
        r = (e.lat > t ? e.lat : t) + e.halfW + J.latMargin,
        i = 1e9,
        a = 0,
        o = -1,
        s = this.cars,
        c = e.ghost > 2;
      for (let t = this.hL(e.link); t >= 0; t = this.nextL[t]) {
        let l = s[t];
        if (l === e) continue;
        let u = l.s - e.s;
        if (
          u < 0 ||
          (u === 0 && l.idx < e.idx) ||
          l.lat + l.halfW < n ||
          l.lat - l.halfW > r
        )
          continue;
        let d = u - l.halfL - e.halfL;
        (c && d < 0) || (d < i && ((i = d), (a = l.v), (o = l.idx)));
      }
      ((this.lg = i), (this.lv = a), (e.lead = o));
    }
    blockedAhead(e) {
      if (e.why === 3) return e.obsV < 0.5;
      if (e.why === 1 && e.lead >= 0) {
        let t = this.cars[e.lead];
        return t.active && t.link === e.link && t.dwellT > 0.5;
      }
      return !1;
    }
    leaderBeyond(e) {
      let t = this.dEntryF,
        n = e.next,
        r = e.nextLat - e.halfW - J.latMargin,
        i = e.nextLat + e.halfW + J.latMargin,
        a = this.cars,
        o = 1e9,
        s = 0;
      for (let c = this.hJ(n); c >= 0; c = this.nextJ[c]) {
        let n = a[c];
        if (n === e || n.nextLat + n.halfW < r || n.nextLat - n.halfW > i)
          continue;
        let l = t + e.jEst - (n.jLen - n.js) - n.halfL - e.halfL;
        l > -n.halfL && l < o && ((o = l), (s = n.v));
      }
      for (let c = this.hL(n); c >= 0; c = this.nextL[c]) {
        let n = a[c];
        if (n.lat + n.halfW < r || n.lat - n.halfW > i) continue;
        let l = t + e.jEst + n.s - n.halfL - e.halfL;
        l < o && ((o = l), (s = n.v));
      }
      o < 1e9 &&
        ((this.cGap = o),
        (this.cVl = s),
        (this.cS0 = e.s0),
        this.cons(e, 1),
        o < this.lg && ((this.lg = o), (this.lv = s)));
    }
    canEnter(e, t, n) {
      let r = this.dStopF,
        i = this.net,
        a = e.link,
        o = t.to;
      if (((this.yielding = !1), e.ghost > 0 || i.thru[a])) return !0;
      if (e.next < 0 && i.expr[a]) return !1;
      if (i.sig[a]) {
        let t = dg[i.axis[a]],
          s = this.ctx.signals.state(o, t);
        if (!(e.panic > 0)) {
          if (s === `red`) {
            if (!(e.jumpy && r < 2.5 && this.ctx.signals.remaining(o, t) < 0.7))
              return ((e.sawRed = !0), (e.greenT = 0), !1);
          } else if (s === `yellow`) {
            if (e.sawRed) return !1;
            if (r > (e.v * e.v) / (2 * e.b * 1.3) + 0.5)
              return ((e.sawRed = !0), (e.greenT = 0), !1);
          } else if (e.sawRed) {
            if (
              ((e.greenT += n),
              e.greenT < e.reaction && e.v < 2 && e.hurry <= 0)
            )
              return !1;
            e.sawRed = !1;
          }
        }
      } else if (!this.unsignalizedOk(e, t, r)) return !1;
      return (
        e.next < 0 ||
        ((this.yielding = !0),
        (Tt(e.turn) &&
          !e.two2 &&
          !(this.waitInBox && i.sig[a]) &&
          !this.crossClear(e, t)) ||
        (wt(e.turn) && r < 14 && !this.curbClear(e, t)) ||
        !this.spaceOnNext(e)
          ? !1
          : ((this.yielding = !1), !0))
      );
    }
    unsignalizedOk(e, t, n) {
      let r = t.to,
        i = this.net.axis[e.link],
        a = 1 - i,
        o = r * 2,
        s = this.waitSince;
      if (this.occOf(r, a) > 0)
        return (
          e.v < 1.5 && n < 4 && s[o + i] === 0 && (s[o + i] = this.now),
          !1
        );
      e.v < 1.5 && n < 4 && s[o + i] === 0 && (s[o + i] = this.now);
      let c = s[o + a];
      if (c > 0) {
        if (this.now - c > 14) s[o + a] = 0;
        else if (this.now - c > 0.6) {
          let t = s[o + i];
          if ((t === 0 || c < t) && n > (e.v * e.v) / (2 * e.b) + 0.3)
            return !1;
        }
      }
      return !0;
    }
    crossClear(e, t) {
      let n = this.net.opposing[e.link];
      if (n < 0) return !0;
      let r = this.cars,
        i = this.links[n];
      for (let e = this.hL(n); e >= 0; e = this.nextL[e]) {
        let t = r[e];
        if (t.turn === og && !t.two2) continue;
        let n = i.length - t.s - t.halfL;
        if (
          (t.v > 1.2 && n < (t.v * 3.2 > 14 ? t.v * 3.2 : 14)) ||
          (t.committed && n < 3)
        )
          return !1;
      }
      for (let e = this.hN(t.to); e >= 0; e = this.nextN[e]) {
        let t = r[e];
        if (t.jFrom === n && t.mode === 1 && (t.turn !== og || t.stage === 1))
          return !1;
      }
      return !0;
    }
    curbClear(e, t) {
      let n = this.links[e.next],
        r = n.road.halfWidth + 1,
        i = n.sx - n.dx * 1.75,
        a = n.sz - n.dz * 1.75,
        o = this.ctx.dynamics.query(
          i,
          a,
          r + 2,
          this.tmpBodies,
          this.pedFilter,
        );
      for (let e = 0; e < o; e++) {
        let t = this.tmpBodies[e];
        if (t.y > 0.1 && t.vx * t.vx + t.vz * t.vz < 0.25) continue;
        let i = t.x - n.sx,
          a = t.z - n.sz,
          o = i * n.dx + a * n.dz,
          s = lt(n, i, a, this.side);
        if (o > -4.2 && o < 0.8 && s > -r && s < r) return !1;
      }
      let s = this.cars;
      for (let t = this.hL(e.link); t >= 0; t = this.nextL[t]) {
        let n = s[t];
        if (n === e || !n.two || n.turn === ag || n.lat < e.lat + 0.6) continue;
        let r = n.s - e.s;
        if (r > -e.halfL - 7 && r < e.halfL + 1 && n.v > 1.5) return !1;
      }
      return !0;
    }
    spaceOnNext(e) {
      let t = e.next,
        n = e.nextLat - e.halfW - 0.1,
        r = e.nextLat + e.halfW + 0.1,
        i = this.cars,
        a = 1e9;
      for (let e = this.hL(t); e >= 0; e = this.nextL[e]) {
        let t = i[e];
        if (t.v > 3 || t.lat + t.halfW < n || t.lat - t.halfW > r) continue;
        let o = t.s - t.halfL;
        o < a && (a = o);
      }
      for (let o = this.hJ(t); o >= 0; o = this.nextJ[o]) {
        let t = i[o];
        t === e ||
          t.v > 2 ||
          t.nextLat + t.halfW < n ||
          t.nextLat - t.halfW > r ||
          (a = 0);
      }
      let o = e.two ? e.halfL * 2 + 0.3 : e.halfL * 2 + 1.5;
      return a > o;
    }
    juncConflicts(e, t) {
      let n = this.cars,
        r = e.heading,
        i = Math.sin(r),
        a = -Math.cos(r),
        o = -a,
        s = i,
        c = e.wslot >= 0 ? e.wFeeder : -1;
      for (let l = this.hN(t); l >= 0; l = this.nextN[l]) {
        let t = n[l];
        if (t === e || (c >= 0 && t.wFeeder === c && t.wslot >= 0)) continue;
        let u = t.x - e.x,
          d = t.z - e.z,
          f = u * i + d * a;
        if (f <= 0 || f > 16) continue;
        let p = u * o + d * s,
          m = t.heading - r,
          h = Math.cos(m);
        if (e.ghost > 0 && h < 0.7) continue;
        let g = h < 0 ? -h : h,
          _ = Math.abs(Math.sin(m)),
          v = _ * t.halfL + g * t.halfW;
        if (
          p > e.halfW + v + 0.25 ||
          p < -(e.halfW + v + 0.25) ||
          (e.idx < t.idx && this.sees(t, e))
        )
          continue;
        let y = g * t.halfL + _ * t.halfW,
          b = t.v * Math.cos(m);
        ((this.cGap = f - e.halfL - y),
          (this.cVl = b > 0 ? b : 0),
          (this.cS0 = 1),
          this.cons(e, 4));
      }
    }
    pathBlocked(e) {
      let t = (e.p0x + e.p3x) * 0.5,
        n = (e.p0z + e.p3z) * 0.5,
        r = Math.hypot(e.p3x - e.p0x, e.p3z - e.p0z) * 0.5 + 7 + e.halfL,
        i = e.p3x - e.p2x,
        a = e.p3z - e.p2z,
        o = Math.hypot(i, a) || 1;
      ((i /= o), (a /= o));
      let s = e.halfL + 2;
      ((this.senseSelf = e.body),
        (this.senseLevel = e.y > 1.2 || this.py > 2.5),
        (this.senseY = e.y));
      let c = this.ctx.dynamics.query(
        t,
        n,
        r,
        this.tmpBodies,
        this.senseFilter,
      );
      for (let t = 0; t < c; t++) {
        let n = this.tmpBodies[t];
        if (n === e.body || n.vx * n.vx + n.vz * n.vz > 0.8) continue;
        let r = n.kind === `vehicle`,
          o = Math.cos(n.heading),
          c = Math.sin(n.heading),
          l = (r ? n.halfW : n.radius) + e.halfW + 0.15,
          u = (r ? n.halfL : n.radius) + e.halfW + 0.15;
        for (let t = 0; t <= 13; t++) {
          let r, d;
          if (t <= 10) {
            let i = t / 10,
              a = 1 - i,
              o = a * a * a,
              s = 3 * a * a * i,
              c = 3 * a * i * i,
              l = i * i * i;
            ((r = o * e.p0x + s * e.p1x + c * e.p2x + l * e.p3x - n.x),
              (d = o * e.p0z + s * e.p1z + c * e.p2z + l * e.p3z - n.z));
          } else {
            let o = ((t - 10) / 3) * s;
            ((r = e.p3x + i * o - n.x), (d = e.p3z + a * o - n.z));
          }
          let f = r * o + d * c,
            p = r * c - d * o;
          if (f < l && f > -l && p < u && p > -u) {
            if (this.ctx.plan.surfaceAt(n.x, n.z) === `road`) return !0;
            break;
          }
        }
      }
      return !1;
    }
    reroute(e, t) {
      let n = this.net,
        r = e.link,
        i = e.next,
        a = e.turn,
        o = this.links[i];
      if (!e.two && o.lanes > 1) {
        let s = e.nextLane,
          c = e.nextLat,
          l = a === ag ? t.lanes - 1 : a === og ? 0 : e.lane,
          u = n.laneOff(r, l < t.lanes ? l : t.lanes - 1);
        for (let n = 1; n < o.lanes; n++)
          for (let r = -1; r <= 1; r += 2) {
            let a = s + n * r;
            if (
              !(a < 0 || a >= o.lanes) &&
              ((e.nextLane = a),
              (e.nextLat = this.laneLat(e, i, a)),
              this.buildPath(
                e,
                t.ex + ct(t, u, this.side),
                t.ez + ze(t, u, this.side),
                t.dx,
                t.dz,
                o.sx + ct(o, e.nextLat, this.side),
                o.sz + ze(o, e.nextLat, this.side),
                o.dx,
                o.dz,
              ),
              (e.jEst = e.jLen),
              !this.pathBlocked(e))
            )
              return !0;
          }
        ((e.nextLane = s), (e.nextLat = c));
      }
      let s = n.turnStart[r],
        c = n.turnCount[r];
      for (let r = 0; r < c; r++) {
        let a = n.turnOut[s + r],
          o = n.turnType[s + r];
        if (
          !(a === i || o === sg || n.deadEnd[a]) &&
          !(
            !e.two &&
            ((o === ag && e.lane !== t.lanes - 1) || (o === og && e.lane !== 0))
          ) &&
          (e.kind !== 6 || this.links[a].road.major) &&
          (this.setMove(e, a, o), !this.pathBlocked(e))
        )
          return ((e.blinker = We(o, this.side)), (e.blinkT = 2.5), !0);
      }
      return (this.setMove(e, i, a), !1);
    }
    sees(e, t) {
      let n = e.heading,
        r = Math.sin(n),
        i = -Math.cos(n),
        a = t.x - e.x,
        o = t.z - e.z,
        s = a * r + o * i;
      if (s <= 0 || s > 16) return !1;
      let c = a * -i + o * r,
        l = t.heading - n,
        u = Math.abs(Math.sin(l)) * t.halfL + Math.abs(Math.cos(l)) * t.halfW;
      return Math.abs(c) <= e.halfW + u + 0.25;
    }
    dwell(e, t, n) {
      let r = e.dwellS - e.s;
      if (r < -1.5) {
        e.dwellS = -1;
        return;
      }
      (r < 50 &&
        ((e.latTarget = this.net.curb[e.link] - e.halfW - 0.3),
        e.dwellT <= 0 && ((e.blinker = Et(1, this.side)), (e.blinkT = 3))),
        r < 70 &&
          ((this.cGap = r + 0.3),
          (this.cVl = 0),
          (this.cS0 = 0.3),
          this.cons(e, 6)),
        r < 1.5 &&
          e.v < 0.3 &&
          ((e.dwellT += t),
          (e.hazard = e.kind !== 6),
          e.dwellT > e.waitT &&
            ((e.dwellS = -1),
            (e.dwellT = 0),
            (e.hazard = !1),
            (e.latTarget = this.laneLat(e, e.link, e.lane)),
            (e.blinker = Et(-1, this.side)),
            (e.blinkT = 3))));
    }
    holdConstraints(e) {
      let t = e.heading,
        n = Math.sin(t),
        r = -Math.cos(t);
      for (let t of this.holds) {
        if (!t.active) continue;
        let i = t.x - e.x,
          a = t.z - e.z,
          o = i * n + a * r;
        if (o < 0 || o > 90) continue;
        let s = i * i + a * a - o * o,
          c = t.r + e.halfW;
        if (s > c * c) continue;
        let l = o - Math.sqrt(c * c - s);
        l <= 0 ||
          ((this.cGap = l - e.halfL),
          (this.cVl = 0),
          (this.cS0 = 1),
          this.cons(e, 5));
      }
    }
    laneLat(e, t, n) {
      let r = this.net,
        i = r.laneOff(t, n);
      if (e.two) {
        i += e.latPref;
        let n = r.medianHalf[t] + 0.5,
          a = r.curb[t] - 0.45;
        (i < n && (i = n), i > a && (i = a));
      }
      return i;
    }
    requiredLane(e, t) {
      return e.next >= 0 && this.net.rampIn[e.next]
        ? this.net.rampSide[e.next]
          ? t.lanes - 1
          : 0
        : e.kind === 6
          ? e.turn === og
            ? 0
            : t.lanes - 1
          : e.dwellS >= 0 || e.turn === ag
            ? t.lanes - 1
            : e.turn === og || e.turn === sg
              ? 0
              : -1;
    }
    laneLogic(e, t, n, r) {
      if (n < 14 || e.committed || e.bypass !== 0 || e.back > 0) return;
      let i = this.requiredLane(e, t);
      if (i >= 0 && e.lane !== i) {
        let r = e.lane + (i > e.lane ? 1 : -1);
        this.laneSafe(e, r)
          ? this.changeLane(e, r)
          : n < 35 && e.dwellS < 0 && e.kind !== 6 && this.giveUpTurn(e, t);
        return;
      }
      if (!(e.dwellS >= 0)) {
        if (this.lg < 40 && this.lv < r * 0.7 && r - this.lv > 2.5 && n > 40) {
          let n = this.rng.next() < 0.5 ? -1 : 1;
          for (let r = 0; r < 2; r++) {
            let a = e.lane + (r === 0 ? n : -n);
            if (
              !(a < 0 || a >= t.lanes) &&
              !(i >= 0 && a !== i) &&
              this.laneSafe(e, a) &&
              this.laneAhead > this.lg + 12
            ) {
              this.changeLane(e, a);
              return;
            }
          }
        }
        if (e.blocked > 2.2 && this.blockedAhead(e))
          for (let n = 1; n < t.lanes; n++)
            for (let r = -1; r <= 1; r += 2) {
              let i = e.lane + n * r;
              if (!(i < 0 || i >= t.lanes) && this.laneSafe(e, i)) {
                (this.changeLane(e, i), (e.pullOut = 4));
                return;
              }
            }
      }
    }
    laneSafe(e, t) {
      if ((t > e.lane && e.sideR) || (t < e.lane && e.sideL)) return !1;
      let n = this.net.laneOff(e.link, t),
        r = n - e.halfW - 0.2,
        i = n + e.halfW + 0.2,
        a = this.cars,
        o = 1e9,
        s = 1e9,
        c = 0,
        l = 0;
      for (let t = this.hL(e.link); t >= 0; t = this.nextL[t]) {
        let n = a[t];
        if (n === e) continue;
        let u = n.lat < n.latTarget ? n.lat : n.latTarget;
        if (
          (n.lat > n.latTarget ? n.lat : n.latTarget) + n.halfW < r ||
          u - n.halfW > i
        )
          continue;
        let d = n.s - e.s;
        if (d >= 0) {
          let t = d - n.halfL - e.halfL;
          t < o && ((o = t), (c = n.v));
        } else {
          let t = -d - n.halfL - e.halfL;
          t < s && ((s = t), (l = n.v));
        }
      }
      this.laneAhead = o;
      let u = 2 + e.v * 0.6 + Math.max(0, e.v - c) * 1.2,
        d = 2.5 + Math.max(0, l - e.v) * 1.8 + l * 0.3;
      return o > u && s > d;
    }
    changeLane(e, t) {
      ((e.blinker = Et(t < e.lane ? -1 : 1, this.side)),
        (e.blinkT = 3.2),
        (e.lane = t),
        (e.latTarget = this.laneLat(e, e.link, t)));
    }
    giveUpTurn(e, t) {
      let n = this.net,
        r = e.link,
        i = n.turnStart[r],
        a = n.turnCount[r];
      for (let r = 0; r < a; r++) {
        let a = n.turnType[i + r],
          o = n.turnOut[i + r];
        if (
          !n.deadEnd[o] &&
          (a === ig ||
            (a === ag && e.lane === t.lanes - 1) ||
            (a === og && e.lane === 0))
        ) {
          this.setMove(e, o, a);
          return;
        }
      }
    }
    scooterLat(e, t, n) {
      let r = this.net,
        i = e.link;
      if (e.dwellS >= 0) return;
      if (
        e.why === 3 &&
        e.obsGap < (e.obsVeh ? 13 : 8) &&
        e.obsV < 1 &&
        e.obsStill > (e.obsVeh ? 0.15 : 0.4)
      ) {
        let n = e.lat + e.obsLat,
          a = e.obsExt + e.halfW + (e.obsVeh ? 0.4 : 0.45),
          o = r.curb[i] - 0.45,
          s = r.medianHalf[i],
          c =
            s > 0.05
              ? s + 0.5
              : t.reverse >= 0 && this.oncomingClear(e, 20)
                ? 0.6 - r.curb[i]
                : 0.5,
          l = n + a,
          u = n - a,
          d = 1e9;
        if (
          (l <= o && this.channelClear(e, l, 8) && (d = l),
          u >= c &&
            this.channelClear(e, u, 8) &&
            (d > 1e8 || Math.abs(u - e.lat) < Math.abs(d - e.lat)) &&
            (d = u),
          d < 1e8)
        ) {
          ((e.latTarget = d), (e.pullOut = 1.5));
          return;
        }
      }
      let a = this.laneLat(e, i, e.lane),
        o = 1e9,
        s = -1e9;
      if (e.why === 3 && e.obsGap < 9 && e.obsV < 1 && e.obsStill > 0.3) {
        let t = e.lat + e.obsLat,
          n = e.obsExt + e.halfW + 0.3;
        ((o = t - n), (s = t + n));
      }
      if (
        (r.box[i] &&
          e.slot < 0 &&
          !e.committed &&
          !e.heavy &&
          n < 55 &&
          n > 3 &&
          (this.ctx.signals.state(t.to, dg[r.axis[i]]) !== `green` ||
            e.sawRed) &&
          this.claimSlot(e, t),
        e.slot >= 0)
      ) {
        if (
          this.ctx.signals.state(t.to, dg[r.axis[i]]) === `green` &&
          !e.sawRed &&
          n > 25
        )
          this.releaseSlot(e);
        else {
          let n = this.slotLat(i, e.slot % 16) + (e.seed - 0.5) * 0.12;
          if (e.s + e.halfL > r.stopCar[i] - 1.5 || Math.abs(n - e.lat) < 0.5) {
            e.latTarget = n;
            return;
          }
          let a = r.medianHalf[i],
            c = e.lat,
            l = 1e9;
          for (let u = 0; u <= t.lanes + 1; u++) {
            let d;
            d =
              u < t.lanes - 1
                ? a + (u + 1) * r.laneWidth
                : u === t.lanes - 1
                  ? r.curb[i] - 0.55
                  : u === t.lanes
                    ? n
                    : e.lat;
            let f = Math.abs(d - n) + Math.abs(d - e.lat) * 0.35;
            f >= l ||
              (d > o && d < s) ||
              ((d === e.lat || this.channelClear(e, d, 10)) &&
                ((l = f), (c = d)));
          }
          e.latTarget = c;
          return;
        }
      }
      if (e.turn === og && !e.two2 && n < 45) a = r.laneOff(i, 0) - 0.9;
      else if (
        (this.lg < 11 && this.lv < (e.v * 0.6 > 1.6 ? e.v * 0.6 : 1.6)) ||
        (e.why === 3 && e.obsGap < 10 && e.obsV < 1.5)
      ) {
        let n = r.medianHalf[i],
          c = a,
          l = 1e9,
          u = t.lanes + 1;
        for (let d = 0; d <= u; d++) {
          let u;
          u =
            d < t.lanes - 1
              ? n + (d + 1) * r.laneWidth
              : d === t.lanes - 1
                ? r.curb[i] - 0.55
                : d === t.lanes
                  ? a
                  : e.lat;
          let f = Math.abs(u - e.lat) + (d === t.lanes ? 0.3 : 0);
          f >= l ||
            f > (s > o ? 7 : 4.5) ||
            (u > o && u < s) ||
            (this.channelClear(e, u, 12) && ((l = f), (c = u)));
        }
        a = c;
      } else
        Math.abs(e.lat - a) > 0.3 && !this.channelClear(e, a, 6) && (a = e.lat);
      e.latTarget = a;
    }
    channelClear(e, t, n) {
      let r = t - e.halfW - 0.12,
        i = t + e.halfW + 0.12,
        a = this.cars;
      for (let t = this.hL(e.link); t >= 0; t = this.nextL[t]) {
        let o = a[t];
        if (o === e || o.lat + o.halfW < r || o.lat - o.halfW > i) continue;
        let s = o.s - e.s,
          c = o.halfL + e.halfL;
        if (!(o.two && o.v > 1.5 && s > c) && s > -c - 0.4 && s < n + c)
          return !1;
      }
      return !0;
    }
    slotCols(e) {
      let t = this.net.curb[e] - this.net.medianHalf[e] - 0.9,
        n = Math.floor(t / 0.9) + 1;
      return n > 16 ? 16 : n;
    }
    slotLat(e, t) {
      let n = this.net.curb[e] - this.net.medianHalf[e] - 0.9,
        r = this.slotCols(e);
      return this.net.medianHalf[e] + 0.45 + (r > 1 ? (t * n) / (r - 1) : 0);
    }
    claimSlot(e, t) {
      let n = e.link,
        r = this.slotCols(n),
        i = this.boxMask[n],
        a = -1,
        o = 1e9;
      for (let t = 0; t < 2; t++)
        for (let s = 0; s < r; s++) {
          let r = t * 16 + s;
          if (i & (1 << r)) continue;
          let c =
            Math.abs(this.slotLat(n, s) - e.lat) * 0.3 +
            t * 3 +
            ((e.idx * 7 + s) % 5) * 0.04;
          c < o && ((o = c), (a = r));
        }
      if (a < 0) return;
      ((this.boxMask[n] |= 1 << a), (e.slot = a));
      let s = +(a >= 16);
      e.slotS = t.length - 0.35 - s * 1.95 - e.seed * 0.5;
    }
    releaseSlot(e) {
      (e.slot >= 0 && e.link >= 0 && (this.boxMask[e.link] &= ~(1 << e.slot)),
        (e.slot = -1));
    }
    chooseNext(e) {
      let t = this.net,
        n = e.link,
        r = this.links[n];
      if (((e.two2 = !1), t.deadEnd[n])) {
        r.reverse >= 0 ? this.setMove(e, r.reverse, sg) : (e.next = -1);
        return;
      }
      let i = t.turnStart[n],
        a = t.turnCount[n],
        o = 0;
      for (let n = 0; n < 2; n++) {
        let s = n === 1 ? this.rng.next() * o : 0;
        for (let c = 0; c < a; c++) {
          let a = this.moveWeight(e, r, t.turnOut[i + c], t.turnType[i + c]);
          if (n === 0) o += a;
          else if (a > 0 && (s -= a) <= 0) {
            this.setMove(e, t.turnOut[i + c], t.turnType[i + c]);
            return;
          }
        }
        if (o <= 0) break;
      }
      a > 0 ? this.setMove(e, t.turnOut[i], t.turnType[i]) : (e.next = -1);
    }
    moveWeight(e, t, n, r) {
      let i = this.net,
        a = this.links[n];
      if (r === sg) return 0;
      if (i.rampIn[n]) return e.two || e.kind === 6 || e.kind === 7 ? 0 : 2.4;
      if (i.deadEnd[n]) return 0.02;
      let o = r === ig ? 5.5 : 2;
      if (e.kind === 6) {
        if (!a.road.major) return 0;
        o = r === ig ? 9 : 1;
      }
      if (
        (t.road.major && !a.road.major && (o *= 0.6),
        !t.road.major && a.road.major && (o *= 1.4),
        e.plDist > 140)
      ) {
        let e = this.px - t.ex,
          n = this.pz - t.ez,
          r = Math.hypot(e, n) || 1,
          i = (a.dx * e + a.dz * n) / r;
        i > 0 && (o *= 1 + 2 * i);
      }
      return o;
    }
    setMove(e, t, n) {
      let r = this.net,
        i = this.links[t];
      ((e.next = t),
        (e.turn = n),
        (e.two2 =
          e.two &&
          !e.heavy &&
          n === og &&
          r.twoStage[e.link] === 1 &&
          r.feeder[t] >= 0));
      let a;
      (e.two
        ? ((a = i.lanes - 1), e.midLane && i.lanes >= 3 && (a = i.lanes - 2))
        : (a =
            e.kind === 6
              ? n === og
                ? 0
                : i.lanes - 1
              : n === ag
                ? i.lanes - 1
                : n === og || n === sg
                  ? 0
                  : e.lane < i.lanes
                    ? e.lane
                    : i.lanes - 1),
        (e.nextLane = a));
      let o = r.rampIn[t] === 1;
      e.nextLat = this.laneLat(e, t, a);
      let s = this.links[e.link],
        c =
          n === ag
            ? s.lanes - 1
            : n === og || (o && !r.rampSide[t])
              ? 0
              : e.lane,
        l = e.two
          ? e.latTarget
          : this.net.laneOff(e.link, c < s.lanes ? c : s.lanes - 1);
      (this.buildPath(
        e,
        s.ex + ct(s, l, this.side),
        s.ez + ze(s, l, this.side),
        s.dx,
        s.dz,
        i.sx + ct(i, e.nextLat, this.side),
        i.sz + ze(i, e.nextLat, this.side),
        i.dx,
        i.dz,
      ),
        (e.jEst = e.jLen),
        e.two2 && (e.vTurn = 7));
    }
    buildPath(e, t, n, r, i, a, o, s, c) {
      let l = r * c - i * s,
        u = a - t,
        d = o - n,
        f = Math.hypot(u, d) || 0.01,
        p,
        m,
        h,
        g,
        _ = 1e9,
        v = !1;
      if (Math.abs(l) > 0.2) {
        let e = (u * c - d * s) / l,
          y = (r * d - i * u) / l;
        if (e > 0.3 && y > 0.3) {
          let l = 0.56,
            u = f * 0.24,
            d = e * l > u ? e * l : u,
            b = y * l > u ? y * l : u;
          ((p = t + r * d),
            (m = n + i * d),
            (h = a - s * b),
            (g = o - c * b),
            (_ = e < y ? e : y),
            _ < u && (_ = u),
            (v = !0));
        }
      }
      if (!v) {
        if (r * s + i * c > 0) {
          let e = f / 3;
          ((p = t + r * e), (m = n + i * e), (h = a - s * e), (g = o - c * e));
          let l = Math.abs(u * -i + d * r);
          _ = l > 0.5 ? (f * f) / (8 * l) + f * 0.5 : 1e9;
        } else {
          let e = f * 0.9 + 2;
          ((p = t + r * e),
            (m = n + i * e),
            (h = a - s * e),
            (g = o - c * e),
            (_ = f * 0.5 + 1));
        }
      }
      ((e.p0x = t),
        (e.p0z = n),
        (e.p1x = p),
        (e.p1z = m),
        (e.p2x = h),
        (e.p2z = g),
        (e.p3x = a),
        (e.p3z = o));
      let y = e.lut;
      y[0] = 0;
      let b = t,
        x = n,
        S = 0;
      for (let r = 1; r <= 8; r++) {
        let i = r / 8,
          s = 1 - i,
          c = s * s * s,
          l = 3 * s * s * i,
          u = 3 * s * i * i,
          d = i * i * i,
          f = c * t + l * e.p1x + u * e.p2x + d * a,
          p = c * n + l * e.p1z + u * e.p2z + d * o;
        ((S += Math.hypot(f - b, p - x)), (y[r] = S), (b = f), (x = p));
      }
      e.jLen = S > 0.1 ? S : 0.1;
      let C = Math.sqrt(e.aLat * _);
      e.vTurn = C < 3.2 ? 3.2 : C > 30 ? 30 : C;
    }
    enterJunction(e, t) {
      let n = this.net,
        r = this.links[e.link];
      if ((this.releaseSlot(e), e.next < 0)) {
        ((e.s = r.length), (e.v = 0));
        return;
      }
      let i = r.ex + ct(r, e.lat, this.side),
        a = r.ez + ze(r, e.lat, this.side),
        o = e.heading - e.hOff,
        s = Math.sin(o),
        c = -Math.cos(o);
      if (((e.stage = 0), e.two2)) {
        let t = n.feeder[e.next],
          o = this.claimWaitSlot(t);
        if (o >= 0) {
          ((e.wslot = o), (e.wFeeder = t), (e.stage = 1));
          let l = this.links[t],
            u = +(o >= 3),
            d = o % 3,
            f = l.length + 3.2 - u * 2.25,
            p = n.laneOff(t, l.lanes - 1) + (d - 1) * 1.05;
          this.buildPath(
            e,
            i,
            a,
            s,
            c,
            l.sx + l.dx * f + ct(l, p, this.side),
            l.sz + l.dz * f + ze(l, p, this.side),
            r.dx,
            r.dz,
          );
        } else {
          e.two2 = !1;
          let t = n.turnStart[e.link],
            r = n.turnCount[e.link];
          for (let i = 0; i < r; i++)
            if (n.turnType[t + i] === ig) {
              this.setMove(e, n.turnOut[t + i], ig);
              break;
            }
        }
      }
      let l = this.links[e.next];
      if (e.two && e.turn === ig && e.stage === 0) {
        let t = n.medianHalf[l.id] + 0.5,
          r = n.curb[l.id] - 0.45;
        e.nextLat = e.lat < t ? t : e.lat > r ? r : e.lat;
      }
      (e.stage === 0 &&
        this.buildPath(
          e,
          i,
          a,
          s,
          c,
          l.sx + ct(l, e.nextLat, this.side),
          l.sz + ze(l, e.nextLat, this.side),
          l.dx,
          l.dz,
        ),
        (e.boxHold = -1),
        this.waitInBox &&
          e.stage === 0 &&
          Tt(e.turn) &&
          !e.two2 &&
          n.sig[e.link] &&
          !this.crossClear(e, r) &&
          (e.boxHold = this.boxHoldAt(e, r)),
        (e.mode = 1),
        (e.js = t < e.jLen ? t : 0),
        (e.jOff = e.jOffT = 0),
        (e.jHoldS = -1),
        (e.jNode = r.to),
        (e.jFrom = e.link),
        (e.jAxis = n.axis[e.link]),
        n.sig[e.link] || (this.waitSince[r.to * 2 + e.jAxis] = 0),
        e.turn !== ig && ((e.blinker = We(e.turn, this.side)), (e.blinkT = 99)),
        this.insert(e));
    }
    exitJunction(e, t) {
      if (e.stage === 1) {
        e.mode = 3;
        let t = this.links[e.wFeeder];
        e.link = e.wFeeder;
        let n = e.p3x - t.sx,
          r = e.p3z - t.sz;
        ((e.s = n * t.dx + r * t.dz),
          (e.lat = lt(t, n, r, this.side) + e.jOff),
          (e.jOff = e.jOffT = 0),
          (e.jHoldS = -1),
          (e.latTarget = e.lat),
          (e.v = 0),
          (e.waitT = 0),
          (e.greenT = 0),
          (e.blinker = 0));
        return;
      }
      e.stage === 2 && this.releaseWaitSlot(e);
      let n = this.links[e.next];
      ((e.mode = 0),
        (e.link = e.next),
        (e.lane = e.nextLane),
        (e.s = t < n.length ? t : n.length - 0.1),
        (e.lat = e.nextLat + e.jOff),
        (e.jOff = e.jOffT = 0),
        (e.jHoldS = -1),
        (e.latTarget = this.laneLat(e, e.link, e.lane)),
        (e.latVel = 0),
        (e.jNode = -1),
        (e.jFrom = -1),
        (e.stage = 0),
        (e.committed = !1),
        (e.sawRed = !1),
        (e.greenT = 0),
        (e.blinker = 0),
        (e.blinkT = 0),
        (e.two2 = !1),
        (e.bypass = 0),
        (e.bypassS = -1),
        (e.backed = 0),
        (e.pathHold = !1),
        (e.ud.crossing = !1),
        this.chooseNext(e),
        this.planDwell(e));
    }
    planDwell(e) {
      let t = this.links[e.link];
      ((e.dwellS = -1),
        (e.dwellT = 0),
        e.kind === 6 && this.net.busStop[e.link] > e.s + 20
          ? ((e.dwellS = this.net.busStop[e.link]),
            (e.waitT = 8 + this.rng.next() * 7))
          : t.length > 70 &&
            ((e.kind === 1 && this.rng.next() < 0.1) ||
              ((e.kind === 4 || e.kind === 5) && this.rng.next() < 0.07)) &&
            ((e.dwellS = e.s + 25 + this.rng.next() * (t.length - e.s - 55)),
            e.dwellS > t.length - 25 && (e.dwellS = -1),
            (e.waitT =
              e.kind === 1
                ? 4 + this.rng.next() * 5
                : 8 + this.rng.next() * 12)));
    }
    claimWaitSlot(e) {
      let t = this.wMask[e];
      for (let n = 0; n < 6; n++) {
        let r = fg[n];
        if (!(t & (1 << r))) return ((this.wMask[e] = t | (1 << r)), r);
      }
      return -1;
    }
    releaseWaitSlot(e) {
      (e.wslot >= 0 &&
        e.wFeeder >= 0 &&
        (this.wMask[e.wFeeder] &= ~(1 << e.wslot)),
        (e.wslot = -1),
        (e.wFeeder = -1));
    }
    stepWait2(e, t) {
      let n = this.links[e.next];
      ((e.heading = Ye(e.heading, n.heading, 2.2, t)),
        (e.v = 0),
        (e.braking = !0),
        (e.waitT += t));
      let r = n.from;
      this.ctx.signals.state(r, dg[this.net.axis[n.id]]) === `green`
        ? (e.greenT += t)
        : (e.greenT = 0);
      let i = Math.abs(z(e.heading - n.heading)) < 0.25,
        a = e.wslot >= 3 ? 0.6 : 0;
      if ((e.greenT > e.reaction + 0.2 + a && i) || e.waitT > 70) {
        let t = Math.sin(e.heading),
          i = -Math.cos(e.heading),
          a = e.wslot >= 0 ? e.wslot % 3 : 1,
          o = this.net.medianHalf[n.id] + 0.5,
          s = this.net.curb[n.id] - 0.45,
          c = this.net.laneOff(n.id, n.lanes - 1) + (a - 1) * 1.05;
        ((c = c < o ? o : c > s ? s : c),
          (e.nextLat = c),
          this.buildPath(
            e,
            e.x,
            e.z,
            t,
            i,
            n.sx + ct(n, c, this.side),
            n.sz + ze(n, c, this.side),
            n.dx,
            n.dz,
          ),
          (e.mode = 1),
          (e.stage = 2),
          (e.boxHold = -1),
          (e.js = 0),
          (e.jNode = r),
          (e.jFrom = e.wFeeder),
          (e.jAxis = this.net.axis[n.id]),
          (e.turn = ig),
          this.insert(e));
      }
      (this.syncBody(e), (e.dirty = !0));
    }
    junctionSidestep(e, t) {
      if (
        e.obsGap < 7 &&
        !e.obsVeh &&
        e.obsV < 0.4 &&
        e.obsStill > (e.two ? 1 : 2.5) &&
        e.jHoldS < 0
      ) {
        let t = e.obsExt + e.halfW + 0.45,
          n = e.obsLat,
          r = n >= 0 ? n - t : n + t,
          i = e.two ? 2.4 : 3.2;
        Math.abs(e.jOff + r) > i && (r = n >= 0 ? n + t : n - t);
        let a = e.jOff + r;
        Math.abs(a) <= i &&
          ((e.jOffT = a),
          (e.jHoldS = e.js + e.obsGap + e.obsExtF * 2 + e.halfL * 2 + 1.2),
          (e.obsStill = 0));
      }
      if (
        (e.jHoldS >= 0 && e.js > e.jHoldS && ((e.jHoldS = -1), (e.jOffT = 0)),
        e.jOff !== e.jOffT)
      ) {
        let n = (e.two ? 1.4 : 1) * t,
          r = e.jOffT - e.jOff;
        ((e.jOff = r > n ? e.jOff + n : r < -n ? e.jOff - n : e.jOffT),
          (e.dirty = !0));
      }
    }
    boxHoldAt(e, t) {
      let n = e.lut,
        r = this.side,
        i = 1;
      for (let a = 1; a <= 16; a++) {
        let o = a / 16,
          s = 1 - o,
          c = s * s * s,
          l = 3 * s * s * o,
          u = 3 * s * o * o,
          d = o * o * o,
          f = c * e.p0x + l * e.p1x + u * e.p2x + d * e.p3x,
          p = c * e.p0z + l * e.p1z + u * e.p2z + d * e.p3z,
          m =
            3 * s * s * (e.p1x - e.p0x) +
            6 * s * o * (e.p2x - e.p1x) +
            3 * o * o * (e.p3x - e.p2x),
          h =
            3 * s * s * (e.p1z - e.p0z) +
            6 * s * o * (e.p2z - e.p1z) +
            3 * o * o * (e.p3z - e.p2z),
          g = Math.sqrt(m * m + h * h) || 1,
          _ = m / g,
          v = h / g,
          y = f + _ * e.halfL - t.sx,
          b = p + v * e.halfL - t.sz,
          x = lt(t, y - v * e.halfW, b + _ * e.halfW, r),
          S = lt(t, y + v * e.halfW, b - _ * e.halfW, r);
        if ((x < S ? x : S) < 0.3) break;
        let C = o * 8,
          w = C >= 8 ? 7 : Math.floor(C);
        i = n[w] + (n[w + 1] - n[w]) * (C - w);
      }
      return i > e.jLen - 0.5 ? e.jLen - 0.5 : i;
    }
    juncConstraints(e) {
      e.vTurn < this.v0 && (this.v0 = e.vTurn);
      let t = e.jLen - e.js,
        n = this.cars;
      if (
        (e.boxHold >= 0 &&
          (this.crossClear(e, this.links[e.link])
            ? (e.boxHold = -1)
            : ((this.cGap = e.boxHold - e.js),
              (this.cVl = 0),
              (this.cS0 = 0.05),
              this.cons(e, 7))),
        e.stage === 1)
      )
        ((this.cGap = t), (this.cVl = 0), (this.cS0 = 0.05), this.cons(e, 4));
      else if (e.next >= 0 && e.ghost <= 2) {
        let r = e.nextLat - e.halfW - J.latMargin,
          i = e.nextLat + e.halfW + J.latMargin,
          a = 1e9,
          o = 0;
        for (let s = this.hJ(e.next); s >= 0; s = this.nextJ[s]) {
          let c = n[s];
          if (
            c === e ||
            c.stage === 1 ||
            c.nextLat + c.halfW < r ||
            c.nextLat - c.halfW > i
          )
            continue;
          let l = c.jLen - c.js;
          if (l > t || (l === t && c.idx > e.idx)) continue;
          let u = t - l - c.halfL - e.halfL;
          u < a && ((a = u), (o = c.v));
        }
        for (let s = this.hL(e.next); s >= 0; s = this.nextL[s]) {
          let c = n[s];
          if (c.lat + c.halfW < r || c.lat - c.halfW > i) continue;
          let l = t + c.s - c.halfL - e.halfL;
          l < a && ((a = l), (o = c.v));
        }
        a < 1e9 &&
          ((this.cGap = a), (this.cVl = o), (this.cS0 = e.s0), this.cons(e, 1));
      }
      e.jNode >= 0 && this.juncConflicts(e, e.jNode);
    }
    sense(e) {
      let t = e.heading,
        n = Math.sin(t),
        r = -Math.cos(t),
        i = -r,
        a = n,
        o = 6 + e.v * 2.4;
      o > 40 && (o = 40);
      let s = o + 16,
        c = e.x + n * s * 0.5,
        l = e.z + r * s * 0.5;
      ((this.senseSelf = e.body),
        (this.senseLevel = e.y > 1.2 || this.py > 2.5),
        (this.senseY = e.y));
      let u = this.ctx.dynamics.query(
          c,
          l,
          s * 0.5 + 3,
          this.tmpBodies,
          this.senseFilter,
        ),
        d = 1e9,
        f = 0,
        p = !1,
        m = 0,
        h = 0,
        g = 0,
        _ = !1,
        v = !1,
        y = !1,
        b = !1,
        x = null,
        S = this.playerVehicleBody;
      for (let s = 0; s < u; s++) {
        let c = this.tmpBodies[s];
        if (c === e.body) continue;
        let l = c.x - e.x,
          u = c.z - e.z,
          C = l * n + u * r,
          w = He(l * i + u * a, this.side),
          T,
          E,
          D = c.kind === `vehicle`;
        if (
          !D &&
          c.y > e.y + (e.y > 0.05 ? 0.1 + 0.09 * (C > 0 ? C : -C) : 0.1)
        )
          continue;
        if (D) {
          let e = c.heading - t,
            n = Math.abs(Math.cos(e)),
            r = Math.abs(Math.sin(e));
          ((T = r * c.halfL + n * c.halfW), (E = n * c.halfL + r * c.halfW));
        } else ((T = c.radius), (E = c.radius));
        if (C > -(e.halfL + E) - 0.5 && C < e.halfL + E + 0.5) {
          let t = (w > 0 ? w : -w) - T - e.halfW;
          t < 0.7 && t > -0.2 && (w > 0 ? (b = !0) : (y = !0));
        }
        if (C + E < -e.halfL * 0.3) continue;
        let O = D ? 0.3 : e.two ? 0.35 : 0.55;
        if (w > e.halfW + T + O || w < -(e.halfW + T + O)) continue;
        let k = C - e.halfL - E,
          A = c.vx * n + c.vz * r,
          j = D && A < -1.5;
        (k > o && !j) ||
          (k < d &&
            ((d = k),
            (f = A > 0 ? A : j ? (A < -20 ? -20 : A) : 0),
            (p = c.kind === `player` || c === S || c.owner === `player`),
            (x = c),
            (m = w),
            (h = T),
            (g = E),
            (_ = D),
            (v = j)));
      }
      ((e.obsGap = d),
        (e.obsV = f),
        (e.obsPlayer = p),
        (e.obsLat = m),
        (e.obsExt = h),
        (e.obsExtF = g),
        (e.obsVeh = _),
        (e.obsOncoming = v),
        (e.sideL = y),
        (e.sideR = b),
        v &&
          e.mode === 0 &&
          d < (e.two ? 26 : 40) &&
          (e.dodge <= 0 &&
            ((!e.two || this.rng.next() < 0.5) && this.honk(e, !0),
            (e.dodgeLat = this.dodgeTarget(e, m, h))),
          (e.dodge = 1.5)),
        x &&
          d < -0.05 &&
          mg(x, e) &&
          (x.kind !== `vehicle` &&
            e.v > J.hitSpeed &&
            e.hitCd <= 0 &&
            this.hitCharacter(e, x, n, r),
          e.v > 0.5 && (e.v *= 0.5)));
    }
    dodgeTarget(e, t, n) {
      let r = this.net,
        i = e.link,
        a = this.links[i],
        o = e.lat + t,
        s = n + e.halfW + 0.4,
        c = r.curb[i] - e.halfW - 0.12,
        l = r.medianHalf[i],
        u =
          l > 0.05
            ? l + e.halfW + 0.2
            : a.reverse >= 0 && this.oncomingClear(e, 25)
              ? -(r.curb[i] - e.halfW - 0.3)
              : e.halfW * 0.5,
        d = o + s < c ? o + s : c,
        f = o - s > u ? o - s : u,
        p = d - o - Math.abs(d - e.lat) * 0.12 + 0.25,
        m = o - f - Math.abs(f - e.lat) * 0.12;
      return (
        this.corridorClear(e, d, 4, 8) || (p -= 3),
        this.corridorClear(e, f, 4, 8) || (m -= 3),
        p >= m ? d : f
      );
    }
    hitCharacter(e, t, n, r) {
      let i = e.v;
      try {
        if (t.kind === `player`) {
          let a = (t.mass || 75) * (i < 4 ? i : 4) * 0.35;
          t.onImpact?.(n * a, r * a, e.body);
        } else {
          let a = (t.mass || 70) * (i < 14 ? i : 14) * 0.85;
          (t.onImpact?.(n * a, r * a, e.body),
            i > 4.2 &&
              t.onDamage?.({
                amount: Math.min(60, (i - 3) * (e.two ? 2.5 : 4.5)),
                source: `vehicle`,
                weapon: `traffic`,
              }));
        }
      } catch {}
      (this.hits++,
        (e.hitCd = 2.5),
        (e.v *= 0.35),
        (e.panic = 0),
        this.honk(e, !0));
    }
    lateral(e, t) {
      let n = e.latTarget + e.bypass,
        r = this.net.curb[e.link] - e.halfW - 0.12;
      (e.dodge > 0 && (n = e.dodgeLat), n > r && (n = r));
      let i = e.latSpeed * (0.3 + (e.v > 6 ? 1 : e.v / 6) * 0.7);
      if (
        (e.v < 0.4 && (i = e.two ? 0.4 : 0.03),
        e.pullOut > 0 && i < 0.85
          ? (i = 0.85)
          : e.bypass !== 0 &&
            !e.two &&
            i < 0.5 &&
            (n - e.lat > 0.05 || n - e.lat < -0.05) &&
            (i = 0.5),
        e.dodge > 0)
      ) {
        let t = 0.3 + e.v * 0.35;
        i < t && (i = t > 2.2 ? 2.2 : t);
      }
      let a = (n - e.lat) * 1.8;
      a > i ? (a = i) : a < -i && (a = -i);
      let o = !1;
      ((a > 0 && e.sideR) || (a < 0 && e.sideL)) && ((a = 0), (o = !0));
      let s = a === 0 ? e.latVel : a;
      if (s > 0.02 || s < -0.02) {
        let t = s > 0 ? 1 : -1,
          n = this.cars;
        for (let r = this.hL(e.link); r >= 0; r = this.nextL[r]) {
          let i = n[r];
          if (i === e) continue;
          let s = i.s - e.s;
          if (s > i.halfL + e.halfL + 0.3 || s < -(i.halfL + e.halfL + 0.3))
            continue;
          let c = (i.lat - e.lat) * t;
          if (!(c <= 0) && c - i.halfW - e.halfW < 0.22) {
            ((a = 0), (o = !0));
            break;
          }
        }
      }
      ((e.latVel += (a - e.latVel) * (1 - Math.exp(-(o ? 16 : 6) * t))),
        (e.lat += e.latVel * t));
    }
    pose(e, t) {
      let n,
        r,
        i,
        a = this.net,
        o = 0;
      if (e.mode === 0) {
        let t = this.links[e.link];
        ((n = t.sx + t.dx * e.s + ct(t, e.lat, this.side)),
          (r = t.sz + t.dz * e.s + ze(t, e.lat, this.side)),
          a.expr[e.link]
            ? ((e.y = a.yAt(e.link, e.s)), (o = a.gradeAt(e.link, e.s)))
            : e.mode === 0 && (e.y = 0));
        let s = e.v > 1.2 ? e.v : 1.2;
        ((i = t.heading + Math.atan2(e.latVel, s) + e.hOff),
          e.two &&
            e.v < 1.5 &&
            (i += (1.5 - e.v) * 0.67 * (e.seed - 0.5) * 0.16));
      } else {
        let t = e.lut,
          s = e.js;
        (s < 0 && (s = 0), s > e.jLen && (s = e.jLen));
        let c = 0;
        for (; c < 7 && t[c + 1] < s;) c++;
        let l = t[c + 1] - t[c],
          u = (c + (l > 1e-5 ? (s - t[c]) / l : 0)) / 8,
          d = 1 - u,
          f = d * d * d,
          p = 3 * d * d * u,
          m = 3 * d * u * u,
          h = u * u * u;
        ((n = f * e.p0x + p * e.p1x + m * e.p2x + h * e.p3x),
          (r = f * e.p0z + p * e.p1z + m * e.p2z + h * e.p3z));
        let g =
            3 * d * d * (e.p1x - e.p0x) +
            6 * d * u * (e.p2x - e.p1x) +
            3 * u * u * (e.p3x - e.p2x),
          _ =
            3 * d * d * (e.p1z - e.p0z) +
            6 * d * u * (e.p2z - e.p1z) +
            3 * u * u * (e.p3z - e.p2z);
        if (
          ((i = g * g + _ * _ > 1e-6 ? Math.atan2(g, -_) + e.hOff : e.heading),
          e.jFrom >= 0 && e.next >= 0 && (a.expr[e.jFrom] || a.expr[e.next]))
        ) {
          let t = this.links[e.jFrom],
            n = a.yAt(e.jFrom, t.length),
            r = a.yAt(e.next, 0),
            i = e.jLen > 0.01 ? s / e.jLen : 1;
          ((e.y = n + (r - n) * i), (o = (r - n) / (e.jLen > 1 ? e.jLen : 1)));
        } else e.y = 0;
        if (e.jOff !== 0) {
          let t = Math.sqrt(g * g + _ * _);
          t > 1e-4 &&
            ((n -= (_ / t) * Ne(e.jOff, this.side)),
            (r += (g / t) * Ne(e.jOff, this.side)));
        }
      }
      e.hOff !== 0 &&
        ((e.hOff *= Math.exp(-t * (e.v > 1 ? 1.4 : 0.3))),
        Math.abs(e.hOff) < 0.002 && (e.hOff = 0));
      let s = n !== e.x || r !== e.z || i !== e.heading;
      ((e.x = n), (e.z = r));
      let c = z(i - e.heading);
      if (((e.heading = i), t > 0)) {
        let n = c / t;
        e.yawRate += (n - e.yawRate) * (1 - Math.exp(-7 * t));
      }
      let l = e.lean,
        u = e.pitch;
      if (e.two) {
        let n = (e.v * e.yawRate) / 9.81;
        (n > 0.5 ? (n = 0.5) : n < -0.5 && (n = -0.5),
          e.v < 0.8 && (n += (-0.075 - n) * (1 - e.v / 0.8)),
          (e.lean += (n - e.lean) * (1 - Math.exp(-6 * t))),
          (e.pitch += (o - e.pitch) * (1 - Math.exp(-5 * t))));
      } else {
        let n = e.acc * 0.0055;
        (n > 0.022 ? (n = 0.022) : n < -0.035 && (n = -0.035),
          (n += o),
          (e.pitch += (n - e.pitch) * (1 - Math.exp(-5 * t))));
        let r = (-(e.v * e.yawRate) / 9.81) * (e.kind === 6 ? 0.1 : 0.06);
        (r > 0.035 ? (r = 0.035) : r < -0.035 && (r = -0.035),
          (e.lean += (r - e.lean) * (1 - Math.exp(-4 * t))));
      }
      ((s || Math.abs(e.lean - l) > 2e-4 || Math.abs(e.pitch - u) > 2e-4) &&
        (e.dirty = !0),
        this.syncBody(e));
    }
    syncBody(e) {
      let t = e.body;
      ((t.x = e.x), (t.y = e.y), (t.z = e.z));
      let n = e.y > 2.5;
      (n || !t.active) &&
        (t.active = !n || (this.py > e.y - 4 && this.py < e.y + 4));
      let r = e.y > 1.5;
      (e.ud.noJack !== r && (e.ud.noJack = r),
        (t.heading = e.heading),
        e.mode === 2
          ? ((t.vx = e.svx), (t.vz = e.svz))
          : ((t.vx = Math.sin(e.heading) * e.v),
            (t.vz = -Math.cos(e.heading) * e.v)));
    }
    stepFree(e, t) {
      let n = Math.hypot(e.svx, e.svz);
      if (n > 0.01 || Math.abs(e.spin) > 0.01) {
        let r = (e.two ? 5 : 6.5) * t,
          i = n > r ? (n - r) / n : 0;
        ((e.svx *= i),
          (e.svz *= i),
          (e.spin *= Math.exp(-t * 2.5)),
          (e.x += e.svx * t),
          (e.z += e.svz * t),
          (e.heading += e.spin * t));
        let a = this._pos;
        if (
          ((a.x = e.x),
          (a.y = e.y + 0.3),
          (a.z = e.z),
          this.ctx.statics.resolveRect(
            a,
            e.heading,
            e.halfW,
            e.halfL,
            e.height,
            this._push,
            `hedge`,
          ),
          this._push.hit)
        ) {
          let t = this._push.nx,
            n = this._push.nz,
            r = e.svx * t + e.svz * n;
          (r < 0 && ((e.svx -= 1.4 * r * t), (e.svz -= 1.4 * r * n)),
            (e.spin *= 0.6));
        }
        ((e.x = a.x), (e.z = a.z));
        let o = this.ctx.groundAt
          ? this.ctx.groundAt(e.x, e.z, e.y + 0.5, 0.45)
          : this.ctx.plan.groundHeight(e.x, e.z);
        ((e.y = o > 0 ? o : 0),
          e.two &&
            e.abandoned &&
            (e.y += e.halfW * Math.abs(Math.sin(e.lean)) * 0.92),
          (e.rest = 0),
          (e.dirty = !0),
          e.abandoned || (e.lean *= Math.exp(-t * 3)));
      } else
        !e.wrecked &&
          !e.abandoned &&
          ((e.rest += t),
          (e.hazard = !0),
          e.rest > 2.2 + (e.idx % 5) * 0.3 && this.rejoin(e));
      ((e.v = n), (e.braking = !0), this.syncBody(e));
    }
    _pos = { x: 0, y: 0, z: 0 };
    _push = { x: 0, z: 0, nx: 0, nz: 0, depth: 0, hit: !1, tag: `` };
    rejoin(e) {
      let t,
        n = 0;
      if (e.y > 1.5) {
        let r = this.exprLinkAt(e);
        if (r < 0) return ((e.abandoned = !0), (e.hazard = !0), !1);
        t = this.links[r];
        let i = lt(t, e.x - t.sx, e.z - t.sz, this.side);
        n = Math.max(
          0,
          Math.min(
            t.lanes - 1,
            Math.round((i - this.net.medianHalf[r]) / this.net.laneWidth - 0.5),
          ),
        );
      } else {
        let r = this.ctx.plan.nearestLink(e.x, e.z);
        if (!r || r.dist > 9 || r.link.pedestrian)
          return ((e.abandoned = !0), (e.hazard = !0), !1);
        ((t = r.link), (n = r.lane));
      }
      ((e.mode = 0), (e.link = t.id), (e.lane = e.two ? t.lanes - 1 : n));
      let r = e.x - t.sx,
        i = e.z - t.sz;
      return (
        (e.s = Math.max(0, Math.min(t.length - 0.5, r * t.dx + i * t.dz))),
        (e.lat = lt(t, r, i, this.side)),
        (e.latTarget = this.laneLat(e, t.id, e.lane)),
        (e.latVel = 0),
        (e.hOff = z(e.heading - t.heading)),
        (e.v = 0),
        (e.y = this.net.yAt(t.id, e.s)),
        (e.hazard = !1),
        (e.committed = e.s + e.halfL > this.net.stopCar[t.id]),
        (e.sawRed = !1),
        (e.stage = 0),
        (e.bypass = 0),
        (e.bypassS = -1),
        (e.back = 0),
        (e.backed = 0),
        (e.dodge = 0),
        (e.pathHold = !1),
        (e.ud.crossing = !1),
        this.chooseNext(e),
        this.honk(e, !1),
        !0
      );
    }
    exprIds = [];
    exprLinkAt(e) {
      let t = this.net;
      t.gatherLinks(e.x, e.z, 0, 14, this.exprIds);
      let n = -1,
        r = 1e9,
        i = Math.sin(e.heading),
        a = -Math.cos(e.heading);
      for (let o of this.exprIds) {
        if (!t.expr[o]) continue;
        let s = this.links[o];
        if (s.dx * i + s.dz * a < 0.5) continue;
        let c = e.x - s.sx,
          l = e.z - s.sz,
          u = c * s.dx + l * s.dz;
        if (u < 0 || u > s.length) continue;
        let d = lt(s, c, l, this.side);
        if (d < 0 || d > t.curb[o] + 0.5 || Math.abs(t.yAt(o, u) - e.y) > 1.5)
          continue;
        let f = Math.abs(d - t.laneOff(o, 0));
        f < r && ((r = f), (n = o));
      }
      return n;
    }
    bookkeeping(e, t) {
      let n = this.why;
      if (
        ((e.why = n),
        e.pullOut > 0 && (e.pullOut -= t),
        e.v < 0.3
          ? (n === 3 || n === 4 || (n === 1 && this.blockedAhead(e))
              ? (e.blocked += t)
              : (e.blocked = 0),
            n === 4 || e.mode === 1
              ? (e.stuck += t)
              : (e.stuck = e.stuck > t ? e.stuck - t : 0),
            n !== 2 && n !== 6 && n !== 5 ? (e.idle += t) : (e.idle = 0))
          : ((e.blocked = 0),
            (e.stuck = e.stuck > t * 2 ? e.stuck - t * 2 : 0),
            (e.idle = 0)),
        e.blocked > 2 &&
          e.hornCd <= 0 &&
          (e.obsPlayer || this.rng.next() < 0.25
            ? this.honk(e, !1)
            : (e.hornCd = 2 + this.rng.next() * 3)),
        n === 1 &&
          e.acc < -3.8 &&
          e.v > 3 &&
          e.hornCd <= 0 &&
          (this.rng.next() < 0.45 ? this.honk(e, !1) : (e.hornCd = 2)),
        n === 1 && e.v < 0.3 && e.idle > 4 && e.hornCd <= 0 && e.lead >= 0)
      ) {
        let t = this.cars[e.lead];
        t.active &&
          t.v < 0.3 &&
          t.why === 7 &&
          t.idle > 4 &&
          (this.rng.next() < 0.35
            ? this.honk(e, !1)
            : (e.hornCd = 3 + this.rng.next() * 4));
      }
      (e.mode === 0 && this.bypassLogic(e, t),
        e.stuck > 7 && e.ghost <= 0 && (e.ghost = 3),
        e.idle > 95 && e.ghost <= 0 && ((e.ghost = 2.5), (e.idle = 0)));
    }
    bypassLogic(e, t) {
      let n = this.net;
      if (e.bypass === 0) {
        if (
          ((e.ud.crossing =
            (e.dodge > 0 || e.two) &&
            e.lat - e.halfW < n.medianHalf[e.link] - 0.05),
          e.two || e.dwellS >= 0 || e.committed || e.back > 0 || e.dodge > 0)
        )
          return;
        let t = this.links[e.link],
          r = t.lanes > 1;
        if (e.obsGap < 25) {
          if (!e.obsVeh && t.length - e.s < e.obsGap + e.halfL + 8) return;
          let n = e.obsVeh ? J.bypassWaitVeh : J.bypassWaitPed;
          e.obsStill > n &&
            (!r || e.blocked > 3) &&
            (e.obsVeh || e.v < 0.3) &&
            !this.planBypass(e, e.obsLat, e.obsExt, e.obsExtF, e.obsGap) &&
            e.obsVeh &&
            e.blocked > 2.5 &&
            e.obsGap < 3.5 &&
            e.backed < 7 &&
            (e.back = 1.8);
        } else if (
          e.why === 1 &&
          e.blocked > 3.5 &&
          !r &&
          e.lead >= 0 &&
          this.blockedAhead(e)
        ) {
          let t = this.cars[e.lead];
          this.planBypass(e, t.lat - e.lat, t.halfW, t.halfL, this.lg);
        }
        return;
      }
      let r =
        !e.two &&
        e.lat - e.halfW < n.medianHalf[e.link] - 0.05 &&
        this.links[e.link].reverse >= 0;
      ((e.ud.crossing = r),
        e.bypassS < 0 || e.s > e.bypassS
          ? (e.bypass *= Math.exp(-t * 1.6))
          : r &&
            e.s + e.halfL < e.bypassR &&
            !this.oncomingClear(e, 16, e.lat - e.halfW) &&
            (e.bypass *= Math.exp(-t * 3)),
        Math.abs(e.bypass) < 0.05 &&
          ((e.bypass = 0), (e.bypassS = -1), (e.ud.crossing = !1)));
    }
    planBypass(e, t, n, r, i) {
      let a = this.net,
        o = e.link,
        s = this.links[o],
        c = e.lat + t,
        l = n + e.halfW + (e.obsVeh ? 0.45 : 0.7),
        u = a.curb[o] - e.halfW - 0.15,
        d = a.medianHalf[o],
        f = d > 0.05 ? d + e.halfW + 0.25 : -(a.curb[o] - e.halfW - 0.3),
        p = c + l,
        m = c - l,
        h = 8 + e.v,
        g = i + 2 * r + e.halfL * 2 + 6,
        _ = p <= u && this.corridorClear(e, p, h, g),
        v = m - e.halfW < d - 0.05 && s.reverse >= 0,
        y =
          m >= f &&
          this.corridorClear(e, m, h, g) &&
          (!v || this.oncomingClear(e, g, m - e.halfW, 3.5)),
        b;
      if (_ && (!y || p - e.lat < e.lat - m)) b = p;
      else if (y) b = m;
      else return !1;
      return (
        (e.bypass = b - e.latTarget),
        Math.abs(e.bypass) < 0.06 &&
          (e.bypass = b > e.latTarget ? 0.06 : -0.06),
        (e.bypassR = e.s + e.halfL + (i > 0 ? i : 0)),
        (e.bypassS = e.bypassR + 2 * r + e.halfL + 2),
        (e.pullOut = 3),
        (e.blinker = Et(b < e.lat ? -1 : 1, this.side)),
        (e.blinkT = 2.5),
        !0
      );
    }
    corridorClear(e, t, n, r) {
      let i = t - e.halfW - 0.2,
        a = t + e.halfW + 0.2,
        o = e.obsStill > 8;
      for (let t = this.hL(e.link); t >= 0; t = this.nextL[t]) {
        let s = this.cars[t];
        if (s === e || s.lat + s.halfW < i || s.lat - s.halfW > a) continue;
        let c = s.s - e.s;
        if (
          !(s.two && !e.two && (c < 0 || s.v > 1 || o)) &&
          !(c < 0 && s.lat - e.lat < 0.6 && e.lat - s.lat < 0.6) &&
          c > -n - s.halfL &&
          c < r + s.halfL
        )
          return !1;
      }
      return !0;
    }
    stepBack(e, t) {
      e.back -= t;
      let n = e.s - e.halfL - 0.5,
        r = Math.sin(e.heading),
        i = -Math.cos(e.heading),
        a = e.x - r * (e.halfL + 1.2),
        o = e.z - i * (e.halfL + 1.2);
      ((this.senseSelf = e.body),
        (this.senseLevel = e.y > 1.2 || this.py > 2.5),
        (this.senseY = e.y));
      let s = this.ctx.dynamics.query(
        a,
        o,
        e.halfW + 0.9,
        this.tmpBodies,
        this.senseFilter,
      );
      for (let t = 0; t < s; t++) {
        let a = this.tmpBodies[t];
        a !== e.body && (a.x - e.x) * r + (a.z - e.z) * i < 0 && (n = 0);
      }
      for (let t = this.hL(e.link); t >= 0; t = this.nextL[t]) {
        let r = this.cars[t];
        if (
          r === e ||
          r.s > e.s ||
          r.lat + r.halfW < e.lat - e.halfW - 0.2 ||
          r.lat - r.halfW > e.lat + e.halfW + 0.2
        )
          continue;
        let i = e.s - r.s - r.halfL - e.halfL;
        i < n && (n = i);
      }
      if (n > 0.9) {
        let r = Math.min(1.3 * t, n - 0.9);
        ((e.s -= r), (e.backed += r));
      } else e.back = 0;
      ((e.v = 0),
        (e.acc = 0),
        (e.braking = !1),
        this.pose(e, t),
        e.back <= 0 &&
          ((e.back = 0),
          (e.blocked = 0),
          this.sense(e),
          e.obsGap < 30 &&
            this.planBypass(e, e.obsLat, e.obsExt, e.obsExtF, e.obsGap)));
    }
    oncomingClear(e, t, n = -1e9, r = 2) {
      let i = this.links[e.link],
        a = i.reverse;
      if (a < 0) return !0;
      let o = this.cars;
      for (let s = this.hL(a); s >= 0; s = this.nextL[s]) {
        let a = o[s];
        if (a.halfW - a.lat < n - 0.2) continue;
        let c = i.length - a.s - e.s;
        if (c > -a.halfL - e.halfL && c < t + a.halfL + a.v * r) return !1;
      }
      for (let s = this.hJ(a); s >= 0; s = this.nextJ[s]) {
        let a = o[s];
        if (
          !(a.halfW - a.nextLat < n - 0.2) &&
          i.length + (a.jLen - a.js) - e.s < t + a.halfL + a.v * r
        )
          return !1;
      }
      return !0;
    }
    honk(e, t) {
      (e.hornCd > 0 && !t) ||
        ((e.hornCd = 5 + this.rng.next() * 6), this.onHorn(e));
    }
    honkedAt(e, t, n) {
      let r = Math.sin(n),
        i = -Math.cos(n);
      for (let a = 0; a < this.active.length; a++) {
        let o = this.active[a];
        if (o.mode === 2) continue;
        let s = o.x - e,
          c = o.z - t,
          l = s * r + c * i;
        l < 2 ||
          l > 32 ||
          Math.abs(s * -i + c * r) > 5 ||
          Math.abs(z(o.heading - n)) > 0.8 ||
          ((o.hurry = 3),
          o.two && o.mode === 0 && o.bypass === 0 && (o.bypass = 0.7));
      }
    }
    yieldToSirens(e) {
      if (!this.nSirens || e.mode !== 0) return;
      let t = this.sirens;
      for (let n = 0; n < this.nSirens; n++) {
        let r = t[n * 3],
          i = t[n * 3 + 1],
          a = t[n * 3 + 2],
          o = e.x - r,
          s = e.z - i,
          c = o * o + s * s;
        if (c > 4900 || c < 1) continue;
        let l = Math.sin(a),
          u = -Math.cos(a);
        if (!(o * l + s * u < 0) && !(Math.abs(z(e.heading - a)) > 0.7)) {
          ((e.yieldSiren = 2),
            e.dwellS < 0 &&
              (e.latTarget = this.net.curb[e.link] - e.halfW - 0.35),
            (e.blinker = Et(1, this.side)),
            (e.blinkT = 2));
          return;
        }
      }
    }
  };
