// tokyo__assets__world-Bo9wkXrT 21 — math
// Lines 6186-6533 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function Pr(e, t) {
  (e.col(2895667),
    e.box(-0.22, 0, -0.1, 0.22, 0.12, 0.25),
    e.box(-0.03, 0.12, 0.06, 0.03, 0.34, 0.1),
    e.push().translate(0, 0.36, 0.08).rotateX(0.35),
    e.col(1776928),
    e.box(-0.2, -0.13, -0.02, 0.2, 0.13, 0.02),
    t ? e.tex(t, 16777215, 0.9, 1.2) : e.col(3903446, 0.9),
    e.rectZ(-0.18, -0.11, 0.18, 0.11, 0.021, 1),
    e.pop(),
    e.col(1776928),
    e.box(-0.12, 0.12, -0.12, 0.12, 0.3, -0.08),
    e.col(5227511, 0.9),
    e.rectZ(-0.1, 0.14, 0.1, 0.28, -0.121, -1));
}
var Fr = class {
    px;
    py;
    pz;
    facing;
    c;
    s;
    constructor(e, t, n, r) {
      ((this.px = e),
        (this.py = t),
        (this.pz = n),
        (this.facing = r),
        (this.c = Math.cos(r)),
        (this.s = Math.sin(r)));
    }
    wx(e, t) {
      return this.px + e * this.c - t * this.s;
    }
    wz(e, t) {
      return this.pz + e * this.s + t * this.c;
    }
    lx(e, t) {
      let n = e - this.px,
        r = t - this.pz;
      return n * this.c + r * this.s;
    }
    lz(e, t) {
      let n = e - this.px,
        r = t - this.pz;
      return -n * this.s + r * this.c;
    }
    heading(e) {
      return this.facing + e;
    }
    place(e) {
      (e.position.set(this.px, this.py, this.pz),
        e.rotation.set(0, -this.facing, 0),
        e.updateMatrix(),
        e.updateMatrixWorld(!0));
    }
    box(e, t, n, r, i, a, o, s = `wall`) {
      let c = (t + r) / 2,
        l = (n + i) / 2;
      return e.addOBB(
        this.wx(c, l),
        this.wz(c, l),
        Math.abs(r - t) / 2,
        Math.abs(i - n) / 2,
        this.facing,
        this.py + a,
        this.py + o,
        s,
      );
    }
    circle(e, t, n, r, i, a, o = `pole`) {
      return e.addCircle(
        this.wx(t, n),
        this.wz(t, n),
        r,
        this.py + i,
        this.py + a,
        o,
      );
    }
    aabb(e, t, n, r) {
      let i = [this.wx(e, t), this.wx(n, t), this.wx(n, r), this.wx(e, r)],
        a = [this.wz(e, t), this.wz(n, t), this.wz(n, r), this.wz(e, r)];
      return {
        minX: Math.min(...i),
        maxX: Math.max(...i),
        minZ: Math.min(...a),
        maxZ: Math.max(...a),
      };
    }
    inside(e, t, n, r, i, a, o = 0) {
      let s = this.lx(e, t),
        c = this.lz(e, t);
      return s >= n - o && s <= i + o && c >= r - o && c <= a + o;
    }
  },
  Ir = 0,
  Lr = class {
    disabled;
    added;
    on = !1;
    constructor(e, t) {
      ((this.disabled = e), (this.added = t));
      for (let e of t) e.disabled = !0;
    }
    set(e) {
      if (e !== this.on) {
        this.on = e;
        for (let t of this.disabled) t.disabled = e;
        for (let t of this.added) t.disabled = !e;
      }
    }
    get active() {
      return this.on;
    }
  };
