// tokyo/assets/engine-wUBYs8Z3 16 — location
// Lines 4989-5021 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
var Ua =
    typeof location > `u`
      ? NaN
      : Number(new URLSearchParams(location.search).get(`near`)),
  Wa = Ua > 0.05 && Ua < 3 ? Ua : 0.3,
  Ga = (() => {
    if (typeof location > `u`) return !1;
    let e = new URLSearchParams(location.search),
      t = e.get(`gpubudget`);
    return (
      (e.has(`gpuacct`) && e.get(`gpuacct`) !== `0`) ||
      (t !== null && t !== `0` && t !== ``)
    );
  })(),
  Ka = null,
  qa = null;
function Ja() {
  return Ga
    ? (qa ??= t(
        () =>
          Promise.resolve()
            .then(() => ds)
            .then(
              (e) => (Ka = e),
              (e) => (
                console.warn(`[renderer] GPU accounting unavailable`, e),
                null
              ),
            ),
        void 0,
      ))
    : Promise.resolve(null);
}
