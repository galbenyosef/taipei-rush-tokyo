// tokyo/assets/region-tokyo-A7LxHjud 421 — math
// Lines 151059-151158 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function NLe(e, t) {
  let n = e.statics,
    r = (e, n) => Mo(t, e, n),
    i = (e, t, i, a, o, s) => {
      let [c, l] = r(e, i),
        [u, d] = r(t, a);
      n.addBox(
        Math.min(c, u),
        Math.min(l, d),
        Math.max(c, u),
        Math.max(l, d),
        o,
        s,
        `wall`,
      );
    },
    a = (e, i, a, o, s, c) => {
      let [l, u] = r((e + i) / 2, (a + o) / 2),
        d = Math.abs(i - e) / 2,
        f = Math.abs(o - a) / 2,
        [p, m] = e < i ? [s, c] : [c, s];
      n.addFloor(l, u, f, d, p, m, t.axis === `x` ? -Math.PI / 2 : 0, `deck`);
    },
    o = Oo.half,
    s = Oo.parapet,
    c = Oo.lat,
    l = c - o,
    u = c + o,
    d = t.deckHalf - p4;
  (a(t.start, t.top, l + s, u - s, 0, t.deckY),
    a(t.top, t.gore, d, u - s, t.deckY, t.deckY));
  let f = 8 * t.u,
    p = (e, n, r, a) => {
      for (let o = e; (n - o) * t.u > 0.01; o += f) {
        let e = (n - o) * t.u > Math.abs(f) ? o + f : n,
          s = jo(t, o),
          c = jo(t, e),
          l = Math.min(s, c),
          u = Math.max(s, c);
        i(o, e, r, a, l < Oo.clear ? 0 : l - Oo.slab - 0.4, u + Oo.wall);
      }
    };
  (p(t.start, t.gore, u - s, u),
    p(t.start, t.top, l, l + s),
    i(
      t.gore - t.u * 0.5,
      t.gore + t.u * 0.1,
      t.deckHalf,
      u,
      t.deckY - 0.6,
      t.deckY + Oo.wall,
    ));
  for (let e of t.piers)
    i(e - 0.6, e + 0.6, c - 0.6, c + 0.6, 0, jo(t, e) - Oo.slab);
}
function PLe(e, t) {
  if (!t.length || e.nL <= e.nPlan) return 0;
  let n = Array.from(e.turnOut),
    r = Array.from(e.turnType),
    i = 0;
  for (let a of t)
    for (let t = e.nPlan; t < e.nL; t++) {
      if (!e.deadEnd[t]) continue;
      let o = e.links[t];
      if (
        Math.hypot(o.ex - a.x, o.ez - a.z) > 17 ||
        (a.x - o.ex) * o.dx + (a.z - o.ez) * o.dz < 0
      )
        continue;
      let s = -1,
        c = 1e9;
      for (let n = e.nPlan; n < e.nL; n++) {
        let r = e.links[n];
        if (
          n === t ||
          r.dx * o.dx + r.dz * o.dz > 0.5 ||
          r.dx * o.dx + r.dz * o.dz < -0.5 ||
          Math.hypot(r.sx - a.x, r.sz - a.z) > 17 ||
          (r.sx - a.x) * r.dx + (r.sz - a.z) * r.dz < 0
        )
          continue;
        let i = Math.hypot(r.sx - o.ex, r.sz - o.ez);
        i < c && ((c = i), (s = n));
      }
      s < 0 ||
        ((e.deadEnd[t] = 0),
        (e.thru[t] = 1),
        (e.turnStart[t] = n.length),
        (e.turnCount[t] = 1),
        n.push(s),
        r.push(ct),
        i++);
    }
  let a = e;
  return (
    (a.turnOut = Int32Array.from(n)),
    (a.turnType = Uint8Array.from(r)),
    i
  );
}
