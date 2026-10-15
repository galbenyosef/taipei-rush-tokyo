// tokyo/assets/region-tokyo-BcM3fReU 252 — math
// Lines 100138-100484 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function N0(e, t, n) {
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
            color: x0,
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
function P0(e, t = 4) {
  let n = e.x,
    r = e.z,
    i = 0;
  return (a) =>
    !e.moving || Math.hypot(e.x - n, e.z - r) > 0.6
      ? ((i = 0), (n = e.x), (r = e.z), !1)
      : ((i += a), i > t && ((i = 0), !0));
}
function F0(e, t, n) {
  (t.stop(),
    (t.anim = `fallen`),
    e.sfx(n === `car` ? `crash_light` : `punch`, { x: t.x, y: 1, z: t.z }));
  try {
    e.ctx.cameraRig.shake(0.35);
  } catch {}
}
function I0(e, t) {
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
function L0(e, t) {
  try {
    e.ctx.env.setHour(t);
  } catch {}
}
var R0 = new Map(),
  z0 = 900;
async function B0(e) {
  let t = e.def.id,
    n = e.resumeStep > 0 ? e.resumeStep : 0,
    r = R0.get(t);
  if ((R0.delete(t), !n && r && e.ctx.time.real - r.t < z0)) {
    ((n = r.step), await e.hud.fade(1, 0.4), await D0(e, r.pos.x, r.pos.z, 4));
    try {
      (e.ctx.player.mode === `vehicle` && e.ctx.vehicles?.ejectPlayer?.(),
        e.ctx.player.teleport(r.pos.x, r.pos.z, r.pos.heading, r.pos.y),
        e.ctx.cameraRig?.snapBehind?.());
    } catch {}
    (e.hud.fade(0, 0.6),
      e.notify(
        { zh: `從上次的檢查點繼續`, en: `Resuming from your last checkpoint` },
        `info`,
        3.5,
      ));
  }
  n && e.notify({ zh: `從檢查點繼續`, en: `From the checkpoint` }, `info`, 2.5);
  let i = null;
  return (
    e.onCleanup(() => {
      e.result === `failed` && i && R0.set(t, { ...i, t: e.ctx.time.real });
    }),
    {
      from: n,
      mark(t, n) {
        let r = { x: n.x, z: n.z, heading: n.heading ?? 0, y: n.y };
        ((i = { step: t, pos: r }),
          (e.checkpoint = {
            step: t,
            pos: { x: r.x, z: r.z, heading: r.heading },
          }));
      },
    }
  );
}
async function V0(e, t, n, r, i, a, o = 2) {
  let s = e.ctx.groundAt(n, r, e.ctx.player.position.y + 0.5, 0.6),
    c = e.prop(t, n, s + 0.03, r, 0.4, o);
  (await e.goto(
    { x: n, z: r, y: s },
    { objective: a, radius: 1.9, onFoot: !0, color: 6160266, label: i },
  ),
    c?.remove(),
    e.sfx(`pickup`, { ui: !0 }));
}
var H0 = (e) => e.wait(0);
async function U0(e, t = {}) {
  let n = e.ctx;
  je(n);
  let r = Me.get(e.def.id)?.mission;
  if (!r) return;
  let i = 12;
  try {
    i = n.env.hour;
  } catch {}
  let a = Ne(n, r.date),
    o = t.window,
    s = o
      ? !(o[0] <= o[1] ? i >= o[0] && i < o[1] : i >= o[0] || i < o[1])
      : !1;
  if ((!a && s && r.hour < i && (a = 1), a > 0 || s)) {
    let i = !1;
    (e.onCleanup(() => {
      i || e.hud.fade(0, 0.3);
    }),
      await e.hud.fade(1, 0.6),
      await Fe(n, a, r.hour, () => H0(e)));
    let o = t.at ?? { x: e.px, z: e.pz };
    await D0(e, o.x, o.z, 6);
    let s = Pe(n.time.date, n.time.weekday, r.hour);
    (e.hud.bigMessage(Ae(Ie(n), s), void 0, {
      duration: 2.4,
      color: `#ffffff`,
    }),
      await e.wait(1.1),
      (i = !0),
      await e.hud.fade(0, 0.8));
  } else t.at && E0(n, t.at.x, t.at.z);
}
function W0(e, t, n) {
  let r = e.S.sidewalks(),
    i = r.nearest(t.x, t.z),
    a = r.nearest(n.x, n.z);
  if (i < 0 || a < 0) return [n];
  let o = r.xs.length,
    s = new Float64Array(o).fill(1 / 0),
    c = new Int32Array(o).fill(-1),
    l = [],
    u = [],
    d = (e, t) => {
      let n = l.length;
      for (l.push(e), u.push(t); n > 0;) {
        let e = (n - 1) >> 1;
        if (l[e] <= l[n]) break;
        (([l[e], l[n]] = [l[n], l[e]]), ([u[e], u[n]] = [u[n], u[e]]), (n = e));
      }
    },
    f = () => {
      let e = u[0],
        t = l.pop(),
        n = u.pop();
      if (l.length) {
        ((l[0] = t), (u[0] = n));
        let e = 0;
        for (;;) {
          let t = e * 2 + 1,
            n = t + 1,
            r = e;
          if (
            (t < l.length && l[t] < l[r] && (r = t),
            n < l.length && l[n] < l[r] && (r = n),
            r === e)
          )
            break;
          (([l[r], l[e]] = [l[e], l[r]]),
            ([u[r], u[e]] = [u[e], u[r]]),
            (e = r));
        }
      }
      return e;
    };
  for (s[i] = 0, d(0, i); l.length;) {
    let e = l[0],
      t = f();
    if (!(e > s[t])) {
      if (t === a) break;
      for (let n of r.adj[t]) {
        let i = e + Math.hypot(r.xs[n] - r.xs[t], r.zs[n] - r.zs[t]);
        i < s[n] && ((s[n] = i), (c[n] = t), d(i, n));
      }
    }
  }
  let p = [];
  for (let e = a; e >= 0; e = c[e]) p.push({ x: r.xs[e], z: r.zs[e] });
  return (p.reverse(), p.push(n), p);
}
function G0(e) {
  return {
    name:
      e.player.character === `wen`
        ? { zh: `小雯`, en: `Wen`, ja: `小雯` }
        : { zh: `阿傑`, en: `Jie`, ja: `阿傑` },
    voice: null,
  };
}
function K0(e) {
  let t = e.name,
    n = [
      { zh: t.zh, en: t.en },
      { zh: t.zh, en: t.zh },
      { zh: t.en, en: t.en },
    ];
  return (t.ja && n.push({ zh: t.ja, en: t.ja }), n);
}
function q0(e, t, n, r) {
  let i = e.lineDuration(n, r);
  if (r !== void 0 || t?.voice !== `ja` || !n.ja) return i;
  let a = n.ja.replace(/（[^）]*）/g, ``);
  return Math.max(i, Math.min(9, a.length * 0.15 + 0.9));
}
