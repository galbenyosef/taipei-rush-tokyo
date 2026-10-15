// tokyo/assets/actors-Bnj6Q1ad 96 — math
// Lines 45145-47092 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var gC = new ke(),
  _C = new v(),
  vC = new C(),
  yC = new y(),
  bC = new k(0, 0, 0, `YXZ`),
  xC = class {
    ctx;
    group = new _();
    slots = dS.map(() => null);
    budget;
    assignT = 0;
    cand = [];
    candD = [];
    disabled;
    constructor(e) {
      ((this.ctx = e),
        (this.group.name = `police-heroes`),
        (this.budget = hC(e.quality)),
        (this.disabled = e.params.get(`policeHero`) === `0`));
    }
    get built() {
      return this.slots.filter(Boolean).length;
    }
    roots() {
      let e = [];
      for (let t of this.slots) t && e.push(t.rc.root);
      return e;
    }
    async build(e, t = !1) {
      if (this.disabled) return;
      if (this.building) {
        this.again = !0;
        return;
      }
      this.building = !0;
      let n = [];
      try {
        for (let r of dS)
          if (!(this.slots[r.id] || r.heroTier > this.budget.tier)) {
            try {
              let e = t ? await Gt(r.desc) : Xt(r.desc);
              if (this.slots[r.id] || this.disabled) {
                e.dispose();
                continue;
              }
              let i = pC(r.id, e);
              mC(i, !1, this.group);
              let a = [];
              (i.rc.root.traverse((e) => {
                e.isMesh && a.push(e);
              }),
                this.ctx.renderer.uploadDraw(a),
                t ? n.push(i) : (this.slots[r.id] = i));
            } catch (e) {
              (console.warn(`[police] hero build failed`, r.desc.id, e),
                (this.disabled = !0));
              return;
            }
            e && (await e());
          }
        if (n.length) {
          let e = n.map((e) => e.rc.root);
          for (let t of e) t.visible = !0;
          try {
            await this.ctx.renderer.compileRoots(
              e,
              () => this.ctx.yieldFrame(),
              () => this.ctx.work.shouldYield(),
            );
          } catch (e) {
            console.warn(`[police] hero compile failed`, e);
          }
          for (let e of n)
            ((e.rc.root.visible = !1), (this.slots[e.persona] = e));
        }
      } finally {
        ((this.building = !1),
          this.again &&
            ((this.again = !1), this.build(() => this.ctx.yieldFrame(), !0)));
      }
    }
    building = !1;
    again = !1;
    prototypes() {
      let e = [];
      for (let t of this.slots)
        t &&
          !t.rc.root.parent &&
          ((t.rc.mesh.frustumCulled = !1),
          (t.gear.frustumCulled = !1),
          (t.rc.root.visible = !0),
          e.push(t.rc.root));
      return e;
    }
    onQuality(e) {
      let t = this.budget.tier;
      ((this.budget = hC(e)),
        this.budget.tier > t && this.build(() => this.ctx.yieldFrame(), !0));
    }
    release(e) {
      (e.officer && (e.officer.hero = null),
        (e.officer = null),
        mC(e, !1, this.group));
    }
    releaseAll() {
      for (let e of this.slots) e && this.release(e);
    }
    update(e, t, n) {
      let r = this.budget;
      if (this.disabled || r.max <= 0) {
        (this.assignT >= 0 && this.releaseAll(), (this.assignT = -1));
        return;
      }
      n >= this.assignT && ((this.assignT = n + 0.2), this.assign(e));
      for (let e of this.slots) {
        if (!e || !e.officer) continue;
        let n = e.officer;
        if (!n.active) {
          this.release(e);
          continue;
        }
        this.pose(e, n, t);
      }
    }
    assign(e) {
      let t = this.ctx.camera;
      (t.updateMatrixWorld(),
        gC.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        _C.setFromProjectionMatrix(gC, t.coordinateSystem, t.reversedDepth));
      let n = t.position.x,
        r = t.position.y,
        i = t.position.z,
        a = this.cand,
        o = this.candD;
      ((a.length = 0), (o.length = 0));
      let s = this.budget;
      for (let t of e) {
        if (!t.active) continue;
        let e = Math.hypot(t.x - n, t.y + 1 - r, t.z - i);
        if (
          e > (t.hero ? s.dist + 4 : s.dist) ||
          !this.slots[t.persona] ||
          (vC.center.set(t.x, t.y + 0.9, t.z),
          (vC.radius = 1.3),
          !_C.intersectsSphere(vC))
        )
          continue;
        let c = a.length;
        for (a.push(t), o.push(e); c > 0 && o[c - 1] > e;)
          ((a[c] = a[c - 1]), (o[c] = o[c - 1]), c--);
        ((a[c] = t), (o[c] = e));
      }
      let c = 0,
        l = this.claimed;
      l.fill(null);
      for (let e = 0; e < a.length && c < s.max; e++) {
        let t = a[e];
        l[t.persona] || ((l[t.persona] = t), c++);
      }
      for (let e of this.slots) {
        if (!e) continue;
        let t = l[e.persona];
        e.officer !== t &&
          ((e.officer &&= ((e.officer.hero = null), null)),
          t
            ? (t.hero && t.hero !== e && this.release(t.hero),
              (e.officer = t),
              (t.hero = e),
              mC(e, !0, this.group))
            : mC(e, !1, this.group));
      }
    }
    claimed = dS.map(() => null);
    pose(e, t, n) {
      let r = e.rc.bones;
      e.t += n;
      let i = t.phase,
        a = t.stride,
        o = t.aim,
        s = t.crouch,
        c = t.gun,
        l = t.pitch,
        u = t.flinch,
        d = t.reach,
        f = t.talk,
        p = t.ride > 0.01 ? 0 : t.wave,
        m = t.ride,
        h = Math.sin(i),
        g = Math.cos(i),
        _ = (e, t, n) => e + (t - e) * n,
        v = a * 0.72 * h,
        y = -a * 0.72 * h,
        b = -a * (0.15 + 1.05 * Math.max(0, g)),
        x = -a * (0.15 + 1.05 * Math.max(0, -g));
      ((v += s * 1.25),
        (y += s * 1.05),
        (b -= s * 2.05),
        (x -= s * 1.9),
        (v = _(v, 1.42, m)),
        (y = _(y, 1.42, m)),
        (b = _(b, -1.3, m)),
        (x = _(x, -1.3, m)));
      let S = 0.22 + a * 0.95,
        C = -a * 0.62 * h,
        w = a * 0.62 * h,
        T = -0.1,
        E = 0.1,
        D = 0,
        O = 0,
        k = S,
        A = S,
        j =
          t.rest > 0.5
            ? Math.max(0, Math.min(1, 1 - a * 2.5)) *
              (1 - o) *
              (1 - d) *
              (1 - p) *
              (1 - m) *
              (1 - s)
            : 0;
      if (j > 0) {
        let e = t.rest > 1.5,
          n = e ? -0.32 : -0.06,
          r = e ? 0.04 : 0.34,
          i = e ? 1.45 : 1.3,
          a = e ? 1.75 : 0.95;
        ((C = _(C, n, j)),
          (w = _(w, n, j)),
          (T = _(T, -r, j)),
          (E = _(E, r, j)),
          (k = _(k, i, j)),
          (A = _(A, i, j)),
          (D = _(D, -a, j)),
          (O = _(O, a, j)));
      }
      let M = +(c > 1.5) * (1 - o) * (1 - m);
      ((w = _(w, 0.3 + a * 0.1 * h, M)),
        (A = _(A, 0.8, M)),
        (E = _(E, -0.05, M)),
        (C = _(C, 0.62 + a * 0.1 * h, M)),
        (k = _(k, 1.05, M)),
        (T = _(T, 0.48, M)));
      let N = +(c > 1.5);
      ((w = _(w, 1.5708 + l, o)),
        (A = _(A, _(0.04, 0.1, N), o)),
        (E = _(E, _(-0.2, -0.06, N), o)),
        (C = _(C, _(1.34, 1.2, N) + l, o)),
        (k = _(k, _(0.4, 0.72, N), o)),
        (T = _(T, _(0.52, 0.5, N), o)),
        (D *= 1 - o),
        (O *= 1 - o),
        (C = _(C, 1.2, d)),
        (w = _(w, 1.2, d)),
        (k = _(k, 0.25, d)),
        (A = _(A, 0.25, d)),
        (T = _(T, 0.16, d)),
        (E = _(E, -0.16, d)),
        (C = _(C, 0.4, f)),
        (k = _(k, 2.25, f)),
        (T = _(T, 0.3, f)),
        (D *= 1 - f),
        (C = _(C, 0.95, m)),
        (w = _(w, 0.95, m)),
        (k = _(k, 0.5, m)),
        (A = _(A, 0.5, m)),
        (T = _(T, 0.1, m)),
        (E = _(E, -0.1, m)),
        (w = _(w, 1.2 + Math.sin(i * 0.5) * 0.25, p)),
        (E = _(E, -1.1 + Math.sin(i) * 0.5, p)),
        (A = _(A, 0.1, p)),
        (O *= 1 - p));
      let P = (1 - a) * (1 - m) * (1 - o * 0.7),
        F = Math.sin(this.ctx.time.elapsed * 1.7 + t.seed * 40);
      ((C += P * 0.03 * F), (w -= P * 0.025 * F));
      let ee =
          a * 0.2 +
          s * 0.32 -
          u * 0.35 +
          o * 0.04 +
          m * 0.12 +
          M * 0.08 +
          P * 0.012 * F,
        te = ee * 0.55 + l * 0.4 * o + Math.sin(i * 2) * 0.02 * a;
      (r[H.thighL].rotation.set(v, 0, -0.02),
        r[H.thighR].rotation.set(y, 0, 0.02),
        r[H.shinL].rotation.set(b, 0, 0),
        r[H.shinR].rotation.set(x, 0, 0),
        r[H.footL].rotation.set(-(v + b) * 0.85, 0, 0.02),
        r[H.footR].rotation.set(-(y + x) * 0.85, 0, -0.02),
        r[H.armL].rotation.set(C, 0, T),
        r[H.armR].rotation.set(w, 0, E),
        r[H.foreL].rotation.set(k, D, 0),
        r[H.foreR].rotation.set(A, O, 0),
        r[H.handL].rotation.set(0, 0, 0),
        r[H.handR].rotation.set(0, 0, 0));
      let ne = +(c > 0.5);
      (r[H.fingersL].rotation.set(
        0,
        0,
        0.3 + 0.6 * Math.max(M, o * N, d * 0.5, m),
      ),
        r[H.fingersR].rotation.set(
          0,
          0,
          -(0.3 + 0.9 * Math.max(ne, m, d * 0.5)),
        ),
        r[H.spine].rotation.set(-ee * 0.5, 0, 0),
        r[H.chest].rotation.set(-ee * 0.5, 0, 0),
        r[H.neck].rotation.set(te * 0.5, 0, 0),
        r[H.head].rotation.set(te * 0.5, 0, 0));
      let re = e.rc.rest[H.hips];
      (r[H.hips].position.set(
        re.x,
        re.y + e.k * (-s * 0.44 + a * 0.05 * Math.abs(g)),
        re.z,
      ),
        r[H.jaw].rotation.set(
          -f * 0.14 * (0.5 + 0.5 * Math.sin(e.t * 17)),
          0,
          0,
        ),
        (e.blinkT -= n));
      let ie = 0.001;
      if (e.blinkP >= 0) {
        e.blinkP += n;
        let t = e.blinkP;
        ((ie = t < 0.06 ? t / 0.06 : t < 0.16 ? 1 - (t - 0.06) / 0.1 : 0.001),
          t >= 0.16 && (e.blinkP = -1));
      } else
        e.blinkT <= 0 && ((e.blinkP = 0), (e.blinkT = 2 + Math.random() * 3.5));
      (t.fall > 0.9 && (ie = 1),
        (ie = Math.max(0.001, ie)),
        r[H.lidL].scale.set(1, ie, 1),
        r[H.lidR].scale.set(1, ie, 1));
      let ae = c > 0.5 && c < 1.5,
        oe = c > 1.5,
        se = (e, t) => e.scale.setScalar(t ? 1 : 1e-4);
      (se(e.sock.pistol, ae),
        se(e.sock.rifle, oe),
        se(e.sock.holster, !ae),
        se(e.sock.sling, !oe),
        se(e.sock.cuffs, d > 0.4 && c < 0.5));
      let ce = t.fall * (Math.PI / 2 - 0.08),
        le = t.fall > 0 ? t.fallDir : t.heading;
      (bC.set(ce, -le, -t.roll, `YXZ`), yC.setFromEuler(bC));
      let ue = e.rc.root;
      (ue.quaternion.copy(yC),
        ue.position.set(t.x, t.y + Math.sin(ce) * 0.14, t.z));
    }
  },
  SC = class {
    active = !1;
    x = 0;
    y = 0;
    z = 0;
    heading = 0;
    vx = 0;
    vz = 0;
    phase = Math.random() * 6.28;
    stride = 0;
    aim = 0;
    crouch = 0;
    reach = 0;
    talk = 0;
    flinch = 0;
    pitch = 0;
    wave = 0;
    variant = 0;
    persona = 0;
    rest = 0;
    hero = null;
    lodFar = !1;
    weapon = 1;
    gun = 0;
    skin = 0.5;
    hp = 100;
    maxHp = 100;
    state = `idle`;
    stateT = 0;
    role = `unit`;
    car = null;
    body;
    route = new eS();
    routing = !1;
    los = !1;
    losT = 0;
    lastSeenT = -99;
    fireT = 0;
    burst = 0;
    aimT = 0;
    barkT = 0;
    downT = 0;
    fall = 0;
    fallDir = 0;
    deadT = 0;
    stuckT = 0;
    sideT = 0;
    sideX = 0;
    sideZ = 0;
    blockN = 0;
    coverX = 0;
    coverZ = 0;
    hasCover = !1;
    popT = 0;
    popped = !1;
    guardX = 0;
    guardZ = 0;
    guardH = 0;
    hurtT = -99;
    assaultT = -99;
    tx = 0;
    tz = 0;
    goalT = 0;
    ticketT = 0;
    seed = Math.random();
    posed = !1;
    hidden = !1;
    hidT = 0;
    idx = 0;
    blipId = ``;
    ride = 0;
    roll = 0;
    pedal = 0;
    blip = !1;
    whistleT = 0;
    navT = 0;
    navX = 0;
    navZ = 0;
    navDirect = !0;
    wpOn = !1;
    wpX = 0;
    wpZ = 0;
    constructor() {
      this.body = {
        id: Xe(),
        kind: `police`,
        owner: `police`,
        x: 0,
        y: 0,
        z: 0,
        heading: 0,
        halfW: 0.32,
        halfL: 0.32,
        radius: 0.32,
        height: 1.78,
        vx: 0,
        vz: 0,
        mass: 85,
        active: !1,
        userData: { officer: this },
      };
    }
  },
  CC = new R(),
  wC = new R(),
  TC = st(),
  EC = st(),
  DC = [],
  OC = null,
  kC = { x: 0, y: 0, z: 0 },
  AC = new Set([
    `pole`,
    `tree`,
    `prop`,
    `bench`,
    `pillar`,
    `vehicle`,
    `bollard`,
    `sign`,
    `lamp`,
    `hydrant`,
    `bin`,
  ]),
  jC = 120,
  MC = st(),
  NC = bt(),
  PC = { x: 0, y: 0, z: 0 },
  FC = new ke(),
  IC = new y(),
  LC = new k(0, 0, 0, `YXZ`),
  RC = new R(),
  zC = new R(),
  BC = { x: 0, z: 0, turn: 0, cornerDist: 0 },
  VC = { x: 0, z: 0 },
  HC = new R(),
  UC = { amount: 0, source: `police`, weapon: `pistol` },
  WC = { amount: 0, source: `police`, weapon: `pistol` },
  GC = class {
    S;
    list = [];
    render;
    heroes;
    cars = { list: [] };
    panicT = 0;
    lastShotBarkT = -99;
    drv;
    stats = { shots: 0, blocked: 0, civBlocked: 0, hits: 0 };
    crowd = 0;
    crowdT = 0;
    constructor(e) {
      ((this.S = e), (this.drv = Ie(e.ctx.plan.side)));
      for (let e = 0; e < 16; e++) {
        let t = new SC();
        ((t.idx = e), (t.blipId = `police-officer-${e}`), this.list.push(t));
      }
      ((this.render = $S(e.ctx.quality.materials !== `lambert`)),
        this.setQuality(e.ctx.quality),
        (this.heroes = new xC(e.ctx)));
      for (let e of this.list)
        ((e.body.onDamage = (t) => this.onDamage(e, t)),
          (e.body.onImpact = (t, n, r) => this.onImpact(e, t, n, r)));
    }
    get activeCount() {
      let e = 0;
      for (let t of this.list) t.active && e++;
      return e;
    }
    get aliveCount() {
      let e = 0;
      for (let t of this.list) t.active && t.state !== `dead` && e++;
      return e;
    }
    countRole(e) {
      let t = 0;
      for (let n of this.list)
        n.active && n.role === e && n.state !== `dead` && t++;
      return t;
    }
    pickPersona(e) {
      let t = e[0],
        n = 1 / 0,
        r = (Math.random() * e.length) | 0;
      for (let i = 0; i < e.length; i++) {
        let a = e[(i + r) % e.length],
          o = 0;
        for (let e of this.list) e.active && e.persona === a && o++;
        o < n && ((n = o), (t = a));
      }
      return t;
    }
    spawn(e, t, n, r = {}) {
      if (this.activeCount >= this.S.budget.maxOfficers) {
        let e = null;
        for (let t of this.list)
          t.active &&
            t.state === `dead` &&
            (!e || t.deadT > e.deadT) &&
            (e = t);
        if (!e) return null;
        this.despawn(e);
      }
      let i = this.list.find((e) => !e.active);
      if (!i) return null;
      let a = this.S.ctx;
      return (
        (i.active = !0),
        (i.x = e),
        (i.z = t),
        (i.y = a.plan.groundHeight(e, t)),
        (i.heading = n),
        (i.vx = i.vz = 0),
        (i.variant = r.variant ?? 0),
        (i.weapon = i.variant === 1 ? 2 : 1),
        (i.gun = 0),
        (i.maxHp = i.hp = i.variant === 1 ? 170 : 100),
        (i.skin = 0.25 + Math.random() * 0.6),
        (i.role = r.role ?? `unit`),
        (i.persona =
          r.persona ??
          (i.variant === 1
            ? this.pickPersona(mS)
            : r.state === `ride`
              ? 3
              : this.pickPersona(pS))),
        (i.rest =
          i.role === `guard`
            ? 2
            : i.role === `traffic` || i.variant === 1
              ? 0
              : +(Math.random() < 0.65)),
        i.hero && this.heroes.release(i.hero),
        (i.car = r.car ?? null),
        (i.state = r.state ?? `chase`),
        (i.stateT = 0),
        (i.aim = i.crouch = i.reach = i.talk = i.flinch = i.wave = i.fall = 0),
        (i.stride = 0),
        (i.los = !1),
        (i.losT = 0),
        (i.fireT = this.S.now + 0.8 + Math.random() * 0.8),
        (i.burst = 0),
        (i.aimT = 0),
        (i.hasCover = !1),
        i.route.clear(),
        (i.routing = !1),
        (i.hurtT = i.assaultT = -99),
        (i.deadT = 0),
        (i.stuckT = 0),
        (i.goalT = 0),
        (i.barkT = this.S.now + 1 + Math.random() * 2),
        (i.posed = !1),
        (i.hidT = 0),
        (i.ride = 0),
        (i.roll = 0),
        (i.pedal = 0),
        (i.lastSeenT = -99),
        (i.sideT = 0),
        (i.blockN = 0),
        (i.popT = 0),
        (i.popped = !1),
        (i.ticketT = 0),
        (i.whistleT = 0),
        (i.navT = 0),
        (i.navDirect = !0),
        (i.wpOn = !1),
        (i.lodFar = !1),
        (i.downT = 0),
        (i.pitch = 0),
        (i.phase = Math.random() * 6.28),
        (i.body.active = i.state !== `ride`),
        (i.body.x = e),
        (i.body.z = t),
        (i.body.y = i.y),
        a.dynamics.add(i.body),
        i
      );
    }
    despawn(e) {
      if (e.active) {
        if (e.blip) {
          e.blip = !1;
          try {
            this.S.ctx.ui.removeBlip(e.blipId);
          } catch {}
        }
        if (
          ((e.active = !1),
          (e.body.active = !1),
          e.hero && this.heroes.release(e.hero),
          this.S.ctx.dynamics.remove(e.body),
          e.car)
        ) {
          let t = e.car.officers.indexOf(e);
          t >= 0 && e.car.officers.splice(t, 1);
        }
        e.car = null;
      }
    }
    despawnAll() {
      for (let e of this.list) this.despawn(e);
    }
    setState(e, t) {
      e.state !== t &&
        ((e.state = t),
        (e.stateT = 0),
        e.route.clear(),
        (e.routing = !1),
        t !== `aim` && t !== `cover` && (e.aimT = 0));
    }
    attributedToPlayer(e, t) {
      let n = this.S.P,
        r = Math.hypot(n.x - e.x, n.z - e.z);
      return t.source === `player`
        ? !0
        : t.source === `vehicle` || t.source === `explosion`
          ? r < 14
          : !1;
    }
    onDamage(e, t) {
      if (!e.active || e.state === `dead` || t.source === `police`) return;
      ((e.hp -= t.amount), (e.hurtT = this.S.now), (e.flinch = 1));
      let n = this.attributedToPlayer(e, t),
        r = t.dir ? t.dir.x : e.x - this.S.P.x,
        i = t.dir ? t.dir.z : e.z - this.S.P.z;
      if (e.hp <= 0) {
        (this.kill(e, r, i),
          n && this.S.crimeAgainstPolice(`kill_police`, e.x, e.z, 1));
        return;
      }
      n &&
        this.S.now - e.assaultT > 2 &&
        ((e.assaultT = this.S.now),
        this.S.crimeAgainstPolice(
          `assault_police`,
          e.x,
          e.z,
          V(t.amount / 35, 0.35, 1.2),
        ));
      let a = t.weapon === `fists` || t.weapon === `bat`;
      ((t.source === `vehicle` ||
        t.source === `explosion` ||
        (a &&
          t.amount >= 10 &&
          Math.random() < (t.weapon === `bat` ? 0.6 : 0.3))) &&
        this.knockDown(e, r, i, t.source === `vehicle` ? 3.2 : 1.8),
        e.state !== `down` &&
          this.S.W.level >= 1 &&
          e.state !== `aim` &&
          e.state !== `cover` &&
          n &&
          (this.S.W.level - (ux.gunDelay ?? 0) >= 2
            ? this.setState(e, `aim`)
            : this.setState(e, `arrest`)));
    }
    onImpact(e, t, n, r) {
      if (
        !e.active ||
        e.state === `dead` ||
        e.state === `ride` ||
        this.S.now - e.hurtT < 0.2
      )
        return;
      let i = Math.min(Math.hypot(t, n) / e.body.mass, 20);
      if (i < 2.5) {
        ((e.vx += t / e.body.mass), (e.vz += n / e.body.mass));
        return;
      }
      let a = V((i - 2.5) * 6, 0, 45),
        o = WC;
      if (
        ((o.amount = a),
        (o.source = r && r.kind === `vehicle` ? `vehicle` : `impact`),
        (o.weapon = void 0),
        (o.dir = void 0),
        (o.point = void 0),
        (e.hp -= a),
        (e.hurtT = this.S.now),
        e.hp <= 0)
      ) {
        (this.kill(e, t, n),
          r &&
            this.S.P.vehicle &&
            r === this.S.P.vehicle.body &&
            this.S.crimeAgainstPolice(`kill_police`, e.x, e.z, 1));
        return;
      }
      (this.knockDown(e, t, n, V(i * 0.6, 1.5, 6)),
        r &&
          this.S.P.vehicle &&
          r === this.S.P.vehicle.body &&
          this.S.now - e.assaultT > 2 &&
          ((e.assaultT = this.S.now),
          this.S.crimeAgainstPolice(`assault_police`, e.x, e.z, 0.8)));
    }
    knockDown(e, t, n, r) {
      let i = Math.hypot(t, n) || 1;
      ((e.vx = (t / i) * r),
        (e.vz = (n / i) * r),
        (e.fallDir = Math.atan2(-t, n)),
        (e.heading = e.fallDir),
        (e.downT = 2.2 + Math.random()),
        (e.aim = e.reach = e.crouch = 0),
        e.state !== `down` && this.setState(e, `down`));
    }
    kill(e, t, n) {
      let r = Math.hypot(t, n) || 1;
      if (
        ((e.vx = (t / r) * 2.2),
        (e.vz = (n / r) * 2.2),
        (e.fallDir = Math.atan2(-t, n)),
        (e.heading = e.fallDir),
        (e.hp = 0),
        this.setState(e, `dead`),
        (e.deadT = 0),
        (e.gun = 0),
        (e.body.active = !1),
        this.S.ctx.audio.play(`ped_scream`, {
          x: e.x,
          y: e.y + 1.5,
          z: e.z,
          rate: 0.75,
          volume: 0.7,
        }),
        e.car)
      ) {
        let t = e.car.officers.indexOf(e);
        (t >= 0 && e.car.officers.splice(t, 1), (e.car = null));
      }
      for (let t of this.list)
        if (
          t !== e &&
          t.active &&
          t.state !== `dead` &&
          Math.hypot(t.x - e.x, t.z - e.z) < 40
        ) {
          this.S.bark(`officerDown`, t.x, t.z, !0);
          break;
        }
    }
    lineOfSight(e) {
      let t = this.S.P,
        n = t.x - e.x,
        r = t.z - e.z,
        i = Math.hypot(n, r),
        a = Qe.uNight.value,
        o =
          (t.onFoot && t.speed < 2.2 ? Sx.officerStill : Sx.officer) *
          (1 - a * (1 - Sx.nightMul));
      if (i > o) return !1;
      let s = t.y - e.y;
      if (s > 3 && s > i * 0.45) return !1;
      if (i < Sx.hear) return !0;
      let c = e.y + 1.6 - e.crouch * 0.4;
      if (
        this.clearRay(e.x, c, e.z, t.x, t.y + (t.inVehicle ? 0.9 : 1.25), t.z)
      )
        return !0;
      let l = (-r / i) * 0.32,
        u = (n / i) * 0.32,
        d = t.y + (t.inVehicle ? 1.2 : 1.5);
      return this.clearRay(e.x + l, c, e.z + u, t.x + l, d, t.z + u) ||
        this.clearRay(e.x - l, c, e.z - u, t.x - l, d, t.z - u)
        ? !0
        : t.onFoot &&
            i < Math.min(60, o) &&
            Math.abs(s) < 1.5 &&
            this.directPath(e, t.x, t.z, i);
    }
    clearRay(e, t, n, r, i, a) {
      (CC.set(e, t, n), wC.set(r - e, i - t, a - n));
      let o = wC.length();
      return (
        o < 0.7 ||
        (wC.multiplyScalar(1 / o), !this.S.ctx.statics.raycast(CC, wC, o - 0.6))
      );
    }
    directPath(e, t, n, r) {
      let i = this.S.ctx.statics,
        a = (t - e.x) / r,
        o = (n - e.z) / r;
      (wC.set(a, 0, o), CC.set(e.x, e.y + 0.55, e.z));
      let s = r - 0.4;
      OC = null;
      for (let e = 0; e < 5 && s > 0; e++) {
        if (!i.raycast(CC, wC, s, EC)) return !0;
        if (!AC.has(EC.tag)) {
          let e = EC.point.x,
            t = EC.point.z,
            n = i.query(e - 0.3, t - 0.3, e + 0.3, t + 0.3, DC);
          for (let r = 0; r < n; r++) {
            let n = DC[r];
            if (n.tag !== EC.tag) continue;
            let i = (e - n.cx) * n.cos + (t - n.cz) * n.sin,
              a = -(e - n.cx) * n.sin + (t - n.cz) * n.cos;
            if (Math.abs(i) < n.hx + 0.3 && Math.abs(a) < n.hz + 0.3) {
              OC = n;
              break;
            }
          }
          return !1;
        }
        let e = EC.distance + 0.9;
        ((CC.x += a * e), (CC.z += o * e), (s -= e));
      }
      return !0;
    }
    detour(e, t, n, r) {
      let i = 1 / 0,
        a = 0,
        o = 0,
        s = r.hx + 1.1,
        c = r.hz + 1.1;
      for (let l = 0; l < 4; l++) {
        let u = l & 1 ? s : -s,
          d = l & 2 ? c : -c,
          f = r.cx + u * r.cos - d * r.sin,
          p = r.cz + u * r.sin + d * r.cos,
          m = Math.hypot(f - e.x, p - e.z);
        if (m < 0.8) continue;
        let h = Math.hypot(t - f, n - p),
          g = m + h;
        g >= i ||
          (this.directPath(e, f, p, m) &&
            ((kC.x = f),
            (kC.z = p),
            (kC.y = e.y),
            h > 1 && !this.directPath(kC, t, n, h) && (g += 25),
            g < i && ((i = g), (a = f), (o = p))));
      }
      return i !== 1 / 0 && ((e.wpX = a), (e.wpZ = o), !0);
    }
    sees(e, t, n, r) {
      let i = t - e.x,
        a = n - e.z,
        o = Math.hypot(i, a);
      return o > r
        ? !1
        : o < Sx.hear ||
            (CC.set(e.x, e.y + 1.6, e.z),
            wC.set(i, -0.4, a).normalize(),
            !this.S.ctx.statics.raycast(CC, wC, o - 0.5));
    }
    fire(e, t) {
      let n = this.S,
        r = n.P,
        i = n.ctx,
        a = Math.sin(e.heading),
        o = -Math.cos(e.heading),
        s = Math.cos(e.heading),
        c = Math.sin(e.heading),
        l = e.y + 1.38 - e.crouch * 0.42;
      CC.set(e.x + a * 0.62 + s * 0.14, l, e.z + o * 0.62 + c * 0.14);
      let u = r.x,
        d = r.y + 1.15,
        f = r.z;
      (r.inVehicle &&
        r.vehicle &&
        ((u = r.vehicle.body.x),
        (f = r.vehicle.body.z),
        (d = r.vehicle.body.y + 0.85)),
        wC.set(u - CC.x, d - CC.y, f - CC.z));
      let p = wC.length();
      wC.multiplyScalar(1 / p);
      let m = i.dynamics.raycast(CC, wC, p - 0.3, e.body, TC),
        h = r.vehicle ? r.vehicle.body : null;
      if (
        (m && m !== r.body && m !== h) ||
        Xx(i, CC.x, CC.z, u, f, r.body, h)
      ) {
        (this.stats.blocked++,
          (!m || m.kind === `ped`) && this.stats.civBlocked++,
          e.blockN++,
          (e.sideT = n.now + 1.2));
        let t = Math.random() < 0.5 ? -1 : 1,
          r = Math.hypot(u - e.x, f - e.z);
        if (e.blockN >= 3 && r > 7) {
          let i = Math.min(4.5, r - 5.5) / r;
          ((e.sideX = e.x + (u - e.x) * i + s * t * 1.2),
            (e.sideZ = e.z + (f - e.z) * i + c * t * 1.2),
            (e.sideT = n.now + 1.8));
        } else ((e.sideX = e.x + s * t * 2.5), (e.sideZ = e.z + c * t * 2.5));
        e.fireT = n.now + 0.5 + Math.random() * 0.4;
        return;
      }
      e.blockN = 0;
      let g = Qe.uNight.value,
        _ =
          t.spread +
          p * 8e-4 +
          Math.min(r.speed, 20) * 0.011 +
          g * 0.012 +
          (e.aimT < 1.1 ? 0.025 : 0);
      (e.variant === 1 && (_ *= 0.7), r.inVehicle && (_ *= 0.8));
      let v = Math.random() * Math.PI * 2,
        y = Math.sqrt(Math.random()) * _;
      (RC.set(-wC.z, 0, wC.x).normalize(),
        zC.crossVectors(wC, RC).normalize(),
        wC
          .addScaledVector(RC, Math.cos(v) * y)
          .addScaledVector(zC, Math.sin(v) * y)
          .normalize(),
        (UC.amount = t.damage),
        (UC.source = `police`),
        (UC.weapon = e.weapon === 2 ? `rifle` : `pistol`));
      let b = Qx(i, CC, wC, t.range, e.body, UC, MC);
      (this.stats.shots++,
        b && b.body && b.body === r.body && this.stats.hits++);
      let x, S, C;
      if (b) {
        if (
          ((x = b.point.x),
          (S = b.point.y),
          (C = b.point.z),
          n.fx.flash(x, S, C, 2.2, 1.7, 1, 0.35, 0.09),
          b.body && b.body === i.player.body && !i.player.body.onDamage)
        ) {
          ((WC.amount = t.damage),
            (WC.source = `police`),
            (WC.weapon = UC.weapon),
            (WC.point = b.point),
            (WC.dir = wC));
          try {
            i.player.damage(WC);
          } catch {}
        } else if (
          b.body &&
          r.vehicle &&
          b.body === r.vehicle.body &&
          Math.random() < 0.3
        ) {
          ((WC.amount = t.damage * 0.5),
            (WC.source = `police`),
            (WC.weapon = UC.weapon),
            (WC.point = b.point),
            (WC.dir = wC));
          try {
            i.player.damage(WC);
          } catch {}
        }
        Math.hypot(x - r.x, C - r.z) < 30 &&
          i.audio.play(`bullet_impact`, { x, y: S, z: C, volume: 0.8 });
      } else
        ((x = CC.x + wC.x * t.range),
          (S = CC.y + wC.y * t.range),
          (C = CC.z + wC.z * t.range));
      if (
        (n.fx.tracer(CC.x, CC.y, CC.z, x, S, C),
        n.fx.flash(CC.x, CC.y, CC.z, 5, 3.6, 1.6, 0.55, 0.06, 3.5, e.y),
        (e.flinch = Math.max(e.flinch, 0.25)),
        i.audio.play(`gunshot`, {
          x: CC.x,
          y: CC.y,
          z: CC.z,
          rate: e.weapon === 2 ? 1.15 : 1,
        }),
        n.now > this.panicT)
      ) {
        this.panicT = n.now + 2;
        try {
          i.peds.panic(e.x, e.z, 35);
        } catch {}
        try {
          i.traffic.panic(e.x, e.z, 30);
        } catch {}
      }
    }
    shootLogic(e, t, n) {
      let r = this.S,
        i = e.weapon === 2 ? Ex : Tx;
      if (
        ((e.aimT += t),
        r.W.frozen ||
          !e.los ||
          e.aimT < 0.5 ||
          r.now < e.fireT ||
          e.aim < 0.8 ||
          n > i.range * 0.5)
      )
        return;
      let a = Math.min(4, this.crowd);
      (e.burst <= 0 &&
        (e.burst =
          a >= 2
            ? 1
            : i.burst[0] +
              ((Math.random() * (i.burst[1] - i.burst[0] + 1)) | 0)),
        this.fire(e, i),
        e.burst--);
      let o = i.burstGap[0] + Math.random() * (i.burstGap[1] - i.burstGap[0]);
      ((e.fireT =
        r.now +
        (e.burst > 0
          ? i.shotGap * (0.85 + Math.random() * 0.3)
          : o * (1 + 0.45 * a))),
        r.now - this.lastShotBarkT > 9 &&
          Math.random() < 0.5 &&
          ((this.lastShotBarkT = r.now),
          r.bark(r.P.armed ? `dropWeapon` : `freeze`, e.x, e.z)));
    }
    moveTo(e, t, n, r, i, a, o) {
      let s = this.S,
        c = s.ctx,
        l = t,
        u = n,
        d = Math.hypot(t - e.x, n - e.z);
      if (o && d > 3 && e.state !== `patrol`) {
        let r = e.wpOn && Math.hypot(e.wpX - e.x, e.wpZ - e.z) < 1.2;
        if (
          s.now >= e.navT ||
          r ||
          Math.abs(e.navX - t) + Math.abs(e.navZ - n) > 8
        ) {
          ((e.navT = s.now + 0.4 + Math.random() * 0.2),
            (e.navX = t),
            (e.navZ = n),
            (e.navDirect = d <= jC && this.directPath(e, t, n, d)));
          let r = OC;
          e.wpOn = !e.navDirect && d <= jC && !!r && this.detour(e, t, n, r);
        }
      } else ((e.navDirect = !0), (e.wpOn = !1));
      (e.wpOn && ((l = e.wpX), (u = e.wpZ)),
        o && d > 14 && !e.navDirect && !e.wpOn && e.state !== `patrol`
          ? ((!e.routing ||
              s.now - e.route.builtAt > 3 ||
              Math.hypot(e.route.gx - t, e.route.gz - n) > 12) &&
              (e.route.build(
                c.plan,
                s.now,
                e.x,
                e.z,
                e.heading,
                t,
                n,
                `nodes`,
                0,
                0,
                !0,
              ),
              (e.routing = !0)),
            e.route.track(e.x, e.z, 3.5, BC, 0),
            (l = BC.x),
            (u = BC.z))
          : e.routing && ((e.routing = !1), e.route.clear()),
        e.sideT > s.now && ((l = e.sideX), (u = e.sideZ), (i = 0.3)));
      let f = l - e.x,
        p = u - e.z,
        m = Math.hypot(f, p),
        h = 0,
        g = 0,
        _ = e.routing || e.wpOn ? d : m;
      if (_ > i && m > 0.05) {
        let e = Math.min(r, (_ - i) * 3) / m;
        ((h = f * e), (g = p * e));
      }
      for (let t of this.list) {
        if (t === e || !t.active || t.state === `dead`) continue;
        let n = e.x - t.x,
          r = e.z - t.z,
          i = n * n + r * r;
        if (i < 0.81 && i > 1e-6) {
          let e = Math.sqrt(i);
          ((h += (n / e) * (0.9 - e) * 5), (g += (r / e) * (0.9 - e) * 5));
        }
      }
      let v = s.P;
      if (v.onFoot) {
        let t = e.x - v.x,
          n = e.z - v.z,
          r = Math.hypot(t, n);
        r < 0.75 &&
          r > 1e-4 &&
          ((h += (t / r) * (0.75 - r) * 8), (g += (n / r) * (0.75 - r) * 8));
      }
      let y = Math.min(1, a * 9);
      ((e.vx += (h - e.vx) * y),
        (e.vz += (g - e.vz) * y),
        this.integrate(e, a));
    }
    integrate(e, t) {
      let n = this.S.ctx,
        r = e.x,
        i = e.z;
      if (
        ((PC.x = e.x + e.vx * t),
        (PC.z = e.z + e.vz * t),
        (PC.y = e.y),
        n.statics.resolveCircle(PC, 0.3, 1.75, NC),
        NC.hit)
      ) {
        let t = e.vx * NC.nx + e.vz * NC.nz;
        t < 0 && ((e.vx -= NC.nx * t), (e.vz -= NC.nz * t));
      }
      for (let e of this.cars.list) {
        let t = e.v.body,
          n = PC.x - t.x,
          r = PC.z - t.z;
        if (n * n + r * r > 16) continue;
        let i = Math.cos(t.heading),
          a = Math.sin(t.heading),
          o = n * i + r * a,
          s = -n * a + r * i,
          c = e.v.spec.halfW + 0.3,
          l = e.v.spec.halfL + 0.3;
        if (Math.abs(o) < c && Math.abs(s) < l) {
          let e = c - Math.abs(o),
            t = l - Math.abs(s),
            n = 0,
            r = 0;
          (e < t ? (n = Math.sign(o) * e) : (r = Math.sign(s) * t),
            (PC.x += n * i - r * a),
            (PC.z += n * a + r * i));
        }
      }
      ((e.x = PC.x), (e.z = PC.z));
      let a = n.groundAt
        ? n.groundAt(e.x, e.z, e.y)
        : n.plan.groundHeight(e.x, e.z);
      e.y += (a - e.y) * Math.min(1, t * 14);
      let o = Math.hypot(e.x - r, e.z - i),
        s = Math.hypot(e.vx, e.vz) * t;
      if (
        (s > 0.02 && o < s * 0.3
          ? (e.stuckT += t)
          : (e.stuckT = Math.max(0, e.stuckT - t)),
        e.stuckT > 0.8)
      ) {
        e.stuckT = 0;
        let t = Math.random() < 0.5 ? -1 : 1,
          n = Math.cos(e.heading),
          r = Math.sin(e.heading);
        ((e.sideT = this.S.now + 0.9),
          (e.sideX = e.x + n * t * 3 - Math.sin(e.heading) * 1.2),
          (e.sideZ = e.z + r * t * 3 + Math.cos(e.heading) * 1.2));
      }
    }
    face(e, t, n, r, i = 10) {
      let a = Math.atan2(t - e.x, -(n - e.z));
      e.heading = Ye(e.heading, a, i, r);
    }
    isHidden(e) {
      let t = this.S;
      return (
        t.now >= e.hidT &&
          ((e.hidT = t.now + 0.3 + Math.random() * 0.1),
          (e.hidden = !t.spawn.visible(e.x, e.y + 1, e.z, 1.3))),
        e.hidden
      );
    }
    doorOf(e, t, n = -1) {
      let r = e.v.body,
        i = Math.cos(r.heading),
        a = Math.sin(r.heading),
        o = Math.sin(r.heading),
        s = -Math.cos(r.heading),
        c = e.v.spec.halfW + 0.55;
      ((t.x = r.x + i * c * n + o * 0.3), (t.z = r.z + a * c * n + s * 0.3));
    }
    update(e) {
      let t = this.S;
      (t.now >= this.crowdT &&
        ((this.crowdT = t.now + 0.3),
        (this.crowd =
          t.W.level >= 2 && !t.W.frozen ? Zx(t.ctx, t.P.x, t.P.z, 6) : 0)),
        this.runOverCheck());
      for (let t of this.list)
        t.active &&
          (t.posed || this.think(t, e),
          (t.body.x = t.x),
          (t.body.y = t.y),
          (t.body.z = t.z),
          (t.body.heading = t.heading),
          (t.body.vx = t.vx),
          (t.body.vz = t.vz));
      (this.flashlights(),
        this.blips(),
        this.heroes.update(this.list, e, t.now),
        this.writeInstances());
    }
    runOverCheck() {
      let e = this.S,
        t = e.P,
        n = t.vehicle;
      if (!t.inVehicle || !n || t.speed < 3.5) return;
      let r = n.body,
        i = Math.cos(r.heading),
        a = Math.sin(r.heading),
        o = n.spec.halfW + 0.28,
        s = n.spec.halfL + 0.28;
      for (let n of this.list) {
        if (!n.active || n.state === `dead` || n.fall > 0.4) continue;
        let c = n.x - r.x,
          l = n.z - r.z;
        if (c * c + l * l > (s + 1) * (s + 1)) continue;
        let u = c * i + l * a,
          d = -c * a + l * i;
        Math.abs(u) > o ||
          Math.abs(d) > s ||
          e.now - n.hurtT < 0.6 ||
          (HC.set(t.vx, 0, t.vz).normalize(),
          (WC.amount = (t.speed - 3) * 7),
          (WC.source = `vehicle`),
          (WC.weapon = void 0),
          (WC.dir = HC),
          (WC.point = void 0),
          e.ctx.audio.play(`crash_light`, {
            x: n.x,
            y: n.y + 1,
            z: n.z,
            volume: 0.6,
          }),
          this.onDamage(n, WC));
      }
    }
    flashlights() {
      let e = this.S,
        t = e.fx,
        n = t.night;
      if (n < 0.3) return;
      let r = e.now;
      for (let e of this.list) {
        if (!e.active) continue;
        let i = e.state;
        if (
          !(
            i === `search` ||
            (i === `chase` && !e.los) ||
            i === `patrol` ||
            (i === `guard` && e.role === `roadblock` && !e.los)
          ) ||
          e.fall > 0.2
        )
          continue;
        let a = e.heading + Math.sin(r * 1.3 + e.seed * 9) * 0.45,
          o = Math.sin(a),
          s = -Math.cos(a),
          c = n;
        (t.glare(
          e.x + Math.sin(e.heading) * 0.3 - Math.cos(e.heading) * 0.16,
          e.y + 1.36,
          e.z - Math.cos(e.heading) * 0.3 - Math.sin(e.heading) * 0.16,
          3 * c,
          2.9 * c,
          2.6 * c,
          0.32,
        ),
          t.pool(
            e.x + o * 5.5,
            e.y,
            e.z + s * 5.5,
            1.3,
            0.3 * c,
            0.28 * c,
            0.22 * c,
            2.1,
            a,
          ));
      }
    }
    blipT = 0;
    blips() {
      let e = this.S;
      if (e.now < this.blipT) return;
      this.blipT = e.now + 0.2;
      let t = e.ctx.ui;
      for (let n of this.list) {
        let r = n.active && n.state !== `dead` && e.W.level > 0 && !e.W.frozen,
          i = n.blipId;
        try {
          r
            ? n.blip
              ? t.updateBlip(i, n.x, n.z)
              : (t.addBlip(i, {
                  x: n.x,
                  z: n.z,
                  icon: `police`,
                  color: n.variant === 1 ? `#8fa3c7` : `#4da3ff`,
                }),
                (n.blip = !0))
            : (n.blip &&= (t.removeBlip(i), !1));
        } catch {}
      }
    }
    think(e, t) {
      let n = this.S,
        r = n.P,
        i = n.W;
      if (((e.stateT += t), e.state === `dead`)) {
        ((e.deadT += t),
          (e.fall = Math.min(1, e.fall + t * 3.2)),
          (e.vx *= Math.max(0, 1 - t * 4)),
          (e.vz *= Math.max(0, 1 - t * 4)),
          (e.x += e.vx * t),
          (e.z += e.vz * t),
          (e.stride = e.aim = e.reach = e.crouch = 0),
          (e.deadT > 40 || (e.deadT > 12 && this.isHidden(e))) &&
            this.despawn(e));
        return;
      }
      if (e.state === `down`) {
        ((e.downT -= t),
          e.downT > 0 && (e.fall = Math.min(1, e.fall + t * 3.5)),
          (e.vx *= Math.max(0, 1 - t * 3)),
          (e.vz *= Math.max(0, 1 - t * 3)),
          this.integrate(e, t),
          (e.stride = e.aim = e.reach = 0),
          e.downT <= 0 &&
            ((e.fall = Math.max(0, e.fall - t * 2.5)),
            e.fall <= 0 &&
              this.setState(
                e,
                i.level > 0 && !i.frozen ? `chase` : e.car ? `return` : `leave`,
              )));
        return;
      }
      if (((e.fall = Math.max(0, e.fall - t * 3)), e.state === `ride`)) {
        ((e.ride = Math.min(1, e.ride + t * 5)),
          (e.stride = e.aim = e.reach = e.crouch = e.talk = e.wave = 0),
          (e.gun = 0),
          e.pedal &&
            ((e.ride = 0.78), (e.stride = 1), (e.phase += e.pedal * t)));
        return;
      }
      ((e.ride = Math.max(0, e.ride - t * 5)),
        (e.roll *= Math.max(0, 1 - t * 8)),
        n.now >= e.losT &&
          ((e.losT = n.now + 0.22 + Math.random() * 0.12),
          (e.los = r.alive && i.level > 0 && !i.frozen && this.lineOfSight(e)),
          e.los && (e.lastSeenT = n.now)));
      let a = r.x - e.x,
        o = r.z - e.z,
        s = Math.hypot(a, o);
      e.los && i.level > 0 && !i.frozen && n.spotted(`officer`);
      let c = 0,
        l = 0,
        u = 0,
        d = 0,
        f = 0,
        p = 0,
        m = i.level - (ux.gunDelay ?? 0),
        h = !1,
        g = e.variant === 1 ? Ax : Ox;
      switch (
        (i.frozen && e.state !== `standDown`
          ? this.setState(e, `standDown`)
          : !i.frozen &&
            e.state === `standDown` &&
            this.setState(e, i.level > 0 ? `chase` : `leave`),
        i.level === 0 && !i.frozen
          ? (e.state === `chase` ||
              e.state === `aim` ||
              e.state === `arrest` ||
              e.state === `cover` ||
              e.state === `search`) &&
            this.setState(
              e,
              e.car
                ? `return`
                : e.role === `guard` || e.role === `traffic`
                  ? `guard`
                  : e.role === `patrol`
                    ? `patrol`
                    : `leave`,
            )
          : i.minorOnly &&
              (e.state === `chase` || e.state === `arrest`) &&
              e.role !== `unit`
            ? this.setState(
                e,
                e.role === `guard` ||
                  e.role === `roadblock` ||
                  e.role === `traffic`
                  ? `guard`
                  : e.role === `patrol`
                    ? `patrol`
                    : `leave`,
              )
            : i.level > 0 &&
              !i.frozen &&
              !i.minorOnly &&
              (e.state === `patrol` ||
                (e.state === `guard` &&
                  (e.role === `guard` || e.role === `traffic`)) ||
                e.state === `leave` ||
                e.state === `idle`) &&
              (e.los || s < 70
                ? this.setState(e, `chase`)
                : e.state !== `guard` && this.setState(e, `search`)),
        !i.frozen &&
          i.level > 0 &&
          i.evading &&
          e.state === `chase` &&
          n.now - e.lastSeenT > 4 &&
          this.setState(e, `search`),
        e.state)
      ) {
        case `standDown`:
          (this.face(e, r.x, r.z, t, 6),
            (f = i.level >= 0 && e.gun ? e.weapon : 0),
            (c = +!!f),
            s > 3 && (this.moveTo(e, r.x, r.z, kx, 2.5, t, !1), (h = !0)));
          break;
        case `chase`:
          if (((f = m >= 2 ? e.weapon : 0), r.inVehicle && r.vehicle)) {
            let n = r.vehicle.body;
            if (r.speed > 5) {
              let r = e.car
                ? Math.hypot(e.car.v.body.x - e.x, e.car.v.body.z - e.z)
                : 999;
              if (e.car && e.car.alive && r < 70 && !i.minorOnly) {
                this.setState(e, `return`);
                break;
              }
              if (m >= 2 && e.los && s < 40) {
                this.setState(e, `aim`);
                break;
              }
              (this.moveTo(e, n.x, n.z, g, 3, t, !0), (h = !0));
            } else {
              let i = Math.cos(n.heading),
                a = Math.sin(n.heading),
                o = n.x + i * this.drv * (r.vehicle.spec.halfW + 0.7),
                s = n.z + a * this.drv * (r.vehicle.spec.halfW + 0.7);
              (this.moveTo(e, o, s, g, 0.4, t, !0),
                (h = !0),
                Math.hypot(o - e.x, s - e.z) < 2.03 &&
                  this.setState(e, `arrest`));
            }
          } else {
            if (
              (m >= 3 ||
                (m === 2 &&
                  (r.armed || n.now - e.hurtT < 8 || r.sinceShot < 10))) &&
              e.los &&
              s < 30 &&
              s > 3.5
            ) {
              this.setState(e, `aim`);
              break;
            }
            let i = n.stake;
            if (i.active && r.y - e.y > 2.5) {
              let n = i.h,
                a = (e.seed - 0.5) * 5,
                o = i.x - Math.sin(n) * 2.2 + Math.cos(n) * a,
                s = i.z + Math.cos(n) * 2.2 + Math.sin(n) * a;
              Math.hypot(o - e.x, s - e.z) > 1.2
                ? (this.moveTo(e, o, s, g, 0.8, t, !0), (h = !0))
                : ((e.vx *= 0.5),
                  (e.vz *= 0.5),
                  this.integrate(e, t),
                  this.face(e, r.x, r.z, t, 5),
                  (c = m >= 2 && e.los ? 1 : 0));
              break;
            }
            if (s < 2.4 && Math.abs(r.y - e.y) < 1.6) {
              this.setState(e, `arrest`);
              break;
            }
            (this.moveTo(e, r.x + r.vx * 0.3, r.z + r.vz * 0.3, g, 1, t, !0),
              (h = !0),
              e.los &&
                s < 26 &&
                r.speed > 3.5 &&
                n.now > e.barkT &&
                ((e.barkT = n.now + 6 + Math.random() * 4),
                n.bark(Math.random() < 0.5 ? `dontRun` : `freeze`, e.x, e.z)));
          }
          break;
        case `aim`: {
          ((f = e.weapon),
            this.face(e, r.x, r.z, t, 12),
            (c = +(e.stateT > 0.15)));
          let a = r.y + (r.inVehicle ? 0.8 : 1.15);
          ((e.pitch = V(
            Math.atan2(a - (e.y + 1.38), Math.max(1, s)),
            -0.6,
            0.8,
          )),
            e.sideT > n.now
              ? (this.moveTo(e, e.sideX, e.sideZ, kx * 1.6, 0.3, t, !1),
                (h = !0))
              : ((e.vx *= Math.max(0, 1 - t * 10)),
                (e.vz *= Math.max(0, 1 - t * 10)),
                this.integrate(e, t)),
            this.shootLogic(e, t, s),
            n.now - e.lastSeenT > 1.4 ||
            s > 38 ||
            (ux.gunDelay &&
              m < 3 &&
              !(
                m === 2 &&
                (r.armed || n.now - e.hurtT < 8 || r.sinceShot < 10)
              ))
              ? this.setState(e, `chase`)
              : r.onFoot && s < 2.3 && !r.armed && m <= 2
                ? this.setState(e, `arrest`)
                : r.inVehicle && r.speed < 1 && s < 12 && i.level <= 3
                  ? this.setState(e, `chase`)
                  : e.car &&
                    !e.hasCover &&
                    e.car.alive &&
                    m >= 2 &&
                    (r.sinceShot < 2.5 || n.now - e.hurtT < 2.5) &&
                    s > 7 &&
                    s < 45 &&
                    this.pickCover(e) &&
                    this.setState(e, `cover`));
          break;
        }
        case `arrest`: {
          let i = r.x,
            a = r.z,
            o = 0.95;
          if (r.inVehicle && r.vehicle) {
            let t = r.vehicle.body,
              n = Math.cos(t.heading),
              s = Math.sin(t.heading);
            if (
              ((i = t.x + n * this.drv * (r.vehicle.spec.halfW + 0.6)),
              (a = t.z + s * this.drv * (r.vehicle.spec.halfW + 0.6)),
              (o = 0.3),
              r.speed > 3)
            ) {
              this.setState(e, `chase`);
              break;
            }
          }
          let l = Math.hypot(i - e.x, a - e.z);
          (l > o + 0.1
            ? (this.moveTo(e, i, a, l > 3 ? g : kx * 1.5, o, t, !0), (h = !0))
            : ((e.vx *= 0.5), (e.vz *= 0.5), this.integrate(e, t)),
            this.face(e, r.x, r.z, t, 12),
            m >= 2
              ? ((f = e.weapon), (c = 1), (e.pitch = -0.25))
              : (u = +(l < 2.2)),
            n.now > e.barkT &&
              s < 6 &&
              ((e.barkT = n.now + 5 + Math.random() * 3),
              n.bark(r.inVehicle ? `getOut` : `freeze`, e.x, e.z)),
            s > (r.inVehicle ? 4.5 : 3.4)
              ? this.setState(e, `chase`)
              : r.onFoot &&
                m >= 3 &&
                s > 3 &&
                e.los &&
                this.setState(e, `aim`));
          break;
        }
        case `cover`:
          if (((f = e.weapon), !e.car || !e.car.alive)) {
            ((e.hasCover = !1), this.setState(e, `aim`));
            break;
          }
          (Math.hypot(e.coverX - e.x, e.coverZ - e.z) > 0.5
            ? (this.moveTo(e, e.coverX, e.coverZ, g, 0.3, t, !1),
              (h = !0),
              (l = 0.5))
            : ((e.vx *= 0.5),
              (e.vz *= 0.5),
              this.integrate(e, t),
              this.face(e, r.x, r.z, t, 10),
              n.now > e.popT &&
                ((e.popped = !e.popped),
                (e.popT =
                  n.now +
                  (e.popped
                    ? 1.3 + Math.random() * 0.8
                    : 1.2 + Math.random() * 1.4)),
                e.popped && (e.aimT = 0.35)),
              (l = +!e.popped),
              (c = e.popped ? 1 : 0.3),
              (e.pitch = V(
                Math.atan2(r.y + 1 - (e.y + 1.38), Math.max(1, s)),
                -0.6,
                0.8,
              )),
              e.popped && this.shootLogic(e, t, s)),
            (s < 7 ||
              e.stateT > 25 ||
              (n.now - e.hurtT > 9 && r.sinceShot > 9 && e.stateT > 8)) &&
              ((e.hasCover = !1), this.setState(e, `aim`)));
          break;
        case `return`: {
          let a = e.car;
          if (!a || !a.alive || a.v.destroyed) {
            ((e.car = null), this.setState(e, i.level > 0 ? `chase` : `leave`));
            break;
          }
          if (i.level > 0 && !i.frozen && r.onFoot && s < 25) {
            this.setState(e, `chase`);
            break;
          }
          let o = VC;
          this.doorOf(a, o, e.seed < 0.5 ? -1 : 1);
          let c = Math.hypot(o.x - e.x, o.z - e.z);
          if (
            (this.moveTo(e, o.x, o.z, i.level > 0 ? g : kx * 1.4, 0.3, t, !0),
            (h = !0),
            c < 1.2)
          ) {
            if ((a.crew++, a.scooter)) {
              let t = a.officers.indexOf(e);
              (t >= 0 && a.officers.splice(t, 1),
                this.setState(e, `ride`),
                (e.body.active = !1));
              return;
            }
            (this.despawn(e),
              n.ctx.audio.play(`car_door`, {
                x: e.x,
                y: e.y + 1,
                z: e.z,
                volume: 0.6,
              }));
            return;
          }
          break;
        }
        case `search`:
          if (
            ((f = m >= 2 ? e.weapon : 0),
            n.now > e.goalT ||
              Math.hypot(e.tx - e.x, e.tz - e.z) < 3 ||
              e.stateT <= t)
          ) {
            e.goalT = n.now + 10 + Math.random() * 6;
            let r = Math.random() * Math.PI * 2,
              a =
                e.stateT <= t
                  ? 3 + Math.random() * 4
                  : Math.random() * i.searchR * 0.7;
            ((e.tx = i.lastX + Math.sin(r) * a),
              (e.tz = i.lastZ - Math.cos(r) * a));
          }
          (this.moveTo(e, e.tx, e.tz, g * 0.6, 1.5, t, !0),
            (h = !0),
            e.los && this.setState(e, `chase`));
          break;
        case `patrol`:
          if (n.now > e.goalT || Math.hypot(e.tx - e.x, e.tz - e.z) < 2) {
            e.goalT = n.now + 20;
            let t = VC;
            n.spawn.footPoint(e.guardX, e.guardZ, 5, 45, t, !1)
              ? ((e.tx = t.x), (e.tz = t.z))
              : ((e.tx = e.guardX), (e.tz = e.guardZ));
          }
          (this.moveTo(e, e.tx, e.tz, kx * 0.85, 0.6, t, !1),
            (h = !0),
            (d = +(Math.sin(n.now * 0.3 + e.seed * 10) > 0.93)));
          break;
        case `guard`: {
          let a = Math.hypot(e.guardX - e.x, e.guardZ - e.z);
          (a > 0.4
            ? (this.moveTo(e, e.guardX, e.guardZ, kx, 0.3, t, !1), (h = !0))
            : ((e.vx *= 0.5), (e.vz *= 0.5), this.integrate(e, t)),
            e.role === `roadblock` && i.level > 0 && !i.frozen
              ? ((f = e.weapon),
                e.los && s < 70
                  ? (this.face(e, r.x, r.z, t, 8),
                    (c = 1),
                    (e.pitch = V(
                      Math.atan2(r.y + 1 - (e.y + 1.38), Math.max(1, s)),
                      -0.6,
                      0.8,
                    )),
                    m >= 3 && this.shootLogic(e, t, s),
                    r.onFoot && s < 20 && this.setState(e, `chase`))
                  : a <= 0.4 &&
                    ((e.heading = Ye(e.heading, e.guardH, 4, t)),
                    (p = +(Math.sin(n.now * 0.8 + e.seed * 6) > 0.3))))
              : a <= 0.4 && e.role === `traffic`
                ? ((e.heading = Ye(
                    e.heading,
                    e.guardH + Math.sin(n.now * 0.35 + e.seed * 5) * 0.6,
                    2,
                    t,
                  )),
                  (p = 1),
                  (e.phase += t * 2.2),
                  n.now > e.whistleT &&
                    ((e.whistleT = n.now + 3.5 + Math.random() * 4),
                    n.ctx.audio.play(`police_whistle`, {
                      x: e.x,
                      y: e.y + 1.6,
                      z: e.z,
                      volume: 0.7,
                    })))
                : a <= 0.4 &&
                  ((e.heading = Ye(e.heading, e.guardH, 4, t)),
                  (d = +(Math.sin(n.now * 0.25 + e.seed * 10) > 0.9))));
          break;
        }
        case `ticket`: {
          let i = r.vehicle;
          if (!i || !r.inVehicle) {
            this.setState(e, e.car ? `return` : `leave`);
            break;
          }
          let a = i.body,
            o = Math.cos(a.heading),
            s = Math.sin(a.heading),
            c = a.x + o * this.drv * (i.spec.halfW + 0.65),
            l = a.z + s * this.drv * (i.spec.halfW + 0.65);
          Math.hypot(c - e.x, l - e.z) > 0.5
            ? (this.moveTo(e, c, l, kx * 1.3, 0.3, t, !0),
              (h = !0),
              (e.ticketT = 0))
            : ((e.vx *= 0.5),
              (e.vz *= 0.5),
              this.integrate(e, t),
              this.face(e, a.x, a.z, t, 6),
              e.ticketT === 0 && n.bark(`ticket`, e.x, e.z, !0),
              (e.ticketT += t),
              (d = 1),
              e.ticketT > 3.2 &&
                (n.issueTicket(),
                this.setState(e, e.car ? `return` : `leave`)));
          break;
        }
        case `leave`: {
          if (e.car && e.car.alive) {
            this.setState(e, `return`);
            break;
          }
          let n = Math.max(1, s);
          if (
            (this.moveTo(
              e,
              e.x - (a / n) * 10,
              e.z - (o / n) * 10,
              kx * 1.2,
              0.2,
              t,
              !1,
            ),
            (h = !0),
            (s > 35 && this.isHidden(e)) || e.stateT > 40)
          ) {
            this.despawn(e);
            return;
          }
          break;
        }
        default:
          ((e.vx *= 0.5), (e.vz *= 0.5), this.integrate(e, t));
      }
      let _ = Math.hypot(e.vx, e.vz);
      (h &&
        _ > 0.4 &&
        e.state !== `aim` &&
        !(e.state === `arrest` && _ < 1.5) &&
        (e.heading = Ye(e.heading, Math.atan2(e.vx, -e.vz), 11, t)),
        (e.phase += t * Math.PI * (_ / (_ > 3 ? 1.15 : 0.72))));
      let v = _ < 0.2 ? 0 : V(0.32 + _ / 6.2, 0, 1);
      ((e.stride += (v - e.stride) * Math.min(1, t * 8)),
        e.stride < 0.02 &&
          e.wave < 0.1 &&
          (e.phase +=
            (Math.round(e.phase / Math.PI) * Math.PI - e.phase) *
            Math.min(1, t * 6)),
        (e.aim += (c - e.aim) * Math.min(1, t * 9)),
        (e.crouch += (l - e.crouch) * Math.min(1, t * 7)),
        (e.reach += (u - e.reach) * Math.min(1, t * 6)),
        (e.talk += (d - e.talk) * Math.min(1, t * 5)),
        (e.wave += (p - e.wave) * Math.min(1, t * 4)),
        (e.flinch = Math.max(0, e.flinch - t * 3.5)),
        f ? (e.gun = f) : e.aim < 0.1 && (e.gun = 0),
        c || (e.pitch *= Math.max(0, 1 - t * 4)));
    }
    pickCover(e) {
      let t = e.car;
      if (!t) return !1;
      let n = t.v.body,
        r = this.S.P;
      if (Math.hypot(n.x - e.x, n.z - e.z) > 16) return !1;
      let i = n.x - r.x,
        a = n.z - r.z,
        o = Math.hypot(i, a) || 1,
        s = Math.max(t.v.spec.halfW, t.v.spec.halfL * 0.6) + 0.9,
        c = e.seed < 0.5 ? -1 : 1;
      return (
        (e.coverX = n.x + (i / o) * s + (-a / o) * c * 0.9),
        (e.coverZ = n.z + (a / o) * s + (i / o) * c * 0.9),
        (e.hasCover = !0),
        (e.popped = !1),
        (e.popT = this.S.now + 1),
        !0
      );
    }
    setQuality(e) {
      this.nearDist =
        e.level === `low`
          ? 14
          : e.level === `medium`
            ? 24
            : e.level === `ultra`
              ? 40
              : 30;
    }
    nearDist = 30;
    writeInstances() {
      let e = this.render,
        t = this.S.ctx.camera,
        n = t.position.x,
        r = t.position.y,
        i = t.position.z,
        a = null,
        o = 0,
        s = 0,
        c = !1,
        l = 1 / 0,
        u = 1 / 0,
        d = 1 / 0,
        f = -1 / 0,
        p = -1 / 0,
        m = -1 / 0,
        h = 1 / 0,
        g = 1 / 0,
        _ = 1 / 0,
        v = -1 / 0,
        y = -1 / 0,
        b = -1 / 0;
      for (let x of this.list) {
        if (!x.active || x.hero) continue;
        let S = Math.hypot(x.x - n, x.y - r, x.z - i);
        if (S > KC) continue;
        (x.lodFar ? S < this.nearDist - 3 : S > this.nearDist) &&
          (x.lodFar = !x.lodFar);
        let C, w;
        if (!x.lodFar)
          ((C = e.near),
            (w = o++),
            x.x < l && (l = x.x),
            x.x > f && (f = x.x),
            x.y < u && (u = x.y),
            x.y > p && (p = x.y),
            x.z < d && (d = x.z),
            x.z > m && (m = x.z));
        else {
          if (S > qC) {
            if (
              ((a ||=
                (JC.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
                YC.setFromProjectionMatrix(
                  JC,
                  t.coordinateSystem,
                  t.reversedDepth,
                ))),
              XC.center.set(x.x, x.y + 0.9, x.z),
              (XC.radius = 2.2),
              !a.intersectsSphere(XC))
            )
              continue;
          } else c = !0;
          ((C = e.far),
            (w = s++),
            x.x < h && (h = x.x),
            x.x > v && (v = x.x),
            x.y < g && (g = x.y),
            x.y > y && (y = x.y),
            x.z < _ && (_ = x.z),
            x.z > b && (b = x.z));
        }
        let T = C.aA.array,
          E = C.aB.array,
          D = C.aC.array,
          O = x.fall * (Math.PI / 2 - 0.08),
          k = x.fall > 0 ? x.fallDir : x.heading;
        (LC.set(O, -k, -x.roll, `YXZ`),
          IC.setFromEuler(LC),
          zC.set(x.x, x.y + Math.sin(O) * 0.14, x.z),
          RC.setScalar(eC(x.persona)),
          FC.compose(zC, IC, RC),
          C.mesh.setMatrixAt(w, FC));
        let A = w * 4;
        ((T[A] = x.phase),
          (T[A + 1] = x.stride),
          (T[A + 2] = x.aim),
          (T[A + 3] = x.crouch),
          (E[A] = x.gun));
        let j = dS[x.persona];
        ((E[A + 1] = j.variant * 8 + x.rest),
          (E[A + 2] = j.tone),
          (E[A + 3] = x.pitch),
          (D[A] = x.flinch),
          (D[A + 1] = x.reach),
          (D[A + 2] = x.talk),
          (D[A + 3] = x.ride > 0.01 ? -x.ride : x.wave));
      }
      (ZC(e.near, o, l, u, d, f, p, m),
        ZC(e.far, s, h, g, _, v, y, b),
        (e.far.mesh.castShadow = c));
    }
  },
  KC = 150,
  qC = 40,
  JC = new ke(),
  YC = new v(),
  XC = new C();
