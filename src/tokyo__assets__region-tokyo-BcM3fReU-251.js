// tokyo__assets__region-tokyo-BcM3fReU 251 — map
// Lines 99882-100137 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function T0(e, t, n, r = 0) {
  if (!w0) {
    w0 = new Map();
    try {
      for (let e of AS) for (let t of e.missionAnchors ?? []) w0.set(t.id, t);
      for (let e of Nx()) w0.set(e.id, e);
    } catch (e) {
      console.warn(`[story] anchors`, e);
    }
  }
  let i = w0.get(e);
  return i
    ? { ...i, heading: i.heading ?? r }
    : (console.warn(`[story] no mission anchor ${e} — using the fallback`),
      {
        id: e,
        kind: `spot`,
        label: { zh: e, en: e },
        x: t,
        z: n,
        heading: r,
        radius: 120,
      });
}
function E0(e, t, n) {
  try {
    Promise.resolve(e.districts?.ensureResident?.(t, n)).catch(() => {});
  } catch {}
}
async function D0(e, t, n, r = 12) {
  let i = !1;
  Promise.resolve(e.ctx.districts?.ensureResident?.(t, n))
    .catch(() => {})
    .then(() => {
      i = !0;
    });
  let a = 0;
  await e.until((e) => i || (a += e) > r);
}
async function O0(e, t, n, r = 10, i = 320) {
  let a = e.ctx.buildings,
    o = e.ctx.interiors,
    s = (e) => {
      let o = [];
      for (let s of a.storefronts ?? []) {
        if (s.kind !== `convenience`) continue;
        let c = Math.hypot(s.x - t, s.z - n);
        if (c < r || c > i) continue;
        let l = a.storefront?.(s.poiId);
        !l ||
          (e && !l.painted) ||
          o.push({ x: l.x, z: l.z, facing: l.facing, poiId: s.poiId, d: c });
      }
      return o.sort((e, t) => e.d - t.d);
    },
    c = async (e) => {
      if (!o?.ensure) return e[0] ?? null;
      for (let t of e.slice(0, 8)) {
        let e = !1;
        try {
          let n = o.ensure(t.poiId, { now: !0, timeoutS: 8, holdS: 900 });
          e = o.hasStore?.(t.poiId) !== !1 && (await n);
        } catch {}
        if (e) return { x: t.x, z: t.z, facing: t.facing, poiId: t.poiId };
      }
      return null;
    },
    l = await c(s(!0));
  if (!l) {
    for (let t of s(!1).slice(0, 3))
      if ((await D0(e, t.x, t.z, 6), (l = await c(s(!0))), l)) break;
  }
  if (!l) {
    let e = s(!0)[0];
    l = e ? { x: e.x, z: e.z, facing: e.facing, poiId: e.poiId } : null;
  }
  return l;
}
async function k0(e, t, n, r, i = 12) {
  (await e.hud.fade(1, 0.5), await D0(e, t, n, i));
  try {
    (e.ctx.player.mode === `vehicle` && e.ctx.vehicles?.ejectPlayer?.(),
      e.ctx.player.teleport(t, n, r),
      e.ctx.cameraRig?.snapBehind?.());
  } catch {}
  e.hud.fade(0, 0.6);
}
var A0 = 0;
function j0(e, t, n) {
  let r = n.size ?? 1,
    i = e.marker({
      x: t.x,
      z: t.z,
      y: t.y,
      color: n.color,
      style: `target`,
      iconY: 2.3,
      iconSize: 0.82 * r,
    }),
    a = `tag${++A0}`;
  e.blip(a, {
    x: t.x,
    z: t.z,
    icon: `target`,
    label: n.label,
    pulse: !0,
    clampToEdge: !0,
    color: n.blipColor ?? `#` + n.color.toString(16).padStart(6, `0`),
  });
  let o = NaN,
    s = NaN,
    c = NaN,
    l = !0,
    u = !0,
    d = {
      update() {
        !l ||
          (t.x === o && t.y === s && t.z === c) ||
          ((o = t.x),
          (s = t.y),
          (c = t.z),
          i.setPos(o, s, c),
          e.moveBlip(a, o, c));
      },
      setVisible(e) {
        l && e !== u && ((u = e), i.setVisible(e));
      },
      remove() {
        l && ((l = !1), i.remove(), e.removeBlip(a));
      },
    };
  ((e.vars.tags = (e.vars.tags ?? 0) + 1), e.onCleanup(() => d.remove()));
  let f = d.remove;
  return (
    (d.remove = () => {
      (l && (e.vars.tags = Math.max(0, (e.vars.tags ?? 1) - 1)), f());
    }),
    d
  );
}
function M0(e, t, n = {}) {
  let r = e.ctx,
    i = t.map((t) =>
      n.tag === !1
        ? null
        : j0(e, t, { color: x0, label: { zh: `打手`, en: `Thug` } }),
    ),
    a = t.map(() => n.hp ?? 8),
    o = t.map(() => 0),
    s = t.map((e, t) => 0.8 + t * 0.6),
    c = t.map(() => 0),
    l = t.map(() => -1),
    u = t.map(() => !1),
    d = t.length,
    f = !0,
    p = (a) => {
      if (u[a]) return;
      ((u[a] = !0), d--);
      let o = t[a];
      (o.stop(), (o.anim = `fallen`), i[a]?.remove(), (i[a] = null));
      let s = m[a];
      (s && (s.active = !1), e.sfx(`punch`, { x: o.x, y: 1, z: o.z }));
      try {
        r.cameraRig.shake(0.25);
      } catch {}
      (n.label && e.progress(n.label, (t.length - d) / t.length),
        (e.vars.thugs = d),
        n.onDown?.(d));
    },
    m = t.map(() => null);
  (t.forEach((t, n) => {
    ((m[n] = t.enableBody((r, i, s) => {
      if (!f || u[n]) return;
      if (!r) return p(n);
      let c = r.amount,
        d = c < 14;
      if (d && l[n] < 0 && t.anim === `fight` && ++o[n] % 3 == 0) {
        (t.flinch(t.x - i, t.z - s, 0.35),
          e.sfx(`punch`, { x: t.x, y: 1.4, z: t.z, volume: 0.45 }),
          (e.vars.blocks = (e.vars.blocks ?? 0) + 1));
        return;
      }
      ((a[n] -= c >= 25 ? 3 : c >= 17 ? 2 : c >= 14 ? 1.5 : 1),
        (e.vars.hits = (e.vars.hits ?? 0) + 1),
        t.flinch(t.x - i, t.z - s, d ? 0.7 : 1),
        e.sfx(`punch`, { x: t.x, y: 1.4, z: t.z }),
        a[n] <= 0 && p(n));
    }, `criminal`)),
      (t.look = r.player.position));
  }),
    n.label && e.progress(n.label, 0));
  let h = r.player.position;
  return (
    e.every((a) => {
      if (f)
        for (let o = 0; o < t.length; o++) {
          if (u[o]) continue;
          let d = t[o];
          i[o]?.update();
          let f = d.distTo(h.x, h.z);
          if (((s[o] -= a), (c[o] -= a), l[o] >= 0)) {
            if (
              ((l[o] += a), l[o] > 0.38 && ((l[o] = -1), f < 1.75 && e.onFoot))
            ) {
              try {
                r.player.damage({
                  amount: n.dmg ?? 6,
                  source: `melee`,
                  weapon: `fist`,
                });
              } catch {}
              e.sfx(`punch`, { x: h.x, y: 1.4, z: h.z });
              try {
                r.cameraRig.shake(0.18);
              } catch {}
            }
            continue;
          }
          if (e.inVehicle) {
            ((d.anim = f < 9 ? `cower` : `fight`),
              c[o] <= 0 && ((c[o] = 0.5), d.stop()));
            continue;
          }
          f > 1.35
            ? ((d.anim = f < 6 ? `fight` : `idle`),
              c[o] <= 0 &&
                ((c[o] = 0.3),
                d.moveTo(h.x, h.z, f > 8 ? (n.speed ?? 3.8) : 2.2)))
            : (d.stop(),
              d.faceTo(h.x, h.z),
              (d.anim = `fight`),
              s[o] <= 0 &&
                ((s[o] = 1.5 + Math.random() * 0.8),
                (l[o] = 0),
                d.play(`punch`)));
        }
    }),
    {
      get left() {
        return d;
      },
      total: t.length,
      stop() {
        f = !1;
        for (let e = 0; e < t.length; e++)
          (u[e] || t[e].stop(), i[e]?.remove(), (i[e] = null));
      },
      knock(e) {
        f && e >= 0 && e < t.length && p(e);
      },
      isDown(e) {
        return !!u[e];
      },
    }
  );
}
