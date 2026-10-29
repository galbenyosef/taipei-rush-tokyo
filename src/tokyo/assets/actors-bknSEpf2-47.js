// tokyo/assets/actors-bknSEpf2 47 — math
// Lines 16347-17064 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var cp = [2.7, 4.1, 6],
  lp = 0.26,
  up = [
    [0, 0],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ],
  dp = (e) => e.kind === `vehicle`,
  fp = [0.35, -0.35, 0.7, -0.7],
  pp = [0.78, 1, 1.4],
  mp = 0.12,
  hp = 0.24,
  gp = 0.08,
  _p = 0.16,
  vp = 6,
  yp = {
    car: { dist: 6.4, h: 1.45, pitch: 0.17, fov: 62 },
    scooter: { dist: 4.3, h: 1.35, pitch: 0.2, fov: 62 },
    bus: { dist: 13.5, h: 3.2, pitch: 0.2, fov: 60 },
  },
  bp = { dist: 3.5, h: 0.95, pitch: 0.1, fov: 66, fovSpeed: 0.55, fovMax: 18 },
  xp = 3.5,
  Sp = 2,
  Cp = 1.9,
  wp = class {
    name = `camera`;
    ctx;
    host = null;
    target = null;
    profile = `foot`;
    _yaw = Math.PI / 2;
    _pitch = 0.22;
    distIdx = 1;
    pivot = new V();
    tp = new V();
    lastTp = new V();
    vel = new V();
    goal = new V();
    goalOk = !1;
    fwd = new V();
    dir = new V();
    right = new V();
    shoulderPt = new V();
    desired = new V();
    look = new V();
    tmp = new V();
    hit = it();
    camUp = new V();
    rayO = new V();
    los = new V();
    bodies = [];
    side = 1;
    sideK = 1;
    collDist = 4;
    curDist = 4;
    fov = 60;
    trauma = 0;
    sinceLook = 10;
    driveSinceLook = 10;
    chaseYaw = 0;
    userYaw = 0;
    userPitch = 0;
    hasTarget = !1;
    cineT = 0;
    time = 0;
    aimT = 0;
    shoulder = 0.3;
    roll = 0;
    fp = !1;
    fpOn = !1;
    near0 = NaN;
    overrideOn = !1;
    overridePos = new V();
    overrideLook = new V();
    blendT = 0;
    blendFromPos = new V();
    blendFromQuat = new v();
    fixed = null;
    eyeDist = 4;
    nudgeYaw = 0;
    nudgePitch = 0;
    constructor(e) {
      this.ctx = e;
      let t = e.params.get(`cam`)?.split(`,`).map(Number);
      t &&
        t.length === 6 &&
        t.every((e) => Number.isFinite(e)) &&
        (this.fixed = t);
    }
    get yaw() {
      return this.profile === `car` ||
        this.profile === `scooter` ||
        this.profile === `bus`
        ? bt(this.chaseYaw + this.userYaw)
        : this._yaw;
    }
    get pitch() {
      return this._pitch;
    }
    get firstPerson() {
      return this.fpOn;
    }
    cineLock = !1;
    follow(e, t) {
      if (this.cineLock && t !== `cinematic`) return;
      let n = this.isVeh(),
        r = this.yaw;
      ((this.target = e), (this.profile = t));
      let i = this.isVeh();
      (i && !n
        ? ((this.chaseYaw = r), (this.userYaw = 0), (this.userPitch = 0))
        : !i && n && ((this._yaw = r), (this._pitch = 0.22)),
        t === `cinematic` && (this.cineT = 0),
        e.getWorldPosition(this.lastTp));
    }
    isVeh() {
      return (
        this.profile === `car` ||
        this.profile === `scooter` ||
        this.profile === `bus`
      );
    }
    shake(e) {
      this.trauma = Math.min(1, this.trauma + Math.max(0, e));
    }
    override(e, t) {
      if (e)
        ((this.overrideOn = !0),
          this.overridePos.copy(e),
          t && this.overrideLook.copy(t),
          (this.blendT = 0));
      else if (this.overrideOn) {
        this.overrideOn = !1;
        let e = this.ctx.camera;
        (this.blendFromPos.copy(e.position),
          this.blendFromQuat.copy(e.quaternion),
          (this.blendT = 1),
          (this.snapNext = !0));
      }
    }
    getAimRay(e, t) {
      let n = this.ctx.camera;
      (e.copy(n.position),
        t
          .set(
            Math.sin(this.aimYawRaw) * Math.cos(this.aimPitchRaw),
            -Math.sin(this.aimPitchRaw),
            -Math.cos(this.aimYawRaw) * Math.cos(this.aimPitchRaw),
          )
          .normalize());
    }
    aimYawRaw = 0;
    aimPitchRaw = 0;
    nudge(e, t) {
      ((this.nudgeYaw += e), (this.nudgePitch += t));
    }
    snapNext = !0;
    setYaw(e, t = 0.22) {
      ((this._yaw = e),
        (this._pitch = t),
        (this.chaseYaw = e),
        (this.userYaw = 0));
    }
    snapBehind(e) {
      let t =
        e !== void 0 && Number.isFinite(e)
          ? e
          : (this.host?.heading ?? this._yaw);
      (this.setYaw(t, 0.22), (this.snapNext = !0));
    }
    castO = new V();
    cast(e, t, n, r) {
      let i = this.ctx.statics,
        a = 0;
      this.castO.copy(e);
      for (let e = 0; e < 3; e++) {
        if (!i.raycast(this.castO, t, n - a, r)) return !1;
        let e = r.tag,
          o =
            e === `wall` &&
            r.point.y <
              this.ctx.plan.waterLevelAt(r.point.x, r.point.z) + 4.2 &&
            this.ctx.plan.surfaceAt(r.point.x, r.point.z) === `water`;
        if (
          e !== `world-edge` &&
          !(e.length > 8 && e.startsWith(`invisible`)) &&
          !o
        )
          return ((r.distance += a), !0);
        if (((a += r.distance + 0.02), a >= n)) return !1;
        this.castO.copy(r.point).addScaledVector(t, 0.02);
      }
      return !1;
    }
    vehicleOcclusion(e, t, n, r) {
      let i = this.ctx;
      if (n <= 0.2) return n;
      let a = e.x + t.x * n * 0.5,
        o = e.z + t.z * n * 0.5,
        s = i.dynamics.query(a, o, n * 0.5 + 0.5, this.bodies, dp);
      if (!s) return n;
      let c = null;
      try {
        c = i.vehicles.playerVehicle?.body ?? null;
      } catch {}
      let l = n;
      for (let n = 0; n < s; n++) {
        let i = this.bodies[n];
        if (i === c) continue;
        let a = Math.cos(i.heading),
          o = Math.sin(i.heading),
          s = e.x - i.x,
          u = e.z - i.z,
          d = s * a + u * o,
          f = -s * o + u * a,
          p = t.x * a + t.z * o,
          m = -t.x * o + t.z * a,
          h = 0,
          g = l + r;
        if (Math.abs(p) < 1e-9) {
          if (d < -i.halfW || d > i.halfW) continue;
        } else {
          let e = (-i.halfW - d) / p,
            t = (i.halfW - d) / p;
          if (e > t) {
            let n = e;
            ((e = t), (t = n));
          }
          ((h = Math.max(h, e)), (g = Math.min(g, t)));
        }
        if (Math.abs(m) < 1e-9) {
          if (f < -i.halfL || f > i.halfL) continue;
        } else {
          let e = (-i.halfL - f) / m,
            t = (i.halfL - f) / m;
          if (e > t) {
            let n = e;
            ((e = t), (t = n));
          }
          ((h = Math.max(h, e)), (g = Math.min(g, t)));
        }
        let _ = i.y,
          v = i.y + i.height;
        if (Math.abs(t.y) < 1e-9) {
          if (e.y < _ || e.y > v) continue;
        } else {
          let n = (_ - e.y) / t.y,
            r = (v - e.y) / t.y;
          if (n > r) {
            let e = n;
            ((n = r), (r = e));
          }
          ((h = Math.max(h, n)), (g = Math.min(g, r)));
        }
        h > g || h <= 0.05 || (l = Math.min(l, h - r));
      }
      return l;
    }
    lateUpdate(e) {
      let t = this.ctx,
        n = t.camera;
      this.time += e;
      let r = this.goalOk;
      if (
        ((this.goalOk = !1),
        (this.fpOn = !1),
        (this.fixed || this.overrideOn) && this.restoreNear(),
        this.fixed)
      ) {
        let e = this.fixed;
        (n.position.set(e[0], e[1], e[2]),
          n.lookAt(e[3], e[4], e[5]),
          (this.aimYawRaw = Math.atan2(e[3] - e[0], -(e[5] - e[2]))),
          (this.aimPitchRaw = -Math.atan2(
            e[4] - e[1],
            Math.hypot(e[3] - e[0], e[5] - e[2]),
          )));
        return;
      }
      if (this.overrideOn) {
        (n.position.copy(this.overridePos), n.lookAt(this.overrideLook));
        return;
      }
      if (!this.target) return;
      let i = this.host,
        a = t.input,
        o = this.isVeh(),
        s = i && !o ? i.aimWeight : 0;
      this.aimT = s;
      let l = 0.0022 * (s > 0.5 ? 0.62 : 1) * 1,
        u = a.look.x * l,
        d = a.look.y * l,
        f =
          Math.abs(a.look.x) + Math.abs(a.look.y) > 0.4 || !!a.virtual.lookHeld;
      this.sinceLook = f ? 0 : this.sinceLook + e;
      let p = i?.camAct ?? a;
      p.pressed(`camera`) &&
        (o || this.profile !== `foot`
          ? (this.distIdx = (this.distIdx + 1) % 3)
          : this.fp
            ? ((this.fp = !1), (this.distIdx = 0), (this.snapNext = !0))
            : this.distIdx === 2
              ? ((this.fp = !0), (this.snapNext = !0))
              : this.distIdx++);
      let m = this.fp && this.profile === `foot` && !!i && i.onFoot,
        h = p.down(`lookBehind`);
      this.target.getWorldPosition(this.tp);
      let g =
        this.snapNext ||
        !this.hasTarget ||
        this.tp.distanceToSquared(this.lastTp) > 400;
      ((this.snapNext = !1),
        (this.hasTarget = !0),
        e > 0 &&
          (this.tmp
            .subVectors(this.tp, this.lastTp)
            .divideScalar(Math.max(e, 0.001)),
          g ? this.vel.set(0, 0, 0) : this.vel.lerp(this.tmp, mt(8, e))),
        this.lastTp.copy(this.tp));
      let _,
        v,
        y,
        b,
        x,
        S,
        C = Math.hypot(this.vel.x, this.vel.z);
      if (o) {
        let n = yp[this.profile],
          r = n.dist,
          i = n.h,
          o = null,
          s = !1;
        try {
          let e = t.vehicles.playerVehicle;
          (e && e.object === this.target && (o = e.spec),
            (s = !!e && e.object === this.target && e.kind === `kart`));
        } catch {}
        if (
          (s && ((n = bp), (r = n.dist), (i = n.h)),
          o && !o.twoWheeler && o.height > Cp)
        ) {
          let e = o.height,
            t = o.halfL,
            a = Math.sin(n.pitch);
          ((r = Math.max(
            n.dist,
            yp.car.dist + 1.1 * (t - 2.3) + 0.9 * (e - 1.45),
          )),
            (i = Math.max(n.h, e + (e * (r + t)) / (7 + 4 * e) - r * a)));
        }
        (this.fwd.setFromMatrixColumn(this.target.matrixWorld, 2).negate(),
          (this.fwd.y = 0),
          this.fwd.lengthSq() < 1e-6 && this.fwd.set(0, 0, -1),
          this.fwd.normalize());
        let c = Math.atan2(this.fwd.x, -this.fwd.z),
          l = this.vel.x * this.fwd.x + this.vel.z * this.fwd.z,
          f = c;
        if (C > 3 && l > 1) {
          let e = Math.atan2(this.vel.x, -this.vel.z);
          f = c + H(bt(e - c), -0.9, 0.9) * 0.55;
        }
        ((this.chaseYaw = g
          ? f
          : ft(this.chaseYaw, f, 2.6 + Math.min(C, 30) * 0.07, e)),
          (this.userYaw = bt(this.userYaw + u)),
          (this.userPitch = H(this.userPitch + d, -0.25, 0.9)),
          (this.driveSinceLook =
            this.sinceLook === 0
              ? 0
              : C > 3
                ? this.driveSinceLook + e
                : this.driveSinceLook));
        let p = a.device === `touch`;
        if (
          p
            ? this.sinceLook > xp && this.driveSinceLook > Sp
            : this.sinceLook > 1.1
        ) {
          let t = p ? 1.2 : 2.2;
          ((this.userYaw = pt(this.userYaw, 0, t, e)),
            (this.userPitch = pt(this.userPitch, 0, t, e)));
        }
        ((_ = this.chaseYaw + this.userYaw),
          (v = n.pitch + this.userPitch - H(C * 0.0025, 0, 0.06)),
          (y = r * pp[this.distIdx] + H(C * (s ? 0.015 : 0.03), 0, 1.2)),
          (b = i),
          (x = 0),
          (S = s
            ? n.fov + Math.min(bp.fovMax, C * bp.fovSpeed)
            : n.fov + Math.min(10, C * 0.26)),
          (this._pitch = v));
      } else if (this.profile === `cinematic`)
        ((this.cineT += e),
          (_ = this._yaw + this.cineT * 0.22),
          (v = U(0.35, 0.75, Math.min(1, this.cineT / 5))),
          (y = U(3.5, 7.5, Math.min(1, this.cineT / 5))),
          (b = 0.6),
          (x = 0),
          (S = 55));
      else {
        ((this._yaw = bt(this._yaw + u + this.nudgeYaw)),
          (this._pitch = H(
            this._pitch + d + this.nudgePitch,
            m ? -1.3 : -0.6,
            m ? 1.3 : 1.2,
          )));
        let t = i ? i.moveSpeed > 1.2 : !1;
        if (i && !m && s < 0.1 && t && this.sinceLook > 1.3) {
          let t = bt(i.heading - this._yaw),
            n = Math.cos(t);
          (n > 0.5 &&
            (this._yaw = bt(
              this._yaw +
                t * mt(1.1 * (n - 0.5) * 2 * Math.min(1, i.moveSpeed / 5), e),
            )),
            (this._pitch = pt(this._pitch, 0.2, 0.7, e)));
        }
        ((_ = this._yaw),
          (v = this._pitch),
          (y = U(cp[this.distIdx], 2.2, s)),
          (b = i ? i.eyeHeight : 1.55),
          (x = U(0.3, 0.62, s)),
          (S =
            60 +
            (i && i.sprinting && i.moveSpeed > 5 ? 1 : 0) * 7 -
            s * 13 +
            (m ? vp : 0)));
      }
      ((this.nudgeYaw = 0), (this.nudgePitch = 0));
      let w = n.aspect;
      if (w < 1.3) {
        let e = Math.min(1, (1.3 - w) / 0.85);
        ((S = Math.min(92, S * (1 + 0.45 * e))),
          (y *= 1 + 0.3 * e),
          (x *= 1 - 0.6 * e));
      }
      let T =
        !o && this.profile === `foot`
          ? (t.interiors?.cameraLimit ?? null)
          : null;
      if (
        (T && y > T.maxDist && (y = T.maxDist),
        h && (_ += Math.PI),
        (this.aimYawRaw = _),
        (this.aimPitchRaw = v),
        m)
      ) {
        (this.firstPersonLens(e, _, v, g), this.finish(e, S));
        return;
      }
      this.restoreNear();
      let E = !o && this.profile === `foot` && !!i,
        D = E ? (i.gaitBob ?? 0) * 0.55 * (1 - s) : 0,
        O = this.tp.x,
        k = this.tp.y + b + D,
        A = this.tp.z;
      if (g)
        (this.pivot.set(O, k, A),
          (this.curDist = y),
          (this.collDist = y),
          (this.shoulder = x));
      else {
        let t = o ? 22 + Math.min(C, 70) * 0.9 : 15,
          n = o ? 12 : 8,
          i = r ? this.goal : this.tmp.set(O, k, A);
        ((this.pivot.x = Tp(this.pivot.x, i.x, O, t, e)),
          (this.pivot.z = Tp(this.pivot.z, i.z, A, t, e)),
          (this.pivot.y = Tp(this.pivot.y, i.y, k, n, e)),
          (this.curDist = pt(
            this.curDist,
            y,
            s > 0.02 && s < 0.98 ? 14 : 5,
            e,
          )),
          (this.shoulder = pt(this.shoulder, x, 10, e)));
      }
      (this.goal.set(O, k, A), (this.goalOk = !0));
      let j = Math.cos(v),
        M = Math.sin(v);
      (this.dir.set(Math.sin(_) * j, -M, -Math.cos(_) * j),
        this.right.set(Math.cos(_), 0, Math.sin(_)),
        this.shoulderPt.copy(this.pivot));
      let N = this.shoulder;
      if (!o && Math.abs(N) > 0.01) {
        let t = Math.abs(N),
          n = this.cast(this.pivot, this.right, t + 0.3, this.hit)
            ? this.hit.distance - 0.3
            : t;
        this.tmp.copy(this.right).negate();
        let r =
          (this.side < 0 || n < t * 0.6) &&
          this.cast(this.pivot, this.tmp, t + 0.3, this.hit)
            ? this.hit.distance - 0.3
            : t;
        (this.side > 0 && n < t * 0.45 && r > n + 0.2
          ? (this.side = -1)
          : this.side < 0 && (n > t * 0.8 || r < n) && (this.side = 1),
          (this.sideK = g ? this.side : pt(this.sideK, this.side, 6, e)),
          (N =
            this.sideK > 0
              ? Math.min(t, Math.max(0, n)) * this.sideK
              : Math.min(t, Math.max(0, r)) * this.sideK),
          this.shoulderPt.addScaledVector(this.right, N));
      }
      let ee = this.camUp.crossVectors(this.right, this.dir).normalize(),
        P = 0.22 + 0.3 * Math.max(0, Math.sin(v));
      this.tmp.copy(this.dir).negate();
      let F = this.curDist;
      for (let e = 0; e < 5; e++) {
        let t = up[e];
        (this.rayO
          .copy(this.shoulderPt)
          .addScaledVector(this.right, t[0] * lp)
          .addScaledVector(ee, t[1] * lp),
          this.cast(this.rayO, this.tmp, F + P, this.hit) &&
            (F = Math.min(F, this.hit.distance - P)));
      }
      if (
        ((F = this.vehicleOcclusion(this.shoulderPt, this.tmp, F, P)),
        T &&
          this.tmp.y > 0.001 &&
          (F = Math.min(F, (T.ceilY - 0.35 - this.shoulderPt.y) / this.tmp.y)),
        (F = Math.max(0.35, F)),
        !o && i && this.profile !== `cinematic`)
      ) {
        this.desired.copy(this.shoulderPt).addScaledVector(this.dir, -F);
        let e = this.tp.y;
        for (let t = 0; t < 4; t++) {
          let n =
              t === 0
                ? i.eyeHeight + 0.05
                : t < 3
                  ? i.eyeHeight * 0.72
                  : i.eyeHeight * 0.4,
            r = t === 1 ? -0.2 : t === 2 ? 0.2 : 0;
          this.look
            .set(
              this.tp.x + this.right.x * r,
              e + n,
              this.tp.z + this.right.z * r,
            )
            .sub(this.desired);
          let a = this.look.length();
          if (
            a < 0.5 ||
            (this.look.divideScalar(a),
            !this.cast(this.desired, this.look, a - 0.25, this.hit))
          )
            continue;
          this.rayO.copy(this.hit.point).sub(this.shoulderPt);
          let o = this.rayO.dot(this.tmp) - 0.3;
          o < F && (F = Math.max(t === 3 ? Math.min(F, 1.6) : 0.8, o));
        }
      }
      if (
        !o &&
        i &&
        this.profile === `foot` &&
        F < 1.4 &&
        this.curDist > 2 &&
        this.sinceLook > 0.6 &&
        s < 0.1 &&
        !h
      ) {
        let t = 0,
          n = F + 1;
        for (let e = 0; e < fp.length; e++) {
          let r = fp[e],
            a = _ + r;
          this.look.set(-Math.sin(a) * j, M, Math.cos(a) * j);
          let o = this.cast(
            this.shoulderPt,
            this.look,
            this.curDist + P,
            this.hit,
          )
            ? this.hit.distance - P
            : this.curDist;
          if (o <= n + 0.05 * Math.abs(r)) continue;
          (this.rayO.copy(this.shoulderPt).addScaledVector(this.look, o),
            this.los
              .set(this.tp.x, this.tp.y + i.eyeHeight * 0.72, this.tp.z)
              .sub(this.rayO));
          let s = this.los.length();
          (s > 0.5 &&
            this.cast(
              this.rayO,
              this.los.divideScalar(s),
              s - 0.3,
              this.hit,
            )) ||
            ((n = o), (t = r));
        }
        t !== 0 && (this._yaw = bt(this._yaw + t * mt(1.6, e)));
      }
      let I = F;
      if (!o && i && this.profile !== `cinematic` && F > 1.3) {
        this.desired.copy(this.shoulderPt).addScaledVector(this.dir, -F);
        let e = c.degToRad(n.fov) * 0.42;
        if (
          (this.look
            .copy(this.dir)
            .multiplyScalar(Math.cos(e))
            .addScaledVector(ee, -Math.sin(e)),
          this.cast(this.desired, this.look, 1.7, this.hit) &&
            this.hit.point.y < this.tp.y + 1.2 &&
            this.hit.normal.y > -0.5)
        ) {
          this.rayO.copy(this.hit.point).sub(this.desired);
          let e = this.rayO.dot(this.dir);
          I = Math.max(Math.min(F, s > 0.5 ? 1.25 : 1.6), F - e - 0.3);
        }
      }
      ((this.collDist = g
        ? I
        : F < this.collDist
          ? F
          : pt(this.collDist, I, I < this.collDist ? 7 : 3.5, e)),
        this.desired
          .copy(this.shoulderPt)
          .addScaledVector(this.dir, -this.collDist));
      let te = this.desired.y,
        ne = t.groundAt(this.desired.x, this.desired.z, te, 0.3),
        re =
          t.plan.surfaceAt(this.desired.x, this.desired.z) === `water` &&
          ne > t.plan.groundHeight(this.desired.x, this.desired.z) - 1.5,
        ie =
          Math.max(
            ne,
            re ? t.plan.waterLevelAt(this.desired.x, this.desired.z) : -50,
          ) + 0.3;
      if (
        (this.desired.y < ie && (this.desired.y = ie),
        n.position.copy(this.desired),
        (this.eyeDist = this.collDist),
        o)
      ) {
        let e = H(C * 0.12, 0, 3.5);
        (this.look.copy(this.pivot).addScaledVector(this.fwd, e),
          (this.look.y += 0.2),
          n.lookAt(this.look));
      } else
        (this.look.copy(n.position).add(this.dir),
          n.lookAt(this.look),
          (this.roll = pt(this.roll, E ? (i.gaitRoll ?? 0) * 0.3 : 0, 4, e)),
          Math.abs(this.roll) > 1e-4 && n.rotateZ(-this.roll));
      this.finish(e, S);
    }
    firstPersonLens(e, t, n, r) {
      let i = this.host,
        a = this.ctx.camera;
      this.fpOn = !0;
      let o = _p;
      try {
        this.ctx.renderer.reversedZ.active && (o = gp);
      } catch {}
      (Number.isNaN(this.near0) && (this.near0 = a.near),
        a.near !== o && ((a.near = o), a.updateProjectionMatrix()));
      let s =
        this.tp.y + (i.eyeLine ?? i.eyeHeight + 0.1) + (i.gaitBob ?? 0) * 0.6;
      ((this.pivot.x = this.tp.x),
        (this.pivot.z = this.tp.z),
        (this.pivot.y = r ? s : this.pivot.y + (s - this.pivot.y) * mt(14, e)),
        this.tmp.set(Math.sin(t), 0, -Math.cos(t)));
      let c = o * 1.6,
        l = Math.max(0, Math.sin(n)),
        u = mp + hp * l;
      (this.cast(this.pivot, this.tmp, u + c, this.hit) &&
        (u = Math.max(-0.25, Math.min(u, this.hit.distance - c))),
        a.position.copy(this.pivot).addScaledVector(this.tmp, u),
        (a.position.y -= 0.08 * l));
      let d = Math.cos(n);
      (this.dir.set(Math.sin(t) * d, -Math.sin(n), -Math.cos(t) * d),
        this.look.copy(a.position).add(this.dir),
        a.lookAt(this.look),
        (this.roll = pt(this.roll, (i.gaitRoll ?? 0) * 0.2, 4, e)),
        Math.abs(this.roll) > 1e-4 && a.rotateZ(-this.roll),
        (this.eyeDist = 0));
    }
    restoreNear() {
      if (Number.isNaN(this.near0)) return;
      let e = this.ctx.camera;
      ((e.near = this.near0), e.updateProjectionMatrix(), (this.near0 = NaN));
    }
    finish(e, t) {
      let n = this.ctx.camera;
      if (
        ((this.fov = pt(this.fov, t, 5, e)),
        Math.abs(n.fov - this.fov) > 0.01 &&
          ((n.fov = this.fov), n.updateProjectionMatrix()),
        this.trauma > 0.001)
      ) {
        let t = this.trauma * this.trauma,
          r = this.time * 38,
          i =
            Math.sin(r * 1.1) * 0.5 +
            Math.sin(r * 2.3 + 1.3) * 0.3 +
            Math.sin(r * 4.7 + 2.1) * 0.2,
          a =
            Math.sin(r * 1.3 + 4) * 0.5 +
            Math.sin(r * 2.9 + 0.7) * 0.3 +
            Math.sin(r * 5.3 + 1.7) * 0.2,
          o = Math.sin(r * 0.9 + 2) * 0.6 + Math.sin(r * 3.1 + 2.7) * 0.4;
        (n.rotateX(i * 0.045 * t),
          n.rotateY(a * 0.045 * t),
          n.rotateZ(o * 0.03 * t),
          (this.trauma = Math.max(0, this.trauma - e * 1.6)));
      }
      if (this.blendT > 0) {
        let t = this.blendT * this.blendT * (3 - 2 * this.blendT);
        (n.position.lerp(this.blendFromPos, t),
          n.quaternion.slerp(this.blendFromQuat, t),
          (this.blendT = Math.max(0, this.blendT - e / 0.9)));
      }
    }
  };
