// tokyo/assets/region-tokyo-55J_WESF 80 — facing
// Lines 36854-36866 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Op(e, t, n, r, i, a, o, s, c) {
  let l = {
    id: e,
    name: t,
    x: (n + i) / 2,
    z: (r + a) / 2,
    w: i - n,
    d: a - r,
    facing: s,
    kind: o,
  };
  return (c && (l.zone = c), l);
}
