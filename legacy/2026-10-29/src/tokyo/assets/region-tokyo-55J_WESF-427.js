// tokyo/assets/region-tokyo-55J_WESF 427 — ctx
// Lines 152720-153028 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function K4(e, t) {
  try {
    e.ctx.env.setHour(t);
  } catch {}
}
var q4 = new Map(),
  ULe = 900;
async function J4(e) {
  let t = e.def.id,
    n = e.resumeStep > 0 ? e.resumeStep : 0,
    r = q4.get(t);
  if ((q4.delete(t), !n && r && e.ctx.time.real - r.t < ULe)) {
    ((n = r.step), await e.hud.fade(1, 0.4), await R4(e, r.pos.x, r.pos.z, 4));
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
      e.result === `failed` && i && q4.set(t, { ...i, t: e.ctx.time.real });
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
async function WLe(e, t, n, r, i, a, o = 2) {
  let s = e.ctx.groundAt(n, r, e.ctx.player.position.y + 0.5, 0.6),
    c = e.prop(t, n, s + 0.03, r, 0.4, o);
  (await e.goto(
    { x: n, z: r, y: s },
    { objective: a, radius: 1.9, onFoot: !0, color: 6160266, label: i },
  ),
    c?.remove(),
    e.sfx(`pickup`, { ui: !0 }));
}
var GLe = (e) => e.wait(0);
async function Y4(e, t = {}) {
  let n = e.ctx;
  Be(n);
  let r = Ve.get(e.def.id)?.mission;
  if (!r) return;
  let i = 12;
  try {
    i = n.env.hour;
  } catch {}
  let a = He(n, r.date),
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
      await We(n, a, r.hour, () => GLe(e)));
    let o = t.at ?? { x: e.px, z: e.pz };
    await R4(e, o.x, o.z, 6);
    let s = Ue(n.time.date, n.time.weekday, r.hour);
    (e.hud.bigMessage(ze(Ge(n), s), void 0, {
      duration: 2.4,
      color: `#ffffff`,
    }),
      await e.wait(1.1),
      (i = !0),
      await e.hud.fade(0, 0.8));
  } else t.at && L4(n, t.at.x, t.at.z);
}
function X4(e, t, n) {
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
function Z4(e) {
  let t = de(e.player.character);
  return { name: { zh: t.zh, en: t.en, ja: t.zh }, voice: null };
}
function Q4(e) {
  let t = e.name,
    n = [
      { zh: t.zh, en: t.en },
      { zh: t.zh, en: t.zh },
      { zh: t.en, en: t.en },
    ];
  return (t.ja && n.push({ zh: t.ja, en: t.ja }), n);
}
function KLe(e, t, n, r) {
  let i = e.lineDuration(n, r);
  if (r !== void 0 || t?.voice !== `ja` || !n.ja) return i;
  let a = n.ja.replace(/（[^）]*）/g, ``);
  return Math.max(i, Math.min(9, a.length * 0.15 + 0.9));
}
function $4(e, t, n, r) {
  let i = e.ctx,
    a = Ge(i),
    o = t ? ze(a, t.name) : null,
    s = ze(a, n),
    c = KLe(e, t, n, r);
  if ((e.line(o, s, c), t?.voice === `ja` && n.ja))
    try {
      i.audio.say?.(n, {
        lang: `ja`,
        priority: 7,
        pitch: t.pitch ?? 1,
        rate: t.rate ?? 1.05,
        duck: 0.35,
      });
    } catch {}
  return { name: o, text: s, dur: c };
}
async function $(e, t, n, r) {
  let i = $4(e, t, n, r);
  await e.wait(i.dur * 0.92);
}
async function e3(e, t, n) {
  (e.sfx(`phone_ring`, { ui: !0 }), await e.wait(0.9), await $(e, t, n));
}
function t3(e, t, n, r, i, a = 0) {
  return e.actor(n(), r, i, a, { names: Q4(t) });
}
function n3(e, t, n, r, i, a = 0) {
  let o = e.host(n(), r, i, a);
  return (o.setNames(Q4(t)), o);
}
function r3(e) {
  return Te(e.player.character)
    ? { zh: `表姊`, en: `sis`, ja: `お姉ちゃん` }
    : { zh: `表哥`, en: `bro`, ja: `お兄ちゃん` };
}
var qLe = `
#tk-cut { position: fixed; inset: 0; z-index: 19; pointer-events: none; overflow: hidden; }
#tk-cut .hc-bar { position: absolute; left: 0; right: 0; height: 0; background: #000; transition: height .6s cubic-bezier(.3,.8,.3,1); }
#tk-cut .hc-bar.top { top: 0; } #tk-cut .hc-bar.bot { bottom: 0; }
#tk-cut.lb .hc-bar { height: 11.5vh; }
#tk-cut .hc-skip { position: absolute; right: max(16px, calc(env(safe-area-inset-right) + 12px)); bottom: max(10px, calc(5.75vh - 22px + env(safe-area-inset-bottom) * 0.5));
  min-width: 44px; height: 44px; padding: 0 16px 0 18px; display: flex; align-items: center; gap: .5em; border-radius: 22px; border: 1px solid rgba(255,255,255,.34);
  background: rgba(12,12,16,.55); color: #fff; font: 700 15px "PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC",system-ui,sans-serif; letter-spacing: .12em;
  opacity: 0; visibility: hidden; pointer-events: none; transition: opacity .35s ease, visibility 0s linear .35s;
  -webkit-tap-highlight-color: transparent; touch-action: manipulation; user-select: none; -webkit-user-select: none; }
#tk-cut .hc-skip.show { opacity: .92; visibility: visible; pointer-events: auto; transition: opacity .35s ease; cursor: pointer; }
#tk-cut .hc-skip:active { background: rgba(255,200,61,.35); }
#tk-cut .hc-skip kbd { font: 700 12px system-ui,sans-serif; letter-spacing: 0; padding: 3px 7px; border-radius: 5px; background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.4); border-bottom-width: 2px; }
#tk-cut .hc-skip .pad { display: inline-grid; place-items: center; width: 22px; height: 22px; border-radius: 50%; background: #3fae49; color: #fff; font: 800 12px system-ui,sans-serif; letter-spacing: 0; }
#tk-cut .hc-skip .ff { font-size: 12px; letter-spacing: -2px; }
`,
  i3 = null;
function JLe() {
  if (i3 || typeof document > `u`) return i3;
  let e = document.createElement(`style`);
  ((e.id = `tk-cut-css`), (e.textContent = qLe), document.head.appendChild(e));
  let t = document.createElement(`div`);
  ((t.id = `tk-cut`),
    (t.innerHTML = `<div class="hc-bar top"></div><div class="hc-bar bot"></div>`));
  let n = document.createElement(`button`);
  ((n.type = `button`),
    (n.className = `hc-skip`),
    t.appendChild(n),
    document.body.appendChild(t));
  let r = { root: t, skip: n, key: ``, requested: !1, count: 0 },
    i = (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        n.classList.contains(`show`) && (r.requested = !0));
    };
  return (
    n.addEventListener(`pointerdown`, i),
    n.addEventListener(`touchstart`, i, { passive: !1 }),
    (i3 = r),
    i3
  );
}
var a3 = null;
function YLe(e) {
  let t = e.input.device;
  return t === `gamepad` || t === `touch`
    ? t
    : (a3 === null &&
        (a3 =
          typeof matchMedia == `function` &&
          matchMedia(`(pointer: coarse)`).matches),
      a3 ? `touch` : `kbm`);
}
function XLe() {
  let e =
    typeof navigator < `u` && navigator.getGamepads
      ? navigator.getGamepads()
      : null;
  if (!e) return !1;
  for (let t = 0; t < e.length; t++) if (e[t]?.buttons[0]?.pressed) return !0;
  return !1;
}
var ZLe =
  /^（電話）|^\(phone\)|^（訊息）|^\(text\)|^（廣播）|^\(radio\)|^（留守電）|^（アナウンス）/;
