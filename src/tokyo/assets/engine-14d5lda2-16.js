// tokyo/assets/engine-14d5lda2 16 — location
// Lines 5110-5142 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
var uo =
    typeof location > `u`
      ? NaN
      : Number(new URLSearchParams(location.search).get(`near`)),
  fo = uo > 0.05 && uo < 3 ? uo : 0.3,
  po = (() => {
    if (typeof location > `u`) return !1;
    let e = new URLSearchParams(location.search),
      t = e.get(`gpubudget`);
    return (
      (e.has(`gpuacct`) && e.get(`gpuacct`) !== `0`) ||
      (t !== null && t !== `0` && t !== ``)
    );
  })(),
  mo = null,
  ho = null;
function go() {
  return po
    ? (ho ??= t(
        () =>
          Promise.resolve()
            .then(() => dc)
            .then(
              (e) => (mo = e),
              (e) => (
                console.warn(`[renderer] GPU accounting unavailable`, e),
                null
              ),
            ),
        void 0,
      ))
    : Promise.resolve(null);
}
