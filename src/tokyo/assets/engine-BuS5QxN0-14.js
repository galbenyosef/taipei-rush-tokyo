// tokyo/assets/engine-BuS5QxN0 14 — promise
// Lines 4745-4761 of readable/tokyo/assets/engine-BuS5QxN0.pretty.js (statement-aligned).
function Ca() {
  return ba
    ? (Sa ??= t(
        () =>
          Promise.resolve()
            .then(() => Bo)
            .then(
              (e) => (xa = e),
              (e) => (
                console.warn(`[renderer] GPU accounting unavailable`, e),
                null
              ),
            ),
        void 0,
      ))
    : Promise.resolve(null);
}
