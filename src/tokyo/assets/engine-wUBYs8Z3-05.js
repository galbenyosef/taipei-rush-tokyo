// tokyo/assets/engine-wUBYs8Z3 05 — slots
// Lines 1433-1782 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function pt() {
  return ft++;
}
var mt = 8,
  ht = Math.ceil((rt * 2) / mt),
  gt = 5,
  _t = 31,
  vt = Math.ceil(ht / 32);
function k(e) {
  let t = Math.floor((e + rt) / mt);
  return t < 0 ? 0 : t >= ht ? 447 : t;
}
var yt = 1,
  bt = class {
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
            let i = (t >> gt) * vt + (n >> gt),
              a = e[i];
            a ||
              (e[i] = a =
                { cells: Array(1024), counts: new Uint16Array(1024) });
            let o = ((t & _t) << gt) | (n & _t),
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
        o = ++yt,
        s = k(e - n),
        c = k(e + n),
        l = k(t - n),
        u = k(t + n),
        d = this.pages;
      for (let f = l; f <= u; f++)
        for (let l = s; l <= c; l++) {
          let s = d[(f >> gt) * vt + (l >> gt)];
          if (s === void 0) continue;
          let c = ((f & _t) << gt) | (l & _t),
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
function xt() {
  return {
    distance: 0,
    point: new Te(),
    normal: new Te(),
    tag: ``,
    body: null,
  };
}
(xt(), xt());
function A(e) {
  return (
    !!e &&
    typeof e == `object` &&
    typeof e.version == `number` &&
    Number(e.version) > 1
  );
}
var St = `open`,
  Ct = {
    url: `https://auth.taipei-rush.app`.replace(/\/$/, ``),
    publishableKey: `sb_publishable_NLgL_rFWz2yEugLly54P-g_smO0obVw`,
    siteKey: `0x4AAAAAAFPvFluW05hu9g3O`,
  },
  wt = [
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
  ],
  Tt = [`goldfish`, `rings`, `pinball`];
function Et(e) {
  let t = (e ?? ``).trim();
  if (!t || t === `0`) return [];
  if (t === `1`) return Tt;
  if (t === `all`) return wt;
  let n = t.split(`,`).map((e) => e.trim());
  return wt.filter((e) => n.includes(e));
}
Et(`all`);
function Dt(e) {
  return (e ?? ``).trim() === `2`;
}
var Ot = Dt(`2`),
  j = `tokyo-rush-save-v1`,
  kt = `taipei-rush-cloud-session-v1`,
  At = `${j}:cloud-v1`,
  jt = `taipei-rush-cloud-account-v1`,
  Mt = jt,
  M = `${j}:identities-v1`,
  Nt = `taipei-rush-device-v1`,
  Pt = [`quality`, `masterVolume`, `musicVolume`, `sfxVolume`, `showFps`];
function Ft() {
  let e = P(Nt),
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
function It() {
  if (N()) return !0;
  let e = yn(),
    t = on(),
    n =
      e?.anonymous === !1 && !fn().signedOut && t?.userId === e.user_id
        ? e.user_id
        : `guest`,
    r = I();
  return F(M, {
    active: n,
    slots: { [n]: { data: r, backups: [], ...(t ? { sync: t } : {}) } },
  });
}
function Lt() {
  return N()?.active ?? `guest`;
}
function Rt(e) {
  return N()?.slots[e]?.data ?? null;
}
function zt(e) {
  if (e === `tokyo-rush-save-v1`) return P(e);
  let t = P(`${e}:identities-v1`),
    n = Lt();
  return t?.active === n
    ? P(e)
    : (t?.slots?.[n]?.data ?? (n === `guest` && !t ? P(e) : null));
}
function Bt(e, t = !1) {
  if (!It()) return !1;
  let n = N();
  if (A(I()) || A(n.slots[e]?.data)) return !1;
  if (e === n.active) return !0;
  let r = I();
  n.slots[n.active].data = r;
  let i = n.slots.guest,
    a = !n.slots[e],
    o = n.slots[e] ?? { data: i?.data ?? null, backups: [] };
  (a && e !== `guest` && o.data !== null && (o.adopted = !0),
    t && i?.sync?.userId === e && ((o.sync = i.sync), delete o.adopted),
    (n.slots[e] = o),
    (n.active = e));
  for (let t of fn().deleted ?? [])
    t !== e && t !== `guest` && delete n.slots[t];
  let s = N();
  if (!F(M, n)) return !1;
  try {
    return (
      o.data === null
        ? localStorage.removeItem(j)
        : localStorage.setItem(j, JSON.stringify(o.data)),
      !0
    );
  } catch {
    return (F(M, s), !1);
  }
}
function Vt() {
  let e = N(),
    t = e?.slots[e.active];
  return !!t && t.adopted === !0 && t.sync?.userId !== e.active;
}
function Ht(e) {
  let t = N();
  if (!t) return !1;
  let n = t.slots[t.active];
  return (delete n.adopted, e && (n.notice = e), F(M, t));
}
