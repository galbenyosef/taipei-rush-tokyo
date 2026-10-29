// tokyo/assets/actors-qKVitB-C 21 — math
// Lines 6361-7078 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var ys = [2.7, 4.1, 6],
  bs = 0.26,
  xs = [
    [0, 0],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ],
  Ss = (e) => e.kind === `vehicle`,
  Cs = [0.35, -0.35, 0.7, -0.7],
  ws = [0.78, 1, 1.4],
  Ts = 0.12,
  Es = 0.24,
  Ds = 0.08,
  Os = 0.16,
  ks = 6,
  As = {
    car: { dist: 6.4, h: 1.45, pitch: 0.17, fov: 62 },
    scooter: { dist: 4.3, h: 1.35, pitch: 0.2, fov: 62 },
    bus: { dist: 13.5, h: 3.2, pitch: 0.2, fov: 60 },
  },
  js = { dist: 3.5, h: 0.95, pitch: 0.1, fov: 66, fovSpeed: 0.55, fovMax: 18 },
  Ms = 3.5,
  Ns = 2,
  Ps = 1.9,
  Fs = class {
    name = `camera`;
    ctx;
    host = null;
    target = null;
    profile = `foot`;
    _yaw = Math.PI / 2;
    _pitch = 0.22;
    distIdx = 1;
    pivot = new L();
    tp = new L();
    lastTp = new L();
    vel = new L();
    goal = new L();
    goalOk = !1;
    fwd = new L();
    dir = new L();
    right = new L();
    shoulderPt = new L();
    desired = new L();
    look = new L();
    tmp = new L();
    hit = Lt();
    camUp = new L();
    rayO = new L();
    los = new L();
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
    overridePos = new L();
    overrideLook = new L();
    blendT = 0;
    blendFromPos = new L();
    blendFromQuat = new I();
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
    castO = new L();
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
        s = i.dynamics.query(a, o, n * 0.5 + 0.5, this.bodies, Ss);
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
      let c = 0.0022 * (s > 0.5 ? 0.62 : 1) * 1,
        l = a.look.x * c,
        u = a.look.y * c,
        d =
          Math.abs(a.look.x) + Math.abs(a.look.y) > 0.4 || !!a.virtual.lookHeld;
      this.sinceLook = d ? 0 : this.sinceLook + e;
      let f = i?.camAct ?? a;
      f.pressed(`camera`) &&
        (o || this.profile !== `foot`
          ? (this.distIdx = (this.distIdx + 1) % 3)
          : this.fp
            ? ((this.fp = !1), (this.distIdx = 0), (this.snapNext = !0))
            : this.distIdx === 2
              ? ((this.fp = !0), (this.snapNext = !0))
              : this.distIdx++);
      let p = this.fp && this.profile === `foot` && !!i && i.onFoot,
        m = f.down(`lookBehind`);
      this.target.getWorldPosition(this.tp);
      let h =
        this.snapNext ||
        !this.hasTarget ||
        this.tp.distanceToSquared(this.lastTp) > 400;
      ((this.snapNext = !1),
        (this.hasTarget = !0),
        e > 0 &&
          (this.tmp
            .subVectors(this.tp, this.lastTp)
            .divideScalar(Math.max(e, 0.001)),
          h ? this.vel.set(0, 0, 0) : this.vel.lerp(this.tmp, rt(8, e))),
        this.lastTp.copy(this.tp));
      let g,
        _,
        v,
        y,
        b,
        x,
        S = Math.hypot(this.vel.x, this.vel.z);
      if (o) {
        let n = As[this.profile],
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
          (s && ((n = js), (r = n.dist), (i = n.h)),
          o && !o.twoWheeler && o.height > Ps)
        ) {
          let e = o.height,
            t = o.halfL,
            a = Math.sin(n.pitch);
          ((r = Math.max(
            n.dist,
            As.car.dist + 1.1 * (t - 2.3) + 0.9 * (e - 1.45),
          )),
            (i = Math.max(n.h, e + (e * (r + t)) / (7 + 4 * e) - r * a)));
        }
        (this.fwd.setFromMatrixColumn(this.target.matrixWorld, 2).negate(),
          (this.fwd.y = 0),
          this.fwd.lengthSq() < 1e-6 && this.fwd.set(0, 0, -1),
          this.fwd.normalize());
        let c = Math.atan2(this.fwd.x, -this.fwd.z),
          d = this.vel.x * this.fwd.x + this.vel.z * this.fwd.z,
          f = c;
        if (S > 3 && d > 1) {
          let e = Math.atan2(this.vel.x, -this.vel.z);
          f = c + V(z(e - c), -0.9, 0.9) * 0.55;
        }
        ((this.chaseYaw = h
          ? f
          : it(this.chaseYaw, f, 2.6 + Math.min(S, 30) * 0.07, e)),
          (this.userYaw = z(this.userYaw + l)),
          (this.userPitch = V(this.userPitch + u, -0.25, 0.9)),
          (this.driveSinceLook =
            this.sinceLook === 0
              ? 0
              : S > 3
                ? this.driveSinceLook + e
                : this.driveSinceLook));
        let p = a.device === `touch`;
        if (
          p
            ? this.sinceLook > Ms && this.driveSinceLook > Ns
            : this.sinceLook > 1.1
        ) {
          let t = p ? 1.2 : 2.2;
          ((this.userYaw = We(this.userYaw, 0, t, e)),
            (this.userPitch = We(this.userPitch, 0, t, e)));
        }
        ((g = this.chaseYaw + this.userYaw),
          (_ = n.pitch + this.userPitch - V(S * 0.0025, 0, 0.06)),
          (v = r * ws[this.distIdx] + V(S * (s ? 0.015 : 0.03), 0, 1.2)),
          (y = i),
          (b = 0),
          (x = s
            ? n.fov + Math.min(js.fovMax, S * js.fovSpeed)
            : n.fov + Math.min(10, S * 0.26)),
          (this._pitch = _));
      } else if (this.profile === `cinematic`)
        ((this.cineT += e),
          (g = this._yaw + this.cineT * 0.22),
          (_ = B(0.35, 0.75, Math.min(1, this.cineT / 5))),
          (v = B(3.5, 7.5, Math.min(1, this.cineT / 5))),
          (y = 0.6),
          (b = 0),
          (x = 55));
      else {
        ((this._yaw = z(this._yaw + l + this.nudgeYaw)),
          (this._pitch = V(
            this._pitch + u + this.nudgePitch,
            p ? -1.3 : -0.6,
            p ? 1.3 : 1.2,
          )));
        let t = i ? i.moveSpeed > 1.2 : !1;
        if (i && !p && s < 0.1 && t && this.sinceLook > 1.3) {
          let t = z(i.heading - this._yaw),
            n = Math.cos(t);
          (n > 0.5 &&
            (this._yaw = z(
              this._yaw +
                t * rt(1.1 * (n - 0.5) * 2 * Math.min(1, i.moveSpeed / 5), e),
            )),
            (this._pitch = We(this._pitch, 0.2, 0.7, e)));
        }
        ((g = this._yaw),
          (_ = this._pitch),
          (v = B(ys[this.distIdx], 2.2, s)),
          (y = i ? i.eyeHeight : 1.55),
          (b = B(0.3, 0.62, s)),
          (x =
            60 +
            (i && i.sprinting && i.moveSpeed > 5 ? 1 : 0) * 7 -
            s * 13 +
            (p ? ks : 0)));
      }
      ((this.nudgeYaw = 0), (this.nudgePitch = 0));
      let C = n.aspect;
      if (C < 1.3) {
        let e = Math.min(1, (1.3 - C) / 0.85);
        ((x = Math.min(92, x * (1 + 0.45 * e))),
          (v *= 1 + 0.3 * e),
          (b *= 1 - 0.6 * e));
      }
      let w =
        !o && this.profile === `foot`
          ? (t.interiors?.cameraLimit ?? null)
          : null;
      if (
        (w && v > w.maxDist && (v = w.maxDist),
        m && (g += Math.PI),
        (this.aimYawRaw = g),
        (this.aimPitchRaw = _),
        p)
      ) {
        (this.firstPersonLens(e, g, _, h), this.finish(e, x));
        return;
      }
      this.restoreNear();
      let T = !o && this.profile === `foot` && !!i,
        E = T ? (i.gaitBob ?? 0) * 0.55 * (1 - s) : 0,
        D = this.tp.x,
        O = this.tp.y + y + E,
        A = this.tp.z;
      if (h)
        (this.pivot.set(D, O, A),
          (this.curDist = v),
          (this.collDist = v),
          (this.shoulder = b));
      else {
        let t = o ? 22 + Math.min(S, 70) * 0.9 : 15,
          n = o ? 12 : 8,
          i = r ? this.goal : this.tmp.set(D, O, A);
        ((this.pivot.x = Is(this.pivot.x, i.x, D, t, e)),
          (this.pivot.z = Is(this.pivot.z, i.z, A, t, e)),
          (this.pivot.y = Is(this.pivot.y, i.y, O, n, e)),
          (this.curDist = We(
            this.curDist,
            v,
            s > 0.02 && s < 0.98 ? 14 : 5,
            e,
          )),
          (this.shoulder = We(this.shoulder, b, 10, e)));
      }
      (this.goal.set(D, O, A), (this.goalOk = !0));
      let j = Math.cos(_),
        M = Math.sin(_);
      (this.dir.set(Math.sin(g) * j, -M, -Math.cos(g) * j),
        this.right.set(Math.cos(g), 0, Math.sin(g)),
        this.shoulderPt.copy(this.pivot));
      let ee = this.shoulder;
      if (!o && Math.abs(ee) > 0.01) {
        let t = Math.abs(ee),
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
          (this.sideK = h ? this.side : We(this.sideK, this.side, 6, e)),
          (ee =
            this.sideK > 0
              ? Math.min(t, Math.max(0, n)) * this.sideK
              : Math.min(t, Math.max(0, r)) * this.sideK),
          this.shoulderPt.addScaledVector(this.right, ee));
      }
      let te = this.camUp.crossVectors(this.right, this.dir).normalize(),
        ne = 0.22 + 0.3 * Math.max(0, Math.sin(_));
      this.tmp.copy(this.dir).negate();
      let N = this.curDist;
      for (let e = 0; e < 5; e++) {
        let t = xs[e];
        (this.rayO
          .copy(this.shoulderPt)
          .addScaledVector(this.right, t[0] * bs)
          .addScaledVector(te, t[1] * bs),
          this.cast(this.rayO, this.tmp, N + ne, this.hit) &&
            (N = Math.min(N, this.hit.distance - ne)));
      }
      if (
        ((N = this.vehicleOcclusion(this.shoulderPt, this.tmp, N, ne)),
        w &&
          this.tmp.y > 0.001 &&
          (N = Math.min(N, (w.ceilY - 0.35 - this.shoulderPt.y) / this.tmp.y)),
        (N = Math.max(0.35, N)),
        !o && i && this.profile !== `cinematic`)
      ) {
        this.desired.copy(this.shoulderPt).addScaledVector(this.dir, -N);
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
          o < N && (N = Math.max(t === 3 ? Math.min(N, 1.6) : 0.8, o));
        }
      }
      if (
        !o &&
        i &&
        this.profile === `foot` &&
        N < 1.4 &&
        this.curDist > 2 &&
        this.sinceLook > 0.6 &&
        s < 0.1 &&
        !m
      ) {
        let t = 0,
          n = N + 1;
        for (let e = 0; e < Cs.length; e++) {
          let r = Cs[e],
            a = g + r;
          this.look.set(-Math.sin(a) * j, M, Math.cos(a) * j);
          let o = this.cast(
            this.shoulderPt,
            this.look,
            this.curDist + ne,
            this.hit,
          )
            ? this.hit.distance - ne
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
        t !== 0 && (this._yaw = z(this._yaw + t * rt(1.6, e)));
      }
      let re = N;
      if (!o && i && this.profile !== `cinematic` && N > 1.3) {
        this.desired.copy(this.shoulderPt).addScaledVector(this.dir, -N);
        let e = k.degToRad(n.fov) * 0.42;
        if (
          (this.look
            .copy(this.dir)
            .multiplyScalar(Math.cos(e))
            .addScaledVector(te, -Math.sin(e)),
          this.cast(this.desired, this.look, 1.7, this.hit) &&
            this.hit.point.y < this.tp.y + 1.2 &&
            this.hit.normal.y > -0.5)
        ) {
          this.rayO.copy(this.hit.point).sub(this.desired);
          let e = this.rayO.dot(this.dir);
          re = Math.max(Math.min(N, s > 0.5 ? 1.25 : 1.6), N - e - 0.3);
        }
      }
      ((this.collDist = h
        ? re
        : N < this.collDist
          ? N
          : We(this.collDist, re, re < this.collDist ? 7 : 3.5, e)),
        this.desired
          .copy(this.shoulderPt)
          .addScaledVector(this.dir, -this.collDist));
      let ie = this.desired.y,
        ae = t.groundAt(this.desired.x, this.desired.z, ie, 0.3),
        oe =
          t.plan.surfaceAt(this.desired.x, this.desired.z) === `water` &&
          ae > t.plan.groundHeight(this.desired.x, this.desired.z) - 1.5,
        se =
          Math.max(
            ae,
            oe ? t.plan.waterLevelAt(this.desired.x, this.desired.z) : -50,
          ) + 0.3;
      if (
        (this.desired.y < se && (this.desired.y = se),
        n.position.copy(this.desired),
        (this.eyeDist = this.collDist),
        o)
      ) {
        let e = V(S * 0.12, 0, 3.5);
        (this.look.copy(this.pivot).addScaledVector(this.fwd, e),
          (this.look.y += 0.2),
          n.lookAt(this.look));
      } else
        (this.look.copy(n.position).add(this.dir),
          n.lookAt(this.look),
          (this.roll = We(this.roll, T ? (i.gaitRoll ?? 0) * 0.3 : 0, 4, e)),
          Math.abs(this.roll) > 1e-4 && n.rotateZ(-this.roll));
      this.finish(e, x);
    }
    firstPersonLens(e, t, n, r) {
      let i = this.host,
        a = this.ctx.camera;
      this.fpOn = !0;
      let o = Os;
      try {
        this.ctx.renderer.reversedZ.active && (o = Ds);
      } catch {}
      (Number.isNaN(this.near0) && (this.near0 = a.near),
        a.near !== o && ((a.near = o), a.updateProjectionMatrix()));
      let s =
        this.tp.y + (i.eyeLine ?? i.eyeHeight + 0.1) + (i.gaitBob ?? 0) * 0.6;
      ((this.pivot.x = this.tp.x),
        (this.pivot.z = this.tp.z),
        (this.pivot.y = r ? s : this.pivot.y + (s - this.pivot.y) * rt(14, e)),
        this.tmp.set(Math.sin(t), 0, -Math.cos(t)));
      let c = o * 1.6,
        l = Math.max(0, Math.sin(n)),
        u = Ts + Es * l;
      (this.cast(this.pivot, this.tmp, u + c, this.hit) &&
        (u = Math.max(-0.25, Math.min(u, this.hit.distance - c))),
        a.position.copy(this.pivot).addScaledVector(this.tmp, u),
        (a.position.y -= 0.08 * l));
      let d = Math.cos(n);
      (this.dir.set(Math.sin(t) * d, -Math.sin(n), -Math.cos(t) * d),
        this.look.copy(a.position).add(this.dir),
        a.lookAt(this.look),
        (this.roll = We(this.roll, (i.gaitRoll ?? 0) * 0.2, 4, e)),
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
        ((this.fov = We(this.fov, t, 5, e)),
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
