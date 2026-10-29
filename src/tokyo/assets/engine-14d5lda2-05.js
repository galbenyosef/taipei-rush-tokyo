// tokyo/assets/engine-14d5lda2 05 — math
// Lines 1438-1785 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
function mt() {
  return pt++;
}
var ht = 8,
  gt = Math.ceil((it * 2) / ht),
  _t = 5,
  vt = 31,
  yt = Math.ceil(gt / 32);
function k(e) {
  let t = Math.floor((e + it) / ht);
  return t < 0 ? 0 : t >= gt ? 447 : t;
}
var bt = 1,
  xt = class {
    bodies = new Set();
    list = [];
    pages = Array(196);
    touched = new Int32Array(1024);
    nTouched = 0;
    get pageCount() {
      let e = 0;
      for (let t = 0; t < this.pages.length; t++) this.pages[t] && e++;
      return e;
    }
    add(e) {
      return (this.bodies.has(e) || (this.bodies.add(e), this.list.push(e)), e);
    }
    remove(e) {
      if (!this.bodies.delete(e)) return;
      let t = this.list.indexOf(e);
      t >= 0 &&
        ((this.list[t] = this.list[this.list.length - 1]), this.list.pop());
    }
    rebuild() {
      let e = this.pages;
      for (let t = 0; t < this.nTouched; t++) {
        let n = this.touched[t];
        e[n >> 10].counts[n & 1023] = 0;
      }
      this.nTouched = 0;
      let t = this.list;
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        if (!r.active) continue;
        let i = k(r.x - r.radius),
          a = k(r.x + r.radius),
          o = k(r.z - r.radius),
          s = k(r.z + r.radius);
        for (let t = o; t <= s; t++)
          for (let n = i; n <= a; n++) {
            let i = (t >> _t) * yt + (n >> _t),
              a = e[i];
            a ||
              (e[i] = a =
                { cells: Array(1024), counts: new Uint16Array(1024) });
            let o = ((t & vt) << _t) | (n & vt),
              s = a.cells[o];
            s || (a.cells[o] = s = []);
            let c = a.counts[o];
            if (c === 0) {
              if (this.nTouched === this.touched.length) {
                let e = new Int32Array(this.touched.length * 2);
                (e.set(this.touched), (this.touched = e));
              }
              this.touched[this.nTouched++] = (i << 10) | o;
            }
            c < 65535 && ((s[c] = r), (a.counts[o] = c + 1));
          }
      }
    }
    query(e, t, n, r, i) {
      let a = 0,
        o = ++bt,
        s = k(e - n),
        c = k(e + n),
        l = k(t - n),
        u = k(t + n),
        d = this.pages;
      for (let f = l; f <= u; f++)
        for (let l = s; l <= c; l++) {
          let s = d[(f >> _t) * yt + (l >> _t)];
          if (s === void 0) continue;
          let c = ((f & vt) << _t) | (l & vt),
            u = s.counts[c];
          if (u === 0) continue;
          let p = s.cells[c];
          for (let s = 0; s < u; s++) {
            let c = p[s];
            if (c._q === o || ((c._q = o), !c.active)) continue;
            let l = n + c.radius,
              u = c.x - e,
              d = c.z - t;
            u * u + d * d > l * l || ((!i || i(c)) && (r[a++] = c));
          }
        }
      return ((r.length = a), a);
    }
    qtmp = [];
    raycast(e, t, n, r, i) {
      let a = n,
        o = null,
        s = 0,
        c = 0,
        l = this.list;
      for (let n = 0; n < l.length; n++) {
        let i = l[n];
        if (!i.active || i === r) continue;
        let u = i.x - e.x,
          d = i.z - e.z;
        if (
          u * t.x + d * t.z < -i.radius ||
          u * u + d * d > (a + i.radius) ** 2
        )
          continue;
        let f = 1 / 0,
          p = 0,
          m = 0;
        if (i.kind === `vehicle`) {
          let n = Math.cos(i.heading),
            r = Math.sin(i.heading),
            o = (e.x - i.x) * n + (e.z - i.z) * r,
            s = -(e.x - i.x) * r + (e.z - i.z) * n,
            c = t.x * n + t.z * r,
            l = -t.x * r + t.z * n,
            u = 0,
            d = a,
            h = -1;
          if (Math.abs(c) < 1e-9) {
            if (o < -i.halfW || o > i.halfW) continue;
          } else {
            let e = (-i.halfW - o) / c,
              t = (i.halfW - o) / c;
            if (e > t) {
              let n = e;
              ((e = t), (t = n));
            }
            if ((e > u && ((u = e), (h = 0)), t < d && (d = t), u > d))
              continue;
          }
          if (Math.abs(l) < 1e-9) {
            if (s < -i.halfL || s > i.halfL) continue;
          } else {
            let e = (-i.halfL - s) / l,
              t = (i.halfL - s) / l;
            if (e > t) {
              let n = e;
              ((e = t), (t = n));
            }
            if ((e > u && ((u = e), (h = 2)), t < d && (d = t), u > d))
              continue;
          }
          let g = e.y + t.y * u;
          if (g < i.y || g > i.y + i.height) continue;
          f = u;
          let _ = h === 0 ? -Math.sign(c) : 0,
            v = h === 2 ? -Math.sign(l) : 0;
          ((p = _ * n - v * r), (m = _ * r + v * n));
        } else {
          let n = e.x - i.x,
            r = e.z - i.z,
            a = t.x * t.x + t.z * t.z;
          if (a < 1e-9) continue;
          let o = n * t.x + r * t.z,
            s = n * n + r * r - i.radius * i.radius,
            c = o * o - a * s;
          if (c < 0) continue;
          ((f = (-o - Math.sqrt(c)) / a), f < 0 && (f = 0));
          let l = e.y + t.y * f;
          if (l < i.y || l > i.y + i.height) continue;
          ((p = (n + t.x * f) / i.radius), (m = (r + t.z * f) / i.radius));
        }
        f < a && ((a = f), (o = i), (s = p), (c = m));
      }
      return (
        o &&
          i &&
          ((i.distance = a),
          i.point.copy(e).addScaledVector(t, a),
          i.normal.set(s, 0, c),
          (i.tag = o.kind),
          (i.body = o)),
        o
      );
    }
  };
