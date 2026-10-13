// tokyo__assets__actors-Bnj6Q1ad 116 — math
// Lines 55185-55961 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var Gk = { live: 0, animated: 0, rbx: 0, lib: 0, pending: 0, ms: 0 },
  Kk = class e {
    ctx;
    root = new _();
    mesh = null;
    meshes = [];
    bones = [];
    kind = `pending`;
    ready;
    role;
    roleKey;
    names = [];
    x = 0;
    z = 0;
    y = 0;
    heading = 0;
    speed = 0;
    anim = `idle`;
    tx = 0;
    tz = 0;
    moveSpeed = 0;
    moving = !1;
    arriveRadius = 0.35;
    collide = !0;
    look = null;
    body = null;
    height = 1.72;
    onRemove = null;
    talkT = 0;
    talkTo = null;
    listenT = 0;
    listenTo = null;
    av = null;
    mocap = null;
    rc = null;
    libAnim = null;
    desc;
    queued = null;
    onBuilt = null;
    frame = new x();
    visible = !0;
    attached = !1;
    disposed = !1;
    t = Math.random() * 10;
    seed;
    tick = 0;
    acc = 0;
    hdPrev = 0;
    spPrev = 0;
    applied = null;
    repeatT = 0;
    oneShot = !1;
    wasMoving = !1;
    tgt = new Float32Array(Ek * 3);
    cur = new Float32Array(Ek * 3);
    mask = new Float32Array(Ek);
    w = new Float32Array(Ek);
    hipDrop = 0;
    hipDropCur = 0;
    pitch = 0;
    pitchCur = 0;
    jaw = 0;
    castingShadow = !1;
    hscale = 1;
    constructor(e, t, n, r, i = 0, a = {}) {
      this.ctx = e;
      let o =
        typeof t == `string` ? ($k(t) ?? Zk.uncle) : t && t.face ? t : Zk.uncle;
      ((this.desc = o),
        (this.roleKey = typeof t == `string` ? t : (UO(o) ?? ``)),
        (this.role = a.role ?? BO(typeof t == `string` ? t : o)),
        a.names && this.setNames(a.names),
        (this.seed = ++Vk * 7919 + Math.floor(Math.random() * 1e3)),
        (this.root.name = `mission-actor`),
        (this.frame.name = `mission-actor-frame`),
        this.place(n, r, i),
        this.setAttached(!0));
      let s;
      if (hk(e) && !ZO(this.role.avatar)) {
        let t = WO.ready ? XO(this.role.avatar) : null;
        t && (a.immediate || Wk(e))
          ? (this.buildRbx(t), (s = Promise.resolve(!0)))
          : t
            ? ((this.queued = t), (s = new Promise((e) => (this.onBuilt = e))))
            : (s = new Promise((e) => {
                let t = !1,
                  n = (n) => {
                    if (!t) {
                      if (((t = !0), this.disposed)) return e(!1);
                      n && WO.ready
                        ? ((this.queued = n), (this.onBuilt = e))
                        : (this.buildLib(), e(!1));
                    }
                  };
                (QO(this.role.avatar).then(n, () => n(null)),
                  setTimeout(() => n(null), 12e3));
              }));
      } else (this.buildLib(), (s = Promise.resolve(!1)));
      this.ready = s;
    }
    buildRbx(e) {
      let t = new WO.api.RocketboxAvatar(e, {
          castShadow: !1,
          receiveShadow: !0,
          fringe: !1,
        }),
        n = V(this.role.scale ?? 1, 0.55, 1.1),
        r = (jO[e.entry.id] ?? 0.555) * e.entry.height;
      for (let e of t.meshes)
        ((e.material = mk(t, e, this.role.tint, r)), (e.frustumCulled = !0));
      (t.root.scale.setScalar(n),
        (this.av = t),
        (this.height = t.height * n),
        (this.hscale = this.height / 1.72),
        (this.bones = t.bones),
        (this.meshes = t.meshes),
        (this.mesh = t.meshes[0] ?? null),
        this.frame.scale.setScalar(n));
      let i = this.ctx,
        a = (e, t, n) =>
          i.groundAt ? i.groundAt(e, t, n, 0.45) : i.plan.groundHeight(e, t);
      ((this.mocap = new WO.Animator(
        WO.bindRig({ bones: t.bones, joints: t.adapter.proxy.joints }),
        WO.lib,
        { groundAt: a, seed: this.seed, autoLand: !1 },
      )),
        this.root.add(t.root),
        (this.kind = `rbx`),
        (this.applied = null),
        (this.castingShadow = !1),
        this.poseNow());
    }
    buildLib() {
      let e = bk(yk(this.desc, vk(this.ctx))),
        t = V(this.role.scale ?? 1, 0.55, 1.1);
      ((this.rc = e),
        (this.libAnim = new Ut(e, this.seed % 1e3)),
        e.root.scale.setScalar(t),
        (this.height = e.height * t),
        (this.hscale = this.height / 1.72),
        (this.bones = e.bones),
        (this.mesh = e.mesh),
        (this.meshes = [e.mesh]),
        (e.mesh.castShadow = !1),
        (e.mesh.receiveShadow = !0),
        this.root.add(e.root),
        (this.kind = `lib`),
        (this.castingShadow = !1),
        this.poseNow());
    }
    poseNow() {
      ((this.tick = 99),
        (this.acc = Math.max(this.acc, 1 / 30)),
        this.animate(0, 0));
    }
    ground(e, t, n) {
      try {
        return this.ctx.groundAt
          ? this.ctx.groundAt(e, t, n, 0.45)
          : this.ctx.plan.groundHeight(e, t);
      } catch {
        return this.ctx.plan.groundHeight(e, t);
      }
    }
    place(e, t, n = this.heading) {
      ((this.x = e),
        (this.z = t),
        (this.heading = n),
        (this.hdPrev = n),
        (this.y = this.ground(e, t, this.ctx.plan.groundHeight(e, t) + 0.3)),
        (this.moving = !1),
        (this.speed = 0),
        (this.spPrev = 0),
        this.sync(),
        this.mocap?.transitionFromRig(0.05));
    }
    moveTo(e, t, n = 1.4) {
      ((this.tx = e), (this.tz = t), (this.moveSpeed = n), (this.moving = !0));
    }
    stop() {
      this.moving = !1;
    }
    faceTo(e, t) {
      this.heading = Math.atan2(e - this.x, -(t - this.z));
    }
    distTo(e, t) {
      return Math.hypot(this.x - e, this.z - t);
    }
    lookAt(e) {
      this.look = e === `player` ? this.ctx.player.position : e;
    }
    setNames(e) {
      let t = [];
      for (let n of e)
        n &&
          (typeof n == `string`
            ? t.push(n.toLowerCase())
            : (n.zh && t.push(n.zh.toLowerCase()),
              n.en && t.push(n.en.toLowerCase())));
      this.names = t;
    }
    answersTo(e, t) {
      for (let n of this.names)
        if (
          n &&
          (n === e ||
            n === t ||
            (n.length >= 2 && (e.includes(n) || n.includes(e))))
        )
          return !0;
      return !1;
    }
    say(e, t) {
      ((this.talkT = e <= 0 ? 0 : Math.max(this.talkT, e)),
        (this.talkTo = t ?? null),
        (this.listenT = 0));
    }
    listen(e, t) {
      this.talkT > 0 ||
        ((this.listenTo = e), (this.listenT = Math.max(this.listenT, t)));
    }
    get speaking() {
      return this.talkT > 0;
    }
    play(e, t) {
      let n = this.mocap;
      if (!n) return !1;
      let r = Nk[e] ?? e,
        i = n.play(r, t ?? {});
      return (i && (this.oneShot = !0), i);
    }
    stopAction(e = 0.3) {
      ((this.oneShot = !1), this.mocap?.stop(e), (this.applied = null));
    }
    flinch(e, t, n = 0.6) {
      let r = this.mocap;
      if (!r) return;
      let i = e - this.x,
        a = t - this.z,
        o = Math.hypot(i, a) || 1,
        s = Math.sin(this.heading),
        c = Math.cos(this.heading);
      r.hit((i * c + a * s) / o, (-i * s + a * c) / o, n);
    }
    enableBody(e, t = `civilian`) {
      if (this.body) return this.body;
      let n = {
        id: Xe(),
        kind: `ped`,
        owner: `missions`,
        x: this.x,
        y: this.y,
        z: this.z,
        heading: this.heading,
        halfW: 0.32,
        halfL: 0.32,
        radius: 0.32,
        height: this.height,
        vx: 0,
        vz: 0,
        mass: 70,
        active: this.visible,
        userData: { missionActor: !0, role: t, noCrime: t === `criminal` },
        onDamage: (t) => e(t, t.dir?.x ?? 0, t.dir?.z ?? 0),
        onImpact: (t, n) => {
          Math.hypot(t, n) > 150 && e(null, t, n);
        },
      };
      this.body = n;
      try {
        this.ctx.dynamics.add(n);
      } catch {}
      return n;
    }
    setVisible(e) {
      ((this.visible = e),
        this.body && (this.body.active = e),
        (this.root.visible = e),
        e || this.setAttached(!1));
    }
    setAttached(e) {
      e === this.attached ||
        this.disposed ||
        ((this.attached = e),
        e ? this.ctx.scene.add(this.root) : this.ctx.scene.remove(this.root));
    }
    update(e) {
      if (this.disposed) return;
      if (this.queued && Wk(this.ctx)) {
        let e = this.queued;
        ((this.queued = null),
          this.buildRbx(e),
          this.onBuilt?.(!0),
          (this.onBuilt = null));
      }
      ((this.t += e),
        this.talkT > 0 && (this.talkT -= e),
        this.listenT > 0 && (this.listenT -= e));
      let t = this.ctx.camera.position,
        n = (t.x - this.x) * (t.x - this.x) + (t.z - this.z) * (t.z - this.z),
        r = this.visible && n < 28900;
      r !== this.attached && this.setAttached(r);
      let i = !!this.ctx.quality?.shadows && r && n < 784;
      if (i !== this.castingShadow) {
        this.castingShadow = i;
        for (let e of this.meshes) e.castShadow = i;
      }
      if (this.moving && !this.rooted()) {
        let t = this.tx - this.x,
          n = this.tz - this.z,
          r = Math.hypot(t, n);
        if (r < this.arriveRadius) this.moving = !1;
        else {
          let i = Math.atan2(t, -n);
          ((this.heading = Ye(this.heading, i, 9, e)),
            (this.speed += (this.moveSpeed - this.speed) * Je(4, e)));
          let a = Math.min(r, this.speed * e);
          ((this.x += (t / r) * a), (this.z += (n / r) * a));
        }
      }
      ((!this.moving || this.rooted()) &&
        (this.speed += (0 - this.speed) * Je(8, e)),
        this.collide &&
          this.speed > 0.05 &&
          ((Fk.x = this.x),
          (Fk.y = this.y),
          (Fk.z = this.z),
          this.ctx.statics.resolveCircle(Fk, 0.3, 1.7, Pk),
          (this.x = Fk.x),
          (this.z = Fk.z)));
      let a = this.attention();
      if (
        a &&
        !this.moving &&
        this.speed < 0.2 &&
        this.anim !== `fallen` &&
        this.anim !== `sit` &&
        (this.talkT > 0 || this.listenT > 0 || this.anim === `talk`)
      ) {
        let t = Math.atan2(a.x - this.x, -(a.z - this.z));
        Math.abs(z(t - this.heading)) > 0.9 &&
          (this.heading = Ye(this.heading, t, 2.6, e));
      }
      let o = this.ground(this.x, this.z, this.y);
      ((this.y += (o - this.y) * Je(14, e)),
        this.sync(),
        r && this.kind !== `pending` && this.animate(e, n));
    }
    rooted() {
      if (this.anim === `fallen`) return !0;
      let e = this.mocap?.action;
      return (
        !!e &&
        (e === `getup_back` ||
          e === `getup_front` ||
          e === `stand_up` ||
          e === `knockdown_back` ||
          e === `knockdown_front` ||
          e === `stagger`) &&
        this.mocap.actionProgress < 0.92
      );
    }
    attention() {
      return this.look
        ? this.look
        : this.talkT > 0
          ? (this.talkTo ?? this.ctx.player.position)
          : this.listenT > 0
            ? this.listenTo
            : null;
    }
    sync() {
      (this.root.position.set(this.x, this.y, this.z),
        (this.root.rotation.y = -this.heading),
        this.frame.position.set(this.x, this.y, this.z),
        (this.frame.rotation.y = -this.heading));
      let e = this.body;
      e &&
        ((e.x = this.x),
        (e.y = this.y),
        (e.z = this.z),
        (e.heading = this.heading),
        (e.vx = Math.sin(this.heading) * this.speed),
        (e.vz = -Math.cos(this.heading) * this.speed));
    }
    animate(e, t) {
      ((this.acc += e),
        Rk.center.set(this.x, this.y + 0.9, this.z),
        (Rk.radius = 1.3));
      let n = Bk(this.ctx).intersectsSphere(Rk),
        r = n ? (t < 2025 ? 1 : t < 8100 ? 2 : 4) : 8;
      if (++this.tick < r) return;
      this.tick = 0;
      let i = Math.min(this.acc, 0.25);
      this.acc = 0;
      let a = performance.now();
      (this.mocap && this.av
        ? this.animateRbx(i, t, n)
        : this.libAnim && this.rc && this.animateLib(i),
        (Gk.ms += performance.now() - a),
        Gk.animated++);
    }
    lookYaw(e) {
      let t = Math.atan2(e.x - this.x, -(e.z - this.z));
      return z(t - this.heading);
    }
    lookPitch(t) {
      let n = this.y + this.height * 0.93,
        r =
          t === this.ctx.player.position
            ? t.y + 1.55
            : t instanceof e
              ? t.y + t.height * 0.93
              : (t.y ?? n),
        i = Math.hypot(t.x - this.x, t.z - this.z);
      return Math.atan2(r - n, Math.max(0.6, i));
    }
    animateRbx(e, t, n) {
      let r = this.mocap;
      this.applyState(r, e);
      let i = r.input;
      ((i.speed = this.speed),
        (i.turnRate = e > 0 ? z(this.heading - this.hdPrev) / e : 0),
        (i.accel = e > 0 ? (this.speed - this.spPrev) / e : 0),
        (this.hdPrev = this.heading),
        (this.spPrev = this.speed),
        (i.grounded = !0),
        (i.verticalSpeed = 0),
        (i.guard = 0));
      let a = this.anim === `fallen` ? null : this.attention(),
        o = r;
      ((this.talkT > 0 || this.listenT > 0 || this.anim === `talk`) &&
        o.idleTime !== void 0 &&
        (o.idleTime = 0),
        a
          ? ((i.lookYaw = V(this.lookYaw(a), -1.3, 1.3)),
            (i.lookPitch = V(this.lookPitch(a), -0.5, 0.45)),
            (i.lookWeight = 0.95),
            o.gazeYaw !== void 0 && (o.gazeYaw = o.gazePitch = 0))
          : ((i.lookYaw = 0), (i.lookPitch = -0.05), (i.lookWeight = 0.65)),
        (r.footIK = n && t < 400),
        r.update(e, this.frame),
        this.gestures(e, !0),
        this.av.update());
    }
    applyState(e, t) {
      let n = this.anim,
        r = this.moving || this.speed > 0.45;
      if (r && !this.wasMoving && e.action) {
        let t = e.action;
        jk.has(t)
          ? e.play(t, {
              layer: `upper`,
              from: Math.max(0, e.actionTime),
              fadeIn: 0.15,
              hold: t === `point`,
            })
          : t !== `stand_up` &&
            t !== `getup_back` &&
            !t.startsWith(`stop_`) &&
            e.stop(0.25);
      }
      if (((this.wasMoving = r), r && Mk.has(n))) {
        this.applied === n &&
          (n === `sit` && e.play(`stand_up`), (this.applied = null));
        return;
      }
      if (n !== this.applied) {
        let t = this.applied;
        switch (
          ((this.applied = n),
          (this.oneShot = !1),
          (this.repeatT = 0),
          t === `sit`
            ? e.play(`stand_up`)
            : t === `fallen`
              ? e.play(`getup_back`)
              : t && Ok.has(t) && e.action && e.stop(0.35),
          n)
        ) {
          case `wave`:
            e.play(`wave`, { speed: 1.1 });
            break;
          case `cheer`:
            e.play(`cheer`);
            break;
          case `clap`:
            e.play(`clap`);
            break;
          case `point`:
            e.play(`point`, { hold: !0 });
            break;
          case `bow`:
            e.play(`bow`);
            break;
          case `pray`:
            e.play(`pray`);
            break;
          case `dance`:
            e.play(Ak[this.seed % Ak.length], { loop: !0 });
            break;
          case `fight`:
            e.play(`fight_idle`, { loop: !0 });
            break;
          case `phone`:
            e.play(`phone`);
            break;
          case `sit`:
            e.play(`sit_down`, { hold: !0 });
            break;
          case `fallen`:
            e.play(`knockdown_back`, { hold: !0, fadeIn: 0.06 });
            break;
          default:
            t &&
              Ok.has(t) &&
              t !== `sit` &&
              t !== `fallen` &&
              e.action &&
              e.stop(0.3);
        }
        return;
      }
      if (this.oneShot) {
        e.action || (this.oneShot = !1);
        return;
      }
      n === `sit` &&
        e.action === `sit_down` &&
        e.actionProgress >= 0.999 &&
        e.play(`sit_idle`, { loop: !0 });
      let i = kk[n];
      (i &&
        e.action !== i[0] &&
        (this.repeatT <= 0 &&
          (this.repeatT = i[1] + ((this.seed % 97) / 97) * (i[2] - i[1])),
        (this.repeatT -= t),
        this.repeatT <= 0 && e.play(i[0], { speed: n === `wave` ? 1.1 : 1 })),
        n === `phone` && !e.action && e.play(`phone`));
    }
    animateLib(e) {
      let t = this.speed,
        n =
          t < 0.05
            ? 0
            : t < 2.2
              ? Math.min(1, t / 1.3)
              : 1 + V((t - 2.2) / 2.3, 0, 1),
        r = 0,
        i =
          this.anim === `fallen` || this.anim === `phone`
            ? null
            : this.attention();
      (i && (r = -V(this.lookYaw(i), -1.1, 1.1)),
        this.libAnim.update(e, { gait: n, speed: t, look: r }),
        this.gestures(e, !1));
    }
    set(e, t, n, r) {
      let i = Dk[e];
      ((this.tgt[i * 3] = t),
        (this.tgt[i * 3 + 1] = n),
        (this.tgt[i * 3 + 2] = r),
        (this.mask[i] = 1));
    }
    gestures(e, t) {
      let n = this.speed,
        r = this.t,
        i = this.anim;
      this.mask.fill(0);
      let a = 0,
        o = 0,
        s = V(1 - n / 0.9, 0, 1),
        c = this.talkT > 0,
        l = t && !!this.mocap?.action && this.mocap.action !== `idle_stretch`;
      if (
        (i === `talk` || (c && (i === `idle` || (t && !Ok.has(i))))) &&
        s > 0.5 &&
        !l
      ) {
        let e = c ? 1 : 0.7;
        (this.set(H.foreR, (0.95 + Math.sin(r * 4.1) * 0.3) * e, 0, 0),
          this.set(H.armR, (0.3 + Math.sin(r * 2.7) * 0.18) * e, 0, 0.12),
          this.set(H.foreL, (0.5 + Math.sin(r * 3.3 + 1) * 0.2) * e, 0, 0));
      }
      if (!t || !Ok.has(i))
        switch (i) {
          case `wave`:
            (this.set(H.armR, 0.2, 0, 2.55),
              this.set(H.foreR, 0.2, 0, Math.sin(r * 9) * 0.45));
            break;
          case `hail`:
            (this.set(H.armR, 0.9, 0, 1.2),
              this.set(H.foreR, 0.1 + Math.sin(r * 7) * 0.25, 0, 0));
            break;
          case `point`:
            (this.set(H.armR, 1.45, 0, 0.1), this.set(H.foreR, 0.05, 0, 0));
            break;
          case `phone`:
            s > 0.5 &&
              (this.set(H.armR, 0.35, 0, 0.18),
              this.set(
                H.foreR,
                1.75 + Math.sin(r * 6.3) * 0.04 * (Math.sin(r * 0.9) > 0),
                0,
                -0.25,
              ),
              this.set(H.armL, 0.3, 0, -0.16),
              this.set(H.foreL, 1.55, 0, 0.3),
              this.set(H.head, -0.38, 0, 0));
            break;
          case `cheer`:
          case `clap`:
          case `dance`:
            (this.set(H.armL, 0.1, 0, -2.7 - Math.sin(r * 8) * 0.2),
              this.set(H.armR, 0.1, 0, 2.7 + Math.sin(r * 8) * 0.2),
              this.set(H.foreL, 0.3, 0, 0),
              this.set(H.foreR, 0.3, 0, 0),
              (a = -Math.abs(Math.sin(r * 8)) * 0.05));
            break;
          case `carry`:
            (this.set(H.armL, 0.7, 0, -0.1),
              this.set(H.armR, 0.7, 0, 0.1),
              this.set(H.foreL, 0.9, 0, 0),
              this.set(H.foreR, 0.9, 0, 0));
            break;
          case `handsUp`:
            (this.set(H.armL, 0.25, 0, -2.5),
              this.set(H.armR, 0.25, 0, 2.5),
              this.set(H.foreL, 0.15, 0, -0.9),
              this.set(H.foreR, 0.15, 0, 0.9));
            break;
          case `crossArms`:
            s > 0.5 &&
              (this.set(H.armL, 0.55, 0, 0.25),
              this.set(H.armR, 0.55, 0, -0.25),
              this.set(H.foreL, 0.15, -1.9, 0),
              this.set(H.foreR, 0.15, 1.9, 0));
            break;
          case `cower`:
            (this.set(H.thighL, 1.5, 0, -0.2),
              this.set(H.thighR, 1.5, 0, 0.2),
              this.set(H.shinL, -2.2, 0, 0),
              this.set(H.shinR, -2.2, 0, 0),
              this.set(H.chest, -0.45, 0, 0),
              this.set(H.spine, -0.15, 0, 0),
              this.set(H.armL, 2.3, 0, -0.35),
              this.set(H.armR, 2.3, 0, 0.35),
              this.set(H.foreL, 1.9, 0, 0),
              this.set(H.foreR, 1.9, 0, 0),
              this.set(H.head, -0.3, 0, 0),
              (a = 0.47 + Math.sin(r * 20) * 0.005));
            break;
          case `sit`:
            (this.set(H.thighL, 1.5, 0, -0.06),
              this.set(H.thighR, 1.5, 0, 0.06),
              this.set(H.shinL, -1.5, 0, 0),
              this.set(H.shinR, -1.5, 0, 0),
              (a = 0.45));
            break;
          case `fallen`:
            ((o = -Math.PI / 2 + 0.06),
              this.set(H.armL, 0.3, 0, -2.4 + Math.sin(r * 3) * 0.08),
              this.set(H.armR, 0.3, 0, 2.4 - Math.sin(r * 3.4) * 0.08),
              this.set(H.foreL, 0.4, 0, 0),
              this.set(H.foreR, 0.4, 0, 0),
              this.set(H.thighL, 0.1, 0, -0.18),
              this.set(H.thighR, -0.05 + Math.sin(r * 2.5) * 0.08, 0, 0.2),
              this.set(H.shinL, -0.4, 0, 0),
              this.set(H.shinR, -0.2, 0, 0),
              this.set(H.head, 0.35, 0.6, 0));
        }
      let u = Je(i === `fallen` ? 7 : 10, e),
        d = Je(13, e),
        f = this.bones,
        p = !1;
      for (let e = 0; e < Ek; e++) {
        let t = this.mask[e];
        if (t > 0) {
          let t = e * 3;
          if (this.w[e] < 0.001) {
            let n = f[Tk[e]].rotation;
            ((this.cur[t] = n.x),
              (this.cur[t + 1] = n.y),
              (this.cur[t + 2] = n.z));
          }
          ((this.cur[t] += (this.tgt[t] - this.cur[t]) * d),
            (this.cur[t + 1] += (this.tgt[t + 1] - this.cur[t + 1]) * d),
            (this.cur[t + 2] += (this.tgt[t + 2] - this.cur[t + 2]) * d));
        }
        if (((this.w[e] += (t - this.w[e]) * u), this.w[e] < 0.001)) {
          this.w[e] = 0;
          continue;
        }
        p = !0;
        let n = this.w[e],
          r = e * 3,
          i = f[Tk[e]].rotation;
        ((i.x += (this.cur[r] - i.x) * n),
          (i.y += (this.cur[r + 1] - i.y) * n),
          (i.z += (this.cur[r + 2] - i.z) * n));
      }
      if (p) {
        let e = f[H.footL].rotation,
          t = f[H.footR].rotation,
          n = this.w[Dk[H.shinL]],
          r = this.w[Dk[H.shinR]];
        (n > 0 &&
          (e.x +=
            (-(f[H.thighL].rotation.x + f[H.shinL].rotation.x) - e.x) * n),
          r > 0 &&
            (t.x +=
              (-(f[H.thighR].rotation.x + f[H.shinR].rotation.x) - t.x) * r));
      }
      let m = c
        ? 0.06 +
          0.12 *
            Math.abs(Math.sin(r * 10.7)) *
            (0.55 + 0.45 * Math.sin(r * 3.1))
        : 0;
      if (((this.jaw += (m - this.jaw) * Je(18, e)), c && i !== `fallen`)) {
        let e = f[H.head].rotation;
        ((e.x += Math.sin(r * 5.3) * 0.035 + Math.sin(r * 2.1) * 0.025),
          (e.z += Math.sin(r * 1.7) * 0.03));
      }
      let h = f[H.jaw];
      if (
        (h &&
          (this.jaw > 0.002 || h.rotation.x !== 0) &&
          (h.rotation.x = this.jaw > 0.002 ? -this.jaw : 0),
        (this.hipDrop = a * this.hscale),
        (this.hipDropCur += (this.hipDrop - this.hipDropCur) * u),
        Math.abs(this.hipDropCur) > 5e-4 &&
          (f[H.hips].position.y -= this.hipDropCur),
        !t)
      ) {
        ((this.pitch = o),
          (this.pitchCur += (this.pitch - this.pitchCur) * Je(8, e)));
        let t = this.rc.root;
        ((t.rotation.x = this.pitchCur),
          (t.position.y = Math.abs(Math.sin(this.pitchCur)) * 0.14));
      }
    }
    remove() {
      let e = this.onRemove;
      ((this.onRemove = null), e?.(), this.dispose());
    }
    dispose() {
      if (!this.disposed) {
        if (
          ((this.disposed = !0),
          (this.queued = null),
          this.onBuilt?.(!1),
          (this.onBuilt = null),
          this.setAttached(!1),
          this.body)
        ) {
          try {
            this.ctx.dynamics.remove(this.body);
          } catch {}
          this.body = null;
        }
        if (this.av) {
          let e = new Set();
          for (let t of this.av.meshes)
            e.has(t.skeleton) || (e.add(t.skeleton), t.skeleton.dispose());
          (this.av.dispose(), (this.av = null));
        }
        ((this.mocap = null), this.rc?.dispose(), (this.rc = null));
      }
    }
    get avatarId() {
      return this.kind === `lib` ? `library:${this.desc.id}` : this.role.avatar;
    }
    get action() {
      return this.mocap?.action ?? null;
    }
  };
