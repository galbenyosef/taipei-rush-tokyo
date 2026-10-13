// tokyo__assets__region-tokyo-BcM3fReU 42 — kind
// Lines 21921-23049 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var bm = [
    `frame`,
    `white`,
    `steel`,
    `red`,
    `blue`,
    `yellow`,
    `green`,
    `black`,
    `aviation`,
    `warm`,
    `cyan`,
    `magenta`,
    `orange`,
    `purple`,
    `cream`,
    `wood`,
  ],
  xm = {
    frame: `#2e3032`,
    white: `#f4f4f0`,
    steel: `#9aa0a4`,
    red: `#d01818`,
    blue: `#1a4aa8`,
    yellow: `#f6d000`,
    green: `#1a8a3a`,
    black: `#141416`,
    aviation: `#ff2010`,
    warm: `#ffd8a0`,
    cyan: `#20d0f0`,
    magenta: `#f020a0`,
    orange: `#ff7a10`,
    purple: `#7a2ad0`,
    cream: `#efe6d0`,
    wood: `#5a3a22`,
  },
  Sm = {
    HELI: 1,
    VACANT: 2,
    VACANCY: 3,
    OPEN: 4,
    PARKING: 5,
    BLANK_LIT: 6,
    LED_PANEL: 7,
    TAGS: 8,
    V_KARAOKE: 11,
    V_IZAKAYA: 12,
    V_DENTAL: 13,
    V_KAITORI: 14,
    V_MAHJONG: 15,
    F_STONE_D: 16,
    F_STONE_L: 17,
    F_CHUKO: 18,
    F_TAXFREE: 19,
    F_TOREKA: 20,
    F_KAITORI: 21,
    F_SOBA: 22,
    F_CURRY: 23,
    F_YAKITORI: 24,
    F_TACHINOMI: 25,
    F_KANBUTSU: 26,
    F_SENGYO: 27,
    F_CLEANING: 28,
    L_SAKE: 29,
    N_PLAIN: 30,
    P_PLAIN: 31,
  },
  Cm = {
    TALL_KAITORI: 0,
    TALL_KARAOKE: 1,
    TALL_PLAIN: 2,
    BAND_TAXFREE: 3,
    BAND_TENANT: 4,
    BAND_PLAIN: 5,
  },
  wm = 6,
  Tm = [
    `2F`,
    `3F`,
    `4F`,
    `5F`,
    `6F`,
    `7F`,
    `8F`,
    `9F`,
    `10F`,
    `11F`,
    `12F`,
    `13F`,
    `B1`,
  ],
  Em = {
    akihabara: [
      [Sm.F_CHUKO, Sm.F_TAXFREE, Sm.F_TOREKA, Sm.F_KAITORI],
      [Sm.V_KAITORI, Sm.V_KARAOKE, Sm.V_MAHJONG],
      Cm.TALL_KAITORI,
      Cm.BAND_TAXFREE,
    ],
    kanda: [
      [Sm.F_SOBA, Sm.F_CURRY],
      [Sm.V_IZAKAYA, Sm.V_MAHJONG, Sm.V_DENTAL],
      Cm.TALL_KARAOKE,
      Cm.BAND_TENANT,
    ],
    ginza: [
      [Sm.F_STONE_D, Sm.F_STONE_L],
      [Sm.V_DENTAL, Sm.V_KARAOKE],
      Cm.TALL_PLAIN,
      Cm.BAND_PLAIN,
    ],
    marunouchi: [
      [Sm.F_STONE_D, Sm.F_STONE_L],
      [Sm.V_DENTAL],
      Cm.TALL_PLAIN,
      Cm.BAND_PLAIN,
    ],
    nihonbashi: [
      [Sm.F_STONE_D, Sm.F_STONE_L],
      [Sm.V_DENTAL, Sm.V_IZAKAYA],
      Cm.TALL_PLAIN,
      Cm.BAND_PLAIN,
    ],
    shimbashi: [
      [Sm.F_YAKITORI, Sm.F_TACHINOMI],
      [Sm.V_IZAKAYA, Sm.V_KARAOKE, Sm.V_MAHJONG],
      Cm.TALL_KARAOKE,
      Cm.BAND_TENANT,
    ],
    ueno: [
      [Sm.F_YAKITORI, Sm.F_SOBA],
      [Sm.V_IZAKAYA, Sm.V_KARAOKE],
      Cm.TALL_KARAOKE,
      Cm.BAND_TENANT,
    ],
    ameyoko: [
      [Sm.F_KANBUTSU, Sm.F_SENGYO],
      [Sm.V_IZAKAYA, Sm.V_KAITORI],
      Cm.TALL_KAITORI,
      Cm.BAND_TENANT,
    ],
    default: [
      [Sm.F_CLEANING, Sm.F_SOBA],
      [Sm.V_DENTAL, Sm.V_IZAKAYA, Sm.V_KARAOKE],
      Cm.TALL_KARAOKE,
      Cm.BAND_TENANT,
    ],
  },
  Dm = {
    fascia: 110,
    plate: 50,
    noren: 70,
    lantern: 70,
    vpanel: 140,
    band: 130,
    vbig: 220,
  },
  Om = 0.9,
  km = (e) =>
    `${e.kind}|${e.key}|${e.sub ?? ``}|${e.bg.toString(16)}|${e.fg.toString(16)}|${e.style}`,
  Am = (e) => e === `vbig` || e === `band`,
  jm = (e) => e === `vpanel` || e === `lantern` || e === `vbig`,
  Mm = class {
    renderer;
    W;
    H;
    ch;
    aw;
    bw;
    texture;
    nA;
    nB;
    aRow0 = 4;
    bRow0;
    cells;
    byKey = new Map();
    tiles = new Map();
    pTile = -1;
    pEnt = [];
    pPin = [];
    pShown = [];
    pXZ = [];
    pQ = [];
    queue = [];
    scan = 0;
    lastX = 1e9;
    lastZ = 1e9;
    want = [];
    pumping = !1;
    stale = !1;
    dirty = !1;
    scratchA;
    scratchB;
    pixA = null;
    pixB = null;
    pos = new y();
    stats = {
      painted: 0,
      reused: 0,
      starved: 0,
      lod: 0,
      alt: 0,
      evicted: 0,
      pumped: 0,
      upgraded: 0,
      patched: 0,
      unpatched: 0,
      needFaces: 0,
      needFallback: 0,
      faces: 0,
      paintMs: 0,
      maxPaintMs: 0,
      mipMs: 0,
      pumpMs: 0,
      maxPumpMs: 0,
      scanMs: 0,
      resident: 0,
    };
    constructor(e, t) {
      ((this.renderer = e),
        (this.W = t ? 1024 : 2048),
        (this.ch = t ? 24 : 48),
        (this.aw = this.W / 8),
        (this.bw = this.W / 4),
        (this.H = this.ch * 51),
        (this.bRow0 = 29),
        (this.nA = (this.bRow0 - this.aRow0) * 8),
        (this.nB = (51 - this.bRow0) * 4),
        (this.cells = Array(this.nA + this.nB).fill(null)),
        (this.scratchA = we(this.aw, this.ch)),
        (this.scratchB = we(this.bw, this.ch)));
      for (let [e, t] of [this.scratchA, this.scratchB]) Wi(e, t);
      let [n, r] = we(this.W, this.H);
      (Wi(n, r),
        (r.fillStyle = `#3a3c3e`),
        r.fillRect(0, 0, this.W, this.H),
        this.paintStatic(r),
        this.paintStaticBInto(r));
      let a = new Uint8Array(r.getImageData(0, 0, this.W, this.H).data.buffer);
      n.width = n.height = 1;
      let o = new w(a, this.W, this.H, i, s);
      ((o.name = `tokyo-sign-pool`),
        (o.colorSpace = f),
        (o.flipY = !1),
        (o.generateMipmaps = !0),
        (o.minFilter = S),
        (o.magFilter = E),
        (o.wrapS = o.wrapT = _),
        (o.anisotropy = 8),
        (o.needsUpdate = !0),
        (this.texture = o));
    }
    init() {
      (this.renderer.initTexture(this.texture),
        (this.texture.image.data = new Uint8Array(4)));
    }
    cellRect(e) {
      let t = this.W,
        n = this.H;
      if (e < this.nA) {
        let r = e % 8,
          i = this.aRow0 + Math.floor(e / 8),
          a = r * this.aw,
          o = i * this.ch;
        return {
          u0: (a + 2) / t,
          u1: (a + this.aw - 2) / t,
          v0: (o + 2) / n,
          v1: (o + this.ch - 2) / n,
          rot: !1,
        };
      }
      let r = e - this.nA,
        i = r % 4,
        a = this.bRow0 + Math.floor(r / 4),
        o = i * this.bw,
        s = a * this.ch;
      return {
        u0: (o + 2) / t,
        u1: (o + this.bw - 2) / t,
        v0: (s + 2) / n,
        v1: (s + this.ch - 2) / n,
        rot: !1,
      };
    }
    swatch(e) {
      let t = bm.indexOf(e),
        n = this.aw / 16,
        r = (t * n + n / 2) / this.W,
        i = this.ch / 2 / this.H;
      return { u0: r, u1: r, v0: i, v1: i };
    }
    staticCell(e) {
      let t = (e % 8) * this.aw,
        n = (e >> 3) * this.ch;
      return {
        u0: (t + 2) / this.W,
        u1: (t + this.aw - 2) / this.W,
        v0: (n + 2) / this.H,
        v1: (n + this.ch - 2) / this.H,
      };
    }
    floorTag(e) {
      let t = e <= 0 ? 12 : Math.min(11, e - 2),
        n = ((Sm.TAGS % 8) + Math.floor(t / 5)) * this.aw + (t % 5) * this.ch,
        r = this.ch;
      return {
        u0: (n + 2) / this.W,
        u1: (n + this.ch - 2) / this.W,
        v0: (r + 2) / this.H,
        v1: (r + this.ch - 2) / this.H,
      };
    }
    fallbackOf(e) {
      let t = Em[e.dist ?? this.lotDist] ?? Em.default,
        n = 2166136261;
      for (let t = 0; t < e.key.length; t++)
        n = Math.imul(n ^ e.key.charCodeAt(t), 16777619);
      switch (((n >>>= 0), e.kind)) {
        case `vpanel`:
          return t[1][n % t[1].length];
        case `lantern`:
          return Sm.L_SAKE;
        case `noren`:
          return Sm.N_PLAIN;
        case `plate`:
          return Sm.P_PLAIN;
        case `vbig`:
          return -1 - t[2];
        case `band`:
          return -1 - t[3];
        default:
          return t[0][n % t[0].length];
      }
    }
    shownUv(e, t) {
      if (e >= 0) {
        let n = this.cellRect(e);
        return ((n.rot = jm(this.cells[e]?.d.kind ?? t)), n);
      }
      let n = -2 - e;
      if (n < 0) {
        let e = this.cellRect(this.nA + (-1 - n));
        return ((e.rot = t === `vbig`), e);
      }
      return {
        ...this.staticCell(n),
        rot: t === `vpanel` || t === `lantern` || t === `vbig`,
      };
    }
    desired(e) {
      if (e.cell >= 0 && e.painted) return e.cell;
      if (e.alt) {
        let t = this.byKey.get(e.alt);
        if (t && t.cell >= 0 && t.painted && Am(t.d.kind) === e.b)
          return t.cell;
      }
      return -2 - e.fb;
    }
    allowance = 1 / 0;
    budget(e) {
      this.allowance = e;
    }
    entry(e) {
      let t = km(e),
        n = this.byKey.get(t);
      return (
        n ||
          ((n = {
            key: t,
            d: e,
            b: Am(e.kind),
            cell: -1,
            painted: !1,
            faces: 0,
            pin: 0,
            lastNeed: -1,
            d2: 0xde0b6b3a7640000,
            alt: e.alt ? km(e.alt) : null,
            fb: this.fallbackOf(e),
            queued: !1,
          }),
          this.byKey.set(t, n)),
        n
      );
    }
    beginTile(e) {
      (this.unpin(), (this.pTile = e));
    }
    unpin() {
      for (let e of this.pPin)
        --e.pin <= 0 && e.faces <= 0 && e.cell < 0 && this.byKey.delete(e.key);
      ((this.pPin.length =
        this.pEnt.length =
        this.pShown.length =
        this.pXZ.length =
        this.pQ.length =
          0),
        (this.pTile = -1));
    }
    lot(e, t, n) {
      ((this.lotX = e), (this.lotZ = t), (this.lotDist = n));
    }
    lotDist = ``;
    view(e, t) {
      ((this.camX = e), (this.camZ = t));
    }
    lotX = 0;
    lotZ = 0;
    camX = 1e9;
    camZ = 1e9;
    acquire(e, t) {
      let n = this.entry(e);
      if (n.cell < 0) {
        let t = Dm[e.kind] + 24,
          r =
            (this.lotX - this.camX) ** 2 + (this.lotZ - this.camZ) ** 2 <=
            t * t,
          i = this.allowance > 0 ? this.cellFor(n.b, +!!r) : -1;
        i >= 0
          ? (this.allowance--, this.assign(n, i), this.queue.push(i))
          : r
            ? this.stats.starved++
            : this.stats.lod++;
      } else this.stats.reused++;
      let r;
      if (
        (n.cell >= 0
          ? (r = n.cell)
          : ((r = this.desired(n)), r >= 0 && this.stats.alt++),
        this.pTile !== t)
      )
        return this.shownUv(r, e.kind);
      if ((n.pin++, this.pPin.push(n), r >= 0 && r !== n.cell)) {
        let e = this.cells[r];
        (e.pin++, this.pPin.push(e));
      }
      let i = this.pEnt.length;
      (this.pEnt.push(n), this.pShown.push(r), this.pXZ.push(0, 0));
      let a = this.shownUv(r, e.kind);
      return ((a.face = i), a);
    }
    quad(e, t, n, r) {
      e < 0 ||
        e >= this.pEnt.length ||
        (this.pXZ[e * 2] === 0 &&
          this.pXZ[e * 2 + 1] === 0 &&
          ((this.pXZ[e * 2] = n), (this.pXZ[e * 2 + 1] = r)),
        this.pQ.push(e, t));
    }
    endTile(e, t, n) {
      if (this.pTile !== e) return;
      let r = this.pEnt.length,
        i = new Int32Array(r + 1);
      for (let e = 0; e < this.pQ.length; e += 2) i[this.pQ[e] + 1]++;
      for (let e = 0; e < r; e++) i[e + 1] += i[e];
      let a = new Int32Array(this.pQ.length / 2),
        o = i.slice(0, r);
      for (let e = 0; e < this.pQ.length; e += 2)
        a[o[this.pQ[e]]++] = this.pQ[e + 1] + t;
      let s = {
        ent: this.pEnt.slice(),
        x: new Float32Array(r),
        z: new Float32Array(r),
        qa: i,
        q: a,
        shown: Int32Array.from(this.pShown),
        patch: n,
      };
      for (let e = 0; e < r; e++)
        ((s.x[e] = this.pXZ[e * 2]),
          (s.z[e] = this.pXZ[e * 2 + 1]),
          s.ent[e].faces++);
      (this.release(e),
        this.tiles.set(e, s),
        (this.stats.faces += r),
        this.unpin(),
        (this.stale = !0),
        (this.lastX = 1e9));
    }
    abortTile() {
      this.unpin();
    }
    release(e) {
      let t = this.tiles.get(e);
      if (t) {
        for (let e of t.ent) e.faces--;
        ((this.stats.faces -= t.ent.length), this.tiles.delete(e));
        for (let e of new Set(t.ent))
          e.faces <= 0 && e.cell < 0 && e.pin <= 0 && this.byKey.delete(e.key);
      }
    }
    assign(e, t) {
      let n = this.cells[t];
      (n &&
        ((n.cell = -1),
        (n.painted = !1),
        this.stats.evicted++,
        (this.stale = !0),
        n.faces <= 0 && n.pin <= 0 && this.byKey.delete(n.key)),
        (this.cells[t] = e),
        (e.cell = t),
        (e.painted = !1));
    }
    cellFor(e, t) {
      let n = e ? this.nA + wm : 0,
        r = e ? this.nA + this.nB : this.nA,
        i = -1,
        a = 1 / 0,
        o = -1;
      for (let e = n; e < r; e++) {
        let n = this.cells[e];
        if (!n) return e;
        if (!t || !n.painted || n.pin > 0 || n.lastNeed === this.scan) continue;
        let r = n.faces > 0 ? n.lastNeed : n.lastNeed - 1e6;
        (r < a || (r === a && n.d2 > o)) && ((a = r), (o = n.d2), (i = e));
      }
      return i;
    }
    settle() {
      this.stale && this.reconcile(!1);
    }
    *paintQueued(e) {
      for (; this.queue.length;) {
        e() && (yield);
        let t = this.queue.shift(),
          n = this.cells[t];
        n &&
          (this.paint(t, n.d),
          n.painted || ((n.painted = !0), (this.stale = !0)));
      }
    }
    repaintAll() {
      let e = this.aRow0,
        [t, n] = we(this.W, this.ch * e);
      (Wi(t, n),
        (n.fillStyle = `#3a3c3e`),
        n.fillRect(0, 0, this.W, this.ch * e),
        this.paintStatic(n));
      let r = n.getImageData(0, 0, this.W, this.ch * e);
      this.upload(r.data, this.W, this.ch * e, 0, 0);
      let [i, a] = we(this.bw, this.ch);
      Wi(i, a);
      for (let e = 0; e < wm; e++) {
        (a.setTransform(1, 0, 0, 1, 0, 0),
          a.clearRect(0, 0, this.bw, this.ch),
          this.paintStaticB(a, e));
        let t = this.cellRect(this.nA + e);
        this.upload(
          a.getImageData(0, 0, this.bw, this.ch).data,
          this.bw,
          this.ch,
          Math.round(t.u0 * this.W) - 2,
          Math.round(t.v0 * this.H) - 2,
        );
      }
      ((t.width = t.height = i.width = i.height = 1), (this.dirty = !0));
      for (let e = 0; e < this.cells.length; e++) {
        let t = this.cells[e];
        t && t.painted && !this.queue.includes(e) && this.queue.push(e);
      }
    }
    upload(e, t, n, r, i) {
      let a = new w(e, t, n);
      ((a.flipY = !1), this.pos.set(r, i));
      let o = this.texture,
        s = o.generateMipmaps;
      o.generateMipmaps = !1;
      try {
        this.renderer.copyTextureToTexture(a, o, null, this.pos, 0, 0);
      } finally {
        o.generateMipmaps = s;
      }
    }
    pending() {
      return this.queue.length > 0;
    }
    pump(e) {
      if (!this.queue.length) return;
      let t = performance.now();
      (this.paintQueued(() => performance.now() - t > e).next(), this.flush());
    }
    flush() {
      if (!this.dirty) return;
      this.dirty = !1;
      let e = performance.now(),
        t = this.renderer,
        n = t.properties.get(this.texture);
      if (!n.__webglTexture) return;
      let r = t.getContext();
      (t.state.activeTexture(r.TEXTURE0),
        t.state.bindTexture(r.TEXTURE_2D, n.__webglTexture),
        r.generateMipmap(r.TEXTURE_2D),
        t.state.unbindTexture(),
        (this.stats.mipMs += performance.now() - e));
    }
    residentCount() {
      let e = 0;
      for (let t of this.cells) t && t.faces > 0 && e++;
      return (this.stats.resident = e);
    }
    update(e, t, n) {
      (this.view(e, t),
        (e - this.lastX) ** 2 + (t - this.lastZ) ** 2 >= 36 &&
          ((this.lastX = e),
          (this.lastZ = t),
          this.rescan(e, t),
          this.want.length && n && !this.pumping && this.runPump(n)),
        this.stale && this.reconcile());
    }
    rescan(e, t) {
      let n = performance.now(),
        r = ++this.scan;
      for (let e of this.byKey.values()) e.d2 = 0xde0b6b3a7640000;
      for (let n of this.tiles.values()) {
        let r = n.ent.length;
        for (let i = 0; i < r; i++) {
          let r = n.x[i] - e,
            a = n.z[i] - t,
            o = r * r + a * a,
            s = n.ent[i];
          o < s.d2 && (s.d2 = o);
        }
      }
      let i = this.want;
      i.length = 0;
      for (let e of this.byKey.values()) {
        e.queued = !1;
        let t = Dm[e.d.kind];
        e.faces > 0 &&
          e.d2 <= t * t &&
          ((e.lastNeed = r), e.cell < 0 && (i.push(e), (e.queued = !0)));
      }
      (i.sort((e, t) => e.d2 - t.d2),
        (this.stats.scanMs += performance.now() - n));
    }
    needStats(e, t) {
      let n = 0,
        r = 0;
      for (let i of this.tiles.values())
        for (let a = 0; a < i.ent.length; a++) {
          let o = i.ent[a],
            s = Dm[o.d.kind],
            c = i.x[a] - e,
            l = i.z[a] - t;
          c * c + l * l > s * s ||
            (n++, (i.shown[a] !== o.cell || o.cell < 0) && r++);
        }
      ((this.stats.needFaces = n), (this.stats.needFallback = r));
    }
    async runPump(e) {
      this.pumping = !0;
      try {
        for (; this.want.length;) {
          await e.yield();
          let t = performance.now(),
            n = 0;
          for (; this.want.length;) {
            let r = this.want[0];
            if (r.cell >= 0 || r.faces <= 0 || !r.queued) {
              this.want.shift();
              continue;
            }
            let i = this.cellFor(r.b, 1);
            if (i < 0) {
              this.want.length = 0;
              break;
            }
            if (
              (this.want.shift(),
              (r.queued = !1),
              this.assign(r, i),
              this.paint(i, r.d),
              (r.painted = !0),
              this.stats.pumped++,
              n++,
              performance.now() - t > Om || e.shouldYield())
            )
              break;
          }
          n && (this.flush(), (this.stale = !0), this.reconcile());
          let r = performance.now() - t;
          ((this.stats.pumpMs += r),
            r > this.stats.maxPumpMs && (this.stats.maxPumpMs = +r.toFixed(2)));
        }
      } catch (e) {
        console.warn(`[tokyo-buildings] sign pump stopped`, e);
      } finally {
        this.pumping = !1;
      }
    }
    reconcile(e = !0) {
      ((this.stale = !1), e && this.flush());
      for (let e of this.tiles.values()) {
        let t = e.ent.length;
        for (let n = 0; n < t; n++) {
          let t = e.ent[n],
            r = this.desired(t);
          if (r === e.shown[n]) continue;
          let i = this.shownUv(r, t.d.kind),
            a = !!e.patch;
          for (let t = e.qa[n]; a && t < e.qa[n + 1]; t++)
            a = e.patch.set(e.q[t], i.u0, i.v0, i.u1, i.v1, i.rot);
          if (!a) {
            (this.stats.unpatched++, (this.stale = !0));
            continue;
          }
          (r === t.cell && e.shown[n] < 0 && this.stats.upgraded++,
            (e.shown[n] = r),
            this.stats.patched++);
        }
        e.patch?.flush();
      }
    }
    paint(e, t) {
      let n = performance.now(),
        r = Am(t.kind),
        [i, a] = r ? this.scratchB : this.scratchA,
        o = i.width,
        s = i.height;
      (a.setTransform(1, 0, 0, 1, 0, 0),
        a.clearRect(0, 0, o, s),
        jm(t.kind)
          ? (a.setTransform(0, -1, 1, 0, 0, s), Fm(a, t, s, o))
          : Fm(a, t, o, s),
        a.setTransform(1, 0, 0, 1, 0, 0));
      let c = a.getImageData(0, 0, o, s),
        l = r ? this.pixB : this.pixA;
      (l ||
        ((l = new w(c.data, o, s)),
        (l.flipY = !1),
        r ? (this.pixB = l) : (this.pixA = l)),
        (l.image.data = c.data));
      let u = this.cellRect(e);
      this.pos.set(
        Math.round(u.u0 * this.W) - 2,
        Math.round(u.v0 * this.H) - 2,
      );
      let d = this.texture,
        f = d.generateMipmaps;
      d.generateMipmaps = !1;
      try {
        this.renderer.copyTextureToTexture(l, d, null, this.pos, 0, 0);
      } finally {
        d.generateMipmaps = f;
      }
      ((this.dirty = !0), this.stats.painted++);
      let p = performance.now() - n;
      ((this.stats.paintMs += p),
        p > this.stats.maxPaintMs && (this.stats.maxPaintMs = p));
    }
    paintStatic(e) {
      let t = this.ch,
        n = this.aw,
        r = n / 16;
      bm.forEach((n, i) => I(e, i * r, 0, r, t, xm[n]));
      let i = (r, i) => {
          (e.save(),
            e.translate((r % 8) * n, (r >> 3) * t),
            e.beginPath(),
            e.rect(0, 0, n, t),
            e.clip(),
            i(e, n, t),
            e.restore());
        },
        a = (r, i) => {
          (e.save(),
            e.translate((r % 8) * n, (r >> 3) * t),
            e.beginPath(),
            e.rect(0, 0, n, t),
            e.clip(),
            e.transform(0, -1, 1, 0, 0, t),
            Fm(e, i, t, n),
            e.restore());
        },
        o = (e, t) => i(e, (e, n, r) => Fm(e, t, n, r)),
        s = t / 64;
      (i(Sm.HELI, (e, t, n) => {
        (I(e, 0, 0, t, n, `#4a4c4e`),
          (e.strokeStyle = `#e8e4d8`),
          (e.lineWidth = 4 * s),
          e.beginPath(),
          e.arc(n / 2, n / 2, n * 0.42, 0, Math.PI * 2),
          e.stroke(),
          Ea(
            e,
            `H`,
            n / 2,
            n / 2 + 2 * s,
            n * 0.5,
            n * 0.6,
            `#e8e4d8`,
            `Arial, sans-serif`,
          ));
      }),
        i(Sm.VACANT, (e, t, n) => {
          (I(e, 0, 0, t, n, `#fbfbf8`),
            I(e, 0, 0, t, n * 0.18, `#d01818`),
            Ea(
              e,
              B(`common.tenant.boshu`),
              t / 2,
              n * 0.6,
              t * 0.9,
              n * 0.62,
              `#d01818`,
              sa(),
            ));
        }),
        i(Sm.VACANCY, (e, t, n) => {
          (I(e, 0, 0, t, n, `#1a4aa8`),
            Ea(
              e,
              B(`common.estate.kushitsu`),
              t / 2,
              n / 2,
              t * 0.9,
              n * 0.7,
              `#ffffff`,
              sa(),
            ));
        }),
        i(Sm.OPEN, (e, t, n) => {
          (I(e, 0, 0, t, n, `#f6eedc`),
            Ea(
              e,
              B(`common.door.eigyochu`),
              t / 2,
              n / 2,
              t * 0.9,
              n * 0.72,
              `#b0161c`,
              ca(),
            ));
        }),
        i(Sm.PARKING, (e, t, n) => {
          (I(e, 0, 0, t, n, `#1a4aa8`),
            I(e, 4 * s, 4 * s, n - 8 * s, n - 8 * s, `#ffffff`),
            Ea(
              e,
              `P`,
              n / 2,
              n / 2 + 2 * s,
              n * 0.6,
              n * 0.7,
              `#1a4aa8`,
              `Arial, sans-serif`,
            ),
            Ea(
              e,
              B(`common.estate.tsukigime`),
              (t + n) / 2,
              n / 2,
              t - n - 8 * s,
              n * 0.5,
              `#ffffff`,
              sa(),
            ));
        }),
        i(Sm.BLANK_LIT, (e, t, n) => I(e, 0, 0, t, n, `#f6f4ec`)),
        i(Sm.LED_PANEL, (e, t, n) => {
          I(e, 0, 0, t, n, `#0c0e10`);
          for (let r = 0; r < t; r += 3 * s)
            for (let t = 0; t < n; t += 3 * s)
              I(e, r, t, 1.6 * s, 1.6 * s, `rgba(255,80,40,0.18)`);
        }));
      for (let e = 0; e < 3; e++)
        i(Sm.TAGS + e, (t, n, r) => {
          I(t, 0, 0, n, r, `#2e3032`);
          for (let n = 0; n < 5; n++) {
            let i = Tm[e * 5 + n];
            if (!i) break;
            (I(t, n * r + 3 * s, 3 * s, r - 6 * s, r - 6 * s, `#f8f8f4`),
              Ea(
                t,
                i,
                n * r + r / 2,
                r / 2 + s,
                r * 0.8,
                r * 0.62,
                `#1a1a1a`,
                `Arial, sans-serif`,
              ));
          }
        });
      (a(Sm.V_KARAOKE, {
        kind: `vpanel`,
        key: `trade.karaoke.sign.karaoke`,
        bg: 14162784,
        fg: 16777215,
        style: 0,
      }),
        a(Sm.V_IZAKAYA, {
          kind: `vpanel`,
          key: `trade.izakaya.sign.izakaya`,
          bg: 9051156,
          fg: 16774368,
          style: 0,
        }),
        a(Sm.V_DENTAL, {
          kind: `vpanel`,
          key: `trade.dentist.sign.shika`,
          bg: 16777215,
          fg: 1735322,
          style: 1,
        }),
        a(Sm.V_KAITORI, {
          kind: `vpanel`,
          key: `buildings.fb.kaitori`,
          bg: 16175104,
          fg: 12587024,
          style: 0,
        }),
        a(Sm.V_MAHJONG, {
          kind: `vpanel`,
          key: `trade.mahjong.sign.mahjong`,
          bg: 940586,
          fg: 16777215,
          style: 0,
        }),
        i(Sm.F_STONE_D, (e, t, n) => {
          (I(e, 0, 0, t, n, `#24221f`),
            I(
              e,
              t * 0.3,
              n * 0.42,
              t * 0.4,
              n * 0.16,
              `rgba(216,196,150,0.55)`,
            ),
            I(e, 0, n * 0.9, t, n * 0.1, `rgba(216,196,150,0.35)`));
        }),
        i(Sm.F_STONE_L, (e, t, n) => {
          (I(e, 0, 0, t, n, `#d9d2c4`),
            I(e, t * 0.32, n * 0.4, t * 0.36, n * 0.18, `rgba(40,36,30,0.55)`));
        }),
        o(Sm.F_CHUKO, {
          kind: `fascia`,
          key: `buildings.fb.chuko-pc`,
          bg: 670346,
          fg: 16777215,
          style: 0,
        }),
        o(Sm.F_TAXFREE, {
          kind: `fascia`,
          key: `common.door.tax-free`,
          bg: 15073298,
          fg: 16777215,
          style: 0,
        }),
        o(Sm.F_TOREKA, {
          kind: `fascia`,
          key: `buildings.fb.toreka`,
          bg: 6953648,
          fg: 16777215,
          style: 0,
        }),
        o(Sm.F_KAITORI, {
          kind: `fascia`,
          key: `buildings.fb.kaitori`,
          bg: 16175104,
          fg: 12587024,
          style: 0,
        }),
        o(Sm.F_SOBA, {
          kind: `fascia`,
          key: `trade.soba.sign.kisoba`,
          bg: 1845828,
          fg: 16777215,
          style: 2,
        }),
        o(Sm.F_CURRY, {
          kind: `fascia`,
          key: `trade.curry.sign.curry`,
          bg: 15769600,
          fg: 6953492,
          style: 0,
        }),
        o(Sm.F_YAKITORI, {
          kind: `fascia`,
          key: `trade.yakitori.sign.yakitori`,
          bg: 12068380,
          fg: 16777215,
          style: 0,
        }),
        o(Sm.F_TACHINOMI, {
          kind: `fascia`,
          key: `trade.tachinomi.sign.tachinomi`,
          bg: 9051156,
          fg: 16774368,
          style: 2,
        }),
        o(Sm.F_KANBUTSU, {
          kind: `fascia`,
          key: `trade.dried-goods.sign.kanbutsu`,
          bg: 10490906,
          fg: 16777215,
          style: 0,
        }),
        o(Sm.F_SENGYO, {
          kind: `fascia`,
          key: `trade.fish.sign.sengyo`,
          bg: 1727152,
          fg: 16777215,
          style: 0,
        }),
        o(Sm.F_CLEANING, {
          kind: `fascia`,
          key: `trade.cleaning.sign.cleaning`,
          bg: 1731264,
          fg: 16777215,
          style: 1,
        }),
        a(Sm.L_SAKE, {
          kind: `lantern`,
          key: `trade.izakaya.sign.sake`,
          bg: 13641752,
          fg: 1315860,
          style: 0,
        }),
        i(Sm.N_PLAIN, (e, t, n) => {
          (I(e, 0, 0, t, n, `#1c2a52`), I(e, 0, 0, t, n * 0.08, `#2a1a10`));
          for (let r = 1; r < 4; r++)
            I(e, (t * r) / 4 - 1.5 * s, n * 0.3, 3 * s, n, `rgba(0,0,0,0.55)`);
          I(e, t * 0.44, n * 0.35, t * 0.12, n * 0.4, `rgba(244,236,216,0.8)`);
        }),
        i(Sm.P_PLAIN, (e, t, n) => {
          (I(e, 0, 0, t, n, `#2a2a2a`),
            I(e, t * 0.2, n * 0.4, t * 0.6, n * 0.2, `rgba(240,240,240,0.6)`));
        }));
    }
    paintStaticB(e, t) {
      let n = this.bw,
        r = this.ch,
        i = (t) => {
          (e.save(),
            e.setTransform(0, -1, 1, 0, 0, r),
            Fm(e, t, r, n),
            e.restore());
        };
      switch (t) {
        case Cm.TALL_KAITORI:
          return i({
            kind: `vbig`,
            key: `trade.electronics.sign.kaitori`,
            bg: 14090255,
            fg: 16777215,
            style: 0,
          });
        case Cm.TALL_KARAOKE:
          return i({
            kind: `vbig`,
            key: `trade.karaoke.sign.karaoke`,
            bg: 14162784,
            fg: 16777215,
            style: 0,
          });
        case Cm.TALL_PLAIN:
          (e.save(),
            e.setTransform(0, -1, 1, 0, 0, r),
            I(e, 0, 0, r, n, `#141210`),
            I(
              e,
              r * 0.08,
              n * 0.04,
              r * 0.84,
              n * 0.92,
              `rgba(216,196,150,0.08)`,
            ),
            I(
              e,
              r * 0.42,
              n * 0.12,
              r * 0.16,
              n * 0.7,
              `rgba(232,216,176,0.7)`,
            ),
            e.restore());
          return;
        case Cm.BAND_TAXFREE:
          return Fm(
            e,
            {
              kind: `band`,
              key: `common.door.tax-free`,
              bg: 15073298,
              fg: 16777215,
              style: 0,
            },
            n,
            r,
          );
        case Cm.BAND_TENANT:
          return Fm(
            e,
            {
              kind: `band`,
              key: `common.tenant.boshu`,
              bg: 16777215,
              fg: 13637656,
              style: 1,
            },
            n,
            r,
          );
        case Cm.BAND_PLAIN:
          (I(e, 0, 0, n, r, `#161412`),
            I(e, n * 0.3, r * 0.4, n * 0.4, r * 0.2, `rgba(232,216,176,0.7)`));
          return;
      }
    }
    paintStaticBInto(e) {
      for (let t = 0; t < wm; t++) {
        let n = this.cellRect(this.nA + t);
        (e.save(),
          e.translate(
            Math.round(n.u0 * this.W) - 2,
            Math.round(n.v0 * this.H) - 2,
          ),
          e.beginPath(),
          e.rect(0, 0, this.bw, this.ch),
          e.clip(),
          this.paintStaticB(e, t),
          e.restore());
      }
    }
  },
  Nm = (e) =>
    0.3 * ((e >> 16) & 255) + 0.59 * ((e >> 8) & 255) + 0.11 * (e & 255),
  Pm = ap;
