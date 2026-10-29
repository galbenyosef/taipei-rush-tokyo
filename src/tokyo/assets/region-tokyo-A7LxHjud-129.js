// tokyo/assets/region-tokyo-A7LxHjud 129 — cycle
// Lines 56189-56339 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var ov = 3,
  sv = 2.5,
  vde = 5,
  cv = 3,
  yde = 34,
  lv = class extends Fe {
    gx;
    gz;
    ax;
    az;
    off;
    on;
    scr;
    constructor(e) {
      super(e);
      let t = e.nodes.length;
      ((this.gx = new Float32Array(t)),
        (this.gz = new Float32Array(t)),
        (this.ax = new Float32Array(t)),
        (this.az = new Float32Array(t)),
        (this.off = new Float32Array(t)),
        (this.on = new Uint8Array(t)),
        (this.scr = new Float32Array(t)));
      let n = -1,
        r = 12;
      for (let t of e.nodes) {
        let e = Math.hypot(t.x - Ec.x, t.z - Ec.z);
        t.signal && e < r && ((r = e), (n = t.id));
      }
      n >= 0 && (this.scr[n] = 38);
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
          s = de(e, `tokyo-signal`) % 5,
          c = this.gx[e] + ov + this.ax[e] + sv,
          l = r > n ? c - t.z / 12.5 : -t.x / 12.5;
        this.off[e] = (((l + s) % o) + o) % o;
      }
      if (n >= 0) {
        ((this.gx[n] = Math.min(this.gx[n], 26)),
          (this.gz[n] = Math.min(this.gz[n], 26)));
        let e = this.cycle(n);
        this.off[n] = ((this.off[n] % e) + e) % e;
      }
    }
    cycle(e) {
      return this.gx
        ? this.gx[e] + this.gz[e] + 11 + this.ax[e] + this.az[e] + this.scr[e]
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
      if (t === `x`) return n < r ? `green` : n < r + ov ? `yellow` : `red`;
      let i = r + ov + this.ax[e] + sv,
        a = this.gz[e];
      return n >= i && n < i + a
        ? `green`
        : n >= i + a && n < i + a + ov
          ? `yellow`
          : `red`;
    }
    scrWin(e) {
      if (!this.scr[e]) return null;
      let t = this.cycle(e) - this.scr[e];
      return [t, t + yde];
    }
    remaining(e, t) {
      if (!this.on[e]) return 99;
      let n = this.ph(e),
        r = this.cycle(e),
        i = this.gx[e];
      if (t === `x`) return i > n ? i - n : i + ov > n ? i + ov - n : r - n;
      let a = i + ov + this.ax[e] + sv,
        o = this.gz[e];
      return a > n
        ? a - n
        : a + o > n
          ? a + o - n
          : a + o + ov > n
            ? a + o + ov - n
            : r + a - n;
    }
    arrow(e, t) {
      if (!this.on[e]) return !1;
      let n = this.ph(e),
        r = this.gx[e];
      if (t === `x`) return n >= r + ov && n < r + ov + this.ax[e];
      let i = r + ov + this.ax[e] + sv + this.gz[e] + ov;
      return n >= i && n < i + this.az[e];
    }
    pedState(e, t) {
      if (!this.on[e]) return `walk`;
      let n = this.scrWin(e);
      if (n) {
        let t = this.ph(e);
        return t < n[0] || t >= n[1]
          ? `dont`
          : n[1] - t > vde
            ? `walk`
            : `flash`;
      }
      let r = t === `x` ? `z` : `x`;
      if (this.state(e, r) !== `green`) return `dont`;
      let i = this.remaining(e, r);
      return i > 8 ? `walk` : i > cv ? `flash` : `dont`;
    }
    scrambleWalk(e) {
      return this.scrWin(e) ? this.pedState(e, `x`) : null;
    }
    pedRemaining(e, t) {
      let n = this.scrWin(e);
      if (n) {
        let t = this.ph(e);
        return t >= n[0] && t < n[1] ? n[1] - t : 0;
      }
      let r = t === `x` ? `z` : `x`;
      if (this.state(e, r) !== `green`) return 0;
      let i = this.remaining(e, r) - cv;
      return i > 0 ? i : 0;
    }
  };
function uv(e, t, n, r) {
  if (e instanceof lv) return e.arrow(t, n);
  let i = n === `x` ? `z` : `x`;
  return e.state(t, i) === `red` && e.remaining(t, i) <= r;
}
