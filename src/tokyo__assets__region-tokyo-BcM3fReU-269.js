// tokyo__assets__region-tokyo-BcM3fReU 269 — math
// Lines 104953-105027 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Q4 = (e) =>
  e === 1 ? `1st` : e === 2 ? `2nd` : e === 3 ? `3rd` : `${e}th`;
function $4(e, t, n) {
  return Math.abs(t - e.x) - e.halfX > Math.abs(n - e.z) - e.halfZ ? `x` : `z`;
}
function e3(e, t, n, r) {
  let i = e.ctx,
    a = i.plan;
  t.pointAt(n, j4);
  let o = a.nodeAt(j4.x, j4.z)?.id ?? -1;
  for (let e = 2; e <= 44 && !(!t.closed && n + e > t.length); e += 2) {
    t.pointAt(n + e, j4);
    let s = a.nodeAt(j4.x, j4.z);
    if (!s || s.id === o) continue;
    if (!i.signals.isSignalized(s.id)) {
      o = s.id;
      continue;
    }
    t.pointAt(Math.max(0, n + e - 6), M4);
    let c = $4(s, M4.x, M4.z),
      l = i.signals.state(s.id, c),
      u = n + e - 2;
    if (l === `red`) return u - 2;
    if (l === `yellow`) {
      let t = e - 2,
        n = t > 1.5 + (r * r) / 12,
        a = t / Math.max(1.5, r) < i.signals.remaining(s.id, c) - 0.3;
      return n && !a ? u - 2 : -1;
    }
    return -1;
  }
  return -1;
}
var t3 = [];
function n3(e, t, n, r = !1) {
  let i = t.body,
    a = Math.hypot(i.vx, i.vz),
    o = r && a > 2 ? Math.atan2(i.vx, -i.vz) : t.heading,
    s = Math.sin(o),
    c = -Math.cos(o),
    l = n / 2,
    u = e.ctx.dynamics.query(i.x + s * l, i.z + c * l, l + 2, t3),
    d = 1 / 0;
  r3 = ``;
  for (let t = 0; t < u; t++) {
    let a = t3[t];
    if (
      a === i ||
      !a.active ||
      Math.abs((a.y ?? 0) - (i.y ?? 0)) > 2.5 ||
      (a.kind !== `vehicle` &&
        a.kind !== `ped` &&
        a.kind !== `player` &&
        a.kind !== `police`)
    )
      continue;
    if (a.kind !== `vehicle` || r) {
      let t = e.ctx.plan.surfaceAt(a.x, a.z);
      if (t !== `road` && t !== `crosswalk`) continue;
    }
    let o = a.x - i.x,
      l = a.z - i.z,
      u = o * s + l * c;
    if (u <= 0.3 || u > n) continue;
    let f = o * -c + l * s,
      p = Math.max(a.halfW, (a.radius || 0.4) * 0.6);
    if (Math.abs(f) > i.halfW + p + 0.35) continue;
    let m = u - i.halfL - Math.max(p, (a.radius || 0.4) * 0.75);
    m < d && ((d = m), (r3 = a.kind));
  }
  return d;
}
var r3 = ``,
  i3 = (e, t) => (e < 0 ? t : t < 0 ? e : Math.min(e, t)),
  a3 = (e, t) => (e < 0 ? -1 : Math.max(e, t));
