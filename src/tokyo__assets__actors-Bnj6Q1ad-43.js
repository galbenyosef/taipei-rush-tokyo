// tokyo__assets__actors-Bnj6Q1ad 43 — math
// Lines 19819-20783 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var $f = 3.5,
  ep = 4.5,
  tp = 3,
  np = 1.2,
  rp = 0.3,
  ip = new Set([
    `wall`,
    `building`,
    `pillar`,
    `world-edge`,
    `station`,
    `viaduct`,
    `landmark`,
    `lowside`,
  ]),
  ap = 21,
  op = (e) => (e <= 7 ? 0 : Math.min(60, 2.2 * (e - 7) + Math.max(0, e - 22))),
  sp = 0.75,
  cp = [],
  lp = new Map(Object.keys(zs).map((e, t) => [e, t])),
  up = (e) =>
    e.kind === `vehicle` &&
    e.owner === `traffic` &&
    !e.userData?.noJack &&
    Math.hypot(e.vx, e.vz) < tp,
  dp = new R(),
  fp = new R(),
  pp = new R(),
  mp = { distance: 0, point: new R(), normal: new R(), tag: ``, body: null },
  hp = [],
  gp = { x: 0, z: 0 },
  _p = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ],
  vp = class {
    ctx;
    host;
    current = null;
    entering = null;
    get enteringVehicle() {
      return this.entering !== null;
    }
    engine = null;
    screech = null;
    screechQuiet = 0;
    enteredAt = -10;
    lastL = !1;
    hornT = 0;
    hornToggled = !1;
    fireBeep = 0;
    spot = null;
    night = 0;
    promptKey = -100;
    promptMsg = null;
    spotHolder = Object.assign(new _(), { name: `vehicle-headlight` });
    immune = { until: -1, a: -1, b: -1 };
    lastEject = null;
    fx = null;
    constructor(e, t) {
      ((this.ctx = e), (this.host = t));
    }
    init() {
      (this.ctx.scene.add(this.spotHolder), this.setupSpot());
    }
    setupSpot() {
      let e = (this.ctx.quality.dynamicLights ?? 0) >= 1;
      if (e && !this.spot) {
        let e = new p(16773592, 0, 70, 0.52, 0.55, 1.4);
        ((e.castShadow = !1),
          e.position.set(0, 0.8, -2),
          e.target.position.set(0, 0, -16),
          (this.spot = e),
          this.spotHolder.add(e, e.target),
          this.current && this.attachSpot(this.current));
      } else
        !e &&
          this.spot &&
          (this.spotHolder.remove(this.spot, this.spot.target),
          this.spot.dispose(),
          (this.spot = null));
    }
    attachSpot(e) {
      let t = this.spot;
      if (t) {
        if (
          (t.parent !== this.spotHolder && this.spotHolder.add(t, t.target),
          e?.spec.boat && (e = null),
          e)
        ) {
          let n = e.h;
          (t.position.set(0, n.headAt[1] + 0.1, n.headAt[2] + 0.2),
            t.target.position.set(0, -1.2, n.headAt[2] - 18),
            this.syncSpot(e));
        }
        t.intensity = 0;
      }
    }
    syncSpot(e) {
      let t = this.spotHolder;
      (t.position.set(e.x, e.y, e.z), t.rotation.set(0, -e.heading, 0));
    }
    prompt(e) {
      try {
        this.ctx.ui.prompt(e);
      } catch {}
    }
    isImmune(e, t) {
      if (
        e.userData?.kind === `kart` &&
        (t.kind === `ped` || t.kind === `player` || t.kind === `police`)
      )
        return !0;
      let n = this.immune;
      return t.kind !== `player` || this.ctx.time.elapsed > n.until
        ? !1
        : e.id === n.a || e.id === n.b;
    }
    update(e) {
      let t = this.ctx,
        r = t.player,
        a = t.input,
        o = t.time.elapsed;
      if (this.entering) {
        this.updateEntering(e);
        return;
      }
      let s = this.current;
      if (s) {
        if (!this.host.list.includes(s)) {
          this.forceExit(s, !1, void 0, void 0, !0);
          return;
        }
        if (s.sinking > 0.8) {
          this.exit(s, !0);
          return;
        }
        if (a.pressed(`enter`) && o - this.enteredAt > 0.35) {
          this.exit(s, !1);
          return;
        }
        let n = s.controls,
          c = s.scripted;
        (c
          ? ((n.throttle = c.throttle),
            (n.brake = c.brake),
            (n.steer = c.steer),
            (n.handbrake = c.handbrake),
            (n.hold = !!c.hold))
          : ((n.throttle = a.axis(`throttle`)),
            (n.brake = a.axis(`brake`)),
            (n.steer = a.axis(`steer`)),
            (n.handbrake = a.down(`handbrake`)),
            (n.hold &&= !1)),
          (n.leanBack =
            s.bike &&
            (a.down(`sprint`) ||
              (a.device === `gamepad` && a.axis(`moveY`) < -0.5))),
          a.pressed(`horn`) &&
            (this.safe(() =>
              t.audio.play(s.h.horn, { x: s.x, y: s.y + 1, z: s.z }),
            ),
            (this.hornT = 0),
            (this.hornToggled = !1)),
          a.down(`horn`) &&
            ((this.hornT += e),
            this.hornT > 0.6 &&
              !this.hornToggled &&
              s.hasSiren &&
              ((this.hornToggled = !0), (s.sirenOn = !s.sirenOn))),
          a.pressed(`radio`) && this.safe(() => t.audio.nextStation()),
          a.pressed(`interact`) && s.hasSiren && (s.sirenOn = !s.sirenOn));
        let l = a.keys.has(`KeyL`);
        (l &&
          !this.lastL &&
          (s.headMode = s.headMode === -1 ? 1 : s.headMode === 1 ? 0 : -1),
          (this.lastL = l));
        try {
          let e = this.engine;
          e &&
            (e.setPosition(s.x, s.y + 0.8, s.z),
            e.setParam(`rpm`, V(s.rpm * s.h.engineRpmK, 0, 1.1)),
            e.setParam(`throttle`, s.throttleS),
            e.setParam(`load`, V(Math.abs(s.speed) / s.spec.maxSpeed, 0, 1)),
            e.setParam(`speed`, Math.abs(s.speed)));
        } catch {}
        if (
          (this.updateScreech(s, e),
          s.kart?.racing || this.trafficCameras(s, o),
          s.onFire && !s.destroyed)
        ) {
          let n = Math.max(0, s.fireFuse).toFixed(1),
            r = (o * 3) % 1 < 0.5 ? `🔥` : `⚠`;
          (this.prompt({
            zh: i.on
              ? i.t(
                  `${r} 起火了！快按 {enter} 下車（${n} 秒）`,
                  `${r} 炎上中！{enter} ですぐ降りろ（あと ${n} 秒）`,
                )
              : `${r} 起火了！快按 {enter} 下車（${n} 秒）`,
            en: `${r} ON FIRE — press {enter} to bail out (${n} s)`,
          }),
            (this.fireBeep -= e) <= 0 &&
              ((this.fireBeep = s.fireFuse < 2 ? 0.3 : 0.6),
              this.safe(() =>
                t.audio.play(`phone_notify`, {
                  ui: !0,
                  volume: 0.45,
                  rate: 1.6,
                }),
              )));
        }
        if (
          (r.position.set(s.x, s.y, s.z), (r.heading = s.heading), this.spot)
        ) {
          let e = this.night;
          ((this.spot.intensity = s.headOn * Math.max(0, e - 0.15) * 260),
            this.syncSpot(s));
        }
        return;
      }
      if (r.mode !== `foot`) return;
      let c = r.position.x,
        l = r.position.y,
        u = r.position.z,
        d = Math.sin(r.heading),
        f = -Math.cos(r.heading),
        p = null,
        m = $f,
        h = 1 / 0;
      for (let e of this.host.list) {
        if (
          e.destroyed ||
          e.locked ||
          e.sinking > 0 ||
          Math.hypot(e.vx, e.vz) > (e.driver === `ai` ? tp : 4) ||
          Math.abs(e.y - l) > np
        )
          continue;
        let t = yp(c, u, e.x, e.z, e.heading, e.spec.halfW, e.spec.halfL);
        if (t >= $f) continue;
        let n = t - ((e.x - c) * d + (e.z - u) * f > 0 ? rp : 0);
        n >= h ||
          !this.lineOfSight(
            c,
            l,
            u,
            e.x,
            e.y,
            e.z,
            e.heading,
            e.spec.halfW,
            e.spec.halfL,
            e.spec.twoWheeler,
          ) ||
          ((h = n), (m = t), (p = e));
      }
      let g = null,
        _ = ep,
        v = 1 / 0,
        y = t.dynamics.query(c, u, ep, cp, up);
      for (let e = 0; e < y; e++) {
        let t = cp[e];
        if (Math.abs((t.y ?? 0) - l) > np) continue;
        let n = yp(c, u, t.x, t.z, t.heading, t.halfW, t.halfL);
        if (n >= ep) continue;
        let r = n - ((t.x - c) * d + (t.z - u) * f > 0 ? rp : 0);
        r >= v ||
          !this.lineOfSight(
            c,
            l,
            u,
            t.x,
            t.y ?? 0,
            t.z,
            t.heading,
            t.halfW,
            t.halfL,
            t.halfW < 0.6,
          ) ||
          ((v = r), (_ = n), (g = t));
      }
      p && g && (v < h ? (p = null) : (g = null));
      let b = 0;
      try {
        b = t.police?.level ?? 0;
      } catch {}
      let x = p ? m : _,
        S = !!r.aiming || (b > 0 && x > 2);
      if (p) {
        let e = p.driver === `ai` ? 1 : p.fallen > 0.5 ? 2 : 0,
          t = p.id * 4 + e;
        if (t !== this.promptKey) {
          let r = p.spec.name,
            i = p.spec.twoWheeler,
            a = n(r.zh) ?? r.en,
            o =
              e === 1
                ? { zh: `搶${r.zh}`, en: `jack the ${r.en}`, ja: `${a}を奪う` }
                : e === 2
                  ? {
                      zh: `扶起${r.zh}`,
                      en: `pick up the ${r.en}`,
                      ja: `${a}を起こす`,
                    }
                  : {
                      zh: `${i ? `騎上` : `上`}${r.zh}`,
                      en: `${i ? `ride` : `get in`} the ${r.en}`,
                      ja: `${a}${i ? `にまたがる` : `に乗る`}`,
                    };
          ((this.promptMsg = {
            zh: `按 {enter} ${o.zh}`,
            en: `Press {enter} to ${o.en}`,
            ja: `{enter} で${o.ja}`,
          }),
            (this.promptKey = t));
        }
        (S || this.prompt(this.promptMsg),
          a.pressed(`enter`) && this.beginEnter(p, p.driver === `ai`, !1));
      } else if (g) {
        let e = g.userData?.kind,
          t = e ? zs[e] : void 0,
          r = -2 - (t ? (lp.get(t.kind) ?? 0) : 99);
        (this.promptKey !== r &&
          ((this.promptMsg = t
            ? {
                zh: `按 {enter} 搶${t.name.zh}`,
                en: `Press {enter} to jack the ${t.name.en}`,
                ja: `{enter} で${n(t.name.zh) ?? t.name.en}を奪う`,
              }
            : { zh: `按 {enter} 搶車`, en: `Press {enter} to carjack` }),
          (this.promptKey = r)),
          S || this.prompt(this.promptMsg),
          a.pressed(`enter`) && this.carjackTraffic(c, u, _));
      }
    }
    lineOfSight(e, t, n, r, i, a, o, s, c, l) {
      let u = Math.cos(o),
        d = Math.sin(o),
        f = e - r,
        p = n - a,
        m = V(f * u + p * d, -Math.max(0, s - 0.25), Math.max(0, s - 0.25)),
        h = V(-f * d + p * u, -Math.max(0, c - 0.25), Math.max(0, c - 0.25));
      ((gp.x = r + m * u - h * d),
        (gp.z = a + m * d + h * u),
        fp.set(e, t + 1.25, n),
        pp.set(gp.x - e, i + (l ? 0.75 : 0.95) - fp.y, gp.z - n));
      let g = pp.length();
      return (
        g < 0.35 ||
        (pp.multiplyScalar(1 / g),
        !this.ctx.statics.raycast(fp, pp, g, mp) || mp.distance >= g - 0.3)
      );
    }
    lastNode = -1;
    lastCamFlash = -100;
    speedCheckT = 0;
    trafficCameras(e, t) {
      let n = this.ctx,
        r = n.plan.nodeAt(e.x, e.z);
      if (r && r.id !== this.lastNode) {
        if (
          ((this.lastNode = r.id),
          n.signals.isSignalized(r.id) &&
            Math.abs(e.speed) > 4 &&
            Math.abs(e.y - n.plan.groundHeight(r.x, r.z)) < 3)
        ) {
          let i =
            Math.abs(Math.sin(e.heading)) > Math.abs(Math.cos(e.heading))
              ? `x`
              : `z`;
          n.signals.state(r.id, i) === `red` &&
            this.cameraFlash(
              e,
              r.x + (r.halfX + 2) * Math.sign(e.x - r.x || 1),
              r.z + (r.halfZ + 2) * Math.sign(e.z - r.z || 1),
              t,
              { zh: `闖紅燈！被照相了`, en: `Ran a red light — camera flash!` },
            );
        }
      } else r || (this.lastNode = -1);
      if ((this.speedCheckT -= n.time.dt) <= 0) {
        this.speedCheckT = 0.5;
        let r = n.plan.roadsNear(e.x, e.z);
        for (let a = 0; a < r.length; a++) {
          let o = r[a];
          if (o.major) {
            if (e.y - n.plan.groundHeight(e.x, e.z) > 3) break;
            if (
              !(Math.abs((o.axis === `x` ? e.z : e.x) - o.at) > o.halfWidth)
            ) {
              if (e.kmh > o.speedKmh + 40 && t - this.lastCamFlash > 25) {
                let n = Math.sin(e.heading),
                  r = -Math.cos(e.heading);
                this.cameraFlash(
                  e,
                  e.x + n * 12 + Math.cos(e.heading) * (o.halfWidth + 1.5),
                  e.z + r * 12 + Math.sin(e.heading) * (o.halfWidth + 1.5),
                  t,
                  {
                    zh: i.on
                      ? i.t(
                          `超速 ${Math.round(e.kmh)} km/h！測速照相`,
                          `速度超過 ${Math.round(e.kmh)} km/h！オービスに撮られた`,
                        )
                      : `超速 ${Math.round(e.kmh)} km/h！測速照相`,
                    en: `Speeding at ${Math.round(e.kmh)} km/h — speed camera!`,
                  },
                );
              }
              break;
            }
          }
        }
      }
    }
    cameraFlash(e, t, n, r, i) {
      let a = this.fx;
      (a &&
        (a.glowParticle(2, t, 5.2, n, 0, 0, 0, 5, 9, 0.16, 1, 1, 1, 3.5),
        a.glowParticle(2, t, 5.2, n, 0, 0, 0, 1.2, 1.5, 0.35, 1, 1, 1, 4)),
        r - this.lastCamFlash > 8 &&
          this.safe(() =>
            this.ctx.ui.notify(i, { duration: 2.5, kind: `bad` }),
          ),
        (this.lastCamFlash = r));
    }
    safe(e) {
      try {
        e();
      } catch {}
    }
    driverDoor(e) {
      return e.spec.twoWheeler ? -1 : Ie(this.ctx.plan.side);
    }
    doorPoint(e, t, n, r = 0) {
      let i = e.spec.halfW + (e.spec.twoWheeler ? 0.45 : 0.6) + r;
      return Le(e.x, e.z, e.heading, t, i, -e.h.seat[2], n);
    }
    shoreSpot(e, t) {
      let n = this.ctx.plan,
        r = e.heading,
        i = Math.sin(r),
        a = -Math.cos(r),
        o = Math.cos(r),
        s = Math.sin(r);
      for (let r of [0.7, 1.4, 2.2])
        for (let [c, l] of _p) {
          let u = e.x + o * c * (e.spec.halfW + r) + i * l * (e.spec.halfL + r),
            d = e.z + s * c * (e.spec.halfW + r) + a * l * (e.spec.halfL + r);
          if (
            n.surfaceAt(u, d) !== `water` &&
            this.clearSpot(u, d, n.groundHeight(u, d), e.body)
          )
            return ((t.x = u), (t.z = d), !0);
        }
      return !1;
    }
    clearSpot(e, t, n, r) {
      let i = this.ctx;
      if (i.statics.overlapsRect(e - 0.3, t - 0.3, e + 0.3, t + 0.3, n + 0.5))
        return !1;
      let a = i.dynamics.query(e, t, 0.4, cp);
      for (let n = 0; n < a; n++) {
        let i = cp[n];
        if (i !== r && i.kind !== `player` && i.active) {
          if (i.kind === `vehicle`) {
            if (yp(e, t, i.x, i.z, i.heading, i.halfW, i.halfL) < 0.45)
              return !1;
          } else if (Math.hypot(i.x - e, i.z - t) < (i.radius || 0.35) + 0.3)
            return !1;
        }
      }
      return !0;
    }
    beginEnter(
      e,
      t,
      n,
      r = t && (e.kind === `police` || e.livery === `police`),
    ) {
      let i = this.ctx,
        a = i.player.position,
        o = this.driverDoor(e),
        s = this.doorPoint(e, o, { x: 0, z: 0 }),
        c = this.doorPoint(e, -o, { x: 0, z: 0 }),
        l =
          Math.hypot(c.x - a.x, c.z - a.z) + 0.8 <
          Math.hypot(s.x - a.x, s.z - a.z)
            ? -o
            : o,
        u = l === o ? s : c,
        d = Math.hypot(u.x - a.x, u.z - a.z);
      ((this.entering = {
        v: e,
        t: 0,
        dur: V(d / 5, 0.2, 0.55),
        fx: a.x,
        fz: a.z,
        tx: u.x,
        tz: u.z,
        carjack: t,
        abandoned: n,
        ejected: !1,
        pull: 0,
        side: l,
        officer: r,
      }),
        t &&
          ((e.driver = `none`),
          (e.coasting = !1),
          (e.controls.throttle = 0),
          (e.controls.brake = 1)),
        this.safe(() => i.player.setControlEnabled(!1)));
    }
    carjackTraffic(e, t, n) {
      let r = this.ctx,
        i = null;
      try {
        i = r.traffic.claimNearest(e, t, Math.min(ep, n + 0.35), {
          maxSpeed: 4,
        });
      } catch {
        i = null;
      }
      if (!i) return;
      let a = i,
        o = this.host.spawn(i.kind, i.x, i.z, i.heading, {
          color: i.color,
          speed: Math.min(i.speed, tp),
          driver: `none`,
          seed: typeof a.seed == `number` ? a.seed : void 0,
          health:
            typeof i.health == `number` ? V(i.health * 10, 1, 1e3) : void 0,
        });
      ((o.parked = !1),
        (o.coasting = !1),
        (o.controls.brake = 1),
        this.beginEnter(
          o,
          !0,
          !!i.abandoned,
          i.police === !0 || i.kind === `police`,
        ));
    }
    abortEnter(e) {
      ((this.entering = null),
        this.safe(() => this.ctx.player.setControlEnabled(!0)),
        (e.v.used = !0));
    }
    updateEntering(e) {
      let t = this.ctx,
        n = this.entering,
        r = n.v;
      if (!this.host.list.includes(r) || r.destroyed) {
        this.abortEnter(n);
        return;
      }
      let i = this.doorPoint(r, n.side, { x: 0, z: 0 });
      ((n.tx = i.x), (n.tz = i.z), (n.t += e));
      let a = V(n.t / n.dur, 0, 1),
        o = a * a * (3 - 2 * a),
        s = n.fx + (n.tx - n.fx) * o,
        c = n.fz + (n.tz - n.fz) * o,
        l = a >= 1 && Math.abs(r.speed) < 1.5,
        u = l
          ? Math.atan2(r.x - s, -(r.z - c))
          : Math.atan2(n.tx - n.fx, -(n.tz - n.fz));
      if ((this.safe(() => t.player.teleport(s, c, u)), n.carjack && l)) {
        if (
          (n.pull === 0 &&
            (r.spec.twoWheeler ||
              this.safe(() =>
                t.audio.play(`car_door`, { x: r.x, y: r.y + 1, z: r.z }),
              ),
            this.safe(() => t.cameraRig.shake(0.12))),
          (n.pull += e),
          !n.ejected && n.pull > sp * 0.45 && ((n.ejected = !0), !n.abandoned))
        ) {
          let e = this.doorPoint(r, n.side, { x: 0, z: 0 }, 0.9),
            i = r.heading + (n.side * Math.PI) / 2,
            a = !1;
          if (n.officer) {
            let n = t.police;
            typeof n?.spawnOfficer == `function` &&
              this.safe(() => void (a = !!n.spawnOfficer(e.x, e.z, i)));
          }
          (a || this.safe(() => t.peds.spawnFleeing(e.x, e.z, i)),
            this.safe(() =>
              t.audio.play(`ped_scream`, { x: e.x, y: r.y + 1.5, z: e.z }),
            ),
            this.safe(() => t.cameraRig.shake(0.2)),
            this.safe(() => t.input.rumble(0.5, 120)));
          let o = r.kind === `police`;
          (this.safe(() =>
            t.events.emit(`crime`, {
              type: `carjack`,
              pos: new R(r.x, r.y, r.z),
              severity: o ? 3 : 2,
            }),
          ),
            o &&
              this.safe(() =>
                t.events.emit(`crime`, {
                  type: `assault_police`,
                  pos: new R(r.x, r.y, r.z),
                  severity: 1,
                }),
              ));
        }
        if (n.pull < sp) return;
      }
      l
        ? ((this.entering = null),
          this.safe(() => t.player.setControlEnabled(!0)),
          this.host.putPlayerIn(r))
        : n.t > n.dur + 2.5 && this.abortEnter(n);
    }
    updateScreech(e, t) {
      let n = Math.abs(e.speed),
        r = 0;
      (e.burnout > 0
        ? (r = 0.85)
        : e.drifting && Math.abs(e.slip) > 0.16
          ? (r = V(0.35 + Math.abs(e.slip) * 1.3, 0, 1))
          : e.handbrake && n > 6
            ? (r = V(0.3 + n * 0.025, 0, 0.9))
            : e.braking > 0.9 &&
              n > 12 &&
              (r = V(0.25 + (n - 12) * 0.03, 0, 0.8)),
        e.spec.twoWheeler && (r *= 0.7),
        e.spec.boat && (r = 0),
        r > 0 ? (this.screechQuiet = 0) : (this.screechQuiet += t),
        !this.screech &&
          r > 0 &&
          this.safe(
            () =>
              (this.screech = this.ctx.audio.loop(`tire_screech`, {
                x: e.x,
                y: e.y,
                z: e.z,
                volume: 0,
              })),
          ));
      let i = this.screech;
      if (i) {
        if (this.screechQuiet > 1.2) {
          this.stopScreech();
          return;
        }
        try {
          (i.setPosition(e.x, e.y + 0.3, e.z),
            i.setParam(`slip`, r),
            i.setParam(`speed`, n),
            i.setVolume(r > 0 ? 0.45 + 0.55 * r : 0));
        } catch {}
      }
    }
    stopScreech() {
      try {
        this.screech?.stop();
      } catch {}
      ((this.screech = null), (this.screechQuiet = 0));
    }
    onEntered(e) {
      let t = this.ctx;
      ((this.current = e),
        (this.enteredAt = t.time.elapsed),
        (this.fireBeep = 0),
        this.safe(() => t.audio.setRadioActive(!0)),
        this.safe(() => {
          (this.engine?.stop(),
            (this.engine = t.audio.loop(e.electric ? `engine_ev` : e.h.engine, {
              x: e.x,
              y: e.y + 0.8,
              z: e.z,
            })));
        }),
        this.attachSpot(e),
        e.hasSiren &&
          this.safe(() =>
            t.ui.notify(
              {
                zh: `按 {interact} 或長按 {horn} 開關警示燈`,
                en: `Press {interact} or hold {horn} for the light bar`,
              },
              { duration: 3, kind: `info` },
            ),
          ));
    }
    onIgnite(e) {
      this.current === e &&
        (this.safe(() =>
          this.ctx.ui.notify(
            {
              zh: `車子起火了！快下車！`,
              en: `Your vehicle is on fire — get out!`,
            },
            { duration: 3, kind: `bad` },
          ),
        ),
        this.safe(() => this.ctx.input.rumble(0.6, 250)));
    }
    exit(e, t) {
      let n = Math.hypot(e.vx, e.vz),
        r = n > 7 && !t,
        i = e.y,
        a = { x: 0, z: 0 },
        o = !1,
        s = this.driverDoor(e);
      e.spec.boat && (o = this.shoreSpot(e, a));
      for (let t of o ? [] : [s, -s])
        if ((this.doorPoint(e, t, a), this.clearSpot(a.x, a.z, i, e.body))) {
          o = !0;
          break;
        }
      if (!o) {
        let t = -Math.sin(e.heading),
          n = Math.cos(e.heading);
        ((a.x = e.x + t * (e.spec.halfL + 0.8)),
          (a.z = e.z + n * (e.spec.halfL + 0.8)),
          this.clearSpot(a.x, a.z, i, e.body) || this.doorPoint(e, s, a));
      }
      (t && e.sinking > 0 && ((a.x = e.x), (a.z = e.z)),
        this.forceExit(e, !0, a.x, a.z, t),
        r
          ? (this.safe(() =>
              this.ctx.cameraRig.shake(V(0.25 + n * 0.012, 0.3, 0.6)),
            ),
            this.safe(() => this.ctx.input.rumble(0.6, 180)),
            e.spec.twoWheeler && (e.fallen = 1),
            (e.coasting = !0))
          : !t && Math.abs(e.speed) > 1 && (e.coasting = !0));
    }
    forceExit(e, t, n, r, i = !1) {
      let a = this.ctx;
      this.detach(e);
      let o = n ?? e.x,
        s = r ?? e.z;
      (this.safe(() =>
        a.player.exitVehicle(o, s, e.heading, { noTumbleDamage: i }),
      ),
        this.safe(() => a.cameraRig.follow(a.player.object, `foot`)),
        this.safe(() =>
          a.events.emit(`player:exitVehicle`, {
            vehicleId: e.id,
            kind: e.kind,
          }),
        ));
    }
    release(e) {
      (this.detach(e),
        this.safe(() =>
          this.ctx.events.emit(`player:exitVehicle`, {
            vehicleId: e.id,
            kind: e.kind,
          }),
        ));
    }
    detach(e) {
      let t = this.ctx;
      ((this.current = null),
        e.driver === `player` && (e.driver = `none`),
        (e.controls.throttle = 0),
        (e.controls.brake = 0),
        (e.controls.steer = 0),
        (e.controls.handbrake = !1),
        this.safe(() => t.audio.setRadioActive(!1)),
        this.safe(() => this.engine?.stop()),
        (this.engine = null),
        this.stopScreech(),
        this.attachSpot(null));
    }
    landingSpot(e, t, n, r, i) {
      let a = e.heading,
        o = Math.sin(a),
        s = -Math.cos(a),
        c = Math.cos(a),
        l = Math.sin(a),
        u = e.spec.halfW + 0.55,
        d = [
          [e.x + t * (u + 0.4), e.z + n * (u + 0.4)],
          [e.x + t * (u + 1.2), e.z + n * (u + 1.2)],
          [e.x - c * u, e.z - l * u],
          [e.x + c * u, e.z + l * u],
          [e.x - o * (e.spec.halfL + 0.6), e.z - s * (e.spec.halfL + 0.6)],
        ];
      for (let [t, n] of d)
        if (this.clearSpot(t, n, e.y, r)) return ((i.x = t), (i.z = n), !0);
      return ((i.x = e.x), (i.z = e.z), !1);
    }
    eject(e, t, n, r, i, a = e.x, o = e.z, s = `wall`) {
      let c = this.ctx;
      if (this.current !== e) return;
      let l = c.player,
        u = op(t),
        d = e.preVx,
        f = e.preVz,
        p = Math.hypot(d, f),
        m = p > 4 ? this.vaultPlan(e, i, a, o, s, d / p, f / p, p, t) : null;
      ((this.lastEject = {
        impact: t,
        tag: s,
        owner: i?.owner ?? `static`,
        x: a,
        z: o,
        speed: p,
        vault: !!m,
      }),
        (this.immune.until = c.time.elapsed + 1.2),
        (this.immune.a = e.body.id),
        (this.immune.b = i?.id ?? -1));
      let h, g, _;
      if (m) {
        let t = d / p,
          n = f / p;
        _ = m.vy;
        let r = m.hs;
        ((h = t * r), (g = n * r));
        let i = a - t * 0.2,
          s = o - n * 0.2;
        (this.forceExit(e, !1, i, s, !0),
          this.safe(() => l.teleport(i, s, Math.atan2(t, -n))),
          this.safe(() => l.knockdown?.(h, g, _)),
          l.mode === `foot` &&
            (l.position.y = Math.max(l.position.y, m.top + 0.15)));
      } else {
        let a = { x: 0, z: 0 };
        this.landingSpot(e, n, r, e.body, a);
        let o = d * n + f * r,
          s = d - o * n,
          c = f - o * r,
          u = i ? 1.5 + 0.05 * t : 2 + 0.12 * t;
        ((h = s * 0.7 + n * u),
          (g = c * 0.7 + r * u),
          (_ = 2.4 + t * 0.07),
          this.forceExit(e, !1, a.x, a.z, !0),
          this.safe(() => l.teleport(a.x, a.z, Math.atan2(h, -g))),
          this.safe(() => l.knockdown?.(h, g, _)));
      }
      ((e.fallen = 1),
        (e.coasting = !0),
        (e.vx *= 0.75),
        (e.vz *= 0.75),
        u > 0.5 &&
          this.safe(() =>
            l.damage({
              amount: u,
              source: `vehicle`,
              dir: dp.set(h, 0, g).normalize(),
            }),
          ),
        this.safe(() => c.cameraRig.shake(V(0.3 + t * 0.02, 0.3, 0.8))),
        this.safe(() => c.input.rumble(0.8, 250)),
        this.safe(() =>
          c.ui.notify(
            { zh: `摔車了！`, en: `Wiped out!` },
            { duration: 2, kind: `bad` },
          ),
        ));
    }
    vaultPlan(e, t, n, r, i, a, o, s, c) {
      let l = this.ctx,
        u,
        d;
      if (t) {
        if (
          (t.kind !== `vehicle` && t.kind !== `prop`) ||
          ((u = (t.y ?? e.y) + (t.height || 1.5)), u - e.y > 2)
        )
          return null;
        let n = Math.cos(t.heading),
          r = Math.sin(t.heading);
        d =
          2 *
          (Math.abs(a * n + o * r) * t.halfW +
            Math.abs(-a * r + o * n) * t.halfL);
      } else {
        if (ip.has(i)) return null;
        let t = l.statics.query(n - 0.5, r - 0.5, n + 0.5, r + 0.5, hp);
        ((u = -1 / 0), (d = 0.4));
        for (let n = 0; n < t; n++) {
          let t = hp[n];
          if (t.minY > e.y + 1.1 || t.maxY < e.y + 0.15) continue;
          if (ip.has(t.tag)) return null;
          t.maxY > u && (u = t.maxY);
          let r =
            t.kind === 2
              ? 2 * t.hx
              : 2 *
                (Math.abs(a * t.cos + o * t.sin) * t.hx +
                  Math.abs(-a * t.sin + o * t.cos) * t.hz);
          d = Math.max(d, Math.min(4, r));
        }
        if (!Number.isFinite(u) || u - e.y > 1.6) return null;
      }
      let f = V(3.2 + c * 0.08, 3.5, 6),
        p = ((d + 0.9) * ap) / 2,
        m = Math.max(s * 0.45, p / f);
      if (m > s * 0.9 && ((m = s * 0.9), (f = p / m), f > 6.5)) return null;
      for (let t = 2; t >= 1; t--) {
        let i = d + t,
          s = n + a * i,
          c = r + o * i,
          p = l.groundAt(s, c, e.y + 0.6);
        if (
          !(Math.abs(p - e.y) > 1.3 || l.plan.surfaceAt(s, c) === `water`) &&
          this.clearSpot(s, c, p, e.body) &&
          (fp.set(n - a * 0.2, u + 0.45, r - o * 0.2),
          pp.set(a, 0, o),
          !l.statics.raycast(fp, pp, i + 0.2, mp))
        )
          return { top: u, ext: d, vy: f, hs: m };
      }
      return null;
    }
    lowside(e) {
      if (this.current !== e || e.fallen > 0.5) return;
      let t = Math.hypot(e.vx, e.vz),
        n = e.yawRate >= 0 ? -1 : 1;
      this.eject(
        e,
        t * 0.75,
        Math.cos(e.heading) * n,
        Math.sin(e.heading) * n,
        null,
        e.x,
        e.z,
        `lowside`,
      );
    }
    blastEject(e) {
      let t = this.ctx;
      if (this.current !== e) return;
      let n = { x: 0, z: 0 },
        r = Math.cos(e.heading) * -1,
        i = Math.sin(e.heading) * -1;
      (this.landingSpot(e, r, i, e.body, n),
        this.forceExit(e, !1, n.x, n.z, !0));
      let a = n.x - e.x,
        o = n.z - e.z,
        s = Math.hypot(a, o) || 1,
        c = t.player;
      this.safe(() => c.knockdown?.((a / s) * 7, (o / s) * 7, 4.5));
      let l = c.health ?? 100,
        u = Math.min(50, Math.max(0, l - 8));
      (u > 0 &&
        this.safe(() =>
          c.damage({
            amount: u,
            source: `explosion`,
            dir: dp.set(a / s, 0.3, o / s).normalize(),
          }),
        ),
        (this.immune.until = t.time.elapsed + 1.5),
        (this.immune.a = e.body.id),
        (this.immune.b = -1));
    }
  };
