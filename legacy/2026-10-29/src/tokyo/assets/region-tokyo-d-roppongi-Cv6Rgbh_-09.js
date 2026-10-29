// tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_ 09 — need
// Lines 2647-2770 of readable/tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_.pretty.js (statement-aligned).
function ct() {
  st.clear();
  let e = [],
    t = ot.map((t) =>
      t.specs.map(([n, r, i, a, o, s, c]) => {
        let l =
            t.along === `z`
              ? { x0: t.span[0], x1: t.span[1], z0: n, z1: r }
              : { x0: n, x1: r, z0: t.span[0], z1: t.span[1] },
          u = {
            id: `${t.id}-${e.length}`,
            ...l,
            dir: t.dir,
            floors: a,
            kind: i,
            shop: o,
            name: s,
            ...c,
          };
        return (e.push(u), t.akasaka && st.add(u.id), u);
      }),
    ),
    n = (e) => Le(e),
    r = t.flat();
  for (let e of r) {
    let t = (t) => {
        let i = 0;
        for (let a of r) {
          if (a === e) continue;
          let r = Math.min(a.z1, e.z1) - Math.max(a.z0, e.z0),
            o = Math.min(a.x1, e.x1) - Math.max(a.x0, e.x0);
          ((t === `E` &&
            Math.abs(a.x0 - e.x1) < 0.5 &&
            r > (e.z1 - e.z0) * 0.9) ||
            (t === `W` &&
              Math.abs(a.x1 - e.x0) < 0.5 &&
              r > (e.z1 - e.z0) * 0.9) ||
            (t === `S` &&
              Math.abs(a.z0 - e.z1) < 0.5 &&
              o > (e.x1 - e.x0) * 0.9) ||
            (t === `N` &&
              Math.abs(a.z1 - e.z0) < 0.5 &&
              o > (e.x1 - e.x0) * 0.9)) &&
            (i = Math.max(i, n(a)));
        }
        return i;
      },
      [i, a, o] = {
        W: [`N`, `S`, `E`],
        E: [`S`, `N`, `W`],
        N: [`E`, `W`, `S`],
        S: [`W`, `E`, `N`],
      }[e.dir];
    ((e.coverL = t(i)), (e.coverR = t(a)), (e.coverB = t(o)));
  }
  return e;
}
var G = 0.15,
  lt = (e) => e >= 18 || e < 5,
  ut = [
    [B.z0, 996.75],
    [1009.25, B.z1],
  ];
function dt() {
  let e = [],
    t = 0;
  for (let [n, r] of ut)
    for (let i = n + 5; i < r - 3; i += 12)
      (e.push([t & 1 ? B.x1 - 0.35 : B.x0 + 0.35, i, t]), t++);
  return e;
}
function ft(e) {
  return (t, n, r, i, a) => {
    let [o, s] = ut[e];
    (te(t, n, r, i, a, `#4c4c50`, 0.45),
      t.save(),
      t.beginPath(),
      t.rect(n, r, i, a),
      t.clip());
    for (let [e, c] of dt()) {
      if (c < o || c > s) continue;
      let l = n + ((e - B.x0) / (B.x1 - B.x0)) * i,
        u = r + ((c - o) / (s - o)) * a,
        d = (4.2 / (B.x1 - B.x0)) * i,
        f = (4.2 / (s - o)) * a;
      (t.save(), t.translate(l, u), t.scale(1, f / d));
      let p = t.createRadialGradient(0, 0, 0, 0, 0, d);
      (p.addColorStop(0, `rgba(140,128,108,0.95)`),
        p.addColorStop(0.55, `rgba(110,104,96,0.45)`),
        p.addColorStop(1, `rgba(76,76,80,0)`),
        (t.globalAlpha = 1),
        (t.fillStyle = p),
        t.beginPath(),
        t.arc(0, 0, d, 0, Math.PI * 2),
        t.fill(),
        t.restore());
    }
    t.restore();
  };
}
function pt(e) {
  e.need(`plate`, 120, 150, we);
  for (let t of [0, 1, 2, 3]) e.need(`aboard:${t}`, 96, 140, Te(t));
  (e.need(`saka:0`, 64, 256, Ee(0)), e.need(`saka:1`, 64, 256, Ee(1)));
  for (let t of [0, 1, 2]) e.need(`laneflag:${t}`, 48, 150, ke(t));
  (e.need(`taxi`, 96, 96, Oe),
    e.need(`girder`, 320, 100, De),
    e.need(
      `embassy-plate`,
      192,
      48,
      Ne(`roppongi.embassy.notice`, `#e8e4da`, `#202020`),
    ),
    e.need(
      `keibi`,
      128,
      40,
      Ne(`roppongi.embassy.keibi`, `#1d2a6b`, `#ffffff`),
    ),
    e.need(`wall:stone`, 64, 64, Ce(`stone`, `#cfc8b8`)),
    e.need(`lanepave:0`, 64, 384, ft(0)),
    e.need(`lanepave:1`, 64, 448, ft(1)),
    e.need(`win:blind`, 160, 60, Se(`blind`, 1)));
}
