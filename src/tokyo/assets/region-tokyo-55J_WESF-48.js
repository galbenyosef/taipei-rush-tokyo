// tokyo/assets/region-tokyo-55J_WESF 48 — setmaterial
// Lines 23461-23807 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Kie(e, t, n, r, i, a) {
  let o = a.white,
    s = n.deck.at(r),
    c = n.deck.at(i),
    l = s - Vc - Hc,
    u = c - Vc - Hc,
    d = n.edge0.at(r),
    f = n.edge1.at(r),
    p = n.edge0.at(i),
    m = n.edge1.at(i),
    h = [],
    g = Math.max(2, Math.round((f - d) / 4.5));
  for (let e = 0; e <= g; e++) h.push(e / g);
  e.setMaterial(0.55, 0.45, 0, 0);
  for (let t = 0; t < h.length; t++) {
    let a = h[t],
      g = d + 0.45 + (f - d - 0.9) * a,
      _ = p + 0.45 + (m - p - 0.9) * a;
    (Yc(e, Jc.girder),
      el(e, n, r, i, g + 0.2, _ + 0.2, l, s - Vc, u, c - Vc, 1, o),
      el(e, n, r, i, g - 0.2, _ - 0.2, l, s - Vc, u, c - Vc, -1, o),
      Yc(e, Jc.girderDark),
      rl(e, n, r, i, g - 0.32, g + 0.32, l, u, !1, o));
  }
  Yc(e, Jc.girder, 0.9);
  for (let t of [-1, 1])
    for (let a = Math.ceil(r / 1.6) * 1.6; a < i; a += 1.6) {
      let r =
          t < 0
            ? n.edge0.at(a) + 0.45 - 0.2 - 0.04
            : n.edge1.at(a) - 0.45 + 0.2 + 0.04,
        i = n.deck.at(a);
      al(e, n, a, r, 0.04, i - Vc - Hc, i - Vc, 0.05, o);
    }
  for (let o = 0; o < n.girders.length; o++) {
    let s = n.girders[o];
    for (let o of [s.s0, s.s1]) o >= r && o < i && qie(e, t.plan, n, o, a);
    let c = (s.s0 + s.s1) / 2;
    if (c >= r && c < i && !s.water) {
      let t = `plate:${n.id}:${o}`;
      if (a.has(t)) {
        (e.setMaterial(0.5, 0, 0, 0), e.setColor(R(255), R(255), R(255)));
        let r = a.uv(t),
          i = n.deck.at(c);
        for (let t of [-1, 1])
          ol(
            e,
            n,
            c,
            t < 0
              ? n.edge0.at(c) + 0.45 - 0.2 - 0.09
              : n.edge1.at(c) - 0.45 + 0.2 + 0.09,
            t,
            2.2,
            i - Vc - Hc * 0.72,
            0.47,
            r,
          );
      }
    }
  }
}
function qie(e, t, n, r, i) {
  let a = n.deck.at(r),
    o = n.edge0.at(r) + 0.6,
    s = n.edge1.at(r) - 0.6,
    c = i.uv(`conc`);
  (e.setMaterial(0.9, 0, 0, 0),
    Yc(e, Jc.concDark, 1.05),
    al(
      e,
      n,
      r,
      (o + s) / 2,
      (s - o) / 2,
      a - Vc - Hc - 1,
      a - Vc - Hc,
      0.9,
      c,
    ));
  let l = Math.max(2, Math.round((s - o) / 7) + 1);
  for (let i = 0; i < l; i++) {
    let u = o + 0.6 + ((s - o - 1.2) * i) / (l - 1),
      d = $c(n, r, u);
    ul(t, d.x, d.z) &&
      !Fc(d.x, d.z) &&
      al(e, n, r, u, 0.55, ll(t, d.x, d.z), a - Vc - Hc - 1, 0.7, c);
  }
}
function Jie(e, t, n, r, i) {
  for (let a = Math.ceil(r / 30) * 30; a < i; a += 30) {
    n.hood && a > n.hood[0] - 4 && n.id;
    let r = n.deck.at(a);
    if (
      (n.id === `jr-main` && (n.path.pos(a, 0, B), Gs(B.x, B.z))) ||
      (cl(n, a) === Zs.Cut &&
        (n.path.pos(a, 0, B), t.groundHeight(B.x, B.z) > r + 4))
    )
      continue;
    let i = !!n.under && a > n.under[0] - 6 && a < n.under[1] + 6,
      o = i ? -4.15 : n.edge0.at(a) + 0.45,
      s = n.edge1.at(a) - 0.45,
      c = r + qs + (i ? 5.6 : 6.3);
    (e.setMaterial(0.6, 0.5, 0, 0), Yc(e, Jc.mast));
    let l = [o, s];
    n.id === `jr-main` &&
      !i &&
      !n.platforms.some((e) => e.rideable && a > e.s0 - 4 && a < e.s1 + 4) &&
      l.push(-4.15);
    for (let t of l) al(e, n, a, t, 0.16, r, c, 0.16);
    (Yc(e, Jc.mast, 0.9),
      al(e, n, a, (o + s) / 2, (s - o) / 2, c - 0.45, c, 0.12));
    for (let t of n.tracks) {
      if (a < t.s0 || a > t.s1) continue;
      let r = t.off.at(a);
      if (i && r < o) {
        al(e, n, a, r, 0.04, c - 0.6, Aie, 0.04);
        continue;
      }
      (al(e, n, a, r, 0.04, c - 1.2, c - 0.45, 0.04),
        al(e, n, a, r, 0.3, c - 1.25, c - 1.15, 0.03));
    }
  }
}
function* Yie(e, t, n, r, i) {
  let a = i.white,
    o = i.uv(`conc`),
    s = n.deck.at(r.sc),
    c = r.y;
  e.setMaterial(0.85, 0, 0, 0);
  for (let t = r.s0; t < r.s1 - 0.01; t += 8) {
    let l = Math.min(r.s1, t + 8);
    (e.setColor(R(255), R(255), R(252)),
      e.setMaterial(0.85, 0, 0.07, 1),
      nl(
        e,
        n,
        t,
        l,
        r.o0 + 0.62,
        r.o0 + 0.62,
        r.o1 - 0.62,
        r.o1 - 0.62,
        c,
        c,
        i.uv(`floor`),
        4,
      ),
      e.setMaterial(0.85, 0, 0, 0),
      Yc(e, Jc.platEdge),
      rl(e, n, t, l, r.o0, r.o0 + 0.3, c, c, !0, a),
      rl(e, n, t, l, r.o1 - 0.3, r.o1, c, c, !0, a),
      Yc(e, Jc.platform, 0.92),
      rl(e, n, t, l, r.o0 + 0.3, r.o0 + 0.62, c, c, !0, a),
      rl(e, n, t, l, r.o1 - 0.62, r.o1 - 0.3, c, c, !0, a),
      Yc(e, Jc.tactile),
      e.setMaterial(0.7, 0, 0, 0),
      rl(e, n, t, l, r.o0 + 0.86, r.o0 + 1.16, c + 0.015, c + 0.015, !0, a),
      rl(e, n, t, l, r.o1 - 1.16, r.o1 - 0.86, c + 0.015, c + 0.015, !0, a),
      e.setMaterial(0.85, 0, 0, 0),
      Yc(e, Jc.concDark),
      tl(e, n, t, l, r.o0, r.o0, s, c, s, c, -1, o, 4, 0, (c - s) / 4),
      tl(e, n, t, l, r.o1, r.o1, s, c, s, c, 1, o, 4, 0, (c - s) / 4));
  }
  (Yc(e, Jc.concDark),
    il(e, n, r.s0, r.o0, r.o1, s, c, -1, a),
    il(e, n, r.s1, r.o0, r.o1, s, c, 1, a),
    t.due() && (yield));
  let l = [];
  if (r.line === `JY`) {
    for (let [t, i] of [
      [0, r.o0 + 0.32],
      [1, r.o1 - 0.32],
    ]) {
      let o = r.tracks[t];
      if (!o) continue;
      l.length = 0;
      let s = o.dir > 0 ? r.s1 - 2 : r.s0 + 2;
      for (let e = 0; e < 6; e++) {
        let t = s - o.dir * (10 + 20 * e);
        for (let e of [-7.2, -2.4, 2.4, 7.2]) l.push(t + e);
      }
      l.sort((e, t) => e - t);
      let u = r.s0 + 1;
      e.setMaterial(0.5, 0.2, 0, 0);
      for (let t = 0; t <= l.length; t++) {
        let o = t < l.length ? l[t] - 0.95 : r.s1 - 1;
        (o - u > 0.3 &&
          (Yc(e, Jc.psd),
          al(e, n, (u + o) / 2, i, 0.1, c, c + 1.2, (o - u) / 2, a),
          Yc(e, Jc.psdTop),
          al(e, n, (u + o) / 2, i, 0.11, c + 1.2, c + 1.27, (o - u) / 2, a),
          e.setMaterial(0.5, 0, 0, 0),
          e.setColor(R(128), R(194), R(65)),
          al(
            e,
            n,
            (u + o) / 2,
            i,
            0.105,
            c + 0.95,
            c + 1.05,
            (o - u) / 2 - 0.05,
            a,
          ),
          e.setMaterial(0.5, 0.2, 0, 0)),
          t < l.length &&
            (Yc(e, Jc.psdGate),
            al(e, n, l[t], i, 0.06, c + 0.05, c + 1, 0.92, a),
            (u = l[t] + 0.95)));
      }
    }
    if (i.has(`stopmark`))
      for (let [t, o] of [
        [0, r.o0 + 0.62],
        [1, r.o1 - 0.62],
      ]) {
        let s = r.tracks[t];
        if (!s) continue;
        let l = s.dir > 0 ? r.s1 - 2 : r.s0 + 2;
        (e.setMaterial(0.5, 0.4, 0, 0),
          Yc(e, [60, 64, 68]),
          al(e, n, l + s.dir * 0.03, o, 0.03, c, c + 1.5, 0.03, a),
          e.setMaterial(0.5, 0, 0, 0),
          e.setColor(R(255), R(255), R(255)),
          sl(e, n, l, o, -s.dir, 0.46, c + 1.48, 0.46, i.uv(`stopmark`)));
      }
    t.due() && (yield);
  }
  let u = r.s0 + 14,
    d = r.s1 - 14,
    f = c + 3.4,
    p = (r.o0 + r.o1) / 2;
  (e.setMaterial(0.6, 0.4, 0, 0), Yc(e, Jc.canopyCol));
  for (let t = u + 4; t < d; t += 12) al(e, n, t, p, 0.16, c, f + 0.3, 0.16, a);
  for (let t = u; t < d - 0.01; t += 8) {
    let i = Math.min(d, t + 8);
    (e.setMaterial(0.7, 0.2, 0, 0),
      Yc(e, Jc.canopy),
      xl(
        e,
        n,
        t,
        i,
        p,
        p,
        r.o0 - 0.6,
        r.o0 - 0.6,
        f + 0.42,
        f + 0.42,
        f + 0.12,
        f + 0.12,
        a,
      ),
      xl(
        e,
        n,
        t,
        i,
        r.o1 + 0.6,
        r.o1 + 0.6,
        p,
        p,
        f + 0.12,
        f + 0.12,
        f + 0.42,
        f + 0.42,
        a,
      ),
      Yc(e, Jc.canopyUnder),
      e.setMaterial(0.7, 0.2, 0.06, 1),
      rl(e, n, t, i, r.o0 - 0.6, r.o1 + 0.6, f, f, !1, a),
      e.setMaterial(0.7, 0.2, 0, 0),
      el(e, n, t, i, r.o0 - 0.6, r.o0 - 0.6, f, f + 0.12, f, f + 0.12, -1, a),
      el(e, n, t, i, r.o1 + 0.6, r.o1 + 0.6, f, f + 0.12, f, f + 0.12, 1, a),
      e.setMaterial(0.5, 0, 0.42, 1),
      e.setColor(R(250), R(250), R(244)),
      rl(e, n, t, i, p - 1.3, p - 1.1, f - 0.04, f - 0.04, !1, a),
      rl(e, n, t, i, p + 1.1, p + 1.3, f - 0.04, f - 0.04, !1, a));
  }
  t.due() && (yield);
  let m = i.uv(`jrboard:${r.id}:a`),
    h = i.uv(`jrboard:${r.id}:b`);
  if (i.has(`jrboard:${r.id}:a`))
    for (let t of [-34, 30]) {
      let i = r.sc + t;
      for (let [t, o, s] of [
        [r.o0 + 1.5, -1, m],
        [r.o1 - 1.5, 1, h],
      ])
        (e.setMaterial(0.6, 0.3, 0, 0),
          Yc(e, Jc.canopyCol),
          al(e, n, i - 0.8, t - o * 0.08, 0.05, c, c + 2.5, 0.05, a),
          al(e, n, i + 0.8, t - o * 0.08, 0.05, c, c + 2.5, 0.05, a),
          Yc(e, [70, 74, 78]),
          al(e, n, i, t - o * 0.08, 0.06, c + 1.82, c + 2.42, 0.96, a),
          e.setMaterial(0.4, 0, 0.24, 1),
          e.setColor(R(255), R(255), R(255)),
          ol(e, n, i, t + o * 0, o, 1.8, c + 1.85, 0.534, s),
          ol(e, n, i, t - o * 0.16, -o, 1.8, c + 1.85, 0.534, s === m ? h : m));
    }
  for (let [t, o, s] of [
    [0, -10, -1],
    [1, 10, 1],
  ]) {
    let l = `jrdir:${r.id}:${t}`;
    if (!i.has(l)) continue;
    let u = r.sc + o,
      d = t === 0 ? r.o0 + 1.7 : r.o1 - 1.7;
    (e.setMaterial(0.5, 0.3, 0, 0),
      Yc(e, Jc.canopyCol),
      al(e, n, u, d, 0.03, c + 2.8, f, 0.03, a),
      e.setMaterial(0.4, 0, 0.4, 1),
      e.setColor(R(255), R(255), R(255)),
      sl(e, n, u + s * 0.04, d, s, 2.1, c + 2.42, 0.4, i.uv(l)),
      sl(e, n, u - s * 0.04, d, -s, 2.1, c + 2.42, 0.4, i.uv(l)));
  }
  if ((r.line === `JY` || r.line === `JB`) && cl(n, r.sc) !== Zs.Cut)
    for (let t of [-12, 8]) {
      let i = r.sc + t,
        o = i + 9,
        s = p - 1.3,
        l = p + 1.3;
      (e.setMaterial(1, 0, 0, 0),
        e.setColor(R(30), R(30), R(32)),
        rl(e, n, i, o, s, l, c + 0.01, c + 0.01, !0, a),
        Yc(e, [96, 96, 94]));
      for (let t = 0; t < 3; t++)
        rl(
          e,
          n,
          o - 0.3 * (t + 1) - 0.02,
          o - 0.3 * t - 0.02,
          s,
          l,
          c + 0.012,
          c + 0.012,
          !0,
          a,
        );
      (e.setMaterial(0.5, 0.6, 0, 0),
        Yc(e, [178, 182, 186]),
        al(e, n, (i + o) / 2, s - 0.05, 0.05, c, c + 1.05, (o - i) / 2, a),
        al(e, n, (i + o) / 2, l + 0.05, 0.05, c, c + 1.05, (o - i) / 2, a),
        al(e, n, i - 0.05, p, 1.35, c, c + 1.05, 0.05, a));
    }
}
