// tokyo/assets/region-tokyo-BcM3fReU 193 — phase
// Lines 79942-81034 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var mW = 15,
  hW = 7,
  gW = 1.6,
  _W = 3,
  vW = 40,
  yW = [180, 360],
  bW = {
    hold: {
      zh: `停車中：保持制動，等車掌關門（知らせ灯亮）`,
      en: `Standing: hold the brake until the doors close (pilot lamp)`,
    },
    power: { zh: `力行加速`, en: `Power up` },
    coast: { zh: `惰行（回到 N）`, en: `Coast (back to N)` },
    curve: { zh: `前方限速：先減速`, en: `Limit ahead: slow down first` },
    brake: { zh: `進站主制動`, en: `Main brake for the stop` },
    twostage: {
      zh: `二段制動：鬆到 B1–B2 平順停準`,
      en: `Two-stage braking: ease to B1–B2 for a smooth stop`,
    },
    creep: {
      zh: `差一點：P1 慢慢向前`,
      en: `A little short: creep forward on P1`,
    },
    atc: { zh: `接近 ATC 限速，減速`, en: `Close to the ATC limit: ease off` },
    alarm: {
      zh: `非常通報：立刻停車`,
      en: `Passenger alarm: stop the train now`,
    },
  },
  xW = Object.keys(bW),
  SW = { v: 0, dist: 0, r: 0 },
  CW = (e = !0) => ({
    completed: !1,
    aborted: e,
    stops: [],
    score: 0,
    grade: `C`,
  }),
  wW = class {
    host;
    active = !1;
    hud;
    s = null;
    last = null;
    constructor(e) {
      ((this.host = e),
        (this.hud = new fW(
          { t: (t) => e.t(t), device: () => e.ctx.input.device },
          e.jpFont,
        )));
      let t = this;
      typeof window < `u` &&
        (window.__drive = {
          state: () => this.s?.snapshot() ?? null,
          abort: () => this.s?.abort(),
          set: (e) => this.s?.setHandle(e),
          get result() {
            return t.last;
          },
        });
    }
    get driving() {
      return this.active;
    }
    view() {
      return this.s?.view() ?? null;
    }
    async drive(e) {
      let t = this.host,
        n = t.ctx,
        r = (e) => {
          try {
            n.ui.notify(e, { kind: `bad` });
          } catch {}
        };
      if (this.active) return CW();
      let i = t.refuse();
      if (i) return (r(i), CW());
      let a = t.platform(e.from),
        o = t.platform(e.to),
        s = t.fleet();
      if (
        !a ||
        !o ||
        a === o ||
        !a.rideable ||
        !o.rideable ||
        a.line !== `JY` ||
        o.line !== `JY` ||
        !s
      )
        return (
          console.warn(`[drive] cannot drive`, e.from, `→`, e.to),
          r({ zh: `無法駕駛這段路線`, en: `Can't drive this route` }),
          CW()
        );
      if (!t.begin()) return CW();
      this.active = !0;
      let c = CW(),
        l = null;
      try {
        ((l = new AW(t, this.hud, e, a, o, s)),
          (this.s = l),
          (c = await l.run()));
      } catch (e) {
        (console.error(`[drive] shift failed`, e), l?.dispose());
      } finally {
        ((this.s = null), (this.active = !1), (this.last = c), t.end());
      }
      return c;
    }
    update(e) {
      this.s?.update(e);
    }
  },
  TW = { x: 0, z: 0 },
  EW = new k(),
  DW = new k(),
  OW = { x: 0, z: 0 },
  kW = { x: 0, z: 0 },
  AW = class {
    H;
    hud;
    o;
    pf;
    pt;
    fleet;
    ctx;
    route;
    sim;
    rows = [];
    stops = [];
    track;
    profile;
    phase = `dwell`;
    idx = 0;
    clock = 0;
    k = 1;
    auto;
    coach;
    result = [];
    actArr = [];
    actDep = [];
    doorsOpen = !0;
    pilot = !1;
    openedAt = 0;
    closeAt = 0;
    melodyDone = !1;
    closedAt = -1;
    departed = !1;
    still = 0;
    waitMove = !1;
    seg = {
      atc0: 0,
      eb: !1,
      restops: 0,
      calls: 0,
      overrun: NaN,
      arrClock: NaN,
      approach: !1,
    };
    backupTo = 0;
    aborted = !1;
    finished = !1;
    polT = 0;
    sug = { h: -4, why: `hold` };
    vc = 0;
    cruiseJob = 0;
    callAt = null;
    callsSeen = new Set();
    stepShown = 0;
    reqT = 0;
    camYaw = 0;
    loop = null;
    motor = null;
    lastEb = !1;
    endT = 0;
    north;
    limKey = -1;
    coachKey = -1e9;
    cab = {
      v: 0,
      permitted: 0,
      step: 0,
      nextV: 0,
      nextDist: 0,
      h: 0,
      atc: !1,
      eb: !1,
      doorsOpen: !0,
      pilot: !1,
      dist: NaN,
      clock: 0,
      row: 0,
      actArr: [],
      actDep: [],
    };
    ready = !1;
    alarm = null;
    constructor(e, t, n, r, i, a) {
      ((this.H = e),
        (this.hud = t),
        (this.o = n),
        (this.pf = r),
        (this.pt = i),
        (this.fleet = a),
        (this.ctx = e.ctx),
        (this.auto = this.ctx.params.has(`autosolve`)),
        (this.coach = n.coach ?? (n.timetable ?? `tutorial`) === `tutorial`));
      let o = Number(this.ctx.params.get(`drivek`) ?? 1);
      ((this.k = Number.isFinite(o) && o > 0 ? Math.min(8, o) : 1),
        (this.north = i.sc > r.sc));
    }
    async run() {
      let e = this.ctx,
        t = this.H;
      await Promise.resolve(e.ui.fade(1, 0.4)).catch(() => {});
      let n = this.fleet.startDrive(this.pf, this.pt);
      if (!n)
        return (await Promise.resolve(e.ui.fade(0, 0.3)).catch(() => {}), CW());
      ((this.track = n.track),
        (this.stops = n.stops),
        (this.profile = n.profile));
      let i = BH.JY,
        a = i.cars * i.len + (i.cars - 1) * i.gap,
        o = this.stops.map((e) => (n.track.dir > 0 ? e.s1 - 2 : e.s0 + 2));
      ((this.route = zU(n.track.corridor.path, o, n.track.dir, a)),
        (this.sim = new HU(new VU(this.route))),
        (this.sim.h = -4),
        (this.sim.interlock = !0));
      let s = 12;
      try {
        s = e.env.hour;
      } catch {}
      this.clock = Math.round(s * 3600);
      let c =
        this.o.timetable && eW[this.o.timetable]
          ? this.o.timetable
          : `tutorial`;
      ((this.rows = nW(this.route, c, this.clock)),
        await e.yieldFrame(),
        (this.actArr = this.rows.map(() => NaN)),
        (this.actDep = this.rows.map(() => NaN)),
        (this.openedAt = this.clock),
        (this.closeAt = this.rows[0].dep - _W),
        (this.stepShown = Math.round(this.sim.atcSys.step(0) / kU)));
      let l = this.o.incidents?.find((e) => e.kind === `alarm`),
        u = l ? this.stops.findIndex((e) => e.id === l.before) : -1;
      ((this.alarm =
        l && u >= 1
          ? { inc: l, seg: u, state: `armed`, t: 0, buzz: 0, said: !1 }
          : null),
        this.place());
      let d = this.fleet.rideState;
      (await Promise.race([
        t.ensureResident(d.x, d.z),
        new Promise((e) => setTimeout(e, 8e3)),
      ]).catch(() => {}),
        this.place(),
        t.hidePlayer(!0));
      try {
        e.ui.setHudVisible(!1);
      } catch {}
      let f = this.north,
        p = t.lcdLoop(f),
        m = this.stops.map((e) => t.nameLcd(e.id));
      (this.hud.open(
        {
          title: `山手線 ${p}<br>${m[0].ja} → ${m[m.length - 1].ja}`,
          stations: m.map((e) => ({ ja: e.ja, en: e.en, code: e.code })),
          rows: this.rows,
        },
        {
          notch: (e) =>
            this.input(this.sim.h === -8 && e > 0 ? -jU.B : this.sim.h + e),
          set: (e) => this.input(e),
          eb: () => this.input(-8),
          call: () => this.pointCall(),
          abort: () => this.abort(),
          confirm: () => {},
        },
      ),
        this.hud.setHint(e.input.device),
        e.input.device === `touch` &&
          setTimeout(
            () =>
              this.message(
                {
                  zh: `右側滑桿：上推力行、下拉制動 · ☝ 指差喚呼 · ✕ 結束`,
                  en: `Right slider: up = power, down = brake · ☝ point & call · ✕ end`,
                },
                5,
              ),
            4500,
          ),
        t.lcd.open(t.lineColor, `JY`, m, ``, t.lcdDoors(), p),
        t.lcd.compact(!0));
      try {
        ((this.loop = e.audio.loop(`mrt_train`, { volume: 0.45 }) ?? null),
          (this.motor = e.audio.loop(`engine_ev`, { volume: 0.25 }) ?? null),
          e.audio.duck(0.5, 1.5));
      } catch {}
      ((this.ready = !0),
        this.update(0),
        Promise.resolve(e.ui.fade(0, 0.6)).catch(() => {}),
        this.message(
          {
            zh: r.on
              ? r.t(
                  `乘務開始 · 發車 ${rW(this.rows[0].dep)}`,
                  `乗務開始 · 発車 ${rW(this.rows[0].dep)}`,
                )
              : `乘務開始 · 發車 ${rW(this.rows[0].dep)}`,
            en: `Shift start · departure ${rW(this.rows[0].dep)}`,
          },
          4,
        ),
        this.coach && this.coachIntro(),
        await new Promise((e) => {
          let t = () => (this.finished ? e() : setTimeout(t, 100));
          t();
        }));
      let h = this.buildResult(),
        g = h.stops.map((e) => ({
          name: t.nameLcd(e.station).ja,
          offsetCm: e.offsetCm,
          pitta: e.pitta,
          lateS: e.lateS,
          atcHits: e.atcHits,
          comfort: e.comfort,
          score: e.score,
        }));
      try {
        await this.hud.showResult(
          {
            title: t.t({ zh: `乘務成績`, en: `Shift report` }),
            sub: `山手線 ${p} · ${m[0].ja} → ${m[m.length - 1].ja} · ${t.t(c === `rush` ? { zh: `尖峰時刻表`, en: `rush-hour timetable` } : c === `late` ? { zh: `深夜時刻表`, en: `late-night timetable` } : c === `shuden` ? { zh: `末班車`, en: `last train` } : { zh: `教學`, en: `tutorial` })}`,
            rows: g,
            score: h.score,
            grade: h.grade,
            aborted: h.aborted,
          },
          this.auto ? 2.5 : 25,
        );
      } catch {}
      (await Promise.resolve(e.ui.fade(1, 0.45)).catch(() => {}),
        this.cleanup());
      let _ = h.completed ? this.pt.id : this.stops[this.nearestStop()].id,
        v = t.exit(_);
      try {
        e.env.setHour((((this.clock / 3600) % 24) + 24) % 24);
      } catch {}
      if (v) {
        await Promise.race([
          t.ensureResident(v.x, v.z),
          new Promise((e) => setTimeout(e, 8e3)),
        ]).catch(() => {});
        try {
          e.player.teleport(v.x, v.z, v.heading + Math.PI, 0.15);
        } catch {}
      }
      t.hidePlayer(!1);
      try {
        (e.cameraRig.override(null),
          e.cameraRig.snapBehind?.(v ? v.heading + Math.PI : void 0),
          e.ui.setHudVisible(!0));
      } catch {}
      return (
        await new Promise((e) => setTimeout(e, 150)),
        Promise.resolve(e.ui.fade(0, 0.7)).catch(() => {}),
        console.info(
          `[drive] ${this.pf.id} → ${this.pt.id}: ${h.completed ? `completed` : `aborted`} · score ${h.score} · grade ${h.grade} · ${h.stops.map((e) => `${e.station.slice(3)} ${e.offsetCm}cm ${e.lateS}s`).join(` · `)}`,
        ),
        h
      );
    }
    dispose() {
      this.ready = !1;
      try {
        (this.cleanup(),
          this.ctx.cameraRig.override(null),
          this.ctx.ui.setHudVisible(!0));
      } catch {}
      Promise.resolve(this.ctx.ui.fade(0, 0.3)).catch(() => {});
    }
    cleanup() {
      (this.hud.close(), this.H.lcd.close(!0));
      try {
        (this.loop?.stop(), this.motor?.stop());
      } catch {}
      ((this.loop = this.motor = null), this.fleet.endRide());
    }
    buildResult() {
      let e = this.result,
        t = this.stops.length - 1,
        n = !this.aborted && e.length === t,
        r = e.length ? e.reduce((e, t) => e + t.score, 0) / e.length : 0;
      return (
        n || (r *= e.length / Math.max(1, t)),
        (r = Math.round(r * 10) / 10),
        {
          completed: n,
          aborted: this.aborted,
          stops: e.slice(),
          score: r,
          grade: n ? KU(r) : `C`,
        }
      );
    }
    nearestStop() {
      let e = 0,
        t = 1 / 0;
      for (let n = 0; n < this.route.marks.length; n++) {
        let r = Math.abs(this.route.marks[n] - this.sim.d);
        r < t && ((t = r), (e = n));
      }
      return e;
    }
    input(e) {
      this.auto ||
        this.phase === `backup` ||
        this.phase === `done` ||
        this.phase === `arrived` ||
        this.setHandle(e);
    }
    setHandle(e) {
      this.sim &&
        (this.sim.setHandle(e),
        this.sim.h === -8 && !this.lastEb && this.onEb(),
        (this.lastEb = this.sim.h === -8));
    }
    onEb() {
      ((this.seg.eb = !0),
        this.emit({ kind: `eb`, station: this.stops[this.idx]?.id }),
        this.sfx(`air_brake`, 0.7));
    }
    abort() {
      this.finished ||
        this.phase === `done` ||
        ((this.aborted = !0), (this.phase = `done`), (this.finished = !0));
    }
    pointCall() {
      let e = this.callAt;
      if (!(!e || e.done || this.clock > e.until)) {
        ((e.done = !0),
          this.seg.calls++,
          this.hud.call(
            e.ja,
            this.H.t({ zh: `指差喚呼 ✓`, en: `Pointing & calling ✓` }),
            !0,
            1.2,
          ));
        try {
          this.ctx.audio.say?.(
            { zh: e.ja, en: e.ja, ja: e.ja },
            { lang: `ja`, priority: 6, volume: 0.8, channel: `cab` },
          );
        } catch {}
      }
    }
    prompt(e, t, n) {
      this.callsSeen.has(e) ||
        (this.callsSeen.add(e),
        (this.callAt = { ja: t, until: this.clock + 3, done: !1, key: e }),
        this.hud.call(t, this.H.t(n), !1, 3),
        this.auto && setTimeout(() => this.pointCall(), 600));
    }
    emit(e) {
      try {
        this.o.onEvent?.(e);
      } catch (e) {
        console.warn(`[drive] onEvent failed`, e);
      }
    }
    sfx(e, t = 0.6) {
      try {
        this.ctx.audio.play(e, { ui: !0, volume: t });
      } catch {}
    }
    message(e, t = 3) {
      this.hud.message(this.H.t(e), t);
    }
    coachIntro() {
      this.message(
        {
          zh: `車門開著時動力被切斷：等車掌關門、知らせ灯亮起再出發`,
          en: `Power is cut while the doors are open: depart once the conductor closes them and the pilot lamp lights`,
        },
        6,
      );
    }
    update(e) {
      if (!this.ready) return;
      if (!this.sim || (this.phase === `done` && this.finished)) {
        this.sim && this.present(e);
        return;
      }
      let t = Math.min(0.1, e) * this.k;
      this.hud.tick(e);
      let n = Math.max(1, Math.ceil(t * 60 - 1e-6)),
        r = t / n;
      for (let e = 0; e < n; e++) this.step(r);
      this.present(e);
    }
    nextMark() {
      return this.route.marks[
        Math.min(
          this.route.marks.length - 1,
          this.phase === `dwell` ? this.idx + 1 : this.idx,
        )
      ];
    }
    step(e) {
      let t = this.sim;
      if (((this.clock += e), (this.polT -= e), this.polT <= 0)) {
        this.polT = ZU;
        let e =
          this.route.marks[
            Math.min(
              this.route.marks.length - 1,
              this.phase === `dwell` ? this.idx + 1 : this.idx,
            )
          ];
        this.sug =
          this.phase === `run`
            ? XU({
                sim: t,
                route: this.route,
                atc: t.atcSys,
                stopD: e,
                vc: this.vc || 20.833333333333336,
              })
            : { h: -4, why: `hold` };
        let n = this.alarm?.state;
        (n === `ring`
          ? (this.sug = { h: -jU.B, why: `alarm` })
          : n === `stand` && (this.sug = { h: -4, why: `hold` }),
          this.auto &&
            (this.phase === `run` || this.phase === `dwell`) &&
            this.sug.h !== t.h &&
            this.setHandle(this.sug.h));
      }
      if ((this.phase === `dwell` && this.dwell(), this.phase === `backup`)) {
        ((t.v = 0),
          (t.d = Math.max(this.backupTo, t.d - 0.8 * e)),
          t.d <= this.backupTo + 0.001 &&
            ((this.phase = `run`), this.finalStop(this.seg.overrun)));
        return;
      }
      if (this.phase === `arrived`) {
        ((this.endT -= e),
          this.endT <= 0 && ((this.phase = `done`), (this.finished = !0)));
        return;
      }
      if (this.phase === `done`) return;
      let n = this.nextMark(),
        r =
          this.route.radius[
            Math.max(0, Math.min(this.route.radius.length - 1, Math.floor(t.d)))
          ] ?? 1 / 0;
      (t.step(e, { r, stopD: n }),
        t.atcOn &&
          (this.emit({ kind: `atc`, station: this.stops[this.idx]?.id }),
          this.sfx(`tk_atcb`, 0.7),
          this.message(
            { zh: `ATC 常用制動！超過限速`, en: `ATC brake! Over the limit` },
            2.5,
          )),
        t.h === -8 && !this.lastEb && this.onEb(),
        (this.lastEb = t.h === -8),
        this.phase === `run` && (this.alarmStep(e), this.running(n, e)));
    }
    alarmStep(e) {
      let t = this.alarm,
        n = this.sim;
      if (!t || t.state === `done`) return;
      let r = this.stops[t.seg]?.id;
      if (t.state === `armed`) {
        if (this.idx !== t.seg || n.v < 3) return;
        let e = this.route.marks[t.seg - 1],
          i = this.route.marks[t.seg];
        if ((n.d - e) / Math.max(1, i - e) < t.inc.at) return;
        ((t.state = `ring`),
          (t.t = 0),
          (t.buzz = 0),
          this.emit({ kind: `alarm`, station: r }),
          this.message(
            {
              zh: `非常通報！3 號車有乘客按下警報鈕——立刻停車！`,
              en: `Passenger alarm! Someone pressed it in car 3 — stop the train now!`,
            },
            5,
          ),
          this.prompt(`alarm${t.seg}`, `非常停止！`, {
            zh: `指差喚呼：非常停車`,
            en: `Point & call: emergency stop`,
          }));
        return;
      }
      if (((t.t += e), t.state === `ring`)) {
        ((t.buzz -= e) <= 0 && ((t.buzz = 0.85), this.sfx(`tk_buzz`, 0.65)),
          n.v <= 0.01
            ? ((t.state = `stand`),
              (t.t = 0),
              (n.interlock = !0),
              (this.pilot = !1),
              this.emit({ kind: `alarm-stop`, station: r }),
              this.sfx(`air_brake`, 0.5),
              this.message(
                {
                  zh: `列車停下。車掌趕往 3 號車確認……`,
                  en: `The train stands. The conductor hurries to car 3…`,
                },
                4,
              ))
            : t.t > (t.inc.limit ?? 14) &&
              n.h !== -8 &&
              (this.setHandle(-8),
              this.message(
                {
                  zh: `運行指令所：非常制動！反應太慢了`,
                  en: `Dispatch: emergency brake! Too slow to react`,
                },
                3.5,
              )));
        return;
      }
      ((n.interlock = !0),
        !t.said &&
          t.t > 3.5 &&
          ((t.said = !0),
          this.message(
            {
              zh: `車掌：3 號車無異狀，車門保持關閉。準備運轉再開。`,
              en: `Conductor: car 3 is clear, the doors stay shut. Ready to resume.`,
            },
            4,
          )),
        t.t >= (t.inc.hold ?? 10) &&
          ((t.state = `done`),
          (n.interlock = !1),
          (this.pilot = !0),
          this.sfx(`tk_buzz`, 0.55),
          this.emit({ kind: `alarm-clear`, station: r }),
          this.message(
            {
              zh: `運轉再開！把耽誤的時間追回來`,
              en: `Resume! Make up the lost time`,
            },
            3.5,
          ),
          this.prompt(`resume${t.seg}`, `運転再開！`, {
            zh: `指差喚呼：運轉再開`,
            en: `Point & call: resuming`,
          }),
          (this.auto || this.coach) && (this.vc = 75 * kU)));
    }
    dwell() {
      let e = this.sim;
      if (((e.interlock = !0), (e.v = 0), this.doorsOpen)) {
        if (!this.melodyDone && this.clock >= this.closeAt - hW) {
          this.melodyDone = !0;
          let e = this.stops[this.idx];
          (this.H.melody(
            e,
            this.track,
            Math.max(0.5, this.closeAt - this.clock),
          ),
            this.planCruise());
        }
        this.clock >= this.closeAt &&
          ((this.doorsOpen = !1),
          (this.closedAt = this.clock),
          this.emit({ kind: `doors`, station: this.stops[this.idx].id }),
          this.sfx(`air_brake`, 0.35));
      } else
        this.closedAt >= 0 &&
          this.clock >= this.closedAt + gW &&
          ((this.pilot = !0),
          (e.interlock = !1),
          this.sfx(`tk_buzz`, 0.55),
          (this.phase = `run`),
          (this.departed = !1),
          this.idx++,
          (this.seg = {
            atc0: e.atcHits,
            eb: !1,
            restops: 0,
            calls: 0,
            overrun: NaN,
            arrClock: NaN,
            approach: !1,
          }),
          (e.jerkSum = 0),
          this.callsSeen.clear(),
          this.prompt(`dep${this.idx}`, `出発進行！`, {
            zh: `指差喚呼：出發進行`,
            en: `Point & call: clear to depart`,
          }),
          this.coach &&
            this.message(
              {
                zh: `知らせ灯亮了：推到力行出發！`,
                en: `Pilot lamp on: notch up and depart!`,
              },
              3,
            ));
    }
    planCruise() {
      if (!this.auto && !this.coach) return;
      if (this.ctx.params.has(`drivefast`)) {
        this.vc = 75 * kU;
        return;
      }
      let e = this.idx;
      if (e + 1 >= this.rows.length) return;
      let t = ++this.cruiseJob,
        n = this.rows[e + 1].arr - this.closeAt - gW - 1;
      setTimeout(() => {
        if (t === this.cruiseJob)
          try {
            this.vc = $U(this.route, e, n);
          } catch {
            this.vc = 0;
          }
      }, 0);
    }
    running(e, t) {
      let n = this.sim,
        r = e - n.d,
        i = this.stops[this.idx];
      (!this.departed &&
        n.v > 0.3 &&
        ((this.departed = !0),
        (this.actDep[this.idx - 1] = this.clock),
        this.emit({ kind: `depart`, station: this.stops[this.idx - 1].id })),
        n.v > 0.3 && (this.waitMove = !1));
      let a = Math.round(n.atcSys.step(n.d) / kU);
      (a !== this.stepShown && ((this.stepShown = a), this.sfx(`tk_atc`, 0.6)),
        !this.seg.approach &&
          r < 300 &&
          ((this.seg.approach = !0),
          this.emit({ kind: `approach`, station: i.id })),
        r < 60 &&
          r > 5 &&
          n.v > 1 &&
          this.prompt(`stop${this.idx}`, `停止位置よし！`, {
            zh: `指差喚呼：停車位置確認`,
            en: `Point & call: stop mark confirmed`,
          }),
        n.v <= 0 && !this.waitMove && r < vW && r > -20
          ? ((this.still += this.sim.h < 0 ? t : 0),
            this.still >= 0.6 && this.evaluate(r))
          : (this.still = 0));
    }
    evaluate(e) {
      let t = -e;
      if (((this.still = 0), (this.seg.arrClock = this.clock), t < -5)) {
        ((this.waitMove = !0),
          this.message(
            {
              zh: r.on
                ? r.t(
                    `還沒到停車位置（差 ${Math.round(-t)} m）：再向前`,
                    `停止位置まであと ${Math.round(-t)} m：もう少し前へ`,
                  )
                : `還沒到停車位置（差 ${Math.round(-t)} m）：再向前`,
              en: `Not at the mark yet (${Math.round(-t)} m to go): move up`,
            },
            3,
          ));
        return;
      }
      if (t < -0.5) {
        (this.seg.restops++,
          (this.waitMove = !0),
          this.message(
            {
              zh: r.on
                ? r.t(
                    `停車位置不足 ${Math.round(-t * 100)} cm：用 P1 再向前`,
                    `停止位置まで ${Math.round(-t * 100)} cm 不足：P1で前へ`,
                  )
                : `停車位置不足 ${Math.round(-t * 100)} cm：用 P1 再向前`,
              en: `${Math.round(-t * 100)} cm short of the mark: creep forward on P1`,
            },
            3.5,
          ));
        return;
      }
      if (t > 0.5) {
        ((this.seg.overrun = t),
          (this.backupTo = this.route.marks[this.idx]),
          (this.phase = `backup`),
          this.sim.setHandle(-4),
          this.message(
            {
              zh: r.on
                ? r.t(
                    `過走 ${Math.round(t * 100)} cm：退行回到停車位置`,
                    `${Math.round(t * 100)} cm 行き過ぎ：停止位置まで後退`,
                  )
                : `過走 ${Math.round(t * 100)} cm：退行回到停車位置`,
              en: `Overrun by ${Math.round(t * 100)} cm: backing up to the mark`,
            },
            4,
          ),
          this.sfx(`tk_buzz`, 0.5));
        return;
      }
      this.finalStop(t);
    }
    finalStop(e) {
      let t = this.idx,
        n = this.stops[t],
        r = this.sim,
        i = this.seg.arrClock;
      this.actArr[t] = i;
      let a = Math.round(i - this.rows[t].arr),
        o = GU({
          offsetM: e,
          restops: this.seg.restops,
          lateS: a,
          atcHits: r.atcHits - this.seg.atc0,
          jerkSum: r.jerkSum,
          aStop: r.aStop,
          eb: this.seg.eb,
          calls: this.seg.calls,
        }),
        s = {
          station: n.id,
          offsetCm: Math.round(e * 100),
          pitta: o.pitta,
          lateS: a,
          atcHits: r.atcHits - this.seg.atc0,
          comfort: o.comfort,
          score: o.score,
        };
      this.result.push(s);
      try {
        this.o.onStop?.(s);
      } catch (e) {
        console.warn(`[drive] onStop failed`, e);
      }
      this.emit({ kind: `stop`, station: n.id });
      let c =
        a > 2
          ? { zh: `晚 ${a} 秒`, en: `${a} s late`, ja: `${a}秒遅れ` }
          : a < -2
            ? { zh: `早 ${-a} 秒`, en: `${-a} s early`, ja: `${-a}秒早着` }
            : { zh: `準點`, en: `on time`, ja: `定時` };
      if (
        (o.pitta
          ? this.message(
              {
                zh: `ピッタリ！ ${s.offsetCm} cm · ${c.zh}`,
                en: `ピッタリ! ${s.offsetCm} cm · ${c.en}`,
                ja: `ピッタリ！ ${s.offsetCm} cm · ${c.ja}`,
              },
              3,
            )
          : this.message(
              {
                zh: `停車 ${s.offsetCm > 0 ? `+` : ``}${s.offsetCm} cm · ${c.zh} · ${o.score.toFixed(0)} 分`,
                en: `Stopped ${s.offsetCm > 0 ? `+` : ``}${s.offsetCm} cm · ${c.en} · ${o.score.toFixed(0)} pts`,
                ja: `停車 ${s.offsetCm > 0 ? `+` : ``}${s.offsetCm} cm · ${c.ja} · ${o.score.toFixed(0)} 点`,
              },
              3,
            ),
        this.sfx(o.pitta ? `checkpoint` : `ui_confirm`, 0.5),
        (this.doorsOpen = !0),
        (this.pilot = !1),
        (r.interlock = !0),
        (this.openedAt = this.clock),
        (this.melodyDone = !1),
        (this.closedAt = -1),
        this.emit({ kind: `doors`, station: n.id }),
        this.sfx(`air_brake`, 0.35),
        t >= this.stops.length - 1)
      ) {
        ((this.phase = `arrived`), (this.endT = 3));
        return;
      }
      ((this.phase = `dwell`),
        (this.closeAt = Math.max(this.rows[t].dep - _W, this.clock + mW)));
    }
    place() {
      let e = this.sim,
        t =
          this.doorsOpen || this.phase === `dwell`
            ? this.stops[this.idx]
            : null,
        n =
          this.phase === `dwell`
            ? (this.stops[this.idx + 1] ?? null)
            : (this.stops[this.idx] ?? null);
      (this.fleet.setDrive(e.d, e.v, t, n),
        this.fleet.update(0, this.ctx.camera.position, this.ctx.camera.far));
    }
    present(e) {
      let t = this.ctx,
        n = this.H,
        i = this.sim,
        a =
          this.phase === `dwell` ||
          this.phase === `arrived` ||
          (this.phase === `done` && this.doorsOpen)
            ? this.stops[this.idx]
            : null,
        o =
          this.phase === `dwell`
            ? (this.stops[this.idx + 1] ?? null)
            : (this.stops[this.idx] ?? null);
      this.fleet.setDrive(i.d, i.v, a, o);
      let s = this.fleet.rideState;
      if (!s.active) return;
      try {
        t.player.teleport(s.x, s.z, s.heading, s.deck + 0.05);
      } catch {}
      let c = this.track,
        l = this.profile;
      if (((this.reqT -= e), this.reqT <= 0)) {
        this.reqT = 1;
        for (let e of yW) {
          let t = l.s(Math.min(this.route.length + 40, i.d + e));
          (c.corridor.path.pos(t, 0, TW), n.ahead(TW.x, TW.z));
        }
      }
      this.camYaw = this.cabView(i.d, EW, DW);
      try {
        t.cameraRig.override(EW, DW);
      } catch {}
      let u = n.lcdLabels();
      if (a) n.lcd.set(`stop`, n.nameLcd(a.id), this.idx, u);
      else if (o) {
        let e = this.route.marks[this.idx] - i.d;
        n.lcd.set(e < 150 ? `soon` : `next`, n.nameLcd(o.id), this.idx, u);
      }
      try {
        (this.loop?.setPosition(s.x, s.y + 1.5, s.z),
          this.loop?.setParam(`speed`, i.v),
          this.motor?.setPosition(s.x, s.y + 1.2, s.z),
          this.motor?.setParam(`speed`, i.v),
          this.motor?.setParam(
            `throttle`,
            Math.min(1, (i.aTr + (i.v > 3 ? i.aBr * 0.6 : 0)) / jU.a0),
          ));
      } catch {}
      let d = this.nextMark(),
        f = SW,
        p = i.atcSys.nextLower(i.d, 300, f);
      if (p && f.dist < 220 && i.v > 3) {
        let e = Math.round(f.dist + i.d);
        if (e !== this.limKey) {
          this.limKey = e;
          let t = Math.round(f.v / kU);
          this.prompt(
            `lim${e}`,
            r.on ? r.t(`制限${t}！`, `制限${t}！`) : `制限${t}！`,
            {
              zh: r.on
                ? r.t(`指差喚呼：前方限速 ${t}`, `指差喚呼：前方制限 ${t}`)
                : `指差喚呼：前方限速 ${t}`,
              en: `Point & call: limit ${t} ahead`,
            },
          );
        }
      }
      let m = this.cab;
      ((m.v = i.v / kU),
        (m.permitted = i.permitted / kU),
        (m.step = i.atcSys.step(i.d) / kU),
        (m.nextV = p ? f.v / kU : 0),
        (m.nextDist = f.dist),
        (m.h = i.h),
        (m.atc = i.atc),
        (m.eb = i.eb),
        (m.doorsOpen = this.doorsOpen),
        (m.pilot = this.pilot),
        (m.dist = this.phase === `dwell` ? NaN : d - i.d),
        (m.clock = this.clock),
        (m.row = this.idx),
        (m.actArr = this.actArr),
        (m.actDep = this.actDep),
        this.hud.update(m));
      let h =
          this.auto ||
          (this.coach && (this.phase === `run` || this.phase === `dwell`)),
        g = h ? this.sug.h * 16 + xW.indexOf(this.sug.why) : -999;
      g !== this.coachKey &&
        ((this.coachKey = g),
        this.hud.coach(
          h
            ? `${this.auto ? `AUTO · ` : ``}${n.t(bW[this.sug.why])} → ${oW(this.sug.h)}`
            : null,
        ));
    }
    cabView(e, t, n) {
      let r = this.track,
        i = this.profile,
        a = e - 1.1,
        o = i.s(a + 2),
        s = i.s(a - 2),
        c = i.s(a);
      (r.corridor.path.pos(o, r.off.at(o), OW),
        r.corridor.path.pos(s, r.off.at(s), kW));
      let l = OW.x - kW.x,
        u = OW.z - kW.z,
        d = Math.hypot(l, u) || 1;
      ((l /= d), (u /= d));
      let f = (r.y.at(o) - r.y.at(s)) / d;
      return (
        r.corridor.path.pos(c, r.off.at(c), OW),
        t.set(OW.x + u * 0.55, r.y.at(c) + 2.5, OW.z - l * 0.55),
        n.set(t.x + l * 60, t.y + (f - 0.0114) * 60, t.z + u * 60),
        Math.atan2(l, -u)
      );
    }
    trackYaw(e) {
      let t = this.track,
        n = this.profile,
        r = n.s(e + 0.5),
        i = n.s(e - 0.5);
      return (
        t.corridor.path.pos(r, t.off.at(r), OW),
        t.corridor.path.pos(i, t.off.at(i), kW),
        Math.atan2(OW.x - kW.x, -(OW.z - kW.z))
      );
    }
    view() {
      let e = this.fleet.rideState;
      if (!e.active || !this.sim || !this.ready) return null;
      let t =
        this.phase === `dwell` || this.phase === `arrived`
          ? this.stops[this.idx].id
          : null;
      return {
        from: this.pf.id,
        to: this.pt.id,
        x: e.x,
        z: e.z,
        v: this.sim.v,
        atStation: t,
      };
    }
    snapshot() {
      let e = this.sim;
      return e
        ? {
            phase: this.phase,
            idx: this.idx,
            station: this.stops[this.idx]?.id,
            d: +e.d.toFixed(2),
            v: +(e.v / kU).toFixed(1),
            h: e.h,
            toMark: +(
              this.route.marks[
                Math.min(
                  this.route.marks.length - 1,
                  this.phase === `dwell` ? this.idx + 1 : this.idx,
                )
              ] - e.d
            ).toFixed(2),
            permitted: +(e.permitted / kU).toFixed(1),
            atc: e.atc,
            atcHits: e.atcHits,
            clock: rW(this.clock),
            doors: this.doorsOpen,
            pilot: this.pilot,
            auto: this.auto,
            x: +this.fleet.rideState.x.toFixed(1),
            z: +this.fleet.rideState.z.toFixed(1),
            camYaw: +this.camYaw.toFixed(4),
            trackYaw: +this.trackYaw(e.d - 1.1).toFixed(4),
            stops: this.result.slice(),
            timetable: this.rows.map((e) => ({
              arr: Number.isFinite(e.arr) ? rW(e.arr) : ``,
              dep: Number.isFinite(e.dep) ? rW(e.dep) : ``,
            })),
            zones: this.route.zones.map((e) => ({
              d0: e.d0,
              d1: Math.round(e.d1),
              kmh: Math.round(e.v / kU),
              r: e.r,
            })),
            marks: this.route.marks.map((e) => Math.round(e * 10) / 10),
          }
        : null;
    }
  },
  jW = 260,
  MW = 4,
  NW = [180, 360];
