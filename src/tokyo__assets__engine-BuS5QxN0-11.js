// tokyo__assets__engine-BuS5QxN0 11 — safeq
// Lines 3732-4055 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
function Vr() {
  if (typeof document > `u` || typeof navigator > `u`) return !1;
  let e = null;
  try {
    e = new URLSearchParams(location.search).get(`gcnudge`);
  } catch {}
  return e === `0` ? !1 : e === `1` || /^Apple/.test(navigator.vendor || ``);
}
var z = {
  on: Vr(),
  requests: 0,
  nudges: 0,
  last: ``,
  lastAt: -1 / 0,
  ms: 0,
  log: [],
  confirmed: 0,
  fallbacks: 0,
  fallbackFull: 0,
  fallbackMB: 0,
};
typeof window < `u` && (window.__gcNudge = z);
var Hr = 0,
  Ur = 0,
  Wr = [],
  Gr = { o: null },
  Kr = null;
function qr() {
  if (typeof WeakRef != `function`) return;
  let e = { gcNudge: performance.now() };
  ((Gr.o = e),
    (Kr = new WeakRef(e)),
    setTimeout(() => {
      Gr.o === e && (Gr.o = null);
    }, Lr));
}
var Jr = () => !!Kr && !Gr.o && !Kr.deref(),
  Yr = () =>
    new Promise((e) => {
      !document.hidden && typeof requestAnimationFrame == `function`
        ? requestAnimationFrame(() => e())
        : setTimeout(e, 16);
    }),
  Xr = { b: null },
  Zr = !1;
async function Qr() {
  if (!(Zr || typeof WeakRef != `function`)) {
    ((Zr = !0), z.fallbacks++);
    try {
      for (let e of zr) {
        Xr.b = [];
        try {
          for (; Xr.b.length < e;) {
            for (let t = 0; t < 4 && Xr.b.length < e; t++)
              Xr.b.push(new ArrayBuffer(Rr));
            await Yr();
          }
        } catch {
          return;
        }
        z.fallbackMB = e * 64;
        let t = { gcNudgeYoung: 1 },
          n = new WeakRef(t);
        t = null;
        for (let e = 0; e < Br && n.deref(); e++) await Yr();
        Xr.b = null;
        for (let e = 0; e < Br && !Jr(); e++) await Yr();
        if (Jr()) {
          z.fallbackFull++;
          return;
        }
      }
    } finally {
      ((Xr.b = null), (Zr = !1));
    }
  }
}
function $r() {
  Hr = 0;
  let e = performance.now();
  try {
    let e = document.createElement(`iframe`);
    ((e.style.display = `none`),
      e.setAttribute(`aria-hidden`, `true`),
      (e.tabIndex = -1),
      (document.body ?? document.documentElement).appendChild(e),
      e.remove());
  } catch {}
  (z.nudges++,
    (z.ms = Math.round((performance.now() - e) * 100) / 100),
    (z.lastAt = performance.now()),
    (z.last =
      Wr.slice(0, 6).join(`, `) + (Wr.length > 6 ? ` +${Wr.length - 6}` : ``)),
    z.log.push([Math.round(z.lastAt) / 1e3, z.last]),
    z.log.length > 40 && z.log.shift(),
    (Wr = []),
    qr(),
    Kr &&
      setTimeout(() => {
        Jr() ? z.confirmed++ : Qr();
      }, Ir));
}
function ei(e) {
  if (!z.on) return;
  (z.requests++, Wr.length < 32 && Wr.push(e));
  let t = performance.now();
  Hr ? clearTimeout(Hr) : (Ur = t);
  let n = Math.max(Math.min(t + Nr, Ur + Pr), z.lastAt + Fr);
  Hr = setTimeout($r, Math.max(0, n - t));
}
var ti = `tgta-ctxloss`,
  ni = `tgta-safe-quality`,
  ri = `tgta-lowmem`,
  ii = `tgta-lost-at`,
  ai = `tgta-alive`;
function B(e) {
  try {
    return sessionStorage.getItem(e);
  } catch {
    return null;
  }
}
function V(e, t) {
  try {
    sessionStorage.setItem(e, t);
  } catch {}
}
function oi(e) {
  try {
    sessionStorage.removeItem(e);
  } catch {}
}
function si() {
  (oi(ai), ji && U() && (delete Si().live[ki()], bi()));
}
function ci() {
  if (li !== null) return li;
  let e = Math.max(Number(B(`tgta-lowmem`)) || 0, yi().lowmem, ui);
  return e >= 2 ? 2 : +(e >= 1);
}
var li = null,
  ui = 0;
function di(e, t) {
  ((ui = Math.max(0, Math.min(2, e | 0))),
    (li = t === null ? null : Math.max(0, Math.min(2, t | 0))));
}
function fi(e) {
  ((Number(B(`tgta-lowmem`)) || 0) < e && V(ri, String(e)), Ci({ lowmem: e }));
}
var H = [`low`, `medium`, `high`, `ultra`],
  pi = 2592e5,
  mi = null;
