// tokyo/assets/net-PtwKfaxg 07 — session
// Lines 2543-3857 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
var St = class {
    ctx;
    session;
    world;
    driverOf;
    occ = new Map();
    ride = null;
    stats = { boards: 0, leaves: 0, takes: 0, refused: 0 };
    asking = null;
    revisions = new Map();
    pending = new Map();
    cand = null;
    get candidate() {
      return this.cand;
    }
    pose = { x: 0, y: 0, z: 0, heading: 0, vx: 0, vz: 0, speed: 0 };
    afkSaid = !1;
    constructor(e, t, n, r) {
      ((this.ctx = e),
        (this.session = t),
        (this.world = n),
        (this.driverOf = r),
        (n.onDriver = (e, t) => this.setDriver(e, t)),
        (n.onOwned = (e, t) => {
          (this.ride?.id === e && this.unboard(!1),
            this.asking?.id === e && (this.asking = null),
            t && this.stats.takes++);
        }));
    }
    capacity(e) {
      let t = ht[e];
      if (t) return Math.min(4, t);
      try {
        return this.ctx.vehicles.specs[e]?.twoWheeler ? 2 : 4;
      } catch {
        return 4;
      }
    }
    occupants(e) {
      return (this.occ.get(e) ?? []).filter((e) => e >= 0);
    }
    mine(e) {
      return this.world.vehicles.get(e)?.owner === this.session.slot;
    }
    currentRequest(e, t, n) {
      return (
        W(t.generation) === (n.generation ?? 0) ||
        (t.generation === void 0 && !this.session.supportsVehicleGeneration(e))
      );
    }
    seatsFor(e) {
      let t = this.world.vehicles.get(e),
        n = t ? this.capacity(t.kind) : 4,
        r = this.occ.get(e);
      if (!r || r.length !== n) {
        let t = r ?? [];
        ((r = Array.from({ length: n }, (e, n) => (n < t.length ? t[n] : -1))),
          this.occ.set(e, r));
      }
      return r;
    }
    publish(e) {
      let t = this.seatsFor(e),
        n = this.world.vehicles.get(e)?.generation ?? 0,
        r = this.revisions.get(e),
        i = r?.generation === n ? r.revision + 1 : 1;
      (this.revisions.set(e, { generation: n, revision: i }),
        this.session.sendEvent({
          t: `seats`,
          id: e,
          occ: t,
          generation: n,
          revision: i,
        }),
        this.apply(e, t));
    }
    setDriver(e, t) {
      if (!this.mine(e)) return;
      let n = this.seatsFor(e);
      for (let e = 1; e < n.length; e++) n[e] === t && (n[e] = -1);
      ((n[0] = t), this.publish(e));
    }
    announce() {
      for (let [e, t] of this.occ)
        this.mine(e) &&
          t.some((e) => e >= 0) &&
          this.session.sendEvent({
            t: `seats`,
            id: e,
            occ: t,
            generation: this.world.vehicles.get(e)?.generation ?? 0,
            revision: this.revisions.get(e)?.revision ?? 0,
          });
    }
    onRoster(e) {
      for (let [t, n] of this.occ) {
        if (!this.world.vehicles.has(t)) {
          (this.occ.delete(t),
            this.revisions.delete(t),
            this.pending.delete(t));
          continue;
        }
        if (!this.mine(t)) continue;
        let r = !1;
        for (let t = 0; t < n.length; t++)
          n[t] >= 0 && !e.has(n[t]) && ((n[t] = -1), (r = !0));
        r && this.publish(t);
      }
    }
    onEvent(e, t) {
      let n = bt(t.id) | 0;
      switch (t.t) {
        case `seat-req`: {
          let r = this.world.vehicles.get(n);
          if (
            !r ||
            !this.mine(n) ||
            r.condition?.destroyed ||
            this.world.localOf(n)?.destroyed
          )
            return (
              this.session.sendEvent({ t: `seat-no`, id: n, why: `gone` }, e),
              !0
            );
          if (!this.currentRequest(e, t, r)) return !0;
          let i = this.seatsFor(n);
          if (i.includes(e)) return (this.publish(n), !0);
          let a = this.world.localOf(n);
          if (a && Math.abs(a.speed) > 3.5)
            return (
              this.session.sendEvent({ t: `seat-no`, id: n, why: `moving` }, e),
              !0
            );
          let o = i.indexOf(-1, 1);
          if (o < 0)
            return (
              this.session.sendEvent({ t: `seat-no`, id: n, why: `full` }, e),
              !0
            );
          for (let [t, r] of this.occ)
            if (t !== n && this.mine(t)) {
              let n = r.indexOf(e, 1);
              n > 0 && ((r[n] = -1), this.publish(t));
            }
          return ((i[o] = e), this.publish(n), !0);
        }
        case `seat-leave`: {
          if (
            !this.mine(n) ||
            !this.currentRequest(e, t, this.world.vehicles.get(n))
          )
            return !0;
          let r = this.seatsFor(n),
            i = r.indexOf(e, 1);
          return (i > 0 && ((r[i] = -1), this.publish(n)), !0);
        }
        case `seats`: {
          let r = this.world.vehicles.get(n),
            i = W(t.generation),
            a = bt(t.revision, 0);
          if (
            i === null ||
            !Array.isArray(t.occ) ||
            !Number.isInteger(a) ||
            a < 0 ||
            n < 1 ||
            n > 65535
          )
            return !0;
          if (!r || i > (r.generation ?? 0)) {
            let r = this.pending.get(n),
              o = r ? (W(r.message.generation) ?? 0) : -1;
            return (
              (this.pending.size < 24 || r) &&
                (i > o || (i === o && a > bt(r?.message.revision))) &&
                this.pending.set(n, {
                  from: e,
                  message: t,
                  at: performance.now(),
                }),
              !0
            );
          }
          if (r.owner !== e || i !== (r.generation ?? 0)) return !0;
          let o = this.revisions.get(n);
          if (
            o?.generation === i &&
            (a < o.revision || (a > 0 && a === o.revision))
          )
            return !0;
          let s = new Set(),
            c = Array.from({ length: this.capacity(r.kind) }, (e, n) => {
              let i = t.occ[n];
              return !Number.isInteger(i) ||
                i < 0 ||
                i > 7 ||
                s.has(i) ||
                (n === 0 && i !== r.owner)
                ? -1
                : (s.add(i), i);
            });
          return (
            this.revisions.set(n, { generation: i, revision: a }),
            this.apply(n, c),
            !0
          );
        }
        case `seat-no`:
          return (
            this.asking?.id === n &&
              this.world.vehicles.get(n)?.owner === e &&
              (this.world.cancelTake(n),
              (this.asking = null),
              this.stats.refused++,
              this.ctx.events.emit(`notify`, {
                text:
                  t.why === `version`
                    ? ot
                    : t.why === `full`
                      ? U.carFull
                      : t.why === `moving`
                        ? U.carMoving
                        : U.carGone,
                kind: `bad`,
              })),
            !0
          );
      }
      return !1;
    }
    apply(e, t) {
      this.occ.set(e, t);
      let n = this.session.slot,
        r = t.indexOf(n);
      r > 0 && !this.ride && this.asking?.id === e && !this.asking.take
        ? this.board(e, r)
        : r > 0 && this.ride?.id !== e
          ? this.leaveSeat(e)
          : this.ride?.id === e && r < 0 && this.unboard(!0);
    }
    carPose(e, t) {
      let n = this.driverOf(e.id);
      if (n && n.buf.count) {
        let e = n.pose,
          r = e.flags & 2 ? -1 : 1;
        ((t.x = e.x),
          (t.y = e.y),
          (t.z = e.z),
          (t.heading = e.heading),
          (t.pitch = e.pitch ?? 0),
          (t.roll = e.roll ?? 0),
          (t.heave = e.heave ?? 0),
          (t.surge = e.surge ?? 0),
          (t.speed = e.speed),
          (t.vx = Math.sin(e.heading) * e.speed * r),
          (t.vz = -Math.cos(e.heading) * e.speed * r));
      } else
        ((t.x = e.x),
          (t.y = e.y),
          (t.z = e.z),
          (t.heading = e.heading),
          (t.pitch = e.visualPose?.pitch ?? 0),
          (t.roll = e.visualPose?.roll ?? 0),
          (t.heave = e.visualPose?.heave ?? 0),
          (t.surge = e.visualPose?.surge ?? 0),
          (t.speed = t.vx = t.vz = 0));
      return t;
    }
    board(e, t) {
      let n = this.world.vehicles.get(e),
        r = this.ctx.player,
        a = this.asking;
      if (
        ((this.asking = null),
        !n ||
          n.condition?.destroyed ||
          this.ctx.paused ||
          !a ||
          performance.now() - a.t > vt ||
          (a.generation !== void 0 && a.generation !== (n.generation ?? 0)) ||
          r.mode !== `foot` ||
          r.vehicleId >= 0)
      )
        return void this.leaveSeat(e);
      let o = this.carPose(n, this.pose),
        s = this.ctx.vehicles.specs[n.kind];
      if (
        !s ||
        Math.abs(o.y - r.position.y) > 2.5 ||
        Math.abs(o.speed) > 3.5 ||
        xt(r.position.x, r.position.z, o.x, o.z, o.heading, s.halfW, s.halfL) >
          3.6
      )
        return void this.leaveSeat(e);
      let c;
      try {
        ((c = this.ctx.vehicles.spawn(n.kind, o.x, o.z, o.heading, {
          color: n.color,
          seed: n.seed,
          locked: !0,
          driver: `none`,
          rider: !1,
          y: o.y,
        })),
          this.ctx.vehicles.puppet?.(c, o),
          n.condition && this.ctx.vehicles.applyCondition?.(c, n.condition));
      } catch (t) {
        if (c)
          try {
            this.ctx.vehicles.despawn(c);
          } catch {}
        (console.warn(`[net] seat`, t), this.leaveSeat(e));
        return;
      }
      let l = !!c.spec.twoWheeler,
        u = new i();
      u.name = `net-passenger-seat`;
      let d = c.seat,
        f = d?.parent ?? c.object;
      if (
        (d
          ? (u.position.copy(d.position), u.quaternion.copy(d.quaternion))
          : u.position.set(-0.38, 0.5, 0),
        l)
      )
        ((u.position.z += 0.37),
          (u.position.y += 0.06),
          (u.userData = { riderStyle: `scooter`, tuck: 0 }));
      else {
        let e = Math.abs(u.position.x) || 0.36;
        ((u.position.x =
          t === 1 ? (d && d.position.x < 0 ? e : -e) : t === 2 ? -e : e),
          t >= 2 && (u.position.z += 0.85));
      }
      (f.add(u),
        (this.ride = { id: e, seat: t, proxy: c, node: u }),
        (this.afkSaid = !1),
        this.stats.boards++);
      try {
        r.enterVehicle(c.id, u, l ? `ride` : `drive`, l ? `scooter` : `car`);
      } catch (e) {
        (console.warn(`[net] seat enter`, e), this.leave());
        return;
      }
      let p = this.driverOf(e) ?? void 0,
        m = p ? V(p.slot, p.char, p.name) : null;
      this.ctx.events.emit(`notify`, {
        text: m ? U.riding(m) : U.ridingParked,
        kind: `good`,
      });
    }
    leaveSeat(e) {
      let t = this.world.vehicles.get(e);
      t &&
        this.session.sendEvent(
          { t: `seat-leave`, id: e, generation: t.generation ?? 0 },
          t.owner,
        );
    }
    leave() {
      let e = this.ride;
      e && (this.leaveSeat(e.id), this.unboard(!0), this.stats.leaves++);
    }
    unboard(e, t = !1) {
      let n = this.ride;
      if (!n) return;
      this.ride = null;
      let r = this.ctx.player,
        i = n.proxy;
      if (r.mode === `vehicle` && r.vehicleId === i.id) {
        let a = i.heading,
          o = n.node.position.x >= 0 ? 1 : -1,
          s = (i.spec.halfW ?? 0.9) + 0.75,
          c = n.seat >= 2 ? 0.6 : 0,
          l = i.body.x + Math.cos(a) * o * s - Math.sin(a) * c,
          u = i.body.z + Math.sin(a) * o * s + Math.cos(a) * c;
        try {
          r.exitVehicle(e ? l : i.body.x, e ? u : i.body.z, a, {
            noTumbleDamage: t || !e,
          });
        } catch {}
      }
      n.node.removeFromParent();
      try {
        (this.ctx.vehicles.puppet?.(i, null), this.ctx.vehicles.despawn(i));
      } catch {}
    }
    syncRidePose() {
      let e = this.ride;
      if (!e) return;
      let t = this.world.vehicles.get(e.id),
        n = this.ctx.player;
      t &&
        n.mode === `vehicle` &&
        n.vehicleId === e.proxy.id &&
        (this.ctx.vehicles.puppet?.(e.proxy, this.carPose(t, this.pose)),
        t.condition &&
          this.ctx.vehicles.applyCondition?.(e.proxy, t.condition));
    }
    update() {
      let e = this.ctx,
        t = e.input;
      for (let [e, t] of this.pending) {
        let n = this.world.vehicles.get(e),
          r = W(t.message.generation);
        performance.now() - t.at > vt || (n && r < (n.generation ?? 0))
          ? this.pending.delete(e)
          : n &&
            r === (n.generation ?? 0) &&
            (this.pending.delete(e), this.onEvent(t.from, t.message));
      }
      this.asking &&
        performance.now() - this.asking.t > vt &&
        (this.world.cancelTake(this.asking.id),
        this.asking.take || this.leaveSeat(this.asking.id),
        (this.asking = null),
        e.events.emit(`notify`, { text: U.noAnswer, kind: `bad` }));
      let n = this.ride;
      if (n) {
        let r = this.world.vehicles.get(n.id),
          i = e.player;
        if (!r || r.condition?.destroyed)
          return (
            e.events.emit(`notify`, { text: U.carGone, kind: `info` }),
            this.unboard(!0, !0)
          );
        if (i.mode !== `vehicle` || i.vehicleId !== n.proxy.id) {
          (this.leaveSeat(n.id), (this.ride = null), n.node.removeFromParent());
          try {
            (e.vehicles.puppet?.(n.proxy, null), e.vehicles.despawn(n.proxy));
          } catch {}
          return;
        }
        if ((this.syncRidePose(), i.controlEnabled === !1)) return;
        if (t.pressed(`enter`)) return (t.consume(`enter`), this.leave());
        if (
          (this.occ.get(n.id)?.[0] ?? -1) < 0 &&
          t.pressed(`interact`) &&
          !this.asking
        ) {
          (t.consume(`interact`),
            (this.asking = {
              id: n.id,
              t: performance.now(),
              take: !0,
              generation: r.generation ?? 0,
            }),
            this.world.take(n.id) || (this.asking = null));
          return;
        }
        let a = this.driverOf(n.id);
        a && a.pose.flags & 32
          ? (this.afkSaid ||
              e.events.emit(`notify`, {
                text: U.driverAfk(V(a.slot, a.char, a.name)),
                kind: `info`,
              }),
            (this.afkSaid = !0))
          : (this.afkSaid = !1);
        return;
      }
      this.cand = null;
      let r = e.player;
      if (
        r.mode !== `foot` ||
        r.controlEnabled === !1 ||
        this.session.role === `off`
      )
        return;
      let i = r.position.x,
        a = r.position.z,
        o = null;
      for (let t of this.world.vehicles.values()) {
        if (t.owner === this.session.slot || t.condition?.destroyed) continue;
        let n = this.carPose(t, this.pose);
        if (n.speed > _t || Math.abs(n.y - r.position.y) > 2.5) continue;
        let s = e.vehicles.specs[t.kind];
        if (!s) continue;
        let c = xt(i, a, n.x, n.z, n.heading, s.halfW, s.halfL);
        c < gt &&
          (!o || c < o.d) &&
          (o = { v: t, driven: !!this.driverOf(t.id), d: c });
      }
      if (!o || (o.driven && !e.vehicles.puppet)) return;
      let s = e.vehicles.enterTarget;
      if (s) {
        let e = `body` in s && s.body ? s.body : s;
        if (xt(i, a, e.x, e.z, e.heading, e.halfW, e.halfL) + yt < o.d) return;
      }
      let c = this.occ.get(o.v.id),
        l = o.driven && !!c && c.indexOf(-1, 1) < 0;
      ((this.cand = { v: o.v, driven: o.driven, full: l }),
        !(!t.pressed(`enter`) || l || this.asking) &&
          (t.consume(`enter`),
          (this.asking = {
            id: o.v.id,
            t: performance.now(),
            take: !o.driven,
            generation: o.v.generation ?? 0,
          }),
          o.driven
            ? this.session.sendEvent(
                { t: `seat-req`, id: o.v.id, generation: o.v.generation ?? 0 },
                o.v.owner,
              )
            : this.world.take(o.v.id) || (this.asking = null)));
    }
    prompt() {
      let e = this.ctx.ui,
        t = null;
      if (this.ride)
        t =
          (this.occ.get(this.ride.id)?.[0] ?? -1) < 0
            ? U.promptSlide
            : U.promptOut;
      else if (this.cand) {
        let e = this.driverOrOwner(this.cand.v.owner) ?? {
          zh: `朋友`,
          en: `a friend`,
        };
        t = this.cand.full
          ? U.promptFull
          : this.cand.driven
            ? U.promptRide(e)
            : U.promptTake(e);
      }
      if (t)
        try {
          e.prompt(t);
        } catch {}
    }
    driverOrOwner(e) {
      for (let t of this.session.members.values())
        if (t.slot === e) return V(t.slot, t.char, t.name);
      return null;
    }
    clear() {
      (this.ride && this.unboard(!0, !0),
        this.occ.clear(),
        (this.asking = null),
        (this.cand = null),
        this.revisions.clear(),
        this.pending.clear());
    }
  },
  Ct = 250,
  wt = 18,
  Tt = 6e5,
  Et = 3200,
  Dt = 5,
  Ot = 30,
  kt = 9e5,
  At = 9e4,
  jt = [
    `#ffcf4d`,
    `#35e0ff`,
    `#ff3d9a`,
    `#3ddc84`,
    `#ffb13d`,
    `#b48cff`,
    `#ff7a45`,
    `#9fe870`,
  ],
  Mt = new Set([`landmark`, `park`, `market`, `temple`, `plaza`]),
  G = (e, t = 0) => (typeof e == `number` && Number.isFinite(e) ? e : t),
  Nt = (e) => {
    let t = Math.max(0, e) / 1e3;
    return `${Math.floor(t / 60)}:${(t % 60).toFixed(1).padStart(4, `0`)}`;
  },
  Pt = class {
    ctx;
    session;
    positions;
    nameOf;
    muted;
    race = null;
    hunt = null;
    ping = null;
    stats = { pings: 0, races: 0, finishes: 0, hunts: 0, checkins: 0 };
    blips = new Set();
    t = 0;
    constructor(e, t, n, r, i = () => !1) {
      ((this.ctx = e),
        (this.session = t),
        (this.positions = n),
        (this.nameOf = r),
        (this.muted = i),
        window.addEventListener(`keydown`, (e) => {
          if (
            e.code !== `KeyG` ||
            e.repeat ||
            this.session.role === `off` ||
            this.ctx.paused
          )
            return;
          let t = e.target;
          (!t || (t.tagName !== `INPUT` && t.tagName !== `TEXTAREA`)) &&
            this.goToPing() &&
            e.preventDefault();
        }));
    }
    notice(e, t = `info`, n) {
      this.ctx.events.emit(`notify`, { text: e, kind: t, duration: n });
    }
    blip(e, t, n, r, i, a, o = !1) {
      try {
        (this.blips.has(e)
          ? this.ctx.ui.updateBlip(e, t, n)
          : this.ctx.ui.addBlip(e, {
              x: t,
              z: n,
              icon: r,
              color: i,
              label: a,
              clampToEdge: !0,
              pulse: o,
            }),
          this.blips.add(e));
      } catch {}
    }
    unblip(e) {
      for (let t of [...this.blips])
        if (t.startsWith(e)) {
          this.blips.delete(t);
          try {
            this.ctx.ui.removeBlip(t);
          } catch {}
        }
    }
    me() {
      return this.ctx.player.position;
    }
    spot() {
      let e = this.ctx.ui.waypoint;
      if (e) return { x: e.x, z: e.z, own: !1 };
      let t = this.me();
      return { x: t.x, z: t.z, own: !0 };
    }
    sharePing() {
      if (this.session.role === `off`) return;
      let e = this.spot();
      (this.session.sendEvent({
        t: `ping`,
        x: Math.round(e.x),
        z: Math.round(e.z),
      }),
        this.stats.pings++,
        this.notice(e.own ? U.pingSentHere : U.pingSent, `good`));
    }
    goToPing() {
      let e = this.ping;
      if (!e || performance.now() > e.until) return !1;
      try {
        this.ctx.ui.setWaypoint(
          { x: e.x, z: e.z },
          U.pingLabel(this.nameOf(e.from)),
          !0,
        );
      } catch {}
      return (this.notice(U.pingGps, `good`), !0);
    }
    get busy() {
      return !!this.race || !!this.hunt;
    }
    startRace() {
      if (this.session.role === `off` || this.busy) return !1;
      let e = this.ctx.ui.waypoint;
      if (!e) return (this.notice(U.raceNeedsWaypoint, `bad`), !1);
      let t = this.me();
      if (Math.hypot(e.x - t.x, e.z - t.z) < 150)
        return (this.notice(U.raceTooClose, `bad`), !1);
      let n = {
        t: `race`,
        rid: (Math.random() * 1e9) | 0,
        x: Math.round(e.x),
        z: Math.round(e.z),
      };
      return (
        this.session.sendEvent(n),
        this.onRace(this.session.slot, n),
        this.stats.races++,
        !0
      );
    }
    startHunt() {
      if (this.session.role === `off` || this.busy) return !1;
      let e = [...this.positions().values()],
        t = e.reduce((e, t) => e + t.x, 0) / Math.max(1, e.length),
        n = e.reduce((e, t) => e + t.z, 0) / Math.max(1, e.length),
        r = this.ctx.plan.landmarks
          .filter((e) => Mt.has(e.kind))
          .map((e) => ({ l: e, d: Math.hypot(e.x - t, e.z - n) }))
          .filter((e) => e.d > 120)
          .sort((e, t) => e.d - t.d)
          .slice(0, 10);
      for (let e = r.length - 1; e > 0; e--) {
        let t = Math.floor(Math.random() * (e + 1));
        [r[e], r[t]] = [r[t], r[e]];
      }
      let i = r.slice(0, Dt);
      if (i.length < 2) return (this.notice(U.huntNone, `bad`), !1);
      let a = {
        t: `hunt`,
        hid: (Math.random() * 1e9) | 0,
        targets: i.map(({ l: e }) => ({
          x: Math.round(e.x),
          z: Math.round(e.z),
          zh: e.name.zh,
          en: e.name.en,
        })),
      };
      return (
        this.session.sendEvent(a),
        this.onHunt(this.session.slot, a),
        this.stats.hunts++,
        !0
      );
    }
    stop() {
      (this.race?.org === this.session.slot && this.endRace(!0),
        this.hunt?.org === this.session.slot && this.endHunt(!0));
    }
    onEvent(e, t) {
      switch (t.t) {
        case `ping`: {
          let n = G(t.x, NaN),
            r = G(t.z, NaN);
          return !Number.isFinite(n) || !Number.isFinite(r) || this.muted(e)
            ? !0
            : ((this.ping = {
                x: n,
                z: r,
                from: e,
                until: performance.now() + At,
              }),
              this.unblip(`net-ping-`),
              this.blip(
                `net-ping-${e}`,
                n,
                r,
                `waypoint`,
                jt[e] ?? `#35e0ff`,
                U.pingLabel(this.nameOf(e)),
                !0,
              ),
              this.notice(U.pingGot(this.nameOf(e)), `info`, 6),
              !0);
        }
        case `race`:
          return (this.onRace(e, t), !0);
        case `race-fin`: {
          let n = this.race;
          return (
            !n ||
              n.org !== this.session.slot ||
              G(t.rid) !== n.rid ||
              this.ranked(e, Math.max(0, G(t.ms))),
            !0
          );
        }
        case `race-rank`: {
          let n = this.race;
          if (!n || e !== n.org || G(t.rid) !== n.rid) return !0;
          let r = G(t.slot, -1) | 0;
          return (
            this.notice(
              U.raceRank(this.nameOf(r), G(t.place, 1) | 0, Nt(G(t.ms))),
              r === this.session.slot ? `good` : `info`,
              5,
            ),
            !0
          );
        }
        case `race-end`:
          return (
            this.race &&
              e === this.race.org &&
              G(t.rid) === this.race.rid &&
              this.endRace(!1),
            !0
          );
        case `hunt`:
          return (this.onHunt(e, t), !0);
        case `hunt-claim`: {
          let n = this.hunt;
          return (
            !n ||
              n.org !== this.session.slot ||
              G(t.hid) !== n.hid ||
              this.award(G(t.i, -1) | 0, e),
            !0
          );
        }
        case `hunt-got`: {
          let n = this.hunt;
          return (
            !n ||
              e !== n.org ||
              G(t.hid) !== n.hid ||
              this.got(G(t.i, -1) | 0, G(t.slot, -1) | 0),
            !0
          );
        }
        case `hunt-end`:
          return (
            this.hunt &&
              e === this.hunt.org &&
              G(t.hid) === this.hunt.hid &&
              this.endHunt(!1),
            !0
          );
      }
      return !1;
    }
    onRace(e, t) {
      if (this.race) return;
      let n = G(t.x, NaN),
        r = G(t.z, NaN);
      if (!Number.isFinite(n) || !Number.isFinite(r)) return;
      let i = this.positions(),
        a = i.get(e),
        o = this.me(),
        s =
          e === this.session.slot ||
          (!t.late && !!a && Math.hypot(a.x - o.x, a.z - o.z) < Ct),
        c = performance.now();
      if (
        ((this.race = {
          rid: G(t.rid) | 0,
          org: e,
          x: n,
          z: r,
          go: s ? c + Et : 0,
          done: !s,
          ranks: [],
          racers: new Set(),
          until: c + Et + Tt,
        }),
        e === this.session.slot)
      )
        for (let [e, t] of i)
          Math.hypot(t.x - o.x, t.z - o.z) < Ct && this.race.racers.add(e);
      if (
        (this.blip(`net-race`, n, r, `race`, `#ff3d4a`, U.raceFinish, !0), !s)
      )
        return this.notice(U.raceWatch(this.nameOf(e)), `info`, 6);
      try {
        this.ctx.ui.setWaypoint({ x: n, z: r }, U.raceFinish, !0);
      } catch {}
      this.notice(U.raceStart(this.nameOf(e)), `good`, 4);
      for (let e = 0; e < 3; e++)
        setTimeout(() => this.big(String(3 - e)), e * 1e3 + 200);
      setTimeout(() => this.big(U.go, `#3ddc84`), Et);
    }
    big(e, t = `#ffcf4d`) {
      this.ctx.events.emit(`ui:bigMessage`, {
        title: e,
        color: t,
        duration: 0.85,
      });
    }
    ranked(e, t) {
      let n = this.race;
      if (!n || n.ranks.some((t) => t.slot === e)) return;
      n.ranks.push({ slot: e, ms: t });
      let r = n.ranks.length,
        i = {
          t: `race-rank`,
          rid: n.rid,
          slot: e,
          place: r,
          ms: Math.round(t),
        };
      (this.session.sendEvent(i),
        this.onEvent(n.org, i),
        [...n.racers].every((e) => n.ranks.some((t) => t.slot === e)) &&
          setTimeout(() => this.endRace(!0), 1500));
    }
    endRace(e) {
      let t = this.race;
      t &&
        ((this.race = null),
        this.unblip(`net-race`),
        e &&
          t.org === this.session.slot &&
          this.session.sendEvent({ t: `race-end`, rid: t.rid }),
        this.notice(U.raceOver, `info`));
    }
    onHunt(e, t) {
      if (this.hunt || !Array.isArray(t.targets)) return;
      let n = t.targets.slice(0, 8).flatMap((e) => {
        let t = G(e?.x, NaN),
          n = G(e?.z, NaN);
        return !Number.isFinite(t) || !Number.isFinite(n)
          ? []
          : [
              {
                x: t,
                z: n,
                name: {
                  zh: String(e.zh ?? ``).slice(0, 24),
                  en: String(e.en ?? ``).slice(0, 40),
                },
                by: G(e.by, -1) | 0,
              },
            ];
      });
      if (!n.length) return;
      let r =
        typeof t.left == `number` ? Math.min(kt, Math.max(0, t.left)) : kt;
      ((this.hunt = {
        hid: G(t.hid) | 0,
        org: e,
        targets: n,
        until: performance.now() + r,
        asked: new Set(),
      }),
        n.forEach(
          (e, t) =>
            e.by < 0 &&
            this.blip(
              `net-hunt-${t}`,
              e.x,
              e.z,
              `landmark`,
              `#ffcf4d`,
              U.huntTarget(e.name),
              !0,
            ),
        ),
        this.notice(U.huntStart(this.nameOf(e), n.length), `good`, 6),
        this.big(U.huntTitle));
    }
    award(e, t) {
      let n = this.hunt,
        r = n?.targets[e];
      if (!n || !r || r.by >= 0) return;
      let i = { t: `hunt-got`, hid: n.hid, i: e, slot: t };
      (this.session.sendEvent(i),
        this.got(e, t),
        n.targets.every((e) => e.by >= 0) &&
          setTimeout(() => this.endHunt(!0), 1500));
    }
    got(e, t) {
      let n = this.hunt?.targets[e];
      !n ||
        n.by >= 0 ||
        ((n.by = t),
        this.unblip(`net-hunt-${e}`),
        t === this.session.slot && this.stats.checkins++,
        this.notice(
          U.huntGot(this.nameOf(t), n.name),
          t === this.session.slot ? `good` : `info`,
          5,
        ));
    }
    endHunt(e) {
      let t = this.hunt;
      if (!t) return;
      ((this.hunt = null),
        this.unblip(`net-hunt-`),
        e &&
          t.org === this.session.slot &&
          this.session.sendEvent({ t: `hunt-end`, hid: t.hid }));
      let n = new Map();
      for (let e of t.targets) e.by >= 0 && n.set(e.by, (n.get(e.by) ?? 0) + 1);
      let r = [...n].sort((e, t) => t[1] - e[1])[0];
      (this.notice(
        r ? U.huntWinner(this.nameOf(r[0]), r[1]) : U.huntOverNone,
        `good`,
        8,
      ),
        r && this.big(U.huntWinner(this.nameOf(r[0]), r[1]), `#ffcf4d`));
    }
    update(e) {
      if (((this.t += e), this.t < 0.2)) return;
      this.t = 0;
      let t = performance.now(),
        n = this.me();
      this.ping &&
        t > this.ping.until &&
        ((this.ping = null), this.unblip(`net-ping-`));
      let r = this.race;
      if (r) {
        if (t > r.until && r.org === this.session.slot) this.endRace(!0);
        else if (
          r.go &&
          !r.done &&
          t >= r.go &&
          Math.hypot(n.x - r.x, n.z - r.z) < wt
        ) {
          ((r.done = !0), this.stats.finishes++);
          let e = t - r.go;
          (r.org === this.session.slot
            ? this.ranked(this.session.slot, e)
            : this.session.sendEvent(
                { t: `race-fin`, rid: r.rid, ms: Math.round(e) },
                r.org,
              ),
            this.big(U.finished(Nt(e)), `#3ddc84`));
        }
      }
      let i = this.hunt;
      i &&
        (t > i.until && i.org === this.session.slot
          ? this.endHunt(!0)
          : i.targets.forEach((e, t) => {
              e.by >= 0 ||
                i.asked.has(t) ||
                Math.hypot(n.x - e.x, n.z - e.z) > Ot ||
                (i.asked.add(t),
                i.org === this.session.slot
                  ? this.award(t, this.session.slot)
                  : this.session.sendEvent(
                      { t: `hunt-claim`, hid: i.hid, i: t },
                      i.org,
                    ));
            }));
    }
    status() {
      let e = (e) => this.ctx.t(e),
        t = performance.now(),
        n = this.me(),
        r = this.race;
      if (r)
        return r.go
          ? t < r.go
            ? `🏁 ${e(U.raceGetReady)}`
            : r.done
              ? `🏁 ${e(U.raceDone)}`
              : `🏁 ${Nt(t - r.go)} · ${Math.round(Math.hypot(n.x - r.x, n.z - r.z))} m`
          : `🏁 ${e(U.raceWatching)}`;
      let i = this.hunt;
      if (i) {
        let n = i.targets.filter((e) => e.by === this.session.slot).length,
          r = i.targets.filter((e) => e.by < 0).length,
          a = Math.max(0, Math.ceil((i.until - t) / 6e4));
        return `📸 ${e(U.huntStatus(n, r, a))}`;
      }
      return ``;
    }
    announce() {
      let e = this.session.slot,
        t = this.race;
      t &&
        t.org === e &&
        this.session.sendEvent({
          t: `race`,
          rid: t.rid,
          x: t.x,
          z: t.z,
          late: !0,
        });
      let n = this.hunt;
      n &&
        n.org === e &&
        this.session.sendEvent({
          t: `hunt`,
          hid: n.hid,
          targets: n.targets.map((e) => ({
            x: e.x,
            z: e.z,
            zh: e.name.zh,
            en: e.name.en,
            by: e.by,
          })),
          left: Math.max(0, n.until - performance.now()),
        });
      let r = this.ping;
      r &&
        r.from === e &&
        performance.now() < r.until &&
        this.session.sendEvent({
          t: `ping`,
          x: Math.round(r.x),
          z: Math.round(r.z),
        });
    }
    onRoster(e) {
      (this.race && !e.has(this.race.org) && this.endRace(!1),
        this.hunt && !e.has(this.hunt.org) && this.endHunt(!1),
        this.ping &&
          !e.has(this.ping.from) &&
          ((this.ping = null), this.unblip(`net-ping-`)));
    }
    clear() {
      ((this.race = null),
        (this.hunt = null),
        (this.ping = null),
        this.unblip(`net-`));
    }
  },
  Ft = 15e3,
  It = 1500,
  Lt = 4e3,
  Rt = 1e4,
  zt = 2e3,
  Bt = [
    { urls: [`stun:stun.cloudflare.com:3478`, `stun:stun.l.google.com:19302`] },
  ],
  Vt = class {
    peer = ``;
    hello = !1;
    lastRx = 0;
    pc;
    state;
    events;
    status = `new`;
    rtt = 0;
    bundle = !1;
    stats = { txBytes: 0, rxBytes: 0, txPackets: 0, rxPackets: 0 };
    onOpen;
    onClose;
    onPose;
    onEvent;
    onSignal;
    pendingIce = [];
    closed = !1;
    pingT = 0;
    pingTimer = null;
    constructor(e = Bt, t = !1) {
      ((this.pc = new RTCPeerConnection({
        iceServers: e,
        bundlePolicy: `max-bundle`,
        iceTransportPolicy: t ? `relay` : `all`,
      })),
        (this.state = this.pc.createDataChannel(`state`, {
          negotiated: !0,
          id: 0,
          ordered: !1,
          maxRetransmits: 0,
        })),
        (this.events = this.pc.createDataChannel(`events`, {
          negotiated: !0,
          id: 1,
          ordered: !0,
        })),
        (this.state.binaryType = `arraybuffer`),
        (this.state.onmessage = (e) => {
          this.closed ||
            !(e.data instanceof ArrayBuffer) ||
            e.data.byteLength > 2048 ||
            ((this.lastRx = performance.now()),
            (this.stats.rxBytes += e.data.byteLength),
            this.stats.rxPackets++,
            this.onPose?.(e.data));
        }),
        (this.events.onmessage = (e) => {
          if (this.closed || typeof e.data != `string` || e.data.length > 16384)
            return;
          ((this.lastRx = performance.now()),
            (this.stats.rxBytes += e.data.length));
          let t;
          try {
            t = JSON.parse(e.data);
          } catch {
            return;
          }
          if (t && typeof t == `object`) {
            if (t.t === `_ping`) return this.sendEvent({ t: `_pong`, s: t.s });
            if (t.t === `_pong`) {
              let e = performance.now() - Number(t.s);
              e >= 0 &&
                e < 6e4 &&
                (this.rtt = this.rtt ? this.rtt + (e - this.rtt) * 0.2 : e);
              return;
            }
            this.onEvent?.(t);
          }
        }));
      let n = () => {
        this.status === `open` ||
          this.closed ||
          (this.state.readyState === `open` &&
            this.events.readyState === `open` &&
            ((this.status = `open`),
            (this.lastRx = performance.now()),
            (this.pingTimer = setInterval(() => {
              if (performance.now() - this.lastRx > Rt) return this.close();
              this.sendEvent({ t: `_ping`, s: performance.now() });
            }, zt)),
            this.onOpen?.()));
      };
      ((this.state.onopen = n),
        (this.events.onopen = n),
        (this.events.onclose = () => this.close()),
        (this.pc.onicecandidate = (e) => {
          !this.closed &&
            !this.bundle &&
            this.onSignal?.({ ice: e.candidate ? e.candidate.toJSON() : null });
        }),
        (this.pc.onconnectionstatechange = () => {
          let e = this.pc.connectionState;
          (e === `connecting` &&
            this.status === `new` &&
            (this.status = `connecting`),
            (e === `failed` || e === `closed`) && this.close());
        }));
    }
    async start() {
      this.status = `connecting`;
      let e = await this.pc.createOffer();
      (await this.pc.setLocalDescription(e),
        this.bundle && (await this.gatherDone(Lt)),
        this.closed ||
          this.onSignal?.({ sdp: this.pc.localDescription.toJSON() }));
    }
    async signal(e) {
      if (!this.closed) {
        if (e.sdp) {
          await this.pc.setRemoteDescription(e.sdp);
          for (let e of this.pendingIce.splice(0))
            await this.pc.addIceCandidate(e).catch(() => {});
          if (e.sdp.type === `offer`) {
            this.status = `connecting`;
            let e = await this.pc.createAnswer();
            (await this.pc.setLocalDescription(e),
              this.bundle && (await this.gatherDone(Lt)),
              this.closed ||
                this.onSignal?.({ sdp: this.pc.localDescription.toJSON() }));
          }
        } else if (e.ice !== void 0) {
          if (!e.ice) return;
          this.pc.remoteDescription
            ? await this.pc.addIceCandidate(e.ice).catch(() => {})
            : this.pendingIce.push(e.ice);
        }
      }
    }
    async gathered() {
      return (await this.gatherDone(Ft), Ht(this.pc.localDescription.toJSON()));
    }
    async gatherDone(e) {
      let t = this.pc;
      t.iceGatheringState !== `complete` &&
        (await _(
          new Promise((e) => {
            let n = null,
              r = () => {
                (t.removeEventListener(`icegatheringstatechange`, i),
                  t.removeEventListener(`icecandidate`, a),
                  n && clearTimeout(n),
                  e());
              },
              i = () => t.iceGatheringState === `complete` && r(),
              a = (e) => {
                if (!e.candidate) return r();
                !n &&
                  / udp /i.test(e.candidate.candidate) &&
                  (n = setTimeout(r, It));
              };
            (t.addEventListener(`icegatheringstatechange`, i),
              t.addEventListener(`icecandidate`, a),
              / udp /i.test(t.localDescription?.sdp ?? ``) &&
                (n = setTimeout(r, It)));
          }),
          e,
          `net: ICE gathering`,
          () => void 0,
        ));
    }
    async offerBlob() {
      return (
        (this.status = `connecting`),
        await this.pc.setLocalDescription(await this.pc.createOffer()),
        this.gathered()
      );
    }
    async answerBlob(e) {
      return (
        (this.status = `connecting`),
        await this.pc.setRemoteDescription(Ut(e, `offer`)),
        await this.pc.setLocalDescription(await this.pc.createAnswer()),
        this.gathered()
      );
    }
    async acceptBlob(e) {
      await this.pc.setRemoteDescription(Ut(e, `answer`));
    }
    sendPose(e) {
      let t = this.state;
      if (t.readyState !== `open` || t.bufferedAmount > 16384) return !1;
      try {
        return (
          t.send(e),
          (this.stats.txBytes += e.byteLength),
          this.stats.txPackets++,
          !0
        );
      } catch {
        return !1;
      }
    }
    sendEvent(e) {
      this.events.readyState === `open` && this.sendText(JSON.stringify(e));
    }
    sendText(e) {
      let t = this.events;
      if (t.readyState === `open`)
        try {
          (t.send(e), (this.stats.txBytes += e.length));
        } catch {}
    }
    close() {
      if (!this.closed) {
        ((this.closed = !0),
          (this.status = `closed`),
          this.pingTimer && clearInterval(this.pingTimer));
        try {
          (this.state.close(), this.events.close(), this.pc.close());
        } catch {}
        this.onClose?.();
      }
    }
  };
