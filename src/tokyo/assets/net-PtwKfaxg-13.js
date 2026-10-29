// tokyo/assets/net-PtwKfaxg 13 — session
// Lines 6208-7723 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
var yr = null,
  br = class e {
    ctx;
    slot;
    peer;
    hooks;
    buf = new Wn(100);
    pose = ke();
    root = new o();
    body;
    char;
    wanted = 0;
    goneT = -1;
    seatIdx = 0;
    name = ``;
    emote = null;
    rig = null;
    sampled = !1;
    seatV = { x: 0, y: 0, z: 0 };
    seatMatrix = new a();
    seatPoint = new l();
    attack = null;
    av = null;
    anim = null;
    building = !1;
    disposed = !1;
    tag;
    bubble;
    tagText = ``;
    tagX = -1e9;
    tagY = -1e9;
    tagShown = !1;
    gait = 0;
    fall = 0;
    animSkip = !1;
    seatedPose = ``;
    carLegs = { thigh: 1.4, knee: 1.2, foot: -0.2 };
    poseDirty = !0;
    policeUniformOn = !1;
    policeUniformVersion = 0;
    policeVest = null;
    constructor(e, t, n, r, i, a) {
      ((this.ctx = e),
        (this.slot = t),
        (this.peer = n),
        (this.hooks = i),
        (this.char = r),
        (this.root.name = `net-remote-${n.slice(0, 6)}`),
        (this.root.userData.owner = `net`),
        (this.root.visible = !1),
        e.scene.add(this.root),
        (this.body = {
          id: d(),
          kind: `ped`,
          owner: `net`,
          x: 0,
          y: 0,
          z: 0,
          heading: 0,
          halfW: 0.35,
          halfL: 0.35,
          radius: 0.35,
          height: 1.75,
          vx: 0,
          vz: 0,
          mass: 75,
          active: !1,
          userData: { net: !0, remote: this },
          onDamage: (e) => this.hooks.onDamage(this.slot, e),
          onImpact: (e, t, n) => {
            this.body.kind === `vehicle` &&
              this.hooks.onImpact(this.slot, this.pose.vehicle, e, t, n);
          },
        }),
        e.dynamics.add(this.body),
        (this.tag = document.createElement(`div`)),
        (this.tag.className = `net-tag`),
        a.appendChild(this.tag),
        (this.bubble = new ur(a)),
        this.build());
    }
    async build() {
      if (!this.building) {
        this.building = !0;
        try {
          let e = await (yr ??= t(
              () => import(`./api-CqQ1pZ52.js`),
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
              ]),
            )),
            n = this.char,
            r = await e.createAvatar(n, {
              castShadow: !0,
              receiveShadow: !0,
              fringe: !1,
              independentMaterials: !0,
            });
          if ((e.releaseAvatarAsset(n), this.disposed)) return r.dispose();
          this.av &&
            (this.policeVest?.setTarget(null),
            this.attack?.dispose(),
            this.av.root.removeFromParent(),
            this.av.dispose());
          for (let e of r.meshes)
            (ue(e.material, dr), /-hair$/.test(e.name) && (e.castShadow = !1));
          if (
            ((this.av = r),
            (this.poseDirty = !0),
            (this.seatedPose = ``),
            (this.rig = r.asRiggedCharacter(h(n) ? x : se)),
            (this.anim = new ce(this.rig, this.slot * 7 + 3)),
            (this.attack = new nr(r.toPlayerRig())),
            this.root.add(r.root),
            this.policeVest?.setTarget({
              rig: r.toPlayerRig(),
              height: r.height,
              root: r.root,
              meshes: r.meshes,
            }),
            n !== this.char)
          )
            return ((this.building = !1), this.build());
        } catch (e) {
          console.warn(`[net] remote body`, e);
        } finally {
          this.building = !1;
        }
      }
    }
    setChar(e) {
      e !== this.char && ((this.char = e), this.build());
    }
    setPoliceUniform(e) {
      if (!(this.disposed || this.policeUniformOn === e)) {
        if (((this.policeUniformOn = e), ++this.policeUniformVersion, !e)) {
          this.policeVest?.setEnabled(!1);
          return;
        }
        if (this.policeVest) {
          this.policeVest.setEnabled(!0);
          return;
        }
      }
    }
    say(e) {
      return (this.bubble.show(e), this.tagShown);
    }
    playAttack(e, t) {
      ((this.emote = null), this.attack?.play(e, t));
    }
    push(e, t) {
      this.buf.push(e, t) && (this.lastPush = t);
    }
    lastPush = 0;
    trace = null;
    sample(e) {
      let t = this.pose;
      return (
        (this.sampled = this.buf.sample(e, t)),
        this.sampled &&
          this.trace &&
          this.trace.length < 3e4 &&
          this.trace.push(e, t.x, t.z),
        this.sampled
      );
    }
    render(e, t, n, r, i, a) {
      if (!this.sampled) return;
      let o = this.pose,
        s = this.body,
        c = s.x,
        l = s.z,
        u = o.mode === mr && o.vehicle > 0 && !!this.hooks.vehicle(o.vehicle),
        d = u && !!(o.flags & 16);
      ((s.x = o.x),
        (s.y = o.y),
        (s.z = o.z),
        (s.heading = o.heading),
        e > 0 &&
          ((s.vx = (s.x - c) / e),
          (s.vz = (s.z - l) / e),
          Math.hypot(s.vx, s.vz) > 120 && (s.vx = s.vz = 0)));
      let f = u ? this.hooks.vehicle(o.vehicle) : null,
        p = f ? this.ctx.vehicles.specs[f.kind] : null;
      (f && p && !d
        ? ((s.kind = `vehicle`),
          (s.halfW = p.halfW),
          (s.halfL = p.halfL),
          (s.radius = Math.hypot(p.halfW, p.halfL)),
          (s.height = p.height),
          (s.mass = p.mass))
        : ((s.kind = `ped`),
          (s.halfW = s.halfL = s.radius = 0.35),
          (s.height = 1.75),
          (s.mass = 75)),
        (s.active = o.mode !== hr && !d),
        (s.userData.harmless = !this.hooks.pvp()));
      let m = this.root,
        h = a?.anchor ?? this.ctx.scene;
      m.parent !== h && h.add(m);
      let g = a ? a.x : o.x,
        _ = a ? a.z : o.z,
        v = Math.hypot(g - n.position.x, _ - n.position.z);
      m.visible = !!this.av && v < gr && (!u || !!a);
      let ee = t - this.lastPush > 400;
      ((this.animSkip = ee || (v > 15 && !this.animSkip)),
        this.emote &&
          ((this.emote.t += e),
          (this.emote.t > 2.4 || u || o.speed > 0.6) && (this.emote = null)));
      let te =
        o.mode === pr && !u && o.anim !== fr.knockdown && o.anim !== fr.dead;
      if (
        (this.attack?.stance(
          te && !this.emote ? Oe(o.flags) : `fists`,
          te && !this.emote && !!(o.flags & 4),
        ),
        this.attack?.tick(e, u || o.mode === hr),
        m.visible && a && p)
      ) {
        let e = !!p.twoWheeler,
          t = vr(a.kind, e, a.idx, this.seatV),
          n = this.rig?.joints[b.hips].y ?? (this.av?.height ?? 1.72) * 0.52;
        (this.seatPoint.set(t.x, t.y - n, t.z),
          a.anchor
            ? (m.position.copy(this.seatPoint), m.quaternion.identity())
            : (S(this.seatMatrix, a.x, a.y, a.z, a.heading, a),
              m.position.copy(this.seatPoint).applyMatrix4(this.seatMatrix),
              m.quaternion.setFromRotationMatrix(this.seatMatrix)),
          (this.fall = 0),
          (this.gait = 0));
        let r = `${a.kind}:${a.idx}`;
        (this.poseDirty || this.seatedPose !== r) &&
          (this.sit(
            e
              ? a.idx === 0
                ? `ride`
                : `pillion`
              : a.idx === 0
                ? `drive`
                : `seat`,
            a.kind,
          ),
          this.av?.update(),
          (this.seatedPose = r),
          (this.poseDirty = !1));
      } else if (m.visible) {
        m.position.set(o.x, o.y, o.z);
        let t = o.mode === hr || o.anim === fr.knockdown || o.anim === fr.dead;
        ((this.fall += (+!!t - this.fall) * Math.min(1, e * 6)),
          m.rotation.set(-this.fall * Math.PI * 0.5, -o.heading, 0, `YXZ`),
          (m.position.y += this.fall * 0.18));
        let n =
          o.anim === fr.sprint || o.speed > 4.2
            ? 2
            : o.anim === fr.run || o.speed > 2.4
              ? 1.6
              : +(o.speed > 0.25);
        if (
          ((this.gait += (n - this.gait) * Math.min(1, e * 8)),
          this.poseDirty ||
            this.seatedPose ||
            (v < 120 && (!this.animSkip || this.emote || this.attack?.active)))
        ) {
          let n = v > 15 && !this.attack?.active ? e * 2 : e;
          (this.anim?.update(n, { gait: this.gait, speed: t ? 0 : o.speed }),
            this.emote && this.gesture(this.emote.id, this.emote.t),
            this.attack?.render(n, o.speed),
            this.av?.update(),
            (this.seatedPose = ``),
            (this.poseDirty = !1));
        }
      }
      if (
        ((v < 130 || this.tagShown) &&
          this.updateTag(n, r, i, u && p ? p.height : 0, g, a ? a.y : o.y, _),
        this.bubble.needsFrame)
      ) {
        let e = u && p ? p.height : 0;
        this.bubble.place(
          n,
          r,
          i,
          g,
          (a ? a.y : o.y) + (e ? e + 0.6 + this.seatIdx * 0.42 : 2.05),
          _,
          this.tagShown,
        );
      }
    }
    sit(e, t) {
      let n = this.rig?.bones;
      if (!n) return;
      for (let e = 0; e < n.length; e++)
        (n[e].position.copy(this.rig.rest[e]), n[e].rotation.set(0, 0, 0));
      n[b.lidL].scale.y = n[b.lidR].scale.y = 0.001;
      let r = e === `ride` ? (ge[t]?.tuck ?? 0) : 0;
      (n[b.spine].rotation.set(-0.12 - r * 0.3, 0, 0),
        n[b.chest].rotation.set(-r * 0.25, 0, 0));
      let [i, a, o, s, c] =
        e === `ride`
          ? [1.2, 1.3, 0.95, 0.45, 0.16]
          : e === `pillion`
            ? [1.25, 1.45, 0.6, 1.15, 0.22]
            : e === `drive`
              ? [1.45, 1.4, 0.85, 0.55, 0.04]
              : [1.5, 1.45, 0.3, 1.25, 0.04];
      if (e === `drive` || e === `seat`) {
        let e = me(this.rig, t, this.carLegs);
        ((i = e.thigh),
          (a = e.knee),
          (n[b.spine].rotation.x = t === `sports` ? 0.28 : 0.2),
          (n[b.chest].rotation.x = 0.04));
      }
      (n[b.thighL].rotation.set(i, 0, -c),
        n[b.thighR].rotation.set(i, 0, c),
        n[b.shinL].rotation.set(-a, 0, 0),
        n[b.shinR].rotation.set(-a, 0, 0),
        n[b.footL].rotation.set(a - i, 0, 0),
        n[b.footR].rotation.set(a - i, 0, 0),
        n[b.armL].rotation.set(o, 0, -0.12),
        n[b.armR].rotation.set(o, 0, 0.12),
        n[b.foreL].rotation.set(s, 0, 0),
        n[b.foreR].rotation.set(s, 0, 0));
    }
    gesture(e, t) {
      let n = this.rig?.bones;
      if (!n) return;
      let r = Math.min(1, t / 0.25, Math.max(0, (_r - t) / 0.3)),
        i = (e, t, i, a) => {
          let o = n[e].rotation;
          o.set(o.x + (t - o.x) * r, o.y + (i - o.y) * r, o.z + (a - o.z) * r);
        };
      if (e === `wave`)
        (i(b.armR, 2.7, 0, 0.35),
          i(b.foreR, 0.4 + 0.4 * Math.sin(t * 11), 0, 0));
      else if (e === `cheer`) {
        let e = 0.15 * Math.abs(Math.sin(t * 7));
        (i(b.armL, 2.9, 0, -0.3 - e),
          i(b.armR, 2.9, 0, 0.3 + e),
          i(b.foreL, 0.25, 0, 0),
          i(b.foreR, 0.25, 0, 0));
      } else
        e === `bow` &&
          (i(b.spine, -0.55, 0, 0),
          i(b.chest, -0.3, 0, 0),
          i(b.neck, -0.2, 0, 0));
    }
    hideTag() {
      ((this.tagShown = !1),
        (this.tag.style.display = `none`),
        this.bubble.clear());
    }
    static _v = new l();
    updateTag(t, n, r, i, a, o, s) {
      let c = this.pose,
        l = e._v.set(a, o + (i ? i + 0.6 + this.seatIdx * 0.42 : 2.05), s),
        u = l.distanceTo(t.position);
      l.applyMatrix4(t.matrixWorldInverse);
      let d = l.z < -0.2;
      l.applyMatrix4(t.projectionMatrix);
      let f = d && u < 120 && Math.abs(l.x) < 1.05 && Math.abs(l.y) < 1.05;
      if (
        (f !== this.tagShown &&
          ((this.tagShown = f),
          (this.tag.style.display = f ? `block` : `none`)),
        !f)
      )
        return;
      let p =
        (c.flags & 32 ? `⏸ ` : ``) +
        this.ctx.t(V(this.slot, this.char, this.name)) +
        (this.wanted > 0 ? ` ` + `★`.repeat(Math.min(5, this.wanted)) : ``) +
        (c.flags & 32 ? ` · ${this.ctx.t(U.afkTag)}` : ``);
      p !== this.tagText && ((this.tagText = p), (this.tag.textContent = p));
      let m = Math.round((l.x * 0.5 + 0.5) * n),
        h = Math.round((-l.y * 0.5 + 0.5) * r);
      Math.abs(m - this.tagX) + Math.abs(h - this.tagY) >= 1 &&
        ((this.tagX = m),
        (this.tagY = h),
        (this.tag.style.transform = `translate(${m}px, ${h}px) translate(-50%, -100%)`));
    }
    dispose() {
      ((this.disposed = !0),
        this.policeUniformVersion++,
        this.policeVest?.dispose(),
        (this.policeVest = null),
        this.ctx.dynamics.remove(this.body),
        this.root.removeFromParent(),
        this.attack?.dispose(),
        this.av?.dispose(),
        (this.av = null),
        this.tag.remove(),
        this.bubble.dispose());
    }
  },
  xr = class {
    ctx;
    fleets = new Map();
    parkedBodies = new Map();
    seen = new Set();
    constructor(e) {
      this.ctx = e;
    }
    prewarm() {
      let e = tr();
      for (let t of [`sedan`, `scooter`])
        try {
          let n = this.ctx.vehicles.createFleet?.(t, 1, {
            glow: !0,
            rider: !1,
          });
          if (!n) continue;
          (n.set(0, 0, 0, 0, 0, 16777215, 0, 0.5),
            (n.count = 1),
            n.commit(),
            e.push(n.object));
        } catch {}
      return e;
    }
    fleet(e) {
      let t = this.fleets.get(e);
      if (t) return t;
      try {
        t = this.ctx.vehicles.createFleet?.(e, 8, { glow: !0, rider: !1 });
      } catch (t) {
        return (console.warn(`[net] remote fleet`, e, t), null);
      }
      return t
        ? ((t.object.name = `net-cars-${e}`),
          (t.object.userData.owner = `net`),
          (t.count = 0),
          this.ctx.scene.add(t.object),
          this.fleets.set(e, t),
          t)
        : null;
    }
    drawn = !1;
    draw(e, t) {
      if (!e.length && !t.length && !this.drawn && !this.parkedBodies.size)
        return;
      this.drawn = e.length > 0 || t.length > 0;
      for (let e of this.fleets.values()) e.count = 0;
      for (let t = 0; t < e.length; t++) {
        let { v: n, p: r } = e[t];
        this.put(n, r.x, r.y, r.z, r.heading, r.flags & 8 ? 16 : 0, r);
      }
      let n = this.seen;
      n.clear();
      for (let e = 0; e < t.length; e++) {
        let r = t[e];
        (this.put(r, r.x, r.y, r.z, r.heading, 0, r.visualPose), n.add(r.id));
        let i = this.parkedBodies.get(r.id);
        if (!i) {
          let e = this.ctx.vehicles.specs[r.kind];
          ((i = {
            id: d(),
            kind: `vehicle`,
            owner: `net`,
            x: r.x,
            y: r.y,
            z: r.z,
            heading: r.heading,
            halfW: e.halfW,
            halfL: e.halfL,
            radius: Math.hypot(e.halfW, e.halfL),
            height: e.height,
            vx: 0,
            vz: 0,
            mass: e.mass,
            active: !0,
            userData: { net: !0, shared: r.id },
          }),
            this.ctx.dynamics.add(i),
            this.parkedBodies.set(r.id, i));
        }
        ((i.x = r.x), (i.z = r.z), (i.y = r.y), (i.heading = r.heading));
      }
      for (let [e, t] of this.parkedBodies)
        n.has(e) || (this.ctx.dynamics.remove(t), this.parkedBodies.delete(e));
      for (let e of this.fleets.values()) e.commit();
    }
    put(e, t, n, r, i, a, o) {
      let s = this.fleet(e.kind);
      !s ||
        s.count >= s.capacity ||
        (s.set(
          s.count,
          t,
          n,
          r,
          i,
          e.color,
          e.condition?.destroyed ? le.wrecked : a,
          e.seed,
          o,
        ),
        s.count++);
    }
    dispose() {
      for (let e of this.fleets.values())
        (e.object.removeFromParent(), e.dispose());
      this.fleets.clear();
      for (let e of this.parkedBodies.values()) this.ctx.dynamics.remove(e);
      this.parkedBodies.clear();
    }
  },
  Sr = 5e3,
  Cr = 250,
  wr = 2,
  Tr = [`clear`, `cloudy`, `rain`, `storm`, `fog`],
  Er = (e, t, n) => (e < t ? t : e > n ? n : e),
  J = (e, t = 0) => (typeof e == `number` && Number.isFinite(e) ? e : t),
  Dr = class {
    ctx;
    session;
    remote;
    vehicles = new Map();
    myVehicle = 0;
    localToShared = new Map();
    sharedToLocal = new Map();
    pendingClaim = null;
    inLocal = -1;
    nextRef = 1;
    nextId = 1;
    clockT = 0;
    impacts = new Map();
    restore = null;
    impactCooldown = new Map();
    offs = [];
    onDriver;
    onOwned;
    muted = () => !1;
    taking = new Map();
    pendingTransfers = new Map();
    lifecycle = 0;
    _dir = new l();
    vehicleTick = 0;
    conditionKeys = new Map();
    conditionSent = new Map();
    conditionBudget = new on(4e3, 1200);
    pendingConditions = new Map();
    damageEmitters = new Map();
    explosions = new Map();
    fxCandidates = [];
    fxView = {};
    lastSay = new Map();
    stats = {
      hitsSent: 0,
      hitsTaken: 0,
      claims: 0,
      impacts: 0,
      dmgApplied: 0,
      clockSyncs: 0,
      vehicleStatesSent: 0,
      vehicleStateBytes: 0,
      vehicleStatesReceived: 0,
      vehicleStateRejected: 0,
      vehicleBackpressure: 0,
      vehicleFxFrames: 0,
      vehicleBlasts: 0,
    };
    constructor(e, t, n) {
      ((this.ctx = e), (this.session = t), (this.remote = n));
    }
    start() {
      let e = this.ctx.events;
      this.offs.push(
        e.on(`player:enterVehicle`, ({ vehicleId: e }) => this.entered(e)),
        e.on(`player:exitVehicle`, ({ vehicleId: e }) => this.exited(e)),
        e.on(`vehicle:destroyed`, ({ vehicleId: e }) => this.destroyedLocal(e)),
        e.on(
          `player:died`,
          ({ cause: e }) =>
            this.session.role !== `off` &&
            this.session.sendEvent({
              t: `died`,
              cause: String(e).slice(0, 32),
            }),
        ),
        e.on(
          `player:respawned`,
          () =>
            this.session.role !== `off` &&
            this.session.sendEvent({ t: `respawn` }),
        ),
        e.on(
          `wanted:changed`,
          ({ level: e }) =>
            this.session.role !== `off` &&
            this.session.sendEvent({ t: `wanted`, level: e }),
        ),
        e.on(
          `weather:changed`,
          () => this.session.role === `host` && this.sendClock(),
        ),
      );
    }
    dispose() {
      this.lifecycle++;
      for (let e of this.offs) e();
      this.offs.length = 0;
    }
    get hostSlot() {
      return this.session.hostSlot;
    }
    hostChanged() {
      (this.conditionSent.clear(),
        this.session.role === `host` &&
          ((this.nextId = Math.max(
            this.nextId,
            ...[...this.vehicles.keys()].map((e) => e + 1),
          )),
          this.sendClock()));
      let e = this.pendingClaim;
      e &&
        (this.session.role === `host`
          ? this.hostClaim(this.session.slot, e.msg)
          : this.session.sendEvent(e.msg, this.hostSlot));
    }
    resync() {
      (this.conditionSent.clear(),
        this.session.role === `host` &&
          ((this.nextId = Math.max(
            this.nextId,
            ...[...this.vehicles.keys()].map((e) => e + 1),
          )),
          this.sendClock()));
      let e = this.ctx.vehicles.playerVehicle;
      (e && !this.localToShared.has(e.id) && this.entered(e.id),
        this.announceWanted());
    }
    welcome(e) {
      for (let t of this.vehicles.values()) {
        let n = this.localOf(t.id);
        (n && this.captureVehicle(t, n),
          this.session.sendEvent({ t: `veh-spawn`, ref: 0, ...t }, e));
      }
      (this.sendClock(), this.announceWanted());
    }
    announceWanted() {
      try {
        this.session.sendEvent({ t: `wanted`, level: this.ctx.police.level });
      } catch {}
    }
    clear() {
      (this.lifecycle++,
        this.lastSay.clear(),
        this.vehicles.clear(),
        this.localToShared.clear(),
        this.sharedToLocal.clear(),
        (this.myVehicle = 0),
        (this.pendingClaim = null),
        (this.inLocal = -1),
        this.taking.clear(),
        this.pendingTransfers.clear(),
        (this.restore = null),
        this.impactCooldown.clear(),
        (this.clockT = 0),
        this.impacts.clear(),
        this.conditionKeys.clear(),
        this.conditionSent.clear(),
        this.pendingConditions.clear(),
        this.damageEmitters.clear(),
        this.explosions.clear(),
        (this.fxCandidates.length = 0),
        this.conditionBudget.reset(),
        (this.vehicleTick = 0));
    }
    entered(e) {
      if (((this.inLocal = e), this.session.role === `off`)) return;
      let t = this.localToShared.get(e);
      if (t) {
        ((this.myVehicle = t), this.onDriver?.(t, this.session.slot));
        return;
      }
      let n = this.ctx.vehicles.get(e);
      if (!n) return;
      let r = J(n.seed, (e * 0.6180339887) % 1),
        i = {
          t: `veh-claim`,
          ref: this.nextRef++,
          kind: n.kind,
          color: n.color >>> 0,
          seed: r,
          x: n.body.x,
          y: n.body.y,
          z: n.body.z,
          heading: n.heading,
          condition: lt(n, this.ctx.time.elapsed, 1),
          visualPose: n.visualPose,
        };
      ((this.pendingClaim = { ref: i.ref, local: e, msg: i }),
        this.stats.claims++,
        this.session.role === `host`
          ? this.hostClaim(this.session.slot, i)
          : this.session.sendEvent(i, this.hostSlot));
    }
    exited(e) {
      this.inLocal === e && (this.inLocal = -1);
      let t = this.localToShared.get(e);
      if (((this.myVehicle = 0), !t || this.session.role === `off`)) return;
      let n = this.ctx.vehicles.get(e),
        r = this.vehicles.get(t);
      if (!n || !r) return;
      ((r.x = n.body.x),
        (r.y = n.body.y),
        (r.z = n.body.z),
        (r.heading = n.heading),
        this.captureVehicle(r, n),
        this.session.sendEvent({
          t: `veh-park`,
          id: t,
          generation: r.generation ?? 0,
          x: r.x,
          y: r.y,
          z: r.z,
          heading: r.heading,
          condition: r.condition,
          visualPose: r.visualPose,
        }),
        this.onDriver?.(t, -1));
      let i = [...this.vehicles.values()].filter(
        (e) => e.owner === this.session.slot && e.id !== this.myVehicle,
      );
      for (; i.length > wr;) this.free(i.shift().id, !0);
    }
    destroyedLocal(e) {
      let t = this.localToShared.get(e),
        n = t ? this.vehicles.get(t) : void 0,
        r = this.ctx.vehicles.get(e);
      if (t && (r?.sinking ?? 0) > 0) {
        this.free(t, !0);
        return;
      }
      n && r && (this.captureVehicle(n, r), (this.vehicleTick = at));
    }
    free(e, t) {
      let n = this.vehicles.get(e)?.generation ?? 0,
        r = this.sharedToLocal.get(e);
      (r !== void 0 && this.localToShared.delete(r),
        this.sharedToLocal.delete(e),
        this.vehicles.delete(e),
        this.conditionKeys.delete(e),
        this.damageEmitters.delete(e),
        this.explosions.delete(e),
        this.pendingConditions.delete(e),
        this.taking.delete(e),
        this.pendingTransfers.delete(e));
      for (let t of this.conditionSent.keys())
        t.startsWith(`${e}:`) && this.conditionSent.delete(t);
      (this.myVehicle === e && (this.myVehicle = 0),
        t && this.session.sendEvent({ t: `veh-free`, id: e, generation: n }));
    }
    hostClaim(e, t) {
      let n = String(t.kind);
      if (!this.ctx.vehicles.specs[n]) return;
      let r = J(t.ref),
        i =
          r > 0
            ? [...this.vehicles.values()].find(
                (t) => t.owner === e && t.claimRef === r,
              )
            : void 0;
      if (i) {
        this.session.sendEvent({ t: `veh-spawn`, ref: r, ...i });
        return;
      }
      for (
        this.nextId > 65535 && (this.nextId = 1);
        this.vehicles.has(this.nextId);
      )
        this.nextId++;
      let a = {
        t: `veh-spawn`,
        id: this.nextId++,
        ref: r,
        claimRef: r,
        generation: 0,
        owner: e,
        kind: n,
        color: J(t.color) >>> 0,
        seed: Er(J(t.seed), 0, 1),
        x: J(t.x),
        y: J(t.y),
        z: J(t.z),
        heading: J(t.heading),
        condition: ut(t.condition) ?? void 0,
        visualPose: dt(t.visualPose) ?? void 0,
      };
      (this.spawned(a), this.session.sendEvent(a));
    }
    spawned(e) {
      let t = J(e.id) | 0,
        n = String(e.kind),
        r = W(e.generation);
      if (t < 1 || t > 65535 || !this.ctx.vehicles.specs[n] || r === null)
        return;
      let i = J(e.owner) | 0,
        a = this.vehicles.get(t);
      if (a && r < (a.generation ?? 0)) return;
      (!a || r > (a.generation ?? 0)) &&
        this.vehicles.set(t, {
          id: t,
          kind: n,
          color: J(e.color) >>> 0,
          seed: Er(J(e.seed), 0, 1),
          owner: i,
          generation: r,
          claimRef: J(e.claimRef, J(e.ref)),
          x: J(e.x),
          y: J(e.y),
          z: J(e.z),
          heading: J(e.heading),
          condition: ut(e.condition) ?? void 0,
          visualPose: dt(e.visualPose) ?? void 0,
        });
      let o = this.pendingConditions.get(t);
      o &&
        (this.pendingConditions.delete(t),
        performance.now() - o.at < 5e3 &&
          this.receiveVehicleState(o.from, o.message));
      let s = this.pendingClaim;
      i === this.session.slot &&
        s &&
        s.ref === J(e.ref) &&
        ((this.pendingClaim = null),
        this.localToShared.set(s.local, t),
        this.sharedToLocal.set(t, s.local),
        (this.ctx.vehicles.playerVehicle?.id === s.local ||
          this.inLocal === s.local) &&
          ((this.myVehicle = t), this.onDriver?.(t, this.session.slot)));
    }
    parked(e, t) {
      t.length = 0;
      for (let n of this.vehicles.values())
        n.owner !== this.session.slot && !e.has(n.id) && t.push(n);
    }
    onRoster(e) {
      for (let t of [...this.vehicles.values()])
        e.has(t.owner) || this.free(t.id, !1);
    }
    localOf(e) {
      let t = this.sharedToLocal.get(e);
      return t === void 0 ? void 0 : this.ctx.vehicles.get(t);
    }
    captureVehicle(e, t) {
      let n = lt(t, this.ctx.time.elapsed, e.condition?.revision ?? 1);
      ((e.x = t.body.x),
        (e.y = t.body.y),
        (e.z = t.body.z),
        (e.heading = t.heading),
        (e.visualPose = {
          pitch: 0,
          roll: 0,
          heave: 0,
          surge: 0,
          ...t.visualPose,
        }));
      let r =
        ft(n) +
        (this.myVehicle !== e.id || n.destroyed
          ? `:` + pt(e, e.visualPose)
          : ``);
      return (
        this.conditionKeys.get(e.id) !== r &&
          ((n.revision = Math.min(
            2147483647,
            (e.condition?.revision ?? 0) + 1,
          )),
          this.conditionKeys.set(e.id, r)),
        (e.condition = n),
        r
      );
    }
    syncVehicleConditions() {
      let e = performance.now(),
        t = [];
      for (let [t, n] of this.pendingConditions)
        e - n.at > 5e3 && this.pendingConditions.delete(t);
      for (let [t, n] of this.pendingTransfers) {
        for (let [t, r] of n) e - r.at > 5e3 && n.delete(t);
        n.size || this.pendingTransfers.delete(t);
      }
      for (let [t, n] of this.taking) e - n.at > 4e3 && this.taking.delete(t);
      for (let e of this.vehicles.values()) {
        if (e.owner !== this.session.slot) continue;
        let n = this.localOf(e.id);
        if (!n) {
          this.free(e.id, !0);
          continue;
        }
        let r = this.captureVehicle(e, n),
          i = {
            t: `veh-state`,
            id: e.id,
            generation: e.generation ?? 0,
            condition: e.condition,
            x: e.x,
            y: e.y,
            z: e.z,
            heading: e.heading,
            visualPose: e.visualPose,
          },
          a = JSON.stringify(i).length + 64;
        for (let n of this.session.members.values()) {
          if (n.slot === this.session.slot) continue;
          let o = `${e.id}:${n.slot}`,
            s = this.remote(n.slot);
          if (!(
            n.slot === this.hostSlot ||
            (s?.buf.count && Math.hypot(s.pose.x - e.x, s.pose.z - e.z) <= 180)
          )) {
            this.conditionSent.delete(o);
            continue;
          }
          let c =
              this.session.linkOf(n.peer) ??
              this.session.linkOf(this.session.hostPeer),
            l = this.conditionSent.get(o);
          if (l?.key !== r || l.link !== c) {
            if (
              !c ||
              c.events.readyState !== `open` ||
              c.events.bufferedAmount > 16384
            ) {
              this.stats.vehicleBackpressure++;
              continue;
            }
            t.push({
              delivery: o,
              key: r,
              link: c,
              message: i,
              bytes: a,
              to: n.slot,
              at: l?.at ?? -1 / 0,
            });
          }
        }
      }
      t.sort((e, t) => e.at - t.at);
      for (let n of t) {
        if (!this.conditionBudget.take(n.bytes, e)) {
          this.stats.vehicleBackpressure++;
          continue;
        }
        (this.session.sendEvent(n.message, n.to),
          this.conditionSent.set(n.delivery, {
            key: n.key,
            link: n.link,
            at: e,
          }),
          this.stats.vehicleStatesSent++,
          (this.stats.vehicleStateBytes += n.bytes));
      }
    }
    receiveVehicleState(e, t) {
      let n = J(t.id) | 0,
        r = ut(t.condition),
        i = dt(t.visualPose),
        a = W(t.generation),
        o = [`x`, `y`, `z`, `heading`].every(
          (e) =>
            typeof t[e] == `number` &&
            Number.isFinite(t[e]) &&
            Math.abs(t[e]) < 1e5,
        );
      if (n < 1 || n > 65535 || !r || a === null || !o) {
        this.stats.vehicleStateRejected++;
        return;
      }
      let s = this.vehicles.get(n);
      if (!s || a > (s.generation ?? 0)) {
        if (this.pendingConditions.size < 24 || this.pendingConditions.has(n)) {
          let i = this.pendingConditions.get(n),
            o = i ? (W(i.message.generation) ?? 0) : -1;
          (!i ||
            a > o ||
            (a === o &&
              (ut(i.message.condition)?.revision ?? 0) < r.revision)) &&
            this.pendingConditions.set(n, {
              from: e,
              message: t,
              at: performance.now(),
            });
        }
        return;
      }
      if (
        s.owner !== e ||
        e === this.session.slot ||
        a !== (s.generation ?? 0) ||
        r.revision <= (s.condition?.revision ?? 0)
      ) {
        this.stats.vehicleStateRejected++;
        return;
      }
      (mt(s.condition, r) && this.explosions.set(n, performance.now() + 400),
        (s.condition = r),
        (s.x = t.x),
        (s.y = t.y),
        (s.z = t.z),
        (s.heading = t.heading),
        i && (s.visualPose = i),
        this.stats.vehicleStatesReceived++);
    }
    updateVehicleFx(e, t = 0) {
      let n = this.ctx.camera.position,
        r = performance.now(),
        i = this.fxCandidates;
      i.length = 0;
      for (let [e, t] of this.explosions) t < r && this.explosions.delete(e);
      for (let e of this.vehicles.values()) {
        let t = e.condition;
        if (
          e.owner === this.session.slot ||
          !t ||
          !(
            t.onFire ||
            (t.health < 400 && !t.destroyed) ||
            (t.destroyed && t.wreckAge < 25) ||
            this.explosions.has(e.id)
          )
        )
          continue;
        let r = this.remote(e.owner);
        (!t.destroyed &&
          r?.buf.count &&
          r.pose.mode === 1 &&
          r.pose.vehicle === e.id &&
          ((e.x = r.pose.x),
          (e.y = r.pose.y),
          (e.z = r.pose.z),
          (e.heading = r.pose.heading)),
          !((e.x - n.x) ** 2 + (e.z - n.z) ** 2 > 140 ** 2) && i.push(e));
      }
      i.sort(
        (e, t) =>
          Number(this.explosions.has(t.id)) -
            Number(this.explosions.has(e.id)) ||
          (e.x - n.x) ** 2 +
            (e.z - n.z) ** 2 -
            (t.x - n.x) ** 2 -
            (t.z - n.z) ** 2,
      );
      for (let n = 0; n < Math.min(8, i.length); n++) {
        let r = i[n],
          a = this.explosions.delete(r.id);
        if (r.id === t && !a) continue;
        let o = this.damageEmitters.get(r.id);
        (o || this.damageEmitters.set(r.id, (o = { smoke: 0, fire: 0 })),
          Object.assign(this.fxView, r, r.condition),
          this.ctx.vehicles.remoteDamageFx?.(
            this.fxView,
            o,
            r.id === t ? 0 : e,
            a,
          ),
          this.stats.vehicleFxFrames++,
          a && this.stats.vehicleBlasts++);
      }
    }
    take(e) {
      let t = this.vehicles.get(e);
      if (
        !t ||
        t.owner === this.session.slot ||
        t.condition?.destroyed ||
        this.taking.has(e)
      )
        return !1;
      if (!this.session.supportsVehicleGeneration(t.owner))
        return (this.ctx.events.emit(`notify`, { text: ot, kind: `bad` }), !1);
      let n = this.ctx.player;
      return (
        this.taking.set(e, {
          at: performance.now(),
          x: n.position.x,
          y: n.position.y,
          z: n.position.z,
          vehicle: n.vehicleId,
          generation: t.generation ?? 0,
        }),
        this.session.sendEvent(
          { t: `veh-take`, id: e, generation: t.generation ?? 0 },
          t.owner,
        ),
        !0
      );
    }
    cancelTake(e) {
      this.taking.delete(e);
    }
    giveAway(e, t) {
      let n = this.vehicles.get(e);
      if (
        !n ||
        n.owner !== this.session.slot ||
        this.myVehicle === e ||
        t === this.session.slot ||
        n.condition?.destroyed
      )
        return;
      if (!this.session.supportsVehicleGeneration(t)) {
        this.session.sendEvent({ t: `seat-no`, id: e, why: `version` }, t);
        return;
      }
      let r = this.localOf(e);
      if (
        !r ||
        r.destroyed ||
        Math.abs(r.speed) > 3.5 ||
        (this.captureVehicle(n, r),
        r && (this.ctx.vehicles.playerVehicle === r || this.inLocal === r.id))
      )
        return;
      r &&
        !r.destroyed &&
        ((n.x = r.body.x),
        (n.y = r.body.y),
        (n.z = r.body.z),
        (n.heading = r.heading));
      let i = r ? Math.round(r.health) : 1e3,
        a = this.sharedToLocal.get(e);
      if (
        (a !== void 0 && this.localToShared.delete(a),
        this.sharedToLocal.delete(e),
        r)
      )
        try {
          this.ctx.vehicles.despawn(r);
        } catch {}
      ((n.owner = t),
        (n.generation = (n.generation ?? 0) + 1),
        (n.claimRef = void 0),
        n.condition && (n.condition.revision = 1),
        this.conditionKeys.delete(e),
        this.session.sendEvent({
          t: `veh-owner`,
          id: e,
          owner: t,
          generation: n.generation,
          x: n.x,
          y: n.y,
          z: n.z,
          heading: n.heading,
          health: i,
          condition: n.condition,
          visualPose: n.visualPose,
        }));
    }
    owned(e, t) {
      let n = this.vehicles.get(J(t.id) | 0),
        r = W(t.generation),
        i = J(t.owner, -1) | 0;
      if (
        !n ||
        n.condition?.destroyed ||
        r === null ||
        r <= (n.generation ?? 0) ||
        !this.session.supportsVehicleGeneration(e) ||
        !this.session.supportsVehicleGeneration(i)
      )
        return;
      if (r > (n.generation ?? 0) + 1) {
        let i = this.pendingTransfers.get(n.id);
        (!i &&
          this.pendingTransfers.size < 24 &&
          this.pendingTransfers.set(n.id, (i = new Map())),
          i &&
            i.size < 8 &&
            i.set(r, { from: e, message: t, at: performance.now() }));
        return;
      }
      if (n.owner !== e) return;
      let a = ut(t.condition);
      if (a?.destroyed) return;
      (a && (n.condition = { ...a, revision: 1 }),
        (n.visualPose = dt(t.visualPose) ?? n.visualPose),
        this.conditionKeys.delete(n.id));
      for (let e of this.conditionSent.keys())
        e.startsWith(`${n.id}:`) && this.conditionSent.delete(e);
      ((n.owner = i),
        (n.generation = r),
        (n.claimRef = void 0),
        (n.x = J(t.x, n.x)),
        (n.y = J(t.y, n.y)),
        (n.z = J(t.z, n.z)),
        (n.heading = J(t.heading, n.heading)));
      let o = this.pendingConditions.get(n.id);
      if (
        (o &&
          (W(o.message.generation) ?? 0) <= r &&
          (this.pendingConditions.delete(n.id),
          performance.now() - o.at < 5e3 &&
            this.receiveVehicleState(o.from, o.message)),
        n.owner === this.session.slot)
      ) {
        let e = this.taking.get(n.id),
          i = this.ctx.player,
          a =
            !!e &&
            e.generation === r - 1 &&
            performance.now() - e.at <= 4e3 &&
            !this.ctx.paused &&
            (i.mode === `foot` || i.mode === `vehicle`) &&
            i.vehicleId === e.vehicle &&
            Math.hypot(i.position.x - e.x, i.position.z - e.z) <= 3 &&
            Math.abs(i.position.y - e.y) < 3 &&
            Math.hypot(i.position.x - n.x, i.position.z - n.z) <
              (this.ctx.vehicles.specs[n.kind].halfL ?? 2) + 4;
        (this.taking.delete(n.id), this.onOwned?.(n.id, a));
        let o;
        try {
          ((o = this.ctx.vehicles.spawn(n.kind, n.x, n.z, n.heading, {
            color: n.color,
            seed: n.seed,
            y: n.y,
            health: Er(J(t.health, 1e3), 1, 1e3),
          })),
            n.condition && this.ctx.vehicles.applyCondition?.(o, n.condition),
            this.localToShared.set(o.id, n.id),
            this.sharedToLocal.set(n.id, o.id),
            a ? this.ctx.vehicles.putPlayerIn(o) : this.onDriver?.(n.id, -1));
        } catch (e) {
          if ((console.warn(`[net] take`, e), o))
            try {
              this.ctx.vehicles.despawn(o);
            } catch {}
          this.free(n.id, !0);
        }
      }
      let s = this.pendingTransfers.get(n.id),
        c = s?.get(r + 1);
      c &&
        (s.delete(r + 1),
        s.size || this.pendingTransfers.delete(n.id),
        this.owned(c.from, c.message));
    }
    impact(e, t, n, r, i) {
      let a = this.ctx.vehicles.playerVehicle;
      if (!a || i !== a.body || !t) return;
      this.restore ??= { v: a, health: a.health };
      let o = performance.now();
      if (o - (this.impactCooldown.get(t) ?? -1e9) < 400) return;
      this.impactCooldown.set(t, o);
      let s = Math.hypot(n, r);
      this.stats.impacts++;
      let c = { t: `impact`, a: this.myVehicle, b: t, j: s };
      this.session.role === `host`
        ? this.hostImpact(c)
        : this.session.sendEvent(c, this.hostSlot);
    }
    hostImpact(e) {
      let t = J(e.a) | 0,
        n = J(e.b) | 0,
        r = Math.max(0, J(e.j));
      if (!n || t === n) return;
      let i = t < n ? `${t}:${n}` : `${n}:${t}`,
        a = this.impacts.get(i),
        o = performance.now();
      if (a && !a.done && o - a.t < Cr) {
        a.j = Math.max(a.j, r);
        return;
      }
      let s = { a: Math.min(t, n), b: Math.max(t, n), j: r, t: o, done: !1 };
      this.impacts.set(i, s);
      let c = this.lifecycle;
      setTimeout(() => {
        if (c === this.lifecycle && this.session.role === `host`) {
          ((s.done = !0), this.impacts.delete(i));
          for (let e of [s.a, s.b]) {
            let t = this.vehicles.get(e);
            if (!t) continue;
            let n = Or(this.ctx.vehicles.specs[t.kind].mass, s.j);
            if (n <= 0) continue;
            let r = { t: `veh-dmg`, id: e, amount: Math.round(n) };
            t.owner === this.session.slot
              ? this.applyDamage(r)
              : this.session.sendEvent(r, t.owner);
          }
        }
      }, Cr);
    }
    applyDamage(e) {
      let t = this.sharedToLocal.get(J(e.id) | 0),
        n = t === void 0 ? void 0 : this.ctx.vehicles.get(t);
      if (!n || n.destroyed) return;
      let r = Er(J(e.amount), 0, 1e3),
        i = n.health > 150 ? 140 : 1;
      n.health = Math.max(i, n.health - r);
      let a = this.restore;
      (a && a.v === n && (a.health = Math.max(i, a.health - r)),
        (this.stats.dmgApplied += r));
    }
    hit(e, t) {
      if (!this.session.pvp || (this.remote(e)?.pose.flags ?? 0) & 32) return;
      let n = t.source,
        r = this.ctx.vehicles.playerVehicle;
      if (
        !(
          n === `player` ||
          n === `explosion` ||
          (n === `vehicle` &&
            r &&
            Math.hypot(
              r.body.x - (t.point?.x ?? r.body.x),
              r.body.z - (t.point?.z ?? r.body.z),
            ) < 10)
        ) ||
        !(t.amount > 0)
      )
        return;
      let i = t.amount;
      if (n === `vehicle`) {
        let e = i / 7.5 + 2;
        if (((i = e < 4.2 ? 0 : Math.min(70, (e - 4) * 3.5)), i <= 0)) return;
      }
      (this.stats.hitsSent++,
        this.session.sendEvent(
          {
            t: `hit`,
            amount: Math.min(250, i),
            src: n,
            weapon: t.weapon ?? ``,
            dx: t.dir?.x ?? 0,
            dz: t.dir?.z ?? 0,
          },
          e,
        ));
    }
    sendClock() {
      this.clockT = 0;
      try {
        this.session.sendEvent({
          t: `clock`,
          hour: this.ctx.env.hour,
          weather: this.ctx.env.weather,
          scale: this.ctx.env.timeScale,
        });
      } catch {}
    }
    applyClock(e) {
      let t = this.ctx.env,
        n = J(e.hour, -1);
      try {
        if (n >= 0 && n < 24) {
          let e = Math.abs(n - t.hour);
          ((e = Math.min(e, 24 - e)), e > 0.05 && t.setHour(n));
        }
        let r = String(e.weather);
        Tr.includes(r) && r !== t.weather && t.setWeather(r, 8);
        let i = J(e.scale, t.timeScale);
        (i > 0 && i < 100 && (t.timeScale = i), this.stats.clockSyncs++);
      } catch {}
    }
    onEvent(e, t) {
      let n = this.session.role === `host`,
        r = this.remote(e);
      switch (t.t) {
        case `veh-claim`:
          n && this.hostClaim(e, t);
          return;
        case `veh-spawn`:
          e === this.hostSlot && this.spawned(t);
          return;
        case `veh-state`:
          this.receiveVehicleState(e, t);
          return;
        case `horn`: {
          let e = r?.pose,
            t =
              e && e.mode === 1 && e.vehicle
                ? this.vehicles.get(e.vehicle)
                : void 0;
          if (!e || !t) return;
          try {
            this.ctx.audio.play(ge[t.kind]?.horn ?? `horn_car`, {
              x: e.x,
              y: e.y + 1,
              z: e.z,
            });
          } catch {}
          return;
        }
        case `emote`: {
          let e = String(t.id);
          r &&
            (e === `wave` || e === `cheer` || e === `bow`) &&
            (r.emote = { id: e, t: 0 });
          return;
        }
        case `veh-take`:
          W(t.generation) ===
            (this.vehicles.get(J(t.id) | 0)?.generation ?? 0) &&
            this.giveAway(J(t.id) | 0, e);
          return;
        case `veh-owner`:
          this.owned(e, t);
          return;
        case `veh-park`: {
          let n = this.vehicles.get(J(t.id) | 0);
          if (!n || n.owner !== e || W(t.generation) !== (n.generation ?? 0))
            return;
          if (t.condition !== void 0) {
            this.receiveVehicleState(e, { ...t, t: `veh-state` });
            return;
          }
          ((n.x = J(t.x, n.x)),
            (n.y = J(t.y, n.y)),
            (n.z = J(t.z, n.z)),
            (n.heading = J(t.heading, n.heading)));
          return;
        }
        case `veh-free`: {
          let n = this.vehicles.get(J(t.id) | 0);
          n &&
            W(t.generation) === (n.generation ?? 0) &&
            (n.owner === e || e === this.hostSlot) &&
            this.free(n.id, !1);
          return;
        }
        case `impact`:
          n && this.hostImpact(t);
          return;
        case `veh-dmg`:
          e === this.hostSlot && this.applyDamage(t);
          return;
        case `hit`: {
          let e = Er(J(t.amount), 0, 250);
          if (!e || this.ctx.paused || !this.session.pvp) return;
          this.stats.hitsTaken++;
          let n = this.ctx.player.position;
          this._dir.set(J(t.dx), 0, J(t.dz));
          try {
            this.ctx.player.damage({
              amount: e,
              source: `player`,
              weapon: String(t.weapon || ``) || void 0,
              point: n.clone().setY(n.y + 1),
              dir: this._dir.clone(),
            });
          } catch {}
          return;
        }
        case `died`:
          r &&
            this.ctx.events.emit(`notify`, {
              text: U.down(e, r.char, r.name),
              kind: `info`,
            });
          return;
        case `respawn`:
          r?.buf.reset();
          return;
        case `wanted`:
          r && (r.wanted = Er(J(t.level), 0, 5) | 0);
          return;
        case `clock`:
          e === this.hostSlot && !n && this.applyClock(t);
          return;
        case `say`: {
          let n = ar(t.s);
          if (!n || !r || this.muted(e)) return;
          let i = performance.now();
          if (i - (this.lastSay.get(e) ?? -1e9) < 960) return;
          if ((this.lastSay.set(e, i), !r.say(n))) {
            let t = V(e, r.char, r.name);
            this.ctx.events.emit(`notify`, {
              text: { zh: `${t.zh}：${n}`, en: `${t.en}: ${n}` },
              kind: `info`,
              duration: 6,
            });
          }
          return;
        }
        case `chat`: {
          let n = it[J(t.i, -1) | 0];
          if (!n || !r || this.muted(e)) return;
          let i = V(e, r.char, r.name);
          this.ctx.events.emit(`notify`, {
            text: { zh: `${i.zh}：${n.zh}`, en: `${i.en}: ${n.en}` },
            kind: `info`,
            duration: 4,
          });
          return;
        }
      }
    }
    update(e) {
      let t = this.restore;
      (t &&
        ((this.restore = null),
        !t.v.destroyed && t.v.health < t.health && (t.v.health = t.health)),
        this.session.role === `host` &&
          ((this.clockT += e * 1e3), this.clockT >= Sr && this.sendClock()));
      for (let t of this.vehicles.values())
        t.owner !== this.session.slot &&
          t.condition &&
          (t.condition.destroyed
            ? (t.condition.wreckAge = Math.min(
                30,
                t.condition.wreckAge + Math.min(0.1, e),
              ))
            : t.condition.onFire &&
              (t.condition.fireFuse = Math.max(
                0,
                t.condition.fireFuse - Math.min(0.1, e),
              )));
      this.session.role !== `off` &&
        (this.vehicleTick += e) >= 0.25 &&
        ((this.vehicleTick = 0), this.syncVehicleConditions());
    }
  };
