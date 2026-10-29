// tokyo/assets/engine-14d5lda2 28 — math
// Lines 10833-11170 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
function _l(e, t, n, r, i, a, o) {
  let s = (t, n, r, i, a) => ({
      ...e,
      minX: t,
      maxX: n,
      minZ: r,
      maxZ: i,
      ...a,
    }),
    c = Math.max(e.minZ, r),
    l = Math.min(e.maxZ, i),
    u = Math.max(e.minX, t),
    d = Math.min(e.maxX, n),
    f = [],
    p = [];
  (r > e.minZ && f.push(s(e.minX, e.maxX, e.minZ, c, { south: a })),
    i < e.maxZ && f.push(s(e.minX, e.maxX, l, e.maxZ, { north: a })),
    t > e.minX && f.push(s(e.minX, u, c, l, { east: a })),
    n < e.maxX && f.push(s(d, e.maxX, c, l, { west: a })),
    t > e.minX && p.push(s(e.minX, u, e.minZ, e.maxZ, { east: a })),
    n < e.maxX && p.push(s(d, e.maxX, e.minZ, e.maxZ, { west: a })),
    r > e.minZ && p.push(s(u, d, e.minZ, c, { south: a })),
    i < e.maxZ && p.push(s(u, d, l, e.maxZ, { north: a })));
  let m = (e) => e.maxX - e.minX >= o && e.maxZ - e.minZ >= o,
    h = (e) =>
      e.reduce((e, t) => e + (t.maxX - t.minX) * (t.maxZ - t.minZ), 0) -
      400 * Math.max(0, e.length - 1),
    g = f.filter(m),
    _ = p.filter(m);
  return h(g) >= h(_) ? g : _;
}
var vl = [0, 4, -4, 8, -8, 12, -12, 16, -16, 20, -20, 26, -26, 32, -32];
function yl(e, t) {
  try {
    return !!e(t);
  } catch {
    return !1;
  }
}
function bl(e) {
  return [...new Set(e)].sort((e, t) => e - t);
}
function xl(e, t, n, r, i) {
  let a = (r + i) / 2;
  for (let r of e)
    if (r.axis === t && Math.abs(r.at - n) <= 15 && a >= r.from && a < r.to)
      return r;
  return null;
}
function $(e, t) {
  return (t + 2048) * 4096 + (e + 2048);
}
function Sl(e, t, n, r) {
  return Math.abs(t - e.x) <= e.w / 2 + r && Math.abs(n - e.z) <= e.d / 2 + r;
}
function Cl(e, t, n) {
  return (
    e.maxX > t.x - t.w / 2 - n &&
    e.minX < t.x + t.w / 2 + n &&
    e.maxZ > t.z - t.d / 2 - n &&
    e.minZ < t.z + t.d / 2 + n
  );
}
function wl(e, t, n, r, i) {
  if (e === `z`) {
    if (Math.abs(t - i.x) > i.w / 2) return 0;
    let e = Math.min(r, i.z + i.d / 2) - Math.max(n, i.z - i.d / 2);
    return Math.max(0, e) / (r - n);
  }
  if (Math.abs(t - i.z) > i.d / 2) return 0;
  let a = Math.min(r, i.x + i.w / 2) - Math.max(n, i.x - i.w / 2);
  return Math.max(0, a) / (r - n);
}
function Tl(e, t, n) {
  if (e.x1 < e.x0) {
    ((e.x0 = e.x1 = t), (e.z0 = e.z1 = n));
    return;
  }
  (t < e.x0 && (e.x0 = t),
    t > e.x1 && (e.x1 = t),
    n < e.z0 && (e.z0 = n),
    n > e.z1 && (e.z1 = n));
}
var El = class {
    g;
    f;
    came;
    closed;
    stamp;
    gen = 0;
    open;
    heap;
    hpos;
    head;
    next;
    size = 0;
    constructor(e, t) {
      ((this.g = new Float64Array(e)),
        (this.f = new Float64Array(e)),
        (this.came = new Int32Array(e)),
        (this.closed = new Uint8Array(e)),
        (this.stamp = new Uint32Array(e)),
        (this.head = new Int32Array(e)),
        (this.open = new Int32Array(Math.max(4, t))),
        (this.heap = new Int32Array(this.open.length)),
        (this.hpos = new Int32Array(this.open.length)),
        (this.next = new Int32Array(this.open.length)));
    }
    begin() {
      ((this.size = 0),
        ++this.gen > 4294967280 && (this.stamp.fill(0), (this.gen = 1)));
    }
    touch(e) {
      this.stamp[e] !== this.gen &&
        ((this.stamp[e] = this.gen),
        (this.g[e] = 1 / 0),
        (this.f[e] = 1 / 0),
        (this.came[e] = -1),
        (this.closed[e] = 0),
        (this.head[e] = -1));
    }
    less(e, t) {
      let n = this.f[this.open[e]],
        r = this.f[this.open[t]];
      return n < r || (n === r && e < t);
    }
    swap(e, t) {
      let n = this.heap,
        r = n[e],
        i = n[t];
      ((n[e] = i), (n[t] = r), (this.hpos[i] = e), (this.hpos[r] = t));
    }
    up(e) {
      let t = this.heap;
      for (; e > 0;) {
        let n = (e - 1) >> 1;
        if (!this.less(t[e], t[n])) return;
        (this.swap(e, n), (e = n));
      }
    }
    down(e) {
      let t = this.heap,
        n = this.size;
      for (;;) {
        let r = 2 * e + 1,
          i = r + 1,
          a = e;
        if (
          (r < n && this.less(t[r], t[a]) && (a = r),
          i < n && this.less(t[i], t[a]) && (a = i),
          a === e)
        )
          return;
        (this.swap(e, a), (e = a));
      }
    }
    grow() {
      let e = this.open.length * 2,
        t = (t) => {
          let n = new Int32Array(e);
          return (n.set(t), n);
        };
      ((this.open = t(this.open)),
        (this.heap = t(this.heap)),
        (this.hpos = t(this.hpos)),
        (this.next = t(this.next)));
    }
    unlink(e, t) {
      let n = -1,
        r = this.head[e];
      for (; r !== -1 && r !== t;) ((n = r), (r = this.next[r]));
      r !== -1 &&
        (n === -1
          ? (this.head[e] = this.next[r])
          : (this.next[n] = this.next[r]));
    }
    push(e) {
      this.size >= this.open.length && this.grow();
      let t = this.size++;
      ((this.open[t] = e),
        (this.next[t] = this.head[e]),
        (this.head[e] = t),
        (this.heap[t] = t),
        (this.hpos[t] = t),
        this.up(t));
    }
    pop() {
      let e = this.heap[0],
        t = this.open[e],
        n = this.size - 1;
      if (
        (this.swap(0, n),
        this.size--,
        this.size > 0 && this.down(0),
        this.unlink(t, e),
        e !== n)
      ) {
        let t = this.open[n];
        ((this.open[e] = t),
          this.unlink(t, n),
          (this.next[e] = this.head[t]),
          (this.head[t] = e));
        let r = this.hpos[n];
        ((this.heap[r] = e), (this.hpos[e] = r), this.up(r));
      }
      return t;
    }
    decreased(e) {
      for (let t = this.head[e]; t !== -1; t = this.next[t])
        this.up(this.hpos[t]);
    }
  },
  Dl = 3,
  Ol = 2,
  kl = class {
    plan;
    greenX;
    greenZ;
    offset;
    isSignal;
    time = 0;
    constructor(e) {
      this.plan = e;
      let t = e.nodes.length;
      ((this.greenX = new Float32Array(t)),
        (this.greenZ = new Float32Array(t)),
        (this.offset = new Float32Array(t)),
        (this.isSignal = new Uint8Array(t)));
      for (let t of e.nodes) {
        if (!t.signal) continue;
        this.isSignal[t.id] = 1;
        let e = 0,
          n = 0;
        for (let r of t.roads) {
          let t = r.major ? r.lanesPerDir * 2 : 1;
          r.axis === `x` ? (e = Math.max(e, t)) : (n = Math.max(n, t));
        }
        ((this.greenX[t.id] = 14 + e * 3), (this.greenZ[t.id] = 14 + n * 3));
        let r = this.cycle(t.id);
        this.offset[t.id] = (((t.x / 12.5) % r) + (wc(t.id) % 5) + r) % r;
      }
    }
    cycle(e) {
      return this.greenX[e] + this.greenZ[e] + 10;
    }
    update(e) {
      this.time += e;
    }
    isSignalized(e) {
      return this.isSignal[e] === 1;
    }
    phaseT(e) {
      let t = this.cycle(e);
      return (((this.time + this.offset[e]) % t) + t) % t;
    }
    state(e, t) {
      if (!this.isSignal[e]) return `green`;
      let n = this.phaseT(e),
        r = this.greenX[e],
        i = this.greenZ[e],
        a = r + Dl + Ol;
      return t === `x`
        ? n < r
          ? `green`
          : n < r + Dl
            ? `yellow`
            : `red`
        : n >= a && n < a + i
          ? `green`
          : n >= a + i && n < a + i + Dl
            ? `yellow`
            : `red`;
    }
    remaining(e, t) {
      if (!this.isSignal[e]) return 99;
      let n = this.phaseT(e),
        r = this.cycle(e),
        i = this.greenX[e],
        a = this.greenZ[e],
        o = i + Dl + Ol;
      return t === `x`
        ? i > n
          ? i - n
          : i + Dl > n
            ? i + Dl - n
            : r - n
        : o > n
          ? o - n
          : o + a > n
            ? o + a - n
            : o + a + Dl > n
              ? o + a + Dl - n
              : r + o - n;
    }
    pedState(e, t) {
      if (!this.isSignal[e]) return `walk`;
      let n = t === `x` ? `z` : `x`;
      return this.state(e, n) === `green`
        ? this.remaining(e, n) > 7
          ? `walk`
          : `flash`
        : `dont`;
    }
    pedRemaining(e, t) {
      let n = t === `x` ? `z` : `x`;
      return this.state(e, n) === `green` ? this.remaining(e, n) : 0;
    }
  },
  Al = !0;
function jl(e, n) {
  t(
    () =>
      import(`./panel-z7F7sGKE.js`).then((t) => {
        e.isConnected && t.mountFeedbackPanel(e, n);
      }),
    __vite__mapDeps([22, 6, 7, 9, 10, 3, 5, 8, 2, 23]),
  ).catch(() => {});
}
var Ml = [];
function Nl(e, t) {
  for (let n = 0; n < Ml.length; n++) {
    let r = Ml[n];
    if (e >= r.minX && e <= r.maxX && t >= r.minZ && t <= r.maxZ) return r;
  }
  return null;
}
var Pl = new WeakMap();
function Fl(e, t) {
  t ? Pl.set(e, t) : Pl.delete(e);
}
function Il(e) {
  return (e && Pl.get(e)) || null;
}
var Ll = new m(),
  Rl = new S(),
  zl =
    typeof location > `u` ||
    new URLSearchParams(location.search).get(`emptycull`) !== `0`;
