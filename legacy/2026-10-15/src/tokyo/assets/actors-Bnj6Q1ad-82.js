// tokyo/assets/actors-Bnj6Q1ad 82 — math
// Lines 41012-41732 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var tx = class e {
    id;
    av;
    anim;
    look;
    uni;
    holder = new x();
    palmL = new R();
    palmR = new R();
    phoneL = new R();
    tUmb = new R();
    tCup = new R();
    tCane = new R();
    tBag = new R();
    chestY;
    nose = new R(0, 0.07, -0.1);
    ped = null;
    gen = 0;
    w = 0;
    target = 0;
    fadeRate = 1 / Ob;
    k = 1;
    spd = 0;
    lastX = NaN;
    lastZ = NaN;
    prevH = 0;
    turn = 0;
    accel = 0;
    act = ``;
    punchT = 0;
    dtAcc = 0;
    dist = 0;
    inScene = !1;
    shadow = !1;
    lastUsed = 0;
    wR = 0;
    wL = 0;
    carryR = 0;
    carryL = 0;
    posed = !1;
    parity;
    static seq = 0;
    constructor(t, n, r, i) {
      ((this.id = t),
        (this.parity = e.seq++ & 3),
        (this.av = n),
        (this.anim = r),
        (this.look = i));
      let a = n.adapter.proxy.joints,
        o = a[H.armR],
        s = a[H.armL],
        c = n.height / 1.72;
      (this.palmL.subVectors(a[H.fingersL], a[H.handL]).multiplyScalar(0.62),
        this.palmR.subVectors(a[H.fingersR], a[H.handR]).multiplyScalar(0.62),
        this.phoneL.copy(this.palmL).add(zb.set(0.021 * c, 0, 0)),
        (this.palmR.x -= 0.022 * c),
        this.tUmb.set(o.x - 0.05 * c, o.y - 0.11 * c, o.z - 0.29 * c),
        this.tCup.set(o.x - 0.03 * c, o.y - 0.32 * c, o.z - 0.27 * c),
        this.tCane.set(o.x + 0.05 * c, o.y - 0.56 * c, o.z - 0.2 * c),
        this.tBag.set(s.x - 0.07 * c, s.y - 0.58 * c, s.z + 0.01 * c),
        (this.chestY = a[H.chest].y),
        (this.uni = {
          uPedAv: { value: new le(0, 0) },
          uAvTop: { value: new xe(1, 1, 1, 0) },
          uAvBot: { value: new xe(1, 1, 1, 0) },
          uAvTopRef: { value: new xe(1, 1, 1, 0.5) },
          uAvBotRef: { value: new xe(1, 1, 1, 0.5) },
          uAvZones: { value: new xe(1, 0.1, 0.3, 1) },
          uAvSkin: { value: new le(1, 0) },
        }),
        i &&
          (this.uni.uAvTopRef.value.set(i.top[0], i.top[1], i.top[2], i.topKey),
          this.uni.uAvBotRef.value.set(
            i.bottom[0],
            i.bottom[1],
            i.bottom[2],
            i.bottomKey,
          ),
          this.uni.uAvZones.value.set(i.waist, i.shoe, i.armX, +!!i.sleeves)));
      for (let e of n.meshes)
        ((e.material = ex(e.material, this.uni)),
          (e.castShadow = !1),
          (e.receiveShadow = !0));
      ((n.root.matrixAutoUpdate = !0),
        n.root.traverse((e) => {
          e.isBone &&
            ((e.matrixAutoUpdate = !1),
            e.updateMatrix(),
            this.bipBones.push(e));
        }));
    }
    bipBones = [];
    commitPose() {
      let e = this.bipBones;
      for (let t = 0; t < e.length; t++) e[t].updateMatrix();
    }
  },
  nx = class {
    ctx;
    enabled = !1;
    tier = Eb.high;
    api = null;
    mods = null;
    boot = null;
    assets = new Map();
    loading = new Set();
    failed = new Set();
    idle = new Map();
    nIdle = 0;
    slots = [];
    ids = [];
    proto = null;
    frame = 0;
    time = 0;
    forceMax = -1;
    forceEnter = -1;
    noTint = !1;
    sphereK = null;
    noses = new Map();
    camSpd = 0;
    camX = NaN;
    camZ = NaN;
    order = [];
    jsAvg = 0;
    stats = { active: 0, full: 0, loaded: 0, instances: 0, ms: 0, enabled: !1 };
    first = `casual-m`;
    constructor(e, t) {
      this.ctx = e;
      let n = e.params,
        r = n?.get(`pedavatars`);
      if (r === `0` || n?.get(`peds`) === `0` || n?.get(`pedlib`) === `0`)
        return;
      r != null &&
        Number(r) > 0 &&
        (this.forceMax = Math.min(24, Math.round(Number(r))));
      let i = Number(n?.get(`pedavdist`));
      (i > 0 && (this.forceEnter = i),
        (this.noTint = n?.get(`pedavtint`) === `0`),
        (this.ids = t.map((e) => Tb(e))),
        (this.enabled = !0),
        this.configure(),
        (this.boot = this.start()));
    }
    async start() {
      try {
        let [e, n, r, i] = await Promise.all([
            t(
              () => import(`./api-tBXVzspF.js`),
              __vite__mapDeps([
                6, 7, 1, 2, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25,
              ]),
            ),
            t(
              () => import(`./animator-C4Q6-_Wy.js`),
              __vite__mapDeps([0, 1, 2, 3, 4]),
            ),
            t(() => import(`./rig-BjRdQXtM.js`), __vite__mapDeps([4, 3])),
            t(() => import(`./clips-B74kfFEX.js`), __vite__mapDeps([5, 3])),
          ]),
          a = await i.loadAnimLibrary();
        return (
          (this.api = e),
          (this.mods = { Animator: n.Animator, bindRig: r.bindRig, lib: a }),
          await this.load(this.first),
          this.assets.has(this.first)
        );
      } catch (e) {
        return (
          console.warn(`[peds] avatars unavailable`, e),
          (this.enabled = !1),
          !1
        );
      }
    }
    async ready(e) {
      if (
        this.boot &&
        (await Promise.race([
          this.boot,
          new Promise((t) => setTimeout(() => t(!1), e)),
        ]))
      )
        try {
          let e = this.make(this.first);
          if (e) {
            for (let t of e.av.meshes) t.castShadow = !0;
            (e.anim.update(0.016, e.holder),
              e.av.update(),
              e.commitPose(),
              (this.proto = e.av.root),
              (this.proto.userData.pedsProto = e));
          }
        } catch (e) {
          console.warn(`[peds] avatar prototype failed`, e);
        }
    }
    prewarm() {
      let e = this.proto;
      return !e || e.parent ? [] : [e];
    }
    configure() {
      let e = this.ctx.quality,
        t = e.level,
        n = (e.mobile ? Db[t] : void 0) ?? Eb[t] ?? Eb.high;
      ((this.tier = { ...n, shadows: e.shadows ? n.shadows : 0 }),
        this.forceMax >= 0 && (this.tier.max = this.forceMax),
        this.forceEnter > 0 &&
          ((this.tier.enter = this.forceEnter),
          (this.tier.exit = this.forceEnter * 1.25)));
    }
    load(e) {
      let t = this.api;
      return !t ||
        this.assets.has(e) ||
        this.loading.has(e) ||
        this.failed.has(e)
        ? Promise.resolve()
        : (this.loading.add(e),
          t.loadAvatarAsset(e).then(
            (t) => {
              (this.loading.delete(e), this.assets.set(e, t));
            },
            (t) => {
              (this.loading.delete(e),
                this.failed.add(e),
                console.warn(`[peds] avatar load failed`, e, t));
            },
          ));
    }
    make(e) {
      let t = this.api,
        n = this.mods,
        r = this.assets.get(e);
      if (!t || !n || !r) return null;
      let i = S.prototype,
        a = i.computeBoundingSphere,
        o = this.sphereK,
        s = r.entry.height;
      o &&
        (i.computeBoundingSphere = function () {
          ((this.boundingSphere ??= new C()).center.set(
            o.x * s,
            o.y * s,
            o.z * s,
          ),
            (this.boundingSphere.radius = o.r * s));
        });
      let c;
      try {
        c = new t.RocketboxAvatar(r, {
          castShadow: !1,
          receiveShadow: !0,
          fringe: !1,
        });
      } finally {
        i.computeBoundingSphere = a;
      }
      if (!o && c.meshes.length) {
        let e = c.meshes[0].boundingSphere;
        e &&
          e.radius > 0 &&
          (this.sphereK = {
            x: e.center.x / s,
            y: e.center.y / s,
            z: e.center.z / s,
            r: e.radius / 1.35 / s,
          });
      }
      let l = this.noses.get(e);
      if (!l) {
        let t = Cb[e]?.nose;
        ((l = t ? new R(0, t[0], t[1]) : rx(c)), this.noses.set(e, l));
      }
      let u = new n.Animator(
          n.bindRig({ bones: c.bones, joints: c.adapter.proxy.joints }),
          n.lib,
          {
            footIK: !1,
            autoLand: !1,
            autoStop: !0,
            seed: 11 + ((this.frame * 7919) % 997),
          },
        ),
        d = new tx(e, c, u, Cb[e] ?? null);
      return (d.nose.copy(l), d);
    }
    takeIdle(e) {
      let t = this.idle.get(e);
      return !t || !t.length ? null : (this.nIdle--, t.pop());
    }
    putIdle(e) {
      (this.detach(e),
        (e.ped = null),
        (e.w = e.target = 0),
        (e.lastUsed = this.time));
      let t = this.idle.get(e.id);
      (t || this.idle.set(e.id, (t = [])), t.push(e), this.nIdle++);
      let n = this.tier.max <= 4 ? Mb : jb;
      for (; this.nIdle > n;) {
        let e = null;
        for (let t of this.idle.values())
          for (let n of t) (!e || n.lastUsed < e.lastUsed) && (e = n);
        if (!e) break;
        let t = this.idle.get(e.id);
        (t.splice(t.indexOf(e), 1), this.nIdle--, e.av.dispose());
        for (let t of e.av.meshes)
          (t.material.dispose(), t.skeleton?.dispose());
      }
    }
    attach(e) {
      e.inScene ||= (this.ctx.scene.add(e.av.root), !0);
    }
    detach(e) {
      e.inScene &&= (e.av.root.removeFromParent(), !1);
    }
    eligible(e) {
      if (!e.active || !e.alive || e.bike || e.lite || e.variant < 0 || e.dying)
        return !1;
      let t = this.ids[e.variant];
      if (!t || !t.length || e.pitch !== 0 || e.roll !== 0) return !1;
      let n = e.state;
      return n === 6 || n === 7 || n === 8 || n === 9 || n === 4
        ? !1
        : Pb[e.pose] === 1 && Pb[e.poseTarget] === 1;
    }
    avatarOf(e) {
      let t = this.ids[e.variant];
      return t[Math.floor(e.seed * 7919) % t.length];
    }
    update(e, t, n, r, i) {
      if (!this.enabled) return;
      let a = performance.now();
      (this.frame++, (this.time += e));
      let o = this.tier,
        s = this.ctx.renderer?.shed ?? 0,
        c = s > 0 ? Math.max(1, Math.round(o.max * (1 - 0.2 * s))) : o.max,
        l = s > 0.5 ? Math.max(1, o.full - 1) : o.full,
        u = this.ctx.camera.position,
        d = this.slots;
      if (e > 0 && !Number.isNaN(this.camX)) {
        let t = Math.hypot(u.x - this.camX, u.z - this.camZ) / e;
        this.camSpd += (Math.min(t, 60) - this.camSpd) * Math.min(1, e * 4);
      }
      ((this.camX = u.x), (this.camZ = u.z));
      let f = this.camSpd < 9,
        p = 0;
      for (let e = d.length - 1; e >= 0; e--) {
        let t = d[e],
          n = t.ped;
        if (!n || !n.active || n.gen !== t.gen) {
          (n && n.avSlot === e && this.clearPed(n),
            d.splice(e, 1),
            this.reindex(),
            this.putIdle(t));
          continue;
        }
        let r = n.x - u.x,
          i = n.z - u.z,
          a = n.y + 0.9 - u.y;
        t.dist = Math.sqrt(r * r + a * a + i * i);
        let s = this.eligible(n);
        (t.target === 1 && (!s || t.dist > o.exit)
          ? ((t.target = 0), (t.fadeRate = s ? 1 / Ob : 1 / kb))
          : t.target === 0 &&
            s &&
            t.dist < o.exit &&
            t.w > 0 &&
            ((t.target = 1), (t.fadeRate = 1 / Ob)),
          t.target === 1 && p++);
      }
      if (p > c) {
        this.sortSlots();
        for (let e = this.order.length - 1; e >= 0 && p > c; e--) {
          let t = this.order[e];
          t.target === 1 && ((t.target = 0), (t.fadeRate = 1 / Ob), p--);
        }
      }
      let m = 0,
        h = c + 3;
      for (let e = 0; e < i && f; e++) {
        let i = n[e],
          a = r[i];
        if (a > o.enter + Ab) break;
        let s = t[i];
        if (s.avSlot >= 0 || !this.eligible(s)) continue;
        let l = this.avatarOf(s);
        if (!this.assets.has(l)) {
          this.load(l);
          continue;
        }
        if (a > o.enter) continue;
        if (p >= c) {
          let e = this.farthestKept();
          if (!e || e.dist - a < 4) continue;
          ((e.target = 0), (e.fadeRate = 1 / Ob), p--);
        }
        if (d.length >= h) continue;
        let u = this.takeIdle(l);
        (!u && (m >= 1 || ((u = this.make(l)), m++, !u))) ||
          (this.assign(u, s), p++);
      }
      this.sortSlots();
      let g = 0,
        _ = 0;
      for (let t = 0; t < this.order.length; t++) {
        let n = this.order[t],
          r = n.ped;
        if (
          ((n.w = Rb(n.w + (n.target ? 1 : -1) * e * n.fadeRate, 0, 1)),
          n.target === 0 && n.w <= 0)
        ) {
          this.clearPed(r);
          let e = d.indexOf(n);
          (d.splice(e, 1), this.reindex(), this.putIdle(n));
          continue;
        }
        r.avW = n.w;
        let i = r.visible;
        (i ? this.attach(n) : this.detach(n), (n.dtAcc += e));
        let a =
            n.spd > 0.3 ||
            n.act === `wave` ||
            n.act === `fight` ||
            n.act === `pray`,
          s = i
            ? a
              ? t < l
                ? 1
                : n.dist < 11
                  ? 2
                  : 3
              : n.dist < 6
                ? 2
                : 3
            : 4;
        ((s === 1 || (this.frame + n.parity) % s === 0 || !n.posed) &&
          (this.animate(n, r, Math.min(0.25, n.dtAcc)),
          (n.dtAcc = 0),
          s === 1 && _++),
          this.place(n, r));
        let c = i && n.w > 0.5 && g < o.shadows;
        if ((c && g++, c !== n.shadow)) {
          n.shadow = c;
          for (let e of n.av.meshes) e.castShadow = c;
        }
        n.uni.uPedAv.value.set(r.fade * (1 - n.w), r.fade);
      }
      let v = this.stats;
      ((v.enabled = this.enabled),
        (v.active = d.length),
        (v.full = _),
        (v.loaded = this.assets.size),
        (v.instances = d.length + this.nIdle),
        (this.jsAvg += (performance.now() - a - this.jsAvg) * 0.05),
        (v.ms = +this.jsAvg.toFixed(3)));
    }
    farthestKept() {
      let e = null;
      for (let t of this.slots)
        t.target === 1 && (!e || t.dist > e.dist) && (e = t);
      return e;
    }
    sortSlots() {
      let e = this.order;
      e.length = 0;
      for (let t of this.slots) e.push(t);
      for (let t = 1; t < e.length; t++) {
        let n = e[t],
          r = t - 1;
        for (; r >= 0 && e[r].dist > n.dist;) ((e[r + 1] = e[r]), r--);
        e[r + 1] = n;
      }
    }
    reindex() {
      let e = this.slots;
      for (let t = 0; t < e.length; t++) {
        let n = e[t].ped;
        n && n.gen === e[t].gen && (n.avSlot = t);
      }
    }
    clearPed(e) {
      ((e.avSlot = -1), (e.avW = 0), (e.avHands = !1));
    }
    assign(e, t) {
      ((e.ped = t),
        (e.gen = t.gen),
        (e.w = 0),
        (e.target = 1),
        (e.fadeRate = 1 / Ob),
        (e.act = ``),
        (e.punchT = 0),
        (e.posed = !1),
        (e.dtAcc = 0),
        (e.wR = e.wL = 0),
        (e.carryR = e.carryL = 0));
      let n = t.x - this.ctx.camera.position.x,
        r = t.z - this.ctx.camera.position.z;
      ((e.dist = Math.hypot(n, r)),
        this.slots.push(e),
        (t.avSlot = this.slots.length - 1),
        (t.avW = 0),
        (t.avHands = !1),
        (e.k = Rb((1.72 * t.height) / e.av.height, 0.9, 1.1)),
        e.av.root.scale.setScalar(e.k),
        this.tint(e, t));
      let i = e.anim;
      i.action && i.stop(0);
      let a = Math.hypot(t.vx, t.vz);
      ((e.spd = a),
        (e.lastX = e.lastZ = NaN),
        (e.prevH = t.heading),
        (e.turn = 0),
        (e.accel = 0),
        this.placeHolder(e, t),
        this.input(e, t, 0.1),
        i.update(0.1, e.holder),
        i.update(0.1, e.holder));
      let o = i;
      if (
        (a > 0.2 &&
          typeof o.phase == `number` &&
          (o.phase = ((((t.rphase - Math.PI / 2) / Nb) % 1) + 1) % 1),
        typeof o.idleT == `number` && typeof o.idleNext == `number`)
      ) {
        let e = Math.max(1, o.idleNext + 0.05);
        o.idleT = ((t.seed * 7.31) % 1) * e * 0.9;
      }
      (typeof o.nextFidget == `number` &&
        typeof o.idleTime == `number` &&
        (o.nextFidget = o.idleTime + 12 + ((t.seed * 13.7) % 1) * 40),
        this.actions(e, t, !0));
    }
    tint(e, t) {
      let n = e.look,
        r = e.uni;
      if (!n || this.noTint) {
        ((r.uAvTop.value.w = r.uAvBot.value.w = 0), (r.uAvSkin.value.y = 0));
        return;
      }
      let i = t.vOuter && n.topIsOuter ? t.vOuter : t.vTop || t.vOuter;
      if (
        (sx(r.uAvTop.value, i, n.tintTop),
        sx(r.uAvBot.value, t.vBottom, n.tintBottom),
        n.skinLum)
      ) {
        let e = ox(t.skin || 14990748) / 0.56;
        r.uAvSkin.value.set(
          Rb((0.29 * Rb(e, 0.8, 1.12)) / n.skinLum, 0.85, 1.22),
          1,
        );
      } else r.uAvSkin.value.y = 0;
    }
    placeHolder(e, t) {
      let n = e.holder;
      (n.position.set(
        t.visible ? t.rx : t.x,
        t.y + t.seatY,
        t.visible ? t.rz : t.z,
      ),
        n.rotation.set(0, -t.heading, 0),
        n.scale.setScalar(e.k));
    }
    place(e, t) {
      let n = e.av.root;
      (n.position.set(
        t.visible ? t.rx : t.x,
        t.y + t.seatY,
        t.visible ? t.rz : t.z,
      ),
        n.rotation.set(0, -t.heading, 0));
    }
    input(e, t, n) {
      let r = e.anim.input,
        i = Math.hypot(t.vx, t.vz);
      if (n > 0.004 && !Number.isNaN(e.lastX)) {
        let r = Math.hypot(t.x - e.lastX, t.z - e.lastZ) / n;
        r < 9 && (i = r);
      }
      ((e.lastX = t.x), (e.lastZ = t.z));
      let a = Math.min(1, n * 12),
        o = e.spd;
      e.spd += (i - e.spd) * a;
      let s = n > 0 ? Lb(t.heading - e.prevH) / n : 0;
      ((e.prevH = t.heading),
        (e.turn += (s - e.turn) * a),
        (e.accel += ((n > 0 ? (e.spd - o) / n : 0) - e.accel) * a),
        (r.speed = e.spd / e.k),
        (r.turnRate = Rb(e.turn, -6, 6)),
        (r.accel = e.accel / e.k),
        (r.grounded = !0),
        (r.verticalSpeed = 0),
        (r.aim = 0),
        (r.guard = +(t.state === 10)),
        (r.lookYaw = Rb(t.headYaw, -1.1, 1.1)),
        (r.lookPitch = t.poseTarget === 17 ? 0.55 : -0.05),
        (r.lookWeight = t.poseTarget === 17 ? 1 : 0.7));
    }
    actions(e, t, n) {
      let r = e.anim,
        i = t.poseTarget,
        a = (t.accMask & Y(16)) !== 0,
        o = ``;
      if (
        (i === 1
          ? (o = `sit`)
          : i === 5 || i === 12 || (a && i === 0)
            ? (o = `phone`)
            : i === 6
              ? (o = `wave`)
              : i === 4
                ? (o = `pray`)
                : i === 10 || i === 20 || t.state === 10
                  ? (o = `fight`)
                  : (t.state === 5 || i === 11) && (o = `hit`),
        o !== e.act)
      ) {
        let i = e.act;
        if (((e.act = o), o === `hit`)) {
          let e = this.ctx.player?.position,
            n = (e?.x ?? t.x) - t.x,
            i = (e?.z ?? t.z - 1) - t.z,
            a = Math.sin(t.heading),
            o = Math.cos(t.heading);
          r.hit(n * o + i * a, -n * a + i * o, t.daze === 1 ? 0.8 : 1.2);
        } else
          o === `sit`
            ? n || t.poseW > 0.8
              ? r.play(`sit_idle`, { loop: !0, fadeIn: n ? 0.01 : 0.3 })
              : r.play(`sit_down`, { hold: !0, fadeIn: 0.25 })
            : o === `phone`
              ? r.play(`phone`, { fadeIn: 0.35 })
              : o === `wave`
                ? r.play(`wave`, { loop: !0, fadeIn: 0.25 })
                : o === `pray`
                  ? r.play(`pray`, { loop: !0, fadeIn: 0.3 })
                  : o === `fight`
                    ? r.play(`fight_idle`, { loop: !0, fadeIn: 0.25 })
                    : i === `sit`
                      ? r.play(`stand_up`, { fadeIn: 0.15 })
                      : r.action && r.stop(0.3);
      } else
        o === `sit` &&
          r.action === `sit_down` &&
          r.actionProgress >= 0.999 &&
          r.play(`sit_idle`, { loop: !0, fadeIn: 0.35 });
      if (o === `fight` || i === 20) {
        let n = i === 20 ? (this.time * 0.9) % 1 : t.punchT;
        (n > 0 &&
          e.punchT <= 0 &&
          r.play(Math.floor(t.seed * 100 + this.time) % 2 ? `jab` : `cross`, {
            layer: `upper`,
          }),
          (e.punchT = n));
      }
    }
    animate(e, t, n) {
      (this.input(e, t, n), this.actions(e, t, !1));
      let r = e.anim,
        i = t.accMask,
        a = e.act === `` || e.act === `phone`,
        o = a && (i & Fb) !== 0 ? 1 : 0,
        s = a && (i & Ib) !== 0 && e.act !== `phone` ? 1 : 0,
        c = Math.min(1, n * 5);
      ((e.wR += (o - e.wR) * c), (e.wL += (s - e.wL) * c));
      let l = r.handIK[1],
        u = r.handIK[0];
      (o && (e.carryR = i & Y(14) ? 1 : i & Y(15) ? 2 : 3),
        e.wR > 0.01
          ? (l.pos.copy(
              e.carryR === 1 ? e.tUmb : e.carryR === 2 ? e.tCup : e.tCane,
            ),
            (l.weight = e.wR),
            (l.rot = e.carryR === 1 ? Hb : e.carryR === 2 ? Ub : Wb),
            (l.pole = e.carryR === 3 ? Jb : qb))
          : (l.weight = 0),
        e.wL > 0.01
          ? (u.pos.copy(e.tBag),
            (u.weight = e.wL * 0.55),
            (u.rot = Kb),
            (u.pole = Yb))
          : (u.weight = 0),
        this.placeHolder(e, t),
        r.update(n, e.holder),
        e.av.update(),
        e.commitPose(),
        (e.posed = !0));
      let d = r.kin,
        f = e.k / t.height;
      (zb
        .copy(e.palmR)
        .applyQuaternion(Bb.copy(d.gq[H.handR]))
        .add(d.gp[H.handR])
        .multiplyScalar(f),
        (t.avRx = zb.x),
        (t.avRy = zb.y - (e.carryR === 3 && e.wR > 0.01 ? Gb * e.wR * f : 0)),
        (t.avRz = zb.z),
        zb
          .copy(i & Y(16) ? e.phoneL : e.palmL)
          .applyQuaternion(Bb.copy(d.gq[H.handL]))
          .add(d.gp[H.handL])
          .multiplyScalar(f),
        (t.avLx = zb.x),
        (t.avLy = zb.y),
        (t.avLz = zb.z),
        (t.avChest = d.gp[H.chest].y * f - 1.2 + 0.03));
      let p = ix.copy(d.gq[H.head]);
      (zb.copy(e.nose).applyQuaternion(p).add(d.gp[H.head]).multiplyScalar(f),
        (t.avHy = zb.y),
        (t.avHxz =
          Math.round(Rb(zb.x + 0.5, 0, 1) * 4e3) * 4096 +
          Math.round(Rb(zb.z + 0.5, 0, 1) * 4e3)),
        ax.set(0, 0, -1).applyQuaternion(p));
      let m = Math.atan2(ax.x, -ax.z),
        h = Math.asin(Rb(ax.y, -1, 1));
      ((t.avHyp =
        Math.round(((m + Math.PI) / Nb) * 4095) * 4096 +
        Math.round(Rb((h + Math.PI / 2) / Math.PI, 0, 1) * 4095)),
        (t.avHands = !0));
    }
  };
