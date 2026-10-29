// tokyo/assets/region-tokyo-A7LxHjud 03 — math
// Lines 385-961 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var nne = 9,
  Yn = 3e4,
  rne = 15e3,
  ine = 60,
  Xn = (e, t, n) => {
    let r = Math.max(e.minX - t, 0, t - e.maxX),
      i = Math.max(e.minZ - n, 0, n - e.maxZ);
    return Math.sqrt(r * r + i * i);
  },
  Zn = class {
    ctx;
    opts;
    layers = [];
    requests = [];
    builtHooks = [];
    droppedHooks = [];
    arrivalHooks = [];
    motion = { x: NaN, z: NaN, vx: 0, vz: 0 };
    playing = !1;
    lastJump = -1e9;
    camPos = new E();
    evalT = 0;
    dropT = 0;
    running = !1;
    busy = !1;
    wakeFn = null;
    dropping = !1;
    log = [];
    current = null;
    constructor(e, t) {
      ((this.ctx = e),
        (this.opts = t),
        e.events.on(`player:spawned`, () => {
          this.playing = !0;
        }));
    }
    onPackBuilt(e) {
      this.builtHooks.push(e);
    }
    onPackDropped(e) {
      this.droppedHooks.push(e);
    }
    onArrival(e) {
      this.arrivalHooks.push(e);
    }
    addLayer(e) {
      let t = {
        def: e,
        index: this.layers.length,
        units: [],
        byKey: new Map(),
        stats: {
          built: 0,
          builds: 0,
          drops: 0,
          bytes: 0,
          tris: 0,
          colliders: 0,
          buildMsLast: 0,
          buildMsMax: 0,
          buildMsAvg: 0,
          sliceMsMax: 0,
          pipelineMsMax: 0,
          popIns: 0,
          bytesMax: 0,
        },
      };
      for (let n of e.keys) {
        let r = {
          layer: t,
          key: n,
          id: `${this.opts.owner}:${e.name}:${n}`,
          box: e.box(n),
          state: `dormant`,
          content: null,
          far: 0,
          builds: 0,
          failures: 0,
        };
        (t.units.push(r), t.byKey.set(n, r));
      }
      this.layers.push(t);
    }
    pxz = { x: 0, z: 0 };
    ad = { d: 0, urgent: 0, now: 0, req: !1 };
    di = { due: !1, score: 0, req: !1 };
    playerXZ() {
      let e = this.ctx.player?.position;
      return e
        ? ((this.pxz.x = e.x), (this.pxz.z = e.z), this.pxz)
        : this.opts.spawn();
    }
    anchorDist(e, t) {
      let n = t.radius(),
        { x: r, z: i } = this.playerXZ(),
        a = Xn(e, r, i),
        o = a,
        s = a,
        c = this.motion,
        l = Math.hypot(c.vx, c.vz);
      if (l > 2.5) {
        let t = Math.min(l, 90) * nne,
          n = Math.max(1, Math.ceil(t / 60)),
          a = c.vx / l,
          u = c.vz / l;
        for (let c = 1; c <= n; c++) {
          let l = (t * c) / n,
            d = Xn(e, r + a * l, i + u * l);
          d < o && (o = d);
          let f = d + l * 0.5;
          f < s && (s = f);
        }
      }
      let u = this.camPos.setFromMatrixPosition(this.ctx.camera.matrixWorld);
      if (Math.abs(u.x - r) + Math.abs(u.z - i) > 40) {
        let t = Xn(e, u.x, u.z);
        (t < o && (o = t), t < s && (s = t));
      }
      if (!this.playing) {
        let t = this.opts.spawn(),
          n = Xn(e, t.x, t.z);
        (n < o && (o = n), n < s && (s = n));
      }
      let d = !1;
      for (let r of this.requests) {
        let i = r.r ?? this.opts.requestRadius?.(t) ?? n,
          a = Xn(e, r.x, r.z);
        !r.doneAt && a <= i && (d = !0);
        let s = a - i + n;
        s < o && (o = s);
      }
      let f = this.ad;
      return ((f.d = o), (f.urgent = s), (f.now = a), (f.req = d), f);
    }
    update(e) {
      let { x: t, z: n } = this.playerXZ(),
        r = this.motion;
      if (Number.isFinite(r.x) && e > 0) {
        let i = t - r.x,
          a = n - r.z;
        if (Math.abs(i) + Math.abs(a) > ine) {
          if (
            ((r.vx = r.vz = 0),
            (this.lastJump = performance.now()),
            this.wake(),
            this.playing && this.running && this.unbuiltNear(t, n, 150))
          )
            for (let e of this.arrivalHooks)
              try {
                e(t, n, 150);
              } catch (e) {
                console.warn(`[residency] arrival hook failed`, e);
              }
        } else {
          let t = Math.min(1, e * 2.5);
          ((r.vx += (i / e - r.vx) * t), (r.vz += (a / e - r.vz) * t));
        }
      }
      ((r.x = t),
        (r.z = n),
        (this.evalT -= e) <= 0 &&
          ((this.evalT = 0.25),
          this.settleRequests(),
          this.running && !this.busy && this.nextDue() && this.wake()),
        (this.dropT -= e) <= 0 && ((this.dropT = 0.5), this.checkDrops(0.5)));
    }
    get speed() {
      return Math.hypot(this.motion.vx, this.motion.vz);
    }
    dueInfo(e) {
      let t = e.layer.def,
        n = t.radius(),
        r = this.anchorDist(e.box, t),
        i = this.di;
      if (((i.due = !1), (i.score = 1 / 0), (i.req = !1), r.d > n)) return i;
      let a = t.lookaheadMaxSpeed ?? 0;
      if (a > 0 && !r.req && this.speed > a && r.now > n) return i;
      let o = this.ctx.camera.matrixWorld.elements,
        s = -o[8],
        c = -o[10],
        l = Math.hypot(s, c) || 1;
      ((s /= l), (c /= l));
      let { x: u, z: d } = this.playerXZ(),
        f = (e.box.minX + e.box.maxX) / 2 - u,
        p = (e.box.minZ + e.box.maxZ) / 2 - d,
        m = Math.hypot(f, p) || 1,
        h = r.urgent > 1 ? (f * s + p * c) / m : 0;
      return (
        (i.due = !0),
        (i.score =
          (r.req ? -1e6 : 0) + (r.urgent * (1 - 0.35 * h)) / Math.max(1, n)),
        (i.req = r.req),
        i
      );
    }
    nextDue() {
      let e = null,
        t = 1 / 0;
      for (let n of this.layers)
        for (let r of n.units) {
          if (r.state !== `dormant`) continue;
          let n = this.dueInfo(r);
          n.due && n.score < t && ((t = n.score), (e = r));
        }
      return e;
    }
    satisfied(e) {
      for (let t of this.layers) {
        let n = e.r ?? this.opts.requestRadius?.(t.def) ?? t.def.radius();
        for (let r of t.units)
          if (r.state !== `built` && Xn(r.box, e.x, e.z) <= n) return !1;
      }
      return !0;
    }
    settleRequests() {
      let e = performance.now();
      for (let t = this.requests.length - 1; t >= 0; t--) {
        let n = this.requests[t];
        if (n.doneAt) e - n.doneAt > rne && this.requests.splice(t, 1);
        else {
          let t = e - n.t0 > Yn;
          (t || this.satisfied(n)) &&
            (t &&
              console.warn(
                `[residency] ${this.opts.owner} ensureResident(${Math.round(n.x)}, ${Math.round(n.z)}) still building after ${Yn / 1e3} s — continuing`,
              ),
            (n.doneAt = e),
            n.resolve());
        }
      }
    }
    ensureResident(e, t, n) {
      return !Number.isFinite(e) || !Number.isFinite(t)
        ? Promise.resolve()
        : new Promise((r) => {
            let i = {
              x: e,
              z: t,
              r: n !== void 0 && n >= 0 ? n : void 0,
              t0: performance.now(),
              doneAt: 0,
              resolve: r,
            };
            if ((this.requests.push(i), this.satisfied(i))) {
              ((i.doneAt = performance.now()), r());
              return;
            }
            (this.wake(),
              setTimeout(() => {
                i.doneAt || ((i.doneAt = performance.now()), r());
              }, 31e3));
          });
    }
    unbuiltNear(e, t, n) {
      for (let r of this.layers)
        for (let i of r.units)
          if (i.state !== `built` && Xn(i.box, e, t) <= n) return !0;
      return !1;
    }
    wake() {
      let e = this.wakeFn;
      ((this.wakeFn = null), e?.());
    }
    idle(e) {
      return new Promise((t) => {
        let n = () => {
            (clearTimeout(r), this.wakeFn === n && (this.wakeFn = null), t());
          },
          r = setTimeout(n, e);
        this.wakeFn = n;
      });
    }
    start() {
      this.running || ((this.running = !0), this.loop());
    }
    async loop() {
      let e = this.ctx.work;
      for (;;) {
        this.settleRequests();
        let t = this.nextDue();
        if (!t) {
          await this.idle(400);
          continue;
        }
        if (
          (performance.now() - this.lastJump < 4e3 && (await this.dropFarNow()),
          await e.nextFrame(),
          t.state === `dormant` && this.dueInfo(t).due)
        ) {
          this.busy = !0;
          try {
            await this.buildUnit(t, !0);
          } catch (e) {
            (console.warn(`[residency] ${t.id} build failed`, e),
              (t.state = ++t.failures >= 3 ? `built` : `dormant`));
          } finally {
            ((this.busy = !1), (this.current = null));
          }
          this.settleRequests();
        }
      }
    }
    note(e) {
      (this.log.push(`${(performance.now() / 1e3).toFixed(1)}s ${e}`),
        this.log.length > 80 && this.log.shift());
    }
    async buildUnit(e, t) {
      let n = this.ctx,
        r = e.layer.stats;
      ((e.state = `building`), (this.current = e.id));
      let i = e.layer.def.build(e.key),
        a = 0,
        o = 0,
        s = 0,
        c;
      for (;;) {
        let e = performance.now();
        c = i.next();
        let r = performance.now() - e;
        if (((a += r), (s += r), r > o && (o = r), c.done)) break;
        t
          ? n.work.shouldYield() && (await n.work.yield())
          : s > 12 && ((s = 0), await n.yieldFrame());
      }
      let l = c.value;
      (e.builds++,
        r.builds++,
        (r.buildMsLast = a),
        (r.buildMsMax = Math.max(r.buildMsMax, a)),
        (r.buildMsAvg += (a - r.buildMsAvg) * (r.builds === 1 ? 1 : 0.1)),
        (r.sliceMsMax = Math.max(r.sliceMsMax, o)));
      let u = performance.now();
      if (l) {
        let r = l.roots ?? [],
          i = `${this.opts.owner}-${e.layer.def.name}`;
        for (let e of r)
          ((e.userData.owner = i), t && n.renderer.hold([e]), n.scene.add(e));
        if (t && r.length) {
          for (let t of this.builtHooks)
            try {
              await t({ id: e.id, quiet: !0 }, r);
            } catch (t) {
              console.warn(`[residency] ${e.id} pipeline failed`, t);
            }
          n.renderer.unhold(r);
        }
        l.upload && (t && (await n.work.nextFrame()), l.upload());
      }
      let d = performance.now() - u;
      if (
        (t && (r.pipelineMsMax = Math.max(r.pipelineMsMax, d)),
        (e.content = l),
        (e.state = `built`),
        (e.far = 0),
        r.built++,
        l)
      ) {
        ((r.bytes += l.bytes),
          (r.tris += l.tris),
          (r.colliders += l.colliders),
          (r.bytesMax = Math.max(r.bytesMax, l.bytes)));
        try {
          e.layer.def.shown?.(e.key, l);
        } catch (t) {
          console.warn(`[residency] ${e.id} shown failed`, t);
        }
      }
      if (t && this.playing) {
        let t = this.opts.popRadius?.(e.layer.def) ?? 0,
          { x: n, z: i } = this.playerXZ();
        t > 0 &&
          Xn(e.box, n, i) < t &&
          (r.popIns++,
          this.ctx.params.has(`debug`) &&
            console.info(
              `[residency] pop-in ${e.id} at ${Math.round(Xn(e.box, n, i))} m`,
            ));
      }
      this.note(
        `built ${e.id}${e.builds > 1 ? ` (rebuild ${e.builds - 1})` : ``}: ${a.toFixed(1)} ms (longest step ${o.toFixed(1)} ms), ready +${d.toFixed(0)} ms, ${((l?.bytes ?? 0) / 1048576).toFixed(2)} MB, ${l?.tris ?? 0} tris, ${l?.colliders ?? 0} colliders`,
      );
    }
    async buildNow(e, t, n, r) {
      let i = [];
      for (let n of this.layers) {
        if (r && !r.includes(n.def.name)) continue;
        let a = n.def.radius();
        for (let r of n.units)
          r.state === `dormant` && Xn(r.box, e, t) <= a && i.push(r);
      }
      i.sort(
        (n, r) =>
          Xn(n.box, e, t) / n.layer.def.radius() -
          Xn(r.box, e, t) / r.layer.def.radius(),
      );
      for (let e = 0; e < i.length; e++)
        (await this.buildUnit(i[e], !1), n?.((e + 1) / i.length));
      this.current = null;
    }
    checkDrops(e) {
      if (this.dropping) return;
      let t = null,
        n = 0;
      for (let r of this.layers) {
        let i = r.def.radius() + r.def.dropMargin;
        for (let a of r.units)
          if (a.state === `built`) {
            if (this.anchorDist(a.box, r.def).d <= i) {
              a.far = 0;
              continue;
            }
            ((a.far += e),
              a.far >= r.def.dropAfterS && a.far > n && ((n = a.far), (t = a)));
          }
      }
      t && this.dropUnit(t, `far`);
    }
    async dropFarNow() {
      for (let e of this.layers) {
        let t = e.def.radius() + e.def.dropMargin;
        for (let n of e.units)
          n.state === `built` &&
            this.anchorDist(n.box, e.def).d > t &&
            (await this.dropUnit(n, `jump`));
      }
    }
    async dropUnit(e, t = `debug`) {
      if (e.state !== `built` || this.dropping) return;
      ((this.dropping = !0), (e.state = `dropping`));
      let n = performance.now(),
        r = e.layer.stats,
        i = e.content,
        a = new Set();
      try {
        if (i) {
          try {
            e.layer.def.dropped?.(e.key, i);
          } catch (t) {
            console.warn(`[residency] ${e.id} dropped hook failed`, t);
          }
          for (let e of i.roots ?? [])
            (e.parent?.remove(e),
              this.ctx.renderer.unhold([e]),
              e.traverse((e) => {
                let t = e.geometry;
                t && a.add(t);
              }));
          for (let t of a) (t.dispose(), (t.userData.__tgtaDropped = e.id));
          (i.statics && this.ctx.statics.removeGroup(i.statics),
            (r.bytes -= i.bytes),
            (r.tris -= i.tris),
            (r.colliders -= i.colliders));
        }
        for (let t of this.droppedHooks)
          try {
            t(
              { id: e.id },
              { geometries: a, textures: new Set(), materials: new Set() },
            );
          } catch (e) {
            console.warn(`[residency] onPackDropped hook failed`, e);
          }
      } finally {
        ((e.content = null),
          (e.state = `dormant`),
          (e.far = 0),
          r.built--,
          r.drops++,
          (this.dropping = !1),
          this.note(
            `dropped ${e.id} (${t}) in ${(performance.now() - n).toFixed(1)} ms`,
          ),
          xe(`drop ${e.id}`));
      }
    }
    state(e = !1) {
      let t = {};
      for (let n of this.layers)
        for (let r of n.units)
          (e || r.state !== `dormant`) && (t[r.id] = r.state);
      return t;
    }
    stats() {
      let e = {};
      for (let t of this.layers) {
        let n = 0,
          r = 0;
        for (let e of t.units) e.state === `dormant` ? r++ : n++;
        let i = t.stats;
        e[t.def.name] = {
          ...i,
          resident: n,
          dormant: r,
          mb: +(i.bytes / 1048576).toFixed(2),
          radius: Math.round(t.def.radius()),
          buildMsLast: +i.buildMsLast.toFixed(2),
          buildMsMax: +i.buildMsMax.toFixed(2),
          buildMsAvg: +i.buildMsAvg.toFixed(2),
          sliceMsMax: +i.sliceMsMax.toFixed(2),
          pipelineMsMax: Math.round(i.pipelineMsMax),
        };
      }
      return e;
    }
    anchors() {
      let { x: e, z: t } = this.playerXZ();
      return {
        player: [Math.round(e), Math.round(t)],
        velocity: [+this.motion.vx.toFixed(1), +this.motion.vz.toFixed(1)],
        playing: this.playing,
        requests: this.requests.map((e) => ({
          x: Math.round(e.x),
          z: Math.round(e.z),
          r: e.r,
          done: !!e.doneAt,
        })),
        building: this.current,
      };
    }
    unit(e) {
      for (let t of this.layers)
        for (let n of t.units) if (n.id === e) return n;
    }
    isBuilt(e, t) {
      return (
        this.layers.find((t) => t.def.name === e)?.byKey.get(t)?.state ===
        `built`
      );
    }
  },
  Qn = class {
    capacity;
    free = [];
    used = 0;
    constructor(e) {
      ((this.capacity = e), this.free.push(0, e));
    }
    alloc(e) {
      if (e <= 0) return 0;
      let t = this.free;
      for (let n = 0; n < t.length; n += 2) {
        if (t[n + 1] < e) continue;
        let r = t[n];
        return (
          t[n + 1] === e ? t.splice(n, 2) : ((t[n] += e), (t[n + 1] -= e)),
          (this.used += e),
          r
        );
      }
      return -1;
    }
    release(e, t) {
      if (t <= 0) return;
      this.used -= t;
      let n = this.free,
        r = 0;
      for (; r < n.length && n[r] < e;) r += 2;
      (n.splice(r, 0, e, t),
        r + 2 < n.length &&
          n[r] + n[r + 1] === n[r + 2] &&
          n.splice(r + 1, 3, n[r + 1] + n[r + 3]),
        r >= 2 &&
          n[r - 2] + n[r - 1] === n[r] &&
          n.splice(r - 1, 3, n[r - 1] + n[r + 1]));
    }
    get largest() {
      let e = 0;
      for (let t = 1; t < this.free.length; t += 2)
        this.free[t] > e && (e = this.free[t]);
      return e;
    }
  },
  $n =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`tightpool`) !== `0`,
  er = new p(),
  tr = new k();
