// tokyo/assets/region-tokyo-d-ginza-B8PkMMHp 06 — math
// Lines 1513-1802 of readable/tokyo/assets/region-tokyo-d-ginza-B8PkMMHp.pretty.js (statement-aligned).
function X(e, t, n, r) {
  let i = Math.sin(n),
    a = -Math.cos(n),
    o = a,
    s = -i;
  return {
    px: e - (r / 2) * o,
    pz: t - (r / 2) * s,
    tx: o,
    tz: s,
    nx: i,
    nz: a,
    L: r,
  };
}
var Z = (e, t, n) => [e.px + e.tx * t + e.nx * n, e.pz + e.tz * t + e.nz * n];
function Q(e, t, n, r, i, a, o, s, c) {
  let [l, u] = Z(t, n, r),
    d = Math.abs(t.tx) * i + Math.abs(t.nx) * a,
    f = Math.abs(t.tz) * i + Math.abs(t.nz) * a;
  J(e, l - d, o, u - f, l + d, s, u + f, c);
}
function ot(e, t, n, r) {
  let i = e.sign,
    a = e.body,
    s = X(t.x, t.z, t.heading, t.w),
    c = t.depth;
  i.setTint(16777215).setInfo(0, 0, 0, 0);
  let l = 2.7,
    u = H(t.gaku, 2);
  if (t.kind === `alley`) {
    let e = Math.min(t.w - 0.3, 2.2);
    for (let r of [t.w / 2 - e / 2, t.w / 2 + e / 2])
      Q(i, s, r, -0.4, 0.11, 0.11, n, n + l, `vermilion`);
    (Q(i, s, t.w / 2, -0.4, e / 2 + 0.45, 0.16, n + l, n + l + 0.2, `black`),
      Q(
        i,
        s,
        t.w / 2,
        -0.4,
        e / 2 + 0.25,
        0.1,
        n + l - 0.55,
        n + l - 0.38,
        `vermilion`,
      ),
      i.setInfo(0, 0, 70, 0),
      q(
        i,
        { ...s, px: s.px + s.nx * -0.27, pz: s.pz + s.nz * -0.27 },
        0,
        t.w / 2 - 0.17,
        t.w / 2 + 0.17,
        n + l - 0.86,
        n + l - 0.02,
        u,
      ));
  } else
    (i.setInfo(0, 0, 90, 0),
      q(i, s, 0.05, t.w / 2 - 0.2, t.w / 2 + 0.2, n + 2.6, n + 3.6, u));
  i.setInfo(0, 0, 40, 0);
  for (let e = 0; e < t.banners; e++) {
    let r = -1.2 - e * 1.4;
    (q(
      i,
      X(...Z(s, 0.25, r), t.heading + Math.PI / 2, 0.45),
      0,
      0,
      0.45,
      n + 0.3,
      n + 2.4,
      H(`nobori`, 2),
    ),
      Q(i, s, 0.25, r, 0.02, 0.02, n, n + 2.5, `black`));
  }
  let d = t.w / 2,
    f = t.kind === `alley` ? -c + 1 : 0.45;
  if (t.kind === `alley`) {
    (Q(i, s, d, f, 0.7, 0.55, n, n + 0.6, `granite`),
      Q(i, s, d, f, 0.55, 0.42, n + 0.6, n + 1.7, `wood`),
      a.setTint(16777215),
      at(a, D.KAWARA, 1, o.NONE, 0, 0));
    let [e, c] = Z(s, d - 0.8, f + 0.65),
      [l, u] = Z(s, d + 0.8, f + 0.65),
      [p, m] = Z(s, d + 0.8, f),
      [h, g] = Z(s, d - 0.8, f),
      [_, v] = Z(s, d - 0.8, f - 0.65),
      [y, b] = Z(s, d + 0.8, f - 0.65),
      x = n + 1.7,
      S = n + 2.25;
    (a.quad4(
      e,
      x,
      c,
      l,
      x,
      u,
      p,
      S,
      m,
      h,
      S,
      g,
      s.nx * 0.7,
      0.7,
      s.nz * 0.7,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
    ),
      a.quad4(
        y,
        x,
        b,
        _,
        x,
        v,
        h,
        S,
        g,
        p,
        S,
        m,
        -s.nx * 0.7,
        0.7,
        -s.nz * 0.7,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
      ),
      Q(i, s, d, f + 0.8, 0.35, 0.2, n, n + 0.55, `wood`),
      Q(i, s, d, f + 0.62, 0.02, 0.02, n + 0.9, n + 1.9, `vermilion`),
      i.setInfo(0, 0, 120, 0));
    for (let e of [-0.95, 0.95])
      q(
        i,
        X(...Z(s, d + e, f + 0.3), t.heading, 0.3),
        0,
        0,
        0.3,
        n + 1.3,
        n + 1.7,
        H(`lantern`, 2),
      );
    r.push({
      x0: Math.min(e, l, _, y),
      z0: Math.min(c, u, v, b),
      x1: Math.max(e, l, _, y),
      z1: Math.max(c, u, v, b),
      h: n + 2.3,
    });
  } else {
    (t.pipe &&
      (i.setInfo(0, 0, 0, 0),
      Q(i, s, t.w + 0.25, 0.14, 0.11, 0.11, n, n + t.pipe, `steel`),
      i.setInfo(0, 0, 60, 0),
      Q(i, s, t.w + 0.25, 0.14, 0.13, 0.13, n + 2.2, n + 2.5, `vermilion`)),
      i.setInfo(0, 0, 45, 0),
      Q(i, s, d, 0.08, t.w / 2 - 0.2, 0.05, n, n + 2.4, `warm`),
      i.setInfo(0, 0, 0, 0),
      Q(i, s, d, f + 0.5, 0.4, 0.22, n, n + 0.6, `wood`),
      Q(i, s, d, f - 0.1, 0.65, 0.28, n + 0.9, n + 1, `wood`),
      Q(i, s, d, f - 0.15, 0.28, 0.2, n + 1, n + 1.55, `wood`),
      Q(i, s, d, f - 0.15, 0.36, 0.26, n + 1.55, n + 1.65, `black`),
      Q(i, s, d - 0.85, f - 0.1, 0.03, 0.03, n, n + 2.2, `vermilion`),
      Q(i, s, d + 0.85, f - 0.1, 0.03, 0.03, n, n + 2.2, `vermilion`),
      Q(i, s, d, f - 0.1, 0.95, 0.05, n + 2.2, n + 2.3, `vermilion`),
      i.setInfo(0, 0, 120, 0));
    for (let e of [-0.62, 0.62])
      q(
        i,
        X(...Z(s, d + e, f + 0.05), t.heading, 0.28),
        0,
        0,
        0.28,
        n + 1,
        n + 1.4,
        H(`lantern`, 2),
      );
  }
  if (t.roof) {
    let e = t.roof,
      n = X(e.x, e.z, t.heading, 2.4);
    (Q(i, n, 1.2, -1.2, 0.9, 0.7, e.y, e.y + 1.6, `wood`),
      Q(i, n, 1.2, 0.2, 0.12, 0.12, e.y, e.y + 2.2, `vermilion`),
      Q(i, n, 1.2, 0.2, 0.9, 0.12, e.y + 2.1, e.y + 2.3, `black`),
      a.setTint(16777215),
      at(a, D.KAWARA, 1, o.NONE, 0, 0));
    let [r, s] = Z(n, 0.1, -0.3),
      [c, l] = Z(n, 2.3, -0.3),
      [u, d] = Z(n, 2.3, -1.2),
      [f, p] = Z(n, 0.1, -1.2),
      [m, h] = Z(n, 0.1, -2.1),
      [g, _] = Z(n, 2.3, -2.1);
    (a.quad4(
      r,
      e.y + 1.6,
      s,
      c,
      e.y + 1.6,
      l,
      u,
      e.y + 2.3,
      d,
      f,
      e.y + 2.3,
      p,
      n.nx * 0.7,
      0.7,
      n.nz * 0.7,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
    ),
      a.quad4(
        g,
        e.y + 1.6,
        _,
        m,
        e.y + 1.6,
        h,
        f,
        e.y + 2.3,
        p,
        u,
        e.y + 2.3,
        d,
        -n.nx * 0.7,
        0.7,
        -n.nz * 0.7,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
      ));
  }
}
function st(e, t, n) {
  for (let r of w) ot(e[x(r.x - 2, r.z - 2, r.x + 2, r.z + 2)], r, t, n);
}
function ct(e, t) {
  for (let n of C) {
    let r = e.sign,
      i = X(n.x, n.z, n.heading, 0.5);
    (r.setTint(16777215).setInfo(0, 0, 0, 0),
      Q(r, i, 0.25, -0.25, 0.27, 0.27, t, t + 0.12, `black`),
      r.setInfo(0, (n.x * 7) & 255, 150, 0));
    let a = H(`clubs`, 3);
    for (let e = 0; e < 4; e++) {
      let o = n.heading + (e * Math.PI) / 2;
      q(
        r,
        X(
          ...Z(
            i,
            0.25 + Math.sin(o - n.heading) * 0.25,
            -0.25 + Math.cos(o - n.heading) * 0.25,
          ),
          o,
          0.5,
        ),
        0,
        0,
        0.5,
        t + 0.12,
        t + 1.75,
        a,
      );
    }
  }
}
