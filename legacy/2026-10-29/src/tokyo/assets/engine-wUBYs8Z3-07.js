// tokyo/assets/engine-wUBYs8Z3 07 — math
// Lines 2122-2188 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function Gn(e) {
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
function Kn(e, t, n, r, i = Date.now()) {
  let a = Number.isFinite(n) ? Math.max(0, n) : 0;
  r.replay && (a *= kn);
  let o = Rn(e, t, i);
  return (
    (a *= o),
    r.blessed && (a *= 1.1),
    { pay: Math.max(0, Math.round(a)), share: o }
  );
}
var qn = {
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
function Jn(e, t) {
  return Math.round(e) * qn[t].unitsPer;
}
function Yn(e, t) {
  return Math.floor(e / qn[t].unitsPer);
}
var Xn = (e) => e === `zh` || e === `en` || e === `ja`;
function Zn() {
  let e = Qn();
  if (e) return e;
  try {
    let e = I()?.settings?.lang;
    if (Xn(e)) return e;
  } catch {}
  return er.lang;
}
function Qn() {
  try {
    let e =
      typeof location < `u`
        ? new URLSearchParams(location.search).get(`lang`)
        : null;
    return Xn(e) ? e : null;
  } catch {
    return null;
  }
}
function $n() {
  return `ja`;
}
