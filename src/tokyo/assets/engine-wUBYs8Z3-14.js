// tokyo/assets/engine-wUBYs8Z3 14 — math
// Lines 4430-4643 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
var _a = null,
  va = class e {
    pos;
    nor;
    uv;
    ca;
    idx;
    n = 0;
    ni = 0;
    r = 255;
    g = 255;
    b = 255;
    rough = 230;
    metal = 0;
    emis = 0;
    flags = 0;
    static scratch() {
      return ((_a ||= new e(16384, 24576)), _a.reset());
    }
    static releaseScratch() {
      _a = null;
    }
    constructor(e = 4096, t = Math.ceil(e * 1.5)) {
      let n = Math.max(16, e);
      ((this.pos = new Float32Array(n * 3)),
        (this.nor = new Float32Array(n * 3)),
        (this.uv = new Float32Array(n * 2)),
        (this.ca = new Uint8Array(n * 8)),
        (this.idx = new Uint32Array(Math.max(24, t))));
    }
    reserve(e, t = Math.ceil(e * 1.5)) {
      return (this.growV(this.n + e, !0), this.growI(this.ni + t, !0), this);
    }
    setColor(e, t, n) {
      return ((this.r = e & 255), (this.g = t & 255), (this.b = n & 255), this);
    }
    setMaterial(e, t = 0, n = 0, r = 0) {
      return (
        (this.rough = Math.round(Math.min(1, Math.max(0, e)) * 255)),
        (this.metal = Math.round(Math.min(1, Math.max(0, t)) * 255)),
        (this.emis = Math.round(Math.min(1, Math.max(0, n)) * 255)),
        (this.flags = r & 255),
        this
      );
    }
    growV(e, t = !1) {
      let n = this.pos.length / 3;
      if (e <= n) return;
      if (t) n = e;
      else for (; n < e;) n *= 2;
      let r = (e, t, r) => {
          let i = new e.constructor(n * t);
          return (i.set(e.subarray(0, r * t)), i);
        },
        i = this.n;
      ((this.pos = r(this.pos, 3, i)),
        (this.nor = r(this.nor, 3, i)),
        (this.uv = r(this.uv, 2, i)),
        (this.ca = r(this.ca, 8, i)));
    }
    growI(e, t = !1) {
      let n = this.idx.length;
      if (e <= n) return;
      if (t) n = e;
      else for (; n < e;) n *= 2;
      let r = new Uint32Array(n);
      (r.set(this.idx.subarray(0, this.ni)), (this.idx = r));
    }
    vertex(e, t, n, r, i, a, o, s) {
      let c = this.n;
      c >= this.pos.length / 3 && this.growV(c + 1);
      let l = c * 3,
        u = c * 2,
        d = c * 8,
        f = this.pos,
        p = this.nor,
        m = this.uv,
        h = this.ca;
      return (
        (f[l] = e),
        (f[l + 1] = t),
        (f[l + 2] = n),
        (p[l] = r),
        (p[l + 1] = i),
        (p[l + 2] = a),
        (m[u] = o),
        (m[u + 1] = s),
        (h[d] = this.r),
        (h[d + 1] = this.g),
        (h[d + 2] = this.b),
        (h[d + 3] = 255),
        (h[d + 4] = this.rough),
        (h[d + 5] = this.metal),
        (h[d + 6] = this.emis),
        (h[d + 7] = this.flags),
        (this.n = c + 1),
        c
      );
    }
    tri(e, t, n) {
      this.ni + 3 > this.idx.length && this.growI(this.ni + 3);
      let r = this.idx;
      return ((r[this.ni++] = e), (r[this.ni++] = t), (r[this.ni++] = n), this);
    }
    quad(e, t, n, r, i, a, o, s, c, l, u, d, f = 0, p = 0, m = 1, h = 1) {
      let g = r - e,
        _ = i - t,
        v = a - n,
        y = l - e,
        b = u - t,
        x = d - n,
        S = _ * x - v * b,
        C = v * y - g * x,
        w = g * b - _ * y,
        ee = Math.sqrt(S * S + C * C + w * w) || 1;
      ((S /= ee), (C /= ee), (w /= ee));
      let T = this.vertex(e, t, n, S, C, w, f, p);
      return (
        this.vertex(r, i, a, S, C, w, m, p),
        this.vertex(o, s, c, S, C, w, m, h),
        this.vertex(l, u, d, S, C, w, f, h),
        this.tri(T, T + 1, T + 2).tri(T, T + 2, T + 3)
      );
    }
    box(e, t, n, r, i, a, o = 0, s = 0, c = 1, l = 1, u = !1) {
      let d = e - r,
        f = e + r,
        p = t - i,
        m = t + i,
        h = n - a,
        g = n + a;
      return (
        this.quad(d, p, g, f, p, g, f, m, g, d, m, g, o, s, c, l),
        this.quad(f, p, h, d, p, h, d, m, h, f, m, h, o, s, c, l),
        this.quad(f, p, g, f, p, h, f, m, h, f, m, g, o, s, c, l),
        this.quad(d, p, h, d, p, g, d, m, g, d, m, h, o, s, c, l),
        this.quad(d, m, g, f, m, g, f, m, h, d, m, h, o, s, c, l),
        u && this.quad(d, p, h, f, p, h, f, p, g, d, p, g, o, s, c, l),
        this
      );
    }
    build() {
      let e = this.n,
        t = new le();
      (t.setAttribute(`position`, new de(this.pos.slice(0, e * 3), 3)),
        t.setAttribute(`normal`, new de(this.nor.slice(0, e * 3), 3)),
        t.setAttribute(`uv`, new de(this.uv.slice(0, e * 2), 2)));
      let n = new he(this.ca.slice(0, e * 8), 8);
      (t.setAttribute(`color`, new ie(n, 3, 0, !0)),
        t.setAttribute(`aCity`, new ie(n, 4, 4, !0)));
      let r = e <= 65535 ? new Uint16Array(this.ni) : new Uint32Array(this.ni);
      return (
        r.set(this.idx.subarray(0, this.ni)),
        t.setIndex(new de(r, 1)),
        t.computeBoundingSphere(),
        t.computeBoundingBox(),
        t
      );
    }
    reset() {
      return ((this.n = 0), (this.ni = 0), this);
    }
  },
  ya = 1 << 20;
