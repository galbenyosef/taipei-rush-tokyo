// tokyo/assets/tokyo-_rNKO_Y7 28 — connected
// Lines 11436-11441 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function to() {
  let e = navigator.getGamepads?.();
  if (!e) return null;
  for (let t of e) if (t && t.connected) return t;
  return null;
}
