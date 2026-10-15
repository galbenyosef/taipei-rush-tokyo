// tokyo/assets/actors-Bnj6Q1ad 16 — math
// Lines 7316-10128 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var Ns = class {
    ctx;
    holds = new Map();
    prev = new Set();
    cur = new Set();
    moveX = 0;
    moveY = 0;
    dbgMove = { x: 0, y: 0, t: 0 };
    constructor(e) {
      this.ctx = e;
    }
    hold(e, t) {
      this.holds.set(e, Math.max(this.holds.get(e) ?? 0, t));
    }
    move(e, t, n) {
      ((this.dbgMove.x = e), (this.dbgMove.y = t), (this.dbgMove.t = n));
    }
    update(e, t) {
      let n = this.prev;
      if (
        ((this.prev = this.cur),
        (this.cur = n),
        this.cur.clear(),
        this.holds.size)
      )
        for (let [t, n] of this.holds) {
          n > 0 && this.cur.add(t);
          let r = n - e;
          r <= -0.001 ? this.holds.delete(t) : this.holds.set(t, r);
        }
      let r = this.ctx.input;
      ((this.moveX = t ? r.axis(`moveX`) : 0),
        (this.moveY = t ? r.axis(`moveY`) : 0),
        this.dbgMove.t > 0 &&
          ((this.dbgMove.t -= e),
          (this.moveX = this.dbgMove.x),
          (this.moveY = this.dbgMove.y)),
        t || this.cur.clear(),
        (this.enabled = t));
    }
    enabled = !0;
    camDown(e) {
      return this.ctx.input.down(e) || this.cur.has(e);
    }
    camPressed(e) {
      return (
        this.ctx.input.pressed(e) || (this.cur.has(e) && !this.prev.has(e))
      );
    }
    down(e) {
      return this.enabled && (this.ctx.input.down(e) || this.cur.has(e));
    }
    pressed(e) {
      return (
        this.enabled &&
        (this.ctx.input.pressed(e) || (this.cur.has(e) && !this.prev.has(e)))
      );
    }
  },
  Ps = class e {
    name = `player`;
    position = new R();
    heading = 0;
    velocity = new R();
    health = 100;
    maxHealth = 100;
    armor = 0;
    ammo = { fists: 0, bat: 0, pistol: 0, smg: 0 };
    body;
    object = new _();
    character = `jie`;
    ctx;
    cam;
    act;
    fx;
    overlay;
    shelter;
    heroLight = new Po();
    anim;
    model;
    combat;
    models = {};
    rocketbox = !0;
    st = `foot`;
    stT = 0;
    control = !0;
    grounded = !0;
    vy = 0;
    airTime = 0;
    apexY = 0;
    coyote = 0;
    jumpBuf = 0;
    visY = 0;
    hSpeed = 0;
    lastHeading = 0;
    turnRate = 0;
    accelS = 0;
    lastSpeed = 0;
    aimWanted = !1;
    snapToAim = !1;
    _aimW = 0;
    _sprinting = !1;
    hitStop = 0;
    moveInputHeading = null;
    _weapon = `fists`;
    vehId = -1;
    seat = null;
    seatVisible = !0;
    vehPose = `drive`;
    sinceDamage = 99;
    knockCool = 0;
    invuln = 0;
    god = !1;
    idleT = 0;
    debugRain = -1;
    debugProp = null;
    saveT = 0;
    swimT = 0;
    climbFrom = new R();
    climbTo = new R();
    climbPeak = 0;
    climbDur = 0.55;
    supportKind = as;
    roofBody = null;
    slope = 0;
    slideX = 0;
    slideZ = 0;
    rollT = 0;
    rollDur = 0.62;
    rollSpeed = 0;
    moveMag = 0;
    lastHitFront = !0;
    lastHitT = -10;
    gradeY = 0;
    rmTmp = { x: 0, z: 0, yaw: 0 };
    rmW = 0;
    nudgeSpeed = 0;
    nudgeT = 0;
    climbEdge = new R();
    climbPrev = new R();
    landLock = 0;
    jumpFromY = 0;
    jumped = !1;
    exitGrace = 0;
    exitBody = null;
    vehHitT = 0;
    impactVehSpeed = 0;
    impactT = -10;
    stumbleCool = 0;
    slowmo = !1;
    life = null;
    bumpT = new Map();
    initDone = !1;
    pendingChar = null;
    showcaseModel = null;
    showcaseCache = {};
    wantShown = null;
    loadingHero = {};
    rocketboxOk = !1;
    heroIdleT = 0;
    debugPose = null;
    perfAcc = 0;
    perfN = 0;
    perfMs = 0;
    t0 = 0;
    push = bt();
    cp = new R();
    qs = [];
    qb = [];
    v1 = new R();
    v2 = new R();
    constructor(e, t) {
      ((this.ctx = e),
        (this.cam = t),
        (this.act = new Ns(e)),
        Ms(),
        (this.fx = new Za(e)),
        (this.overlay = new Zo(e)),
        (this.shelter = new $o(e)),
        (this.object.name = `player`),
        (this.body = {
          id: Xe(),
          kind: `player`,
          owner: `player`,
          x: 0,
          y: 0,
          z: 0,
          heading: 0,
          halfW: es,
          halfL: es,
          radius: es,
          height: ns,
          vx: 0,
          vz: 0,
          mass: 80,
          active: !0,
          onImpact: (e, t, n) => this.onImpact(e, t, n),
          onDamage: (e) => this.damage(e),
        }),
        (this.god = e.params.get(`god`) === `1`),
        e.params.get(`charlm`) === `0` && (ko.uCharLm.value = 0),
        e.params.get(`mocap`) !== `0` && vn().catch(() => {}),
        (this.rocketbox = e.params.get(`heroes`) !== `procedural`),
        this.rocketbox && Lo([this.bootCharacter()]));
    }
    bootCharacter() {
      let e = this.ctx.params.get(`char`);
      if (e === `wen` || e === `jie`) return e;
      if (this.pendingChar) return this.pendingChar;
      let t = this.ctx.state?.data?.player?.character;
      return t === `wen` || t === `jie` ? t : `jie`;
    }
    get mode() {
      switch (this.st) {
        case `vehicle`:
          return `vehicle`;
        case `dead`:
          return `dead`;
        case `busted`:
          return `busted`;
        default:
          return this.control ? `foot` : `cutscene`;
      }
    }
    get controlEnabled() {
      return this.control;
    }
    get vehicleId() {
      return this.vehId;
    }
    get weapon() {
      return this._weapon;
    }
    set weapon(e) {
      this.switchWeapon(e);
    }
    get magazine() {
      return this.combat?.mag ?? { fists: 0, bat: 0, pistol: 0, smg: 0 };
    }
    get ownedWeapons() {
      return this.combat?.owned ?? [`fists`];
    }
    get aiming() {
      return this.aimWanted && this.st === `foot`;
    }
    get sprinting() {
      return this._sprinting;
    }
    get reloading() {
      return this.combat ? Math.max(0, this.combat.reloadT) : 0;
    }
    get aimWeight() {
      return this._aimW;
    }
    get moveSpeed() {
      return this.st === `vehicle` ? 0 : this.hSpeed;
    }
    get eyeHeight() {
      return this.model ? this.model.eyeHeight : 1.55;
    }
    get onFoot() {
      return this.st === `foot`;
    }
    get gaitBob() {
      return this.anim ? this.anim.gaitBob : 0;
    }
    get gaitRoll() {
      return this.anim ? this.anim.gaitRoll : 0;
    }
    camAct = {
      down: (e) => this.act.camDown(e),
      pressed: (e) => this.act.camPressed(e),
    };
    async init() {
      let e = this.ctx;
      if (
        (this.fx.init(),
        this.overlay.init(),
        (this.character = this.bootCharacter()),
        this.pendingChar)
      ) {
        let t = e.state.data;
        ((t.player = { ...(t.player ?? {}), character: this.pendingChar }),
          e.state.scheduleSave(1));
      }
      let t = performance.now(),
        n = this.character === `jie` ? `wen` : `jie`;
      if (this.rocketbox)
        try {
          (Object.assign(this.models, await Jo(e, [this.character], 3e4)),
            (this.rocketboxOk =
              this.models[this.character]?.kind === `rocketbox`));
        } catch (e) {
          (e instanceof Error &&
            e.message.startsWith(`heroes: not loaded after`)
            ? console.warn
            : console.error)(
            `[player] Rocketbox heroes unavailable — using the procedural heroes`,
            e,
          );
        }
      let r = this.models[this.character] ? [] : [this.character, n];
      if (
        (r.length &&
          ((await Promise.all(r.map((e) => To(e).catch(() => wo(e))))).forEach(
            (e) => (this.models[e.id] = e),
          ),
          await e.yieldFrame()),
        console.log(
          `[init] player: ${this.character}${this.models[n] ? ` + ${n}` : ``} (${this.models[this.character].kind}) ready in ${Math.round(performance.now() - t)}ms`,
        ),
        await e.yieldFrame(),
        (this.model = this.models[this.character]),
        this.object.add(this.model.root),
        (this.anim = new Pa(this.model.rig)),
        (this.anim.onFootstep = (e, t) => this.footstep(e, t)),
        e.params.get(`mocap`) !== `0`)
      ) {
        let t = performance.now(),
          n = await this.anim.attach(
            [`jie`, `wen`]
              .filter((e) => this.models[e])
              .map((e) => ({ rig: this.models[e].rig, rc: this.models[e].rc })),
            { groundAt: (t, n, r) => e.groundAt(t, n, r) },
          );
        console.log(
          `[init] player: mocap ${n ? `ready` : `unavailable`} in ${Math.round(performance.now() - t)}ms`,
        );
      }
      ((this.combat = new za(this)),
        this.restoreLoadout(),
        e.state.onBeforeSave(() => this.writeLoadout()));
      for (let [e, t] of this.pendingWeapons.splice(0)) this.giveWeapon(e, t);
      (e.scene.add(this.object), e.dynamics.add(this.body));
      let i = e.params.get(`weapon`);
      (e.params.get(`arm`) === `1` &&
        (this.giveWeapon(`bat`, 0),
        this.giveWeapon(`pistol`, 96),
        this.giveWeapon(`smg`, 240)),
        (i === `bat` || i === `pistol` || i === `smg`) &&
          (this.giveWeapon(i, i === `bat` ? 0 : 120), this.switchWeapon(i)));
      let a = e.params.get(`spawn`)?.split(`,`).map(Number),
        o = e.plan.spawns.start,
        s = a && a.length >= 2 && a.every(Number.isFinite);
      (this.teleport(
        s ? a[0] : o.x,
        s ? a[1] : o.z,
        s && a.length > 2 ? a[2] : o.heading,
      ),
        this.cam.setYaw(this.heading),
        (this.initDone = !0));
    }
    prewarm() {
      let e = [];
      for (let t of Object.values(this.models))
        t && t !== this.model && !t.root.parent && e.push(t.root);
      return e;
    }
    start() {
      let e = this.ctx;
      (this.cam.follow(this.object, `foot`),
        e.events.on(`player:spawned`, () => {
          ((this.spawned = !0), this.restoreSavedPosition());
        }));
      let t = () => (this.saveSoon = 0.8);
      (e.events.on(`mission:completed`, t),
        e.events.on(`mission:failed`, t),
        e.events.on(`mrt:travel`, t));
    }
    saveSoon = 0;
    spawned = !1;
    vehTeleport = !1;
    restoreSavedPosition() {
      let t = this.ctx;
      if (t.params.has(`spawn`) || t.params.has(`mission`)) return;
      let n = t.state.data.pos;
      if (
        !n ||
        !Number.isFinite(n.x) ||
        !Number.isFinite(n.z) ||
        !t.plan.inCity(n.x, n.z) ||
        Math.hypot(n.x - this.position.x, n.z - this.position.z) < 2
      )
        return;
      let r = e.sanitizeWhere(t.state.data.player?.at),
        i = t.plan.surfaceAt(n.x, n.z),
        a = n.y,
        o = r.y ?? (typeof a == `number` && Number.isFinite(a) ? a : void 0),
        s = o !== void 0 && t.statics.floorAt(n.x, n.z, o, 0.6) > -1 / 0,
        c = i === `road` || i === `sidewalk`,
        l =
          r.veh && c ? this.parkRide(n.x, n.z, r.veh.kind, r.veh.color) : null,
        u = n;
      l
        ? (u = l)
        : ((i === `lot` && !s) || i === `water` || (i === `road` && !s)) &&
          (u = t.plan.snapToSidewalk(n.x, n.z));
      let d = l ? l.facing : (n.heading ?? this.heading);
      (this.teleport(u.x, u.z, d, u === n ? o : void 0),
        r.veh && !l && !c && this.parkBeside(r.veh.kind, r.veh.color),
        this.cam.setYaw(this.heading),
        t.events.emit(`player:respawned`, {
          pos: this.position.clone(),
          reason: `load`,
        }));
    }
    static RIDES = new Set([
      `scooter`,
      `motorcycle`,
      `superbike`,
      `sedan`,
      `taxi`,
      `suv`,
      `van`,
      `sports`,
      `truck`,
    ]);
    static sanitizeWhere(t) {
      let n = {};
      if (!t || typeof t != `object`) return n;
      let r = t;
      typeof r.y == `number` &&
        Number.isFinite(r.y) &&
        Math.abs(r.y) < 1e3 &&
        (n.y = r.y);
      let i = r.veh;
      return (
        i &&
          typeof i == `object` &&
          typeof i.kind == `string` &&
          e.RIDES.has(i.kind) &&
          ((n.veh = { kind: i.kind }),
          typeof i.color == `number` &&
            Number.isFinite(i.color) &&
            i.color >= 0 &&
            i.color <= 16777215 &&
            (n.veh.color = Math.floor(i.color))),
        n
      );
    }
    writeWhere(t) {
      let n = this.ctx.state;
      if (n.resetting) return;
      let r;
      if (this.st === `vehicle` && this.vehId >= 0)
        try {
          let t = this.ctx.vehicles.get(this.vehId);
          t &&
            !t.destroyed &&
            e.RIDES.has(t.kind) &&
            (r = { kind: t.kind, color: t.color });
        } catch {}
      let i = n.data;
      i.player = { ...(i.player ?? {}), at: r ? { y: t, veh: r } : { y: t } };
    }
    parkRide(e, t, n, r) {
      let i = this.ctx,
        a = i.plan,
        o;
      try {
        o = i.vehicles.specs[n];
      } catch {}
      if (!o || typeof i.vehicles.spawn != `function`) return null;
      let s = a.snapToSidewalk(e, t),
        c = s.road;
      if (!c) return null;
      let l = Math.sign((c.axis === `x` ? s.z : s.x) - c.at) || 1,
        u = !!o.twoWheeler,
        d = u ? c.halfWidth - 0.5 : c.halfWidth - o.halfW - 0.3,
        f = c.halfWidth + (c.halfTotal - c.halfWidth) * 0.5,
        p = c.axis === `x` ? s.x : s.z,
        m = u ? 5 : 9,
        h = Math.max(o.halfW, o.halfL) + 0.3;
      for (let e of ks) {
        let t = p + e;
        if (t < c.from + c.halfTotal + 6 || t > c.to - c.halfTotal - 6)
          continue;
        let o = c.axis === `x` ? t : c.at + l * d,
          s = c.axis === `x` ? c.at + l * d : t,
          u = c.axis === `x` ? t : c.at + l * f,
          g = c.axis === `x` ? c.at + l * f : t;
        if (a.surfaceAt(u, g) !== `sidewalk`) continue;
        let _ = !1;
        for (let e = -1; e <= 1 && !_; e++)
          _ = !!a.nodeAt(
            c.axis === `x` ? o + e * m : o,
            c.axis === `x` ? s : s + e * m,
          );
        if (
          _ ||
          i.statics.overlapsRect(
            o - h * 0.7,
            s - h * 0.7,
            o + h * 0.7,
            s + h * 0.7,
            0.6,
          ) ||
          i.dynamics.query(
            o,
            s,
            h + 1.2,
            this.qb,
            (e) => e.kind === `vehicle`,
          ) > 0
        )
          continue;
        let v = Ge(c.axis, l, a.side);
        try {
          i.vehicles.spawn(
            n,
            o,
            s,
            v,
            r === void 0 ? { driver: `none` } : { driver: `none`, color: r },
          );
        } catch (e) {
          return (
            console.warn(`[player] could not park the saved ride`, e),
            null
          );
        }
        return { x: u, z: g, facing: Math.atan2(o - u, -(s - g)) };
      }
      return null;
    }
    parkBeside(e, t) {
      let n = this.ctx,
        r;
      try {
        r = n.vehicles.specs[e];
      } catch {}
      if (!r?.twoWheeler || typeof n.vehicles.spawn != `function`) return;
      let i = this.heading,
        a = Math.cos(i),
        o = Math.sin(i);
      for (let s of [1, -1]) {
        let c = this.position.x + a * s * 1.5,
          l = this.position.z + o * s * 1.5,
          u = r.halfL * 0.7;
        if (
          !n.statics.overlapsRect(
            c - u,
            l - u,
            c + u,
            l + u,
            this.position.y + 0.6,
          ) &&
          !(
            n.dynamics.query(
              c,
              l,
              r.halfL + 0.6,
              this.qb,
              (e) => e.kind === `vehicle`,
            ) > 0
          )
        ) {
          try {
            n.vehicles.spawn(
              e,
              c,
              l,
              i,
              t === void 0 ? { driver: `none` } : { driver: `none`, color: t },
            );
          } catch (e) {
            console.warn(`[player] could not park the saved ride`, e);
          }
          return;
        }
      }
    }
    writeLoadout() {
      let e = this.ctx.state;
      if (e.resetting || !this.combat) return;
      let t = e.data,
        n = this.combat.mag;
      t.player = {
        ...(t.player ?? {}),
        loadout: {
          owned: this.combat.owned.filter((e) => e !== `fists`),
          ammo: { pistol: this.ammo.pistol, smg: this.ammo.smg },
          mag: { pistol: n.pistol, smg: n.smg },
          armor: Math.round(this.armor),
          weapon: this._weapon,
        },
      };
    }
    static sanitizeLoadout(e) {
      if (!e || typeof e != `object` || Array.isArray(e)) return null;
      let t = e,
        n = Array.isArray(t.owned)
          ? [
              ...new Set(
                t.owned.filter(
                  (e) => e === `bat` || e === `pistol` || e === `smg`,
                ),
              ),
            ]
          : [],
        r = (e, t) =>
          typeof e == `number` && Number.isFinite(e)
            ? V(Math.floor(e), 0, t)
            : 0,
        i = (e) => (e && typeof e == `object` && !Array.isArray(e) ? e : {}),
        a = i(t.ammo),
        o = i(t.mag),
        s = (e) => n.includes(e),
        c = t.weapon;
      return {
        owned: n,
        ammo: {
          pistol: s(`pistol`) ? r(a.pistol, 999) : 0,
          smg: s(`smg`) ? r(a.smg, 1999) : 0,
        },
        mag: {
          pistol: s(`pistol`) ? r(o.pistol, Ia.pistol.mag) : 0,
          smg: s(`smg`) ? r(o.smg, Ia.smg.mag) : 0,
        },
        armor: r(t.armor, 100),
        weapon:
          (c === `bat` || c === `pistol` || c === `smg`) && s(c) ? c : `fists`,
      };
    }
    restoreLoadout() {
      let t = e.sanitizeLoadout(this.ctx.state.data.player?.loadout);
      if (t) {
        for (let e of t.owned) this.combat.give(e, 0);
        for (let e of [`pistol`, `smg`])
          ((this.ammo[e] = t.ammo[e]), (this.combat.mag[e] = t.mag[e]));
        ((this.armor = t.armor),
          (this._weapon = t.weapon),
          this.ctx.events.emit(`player:weapon`, {
            weapon: this._weapon,
            ammo: this.ammo[this._weapon],
          }));
      }
    }
    teleport(e, t, n, r) {
      let i = this.ctx,
        a = i.plan;
      if (!Number.isFinite(e) || !Number.isFinite(t)) return;
      if (this.st === `vehicle` && !this.vehTeleport && this.initDone) {
        let a = i.vehicles,
          o;
        try {
          o = this.vehId >= 0 ? a.get(this.vehId) : void 0;
        } catch {}
        if (
          o &&
          !o.destroyed &&
          r === void 0 &&
          typeof a.teleport == `function`
        ) {
          this.vehTeleport = !0;
          try {
            a.teleport(
              o,
              e,
              t,
              n !== void 0 && Number.isFinite(n) ? n : o.heading,
            );
          } catch (e) {
            console.warn(`[player] vehicle teleport failed`, e);
          } finally {
            this.vehTeleport = !1;
          }
          if (this.st === `vehicle`) {
            this.cam.snapNext = !0;
            return;
          }
        }
        try {
          a.ejectPlayer?.();
        } catch {}
        this.st === `vehicle` && this.detachFromVehicle();
      }
      let o = Math.hypot(e - this.position.x, t - this.position.z),
        s = a.surfaceAt(e, t) === `water`,
        c;
      c =
        r !== void 0 && Number.isFinite(r)
          ? r
          : o < 4 && this.initDone && this.st !== `vehicle`
            ? this.position.y
            : a.groundHeight(e, t);
      let l = i.groundAt(e, t, c, 0.55),
        u = a.waterLevelAt(e, t),
        d = s && l <= u + 0.05;
      (this.initDone &&
        this.st === `foot` &&
        o > 0.004 &&
        o < 0.5 &&
        ((this.nudgeSpeed = Math.min(
          4,
          o / Math.max(1 / 120, i.time.dt || 1 / 60),
        )),
        (this.nudgeT = 0.12)),
        this.position.set(e, d ? u - 1.25 : l, t),
        n !== void 0 &&
          Number.isFinite(n) &&
          ((this.heading = n),
          o > 12 && this.st !== `vehicle` && this.cam.setYaw(n, 0.2)),
        this.velocity.set(0, 0, 0),
        (this.vy = 0),
        (this.hSpeed = 0),
        (this.grounded = !d),
        (this.visY = this.position.y),
        (this.lastHeading = this.heading),
        this.exitOfs?.set(0, 0, 0),
        this.st === `swim` && !d && this.setSt(`foot`),
        d && (this.st === `foot` || this.st === `climb`) && this.setSt(`swim`),
        this.st !== `vehicle` &&
          (this.object.position.set(e, this.position.y, t),
          this.object.rotation.set(0, -this.heading, 0)),
        this.syncBody(),
        (o > 3 || !this.initDone) &&
          ((this.cam.snapNext = !0),
          this.shelter.reset(e, this.position.y, t)));
    }
    damage(t) {
      if (
        this.st === `dead` ||
        this.st === `busted` ||
        !(t.amount > 0) ||
        this.invuln > 0
      )
        return;
      let n = this.ctx,
        r = t.amount;
      if (
        (t.source === `vehicle` &&
          this.st !== `vehicle` &&
          (this.vehHitT > 0 ||
            ((this.vehHitT = 0.8),
            (r =
              this.exitGrace > 0
                ? Math.min(r, 60)
                : n.time.elapsed - this.impactT < 0.25
                  ? e.vehicleHitDamage(this.impactVehSpeed)
                  : Math.min(r, 45)),
            r <= 0))) ||
        (t.source === `explosion` &&
          this.exitGrace > 0.9 &&
          (r = Math.min(r, 55)),
        this.st === `vehicle` &&
          (t.source === `vehicle` ||
          t.source === `collision` ||
          t.source === `crash`
            ? (r = Math.min(r, Math.max(0, this.health - 1)))
            : t.source === `explosion` && (r = Math.min(r, 55)),
          r <= 0))
      )
        return;
      let i = r;
      if (this.armor > 0 && t.source !== `fall` && t.source !== `drown`) {
        let e = Math.min(this.armor, r * 0.7);
        ((this.armor = Math.max(0, this.armor - e)), (r -= e));
      }
      (this.god || (this.health = Math.max(0, this.health - r)),
        (this.sinceDamage = 0));
      let a = NaN,
        o = t.dir,
        s = t.point,
        c = 0,
        l = 0;
      if (
        (s && ((c = s.x - this.position.x), (l = s.z - this.position.z)),
        o && Math.hypot(o.x, o.z) > 0.001 && ((c = -o.x), (l = -o.z)),
        Math.hypot(c, l) > 0.001 && (a = z(Math.atan2(c, -l) - this.cam.yaw)),
        this.overlay.damage(i, a),
        this.cam.shake(Math.min(0.55, 0.12 + i * 0.012)),
        n.input.rumble(Math.min(1, 0.3 + i * 0.02), 120),
        (this.st === `foot` || this.st === `getup`) && Math.hypot(c, l) > 0.001)
      ) {
        let e = z(Math.atan2(c, -l) - this.heading);
        ((this.lastHitFront = Math.abs(e) < Math.PI / 2),
          (this.lastHitT = n.time.elapsed));
        let r =
          t.source !== `vehicle` &&
          t.source !== `explosion` &&
          t.source !== `fall`
            ? i / 22
            : 0.5;
        this.anim.hitFrom(
          Math.sin(e),
          -Math.cos(e),
          this.combat.striking ? Math.min(0.5, r) : V(r, 0.35, 1.2),
        );
      }
      if (
        (n.events.emit(`player:damaged`, {
          amount: i,
          health: this.health,
          source: t.source,
        }),
        this.health <= 0)
      ) {
        this.wasted(t.source);
        return;
      }
      if (
        (t.source === `explosion` || t.source === `vehicle`) &&
        i >= 14 &&
        this.st !== `vehicle`
      ) {
        let e = Math.min(9, 3 + i * 0.12),
          t = Math.hypot(c, l) || 1;
        this.knockdown((-c / t) * e, (-l / t) * e, 2.5 + e * 0.3);
      }
    }
    heal(e) {
      this.st !== `dead` &&
        (this.health = Math.min(this.maxHealth, this.health + Math.max(0, e)));
    }
    pendingWeapons = [];
    giveWeapon(e, t) {
      if (!Ia[e]) return;
      if (!this.combat) {
        this.pendingWeapons.push([e, t]);
        return;
      }
      let n = this.combat.owned.includes(e);
      (this.combat.give(e, t),
        !n &&
          (this._weapon === `fists` ||
            Ia[e].damage * (Ia[e].melee ? 1 : 2) > Ia[this._weapon].damage) &&
          this.switchWeapon(e),
        this.ctx.events.emit(`player:weapon`, {
          weapon: this._weapon,
          ammo: this.ammo[this._weapon],
        }));
    }
    switchWeapon(e) {
      Ia[e] &&
        (e === `fists` || this.combat?.owned.includes(e)) &&
        e !== this._weapon &&
        ((this._weapon = e),
        this.combat && ((this.combat.reloadT = 0), (this.combat.hipFire = 0)),
        this.anim && this.st === `foot` && this.anim.play(`draw`),
        this.ctx.events.emit(`player:weapon`, {
          weapon: e,
          ammo: this.ammo[e],
        }));
    }
    enterVehicle(e, t, n, r) {
      let i = this.ctx;
      if (this.st === `dead` || this.st === `busted`) return;
      (this.st === `vehicle` && this.vehId !== e && this.detachFromVehicle(),
        this.combat.cancel(),
        (this.aimWanted = !1),
        (this.vehId = e),
        (this.seat = t),
        (this.vehPose = n),
        (this.st = `vehicle`),
        (this.stT = 0),
        (this.body.active = !1));
      let a = null;
      try {
        a = i.vehicles.get(e) ?? null;
      } catch {}
      let o = !!a && a.object === t,
        s = a?.kind ?? (n === `ride` ? `scooter` : `sedan`),
        c = t.userData?.riderStyle;
      this.anim.rideStyle =
        c === `moto` || c === `sport` || c === `scooter` ? c : An(s);
      let l = 0.06;
      (o &&
        (l =
          (a?.spec?.twoWheeler ? 0.78 : (a?.spec?.height ?? 1.4) * 0.42) +
          0.06),
        this.object.updateWorldMatrix(!0, !1),
        this.object.getWorldPosition(this.v1),
        this.object.getWorldQuaternion(this.seatQ0),
        t.add(this.object));
      let u = t.userData?.pelvis,
        d =
          n === `ride` ? (this.anim.rideStyle === `scooter` ? 0.05 : 0.02) : 0;
      (this.seatTarget.set(0, l - this.model.rig.hipHeight, d),
        Array.isArray(u) &&
          u.length >= 3 &&
          u.every((e) => Number.isFinite(e)) &&
          this.seatTarget.add(this.v2.set(u[0], u[1], u[2])),
        this.anim.seatHints(t.userData, this.seatTarget),
        t.updateWorldMatrix(!0, !1),
        this.seatFrom.copy(this.v1),
        t.worldToLocal(this.seatFrom),
        t.getWorldQuaternion(this.seatQ1),
        this.seatQ0.premultiply(this.seatQ1.invert()),
        (this.seatBlend =
          this.seatFrom.distanceTo(this.seatTarget) < 4 ? 0 : 1),
        this.object.position.copy(
          this.seatBlend >= 1 ? this.seatTarget : this.seatFrom,
        ),
        this.object.quaternion.copy(
          this.seatBlend >= 1 ? this.seatQ1.identity() : this.seatQ0,
        ),
        (this.seatVisible = n === `ride` || !o),
        (this.object.visible = this.seatVisible),
        this.anim.setState(n === `ride` ? `ride` : `drive`, 0.3));
      let f = a?.object ?? t,
        p = n === `ride` || !!a?.spec?.twoWheeler;
      this.cam.follow(
        f,
        r ?? (s === `bus` || s === `garbage` ? `bus` : p ? `scooter` : `car`),
      );
    }
    handMatrix(e, t) {
      let n = this.model.rig.bones[e === `left` ? 7 : 10];
      return (n.updateWorldMatrix(!0, !1), t.copy(n.matrixWorld));
    }
    setSeatVisible(e) {
      ((this.seatVisible = e),
        this.st === `vehicle` && (this.object.visible = e));
    }
    exitVehicle(t, n, r, i) {
      let a = this.ctx;
      if (this.st === `dead` || this.st === `busted`) {
        this.st === `dead` && this.vehId >= 0 && this.detachFromVehicle();
        return;
      }
      if (this.st !== `vehicle`) return;
      let o = this.vehId,
        s = null;
      try {
        s = a.vehicles.get(o) ?? null;
      } catch {}
      let c = s?.body?.vx ?? this.velocity.x,
        l = s?.body?.vz ?? this.velocity.z,
        u = Math.hypot(c, l);
      this.object.getWorldPosition(this.seatWorld);
      let d = Number.isFinite(s?.y) ? s.y : this.seatWorld.y - 0.8;
      if (
        (a.scene.add(this.object),
        (this.object.visible = !0),
        (this.vehId = -1),
        (this.seat = null),
        (this.st = `foot`),
        (this.stT = 0),
        (this.body.active = !0),
        this.anim.setState(`foot`, 0.3),
        this.teleport(t, n, r, d),
        this.object.quaternion.setFromAxisAngle(
          this.v2.set(0, 1, 0),
          -this.heading,
        ),
        this.exitOfs.copy(this.seatWorld).sub(this.position),
        this.exitOfs.lengthSq() > 16 && this.exitOfs.set(0, 0, 0),
        this.cam.follow(this.object, `foot`),
        (this.cam.snapNext = !1),
        (this.exitGrace = 1),
        (this.exitBody = s?.body ?? null),
        u > 7 && !i?.noTumbleDamage)
      ) {
        ((this.knockCool = 0), this.knockdown(c * 0.65, l * 0.65, 2.5));
        let t = e.bailDamage(u);
        t > 0 && this.damage({ amount: t, source: `bail` });
      }
    }
    static bailDamage(e) {
      let t = e * 3.6;
      return t < 30 ? 0 : V((t - 25) * 0.4, 0, 35);
    }
    buff(e, t) {
      return e !== `caffeine` || !(t > 0)
        ? !1
        : ((this.caffeine = Math.max(this.caffeine, Math.min(600, t))), !0);
    }
    caffeine = 0;
    emote(e) {
      return this.st !== `foot` || !Oi.has(e)
        ? !1
        : (this.combat.cancel(), this.anim.play(e), !0);
    }
    setControlEnabled(e) {
      ((this.control = e), e || ((this.aimWanted = !1), this.combat?.cancel()));
    }
    knockdown(e, t, n = 3) {
      if (
        this.st === `vehicle` ||
        this.st === `dead` ||
        this.st === `busted` ||
        this.st === `swim` ||
        this.knockCool > 0
      )
        return;
      this.knockCool = 2.2;
      let r = Math.sin(this.heading),
        i = -Math.cos(this.heading);
      ((this.anim.inp.fallBack = e * r + t * i <= 0),
        this.velocity.set(e, 0, t),
        (this.vy = n),
        (this.grounded = !1),
        (this.apexY = this.position.y),
        this.combat.cancel(),
        (this.aimWanted = !1),
        this.setSt(`knockdown`),
        this.ctx.audio.play(`land`, {
          x: this.position.x,
          y: this.position.y,
          z: this.position.z,
          volume: 0.9,
        }));
    }
    wasted(e) {
      if (this.st === `dead`) return;
      let t = this.ctx,
        n = this.cam.yaw;
      (this.st === `vehicle` && this.detachFromVehicle(),
        (this.health = 0),
        this.combat.cancel(),
        (this.aimWanted = !1));
      let r = t.time.elapsed - this.lastHitT < 0.3;
      (this.st !== `knockdown` &&
        (this.anim.inp.fallBack = r ? this.lastHitFront : Math.random() < 0.6),
        this.setSt(`dead`),
        (this.body.active = !1),
        (this.life = { kind: `wasted`, t: 0, phase: 0 }),
        this.cam.setYaw(n, this.cam.pitch),
        this.cam.follow(this.object, `cinematic`),
        (this.cam.cineLock = !0),
        (this.slowmo = !0),
        t.events.emit(`player:died`, { cause: e }),
        t.audio.play(`wasted`, { ui: !0 }),
        t.audio.duck(0.8, 5),
        t.state.stat(`deaths`));
    }
    busted() {
      if (this.st === `dead` || this.st === `busted`) return;
      let e = this.ctx,
        t = this.cam.yaw;
      (this.st === `vehicle` && this.detachFromVehicle(),
        this.combat.cancel(),
        (this.aimWanted = !1),
        this.velocity.set(0, 0, 0),
        this.setSt(`busted`),
        (this.life = { kind: `busted`, t: 0, phase: 0 }),
        this.cam.setYaw(t, this.cam.pitch),
        this.cam.follow(this.object, `cinematic`),
        (this.cam.cineLock = !0),
        e.events.emit(`player:busted`),
        e.audio.play(`busted`, { ui: !0 }),
        e.audio.duck(0.8, 5),
        e.state.stat(`busted`));
    }
    setCharacter(e, t) {
      if (e !== `jie` && e !== `wen`) return;
      let n = !!t?.preview;
      if (!this.initDone) {
        if (n) return;
        ((this.pendingChar = e), (this.character = e));
        return;
      }
      if (
        ((this.wantShown = e),
        !n && e === this.character && this.model?.id === e)
      )
        return;
      if (this.model?.id !== e) {
        let t = this.models[e];
        t ? this.showModel(t) : this.prepareCharacter(e);
      }
      if (n || e === this.character) return;
      this.character = e;
      let r = this.ctx.state.data;
      ((r.player = { ...(r.player ?? {}), character: e }),
        this.ctx.state.scheduleSave(0.5),
        this.ctx.events.emit(`player:character`, { id: e }));
    }
    get shownCharacter() {
      return this.model?.id ?? this.character;
    }
    showModel(e) {
      (this.model && this.object.remove(this.model.root),
        this.object.add(e.root),
        (this.model = e),
        this.anim.bind(e.rig, e.rc),
        this.anim.setRig(e.rig));
    }
    prepareCharacter(e) {
      return (e !== `jie` && e !== `wen`) || this.models[e]
        ? Promise.resolve()
        : (this.loadingHero[e] ??= this.loadHero(e).finally(
            () => delete this.loadingHero[e],
          ));
    }
    async loadHero(e) {
      let t = this.ctx,
        n = performance.now(),
        r = null;
      if (this.rocketboxOk)
        try {
          r = await qo(t, e);
        } catch (t) {
          console.warn(
            `[player] Rocketbox ${e} unavailable — using the procedural body`,
            t,
          );
        }
      if (this.models[e]) {
        r?.dispose();
        return;
      }
      ((r ??= wo(e)), (this.models[e] = r), (this.heroIdleT = 0));
      try {
        let e = t.renderer.gl;
        for (let t of r.meshes) {
          let n = t.material;
          for (let t of [n.map, n.normalMap, n.roughnessMap, n.metalnessMap])
            t && e.initTexture(t);
        }
      } catch {}
      (this.anim?.bind(r.rig, r.rc),
        t.params.has(`debug`) &&
          console.info(
            `[player] ${e} (${r.kind}) loaded on demand in ${Math.round(performance.now() - n)} ms`,
          ),
        this.initDone &&
          this.wantShown === e &&
          this.model?.id !== e &&
          this.showModel(r));
    }
    releaseIdleHeroes() {
      for (let e of [`jie`, `wen`]) {
        let t = this.models[e];
        if (!(
          !t ||
          t === this.model ||
          t.kind !== `rocketbox` ||
          this.loadingHero[e] ||
          this.showcaseCache[e]
        )) {
          (delete this.models[e],
            this.anim.unbind(t.rig),
            t.root.removeFromParent());
          for (let e of t.meshes) e.skeleton?.dispose();
          (t.dispose(),
            Ro(e),
            this.ctx.params.has(`debug`) &&
              console.info(`[player] ${e} released (not in play)`));
        }
      }
    }
    update(e) {
      if (!this.initDone) return;
      this.t0 = performance.now();
      let t = this.ctx;
      ((this.stT += e),
        (this.knockCool -= e),
        (this.exitGrace = Math.max(0, this.exitGrace - e)),
        this.exitGrace <= 0 && (this.exitBody = null),
        (this.vehHitT -= e),
        (this.stumbleCool -= e),
        (this.invuln = Math.max(0, this.invuln - e)),
        (this.nudgeT -= e),
        (this.caffeine = Math.max(0, this.caffeine - e)),
        (this.sinceDamage += e));
      let n = this.control && !this.life;
      switch (
        (this.rocketboxOk &&
        this.control &&
        this.spawned &&
        this.models.jie &&
        this.models.wen
          ? ((this.heroIdleT += e),
            this.heroIdleT > ts &&
              ((this.heroIdleT = 0), this.releaseIdleHeroes()))
          : (this.heroIdleT = 0),
        this.act.update(e, n && this.st !== `vehicle`),
        (this.moveInputHeading = null),
        this.st)
      ) {
        case `vehicle`:
          this.updateVehicle(e);
          break;
        case `swim`:
          this.updateSwim(e);
          break;
        case `climb`:
          this.updateClimb(e);
          break;
        case `knockdown`:
        case `getup`:
        case `dead`:
        case `busted`:
          this.updateDown(e);
          break;
        default:
          this.updateFoot(e);
      }
      if (
        (this.st === `foot` && n
          ? this.combat.update(e)
          : (this.aimWanted || this.combat.hipFire > 0) &&
            ((this.aimWanted = !1), this.combat.cancel()),
        this.st !== `dead` &&
          this.sinceDamage > 6 &&
          this.health < 60 &&
          (this.health = Math.min(60, this.health + 2.5 * e)),
        this.overlay.setLowHealth(
          this.st === `dead` ? 0 : V((32 - this.health) / 22, 0, 1),
        ),
        this.life && this.updateLife(e),
        this.syncBody(),
        this.shelter.update(
          e,
          this.position.x,
          this.position.y,
          this.position.z,
        ),
        (this.saveT += e),
        this.saveSoon > 0 &&
          ((this.saveSoon -= e), this.saveSoon <= 0 && (this.saveT = 99)),
        this.saveT > 4 &&
          this.spawned &&
          (this.st === `foot` || this.st === `vehicle`))
      ) {
        let e = this.saveT > 50;
        this.saveT = 0;
        let n = {
          x: Math.round(this.position.x * 10) / 10,
          z: Math.round(this.position.z * 10) / 10,
          heading: Math.round(this.heading * 100) / 100,
          y: Math.round(this.position.y * 10) / 10,
        };
        ((t.state.data.pos = n),
          this.writeWhere(n.y),
          t.state.scheduleSave(e ? 0.3 : 4));
      }
      this.perfAcc += performance.now() - this.t0;
    }
    lateUpdate(e) {
      if (!this.initDone) return;
      let t = performance.now();
      (this.animate(e),
        this.updateHeroLight(e),
        this.fx.update(e),
        this.overlay.update(e));
      let n = this.st !== `vehicle` && this.cam.eyeDist < 0.6;
      this.model.setVisible(this.visOverride ?? !n);
      let r = this.perfAcc + (performance.now() - t);
      ((this.perfAcc = 0),
        (this.perfMs += r),
        this.perfN++,
        this.perfN >= 60 &&
          ((this.debugMs = this.perfMs / this.perfN),
          (this.perfMs = 0),
          (this.perfN = 0),
          (window.__playerPerf = { ms: +this.debugMs.toFixed(3) })));
    }
    debugMs = 0;
    debugWet = !1;
    charFill(e, t) {
      Number.isFinite(e) && Number.isFinite(t) && this.heroLight.want(e, t);
    }
    updateHeroLight(e) {
      let t = this.ctx,
        n = 0;
      try {
        n = this.debugRain >= 0 ? this.debugRain : (t.env.rain ?? 0);
      } catch {}
      let r = t.interiors;
      this.heroLight.update(
        e,
        r?.charFill,
        this.shelter.station,
        this.shelter.covered,
        this.anim.propShown(`umbrella`),
        n,
        this.debugWet,
      );
    }
    visOverride = null;
    forceVisible(e) {
      this.visOverride = e === !0 || e === !1 ? e : null;
    }
    forceHelmet = !1;
    seatTarget = new R();
    seatFrom = new R();
    seatQ0 = new y();
    seatQ1 = new y();
    seatBlend = 1;
    exitOfs = new R();
    seatWorld = new R();
    faceTarget = null;
    faceHeading(e) {
      this.faceTarget = e;
    }
    lunge(e) {
      let t = this.faceTarget ?? this.heading;
      ((this.velocity.x = Math.sin(t) * e),
        (this.velocity.z = -Math.cos(t) * e));
    }
    updateFoot(e) {
      let t = this.ctx,
        n = this.act,
        r = this.control && !this.life,
        i = n.moveX,
        a = n.moveY,
        o = Math.min(1, Math.hypot(i, a)),
        s = t.input.keys.has(`AltLeft`) && As,
        c = this.cam.yaw,
        l = Math.sin(c),
        u = Math.cos(c),
        d = l * a + u * i,
        f = -u * a + l * i,
        p = Math.hypot(d, f);
      (p > 1e-4 && ((d /= p), (f /= p)),
        o > 0.05 && (this.moveInputHeading = Math.atan2(d, -f)),
        o > 0.2 &&
          this.anim.action &&
          Oi.has(this.anim.action) &&
          this.anim.cancelAction(0.25));
      let m = this.aimWanted,
        h = r && n.down(`sprint`) && !m && o > 0.5;
      ((this._sprinting = h && this.hSpeed > 4), (this.moveMag = o));
      let g = 0;
      if (o > 0.05) {
        if (m) {
          let e = Math.atan2(d, -f) - this.cam.yaw,
            t = Math.cos(e),
            n = Math.sin(e),
            r = t >= 0 ? _s : ys;
          g = o / Math.sqrt((t * t) / (r * r) + (n * n) / (vs * vs));
        } else
          g = s
            ? ms * o
            : o < 0.55
              ? (o / 0.55) * ms
              : B(
                  ms,
                  h ? gs * (this.caffeine > 0 ? 1.18 : 1) : hs,
                  (o - 0.55) / 0.45,
                );
      }
      if (
        (this.combat.striking && (g *= this.anim.action === `kick` ? 0 : 0.3),
        this.combat.reloadT > 0 && (g = Math.min(g, 2.6)),
        this.rollT > 0)
      ) {
        this.rollT -= e;
        let t =
          this.rollSpeed * (0.55 + 0.45 * V(this.rollT / this.rollDur, 0, 1));
        ((this.velocity.x = Math.sin(this.heading) * t),
          (this.velocity.z = -Math.cos(this.heading) * t),
          this.integrate(e, !1));
        return;
      }
      this.landLock > 0 &&
        ((this.landLock -= e), (g *= this.landLock > 0.25 ? 0 : 0.35));
      let _ = this.anim.rootMotionActive;
      o > 0.05 && this.anim.stopping
        ? this.anim.cancelStop(0.18)
        : o <= 0.05 &&
          r &&
          !_ &&
          this.grounded &&
          !m &&
          this.faceTarget === null &&
          !this.combat.striking &&
          this.hSpeed > 0.9 &&
          this.hSpeed < 5.4 &&
          !this.anim.action &&
          this.anim.startStop(this.hSpeed);
      let v = 0,
        y = 0,
        b = !1;
      if (
        (this.faceTarget !== null &&
          ((this.heading = Ye(this.heading, this.faceTarget, 30, e)),
          (Math.abs(z(this.faceTarget - this.heading)) < 0.03 ||
            !this.combat.striking) &&
            (this.faceTarget = null)),
        this.combat.striking && this.faceTarget !== null)
      )
        g = 0;
      else if (m) {
        let t = this.cam.yaw;
        (this.snapToAim
          ? ((this.heading = Ye(this.heading, t, 40, e)),
            Math.abs(z(t - this.heading)) < 0.05 && (this.snapToAim = !1))
          : (this.heading = Ye(this.heading, t, 16, e)),
          (v = d * g),
          (y = f * g));
      } else if (o > 0.05 && !this.anim.rootMotionActive) {
        let t = Math.atan2(d, -f),
          n = z(t - this.heading),
          r = this.hSpeed,
          i = this.grounded
            ? r < 2
              ? bs
              : r < hs
                ? B(bs, xs, (r - 2) / 2.5)
                : B(xs, Ss, V((r - hs) / 2.5, 0, 1))
            : 3;
        (this.combat.striking && (i *= 0.3),
          Math.abs(n) > 2.5 && r > 4 && this.grounded && ((g *= 0.2), (i = 9)));
        let a = V(n * Je(18, e), -i * e, i * e);
        ((this.heading = z(this.heading + a)),
          (g *= Math.max(
            0.2,
            Math.cos(Math.min(Math.abs(z(t - this.heading)), Math.PI / 2)),
          )),
          (b = this.grounded));
      } else this.grounded && !this.anim.rootMotionActive && (b = !0);
      let x = g > this.hSpeed + 0.05,
        S =
          (this.grounded
            ? x
              ? this.hSpeed < 0.8
                ? Cs
                : this.hSpeed < 1.6
                  ? ws
                  : g > 4.8
                    ? Es
                    : Ts
              : g > 0.5
                ? Ds
                : Os
            : 2.5) * e;
      if (b) {
        let t = Math.sin(this.heading),
          n = -Math.cos(this.heading),
          r = this.velocity.x * t + this.velocity.z * n,
          i = this.velocity.x - t * r,
          a = this.velocity.z - n * r;
        r += V(g - r, -S, S);
        let o = Math.exp(-16 * e);
        ((this.velocity.x = t * r + i * o), (this.velocity.z = n * r + a * o));
      } else {
        let e = v - this.velocity.x,
          t = y - this.velocity.z,
          n = Math.hypot(e, t);
        n > S
          ? ((this.velocity.x += (e / n) * S), (this.velocity.z += (t / n) * S))
          : ((this.velocity.x = v), (this.velocity.z = y));
      }
      if (
        (r && n.pressed(`jump`) && (this.jumpBuf = 0.15),
        (this.jumpBuf -= e),
        (this.coyote -= e),
        this.jumpBuf > 0 &&
          (this.grounded || this.coyote > 0) &&
          !m &&
          !this.combat.striking &&
          ((this.jumpBuf = 0),
          (this.coyote = 0),
          this.tryClimb() ||
            ((this.vy = ps + Math.min(1, this.hSpeed / gs) * 0.7),
            (this.grounded = !1),
            (this.apexY = this.position.y),
            (this.jumpFromY = this.position.y),
            (this.airTime = 0),
            (this.jumped = !0),
            t.audio.play(`jump`, {
              x: this.position.x,
              y: this.position.y,
              z: this.position.z,
              volume: 0.6,
            })),
          this.st !== `foot`))
      )
        return;
      if (
        !this.grounded &&
        this.jumped &&
        this.airTime < 0.55 &&
        this.vy > -3 &&
        o > 0.3 &&
        r &&
        !m
      ) {
        let e = Math.atan2(d, -f);
        if (
          Math.abs(z(e - this.heading)) < 0.9 &&
          this.tryClimb(this.jumpFromY, !0)
        )
          return;
      }
      (this.grounded && (this.jumped = !1), this.integrate(e, !1));
      let C =
        o > 0.05 ||
        m ||
        this._weapon !== `fists` ||
        !this.grounded ||
        this.combat.striking ||
        n.down(`attack`);
      this.idleT = C ? 0 : this.idleT + e;
    }
    integrate(e, t) {
      let n = this.ctx,
        r = this.position;
      this.hitStop > 0 && !t && ((this.hitStop -= e), (e *= 0.15));
      let i = this.roofBody;
      (this.grounded && i && i.active && ((r.x += i.vx * e), (r.z += i.vz * e)),
        this.grounded
          ? this.slopeLimit(e, t)
          : ((this.slideX *= 1 - Math.min(1, e * 0.5)),
            (this.slideZ *= 1 - Math.min(1, e * 0.5))));
      let a = (this.velocity.x + this.slideX) * e,
        o = (this.velocity.z + this.slideZ) * e,
        s = this.anim.takeRootMotion(this.rmTmp);
      if (s.x || s.z || s.yaw) {
        if (t) ((a += s.x), (o += s.z));
        else {
          this.rmW = Math.min(1, this.rmW + e / 0.15);
          let t = this.rmW * this.rmW * (3 - 2 * this.rmW);
          ((a += (s.x + this.slideX * e - a) * t),
            (o += (s.z + this.slideZ * e - o) * t),
            e > 1e-4 &&
              this.rmW >= 1 &&
              ((this.velocity.x = a / e - this.slideX),
              (this.velocity.z = o / e - this.slideZ)));
        }
        this.heading = z(this.heading + s.yaw);
      } else this.rmW = 0;
      if (
        ((r.x += a),
        (r.z += o),
        this.cp.set(r.x, r.y + is, r.z),
        n.statics.resolveCircle(this.cp, es, 1.48, this.push),
        this.push.hit)
      ) {
        ((r.x = this.cp.x), (r.z = this.cp.z));
        let e = Math.hypot(this.push.x, this.push.z);
        if (e > 1e-5) {
          let n = this.push.x / e,
            r = this.push.z / e,
            i = this.velocity.x * n + this.velocity.z * r;
          i < 0 &&
            ((this.velocity.x -= n * i),
            (this.velocity.z -= r * i),
            t && i < -4 && this.cam.shake(0.2));
          let a = this.slideX * n + this.slideZ * r;
          a < 0 && ((this.slideX -= n * a), (this.slideZ -= r * a));
        }
      }
      if (
        (this.collideDynamics(e),
        !Number.isFinite(r.x) ||
          !Number.isFinite(r.z) ||
          !Number.isFinite(r.y) ||
          r.y < -30)
      ) {
        let e = n.plan.snapToSidewalk(
          Number.isFinite(r.x) ? r.x : 0,
          Number.isFinite(r.z) ? r.z : 0,
        );
        ((this.slideX = this.slideZ = 0), this.teleport(e.x, e.z, void 0, 0));
        return;
      }
      let c = this.supportHeight(r.x, r.z, r.y, is, !0);
      (this.grounded &&
        (c >= r.y - 0.5 && c <= r.y + rs
          ? ((r.y = c), (this.vy = 0), (this.coyote = 0.12))
          : c > r.y + rs && this.supportKind === as
            ? ((r.y = c), (this.vy = 0))
            : c < r.y - 0.5 &&
              ((this.grounded = !1),
              (this.apexY = r.y),
              (this.airTime = 0),
              (this.vy = Math.min(this.vy, 0)),
              (this.roofBody = null))),
        this.grounded ||
          ((this.vy = Math.max(-45, this.vy - fs * e)),
          (r.y += this.vy * e),
          (this.airTime += e),
          (this.apexY = Math.max(this.apexY, r.y)),
          r.y <= c && this.vy <= 0 && this.land(c)),
        (!this.grounded || this.supportKind !== cs) && (this.roofBody = null),
        n.plan.surfaceAt(r.x, r.z) === `water` &&
          r.y < n.plan.waterLevelAt(r.x, r.z) - 1 &&
          this.st !== `dead` &&
          this.enterWater(),
        (this.hSpeed = Math.hypot(this.velocity.x, this.velocity.z)));
      let l = z(this.heading - this.lastHeading) / Math.max(e, 0.001);
      ((this.turnRate = Re(this.turnRate, V(l, -12, 12), 12, e)),
        (this.lastHeading = this.heading),
        (this.accelS = Re(
          this.accelS,
          (this.hSpeed - this.lastSpeed) / Math.max(e, 0.001),
          8,
          e,
        )),
        (this.lastSpeed = this.hSpeed));
    }
    slopeLimit(e, t) {
      let n = this.ctx.plan,
        r = this.position,
        i = 0,
        a = 0,
        o = 0;
      if (this.supportKind === as && n.hillHeight(r.x, r.z) > 0.15) {
        let e = 0.45,
          t =
            (n.hillHeight(r.x + e, r.z) - n.hillHeight(r.x - e, r.z)) / (2 * e),
          s =
            (n.hillHeight(r.x, r.z + e) - n.hillHeight(r.x, r.z - e)) / (2 * e),
          c = Math.hypot(t, s);
        c > 1e-4 && ((i = Math.atan(c)), (a = t / c), (o = s / c));
      }
      if (((this.slope = i), i > 0.7 && !t)) {
        let e = this.velocity.x * a + this.velocity.z * o;
        if (e > 0) {
          let t = 1 - V((i - 0.7) / 0.21, 0, 1);
          ((this.velocity.x -= a * e * (1 - t)),
            (this.velocity.z -= o * e * (1 - t)));
        }
      }
      if (i > 0.785) {
        let t = fs * Math.sin(i) * Ue(0.785, 0.96, i) * 0.75;
        ((this.slideX -= a * t * e), (this.slideZ -= o * t * e));
        let n = Math.hypot(this.slideX, this.slideZ);
        (n > 9 && ((this.slideX *= 9 / n), (this.slideZ *= 9 / n)),
          i > 1 &&
            n > 4.5 &&
            this.st === `foot` &&
            (this.knockdown(
              this.velocity.x + this.slideX,
              this.velocity.z + this.slideZ,
              1.2,
            ),
            (this.slideX *= 0.5),
            (this.slideZ *= 0.5)));
      } else {
        let t = Math.max(0, 1 - e * 7);
        ((this.slideX *= t),
          (this.slideZ *= t),
          Math.abs(this.slideX) + Math.abs(this.slideZ) < 0.01 &&
            (this.slideX = this.slideZ = 0));
      }
    }
    static fallDamage(e) {
      return e > 4 ? (e - 4) ** 1.35 * 2.9 : 0;
    }
    land(t) {
      let n = this.ctx,
        r = this.apexY - t,
        i = this.airTime;
      ((this.position.y = t),
        (this.grounded = !0),
        (this.vy = 0),
        (this.airTime = 0));
      let a = e.fallDamage(r);
      if (this.st === `dead` || this.st === `knockdown`) {
        (r > 0.8 && this.fx.dust(this.position, 6, 1),
          r > 1.5 && this.cam.shake(Math.min(0.5, r * 0.05)),
          a > 0 &&
            this.st === `knockdown` &&
            this.damage({ amount: a, source: `fall` }));
        return;
      }
      (r > 1.1
        ? (this.cam.shake(Math.min(0.55, r * 0.05)),
          n.audio.play(`land`, {
            x: this.position.x,
            y: this.position.y,
            z: this.position.z,
            volume: Math.min(1, 0.3 + r * 0.1),
          }),
          this.fx.dust(
            this.position,
            r > 3 ? 10 : 6,
            Math.min(1.6, 0.6 + r * 0.15),
          ),
          n.input.rumble(Math.min(1, r * 0.12), 100))
        : r > 0.35 &&
          n.audio.play(`land`, {
            x: this.position.x,
            y: this.position.y,
            z: this.position.z,
            volume: 0.25,
          }),
        a > 0 && this.damage({ amount: a, source: `fall` }),
        !(this.health <= 0 || this.st !== `foot`) &&
          (r > 6.5
            ? ((this.knockCool = 0),
              this.knockdown(
                this.velocity.x * 0.35,
                this.velocity.z * 0.35,
                0.8,
              ))
            : r > 3.2 && this.hSpeed > 3.2 && !this.aimWanted
              ? (this.anim.play(`roll`),
                (this.rollDur = this.rollT =
                  Math.max(0.5, this.anim.actionDuration(`roll`) * 0.92)),
                (this.rollSpeed = V(this.hSpeed, 3.5, 6.5)))
              : (this.anim.land(r, this.hSpeed, this.moveMag < 0.05, i),
                r > 3.2 &&
                  ((this.landLock = 0.55),
                  this.velocity.multiplyScalar(0.3)))));
    }
    supportHeight(e, t, n, r = is, i = !1) {
      let a = this.ctx,
        o = a.plan.groundHeight(e, t),
        s = as,
        c = a.statics.floorAt(e, t, n, Math.max(rs, r));
      c > o && ((o = c), (s = os));
      let l = n + r + 0.05,
        u = a.statics.query(e - 0.2, t - 0.2, e + 0.2, t + 0.2, this.qs);
      for (let n = 0; n < u; n++) {
        let r = this.qs[n];
        r.maxY > l ||
          r.maxY <= o ||
          r.tag === `world-edge` ||
          (this.inside(r, e, t, 0.12) && ((o = r.maxY), (s = ss)));
      }
      let d = null,
        f = a.dynamics.query(e, t, 0.4, this.qb);
      for (let n = 0; n < f; n++) {
        let r = this.qb[n];
        if (r === this.body || r.kind !== `vehicle`) continue;
        let i = r.y + r.height;
        if (i > l || i <= o) continue;
        let a = Math.cos(r.heading),
          c = Math.sin(r.heading),
          u = e - r.x,
          f = t - r.z,
          p = u * a + f * c,
          m = -u * c + f * a;
        Math.abs(p) <= r.halfW &&
          Math.abs(m) <= r.halfL &&
          ((o = i), (s = cs), (d = r));
      }
      return (i && ((this.supportKind = s), d && (this.roofBody = d)), o);
    }
    inside(e, t, n, r) {
      let i = e.kind;
      if (i === 2) return Math.hypot(t - e.cx, n - e.cz) <= e.hx + r;
      let a = t - e.cx,
        o = n - e.cz;
      if (i === 1) {
        let t = a * e.cos + o * e.sin;
        ((o = -a * e.sin + o * e.cos), (a = t));
      }
      return Math.abs(a) <= e.hx + r && Math.abs(o) <= e.hz + r;
    }
    static vehicleHitDamage(e) {
      let t = e * 3.6;
      return t < 15 ? 0 : V((t - 12) * 0.75, 4, 95);
    }
    collideDynamics(t) {
      let n = this.ctx,
        r = this.position,
        i = n.dynamics.query(r.x, r.z, 1.2, this.qb),
        a = n.time.elapsed;
      for (let t = 0; t < i; t++) {
        let n = this.qb[t];
        if (
          n !== this.body &&
          n.active &&
          !(r.y + ns < n.y || r.y > n.y + n.height - 0.25)
        ) {
          if (n.kind === `vehicle` || n.halfL > 0.9) {
            let t = Math.cos(n.heading),
              i = Math.sin(n.heading),
              a = r.x - n.x,
              o = r.z - n.z,
              s = a * t + o * i,
              c = -a * i + o * t,
              l = V(s, -n.halfW, n.halfW),
              u = V(c, -n.halfL, n.halfL),
              d = s - l,
              f = c - u,
              p = Math.hypot(d, f),
              m;
            if (p > 1e-6) {
              if (((m = es - p), m <= 0)) continue;
              ((d /= p), (f /= p));
            } else {
              let e = n.halfW - Math.abs(s),
                t = n.halfL - Math.abs(c);
              e < t
                ? ((d = Math.sign(s) || 1), (f = 0), (m = e + es))
                : ((d = 0), (f = Math.sign(c) || 1), (m = t + es));
            }
            let h = d * t - f * i,
              g = d * i + f * t;
            ((r.x += h * m), (r.z += g * m));
            let _ = this.velocity.x * h + this.velocity.z * g;
            if (
              (_ < 0 &&
                ((this.velocity.x -= h * _), (this.velocity.z -= g * _)),
              (this.exitGrace > 0 &&
                (n === this.exitBody || this.exitGrace > 0.6)) ||
                n.kind !== `vehicle` ||
                this.st === `dead`)
            )
              continue;
            let v = (n.vx - this.velocity.x) * h + (n.vz - this.velocity.z) * g;
            if (v * 3.6 >= 15 && this.knockCool <= 0 && this.vehHitT <= 0) {
              let t = Math.hypot(n.vx, n.vz);
              (this.damage({
                amount: e.vehicleHitDamage(v),
                source: `vehicle`,
                point: this.v1.set(n.x, r.y + 0.8, n.z),
              }),
                (this.vehHitT = 0.8),
                this.st !== `dead` &&
                  this.knockdown(
                    n.vx * 0.85 + h * 2.5,
                    n.vz * 0.85 + g * 2.5,
                    2.2 + t * 0.1,
                  ));
            } else
              v > 1.4 &&
                this.st === `foot` &&
                this.stumbleCool <= 0 &&
                this.stumble(h, g, v);
          } else {
            let e = r.x - n.x,
              t = r.z - n.z,
              i = Math.hypot(e, t),
              o = es + n.radius;
            if (i >= o || i < 1e-5) continue;
            let s = e / i,
              c = t / i,
              l = o - i;
            ((r.x += s * l * 0.6), (r.z += c * l * 0.6));
            let u = -(this.velocity.x * s + this.velocity.z * c);
            if (u > 1.2 && this.st === `foot`) {
              if (a - (this.bumpT.get(n.id) ?? -10) > 0.7) {
                this.bumpT.set(n.id, a);
                try {
                  n.onImpact?.(-s * u * 22, -c * u * 22, this.body);
                } catch {}
                this.bumpT.size > 64 && this.bumpT.clear();
              }
              ((this.velocity.x += s * u * 0.35),
                (this.velocity.z += c * u * 0.35));
            }
          }
        }
      }
    }
    stumble(e, t, n) {
      this.stumbleCool = 0.9;
      let r = Math.min(3.2, 0.9 + n * 0.6);
      ((this.velocity.x += e * r), (this.velocity.z += t * r));
      let i = z(Math.atan2(-e, t) - this.heading);
      (this.anim.hitFrom(Math.sin(i), -Math.cos(i), 0.85),
        this.cam.shake(0.12));
    }
    onImpact(e, t, n) {
      if (this.st === `vehicle` || this.st === `dead` || this.st === `busted`)
        return;
      let r = Math.hypot(e, t),
        i = r / this.body.mass;
      if (n?.kind === `vehicle`) {
        let a = Math.hypot(n.vx, n.vz);
        if (
          ((this.impactVehSpeed = Math.max(a, i * 0.8)),
          (this.impactT = this.ctx.time.elapsed),
          !(this.exitGrace > 0 && n === this.exitBody) &&
            this.impactVehSpeed * 3.6 < 15)
        ) {
          this.st === `foot` &&
            this.stumbleCool <= 0 &&
            r > 0.001 &&
            this.stumble(e / r, t / r, i);
          return;
        }
      }
      i > 3.2 || (n?.kind === `vehicle` && i > 2)
        ? this.knockdown(
            (e / this.body.mass) * 0.9,
            (t / this.body.mass) * 0.9,
            2 + i * 0.25,
          )
        : this.st === `foot` &&
          ((this.velocity.x += e / this.body.mass),
          (this.velocity.z += t / this.body.mass));
    }
    tryClimb(e = this.position.y, t = !1) {
      let n = this.ctx,
        r = this.position,
        i = Math.sin(this.heading),
        a = -Math.cos(this.heading),
        o = t ? us : ls;
      for (let s = 0; s < o.length; s++) {
        let c = o[s],
          l = r.x + i * c,
          u = r.z + a * c,
          d = this.supportHeight(l, u, e, 2.05),
          f = d - e;
        if (
          f < 0.55 ||
          f > 2.05 ||
          d - r.y > (t ? 1.6 : 2.05) ||
          (this.cp.set(l, d + 0.05, u),
          n.statics.resolveCircle(this.cp, es * 0.8, 1.6, this.push),
          this.push.hit && this.push.depth > 0.12)
        )
          continue;
        (this.climbFrom.copy(r),
          (this.climbPeak = d + 0.12),
          this.climbTo.set(l, d, u));
        let p = Math.max(0.3, c - 0.2);
        this.climbEdge.set(r.x + i * p, d, r.z + a * p);
        let m = r.x + i * (c + 0.75),
          h = r.z + a * (c + 0.75);
        if (this.supportHeight(m, h, d - 0.15, 0.3) > d - 0.25) {
          let e = r.x + i * (c + 0.32),
            t = r.z + a * (c + 0.32);
          Math.abs(this.supportHeight(e, t, d - 0.15, 0.3) - d) < 0.15 &&
            this.climbTo.set(e, d, t);
        } else {
          let t = this.supportHeight(m, h, e, 0.3);
          d - t > 0.5 &&
            d - t < 2.6 &&
            f < 1.35 &&
            (this.cp.set(m, t + is, h),
            n.statics.resolveCircle(this.cp, es, 1.48, this.push),
            (!this.push.hit || this.push.depth < 0.05) &&
              (this.climbTo.set(m, t, h), (this.climbPeak = d + 0.3)));
        }
        return (
          (this.climbDur =
            (this.climbFrom.y <
            n.plan.waterLevelAt(this.climbFrom.x, this.climbFrom.z)
              ? 0.85
              : 0.5) +
            Math.max(0, f - 1) * 0.18),
          this.setSt(`climb`),
          this.anim.startClimb(this.climbDur),
          n.audio.play(`jump`, {
            x: r.x,
            y: r.y,
            z: r.z,
            volume: 0.5,
            rate: 0.9,
          }),
          !0
        );
      }
      return !1;
    }
    updateClimb(e) {
      let t = V(this.stT / this.climbDur, 0, 1),
        n = this.climbFrom,
        r = this.climbTo,
        i = Math.max(this.climbPeak, r.y),
        a = Ue(0.3, 1, t),
        o = t < 0.6 ? B(n.y, i, Ue(0, 0.6, t)) : B(i, r.y, Ue(0.6, 1, t));
      (this.stT <= e + 1e-6 && this.climbPrev.copy(this.position),
        (this.position.x = B(n.x, r.x, a)),
        (this.position.z = B(n.z, r.z, a)),
        (this.position.y = o),
        this.velocity.set(0, 0, 0));
      let s = 1 / Math.max(e, 0.001);
      ((this.vy = (o - this.climbPrev.y) * s),
        (this.hSpeed =
          Math.hypot(
            this.position.x - this.climbPrev.x,
            this.position.z - this.climbPrev.z,
          ) * s),
        this.climbPrev.copy(this.position));
      let c = this.anim.ledge,
        l = Math.sin(this.heading),
        u = -Math.cos(this.heading);
      ((c.x = this.climbEdge.x),
        (c.y = this.climbEdge.y),
        (c.z = this.climbEdge.z),
        (c.rx = -u),
        (c.rz = l),
        (c.w = Ue(0, 0.16, t) * (1 - Ue(0.5, 0.78, t))),
        (this.grounded = !1),
        (this.airTime = 0.2),
        t >= 1 &&
          ((c.w = 0),
          (this.hSpeed = 0),
          this.position.copy(r),
          (this.grounded = !0),
          (this.vy = 0),
          (this.apexY = this.position.y),
          this.setSt(`foot`),
          this.anim.landImpact(0.35)));
    }
    enterWater() {
      let e = this.ctx,
        t = this.vy < -4;
      (this.v1.set(
        this.position.x,
        e.plan.waterLevelAt(this.position.x, this.position.z),
        this.position.z,
      ),
        this.fx.splash(this.v1, t),
        e.audio.play(`splash`, {
          x: this.v1.x,
          y: this.v1.y,
          z: this.v1.z,
          volume: t ? 1 : 0.6,
        }),
        this.velocity.multiplyScalar(0.35),
        (this.vy = 0),
        this.combat.cancel(),
        (this.aimWanted = !1),
        this.setSt(`swim`));
    }
    updateSwim(e) {
      let t = this.ctx,
        n = this.act,
        r = t.plan,
        i = n.moveX,
        a = n.moveY,
        o = Math.min(1, Math.hypot(i, a)),
        s = this.cam.yaw,
        c = Math.sin(s) * a + Math.cos(s) * i,
        l = -Math.cos(s) * a + Math.sin(s) * i,
        u = Math.hypot(c, l);
      u > 1e-4 && ((c /= u), (l /= u));
      let d = o * (n.down(`sprint`) ? 2.8 : 1.7);
      o > 0.05 && (this.heading = Ye(this.heading, Math.atan2(c, -l), 3.5, e));
      let f = Math.sin(this.heading) * d,
        p = -Math.cos(this.heading) * d,
        m = Je(2.2, e);
      ((this.velocity.x += (f - this.velocity.x) * m),
        (this.velocity.z += (p - this.velocity.z) * m));
      let h = this.position;
      ((h.x += this.velocity.x * e),
        (h.z += this.velocity.z * e),
        this.cp.set(h.x, h.y, h.z),
        t.statics.resolveCircle(this.cp, es, ns, this.push),
        (h.x = this.cp.x),
        (h.z = this.cp.z),
        (this.hSpeed = Math.hypot(this.velocity.x, this.velocity.z)),
        (this.swimT += e));
      let g = Ue(0.4, 1.2, this.hSpeed),
        _ = r.waterLevelAt(h.x, h.z),
        v = _ - B(1.32, 1.1, g) + Math.sin(this.swimT * 2.2) * 0.03;
      if (
        ((h.y = Re(h.y, v, 3, e)),
        (this.grounded = !1),
        (this.turnRate = 0),
        this.hSpeed > 0.3 &&
          (this.v1.set(h.x, _ + 0.03, h.z),
          this.fx.wake(this.v1, this.heading, this.hSpeed)),
        !(o > 0.3 && this.climbOut()) && r.surfaceAt(h.x, h.z) !== `water`)
      ) {
        let e = r.groundHeight(h.x, h.z);
        if (e - _ > 3) return;
        ((h.y = Math.max(h.y, e)), (this.grounded = !0), this.setSt(`foot`));
      }
    }
    climbOut() {
      let e = this.ctx,
        t = e.plan,
        n = this.position,
        r = Math.sin(this.heading),
        i = -Math.cos(this.heading),
        a = t.waterLevelAt(n.x, n.z),
        o = a,
        s = !1,
        c = !1,
        l = 0,
        u = 0,
        d = 0;
      for (let f = 0; f < ds.length; f++) {
        let p = ds[f];
        if (p > 2.45 && !s) break;
        let m = n.x + r * p,
          h = n.z + i * p;
        if (
          t.surfaceAt(m, h) === `water` &&
          e.statics.floorAt(m, h, a + 2.5, 0.2) === -1 / 0
        ) {
          if (s) break;
          continue;
        }
        if (!s && p > 1.25) return !1;
        s = !0;
        let g = this.bankTop(m, h);
        if (g - a > 2.6) return !1;
        if (c && Math.abs(g - d) > 0.8) break;
        if (
          ((o = Math.max(o, g, this.obstTop)),
          this.cp.set(m, g + is, h),
          e.statics.resolveCircle(this.cp, es * 0.9, 1.48, this.push),
          this.obstTop > g || (this.push.hit && this.push.depth > 0.06))
        ) {
          let t = e.statics.query(m - 0.5, h - 0.5, m + 0.5, h + 0.5, this.qs);
          for (let e = 0; e < t; e++) {
            let t = this.qs[e];
            t.maxY < g + 2.2 &&
              t.maxY > o &&
              this.inside(t, m, h, 0.5) &&
              (o = t.maxY);
          }
          continue;
        }
        if (
          !c &&
          (this.cp.set(m + r * 0.45, g + is, h + i * 0.45),
          e.statics.resolveCircle(this.cp, es, 1.48, this.push),
          this.push.hit && this.push.depth > 0.05)
        ) {
          ((c = !0), (l = m), (u = h), (d = g));
          continue;
        }
        return this.startClimbOut(m, g, h, o);
      }
      return c ? this.startClimbOut(l, d, u, o) : !1;
    }
    obstTop = -1 / 0;
    bankTop(e, t) {
      let n = this.ctx,
        r = n.plan.waterLevelAt(this.position.x, this.position.z),
        i = n.groundAt(e, t, r + 2.4, 0.2);
      this.obstTop = -1 / 0;
      let a = n.statics.query(e - 0.2, t - 0.2, e + 0.2, t + 0.2, this.qs);
      for (let n = 0; n < a; n++) {
        let r = this.qs[n];
        r.maxY <= i ||
          r.maxY > i + 3 ||
          !this.inside(r, e, t, 0.05) ||
          (r.maxY <= i + is
            ? (i = r.maxY)
            : (this.obstTop = Math.max(this.obstTop, r.maxY)));
      }
      return i;
    }
    startClimbOut(e, t, n, r) {
      let i = this.ctx.plan,
        a = this.position;
      return (
        this.climbFrom.copy(a),
        this.climbTo.set(e, t, n),
        (this.climbPeak = Math.max(t, r) + (r > t + 0.3 ? 0.25 : 0.1)),
        this.climbEdge.set(
          a.x + (e - a.x) * 0.42,
          Math.max(t, r) - 0.02,
          a.z + (n - a.z) * 0.42,
        ),
        (this.climbDur =
          0.85 +
          Math.max(0, this.climbPeak - i.waterLevelAt(a.x, a.z) - 1.2) * 0.25 +
          Math.max(0, Math.hypot(e - a.x, n - a.z) - 1.6) * 0.12),
        this.setSt(`climb`),
        this.anim.startClimb(this.climbDur),
        this.ctx.audio.play(`splash`, {
          x: a.x,
          y: i.waterLevelAt(a.x, a.z),
          z: a.z,
          volume: 0.4,
        }),
        !0
      );
    }
    updateDown(e) {
      let t = this.position;
      if (this.st === `busted`) (this.velocity.set(0, 0, 0), (this.hSpeed = 0));
      else if (this.grounded) {
        let n = Math.max(0, 1 - 6 * e);
        ((this.velocity.x *= n),
          (this.velocity.z *= n),
          this.hSpeed > 1.5 &&
            Math.random() < e * 8 &&
            this.fx.dust(t, 1, 0.5));
      }
      if (
        (this.integrate(e, !0),
        this.st === `knockdown` &&
          this.stT > (this.anim.mocapActive ? 1.35 : 1.7) &&
          this.grounded &&
          this.hSpeed < 0.4 &&
          this.health > 0)
      )
        this.setSt(`getup`);
      else if (this.st === `getup`) {
        let e = this.anim.mocapActive
            ? this.anim.downProgress
            : this.stT / 0.95,
          t = Math.hypot(this.act.moveX, this.act.moveY) > 0.3;
        (e >= (this.anim.mocapActive ? 0.8 : 0.9) || (t && e > 0.7)) &&
          (this.setSt(`foot`), t && this.anim.cancelRootMotion(0.3));
      }
    }
    detachFromVehicle() {
      let e = this.v1;
      this.object.getWorldPosition(e);
      let t = null;
      try {
        ((t =
          this.vehId >= 0
            ? (this.ctx.vehicles.get?.(this.vehId) ?? null)
            : null),
          t && t.driver === `player` && (t.driver = `none`));
      } catch {}
      let n = t?.spec?.halfW ?? 0.9,
        r = Number.isFinite(t?.y) ? t.y : e.y - 0.8;
      (this.ctx.scene.add(this.object),
        (this.object.visible = !0),
        (this.vehId = -1),
        (this.seat = null),
        this.st === `vehicle` && (this.st = `foot`),
        this.anim.setState(`foot`, 0.2));
      let i =
          this.heading +
          ((t?.spec?.twoWheeler ? -1 : Ie(this.ctx.plan.side)) * Math.PI) / 2,
        a = n + 0.55,
        o = e.x + Math.sin(i) * a,
        s = e.z - Math.cos(i) * a;
      (this.cp.set(o, r + rs, s),
        this.ctx.statics.resolveCircle(this.cp, es, 1.35, this.push),
        (o = this.cp.x),
        (s = this.cp.z),
        this.teleport(o, s, this.heading, r),
        (this.exitGrace = 1),
        (this.exitBody = t?.body ?? null));
    }
    updateLife(e) {
      let t = this.life,
        n = this.ctx,
        r = n.timeScale > 0.01 ? n.timeScale : 1;
      t.t += e / r;
      let a = t.kind === `wasted`;
      if (this.slowmo) {
        let e = t.t < 1.1 ? 0.3 : t.t < 2.6 ? B(0.3, 1, Ue(1.1, 2.6, t.t)) : 1;
        ((n.timeScale = e), e >= 1 && (this.slowmo = !1));
      }
      if (
        (this.overlay.setGrade(
          t.phase < 3 ? Ue(0.1, 1.4, t.t) : Math.max(0, 1 - (t.t - 5.3) / 0.9),
        ),
        t.phase === 0 && t.t > 0.9)
      ) {
        ((t.phase = 1), (this.respawnReady = !1));
        let e = a ? n.plan.spawns.hospital : n.plan.spawns.police;
        Promise.resolve(n.districts?.ensureResident?.(e.x, e.z)).finally(
          () => (this.respawnReady = !0),
        );
        let r = a ? { zh: `送醫`, en: `WASTED` } : { zh: `被捕`, en: `BUSTED` },
          o = this.hospitalName(),
          s = a
            ? {
                zh: i.on
                  ? i.t(`你被送往${o.zh}`, `${i.jz(o.zh)}に搬送された`)
                  : `你被送往${o.zh}`,
                en: `Rushed to ${o.en}`,
              }
            : { zh: `你被帶回警察局`, en: `Taken to Police HQ` };
        try {
          n.ui.bigMessage(r, s, {
            color: a ? `#e0302a` : `#3b82f6`,
            duration: 3.4,
          });
        } catch {
          n.events.emit(`ui:bigMessage`, {
            title: r,
            subtitle: s,
            color: a ? `#e0302a` : `#3b82f6`,
            duration: 3.4,
          });
        }
      } else if (t.phase === 1 && t.t > 4.3) {
        t.phase = 2;
        try {
          n.ui.fade(1, 0.8);
        } catch {}
      } else if (
        t.phase === 2 &&
        t.t > 5.3 &&
        (this.respawnReady || t.t > 20)
      ) {
        ((t.phase = 3), this.respawn(t.kind));
        try {
          n.ui.fade(0, 1);
        } catch {}
      } else
        t.phase === 3 &&
          t.t > 6.3 &&
          (this.overlay.setGrade(0), (this.life = null));
    }
    respawnReady = !0;
    static fee(e, t, n = 1) {
      let r = Math.max(0, Math.floor(t)),
        i = n,
        a =
          e === `wasted`
            ? V(Math.round((r * 0.1) / (10 * i)) * 10 * i, 100 * i, 5e3 * i)
            : V(Math.round((r * 0.12) / (10 * i)) * 10 * i, 150 * i, 8e3 * i);
      return Math.max(0, Math.min(a, r - Math.min(r, 50 * i)));
    }
    hospitalName() {
      let e = this.ctx.plan.landmarks.find((e) => e.kind === `hospital`);
      return e
        ? { zh: e.name.zh, en: e.name.en }
        : { zh: `醫院`, en: `Hospital` };
    }
    respawn(t) {
      let n = this.ctx,
        r = t === `wasted` ? n.plan.spawns.hospital : n.plan.spawns.police;
      (this.slowmo && ((this.slowmo = !1), (n.timeScale = 1)),
        (this.health = this.maxHealth),
        (this.armor = 0),
        this.velocity.set(0, 0, 0),
        (this.vy = 0),
        (this.st = `foot`),
        (this.stT = 0),
        this.anim.setState(`foot`, 0.05),
        this.anim.cancelAction(0),
        (this.anim.inp.fallBack = !0),
        (this.body.active = !0),
        this.teleport(r.x, r.z, r.heading),
        (this.cam.cineLock = !1),
        this.cam.follow(this.object, `foot`),
        this.cam.setYaw(r.heading, 0.25),
        (this.cam.snapNext = !0),
        (this.invuln = 2.5),
        (this.sinceDamage = 99),
        this.fx.clearDecals());
      let a = nt.TWD.unitsPer / nt[n.region.currency].unitsPer,
        o = e.fee(t, n.state.money, a),
        s = n.region.currency === `TWD` ? rt : void 0;
      if (t === `wasted`) {
        let e = this.hospitalName();
        o > 0
          ? (n.state.addMoney(-o, `hospital`),
            n.events.emit(`notify`, {
              text: {
                zh: i.on
                  ? i.t(
                      `${e.zh}醫藥費 ${at(o, s)}`,
                      `${i.jz(e.zh)}の医療費 ${at(o, s)}`,
                    )
                  : `${e.zh}醫藥費 ${at(o, s)}`,
                en: `${e.en} bill: ${at(o, s)}`,
              },
              kind: `bad`,
              duration: 5,
            }))
          : n.events.emit(`notify`, {
              text:
                n.region.currency === `TWD`
                  ? {
                      zh: `醫藥費由健保給付`,
                      en: `Hospital bill covered by NHI`,
                    }
                  : {
                      zh: `醫藥費由保險給付`,
                      en: `Hospital bill covered by insurance`,
                    },
              kind: `info`,
              duration: 4,
            });
      } else {
        o > 0 && n.state.addMoney(-o, `busted`);
        let e =
          this.combat.owned.includes(`pistol`) ||
          this.combat.owned.includes(`smg`);
        (this.combat.confiscate(),
          (this._weapon === `pistol` || this._weapon === `smg`) &&
            (this._weapon = this.combat.owned.includes(`bat`)
              ? `bat`
              : `fists`));
        let t =
          o > 0
            ? {
                zh: i.on
                  ? i.t(`罰鍰 ${at(o, s)}`, `罰金 ${at(o, s)}`)
                  : `罰鍰 ${at(o, s)}`,
                en: `Fined ${at(o, s)}`,
              }
            : {
                zh: `初犯，警告後釋放`,
                en: `First offence: released with a warning`,
              };
        (n.events.emit(`notify`, {
          text: e
            ? {
                zh: i.on
                  ? i.t(
                      `${t.zh}，槍械已沒收`,
                      `${i.jz(t.zh)}、銃器は没収された`,
                    )
                  : `${t.zh}，槍械已沒收`,
                en: `${t.en}. Firearms confiscated.`,
              }
            : t,
          kind: `bad`,
          duration: 5,
        }),
          n.events.emit(`player:weapon`, {
            weapon: this._weapon,
            ammo: this.ammo[this._weapon],
          }));
      }
      try {
        n.police.clear();
      } catch {}
      n.events.emit(`player:respawned`, {
        pos: this.position.clone(),
        reason: t === `wasted` ? `died` : `busted`,
      });
    }
    updateVehicle(e) {
      let t = this.ctx,
        n = null;
      try {
        n = t.vehicles.get(this.vehId) ?? null;
      } catch {}
      if (!n) {
        (this.detachFromVehicle(), this.cam.follow(this.object, `foot`));
        return;
      }
      (n.object.getWorldPosition(this.position),
        (this.heading = n.heading ?? this.heading),
        this.velocity.set(n.body?.vx ?? 0, 0, n.body?.vz ?? 0),
        (this.hSpeed = Math.hypot(this.velocity.x, this.velocity.z)));
      let r = this.anim.inp;
      ((r.steer =
        n.driver === `player`
          ? t.input.axis(`steer`)
          : (n.controls?.steer ?? 0)),
        (r.vehSpeed = Math.abs(n.speed ?? this.hSpeed)),
        this.seat &&
          !this.seat.parent &&
          (this.detachFromVehicle(), this.cam.follow(this.object, `foot`)));
    }
    animate(e) {
      let t = this.ctx,
        n = this.anim,
        r = n.inp,
        i = this.st === `foot` && this.aimWanted ? 1 : 0;
      if (((this._aimW = Re(this._aimW, i, i ? 14 : 9, e)), this.debugPose))
        this.applyDebugPose(r);
      else if (
        this.st === `foot` ||
        this.st === `climb` ||
        this.st === `knockdown` ||
        this.st === `getup` ||
        this.st === `dead`
      ) {
        let t = this.hSpeed;
        if (
          ((r.speed =
            this.st === `foot`
              ? this.nudgeT > 0
                ? Math.max(t, this.nudgeSpeed)
                : t
              : this.st === `climb`
                ? t
                : 0),
          t > 0.1)
        ) {
          let e = Math.sin(this.heading),
            n = -Math.cos(this.heading),
            i = (this.velocity.x * e + this.velocity.z * n) / t;
          ((r.dirX =
            (this.velocity.x * Math.cos(this.heading) +
              this.velocity.z * Math.sin(this.heading)) /
            t),
            (r.dirZ = -i));
        } else ((r.dirX = 0), (r.dirZ = -1));
        ((r.turnRate = this.turnRate),
          (r.accel = this.accelS),
          (r.grounded =
            this.grounded || (this.st !== `foot` && this.st !== `climb`)),
          (r.airborne = !this.grounded));
        let n = this.position.y - this.gradeY;
        this.gradeY = this.position.y;
        let a =
          this.grounded && this.st === `foot` && t > 0.5 && e > 0
            ? V(n / (t * e), -0.8, 0.8)
            : 0;
        if (
          ((r.grade = Re(r.grade, a, 6, e)),
          (r.vy = this.vy),
          (r.airTime = this.airTime),
          (r.aim = i && Ia[this._weapon].melee ? 1 : i),
          (r.weapon = this._weapon),
          i)
        ) {
          let e = this.combat.aimPoint,
            t = this.position.x,
            n = this.position.y + this.model.shoulderY,
            i = this.position.z,
            a = e.x - t,
            o = e.y - n,
            s = e.z - i,
            c = Math.hypot(a, s);
          ((r.aimPitch = c > 0.5 ? Math.atan2(o, c) : -this.cam.pitch),
            (r.aimYaw = c > 0.5 ? z(Math.atan2(a, -s) - this.heading) : 0));
        }
        r.guard = i && this._weapon === `fists` ? 1 : 0;
        let o = z(this.cam.yaw - this.heading),
          s = Math.abs(o) > 1.9;
        ((r.lookYaw = s ? 0 : V(o, -1.25, 1.25)),
          (r.lookPitch = V(-this.cam.pitch + 0.2, -0.45, 0.4)),
          (r.lookW = s ? 0.25 : 0.7));
      } else
        this.st === `swim` &&
          ((r.speed = this.hSpeed), (r.grounded = !1), (r.aim = 0));
      let a =
        this.st === `foot` &&
        this._weapon === `fists` &&
        !this.aimWanted &&
        !this.combat.striking &&
        this.control &&
        !n.action;
      n.action && (this.idleT = 0);
      let o = 0;
      try {
        ((o = this.debugRain >= 0 ? this.debugRain : (t.env.rain ?? 0)),
          this.shelter.covered && this.debugRain < 0 && (o = 0));
      } catch {}
      if (
        ((r.prop = this.debugProp
          ? this.debugProp
          : a && o > 0.3 && this.grounded
            ? `umbrella`
            : a &&
                this.idleT > (n.mocapActive ? 20 : 9) &&
                this.hSpeed < 0.3 &&
                !this.debugPose
              ? this.character === `wen`
                ? this.idleT % 60 < 30
                  ? `tea`
                  : `phone`
                : this.idleT % 60 < 36
                  ? `phone`
                  : `tea`
              : `none`),
        this.st !== `vehicle`)
      ) {
        let t = this.position;
        this.visY =
          this.grounded && Math.abs(this.visY - t.y) < 0.6 && this.st === `foot`
            ? Re(this.visY, t.y, 22, e)
            : t.y;
        let n = Je(9, e);
        (this.exitOfs.multiplyScalar(1 - n),
          this.object.position.set(
            t.x + this.exitOfs.x,
            this.visY + this.exitOfs.y,
            t.z + this.exitOfs.z,
          ),
          this.object.rotation.set(0, -this.heading, 0));
      } else if (this.seatBlend < 1) {
        this.seatBlend = Math.min(1, this.seatBlend + e / 0.38);
        let t = this.seatBlend,
          n = t * t * (3 - 2 * t);
        (this.object.position.lerpVectors(this.seatFrom, this.seatTarget, n),
          (this.object.position.y += Math.sin(t * Math.PI) * 0.22),
          this.seatQ1.identity(),
          this.object.quaternion.slerpQuaternions(this.seatQ0, this.seatQ1, n));
      }
      let s =
        this.hitStop > 0
          ? e * 0.1
          : this.st === `dead` && this.stT < 1.5 && !this.slowmo
            ? e * 0.45
            : e;
      (n.update(s, this.object), this.model.update());
      let c =
          this.st === `foot` ||
          this.st === `climb` ||
          this.st === `getup` ||
          this.st === `knockdown`,
        l = this._weapon,
        u =
          this.forceHelmet ||
          (this.st === `vehicle` &&
            this.vehPose === `ride` &&
            this.seatBlend > 0.6);
      if (
        (this.model.setProps(
          c && l === `bat`,
          c && l === `pistol`,
          c && l === `smg`,
          n.propShown(`phone`),
          n.propShown(`tea`),
          n.propShown(`umbrella`),
          u,
        ),
        this.showcaseModel)
      ) {
        let e = this.showcaseModel,
          t = Math.cos(this.heading),
          n = Math.sin(this.heading);
        (e.root.position.set(
          this.position.x + t * 0.9,
          this.visY,
          this.position.z + n * 0.9,
        ),
          e.root.rotation.set(0, -this.heading, 0));
      }
    }
    stepOpts = { x: 0, y: 0, z: 0, volume: 0.3, rate: 1 };
    footstep(e, t) {
      let n = this.ctx;
      if (this.st !== `foot` || !this.grounded) return;
      let r = this.position,
        i = this.stepOpts;
      ((i.x = r.x),
        (i.y = r.y),
        (i.z = r.z),
        (i.volume = V(0.18 + t * 0.07, 0.15, 0.7)),
        (i.rate =
          0.9 + Math.random() * 0.2 + (this.character === `wen` ? 0.08 : 0)),
        n.audio.play(`footstep`, i),
        Qe.uWet.value > 0.35 &&
          (this.v2.set(
            r.x + Math.sin(this.heading) * 0.15,
            r.y + 0.02,
            r.z - Math.cos(this.heading) * 0.15,
          ),
          this.fx.puddle(this.v2, Math.min(1, t / 5) * Qe.uWet.value)));
    }
    setSt(e) {
      if (e === this.st) return;
      ((this.st = e), (this.stT = 0));
      let t = {
          foot: `foot`,
          swim: `swim`,
          climb: `climb`,
          vehicle: `drive`,
          knockdown: `knockdown`,
          getup: `getup`,
          dead: `dead`,
          busted: `busted`,
        },
        n =
          e === `knockdown` || e === `dead`
            ? 0.12
            : e === `getup`
              ? 0.08
              : 0.25;
      this.anim.setState(t[e], n);
    }
    syncBody() {
      let e = this.body;
      ((e.x = this.position.x),
        (e.y = this.position.y),
        (e.z = this.position.z),
        (e.heading = this.heading),
        (e.vx = this.velocity.x),
        (e.vz = this.velocity.z),
        (e.active = this.st !== `vehicle` && this.st !== `dead`));
    }
    applyDebugPose(e) {
      let t = this.debugPose;
      ((e.grounded = !0),
        (e.aim = 0),
        (e.speed = 0),
        (e.dirX = 0),
        (e.dirZ = -1),
        (e.turnRate = 0),
        (e.weapon = this._weapon),
        (e.aimPitch = 0.02),
        (e.aimYaw = 0),
        (e.lookYaw = 0),
        (e.lookPitch = 0),
        (e.lookW = 0.6),
        (e.guard = +(t === `aim` && this._weapon === `fists`)),
        (e.airborne = t === `jump`),
        t === `walk` && (e.speed = 1.6),
        t === `run` && (e.speed = hs),
        t === `sprint` && (e.speed = gs),
        t === `aim` && (e.aim = 1),
        t === `jump` &&
          ((e.grounded = !1), (e.airTime = 0.2), (e.vy = 2), (e.speed = 4)));
    }
    debug = {
      hold: (e, t) => this.act.hold(e, t),
      move: (e, t, n) => this.act.move(e, t, n),
      pose: (e) => {
        let t = this.anim;
        switch (((this.debugPose = null), e)) {
          case `idle`:
          case `walk`:
          case `run`:
          case `sprint`:
          case `aim`:
          case `jump`:
            (this.setSt(`foot`),
              t.setState(`foot`, 0.2),
              (this.debugPose = e),
              e === `aim` && (this._aimW = 1));
            break;
          case `punch`:
            ((this.debugPose = `idle`),
              t.setState(`foot`, 0.15),
              t.play(`cross`));
            break;
          case `kick`:
            ((this.debugPose = `idle`),
              t.setState(`foot`, 0.15),
              t.play(`kick`));
            break;
          case `bat`:
            ((this.debugPose = `idle`),
              t.setState(`foot`, 0.15),
              t.play(`batFore`));
            break;
          case `phone`:
          case `tea`:
          case `umbrella`:
            this.debugProp = e;
            break;
          case `pray`:
          case `wave`:
          case `bow`:
          case `cheer`:
            ((this.debugPose = `idle`), t.setState(`foot`, 0.15), t.play(e));
            break;
          case `swim`:
            (t.setState(`swim`, 0), (this.debugPose = `swim`));
            break;
          case `drive`:
          case `ride`:
            (t.setState(e, 0), (this.debugPose = e));
            break;
          case `knockdown`:
          case `dead`:
          case `busted`:
          case `getup`:
            (t.setState(e, 0.1), (this.debugPose = e));
            break;
          default:
            ((this.debugPose = null),
              (this.debugProp = null),
              this.st === `foot` && t.setState(`foot`, 0.2));
        }
      },
      showcase: (e = !0) => {
        if (
          ((this.showcaseModel &&=
            (this.showcaseModel.root.removeFromParent(), null)),
          !e)
        )
          return;
        let t = this.character === `jie` ? `wen` : `jie`,
          n = (e) => {
            (this.showcaseModel && this.showcaseModel.root.removeFromParent(),
              this.ctx.scene.add(e.root),
              (this.showcaseModel = e));
            let t = this.anim.standalone(e.rc),
              n = t ? null : new Ni(e.rig),
              r = (r) => {
                (t ? t.update(r, e.root) : n.update(r), e.update());
              };
            r(0.016);
            let i = () => {
              this.showcaseModel === e &&
                (r(this.ctx.time.dt || 0.016), requestAnimationFrame(i));
            };
            requestAnimationFrame(i);
          },
          r = this.showcaseCache[t];
        r
          ? n(r)
          : this.rocketboxOk
            ? qo(this.ctx, t).then(
                (e) => {
                  ((this.showcaseCache[t] = e), n(e));
                },
                (e) => console.warn(`[player] showcase`, e),
              )
            : n((this.showcaseCache[t] = wo(t)));
      },
      look: (e, t) => this.cam.setYaw(e, t),
      env: (e, t = 0, n = -1) => {
        ((Qe.uNight.value = e),
          (Qe.uWet.value = t),
          (this.debugRain = n),
          (this.debugWet = t > 0));
      },
      helmet: (e = !0) => {
        this.forceHelmet = e;
      },
      get ms() {
        return window.__playerPerf?.ms ?? 0;
      },
      state: () => ({
        st: this.st,
        mode: this.mode,
        pos: [
          +this.position.x.toFixed(2),
          +this.position.y.toFixed(2),
          +this.position.z.toFixed(2),
        ],
        heading: +this.heading.toFixed(3),
        speed: +this.hSpeed.toFixed(2),
        grounded: this.grounded,
        health: +this.health.toFixed(1),
        armor: this.armor,
        weapon: this._weapon,
        ammo: { ...this.ammo },
        mag: { ...this.combat.mag },
        owned: [...this.combat.owned],
        aiming: this.aiming,
        anim: this.anim.state,
        action: this.anim.action,
        vehicleId: this.vehId,
        camYaw: +this.cam.yaw.toFixed(3),
        camPitch: +this.cam.pitch.toFixed(3),
        character: this.character,
        ms: window.__playerPerf?.ms,
        sheltered: this.shelter.covered,
        stationFloor: this.shelter.station,
        heroWet: +ko.uHeroWet.value.toFixed(3),
        charFill: ko.uCharFill.value.toArray().map((e) => +e.toFixed(3)),
        height: this.model.height,
        kind: this.model.kind,
        heroTex: { ...Go, halvedMB: +Go.halvedMB.toFixed(2) },
        heroes: Object.keys(this.models).map(
          (e) => `${e}:${this.models[e].kind}`,
        ),
        shown: this.model.id,
      }),
    };
  };
