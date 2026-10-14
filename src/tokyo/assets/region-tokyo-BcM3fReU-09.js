// tokyo/assets/region-tokyo-BcM3fReU 09 — category
// Lines 4698-4715 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
for (let e of Ra) {
  let t = za.get(e.category) ?? [];
  (t.push(e), za.set(e.category, t));
}
var Ba = (e) => za.get(e) ?? [],
  Va = (e, t) => e.weight * (t == null ? 1 : (e.districts?.[t] ?? 1));
function Ha(e, t) {
  let n = Ba(e),
    r = n.map((e) => [e, Va(e, t)]).filter(([, e]) => e > 0);
  return r.length ? r : n.map((e) => [e, 1]);
}
var Ua = (e, t, n) => n.weighted(Ha(e, t));
function Wa(e) {
  return Ra.find(
    (t) =>
      t.ja === e || t.id === e || t.jaFull === e || t.en === e || t.zh === e,
  );
}
