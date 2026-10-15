// tokyo/assets/region-tokyo-55J_WESF 68 — brk
// Lines 29833-29922 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function gf(e) {
  return vse[e];
}
function _f(e) {
  return e === `akihabara`
    ? yse
    : e === `ginza` || e === `marunouchi`
      ? bse
      : xse;
}
var yse = mf(11, 22, {
    prep: 0.5,
    board: 0.3,
    why: `district default (秋葉原)`,
  }),
  bse = mf(11, 21, {
    prep: 0.5,
    board: 0.2,
    why: `district default (銀座 / 丸の内)`,
  }),
  xse = mf(10, 20, { prep: 0.5, board: 0.3, why: `district default` }),
  vf = (e) => {
    let t = Math.floor(e + 1e-6),
      n = Math.round((e - t) * 60);
    return `${String(t).padStart(2, `0`)}:${String(n).padStart(2, `0`)}`;
  };
function Sse(e) {
  return e.open <= 0 && e.close >= 24
    ? `24H`
    : `${vf(Math.max(0, e.open - (e.prep ?? 0)))}-${vf(e.close > 24 ? e.close - 24 : e.close)}`;
}
var yf = { CLOSED: 0, PREP: 1, OPEN: 2, BREAK: 3, DAYOFF: 4 };
function Cse(e, t) {
  return (
    (e.open <= 0 && e.close >= 24) ||
    !(
      (e.newYear && t.newYear && !(t.m === 12 && t.d < 31)) ||
      (e.sunHol && (t.kind === `sun` || t.kind === `holiday`)) ||
      (e.sat === null && t.kind === `sat`) ||
      (e.closed && e.closed.includes(t.wd) && !t.holiday)
    )
  );
}
function bf(e, t, n) {
  if (e.open <= 0 && e.close >= 24) return yf.OPEN;
  let r = ff(pf(n));
  if (r >= 24 && e.close > 24) return r < e.close ? yf.OPEN : yf.CLOSED;
  if (!Cse(e, t)) return yf.DAYOFF;
  let i = e.open,
    a = e.close;
  t.kind === `sat` && e.sat && ([i, a] = e.sat);
  let o = e.prep ?? 0;
  return r < i - o || r >= a
    ? yf.CLOSED
    : r < i
      ? yf.PREP
      : e.brk && r >= e.brk[0] && r < e.brk[1] && a > e.brk[1]
        ? yf.BREAK
        : yf.OPEN;
}
function wse(e, t, n) {
  let r = bf(e, t, n);
  if (r === yf.CLOSED || r === yf.DAYOFF) return 0;
  if (r === yf.PREP || r === yf.BREAK) return 1;
  let i = ff(pf(n)),
    a = e.open,
    o = e.close;
  t.kind === `sat` && e.sat && ([a, o] = e.sat);
  let s = e.brk && i >= e.brk[1] ? e.brk[1] : a,
    c = e.brk && i < e.brk[0] ? e.brk[0] : o;
  return i < s + 0.05 || i >= c - 0.17 ? 2 : 3;
}
function xf(e, t) {
  let n = pf(t),
    r = e[0],
    i = e[e.length - 1];
  if (n <= r[0]) {
    let e = r[0] + 24 - i[0];
    return e > 0 ? i[1] + ((r[1] - i[1]) * (n + 24 - i[0])) / e : r[1];
  }
  for (let t = 1; t < e.length; t++) {
    let r = e[t];
    if (n <= r[0]) {
      let i = e[t - 1];
      return i[1] + ((r[1] - i[1]) * (n - i[0])) / Math.max(1e-6, r[0] - i[0]);
    }
  }
  let a = r[0] + 24 - i[0];
  return a > 0 ? i[1] + ((r[1] - i[1]) * (n - i[0])) / a : i[1];
}
