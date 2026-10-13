import { Kt as e, R as t, tr as n, wt as r } from "./three-CC5Mkdpe.js";
import {
  a as i,
  c as a,
  i as o,
  l as s,
  n as c,
  o as l,
  r as u,
  s as d,
  t as f,
  u as p,
} from "./pose-hAXyTQQR.js";
import { applyPose as m } from "./rig-BjRdQXtM.js";
var h = new e(),
  g = new e(),
  _ = new n(),
  v = new n(),
  y = new n(),
  b = new n(),
  x = new n(),
  S = new e(),
  C = class {
    off = [];
    gq = [];
    gp = [];
    constructor(t) {
      for (let r = 0; r < 19; r++)
        (this.off.push(t.rest[r].clone()),
          this.gq.push(new e()),
          this.gp.push(new n()));
    }
    fk(e, t) {
      for (let n = 0; n < 19; n++) this.fkBone(e, n, t);
    }
    fkBone(e, t, n) {
      let r = t * 4,
        i = u[t];
      i < 0
        ? (this.gq[t].set(e[r], e[r + 1], e[r + 2], e[r + 3]),
          this.gp[t].set(e[76] * n, e[77] * n, e[78] * n))
        : (h.set(e[r], e[r + 1], e[r + 2], e[r + 3]),
          this.gq[t].copy(this.gq[i]).multiply(h),
          this.gp[t]
            .copy(this.off[t])
            .applyQuaternion(this.gq[i])
            .add(this.gp[i]));
    }
    fkFrom(e, t, n) {
      this.fkBone(e, t, n);
      for (let r = 0; r < 19; r++) {
        if (r === t) continue;
        let i = u[r];
        for (; i >= 0 && i !== t;) i = u[i];
        i === t && this.fkBone(e, r, n);
      }
    }
    setGlobal(e, t, n) {
      let r = u[t];
      r < 0 ? h.copy(n) : h.copy(this.gq[r]).invert().multiply(n);
      let i = t * 4;
      ((e[i] = h.x),
        (e[i + 1] = h.y),
        (e[i + 2] = h.z),
        (e[i + 3] = h.w),
        this.gq[t].copy(n));
    }
    rotateGlobal(e, t, n) {
      (g.copy(n).multiply(this.gq[t]), this.setGlobal(e, t, g));
    }
  };
