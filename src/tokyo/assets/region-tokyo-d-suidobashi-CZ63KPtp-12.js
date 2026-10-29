// tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp 12 — axis
// Lines 3599-3639 of readable/tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp.pretty.js (statement-aligned).
function Tt(e, t) {
  let n = (e, t) =>
      t === `N`
        ? { at: e.z0, lo: e.x0, hi: e.x1, axis: `z`, sgn: -1 }
        : t === `S`
          ? { at: e.z1, lo: e.x0, hi: e.x1, axis: `z`, sgn: 1 }
          : t === `W`
            ? { at: e.x0, lo: e.z0, hi: e.z1, axis: `x`, sgn: -1 }
            : { at: e.x1, lo: e.z0, hi: e.z1, axis: `x`, sgn: 1 },
    r = { N: `S`, S: `N`, E: `W`, W: `E` },
    i = { N: `W`, S: `E`, E: `N`, W: `S` };
  for (let a of e)
    for (let o of [`N`, `E`, `S`, `W`]) {
      if (o === a.dir || o === a.corner) continue;
      let s = n(a, o),
        c = [];
      for (let i of e) {
        if (i === a) continue;
        let e = n(i, r[o]);
        if (e.axis !== s.axis || Math.abs(e.at - s.at) > 0.6) continue;
        let l = Math.max(s.lo, e.lo),
          u = Math.min(s.hi, e.hi);
        u - l > 0.05 && c.push([l, u, t(i)]);
      }
      if (!c.length) continue;
      c.sort((e, t) => e[0] - t[0]);
      let l = s.lo,
        u = 1 / 0;
      for (let [e, t, n] of c) {
        if (e > l + 0.35) break;
        ((l = Math.max(l, t)), (u = Math.min(u, n)));
      }
      let d = l >= s.hi - 0.35 ? u : 0;
      o === r[a.dir]
        ? (a.coverB = d)
        : o === i[a.dir]
          ? (a.coverR = d)
          : (a.coverL = d);
    }
  return e;
}
