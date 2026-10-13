// tokyo__assets__actors-Bnj6Q1ad 127 — math
// Lines 61008-61335 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var bj = { x: 0, z: 0 },
  xj = { x: 0, z: 0 },
  Sj = { s: 0, seg: 0, dist: 0 },
  Cj = [],
  wj = class {
    ctx;
    v;
    path;
    opts;
    s = 0;
    seg = 0;
    lap = 0;
    lateral = 0;
    targetSpeed = 0;
    stuckT = 0;
    reverseT = 0;
    resets = 0;
    dodge = 0;
    dodgeT = 0;
    blockedT = 0;
    ghostT = 0;
    finished = !1;
    obstacle = 1 / 0;
    twoWheel;
    constructor(e, t, n, r) {
      ((this.ctx = e),
        (this.v = t),
        (this.path = n),
        (this.opts = r),
        (this.twoWheel = !!t.spec?.twoWheeler),
        n.project(t.body.x, t.body.z, Sj),
        (this.s = Sj.s),
        (this.seg = Sj.seg));
    }
    get progress() {
      return this.lap * this.path.length + this.s;
    }
    headingAt(e) {
      return (this.path.dirAt(e, xj), Math.atan2(xj.x, -xj.z));
    }
    update(e, t = 1, n = -1) {
      let r = this.v,
        i = r.controls;
      if (r.destroyed) {
        ((i.throttle = 0), (i.brake = 0), (i.steer = 0));
        return;
      }
      let a = r.body,
        o = this.s;
      (this.path.project(a.x, a.z, Sj, this.seg, 5),
        Sj.dist > 25 && this.path.project(a.x, a.z, Sj),
        (this.seg = Sj.seg),
        (this.s = Sj.s),
        (this.lateral = Sj.dist),
        this.path.closed &&
          o > this.path.length * 0.8 &&
          this.s < this.path.length * 0.2 &&
          this.lap++,
        this.path.closed &&
          o < this.path.length * 0.2 &&
          this.s > this.path.length * 0.8 &&
          this.lap--,
        !this.path.closed &&
          this.s >= this.path.length - 2 &&
          (this.finished = !0));
      let s = r.speed,
        c = Math.abs(s),
        l = this.twoWheel ? 3.5 + c * 0.36 : 5.5 + c * 0.55;
      this.path.pointAt(this.s + l, bj);
      let u = r.heading,
        d = Math.sin(u),
        f = -Math.cos(u),
        p = Math.cos(u),
        m = Math.sin(u);
      this.dodge !== 0 &&
        (this.path.dirAt(this.s + l, xj),
        (bj.x += -xj.z * this.dodge),
        (bj.z += xj.x * this.dodge));
      let h = bj.x - a.x,
        g = bj.z - a.z,
        _ = h * p + g * m,
        v = h * d + g * f,
        y = V(Math.atan2(_, v) * 2.1, -1, 1),
        b = this.opts.latAccel ?? 7.5,
        x = this.opts.decel ?? 6.5,
        S = this.opts.maxSpeed * t,
        C = this.headingAt(this.s);
      for (let e = 6; e <= 60; e += 9) {
        let t = this.headingAt(this.s + e),
          n = Math.abs(z(t - C));
        if (((C = t), n < 0.02)) continue;
        let r = n / 9,
          i = Math.sqrt(b / r),
          a = Math.sqrt(i * i + 2 * x * Math.max(0, e - 9));
        a < S && (S = a);
      }
      if (!this.path.closed) {
        let e = this.path.length - this.s;
        S = Math.min(S, Math.sqrt(2 * x * Math.max(0, e)) + 1);
      }
      if (n >= 0) {
        let e = n - this.s;
        (this.path.closed &&
          e < -this.path.length / 2 &&
          (e += this.path.length),
          e >= -1 &&
            e < 80 &&
            (S = Math.min(S, e < 1 ? 0 : Math.sqrt(2 * x * e) * 0.9)));
      }
      if (this.opts.yieldToPlayer) {
        let e = this.ctx.player.position,
          t = e.x - a.x,
          n = e.z - a.z,
          r = t * d + n * f,
          i = Math.abs(t * p + n * m);
        r > 0 &&
          r < 9 + c * 1.2 &&
          i < 2.4 &&
          (S = Math.min(S, Math.max(0, (r - 5) * 0.8)));
      }
      if (((this.obstacle = 1 / 0), this.opts.avoid && this.ghostT <= 0)) {
        let t = 10 + c * 1.5,
          n = t * 0.5,
          r = this.ctx.dynamics.query(a.x + d * n, a.z + f * n, n + 2, Cj),
          i = 1 / 0,
          o = 0,
          s = 0;
        for (let e = 0; e < r; e++) {
          let n = Cj[e];
          if (n === a || Math.abs(n.y - a.y) > 2.5) continue;
          let r = n.x - a.x,
            c = n.z - a.z,
            l = r * d + c * f;
          if (l <= 0.5 || l > t) continue;
          let u = r * p + c * m,
            h =
              a.halfW +
              Math.max(n.halfW, n.radius * 0.6) +
              (this.twoWheel ? 0.25 : 0.7);
          Math.abs(u - this.dodge) > h ||
            (l < i && ((i = l), (o = u), (s = n.vx * d + n.vz * f)));
        }
        let l = this.opts.swerve ?? 3;
        if (i < 1 / 0) {
          this.obstacle = i;
          let t = a.halfL + 3 + Math.max(0, s) * 0.6,
            n = Math.max(0, s) + Math.max(0, i - t) * 0.9;
          (s < S - 4 && i < 30
            ? (this.dodgeT <= 0 && (this.dodge = o > 0 ? -l : l),
              (this.dodgeT = 1.6),
              (S = Math.min(S, Math.max(n, i > t + 6 ? S * 0.8 : n))))
            : (S = Math.min(S, n)),
            c < 2 && i < t + 5
              ? (this.blockedT += e)
              : (this.blockedT = Math.max(0, this.blockedT - e * 0.5)));
          let r = this.twoWheel ? 1.2 : 2.5,
            u = this.twoWheel ? 2.6 : 5;
          (this.blockedT > r &&
            this.blockedT - e <= r &&
            ((this.dodge = this.dodge ? -this.dodge : l), (this.dodgeT = 2.5)),
            this.blockedT > u && ((this.ghostT = 2.5), (this.blockedT = 0)));
        } else this.blockedT = Math.max(0, this.blockedT - e);
        this.dodgeT > 0 &&
          ((this.dodgeT -= e), this.dodgeT <= 0 && (this.dodge = 0));
      }
      if (
        (this.ghostT > 0 && (this.ghostT -= e),
        (this.targetSpeed = S),
        this.reverseT > 0)
      ) {
        ((this.reverseT -= e),
          (i.throttle = 0),
          (i.brake = 1),
          (i.steer = -y),
          (i.handbrake = !1));
        return;
      }
      (S > 2 && c < 0.7
        ? (this.stuckT += e)
        : (this.stuckT = Math.max(0, this.stuckT - e * 2)),
        this.stuckT > 2.2 &&
          ((this.stuckT = 0),
          this.resets++,
          this.resets >= 3 && this.opts.canReset
            ? (this.resetOntoPath(), (this.resets = 0))
            : (this.reverseT = 1.3)));
      let w = S - s;
      (w > 0
        ? ((i.throttle = V(w * 0.4 + 0.15, 0, 1)), (i.brake = 0))
        : ((i.throttle = 0), (i.brake = w < -0.6 ? V(-w * 0.3, 0, 1) : 0)),
        S < 0.3 && c < 1.2
          ? ((i.throttle = 0),
            (i.brake = +(s > 0.05)),
            (i.handbrake = !0),
            (y = 0))
          : (i.handbrake = !1),
        (i.steer = y * (c > 20 ? 0.7 : 1)));
    }
    resetOntoPath() {
      let e = this.v,
        t = this.s + 6;
      this.path.pointAt(t, bj);
      let n = this.headingAt(t),
        r = this.ctx.vehicles;
      try {
        if (typeof r.teleport == `function`) {
          r.teleport(e, bj.x, bj.z, n);
          return;
        }
      } catch {}
      ((e.body.x = bj.x),
        (e.body.z = bj.z),
        (e.heading = n),
        (e.body.heading = n),
        e.object.position.set(
          bj.x,
          this.ctx.plan.groundHeight(bj.x, bj.z),
          bj.z,
        ),
        (e.object.rotation.y = -n));
    }
  };
