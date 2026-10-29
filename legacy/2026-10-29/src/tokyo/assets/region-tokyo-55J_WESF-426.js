// tokyo/assets/region-tokyo-55J_WESF 426 — math
// Lines 152374-152719 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function V4(e, t, n) {
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
    a = `tag${++VLe}`;
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
function H4(e, t, n = {}) {
  let r = e.ctx,
    i = t.map((t) =>
      n.tag === !1
        ? null
        : V4(e, t, { color: M4, label: { zh: `打手`, en: `Thug` } }),
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
function U4(e, t, n) {
  let r = e.ctx,
    i = n.path ? null : e.S.sidewalks(),
    a = `flee`,
    o = ``,
    s = 99,
    c = !0;
  t.enableBody((e) => {
    a === `flee` && c && ((a = `down`), (o = e ? `hit` : `car`));
  }, `criminal`);
  let l = n.home ?? { x: t.x, z: t.z },
    u = n.homeR ?? 240,
    d = i ? i.nearest(t.x, t.z) : 0,
    f = -1,
    p = d,
    m = 0,
    h = 1,
    g = 0,
    _ = 0,
    v = 0,
    y = 0,
    b = 5,
    x = 0,
    S = () => {
      if (!i) return;
      let t = i.adj[d],
        n = -1,
        r = -1 / 0;
      for (let a of t) {
        let t = i.xs[a],
          o = i.zs[a],
          s =
            Math.hypot(t - e.px, o - e.pz) -
            Math.hypot(i.xs[d] - e.px, i.zs[d] - e.pz);
        ((s += Math.random() * 9), a === f && (s -= 40));
        let c = Math.hypot(t - l.x, o - l.z);
        (c > u && (s -= (c - u) * 0.6), s > r && ((r = s), (n = a)));
      }
      (n < 0 && (n = f >= 0 ? f : d), (f = d), (d = n), (p = n));
    },
    C = n.dash ? n.dash.slice() : [];
  i && !C.length && S();
  let w =
      n.tag === !1
        ? null
        : e.marker({
            x: t.x,
            z: t.z,
            y: t.y + 0.2,
            color: M4,
            style: `target`,
            iconSize: 0.8,
          }),
    T = { kind: `catch`, x: t.x, z: t.z, onFoot: !0 };
  return (
    e.every((l) => {
      if (!c || a !== `flee`) return;
      x += l;
      let u = t.distTo(e.px, e.pz);
      ((s = u),
        (h = Math.max(0, Math.min(1, h + (u > 30 ? 0.05 : -0.035) * l))));
      let E =
          (x < 1.2 ? 4.4 : 4.6 + 1.4 * h) *
          (n.speed ?? 1) *
          (e.onFoot ? 1 : 1.12),
        D,
        O;
      if (n.path) {
        let e = n.path[m];
        ((D = e.x),
          (O = e.z),
          Math.hypot(t.x - D, t.z - O) < 1.3 &&
            (!n.loop && m === n.path.length - 1 && n.onEnd?.(),
            (m = n.loop
              ? (m + 1) % n.path.length
              : Math.min(n.path.length - 1, m + 1))));
      } else
        C.length
          ? ((D = C[0].x),
            (O = C[0].z),
            Math.hypot(t.x - D, t.z - O) < 1.4 &&
              (C.shift(),
              C.length || ((d = i.nearest(t.x, t.z)), (f = -1), S())))
          : ((D = i.xs[p]),
            (O = i.zs[p]),
            Math.hypot(t.x - D, t.z - O) < 1.4 && S());
      if (
        (_ > 0 ? ((_ -= l), t.moveTo(v, y, E * 1.08)) : t.moveTo(D, O, E),
        !n.path && u < 5 && _ <= -1.5 && Math.random() < l * 2.2)
      ) {
        let e = t.heading + (Math.random() < 0.5 ? 1 : -1) * 1.1;
        ((v = t.x + Math.sin(e) * 4), (y = t.z - Math.cos(e) * 4), (_ = 0.6));
      } else _ <= 0 && (_ -= l);
      (n.taunts &&
        n.taunts.length &&
        (b -= l) <= 0 &&
        u < 22 &&
        ((b = 8),
        e.line(
          n.speaker ?? null,
          n.taunts[Math.floor(Math.random() * n.taunts.length)],
          1.8,
        )),
        e.moveBlip(`flee`, t.x, t.z),
        w?.setPos(t.x, t.y + 0.15, t.z),
        (T.x = t.x),
        (T.z = t.z),
        (e.waitFor = T),
        u < 1.6 &&
          e.onFoot &&
          (r.input.pressed(`interact`) ||
            r.input.pressed(`attack`) ||
            e.playerSpeed > 5.2) &&
          ((a = `down`), (o = `tackle`)),
        u < 2.4 &&
          e.inVehicle &&
          e.playerSpeed > 3 &&
          ((a = `down`), (o = `car`)),
        (g = u > (n.farD ?? 85) ? g + l : 0),
        g > (n.escape ?? 7) && e.fail(n.lost));
    }),
    e.blip(`flee`, {
      x: t.x,
      z: t.z,
      icon: `target`,
      label: n.speaker,
      pulse: !0,
      clampToEdge: !0,
      color: `#ff4d5e`,
    }),
    {
      get state() {
        return a;
      },
      get by() {
        return o;
      },
      get dist() {
        return s;
      },
      stop() {
        ((c = !1),
          w?.remove(),
          e.removeBlip(`flee`),
          e.waitFor === T && (e.waitFor = null),
          t.stop());
      },
    }
  );
}
function W4(e, t = 4) {
  let n = e.x,
    r = e.z,
    i = 0;
  return (a) =>
    !e.moving || Math.hypot(e.x - n, e.z - r) > 0.6
      ? ((i = 0), (n = e.x), (r = e.z), !1)
      : ((i += a), i > t && ((i = 0), !0));
}
function G4(e, t, n) {
  (t.stop(),
    (t.anim = `fallen`),
    e.sfx(n === `car` ? `crash_light` : `punch`, { x: t.x, y: 1, z: t.z }));
  try {
    e.ctx.cameraRig.shake(0.35);
  } catch {}
}
function HLe(e, t) {
  let n = e.ctx.env;
  if (!n || typeof n.timeScale != `number`) return () => {};
  let r = n.timeScale;
  n.timeScale = r * t;
  let i = !1,
    a = () => {
      i || ((i = !0), (n.timeScale = r));
    };
  return (e.onCleanup(a), a);
}
