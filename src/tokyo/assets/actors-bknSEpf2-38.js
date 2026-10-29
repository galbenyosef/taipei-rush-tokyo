// tokyo/assets/actors-bknSEpf2 38 — math
// Lines 12870-12989 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function _d(e, t, n, r) {
  let i = e,
    a = md(i),
    o = i.driver === `player`;
  if (a.baseSpec.twoWheeler) {
    let e = gd(i, a);
    if (i.spec !== a.baseSpec && i.spec !== e?.spec) return !1;
    let t = o && e,
      n = t ? e.spec : a.baseSpec,
      r = t ? e.h : a.baseH;
    return (i.spec !== n && ((i.spec = n), (i.h = r)), !1);
  }
  if ((!a.on && i.spec !== a.baseSpec && (a.dyn = null), !a.dyn || !a.ok || !o))
    return (a.on && bd(i, a), !1);
  a.on || yd(i, a);
  let s = a.dyn,
    c = Math.hypot(i.vx, i.vz);
  ((i.assist = r),
    (i.preSpeed = c),
    (i.preVx = i.vx),
    (i.preVz = i.vz),
    (i.wobbleT ?? 0) > 0 && (i.wobbleT = Math.max(0, i.wobbleT - t)));
  let l = a.inp;
  ((l.throttle = n.throttle),
    (l.brake = n.brake),
    (l.steer = n.steer),
    (l.handbrake = !!n.handbrake),
    (l.hold = !!n.hold),
    (l.ai = !1),
    (l.digital = +!!r));
  let u = i.w.ctx.plan.surfaceAt(i.body.x, i.body.z),
    d = 1,
    f = 0;
  (u === `terrain` || u === `park`
    ? ((d = 0.55), (f = 1.4))
    : u === `lot` && ((d = 0.95), (f = 0.2)),
    (d *= 1 - 0.22 * (i.w.wet?.() ?? 0)),
    i.surfMu !== void 0 && (i.surfMu = d));
  let p = a.env;
  ((p.mu = d),
    (p.roll = f),
    (p.slope = i.tPitch ?? 0),
    (p.dead = i.destroyed || i.sinking > 0));
  let m = Math.ceil(t / ud - 1e-6),
    h = Math.ceil((c * t) / dd - 1e-6),
    g = Math.max(1, Math.min(fd, Math.max(m, h))),
    _ = t / g;
  i.hasValid || i.saveValid();
  for (let e = 0; e < g; e++) vd(i, a, _);
  return (
    (i.steerIn = s.steerIn),
    (i.steer = s.delta),
    (i.handbrake = l.handbrake),
    (i.braking = s.braking),
    (i.reversing = s.reversing && i.vF < -0.1),
    (i.burnout = s.burnout),
    (i.throttleS += (s.throttle - i.throttleS) * Math.min(1, t * 10)),
    (i.slip = s.beta),
    (i.drifting =
      Math.hypot(i.vx, i.vz) > 6 && Math.abs(s.beta) > 0.18 && !i.airborne),
    !0
  );
}
function vd(e, t, n) {
  let r = t.dyn,
    i = e.heading,
    a = t.bs;
  ((a.vx = e.vx * Math.sin(i) - e.vz * Math.cos(i)),
    (a.vy = e.vx * Math.cos(i) + e.vz * Math.sin(i)));
  let o = (a.r = e.yawRate);
  ((t.env.airborne = e.airborne), r.step(a, t.inp, t.env, n));
  let s = i + o * n,
    c = Math.sin(s),
    l = -Math.cos(s),
    u = Math.cos(s),
    d = Math.sin(s);
  ((e.vx = c * a.vx + u * a.vy),
    (e.vz = l * a.vx + d * a.vy),
    (e.vF = a.vx),
    (e.vR = a.vy),
    (e.yawRate = a.r),
    (e.accLong = r.ax),
    (e.accLat = r.ay));
  let f = e.body.x,
    p = e.body.z;
  ((e.body.x += e.vx * n),
    (e.body.z += e.vz * n),
    (e.heading = Math.atan2(Math.sin(s), Math.cos(s))),
    e.sweep(f, p),
    e.collideStatics(),
    e.centreInSolid(e.body.x, e.body.z)
      ? e.hasValid &&
        ((e.body.x = e.validX), (e.body.z = e.validZ), (e.heading = e.validH))
      : ((e.validX = e.body.x),
        (e.validZ = e.body.z),
        (e.validH = e.heading),
        (e.hasValid = !0)));
}
function yd(e, t) {
  let n = t.dyn;
  n.reset();
  let r = n.p.gearbox,
    i = n.p.engine,
    a = (Math.abs(e.vF) / n.p.wheelR) * (60 / (2 * Math.PI));
  if (r.kind === `auto` || r.kind === `dct`) {
    let e = 1;
    for (
      ;
      e < r.ratios.length && a * r.ratios[e - 1] * r.final > i.redline * 0.55;
    )
      e++;
    n.gear = e;
  }
  ((t.on = !0),
    (e.spec = t.carSpec ??=
      sd(t.baseSpec, t.car.spec.maxSpeed, t.car.spec.accel)));
}
function bd(e, t) {
  ((t.on = !1), (e.spec = t.baseSpec), (e.drifting = !1), (e.gripK = e.h.grip));
}
