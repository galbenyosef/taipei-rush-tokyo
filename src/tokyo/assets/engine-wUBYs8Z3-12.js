// tokyo/assets/engine-wUBYs8Z3 12 — safeq
// Lines 3927-4242 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function ii() {
  if (typeof document > `u` || typeof navigator > `u`) return !1;
  let e = null;
  try {
    e = new URLSearchParams(location.search).get(`gcnudge`);
  } catch {}
  return e === `0` ? !1 : e === `1` || /^Apple/.test(navigator.vendor || ``);
}
var z = {
  on: ii(),
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
var ai = 0,
  oi = 0,
  si = [],
  ci = { o: null },
  li = null;
function ui() {
  if (typeof WeakRef != `function`) return;
  let e = { gcNudge: performance.now() };
  ((ci.o = e),
    (li = new WeakRef(e)),
    setTimeout(() => {
      ci.o === e && (ci.o = null);
    }, ei));
}
var di = () => !!li && !ci.o && !li.deref(),
  fi = () =>
    new Promise((e) => {
      !document.hidden && typeof requestAnimationFrame == `function`
        ? requestAnimationFrame(() => e())
        : setTimeout(e, 16);
    }),
  pi = { b: null },
  mi = !1;
async function hi() {
  if (!(mi || typeof WeakRef != `function`)) {
    ((mi = !0), z.fallbacks++);
    try {
      for (let e of ni) {
        pi.b = [];
        try {
          for (; pi.b.length < e;) {
            for (let t = 0; t < 4 && pi.b.length < e; t++)
              pi.b.push(new ArrayBuffer(ti));
            await fi();
          }
        } catch {
          return;
        }
        z.fallbackMB = e * 64;
        let t = { gcNudgeYoung: 1 },
          n = new WeakRef(t);
        t = null;
        for (let e = 0; e < ri && n.deref(); e++) await fi();
        pi.b = null;
        for (let e = 0; e < ri && !di(); e++) await fi();
        if (di()) {
          z.fallbackFull++;
          return;
        }
      }
    } finally {
      ((pi.b = null), (mi = !1));
    }
  }
}
function gi() {
  ai = 0;
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
      si.slice(0, 6).join(`, `) + (si.length > 6 ? ` +${si.length - 6}` : ``)),
    z.log.push([Math.round(z.lastAt) / 1e3, z.last]),
    z.log.length > 40 && z.log.shift(),
    (si = []),
    ui(),
    li &&
      setTimeout(() => {
        di() ? z.confirmed++ : hi();
      }, $r));
}
function _i(e) {
  if (!z.on) return;
  (z.requests++, si.length < 32 && si.push(e));
  let t = performance.now();
  ai ? clearTimeout(ai) : (oi = t);
  let n = Math.max(Math.min(t + Xr, oi + Zr), z.lastAt + Qr);
  ai = setTimeout(gi, Math.max(0, n - t));
}
var vi = `tgta-ctxloss`,
  yi = `tgta-safe-quality`,
  bi = `tgta-lowmem`,
  xi = `tgta-lost-at`,
  Si = `tgta-alive`,
  Ci = `tgta-resume`,
  wi = `tgta-in-game`;
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
function Ti(e) {
  try {
    sessionStorage.removeItem(e);
  } catch {}
}
function Ei() {
  try {
    V(Ci, `${location.pathname}|${Date.now()}`);
  } catch {}
}
function Di() {
  try {
    V(wi, location.pathname);
  } catch {}
}
function Oi() {
  try {
    return B(wi) === location.pathname;
  } catch {
    return !1;
  }
}
function ki() {
  let e = B(Ci);
  if (!e) return !1;
  Ti(Ci);
  let t = e.lastIndexOf(`|`);
  try {
    return (
      e.slice(0, t) === location.pathname &&
      Date.now() - Number(e.slice(t + 1)) < 12e4
    );
  } catch {
    return !1;
  }
}
function Ai() {
  (Ti(Si), $i && U() && (delete Wi().live[Zi()], Hi()));
}
function ji() {
  if (Mi !== null) return Mi;
  let e = Math.max(Number(B(`tgta-lowmem`)) || 0, W().lowmem, Ni);
  return e >= 2 ? 2 : +(e >= 1);
}
var Mi = null,
  Ni = 0;
