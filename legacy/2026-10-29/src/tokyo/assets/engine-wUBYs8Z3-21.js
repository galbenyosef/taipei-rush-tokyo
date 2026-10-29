// tokyo/assets/engine-wUBYs8Z3 21 — math
// Lines 7218-7560 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
var ms = [16, 20, 25, 30, 36, 40, 48, 64, 50, 60, 80, 100, 120, 144],
  hs = (e) => 128 / (ms[e] ?? 16),
  gs = 3553,
  _s = 34067,
  vs = 32879,
  ys = 35866,
  bs = 34962,
  xs = 34963,
  Ss = class {
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
          e === gs || (e >= 34069 && e <= 34074)
            ? e === gs
              ? t.TEXTURE_BINDING_2D
              : t.TEXTURE_BINDING_CUBE_MAP
            : e === _s
              ? t.TEXTURE_BINDING_CUBE_MAP
              : e === vs
                ? t.TEXTURE_BINDING_3D
                : e === ys
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
        if (r !== bs && r !== xs && r !== 35345) return;
        let i =
            r === bs
              ? e.ARRAY_BUFFER_BINDING
              : r === xs
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
            c = n === _s ? 6 : 1,
            l = fs[i],
            u = 0;
          for (let e = 0; e < r; e++)
            ((u +=
              l === void 0
                ? Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * ps(i)
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
            l = fs[i],
            u = 0;
          for (let e = 0; e < r; e++)
            ((u +=
              (l === void 0
                ? Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * ps(i)
                : a * o * l) * s),
              (a = Math.max(1, a >> 1)),
              (o = Math.max(1, o >> 1)),
              n === vs && (s = Math.max(1, s >> 1)));
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
          t.setTex(t.boundTexture(n), s * 64 + r, a * o * (fs[i] ?? 4));
        }),
        n(`texImage3D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2];
          t.setTex(t.boundTexture(n), r, e[3] * e[4] * e[5] * (fs[i] ?? 4));
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
            Math.ceil(a / 4) * Math.ceil(o / 4) * 2 * ps(i),
          );
        }),
        n(`compressedTexImage3D`, (e) => {
          let n = e[0],
            r = e[1],
            i = e[2];
          t.setTex(
            t.boundTexture(n),
            r,
            Math.ceil(e[3] / 4) * Math.ceil(e[4] / 4) * 2 * ps(i) * e[5],
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
        let s = i * a * (fs[r] ?? 4) * Math.max(1, n);
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
  Cs = class e {
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
function ws(...e) {
  let t = 2166136261;
  for (let n of e) {
    let e = String(n);
    for (let n = 0; n < e.length; n++)
      ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
    t ^= 47;
  }
  return t >>> 0;
}
var Ts = { GROUND: 0.02, PAINT: 0.01, PANEL: 0.02, DETAIL: 0.005 };
function Es(e, t, n) {
  return e + (t + 0.5) * n;
}
function Ds(e, t, n, r) {
  return (e + (t + 0.5) * n) * r;
}
function Os(e, t) {
  return e * t;
}
function ks(e, t) {
  return e * t;
}
function As(e, t, n) {
  return e.rx * (t * n);
}
function js(e, t, n) {
  return e.rz * (t * n);
}
function Ms(e, t, n, r) {
  return (t * e.rx + n * e.rz) * r;
}
function Ns(e) {
  return e;
}
function Ps(e) {
  return -e;
}
function Fs(e) {
  return e;
}
function Is(e) {
  return e;
}
function Ls(e, t) {
  return e * t;
}
function Rs(e, t) {
  let n = e < 0 ? -e : e;
  return n < 0.35 ? 0 : n > 2.8 ? 3 : e * t > 0 ? 1 : 2;
}
function zs(e) {
  return e === 2;
}
function Bs(e) {
  return e < 0;
}
function Vs(e) {
  return e === 1;
}
function Hs(e, t) {
  return e * t;
}
function Us(e, t) {
  return e === 1 ? t : e === 2 || e === 3 ? -t : 0;
}
function Ws(e, t, n) {
  return (e === `x` ? t : -t) * n;
}
function Gs(e, t, n) {
  let r = t * n;
  return e === `x` ? (r > 0 ? Math.PI / 2 : -Math.PI / 2) : r > 0 ? 0 : Math.PI;
}
function Ks(e, t, n, r, i, a, o) {
  let s = Math.cos(n),
    c = Math.sin(n),
    l = Math.sin(n),
    u = -Math.cos(n);
  return ((o.x = e + s * r * i + l * a), (o.z = t + c * r * i + u * a), o);
}
var qs =
  typeof location > `u` ||
  new URLSearchParams(location.search).get(`gpupool`) !== `0`;
