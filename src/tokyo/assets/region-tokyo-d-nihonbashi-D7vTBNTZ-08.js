// tokyo/assets/region-tokyo-d-nihonbashi-D7vTBNTZ 08 — setinfo
// Lines 3242-3508 of readable/tokyo/assets/region-tokyo-d-nihonbashi-D7vTBNTZ.pretty.js (statement-aligned).
function on(e, t, n, r, i, a, s, c, l = 6982260) {
  let u = e.sign,
    d = e.body,
    f = I(t, n, r, i);
  (u.setTint(16777215).setInfo(0, 0, 0, 0),
    H(u, f, i / 2, -a / 2, i / 2 + 0.2, a / 2 + 0.2, s, s + 0.5, `granite`),
    H(u, f, i / 2, -a / 2, i / 2, a / 2, s + 0.5, s + 2.4, `wood`),
    d.setTint(16777215),
    R(d, S.LATTICE_DOOR, 1, o.SHOP, 0, 80));
  let p = { ...f, px: f.px + f.nx * 0.01, pz: f.pz + f.nz * 0.01 };
  d.wall(
    p.px + p.tx * 0.3,
    p.pz + p.tz * 0.3,
    p.tx,
    p.tz,
    i - 0.6,
    s + 0.5,
    s + 2.2,
    0,
    1,
    0,
    1,
  );
  let m = 0.6,
    h = s + 2.4,
    g = s + 2.4 + a * 0.42,
    _ = (e, t) => L(f, e, t),
    [v, y] = _(-0.6, m),
    [b, x] = _(i + m, m),
    [C, w] = _(i + m, -a / 2),
    [ee, T] = _(-0.6, -a / 2),
    [te, E] = _(-0.6, -a - m),
    [D, ne] = _(i + m, -a - m);
  (d.setTint(l),
    R(d, S.TIN_ROOF, 1, o.NONE, 0, 0),
    d.quad4(
      v,
      h,
      y,
      b,
      h,
      x,
      C,
      g,
      w,
      ee,
      g,
      T,
      f.nx * 0.6,
      0.8,
      f.nz * 0.6,
      0,
      0,
      2,
      0,
      2,
      1,
      0,
      1,
    ),
    d.quad4(
      D,
      h,
      ne,
      te,
      h,
      E,
      ee,
      g,
      T,
      C,
      g,
      w,
      -f.nx * 0.6,
      0.8,
      -f.nz * 0.6,
      0,
      0,
      2,
      0,
      2,
      1,
      0,
      1,
    ),
    d.quad4(
      ee,
      g - 0.05,
      T,
      C,
      g - 0.05,
      w,
      b,
      h - 0.05,
      x,
      v,
      h - 0.05,
      y,
      -f.nx * 0.6,
      -0.8,
      -f.nz * 0.6,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
    ),
    H(u, f, i / 2, 0.45, 0.4, 0.22, s, s + 0.6, `wood`),
    H(u, f, i / 2, 0.2, 0.025, 0.025, s + 1, s + 2.3, `vermilion`),
    u.setInfo(0, 0, 120, 0));
  for (let e of [-0.5, i + 0.5]) {
    let t = I(..._(e, 0.6), r, 0.3);
    (H(u, t, 0.15, 0, 0.05, 0.05, s, s + 1.1, `granite`),
      B(u, t, 0, 0, 0.3, s + 1.1, s + 1.5, P(`lantern`, 2)));
  }
  let [O, k] = _(i / 2, -a / 2),
    A = Math.abs(f.tx) * (i / 2 + 0.2) + Math.abs(f.nx) * (a / 2 + 0.2),
    j = Math.abs(f.tz) * (i / 2 + 0.2) + Math.abs(f.nz) * (a / 2 + 0.2);
  c.push({ x0: O - A, z0: k - j, x1: O + A, z1: k + j, h: s + 3.4 });
}
function sn(e, t, n) {
  let r = It,
    i = e[U(r.x0, r.z0, r.x1, r.z1)],
    a = i.sign;
  (an(a, r.toriiX, r.toriiZ, Q, 3, 3.9, t, `gaku.fukutoku`, n),
    a.setTint(16777215).setInfo(0, 0, 0, 0),
    V(
      a,
      r.toriiX - 1.1,
      t - 0.1,
      r.hallZ + 2.4,
      r.toriiX + 1.1,
      t + 0.03,
      r.toriiZ - 0.4,
      `granite`,
    ),
    on(i, r.hallX, r.hallZ + 1.6, Q, 3.6, 3.4, t, n),
    a.setInfo(0, 0, 40, 0));
  for (let e = 0; e < 5; e++) {
    let n = r.toriiZ - 2 - e * 2.6,
      i = I(r.toriiX - 1.7, n, Q / 2, 0.45);
    (B(a, i, 0, 0, 0.45, t + 0.3, t + 2.4, P(`nobori`, 2)),
      B(a, Jt(i), 0, 0, 0.45, t + 0.3, t + 2.4, P(`nobori`, 2)),
      a.setInfo(0, 0, 0, 0),
      V(
        a,
        r.toriiX - 1.95,
        t,
        n - 0.02,
        r.toriiX - 1.91,
        t + 2.5,
        n + 0.02,
        `black`,
      ),
      a.setInfo(0, 0, 40, 0));
  }
  (a.setInfo(0, 0, 0, 0),
    V(
      a,
      r.toriiX + 2,
      t,
      r.z0 + 1,
      r.toriiX + 2.25,
      t + 0.4,
      r.z1 - 1.2,
      `granite`,
    ));
  for (let [e, n, r] of [
    [294.5, -270, 3.2],
    [297.5, -274, 3.8],
    [293.8, -277.5, 2.8],
    [297.8, -281, 3.4],
    [294.6, -285, 3],
    [298, -288, 2.6],
  ])
    hn(a, e, n, t, r, !0);
  V(a, 296.4, t + 0.42, -279.2, 297.2, t + 0.48, -277.2, `wood`);
  let o = Lt;
  a.setInfo(0, 0, 0, 0);
  for (let e = o.x0 + 4; e < o.x1 - 2; e += 5.5)
    V(a, e - 0.01, t + 4.1, o.z0, e + 0.01, t + 4.12, o.z1, `black`);
  a.setInfo(0, 0, 110, 0);
  for (let e = o.x0 + 4; e < o.x1 - 2; e += 5.5)
    for (let n of [o.z0 + 1.2, o.z1 - 1.2]) {
      let r = I(e, n, Q / 2, 0.36);
      (B(a, r, 0, 0, 0.36, t + 3.3, t + 4, P(`chochin`, 2)),
        B(a, Jt(r), 0, 0, 0.36, t + 3.3, t + 4, P(`chochin`, 2)));
    }
}
function cn(e, t, n) {
  let r = Rt,
    i = e[U(r.x0, r.z0, r.x1, r.z1)],
    a = (r.x0 + r.x1) / 2;
  (an(i.sign, a, r.z1 - 0.6, Q, 2.6, 3.2, t, `gaku.ebisu`, n),
    on(i, a, r.z0 + 4.4, Q, 3.2, 3.2, t, n, 8024168),
    i.sign.setTint(16777215).setInfo(0, 0, 40, 0));
  for (let e of [r.x0 + 0.6, r.x1 - 0.6]) {
    let n = I(e, r.z1 - 3, Q, 0.45);
    B(i.sign, n, 0, 0, 0.45, t + 0.3, t + 2.4, P(`nobori`, 2));
  }
}
function ln(e, t) {
  let n = e.sign,
    r = zt;
  for (let e of [-1, 1]) {
    let i = r.z + e * 4.85,
      a = e < 0 ? Q : 0;
    for (let o = r.x0 + 1.5; o + 3 < r.x1; o += 3.4) {
      if (e > 0 && o > 282 && o < 293) continue;
      let r = I(o + 3 / 2, i - (e < 0 ? -0.9 : 0.9) * 0, a, 3);
      n.setTint(16777215).setInfo(0, 0, 0, 0);
      for (let e of [0, 3])
        for (let i of [0.6, -0.9])
          H(n, r, e, i, 0.03, 0.03, t, t + 2.3, `steel`);
      (H(n, r, 3 / 2, -0.15, 3 / 2, 0.85, t + 2.3, t + 2.36, `white`),
        B(
          n,
          I(...L(r, 3 / 2, -0.88), a, 3),
          0,
          0,
          3,
          t + 0,
          t + 2.3,
          P(`kohaku`, 1),
        ),
        B(n, r, 0.62, 0, 3, t + 2, t + 2.3, P(`kohaku`, 1)),
        H(n, r, 3 / 2, 0.35, 3 / 2 - 0.1, 0.3, t, t + 0.85, `wood`));
      for (let e = 0; e < 4; e++)
        H(
          n,
          r,
          0.45 + e * 0.7,
          0.35,
          0.22,
          0.16,
          t + 0.85,
          t + 1,
          e % 2 ? `cream` : `white`,
        );
      (n.setInfo(0, 0, 90, 0),
        B(
          n,
          r,
          0.66,
          3 / 2 - 0.55,
          2.05,
          t + 1.2,
          t + 1.2 + (64 / 96) * 1.1,
          P(`bettara`, 2),
        ),
        n.setInfo(0, 0, 140, 0),
        B(
          n,
          I(...L(r, 0.3, 0.62), a, 0.3),
          0,
          0,
          0.3,
          t + 1.75,
          t + 2.25,
          P(`chochin`, 2),
        ));
    }
  }
}
