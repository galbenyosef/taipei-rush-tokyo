// tokyo/assets/net-PtwKfaxg 14 — math
// Lines 7724-7729 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
function Or(e, t) {
  let n = t / Math.max(80, e);
  if (n <= 5) return 0;
  let r = Er(1500 / e, 0.35, 1.25);
  return 0.8 * (n * n - 25) * r;
}
