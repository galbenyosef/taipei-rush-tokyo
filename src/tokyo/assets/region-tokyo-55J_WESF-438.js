// tokyo/assets/region-tokyo-55J_WESF 438 — facing
// Lines 156068-156262 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var j3 = (e) => (e.startsWith(`store:`) ? e.slice(6) : e);
function M3(e) {
  let t = K_()?.ctx.plan ?? null;
  if (e === `walkin-sento-enraiyu`) {
    let n = S_().find((e) => e.site === Qf.site),
      r = n ? { x: n.x, z: n.z, facing: n.heading } : Qf.door,
      { W: i, D: a } = xg[e];
    return { fr: wg(r, t), dx: 0, spots: j_(i, a) };
  }
  if (e === `walkin-callcentre-shimbashi`) {
    let { W: n, D: r } = xg[e];
    return { fr: I_(L_(), t), dx: 0, spots: z_(n, r) };
  }
  if (e !== `walkin-maid-akiba` && e !== `walkin-kissa-okachimachi`)
    return null;
  let n = Zf.find((t) => t.id === e);
  if (!n) return null;
  let { W: r, D: i } = xg[e];
  return e === `walkin-maid-akiba`
    ? { fr: Sg(n, t), dx: Bg(r, i).dx, spots: Vg(r, i) }
    : { fr: Sg(n, t), dx: Wg(r, i).dx, spots: Gg(r, i) };
}
function N3(e) {
  let t = K_()?.room(j3(e)) ?? null;
  return (t && !t.fr && t.prepareNow(), t);
}
function P3(e) {
  e = j3(e);
  let t = N3(e);
  if (t?.fr)
    return {
      x: t.fr.wx(t.dx, -0.6),
      z: t.fr.wz(t.dx, -0.6),
      facing: t.fr.facing,
    };
  let n = M3(e);
  if (n)
    return {
      x: n.fr.wx(n.dx, -0.6),
      z: n.fr.wz(n.dx, -0.6),
      facing: n.fr.facing,
    };
  let r = Zf.find((t) => t.id === e);
  if (r) {
    let e = tp(r),
      t = Math.sin(e.facing),
      n = -Math.cos(e.facing);
    return { x: e.x + t * 0.6, z: e.z + n * 0.6, facing: e.facing };
  }
  if (e === ep.id) return { x: -73.1, z: 303.6, facing: -Math.PI / 2 };
  if (t) {
    let e = t.anchor;
    return { x: e.x, z: e.z, facing: e.facing };
  }
  return { x: 0, z: 0, facing: 0 };
}
function F3(e, t) {
  e = j3(e);
  let n = N3(e);
  if (n?.fr) {
    let e = n.fr,
      r = n.namedSpots()[t];
    if (r)
      return {
        x: e.wx(r[0], r[1]),
        z: e.wz(r[0], r[1]),
        y: e.py + r[2],
        heading: e.heading(r[3]),
      };
    let i = n.spot(t);
    return !i ||
      (t !== `front` &&
        t !== `inside` &&
        t !== `back` &&
        i.x === e.wx(n.dx, -1.8) &&
        i.z === e.wz(n.dx, -1.8))
      ? null
      : {
          x: i.x,
          z: i.z,
          y: t === `front` ? e.py - 0.012 : e.py,
          heading: i.h,
        };
  }
  let r = M3(e),
    i = r?.spots[t];
  return !r || !i
    ? null
    : {
        x: r.fr.wx(i[0], i[1]),
        z: r.fr.wz(i[0], i[1]),
        y: r.fr.py + i[2],
        heading: r.fr.heading(i[3]),
      };
}
var I3 = (e) => new Promise((t) => setTimeout(t, e));
async function DRe(e, t, n = `door`) {
  t = j3(t);
  let r = K_(),
    i = r?.room(t);
  if (!r || !i || i.dead) return !1;
  i.stagedUntil = e.time.elapsed + 900;
  try {
    if (!i.prepareNow()) {
      let n = P3(t),
        r = Math.sin(n.facing),
        a = -Math.cos(n.facing);
      e.player.teleport(n.x + r * 1.5, n.z + a * 1.5, n.facing + Math.PI);
      try {
        await Promise.race([
          Promise.resolve(e.districts?.ensureResident?.(n.x, n.z)),
          I3(12e3),
        ]);
      } catch {}
      for (let e = 0; e < 60 && !i.prepareNow(); e++) await I3(250);
      if (!i.prepareNow()) return !1;
    }
    let a = F3(t, n);
    return !a ||
      (r.ensurePage(i),
      !(await r.ensure(t, { now: !0, holdS: 900, timeoutS: 20 })) || !i.built)
      ? !1
      : (e.player.teleport(a.x, a.z, a.heading, a.y),
        e.player.debug?.look?.(a.heading, 0.15),
        r.scan(),
        !0);
  } catch (e) {
    return (console.warn(`[interiors:tokyo] enterWalkin failed`, t, e), !1);
  }
}
function ORe(e, t) {
  t = j3(t);
  let n = K_()?.room(t);
  n && (n.stagedUntil = -1);
  try {
    e.interiors?.release?.(t);
  } catch {}
}
function L3(e, t, n) {
  let r = K_()?.room(j3(e));
  return r ? (r.setPeople(t, n), !0) : !1;
}
var R3 = new WeakMap();
function z3(e, t = !0) {
  e.traverse((n) => {
    (n.isGroup || n === e) &&
      (t
        ? (R3.has(n) || R3.set(n, n.renderOrder), (n.renderOrder = -29))
        : R3.has(n) && ((n.renderOrder = R3.get(n)), R3.delete(n)));
  });
}
async function B3(e, t, n, r = {}) {
  let i = e.ctx;
  await e.hud.fade(1, 0.5);
  let a = !1;
  try {
    a = await DRe(i, t, n);
  } catch (e) {
    console.warn(`[story] enterWalkin`, t, e);
  }
  ((r.staff !== void 0 || r.guests !== void 0) &&
    L3(t, r.staff ?? !0, r.guests ?? !0),
    e.onCleanup(() => {
      try {
        (L3(t, !0, !0), ORe(i, t));
      } catch {}
    }));
  try {
    i.cameraRig?.snapBehind?.();
  } catch {}
  return (e.hud.fade(0, 0.6), a);
}
function V3(e, t, n, r, i, a = 0, o = 0) {
  let s = F3(t, n),
    c = P3(t),
    l = t3(
      e,
      r,
      i,
      (s?.x ?? c.x) + a,
      (s?.z ?? c.z) + o,
      s?.heading ?? c.facing + Math.PI,
    );
  s && (l.y = s.y);
  try {
    z3(l.root);
  } catch {}
  return l;
}
function H3(e, t) {
  let n = F3(e, t);
  if (n) return n;
  let r = P3(e);
  return { x: r.x, z: r.z, y: 0, heading: r.facing };
}
