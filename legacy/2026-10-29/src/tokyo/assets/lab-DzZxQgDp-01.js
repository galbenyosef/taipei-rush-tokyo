// tokyo/assets/lab-DzZxQgDp 01 — speed
// Lines 1-341 of readable/tokyo/assets/lab-DzZxQgDp.pretty.js (statement-aligned).
import {
  En as e,
  J as t,
  Rn as n,
  Tt as r,
  g as i,
  h as a,
  jt as o,
  m as s,
  rr as c,
  v as l,
  zn as u,
} from "./three-x0mFGRTI.js";
import { cn as d } from "./engine-wUBYs8Z3.js";
import { bindRig as bindRig } from "./rig-BjRdQXtM.js";
import { Animator as Animator } from "./animator-B5fCfINc.js";
import { loadAnimLibrary as loadAnimLibrary } from "./clips-GNiXKOuW.js";
import { a as h, m as g, n as _, s as v } from "./characters-CbxAZUc_.js";
import { qt as y } from "./actors-qKVitB-C.js";
var b = 1.75,
  x = 4.5,
  S = 7.2,
  C = 2.3,
  w = Math.PI / 2,
  T = {
    showcase: [
      { t: 0, speed: 0 },
      { t: 2.5, speed: b },
      { t: 5, speed: x },
      { t: 6.2, turn: 0.45 },
      { t: 7, turn: -0.9 },
      { t: 7.8, turn: 0.45 },
      { t: 8.6, speed: S },
      { t: 9.8, jump: !0 },
      { t: 11.3, speed: 0 },
      { t: 13, turn: Math.PI },
      { t: 14.6, speed: b },
      { t: 16.3, speed: 0 },
      { t: 17.4, jump: !0 },
      { t: 19, guard: 1 },
      { t: 19.5, play: `jab` },
      { t: 20.1, play: `cross` },
      { t: 20.8, play: `hook` },
      { t: 21.6, play: `uppercut` },
      { t: 22.5, play: `kick` },
      { t: 24, guard: 0 },
      { t: 24.5, hit: [0, -1, 1] },
      { t: 26.2, play: `wave` },
      { t: 30.3, play: `pray` },
      { t: 34.5, speed: 0 },
    ],
    accel: [
      { t: 0, speed: 0 },
      { t: 1.2, speed: b },
      { t: 3.2, speed: x },
      { t: 5.2, speed: S },
      { t: 7.2, speed: 0 },
      { t: 9.5, speed: 0 },
    ],
    walk: [
      { t: 0, speed: b },
      { t: 6, speed: b },
    ],
    run: [
      { t: 0, speed: x },
      { t: 6, speed: x },
    ],
    sprint: [
      { t: 0, speed: S },
      { t: 6, speed: S },
    ],
    stops: [
      { t: 0, speed: x },
      { t: 2, speed: 0 },
      { t: 4, speed: b },
      { t: 6, speed: 0 },
      { t: 8, speed: S },
      { t: 10, speed: 0 },
      { t: 12.5, speed: 0 },
    ],
    turns: [
      { t: 0, speed: x },
      { t: 1.5, turn: w },
      { t: 3, turn: -w },
      { t: 4.5, speed: 0 },
      { t: 6, turn: w },
      { t: 7.5, turn: Math.PI },
      { t: 9, turn: -w },
      { t: 10.5, speed: 0 },
    ],
    jumps: [
      { t: 0, speed: 0 },
      { t: 1, jump: !0 },
      { t: 3, speed: x },
      { t: 4.2, jump: !0 },
      { t: 6, speed: S },
      { t: 7, jump: !0 },
      { t: 8.5, speed: 0 },
      { t: 10, jump: !0, vy: 9 },
      { t: 13, speed: 0 },
    ],
    fight: [
      { t: 0, speed: 0, guard: 1 },
      { t: 1, play: `jab` },
      { t: 1.55, play: `jab` },
      { t: 2.1, play: `cross` },
      { t: 2.9, play: `hook` },
      { t: 3.7, play: `uppercut` },
      { t: 4.6, play: `kick` },
      { t: 6, speed: b },
      { t: 6.6, play: `jab` },
      { t: 7.3, play: `cross` },
      { t: 8.2, speed: 0 },
      { t: 9, hit: [0, -1, 0.6] },
      { t: 10, hit: [1, 0, 0.6] },
      { t: 11, hit: [0, -1, 1.1] },
      { t: 13, guard: 0 },
      { t: 14, speed: 0 },
    ],
    falls: [
      { t: 0, speed: 0 },
      { t: 1, play: `knockdown_back` },
      { t: 3.5, play: `getup_back` },
      { t: 8, play: `knockdown_front` },
      { t: 10.5, play: `getup_front` },
      { t: 15, play: `stagger` },
      { t: 17, die: !0 },
      { t: 20, speed: 0 },
    ],
    aim: [
      { t: 0, speed: 0, aim: 1 },
      { t: 1, speed: C, moveDir: 0 },
      { t: 2.5, moveDir: w, speed: 1.3 },
      { t: 4, moveDir: Math.PI, speed: 1.5 },
      { t: 5.5, moveDir: -w, speed: 1.3 },
      { t: 7, moveDir: w / 2, speed: 1.9 },
      { t: 8.5, moveDir: -w * 1.5, speed: 1.5 },
      { t: 10, speed: 0 },
      { t: 11, aim: 0 },
      { t: 12, speed: 0 },
    ],
    emotes: [
      { t: 0, speed: 0 },
      { t: 1, play: `wave` },
      { t: 5.2, play: `cheer` },
      { t: 7.3, play: `point` },
      { t: 9.4, play: `clap` },
      { t: 13.2, play: `bow` },
      { t: 16.4, play: `pray` },
      { t: 21, play: `dance_macarena` },
      { t: 29, play: `dance_twist` },
      { t: 35, play: `dance_chicken` },
      { t: 42, play: `phone` },
      { t: 46, play: `sit_down` },
      { t: 48.6, play: `sit_idle` },
      { t: 51, play: `stand_up` },
      { t: 53.5, speed: 0 },
    ],
    idle: [
      { t: 0, speed: 0 },
      { t: 30, speed: 0 },
    ],
  },
  E = class {
    sink;
    ground;
    loop;
    root = new t();
    pos = new c();
    heading = 0;
    wantHeading = 0;
    speed = 0;
    wantSpeed = 0;
    vy = 0;
    grounded = !0;
    turnRate = 0;
    accel = 0;
    t = 0;
    cues;
    ci = 0;
    lastSpeed = 0;
    aim = 0;
    guard = 0;
    moveDir = 0;
    look = [0, -0.05];
    looped = !1;
    constructor(e, t, n = () => 0, r = !0) {
      ((this.sink = e), (this.ground = n), (this.loop = r), (this.cues = t));
    }
    reset(e, t, n) {
      (this.pos.set(e, this.ground(e, t), t),
        (this.heading = this.wantHeading = n),
        (this.speed = this.wantSpeed = 0),
        (this.vy = 0),
        (this.grounded = !0),
        (this.aim = this.guard = 0),
        (this.moveDir = 0),
        (this.t = 0),
        (this.ci = 0),
        this.root.position.copy(this.pos),
        (this.root.rotation.y = -n),
        this.root.updateMatrixWorld());
    }
    get duration() {
      return this.cues[this.cues.length - 1].t;
    }
    update(e) {
      this.t += e;
      let t = this.cues;
      for (; this.ci < t.length && t[this.ci].t <= this.t;) {
        let e = t[this.ci++];
        (e.speed !== void 0 && (this.wantSpeed = e.speed),
          e.heading !== void 0 && (this.wantHeading = e.heading),
          e.turn !== void 0 && (this.wantHeading += e.turn),
          e.jump &&
            this.grounded &&
            ((this.vy = (e.vy ?? 5.8) + Math.min(1, this.speed / S) * 0.7),
            (this.grounded = !1)),
          e.play && this.sink.play(e.play, e.layer),
          e.aim !== void 0 && (this.aim = e.aim),
          e.guard !== void 0 && (this.guard = e.guard),
          e.moveDir !== void 0 && (this.moveDir = e.moveDir),
          e.hit && this.sink.hit(e.hit[0], e.hit[1], e.hit[2]),
          e.look && (this.look = e.look),
          e.die && this.sink.die());
      }
      let n = this.sink.rootMotion(),
        r = this.sink.busy();
      if (n) {
        let e = Math.cos(this.heading),
          t = Math.sin(this.heading);
        ((this.pos.x += n.x * e - n.z * t),
          (this.pos.z += n.x * t + n.z * e),
          (this.heading += n.yaw),
          (this.wantHeading += n.yaw));
      }
      let i = O(this.wantHeading - this.heading),
        a = Math.min(1, this.speed / S),
        o = this.grounded ? 14 + -7.5 * a : 3,
        s = r
          ? 0
          : Math.max(-o * e, Math.min(o * e, i * (1 - Math.exp(-18 * e)))),
        c = this.heading;
      this.heading = O(this.heading + s);
      let l =
        this.wantSpeed *
        Math.max(
          0.2,
          Math.cos(
            Math.min(Math.abs(O(this.wantHeading - this.heading)), Math.PI / 2),
          ),
        );
      (this.wantSpeed === 0 || r) && (l = 0);
      let u = this.grounded
          ? l > this.speed + 0.05
            ? l > 4.5
              ? 11
              : 17
            : 21
          : 2.5,
        d = l - this.speed;
      ((this.speed += Math.max(-u * e, Math.min(u * e, d))),
        r && this.grounded && (this.speed = 0));
      let f = this.heading + (this.aim > 0.5 ? this.moveDir : 0);
      ((this.pos.x += Math.sin(f) * this.speed * e),
        (this.pos.z += -Math.cos(f) * this.speed * e));
      let p = this.ground(this.pos.x, this.pos.z);
      this.grounded
        ? (this.pos.y = p)
        : ((this.vy -= 21 * e),
          (this.pos.y += this.vy * e),
          this.pos.y <= p &&
            this.vy <= 0 &&
            ((this.pos.y = p),
            this.sink.land(-this.vy),
            (this.grounded = !0),
            (this.vy = 0)));
      let m = O(this.heading - c) / Math.max(e, 1e-4);
      ((this.turnRate += (m - this.turnRate) * (1 - Math.exp(-12 * e))),
        (this.accel +=
          ((this.speed - this.lastSpeed) / Math.max(e, 1e-4) - this.accel) *
          (1 - Math.exp(-8 * e))),
        (this.lastSpeed = this.speed),
        this.root.position.copy(this.pos),
        (this.root.rotation.y = -this.heading),
        this.root.updateMatrixWorld(),
        this.sink.input(this),
        this.loop &&
          this.t >= this.duration &&
          ((this.t = 0), (this.ci = 0), (this.looped = !0)));
    }
  };
