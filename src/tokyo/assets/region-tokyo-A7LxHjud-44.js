// tokyo/assets/region-tokyo-A7LxHjud 44 — math
// Lines 22476-22676 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Vie(e, t, n, r, i) {
  let a = cl(n, (r + i) / 2);
  if (a === Zs.None || a === Zs.Cut) return;
  let o = n.deck.at(r),
    s = n.deck.at(i),
    c = n.edge0.at(r),
    l = n.edge0.at(i),
    u = n.edge1.at(r),
    d = n.edge1.at(i),
    f =
      a === Zs.Girder
        ? 2.1
        : a === Zs.Bank
          ? Math.max(Bc, Math.min(o, s) - 0.1)
          : Bc;
  (e.setMaterial(0.9, 0, 0, 0),
    Yc(e, Jc.conc, 0.92),
    rl(e, n, r, i, c + 0.3, u - 0.3, o, s, !0),
    Yc(e, a === Zs.Girder ? Jc.girderDark : Jc.concUnder),
    rl(e, n, r, i, c, u, o - f, s - f, !1));
  for (let t of [-1, 1]) {
    let p = t < 0 ? c : u,
      m = t < 0 ? l : d;
    (a === Zs.Girder
      ? (Yc(e, Jc.girder),
        el(e, n, r, i, p, m, o - f, o - Vc, s - f, s - Vc, t),
        Yc(e, Jc.parapet),
        el(e, n, r, i, p, m, o - Vc, o + Uc, s - Vc, s + Uc, t))
      : a === Zs.Brick
        ? (Yc(e, [146, 70, 48]),
          el(e, n, r, i, p, m, o - f, o + Uc, s - f, s + Uc, t))
        : (Yc(e, Jc.parapet),
          el(e, n, r, i, p, m, o - f, o + Uc, s - f, s + Uc, t)),
      Yc(e, Jc.parapet, 0.95),
      rl(
        e,
        n,
        r,
        i,
        t < 0 ? p : p - 0.3,
        t < 0 ? p + 0.3 : p,
        o + Uc,
        s + Uc,
        !0,
      ),
      Yc(e, Jc.conc, 0.85),
      el(e, n, r, i, p - t * 0.3, m - t * 0.3, o, o + Uc, s, s + Uc, -t));
  }
  let p = t.plan;
  if (a === Zs.Brick)
    for (let t of [-1, 1])
      for (let a = Math.ceil(r / 8) * 8 - 8; a < i; a += 8) {
        let c = Math.max(r, a),
          l = Math.min(i, a + 8);
        if (l - c < 0.2) continue;
        let u = t < 0 ? n.edge0.at(c) : n.edge1.at(c);
        (Yc(e, [140, 66, 44]), el(e, n, c, l, u, u, 0, o - f, 0, s - f, t));
        let d = Math.max(c, a + 1.6),
          p = Math.min(l, a + 8);
        p - d > 0.2 &&
          (Yc(e, [40, 34, 30]),
          el(e, n, d, p, u + t * 0.05, u + t * 0.05, 0, 5.6, 0, 5.6, t));
      }
  else if (a === Zs.Upper) {
    Yc(e, Jc.concDark);
    for (let t = Math.ceil(r / 12) * 12; t < i; t += 12) Cl(e, p, n, t, null);
  } else if (a === Zs.Frame) {
    Yc(e, Jc.concDark);
    for (let t = Math.ceil(r / Wc) * Wc; t < i; t += Wc) {
      let r = n.deck.at(t);
      for (let i of [n.edge0.at(t) + 1.6, n.edge1.at(t) - 1.6]) {
        let a = $c(n, t, i);
        ul(p, a.x, a.z) &&
          !Fc(a.x, a.z) &&
          al(e, n, t, i, 0.5, ll(p, a.x, a.z), r - Bc, 0.5);
      }
    }
  }
  if (a === Zs.Girder)
    for (let t of n.girders)
      for (let a of [t.s0, t.s1]) a < r || a >= i || Hie(e, p, n, a);
}
function Hie(e, t, n, r) {
  let i = n.deck.at(r),
    a = n.edge0.at(r) + 0.8,
    o = n.edge1.at(r) - 0.8;
  Yc(e, Jc.concDark);
  for (let s = a; s < o - 0.1; s += 3) {
    let a = Math.min(o, s + 3),
      c = $c(n, r, (s + a) / 2);
    ul(t, c.x, c.z) &&
      !Fc(c.x, c.z) &&
      al(e, n, r, (s + a) / 2, (a - s) / 2, 0, i - Vc - Hc, 0.8);
  }
}
function Uie(e, t, n) {
  let r = t.deck.at(n.sc);
  (e.setMaterial(0.9, 0, 0, 0),
    Yc(e, Jc.platform),
    rl(e, t, n.s0, n.s1, n.o0, n.o1, n.y, n.y, !0),
    Yc(e, Jc.concDark),
    el(e, t, n.s0, n.s1, n.o0, n.o0, r, n.y, r, n.y, -1),
    el(e, t, n.s0, n.s1, n.o1, n.o1, r, n.y, r, n.y, 1));
  let i = n.s0 + 14,
    a = n.s1 - 14,
    o = n.y + 3.5;
  (Yc(e, Jc.canopy),
    rl(e, t, i, a, n.o0 - 0.5, n.o1 + 0.5, o + 0.2, o + 0.2, !0),
    Yc(e, Jc.canopyUnder),
    rl(e, t, i, a, n.o0 - 0.5, n.o1 + 0.5, o, o, !1),
    el(e, t, i, a, n.o0 - 0.5, n.o0 - 0.5, o, o + 0.2, o, o + 0.2, -1),
    el(e, t, i, a, n.o1 + 0.5, n.o1 + 0.5, o, o + 0.2, o, o + 0.2, 1));
}
function yl(e, t, n) {
  if (!t.hood) return;
  let [r, i] = t.hood,
    a = t.deck.at(r),
    o = 6.25,
    s = t.edge1.at(r) - 0.05,
    c = a + 6.2;
  (e.setMaterial(0.9, 0, 0, 0),
    Yc(e, Jc.hood),
    el(e, t, r, i, s, s, a, c, a, c, 1),
    el(e, t, r, i, o, o, a, c, a, c, -1),
    rl(e, t, r, i, o, s, c, c, !0),
    Yc(e, Jc.hood, 0.9),
    il(e, t, r, o, s, c - 1.4, c, -1),
    il(e, t, r, o, 6.85, a, c - 1.4, -1),
    il(e, t, r, s - 0.6, s, a, c - 1.4, -1),
    Yc(e, [16, 16, 18]),
    il(e, t, r + 1.5, 6.85, s - 0.6, a, c - 1.4, -1),
    n &&
      (Yc(e, Jc.concDark),
      rl(e, t, r, r + 1.5, 6.85, s - 0.6, c - 1.4, c - 1.4, !1),
      el(e, t, r, r + 1.5, 6.85, 6.85, a, c - 1.4, a, c - 1.4, 1),
      el(e, t, r, r + 1.5, s - 0.6, s - 0.6, a, c - 1.4, a, c - 1.4, -1)),
    Yc(e, Jc.hood, 0.85),
    il(e, t, i, o, s, a, c, 1));
}
function Wie(e, t) {
  if (t.kind !== `metro`) return;
  (e.setMaterial(0.8, 0.2, 0, 0), Yc(e, [70, 78, 86]));
  let n = Math.sin(t.heading),
    r = -Math.cos(t.heading),
    i = Math.cos(t.heading),
    a = Math.sin(t.heading),
    o = (e, r) => t.cx + i * e + n * r,
    s = (e, n) => t.cz + a * e + r * n,
    c = 2.6;
  e.quad(
    o(-t.hw, -t.hl),
    c,
    s(-t.hw, -t.hl),
    o(t.hw, -t.hl),
    c,
    s(t.hw, -t.hl),
    o(t.hw, t.hl),
    c,
    s(t.hw, t.hl),
    o(-t.hw, t.hl),
    c,
    s(-t.hw, t.hl),
  );
}
function* bl(e, t, n, r) {
  let i = t.atlas;
  Qc = i.white;
  for (let a of t.m.corridors) {
    if (!_l(a, n)) continue;
    dl(a, n, 6, hl);
    let o = hl.slice();
    for (let n = 0; n < o.length; n += 2)
      (Gie(e, t, a, o[n], o[n + 1], i), t.due() && (yield));
    zie(a, n, 12, 0.02, gl);
    for (let n = 0; n < gl.length; n += 2) {
      let o = gl[n],
        s = gl[n + 1];
      if (cl(a, (o + s) / 2) !== Zs.None) {
        for (let t of a.tracks) {
          if (s < t.s0 || o > t.s1) continue;
          let n = Math.max(o, t.s0),
            c = Math.min(s, t.s1);
          (a.hood && t.line === `SK` && n > a.hood[0] + 1) ||
            Kie(r?.bed ?? e, a, t, n, c, i, r?.fine, r?.wire);
        }
        t.due() && (yield);
      }
    }
    for (let n = 0; n < o.length; n += 2)
      (Jie(e, t, a, o[n], o[n + 1], i),
        nae(e, t.plan, a, o[n], o[n + 1]),
        t.due() && (yield));
    for (let r of a.platforms)
      (a.path.pos(r.sc, 0, B),
        zc(n, B.x, B.z) && (yield* rae(e, t, a, r, i), jl(e, t, a, r, i)));
    a.hood &&
      (a.path.pos((a.hood[0] + a.hood[1]) / 2, 0, B),
      zc(n, B.x, B.z) && yl(e, a, !0));
  }
  for (let r of t.entrances) !r.bare && zc(n, r.cx, r.cz) && iae(e, r, i);
}
