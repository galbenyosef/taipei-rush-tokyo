// tokyo__assets__actors-Bnj6Q1ad 125 — fail
// Lines 59081-59417 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
async function lj(e, t, n, r, i, a) {
  let o = e.ctx;
  if (
    ((i.stepIndex = r),
    (i.stepId = n.id),
    (e.step = n.id ?? `${r + 1}:${n.kind}`),
    n.checkpoint)
  ) {
    let t = n.checkpoint;
    e.checkpoint = {
      step: r,
      pos:
        typeof t == `object` && aj(t.x) && aj(t.z)
          ? { x: t.x, z: t.z, heading: aj(t.heading) ? t.heading : 0 }
          : null,
    };
  }
  if (
    (e.objective(n.objective),
    a(`step ${r} onStart`, () => n.onStart?.(o, i)),
    !e.alive)
  )
    return;
  let s = i.giver;
  for (let t of n.dialogue ?? [])
    t &&
      ij(t.text) &&
      e.queueLine(
        t.speaker ?? null,
        t.text,
        aj(t.duration) ? t.duration : void 0,
      );
  s && n.dialogue?.length && (s.anim = `talk`);
  let c = !1;
  n.timeLimit &&
    e.setTimer(n.timeLimit, n.timerLabel, () => {
      if (n.update) {
        i.__timeout = !0;
        let t = a(`step ${r} update`, () => n.update(o, 0, i));
        if (((i.__timeout = !1), !e.alive)) return;
        if (t === `done`) {
          c = !0;
          return;
        }
        if (t && typeof t == `object` && ij(t.fail)) return e.fail(t.fail);
      }
      e.fail(n.timeoutReason ?? rj);
    });
  let l = e.every((t) => {
      if (
        (s && s.anim === `talk` && e.dialogueLeft <= 0 && (s.anim = `idle`),
        !n.update)
      )
        return;
      let l = a(`step ${r} update`, () => n.update(o, t, i));
      l === `done`
        ? (c = !0)
        : l === `fail`
          ? e.fail(nj)
          : l && typeof l == `object` && ij(l.fail) && e.fail(l.fail);
    }),
    u = () => c,
    d = n.target,
    f = d?.label;
  switch (n.kind) {
    case `goto`:
    case `drive`: {
      if (!d) {
        await e.until(u);
        break;
      }
      let t = n.kind === `drive`;
      await e.goto(d, {
        radius: d.radius ?? (t ? 6 : 3),
        vehicleRadius: d.radius ?? 6,
        label: f,
        style: n.marker ?? (t ? `drive` : `goto`),
        pillar: n.pillar ?? t,
        color: n.color,
        blipIcon: n.blip,
        waypoint: n.gps !== !1,
        inVehicle: t,
        onFoot: !!n.onFoot,
        needStop: !!n.needStop,
        orWhen: u,
      });
      break;
    }
    case `enterVehicle`: {
      let t = null;
      if (aj(i.vehicleId))
        try {
          t = o.vehicles.get(i.vehicleId) ?? null;
        } catch {}
      let r = n.vehicleKinds ?? (n.vehicleKind ? [n.vehicleKind] : void 0);
      await e.enterVehicle({ vehicle: t, kinds: r, orWhen: u });
      break;
    }
    case `exitVehicle`:
      await e.exitVehicle(void 0, u);
      break;
    case `interact`: {
      if (!d) {
        await e.until(u);
        break;
      }
      let t = d.radius ?? 2.2,
        i = uj(e, n, r, d, Math.max(0.9, t * 0.55));
      (await e.pressE(d.x, d.z, t, n.prompt ?? n.objective, {
        onFoot: n.onFoot !== !1,
        orWhen: u,
        target: d,
      }),
        i(),
        c || e.sfx(`checkpoint`, { ui: !0, volume: 0.6 }));
      break;
    }
    case `wait`: {
      let t = 0,
        r = aj(n.seconds) ? n.seconds : 0;
      ((e.waitFor = { kind: `wait`, x: e.px, z: e.pz }),
        await e.until((n) =>
          c ? !0 : e.dialogueLeft > 0.05 ? !1 : ((t += n), t >= r),
        ),
        (e.waitFor = null));
      break;
    }
    case `custom`: {
      e.waitFor = { kind: `custom`, x: d?.x ?? e.px, z: d?.z ?? e.pz };
      let t = d
        ? uj(e, n, r, d, Math.max(0.9, (d.radius ?? 2.2) * 0.55))
        : null;
      (await e.until(u), t?.(), (e.waitFor = null));
      break;
    }
  }
  (l(),
    e.alive &&
      (n.timeLimit && e.clearTimer(),
      a(`step ${r} onEnd`, () => n.onEnd?.(o, i))));
}
function uj(e, t, n, r, i) {
  let a = e.ctx,
    o = r.label,
    s = a.plan.groundHeight(r.x, r.z),
    c =
      t.marker === `none`
        ? null
        : e.marker({
            x: r.x,
            z: r.z,
            y: s + 0.01,
            color: t.color ?? 6160266,
            style: `goto`,
            radius: i,
            pillar: t.pillar,
          }),
    l = `step${n}`;
  (e.blip(l, {
    x: r.x,
    z: r.z,
    icon: t.blip ?? `target`,
    label: o,
    pulse: !0,
    clampToEdge: !0,
    color: `#5dff8a`,
  }),
    t.gps !== !1 && e.waypoint(r, o));
  let u = r.x,
    d = r.z,
    f = e.every(() => {
      (Math.abs(r.x - u) < 0.3 && Math.abs(r.z - d) < 0.3) ||
        ((u = r.x),
        (d = r.z),
        c?.setPos(r.x, a.plan.groundHeight(r.x, r.z) + 0.01, r.z),
        e.moveBlip(l, r.x, r.z),
        t.gps !== !1 && e.waypoint(r, o));
    });
  return () => {
    (f(), c?.remove(), e.removeBlip(l), t.gps !== !1 && e.waypoint(null));
  };
}
function dj(e) {
  let t = e.ctx;
  return {
    get ctx() {
      return t;
    },
    get elapsed() {
      return e.elapsed;
    },
    spawnVehicle: (t, n, r, i, a) => e.vehicle(t, n, r, i, a),
    keepVehicle: (t) => e.keepVehicle(t),
    spawnActor: (n, r, i, a = 0) => {
      if (typeof n == `object` && n) {
        let r = n,
          i = e.actor(r.who ?? `uncle`, r.x, r.z, r.heading ?? 0, fj(r));
        return pj(t, i, r);
      }
      return e.actor($k(n) ? n : `uncle`, r ?? e.px, i ?? e.pz, a);
    },
    removeActor: (t) => {
      t instanceof Kk && e.removeActor(t);
    },
    say: (t, n, r) => e.queueLine(t, n, r),
    notify: (t, n = `mission`, r) => e.notify(t, n, r),
    objective: (t) => e.objective(t),
    waypoint: (t, n) => e.waypoint(t, n),
    blip: (t, n) => e.blip(t, n),
    moveBlip: (t, n, r) => e.moveBlip(t, n, r),
    removeBlip: (t) => e.removeBlip(t),
    marker: (n) =>
      e.marker({
        x: n.x,
        z: n.z,
        y:
          n.y ??
          t.plan.groundHeight(n.x, n.z) + (n.style === `target` ? 0.2 : 0.01),
        color: n.color ?? 16765517,
        style: n.style ?? `goto`,
        radius: n.radius,
        heading: n.heading,
        pillar: n.pillar,
      }),
    prop: (t, n, r, i, a = 0, o = 1) => e.prop(t, n, r, i, a, o),
    setTimer: (t, n, r) => e.setTimer(t, n, r),
    clearTimer: () => e.clearTimer(),
    addTime: (t) => e.addTime(t),
    get timeLeft() {
      return e.timeLeft;
    },
    progress: (t, n) => e.progress(t, n),
    holdTraffic: (t, n, r) => e.holdTraffic(t, n, r),
    crowd: (t, n, r, i, a) => e.crowd(t, n, r, i, a),
    sfx: (t, n) => e.sfx(t, n),
    cinematic: (t, n, r) => e.cinematic(t, n, r),
    lockPlayer: (t) => e.lockPlayer(t),
    skipTo: (t, n) => e.skipTo(t, n),
    addBonus: (t) => {
      aj(t) && (e.bonus += t);
    },
    on: (t, n) => e.on(t, n),
    onCleanup: (t) => e.onCleanup(t),
    get motorcycleKind() {
      return e.motorcycleKind;
    },
    muteShops: (t) => {
      aj(t) && t > 0 && e.S.muteShops(t);
    },
    pass: (t) => e.pass(t ?? {}),
    fail: (t) => e.fail(ij(t) ? t : nj),
    get step() {
      return e.step;
    },
    set step(t) {
      e.step = t;
    },
    get vars() {
      return e.vars;
    },
    get alive() {
      return e.alive;
    },
    get px() {
      return e.px;
    },
    get pz() {
      return e.pz;
    },
    dist: (t, n) => e.dist(t, n),
    get playerVehicle() {
      return e.playerVehicle;
    },
    get inVehicle() {
      return e.inVehicle;
    },
    get onFoot() {
      return e.onFoot;
    },
    get playerSpeed() {
      return e.playerSpeed;
    },
    wait: (t) => e.wait(t),
    until: (t) => e.until(t),
    talk: (t, n, r) => e.say(t, n, r),
    goto: (t, n = {}) =>
      e.goto(t, { ...n, vehicleRadius: n.radius, style: n.style }),
    enterVehicle: (t) => e.enterVehicle({ ...t, kinds: t.kinds }),
    exitVehicle: (t) => e.exitVehicle(t),
    pressE: (t, n, r, i, a) => e.pressE(t, n, r, i, a),
    branch: (t) => e.branch(t),
    every: (t) => e.every(t),
    guardVehicle: (t, n) => e.guardVehicle(t, n),
  };
}
function fj(e) {
  let t = {};
  if (e.avatar || e.tint || e.scale != null) {
    let n = BO(e.who ?? `uncle`);
    t.role = {
      avatar: typeof e.avatar == `string` && e.avatar ? e.avatar : n.avatar,
      scale: Number.isFinite(e.scale) ? e.scale : n.scale,
      tint: e.tint ? { ...e.tint } : e.avatar ? void 0 : n.tint,
    };
  }
  return (e.name && (t.names = Array.isArray(e.name) ? e.name : [e.name]), t);
}
function pj(e, t, n) {
  if (
    (n.anim && (t.anim = n.anim),
    n.look && t.lookAt(n.look === `player` ? `player` : n.look),
    n.collide === !1 && (t.collide = !1),
    n.hittable)
  ) {
    let e = n.onHit;
    t.enableBody((t) => {
      try {
        e?.(t);
      } catch (e) {
        console.error(`[missions] actor onHit threw`, e);
      }
    }, n.hittable);
  }
  return t;
}
var mj = (e) => `#` + e.toString(16).padStart(6, `0`),
  hj = (e) => {
    let t = ((Math.floor(e) % 24) + 24) % 24,
      n = Math.round((e - Math.floor(e)) * 60);
    return (
      n === 60 && (n = 59),
      `${String(t).padStart(2, `0`)}:${String(n).padStart(2, `0`)}`
    );
  },
  gj = 420,
  _j = 3,
  vj = 10;
