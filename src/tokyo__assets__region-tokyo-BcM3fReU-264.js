// tokyo__assets__region-tokyo-BcM3fReU 264 — facing
// Lines 103670-103864 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var o4 = (e) => (e.startsWith(`store:`) ? e.slice(6) : e);
function s4(e) {
  let t = uS()?.ctx.plan ?? null;
  if (e === `walkin-sento-enraiyu`) {
    let n = Px().find((e) => e.site === bh.site),
      r = n ? { x: n.x, z: n.z, facing: n.heading } : bh.door,
      { W: i, D: a } = lb[e];
    return { fr: fb(r, t), dx: 0, spots: qx(i, a) };
  }
  if (e === `walkin-callcentre-shimbashi`) {
    let { W: n, D: r } = lb[e];
    return { fr: $x(eS(), t), dx: 0, spots: nS(n, r) };
  }
  if (e !== `walkin-maid-akiba` && e !== `walkin-kissa-okachimachi`)
    return null;
  let n = yh.find((t) => t.id === e);
  if (!n) return null;
  let { W: r, D: i } = lb[e];
  return e === `walkin-maid-akiba`
    ? { fr: ub(n, t), dx: Ob(r, i).dx, spots: kb(r, i) }
    : { fr: ub(n, t), dx: Mb(r, i).dx, spots: Nb(r, i) };
}
function c4(e) {
  let t = uS()?.room(o4(e)) ?? null;
  return (t && !t.fr && t.prepareNow(), t);
}
function l4(e) {
  e = o4(e);
  let t = c4(e);
  if (t?.fr)
    return {
      x: t.fr.wx(t.dx, -0.6),
      z: t.fr.wz(t.dx, -0.6),
      facing: t.fr.facing,
    };
  let n = s4(e);
  if (n)
    return {
      x: n.fr.wx(n.dx, -0.6),
      z: n.fr.wz(n.dx, -0.6),
      facing: n.fr.facing,
    };
  let r = yh.find((t) => t.id === e);
  if (r) {
    let e = wh(r),
      t = Math.sin(e.facing),
      n = -Math.cos(e.facing);
    return { x: e.x + t * 0.6, z: e.z + n * 0.6, facing: e.facing };
  }
  if (e === Sh.id) return { x: -73.1, z: 303.6, facing: -Math.PI / 2 };
  if (t) {
    let e = t.anchor;
    return { x: e.x, z: e.z, facing: e.facing };
  }
  return { x: 0, z: 0, facing: 0 };
}
function u4(e, t) {
  e = o4(e);
  let n = c4(e);
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
  let r = s4(e),
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
var d4 = (e) => new Promise((t) => setTimeout(t, e));
async function f4(e, t, n = `door`) {
  t = o4(t);
  let r = uS(),
    i = r?.room(t);
  if (!r || !i || i.dead) return !1;
  i.stagedUntil = e.time.elapsed + 900;
  try {
    if (!i.prepareNow()) {
      let n = l4(t),
        r = Math.sin(n.facing),
        a = -Math.cos(n.facing);
      e.player.teleport(n.x + r * 1.5, n.z + a * 1.5, n.facing + Math.PI);
      try {
        await Promise.race([
          Promise.resolve(e.districts?.ensureResident?.(n.x, n.z)),
          d4(12e3),
        ]);
      } catch {}
      for (let e = 0; e < 60 && !i.prepareNow(); e++) await d4(250);
      if (!i.prepareNow()) return !1;
    }
    let a = u4(t, n);
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
function p4(e, t) {
  t = o4(t);
  let n = uS()?.room(t);
  n && (n.stagedUntil = -1);
  try {
    e.interiors?.release?.(t);
  } catch {}
}
function m4(e, t, n) {
  let r = uS()?.room(o4(e));
  return r ? (r.setPeople(t, n), !0) : !1;
}
var h4 = new WeakMap();
function g4(e, t = !0) {
  e.traverse((n) => {
    (n.isGroup || n === e) &&
      (t
        ? (h4.has(n) || h4.set(n, n.renderOrder), (n.renderOrder = -29))
        : h4.has(n) && ((n.renderOrder = h4.get(n)), h4.delete(n)));
  });
}
async function _4(e, t, n, r = {}) {
  let i = e.ctx;
  await e.hud.fade(1, 0.5);
  let a = !1;
  try {
    a = await f4(i, t, n);
  } catch (e) {
    console.warn(`[story] enterWalkin`, t, e);
  }
  ((r.staff !== void 0 || r.guests !== void 0) &&
    m4(t, r.staff ?? !0, r.guests ?? !0),
    e.onCleanup(() => {
      try {
        (m4(t, !0, !0), p4(i, t));
      } catch {}
    }));
  try {
    i.cameraRig?.snapBehind?.();
  } catch {}
  return (e.hud.fade(0, 0.6), a);
}
function v4(e, t, n, r, i, a = 0, o = 0) {
  let s = u4(t, n),
    c = l4(t),
    l = X0(
      e,
      r,
      i,
      (s?.x ?? c.x) + a,
      (s?.z ?? c.z) + o,
      s?.heading ?? c.facing + Math.PI,
    );
  s && (l.y = s.y);
  try {
    g4(l.root);
  } catch {}
  return l;
}
function y4(e, t) {
  let n = u4(e, t);
  if (n) return n;
  let r = l4(e);
  return { x: r.x, z: r.z, y: 0, heading: r.facing };
}
