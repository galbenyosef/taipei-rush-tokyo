// tokyo/assets/world-CVm1JHks 30 — idle
// Lines 9117-9359 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var rc = class {
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
      this.map.size >= $s && this.map.clear();
      let r = new Float64Array(9);
      for (let e = 0; e < 9; e++) r[e] = t[n + e];
      this.map.set(ec(e[0]) + `` + e[1], r);
    }
    putMetrics(e, t) {
      let n = t,
        r = new Float64Array(9);
      for (let e = 0; e < 9; e++) r[e] = +(n[Qo[e]] ?? 0) || 0;
      this.put(e, r);
    }
    clear() {
      this.map.clear();
    }
  },
  ic = class {
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
      let n = ec(e),
        r = this.cache.get(n, t);
      if (r) return (this.cache.hits++, tc(r, 0));
      this.cache.misses++;
      let i = n + `` + t;
      if (!this.queued.has(i)) {
        this.queued.add(i);
        let n = {};
        for (let t = 0; t < Qs.length; t++) n[Qs[t]] = e[Qs[t]];
        this.queue.push([n, t]);
      }
      return nc(e, t);
    }
  },
  ac = () => (typeof performance < `u` ? performance.now() : Date.now()),
  oc = class e {
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
      let t = { done: !1, reply: null, t0: ac() },
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
        (ac() - t.t0 > e.TIMEOUT_MS &&
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
  sc = `"PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC",system-ui,sans-serif`,
  cc = `"Songti TC","Noto Serif TC","PMingLiU","MingLiU",serif`,
  lc = Symbol(`sites-atlas-wait`),
  uc = 4,
  dc = 32,
  fc = 16,
  pc = 3,
  mc = 2,
  hc = 120,
  gc = 1.5,
  _c = 1.5,
  vc = 6,
  yc = typeof location < `u` && /[?&]sitesworker=0(&|$)/.test(location.search),
  bc = 0.95,
  xc = 12,
  Sc = [],
  Cc = [],
  wc = 9;
function Tc(e) {
  return typeof e.legibility == `number` ? e.legibility : Yo[Xo(e.key)];
}
function Ec(e, t) {
  return t > e.upto ? 1 : t === e.upto ? e.factor : (e.under ?? e.factor);
}
var Dc = [0, 1, 2, 3],
  Oc = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55],
  kc = 0.55,
  Ac = (() => {
    let e = [],
      t = new Set();
    for (let n of Dc)
      for (let r of [!1, !0])
        if (!(r && n === Dc[0]))
          for (let i of Oc) {
            let a = r ? kc : i;
            if (a > i) continue;
            let o = `${n}:${i}:${a}`;
            t.has(o) || (t.add(o), e.push({ upto: n, factor: i, under: a }));
          }
    return e;
  })(),
  jc = new Set();
function $() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