new j();
var QLe = new j(),
  o3 = new j(),
  s3 = { distance: 0, point: new j(), normal: new j(), tag: ``, body: null },
  c3 = [];
function $Le(e, t) {
  try {
    if (
      e.statics.overlapsRect(
        t.x - 0.25,
        t.z - 0.25,
        t.x + 0.25,
        t.z + 0.25,
        t.y,
      )
    )
      return !0;
    let n = e.dynamics.query(t.x, t.z, 0.35, c3, (e) => e.kind === `vehicle`);
    for (let e = 0; e < n; e++) {
      let n = c3[e];
      if (
        t.y > n.y - 0.2 &&
        t.y < n.y + n.height + 0.35 &&
        Math.hypot(n.x - t.x, n.z - t.z) < Math.max(n.halfW, n.halfL) + 0.3
      )
        return !0;
    }
    if (t.y < e.groundAt(t.x, t.z, t.y + 0.3, 0) + 0.4) return !0;
  } catch {}
  return !1;
}
function l3(e, t, n, r, i, a, o, s) {
  let c = t.x - e.x,
    l = t.y - e.y,
    u = t.z - e.z,
    d = ((r - e.x) * c + (a - e.z) * u) / Math.max(1e-6, c * c + u * u);
  if (d <= 0.04 || d >= 1 - 0.35 / n) return !1;
  let f = e.x + c * d,
    p = e.y + l * d,
    m = e.z + u * d;
  return Math.hypot(f - r, m - a) > s + 0.12
    ? !1
    : p > i + 0.9 && p < i + o + 0.12;
}
