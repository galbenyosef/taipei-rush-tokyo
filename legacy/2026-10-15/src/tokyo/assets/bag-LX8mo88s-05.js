// tokyo/assets/bag-LX8mo88s 05 — math
// Lines 2947-2993 of readable/tokyo/assets/bag-LX8mo88s.pretty.js (statement-aligned).
function la(e) {
  let t = Number.isFinite(e) ? Math.abs(Math.floor(e)) : 0,
    n = aa[t % aa.length],
    r = (Math.floor(t / aa.length) + t) % 2 == 1,
    i = n.ink,
    a =
      (n.dark
        ? fi(
            `<path d="${oa}"/><path d="${sa}"/><path d="${ca}"/><circle cx="51" cy="20" r="6"/>`,
          )
        : ``) +
      `<path d="${oa}" fill="${n.b}"/><path d="${ca}" fill="${n.b}"/><path d="${sa}" fill="${n.b}"/>` +
      (n.marks ?? ``) +
      `<path d="M20.4 16.6l.3-7.2 5.4 3.9zM43.6 16.6l-.3-7.2-5.4 3.9z" fill="${n.e}" ${Y}/><path d="M22 38c2.4 6.4 6 9.6 10 9.6s7.6-3.2 10-9.6c-3 1.8-6.4 2.8-10 2.8s-7-1-10-2.8z" fill="${n.bib}"/><circle cx="32" cy="45" r="4.4" fill="#f6c945"/><rect x="30.7" y="43.7" width="2.6" height="2.6" stroke-width="1.2"/><ellipse cx="24" cy="53" rx="5" ry="4" fill="${n.b}"/><path d="M22 49.2v1.6M26 49.2v1.6" stroke="${i}" stroke-width="1.1"/><circle cx="51" cy="20" r="6" fill="${n.b}"/><ellipse cx="51" cy="21.6" rx="2.6" ry="2.1" fill="#f6a0aa" ${Y}/>` +
      $(
        [
          [47.9, 17.6],
          [51, 16.3],
          [54.1, 17.6],
        ],
        1.1,
        `#f6a0aa`,
      ) +
      `<path d="M22.5 26q3-3.6 6 0M35.5 26q3-3.6 6 0" stroke="${i}" stroke-width="2"/><path d="M30.5 29.2h3L32 31z" fill="#f08a9a" stroke="${i}" stroke-width="1.1"/><path d="M29 32.4q1.5 1.5 3 0 1.5 1.5 3 0" stroke="${i}" stroke-width="1.3"/><path d="M13.5 27.5l6 1M13.5 32l6-.8M50.5 27.5l-6 1M50.5 32l-6-.8" stroke="${i}" stroke-width="1.1"/><ellipse cx="21.5" cy="31.5" rx="2.4" ry="1.4" fill="#ff7d8e" opacity=".6" ${Y}/><ellipse cx="42.5" cy="31.5" rx="2.4" ry="1.4" fill="#ff7d8e" opacity=".6" ${Y}/>`;
  return X(r ? `<g transform="matrix(-1 0 0 1 64 0)">${a}</g>` : a);
}
var ua = X(
    `<path d="M32 20c-3-8-14-11-15-5-.6 4 7 5.6 15 5zM32 20c3-8 14-11 15-5 .6 4-7 5.6-15 5z" fill="#e9edf3"/><rect x="12" y="28" width="40" height="28" rx="3" fill="#8d97ab"/><rect x="9" y="20" width="46" height="10" rx="3" fill="#a5afc2"/><path d="M28 20.5h8v35h-8z" fill="#e9edf3" stroke-width="1.6"/><path d="M28 30h8" stroke-width="1.6"/>` +
      Q(`M16 34v16`, 0.3),
  ),
  da;
function fa() {
  return da
    ? Promise.resolve()
    : e(
        () =>
          import(`./art-tokyo-DHp5jBJS.js`).then((e) => {
            da = e.TOKYO_ART;
          }),
        [],
      );
}
function pa(e) {
  for (let t of [ia, dt, di, Wn])
    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
  return da && Object.prototype.hasOwnProperty.call(da, e) ? da[e] : ua;
}