function ba(e, t) {
  let n, r;
  switch (t.format) {
    case se:
      ((n = e.RGBA), (r = 4));
      break;
    case fe:
      ((n = e.RG), (r = 2));
      break;
    case ke:
      ((n = e.RED), (r = 1));
      break;
    default:
      return null;
  }
  switch (t.type) {
    case f:
      return { format: n, type: e.UNSIGNED_BYTE, comps: r, bpc: 1 };
    case te:
      return { format: n, type: e.HALF_FLOAT, comps: r, bpc: 2 };
    case ee:
      return { format: n, type: e.FLOAT, comps: r, bpc: 4 };
    default:
      return null;
  }
}
var xa = (e) =>
  (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
  (typeof OffscreenCanvas < `u` && e instanceof OffscreenCanvas);
function Sa(e, t, n) {
  let r = e.state,
    i = b,
    a = i.getPrimaries(i.workingColorSpace),
    o = n.colorSpace === `` ? null : i.getPrimaries(n.colorSpace);
  (r.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY),
    r.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha),
    r.pixelStorei(
      t.UNPACK_COLORSPACE_CONVERSION_WEBGL,
      n.colorSpace === `` || a === o ? t.NONE : t.BROWSER_DEFAULT_WEBGL,
    ),
    r.pixelStorei(t.UNPACK_ALIGNMENT, n.unpackAlignment),
    r.pixelStorei(t.UNPACK_ROW_LENGTH, 0),
    r.pixelStorei(t.UNPACK_SKIP_PIXELS, 0),
    r.pixelStorei(t.UNPACK_SKIP_ROWS, 0));
}
function Ca(e, t, n) {
  let r = e.properties.get(n).__webglTexture;
  return r ? (e.state.bindTexture(t.TEXTURE_2D, r), !0) : !1;
}
var wa = { jobs: 0, bands: 0, whole: 0, maxBandMs: 0, lastMs: 0 };
