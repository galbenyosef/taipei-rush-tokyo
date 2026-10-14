// tokyo/assets/analytics-B76dRwr5 01 — beforesend
// Lines 1-139 of readable/tokyo/assets/analytics-B76dRwr5.pretty.js (statement-aligned).
var e = () => {
    window.va ||
      (window.va = function (...e) {
        (window.vaq || (window.vaq = []), window.vaq.push(e));
      });
  },
  t = `@vercel/analytics`,
  n = `2.0.1`;
function r() {
  return typeof window < `u`;
}
function i() {
  return `production`;
}
function a(e = `auto`) {
  if (e === `auto`) {
    window.vam = i();
    return;
  }
  window.vam = e;
}
function o() {
  return (r() ? window.vam : i()) || `production`;
}
function s() {
  return o() === `production`;
}
function c() {
  return o() === `development`;
}
function l(e, { [e]: t, ...n }) {
  return n;
}
function u(e, t) {
  if (!e) return;
  let n = e,
    r = [];
  for (let [i, a] of Object.entries(e))
    typeof a == `object` && a && (t.strip ? (n = l(i, n)) : r.push(i));
  if (r.length > 0 && !t.strip)
    throw Error(
      `The following properties are not valid: ${r.join(`, `)}. Only strings, numbers, booleans, and null are allowed.`,
    );
  return n;
}
function d(e) {
  return e.scriptSrc
    ? p(e.scriptSrc)
    : c()
      ? `https://va.vercel-scripts.com/v1/script.debug.js`
      : e.basePath
        ? p(`${e.basePath}/insights/script.js`)
        : `/_vercel/insights/script.js`;
}
function f(e, r) {
  let i = e;
  if (r)
    try {
      i = { ...JSON.parse(r)?.analytics, ...e };
    } catch {}
  a(i.mode);
  let o = { sdkn: t + (i.framework ? `/${i.framework}` : ``), sdkv: n };
  return (
    i.disableAutoTrack && (o.disableAutoTrack = `1`),
    i.viewEndpoint && (o.viewEndpoint = p(i.viewEndpoint)),
    i.eventEndpoint && (o.eventEndpoint = p(i.eventEndpoint)),
    i.sessionEndpoint && (o.sessionEndpoint = p(i.sessionEndpoint)),
    c() && i.debug === !1 && (o.debug = `false`),
    i.dsn && (o.dsn = i.dsn),
    i.endpoint
      ? (o.endpoint = i.endpoint)
      : i.basePath && (o.endpoint = p(`${i.basePath}/insights`)),
    { beforeSend: i.beforeSend, src: d(i), dataset: o }
  );
}
function p(e) {
  return e.startsWith(`http://`) ||
    e.startsWith(`https://`) ||
    e.startsWith(`/`)
    ? e
    : `/${e}`;
}
function m(t = { debug: !0 }, n) {
  var i;
  if (!r()) return;
  let { beforeSend: a, src: o, dataset: s } = f(t, n);
  if (
    (e(),
    a && ((i = window.va) == null || i.call(window, `beforeSend`, a)),
    document.head.querySelector(`script[src*="${o}"]`))
  )
    return;
  let l = document.createElement(`script`);
  l.src = o;
  for (let [e, t] of Object.entries(s)) l.dataset[e] = t;
  ((l.defer = !0),
    (l.onerror = () => {
      let e = c()
        ? `Please check if any ad blockers are enabled and try again.`
        : `Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.`;
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${o}. ${e}`,
      );
    }),
    document.head.appendChild(l));
}
function h(e, t, n) {
  var i, a;
  if (!r()) {
    let e =
      "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
    if (s()) console.warn(e);
    else throw Error(e);
    return;
  }
  if (!t) {
    (i = window.va) == null || i.call(window, `event`, { name: e, options: n });
    return;
  }
  try {
    let r = u(t, { strip: s() });
    (a = window.va) == null ||
      a.call(window, `event`, { name: e, data: r, options: n });
  } catch (e) {
    e instanceof Error && c() && console.error(e);
  }
}
m({
  mode: `production`,
  beforeSend(e) {
    let t = new URL(e.url);
    return ((t.search = ``), (t.hash = ``), { ...e, url: t.toString() });
  },
});
function g(e, t) {
  try {
    h(e, t);
  } catch {}
}
