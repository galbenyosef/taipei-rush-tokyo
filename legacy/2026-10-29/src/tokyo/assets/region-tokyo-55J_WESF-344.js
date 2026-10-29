// tokyo/assets/region-tokyo-55J_WESF 344 — fillstyle
// Lines 124564-124771 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function OAe(e, t, n, r, i, a, o) {
  let s = IY[i] ?? `#444`,
    c = o ? r * 0.28 : 0;
  o &&
    ((e.fillStyle = `#1b1b1b`),
    zY(e, t, n, r, c + r * 0.1, r * 0.08),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    (e.font = `800 ${Math.round(r * 0.2)}px Helvetica, Arial, sans-serif`),
    (e.textBaseline = `middle`),
    (e.textAlign = `center`),
    e.fillText(o, t + r / 2, n + c * 0.55));
  let l = n + c;
  ((e.fillStyle = s),
    zY(e, t, l, r, r, r * 0.1),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    zY(e, t + r * 0.08, l + r * 0.36, r * 0.84, r * 0.56, r * 0.05),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = `800 ${Math.round(r * 0.26)}px Helvetica, Arial, sans-serif`),
    e.fillText(i, t + r / 2, l + r * 0.19),
    (e.fillStyle = `#111`),
    (e.font = `800 ${Math.round(r * 0.42)}px Helvetica, Arial, sans-serif`),
    e.fillText(a, t + r / 2, l + r * 0.65));
}
function zY(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.arcTo(t + r, n, t + r, n + i, a),
    e.arcTo(t + r, n + i, t, n + i, a),
    e.arcTo(t, n + i, t, n, a),
    e.arcTo(t, n, t + r, n, a),
    e.closePath());
}
function kAe(e, t, n, r, i) {
  ((e.fillStyle = `#ffffff`), e.fillRect(0, 0, t, n));
  let a = n * 0.3,
    o = IY[r.line] ?? `#888`,
    s = n * 0.38,
    c = t / 2;
  ((e.textBaseline = `alphabetic`),
    (e.fillStyle = `#111`),
    (e.font = `600 ${Math.round(n * 0.11)}px ${i}`),
    RY(e, r.kana, c, n * 0.17, t * 0.5, `center`),
    (e.font = `800 ${Math.round(n * 0.3)}px ${i}`));
  let l = Math.min(t * 0.46, e.measureText(r.kanji).width);
  (RY(e, r.kanji, c, n * 0.47, t * 0.46, `center`),
    (e.font = `600 ${Math.round(n * 0.11)}px Helvetica, Arial, sans-serif`),
    (e.fillStyle = `#222`),
    RY(e, r.roman, c, n * 0.62, t * 0.5, `center`),
    OAe(
      e,
      c - l / 2 - s - n * 0.1,
      n * 0.06 + (r.code3 ? 0 : n * 0.05),
      s,
      r.line,
      r.num,
      r.code3,
    ),
    (e.fillStyle = o),
    e.fillRect(0, n - a, t, a));
  let u = n - a * 0.42,
    d = n - a * 0.1,
    f = (n, r) => {
      if (!n) return;
      let o = r ? t - 14 : 14;
      ((e.fillStyle = `#111`), (e.font = `700 ${Math.round(a * 0.42)}px ${i}`));
      let s = r ? `▶` : `◀`;
      (RY(
        e,
        r ? `${n.kanji} ${s}` : `${s} ${n.kanji}`,
        o,
        u,
        t * 0.42,
        r ? `right` : `left`,
      ),
        (e.font = `600 ${Math.round(a * 0.24)}px Helvetica, Arial, sans-serif`),
        RY(
          e,
          `${n.num ? n.num + ` ` : ``}${n.roman}`,
          r ? o - a * 0.5 : o + a * 0.5,
          d,
          t * 0.38,
          r ? `right` : `left`,
        ));
    };
  (f(r.left, !1),
    f(r.right, !0),
    (e.strokeStyle = `rgba(0,0,0,0.25)`),
    (e.lineWidth = 3),
    e.strokeRect(1.5, 1.5, t - 3, n - 3));
}
function AAe(e, t, n, r, i) {
  ((e.fillStyle = `#1d2024`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = `#ffffff`));
  let a = n * 0.74,
    o = (n - a) / 2;
  (zY(e, 10, o, a, a, 6),
    e.fill(),
    (e.fillStyle = `#111`),
    (e.font = `800 ${Math.round(a * 0.78)}px Helvetica, Arial, sans-serif`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    e.fillText(r.track, 10 + a / 2, n / 2 + 2));
  let s = 22 + a;
  ((e.fillStyle = IY[r.line] ?? `#888`),
    zY(e, s, o + a * 0.12, a * 0.76, a * 0.76, 5),
    e.fill(),
    (e.fillStyle = `#fff`),
    (e.font = `800 ${Math.round(a * 0.34)}px Helvetica, Arial, sans-serif`),
    e.fillText(r.line, s + a * 0.38, n / 2 + 1));
  let c = s + a * 0.76 + 12;
  ((e.textBaseline = `alphabetic`),
    (e.fillStyle = `#ffffff`),
    (e.font = `700 ${Math.round(n * 0.34)}px ${i}`),
    RY(e, `${r.lineJa}　${r.dirJa}`, c, n * 0.52, t - c - 10),
    (e.fillStyle = `#c9ced4`),
    (e.font = `600 ${Math.round(n * 0.2)}px Helvetica, Arial, sans-serif`),
    RY(e, r.dirEn, c, n * 0.84, t - c - 10));
}
function jAe(e, t, n, r, i) {
  ((e.fillStyle = `#f7f7f4`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = IY[r.line] ?? `#888`),
    e.fillRect(0, n - n * 0.12, t, n * 0.12),
    (e.fillStyle = `#121212`),
    (e.textBaseline = `alphabetic`),
    (e.font = `800 ${Math.round(n * 0.42)}px ${i}`),
    RY(e, r.kanji, 18, n * 0.5, t * 0.48),
    (e.font = `600 ${Math.round(n * 0.15)}px Helvetica, Arial, sans-serif`),
    RY(e, r.roman, 20, n * 0.74, t * 0.46),
    (e.font = `700 ${Math.round(n * 0.3)}px ${i}`),
    RY(e, r.exitJa, t - 18, n * 0.46, t * 0.44, `right`),
    (e.font = `600 ${Math.round(n * 0.14)}px Helvetica, Arial, sans-serif`),
    RY(e, r.exitEn, t - 18, n * 0.72, t * 0.44, `right`));
}
function MAe(e, t, n, r, i) {
  let a = i.replace(/[0-9]/g, ``),
    o = i.replace(/[^0-9]/g, ``);
  ((e.fillStyle = IY[a] ?? `#888`),
    e.beginPath(),
    e.arc(t, n, r, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.arc(t, n, r * 0.74, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#111`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.font = `800 ${Math.round(r * 0.62)}px Helvetica, Arial, sans-serif`),
    e.fillText(a, t, n - r * 0.26),
    (e.font = `800 ${Math.round(r * 0.62)}px Helvetica, Arial, sans-serif`),
    e.fillText(o, t, n + r * 0.32));
}
function NAe(e, t, n, r, i) {
  ((e.fillStyle = `#ffffff`), e.fillRect(0, 0, t, n));
  let a = n * 0.2,
    o = Math.min(3, r.codes.length);
  for (let t = 0; t < o; t++)
    MAe(e, 12 + a + a * 2.1 * t, n * 0.3, a, r.codes[t]);
  ((e.fillStyle = `#121212`),
    (e.textBaseline = `alphabetic`),
    (e.font = `800 ${Math.round(n * 0.3)}px ${i}`),
    RY(e, r.kanji + HY(`transit.station.suffix`, `駅`), 14, n * 0.82, t * 0.6));
  let s = t * 0.3;
  ((e.fillStyle = `#ffd400`),
    e.fillRect(t - s, 0, s, n),
    (e.fillStyle = `#111`),
    (e.textAlign = `center`),
    (e.font = `600 ${Math.round(n * 0.16)}px ${i}`),
    e.fillText(HY(`transit.metro.exit`, `出入口`), t - s / 2, n * 0.3),
    (e.font = `800 ${Math.round(n * 0.42)}px Helvetica, Arial, sans-serif`),
    RY(e, r.exit, t - s / 2, n * 0.78, s - 10, `center`),
    (e.textAlign = `left`),
    (e.fillStyle = `#444`),
    (e.font = `600 ${Math.round(n * 0.11)}px Helvetica, Arial, sans-serif`),
    RY(e, r.roman, 14, n * 0.97, t * 0.6));
}
function PAe(e, t, n, r, i) {
  ((e.fillStyle = `#f4f4ef`),
    e.fillRect(0, 0, t, n),
    (e.strokeStyle = `#2a2a2a`),
    (e.lineWidth = 3),
    e.strokeRect(4, 4, t - 8, n - 8),
    (e.fillStyle = `#151515`),
    (e.textBaseline = `middle`),
    (e.font = `700 ${Math.round(n * 0.5)}px ${i}`),
    RY(e, r.text, t / 2, n * 0.54, t - 20, `center`));
}
function BY(e, t, n, r, i) {
  ((e.fillStyle = `#f7f7f4`),
    e.fillRect(0, 0, t, n),
    (e.fillStyle = IY[r.line] ?? `#80C241`),
    e.fillRect(0, n * 0.86, t, n * 0.14),
    (e.fillStyle = `#121212`),
    (e.textBaseline = `alphabetic`),
    (e.textAlign = `center`),
    (e.font = `800 ${Math.round(n * 0.52)}px ${i}`),
    RY(e, r.kanji, t / 2, n * 0.58, t * 0.9, `center`),
    (e.font = `600 ${Math.round(n * 0.16)}px Helvetica, Arial, sans-serif`),
    RY(e, r.roman, t / 2, n * 0.79, t * 0.8, `center`),
    (e.textAlign = `left`));
}
