// tokyo/assets/actors-bknSEpf2 48 — exp
// Lines 17065-17070 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Tp(e, t, n, r, i) {
  if (!(i > 0)) return e;
  let a = (n - t) / i,
    o = Math.exp(-r * i);
  return n - (a / r + (t - e - a / r) * o);
}
