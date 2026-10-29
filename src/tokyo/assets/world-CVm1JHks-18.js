// tokyo/assets/world-CVm1JHks 18 — worker
// Lines 5198-5447 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var Dr = 4e3,
  Or = class {
    allow;
    make;
    worker = null;
    started = !1;
    dead = !1;
    seq = 1;
    pending = new Map();
    heroCapable;
    stats = {
      bakes: 0,
      heroes: 0,
      workerMs: 0,
      syncBakes: 0,
      syncMs: 0,
      errors: 0,
    };
    constructor(e = !0, t) {
      ((this.allow = e),
        (this.make = t),
        (this.heroCapable =
          e &&
          typeof Worker < `u` &&
          typeof OffscreenCanvas < `u` &&
          typeof createImageBitmap == `function`));
    }
    get live() {
      return !this.allow || this.dead
        ? !1
        : (this.started || this.start(), !!this.worker);
    }
    start() {
      if (((this.started = !0), typeof Worker < `u`))
        try {
          let e = this.make
            ? this.make()
            : new Worker(
                new URL(
                  `/tokyo/assets/peopleWorker-Cn7UVw8F.js`,
                  `` + import.meta.url,
                ),
                { type: `module`, name: `interiors-people` },
              );
          ((e.onmessage = (e) => this.onMessage(e.data)),
            (e.onerror = (e) => {
              (e.preventDefault?.(),
                console.warn(
                  `[interiors] people worker unavailable — people are built on the main thread`,
                ),
                this.kill());
            }),
            (this.worker = e));
        } catch {
          ((this.worker = null), (this.dead = !0));
        }
    }
    kill() {
      ((this.dead = !0), this.worker?.terminate(), (this.worker = null));
      for (let e of this.pending.values())
        `runSync` in e ? (e.inFlight = !1) : (e.failed = e.done = !0);
      this.pending.clear();
    }
    lastReply = 0;
    watchT = 0;
    watch() {
      if (this.watchT || this.dead) return;
      let e = this.lastReply + qe - performance.now();
      this.watchT = setTimeout(
        () => {
          if (((this.watchT = 0), this.pending.size && !this.dead)) {
            if (performance.now() - this.lastReply < 15e3) return this.watch();
            (console.warn(
              `[interiors] people worker silent for ${qe / 1e3} s — people are built on the main thread`,
            ),
              this.kill());
          }
        },
        Math.max(250, e),
      );
    }
    posted() {
      (this.pending.size <= 1 && (this.lastReply = performance.now()),
        this.watch());
    }
    onMessage(e) {
      this.lastReply = performance.now();
      let t = this.pending.get(e.id);
      if (t && (this.pending.delete(e.id), !t.done)) {
        if (((this.stats.workerMs += e.ms ?? 0), e.error)) {
          if (
            (this.stats.errors++,
            console.warn(
              `[interiors] people worker job failed`,
              e.error.split(`
`)[0],
            ),
            `runSync` in t)
          ) {
            t.inFlight = !1;
            return;
          }
          t.failed = t.done = !0;
          return;
        }
        `runSync` in t
          ? ((t.data = e.bake ?? null),
            (t.done = !0),
            (t.inFlight = !1),
            this.stats.bakes++)
          : ((t.data = e.hero ?? null),
            (t.ms = e.ms ?? 0),
            (t.failed = !t.data),
            (t.done = !0),
            this.stats.heroes++);
      }
    }
    bake(e, t, n = !1) {
      let r = wr(e, n),
        i = this.stats,
        a = {
          done: !1,
          data: null,
          desc: r,
          pose: t,
          t0: performance.now(),
          inFlight: !1,
          runSync() {
            if (this.done) return;
            let e = performance.now();
            try {
              this.data = Tr(this.desc, this.pose);
            } catch (e) {
              (console.warn(`[interiors] person bake failed`, e),
                (this.data = null));
            }
            ((this.done = !0),
              i.syncBakes++,
              (i.syncMs += performance.now() - e));
          },
        };
      if (this.live && !Jn.sync) {
        let e = this.seq++;
        this.pending.set(e, a);
        try {
          (this.worker.postMessage({ id: e, t: `bake`, desc: r, pose: t }),
            (a.inFlight = !0),
            this.posted());
        } catch {
          this.pending.delete(e);
        }
      }
      return a;
    }
    mustSync(e) {
      return (
        Jn.sync || !e.inFlight || !this.live || performance.now() - e.t0 > Dr
      );
    }
    hero(e, t, n) {
      let r = { done: !1, failed: !1, data: null, desc: e, ms: 0 };
      if (!this.heroCapable || !this.live) return ((r.done = r.failed = !0), r);
      let i = this.seq++;
      this.pending.set(i, r);
      try {
        (this.worker.postMessage({
          id: i,
          t: `hero`,
          desc: e,
          faceRes: t,
          atlasSize: n,
        }),
          this.posted());
      } catch {
        (this.pending.delete(i), (r.done = r.failed = !0));
      }
      return r;
    }
    resetHeroes() {
      if (this.worker && !this.dead)
        try {
          this.worker.postMessage({ id: 0, t: `reset` });
        } catch {}
    }
    dispose() {
      (this.worker?.terminate(),
        (this.worker = null),
        (this.dead = !0),
        this.pending.clear());
    }
  };
function* kr(e, t) {
  for (; !t.done;) {
    if (e.mustSync(t)) {
      t.runSync();
      break;
    }
    yield qn;
  }
  return t.data;
}
var Ar = new WeakMap();
function jr(e) {
  let t = Ar.get(e.scene);
  if (!t) {
    ((t = new ne()),
      (t.name = `interiors`),
      e.scene.add(t),
      Ar.set(e.scene, t));
    let n = window.__gpuMemory;
    try {
      n?.claim?.(`interiors`, [t]);
    } catch {}
  }
  return t;
}
function Mr(e) {
  let t = jr(e);
  return (t.parent !== e.scene && e.scene.add(t), t);
}
var Nr = new E(),
  Pr = new Float64Array(512),
  Fr = [],
  Ir = 0,
  Lr = 4 << 20,
  Rr = (e) =>
    e.P.byteLength +
    e.N.byteLength +
    e.T.byteLength +
    e.C.byteLength +
    e.I.byteLength,
  zr = new Float32Array(),
  Br = new Float32Array(16),
  Vr = new Uint32Array();
function Hr(e) {
  let t = -1;
  for (let n = 0; n < Fr.length; n++) {
    let r = Fr[n];
    r.P.length / 3 >= e &&
      r.I.length >= e * 2 &&
      (t < 0 || r.P.length < Fr[t].P.length) &&
      (t = n);
  }
  if (t < 0) return null;
  let n = Fr.splice(t, 1)[0];
  return ((Ir -= Rr(n)), n);
}
function Ur() {
  ((Fr.length = 0), (Ir = 0));
}
