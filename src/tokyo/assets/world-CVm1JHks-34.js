// tokyo/assets/world-CVm1JHks 34 — claims
// Lines 10949-11033 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var hl = null,
  gl = null,
  _l = 0,
  vl = !1,
  yl = { queries: 0, buildMs: 0, rects: 0, rejected: 0 },
  bl = class {
    claims = [];
    cells = new Map();
    oversize = [];
    stamp;
    tick = 0;
    queries = 0;
    tested = 0;
    constructor(e) {
      for (let t of e)
        t && t.maxX > t.minX && t.maxZ > t.minZ && this.claims.push(t);
      this.stamp = new Int32Array(this.claims.length);
      for (let e = 0; e < this.claims.length; e++) {
        let t = this.claims[e],
          n = Math.floor(t.minX / 64),
          r = Math.floor(t.maxX / 64),
          i = Math.floor(t.minZ / 64),
          a = Math.floor(t.maxZ / 64);
        if ((r - n + 1) * (a - i + 1) > il) {
          this.oversize.push(e);
          continue;
        }
        for (let t = i; t <= a; t++)
          for (let i = n; i <= r; i++) {
            let n = (i + al) * ol + (t + al),
              r = this.cells.get(n);
            (r || this.cells.set(n, (r = [])), r.push(e));
          }
      }
    }
    get size() {
      return this.claims.length;
    }
    get cellCount() {
      return this.cells.size;
    }
    claimed(e, t, n, r, i) {
      this.queries++;
      let a = ++this.tick;
      for (let o of this.oversize)
        if (((this.stamp[o] = a), this.hit(o, e, t, n, r, i))) return !0;
      let o = Math.floor(e / 64),
        s = Math.floor(n / 64),
        c = Math.floor(t / 64),
        l = Math.floor(r / 64);
      for (let u = c; u <= l; u++)
        for (let c = o; c <= s; c++) {
          let o = this.cells.get((c + al) * ol + (u + al));
          if (o)
            for (let s = 0; s < o.length; s++) {
              let c = o[s];
              if (
                this.stamp[c] !== a &&
                ((this.stamp[c] = a), this.hit(c, e, t, n, r, i))
              )
                return !0;
            }
        }
      return !1;
    }
    hit(e, t, n, r, i, a) {
      this.tested++;
      let o = this.claims[e];
      return o.scope !== `all` && o.scope !== a
        ? !1
        : r > o.minX && t < o.maxX && i > o.minZ && n < o.maxZ;
    }
  };
function xl(e) {
  let t = [];
  if (e) {
    for (let n of e) if (n?.claims) for (let e of n.claims) t.push(e);
  }
  return new bl(t);
}
var Sl = 12e4,
  Cl = 24;
function wl(e) {
  return new Promise((t) => setTimeout(t, e));
}
