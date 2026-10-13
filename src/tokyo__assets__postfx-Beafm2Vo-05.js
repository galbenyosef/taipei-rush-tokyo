// tokyo__assets__postfx-Beafm2Vo 05 — float64array
// Lines 938-952 of readable/tokyo__assets__postfx-Beafm2Vo.pretty.js (statement-aligned).
function je(e) {
  let t;
  if (e === 0) t = new Float64Array();
  else if (e === 1) t = new Float64Array([1]);
  else if (e > 1) {
    let n = new Float64Array(e),
      r = new Float64Array(e);
    for (let i = 1; i <= e; ++i) {
      for (let e = 0; e < i; ++e)
        r[e] = e === 0 || e === i - 1 ? 1 : n[e - 1] + n[e];
      ((t = r), (r = n), (n = t));
    }
  }
  return t;
}