function D(e) {
  return {
    input(t) {
      let n = e.input;
      ((n.speed = t.speed),
        (n.dirX = t.aim > 0.5 ? Math.sin(t.moveDir) : 0),
        (n.dirZ = t.aim > 0.5 ? -Math.cos(t.moveDir) : -1),
        (n.turnRate = t.turnRate),
        (n.accel = t.accel),
        (n.grounded = t.grounded),
        (n.verticalSpeed = t.vy),
        (n.aim = t.aim),
        (n.guard = t.guard),
        (n.lookYaw = t.look[0]),
        (n.lookPitch = t.look[1]));
    },
    land: (t) => e.land(t),
    play: (t, n) => void e.play(t, n ? { layer: n } : {}),
    hit: (t, n, r) => e.hit(t, n, r),
    die: () => e.die(!1),
    rootMotion: () => {
      let t = e.rootDelta;
      return t.x || t.z || t.yaw ? t : null;
    },
    busy: () => {
      let t = e.action;
      return (
        !!t &&
        /^(roll|jump_over|dodge|knockdown|getup|stagger|sit|stand_up|bow|dance|pray|kick|wave|point|cheer|clap|idle_stretch)/.test(
          t,
        )
      );
    },
  };
}
function O(e) {
  return (
    (e > Math.PI || e < -Math.PI) &&
      (e = Number.isFinite(e)
        ? ((((e + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) -
          Math.PI
        : 0),
    e
  );
}
var k = -250.6,
  A = -812,
  j = 1.5,
  M = 2.6;
