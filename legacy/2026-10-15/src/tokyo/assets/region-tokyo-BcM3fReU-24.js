// tokyo/assets/region-tokyo-BcM3fReU 24 — math
// Lines 16331-16504 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function su(e, t, n, r, i, a, o, s, c, l, u, d, f) {
  t.path.pos(n, i, H);
  let p = H.x,
    m = H.z;
  t.path.pos(n, o, H);
  let h = H.x,
    g = H.z;
  t.path.pos(r, a, H);
  let _ = H.x,
    v = H.z;
  t.path.pos(r, s, H);
  let y = H.x,
    b = H.z;
  e.quad(p, c, m, h, u, g, y, d, b, _, l, v, f.u0, f.v0, f.u1, f.v1);
}
function cu(e, t, n, r, i, a, o, s, c, l, u, d) {
  jl(e, t, n, r, i, a, o, s, c, l, u, d);
}
function lu(e, t, n, r, i, a) {
  let o = zl(n, (r + i) / 2),
    s = t.plan,
    c = a.uv(`conc`),
    l = a.white,
    u = a.uv(`brick`);
  if (o === Oc.Frame) {
    e.setMaterial(0.9, 0, 0, 0);
    for (let t = Math.ceil(r / yl) * yl; t < i; t += yl) {
      let r = n.deck.at(t),
        i = n.edge0.at(t),
        a = n.edge1.at(t),
        o = Math.max(2, Math.round((a - i) / 8.5) + 1);
      (El(e, Tl.concUnder, 1.05),
        Il(
          e,
          n,
          t,
          (i + a) / 2,
          (a - i) / 2 - 0.2,
          r - hl - 0.9,
          r - hl,
          0.45,
          l,
        ),
        El(e, Tl.concDark, 1.1));
      for (let l = 0; l < o; l++) {
        let u = i + 1.6 + ((a - i - 3.2) * l) / (o - 1),
          d = Al(n, t, u);
        Vl(s, d.x, d.z) &&
          !sl(d.x, d.z) &&
          Il(e, n, t, u, 0.45, Bl(s, d.x, d.z), r - hl - 0.9, 0.45, c);
      }
    }
    El(e, Tl.concUnder, 1.1);
    for (let t of [-1, 1]) {
      let a = t < 0 ? n.edge0.at(r) + 0.4 : n.edge1.at(r) - 0.4,
        o = t < 0 ? n.edge0.at(i) + 0.4 : n.edge1.at(i) - 0.4,
        s = n.deck.at(r),
        c = n.deck.at(i);
      (jl(e, n, r, i, a, o, s - hl - 0.7, s - hl, c - hl - 0.7, c - hl, t, l),
        Pl(
          e,
          n,
          r,
          i,
          Math.min(a, a - t * 0.6),
          Math.max(a, a - t * 0.6),
          s - hl - 0.7,
          c - hl - 0.7,
          !1,
          l,
        ));
    }
  } else if (o === Oc.Brick) {
    let o = [`concGates`, `concTickets`, `concGates`, `concShop`, `concPassage`]
        .filter((e) => a.has(e))
        .map((e) => a.uv(e)),
      s = Eu(t, n);
    for (let t of [-1, 1])
      hu(
        e,
        n,
        r,
        i,
        t,
        u,
        l,
        a.has(`fan`) ? a.uv(`fan`) : l,
        a.has(`tile`) ? a.uv(`tile`) : l,
        o,
        a.has(`concShop`) ? a.uv(`concShop`) : l,
        s,
      );
    let c = n.deck.at(r);
    (El(e, Tl.brick, 0.9),
      e.setMaterial(0.95, 0, 0, 0),
      zl(n, r - 1) !== Oc.Brick &&
        Fl(e, n, r, n.edge0.at(r), n.edge1.at(r), 0, c - hl, -1, u),
      zl(n, i + 0.5) !== Oc.Brick &&
        Fl(e, n, i, n.edge0.at(i), n.edge1.at(i), 0, n.deck.at(i) - hl, 1, u));
  } else if (o === Oc.Girder) vu(e, t, n, r, i, a);
  else if (o === Oc.Upper) {
    e.setMaterial(0.9, 0, 0, 0);
    for (let t = Math.ceil(r / 12) * 12; t < i; t += 12) uu(e, s, n, t, a);
  }
}
function uu(e, t, n, r, i) {
  let a = n.upper;
  if (!a) return;
  let o = n.deck.at(r) - hl,
    s = i ? i.uv(`conc`) : void 0;
  (El(e, Tl.concUnder, 1.05),
    Il(
      e,
      n,
      r,
      (a.colOnDeck + a.colOnGround) / 2,
      Math.abs(a.colOnGround - a.colOnDeck) / 2 + 0.5,
      o - 0.9,
      o,
      0.5,
      i ? i.white : void 0,
    ),
    El(e, Tl.concDark, 1.1));
  let c = fu(n, r, a.colOnGround),
    l = Al(n, r, a.colOnGround);
  c?.onDeck
    ? Il(e, n, r, a.colOnGround, 0.42, c.base, o - 0.9, 0.42, s)
    : c &&
      Vl(t, l.x, l.z) &&
      !sl(l.x, l.z) &&
      Il(e, n, r, a.colOnGround, 0.5, Bl(t, l.x, l.z), o - 0.9, 0.5, s);
  let u = mu(n, r);
  if (u) {
    if (u.onDeck) Il(e, n, r, u.off, 0.42, u.base, o - 0.9, 0.42, s);
    else {
      let i = Al(n, r, u.off);
      Vl(t, i.x, i.z) &&
        Il(e, n, r, u.off, 0.5, Bl(t, i.x, i.z), o - 0.9, 0.5, s);
    }
  }
}
var du = { x: 0, z: 0, tx: 0, tz: 1 };
function fu(e, t, n) {
  let r = e.upper?.lower;
  if (!r) return { off: n, onDeck: !1, base: 0 };
  let i = Al(e, t, n),
    a = i.x,
    o = i.z,
    s = r.path.project(a, o);
  r.path.at(s.s, du);
  let c = (a - du.x) * -du.tz + (o - du.z) * du.tx,
    l = c > r.edge0.at(s.s) - 0.6 && c < r.edge1.at(s.s) + 0.6;
  if (l) {
    for (let e of r.tracks)
      if (!(s.s < e.s0 || s.s > e.s1) && Math.abs(c - e.off.at(s.s)) < pu)
        return null;
  }
  return { off: n, onDeck: l, base: r.deck.at(s.s) };
}
var pu = 2.1;
function mu(e, t) {
  let n = e.upper;
  if (!n) return null;
  let r = (n) => fu(e, t, n),
    i = n.colOnDeck,
    a = Math.sign(n.colOnGround - n.colOnDeck) || 1;
  for (let e = 0; e <= 40; e++) {
    let t = (e % 2 ? 1 : -1) * Math.ceil(e / 2) * 0.25;
    if (t * a < -1.5 || t * a > Math.abs(n.colOnGround - i) - 1.2) continue;
    let o = r(i + t);
    if (o) return o;
  }
  return null;
}