function w(e, t, n, r, i, a, o, s = 1, c = 0.03) {
  let l = e.gp[n],
    u = e.gp[r],
    d = e.gp[i],
    f = _.copy(u).sub(l).length(),
    p = _.copy(u).sub(d).length(),
    m = y.copy(a);
  s < 1 && m.sub(d).multiplyScalar(s).add(d);
  let C = _.copy(m).sub(l).length(),
    w = f + p,
    T = w * c,
    E = w - T,
    ee = C / w;
  if (C > E) {
    let e = C - E;
    C = E + T * (1 - Math.exp(-e / T));
  }
  C = Math.max(0.01, Math.min(w * 0.9999, C));
  let D = (e) => (e < -1 ? -1 : e > 1 ? 1 : e),
    O = _.copy(d).sub(l),
    k = v.copy(u).sub(l),
    A = O.length(),
    j = Math.acos(D(O.dot(k) / (A * f + 1e-9))),
    M = v.copy(l).sub(u),
    N = y.copy(d).sub(u),
    P = Math.acos(D(M.dot(N) / (f * p + 1e-9))),
    F = Math.acos(D((p * p - f * f - C * C) / (-2 * f * C))),
    te = Math.acos(D((C * C - f * f - p * p) / (-2 * f * p)));
  (b.copy(O).cross(v.copy(u).sub(l)),
    b.lengthSq() < 1e-8 && b.copy(o),
    b.normalize());
  let I = y.copy(a);
  (s < 1 && I.sub(d).multiplyScalar(s).add(d), I.sub(l), x.copy(O).cross(I));
  let L = Math.acos(D(O.dot(I) / (A * I.length() + 1e-9))),
    R = x.lengthSq() > 1e-10;
  R && x.normalize();
  let z = e.gq[n];
  (h.setFromAxisAngle(b, F - j),
    R ? g.setFromAxisAngle(x, L).multiply(h) : g.copy(h),
    S.copy(g).multiply(z),
    e.setGlobal(t, n, S));
  let B = e.gq[r];
  return (
    h.setFromAxisAngle(b, te - P),
    S.copy(g).multiply(h).multiply(B),
    e.setGlobal(t, r, S),
    ee
  );
}
function T() {
  return {
    speed: 0,
    dirX: 0,
    dirZ: -1,
    turnRate: 0,
    accel: 0,
    grounded: !0,
    verticalSpeed: 0,
    aim: 0,
    aimYaw: 0,
    aimPitch: 0,
    lookYaw: 0,
    lookPitch: -0.05,
    lookWeight: 0.65,
    guard: 0,
  };
}
var E = {
    jab: { layer: `auto`, fadeIn: 0.06, fadeOut: 0.2 },
    cross: { layer: `auto`, fadeIn: 0.06, fadeOut: 0.2 },
    hook: { layer: `auto`, fadeIn: 0.07, fadeOut: 0.22 },
    uppercut: { layer: `auto`, fadeIn: 0.07, fadeOut: 0.22 },
    kick: { layer: `full`, fadeIn: 0.1, fadeOut: 0.25 },
    knockdown_back: { layer: `full`, fadeIn: 0.06, hold: !0 },
    knockdown_front: { layer: `full`, fadeIn: 0.06, hold: !0 },
    getup_back: { layer: `full`, fadeIn: 0.25, fadeOut: 0.45 },
    getup_front: { layer: `full`, fadeIn: 0.25, fadeOut: 0.45 },
    stagger: { layer: `full`, fadeIn: 0.08, fadeOut: 0.3 },
    sit_down: { layer: `full`, fadeIn: 0.3, hold: !0 },
    sit_idle: { layer: `full`, fadeIn: 0.25, loop: !0 },
    stand_up: { layer: `full`, fadeIn: 0.2, fadeOut: 0.4 },
    push: { layer: `full`, fadeIn: 0.3, loop: !0 },
    wave: { layer: `auto`, fadeIn: 0.25, fadeOut: 0.4 },
    cheer: { layer: `auto`, fadeIn: 0.2, fadeOut: 0.35 },
    point: { layer: `auto`, fadeIn: 0.2, fadeOut: 0.35 },
    clap: { layer: `auto`, fadeIn: 0.25, fadeOut: 0.35 },
    bow: { layer: `full`, fadeIn: 0.3, fadeOut: 0.4 },
    idle_stretch: { layer: `full`, fadeIn: 0.5, fadeOut: 0.6 },
    dance_macarena: { layer: `full`, fadeIn: 0.4, loop: !0 },
    dance_chicken: { layer: `full`, fadeIn: 0.4, loop: !0 },
    dance_twist: { layer: `full`, fadeIn: 0.4, loop: !0 },
    fight_idle: { layer: `full`, fadeIn: 0.3, loop: !0 },
    roll: { layer: `full`, fadeIn: 0.08, fadeOut: 0.3 },
    jump_over: { layer: `full`, fadeIn: 0.1, fadeOut: 0.25 },
    dodge_l: { layer: `full`, fadeIn: 0.1, fadeOut: 0.25 },
    dodge_r: { layer: `full`, fadeIn: 0.1, fadeOut: 0.25 },
  },
  ee = { pray: 3.8, phone: 1e9 },
  D = Math.PI * 2,
  O = (e, t, n) => (e < t ? t : e > n ? n : e),
  k = (e, t, n, r) => e + (t - e) * (1 - Math.exp(-n * r)),
  A = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e)),
  j = (e) => {
    if (e > Math.PI || e < -Math.PI) {
      if (!Number.isFinite(e)) return 0;
      e = ((((e + Math.PI) % D) + D) % D) - Math.PI;
    }
    return e;
  },
  M = (e, t, n, r, i, a) => {
    let o = i > 1 / 60 ? Math.ceil(i * 60) : 1,
      s = i / o;
    for (let i = 0; i < o; i++) ((t += (-e * n - t * r) * s), (e += t * s));
    ((!Number.isFinite(e) || !Number.isFinite(t)) && ((e = 0), (t = 0)),
      (a[0] = e),
      (a[1] = t));
  },
  N = [0, 0],
  P = new n(),
  F = new n(),
  te = new n(),
  I = new n(),
  L = new e(),
  R = new e(),
  z = new e(),
  B = new r(),
  ne = new r(),
  re = new n(),
  V = new n(),
  H = { x: 0, z: 0, yaw: 0 },
  ie = new n(0, 1, 0),
  ae = new e().setFromEuler(new t(Math.PI - 0.35, 0, 0)),
  oe = new n(-0.035, 0.02, -0.21),
  se = new n(0.035, 0.02, -0.21),
  ce = new n(-0.06, 0, -0.27),
  le = new e()
    .setFromEuler(new t(0.3, -0.42, 0, `YXZ`))
    .multiply(
      new e().setFromRotationMatrix(
        new r().makeBasis(new n(0, 1, 0), new n(0, 0, 1), new n(1, 0, 0)),
      ),
    )
    .multiply(new e().setFromAxisAngle(new n(0, 1, 0), -0.25)),
  ue = new n(-0.55, -1, 0.45),
  de = [`walk`, `walk_fast`, `jog`, `run`, `sprint`],
  fe = class {
    rig;
    lib;
    input = T();
    kin;
    pose = p();
    rootDelta = { x: 0, z: 0, yaw: 0 };
    feet = [0, 1].map(() => ({
      lock: 0,
      locked: !1,
      pos: new n(),
      yaw: 0,
      contact: 1,
      offset: 0,
      stepping: !1,
      stepU: 0,
      from: new n(),
      lastStep: 0,
    }));
    onFootstep = null;
    onEvent = null;
    groundAt;
    footIK;
    timeScale = 1;
    handIK = [
      { pos: new n(), weight: 0, rot: null, pole: null },
      { pos: new n(), weight: 0, rot: null, pole: null },
    ];
    autoRootMotion;
    autoLand;
    autoStop;
    loco = p();
    tmp = p();
    acc = p();
    airP = p();
    actP = p();
    out = p();
    last = p();
    lastVel = new Float32Array(60);
    dbPose = p();
    dbVel = new Float32Array(60);
    dbT = 1;
    dbDur = 0;
    fwd = [];
    back = [];
    anchors = [];
    dirA = 0;
    idle = null;
    idleAlt = [];
    idleClip = null;
    idleT = 0;
    idleNext = 6;
    idleTime = 0;
    nextFidget = 14;
    phase = 0;
    spd = 0;
    moveW = 0;
    moving = !1;
    aimW = 0;
    backSet = !1;
    warp = 0;
    time = 0;
    lastContact = [1, 1];
    stopping = !1;
    rootYaw = 0;
    rootYawInit = !1;
    yawOff = 0;
    yawOffV = 0;
    airW = 0;
    airT = 0;
    airClip = null;
    wasGrounded = !0;
    vy0 = 5;
    lastVy = 0;
    impact = -1;
    act = null;
    lean = 0;
    pitch = 0;
    breath = 0;
    exert = 0;
    flinch = { x: 0, z: 0, vx: 0, vz: 0 };
    recoilA = 0;
    recoilV = 0;
    landDip = 0;
    landV = 0;
    headYaw = 0;
    headPitch = 0;
    gazeYaw = 0;
    gazePitch = 0;
    gazeT = 3;
    guardW = 0;
    blinkT = 2;
    blinkP = -1;
    hairA = 0;
    hairV = 0;
    fist = 0.25;
    rng;
    pelvisOff = 0;
    brake = 0;
    dead = !1;
    constructor(e, t, n = {}) {
      ((this.rig = e),
        (this.lib = t),
        (this.kin = new C(e)),
        (this.groundAt = n.groundAt),
        (this.footIK = n.footIK !== !1),
        (this.autoRootMotion = n.autoRootMotion ?? `extract`),
        (this.autoLand = n.autoLand !== !1),
        (this.autoStop = n.autoStop !== !1),
        (this.rng = (n.seed ?? 1) >>> 0 || 1));
      let r = e.scale,
        i = (e, n = !1) => {
          if (!t.has(e)) return null;
          let i = t.get(e);
          return {
            clip: i,
            speed: i.speed * r,
            stride: i.speed * r * i.dur,
            cycle: i.dur,
            reverse: n,
          };
        };
      for (let e of de) {
        let t = i(e);
        t && this.fwd.push(t);
      }
      this.fwd.sort((e, t) => e.speed - t.speed);
      let a = i(`walk_back`);
      a && this.back.push(a);
      let o = i(`jog`, !0);
      o && a && this.back.push(o);
      let s = i(`strafe_r`),
        c = i(`strafe_l`),
        l = (e) => ({
          nodes: e,
          w: 0,
          warp: 0,
          fw: new Float32Array(Math.max(1, e.length)),
        });
      ((this.anchors = [
        l(this.fwd),
        l(s ? [s] : []),
        l(this.back),
        l(c ? [c] : []),
      ]),
        (this.anchors[0].w = 1),
        (this.idle = t.has(`idle`) ? t.get(`idle`) : null));
      for (let e of [`idle_look`, `idle_shift`])
        t.has(e) && this.idleAlt.push(t.get(e));
      ((this.idleClip = this.idle),
        this.sampleLoco(0),
        this.out.set(this.loco),
        this.last.set(this.loco),
        this.pose.set(this.loco));
    }
    rand() {
      return (
        (this.rng = (this.rng * 1664525 + 1013904223) >>> 0),
        this.rng / 4294967296
      );
    }
    get action() {
      return this.act ? this.act.name : null;
    }
    get actionProgress() {
      let e = this.act;
      return e ? O((e.t - e.t0) / Math.max(0.001, e.t1 - e.t0), 0, 1) : -1;
    }
    get actionRate() {
      return this.act ? this.act.speed : 1;
    }
    set actionRate(e) {
      this.act && Number.isFinite(e) && e > 0 && (this.act.speed = e);
    }
    get actionTime() {
      return this.act ? this.act.t : -1;
    }
    get gaitPhase() {
      return this.phase;
    }
    get locoState() {
      return {
        speed: this.spd,
        move: this.moveW,
        aim: this.aimW,
        warp: this.warp,
        back: this.backSet,
        stopping: this.stopping,
      };
    }
    duration(e) {
      return ee[e] ? ee[e] : this.lib.has(e) ? this.lib.get(e).dur : 0;
    }
    play(e, t = {}) {
      let n = ee[e];
      if (!n && !this.lib.has(e)) return !1;
      let r = { ...(E[e] ?? {}), ...t },
        i = n ? null : this.lib.get(e),
        a =
          r.layer === `upper` ||
          (r.layer === `auto` && (this.spd > 0.7 || !this.input.grounded))
            ? `upper`
            : `full`;
      n && (a = `full`);
      let o = i ? i.dur : n,
        s = O(r.from ?? 0, 0, o),
        c = Math.min(o, r.to ?? o),
        l = {
          clip: i,
          gesture: n ? e : null,
          name: e,
          t: s,
          t0: s,
          t1: c,
          speed: r.speed ?? 1,
          layer: a,
          fadeIn: r.fadeIn ?? (a === `upper` ? 0.1 : 0.2),
          fadeOut: r.fadeOut ?? 0.25,
          loop: !!r.loop,
          hold: !!r.hold,
          root: r.rootMotion ?? `pose`,
          hitAt: i?.event(`hit`) ?? -1,
          hitDone: !1,
          onHit: r.onHit,
          onEnd: r.onEnd,
          stop: !1,
        };
      return (
        (a === `full` || this.act) && this.transition(l.fadeIn),
        (this.act = l),
        (this.stopping = e.startsWith(`stop_`)),
        (this.dead = !1),
        !0
      );
    }
    stop(e = 0.25) {
      this.act &&
        (this.transition(e),
        (this.act = null),
        (this.stopping = !1),
        (this.dead = !1));
    }
    die(e = !1) {
      (this.play(e ? `knockdown_front` : `knockdown_back`, {
        hold: !0,
        fadeIn: 0.06,
      }),
        (this.dead = !0));
    }
    hit(e, t, n = 0.6) {
      let r = Math.hypot(e, t) || 1;
      ((this.flinch.vx += (-t / r) * 10 * n),
        (this.flinch.vz += (e / r) * 8 * n),
        (this.landV -= 1.2 * n),
        n >= 1 &&
          this.input.grounded &&
          (!this.act || this.act.layer === `upper`) &&
          this.lib.has(`stagger`) &&
          this.play(`stagger`, { fadeIn: 0.06 }));
    }
    recoil(e = 0.5) {
      this.recoilV += 14 * e;
    }
    land(e) {
      this.impact = e;
    }
    transition(e = 0.2) {
      e <= 0 ||
        (this.dbPose.set(this.last),
        this.dbVel.set(this.lastVel),
        (this.dbT = 0),
        (this.dbDur = e));
    }
    transitionFromRig(e = 0.25) {
      let t = this.rig.bones,
        n = this.last;
      for (let e = 0; e < 19; e++) {
        let r = t[e].quaternion,
          i = e * 4;
        ((n[i] = r.x), (n[i + 1] = r.y), (n[i + 2] = r.z), (n[i + 3] = r.w));
      }
      let r = t[0].position,
        i = this.rig.scale || 1;
      ((n[76] = r.x / i),
        (n[77] = r.y / i),
        (n[78] = r.z / i),
        this.lastVel.fill(0),
        this.out.set(n),
        this.transition(e));
      for (let e of this.feet)
        ((e.locked = !1), (e.lock = 0), (e.stepping = !1), (e.offset = 0));
      ((this.rootYawInit = !1),
        (this.yawOff = this.yawOffV = 0),
        (this.pelvisOff = 0));
    }
    update(e, t) {
      if (
        ((e *= this.timeScale),
        (this.rootDelta.x = this.rootDelta.z = this.rootDelta.yaw = 0),
        e <= 0)
      ) {
        this.finish(t, 0);
        return;
      }
      ((e = Math.min(e, 0.1)), (this.time += e));
      let n = 0;
      if (t) {
        t.updateMatrixWorld();
        let e = t.matrixWorld.elements,
          r = Math.atan2(-e[8], e[10]);
        (this.rootYawInit && (n = j(r - this.rootYaw)),
          (this.rootYaw = r),
          (this.rootYawInit = !0));
      }
      let r = this.out;
      if (
        (this.locomotion(e),
        r.set(this.loco),
        this.air(e, r),
        this.additive(e, r),
        this.actions(e, r),
        (this.brake = k(this.brake, 0, 3.2, e)),
        this.brake > 0.01)
      ) {
        let e = this.brake * (this.stopping ? 1 : 0.5);
        ($(r, 1, 1, 0, 0, e * 0.14),
          $(r, 2, 1, 0, 0, e * 0.08),
          $(r, 3, 1, 0, 0, -e * 0.12),
          (r[77] -= e * 0.05));
      }
      (this.turnInPlace(e, n, r),
        this.deadBlend(e, r),
        this.trackVelocity(e, r),
        this.pose.set(r),
        this.finish(t, e));
    }
    finish(e, t) {
      let n = this.out,
        r = this.kin,
        i = this.rig.scale;
      (r.fk(n, i),
        t > 0 && (this.lookAt(t, n), this.armsIK(n)),
        this.footIK && e && t > 0 && this.feetIK(t, n, e),
        m(this.rig, n),
        t > 0 && this.extras(t));
    }
    weights(e, t, n) {
      n.fill(0);
      let r = t.length;
      if (r) {
        if (e <= t[0].speed) {
          n[0] = 1;
          return;
        }
        if (e >= t[r - 1].speed) {
          n[r - 1] = 1;
          return;
        }
        for (let i = 0; i < r - 1; i++) {
          let r = t[i].speed,
            a = t[i + 1].speed;
          if (e >= r && e < a) {
            let t = (e - r) / (a - r);
            ((n[i] = 1 - t), (n[i + 1] = t));
            return;
          }
        }
      }
    }
    locomotion(e) {
      let t = this.input,
        n = t.grounded ? t.speed : this.spd,
        r = this.spd;
      this.spd = k(this.spd, n, 14, e);
      let i = this.spd;
      this.aimW = k(this.aimW, +(t.aim > 0.5), 8, e);
      let a = this.moving;
      ((this.moving = this.moving
        ? i > 0.08
        : Math.max(i, t.grounded ? t.speed : 0) > 0.2),
        this.moving &&
          !a &&
          this.moveW < 0.3 &&
          (this.phase = t.turnRate < -0.5 ? 0.77 : 0.27),
        (this.moveW = k(this.moveW, +!!this.moving, this.moving ? 13 : 6, e)));
      let o = this.anchors,
        s = this.aimW,
        c = 1,
        l = 0,
        u = 0,
        d = 0,
        f = 0,
        p = 0;
      if (s > 0.02) {
        Math.hypot(t.dirX, t.dirZ) > 0.1 &&
          (this.dirA = Math.atan2(t.dirX, -t.dirZ));
        let e = this.dirA,
          n = (((e / (Math.PI / 2)) % 4) + 4) % 4,
          r = Math.floor(n) % 4,
          i = n - Math.floor(n),
          a = ye;
        if (
          ((a[0] = a[1] = a[2] = a[3] = 0),
          (a[r] = 1 - i),
          (a[(r + 1) % 4] += i),
          !o[1].nodes.length || !o[3].nodes.length)
        ) {
          let t = Math.abs(e) < Math.PI / 2 ? 0 : 2;
          ((a[t] += a[1] + a[3]), (a[1] = a[3] = 0));
        }
        (o[2].nodes.length || ((a[0] += a[2]), (a[2] = 0)),
          (c = 1 - s + s * a[0]),
          (l = s * a[1]),
          (u = s * a[2]),
          (d = s * a[3]),
          (f =
            O(Math.abs(e) <= Math.PI / 2 ? e : 0, -Math.PI / 4, Math.PI / 4) *
            s),
          (p = O(j(e - Math.PI), -Math.PI / 4, Math.PI / 4) * s));
      }
      let m = 1 - Math.exp(-9 * e);
      ((o[0].w += (c - o[0].w) * m),
        (o[1].w += (l - o[1].w) * m),
        (o[2].w += (u - o[2].w) * m),
        (o[3].w += (d - o[3].w) * m),
        (o[0].warp += (f - o[0].warp) * m),
        (o[2].warp += (p - o[2].warp) * m),
        (this.warp = o[0].warp * o[0].w + o[2].warp * o[2].w),
        (this.backSet = o[2].w > 0.5));
      let h = 0,
        g = 0,
        _ = 0;
      for (let e = 0; e < 4; e++) {
        let t = o[e];
        if (!(t.w < 0.001 || !t.nodes.length)) {
          this.weights(i, t.nodes, t.fw);
          for (let e = 0; e < t.nodes.length; e++)
            ((h += t.w * t.fw[e] * t.nodes[e].stride),
              (g += t.w * t.fw[e] * t.nodes[e].cycle));
          _ += t.w;
        }
      }
      _ > 1e-4 && ((h /= _), (g /= _));
      let v = h > 0.001 ? (t.grounded ? t.speed : i) / h : 0;
      (g > 0 && (v = O(v, 0.5 / g, 1.5 / g)),
        this.moving || (v = g > 0 ? 0.75 / g : 0),
        (this.phase = (this.phase + v * e) % 1));
      let y = this.act;
      (!y &&
      this.autoStop &&
      t.grounded &&
      this.moveW > 0.6 &&
      r > 1.3 &&
      t.speed < 0.25 * r &&
      t.speed < 0.6 &&
      this.aimW < 0.5
        ? this.startStop(r)
        : y && y.name.startsWith(`stop_`) && t.speed > 0.6 && this.stop(0.2),
        this.sampleLoco(e));
      for (let e = 0; e < 2; e++) {
        let t = this.feet[e].contact;
        (t > 0.5 &&
          this.lastContact[e] <= 0.5 &&
          (this.moveW > 0.3 || this.feet[e].stepping) &&
          this.onFootstep?.(e, O(i / 6, 0.15, 1)),
          (this.lastContact[e] = t));
      }
      !this.moving &&
      !this.act &&
      t.grounded &&
      this.aimW < 0.1 &&
      t.guard < 0.1
        ? ((this.idleTime += e),
          this.idleTime > this.nextFidget &&
            this.lib.has(`idle_stretch`) &&
            (this.play(`idle_stretch`),
            (this.nextFidget = this.idleTime + 25 + this.rand() * 25)))
        : this.moving && (this.idleTime = 0);
    }
    startStop(e) {
      let t =
        e > 2.3 && this.lib.has(`stop_run`)
          ? `stop_run`
          : this.lib.has(`stop_walk`)
            ? `stop_walk`
            : ``;
      if (!t) return;
      let n = this.lib.get(t),
        r = Math.max(7, -this.input.accel),
        i = (e * e) / (2 * r),
        a = -(n.info.move?.[1] ?? 0) * this.rig.scale,
        o = 0;
      for (let e = 0; e <= 24; e++) {
        let t = (n.dur * e) / 24;
        if ((n.root(t, H), a - -H.z * this.rig.scale <= i)) {
          o = t;
          break;
        }
        o = t;
      }
      (this.play(t, {
        from: Math.min(o, n.dur * 0.7),
        rootMotion: `none`,
        fadeIn: 0.22,
        fadeOut: 0.5,
      }),
        (this.brake = O((e - 1.5) / 5, 0, 1)));
    }
    sampleLoco(e) {
      let t = this.tmp,
        n = this.acc,
        r = this.phase;
      l(n);
      let a = 0,
        o = 0,
        s = 0,
        c = this.fwd.length ? this.moveW : 0;
      if (c > 0.001) {
        let e = this.anchors,
          l = 0;
        for (let t = 0; t < 4; t++) e[t].nodes.length && (l += e[t].w);
        for (let u = 0; u < 4; u++) {
          let d = e[u];
          if (d.w < 0.001 || !d.nodes.length) continue;
          let f = (d.w / Math.max(l, 1e-6)) * c;
          for (let e = 0; e < d.nodes.length; e++) {
            let c = d.fw[e] * f;
            if (c < 1e-4) continue;
            let l = d.nodes[e],
              u = (l.reverse ? 1 - r : r) * l.cycle;
            l.clip.sample(u, t);
            let p = d.warp;
            if (Math.abs(p) > 1e-4) {
              je(t, 0, 0, 1, 0, -p);
              let e = Math.cos(-p),
                n = Math.sin(-p),
                r = t[76],
                i = t[78];
              ((t[76] = r * e + i * n),
                (t[78] = -r * n + i * e),
                $(t, 1, 0, 1, 0, p * 0.45),
                $(t, 2, 0, 1, 0, p * 0.4),
                $(t, 3, 0, 1, 0, p * 0.15));
            }
            (i(n, t, c),
              (a += l.clip.contactW(u, 0) * c),
              (o += l.clip.contactW(u, 1) * c),
              (s += c));
          }
        }
      }
      let u = 1 - c;
      if (u > 0.001 || s < 1e-4) {
        let r = this.idleClip;
        if (r) {
          if (
            ((this.idleT += e),
            r.sample(this.idleT, t),
            this.idleT >= this.idleNext && this.moveW < 0.05 && !this.act)
          ) {
            let e =
              this.idleAlt.length && this.rand() < 0.4
                ? this.idleAlt[Math.floor(this.rand() * this.idleAlt.length)]
                : this.idle;
            e && e !== r
              ? (this.transition(0.8),
                (this.idleClip = e),
                (this.idleT = 0),
                (this.idleNext = e.dur - 0.05))
              : (this.idleNext += r.dur);
          }
        } else {
          t.fill(0);
          for (let e = 0; e < 19; e++) t[e * 4 + 3] = 1;
          t[77] = 0.977;
        }
        let c = Math.max(u, +(s < 1e-4));
        (i(n, t, c), (a += c), (o += c), (s += c));
      }
      (d(n, s),
        this.loco.set(n),
        (this.feet[0].contact = a / Math.max(s, 1e-6)),
        (this.feet[1].contact = o / Math.max(s, 1e-6)));
    }
    air(e, t) {
      let n = this.input;
      if (n.grounded)
        (this.wasGrounded || this.landed(),
          (this.airW = k(this.airW, 0, 22, e)),
          this.airW > 0.01 && s(t, t, this.airP, this.airW));
      else {
        (this.wasGrounded &&
          ((this.airT = 0),
          (this.vy0 = Math.max(3, n.verticalSpeed)),
          (this.airClip =
            this.spd > 2.5 && this.lib.has(`jump_run`)
              ? this.lib.get(`jump_run`)
              : this.lib.has(`jump`)
                ? this.lib.get(`jump`)
                : null),
          this.act && this.act.layer === `full`
            ? this.stop(0.12)
            : this.transition(0.12),
          this.onEvent?.(`takeoff`, ``)),
          (this.airT += e),
          (this.lastVy = n.verticalSpeed));
        let r = this.airClip;
        if (!r) return;
        this.airW = k(this.airW, 1, 18, e);
        let i = r.info.events ?? he,
          a = (i.takeoff ?? 0.3) * r.dur,
          o = (i.land ?? 0.7) * r.dur,
          c = O((this.vy0 - n.verticalSpeed) / (2 * this.vy0), 0, 1);
        (r.sample(a + (o - a) * c * 0.94, this.airP), r.sample(a, this.tmp));
        let l = this.tmp[77];
        if (n.verticalSpeed < -this.vy0 * 1.15 && this.lib.has(`drop_land`)) {
          let e = this.lib.get(`drop_land`),
            t = (e.info.events?.land ?? 0.23) * e.dur;
          e.sample(t * 0.55, this.tmp);
          let r = O((-n.verticalSpeed - this.vy0 * 1.15) / 5, 0, 1),
            i = this.airP[77];
          (s(this.airP, this.airP, this.tmp, r), (this.airP[77] = i));
        }
        ((this.airP[76] = t[76]),
          (this.airP[78] = t[78]),
          (this.airP[77] = t[77] + (this.airP[77] - l) * 0.35),
          s(t, t, this.airP, this.airW));
      }
      this.wasGrounded = n.grounded;
    }
    landed() {
      let e = this.impact >= 0 ? this.impact : Math.max(0, -this.lastVy);
      ((this.impact = -1), this.onEvent?.(`land`, ``));
      let t = this.spd > 1.5;
      if (!this.autoLand) {
        ((this.landV -= O(e / 9, 0.25, 1.1) * 2.2), this.transition(0.1));
        return;
      }
      if (e > 15 && t && this.lib.has(`roll`))
        this.play(`roll`, { rootMotion: this.autoRootMotion });
      else if (e > 10.5 && this.lib.has(`drop_land`)) {
        let e = this.lib.get(`drop_land`),
          n = (e.info.events?.land ?? 0.23) * e.dur;
        (this.play(`drop_land`, {
          from: n,
          fadeIn: 0.06,
          fadeOut: t ? 0.2 : 0.4,
          layer: t ? `upper` : `full`,
          rootMotion: `none`,
          to: t ? n + 0.35 : e.dur,
        }),
          (this.landV -= 1.5));
      } else if (!t && this.airT > 0.3 && this.lib.has(`jump`)) {
        let e = this.lib.get(`jump`),
          t = (e.info.events?.land ?? 0.56) * e.dur;
        this.play(`jump`, {
          from: t,
          to: Math.min(e.dur, t + 0.8),
          fadeIn: 0.06,
          fadeOut: 0.3,
          rootMotion: `none`,
        });
      } else ((this.landV -= O(e / 9, 0.25, 1.1) * 2.2), this.transition(0.1));
    }
    actions(e, t) {
      let n = this.act;
      if (!n) return;
      let r = n.t;
      n.t += e * n.speed;
      let i = !1;
      n.loop
        ? n.t > n.t1 &&
          (n.t = n.t0 + ((n.t - n.t0) % Math.max(0.001, n.t1 - n.t0)))
        : n.t >= n.t1 && ((n.t = n.t1), (i = !n.hold));
      let o = n.clip;
      if (!o) {
        (this.gesture(n, t),
          i && ((this.act = null), this.transition(n.fadeOut), n.onEnd?.()));
        return;
      }
      if (
        (!n.hitDone &&
          n.hitAt >= 0 &&
          r <= n.hitAt * o.dur &&
          n.t >= n.hitAt * o.dur &&
          ((n.hitDone = !0), n.onHit?.(), this.onEvent?.(`hit`, n.name)),
        o.sample(n.t, this.actP),
        n.root !== `none` && !o.loop)
      ) {
        o.root(n.t, H);
        let e = H.x,
          t = H.z,
          i = H.yaw;
        if (n.root === `extract`) {
          o.root(r, H);
          let n = Math.cos(H.yaw),
            a = Math.sin(H.yaw),
            s = e - H.x,
            c = t - H.z,
            l = this.rig.scale;
          ((this.rootDelta.x += (s * n + c * a) * l),
            (this.rootDelta.z += (-s * a + c * n) * l),
            (this.rootDelta.yaw += i - H.yaw));
        } else {
          o.root(n.t0, H);
          let r = Math.cos(H.yaw),
            a = Math.sin(H.yaw),
            s = e - H.x,
            c = t - H.z,
            l = s * r + c * a,
            u = -s * a + c * r;
          L.setFromAxisAngle(ie, -(i - H.yaw));
          let d = this.actP;
          (P.set(d[76], d[77], d[78]).applyQuaternion(L),
            (d[76] = P.x + l),
            (d[77] = P.y),
            (d[78] = P.z + u),
            R.set(d[0], d[1], d[2], d[3]).premultiply(L),
            (d[0] = R.x),
            (d[1] = R.y),
            (d[2] = R.z),
            (d[3] = R.w));
        }
      }
      let s = 1;
      if (
        (n.layer === `upper` &&
          (s = Math.min(1, (n.t - n.t0) / Math.max(0.001, n.fadeIn * n.speed))),
        !n.loop &&
          !n.hold &&
          (s = Math.min(
            s,
            (n.t1 - n.t) / Math.max(0.001, n.fadeOut * n.speed),
          )),
        (s = A(s)),
        a(t, this.actP, s, n.layer === `upper` ? c : f),
        n.layer === `full`)
      )
        for (let e = 0; e < 2; e++)
          this.feet[e].contact +=
            (o.contactW(n.t, e) - this.feet[e].contact) * s;
      i &&
        ((this.act = null),
        (this.stopping = !1),
        s > 0.05 && this.transition(n.fadeOut),
        n.onEnd?.());
    }
    gesture(e, t) {
      let n = (e.t - e.t0) / Math.max(0.001, e.t1 - e.t0);
      if (e.gesture === `pray`) {
        let r =
          Math.max(0, Math.sin(O((n - 0.15) / 0.75, 0, 1) * Math.PI * 3)) *
          A(Math.min(1, (e.t - e.t0) / 0.6));
        ($(t, 1, 1, 0, 0, -0.22 * r),
          $(t, 2, 1, 0, 0, -0.18 * r),
          $(t, 3, 1, 0, 0, -0.2 * r - 0.1),
          $(t, 4, 1, 0, 0, -0.12));
      } else
        e.gesture === `phone` &&
          ($(t, 3, 1, 0, 0, -0.25), $(t, 4, 1, 0, 0, -0.3));
    }
    turnInPlace(e, t, n) {
      let r =
        this.moveW < 0.35 &&
        this.input.grounded &&
        (!this.act ||
          this.act.layer === `upper` ||
          this.act.name.startsWith(`idle`));
      r &&
        Math.abs(t) > 1e-5 &&
        (this.yawOff = O(j(this.yawOff - t), -2.8, 2.8));
      let i = r ? 6.5 : 22,
        a = Math.exp(-i * e),
        o = (this.yawOffV + i * this.yawOff) * e;
      if (
        ((this.yawOff = (this.yawOff + o) * a),
        (this.yawOffV = (this.yawOffV - i * o) * a),
        !Number.isFinite(this.yawOff) ||
          !Number.isFinite(this.yawOffV) ||
          (Math.abs(this.yawOff) < 1e-4 && Math.abs(this.yawOffV) < 0.001))
      ) {
        ((this.yawOff = 0), (this.yawOffV = 0));
        return;
      }
      je(n, 0, 0, 1, 0, -this.yawOff);
      let s = Math.cos(-this.yawOff),
        c = Math.sin(-this.yawOff),
        l = n[76],
        u = n[78];
      ((n[76] = l * s + u * c), (n[78] = -l * c + u * s));
    }
    additive(e, t) {
      let n = this.input,
        r = this.spd,
        i =
          O(Math.atan((r * n.turnRate) / 9.81) * 0.8, -0.38, 0.38) *
          this.moveW *
          (1 - this.aimW * 0.7);
      this.lean = k(this.lean, i, 7, e);
      let a = O(n.accel * 0.016, -0.1, 0.13) * this.moveW;
      ((this.pitch = k(this.pitch, a, 5, e)),
        (this.exert = O(
          this.exert + (r > 5 ? 0.1 : r > 3 ? 0.03 : -0.05) * e,
          0,
          1,
        )),
        (this.breath += e * D * (0.27 + 0.4 * this.exert)));
      let o =
          Math.sin(this.breath) *
          (0.014 + 0.03 * this.exert) *
          (1 - this.moveW * 0.75),
        s = this.flinch;
      (M(s.x, s.vx, 150, 17, e, N),
        (s.x = N[0]),
        (s.vx = N[1]),
        M(s.z, s.vz, 150, 17, e, N),
        (s.z = N[0]),
        (s.vz = N[1]),
        M(this.recoilA, this.recoilV, 260, 22, e, N),
        (this.recoilA = N[0]),
        (this.recoilV = N[1]),
        M(this.landDip, this.landV, 130, 15, e, N),
        (this.landDip = N[0]),
        (this.landV = N[1]),
        Math.abs(this.lean) > 1e-4 &&
          (je(t, 0, 0, 0, 1, -this.lean),
          (t[76] += Math.sin(this.lean) * t[77] * 0.9),
          $(t, 2, 0, 0, 1, this.lean * 0.3),
          $(t, 3, 0, 0, 1, this.lean * 0.25)));
      let c = O((r - 4.4) / 2.8, 0, 1) * 0.1 * this.moveW;
      if (
        ((Math.abs(this.pitch) > 1e-4 || c > 1e-4) &&
          ($(t, 1, 1, 0, 0, -this.pitch * 0.6 - c * 0.55),
          $(t, 2, 1, 0, 0, -this.pitch * 0.4 - c * 0.45),
          c > 1e-4 && $(t, 3, 1, 0, 0, c * 0.6)),
        o !== 0 &&
          ($(t, 2, 1, 0, 0, o),
          $(t, 3, 1, 0, 0, -o * 0.8),
          $(t, 17, 0, 0, 1, o * 0.7),
          $(t, 18, 0, 0, 1, -o * 0.7)),
        Math.abs(s.x) + Math.abs(s.z) > 1e-4 &&
          ($(t, 1, 1, 0, 0, s.x * 0.35),
          $(t, 2, 1, 0, 0, s.x * 0.45),
          $(t, 3, 1, 0, 0, s.x * 0.3),
          $(t, 4, 1, 0, 0, s.x * 0.45),
          $(t, 1, 0, 0, 1, s.z * 0.3),
          $(t, 2, 0, 0, 1, s.z * 0.35),
          $(t, 4, 0, 0, 1, s.z * 0.35)),
        Math.abs(this.recoilA) > 1e-4 &&
          ($(t, 2, 1, 0, 0, this.recoilA * 0.08),
          $(t, 8, 1, 0, 0, this.recoilA * 0.25),
          $(t, 9, 1, 0, 0, this.recoilA * 0.2),
          $(t, 4, 1, 0, 0, this.recoilA * 0.05)),
        Math.abs(this.landDip) > 1e-4)
      ) {
        let e = O(this.landDip, -0.6, 0.3);
        ((t[77] += e * 0.17),
          $(t, 1, 1, 0, 0, e * 0.28),
          $(t, 3, 1, 0, 0, -e * 0.15));
      }
      ((this.guardW = k(
        this.guardW,
        +(n.guard > 0.5 && !(this.act && this.act.layer === `full`)),
        9,
        e,
      )),
        this.guardW > 0.01 && this.guardPose(t, this.guardW));
    }
    guardPose(e, t) {
      let n = this.tmp;
      if (this.lib.has(`fight_idle`)) {
        (this.lib.get(`fight_idle`).sample(this.time, n), a(e, n, t, U));
        return;
      }
      (n.set(e),
        Ne(n, 5, 0.75, -0.25, 0.35),
        Ne(n, 6, 1.9, 0, 0),
        Ne(n, 8, 0.62, 0.25, -0.35),
        Ne(n, 9, 2.05, 0, 0),
        a(e, n, t, U));
    }
    deadBlend(e, t) {
      if (this.dbT >= this.dbDur) return;
      this.dbT += e;
      let n = Math.exp(-e * 12),
        r = this.dbVel,
        i = this.dbPose;
      for (let t = 0; t < 19; t++) {
        let a = t * 4,
          o = t * 3;
        ((r[o] *= n), (r[o + 1] *= n), (r[o + 2] *= n));
        let s = r[o] * e * 0.5,
          c = r[o + 1] * e * 0.5,
          l = r[o + 2] * e * 0.5,
          u = i[a],
          d = i[a + 1],
          f = i[a + 2],
          p = i[a + 3],
          m = p * s + u + d * l - f * c,
          h = p * c - u * l + d + f * s,
          g = p * l + u * c - d * s + f,
          _ = p - u * s - d * c - f * l,
          v = 1 / Math.sqrt(m * m + h * h + g * g + _ * _);
        ((i[a] = m * v),
          (i[a + 1] = h * v),
          (i[a + 2] = g * v),
          (i[a + 3] = _ * v));
      }
      ((r[57] *= n),
        (r[58] *= n),
        (r[59] *= n),
        (i[76] += r[57] * e),
        (i[77] += r[58] * e),
        (i[78] += r[59] * e));
      let a = 1 - A(this.dbT / this.dbDur);
      s(t, t, i, a);
    }
    trackVelocity(e, t) {
      let n = this.lastVel,
        r = this.last,
        i = 1 / e;
      for (let e = 0; e < 19; e++) {
        let a = e * 4,
          o = -r[a],
          s = -r[a + 1],
          c = -r[a + 2],
          l = r[a + 3],
          u = t[a],
          d = t[a + 1],
          f = t[a + 2],
          p = t[a + 3];
        r[a] * u + r[a + 1] * d + r[a + 2] * f + l * p < 0 &&
          ((u = -u), (d = -d), (f = -f), (p = -p));
        let m = l * u + o * p + s * f - c * d,
          h = l * d - o * f + s * p + c * u,
          g = l * f + o * d - s * u + c * p;
        ((n[e * 3] = O(2 * m * i, -25, 25)),
          (n[e * 3 + 1] = O(2 * h * i, -25, 25)),
          (n[e * 3 + 2] = O(2 * g * i, -25, 25)));
      }
      ((n[57] = O((t[76] - r[76]) * i, -6, 6)),
        (n[58] = O((t[77] - r[77]) * i, -6, 6)),
        (n[59] = O((t[78] - r[78]) * i, -6, 6)),
        r.set(t));
    }
    lookAt(e, t) {
      let n = this.input,
        r = this.kin,
        i = this.act,
        a = this.rig.scale;
      if (((this.gazeT -= e), this.gazeT <= 0)) {
        let e = this.moveW < 0.2 && !i;
        ((this.gazeYaw =
          e && this.rand() < 0.7 ? (this.rand() - 0.5) * 1.3 : 0),
          (this.gazePitch = e ? (this.rand() - 0.6) * 0.25 : 0),
          (this.gazeT = 1.5 + this.rand() * 3.5));
      }
      let o = (1 - this.moveW) * (1 - this.aimW),
        s = this.aimW,
        c = i ? (i.layer === `full` || i.gesture ? 1 : 0.5) : 0,
        l = (n.lookYaw + this.gazeYaw * o) * (1 - s) + n.aimYaw * s,
        u = (n.lookPitch + this.gazePitch * o) * (1 - s) + n.aimPitch * s;
      ((l = O(j(l), -1.35, 1.35)),
        (u = O(u, -0.7, 0.6)),
        (this.headYaw = k(this.headYaw, l, 5, e)),
        (this.headPitch = k(this.headPitch, u, 5, e)));
      let d = O(n.lookWeight * (1 - c) + s * 0.95, 0, 1);
      if (d < 0.01) return;
      let f = Math.cos(this.headPitch);
      (F.set(
        Math.sin(this.headYaw) * f,
        Math.sin(this.headPitch),
        -Math.cos(this.headYaw) * f,
      ),
        P.set(0, 0, -1).applyQuaternion(r.gq[4]),
        L.setFromUnitVectors(P, F));
      let p = 2 * Math.acos(O(Math.abs(L.w), 0, 1)),
        m = 1.7,
        h = p > m ? m / p : 1;
      for (let e = 0; e < be.length; e++) {
        let n = (s > 0.5 ? Se : xe)[e];
        (R.identity().slerp(L, n * d * h),
          r.rotateGlobal(t, be[e], R),
          r.fkFrom(t, be[e], a));
      }
    }
    armsIK(e) {
      let t = this.kin,
        n = this.rig.scale,
        r = this.act,
        i = this.handIK[0].weight,
        a = this.handIK[1].weight,
        o = 0;
      if (r && r.gesture === `pray`) {
        let e = r.t - r.t0,
          t = r.t1 - r.t0;
        o = A(Math.min(e / 0.5, (t - e) / 0.5));
      }
      if (r && r.gesture === `phone`) {
        let i = A((r.t - r.t0) / 0.45);
        (P.copy(ce).multiplyScalar(n).applyQuaternion(t.gq[2]).add(t.gp[2]),
          Z(t, e, 0, P, ue, i, n),
          z.copy(t.gq[2]).multiply(le),
          Oe(t, e, 7, z, i, n));
      }
      o > 0.001 &&
        (P.copy(oe).multiplyScalar(n).applyQuaternion(t.gq[2]).add(t.gp[2]),
        V.set(-1, -0.6, 0.4),
        Z(t, e, 0, P, V, o, n),
        P.copy(se).multiplyScalar(n).applyQuaternion(t.gq[2]).add(t.gp[2]),
        V.set(1, -0.6, 0.4),
        Z(t, e, 1, P, V, o, n),
        z.copy(t.gq[2]).multiply(ae),
        Oe(t, e, 7, z, o, n),
        Oe(t, e, 10, z, o, n),
        (i = a = 0));
      for (let r = 0; r < 2; r++) {
        let o = this.handIK[r],
          s = r ? a : i;
        s <= 0.001 ||
          (o.pole ? V.copy(o.pole) : V.set(r ? 1 : -1, -0.8, 0.3),
          Z(t, e, r, o.pos, V, s, n),
          o.rot && Oe(t, e, r ? 10 : 7, o.rot, s, n));
      }
    }
    feetIK(e, t, n) {
      let r = this.kin,
        i = this.rig.scale;
      (B.copy(n.matrixWorld), ne.copy(B).invert());
      let a = B.elements[13],
        o = this.airW > 0.5 || !this.input.grounded,
        s = this.act,
        c = s && s.layer === `full` ? s : null,
        l = !o && (!c || ge.test(c.name)),
        u = l && this.moveW < 0.1 && (!c || _e.test(c.name)),
        d = this.rootYaw + this.yawOff,
        f = 0;
      for (let t = 0; t < 2; t++) {
        let n = t ? 16 : 13,
          s = this.feet[t],
          c = 0;
        if (this.groundAt && !o) {
          (P.copy(r.gp[n]).applyMatrix4(B),
            F.set(0, 0, -0.1 * i).applyQuaternion(r.gq[n]));
          let e = this.groundAt(P.x + F.x, P.z + F.z, a + 0.6),
            t = this.groundAt(P.x - F.x * 0.4, P.z - F.z * 0.4, a + 0.6);
          c = O(Math.max(e, t) - a, -0.45, 0.45);
        }
        ((s.offset = k(s.offset, c, 18, e)),
          (pe[t] = s.offset),
          (f = Math.min(f, s.offset)));
      }
      ((this.pelvisOff = k(this.pelvisOff, o ? 0 : f, 12, e)),
        Math.abs(this.pelvisOff) > 1e-4 &&
          ((t[77] += this.pelvisOff / i), r.fk(t, i)));
      let p = me;
      for (let n = 0; n < 2; n++) {
        let a = this.feet[n],
          o = n ? 16 : 13,
          s = n ? 14 : 11,
          c = n ? 15 : 12,
          f = r.gp[o],
          m = te.copy(f);
        ((m.y += pe[n] - this.pelvisOff), I.copy(m).applyMatrix4(B));
        let h = l && a.contact > 0.55;
        if (
          (h && !a.locked && !a.stepping
            ? ((a.locked = !0), a.pos.copy(I), (a.yaw = d))
            : !h && a.locked && (a.locked = !1),
          u &&
            a.locked &&
            !a.stepping &&
            !this.feet[p[n]].stepping &&
            this.time - this.feet[p[n]].lastStep > 0.12)
        ) {
          let e = Math.hypot(a.pos.x - I.x, a.pos.z - I.z),
            t = Math.abs(j(d - a.yaw));
          (e > 0.11 * i || t > 0.55) &&
            ((a.stepping = !0),
            (a.stepU = 0),
            a.from.copy(a.pos),
            (a.locked = !1));
        }
        if (a.stepping) {
          a.stepU += e / 0.3;
          let t = A(a.stepU);
          (a.pos.lerpVectors(a.from, I, t),
            (a.pos.y += Math.sin(Math.min(1, a.stepU) * Math.PI) * 0.075 * i),
            (a.lock = 1),
            a.stepU >= 1 &&
              ((a.stepping = !1),
              (a.locked = !0),
              a.pos.copy(I),
              (a.yaw = d),
              (a.lastStep = this.time),
              this.onFootstep?.(n, 0.2)));
        } else
          a.lock = k(
            a.lock,
            +!!a.locked,
            a.locked ? 30 : this.moveW > 0.3 ? 22 : 10,
            e,
          );
        let g = a.lock;
        if (g > 0.001) {
          P.copy(a.pos).applyMatrix4(ne);
          let e = P.distanceTo(m);
          !a.stepping && e > 0.4 * i
            ? ((a.locked = !1), (a.lock = 0))
            : (a.stepping || (P.y = m.y), m.lerp(P, g));
        }
        let _ = m.x - f.x,
          v = m.y - f.y,
          y = m.z - f.z,
          b = a.stepping
            ? j(a.yaw - d) * (1 - A(a.stepU))
            : g > 0.001
              ? j(a.yaw - d) * g
              : 0;
        (_ * _ + v * v + y * y > 1e-8 || Math.abs(b) > 1e-4) &&
          (L.copy(r.gq[o]),
          Math.abs(b) > 1e-4 && L.premultiply(R.setFromAxisAngle(ie, -b)),
          re.set(1, 0, 0).applyQuaternion(r.gq[s]),
          w(r, t, s, c, o, m, re, 1),
          r.setGlobal(t, o, L),
          r.fkFrom(t, s, i));
      }
    }
    extras(e) {
      let t = this.rig,
        n = this.act,
        r = !!n && ve.test(n.name),
        i =
          this.guardW > 0.3 || r
            ? 1
            : n?.gesture === `pray`
              ? 0
              : 0.2 + O(this.spd, 0, 6) * 0.06;
      ((this.fist = k(this.fist, Math.min(1, i), 12, e)),
        t.fingersL && t.fingersL.rotation.set(0, 0, this.fist * 1.5),
        t.fingersR && t.fingersR.rotation.set(0, 0, -this.fist * 1.5),
        (this.blinkT -= e));
      let a = 0;
      if (this.blinkP >= 0) {
        this.blinkP += e;
        let t = this.blinkP;
        ((a = t < 0.06 ? t / 0.06 : t < 0.16 ? 1 - (t - 0.06) / 0.1 : 0),
          t >= 0.16 && (this.blinkP = -1));
      } else
        this.blinkT <= 0 &&
          ((this.blinkP = 0),
          (this.blinkT = 2 + this.rand() * 3.5),
          this.rand() < 0.15 && (this.blinkT = 0.25));
      let o = this.dead
          ? 1
          : n?.gesture === `pray`
            ? 0.85
            : n && n.name.startsWith(`knockdown`)
              ? 0.6
              : 0,
        s = Math.max(0.001, a, o);
      if ((t.lidL?.scale.set(1, s, 1), t.lidR?.scale.set(1, s, 1), t.hair)) {
        let n =
          -0.2 -
          this.spd * 0.06 +
          Math.sin(this.time * 1.7) * 0.02 -
          Math.max(0, -this.input.verticalSpeed) * 0.03;
        ((this.hairV +=
          ((n - this.hairA) * 80 - this.hairV * 8) * e -
          this.input.turnRate * 0.3 * e),
          (this.hairA += this.hairV * e),
          t.hair.rotation.set(
            this.hairA +
              Math.sin(this.phase * D * 2) * 0.07 * O(this.spd / 4, 0, 1),
            0,
            O(-this.input.turnRate * 0.05, -0.3, 0.3),
          ));
      }
    }
  },
  pe = new Float32Array(2),
  me = [1, 0],
  he = {},
  ge =
    /^(stop_|idle|jab|cross|hook|uppercut|wave|cheer|point|clap|bow|fight|sit_|stand_up|pray|phone)/,
  _e = /^(idle|pray|phone|stop_)/,
  ve = /^(jab|cross|hook|uppercut|fight)/,
  ye = new Float32Array(4),
  be = [1, 2, 3, 4],
  xe = [0.1, 0.18, 0.3, 0.42],
  Se = [0.3, 0.35, 0.15, 0.2],
  U = new Float32Array(19);