function Rr(e, t, n = []) {
  let r = Math.max(e.minX, t.minX),
    i = Math.min(e.maxX, t.maxX),
    a = Math.max(e.minZ, t.minZ),
    o = Math.min(e.maxZ, t.maxZ);
  return r >= i || a >= o
    ? (n.push(e), n)
    : (e.minZ < a - 0.001 &&
        n.push({ minX: e.minX, maxX: e.maxX, minZ: e.minZ, maxZ: a }),
      e.maxZ > o + 0.001 &&
        n.push({ minX: e.minX, maxX: e.maxX, minZ: o, maxZ: e.maxZ }),
      e.minX < r - 0.001 && n.push({ minX: e.minX, maxX: r, minZ: a, maxZ: o }),
      e.maxX > i + 0.001 && n.push({ minX: i, maxX: e.maxX, minZ: a, maxZ: o }),
      n);
}
function zr(e, t, n, r) {
  let i = [],
    a = e.query(t.minX, t.minZ, t.maxX, t.maxZ, i),
    o = [];
  for (let e = 0; e < a; e++) {
    let n = i[e];
    n.disabled ||
      n.maxX <= t.minX ||
      n.minX >= t.maxX ||
      n.maxZ <= t.minZ ||
      n.minZ >= t.maxZ ||
      (r(n) && o.push(n));
  }
  let s = [],
    c = [];
  for (let r of o)
    if (r.kind === Ir) {
      ((c.length = 0), Rr(r, t, c));
      for (let t of c)
        s.push(e.addBox(t.minX, t.minZ, t.maxX, t.maxZ, r.minY, r.maxY, r.tag));
      if (r.maxY > n + 0.02) {
        let i = Math.max(r.minX, t.minX),
          a = Math.min(r.maxX, t.maxX),
          o = Math.max(r.minZ, t.minZ),
          c = Math.min(r.maxZ, t.maxZ);
        s.push(e.addBox(i, o, a, c, Math.max(r.minY, n), r.maxY, r.tag));
      }
    }
  return new Lr(o, s);
}
function Br(e) {
  let t = e.atlas?.slots;
  return t === 1 || t === 2 ? t : e.interior === `full` ? 2 : 1;
}
function Vr(e) {
  return e.atlas?.midArt === !0;
}
var Hr = {
    high: {
      near: { calls: 6, tris: 6e4 },
      mid: { calls: 2, tris: 1e4 },
      interior: { calls: 3, tris: 4e4 },
    },
    low: {
      near: { calls: 3, tris: 25e3 },
      mid: { calls: 1, tris: 5e3 },
      interior: { calls: 2, tris: 2e4 },
    },
  },
  Ur = {
    proxyTris: { high: 25e3, low: 12e3 },
    proxyCalls: 1,
    clusterNearCalls: 14,
    clusterNearCallsMobile: 10,
    clusterNearTris: 14e4,
    clusterRadius: 130,
    resolveMs: { desktop: 40, mobile: 60 },
    maxClaimRects: 80,
  },
  Wr = {
    mid: { build: 260, drop: 305 },
    near: { build: 130, drop: 160 },
    interior: {
      desktop: { build: 35, drop: 47 },
      mobile: { build: 25, drop: 35 },
    },
    quality: { low: 0.6, medium: 0.8, high: 1, ultra: 1.3 },
    mobile: 0.6,
    hero: 1.25,
    dropFactor: 1.12,
    teleport: 70,
    lru: {
      nearMobile: 4,
      nearDesktop: 8,
      midMobile: 16,
      midDesktop: 32,
      nearMaxMobile: 6,
      nearMaxDesktop: 12,
      nearTrisMobile: 45e3,
      nearTrisDesktop: 14e4,
      nearCallsMobile: 12,
      nearCallsDesktop: 18,
    },
  },
  Gr = { desktop: 384, mobile: 256 },
  Kr = { desktop: Gr.desktop * 4, mobile: Gr.mobile * 4 },
  qr = 0.45;
function Jr(e) {
  return e;
}
var Yr = 0.75,
  Xr = 1.6;
