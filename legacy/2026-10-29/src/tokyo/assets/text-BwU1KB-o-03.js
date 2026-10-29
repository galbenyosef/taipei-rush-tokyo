// tokyo/assets/text-BwU1KB-o 03 — email_rate_limited
// Lines 453-504 of readable/tokyo/assets/text-BwU1KB-o.pretty.js (statement-aligned).
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
function s(t) {
  return {
    zh: e.on
      ? e.t(
          `收入超過目前遊玩時數允許的上限，伺服器收回了 ${t}。`,
          `プレイ時間で認められる上限を超えた収入のため、サーバーが ${t} を回収しました。`,
        )
      : `收入超過目前遊玩時數允許的上限，伺服器收回了 ${t}。`,
    en: `Earnings beyond what your play time allows: the server took back ${t}.`,
  };
}
