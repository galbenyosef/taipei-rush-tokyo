// tokyo/assets/actors-bknSEpf2 49 — math
// Lines 17071-18805 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var Ep = new Set([`foot`, `climb`, `knockdown`, `getup`, `dead`]),
  Dp = { jab: 1.3, cross: 1.25, hook: 1.2, uppercut: 1.15, kick: 1.2 },
  Op = [19, 20, 18, 26, 27, 21],
  kp = new Set([`batFore`, `batBack`, `reload`, `draw`]),
  Ap = /^(idle_stretch|jump$|jump_over|phone|wave|bow|cheer|pray|clap|point)/,
  jp = `jump_over`,
  Mp = 0.8,
  Np = 0.5,
  Pp = 1.4,
  Fp = 9,
  Ip = 1.4,
  Lp = { back: 1.05, front: 0.8 },
  Rp = { back: 0.3, front: 0.06 },
  zp = new Pe(),
  Bp = new v(),
  Vp = new v(),
  Hp = new V(),
  Up = new V(),
  Wp = new N(),
  Gp = { x: 0, z: 0, yaw: 0 },
  Kp = { x: 0, z: 0, yaw: 0 },
  qp = new V(0, 1, 0),
  Jp = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  Yp = class {
    proc;
    inp;
    rig;
    mocap = null;
    pool = new Map();
    mk = null;
    opts = {};
    state = `foot`;
    stateT = 0;
    live = null;
    fade = 0.25;
    xq = [];
    xHip = new V();
    xT = 1;
    xDur = 0;
    act = null;
    actClip = null;
    hitFired = !1;
    ov = null;
    ovT = 0;
    ovSpeed = 1;
    ovPose = Un();
    onActionHit = null;
    onFootstep = null;
    hitDirFront = !0;
    hitSide = 0;
    rm = { x: 0, z: 0, yaw: 0 };
    stopClip = null;
    stopV = 0;
    rmClip = null;
    bodyYaw = 0;
    yawMode = 0;
    knockYaw = 0;
    knockClip = null;
    getupYaw0 = 0;
    getupTurn = 0;
    getupDone = 0;
    probe = new Float32Array(79);
    vaultHipY = 0.85;
    lift = 0;
    ledge = { x: 0, y: 0, z: 0, rx: 1, rz: 0, w: 0 };
    ik;
    aimW = 0;
    holdW = 1;
    holdWeapon = ``;
    recoil = 0;
    recoilV = 0;
    propW = 0;
    propKind = `none`;
    sipT = 0;
    curlL = 0.4;
    curlR = 0.4;
    jaw = 0;
    bobAvg = 0;
    time = 0;
    gazeX = 0;
    gazeY = 0;
    sacT = 0;
    sacX = 0;
    sacY = 0;
    gaitBob = 0;
    gaitRoll = 0;
    pv = new V();
    pt = new V();
    pole = new V();
    constructor(e) {
      ((this.rig = e),
        (this.proc = new ya(e)),
        (this.inp = this.proc.inp),
        (this.ik = new Zn(e)));
      for (let e = 0; e < 33; e++) this.xq.push(new v());
      ((this.proc.onFootstep = (e, t) => this.onFootstep?.(e, t)),
        (this.proc.onActionHit = (e) => this.onActionHit?.(e)));
    }
    async attach(e, n, r = 1e4) {
      let i = Promise.all([
          t(
            () => import(`./animator-ZoMjw9Jq.js`),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          ),
          t(() => import(`./rig-BjRdQXtM.js`), __vite__mapDeps([9, 8])),
          t(() => import(`./clips-GNiXKOuW.js`), __vite__mapDeps([10, 8])),
        ]).then(async ([{ Animator: e }, { bindRig: t }, n]) => ({
          Animator: e,
          bindRig: t,
          lib: await n.loadAnimLibrary(),
        })),
        a = (t) => {
          ((this.opts = { autoLand: !1, autoStop: !1, ...n }),
            (this.mk = (e, n) => new t.Animator(t.bindRig(e), t.lib, n)));
          for (let t of e) this.bind(t.rig, t.rc);
        };
      try {
        return (
          a(await Pt(i, r, `player mocap`)),
          (this.mocap = this.pool.get(this.rig) ?? null),
          !!this.mocap
        );
      } catch (e) {
        return (
          e instanceof It
            ? (console.warn(
                `[player] mocap not loaded after ${r / 1e3} s — procedural animator until it arrives`,
              ),
              i.then(
                (e) => {
                  (a(e), (this.pendingLate = !0));
                },
                () => {},
              ))
            : console.warn(
                `[player] mocap unavailable, using the procedural animator`,
                e,
              ),
          !1
        );
      }
    }
    pendingLate = !1;
    bind(e, t) {
      if (!this.mk) return null;
      let n = this.pool.get(e);
      return (
        n ||
          ((n = this.mk(t, { ...this.opts, seed: 7 + this.pool.size * 13 })),
          (n.onFootstep = (e, t) => {
            this.mocap === n && this.onFootstep?.(e, t * 6);
          }),
          this.pool.set(e, n)),
        n
      );
    }
    unbind(e) {
      e !== this.rig && this.pool.delete(e);
    }
    standalone(e) {
      return this.mk
        ? this.mk(e, { ...this.opts, footIK: !1, seed: 99 })
        : null;
    }
    setRig(e) {
      ((this.rig = e), this.proc.setRig(e));
      let t = this.pool.get(e) ?? null;
      t !== this.mocap &&
        ((this.mocap = t),
        (this.stopClip = this.rmClip = null),
        this.endAction());
    }
    get mocapActive() {
      return !!this.mocap && Ep.has(this.state);
    }
    setState(e, t = 0.25) {
      if (e === this.state) return;
      let n = this.state;
      ((this.state = e), (this.stateT = 0), (this.fade = t));
      let r = this.mocap;
      if (!r || !Ep.has(e)) {
        (this.proc.setState(e, r && this.live === `mocap` ? 0 : t),
          (this.fade = Math.max(0.2, t)),
          r &&
            (r.action && r.stop(0),
            this.endAction(),
            (this.stopClip = this.rmClip = null),
            (this.yawMode = 0),
            (this.bodyYaw = 0)));
        return;
      }
      this.proc.setState(e, 0);
      let i = this.inp.fallBack;
      switch (e) {
        case `knockdown`:
          (this.endAction(),
            (this.stopClip = null),
            this.knock(i, i ? Rp.back : Rp.front));
          break;
        case `getup`:
          this.getUp(i);
          break;
        case `dead`: {
          (this.endAction(), (this.stopClip = null));
          let e = r.action;
          (e && e.startsWith(`knockdown`)) ||
            this.knock(i, i ? Rp.back * 0.5 : 0);
          break;
        }
        case `foot`:
          n === `getup`
            ? (this.rmClip && r.action === this.rmClip && r.stop(0),
              (this.rmClip = null),
              this.rebaseYaw(0, 0.45))
            : (n === `dead` || n === `knockdown`) &&
              (r.stop(0.1),
              (this.rmClip = null),
              (this.yawMode = 0),
              (this.bodyYaw = 0));
          break;
        case `climb`:
          (this.endAction(), r.action && r.stop(0.15), (this.stopClip = null));
      }
    }
    knock(e, t) {
      let n = this.mocap,
        r = e ? `knockdown_back` : `knockdown_front`;
      (this.playRM(r, { hold: !0, fadeIn: 0.08, from: t }),
        this.bodyYaw && this.rebaseYaw(0, 0.08));
      let i = n.lib.get(r);
      ((this.knockYaw = bt((e ? Math.PI : 0) - this.clipYaw(r, i.dur, !0))),
        (this.knockClip = r),
        (this.yawMode = 1));
    }
    getUp(e) {
      let t = this.mocap,
        n = e ? `getup_back` : `getup_front`,
        r = e ? Lp.back : Lp.front;
      this.playRM(n, { from: r, speed: Ip, fadeIn: 0.02, fadeOut: 0.1 });
      let i = this.knockClip
          ? this.bodyYaw +
            this.clipYaw(this.knockClip, t.lib.get(this.knockClip).dur, !0)
          : e
            ? Math.PI
            : 0,
        a = bt(i - this.clipYaw(n, r, !0));
      (this.rebaseYaw(a, 0.4),
        (this.getupYaw0 = a),
        (this.getupTurn = bt(this.clipYaw(n, t.lib.get(n).dur, !1) + a)),
        (this.getupDone = 0),
        (this.yawMode = 2));
    }
    startClimb(e) {
      let t = this.mocap;
      if (!t || !t.lib.has(jp)) return;
      let n = t.lib.get(jp),
        r = n.info.events ?? {},
        i = (r.takeoff ?? 0.18) * n.dur,
        a = (r.land ?? 0.64) * n.dur,
        o = H((a - i) / Math.max(0.2, e * 0.8), 0.7, 2.2);
      t.play(jp, {
        from: i - 0.06,
        to: Math.min(n.dur, a + 0.4),
        speed: o,
        rootMotion: `none`,
        fadeIn: 0.1,
        fadeOut: 0.3,
        layer: `full`,
      }) && (n.sample(a, this.probe), (this.vaultHipY = this.probe[77]));
    }
    vaultLift() {
      let e = this.mocap;
      return e.action === jp
        ? (e.lib.get(jp).sample(e.actionTime, this.probe),
          Math.max(0, this.probe[77] - this.vaultHipY) * e.rig.scale * Mp)
        : 0;
    }
    clipYaw(e, t, n) {
      this.mocap.lib.get(e).sample(t, this.probe);
      let r = this.probe;
      return (
        Bp.set(r[0], r[1], r[2], r[3]),
        Hp.set(0, +!!n, n ? 0 : -1).applyQuaternion(Bp),
        Math.atan2(Hp.x, -Hp.z)
      );
    }
    rebaseYaw(e, t) {
      let n = this.mocap;
      (this.yawBones(-e), n.transitionFromRig(t), (this.bodyYaw = e));
    }
    yawBones(e) {
      if (Math.abs(e) < 1e-5) return;
      let t = this.rig.bones[0];
      (Bp.setFromAxisAngle(qp, -e),
        t.quaternion.premultiply(Bp),
        t.position.applyQuaternion(Bp));
    }
    updateBodyYaw() {
      let e = this.mocap;
      if (this.yawMode === 1) {
        if (e.action === this.knockClip) {
          let t = e.actionTime,
            [n, r] =
              this.knockClip === `knockdown_back` ? [0.4, 0.85] : [0.15, 0.6];
          this.bodyYaw = this.knockYaw * Ie(n, r, t);
        }
      } else if (
        this.yawMode === 2 &&
        this.rmClip &&
        e.action === this.rmClip
      ) {
        let t = Ie(0.3, 0.95, e.actionProgress),
          n = this.getupTurn * t - this.getupDone;
        ((this.getupDone += n),
          (this.bodyYaw = this.getupYaw0 - this.getupDone),
          (this.rm.yaw += n));
      }
    }
    playRM(e, t) {
      let n = this.mocap;
      ((t.rootMotion = `extract`), n.play(e, t) && (this.rmClip = e));
    }
    get action() {
      return this.mocap ? this.act : this.proc.action;
    }
    get actionProgress() {
      return this.mocap
        ? this.act
          ? this.ov
            ? this.ovT / ha(this.ov).dur
            : this.mocap.action === this.actClip
              ? this.mocap.actionProgress
              : -1
          : -1
        : this.proc.actionProgress;
    }
    get actionHitFired() {
      return this.mocap ? this.hitFired : this.proc.actionHitFired;
    }
    actionDuration(e) {
      let t = this.mocap;
      return !t || kp.has(e) || e === `hit`
        ? this.proc.actionDuration(e)
        : e === `roll`
          ? (t.duration(`roll`) - Np) / Pp
          : t.duration(e) / (Dp[e] ?? 1) || this.proc.actionDuration(e);
    }
    play(e, t = 1) {
      let n = this.mocap;
      if (!n) {
        this.proc.play(e, t);
        return;
      }
      if (!Ep.has(this.state)) return;
      if (e === `hit`) {
        this.hitFrom(this.hitSide * 0.7, this.hitDirFront ? -1 : 1, 0.6);
        return;
      }
      if (((this.hitFired = !1), kp.has(e))) {
        (this.actClip && n.action === this.actClip && n.stop(0.12),
          (this.actClip = null),
          (this.act = e),
          (this.ov = e),
          (this.ovT = 0),
          (this.ovSpeed = t));
        return;
      }
      this.ov = null;
      let r;
      if (
        ((r =
          e === `roll`
            ? {
                from: Np,
                speed: Pp,
                rootMotion: `none`,
                fadeIn: 0.07,
                fadeOut: 0.3,
              }
            : Dp[e]
              ? {
                  speed: (Dp[e] ?? 1) * t,
                  onHit: () => this.fireHit(e),
                  fadeIn: e === `kick` ? 0.08 : 0.05,
                }
              : {}),
        this.stopClip && n.action === this.stopClip && (this.stopClip = null),
        !n.play(e, r))
      ) {
        this.act = null;
        return;
      }
      ((this.act = e), (this.actClip = e));
    }
    fireHit(e) {
      this.act !== e ||
        this.hitFired ||
        ((this.hitFired = !0), this.onActionHit?.(e));
    }
    cancelAction(e = 0.2) {
      let t = this.mocap;
      if (!t) {
        (this.proc.snapshot(e), (this.proc.action = null));
        return;
      }
      (this.actClip && t.action === this.actClip && t.stop(e),
        this.endAction());
    }
    endAction() {
      ((this.act = null), (this.actClip = null), (this.ov = null));
    }
    hitFrom(e, t, n) {
      let r = this.mocap;
      if (!r || !this.mocapActive) {
        ((this.proc.hitDirFront = t <= 0),
          (this.proc.hitSide = Math.sign(e) || 1),
          (!this.proc.action || this.proc.action === `hit`) &&
            this.proc.play(`hit`));
        return;
      }
      (r.hit(e, t, Math.min(0.95, n)),
        n >= 1 &&
          this.state === `foot` &&
          t > 0.3 &&
          !this.act &&
          this.inp.grounded &&
          r.action !== `stagger` &&
          ((this.stopClip = null),
          this.playRM(`stagger`, {
            from: 0.05,
            speed: 1.15,
            fadeIn: 0.06,
            fadeOut: 0.3,
          })));
    }
    land(e, t, n, r) {
      let i = this.mocap;
      if (!i || !this.mocapActive) {
        e > 0.35 && this.proc.landImpact(Math.min(1.3, e / 3.2));
        return;
      }
      if (
        (i.land(Math.sqrt(42 * Math.max(0, e))),
        e > 3.2 && t <= 3.2 && i.lib.has(`drop_land`))
      ) {
        let e =
          i.duration(`drop_land`) *
          (i.lib.get(`drop_land`).event(`land`) ?? 0.235);
        (this.cancelActionQuiet(),
          i.play(`drop_land`, {
            from: e,
            to: e + 0.95,
            fadeIn: 0.05,
            fadeOut: 0.35,
            rootMotion: `none`,
            layer: `full`,
          }));
      } else if (
        n &&
        t < 0.6 &&
        e > 0.3 &&
        r > 0.3 &&
        !this.act &&
        i.lib.has(`jump`)
      ) {
        let e = i.duration(`jump`),
          t = e * (i.lib.get(`jump`).event(`land`) ?? 0.56);
        i.play(`jump`, {
          from: t,
          to: Math.min(e, t + 0.7),
          fadeIn: 0.05,
          fadeOut: 0.3,
          rootMotion: `none`,
        });
      }
    }
    cancelActionQuiet() {
      let e = this.mocap;
      (this.actClip && e.action === this.actClip && e.stop(0.06),
        this.endAction());
    }
    landImpact(e) {
      !this.mocap || !this.mocapActive
        ? this.proc.landImpact(e)
        : this.mocap.land(Math.sqrt(42 * Math.max(0, e * 3.2)));
    }
    kickRecoil(e) {
      (this.proc.kickRecoil(e),
        (this.recoilV += 11 * e),
        this.mocap?.recoil(e * 0.6));
    }
    startStop(e) {
      let t = this.mocap;
      if (!t || this.state !== `foot` || t.action || this.act || e < 0.9)
        return !1;
      let n = e > 1.9,
        r = n ? `stop_run` : `stop_walk`;
      if (!t.lib.has(r)) return !1;
      let i = t.feet[0].contact > 0.6,
        a = t.feet[1].contact > 0.6,
        o = t.gaitPhase,
        s = i === a ? o > 0.5 : i,
        c = !i && !a;
      if (n && !s) return !1;
      let l = n ? (c ? 0.17 : 0.24) : s ? 0.08 : 0.44;
      return t.play(r, {
        from: l,
        rootMotion: `extract`,
        fadeIn: n ? 0.18 : 0.22,
        fadeOut: 0.45,
      })
        ? ((this.stopClip = r), (this.stopV = e), this.warpStop(), !0)
        : !1;
    }
    warpStop() {
      let e = this.mocap,
        t = e.lib.get(this.stopClip),
        n = e.actionTime;
      (t.root(n - 0.04, Gp), t.root(n + 0.04, Kp));
      let r = (Math.hypot(Kp.x - Gp.x, Kp.z - Gp.z) / 0.08) * e.rig.scale;
      e.actionRate = r > 0.05 && this.stopV > r ? H(this.stopV / r, 1, 2.4) : 1;
    }
    get stopping() {
      return (
        !!this.stopClip && !!this.mocap && this.mocap.action === this.stopClip
      );
    }
    cancelStop(e = 0.2) {
      (this.stopping && this.mocap.stop(e), (this.stopClip = null));
    }
    get downProgress() {
      let e = this.mocap;
      return !e || !this.rmClip || e.action !== this.rmClip
        ? 1
        : e.actionProgress;
    }
    cancelRootMotion(e = 0.3) {
      (this.rootMotionActive && this.mocap.stop(e),
        (this.rmClip = this.stopClip = null));
    }
    get rootMotionActive() {
      let e = this.mocap;
      if (!e || !this.mocapActive) return !1;
      let t = e.action;
      return !!t && (t === this.stopClip || t === this.rmClip);
    }
    propShown(e) {
      return this.mocap
        ? this.propKind === e &&
            this.propW > 0.3 &&
            (this.state === `foot` || this.state === `climb`)
        : this.proc.propShown(e);
    }
    get rideStyle() {
      return this.proc.rideStyle;
    }
    set rideStyle(e) {
      this.proc.rideStyle = e;
    }
    seatHints(e, t) {
      this.proc.seatHints(e, t);
    }
    update(e, t) {
      ((this.stateT += e),
        (this.time += e),
        this.pendingLate &&
          (this.state === `foot` || !Ep.has(this.state)) &&
          ((this.pendingLate = !1),
          (this.mocap = this.pool.get(this.rig) ?? null)));
      let n = this.mocap;
      (n && Ep.has(this.state)
        ? (this.live === `proc` &&
            ((n.input.grounded = this.inp.grounded),
            n.transitionFromRig(this.fade)),
          (this.live = `mocap`),
          this.updateMocap(e, t))
        : (this.live === `mocap` && this.snapshotBones(this.fade),
          (this.live = `proc`),
          this.proc.update(e),
          (this.gaitBob = pt(this.gaitBob, 0, 6, e)),
          (this.gaitRoll = pt(this.gaitRoll, 0, 6, e))),
        this.boneFade(e),
        this.gaze(e));
    }
    gaze(e) {
      let t = this.rig.eyes;
      if (!t) return;
      let n = this.inp,
        r = this.state;
      ((this.sacT -= e),
        this.sacT <= 0 &&
          ((this.sacT = 0.5 + Math.random() * 2.2),
          (this.sacY = (Math.random() - 0.5) * 0.16),
          (this.sacX = (Math.random() - 0.5) * 0.07)));
      let i = 0,
        a = 0;
      if (r !== `dead` && r !== `knockdown` && r !== `busted`) {
        let e = 1 - H(n.aim, 0, 1);
        ((i = (H(-n.lookYaw * 0.35 * n.lookW, -0.32, 0.32) + this.sacY) * e),
          (a = (H(n.lookPitch * 0.3 * n.lookW, -0.18, 0.18) + this.sacX) * e));
      }
      ((this.gazeY = pt(this.gazeY, i, 28, e)),
        (this.gazeX = pt(this.gazeX, a, 28, e)),
        t[0].rotation.set(this.gazeX, this.gazeY, 0),
        t[1].rotation.set(this.gazeX, this.gazeY, 0));
    }
    snapshotBones(e) {
      let t = this.rig.bones;
      for (let e = 0; e < 33; e++) this.xq[e].copy(t[e].quaternion);
      (this.xHip.copy(t[0].position), (this.xT = 0), (this.xDur = e));
    }
    boneFade(e) {
      if (this.xT >= this.xDur) return;
      this.xT += e;
      let t = 1 - Jp(this.xT / this.xDur);
      if (t <= 0) return;
      let n = this.rig.bones;
      for (let e = 0; e < 33; e++) n[e].quaternion.slerp(this.xq[e], t);
      n[0].position.lerp(this.xHip, t);
    }
    updateMocap(e, t) {
      let n = this.mocap,
        r = this.inp,
        i = n.input,
        a = this.state;
      (this.actClip && n.action !== this.actClip && this.endAction(),
        this.stopClip && n.action !== this.stopClip && (this.stopClip = null),
        this.rmClip && n.action !== this.rmClip && (this.rmClip = null),
        n.action &&
          r.speed > 0.3 &&
          a === `foot` &&
          Ap.test(n.action) &&
          !this.stopping &&
          (n.stop(0.25), this.actClip && this.endAction()));
      let o = this.rootMotionActive;
      (this.stopping &&
        ((this.stopV = Math.max(0, this.stopV - Fp * e)), this.warpStop()),
        (i.speed = o ? 0 : r.speed),
        (i.dirX = r.dirX),
        (i.dirZ = r.dirZ),
        (i.turnRate = o ? 0 : r.turnRate),
        (i.accel = o ? 0 : r.accel),
        (i.grounded = r.grounded),
        (i.verticalSpeed = r.vy),
        (i.aim = r.aim),
        (i.aimYaw = r.aimYaw),
        (i.aimPitch = r.aimPitch),
        (i.lookYaw = r.lookYaw),
        (i.lookPitch = r.lookPitch),
        (i.lookWeight = r.lookW),
        (i.guard = r.guard),
        (n.footIK = !r.airborne || (a !== `knockdown` && a !== `dead`)),
        a === `climb` &&
          n.action === jp &&
          ((i.grounded = !0), (n.footIK = !1)),
        this.propsPre(e),
        (this.lift = this.vaultLift()),
        this.ledgeHands(t),
        this.yawMode &&
          a !== `knockdown` &&
          a !== `getup` &&
          a !== `dead` &&
          (this.yawMode = 0),
        !this.yawMode && this.bodyYaw && this.rebaseYaw(0, 0.3),
        n.update(e, t),
        this.lift > 0 && (this.rig.bones[0].position.y -= this.lift),
        this.updateBodyYaw(),
        this.yawBones(this.bodyYaw));
      let s = n.rootDelta;
      if (this.bodyYaw && (s.x || s.z)) {
        let e = Math.cos(this.bodyYaw),
          t = Math.sin(this.bodyYaw),
          n = s.x,
          r = s.z;
        ((s.x = n * e - r * t), (s.z = n * t + r * e));
      }
      if (s.x || s.z || s.yaw) {
        let e = t.matrixWorld.elements;
        ((this.rm.x += s.x * e[0] + s.z * e[8]),
          (this.rm.z += s.x * e[2] + s.z * e[10]),
          (this.rm.yaw += s.yaw));
      }
      this.post(e);
      let c = this.rig.bones[0].position.y;
      (this.bobAvg === 0 && (this.bobAvg = c),
        (this.bobAvg = pt(this.bobAvg, c, 2.5, e)),
        (this.gaitBob = H(c - this.bobAvg, -0.08, 0.06)),
        (this.gaitRoll = pt(
          this.gaitRoll,
          H(r.turnRate * r.speed * 0.012, -0.05, 0.05),
          5,
          e,
        )));
    }
    takeRootMotion(e) {
      return (
        (e.x = this.rm.x),
        (e.z = this.rm.z),
        (e.yaw = this.rm.yaw),
        (this.rm.x = this.rm.z = this.rm.yaw = 0),
        e
      );
    }
    propsPre(e) {
      let t = this.inp,
        n = this.mocap,
        r = !!n.action && n.action !== `phone` && this.propKind !== `umbrella`,
        i = this.state === `foot` && !r ? t.prop : `none`;
      (i !== `none` &&
        (i !== this.propKind && this.propW > 0.05
          ? (this.propW = Math.max(0, this.propW - e * 4))
          : (this.propKind = i)),
        (this.propW = pt(
          this.propW,
          +(i !== `none` && i === this.propKind),
          3.2,
          e,
        )),
        this.propKind === `phone` && i === `phone`
          ? !n.action && !this.act && n.play(`phone`)
          : n.action === `phone` && n.stop(0.4));
    }
    ledgeHands(e) {
      let t = this.mocap,
        n = this.ledge,
        r = this.state === `climb` ? n.w : 0;
      r > 0.001 && (e.updateMatrixWorld(), Wp.copy(e.matrixWorld).invert());
      for (let e = 0; e < 2; e++) {
        let i = t.handIK[e];
        if (((i.weight = r), r <= 0.001)) continue;
        let a = e ? 0.2 : -0.2;
        (i.pos
          .set(n.x + n.rx * a, n.y + 0.02 + this.lift, n.z + n.rz * a)
          .applyMatrix4(Wp),
          (i.rot = null));
      }
    }
    eulerTo(e, t, n, r, i) {
      i <= 0.001 ||
        (zp.set(t, n, r, `XYZ`),
        Bp.setFromEuler(zp),
        this.rig.bones[e].quaternion.slerp(Bp, Math.min(1, i)));
    }
    post(e) {
      let t = this.inp,
        n = this.rig.bones,
        r = this.ik,
        i = this.state,
        a = i === `foot` || i === `climb`,
        o = t.weapon;
      ((this.aimW = pt(
        this.aimW,
        a ? t.aim : 0,
        t.aim > this.aimW ? 16 : 8,
        e,
      )),
        (this.recoilV += (-this.recoil * 240 - this.recoilV * 20) * e),
        (this.recoil += this.recoilV * e),
        o !== this.holdWeapon && ((this.holdWeapon = o), (this.holdW = 0)),
        (this.holdW = pt(this.holdW, 1, 9, e)));
      for (let e = 0; e < Op.length; e++) {
        let t = n[Op[e]].quaternion;
        t.w !== 1 && t.identity();
      }
      let s = 0,
        c = this.ov,
        l = 0;
      if (c) {
        let t = ha(c);
        if (
          ((this.ovT += e * this.ovSpeed),
          (l = this.ovT / t.dur),
          t.hit !== void 0 &&
            !this.hitFired &&
            l >= t.hit &&
            ((this.hitFired = !0), this.onActionHit?.(c)),
          l >= 1 || !a)
        )
          this.endAction();
        else {
          let e = this.ovPose;
          for (let t = 0; t < 33; t++) {
            let r = n[t].rotation;
            ((e[t * 3] = r.x), (e[t * 3 + 1] = r.y), (e[t * 3 + 2] = r.z));
          }
          ga(c, l, e, this.proc);
          let r = c === `draw` ? 1 : Jp(Math.min(1, l / 0.12, (1 - l) / 0.18)),
            i = t.mask;
          for (let t = 1; t < 33; t++)
            i[t] && this.eulerTo(t, e[t * 3], e[t * 3 + 1], e[t * 3 + 2], r);
          c === `reload` && (s = Math.sin(Math.min(1, l * 1.04) * Math.PI));
        }
      }
      let u =
        a && this.aimW < 0.5
          ? H(t.grade, -0.6, 0.6) * H(t.speed / 3, 0.4, 1)
          : 0;
      (Math.abs(u) > 0.01 &&
        (Bp.setFromAxisAngle(Hp.set(1, 0, 0), -u * (u > 0 ? 0.32 : 0.18)),
        n[1].quaternion.multiply(Bp),
        Bp.setFromAxisAngle(Hp.set(1, 0, 0), -u * (u > 0 ? 0.18 : 0.1)),
        n[2].quaternion.multiply(Bp)),
        r.begin(this.rig));
      let d = this.ov === `batFore` || this.ov === `batBack`;
      if (a) {
        if (o === `pistol` || o === `smg`) this.gunHold(o === `smg`, s);
        else if (o === `bat`) {
          let e = this.aimW,
            t = this.holdW;
          d ||
            (this.eulerTo(8, U(0.9, 1.2, e), 0, U(0.35, 0.9, e), t),
            this.eulerTo(9, U(2.1, 1.7, e), 0, 0, t),
            e > 0.01 &&
              (this.eulerTo(5, 1.1, 0, 0.9, e * t),
              this.eulerTo(6, 1.8, 0, 0, e * t),
              Bp.setFromAxisAngle(qp, -0.5 * e),
              n[2].quaternion.multiply(Bp)),
            r.begin(this.rig));
          let i = va(d ? this.ov : null, d ? l : 0, e, this.pv);
          (r.aimAxisZ(18, this.pv, 1),
            i > 0.01 &&
              (r.pointOn(18, _a.bat, this.pt),
              this.pole.set(-0.4, -1, 0.5),
              r.arm(5, 6, 7, this.pt, this.pole, i * t)));
        }
        this.propW > 0.01 && o === `fists` && this.propHold(e);
      }
      let f = -1,
        p = -1;
      (a &&
        (o === `bat`
          ? ((p = 1.55), (f = this.aimW > 0.3 || d ? 1.5 : -1))
          : o === `pistol`
            ? ((p = 1.5), (f = this.aimW > 0.3 ? 1.2 : -1))
            : o === `smg` && ((p = 1.5), (f = 1.35)),
        this.propW > 0.3 &&
          (f =
            this.propKind === `phone`
              ? 0.9
              : this.propKind === `tea`
                ? 1.25
                : 1.55)),
        f < 0 && (f = n[22].rotation.z),
        p < 0 && (p = -n[23].rotation.z),
        (this.curlL = pt(this.curlL, f, 18, e)),
        (this.curlR = pt(this.curlR, p, 18, e)),
        n[22].rotation.set(0, 0, this.curlL),
        n[23].rotation.set(0, 0, -this.curlR));
      let m = 0;
      if (i === `dead`) m = 0.14 * Ie(0.2, 1, this.stateT);
      else if (i === `knockdown` || i === `getup`) m = 0.08;
      else {
        m = Ie(4.8, 6.8, t.speed) * (0.05 + 0.04 * Math.sin(this.time * 7));
        let e = this.act;
        e === `cheer` ? (m = 0.2) : e && Dp[e] && (m = Math.max(m, 0.06));
      }
      if (
        ((this.jaw = pt(this.jaw, m, 12, e)),
        n[32].rotation.set(-this.jaw, 0, 0),
        i === `dead`)
      ) {
        let e = Math.max(0.001, Ie(0.3, 1.1, this.stateT));
        n[28].scale.y < e &&
          (n[28].scale.set(1, e, 1), n[29].scale.set(1, e, 1));
      }
    }
    gunHold(e, t) {
      let n = this.inp,
        r = this.ik,
        i = this.aimW,
        a = this.holdW,
        o = e ? 20 : 19,
        s = (1 - i) * a;
      if (
        (e && s > 0.01
          ? (this.eulerTo(8, 0.35, 0, 0.05, s),
            this.eulerTo(9, 1.2, 0, 0, s),
            this.eulerTo(5, 0.6, 0, 0.45, s * 0.9),
            this.eulerTo(6, 1.3, 0, 0, s * 0.9),
            this.eulerTo(20, -0.5, 0, 0, s))
          : !e && s > 0.01 && this.eulerTo(9, 0.45, 0, 0, s * 0.6),
        r.begin(this.rig),
        i > 0.01)
      ) {
        let a = H(n.aimPitch, -1.1, 1.2) + this.recoil * 0.1,
          s = H(bt(n.aimYaw), -1.2, 1.2),
          c = Math.cos(a),
          l = this.pv.set(Math.sin(s) * c, Math.sin(a), -Math.cos(s) * c),
          u = i * (1 - t);
        (u > 0.01 &&
          (e
            ? (r.rootPos(8, this.pt),
              (this.pt.x -= 0.035),
              (this.pt.y -= 0.045),
              this.pt.addScaledVector(l, 0.25 - this.recoil * 0.03),
              this.pole.set(0.9, -0.8, 0.25))
            : (r.rootPos(8, this.pt),
              r.rootPos(4, Hp),
              this.pt.lerp(Hp, 0.3),
              (this.pt.y = U(this.pt.y, Hp.y, 0.25)),
              this.pt.addScaledVector(l, 0.47 - this.recoil * 0.05),
              this.pole.set(0.8, -1, 0.2)),
          r.arm(8, 9, 10, this.pt, this.pole, u)),
          r.aimGun(o, l, u));
      }
      let c = (e ? 1 : i) * a * (1 - t);
      c > 0.01 &&
        (r.pointOn(o, e ? _a.smg : _a.pistol, this.pt),
        this.pole.set(-0.6, -1, 0.25),
        r.arm(5, 6, 7, this.pt, this.pole, c));
    }
    propHold(e) {
      let t = this.ik,
        n = this.propW,
        r = this.propKind;
      if (r === `tea`) {
        this.sipT += e;
        let r = this.sipT % 4.6,
          i =
            (r > 3.2 ? Math.sin(((r - 3.2) / 1.4) * Math.PI) : 0) *
            (1 - H(this.inp.speed / 2.5, 0, 1));
        (t.pointOn(2, Hp.set(-0.12, -0.25, -0.24), this.pt),
          i > 0.01 &&
            (t.pointOn(4, Up.set(-0.02, -0.26, -0.12), Hp),
            this.pt.lerp(Hp, i)),
          this.pole.set(-1, -0.7, 0.3),
          t.arm(5, 6, 7, this.pt, this.pole, n),
          this.pv.set(0.05 - 0.05 * i, 1, -0.1 + 0.35 * i),
          t.aimAxisZ(26, this.pv, 1));
      } else
        r === `phone` && this.mocap?.action === `phone`
          ? (t.rootQuat(7, Vp),
            t.rootPos(7, this.pt),
            (this.pt.y += 0.1),
            (this.pt.z -= 0.04),
            this.pole.set(-1, -0.6, 0.4),
            t.arm(5, 6, 7, this.pt, this.pole, n),
            t.orient(7, Vp, n))
          : r === `umbrella` &&
            (t.pointOn(2, Hp.set(-0.1, 0.02, -0.27), this.pt),
            this.pole.set(-1, -0.8, 0.2),
            t.arm(5, 6, 7, this.pt, this.pole, n),
            t.rootPos(27, this.pt),
            t.rootPos(4, Hp),
            this.pv
              .set(
                Hp.x + 0.03,
                Hp.y + 0.45,
                Hp.z - 0.02 - H(this.inp.speed * 0.06, 0, 0.3),
              )
              .sub(this.pt),
            t.aimAxisZ(27, this.pv, 1));
    }
  },
  Xp = [`fists`, `bat`, `pistol`, `smg`],
  Zp = {
    fists: {
      id: `fists`,
      name: { zh: `拳頭`, en: `Fists` },
      melee: !0,
      damage: 10,
      range: 1.35,
      interval: 0.2,
      auto: !1,
      mag: 0,
      reload: 0,
      spread: 0,
      spreadMax: 0,
      spreadShot: 0,
      recoil: 0,
      camKick: 0,
      soundRate: 1,
      severity: 1,
    },
    bat: {
      id: `bat`,
      name: { zh: `球棒`, en: `Baseball Bat` },
      melee: !0,
      damage: 30,
      range: 2.05,
      interval: 0.3,
      auto: !1,
      mag: 0,
      reload: 0,
      spread: 0,
      spreadMax: 0,
      spreadShot: 0,
      recoil: 0,
      camKick: 0,
      soundRate: 0.8,
      severity: 2,
    },
    pistol: {
      id: `pistol`,
      name: { zh: `手槍`, en: `Pistol` },
      melee: !1,
      damage: 34,
      range: 130,
      interval: 0.2,
      auto: !1,
      mag: 12,
      reload: 1.2,
      spread: 0.008,
      spreadMax: 0.05,
      spreadShot: 0.014,
      recoil: 0.55,
      camKick: 0.018,
      soundRate: 1,
      severity: 2,
    },
    smg: {
      id: `smg`,
      name: { zh: `衝鋒槍`, en: `SMG` },
      melee: !1,
      damage: 17,
      range: 95,
      interval: 0.078,
      auto: !0,
      mag: 30,
      reload: 1.55,
      spread: 0.018,
      spreadMax: 0.075,
      spreadShot: 0.0065,
      recoil: 0.28,
      camKick: 0.009,
      soundRate: 1.28,
      severity: 3,
    },
  },
  Qp = new Set([
    `jab`,
    `cross`,
    `hook`,
    `uppercut`,
    `kick`,
    `batFore`,
    `batBack`,
  ]),
  $p = [`jab`, `cross`, `hook`, `uppercut`],
  em = class {
    p;
    owned = [`fists`];
    mag = { fists: 0, bat: 0, pistol: 0, smg: 0 };
    cool = 0;
    reloadT = 0;
    autoReload = -1;
    combo = 0;
    comboWindow = 0;
    queued = !1;
    spreadCur = 0;
    hipFire = 0;
    lastCrime = -10;
    lastPanic = -10;
    lock = null;
    wasAim = !1;
    bodies = [];
    origin = new V();
    dir = new V();
    muzzle = new V();
    aimPoint = new V();
    end = new V();
    nrm = new V();
    rnd = new V();
    sh = it();
    dh = it();
    dmg = {
      amount: 0,
      source: `player`,
      point: new V(),
      dir: new V(),
      weapon: `fists`,
    };
    crimePos = new V();
    targetBody = null;
    expectHit = !1;
    killed = !1;
    noCrime = !1;
    swingKind = null;
    meleeTarget = null;
    constructor(e) {
      ((this.p = e),
        (e.anim.onActionHit = (e) => this.meleeHit(e)),
        e.ctx.events.on(`ped:hit`, (e) => {
          (this.expectHit && e.killed && (this.killed = !0),
            e.byPlayer &&
              e.killed &&
              !(this.expectHit && this.noCrime) &&
              this.crime(`kill`, 3, e.pos));
        }));
    }
    get striking() {
      let e = this.p.anim.action;
      return !!e && Qp.has(e) && this.p.anim.actionProgress < 0.7;
    }
    cancel() {
      ((this.reloadT = 0),
        (this.autoReload = -1),
        (this.hipFire = 0),
        (this.queued = !1),
        (this.lock = null),
        (this.targetBody = null),
        (this.meleeTarget = null),
        this.p.overlay.setCrosshair(`none`, 0, !1));
    }
    give(e, t) {
      this.owned.includes(e) ||
        (this.owned.push(e),
        this.owned.sort((e, t) => Xp.indexOf(e) - Xp.indexOf(t)));
      let n = Zp[e];
      if (!n.melee) {
        this.p.ammo[e] = Math.max(
          0,
          (this.p.ammo[e] || 0) + Math.max(0, Math.round(t)),
        );
        let r = Math.min(n.mag - this.mag[e], this.p.ammo[e]);
        r > 0 && ((this.mag[e] += r), (this.p.ammo[e] -= r));
      }
    }
    confiscate() {
      for (let e of [`pistol`, `smg`]) {
        let t = this.owned.indexOf(e);
        (t >= 0 && this.owned.splice(t, 1),
          (this.p.ammo[e] = 0),
          (this.mag[e] = 0));
      }
    }
    cycle(e) {
      if (this.p.ctx.net?.roundActive) return;
      let t = this.owned;
      if (t.length < 2) return;
      let n = t.indexOf(this.p.weapon);
      ((n = (n + e + t.length) % t.length), this.p.switchWeapon(t[n]));
    }
    update(e) {
      let t = this.p,
        n = t.ctx,
        r = t.act;
      ((this.cool -= e),
        (this.comboWindow -= e),
        (this.hipFire = Math.max(0, this.hipFire - e)));
      let i = Zp[t.weapon];
      ((this.spreadCur = Math.max(
        0,
        this.spreadCur - e * (i.spreadMax * 2.5 + 0.01),
      )),
        r.pressed(`weaponNext`)
          ? this.cycle(1)
          : r.pressed(`weaponPrev`) && this.cycle(-1),
        this.reloadT > 0 &&
          ((this.reloadT -= e), this.reloadT <= 0 && this.finishReload()),
        this.autoReload >= 0 &&
          ((this.autoReload -= e), this.autoReload < 0 && this.startReload()));
      let a = r.down(`aim`);
      if (((t.aimWanted = a || (!i.melee && this.hipFire > 0)), i.melee)) {
        let e = this.meleeTarget;
        if (e && this.striking && !t.anim.actionHitFired) {
          if (!e.active) this.meleeTarget = null;
          else {
            let n = e.x - t.position.x,
              r = e.z - t.position.z,
              i = Math.hypot(n, r);
            i < 4 &&
              (t.faceHeading(Math.atan2(n, -r)),
              i > 1.05 && t.lunge(Math.min(4.8, (i - 0.9) * 6)));
          }
        }
        (this.queued &&
          (!this.striking || t.anim.actionProgress > 0.55) &&
          ((this.queued = !1), this.melee()),
          r.pressed(`attack`) &&
            (this.striking && t.anim.actionProgress < 0.55
              ? (this.queued = !0)
              : this.melee()));
      } else {
        r.pressed(`reload`) && this.startReload();
        let e = r.down(`attack`);
        (i.auto ? e : r.pressed(`attack`) || (e && this.cool <= -0.12)) &&
          this.cool <= 0 &&
          this.reloadT <= 0 &&
          this.fire();
      }
      let o = !i.melee && t.aimWanted;
      if (o || (i.melee && a)) {
        (this.computeAim(!i.melee),
          o && n.input.device !== `kbm`
            ? this.lockOn(e, !this.wasAim)
            : (this.lock = null));
        let r = i.melee ? 0 : this.currentSpread(),
          a = n.renderer.height,
          s =
            Math.tan(r) * (a / (2 * Math.tan((n.camera.fov * Math.PI) / 360))),
          c =
            !!this.targetBody &&
            (this.targetBody.kind === `ped` ||
              this.targetBody.kind === `police`);
        t.overlay.setCrosshair(i.melee ? `melee` : `gun`, s, c);
      } else
        ((this.lock = null),
          (this.targetBody = null),
          t.overlay.setCrosshair(`none`, 0, !1));
      this.wasAim = o;
    }
    currentSpread() {
      let e = Zp[this.p.weapon],
        t = this.p.act.down(`aim`) ? 0.55 : 1;
      return (
        (e.spread + this.spreadCur) * t + Math.min(0.03, this.p.hSpeed * 0.004)
      );
    }
    computeAim(e) {
      let t = this.p,
        n = t.ctx;
      t.cam.getAimRay(this.origin, this.dir);
      let r = t.position.x - this.origin.x,
        i = t.position.y + 1.3 - this.origin.y,
        a = t.position.z - this.origin.z,
        o = Math.max(0, r * this.dir.x + i * this.dir.y + a * this.dir.z - 0.4);
      this.origin.addScaledVector(this.dir, o);
      let s = n.statics.raycast(this.origin, this.dir, 220, this.sh)
        ? this.sh.distance
        : 220;
      if (this.dir.y < -0.001) {
        let e =
          (this.groundAt(this.origin, this.dir, s) - this.origin.y) /
          this.dir.y;
        e > 0 && e < s && (s = e);
      }
      let c = e
        ? n.dynamics.raycast(this.origin, this.dir, s, t.body, this.dh)
        : null;
      c
        ? (this.aimPoint.copy(this.dh.point), (this.targetBody = c))
        : (this.aimPoint.copy(this.origin).addScaledVector(this.dir, s),
          (this.targetBody = null));
    }
    groundAt(e, t, n) {
      let r = t.y < -0.001 ? Math.min(n, (0.1 - e.y) / t.y) : n,
        i = e.x + t.x * Math.max(0, r),
        a = e.z + t.z * Math.max(0, r),
        o = this.p.ctx.plan;
      return o.surfaceAt(i, a) === `water`
        ? o.waterLevel
        : o.groundHeight(i, a);
    }
    lockOn(e, t) {
      let n = this.p,
        r = n.ctx,
        i = r.camera,
        a = (e) =>
          !!e &&
          e.active &&
          (r.net?.roundActive
            ? !!r.net.roundTarget?.(e)
            : e.kind === `ped` || e.kind === `police`);
      if (t || !a(this.lock)) {
        this.lock = null;
        let e = 0.24,
          t = r.dynamics.query(n.position.x, n.position.z, 45, this.bodies);
        for (let r = 0; r < t; r++) {
          let t = this.bodies[r];
          if (t === n.body || !a(t)) continue;
          let o = t.x - i.position.x,
            s = t.y + Math.min(1.2, t.height * 0.7) - i.position.y,
            c = t.z - i.position.z,
            l = Math.hypot(o, s, c),
            u = Math.acos(
              H((o * this.dir.x + s * this.dir.y + c * this.dir.z) / l, -1, 1),
            );
          u < e && ((e = u), (this.lock = t));
        }
      }
      let o = this.lock;
      if (!o) return;
      let s = o.x - i.position.x,
        c = o.y + Math.min(1.15, o.height * 0.68) - i.position.y,
        l = o.z - i.position.z,
        u = Math.hypot(s, l);
      if (u > 55) {
        this.lock = null;
        return;
      }
      let d = Math.atan2(s, -l),
        f = Math.atan2(-c, u),
        p = mt(9, e),
        m = bt(d - n.cam.yaw),
        h = f - n.cam.pitch;
      if (Math.abs(m) > 0.6) {
        this.lock = null;
        return;
      }
      n.cam.nudge(m * p, h * p);
    }
    fire() {
      let e = this.p,
        t = e.ctx,
        n = e.weapon,
        r = Zp[n];
      if (this.mag[n] <= 0) {
        e.ammo[n] > 0
          ? this.startReload()
          : (t.audio.play(`empty_click`, {
              x: e.position.x,
              y: e.position.y + 1.2,
              z: e.position.z,
            }),
            (this.cool = 0.3),
            this.dropEmptyGun(n));
        return;
      }
      (this.mag[n]--,
        (this.cool = r.interval),
        e.act.down(`aim`) || ((this.hipFire = 1.1), (e.snapToAim = !0)),
        this.computeAim(!0));
      let i = e.model.rig.bones[n === `smg` ? 20 : 19];
      (this.muzzle.copy(
        n === `smg` ? e.model.muzzle.smg : e.model.muzzle.pistol,
      ),
        i.localToWorld(this.muzzle));
      let a = Math.sin(e.heading),
        o = -Math.cos(e.heading);
      ((this.muzzle.distanceToSquared(e.position) > 4 ||
        !Number.isFinite(this.muzzle.x)) &&
        this.muzzle.set(
          e.position.x + a * 0.55 + Math.cos(e.heading) * 0.2,
          e.position.y + 1.35,
          e.position.z + o * 0.55 + Math.sin(e.heading) * 0.2,
        ),
        this.dir.subVectors(this.aimPoint, this.muzzle),
        this.dir.length() < 0.5 && this.dir.set(a, 0, o),
        this.dir.normalize());
      let s = this.currentSpread();
      (this.rnd
        .set(
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
        )
        .cross(this.dir)
        .normalize(),
        this.dir
          .addScaledVector(this.rnd, Math.tan(s * Math.sqrt(Math.random())))
          .normalize(),
        (this.spreadCur = Math.min(r.spreadMax, this.spreadCur + r.spreadShot)),
        t.net?.roundActive && t.net.roundShot?.(this.muzzle, this.dir));
      let c = t.statics.raycast(this.muzzle, this.dir, r.range, this.sh),
        l = c ? this.sh.distance : r.range,
        u = !1,
        d = !1;
      if (this.dir.y < -0.001) {
        let e =
          (this.groundAt(this.muzzle, this.dir, l) - this.muzzle.y) /
          this.dir.y;
        if (e > 0 && e < l) {
          ((l = e), (u = !0));
          let n = this.muzzle.x + this.dir.x * e,
            r = this.muzzle.z + this.dir.z * e;
          d = t.plan.surfaceAt(n, r) === `water`;
        }
      }
      let f = t.dynamics.raycast(this.muzzle, this.dir, l, e.body, this.dh),
        p = !0;
      if (f) {
        this.end.copy(this.dh.point);
        let i = f.kind !== `vehicle` && this.dh.point.y - f.y > f.height * 0.8,
          a =
            this.dh.distance < 30
              ? 1
              : Math.max(0.45, 1 - (this.dh.distance - 30) / (r.range * 1.2));
        (t.net?.roundActive ||
          this.applyDamage(
            f,
            r.damage * a * (i ? 2.4 : 1),
            this.dh.point,
            this.dir,
            n,
            f.kind === `vehicle` ? 0 : 55,
          ),
          this.nrm.copy(this.dir).negate(),
          e.fx.impact(
            this.dh.point,
            this.nrm,
            f.kind === `vehicle` ? `metal` : `flesh`,
          ),
          t.net?.roundActive || e.overlay.hitMarker(this.killed));
      } else
        u
          ? (this.end.copy(this.muzzle).addScaledVector(this.dir, l),
            this.nrm.set(0, 1, 0),
            e.fx.impact(this.end, this.nrm, d ? `water` : `ground`))
          : c
            ? (this.end.copy(this.sh.point),
              e.fx.impact(
                this.sh.point,
                this.sh.normal,
                this.sh.tag === `pole` || this.sh.tag === `vehicle`
                  ? `metal`
                  : `static`,
              ))
            : (this.end.copy(this.muzzle).addScaledVector(this.dir, r.range),
              (p = !1));
      (e.fx.muzzle(this.muzzle, this.dir, n === `smg`),
        e.fx.tracer(this.muzzle, this.end),
        t.audio.play(`gunshot`, {
          x: this.muzzle.x,
          y: this.muzzle.y,
          z: this.muzzle.z,
          rate: r.soundRate * (0.96 + Math.random() * 0.08),
        }),
        p &&
          t.audio.play(`bullet_impact`, {
            x: this.end.x,
            y: this.end.y,
            z: this.end.z,
            volume: 0.6,
            rate: 0.9 + Math.random() * 0.2,
          }),
        e.anim.kickRecoil(r.recoil),
        e.cam.nudge((Math.random() - 0.5) * r.camKick * 0.6, -r.camKick),
        e.cam.shake(n === `smg` ? 0.045 : 0.07),
        t.input.rumble(n === `smg` ? 0.25 : 0.4, 50),
        t.events.emit(`player:attack`, { weapon: n, pos: e.position }),
        t.events.emit(`player:weapon`, { weapon: n, ammo: e.ammo[n] }));
      let m = t.time.elapsed;
      if (
        (!t.net?.roundActive &&
          m - this.lastCrime > 1.5 &&
          ((this.lastCrime = m),
          this.crime(`shooting`, r.severity, e.position)),
        !t.net?.roundActive && m - this.lastPanic > 0.6)
      ) {
        this.lastPanic = m;
        try {
          t.peds.panic(e.position.x, e.position.z, 55);
        } catch {}
        try {
          t.traffic.panic(e.position.x, e.position.z, 50);
        } catch {}
      }
      this.mag[n] <= 0 && e.ammo[n] > 0 && (this.autoReload = 0.25);
    }
    dropEmptyGun(e) {
      let t = this.p,
        n =
          this.owned.find(
            (n) =>
              n !== e && !Zp[n].melee && this.mag[n] + (t.ammo[n] || 0) > 0,
          ) ?? (this.owned.includes(`bat`) ? `bat` : `fists`);
      t.switchWeapon(n);
      let r = Zp[e].name,
        a = Zp[n].name;
      try {
        t.ctx.ui.notify(
          {
            zh: i.on
              ? i.t(
                  `${r.zh}沒子彈了，改用${a.zh}`,
                  `${i.jz(r.zh)}の弾切れ、${i.jz(a.zh)}に持ち替えた`,
                )
              : `${r.zh}沒子彈了，改用${a.zh}`,
            en: `${r.en} out of ammo — switched to ${a.en}`,
          },
          { duration: 2.2 },
        );
      } catch {}
    }
    startReload() {
      let e = this.p,
        t = e.weapon,
        n = Zp[t];
      n.melee ||
        this.reloadT > 0 ||
        this.mag[t] >= n.mag ||
        e.ammo[t] <= 0 ||
        ((this.autoReload = -1),
        (this.reloadT = n.reload),
        e.anim.play(`reload`, e.anim.actionDuration(`reload`) / n.reload),
        e.ctx.audio.play(`reload`, {
          x: e.position.x,
          y: e.position.y + 1.2,
          z: e.position.z,
        }));
    }
    finishReload() {
      let e = this.p,
        t = e.weapon;
      this.reloadT = 0;
      let n = Math.min(Zp[t].mag - this.mag[t], e.ammo[t]);
      (n > 0 && ((this.mag[t] += n), (e.ammo[t] -= n)),
        e.ctx.events.emit(`player:weapon`, { weapon: t, ammo: e.ammo[t] }));
    }
    melee() {
      let e = this.p,
        t = e.ctx,
        n = e.weapon,
        r;
      n === `bat`
        ? ((r =
            this.comboWindow > 0 && this.combo % 2 == 1
              ? `batBack`
              : `batFore`),
          (this.combo = +(r === `batFore`)))
        : e.hSpeed > 5.2 && e.grounded
          ? ((r = `kick`), (this.combo = 0))
          : (this.comboWindow <= 0 && (this.combo = 0),
            (r = $p[this.combo % $p.length]),
            (this.combo = (this.combo + 1) % $p.length));
      let i = n === `bat` ? 3.4 : 3.1,
        a = t.dynamics.query(e.position.x, e.position.z, i, this.bodies),
        o = null,
        s = -1 / 0,
        c = e.moveInputHeading ?? e.heading,
        l = Math.sin(c),
        u = -Math.cos(c);
      for (let t = 0; t < a; t++) {
        let n = this.bodies[t];
        if (n === e.body || !n.active || n.kind === `vehicle`) continue;
        let r = n.x - e.position.x,
          i = n.z - e.position.z,
          a = Math.hypot(r, i) || 1,
          c = (r * l + i * u) / a;
        if (c < 0.1) continue;
        let d = c * 2 - a;
        d > s && ((s = d), (o = n));
      }
      if (this.meleeTarget && this.meleeTarget.active && this.comboWindow > 0) {
        let t = this.meleeTarget;
        Math.hypot(t.x - e.position.x, t.z - e.position.z) < i + 0.8 && (o = t);
      }
      if (((this.meleeTarget = o), o)) {
        e.faceHeading(Math.atan2(o.x - e.position.x, -(o.z - e.position.z)));
        let t = Math.hypot(o.x - e.position.x, o.z - e.position.z);
        t > 0.95 && e.lunge(Math.min(4.8, (t - 0.85) * 5));
      }
      let d = e.anim.actionDuration(r);
      (e.anim.play(r),
        (this.swingKind = r),
        (this.comboWindow = d + 0.4),
        t.audio.play(`punch_whoosh`, {
          x: e.position.x,
          y: e.position.y + 1.2,
          z: e.position.z,
          rate: n === `bat` ? 0.72 : 0.95 + Math.random() * 0.2,
          volume: 0.7,
        }),
        t.events.emit(`player:attack`, {
          weapon: n,
          pos: e.position,
          action: r,
        }));
    }
    meleeHit(e) {
      let t = this.p,
        n = t.ctx;
      if (!Qp.has(e)) return;
      let r = t.weapon,
        i = Zp[r === `bat` ? `bat` : `fists`],
        a = e === `kick` ? 1.7 : i.range,
        o = Math.sin(t.heading),
        s = -Math.cos(t.heading),
        c = n.dynamics.query(
          t.position.x + o * 0.5,
          t.position.z + s * 0.5,
          a + 0.6,
          this.bodies,
        ),
        l = null,
        u = 1 / 0,
        d = 0;
      for (let n = 0; n < c; n++) {
        let c = this.bodies[n];
        if (c === t.body || !c.active) continue;
        let f = c.x - t.position.x,
          p = c.z - t.position.z,
          m = Math.hypot(f, p) || 0.001;
        m - c.radius > a ||
          Math.abs(c.y - t.position.y) > 1.6 ||
          ((f * o + p * s) / m < 0.3 && m > c.radius + 0.2) ||
          (r === `bat`
            ? (this.meleeApply(c, e, i.damage), d++)
            : m < u && ((u = m), (l = c)));
      }
      let f = this.meleeTarget;
      if (r !== `bat` && f && f.active && f !== l) {
        let e = f.x - t.position.x,
          n = f.z - t.position.z,
          r = Math.hypot(e, n) || 0.001;
        r - f.radius <= a + 0.45 &&
          (e * o + n * s) / r > 0.2 &&
          Math.abs(f.y - t.position.y) < 1.6 &&
          (l = f);
      }
      if (l) {
        let t =
          e === `uppercut`
            ? 1.9
            : e === `kick`
              ? 1.7
              : e === `hook`
                ? 1.45
                : e === `cross`
                  ? 1.25
                  : 1;
        (this.meleeApply(l, e, i.damage * t), d++);
      }
      d > 0 &&
        (t.hitStop =
          e === `uppercut` || e === `kick` || r === `bat` ? 0.09 : 0.06);
    }
    meleeApply(e, t, n) {
      let r = this.p,
        i = r.ctx,
        a = e.x - r.position.x,
        o = e.z - r.position.z,
        s = Math.hypot(a, o) || 1;
      (this.dir.set(a / s, 0.15, o / s).normalize(),
        this.end.set(
          e.x - (a / s) * e.radius * 0.8,
          e.y + (t === `uppercut` ? 1.5 : t === `kick` ? 1 : 1.35),
          e.z - (o / s) * e.radius * 0.8,
        ),
        e.kind === `vehicle` && (this.end.y = e.y + e.height * 0.6));
      let c =
        t === `uppercut` || t === `kick` || t === `batFore` || t === `batBack`;
      (this.applyDamage(
        e,
        n,
        this.end,
        this.dir,
        this.p.weapon,
        c ? 340 : t === `hook` ? 120 : 40,
      ),
        r.fx.punch(this.end, c),
        i.audio.play(`punch`, {
          x: this.end.x,
          y: this.end.y,
          z: this.end.z,
          rate: this.p.weapon === `bat` ? 0.72 : 0.9 + Math.random() * 0.25,
          volume: 1,
        }),
        r.cam.shake(c ? 0.3 : 0.17),
        i.input.rumble(c ? 0.7 : 0.45, c ? 140 : 80));
    }
    applyDamage(e, t, n, r, i, a) {
      (this.p.ctx,
        (this.dmg.amount = Math.round(t)),
        this.dmg.point.copy(n),
        this.dmg.dir.copy(r),
        (this.dmg.weapon = i),
        (this.dmg.source = `player`),
        (this.expectHit = !0),
        (this.killed = !1),
        (this.noCrime = !!e.userData?.noCrime));
      try {
        (e.onDamage?.(this.dmg),
          a > 0 && e.onImpact?.(r.x * a, r.z * a, this.p.body));
      } catch (e) {
        console.warn(`[player] target damage handler threw`, e);
      }
      ((this.expectHit = !1),
        !this.noCrime &&
          (e.kind === `police`
            ? this.crime(`assault_police`, 3, n)
            : e.kind === `ped` && this.crime(`assault`, Zp[i].severity, n)));
    }
    crime(e, t, n) {
      (this.crimePos.copy(n),
        this.p.ctx.events.emit(`crime`, {
          type: e,
          pos: this.crimePos.clone(),
          severity: t,
        }));
    }
  },
  tm = `
attribute vec4 aColor;
attribute vec4 aMisc;
uniform float uScale;
varying vec4 vColor;
varying vec4 vMisc;
#include <fog_pars_vertex>
void main() {
  vColor = aColor;
  vMisc = aMisc;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aMisc.x * uScale / max(0.05, -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,
  nm = `
