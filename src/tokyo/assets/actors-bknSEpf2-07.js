// tokyo/assets/actors-bknSEpf2 07 — math
// Lines 1380-2512 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var ya = class e {
    rig;
    inp = _r();
    out = Un();
    prev = Un();
    loco = Un();
    upper = Un();
    act = Un();
    full = Un();
    xfade = 0;
    xfadeDur = 0.2;
    state = `foot`;
    stateT = 0;
    phase = 0;
    spd = 0;
    airW = 0;
    aimW = 0;
    time = 0;
    land = 0;
    landStr = 0;
    recoil = 0;
    bank = 0;
    headYaw = 0;
    headPitch = 0;
    hairVel = 0;
    hairAng = 0;
    stopW = 0;
    lean = 0;
    legCache = { hipH: 0 };
    toeOut = 0.1;
    fightW = 0;
    action = null;
    actionT = 0;
    actionSpeed = 1;
    hitFired = !1;
    onActionHit = null;
    hitDirFront = !0;
    hitSide = 0;
    onFootstep = null;
    lastLp = [0, 0];
    ik;
    carSeatKind = `sedan`;
    carLegs = { thigh: 1.4, knee: 1.2, foot: -0.2 };
    constructor(e) {
      ((this.rig = e),
        (this.ik = new Zn(e)),
        this.setCarSeat(this.carSeatKind));
    }
    setCarSeat(e) {
      ((this.carSeatKind = e), mr(this.rig, e, this.carLegs));
    }
    setRig(e) {
      ((this.rig = e), this.setCarSeat(this.carSeatKind), Yn(e, this.out));
    }
    pv = new V();
    pt = new V();
    pole = new V();
    static PRAY_L = new V(-0.045, 0.02, -0.22);
    static PRAY_R = new V(0.045, 0.02, -0.22);
    static Q_PRAY = new v().setFromEuler(new Pe(Math.PI - 0.3, 0, 0));
    pq = new v();
    by = new V();
    bz = new V();
    bm = new N();
    rideStyle = `scooter`;
    gripL = new V();
    gripR = new V();
    hasGrips = !1;
    pegL = new V();
    pegR = new V();
    hasPegs = !1;
    tuckHint = -1;
    reachLean = 0;
    reachErr = 0;
    static POLE_L = new V(-0.8, -1, 0.25);
    static POLE_R = new V(0.8, -1, 0.25);
    kneePole = new V();
    qFoot = new v();
    eFoot = new Pe();
    seatHints(e, t) {
      let n = (e) =>
          Array.isArray(e) &&
          e.length >= 3 &&
          e
            .slice(0, 3)
            .every((e) => typeof e == `number` && Number.isFinite(e)),
        r = (e, r, i) => {
          if (Array.isArray(e) && e.length >= 2 && n(e[0]) && n(e[1]))
            return (
              r.set(e[0][0], e[0][1], e[0][2]).sub(t),
              i.set(e[1][0], e[1][1], e[1][2]).sub(t),
              !0
            );
          if (n(e)) {
            let n = Math.abs(e[0]);
            return (
              i.set(n, e[1], e[2]).sub(t),
              r.set(-n, e[1], e[2]).sub(t),
              !0
            );
          }
          return !1;
        };
      ((this.hasGrips = r(e?.grips, this.gripL, this.gripR)),
        (this.hasPegs = r(e?.pegs, this.pegL, this.pegR)));
      let i = e?.tuck;
      ((this.tuckHint =
        typeof i == `number` && Number.isFinite(i) ? H(i, 0, 1) : -1),
        (this.reachLean =
          this.rideStyle === `sport`
            ? 0.35
            : this.rideStyle === `moto`
              ? 0.1
              : 0),
        (this.reachErr = 0));
    }
    post() {
      let t = this.state;
      if (t === `drive` || t === `ride`) {
        if (!this.hasGrips && !(this.hasPegs && t === `ride`)) return;
        let n = this.ik;
        n.begin(this.rig);
        let r = 1 - (this.xfade > 0 ? H(this.xfade / this.xfadeDur, 0, 1) : 0);
        if (this.hasGrips) {
          let t = this.rig.joints,
            i =
              (t[8].distanceTo(t[9]) + t[9].distanceTo(t[10])) *
              (this.rideStyle === `scooter`
                ? 0.95
                : this.rideStyle === `moto`
                  ? 0.92
                  : 0.9),
            a = n.rootPos(5, this.pt).distanceTo(this.gripL),
            o = n.rootPos(8, this.pt).distanceTo(this.gripR);
          ((this.reachErr = Math.max(a, o) - 0.06 - i),
            this.pv.set(
              this.gripL.x + 0.012,
              this.gripL.y + 0.035,
              this.gripL.z + 0.05,
            ),
            n.arm(5, 6, 7, this.pv, e.POLE_L, r),
            this.pv.set(
              this.gripR.x - 0.012,
              this.gripR.y + 0.035,
              this.gripR.z + 0.05,
            ),
            n.arm(8, 9, 10, this.pv, e.POLE_R, r),
            this.state === `ride` &&
              (this.eFoot.set(1.25, -Math.PI / 2, 0),
              this.qFoot.setFromEuler(this.eFoot),
              n.orient(7, this.qFoot, r * 0.85),
              this.eFoot.set(1.25, Math.PI / 2, 0),
              this.qFoot.setFromEuler(this.eFoot),
              n.orient(10, this.qFoot, r * 0.85)));
        }
        if (this.hasPegs && t === `ride`) {
          let e = this.rideStyle === `scooter`,
            t = e ? 0.03 : 0.09;
          for (let i = 0; i < 2; i++) {
            let a = i === 0 ? -1 : 1,
              o = r * (i === 0 ? 1 - this.stopW : 1);
            if (o <= 0.01) continue;
            let s = i === 0 ? this.pegL : this.pegR;
            (this.pv.set(s.x - a * 0.01, s.y + 0.075, s.z + t),
              this.kneePole.set(
                a * (e ? 0.55 : this.rideStyle === `moto` ? 0.12 : 0.3),
                0.35,
                -1,
              ),
              n.arm(
                i === 0 ? 11 : 14,
                i === 0 ? 12 : 15,
                i === 0 ? 13 : 16,
                this.pv,
                this.kneePole,
                o,
              ),
              this.eFoot.set(e ? -0.05 : -0.42, a * -0.12, 0),
              this.qFoot.setFromEuler(this.eFoot),
              n.orient(i === 0 ? 13 : 16, this.qFoot, o));
          }
        }
        return;
      }
      if (t !== `foot` && t !== `climb`) return;
      let n = this.inp,
        r = n.weapon,
        i = this.ik;
      if (
        (i.begin(this.rig),
        this.propW > 0.01 &&
          (this.propKind === `tea` ||
            this.propKind === `umbrella` ||
            this.propKind === `phone`))
      ) {
        if (this.propKind === `phone`) {
          (i.rootPos(7, this.pt), i.rootPos(28, this.pv), (this.pv.x += 0.03));
          let e = this.pv.sub(this.pt).normalize(),
            t = this.pole.set(0.2, 0, -1);
          t.addScaledVector(e, -t.dot(e)).normalize();
          let n = this.bz.crossVectors(e, this.by.copy(t).negate());
          (this.bm.makeBasis(e, this.by, n),
            this.pq.setFromRotationMatrix(this.bm),
            i.orient(7, this.pq, this.propW));
        } else
          this.propKind === `tea`
            ? (this.pv.set(0.05, 1, -0.1), i.aimAxisZ(26, this.pv, 1))
            : (i.rootPos(27, this.pt),
              this.pv
                .set(
                  0.03,
                  this.rig.joints[4].y + 0.4,
                  -0.02 - H(this.spd * 0.06, 0, 0.3),
                )
                .sub(this.pt),
              i.aimAxisZ(27, this.pv, 1));
      }
      if (this.action === `pray`) {
        let t = K(this.actionT / sa.pray.dur, ca, la);
        (i.pointOn(2, e.PRAY_L, this.pt),
          this.pole.set(-1, -0.6, 0.3),
          i.arm(5, 6, 7, this.pt, this.pole, t),
          i.pointOn(2, e.PRAY_R, this.pt),
          this.pole.set(1, -0.6, 0.3),
          i.arm(8, 9, 10, this.pt, this.pole, t),
          i.rootQuat(2, this.pq),
          this.pq.multiply(e.Q_PRAY),
          i.orient(7, this.pq, t),
          i.orient(10, this.pq, t));
      }
      if (r === `fists`) return;
      let a =
        this.action === `reload`
          ? Math.sin(Math.min(1, this.actionT / 1.2) * Math.PI)
          : 0;
      if (r === `pistol` || r === `smg`) {
        let e = this.aimW,
          t = r === `smg` ? 20 : 19;
        if (e > 0.01) {
          let o = Math.cos(n.aimPitch),
            s = Math.sin(n.aimPitch),
            c = H(bt(n.aimYaw), -1.2, 1.2),
            l = e * (1 - a);
          if (
            (this.pv.set(Math.sin(c) * o, s, -Math.cos(c) * o),
            l > 0.01 && r === `smg`)
          )
            (i.rootPos(8, this.pt),
              (this.pt.x -= 0.035),
              (this.pt.y -= 0.045),
              this.pt.addScaledVector(this.pv, 0.25),
              this.pole.set(0.9, -0.8, 0.25),
              i.arm(8, 9, 10, this.pt, this.pole, l));
          else if (l > 0.01) {
            let e = 0.15;
            (i.rootPos(10, this.pt),
              (this.pt.x += Math.cos(c) * e),
              (this.pt.z += Math.sin(c) * e),
              (this.pt.y += e * 0.35),
              this.pole.set(0.8, -1, 0.2),
              i.arm(8, 9, 10, this.pt, this.pole, l));
          }
          i.aimGun(t, this.pv, e * (1 - a));
        }
        let o = r === `smg` ? 1 : e;
        (i.pointOn(t, r === `smg` ? _a.smg : _a.pistol, this.pt),
          this.pole.set(-0.6, -1, 0.25),
          i.arm(5, 6, 7, this.pt, this.pole, o * (1 - a)));
      } else if (r === `bat`) {
        let e = this.action,
          t = va(e, e ? this.actionT / sa[e].dur : 0, this.aimW, this.pv);
        (i.aimAxisZ(18, this.pv, 1),
          t > 0.01 &&
            (i.pointOn(18, _a.bat, this.pt),
            this.pole.set(-0.4, -1, 0.5),
            i.arm(5, 6, 7, this.pt, this.pole, t)));
      }
    }
    snapshot(e = 0.2) {
      (this.prev.set(this.out), (this.xfade = e), (this.xfadeDur = e));
    }
    setState(e, t = 0.25) {
      e !== this.state &&
        (this.snapshot(t),
        (this.state = e),
        (this.stateT = 0),
        e !== `foot` && (this.action = null));
    }
    play(e, t = 1) {
      (this.action &&
        sa[this.action].mask !== sa[e].mask &&
        this.snapshot(0.08),
        (this.action = e),
        (this.actionT = 0),
        (this.actionSpeed = t),
        (this.hitFired = !1));
    }
    actionDuration(e) {
      return sa[e].dur;
    }
    get actionHitFired() {
      return this.hitFired;
    }
    get actionProgress() {
      return this.action ? this.actionT / sa[this.action].dur : -1;
    }
    landImpact(e) {
      ((this.land = 1), (this.landStr = H(e, 0.2, 1.2)));
    }
    kickRecoil(e) {
      this.recoil = Math.min(1.5, this.recoil + e);
    }
    update(e) {
      let t = this.inp;
      ((this.time += e), (this.stateT += e));
      let n = this.out;
      switch (this.state) {
        case `foot`:
        case `climb`:
          (this.locomotion(e),
            n.set(this.loco),
            this.upperLayer(e, n),
            this.props(e, n));
          break;
        case `swim`:
          (this.swim(e, n), (this.propW = 0));
          break;
        case `drive`:
        case `ride`:
          this.seated(e, n);
          break;
        case `knockdown`:
        case `dead`:
          this.fallen(e, n, this.state === `dead`);
          break;
        case `getup`:
          this.getUp(e, n);
          break;
        case `busted`:
          this.bustedPose(e, n);
      }
      if (this.action) {
        let t = sa[this.action];
        this.actionT += e * this.actionSpeed;
        let r = this.actionT / t.dur;
        if (
          (!this.hitFired &&
            t.hit !== void 0 &&
            r >= t.hit &&
            ((this.hitFired = !0), this.onActionHit?.(this.action)),
          r >= 1)
        )
          this.action = null;
        else if (this.action === `hit` || this.action === `draw`)
          t.fn(r, n, this);
        else {
          (this.act.set(n), t.fn(r, this.act, this));
          let e = Math.min(1, r / 0.12, (1 - r) / 0.18 + 0.001);
          Jn(n, this.act, H(e, 0, 1), t.mask);
        }
      }
      let r =
        -0.03 -
        this.spd * 0.06 -
        Math.max(0, -t.vy) * 0.03 +
        Math.sin(this.time * 1.7) * 0.02;
      if (
        ((this.hairVel += ((r - this.hairAng) * 90 - this.hairVel * 9) * e),
        (this.hairVel += -t.turnRate * 0.4 * e * 10),
        (this.hairAng += this.hairVel * e),
        G(
          n,
          17,
          this.hairAng +
            Math.sin(this.phase * hr * 2) * 0.08 * H(this.spd / 4, 0, 1),
          0,
          H(-t.turnRate * 0.05, -0.3, 0.3) +
            Math.sin(this.phase * hr) * 0.06 * H(this.spd / 4, 0, 1),
        ),
        this.fingers(e, n),
        this.shoulders(n),
        this.jawPose(e, n),
        this.xfade > 0)
      ) {
        this.xfade -= e;
        let t = H(this.xfade / this.xfadeDur, 0, 1),
          r = t * t * (3 - 2 * t);
        for (let e = 0; e < n.length; e++) n[e] += (this.prev[e] - n[e]) * r;
      }
      (Yn(this.rig, n), this.post(), this.eyelids(e));
    }
    blinkT = 2.5;
    blinkPhase = -1;
    lid = 0;
    squint = 0;
    eyelids(e) {
      let t = 0,
        n = this.state;
      (n === `dead`
        ? (t = Ie(0.3, 1.1, this.stateT))
        : n === `knockdown` || this.action === `hit`
          ? (t = 0.55)
          : this.action === `pray`
            ? (t = 0.8 * Ie(0.1, 0.25, this.actionT / 3.6))
            : this.propW > 0.5 && this.propKind === `phone`
              ? (t = 0.35)
              : this.sipW > 0.3 && (t = 0.45),
        (t = Math.max(t, this.squint)),
        (this.squint = 0),
        (this.blinkT -= e));
      let r = 0;
      if (this.blinkPhase >= 0) {
        this.blinkPhase += e;
        let t = this.blinkPhase;
        ((r = t < 0.06 ? t / 0.06 : t < 0.16 ? 1 - (t - 0.06) / 0.1 : 0),
          t >= 0.16 && (this.blinkPhase = -1));
      } else
        this.blinkT <= 0 &&
          n !== `dead` &&
          ((this.blinkPhase = 0),
          (this.blinkT = 2.2 + Math.random() * 3.6),
          Math.random() < 0.15 && (this.blinkT = 0.25));
      let i = Math.max(t, r);
      this.lid = n === `dead` || r > 0 ? i : pt(this.lid, i, 14, e);
      let a = Math.max(0.001, this.lid);
      (this.rig.bones[28].scale.set(1, a, 1),
        this.rig.bones[29].scale.set(1, a, 1));
    }
    shoulders(e) {
      for (let t = 0; t < 2; t++) {
        let n = (t === 0 ? 5 : 8) * 3,
          r = e[n],
          i = e[n + 1],
          a = e[n + 2],
          o = Math.cos(r),
          s = Math.sin(r),
          c = Math.cos(a),
          l = Math.sin(a),
          u = Math.sin(i),
          d = c * o - l * u * s,
          f = Math.acos(d < -1 ? -1 : d > 1 ? 1 : d),
          p = c * s + l * u * o,
          m = Ie(0.85, 2.7, f) * 0.23,
          h = H(p, 0, 1) * Ie(0.4, 1.3, f) * 0.14,
          g = t === 0 ? -1 : 1;
        G(e, t === 0 ? 30 : 31, 0, g * h, g * m);
      }
    }
    jawOpen = 0;
    jawPose(e, t) {
      let n = this.state,
        r = 0;
      (n === `dead`
        ? (r = 0.14 * Ie(0.2, 1, this.stateT))
        : n === `knockdown`
          ? (r = 0.1)
          : n === `swim`
            ? (r = 0.05 + 0.05 * Math.max(0, Math.sin(this.time * 3)))
            : (n === `foot` || n === `climb`) &&
              ((r =
                Ie(5, 7, this.spd) * (0.05 + 0.04 * Math.sin(this.time * 7)) +
                (this.action === `hit` ? 0.12 : 0) +
                (this.action === `cheer` ? 0.2 : 0)),
              (this.action === `kick` ||
                this.action === `uppercut` ||
                this.action === `batFore` ||
                this.action === `batBack`) &&
                (r = Math.max(r, 0.06))),
        (this.jawOpen = pt(this.jawOpen, r, 12, e)),
        G(t, 32, -this.jawOpen, 0, 0));
    }
    curlL = 0.3;
    curlR = 0.3;
    propW = 0;
    propKind = `none`;
    sipT = 0;
    sipW = 0;
    props(e, t) {
      let n = this.inp,
        r = this.state === `foot` ? n.prop : `none`;
      (r !== `none` &&
        (r !== this.propKind && this.propW > 0.05
          ? (this.propW = Math.max(0, this.propW - e * 4))
          : (this.propKind = r)),
        (this.propW = pt(
          this.propW,
          +(r !== `none` && r === this.propKind),
          3.2,
          e,
        )));
      let i = this.propW;
      if (i < 0.005) return;
      let a = this.propKind,
        o = (e, n, r, a, o = i) => {
          let s = e * 3;
          ((t[s] += (n - t[s]) * o),
            (t[s + 1] += (r - t[s + 1]) * o),
            (t[s + 2] += (a - t[s + 2]) * o));
        };
      if (a === `phone`)
        (o(5, 0.42, -0.5, 0.16),
          o(6, 1.62, 0, 0),
          o(7, -0.3, 0.9, 0),
          o(4, -0.38, 0.12, 0, i * (1 - H(this.spd / 3, 0, 0.7))),
          o(3, -0.18, 0.05, 0, i * (1 - H(this.spd / 3, 0, 0.7))));
      else if (a === `tea`) {
        this.sipT += e;
        let t = this.sipT % 4.6,
          n = t > 3.2 ? Math.sin(((t - 3.2) / 1.4) * Math.PI) : 0;
        this.sipW = n * (1 - H(this.spd / 2.5, 0, 1));
        let r = this.sipW;
        (o(5, U(0.22, 0.62, r), U(-0.35, -0.7, r), U(0.12, 0.3, r)),
          o(6, U(1.35, 2.25, r), 0, 0),
          o(7, 0, 0.2, 0),
          r > 0.01 && o(4, -0.12 * r, 0.18 * r, 0, i));
      } else
        a === `umbrella` &&
          (o(5, 0.42, -0.5, 0.22), o(6, 1.8, 0, 0), o(7, 0.1, 0.4, 0));
    }
    propShown(e) {
      return (
        this.propKind === e &&
        this.propW > 0.3 &&
        (this.state === `foot` || this.state === `climb`)
      );
    }
    curlOverrideL = -1;
    fingers(e, t) {
      let n = this.inp,
        r = 0.42,
        i = 0.42,
        a = this.state;
      if (a === `drive` || a === `ride`) ((r = 1.45), (i = 1.45));
      else if (a === `swim`) ((r = 0.1), (i = 0.1));
      else if (a === `dead` || a === `knockdown`) ((r = 0.5), (i = 0.6));
      else if (a === `busted`) ((r = 0.15), (i = 0.15));
      else if (a === `foot` || a === `climb`) {
        r = i = 0.42 + H((this.spd - 2) / 2, 0, 1) * 0.8;
        let e = n.weapon;
        (e === `bat`
          ? ((i = 1.55),
            (r =
              this.aimW > 0.3 ||
              this.action === `batFore` ||
              this.action === `batBack`
                ? 1.5
                : r))
          : e === `pistol`
            ? ((i = 1.5), (r = U(r, 1.2, this.aimW)))
            : e === `smg`
              ? ((i = 1.5), (r = U(r, 1.35, this.aimW)))
              : this.action === `pray` ||
                  this.action === `wave` ||
                  this.action === `bow`
                ? ((r = 0.1), (i = 0.1))
                : (this.aimW > 0.3 ||
                    (this.action &&
                      this.action !== `hit` &&
                      this.action !== `draw`)) &&
                  ((r = 1.7), (i = 1.7)),
          this.propW > 0.3 &&
            (r =
              this.propKind === `phone`
                ? 0.9
                : this.propKind === `tea`
                  ? 1.25
                  : 1.55),
          this.curlOverrideL >= 0 && (r = this.curlOverrideL));
      }
      this.curlOverrideL = -1;
      let o = mt(18, e);
      ((this.curlL += (r - this.curlL) * o),
        (this.curlR += (i - this.curlR) * o),
        G(t, 22, 0, 0, this.curlL),
        G(t, 23, 0, 0, -this.curlR));
    }
    footTargets = new Float32Array(6);
    footPitch = [0, 0];
    locomotion(e) {
      let t = this.inp,
        n = this.loco;
      n.fill(0);
      let r = (this.spd = pt(this.spd, t.speed, 12, e)),
        i = H(r / 0.4, 0, 1),
        a = Ie(2, 4, r),
        o = Ie(4.8, 6.8, r),
        s = 1 - a;
      this.airW = pt(this.airW, +!t.grounded, t.grounded ? 20 : 10, e);
      let c =
        !!this.action &&
        this.action !== `hit` &&
        this.action !== `draw` &&
        this.action !== `reload` &&
        !ma.has(this.action);
      this.fightW = pt(
        this.fightW,
        t.weapon === `fists` && (t.aim > 0.5 || c) ? 1 : 0,
        8,
        e,
      );
      let l = this.fightW * (1 - a),
        u = this.airW,
        d = 1.05 + r * 0.36,
        f = (1 - i) * H(Math.abs(t.turnRate) / 2.5, 0, 1) * (1 - u);
      (this.phase,
        (this.phase =
          (this.phase + (r / d) * e * (1 - u * 0.8) + f * 1.7 * e) % 1));
      let p = U(0.6, 0.34, a) - 0.04 * o,
        m = p * d * i,
        h = (U(0.075, 0.26, a) + 0.1 * o) * Math.max(i, f * 0.7),
        g = U(0.5, 0.28, a),
        _ = 1 - g,
        v = this.rig,
        y = t.dirX,
        b = t.dirZ;
      i < 0.05 && ((y = 0), (b = -1));
      let x = -b,
        S = (this.phase - p * 0.5) * hr * 2,
        C = i * U(0.02, 0.045, a) * (s * Math.cos(S) - a * Math.cos(S));
      this.land = Math.max(0, this.land - e * 3.2);
      let w =
          this.land > 0
            ? Math.sin(
                Math.min(1, (1 - this.land) * 3.2) * Math.PI * 0.5 +
                  (1 - this.land) * 0.5,
              ) * this.land
            : 0,
        T = Math.sin(this.time * 2.1) * 0.006 * (1 - i),
        E =
          -0.055 * l -
          0.012 * s * i -
          (0.045 * a + 0.03 * o) +
          C -
          0.16 * this.landStr * w +
          T +
          u * 0.02;
      n[100] = E;
      let D = 1 - i,
        O = Math.sin(this.time * 0.42) * 0.7 + Math.sin(this.time * 0.17) * 0.3;
      ((n[99] = Math.sin(this.phase * hr) * 0.018 * i * s + O * 0.022 * D),
        (this.toeOut = 0.16 * D + 0.05),
        (this.bank = pt(
          this.bank,
          H(-t.turnRate * r * 0.03, -0.3, 0.3),
          8,
          e,
        )));
      let k = Math.sin(this.phase * hr) * (0.07 + 0.08 * a) * i * x;
      G(
        n,
        0,
        0,
        k + O * 0.04 * D * (1 - l) - 0.32 * l,
        this.bank + Math.cos(this.phase * hr) * 0.035 * i * s - O * 0.045 * D,
      );
      let A = v.hipHeight + E - (v.joints[0].y - v.joints[11].y);
      ((this.legCache.hipH = A), v.thighLen, v.shinLen, v.joints[13].y);
      let j = v.joints[14].x * (1 - 0.2 * a - 0.15 * o + 0.22 * (1 - i));
      for (let e = 0; e < 2; e++) {
        let n = e === 0 ? -1 : 1,
          o = (this.phase + e * 0.5) % 1,
          c,
          d,
          f;
        if (o < p) {
          let e = o / p;
          ((c = U(m * g, -m * _, e)),
            (d = 0),
            (f =
              U(0.25 * s, -0.1, e) * i * (e < 0.15 ? 1 - e / 0.15 : 0) +
              (e > 0.7 ? -(e - 0.7) * (1.4 + a) * i : 0)));
        } else {
          let e = (o - p) / (1 - p),
            t = U(e * e * (3 - 2 * e), e ** 1.7 * (3 - 2 * e ** 0.85), a);
          ((c = U(-m * _, m * g, H(t, 0, 1))),
            (d = h * Math.sin(Math.PI * e ** +U(0.8, 0.55, a))),
            (f =
              (e < 0.5
                ? -(0.5 + 0.4 * a) * (1 - e * 2)
                : 0.25 * (e - 0.5) * 2) * i));
        }
        (this.lastLp[e] > p * 0 + 0.9 &&
          o < 0.1 &&
          i > 0.3 &&
          this.airW < 0.3 &&
          this.onFootstep?.(e, r),
          (this.lastLp[e] = o));
        let v = n * j + y * c * (1 - 0.45 * Math.abs(y)),
          x = b * c;
        if (u > 0.01) {
          let r = H((t.airTime - 0.5) * 2, 0, 1) * +(t.vy < -3),
            i = Math.sin(this.time * 9 + e * 2.4) * 0.12 * r,
            a = n * j * 1.1,
            o = (e === 0 ? 0.32 : 0.16) * (1 - r * 0.6) + 0.05 + i,
            s = (e === 0 ? -0.12 : 0.2) * (1 - r) + i * 0.5;
          ((v = U(v, a, u)),
            (d = U(d, o, u)),
            (x = U(x, s, u)),
            (f = U(f, e === 0 ? 0.1 : -0.5, u)));
        }
        l > 0.01 && ((v += n * 0.04 * l), (x += (e === 0 ? -0.16 : 0.16) * l));
        let S = e * 3;
        ((this.footTargets[S] = v),
          (this.footTargets[S + 1] = d),
          (this.footTargets[S + 2] = x),
          (this.footPitch[e] = f));
      }
      (this.writeLocoLegs(n),
        (this.lean = pt(this.lean, H(t.accel * 0.018, -0.12, 0.2), 6, e)));
      let M =
          (0.04 * s * i + 0.2 * a + 0.14 * o) * x + this.lean * i + u * 0.08,
        N = -k * 1.6 + 0.2 * l;
      (G(n, 1, -M * 0.55 - 0.1 * this.landStr * w, N * 0.4, -this.bank * 0.3),
        G(
          n,
          2,
          -M * 0.45 +
            Math.sin(this.time * 2.1) * 0.015 * (1 - i) -
            0.1 * this.landStr * w,
          N * 0.6,
          0,
        ));
      let ee = Math.abs(t.lookYaw) < 1.9 ? H(t.lookYaw, -1, 1) : 0;
      ((this.headYaw = pt(this.headYaw, -ee * 0.6 * (1 - a * 0.6), 5, e)),
        (this.headPitch = pt(
          this.headPitch,
          H(-t.lookPitch * 0.35, -0.3, 0.35),
          5,
          e,
        )),
        G(
          n,
          3,
          M * 0.35 + this.headPitch * 0.4,
          this.headYaw * 0.4 - N * 0.5,
          0,
        ),
        G(
          n,
          4,
          M * 0.35 + this.headPitch * 0.6 + 0.05 * this.landStr * w,
          this.headYaw * 0.6 - N * 0.3,
          -this.bank * 0.4,
        ));
      let P = (0.32 * s + 0.8 * a + 0.3 * o) * i * x,
        F = Math.cos(this.phase * hr),
        I = i * (0.22 * s + 1.35 * a + 0.2 * o) + 0.1 * (1 - i),
        te = u * H((t.airTime - 0.5) * 2, 0, 1),
        ne = Math.sin(this.time * 7) * 0.5 * te,
        re = 0.035 + 0.035 * i + Math.sin(this.time * 2.1) * 0.006,
        ie = D * (1 - l),
        ae = 0.05 * ie,
        L = (0.12 + O * 0.06) * ie,
        R = (0.12 - O * 0.06) * ie;
      (G(
        n,
        5,
        -P * F + u * 0.4 + ne + 0.1 * this.landStr * w + ae,
        0.05 * ie,
        -(re - 0.03 * a) - u * 0.5 - te * 0.7,
      ),
        G(
          n,
          8,
          P * F + u * 0.2 - ne + 0.1 * this.landStr * w + ae,
          -0.05 * ie,
          re - 0.03 * a + u * 0.5 + te * 0.7,
        ),
        G(n, 6, I + Math.max(0, -F) * 0.35 * i + u * 0.6 + L, 0, 0),
        G(n, 9, I + Math.max(0, F) * 0.35 * i + u * 0.6 + R, 0, 0),
        G(n, 7, -0.1 - 0.1 * a, -0.12 * (1 - a), -0.1 * a),
        G(n, 10, -0.1 - 0.1 * a, 0.12 * (1 - a), 0.1 * a));
    }
    writeLocoLegs(e) {
      let t = this.rig,
        n = this.legCache.hipH || t.hipHeight - 0.035,
        r = t.thighLen,
        i = t.shinLen,
        a = t.joints[13].y,
        o = t.joints[14].x;
      for (let s = 0; s < 2; s++) {
        let c = s === 0 ? -1 : 1,
          l = s * 3,
          u = this.footTargets[l] - c * o,
          d = this.footTargets[l + 1] + a - n,
          f = this.footTargets[l + 2];
        (Xn(
          e,
          s === 0 ? 11 : 14,
          s === 0 ? 12 : 15,
          s === 0 ? 13 : 16,
          r,
          i,
          u,
          d,
          f,
          this.footPitch[s],
          t.thighRest ?? 0,
          t.shinRest ?? 0,
        ),
          (e[(s === 0 ? 13 : 16) * 3 + 1] += c * -this.toeOut));
      }
    }
    upperLayer(e, t) {
      let n = this.inp,
        r = n.weapon;
      ((this.aimW = pt(this.aimW, n.aim, n.aim > this.aimW ? 16 : 8, e)),
        (this.recoil = Math.max(0, this.recoil - e * 9)));
      let i = this.upper;
      i.set(t);
      let a = this.aimW,
        o = H(n.aimPitch, -1.1, 1.2),
        s = H(bt(n.aimYaw), -1.2, 1.2),
        c = this.recoil,
        l = Math.sin(this.time * 2.1) * 0.012;
      if (r === `pistol` || r === `smg`) {
        let e = r === `smg`;
        a > 0.01 &&
          (Wn(i, 1, o * 0.18 * a, -s * 0.35 * a, 0),
          Wn(i, 2, o * 0.22 * a + c * 0.06, -s * 0.45 * a, 0),
          (i[12] = U(i[12], -o * 0.3 - (e ? 0.1 : 0), a)),
          (i[13] = U(i[13], -s * 0.2 + (e ? 0.06 : 0.05), a)),
          e && (i[14] = U(i[14], -0.14, a)));
        let n = o * 0.6;
        if (e) {
          this.armsTo(
            i,
            a,
            1.15 + n + c * 0.25 + l,
            -0.1,
            Math.PI / 2 - 1.15 - 0.02 + c * 0.1,
            1.25 + n + c * 0.2 + l,
            0.72,
            0.85,
          );
          let e = 1 - a;
          (e > 0.01 &&
            ((i[24] = U(i[24], 0.35, e)),
            (i[26] = U(i[26], 0.05, e)),
            (i[27] = U(i[27], 1.2, e)),
            (i[15] = U(i[15], 0.6, e * 0.9)),
            (i[17] = U(i[17], 0.45, e * 0.9)),
            (i[18] = U(i[18], 1.3, e * 0.9))),
            G(i, 20, U(-0.5, 0, a), 0, 0));
        } else {
          this.armsTo(
            i,
            a,
            Math.PI / 2 + n - 0.04 + c * 0.35 + l,
            -0.22,
            0.06 + c * 0.15,
            Math.PI / 2 + n - 0.1 + c * 0.3 + l,
            0.62,
            0.55,
          );
          let e = 1 - a;
          (e > 0.01 &&
            ((i[24] = U(i[24], i[24] * 0.3 + 0.15, e * 0.8)),
            (i[27] = U(i[27], 0.45, e * 0.8))),
            G(i, 19, 0, 0, 0),
            G(i, 10, U(-0.1, -0.05, a), 0, 0));
        }
        Jn(t, i, 1, Gn);
      } else if (r === `bat`)
        (this.armsTo(
          i,
          1,
          U(0.9, 1.2, a),
          U(0.35, 0.9, a),
          U(2.1, 1.7, a),
          U(i[15], 1.1, a),
          U(i[17], 0.9, a),
          U(i[18], 1.8, a),
        ),
          a > 0.01 && Wn(i, 2, 0, -0.5 * a, 0),
          Jn(t, i, 1, Gn));
      else {
        let e =
            !!this.action &&
            this.action !== `hit` &&
            this.action !== `draw` &&
            !ma.has(this.action),
          n = Math.max(a, +!!e);
        n > 0.01 &&
          (this.armsTo(
            i,
            n,
            vr.armX + l,
            -vr.armZ,
            vr.elbow,
            vr.armX + 0.12 - l,
            vr.armZ,
            vr.elbow + 0.1,
          ),
          Wn(i, 2, -0.06 * n, 0.1 * n, 0),
          Wn(i, 4, 0.08 * n, -0.08 * n, 0),
          Jn(t, i, 1, Gn));
      }
    }
    sc4 = [0, 0, 0, 0];
    k4(e, t, n, r) {
      let i = this.sc4;
      return ((i[0] = e), (i[1] = t), (i[2] = n), (i[3] = r), i);
    }
    armsTo(e, t, n, r, i, a, o, s) {
      ((e[24] = U(e[24], n, t)),
        (e[25] = U(e[25], 0, t)),
        (e[26] = U(e[26], r, t)),
        (e[27] = U(e[27], i, t)),
        (e[15] = U(e[15], a, t)),
        (e[16] = U(e[16], 0, t)),
        (e[17] = U(e[17], o, t)),
        (e[18] = U(e[18], s, t)));
    }
    swim(e, t) {
      let n = this.inp;
      t.fill(0);
      let r = (this.spd = pt(this.spd, n.speed, 4, e)),
        i = Ie(0.4, 1.2, r);
      this.phase = (this.phase + e * (0.35 + r * 0.45)) % 1;
      let a = this.time,
        o = this.phase * hr;
      (G(t, 0, -1.4 * i + 0.12 * (1 - i), 0, 0),
        (t[100] = 0),
        G(t, 1, 0.04 * i - 0.05 * (1 - i), Math.cos(o) * 0.18 * i, 0),
        G(t, 2, 0.05, Math.cos(o) * 0.3 * i, 0),
        G(t, 3, 0.35 * i, 0, 0),
        G(t, 4, 0.6 * i + 0.05, Math.max(0, Math.cos(o)) * 0.9 * i, 0));
      let s = 1 - i,
        c = Math.sin(a * 3.2),
        l = Math.PI - o,
        u = -o,
        d = Math.sin(l),
        f = Math.sin(u),
        p = Math.max(0, -d),
        m = Math.max(0, -f);
      (G(
        t,
        5,
        U(0.42 + c * 0.1, l, i),
        U(-c * 0.35, 0, i),
        U(-0.72 - c * 0.1, -0.2 - p * 0.85, i),
      ),
        G(
          t,
          8,
          U(0.42 - c * 0.1, u, i),
          U(-c * 0.35, 0, i),
          U(0.72 + c * 0.1, 0.2 + m * 0.85, i),
        ),
        G(t, 6, U(0.55, 0.25 + Math.max(0, d) * 0.55 + p * 1.55, i), 0, 0),
        G(t, 9, U(0.55, 0.25 + Math.max(0, f) * 0.55 + m * 1.55, i), 0, 0),
        G(t, 7, U(0, -0.2, i), U(c * 0.5, 0, i), 0),
        G(t, 10, U(0, -0.2, i), U(-c * 0.5, 0, i), 0));
      let h = Math.sin(a * 2.4),
        g = Math.sin(a * 11);
      (G(t, 11, U(0.45 + h * 0.3, 0.06 + g * 0.22, i), 0, -0.08 * s),
        G(t, 14, U(0.45 - h * 0.3, 0.06 - g * 0.22, i), 0, 0.08 * s),
        G(t, 12, U(-0.9 - h * 0.3, -0.12 - Math.max(0, g) * 0.18, i), 0, 0),
        G(t, 15, U(-0.9 + h * 0.3, -0.12 - Math.max(0, -g) * 0.18, i), 0, 0),
        G(t, 13, U(-0.4, -1.35, i), 0, 0),
        G(t, 16, U(-0.4, -1.35, i), 0, 0));
    }
    seated(e, t) {
      let n = this.inp;
      t.fill(0);
      let r = H(n.steer, -1, 1);
      this.bank = pt(this.bank, r, 6, e);
      let i = this.bank;
      if (this.state === `drive`)
        (G(t, 0, 0, 0, 0),
          G(t, 1, 0.2, 0, 0),
          G(t, 2, 0.04, 0, 0),
          G(t, 11, this.carLegs.thigh, 0, -0.04),
          G(t, 14, this.carLegs.thigh, 0, 0.04),
          G(t, 12, -this.carLegs.knee, 0, 0),
          G(t, 15, -this.carLegs.knee, 0, 0),
          G(t, 13, this.carLegs.foot, 0, 0),
          G(t, 16, this.carLegs.foot, 0, 0),
          G(t, 5, 0.72 + i * 0.22, 0, 0.3 - i * 0.12),
          G(t, 8, 0.72 - i * 0.22, 0, -0.3 - i * 0.12),
          G(t, 6, 0.95 - i * 0.2, 0, 0),
          G(t, 9, 0.95 + i * 0.2, 0, 0),
          G(t, 4, -0.05, -i * 0.3, 0),
          G(t, 3, 0, -i * 0.1, 0));
      else if (this.rideStyle !== `scooter`) {
        this.stopW = pt(this.stopW, +(n.vehSpeed < 0.6), 5, e);
        let r = this.stopW,
          a = H(n.vehSpeed / 30, 0, 1),
          o =
            (this.tuckHint >= 0
              ? this.tuckHint
              : this.rideStyle === `sport`
                ? 0.85
                : 0.2) *
            (1 - 0.55 * r) *
            (0.85 + 0.15 * a),
          s = this.reachStep(e);
        (G(t, 0, -0.1 - 0.3 * o - 0.3 * s, 0, i * 0.04),
          G(t, 1, -0.12 - 0.3 * o - 0.3 * s, 0, 0),
          G(t, 2, -0.06 - 0.2 * o - 0.25 * s, -i * 0.08, -i * 0.04),
          G(t, 3, 0.16 + 0.35 * o + 0.28 * s, 0, 0),
          G(t, 4, 0.12 + 0.32 * o + 0.3 * s, -i * 0.22, i * 0.08),
          G(t, 11, U(1.25 + 0.2 * o, 0.5, r), 0, U(-0.07, -0.35, r)),
          G(t, 14, 1.25 + 0.2 * o, 0, 0.07),
          G(t, 12, U(-1.75 - 0.35 * o, -0.35, r), 0, 0),
          G(t, 15, -1.75 - 0.35 * o, 0, 0),
          G(t, 13, U(0.35, 0.05, r), 0, U(0, 0.25, r)),
          G(t, 16, 0.35, 0, 0),
          G(t, 5, 0.98 + 0.18 * o + i * 0.1, 0.1, -0.22 - 0.06 * o),
          G(t, 8, 0.98 + 0.18 * o - i * 0.1, -0.1, 0.22 + 0.06 * o),
          G(t, 6, 0.55 + 0.25 * o, 0, 0),
          G(t, 9, 0.55 + 0.25 * o, 0, 0),
          G(t, 7, -0.2, 0, 0.15),
          G(t, 10, -0.2, 0, -0.15));
      } else {
        this.stopW = pt(this.stopW, +(n.vehSpeed < 0.6), 5, e);
        let r = this.stopW,
          a = this.reachStep(e),
          o = this.tuckHint >= 0 ? this.tuckHint : 0.1;
        (G(t, 0, -0.1 * o - 0.25 * a, 0, i * 0.03),
          G(t, 1, -0.04 - 0.2 * o - 0.3 * a, 0, 0),
          G(t, 2, -0.04 - 0.1 * o - 0.2 * a, -i * 0.08, 0),
          G(t, 3, 0.2 * a, 0, 0),
          G(t, 11, U(1.2, 0.35, r), 0, U(-0.14, -0.4, r)),
          G(t, 14, 1.2, 0, 0.14),
          G(t, 12, U(-1.05, -0.12, r), 0, 0),
          G(t, 15, -1.05, 0, 0),
          G(t, 13, U(-0.1, -0.15, r), 0, U(0, 0.3, r)),
          G(t, 16, -0.1, 0, 0),
          G(t, 5, 1.02 + i * 0.12, 0, -0.26),
          G(t, 8, 1.02 - i * 0.12, 0, 0.26),
          G(t, 6, 0.5, 0, 0),
          G(t, 9, 0.5, 0, 0),
          G(t, 4, -0.02 + 0.3 * a, -i * 0.25, i * 0.08));
      }
    }
    reachStep(e) {
      return this.hasGrips
        ? ((this.reachLean = H(
            this.reachLean + H(this.reachErr, -0.2, 0.2) * 4 * e,
            0,
            0.9,
          )),
          this.reachLean)
        : 0;
    }
    fallen(e, t, n) {
      let r = this.inp;
      t.fill(0);
      let i = this.stateT,
        a = Ie(0, n ? 0.8 : 0.45, i),
        o = r.fallBack,
        s = o ? 1 : -1;
      (G(t, 0, s * 1.5 * a, 0, 0.1 * a),
        (t[100] = -(this.rig.hipHeight - 0.13) * a),
        (t[101] = s * 0.25 * a));
      let c = n ? 1 : 0.6;
      (G(t, 1, -s * 0.1 * a, 0.1, 0),
        G(t, 2, -s * 0.08 * a, -0.1, 0),
        G(t, 4, -s * 0.2 * a, 0.5 * c * a, 0),
        G(t, 5, U(0.3, o ? 0.4 : -0.2, a), 0, -U(0.2, 1.3, a)),
        G(t, 8, U(0.3, o ? 0.9 : 0.4, a), 0, U(0.2, 0.9, a)),
        G(t, 6, U(0.5, 0.3, a), 0, 0),
        G(t, 9, U(0.5, 1.3, a), 0, 0),
        G(t, 11, U(0.4, o ? 0.25 : -0.1, a), 0, -0.15 * a),
        G(t, 14, U(0.6, o ? 0.9 : 0.3, a), 0, 0.2 * a),
        G(t, 12, U(-0.5, -0.2, a), 0, 0),
        G(t, 15, U(-0.8, o ? -1.3 : -0.5, a), 0, 0),
        G(t, 13, 0.5 * a, 0, 0),
        G(t, 16, 0.3 * a, 0, 0),
        !n && i > 0.6 && Wn(t, 2, s * Math.sin(i * 5) * 0.03, 0, 0));
    }
    getUp(e, t) {
      let n = this.inp;
      t.fill(0);
      let r = H(this.stateT / 0.95, 0, 1),
        i = n.fallBack ? 1 : -1,
        a = Dr;
      (G(t, 0, K(r, a, this.k4(i * 1.5, i * 0.5, -0.2, 0)), 0, 0),
        (t[100] = K(
          r,
          a,
          this.k4(-(this.rig.hipHeight - 0.13), -0.55, -0.3, 0),
        )),
        (t[101] = K(r, a, this.k4(i * 0.25, 0.1, 0, 0))),
        G(t, 1, K(r, a, Ji), 0, 0),
        G(t, 2, K(r, a, Yi), 0, 0),
        G(t, 11, K(r, a, Xi), 0, -0.1),
        G(t, 14, K(r, a, Zi), 0, 0.1),
        G(t, 12, K(r, a, Qi), 0, 0),
        G(t, 15, K(r, a, $i), 0, 0),
        G(t, 13, K(r, a, ea), 0, 0),
        G(t, 16, K(r, a, ta), 0, 0),
        G(t, 5, K(r, a, na), 0, K(r, a, ra)),
        G(t, 8, K(r, a, ia), 0, K(r, a, aa)),
        G(t, 6, 0.4, 0, 0),
        G(t, 9, 0.4, 0, 0),
        G(t, 4, K(r, a, oa), 0, 0));
    }
    bustedPose(e, t) {
      t.fill(0);
      let n = this.stateT,
        r = Ie(0, 0.4, n),
        i = Ie(0.9, 1.9, n);
      (G(t, 5, 2.5 * r, 0, -0.95 * r),
        G(t, 8, 2.5 * r, 0, 0.95 * r),
        G(t, 6, 2.1 * r, 0, 0),
        G(t, 9, 2.1 * r, 0, 0),
        G(t, 4, 0.25 * r + 0.1 * i, 0, 0),
        (t[100] = -(this.rig.hipHeight - this.rig.shinLen - 0.08) * i),
        G(t, 11, 0.05 * i, 0, -0.08),
        G(t, 14, 0.25 * i, 0, 0.08),
        G(t, 12, -1.5 * i, 0, 0),
        G(t, 15, -1.55 * i, 0, 0),
        G(t, 13, 0.6 * i, 0, 0),
        G(t, 16, 0.6 * i, 0, 0),
        G(t, 1, -0.06 * i, 0, 0));
    }
  },
  ba = [
    `scooter`,
    `taxi`,
    `sedan`,
    `suv`,
    `van`,
    `truck`,
    `bus`,
    `police`,
    `motorcycle`,
    `superbike`,
  ],
  xa = (e) => JSON.parse(JSON.stringify(e));
