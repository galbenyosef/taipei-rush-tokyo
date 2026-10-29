// tokyo/assets/world-CAmHK742 31 — countersout
// Lines 9293-10257 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var Tc = class e {
    renderer;
    anisotropy;
    size;
    slotPx;
    perRow;
    slotCount;
    headless;
    scale;
    whitePx;
    white;
    tex = null;
    canvas = null;
    g = null;
    src = null;
    owner;
    slots = new Map();
    rects = new Map();
    ghostOwner;
    ghosts = new Map();
    disposed = !1;
    paintCount = new Map();
    gens = new Map();
    stealer = null;
    whiteOnly = null;
    countersOut = {
      slotCount: 0,
      slotsUsed: 0,
      sitesResident: 0,
      paints: 0,
      repaints: 0,
      evictions: 0,
      uploads: 0,
      repaintsPerSec: 0,
      missed: 0,
      full: 0,
      defers: 0,
      stepMaxMs: 0,
      steals: 0,
      maxRepaintsPerSite: 0,
      everPainted: 0,
      painterMaxMs: 0,
      painterMaxKey: ``,
      fontWarmMs: 0,
      reclaims: 0,
      dropped: 0,
      droppedKeys: [],
    };
    repaintWindowAt = 0;
    repaintWindowN = 0;
    lastUploadAt = -1 / 0;
    client;
    measures = new Xs();
    mainMeasure = null;
    canvasDirty = !1;
    stepKind = ``;
    workerAllowed = !1;
    loading = !0;
    ready = !1;
    scratch = new Wo();
    static DUMMY = { u0: 0, v0: 0, u1: 1, v1: 1 };
    static DUMMY_WHITE = { u0: 0.5, v0: 0.5, u1: 0.5, v1: 0.5 };
    constructor(t, n, r = 4) {
      ((this.renderer = t),
        (this.anisotropy = r),
        (this.size = n ? gt.mobile : gt.desktop),
        (this.slotPx = n ? ht.mobile : ht.desktop),
        (this.scale = this.slotPx / 512),
        (this.perRow = Math.floor(this.size / this.slotPx)),
        (this.slotCount = this.perRow * this.perRow),
        (this.owner = Array(this.slotCount).fill(null)),
        (this.ghostOwner = Array(this.slotCount).fill(null)),
        (this.headless = !t || typeof document > `u`),
        (this.whitePx = Math.max(ac, Math.round(ic * this.scale))));
      let i = this.whitePx / 2 / this.size;
      ((this.white = this.headless
        ? e.DUMMY_WHITE
        : { u0: i, v0: i, u1: i, v1: i }),
        (this.client = this.headless
          ? null
          : new $s(
              fc
                ? null
                : () =>
                    new Worker(
                      new URL(
                        `/tokyo/assets/artWorker-B424lVEq.js`,
                        `` + import.meta.url,
                      ),
                      { type: `module`, name: `sites-art` },
                    ),
            )),
        this.client && n && (this.client.idleMs = 4e3),
        this.client &&
          (this.countersOut.worker = this.client.usable
            ? `deferred until the load settles`
            : (this.client.off ?? ``)));
    }
    gameReady() {
      this.ready = !0;
    }
    allowWorker() {
      this.workerAllowed ||
        ((this.workerAllowed = !0),
        (this.loading = !1),
        (this.ready = !0),
        this.client?.usable && (this.countersOut.worker = ``));
    }
    worker() {
      return this.workerAllowed && this.client?.usable ? this.client : null;
    }
    get created() {
      return this.tex !== null;
    }
    get slotsUsed() {
      let e = 0;
      for (let t of this.owner) t !== null && e++;
      return e;
    }
    get slotsFree() {
      return this.slotCount - this.slotsUsed;
    }
    get stats() {
      let e = this.countersOut;
      ((e.slotCount = this.slotCount),
        (e.slotsUsed = this.slotsUsed),
        (e.sitesResident = this.slots.size),
        (e.everPainted = this.paintCount.size));
      let t = $();
      return (
        t - this.repaintWindowAt >= 1e3 &&
          ((e.repaintsPerSec = this.repaintWindowN),
          (this.repaintWindowN = 0),
          (this.repaintWindowAt = t)),
        e
      );
    }
    get counters() {
      return this.stats;
    }
    rectsGen(e) {
      return this.gens.get(e) ?? 0;
    }
    paintsOf(e) {
      return this.paintCount.get(e) ?? 0;
    }
    setStealer(e) {
      this.stealer = e;
    }
    sinceUpload() {
      return this.lastUploadAt === -1 / 0 ? 1 / 0 : $() - this.lastUploadAt;
    }
    get texture() {
      return this.ensure();
    }
    ensure() {
      if (this.tex) return this.tex;
      if (this.headless)
        return (
          (this.tex = new ee()),
          (this.tex.name = `sites-atlas-headless`),
          this.tex
        );
      let e = this.size,
        t = new fe(null, e, e, B, _);
      ((t.name = `sites-atlas`),
        (t.source.dataReady = !1),
        (t.colorSpace = c),
        (t.flipY = !1),
        (t.generateMipmaps = !0),
        (t.minFilter = le),
        (t.magFilter = ge),
        (t.wrapS = t.wrapT = ie),
        (t.anisotropy = this.anisotropy),
        (t.unpackAlignment = 4),
        (t.needsUpdate = !0),
        (this.tex = t));
      try {
        (this.renderer.initTexture(t),
          this.seedWhite() || (this.beginSlotCanvas(0), this.upload(0)));
      } catch (e) {
        console.warn(`[init] sites atlas allocation failed`, e);
      }
      return t;
    }
    ensureCanvas() {
      if (this.g) return this.g;
      if (this.headless) return null;
      let e = document.createElement(`canvas`);
      ((e.width = this.slotPx), (e.height = this.slotPx));
      let t = e.getContext(`2d`);
      return t
        ? ((this.canvas = e),
          (this.g = t),
          (this.src = new ee(e)),
          (this.src.name = `sites-atlas-src`),
          this.warmFontCache(),
          t)
        : null;
    }
    warmFontCache() {
      if (this.headless || typeof document > `u`) return;
      let e = $();
      try {
        let e = document.createElement(`canvas`);
        e.width = e.height = 16;
        let t = e.getContext(`2d`);
        if (!t) return;
        for (let e of [ec, tc])
          for (let n of [14, 48])
            ((t.font = `900 ${n}px ${e}`), t.fillText(`國街豆漿一`, 0, 14));
      } catch {}
      this.countersOut.fontWarmMs = Math.round(($() - e) * 100) / 100;
    }
    beginSlotCanvas(e) {
      this.canvasDirty &&
        this.canvas &&
        ((this.canvas.width = this.slotPx), (this.canvasDirty = !1));
      let t = this.ensureCanvas();
      t &&
        (t.setTransform(1, 0, 0, 1, 0, 0),
        (t.globalAlpha = 1),
        (t.globalCompositeOperation = `source-over`),
        (t.fillStyle = `#808080`),
        t.fillRect(0, 0, this.slotPx, this.slotPx),
        e === 0 &&
          ((t.fillStyle = `#ffffff`),
          t.fillRect(0, 0, this.whitePx, this.whitePx)));
    }
    slotOrigin(e) {
      return [
        (e % this.perRow) * this.slotPx,
        Math.floor(e / this.perRow) * this.slotPx,
      ];
    }
    upload(e) {
      if (!this.renderer || !this.tex || !this.src) return;
      let [t, n] = this.slotOrigin(e),
        r = $();
      (this.renderer.copyTextureToTexture(
        this.src,
        this.tex,
        null,
        new ve(t, n),
        0,
        0,
      ),
        (this.countersOut.syncUploads =
          (this.countersOut.syncUploads ?? 0) + 1),
        this.noteUpload(r));
    }
    noteUpload(e) {
      let t = this.countersOut;
      (t.uploads++, (this.lastUploadAt = $()));
      let n = this.lastUploadAt - e;
      ((t.uploadMsSum = (t.uploadMsSum ?? 0) + n),
        n > (t.uploadMaxMs ?? 0) &&
          (t.uploadMaxMs = Math.round(n * 100) / 100));
    }
    noteRaster(e, t, n) {
      let r = this.countersOut;
      e > (r.rasterMaxMs ?? 0) &&
        ((r.rasterMaxMs = Math.round(e * 100) / 100),
        (r.rasterMaxKey = `${t}/${n}`));
    }
    snapshot() {
      if (!this.canvas || typeof createImageBitmap != `function`) return null;
      let e = { bmp: null, done: !1, abandoned: !1 },
        t = $();
      try {
        createImageBitmap(this.canvas).then(
          (t) => {
            (e.abandoned ? t.close() : (e.bmp = t), (e.done = !0));
          },
          () => {
            e.done = !0;
          },
        );
      } catch {
        return null;
      }
      let n = $() - t;
      return (
        n > (this.countersOut.snapCallMaxMs ?? 0) &&
          (this.countersOut.snapCallMaxMs = Math.round(n * 100) / 100),
        e
      );
    }
    seedWhite() {
      let e = this.renderer;
      if (!e || !this.tex) return !1;
      let t = e.properties.get(this.tex).__webglTexture;
      if (!t) return !1;
      let n = e.getContext(),
        r = this.whitePx,
        i = new Uint8Array(r * r * 4).fill(255);
      (e.state.bindTexture(n.TEXTURE_2D, t, n.TEXTURE0),
        e.state.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !1),
        e.state.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1));
      try {
        (n.texSubImage2D(
          n.TEXTURE_2D,
          0,
          0,
          0,
          r,
          r,
          n.RGBA,
          n.UNSIGNED_BYTE,
          i,
        ),
          n.generateMipmap(n.TEXTURE_2D));
      } finally {
        e.state.unbindTexture();
      }
      return !0;
    }
    mainMeasurer() {
      if (this.mainMeasure) return this.mainMeasure;
      if (typeof document > `u`) return null;
      let e = document.createElement(`canvas`);
      e.width = e.height = 8;
      let t = e.getContext(`2d`);
      return t ? (this.mainMeasure = new zs(t)) : null;
    }
    *resolveMeasures(e, t) {
      let n = this.countersOut;
      n.measured = (n.measured ?? 0) + e.length;
      let r = this.worker();
      if (r) {
        this.stepKind = `measure-post`;
        let i = r.measure(e);
        try {
          for (; r.poll(i);)
            if (((this.stepKind = `measure-wait`), yield nc, !t())) return !1;
        } finally {
          i.done || (i.abandoned = !0);
        }
        let a = i.reply;
        if (a && a.t === `m` && a.r.length === e.length * 9) {
          for (let t = 0; t < e.length; t++)
            this.measures.put(e[t], a.r, t * 9);
          return !0;
        }
        n.worker = r.off ?? ``;
      }
      let i = this.mainMeasurer();
      if (!i) return !0;
      let a = $();
      for (let n = 0; n < e.length; n++)
        if (
          ((this.stepKind = `measure`),
          this.measures.putMetrics(e[n], i.text(e[n][0], e[n][1])),
          n < e.length - 1 && $() - a > uc)
        ) {
          if ((yield, !t())) return !1;
          a = $();
        }
      return !0;
    }
    uploadBitmap(e, t) {
      let n = this.renderer;
      if (!n || !this.tex) return !1;
      let r = n.properties.get(this.tex).__webglTexture;
      if (!r) return !1;
      let i = n.getContext(),
        [a, o] = this.slotOrigin(e),
        s = $();
      (n.state.bindTexture(i.TEXTURE_2D, r, i.TEXTURE0),
        n.state.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1),
        n.state.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1));
      try {
        (i.texSubImage2D(i.TEXTURE_2D, 0, a, o, i.RGBA, i.UNSIGNED_BYTE, t),
          i.generateMipmap(i.TEXTURE_2D));
      } finally {
        n.state.unbindTexture();
      }
      return (
        (this.countersOut.snapUploads =
          (this.countersOut.snapUploads ?? 0) + 1),
        this.noteUpload(s),
        !0
      );
    }
    addSlot(e) {
      let t = this.slots.get(e);
      if (!t || t.length >= oc || this.disposed) return null;
      let n = -1;
      for (let e = 0; e < this.slotCount && n < 0; e++)
        this.owner[e] === null && this.ghostOwner[e] === null && (n = e);
      for (let e = 0; e < this.slotCount && n < 0; e++)
        this.owner[e] === null && (n = e);
      if (n < 0) return null;
      let r = this.ghostOwner[n];
      return (r && this.dropGhost(r), (this.owner[n] = e), t.push(n), t);
    }
    allocSlot(e, t = 1) {
      let n = this.slots.get(e);
      if (n) return n;
      if (this.disposed) return null;
      this.ensure();
      let r = Math.max(1, Math.min(oc, t | 0));
      if (this.slotsFree < r && this.stealer) {
        this.countersOut.steals++;
        try {
          this.stealer(e, r);
        } catch (e) {
          console.warn(`[test] sites atlas stealer failed`, e);
        }
        if (this.disposed) return null;
      }
      let i = [];
      for (let e = 0; e < this.slotCount && i.length < r; e++)
        this.owner[e] === null && this.ghostOwner[e] === null && i.push(e);
      for (let e = 0; e < this.slotCount && i.length < r; e++)
        this.owner[e] === null &&
          this.ghostOwner[e] !== null &&
          !i.includes(e) &&
          i.push(e);
      if (i.length < r) return null;
      for (let t of i) {
        let n = this.ghostOwner[t];
        (n && this.dropGhost(n), (this.owner[t] = e));
      }
      return (this.slots.set(e, i), i);
    }
    freeSlot(e) {
      let t = this.slots.get(e);
      if (!t) return;
      this.countersOut.evictions++;
      for (let n of t) this.owner[n] === e && (this.owner[n] = null);
      this.slots.delete(e);
      let n = this.rects.get(e);
      if ((this.rects.delete(e), n && n.size)) {
        for (let n of t) this.owner[n] === null && (this.ghostOwner[n] = e);
        this.ghosts.set(e, { slots: t.slice(), rects: n });
      }
    }
    dropGhost(e) {
      let t = this.ghosts.get(e);
      if (t) {
        for (let n of t.slots)
          this.ghostOwner[n] === e && (this.ghostOwner[n] = null);
        this.ghosts.delete(e);
      }
    }
    reclaim(e, t, n) {
      let r = this.ghosts.get(e);
      if (!r || this.disposed || r.slots.length < Math.max(1, n)) return !1;
      for (let t of r.slots)
        if (this.owner[t] !== null || this.ghostOwner[t] !== e) return !1;
      if (t) {
        for (let e of t) if (!r.rects.has(e.key)) return !1;
      }
      for (let t of r.slots) ((this.owner[t] = e), (this.ghostOwner[t] = null));
      return (
        this.slots.set(e, r.slots),
        this.rects.set(e, r.rects),
        this.ghosts.delete(e),
        this.countersOut.reclaims++,
        !0
      );
    }
    slotsOf(e) {
      return this.slots.get(e) ?? null;
    }
    dryPack(e, t = 1, n = !0) {
      let r = [];
      for (let e = 0; e < Math.max(1, t); e++) r.push(n ? e : e + 1);
      let { placed: i, missed: a } = this.planFor(r, e ?? gc),
        o = 0;
      for (let e of i)
        o = Math.max(
          o,
          (e.slot === r[0] ? 0 : this.slotPx * r.indexOf(e.slot)) +
            e.y +
            e.h +
            rc,
        );
      let s = this.slotPx * Math.max(1, t);
      return {
        arts: (e ?? []).length,
        height: o,
        capacity: s,
        fill: s > 0 ? o / s : 0,
        missed: a,
      };
    }
    noteTierDown(e, t) {
      let n = `${this.slotPx}:${e.length}:${e[0]?.key ?? ``}:${t.upto}:${t.factor}`;
      if (wc.has(n)) return;
      wc.add(n);
      let r = e
        .filter((e) => vc(e) <= t.upto)
        .map((e) => `${e.key}@${Math.round(yc(t, vc(e)) * 100)}%`);
      r.length &&
        console.info(
          `[init] sites atlas tier-down (${this.slotPx} px slot): ${r.join(`, `)} — painted smaller to keep 5% slot headroom`,
        );
    }
    packHeight(e, t) {
      let n = 0;
      for (let r of t)
        n = Math.max(
          n,
          (r.slot === e[0] ? 0 : this.slotPx * e.indexOf(r.slot)) +
            r.y +
            r.h +
            rc,
        );
      return n;
    }
    pack(e, t) {
      let n = this.packAt(e, t, null);
      if (t.length === 0 || this.fitsGate(e, n)) return n;
      let r = _c;
      for (let e = 0; e < t.length; e++) {
        let n = vc(t[e]);
        n < r && (r = n);
      }
      for (let i of Cc) {
        if (i.upto < r) continue;
        let a = this.packAt(e, t, i);
        if (
          ((a.missed.length < n.missed.length ||
            (a.missed.length === n.missed.length &&
              this.packHeight(e, a.placed) < this.packHeight(e, n.placed))) &&
            (n = a),
          this.fitsGate(e, a))
        )
          return (this.noteTierDown(t, i), a);
      }
      return n;
    }
    fitsGate(e, t) {
      let n = this.slotPx * Math.max(1, e.length);
      return t.missed.length === 0 && this.packHeight(e, t.placed) <= n * pc;
    }
    planFor(e, t) {
      let n = this.pack(e, t);
      if (t.length === 0 || this.fitsGate(e, n))
        return { keep: t, dropped: hc, ...n };
      let r = t.slice(),
        i = [];
      for (;;) {
        let t = -1,
          a = 0,
          o = 0;
        for (let e = 0; e < r.length; e++) {
          let n = vc(r[e]);
          if (n >= _c) continue;
          let i = r[e].w * r[e].h;
          (t < 0 || n < a || (n === a && i > o)) && ((t = e), (a = n), (o = i));
        }
        if (
          t < 0 ||
          (i.push(r[t].key),
          r.splice(t, 1),
          (n = this.pack(e, r)),
          r.length === 0 || this.fitsGate(e, n))
        )
          break;
      }
      return { keep: r, dropped: i, ...n };
    }
    planPack(e, t = 1, n = !0) {
      let r = [];
      for (let e = 0; e < Math.max(1, t); e++) r.push(n ? e : e + 1);
      let i = this.planFor(r, e ?? gc);
      return { keep: i.keep, dropped: i.dropped };
    }
    noteDropped(e, t) {
      let n = this.countersOut;
      n.dropped += t.length;
      for (let r = 0; r < t.length && !(n.droppedKeys.length >= mc); r++)
        n.droppedKeys.push(`${e}/${t[r]}`);
      console.warn(
        `[test] sites atlas trim ${e} (${this.slotPx} px slot): ${t.join(`,`)} — no rung of the shrink ladder fit`,
      );
    }
    packAt(e, t, n) {
      let r = this.slotPx,
        i = this.scale,
        a = [...t].sort(
          (e, t) => t.h - e.h || t.w - e.w || (e.key < t.key ? -1 : 1),
        ),
        o = [],
        s = [],
        c = 0,
        l = 0,
        u = 0,
        d = 0,
        f = () => {
          ((l = 0),
            (u = 0),
            (d = 0),
            e[c] === 0 && ((l = this.whitePx + rc), (d = this.whitePx + rc)));
        };
      f();
      for (let t of a) {
        let a = n ? yc(n, vc(t)) : 1,
          p = Math.max(1, Math.min(r - 8, Math.round(t.w * i * a))),
          m = Math.max(1, Math.min(r - 8, Math.round(t.h * i * a))),
          h = p + 8,
          g = m + 8,
          _ = !1;
        for (; c < e.length;) {
          if ((l + h > r && ((l = 0), (u += d), (d = 0)), u + g <= r)) {
            _ = !0;
            break;
          }
          (c++, c < e.length && f());
        }
        if (!_) {
          s.push(t.key);
          continue;
        }
        (o.push({ key: t.key, slot: e[c], x: l + rc, y: u + rc, w: p, h: m }),
          (l += h),
          (d = Math.max(d, g)));
      }
      return { placed: o, missed: s };
    }
    *paint(e, t, n = 1) {
      if (!t || t.length === 0 || this.reclaim(e, t, n)) return;
      let r = this.allocSlot(e, n);
      if (!r) {
        (this.countersOut.full++,
          console.warn(
            `[test] sites atlas full — ${e} wanted ${n} of ${this.slotCount} slots, uses white`,
          ));
        return;
      }
      let i = (this.paintCount.get(e) ?? 0) + 1;
      (this.paintCount.set(e, i),
        i > 1
          ? (this.countersOut.repaints++,
            this.repaintWindowN++,
            i - 1 > this.countersOut.maxRepaintsPerSite &&
              (this.countersOut.maxRepaintsPerSite = i - 1))
          : this.countersOut.paints++);
      let a = this.planFor(r, t);
      for (; (a.missed.length > 0 || a.dropped.length > 0) && this.addSlot(e);)
        a = this.planFor(this.slots.get(e), t);
      let o = a.placed,
        s = a.missed;
      (a.dropped.length && this.noteDropped(e, a.dropped),
        s.length &&
          ((this.countersOut.missed += s.length),
          console.warn(
            `[test] sites atlas slot overflow ${e}: ${s.join(`,`)}`,
          )));
      let c = new Map();
      for (let e of t) c.set(e.key, e);
      let l = new Map(),
        u = this.size;
      for (let e of o) {
        let [t, n] = this.slotOrigin(e.slot),
          r = t + e.x,
          i = n + e.y;
        l.set(e.key, {
          u0: (r + 0.5) / u,
          u1: (r + e.w - 0.5) / u,
          v0: (i + e.h - 0.5) / u,
          v1: (i + 0.5) / u,
        });
      }
      if (this.headless) {
        this.rects.set(e, l);
        return;
      }
      let d = () => !this.disposed && this.slots.get(e) === r;
      if (!(
        this.sinceUpload() < sc && (this.countersOut.defers++, yield, !d())
      ))
        for (let t of r) {
          let n = o.filter((e) => e.slot === t);
          if (n.length === 0) continue;
          let i = $(),
            a = Array(n.length).fill(null),
            s = this.loading && !this.ready,
            u = this.loading,
            f = [];
          if (!u) for (let e = 0; e < n.length; e++) f.push(e);
          for (let t = 0; f.length > 0 && !u; t++) {
            let r = t >= dc,
              i = [],
              o = [],
              s = new Set();
            for (let t of f) {
              let l = n[t],
                f = c.get(l.key),
                p = r ? null : new Zs(this.measures),
                m = new Bs(p ?? this.mainMeasurer(), this.scratch);
              this.stepKind = `rec:${l.key}`;
              let h = $(),
                g = !1;
              try {
                f.paint(m.g, l.w, l.h, new Oe(je(`site-art`, e, l.key)));
              } catch {
                g = !0;
              }
              let _ = $() - h;
              if (
                (_ > this.countersOut.painterMaxMs &&
                  ((this.countersOut.painterMaxMs = Math.round(_ * 100) / 100),
                  (this.countersOut.painterMaxKey = `${e}/${l.key}`)),
                g)
              ) {
                u = !0;
                break;
              }
              if (p && p.missed) {
                (i.push(t),
                  (this.countersOut.rerecords =
                    (this.countersOut.rerecords ?? 0) + 1));
                for (let e of p.queue) {
                  let t = JSON.stringify(e);
                  s.has(t) || (s.add(t), o.push(e));
                }
              } else a[t] = m.take();
              if ((yield, !d())) return;
            }
            if (((f = i), u || f.length === 0)) break;
            if (o.length && !(yield* this.resolveMeasures(o, d))) return;
          }
          let p = !1,
            m = this.tex,
            h = this.worker();
          if (!u && h) {
            this.stepKind = `post`;
            let e = [];
            for (let t = 0; t < n.length; t++)
              e.push({ x: n[t].x, y: n[t].y, w: n[t].w, h: n[t].h, ops: a[t] });
            let r = h.paint(this.slotPx, t === 0 ? this.whitePx : 0, rc, e),
              i = null;
            try {
              for (; h.poll(r);)
                if (((this.stepKind = `paint-wait`), yield nc, !d())) return;
              let e = r.reply;
              (e && e.t === `p` && (i = e.bmp),
                (this.stepKind = `upload`),
                i && this.tex === m && (p = this.uploadBitmap(t, i)));
            } finally {
              (r.done || (r.abandoned = !0), i?.close());
            }
            p
              ? (this.countersOut.workerPaints =
                  (this.countersOut.workerPaints ?? 0) + 1)
              : (this.countersOut.worker = h.off ?? `upload failed`);
          }
          if (!p) {
            ((this.countersOut.mainPaints =
              (this.countersOut.mainPaints ?? 0) + 1),
              this.beginSlotCanvas(t));
            let r = this.g;
            if (!r) return;
            for (let t = 0; t < n.length; t++) {
              let i = n[t],
                o = c.get(i.key),
                l = a[t];
              if (((this.canvasDirty = !0), Ws(r, i.x, i.y, i.w, i.h, rc), l)) {
                let t = Vs(l);
                for (;;) {
                  this.stepKind = `replay:${i.key}`;
                  let n = $(),
                    a = Us(r, l, t, lc),
                    o = $() - n;
                  if (
                    (o > (this.countersOut.replayMaxMs ?? 0) &&
                      (this.countersOut.replayMaxMs =
                        Math.round(o * 100) / 100),
                    a)
                  )
                    break;
                  if ((yield, !d())) return;
                  this.stepKind = `flush:${i.key}`;
                  let s = $(),
                    c = this.snapshot();
                  if (
                    (c && (c.abandoned = !0),
                    this.noteRaster($() - s, e, i.key),
                    yield,
                    !d())
                  )
                    return;
                }
              } else {
                this.stepKind = `paint:${i.key}`;
                let t = $();
                try {
                  o.paint(r, i.w, i.h, new Oe(je(`site-art`, e, i.key)));
                } catch (t) {
                  console.error(`[test] sites art painter failed`, e, i.key, t);
                }
                let n = $() - t;
                !s &&
                  n > this.countersOut.painterMaxMs &&
                  ((this.countersOut.painterMaxMs = Math.round(n * 100) / 100),
                  (this.countersOut.painterMaxKey = `${e}/${i.key}`));
              }
              if ((r.restore(), (this.canvasDirty = !1), yield, !d())) return;
              if (t < n.length - 1) {
                this.stepKind = `flush:${i.key}`;
                let t = $(),
                  n = this.snapshot();
                if (
                  (n && (n.abandoned = !0),
                  this.noteRaster($() - t, e, i.key),
                  yield,
                  !d())
                )
                  return;
              }
            }
            this.stepKind = `snapshot`;
            let i = $(),
              o = this.snapshot();
            if ((this.noteRaster($() - i, e, n[n.length - 1].key), o)) {
              let e = this.tex;
              try {
                for (let e = 0; !o.done && e < cc; e++)
                  if (
                    ((this.countersOut.snapWaitFrames =
                      (this.countersOut.snapWaitFrames ?? 0) + 1),
                    (this.stepKind = `snapshot-wait`),
                    yield nc,
                    !d())
                  )
                    return;
                ((this.stepKind = `upload`),
                  o.bmp && this.tex === e && (p = this.uploadBitmap(t, o.bmp)));
              } finally {
                ((o.abandoned = !0), o.bmp?.close(), (o.bmp = null));
              }
            }
            p || this.upload(t);
          }
          let g = this.rects.get(e);
          (g || this.rects.set(e, (g = new Map())),
            (t === r[0] || !g.size) && this.gens.set(e, this.rectsGen(e) + 1));
          for (let e of n) g.set(e.key, l.get(e.key));
          let _ = $() - i;
          if (
            (_ > this.countersOut.stepMaxMs &&
              (this.countersOut.stepMaxMs = Math.round(_ * 100) / 100),
            yield,
            !d())
          )
            return;
        }
    }
    view(t) {
      let n = this.white,
        r = () => this.sinceUpload();
      return this.headless
        ? { white: n, r: () => e.DUMMY, sinceUpload: r }
        : {
            white: n,
            r: (e) => this.rects.get(t)?.get(e) ?? n,
            sinceUpload: r,
          };
    }
    whiteView() {
      if (!this.whiteOnly) {
        let e = this.white;
        this.whiteOnly = {
          white: e,
          r: () => e,
          sinceUpload: () => this.sinceUpload(),
        };
      }
      return this.whiteOnly;
    }
    painted(e, t) {
      if (!t || t.length === 0) return !0;
      let n = this.rects.get(e);
      if (!n) return !1;
      for (let e of t) if (!n.has(e.key)) return !1;
      return !0;
    }
    slotsInUse() {
      return this.slots.size;
    }
    releaseGpu() {
      this.slots.size ||
        !this.tex ||
        this.headless ||
        (this.tex.dispose(),
        (this.tex = null),
        this.src?.dispose(),
        (this.src = null),
        this.canvas && ((this.canvas.width = 1), (this.canvas.height = 1)),
        (this.canvas = null),
        (this.g = null),
        this.rects.clear(),
        this.ghosts.clear(),
        this.ghostOwner.fill(null),
        this.measures.clear(),
        (this.mainMeasure = null),
        (this.scratch = new Wo()),
        (this.countersOut.releases = (this.countersOut.releases ?? 0) + 1));
    }
    dispose() {
      ((this.disposed = !0),
        this.client?.dispose(),
        this.tex?.dispose(),
        this.src?.dispose(),
        (this.tex = null),
        (this.src = null),
        this.canvas && ((this.canvas.width = 1), (this.canvas.height = 1)),
        (this.canvas = null),
        (this.g = null),
        this.slots.clear(),
        this.rects.clear(),
        this.paintCount.clear(),
        (this.stealer = null),
        (this.whiteOnly = null),
        this.owner.fill(null),
        this.ghosts.clear(),
        this.ghostOwner.fill(null));
    }
  },
  Ec = `site`,
  Dc = class {
    world;
    label;
    cs = [];
    fs = [];
    disposed = !1;
    constructor(e, t) {
      ((this.world = e), (this.label = t));
    }
    get colliderCount() {
      return this.cs.length;
    }
    get floorCount() {
      return this.fs.length;
    }
    addBox(e, t, n, r, i = 0, a = 1e3, o = Ec) {
      let s = this.world.addBox(e, t, n, r, i, a, o);
      return (this.cs.push(s), s);
    }
    addOBB(e, t, n, r, i, a = 0, o = 1e3, s = Ec) {
      let c = this.world.addOBB(e, t, n, r, i, a, o, s);
      return (this.cs.push(c), c);
    }
    addCircle(e, t, n, r = 0, i = 1e3, a = Ec) {
      let o = this.world.addCircle(e, t, n, r, i, a);
      return (this.cs.push(o), o);
    }
    addFloor(e, t, n, r, i, a = i, o = 0, s = Ec) {
      let c = this.world.addFloor(e, t, n, r, i, a, o, s);
      return (this.fs.push(c), c);
    }
    dispose() {
      if (!this.disposed) {
        this.disposed = !0;
        for (let e = 0; e < this.cs.length; e++) this.world.remove(this.cs[e]);
        for (let e = 0; e < this.fs.length; e++)
          this.world.removeFloor(this.fs[e]);
        ((this.cs.length = 0), (this.fs.length = 0));
      }
    }
  };
