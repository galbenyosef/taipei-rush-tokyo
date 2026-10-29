// tokyo/assets/region-tokyo-A7LxHjud 46 — math
// Lines 23008-23163 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Jie(e, t, n, r, i, a) {
  let o = cl(n, (r + i) / 2),
    s = t.plan,
    c = a.uv(`conc`),
    l = a.white,
    u = a.uv(`brick`);
  if (o === Zs.Frame) {
    e.setMaterial(0.9, 0, 0, 0);
    for (let t = Math.ceil(r / Wc) * Wc; t < i; t += Wc) {
      let r = n.deck.at(t),
        i = n.edge0.at(t),
        a = n.edge1.at(t),
        o = Math.max(2, Math.round((a - i) / 8.5) + 1);
      (Yc(e, Jc.concUnder, 1.05),
        al(
          e,
          n,
          t,
          (i + a) / 2,
          (a - i) / 2 - 0.2,
          r - Bc - 0.9,
          r - Bc,
          0.45,
          l,
        ),
        Yc(e, Jc.concDark, 1.1));
      for (let l = 0; l < o; l++) {
        let u = i + 1.6 + ((a - i - 3.2) * l) / (o - 1),
          d = $c(n, t, u);
        ul(s, d.x, d.z) &&
          !Fc(d.x, d.z) &&
          al(e, n, t, u, 0.45, ll(s, d.x, d.z), r - Bc - 0.9, 0.45, c);
      }
    }
    Yc(e, Jc.concUnder, 1.1);
    for (let t of [-1, 1]) {
      let a = t < 0 ? n.edge0.at(r) + 0.4 : n.edge1.at(r) - 0.4,
        o = t < 0 ? n.edge0.at(i) + 0.4 : n.edge1.at(i) - 0.4,
        s = n.deck.at(r),
        c = n.deck.at(i);
      (el(e, n, r, i, a, o, s - Bc - 0.7, s - Bc, c - Bc - 0.7, c - Bc, t, l),
        rl(
          e,
          n,
          r,
          i,
          Math.min(a, a - t * 0.6),
          Math.max(a, a - t * 0.6),
          s - Bc - 0.7,
          c - Bc - 0.7,
          !1,
          l,
        ));
    }
  } else if (o === Zs.Brick) {
    let o = [`concGates`, `concTickets`, `concGates`, `concShop`, `concPassage`]
        .filter((e) => a.has(e))
        .map((e) => a.uv(e)),
      s = Ol(t, n);
    for (let t of [-1, 1])
      Zie(
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
    (Yc(e, Jc.brick, 0.9),
      e.setMaterial(0.95, 0, 0, 0),
      cl(n, r - 1) !== Zs.Brick &&
        il(e, n, r, n.edge0.at(r), n.edge1.at(r), 0, c - Bc, -1, u),
      cl(n, i + 0.5) !== Zs.Brick &&
        il(e, n, i, n.edge0.at(i), n.edge1.at(i), 0, n.deck.at(i) - Bc, 1, u));
  } else if (o === Zs.Girder) eae(e, t, n, r, i, a);
  else if (o === Zs.Upper) {
    e.setMaterial(0.9, 0, 0, 0);
    for (let t = Math.ceil(r / 12) * 12; t < i; t += 12) Cl(e, s, n, t, a);
  }
}
function Cl(e, t, n, r, i) {
  let a = n.upper;
  if (!a) return;
  let o = n.deck.at(r) - Bc,
    s = i ? i.uv(`conc`) : void 0;
  (Yc(e, Jc.concUnder, 1.05),
    al(
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
    Yc(e, Jc.concDark, 1.1));
  let c = Tl(n, r, a.colOnGround),
    l = $c(n, r, a.colOnGround);
  c?.onDeck
    ? al(e, n, r, a.colOnGround, 0.42, c.base, o - 0.9, 0.42, s)
    : c &&
      ul(t, l.x, l.z) &&
      !Fc(l.x, l.z) &&
      al(e, n, r, a.colOnGround, 0.5, ll(t, l.x, l.z), o - 0.9, 0.5, s);
  let u = Xie(n, r);
  if (u) {
    if (u.onDeck) al(e, n, r, u.off, 0.42, u.base, o - 0.9, 0.42, s);
    else {
      let i = $c(n, r, u.off);
      ul(t, i.x, i.z) &&
        al(e, n, r, u.off, 0.5, ll(t, i.x, i.z), o - 0.9, 0.5, s);
    }
  }
}
var wl = { x: 0, z: 0, tx: 0, tz: 1 };
function Tl(e, t, n) {
  let r = e.upper?.lower;
  if (!r) return { off: n, onDeck: !1, base: 0 };
  let i = $c(e, t, n),
    a = i.x,
    o = i.z,
    s = r.path.project(a, o);
  r.path.at(s.s, wl);
  let c = (a - wl.x) * -wl.tz + (o - wl.z) * wl.tx,
    l = c > r.edge0.at(s.s) - 0.6 && c < r.edge1.at(s.s) + 0.6;
  if (l) {
    for (let e of r.tracks)
      if (!(s.s < e.s0 || s.s > e.s1) && Math.abs(c - e.off.at(s.s)) < Yie)
        return null;
  }
  return { off: n, onDeck: l, base: r.deck.at(s.s) };
}
var Yie = 2.1;
function Xie(e, t) {
  let n = e.upper;
  if (!n) return null;
  let r = (n) => Tl(e, t, n),
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
