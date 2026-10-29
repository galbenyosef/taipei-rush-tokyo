// tokyo/assets/engine-14d5lda2 12 — safeq
// Lines 4048-4363 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
function Ti() {
  if (typeof document > `u` || typeof navigator > `u`) return !1;
  let e = null;
  try {
    e = new URLSearchParams(location.search).get(`gcnudge`);
  } catch {}
  return e === `0` ? !1 : e === `1` || /^Apple/.test(navigator.vendor || ``);
}
var z = {
  on: Ti(),
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
var Ei = 0,
  Di = 0,
  Oi = [],
  ki = { o: null },
  Ai = null;
function ji() {
  if (typeof WeakRef != `function`) return;
  let e = { gcNudge: performance.now() };
  ((ki.o = e),
    (Ai = new WeakRef(e)),
    setTimeout(() => {
      ki.o === e && (ki.o = null);
    }, xi));
}
var Mi = () => !!Ai && !ki.o && !Ai.deref(),
  Ni = () =>
    new Promise((e) => {
      !document.hidden && typeof requestAnimationFrame == `function`
        ? requestAnimationFrame(() => e())
        : setTimeout(e, 16);
    }),
  Pi = { b: null },
  Fi = !1;
async function Ii() {
  if (!(Fi || typeof WeakRef != `function`)) {
    ((Fi = !0), z.fallbacks++);
    try {
      for (let e of Ci) {
        Pi.b = [];
        try {
          for (; Pi.b.length < e;) {
            for (let t = 0; t < 4 && Pi.b.length < e; t++)
              Pi.b.push(new ArrayBuffer(Si));
            await Ni();
          }
        } catch {
          return;
        }
        z.fallbackMB = e * 64;
        let t = { gcNudgeYoung: 1 },
          n = new WeakRef(t);
        t = null;
        for (let e = 0; e < wi && n.deref(); e++) await Ni();
        Pi.b = null;
        for (let e = 0; e < wi && !Mi(); e++) await Ni();
        if (Mi()) {
          z.fallbackFull++;
          return;
        }
      }
    } finally {
      ((Pi.b = null), (Fi = !1));
    }
  }
}
function Li() {
  Ei = 0;
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
      Oi.slice(0, 6).join(`, `) + (Oi.length > 6 ? ` +${Oi.length - 6}` : ``)),
    z.log.push([Math.round(z.lastAt) / 1e3, z.last]),
    z.log.length > 40 && z.log.shift(),
    (Oi = []),
    ji(),
    Ai &&
      setTimeout(() => {
        Mi() ? z.confirmed++ : Ii();
      }, bi));
}
function Ri(e) {
  if (!z.on) return;
  (z.requests++, Oi.length < 32 && Oi.push(e));
  let t = performance.now();
  Ei ? clearTimeout(Ei) : (Di = t);
  let n = Math.max(Math.min(t + _i, Di + vi), z.lastAt + yi);
  Ei = setTimeout(Li, Math.max(0, n - t));
}
var zi = `tgta-ctxloss`,
  Bi = `tgta-safe-quality`,
  Vi = `tgta-lowmem`,
  Hi = `tgta-lost-at`,
  Ui = `tgta-alive`,
  Wi = `tgta-resume`,
  Gi = `tgta-in-game`;
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
function Ki(e) {
  try {
    sessionStorage.removeItem(e);
  } catch {}
}
function qi() {
  try {
    V(Wi, `${location.pathname}|${Date.now()}`);
  } catch {}
}
function Ji() {
  try {
    V(Gi, location.pathname);
  } catch {}
}
function Yi() {
  try {
    return B(Gi) === location.pathname;
  } catch {
    return !1;
  }
}
function Xi() {
  let e = B(Wi);
  if (!e) return !1;
  Ki(Wi);
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
function Zi() {
  (Ki(Ui), ba && U() && (delete da().live[va()], la()));
}
function Qi() {
  if ($i !== null) return $i;
  let e = Math.max(Number(B(`tgta-lowmem`)) || 0, W().lowmem, ea);
  return e >= 2 ? 2 : +(e >= 1);
}
var $i = null,
  ea = 0;
function ta(e, t) {
  ((ea = Math.max(0, Math.min(2, e | 0))),
    ($i = t === null ? null : Math.max(0, Math.min(2, t | 0))));
}
function na(e) {
  ((Number(B(`tgta-lowmem`)) || 0) < e && V(Vi, String(e)), fa({ lowmem: e }));
}
var H = [`low`, `medium`, `high`, `ultra`],
  ra = 2592e5,
  ia = null;
function U() {
  return (ia === null && (ia = Je().mobile), ia);
}
var aa = () => ({
  lowmem: 0,
  safeQ: ``,
  strikes: 0,
  cleanS: 0,
  at: 0,
  struck: 0,
  decayAt: 0,
  live: {},
});
function oa(e) {
  if (e.lowmem > 0) e.lowmem--;
  else if (e.safeQ) {
    let t = H.indexOf(e.safeQ);
    e.safeQ = t >= 0 && t < H.length - 2 ? H[t + 1] : ``;
  }
  e.cleanS = 0;
}
function sa(e, t) {
  if (!e.lowmem && !e.safeQ) return;
  let n = e.decayAt || e.struck || e.at || t;
  n > t + ra && (n = t);
  let r = Math.floor((t - n) / ra);
  if (((e.decayAt = n), !(r <= 0))) {
    for (let t = 0; t < r && (e.lowmem || e.safeQ); t++)
      (oa(e), (e.strikes = Math.max(0, e.strikes - 1)));
    ((e.decayAt = n + r * ra),
      (e.at = t),
      !e.lowmem && !e.safeQ && ((e.strikes = 0), (e.cleanS = 0)));
  }
}
var ca = null;
function W() {
  if (ca) return ca;
  if (!U()) return (ca = aa());
  let e = {};
  try {
    let t = Mn();
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
    (ca = {
      lowmem: t(e.lowmem, 0, 2),
      safeQ: typeof e.safeQ == `string` && H.includes(e.safeQ) ? e.safeQ : ``,
      strikes: t(e.strikes, 0, 99),
      cleanS: t(e.cleanS, 0, 1e7),
      at: t(e.at, 0, 2 ** 53 - 1),
      struck: t(e.struck, 0, 2 ** 53 - 1),
      decayAt: t(e.decayAt, 0, 2 ** 53 - 1),
      live: n,
    }),
    sa(ca, Date.now()),
    ca
  );
}
function la() {
  U() && Nn(JSON.stringify(W()));
}
function ua(e) {
  return Math.min(8, 1 + 2 * Math.max(1, e));
}
function da() {
  return ((ca = null), W());
}
function fa(e) {
  if (!U()) return;
  let t = da(),
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
    la());
}
function pa() {
  let e = B(`tgta-safe-quality`) ?? ``,
    t = W().safeQ,
    n = H.indexOf(e),
    r = H.indexOf(t);
  return n < 0 ? (r < 0 ? `` : t) : r < 0 || n <= r ? e : t;
}
function ma(e) {
  if (!H.includes(e)) return;
  let t = B(Bi);
  ((!t || H.indexOf(e) < H.indexOf(t)) && V(Bi, e), fa({ safeQ: e }));
}
function ha() {
  let e = W();
  return U() && (e.lowmem > 0 || !!e.safeQ);
}
function ga(e) {
  if (!U() || !(e > 0)) return;
  let t = da();
  (t.lowmem || t.safeQ) &&
    ((t.cleanS += e),
    t.cleanS >= 480 * ua(t.strikes) && oa(t),
    (t.at = Date.now()),
    la());
}
function _a() {
  return { ...W(), live: { ...W().live }, on: U() };
}
function va() {
  let e = `tgta-tab`,
    t = B(e);
  return (t || ((t = Math.random().toString(36).slice(2, 10)), V(e, t)), t);
}
