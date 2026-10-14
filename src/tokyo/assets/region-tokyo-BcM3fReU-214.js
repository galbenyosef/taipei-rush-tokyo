// tokyo/assets/region-tokyo-BcM3fReU 214 — slice
// Lines 88737-88777 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function RJ(e, t) {
  return e === `dont` ? 0 : e === `walk` || t ? 1 : 2;
}
function zJ(e, t, n, r, i, a, o) {
  return e < kJ.vehZ
    ? BJ(e - kJ.vehX, t)
    : e < kJ.pedX
      ? BJ(e - kJ.vehZ, n)
      : e === kJ.pedX
        ? r === 0
        : e === kJ.pedX + 1
          ? r === 1
          : e === kJ.pedZ
            ? i === 0
            : e === kJ.pedZ + 1
              ? i === 1
              : e < kJ.waitZ
                ? e - kJ.waitX < a
                : e - kJ.waitZ < o;
}
function BJ(e, t) {
  return e === 0 ? t === 0 : e === 1 ? t === 1 : e === 2 ? t >= 2 : t === 3;
}
function VJ(e) {
  let t = new ce(1, 1);
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
var HJ = { low: 170, medium: 220, high: 260, ultra: 380 },
  UJ = 40 / 3.6,
  WJ = 1.5,
  GJ = { low: 150, medium: 330, high: 400, ultra: 520 },
  KJ = 16;
