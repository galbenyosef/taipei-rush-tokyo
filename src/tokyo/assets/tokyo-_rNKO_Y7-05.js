// tokyo/assets/tokyo-_rNKO_Y7 05 — istexture
// Lines 2695-2719 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
function pn(e, t) {
  let n = [];
  for (let t in e) {
    let r = e[t];
    r && r.isTexture && n.push(r);
  }
  for (let r of [e.uniforms, t])
    if (r)
      for (let e in r) {
        let t = r[e]?.value;
        if (t) {
          if (t.isTexture) n.includes(t) || n.push(t);
          else if (Array.isArray(t))
            for (let e of t) e && e.isTexture && !n.includes(e) && n.push(e);
        }
      }
  return n;
}
function mn(e, t, n) {
  try {
    return e.plan.locationLabel?.(t, n) ?? null;
  } catch {
    return null;
  }
}
