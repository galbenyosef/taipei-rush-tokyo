// tokyo/assets/region-tokyo-A7LxHjud 45 — path
// Lines 22677-23007 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Gie(e, t, n, r, i, a) {
  let o = cl(n, (r + i) / 2);
  if (o === Zs.None || o === Zs.Cut) return;
  let s = n.deck.at(r),
    c = n.deck.at(i),
    l = n.edge0.at(r),
    u = n.edge0.at(i),
    d = n.edge1.at(r),
    f = n.edge1.at(i),
    p =
      o === Zs.Girder
        ? Vc
        : o === Zs.Bank
          ? Math.max(Bc, Math.min(s, c) - 0.1)
          : Bc,
    m = a.uv(`conc`),
    h = a.white,
    g = a.uv(`brick`);
  (e.setMaterial(0.92, 0, 0, 0),
    Yc(e, Jc.conc, 0.86),
    rl(e, n, r, i, l + 0.3, d - 0.3, s, c, !0, h),
    Yc(e, o === Zs.Girder ? Jc.girderDark : Jc.concUnder),
    rl(e, n, r, i, l, d, s - p, c - p, !1, h));
  for (let t of [-1, 1]) {
    let a = t < 0 ? l : d,
      _ = t < 0 ? u : f;
    (o === Zs.Brick
      ? (Yc(e, Jc.brick),
        tl(
          e,
          n,
          r,
          i,
          a,
          _,
          s - p,
          s - 0.25,
          c - p,
          c - 0.25,
          t,
          g,
          8,
          0,
          (p - 0.25) / 4,
        ),
        Yc(e, [196, 188, 172]),
        el(
          e,
          n,
          r,
          i,
          a + t * 0.08,
          _ + t * 0.08,
          s - 0.25,
          s + 0.1,
          c - 0.25,
          c + 0.1,
          t,
          h,
        ),
        Yc(e, Jc.parapet, 0.9),
        tl(
          e,
          n,
          r,
          i,
          a,
          _,
          s + 0.1,
          s + Uc,
          c + 0.1,
          c + Uc,
          t,
          m,
          4,
          0.3,
          0.5625,
        ))
      : (Yc(e, Jc.parapet),
        tl(
          e,
          n,
          r,
          i,
          a,
          _,
          s - p,
          s + Uc,
          c - p,
          c + Uc,
          t,
          m,
          4,
          0.1,
          0.1 + (p + Uc) / 4,
        ),
        Yc(e, Jc.concDark, 0.9),
        el(
          e,
          n,
          r,
          i,
          a + t * 0.03,
          _ + t * 0.03,
          s - 0.05,
          s + 0.08,
          c - 0.05,
          c + 0.08,
          t,
          h,
        )),
      Yc(e, Jc.parapet, 0.97),
      rl(
        e,
        n,
        r,
        i,
        t < 0 ? a : a - 0.28,
        t < 0 ? a + 0.28 : a,
        s + Uc,
        c + Uc,
        !0,
        h,
      ),
      Yc(e, Jc.conc, 0.8),
      tl(
        e,
        n,
        r,
        i,
        a - t * 0.28,
        _ - t * 0.28,
        s,
        s + Uc,
        c,
        c + Uc,
        -t,
        m,
        4,
        0.5,
        0.7875,
      ));
  }
  for (let t of n.tracks)
    if (
      !(i < t.s0 || r > t.s1) &&
      t.s1 >= r &&
      t.s1 < i &&
      t.s1 < n.draw1 - 0.5 + 3
    ) {
      let r = t.y.at(t.s1) - qs + 0.38;
      (e.setMaterial(0.6, 0.3, 0, 0),
        e.setColor(R(200), R(40), R(36)),
        al(e, n, t.s1 + 1, t.off.at(t.s1), 1.3, r, r + 1.15, 0.35, a.white),
        e.setColor(R(240), R(240), R(236)),
        al(
          e,
          n,
          t.s1 + 0.62,
          t.off.at(t.s1),
          1.1,
          r + 0.75,
          r + 0.95,
          0.04,
          a.white,
        ));
    }
  i >= n.draw1 - 0.01 &&
    n.draw1 < n.path.len - 1 &&
    (Yc(e, Jc.parapet),
    e.setMaterial(0.9, 0, 0, 0),
    il(e, n, i, n.edge0.at(i), n.edge1.at(i), c - p, c + Uc + 0.3, 1, m));
}
function Kie(e, t, n, r, i, a, o = e, s = o) {
  let c = a.white,
    l = n.off.at(r),
    u = n.off.at(i),
    d = n.y.at(r) - qs,
    f = n.y.at(i) - qs,
    p = n.line === `SK`,
    m = p ? 1.25 : 1.45,
    h = p ? 0.36 : 0.38;
  (Yc(e, p ? Jc.slabTrack : Jc.ballast),
    e.setMaterial(1, 0, 0, 0),
    e.setColor(R(255), R(255), R(255)),
    nl(
      e,
      t,
      r,
      i,
      l - m * 0.8,
      u - m * 0.8,
      l + m * 0.8,
      u + m * 0.8,
      d + h,
      f + h,
      a.uv(p ? `slab` : `ballast`),
      4,
    ),
    Yc(e, p ? Jc.slabTrack : Jc.ballast),
    xl(
      e,
      t,
      r,
      i,
      l - m,
      u - m,
      l - m * 0.8,
      u - m * 0.8,
      d + 0.02,
      f + 0.02,
      d + h,
      f + h,
      c,
    ),
    xl(
      e,
      t,
      r,
      i,
      l + m * 0.8,
      u + m * 0.8,
      l + m,
      u + m,
      d + h,
      f + h,
      d + 0.02,
      f + 0.02,
      c,
    ));
  let g = p ? 0.7175 : 0.5335;
  for (let e of [-1, 1]) {
    let n = l + e * g,
      a = u + e * g;
    (Yc(o, Jc.rail),
      o.setMaterial(0.6, 0.6, 0, 0),
      Sl(o, t, r, i, n - 0.035, a - 0.035, d + h, d + qs, f + h, f + qs, -1, c),
      Sl(o, t, r, i, n + 0.035, a + 0.035, d + h, d + qs, f + h, f + qs, 1, c),
      Yc(o, Jc.railTop),
      o.setMaterial(0.3, 0.9, 0, 0),
      qie(
        o,
        t,
        r,
        i,
        n - 0.035,
        a - 0.035,
        n + 0.035,
        a + 0.035,
        d + qs,
        f + qs,
        c,
      ));
  }
  let _ = qs + 5.1;
  (s.setMaterial(0.5, 0.7, 0, 0),
    s.setColor(R(46), R(42), R(38)),
    Sl(
      s,
      t,
      r,
      i,
      l - 0.02,
      u - 0.02,
      d + _ - 0.04,
      d + _,
      f + _ - 0.04,
      f + _,
      -1,
      c,
    ),
    Sl(
      s,
      t,
      r,
      i,
      l + 0.02,
      u + 0.02,
      d + _ - 0.04,
      d + _,
      f + _ - 0.04,
      f + _,
      1,
      c,
    ),
    rl(
      s,
      t,
      r,
      i,
      Math.min(l, u) - 0.02,
      Math.min(l, u) + 0.02,
      d + _ - 0.04,
      f + _ - 0.04,
      !1,
      c,
    ));
}
function qie(e, t, n, r, i, a, o, s, c, l, u) {
  t.path.pos(n, i, B);
  let d = B.x,
    f = B.z;
  t.path.pos(n, o, B);
  let p = B.x,
    m = B.z;
  t.path.pos(r, a, B);
  let h = B.x,
    g = B.z;
  t.path.pos(r, s, B);
  let _ = B.x,
    v = B.z;
  e.quad(d, c, f, p, c, m, _, l, v, h, l, g, u.u0, u.v0, u.u1, u.v1);
}
function xl(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  t.path.pos(n, i, B);
  let p = B.x,
    m = B.z;
  t.path.pos(n, o, B);
  let h = B.x,
    g = B.z;
  t.path.pos(r, a, B);
  let _ = B.x,
    v = B.z;
  t.path.pos(r, s, B);
  let y = B.x,
    b = B.z;
  e.quad(p, c, m, h, u, g, y, d, b, _, l, v, f.u0, f.v0, f.u1, f.v1);
}
function Sl(e, t, n, r, i, a, o, s, c, l, u, d) {
  el(e, t, n, r, i, a, o, s, c, l, u, d);
}
