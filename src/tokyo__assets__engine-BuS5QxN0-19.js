// tokyo__assets__engine-BuS5QxN0 19 — math
// Lines 6956-7297 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
var Uo = [16, 20, 25, 30, 36, 40, 48, 64, 50, 60, 80, 100, 120, 144],
  Wo = (e) => 128 / (Uo[e] ?? 16),
  Go = 3553,
  Ko = 34067,
  qo = 32879,
  Jo = 35866,
  Yo = 34962,
  Xo = 34963,
  Zo = class {
    gl;
    texBytes = 0;
    bufBytes = 0;
    rbBytes = 0;
    peak = 0;
    tex = new Map();
    buf = new Map();
    rb = new Map();
    canvasBpp;
    samples;
    constructor(e) {
      this.gl = e;
      let t = e.getContextAttributes();
      ((this.canvasBpp = 4 + (t?.depth === !1 ? 0 : 4)),
        (this.samples = t?.antialias ? 4 : 1),
        this.install());
    }
    report() {
      let e = (e) => Math.round(e / 104857.6) / 10,
        t =
          this.gl.drawingBufferWidth *
          this.gl.drawingBufferHeight *
          this.canvasBpp *
          this.samples,
        n = this.texBytes + this.bufBytes + this.rbBytes + t;
      return (
        n > this.peak && (this.peak = n),
        {
          totalMB: e(n),
          texMB: e(this.texBytes),
          bufMB: e(this.bufBytes),
          rbMB: e(this.rbBytes),
          canvasMB: e(t),
          textures: this.tex.size,
          buffers: this.buf.size,
          peakMB: e(this.peak),
        }
      );
    }
    totalMB() {
      let e =
          this.gl.drawingBufferWidth *
          this.gl.drawingBufferHeight *
          this.canvasBpp *
          this.samples,
        t = this.texBytes + this.bufBytes + this.rbBytes + e;
      return (t > this.peak && (this.peak = t), t / 1048576);
    }
    boundTexture(e) {
      let t = this.gl,
        n =
          e === Go || (e >= 34069 && e <= 34074)
            ? e === Go
              ? t.TEXTURE_BINDING_2D
              : t.TEXTURE_BINDING_CUBE_MAP
            : e === Ko
              ? t.TEXTURE_BINDING_CUBE_MAP
              : e === qo
                ? t.TEXTURE_BINDING_3D
                : e === Jo
                  ? t.TEXTURE_BINDING_2D_ARRAY
                  : 0;
      return n ? t.getParameter(n) : null;
    }
    setTex(e, t, n) {
      if (!e) return;
      let r = this.tex.get(e);
      (r || this.tex.set(e, (r = new Map())),
        (this.texBytes += n - (r.get(t) ?? 0)),
        r.set(t, n));
    }
    install() {
      let e = this.gl,
        t = this,
        n = (t, n) => {
          let r = e[t].bind(e);
          e[t] = function () {
            try {
              n(arguments);
            } catch {}
            return r(...arguments);
          };
        };
      (n(`bufferData`, (n) => {
        let r = n[0];
        if (r !== Yo && r !== Xo && r !== 35345) return;
        let i =
            r === Yo
              ? e.ARRAY_BUFFER_BINDING
              : r === Xo
                ? e.ELEMENT_ARRAY_BUFFER_BINDING
                : e.UNIFORM_BUFFER_BINDING,
          a = e.getParameter(i);
        if (!a) return;
        let o = n[1],
          s = typeof o == `number` ? o : o ? (o.byteLength ?? 0) : 0;
        (n.length >= 5 &&
          typeof n[4] == `number` &&
          n[4] > 0 &&
          o &&
          typeof o != `number` &&
          (s = n[4] * (o.BYTES_PER_ELEMENT ?? 1)),
          (t.bufBytes += s - (t.buf.get(a) ?? 0)),
          t.buf.set(a, s));
      }),
        n(`deleteBuffer`, (e) => {
          let n = e[0];
          n && ((t.bufBytes -= t.buf.get(n) ?? 0), t.buf.delete(n));
        }),
        n(`texStorage2D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2],
            a = e[3],
            o = e[4],
            s = t.boundTexture(n),
            c = n === Ko ? 6 : 1,
            l = Vo[i],
            u = 0;
          for (let e = 0; e < r; e++)
            ((u +=
              l === void 0
                ? Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * Ho(i)
                : a * o * l),
              (a = Math.max(1, a >> 1)),
              (o = Math.max(1, o >> 1)));
          t.setTex(s, -1, u * c);
        }),
        n(`texStorage3D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2],
            a = e[3],
            o = e[4],
            s = e[5],
            c = t.boundTexture(n),
            l = Vo[i],
            u = 0;
          for (let e = 0; e < r; e++)
            ((u +=
              (l === void 0
                ? Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * Ho(i)
                : a * o * l) * s),
              (a = Math.max(1, a >> 1)),
              (o = Math.max(1, o >> 1)),
              n === qo && (s = Math.max(1, s >> 1)));
          t.setTex(c, -1, u);
        }),
        n(`texImage2D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2],
            a = 0,
            o = 0;
          if (e.length >= 8) ((a = e[3]), (o = e[4]));
          else {
            let t = e[5];
            ((a = t?.videoWidth || t?.naturalWidth || t?.width || 0),
              (o = t?.videoHeight || t?.naturalHeight || t?.height || 0));
          }
          let s = n >= 34069 && n <= 34074 ? n - 34069 : 0;
          t.setTex(t.boundTexture(n), s * 64 + r, a * o * (Vo[i] ?? 4));
        }),
        n(`texImage3D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2];
          t.setTex(t.boundTexture(n), r, e[3] * e[4] * e[5] * (Vo[i] ?? 4));
        }),
        n(`compressedTexImage2D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2],
            a = e[3],
            o = e[4],
            s = n >= 34069 && n <= 34074 ? n - 34069 : 0;
          t.setTex(
            t.boundTexture(n),
            s * 64 + r,
            Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * Ho(i),
          );
        }),
        n(`compressedTexImage3D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2];
          t.setTex(
            t.boundTexture(n),
            r,
            Math.ceil(e[3] / 4) * Math.ceil(e[4] / 4) * 2 * Ho(i) * e[5],
          );
        }),
        n(`deleteTexture`, (e) => {
          let n = e[0],
            r = n && t.tex.get(n);
          if (r) {
            for (let e of r.values()) t.texBytes -= e;
            t.tex.delete(n);
          }
        }));
      let r = (n, r, i, a) => {
        let o = e.getParameter(e.RENDERBUFFER_BINDING);
        if (!o) return;
        let s = i * a * (Vo[r] ?? 4) * Math.max(1, n);
        ((t.rbBytes += s - (t.rb.get(o) ?? 0)), t.rb.set(o, s));
      };
      (n(`renderbufferStorage`, (e) => r(1, e[1], e[2], e[3])),
        n(`renderbufferStorageMultisample`, (e) => r(e[1], e[2], e[3], e[4])),
        n(`deleteRenderbuffer`, (e) => {
          let n = e[0];
          n && ((t.rbBytes -= t.rb.get(n) ?? 0), t.rb.delete(n));
        }));
    }
  },
  Qo = class e {
    s;
    constructor(e) {
      this.s = e >>> 0 || 2654435769;
    }
    next() {
      let e = (this.s += 1831565813);
      return (
        (e = Math.imul(e ^ (e >>> 15), e | 1)),
        (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
        ((e ^ (e >>> 14)) >>> 0) / 4294967296
      );
    }
    range(e, t) {
      return e + (t - e) * this.next();
    }
    int(e, t) {
      return e + Math.floor(this.next() * (t - e + 1));
    }
    pick(e) {
      return e[Math.floor(this.next() * e.length)];
    }
    chance(e) {
      return this.next() < e;
    }
    weighted(e) {
      let t = 0,
        n = e.length;
      for (let r = 0; r < n; r++) t += e[r][1];
      let r = this.next() * t;
      for (let t = 0; t < n; t++) if (((r -= e[t][1]), r <= 0)) return e[t][0];
      return e[n - 1][0];
    }
    fork(t) {
      return new e((this.s ^ Math.imul(t + 1, 2246822507)) >>> 0);
    }
  };
function $o(...e) {
  let t = 2166136261;
  for (let n of e) {
    let e = String(n);
    for (let n = 0; n < e.length; n++)
      ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
    t ^= 47;
  }
  return t >>> 0;
}
function es(e, t, n) {
  return e + (t + 0.5) * n;
}
function ts(e, t, n, r) {
  return (e + (t + 0.5) * n) * r;
}
function ns(e, t) {
  return e * t;
}
function rs(e, t) {
  return e * t;
}
function is(e, t, n) {
  return e.rx * (t * n);
}
function as(e, t, n) {
  return e.rz * (t * n);
}
function os(e, t, n, r) {
  return (t * e.rx + n * e.rz) * r;
}
function ss(e) {
  return e;
}
function cs(e) {
  return -e;
}
function ls(e) {
  return e;
}
function us(e) {
  return e;
}
function ds(e, t) {
  return e * t;
}
function fs(e, t) {
  let n = e < 0 ? -e : e;
  return n < 0.35 ? 0 : n > 2.8 ? 3 : e * t > 0 ? 1 : 2;
}
function ps(e) {
  return e === 2;
}
function ms(e) {
  return e < 0;
}
function hs(e) {
  return e === 1;
}
function gs(e, t) {
  return e * t;
}
function _s(e, t) {
  return e === 1 ? t : e === 2 || e === 3 ? -t : 0;
}
function vs(e, t, n) {
  return (e === `x` ? t : -t) * n;
}
function ys(e, t, n) {
  let r = t * n;
  return e === `x` ? (r > 0 ? Math.PI / 2 : -Math.PI / 2) : r > 0 ? 0 : Math.PI;
}
function bs(e, t, n, r, i, a, o) {
  let s = Math.cos(n),
    c = Math.sin(n),
    l = Math.sin(n),
    u = -Math.cos(n);
  return ((o.x = e + s * r * i + l * a), (o.z = t + c * r * i + u * a), o);
}
var xs =
  typeof location > `u` ||
  new URLSearchParams(location.search).get(`gpupool`) !== `0`;
