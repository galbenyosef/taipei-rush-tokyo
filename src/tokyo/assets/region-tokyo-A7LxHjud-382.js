// tokyo/assets/region-tokyo-A7LxHjud 382 — slice
// Lines 139319-139359 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Z$(e, t) {
  return e === `dont` ? 0 : e === `walk` || t ? 1 : 2;
}
function rPe(e, t, n, r, i, a, o) {
  return e < K$.vehZ
    ? Q$(e - K$.vehX, t)
    : e < K$.pedX
      ? Q$(e - K$.vehZ, n)
      : e === K$.pedX
        ? r === 0
        : e === K$.pedX + 1
          ? r === 1
          : e === K$.pedZ
            ? i === 0
            : e === K$.pedZ + 1
              ? i === 1
              : e < K$.waitZ
                ? e - K$.waitX < a
                : e - K$.waitZ < o;
}
function Q$(e, t) {
  return e === 0 ? t === 0 : e === 1 ? t === 1 : e === 2 ? t >= 2 : t === 3;
}
function $$(e) {
  let t = new je(1, 1);
  return (
    (t.pos = e.pos.slice(0, e.n * 3)),
    (t.nor = e.nor.slice(0, e.n * 3)),
    (t.uv = e.uv.slice(0, e.n * 2)),
    (t.ca = e.ca.slice(0, e.n * 8)),
    (t.idx = e.idx.slice(0, e.ni)),
    (t.n = e.n),
    (t.ni = e.ni),
    t
  );
}
var iPe = { low: 170, medium: 220, high: 260, ultra: 380 },
  aPe = 40 / 3.6,
  oPe = 1.5,
  sPe = { low: 150, medium: 330, high: 400, ultra: 520 },
  cPe = 16;
