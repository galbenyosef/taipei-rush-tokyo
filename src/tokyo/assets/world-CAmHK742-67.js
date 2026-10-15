// tokyo/assets/world-CAmHK742 67 — math
// Lines 22082-22234 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function nh(e, t) {
  let n = e.vertexCount;
  ((e.emitZOverride = -1),
    rh(e),
    e.transformSince(n, new De().makeTranslation(t.x, t.y, t.z)),
    (e.emitZOverride = null),
    e.noEmit());
}
function rh(e) {
  for (let t of [-1, 1]) {
    let n = t * 1.7;
    for (let t = 0; t < 56; t++) {
      let r = (t / 56) * Math.PI * 2,
        i = ((t + 1) / 56) * Math.PI * 2;
      (e.setColor(0.95, 0.95, 0.95).setEmit(2.4, 4),
        e.beam(
          Math.cos(r) * 37,
          Math.sin(r) * 37,
          n,
          Math.cos(i) * 37,
          Math.sin(i) * 37,
          n,
          0.6,
          0.6,
        ),
        e.beam(
          Math.cos(r) * 34,
          Math.sin(r) * 34,
          n,
          Math.cos(i) * 34,
          Math.sin(i) * 34,
          n,
          0.35,
          0.35,
        ),
        t % 2 == 0 &&
          (e.setColor(0.9, 0.9, 0.9).setEmit(1.2, 4),
          e.beam(
            0,
            0,
            n * 1.8,
            Math.cos(r) * 34,
            Math.sin(r) * 34,
            n,
            0.25,
            0.25,
          )));
    }
  }
  e.setColor(0.8, 0.8, 0.8).noEmit();
  for (let t = 0; t < 56; t += 1) {
    let n = (t / 56) * Math.PI * 2;
    e.beam(
      Math.cos(n) * 37,
      Math.sin(n) * 37,
      -1.7,
      Math.cos(n) * 37,
      Math.sin(n) * 37,
      1.7,
      0.2,
      0.2,
    );
  }
  let t = [
    [0.85, 0.15, 0.2],
    [0.95, 0.75, 0.15],
    [0.2, 0.55, 0.85],
    [0.3, 0.7, 0.35],
  ];
  for (let n = 0; n < 28; n++) {
    let r = (n / 28) * Math.PI * 2,
      i = Math.cos(r) * 38.6,
      a = Math.sin(r) * 38.6,
      o = t[n % 4];
    (e.setColor(o[0], o[1], o[2]).setEmit(0.4, 0),
      e.boxMinMax(i - 1.1, a - 1.3, -1.1, i + 1.1, a + 1.1, 1.1));
  }
  (e.noEmit().setColor(0.7, 0.7, 0.7), e.beam(0, 0, -4, 0, 0, 4, 2.2, 2.2));
}
function ih(e, t) {
  let n = 0;
  for (let r = -2600; r < 2400; r += 22)
    for (let i = -2600; i < 2600; i += 22) {
      let a = t.kind(i, r);
      if (a === `city` || a === `water`) continue;
      let o = t.outside(i, r);
      if (o < 60) continue;
      let s = t.height(i, r);
      if (s < 25 || s > 420) continue;
      let c = kp(Math.round(i), Math.round(r)),
        l = Mp(i / 520 + 3.7, r / 520 - 1.3, 3),
        u = Math.abs(l - 0.5) < 0.012 || Math.abs(l - 0.62) < 0.009,
        d = Mp(i / 160 - 9.1, r / 160 + 4.4, 2) > 0.74;
      if (!(u && c < 0.3) && !(d && c < 0.16)) continue;
      let f = (kp(Math.round(i) + 7, Math.round(r)) - 0.5) * 22 * 0.8,
        p = (kp(Math.round(i), Math.round(r) + 7) - 0.5) * 22 * 0.8,
        m = i + f,
        h = r + p,
        g = t.height(m, h),
        _ = c < 0.4,
        v = 1.6 + (o > 900 ? 1.2 : 0);
      (e.setColor(_ ? 1 : 0.85, _ ? 0.66 : 0.92, _ ? 0.32 : 1).setEmit(7, 0),
        e.boxMinMax(
          m - v / 2,
          g + 1.2,
          h - v / 2,
          m + v / 2,
          g + 1.2 + v,
          h + v / 2,
        ),
        n++);
    }
  e.noEmit();
  let r = [
      [-200, -1650],
      [700, -1600],
      [-1e3, -1500],
      [1150, 620],
      [350, 900],
      [1010, 360],
    ],
    i = 0;
  for (let [n, a] of r) {
    let r = n,
      o = a,
      s = t.height(n, a);
    for (let e = 0; e < 24; e++) {
      let i = (e / 24) * Math.PI * 2;
      for (let e of [40, 90, 150]) {
        let c = n + Math.cos(i) * e,
          l = a + Math.sin(i) * e,
          u = t.height(c, l);
        u > s && ((s = u), (r = c), (o = l));
      }
    }
    let c = n === 1010 ? 0 : 38;
    c > 0 &&
      (e.setColor(0.75, 0.72, 0.7),
      e.frustum(r, s - 1, o, 5, 5, 0.8, 0.8, c),
      e.setColor(1, 0.1, 0.06).setEmit(12, 2, ++i * 17),
      e.boxMinMax(r - 1.1, s + c - 1, o - 1.1, r + 1.1, s + c + 1.2, o + 1.1),
      e.boxMinMax(
        r - 0.9,
        s + c * 0.5,
        o - 0.9,
        r + 0.9,
        s + c * 0.5 + 1.8,
        o + 0.9,
      ),
      e.noEmit());
  }
  return n;
}
