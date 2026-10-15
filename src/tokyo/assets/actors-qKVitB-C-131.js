// tokyo/assets/actors-qKVitB-C 131 — ctx
// Lines 60229-60941 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var HM = { zh: `下車步行過去`, en: `Get out and walk` },
  UM = /^[（(](電話|phone|無線電|radio|對講機|簡訊|訊息|text|LINE)/i,
  WM = /車隊|無線電|dispatch|廣播|radio/i,
  GM = new Set([
    `你`,
    `you`,
    `我`,
    `me`,
    `阿傑`,
    `jie`,
    `小雯`,
    `wen`,
    `阿凱`,
    `kai`,
    `小美`,
    `mei`,
  ]),
  KM = /客人|乘客|顧客|路人|customer|passenger|client|passer/i,
  qM = { zh: `停車`, en: `Stop the vehicle` },
  JM = { goto: 16765517, drive: 16765517, drop: 5104127, danger: 16731486 },
  YM = class {
    S;
    def;
    onEnd;
    ctx;
    hud;
    alive = !0;
    result = null;
    elapsed = 0;
    bonus = 0;
    vars = {};
    step = `start`;
    origin = { x: 0, z: 0, heading: 0 };
    blessedAtStart = !1;
    giver = null;
    hostActor = null;
    resumeStep = -1;
    checkpoint = null;
    waitFor = null;
    get claimsInteract() {
      let e = this.waitFor;
      return !e ||
        (e.kind !== `pressE` && e.kind !== `tap`) ||
        (e.onFoot && !this.onFoot)
        ? !1
        : this.dist(e.x, e.z) <= (e.r ?? 3) + 0.5;
    }
    waiters = [];
    watchers = [];
    watcherHoles = 0;
    cleanups = [];
    actors = [];
    vehicles = [];
    timerLeft = null;
    timerLabel;
    timerExpire = null;
    stopwatch = null;
    blipKeys = new Set();
    subtitleBusyUntil = 0;
    lineQueue = [];
    policeSuspended = !1;
    constructor(e, t, n) {
      ((this.S = e),
        (this.def = t),
        (this.onEnd = n),
        (this.ctx = e.ctx),
        (this.hud = e.hud));
    }
    update(e) {
      if (this.alive) {
        if (
          ((this.elapsed += e),
          this.lineQueue.length &&
            this.ctx.time.real >= this.subtitleBusyUntil - 0.15)
        ) {
          let e = this.lineQueue.shift();
          this.line(e.speaker, e.text, e.dur);
        }
        for (let t of this.actors) t.update(e);
        if (this.timerLeft !== null) {
          if (
            ((this.timerLeft -= e),
            this.hud.setTimer(Math.max(0, this.timerLeft), this.timerLabel),
            this.timerLeft <= 0)
          ) {
            let e = this.timerExpire;
            if (
              (this.clearTimer(),
              e ? e() : this.fail({ zh: `時間到了`, en: `Time's up` }),
              !this.alive)
            )
              return;
          }
        } else
          this.stopwatch &&
            ((this.stopwatch.t += e),
            this.hud.setTimer(this.stopwatch.t, this.stopwatch.label));
        for (let t = 0; t < this.watchers.length; t++) {
          let n = this.watchers[t];
          if (n && (n(e), !this.alive)) return;
        }
        if (this.watcherHoles > 0) {
          let e = 0;
          for (let t = 0; t < this.watchers.length; t++)
            this.watchers[t] && (this.watchers[e++] = this.watchers[t]);
          ((this.watchers.length = e), (this.watcherHoles = 0));
        }
        for (let t = 0; t < this.waiters.length;) {
          let n = this.waiters[t],
            r = !1;
          try {
            r = n.check(e);
          } catch (e) {
            (console.error(`[missions] step check threw`, e), (r = !0));
          }
          if (!this.alive) return;
          r ? (this.waiters.splice(t, 1), n.resolve()) : t++;
        }
      }
    }
    until(e) {
      return new Promise((t) => {
        this.alive && this.waiters.push({ check: e, resolve: t });
      });
    }
    wait(e) {
      let t = 0;
      return this.until((n) => (t += n) >= e);
    }
    first(e) {
      let t = Object.keys(e),
        n = t[0];
      return this.until((r) => {
        for (let i of t) if (e[i](r)) return ((n = i), !0);
        return !1;
      }).then(() => n);
    }
    every(e) {
      return (
        this.watchers.push(e),
        () => {
          let t = this.watchers.indexOf(e);
          t >= 0 && ((this.watchers[t] = null), this.watcherHoles++);
        }
      );
    }
    onCleanup(e) {
      this.cleanups.push(e);
    }
    branch(e) {
      e().catch((e) => {
        this.alive && console.error(`[missions] branch error`, e);
      });
    }
    on(e, t) {
      let n = this.ctx.events.on(e, (e) => {
        this.alive && t(e);
      });
      return (this.cleanups.push(n), n);
    }
    objective(e) {
      this.alive && this.hud.setObjective(e);
    }
    line(e, t, n) {
      if (!this.alive) return 0;
      let r = this.lineDuration(t, n);
      (this.hud.subtitle(t, r, e ?? void 0),
        (this.subtitleBusyUntil = this.ctx.time.real + r));
      try {
        this.voice(e, t, r);
      } catch (e) {
        console.warn(`[missions] dialogue actor match failed`, e);
      }
      return r;
    }
    lineDuration(e, t) {
      return t ?? Math.min(6.5, Math.max(2.6, e.zh.length * 0.2 + 1.2));
    }
    queueLine(e, t, n) {
      if (!this.alive) return 0;
      if (!this.lineQueue.length && !this.talking) return this.line(e, t, n);
      this.lineQueue.push({ speaker: e, text: t, dur: n });
      let r = Math.max(0, this.subtitleBusyUntil - this.ctx.time.real);
      for (let e of this.lineQueue) r += this.lineDuration(e.text, e.dur);
      return r;
    }
    get dialogueLeft() {
      let e = Math.max(0, this.subtitleBusyUntil - this.ctx.time.real);
      for (let t of this.lineQueue) e += this.lineDuration(t.text, t.dur);
      return e;
    }
    say(e, t, n) {
      let r = this.line(e, t, n);
      return this.wait(r * 0.92);
    }
    async dialogue(e) {
      for (let [t, n, r] of e) await this.say(t, n, r);
    }
    get talking() {
      return this.ctx.time.real < this.subtitleBusyUntil;
    }
    notify(e, t = `mission`, n) {
      this.alive && this.hud.notify(e, t, n);
    }
    setTimer(e, t, n) {
      ((this.timerLeft = e),
        (this.timerLabel = t),
        (this.timerExpire = n ?? null),
        (this.stopwatch = null),
        this.hud.setTimer(e, t));
    }
    addTime(e) {
      this.timerLeft !== null && (this.timerLeft += e);
    }
    get timeLeft() {
      return this.timerLeft ?? 0;
    }
    clearTimer() {
      ((this.timerLeft = null),
        (this.timerExpire = null),
        (this.stopwatch = null),
        this.hud.setTimer(null));
    }
    startStopwatch(e) {
      ((this.timerLeft = null), (this.stopwatch = { t: 0, label: e }));
    }
    get stopwatchTime() {
      return this.stopwatch?.t ?? 0;
    }
    progress(e, t = 0) {
      this.alive && this.hud.setProgress(e, t);
    }
    waypoint(e, t) {
      this.alive && this.hud.setWaypoint(e, t);
    }
    blip(e, t) {
      if (!this.alive) return;
      let n = `m:${this.def.id}:${e}`;
      (this.blipKeys.add(n), this.hud.addBlip(n, t));
    }
    moveBlip(e, t, n) {
      this.hud.updateBlip(`m:${this.def.id}:${e}`, t, n);
    }
    removeBlip(e) {
      let t = `m:${this.def.id}:${e}`;
      (this.blipKeys.delete(t), this.hud.removeBlip(t));
    }
    marker(e) {
      let t = this.S.markers.add(e);
      return (this.cleanups.push(() => t.remove()), t);
    }
    prop(e, t = 0, n = -1e3, r = 0, i = 0, a = 1) {
      let o = this.S.props.add(e, t, n, r, i, a);
      return (o && this.cleanups.push(() => o.remove()), o);
    }
    actor(e, t, n, r = 0, i) {
      let a = new AM(this.ctx, e, t, n, r, i);
      return (this.track(a), a);
    }
    track(e) {
      ((e.onRemove = () => {
        let t = this.actors.indexOf(e);
        (t >= 0 && this.actors.splice(t, 1),
          this.hostActor === e && (this.hostActor = null));
      }),
        this.actors.push(e));
    }
    host(e, t, n, r = 0) {
      let i = this.giver;
      this.giver = null;
      let a;
      i
        ? (i.distTo(t, n) > 1.5 && i.place(t, n, r), this.track(i), (a = i))
        : (a = this.actor(e, t, n, r));
      let o = this.def.giverName;
      return (o && a.setNames([o]), (this.hostActor = a), a);
    }
    removeActor(e) {
      e.remove();
    }
    voice(e, t, n) {
      let r = this.actors;
      if (!e || !r.length) return;
      let i = (typeof e == `string` ? e : (e.zh ?? ``)).toLowerCase(),
        a = (typeof e == `string` ? e : (e.en ?? ``)).toLowerCase();
      if (UM.test(t.zh) || UM.test(t.en) || WM.test(i)) return;
      let o = this.px,
        s = this.pz,
        c = this.ctx.player.position;
      if (GM.has(i) || GM.has(a)) {
        for (let e of r) !e.speaking && e.distTo(o, s) < 10 && e.listen(c, n);
        return;
      }
      let l = null;
      for (let e of r)
        if (e.answersTo(i, a)) {
          l = e;
          break;
        }
      if (!l) {
        let e = BM(i + ` ` + a);
        if (e) {
          let t = 1e9;
          for (let n of r) {
            if (n.roleKey !== e) continue;
            let r = n.distTo(o, s);
            r < t && ((t = r), (l = n));
          }
        }
      }
      if (!l) {
        let e = KM.test(i) || KM.test(a) ? 14 : 9;
        for (let t of r) {
          if (t.anim === `fallen`) continue;
          let n =
            t.distTo(o, s) -
            (t.anim === `talk` || t === this.hostActor ? 4 : 0);
          n < e && ((e = n), (l = t));
        }
        l &&
          !(KM.test(i) || KM.test(a)) &&
          l.anim !== `talk` &&
          l !== this.hostActor &&
          (l = null);
      }
      if (l) {
        l.say(n * 0.95, null);
        for (let e of r)
          e !== l && !e.speaking && e.distTo(l.x, l.z) < 9 && e.listen(l, n);
      }
    }
    vehicle(e, t, n, r, i) {
      try {
        let a = this.ctx.vehicles.spawn(e, t, n, r, i);
        return (a && this.vehicles.push(a), a ?? null);
      } catch (e) {
        return (console.warn(`[missions] vehicles.spawn unavailable`, e), null);
      }
    }
    keepVehicle(e) {
      let t = this.vehicles.indexOf(e);
      t >= 0 && this.vehicles.splice(t, 1);
    }
    holdTraffic(e, t, n) {
      let r = null;
      try {
        let i = this.ctx.traffic?.holdArea?.(e, t, n);
        typeof i == `function` && (r = i);
      } catch {}
      let i = !1,
        a = () => {
          if (!i) {
            i = !0;
            try {
              r?.();
            } catch {}
          }
        };
      return (this.cleanups.push(a), a);
    }
    crowd(e, t, n, r, i, a) {
      let o = null;
      try {
        let s = this.ctx.peds?.crowd?.(e, t, n, r, i, a);
        typeof s == `function` && (o = s);
      } catch {}
      let s = !1,
        c = () => {
          if (!s) {
            s = !0;
            try {
              o?.();
            } catch {}
          }
        };
      return (this.cleanups.push(c), c);
    }
    sfx(e, t) {
      try {
        this.ctx.audio.play(e, t);
      } catch {}
    }
    async cinematic(e, t, n) {
      try {
        this.ctx.cameraRig.override(e, t);
      } catch {}
      let r = () => {
        try {
          this.ctx.cameraRig.override(null);
        } catch {}
      };
      (this.cleanups.push(r), await this.wait(n), r());
    }
    lockPlayer(e) {
      try {
        this.ctx.player.setControlEnabled(!e);
      } catch {}
      e && this.cleanups.push(() => this.lockPlayer(!1));
    }
    async skipTo(e, t) {
      let n = !1;
      if (
        (this.cleanups.push(() => {
          n || this.hud.fade(0, 0.3);
        }),
        await this.hud.fade(1, 0.6),
        this.alive)
      ) {
        try {
          this.ctx.env.setHour(e);
        } catch {}
        (t &&
          this.hud.bigMessage(t, void 0, { duration: 2.2, color: `#ffffff` }),
          await this.wait(0.9),
          (n = !0),
          await this.hud.fade(0, 0.8));
      }
    }
    suspendPolice() {
      if (this.policeSuspended) return;
      let e = this.ctx.police;
      if (typeof e?.setEnabled == `function`) {
        try {
          (e.setEnabled(!1), (this.policeSuspended = !0));
        } catch {
          return;
        }
        this.cleanups.push(() => {
          this.policeSuspended = !1;
          try {
            e.setEnabled(!0);
          } catch {}
        });
      }
    }
    get motorcycleKind() {
      return XM(this.ctx);
    }
    get px() {
      return this.ctx.player.position.x;
    }
    get pz() {
      return this.ctx.player.position.z;
    }
    dist(e, t) {
      return Math.hypot(
        this.ctx.player.position.x - e,
        this.ctx.player.position.z - t,
      );
    }
    get playerVehicle() {
      try {
        return this.ctx.vehicles.playerVehicle ?? null;
      } catch {
        return null;
      }
    }
    get inVehicle() {
      return this.ctx.player.mode === `vehicle` || !!this.playerVehicle;
    }
    get onFoot() {
      return this.ctx.player.mode === `foot` && !this.playerVehicle;
    }
    get playerSpeed() {
      let e = this.playerVehicle;
      if (e) return Math.abs(e.speed);
      let t = this.ctx.player.velocity;
      return Math.hypot(t.x, t.z);
    }
    async goto(e, t = {}) {
      let n = t.style ?? `goto`,
        r = t.radius ?? (n === `drive` ? 5 : 2.2),
        i = t.color ?? (n === `drive` ? JM.drive : JM.goto),
        a = null;
      n !== `none` &&
        (a = this.S.markers.add({
          x: e.x,
          z: e.z,
          y: e.y ?? this.ctx.plan.groundHeight(e.x, e.z) + 0.01,
          color: i,
          style: n,
          radius: n === `drive` ? r * 0.8 : r * 0.75,
          icon: t.markerIcon,
          pillar: t.pillar,
        }));
      let o = `goto${Math.round(e.x)}_${Math.round(e.z)}`;
      (this.blip(o, {
        x: e.x,
        z: e.z,
        icon: t.blipIcon ?? `target`,
        label: t.label,
        clampToEdge: !0,
        pulse: !0,
        color: `#ffd24d`,
      }),
        t.waypoint !== !1 && this.waypoint(e, t.label),
        t.objective && this.objective(t.objective),
        (this.waitFor = {
          kind: `goto`,
          x: e.x,
          z: e.z,
          onFoot: t.onFoot,
          inVehicle: t.inVehicle,
        }));
      let s = 0,
        c = t.vehicleRadius ?? r,
        l = e.x,
        u = e.z,
        d = this.waitFor;
      (await this.until((n) =>
        t.orWhen && t.orWhen()
          ? !0
          : ((Math.abs(e.x - l) > 0.3 || Math.abs(e.z - u) > 0.3) &&
              ((l = e.x),
              (u = e.z),
              a?.setPos(
                e.x,
                e.y ?? this.ctx.plan.groundHeight(e.x, e.z) + 0.01,
                e.z,
              ),
              this.moveBlip(o, e.x, e.z),
              t.waypoint !== !1 && this.waypoint(e, t.label),
              (d.x = e.x),
              (d.z = e.z)),
            this.dist(e.x, e.z) > (c !== r && this.inVehicle ? c : r)
              ? !1
              : t.onFoot && !this.onFoot
                ? ((s -= n) <= 0 && (this.hud.prompt(HM), (s = 0)), !1)
                : t.inVehicle && !this.inVehicle
                  ? !1
                  : t.needStop && this.playerSpeed > 3
                    ? (this.hud.prompt(qM), !1)
                    : !(t.when && !t.when())),
      ),
        (this.waitFor = null),
        a?.remove(),
        this.removeBlip(o),
        t.waypoint !== !1 && this.waypoint(null),
        this.sfx(`checkpoint`, { ui: !0, volume: 0.7 }));
    }
    async enterVehicle(e) {
      e.objective && this.objective(e.objective);
      let t = null;
      e.vehicle &&
        e.marker !== !1 &&
        ((t = this.S.markers.add({
          x: e.vehicle.body.x,
          z: e.vehicle.body.z,
          y: e.vehicle.body.y + 0.2,
          color: 5951999,
          style: `target`,
          iconSize: 0.8,
        })),
        this.blip(`veh`, {
          x: e.vehicle.body.x,
          z: e.vehicle.body.z,
          icon: `vehicle`,
          label: { zh: `載具`, en: `Vehicle` },
          pulse: !0,
          clampToEdge: !0,
        }));
      let n = { v: null };
      return (
        (this.waitFor = {
          kind: `enter`,
          x: e.vehicle?.body.x ?? this.px,
          z: e.vehicle?.body.z ?? this.pz,
          vehicleId: e.vehicle?.id,
        }),
        await this.until(() => {
          if (e.orWhen && e.orWhen()) return !0;
          let r = this.playerVehicle;
          return (
            e.vehicle &&
              this.waitFor &&
              ((this.waitFor.x = e.vehicle.body.x),
              (this.waitFor.z = e.vehicle.body.z)),
            e.vehicle &&
              t &&
              (t.setPos(
                e.vehicle.body.x,
                e.vehicle.body.y + (e.vehicle.spec?.height ?? 1.4) - 0.9,
                e.vehicle.body.z,
              ),
              t.setVisible(!r)),
            !r && this.ctx.player.mode === `vehicle` && !e.kinds && !e.vehicle
              ? !0
              : r
                ? e.vehicle && r !== e.vehicle && r.id !== e.vehicle.id
                  ? !!e.kinds && e.kinds.includes(r.kind)
                  : e.kinds && !e.kinds.includes(r.kind)
                    ? !1
                    : ((n.v = r), !0)
                : !1
          );
        }),
        (this.waitFor = null),
        t?.remove(),
        this.removeBlip(`veh`),
        n.v ?? this.playerVehicle
      );
    }
    async exitVehicle(e, t) {
      this.onFoot ||
        (e && this.objective(e),
        (this.waitFor = { kind: `exit`, x: this.px, z: this.pz }),
        await this.until(() => this.onFoot || (!!t && t())),
        (this.waitFor = null));
    }
    async pressE(e, t, n, r, i = {}) {
      let a = (this.waitFor = {
          kind: `pressE`,
          x: e,
          z: t,
          r: n,
          onFoot: i.onFoot !== !1,
        }),
        o = i.target;
      (await this.until(() => {
        if (i.orWhen && i.orWhen()) return !0;
        if (i.when && !i.when()) return !1;
        let s = o ? o.x : e,
          c = o ? o.z : t;
        return (
          (a.x = s),
          (a.z = c),
          this.dist(s, c) > n || (i.onFoot !== !1 && !this.onFoot)
            ? !1
            : this.hud.prompt(r) && this.ctx.input.pressed(`interact`)
        );
      }),
        (this.waitFor = null));
    }
    guardVehicle(
      e,
      t = { zh: `載具被摧毀了`, en: `The vehicle was destroyed` },
    ) {
      e &&
        (this.every(() => {
          (e.destroyed || (e.health !== void 0 && e.health <= 0)) &&
            this.fail(t);
        }),
        this.on(`vehicle:destroyed`, (n) => {
          n.vehicleId === e.id && this.fail(t);
        }));
    }
    pass(e = {}) {
      this.alive && this.end(`passed`, { pass: e });
    }
    fail(e) {
      this.alive && this.end(`failed`, { reason: e });
    }
    abort() {
      this.alive && this.end(`aborted`, {});
    }
    end(e, t) {
      ((this.alive = !1),
        (this.result = e),
        (this.lineQueue.length = 0),
        (this.waiters.length = 0),
        (this.watchers.length = 0),
        this.cleanup(),
        this.onEnd(this, e, t));
    }
    cleanup() {
      for (let e = this.cleanups.length - 1; e >= 0; e--)
        try {
          this.cleanups[e]();
        } catch (e) {
          console.warn(`[missions] cleanup failed`, e);
        }
      this.cleanups.length = 0;
      for (let e of this.actors) ((e.onRemove = null), e.dispose());
      ((this.actors.length = 0),
        (this.hostActor = null),
        this.giver?.dispose(),
        (this.giver = null));
      let e = null;
      try {
        e = this.ctx.vehicles.playerVehicle;
      } catch {}
      for (let t of this.vehicles)
        if (t !== e && t.driver !== `player`)
          try {
            this.ctx.vehicles.despawn(t);
          } catch {}
      this.vehicles.length = 0;
      for (let e of this.blipKeys) this.hud.removeBlip(e);
      (this.blipKeys.clear(),
        this.hud.clearAll(),
        (this.timerLeft = null),
        (this.stopwatch = null));
    }
    get actorCount() {
      return this.actors.length;
    }
    get actorList() {
      return this.actors;
    }
    snapshot() {
      return {
        id: this.def.id,
        step: this.step,
        elapsed: +this.elapsed.toFixed(1),
        timeLeft: this.timerLeft === null ? null : +this.timerLeft.toFixed(1),
        objective: this.hud.objective,
        progress: this.hud.progressLabel ? +this.hud.progress.toFixed(3) : null,
        bonus: this.bonus,
        wait: this.waitFor,
        vars: this.vars,
      };
    }
  };
