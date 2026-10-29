// tokyo/assets/actors-bknSEpf2 46 — dog
// Lines 16332-16346 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function op() {
  if (wt() === !1) return null;
  try {
    let e = new URLSearchParams(location.search).get(`dog`);
    if (e !== null) return Fo(e) ? e : null;
  } catch {}
  let e = On().dog;
  return Fo(e) ? e : null;
}
function sp(e) {
  try {
    let t = op();
    t && e && e.dogId !== t && e.setDog?.(t);
  } catch {}
}
