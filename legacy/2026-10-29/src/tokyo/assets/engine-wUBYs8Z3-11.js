// tokyo/assets/engine-wUBYs8Z3 11 — push
// Lines 3216-3926 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
var Kr = class {
    scene;
    maxTextureSize;
    hooks;
    owner = new WeakMap();
    enabled = yr;
    releasing = !1;
    settled = new WeakMap();
    matTex = new WeakMap();
    texGen = 0;
    waitingGeo = new Set();
    pendTex = new Set();
    removed = [];
    tracking = 0;
    constructor(e, t = 1 / 0, n = {}) {
      ((this.scene = e),
        (this.maxTextureSize = t),
        (this.hooks = n),
        this.installDetachHook());
    }
    claim(e, t = this.scene.children) {
      for (let n of t) this.owner.has(n) || this.owner.set(n, e);
    }
    ownerOf(e) {
      return this.owner.get(e);
    }
    isStaticRoot(e) {
      return gr.has(this.owner.get(e) ?? ``);
    }
    trackDetached(e) {
      this.tracking = Math.max(0, this.tracking + (e ? 1 : -1));
    }
    installDetachHook() {
      if (!this.enabled) return;
      let e = this,
        t = m.prototype;
      if (t.__gmRemove) return;
      t.__gmRemove = 1;
      let n = t.remove;
      t.remove = function (...t) {
        if (e.tracking > 0 && t.length && this !== e.scene) {
          let n = this;
          for (; n.parent && n.parent !== e.scene;) n = n.parent;
          if (n.parent === e.scene)
            for (let r of t)
              r &&
                r.parent === this &&
                e.removed.push({ child: new WeakRef(r), top: new WeakRef(n) });
          e.removed.length > 4096 &&
            e.removed.splice(0, e.removed.length - 4096);
        }
        return n.apply(this, t);
      };
    }
    peekDetached() {
      let e = [];
      for (let t of this.removed) {
        let n = t.child.deref(),
          r = t.top.deref();
        n &&
          r &&
          !n.parent &&
          this.isStaticRoot(r) &&
          !e.includes(n) &&
          e.push(n);
      }
      return e;
    }
    takeDetached(e) {
      if (!this.removed.length) return [];
      let t = [],
        n = [];
      for (let r of this.removed) {
        let i = r.child.deref(),
          a = r.top.deref();
        if (i && a && !i.parent) {
          if (!this.owner.has(a) || (e && !e.includes(a))) {
            n.push(r);
            continue;
          }
          this.isStaticRoot(a) && !t.includes(i) && t.push(i);
        }
      }
      return ((this.removed = n), t);
    }
    forget(e) {
      for (let t of e.geometries ?? []) this.waitingGeo.delete(t);
      for (let t of e.textures ?? []) this.pendTex.delete(t);
      (this.aliases.clear(), this.texGen++, this.refreshPending());
    }
    texOf(e) {
      let t = this.matTex.get(e),
        n = !!t && t.gen === this.texGen;
      if (t && n && t.compiled) return t.list;
      let r = this.hooks.uniformsOf?.(e);
      if (t && n && !r) return t.list;
      let i = [],
        a = (e) => {
          let t = e;
          t && t.isTexture && !i.includes(t) && i.push(t);
        };
      for (let t in e) a(e[t]);
      for (let t of [e.uniforms, r]) if (t) for (let e in t) a(t[e]?.value);
      return (
        this.matTex.set(e, { list: i, compiled: !!r, gen: this.texGen }),
        i
      );
    }
    staleTexLists(e = this.scene.children) {
      let t = [],
        n = new Set();
      for (let r of e)
        r.traverse((e) => {
          let r = e.material;
          for (let e of Array.isArray(r) ? r : r ? [r] : []) {
            if (n.has(e)) continue;
            n.add(e);
            let r = this.matTex.get(e);
            if (!r) continue;
            let i = [],
              a = (e) => {
                let t = e;
                t &&
                  t.isTexture &&
                  !t.isRenderTargetTexture &&
                  wr(t) >= vr &&
                  i.push(t);
              };
            for (let t in e) a(e[t]);
            for (let t of [e.uniforms, this.hooks.uniformsOf?.(e)])
              if (t) for (let e in t) a(t[e]?.value);
            i.some((e) => !r.list.includes(e)) && t.push(e.name || e.type);
          }
        });
      return { n: t.length, names: t.slice(0, 12) };
    }
    unreleased() {
      let e = new Map(),
        t = new Set();
      for (let n of this.scene.children)
        this.isStaticRoot(n) &&
          n.traverse((n) => {
            let r = n.material;
            for (let n of Array.isArray(r) ? r : r ? [r] : []) {
              if (t.has(n)) continue;
              t.add(n);
              let r = (t) => {
                let n = t;
                if (
                  !n ||
                  !n.isTexture ||
                  n.isRenderTargetTexture ||
                  n.__rel ||
                  n.userData?.keepCpu ||
                  e.has(n)
                )
                  return;
                let r = wr(n);
                r >= vr && this.hooks.uploaded?.(n) && e.set(n, r);
              };
              for (let e in n) r(n[e]);
              for (let e of [n.uniforms, this.hooks.uniformsOf?.(n)])
                if (e) for (let t in e) r(e[t]?.value);
            }
          });
      let n = 0;
      for (let t of e.values()) n += t / 1048576;
      return {
        n: e.size,
        mb: Math.round(n * 10) / 10,
        names: [...e.keys()].map((e) => e.name || `?`).slice(0, 12),
      };
    }
    meshTex(e, t) {
      let n = Array.isArray(e.material)
        ? e.material
        : e.material
          ? [e.material]
          : [];
      for (let e of n) for (let n of this.texOf(e)) t.includes(n) || t.push(n);
    }
    prepare(e = [], t, n = {}) {
      let r = this.prepareSteps(e, t, n);
      for (;;) {
        let e = r.next();
        if (e.done) return e.value;
      }
    }
    *prepareSteps(e = [], t, n = {}) {
      if (!this.enabled) return [];
      t && this.texGen++;
      let r = [],
        i = new Set(),
        a = new Set();
      if (t) for (let e of t) this.isStaticRoot(e) && r.push(e);
      else
        for (let e of this.scene.children)
          this.isStaticRoot(e)
            ? r.push(e)
            : e.traverse((e) => {
                let t = e;
                if (!t.geometry || !t.material) return;
                a.add(t.geometry);
                let n = [];
                this.meshTex(t, n);
                for (let e of n) e.image && i.add(e.image);
              });
      let o = t ? this.takeDetached(t) : [];
      L.detached += o.length;
      let s = r.length + e.length;
      r.push(...e, ...o);
      let c = !!t,
        l = [],
        u = this.maxTextureSize,
        d = [],
        f = [],
        p = 0;
      for (let e = 0; e < r.length; e++) {
        let t = zr && e < s,
          o = (e) => {
            let r = e;
            if (!r.geometry || !r.material || !Ur(e)) return;
            let o = r.geometry;
            if (a.has(o)) return;
            (p++, Hr(o), t && !Wr(e) && Vr(o));
            let s = Rr(o, Wr(e)),
              f = 0;
            for (let e of s)
              e.onUploadCallback === br &&
                e.usage === 35044 &&
                !e.__rel &&
                Pr(e);
            if (c) {
              for (let e of s) f += e.array.byteLength;
              if (f >= _r) {
                let e = !1;
                for (let t of s)
                  !t.__rel &&
                    t.__gm &&
                    t.usage === 35044 &&
                    ((t.__up ?? 0) > 0 ||
                      ((t.onUploadCallback = Ir), (e = !0)));
                e && this.waitingGeo.add(o);
              }
              this.settled.set(e, { g: o, m: r.material });
            }
            ((d.length = 0), this.meshTex(r, d));
            for (let e of d) {
              if (
                e.__gm ||
                e.userData?.keepCpu ||
                e.isRenderTargetTexture ||
                i.has(e.image)
              )
                continue;
              let t = e.image;
              n.clamp !== !1 &&
                (u < 1 / 0 &&
                  R(t) &&
                  Math.max(t.width, t.height) > u &&
                  !e.userData?.noClamp &&
                  !l.includes(e) &&
                  l.push(e),
                Fr(e, !!this.hooks.uploaded?.(e)));
            }
          };
        for (f.push(r[e]); f.length;) {
          let e = f.pop(),
            t = e.children;
          for (let e = t.length - 1; e >= 0; e--) f.push(t[e]);
          let n = p;
          (o(e), p !== n && p % 6 == 0 && (yield));
        }
      }
      if (l.length) {
        this.scanAliases(t ? [...t, ...e] : void 0);
        for (let e of l) this.clamp(e);
        this.aliases.clear();
      }
      return o;
    }
    clamp(e) {
      let t = e.image,
        n = this.maxTextureSize;
      if (
        !R(t) ||
        !(n < 1 / 0) ||
        e.version > 3 ||
        (e.__up ?? 0) > 0 ||
        this.hooks.uploaded?.(e)
      )
        return;
      let r = t.width,
        i = t.height,
        a = Math.max(r, i);
      if (a <= n) return;
      let o = n / a,
        s = Math.max(1, Math.round(r * o)),
        c = Math.max(1, Math.round(i * o)),
        l = performance.now();
      try {
        let n = document.createElement(`canvas`);
        ((n.width = s), (n.height = c));
        let a = n.getContext(`2d`);
        if (!a) return;
        ((a.imageSmoothingEnabled = !0),
          (a.imageSmoothingQuality = `high`),
          a.drawImage(t, 0, 0, s, c));
        let o = ((r * i - s * c) * 4 * (1 + 4 / 3)) / 1048576;
        ((L.clampedMB += o),
          L.clampedAt.length < 32 &&
            L.clampedAt.push(
              `${e.name || `?`} ${r}×${i}→${s}×${c} ${(performance.now() - l).toFixed(1)}ms`,
            ),
          (t.width = 1),
          (t.height = 1),
          (e.image = n),
          (e.needsUpdate = !0),
          e.__gm && (e.__v = e.version));
        let u = this.aliases.get(t);
        if (u)
          for (let t of u)
            t !== e &&
              ((t.image = n),
              (t.needsUpdate = !0),
              t.__gm && (t.__v = t.version));
      } catch {}
    }
    aliases = new Map();
    scanAliases(e) {
      this.aliases.clear();
      let t = (e) => {
        let t = e;
        if (!t.material) return;
        let n = [];
        this.meshTex(t, n);
        for (let e of n) {
          if (!R(e.image)) continue;
          let t = this.aliases.get(e.image);
          (t || this.aliases.set(e.image, (t = [])),
            t.includes(e) || t.push(e));
        }
      };
      if (e) for (let n of e) n.traverse(t);
      else this.scene.traverse(t);
    }
    release() {
      let e = this.releaseSteps();
      for (; !e.next().done;);
    }
    *releaseSteps(e) {
      if (!this.enabled || this.releasing) return;
      this.releasing = !0;
      let t = 0,
        n = performance.now(),
        r = () => {
          let e = performance.now();
          ((t += e - n), (n = e));
        };
      try {
        let t = [],
          n = 0,
          i = [],
          a = [];
        for (let t of this.scene.children)
          this.isStaticRoot(t) ? (!e || e.includes(t)) && i.push(t) : a.push(t);
        let o = this.takeDetached(e);
        ((L.detached += o.length), i.push(...o));
        let s = [];
        for (let e of i)
          for (s.push(e); s.length;) {
            let e = s.pop(),
              i = e.children;
            for (let e = 0; e < i.length; e++) s.push(i[e]);
            let a = e;
            if (a.geometry && a.material) {
              let n = this.settled.get(e);
              (!n || n.g !== a.geometry || n.m !== a.material) &&
                Ur(e) &&
                t.push(a);
            }
            ++n % 400 == 0 && (r(), yield);
          }
        if (((L.passMeshes = t.length), !t.length)) {
          this.refreshPending();
          return;
        }
        let c = new Set(),
          l = new Set(),
          u = [];
        for (let e of a)
          for (s.push(e); s.length;) {
            let e = s.pop(),
              t = e.children;
            for (let e = 0; e < t.length; e++) s.push(t[e]);
            let i = e;
            if (i.geometry && i.material) {
              (c.add(i.geometry), (u.length = 0), this.meshTex(i, u));
              for (let e of u) e.image && l.add(e.image);
            }
            ++n % 400 == 0 && (r(), yield);
          }
        let d = new Map(),
          f = new Set(),
          p = 0;
        for (let e of t) {
          ((u.length = 0), this.meshTex(e, u));
          for (let e of u) {
            if (!e.image && !e.mipmaps?.length) continue;
            let t = e.image ?? e,
              n = d.get(t);
            (n || d.set(t, (n = [])), n.includes(e) || n.push(e));
          }
          let t = e.geometry;
          (!f.has(t) && !c.has(t) && (f.add(t), this.releaseGeo(t, Wr(e))),
            this.settled.set(e, { g: t, m: e.material }),
            ++p % 24 == 0 && (r(), yield));
        }
        p = 0;
        for (let [e, t] of d)
          (l.has(e) || this.releaseTexGroup(e, t),
            ++p % 16 == 0 && (r(), yield));
        this.refreshPending();
      } finally {
        (r(), (L.passMs = Math.round(t * 10) / 10), (this.releasing = !1));
      }
    }
    releaseGeo(e, t = !1) {
      let n = [];
      for (let r of Rr(e, t))
        r.__rel ||
          (!r.__gm && r.onUploadCallback === br && r.usage === 35044 && Pr(r),
          r.__gm && n.push(r));
      if (!n.length) return;
      let r = 0,
        i = !0;
      for (let e of n)
        ((r += e.array.byteLength),
          (e.version !== e.__v || (e.__up ?? 0) > 1 || e.usage !== 35044) &&
            (i = !1));
      if (!i || r < _r) return;
      Hr(e);
      let a = !1;
      for (let e of n)
        (e.__up ?? 0) > 0 ? jr(e) : ((a = !0), (e.onUploadCallback = Ir));
      a && this.waitingGeo.add(e);
    }
    releaseTexGroup(e, t) {
      let n = t[0];
      if (!n || n.__rel) return;
      let r = !!e?.data;
      if (!R(e) && !r) return;
      let i = e.width ?? 0,
        a = e.height ?? 0;
      if (wr(n) < vr || i * a <= 1) return;
      let o = (e) =>
          e.__gm ? e.version === e.__v && (e.__up ?? 0) <= 1 : e.version <= 3,
        s = (e) => (e.__gm && (e.__up ?? 0) >= 1) || !!this.hooks.uploaded?.(e);
      if (!t.some((e) => e.userData?.keepCpu || !o(e))) {
        if (t.every(s)) {
          for (let e of t) Mr(e);
          return;
        }
        for (let e of t) {
          if (e.__pend) continue;
          ((e.__pend = 1), this.pendTex.add(e), e.__gm || Fr(e, !1));
          let n = e.onUpdate;
          e.onUpdate = (r) => {
            if ((n?.call(e, r), t.every((e) => o(e) && s(e))))
              for (let e of t) Mr(e);
          };
        }
      }
    }
    refreshPending() {
      let e = 0;
      for (let t of this.waitingGeo) {
        let n = !1;
        for (let e of Rr(t)) !e.__rel && e.onUploadCallback === Ir && (n = !0);
        n ? e++ : this.waitingGeo.delete(t);
      }
      L.pendingGeo = e;
      for (let e of this.pendTex) e.__rel && this.pendTex.delete(e);
      L.pendingTex = this.pendTex.size;
    }
    neverDrawn(e = 64, t) {
      let n = [];
      if (!this.waitingGeo.size) return n;
      let r = new Set(this.waitingGeo),
        i = new u();
      for (let a of this.scene.children)
        if (
          this.isStaticRoot(a) &&
          (a.traverse((a) => {
            let o = a;
            n.length >= e ||
              !o.isMesh ||
              !r.has(o.geometry) ||
              (t &&
                o.geometry.boundingSphere &&
                (i.copy(o.geometry.boundingSphere).applyMatrix4(o.matrixWorld),
                Math.hypot(i.center.x - t.x, i.center.z - t.z) - i.radius >
                  t.r)) ||
              (r.delete(o.geometry), n.push(o));
          }),
          n.length >= e)
        )
          break;
      return n;
    }
  },
  qr =
    typeof navigator < `u` &&
    typeof document < `u` &&
    /^Apple/.test(navigator.vendor || ``),
  Jr = class e {
    raster = { n: 0, totalMs: 0, maxMs: 0, lastMs: 0 };
    barrierCtx = null;
    budgetMs = 6;
    lastUsedMs = 0;
    frameNo = 0;
    inFrame = !1;
    sliceStart = 0;
    sliceFrame = -1;
    waiters = [];
    posted = !1;
    rot = 0;
    channel = typeof MessageChannel < `u` ? new MessageChannel() : null;
    resolved = Promise.resolve();
    static HIDDEN_MS = 20;
    constructor() {
      (this.channel && (this.channel.port1.onmessage = () => this.wake()),
        typeof document < `u` &&
          document.addEventListener(`visibilitychange`, () => {
            document.hidden && this.waiters.length && this.post();
          }));
    }
    frame(e) {
      ((this.lastUsedMs =
        this.sliceFrame === this.frameNo
          ? Math.min(99, performance.now() - this.sliceStart)
          : 0),
        this.frameNo++,
        (this.budgetMs = e),
        this.waiters.length && this.post());
    }
    remaining() {
      let t = performance.now();
      return (
        this.sliceFrame !== this.frameNo &&
          ((this.sliceFrame = this.frameNo), (this.sliceStart = t)),
        (typeof document < `u` && document.hidden
          ? e.HIDDEN_MS
          : this.budgetMs) -
          (t - this.sliceStart)
      );
    }
    rasterBarrier() {
      if (!qr) return 0;
      let e = this.barrierCtx;
      if (!e) {
        let t = document.createElement(`canvas`);
        if (
          ((t.width = t.height = 2),
          (e = this.barrierCtx = t.getContext(`2d`)),
          !e)
        )
          return 0;
      }
      let t = performance.now();
      try {
        (e.fillRect(0, 0, 1, 1), e.getImageData(0, 0, 1, 1));
      } catch {
        return 0;
      }
      let n = performance.now() - t,
        r = this.raster;
      return (
        r.n++,
        (r.totalMs += n),
        (r.lastMs = n),
        n > r.maxMs && (r.maxMs = n),
        n
      );
    }
    shouldYield() {
      return this.remaining() <= 0;
    }
    yield() {
      return this.remaining() > 0 ? this.resolved : this.nextFrame();
    }
    nextFrame() {
      return new Promise((e) => {
        (this.waiters.push(e),
          typeof document < `u` && document.hidden && this.post());
      });
    }
    async run(e) {
      for (;;) {
        let t = e.next();
        if (t.done) return t.value;
        this.remaining() <= 0 && (await this.nextFrame());
      }
    }
    get waiting() {
      return this.waiters.length;
    }
    idleWorker(e, t = {}) {
      return new Yr(e, t);
    }
    post() {
      this.posted ||
        ((this.posted = !0),
        this.channel
          ? this.channel.port2.postMessage(0)
          : setTimeout(() => this.wake(), 0));
    }
    wake() {
      ((this.posted = !1),
        (this.sliceStart = performance.now()),
        (this.sliceFrame = this.frameNo));
      let e = this.waiters;
      if (!e.length) return;
      this.waiters = [];
      let t = e.length,
        n = this.rot++ % t;
      for (let r = 0; r < t; r++) e[(n + r) % t]();
    }
  },
  Yr = class {
    create;
    opts;
    onmessage = null;
    onerror = null;
    w = null;
    inFlight = 0;
    timer = 0;
    idleMs;
    perJob;
    spawns = 0;
    constructor(e, t = {}) {
      ((this.create = e),
        (this.opts = t),
        (this.idleMs = Math.max(0, t.idleMs ?? 1e4)),
        (this.perJob = Math.max(1, t.repliesPerJob ?? 1)));
    }
    get alive() {
      return !!this.w;
    }
    get pending() {
      return this.inFlight;
    }
    post(e, t = []) {
      let n = this.ensure();
      ((this.inFlight += this.perJob), this.disarm(), n.postMessage(e, t));
    }
    terminate() {
      (this.disarm(),
        (this.inFlight = 0),
        (this.w &&= (this.w.terminate(), null)));
    }
    ensure() {
      if (this.w) return this.w;
      let e = this.create();
      return (
        this.spawns++,
        (e.onmessage = (e) => {
          this.inFlight = Math.max(0, this.inFlight - 1);
          try {
            this.onmessage?.(e);
          } finally {
            this.inFlight || this.arm();
          }
        }),
        (e.onerror = (e) => {
          ((this.inFlight = Math.max(0, this.inFlight - this.perJob)),
            this.onerror?.(e),
            this.inFlight || this.arm());
        }),
        (this.w = e),
        e
      );
    }
    arm() {
      (this.disarm(),
        (this.timer = setTimeout(() => {
          ((this.timer = 0),
            !this.inFlight &&
              this.w &&
              (this.w.terminate(),
              (this.w = null),
              this.opts.name &&
                typeof location < `u` &&
                new URLSearchParams(location.search).has(`debug`) &&
                console.info(
                  `[work] idle worker '${this.opts.name}' terminated (${this.spawns} spawn${this.spawns > 1 ? `s` : ``})`,
                )));
        }, this.idleMs)));
    }
    disarm() {
      (this.timer && clearTimeout(this.timer), (this.timer = 0));
    }
  },
  Xr = 1500,
  Zr = 8e3,
  Qr = 15e3,
  $r = 6e3,
  ei = 1e3,
  ti = 64 << 20,
  ni = [4],
  ri = 24;
