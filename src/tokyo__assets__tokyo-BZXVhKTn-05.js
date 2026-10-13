// tokyo__assets__tokyo-BZXVhKTn 05 — istexture
// Lines 2490-2514 of readable/tokyo__assets__tokyo-BZXVhKTn.pretty.js (statement-aligned).
function nn(e, t) {
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
function rn(e, t, n) {
  try {
    return e.plan.locationLabel?.(t, n) ?? null;
  } catch {
    return null;
  }
}
