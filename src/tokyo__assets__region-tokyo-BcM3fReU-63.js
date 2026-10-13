// tokyo__assets__region-tokyo-BcM3fReU 63 — math
// Lines 33047-33061 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function jy(e, t, n, r, i) {
  let a = Math.max(2, Math.round(t / 64)),
    o = t / a;
  for (let t = 0; t < a; t++)
    wy(
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
