// tokyo/assets/region-tokyo-A7LxHjud 339 — math
// Lines 122322-122860 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var SAe = { x: 0, z: 0, h: 0 },
  kY = new Float32Array(16),
  CAe = new p(),
  AY = new o(),
  jY = new ie(),
  MY = new E(),
  wAe = new E(1, 1, 1),
  TAe = class {
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
        (this.path = new xAe(e, t)),
        (this.s = 0),
        (this.target = -1),
        (this.external = !!n.external),
        (this.speed = n.speed ?? 0.75),
        (this.templeId = n.templeId),
        (this.active = !0),
        (this.mikoshiSlot = r.actor()));
      let i = OY.length + 1 + 12;
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
      let n = this.path.at(this.s, SAe);
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
      (jY.set(
        0.035 * Math.sin(u * 0.5 + 1),
        -i,
        0.05 * Math.sin(u * 0.5),
        `YXZ`,
      ),
        AY.setFromEuler(jY),
        MY.set(this.x, l + d, this.z),
        CAe.compose(MY, AY, wAe).toArray(kY),
        t.setActorM(this.mikoshiSlot, t.prop(0), kY));
      for (let e = 0; e < OY.length; e++) {
        let [n, r] = OY[e],
          m = p.bearer[e % p.bearer.length],
          g = f + ((Math.floor(u / Math.PI) + e) & 1),
          _ = this.x + s * n + a * r,
          v = this.z + c * n + o * r;
        t.setActor(this.slots[e], t.geo(m, g, h), _, l + d * 0.6, v, i);
      }
      let g = OY.length;
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
  },
  EAe = 260,
  NY = 1.3,
  DAe = class {
    ctx;
    crowd;
    walkFrames;
    walkers = [];
    node = -1;
    hx = 0;
    hz = 0;
    arm = { N: 0, S: 0, W: 0, E: 0 };
    gy = 0;
    rng = new le(23594);
    wasWalk = !1;
    active = !1;
    want = 0;
    wantT = 0;
    looksDry = [];
    looksRain = [];
    tally = [0, 0, 0, 0];
    max;
    constructor(e, t, n, r) {
      ((this.ctx = e), (this.crowd = t), (this.walkFrames = n), (this.max = r));
      let i = e.plan,
        a = 3;
      for (let e of i.nodes) {
        let t = Math.hypot(e.x - Ec.x, e.z - Ec.z);
        e.signal && t < a && ((a = t), (this.node = e.id));
      }
      if (this.node < 0) return;
      let o = i.nodes[this.node];
      ((this.hx = o.halfX), (this.hz = o.halfZ));
      for (let e of o.roads)
        e.axis === `z`
          ? (e.from < o.z - 0.5 &&
              (this.arm.N = Math.max(this.arm.N, e.halfWidth)),
            e.to > o.z + 0.5 &&
              (this.arm.S = Math.max(this.arm.S, e.halfWidth)))
          : (e.from < o.x - 0.5 &&
              (this.arm.W = Math.max(this.arm.W, e.halfWidth)),
            e.to > o.x + 0.5 &&
              (this.arm.E = Math.max(this.arm.E, e.halfWidth)));
      this.gy = i.groundHeight(o.x, o.z);
    }
    setLooks(e) {
      let t = (e) => {
        let t = [];
        for (let [n, r] of e)
          for (let e = 0; e < Math.max(1, Math.round(r * 4)); e++) t.push(n);
        return t;
      };
      ((this.looksDry = t(e.dry)),
        (this.looksRain = t(e.rain.length ? e.rain : e.dry)));
    }
    get count() {
      return this.walkers.length;
    }
    dump() {
      return this.walkers.map((e) => ({
        st: e.st,
        x: +e.x.toFixed(1),
        z: +e.z.toFixed(1),
        c: e.corner,
        to: e.route.to,
      }));
    }
    get crossing() {
      let e = 0;
      for (let t of this.walkers) t.st >= 2 && e++;
      return e;
    }
    sx(e) {
      return e === 1 || e === 2 ? 1 : -1;
    }
    sz(e) {
      return e >= 2 ? 1 : -1;
    }
    aZ(e) {
      return this.sz(e) < 0 ? this.arm.N : this.arm.S;
    }
    aX(e) {
      return this.sx(e) < 0 ? this.arm.W : this.arm.E;
    }
    route(e, t, n) {
      let r = Ec.x,
        i = Ec.z,
        a = this.rng,
        o = n.p,
        s = this.sx(e),
        c = this.sz(e),
        l = this.sx(t),
        u = this.sz(t);
      if (s !== l && c !== u) {
        let n = a.range(-2.6, 2.6),
          d = -s,
          f = -(-c) * Math.SQRT1_2 * n,
          p = d * Math.SQRT1_2 * n,
          m = [
            r + s * Math.max(this.aZ(e) + 0.3, s * f + this.aZ(e) + 0.3),
            i + c * Math.max(this.aX(e) + 0.3, c * p + this.aX(e) + 0.3),
          ],
          h = [
            r + l * Math.max(this.aZ(t) + 0.3, l * f + this.aZ(t) + 0.3),
            i + u * Math.max(this.aX(t) + 0.3, u * p + this.aX(t) + 0.3),
          ],
          g = a.range(0.6, 3.2);
        o.set([
          m[0] + s * g * 0.7,
          m[1] + c * g * 0.7,
          m[0],
          m[1],
          h[0],
          h[1],
          h[0] + l * a.range(0.8, 2.6),
          h[1] + u * a.range(0.8, 2.6),
        ]);
      } else if (c === u) {
        let e = i + c * (this.hz + 1.75) + a.range(-1.25, 1.25),
          t = c < 0 ? this.arm.N : this.arm.S;
        o.set([
          r + s * (t + a.range(0.6, 3.4)),
          e + c * a.range(0, 1.5),
          r + s * (t + 0.2),
          e,
          r + l * (t + 0.2),
          e,
          r + l * (t + a.range(0.8, 3)),
          e + c * a.range(0, 1.5),
        ]);
      } else {
        let e = r + s * (this.hx + 1.75) + a.range(-1.25, 1.25),
          t = s < 0 ? this.arm.W : this.arm.E;
        o.set([
          e + s * a.range(0, 1.5),
          i + c * (t + a.range(0.6, 3.4)),
          e,
          i + c * (t + 0.2),
          e,
          i + u * (t + 0.2),
          e + s * a.range(0, 1.5),
          i + u * (t + a.range(0.8, 3)),
        ]);
      }
      let d = n.s;
      for (let e = 1; e < 4; e++)
        d[e] =
          d[e - 1] +
          Math.hypot(o[e * 2] - o[e * 2 - 2], o[e * 2 + 1] - o[e * 2 - 1]);
      ((n.to = t), (n.heading = Math.atan2(o[4] - o[2], -(o[5] - o[3]))));
    }
    nextRoute(e, t) {
      let n = this.tally;
      n.fill(0);
      for (let e of this.walkers) n[e.route.to]++;
      let r = 3 / (1 + n[(e + 1) % 4] * 0.08),
        i = 3 / (1 + n[(e + 3) % 4] * 0.08),
        a = 2 / (1 + n[(e + 2) % 4] * 0.08),
        o = this.rng.next() * (r + i + a);
      this.route(
        e,
        o < r ? (e + 1) % 4 : o < r + i ? (e + 3) % 4 : (e + 2) % 4,
        t,
      );
    }
    spawn(e, t) {
      let n = this.crowd();
      if (!n) return;
      let r = n.actor();
      if (r < 0) return;
      let i = e % 4,
        a = t ? this.looksRain : this.looksDry,
        o = {
          slot: r,
          look: a.length ? a[this.rng.int(0, a.length - 1)] : 0,
          corner: i,
          st: 1,
          d: 0,
          route: {
            to: i,
            p: new Float32Array(8),
            s: new Float32Array(4),
            heading: 0,
          },
          speed: this.rng.range(1.3, 1.7),
          delay: 0,
          pause: 0,
          gait: this.rng.range(0, NY),
          stand: this.rng.int(0, 1),
          x: 0,
          z: 0,
          h: 0,
          hidden: !1,
        };
      (this.nextRoute(i, o.route),
        (o.x = o.route.p[0]),
        (o.z = o.route.p[1]),
        (o.h = o.route.heading),
        this.walkers.push(o));
    }
    drop(e) {
      this.crowd()?.releaseActor(e.slot);
    }
    stop() {
      for (let e of this.walkers) this.drop(e);
      ((this.walkers.length = 0), (this.active = !1));
    }
    density(e, t) {
      let n = ((e % 24) + 24) % 24;
      return (
        (n < 5
          ? 0.12
          : n < 7
            ? 0.25 + (n - 5) * 0.2
            : n < 10
              ? 0.75
              : n < 17
                ? 0.8
                : n < 22
                  ? 1
                  : n < 24
                    ? 0.7 - (n - 22) * 0.2
                    : 0.3) * (t > 0.5 ? 0.6 : t > 0.15 ? 0.8 : 1)
      );
    }
    update(e, t, n) {
      if (this.node < 0) return;
      let r = this.crowd(),
        i = this.ctx.signals;
      if (!r || !i.scrambleWalk) return;
      let a = this.ctx.camera.position,
        o = Math.hypot(a.x - Ec.x, a.z - Ec.z);
      if (!this.active) {
        if (o > EAe) return;
        ((this.active = !0), (this.wantT = 0));
      } else if (o > 300) {
        this.stop();
        return;
      }
      if (((this.wantT -= e), this.wantT <= 0)) {
        ((this.wantT = 2),
          (this.want = Math.round(this.max * this.density(t, n))));
        let e = n > 0.15;
        for (; this.walkers.length < this.want;)
          this.spawn(this.walkers.length, e);
      }
      let s = i.scrambleWalk(this.node),
        c = s === `walk` || s === `flash`,
        l = c ? (i.pedRemaining?.(this.node, `x`) ?? 0) : 0;
      if (c && !this.wasWalk)
        for (let e of this.walkers)
          e.st === 1 &&
            ((e.st = 2),
            (e.d = 0),
            (e.delay =
              this.rng.range(0.2, 1.2) +
              Math.min(
                2.4,
                Math.hypot(e.x - e.route.p[2], e.z - e.route.p[3]) * 0.55,
              )),
            (e.pause = this.rng.chance(0.07) ? this.rng.range(2.5, 4.5) : 0));
      this.wasWalk = c;
      let u = Math.max(1, this.walkFrames()),
        d = u,
        f = this.ctx.player?.position;
      for (let t = this.walkers.length - 1; t >= 0; t--) {
        let n = this.walkers[t];
        if (t >= this.want && n.st === 1) {
          (this.drop(n), this.walkers.splice(t, 1));
          continue;
        }
        let i = n.route,
          o = !1;
        if (n.st === 0) {
          let t = i.p[0],
            r = i.p[1],
            a = t - n.x,
            s = r - n.z,
            c = Math.hypot(a, s),
            l = 1.15 * e;
          c <= l
            ? ((n.x = t), (n.z = r), (n.st = 1), (n.h = i.heading))
            : ((n.x += (a / c) * l),
              (n.z += (s / c) * l),
              (n.h = Math.atan2(a, -s)),
              (n.gait += l),
              (o = !0));
        } else if (n.st >= 2) {
          if (!c && n.d < i.s[1]) ((n.st = 0), (n.d = 0));
          else if (n.delay > 0) n.delay -= e;
          else if (n.st === 3)
            ((n.pause -= e),
              (n.pause <= 0 || l < (i.s[3] - n.d) / 1.9 + 1) &&
                ((n.st = 2), (n.pause = 0)));
          else {
            let t = l > 0 ? (i.s[2] - n.d) / Math.max(0.5, l - 0.8) : 9,
              r = Math.max(
                n.speed,
                Math.min(2.6, t * 1.1),
                s === `flash` ? 1.9 : 0,
              );
            if (
              ((n.d += r * e),
              (n.gait += r * e),
              (o = !0),
              n.pause > 0 &&
                n.d > (i.s[1] + i.s[2]) / 2 &&
                l > (i.s[3] - n.d) / 1.6 + n.pause &&
                ((n.st = 3),
                (n.h = i.heading + Math.PI + this.rng.range(-0.6, 0.6))),
              n.d >= i.s[3])
            )
              ((n.corner = i.to),
                (n.x = i.p[6]),
                (n.z = i.p[7]),
                this.nextRoute(n.corner, n.route),
                (n.st = 0),
                (n.pause = 0));
            else {
              let e = 0;
              for (; e < 2 && n.d > i.s[e + 1];) e++;
              let t = (n.d - i.s[e]) / Math.max(0.001, i.s[e + 1] - i.s[e]),
                r = i.p[e * 2],
                a = i.p[e * 2 + 1],
                o = i.p[e * 2 + 2],
                s = i.p[e * 2 + 3];
              ((n.x = r + (o - r) * t),
                (n.z = a + (s - a) * t),
                (n.h = Math.atan2(o - r, -(s - a))));
            }
          }
        }
        let p = (a.x - n.x) ** 2 + (a.z - n.z) ** 2;
        if (p < 81 || (f && (f.x - n.x) ** 2 + (f.z - n.z) ** 2 < 1.5 ** 2)) {
          (n.hidden || r.hideActor(n.slot), (n.hidden = !0));
          continue;
        }
        n.hidden = !1;
        let m = n.st < 2 || (n.st >= 2 && (n.d < i.s[1] || n.d > i.s[2])),
          h = o ? Math.floor(((n.gait % NY) / NY) * u) % u : d + n.stand;
        r.setActor(
          n.slot,
          r.geo(n.look, h, !o && p < 576),
          n.x,
          this.gy + (m ? Ve : 0),
          n.z,
          n.h,
        );
      }
    }
  };