function Pi(e, t) {
  ((Ni = Math.max(0, Math.min(2, e | 0))),
    (Mi = t === null ? null : Math.max(0, Math.min(2, t | 0))));
}
function Fi(e) {
  ((Number(B(`tgta-lowmem`)) || 0) < e && V(bi, String(e)), Gi({ lowmem: e }));
}
var H = [`low`, `medium`, `high`, `ultra`],
  Ii = 2592e5,
  Li = null;
function U() {
  return (Li === null && (Li = qe().mobile), Li);
}
var Ri = () => ({
  lowmem: 0,
  safeQ: ``,
  strikes: 0,
  cleanS: 0,
  at: 0,
  struck: 0,
  decayAt: 0,
  live: {},
});
function zi(e) {
  if (e.lowmem > 0) e.lowmem--;
  else if (e.safeQ) {
    let t = H.indexOf(e.safeQ);
    e.safeQ = t >= 0 && t < H.length - 2 ? H[t + 1] : ``;
  }
  e.cleanS = 0;
}
function Bi(e, t) {
  if (!e.lowmem && !e.safeQ) return;
  let n = e.decayAt || e.struck || e.at || t;
  n > t + Ii && (n = t);
  let r = Math.floor((t - n) / Ii);
  if (((e.decayAt = n), !(r <= 0))) {
    for (let t = 0; t < r && (e.lowmem || e.safeQ); t++)
      (zi(e), (e.strikes = Math.max(0, e.strikes - 1)));
    ((e.decayAt = n + r * Ii),
      (e.at = t),
      !e.lowmem && !e.safeQ && ((e.strikes = 0), (e.cleanS = 0)));
  }
}
var Vi = null;
function W() {
  if (Vi) return Vi;
  if (!U()) return (Vi = Ri());
  let e = {};
  try {
    let t = _n();
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
    (Vi = {
      lowmem: t(e.lowmem, 0, 2),
      safeQ: typeof e.safeQ == `string` && H.includes(e.safeQ) ? e.safeQ : ``,
      strikes: t(e.strikes, 0, 99),
      cleanS: t(e.cleanS, 0, 1e7),
      at: t(e.at, 0, 2 ** 53 - 1),
      struck: t(e.struck, 0, 2 ** 53 - 1),
      decayAt: t(e.decayAt, 0, 2 ** 53 - 1),
      live: n,
    }),
    Bi(Vi, Date.now()),
    Vi
  );
}
function Hi() {
  U() && vn(JSON.stringify(W()));
}
function Ui(e) {
  return Math.min(8, 1 + 2 * Math.max(1, e));
}
function Wi() {
  return ((Vi = null), W());
}
function Gi(e) {
  if (!U()) return;
  let t = Wi(),
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
    Hi());
}
function Ki() {
  let e = B(`tgta-safe-quality`) ?? ``,
    t = W().safeQ,
    n = H.indexOf(e),
    r = H.indexOf(t);
  return n < 0 ? (r < 0 ? `` : t) : r < 0 || n <= r ? e : t;
}
function qi(e) {
  if (!H.includes(e)) return;
  let t = B(yi);
  ((!t || H.indexOf(e) < H.indexOf(t)) && V(yi, e), Gi({ safeQ: e }));
}
function Ji() {
  let e = W();
  return U() && (e.lowmem > 0 || !!e.safeQ);
}
function Yi(e) {
  if (!U() || !(e > 0)) return;
  let t = Wi();
  (t.lowmem || t.safeQ) &&
    ((t.cleanS += e),
    t.cleanS >= 480 * Ui(t.strikes) && zi(t),
    (t.at = Date.now()),
    Hi());
}
function Xi() {
  return { ...W(), live: { ...W().live }, on: U() };
}
function Zi() {
  let e = `tgta-tab`,
    t = B(e);
  return (t || ((t = Math.random().toString(36).slice(2, 10)), V(e, t)), t);
}
