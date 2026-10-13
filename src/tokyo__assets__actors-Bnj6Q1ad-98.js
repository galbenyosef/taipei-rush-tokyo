// tokyo__assets__actors-Bnj6Q1ad 98 — math
// Lines 47178-48229 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var rw = { node: 0, axis: `x`, x: 0, z: 0 },
  iw = { x: 0, z: 0, heading: 0, link: null, lane: 0, s: 0 },
  aw = new R(),
  ow = new R(),
  sw = class {
    S;
    officers;
    list = [];
    vehFailUntil = 0;
    sirenT = 0;
    ticketOfficer = null;
    lastPatrolDespawn = -99;
    constructor(e, t) {
      ((this.S = e), (this.officers = t));
    }
    get vehiclesAvailable() {
      let e = this.S.ctx.vehicles;
      return (
        this.S.now >= this.vehFailUntil && !!e && typeof e.spawn == `function`
      );
    }
    count(e) {
      let t = 0;
      for (let n of this.list) n.alive && (!e || e(n)) && t++;
      return t;
    }
    isPoliceVehicle(e) {
      for (let t of this.list) if (t.v.id === e) return !0;
      return !1;
    }
    spawnVehicle(e, t, n, r, i, a) {
      let o = this.S.ctx;
      try {
        let s = o.vehicles.spawn(e, t, n, r, {
          driver: `ai`,
          speed: i,
          color: a,
          locked: !1,
        });
        if (!s) throw Error(`no vehicle`);
        return s;
      } catch (e) {
        return (
          (this.vehFailUntil = this.S.now + 12),
          this.S.ctx.params.has(`policeDebug`) &&
            console.info(`[test] police: vehicles.spawn failed`, e),
          null
        );
      }
    }
    track(e, t, n, r = !1) {
      let i = new $C(e, t, n, this.S.now, r);
      ((e.sirenOn = t === `pursuit` || t === `swat`),
        (e.lightsOn = t === `patrol` || t === `roadblock`),
        this.list.push(i));
      try {
        this.S.ctx.ui.addBlip(i.blipId, {
          x: e.body.x,
          z: e.body.z,
          icon: `police-car`,
          color: n ? `#8fa3c7` : `#4da3ff`,
        });
      } catch {}
      return i;
    }
    spawnPursuit(e = !1, t = !1) {
      if (!this.vehiclesAvailable) return null;
      let n = this.S,
        r = n.P,
        i = n.W;
      if (t && this.officers.activeCount >= n.budget.maxOfficers) return null;
      let a = i.evading ? i.lastX : r.x,
        o = i.evading ? i.lastZ : r.z,
        s = t ? 70 : 95,
        c = t ? 140 : 175,
        l = !1;
      if (!i.evading && !t && r.inVehicle && r.speed > 5) {
        let e = V(120 / r.speed, 2.5, 7),
          t = r.x + r.vx * e,
          i = r.z + r.vz * e;
        l = n.spawn.roadPoint(t, i, 25, 115, iw, {
          hidden: !0,
          tx: r.x,
          tz: r.z,
          inner: !0,
          awayX: r.x,
          awayZ: r.z,
          awayR: 70,
          preferMajor: !0,
        });
      }
      if (
        !l &&
        !n.spawn.roadPoint(a, o, s, c, iw, {
          hidden: !0,
          tx: a,
          tz: o,
          inner: !t,
          preferMajor: !t,
        })
      )
        return null;
      let u = t ? `scooter` : e ? `van` : `police`,
        d = t ? 16053751 : e ? 1843760 : void 0,
        f = this.spawnVehicle(
          u,
          iw.x,
          iw.z,
          iw.heading,
          t ? 9 : l ? 15 : 11,
          d,
        );
      if (!f) return null;
      let p = this.track(f, e ? `swat` : `pursuit`, e, t);
      if (t) {
        let e = this.officers.spawn(iw.x, iw.z, iw.heading, {
          role: `unit`,
          car: p,
          state: `ride`,
        });
        if (!e) return (this.despawn(p), null);
        ((e.ride = 1), (p.rider = e));
      }
      return (
        n.ctx.params.has(`policeDebug`) &&
          console.info(
            `[test] police: spawn ${u}${l ? ` (intercept)` : ``} at ${iw.x.toFixed(0)},${iw.z.toFixed(0)} d=${Math.hypot(iw.x - r.x, iw.z - r.z).toFixed(0)}`,
          ),
        p
      );
    }
    spawnPatrol() {
      if (!this.vehiclesAvailable) return null;
      let e = this.S.P;
      if (!this.S.spawn.roadPoint(e.x, e.z, 120, 210, iw, { hidden: !0 }))
        return null;
      let t = this.spawnVehicle(`police`, iw.x, iw.z, iw.heading, 9);
      if (!t) return null;
      let n = this.track(t, `patrol`, !1);
      return ((t.sirenOn = !1), (t.lightsOn = !0), n);
    }
    spawnParked(e, t, n) {
      if (!this.vehiclesAvailable) return null;
      let r = this.spawnVehicle(`police`, e, t, n, 0);
      if (!r) return null;
      let i = this.track(r, `roadblock`, !1);
      return ((i.crew = 0), i);
    }
    despawn(e, t = !0) {
      let n = this.list.indexOf(e);
      (n >= 0 && this.list.splice(n, 1),
        (e.rider &&=
          (e.rider.active && e.rider.state === `ride`
            ? this.officers.despawn(e.rider)
            : e.rider.car === e && (e.rider.car = null),
          null)),
        e.siren?.stop(),
        (e.siren = null),
        (e.alive = !1));
      for (let t of e.officers) t.car = null;
      e.officers.length = 0;
      try {
        this.S.ctx.ui.removeBlip(e.blipId);
      } catch {}
      if (t)
        try {
          this.S.ctx.vehicles.despawn(e.v);
        } catch {}
      e.role === `patrol` && (this.lastPatrolDespawn = this.S.now);
    }
    despawnAll() {
      for (; this.list.length;) this.despawn(this.list[this.list.length - 1]);
    }
    release(e) {
      if (e.v.driver === `player`) {
        let t = e.v.body;
        this.S.ctx.events.emit(`crime`, {
          type: `carjack`,
          pos: new R(t.x, 0, t.z),
          severity: 1.5,
          witnessed: !1,
        });
      }
      ((e.v.sirenOn = !1), (e.v.lightsOn = !1));
      let t = e.rider;
      (t &&
        t.active &&
        t.state === `ride` &&
        ((t.car = null),
        (t.body.active = !0),
        this.officers.knockDown(
          t,
          Math.cos(e.v.heading),
          Math.sin(e.v.heading),
          2.5,
        ),
        (e.rider = null)),
        this.despawn(e, !1));
    }
    silence() {
      for (let e of this.list) (e.siren?.stop(), (e.siren = null));
    }
    setLeaving(e) {
      if (e.role === `leave` || e.role === `roadblock`) return;
      ((e.role = `leave`),
        (e.v.sirenOn = !1),
        (e.v.lightsOn = !1),
        e.route.clear());
      let t = this.S.P,
        n = e.v.body,
        r = n.x - t.x,
        i = n.z - t.z,
        a = Math.hypot(r, i) || 1;
      ((e.leaveX = n.x + (r / a) * 320), (e.leaveZ = n.z + (i / a) * 320));
    }
    deploy(e, t, n) {
      let r = e.v.body;
      if (e.scooter) {
        let t = e.rider;
        if (!t || !t.active || t.state !== `ride`) return 0;
        let i = r.heading;
        return (
          (t.x = r.x - Math.cos(i) * 0.75),
          (t.z = r.z - Math.sin(i) * 0.75),
          (t.body.active = !0),
          this.officers.setState(t, n),
          e.officers.push(t),
          (e.crew = 0),
          (e.state = `deployed`),
          this.S.ctx.audio.play(`police_whistle`, {
            x: r.x,
            y: r.y + 1.5,
            z: r.z,
          }),
          1
        );
      }
      let i = r.heading,
        a = Math.sin(i),
        o = -Math.cos(i),
        s = Math.cos(i),
        c = Math.sin(i),
        l = e.v.spec.halfW,
        u = e.v.spec.halfL,
        d = Ie(this.S.ctx.plan.side),
        f = 0;
      for (let p = 0; p < t && e.crew > 0; p++) {
        let t, m, h;
        if (e.swat) {
          let e = (p / 2) | 0,
            n = p % 2 == 0 ? -1 : 1;
          ((t = r.x - a * (u + 0.7 + e * 0.9) + s * n * 0.55),
            (m = r.z - o * (u + 0.7 + e * 0.9) + c * n * 0.55),
            (h = i + Math.PI));
        } else {
          let e = p % 2 == 0 ? d : -d;
          ((t = r.x + s * e * (l + 0.55) + a * (0.45 - ((p / 2) | 0) * 1.1)),
            (m = r.z + c * e * (l + 0.55) + o * (0.45 - ((p / 2) | 0) * 1.1)),
            (h = i + (e * Math.PI) / 2));
        }
        let g = this.officers.spawn(t, m, h, {
          variant: +!!e.swat,
          role: `unit`,
          car: e,
          state: n,
        });
        if (!g) break;
        (e.officers.push(g), e.crew--, f++);
      }
      if (f) {
        e.state = `deployed`;
        let t = this.S.ctx;
        (t.audio.play(`car_door`, { x: r.x, y: r.y + 1, z: r.z }),
          e.swat ||
            t.audio.play(`police_whistle`, { x: r.x, y: r.y + 1.5, z: r.z }));
      }
      return f;
    }
    sees(e) {
      let t = this.S.P,
        n = e.v.body,
        r = t.x - n.x,
        i = t.z - n.z,
        a = Math.hypot(r, i),
        o = this.S.fx.night;
      if (a > Sx.car * (1 - o * (1 - Sx.nightMul))) return !1;
      if (a < Sx.hear) return !0;
      (aw.set(n.x, n.y + 1.3, n.z),
        ow.set(r, t.y + (t.inVehicle ? 0.9 : 1.2) - aw.y, i));
      let s = ow.length();
      return (
        ow.multiplyScalar(1 / s),
        !this.S.ctx.statics.raycast(aw, ow, s - 0.8)
      );
    }
    seesPoint(e, t, n, r) {
      let i = e.v.body,
        a = t - i.x,
        o = n - i.z,
        s = Math.hypot(a, o);
      return s > r
        ? !1
        : s < Sx.hear ||
            (aw.set(i.x, i.y + 1.3, i.z),
            ow.set(a, -0.3, o).normalize(),
            !this.S.ctx.statics.raycast(aw, ow, s - 0.5));
    }
    isHidden(e) {
      let t = this.S;
      if (t.now >= e.hidT) {
        e.hidT = t.now + 0.3 + Math.random() * 0.1;
        let n = e.v.body;
        e.hidden = !t.spawn.visible(n.x, n.y + 1, n.z, 3);
      }
      return e.hidden;
    }
    update(e) {
      let t = this.S,
        n = t.P,
        r = t.W,
        i = t.ctx;
      this.ticketOfficer &&
        (!this.ticketOfficer.active || this.ticketOfficer.state !== `ticket`) &&
        (this.ticketOfficer = null);
      for (let a = this.list.length - 1; a >= 0; a--) {
        let o = this.list[a],
          s = o.v;
        if (s.driver === `player`) {
          this.release(o);
          continue;
        }
        if (
          t.now >= o.listCheckT &&
          ((o.listCheckT = t.now + 1), !i.vehicles.list.includes(s))
        ) {
          this.despawn(o, !1);
          continue;
        }
        let c = s.body,
          l = Math.hypot(n.x - c.x, n.z - c.z);
        if (s.destroyed) {
          (o.destroyedAt < 0 && this.onDestroyed(o),
            t.now - o.destroyedAt > 30 && this.isHidden(o) && this.despawn(o));
          continue;
        }
        if (o.role !== `roadblock` && l > 230 && this.isHidden(o)) {
          for (let e of o.officers) e.car = null;
          ((o.officers.length = 0), this.despawn(o));
          continue;
        }
        if (
          o.state === `drive` &&
          o.driver.stuckCount >= 3 &&
          l > 50 &&
          o.officers.length === 0 &&
          this.isHidden(o)
        ) {
          this.despawn(o);
          continue;
        }
        switch (
          (o.scooter && this.checkRider(o),
          this.monitorHealth(o, l),
          t.now >= o.losT &&
            ((o.losT = t.now + 0.28 + Math.random() * 0.1),
            (o.los =
              n.alive &&
              o.role !== `leave` &&
              o.role !== `abandoned` &&
              this.sees(o)),
            o.los && (o.lastSeenT = t.now)),
          o.los && r.level > 0 && !r.frozen && t.spotted(`car`),
          r.level > 0 &&
          !r.frozen &&
          (o.role === `patrol` || o.role === `leave`) &&
          o.crew > 0 &&
          o.state === `drive`
            ? ((o.role = `pursuit`), (o.v.sirenOn = !0), o.route.clear())
            : r.level === 0 &&
              (o.role === `pursuit` || o.role === `swat`) &&
              o.officers.length === 0 &&
              !r.frozen &&
              this.setLeaving(o),
          o.role)
        ) {
          case `pursuit`:
          case `swat`:
            this.pursue(o, e, l);
            break;
          case `patrol`:
            this.patrol(o, e, l);
            break;
          case `leave`:
            this.leave(o, e, l);
            break;
          case `roadblock`:
          case `abandoned`:
            (o.driver.hold(s),
              o.role === `abandoned` &&
                l > 120 &&
                this.isHidden(o) &&
                this.despawn(o));
        }
        if (
          this.list[a] === o &&
          (o.scooter && this.seatRider(o, e),
          (s.sirenOn ||
            o.role === `patrol` ||
            (o.role === `roadblock` && !s.destroyed)) &&
            this.drawLights(o),
          t.now >= o.blipT)
        ) {
          o.blipT = t.now + 0.2;
          try {
            i.ui.updateBlip(o.blipId, c.x, c.z);
          } catch {}
        }
      }
      (this.updateSirens(e), this.playerCar());
    }
    checkRider(e) {
      let t = e.rider;
      if (t) {
        if (!t.active || t.state === `dead`) {
          e.state === `drive` &&
            ((e.rider = null), (e.crew = 0), (e.role = `abandoned`));
          return;
        }
        if (e.state === `drive` && t.state !== `ride`) {
          if (e.role === `leave` || e.role === `patrol`) {
            ((e.role = `abandoned`),
              (t.car = null),
              (e.rider = null),
              (e.crew = 0));
            return;
          }
          ((e.state = `deployed`),
            (e.crew = 0),
            (t.car = e),
            (t.body.active = !0),
            e.officers.includes(t) || e.officers.push(t));
        }
      }
    }
    monitorHealth(e, t) {
      let n = this.S,
        r = n.P,
        i = e.v;
      if (n.now < e.healthT) return;
      e.healthT = n.now + 0.25;
      let a = e.health0 - i.health;
      if (a < 20) {
        e.health0 = Math.max(e.health0, i.health);
        return;
      }
      e.health0 = i.health;
      let o = i.body;
      if (
        e.scooter &&
        e.rider &&
        e.rider.active &&
        e.rider.state === `ride` &&
        (a > 90 || (a > 45 && Math.random() < 0.5))
      ) {
        let t = e.rider;
        ((t.body.active = !0),
          this.officers.knockDown(t, o.x - r.x, o.z - r.z, 2.5));
      }
      if (r.inVehicle && r.vehicle) {
        let e = r.vehicle.body,
          t = Math.hypot(e.x - o.x, e.z - o.z);
        if (t < i.spec.halfL + r.vehicle.spec.halfL + 2.5) {
          let r = (o.x - e.x) / (t || 1),
            i = (o.z - e.z) / (t || 1);
          ((e.vx - o.vx) * r + (e.vz - o.vz) * i > 3 || n.W.level === 0) &&
            n.crimeAgainstPolice(
              `assault_police`,
              o.x,
              o.z,
              V(a / 300, 0.35, 0.9),
            );
          return;
        }
      }
      r.sinceShot < 1 &&
        t < 90 &&
        n.crimeAgainstPolice(`assault_police`, o.x, o.z, 0.5);
    }
    onDestroyed(e) {
      let t = this.S,
        n = t.P,
        r = e.v.body;
      ((e.destroyedAt = t.now),
        (e.alive = !1),
        e.siren?.stop(),
        (e.siren = null),
        (e.v.sirenOn = !1),
        (e.v.lightsOn = !1));
      let i = Math.hypot(n.x - r.x, n.z - r.z);
      (e.crew > 0 &&
        (i < 25 || n.sinceShot < 3) &&
        t.crimeAgainstPolice(`kill_police`, r.x, r.z, 1),
        (e.crew = 0));
      try {
        t.ctx.ui.removeBlip(e.blipId);
      } catch {}
    }
    carGoal(e, t, n) {
      if (e.scooter) {
        ((e.goalX = t), (e.goalZ = n));
        return;
      }
      let r = this.S;
      if (r.now < e.goalT && Math.hypot(t - e.goalSrcX, n - e.goalSrcZ) < 4)
        return;
      ((e.goalT = r.now + 0.5),
        (e.goalSrcX = t),
        (e.goalSrcZ = n),
        (e.goalX = t),
        (e.goalZ = n));
      let i = r.ctx.plan;
      i.surfaceAt(t, n) !== `road` &&
        nw(i, t, n, tw) &&
        ((e.goalX = tw.x), (e.goalZ = tw.z));
    }
    followRoute(e, t, n, r, i, a = 2.6) {
      let o = this.S,
        s = e.v,
        c = s.body;
      (this.carGoal(e, t, n),
        (t = e.goalX),
        (n = e.goalZ),
        (!e.route.valid ||
          o.now - e.route.builtAt > a ||
          Math.hypot(e.route.gx - t, e.route.gz - n) > 25) &&
          e.route.build(
            o.ctx.plan,
            o.now,
            c.x,
            c.z,
            s.heading,
            t,
            n,
            `lane`,
            e.scooter ? 9 : i,
            e.scooter ? 12 : 22,
            e.scooter,
          ));
      let l = Math.abs(s.speed);
      e.route.track(c.x, c.z, V(l * 0.85, 8, 26), ew, 45, !e.scooter);
      let u = r;
      if (ew.turn > 0.4) {
        let e = 22 - V(ew.turn / 1.6, 0, 1) * 14;
        u = Math.min(u, Math.sqrt(e * e + 14 * Math.max(0, ew.cornerDist - 5)));
      }
      return u;
    }
    pursue(e, t, n) {
      let r = this.S,
        i = r.P,
        a = r.W,
        o = e.v,
        s = o.body;
      if (a.frozen) {
        e.driver.hold(o);
        return;
      }
      if (e.state === `deployed`) {
        if (
          (e.driver.hold(o),
          i.inVehicle && i.speed > 6 && n > 22 && !a.minorOnly)
        )
          for (let t of e.officers)
            t.state !== `return` &&
              t.state !== `dead` &&
              t.state !== `down` &&
              this.officers.setState(t, `return`);
        e.officers.length === 0 &&
          (e.crew > 0
            ? ((e.state = `drive`), e.driver.reset(), e.route.clear())
            : (e.role = `abandoned`));
        return;
      }
      let c,
        l,
        u,
        d = null,
        f = 0,
        p = o.spec.maxSpeed * 0.92;
      if (a.evading)
        ((r.now > e.searchT || Math.hypot(e.sx - s.x, e.sz - s.z) < 14) &&
          ((e.searchT = r.now + 16 + Math.random() * 8),
          r.spawn.roadPoint(a.lastX, a.lastZ, 5, a.searchR, iw, {
            hidden: !1,
            clear: 0,
          })
            ? ((e.sx = iw.x), (e.sz = iw.z))
            : ((e.sx = a.lastX), (e.sz = a.lastZ))),
          (u = this.followRoute(e, e.sx, e.sz, 15, 0, 4)),
          (c = ew.x),
          (l = ew.z));
      else if (e.los && n < 80) {
        let t = V(n / 22, 0, 1.1);
        if (
          ((c = i.x + i.vx * t), (l = i.z + i.vz * t), i.inVehicle && i.vehicle)
        ) {
          u = V(i.speed + 5 + n * 0.15, 10, p);
          let t = Math.sin(i.heading),
            m = -Math.cos(i.heading),
            h = Math.cos(i.heading),
            g = Math.sin(i.heading),
            _ = (s.x - i.x) * t + (s.z - i.z) * m,
            v = (s.x - i.x) * h + (s.z - i.z) * g,
            y = Math.cos(o.heading - i.heading);
          if (!a.minorOnly && i.speed < 2.5 && i.stillT > 0.4) {
            let e = i.vehicle.body,
              t = s.x - e.x,
              n = s.z - e.z,
              r = Math.hypot(t, n) || 1,
              a = i.vehicle.spec.halfL + o.spec.halfL + 2.2;
            ((c = e.x + (t / r) * a),
              (l = e.z + (n / r) * a),
              (u = V(Math.hypot(c - s.x, l - s.z) * 0.7, 0, 14)),
              (f = 0.8));
          } else if (a.minorOnly) {
            let e = i.vehicle.body;
            ((c = e.x - t * 9),
              (l = e.z - m * 9),
              (u =
                i.speed < 2
                  ? V(Math.hypot(c - s.x, l - s.z) * 0.8, 0, 12)
                  : V(i.speed + Math.hypot(c - s.x, l - s.z) * 0.3, 4, p)),
              (f = 1.2));
          } else if (i.speed > 5 && _ > -3 && y < 0.35 && n < 60) {
            if (y < -0.4) {
              let e = v > 1.5 ? 1 : -1;
              ((c = i.x + h * e * 6 + i.vx * 0.4),
                (l = i.z + g * e * 6 + i.vz * 0.4),
                (u = Math.min(u, V(5 + n * 0.14, 5, 13))));
            } else {
              let e = 7 + i.speed * 0.35;
              ((c = i.x - t * e),
                (l = i.z - m * e),
                n < 40 && (u = Math.min(u, V(i.speed * 0.55 + 3, 5, 20))));
            }
          } else if (!e.scooter && i.speed > 5 && _ > 3 && n < 45)
            ((c = s.x + t * 25 - h * v * 0.3),
              (l = s.z + m * 25 - g * v * 0.3),
              (u = Math.min(u, Math.max(6, i.speed * 0.8))));
          else if (e.scooter) {
            let e = 6 + i.speed * 0.25;
            ((c = i.x - t * e),
              (l = i.z - m * e),
              (u = V(i.speed + (n - e) * 0.6, 3, p)));
          } else if (a.level >= 2 && n < 20) {
            let e = i.vehicle.body,
              n = v >= 0 ? 1 : -1;
            ((c =
              e.x - t * i.vehicle.spec.halfL * 0.7 + h * n * 0.8 + i.vx * 0.3),
              (l =
                e.z -
                m * i.vehicle.spec.halfL * 0.7 +
                g * n * 0.8 +
                i.vz * 0.3),
              (u = V(i.speed + (a.level >= 3 ? 6.5 : 3.5), 8, p)),
              (d = i.vehicle.body));
          }
          n < 45 &&
            r.now > e.barkT &&
            ((e.barkT = r.now + 7 + Math.random() * 4),
            r.bark(i.twoWheeler ? `pullOverScooter` : `pullOver`, s.x, s.z));
        } else {
          r.now > e.curbT &&
            ((e.curbT = r.now + 0.6),
            nw(r.ctx.plan, i.x, i.z, tw)
              ? ((e.curbX = tw.x), (e.curbZ = tw.z))
              : ((e.curbX = i.x), (e.curbZ = i.z)));
          let t = Math.hypot(e.curbX - s.x, e.curbZ - s.z);
          ((c = e.curbX),
            (l = e.curbZ),
            (u = V(t * 0.8, 0, 20)),
            t > 25 &&
              !e.scooter &&
              ((u = Math.min(u, this.followRoute(e, e.curbX, e.curbZ, 20, 1))),
              (c = ew.x),
              (l = ew.z)),
            (f =
              t > 25 && !e.scooter
                ? 0
                : Math.hypot(e.curbX - i.x, e.curbZ - i.z) < 12
                  ? 5
                  : 3),
            e.scooter &&
              ((c = i.x), (l = i.z), (u = V(n * 0.9, 0, 16)), (f = 3.5)));
        }
      } else {
        let t = i.inVehicle
          ? V(i.speed + 9 + n * 0.09, 20, p)
          : V(16 + n * 0.08, 16, 30);
        ((u = this.followRoute(e, i.x, i.z, t, 0)), (c = ew.x), (l = ew.z));
      }
      let m = e.driver.stuckCount;
      if (
        ((e.dbgTx = c),
        (e.dbgTz = l),
        (e.dbgWant = u),
        e.driver.drive(r.ctx, o, c, l, u, t, d, f),
        e.driver.stuckCount !== m &&
          r.ctx.params.has(`policeDebug`) &&
          console.info(
            `[test] police: car ${o.id} stuck #${e.driver.stuckCount} at ${s.x.toFixed(0)},${s.z.toFixed(0)} h=${o.heading.toFixed(2)} → target ${c.toFixed(0)},${l.toFixed(0)} want=${u.toFixed(1)} fwd=${e.driver.fwdHit.toFixed(1)} L=${e.driver.leftHit.toFixed(1)} R=${e.driver.rightHit.toFixed(1)} dyn=${e.driver.dynBody ? e.driver.dynBody.kind + `@` + e.driver.dynDist.toFixed(1) : `-`}`,
          ),
        e.driver.dynBody &&
          e.driver.dynDist < 8 &&
          Math.abs(o.speed) < 3 &&
          r.now > e.hornT &&
          e.driver.dynBody !== i.body &&
          ((e.hornT = r.now + 2.5 + Math.random() * 2),
          r.ctx.audio.play(`horn_car`, { x: s.x, y: s.y + 1, z: s.z })),
        a.evading)
      )
        return;
      let h = Math.abs(o.speed) < 2.6;
      if (
        a.minorOnly &&
        i.inVehicle &&
        i.stillT > 1.4 &&
        n < 22 &&
        h &&
        !this.ticketOfficer
      ) {
        this.deploy(e, 1, `ticket`) &&
          (this.ticketOfficer = e.officers[e.officers.length - 1]);
        return;
      }
      if (a.minorOnly) return;
      let g = e.swat ? 4 : 2,
        _ =
          !e.scooter &&
          e.los &&
          Math.hypot(e.curbX - s.x, e.curbZ - s.z) < 9 &&
          n < 70;
      ((i.onFoot &&
        h &&
        (n < (e.scooter ? 9 : 20) ||
          _ ||
          (e.driver.stuckCount >= 2 && n < 70))) ||
        (i.inVehicle && i.speed < 2 && i.stillT > 1.3 && n < 17 && h)) &&
        this.deploy(e, g, `chase`);
    }
    patrol(e, t, n) {
      let r = this.S,
        i = e.v,
        a = i.body,
        o = e.driver.stuckCount >= 2 && r.now - e.route.builtAt > 3;
      if (
        !e.route.valid ||
        o ||
        e.route.remaining(a.x, a.z) < 18 ||
        r.now - e.route.builtAt > 60
      ) {
        let t = Math.sin(i.heading),
          n = -Math.cos(i.heading);
        (r.spawn.roadPoint(a.x + t * 190, a.z + n * 190, 0, 130, iw, {
          hidden: !1,
          clear: 0,
        }) ||
          r.spawn.roadPoint(a.x, a.z, 140, 320, iw, {
            hidden: !1,
            clear: 0,
          })) &&
          (e.route.build(
            r.ctx.plan,
            r.now,
            a.x,
            a.z,
            i.heading,
            iw.x,
            iw.z,
            `lane`,
            1,
            o ? 8 : 22,
          ),
          o && (e.driver.stuckCount = 0));
      }
      e.route.track(a.x, a.z, V(Math.abs(i.speed) * 0.85, 7, 20), ew, 45, !0);
      let s = 11.5;
      if (
        (ew.turn > 0.4 &&
          (s = Math.min(
            s,
            Math.sqrt(49 + 10 * Math.max(0, ew.cornerDist - 5)),
          )),
        e.route.nextStop(rw))
      ) {
        let e = Math.hypot(rw.x - a.x, rw.z - a.z);
        if (e < 30) {
          let t = r.ctx.signals.state(rw.node, rw.axis);
          (t === `red` || (t === `yellow` && e > 12)) &&
            (s = Math.min(s, Math.sqrt(9 * Math.max(0, e - 2.5))));
        }
      }
      ((s = this.queueBehind(e, s, t)),
        (e.dbgTx = ew.x),
        (e.dbgTz = ew.z),
        (e.dbgWant = s),
        e.driver.drive(r.ctx, i, ew.x, ew.z, s, t, null, 0),
        this.holdInQueue(e, s),
        n > 270 && this.isHidden(e) && this.despawn(e));
    }
    queueBehind(e, t, n) {
      let r = e.driver,
        i = r.dynBody;
      if (((e.queued = !1), !i || i.owner !== `traffic` || r.dynDist > 14))
        return ((e.queueT = 0), t);
      let a = e.v.heading,
        o = Math.max(0, i.vx * Math.sin(a) - i.vz * Math.cos(a));
      if (((e.queueT = o > 1 ? 0 : e.queueT + n), e.queueT > 25)) return t;
      let s = r.dynDist < 1.2 ? 0 : o + Math.max(0, r.dynDist - 2) * 0.8;
      return s >= t ? t : ((e.queued = !0), s);
    }
    holdInQueue(e, t) {
      let n = e.v.controls;
      !n ||
        !e.queued ||
        t > 0.5 ||
        e.driver.reverseT > 0 ||
        ((n.throttle = 0),
        (n.brake = Math.abs(e.v.speed) > 0.3 ? 0.8 : 1),
        (n.handbrake = Math.abs(e.v.speed) < 0.3));
    }
    leave(e, t, n) {
      let r = this.S,
        i = e.v,
        a = this.queueBehind(
          e,
          this.followRoute(e, e.leaveX, e.leaveZ, 13, 1, 6),
          t,
        );
      (e.driver.drive(r.ctx, i, ew.x, ew.z, a, t, null, 0),
        this.holdInQueue(e, a),
        ((n > 95 && this.isHidden(e)) || r.now - e.born > 400) &&
          this.despawn(e));
    }
    seatRider(e, t) {
      let n = e.rider,
        r = e.v,
        i = r.body,
        a = z(r.heading - e.prevHeading);
      if (((e.prevHeading = r.heading), !n || !n.active || n.state !== `ride`))
        return;
      let o = r.heading;
      ((n.x = i.x + Math.sin(o) * 0.08),
        (n.z = i.z - Math.cos(o) * 0.08),
        (n.y = r.object.position.y - 0.12),
        (n.heading = o),
        (n.vx = i.vx),
        (n.vz = i.vz));
      let s = t > 0 ? a / t : 0,
        c = V(Math.atan((Math.abs(r.speed) * s) / 9.8), -0.5, 0.5);
      n.roll += (c - n.roll) * Math.min(1, t * 6);
    }
    drawLights(e) {
      let t = this.S,
        n = t.fx,
        r = e.v,
        i = r.body,
        a = i.heading,
        o = Math.sin(a),
        s = -Math.cos(a),
        c = Math.cos(a),
        l = Math.sin(a),
        u = r.object.position.y;
      if (e.scooter) {
        let r = n.night,
          a = Wx(t.now, 0, e.seed),
          d = Wx(t.now, 1, e.seed),
          f = i.x - o * 0.85,
          p = i.z - s * 0.85;
        (n.glare(
          f - c * 0.1,
          u + 1.42,
          p - l * 0.1,
          6 * a,
          0.4 * a,
          0.3 * a,
          0.45 + r * 0.5,
        ),
          n.glare(
            f + c * 0.1,
            u + 1.42,
            p + l * 0.1,
            0.5 * d,
            1.6 * d,
            9 * d,
            0.45 + r * 0.5,
          ),
          n.glare(
            i.x + o * 0.85,
            u + 1,
            i.z + s * 0.85,
            0.4 * a,
            1.3 * a,
            7 * a,
            0.3 + r * 0.3,
          ),
          r > 0.15 &&
            (n.pool(i.x, u, i.z, 3.2, 0.35 * a * r, 0.03 * a * r, 0.02 * a * r),
            n.pool(i.x, u, i.z, 3.2, 0.04 * d * r, 0.12 * d * r, 0.7 * d * r)));
        return;
      }
      this.drawBar(r, e.swat, e.seed, e.role === `patrol`);
    }
    drawBar(e, t, n, r) {
      let i = this.S,
        a = i.fx,
        o = e.body,
        s = o.heading,
        c = Math.sin(s),
        l = -Math.cos(s),
        u = Math.cos(s),
        d = Math.sin(s),
        f = e.object.position.y,
        p = f + (t ? e.spec.height + 0.08 : e.spec.height + 0.1),
        m = a.night,
        h = i.now,
        g = r ? 0.5 : 1,
        _ = (0.62 + m * 0.75) * (r ? 0.8 : 1),
        v = t ? 0.62 : 0.42,
        y = t ? e.spec.halfL * 0.55 : -0.12;
      for (let t = 0; t <= 1; t++) {
        let i = t,
          b = Wx(h * (r ? 0.6 : 1), i, n) * g,
          x = i === 0 ? -1 : 1,
          S = o.x + u * x * v + c * y,
          C = o.z + d * x * v + l * y;
        i === 0
          ? a.glare(S, p, C, 6.5 * b, 0.45 * b, 0.35 * b, _)
          : a.glare(S, p, C, 0.5 * b, 1.7 * b, 10 * b, _);
        let w = o.x + u * x * v * 0.45 + c * y,
          T = o.z + d * x * v * 0.45 + l * y,
          E = Wx(h + 0.11, i, n) * g;
        i === 0
          ? a.glare(w, p, T, 3.2 * E, 0.25 * E, 0.2 * E, _ * 0.6)
          : a.glare(w, p, T, 0.3 * E, 0.9 * E, 5 * E, _ * 0.6);
        let D = Wx(h * 1.3 + 0.25, i, n + 0.3) * g,
          O = o.x + c * (e.spec.halfL + 0.02) + u * x * 0.55,
          k = o.z + l * (e.spec.halfL + 0.02) + d * x * 0.55;
        if (
          (i === 0
            ? a.glare(
                O,
                f + 0.62,
                k,
                2.2 * D,
                0.15 * D,
                0.1 * D,
                0.35 + m * 0.4,
              )
            : a.glare(
                O,
                f + 0.62,
                k,
                0.15 * D,
                0.5 * D,
                3.4 * D,
                0.35 + m * 0.4,
              ),
          m > 0.15)
        ) {
          let e = b * m,
            t = o.x + u * x * 2.6,
            n = o.z + d * x * 2.6;
          i === 0
            ? a.pool(t, f, n, 5.5, 0.45 * e, 0.035 * e, 0.03 * e, 1.4, s)
            : a.pool(t, f, n, 5.5, 0.05 * e, 0.16 * e, 0.95 * e, 1.4, s);
        }
      }
    }
    playerSiren = null;
    playerCar() {
      let e = this.S,
        t = e.P,
        n = t.inVehicle ? t.vehicle : null;
      if (n && n.kind === `police` && n.sirenOn && !n.destroyed && n) {
        if ((this.drawBar(n, !1, 0.37, !1), !this.playerSiren))
          try {
            this.playerSiren = e.ctx.audio.loop(`siren_police`, {
              x: n.body.x,
              y: n.body.y + 1.5,
              z: n.body.z,
              volume: 0.8,
            });
          } catch {
            this.playerSiren = null;
          }
        this.playerSiren?.setPosition(n.body.x, n.body.y + 1.5, n.body.z);
      } else this.playerSiren &&= (this.playerSiren.stop(), null);
    }
    updateSirens(e) {
      let t = this.S,
        n = t.P,
        r = t.ctx;
      if (((this.sirenT -= e), this.sirenT <= 0)) {
        this.sirenT = 0.3;
        let e = t.W.frozen ? 0 : t.budget.sirens;
        for (let e of this.list) e.sd = 1 / 0;
        for (let t = 0; t < e; t++) {
          let e = null,
            t = 1 / 0;
          for (let r of this.list) {
            if (
              !r.v.sirenOn ||
              r.role === `roadblock` ||
              r.role === `abandoned` ||
              r.role === `patrol` ||
              !r.alive ||
              r.sd !== 1 / 0
            )
              continue;
            let i = Math.hypot(r.v.body.x - n.x, r.v.body.z - n.z);
            i < t && i < 260 && ((t = i), (e = r));
          }
          if (!e) break;
          e.sd = t;
        }
        for (let e of this.list) {
          let t = e.sd !== 1 / 0;
          if (t && !e.siren)
            try {
              e.siren = r.audio.loop(`siren_police`, {
                x: e.v.body.x,
                y: e.v.body.y + 1.5,
                z: e.v.body.z,
                volume: 0.9,
              });
            } catch {
              e.siren = null;
            }
          else !t && e.siren && (e.siren.stop(), (e.siren = null));
        }
      }
      for (let e of this.list) {
        if (!e.siren) continue;
        let t = e.v.body;
        e.siren.setPosition(t.x, t.y + 1.5, t.z);
        let r = Math.hypot(t.x - n.x, t.z - n.z);
        e.siren.setParam(`mode`, r < 35 && e.los ? 1 : 0);
      }
    }
  },
  cw = null;
