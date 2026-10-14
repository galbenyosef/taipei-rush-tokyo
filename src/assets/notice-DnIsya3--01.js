// assets/notice-DnIsya3- 01 — detail
// Lines 1-21 of readable/assets/notice-DnIsya3-.pretty.js (statement-aligned).
var NOTICE_KEY = `taipei-rush-cloud-notice-v1`;
function t(t, n = ``) {
  try {
    sessionStorage.setItem(NOTICE_KEY, JSON.stringify({ notice: t, detail: n }));
  } catch {}
}
function n() {
  try {
    let t = sessionStorage.getItem(NOTICE_KEY);
    sessionStorage.removeItem(NOTICE_KEY);
    let n = t ? JSON.parse(t) : null;
    return n && typeof n.notice == `string`
      ? {
          notice: n.notice,
          detail: typeof n.detail == `string` ? n.detail : ``,
        }
      : null;
  } catch {
    return null;
  }
}
