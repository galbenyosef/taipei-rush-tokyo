// tokyo/assets/engine-14d5lda2 14 — math
// Lines 4551-4764 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
var Ra = null,
  za = class e {
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
      return ((Ra ||= new e(16384, 24576)), Ra.reset());
    }
    static releaseScratch() {
      Ra = null;
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
        ee = d - n,
        x = _ * ee - v * b,
        S = v * y - g * ee,
        C = g * b - _ * y,
        te = Math.sqrt(x * x + S * S + C * C) || 1;
      ((x /= te), (S /= te), (C /= te));
      let w = this.vertex(e, t, n, x, S, C, f, p);
      return (
        this.vertex(r, i, a, x, S, C, m, p),
        this.vertex(o, s, c, x, S, C, m, h),
        this.vertex(l, u, d, x, S, C, f, h),
        this.tri(w, w + 1, w + 2).tri(w, w + 2, w + 3)
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
      (t.setAttribute(`position`, new fe(this.pos.slice(0, e * 3), 3)),
        t.setAttribute(`normal`, new fe(this.nor.slice(0, e * 3), 3)),
        t.setAttribute(`uv`, new fe(this.uv.slice(0, e * 2), 2)));
      let n = new ae(this.ca.slice(0, e * 8), 8);
      (t.setAttribute(`color`, new Se(n, 3, 0, !0)),
        t.setAttribute(`aCity`, new Se(n, 4, 4, !0)));
      let r = e <= 65535 ? new Uint16Array(this.ni) : new Uint32Array(this.ni);
      return (
        r.set(this.idx.subarray(0, this.ni)),
        t.setIndex(new fe(r, 1)),
        t.computeBoundingSphere(),
        t.computeBoundingBox(),
        t
      );
    }
    reset() {
      return ((this.n = 0), (this.ni = 0), this);
    }
  },
  Ba = 1 << 20;
function Va(e, t) {
  let n, r;
  switch (t.format) {
    case ke:
      ((n = e.RGBA), (r = 4));
      break;
    case ue:
      ((n = e.RG), (r = 2));
      break;
    case oe:
      ((n = e.RED), (r = 1));
      break;
    default:
      return null;
  }
  switch (t.type) {
    case E:
      return { format: n, type: e.UNSIGNED_BYTE, comps: r, bpc: 1 };
    case ne:
      return { format: n, type: e.HALF_FLOAT, comps: r, bpc: 2 };
    case u:
      return { format: n, type: e.FLOAT, comps: r, bpc: 4 };
    default:
      return null;
  }
}
var Ha = (e) =>
  (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
  (typeof OffscreenCanvas < `u` && e instanceof OffscreenCanvas);
function Ua(e, t, n) {
  let r = e.state,
    i = a,
    o = i.getPrimaries(i.workingColorSpace),
    s = n.colorSpace === `` ? null : i.getPrimaries(n.colorSpace);
  (r.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY),
    r.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha),
    r.pixelStorei(
      t.UNPACK_COLORSPACE_CONVERSION_WEBGL,
      n.colorSpace === `` || o === s ? t.NONE : t.BROWSER_DEFAULT_WEBGL,
    ),
    r.pixelStorei(t.UNPACK_ALIGNMENT, n.unpackAlignment),
    r.pixelStorei(t.UNPACK_ROW_LENGTH, 0),
    r.pixelStorei(t.UNPACK_SKIP_PIXELS, 0),
    r.pixelStorei(t.UNPACK_SKIP_ROWS, 0));
}
function Wa(e, t, n) {
  let r = e.properties.get(n).__webglTexture;
  return r ? (e.state.bindTexture(t.TEXTURE_2D, r), !0) : !1;
}
var Ga = { jobs: 0, bands: 0, whole: 0, maxBandMs: 0, lastMs: 0 };
