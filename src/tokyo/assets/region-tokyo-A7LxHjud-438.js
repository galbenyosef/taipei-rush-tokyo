// tokyo/assets/region-tokyo-A7LxHjud 438 — facing
// Lines 156171-156365 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var M3 = (e) => (e.startsWith(`store:`) ? e.slice(6) : e);
function N3(e) {
  let t = Y_()?.ctx.plan ?? null;
  if (e === `walkin-sento-enraiyu`) {
    let n = T_().find((e) => e.site === ep.site),
      r = n ? { x: n.x, z: n.z, facing: n.heading } : ep.door,
      { W: i, D: a } = wg[e];
    return { fr: Dg(r, t), dx: 0, spots: P_(i, a) };
  }
  if (e === `walkin-callcentre-shimbashi`) {
    let { W: n, D: r } = wg[e];
    return { fr: z_(B_(), t), dx: 0, spots: H_(n, r) };
  }
  if (e !== `walkin-maid-akiba` && e !== `walkin-kissa-okachimachi`)
    return null;
  let n = $f.find((t) => t.id === e);
  if (!n) return null;
  let { W: r, D: i } = wg[e];
  return e === `walkin-maid-akiba`
    ? { fr: Tg(n, t), dx: Ug(r, i).dx, spots: Wg(r, i) }
    : { fr: Tg(n, t), dx: qg(r, i).dx, spots: Jg(r, i) };
}
function P3(e) {
  let t = Y_()?.room(M3(e)) ?? null;
  return (t && !t.fr && t.prepareNow(), t);
}
function F3(e) {
  e = M3(e);
  let t = P3(e);
  if (t?.fr)
    return {
      x: t.fr.wx(t.dx, -0.6),
      z: t.fr.wz(t.dx, -0.6),
      facing: t.fr.facing,
    };
  let n = N3(e);
  if (n)
    return {
      x: n.fr.wx(n.dx, -0.6),
      z: n.fr.wz(n.dx, -0.6),
      facing: n.fr.facing,
    };
  let r = $f.find((t) => t.id === e);
  if (r) {
    let e = ip(r),
      t = Math.sin(e.facing),
      n = -Math.cos(e.facing);
    return { x: e.x + t * 0.6, z: e.z + n * 0.6, facing: e.facing };
  }
  if (e === np.id) return { x: np.door.x, z: np.door.z, facing: -Math.PI / 2 };
  if (t) {
    let e = t.anchor;
    return { x: e.x, z: e.z, facing: e.facing };
  }
  return { x: 0, z: 0, facing: 0 };
}
function I3(e, t) {
  e = M3(e);
  let n = P3(e);
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
  let r = N3(e),
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
var L3 = (e) => new Promise((t) => setTimeout(t, e));
async function VRe(e, t, n = `door`) {
  t = M3(t);
  let r = Y_(),
    i = r?.room(t);
  if (!r || !i || i.dead) return !1;
  i.stagedUntil = e.time.elapsed + 900;
  try {
    if (!i.prepareNow()) {
      let n = F3(t),
        r = Math.sin(n.facing),
        a = -Math.cos(n.facing);
      e.player.teleport(n.x + r * 1.5, n.z + a * 1.5, n.facing + Math.PI);
      try {
        await Promise.race([
          Promise.resolve(e.districts?.ensureResident?.(n.x, n.z)),
          L3(12e3),
        ]);
      } catch {}
      for (let e = 0; e < 60 && !i.prepareNow(); e++) await L3(250);
      if (!i.prepareNow()) return !1;
    }
    let a = I3(t, n);
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
function HRe(e, t) {
  t = M3(t);
  let n = Y_()?.room(t);
  n && (n.stagedUntil = -1);
  try {
    e.interiors?.release?.(t);
  } catch {}
}
function R3(e, t, n) {
  let r = Y_()?.room(M3(e));
  return r ? (r.setPeople(t, n), !0) : !1;
}
var z3 = new WeakMap();
function B3(e, t = !0) {
  e.traverse((n) => {
    (n.isGroup || n === e) &&
      (t
        ? (z3.has(n) || z3.set(n, n.renderOrder), (n.renderOrder = -29))
        : z3.has(n) && ((n.renderOrder = z3.get(n)), z3.delete(n)));
  });
}
async function V3(e, t, n, r = {}) {
  let i = e.ctx;
  await e.hud.fade(1, 0.5);
  let a = !1;
  try {
    a = await VRe(i, t, n);
  } catch (e) {
    console.warn(`[story] enterWalkin`, t, e);
  }
  ((r.staff !== void 0 || r.guests !== void 0) &&
    R3(t, r.staff ?? !0, r.guests ?? !0),
    e.onCleanup(() => {
      try {
        (R3(t, !0, !0), HRe(i, t));
      } catch {}
    }));
  try {
    i.cameraRig?.snapBehind?.();
  } catch {}
  return (e.hud.fade(0, 0.6), a);
}
function H3(e, t, n, r, i, a = 0, o = 0) {
  let s = I3(t, n),
    c = F3(t),
    l = n3(
      e,
      r,
      i,
      (s?.x ?? c.x) + a,
      (s?.z ?? c.z) + o,
      s?.heading ?? c.facing + Math.PI,
    );
  s && (l.y = s.y);
  try {
    B3(l.root);
  } catch {}
  return l;
}
function U3(e, t) {
  let n = I3(e, t);
  if (n) return n;
  let r = F3(e);
  return { x: r.x, z: r.z, y: 0, heading: r.facing };
}
