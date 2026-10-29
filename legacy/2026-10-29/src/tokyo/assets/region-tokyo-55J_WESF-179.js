// tokyo/assets/region-tokyo-55J_WESF 179 — col
// Lines 72678-72716 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function JE(e, t, n, r, i, a, o) {
  let s = e.sub(t, 0, n, a);
  (e.push().col(9604998, o).mat(0.95, 0, 0, 0),
    e.extrudeZ(
      [-r * 0.8, 0, r * 0.8, 0, r * 0.7, 0.32, -r * 0.75, 0.38],
      -r * 0.45,
      r * 0.45,
      !0,
      !0,
    ));
  let c = r * 0.16,
    l = (((t * 31 + n * 17) % 1) + 1) % 1;
  (e.col(8749690, o),
    e.coarse
      ? e.box(-r / 2, 0.3, -c, r / 2, 0.3 + i * 0.9, c)
      : e.extrudeZ(
          [
            -r / 2,
            0.3,
            r / 2,
            0.3,
            r * (0.42 + 0.1 * l),
            0.3 + i * 0.78,
            r * 0.12,
            0.3 + i,
            -r * 0.3,
            0.3 + i * (0.9 + 0.1 * l),
            -r * 0.48,
            0.3 + i * 0.62,
          ],
          -c,
          c,
          !0,
          !0,
        ),
    e.pop(),
    e.leave(s),
    e.solidRot(t, n, r * 0.8, r * 0.45, a, 0, 0.3 + i));
}