uniform sampler2D uDecal;
uniform float uNight;
varying vec4 vColor;
varying vec4 vMisc;
#include <fog_pars_fragment>
void main() {
  float mode = vMisc.y;
  vec3 rgb = vColor.rgb;
  float a;
  if (vMisc.x > 0.0) {
    vec2 c = gl_PointCoord - 0.5;
    float d = dot(c, c) * 4.0;
    if (mode < 0.5) {
      float core = 1.0 - smoothstep(0.0, 1.0, d);
      a = core * core * vColor.a;
    } else a = (1.0 - smoothstep(0.25, 1.0, d)) * vColor.a;
  } else if (mode > 1.5) {
    // bullet hole: painted decal, a touch darker at night (unlit — the hole is nearly black anyway)
    vec4 t = texture2D(uDecal, vMisc.zw);
    rgb = t.rgb * (1.0 - 0.7 * uNight);
    a = t.a * vColor.a;
  } else {
    // tracer streak: soft across its width
    float x = vMisc.z * 2.0 - 1.0;
    a = (1.0 - x * x) * vColor.a;
  }
  if (a < 0.004) discard;
  float fogF = 0.0;
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      fogF = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      fogF = smoothstep(fogNear, fogFar, vFogDepth);
    #endif
  #endif
  // premultiplied output (blend ONE, ONE_MINUS_SRC_ALPHA): additive sprites keep the destination (alpha 0)
  if (mode < 0.5) gl_FragColor = vec4(rgb * a * (1.0 - fogF), 0.0);
  else {
    #ifdef USE_FOG
      rgb = mix(rgb, fogColor, fogF);
    #endif
    gl_FragColor = vec4(rgb * a, a);
  }
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;
