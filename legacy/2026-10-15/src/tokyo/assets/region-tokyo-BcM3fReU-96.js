// tokyo/assets/region-tokyo-BcM3fReU 96 — cycle
// Lines 46209-46320 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var NS = 3,
  PS = 2.5,
  FS = 3,
  IS = class extends Ce {
    gx;
    gz;
    ax;
    az;
    off;
    on;
    constructor(e) {
      super(e);
      let t = e.nodes.length;
      ((this.gx = new Float32Array(t)),
        (this.gz = new Float32Array(t)),
        (this.ax = new Float32Array(t)),
        (this.az = new Float32Array(t)),
        (this.off = new Float32Array(t)),
        (this.on = new Uint8Array(t)));
      for (let t of e.nodes) {
        if (!t.signal) continue;
        let e = t.id;
        this.on[e] = 1;
        let n = 0,
          r = 0,
          i = 0,
          a = 0;
        for (let e of t.roads) {
          let t = e.major ? e.lanesPerDir * 2 : 1;
          e.axis === `x`
            ? ((n = Math.max(n, t)), (i = Math.max(i, e.lanesPerDir)))
            : ((r = Math.max(r, t)), (a = Math.max(a, e.lanesPerDir)));
        }
        ((this.gx[e] = 14 + n * 4),
          (this.gz[e] = 14 + r * 4),
          (this.ax[e] = i >= 3 ? 7 : i >= 2 ? 6 : 0),
          (this.az[e] = a >= 3 ? 7 : a >= 2 ? 6 : 0));
        let o = this.cycle(e),
          s = P(e, `tokyo-signal`) % 5,
          c = this.gx[e] + NS + this.ax[e] + PS,
          l = r > n ? c - t.z / 12.5 : -t.x / 12.5;
        this.off[e] = (((l + s) % o) + o) % o;
      }
    }
    cycle(e) {
      return this.gx
        ? this.gx[e] + this.gz[e] + 11 + this.ax[e] + this.az[e]
        : super.cycle(e);
    }
    isSignalized(e) {
      return this.on[e] === 1;
    }
    ph(e) {
      let t = this.cycle(e);
      return (((this.time + this.off[e]) % t) + t) % t;
    }
    state(e, t) {
      if (!this.on[e]) return `green`;
      let n = this.ph(e),
        r = this.gx[e];
      if (t === `x`) return n < r ? `green` : n < r + NS ? `yellow` : `red`;
      let i = r + NS + this.ax[e] + PS,
        a = this.gz[e];
      return n >= i && n < i + a
        ? `green`
        : n >= i + a && n < i + a + NS
          ? `yellow`
          : `red`;
    }
    remaining(e, t) {
      if (!this.on[e]) return 99;
      let n = this.ph(e),
        r = this.cycle(e),
        i = this.gx[e];
      if (t === `x`) return i > n ? i - n : i + NS > n ? i + NS - n : r - n;
      let a = i + NS + this.ax[e] + PS,
        o = this.gz[e];
      return a > n
        ? a - n
        : a + o > n
          ? a + o - n
          : a + o + NS > n
            ? a + o + NS - n
            : r + a - n;
    }
    arrow(e, t) {
      if (!this.on[e]) return !1;
      let n = this.ph(e),
        r = this.gx[e];
      if (t === `x`) return n >= r + NS && n < r + NS + this.ax[e];
      let i = r + NS + this.ax[e] + PS + this.gz[e] + NS;
      return n >= i && n < i + this.az[e];
    }
    pedState(e, t) {
      if (!this.on[e]) return `walk`;
      let n = t === `x` ? `z` : `x`;
      if (this.state(e, n) !== `green`) return `dont`;
      let r = this.remaining(e, n);
      return r > 8 ? `walk` : r > FS ? `flash` : `dont`;
    }
    pedRemaining(e, t) {
      let n = t === `x` ? `z` : `x`;
      if (this.state(e, n) !== `green`) return 0;
      let r = this.remaining(e, n) - FS;
      return r > 0 ? r : 0;
    }
  };
function LS(e, t, n, r) {
  if (e instanceof IS) return e.arrow(t, n);
  let i = n === `x` ? `z` : `x`;
  return e.state(t, i) === `red` && e.remaining(t, i) <= r;
}
