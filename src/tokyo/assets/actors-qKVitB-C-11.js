// tokyo/assets/actors-qKVitB-C 11 — add
// Lines 3601-3661 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function go(e, t, n, r) {
  let i = [t.eyeL, t.eyeR];
  if (n === `heart`) {
    let n = t.faceZ - 0.012,
      a = t.eyeY + 0.002,
      o = 0.025;
    for (let t of i) {
      let i = mo(new be(), o * 1.2);
      (i.holes.push(mo(new Fe(), o * 0.9)),
        e.add(
          new c(i, { depth: 0.005, bevelEnabled: !1, curveSegments: 8 }),
          G(t.x, a, n, 0, Math.PI, 0),
          r,
          Ra,
          Ia,
          0.3,
        ),
        e.add(
          new s(mo(new be(), o * 0.95), 8),
          G(t.x, a, n - 0.0025, 0, Math.PI, 0),
          Ja(r, 1052688, 0.55),
          Ra,
          Ia,
          0.05,
        ));
    }
    ho(e, t, a, n - 0.0025, o * 1.2, r, Ia, 0.004);
  } else {
    let n = t.faceZ - 0.009,
      a = t.eyeY + 0.001,
      o = 0.019,
      s = 1.4,
      c = 0.55;
    for (let t of i)
      (e.add(
        new M(o, 0.0019, 4, 28),
        G(t.x, a, n, 0, 0, 0, s, c, 1),
        12896460,
        Ra,
        La,
        0.3,
      ),
        e.add(
          new Pe(o, 24),
          G(t.x, a, n - 5e-4, 0, Math.PI, 0, s, c, 1),
          Ja(r, 723723, 0.35),
          Ra,
          Ia,
          0.05,
        ),
        e.add(
          new Pe(o, 24),
          G(t.x, a, n + 5e-4, 0, 0, 0, s, c, 1),
          1382428,
          Ra,
          Ia,
          0.05,
        ));
    ho(e, t, a, n, o * s, 12896460, La, 0.0025);
  }
}