function U() {
  return (mi === null && (mi = He().mobile), mi);
}
var hi = () => ({
  lowmem: 0,
  safeQ: ``,
  strikes: 0,
  cleanS: 0,
  at: 0,
  struck: 0,
  decayAt: 0,
  live: {},
});
function gi(e) {
  if (e.lowmem > 0) e.lowmem--;
  else if (e.safeQ) {
    let t = H.indexOf(e.safeQ);
    e.safeQ = t >= 0 && t < H.length - 2 ? H[t + 1] : ``;
  }
  e.cleanS = 0;
}
function _i(e, t) {
  if (!e.lowmem && !e.safeQ) return;
  let n = e.decayAt || e.struck || e.at || t;
  n > t + pi && (n = t);
  let r = Math.floor((t - n) / pi);
  if (((e.decayAt = n), !(r <= 0))) {
    for (let t = 0; t < r && (e.lowmem || e.safeQ); t++)
      (gi(e), (e.strikes = Math.max(0, e.strikes - 1)));
    ((e.decayAt = n + r * pi),
      (e.at = t),
      !e.lowmem && !e.safeQ && ((e.strikes = 0), (e.cleanS = 0)));
  }
}
var vi = null;
function yi() {
  if (vi) return vi;
  if (!U()) return (vi = hi());
  let e = {};
  try {
    let t = sn();
    t && (e = JSON.parse(t));
  } catch {
    e = {};
  }
  (!e || typeof e != `object`) && (e = {});
  let t = (e, t, n) =>
      typeof e == `number` && Number.isFinite(e)
        ? Math.max(t, Math.min(n, Math.round(e)))
        : t,
    n = {};
  if (e.live && typeof e.live == `object`)
    for (let [t, r] of Object.entries(e.live))
      r &&
        typeof r.t == `number` &&
        Number.isFinite(r.t) &&
        (n[t] = { t: r.t, v: +!!r.v, p: +!!r.p });
  return (
    (vi = {
      lowmem: t(e.lowmem, 0, 2),
      safeQ: typeof e.safeQ == `string` && H.includes(e.safeQ) ? e.safeQ : ``,
      strikes: t(e.strikes, 0, 99),
      cleanS: t(e.cleanS, 0, 1e7),
      at: t(e.at, 0, 2 ** 53 - 1),
      struck: t(e.struck, 0, 2 ** 53 - 1),
      decayAt: t(e.decayAt, 0, 2 ** 53 - 1),
      live: n,
    }),
    _i(vi, Date.now()),
    vi
  );
}
function bi() {
  U() && cn(JSON.stringify(yi()));
}
function xi(e) {
  return Math.min(8, 1 + 2 * Math.max(1, e));
}
function Si() {
  return ((vi = null), yi());
}
function Ci(e) {
  if (!U()) return;
  let t = Si(),
    n = Date.now();
  (e.lowmem !== void 0 &&
    (t.lowmem = Math.max(t.lowmem, Math.min(2, e.lowmem))),
    e.safeQ &&
      H.includes(e.safeQ) &&
      (!t.safeQ || H.indexOf(e.safeQ) < H.indexOf(t.safeQ)) &&
      (t.safeQ = e.safeQ),
    n - t.struck < 6e4 || (t.strikes = Math.min(99, t.strikes + 1)),
    (t.struck = n),
    (t.decayAt = n),
    (t.cleanS = 0),
    (t.at = n),
    bi());
}
function wi() {
  let e = B(`tgta-safe-quality`) ?? ``,
    t = yi().safeQ,
    n = H.indexOf(e),
    r = H.indexOf(t);
  return n < 0 ? (r < 0 ? `` : t) : r < 0 || n <= r ? e : t;
}
function Ti(e) {
  if (!H.includes(e)) return;
  let t = B(ni);
  ((!t || H.indexOf(e) < H.indexOf(t)) && V(ni, e), Ci({ safeQ: e }));
}
function Ei() {
  let e = yi();
  return U() && (e.lowmem > 0 || !!e.safeQ);
}
function Di(e) {
  if (!U() || !(e > 0)) return;
  let t = Si();
  (t.lowmem || t.safeQ) &&
    ((t.cleanS += e),
    t.cleanS >= 480 * xi(t.strikes) && gi(t),
    (t.at = Date.now()),
    bi());
}
function Oi() {
  return { ...yi(), live: { ...yi().live }, on: U() };
}
function ki() {
  let e = `tgta-tab`,
    t = B(e);
  return (t || ((t = Math.random().toString(36).slice(2, 10)), V(e, t)), t);
}
function Ai() {
  if (!U()) return { killedElsewhere: !1 };
  let e = yi(),
    t = ki(),
    n = Date.now(),
    r = !1;
  for (let [i, a] of Object.entries(e.live)) {
    if (i === t) continue;
    let o = n - a.t;
    o < 6e4 || (a.v && !a.p && o < 108e5 && (r = !0), delete e.live[i]);
  }
  let i = { t: n, v: document.visibilityState === `hidden` ? 0 : 1, p: 0 };
  ((e.live[t] = i), bi());
  let a = () => {
    ((i.t = Date.now()),
      (i.v = document.visibilityState === `hidden` ? 0 : 1),
      (Si().live[t] = i),
      bi());
  };
  return (
    setInterval(() => {
      document.visibilityState !== `hidden` && a();
    }, 2e4),
    document.addEventListener(`visibilitychange`, a),
    window.addEventListener(`pagehide`, () => {
      (delete Si().live[t], bi());
    }),
    window.addEventListener(`pageshow`, (e) => {
      e.persisted && a();
    }),
    (ji = i),
    (Mi = a),
    { killedElsewhere: r }
  );
}
var ji = null,
  Mi = null;
function Ni() {
  let e = Number(B(ii));
  return e > 0 ? Date.now() - e : 1 / 0;
}
