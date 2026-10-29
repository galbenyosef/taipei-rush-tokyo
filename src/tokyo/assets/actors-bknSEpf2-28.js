// tokyo/assets/actors-bknSEpf2 28 — add
// Lines 9139-9199 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Hl(e, t, n, r) {
  let i = [t.eyeL, t.eyeR];
  if (n === `heart`) {
    let n = t.faceZ - 0.012,
      a = t.eyeY + 0.002,
      s = 0.025;
    for (let t of i) {
      let i = Bl(new pe(), s * 1.2);
      (i.holes.push(Bl(new o(), s * 0.9)),
        e.add(
          new F(i, { depth: 0.005, bevelEnabled: !1, curveSegments: 8 }),
          X(t.x, a, n, 0, Math.PI, 0),
          r,
          dl,
          ll,
          0.3,
        ),
        e.add(
          new S(Bl(new pe(), s * 0.95), 8),
          X(t.x, a, n - 0.0025, 0, Math.PI, 0),
          xl(r, 1052688, 0.55),
          dl,
          ll,
          0.05,
        ));
    }
    Vl(e, t, a, n - 0.0025, s * 1.2, r, ll, 0.004);
  } else {
    let n = t.faceZ - 0.009,
      a = t.eyeY + 0.001,
      o = 0.019,
      s = 1.4,
      c = 0.55;
    for (let t of i)
      (e.add(
        new m(o, 0.0019, 4, 28),
        X(t.x, a, n, 0, 0, 0, s, c, 1),
        12896460,
        dl,
        ul,
        0.3,
      ),
        e.add(
          new ae(o, 24),
          X(t.x, a, n - 5e-4, 0, Math.PI, 0, s, c, 1),
          xl(r, 723723, 0.35),
          dl,
          ll,
          0.05,
        ),
        e.add(
          new ae(o, 24),
          X(t.x, a, n + 5e-4, 0, 0, 0, s, c, 1),
          1382428,
          dl,
          ll,
          0.05,
        ));
    Vl(e, t, a, n, o * s, 12896460, ul, 0.0025);
  }
}
