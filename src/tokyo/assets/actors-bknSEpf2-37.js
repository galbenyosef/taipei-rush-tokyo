// tokyo/assets/actors-bknSEpf2 37 — grip
// Lines 12549-12869 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Ju(e, t, n) {
  let r = Math.max(1.12, n ? (n * 1.28) / (t * qu) : 0);
  return { maxG: Math.max(e.brakeG, t * r * 1.05), bias: e.bias, gripK: r };
}
function Yu(e) {
  let t = /^(\d+)\/(\d+)\s*Z?R\s*(\d+(?:\.\d+)?)/i.exec(e.trim());
  if (t)
    return (Number(t[3]) * 25.4) / 2e3 + (Number(t[1]) * Number(t[2])) / 1e5;
  let n = /^(\d+)\s*R\s*(\d+(?:\.\d+)?)/i.exec(e.trim());
  return n ? (Number(n[2]) * 25.4) / 2e3 + (Number(n[1]) * 0.82) / 1e3 : 0.33;
}
function Xu(e) {
  let t = /^(\d+)/.exec(e.trim());
  return t ? Number(t[1]) / 1e3 : 0.2;
}
function Zu(e, t, n, r) {
  let i = e / 2 - r / 2,
    a = Math.sqrt(Math.max(0.5, i * i - t * t)) - n / 2;
  return Math.atan(t / Math.max(0.5, a));
}
function Qu(e, t) {
  let n = e.specs,
    r = Gu[e.cls],
    i = e.tune ?? {},
    a = n.drive === `fwd` ? 0.61 : n.drive === `awd` ? 0.57 : 0.52,
    o = Yu(n.tyre),
    s = n.tyreR ? Yu(n.tyreR) : o,
    c = Xu(n.tyre),
    l = n.tyreR ? Xu(n.tyreR) : c,
    u = n.engine.kind === `ev`,
    d = n.engine.kind,
    f = t?.height ?? n.height,
    p = Math.max(1, (Wu.kwPerT[e.cls] * (n.mass + 75)) / 1e3 / n.engine.kw);
  return {
    mass: n.mass + 75,
    cgH: i.cgH ?? f * r.cg,
    frontWeight: n.frontWeight ?? a,
    wheelbase: t ? Math.max(0.8, t.rearAxle - t.frontAxle) : n.wheelbase,
    trackF: t ? t.track * 2 : n.trackF,
    trackR: t ? t.track * 2 : n.trackR,
    wheelR: (o + s) / 2,
    inertiaK: r.inertiaK,
    length: t?.length ?? n.length,
    width: t?.width ?? n.width,
    tyre: {
      mu: i.mu ?? r.tyre.mu,
      peakSlip: i.peakSlip ?? r.tyre.peakSlip,
      shape: r.tyre.shape,
      loadSens: r.tyre.loadSens,
      rearK: Math.min(1.08, Math.max(1, Math.sqrt(l / c))),
      latK: Uu.latK,
      rearLat: i.rearLat ?? r.rearLat,
    },
    engine: {
      kind: d,
      torque: n.engine.nm * p,
      power: n.engine.kw * p,
      idle: n.engine.idle ?? (u ? 0 : d === `diesel` ? 650 : 750),
      redline: n.engine.redline,
    },
    gearbox: {
      kind: n.gearbox.kind,
      ratios: n.gearbox.ratios,
      reverse:
        n.gearbox.reverse ??
        (n.gearbox.kind === `single`
          ? n.gearbox.ratios[0]
          : n.gearbox.ratios[0] * 0.95),
      final: n.gearbox.final,
      shiftTime: r.shiftTime,
    },
    drive: n.drive,
    awdFront: n.awdFront ?? 0.4,
    brake: Ju(r, i.mu ?? r.tyre.mu, t?.brakeFloor),
    steer: {
      lock: Math.min(
        Uu.lockMax,
        Zu(n.turningCircle, n.wheelbase, n.trackF, c) * Uu.lockK,
      ),
      rateLow: r.steerLow * (i.steerRate ?? 1),
      rateHigh: r.steerHigh * (i.steerRate ?? 1),
      limitK: r.limitK,
    },
    susp: {
      freq: r.freq,
      damping: r.damping,
      pitchPerG: i.pitchPerG ?? r.pitchPerG,
      rollPerG: i.rollPerG ?? r.rollPerG,
      rollFront: i.rollFront ?? r.rollFront,
    },
    aero: { cdA: n.cdA, downforce: i.downforce ?? 0 },
    crr: r.crr,
    assists: {
      tc: i.tc ?? r.tc,
      escMargin: i.escMargin ?? r.escMargin,
      escGain: r.escGain,
      escBeta: (i.escBeta ?? r.escBeta) * Hu,
      countersteer: i.countersteer ?? r.countersteer,
      drifty: t?.drifty,
    },
    limiter: n.limiterKmh ? Math.max(n.limiterKmh, Wu.topKmh[e.cls]) / 3.6 : 0,
    regenG: i.regenG ?? (u ? 0.12 : d === `hybrid` ? 0.05 : 0),
    reverseMax: e.cls === `bus` ? 4 : 8,
  };
}
var $u = (e, t, n, r = {}) => ({ id: e, maxKmh: t, accel: n, tune: r }),
  ed = {
    "scooter-neo": $u(`yamaba-cygnus`, 108, 7.4, {
      grip: 12.5,
      latAccel: 11.5,
      yawResp: 12.5,
    }),
    "scooter-white": $u(`sport-125 (JET class)`, 110, 7.7, {
      grip: 12.6,
      latAccel: 11.6,
      yawResp: 13,
    }),
    "scooter-jet": $u(`sim-jet-sl`, 112, 7.9, {
      grip: 12.8,
      latAccel: 11.8,
      yawResp: 13.2,
    }),
    "scooter-gp": $u(`kymko-gp (commuter)`, 98, 7, {
      grip: 12,
      latAccel: 11,
      yawResp: 13,
    }),
    "scooter-axis": $u(`axis-125 (commuter sport)`, 98, 7.1, {
      grip: 12.2,
      latAccel: 11.2,
      yawResp: 13.2,
    }),
    "scooter-swish": $u(`swish-125 (slim sport)`, 100, 7.2, {
      grip: 12.4,
      latAccel: 11.4,
      yawResp: 13,
    }),
    "scooter-fiddle": $u(`fiddle-125 (retro)`, 95, 6.9, {
      grip: 12,
      latAccel: 11,
      yawResp: 12.6,
    }),
    "scooter-saluto": $u(`saluto-125 (retro)`, 96, 7, {
      grip: 12,
      latAccel: 11,
      yawResp: 12.6,
    }),
    "scooter-vespa": $u(`vesper-sprint`, 110, 7.4, {
      grip: 12.4,
      latAccel: 11.2,
      yawResp: 12,
    }),
    "scooter-bws": $u(`yamaba-bws`, 104, 7.3, {
      grip: 12.8,
      latAccel: 11.4,
      yawResp: 11.5,
    }),
    "scooter-maxi": $u(`yamaba-xmax`, 140, 8, {
      grip: 12.6,
      latAccel: 11.6,
      yawResp: 11.2,
      brake: 11,
      maxSteer: 0.5,
      maxSteerHigh: 0.18,
    }),
    "scooter-cub": $u(`hondo-cub`, 100, 6.9, {
      grip: 11.6,
      latAccel: 10.8,
      yawResp: 11,
    }),
    "scooter-gogoro": $u(`gogora-2`, 100, 7.6),
    "scooter-wemo": $u(`gogora-viva`, 92, 7.2, {
      grip: 12.2,
      latAccel: 11.6,
      yawResp: 13.8,
      maxSteer: 0.62,
    }),
    "scooter-duke": $u(`kymko-many (older 125)`, 95, 6.9, {
      grip: 12,
      latAccel: 11,
      yawResp: 13.5,
    }),
  },
  td = {
    scooter: ed[`scooter-neo`],
    motorcycle: $u(`sim-wolf`, 120, 7.9, {
      grip: 12.2,
      latAccel: 11.2,
      yawResp: 12,
      brake: 10.5,
      maxSteer: 0.52,
      wheelie: 0.45,
    }),
    superbike: $u(`yamaba-r1`, 285, 13, {
      grip: 14,
      latAccel: 13.6,
      yawResp: 12.2,
      brake: 14.2,
      maxSteer: 0.42,
      maxSteerHigh: 0.09,
      wheelie: 1.15,
    }),
  };
