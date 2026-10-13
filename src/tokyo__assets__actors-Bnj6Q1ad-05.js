// tokyo__assets__actors-Bnj6Q1ad 05 — math
// Lines 824-2026 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var Ni = class e {
    rig;
    inp = jn();
    out = bn();
    prev = bn();
    loco = bn();
    upper = bn();
    act = bn();
    full = bn();
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
    constructor(e) {
      ((this.rig = e), (this.ik = new On(e)));
    }
    setRig(e) {
      ((this.rig = e), En(e, this.out));
    }
    pv = new R();
    pt = new R();
    pole = new R();
    static PRAY_L = new R(-0.045, 0.02, -0.22);
    static PRAY_R = new R(0.045, 0.02, -0.22);
    static Q_PRAY = new y().setFromEuler(new k(Math.PI - 0.3, 0, 0));
    pq = new y();
    by = new R();
    bz = new R();
    bm = new ke();
    rideStyle = `scooter`;
    gripL = new R();
    gripR = new R();
    hasGrips = !1;
    pegL = new R();
    pegR = new R();
    hasPegs = !1;
    tuckHint = -1;
    reachLean = 0;
    reachErr = 0;
    static POLE_L = new R(-0.8, -1, 0.25);
    static POLE_R = new R(0.8, -1, 0.25);
    kneePole = new R();
    qFoot = new y();
    eFoot = new k();
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
        typeof i == `number` && Number.isFinite(i) ? V(i, 0, 1) : -1),
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
        let r = 1 - (this.xfade > 0 ? V(this.xfade / this.xfadeDur, 0, 1) : 0);
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
                  -0.02 - V(this.spd * 0.06, 0, 0.3),
                )
                .sub(this.pt),
              i.aimAxisZ(27, this.pv, 1));
      }
      if (this.action === `pray`) {
        let t = W(this.actionT / xi.pray.dur, Si, Ci);
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
            c = V(z(n.aimYaw), -1.2, 1.2),
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
        (i.pointOn(t, r === `smg` ? ji.smg : ji.pistol, this.pt),
          this.pole.set(-0.6, -1, 0.25),
          i.arm(5, 6, 7, this.pt, this.pole, o * (1 - a)));
      } else if (r === `bat`) {
        let e = this.action,
          t = Mi(e, e ? this.actionT / xi[e].dur : 0, this.aimW, this.pv);
        (i.aimAxisZ(18, this.pv, 1),
          t > 0.01 &&
            (i.pointOn(18, ji.bat, this.pt),
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
        xi[this.action].mask !== xi[e].mask &&
        this.snapshot(0.08),
        (this.action = e),
        (this.actionT = 0),
        (this.actionSpeed = t),
        (this.hitFired = !1));
    }
    actionDuration(e) {
      return xi[e].dur;
    }
    get actionHitFired() {
      return this.hitFired;
    }
    get actionProgress() {
      return this.action ? this.actionT / xi[this.action].dur : -1;
    }
    landImpact(e) {
      ((this.land = 1), (this.landStr = V(e, 0.2, 1.2)));
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
        let t = xi[this.action];
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
          Tn(n, this.act, V(e, 0, 1), t.mask);
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
        U(
          n,
          17,
          this.hairAng +
            Math.sin(this.phase * kn * 2) * 0.08 * V(this.spd / 4, 0, 1),
          0,
          V(-t.turnRate * 0.05, -0.3, 0.3) +
            Math.sin(this.phase * kn) * 0.06 * V(this.spd / 4, 0, 1),
        ),
        this.fingers(e, n),
        this.shoulders(n),
        this.jawPose(e, n),
        this.xfade > 0)
      ) {
        this.xfade -= e;
        let t = V(this.xfade / this.xfadeDur, 0, 1),
          r = t * t * (3 - 2 * t);
        for (let e = 0; e < n.length; e++) n[e] += (this.prev[e] - n[e]) * r;
      }
      (En(this.rig, n), this.post(), this.eyelids(e));
    }
    blinkT = 2.5;
    blinkPhase = -1;
    lid = 0;
    squint = 0;
    eyelids(e) {
      let t = 0,
        n = this.state;
      (n === `dead`
        ? (t = Ue(0.3, 1.1, this.stateT))
        : n === `knockdown` || this.action === `hit`
          ? (t = 0.55)
          : this.action === `pray`
            ? (t = 0.8 * Ue(0.1, 0.25, this.actionT / 3.6))
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
      this.lid = n === `dead` || r > 0 ? i : Re(this.lid, i, 14, e);
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
          m = Ue(0.85, 2.7, f) * 0.23,
          h = V(p, 0, 1) * Ue(0.4, 1.3, f) * 0.14,
          g = t === 0 ? -1 : 1;
        U(e, t === 0 ? 30 : 31, 0, g * h, g * m);
      }
    }
    jawOpen = 0;
    jawPose(e, t) {
      let n = this.state,
        r = 0;
      (n === `dead`
        ? (r = 0.14 * Ue(0.2, 1, this.stateT))
        : n === `knockdown`
          ? (r = 0.1)
          : n === `swim`
            ? (r = 0.05 + 0.05 * Math.max(0, Math.sin(this.time * 3)))
            : (n === `foot` || n === `climb`) &&
              ((r =
                Ue(5, 7, this.spd) * (0.05 + 0.04 * Math.sin(this.time * 7)) +
                (this.action === `hit` ? 0.12 : 0) +
                (this.action === `cheer` ? 0.2 : 0)),
              (this.action === `kick` ||
                this.action === `uppercut` ||
                this.action === `batFore` ||
                this.action === `batBack`) &&
                (r = Math.max(r, 0.06))),
        (this.jawOpen = Re(this.jawOpen, r, 12, e)),
        U(t, 32, -this.jawOpen, 0, 0));
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
        (this.propW = Re(
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
          o(4, -0.38, 0.12, 0, i * (1 - V(this.spd / 3, 0, 0.7))),
          o(3, -0.18, 0.05, 0, i * (1 - V(this.spd / 3, 0, 0.7))));
      else if (a === `tea`) {
        this.sipT += e;
        let t = this.sipT % 4.6,
          n = t > 3.2 ? Math.sin(((t - 3.2) / 1.4) * Math.PI) : 0;
        this.sipW = n * (1 - V(this.spd / 2.5, 0, 1));
        let r = this.sipW;
        (o(5, B(0.22, 0.62, r), B(-0.35, -0.7, r), B(0.12, 0.3, r)),
          o(6, B(1.35, 2.25, r), 0, 0),
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
        r = i = 0.42 + V((this.spd - 2) / 2, 0, 1) * 0.8;
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
            ? ((i = 1.5), (r = B(r, 1.2, this.aimW)))
            : e === `smg`
              ? ((i = 1.5), (r = B(r, 1.35, this.aimW)))
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
      let o = Je(18, e);
      ((this.curlL += (r - this.curlL) * o),
        (this.curlR += (i - this.curlR) * o),
        U(t, 22, 0, 0, this.curlL),
        U(t, 23, 0, 0, -this.curlR));
    }
    footTargets = new Float32Array(6);
    footPitch = [0, 0];
    locomotion(e) {
      let t = this.inp,
        n = this.loco;
      n.fill(0);
      let r = (this.spd = Re(this.spd, t.speed, 12, e)),
        i = V(r / 0.4, 0, 1),
        a = Ue(2, 4, r),
        o = Ue(4.8, 6.8, r),
        s = 1 - a;
      this.airW = Re(this.airW, +!t.grounded, t.grounded ? 20 : 10, e);
      let c =
        !!this.action &&
        this.action !== `hit` &&
        this.action !== `draw` &&
        this.action !== `reload` &&
        !Oi.has(this.action);
      this.fightW = Re(
        this.fightW,
        t.weapon === `fists` && (t.aim > 0.5 || c) ? 1 : 0,
        8,
        e,
      );
      let l = this.fightW * (1 - a),
        u = this.airW,
        d = 1.05 + r * 0.36,
        f = (1 - i) * V(Math.abs(t.turnRate) / 2.5, 0, 1) * (1 - u);
      (this.phase,
        (this.phase =
          (this.phase + (r / d) * e * (1 - u * 0.8) + f * 1.7 * e) % 1));
      let p = B(0.6, 0.34, a) - 0.04 * o,
        m = p * d * i,
        h = (B(0.075, 0.26, a) + 0.1 * o) * Math.max(i, f * 0.7),
        g = B(0.5, 0.28, a),
        _ = 1 - g,
        v = this.rig,
        y = t.dirX,
        b = t.dirZ;
      i < 0.05 && ((y = 0), (b = -1));
      let x = -b,
        S = (this.phase - p * 0.5) * kn * 2,
        C = i * B(0.02, 0.045, a) * (s * Math.cos(S) - a * Math.cos(S));
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
      ((n[99] = Math.sin(this.phase * kn) * 0.018 * i * s + O * 0.022 * D),
        (this.toeOut = 0.16 * D + 0.05),
        (this.bank = Re(
          this.bank,
          V(-t.turnRate * r * 0.03, -0.3, 0.3),
          8,
          e,
        )));
      let k = Math.sin(this.phase * kn) * (0.07 + 0.08 * a) * i * x;
      U(
        n,
        0,
        0,
        k + O * 0.04 * D * (1 - l) - 0.32 * l,
        this.bank + Math.cos(this.phase * kn) * 0.035 * i * s - O * 0.045 * D,
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
          ((c = B(m * g, -m * _, e)),
            (d = 0),
            (f =
              B(0.25 * s, -0.1, e) * i * (e < 0.15 ? 1 - e / 0.15 : 0) +
              (e > 0.7 ? -(e - 0.7) * (1.4 + a) * i : 0)));
        } else {
          let e = (o - p) / (1 - p),
            t = B(e * e * (3 - 2 * e), e ** 1.7 * (3 - 2 * e ** 0.85), a);
          ((c = B(-m * _, m * g, V(t, 0, 1))),
            (d = h * Math.sin(Math.PI * e ** +B(0.8, 0.55, a))),
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
          let r = V((t.airTime - 0.5) * 2, 0, 1) * +(t.vy < -3),
            i = Math.sin(this.time * 9 + e * 2.4) * 0.12 * r,
            a = n * j * 1.1,
            o = (e === 0 ? 0.32 : 0.16) * (1 - r * 0.6) + 0.05 + i,
            s = (e === 0 ? -0.12 : 0.2) * (1 - r) + i * 0.5;
          ((v = B(v, a, u)),
            (d = B(d, o, u)),
            (x = B(x, s, u)),
            (f = B(f, e === 0 ? 0.1 : -0.5, u)));
        }
        l > 0.01 && ((v += n * 0.04 * l), (x += (e === 0 ? -0.16 : 0.16) * l));
        let S = e * 3;
        ((this.footTargets[S] = v),
          (this.footTargets[S + 1] = d),
          (this.footTargets[S + 2] = x),
          (this.footPitch[e] = f));
      }
      (this.writeLocoLegs(n),
        (this.lean = Re(this.lean, V(t.accel * 0.018, -0.12, 0.2), 6, e)));
      let M =
          (0.04 * s * i + 0.2 * a + 0.14 * o) * x + this.lean * i + u * 0.08,
        N = -k * 1.6 + 0.2 * l;
      (U(n, 1, -M * 0.55 - 0.1 * this.landStr * w, N * 0.4, -this.bank * 0.3),
        U(
          n,
          2,
          -M * 0.45 +
            Math.sin(this.time * 2.1) * 0.015 * (1 - i) -
            0.1 * this.landStr * w,
          N * 0.6,
          0,
        ));
      let P = Math.abs(t.lookYaw) < 1.9 ? V(t.lookYaw, -1, 1) : 0;
      ((this.headYaw = Re(this.headYaw, -P * 0.6 * (1 - a * 0.6), 5, e)),
        (this.headPitch = Re(
          this.headPitch,
          V(-t.lookPitch * 0.35, -0.3, 0.35),
          5,
          e,
        )),
        U(
          n,
          3,
          M * 0.35 + this.headPitch * 0.4,
          this.headYaw * 0.4 - N * 0.5,
          0,
        ),
        U(
          n,
          4,
          M * 0.35 + this.headPitch * 0.6 + 0.05 * this.landStr * w,
          this.headYaw * 0.6 - N * 0.3,
          -this.bank * 0.4,
        ));
      let F = (0.32 * s + 0.8 * a + 0.3 * o) * i * x,
        ee = Math.cos(this.phase * kn),
        te = i * (0.22 * s + 1.35 * a + 0.2 * o) + 0.1 * (1 - i),
        ne = u * V((t.airTime - 0.5) * 2, 0, 1),
        re = Math.sin(this.time * 7) * 0.5 * ne,
        ie = 0.035 + 0.035 * i + Math.sin(this.time * 2.1) * 0.006,
        ae = D * (1 - l),
        oe = 0.05 * ae,
        se = (0.12 + O * 0.06) * ae,
        ce = (0.12 - O * 0.06) * ae;
      (U(
        n,
        5,
        -F * ee + u * 0.4 + re + 0.1 * this.landStr * w + oe,
        0.05 * ae,
        -(ie - 0.03 * a) - u * 0.5 - ne * 0.7,
      ),
        U(
          n,
          8,
          F * ee + u * 0.2 - re + 0.1 * this.landStr * w + oe,
          -0.05 * ae,
          ie - 0.03 * a + u * 0.5 + ne * 0.7,
        ),
        U(n, 6, te + Math.max(0, -ee) * 0.35 * i + u * 0.6 + se, 0, 0),
        U(n, 9, te + Math.max(0, ee) * 0.35 * i + u * 0.6 + ce, 0, 0),
        U(n, 7, -0.1 - 0.1 * a, -0.12 * (1 - a), -0.1 * a),
        U(n, 10, -0.1 - 0.1 * a, 0.12 * (1 - a), 0.1 * a));
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
        (Dn(
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
      ((this.aimW = Re(this.aimW, n.aim, n.aim > this.aimW ? 16 : 8, e)),
        (this.recoil = Math.max(0, this.recoil - e * 9)));
      let i = this.upper;
      i.set(t);
      let a = this.aimW,
        o = V(n.aimPitch, -1.1, 1.2),
        s = V(z(n.aimYaw), -1.2, 1.2),
        c = this.recoil,
        l = Math.sin(this.time * 2.1) * 0.012;
      if (r === `pistol` || r === `smg`) {
        let e = r === `smg`;
        a > 0.01 &&
          (xn(i, 1, o * 0.18 * a, -s * 0.35 * a, 0),
          xn(i, 2, o * 0.22 * a + c * 0.06, -s * 0.45 * a, 0),
          (i[12] = B(i[12], -o * 0.3 - (e ? 0.1 : 0), a)),
          (i[13] = B(i[13], -s * 0.2 + (e ? 0.06 : 0.05), a)),
          e && (i[14] = B(i[14], -0.14, a)));
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
            ((i[24] = B(i[24], 0.35, e)),
            (i[26] = B(i[26], 0.05, e)),
            (i[27] = B(i[27], 1.2, e)),
            (i[15] = B(i[15], 0.6, e * 0.9)),
            (i[17] = B(i[17], 0.45, e * 0.9)),
            (i[18] = B(i[18], 1.3, e * 0.9))),
            U(i, 20, B(-0.5, 0, a), 0, 0));
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
            ((i[24] = B(i[24], i[24] * 0.3 + 0.15, e * 0.8)),
            (i[27] = B(i[27], 0.45, e * 0.8))),
            U(i, 19, 0, 0, 0),
            U(i, 10, B(-0.1, -0.05, a), 0, 0));
        }
        Tn(t, i, 1, Sn);
      } else if (r === `bat`)
        (this.armsTo(
          i,
          1,
          B(0.9, 1.2, a),
          B(0.35, 0.9, a),
          B(2.1, 1.7, a),
          B(i[15], 1.1, a),
          B(i[17], 0.9, a),
          B(i[18], 1.8, a),
        ),
          a > 0.01 && xn(i, 2, 0, -0.5 * a, 0),
          Tn(t, i, 1, Sn));
      else {
        let e =
            !!this.action &&
            this.action !== `hit` &&
            this.action !== `draw` &&
            !Oi.has(this.action),
          n = Math.max(a, +!!e);
        n > 0.01 &&
          (this.armsTo(
            i,
            n,
            Mn.armX + l,
            -Mn.armZ,
            Mn.elbow,
            Mn.armX + 0.12 - l,
            Mn.armZ,
            Mn.elbow + 0.1,
          ),
          xn(i, 2, -0.06 * n, 0.1 * n, 0),
          xn(i, 4, 0.08 * n, -0.08 * n, 0),
          Tn(t, i, 1, Sn));
      }
    }
    sc4 = [0, 0, 0, 0];
    k4(e, t, n, r) {
      let i = this.sc4;
      return ((i[0] = e), (i[1] = t), (i[2] = n), (i[3] = r), i);
    }
    armsTo(e, t, n, r, i, a, o, s) {
      ((e[24] = B(e[24], n, t)),
        (e[25] = B(e[25], 0, t)),
        (e[26] = B(e[26], r, t)),
        (e[27] = B(e[27], i, t)),
        (e[15] = B(e[15], a, t)),
        (e[16] = B(e[16], 0, t)),
        (e[17] = B(e[17], o, t)),
        (e[18] = B(e[18], s, t)));
    }
    swim(e, t) {
      let n = this.inp;
      t.fill(0);
      let r = (this.spd = Re(this.spd, n.speed, 4, e)),
        i = Ue(0.4, 1.2, r);
      this.phase = (this.phase + e * (0.35 + r * 0.45)) % 1;
      let a = this.time,
        o = this.phase * kn;
      (U(t, 0, -1.4 * i + 0.12 * (1 - i), 0, 0),
        (t[100] = 0),
        U(t, 1, 0.04 * i - 0.05 * (1 - i), Math.cos(o) * 0.18 * i, 0),
        U(t, 2, 0.05, Math.cos(o) * 0.3 * i, 0),
        U(t, 3, 0.35 * i, 0, 0),
        U(t, 4, 0.6 * i + 0.05, Math.max(0, Math.cos(o)) * 0.9 * i, 0));
      let s = 1 - i,
        c = Math.sin(a * 3.2),
        l = Math.PI - o,
        u = -o,
        d = Math.sin(l),
        f = Math.sin(u),
        p = Math.max(0, -d),
        m = Math.max(0, -f);
      (U(
        t,
        5,
        B(0.42 + c * 0.1, l, i),
        B(-c * 0.35, 0, i),
        B(-0.72 - c * 0.1, -0.2 - p * 0.85, i),
      ),
        U(
          t,
          8,
          B(0.42 - c * 0.1, u, i),
          B(-c * 0.35, 0, i),
          B(0.72 + c * 0.1, 0.2 + m * 0.85, i),
        ),
        U(t, 6, B(0.55, 0.25 + Math.max(0, d) * 0.55 + p * 1.55, i), 0, 0),
        U(t, 9, B(0.55, 0.25 + Math.max(0, f) * 0.55 + m * 1.55, i), 0, 0),
        U(t, 7, B(0, -0.2, i), B(c * 0.5, 0, i), 0),
        U(t, 10, B(0, -0.2, i), B(-c * 0.5, 0, i), 0));
      let h = Math.sin(a * 2.4),
        g = Math.sin(a * 11);
      (U(t, 11, B(0.45 + h * 0.3, 0.06 + g * 0.22, i), 0, -0.08 * s),
        U(t, 14, B(0.45 - h * 0.3, 0.06 - g * 0.22, i), 0, 0.08 * s),
        U(t, 12, B(-0.9 - h * 0.3, -0.12 - Math.max(0, g) * 0.18, i), 0, 0),
        U(t, 15, B(-0.9 + h * 0.3, -0.12 - Math.max(0, -g) * 0.18, i), 0, 0),
        U(t, 13, B(-0.4, -1.35, i), 0, 0),
        U(t, 16, B(-0.4, -1.35, i), 0, 0));
    }
    seated(e, t) {
      let n = this.inp;
      t.fill(0);
      let r = V(n.steer, -1, 1);
      this.bank = Re(this.bank, r, 6, e);
      let i = this.bank;
      if (this.state === `drive`)
        (U(t, 0, 0, 0, 0),
          U(t, 1, 0.2, 0, 0),
          U(t, 2, 0.04, 0, 0),
          U(t, 11, 1.4, 0, -0.12),
          U(t, 14, 1.4, 0, 0.12),
          U(t, 12, -1.2, 0, 0),
          U(t, 15, -1.15, 0, 0),
          U(t, 13, 0.1, 0, 0),
          U(t, 16, 0.05, 0, 0),
          U(t, 5, 0.72 + i * 0.22, 0, 0.3 - i * 0.12),
          U(t, 8, 0.72 - i * 0.22, 0, -0.3 - i * 0.12),
          U(t, 6, 0.95 - i * 0.2, 0, 0),
          U(t, 9, 0.95 + i * 0.2, 0, 0),
          U(t, 4, -0.05, -i * 0.3, 0),
          U(t, 3, 0, -i * 0.1, 0));
      else if (this.rideStyle !== `scooter`) {
        this.stopW = Re(this.stopW, +(n.vehSpeed < 0.6), 5, e);
        let r = this.stopW,
          a = V(n.vehSpeed / 30, 0, 1),
          o =
            (this.tuckHint >= 0
              ? this.tuckHint
              : this.rideStyle === `sport`
                ? 0.85
                : 0.2) *
            (1 - 0.55 * r) *
            (0.85 + 0.15 * a),
          s = this.reachStep(e);
        (U(t, 0, -0.1 - 0.3 * o - 0.3 * s, 0, i * 0.04),
          U(t, 1, -0.12 - 0.3 * o - 0.3 * s, 0, 0),
          U(t, 2, -0.06 - 0.2 * o - 0.25 * s, -i * 0.08, -i * 0.04),
          U(t, 3, 0.16 + 0.35 * o + 0.28 * s, 0, 0),
          U(t, 4, 0.12 + 0.32 * o + 0.3 * s, -i * 0.22, i * 0.08),
          U(t, 11, B(1.25 + 0.2 * o, 0.5, r), 0, B(-0.07, -0.35, r)),
          U(t, 14, 1.25 + 0.2 * o, 0, 0.07),
          U(t, 12, B(-1.75 - 0.35 * o, -0.35, r), 0, 0),
          U(t, 15, -1.75 - 0.35 * o, 0, 0),
          U(t, 13, B(0.35, 0.05, r), 0, B(0, 0.25, r)),
          U(t, 16, 0.35, 0, 0),
          U(t, 5, 0.98 + 0.18 * o + i * 0.1, 0.1, -0.22 - 0.06 * o),
          U(t, 8, 0.98 + 0.18 * o - i * 0.1, -0.1, 0.22 + 0.06 * o),
          U(t, 6, 0.55 + 0.25 * o, 0, 0),
          U(t, 9, 0.55 + 0.25 * o, 0, 0),
          U(t, 7, -0.2, 0, 0.15),
          U(t, 10, -0.2, 0, -0.15));
      } else {
        this.stopW = Re(this.stopW, +(n.vehSpeed < 0.6), 5, e);
        let r = this.stopW,
          a = this.reachStep(e),
          o = this.tuckHint >= 0 ? this.tuckHint : 0.1;
        (U(t, 0, -0.1 * o - 0.25 * a, 0, i * 0.03),
          U(t, 1, -0.04 - 0.2 * o - 0.3 * a, 0, 0),
          U(t, 2, -0.04 - 0.1 * o - 0.2 * a, -i * 0.08, 0),
          U(t, 3, 0.2 * a, 0, 0),
          U(t, 11, B(1.2, 0.35, r), 0, B(-0.14, -0.4, r)),
          U(t, 14, 1.2, 0, 0.14),
          U(t, 12, B(-1.05, -0.12, r), 0, 0),
          U(t, 15, -1.05, 0, 0),
          U(t, 13, B(-0.1, -0.15, r), 0, B(0, 0.3, r)),
          U(t, 16, -0.1, 0, 0),
          U(t, 5, 1.02 + i * 0.12, 0, -0.26),
          U(t, 8, 1.02 - i * 0.12, 0, 0.26),
          U(t, 6, 0.5, 0, 0),
          U(t, 9, 0.5, 0, 0),
          U(t, 4, -0.02 + 0.3 * a, -i * 0.25, i * 0.08));
      }
    }
    reachStep(e) {
      return this.hasGrips
        ? ((this.reachLean = V(
            this.reachLean + V(this.reachErr, -0.2, 0.2) * 4 * e,
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
        a = Ue(0, n ? 0.8 : 0.45, i),
        o = r.fallBack,
        s = o ? 1 : -1;
      (U(t, 0, s * 1.5 * a, 0, 0.1 * a),
        (t[100] = -(this.rig.hipHeight - 0.13) * a),
        (t[101] = s * 0.25 * a));
      let c = n ? 1 : 0.6;
      (U(t, 1, -s * 0.1 * a, 0.1, 0),
        U(t, 2, -s * 0.08 * a, -0.1, 0),
        U(t, 4, -s * 0.2 * a, 0.5 * c * a, 0),
        U(t, 5, B(0.3, o ? 0.4 : -0.2, a), 0, -B(0.2, 1.3, a)),
        U(t, 8, B(0.3, o ? 0.9 : 0.4, a), 0, B(0.2, 0.9, a)),
        U(t, 6, B(0.5, 0.3, a), 0, 0),
        U(t, 9, B(0.5, 1.3, a), 0, 0),
        U(t, 11, B(0.4, o ? 0.25 : -0.1, a), 0, -0.15 * a),
        U(t, 14, B(0.6, o ? 0.9 : 0.3, a), 0, 0.2 * a),
        U(t, 12, B(-0.5, -0.2, a), 0, 0),
        U(t, 15, B(-0.8, o ? -1.3 : -0.5, a), 0, 0),
        U(t, 13, 0.5 * a, 0, 0),
        U(t, 16, 0.3 * a, 0, 0),
        !n && i > 0.6 && xn(t, 2, s * Math.sin(i * 5) * 0.03, 0, 0));
    }
    getUp(e, t) {
      let n = this.inp;
      t.fill(0);
      let r = V(this.stateT / 0.95, 0, 1),
        i = n.fallBack ? 1 : -1,
        a = Vn;
      (U(t, 0, W(r, a, this.k4(i * 1.5, i * 0.5, -0.2, 0)), 0, 0),
        (t[100] = W(
          r,
          a,
          this.k4(-(this.rig.hipHeight - 0.13), -0.55, -0.3, 0),
        )),
        (t[101] = W(r, a, this.k4(i * 0.25, 0.1, 0, 0))),
        U(t, 1, W(r, a, ci), 0, 0),
        U(t, 2, W(r, a, li), 0, 0),
        U(t, 11, W(r, a, ui), 0, -0.1),
        U(t, 14, W(r, a, di), 0, 0.1),
        U(t, 12, W(r, a, fi), 0, 0),
        U(t, 15, W(r, a, pi), 0, 0),
        U(t, 13, W(r, a, mi), 0, 0),
        U(t, 16, W(r, a, hi), 0, 0),
        U(t, 5, W(r, a, gi), 0, W(r, a, _i)),
        U(t, 8, W(r, a, vi), 0, W(r, a, yi)),
        U(t, 6, 0.4, 0, 0),
        U(t, 9, 0.4, 0, 0),
        U(t, 4, W(r, a, bi), 0, 0));
    }
    bustedPose(e, t) {
      t.fill(0);
      let n = this.stateT,
        r = Ue(0, 0.4, n),
        i = Ue(0.9, 1.9, n);
      (U(t, 5, 2.5 * r, 0, -0.95 * r),
        U(t, 8, 2.5 * r, 0, 0.95 * r),
        U(t, 6, 2.1 * r, 0, 0),
        U(t, 9, 2.1 * r, 0, 0),
        U(t, 4, 0.25 * r + 0.1 * i, 0, 0),
        (t[100] = -(this.rig.hipHeight - this.rig.shinLen - 0.08) * i),
        U(t, 11, 0.05 * i, 0, -0.08),
        U(t, 14, 0.25 * i, 0, 0.08),
        U(t, 12, -1.5 * i, 0, 0),
        U(t, 15, -1.55 * i, 0, 0),
        U(t, 13, 0.6 * i, 0, 0),
        U(t, 16, 0.6 * i, 0, 0),
        U(t, 1, -0.06 * i, 0, 0));
    }
  },
  Pi = class {
    closed;
    xs;
    zs;
    cum;
    length;
    n;
    constructor(e, t = !1) {
      this.closed = t;
      let n = t && e.length > 2 ? [...e, e[0]] : e;
      ((this.n = n.length),
        (this.xs = new Float64Array(this.n)),
        (this.zs = new Float64Array(this.n)),
        (this.cum = new Float64Array(this.n)));
      let r = 0;
      for (let e = 0; e < this.n; e++)
        ((this.xs[e] = n[e].x),
          (this.zs[e] = n[e].z),
          e > 0 &&
            (r += Math.hypot(
              this.xs[e] - this.xs[e - 1],
              this.zs[e] - this.zs[e - 1],
            )),
          (this.cum[e] = r));
      this.length = Math.max(r, 0.001);
    }
    wrap(e) {
      return this.closed
        ? ((e %= this.length), e < 0 && (e += this.length), e)
        : e < 0
          ? 0
          : e > this.length
            ? this.length
            : e;
    }
    segAt(e) {
      e = this.wrap(e);
      let t = 0,
        n = this.n - 2;
      for (; t < n;) {
        let r = (t + n + 1) >> 1;
        this.cum[r] <= e ? (t = r) : (n = r - 1);
      }
      return Math.max(0, t);
    }
    pointAt(e, t) {
      e = this.wrap(e);
      let n = this.segAt(e),
        r = this.cum[n + 1] - this.cum[n] || 1e-6,
        i = (e - this.cum[n]) / r;
      return (
        (t.x = this.xs[n] + (this.xs[n + 1] - this.xs[n]) * i),
        (t.z = this.zs[n] + (this.zs[n + 1] - this.zs[n]) * i),
        t
      );
    }
    dirAt(e, t) {
      let n = this.segAt(e),
        r = this.xs[n + 1] - this.xs[n],
        i = this.zs[n + 1] - this.zs[n],
        a = Math.hypot(r, i) || 1;
      return ((t.x = r / a), (t.z = i / a), t);
    }
    project(e, t, n, r = -1, i = 6) {
      let a = 0,
        o = this.n - 2;
      r >= 0 && ((a = r - i), (o = r + i));
      let s = 1 / 0,
        c = 0,
        l = 0,
        u = this.n - 1;
      for (let n = a; n <= o; n++) {
        let r = n;
        if (this.closed) r = ((n % u) + u) % u;
        else if (r < 0 || r > u - 1) continue;
        let i = this.xs[r],
          a = this.zs[r],
          o = this.xs[r + 1] - i,
          d = this.zs[r + 1] - a,
          f = o * o + d * d || 1e-9,
          p = ((e - i) * o + (t - a) * d) / f;
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        let m = i + o * p,
          h = a + d * p,
          g = (m - e) * (m - e) + (h - t) * (h - t);
        g < s && ((s = g), (l = r), (c = this.cum[r] + Math.sqrt(f) * p));
      }
      return ((n.s = c), (n.seg = l), (n.dist = Math.sqrt(s)), n);
    }
  };
