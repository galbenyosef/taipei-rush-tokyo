// tokyo/assets/world-Bo9wkXrT 30 — idle
// Lines 8990-9232 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
var Vs = class {
    map = new Map();
    hits = 0;
    misses = 0;
    get size() {
      return this.map.size;
    }
    get(e, t) {
      return this.map.get(e + `` + t);
    }
    put(e, t, n = 0) {
      this.map.size >= Ls && this.map.clear();
      let r = new Float64Array(9);
      for (let e = 0; e < 9; e++) r[e] = t[n + e];
      this.map.set(Rs(e[0]) + `` + e[1], r);
    }
    putMetrics(e, t) {
      let n = t,
        r = new Float64Array(9);
      for (let e = 0; e < 9; e++) r[e] = +(n[Io[e]] ?? 0) || 0;
      this.put(e, r);
    }
    clear() {
      this.map.clear();
    }
  },
  Hs = class {
    cache;
    queue = [];
    queued = new Set();
    constructor(e) {
      this.cache = e;
    }
    get missed() {
      return this.queue.length > 0;
    }
    text(e, t) {
      let n = Rs(e),
        r = this.cache.get(n, t);
      if (r) return (this.cache.hits++, zs(r, 0));
      this.cache.misses++;
      let i = n + `` + t;
      if (!this.queued.has(i)) {
        this.queued.add(i);
        let n = {};
        for (let t = 0; t < Is.length; t++) n[Is[t]] = e[Is[t]];
        this.queue.push([n, t]);
      }
      return Bs(e, t);
    }
  },
  Us = () => (typeof performance < `u` ? performance.now() : Date.now()),
  Ws = class e {
    create;
    idleMs = 1e4;
    static TIMEOUT_MS = 12e3;
    w = null;
    seq = 1;
    pending = new Map();
    idle = 0;
    off = null;
    stats = {
      spawns: 0,
      measures: 0,
      queries: 0,
      paints: 0,
      workerMsMax: 0,
      failures: 0,
      why: ``,
    };
    constructor(e) {
      ((this.create = e),
        e
          ? (typeof Worker > `u` ||
              typeof OffscreenCanvas > `u` ||
              typeof createImageBitmap != `function`) &&
            (this.off = `no Worker / OffscreenCanvas`)
          : (this.off = `no worker`));
    }
    get usable() {
      return this.off === null;
    }
    ensure() {
      if (this.off) return null;
      if (this.w) return this.w;
      try {
        let e = this.create();
        return (
          (e.onmessage = (e) => this.onReply(e.data)),
          (e.onerror = (e) => {
            (e.preventDefault?.(),
              this.disable(`worker error: ${e.message ?? `load failed`}`));
          }),
          (this.w = e),
          this.stats.spawns++,
          e
        );
      } catch (e) {
        return (this.disable(`spawn failed: ${String(e)}`), null);
      }
    }
    onReply(e) {
      let t = this.pending.get(e.id);
      if (e.t === `x`) {
        this.disable(e.why);
        return;
      }
      if (!t) {
        e.t === `p` && e.bmp.close();
        return;
      }
      (this.pending.delete(e.id),
        t.abandoned && e.t === `p` ? e.bmp.close() : (t.reply = e),
        (t.done = !0),
        e.t === `p` &&
          (this.stats.paints++,
          e.ms > this.stats.workerMsMax &&
            (this.stats.workerMsMax = Math.round(e.ms * 10) / 10)),
        this.armIdle());
    }
    armIdle() {
      (this.idle && clearTimeout(this.idle),
        (this.idle = 0),
        !this.pending.size &&
          this.w &&
          (this.idle = setTimeout(() => {
            ((this.idle = 0),
              !this.pending.size &&
                this.w &&
                (this.w.terminate(), (this.w = null)));
          }, this.idleMs)));
    }
    disable(e) {
      (this.off === null &&
        ((this.off = e),
        this.stats.failures++,
        (this.stats.why = e.slice(0, 160)),
        typeof console < `u` &&
          console.info(
            `[init] sites atlas paints on the main thread (${e.slice(0, 120)})`,
          )),
        this.idle && clearTimeout(this.idle),
        (this.idle = 0),
        (this.w &&= (this.w.terminate(), null)));
      for (let e of this.pending.values()) ((e.done = !0), (e.reply = null));
      this.pending.clear();
    }
    send(e) {
      let t = { done: !1, reply: null, t0: Us() },
        n = this.ensure();
      if (!n) return ((t.done = !0), t);
      (this.idle && clearTimeout(this.idle),
        (this.idle = 0),
        this.pending.set(e.id, t));
      try {
        n.postMessage(e);
      } catch (e) {
        this.disable(`post failed: ${String(e)}`);
      }
      return t;
    }
    poll(t) {
      return (
        !t.done &&
        (Us() - t.t0 > e.TIMEOUT_MS &&
          this.disable(`no reply in ${e.TIMEOUT_MS} ms`),
        !t.done)
      );
    }
    measure(e) {
      return (
        this.stats.measures++,
        (this.stats.queries += e.length),
        this.send({ t: `m`, id: this.seq++, q: e })
      );
    }
    paint(e, t, n, r) {
      return this.send({
        t: `p`,
        id: this.seq++,
        size: e,
        white: t,
        gutter: n,
        arts: r,
      });
    }
    dispose() {
      (this.idle && clearTimeout(this.idle),
        (this.idle = 0),
        this.w?.terminate(),
        (this.w = null));
      for (let e of this.pending.values())
        (e.reply && e.reply.t === `p` && e.reply.bmp.close(),
          (e.done = !0),
          (e.reply = null));
      this.pending.clear();
    }
  },
  Gs = `"PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC",system-ui,sans-serif`,
  Ks = `"Songti TC","Noto Serif TC","PMingLiU","MingLiU",serif`,
  qs = Symbol(`sites-atlas-wait`),
  Js = 4,
  Ys = 32,
  Xs = 16,
  Zs = 3,
  Qs = 2,
  $s = 120,
  ec = 1.5,
  tc = 1.5,
  nc = 6,
  rc = typeof location < `u` && /[?&]sitesworker=0(&|$)/.test(location.search),
  ic = 0.95,
  ac = 12,
  oc = [],
  sc = [],
  cc = 9;
function lc(e) {
  return typeof e.legibility == `number` ? e.legibility : No[Po(e.key)];
}
function uc(e, t) {
  return t > e.upto ? 1 : t === e.upto ? e.factor : (e.under ?? e.factor);
}
var dc = [0, 1, 2, 3],
  fc = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55],
  pc = 0.55,
  mc = (() => {
    let e = [],
      t = new Set();
    for (let n of dc)
      for (let r of [!1, !0])
        if (!(r && n === dc[0]))
          for (let i of fc) {
            let a = r ? pc : i;
            if (a > i) continue;
            let o = `${n}:${i}:${a}`;
            t.has(o) || (t.add(o), e.push({ upto: n, factor: i, under: a }));
          }
    return e;
  })(),
  hc = new Set();
function $() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