for (let e of [5, 6, 7, 8, 9, 10, 17, 18]) U[e] = 1;
((U[2] = 0.35), (U[3] = 0.3));
var W = new n(),
  G = new n(),
  K = new n(),
  q = new n(),
  J = new n(),
  Y = new e(),
  X = new e(),
  Ce = new e(),
  we = new r(),
  Te = new r(),
  Ee = new n(0, 0, -1),
  De = 0.12;
function Z(e, t, n, r, i, a, o) {
  let s = n ? 8 : 5,
    c = n ? 9 : 6,
    l = n ? 10 : 7;
  z.copy(e.gq[l]);
  let u = e.off[c],
    d = e.off[l],
    f = u.length(),
    p = d.length();
  W.copy(u).cross(Ee).normalize();
  let m = f + p,
    h = m * 0.03,
    g = m - h,
    _ = G.copy(r).sub(e.gp[s]).length();
  (_ > g && (_ = g + h * (1 - Math.exp(-(_ - g) / h))),
    (_ = Math.max(Math.abs(f - p) + 0.001, _)));
  let v = O((_ * _ - f * f - p * p) / (2 * f * p), -1, 1);
  K.copy(d).multiplyScalar(1 / p);
  let y = K.dot(W);
  q.copy(K).addScaledVector(W, -y);
  let b = q.length();
  J.copy(u).multiplyScalar(1 / f);
  let x = Math.atan2(I.copy(J).cross(q).dot(W), J.dot(q)),
    S = Math.max(De, Math.acos(O(v / Math.max(1e-4, b), -1, 1))) - x;
  (Y.setFromAxisAngle(W, S), G.copy(d).applyQuaternion(Y).add(u));
  let C = G.length();
  if (
    (G.multiplyScalar(1 / C),
    K.copy(u).addScaledVector(G, -u.dot(G)).normalize(),
    J.copy(G).cross(K),
    we.makeBasis(G, K, J),
    G.copy(r).sub(e.gp[s]),
    G.lengthSq() < 1e-10)
  )
    return;
  if (
    (G.normalize(),
    q.copy(i).addScaledVector(G, -i.dot(G)),
    q.lengthSq() < 1e-8 && q.set(0, -1, 0).addScaledVector(G, -G.y),
    q.normalize(),
    J.copy(G).cross(q),
    Te.makeBasis(G, q, J),
    Te.multiply(we.transpose()),
    X.setFromRotationMatrix(Te),
    a < 1)
  ) {
    X.copy(Ce.copy(e.gq[s]).slerp(X, a));
    let n = c * 4;
    (Ce.set(t[n], t[n + 1], t[n + 2], t[n + 3]).slerp(Y, a), Y.copy(Ce));
  }
  e.setGlobal(t, s, X);
  let w = c * 4;
  ((t[w] = Y.x),
    (t[w + 1] = Y.y),
    (t[w + 2] = Y.z),
    (t[w + 3] = Y.w),
    e.fkFrom(t, s, o),
    e.setGlobal(t, l, z),
    Ae(e, t, l, o));
}
function Oe(e, t, n, r, i, a) {
  (R.copy(e.gq[n]).slerp(r, i), e.setGlobal(t, n, R), Ae(e, t, n, a));
}
var Q = new e(),
  ke = new e();