function nd(e, t) {
  let n = e * 1.02,
    r = t * (1 - (1.02 / ar) ** or);
  return Math.max(5e-5, (r - sr) / (n * n));
}
function rd(e) {
  let t = new Vu(e),
    n = { vx: 0, vy: 0, r: 0 },
    r = {
      throttle: 1,
      brake: 0,
      steer: 0,
      handbrake: !1,
      hold: !1,
      digital: 0,
      ai: !1,
    },
    i = { mu: 1, roll: 0, slope: 0, airborne: !1, dead: !1 },
    a = 1 / 30,
    o = 0,
    s = 0;
  for (let e = 0; e < 90 / a; e++)
    (t.step(n, r, i, a),
      !o && n.vx >= 100 / 3.6 && (o = (e + 1) * a),
      (s = Math.max(s, n.vx)));
  return { vmax: s, accel: o ? 100 / 3.6 / o : s / 30 };
}
var id = new Map(),
  ad = new Map();
function od(e) {
  if (id.has(e)) return id.get(e);
  let t = Ku[e],
    n = tr[e],
    r = cr[e],
    i = null;
  if (t && !n.twoWheeler) {
    let e = Qu(t, {
        length: n.halfL * 2,
        width: n.halfW * 2,
        height: n.height,
        frontAxle: r.frontAxle,
        rearAxle: r.rearAxle,
        track: r.track,
        brakeFloor: r.brake,
        drifty: r.drifty,
      }),
      a = rd(e);
    i = { prof: t, params: e, spec: sd(n, a.vmax, a.accel) };
  }
  return (id.set(e, i), i);
}
function sd(e, t, n) {
  let r = Object.defineProperties({}, Object.getOwnPropertyDescriptors(e));
  return ((r.maxSpeed = t), (r.accel = n), r);
}
function cd(e, t) {
  let n = (t && e === `scooter` ? ed[t] : void 0) ?? td[e];
  if (!n) return null;
  let r = `${e}:${n.id}`,
    i = ad.get(r);
  if (!i) {
    let t = cr[e],
      a = n.maxKmh / 3.6,
      o = {
        ...t,
        ...n.tune,
        brake: Math.max(t.brake, n.tune.brake ?? t.brake),
        drag: nd(a, n.accel),
      };
    ((i = { prof: n, spec: sd(tr[e], a, n.accel), h: o }), ad.set(r, i));
  }
  return i;
}
var ld = e({ h2Simulate: () => _d, withDrift: () => hd }),
  ud = 1 / 120,
  dd = 0.15,
  fd = 16,
  pd = new WeakMap();
function md(e) {
  let t = pd.get(e);
  if (!t) {
    let n = e.spec.twoWheeler ? null : od(e.spec.kind);
    ((t = {
      baseSpec: e.spec,
      baseH: e.h,
      car: n,
      carSpec: null,
      dyn: n ? hd(new Vu(n.params)) : null,
      on: !1,
      ok:
        typeof e.sweep == `function` &&
        typeof e.collideStatics == `function` &&
        typeof e.centreInSolid == `function` &&
        typeof e.saveValid == `function`,
      bs: { vx: 0, vy: 0, r: 0 },
      inp: {
        throttle: 0,
        brake: 0,
        steer: 0,
        handbrake: !1,
        hold: !1,
        digital: 0,
        ai: !1,
      },
      env: { mu: 1, roll: 0, slope: 0, airborne: !1, dead: !1 },
    }),
      pd.set(e, t));
  }
  return t;
}
function hd(e) {
  return ((e.drift = Au[st] ?? null), e);
}
function gd(e, t) {
  let n = t.baseSpec.kind,
    r = e.altIdx ?? -1;
  return cd(n, r >= 0 ? ku[n]?.[r]?.id : void 0);
}
