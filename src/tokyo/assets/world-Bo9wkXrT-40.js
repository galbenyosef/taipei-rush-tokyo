// tokyo/assets/world-Bo9wkXrT 40 — math
// Lines 12706-13030 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
var Wl = 64,
  Gl = new (class e {
    byId = new Map();
    cells = new Map();
    nextId = 1;
    static key(e, t) {
      let n = e < -511 ? 0 : e > 511 ? 1022 : e + 511,
        r = t < -511 ? 0 : t > 511 ? 1022 : t + 511;
      return n * 1024 + r;
    }
    register(t, n, r = t) {
      let i = {
        id: this.nextId++,
        owner: t,
        label: r,
        minX: Math.min(n.minX, n.maxX),
        maxX: Math.max(n.minX, n.maxX),
        minZ: Math.min(n.minZ, n.maxZ),
        maxZ: Math.max(n.minZ, n.maxZ),
        minY: n.minY ?? -1 / 0,
        maxY: n.maxY ?? 1 / 0,
      };
      this.byId.set(i.id, i);
      for (let t = Math.floor(i.minX / Wl); t <= Math.floor(i.maxX / Wl); t++)
        for (
          let n = Math.floor(i.minZ / Wl);
          n <= Math.floor(i.maxZ / Wl);
          n++
        ) {
          let r = e.key(t, n),
            a = this.cells.get(r);
          (a || this.cells.set(r, (a = [])), a.push(i.id));
        }
      let a = !0;
      return {
        id: i.id,
        owner: t,
        dispose: () => {
          a && ((a = !1), this.remove(i.id));
        },
      };
    }
    remove(t) {
      let n = this.byId.get(t);
      if (n) {
        this.byId.delete(t);
        for (let r = Math.floor(n.minX / Wl); r <= Math.floor(n.maxX / Wl); r++)
          for (
            let i = Math.floor(n.minZ / Wl);
            i <= Math.floor(n.maxZ / Wl);
            i++
          ) {
            let n = e.key(r, i),
              a = this.cells.get(n);
            if (!a) continue;
            let o = a.indexOf(t);
            (o >= 0 && a.splice(o, 1), a.length || this.cells.delete(n));
          }
      }
    }
    overlaps(t, n, r = 0.05) {
      let i = Math.min(t.minX, t.maxX),
        a = Math.max(t.minX, t.maxX),
        o = Math.min(t.minZ, t.maxZ),
        s = Math.max(t.minZ, t.maxZ),
        c = t.minY ?? -1 / 0,
        l = t.maxY ?? 1 / 0;
      for (let t = Math.floor(i / Wl); t <= Math.floor(a / Wl); t++)
        for (let u = Math.floor(o / Wl); u <= Math.floor(s / Wl); u++) {
          let d = this.cells.get(e.key(t, u));
          if (d)
            for (let e = 0; e < d.length; e++) {
              let t = this.byId.get(d[e]);
              if (
                (n === void 0 || t.owner !== n) &&
                t.minX < a - r &&
                t.maxX > i + r &&
                t.minZ < s - r &&
                t.maxZ > o + r &&
                t.minY < l &&
                t.maxY > c
              )
                return t;
            }
        }
      return null;
    }
    query(t, n = []) {
      let r = new Set(),
        i = Math.min(t.minX, t.maxX),
        a = Math.max(t.minX, t.maxX),
        o = Math.min(t.minZ, t.maxZ),
        s = Math.max(t.minZ, t.maxZ);
      for (let t = Math.floor(i / Wl); t <= Math.floor(a / Wl); t++)
        for (let c = Math.floor(o / Wl); c <= Math.floor(s / Wl); c++) {
          let l = this.cells.get(e.key(t, c));
          if (l)
            for (let e of l) {
              if (r.has(e)) continue;
              let t = this.byId.get(e);
              t.minX < a &&
                t.maxX > i &&
                t.minZ < s &&
                t.maxZ > o &&
                (r.add(e), n.push(t));
            }
        }
      return n;
    }
    all() {
      return [...this.byId.values()];
    }
    get size() {
      return this.byId.size;
    }
    clear() {
      (this.byId.clear(), this.cells.clear());
    }
    releaseOwners(e) {
      let t = 0;
      for (let n of [...this.byId.values()])
        for (let r of e)
          if (n.owner.startsWith(r)) {
            (this.remove(n.id), t++);
            break;
          }
      return t;
    }
  })(),
  Kl = 0.5,
  ql = 40;
