// tokyo/assets/tokyo-BZXVhKTn 28 — connected
// Lines 11121-11126 of readable/tokyo/assets/tokyo-BZXVhKTn.pretty.js (statement-aligned).
function Ga() {
  let e = navigator.getGamepads?.();
  if (!e) return null;
  for (let t of e) if (t && t.connected) return t;
  return null;
}
