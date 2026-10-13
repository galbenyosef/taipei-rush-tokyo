// tokyo__assets__region-tokyo-BcM3fReU 211 — kind
// Lines 86735-87026 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var wJ = { plate: 45, name: 70, cross: 170, guide: 260, shuto: 280 },
  TJ = 3,
  EJ = class {
    ctx;
    atlas;
    pool;
    faces = new Map();
    entries = new Map();
    owners;
    lastX = 1e9;
    lastZ = 1e9;
    queue = [];
    pumping = !1;
    uploaded = !1;
    scratch = new Map();
    scan = 0;
    stats = { painted: 0, evicted: 0, starved: 0, maxSliceMs: 0, paintMs: 0 };
    constructor(e, t, n) {
      ((this.ctx = e),
        (this.atlas = t),
        (this.pool = n),
        (this.owners = {
          plate: [],
          cross: [],
          name: [],
          guide: [],
          shuto: [],
        }));
      for (let e of Object.keys(LG)) this.owners[e] = Array(VG(e)).fill(null);
      let r = t.texture,
        i = r.onUpdate;
      r.onUpdate = () => {
        (i?.call(r, r), (this.uploaded = !0));
        let e = r.image;
        (e &&
          typeof e.getContext == `function` &&
          ((e.width = 1), (e.height = 1)),
          (r.onUpdate = null));
      };
    }
    addTile(e, t, n) {
      let r = [];
      for (let e of n) {
        let n = {
          key: e.key,
          kind: e.kind,
          data: e.data,
          x: e.x,
          z: e.z,
          slot: t,
          v: e.v,
        };
        r.push(n);
        let i = this.entries.get(e.key);
        (i ||
          this.entries.set(
            e.key,
            (i = {
              key: e.key,
              kind: e.kind,
              data: e.data,
              faces: [],
              cell: -1,
              painted: !1,
              lastNeed: -1,
              d2: 0xde0b6b3a7640000,
            }),
          ),
          i.faces.push(n),
          i.painted && this.patch(n, i));
      }
      (this.faces.set(e, r), (this.lastX = 1e9));
    }
    removeTile(e) {
      let t = this.faces.get(e);
      if (t) {
        for (let e of t) {
          let t = this.entries.get(e.key);
          if (!t) continue;
          let n = t.faces.indexOf(e);
          (n >= 0 && t.faces.splice(n, 1),
            !t.faces.length && t.cell < 0 && this.entries.delete(e.key));
        }
        this.faces.delete(e);
      }
    }
    patch(e, t) {
      let n = this.pool();
      if (!n) return;
      let r = t.painted && t.cell >= 0 ? BG(t.kind, t.cell) : HG(t.kind);
      n.patchQuadUv(e.slot, e.v, r.u0, r.v0, r.u1, r.v1);
    }
    update(e, t) {
      if ((e - this.lastX) ** 2 + (t - this.lastZ) ** 2 < 36) return;
      ((this.lastX = e), (this.lastZ = t));
      let n = ++this.scan,
        r = [];
      for (let i of this.entries.values()) {
        let a = 0xde0b6b3a7640000;
        for (let n of i.faces) {
          let r = (n.x - e) ** 2 + (n.z - t) ** 2;
          r < a && (a = r);
        }
        i.d2 = a;
        let o = wJ[i.kind];
        a <= o * o && ((i.lastNeed = n), i.painted || r.push(i));
      }
      for (let [e, t] of this.entries)
        t.faces.length ||
          (t.cell >= 0 && (this.owners[t.kind][t.cell] = null),
          this.entries.delete(e));
      r.length &&
        (r.sort((e, t) => e.d2 - t.d2),
        (this.queue = r),
        this.uploaded ? this.pumping || this.pump() : this.paintAllNow());
    }
    cellFor(e) {
      let t = this.owners[e.kind];
      for (let e = 0; e < t.length; e++) if (t[e] === null) return e;
      let n = -1,
        r = 1 / 0;
      for (let e = 0; e < t.length; e++) {
        let i = this.entries.get(t[e]);
        if (!i) return e;
        i.lastNeed !== this.scan &&
          i.lastNeed < r &&
          ((r = i.lastNeed), (n = e));
      }
      if (n < 0) return (this.stats.starved++, -1);
      let i = this.entries.get(t[n]);
      ((i.cell = -1), (i.painted = !1));
      for (let e of i.faces) this.patch(e, i);
      return (this.stats.evicted++, n);
    }
    paintAllNow() {
      let e = this.atlas;
      for (let t of this.queue) {
        if (t.painted) continue;
        let n = this.cellFor(t);
        if (n < 0) continue;
        ((this.owners[t.kind][n] = t.key), (t.cell = n));
        let r = LG[t.kind],
          i = r.x + (n % r.cols) * r.w,
          a = r.y + Math.floor(n / r.cols) * r.h,
          o = e.g;
        (o.save(),
          o.translate(i * e.s, a * e.s),
          o.beginPath(),
          o.rect(0, 0, r.w * e.s, r.h * e.s),
          o.clip(),
          e.paintSign(o, t.data),
          o.restore(),
          (t.painted = !0));
        for (let e of t.faces) this.patch(e, t);
        this.stats.painted++;
      }
      ((e.texture.needsUpdate = !0), (this.queue = []));
    }
    async pump() {
      this.pumping = !0;
      let e = this.ctx;
      try {
        for (; this.queue.length;) {
          await e.work.yield();
          let t = performance.now(),
            n = 0;
          for (; this.queue.length;) {
            let r = this.queue.shift();
            if (r.painted || !r.faces.length) continue;
            let i = this.cellFor(r);
            if (!(i < 0)) {
              ((this.owners[r.kind][i] = r.key),
                (r.cell = i),
                this.paintUpload(r, i),
                (r.painted = !0));
              for (let e of r.faces) this.patch(e, r);
              if ((n++, e.work.shouldYield() || performance.now() - t > TJ))
                break;
            }
          }
          n && this.regenMips();
          let r = performance.now() - t;
          ((this.stats.paintMs += r),
            r > this.stats.maxSliceMs &&
              (this.stats.maxSliceMs = +r.toFixed(2)));
        }
      } catch (e) {
        console.warn(`[tokyo-streets] sign painter stopped`, e);
      } finally {
        this.pumping = !1;
      }
    }
    paintUpload(e, t) {
      let n = this.atlas,
        r = LG[e.kind],
        i = this.scratch.get(e.kind),
        a = Math.round(r.w * n.s),
        o = Math.round(r.h * n.s);
      if (!i) {
        let [t, r] = ye(a, o);
        t.setAttribute(`lang`, n.lang);
        let s = new Uint8Array(a * o * 4),
          c = new w(s, a, o);
        ((c.flipY = !1),
          (c.generateMipmaps = !1),
          this.scratch.set(e.kind, (i = { c: t, g: r, tex: c, buf: s })));
      }
      let s = i.g;
      (s.setTransform(1, 0, 0, 1, 0, 0),
        s.clearRect(0, 0, a, o),
        n.paintSign(s, e.data),
        i.buf.set(s.getImageData(0, 0, a, o).data),
        (i.tex.needsUpdate = !0));
      let c = Math.round((r.x + (t % r.cols) * r.w) * n.s),
        l = Math.round((r.y + Math.floor(t / r.cols) * r.h) * n.s),
        u = Math.round(PG * n.s),
        d = n.texture,
        f = d.generateMipmaps;
      d.generateMipmaps = !1;
      try {
        this.ctx.renderer.gl.copyTextureToTexture(
          i.tex,
          d,
          null,
          new y(c, u - l - o),
          0,
        );
      } finally {
        d.generateMipmaps = f;
      }
      this.stats.painted++;
    }
    regenMips() {
      let e = this.ctx.renderer.gl,
        t = e.properties.get(this.atlas.texture);
      if (!t.__webglTexture) return;
      let n = e.getContext();
      (e.state.activeTexture(n.TEXTURE0),
        e.state.bindTexture(n.TEXTURE_2D, t.__webglTexture),
        n.generateMipmap(n.TEXTURE_2D),
        e.state.unbindTexture());
    }
    info() {
      let e = 0,
        t = 0,
        n = {},
        r = {};
      for (let n of this.entries.values())
        (n.cell >= 0 && e++,
          n.lastNeed === this.scan &&
            (t++, (r[n.kind] = (r[n.kind] ?? 0) + 1)));
      for (let e of Object.keys(LG)) n[e] = `${r[e] ?? 0}/${VG(e)}`;
      return {
        keys: this.entries.size,
        cells: e,
        needNow: t,
        perKind: n,
        queue: this.queue.length,
        ...this.stats,
      };
    }
  },
  DJ = new WeakMap();
function OJ(e, t, n) {
  let r = DJ.get(e);
  if (!r) {
    r = [];
    for (let t of [...e.pois.filter((e) => e.kind === `convenience`), ...Eh(e)])
      r.push({
        x: t.x,
        z: t.z,
        nx: Math.sin(t.facing),
        nz: -Math.cos(t.facing),
        w: t.width ?? 6,
      });
    DJ.set(e, r);
  }
  let i = t.axis === `x` ? 0 : -n,
    a = t.axis === `x` ? -n : 0,
    o = t.at + n * t.halfTotal,
    s = [];
  for (let e of r) {
    if (e.nx * i + e.nz * a < 0.9) continue;
    let n = t.axis === `x` ? e.z : e.x,
      r = t.axis === `x` ? e.x : e.z;
    Math.abs(n - o) > 3 ||
      r < t.from - 5 ||
      r > t.to + 5 ||
      s.push([r - e.w / 2 - 0.3, r + e.w / 2 + 0.3]);
  }
  return s;
}
