// tokyo__assets__audio-DzcbodvB 19 — stats
// Lines 7270-7681 of readable/tokyo__assets__audio-DzcbodvB.pretty.js (statement-aligned).
var Fn = [2e4, 8e3],
  In = [15e4, 6e4],
  Ln = [75e3, 45e3],
  Rn = [16 << 20, 5 << 20],
  zn = 5e3,
  Bn = class {
    quality;
    mobile;
    bufs = new Map();
    raw = new Map();
    vars = new Map();
    bytesOf = new Map();
    pending = new Set();
    worker = null;
    workerFailed = !1;
    outstanding = 0;
    idleTimer = null;
    fallbackQueue = null;
    fallbackRender = null;
    fallbackExpand = null;
    dropIR = !1;
    get irsReleased() {
      return this.dropIR;
    }
    used = new Map();
    reqIds = new Map();
    reqSeq = 0;
    pinned = !1;
    stats = {
      count: 0,
      bytes: 0,
      workerMs: 0,
      startedAt: 0,
      doneAt: 0,
      errors: 0,
      mode: `worker`,
      released: 0,
      spawns: 0,
      lazyLoads: 0,
      lazyReleased: 0,
    };
    onBuffer = null;
    onNeeds = null;
    m;
    constructor(e, t = !1) {
      ((this.quality = e), (this.mobile = t), (this.m = +!!t));
    }
    start() {
      ((this.stats.startedAt = performance.now()),
        this.send({
          type: `render`,
          quality: this.quality,
          mobile: this.mobile,
          tag: `core`,
        }));
    }
    ensureWorker() {
      if (this.worker) return this.worker;
      if (this.workerFailed) return null;
      try {
        let e = new Worker(
          new URL(`/tokyo/assets/worker-DuEI-Qg4.js`, `` + import.meta.url),
          { type: `module`, name: `audio-synth` },
        );
        return (
          (e.onmessage = (e) => this.onMsg(e.data)),
          (e.onerror = (e) => {
            (e.preventDefault?.(),
              console.warn(
                `[audio] synth worker failed, rendering on main thread`,
              ),
              this.worker?.terminate(),
              (this.worker = null),
              (this.workerFailed = !0),
              this.startFallback());
          }),
          (this.worker = e),
          this.stats.spawns++,
          e
        );
      } catch {
        return ((this.workerFailed = !0), this.startFallback(), null);
      }
    }
    send(e) {
      let t = this.ensureWorker();
      if (!t) {
        if (e.type === `render` && !e.ids) return;
        let t =
          e.type === `render` ? e.ids : this.fallbackNeeds(e.station, e.ks);
        (this.fallbackQueue ??= []).push(...t.filter((e) => !this.bufs.has(e)));
        return;
      }
      (this.idleTimer && clearTimeout(this.idleTimer),
        (this.idleTimer = null),
        this.outstanding++,
        t.postMessage(e));
    }
    fallbackNeeds(e, t) {
      try {
        let n = Pn(e, t);
        return (this.onNeeds?.(e, t, n), n);
      } catch {
        return [];
      }
    }
    async startFallback() {
      this.stats.mode = `main`;
      try {
        let e = await t(() => Promise.resolve().then(() => Ct), void 0),
          n = e
            .buildJobs(this.quality)
            .map((e) => e.id)
            .filter((e) => !this.bufs.has(e) && !this.raw.has(e)),
          r = this.mobile;
        ((this.fallbackQueue = [
          ...n,
          ...[...this.pending].filter((e) => !n.includes(e)),
        ]),
          (this.fallbackRender = (t, n) => e.renderJob(t, n, r)),
          (this.fallbackExpand = e.expandIds));
      } catch (e) {
        console.warn(`[audio] synthesis unavailable`, e);
      }
    }
    pump(e) {
      let t = this.fallbackQueue;
      if (!t || !t.length || !this.fallbackRender) return;
      let n = performance.now();
      for (; t.length && performance.now() - n < e;) {
        let e = t.shift();
        if (e.endsWith(`/*`)) {
          (this.pending.delete(e),
            this.fallbackExpand &&
              t.unshift(...this.fallbackExpand([e], this.quality)));
          continue;
        }
        if (!this.bufs.has(e))
          try {
            let t = this.fallbackRender(e, this.quality);
            this.store(e, t.sr, t.ch);
          } catch {
            this.stats.errors++;
          }
      }
      !t.length &&
        !this.stats.doneAt &&
        (this.stats.doneAt = performance.now());
    }
    onMsg(e) {
      if (e.type === `buf` && e.id && e.ch && e.sr)
        ((this.stats.workerMs += e.ms ?? 0), this.store(e.id, e.sr, e.ch));
      else if (e.type === `needs` && e.ids && e.station !== void 0) {
        for (let t of e.ids) this.bufs.has(t) || this.pending.add(t);
        this.onNeeds?.(e.station, e.ks ?? [], e.ids);
      } else if (e.type === `err`)
        (this.stats.errors++,
          e.id && this.pending.delete(e.id),
          console.warn(`[audio] synth error`, e.id, e.msg));
      else if (e.type === `done`) {
        e.tag === `core` &&
          !this.stats.doneAt &&
          (this.stats.doneAt = performance.now());
        let t = e.tag ? this.reqIds.get(e.tag) : void 0;
        if (t) {
          for (let e of t) this.pending.delete(e);
          this.reqIds.delete(e.tag);
        }
        ((this.outstanding = Math.max(0, this.outstanding - 1)),
          this.outstanding === 0 &&
            (this.idleTimer && clearTimeout(this.idleTimer),
            (this.idleTimer = setTimeout(() => {
              ((this.idleTimer = null),
                !(this.outstanding > 0 || !this.worker) &&
                  (this.worker.terminate(), (this.worker = null)));
            }, Fn[this.m]))));
      }
    }
    store(e, t, n) {
      if (
        (this.pending.delete(e),
        (e.startsWith(`ir/`) &&
          !this.waiters.has(e) &&
          (this.dropIR ||
            (this.ac && !e.endsWith(`/${this.ac.sampleRate}`)))) ||
          this.bufs.has(e))
      )
        return;
      xt(e) &&
        (this.used.set(St(e) || e, performance.now()), this.stats.lazyLoads++);
      let r = null;
      try {
        r = new AudioBuffer({
          length: n[0].length,
          numberOfChannels: n.length,
          sampleRate: t,
        });
        for (let e = 0; e < n.length; e++) r.copyToChannel(n[e], e);
      } catch {
        r = null;
      }
      if (!r && this.ac)
        try {
          let e = this.ac.createBuffer(n.length, n[0].length, t);
          for (let t = 0; t < n.length; t++) e.getChannelData(t).set(n[t]);
          r = e;
        } catch {}
      if (r && !this.addBuf(e, r)) {
        this.onBuffer?.(e);
        return;
      }
      let i = n.length * n[0].length * 4;
      (this.stats.count++,
        (this.stats.bytes += i),
        this.bytesOf.set(e, i),
        r || this.raw.set(e, { sr: t, ch: n }),
        this.onBuffer?.(e));
    }
    waiters = new Map();
    whenReady(e, t, n = !1) {
      let r = this.bufs.get(e);
      if (r) {
        t(r);
        return;
      }
      let i = this.waiters.get(e);
      (i || this.waiters.set(e, (i = [])),
        i.push(t),
        n && !this.pending.has(e) && this.request([e]));
    }
    addBuf(e, t) {
      let n = this.waiters.get(e);
      n && this.waiters.delete(e);
      let r = e.startsWith(`ir/`);
      if ((!r || !n) && (this.bufs.set(e, t), e.startsWith(`sfx/`))) {
        let n = e.slice(4, e.lastIndexOf(`/`)),
          r = this.vars.get(n);
        (r || this.vars.set(n, (r = [])), r.push(t));
      }
      if (n)
        for (let e of n)
          try {
            e(t);
          } catch {}
      return !r || !n;
    }
    ac = null;
    adopt(e) {
      if (
        ((this.ac = e),
        this.release(
          [...this.bufs.keys()].filter(
            (t) => t.startsWith(`ir/`) && !t.endsWith(`/${e.sampleRate}`),
          ),
        ),
        this.raw.size)
      ) {
        for (let [t, n] of this.raw) {
          let r = e.createBuffer(n.ch.length, n.ch[0].length, n.sr);
          (n.ch.forEach((e, t) => r.getChannelData(t).set(e)),
            this.addBuf(t, r));
        }
        this.raw.clear();
      }
    }
    ext = null;
    put(e, t, n) {
      n ? this.store(e, t, n) : this.pending.delete(e);
    }
    request(e) {
      let t = e.filter((e) => !this.bufs.has(e) && !this.pending.has(e));
      if (!t.length) return;
      for (let e of t) this.pending.add(e);
      if (this.ext && !(t = this.ext(t)).length) return;
      let n = `lazy:${++this.reqSeq}`;
      (this.reqIds.set(n, t),
        this.send({
          type: `render`,
          quality: this.quality,
          mobile: this.mobile,
          ids: t,
          tag: n,
        }));
    }
    want(e) {
      (xt(e) && this.used.set(e, performance.now()),
        !(this.bufs.has(e) || this.pending.has(e) || !yt(e)) &&
          this.request([e]));
    }
    wantSfx(e) {
      if (!vt.has(e) || (this.used.set(e, performance.now()), this.vars.has(e)))
        return;
      let t = `sfx/${e}/*`;
      this.pending.has(t) || this.request([t]);
    }
    touch(e, t) {
      this.used.set(e, t);
    }
    gc(e = performance.now()) {
      if (this.pinned) return 0;
      let t = null,
        n = 0,
        r = In[this.m],
        i = Ln[this.m];
      for (let a of this.bufs.keys()) {
        if (!xt(a)) continue;
        let o = St(a);
        e - (this.used.get(o || a) ?? 0) > (o ? r : i)
          ? (t ??= []).push(a)
          : (n += this.bytesOf.get(a) ?? 0);
      }
      t && this.release(t);
      let a = t ? t.length : 0;
      return (
        n > Rn[this.m] && (a += this.evictLru(n - Rn[this.m], e)),
        (this.stats.lazyReleased += a),
        a
      );
    }
    evictLru(e, t) {
      let n = new Map();
      for (let e of this.bufs.keys()) {
        if (!xt(e)) continue;
        let r = St(e) || e,
          i = this.used.get(r) ?? 0;
        if (t - i < zn) continue;
        let a = n.get(r);
        (a || n.set(r, (a = { last: i, ids: [], bytes: 0 })),
          a.ids.push(e),
          (a.bytes += this.bytesOf.get(e) ?? 0));
      }
      let r = [...n.values()].sort((e, t) => e.last - t.last),
        i = 0;
      for (let t of r) {
        if (e <= 0) break;
        (this.release(t.ids), (e -= t.bytes), (i += t.ids.length));
      }
      return i;
    }
    requestRadio(e, t) {
      let n = [];
      for (let e of this.bufs.keys()) yt(e) && n.push(e);
      this.send({
        type: `radio`,
        quality: this.quality,
        mobile: this.mobile,
        station: e,
        ks: t,
        have: n,
      });
    }
    isPending(e) {
      return this.pending.has(e);
    }
    release(e) {
      for (let t of e) {
        if (!this.bufs.delete(t)) continue;
        let e = St(t);
        e && this.vars.delete(e);
        let n = this.bytesOf.get(t) ?? 0;
        (this.bytesOf.delete(t),
          (this.stats.bytes -= n),
          this.stats.released++);
      }
    }
    releaseIRs() {
      ((this.dropIR = !0),
        this.release([...this.bufs.keys()].filter((e) => e.startsWith(`ir/`))));
    }
    memStats() {
      let e = 0,
        t = 0,
        n = 0,
        r = 0,
        i = 0;
      for (let [a, o] of this.bytesOf)
        this.bufs.has(a) &&
          (yt(a) ? ((t += o), n++, bt(a) ? (r += o) : (i += o)) : (e += o));
      let a = (e) => +(e / 1048576).toFixed(1);
      return {
        coreMB: a(e),
        onDemandMB: a(t),
        radioMB: a(r),
        worldLazyMB: a(i),
        onDemand: n,
        pending: this.pending.size,
        released: this.stats.released,
        lazyLoads: this.stats.lazyLoads,
        lazyReleased: this.stats.lazyReleased,
        worker: !!this.worker,
        spawns: this.stats.spawns,
      };
    }
    get(e) {
      return this.bufs.get(e);
    }
    has(e) {
      return this.bufs.has(e);
    }
    variants(e) {
      return this.vars.get(e);
    }
    get ready() {
      return this.stats.doneAt > 0;
    }
    get size() {
      return this.bufs.size;
    }
    ids() {
      return [...this.bufs.keys()];
    }
  };
