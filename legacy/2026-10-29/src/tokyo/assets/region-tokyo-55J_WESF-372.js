// tokyo/assets/region-tokyo-55J_WESF 372 — setmaterial
// Lines 135210-135551 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function iNe(e, t) {
  let n = Yo.half,
    r = zQ + Ro.coping;
  for (let i of Zo()) {
    let a = n$(i),
      o =
        Math.sign(
          a[0].rx * (i.axis === `x` ? 0 : i.side) +
            a[0].rz * (i.axis === `z` ? 0 : i.side),
        ) || 1,
      s = Math.sign(i.end - i.street);
    for (let c = 0; c + 1 < a.length; c++) {
      let l = a[c],
        u = a[c + 1];
      if (!BQ(t, (l.x + u.x) / 2, (l.z + u.z) / 2)) continue;
      let d = ((l.s + u.s) / 2 - i.grade) * s < 0;
      (e.setMaterial(0.88, 0, 0, 0),
        RQ(e, 70, 70, 74),
        KQ(e, l, u, -n, n, 0, 0, 1),
        e.setMaterial(0.6, 0, 0, 16),
        RQ(e, 226, 226, 220));
      for (let t of [-n + 0.35, n - 0.35])
        KQ(e, l, u, t - 0.07, t + 0.07, 0.02, 0.02, 1);
      if (
        (e.setMaterial(0.9, 0, 0, 0),
        d && ((l.s + u.s) / 2 - i.street) * s < i.walk)
      )
        continue;
      if (d) {
        RQ(e, 196, 194, 186);
        for (let t of [-1, 1]) {
          let r = t * n,
            i = t * (n + 0.45);
          (KQ(e, l, u, Math.min(r, i), Math.max(r, i), 0.85, 0.85, 1),
            qQ(e, l, u, r, l.y, l.y + 0.85, u.y, u.y + 0.85, -t),
            qQ(e, l, u, i, l.y, l.y + 0.85, u.y, u.y + 0.85, t));
        }
        continue;
      }
      (RQ(e, 150, 148, 140),
        qQ(e, l, u, o * n, l.y, r, u.y, r, -o),
        RQ(e, 176, 174, 166));
      let f = n + Yo.wall;
      (o > 0
        ? VQ(e, WQ(l, n, r), WQ(l, f, r), WQ(u, f, r), WQ(u, n, r), 0, 1, 0)
        : VQ(
            e,
            WQ(l, -f, r),
            WQ(l, -n, r),
            WQ(u, -n, r),
            WQ(u, -f, r),
            0,
            1,
            0,
          ),
        qQ(e, l, u, o * f, 0.09999999999999999, r, 0.09999999999999999, r, o),
        e.setMaterial(0.5, 0.4, 0, 0),
        RQ(e, 92, 104, 98),
        qQ(e, l, u, o * (n + Yo.wall / 2), r, r + 1.2, r, r + 1.2, 1),
        qQ(e, l, u, o * (n + Yo.wall / 2), r, r + 1.2, r, r + 1.2, -1));
    }
    let c = a[a.length - 1];
    if (BQ(t, c.x, c.z)) {
      (e.setMaterial(0.9, 0, 0, 0), RQ(e, 168, 166, 158));
      let t = -o * (n + 0.1),
        i = o * (n + Yo.wall);
      (VQ(
        e,
        WQ(c, t, c.y),
        WQ(c, i, c.y),
        WQ(c, i, r),
        WQ(c, t, r),
        -c.ux,
        0,
        -c.uz,
      ),
        e.setMaterial(0.6, 0, 0, 16),
        RQ(e, 236, 200, 60));
      let s = GQ(a[a.length - 2], c, 0.2);
      VQ(
        e,
        WQ(s, -n, s.y + 0.02),
        WQ(s, n, s.y + 0.02),
        WQ(c, n, c.y + 0.02),
        WQ(c, -n, c.y + 0.02),
        0,
        1,
        0,
      );
    }
  }
}
function aNe(e, t, n) {
  let r = Ro.half + qo,
    i = t.axis === `z`,
    a = i ? (t.minX + t.maxX) / 2 : (t.minZ + t.maxZ) / 2,
    o = (e, t, n) => (i ? [a + t, n, e] : [e, n, a + t]),
    s = +!i,
    c = +!!i;
  (e.setMaterial(0.9, 0, 0, 0),
    RQ(e, 164, 162, 154),
    VQ(
      e,
      o(n.a0, -Ro.half, -0.6),
      o(n.a1, -Ro.half, -0.6),
      o(n.a1, Ro.half, -0.6),
      o(n.a0, Ro.half, -0.6),
      0,
      -1,
      0,
    ),
    RQ(e, 176, 174, 166),
    VQ(
      e,
      o(n.a0, -r, -0.6),
      o(n.a0, r, -0.6),
      o(n.a0, r, zQ),
      o(n.a0, -r, zQ),
      -s,
      0,
      -c,
    ),
    VQ(
      e,
      o(n.a1, -r, -0.6),
      o(n.a1, r, -0.6),
      o(n.a1, r, zQ),
      o(n.a1, -r, zQ),
      s,
      0,
      c,
    ),
    RQ(e, 120, 128, 124),
    e.setMaterial(0.5, 0.4, 0, 0));
  for (let [t, i] of [
    [n.a0 + 0.12, -1],
    [n.a1 - 0.12, 1],
  ])
    (VQ(
      e,
      o(t, -r, zQ),
      o(t, r, zQ),
      o(t, r, 1.25),
      o(t, -r, 1.25),
      s * i,
      0,
      c * i,
    ),
      VQ(
        e,
        o(t, -r, zQ),
        o(t, r, zQ),
        o(t, r, 1.25),
        o(t, -r, 1.25),
        -s * i,
        0,
        -c * i,
      ));
}
function oNe(e, t, n, r, i) {
  let a = Ro.half,
    o = Ro.clear;
  (e.setMaterial(0.55, 0, 0.07, 16),
    RQ(e, 206, 200, 182),
    HQ(
      e,
      WQ(r, -a, r.y),
      WQ(i, -a, i.y),
      WQ(i, -a, i.y + 3.2),
      WQ(r, -a, r.y + 3.2),
      0,
      -1,
      0,
    ),
    HQ(
      e,
      WQ(i, a, i.y),
      WQ(r, a, r.y),
      WQ(r, a, r.y + 3.2),
      WQ(i, a, i.y + 3.2),
      0,
      -1,
      0,
    ),
    e.setMaterial(0.9, 0, 0.02, 16),
    RQ(e, 92, 94, 96),
    HQ(
      e,
      WQ(r, -a, r.y + 3.2),
      WQ(i, -a, i.y + 3.2),
      WQ(i, -a, i.y + o),
      WQ(r, -a, r.y + o),
      0,
      -1,
      0,
    ),
    HQ(
      e,
      WQ(i, a, i.y + 3.2),
      WQ(r, a, r.y + 3.2),
      WQ(r, a, r.y + o),
      WQ(i, a, i.y + o),
      0,
      -1,
      0,
    ),
    RQ(e, 66, 68, 70),
    HQ(
      e,
      WQ(r, a, r.y + o),
      WQ(r, -a, r.y + o),
      WQ(i, -a, i.y + o),
      WQ(i, a, i.y + o),
      0,
      -1,
      0,
    ),
    e.setMaterial(0.85, 0, 0.05, 16),
    RQ(e, 176, 174, 168),
    HQ(
      e,
      WQ(r, -a, r.y + 0.6),
      WQ(r, -a + 0.75, r.y + 0.6),
      WQ(i, -a + 0.75, i.y + 0.6),
      WQ(i, -a, i.y + 0.6),
      0,
      -1,
      0,
    ),
    HQ(
      e,
      WQ(i, a, i.y + 0.6),
      WQ(i, a - 0.75, i.y + 0.6),
      WQ(r, a - 0.75, r.y + 0.6),
      WQ(r, a, r.y + 0.6),
      0,
      -1,
      0,
    ),
    HQ(
      e,
      WQ(r, -a + 0.75, r.y),
      WQ(i, -a + 0.75, i.y),
      WQ(i, -a + 0.75, i.y + 0.6),
      WQ(r, -a + 0.75, r.y + 0.6),
      0,
      -1,
      0,
    ),
    HQ(
      e,
      WQ(i, a - 0.75, i.y),
      WQ(r, a - 0.75, r.y),
      WQ(r, a - 0.75, r.y + 0.6),
      WQ(i, a - 0.75, i.y + 0.6),
      0,
      -1,
      0,
    ));
  let s = t.s[n],
    c = t.s[n + 1];
  (e.setMaterial(0.3, 0, 1, 0), RQ(e, 255, 244, 214));
  for (let t = Math.ceil(s / 5) * 5; t < c; t += 5) {
    let n = (t - s) / (c - s),
      l = Math.min(1, (t + 1.6 - s) / (c - s)),
      u = GQ(r, i, n),
      d = GQ(r, i, l);
    for (let t of [-1, 1]) {
      let n = t * (a - 0.05),
        r = t * (a - 0.45),
        i = o - 0.35,
        s = o - 0.1;
      t > 0
        ? (HQ(
            e,
            WQ(u, n, u.y + i),
            WQ(u, r, u.y + i),
            WQ(d, r, d.y + i),
            WQ(d, n, d.y + i),
            0,
            -1,
            0,
          ),
          HQ(
            e,
            WQ(d, r, d.y + i),
            WQ(u, r, u.y + i),
            WQ(u, r, u.y + s),
            WQ(d, r, d.y + s),
            0,
            -1,
            0,
          ))
        : (HQ(
            e,
            WQ(d, n, d.y + i),
            WQ(d, r, d.y + i),
            WQ(u, r, u.y + i),
            WQ(u, n, u.y + i),
            0,
            -1,
            0,
          ),
          HQ(
            e,
            WQ(u, r, u.y + i),
            WQ(d, r, d.y + i),
            WQ(d, r, d.y + s),
            WQ(u, r, u.y + s),
            0,
            -1,
            0,
          ));
    }
  }
  (e.setMaterial(0.5, 0.5, 0.02, 16), RQ(e, 150, 152, 150));
  for (let t = Math.ceil(s / 150) * 150; t < c; t += 150) {
    let n = GQ(r, i, (t - s) / (c - s));
    for (let t of [-1, 1]) sNe(e, n, t * 7, n.y + o - 0.75, 0.5, 1.8, 0.45);
  }
  (e.setMaterial(0.4, 0, 0.9, 0), RQ(e, 70, 200, 110));
  for (let t = Math.ceil((s - 50) / 100) * 100 + 50; t < c; t += 100) {
    if (t < s) continue;
    let n = GQ(r, i, (t - s) / (c - s)),
      o = GQ(r, i, Math.max(0, (t - 0.6 - s) / (c - s))),
      l = GQ(r, i, Math.min(1, (t + 0.6 - s) / (c - s)));
    for (let t of [-1, 1]) {
      let r = t * (a - 0.02),
        [i, s] = t < 0 ? [o, l] : [l, o];
      HQ(
        e,
        WQ(i, r, n.y + 2.3),
        WQ(s, r, n.y + 2.3),
        WQ(s, r, n.y + 2.8),
        WQ(i, r, n.y + 2.8),
        0,
        -1,
        0,
      );
    }
  }
}
