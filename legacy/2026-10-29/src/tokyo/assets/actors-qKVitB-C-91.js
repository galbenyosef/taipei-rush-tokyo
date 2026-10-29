// tokyo/assets/actors-qKVitB-C 91 — math
// Lines 40704-44545 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var nC = class {
  ctx;
  peds = [];
  nav;
  spots;
  render;
  bubbles;
  crowds = [];
  pools;
  cols = { top: 0, bottom: 0, outer: 0 };
  stats = {
    count: 0,
    alive: 0,
    visible: 0,
    near: 0,
    far: 0,
    crowds: 0,
    jsMs: 0,
    target: 0,
    bodies: 0,
    lite: 0,
  };
  density = 1;
  count = 0;
  enabled = !0;
  maxOverride = -1;
  ambientOff = !1;
  rng = new ze(lt ^ 40661);
  rand = () => this.rng.next();
  crowdSeq = 1;
  px = 0;
  pz = 0;
  pvx = 0;
  pvz = 0;
  onFoot = !0;
  lastPx = NaN;
  lastPz = NaN;
  hour = 12;
  rain = 0;
  sunny = !1;
  time = 0;
  frame = 0;
  popT = 0;
  initial = !0;
  rainOverride = -1;
  candE = new Int32Array(4096);
  candS0 = new Float32Array(4096);
  candS1 = new Float32Array(4096);
  candCum = new Float64Array(4096);
  nCand = 0;
  areaW = 0;
  tmpIds = [];
  spotIds = [];
  gHead = new Int32Array(16384);
  gNext = new Int32Array(170);
  gox = 0;
  goz = 0;
  vehs = [];
  movers = [];
  vehFilter = (e) => e.kind === `vehicle`;
  push = ot();
  tmpPos = { x: 0, y: 0, z: 0 };
  hit = { edge: -1, s: 0, lat: 0, dist: 0 };
  tx = 0;
  tz = 0;
  sdx = 0;
  sdz = 0;
  candW = new Float32Array(16);
  candId = new Int32Array(16);
  rayO = new L();
  rayD = new L();
  dmgDir = new L();
  dmgInfo = { amount: 0, source: `impact` };
  gEul = new O();
  gQ = new I();
  gV = new L();
  lastReport = -99;
  screamCd = 0;
  heyCd = 0;
  chatterT = 2;
  cultureT = 1;
  lookUpT = 0;
  jsAvg = 0;
  visIdx = new Int32Array(170);
  visDist = new Float32Array(170);
  avatars = null;
  region;
  constructor(e, t, n, r, i, a) {
    ((this.ctx = e),
      (this.region = a ?? null),
      (this.nav = t),
      (this.spots = n),
      (this.render = r),
      (this.bubbles = i),
      (this.pools = r.defs.length ? new RS(r.defs) : null));
    for (let e = 0; e < 170; e++) {
      let t = new Jx(e);
      ((t.body.onDamage = (e) => this.onDamage(t, e)),
        (t.body.onImpact = (e, n, r) => this.onImpact(t, e, n, r)),
        this.peds.push(t));
    }
    this.render.configure(e.quality.level, e.quality.shadows);
  }
  rMax() {
    return this.rBase() * this.rScale;
  }
  rBase() {
    let e = this.ctx.quality.level;
    return e === `low` ? 44 : e === `medium` ? 52 : e === `high` ? 60 : 68;
  }
  rScale = 1;
  lodK = 1;
  nResolve = 0;
  maxPeds() {
    if (this.maxOverride >= 0) return Math.min(160, this.maxOverride);
    let e = 1 - 0.2 * (this.ctx.renderer?.shed ?? 0);
    return Math.min(
      160,
      Math.round(
        this.ctx.quality.maxPeds * eC(this.density, 0, 1.5) * this.busy * e,
      ),
    );
  }
  busy = 1;
  panic(e, t, n, r = `generic`) {
    let i = 0,
      a = n * n;
    for (let n of this.peds) {
      if (!n.active || !n.alive || (n.scripted && n.state === 13)) continue;
      let o = n.state;
      if (o === 6 || o === 7 || o === 9 || o === 8 || o === 10 || o === 14)
        continue;
      let s = n.x - e,
        c = n.z - t,
        l = s * s + c * c;
      if (l > a) continue;
      let u = Math.sqrt(l);
      if (
        (n.bike
          ? this.flee(n, e, t, this.rng.range(6, 10))
          : (r === `gun` || r === `generic`) && u < 13 && this.rng.chance(0.3)
            ? this.cower(n, e, t)
            : r !== `gun` &&
                u > 9 &&
                this.rng.chance(0.14) &&
                (n.kind === `student` ||
                  n.kind === `tourist` ||
                  n.kind === `office`)
              ? this.film(n, e, t)
              : this.flee(n, e, t, this.rng.range(7, 13)),
        i < 3 && u < 30 && this.rng.chance(0.5))
      ) {
        i++;
        let e =
          r === `gun`
            ? this.rng.chance(0.5)
              ? `shoot`
              : `help`
            : r === `explosion`
              ? `omg`
              : this.rng.chance(0.5)
                ? `help`
                : `aaah`;
        this.say(n, e, !0);
      }
    }
  }
  spawnFleeing(e, t, n, r) {
    let i =
        r ??
        this.rng.pick([
          `office`,
          `uncle`,
          `auntie`,
          `student`,
          `delivery`,
          `tourist`,
        ]),
      a = this.alloc(i, e, this.spawnY(e, t), t, !0);
    if (!a) return;
    ((a.heading = n ?? this.rng.next() * VS), (a.fade = 1));
    let o = e - this.px,
      s = t - this.pz,
      c = Math.sqrt(o * o + s * s) || 1;
    (this.startStumble(a, o / c, s / c, 2.2),
      (a.threatX = this.px),
      (a.threatZ = this.pz),
      (a.fleeAfter = !0),
      this.say(a, `carjack`, !0));
  }
  nearest(e, t, n) {
    let r = null,
      i = n * n;
    for (let n of this.peds) {
      if (!n.active || !n.alive || n.fade < 0.5) continue;
      let a = n.x - e,
        o = n.z - t,
        s = a * a + o * o;
      s < i && ((i = s), (r = n));
    }
    return r ? r.body : null;
  }
  crowd(e, t, n, r, i, a) {
    let o = a?.mode === `watch` ? 1 : a?.mode === `queue` ? 2 : 0,
      s =
        i && i.length
          ? i.slice()
          : [`tourist`, `student`, `office`, `auntie`, `uncle`],
      c =
        !s.some(
          (e) =>
            e === `worshipper` ||
            e === `monk` ||
            e === `vendor` ||
            e === `tourist` ||
            e === `office` ||
            e === `delivery`,
        ) &&
        s.includes(`auntie`) &&
        s.includes(`uncle`) &&
        s.includes(`elder`),
      l = (a?.poses ?? []).map((e) => $S[e] ?? 0),
      u = Math.max(0, Math.round(r)),
      d = {
        id: this.crowdSeq++,
        x: e,
        z: t,
        r: Math.max(1.5, n),
        n: u,
        kinds: s,
        released: !1,
        members: 0,
        want: 0,
        t0: this.time,
        mode: o,
        lookX: a?.lookX ?? e,
        lookZ: a?.lookZ ?? t,
        poses: l,
        trash: a?.carry ? a.carry === `trash` : c,
        line: o === 2 && !l.some((e) => e === 1 || e === 19 || e === 15),
        hx: e,
        hz: t,
        ldx: 1,
        ldz: 0,
        gap: 0.78,
        occ: new Int16Array(Math.max(1, Math.ceil(u * 1.4))).fill(-1),
        serveT: 0,
        chant: !!a?.chant,
        chantT: 1,
        ...(a?.dress ? { dress: a.dress } : null),
        sheltered:
          a?.sheltered ??
          this.roofAbove(e, this.ctx.plan.groundHeight(e, t), t),
      };
    (d.line && this.layoutLine(d, a?.lookX, a?.lookZ), this.crowds.push(d));
    let f = !1;
    return () => {
      if (f) return;
      ((f = !0), (d.released = !0));
      for (let e of this.peds)
        e.active && e.crowdRef === d && this.releaseCrowdPed(e);
      let e = this.crowds.indexOf(d);
      e >= 0 && this.crowds.splice(e, 1);
    };
  }
  roofAbove(e, t, n) {
    try {
      let r = this.ctx.env;
      if (
        typeof r?.isSheltered == `function` &&
        r.isSheltered(e, n, t + 1) &&
        !r.isSheltered(1e7, 1e7, 0)
      )
        return !0;
      let i = this.ctx.statics;
      return (
        this.rayO.set(e, t + 1.95, n),
        this.rayD.set(0, 1, 0),
        i.raycast(this.rayO, this.rayD, 28)
          ? !0
          : (typeof i.floorAt == `function`
              ? i.floorAt(e, n, t + 60, 0)
              : -1 / 0) >
            t + 2.3
      );
    } catch {
      return !1;
    }
  }
  thin(e, t, n, r) {
    let i = { x: e, z: t, r2: n * n, until: this.time + Math.max(0, r) };
    this.thinZones.push(i);
    for (let n of this.peds) {
      if (!n.active || n.scripted || n.visible) continue;
      let r = n.x - e,
        a = n.z - t;
      r * r + a * a < i.r2 && this.free(n);
    }
    return () => {
      let e = this.thinZones.indexOf(i);
      e >= 0 && this.thinZones.splice(e, 1);
    };
  }
  thinZones = [];
  clearZones = [];
  clearArea(e, t, n, r) {
    let i = { x: e, z: t, r2: n * n, until: this.time + Math.max(0, r) };
    (this.thinZones.push(i), this.clearZones.push(i));
    for (let n of this.peds) {
      if (!n.active || n.scripted) continue;
      let r = n.x - e,
        a = n.z - t;
      r * r + a * a < i.r2 && this.free(n);
    }
    return () => {
      for (let e of [this.thinZones, this.clearZones]) {
        let t = e.indexOf(i);
        t >= 0 && e.splice(t, 1);
      }
    };
  }
  inClear(e, t) {
    let n = this.clearZones;
    for (let r = n.length - 1; r >= 0; r--) {
      let i = n[r];
      if (i.until < this.time) {
        n.splice(r, 1);
        continue;
      }
      let a = e - i.x,
        o = t - i.z;
      if (a * a + o * o < i.r2) return !0;
    }
    return !1;
  }
  thinned(e, t) {
    let n = this.thinZones;
    for (let r = n.length - 1; r >= 0; r--) {
      let i = n[r];
      if (i.until < this.time) {
        n.splice(r, 1);
        continue;
      }
      let a = e - i.x,
        o = t - i.z;
      if (a * a + o * o < i.r2) return !0;
    }
    return !1;
  }
  layoutLine(e, t, n) {
    let r = e.occ.length,
      i = Math.min(Math.max(e.r * 2, 3), (r - 1) * e.gap),
      a = 0,
      o = 0,
      s = (t ?? e.x) - e.x,
      c = (n ?? e.z) - e.z,
      l = Math.sqrt(s * s + c * c);
    if (l > 1) {
      ((a = -s / l), (o = -c / l));
      let t = Math.min(i * 0.5, Math.max(0, l - 1));
      ((e.hx = e.x - a * t), (e.hz = e.z - o * t));
    } else {
      if (this.nav.nearestEdge(e.x, e.z, 25, this.hit)) {
        let e = this.nav.edges[this.hit.edge];
        ((a = e.dx), (o = e.dz));
      } else ((a = 1), (o = 0));
      let t = e.x - a * i * 0.5,
        n = e.z - o * i * 0.5,
        r = e.x + a * i * 0.5,
        s = e.z + o * i * 0.5,
        c = 1e9,
        l = 1e9,
        u = 1e9,
        d = this.spots.nearDoors(e.x, e.z, i * 0.5 + 8, this.doorIds);
      for (let i = 0; i < d; i++) {
        let a = this.spots.doors[this.doorIds[i]],
          o = (a.x - e.x) ** 2 + (a.z - e.z) ** 2;
        o >= u ||
          ((u = o),
          (c = (a.x - t) ** 2 + (a.z - n) ** 2),
          (l = (a.x - r) ** 2 + (a.z - s) ** 2));
      }
      ((l < c || (c === l && ((e.id * 2654435761) >>> 0) % 2 == 1)) &&
        ((a = -a), (o = -o)),
        (e.hx = e.x - a * i * 0.5),
        (e.hz = e.z - o * i * 0.5));
    }
    ((e.ldx = a),
      (e.ldz = o),
      (e.serveT = e.trash ? 1e9 : this.rng.range(8, 20)));
  }
  linePos(e, t, n) {
    let r = rC(e.id, t),
      i = t * e.gap + (r - 0.5) * 0.18,
      a = (rC(t, e.id + 7) - 0.5) * 0.24;
    return (
      (n.x = e.hx + e.ldx * i - e.ldz * a),
      (n.z = e.hz + e.ldz * i + e.ldx * a),
      n
    );
  }
  lp = { x: 0, z: 0 };
  spawnY(e, t, n) {
    let r = this.ctx.plan.groundHeight(e, t);
    return this.ctx.groundAt(
      e,
      t,
      n !== void 0 && Number.isFinite(n) ? n : r + 0.3,
      0.45,
    );
  }
  allocScripted = !1;
  spawnScripted(e, t, n = {}) {
    let r =
      n.kind ??
      this.rng.pick([`office`, `student`, `tourist`, `uncle`, `auntie`]);
    this.allocScripted = !0;
    let i = this.alloc(r, e, this.spawnY(e, t, n.y), t, !0);
    if (((this.allocScripted = !1), !i)) return null;
    ((i.scripted = !0),
      (i.fade = 1),
      (i.heading = i.faceH = n.heading ?? 0),
      (i.tx = e),
      (i.tz = t),
      (i.state = 13),
      (i.indoors = !!n.indoors),
      (i.idlePose = $S[n.pose ?? `idle`] ?? 0),
      (i.seatH =
        n.seat !== void 0 && Number.isFinite(n.seat)
          ? eC(n.seat - 0.45, -0.3, 0.6)
          : 0));
    let a = i.gen,
      o = this,
      s = () => i.gen === a && i.active;
    return {
      get body() {
        return i.body;
      },
      get alive() {
        return s() && i.alive;
      },
      get x() {
        return i.x;
      },
      get z() {
        return i.z;
      },
      get kind() {
        return i.kind;
      },
      moveTo(e, t, n = !1) {
        s() &&
          i.alive &&
          ((i.tx = e),
          (i.tz = t),
          (i.scriptRun = n),
          i.idlePose !== 23 && i.idlePose !== 24 && (i.idlePose = 0),
          (i.state === 13 || i.state === 3 || i.state === 2) && (i.state = 13));
      },
      stop(e, t, n) {
        s() &&
          i.alive &&
          ((i.tx = i.x),
          (i.tz = i.z),
          t !== void 0 && (i.faceH = t),
          (i.idlePose = $S[e ?? `idle`] ?? 0),
          n !== void 0 &&
            Number.isFinite(n) &&
            (i.seatH = eC(n - 0.45, -0.3, 0.6)),
          i.state === 3 && (i.state = 13));
      },
      flee(e, t) {
        s() && i.alive && o.flee(i, e, t, 10);
      },
      say(e) {
        s() && (e in ay || o.bubbles.has(e)) && o.say(i, e, !1);
      },
      get onHit() {
        return s() ? i.hitCb : null;
      },
      set onHit(e) {
        s() && (i.hitCb = typeof e == `function` ? e : null);
      },
      release() {
        s() &&
          ((i.scripted = !1),
          (i.indoors = !1),
          (i.hitCb = null),
          i.alive &&
            (i.state === 13 || i.state === 2) &&
            (o.attachToEdge(i) ? (i.state = 0) : o.beginFade(i)));
      },
    };
  }
  loops = [];
  cyclistLoop(e, t, n = 4.2) {
    let r = e.filter((e) => e && Number.isFinite(e.x) && Number.isFinite(e.z));
    if (r.length < 2 || !(t > 0)) return () => {};
    let i = {
      x: [],
      z: [],
      cum: [0],
      len: 0,
      speed: eC(n, 1.5, 8),
      riders: [],
      want: Math.min(24, Math.round(t)),
      spawnT: 0,
      released: !1,
    };
    for (let e of r) (i.x.push(e.x), i.z.push(e.z));
    let a = r.length;
    for (let e = 0; e < a; e++) {
      let t = (e + 1) % a;
      ((i.len += Math.hypot(i.x[t] - i.x[e], i.z[t] - i.z[e])),
        i.cum.push(i.len));
    }
    if (i.len < 5) return () => {};
    this.loops.push(i);
    for (let e = 0; e < i.want; e++)
      this.loopRider(i, (e / i.want) * i.len, !0);
    return () => {
      if (i.released) return;
      i.released = !0;
      let e = this.loops.indexOf(i);
      e >= 0 && this.loops.splice(e, 1);
      for (let e of i.riders) {
        let t = e.p;
        t.gen === e.gen &&
          t.active &&
          ((t.scripted = !1),
          t.alive &&
            t.state === 13 &&
            (this.attachToEdge(t) ? (t.state = 0) : this.beginFade(t)));
      }
      i.riders.length = 0;
    };
  }
  loopAt(e, t, n) {
    t = ((t % e.len) + e.len) % e.len;
    let r = 0;
    for (; r < e.x.length - 1 && e.cum[r + 1] < t;) r++;
    let i = (r + 1) % e.x.length,
      a = e.cum[r + 1] - e.cum[r] || 1,
      o = (t - e.cum[r]) / a;
    return (
      (n.dx = (e.x[i] - e.x[r]) / a),
      (n.dz = (e.z[i] - e.z[r]) / a),
      (n.x = e.x[r] + (e.x[i] - e.x[r]) * o),
      (n.z = e.z[r] + (e.z[i] - e.z[r]) * o),
      n
    );
  }
  lpt = { x: 0, z: 0, dx: 0, dz: 0 };
  loopRider(e, t, n) {
    let r = this.loopAt(e, t, this.lpt);
    if (!n && this.seen(r.x, r.z, Math.hypot(r.x - this.px, r.z - this.pz)))
      return !1;
    this.allocScripted = !0;
    let i = this.alloc(
      `student`,
      r.x,
      this.spawnY(r.x, r.z),
      r.z,
      !0,
      !1,
      !1,
      !0,
    );
    if (((this.allocScripted = !1), !i)) return !1;
    if (!i.bike) return (this.free(i), !1);
    ((i.scripted = !0),
      (i.state = 13),
      (i.idlePose = 18),
      (i.heading = i.faceH = Math.atan2(r.dx, -r.dz)));
    let a = this.rng.range(0.95, 1.05);
    return (
      (i.walkSpeed = e.speed * a),
      (i.brake = 1),
      (i.tx = r.x),
      (i.tz = r.z),
      e.riders.push({ p: i, gen: i.gen, s: t, k: a }),
      !0
    );
  }
  loopsTick(e) {
    for (let t of this.loops) {
      let n = t.riders;
      for (let e = n.length - 1; e >= 0; e--) {
        let r = n[e],
          i = r.p;
        if (
          i.gen !== r.gen ||
          !i.active ||
          !i.alive ||
          !i.bike ||
          i.state !== 13 ||
          !i.scripted
        ) {
          (i.gen === r.gen && i.active && (i.scripted = !1), n.splice(e, 1));
          continue;
        }
        let a = r.s,
          o = 1e9;
        for (let e = -6; e <= 6; e++) {
          let n = this.loopAt(t, r.s + e * 2, this.lpt),
            s = (n.x - i.x) ** 2 + (n.z - i.z) ** 2;
          s < o && ((o = s), (a = r.s + e * 2));
        }
        r.s = a > r.s || o > 16 ? a : r.s;
        let s = this.loopAt(t, r.s + 5, this.lpt);
        ((i.tx = s.x), (i.tz = s.z));
      }
      let r = n.length;
      if (r > 1) {
        let e = t.len / r;
        for (let i = 0; i < r; i++) {
          let a = n[i],
            o = ((a.s % t.len) + t.len) % t.len,
            s = t.len;
          for (let e = 0; e < r; e++) {
            if (e === i) continue;
            let r = (((n[e].s - o) % t.len) + t.len) % t.len;
            r > 0 && r < s && (s = r);
          }
          a.p.walkSpeed =
            t.speed * a.k * eC(1 + ((s - e) / e) * 0.35, 0.85, 1.15);
        }
      } else r === 1 && (n[0].p.walkSpeed = t.speed * n[0].k);
      ((t.spawnT -= e),
        n.length < t.want &&
          t.spawnT <= 0 &&
          ((t.spawnT = 0.5), this.loopRider(t, this.rng.next() * t.len, !1)));
    }
  }
  lineup(e, t, n = 0, r = 0, i = 99, a = 0.9, o = `idle`) {
    let s = this.pools?.defs ?? [],
      c = [],
      l = Math.cos(n),
      u = Math.sin(n),
      d = Math.min(i, s.length - r);
    for (let i = 0; i < d; i++) {
      let f = s[r + i],
        p = (i - (d - 1) / 2) * a,
        m = this.spawnScripted(e + l * p, t + u * p, {
          heading: n,
          kind:
            f.role === `child` || f.role === `jogger` || f.role === `rain`
              ? `student`
              : f.role === `festival`
                ? `tourist`
                : f.role === `police`
                  ? `office`
                  : f.role,
          pose: o,
        });
      if (!m) break;
      let h = this.peds[m.body.userData.ped],
        g = h.bike;
      ((h.accBase &= ~(Y(16) | Y(15) | Y(17) | Y(18) | Y(19) | Y(10))),
        this.dress(h, f.role, f.id),
        (h.bike = g),
        c.push(`${f.id}:${f.desc.id}`));
    }
    return c;
  }
  bodyInfo(e) {
    let t = e.userData?.ped;
    if (typeof t != `number` || e.owner !== `peds`) return null;
    let n = this.peds[t];
    return !n || !n.active
      ? null
      : {
          kind: n.kind,
          alive: n.alive,
          down: n.state === 7 || n.state === 6 || n.state === 9,
        };
  }
  lookUp(e, t, n, r) {
    let i = n * n;
    for (let n of this.peds) {
      if (
        !n.active ||
        !n.alive ||
        n.bike ||
        (n.state !== 0 && n.state !== 1 && n.state !== 2 && n.state !== 12)
      )
        continue;
      let a = n.x - e,
        o = n.z - t;
      a * a + o * o > i ||
        this.rng.chance(0.35) ||
        (this.leaveGroup(n),
        (n.state = 2),
        (n.stateT = 0),
        (n.tx = n.x),
        (n.tz = n.z),
        (n.faceH = Math.atan2(e - n.x, -(t - n.z)) + this.rng.range(-0.5, 0.5)),
        (n.idlePose = this.rng.chance(0.25) ? 12 : 17),
        (n.timer = r * this.rng.range(0.7, 1.1)),
        this.rng.chance(0.15) &&
          this.say(n, this.rng.chance(0.5) ? `wow101` : `film`, !1));
    }
    this.lookUpT = r;
  }
  clearAmbient() {
    for (let e of this.peds) e.active && !e.scripted && this.free(e);
    ((this.initial = !0), (this.popT = 0));
  }
  update(e) {
    let t = performance.now(),
      n = this.ctx;
    ((this.time += e),
      this.frame++,
      (this.lodK = 1 - 0.25 * (n.renderer?.shed ?? 0)));
    let r = n.player,
      i = r?.position;
    i && ((this.px = i.x), (this.pz = i.z));
    let a = r?.body;
    this.onFoot = !r || r.mode === `foot`;
    let o = r?.mode === `vehicle` ? n.vehicles?.playerVehicle?.body : a;
    ((this.pvx = o?.vx ?? 0),
      (this.pvz = o?.vz ?? 0),
      !Number.isNaN(this.lastPx) &&
        Math.abs(this.px - this.lastPx) + Math.abs(this.pz - this.lastPz) >
          80 &&
        this.clearAmbient(),
      (this.lastPx = this.px),
      (this.lastPz = this.pz));
    let s = n.env;
    ((this.hour = typeof s?.hour == `number` ? s.hour : 12),
      (this.rain =
        this.rainOverride >= 0
          ? this.rainOverride
          : typeof s?.rain == `number`
            ? s.rain
            : 0));
    let c = bt.uNight.value;
    if (
      ((this.sunny =
        this.rain < 0.05 &&
        c < 0.3 &&
        Qx(this.hour, 10, 16.5) &&
        (s?.weather === `clear` || s?.weather === void 0)),
      (this.screamCd -= e),
      (this.heyCd -= e),
      (this.lookUpT -= e),
      !this.enabled)
    ) {
      if (this.count > 0) for (let e of this.peds) e.active && this.free(e);
      return;
    }
    if (
      ((this.popT -= e),
      this.popT <= 0 && ((this.popT = 0.25), this.population()),
      this.buildGrid(),
      !(this.frame & 1) || this.vehs.length === 0)
    ) {
      this.vehs.length = 0;
      try {
        n.dynamics.query(this.px, this.pz, 72, this.vehs, this.vehFilter);
      } catch {
        this.vehs.length = 0;
      }
      let e = this.movers;
      e.length = 0;
      for (let t = 0; t < this.vehs.length; t++) {
        let n = this.vehs[t];
        n.vx * n.vx + n.vz * n.vz >= 1.5 && e.push(n);
      }
    }
    this.nResolve = 0;
    for (let t = 0; t < 170; t++) {
      let n = this.peds[t];
      n.active && this.stepPed(n, e);
    }
    (this.chatter(e),
      this.chantTick(e),
      this.queuesTick(e),
      this.cultureHooks(e),
      this.busStopsTick(e),
      this.loops.length && this.loopsTick(e),
      this.playerThreats(e),
      (this.jsAvg += (performance.now() - t - this.jsAvg) * 0.05));
  }
  lateUpdate(e) {
    let t = performance.now(),
      n = this.ctx.camera,
      r = this.render;
    (r.tick(e), r.begin(n));
    let i = n.position.x,
      a = n.position.y,
      o = n.position.z,
      s = 0,
      c = 0,
      l = 0,
      u = this.visIdx,
      d = this.visDist;
    for (let t = 0; t < 170; t++) {
      let n = this.peds[t];
      if (!n.active) continue;
      (n.alive && c++, n.body.active && l++);
      let f = n.x - i,
        p = n.z - o,
        m = n.y + 0.9 - a,
        h = Math.sqrt(f * f + p * p + m * m);
      if (
        ((n.visible =
          h < r.maxDist &&
          n.fade > 0.01 &&
          r.visible(n.x, n.y + 0.9, n.z, 1.4)),
        !n.visible)
      ) {
        n.hiddenT += e;
        continue;
      }
      n.hiddenT = 0;
      let g = n.updAcc < 0.2 ? n.updAcc : 0.2;
      ((n.rx = n.x + n.vx * g),
        (n.rz = n.z + n.vz * g),
        (n.rphase = n.phase + n.phaseRate * g),
        (u[s] = t),
        (d[t] = h),
        s++,
        h < 45 &&
          this.bubbles.live > 0 &&
          this.bubbles.follow(
            n.idx,
            n.x,
            n.y + (n.state === 7 || n.state === 9 ? 0.6 : 1.85 * n.height),
            n.z,
          ));
    }
    for (let e = 1; e < s; e++) {
      let t = u[e],
        n = d[t],
        r = e - 1;
      for (; r >= 0 && d[u[r]] > n;) ((u[r + 1] = u[r]), r--);
      u[r + 1] = t;
    }
    let f = this.avatars;
    if (f?.enabled)
      try {
        (f.update(e, this.peds, u, d, s),
          (r.avatarsNear = Math.max(
            0,
            Math.min(r.lod0Max - 2, f.stats.active),
          )));
      } catch (e) {
        ((r.avatarsNear = 0),
          console.warn(`[peds] avatars disabled after an error`, e),
          (f.enabled = !1));
        for (let e of this.peds)
          ((e.avSlot = -1), (e.avW = 0), (e.avHands = !1));
      }
    let p = 0;
    for (let e = 0; e < s; e++) {
      let t = u[e],
        n = this.peds[t];
      (r.push(n, d[t]), n.bike && p++);
    }
    (r.pushDropped(e, i, o), r.end(), this.bubbles.update(e, n));
    let m = this.stats;
    ((m.count = this.count),
      (m.alive = c),
      (m.visible = s),
      (m.near = r.n0 + r.n1),
      (m.hero = r.nHero),
      (m.far = r.nFar),
      (m.cyclists = p),
      (m.tris = r.batch.tris),
      (m.avatars = f?.enabled ? f.stats.active : 0),
      (m.crowds = this.crowds.length),
      (m.bodies = l),
      (this.jsAvg += (performance.now() - t) * 0.05),
      (m.jsMs = +this.jsAvg.toFixed(3)));
  }
  population() {
    let e = this.ctx,
      t = this.rBase();
    this.refreshCandidates(t);
    let n = this.areaW / (0.15 * t * t),
      r = eC(1 / Math.sqrt(Math.max(1, n)), 0.68, 1);
    this.rScale += (r - this.rScale) * (this.initial ? 1 : 0.1);
    let i = this.rMax(),
      a = t + 70;
    this.rScale < 0.99 && this.refreshCandidates(i);
    let o = e.plan.districtAt(this.px, this.pz),
      s = this.region?.nightlife,
      c = s
        ? s.includes(o.id)
        : o.id === `ximending` || o.id === `shilin` || o.id === `xinyi`,
      l = this.region?.activity,
      u =
        (l ? eC(l(o.id, this.hour), 0, 1) : qx(this.hour, c)) *
        (1 - 0.3 * eC(this.rain, 0, 1)),
      d = eC(n, 0.3, 1),
      f = 0,
      p = !1,
      m = eC(e.quality.maxPeds / 80, 0.35, 1.4) * eC(this.density, 0, 1.5);
    for (let e of this.crowds) {
      let t = Math.hypot(e.x - this.px, e.z - this.pz);
      ((e.want = !e.released && t < i + e.r + 25 ? Math.round(e.n * m) : 0),
        (f += e.want),
        e.want > 0 && e.mode === 0 && t < 60 + e.r && (p = !0));
    }
    let h = this.region?.busy?.[o.id],
      g =
        h === void 0
          ? o.id === `ximending`
            ? 1.5
            : p
              ? 1.2
              : 1
          : Math.max(h, p ? 1.2 : 1);
    this.busy += (g - this.busy) * (this.initial ? 1 : 0.2);
    let _ = this.maxPeds(),
      v = this.ambientOff ? 0 : Math.round(this.liteBudget() * u),
      y = Math.max(0, _ - v),
      b = Math.floor(y * (p ? 0.9 : 0.7)),
      x = f > b ? b / f : 1,
      S = this.ambientOff
        ? 0
        : Math.round(Math.max(0, y - Math.min(f, b)) * u * d);
    ((this.stats.target = S), (this.stats.lite = 0));
    let C = 0,
      w = 0,
      T = null,
      E = null,
      D = null,
      O = this.ctx.camera;
    O.getWorldDirection(this.rayD);
    let k = this.rayD.x,
      A = this.rayD.z;
    for (let e of this.peds) {
      if (!e.active || e.scripted || e.dying) continue;
      let t = e.crowdRef;
      if (t) {
        ((Math.hypot(t.x - this.px, t.z - this.pz) > i + t.r + 30 &&
          !e.visible) ||
          (t.members > Math.round(t.want * x) + 1 && !e.visible)) &&
          this.free(e);
        continue;
      }
      if (e.state !== 9) {
        if (e.lite) {
          if (e.distP < i - 3 && (C < S || e.distP < 35)) {
            ((e.lite = !1), C++);
            continue;
          }
          if (e.distP > a + 8 && (!e.visible || e.distP > a + 40)) {
            this.free(e);
            continue;
          }
          (w++, !e.visible && (!D || e.distP > D.distP) && (D = e));
          continue;
        }
        if (e.distP > i + 8) {
          if (e.state === 0 && e.spot < 0 && w < v + 4 && e.edge >= 0) {
            ((e.lite = !0), this.setBody(e, !1));
            {
              let t = this.nav.edges[e.edge],
                n = e.dir > 0,
                r = n ? t.ax : t.bx,
                i = n ? t.az : t.bz,
                a =
                  (e.x - r) * (n ? t.dx : -t.dx) +
                  (e.z - i) * (n ? t.dz : -t.dz);
              ((e.lastS = eC(a, 0, t.len)),
                t.cross && (e.crossing = +(a > 0.3)));
            }
            w++;
            continue;
          }
          if (!e.visible || e.distP > i + 45) {
            this.free(e);
            continue;
          }
        }
        if (
          (C++,
          !e.visible &&
            e.distP > 30 &&
            e.state === 0 &&
            (!T || e.distP > T.distP) &&
            (T = e),
          !e.visible &&
            e.hiddenT > 4 &&
            e.distP > 22 &&
            e.state === 0 &&
            e.spot < 0)
        ) {
          let t = e.x - O.position.x,
            n = e.z - O.position.z;
          t * k + n * A < 0 && (!E || e.distP > E.distP) && (E = e);
        }
      }
    }
    (C > S + 3 && T
      ? (this.free(T), C--)
      : E && C >= S * 0.9 && (this.free(E), C--),
      w > v + 3 && D && (this.free(D), w--),
      (this.stats.lite = w));
    for (let e of this.crowds) {
      if (e.released || e.want <= 0) continue;
      let t = Math.round(e.want * x),
        n = 0;
      for (
        ;
        e.members < t &&
        n++ < (this.initial ? 40 : 3) &&
        this.count < 166 &&
        this.spawnCrowdPed(e);
      );
    }
    let j = this.initial ? 90 : 3;
    if (C < S) {
      let e = this.fillSpots(i, Math.min(j, S - C));
      ((C += e), (j -= e));
    }
    let M = 0;
    for (; C < S && j > 0 && M++ < 120 && this.count < 166;) {
      let e =
        (!this.initial && this.rng.chance(0.22) && this.spawnFromDoor(i)) ||
        this.spawnAmbient();
      if (e <= 0) break;
      ((C += e), (j -= e));
    }
    if (w < v) {
      this.refreshLite(i, a);
      let e = this.initial ? 70 : 3;
      for (
        M = 0;
        w < v &&
        e-- > 0 &&
        M++ < 100 &&
        this.count < 166 &&
        this.spawnLite(i, a);
      )
        w++;
    }
    (this.recruit(), (this.initial = !1));
  }
  doorIds = [];
  spawnFromDoor(e) {
    let t = this.spots.nearDoors(this.px, this.pz, e - 4, this.doorIds);
    if (t === 0) return 0;
    let n = this.spots.doors[this.doorIds[this.rng.int(0, t - 1)]],
      r = Math.hypot(n.x - this.px, n.z - this.pz);
    if (r < 5 || r > e || !this.doorOpen(n.kind)) return 0;
    let i = n.x - Math.sin(n.h) * n.depth * 0.6,
      a = n.z + Math.cos(n.h) * n.depth * 0.6,
      o = this.alloc(this.kindAt(n.x, n.z), i, this.spawnY(n.x, n.z), a, !0);
    return o
      ? ((o.heading = n.h + this.rng.range(-0.5, 0.5)),
        this.attachToEdge(o, 12)
          ? ((o.state = 0),
            (o.doorT = 12),
            (n.kind === `bubbletea`
              ? this.rng.chance(0.9)
              : n.kind === `convenience` && this.rng.chance(0.3)) &&
              (o.accBase |= Y(15)),
            1)
          : (this.free(o), 0))
      : 0;
  }
  doorOpen(e) {
    return e === `breakfast`
      ? Qx(this.hour, 6, 11)
      : e === `convenience`
        ? !0
        : e === `mrt`
          ? Qx(this.hour, 6, 24.5)
          : Qx(this.hour, 9, 23.5);
  }
  maybeEnterShop(e) {
    if (
      e.pairSeed ||
      e.scripted ||
      e.distP > 55 ||
      this.count < this.maxPeds() * 0.6
    )
      return;
    let t = this.spots.nearDoors(e.x, e.z, 6, this.doorIds);
    for (let n = 0; n < t; n++) {
      let t = this.spots.doors[this.doorIds[n]],
        r = t.x - e.x,
        i = t.z - e.z,
        a = r * r + i * i;
      if (a > 36 || a < 1 || r * e.vx + i * e.vz < 0) continue;
      let o = this.ctx.plan.surfaceAt((e.x + t.x) * 0.5, (e.z + t.z) * 0.5);
      if (o !== `road` && o !== `crosswalk` && this.doorOpen(t.kind)) {
        if (
          !this.rng.chance(
            t.kind === `convenience` ? 0.45 : t.kind === `mrt` ? 0.4 : 0.28,
          )
        )
          return;
        ((e.state = 16),
          (e.stateT = 0),
          (e.tx = t.x - Math.sin(t.h) * t.depth),
          (e.tz = t.z + Math.cos(t.h) * t.depth),
          (e.faceH = t.h + Math.PI));
        return;
      }
    }
  }
  liteBudget() {
    let e = this.ctx.quality,
      t = e.level === `low` ? 0.2 : e.level === `medium` ? 0.25 : 0.3;
    return Math.round(this.maxPeds() * t);
  }
  liteE = new Int32Array(4096);
  liteS0 = new Float32Array(4096);
  liteS1 = new Float32Array(4096);
  liteCum = new Float64Array(4096);
  nLite = 0;
  liteW = 0;
  refreshLite(e, t) {
    let n = this.nav,
      r = n.edgesNear(this.px, this.pz, t, this.tmpIds),
      i = 0,
      a = 0,
      o = t * t;
    for (let t = 0; t < r && a < 4096; t++) {
      let r = n.edges[this.tmpIds[t]];
      if (r.cross || r.weight <= 0) continue;
      let s = r.ax - this.px,
        c = r.az - this.pz,
        l = s * r.dx + c * r.dz,
        u = l * l - (s * s + c * c - o);
      if (u <= 0) continue;
      let d = Math.sqrt(u),
        f = Math.max(1, -l - d),
        p = Math.min(r.len - 1, -l + d);
      p - f < 1 ||
        (Math.sqrt(Math.max(0, s * s + c * c - l * l)) < e * 0.6 &&
          p - f < 2 * e) ||
        ((i += r.weight * (p - f)),
        (this.liteE[a] = r.id),
        (this.liteS0[a] = f),
        (this.liteS1[a] = p),
        (this.liteCum[a] = i),
        a++);
    }
    ((this.nLite = a), (this.liteW = i));
  }
  spawnLite(e, t) {
    if (this.nLite === 0) return !1;
    for (let n = 0; n < 8; n++) {
      let n = this.rng.next() * this.liteW,
        r = 0,
        i = this.nLite - 1;
      for (; r < i;) {
        let e = (r + i) >> 1;
        this.liteCum[e] < n ? (r = e + 1) : (i = e);
      }
      let a = this.nav.edges[this.liteE[r]],
        o = this.rng.range(this.liteS0[r], this.liteS1[r]),
        s = this.rng.next(),
        c = this.nav.fitLat(
          a,
          this.ctx.statics,
          o,
          a.latMin + (a.latMax - a.latMin) * s,
        );
      if (Number.isNaN(c)) continue;
      s = (c - a.latMin) / Math.max(0.01, a.latMax - a.latMin);
      let l = a.ax + a.dx * o + a.px * c,
        u = a.az + a.dz * o + a.pz * c,
        d = Math.hypot(l - this.px, u - this.pz);
      if (d < e + 4 || d > t) continue;
      let f = this.alloc(
        this.kindAt(l, u, a.district),
        l,
        a.y,
        u,
        !0,
        !1,
        !1,
        this.rng.chance(this.cyclistChance(a)),
      );
      return f
        ? ((f.lite = !0),
          (f.edge = a.id),
          (f.dir = this.rng.chance(0.5) ? 1 : -1),
          (f.lat = c),
          (f.latFrac = s),
          (f.lastS = f.dir > 0 ? o : a.len - o),
          (f.heading = Math.atan2(a.dx * f.dir, -a.dz * f.dir)),
          (f.state = 0),
          this.randomPref(f, a.dx * f.dir, a.dz * f.dir),
          !0)
        : !1;
    }
    return !1;
  }
  refreshCandidates(e) {
    let t = this.nav,
      n = t.edgesNear(this.px, this.pz, e, this.tmpIds),
      r = 0,
      i = 0,
      a = e * e;
    this.ctx.camera.getWorldDirection(this.rayD);
    let o = this.rayD.x,
      s = this.rayD.z,
      c = Math.sqrt(o * o + s * s) || 1;
    ((o /= c), (s /= c));
    for (let e = 0; e < n && i < 4096; e++) {
      let n = t.edges[this.tmpIds[e]];
      if (n.cross || n.weight <= 0) continue;
      let c = n.ax - this.px,
        l = n.az - this.pz,
        u = c * n.dx + l * n.dz,
        d = c * c + l * l - a,
        f = u * u - d;
      if (f <= 0) continue;
      let p = Math.sqrt(f),
        m = Math.max(1, -u - p),
        h = Math.min(n.len - 1, -u + p);
      if (h - m < 1) continue;
      let g = (m + h) * 0.5,
        _ = c + n.dx * g,
        v = l + n.dz * g,
        y = Math.sqrt(_ * _ + v * v) || 1,
        b = (_ * o + v * s) / y;
      ((r +=
        n.weight * (h - m) * (0.5 + 0.9 * Math.max(0, b) + (y < 25 ? 0.4 : 0))),
        (this.candE[i] = n.id),
        (this.candS0[i] = m),
        (this.candS1[i] = h),
        (this.candCum[i] = r),
        i++);
    }
    ((this.nCand = i), (this.areaW = r));
  }
  pickCandidate() {
    if (this.nCand === 0) return -1;
    let e = this.rng.next() * this.areaW,
      t = 0,
      n = this.nCand - 1;
    for (; t < n;) {
      let r = (t + n) >> 1;
      this.candCum[r] < e ? (t = r + 1) : (n = r);
    }
    return t;
  }
  seen(e, t, n) {
    if (n > 165 || !this.render.visible(e, 1, t, 1.2)) return !1;
    let r = this.ctx.camera.position;
    (this.rayO.copy(r), this.rayD.set(e - r.x, 1.2 - r.y, t - r.z));
    let i = this.rayD.length();
    if (i < 1) return !0;
    this.rayD.multiplyScalar(1 / i);
    try {
      if (this.ctx.statics.raycast(this.rayO, this.rayD, i - 0.8)) return !1;
    } catch {}
    return !0;
  }
  spawnAmbient() {
    let e = this.nav,
      t = this.rMax();
    for (let n = 0; n < 10; n++) {
      let n = this.pickCandidate();
      if (n < 0) return 0;
      let r = e.edges[this.candE[n]],
        i = this.rng.range(this.candS0[n], this.candS1[n]),
        a = this.rng.next(),
        o = this.nav.fitLat(
          r,
          this.ctx.statics,
          i,
          r.latMin + (r.latMax - r.latMin) * a,
        );
      if (Number.isNaN(o)) continue;
      a = (o - r.latMin) / Math.max(0.01, r.latMax - r.latMin);
      let s = r.ax + r.dx * i + r.px * o,
        c = r.az + r.dz * i + r.pz * o,
        l = Math.hypot(s - this.px, c - this.pz);
      if (l < 12 || l > t || !this.rng.chance(eC(1.25 - l / t, 0.22, 1)))
        continue;
      let u = this.seen(s, c, l);
      if (!this.initial && u && l < 38) continue;
      if (
        Qx(this.hour, 8, 22) &&
        r.latMax - r.latMin > 1.1 &&
        this.rng.chance(0.075)
      ) {
        let e = this.spawnGroup(r, i, o, s, c, u);
        if (e > 0) return e;
      }
      let d = this.rng.chance(this.cyclistChance(r)),
        f =
          !d &&
          r.park &&
          (Qx(this.hour, 5.5, 8.5) || Qx(this.hour, 18, 21.5)) &&
          this.rain < 0.3 &&
          this.rng.chance(r.path ? 0.6 : 0.35),
        p = this.alloc(this.kindAt(s, c, r.district), s, r.y, c, !u, !1, f, d);
      if (!p) return 0;
      if (
        ((p.edge = r.id),
        (p.dir = this.rng.chance(0.5) ? 1 : -1),
        (p.lat = o),
        (p.latFrac = a),
        (p.heading = Math.atan2(r.dx * p.dir, -r.dz * p.dir)),
        (p.state = 0),
        this.randomPref(p, r.dx * p.dir, r.dz * p.dir),
        f || d)
      )
        return 1;
      this.pickArcade(p);
      let m = this.mixAt(s, c)?.family ?? 0;
      if (
        r.latMax - r.latMin > 0.9 &&
        this.rng.chance(Qx(this.hour, 7, 22) ? (m > 0 ? 0.32 : 0.2) : 0.06)
      ) {
        let e = o + 0.6 <= r.latMax ? 0.6 : -0.6,
          t =
            (p.kind === `elder` ||
              (p.female > 0 && (p.kind === `auntie` || p.kind === `office`))) &&
            Qx(this.hour, 7, 19) &&
            this.rng.chance(0.55),
          n = t
            ? `student`
            : p.kind === `student` ||
                p.kind === `tourist` ||
                p.kind === `auntie`
              ? p.kind
              : this.kindAt(s, c, r.district),
          i = this.alloc(n, s + r.px * e, r.y, c + r.pz * e, !u, t);
        if (i && this.region?.distinctPairs && i.variant >= 0)
          for (let e = 0; e < 3 && i.variant === p.variant; e++)
            this.redress(i, t ? `child` : i.kind);
        if (i)
          return (
            (i.edge = r.id),
            (i.dir = p.dir),
            (i.lat = o + e),
            (i.latFrac =
              (i.lat - r.latMin) / Math.max(0.01, r.latMax - r.latMin)),
            (i.heading = p.heading),
            (i.state = 0),
            (i.prefX = p.prefX),
            (i.prefZ = p.prefZ),
            (i.phase = p.phase + Math.PI * 0.5),
            (p.pairSeed = i.pairSeed = 1 + Math.floor(this.rng.next() * 1e6)),
            (p.walkSpeed = i.walkSpeed = Math.min(p.walkSpeed, i.walkSpeed)),
            2
          );
      }
      return 1;
    }
    return 0;
  }
  spawnGroup(e, t, n, r, i, a) {
    let o =
        this.ctx.plan.districtAt(r, i).style.old > 0.55 &&
        this.rng.chance(0.45) &&
        (this.region?.stoolGroups ?? !0),
      s = o ? this.rng.int(2, 4) : this.rng.int(2, 3),
      c = (e.latMin + e.latMax) / 2,
      l = e.ax + e.dx * t + e.px * (n * 0.3 + c * 0.7),
      u = e.az + e.dz * t + e.pz * (n * 0.3 + c * 0.7),
      d = o ? 0.85 : 0.55 + s * 0.08,
      f = this.rng.next() * VS,
      p = 0,
      m = -1;
    for (let t = 0; t < s; t++) {
      let c = f + (t / s) * VS + this.rng.range(-0.25, 0.25),
        h = l + Math.sin(c) * d,
        g = u - Math.cos(c) * d,
        _ = o
          ? this.rng.pick([`uncle`, `uncle`, `elder`])
          : this.kindAt(r, i, e.district),
        v = this.alloc(_, h, e.y, g, !a);
      if (!v) break;
      if (this.region?.distinctPairs && m >= 0)
        for (let e = 0; e < 3 && v.variant === m; e++) this.redress(v, v.kind);
      ((m = v.variant),
        (v.edge = e.id),
        (v.dir = this.rng.chance(0.5) ? 1 : -1),
        (v.lat = eC(n, e.latMin, e.latMax)),
        (v.latFrac = (v.lat - e.latMin) / Math.max(0.01, e.latMax - e.latMin)),
        (v.state = 2),
        (v.tx = h),
        (v.tz = g),
        (v.faceH = c + Math.PI + this.rng.range(-0.2, 0.2)),
        (v.heading = v.faceH),
        (v.timer = this.rng.range(20, o ? 150 : 70)),
        o
          ? ((v.idlePose = t === s - 1 && this.rng.chance(0.4) ? 15 : 1),
            v.idlePose === 1 && (v.accBase |= Y(20)))
          : (v.idlePose = this.rng.chance(0.6)
              ? 7
              : this.rng.chance(0.5)
                ? 0
                : 5),
        this.randomPref(v, e.dx, e.dz),
        p++);
    }
    return p;
  }
  fillSpots(e, t) {
    if (t <= 0) return 0;
    let n = this.spots.near(this.px, this.pz, e - 6, this.spotIds),
      r = 0;
    for (let i = 0; i < n; i++) {
      let n = this.spots.spots[this.spotIds[i]];
      if (Qx(this.hour, n.from, n.to))
        for (let i = 0; i < n.slots.length; i++) {
          let a = n.slots[i];
          if (a.occ >= 0 || !this.rng.chance(n.fill * (this.initial ? 1 : 0.3)))
            continue;
          let o = Math.hypot(a.x - this.px, a.z - this.pz);
          if (o > e - 4 || o < 8) continue;
          let s = this.seen(a.x, a.z, o);
          if (!this.initial && s && o < 38) continue;
          let c = n.kinds ? this.rng.pick(n.kinds) : this.kindAt(a.x, a.z),
            l = this.alloc(c, a.x, this.spawnY(a.x, a.z), a.z, !s);
          if (!l || (this.occupy(l, n.id, i, !0), r++, r >= t)) return r;
        }
    }
    return r;
  }
  occupy(e, t, n, r) {
    e.lite = !1;
    let i = this.spots.spots[t],
      a = i.slots[n];
    ((a.occ = e.idx),
      (e.spot = t),
      (e.slot = n),
      (e.state = 2),
      (e.stateT = 0),
      (e.tx = a.x),
      (e.tz = a.z),
      (e.faceH = a.h),
      r && (e.heading = a.h),
      (e.idlePose = a.pose === 0 ? this.rng.pick(i.poses) : a.pose),
      (e.timer = this.rng.range(i.stayMin, i.stayMax)),
      (e.accBase |= i.extraAcc),
      (e.seatH = a.seat ?? 0),
      (e.busStop = i.bus ?? -1));
  }
  recruit() {
    let e = this.spots.near(this.px, this.pz, 60, this.spotIds);
    if (e !== 0)
      for (let t = 0; t < e; t++) {
        let e = this.spots.spots[this.spotIds[t]];
        if (!Qx(this.hour, e.from, e.to)) continue;
        let n = -1;
        for (let t = 0; t < e.slots.length; t++)
          if (e.slots[t].occ < 0) {
            n = t;
            break;
          }
        if (n < 0 || !this.rng.chance(0.25)) continue;
        let r = null,
          i = 81;
        for (let t of this.peds) {
          if (
            !t.active ||
            t.state !== 0 ||
            t.scripted ||
            !t.alive ||
            t.recruitT > 0 ||
            t.lite ||
            t.bike ||
            (e.kinds && !e.kinds.includes(t.kind))
          )
            continue;
          let n = t.x - e.x,
            a = t.z - e.z,
            o = n * n + a * a;
          o < i && ((i = o), (r = t));
        }
        if (r) {
          r.recruitT = 25;
          let t = e.slots[n],
            i = (r.x + t.x) * 0.5,
            a = (r.z + t.z) * 0.5,
            o = this.ctx.plan.surfaceAt(i, a);
          o !== `road` &&
            o !== `crosswalk` &&
            this.ctx.plan.surfaceAt(t.x, t.z) !== `road` &&
            this.occupy(r, e.id, n, !1);
        }
      }
  }
  spawnLinePed(e) {
    let t = e.occ,
      n = -1;
    for (let e = 0; e < t.length; e++) t[e] >= 0 && (n = e);
    let r = n + 1;
    if (r >= t.length) {
      r = -1;
      for (let e = 0; e < t.length; e++)
        if (t[e] < 0) {
          r = e;
          break;
        }
      if (r < 0) return !1;
    }
    let i = this.linePos(e, r, this.lp),
      a = i.x,
      o = i.z,
      s = a,
      c = o,
      l = Math.hypot(s - this.px, c - this.pz),
      u = this.seen(s, c, l),
      d = this.initial || this.time - e.t0 <= 4;
    if (u && l < 32 && !d) {
      let t = 7 + this.rng.next() * 6;
      ((s = a + e.ldx * t), (c = o + e.ldz * t));
      let n = Math.hypot(s - this.px, c - this.pz);
      if (n < 32 && this.seen(s, c, n)) return !1;
    }
    try {
      if (
        this.ctx.statics.overlapsRect(
          s - 0.22,
          c - 0.22,
          s + 0.22,
          c + 0.22,
          0.8,
        )
      )
        return !1;
    } catch {}
    let f = this.alloc(
      this.rng.pick(e.kinds),
      s,
      this.spawnY(s, c),
      c,
      !u || s !== a,
    );
    return f
      ? (e.dress && this.pools?.has(e.dress) && this.redress(f, e.dress),
        (f.crowdRef = e),
        (f.crowd = e.id),
        e.trash &&
          this.rng.chance(0.85) &&
          ((f.accBase = (f.accBase | Y(17)) & ~(Y(16) | Y(18))),
          Uy(f.cloth, 4608) || (f.cloth += By)),
        e.members++,
        (t[r] = f.idx),
        (f.qSlot = r),
        (f.qWait = 0),
        (f.state = 12),
        (f.heading = f.faceH = Math.atan2(-e.ldx, e.ldz)),
        (f.tx = a),
        (f.tz = o),
        (f.timer = this.rng.range(3, 10)),
        (f.idlePose = this.linePose(e)),
        !0)
      : !1;
  }
  linePose(e) {
    if (e.poses.length) return this.rng.pick(e.poses);
    let t = this.rng.next();
    return t < 0.5 ? 0 : t < 0.88 ? 5 : 7;
  }
  queuesTick(e) {
    for (let t of this.crowds) {
      if (!t.line || t.released || ((t.serveT -= e), t.serveT > 0)) continue;
      t.serveT = this.rng.range(9, 24);
      let n = t.occ[0];
      if (n < 0) continue;
      let r = this.peds[n];
      r.active &&
        r.crowdRef === t &&
        r.state === 12 &&
        ((r.x - t.hx) ** 2 + (r.z - t.hz) ** 2 > 0.6 ||
          (this.leaveGroup(r),
          this.rng.chance(0.45) && (r.accBase |= Y(15)),
          (r.heading += this.rng.chance(0.5) ? 1.8 : -1.8),
          this.attachToEdge(r)
            ? ((r.state = 0), (r.stateT = 0), (r.poseTarget = 0))
            : this.beginFade(r)));
    }
  }
  spawnCrowdPed(e) {
    if (e.line) return this.spawnLinePed(e);
    for (let t = 0; t < 6; t++) {
      let t = this.rng.next() * VS,
        n = Math.sqrt(this.rng.next()) * e.r,
        r = e.x + Math.sin(t) * n,
        i = e.z - Math.cos(t) * n,
        a = Math.hypot(r - this.px, i - this.pz),
        o = this.seen(r, i, a);
      if (!this.initial && o && a < 32 && this.time - e.t0 > 4) continue;
      try {
        if (
          this.ctx.statics.overlapsRect(
            r - 0.25,
            i - 0.25,
            r + 0.25,
            i + 0.25,
            0.8,
          )
        )
          continue;
      } catch {}
      let s = this.rng.pick(e.kinds),
        c = this.alloc(s, r, this.spawnY(r, i), i, !o);
      return c
        ? (e.dress && this.pools?.has(e.dress) && this.redress(c, e.dress),
          (c.crowdRef = e),
          (c.crowd = e.id),
          e.trash &&
            this.rng.chance(0.85) &&
            ((c.accBase = (c.accBase | Y(17)) & ~(Y(16) | Y(18))),
            Uy(c.cloth, 4608) || (c.cloth += By)),
          e.members++,
          (c.state = 12),
          (c.heading = this.rng.next() * VS),
          (c.faceH = c.heading),
          (c.timer = this.rng.range(0.5, 6)),
          (c.tx = r),
          (c.tz = i),
          (c.idlePose = this.crowdPose(c)),
          !0)
        : !1;
    }
    return !1;
  }
  crowdPose(e) {
    let t = e.crowdRef;
    if (t && t.poses.length) return this.rng.pick(t.poses);
    if (t && t.mode === 1)
      return this.rng.chance(0.2) ? 12 : this.rng.chance(0.3) ? 7 : 0;
    if (e.kind === `worshipper`) return 4;
    if (e.kind === `vendor`) return this.rng.chance(0.6) ? 7 : 0;
    let n = this.rng.next();
    return n < 0.35 ? 0 : n < 0.55 ? 7 : n < 0.7 ? 13 : n < 0.8 ? 12 : 0;
  }
  cyclistChance(e) {
    if (
      e.cross ||
      e.pedestrian ||
      this.rain > 0.15 ||
      e.latMax - e.latMin < 1.5 ||
      this.cyclistsOff
    )
      return 0;
    let t = this.hour;
    if (e.path === `bike`)
      return Qx(t, 6, 22) ? (Qx(t, 16, 20.5) ? 0.8 : 0.6) : 0.2;
    if (e.path === `walk`) return 0;
    let n = Qx(t, 16.5, 20.5)
        ? 0.07
        : Qx(t, 6.5, 9.5)
          ? 0.05
          : Qx(t, 9.5, 16.5)
            ? 0.03
            : Qx(t, 20.5, 23.5)
              ? 0.025
              : 0.008,
      r = this.region;
    return (
      (n *= (r?.cycle ?? QS)[e.district] ?? 1),
      r?.cycleMul && (n *= r.cycleMul),
      e.park && (n *= 1.6),
      Math.min(0.9, n * this.cyclistMul)
    );
  }
  mixAt(e, t) {
    try {
      return this.ctx.districts?.packAt?.(e, t)?.pedMix ?? null;
    } catch {
      return null;
    }
  }
  kindAt(e, t, n) {
    let r = n ?? this.ctx.plan.districtAt(e, t).id;
    return Kx(
      this.rng,
      r,
      this.hour,
      this.mixAt(e, t) ?? this.region?.mix?.[r] ?? null,
    );
  }
  cyclistsOff = !1;
  cyclistMul = 1;
  alloc(e, t, n, r, i, a = !1, o = !1, s = !1) {
    if (!this.allocScripted && this.thinZones.length && this.thinned(t, r))
      return null;
    let c = null;
    for (let e = 0; e < 170; e++) {
      let t = this.peds[(e + this.frame * 7) % 170];
      if (!t.active) {
        c = t;
        break;
      }
    }
    if (!c) return null;
    let l = s
      ? Rx(
          this.rng,
          this.ctx.plan.districtAt(t, r).id,
          this.hour,
          this.region?.cyclistKinds,
        )
      : a
        ? Fx(this.rng)
        : o
          ? Ix(this.rng)
          : Nx(e, this.rng);
    (this.pools?.zoned && (this.pools.zone = this.ctx.plan.districtAt(t, r).id),
      c.applyLook(l),
      c.resetDynamic(this.rand),
      (c.bike = Uy(c.cloth, 288)),
      c.bike && ((c.pose = c.poseTarget = 18), (c.poseW = 1)));
    let u =
      !a &&
      !o &&
      !s &&
      this.rain > 0.3 &&
      (e === `office` || e === `student` || e === `tourist` || e === `uncle`) &&
      this.rng.chance(0.1);
    return (
      this.dress(c, a ? `child` : o ? `jogger` : u ? `rain` : l.kind),
      c.gen++,
      (c.seed = this.rng.next()),
      (c.headAccA = (c.accBase & YS) !== 0),
      (c.umbColor = Bx(
        this.rng,
        c.parasol,
        this.region?.umbrellas,
        this.region?.parasols,
      )),
      c.headAccA || (c.accA = c.umbColor),
      (c.x = t),
      (c.z = r),
      (c.y = c.yTarget = n),
      (c.heading = this.rng.next() * VS),
      (c.phase = this.rng.next() * VS),
      (c.fade = +!i),
      (c.fadeTarget = 1),
      (c.active = !0),
      (c.state = 0),
      (c.bornT = this.time),
      (c.distP = Math.hypot(t - this.px, r - this.pz)),
      (c.groundT = this.rng.next() * 0.2),
      (c.body.x = t),
      (c.body.y = n),
      (c.body.z = r),
      (c.body.vx = c.body.vz = 0),
      this.count++,
      c
    );
  }
  dress(e, t, n = -1) {
    let r = this.pools;
    if (!r) {
      e.variant = -1;
      return;
    }
    let i =
        n >= 0 && n < r.defs.length ? r.defs[n] : r.pick(t, this.rng, e.bike),
      a = zS(i, this.rng, this.cols),
      o = i.far;
    ((e.variant = i.id),
      (e.vTop = a.top),
      (e.vBottom = a.bottom),
      (e.vOuter = a.outer),
      (e.female = o.female),
      (e.height = i.scale * this.rng.range(0.975, 1.025)),
      (e.width = o.width),
      (e.belly = o.belly),
      (e.stoop = o.stoop),
      (e.skin = o.skin),
      (e.hair = o.hair),
      (e.shoes = o.shoes),
      (e.top = o.torsoIsOuter && a.outer ? a.outer : a.top),
      (e.bottom = a.bottom),
      o.hat && (e.accA = o.hat),
      (e.accB = o.accB));
    let s = e.accBase & XS;
    ((e.rightBusy = i.rightBusy),
      i.rightBusy && (s &= ~ZS),
      (e.accBase = s | o.bits),
      (e.accMask = e.accBase));
    let c = o.cloth;
    (Uy(i.cloth, 36) && (c += 36),
      Uy(i.cloth, 2304) && (c += zy),
      e.bike && (c += 288),
      (e.cloth = c),
      (i.noUmbrella || i.rightBusy) && ((e.umbrellaAt = 2), (e.parasol = !1)),
      this.region &&
        e.parasol &&
        (!i.female || !this.rng.chance(this.region.parasol ?? 1)) &&
        (e.parasol = !1));
  }
  redress(e, t) {
    (this.dress(e, t),
      (e.headAccA = (e.accBase & YS) !== 0),
      e.headAccA || (e.accA = e.umbColor));
  }
  free(e) {
    e.active &&
      (this.leaveGroup(e),
      (e.active = !1),
      this.setBody(e, !1),
      (e.state = 15),
      (e.scripted = !1),
      this.bubbles.drop(e.idx),
      this.count--);
  }
  beginFade(e) {
    ((e.dying = !0), (e.fadeTarget = 0));
  }
  leaveGroup(e) {
    if (e.spot >= 0) {
      let t = this.spots.spots[e.spot],
        n = t.slots[e.slot];
      (n && n.occ === e.idx && (n.occ = -1),
        (e.accBase &= ~t.extraAcc),
        (e.spot = e.slot = -1));
    }
    if (((e.busStop = -1), (e.seatH = 0), (e.seatY = 0), e.crowdRef)) {
      let t = e.crowdRef;
      (e.qSlot >= 0 &&
        e.qSlot < t.occ.length &&
        t.occ[e.qSlot] === e.idx &&
        (t.occ[e.qSlot] = -1),
        (e.qSlot = -1),
        t.members--,
        (e.crowdRef = null),
        (e.crowd = -1));
    }
    e.accBase &= ~Y(20);
  }
  releaseCrowdPed(e) {
    let t = e.crowdRef?.trash;
    (this.leaveGroup(e),
      t && Uy(e.cloth, 4608) && ((e.cloth -= By), (e.accBase &= ~Y(17))),
      (e.state === 12 || e.state === 2) &&
        (this.attachToEdge(e) ? (e.state = 0) : this.beginFade(e)));
  }
  attachToEdge(e, t = 30) {
    if (!this.nav.nearestEdge(e.x, e.z, t, this.hit)) return !1;
    let n = this.nav.edges[this.hit.edge];
    ((e.edge = n.id),
      (e.lat = this.hit.lat),
      (e.latFrac = (e.lat - n.latMin) / Math.max(0.01, n.latMax - n.latMin)),
      (e.crossing = 0));
    let r = Math.sin(e.heading),
      i = -Math.cos(e.heading);
    return (
      (e.dir = r * n.dx + i * n.dz >= 0 ? 1 : -1),
      this.rng.chance(0.2) && (e.dir = -e.dir),
      this.randomPref(e, n.dx * e.dir, n.dz * e.dir),
      !0
    );
  }
  randomPref(e, t, n) {
    let r = Math.atan2(t, -n) + this.rng.range(-1.2, 1.2);
    ((e.prefX = Math.sin(r)), (e.prefZ = -Math.cos(r)));
  }
  stepPed(e, t) {
    let n = e.x - this.px,
      r = e.z - this.pz;
    if (
      ((e.distP = Math.sqrt(n * n + r * r)),
      (e.hitCd -= t),
      (e.talkCd -= t),
      (e.bumpCd -= t),
      (e.recruitT -= t),
      e.limp > 0 && (e.limp = Math.max(0, e.limp - t * 0.03)),
      e.bike && e.brake < 1 && (e.brake = Math.min(1, e.brake + t * 0.8)),
      (e.updAcc += t),
      e.lite)
    ) {
      if ((this.frame + e.idx) % 4 != 0) return;
      (this.liteStep(e, Math.min(0.2, e.updAcc)), (e.updAcc = 0));
      return;
    }
    let i = e.state;
    if (
      this.clearZones.length &&
      !e.scripted &&
      !e.visible &&
      this.inClear(e.x, e.z)
    ) {
      this.free(e);
      return;
    }
    let a = i === 6 || i === 11 || i === 5 || i === 10 || e.scripted,
      o = this.lodK,
      s = a ? 1 : e.distP > 70 * o ? 3 : e.distP > 40 * o ? 2 : 1;
    if (s > 1 && (this.frame + e.idx) % s !== 0) return;
    let c = Math.min(0.1, e.updAcc);
    if (((e.updAcc = 0), e.dying && ((e.fadeTarget = 0), e.fade <= 0.001))) {
      this.free(e);
      return;
    }
    let l = e.idlePose;
    e.holdSeat =
      e.scripted &&
      (l === 1 || l === 19 || l === 15) &&
      (e.tx - e.x) ** 2 + (e.tz - e.z) ** 2 < 0.81;
    let u =
      e.holdSeat ||
      ((e.pose === 1 || e.pose === 19 || e.pose === 15) && e.poseW > 0.2);
    (e.alive && e.distP < 60 && !u && i !== 6 && i !== 7 && i !== 8
      ? this.separation(e)
      : (e.sepX = e.sepZ = 0),
      e.alive &&
        e.distP < 60 &&
        (i === 0 || i === 1 || i === 2 || i === 12 || i === 3 || i === 14) &&
        (this.checkVehicles(e),
        this.onFoot && e.distP < 2.2 && this.playerContact(e)),
      this.think(e, c),
      e.indoors
        ? (e.sheltered = !0)
        : this.rain > 0.05 && e.distP < 50 && !e.crowdRef
          ? ((e.shelterT -= c),
            e.shelterT <= 0 &&
              ((e.shelterT = 1.2 + this.rng.next() * 0.6),
              (e.sheltered = this.roofAbove(e.x, e.y, e.z))))
          : (e.sheltered = !1),
      this.accessories(e),
      this.animate(e, c),
      (e.groundT -= c),
      e.groundT <= 0 &&
        i !== 6 &&
        ((e.groundT = 0.18 + this.rng.next() * 0.08),
        (e.yTarget = this.ctx.groundAt(e.x, e.z, e.y, 0.45))),
      i !== 6 && (e.y += (e.yTarget - e.y) * Math.min(1, c * 16)),
      this.syncBody(e));
  }
  syncBody(e) {
    let t = e.body,
      n = e.state;
    if (
      ((t.x = e.x),
      (t.z = e.z),
      (t.heading = e.heading),
      (t.vx = e.vx),
      (t.vz = e.vz),
      n === 6 || n === 7 || n === 8)
    ) {
      let n = e.cy * e.height;
      ((t.y = e.y + (n > 0.3 ? n - 0.3 : 0) - 0.65),
        (t.height = 1.27),
        (t.radius = t.halfW = t.halfL = 0.45));
    } else
      ((t.y = e.y),
        (t.height = Wy * e.height),
        (t.radius = t.halfW = t.halfL = Gy));
    this.setBody(e, e.alive && e.distP < 80 && e.fade > 0.5 && !e.dying);
  }
  setBody(e, t) {
    ((e.body.active = t),
      t && !e.inWorld
        ? (this.ctx.dynamics.add(e.body), (e.inWorld = !0))
        : !t &&
          e.inWorld &&
          (this.ctx.dynamics.remove(e.body), (e.inWorld = !1)));
  }
  liteStep(e, t) {
    let n = this.nav,
      r = n.edges[e.edge];
    if (e.dying && ((e.fadeTarget = 0), e.fade <= 0.001)) {
      this.free(e);
      return;
    }
    let i = e.walkSpeed * (this.rain > 0.3 ? 1.12 : 1);
    if (
      (r.cross &&
        e.lastS < 0.5 &&
        e.crossing === 0 &&
        (this.canCross(e, r) ? (e.crossing = 1) : (i = 0)),
      (e.lastS += i * t),
      e.lastS >= r.len)
    ) {
      let t = e.lastS - r.len;
      (this.arrive(e, !1),
        (r = n.edges[e.edge]),
        (e.lastS = r.cross ? 0 : Math.min(t, r.len)));
    }
    let a = e.dir > 0,
      o = a ? r.dx : -r.dx,
      s = a ? r.dz : -r.dz,
      c = a ? r.ax : r.bx,
      l = a ? r.az : r.bz;
    if (
      this.clearZones.length &&
      this.inClear(
        c + o * e.lastS + r.px * e.lat,
        l + s * e.lastS + r.pz * e.lat,
      )
    ) {
      if (!e.visible) {
        this.free(e);
        return;
      }
      ((e.dir = -e.dir),
        (e.lastS = Math.max(0, r.len - e.lastS)),
        (a = e.dir > 0),
        (o = a ? r.dx : -r.dx),
        (s = a ? r.dz : -r.dz),
        (c = a ? r.ax : r.bx),
        (l = a ? r.az : r.bz));
    }
    ((e.x = c + o * e.lastS + r.px * e.lat),
      (e.z = l + s * e.lastS + r.pz * e.lat),
      (e.y = r.cross ? 0.02 : r.y),
      (e.vx = o * i),
      (e.vz = s * i),
      (e.heading = Math.atan2(o, -s)),
      (e.poseTarget = e.bike ? 18 : 0));
    let u = e.x - this.px,
      d = e.z - this.pz;
    ((e.distP = Math.sqrt(u * u + d * d)),
      this.accessories(e),
      this.animate(e, t));
  }
  think(e, t) {
    e.stateT += t;
    let n = 0,
      r = 0,
      i = 7,
      a = NaN;
    switch (e.state) {
      case 0: {
        if (e.edge < 0 && !this.attachToEdge(e)) {
          this.beginFade(e);
          break;
        }
        let i = this.nav.edges[e.edge];
        if ((e.bike && (e.poseTarget = 18), !this.navTarget(e, !1))) break;
        let a = e.bike
          ? e.walkSpeed * e.brake * (i.cross ? 0.8 : 1)
          : e.walkSpeed *
            e.speedMul *
            (this.rain > 0.3 ? (this.rain > e.umbrellaAt ? 1.08 : 1.4) : 1) *
            (1 - 0.45 * e.limp);
        if (i.cross && e.crossing === 1 && i.signal) {
          let t = this.ctx.signals.pedState(i.node, i.axis);
          a *= e.bike
            ? t === `walk`
              ? 1
              : 1.25
            : t === `walk`
              ? 1
              : t === `flash`
                ? 1.45
                : 2.3;
        }
        (this.steer(e, a),
          (n = this.sdx),
          (r = this.sdz),
          this.lookAtPlayer(e, t),
          (e.doorT -= t),
          e.doorT <= 0 &&
            ((e.doorT = this.rng.range(1.5, 3)),
            !i.cross && !e.bike && this.maybeEnterShop(e)));
        break;
      }
      case 16: {
        let t = e.tx - e.x,
          i = e.tz - e.z,
          o = Math.sqrt(t * t + i * i);
        if (o > 0.45 && e.stateT < 10) {
          let a = Math.min(e.walkSpeed, o * 1.6 + 0.3);
          ((n = (t / o) * a), (r = (i / o) * a));
        } else ((a = e.faceH), this.beginFade(e));
        break;
      }
      case 1: {
        let i = this.nav.edges[e.edge];
        e.bike && (e.poseTarget = 18);
        let o = e.tx - e.x,
          s = e.tz - e.z,
          c = Math.sqrt(o * o + s * s);
        if (c > 0.3 && e.stateT < 8) {
          let t = Math.min(e.walkSpeed * 0.8, c * 1.5 + 0.2);
          ((n = (o / c) * t), (r = (s / c) * t));
        } else a = e.faceH;
        if (this.canCross(e, i))
          ((e.timer -= t),
            e.timer <= 0 &&
              ((e.state = 0),
              (e.crossing = 1),
              (e.stateT = 0),
              i.signal &&
                e.distP < 25 &&
                this.rng.chance(0.04) &&
                this.say(e, `green`, !1)));
        else {
          if (
            ((e.timer = this.rng.range(0.15, 1.2)),
            e.stateT > (i.signal ? 100 : 25))
          ) {
            i.signal
              ? ((e.dir = -e.dir),
                (e.state = 0),
                (e.crossing = 0),
                this.arrive(e, !1))
              : ((e.state = 0), (e.crossing = 1));
            break;
          }
          e.kind === `uncle` &&
            e.stateT > 6 &&
            this.rng.chance(0.004) &&
            this.roadClear(i) &&
            ((e.state = 0), (e.crossing = 1));
        }
        i.signal
          ? this.lookAtPlayer(e, t)
          : (e.headYawT = Math.sin(e.stateT * 1.6 + e.seed * 10) * 0.9);
        break;
      }
      case 2: {
        let i = e.tx - e.x,
          o = e.tz - e.z,
          s = Math.sqrt(i * i + o * o);
        if (s > 0.35 && e.stateT < 25) {
          let t = Math.min(e.walkSpeed, s * 1.4 + 0.3);
          ((n = (i / s) * t),
            (r = (o / s) * t),
            (e.poseTarget = 0),
            (e.seatY = 0));
        } else
          ((a = e.faceH),
            (e.poseTarget = e.idlePose),
            (e.seatY = e.seatH > 0 && e.pose === 1 ? e.seatH * e.poseW : 0),
            e.idlePose !== 1 && e.idlePose !== 9 && e.idlePose !== 4
              ? this.lookAtPlayer(e, t)
              : (e.headYawT = 0));
        if (e.scripted) break;
        if (((e.timer -= t), e.timer <= 0)) {
          let t = e.spot >= 0 ? this.spots.spots[e.spot] : null,
            n = e.fleeAfter;
          (this.leaveGroup(e),
            t?.giveCup && this.rng.chance(0.85) && (e.accBase |= Y(15)),
            (e.poseTarget = 0),
            n
              ? this.flee(e, e.threatX, e.threatZ, 6)
              : this.attachToEdge(e)
                ? ((e.state = 0), (e.stateT = 0))
                : this.beginFade(e));
        }
        break;
      }
      case 12: {
        let i = e.crowdRef;
        if (!i || i.released) {
          this.releaseCrowdPed(e);
          break;
        }
        if (i.line) {
          let o = e.qSlot;
          ((e.qWait -= t),
            o > 0 && i.occ[o - 1] < 0 && e.qWait <= 0
              ? (i.occ[o] === e.idx && (i.occ[o] = -1),
                (i.occ[o - 1] = e.idx),
                (e.qSlot = o - 1),
                (e.qWait = this.rng.range(0.35, 1.1)))
              : o > 0 &&
                i.occ[o - 1] < 0 &&
                e.qWait > 1.2 &&
                (e.qWait = this.rng.range(0.2, 0.8)));
          let s = this.linePos(i, Math.max(0, e.qSlot), this.lp);
          ((e.tx = s.x), (e.tz = s.z));
          let c = e.tx - e.x,
            l = e.tz - e.z,
            u = Math.sqrt(c * c + l * l);
          if (u > 0.3 && e.stateT < 40) {
            let t = Math.min(e.walkSpeed * 0.75, u * 1.6 + 0.15);
            ((n = (c / u) * t), (r = (l / u) * t), (e.poseTarget = 0));
          } else
            ((e.stateT = 0),
              (a =
                Math.atan2(-i.ldx, i.ldz) +
                (e.seed - 0.5) * 0.5 +
                (e.idlePose === 7 ? (e.seed > 0.5 ? 1.3 : -1.3) : 0)),
              (e.poseTarget = e.idlePose),
              (e.timer -= t),
              e.timer <= 0 &&
                ((e.timer = this.rng.range(5, 14)),
                (e.idlePose = this.linePose(i))),
              e.idlePose === 0
                ? this.lookAtPlayer(e, t)
                : (e.headYawT =
                    e.idlePose === 5
                      ? 0
                      : Math.sin(this.time * 0.4 + e.seed * 9) * 0.35));
          break;
        }
        if (i.mode !== 0) {
          let o = e.tx - e.x,
            s = e.tz - e.z,
            c = Math.sqrt(o * o + s * s);
          if (c > 0.4 && e.stateT < 15) {
            let t = Math.min(e.walkSpeed * 0.7, c + 0.2);
            ((n = (o / c) * t), (r = (s / c) * t), (e.poseTarget = 0));
          } else {
            let n = i.mode === 1 ? i.lookX : i.x,
              r = i.mode === 1 ? i.lookZ : i.z;
            ((a = Math.atan2(n - e.x, -(r - e.z))),
              (e.poseTarget = e.idlePose),
              (e.timer -= t),
              e.timer <= 0 &&
                ((e.timer = this.rng.range(4, 12)),
                (e.idlePose = this.crowdPose(e))),
              (e.headYawT = Math.sin(this.time * 0.4 + e.seed * 9) * 0.35));
          }
          break;
        }
        if (e.timer > 0) {
          if (
            ((e.timer -= t),
            (a = e.faceH),
            (e.poseTarget = e.idlePose),
            e.idlePose !== 4 && this.lookAtPlayer(e, t),
            e.timer <= 0)
          ) {
            let t = this.rng.next() * VS,
              n = Math.sqrt(this.rng.next()) * i.r * 0.92;
            ((e.tx = i.x + Math.sin(t) * n),
              (e.tz = i.z - Math.cos(t) * n),
              (e.stateT = 0),
              (e.poseTarget = 0));
          }
        } else {
          let t = e.tx - e.x,
            i = e.tz - e.z,
            a = Math.sqrt(t * t + i * i);
          if (a < 0.45 || e.stateT > 12)
            ((e.timer =
              e.kind === `vendor`
                ? this.rng.range(15, 50)
                : e.kind === `worshipper`
                  ? this.rng.range(8, 20)
                  : this.rng.range(2.5, 9)),
              (e.idlePose = this.crowdPose(e)),
              (e.faceH = e.heading + this.rng.range(-1.2, 1.2)));
          else {
            let o = Math.min(e.walkSpeed * 0.62, a + 0.2);
            ((n = (t / a) * o), (r = (i / a) * o));
          }
        }
        break;
      }
      case 3: {
        e.fearT -= t;
        let a = e.bike
          ? e.runSpeed * e.brake
          : (e.fearT > 2 ? e.runSpeed : e.walkSpeed * 1.6) * (1 - 0.5 * e.limp);
        if ((e.bike && (e.poseTarget = 18), e.edge >= 0))
          (this.navTarget(e, !0),
            this.steer(e, a),
            (n = this.sdx),
            (r = this.sdz));
        else {
          let t = e.x - e.threatX,
            i = e.z - e.threatZ,
            o = Math.sqrt(t * t + i * i) || 1;
          ((t /= o),
            (i /= o),
            (n = t * a),
            (r = i * a),
            e.stateT > 1.5 && this.attachToEdge(e, 12));
        }
        ((i = 5),
          (e.headYawT = 0),
          e.fearT <= 0 &&
            ((e.stateT = 0),
            e.scripted
              ? ((e.state = 13), (e.tx = e.x), (e.tz = e.z))
              : e.edge >= 0 || this.attachToEdge(e)
                ? (e.state = 0)
                : this.beginFade(e),
            (e.speedMul = 1.15)));
        break;
      }
      case 4:
        ((e.poseTarget = 2),
          (a = Math.atan2(e.threatX - e.x, -(e.threatZ - e.z))),
          (e.timer -= t),
          e.timer <= 0 &&
            this.flee(e, e.threatX, e.threatZ, this.rng.range(6, 10)),
          (i = 10));
        break;
      case 5:
        if (
          ((i = 3),
          (e.timer -= t),
          e.daze === 2
            ? ((e.poseTarget = 10),
              (a = Math.atan2(this.px - e.x, -(this.pz - e.z))),
              (i = 6))
            : (e.pose = e.poseTarget = 11),
          (n = 0),
          (r = 0),
          e.timer <= 0 && e.daze === 1)
        ) {
          ((e.daze = 2), (e.timer = 0.75), (e.phase = 1.2));
          break;
        }
        e.timer <= 0 &&
          ((e.daze = 0),
          (e.poseTarget = 0),
          e.scripted
            ? (e.state = 13)
            : e.lastByPlayer &&
                this.onFoot &&
                this.rng.chance(e.brave) &&
                e.health > e.maxHealth * 0.6
              ? this.startFight(e)
              : this.flee(
                  e,
                  e.fleeAfter ? e.threatX : this.px,
                  e.fleeAfter ? e.threatZ : this.pz,
                  this.rng.range(7, 12),
                ));
        break;
      case 6:
        this.tumble(e, t);
        return;
      case 7:
        ((e.vx *= 0.9),
          (e.vz *= 0.9),
          (e.timer -= t),
          e.timer <= 0 &&
            ((e.state = 8),
            (e.stateT = 0),
            (e.a0 = e.pitch),
            (e.a1 = e.roll),
            this.gEul.set(e.pitch, -e.heading, e.roll, `YXZ`),
            this.gQ.setFromEuler(this.gEul),
            this.gV.set(0, -0.9 * e.height, 0).applyQuaternion(this.gQ),
            (e.ux = e.x),
            (e.uz = e.z),
            (e.tx = e.x + this.gV.x),
            (e.tz = e.z + this.gV.z)));
        return;
      case 8: {
        let t = eC(e.stateT / 1.3, 0, 1),
          n = t * t * (3 - 2 * t);
        ((e.pitch = e.a0 * (1 - n)),
          (e.roll = e.a1 * (1 - n)),
          (e.cy = 0.14 + 0.76 * n),
          (e.x = e.ux + (e.tx - e.ux) * n),
          (e.z = e.uz + (e.tz - e.uz) * n),
          (e.pose = e.poseTarget = t < 0.85 ? 14 : 0),
          (e.poseW = t < 0.85 ? 1 : 1 - (t - 0.85) / 0.15),
          t >= 1 &&
            ((e.pitch = e.roll = 0),
            (e.cy = 0.9),
            (e.pose = e.poseTarget = 0),
            (e.poseW = 0),
            e.health < e.maxHealth * 0.8 &&
              (e.limp = eC(1.2 - e.health / e.maxHealth, 0.35, 1)),
            e.scripted
              ? ((e.state = 13), (e.tx = e.x), (e.tz = e.z))
              : this.flee(
                  e,
                  e.lastByPlayer ? this.px : e.threatX,
                  e.lastByPlayer ? this.pz : e.threatZ,
                  this.rng.range(6, 10),
                ),
            this.rng.chance(0.4) &&
              this.say(
                e,
                e.lastByPlayer
                  ? this.rng.chance(0.5)
                    ? `remember`
                    : `police`
                  : `ouch`,
                !1,
              )));
        return;
      }
      case 9:
        ((e.timer -= t), e.timer <= 0 && this.beginFade(e));
        return;
      case 10: {
        let o = this.px - e.x,
          s = this.pz - e.z,
          c = Math.sqrt(o * o + s * s);
        if (
          ((a = Math.atan2(o, -s)),
          (e.poseTarget = 10),
          !this.onFoot ||
            c > 11 ||
            e.health < e.maxHealth * 0.35 ||
            e.stateT > 22)
        ) {
          ((c > 11 || e.stateT > 22) && this.say(e, `remember`, !1),
            (e.poseTarget = 0),
            this.flee(e, this.px, this.pz, 6));
          break;
        }
        if (c > 1.15 && e.punchT <= 0) {
          let e = Math.min(2.4, c);
          ((n = (o / c) * e), (r = (s / c) * e));
        }
        if (
          ((e.punchCd -= t),
          e.punchT <= 0 &&
            e.punchCd <= 0 &&
            c < 1.45 &&
            ((e.punchT = 0.001), (e.punchCd = this.rng.range(0.9, 1.6))),
          e.punchT > 0)
        ) {
          let n = e.punchT;
          if (
            ((e.punchT += t),
            (e.phase = e.punchT / 0.42),
            n < 0.2 && e.punchT >= 0.2 && c < 1.5)
          )
            try {
              (this.dmgDir.set(o / (c || 1), 0, s / (c || 1)),
                this.ctx.player.damage({
                  amount: this.rng.range(3, 6),
                  source: `ped`,
                  dir: this.dmgDir,
                }),
                this.ctx.audio.play(`punch`, {
                  x: e.x,
                  y: e.y + 1.4,
                  z: e.z,
                  volume: 0.7,
                }),
                this.ctx.cameraRig?.shake?.(0.15));
            } catch {}
          e.punchT >= 0.42 && ((e.punchT = 0), (e.phase = 0));
        }
        i = 9;
        break;
      }
      case 11:
        ((i = 2.5),
          (e.timer -= t),
          e.timer <= 0 &&
            (this.rng.chance(0.6)
              ? this.flee(e, e.threatX, e.threatZ, this.rng.range(2, 4))
              : ((e.state = e.edge >= 0 ? 0 : 3),
                (e.fearT = 2),
                (e.stateT = 0))));
        break;
      case 14:
        if (
          ((a = Math.atan2(e.crimeX - e.x, -(e.crimeZ - e.z))),
          (e.poseTarget = 5),
          !e.reported && e.stateT > 1.4)
        ) {
          e.reported = !0;
          try {
            this.ctx.events.emit(`crime`, {
              type: e.crimeType,
              pos: new L(e.crimeX, 0, e.crimeZ),
              severity: e.crimeSev,
              witnessed: !0,
            });
          } catch {}
        }
        ((e.timer -= t),
          e.timer <= 0 &&
            ((e.poseTarget = 0),
            this.flee(e, e.crimeX, e.crimeZ, this.rng.range(5, 9))));
        break;
      case 13: {
        let i = e.tx - e.x,
          o = e.tz - e.z,
          s = Math.sqrt(i * i + o * o);
        if (
          s >
          ((e.idlePose === 1 || e.idlePose === 19 || e.idlePose === 15) &&
          e.poseW > 0.3
            ? 0.9
            : 0.35)
        ) {
          let t = Math.min(
            e.bike
              ? e.walkSpeed * e.brake
              : e.scriptRun
                ? e.runSpeed
                : e.walkSpeed,
            s * 1.5 + 0.3,
          );
          ((n = (i / s) * t),
            (r = (o / s) * t),
            (e.poseTarget = e.bike
              ? 18
              : e.idlePose === 23 || e.idlePose === 24
                ? e.idlePose
                : 0),
            (e.seatY = 0));
        } else
          ((a = e.faceH),
            (e.poseTarget = e.idlePose),
            (e.seatY = e.seatH !== 0 && e.pose === 1 ? e.seatH * e.poseW : 0),
            e.idlePose === 0 && this.lookAtPlayer(e, t));
        break;
      }
    }
    this.move(e, t, n, r, i, a);
  }
  navTarget(e, t) {
    let n = this.nav,
      r = n.edges[e.edge],
      i = e.dir > 0,
      a = i ? r.ax : r.bx,
      o = i ? r.az : r.bz,
      s = i ? r.dx : -r.dx,
      c = i ? r.dz : -r.dz,
      l = (e.x - a) * s + (e.z - o) * c;
    if (r.cross && e.crossing === 0) {
      let n = a + r.px * e.lat,
        i = o + r.pz * e.lat,
        u = n - e.x,
        d = i - e.z;
      if (l > -0.6 || u * u + d * d < 0.5) {
        if (t || this.canCross(e, r)) e.crossing = 1;
        else {
          ((e.state = 1), (e.stateT = 0));
          let t = 0.2 + this.rng.next() * 1.3,
            n = e.lat * 1.15 + (this.rng.next() - 0.5) * 0.5;
          return (
            (e.tx = a - s * t + r.px * n),
            (e.tz = o - c * t + r.pz * n),
            (e.faceH = Math.atan2(s, -c)),
            (e.timer = this.rng.range(0.2, 1.2)),
            !1
          );
        }
      } else return ((this.tx = n), (this.tz = i), !0);
    }
    if (
      l >= r.len - (r.cross ? 0.05 : GS) &&
      (this.arrive(e, t),
      (r = n.edges[e.edge]),
      (i = e.dir > 0),
      (a = i ? r.ax : r.bx),
      (o = i ? r.az : r.bz),
      (s = i ? r.dx : -r.dx),
      (c = i ? r.dz : -r.dz),
      (l = (e.x - a) * s + (e.z - o) * c),
      r.cross && e.crossing === 0)
    )
      return ((this.tx = a + r.px * e.lat), (this.tz = o + r.pz * e.lat), !0);
    let u = l + (e.bike ? 3.2 : WS);
    (u > r.len && (u = r.len),
      u < 0 && (u = 0),
      !r.cross && e.distP < 45
        ? (--e.probeT,
          e.probeT <= 0 &&
            ((e.probeT = 3),
            (e.latBias = this.probeStatics(e, s, c, r.px, r.pz))))
        : (e.latBias = 0));
    let d = e.lat + e.latBias;
    if (((e.inArcade = !1), e.arcade && !r.cross && e.distP < 70)) {
      let t = this.nav.arcadeLat(r, i ? u : r.len - u);
      Number.isNaN(t) ||
        ((d = t + (e.latFrac - 0.5) * 0.7 + e.latBias),
        (e.inArcade = !Number.isNaN(this.nav.arcadeLat(r, i ? l : r.len - l))));
    }
    if (!r.cross && e.distP < 70 && d <= r.latMax + 0.1) {
      let t = this.ctx.statics,
        n = i ? l : r.len - l,
        a = i ? u : r.len - u,
        o = this.nav.fitLat(r, t, a, d),
        f = this.nav.fitLat(r, t, n + (i ? 0.8 : -0.8), d);
      if (Number.isNaN(o) || Number.isNaN(f)) {
        if (!Number.isNaN(this.nav.fitLat(r, t, n, d)))
          return (
            (e.dir = -e.dir),
            (e.stuckT = 0),
            (e.stuckN = 0),
            (this.tx = e.x - s * 0.5),
            (this.tz = e.z - c * 0.5),
            !0
          );
      } else d = Math.abs(o - d) > Math.abs(f - d) ? o : f;
    }
    return (
      (this.tx = a + s * u + r.px * d),
      (this.tz = o + c * u + r.pz * d),
      this.clearZones.length &&
      !e.scripted &&
      !t &&
      this.inClear(this.tx, this.tz) &&
      !this.inClear(e.x, e.z)
        ? ((e.dir = -e.dir),
          (this.tx = e.x - s * 0.5),
          (this.tz = e.z - c * 0.5),
          !0)
        : (e.stuckT > 1.2 &&
            ((e.stuckT = 0.3),
            ++e.stuckN >= 3
              ? ((e.dir = -e.dir), (e.stuckN = 0))
              : ((e.latFrac = this.rng.next()),
                (e.lat = r.cross
                  ? e.lat
                  : r.latMin + (r.latMax - r.latMin) * e.latFrac))),
          !0)
    );
  }
  arrive(e, t) {
    let n = this.nav,
      r = n.edges[e.edge],
      i = e.dir > 0 ? r.b : r.a,
      a = n.corners[i],
      o = 0,
      s = 0,
      c = e.x - e.threatX,
      l = e.z - e.threatZ;
    for (let r = 0; r < a.edges.length && o < 16; r++) {
      let u = a.edges[r];
      if (u === e.edge && a.edges.length > 1) continue;
      let d = n.edges[u],
        f = d.a === i,
        p = f ? d.dx : -d.dx,
        m = f ? d.dz : -d.dz,
        h;
      if (t) {
        let e = Math.sqrt(c * c + l * l) || 1;
        h = Math.exp(2.2 * ((p * c + m * l) / e));
      } else
        ((h = Math.exp(1.4 * (p * e.prefX + m * e.prefZ))),
          d.cross
            ? ((h *= 0.8),
              d.signal &&
                this.ctx.signals.pedState(d.node, d.axis) === `dont` &&
                (h *= 0.55))
            : (h *= 0.6 + Math.min(2, d.weight) * 0.4),
          d.deadEnd && (h *= 0.3),
          e.bike &&
            (d.pedestrian || (!d.cross && d.latMax - d.latMin < 1.2)) &&
            (h *= 0.03));
      ((this.candW[o] = h), (this.candId[o] = u), (s += h), o++);
    }
    let u = this.candId[0],
      d = (e.pairSeed && !t ? rC(e.pairSeed, i) : this.rng.next()) * s;
    for (let e = 0; e < o; e++)
      if (((d -= this.candW[e]), d <= 0)) {
        u = this.candId[e];
        break;
      }
    o === 0 && (u = e.edge);
    let f = n.edges[u];
    ((e.edge = u),
      (e.dir = f.a === i ? 1 : -1),
      (e.crossing = t && f.cross ? 1 : 0),
      (e.stuckN = 0));
    let p = e.latFrac;
    if (
      (this.rain > 0.3 &&
        this.rain <= e.umbrellaAt + 0.001 &&
        (p = 0.78 + 0.22 * p),
      (e.lat = f.cross
        ? (p * 2 - 1) * f.latMax * 0.85
        : f.latMin + (f.latMax - f.latMin) * p),
      (e.stuckT = 0),
      e.pairSeed)
    ) {
      if (rC(e.pairSeed + 17, i) < 0.12) {
        let t =
          Math.atan2(e.prefX, -e.prefZ) +
          (rC(e.pairSeed + 31, i) * 2 - 1) * 1.2;
        ((e.prefX = Math.sin(t)), (e.prefZ = -Math.cos(t)));
      }
    } else this.rng.chance(0.12) && this.randomPref(e, e.prefX, e.prefZ);
    this.pickArcade(e);
  }
  pickArcade(e) {
    if (e.bike || e.lite || e.scripted) {
      e.arcade = !1;
      return;
    }
    let t =
      this.rain > 0.3
        ? this.rain > e.umbrellaAt
          ? 0.6
          : 0.95
        : this.sunny && Qx(this.hour, 11, 16.5)
          ? 0.5
          : 0.3;
    e.arcade = this.rng.chance(t);
  }
  canCross(e, t) {
    if (t.pedestrian) return !0;
    if (!t.signal) return this.roadClear(t);
    let n = this.ctx.signals.pedState(t.node, t.axis);
    return (
      n === `walk` ||
      (n === `flash` &&
        this.ctx.signals.pedRemaining(t.node, t.axis) >
          t.len / (e.walkSpeed * 1.5))
    );
  }
  roadClear(e) {
    let t = (e.ax + e.bx) * 0.5,
      n = (e.az + e.bz) * 0.5;
    for (let r = 0; r < this.movers.length; r++) {
      let i = this.movers[r];
      if (i.vx * i.vx + i.vz * i.vz < 1.5 || Math.abs(i.y - e.y) > KS) continue;
      let a = i.x - t,
        o = i.z - n;
      if (a * a + o * o < 256 && a * i.vx + o * i.vz < 0) return !1;
    }
    return !0;
  }
  probeCols = [];
  probeStatics(e, t, n, r, i) {
    let a = e.x + t * 1.4,
      o = e.z + n * 1.4,
      s = this.ctx.statics.query(
        a - 0.9,
        o - 0.9,
        a + 0.9,
        o + 0.9,
        this.probeCols,
      ),
      c = 0;
    for (let a = 0; a < s; a++) {
      let o = this.probeCols[a];
      if (o.maxY < 0.35 || o.minY > 1.6) continue;
      let s = o.hx < o.hz ? o.hx : o.hz;
      if (o.hx > 1.4 || o.hz > 1.4) continue;
      let l = o.cx - e.x,
        u = o.cz - e.z,
        d = l * t + u * n;
      if (d < 0.4 || d > 2.4) continue;
      let f = l * -n + u * t,
        p = s + 0.42;
      if (f > p || f < -p) continue;
      let m = (f >= 0 ? -(p - f) : p + f) * (-n * r + t * i >= 0 ? 1 : -1);
      Math.abs(m) > Math.abs(c) && (c = m);
    }
    return c;
  }
  steer(e, t) {
    let n = this.tx - e.x,
      r = this.tz - e.z,
      i = Math.sqrt(n * n + r * r);
    if (i < 0.05) {
      this.sdx = this.sdz = 0;
      return;
    }
    ((this.sdx = (n / i) * t), (this.sdz = (r / i) * t));
  }
  move(e, t, n, r, i, a) {
    let o = 1 - Math.exp(-i * t);
    ((e.vx += (n - e.vx) * o), (e.vz += (r - e.vz) * o));
    let s = n === 0 && r === 0,
      c = s ? 0.55 : 1;
    ((e.x += (e.vx + e.sepX * c) * t), (e.z += (e.vz + e.sepZ * c) * t));
    let l = e.x - e.colX,
      u = e.z - e.colZ;
    if (e.holdSeat) ((e.colX = e.x), (e.colZ = e.z));
    else if (
      !(l * l + u * u <= 0.0025) &&
      (e.distP < 45 || (this.frame + e.idx) % 4 == 0)
    ) {
      let n = this.tmpPos;
      ((n.x = e.x),
        (n.y = e.y + 0.05),
        (n.z = e.z),
        this.ctx.statics.resolveCircle(n, 0.27, 1.6, this.push),
        this.push.hit
          ? ((e.x = n.x),
            (e.z = n.z),
            s || (e.stuckT += t * (this.push.depth > 0.02 ? 1 : 0.3)))
          : e.stuckT > 0 && (e.stuckT = Math.max(0, e.stuckT - t * 0.5)),
        (e.colX = e.x),
        (e.colZ = e.z),
        this.nResolve++);
    }
    let d = e.vx * e.vx + e.vz * e.vz;
    !s && d > 0.04
      ? (e.heading = iC(e.heading, Math.atan2(e.vx, -e.vz), 9, t))
      : Number.isNaN(a) || (e.heading = iC(e.heading, a, 5, t));
  }
  buildGrid() {
    (this.gHead.fill(-1),
      (this.gox = Math.floor(this.px / US) - 64),
      (this.goz = Math.floor(this.pz / US) - 64));
    for (let e = 0; e < 170; e++) {
      let t = this.peds[e];
      if (!t.active || !t.alive) continue;
      let n = t.state;
      if (n === 6 || n === 7 || n === 9 || n === 8) continue;
      let r = Math.floor(t.x / US) - this.gox,
        i = Math.floor(t.z / US) - this.goz;
      if (r < 0 || i < 0 || r >= HS || i >= HS) continue;
      let a = i * HS + r;
      ((this.gNext[e] = this.gHead[a]), (this.gHead[a] = e));
    }
  }
  separation(e) {
    let t = 0,
      n = 0,
      r = 1,
      i = Math.floor(e.x / US) - this.gox,
      a = Math.floor(e.z / US) - this.goz;
    if (i >= 1 && a >= 1 && i < 127 && a < 127) {
      let o = Math.sin(e.heading),
        s = -Math.cos(e.heading),
        c = -s,
        l = o,
        u = e.vx * e.vx + e.vz * e.vz,
        d = u > 0.2,
        f = e.bike ? 12.25 : 6.25,
        p = e.bike ? 3.5 : 2.5,
        m = e.bike ? 0.95 : 0.85,
        h = e.bike ? 1.1 : 0.75,
        g =
          !!this.region?.umbrellaSpace &&
          this.rain > 0.05 &&
          this.rain > e.umbrellaAt &&
          !e.sheltered &&
          !e.inArcade;
      for (let _ = -1; _ <= 1; _++)
        for (let v = -1; v <= 1; v++) {
          let y = this.gHead[(a + _) * HS + i + v];
          for (; y >= 0;) {
            if (y !== e.idx) {
              let i = this.peds[y],
                a = e.x - i.x,
                _ = e.z - i.z,
                v = a * a + _ * _,
                b =
                  g && this.rain > i.umbrellaAt && !i.sheltered && !i.inArcade
                    ? 1
                    : 0.7;
              if (v < b * b) {
                let e = Math.sqrt(v) + 1e-4,
                  r = ((b - e) / e) * 3.4;
                ((t += a * r), (n += _ * r));
              } else if (d && v < f) {
                let d = -(a * o + _ * s);
                if (d > 0.3) {
                  let f = -(a * c + _ * l);
                  if (f > -m && f < m) {
                    let a = i.vx * o + i.vz * s;
                    if (a * a < u * 0.7 || a < 0) {
                      let i = f >= 0 ? -1 : 1,
                        a = h * (1 - d / p);
                      if (((t += c * i * a), (n += l * i * a), e.bike)) {
                        let e = eC((d - 0.9) / 2.4, 0.1, 1);
                        e < r && (r = e);
                      }
                    }
                  }
                }
              }
            }
            y = this.gNext[y];
          }
        }
    }
    let o = t * t + n * n;
    if (o > 2.25) {
      let e = 1.5 / Math.sqrt(o);
      ((t *= e), (n *= e));
    }
    ((e.sepX = t),
      (e.sepZ = n),
      e.bike && (e.brake += (Math.min(r, e.brake + 0.25) - e.brake) * 0.5));
  }
  playerContact(e) {
    let t = e.x - this.px,
      n = e.z - this.pz,
      r = Math.sqrt(t * t + n * n) || 0.01,
      i = Math.sqrt(this.pvx * this.pvx + this.pvz * this.pvz);
    if (e.bike) {
      if (r < 2.2 && e.state === 0) {
        let i = (2.2 - r) * 0.9;
        ((e.sepX += (t / r) * i),
          (e.sepZ += (n / r) * i),
          (e.brake = Math.min(e.brake, 0.35 + r * 0.2)));
      }
      if (r >= 0.7 || e.bumpCd > 0) return;
      ((e.bumpCd = 3),
        i > 5.2
          ? (this.startTumble(e, t / r, n / r, 2.6, 1.6),
            this.say(e, this.rng.chance(0.5) ? `watch` : `whoa`, !1),
            this.sound(`ped_hey`, e, 0.9))
          : this.heyCd <= 0 &&
            ((this.heyCd = 0.8),
            this.say(e, `watch`, !1),
            this.sound(`ped_hey`, e, 0.7)));
      return;
    }
    if (r < 1.6 && r > 0.62 && e.state === 0) {
      let i = (1.6 - r) * 0.6;
      ((e.sepX += (t / r) * i), (e.sepZ += (n / r) * i));
    }
    if (r >= 0.62) return;
    let a = 0.62 - r;
    if (
      ((e.x += (t / r) * a * 0.8),
      (e.z += (n / r) * a * 0.8),
      !(i < 0.8 || e.bumpCd > 0))
    ) {
      if (((e.bumpCd = 3), i > 5.2 && e.state !== 2)) {
        (this.startStumble(e, t / r, n / r, 1.6),
          (e.lastByPlayer = !1),
          (e.fleeAfter = !1),
          this.heyCd <= 0 &&
            ((this.heyCd = 0.6),
            this.say(e, this.rng.chance(0.5) ? `watch` : `whoa`, !1),
            this.sound(`ped_hey`, e, 0.9)));
        return;
      }
      this.heyCd <= 0 &&
        this.rng.chance(0.55) &&
        ((this.heyCd = 2.5),
        this.say(e, this.rng.pick([`hey`, `hey`, `watch`, `crowded`]), !1),
        this.sound(`ped_hey`, e, 0.7),
        (e.headYawT = eC(tC(Math.atan2(-t, n) - e.heading), -1.2, 1.2)));
    }
  }
  checkVehicles(e) {
    for (let t = 0; t < this.movers.length; t++) {
      let n = this.movers[t],
        r = n.vx * n.vx + n.vz * n.vz;
      if (r < 16 || Math.abs(n.y - e.y) > KS) continue;
      let i = e.x - n.x,
        a = e.z - n.z;
      if (i * i + a * a > 900) continue;
      let o = (i * n.vx + a * n.vz) / r;
      if (o < 0 || o > 1.3) continue;
      let s = i - n.vx * o,
        c = a - n.vz * o;
      if (Math.sqrt(s * s + c * c) > n.halfW + 1.05) continue;
      if (e.state === 11) return;
      if (e.bike) {
        e.brake = 0;
        return;
      }
      let l = Math.sqrt(r),
        u = -n.vz / l,
        d = n.vx / l;
      if (
        (s * u + c * d < 0 && ((u = -u), (d = -d)),
        !this.rng.chance(e.kind === `elder` ? 0.35 : 0.8))
      )
        return;
      (this.leaveGroup(e), (e.state = 11), (e.stateT = 0), (e.timer = 0.55));
      let f = e.kind === `elder` ? 2.2 : 4.6;
      ((e.vx = u * f + (n.vx / l) * 0.6),
        (e.vz = d * f + (n.vz / l) * 0.6),
        (e.threatX = n.x),
        (e.threatZ = n.z),
        (e.poseTarget = 0));
      let p = this.ctx.vehicles?.playerVehicle?.body === n;
      e.distP < 40 &&
        (this.rng.chance(0.5) &&
          this.say(
            e,
            p ? this.rng.pick([`scooter`, `watch`, `omg`, `whoa`]) : `whoa`,
            p,
          ),
        p &&
          this.screamCd <= 0 &&
          this.rng.chance(0.4) &&
          this.sound(`ped_scream`, e, 0.8));
      return;
    }
  }
  lookAtPlayer(e, t) {
    if (e.distP < 7 && this.onFoot) {
      let t = tC(Math.atan2(this.px - e.x, -(this.pz - e.z)) - e.heading);
      if (t > -1.7 && t < 1.7) {
        e.headYawT = eC(t, -1.05, 1.05);
        return;
      }
    }
    ((e.glanceT -= t),
      e.glanceT <= 0 &&
        (e.headYawT !== 0 && this.rng.chance(0.6)
          ? ((e.headYawT = 0), (e.glanceT = this.rng.range(2, 6)))
          : ((e.headYawT = this.rng.range(-0.65, 0.65)),
            (e.glanceT = this.rng.range(0.8, 2)))));
  }
  flee(e, t, n, r) {
    if (
      e.alive &&
      ((e.lite = !1),
      this.leaveGroup(e),
      (e.threatX = t),
      (e.threatZ = n),
      (e.fearT = r),
      (e.state = 3),
      (e.stateT = 0),
      (e.poseTarget = e.bike ? 18 : 0),
      (e.fleeAfter = !1),
      (e.edge < 0 || e.distP > 200) && this.attachToEdge(e, 14),
      e.edge >= 0)
    ) {
      let r = this.nav.edges[e.edge],
        i = (r.ax - t) ** 2 + (r.az - n) ** 2;
      ((e.dir = (r.bx - t) ** 2 + (r.bz - n) ** 2 > i ? 1 : -1),
        r.cross && (e.crossing = 1));
    }
  }
  cower(e, t, n) {
    if (e.bike) {
      this.flee(e, t, n, this.rng.range(6, 10));
      return;
    }
    ((e.lite = !1),
      this.leaveGroup(e),
      (e.state = 4),
      (e.stateT = 0),
      (e.timer = this.rng.range(2.5, 5.5)),
      (e.threatX = t),
      (e.threatZ = n));
  }
  film(e, t, n) {
    if (e.bike) {
      this.flee(e, t, n, this.rng.range(4, 8));
      return;
    }
    ((e.lite = !1),
      this.leaveGroup(e),
      (e.state = 2),
      (e.stateT = 0),
      (e.tx = e.x),
      (e.tz = e.z),
      (e.faceH = Math.atan2(t - e.x, -(n - e.z))),
      (e.idlePose = 12),
      (e.timer = this.rng.range(3, 7)),
      (e.threatX = t),
      (e.threatZ = n),
      (e.fleeAfter = !0),
      this.rng.chance(0.3) && this.say(e, `film`, !1));
  }
  dismount(e, t, n) {
    if (!e.bike) return;
    ((e.bike = !1), (e.cloth -= 288));
    let r = Math.cos(e.heading),
      i = Math.sin(e.heading);
    (this.render.dropBike(
      e.x,
      e.y,
      e.z,
      e.heading,
      t * r + n * i >= 0 ? 1 : -1,
      e.height,
    ),
      e.pose === 18 && ((e.pose = 0), (e.poseW = 0)),
      e.poseTarget === 18 && (e.poseTarget = 0),
      (e.walkSpeed = this.rng.range(1.25, 1.5)),
      (e.runSpeed = this.rng.range(4.4, 5.4)),
      (e.brake = 1));
  }
  startStumble(e, t, n, r) {
    (this.dismount(e, t, n),
      (e.lite = !1),
      this.leaveGroup(e),
      (e.state = 5),
      (e.stateT = 0),
      (e.timer = 0.6),
      (e.vx = t * r),
      (e.vz = n * r),
      (e.pose = e.poseTarget = 11),
      (e.poseW = 0.3));
  }
  startFight(e) {
    ((e.state = 10),
      (e.stateT = 0),
      (e.punchT = 0),
      (e.punchCd = 0.6),
      this.say(e, this.rng.chance(0.5) ? `want` : `come`, !1));
  }
  startTumble(e, t, n, r, i) {
    (this.dismount(e, t, n),
      (e.lite = !1),
      this.leaveGroup(e),
      this.bubbles.drop(e.idx),
      (e.state = 6),
      (e.stateT = 0),
      (e.air = !0),
      (e.vx = t * r),
      (e.vz = n * r),
      (e.vy = i),
      (e.cy = 0.9));
    let a = e.heading,
      o = Math.sin(a),
      s = -Math.cos(a),
      c = Math.cos(a),
      l = Math.sin(a),
      u = t * o + n * s,
      d = t * c + n * l;
    ((e.pitchV = -u * (3 + r * 0.9) + (this.rng.next() - 0.5)),
      (e.rollV = -d * (3 + r * 0.7)),
      Math.abs(e.pitchV) < 1.5 && Math.abs(e.rollV) < 1.5 && (e.pitchV = 3.5),
      (e.pose = e.poseTarget = 3),
      (e.poseW = 1),
      (e.gait = 1),
      (e.punchT = 0));
  }
  tumble(e, t) {
    ((e.vy -= 18 * t),
      (e.cy += e.vy * t),
      (e.x += e.vx * t),
      (e.z += e.vz * t),
      (e.pitch += e.pitchV * t),
      (e.roll += e.rollV * t));
    let n = 0.14 + 0.76 * Math.abs(Math.cos(e.pitch) * Math.cos(e.roll)),
      r = !1;
    if (e.cy <= n) {
      ((e.cy = n),
        (r = !0),
        e.vy < -2.8
          ? ((e.vy = -e.vy * 0.28),
            (e.pitchV *= 0.6),
            (e.rollV *= 0.6),
            (e.air = !0))
          : ((e.vy = 0), (e.air = !1)));
      let i = Math.exp(-3.4 * t);
      ((e.vx *= i),
        (e.vz *= i),
        (e.pitch = tC(e.pitch)),
        (e.roll = tC(e.roll)));
      let a, o;
      Math.abs(e.pitch) >= Math.abs(e.roll)
        ? ((a = e.pitch >= 0 ? Math.PI / 2 : -Math.PI / 2), (o = 0))
        : ((a = 0), (o = e.roll >= 0 ? Math.PI / 2 : -Math.PI / 2));
      let s = Math.min(1, t * 7);
      ((e.pitch += (a - e.pitch) * s),
        (e.roll += (o - e.roll) * s),
        (e.pitchV *= Math.exp(-7 * t)),
        (e.rollV *= Math.exp(-7 * t)));
    }
    ((e.gait = Math.max(0, e.gait - t * (r ? 2.5 : 0.2))),
      (e.groundT -= t),
      e.groundT <= 0 &&
        ((e.groundT = 0.1),
        (e.yTarget = this.ctx.groundAt(e.x, e.z, e.y + 0.3, 0.45))),
      (e.y += (e.yTarget - e.y) * Math.min(1, t * 12)));
    let i = this.tmpPos;
    if (
      ((i.x = e.x),
      (i.y = e.y + 0.05),
      (i.z = e.z),
      this.ctx.statics.resolveCircle(i, 0.35, 1, this.push),
      this.push.hit)
    ) {
      ((e.x = i.x), (e.z = i.z));
      let t = e.vx * this.push.nx + e.vz * this.push.nz;
      t < 0 &&
        ((e.vx -= t * this.push.nx * 1.4), (e.vz -= t * this.push.nz * 1.4));
    }
    let a = e.vx * e.vx + e.vz * e.vz;
    (r &&
      !e.air &&
      a < 0.16 &&
      e.stateT > 0.7 &&
      ((e.vx = e.vz = 0),
      (e.pitchV = e.rollV = 0),
      (e.state = e.alive ? 7 : 9),
      (e.stateT = 0),
      (e.timer = e.alive ? this.rng.range(2.2, 4.5) : 20),
      (e.pose = e.poseTarget = e.alive ? 3 : 16),
      (e.poseW = 1),
      (e.gait = 0)),
      this.accessories(e),
      e.pose !== 3 && e.pose !== 16 && (e.pose = 3),
      (e.poseW = 1),
      e.fade !== e.fadeTarget &&
        (e.fade = eC(
          e.fade + Math.sign(e.fadeTarget - e.fade) * t * 1.8,
          0,
          1,
        )));
  }
  onDamage(e, t) {
    if (!e.active || !e.alive) return;
    let n = t.source || `impact`;
    if (n === `vehicle` && e.hitCd > 0) return;
    e.hitCd = 0.3;
    let r = n === `player`;
    if (n === `vehicle` && t.weapon !== `traffic`) {
      let t = this.ctx.vehicles?.playerVehicle?.body,
        n = e.hitBy && this.time - e.hitByT < 0.5 ? e.hitBy : null;
      n
        ? (r = !!t && n === t)
        : t && (t.x - e.x) ** 2 + (t.z - e.z) ** 2 < 64 && (r = !0);
    }
    let i = t.dir ? t.dir.x : t.point ? e.x - t.point.x : e.x - this.px,
      a = t.dir ? t.dir.z : t.point ? e.z - t.point.z : e.z - this.pz,
      o = Math.sqrt(i * i + a * a);
    if (o < 0.001) {
      let e = this.rng.next() * VS;
      ((i = Math.sin(e)), (a = Math.cos(e)), (o = 1));
    }
    ((i /= o), (a /= o));
    let s =
        Math.max(0, t.amount || 0) *
        (n === `player` && t.weapon === `fists` ? qS : 1),
      c = e.state === 6 || e.state === 7 || e.state === 8;
    e.health -= s;
    let l = e.health <= 0;
    (l && (e.alive = !1),
      (e.lastByPlayer = r),
      (e.fleeAfter = !1),
      (e.threatX = e.x - i * 5),
      (e.threatZ = e.z - a * 5));
    let u = !0;
    if (
      n === `player` &&
      t.weapon === `fists` &&
      s < 30 &&
      !l &&
      !c &&
      e.health >= e.maxHealth * 0.35 &&
      !e.bike
    )
      (this.startStumble(e, i, a, 0.55),
        (e.timer = 0.4),
        (e.daze = 1),
        (u = !1));
    else if (n === `vehicle` || n === `explosion` || s >= 70) {
      let t = eC(3 + s * 0.09, 3, 13);
      this.startTumble(e, i, a, t, n === `explosion` ? 5.5 : 1.8 + t * 0.32);
    } else
      c
        ? this.jolt(e, i, a, l)
        : l || s >= 30 || e.health < e.maxHealth * 0.35
          ? this.startTumble(e, i, a, 2 + s * 0.02, 1.4)
          : (this.startStumble(e, i, a, 2.4), (u = !1));
    (this.screamCd <= 0 || !l) &&
      (l
        ? this.sound(`ped_scream`, e, 1)
        : this.say(e, this.rng.chance(0.5) ? `ow` : `ouch`, !1));
    let d = r && !e.cashDropped && (l || u);
    if ((d && (e.cashDropped = !0), e.hitCb))
      try {
        e.hitCb({
          amount: s,
          health: Math.max(0, e.health / e.maxHealth),
          killed: l,
          knocked: u,
          byPlayer: r,
          source: n,
          weapon: t.weapon,
        });
      } catch (e) {
        console.warn(`[peds] onHit callback threw`, e);
      }
    try {
      let t = {
        pos: new L(e.x, e.y + (c || u ? 0.4 : 1), e.z),
        killed: l,
        byPlayer: r,
        cash: d,
      };
      this.ctx.events.emit(`ped:hit`, t);
    } catch {}
    if (r) {
      let r = l ? `kill` : n === `vehicle` ? `hit_ped` : `assault`;
      (this.reportCrime(r, e.x, e.z, l ? 3 : 1, e),
        this.localPanic(
          e.x,
          e.z,
          l
            ? 32
            : n === `player` &&
                t.weapon &&
                t.weapon !== `fists` &&
                t.weapon !== `bat`
              ? 40
              : 16,
          e,
        ));
    }
  }
  jolt(e, t, n, r) {
    if (e.state === 6) {
      ((e.vx += t * 1.2),
        (e.vz += n * 1.2),
        (e.pitchV += (this.rng.next() - 0.5) * 3));
      return;
    }
    if (r) {
      ((e.state = 9),
        (e.stateT = 0),
        (e.timer = 20),
        (e.pose = e.poseTarget = 16),
        (e.poseW = 1),
        (e.gait = 0));
      return;
    }
    (e.state === 8 &&
      ((e.state = 7),
      (e.pitch = e.a0),
      (e.roll = e.a1),
      (e.cy = 0.14),
      (e.x = e.ux),
      (e.z = e.uz)),
      (e.state = 7),
      (e.stateT = 0),
      (e.timer = Math.max(e.timer, this.rng.range(2.5, 4.5))),
      (e.pose = e.poseTarget = 3),
      (e.poseW = 1),
      (e.gait = 0.6),
      (e.x += t * 0.12),
      (e.z += n * 0.12));
  }
  onImpact(e, t, n, r) {
    if (
      !e.active ||
      !e.alive ||
      (r && ((e.hitBy = r), (e.hitByT = this.time)), e.hitCd > 0)
    )
      return;
    let i = Math.sqrt(t * t + n * n);
    if (i < 0.001) return;
    let a = i / 70;
    if (r && r.kind === `vehicle`) {
      let o = Math.sqrt(r.vx * r.vx + r.vz * r.vz),
        s = Math.max(a, o);
      if (s > 3) {
        (this.dmgDir.set(t / i, 0, n / i),
          (this.dmgInfo.amount = Math.max(8, (s - 2.5) * 9)),
          (this.dmgInfo.source = `vehicle`),
          (this.dmgInfo.dir = this.dmgDir),
          (this.dmgInfo.point = void 0),
          (this.dmgInfo.weapon = void 0),
          this.onDamage(e, this.dmgInfo));
        return;
      }
    }
    let o = e.state;
    if (o === 6 || o === 7 || o === 8 || o === 9) {
      o !== 6 &&
        ((e.x += (t / i) * Math.min(0.12, a * 0.06)),
        (e.z += (n / i) * Math.min(0.12, a * 0.06)));
      return;
    }
    a > 1.2 && o !== 5
      ? (this.startStumble(e, t / i, n / i, Math.min(3, a)),
        (e.lastByPlayer = !!r && r.kind === `player`),
        (e.hitCd = 0.5))
      : ((e.x += (t / i) * Math.min(0.3, a * 0.15)),
        (e.z += (n / i) * Math.min(0.3, a * 0.15)));
  }
  localPanic(e, t, n, r) {
    let i = n * n;
    for (let n of this.peds) {
      if (!n.active || !n.alive || n === r || n.scripted) continue;
      let a = n.state;
      if (a !== 0 && a !== 1 && a !== 2 && a !== 12) continue;
      let o = n.x - e,
        s = n.z - t,
        c = o * o + s * s;
      if (c > i) continue;
      let l = this.rng.next();
      l < 0.6
        ? (this.flee(n, e, t, this.rng.range(5, 10)),
          this.rng.chance(0.25) &&
            this.say(n, this.rng.pick([`help`, `omg`, `police`, `aaah`]), !0))
        : l < 0.75 && c > 36
          ? this.film(n, e, t)
          : (n.headYawT = eC(
              tC(Math.atan2(e - n.x, -(t - n.z)) - n.heading),
              -1.2,
              1.2,
            ));
    }
  }
  reportCrime(e, t, n, r, i) {
    if (this.time - this.lastReport < 4) return;
    let a = null,
      o = 900;
    for (let e of this.peds) {
      if (!e.active || !e.alive || e === i || e.scripted) continue;
      let r = e.state;
      if (
        e.bike ||
        r === 6 ||
        r === 7 ||
        r === 9 ||
        r === 8 ||
        r === 10 ||
        r === 4
      )
        continue;
      let s = e.x - t,
        c = e.z - n,
        l = s * s + c * c;
      l < 16 || l > o || ((o = l), (a = e));
    }
    a &&
      ((this.lastReport = this.time),
      this.leaveGroup(a),
      (a.state = 14),
      (a.stateT = 0),
      (a.timer = 3.6),
      (a.reported = !1),
      (a.crimeType = e),
      (a.crimeX = t),
      (a.crimeZ = n),
      (a.crimeSev = r),
      this.say(a, `call110`, !0));
  }
  accessories(e) {
    let t = e.accBase,
      n = e.state;
    (n === 6 || n === 7 || n === 9 || n === 8
      ? (t &= ~JS)
      : ((this.rain > e.umbrellaAt || (e.parasol && this.sunny)) &&
          !e.inArcade &&
          !e.sheltered &&
          !e.crowdRef?.sheltered &&
          n !== 4 &&
          n !== 10 &&
          n !== 5 &&
          e.poseTarget !== 4 &&
          e.poseTarget !== 9 &&
          e.poseTarget !== 12 &&
          (t = (t | Y(14)) & ~(Y(15) | Y(19) | Y(21))),
        (e.poseTarget === 5 || e.poseTarget === 12 || n === 14) &&
          (t = (t | Y(16)) & ~(Y(17) | Y(18))),
        n === 3 && e.fearT > 2 && (t &= ~Y(16)),
        e.poseTarget !== 4 && e.pose !== 4 && (t &= ~Y(21)),
        e.pose !== 1 && e.poseTarget !== 1 && (t &= ~Y(20)),
        (e.poseTarget === 9 || e.pose === 9 || e.bike) && (t &= ~JS)),
      e.rightBusy && (t &= ~ZS));
    let r = e.poseTarget,
      i = e.pose;
    (r === 23 || i === 23
      ? (t &= ~(ZS | Y(16)))
      : (r === 24 || i === 24) && (t &= ~(ZS | Y(16) | Y(17) | Y(18) | Y(19))),
      n !== 9 && (e.poseTarget === 21 || e.pose === 21)
        ? (t = (t | Y(23)) & ~(ZS | Y(16) | Y(17) | Y(18)))
        : (t &= ~Y(23)),
      (e.accMask = t));
  }
  animate(e, t) {
    let n = Math.sqrt(e.vx * e.vx + e.vz * e.vz);
    if (e.bike) {
      ((e.gait += (Math.min(1, n) - e.gait) * Math.min(1, t * 8)),
        (e.phaseRate = n / (0.726 * e.height)),
        (e.phase += e.phaseRate * t),
        e.phase > VS && (e.phase -= VS),
        (e.pose = e.poseTarget = 18),
        (e.poseW += (1 - e.poseW) * Math.min(1, t * 6)),
        (e.headYaw += (e.headYawT * 0.6 - e.headYaw) * Math.min(1, t * 4)),
        e.fade !== e.fadeTarget &&
          (e.fade = eC(
            e.fade + Math.sign(e.fadeTarget - e.fade) * t * 1.8,
            0,
            1,
          )));
      return;
    }
    let r = t > 0 ? Math.abs(tC(e.heading - e.prevHeading)) / t : 0;
    ((e.prevHeading = e.heading),
      n < 0.35 &&
        r > 1.2 &&
        e.poseW < 0.5 &&
        (n = Math.max(n, Math.min(0.6, r * 0.22))));
    let i;
    if (
      ((i =
        n < 0.12
          ? 0
          : n < 2.1
            ? Math.min(1, 0.3 + n / 1.4)
            : Math.min(2, 1 + (n - 2.1) / 1.6)),
      (e.gait += (i - e.gait) * Math.min(1, t * 8)),
      e.state !== 10 || e.punchT <= 0)
    ) {
      let r =
        e.height *
        (e.gait <= 1 ? 0.55 + 0.9 * e.gait : 1.45 + 1.5 * (e.gait - 1));
      ((e.phaseRate = (n / Math.max(0.35, r)) * VS),
        (e.phase += e.phaseRate * t),
        e.phase > VS && (e.phase -= VS));
    } else e.phaseRate = 0;
    if (e.pose !== e.poseTarget)
      ((e.poseW -= t * 5),
        e.poseW <= 0 && ((e.poseW = 0), (e.pose = e.poseTarget)));
    else {
      let n = e.pose === 0 ? 0 : 1;
      e.poseW += (n - e.poseW) * Math.min(1, t * 5);
    }
    ((e.headYaw += (e.headYawT - e.headYaw) * Math.min(1, t * 4)),
      e.fade !== e.fadeTarget &&
        (e.fade = eC(
          e.fade + Math.sign(e.fadeTarget - e.fade) * t * 1.8,
          0,
          1,
        )));
  }
  linePayload = {
    ped: 0,
    id: ``,
    x: 0,
    y: 0,
    z: 0,
    loud: !1,
    female: !1,
    seed: 0,
  };
  say(e, t, n) {
    if (!(e.talkCd > 0 && !n)) {
      if (
        ((e.talkCd = n ? 2 : 5),
        e.distP < 55 &&
          this.bubbles.say(
            e.idx,
            t,
            e.x,
            e.y + 1.85 * e.height,
            e.z,
            n ? 2 : 2.4,
          ) &&
          this.ctx.events.listenerCount(`ped:line`))
      ) {
        let r = this.linePayload;
        ((r.ped = e.idx),
          (r.id = t),
          (r.x = e.x),
          (r.y = e.y + 1.85 * e.height),
          (r.z = e.z),
          (r.loud = n),
          (r.female = e.female > 0),
          (r.seed = e.seed),
          this.ctx.events.emit(`ped:line`, r));
      }
      n &&
        (t === `help` ||
          t === `aaah` ||
          t === `shoot` ||
          t === `omg` ||
          t === `carjack` ||
          t === `murder`) &&
        this.sound(`ped_scream`, e, 1);
    }
  }
  sound(e, t, n) {
    if (e === `ped_scream`) {
      if (this.screamCd > 0) return;
      this.screamCd = 0.35;
    }
    try {
      this.ctx.audio.play(e, {
        x: t.x,
        y: t.y + 1.6,
        z: t.z,
        volume: n,
        rate: t.female ? 1.18 + t.seed * 0.1 : 0.9 + t.seed * 0.12,
      });
    } catch {}
  }
  chantTick(e) {
    for (let t of this.crowds) {
      if (
        !t.chant ||
        t.released ||
        t.members === 0 ||
        ((t.chantT -= e), t.chantT > 0)
      )
        continue;
      t.chantT = this.rng.range(1.6, 2.6);
      let n = t.x - this.px,
        r = t.z - this.pz;
      if (n * n + r * r > 3600) continue;
      let i = sy[Math.floor(this.time / 7) % sy.length],
        a = 0,
        o = Math.floor(this.rng.next() * 170);
      for (let e = 0; e < 170 && a < 2; e++) {
        let n = this.peds[(o + e) % 170];
        !n.active ||
          !n.alive ||
          n.crowdRef !== t ||
          n.talkCd > 0 ||
          n.distP > 45 ||
          (this.say(n, i, !1), (n.talkCd = 3), a++);
      }
    }
  }
  chatter(e) {
    if (
      ((this.chatterT -= e),
      this.chatterT > 0 ||
        ((this.chatterT = this.rng.range(4, 8)), !this.bubbles.enabled))
    )
      return;
    let t = null,
      n = 0;
    for (let e of this.peds) {
      if (
        !e.active ||
        !e.alive ||
        !e.visible ||
        e.distP > 20 ||
        e.talkCd > 0 ||
        e.bike
      )
        continue;
      let r = e.state;
      (r === 0 || r === 2 || r === 1 || r === 12) &&
        (n++, this.rng.next() * n < 1 && (t = e));
    }
    if (!t) return;
    let r = t,
      i = r.spot >= 0 ? this.spots.spots[r.spot] : null,
      a,
      o = r.variant >= 0 ? this.pools?.defs[r.variant]?.lines : void 0;
    ((a =
      i && i.lines.length && r.state === 2
        ? this.rng.pick(i.lines)
        : o && o.length && (r.crowdRef || this.rng.chance(0.6))
          ? this.rng.pick(o)
          : r.kind === `vendor`
            ? this.rng.chance(0.6)
              ? `vendor`
              : `bogo`
            : r.kind === `monk`
              ? `amitabha`
              : r.kind === `worshipper`
                ? `bless`
                : r.crowdRef
                  ? this.rng.pick([`yummy`, `cute`, `really`, `go`, `wait`])
                  : this.rain > 0.35
                    ? this.rng.chance(0.6)
                      ? `rain`
                      : `go`
                    : this.sunny && Qx(this.hour, 11, 16)
                      ? this.rng.chance(0.5)
                        ? `hot`
                        : `eaten`
                      : r.kind === `office` &&
                          Qx(this.hour, 7, 9.5) &&
                          r.state === 0
                        ? `late`
                        : r.kind === `uncle` ||
                            r.kind === `auntie` ||
                            r.kind === `elder`
                          ? this.rng.chance(0.6)
                            ? `eaten`
                            : `really`
                          : this.rng.pick([`really`, `go`, `wait`, `eaten`])),
      !(
        r.state === 0 &&
        this.rng.chance(0.5) &&
        a !== `late` &&
        a !== `rain`
      ) && this.say(r, a, !1));
  }
  threatT = 0;
  aimO = new L();
  aimD = new L();
  playerThreats(e) {
    let t = this.ctx,
      n = t.input,
      r = t.player;
    if (!n || !r) return;
    if (r.mode === `vehicle` && n.pressed?.(`horn`)) {
      let e = 0;
      for (let t of this.peds)
        !t.active ||
          !t.alive ||
          t.lite ||
          t.distP > 16 ||
          ((t.state === 0 ||
            t.state === 1 ||
            t.state === 2 ||
            t.state === 12) &&
            ((t.headYawT = eC(
              tC(Math.atan2(this.px - t.x, -(this.pz - t.z)) - t.heading),
              -1.3,
              1.3,
            )),
            e < 1 &&
              this.rng.chance(0.35) &&
              (e++,
              (t.talkCd = 0),
              this.say(t, this.rng.chance(0.6) ? `honk` : `hey`, !1))));
    }
    if (((this.threatT -= e), this.threatT > 0)) return;
    this.threatT = 0.2;
    let i = r.weapon;
    if (
      r.mode !== `foot` ||
      (i !== `pistol` && i !== `smg`) ||
      !n.down?.(`aim`)
    )
      return;
    try {
      t.cameraRig.getAimRay(this.aimO, this.aimD);
    } catch {
      return;
    }
    let a =
        Math.sqrt(this.aimD.x * this.aimD.x + this.aimD.z * this.aimD.z) || 1,
      o = this.aimD.x / a,
      s = this.aimD.z / a;
    for (let e of this.peds) {
      if (!e.active || !e.alive || e.lite || e.scripted || e.distP > 18)
        continue;
      let t = e.state;
      if (t !== 0 && t !== 1 && t !== 2 && t !== 12) continue;
      let n = e.x - this.px,
        r = e.z - this.pz,
        i = Math.sqrt(n * n + r * r) || 1;
      if (!((n * o + r * s) / i < 0.93)) {
        if (e.bike) {
          this.flee(e, this.px, this.pz, this.rng.range(5, 8));
          continue;
        }
        (this.leaveGroup(e),
          (e.state = 2),
          (e.stateT = 0),
          (e.tx = e.x),
          (e.tz = e.z),
          (e.faceH = Math.atan2(-n, r)),
          (e.idlePose = 8),
          (e.timer = this.rng.range(1.5, 3)),
          (e.threatX = this.px),
          (e.threatZ = this.pz),
          (e.fleeAfter = !0),
          this.rng.chance(0.4) &&
            this.say(e, this.rng.chance(0.5) ? `help` : `omg`, !0));
      }
    }
  }
  busT = 0.5;
  busDwell = new Map();
  busStopsTick(e) {
    if (((this.busT -= e), this.busT > 0)) return;
    this.busT = 0.8;
    let t = this.ctx.streets?.busStops,
      n = this.ctx.traffic;
    if (!t || !t.length || !n) return;
    if (typeof n.busesDwelling == `function`) {
      let e = 0;
      try {
        e = n.busesDwelling(this.busBuf);
      } catch {
        return;
      }
      for (let n = 0; n < e; n++)
        this.busAt(
          t,
          this.busBuf[n * 3],
          this.busBuf[n * 3 + 1],
          this.busBuf[n * 3 + 2],
        );
      return;
    }
    if (!n.vehicles) return;
    let r;
    try {
      r = n.vehicles();
    } catch {
      return;
    }
    for (let e of r)
      e.kind !== `bus` || e.speed > 0.8 || this.busAt(t, e.x, e.z, e.heading);
  }
  busBuf = new Float32Array(72);
  busAt(e, t, n, r) {
    if (!((t - this.px) ** 2 + (n - this.pz) ** 2 > 8100))
      for (let i = 0; i < e.length; i++) {
        let a = e[i];
        (a.curbX - t) ** 2 + (a.curbZ - n) ** 2 > 110 ||
          (this.busDwell.get(i) ?? -1) > this.time ||
          (this.busDwell.set(i, this.time + 25), this.board(i, t, n, r));
      }
  }
  board(e, t, n, r) {
    let i = Mt(this.ctx.plan.side),
      a = Math.sin(r),
      o = -Math.cos(r),
      s = Math.cos(r) * i,
      c = Math.sin(r) * i,
      l = t + a * 4.2 + s * 1.45,
      u = n + o * 4.2 + c * 1.45;
    for (let t of this.peds)
      t.active &&
        t.alive &&
        !t.scripted &&
        t.busStop === e &&
        t.state === 2 &&
        this.rng.chance(0.85) &&
        (this.leaveGroup(t),
        (t.state = 16),
        (t.stateT = 0),
        (t.tx = l + (this.rng.next() - 0.5) * 0.4),
        (t.tz = u + (this.rng.next() - 0.5) * 0.4),
        (t.faceH = r - (i * Math.PI) / 2));
    let d = this.rng.int(0, 2);
    for (let e = 0; e < d && this.count < 164; e++) {
      let t = this.alloc(
        this.kindAt(l, u),
        l - a * e * 0.6,
        this.spawnY(l, u),
        u - o * e * 0.6,
        !0,
      );
      if (!t) break;
      if (((t.heading = r + (i * Math.PI) / 2), !this.attachToEdge(t, 10))) {
        this.free(t);
        break;
      }
      t.state = 0;
    }
  }
  cultureHooks(e) {
    if (((this.cultureT -= e), this.cultureT > 0)) return;
    this.cultureT = 1.5;
    let t;
    try {
      t = this.ctx.culture?.garbageTrucks;
    } catch {
      t = void 0;
    }
    if (t && t.length) {
      for (let e of t)
        if (!(!e.playing || Math.hypot(e.x - this.px, e.z - this.pz) > 70)) {
          for (let t of this.peds)
            if (
              t.active &&
              t.alive &&
              t.state === 0 &&
              (t.kind === `auntie` ||
                t.kind === `uncle` ||
                t.kind === `elder`) &&
              !(
                (t.x - e.x) ** 2 + (t.z - e.z) ** 2 > 900 ||
                !this.rng.chance(0.2)
              )
            ) {
              this.say(t, `garbage`, !1);
              break;
            }
        }
    }
  }
};
