// tokyo/assets/actors-Bnj6Q1ad 103 — math
// Lines 49500-50127 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var cT = new ke(),
  lT = new y(),
  uT = new k(0, 0, 0, `YXZ`),
  dT = new R(),
  fT = new R(1, 1, 1),
  pT = class {
    S;
    cars;
    officers;
    blocks = [];
    meshes = [];
    cooldownUntil = 0;
    group = new _();
    counts = [0, 0, 0];
    bb = new Float64Array(18);
    constructor(e, t, n) {
      ((this.S = e), (this.cars = t), (this.officers = n));
      let r = [iT(), aT(), oT()],
        i = fw(`police-roadblock`, { tex: sT(), reflective: !0, ledBoard: !0 });
      for (let e = 0; e < 3; e++) {
        (r[e].setAttribute(
          `aSpin`,
          new N(new Float32Array(r[e].attributes.position.count), 1),
        ),
          et(r[e]));
        let t = new Se(r[e], i, tT[e]);
        ((t.count = 0),
          (t.boundingSphere = new C()),
          (t.frustumCulled = !0),
          (t.castShadow = e === 0),
          t.instanceMatrix.setUsage(b),
          this.meshes.push(t),
          this.group.add(t));
      }
    }
    get count() {
      return this.blocks.length;
    }
    propCount(e) {
      let t = 0;
      for (let n of this.blocks) for (let r of n.props) r.kind === e && t++;
      return t;
    }
    addProp(e, t, n, r, i) {
      if (this.propCount(t) >= tT[t]) return;
      let a = this.S.ctx.plan.groundHeight(n, r);
      e.props.push({
        kind: t,
        x: n,
        y: a,
        z: r,
        h: i,
        vx: 0,
        vy: 0,
        vz: 0,
        tilt: 0,
        tiltV: 0,
        spin: 0,
        knocked: !1,
        rest: !0,
      });
    }
    tryCreate(e = !1) {
      let t = this.S,
        n = t.P,
        r = t.ctx.plan;
      if (!e && (t.now < this.cooldownUntil || !n.inVehicle || n.speed < 7))
        return !1;
      let i = r.nearestLink(n.x, n.z);
      if (!i) return !1;
      let a = i.link,
        o = i.s,
        s = e && n.speed < 1 ? Math.sin(n.heading) : n.vx,
        c = e && n.speed < 1 ? -Math.cos(n.heading) : n.vz;
      a.dx * s + a.dz * c < 0 &&
        a.reverse >= 0 &&
        ((a = r.links[a.reverse]), (o = a.length - o));
      let l = e ? 60 : Mx.min,
        u = e ? 200 : Mx.max,
        d = -o;
      for (let n = 0; n < 14; n++) {
        if (!a.pedestrian && a.length >= 34) {
          let n = Math.max(14, l - d),
            r = Math.min(a.length - 12, u - d);
          if (n <= r) {
            let i = Math.min(Math.max(a.length * 0.45, n), r);
            for (let o of [i, n, r]) {
              let n = a.sx + a.dx * o,
                r = a.sz + a.dz * o,
                i = d + o;
              if (!(!e && i < Mx.farOk && t.spawn.visible(n, 1.5, r, 7)))
                return (
                  this.build(a, o),
                  (this.cooldownUntil = t.now + 34 + Math.random() * 12),
                  t.dispatch(
                    (ux.roadblockLine ?? Ow)(t.ctx.plan, a.road, n, r),
                    !0,
                  ),
                  !0
                );
            }
          }
        }
        if (((d += a.length), d > u)) break;
        let n = r.nodes[a.to],
          i = null;
        for (let e of n.out) {
          let t = r.links[e];
          t.road === a.road && t.id !== a.reverse && (i = t);
        }
        if (!i || i.pedestrian) return !1;
        a = i;
      }
      return (e || (this.cooldownUntil = t.now + 2.5), !1);
    }
    build(e, t) {
      let n = this.S,
        r = e.heading,
        i = n.ctx.plan.side,
        a = n.ctx.plan.laneWidth,
        o = e.dx,
        s = e.dz,
        c = ct(e, 1, i),
        l = ze(e, 1, i),
        u = e.road.median / 2,
        d = e.lanes,
        f = e.sx + o * t,
        p = e.sz + s * t,
        m = {
          link: e,
          x: f,
          z: p,
          heading: r,
          cars: [],
          officers: [],
          props: [],
          born: n.now,
          release: null,
          expired: !1,
          hidden: !1,
          hidT: 0,
        },
        h = [],
        g,
        _;
      d >= 3
        ? (h.push(u + a * 0.5, u + a * (d - 0.5)),
          (g = u + a * 1.05),
          (_ = u + a * (d - 1.05)))
        : d === 2
          ? (h.push(u + a * 0.55), (g = u + a * 1.2), (_ = u + a * 2 - 0.2))
          : (h.push(u + a * 0.5), (g = -(u + a) + 0.3), (_ = -(u + 0.3)));
      for (let e = 0; e < h.length; e++) {
        let t = h[e],
          n = r + (e === h.length - 1 && h.length > 1 ? -1 : 1) * 0.56 * i,
          a = this.cars.spawnParked(f + c * t, p + l * t, n);
        a && m.cars.push(a);
      }
      let v = _ - g,
        y = Math.max(1, Math.round(v / 2.5));
      for (let e = 0; e < y; e++) {
        let t = g + ((e + 0.5) / y) * v;
        this.addProp(
          m,
          eT.Barrier,
          f - o * 1.2 + c * t,
          p - s * 1.2 + l * t,
          r + Math.PI,
        );
      }
      for (let e of h)
        this.addProp(
          m,
          eT.Barrier,
          f - o * 4.4 + c * e,
          p - s * 4.4 + l * e,
          r + Math.PI,
        );
      let b = u + a * d;
      for (let e = 0; e < 6; e++) {
        let t = e / 5,
          n = b - 0.5 - t * (b - u - 1.5) * 0.85,
          r = 9 + (5 - e) * 3.2;
        this.addProp(m, eT.Cone, f - o * r + c * n, p - s * r + l * n, 0);
      }
      for (let e = 0; e < 3; e++)
        this.addProp(
          m,
          eT.Cone,
          f - o * (8 + e * 3) + c * (u + 0.4),
          p - s * (8 + e * 3) + l * (u + 0.4),
          0,
        );
      let x = b + 0.4;
      this.addProp(
        m,
        eT.Sign,
        f - o * 16 + c * x,
        p - s * 16 + l * x,
        r + Math.PI,
      );
      for (let e = 0; e < 2; e++) {
        let t =
            e === 0
              ? h[0]
              : h.length > 1
                ? h[1]
                : Math.max(u + a * 0.5, (g + _) / 2 + 2.2),
          n = f + o * 4 + c * t,
          i = p + s * 4 + l * t,
          d = this.officers.spawn(n, i, r + Math.PI, {
            role: `roadblock`,
            state: `guard`,
          });
        d &&
          ((d.guardX = n),
          (d.guardZ = i),
          (d.guardH = r + Math.PI),
          m.officers.push(d));
      }
      try {
        m.release = n.ctx.traffic.holdArea(f, p, 16);
      } catch {
        m.release = null;
      }
      this.blocks.push(m);
    }
    remove(e) {
      let t = this.blocks.indexOf(e);
      t >= 0 && this.blocks.splice(t, 1);
      for (let t of e.cars)
        t.role === `roadblock` &&
          this.cars.list.includes(t) &&
          this.cars.despawn(t);
      for (let t of e.officers)
        t.active &&
          t.role === `roadblock` &&
          (t.state === `guard` || t.state === `leave`) &&
          this.officers.despawn(t);
      try {
        e.release?.();
      } catch {}
      e.release = null;
    }
    removeAll() {
      for (; this.blocks.length;)
        this.remove(this.blocks[this.blocks.length - 1]);
    }
    update(e) {
      let t = this.S,
        n = t.P,
        r = t.W,
        i = t.ctx;
      for (let e = this.blocks.length - 1; e >= 0; e--) {
        let i = this.blocks[e],
          a = i.x - n.x,
          o = i.z - n.z,
          s = Math.hypot(a, o),
          c = a * i.link.dx + o * i.link.dz < -25;
        if (r.level < 3 && !i.expired) {
          i.expired = !0;
          for (let e of i.officers)
            e.active &&
              e.state === `guard` &&
              this.officers.setState(e, `leave`);
        }
        t.now >= i.hidT &&
          ((i.hidT = t.now + 0.35),
          (i.hidden = !t.spawn.visible(i.x, 1.5, i.z, 8)));
        let l = i.hidden;
        if (
          (c && s > 70 && l) ||
          (s > 260 && l) ||
          (t.now - i.born > 100 && l) ||
          (i.expired && l && s > 50)
        ) {
          this.remove(i);
          continue;
        }
        for (let e = i.cars.length - 1; e >= 0; e--)
          this.cars.list.includes(i.cars[e]) || i.cars.splice(e, 1);
      }
      let a = n.inVehicle && n.vehicle ? n.vehicle : null,
        o = this.counts,
        s = this.bb;
      o[0] = o[1] = o[2] = 0;
      for (let e = 0; e < 3; e++)
        ((s[e * 6] = s[e * 6 + 1] = s[e * 6 + 2] = 1 / 0),
          (s[e * 6 + 3] = s[e * 6 + 4] = s[e * 6 + 5] = -1 / 0));
      for (let r of this.blocks) {
        for (let t of r.props) {
          if (a && !t.knocked) {
            let e = a.body,
              r = t.x - e.x,
              o = t.z - e.z,
              s = nT[t.kind] + Math.max(a.spec.halfW, a.spec.halfL * 0.8);
            if (r * r + o * o < s * s && n.speed > 2) {
              ((t.knocked = !0), (t.rest = !1));
              let a = 0.7 + Math.random() * 0.5;
              if (
                ((t.vx = e.vx * a + r * 1.5),
                (t.vz = e.vz * a + o * 1.5),
                (t.vy =
                  2 +
                  Math.min(n.speed, 25) * (t.kind === eT.Cone ? 0.35 : 0.18)),
                (t.spin = (Math.random() - 0.5) * 8),
                (t.tiltV =
                  (Math.random() < 0.5 ? -1 : 1) * (4 + Math.random() * 5)),
                i.audio.play(t.kind === eT.Barrier ? `crash_light` : `punch`, {
                  x: t.x,
                  y: t.y + 0.5,
                  z: t.z,
                  volume: t.kind === eT.Barrier ? 1 : 0.5,
                }),
                t.kind === eT.Barrier)
              )
                try {
                  i.cameraRig.shake(0.25);
                } catch {}
            }
          }
          if (!t.rest) {
            ((t.vy -= 18 * e),
              (t.x += t.vx * e),
              (t.y += t.vy * e),
              (t.z += t.vz * e),
              (t.h += t.spin * e),
              (t.tilt += t.tiltV * e));
            let n = i.plan.groundHeight(t.x, t.z);
            if (t.y <= n) {
              ((t.y = n),
                (t.vy = -t.vy * 0.25),
                (t.vx *= 0.55),
                (t.vz *= 0.55),
                (t.spin *= 0.5));
              let e = Math.round(t.tilt / (Math.PI / 2)) * (Math.PI / 2);
              ((t.tilt += (e - t.tilt) * 0.5),
                (t.tiltV *= 0.3),
                Math.abs(t.vy) < 0.8 &&
                  Math.hypot(t.vx, t.vz) < 0.4 &&
                  ((t.rest = !0), (t.tilt = e)));
            }
          }
          let r = t.kind,
            c = o[r]++;
          (uT.set(t.tilt, -t.h, 0, `YXZ`), lT.setFromEuler(uT));
          let l =
            t.kind === eT.Barrier
              ? Math.abs(Math.sin(t.tilt)) * 0.06
              : Math.abs(Math.sin(t.tilt)) * 0.17;
          (dT.set(t.x, t.y + l, t.z),
            cT.compose(dT, lT, fT),
            this.meshes[r].setMatrixAt(c, cT));
          let u = r * 6;
          (t.x < s[u] && (s[u] = t.x),
            t.y < s[u + 1] && (s[u + 1] = t.y),
            t.z < s[u + 2] && (s[u + 2] = t.z),
            t.x > s[u + 3] && (s[u + 3] = t.x),
            t.y > s[u + 4] && (s[u + 4] = t.y),
            t.z > s[u + 5] && (s[u + 5] = t.z));
        }
        for (let e of r.props) {
          if (e.kind !== eT.Sign || e.knocked) continue;
          let n = Math.sin(t.now * 7.5) > 0.2 ? 1 : 0.1;
          t.fx.glare(
            e.x,
            e.y + 1.88,
            e.z,
            5 * n,
            0.4 * n,
            0.25 * n,
            0.45 + t.fx.night * 0.5,
          );
        }
      }
      for (let e = 0; e < 3; e++) {
        let t = this.meshes[e];
        if (((t.count = o[e]), (t.visible = o[e] > 0), !o[e])) continue;
        t.instanceMatrix.needsUpdate = !0;
        let n = e * 6;
        (t.boundingSphere.center.set(
          (s[n] + s[n + 3]) / 2,
          (s[n + 1] + s[n + 4]) / 2 + 1,
          (s[n + 2] + s[n + 5]) / 2,
        ),
          (t.boundingSphere.radius =
            0.5 *
              Math.hypot(
                s[n + 3] - s[n],
                s[n + 4] - s[n + 1],
                s[n + 5] - s[n + 2],
              ) +
            2.6));
      }
    }
  },
  mT = 48,
  hT = (e, t) => (t + 1024) * 2048 + (e + 1024),
  gT = class {
    ctx;
    cells = new Map();
    frustum = new v();
    frustumFrame = -1;
    m4 = new ke();
    sphere = new C();
    o = new R();
    d = new R();
    pt = { x: 0, z: 0 };
    tmpBodies = [];
    constructor(e) {
      this.ctx = e;
      let t = e.plan;
      for (let e of t.links) {
        if (e.pedestrian) continue;
        let t = Math.max(1, Math.ceil(e.length / 20)),
          n = -1;
        for (let r = 0; r <= t; r++) {
          let i = (e.length * r) / t,
            a = hT(
              Math.floor((e.sx + e.dx * i) / mT),
              Math.floor((e.sz + e.dz * i) / mT),
            );
          if (a === n) continue;
          n = a;
          let o = this.cells.get(a);
          (o || this.cells.set(a, (o = [])), o.includes(e.id) || o.push(e.id));
        }
      }
    }
    ensureFrustum() {
      let e = this.ctx.time.frame;
      if (e === this.frustumFrame) return;
      this.frustumFrame = e;
      let t = this.ctx.camera;
      (this.m4.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this.frustum.setFromProjectionMatrix(
          this.m4,
          t.coordinateSystem,
          t.reversedDepth,
        ));
    }
    inFrustum(e, t, n, r) {
      return (
        this.ensureFrustum(),
        this.sphere.center.set(e, t, n),
        (this.sphere.radius = r),
        this.frustum.intersectsSphere(this.sphere)
      );
    }
    visible(e, t, n, r) {
      if (!this.inFrustum(e, t, n, r)) return !1;
      let i = this.ctx.camera.position;
      this.d.set(e - i.x, t - i.y, n - i.z);
      let a = this.d.length();
      return a > this.ctx.camera.far * 0.92
        ? !1
        : a < r + 1 ||
            (this.d.multiplyScalar(1 / a),
            this.o.copy(i),
            !this.ctx.statics.raycast(this.o, this.d, a - r));
    }
    roadPoint(e, t, n, r, i, a = {}) {
      let o = this.ctx.plan,
        s = a.preferMajor ? 26 : 16;
      for (let c = 0; c < s; c++) {
        let s = Math.random() * Math.PI * 2,
          l = n + Math.random() * (r - n),
          u = e + Math.sin(s) * l,
          d = t - Math.cos(s) * l,
          f = this.cells.get(hT(Math.floor(u / mT), Math.floor(d / mT)));
        if (!f || !f.length) continue;
        let p = o.links[f[(Math.random() * f.length) | 0]];
        if (
          p.pedestrian ||
          p.length < 10 ||
          (a.preferMajor && c < 18 && !p.road.major)
        )
          continue;
        let m = (u - p.sx) * p.dx + (d - p.sz) * p.dz;
        if (
          ((m = Math.max(4, Math.min(p.length - 4, m))),
          a.tx !== void 0 && a.tz !== void 0)
        ) {
          let e = p.sx + p.dx * m,
            t = p.sz + p.dz * m;
          if ((a.tx - e) * p.dx + (a.tz - t) * p.dz < 0 && p.reverse >= 0) {
            let e = o.links[p.reverse];
            ((m = Math.max(4, Math.min(e.length - 4, e.length - m))), (p = e));
          }
        }
        let h = a.inner ? 0 : (Math.random() * p.lanes) | 0;
        o.lanePoint(p, h, m, this.pt);
        let g = Math.hypot(this.pt.x - e, this.pt.z - t);
        if (
          g < n * 0.8 ||
          g > r * 1.2 ||
          (a.awayR !== void 0 &&
            Math.hypot(this.pt.x - (a.awayX ?? 0), this.pt.z - (a.awayZ ?? 0)) <
              a.awayR) ||
          (a.hidden !== !1 && this.visible(this.pt.x, 1.2, this.pt.z, 2.6))
        )
          continue;
        let _ = a.clear ?? 5;
        if (!(
          _ > 0 &&
          this.ctx.dynamics.query(this.pt.x, this.pt.z, _, this.tmpBodies) > 0
        ))
          return (
            (i.x = this.pt.x),
            (i.z = this.pt.z),
            (i.heading = p.heading),
            (i.link = p),
            (i.lane = h),
            (i.s = m),
            !0
          );
      }
      return !1;
    }
    footPoint(e, t, n, r, i, a = !0) {
      let o = this.ctx.plan;
      for (let s = 0; s < 16; s++) {
        let s = Math.random() * Math.PI * 2,
          c = n + Math.random() * (r - n),
          l = e + Math.sin(s) * c,
          u = t - Math.cos(s) * c,
          d = o.surfaceAt(l, u);
        if (
          (d === `sidewalk` ||
            d === `plaza` ||
            d === `park` ||
            d === `crosswalk`) &&
          !this.ctx.statics.overlapsRect(
            l - 0.45,
            u - 0.45,
            l + 0.45,
            u + 0.45,
            1,
          ) &&
          !(a && this.visible(l, 1, u, 1.2))
        )
          return ((i.x = l), (i.z = u), !0);
      }
      return !1;
    }
  },
  _T = class {
    ctx;
    enabled;
    ja;
    opts = {
      lang: ux.voiceLang || `zh`,
      priority: 6,
      x: 0,
      y: 1.6,
      z: 0,
      maxDist: 45,
      channel: `police`,
      minGap: 9,
      rate: 1.12,
      pitch: 0.85,
    };
    radioOpts = {
      lang: `ja`,
      priority: 3,
      volume: 0.42,
      channel: `police-radio`,
      minGap: 5,
      rate: 1.15,
      pitch: 1.05,
    };
    constructor(e) {
      ((this.ctx = e),
        (this.enabled =
          e.params.get(`policeVoice`) !== `0` && ux.voiceLang !== !1),
        (this.ja = ux.voiceLang === `ja`));
    }
    say(e, t, n) {
      if (!this.enabled) return;
      let r = this.ctx.audio;
      if (!r.say) return;
      let i = this.opts;
      ((i.x = t), (i.z = n), (i.y = 1.6));
      try {
        this.ja
          ? e.ja && r.canSay?.(`ja`) && r.say(e, i)
          : r.say(e.zh.replace(/（.*?）/g, ``), i);
      } catch {
        this.enabled = !1;
      }
    }
    radio(e) {
      if (!this.enabled || !this.ja || !e.ja) return;
      let t = this.ctx.audio;
      if (t.say && t.canSay?.(`ja`))
        try {
          t.say(e, this.radioOpts);
        } catch {
          this.enabled = !1;
        }
    }
  },
  vT = new R(),
  yT = null,
  bT = new R(),
  xT = { zh: `警察正在逮捕你！快跑！`, en: `Being arrested — run!` },
  ST = {
    zh: `警察要把你拖下車！快開走！`,
    en: `Cops are pulling you out — drive!`,
  },
  CT = { zh: `成功甩掉警察！`, en: `You lost the cops!` },
  wT = (e) => e.role === `pursuit` && !e.scooter,
  TT = (e) => e.role === `pursuit` && e.scooter,
  ET = (e) => e.role === `swat`,
  DT = (e) => e.role === `patrol`,
  OT = (e) => e.role === `roadblock`,
  kT = (e) =>
    e.role !== `leave` && e.role !== `abandoned` && e.role !== `patrol`,
  AT = (e) =>
    e === `assault_police` || e === `kill_police`
      ? 1
      : e === `assault` || e === `kill` || e === `hit_ped`
        ? 2
        : 0,
  jT = (e) => {
    let t = px[e] ?? 5;
    return t >= 5 ? dx[5] + 20 : dx[t + 1] - 0.01;
  };
