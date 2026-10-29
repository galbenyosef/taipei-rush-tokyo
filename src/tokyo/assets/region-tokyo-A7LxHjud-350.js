// tokyo/assets/region-tokyo-A7LxHjud 350 — stops
// Lines 126471-127371 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var gje = 70,
  _je = 40,
  aX = 1.8,
  oX = class e {
    track;
    sStart;
    dir;
    phases = [];
    T = 0;
    D = 0;
    constructor(e, t, n) {
      ((this.track = e), (this.sStart = t), (this.dir = n));
    }
    at(e, t) {
      let n = this.phases;
      if (e <= 0) return ((t.d = 0), (t.v = n[0]?.v0 ?? 0), (t.phase = 0), t);
      let r = 0,
        i = n.length - 1;
      for (; r < i;) {
        let t = (r + i + 1) >> 1;
        n[t].t0 <= e ? (r = t) : (i = t - 1);
      }
      let a = n[r],
        o = Math.min(a.dur, e - a.t0);
      return (
        (t.d = a.d0 + a.v0 * o + 0.5 * a.a * o * o),
        (t.v = a.v0 + a.a * o),
        (t.phase = r),
        t
      );
    }
    s(e) {
      return this.sStart + this.dir * e;
    }
    static build(t, n, r, i, a) {
      let o = r >= n ? 1 : -1,
        s = new e(t, n, o),
        c = 0,
        l = 0,
        u = a.v0,
        d = (e, t) => {
          if (e <= 0.01) return;
          let { acc: n, dec: r, vmax: i } = a,
            o = Math.sqrt(
              Math.max(0, (2 * n * r * e + r * u * u + n * t * t) / (n + r)),
            );
          o = Math.min(i, Math.max(o, Math.max(u, t)));
          let d = Math.max(0, (o * o - u * u) / (2 * n)),
            f = Math.max(0, (o * o - t * t) / (2 * r)),
            p = Math.max(0, e - d - f);
          if (d > 0.001) {
            let e = (o - u) / n;
            (s.phases.push({ t0: c, dur: e, d0: l, v0: u, a: n, stop: null }),
              (c += e),
              (l += d));
          }
          if (p > 0.001) {
            let e = p / o;
            (s.phases.push({ t0: c, dur: e, d0: l, v0: o, a: 0, stop: null }),
              (c += e),
              (l += p));
          }
          if (f > 0.001) {
            let e = (o - t) / r;
            (s.phases.push({ t0: c, dur: e, d0: l, v0: o, a: -r, stop: null }),
              (c += e),
              (l += f));
          }
          u = t;
        };
      return (
        i.forEach((e, t) => {
          let r = ((o > 0 ? e.s1 - 2 : e.s0 + 2) - n) * o;
          if (r <= l + 0.5) return;
          d(r - l, 0);
          let i = a.dwellOf ? a.dwellOf(e, t) : a.dwell;
          (s.phases.push({ t0: c, dur: i, d0: l, v0: 0, a: 0, stop: e }),
            (c += i));
        }),
        d((r - n) * o - l, a.vEnd),
        s.phases.push({
          t0: c,
          dur: 1e9,
          d0: (r - n) * o,
          v0: 0,
          a: 0,
          stop: null,
        }),
        (s.T = c),
        (s.D = (r - n) * o),
        s
      );
    }
  },
  sX = new p(),
  cX = new o(),
  lX = new E(),
  vje = new E(1, 1, 1),
  yje = new E(0, 1, 0),
  uX = { d: 0, v: 0, phase: 0 },
  dX = { x: 0, z: 0 },
  fX = { x: 0, z: 0 },
  bje = class {
    ctx;
    m;
    melody;
    mesh;
    services = [];
    geo = new Map();
    t = 3600;
    tPrev = 3600;
    ride = null;
    rideState = {
      active: !1,
      x: 0,
      y: 0,
      z: 0,
      heading: 0,
      v: 0,
      t: 0,
      T: 0,
      stopped: null,
      next: null,
      deck: 0,
    };
    visibleTrains = 0;
    nearGeo = new Int32Array();
    farGeoOf = new Map();
    isFar = new Uint8Array();
    carX = new Float32Array();
    carZ = new Float32Array();
    camX = 0;
    camZ = 0;
    carFar = gje;
    constructor(e, t, n) {
      ((this.ctx = e), (this.m = t), (this.melody = n));
      let r = hje([`JY`, `JK`, `JB`, `JC`, `SK`]),
        i = this.serviceDefs(),
        a = 0,
        o = i.map((e) => {
          let t = this.profileFor(e.track, e.kind),
            n = Math.ceil(t.T / e.headway) + 2;
          return ((a += n * XY[e.kind].cars), { d: e, pr: t, alive: n });
        }),
        s = o.find((e) => e.d.id === `jc-e`),
        c = o.find((e) => e.d.id === `jc-w`);
      (s && c && (c.d.offset = s.d.offset + s.pr.T), (a += XY.JY.cars));
      let l = 0,
        u = 0;
      for (let e of r.values())
        ((l += e.attributes.position.count), (u += e.index.count));
      let d = ke(`opaque`, {
          policy: e.quality.materials,
          batched: !0,
          name: `tokyo-tiles-t1`,
        }),
        f = (this.mesh = new b(a + 4, l + 64, u + 96, d));
      ((f.name = `transit-trains`),
        (f.castShadow = !1),
        (f.receiveShadow = !0),
        (f.frustumCulled = !1),
        (f.sortObjects = !1),
        (f.userData.owner = `transit`));
      for (let [e, t] of r) this.geo.set(e, f.addGeometry(t));
      let p = Number(e.params.get(`carfar`) ?? NaN);
      if (
        (p > 0
          ? (this.carFar = p)
          : e.quality.level === `low` && (this.carFar = _je),
        e.params.get(`carlod`) !== `0`)
      )
        for (let [e, t] of this.geo)
          !e.endsWith(`:far`) &&
            this.geo.has(`${e}:far`) &&
            this.farGeoOf.set(t, this.geo.get(`${e}:far`));
      let m = a + 4;
      ((this.nearGeo = new Int32Array(m).fill(-1)),
        (this.isFar = new Uint8Array(m)),
        (this.carX = new Float32Array(m)),
        (this.carZ = new Float32Array(m)));
      for (let { d: e, pr: t, alive: n } of o) {
        let r = XY[e.kind],
          i = [];
        for (let t = 0; t < n; t++) {
          let t = [];
          for (let n = 0; n < r.cars; n++) {
            let i = this.geo.get(
                `${e.kind}:${n === 0 || n === r.cars - 1 ? `head` : `mid`}`,
              ),
              a = f.addInstance(i);
            (a < this.nearGeo.length && (this.nearGeo[a] = i),
              f.setVisibleAt(a, !1),
              t.push(a));
          }
          i.push(t);
        }
        this.services.push({
          id: e.id,
          kind: e.kind,
          track: e.track,
          profile: t,
          headway: e.headway,
          offset: e.offset,
          slots: i,
          slotTrain: new Int32Array(n).fill(-1),
          slotD: new Float32Array(n).fill(NaN),
          hidden: !1,
        });
      }
      e.events.on(`quality:changed`, () => {
        f.material = ke(`opaque`, {
          policy: e.quality.materials,
          batched: !0,
          name: `tokyo-tiles-t1`,
        });
      });
    }
    serviceDefs() {
      let e = [],
        t = (e) => this.m.tracks.find((t) => t.id === e),
        n = (n, r, i, a, o) => {
          let s = t(i);
          s && e.push({ id: n, kind: r, track: s, headway: a, offset: o });
        };
      return (
        n(`jy-in`, `JY`, `jy-in`, 150, 0),
        n(`jy-out`, `JY`, `jy-out`, 150, 70),
        n(`jk-n`, `JK`, `jk-n`, 210, 40),
        n(`jk-s`, `JK`, `jk-s`, 210, 150),
        n(`sk-n`, `SK`, `sk-n`, 300, 20),
        n(`sk-s`, `SK`, `sk-s`, 300, 170),
        n(`jb-e`, `JB`, `jb-e`, 220, 60),
        n(`jb-w`, `JB`, `jb-w`, 220, 170),
        n(`jc-e`, `JC`, `jc-e`, 240, 30),
        n(`jc-w`, `JC`, `jc-w`, 240, 0),
        e
      );
    }
    profileFor(e, t) {
      let n = XY[t],
        r = n.cars * (n.len + n.gap),
        i = t === `SK` ? 30 : t === `JK` ? 24 : 22;
      if (e.id === `jc-e` && e.stops.length) {
        let t = e.stops[e.stops.length - 1];
        return oX.build(e, e.s0, t.s1 - 2, e.stops.slice(0, -1), {
          vmax: i,
          acc: 0.9,
          dec: 1,
          dwell: 22,
          v0: i,
          vEnd: 0,
        });
      }
      if (e.id === `jc-w`) {
        let t = this.m.platforms.find((e) => e.id === `jc-tokyo`);
        if (t) {
          let a = n.cars * n.len + (n.cars - 1) * n.gap,
            o = oX.build(e, t.s1 - 2 - a, e.s0 - r, [...e.stops].reverse(), {
              vmax: i,
              acc: 0.9,
              dec: 1,
              dwell: 22,
              v0: 0,
              vEnd: i,
            });
          for (let e of o.phases) e.t0 += 45;
          return (
            o.phases.unshift({ t0: 0, dur: 45, d0: 0, v0: 0, a: 0, stop: t }),
            (o.T += 45),
            o
          );
        }
      }
      let a = e.dir > 0 ? e.s0 : e.s1,
        o = e.dir > 0 ? e.s1 + r : e.s0 - r,
        s = t === `JK` ? [] : e.dir > 0 ? e.stops : [...e.stops].reverse();
      return oX.build(e, a, o, s, {
        vmax: i,
        acc: t === `SK` ? 0.7 : 0.9,
        dec: 1,
        dwell: t === `SK` ? 40 : 22,
        v0: i,
        vEnd: i,
      });
    }
    update(e, t, n) {
      ((this.tPrev = this.t), (this.t += e));
      let r = this.t;
      ((this.camX = t.x), (this.camZ = t.z));
      let i = 0;
      for (let e of this.services) {
        let a = e.profile,
          o = e.headway,
          s = Math.floor((r - e.offset) / o),
          c = Math.ceil((r - e.offset - a.T) / o),
          l = e.slots.length;
        for (let t = 0; t < l; t++) {
          let n = e.slotTrain[t];
          if (n >= 0 && (n < c || n > s || e.hidden)) {
            for (let n of e.slots[t]) this.mesh.setVisibleAt(n, !1);
            ((e.slotTrain[t] = -1), (e.slotD[t] = NaN));
          }
        }
        if (!e.hidden)
          for (let u = Math.max(c, 0); u <= s; u++) {
            let s = r - (e.offset + u * o);
            a.at(s, uX);
            let c = ((u % l) + l) % l;
            if (e.slotTrain[c] !== u) {
              if (e.slotTrain[c] >= 0)
                for (let t of e.slots[c]) this.mesh.setVisibleAt(t, !1);
              ((e.slotTrain[c] = u), (e.slotD[c] = NaN));
            }
            let d = a.phases[uX.phase];
            if (d.stop) {
              let t = e.offset + u * o + d.t0 + d.dur - 7;
              t > this.tPrev && t <= r && this.melody(d.stop, e.track, 7, !1);
            }
            a.track.corridor.path.pos(a.s(uX.d), a.track.off.at(a.s(uX.d)), dX);
            let f = dX.x - t.x,
              p = dX.z - t.z,
              m = XY[e.kind].cars * (XY[e.kind].len + XY[e.kind].gap);
            if (!(f * f + p * p < (n + m) * (n + m))) {
              if (!Number.isNaN(e.slotD[c]))
                for (let t of e.slots[c]) this.mesh.setVisibleAt(t, !1);
              e.slotD[c] = NaN;
              continue;
            }
            (i++,
              e.slotD[c] === uX.d
                ? this.lodCars(e.slots[c])
                : (this.placeTrain(e.kind, a, uX.d, e.slots[c]),
                  (e.slotD[c] = uX.d)));
          }
      }
      if (this.ride?.drive) {
        let t = this.ride,
          n = t.drive;
        ((t.t += e),
          n.d === n.placed
            ? this.lodCars(t.ids)
            : (this.placeTrain(`JY`, t.profile, n.d, t.ids), (n.placed = n.d)));
        let r = this.rideState,
          a = t.profile.s(n.d),
          o = t.profile.track;
        (o.corridor.path.pos(a, o.off.at(a), dX),
          o.corridor.path.pos(
            a + t.profile.dir,
            o.off.at(a + t.profile.dir),
            fX,
          ),
          (r.x = dX.x),
          (r.z = dX.z),
          (r.y = o.y.at(a)),
          (r.deck = o.corridor.deck.at(a)),
          (r.heading = Math.atan2(fX.x - dX.x, -(fX.z - dX.z))),
          (r.v = n.v),
          (r.t = t.t),
          (r.T = 1 / 0),
          (r.stopped = n.stopped),
          (r.next = n.next),
          i++);
      } else if (this.ride) {
        let t = this.ride;
        ((t.t = this.rideHold ?? t.t + e * 1.8),
          t.profile.at(t.t, uX),
          this.placeTrain(`JY`, t.profile, uX.d, t.ids));
        let n = t.profile.phases[uX.phase],
          r = this.rideState,
          a = t.profile.s(uX.d),
          o = t.profile.track;
        (o.corridor.path.pos(a, o.off.at(a), dX),
          o.corridor.path.pos(
            a + t.profile.dir,
            o.off.at(a + t.profile.dir),
            fX,
          ),
          (r.x = dX.x),
          (r.z = dX.z),
          (r.y = o.y.at(a)),
          (r.deck = o.corridor.deck.at(a)),
          (r.heading = Math.atan2(fX.x - dX.x, -(fX.z - dX.z))),
          (r.v = uX.v * aX),
          (r.t = t.t),
          (r.T = t.profile.T),
          (r.stopped = n.stop),
          (r.next = null));
        for (let e = uX.phase; e < t.profile.phases.length; e++)
          if (t.profile.phases[e].stop && t.profile.phases[e].stop !== n.stop) {
            r.next = t.profile.phases[e].stop;
            break;
          }
        if (n.stop) {
          let r = 3.5,
            i = n.t0 + n.dur - r;
          i > t.t - e * 1.8 && i <= t.t && this.melody(n.stop, o, r / aX, !0);
        }
        i++;
      }
      this.visibleTrains = i;
    }
    lodCars(e) {
      let t = this.carFar,
        n = t * t,
        r = Math.max(0, t - 8) ** 2;
      for (let t of e) {
        if (t >= this.nearGeo.length) continue;
        let e = this.nearGeo[t],
          i = e >= 0 ? this.farGeoOf.get(e) : void 0;
        if (i === void 0) continue;
        let a =
            (this.carX[t] - this.camX) ** 2 + (this.carZ[t] - this.camZ) ** 2,
          o = this.isFar[t] === 1,
          s = o ? a > r : a > n;
        s !== o &&
          ((this.isFar[t] = +!!s), this.mesh.setGeometryIdAt(t, s ? i : e));
      }
    }
    placeTrain(e, t, n, r) {
      let i = XY[e],
        a = t.track,
        o = a.corridor;
      for (let e = 0; e < r.length; e++) {
        let s = n - (e * (i.len + i.gap) + i.len / 2),
          c = t.s(s + i.len / 2 - 3),
          l = t.s(s - i.len / 2 + 3);
        (o.path.pos(c, a.off.at(c), dX), o.path.pos(l, a.off.at(l), fX));
        let u = a.y.at(c),
          d = a.y.at(l),
          f = dX.x - fX.x,
          p = dX.z - fX.z,
          m = Math.hypot(f, p) || 1;
        ((f /= m), (p /= m));
        let h = e === r.length - 1 && r.length > 1,
          g = Math.atan2(h ? -f : f, h ? p : -p);
        (cX.setFromAxisAngle(yje, -g),
          lX.set((dX.x + fX.x) / 2, (u + d) / 2, (dX.z + fX.z) / 2),
          sX.compose(lX, cX, vje),
          this.mesh.setMatrixAt(r[e], sX),
          r[e] < this.carX.length &&
            ((this.carX[r[e]] = lX.x), (this.carZ[r[e]] = lX.z)));
        let _ = a.hideAfter !== void 0 && Math.min(c, l) - 3 > a.hideAfter;
        this.mesh.setVisibleAt(r[e], !_);
      }
      this.lodCars(r);
    }
    route(e, t, n) {
      let r = e.corridor.loopLen ?? 0,
        i = (e) => ({ ...e, sc: e.sc + r, s0: e.s0 + r, s1: e.s1 + r }),
        a = e,
        o = t,
        s;
      if (!r) s = t.sc > e.sc ? 1 : -1;
      else {
        let c = (((t.sc - e.sc) % r) + r) % r;
        ((s = n ?? (c <= r - c ? 1 : -1)),
          s > 0 && t.sc < e.sc && (o = i(t)),
          s < 0 && t.sc > e.sc && (a = i(e)));
      }
      let c = s > 0 ? e.tracks[0] : e.tracks[1];
      if (!c || c.line !== `JY`) return null;
      let l = (r ? [...c.stops, ...c.stops.map(i)] : c.stops).filter((e) =>
          s > 0
            ? e.sc > a.sc && e.sc < o.sc - 1
            : e.sc < a.sc && e.sc > o.sc + 1,
        ),
        u = s > 0 ? l : [...l].reverse();
      return (u.push(o), { track: c, a, b: o, stops: u });
    }
    startRide(e, t, n) {
      this.ride && this.endRide();
      let r = this.route(e, t, n);
      if (!r) return 0;
      let { track: i, a, b: o, stops: s } = r,
        c = this.services.find((e) => e.track === i);
      if (!c) return 0;
      let l = i.dir > 0 ? a.s1 - 2 : a.s0 + 2,
        u = i.dir > 0 ? o.s1 - 2 : o.s0 + 2,
        d = oX.build(i, l, u, s, {
          vmax: 25,
          acc: 1.25,
          dec: 1.35,
          dwell: 4,
          v0: 0,
          vEnd: 0,
          dwellOf: (e) => (e === o ? 3 : 4),
        });
      for (let e of d.phases) e.t0 += 4;
      (d.phases.unshift({ t0: 0, dur: 4, d0: 0, v0: 0, a: 0, stop: a }),
        (d.T += 4));
      let f = c.slots.length ? this.rideIds() : [];
      return (
        (c.hidden = !0),
        (this.ride = {
          svc: c,
          profile: d,
          t: 0,
          ids: f,
          stops: s,
          hiddenTrack: i,
          drive: null,
        }),
        (this.rideState.active = !0),
        d.T / aX
      );
    }
    startDrive(e, t, n) {
      this.ride && this.endRide();
      let r = this.route(e, t, n);
      if (!r) return null;
      let { track: i, a, stops: o } = r,
        s = this.services.find((e) => e.track === i);
      if (!s) return null;
      let c = i.dir > 0 ? a.s1 - 2 : a.s0 + 2,
        l = new oX(i, c, i.dir),
        u = o[o.length - 1];
      ((l.D = ((i.dir > 0 ? u.s1 - 2 : u.s0 + 2) - c) * i.dir),
        (l.T = 1 / 0),
        l.phases.push({ t0: 0, dur: 1e9, d0: 0, v0: 0, a: 0, stop: a }));
      let d = s.slots.length ? this.rideIds() : [];
      return (
        (s.hidden = !0),
        (this.ride = {
          svc: s,
          profile: l,
          t: 0,
          ids: d,
          stops: o,
          hiddenTrack: i,
          drive: { d: 0, v: 0, stopped: a, next: o[0] ?? null, placed: NaN },
        }),
        (this.rideState.active = !0),
        { track: i, stops: [a, ...o], profile: l }
      );
    }
    setDrive(e, t, n, r) {
      let i = this.ride?.drive;
      i && ((i.d = e), (i.v = t), (i.stopped = n), (i.next = r));
    }
    rideInst = null;
    rideIds() {
      if (!this.rideInst) {
        let e = [];
        for (let t = 0; t < XY.JY.cars; t++) {
          let n = this.geo.get(
              `JY:${t === 0 || t === XY.JY.cars - 1 ? `head` : `mid`}`,
            ),
            r = this.mesh.addInstance(n);
          (r < this.nearGeo.length && (this.nearGeo[r] = n), e.push(r));
        }
        this.rideInst = e;
      }
      for (let e of this.rideInst) this.mesh.setVisibleAt(e, !0);
      return this.rideInst;
    }
    get rideDone() {
      return (
        !!this.ride && !this.ride.drive && this.ride.t >= this.ride.profile.T
      );
    }
    skipRide() {
      this.ride &&
        (this.ride.t = Math.max(this.ride.t, this.ride.profile.T - 1.5));
    }
    endRide() {
      if (this.ride) {
        for (let e of this.ride.ids) this.mesh.setVisibleAt(e, !1);
        ((this.ride.svc.hidden = !1),
          (this.ride = null),
          (this.rideState.active = !1));
      }
    }
    get rideProfile() {
      return this.ride?.profile ?? null;
    }
    get rideStops() {
      return this.ride?.stops ?? [];
    }
    nextTrain(e, t) {
      let n = 1 / 0;
      t && (t.track = null);
      for (let r of this.services) {
        if (r.kind !== `JY`) continue;
        let i = r.profile;
        for (let a of i.phases) {
          if (a.stop !== e) continue;
          let i =
            (((this.t - r.offset - a.t0) % r.headway) + r.headway) % r.headway;
          r.headway - i < n && ((n = r.headway - i), t && (t.track = r.track));
        }
      }
      return n;
    }
    rideHold = null;
    seek(e, t, n = 2) {
      let r = this.services.find((t) => t.id === e),
        i = r?.profile.phases.find((e) => e.stop?.id === t);
      if (!r || !i) return !1;
      let a = Math.ceil((3600 - r.offset - i.t0) / r.headway);
      this.t = this.tPrev = r.offset + a * r.headway + i.t0 + n;
      for (let e of this.services) e.slotD.fill(NaN);
      return !0;
    }
    snapshot() {
      return {
        t: +this.t.toFixed(1),
        visible: this.visibleTrains,
        services: this.services.map((e) => ({
          id: e.id,
          T: Math.round(e.profile.T),
          headway: e.headway,
          slots: e.slots.length,
          alive: Array.from(e.slotTrain).filter((e) => e >= 0).length,
          hidden: e.hidden,
        })),
        ride: this.ride
          ? { t: +this.ride.t.toFixed(1), T: +this.ride.profile.T.toFixed(1) }
          : null,
      };
    }
    prototype() {
      return this.mesh;
    }
  },
  pX = [
    {
      id: `JY`,
      op: `jr`,
      name: { zh: `山手線`, en: `Yamanote Line`, ja: `山手線` },
      color: `#80C241`,
      loop: !0,
      stops: [
        `jy-hamamatsucho`,
        `jy-shimbashi`,
        `jy-yurakucho`,
        `jy-tokyo`,
        `jy-kanda`,
        `jy-akihabara`,
        `jy-okachimachi`,
        `jy-ueno`,
        `jy-shinjuku`,
        `jy-yoyogi`,
        `jy-harajuku`,
        `jy-shibuya`,
      ],
      km: [1.2, 1.1, 0.8, 1.3, 0.7, 1, 0.6, 13.5, 0.7, 1.5, 1.2, 10.9],
    },
    {
      id: `G`,
      op: `metro`,
      name: { zh: `銀座線`, en: `Ginza Line`, ja: `銀座線` },
      color: `#FF9500`,
      stops: [
        `g-shibuya`,
        `g-omotesando`,
        `g-gaiemmae`,
        `g-aoyama-itchome`,
        `g-akasaka-mitsuke`,
        `g-tameike-sanno`,
        `g-toranomon`,
        `g-shimbashi`,
        `g-ginza`,
        `g-kyobashi`,
        `g-nihombashi`,
        `g-mitsukoshimae`,
        `g-kanda`,
        `g-suehirocho`,
        `g-ueno-hirokoji`,
        `g-ueno`,
        `g-inaricho`,
        `g-tawaramachi`,
        `g-asakusa`,
      ],
      km: [
        1.3, 0.7, 0.7, 1.3, 0.9, 0.6, 0.8, 0.9, 0.7, 0.7, 0.6, 0.7, 1.1, 0.8,
        0.5, 0.7, 0.7, 0.8,
      ],
    },
    {
      id: `H`,
      op: `metro`,
      name: { zh: `日比谷線`, en: `Hibiya Line`, ja: `日比谷線` },
      color: `#B5B5AC`,
      stops: [
        `h-roppongi`,
        `h-kamiyacho`,
        `h-toranomon-hills`,
        `h-kasumigaseki`,
        `h-hibiya`,
        `h-ginza`,
        `h-higashi-ginza`,
        `h-tsukiji`,
        `h-hatchobori`,
        `h-kayabacho`,
        `h-ningyocho`,
        `h-kodemmacho`,
        `h-akihabara`,
        `h-naka-okachimachi`,
        `h-ueno`,
      ],
      km: [1.5, 0.8, 0.8, 1.2, 0.4, 0.4, 0.6, 1, 0.5, 0.9, 0.6, 0.9, 1, 0.6],
    },
    {
      id: `M`,
      op: `metro`,
      name: { zh: `丸之內線`, en: `Marunouchi Line`, ja: `丸ノ内線` },
      color: `#F62E36`,
      stops: [
        `m-shinjuku`,
        `m-shinjuku-sanchome`,
        `m-shinjuku-gyoemmae`,
        `m-yotsuya-sanchome`,
        `m-yotsuya`,
        `m-akasaka-mitsuke`,
        `m-kokkai-gijidomae`,
        `m-kasumigaseki`,
        `m-ginza`,
        `m-tokyo`,
        `m-otemachi`,
        `m-awajicho`,
        `m-ochanomizu`,
        `m-hongo-sanchome`,
        `m-korakuen`,
      ],
      km: [0.3, 0.7, 0.9, 1, 1.3, 0.9, 0.7, 1, 1.1, 0.6, 0.9, 0.8, 0.8, 1.8],
    },
  ],
  xje = (e) => {
    let t = Math.ceil(e - 1e-9);
    return t <= 3 ? 150 : t <= 6 ? 170 : t <= 10 ? 200 : t <= 15 ? 210 : 260;
  },
  Sje = (e) =>
    Math.ceil(e - 1e-9) <= 6 ? 180 : Math.ceil(e - 1e-9) <= 11 ? 210 : 260,
  Cje = class {
    at = new Map();
    xfer = new Map();
    stations = new Map();
    constructor(e) {
      for (let t of e) this.stations.set(t.id, t);
      for (let e of pX) {
        e.stops = e.stops.filter((e) => this.stations.has(e));
        for (let t of e.stops) {
          let n = this.at.get(t);
          (n || this.at.set(t, (n = [])), n.push(e));
        }
      }
      let t = (e) => e.name.ja ?? e.name.zh;
      for (let n of e) {
        let r = this.at.get(n.id)?.[0];
        if (!r || r.op !== `metro`) continue;
        let i = e
          .filter(
            (e) =>
              e.id !== n.id &&
              t(e) === t(n) &&
              this.at.get(e.id)?.[0]?.op === `metro`,
          )
          .map((e) => e.id);
        i.length && this.xfer.set(n.id, i);
      }
    }
    opOf(e) {
      return this.at.get(e)?.[0]?.op ?? null;
    }
    linesAt(e) {
      return this.at.get(e) ?? [];
    }
    stationsOf(e) {
      let t = [];
      for (let n of pX)
        if (n.op === e) for (let e of n.stops) t.includes(e) || t.push(e);
      return t;
    }
    jyDir(e, t) {
      let n = pX.find((e) => e.id === `JY`);
      if (!n?.loop) return;
      let r = n.stops.indexOf(e),
        i = n.stops.indexOf(t),
        a = n.stops.length;
      if (r < 0 || i < 0 || r === i) return;
      let o = 0;
      for (let e = r; e !== i; e = (e + 1) % a) o += n.km[e];
      let s = n.km.reduce((e, t) => e + t, 0);
      return o <= s - o ? 1 : -1;
    }
    plan(e, t) {
      let n = this.opOf(e);
      if (!n || n !== this.opOf(t) || e === t) return null;
      let r = new Map([[e, 0]]),
        i = new Map(),
        a = new Set([e]);
      for (; a.size;) {
        let e = ``,
          n = 1 / 0;
        for (let t of a) (r.get(t) ?? 1 / 0) < n && ((n = r.get(t)), (e = t));
        if ((a.delete(e), e === t)) break;
        let o = [];
        for (let t of this.linesAt(e)) {
          let n = t.stops.indexOf(e),
            r = t.stops.length;
          (n > 0
            ? o.push([t.stops[n - 1], t.km[n - 1], t])
            : n === 0 &&
              t.loop &&
              r > 2 &&
              o.push([t.stops[r - 1], t.km[r - 1], t]),
            n >= 0 && n + 1 < r
              ? o.push([t.stops[n + 1], t.km[n], t])
              : n === r - 1 &&
                t.loop &&
                r > 2 &&
                o.push([t.stops[0], t.km[r - 1], t]));
        }
        for (let t of this.xfer.get(e) ?? []) o.push([t, 1.5, null]);
        for (let [t, s] of o) {
          let c = n + s;
          c < (r.get(t) ?? 1 / 0) &&
            (r.set(t, c),
            i.set(t, { id: e, line: o.find((e) => e[0] === t)?.[2] ?? null }),
            a.add(t));
        }
      }
      if (!r.has(t)) return null;
      let o = [];
      for (let n = t; n !== e;) {
        let e = i.get(n);
        (o.unshift({ id: n, line: e.line }), (n = e.id));
      }
      let s = [],
        c = [e],
        l = null,
        u = 0;
      for (let e of o) {
        if (e.line === null) {
          (l && s.push({ line: l, stops: c, km: 0 }), (l = null), (c = [e.id]));
          continue;
        }
        (l &&
          e.line !== l &&
          (s.push({ line: l, stops: c, km: 0 }), (c = [c[c.length - 1]])),
          (l = e.line),
          c.push(e.id));
      }
      l && s.push({ line: l, stops: c, km: 0 });
      for (let e of s) {
        let t = 0;
        for (let n = 1; n < e.stops.length; n++) {
          let r = e.line.stops.indexOf(e.stops[n - 1]),
            i = e.line.stops.indexOf(e.stops[n]),
            a = e.line.stops.length;
          t +=
            (e.line.loop && Math.abs(r - i) === a - 1
              ? e.line.km[a - 1]
              : e.line.km[Math.min(r, i)]) ?? 1;
        }
        ((e.km = t), (u += t));
      }
      let d = s.reduce((e, t) => e + t.stops.length - 1, 0),
        f = Math.max(0, s.length - 1);
      return {
        op: n,
        legs: s,
        km: u,
        fare: n === `jr` ? xje(u) : Sje(u),
        minutes: Math.max(2, Math.round(d * 2 + f * 3)),
        transfers: f,
      };
    }
  },
  wje = [
    [`jy-tokyo`, 10, 5, `東京`, `Tokyo`, `JY01`, `r`],
    [`jy-kanda`, 10, 4.2, `神田`, `Kanda`, `JY02`, `r`],
    [`jy-akihabara`, 10, 3.4, `秋葉原`, `Akihabara`, `JY03`, `r`],
    [`jy-okachimachi`, 10, 2.6, `御徒町`, `Okachimachi`, `JY04`, `r`],
    [`jy-ueno`, 10, 1.8, `上野`, `Ueno`, `JY05`, `r`],
    [`jy06`, 9.75, 1.05, `鶯谷`, `Uguisudani`, `JY06`, `r`],
    [`jy07`, 9.2, 0.45, `日暮里`, `Nippori`, `JY07`, `t`],
    [`jy08`, 8.4, 0.12, `西日暮里`, `Nishi-Nippori`, `JY08`, `t`],
    [`jy09`, 7.5, 0, `田端`, `Tabata`, `JY09`, `t`],
    [`jy10`, 6.25, 0, `駒込`, `Komagome`, `JY10`, `t`],
    [`jy11`, 5, 0, `巣鴨`, `Sugamo`, `JY11`, `t`],
    [`jy12`, 3.75, 0, `大塚`, `Otsuka`, `JY12`, `t`],
    [`jy-ikebukuro`, 2.3, 0.3, `池袋`, `Ikebukuro`, `JY13`, `t`],
    [`jy14`, 1.25, 1.3, `目白`, `Mejiro`, `JY14`, `l`],
    [`jy15`, 0.6, 2.5, `高田馬場`, `Takadanobaba`, `JY15`, `l`],
    [`jy16`, 0.25, 3.75, `新大久保`, `Shin-Okubo`, `JY16`, `l`],
    [`jy-shinjuku`, 0, 5, `新宿`, `Shinjuku`, `JY17`, `l`],
    [`jy-yoyogi`, 0, 6, `代代木`, `Yoyogi`, `JY18`, `l`],
    [`jy-harajuku`, 0.2, 7, `原宿`, `Harajuku`, `JY19`, `l`],
    [`jy-shibuya`, 0.6, 8.2, `澀谷`, `Shibuya`, `JY20`, `l`],
    [`jy21`, 1.7, 9.25, `惠比壽`, `Ebisu`, `JY21`, `b`],
    [`jy22`, 3.4, 9.85, `目黑`, `Meguro`, `JY22`, `b`],
    [`jy23`, 5.1, 10, `五反田`, `Gotanda`, `JY23`, `b`],
    [`jy24`, 6.8, 10, `大崎`, `Osaki`, `JY24`, `b`],
    [`jy25`, 8.6, 9.85, `品川`, `Shinagawa`, `JY25`, `b`],
    [`jy26`, 9.6, 9.1, `高輪Gateway`, `Takanawa Gateway`, `JY26`, `r`],
    [`jy27`, 10, 8.2, `田町`, `Tamachi`, `JY27`, `r`],
    [`jy-hamamatsucho`, 10, 7.4, `濱松町`, `Hamamatsucho`, `JY28`, `r`],
    [`jy-shimbashi`, 10, 6.6, `新橋`, `Shimbashi`, `JY29`, `r`],
    [`jy-yurakucho`, 10, 5.8, `有樂町`, `Yurakucho`, `JY30`, `r`],
  ];
