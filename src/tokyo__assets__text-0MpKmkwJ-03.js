// tokyo__assets__text-0MpKmkwJ 03 — email_rate_limited
// Lines 453-493 of readable/tokyo__assets__text-0MpKmkwJ.pretty.js (statement-aligned).
function r(e) {
  return e === `cloud`
    ? t.toastCloud
    : e === `guest`
      ? t.toastAccountLoaded
      : e === `legacy`
        ? t.toastLegacy
        : t.toastDevice;
}
function i(e) {
  return e === `guest`
    ? t.useGuest
    : e === `legacy`
      ? t.useLegacy
      : t.toastUndo;
}
function a(e) {
  return e === `guest`
    ? t.restoreGuest
    : e === `legacy`
      ? t.restoreLegacy
      : t.restore;
}
function o(t, r, i) {
  return (t === `email_rate_limited` || t === `rate_limited`) && r && r > 0
    ? {
        zh: e.on
          ? e.t(
              `${t === `email_rate_limited` ? `寄信太頻繁了` : `嘗試次數過多`}，請 ${r} 秒後再試。`,
              `${e.jz(t === `email_rate_limited` ? `寄信太頻繁了` : `嘗試次數過多`)}。${r} 秒後にもう一度お試しください。`,
            )
          : `${t === `email_rate_limited` ? `寄信太頻繁了` : `嘗試次數過多`}，請 ${r} 秒後再試。`,
        en: `${t === `email_rate_limited` ? `Too many emails` : `Too many attempts`}. Try again in ${r} s.`,
      }
    : t === `weak_password` && i?.includes(`pwned`)
      ? {
          zh: `這個密碼曾出現在外洩的資料中，請換一個。`,
          en: `This password appeared in a data breach. Please choose another one.`,
        }
      : n[t];
}
