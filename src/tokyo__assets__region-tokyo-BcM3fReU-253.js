// tokyo__assets__region-tokyo-BcM3fReU 253 — math
// Lines 100485-100682 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function J0(e, t, n, r) {
  let i = e.ctx,
    a = Ie(i),
    o = t ? Ae(a, t.name) : null,
    s = Ae(a, n),
    c = q0(e, t, n, r);
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
  let i = J0(e, t, n, r);
  await e.wait(i.dur * 0.92);
}
async function Y0(e, t, n) {
  (e.sfx(`phone_ring`, { ui: !0 }), await e.wait(0.9), await $(e, t, n));
}
function X0(e, t, n, r, i, a = 0) {
  return e.actor(n(), r, i, a, { names: K0(t) });
}
function Z0(e, t, n, r, i, a = 0) {
  let o = e.host(n(), r, i, a);
  return (o.setNames(K0(t)), o);
}
function Q0(e) {
  return e.player.character === `wen`
    ? { zh: `表姊`, en: `sis`, ja: `お姉ちゃん` }
    : { zh: `表哥`, en: `bro`, ja: `お兄ちゃん` };
}
var $0 = `
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
  e2 = null;
function t2() {
  if (e2 || typeof document > `u`) return e2;
  let e = document.createElement(`style`);
  ((e.id = `tk-cut-css`), (e.textContent = $0), document.head.appendChild(e));
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
    (e2 = r),
    e2
  );
}
var n2 = null;
function r2(e) {
  let t = e.input.device;
  return t === `gamepad` || t === `touch`
    ? t
    : (n2 === null &&
        (n2 =
          typeof matchMedia == `function` &&
          matchMedia(`(pointer: coarse)`).matches),
      n2 ? `touch` : `kbm`);
}
function i2() {
  let e =
    typeof navigator < `u` && navigator.getGamepads
      ? navigator.getGamepads()
      : null;
  if (!e) return !1;
  for (let t = 0; t < e.length; t++) if (e[t]?.buttons[0]?.pressed) return !0;
  return !1;
}
var a2 =
  /^（電話）|^\(phone\)|^（訊息）|^\(text\)|^（廣播）|^\(radio\)|^（留守電）|^（アナウンス）/;
new k();
var o2 = new k(),
  s2 = new k(),
  c2 = { distance: 0, point: new k(), normal: new k(), tag: ``, body: null },
  l2 = [];
function u2(e, t) {
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
    let n = e.dynamics.query(t.x, t.z, 0.35, l2, (e) => e.kind === `vehicle`);
    for (let e = 0; e < n; e++) {
      let n = l2[e];
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
function d2(e, t, n, r, i, a, o, s) {
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
function f2(e, t, n, r, i, a) {
  let o = e.camera,
    s = n.x - t.x,
    c = n.y - t.y,
    l = n.z - t.z,
    u = Math.hypot(s, c, l) || 1,
    d = r.x - t.x,
    f = r.y - t.y,
    p = r.z - t.z,
    m = Math.hypot(d, f, p);
  if (m < 0.5) return `too close`;
  let h = (d * s + f * c + p * l) / u;
  if (h < 0.3) return `behind the camera`;
  let g = -l,
    _ = s,
    v = Math.hypot(g, _) || 1;
  ((g /= v), (_ /= v));
  let y = s / u,
    b = c / u,
    x = l / u,
    S = d * g + p * _,
    C = d * (-_ * b) + f * (_ * y - g * x) + g * b * p,
    w = Math.tan(((o.fov || 60) * Math.PI) / 360),
    T = w * (o.aspect || 1.78);
  if (Math.abs(S / h) > T * 0.86 || Math.abs(C / h) > w * 0.7)
    return `out of frame`;
  s2.set(d / m, f / m, p / m);
  let E = m - 0.45;
  try {
    if (e.statics.raycast(t, s2, E, c2)) return `wall (${c2.tag || `?`})`;
    let n = e.player.mode === `foot` ? e.player.body : null,
      i = e.dynamics.raycast(t, s2, E, n, c2);
    if (
      i &&
      i.owner !== `missions` &&
      i.kind !== `player` &&
      Math.hypot(i.x - r.x, i.z - r.z) > 0.5
    )
      return `body (${i.kind})`;
  } catch {}
  if (i !== `me` && e.player.mode !== `vehicle`) {
    let n = e.player.position;
    if (d2(t, r, m, n.x, n.y, n.z, 1.72, 0.26)) return `the protagonist`;
  }
  for (let e of a)
    if (
      e !== i &&
      e.anim !== `fallen` &&
      d2(t, r, m, e.x, e.y, e.z, 1.75, 0.26)
    )
      return `cast`;
  return ``;
}
