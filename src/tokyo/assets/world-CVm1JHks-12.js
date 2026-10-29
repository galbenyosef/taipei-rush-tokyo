// tokyo/assets/world-CVm1JHks 12 — canvas
// Lines 3666-4040 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var Rn = 4,
  zn = new L(),
  Bn = class {
    name;
    scale;
    anisotropy;
    canvas = null;
    g = null;
    entries = new Map();
    order = [];
    rects = new Map();
    queue = [];
    slots = new Map();
    slotTick = 0;
    seed = 1;
    width;
    height = 0;
    texture = null;
    upTex = null;
    upY = 0;
    strip = null;
    stripTex = null;
    maxUploadMs = 0;
    placeholder;
    started = !1;
    ready = !1;
    paintMs = 0;
    maxStepMs = 0;
    listeners = [];
    releaseListeners = [];
    uploaded = !1;
    paints = 0;
    constructor(e, t = 1, n = 4) {
      ((this.name = e),
        (this.scale = t),
        (this.anisotropy = n),
        (this.width = Math.round(2048 * t)));
      let r = document.createElement(`canvas`);
      r.width = r.height = 4;
      let i = r.getContext(`2d`);
      ((i.fillStyle = `#fff`),
        i.fillRect(0, 0, 4, 4),
        (this.placeholder = this.makeTexture(r)),
        (this.placeholder.name = `interiors-${e}-placeholder`),
        this.add(`white`, 16, 16, (e, t, n) => {
          ((e.fillStyle = `#fff`), e.fillRect(-4, -4, t + 8, n + 8));
        }));
    }
    makeTexture(e) {
      let t = new W(e);
      return (
        (t.colorSpace = y),
        (t.anisotropy = this.anisotropy),
        (t.generateMipmaps = !0),
        (t.minFilter = se),
        (t.magFilter = ce),
        t
      );
    }
    add(e, t, n, r) {
      if (this.entries.has(e) || this.started) return;
      let i = { name: e, w: t, h: n, sw: 0, sh: 0, paint: r, x: 0, y: 0 };
      (this.entries.set(e, i), this.order.push(i));
    }
    reserve(e, t, n, r) {
      if (this.slots.has(e) || this.started) return;
      let i = { w: t, h: n, names: [], ids: [], used: [] };
      for (let a = 0; a < r; a++) {
        let r = `${e}#${a}`;
        (i.names.push(r),
          i.ids.push(null),
          i.used.push(0),
          this.add(r, t, n, (e, t, n) => {
            ((e.fillStyle = `#d8d4cc`), e.fillRect(-4, -4, t + 8, n + 8));
          }));
      }
      this.slots.set(e, i);
    }
    onReady(e) {
      (this.listeners.push(e), this.live && this.texture && e(this.texture));
    }
    onRelease(e) {
      this.releaseListeners.push(e);
    }
    release() {
      if (this.started) {
        for (let e of this.releaseListeners)
          try {
            e(this.placeholder);
          } catch (e) {
            console.error(`[interiors] atlas release listener failed`, e);
          }
        (this.texture?.dispose(),
          this.upTex && this.upTex !== this.texture && this.upTex.dispose(),
          (this.texture = this.upTex = null),
          (this.upY = 0),
          this.freeStrip(),
          this.canvas && (this.canvas.width = this.canvas.height = 1),
          (this.canvas = null),
          (this.g = null),
          (this.queue = []),
          (this.started = this.ready = this.uploaded = !1));
        for (let e of this.slots.values()) (e.ids.fill(null), e.used.fill(0));
      }
    }
    begin() {
      if (this.started) return;
      this.started = !0;
      let e = performance.now(),
        t = this.scale,
        n = this.width;
      for (let e of this.order)
        ((e.sw = Math.max(2, Math.ceil(e.w * t))),
          (e.sh = Math.max(2, Math.ceil(e.h * t))));
      let r = [...this.order].sort((e, t) => t.sh - e.sh || t.sw - e.sw),
        i = 0,
        a = 0,
        o = 0,
        s = Math.round(4096 * t);
      for (let e of r) {
        let t = e.sw + 8,
          r = e.sh + 8;
        if ((i + t > n && ((i = 0), (a += o), (o = 0)), a + r > s)) {
          (console.warn(`[interiors] atlas '${this.name}' full at ${e.name}`),
            (e.x = 0),
            (e.y = 0));
          continue;
        }
        ((e.x = i + Rn), (e.y = a + Rn), (i += t), (o = Math.max(o, r)));
      }
      let c = Math.min(s, Math.ceil((a + o) / 64) * 64);
      this.height = c;
      let l = document.createElement(`canvas`);
      ((l.width = n),
        (l.height = c),
        (this.canvas = l),
        (this.g = l.getContext(`2d`)),
        (this.g.fillStyle = `#808080`),
        this.g.fillRect(0, 0, n, c));
      for (let e of this.order) {
        let t = (e.x + 0.5) / n,
          r = (e.x + e.sw - 0.5) / n,
          i = 1 - (e.y + 0.5) / c,
          a = 1 - (e.y + e.sh - 0.5) / c;
        this.rects.set(e.name, { u0: t, v0: a, u1: r, v1: i });
      }
      ((this.queue = [...this.order]), (this.paintMs += performance.now() - e));
    }
    paintEntry(e) {
      let t = this.g;
      this.seed = Vn(e.name);
      let n = () => (
          (this.seed = (this.seed * 1664525 + 1013904223) >>> 0),
          this.seed / 4294967296
        ),
        r = this.scale;
      (t.save(),
        t.translate(e.x, e.y),
        t.beginPath(),
        t.rect(-4, -4, e.sw + 8, e.sh + 8),
        t.clip(),
        r !== 1 && t.scale(e.sw / e.w, e.sh / e.h));
      try {
        e.paint(t, e.w, e.h, n);
      } catch (t) {
        console.error(`[interiors] atlas painter failed`, e.name, t);
      }
      t.restore();
    }
    step(e) {
      if (this.ready) return !0;
      this.started || this.begin();
      let t = performance.now();
      for (; this.queue.length;) {
        let n = this.queue.shift(),
          r = performance.now();
        this.paintEntry(n);
        let i = performance.now();
        if (
          (i - r > this.slowest.ms &&
            ((this.slowest.ms = i - r), (this.slowest.name = n.name)),
          i - t > e)
        )
          break;
      }
      let n = performance.now() - t;
      return (
        (this.paintMs += n),
        (this.maxStepMs = Math.max(this.maxStepMs, n)),
        this.queue.length || this.complete(),
        this.ready
      );
    }
    slowest = { name: ``, ms: 0 };
    finish() {
      if (this.ready) return;
      this.started || this.begin();
      let e = performance.now();
      for (; this.queue.length;) this.paintEntry(this.queue.shift());
      ((this.paintMs += performance.now() - e), this.complete());
    }
    complete() {
      !this.ready && this.canvas && ((this.ready = !0), this.paints++);
    }
    uploadStep(e, t = 256) {
      if (this.uploaded) return !0;
      if (!this.ready || !this.canvas) return !1;
      let n = performance.now(),
        r = this.width,
        i = this.height;
      try {
        if (this.upTex) {
          let n = Math.min(t, i - this.upY);
          this.strip ||
            ((this.strip = document.createElement(`canvas`)),
            (this.stripTex = new W(this.strip)));
          let a = this.strip;
          (a.width !== r || a.height !== n) && ((a.width = r), (a.height = n));
          let o = a.getContext(`2d`);
          (o.clearRect(0, 0, r, n),
            o.drawImage(this.canvas, 0, this.upY, r, n, 0, 0, r, n));
          let s = this.upY + n >= i;
          ((this.upTex.generateMipmaps = s),
            zn.set(0, i - this.upY - n),
            e.copyTextureToTexture(this.stripTex, this.upTex, null, zn),
            (this.upY += n),
            s && this.goLive());
        } else {
          let t = new m(null, r, i);
          ((t.colorSpace = y),
            (t.anisotropy = this.anisotropy),
            (t.generateMipmaps = !0),
            (t.minFilter = se),
            (t.magFilter = ce),
            (t.flipY = !0),
            (t.name = `interiors-${this.name}`),
            (t.source.dataReady = !1),
            (t.needsUpdate = !0),
            e.initTexture(t),
            (this.upTex = t),
            (this.upY = 0));
        }
      } catch (t) {
        (console.warn(
          `[interiors] atlas strip upload failed — uploading the page at once`,
          t,
        ),
          this.uploadWhole(e));
      }
      let a = performance.now() - n;
      return (a > this.maxUploadMs && (this.maxUploadMs = a), this.uploaded);
    }
    uploadWhole(e) {
      if (!this.canvas) return;
      this.upTex && this.upTex.dispose();
      let t = this.makeTexture(this.canvas);
      ((t.name = `interiors-${this.name}`), (t.needsUpdate = !0));
      try {
        e.initTexture(t);
      } catch (e) {
        console.warn(`[interiors] atlas upload failed`, e);
      }
      ((this.upTex = null), (this.texture = t), this.finishLive());
    }
    goLive() {
      let e = this.upTex;
      ((e.generateMipmaps = !0),
        (this.texture = e),
        (this.upTex = null),
        this.finishLive());
    }
    finishLive() {
      ((this.uploaded = !0),
        this.freeStrip(),
        this.canvas &&
          ((this.canvas.width = this.canvas.height = 1), (this.g = null)));
      for (let e of this.listeners)
        try {
          e(this.texture);
        } catch (e) {
          console.error(`[interiors] atlas ready listener failed`, e);
        }
    }
    freeStrip() {
      (this.strip && (this.strip.width = this.strip.height = 1),
        (this.strip = null),
        (this.stripTex = null));
    }
    upload(e) {
      let t = 0;
      for (; !this.uploadStep(e, 1024) && this.ready && t++ < 64;);
    }
    dyn(e, t, n, r) {
      let i = this.slots.get(e);
      if (!i || !this.texture || !r) return this.r(`white`);
      this.slotTick++;
      let a = i.ids.indexOf(t);
      if (a < 0) {
        a = 0;
        for (let e = 1; e < i.ids.length; e++) i.used[e] < i.used[a] && (a = e);
        let e = this.entries.get(i.names[a]),
          o = document.createElement(`canvas`);
        ((o.width = e.sw), (o.height = e.sh));
        let s = o.getContext(`2d`);
        this.seed = Vn(t);
        let c = () => (
          (this.seed = (this.seed * 1664525 + 1013904223) >>> 0),
          this.seed / 4294967296
        );
        (s.save(), this.scale !== 1 && s.scale(e.sw / e.w, e.sh / e.h));
        try {
          n(s, e.w, e.h, c);
        } catch (e) {
          console.error(`[interiors] dynamic painter failed`, t, e);
        }
        s.restore();
        try {
          let n = new W(o);
          (r.copyTextureToTexture(
            n,
            this.texture,
            null,
            new L(e.x, this.height - e.y - e.sh),
          ),
            n.dispose(),
            (i.ids[a] = t));
        } catch (e) {
          return (
            console.warn(`[interiors] dynamic slot copy failed`, e),
            this.r(`white`)
          );
        }
      }
      return ((i.used[a] = this.slotTick), this.r(i.names[a]));
    }
    get live() {
      return this.ready && this.uploaded;
    }
    has(e) {
      return this.entries.has(e);
    }
    r(e) {
      return (
        this.rects.get(e) ??
        this.rects.get(`white`) ?? { u0: 0, v0: 0, u1: 0.001, v1: 0.001 }
      );
    }
    sub(e, t, n, r, i) {
      let a = this.r(e);
      return {
        u0: a.u0 + (a.u1 - a.u0) * t,
        v0: a.v0 + (a.v1 - a.v0) * n,
        u1: a.u0 + (a.u1 - a.u0) * r,
        v1: a.v0 + (a.v1 - a.v0) * i,
      };
    }
    info() {
      return {
        name: this.name,
        scale: this.scale,
        w: this.width,
        h: this.height,
        regions: this.order.length,
        started: this.started,
        ready: this.ready,
        uploaded: this.uploaded,
        paints: this.paints,
        paintMs: +this.paintMs.toFixed(1),
        maxStepMs: +this.maxStepMs.toFixed(2),
        maxUploadMs: +this.maxUploadMs.toFixed(2),
        slowest: `${this.slowest.name} ${this.slowest.ms.toFixed(1)}`,
        canvasPx: this.canvas ? this.canvas.width * this.canvas.height : 0,
      };
    }
  };
