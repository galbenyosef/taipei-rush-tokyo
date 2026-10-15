// tokyo/assets/region-tokyo-55J_WESF 10 — category
// Lines 4741-4758 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
for (let e of oi) {
  let t = si.get(e.category) ?? [];
  (t.push(e), si.set(e.category, t));
}
var ci = (e) => si.get(e) ?? [],
  gne = (e, t) => e.weight * (t == null ? 1 : (e.districts?.[t] ?? 1));
function li(e, t) {
  let n = ci(e),
    r = n.map((e) => [e, gne(e, t)]).filter(([, e]) => e > 0);
  return r.length ? r : n.map((e) => [e, 1]);
}
var _ne = (e, t, n) => n.weighted(li(e, t));
function ui(e) {
  return oi.find(
    (t) =>
      t.ja === e || t.id === e || t.jaFull === e || t.en === e || t.zh === e,
  );
}
