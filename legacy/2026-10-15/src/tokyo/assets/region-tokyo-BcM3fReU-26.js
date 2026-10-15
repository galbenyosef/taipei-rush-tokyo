// tokyo/assets/region-tokyo-BcM3fReU 26 — setmaterial
// Lines 16812-17152 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function vu(e, t, n, r, i, a) {
  let o = a.white,
    s = n.deck.at(r),
    c = n.deck.at(i),
    l = s - gl - _l,
    u = c - gl - _l,
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
    (El(e, Tl.girder),
      jl(e, n, r, i, g + 0.2, _ + 0.2, l, s - gl, u, c - gl, 1, o),
      jl(e, n, r, i, g - 0.2, _ - 0.2, l, s - gl, u, c - gl, -1, o),
      El(e, Tl.girderDark),
      Pl(e, n, r, i, g - 0.32, g + 0.32, l, u, !1, o));
  }
  El(e, Tl.girder, 0.9);
  for (let t of [-1, 1])
    for (let a = Math.ceil(r / 1.6) * 1.6; a < i; a += 1.6) {
      let r =
          t < 0
            ? n.edge0.at(a) + 0.45 - 0.2 - 0.04
            : n.edge1.at(a) - 0.45 + 0.2 + 0.04,
        i = n.deck.at(a);
      Il(e, n, a, r, 0.04, i - gl - _l, i - gl, 0.05, o);
    }
  for (let o = 0; o < n.girders.length; o++) {
    let s = n.girders[o];
    for (let o of [s.s0, s.s1]) o >= r && o < i && yu(e, t.plan, n, o, a);
    let c = (s.s0 + s.s1) / 2;
    if (c >= r && c < i && !s.water) {
      let t = `plate:${n.id}:${o}`;
      if (a.has(t)) {
        (e.setMaterial(0.5, 0, 0, 0), e.setColor(V(255), V(255), V(255)));
        let r = a.uv(t),
          i = n.deck.at(c);
        for (let t of [-1, 1])
          Ll(
            e,
            n,
            c,
            t < 0
              ? n.edge0.at(c) + 0.45 - 0.2 - 0.09
              : n.edge1.at(c) - 0.45 + 0.2 + 0.09,
            t,
            2.2,
            i - gl - _l * 0.72,
            0.47,
            r,
          );
      }
    }
  }
}
function yu(e, t, n, r, i) {
  let a = n.deck.at(r),
    o = n.edge0.at(r) + 0.6,
    s = n.edge1.at(r) - 0.6,
    c = i.uv(`conc`);
  (e.setMaterial(0.9, 0, 0, 0),
    El(e, Tl.concDark, 1.05),
    Il(
      e,
      n,
      r,
      (o + s) / 2,
      (s - o) / 2,
      a - gl - _l - 1,
      a - gl - _l,
      0.9,
      c,
    ));
  let l = Math.max(2, Math.round((s - o) / 7) + 1);
  for (let i = 0; i < l; i++) {
    let u = o + 0.6 + ((s - o - 1.2) * i) / (l - 1),
      d = Al(n, r, u);
    Vl(t, d.x, d.z) &&
      !sl(d.x, d.z) &&
      Il(e, n, r, u, 0.55, Bl(t, d.x, d.z), a - gl - _l - 1, 0.7, c);
  }
}
function bu(e, t, n, r) {
  for (let i = Math.ceil(n / 30) * 30; i < r; i += 30) {
    t.hood && i > t.hood[0] - 4 && t.id;
    let n = t.deck.at(i),
      r = !!t.under && i > t.under[0] - 6 && i < t.under[1] + 6,
      a = r ? -4.15 : t.edge0.at(i) + 0.45,
      o = t.edge1.at(i) - 0.45,
      s = n + Cc + (r ? 5.6 : 6.3);
    (e.setMaterial(0.6, 0.5, 0, 0), El(e, Tl.mast));
    let c = [a, o];
    t.id === `jr-main` &&
      !r &&
      !t.platforms.some((e) => e.rideable && i > e.s0 - 4 && i < e.s1 + 4) &&
      c.push(-4.15);
    for (let r of c) Il(e, t, i, r, 0.16, n, s, 0.16);
    (El(e, Tl.mast, 0.9),
      Il(e, t, i, (a + o) / 2, (o - a) / 2, s - 0.45, s, 0.12));
    for (let n of t.tracks) {
      if (i < n.s0 || i > n.s1) continue;
      let o = n.off.at(i);
      if (r && o < a) {
        Il(e, t, i, o, 0.04, s - 0.6, wl, 0.04);
        continue;
      }
      (Il(e, t, i, o, 0.04, s - 1.2, s - 0.45, 0.04),
        Il(e, t, i, o, 0.3, s - 1.25, s - 1.15, 0.03));
    }
  }
}
function* xu(e, t, n, r, i) {
  let a = i.white,
    o = i.uv(`conc`),
    s = n.deck.at(r.sc),
    c = r.y;
  e.setMaterial(0.85, 0, 0, 0);
  for (let t = r.s0; t < r.s1 - 0.01; t += 8) {
    let l = Math.min(r.s1, t + 8);
    (e.setColor(V(255), V(255), V(252)),
      e.setMaterial(0.85, 0, 0.07, 1),
      Nl(
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
      El(e, Tl.platEdge),
      Pl(e, n, t, l, r.o0, r.o0 + 0.3, c, c, !0, a),
      Pl(e, n, t, l, r.o1 - 0.3, r.o1, c, c, !0, a),
      El(e, Tl.platform, 0.92),
      Pl(e, n, t, l, r.o0 + 0.3, r.o0 + 0.62, c, c, !0, a),
      Pl(e, n, t, l, r.o1 - 0.62, r.o1 - 0.3, c, c, !0, a),
      El(e, Tl.tactile),
      e.setMaterial(0.7, 0, 0, 0),
      Pl(e, n, t, l, r.o0 + 0.86, r.o0 + 1.16, c + 0.015, c + 0.015, !0, a),
      Pl(e, n, t, l, r.o1 - 1.16, r.o1 - 0.86, c + 0.015, c + 0.015, !0, a),
      e.setMaterial(0.85, 0, 0, 0),
      El(e, Tl.concDark),
      Ml(e, n, t, l, r.o0, r.o0, s, c, s, c, -1, o, 4, 0, (c - s) / 4),
      Ml(e, n, t, l, r.o1, r.o1, s, c, s, c, 1, o, 4, 0, (c - s) / 4));
  }
  (El(e, Tl.concDark),
    Fl(e, n, r.s0, r.o0, r.o1, s, c, -1, a),
    Fl(e, n, r.s1, r.o0, r.o1, s, c, 1, a),
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
          (El(e, Tl.psd),
          Il(e, n, (u + o) / 2, i, 0.1, c, c + 1.2, (o - u) / 2, a),
          El(e, Tl.psdTop),
          Il(e, n, (u + o) / 2, i, 0.11, c + 1.2, c + 1.27, (o - u) / 2, a),
          e.setMaterial(0.5, 0, 0, 0),
          e.setColor(V(128), V(194), V(65)),
          Il(
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
            (El(e, Tl.psdGate),
            Il(e, n, l[t], i, 0.06, c + 0.05, c + 1, 0.92, a),
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
          El(e, [60, 64, 68]),
          Il(e, n, l + s.dir * 0.03, o, 0.03, c, c + 1.5, 0.03, a),
          e.setMaterial(0.5, 0, 0, 0),
          e.setColor(V(255), V(255), V(255)),
          Rl(e, n, l, o, -s.dir, 0.46, c + 1.48, 0.46, i.uv(`stopmark`)));
      }
    t.due() && (yield);
  }
  let u = r.s0 + 14,
    d = r.s1 - 14,
    f = c + 3.4,
    p = (r.o0 + r.o1) / 2;
  (e.setMaterial(0.6, 0.4, 0, 0), El(e, Tl.canopyCol));
  for (let t = u + 4; t < d; t += 12) Il(e, n, t, p, 0.16, c, f + 0.3, 0.16, a);
  for (let t = u; t < d - 0.01; t += 8) {
    let i = Math.min(d, t + 8);
    (e.setMaterial(0.7, 0.2, 0, 0),
      El(e, Tl.canopy),
      su(
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
      su(
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
      El(e, Tl.canopyUnder),
      e.setMaterial(0.7, 0.2, 0.06, 1),
      Pl(e, n, t, i, r.o0 - 0.6, r.o1 + 0.6, f, f, !1, a),
      e.setMaterial(0.7, 0.2, 0, 0),
      jl(e, n, t, i, r.o0 - 0.6, r.o0 - 0.6, f, f + 0.12, f, f + 0.12, -1, a),
      jl(e, n, t, i, r.o1 + 0.6, r.o1 + 0.6, f, f + 0.12, f, f + 0.12, 1, a),
      e.setMaterial(0.5, 0, 0.42, 1),
      e.setColor(V(250), V(250), V(244)),
      Pl(e, n, t, i, p - 1.3, p - 1.1, f - 0.04, f - 0.04, !1, a),
      Pl(e, n, t, i, p + 1.1, p + 1.3, f - 0.04, f - 0.04, !1, a));
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
          El(e, Tl.canopyCol),
          Il(e, n, i - 0.8, t - o * 0.08, 0.05, c, c + 2.5, 0.05, a),
          Il(e, n, i + 0.8, t - o * 0.08, 0.05, c, c + 2.5, 0.05, a),
          El(e, [70, 74, 78]),
          Il(e, n, i, t - o * 0.08, 0.06, c + 1.82, c + 2.42, 0.96, a),
          e.setMaterial(0.4, 0, 0.24, 1),
          e.setColor(V(255), V(255), V(255)),
          Ll(e, n, i, t + o * 0, o, 1.8, c + 1.85, 0.534, s),
          Ll(e, n, i, t - o * 0.16, -o, 1.8, c + 1.85, 0.534, s === m ? h : m));
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
      El(e, Tl.canopyCol),
      Il(e, n, u, d, 0.03, c + 2.8, f, 0.03, a),
      e.setMaterial(0.4, 0, 0.4, 1),
      e.setColor(V(255), V(255), V(255)),
      Rl(e, n, u + s * 0.04, d, s, 2.1, c + 2.42, 0.4, i.uv(l)),
      Rl(e, n, u - s * 0.04, d, -s, 2.1, c + 2.42, 0.4, i.uv(l)));
  }
  if (r.line === `JY` || r.line === `JB`)
    for (let t of [-12, 8]) {
      let i = r.sc + t,
        o = i + 9,
        s = p - 1.3,
        l = p + 1.3;
      (e.setMaterial(1, 0, 0, 0),
        e.setColor(V(30), V(30), V(32)),
        Pl(e, n, i, o, s, l, c + 0.01, c + 0.01, !0, a),
        El(e, [96, 96, 94]));
      for (let t = 0; t < 3; t++)
        Pl(
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
        El(e, [178, 182, 186]),
        Il(e, n, (i + o) / 2, s - 0.05, 0.05, c, c + 1.05, (o - i) / 2, a),
        Il(e, n, (i + o) / 2, l + 0.05, 0.05, c, c + 1.05, (o - i) / 2, a),
        Il(e, n, i - 0.05, p, 1.35, c, c + 1.05, 0.05, a));
    }
}
