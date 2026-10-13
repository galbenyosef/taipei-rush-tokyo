// tokyo__assets__actors-Bnj6Q1ad 09 — math
// Lines 2855-5186 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var $i = [2.7, 4.1, 6],
  ea = 0.26,
  ta = [
    [0, 0],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ],
  na = (e) => e.kind === `vehicle`,
  ra = [0.35, -0.35, 0.7, -0.7],
  ia = [0.78, 1, 1.4],
  aa = {
    car: { dist: 6.4, h: 1.45, pitch: 0.17, fov: 62 },
    scooter: { dist: 4.3, h: 1.35, pitch: 0.2, fov: 62 },
    bus: { dist: 13.5, h: 3.2, pitch: 0.2, fov: 60 },
  },
  oa = { dist: 3.5, h: 0.95, pitch: 0.1, fov: 66, fovSpeed: 0.55, fovMax: 18 },
  sa = 3.5,
  ca = 2,
  la = 1.9,
  ua = class {
    name = `camera`;
    ctx;
    host = null;
    target = null;
    profile = `foot`;
    _yaw = Math.PI / 2;
    _pitch = 0.22;
    distIdx = 1;
    pivot = new R();
    tp = new R();
    lastTp = new R();
    vel = new R();
    fwd = new R();
    dir = new R();
    right = new R();
    shoulderPt = new R();
    desired = new R();
    look = new R();
    tmp = new R();
    hit = st();
    camUp = new R();
    rayO = new R();
    los = new R();
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
    overrideOn = !1;
    overridePos = new R();
    overrideLook = new R();
    blendT = 0;
    blendFromPos = new R();
    blendFromQuat = new y();
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
        ? z(this.chaseYaw + this.userYaw)
        : this._yaw;
    }
    get pitch() {
      return this._pitch;
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
    castO = new R();
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
        s = i.dynamics.query(a, o, n * 0.5 + 0.5, this.bodies, na);
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
      if (((this.time += e), this.fixed)) {
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
      let r = this.host,
        i = t.input,
        a = this.isVeh(),
        o = r && !a ? r.aimWeight : 0;
      this.aimT = o;
      let s = 0.0022 * (o > 0.5 ? 0.62 : 1) * 1,
        c = i.look.x * s,
        l = i.look.y * s,
        u =
          Math.abs(i.look.x) + Math.abs(i.look.y) > 0.4 || !!i.virtual.lookHeld;
      this.sinceLook = u ? 0 : this.sinceLook + e;
      let d = r?.camAct ?? i;
      d.pressed(`camera`) && (this.distIdx = (this.distIdx + 1) % 3);
      let f = d.down(`lookBehind`);
      this.target.getWorldPosition(this.tp);
      let p =
        this.snapNext ||
        !this.hasTarget ||
        this.tp.distanceToSquared(this.lastTp) > 400;
      ((this.snapNext = !1),
        (this.hasTarget = !0),
        e > 0 &&
          (this.tmp
            .subVectors(this.tp, this.lastTp)
            .divideScalar(Math.max(e, 0.001)),
          p ? this.vel.set(0, 0, 0) : this.vel.lerp(this.tmp, Je(8, e))),
        this.lastTp.copy(this.tp));
      let m,
        h,
        g,
        _,
        v,
        y,
        b = Math.hypot(this.vel.x, this.vel.z);
      if (a) {
        let n = aa[this.profile],
          r = n.dist,
          a = n.h,
          o = null,
          s = !1;
        try {
          let e = t.vehicles.playerVehicle;
          (e && e.object === this.target && (o = e.spec),
            (s = !!e && e.object === this.target && e.kind === `kart`));
        } catch {}
        if (
          (s && ((n = oa), (r = n.dist), (a = n.h)),
          o && !o.twoWheeler && o.height > la)
        ) {
          let e = o.height,
            t = o.halfL,
            i = Math.sin(n.pitch);
          ((r = Math.max(
            n.dist,
            aa.car.dist + 1.1 * (t - 2.3) + 0.9 * (e - 1.45),
          )),
            (a = Math.max(n.h, e + (e * (r + t)) / (7 + 4 * e) - r * i)));
        }
        (this.fwd.setFromMatrixColumn(this.target.matrixWorld, 2).negate(),
          (this.fwd.y = 0),
          this.fwd.lengthSq() < 1e-6 && this.fwd.set(0, 0, -1),
          this.fwd.normalize());
        let u = Math.atan2(this.fwd.x, -this.fwd.z),
          d = this.vel.x * this.fwd.x + this.vel.z * this.fwd.z,
          f = u;
        if (b > 3 && d > 1) {
          let e = Math.atan2(this.vel.x, -this.vel.z);
          f = u + V(z(e - u), -0.9, 0.9) * 0.55;
        }
        ((this.chaseYaw = p
          ? f
          : Ye(this.chaseYaw, f, 2.6 + Math.min(b, 30) * 0.07, e)),
          (this.userYaw = z(this.userYaw + c)),
          (this.userPitch = V(this.userPitch + l, -0.25, 0.9)),
          (this.driveSinceLook =
            this.sinceLook === 0
              ? 0
              : b > 3
                ? this.driveSinceLook + e
                : this.driveSinceLook));
        let x = i.device === `touch`;
        if (
          x
            ? this.sinceLook > sa && this.driveSinceLook > ca
            : this.sinceLook > 1.1
        ) {
          let t = x ? 1.2 : 2.2;
          ((this.userYaw = Re(this.userYaw, 0, t, e)),
            (this.userPitch = Re(this.userPitch, 0, t, e)));
        }
        ((m = this.chaseYaw + this.userYaw),
          (h = n.pitch + this.userPitch - V(b * 0.0025, 0, 0.06)),
          (g = r * ia[this.distIdx] + V(b * (s ? 0.015 : 0.03), 0, 1.2)),
          (_ = a),
          (v = 0),
          (y = s
            ? n.fov + Math.min(oa.fovMax, b * oa.fovSpeed)
            : n.fov + Math.min(10, b * 0.26)),
          (this._pitch = h));
      } else if (this.profile === `cinematic`)
        ((this.cineT += e),
          (m = this._yaw + this.cineT * 0.22),
          (h = B(0.35, 0.75, Math.min(1, this.cineT / 5))),
          (g = B(3.5, 7.5, Math.min(1, this.cineT / 5))),
          (_ = 0.6),
          (v = 0),
          (y = 55));
      else {
        ((this._yaw = z(this._yaw + c + this.nudgeYaw)),
          (this._pitch = V(this._pitch + l + this.nudgePitch, -0.6, 1.2)));
        let t = r ? r.moveSpeed > 1.2 : !1;
        if (r && o < 0.1 && t && this.sinceLook > 1.3) {
          let t = z(r.heading - this._yaw),
            n = Math.cos(t);
          (n > 0.5 &&
            (this._yaw = z(
              this._yaw +
                t * Je(1.1 * (n - 0.5) * 2 * Math.min(1, r.moveSpeed / 5), e),
            )),
            (this._pitch = Re(this._pitch, 0.2, 0.7, e)));
        }
        ((m = this._yaw),
          (h = this._pitch),
          (g = B($i[this.distIdx], 2.2, o)),
          (_ = r ? r.eyeHeight : 1.55),
          (v = B(0.3, 0.62, o)),
          (y =
            60 + (r && r.sprinting && r.moveSpeed > 5 ? 1 : 0) * 7 - o * 13));
      }
      ((this.nudgeYaw = 0), (this.nudgePitch = 0));
      let x = n.aspect;
      if (x < 1.3) {
        let e = Math.min(1, (1.3 - x) / 0.85);
        ((y = Math.min(92, y * (1 + 0.45 * e))),
          (g *= 1 + 0.3 * e),
          (v *= 1 - 0.6 * e));
      }
      let S =
        !a && this.profile === `foot`
          ? (t.interiors?.cameraLimit ?? null)
          : null;
      (S && g > S.maxDist && (g = S.maxDist),
        f && (m += Math.PI),
        (this.aimYawRaw = m),
        (this.aimPitchRaw = h));
      let C = !a && this.profile === `foot` && !!r,
        w = C ? (r.gaitBob ?? 0) * 0.55 * (1 - o) : 0,
        T = this.tp.x,
        E = this.tp.y + _ + w,
        D = this.tp.z;
      if (p)
        (this.pivot.set(T, E, D),
          (this.curDist = g),
          (this.collDist = g),
          (this.shoulder = v));
      else {
        let t = Je(a ? 22 + Math.min(b, 70) * 0.9 : 15, e),
          n = Je(a ? 12 : 8, e);
        ((this.pivot.x += (T - this.pivot.x) * t),
          (this.pivot.z += (D - this.pivot.z) * t),
          (this.pivot.y += (E - this.pivot.y) * n),
          (this.curDist = Re(
            this.curDist,
            g,
            o > 0.02 && o < 0.98 ? 14 : 5,
            e,
          )),
          (this.shoulder = Re(this.shoulder, v, 10, e)));
      }
      let O = Math.cos(h),
        k = Math.sin(h);
      (this.dir.set(Math.sin(m) * O, -k, -Math.cos(m) * O),
        this.right.set(Math.cos(m), 0, Math.sin(m)),
        this.shoulderPt.copy(this.pivot));
      let j = this.shoulder;
      if (!a && Math.abs(j) > 0.01) {
        let t = Math.abs(j),
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
          (this.sideK = p ? this.side : Re(this.sideK, this.side, 6, e)),
          (j =
            this.sideK > 0
              ? Math.min(t, Math.max(0, n)) * this.sideK
              : Math.min(t, Math.max(0, r)) * this.sideK),
          this.shoulderPt.addScaledVector(this.right, j));
      }
      let M = this.camUp.crossVectors(this.right, this.dir).normalize(),
        N = 0.22 + 0.3 * Math.max(0, Math.sin(h));
      this.tmp.copy(this.dir).negate();
      let P = this.curDist;
      for (let e = 0; e < 5; e++) {
        let t = ta[e];
        (this.rayO
          .copy(this.shoulderPt)
          .addScaledVector(this.right, t[0] * ea)
          .addScaledVector(M, t[1] * ea),
          this.cast(this.rayO, this.tmp, P + N, this.hit) &&
            (P = Math.min(P, this.hit.distance - N)));
      }
      if (
        ((P = this.vehicleOcclusion(this.shoulderPt, this.tmp, P, N)),
        S &&
          this.tmp.y > 0.001 &&
          (P = Math.min(P, (S.ceilY - 0.35 - this.shoulderPt.y) / this.tmp.y)),
        (P = Math.max(0.35, P)),
        !a && r && this.profile !== `cinematic`)
      ) {
        this.desired.copy(this.shoulderPt).addScaledVector(this.dir, -P);
        let e = this.tp.y;
        for (let t = 0; t < 4; t++) {
          let n =
              t === 0
                ? r.eyeHeight + 0.05
                : t < 3
                  ? r.eyeHeight * 0.72
                  : r.eyeHeight * 0.4,
            i = t === 1 ? -0.2 : t === 2 ? 0.2 : 0;
          this.look
            .set(
              this.tp.x + this.right.x * i,
              e + n,
              this.tp.z + this.right.z * i,
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
          o < P && (P = Math.max(t === 3 ? Math.min(P, 1.6) : 0.8, o));
        }
      }
      if (
        !a &&
        r &&
        this.profile === `foot` &&
        P < 1.4 &&
        this.curDist > 2 &&
        this.sinceLook > 0.6 &&
        o < 0.1 &&
        !f
      ) {
        let t = 0,
          n = P + 1;
        for (let e = 0; e < ra.length; e++) {
          let i = ra[e],
            a = m + i;
          this.look.set(-Math.sin(a) * O, k, Math.cos(a) * O);
          let o = this.cast(
            this.shoulderPt,
            this.look,
            this.curDist + N,
            this.hit,
          )
            ? this.hit.distance - N
            : this.curDist;
          if (o <= n + 0.05 * Math.abs(i)) continue;
          (this.rayO.copy(this.shoulderPt).addScaledVector(this.look, o),
            this.los
              .set(this.tp.x, this.tp.y + r.eyeHeight * 0.72, this.tp.z)
              .sub(this.rayO));
          let s = this.los.length();
          (s > 0.5 &&
            this.cast(
              this.rayO,
              this.los.divideScalar(s),
              s - 0.3,
              this.hit,
            )) ||
            ((n = o), (t = i));
        }
        t !== 0 && (this._yaw = z(this._yaw + t * Je(1.6, e)));
      }
      let F = P;
      if (!a && r && this.profile !== `cinematic` && P > 1.3) {
        this.desired.copy(this.shoulderPt).addScaledVector(this.dir, -P);
        let e = A.degToRad(n.fov) * 0.42;
        if (
          (this.look
            .copy(this.dir)
            .multiplyScalar(Math.cos(e))
            .addScaledVector(M, -Math.sin(e)),
          this.cast(this.desired, this.look, 1.7, this.hit) &&
            this.hit.point.y < this.tp.y + 1.2 &&
            this.hit.normal.y > -0.5)
        ) {
          this.rayO.copy(this.hit.point).sub(this.desired);
          let e = this.rayO.dot(this.dir);
          F = Math.max(Math.min(P, o > 0.5 ? 1.25 : 1.6), P - e - 0.3);
        }
      }
      ((this.collDist = p
        ? F
        : P < this.collDist
          ? P
          : Re(this.collDist, F, F < this.collDist ? 7 : 3.5, e)),
        this.desired
          .copy(this.shoulderPt)
          .addScaledVector(this.dir, -this.collDist));
      let ee = this.desired.y,
        te = t.groundAt(this.desired.x, this.desired.z, ee, 0.3),
        ne =
          Math.max(
            te,
            t.plan.surfaceAt(this.desired.x, this.desired.z) === `water`
              ? t.plan.waterLevelAt(this.desired.x, this.desired.z)
              : -50,
          ) + 0.3;
      if (
        (this.desired.y < ne && (this.desired.y = ne),
        n.position.copy(this.desired),
        (this.eyeDist = this.collDist),
        a)
      ) {
        let e = V(b * 0.12, 0, 3.5);
        (this.look.copy(this.pivot).addScaledVector(this.fwd, e),
          (this.look.y += 0.2),
          n.lookAt(this.look));
      } else
        (this.look.copy(n.position).add(this.dir),
          n.lookAt(this.look),
          (this.roll = Re(this.roll, C ? (r.gaitRoll ?? 0) * 0.3 : 0, 4, e)),
          Math.abs(this.roll) > 1e-4 && n.rotateZ(-this.roll));
      if (
        ((this.fov = Re(this.fov, y, 5, e)),
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
  },
  da = new Set([`foot`, `climb`, `knockdown`, `getup`, `dead`]),
  fa = { jab: 1.3, cross: 1.25, hook: 1.2, uppercut: 1.15, kick: 1.2 },
  pa = [19, 20, 18, 26, 27, 21],
  ma = new Set([`batFore`, `batBack`, `reload`, `draw`]),
  ha = /^(idle_stretch|jump$|jump_over|phone|wave|bow|cheer|pray|clap|point)/,
  ga = `jump_over`,
  _a = 0.8,
  va = 0.5,
  ya = 1.4,
  ba = 9,
  xa = 1.4,
  Sa = { back: 1.05, front: 0.8 },
  Ca = { back: 0.3, front: 0.06 },
  wa = new k(),
  Ta = new y(),
  Ea = new y(),
  Da = new R(),
  Oa = new R(),
  ka = new ke(),
  Aa = { x: 0, z: 0, yaw: 0 },
  ja = { x: 0, z: 0, yaw: 0 },
  Ma = new R(0, 1, 0),
  Na = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  Pa = class {
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
    xHip = new R();
    xT = 1;
    xDur = 0;
    act = null;
    actClip = null;
    hitFired = !1;
    ov = null;
    ovT = 0;
    ovSpeed = 1;
    ovPose = bn();
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
    pv = new R();
    pt = new R();
    pole = new R();
    constructor(e) {
      ((this.rig = e),
        (this.proc = new Ni(e)),
        (this.inp = this.proc.inp),
        (this.ik = new On(e)));
      for (let e = 0; e < 33; e++) this.xq.push(new y());
      ((this.proc.onFootstep = (e, t) => this.onFootstep?.(e, t)),
        (this.proc.onActionHit = (e) => this.onActionHit?.(e)));
    }
    async attach(e, n, r = 1e4) {
      let i = Promise.all([
          t(
            () => import(`./animator-C4Q6-_Wy.js`),
            __vite__mapDeps([0, 1, 2, 3, 4]),
          ),
          t(() => import(`./rig-BjRdQXtM.js`), __vite__mapDeps([4, 3])),
          t(() => import(`./clips-B74kfFEX.js`), __vite__mapDeps([5, 3])),
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
          a(await pt(i, r, `player mocap`)),
          (this.mocap = this.pool.get(this.rig) ?? null),
          !!this.mocap
        );
      } catch (e) {
        return (
          e instanceof tt
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
      return !!this.mocap && da.has(this.state);
    }
    setState(e, t = 0.25) {
      if (e === this.state) return;
      let n = this.state;
      ((this.state = e), (this.stateT = 0), (this.fade = t));
      let r = this.mocap;
      if (!r || !da.has(e)) {
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
            this.knock(i, i ? Ca.back : Ca.front));
          break;
        case `getup`:
          this.getUp(i);
          break;
        case `dead`: {
          (this.endAction(), (this.stopClip = null));
          let e = r.action;
          (e && e.startsWith(`knockdown`)) ||
            this.knock(i, i ? Ca.back * 0.5 : 0);
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
      ((this.knockYaw = z((e ? Math.PI : 0) - this.clipYaw(r, i.dur, !0))),
        (this.knockClip = r),
        (this.yawMode = 1));
    }
    getUp(e) {
      let t = this.mocap,
        n = e ? `getup_back` : `getup_front`,
        r = e ? Sa.back : Sa.front;
      this.playRM(n, { from: r, speed: xa, fadeIn: 0.02, fadeOut: 0.1 });
      let i = this.knockClip
          ? this.bodyYaw +
            this.clipYaw(this.knockClip, t.lib.get(this.knockClip).dur, !0)
          : e
            ? Math.PI
            : 0,
        a = z(i - this.clipYaw(n, r, !0));
      (this.rebaseYaw(a, 0.4),
        (this.getupYaw0 = a),
        (this.getupTurn = z(this.clipYaw(n, t.lib.get(n).dur, !1) + a)),
        (this.getupDone = 0),
        (this.yawMode = 2));
    }
    startClimb(e) {
      let t = this.mocap;
      if (!t || !t.lib.has(ga)) return;
      let n = t.lib.get(ga),
        r = n.info.events ?? {},
        i = (r.takeoff ?? 0.18) * n.dur,
        a = (r.land ?? 0.64) * n.dur,
        o = V((a - i) / Math.max(0.2, e * 0.8), 0.7, 2.2);
      t.play(ga, {
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
      return e.action === ga
        ? (e.lib.get(ga).sample(e.actionTime, this.probe),
          Math.max(0, this.probe[77] - this.vaultHipY) * e.rig.scale * _a)
        : 0;
    }
    clipYaw(e, t, n) {
      this.mocap.lib.get(e).sample(t, this.probe);
      let r = this.probe;
      return (
        Ta.set(r[0], r[1], r[2], r[3]),
        Da.set(0, +!!n, n ? 0 : -1).applyQuaternion(Ta),
        Math.atan2(Da.x, -Da.z)
      );
    }
    rebaseYaw(e, t) {
      let n = this.mocap;
      (this.yawBones(-e), n.transitionFromRig(t), (this.bodyYaw = e));
    }
    yawBones(e) {
      if (Math.abs(e) < 1e-5) return;
      let t = this.rig.bones[0];
      (Ta.setFromAxisAngle(Ma, -e),
        t.quaternion.premultiply(Ta),
        t.position.applyQuaternion(Ta));
    }
    updateBodyYaw() {
      let e = this.mocap;
      if (this.yawMode === 1) {
        if (e.action === this.knockClip) {
          let t = e.actionTime,
            [n, r] =
              this.knockClip === `knockdown_back` ? [0.4, 0.85] : [0.15, 0.6];
          this.bodyYaw = this.knockYaw * Ue(n, r, t);
        }
      } else if (
        this.yawMode === 2 &&
        this.rmClip &&
        e.action === this.rmClip
      ) {
        let t = Ue(0.3, 0.95, e.actionProgress),
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
            ? this.ovT / ki(this.ov).dur
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
      return !t || ma.has(e) || e === `hit`
        ? this.proc.actionDuration(e)
        : e === `roll`
          ? (t.duration(`roll`) - va) / ya
          : t.duration(e) / (fa[e] ?? 1) || this.proc.actionDuration(e);
    }
    play(e, t = 1) {
      let n = this.mocap;
      if (!n) {
        this.proc.play(e, t);
        return;
      }
      if (!da.has(this.state)) return;
      if (e === `hit`) {
        this.hitFrom(this.hitSide * 0.7, this.hitDirFront ? -1 : 1, 0.6);
        return;
      }
      if (((this.hitFired = !1), ma.has(e))) {
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
                from: va,
                speed: ya,
                rootMotion: `none`,
                fadeIn: 0.07,
                fadeOut: 0.3,
              }
            : fa[e]
              ? {
                  speed: (fa[e] ?? 1) * t,
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
      (t.root(n - 0.04, Aa), t.root(n + 0.04, ja));
      let r = (Math.hypot(ja.x - Aa.x, ja.z - Aa.z) / 0.08) * e.rig.scale;
      e.actionRate = r > 0.05 && this.stopV > r ? V(this.stopV / r, 1, 2.4) : 1;
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
          (this.state === `foot` || !da.has(this.state)) &&
          ((this.pendingLate = !1),
          (this.mocap = this.pool.get(this.rig) ?? null)));
      let n = this.mocap;
      (n && da.has(this.state)
        ? (this.live === `proc` &&
            ((n.input.grounded = this.inp.grounded),
            n.transitionFromRig(this.fade)),
          (this.live = `mocap`),
          this.updateMocap(e, t))
        : (this.live === `mocap` && this.snapshotBones(this.fade),
          (this.live = `proc`),
          this.proc.update(e),
          (this.gaitBob = Re(this.gaitBob, 0, 6, e)),
          (this.gaitRoll = Re(this.gaitRoll, 0, 6, e))),
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
        let e = 1 - V(n.aim, 0, 1);
        ((i = (V(-n.lookYaw * 0.35 * n.lookW, -0.32, 0.32) + this.sacY) * e),
          (a = (V(n.lookPitch * 0.3 * n.lookW, -0.18, 0.18) + this.sacX) * e));
      }
      ((this.gazeY = Re(this.gazeY, i, 28, e)),
        (this.gazeX = Re(this.gazeX, a, 28, e)),
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
      let t = 1 - Na(this.xT / this.xDur);
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
          ha.test(n.action) &&
          !this.stopping &&
          (n.stop(0.25), this.actClip && this.endAction()));
      let o = this.rootMotionActive;
      (this.stopping &&
        ((this.stopV = Math.max(0, this.stopV - ba * e)), this.warpStop()),
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
          n.action === ga &&
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
        (this.bobAvg = Re(this.bobAvg, c, 2.5, e)),
        (this.gaitBob = V(c - this.bobAvg, -0.08, 0.06)),
        (this.gaitRoll = Re(
          this.gaitRoll,
          V(r.turnRate * r.speed * 0.012, -0.05, 0.05),
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
        (this.propW = Re(
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
      r > 0.001 && (e.updateMatrixWorld(), ka.copy(e.matrixWorld).invert());
      for (let e = 0; e < 2; e++) {
        let i = t.handIK[e];
        if (((i.weight = r), r <= 0.001)) continue;
        let a = e ? 0.2 : -0.2;
        (i.pos
          .set(n.x + n.rx * a, n.y + 0.02 + this.lift, n.z + n.rz * a)
          .applyMatrix4(ka),
          (i.rot = null));
      }
    }
    eulerTo(e, t, n, r, i) {
      i <= 0.001 ||
        (wa.set(t, n, r, `XYZ`),
        Ta.setFromEuler(wa),
        this.rig.bones[e].quaternion.slerp(Ta, Math.min(1, i)));
    }
    post(e) {
      let t = this.inp,
        n = this.rig.bones,
        r = this.ik,
        i = this.state,
        a = i === `foot` || i === `climb`,
        o = t.weapon;
      ((this.aimW = Re(
        this.aimW,
        a ? t.aim : 0,
        t.aim > this.aimW ? 16 : 8,
        e,
      )),
        (this.recoilV += (-this.recoil * 240 - this.recoilV * 20) * e),
        (this.recoil += this.recoilV * e),
        o !== this.holdWeapon && ((this.holdWeapon = o), (this.holdW = 0)),
        (this.holdW = Re(this.holdW, 1, 9, e)));
      for (let e = 0; e < pa.length; e++) {
        let t = n[pa[e]].quaternion;
        t.w !== 1 && t.identity();
      }
      let s = 0,
        c = this.ov,
        l = 0;
      if (c) {
        let t = ki(c);
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
          Ai(c, l, e, this.proc);
          let r = c === `draw` ? 1 : Na(Math.min(1, l / 0.12, (1 - l) / 0.18)),
            i = t.mask;
          for (let t = 1; t < 33; t++)
            i[t] && this.eulerTo(t, e[t * 3], e[t * 3 + 1], e[t * 3 + 2], r);
          c === `reload` && (s = Math.sin(Math.min(1, l * 1.04) * Math.PI));
        }
      }
      let u =
        a && this.aimW < 0.5
          ? V(t.grade, -0.6, 0.6) * V(t.speed / 3, 0.4, 1)
          : 0;
      (Math.abs(u) > 0.01 &&
        (Ta.setFromAxisAngle(Da.set(1, 0, 0), -u * (u > 0 ? 0.32 : 0.18)),
        n[1].quaternion.multiply(Ta),
        Ta.setFromAxisAngle(Da.set(1, 0, 0), -u * (u > 0 ? 0.18 : 0.1)),
        n[2].quaternion.multiply(Ta)),
        r.begin(this.rig));
      let d = this.ov === `batFore` || this.ov === `batBack`;
      if (a) {
        if (o === `pistol` || o === `smg`) this.gunHold(o === `smg`, s);
        else if (o === `bat`) {
          let e = this.aimW,
            t = this.holdW;
          d ||
            (this.eulerTo(8, B(0.9, 1.2, e), 0, B(0.35, 0.9, e), t),
            this.eulerTo(9, B(2.1, 1.7, e), 0, 0, t),
            e > 0.01 &&
              (this.eulerTo(5, 1.1, 0, 0.9, e * t),
              this.eulerTo(6, 1.8, 0, 0, e * t),
              Ta.setFromAxisAngle(Ma, -0.5 * e),
              n[2].quaternion.multiply(Ta)),
            r.begin(this.rig));
          let i = Mi(d ? this.ov : null, d ? l : 0, e, this.pv);
          (r.aimAxisZ(18, this.pv, 1),
            i > 0.01 &&
              (r.pointOn(18, ji.bat, this.pt),
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
        (this.curlL = Re(this.curlL, f, 18, e)),
        (this.curlR = Re(this.curlR, p, 18, e)),
        n[22].rotation.set(0, 0, this.curlL),
        n[23].rotation.set(0, 0, -this.curlR));
      let m = 0;
      if (i === `dead`) m = 0.14 * Ue(0.2, 1, this.stateT);
      else if (i === `knockdown` || i === `getup`) m = 0.08;
      else {
        m = Ue(4.8, 6.8, t.speed) * (0.05 + 0.04 * Math.sin(this.time * 7));
        let e = this.act;
        e === `cheer` ? (m = 0.2) : e && fa[e] && (m = Math.max(m, 0.06));
      }
      if (
        ((this.jaw = Re(this.jaw, m, 12, e)),
        n[32].rotation.set(-this.jaw, 0, 0),
        i === `dead`)
      ) {
        let e = Math.max(0.001, Ue(0.3, 1.1, this.stateT));
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
        let a = V(n.aimPitch, -1.1, 1.2) + this.recoil * 0.1,
          s = V(z(n.aimYaw), -1.2, 1.2),
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
              r.rootPos(4, Da),
              this.pt.lerp(Da, 0.3),
              (this.pt.y = B(this.pt.y, Da.y, 0.25)),
              this.pt.addScaledVector(l, 0.47 - this.recoil * 0.05),
              this.pole.set(0.8, -1, 0.2)),
          r.arm(8, 9, 10, this.pt, this.pole, u)),
          r.aimGun(o, l, u));
      }
      let c = (e ? 1 : i) * a * (1 - t);
      c > 0.01 &&
        (r.pointOn(o, e ? ji.smg : ji.pistol, this.pt),
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
            (1 - V(this.inp.speed / 2.5, 0, 1));
        (t.pointOn(2, Da.set(-0.12, -0.25, -0.24), this.pt),
          i > 0.01 &&
            (t.pointOn(4, Oa.set(-0.02, -0.26, -0.12), Da),
            this.pt.lerp(Da, i)),
          this.pole.set(-1, -0.7, 0.3),
          t.arm(5, 6, 7, this.pt, this.pole, n),
          this.pv.set(0.05 - 0.05 * i, 1, -0.1 + 0.35 * i),
          t.aimAxisZ(26, this.pv, 1));
      } else
        r === `phone` && this.mocap?.action === `phone`
          ? (t.rootQuat(7, Ea),
            t.rootPos(7, this.pt),
            (this.pt.y += 0.1),
            (this.pt.z -= 0.04),
            this.pole.set(-1, -0.6, 0.4),
            t.arm(5, 6, 7, this.pt, this.pole, n),
            t.orient(7, Ea, n))
          : r === `umbrella` &&
            (t.pointOn(2, Da.set(-0.1, 0.02, -0.27), this.pt),
            this.pole.set(-1, -0.8, 0.2),
            t.arm(5, 6, 7, this.pt, this.pole, n),
            t.rootPos(27, this.pt),
            t.rootPos(4, Da),
            this.pv
              .set(
                Da.x + 0.03,
                Da.y + 0.45,
                Da.z - 0.02 - V(this.inp.speed * 0.06, 0, 0.3),
              )
              .sub(this.pt),
            t.aimAxisZ(27, this.pv, 1));
    }
  },
  Fa = [`fists`, `bat`, `pistol`, `smg`],
  Ia = {
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
  La = new Set([
    `jab`,
    `cross`,
    `hook`,
    `uppercut`,
    `kick`,
    `batFore`,
    `batBack`,
  ]),
  Ra = [`jab`, `cross`, `hook`, `uppercut`],
  za = class {
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
    origin = new R();
    dir = new R();
    muzzle = new R();
    aimPoint = new R();
    end = new R();
    nrm = new R();
    rnd = new R();
    sh = st();
    dh = st();
    dmg = {
      amount: 0,
      source: `player`,
      point: new R(),
      dir: new R(),
      weapon: `fists`,
    };
    crimePos = new R();
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
      return !!e && La.has(e) && this.p.anim.actionProgress < 0.7;
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
        this.owned.sort((e, t) => Fa.indexOf(e) - Fa.indexOf(t)));
      let n = Ia[e];
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
      let i = Ia[t.weapon];
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
      let e = Ia[this.p.weapon],
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
        a = (e) => !!e && e.active && (e.kind === `ped` || e.kind === `police`);
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
              V((o * this.dir.x + s * this.dir.y + c * this.dir.z) / l, -1, 1),
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
        p = Je(9, e),
        m = z(d - n.cam.yaw),
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
        r = Ia[n];
      if (this.mag[n] <= 0) {
        e.ammo[n] > 0
          ? this.startReload()
          : (t.audio.play(`empty_click`, {
              x: e.position.x,
              y: e.position.y + 1.2,
              z: e.position.z,
            }),
            (this.cool = 0.3));
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
        (this.spreadCur = Math.min(
          r.spreadMax,
          this.spreadCur + r.spreadShot,
        )));
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
        let t = f.kind !== `vehicle` && this.dh.point.y - f.y > f.height * 0.8,
          i =
            this.dh.distance < 30
              ? 1
              : Math.max(0.45, 1 - (this.dh.distance - 30) / (r.range * 1.2));
        (this.applyDamage(
          f,
          r.damage * i * (t ? 2.4 : 1),
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
          e.overlay.hitMarker(this.killed));
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
        (m - this.lastCrime > 1.5 &&
          ((this.lastCrime = m),
          this.crime(`shooting`, r.severity, e.position)),
        m - this.lastPanic > 0.6)
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
    startReload() {
      let e = this.p,
        t = e.weapon,
        n = Ia[t];
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
      let n = Math.min(Ia[t].mag - this.mag[t], e.ammo[t]);
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
            (r = Ra[this.combo % Ra.length]),
            (this.combo = (this.combo + 1) % Ra.length));
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
        t.events.emit(`player:attack`, { weapon: n, pos: e.position }));
    }
    meleeHit(e) {
      let t = this.p,
        n = t.ctx;
      if (!La.has(e)) return;
      let r = t.weapon,
        i = Ia[r === `bat` ? `bat` : `fists`],
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
            : e.kind === `ped` && this.crime(`assault`, Ia[i].severity, n)));
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
  Ba = `
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
  Va = `
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