function Ae(e, t, n, r) {
  let i = u[n];
  (ke.copy(e.gq[n]), Q.copy(e.gq[i]).invert().multiply(ke));
  let a = I.copy(e.off[n]).normalize(),
    o = Q.x * a.x + Q.y * a.y + Q.z * a.z,
    s = Q.w,
    c = a.x * o,
    l = a.y * o,
    d = a.z * o,
    f = Math.sqrt(c * c + l * l + d * d + s * s);
  if (f < 1e-6 || Math.abs(o) < 1e-4) return;
  s < 0 && ((c = -c), (l = -l), (d = -d), (s = -s));
  let p = i * 4,
    m = t[p],
    h = t[p + 1],
    g = t[p + 2],
    _ = t[p + 3],
    v = c / f,
    y = l / f,
    b = d / f,
    x = s / f;
  ((t[p] = _ * v + m * x + h * b - g * y),
    (t[p + 1] = _ * y - m * b + h * x + g * v),
    (t[p + 2] = _ * b + m * y - h * v + g * x),
    (t[p + 3] = _ * x - m * v - h * y - g * b),
    e.fkBone(t, i, r),
    e.setGlobal(t, n, ke),
    e.fkBone(t, n, r));
}
function je(e, t, n, r, i, a) {
  let o = a * 0.5,
    s = Math.sin(o),
    c = n * s,
    l = r * s,
    u = i * s,
    d = Math.cos(o),
    f = t * 4,
    p = e[f],
    m = e[f + 1],
    h = e[f + 2],
    g = e[f + 3];
  ((e[f] = d * p + c * g + l * h - u * m),
    (e[f + 1] = d * m - c * h + l * g + u * p),
    (e[f + 2] = d * h + c * m - l * p + u * g),
    (e[f + 3] = d * g - c * p - l * m - u * h));
}
function $(e, t, n, r, i, a) {
  let o = a * 0.5,
    s = Math.sin(o),
    c = n * s,
    l = r * s,
    u = i * s,
    d = Math.cos(o),
    f = t * 4,
    p = e[f],
    m = e[f + 1],
    h = e[f + 2],
    g = e[f + 3];
  ((e[f] = g * c + p * d + m * u - h * l),
    (e[f + 1] = g * l - p * u + m * d + h * c),
    (e[f + 2] = g * u + p * l - m * c + h * d),
    (e[f + 3] = g * d - p * c - m * l - h * u));
}
var Me = new t();
function Ne(e, t, n, r, i) {
  (Me.set(n, r, i, `XYZ`), L.setFromEuler(Me));
  let a = t * 4;
  ((e[a] = L.x), (e[a + 1] = L.y), (e[a + 2] = L.z), (e[a + 3] = L.w));
}
export {
  E as ACTION_DEFAULTS,
  fe as Animator,
  o as POSE_LEN,
  T as makeAnimInput,
};
