// tokyo/assets/tokyo-CqLdAwml 27 — connected
// Lines 11555-11560 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function Wo() {
  let e = navigator.getGamepads?.();
  if (!e) return null;
  for (let t of e) if (t && t.connected) return t;
  return null;
}
