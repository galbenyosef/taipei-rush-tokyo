// tokyo/assets/region-tokyo-A7LxHjud 353 — math
// Lines 128298-128647 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Ije(e, t) {
  let n = [],
    r = 0,
    i = e.length;
  for (; r < i;) {
    if (!(e[r] < 800)) {
      r++;
      continue;
    }
    let a = r,
      o = e[r];
    for (; a < i && e[a] < 800;) o = Math.min(o, e[a++]);
    let s = Math.min(CX, Math.floor((Fje * Math.sqrt(o)) / 5) * 5 * bX);
    (s < 20.823333333333334 &&
      n.push({ d0: r, d1: a + t, v: s, r: Math.round(o) }),
      (r = a));
  }
  return n;
}
function Lje(e, t, n, r) {
  let i = t[0],
    a = t.map((e) => (e - i) * n),
    o = a[a.length - 1],
    s = Math.ceil(o) + 60,
    c = new Float32Array(s),
    l = { x: 0, z: 0, tx: 0, tz: 0 },
    u = { x: 0, z: 0, tx: 0, tz: 0 };
  for (let t = 0; t < s; t++) {
    let r = i + n * t;
    (e.at(r - 2.5, l), e.at(r + 2.5, u));
    let a = Math.abs(
      Math.atan2(l.tx * u.tz - l.tz * u.tx, l.tx * u.tx + l.tz * u.tz),
    );
    c[t] = a > 1e-4 ? 5 / a : 1 / 0;
  }
  return { length: o, marks: a, radius: c, zones: Ije(c, r) };
}
function TX(e, t) {
  let n = Math.abs(e) / bX,
    r = 1.6 + 0.035 * n + 28e-5 * n * n;
  return (t < 2e3 && (r += 600 / t), (r / 1e3) * Mje);
}
var EX = class {
    route;
    constructor(e) {
      this.route = e;
    }
    step(e) {
      let t = CX;
      for (let n of this.route.zones)
        e >= n.d0 && e <= n.d1 && n.v < t && (t = n.v);
      return t;
    }
    permitted(e, t) {
      let n = this.step(e);
      for (let t of this.route.zones) {
        if (t.d0 <= e || t.v >= n) continue;
        let r = Math.sqrt(t.v * t.v + 2 * wX * (t.d0 - e));
        r < n && (n = r);
      }
      let r = t + 10 - e,
        i = r > 0 ? Math.sqrt(2 * wX * r) : 0;
      return Math.min(n, i);
    }
    nextLower(e, t, n) {
      let r = this.step(e),
        i = 1 / 0;
      for (let a of this.route.zones)
        a.d0 > e &&
          a.d0 - e < t &&
          a.v < r &&
          a.d0 - e < i &&
          ((i = a.d0 - e), (n.v = a.v), (n.dist = i), (n.r = a.r));
      return i < 1 / 0;
    }
  },
  DX = class e {
    atcSys;
    d = 0;
    v = 0;
    a = 0;
    aTr = 0;
    aBr = 0;
    h = -7;
    eb = !1;
    atc = !1;
    atcHits = 0;
    interlock = !0;
    permitted = CX;
    jerkSum = 0;
    aStop = 0;
    justStopped = !1;
    atcOn = !1;
    constructor(e) {
      this.atcSys = e;
    }
    setHandle(e) {
      if (
        ((e = Math.max(-8, Math.min(xX.P, Math.round(e)))),
        e === -8 && (this.eb = !0),
        this.eb && e !== -8 && this.v > 0.01)
      ) {
        this.h = -8;
        return;
      }
      (e !== -8 && (this.eb = !1), (this.h = e));
    }
    static traction(e, t) {
      if (e <= 0) return 0;
      let n = xX.powerFrac[e - 1] ?? 1,
        r = xX.vBase;
      return xX.a0 * n * (t > r ? r / t : 1);
    }
    static brake(e) {
      return e === -8 ? xX.bEB : e < 0 ? SX * -e : 0;
    }
    step(t, n) {
      ((this.justStopped = !1), (this.atcOn = !1));
      let r = this.atcSys;
      if (r) {
        let e = (this.permitted = r.permitted(this.d, n.stopD));
        !this.atc && this.v > e + Nje
          ? ((this.atc = !0), (this.atcOn = !0), this.atcHits++)
          : this.atc && (this.v < e - Pje || this.v <= 0.01) && (this.atc = !1);
      }
      let i =
          this.interlock || this.atc || this.eb
            ? 0
            : e.traction(this.h, this.v),
        a = this.eb ? xX.bEB : e.brake(this.h);
      this.atc && (a = Math.max(a, xX.bMax));
      let o = 1 - Math.exp(-t / (i > this.aTr ? xX.tauP : xX.tauPoff));
      this.aTr += (i - this.aTr) * o;
      let s =
        1 -
        Math.exp(
          -t / (this.eb ? xX.tauEB : a > this.aBr ? xX.tauB : xX.tauBoff),
        );
      this.aBr += (a - this.aBr) * s;
      let c = TX(this.v, n.r),
        l = this.a;
      if (this.v > 0) {
        let e = this.aTr - this.aBr - c,
          n = this.v + e * t;
        (n <= 0
          ? ((this.aStop = Math.max(0, this.aBr + c - this.aTr)),
            (this.justStopped = !0),
            (this.d += (this.v * this.v) / (2 * Math.max(1e-4, -e))),
            (n = 0),
            (this.a = 0))
          : ((this.d += ((this.v + n) / 2) * t), (this.a = e)),
          (this.v = n));
      } else
        this.aTr > this.aBr + c + 0.005
          ? ((this.a = this.aTr - this.aBr - c),
            (this.v = this.a * t),
            (this.d += 0.5 * this.v * t))
          : ((this.v = 0), (this.a = 0));
      if (!this.justStopped && t > 0) {
        let e = Math.abs(this.a - l) / t;
        e > 1.2 && e < 60 && (this.jerkSum += (e - 1.2) * t);
      }
    }
  },
  Rje = 0.1;
