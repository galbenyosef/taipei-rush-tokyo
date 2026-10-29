// tokyo/assets/world-CVm1JHks 58 — math
// Lines 19235-19335 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var km = new Int8Array(),
  Am = class {
    a;
    n = 0;
    constructor(e) {
      this.a = new Int8Array(Math.max(16, Math.ceil(e) * 4));
    }
    reserve(e) {
      if (this.n + e * 4 <= this.a.length) return;
      let t = new Int8Array(
        Math.max(Math.ceil((this.a.length * 1.5) / 4) * 4, this.n + e * 4),
      );
      (t.set(this.a.subarray(0, this.n)), (this.a = t));
    }
    p3(e, t, n) {
      this.reserve(1);
      let r = this.a,
        i = this.n;
      ((r[i] = Math.round(e * 127)),
        (r[i + 1] = Math.round(t * 127)),
        (r[i + 2] = Math.round(n * 127)),
        (r[i + 3] = 0),
        (this.n = i + 4));
    }
    get(e, t) {
      let n = this.a,
        r = e * 4;
      return t.set(n[r] / 127, n[r + 1] / 127, n[r + 2] / 127);
    }
    set(e, t, n, r) {
      let i = this.a,
        a = e * 4;
      ((i[a] = Math.round(t * 127)),
        (i[a + 1] = Math.round(n * 127)),
        (i[a + 2] = Math.round(r * 127)));
    }
    attribute() {
      let e =
        this.n >= this.a.length * Cm
          ? this.a.subarray(0, this.n)
          : this.a.slice(0, this.n);
      return new B(e, 4, !0);
    }
    free() {
      ((this.a = km), (this.n = 0));
    }
  },
  jm = class {
    a;
    n = 0;
    float = !1;
    constructor(e) {
      this.a = new Uint16Array(Math.max(16, Math.ceil(e) * 2));
    }
    reserve(e) {
      if (this.n + e <= this.a.length) return;
      let t = this.float
        ? new Float32Array(Math.max(Math.ceil(this.a.length * 1.5), this.n + e))
        : new Uint16Array(Math.max(Math.ceil(this.a.length * 1.5), this.n + e));
      (t.set(this.a.subarray(0, this.n)), (this.a = t));
    }
    toFloat() {
      let e = new Float32Array(this.a.length),
        t = this.a;
      for (let n = 0; n < this.n; n++) e[n] = t[n] / 65535;
      ((this.a = e), (this.float = !0));
    }
    p2(e, t) {
      (this.reserve(2),
        !this.float &&
          !(e >= 0 && e <= 1 && t >= 0 && t <= 1) &&
          this.toFloat());
      let n = this.a,
        r = this.n;
      (this.float
        ? ((n[r] = e), (n[r + 1] = t))
        : ((n[r] = Math.round(e * 65535)), (n[r + 1] = Math.round(t * 65535))),
        (this.n = r + 2));
    }
    attribute() {
      let e =
        this.n >= this.a.length * Cm
          ? this.a.subarray(0, this.n)
          : this.a.slice(0, this.n);
      return new B(e, 2, !this.float);
    }
    free() {
      ((this.a = Dm), (this.n = 0));
    }
  };
function Mm(e, t) {
  let n = 0,
    r = e.length / 3 - 1;
  for (; n <= r;) {
    let i = (n + r) >> 1;
    if (t < e[i * 3]) r = i - 1;
    else if (t >= e[i * 3 + 1]) n = i + 1;
    else return e[i * 3 + 2];
  }
  return 0;
}