function Tj(e, t, n = 6) {
  let r = e.plan.landmark(t);
  if (!r) return Ri(e.plan, 0, 0);
  let i = r.facing,
    a = Math.abs(Math.sin(i)) > 0.5 ? r.w / 2 : r.d / 2,
    o = r.x + Math.sin(i) * (a + n),
    s = r.z - Math.cos(i) * (a + n);
  return Ri(e.plan, o, s);
}
function Ej(e, t) {
  let n = 0,
    r = 0,
    i = !1,
    a = 0,
    o = null;
  (e.every((s) => {
    let c = e.playerVehicle;
    if (((a -= s), !c || s <= 0)) {
      i = !1;
      return;
    }
    c !== o && ((i = !1), (o = c));
    let l = c.speed;
    if (i) {
      let e = (l - n) / s,
        i = n >= 0 ? -e : e,
        o = z(c.heading - r) / s,
        u = Math.abs(o * l);
      (i > 24 && Math.abs(n) > 3
        ? a <= 0 &&
          (t(
            V((i - 24) / 60 + 0.25 * Math.min(1, Math.abs(n) / 15), 0.2, 1),
            `crash`,
          ),
          (a = 0.7))
        : i > 7 && t((i - 7) * s * 0.05, `brake`),
        u > 7 && t((u - 7) * s * 0.025, `turn`));
    }
    ((n = l), (r = c.heading), (i = !0));
  }),
    e.on(`vehicle:collision`, (n) => {
      let r = e.playerVehicle;
      if (!r || n.vehicleId !== r.id || a > 0) return;
      let i = n.impulse > 60 ? n.impulse / (r.spec?.mass || 1200) : n.impulse;
      if (i < 1.5) return;
      let o = V(i / 12, 0.12, 1);
      ((a = 0.7), t(o, `crash`));
    }));
}
var Dj = new ke(),
  Oj = new ke(),
  kj = new ke(),
  Aj = new y(),
  jj = new k(),
  Mj = new R(),
  Nj = new R(1, 1, 1);