function zje(e) {
  let t = 1 - 0.35 * e.jerkSum - 1 * Math.max(0, e.aStop - 0.4);
  return (e.eb && (t -= 0.5), Math.max(0, Math.min(1, t)));
}
function Bje(e) {
  let t = Math.abs(e.offsetM),
    n =
      t <= 0.1
        ? 100
        : t <= 0.5
          ? 100 - (25 * (t - Rje)) / 0.4
          : t <= 1
            ? 75 - (15 * (t - 0.5)) / 0.5
            : t <= 3
              ? 60 - (35 * (t - 1)) / 2
              : Math.max(0, 25 - (t - 3) * 2);
  (e.offsetM > 0.5 && (n *= 0.6), (n = Math.max(0, n - 15 * e.restops)));
  let r = e.lateS,
    i = Math.max(
      0,
      r >= 0
        ? r <= 2
          ? 100
          : 100 - 4 * (r - 2)
        : r >= -2
          ? 100
          : 100 - 2 * (-r - 2),
    ),
    a = zje(e),
    o = Math.max(0, 100 - 35 * e.atcHits),
    s = t <= 0.1 && e.restops === 0,
    c = (s ? 10 : 0) + 2 * Math.min(2, e.calls) - (e.eb ? 20 : 0),
    l = Math.max(
      0,
      Math.min(114, 0.4 * n + 0.25 * i + 0.2 * a * 100 + 0.15 * o + c),
    );
  return {
    score: Math.round(l * 10) / 10,
    pitta: s,
    comfort: Math.round(a * 100) / 100,
    parts: {
      pos: Math.round(n),
      time: Math.round(i),
      comfort: Math.round(a * 100),
      atc: Math.round(o),
      bonus: c,
    },
  };
}
function Vje(e) {
  return e >= 92 ? `S` : e >= 80 ? `A` : e >= 60 ? `B` : `C`;
}
var OX = { v: 0, dist: 0, r: 0 };
function kX(e, t, n, r = t, i = 0) {
  let a = e.v,
    o = e.aBr,
    s = e.aTr,
    c = 0,
    l = 1 / 30;
  for (let u = 0; u < 1200 && a > 0; u++) {
    let u = DX.brake(a < i ? r : t);
    ((s += (0 - s) * (1 - Math.exp(-0.03333333333333333 / xX.tauPoff))),
      (o +=
        (u - o) *
        (1 - Math.exp(-0.03333333333333333 / (u > o ? xX.tauB : xX.tauBoff)))));
    let d = Math.min(n.radius.length - 1, Math.max(0, Math.floor(e.d + c))),
      f = s - o - TX(a, n.radius[d] ?? 1 / 0),
      p = a + f * l;
    if (p <= 0) return c + (a * a) / (2 * Math.max(1e-4, -f));
    ((c += ((a + p) / 2) * l), (a = p));
  }
  return a > 0 ? 1 / 0 : c;
}
var AX = 8 * bX;
function jX(e) {
  let { sim: t, atc: n, stopD: r } = e,
    i = t.v,
    a = t.d;
  if (t.interlock) return { h: -4, why: `hold` };
  let o = r - a;
  if (o < 0.03 && o > -60) return { h: i > 0.05 ? -3 : -2, why: `hold` };
  if (o < 400) {
    let n = i < AX;
    if (i > 0.05) {
      let r = (r) =>
          n ? kX(t, r, e.route) : kX(t, r, e.route, Math.max(r, -2), AX),
        i = n ? -2 : -4;
      if (r(i) >= o - (n ? 0.05 : 1)) {
        let e = i,
          t = 1 / 0,
          a = n ? 0 : -2,
          s = n ? -5 : -7;
        for (let i = a; i >= s; i--) {
          let a = r(i),
            s = (a > o ? (a - o) * 2 : o - a) + (n ? 0.004 : 0.3) * -i;
          s < t && ((t = s), (e = i));
        }
        return { h: e, why: n ? `twostage` : `brake` };
      }
    } else if (o < 4) return { h: 1, why: `creep` };
    if (o < 4 && i < 1.2) return { h: +(i < 0.7), why: `creep` };
  }
  let s = n.permitted(a, r),
    c = Math.min(e.vc, n.step(a) - 3 * bX);
  if (n.nextLower(a, 300, OX)) {
    let e = OX.v - 3 * bX,
      t = (i * i - e * e) / (2 * Math.max(1, OX.dist - 4));
    if (i > e && t > 0.42)
      return {
        h: -Math.min(6, Math.max(2, Math.ceil(t / SX + 0.4))),
        why: `curve`,
      };
    c = Math.min(c, Math.sqrt(e * e + 0.84 * Math.max(0, OX.dist - 4)));
  }
  return i > s - 0.5555555555555556
    ? { h: -3, why: `atc` }
    : i > c + 0.5555555555555556
      ? { h: -2, why: `curve` }
      : i < c - 1.6666666666666667
        ? { h: 5, why: `power` }
        : (t.h > 0 ? i < c - 0.1388888888888889 : i < c - 0.8333333333333334)
          ? { h: t.h > 0 ? t.h : 3, why: `power` }
          : { h: 0, why: `coast` };
}
var MX = 0.25;
function NX(e, t, n, r = 1 / 30) {
  let i = new EX(e),
    a = new DX(i);
  ((a.d = e.marks[t]), (a.interlock = !1), (a.h = 0));
  let o = e.marks[t + 1],
    s = 0,
    c = 0,
    l = MX;
  for (let t = 0; t < 14400; t++) {
    if (((l += r), l >= 0.25)) {
      l = 0;
      let t = jX({ sim: a, route: e, atc: i, stopD: o, vc: n });
      t.h !== a.h && a.setHandle(t.h);
    }
    if (
      (a.step(r, {
        r:
          e.radius[
            Math.max(0, Math.min(e.radius.length - 1, Math.floor(a.d)))
          ] ?? 1 / 0,
        stopD: o,
      }),
      (s += r),
      a.v <= 0.001 && Math.abs(a.d - o) < 3 && s > 5)
    ) {
      if (((c += r), c > 0.5 || Math.abs(a.d - o) < 0.5)) break;
    } else c = 0;
  }
  return { t: s, off: a.d - o, atcHits: a.atcHits };
}
function Hje(e, t, n) {
  let r = 20 * bX,
    i = CX;
  if (NX(e, t, i).t >= n) return i;
  for (let a = 0; a < 9; a++) {
    let a = (r + i) / 2;
    NX(e, t, a).t > n ? (r = a) : (i = a);
  }
  return i;
}
var PX = {
    tutorial: { vRef: 45 * bX, allow: 8, dwell: 25, firstDep: 30 },
    rush: { vRef: CX, allow: 1, dwell: 30, firstDep: 25 },
    late: { vRef: 60 * bX, allow: 4, dwell: 20, firstDep: 25 },
    shuden: { vRef: 55 * bX, allow: 5, dwell: 20, firstDep: 25 },
  },
  Uje = (e) => Math.ceil(e / 5) * 5;
function Wje(e, t, n) {
  let r = PX[t],
    i = [],
    a = Uje(n + r.firstDep);
  i.push({ i: 0, arr: NaN, dep: a });
  for (let t = 1; t < e.marks.length; t++) {
    let n = NX(e, t - 1, r.vRef).t,
      o = Math.ceil(a + n + r.allow);
    ((a = t === e.marks.length - 1 ? NaN : o + r.dwell),
      i.push({ i: t, arr: o, dep: a }));
  }
  return i;
}
