// tokyo/assets/world-Bo9wkXrT 03 — math
// Lines 980-1003 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
function at(e) {
  return e <= 0 ? 0 : e >= 1 ? 255 : (e * 255 + 0.5) | 0;
}
function ot(e, t) {
  let n = new e.constructor(t);
  return (n.set(e), n);
}
function st(e, t, n, r) {
  return [e, r, e, t, n, t, n, r];
}
function ct(e, t, n, r, i = 0) {
  let a = [];
  for (let o = 0; o < r; o++) {
    let s = i + (o / r) * Math.PI * 2;
    a.push(e + Math.cos(s) * n, t + Math.sin(s) * n);
  }
  return a;
}
function lt(e, t, n, r) {
  let i = [];
  for (let a = 0; a < e.length; a += 2)
    i.push(t + (e[a] - t) * r, n + (e[a + 1] - n) * r);
  return i;
}
