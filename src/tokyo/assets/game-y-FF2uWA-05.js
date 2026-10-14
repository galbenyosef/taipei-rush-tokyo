// tokyo/assets/game-y-FF2uWA 05 — ctx
// Lines 1145-2560 of readable/tokyo/assets/game-y-FF2uWA.pretty.js (statement-aligned).
var ct = new Set([
    `player`,
    `vehicles`,
    `traffic`,
    `peds`,
    `police`,
    `missions`,
    `camera`,
  ]),
  H = 0.1,
  lt = class e {
    onLoading;
    region;
    ctx;
    systems = [];
    last = 0;
    pacer;
    pausedRenderRevision = -1;
    perf;
    running = !1;
    frameTimes = new Float32Array(120);
    frameIdx = 0;
    edges = null;
    playing = !1;
    hold = !1;
    arrivalHold = !1;
    overlay;
    gpuMem;
    lost = !1;
    sched = new oe();
    frameCpu = 8;
    timings;
    timingFrames = 0;
    sysMs;
    simMask = new Uint8Array();
    titleAcc = H;
    loadFrac = 0;
    loadBase = 0;
    loadSpan = 0;
    loadKey = ``;
    loadDone = !1;
    constructor(e, t, r) {
      ((this.onLoading = t), (this.region = r));
      let i = new URLSearchParams(location.search),
        a = new me(),
        o = new Te(a),
        s = i.get(`fps`);
      ((this.fpsMode =
        s === null ? (o.settings.frameRate === `30` ? `30` : `60`) : `param`),
        (this.pacer = new he(s === null ? this.fpsMode : s)),
        o.mountRegion(r.identity.regionId, r.currency));
      let l = i.get(`quality`),
        u = o.settings.quality,
        d = l && A[l] ? l : u !== `auto` && A[u] ? u : de(),
        f = v() || null;
      !l && f && A[f] && V.indexOf(f) < V.indexOf(d) && (d = f);
      let p = fe(d),
        m = i.get(`lowmem`);
      ee(p.mobile ? Ee() : 0, m === null ? null : Number(m) || 0);
      let h = m === null ? (!l && p.mobile ? y() : 0) : y();
      (h && Object.assign(p, st(p, h)),
        h >= 2 && !i.has(`pedavatars`) && i.set(`pedavatars`, `0`));
      let b;
      try {
        b = new le(e, p);
      } catch (e) {
        throw ve(e, o.lang === `en` ? `en` : `zh`, !!p.mobile);
      }
      let x = r.createPlan(),
        S = new Se(b.canvas),
        C = new xe();
      ((S.sensitivity = o.settings.sensitivity),
        (S.invertY = o.settings.invertY),
        (this.overlay = new Ye(
          () => o.lang,
          (e) => (o.lang === `ja` ? n(e) : e.zh),
        )),
        (this.gpuMem = new se(b.scene, p.maxTextureSize, {
          uniformsOf: (e) => b.gl.properties.get(e).uniforms,
          uploaded: (e) => b.gl.properties.get(e).__version === e.version,
        })));
      let w = {
        renderer: b,
        work: this.sched,
        scene: b.scene,
        camera: b.camera,
        input: S,
        events: a,
        quality: p,
        statics: C,
        dynamics: new we(),
        plan: x,
        signals: r.createSignals(x),
        region: ht(r),
        state: o,
        money: be(o, r.currency),
        time: {
          elapsed: 0,
          real: 0,
          frame: 0,
          dt: 0,
          day: 0,
          weekday: 0,
          date: { y: 2026, m: 1, d: 1 },
        },
        paused: !1,
        timeScale: 1,
        params: i,
        loading: (e, t) => this.subProgress(e, t),
        yieldFrame: q,
        groundAt: (e, t, n = 1 / 0, r = 0.45) => {
          let i = x.groundHeight(e, t),
            a = C.floorAt(e, t, n, r);
          return a > i ? a : i;
        },
        t: (e) =>
          o.lang === `ja`
            ? n(e)
            : typeof e == `string`
              ? e
              : (e[o.lang] ?? e.zh),
      };
      ((w.setQuality = (e) => this.applyQuality(e)),
        (w.setPaused = (e) => {
          w.paused !== e &&
            ((w.paused = e),
            (this.pausedRenderRevision = -1),
            a.emit(`game:pause`, { paused: e }));
        }),
        (this.ctx = w),
        (b.frameCapMs = this.pacer.intervalMs),
        (b.targetMs = Math.max(1e3 / 60, this.pacer.intervalMs)),
        this.initCalendar(),
        (this.systems = r.createSystems(w)),
        (this.timings = this.systems.map((e) => ({
          name: e.name,
          avg: 0,
          max: 0,
          total: 0,
        }))),
        (this.sysMs = new Float64Array(this.systems.length)),
        (this.simMask = Uint8Array.from(this.systems, (e) =>
          ct.has(e.name) && i.get(`titlesim`) !== `0` ? 1 : 0,
        )),
        (this.perf = new Oe(
          w,
          i.has(`debug`) || o.settings.showFps,
          this.timings,
        )),
        je(w, (e) => this.ownerOf(e)),
        a.on(`settings:changed`, ({ key: e, value: t }) => {
          (e === `sensitivity` && (S.sensitivity = t),
            e === `invertY` && (S.invertY = t),
            e === `showFps` && this.perf.setVisible(t),
            e === `frameRate` &&
              this.setFrameRateMode(t === `30` ? `30` : `60`));
        }),
        a.on(`game:pause`, ({ paused: e }) => b.suspendAdapt(e ? 1 : 1.5)),
        a.on(`player:respawned`, () => b.suspendAdapt(2)),
        a.on(`mrt:travel`, () => b.suspendAdapt(2)),
        this.trackStats(),
        o.onBeforeSave(() => {
          if (!this.playing || o.resetting || w.params.has(`hour`)) return;
          let e = w.env?.hour;
          typeof e == `number` &&
            Number.isFinite(e) &&
            (o.data.hour = Math.round(e * 100) / 100);
        }));
      let T = () => {
        this.playing && !o.resetting && o.saveNow();
      };
      (window.addEventListener(`pagehide`, T),
        document.addEventListener(`visibilitychange`, () => {
          document.visibilityState === `hidden` ? T() : b.suspendAdapt(1.5);
        }),
        (b.isStaticRoot = (e) => this.gpuMem.isStaticRoot(e)),
        (b.onCpuBound = (e) => {
          (a.emit(`perf:cpuBound`, {
            bound: e,
            cpuMs: +b.cpuMs.toFixed(2),
            gpuMs: +b.gpuMs.toFixed(2),
          }),
            i.has(`debug`) &&
              console.info(
                `[perf] cpu-bound ${e ? `ON` : `off`} (cpu ${b.cpuMs.toFixed(1)} ms, gpu ${b.gpuMs.toFixed(1)} ms)`,
              ));
        }),
        (b.onContextLost = () => this.onContextLost()),
        (b.onContextRestored = () => this.reloadWhenVisible(1500)),
        (b.onGpuOom = () => {
          p.mobile && (E(1), _(k, String(Date.now())));
        }),
        (window.__game = w),
        (window.__systems = {
          list: () =>
            this.timings.map((e) => ({
              ...e,
              avg: +e.avg.toFixed(3),
              max: +e.max.toFixed(2),
              total: +e.total.toFixed(1),
            })),
          frames: () => this.timingFrames,
          reset: () => {
            for (let e of this.timings) ((e.max = 0), (e.total = 0));
            this.timingFrames = 0;
          },
        }),
        (window.THREE = c),
        (window.__gpuMemory = this.gpuMem),
        (window.__work = this.sched),
        (window.__lazyUploads = this.lazyStats),
        (window.__deviceMemo = g),
        (window.__core = {
          cityMaterial: ge,
          GeoWriter: ne,
          flags: {
            NIGHT: 1,
            WINDOW_MASK: 2,
            FLICKER: 4,
            SCROLL: 8,
            RANDOM_LIT: 32,
            DRY: 16,
          },
        }));
    }
    ownerOf(e) {
      return e.userData?.owner
        ? String(e.userData.owner)
        : (this.systems.find((e) => e.name === `districts`)?.packOf?.(e) ??
            this.gpuMem.ownerOf(e) ??
            `unowned`);
    }
    progress(e, t, n, r) {
      ((t = Math.min(1, Math.max(this.loadFrac, t))),
        (this.loadFrac = t),
        this.onLoading(e, t, n, r));
    }
    subProgress(e, t) {
      if (this.loadDone) return;
      let n = Math.min(1, Math.max(0, Number.isFinite(t) ? t : 0)),
        r = typeof e == `string` ? e.replace(/^[a-z-]+:\s*/i, ``) : void 0;
      this.progress(
        this.loadKey || `loading`,
        this.loadBase + this.loadSpan * n,
        r,
        n,
      );
    }
    async init() {
      U(`init`);
      let e = this.ctx,
        t = this.systems.length,
        n = 0;
      for (let e of this.systems) n += ot[e.name] ?? 1;
      let r = 0,
        i = this.gpuMem;
      i.trackDetached(!0);
      for (let a = 0; a < t; a++) {
        let t = this.systems[a],
          o = ot[t.name] ?? 1;
        ((this.loadKey = t.name),
          (this.loadBase = (r / n) * B),
          (this.loadSpan = (o / n) * B),
          this.progress(t.name, this.loadBase, void 0, 0));
        let s = performance.now();
        try {
          await t.init?.(e);
        } catch (e) {
          if ((console.error(`[init] ${t.name} failed`, e), R(t.name)))
            throw Je(`init`, t.name, e);
        }
        let c = this.earlyRelease
          ? new Set(e.scene.children.filter((e) => i.ownerOf(e) !== void 0))
          : null;
        (i.claim(t.name),
          c &&
            (await this.releaseEarly(
              t.name,
              e.scene.children.filter((e) => !c.has(e)),
            )),
          U(t.name));
        let l = performance.now() - s;
        (l > 50 && console.info(`[init] ${t.name} ${l.toFixed(0)}ms`),
          (r += o),
          this.progress(t.name, this.loadBase + this.loadSpan, void 0, 1),
          await q());
      }
      ((this.loadKey = `shaders`),
        this.progress(`shaders`, B, void 0, 0),
        await q());
      for (let t of this.systems) {
        let n = performance.now();
        try {
          t.start?.(e);
        } catch (e) {
          if ((console.error(`[start] ${t.name} failed`, e), R(t.name)))
            throw Je(`start`, t.name, e);
        }
        i.claim(t.name);
        let r = performance.now() - n;
        r > 30 && console.info(`[init] start:${t.name} ${r.toFixed(0)}ms`);
      }
      let a = e.state.data.hour;
      if (!e.params.has(`hour`) && typeof a == `number` && Number.isFinite(a))
        try {
          e.env.setHour(a);
        } catch {}
      ((this.lastHour = this.envHour()), U(`start`));
      try {
        this.edges = this.region.createWorldBoundary(e);
      } catch (e) {
        console.error(`[init] world edges failed`, e);
      }
      try {
        let t = new Map();
        for (let n of e.scene.children) {
          let e = this.ownerOf(n),
            r = t.get(e);
          (r || t.set(e, (r = [])), r.push(n));
        }
        for (let [e, n] of t) ce(n, e);
      } catch (e) {
        console.warn(`[init] material fixes failed`, e);
      }
      let o = this.farLayer();
      try {
        i.prepare(o ? [o.scene] : []);
      } catch (e) {
        console.warn(`[init] gpu memory prepare failed`, e);
      }
      U(`prepare`);
      let s = performance.now();
      try {
        await this.warmShaders(0.6);
      } catch (e) {
        console.warn(`[init] shader warm-up failed`, e);
      }
      (console.info(
        `[init] shaders ${(performance.now() - s).toFixed(0)}ms, programs ${e.renderer.gl.info.programs?.length ?? `?`} · ${e.renderer.warmLog}`,
      ),
        U(`ready`),
        this.progress(`ready`, 1, void 0, 1),
        (this.loadDone = !0),
        e.renderer.suspendAdapt(3),
        (e.renderer.programsAtReady = e.renderer.gl.info.programs?.length ?? 0),
        (e.yieldFrame = () => this.sched.yield()),
        ne.releaseScratch(),
        e.events.emit(`game:ready`),
        e.params.get(`cheats`) === `1` && et(e));
      let c = Number(e.params.get(`far`));
      (c > 0 &&
        ((e.camera.far = c),
        e.camera.updateProjectionMatrix(),
        (e.scene.fog = null),
        (e.__noFog = !0)),
        this.afterReady());
    }
    earlyRelease = new URLSearchParams(location.search).get(`earlyrel`) !== `0`;
    static EARLY = new Set([
      `streets`,
      `buildings`,
      `landmarks`,
      `culture`,
      `transit`,
    ]);
    async releaseEarly(t, n) {
      if (!e.EARLY.has(t) || !n.length) return;
      let r = this.gpuMem,
        i = this.ctx.renderer,
        o = this.ctx.quality;
      try {
        r.prepare([], n, { clamp: !1 });
        let e = null;
        if (o.mobile) {
          let t = this.spawnPoint();
          e = { x: t.x, z: t.z, r: o.drawDistance * 1.25 };
        }
        let t = new a(),
          s = [],
          c = new Set();
        for (let r of n)
          r.traverse((n) => {
            let r = n;
            if (
              !r.isMesh ||
              !r.geometry ||
              c.has(r.geometry) ||
              r.isSkinnedMesh ||
              r.isBatchedMesh
            )
              return;
            c.add(r.geometry);
            let i = r.geometry.attributes.position;
            i &&
              !i.__gpu &&
              i.count > 0 &&
              ((e &&
                r.geometry.boundingSphere &&
                (r.updateWorldMatrix(!0, !1),
                t.copy(r.geometry.boundingSphere).applyMatrix4(r.matrixWorld),
                Math.hypot(t.center.x - e.x, t.center.z - e.z) - t.radius >
                  e.r)) ||
                s.push(r));
          });
        let l = [],
          u = 0;
        for (let e = 0; e <= s.length; e++) {
          let t = s[e];
          (t && (l.push(t), (u += G(t.geometry))),
            ((!t && l.length) || u > 8 << 20) &&
              (i.uploadDraw(l), (l = []), (u = 0), await q()));
        }
      } catch (e) {
        console.warn(`[gpuMem] early release failed`, e);
      }
    }
    spawnPoint() {
      let e = this.ctx,
        t = e.params.get(`spawn`);
      if (t) {
        let [e, n] = t.split(`,`).map(Number);
        if (Number.isFinite(e) && Number.isFinite(n)) return { x: e, z: n };
      }
      let n = e.state.data.pos;
      return n && Number.isFinite(n.x) && Number.isFinite(n.z)
        ? { x: n.x, z: n.z }
        : e.plan.spawns.start;
    }
    farLayer() {
      let e = this.ctx.env?._debug?.far;
      return e?.scene && e.camera ? { scene: e.scene, camera: e.camera } : null;
    }
    static LATE_PREWARM = new Set([
      `police`,
      `missions`,
      `culture`,
      `districts`,
    ]);
    lateProtos = [];
    async warmShaders(t) {
      let n = this.ctx,
        r = this.farLayer(),
        i = [],
        a =
          !this.loadDone &&
          n.quality.mobile &&
          n.params.get(`lateprewarm`) !== `0`;
      for (let t of this.systems)
        try {
          let r = t.prewarm?.(n),
            o = a && e.LATE_PREWARM.has(t.name) ? this.lateProtos : i;
          if (r) for (let e of r) e && e.isObject3D && o.push(e);
        } catch (e) {
          console.warn(`[init] ${t.name} prewarm failed`, e);
        }
      let o = this.gpuMem.peekDetached();
      try {
        (await n.renderer.compileAll(r ? [r] : [], i, q),
          o.length && (await n.renderer.compileRoots(o, q)),
          this.loadDone || U(`compiled`),
          this.loadDone ||
            this.progress(`shaders`, B + 0.09999999999999998 * t, void 0, t));
        try {
          this.gpuMem.prepare(r ? [r.scene] : []);
        } catch (e) {
          console.warn(`[gpuMem] prepare failed`, e);
        }
        (await q(), n.camera.updateMatrixWorld());
        let e = n.player?.position;
        (n.renderer.warmFrames(
          e ? new l(e.x, e.y, e.z) : n.camera.position.clone(),
        ),
          o.length && n.renderer.warmCastersNow(o),
          this.loadDone || U(`warmFrames`));
      } finally {
        n.renderer.endPrewarm();
      }
    }
    afterReady() {
      let t = this.ctx,
        n = this.gpuMem,
        r = this.sched,
        i = t.renderer,
        a = this.systems.find((e) => e.name === `districts`);
      a?.onPackStart?.(() => n.trackDetached(!0));
      let o = this.systems.filter(
          (e) => e !== a && typeof e.onPackBuilt == `function`,
        ),
        s = (e, t) => {
          (n.forget(t), b(`drop ${e.id}`));
        };
      a?.onPackDropped?.(s);
      for (let e of o) e.onPackDropped(s);
      a?.onArrival?.((e, t, n) => void this.guardArrival(e, t, n));
      let c = async (a, o) => {
        let s = performance.now(),
          c = s,
          l = 0,
          u = `prepare`,
          f = async (e) => {
            ((l = Math.max(l, performance.now() - c)),
              m.on && m.seg(`${a.id}:${u}`, c),
              await e,
              (c = performance.now()));
          };
        (this.pipelines++,
          i.hold(o),
          n.claim(`districts`, o),
          n.claim(`start`));
        let p = {
            compileMs: 0,
            depth: 0,
            tex: 0,
            texMB: 0,
            bands: 0,
            settleMs: 0,
            firstReadMs: 0,
            geoMB: 0,
            lazyMB: 0,
            relMB: 0,
          },
          h = T.geoMB + T.texMB,
          g = [];
        try {
          let c = async (e) => {
            try {
              let t = n.prepareSteps([], e);
              for (;;) {
                let e = t.next();
                if (e.done) {
                  g.push(...e.value);
                  return;
                }
                r.shouldYield() && (await f(r.nextFrame()));
              }
            } catch (e) {
              console.warn(`[gpuMem] prepare failed`, e);
            }
          };
          for (let e of o) (await c([e]), await f(r.yield()));
          try {
            ce(o, a.id);
          } catch (e) {
            console.warn(`[materials] fix failed`, e);
          }
          let l = performance.now();
          u = `compile`;
          let m = g.length ? [...o, ...g.filter((e) => !e.parent)] : o;
          (await i.compileRoots(
            m,
            () => f(r.yield()),
            () => r.shouldYield(),
          ),
            (u = `depth`),
            (p.depth = await i.warmShadowCasters(m, () => f(r.nextFrame()))),
            (p.compileMs = Math.round(performance.now() - l)),
            (u = `prepare2`),
            await c(o));
          let _ = g.length ? [...o, ...g.filter((e) => !e.parent)] : o,
            v = async () => {
              let t = 0;
              u = `tex`;
              for (let n of i.texturesOf(_)) {
                if (this.lost) return;
                if (
                  (n.image?.__tgtaDropped &&
                    t++ === 0 &&
                    console.warn(
                      `[districts] ${a.id} rebuilt with a texture whose canvas was released when it was dropped ('${n.name}') — build it again after unload()`,
                    ),
                  i.isUploaded(n))
                )
                  continue;
                let o = D && dt(n.image);
                if (o) {
                  let t = e.settleMs - (performance.now() - s);
                  t > 0 &&
                    ((p.settleMs += Math.round(t)),
                    await f(new Promise((e) => setTimeout(e, t))));
                }
                if ((await f(r.nextFrame()), this.lost)) return;
                let c = d(n) / 1048576,
                  l = -1,
                  u = i.uploadBands(n, {
                    bandBytes: () => this.uploadBudget(),
                    onBand: (e, t) => e === 0 && (l = t),
                  });
                for (;;) {
                  let e = performance.now(),
                    t = u.next();
                  if ((this.uploaded(), t.done)) {
                    (t.value !== `skip` && (p.tex++, (p.texMB += c)),
                      t.value === `whole` && o && (l = performance.now() - e));
                    break;
                  }
                  if ((p.bands++, await f(r.nextFrame()), this.lost)) return;
                }
                o &&
                  l >= 0 &&
                  ((p.firstReadMs = Math.max(p.firstReadMs, Math.round(l))),
                  (e.settleMs =
                    l > 12
                      ? Math.min(3e3, e.settleMs * 1.5 + 100)
                      : l < 4
                        ? Math.max(150, e.settleMs * 0.85)
                        : e.settleMs));
              }
            },
            y = async () => {
              u = `geo`;
              let e = [],
                n = new Set(),
                r = 0,
                i =
                  t.quality.mobile && this.lazyOn
                    ? t.quality.drawDistance * 1.25
                    : 0,
                o = i ? this.uploadAnchors() : [];
              for (let t of _)
                t.traverse((t) => {
                  let s = t;
                  if (!s.isMesh || !s.geometry || n.has(s.geometry)) return;
                  let c = s.geometry.attributes.position;
                  (s.geometry.userData?.__tgtaDropped &&
                    c &&
                    !(c.array ?? c.data?.array)?.length &&
                    r++ === 0 &&
                    console.warn(
                      `[districts] ${a.id} rebuilt with a geometry disposed when it was dropped ('${s.name || s.geometry.name}') — build it again after unload()`,
                    ),
                    !s.isSkinnedMesh &&
                      (n.add(s.geometry),
                      W(s.geometry) &&
                        (i > 0 &&
                        s.frustumCulled &&
                        s.geometry.drawRange.count > 3 &&
                        !this.nearAnchors(s, o, i)
                          ? this.addLazy(s) &&
                            (p.lazyMB += G(s.geometry) / 1048576)
                          : e.push(s))));
                });
              p.geoMB += await this.uploadPaced(e, f);
            };
          if ((D ? (await y(), await v()) : (await v(), await y()), this.lost))
            return;
          u = `release`;
          let ee = n.releaseSteps(o);
          for (; !ee.next().done;) r.shouldYield() && (await f(r.nextFrame()));
          ((p.relMB = T.geoMB + T.texMB - h),
            i.noteUpload(`pack ${a.id}`),
            b(`built ${a.id}`));
        } finally {
          (this.pipelines--,
            n.trackDetached(!1),
            i.unhold(o),
            (l = Math.max(l, performance.now() - c)),
            m.on && m.seg(`${a.id}:unhold`, c));
          let e = Math.round(performance.now() - s);
          ((e > 50 && !a.quiet) || t.params.has(`debug`)) &&
            console.info(
              `[init] districts:${a.id} ready in ${e}ms (compile ${p.compileMs}ms + ${p.depth} depth, ${p.tex} textures ${p.texMB.toFixed(1)} MB${p.bands ? ` in ${p.bands} bands` : ``}${p.settleMs ? ` after ${p.settleMs} ms raster settle (first read ${p.firstReadMs} ms)` : ``}, geometry ${p.geoMB.toFixed(1)} MB pre-uploaded${p.lazyMB ? ` (${p.lazyMB.toFixed(1)} MB far → on approach)` : ``}, ${p.relMB.toFixed(1)} MB CPU copies released; longest slice ${l.toFixed(0)}ms)`,
            );
        }
      };
      a?.onPackBuilt(c);
      for (let e of o) e.onPackBuilt(c);
      a?.onPackDropped?.((e, t) => {
        for (let e of t.geometries) this.lazy.delete(e);
      });
      let l = a?.ensureResident;
      a &&
        l &&
        t.quality.mobile &&
        this.lazyOn &&
        (a.ensureResident = (e, t, n, r) =>
          l
            .call(a, e, t, n, r)
            .then(() => this.uploadLazyNear(e, t).catch(() => {})));
      let u = !1,
        f = performance.now(),
        h = async () => {
          if (!(this.lost || u)) {
            u = !0;
            try {
              n.claim(`runtime`);
              let e = T.geoMB + T.texMB;
              if (
                (await r.run(n.releaseSteps()),
                t.quality.mobile &&
                  performance.now() - f > 6e4 &&
                  T.pendingGeo > 0)
              ) {
                let e = t.player?.position,
                  i = e
                    ? { x: e.x, z: e.z, r: t.quality.drawDistance * 1.25 }
                    : void 0;
                for (let e = 0; e < 8 && i; e++) {
                  let e = n.neverDrawn(48, i);
                  if (!e.length) break;
                  if ((await this.uploadPaced(e), this.lost)) return;
                  await r.run(n.releaseSteps());
                }
              }
              T.geoMB + T.texMB - e >= 8 && b(`release`);
            } catch (e) {
              console.warn(`[gpuMem] release failed`, e);
            } finally {
              u = !1;
            }
          }
        },
        g = async () => {
          let e = t.scene.children.filter((e) => n.isStaticRoot(e)),
            a = 0;
          for (let t of i.texturesOf(e)) {
            if (this.lost) return;
            if (!i.isUploaded(t)) {
              if ((await r.nextFrame(), D && dt(t.image)))
                for (let e = 0; e < 600 && i.streamBusy && !this.lost; e++)
                  await r.nextFrame();
              i.isUploaded(t) || (i.preupload(t) && a++);
            }
          }
          a &&
            t.params.has(`debug`) &&
            console.info(
              `[gpuMem] ${a} textures pre-uploaded in the background`,
            );
        };
      if (
        ((async () => {
          (await r.nextFrame(), await h(), n.trackDetached(!1));
        })().catch((e) => console.warn(`[gpuMem] ready pass failed`, e)),
        this.lateProtos.length)
      ) {
        let e = this.lateProtos;
        ((this.lateProtos = []),
          (async () => {
            let n = performance.now(),
              a = i.gl.info.programs?.length ?? 0;
            (await r.nextFrame(),
              await i.compileRoots(
                e,
                () => r.yield(),
                () => r.shouldYield(),
              ));
            let o = (i.gl.info.programs?.length ?? 0) - a;
            t.params.has(`debug`) &&
              console.info(
                `[init] late prewarm: ${e.length} prototypes, ${o} programs in ${Math.round(performance.now() - n)}ms (background)`,
              );
          })().catch((e) => console.warn(`[init] late prewarm failed`, e)));
      }
      let _ = !1,
        v = () => {
          if (
            !_ &&
            ((_ = !0),
            (f = performance.now()),
            setTimeout(
              () =>
                g()
                  .catch((e) => console.warn(`[gpuMem] texture warm failed`, e))
                  .finally(h),
              3e3,
            ),
            setInterval(h, 2e4),
            setTimeout(() => {
              (te(!1), b(`load`));
            }, 1e4),
            setTimeout(() => te(!0), 13e4),
            w())
          ) {
            let e = 0,
              t = window.setInterval(() => {
                if (this.lost) return window.clearInterval(t);
                let n = document.visibilityState === `visible`;
                (n && this.playing && (e += 15),
                  (e >= 60 || (!n && e > 0)) &&
                    (p(e), (e = 0), w() || window.clearInterval(t)));
              }, 15e3);
          }
        };
      (setTimeout(v, 45e3),
        a
          ? ((a.whenResidentBuilt?.() ?? a.whenAllBuilt()).then(v, v),
            a
              .buildDeferred()
              .catch((e) =>
                console.warn(`[districts] deferred build failed`, e),
              ))
          : v());
    }
    upBytes = D ? 1572864 : 4194304;
    upAt = -1;
    lastRawMs = 1e3 / 60;
    uploadBudget() {
      if (this.upAt >= 0 && this.upAt === this.sched.frameNo - 1) {
        let e = this.ctx.renderer.targetMs;
        (this.lastRawMs > e * 1.6
          ? (this.upBytes = Math.max(262144, this.upBytes * 0.6))
          : this.lastRawMs < e * 1.2 &&
            (this.upBytes = Math.min(4 << 20, this.upBytes * 1.2)),
          (this.upAt = -2));
      }
      return this.upBytes;
    }
    uploaded() {
      this.upAt = this.sched.frameNo;
    }
    async uploadPaced(e, t = (e) => e) {
      let n = this.ctx.renderer,
        r = 0,
        i = 0;
      for (; i < e.length;) {
        if ((await t(this.sched.nextFrame()), this.lost)) return r;
        let a = this.uploadBudget(),
          o = [],
          s = 0;
        for (; i < e.length;) {
          let t = e[i],
            n = W(t.geometry) ? G(t.geometry) : 0;
          if (o.length && s + n > a) break;
          (i++, n && (o.push(t), (s += n)));
        }
        o.length && ((r += n.uploadDraw(o) / 1048576), this.uploaded());
      }
      return r;
    }
    pipelines = 0;
    busyUntil = 0;
    busyPollT = 0;
    streamingBusy(e) {
      let t = performance.now(),
        n = this.pipelines > 0 || this.lazyBusy;
      if (!n && (this.busyPollT -= e) <= 0) {
        this.busyPollT = 0.25;
        let e = this.systems.find((e) => e.name === `districts`);
        try {
          let t = e?.residency?.();
          if (t)
            for (let e in t)
              (t[e] === `building` || t[e] === `dropping`) && (n = !0);
        } catch {}
      }
      return (n && (this.busyUntil = t + 1500), n || t < this.busyUntil);
    }
    lazyOn = new URLSearchParams(location.search).get(`lazyup`) !== `0`;
    static settleMs = 400;
    lazy = new Map();
    lazyT = 0;
    lazyBusy = !1;
    lazyStats = {
      added: 0,
      addedMB: 0,
      uploaded: 0,
      uploadedMB: 0,
      dropped: 0,
      drawnFirst: 0,
      drawnFirstMB: 0,
      drawnAt: [],
      drawnNames: [],
    };
    motion = { x: NaN, z: NaN, vx: 0, vz: 0, t: 0 };
    static SPH = new a();
    uploadAnchors() {
      let e = this.ctx,
        t = [],
        n = e.player?.position;
      n &&
        (t.push({ x: n.x, z: n.z }),
        t.push({ x: n.x + this.motion.vx * 3, z: n.z + this.motion.vz * 3 }));
      let r = e.camera.position;
      t.push({ x: r.x, z: r.z });
      try {
        let e = window.__residency?.anchors?.();
        for (let n of e?.requests ?? [])
          Number.isFinite(n.x) &&
            Number.isFinite(n.z) &&
            t.push({ x: n.x, z: n.z });
      } catch {}
      return t;
    }
    nearAnchors(t, n, r) {
      let i = t.geometry;
      if (!i.boundingSphere) return !0;
      let a = e.SPH.copy(i.boundingSphere).applyMatrix4(t.matrixWorld);
      for (let e of n)
        if (Math.hypot(a.center.x - e.x, a.center.z - e.z) - a.radius <= r)
          return !0;
      return !1;
    }
    addLazy(t) {
      let n = t.geometry;
      if (this.lazy.has(n) || !n.boundingSphere) return !1;
      let r = e.SPH.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),
        i = G(n);
      (this.lazy.set(n, {
        m: new WeakRef(t),
        x: r.center.x,
        z: r.center.z,
        r: r.radius,
        b: i,
      }),
        this.lazyStats.added++,
        (this.lazyStats.addedMB += i / 1048576));
      let a = () => {
        (n.removeEventListener(`dispose`, a),
          this.lazy.delete(n) && this.lazyStats.dropped++);
      };
      return (n.addEventListener(`dispose`, a), !0);
    }
    pumpLazy(e) {
      let t = this.ctx.player?.position,
        n = this.motion;
      if (t && ((n.t += e), n.t >= 0.25)) {
        if (Number.isFinite(n.x)) {
          let e = (t.x - n.x) / n.t,
            r = (t.z - n.z) / n.t;
          Math.hypot(e, r) < 120
            ? ((n.vx += (e - n.vx) * 0.5), (n.vz += (r - n.vz) * 0.5))
            : (n.vx = n.vz = 0);
        }
        ((n.x = t.x), (n.z = t.z), (n.t = 0));
      }
      if (
        !this.lazy.size ||
        this.lazyBusy ||
        this.lost ||
        (this.lazyT += e) < 0.5
      )
        return;
      this.lazyT = 0;
      let r = this.takeLazy(this.uploadAnchors());
      r.length &&
        ((this.lazyBusy = !0),
        this.uploadPaced(r)
          .then((e) => {
            ((this.lazyStats.uploadedMB += e),
              (this.lazyStats.uploaded += r.length));
          })
          .catch((e) => console.warn(`[gpuMem] lazy upload failed`, e))
          .finally(() => (this.lazyBusy = !1)));
    }
    takeLazy(e) {
      let t = this.ctx.quality.drawDistance * 1.25,
        n = [];
      for (let [r, i] of this.lazy) {
        let a = i.m.deref();
        if (!a || a.geometry !== r || !W(r)) {
          if (a && a.geometry === r) {
            let e = this.lazyStats;
            (e.drawnFirst++, (e.drawnFirstMB += i.b / 1048576));
            let t = this.ctx.player?.position;
            if (
              (t &&
                e.drawnAt.length < 20 &&
                e.drawnAt.push(
                  Math.round(Math.hypot(i.x - t.x, i.z - t.z) - i.r),
                ),
              e.drawnNames.length < 20)
            ) {
              let t = a;
              for (; t.parent && t.parent !== this.ctx.scene;) t = t.parent;
              e.drawnNames.push(
                `${t.name}/${a.name}:fc=${a.frustumCulled}:r=${Math.round(i.r)}:c=${Math.round(i.x)},${Math.round(i.z)}`,
              );
            }
          }
          this.lazy.delete(r);
          continue;
        }
        let o = !a.frustumCulled || a.geometry.drawRange.count <= 3;
        for (let n of e)
          Math.hypot(i.x - n.x, i.z - n.z) - i.r <= t && (o = !0);
        o && (this.lazy.delete(r), n.push(a));
      }
      return n;
    }
    async uploadLazyNear(e, t) {
      if (!this.lazy.size || this.lost) return;
      let n = this.takeLazy([{ x: e, z: t }]);
      n.length &&
        ((this.lazyStats.uploadedMB += await this.uploadPaced(n)),
        (this.lazyStats.uploaded += n.length));
    }
    async guardArrival(e, t, n) {
      let r = this.ctx,
        i = this.systems.find((e) => e.name === `districts`);
      if (!i?.ensureResident || this.arrivalHold || this.lost || !this.running)
        return;
      let a = r.player?.position,
        o = e ?? a?.x,
        s = t ?? a?.z;
      if (o === void 0 || s === void 0) return;
      let c = n ?? Math.min(r.quality.drawDistance * 0.5, 350) + 50;
      if (!i.unbuiltNear(o, s, c)) return;
      let l = performance.now();
      ((this.arrivalHold = !0),
        this.overlay.show({
          zh: `街區載入中…`,
          en: `Loading the neighbourhood…`,
        }));
      try {
        Promise.resolve(i.ensureResident(o, s, c)).catch(() => {});
        let e = performance.now();
        for (
          ;
          i.unbuiltNear(o, s, c) && performance.now() - e < 2e4 && !this.lost;
        )
          await new Promise((e) => setTimeout(e, 50));
      } finally {
        ((this.arrivalHold = !1),
          (this.last = performance.now()),
          !this.hold && !this.lost && this.overlay.hide(),
          r.renderer.suspendAdapt(2),
          r.params.has(`debug`) &&
            console.info(
              `[districts] arrival at ${Math.round(o)}, ${Math.round(s)} covered for ${Math.round(performance.now() - l)} ms`,
            ));
      }
    }
    beginPlay() {
      ((this.playing = !0), this.ctx.renderer.suspendAdapt(2.5));
    }
    start() {
      if (this.running || this.lost) return;
      ((this.running = !0),
        (this.last = performance.now()),
        this.pacer.reset(this.last));
      let e = (t) => {
        this.running &&
          (requestAnimationFrame(e), this.pacer.ready(t) && this.frame(t));
      };
      requestAnimationFrame(e);
    }
    fpsMode;
    setFrameRateMode(e) {
      this.fpsMode !== `param` &&
        ((this.fpsMode = e),
        this.pacer.setFps(e === `30` ? 30 : 60),
        this.ctx.renderer.setFrameCap(this.pacer.intervalMs));
    }
    frame(e) {
      let t = this.ctx,
        n = performance.now(),
        r = e - this.last;
      if (
        ((this.last = e), (this.lastRawMs = r), this.hold || this.arrivalHold)
      ) {
        this.sched.frame(this.arrivalHold ? 12 : 8);
        return;
      }
      this.sched.inFrame = !0;
      try {
        this.frameBody(n, r);
      } finally {
        this.sched.inFrame = !1;
      }
      let i = performance.now() - n;
      this.frameCpu += (Math.min(40, i) - this.frameCpu) * 0.1;
      let a = this.pacer.intervalMs > 20;
      this.sched.frame(
        t.paused
          ? 12
          : a
            ? Math.max(3, Math.min(9, 26 - this.frameCpu))
            : Math.max(3, Math.min(6, 15 - this.frameCpu)),
      );
    }
    frameBody(e, t) {
      let n = this.ctx,
        r = Math.min(0.05, Math.max(0, t / 1e3)),
        i = r * Math.max(0, Math.min(4, n.timeScale));
      ((n.time.dt = i),
        (n.time.real += r),
        n.time.frame++,
        n.paused || (n.time.elapsed += i),
        (ue.uTime.value = n.time.real % 3600),
        n.renderer.pollOom(r),
        n.input.beginFrame(r),
        n.dynamics.rebuild(),
        n.paused || n.signals.update(i),
        n.state.update(r));
      let a = this.systems,
        o = this.sysMs;
      o.fill(0);
      let s = i,
        c = !1;
      n.renderer.worldHidden && !n.paused
        ? ((this.titleAcc += i),
          this.titleAcc >= H
            ? ((s = Math.min(0.05, this.titleAcc)), (this.titleAcc = 0))
            : (c = !0))
        : (this.titleAcc = H);
      let l = this.simMask;
      for (let e = 0; e < a.length; e++) {
        let t = a[e];
        if (!t.update || (n.paused && !t.alwaysUpdate) || (l[e] && c)) continue;
        let r = performance.now();
        try {
          t.update(l[e] ? s : i, n);
        } catch (e) {
          this.reportError(t.name, e);
        }
        o[e] += performance.now() - r;
      }
      n.paused || this.edges?.update(r);
      for (let e = 0; e < a.length; e++) {
        let t = a[e];
        if (!t.lateUpdate || (n.paused && !t.alwaysUpdate) || (l[e] && c))
          continue;
        let r = performance.now();
        try {
          t.lateUpdate(l[e] ? s : i, n);
        } catch (e) {
          this.reportError(t.name, e);
        }
        o[e] += performance.now() - r;
      }
      (this.recordTimings(),
        this.tickCalendar(),
        this.playing && !n.paused && this.tickStats(r),
        this.pumpLazy(r),
        n.input.endFrame());
      let u = n.renderer;
      if (
        ((!n.paused || u.worldHidden) && (this.pausedRenderRevision = -1),
        !u.worldHidden &&
          (!n.paused ||
            this.pausedRenderRevision !== u.renderRevision ||
            u.redrawPending))
      ) {
        try {
          (n.renderer.render(r),
            (this.pausedRenderRevision = n.paused ? u.renderRevision : -1));
        } catch (e) {
          this.reportError(`render`, e);
        }
        ((n.renderer.bgMs = this.sched.lastUsedMs),
          (n.renderer.streamBusy = this.streamingBusy(r)),
          n.paused ||
            n.renderer.adapt(
              this.pacer.adaptInterval(t),
              performance.now() - e,
              r,
            ));
      }
      ((this.frameTimes[this.frameIdx++ % this.frameTimes.length] = t),
        this.perf.update(r, this.frameTimes));
    }
    recordTimings() {
      let e = this.sysMs,
        t = this.timings;
      this.timingFrames++;
      for (let n = 0; n < t.length; n++) {
        let r = t[n],
          i = e[n];
        ((r.avg += (i - r.avg) * 0.05),
          (r.total += i),
          i > r.max && (r.max = i));
      }
    }
    errCount = new Map();
    reportError(e, t) {
      let n = (this.errCount.get(e) ?? 0) + 1;
      (this.errCount.set(e, n),
        n <= 3 && console.error(`[update] ${e} threw`, t));
    }
    pendingQuality = null;
    applying = null;
    applyQuality(e) {
      if (!A[e]) return Promise.resolve();
      if (((this.pendingQuality = e), this.applying)) return this.applying;
      let t = this.ctx,
        n = t.renderer,
        r = this.running && !this.lost;
      return (
        (this.applying = (async () => {
          (r &&
            (this.overlay.show({
              zh: `套用畫質設定中…`,
              en: `Applying graphics settings…`,
            }),
            await pt()),
            (this.hold = r));
          try {
            for (; this.pendingQuality;) {
              let e = this.pendingQuality;
              ((this.pendingQuality = null),
                Object.assign(t.quality, fe(e)),
                n.applyQuality(t.quality),
                (this.gpuMem.maxTextureSize = t.quality.maxTextureSize),
                t.events.emit(`quality:changed`, { level: e }));
            }
            r && (await q(), await this.warmShaders(1));
          } catch (e) {
            console.warn(`[game] quality switch warm-up failed`, e);
          } finally {
            ((this.hold = !1),
              (this.last = performance.now()),
              this.arrivalHold || this.overlay.hide(),
              n.suspendAdapt(2.5),
              (this.applying = null));
          }
        })()),
        this.applying
      );
    }
    onContextLost() {
      if (this.lost) return;
      this.lost = !0;
      let e = this.ctx;
      this.running = !1;
      try {
        e.events.emit(`game:contextLost`);
      } catch {}
      try {
        e.setPaused(!0);
      } catch {}
      if (this.playing && !e.state.resetting)
        try {
          e.state.saveNow();
        } catch {}
      let t = Date.now(),
        n = [];
      try {
        n = JSON.parse(ae(`tgta-ctxloss`) || `[]`).filter(
          (e) => typeof e == `number` && t - e < 9e5,
        );
      } catch {}
      (n.push(t), _(f, JSON.stringify(n)), _(k, String(t)));
      let r = document.visibilityState === `visible`,
        i = n.filter((e) => t - e < 6e5).length,
        a = e.quality.mobile && r;
      if (i >= 2 || a) {
        let t = V.indexOf(e.quality.level);
        t > 0 ? S(V[t - 1]) : e.quality.mobile && E(i >= 2 && y() >= 1 ? 2 : 1);
      }
      if ((e.quality.level, e.quality.mobile, y(), this.playing, i >= 2 && r)) {
        ((this.holdReload = !0),
          this.overlay.show(
            {
              zh: `顯示晶片記憶體不足，畫面已暫停（進度已保存）`,
              en: `The graphics memory ran out — the game is paused (progress saved)`,
            },
            {
              label: e.quality.mobile
                ? {
                    zh: `以省記憶體模式重新載入`,
                    en: `Reload in memory-saving mode`,
                  }
                : { zh: `以較低畫質重新載入`, en: `Reload at lower quality` },
              run: () => this.reload(),
            },
          ));
        return;
      }
      (this.overlay.show({ zh: `畫面重新載入中…`, en: `Reloading graphics…` }),
        this.reloadWhenVisible(2e3));
    }
    reloadTimer = 0;
    holdReload = !1;
    reloadWhenVisible(e) {
      if (this.holdReload) return;
      if (!this.lost) {
        this.onContextLost();
        return;
      }
      let t = performance.now(),
        n = () => {
          (clearTimeout(this.reloadTimer),
            (this.reloadTimer = window.setTimeout(() => this.reload(), e)));
        };
      if (document.visibilityState === `visible`) n();
      else {
        let r = () => {
          document.visibilityState === `visible` &&
            (document.removeEventListener(`visibilitychange`, r),
            (e = Math.max(300, e - (performance.now() - t))),
            n());
        };
        document.addEventListener(`visibilitychange`, r);
      }
    }
    reloaded = !1;
    reload() {
      if (!this.reloaded) {
        this.reloaded = !0;
        try {
          location.reload();
        } catch {}
      }
    }
    lastHour = -1;
    startDay = 0;
    initCalendar() {
      let e = this.ctx.state.data,
        t = ft(new Date());
      e.startDate ||
        ((e.startDate = t), (e.firstPlayedAt = new Date().toISOString()));
      let [n, r, i] = e.startDate.split(`-`).map(Number);
      ((this.startDay = Math.floor(Date.UTC(n, r - 1, i) / 864e5)),
        (typeof e.day == `number` && e.day >= 0) || (e.day = 0));
      let a = Number(this.ctx.params.get(`day`));
      this.ctx.params.has(`day`) &&
        Number.isFinite(a) &&
        (e.day = Math.max(0, Math.floor(a)));
      let o = Ve(this.ctx.params, e, Ie);
      if (o) {
        let [t, n, r] = o.split(`-`).map(Number);
        ((this.startDay = Math.floor(Date.UTC(t, n - 1, r) / 864e5) - e.day),
          (e.startDate = new Date(this.startDay * 864e5)
            .toISOString()
            .slice(0, 10)));
      }
      (this.setDay(e.day),
        (this.ctx.time.setDate = (e) => {
          let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
          if (!t) return;
          let n = Math.floor(Date.UTC(+t[1], t[2] - 1, +t[3]) / 864e5),
            r = this.ctx.state.data,
            i = r.day ?? 0;
          ((this.startDay = n - i),
            (r.startDate = new Date(this.startDay * 864e5)
              .toISOString()
              .slice(0, 10)),
            this.setDay(i));
          let a = this.ctx.time;
          this.ctx.events.emit(`time:day`, {
            day: i,
            weekday: a.weekday,
            date: a.date,
          });
        }));
    }
    setDay(e) {
      let t = this.ctx.time;
      t.day = e;
      let n = new Date((this.startDay + e) * 864e5);
      ((t.weekday = n.getUTCDay()),
        (t.date = {
          y: n.getUTCFullYear(),
          m: n.getUTCMonth() + 1,
          d: n.getUTCDate(),
        }));
    }
    envHour() {
      try {
        let e = this.ctx.env?.hour;
        return typeof e == `number` && Number.isFinite(e) ? e : -1;
      } catch {
        return -1;
      }
    }
    tickCalendar() {
      let e = this.envHour();
      if (e < 0) return;
      let t = this.lastHour;
      if (((this.lastHour = e), t < 0 || !(e < t - 12))) return;
      let n = this.ctx.state.data,
        r = (n.day ?? 0) + 1;
      ((n.day = r), this.setDay(r));
      let i = this.ctx.time;
      this.ctx.events.emit(`time:day`, {
        day: r,
        weekday: i.weekday,
        date: i.date,
      });
    }
    statAcc = { playTime: 0, walked: 0, driven: 0, flushT: 0 };
    lastPos = new l(NaN, 0, 0);
    trackStats() {
      let e = this.ctx.events;
      (e.on(`ped:hit`, ({ byPlayer: e }) => {
        e && this.ctx.state.stat(`pedsHit`);
      }),
        e.on(`crime`, ({ type: e, witnessed: t }) => {
          e === `carjack` && !t && this.ctx.state.stat(`vehiclesStolen`);
        }));
      let t = 0;
      e.on(`vehicle:collision`, ({ vehicleId: e, impulse: n }) => {
        let r = this.ctx.player;
        if (!r || r.vehicleId !== e || !(n > 6)) return;
        let i = this.ctx.time.real;
        i - t < 1.5 || ((t = i), this.ctx.state.stat(`crashes`));
      });
    }
    tickStats(e) {
      let t = this.statAcc;
      t.playTime += e;
      let n = this.ctx.player,
        r = n?.position;
      if (r) {
        if (Number.isFinite(this.lastPos.x)) {
          let e = Math.hypot(r.x - this.lastPos.x, r.z - this.lastPos.z);
          e < 3 &&
            (n.mode === `vehicle`
              ? (t.driven += e)
              : n.mode === `foot` && (t.walked += e));
        }
        this.lastPos.copy(r);
      }
      if (((t.flushT += e), t.flushT < 10)) return;
      t.flushT = 0;
      let i = this.ctx.state.data.stats,
        a = (e, t) => {
          t > 0 && (i[e] = (Number.isFinite(i[e]) ? i[e] : 0) + t);
        };
      (a(`playTime`, t.playTime),
        a(`distanceWalked`, t.walked),
        a(`distanceDriven`, t.driven),
        (t.playTime = t.walked = t.driven = 0));
    }
  },
  ut = [];
