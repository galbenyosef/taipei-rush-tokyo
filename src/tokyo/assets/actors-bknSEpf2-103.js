// tokyo/assets/actors-bknSEpf2 103 — color
// Lines 45176-45308 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function nT(e) {
  let t = new Uw(),
    n = e ? e.frame : 16756736,
    r = e ? e.trim : 15987695,
    i = 1842206,
    a = 9211020,
    o = (e, t = 0) => ({ part: 13, slot: 7, color: e, shade: t });
  for (let [e, n] of [
    [14, -0.72],
    [15, 0.32],
  ]) {
    let r = new m(0.305, 0.024, 3, 14);
    (r.rotateY(Math.PI / 2),
      r.translate(0, 0.33, n),
      t.add(r, { part: e, slot: 7, color: i, shade: 0 }));
    let o = new m(0.278, 0.009, 3, 12);
    (o.rotateY(Math.PI / 2),
      o.translate(0, 0.33, n),
      t.add(o, { part: e, slot: 7, color: 12105912, shade: 0 }));
    for (let r = 0; r < 2; r++)
      Ww(
        t,
        [0, 0.33, n],
        [0.006, 0.54, 0.008],
        { part: e, slot: 7, color: 10132122, shade: 0 },
        [(r / 2) * Math.PI + 0.4, 0, 0],
      );
    Kw(t, [-0.035, 0.33, n], [0.035, 0.33, n], 0.03, 0.03, 5, {
      part: e,
      slot: 7,
      color: a,
      shade: 0,
    });
  }
  (Kw(t, [0.05, 0.36, -0.2], [0.062, 0.36, -0.2], 0.085, 0.085, 10, {
    part: 16,
    slot: 7,
    color: 6974058,
    shade: 0,
  }),
    Ww(t, [0.075, 0.44, -0.2], [0.016, 0.18, 0.03], {
      part: 16,
      slot: 7,
      color: 5921370,
      shade: 0,
    }),
    Ww(t, [-0.075, 0.36 - 0.08, -0.2], [0.016, 0.18, 0.03], {
      part: 16,
      slot: 7,
      color: 5921370,
      shade: 0,
    }),
    Ww(t, [0.12, 0.52, -0.2], [0.09, 0.022, 0.05], {
      part: 16,
      slot: 7,
      color: i,
      shade: 0,
    }),
    Ww(t, [-0.12, 0.36 - 0.16, -0.2], [0.09, 0.022, 0.05], {
      part: 16,
      slot: 7,
      color: i,
      shade: 0,
    }));
  let s = (e, n, r, i) => Kw(t, e, n, r, r, 5, o(i, 0.1), !0);
  (s([0, 0.33, 0.32], [0, 0.36, -0.2], 0.02, n),
    s([0, 0.36, -0.2], [0, 0.93, -0.6], 0.036, n),
    s([0, 0.36, -0.2], [0, 0.84, -0.03], 0.03, n),
    s([0, 0.84, -0.03], [0, 0.33, 0.32], 0.017, n),
    s([0, 0.33, -0.72], [0, 0.99, -0.63], 0.024, r),
    s([0, 0.84, -0.03], [0, 0.88, 0], 0.014, a),
    Ww(t, [0.07, 0.35, 0.06], [0.012, 0.09, 0.56], o(r, 0.1), [-0.05, 0, 0]),
    Ww(t, [0, 0.66, 0.26], [0.08, 0.02, 0.44], o(r), [-0.3, 0, 0]),
    Ww(t, [0, 0.64, -0.7], [0.08, 0.02, 0.34], o(r), [0.32, 0, 0]),
    Gw(
      t,
      [0, 0.895, 0.02],
      [0.075, 0.03, 0.125],
      7,
      3,
      o(i),
      0,
      Math.PI * 2,
      0,
      Math.PI / 2,
    ),
    Ww(t, [0, 0.875, 0.03], [0.13, 0.03, 0.2], o(2763306)),
    s([0, 0.99, -0.63], [0, 1.03, -0.64], 0.018, a),
    s([-0.18, 1.03, -0.64], [0.18, 1.03, -0.64], 0.013, a));
  for (let e of [-1, 1])
    (s([e * 0.18, 1.03, -0.64], [e * 0.27, 1.03, -0.53], 0.013, a),
      Kw(
        t,
        [e * 0.265, 1.03, -0.54],
        [e * 0.3, 1.03, -0.49],
        0.019,
        0.019,
        5,
        o(i),
      ));
  if (
    (Ww(t, [0, 0.9, -0.86], [0.34, 0.2, 0.26], o(e ? e.basket : r, 0.25)),
    Ww(t, [0, 1, -0.86], [0.3, 0.01, 0.22], o(3815994)),
    e
      ? e.plate !== null && Ww(t, [0, 0.92, -1], [0.3, 0.12, 0.012], o(e.plate))
      : Ww(t, [0, 0.92, -1], [0.3, 0.12, 0.012], o(n)),
    e?.extra)
  )
    for (let n of e.extra)
      Ww(t, [n[0], n[1], n[2]], [n[3], n[4], n[5]], o(n[6]));
  Ww(t, [0, 0.7, 0.5], [0.05, 0.03, 0.02], {
    part: 13,
    slot: 7,
    color: 13639712,
    shade: 0,
    glow: 0.8,
  });
  let c = t.build();
  return ((c.boundingSphere.radius = 1.6), c);
}
function rT() {
  let e = document.createElement(`canvas`);
  e.width = e.height = 64;
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
  (n.addColorStop(0, `rgba(0,0,0,1)`),
    n.addColorStop(0.45, `rgba(0,0,0,0.75)`),
    n.addColorStop(1, `rgba(0,0,0,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 64, 64));
  let r = new ke(e);
  return ((r.needsUpdate = !0), r);
}
