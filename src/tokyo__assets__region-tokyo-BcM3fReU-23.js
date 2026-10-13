// tokyo__assets__region-tokyo-BcM3fReU 23 — path
// Lines 15986-16330 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function* ru(e, t, n, r) {
  let i = t.atlas;
  kl = i.white;
  for (let a of t.m.corridors) {
    if (!Xl(a, n)) continue;
    Hl(a, n, 6, Kl);
    let o = Kl.slice();
    for (let n = 0; n < o.length; n += 2)
      (iu(e, t, a, o[n], o[n + 1], i), t.due() && (yield));
    Jl(a, n, 12, 0.02, ql);
    for (let n = 0; n < ql.length; n += 2) {
      let o = ql[n],
        s = ql[n + 1];
      if (zl(a, (o + s) / 2) !== Oc.None) {
        for (let t of a.tracks) {
          if (s < t.s0 || o > t.s1) continue;
          let n = Math.max(o, t.s0),
            c = Math.min(s, t.s1);
          (a.hood && t.line === `SK` && n > a.hood[0] + 1) ||
            au(r?.bed ?? e, a, t, n, c, i, r?.fine, r?.wire);
        }
        t.due() && (yield);
      }
    }
    for (let n = 0; n < o.length; n += 2)
      (lu(e, t, a, o[n], o[n + 1], i),
        bu(e, a, o[n], o[n + 1]),
        t.due() && (yield));
    for (let r of a.platforms)
      (a.path.pos(r.sc, 0, H),
        ml(n, H.x, H.z) && (yield* xu(e, t, a, r, i), Mu(e, t, a, r, i)));
    a.hood &&
      (a.path.pos((a.hood[0] + a.hood[1]) / 2, 0, H),
      ml(n, H.x, H.z) && tu(e, a, !0));
  }
  for (let r of t.entrances) ml(n, r.cx, r.cz) && Su(e, r, i);
}
function iu(e, t, n, r, i, a) {
  let o = zl(n, (r + i) / 2);
  if (o === Oc.None) return;
  let s = n.deck.at(r),
    c = n.deck.at(i),
    l = n.edge0.at(r),
    u = n.edge0.at(i),
    d = n.edge1.at(r),
    f = n.edge1.at(i),
    p = o === Oc.Girder ? gl : hl,
    m = a.uv(`conc`),
    h = a.white,
    g = a.uv(`brick`);
  (e.setMaterial(0.92, 0, 0, 0),
    El(e, Tl.conc, 0.86),
    Pl(e, n, r, i, l + 0.3, d - 0.3, s, c, !0, h),
    El(e, o === Oc.Girder ? Tl.girderDark : Tl.concUnder),
    Pl(e, n, r, i, l, d, s - p, c - p, !1, h));
  for (let t of [-1, 1]) {
    let a = t < 0 ? l : d,
      _ = t < 0 ? u : f;
    (o === Oc.Brick
      ? (El(e, Tl.brick),
        Ml(
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
        El(e, [196, 188, 172]),
        jl(
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
        El(e, Tl.parapet, 0.9),
        Ml(
          e,
          n,
          r,
          i,
          a,
          _,
          s + 0.1,
          s + vl,
          c + 0.1,
          c + vl,
          t,
          m,
          4,
          0.3,
          0.5625,
        ))
      : (El(e, Tl.parapet),
        Ml(
          e,
          n,
          r,
          i,
          a,
          _,
          s - p,
          s + vl,
          c - p,
          c + vl,
          t,
          m,
          4,
          0.1,
          0.1 + (p + vl) / 4,
        ),
        El(e, Tl.concDark, 0.9),
        jl(
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
      El(e, Tl.parapet, 0.97),
      Pl(
        e,
        n,
        r,
        i,
        t < 0 ? a : a - 0.28,
        t < 0 ? a + 0.28 : a,
        s + vl,
        c + vl,
        !0,
        h,
      ),
      El(e, Tl.conc, 0.8),
      Ml(
        e,
        n,
        r,
        i,
        a - t * 0.28,
        _ - t * 0.28,
        s,
        s + vl,
        c,
        c + vl,
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
      let r = t.y.at(t.s1) - Cc + 0.38;
      (e.setMaterial(0.6, 0.3, 0, 0),
        e.setColor(V(200), V(40), V(36)),
        Il(e, n, t.s1 + 1, t.off.at(t.s1), 1.3, r, r + 1.15, 0.35, a.white),
        e.setColor(V(240), V(240), V(236)),
        Il(
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
    (El(e, Tl.parapet),
    e.setMaterial(0.9, 0, 0, 0),
    Fl(e, n, i, n.edge0.at(i), n.edge1.at(i), c - p, c + vl + 0.3, 1, m));
}
function au(e, t, n, r, i, a, o = e, s = o) {
  let c = a.white,
    l = n.off.at(r),
    u = n.off.at(i),
    d = n.y.at(r) - Cc,
    f = n.y.at(i) - Cc,
    p = n.line === `SK`,
    m = p ? 1.25 : 1.45,
    h = p ? 0.36 : 0.38;
  (El(e, p ? Tl.slabTrack : Tl.ballast),
    e.setMaterial(1, 0, 0, 0),
    e.setColor(V(255), V(255), V(255)),
    Nl(
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
    El(e, p ? Tl.slabTrack : Tl.ballast),
    su(
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
    su(
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
    (El(o, Tl.rail),
      o.setMaterial(0.6, 0.6, 0, 0),
      cu(o, t, r, i, n - 0.035, a - 0.035, d + h, d + Cc, f + h, f + Cc, -1, c),
      cu(o, t, r, i, n + 0.035, a + 0.035, d + h, d + Cc, f + h, f + Cc, 1, c),
      El(o, Tl.railTop),
      o.setMaterial(0.3, 0.9, 0, 0),
      ou(
        o,
        t,
        r,
        i,
        n - 0.035,
        a - 0.035,
        n + 0.035,
        a + 0.035,
        d + Cc,
        f + Cc,
        c,
      ));
  }
  let _ = Cc + 5.1;
  (s.setMaterial(0.5, 0.7, 0, 0),
    s.setColor(V(46), V(42), V(38)),
    cu(
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
    cu(
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
    Pl(
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
function ou(e, t, n, r, i, a, o, s, c, l, u) {
  t.path.pos(n, i, H);
  let d = H.x,
    f = H.z;
  t.path.pos(n, o, H);
  let p = H.x,
    m = H.z;
  t.path.pos(r, a, H);
  let h = H.x,
    g = H.z;
  t.path.pos(r, s, H);
  let _ = H.x,
    v = H.z;
  e.quad(d, c, f, p, c, m, _, l, v, h, l, g, u.u0, u.v0, u.u1, u.v1);
}