function Pj(e, t, n = {}) {
  let r = e.prop(t);
  if (!r) return null;
  let i = n.scale ?? 1,
    a = n.hand ?? [0.3, 0.72, -0.05],
    o = n.scooter ?? [0, 0.92, 0.55],
    s = 0,
    c = e.every((e) => {
      ((s += e), u(r, e));
    }),
    l = e.ctx.player.handMatrix,
    u = (t, r) => {
      let c = e.ctx,
        u = e.playerVehicle,
        d = null,
        f = null;
      if (u)
        (u.spec?.twoWheeler ? (f = o) : n.showInCar && (f = n.showInCar),
          (d = u.object));
      else if (c.player.mode === `foot`) {
        if (typeof l == `function`)
          try {
            (l.call(c.player, `right`, Oj),
              kj.compose(Mj.set(0, -0.1, 0.02), Aj.identity(), Nj.set(i, i, i)),
              Dj.multiplyMatrices(Oj, kj),
              t.setVisible(!0),
              t.setMatrix(Dj));
            return;
          } catch {}
        ((d = c.player.object), (f = a));
      }
      if (!d || !f) {
        t.setVisible(!1);
        return;
      }
      (t.setVisible(!0), d.updateWorldMatrix(!0, !1));
      let p = u ? 0 : Math.sin(s * 7) * 0.05 * Math.min(1, e.playerSpeed / 3);
      (jj.set(p, 0, 0),
        Aj.setFromEuler(jj),
        kj.compose(Mj.set(f[0], f[1], f[2]), Aj, Nj.set(i, i, i)),
        Dj.multiplyMatrices(d.matrixWorld, kj),
        t.setMatrix(Dj));
    };
  return {
    handle: r,
    stop() {
      (c(), r.remove());
    },
  };
}
