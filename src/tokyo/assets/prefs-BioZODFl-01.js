// tokyo/assets/prefs-BioZODFl 01 — pendingwrites
// Lines 1-33 of readable/tokyo/assets/prefs-BioZODFl.pretty.js (statement-aligned).
var STORAGE_KEY = `tokyo-rush-ui`,
  pendingWrites = null;
function n() {
  let n = {};
  try {
    n = JSON.parse(localStorage.getItem(STORAGE_KEY) || `{}`);
  } catch {}
  return pendingWrites ? { ...n, ...pendingWrites } : n;
}
function r(r) {
  let i = pendingWrites ? { ...pendingWrites, ...r } : r;
  pendingWrites = null;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...n(), ...i }));
  } catch {}
}
function i(e) {
  let n = !pendingWrites;
  if (((pendingWrites = { ...(pendingWrites ?? {}), ...e }), !n)) return;
  let i = () => {
      pendingWrites && r({});
    },
    a = globalThis.requestIdleCallback;
  (a ? a(i, { timeout: 1e3 }) : setTimeout(i, 250),
    typeof window < `u` &&
      window.addEventListener(`pagehide`, i, { once: !0 }));
}
function uiScale() {
  return typeof document < `u` &&
    document.body.classList.contains(`tr-is-touch`)
    ? 1.15
    : 1;
}
