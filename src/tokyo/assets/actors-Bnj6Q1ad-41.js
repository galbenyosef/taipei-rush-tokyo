// tokyo/assets/actors-Bnj6Q1ad 41 — math
// Lines 17419-19613 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var jf = 1,
  Mf = 0.7,
  Nf = 1.6,
  Pf = 9,
  Ff = 0.32,
  If = 1.8,
  Lf = 0.08,
  Rf = [0.3, 0.55, 0.75, 1.01],
  zf = [
    [1.01, 1.01, 1.01, 1.01],
    [0, 1.01, 1.01, 1.01],
    [0, 0, 1.01, 1.01],
    [0, 0, 0, 1.01],
  ],
  Bf = [],
  Vf = class {
    charge = 0;
    level = 0;
    boostT = 0;
    boostK = 0;
    spinT = 0;
    spinDir = 1;
    lastSpin = ``;
    bumps = 0;
    draft = 0;
    racing = !1;
    turbos = 0;
    spins = 0;
    costume = 0;
    charging = !1;
    flash = 0;
    boost(e, t = 1) {
      e > 0 &&
        ((this.boostT = Math.max(this.boostT, e)),
        (this.boostK = Math.max(
          this.boostT > 0 ? this.boostK : 0,
          V(t, 0, 1.5),
        )),
        (this.flash = 0.25));
    }
    spin(e, t = 1.1) {
      this.spinT > 0.2 ||
        ((this.spinT = t),
        (this.spinDir = e < 0 ? -1 : 1),
        this.spins++,
        (this.boostT = 0),
        (this.charge = 0),
        (this.level = 0),
        (this.charging = !1));
    }
  },
  Hf = [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [0, 1],
    [0, -1],
  ],
  Uf = class {
    w;
    id = jf++;
    spec;
    h;
    object = new _();
    tilt = new _();
    seat = new x();
    mesh;
    mat;
    matPair;
    steerMesh = null;
    riderMesh = null;
    showRider = !0;
    inBatch = !1;
    body;
    heading;
    health = 1e3;
    maxHealth = 1e3;
    color;
    driver = `none`;
    destroyed = !1;
    sirenOn = !1;
    lightsOn = !1;
    controls = { throttle: 0, brake: 0, steer: 0, handbrake: !1 };
    locked = !1;
    parked = !1;
    used = !1;
    seed;
    vx = 0;
    vz = 0;
    yawRate = 0;
    y = 0;
    vy = 0;
    airborne = !1;
    vF = 0;
    vR = 0;
    steer = 0;
    steerIn = 0;
    gripK = 7;
    drifting = !1;
    slip = 0;
    rpm = 0.15;
    gear = 1;
    shiftT = 0;
    throttleS = 0;
    braking = 0;
    reversing = !1;
    handbrake = !1;
    burnout = 0;
    mass;
    inertia;
    wheelbase;
    pitch = 0;
    pitchV = 0;
    roll = 0;
    rollV = 0;
    heave = 0;
    heaveV = 0;
    lean = 0;
    tPitch = 0;
    tRoll = 0;
    accLong = 0;
    accLat = 0;
    wheelSpin = [0, 0, 0, 0];
    wheelGround = [0, 0, 0, 0];
    fallen = 0;
    headOn = 0;
    headMode = -1;
    sleeping = !0;
    lastHit = -10;
    hazardT = 0;
    onFire = !1;
    sinking = 0;
    destroyedAt = 0;
    smokeAcc = 0;
    fireAcc = 0;
    tireAcc = 0;
    deform = null;
    dented = !1;
    lastCrumple = -10;
    validX = 0;
    validZ = 0;
    validH = 0;
    hasValid = !1;
    powerT = 0;
    hbDrift = !1;
    assist = !1;
    wobbleT = 0;
    wobbleA = 0;
    kart;
    scripted = null;
    cargo = null;
    scrapeT = 0;
    idleT = 0;
    alarmT = 0;
    alarmBeat = 0;
    sprayAcc = 0;
    backfire = 0;
    lastThrottle = 0;
    settled = !1;
    coasting = !1;
    get speed() {
      return this.vF;
    }
    get kind() {
      return this.spec.kind;
    }
    get kmh() {
      return Math.abs(this.vF) * 3.6;
    }
    fireFuse = 1 / 0;
    preSpeed = 0;
    preVx = 0;
    preVz = 0;
    livery = null;
    wheelieA = 0;
    wheelieKick = 0;
    lastThrIn = 0;
    prevWheelieSpd = 0;
    lowsideT = 0;
    bike;
    standLean;
    constructor(e, t, n, r, i, a, o) {
      ((this.w = e),
        (this.spec = zs[t]),
        (this.h = Ks[t]),
        (this.heading = i),
        (this.color = a),
        (this.seed = o),
        (this.mass = this.spec.mass));
      let s = this.spec.halfL * 2,
        c = this.spec.halfW * 2;
      ((this.inertia = ((this.mass * (s * s + c * c)) / 12) * 1.25),
        (this.wheelbase = Math.max(0.8, this.h.rearAxle - this.h.frontAxle)),
        (this.gripK = this.h.grip),
        (this.bike = Bs(t)),
        (this.kart = t === `kart` ? new Vf() : void 0),
        (this.standLean = this.bike
          ? 0.16
          : uc().centreStand?.includes(t)
            ? 0.012
            : 0.1));
      let l = e.ctx;
      ((this.matPair = e.takeMaterial(t)),
        (this.mat = this.matPair.mat),
        this.mat.vu.uPaint.value.setHex(a),
        this.mat.vu.uSig.value.set(0, 0, 0, o),
        (this.mesh = new M(e.bodyGeo(t), this.mat)),
        (this.mesh.castShadow = t !== `kart`),
        (this.mesh.receiveShadow = !0),
        bd[t] && (this.mesh.customDepthMaterial = this.matPair.depth),
        this.tilt.add(this.mesh),
        this.seat.position.set(
          Be(this.h.seat[0], l.plan.side),
          this.h.seat[1],
          this.h.seat[2],
        ),
        (this.seat.name = `vehicle-seat`));
      {
        let [e, n, r] = this.h.seat,
          i = (t) => (t ? [t[0] - e, t[1] - n, t[2] - r] : void 0),
          a = i(this.h.grips);
        this.seat.userData = {
          kind: t,
          twoWheeler: this.spec.twoWheeler,
          riderStyle:
            t === `superbike`
              ? `sport`
              : t === `motorcycle`
                ? `moto`
                : t === `scooter` || t === `kart`
                  ? `scooter`
                  : void 0,
          grips: a ? [[-a[0], a[1], a[2]], a] : void 0,
          pegs: i(this.h.pegs),
          tuck: this.h.tuck ?? 0,
        };
      }
      this.tilt.add(this.seat);
      let u = md[t];
      (u &&
        ((this.steerMesh = new M(e.steerGeo(t), this.mat)),
        this.steerMesh.position.set(0, u.y, u.z),
        (this.steerMesh.castShadow = !1),
        this.tilt.add(this.steerMesh),
        (this.riderMesh = new M(e.riderGeo(t), this.mat)),
        (this.riderMesh.castShadow = !0),
        (this.riderMesh.visible = !1),
        this.tilt.add(this.riderMesh)),
        this.object.add(this.tilt),
        (this.object.name = `vehicle-${t}-${this.id}`),
        (this.y = this.spec.boat
          ? l.plan.waterLevel
          : l.groundAt
            ? l.groundAt(n, r, l.plan.groundHeight(n, r) + 0.4, 0.35)
            : l.plan.groundHeight(n, r)),
        this.object.position.set(n, this.y, r),
        (this.object.rotation.y = -i),
        l.scene.add(this.object));
      let d = this;
      ((this.body = {
        id: Xe(),
        kind: `vehicle`,
        owner: `vehicles`,
        x: n,
        y: this.y,
        z: r,
        heading: i,
        halfW: this.spec.halfW,
        halfL: this.spec.halfL,
        radius: Math.hypot(this.spec.halfW, this.spec.halfL),
        height: this.spec.height,
        vx: 0,
        vz: 0,
        mass: this.mass,
        active: !0,
        userData: { vehicle: this, kind: t },
        onImpact(e, t, n) {
          d.applyImpulse(e, t, n);
        },
        onDamage(e) {
          d.damage(e);
        },
      }),
        l.dynamics.add(this.body));
    }
    get x() {
      return this.body.x;
    }
    get z() {
      return this.body.z;
    }
    wake() {
      ((this.sleeping = !1), (this.idleT = 0));
    }
    get electric() {
      return this.kind !== `scooter` || this.livery === `police`
        ? !1
        : this.bodyOverride === null
          ? Bc(this.seed, 69, 8) < (bd.scooter?.b[3] ?? 0)
          : this.bodyOverride;
    }
    bodyOverride = null;
    setLook(e, t) {
      if (this.livery === `police`) return;
      let n = this.mat.vu;
      if (e && (this.kind === `scooter` || this.kind === `motorcycle`)) {
        let t =
            e === `topbox`
              ? 1
              : this.kind === `scooter`
                ? e === `pangda`
                  ? 2
                  : e === `bearlove`
                    ? 3
                    : 0
                : 0,
          r = 1.01;
        (t === 1
          ? n.uVarA.value.set(r, r, r, r)
          : t === 2
            ? n.uVarA.value.set(0, r, r, r)
            : t === 3
              ? n.uVarA.value.set(0, 0, r, r)
              : n.uVarA.value.set(0, 0, 0, 0),
          (this.cargo = e));
      }
      typeof t == `boolean` &&
        this.kind === `scooter` &&
        ((n.uVarB.value.w = t ? 1.01 : 0),
        (this.bodyOverride = t),
        (this.cargo ??= `seeded`));
    }
    get hasSiren() {
      return (
        !!this.h.sirenAt && (this.kind !== `van` || this.livery === `police`)
      );
    }
    get batchable() {
      return (
        this.sleeping &&
        this.settled &&
        this.driver === `none` &&
        !this.destroyed &&
        this.sinking === 0 &&
        !this.dented &&
        this.hazardT <= 0 &&
        this.alarmT <= 0 &&
        !this.livery &&
        !this.cargo &&
        !this.onFire &&
        Math.abs(this.steer) < 0.01 &&
        Math.abs(this.heave) < 0.004 &&
        this.headMode !== 1 &&
        !this.sirenOn &&
        !this.lightsOn
      );
    }
    applyImpulse(e, t, n) {
      (this.destroyed && this.sinking > 0) ||
        ((this.vx += e / this.mass),
        (this.vz += t / this.mass),
        (this.yawRate +=
          (((Math.random() - 0.5) * Math.hypot(e, t)) / this.inertia) * 0.6),
        this.wake(),
        this.driver === `none` && !this.destroyed && (this.hazardT = 6));
    }
    damage(e) {
      if (this.destroyed) return;
      let t = e.source === `explosion`,
        n = t ? 2.2 : e.weapon ? 1.6 : 1;
      if (
        (this.hurt(e.amount * n, t),
        this.onFire &&
          e.weapon &&
          (this.fireFuse = Math.max(0.05, this.fireFuse - e.amount * 0.02)),
        this.driver === `none` &&
          this.parked &&
          !this.spec.twoWheeler &&
          (this.alarmT = 9),
        e.point &&
          this.w.fx.sparks(
            e.point.x,
            e.point.y,
            e.point.z,
            e.dir ? -e.dir.x : 0,
            e.dir ? -e.dir.z : 0,
            4,
            3,
          ),
        this.driver === `none` && !this.destroyed && (this.hazardT = 6),
        t && e.dir)
      ) {
        let t = Math.min(e.amount * 18, this.mass * 11);
        (this.applyImpulse(e.dir.x * t, e.dir.z * t, null),
          (this.vy = Math.max(
            this.vy,
            Math.min(6, e.amount * 0.04) * V(2e3 / this.mass, 0.25, 1),
          )));
      }
      this.wake();
    }
    hurt(e, t = !1) {
      if (this.destroyed || !(e > 0)) return;
      let n = this.health,
        r = n - e;
      if (r <= 150) {
        if (t && r <= -150 && this.driver !== `player`) {
          ((this.health = 0), this.explode());
          return;
        }
        r = n > 150 ? Math.max(r, 120) : Math.max(r, 1);
      }
      this.health = Math.min(n, r);
    }
    tickFire(e) {
      if (!(this.destroyed || this.sinking > 0)) {
        if (this.health > 150) {
          ((this.onFire = !1), (this.fireFuse = 1 / 0));
          return;
        }
        (this.onFire ||
          ((this.onFire = !0),
          (this.fireFuse = gf),
          this.wake(),
          this.w.onIgnite(this)),
          (this.fireFuse -= e),
          (this.health = Math.min(
            this.health,
            120 * Math.max(0, this.fireFuse / gf),
          )),
          this.fireFuse <= 0 && this.explode());
      }
    }
    setLivery(e) {
      this.livery = e;
      let t = this.mat.vu;
      e === `police` &&
        (this.kind === `scooter`
          ? (t.uVarA.value.set(0, 0, 0, 1), t.uVarB.value.set(0, 0, 0, 0))
          : this.kind === `van` &&
            (t.uVarA.value.set(0, 1, 1, 1), t.uVarB.value.set(1, 0, 0, 0)));
    }
    placeOnFloor(e) {
      let t = this.w.ctx;
      if (!t.groundAt || !Number.isFinite(e) || this.spec.boat) return;
      let n = t.groundAt(this.body.x, this.body.z, e + 0.4, 0.35);
      Math.abs(n - this.y) < 0.01 ||
        ((this.y = n),
        (this.body.y = n),
        (this.object.position.y = n),
        (this.settled = !1),
        (this.hasValid = !1));
    }
    teleport(e, t, n) {
      let r = this.w.ctx;
      ((this.body.x = e),
        (this.body.z = t),
        (this.heading = z(n)),
        (this.vx = this.vz = this.vF = this.vR = this.yawRate = this.vy = 0),
        (this.steer = this.steerIn = 0),
        (this.drifting = !1),
        (this.airborne = !1),
        (this.fallen = 0),
        (this.wheelieA = 0));
      let i = r.plan.groundHeight(e, t);
      ((this.y = this.spec.boat
        ? r.plan.waterLevel
        : r.groundAt
          ? r.groundAt(e, t, i + 0.5, 0.35)
          : i),
        (this.body.vx = this.body.vz = 0),
        (this.body.heading = this.heading),
        (this.settled = !1),
        (this.hasValid = !1),
        (this.powerT = 0),
        (this.wobbleT = 0),
        this.wake(),
        this.updateVisual(0, 0));
    }
    explode() {
      this.destroyed ||
        ((this.destroyed = !0),
        (this.health = 0),
        (this.onFire = !1),
        (this.fireFuse = 1 / 0),
        (this.wheelieA = 0),
        (this.destroyedAt = this.w.now()),
        (this.sirenOn = !1),
        (this.lightsOn = !1),
        (this.vy = 4.5 * V(2200 / this.mass, 0.25, 1.2)),
        (this.yawRate += (Math.random() - 0.5) * 2),
        this.w.fx.explosion(
          this.body.x,
          this.y,
          this.body.z,
          this.spec.twoWheeler
            ? 0.6
            : this.kind === `bus` || this.kind === `garbage`
              ? 1.5
              : 1,
          this.color,
        ),
        this.w.onDestroyed(this),
        this.wake());
    }
    stuckT = 0;
    reverseT = 0;
    autopilot(e, t, n, r = !1) {
      let i = this.controls,
        a = e - this.body.x,
        o = t - this.body.z,
        s = Math.hypot(a, o),
        c = Math.atan2(a, -o),
        l = z(c - this.heading),
        u = this.vF,
        d = this.w.ctx.time.dt || 1 / 60;
      if (
        (Math.abs(u) < 0.8 && i.throttle > 0.5
          ? (this.stuckT += d)
          : (this.stuckT = Math.max(0, this.stuckT - d * 2)),
        this.stuckT > 1.2 && ((this.reverseT = 1.1), (this.stuckT = 0)),
        this.reverseT > 0 || (Math.abs(l) > 2.2 && s < 25 && Math.abs(u) < 6))
      )
        return (
          (this.reverseT = Math.max(0, this.reverseT - d)),
          (i.throttle = 0),
          (i.brake = 1),
          (i.steer = V(-Math.sign(l) * 1, -1, 1)),
          (i.handbrake = !1),
          s
        );
      i.steer = V(l * 2.4, -1, 1);
      let f = V(1 - Math.abs(l) * 0.55, 0.3, 1),
        p = V(s / 12, 0.25, 1),
        m = n * f * p;
      return (
        (i.throttle = V((m - u) / 3.5, 0, 1)),
        (i.brake = u > m + 1.5 ? V((u - m) / 6, 0, 1) : 0),
        (i.handbrake = r && Math.abs(l) > 0.9 && u > 11),
        s
      );
    }
    repair() {
      ((this.health = 1e3),
        (this.onFire = !1),
        (this.fireFuse = 1 / 0),
        (this.destroyed = !1),
        (this.sinking = 0),
        (this.fallen = 0),
        (this.dentPending = !1));
      let e = this.deform;
      if (e && this.dented) {
        let t = e.geo.attributes.position,
          n = e.geo.attributes.normal;
        (t.array.set(e.orig),
          n.array.set(e.origN),
          t.clearUpdateRanges(),
          n.clearUpdateRanges(),
          (t.needsUpdate = !0),
          (n.needsUpdate = !0));
      }
      ((this.dented = !1),
        (this.lodFar = !1),
        (this.steerBaked = !1),
        (this.mesh.geometry = e ? e.geo : this.w.bodyGeo(this.kind)),
        this.steerMesh && (this.steerMesh.visible = !0));
    }
    prepareDeform() {
      (this.deform ||
        ((this.deform = this.w.takeDeform(this.kind)), (this.dented = !1)),
        !this.lodFar &&
          !this.steerBaked &&
          (this.mesh.geometry = this.deform.geo));
    }
    nearGeo() {
      return this.deform ? this.deform.geo : this.w.bodyGeo(this.kind);
    }
    simulate(e, t, n, r = !1) {
      let i = this.w.ctx;
      this.h;
      let a = Math.hypot(this.vx, this.vz);
      this.assist = r;
      let o = V(t.steer, -1, 1);
      this.kart && (n *= 1.6);
      let s = r ? n * (1 - 0.35 * V(a / 30, 0, 1)) : n,
        c =
          Math.abs(o) < Math.abs(this.steerIn) || o * this.steerIn < 0
            ? s * 1.6
            : s,
        l = o - this.steerIn;
      ((this.steerIn += V(l, -c * e, c * e)),
        (this.handbrake = t.handbrake),
        (this.throttleS += (t.throttle - this.throttleS) * Je(10, e)),
        t.throttle > 0.9 && Math.abs(this.steerIn) > 0.85
          ? (this.powerT += e)
          : (this.powerT = 0),
        this.wobbleT > 0 && (this.wobbleT = Math.max(0, this.wobbleT - e)),
        (this.preSpeed = a),
        (this.preVx = this.vx),
        (this.preVz = this.vz));
      let u = i.plan.surfaceAt(this.body.x, this.body.z),
        d = 1,
        f = 0;
      ((this.surfMu = 1.05),
        u === `terrain` || u === `park`
          ? ((d = 0.72), (f = 1.6), (this.surfMu = 0.36))
          : u === `lot` && ((d = 0.9), (f = 0.4)),
        this.spec.boat && ((d = 1), (f = 0.15), (this.surfMu = 1.05)));
      let p = 1 - 0.28 * this.w.wet();
      ((d *= p), (this.surfMu *= 1 - 0.25 * this.w.wet()));
      let m = Math.ceil(e / lf - 1e-6),
        h = Math.ceil((a * e) / uf - 1e-6),
        g = Math.max(1, Math.min(df, Math.max(m, h))),
        _ = e / g;
      (this.hasValid || this.saveValid(), this.kart && this.kartFrame(e, t, a));
      for (let e = 0; e < g; e++) this.integrate(_, t, d, f);
      this.kart && this.kartBump();
    }
    kartFrame(e, t, n) {
      let r = this.kart;
      if (
        ((r.flash = Math.max(0, r.flash - e)),
        r.spinT > 0 && (r.spinT = Math.max(0, r.spinT - e)),
        r.boostT > 0 &&
          ((r.boostT = Math.max(0, r.boostT - e)),
          r.boostT === 0 && (r.boostK = 0)),
        r.spinT > 0 || this.destroyed)
      ) {
        ((r.charge = 0), (r.level = 0), (r.charging = !1));
        return;
      }
      this.drifting && t.handbrake && n > 6
        ? ((r.charging = !0),
          (r.charge += e * (0.65 + 0.35 * Math.abs(this.steerIn))),
          (r.level = r.charge >= Nf ? 2 : +(r.charge >= Mf)))
        : r.charging &&
          (r.level > 0 &&
            !t.handbrake &&
            n > 4 &&
            (r.boost(r.level === 2 ? 1.3 : 0.7, r.level === 2 ? 1 : 0.7),
            r.turbos++),
          (r.charging = !1),
          (r.charge = 0),
          (r.level = 0));
    }
    kartBump() {
      let e = this.w.ctx,
        t = this.body,
        n = e.dynamics.query(t.x, t.z, t.radius + 0.6, Bf),
        r = Math.cos(this.heading),
        i = Math.sin(this.heading);
      for (let e = 0; e < n; e++) {
        let n = Bf[e];
        if (
          n === t ||
          !n.active ||
          (n.kind !== `ped` && n.kind !== `player` && n.kind !== `police`) ||
          Math.abs((n.y ?? 0) - this.y) > 1.6
        )
          continue;
        let a = n.x - t.x,
          o = n.z - t.z,
          s = a * r + o * i,
          c = -a * i + o * r,
          l = V(s, -this.spec.halfW, this.spec.halfW),
          u = V(c, -this.spec.halfL, this.spec.halfL),
          d = s - l,
          f = c - u,
          p = Math.hypot(d, f),
          m = n.radius || 0.35;
        if (p > m) continue;
        let h, g;
        if (p > 1e-4) {
          let e = d / p,
            t = f / p;
          ((h = e * r - t * i), (g = e * i + t * r));
        } else {
          let e = Math.hypot(a, o) || 1;
          ((h = a / e), (g = o / e));
        }
        let _ = m - p + 0.02;
        ((t.x -= h * _), (t.z -= g * _));
        let v = this.vx * h + this.vz * g;
        (v > 0 &&
          ((this.vx -= h * v * 1.25),
          (this.vz -= g * v * 1.25),
          (this.vF =
            this.vx * Math.sin(this.heading) -
            this.vz * Math.cos(this.heading))),
          v > 0.5 && this.kart.bumps++);
        try {
          n.onImpact?.(h * 55, g * 55, null);
        } catch {}
      }
    }
    saveValid() {
      this.centreInSolid(this.body.x, this.body.z) ||
        ((this.validX = this.body.x),
        (this.validZ = this.body.z),
        (this.validH = this.heading),
        (this.hasValid = !0));
    }
    centreInSolid(e, t) {
      let n = this.w.ctx.statics.query(
        e - 0.02,
        t - 0.02,
        e + 0.02,
        t + 0.02,
        Sf,
      );
      if (n === 0) return !1;
      let r = this.y + 0.25,
        i = r + Math.max(0.5, this.spec.height - 0.25);
      for (let a = 0; a < n; a++) {
        let n = Sf[a];
        if (r >= n.maxY - 0.05 || i <= n.minY || n.tag === `hedge`) continue;
        if (n.kind === 2) {
          let r = e - n.cx,
            i = t - n.cz,
            a = n.hx - 0.02;
          if (a > 0 && r * r + i * i < a * a) return !0;
          continue;
        }
        let o = e - n.cx,
          s = t - n.cz;
        if (n.kind === 1) {
          let e = o * n.cos + s * n.sin;
          ((s = -o * n.sin + s * n.cos), (o = e));
        }
        if (Math.abs(o) < n.hx - 0.02 && Math.abs(s) < n.hz - 0.02) return !0;
      }
      return !1;
    }
    sweep(e, t) {
      let n = this.body.x - e,
        r = this.body.z - t,
        i = Math.hypot(n, r);
      if (
        i < ff ||
        (yf.set(e, this.y + pf, t),
        bf.set(n / i, 0, r / i),
        !this.w.ctx.statics.raycast(yf, bf, i, xf, `hedge`))
      )
        return;
      let a = Math.max(0, xf.distance - 0.03);
      ((this.body.x = e + bf.x * a), (this.body.z = t + bf.z * a));
    }
    guardPose() {
      return this.centreInSolid(this.body.x, this.body.z)
        ? this.hasValid
          ? ((this.body.x = this.validX),
            (this.body.z = this.validZ),
            (this.heading = this.validH),
            (this.vx *= -0.2),
            (this.vz *= -0.2),
            (this.yawRate *= 0.3),
            (this.vF =
              this.vx * Math.sin(this.heading) -
              this.vz * Math.cos(this.heading)),
            !0)
          : !1
        : (this.saveValid(), !1);
    }
    knockOver(e, t, n) {
      if (!this.spec.twoWheeler || this.driver !== `none` || this.destroyed)
        return;
      let r = Math.min(4.5, 0.8 + n * 0.3);
      ((this.vx += e * r),
        (this.vz += t * r),
        (this.yawRate += (Math.random() - 0.5) * 2.4),
        (this.fallen = 1),
        (this.coasting = !0),
        (this.hazardT = 0),
        this.wake());
    }
    wobble(e) {
      if (!this.spec.twoWheeler) return;
      ((e = V(e, 0, 1)),
        (this.wobbleT = 0.55 + 0.35 * e),
        (this.wobbleA = 0.05 + 0.13 * e));
      let t = 1 - 0.18 * e;
      ((this.vx *= t),
        (this.vz *= t),
        (this.yawRate += (Math.random() - 0.5) * 0.6 * e),
        (this.heaveV += 0.4 * e));
    }
    surfMu = 1;
    integrate(e, t, n, r) {
      let i = this.h,
        a = this.heading,
        o = Math.sin(a),
        s = -Math.cos(a),
        c = Math.cos(a),
        l = Math.sin(a),
        u = this.vx * o + this.vz * s,
        d = this.vx * c + this.vz * l,
        f = Math.abs(u),
        p = this.kart,
        m =
          this.spec.maxSpeed *
          (p ? 1 + Ff * p.boostK * +(p.boostT > 0) + Lf * p.draft : 1),
        h = this.destroyed || this.sinking > 0,
        g = !!p && p.spinT > 0,
        _ = this.driver === `player` && !p && !this.spec.boat,
        v = _ && this.spec.twoWheeler,
        y = V(f / (m * (v ? 1 : 0.7)), 0, 1),
        b = v ? Math.max(i.maxSteerHigh, 0.3) : i.maxSteerHigh,
        x = i.maxSteer + (b - i.maxSteer) * y ** (v ? 1.2 : 0.7);
      this.steer = this.steerIn * x;
      let S = !!t.hold && !h,
        C = h || S || g ? 0 : t.throttle,
        w = h || S ? 0 : t.brake,
        T = 0,
        E = 0;
      if (
        ((this.reversing = !1),
        (this.braking = 0),
        (this.burnout = 0),
        C > 0.3 &&
          (w > 0.3 || t.handbrake) &&
          f < 2.5 &&
          !this.spec.twoWheeler &&
          !this.spec.boat)
      )
        ((this.burnout = C), (E = i.brake));
      else if (C > 0.02 && u > -0.6) {
        let e = V(u / (m * Us), 0, 1.2),
          t = Math.max(0, 1 - e ** +Ws) * (1 + 0.35 * Math.max(0, 1 - f / 7));
        T =
          this.spec.accel *
          C *
          t *
          (this.drifting ? (p ? 0.92 : 0.55) : 1) *
          (v && f > 4 ? 1 - 0.55 * Math.abs(this.steerIn) : 1);
      } else C > 0.02 && ((E = i.brake * C), (this.braking = C));
      (w > 0.02 &&
        this.burnout === 0 &&
        (u > 0.6
          ? ((E = Math.max(E, i.brake * w)), (this.braking = w))
          : C <= 0.02 &&
            ((this.reversing = !0),
            (T =
              -this.spec.accel *
              0.65 *
              w *
              Math.max(0, 1 - Math.abs(Math.min(0, u)) / i.reverseMax)))),
        S && ((E = Math.max(E, f > 0.5 ? i.brake : 20)), (this.braking = 1)),
        t.handbrake &&
          f > 0.2 &&
          (E = Math.max(
            E,
            this.spec.twoWheeler
              ? 6
              : this.drifting
                ? p
                  ? 0.5
                  : 3
                : p && f > 6
                  ? 2.2
                  : 5,
          )),
        p &&
          !h &&
          (p.boostT > 0 &&
            !g &&
            (T += Pf * p.boostK * Math.max(0, 1 - f / (m * 1.06))),
          p.draft > 0 && C > 0.4 && (T += If * p.draft),
          g && (E = Math.max(E, 5.5))),
        t.handbrake && f <= 0.5 && C <= 0.02 && (E = Math.max(E, 20)),
        E > 0 &&
          f > 0.5 &&
          (E = Math.min(E, i.brake * 1.02 * (this.surfMu / 1.05))));
      let D =
        Gs +
        r +
        (C < 0.02 ? (_ ? (this.spec.twoWheeler ? 1.8 : 1.2) : 0.35) : 0) +
        i.drag * f * f;
      (h && (D += 2.5),
        this.fallen > 0.5 ? (D += 6.5) : this.driver === `none` && (D += 0.5));
      let O = this.tPitch;
      if (!this.airborne) {
        let e = Math.sin(O),
          t = Math.cos(O),
          n = this.surfMu * 9.8 * t;
        (Math.abs(T) > n && (T = Math.sign(T) * n),
          9.8 * Math.abs(e) > n &&
            ((E = Math.min(E, n * 0.6)),
            (D = Math.min(D, 0.3)),
            C > 0.3 && (this.burnout = Math.max(this.burnout, 0.6))),
          (T -= 9.8 * e));
      }
      (this.airborne && ((T = 0), (E = 0), (D = 0.05)), (u += T * e));
      let k = (E + D) * e;
      Math.abs(u) <= k
        ? (u = T !== 0 && Math.abs(T * e) > k ? u : 0)
        : (u -= Math.sign(u) * k);
      let A = this.wheelbase,
        j = (u * Math.tan(this.steer)) / A,
        M = (i.latAccel * n * (v ? 1.35 : 1)) / Math.max(f, 1.5);
      j = V(j, -M, M);
      let N = Math.atan2(d, Math.max(f, 0.5));
      this.slip = N;
      let P = -N * Math.sign(u || 1),
        F = i.grip * n,
        ee = i.drifty;
      if (!this.airborne && ee > 0.2 && !h) {
        if (!this.drifting && f > 8.5)
          t.handbrake && Math.abs(this.steerIn) > 0.25
            ? (this.drifting = this.hbDrift = !0)
            : (Math.abs(N) > 0.3 ||
                (ee > 1.1 &&
                  C > 0.9 &&
                  Math.abs(this.steerIn) > 0.85 &&
                  f < m * 0.55 &&
                  f > 12 &&
                  this.powerT > mf)) &&
              (this.drifting = !0);
        else if (this.drifting) {
          t.handbrake && (this.hbDrift = !0);
          let e = this.assist && !this.hbDrift;
          ((Math.abs(P) < 0.09 &&
            Math.abs(this.steerIn) < 0.15 &&
            !t.handbrake) ||
            (e &&
              Math.abs(P) < 0.2 &&
              (C < 0.5 || Math.abs(this.steerIn) < 0.5)) ||
            f < 4 ||
            Math.abs(P) > 1.75) &&
            (this.drifting = !1);
        }
      } else this.drifting = !1;
      if ((this.drifting || (this.hbDrift = !1), this.drifting)) {
        let e = this.assist && !this.hbDrift && !t.handbrake,
          r = e
            ? hf
            : p
              ? 0.5 + 0.12 * Math.abs(this.steerIn)
              : 0.72 * Math.min(1.25, ee) * (t.handbrake ? 1.25 : 1),
          a = this.steerIn * P < 0,
          o = this.steerIn * r * (a ? 0.3 : 1);
        ((F = i.driftGrip * n * (0.85 + 0.3 * C)),
          e && (F = Math.max(F, i.grip * n * 0.5)),
          t.handbrake && (F = Math.min(F, i.handbrakeGrip * (p ? 1.8 : 1.4))),
          (j =
            this.gripK * Math.sin(P) * Math.sign(u || 1) +
            (e ? 6 : 3.6) * (o - P) * Math.sign(u || 1)));
      } else t.handbrake && f > 3 && ((F = i.handbrakeGrip * n), (j *= 1.5));
      (g &&
        ((this.drifting = !1),
        (F = 1.3 * n),
        (j = p.spinDir * (4 + 5 * Math.min(1, p.spinT)))),
        this.airborne && (F = 0.2),
        this.fallen > 0.5 && ((F = 0.8), (j = 0)),
        (this.gripK +=
          (F - this.gripK) * (1 - Math.exp(-(F > this.gripK ? 2.5 : 12) * e))));
      let te = 1 - Math.exp(-this.gripK * e),
        ne = Math.hypot(u, d);
      if (((d -= d * te), this.drifting)) {
        let e = ne - Math.hypot(u, d);
        e > 0 &&
          (u += Math.sign(u || 1) * e * (p ? 0.6 + 0.3 * C : 0.42 + 0.3 * C));
      }
      let re = 1 - Math.exp(-i.yawResp * (this.airborne ? 0.1 : 1) * e);
      ((this.yawRate += (j - this.yawRate) * re),
        f < 0.3 && !this.drifting && (this.yawRate *= 1 - Math.min(1, 10 * e)),
        u > m * 1.08 && (u = m * 1.08),
        (this.vx = o * u + c * d),
        (this.vz = s * u + l * d),
        (this.vF = u),
        (this.vR = d),
        (this.accLong +=
          (T - Math.sign(u) * (E + D * 0.3) - this.accLong) *
          (1 - Math.exp(-8 * e))),
        (this.accLat +=
          (u * this.yawRate - this.accLat) * (1 - Math.exp(-8 * e))));
      let ie = this.body.x,
        ae = this.body.z;
      if (
        ((this.body.x += this.vx * e),
        (this.body.z += this.vz * e),
        (this.heading = z(this.heading + this.yawRate * e)),
        this.sweep(ie, ae),
        this.collideStatics(),
        this.spec.boat &&
          !this.hullOnWater(this.body.x, this.body.z, this.heading))
      ) {
        (this.hasValid &&
          ((this.body.x = this.validX),
          (this.body.z = this.validZ),
          (this.heading = this.validH)),
          (this.vx *= -0.25),
          (this.vz *= -0.25),
          (this.yawRate *= 0.5));
        return;
      }
      this.centreInSolid(this.body.x, this.body.z)
        ? this.hasValid &&
          ((this.body.x = this.validX),
          (this.body.z = this.validZ),
          (this.heading = this.validH))
        : ((this.validX = this.body.x),
          (this.validZ = this.body.z),
          (this.validH = this.heading),
          (this.hasValid = !0));
    }
    hullOnWater(e, t, n) {
      let r = this.w.ctx.plan,
        i = Math.sin(n),
        a = -Math.cos(n),
        o = Math.cos(n),
        s = Math.sin(n),
        c = this.spec.halfW * 0.9,
        l = this.spec.halfL * 0.95;
      for (let [n, u] of Hf)
        if (
          r.surfaceAt(e + o * c * n + i * l * u, t + s * c * n + a * l * u) !==
          `water`
        )
          return !1;
      return !0;
    }
    collideStatics() {
      let e = this.w.ctx;
      ((vf.x = this.body.x), (vf.y = this.y + 0.25), (vf.z = this.body.z));
      let t = this.spec.halfW * (this.spec.twoWheeler ? 0.9 : 1);
      if (
        (e.statics.resolveRect(
          vf,
          this.heading,
          t,
          this.spec.halfL,
          Math.max(0.5, this.spec.height - 0.25),
          _f,
          `hedge`,
        ),
        !_f.hit)
      )
        return;
      ((this.body.x = vf.x), (this.body.z = vf.z));
      let n = _f.nx,
        r = _f.nz,
        i = this.heading,
        a = Math.cos(i),
        o = Math.sin(i),
        s = -Math.sin(i),
        c = Math.cos(i),
        l = a * n + o * r,
        u = s * n + c * r,
        d = Math.abs(l) < 0.25 ? 0 : -Math.sign(l),
        f = Math.abs(u) < 0.25 ? 0 : -Math.sign(u),
        p = a * d * this.spec.halfW + s * f * this.spec.halfL,
        m = o * d * this.spec.halfW + c * f * this.spec.halfL,
        h = this.vx - this.yawRate * m,
        g = this.vz + this.yawRate * p,
        _ = h * n + g * r;
      if (_ >= -0.05) return;
      let v = _f.tag === `pole` || _f.tag === `tree` ? 0.3 : 0.18,
        y = p * r - m * n,
        b = 1 / this.mass,
        x = 1 / this.inertia,
        S = (-(1 + v) * _) / (b + y * y * x);
      ((this.vx += S * n * b),
        (this.vz += S * r * b),
        (this.yawRate += y * S * x));
      let C = -r,
        w = n,
        T = h * C + g * w,
        E = p * w - m * C,
        D = -T / (b + E * E * x);
      ((D = V(D, -0.22 * S, 0.22 * S)),
        (this.vx += D * C * b),
        (this.vz += D * w * b),
        (this.yawRate += E * D * x),
        (this.yawRate = V(this.yawRate, -4, 4)));
      let O = -_;
      (this.w.onCollision(
        this,
        O,
        this.body.x + p,
        this.body.z + m,
        n,
        r,
        _f.tag || `wall`,
        null,
      ),
        Math.abs(T) > 4 && O < 6 && (this.scrapeT = 0.12));
    }
    crumple(e, t, n, r) {
      let i = this.w.now();
      i - this.lastCrumple < 0.25 ||
        r < 0.02 ||
        ((this.lastCrumple = i),
        (this.dentPending = !0),
        (this.dentFrame = this.w.ctx.time.frame),
        (this.dentAt[0] = e),
        (this.dentAt[1] = t),
        (this.dentAt[2] = n),
        (this.dentAt[3] = r));
    }
    dentPending = !1;
    dentFrame = 0;
    dentAt = new Float32Array(4);
    applyDent(e, t, n, r) {
      ((this.steerBaked = !1),
        (this.lodFar = !1),
        this.steerMesh && (this.steerMesh.visible = !0),
        this.prepareDeform());
      let i = this.deform,
        a = i.geo;
      this.mesh.geometry !== a && (this.mesh.geometry = a);
      let o = a.attributes.position,
        s = a.attributes.normal,
        c = o.array,
        l = s.array,
        u = i.orig,
        d = this.spec.twoWheeler ? 0.5 : 1.1,
        f = d * d,
        p = Math.hypot(e, n) || 1,
        m = -e / p,
        h = -n / p,
        g = c.length,
        _ = -1;
      for (let i = 0; i < c.length; i += 9) {
        let a = !1;
        for (let o = i; o < i + 9; o += 3) {
          let i = u[o],
            s = u[o + 1],
            l = u[o + 2];
          if (s < 0.2 && i === 0 && l === 0) continue;
          let p = i - e,
            g = (s - t) * 0.7,
            _ = l - n,
            v = p * p + g * g + _ * _;
          if (v >= f) continue;
          let y = 1 - Math.sqrt(v) / d,
            b = y * y * r,
            x = c[o] - i + m * b,
            S = c[o + 1] - s - b * 0.25,
            C = c[o + 2] - l + h * b,
            w = x * x + S * S + C * C;
          if (w > 0.07840000000000001) {
            let e = 0.28 / Math.sqrt(w);
            ((x *= e), (S *= e), (C *= e));
          }
          ((c[o] = i + x), (c[o + 1] = s + S), (c[o + 2] = l + C), (a = !0));
        }
        if (!a) continue;
        (i < g && (g = i), (_ = i + 9));
        let o = c[i],
          s = c[i + 1],
          p = c[i + 2],
          v = c[i + 3] - o,
          y = c[i + 4] - s,
          b = c[i + 5] - p,
          x = c[i + 6] - o,
          S = c[i + 7] - s,
          C = c[i + 8] - p,
          w = y * C - b * S,
          T = b * x - v * C,
          E = v * S - y * x,
          D = w * w + T * T + E * E;
        if (D < 1e-18) continue;
        let O = 1 / Math.sqrt(D);
        ((w *= O), (T *= O), (E *= O));
        for (let e = 0; e < 9; e += 3)
          ((l[i + e] = w), (l[i + e + 1] = T), (l[i + e + 2] = E));
      }
      _ < 0 ||
        ((this.dented = !0),
        o.addUpdateRange(g, _ - g),
        s.addUpdateRange(g, _ - g),
        (o.needsUpdate = !0),
        (s.needsUpdate = !0));
    }
    gQy = 0;
    gAt = (e, t) => {
      if (this.spec.boat) return this.w.ctx.plan.waterLevel;
      let n = this.w.ctx.groundAt;
      return n ? n(e, t, this.gQy, 0.35) : this.w.ctx.plan.groundHeight(e, t);
    };
    updateVisual(e, t) {
      let n = this.w.ctx;
      if (this.dentPending && n.time.frame > this.dentFrame) {
        this.dentPending = !1;
        let e = this.dentAt;
        this.applyDent(e[0], e[1], e[2], e[3]);
      }
      let r = n.plan,
        i = this.h,
        a = this.heading,
        o = Math.sin(a),
        s = -Math.cos(a),
        c = Math.cos(a),
        l = Math.sin(a),
        u = this.body.x,
        d = this.body.z;
      if (
        this.sleeping &&
        this.settled &&
        Math.abs(this.heave) < 0.002 &&
        Math.abs(this.lean - this.standLean) < 0.01 + +!this.spec.twoWheeler
      ) {
        this.updateLamps(e, t);
        return;
      }
      ((this.settled = this.sleeping), (this.gQy = this.y + 0.05));
      let f = this.gAt,
        p;
      if (this.spec.twoWheeler) {
        let e = f(u - o * i.frontAxle, d - s * i.frontAxle),
          t = f(u - o * i.rearAxle, d - s * i.rearAxle);
        ((this.wheelGround[0] = e),
          (this.wheelGround[1] = t),
          (p = Math.max(e, t)),
          (this.tPitch = Math.atan2(e - t, this.wheelbase) * 0.9),
          (this.tRoll = 0));
      } else {
        let e = -i.frontAxle,
          t = -i.rearAxle,
          n = i.track,
          a = f(u + o * e - c * n, d + s * e - l * n),
          m = f(u + o * e + c * n, d + s * e + l * n),
          h = f(u + o * t - c * n, d + s * t - l * n),
          g = f(u + o * t + c * n, d + s * t + l * n);
        ((this.wheelGround[0] = a),
          (this.wheelGround[1] = m),
          (this.wheelGround[2] = h),
          (this.wheelGround[3] = g),
          (p = (a + m + h + g) / 4));
        let _ = (a + m) / 2,
          v = (h + g) / 2,
          y = (a + h) / 2,
          b = (m + g) / 2;
        if (
          ((this.tPitch = Math.atan2(_ - v, this.wheelbase)),
          (this.tRoll = Math.atan2(b - y, n * 2)),
          !this.spec.boat &&
            a < -1 &&
            g < -1 &&
            this.sinking === 0 &&
            r.surfaceAt(u, d) === `water` &&
            this.y < r.waterLevelAt(u, d) + 0.6 &&
            (this.sinking = 0.001),
          this.spec.boat)
        ) {
          let e = this.w.now();
          ((this.tPitch += Math.sin(e * 1.3 + this.id) * 0.012),
            (this.tRoll += Math.sin(e * 0.9 + this.id * 2.1) * 0.018));
        }
      }
      if (
        (this.spec.twoWheeler &&
          this.sinking === 0 &&
          p < -1 &&
          r.surfaceAt(u, d) === `water` &&
          this.y < r.waterLevelAt(u, d) + 0.6 &&
          (this.sinking = 0.001),
        this.sinking > 0)
      )
        (this.sinking < 0.01 && this.w.onSplash(this),
          (this.sinking += e),
          this.sinking > 2 &&
            !this.destroyed &&
            ((this.destroyed = !0),
            (this.destroyedAt = this.w.now()),
            this.w.onSunk(this)),
          (this.y = Math.max(
            r.waterLevelAt(u, d) - 1.1,
            this.y - e * (this.sinking < 0.6 ? 3 : 0.5),
          )),
          (this.vx *= 1 - Math.min(1, e * 2.5)),
          (this.vz *= 1 - Math.min(1, e * 2.5)),
          (this.airborne = !1));
      else if ((this.airborne, this.y > p + 0.06 || this.vy > 0.5)) {
        if (
          ((this.airborne = !0),
          (this.vy -= 9.8 * e),
          (this.y += this.vy * e),
          this.y <= p)
        ) {
          let e = -this.vy;
          ((this.y = p),
            (this.vy = 0),
            (this.airborne = !1),
            (this.heaveV -= e * 0.4),
            e > 4 &&
              this.driver === `player` &&
              n.cameraRig?.shake?.(Math.min(0.6, e * 0.05)));
        }
      } else {
        let t = p - this.y;
        (Math.abs(t) > 0.001 &&
          (t >
            0.05 +
              Math.abs(this.vF) *
                e *
                Math.min(1, Math.abs(Math.tan(this.tPitch))) &&
            Math.abs(this.vF) > 3 &&
            ((this.heaveV +=
              Math.min(1.2, Math.abs(this.vF) * 0.05) *
              (this.spec.twoWheeler ? 0.5 : 1)),
            (this.vx *= 0.985),
            (this.vz *= 0.985)),
          (this.heave -= t),
          (this.heave = V(this.heave, -0.35, 0.35))),
          (this.y = p),
          (this.vy = 0),
          (this.airborne = !1));
      }
      let m = i.soft,
        h = this.spec.twoWheeler ? 90 : 60,
        g = this.spec.twoWheeler ? 14 : 9,
        _ = V(this.accLong * 0.0085 * m, -0.08, 0.08),
        v = V(this.accLat * 0.0075 * m, -0.09, 0.09);
      if (
        ((this.pitchV += ((_ - this.pitch) * h - this.pitchV * g) * e),
        (this.pitch += this.pitchV * e),
        (this.rollV += ((v - this.roll) * h - this.rollV * g) * e),
        (this.roll += this.rollV * e),
        (this.heaveV += (-this.heave * 110 - this.heaveV * 11) * e),
        (this.heave += this.heaveV * e),
        (this.heave = V(this.heave, -0.3, 0.3)),
        this.spec.twoWheeler)
      ) {
        let t = this.kind === `superbike` ? 0.88 : this.bike ? 0.78 : 0.7,
          n = this.standLean,
          r =
            this.fallen > 0
              ? 1.3
              : this.driver === `none` && Math.abs(this.vF) < 0.5
                ? n
                : V(-Math.atan((this.vF * this.yawRate) / 9.8) * 0.95, -t, t);
        ((this.lean += (r - this.lean) * Je(this.fallen > 0 ? 6 : 8, e)),
          this.updateWheelie(e),
          this.driver === `player` &&
          this.fallen < 0.5 &&
          !this.airborne &&
          this.braking > 0.85 &&
          Math.abs(this.lean) > 0.47 &&
          Math.abs(this.vF) > 10 &&
          this.w.wet() > 0.45
            ? ((this.lowsideT += e),
              this.lowsideT > 0.3 &&
                ((this.lowsideT = 0), this.w.onLowside(this)))
            : (this.lowsideT = 0));
      }
      (this.object.position.set(u, this.y, d),
        (this.object.rotation.y = -a),
        (this.tilt.position.y =
          this.heave * 0.6 +
          (this.spec.twoWheeler ? Math.max(0, this.lean - 0.75) * 0.32 : 0)),
        (this.tilt.position.z = 0));
      let y = this.tPitch + this.pitch;
      if (this.wheelieA > 0.001) {
        let e = this.wheelieA,
          t = i.rearAxle;
        ((y += e),
          (this.tilt.position.y += t * Math.sin(e)),
          (this.tilt.position.z = t * (1 - Math.cos(e))));
      }
      let b =
        this.wobbleT > 0
          ? this.wobbleA *
            Math.sin(this.wobbleT * 24) *
            Math.min(1, this.wobbleT * 2)
          : 0;
      if (
        (this.tilt.rotation.set(
          y,
          0,
          this.spec.twoWheeler ? this.lean + b : this.tRoll + this.roll,
          `YXZ`,
        ),
        this.steerMesh)
      ) {
        let e = md[this.kind]?.rake ?? 0.42;
        this.steerMesh.quaternion.setFromAxisAngle(
          Af.set(0, Math.cos(e), Math.sin(e)),
          -this.steer,
        );
      }
      let x = this.vF;
      for (let t = 0; t < 4; t++) {
        let n = this.spec.twoWheeler ? t === 1 : t >= 2,
          r = x;
        (n && this.burnout > 0 && (r = 25),
          n && this.handbrake && (r = 0),
          (this.wheelSpin[t] -= (r / i.wheelR) * e));
      }
      (this.updateRpm(e), this.updateLamps(e, t));
      let S = this.body;
      ((S.y = this.y), (S.heading = a), (S.vx = this.vx), (S.vz = this.vz));
    }
    updateWheelie(e) {
      let t = this.h.wheelie;
      if (t <= 0) return;
      let n = !(this.driver === `none` || this.destroyed || this.fallen > 0.5),
        r = n ? this.controls.throttle : 0,
        i = n && this.driver === `player` && !!this.controls.leanBack,
        a = this.vF,
        o = r - this.lastThrIn;
      this.lastThrIn = r;
      let s =
          !this.airborne &&
          Math.abs(this.steerIn) < 0.6 &&
          a < this.spec.maxSpeed * 0.42,
        c =
          this.driver === `player` &&
          r >= 0.9 &&
          this.prevWheelieSpd < 3 &&
          a >= 3 &&
          this.gear <= 1;
      (s && ((o > 0.6 && a > 1) || c) && (this.wheelieKick = 0.9 + t * 1.8),
        (this.prevWheelieSpd = a),
        (this.wheelieKick = Math.max(0, this.wheelieKick - e)));
      let l = this.spec.maxSpeed * (i ? 0.7 : 0.55),
        u =
          (this.wheelieKick > 0 || i) &&
          r > (i ? 0.5 : 0.8) &&
          this.braking < 0.1 &&
          a > 0.5 &&
          a < l &&
          !this.airborne &&
          Math.abs(this.steerIn) < 0.8,
        d = this.w.now(),
        f = u
          ? i
            ? 0.3 +
              0.3 * t +
              (0.05 + (a / l) * 0.04) * Math.sin(d * 3.1) +
              0.02 * Math.sin(d * 7.7)
            : 0.2 + 0.24 * t + 0.03 * Math.sin(d * 5.3)
          : 0;
      ((this.wheelieA +=
        (f - this.wheelieA) * Je(f > this.wheelieA ? 3.2 : 6.5, e)),
        this.wheelieA < 0.002 && (this.wheelieA = 0));
    }
    steerBaked = !1;
    lodFar = !1;
    updateLamps(e, t) {
      if (
        (this.riderMesh &&
          (this.riderMesh.visible =
            this.driver === `ai` &&
            this.showRider &&
            !this.destroyed &&
            this.fallen < 0.5 &&
            !this.inBatch),
        this.steerMesh && !this.dented)
      ) {
        let e =
          this.sleeping &&
          this.driver === `none` &&
          Math.abs(this.steer) < 0.01;
        e !== this.steerBaked &&
          ((this.steerBaked = e),
          (this.mesh.geometry = e
            ? this.w.parkedGeo(this.kind)
            : this.nearGeo()),
          (this.steerMesh.visible = !e));
      }
      let n = this.mat.vu,
        r = this.kart;
      if (r) {
        let e =
            this.driver === `ai` &&
            this.showRider &&
            !this.destroyed &&
            r.costume >= 0,
          t = e
            ? r.costume >= 1 && r.costume <= 4
              ? zf[r.costume - 1]
              : Rf
            : null;
        (t
          ? n.uVarA.value.set(t[0], t[1], t[2], t[3])
          : n.uVarA.value.set(0, 0, 0, 0),
          n.uVarB.value.set(e ? 1.01 : 0, 0, 0, 0));
      }
      let i = this.driver !== `none` && !this.destroyed ? +(t > 0.3) : 0,
        a = this.destroyed ? 0 : this.headMode === -1 ? i : this.headMode;
      ((this.headOn += (a - this.headOn) * Je(10, e)),
        n.uState.value.set(
          this.headOn,
          +(
            this.braking > 0.1 ||
            (this.driver !== `none` &&
              Math.abs(this.vF) < 0.3 &&
              !this.destroyed)
          ),
          this.reversing && Math.abs(this.vF) > 0.1 ? 1 : 0,
          +!!this.destroyed,
        ),
        this.hazardT > 0 && (this.hazardT -= e));
      let o = +(this.hazardT > 0),
        s =
          o ||
          (this.driver === `ai` &&
            this.steerIn < -0.5 &&
            Math.abs(this.vF) < 12)
            ? 1
            : 0,
        c =
          o ||
          (this.driver === `ai` && this.steerIn > 0.5 && Math.abs(this.vF) < 12)
            ? 1
            : 0;
      (n.uSig.value.set(
        s,
        c,
        (this.sirenOn || this.lightsOn) && !this.destroyed ? 1 : 0,
        this.seed,
      ),
        (this.mat.envMapIntensity = this.w.envMap ? 1 - 0.8 * t : 1),
        n.uPaint.value.setHex(this.color));
    }
    updateRpm(e) {
      let t = this.h,
        n = Math.abs(this.vF),
        r = n / this.spec.maxSpeed,
        i;
      if (this.destroyed || this.sinking > 0) i = 0;
      else if (this.burnout > 0) i = 0.85 + Math.random() * 0.08;
      else if (t.gears <= 1) i = 0.18 + this.throttleS * 0.45 + r * 0.35;
      else {
        let e = t.gears,
          a = 1,
          o = 0,
          s = 0;
        for (let t = 1; t <= e; t++) {
          let n = (t / e) ** 1.35 * 1.02,
            i = t === 1 ? 0 : ((t - 1) / e) ** 1.35 * 1.02;
          if (r <= n || t === e) {
            ((a = t), (o = i), (s = n));
            break;
          }
        }
        (a !== this.gear &&
          (a > this.gear && (this.shiftT = 0.18), (this.gear = a)),
          (i =
            0.22 +
            V((r - o) / Math.max(0.01, s - o), 0, 1) *
              0.72 *
              (this.reversing ? 0.7 : 1)),
          n < 1 && this.throttleS > 0.1 && (i = 0.3 + this.throttleS * 0.4),
          this.drifting &&
            this.throttleS > 0.5 &&
            (i = Math.min(0.98, i + 0.15)));
      }
      this.shiftT > 0 && ((this.shiftT -= e), (i *= 0.72));
      let a = this.driver === `none` ? 0 : 0.15;
      this.rpm += (Math.max(a, i) - this.rpm) * Je(this.shiftT > 0 ? 20 : 8, e);
    }
    emitFx(e, t, n, r, i, a) {
      let o = this.w.fx,
        s = this.h,
        c = this.heading,
        l = Math.sin(c),
        u = -Math.cos(c),
        d = Math.cos(c),
        f = Math.sin(c),
        p = this.body.x,
        m = this.body.z,
        h = this.y;
      ((this.bx0 = p),
        (this.by0 = h),
        (this.bz0 = m),
        (this.fX0 = l),
        (this.fZ0 = u),
        (this.rX0 = d),
        (this.rZ0 = f));
      let g = this.toWorldFn,
        _ = (p - n) ** 2 + (m - i) ** 2,
        v = _ < 19600;
      if (!this.spec.twoWheeler && !this.dented && !this.inBatch) {
        let e = _ > (this.lodFar ? 2500 : 3136);
        e !== this.lodFar &&
          ((this.lodFar = e),
          (this.mesh.geometry = e
            ? this.w.bodyLod(this.kind)
            : this.nearGeo()));
      }
      if (_ < 8100 && this.sinking === 0) {
        let e = this.spec.halfW * 2 + 0.45,
          t = this.spec.halfL * 2 + 0.45;
        o.shadow(
          p,
          h,
          m,
          c,
          this.spec.twoWheeler ? 0.9 : e,
          this.spec.twoWheeler ? 2.2 : t,
          this.spec.twoWheeler ? 0.45 : 0.55,
        );
      }
      if (!v) return;
      if (!this.destroyed && this.sinking === 0) {
        if (this.health < 400) {
          let t = this.health < 250,
            n = (t ? 22 : 9) * a;
          for (this.smokeAcc += n * e; this.smokeAcc > 1;) {
            (--this.smokeAcc,
              g(
                s.engineAt[0] + (Math.random() - 0.5) * 0.4,
                s.engineAt[1],
                s.engineAt[2],
                q,
              ));
            let e = t ? 0.12 : 0.55;
            this.fxSmoke(q.x, q.y, q.z, e, t ? 0.75 : 0.5, 1.6);
          }
        }
        if (this.onFire)
          for (this.fireAcc += 40 * a * e; this.fireAcc > 1;)
            (--this.fireAcc,
              g(
                s.engineAt[0] + (Math.random() - 0.5) * 0.7,
                s.engineAt[1] - 0.1,
                s.engineAt[2] + (Math.random() - 0.5) * 0.5,
                q,
              ),
              o.glowParticle(
                0,
                q.x,
                q.y,
                q.z,
                this.vx * 0.3 + (Math.random() - 0.5),
                1.5 + Math.random() * 2,
                this.vz * 0.3 + (Math.random() - 0.5),
                0.5 + Math.random() * 0.5,
                0.15,
                0.5 + Math.random() * 0.4,
                1,
                0.6,
                0.25,
                1.6,
              ));
      } else if (this.destroyed && this.sinking === 0) {
        let t = this.w.now() - this.destroyedAt;
        if (t < 25) {
          for (this.smokeAcc += (t < 8 ? 14 : 6) * a * e; this.smokeAcc > 1;)
            (--this.smokeAcc,
              g(
                (Math.random() - 0.5) * this.spec.halfW,
                this.spec.height * 0.7,
                (Math.random() - 0.5) * this.spec.halfL,
                q,
              ),
              this.fxSmoke(q.x, q.y, q.z, 0.08, 0.8, 2.2));
          if (t < 10)
            for (this.fireAcc += 30 * a * e * (1 - t / 10); this.fireAcc > 1;)
              (--this.fireAcc,
                g(
                  (Math.random() - 0.5) * this.spec.halfW * 1.4,
                  0.5 + Math.random() * 0.6,
                  (Math.random() - 0.5) * this.spec.halfL * 1.4,
                  q,
                ),
                o.glowParticle(
                  0,
                  q.x,
                  q.y,
                  q.z,
                  Math.random() - 0.5,
                  1.5 + Math.random() * 2.5,
                  Math.random() - 0.5,
                  0.7 + Math.random() * 0.6,
                  0.2,
                  0.6 + Math.random() * 0.5,
                  1,
                  0.55,
                  0.22,
                  1.5,
                ));
        }
      }
      let y =
          !this.airborne &&
          this.sinking === 0 &&
          !this.spec.twoWheeler &&
          !this.spec.boat &&
          ((this.drifting && Math.abs(this.slip) > 0.18) ||
            this.burnout > 0 ||
            (this.handbrake && Math.abs(this.vF) > 4) ||
            (this.braking > 0.8 && Math.abs(this.vF) > 12)),
        b =
          this.spec.twoWheeler &&
          !this.airborne &&
          ((this.handbrake && Math.abs(this.vF) > 3) ||
            (this.fallen > 0.5 && Math.abs(this.vF) > 1));
      if (y || b) {
        let t =
            this.burnout > 0
              ? 1
              : V(Math.abs(this.slip) * 2 + (this.handbrake ? 0.4 : 0), 0.3, 1),
          n = this.spec.twoWheeler ? 1 : 2;
        for (let e = 0; e < n; e++) {
          g(
            this.spec.twoWheeler ? 0 : e === 0 ? -s.track : s.track,
            0,
            s.rearAxle,
            q,
          );
          let n = this.wheelGround;
          (o.skid(
            this.id * 8 + e,
            q.x,
            q.z,
            t,
            this.spec.twoWheeler ? 0.12 : s.wheelW * 1.1,
            this.spec.twoWheeler ? n[1] : n[2 + e],
          ),
            this.braking > 0.8 &&
              !this.drifting &&
              !this.handbrake &&
              e === 0 &&
              (g(-s.track, 0, s.frontAxle, kf),
              o.skid(this.id * 8 + 2, kf.x, kf.z, t * 0.7, s.wheelW, n[0]),
              g(s.track, 0, s.frontAxle, kf),
              o.skid(this.id * 8 + 3, kf.x, kf.z, t * 0.7, s.wheelW, n[1])));
        }
        for (
          this.tireAcc += (this.burnout > 0 ? 30 : 16 * t) * a * e;
          this.tireAcc > 1;
        ) {
          (--this.tireAcc,
            g(
              (Math.random() < 0.5 ? -1 : 1) * s.track,
              0.25,
              s.rearAxle + 0.2,
              q,
            ));
          let e = 0.82;
          o.smokePuff(
            q.x,
            q.y,
            q.z,
            this.vx * 0.25 + (Math.random() - 0.5) * 1.5,
            0.6 + Math.random(),
            this.vz * 0.25 + (Math.random() - 0.5) * 1.5,
            0.8,
            3.6 + Math.random() * 2,
            1.6 + Math.random(),
            e,
            e,
            e * 1.02,
            0.4 * t + 0.12,
            1,
            0.3,
          );
        }
      }
      let x = this.w.wet(),
        S = Math.abs(this.vF);
      if (x > 0.3 && S > 9 && !this.airborne && this.sinking === 0)
        for (this.sprayAcc += (S - 8) * 0.55 * x * a * e; this.sprayAcc > 1;)
          (--this.sprayAcc,
            g(
              this.spec.twoWheeler
                ? 0
                : Math.random() < 0.5
                  ? -s.track
                  : s.track,
              0.2,
              s.rearAxle + s.wheelR,
              q,
            ),
            o.smokePuff(
              q.x,
              q.y,
              q.z,
              this.vx * 0.55 + (Math.random() - 0.5),
              0.4 + Math.random() * 0.5,
              this.vz * 0.55 + (Math.random() - 0.5),
              0.4,
              1.4 + Math.random() * 0.8,
              0.45 + Math.random() * 0.3,
              0.86,
              0.88,
              0.9,
              0.065 * x,
              2,
              -0.5,
            ));
      if (
        this.driver !== `none` &&
        (this.kind === `sports` ||
          this.kind === `police` ||
          this.kind === `sedan`) &&
        !this.destroyed &&
        (this.throttleS < 0.25 &&
          this.lastThrottle > 0.8 &&
          this.rpm > 0.72 &&
          Math.random() < 0.7 &&
          (this.backfire = 3 + Math.floor(Math.random() * 3)),
        this.backfire > 0 && Math.random() < e * 14)
      ) {
        this.backfire--;
        let e = s.exhaustAt;
        for (let t of this.kind === `sports` ? [-1, 1] : [1])
          (g(e[0] * t, e[1], e[2] + 0.12, q),
            o.glowParticle(
              0,
              q.x,
              q.y,
              q.z,
              -this.fX0 * 3 + this.vx,
              0.3,
              -this.fZ0 * 3 + this.vz,
              0.55,
              0.15,
              0.12,
              1,
              0.55,
              0.2,
              2.2,
            ));
        this.w.onBackfire(this);
      }
      if (
        ((this.lastThrottle = this.throttleS),
        this.scrapeT > 0 &&
          ((this.scrapeT -= e),
          Math.random() < 0.7 &&
            (g(
              (Math.random() < 0.5 ? -1 : 1) * this.spec.halfW,
              0.35,
              (Math.random() - 0.5) * this.spec.halfL * 1.6,
              q,
            ),
            o.sparks(q.x, q.y, q.z, -this.vx * 0.1, -this.vz * 0.1, 2, 4))),
        (this.kind === `bus` ||
          this.kind === `garbage` ||
          this.kind === `truck`) &&
          this.driver !== `none` &&
          !this.destroyed &&
          this.throttleS > 0.75 &&
          Math.abs(this.vF) < 12 &&
          Math.random() < e * 9)
      ) {
        g(s.exhaustAt[0], s.exhaustAt[1], s.exhaustAt[2], q);
        let e = 0.16;
        o.smokePuff(
          q.x,
          q.y,
          q.z,
          this.vx * 0.3 + (Math.random() - 0.5),
          0.8 + Math.random(),
          this.vz * 0.3 + (Math.random() - 0.5),
          0.4,
          1.8 + Math.random(),
          1.4 + Math.random(),
          e,
          e,
          e,
          0.35,
          1.2,
          0.6,
        );
      }
      let C = this.kart;
      if (C && !this.destroyed && _ < 6400) {
        if (C.level > 0 && Math.random() < e * (C.level === 2 ? 40 : 24) * a) {
          g(
            (Math.random() < 0.5 ? -1 : 1) * s.track,
            0.06,
            s.rearAxle + 0.12,
            q,
          );
          let e = C.level === 2;
          o.glowParticle(
            0,
            q.x,
            q.y,
            q.z,
            (Math.random() - 0.5) * 2 - this.fX0 * 1.5,
            0.8 + Math.random() * 1.2,
            (Math.random() - 0.5) * 2 - this.fZ0 * 1.5,
            e ? 0.16 : 0.12,
            0.04,
            0.22,
            1,
            e ? 0.78 : 0.95,
            e ? 0.3 : 0.85,
            2.4,
          );
        }
        if ((C.boostT > 0 || C.flash > 0) && Math.random() < e * 30 * a) {
          let e = s.exhaustAt;
          (g(e[0], e[1], e[2] + 0.08, q),
            o.glowParticle(
              0,
              q.x,
              q.y,
              q.z,
              -this.fX0 * 2.5 + this.vx * 0.6,
              0.2,
              -this.fZ0 * 2.5 + this.vz * 0.6,
              0.32,
              0.08,
              0.14,
              1,
              0.62,
              0.22,
              2.4,
            ));
        }
        if (C.spinT > 0.3 && Math.random() < e * 14 * a) {
          g((Math.random() - 0.5) * 1.2, 0.2, (Math.random() - 0.5) * 1.6, q);
          let e = 0.85;
          o.smokePuff(
            q.x,
            q.y,
            q.z,
            (Math.random() - 0.5) * 1.5,
            0.5,
            (Math.random() - 0.5) * 1.5,
            0.5,
            2.2,
            1,
            e,
            e,
            e,
            0.3,
            1,
            0.3,
          );
        }
      }
      if (
        this.spec.boat &&
        !this.destroyed &&
        Math.abs(this.vF) > 0.8 &&
        Math.random() < e * 6 * a
      ) {
        let e = Math.random() < 0.5 ? -1 : 1;
        (g(e * this.spec.halfW * 0.8, 0.02, this.spec.halfL * 0.9, q),
          o.smokePuff(
            q.x,
            q.y,
            q.z,
            e * this.rX0 * 0.35 + this.vx * 0.1,
            0.02,
            e * this.rZ0 * 0.35 + this.vz * 0.1,
            0.25,
            1.1,
            1.4,
            0.92,
            0.94,
            0.95,
            0.06,
            2.2,
            0,
          ));
      }
      if (
        this.driver === `player` &&
        !this.spec.twoWheeler &&
        !this.spec.boat &&
        Math.abs(this.vF) < 5 &&
        this.throttleS > 0.7 &&
        !this.destroyed &&
        this.sinking === 0 &&
        Math.random() < e * 8
      ) {
        g(s.exhaustAt[0], s.exhaustAt[1], s.exhaustAt[2] + 0.1, q);
        let e = 0.62;
        o.smokePuff(
          q.x,
          q.y,
          q.z,
          -l * 0.8 + this.vx * 0.5,
          0.25,
          -u * 0.8 + this.vz * 0.5,
          0.15,
          0.7,
          0.6,
          e,
          e,
          e,
          0.08,
          1.5,
          0.3,
        );
      }
      if (this.destroyed || this.sinking > 0 || this.spec.boat) return;
      let w = n - p,
        T = r - h,
        E = i - m,
        D = Math.hypot(w, T, E) || 1,
        O = (w * l + E * u) / D,
        [k, A, j] = s.headAt,
        [M, N, P] = s.tailAt;
      if (this.headOn > 0.05) {
        let e = this.headOn * (0.3 + 0.7 * t),
          n = V((O + 0.15) * 1.6, 0, 1);
        if (n > 0.01) {
          let t = this.spec.twoWheeler ? 0.9 : 1.35;
          if (k === 0)
            (g(0, A, j - 0.08, q),
              o.sprite(q.x, q.y, q.z, t, 1, 0.93, 0.8, 0.55 * e * n));
          else
            for (let r of [-1, 1])
              (g(r * k, A, j - 0.08, q),
                o.sprite(q.x, q.y, q.z, t, 1, 0.93, 0.8, 0.55 * e * n));
        }
        if (t > 0.2) {
          let e = this.spec.twoWheeler ? 8 : this.kind === `bus` ? 13 : 11;
          (g(0, 0, s.headAt[2] - e * 0.5, q),
            o.pool(
              q.x,
              this.y,
              q.z,
              c,
              this.spec.twoWheeler ? 3.2 : 5.2,
              e,
              1,
              0.9,
              0.72,
              (0.13 + 0.07 * this.w.wet()) * t * this.headOn,
            ));
        }
      }
      let F = V((-O + 0.1) * 1.6, 0, 1),
        ee =
          this.braking > 0.1 ||
          (this.driver !== `none` && Math.abs(this.vF) < 0.3),
        te =
          (this.headOn * 0.35 * t + (ee && this.driver !== `none` ? 0.7 : 0)) *
          F;
      if (te > 0.02) {
        if (M === 0)
          (g(0, N, P + 0.05, q),
            o.sprite(q.x, q.y, q.z, 0.7, 1, 0.08, 0.05, te * 0.7));
        else
          for (let e of [-1, 1])
            (g(e * M, N, P + 0.05, q),
              o.sprite(q.x, q.y, q.z, 0.9, 1, 0.08, 0.05, te * 0.7));
        t > 0.2 &&
          ee &&
          (g(0, 0, P + 1.7, q),
          o.pool(
            q.x,
            this.y,
            q.z,
            c,
            2.8,
            3.4,
            1,
            0.08,
            0.05,
            (0.04 + 0.08 * this.w.wet()) * t,
          ));
      }
      if ((this.sirenOn || this.lightsOn) && s.sirenAt && this.hasSiren) {
        let e = this.w.now(),
          n = (e * 2.6) % 1,
          r = (e * 13) % 1 < 0.5 ? 1 : 0.55,
          [i, a, l] = s.sirenAt,
          u = n < 0.5 ? r : 0,
          d = n >= 0.5 ? r : 0;
        (u > 0 &&
          (g(-i * 0.5, a, l, q),
          o.sprite(q.x, q.y, q.z, 2.2, 1, 0.1, 0.08, 0.9 * u),
          o.pool(
            q.x,
            this.y,
            q.z,
            c,
            9,
            9,
            1,
            0.08,
            0.06,
            (0.04 + 0.1 * t) * u,
          )),
          d > 0 &&
            (g(i * 0.5, a, l, q),
            o.sprite(q.x, q.y, q.z, 2.2, 0.15, 0.3, 1, 0.9 * d),
            o.pool(
              q.x,
              this.y,
              q.z,
              c,
              9,
              9,
              0.12,
              0.25,
              1,
              (0.05 + 0.12 * t) * d,
            )));
      }
      if (this.hazardT > 0 && (this.w.now() * 1.45) % 1 < 0.5)
        for (let e of [-1, 1])
          (g(e * (k || 0.15), A, j, q),
            o.sprite(q.x, q.y, q.z, 0.8, 1, 0.55, 0.1, 0.6),
            g(e * (M || 0.15), N, P, q),
            o.sprite(q.x, q.y, q.z, 0.8, 1, 0.55, 0.1, 0.6));
    }
    bx0 = 0;
    by0 = 0;
    bz0 = 0;
    fX0 = 0;
    fZ0 = 0;
    rX0 = 0;
    rZ0 = 0;
    toWorldFn = (e, t, n, r) =>
      r.set(
        this.bx0 + this.rX0 * e - this.fX0 * n,
        this.by0 + t,
        this.bz0 + this.rZ0 * e - this.fZ0 * n,
      );
    fxSmoke(e, t, n, r, i, a) {
      this.w.fx.smokePuff(
        e,
        t,
        n,
        this.vx * 0.4 + (Math.random() - 0.5) * 0.6,
        1.2 + Math.random() * 1.2,
        this.vz * 0.4 + (Math.random() - 0.5) * 0.6,
        0.5,
        a + Math.random() * 1.4,
        2.2 + Math.random() * 1.5,
        r,
        r,
        r * 1.03,
        i,
        0.9,
        1.1,
      );
    }
    writeWheels(e, t) {
      let n = this.h;
      if (this.sinking > 1.5 || this.inBatch || this.spec.boat) return t;
      if ((this.object.updateMatrixWorld(), this.spec.twoWheeler)) {
        for (let r = 0; r < 2; r++) {
          let i = r === 0 ? n.frontAxle : n.rearAxle;
          (Ef.setFromEuler(
            Of.set(this.wheelSpin[r], r === 0 ? -this.steer : 0, 0, `YXZ`),
          ),
            Cf.compose(
              q.set(0, n.wheelR, i),
              Ef,
              Df.set(n.wheelW, n.wheelR, n.wheelR),
            ),
            wf.multiplyMatrices(this.tilt.matrixWorld, Cf),
            e.setMatrixAt(t++, wf));
        }
        return t;
      }
      let r = this.destroyed ? 0.92 : 1;
      (Of.set(this.tPitch, 0, this.tRoll, `YXZ`),
        Tf.makeRotationFromEuler(Of),
        Tf.premultiply(this.object.matrixWorld));
      let i = Math.sin(this.tPitch),
        a = Math.sin(this.tRoll);
      for (let o = 0; o < 4; o++) {
        let s = o < 2,
          c = o % 2 == 0,
          l = s ? n.frontAxle : n.rearAxle,
          u = c ? -n.track : n.track,
          d = -l * i + u * a,
          f = this.airborne
            ? -0.12
            : V(this.wheelGround[o] - this.y - d, -0.25, 0.2),
          p = n.wheelR * r + f,
          m = s ? this.steer : 0;
        (Of.set(
          c ? -this.wheelSpin[o] : this.wheelSpin[o],
          -m + (c ? Math.PI : 0),
          0,
          `YXZ`,
        ),
          Ef.setFromEuler(Of),
          Cf.compose(q.set(u, p, l), Ef, Df.set(n.wheelW, n.wheelR, n.wheelR)),
          wf.multiplyMatrices(Tf, Cf),
          e.setMatrixAt(t++, wf));
      }
      return t;
    }
    dispose() {
      let e = this.w.ctx;
      (e.scene.remove(this.object),
        e.dynamics.remove(this.body),
        this.w.releaseMaterial(this.matPair),
        this.deform &&
          (this.w.releaseDeform(this.deform, this.dented),
          (this.deform = null),
          (this.dented = !1)));
    }
  },
  Wf = [],
  Gf = new R(),
  Kf = new R();
