// tokyo/assets/actors-qKVitB-C 22 — exp
// Lines 7079-7084 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Is(e, t, n, r, i) {
  if (!(i > 0)) return e;
  let a = (n - t) / i,
    o = Math.exp(-r * i);
  return n - (a / r + (t - e - a / r) * o);
}
