// tokyo/assets/net-PtwKfaxg 06 — math
// Lines 2453-2542 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
function ut(e) {
  if (!e || typeof e != `object` || Array.isArray(e)) return null;
  let t = e;
  return !Number.isInteger(t.revision) ||
    t.revision < 1 ||
    t.revision > 2147483647 ||
    !st(t.health) ||
    t.health < 0 ||
    t.health > 1e3 ||
    typeof t.onFire != `boolean` ||
    typeof t.destroyed != `boolean` ||
    !st(t.fireFuse) ||
    t.fireFuse < 0 ||
    t.fireFuse > 6 ||
    !st(t.wreckAge) ||
    t.wreckAge < 0 ||
    t.wreckAge > 30 ||
    (t.destroyed && (t.health !== 0 || t.onFire))
    ? null
    : {
        revision: t.revision,
        health: t.health,
        onFire: t.onFire,
        destroyed: t.destroyed,
        fireFuse: t.fireFuse,
        wreckAge: t.wreckAge,
      };
}
function dt(e) {
  if (!e || typeof e != `object`) return null;
  let t = e;
  return !st(t.pitch) ||
    Math.abs(t.pitch) > Math.PI ||
    !st(t.roll) ||
    Math.abs(t.roll) > Math.PI ||
    !st(t.heave) ||
    Math.abs(t.heave) > 3 ||
    !st(t.surge) ||
    Math.abs(t.surge) > 3
    ? null
    : { pitch: t.pitch, roll: t.roll, heave: t.heave, surge: t.surge };
}
function ft(e) {
  return `${Math.floor(e.health / 25)}:${+e.onFire}:${+e.destroyed}:${Math.round(e.fireFuse * 4)}:${Math.floor(e.wreckAge)}`;
}
function pt(e, t) {
  return (
    [e.x, e.y, e.z].map((e) => Math.round(e * 10)).join(`:`) +
    `:` +
    [e.heading, t?.pitch ?? 0, t?.roll ?? 0, t?.heave ?? 0, t?.surge ?? 0]
      .map((e) => Math.round(e * 20))
      .join(`:`)
  );
}
function mt(e, t) {
  return (
    !!e &&
    !e.destroyed &&
    t.destroyed &&
    t.wreckAge < 2 &&
    t.revision > e.revision
  );
}
var ht = {
    scooter: 2,
    motorcycle: 2,
    superbike: 2,
    sports: 2,
    truck: 2,
    van: 2,
    ambulance: 2,
    garbage: 2,
    sedan: 4,
    taxi: 4,
    suv: 4,
    police: 4,
    bus: 4,
  },
  gt = 2.6,
  _t = 2.5,
  vt = 4e3,
  yt = 1,
  bt = (e, t = 0) => (typeof e == `number` && Number.isFinite(e) ? e : t);
function xt(e, t, n, r, i, a, o) {
  let s = e - n,
    c = t - r,
    l = s * Math.sin(i) - c * Math.cos(i),
    u = s * Math.cos(i) + c * Math.sin(i);
  return Math.hypot(Math.max(0, Math.abs(u) - a), Math.max(0, Math.abs(l) - o));
}
