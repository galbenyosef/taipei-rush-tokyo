// tokyo/assets/region-tokyo-A7LxHjud 97 — math
// Lines 43321-43335 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function sg(e, t, n, r, i) {
  let a = Math.max(2, Math.round(t / 64)),
    o = t / a;
  for (let t = 0; t < a; t++)
    ng(
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