function Jl(e, t, n, r, i, a, o) {
  if (r.length === 0) return -1;
  let s = i - e.x,
    c = o - e.z,
    l = s * t + c * n,
    u = -s * n + c * t,
    d = a - e.y;
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if (
      !(l < t.x0 || l > t.x1 || u < t.z0 || u > t.z1) &&
      !(d < -0.6 || d > t.ceilY - 0.2)
    )
      return e;
  }
  return -1;
}
function Yl(e) {
  switch (e) {
    case `temple`:
      return { room: `temple`, light: 16763024 };
    case `snack`:
    case `restaurant`:
    case `cafe`:
    case `bakery`:
    case `shop`:
    case `market`:
      return { room: `store`, light: 16773596 };
    case `museum`:
    case `government`:
    case `heritage`:
    case `university`:
    case `school`:
    case `mall`:
    case `hotel`:
    case `venue`:
      return { room: `hall`, light: 16773854 };
    default:
      return { room: `room`, light: 16771531 };
  }
}
function Xl(e, t, n, r) {
  if (n.length === 0) return () => {};
  let i = Math.cos(t.facing),
    a = Math.sin(t.facing),
    o = Yl(r),
    s = n[0],
    c = (s.x0 + s.x1) / 2,
    l = (s.z0 + s.z1) / 2;
  return jn({
    id: `site:${e}`,
    room: o.room,
    light: o.light,
    x: t.x + c * i - l * a,
    y: t.y + (s.floorY ?? 0),
    z: t.z + c * a + l * i,
    contains: (e, r, o) => Jl(t, i, a, n, e, r - 0.9, o) >= 0,
    camera: (e, r, o, s) => {
      let c = Jl(t, i, a, n, e, r - 0.9, o);
      return c < 0
        ? !1
        : ((s.ceilY = t.y + n[c].ceilY), (s.maxDist = n[c].maxCamDist), !0);
    },
  });
}
function Zl(e, t = Gl) {
  let n = [],
    r = { minX: 0, minZ: 0, maxX: 0, maxZ: 0, minY: 0, maxY: 0 };
  for (let { meta: i, site: a } of e) {
    if (!a.ok || i.interior === `none`) continue;
    let e = a.rect;
    ((r.minX = e.minX),
      (r.minZ = e.minZ),
      (r.maxX = e.maxX),
      (r.maxZ = e.maxZ),
      (r.minY = a.y - Kl),
      (r.maxY = a.y + ql));
    try {
      n.push(t.register(`sites:${i.id}`, r, `sites:${i.id}#lot`));
    } catch (e) {
      console.warn(`[sites] ${i.id}: interior claim failed`, e);
    }
  }
  return n;
}
var Ql = 2,
  $l = [1],
  eu = 110,
  tu = 16,
  nu = 70,
  ru = 2,
  iu = {
    finishes: 0,
    afterUpload: 0,
    finishMaxMs: 0,
    slices: 0,
    slowSlices: 0,
    sliceMaxMs: 0,
    atlasSlices: 0,
    atlasSlowSlices: 0,
    atlasSliceMaxMs: 0,
  };
function au() {
  return iu;
}
var ou = 2.5,
  su = new Set();
function cu(e, t) {
  (iu.slices++,
    t > iu.sliceMaxMs && (iu.sliceMaxMs = Math.round(t * 100) / 100),
    e.endsWith(`:atlas`) &&
      (iu.atlasSlices++,
      t > 2.5 && iu.atlasSlowSlices++,
      t > iu.atlasSliceMaxMs &&
        (iu.atlasSliceMaxMs = Math.round(t * 100) / 100)),
    !(t <= 2.5) &&
      (iu.slowSlices++,
      !su.has(e) &&
        (su.add(e),
        lu &&
          console.warn(
            `[test] sites slow slice ${e} ${t.toFixed(2)} ms > ${ou} — yield more often (≤3k tris per yield)`,
          ))));
}
var lu =
  typeof location < `u` && new URLSearchParams(location.search).has(`debug`);
function uu() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function du(e) {
  let t = e.info,
    n = e.lit,
    r = e.vcount * 4,
    i = 0;
  for (let e = 0; e < r; e += 4)
    t[e] === X.PLAIN && n[e + 3] > 0 && ((t[e] = X.LIT), i++);
  return i;
}
function fu(e, t) {
  let n = e.getAttribute(`aCol`),
    r = e.getAttribute(`aLight`),
    i = e.getAttribute(`position`).count,
    a = new Float32Array(i * 4),
    o = new Float32Array(i * 2),
    s = n?.array,
    c = r?.array;
  for (let e = 0; e < i; e++) {
    let n = e * 4;
    if (s) {
      let e = s[n + 3] / 255,
        t = s[n] / 255,
        r = s[n + 1] / 255,
        i = s[n + 2] / 255;
      ((a[n] = t * e), (a[n + 1] = r * e), (a[n + 2] = i * e));
    } else a[n] = a[n + 1] = a[n + 2] = 0.6;
    ((a[n + 3] = c && c[n + 3] > 0 ? 1 : 0),
      (o[e * 2] = t.u0),
      (o[e * 2 + 1] = t.v0));
  }
  (e.setAttribute(`color`, new H(a, 4)),
    e.setAttribute(`uv`, new H(o, 2)),
    e.deleteAttribute(`aCol`),
    e.deleteAttribute(`aMat`),
    e.deleteAttribute(`aLight`),
    e.deleteAttribute(`aInfo`));
}
var pu = new Set([`mid`, `near`]);
function mu(e, t, n, r, i) {
  let a = Math.cos(i),
    o = Math.sin(i),
    s = e.getAttribute(`position`);
  if (s) {
    let e = s.array;
    for (let i = 0; i < e.length; i += 3) {
      let s = e[i],
        c = e[i + 2];
      ((e[i] = t + s * a - c * o),
        (e[i + 1] += n),
        (e[i + 2] = r + s * o + c * a));
    }
    s.needsUpdate = !0;
  }
  let c = e.getAttribute(`normal`);
  if (c) {
    let e = c.array;
    for (let t = 0; t < e.length; t += 3) {
      let n = e[t],
        r = e[t + 2];
      ((e[t] = n * a - r * o), (e[t + 2] = n * o + r * a));
    }
    c.needsUpdate = !0;
  }
  return (e.computeBoundingSphere(), e.computeBoundingBox(), e);
}
