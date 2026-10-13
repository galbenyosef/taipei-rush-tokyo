// tokyo__assets__prefs-BioZODFl 01 — json
// Lines 1-33 of readable/tokyo__assets__prefs-BioZODFl.pretty.js (statement-aligned).
var e = `tokyo-rush-ui`,
  t = null;
function n() {
  let n = {};
  try {
    n = JSON.parse(localStorage.getItem(e) || `{}`);
  } catch {}
  return t ? { ...n, ...t } : n;
}
function r(r) {
  let i = t ? { ...t, ...r } : r;
  t = null;
  try {
    localStorage.setItem(e, JSON.stringify({ ...n(), ...i }));
  } catch {}
}
function i(e) {
  let n = !t;
  if (((t = { ...(t ?? {}), ...e }), !n)) return;
  let i = () => {
      t && r({});
    },
    a = globalThis.requestIdleCallback;
  (a ? a(i, { timeout: 1e3 }) : setTimeout(i, 250),
    typeof window < `u` &&
      window.addEventListener(`pagehide`, i, { once: !0 }));
}
function a() {
  return typeof document < `u` &&
    document.body.classList.contains(`tr-is-touch`)
    ? 1.15
    : 1;
}
