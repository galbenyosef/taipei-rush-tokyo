// tokyo/assets/region-tokyo-BcM3fReU 175 — math
// Lines 73527-73715 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var jV = { x: 0, z: 0, h: 0 },
  MV = new Float32Array(16),
  NV = new M(),
  PV = new c(),
  FV = new d(),
  IV = new k(),
  LV = new k(1, 1, 1),
  RV = class {
    ctx;
    crowd;
    looks;
    poseBase;
    active = !1;
    x = 0;
    z = 0;
    heading = 0;
    templeId = ``;
    path = null;
    s = 0;
    target = -1;
    external = !1;
    speed = 0.75;
    t = 0;
    slots = [];
    mikoshiSlot = -1;
    holdRelease = null;
    holdT = 0;
    crowds = [];
    crowdAtS = -1e9;
    constructor(e, t, n, r) {
      ((this.ctx = e), (this.crowd = t), (this.looks = n), (this.poseBase = r));
    }
    start(e, t, n) {
      let r = this.crowd();
      if (!r || e.length < 2) return !1;
      (this.stop(),
        (this.path = new kV(e, t)),
        (this.s = 0),
        (this.target = -1),
        (this.external = !!n.external),
        (this.speed = n.speed ?? 0.75),
        (this.templeId = n.templeId),
        (this.active = !0),
        (this.mikoshiSlot = r.actor()));
      let i = AV.length + 1 + 12;
      for (let e = 0; e < i; e++) this.slots.push(r.actor());
      return (this.update(0), !0);
    }
    stop() {
      let e = this.crowd();
      if (e) {
        this.mikoshiSlot >= 0 && e.releaseActor(this.mikoshiSlot);
        for (let t of this.slots) t >= 0 && e.releaseActor(t);
      }
      ((this.slots.length = 0),
        (this.mikoshiSlot = -1),
        this.holdRelease?.(),
        (this.holdRelease = null));
      for (let e of this.crowds) e();
      ((this.crowds.length = 0), (this.active = !1), (this.path = null));
    }
    drive(e) {
      this.target = e;
    }
    setHead(e, t) {
      this.path &&
        ((this.target = this.path.project(e, t, this.s)),
        this.external && (this.s = this.target));
    }
    update(e) {
      if (!this.active || !this.path) return;
      let t = this.crowd();
      if (!t) return;
      ((this.t += e),
        this.target >= 0
          ? this.external ||
            (this.s +=
              Math.max(-1.5, Math.min(1.5, this.target - this.s)) *
              Math.min(1, e * 1.5))
          : (this.s += this.speed * e * (0.75 + 0.25 * Math.sin(this.t * 0.4))),
        !this.path.closed &&
          this.s >= this.path.len &&
          (this.s = this.path.len));
      let n = this.path.at(this.s, jV);
      ((this.x = n.x), (this.z = n.z));
      let r = n.h - this.heading;
      ((r = Math.atan2(Math.sin(r), Math.cos(r))),
        (this.heading += r * Math.min(1, e * 1.2 + +(e === 0))));
      let i = this.heading,
        a = Math.sin(i),
        o = -Math.cos(i),
        s = Math.cos(i),
        c = Math.sin(i),
        l = this.ctx.plan.groundHeight(this.x, this.z),
        u = this.t * 1.65 * Math.PI,
        d = 0.09 * Math.abs(Math.sin(u)),
        f = this.poseBase(),
        p = this.looks(),
        m = this.ctx.camera.position,
        h = (m.x - this.x) ** 2 + (m.z - this.z) ** 2 < 2025;
      (FV.set(
        0.035 * Math.sin(u * 0.5 + 1),
        -i,
        0.05 * Math.sin(u * 0.5),
        `YXZ`,
      ),
        PV.setFromEuler(FV),
        IV.set(this.x, l + d, this.z),
        NV.compose(IV, PV, LV).toArray(MV),
        t.setActorM(this.mikoshiSlot, t.prop(0), MV));
      for (let e = 0; e < AV.length; e++) {
        let [n, r] = AV[e],
          m = p.bearer[e % p.bearer.length],
          g = f + ((Math.floor(u / Math.PI) + e) & 1),
          _ = this.x + s * n + a * r,
          v = this.z + c * n + o * r;
        t.setActor(this.slots[e], t.geo(m, g, h), _, l + d * 0.6, v, i);
      }
      let g = AV.length;
      {
        let e = this.x + a * 4.2,
          n = this.z + o * 4.2;
        t.setActor(
          this.slots[g++],
          t.geo(p.leader, f + 2, h),
          e,
          l,
          n,
          i + Math.PI,
        );
      }
      for (let e = 0; e < 12; e++) {
        let n = Math.floor(e / 4),
          r = (e % 4) - 1.5,
          u = 4.2 + n * 1.6 + ((e * 0.37) % 0.6),
          d = this.x - a * u + s * r * 1.1,
          m = this.z - o * u + c * r * 1.1,
          h = p.follower[e % p.follower.length],
          _ = Math.floor(this.t / 3 + e * 0.7) % 4 == 0,
          v = Math.floor(((this.t * this.speed) / 1.3) * 8 + e * 3) % 8;
        t.setActor(
          this.slots[g++],
          t.geo(h, _ ? f + 2 : Math.min(v, t.frames - 1)),
          d,
          l,
          m,
          i,
        );
      }
      if (((this.holdT -= e), this.holdT <= 0)) {
        this.holdT = 1;
        let e = this.holdRelease;
        try {
          this.holdRelease =
            this.ctx.traffic?.holdArea?.(this.x, this.z, 16) ?? null;
        } catch {
          this.holdRelease = null;
        }
        e?.();
      }
      let _ = this.ctx.player?.position;
      if (
        _ &&
        (_.x - this.x) ** 2 + (_.z - this.z) ** 2 < 19600 &&
        Math.abs(this.s - this.crowdAtS) > 40
      ) {
        ((this.crowdAtS = this.s),
          this.crowds.length >= 2 && this.crowds.shift()?.());
        try {
          let e = this.x + a * 14 + s * 6,
            t = this.z + o * 14 + c * 6,
            n = this.ctx.peds?.crowd?.(
              e,
              t,
              4,
              7,
              [`auntie`, `uncle`, `student`, `tourist`],
              {
                mode: `watch`,
                lookX: this.x + a * 14,
                lookZ: this.z + o * 14,
                dress: `festival`,
              },
            );
          n && this.crowds.push(n);
        } catch {}
      }
    }
  };