function St() {
  return {
    distance: 0,
    point: new xe(),
    normal: new xe(),
    tag: ``,
    body: null,
  };
}
(St(), St());
function A(e) {
  return (
    !!e &&
    typeof e == `object` &&
    typeof e.version == `number` &&
    Number(e.version) > 1
  );
}
var Ct = `open`,
  wt = {
    url: `https://auth.taipei-rush.app`.replace(/\/$/, ``),
    publishableKey: `sb_publishable_NLgL_rFWz2yEugLly54P-g_smO0obVw`,
    siteKey: `0x4AAAAAAFPvFluW05hu9g3O`,
  },
  Tt = [
    `goldfish`,
    `rings`,
    `pinball`,
    `sipalah`,
    `pokepoke`,
    `darts`,
    `claw`,
    `oyster`,
    `cutlet`,
    `xlb`,
    `mangoice`,
    `boba`,
    `sausagebun`,
    `saltchicken`,
    `wheelcake`,
    `pepperbun`,
    `tanghulu`,
    `takoyaki`,
    `fireworks`,
    `ninegrid`,
    `garbage`,
    `stinkytofu`,
    `eggcake`,
    `baseball`,
    `sushi`,
  ],
  Et = [`goldfish`, `rings`, `pinball`];
function Dt(e) {
  let t = (e ?? ``).trim();
  if (!t || t === `0`) return [];
  if (t === `1`) return Et;
  if (t === `all`) return Tt;
  let n = t.split(`,`).map((e) => e.trim());
  return Tt.filter((e) => n.includes(e));
}
Dt(`all`);
function Ot(e) {
  return (e ?? ``).trim() !== `1`;
}
var kt = Ot(`2`);
function At() {
  try {
    return new URLSearchParams(location.search).get(`legalign`) === `0`;
  } catch {
    return !1;
  }
}
var jt = kt && !At();
function Mt() {
  try {
    return new URLSearchParams(location.search).get(`altbodies`) === `1`;
  } catch {
    return !1;
  }
}
!Je().mobile || Mt();
function Nt() {
  try {
    return new URLSearchParams(location.search).get(`veh2h`);
  } catch {
    return null;
  }
}
var Pt = Nt() !== `0`;
function Ft() {
  let e = null;
  try {
    e = new URLSearchParams(location.search).get(`hbdrift`);
  } catch {}
  let t = Number(e ?? void 0 ?? 4);
  return Number.isInteger(t) && t >= 0 && t <= 4 ? t : 4;
}
var It = Ft();
function Lt() {
  try {
    let e = new URLSearchParams(location.search).get(`titleart`);
    if (e === `classic` || e === `typhoon` || e === `studio`) return e;
  } catch {}
  return `classic`;
}
Lt();
function Rt() {
  try {
    let e = new URLSearchParams(location.search).get(`herolook`);
    if (e !== null) return e === `1`;
  } catch {}
  return null;
}
var zt = Rt() ?? !0;
function Bt() {
  try {
    let e = new URLSearchParams(location.search).get(`kit`);
    if (e !== null) return e === `brothers` || e === `1`;
  } catch {}
  return null;
}
var Vt = Bt() ?? !1;
function Ht() {
  try {
    let e = new URLSearchParams(location.search).get(`heli`);
    if (e !== null) return e !== `0`;
  } catch {}
  return null;
}
var Ut = Ht() !== !1,
  j = `tokyo-rush-save-v1`,
  Wt = `taipei-rush-cloud-session-v1`,
  Gt = `${j}:cloud-v1`,
  Kt = `taipei-rush-cloud-account-v1`,
  qt = Kt,
  M = `${j}:identities-v1`,
  Jt = `taipei-rush-device-v1`,
  Yt = [`quality`, `masterVolume`, `musicVolume`, `sfxVolume`, `showFps`];
function Xt() {
  let e = P(Jt),
    t = {};
  if (!e) return t;
  (typeof e.quality == `string` &&
    /^(auto|low|medium|high|ultra)$/.test(e.quality) &&
    (t.quality = e.quality),
    typeof e.showFps == `boolean` && (t.showFps = e.showFps));
  for (let n of [`masterVolume`, `musicVolume`, `sfxVolume`]) {
    let r = e[n];
    typeof r == `number` &&
      Number.isFinite(r) &&
      (t[n] = Math.max(0, Math.min(1, r)));
  }
  return t;
}
function N() {
  let e = P(M);
  return e &&
    typeof e.active == `string` &&
    e.slots &&
    typeof e.slots == `object`
    ? e
    : null;
}
