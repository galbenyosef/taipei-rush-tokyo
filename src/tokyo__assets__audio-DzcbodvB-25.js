// tokyo__assets__audio-DzcbodvB 25 — math
// Lines 11507-12539 of readable/tokyo__assets__audio-DzcbodvB.pretty.js (statement-aligned).
var Si = class {
    ctx;
    eng;
    radio;
    quality;
    city = null;
    park = null;
    river = null;
    wind = null;
    temple = null;
    rain = null;
    walkX = null;
    walkZ = null;
    playerEngine = null;
    playerEngineKind = null;
    phantomTruck = null;
    sirens = new Map();
    trucks = [];
    slots = [];
    q = [];
    stepOwed = pi;
    stepIdx = 0;
    stepLast = new Float64Array(pi);
    stepMax = new Float32Array(pi);
    timers = {
      passby: 3,
      horn: 6,
      dog: 20,
      bird: 2,
      siren: 90,
      cracker: 120,
      vendor: 4,
      store: 10,
      templeEv: 20,
      truckCool: 8,
      mrt: 6,
      thunder: 8,
      mahjong: 20,
      vendorTruck: 30,
    };
    storeCool = new Map();
    scheduled = [];
    stepAcc = 0;
    airborne = 0;
    prevY = NaN;
    cabinS = 0;
    hourPrev = -1;
    hour = 14;
    night = 0;
    parkAmt = 0;
    riverAmt = 0;
    district = `ximending`;
    nearTemple = null;
    nearMarket = null;
    rainNow = 0;
    radioNextFrame = -1;
    enabled = !0;
    hadVehicle = !1;
    setRadioActive = null;
    stats = { traffic: 0, swarm: 0, sirens: 0, trucks: 0, events: 0, ms: 0 };
    remap = null;
    riverAt = null;
    busyD = yi;
    parks;
    temples;
    markets;
    constructor(e, t, n, r) {
      ((this.ctx = e), (this.eng = t), (this.radio = n), (this.quality = r));
      let i = r === `low` ? 2 : r === `medium` ? 3 : r === `ultra` ? 7 : 5;
      for (let e = 0; e < i; e++)
        this.slots.push({
          loop: null,
          kind: null,
          body: null,
          lastSpeed: 0,
          thr: 0,
        });
      let a = e.plan.landmarks;
      ((this.parks = a.filter((e) => e.kind === `park`)),
        (this.temples = a.filter((e) => e.kind === `temple`)),
        (this.markets = a.filter((e) => e.kind === `market`)));
    }
    loop(e, t) {
      let n = this.eng.loop(e, t, !0);
      return (n.setVolume(0), n);
    }
    externalNear(e, t, n, r) {
      let i = this.eng.loops,
        a = r * r;
      for (let r = 0; r < i.length; r++) {
        let o = i[r];
        if (o.internal || o.stopped || !o.name.startsWith(e)) continue;
        if (!o.positional) return !0;
        let s = o.x - t,
          c = o.z - n;
        if (s * s + c * c < a) return !0;
      }
      return !1;
    }
    externalEver(e) {
      return this.eng.externalLoops.has(e);
    }
    update(e) {
      if (!this.enabled) return;
      let t = performance.now(),
        n = this.ctx,
        r = this.eng.tickB,
        i = this.eng.tickDtB;
      if (r)
        try {
          this.readEnv();
        } catch {}
      this.stepOwed = Math.min(pi, this.stepOwed + (Math.max(0, e) / 0.2) * pi);
      let a = n.time.real;
      for (let e = 0; this.stepOwed >= 1 && e < 3; e++) {
        --this.stepOwed;
        let e = this.stepIdx;
        this.stepIdx = (e + 1) % pi;
        let t =
          this.stepLast[e] > 0
            ? Math.min(1, Math.max(0, a - this.stepLast[e]))
            : 0.2;
        this.stepLast[e] = a;
        let n = performance.now();
        try {
          e === 8
            ? this.prefetch()
            : e === 7
              ? this.autoIndoor()
              : e === 0
                ? this.beds()
                : e === 1
                  ? this.crosswalks()
                  : e === 2
                    ? this.trafficVoices()
                    : e === 3
                      ? this.fallbackSirens()
                      : e === 4
                        ? this.fallbackTrucks()
                        : e === 5
                          ? this.fallbackRain()
                          : this.phantomGarbageTruck(t);
        } catch (e) {
          this.warn(e);
        }
        let r = performance.now() - n;
        r > this.stepMax[e] && (this.stepMax[e] = r);
      }
      try {
        this.player(e);
      } catch (e) {
        this.warn(e);
      }
      if (r)
        for (let e = 0; e < 4; e++)
          try {
            e === 0
              ? this.playerVehicle(i)
              : e === 1
                ? this.updateTrafficParams(i)
                : e === 2
                  ? this.updateSwarm(i)
                  : this.events(i);
          } catch (e) {
            this.warn(e);
          }
      let o = n.time.real;
      for (let e = this.scheduled.length - 1; e >= 0; e--)
        if (this.scheduled[e].t <= o) {
          let t = this.scheduled[e];
          ((this.scheduled[e] = this.scheduled[this.scheduled.length - 1]),
            this.scheduled.pop());
          try {
            t.fn();
          } catch (e) {
            this.warn(e);
          }
        }
      this.stats.ms = performance.now() - t;
    }
    warned = !1;
    warn(e) {
      this.warned || ((this.warned = !0), console.warn(`[audio] director`, e));
    }
    schedule(e, t) {
      this.scheduled.push({ t: this.ctx.time.real + e, fn: t });
    }
    readEnv() {
      let e = this.ctx.env,
        t = Number(e?.hour);
      this.hour = Number.isFinite(t) ? ((t % 24) + 24) % 24 : 14;
      let n = Number(e?.night),
        r =
          this.hour < 5.5 || this.hour > 19
            ? 1
            : this.hour < 6.5
              ? 1 - (this.hour - 5.5)
              : this.hour > 18
                ? this.hour - 18
                : 0;
      ((this.night =
        Number.isFinite(n) && typeof e?.update == `function` ? $(n, 0, 1) : r),
        (this.eng.night = this.night),
        this.hourPrev >= 0 &&
          Math.floor(this.hour) !== Math.floor(this.hourPrev) &&
          this.onHour(Math.floor(this.hour)),
        (this.hourPrev = this.hour));
    }
    onHour(e) {
      let t = this.eng,
        n = null,
        r = 1e9;
      for (let e of this.temples) {
        let i = di(e.x - t.lx, e.z - t.lz);
        i < r && ((r = i), (n = e));
      }
      if (!n || r > 420) return;
      let i = n;
      if (e === 6)
        for (let e = 0; e < 3; e++)
          this.schedule(e * 4.5, () =>
            this.eng.play(`temple_bell`, { x: i.x, y: 8, z: i.z }, void 0, !1),
          );
      if (e === 18)
        for (let e = 0; e < 4; e++)
          this.schedule(e * 1.6, () =>
            this.eng.play(`temple_drum`, { x: i.x, y: 2, z: i.z }, void 0, !1),
          );
    }
    beds() {
      let e = this.eng,
        t = this.ctx,
        n = e.lx,
        r = e.lz,
        a = `ximending`;
      try {
        a = t.plan.districtAt(n, r).id;
      } catch {}
      this.district = a;
      let o = 1e9;
      for (let e of this.parks) o = Math.min(o, bi(n, r, e));
      let s = t.plan.bounds,
        c = di(
          Math.max(s.minX - n, 0, n - s.maxX),
          Math.max(s.minZ - r, 0, r - s.maxZ),
        );
      this.parkAmt = Math.max(
        1 - ui(0, 75, o),
        ui(20, 160, c) * 0.9,
        a === `riverside` ? 0.5 : 0,
      );
      let l = t.plan.dataset.water;
      this.riverAmt = this.riverAt
        ? this.riverAt(n, r)
        : 1 - ui(10, 170, Math.max(0, Math.min(n - l.westX, r - l.northZ)));
      let u = xi(this.hour) * (this.busyD[a] ?? 0.8),
        d = ui(25, 320, e.ly),
        f =
          $(
            u *
              (1 - 0.55 * this.parkAmt) *
              (1 - 0.6 * this.riverAmt) *
              (1 - 0.75 * d),
            0.05,
            1,
          ) * 0.85;
      ((this.city ??= this.loop(`ambient_city`)),
        this.city.setVolume(f),
        (this.park ??= this.loop(`ambient_park`)));
      let p = $(Math.max(Number(t.env?.rain) || 0, this.eng.wet * 0.6), 0, 1);
      ((this.rainNow = p),
        this.park.setVolume(
          this.parkAmt * (this.night > 0.5 ? 0.75 : 0.9) * (1 - 0.75 * p),
        ),
        this.park.setParam(`night`, this.night),
        (this.river ??= this.loop(`ambient_river`)),
        this.river.setVolume(this.riverAmt * 0.8));
      let m = null,
        h = 1e9;
      for (let e of this.temples) {
        let t = bi(n, r, e);
        t < h && ((h = t), (m = e));
      }
      if (((this.nearTemple = h < 160 ? m : null), this.nearTemple)) {
        let e = this.nearTemple;
        ((this.temple ||= this.loop(`ambient_temple`, {
          x: e.x,
          y: 3,
          z: e.z,
        })),
          this.temple.setPosition(e.x, 3, e.z));
        let t = this.hour > 5.5 && this.hour < 21.5 ? 1 : 0.25;
        this.temple.setVolume(t * 0.9);
      } else this.temple &&= (this.temple.stop(), null);
      let g = null,
        _ = 1e9;
      for (let e of this.markets) {
        let t = bi(n, r, e);
        t < _ && ((_ = t), (g = e));
      }
      let v = this.marketsOpen();
      this.nearMarket = v && _ < 170 ? g : null;
      let y = a === `xinyi` || a === `ximending` || a === `zhongshan` ? 1 : 0.8;
      e.setReverbAmount(
        $(y * (1 - 0.7 * this.parkAmt) * (1 - 0.75 * this.riverAmt), 0.15, 1),
      );
      let b = Number(i.uWet?.value);
      ((e.wet = $(
        Number.isFinite(b) && b > 0 ? b : Number(t.env?.rain) || 0,
        0,
        1,
      )),
        (this.wind ??= this.loop(`wind`)));
      let x = String(t.env?.weather ?? `clear`),
        S = x === `storm` ? 0.55 : x === `rain` ? 0.12 : 0,
        C = $((e.ly - 25) / 120, 0, 0.5),
        w = t.vehicles?.playerVehicle ?? null,
        T = Math.abs(w?.speed ?? 0),
        E = +!!w?.spec?.twoWheeler
          ? $(T / 22, 0, 1) * 0.85
          : $(T / 45, 0, 1) * 0.25,
        D = S === 0 ? 0.015 : 0.04;
      (this.wind.setVolume($(D + S + C + E + this.riverAmt * 0.12, 0, 1)),
        this.wind.setRate(0.85 + $(T / 30, 0, 0.5)));
    }
    prefetch() {
      let e = this.ctx,
        t = this.eng.bank,
        n = e.player;
      (n && n.mode === `foot` && this.storeChimes(n.position.x, n.position.z),
        String(e.env?.weather) === `storm` && t.wantSfx(`thunder`));
      let r = this.eng.indoorS > 0.5;
      ((this.nearTemple || (r && this.eng.room === `temple`)) &&
        (t.wantSfx(`temple_bell`),
        t.wantSfx(`temple_drum`),
        t.wantSfx(`moon_blocks`)),
        r &&
          this.eng.room === `store` &&
          (t.wantSfx(`microwave_beep`),
          t.wantSfx(`fridge_door`),
          t.wantSfx(`alarm`)),
        (Number(e.police?.level) || 0) > 0 &&
          (t.wantSfx(`busted`),
          t.wantSfx(`wanted_lost`),
          t.wantSfx(`police_megaphone`)),
        e.landmarks?.fireworksActive && this.wantFireworks());
    }
    wantFireworks() {
      let e = this.eng.bank;
      (e.wantSfx(`firework_boom`),
        e.wantSfx(`firework_crackle`),
        e.wantSfx(`firework_launch`),
        e.wantSfx(`firework_whistle`));
    }
    floors = [];
    autoIn = !1;
    autoIndoor() {
      let e = this.eng,
        t = this.ctx;
      if (e.indoorExplicitAt > 0) {
        this.autoIn = !1;
        return;
      }
      let n = ``,
        r = t.player;
      if (r && r.mode === `foot` && typeof t.statics?.floorsAt == `function`) {
        let e = r.position,
          i = t.statics.floorsAt(e.x, e.z, this.floors);
        for (let t = 0; t < i; t++) {
          let r = this.floors[t];
          if (!_i.test(r.tag)) continue;
          let i = Math.max(r.y0, r.y1);
          if (Math.abs(e.y - i) < 1.2) {
            n = r.tag;
            break;
          }
        }
      }
      n
        ? ((this.autoIn = !0), e.setIndoor(1, vi(n), !1))
        : this.autoIn && ((this.autoIn = !1), e.setIndoor(0, e.room, !1));
    }
    marketsOpen() {
      let e = this.ctx.culture;
      return !e ||
        (typeof e.update != `function` && typeof e.init != `function`)
        ? this.hour >= 17 || this.hour < 1
        : !!e.marketsOpen;
    }
    crosswalks() {
      let e = this.ctx,
        t = this.eng,
        n = e.player?.mode === `foot` && !this.externalEver(`crosswalk_signal`),
        r = null;
      if (n) {
        r = e.plan.nearestNode(t.lx, t.lz, (e) => e.signal);
        let n = e.player.position.x,
          i = e.player.position.z;
        r && di(r.x - n, r.z - i) > 26 && (r = null);
      }
      if (!r) {
        (this.walkX?.stop(),
          this.walkZ?.stop(),
          (this.walkX = this.walkZ = null));
        return;
      }
      let i = e.player.position,
        a = Math.sign(i.x - r.x) || 1,
        o = Math.sign(i.z - r.z) || 1,
        s = this.night > 0.7 && this.hour > 23 ? 0.5 : 0.85;
      for (let t of [`x`, `z`]) {
        let n = t === `x` ? r.x + a * (r.halfX + 1.2) : r.x + a * r.halfX,
          c = t === `x` ? r.z + o * r.halfZ : r.z + o * (r.halfZ + 1.2),
          l = t === `x` ? this.walkX : this.walkZ;
        (l ||
          ((l = this.loop(`crosswalk_signal`, { x: n, y: 1.2, z: c })),
          t === `x` ? (this.walkX = l) : (this.walkZ = l)),
          l.setPosition(n, 1.2, c));
        let u = e.signals.pedState(r.id, t);
        (l.setParam(`state`, u === `walk` ? 1 : u === `flash` ? 2 : 0),
          l.setParam(`remaining`, e.signals.pedRemaining(r.id, t)),
          l.setParam(`variant`, t === `x` ? 0 : 1));
        let d = $((fi - di(n - i.x, c - i.z)) / 12, 0, 1);
        l.setVolume(s * (t === `x` ? 1 : 0.8) * d * d);
      }
    }
    kindOf(e) {
      let t = e.userData?.kind;
      return t
        ? t === `police`
          ? `engine_car`
          : hi(t)
        : e.halfW < 0.6
          ? `engine_scooter`
          : e.halfL > 3.3
            ? `engine_bus`
            : `engine_car`;
    }
    slotted(e) {
      let t = this.slots;
      for (let n = 0; n < t.length; n++) if (t[n].body === e) return !0;
      return !1;
    }
    qExclude = null;
    qFilter = (e) => e.kind === `vehicle` && e !== this.qExclude;
    candD = [];
    trafficVoices() {
      let e = this.ctx,
        t = this.eng;
      this.qExclude = e.vehicles?.playerVehicle?.body ?? null;
      let n = this.q,
        r = e.dynamics.query(t.lx, t.lz, 48, n, this.qFilter),
        i = 0;
      for (let e = 0; e < r; e++) {
        let t = n[e];
        (t.owner !== `traffic` && t.vx * t.vx + t.vz * t.vz < 0.09) ||
          (t.userData?.kind !== `mamachari` && (n[i++] = t));
      }
      r = n.length = i;
      let a = this.candD;
      for (let e = 0; e < r; e++) {
        let r = n[e].x - t.lx,
          i = n[e].z - t.lz;
        a[e] = r * r + i * i;
      }
      let o = this.slots,
        s = Math.min(r, o.length + 2);
      for (let e = 0; e < s; e++) {
        let t = e;
        for (let n = e + 1; n < r; n++) a[n] < a[t] && (t = n);
        if (t !== e) {
          let r = n[e];
          ((n[e] = n[t]), (n[t] = r));
          let i = a[e];
          ((a[e] = a[t]), (a[t] = i));
        }
      }
      for (let t = 0; t < o.length; t++) {
        let r = o[t];
        if (!r.body) continue;
        let i = !1;
        for (let e = 0; e < s && !i; e++) i = n[e] === r.body;
        (!i || !e.dynamics.bodies.has(r.body)) &&
          ((r.body = null), r.loop?.setVolume(0));
      }
      for (let e = 0; e < Math.min(r, o.length); e++) {
        let t = n[e];
        if (this.slotted(t) || this.externalNear(`engine_`, t.x, t.z, 3))
          continue;
        let r = null;
        for (let e = 0; e < o.length && !r; e++) o[e].body || (r = o[e]);
        if (!r) break;
        let i = this.kindOf(t);
        ((r.kind !== i || !r.loop) &&
          (r.loop?.stop(),
          (r.loop = this.loop(i, { x: t.x, y: 0.6, z: t.z })),
          (r.kind = i)),
          (r.body = t),
          (r.lastSpeed = di(t.vx, t.vz)));
      }
      let c = 0;
      for (let e = 0; e < o.length; e++) o[e].body && c++;
      this.stats.traffic = c;
      let l = 0,
        u = 0,
        d = 0,
        f = 0;
      for (let e = 0; e < r; e++) {
        let t = n[e];
        this.kindOf(t) !== `engine_scooter` ||
          this.slotted(t) ||
          (l++, (u += t.x), (d += t.z), (f += di(t.vx, t.vz)));
      }
      let p = this.swarm;
      if (l >= 2) {
        ((p.n = l), (p.x = u / l), (p.z = d / l));
        let e = f / l;
        ((p.acc = (e - p.speed) / 0.2),
          (p.speed = e),
          p.loop ||
            ((p.loop = this.eng.loop(
              `engine_scooter`,
              { x: p.x, y: 0.6, z: p.z },
              !0,
            )),
            p.loop.setParam(`swarm`, 1),
            p.loop.setVolume(0)));
      } else p.n = 0;
      this.stats.swarm = l;
    }
    swarm = {
      loop: null,
      n: 0,
      x: 0,
      z: 0,
      speed: 0,
      acc: 0,
      thr: 0,
      px: NaN,
      pz: NaN,
    };
    updateSwarm(e) {
      let t = this.swarm,
        n = t.loop;
      if (!n) return;
      if (t.n < 2) {
        n.setVolume(Math.max(0, n.state.vol - e * 1.5));
        return;
      }
      Number.isFinite(t.px) || ((t.px = t.x), (t.pz = t.z));
      let r = Math.min(1, e * 2);
      ((t.px += (t.x - t.px) * r),
        (t.pz += (t.z - t.pz) * r),
        n.setPosition(t.px, 0.6, t.pz),
        (t.thr +=
          ((t.acc > 0.3
            ? 0.9
            : t.acc < -0.6
              ? 0.05
              : t.speed < 0.4
                ? 0.03
                : 0.4) -
            t.thr) *
          Math.min(1, e * 3)),
        n.setParam(`rpm`, Di(`engine_scooter`, t.speed)),
        n.setParam(`throttle`, t.thr),
        n.setVolume($(0.35 + t.n / 10, 0, 1.3) * (t.speed < 0.4 ? 0.6 : 1)));
    }
    updateTrafficParams(e) {
      for (let t of this.slots) {
        let n = t.body,
          r = t.loop;
        if (!n || !r) continue;
        r.setPosition(n.x, 0.6, n.z);
        let i = di(n.vx, n.vz),
          a = e > 0 ? (i - t.lastSpeed) / e : 0;
        ((t.lastSpeed = i),
          (t.thr +=
            ((a > 0.4 ? 0.85 : a < -0.8 ? 0.05 : i < 0.3 ? 0.02 : 0.35) -
              t.thr) *
            Math.min(1, e * 4)),
          r.setParam(`rpm`, Di(t.kind, i)),
          r.setParam(`throttle`, t.thr),
          r.setVolume(i < 0.3 ? 0.5 : 0.85));
      }
    }
    seenSirens = new Set();
    fallbackSirens() {
      let e = this.ctx.vehicles?.list;
      if (!e) return;
      let t = this.seenSirens;
      t.clear();
      for (let n of e) {
        if (
          !n.sirenOn ||
          n.destroyed ||
          t.size >= 4 ||
          this.ctx.police?.isPoliceVehicle?.(n.id)
        )
          continue;
        t.add(n.id);
        let e = n.kind === `ambulance` ? `siren_ambulance` : `siren_police`,
          r = this.sirens.get(n.id);
        if (this.externalNear(`siren_`, n.body.x, n.body.z, 6)) {
          r && (r.stop(), this.sirens.delete(n.id));
          continue;
        }
        (r ||
          this.sirens.set(
            n.id,
            (r = this.loop(e, { x: n.body.x, y: 1.5, z: n.body.z })),
          ),
          r.setPosition(n.body.x, 1.5, n.body.z),
          r.setVolume(1));
      }
      for (let [e, n] of this.sirens)
        t.has(e) || (n.stop(), this.sirens.delete(e));
      this.stats.sirens = this.sirens.size;
    }
    fallbackTrucks() {
      let e = this.ctx.culture?.garbageTrucks ?? [],
        t = 0;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (!r.playing || this.externalNear(`garbage_truck`, r.x, r.z, 8)) {
          this.trucks[n] && (this.trucks[n].stop(), delete this.trucks[n]);
          continue;
        }
        let i = this.trucks[n];
        (i ||
          ((i = this.trucks[n] =
            this.loop(`garbage_truck`, { x: r.x, y: 2.5, z: r.z })),
          i.setParam(`tune`, n % 2)),
          i.setPosition(r.x, 2.5, r.z),
          i.setVolume(1),
          t++);
      }
      for (let t = e.length; t < this.trucks.length; t++)
        this.trucks[t] && (this.trucks[t].stop(), delete this.trucks[t]);
      this.stats.trucks = t;
    }
    fallbackRain() {
      let e = $(Number(this.ctx.env?.rain) || 0, 0, 1),
        t = this.externalEver(`rain`);
      if (t || e < 0.02) {
        this.rain &&
          (this.rain.setVolume(0), t && (this.rain.stop(), (this.rain = null)));
        return;
      }
      ((this.rain ??= this.loop(`rain`)), this.rain.setVolume(e));
    }
    phantomGarbageTruck(e) {
      let t = this.hour >= 19 && this.hour < 21.2,
        n =
          (this.ctx.culture?.garbageTrucks?.length ?? 0) > 0 ||
          this.externalEver(`garbage_truck`),
        r = this.phantomTruck;
      if (!t || n || this.district === `riverside` || this.riverAmt > 0.6) {
        r && (r.loop.stop(), (this.phantomTruck = null));
        return;
      }
      let i = this.eng;
      if (!r) {
        if (((this.timers.truckCool -= e), this.timers.truckCool > 0)) return;
        this.timers.truckCool = 70;
        let t = Math.random() * Math.PI * 2,
          n = i.lx + Math.cos(t) * 165,
          r = i.lz + Math.sin(t) * 165;
        try {
          let e = this.ctx.plan.nearestLink(n, r);
          if (e) {
            ((n = e.link.sx + e.link.dx * e.s),
              (r = e.link.sz + e.link.dz * e.s));
            let t = this.loop(`garbage_truck`, { x: n, y: 2.5, z: r });
            (t.setParam(`tune`, Math.random() < 0.7 ? 0 : 1),
              (this.phantomTruck = {
                loop: t,
                x: n,
                z: r,
                dx: e.link.dx,
                dz: e.link.dz,
                t: 0,
                stopT: 6,
              }));
          }
        } catch {}
        return;
      }
      ((r.t += e),
        r.t % 26 > 12 && ((r.x += r.dx * 3 * e), (r.z += r.dz * 3 * e)),
        r.loop.setPosition(r.x, 2.5, r.z));
      let a =
        Math.min(1, r.t / 4) * (r.t > 95 ? Math.max(0, 1 - (r.t - 95) / 8) : 1);
      (r.loop.setVolume(0.95 * a),
        (r.t > 104 || di(r.x - i.lx, r.z - i.lz) > 260) &&
          (r.loop.stop(), (this.phantomTruck = null)));
    }
    playerVehicle(e) {
      let t = this.ctx;
      if (!t.player) return;
      let n = t.vehicles?.playerVehicle ?? null,
        r = n && !n.spec?.twoWheeler ? 1 : 0;
      if (
        (this.cabinS !== r &&
          ((this.cabinS += (r - this.cabinS) * Math.min(1, e * 5)),
          Math.abs(this.cabinS - r) < 0.005 && (this.cabinS = r),
          this.eng.setCabin(this.cabinS * 0.85)),
        n && !n.destroyed)
      ) {
        let e = hi(n.kind, !!n.spec?.twoWheeler);
        if (this.externalNear(`engine_`, n.body.x, n.body.z, 5))
          (this.playerEngine?.stop(), (this.playerEngine = null));
        else {
          (!this.playerEngine || this.playerEngineKind !== e) &&
            (this.playerEngine?.stop(),
            (this.playerEngine = this.loop(e, {
              x: n.body.x,
              y: 0.8,
              z: n.body.z,
            })),
            (this.playerEngineKind = e));
          let r = Math.abs(n.speed),
            i = t.input,
            a = $(i.axis(`throttle`) + Math.max(0, -i.axis(`brake`) * 0), 0, 1),
            o = $(i.axis(`brake`), 0, 1),
            s = this.playerEngine;
          s.setPosition(n.body.x, 0.8, n.body.z);
          let c = n.rpm,
            l =
              c !== void 0 && Number.isFinite(c)
                ? c
                : Di(e, r) + a * (r < 2 ? 0.35 : 0.08);
          (s.setParam(`rpm`, $(l, 0, 1)),
            s.setParam(`throttle`, o > 0.5 && r > 1 ? 0.05 : a),
            s.setParam(`speed`, r),
            s.setVolume(1));
        }
      } else this.playerEngine &&= (this.playerEngine.stop(), null);
    }
    player(e) {
      let t = this.ctx,
        n = t.player;
      if (!n) return;
      let r = t.vehicles?.playerVehicle ?? null;
      !!r !== this.hadVehicle &&
        ((this.hadVehicle = !!r), this.setRadioActive?.(!!r));
      let i = t.input,
        a = t.time.frame,
        o = this.eng.externalPlays;
      if (
        r &&
        i.pressed(`horn`) &&
        o.get(`horn_car`) !== a &&
        o.get(`horn_scooter`) !== a &&
        o.get(`horn_bus`) !== a &&
        o.get(`bike_bell`) !== a
      ) {
        let e =
          r.kind === `mamachari`
            ? `bike_bell`
            : r.spec?.twoWheeler
              ? /superbike|heavy|cruiser/i.test(r.kind)
                ? `horn_car`
                : `horn_scooter`
              : r.kind === `bus`
                ? `horn_bus`
                : `horn_car`;
        this.eng.play(e, { x: r.body.x, y: 1, z: r.body.z }, void 0, !1);
      }
      if (
        (r &&
          i.pressed(`radio`) &&
          this.radioNextFrame !== a &&
          this.radio.next(),
        n.mode === `foot`)
      ) {
        let r = n.position,
          i = r.y;
        try {
          i = t.plan.groundHeight(r.x, r.z);
        } catch {}
        let s = r.y - i > 0.22,
          c = (o.get(`footstep`) ?? -1e9) > a - 90;
        if (s)
          (this.airborne === 0 &&
            (o.get(`jump`) ?? -1e9) < a - 30 &&
            r.y > this.prevY &&
            this.eng.play(`jump`, { x: r.x, y: r.y, z: r.z }, void 0, !1),
            (this.airborne += e));
        else {
          (this.airborne > 0.3 &&
            (o.get(`land`) ?? -1e9) < a - 30 &&
            this.eng.play(`land`, { x: r.x, y: r.y, z: r.z }, void 0, !1),
            (this.airborne = 0));
          let t = di(n.velocity.x, n.velocity.z);
          if (t > 0.8 && !c) {
            this.stepAcc += e;
            let n = $(0.62 - t * 0.05, 0.27, 0.58);
            this.stepAcc >= n &&
              ((this.stepAcc = 0),
              this.footstep(r.x, r.y, r.z, $(0.45 + t / 8, 0.4, 1)));
          } else this.stepAcc = 0.25;
        }
        this.prevY = r.y;
      }
    }
    footstep(e, t, n, r = 1, i = !1) {
      let a = `sidewalk`;
      try {
        a = this.ctx.plan.surfaceAt(e, n);
      } catch {}
      let o = this.eng.wet > 0.25 || (Number(this.ctx.env?.rain) || 0) > 0.2,
        s =
          this.eng.indoorS > 0.5
            ? `footstep_tile`
            : a === `park` || a === `terrain`
              ? `footstep_grass`
              : o
                ? `footstep_wet`
                : `footstep_concrete`;
      this.eng.play(`footstep`, { x: e, y: t, z: n, volume: r }, s, i);
    }
    storeChimes(e, t) {
      let n = this.ctx.time.real;
      for (let r of this.ctx.plan.pois) {
        if (r.kind !== `convenience`) continue;
        let i = r.x - e,
          a = r.z - t;
        i * i + a * a > 16 ||
          n < (this.storeCool.get(r.id) ?? 0) ||
          (this.storeCool.set(r.id, n + 45),
          this.eng.play(
            `store_chime`,
            { x: r.x, y: 2.2, z: r.z },
            void 0,
            !1,
            0,
            +(r.brand === `FamilyMark`),
          ));
      }
    }
    fire(e, t) {
      let n = this.remap ? this.remap(e, t) : e;
      n && this.eng.play(n, t, void 0, !1) && this.stats.events++;
    }
    around(e, t) {
      let n = Math.random() * Math.PI * 2,
        r = e + Math.random() * (t - e);
      return {
        x: this.eng.lx + Math.cos(n) * r,
        y: 1.2,
        z: this.eng.lz + Math.sin(n) * r,
      };
    }
    events(e) {
      let t = this.eng,
        n = this.timers,
        r = this.ctx;
      if (!t.running || r.paused) return;
      let i = xi(this.hour) * (this.busyD[this.district] ?? 0.8),
        a = 1 - Math.max(this.parkAmt, this.riverAmt),
        o = !!r.vehicles?.playerVehicle,
        s = Math.random;
      if ((n.mrt -= e) <= 0) {
        n.mrt = 16 + s() * 22;
        let e = typeof r.transit?.update != `function`;
        for (let n of r.plan.mrtStations ?? []) {
          if (!n.elevated && di(n.ex - t.lx, n.ez - t.lz) < 16) {
            this.fire(`mrt_door_chime`, {
              x: n.ex,
              y: -5,
              z: n.ez,
              volume: 0.35,
            });
            break;
          }
          if (n.elevated && e && di(n.x - t.lx, n.z - t.lz) < 60) {
            this.fire(`mrt_arrival`, { x: n.x, y: 9, z: n.z, volume: 0.7 });
            break;
          }
        }
      }
      if ((n.thunder -= e) <= 0) {
        n.thunder = 10 + s() * 22;
        let e = (t.externalPlays.get(`thunder`) ?? -1e9) > r.time.frame - 2400;
        String(r.env?.weather) === `storm` &&
          !e &&
          this.fire(`thunder`, {
            volume: 0.55 + 0.45 * s(),
            rate: 0.9 + s() * 0.2,
          });
      }
      if (
        ((n.passby -= e) <= 0 &&
          ((n.passby = (4 + s() * 9) / Math.max(0.2, i * a)),
          a > 0.4 &&
            !o &&
            this.fire(s() < 0.72 ? `passby_scooter` : `passby_car`, {
              volume: 0.35 + 0.4 * s() * i,
              rate: 0.92 + s() * 0.16,
            })),
        (n.horn -= e) <= 0 &&
          ((n.horn = (8 + s() * 16) / Math.max(0.2, i * a)),
          a > 0.3 &&
            this.fire(s() < 0.6 ? `horn_scooter` : `horn_car`, {
              ...this.around(35, 110),
              volume: 0.45 + 0.3 * s(),
              rate: 0.94 + s() * 0.12,
            })),
        (n.dog -= e) <= 0)
      ) {
        n.dog = 25 + s() * 50;
        let e =
          this.district === `wanhua` ||
          this.district === `shilin` ||
          this.district === `zhongzheng` ||
          this.district === `songshan`;
        this.night > 0.5 &&
          (e || s() < 0.35) &&
          !o &&
          this.fire(`dog_bark`, { ...this.around(30, 90), volume: 0.6 });
      }
      if ((n.bird -= e) <= 0) {
        let e =
          this.hour > 5.5 && this.hour < 10 ? 1 : this.hour < 17.5 ? 0.45 : 0;
        ((n.bird =
          (2.5 + s() * 5) / Math.max(0.15, (this.parkAmt + 0.25) * (e + 0.01))),
          e > 0 &&
            this.night < 0.5 &&
            !o &&
            this.rainNow < 0.2 &&
            this.fire(`bird_chirp`, {
              ...this.around(8, 35),
              y: 6 + s() * 6,
              volume: 0.35 + 0.4 * this.parkAmt,
            }));
      }
      let c =
        this.district === `wanhua` ||
        this.district === `zhongzheng` ||
        this.district === `shilin` ||
        this.district === `songshan` ||
        this.district === `daan`;
      if (
        (n.mahjong -= e) <= 0 &&
        ((n.mahjong = 45 + s() * 70),
        (this.hour > 19 || this.hour < 1.5) && c && a > 0.5 && !o)
      ) {
        let e = this.around(10, 24);
        ((e.y = 5 + s() * 6),
          this.fire(`mahjong`, { ...e, volume: 0.6 + 0.3 * s() }));
      }
      if (
        ((n.vendorTruck -= e) <= 0 &&
          ((n.vendorTruck = 80 + s() * 140),
          this.hour > 9 &&
            this.hour < 18 &&
            c &&
            a > 0.5 &&
            this.fire(`loudspeaker_vendor`, {
              ...this.around(70, 140),
              volume: 0.8,
            })),
        (n.siren -= e) <= 0 &&
          ((n.siren = 100 + s() * 160),
          a > 0.5 &&
            this.fire(`distant_siren`, {
              volume: 0.6 + 0.4 * s(),
              rate: 0.95 + s() * 0.1,
            })),
        (n.cracker -= e) <= 0 &&
          ((n.cracker = 120 + s() * 200),
          this.hour > 17 &&
            this.hour < 23 &&
            !o &&
            this.fire(`firecracker`, {
              ...this.around(170, 260),
              volume: 0.7,
            })),
        this.nearTemple && (n.templeEv -= e) <= 0)
      ) {
        n.templeEv = 18 + s() * 40;
        let e = this.nearTemple,
          t = s();
        this.hour > 5.5 &&
          this.hour < 21.5 &&
          (t < 0.35
            ? this.fire(`temple_bell`, { x: e.x, y: 8, z: e.z, volume: 0.7 })
            : t < 0.6
              ? this.fire(`temple_drum`, { x: e.x, y: 2, z: e.z, volume: 0.6 })
              : t < 0.8 &&
                this.fire(`wood_fish`, {
                  x: e.x + (s() - 0.5) * 10,
                  y: 1,
                  z: e.z + (s() - 0.5) * 10,
                }));
      }
      if (this.nearMarket && (n.vendor -= e) <= 0) {
        n.vendor = 2.5 + s() * 5;
        let e = this.nearMarket;
        this.fire(`vendor_call`, {
          x: e.x + (s() - 0.5) * e.w,
          y: 1.6,
          z: e.z + (s() - 0.5) * e.d,
          volume: 0.55 + 0.4 * s(),
          rate: 0.9 + s() * 0.2,
        });
      }
      if ((n.store -= e) <= 0 && ((n.store = 12 + s() * 25), !o)) {
        let e = null,
          n = 900;
        for (let i of r.plan.pois) {
          if (i.kind !== `convenience`) continue;
          let r = (i.x - t.lx) ** 2 + (i.z - t.lz) ** 2;
          r < n && ((n = r), (e = i));
        }
        e &&
          this.eng.play(
            `store_chime`,
            { x: e.x, y: 2.2, z: e.z, volume: 0.6 },
            void 0,
            !1,
            0,
            +(e.brand === `FamilyMark`),
          ) &&
          this.stats.events++;
      }
    }
  },
  Ci = [0, 3, 7, 12, 17, 24],
  wi = [0, 8, 16, 26, 38, 52, 70],
  Ti = [0, 9, 17, 26, 36, 48, 64],
  Ei = [0, 6, 12, 19, 27, 36, 50];
