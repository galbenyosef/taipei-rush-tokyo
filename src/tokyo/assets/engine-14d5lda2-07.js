// tokyo/assets/engine-14d5lda2 07 — math
// Lines 2136-2310 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
function Yn() {
  return Gn;
}
function Xn() {
  if (Kn) return Kn;
  let e = qn();
  return (
    (Wn = e),
    (Kn = new Promise((t) => {
      let n = new AbortController(),
        r = !1,
        i = (i, o) => {
          r ||
            ((r = !0),
            clearTimeout(a),
            (Wn = i === `zh` || i === `en` ? i : e),
            (Gn = typeof o == `string` && /^[a-z-]{2,20}$/.test(o) ? o : null),
            t(),
            n.abort());
        },
        a = setTimeout(() => i(), 800);
      Promise.resolve()
        .then(() =>
          fetch(`/api/locale`, {
            signal: n.signal,
            cache: `no-store`,
            credentials: `same-origin`,
          }),
        )
        .then((e) => (e.ok ? e.json() : null))
        .then((e) => i(e?.lang, e?.city))
        .catch(() => i());
    })),
    Kn
  );
}
var Zn = 0.25,
  Qn = 36e5,
  $n = [1, 0.7, 0.45, 0.3, 0.2],
  er = $n.length,
  tr = 200,
  nr = (e) => typeof e == `string` && e.length > 0 && e.length < 200;
function rr(e) {
  let t = e.payLog,
    n = {};
  if (!t || typeof t != `object` || Array.isArray(t)) return n;
  for (let [e, r] of Object.entries(t)) {
    if (!nr(e) || !Array.isArray(r)) continue;
    let t = r
      .filter((e) => typeof e == `number` && Number.isFinite(e))
      .slice(-er);
    t.length && (n[e] = t);
  }
  return n;
}
function ir(e, t, n = Date.now()) {
  let r = rr(e)[t];
  return r ? r.filter((e) => n - e < Qn).length : 0;
}
var ar = (e) => $n[Math.max(0, Math.min($n.length - 1, Math.floor(e) || 0))];
function or(e, t, n = Date.now()) {
  let r = rr(e),
    i = ar((r[t] ?? []).filter((e) => n - e < Qn).length);
  for (let e of Object.keys(r))
    ((r[e] = r[e].filter((e) => n - e < Qn)), r[e].length || delete r[e]);
  r[t] = [...(r[t] ?? []), n].slice(-er);
  let a = Object.keys(r);
  if (a.length > tr) {
    a.sort((e, t) => Math.max(...r[e]) - Math.max(...r[t]));
    for (let e of a.slice(0, a.length - tr)) delete r[e];
  }
  return ((e.payLog = r), i);
}
function sr(e) {
  return Array.isArray(e.claimed) ? e.claimed.filter(nr) : [];
}
var cr = (e, t) => sr(e).includes(t);
function lr(e, t) {
  if (!nr(t)) return !1;
  let n = sr(e);
  return !n.includes(t) && (n.push(t), (e.claimed = n.slice(-4e3)), !0);
}
function ur(e, t) {
  let n = new Set(sr(e));
  if (Array.isArray(e.completedMissions))
    for (let t of e.completedMissions) nr(t) && n.add(`mission:${t}`);
  if (Array.isArray(e.collectibles))
    for (let t of e.collectibles) nr(t) && n.add(`collectible:${t}`);
  t.claimed = [...n].slice(-4e3);
  let r = rr(e);
  Object.keys(r).length && (t.payLog = r);
}
function dr(e) {
  return { claimed: sr(e), payLog: rr(e) };
}
function fr(e, t) {
  if (!t || typeof t != `object` || Array.isArray(t)) return;
  let n = t,
    r = new Set([...sr(e), ...sr(n)]);
  r.size && (e.claimed = [...r].slice(-4e3));
  let i = rr(e);
  for (let [e, t] of Object.entries(rr(n)))
    i[e] = [...new Set([...(i[e] ?? []), ...t])]
      .sort((e, t) => e - t)
      .slice(-er);
  Object.keys(i).length && (e.payLog = i);
}
function pr(e) {
  if (!(e < 1)) return null;
  let t = Math.round((1 - e) * 100);
  return {
    zh: r.on
      ? r.t(
          `一小時內重複同一份工作 −${t}%`,
          `1時間以内に同じ仕事の繰り返し −${t}%`,
        )
      : `一小時內重複同一份工作 −${t}%`,
    en: `Same job again within the hour −${t}%`,
  };
}
function mr(e, t, n, r, i = Date.now()) {
  let a = Number.isFinite(n) ? Math.max(0, n) : 0;
  r.replay && (a *= Zn);
  let o = or(e, t, i);
  return (
    (a *= o),
    r.blessed && (a *= 1.1),
    { pay: Math.max(0, Math.round(a)), share: o }
  );
}
var hr = {
  TWD: {
    code: `TWD`,
    unitsPer: 5,
    symbol: `NT$`,
    name: { zh: `新臺幣`, en: `New Taiwan dollar` },
  },
  JPY: {
    code: `JPY`,
    unitsPer: 1,
    symbol: `¥`,
    name: { zh: `日圓`, en: `Japanese yen` },
  },
};
function gr(e, t) {
  return Math.round(e) * hr[t].unitsPer;
}
function _r(e, t) {
  return Math.floor(e / hr[t].unitsPer);
}
var vr = (e) => e === `zh` || e === `en` || e === `ja`;
function yr() {
  let e = br();
  if (e) return e;
  try {
    let e = I();
    if (e?.langJa === !0) return `ja`;
    let t = e?.settings?.lang;
    if (vr(t)) return t;
    let n = Pe().shared?.settings.lang;
    if (n === `zh` || n === `en`) return n;
  } catch {}
  return xr.lang;
}
function br() {
  try {
    let e =
      typeof location < `u`
        ? new URLSearchParams(location.search).get(`lang`)
        : null;
    return vr(e) ? e : null;
  } catch {
    return null;
  }
}