function Zr(e, t, n, r) {
  let i = (Math.atan2(n - e, -(r - t)) * 180) / Math.PI;
  return i < 0 ? i + 360 : i;
}
function Qr(e, t) {
  let n = Math.abs((((e - t) % 360) + 360) % 360);
  return n > 180 ? 360 - n : n;
}
function $r(e, t, n) {
  let r = t.plan;
  if (e.kind === `landmark`) {
    let t = r.landmark(e.id);
    return t ? { x: t.x, z: t.z, exact: !0 } : null;
  }
  if (e.kind === `site`) {
    let t = n.get(e.id);
    return t && t.ok ? { x: t.x, z: t.z, exact: !0 } : null;
  }
  let i = r.mrtStations.find((t) => t.id === e.id);
  if (e.exit !== void 0 && t.entrances) {
    let n = String(e.exit);
    for (let r of t.entrances)
      if (r.stationId === e.id && r.exit !== void 0 && String(r.exit) === n)
        return { x: r.x ?? r.cx, z: r.z ?? r.cz, exact: !0 };
  }
  return i ? { x: i.ex, z: i.ez, exact: e.exit === void 0 } : null;
}
function ei(e, t, n) {
  let r = (e.bearing * Math.PI) / 180,
    i = e.dist * n;
  return { x: t.x + Math.sin(r) * i, z: t.z - Math.cos(r) * i };
}
function ti(e) {
  let t = Math.max(0, Math.min(1, (Math.abs(e) - 200) / 600));
  return { min: li(Yr + -0.33 * t), max: li(Xr + 0.09999999999999987 * t) };
}
function ni(e, t) {
  let n = e.tolDeg ?? 35,
    r = (Math.atan2(10, Math.max(t, 1)) * 180) / Math.PI;
  return ci(Math.min(180, n + r));
}
function ri(e, t) {
  let n = ci(Qr(t.planBearing, e.bearing)),
    r = ni(e, t.planDist),
    i = ti(e.dist),
    a = t.expDist > 0 ? t.planDist / t.expDist : t.planDist < 1 ? 1 : 1 / 0,
    o = Math.abs(t.planDist - t.expDist) <= 8;
  return {
    bearingErr: n,
    tolDeg: r,
    bearingOk: t.planDist < 4 || n <= r,
    ratio: li(a),
    localScale: e.dist > 0 ? li(t.planDist / e.dist) : 0,
    band: i,
    distOk: o || (a >= i.min && a <= i.max),
    slack: o,
  };
}
function ii(e, t) {
  let n = ri(e, t),
    r = [];
  if (
    (n.bearingOk ||
      r.push(
        `bearing ${t.planBearing}° vs real ${t.expBearing}° (±${n.tolDeg}°)`,
      ),
    !n.distOk)
  ) {
    let i = e.dist > 0 ? t.expDist / e.dist : 0,
      a = Math.round(n.band.min * i * 100) / 100,
      o = Math.round(n.band.max * i * 100) / 100;
    r.push(
      `dist ${t.planDist} m vs ${t.expDist} m nominal — local scale ${n.localScale}× of ${e.dist} m real, outside the ${a}–${o}× band (compression is non-uniform: band is tight ≤200 m real and widens beyond, nominal ${Math.round(i * 100) / 100}×)`,
    );
  }
  return `anchor-off ${t.id}: ${r.join(` · `) || `unknown`}`;
}
function ai(e, t, n, r, i) {
  let a = ci(Zr(t.x, t.z, n, r)),
    o = ci(Math.hypot(n - t.x, r - t.z)),
    s = ci(e.dist * i),
    c = ri(e, { planBearing: a, planDist: o, expDist: s }),
    l = c.bearingOk && c.distOk;
  return {
    id: `${e.kind}:${e.id}${e.exit === void 0 ? `` : `#${e.exit}`}`,
    planBearing: a,
    planDist: o,
    expBearing: e.bearing,
    expDist: s,
    ok: l,
  };
}
function oi(e, t, n, r) {
  let i = [];
  for (let a of e ?? []) {
    let e = $r(a, t, n);
    if (!e) {
      r.push(`anchor-missing ${a.kind}:${a.id}`);
      continue;
    }
    (e.exact ||
      r.push(
        `anchor-exit-missing mrt:${a.id}#${a.exit} (station entrance used)`,
      ),
      i.push({ ref: a, at: e, expected: ei(a, e, t.scale) }));
  }
  return i;
}
function si(e, t, n) {
  if (!e.length) return 0;
  let r = 0;
  for (let i of e) r += Math.hypot(t - i.expected.x, n - i.expected.z);
  return r / e.length;
}
function ci(e) {
  return Math.round(e * 10) / 10;
}
function li(e) {
  return Number.isFinite(e) ? Math.round(e * 1e3) / 1e3 : e;
}
function ui(e) {
  return e.roadGeometry === `polyline` ? `polyline-unsupported` : null;
}
function di(e, t) {
  return e.zh === t.zh && (t.sec === void 0 || t.sec === null || e.n === t.sec);
}
