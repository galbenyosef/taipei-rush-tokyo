// tokyo/assets/actors-bknSEpf2 35 — tokyo/assets/actors-bknsepf2
// Lines 11472-11481 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Bu(e, t) {
  if (t <= e[0][0]) return e[0][1];
  for (let n = 1; n < e.length; n++)
    if (t <= e[n][0]) {
      let [r, i] = e[n - 1],
        [a, o] = e[n];
      return i + ((o - i) * (t - r)) / (a - r);
    }
  return e[e.length - 1][1];
}
