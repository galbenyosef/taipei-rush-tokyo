// tokyo/assets/region-tokyo-A7LxHjud 463 — math
// Lines 167421-167489 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function ABe(e) {
  let t = L4(`tokyo:ueno:park-stairs`, -168, -1198).points ?? [
      [-168, -1183.5],
      [-168, -1199],
      [-168, -1212.5],
    ],
    n = L4(`tokyo:ueno:pond-run`, -320, -1153.5).points ?? [
      [-185, -1179.5],
      [-207, -1169],
      [-227, -1169],
      [-227, -1153.5],
      [-423, -1153.5],
      [-423, -1062],
      [-422.5, -1052],
    ];
  return [
    e,
    { x: -165, z: -1224 },
    ...[...t].sort((e, t) => e[1] - t[1]).map(([e, t]) => ({ x: e, z: t })),
    ...n.map(([e, t]) => ({ x: e, z: t })),
  ];
}
function jBe(e, t, n) {
  let r = t.heading,
    i = Math.sin(r),
    a = -Math.cos(r),
    o = -a,
    s = i,
    c = t.body.x + o * n * 0.28 - i * 0.36,
    l = t.body.z + s * n * 0.28 - a * 0.36;
  ((e.x = c),
    (e.z = l),
    (e.heading = r),
    e.root.position.set(c, t.object.position.y + 0.24, l),
    (e.root.rotation.y = -r));
}
function z5(e, t, n) {
  let r = (t, n) => e.ctx.plan.surfaceAt(t, n) === `water`;
  return (
    r(t, n) && r(t + 2.5, n) && r(t - 2.5, n) && r(t, n + 2.5) && r(t, n - 2.5)
  );
}
function MBe(e, t, n, r, i) {
  if (z5(e, t, n)) return { x: t, z: n };
  for (let [a, o] of [
    [t, n],
    [r, i],
  ])
    for (let t = 2.5; t <= 8; t += 2.75)
      for (let n = 0; n < 8; n++) {
        let r = a + Math.cos((n * Math.PI) / 4) * t,
          i = o + Math.sin((n * Math.PI) / 4) * t;
        if (z5(e, r, i)) return { x: r, z: i };
      }
  return { x: r, z: i };
}
function NBe(e, t) {
  let n = [e];
  for (let e = t + 1; e < F5.length; e++) {
    let t = F5[e];
    if (t.z > -1110) {
      n.push(t);
      continue;
    }
    n.push(t);
    break;
  }
  return (n.push({ x: L5.x, z: L5.z + 10 }, L5), n);
}
