// tokyo/assets/actors-bknSEpf2 04 — math
// Lines 943-1020 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function lr(e) {
  let t = tr[e],
    n = cr[e],
    r = t.maxSpeed * 1.02,
    i = t.accel * (1 - (1.02 / ar) ** or);
  n.drag = Math.max(5e-5, (i - sr) / (r * r));
}
for (let e of Qn) lr(e);
var ur = 0,
  dr = 11,
  fr = 13,
  pr = (e) => Math.acos(Math.max(-1, Math.min(1, e)));
function mr(e, t, n) {
  ((n.thigh = 1.4), (n.knee = 1.2));
  let r = e.thighLen,
    i = e.shinLen;
  if (r > 0.05 && i > 0.05) {
    let a = (cr[t]?.seat[1] ?? 0.42) + 0.06,
      o = Math.max(t === `sports` ? 0.24 : 0.3, a - 0.46),
      s = Math.max(0.07, e.joints[fr].y),
      c = a + e.joints[dr].y - e.joints[ur].y - (o + s),
      l = Math.min(0.72, (r + i) * 0.85),
      u = Math.min(
        r + i - 0.001,
        Math.max(Math.abs(r - i) + 0.001, Math.hypot(c, l)),
      );
    ((n.thigh = Math.atan2(l, c) + pr((r * r + u * u - i * i) / (2 * r * u))),
      (n.knee = pr((u * u - r * r - i * i) / (2 * r * i))));
  }
  return ((n.foot = n.knee - n.thigh), n);
}
var hr = Math.PI * 2;
function gr(e) {
  let t = e.toLowerCase();
  return t.includes(`super`) || t.includes(`sport`) || t.includes(`racer`)
    ? `sport`
    : t.includes(`moto`) ||
        t.includes(`bike`) ||
        t.includes(`cruiser`) ||
        t.includes(`cub`)
      ? `moto`
      : `scooter`;
}
function _r() {
  return {
    speed: 0,
    dirX: 0,
    dirZ: -1,
    turnRate: 0,
    accel: 0,
    grounded: !0,
    vy: 0,
    airTime: 0,
    aim: 0,
    aimPitch: 0,
    aimYaw: 0,
    lookYaw: 0,
    lookPitch: 0,
    weapon: `fists`,
    steer: 0,
    vehSpeed: 0,
    fallBack: !0,
    prop: `none`,
    guard: 0,
    lookW: 0.65,
    airborne: !1,
    grade: 0,
  };
}
function K(e, t, n) {
  if (e <= t[0]) return n[0];
  for (let r = 1; r < t.length; r++)
    if (e <= t[r]) {
      let i = (e - t[r - 1]) / (t[r] - t[r - 1]);
      return n[r - 1] + (n[r] - n[r - 1]) * (i * i * (3 - 2 * i));
    }
  return n[n.length - 1];
}
