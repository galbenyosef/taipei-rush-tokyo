// tokyo/assets/region-tokyo-55J_WESF 97 — math
// Lines 43248-43262 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function ig(e, t, n, r, i) {
  let a = Math.max(2, Math.round(t / 64)),
    o = t / a;
  for (let t = 0; t < a; t++)
    $h(
      e,
      t * o + 2,
      n - 9,
      o - 4,
      9,
      i[Math.floor(r() * i.length)],
      void 0,
      `#fffbe8`,
    );
}
