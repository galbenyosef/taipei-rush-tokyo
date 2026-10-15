// tokyo/assets/region-tokyo-BcM3fReU 22 — math
// Lines 15660-15985 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Rl(e, t, n, r, i, a, o, s, c) {
  (t.path.at(n, Dl), t.path.pos(n, r, H));
  let l = -Dl.tz,
    u = Dl.tx,
    d = a / 2,
    f = o + s;
  i > 0
    ? e.quad(
        H.x + l * d,
        o,
        H.z + u * d,
        H.x - l * d,
        o,
        H.z - u * d,
        H.x - l * d,
        f,
        H.z - u * d,
        H.x + l * d,
        f,
        H.z + u * d,
        c.u0,
        c.v0,
        c.u1,
        c.v1,
      )
    : e.quad(
        H.x - l * d,
        o,
        H.z - u * d,
        H.x + l * d,
        o,
        H.z + u * d,
        H.x + l * d,
        f,
        H.z + u * d,
        H.x - l * d,
        f,
        H.z - u * d,
        c.u0,
        c.v0,
        c.u1,
        c.v1,
      );
}
var zl = (e, t) =>
    e.kinds[Math.max(0, Math.min(e.kinds.length - 1, Math.floor(t)))],
  Bl = (e, t, n) => Math.max(0, e.groundHeight(t, n)),
  Vl = (e, t, n) => {
    let r = e.surfaceAt(t, n);
    return (
      r !== `road` && r !== `crosswalk` && r !== `sidewalk` && r !== `water`
    );
  };
function Hl(e, t, n, r) {
  return Gl(
    e,
    t,
    Wl(e, `p${n}`, () => {
      let t = [],
        r = e.draw1,
        i = e.draw0;
      for (; i < r - 1e-6;) {
        let a = zl(e, i),
          o = Math.min(r, i + n);
        for (let t = Math.floor(i) + 1; t < o; t++)
          if (zl(e, t) !== a) {
            o = t;
            break;
          }
        (o - i < 0.05 && (o = Math.min(r, i + 1)), t.push(i, o), (i = o));
      }
      return t;
    }),
    r,
  );
}
var Ul = new WeakMap();
function Wl(e, t, n) {
  let r = Ul.get(e);
  r || Ul.set(e, (r = new Map()));
  let i = r.get(t);
  if (!i) {
    let a = n(),
      o = new Int32Array(a.length / 2);
    for (let t = 0; t < a.length; t += 2)
      (e.path.pos((a[t] + a[t + 1]) / 2, 0, H), (o[t / 2] = Gc(H.x, H.z)));
    r.set(t, (i = { se: new Float32Array(a), key: o }));
  }
  return i;
}
function Gl(e, t, n, r) {
  r.length = 0;
  for (let e = 0; e < n.key.length; e++)
    n.key[e] === t.key && r.push(n.se[e * 2], n.se[e * 2 + 1]);
  return r;
}
var Kl = [],
  ql = [];
function Jl(e, t, n, r, i) {
  return Gl(
    e,
    t,
    Wl(e, `t${n}:${r}`, () => Yl(e, n, r)),
    i,
  );
}
function Yl(e, t, n) {
  let r = [],
    i = e.draw1,
    a = e.draw0,
    o = { x: 0, z: 0, tx: 0, tz: 1 };
  for (; a < i - 1e-6;) {
    e.path.at(a, o);
    let s = o.tx,
      c = o.tz,
      l = Math.min(i, a + t);
    for (let t = a + 2; t < l; t += 2) {
      e.path.at(t, Dl);
      let r =
        Math.abs(Math.atan2(s * Dl.tz - c * Dl.tx, s * Dl.tx + c * Dl.tz)) > n;
      if (!r)
        for (let n of e.tracks) {
          let e = n.off.at(a),
            i = n.off.at(t),
            o = n.off.at((a + t) / 2);
          if (Math.abs(o - (e + i) / 2) > 0.04) {
            r = !0;
            break;
          }
        }
      if (r) {
        l = Math.max(a + 2, t - 2);
        break;
      }
    }
    (r.push(a, l), (a = l));
  }
  return r;
}
function Xl(e, t) {
  for (let n = e.draw0; n <= e.draw1; n += 32)
    if (
      (e.path.pos(n, 0, H),
      H.x > t.minX - 40 &&
        H.x < t.maxX + 40 &&
        H.z > t.minZ - 40 &&
        H.z < t.maxZ + 40)
    )
      return !0;
  return !1;
}
function* Zl(e, t, n) {
  kl = Ol;
  for (let r of t.m.corridors)
    if (Xl(r, n)) {
      Hl(r, n, 12, Kl);
      for (let n = 0; n < Kl.length; n += 2)
        (Ql(e, t, r, Kl[n], Kl[n + 1]), t.due() && (yield));
      for (let i of r.platforms)
        (r.path.pos(i.sc, 0, H),
          ml(n, H.x, H.z) && (eu(e, r, i), Mu(e, t, r, i, null)));
      r.hood &&
        (r.path.pos((r.hood[0] + r.hood[1]) / 2, 0, H),
        ml(n, H.x, H.z) && tu(e, r, !1));
    }
  for (let r of t.entrances) ml(n, r.cx, r.cz) && nu(e, r);
}
function Ql(e, t, n, r, i) {
  let a = zl(n, (r + i) / 2);
  if (a === Oc.None) return;
  let o = n.deck.at(r),
    s = n.deck.at(i),
    c = n.edge0.at(r),
    l = n.edge0.at(i),
    u = n.edge1.at(r),
    d = n.edge1.at(i),
    f = a === Oc.Girder ? 2.1 : hl;
  (e.setMaterial(0.9, 0, 0, 0),
    El(e, Tl.conc, 0.92),
    Pl(e, n, r, i, c + 0.3, u - 0.3, o, s, !0),
    El(e, a === Oc.Girder ? Tl.girderDark : Tl.concUnder),
    Pl(e, n, r, i, c, u, o - f, s - f, !1));
  for (let t of [-1, 1]) {
    let p = t < 0 ? c : u,
      m = t < 0 ? l : d;
    (a === Oc.Girder
      ? (El(e, Tl.girder),
        jl(e, n, r, i, p, m, o - f, o - gl, s - f, s - gl, t),
        El(e, Tl.parapet),
        jl(e, n, r, i, p, m, o - gl, o + vl, s - gl, s + vl, t))
      : a === Oc.Brick
        ? (El(e, [146, 70, 48]),
          jl(e, n, r, i, p, m, o - f, o + vl, s - f, s + vl, t))
        : (El(e, Tl.parapet),
          jl(e, n, r, i, p, m, o - f, o + vl, s - f, s + vl, t)),
      El(e, Tl.parapet, 0.95),
      Pl(
        e,
        n,
        r,
        i,
        t < 0 ? p : p - 0.3,
        t < 0 ? p + 0.3 : p,
        o + vl,
        s + vl,
        !0,
      ),
      El(e, Tl.conc, 0.85),
      jl(e, n, r, i, p - t * 0.3, m - t * 0.3, o, o + vl, s, s + vl, -t));
  }
  let p = t.plan;
  if (a === Oc.Brick)
    for (let t of [-1, 1])
      for (let a = Math.ceil(r / 8) * 8 - 8; a < i; a += 8) {
        let c = Math.max(r, a),
          l = Math.min(i, a + 8);
        if (l - c < 0.2) continue;
        let u = t < 0 ? n.edge0.at(c) : n.edge1.at(c);
        (El(e, [140, 66, 44]), jl(e, n, c, l, u, u, 0, o - f, 0, s - f, t));
        let d = Math.max(c, a + 1.6),
          p = Math.min(l, a + 8);
        p - d > 0.2 &&
          (El(e, [40, 34, 30]),
          jl(e, n, d, p, u + t * 0.05, u + t * 0.05, 0, 5.6, 0, 5.6, t));
      }
  else if (a === Oc.Upper) {
    El(e, Tl.concDark);
    for (let t = Math.ceil(r / 12) * 12; t < i; t += 12) uu(e, p, n, t, null);
  } else if (a === Oc.Frame) {
    El(e, Tl.concDark);
    for (let t = Math.ceil(r / yl) * yl; t < i; t += yl) {
      let r = n.deck.at(t);
      for (let i of [n.edge0.at(t) + 1.6, n.edge1.at(t) - 1.6]) {
        let a = Al(n, t, i);
        Vl(p, a.x, a.z) &&
          !sl(a.x, a.z) &&
          Il(e, n, t, i, 0.5, Bl(p, a.x, a.z), r - hl, 0.5);
      }
    }
  }
  if (a === Oc.Girder)
    for (let t of n.girders)
      for (let a of [t.s0, t.s1]) a < r || a >= i || $l(e, p, n, a);
}
function $l(e, t, n, r) {
  let i = n.deck.at(r),
    a = n.edge0.at(r) + 0.8,
    o = n.edge1.at(r) - 0.8;
  El(e, Tl.concDark);
  for (let s = a; s < o - 0.1; s += 3) {
    let a = Math.min(o, s + 3),
      c = Al(n, r, (s + a) / 2);
    Vl(t, c.x, c.z) &&
      !sl(c.x, c.z) &&
      Il(e, n, r, (s + a) / 2, (a - s) / 2, 0, i - gl - _l, 0.8);
  }
}
function eu(e, t, n) {
  let r = t.deck.at(n.sc);
  (e.setMaterial(0.9, 0, 0, 0),
    El(e, Tl.platform),
    Pl(e, t, n.s0, n.s1, n.o0, n.o1, n.y, n.y, !0),
    El(e, Tl.concDark),
    jl(e, t, n.s0, n.s1, n.o0, n.o0, r, n.y, r, n.y, -1),
    jl(e, t, n.s0, n.s1, n.o1, n.o1, r, n.y, r, n.y, 1));
  let i = n.s0 + 14,
    a = n.s1 - 14,
    o = n.y + 3.5;
  (El(e, Tl.canopy),
    Pl(e, t, i, a, n.o0 - 0.5, n.o1 + 0.5, o + 0.2, o + 0.2, !0),
    El(e, Tl.canopyUnder),
    Pl(e, t, i, a, n.o0 - 0.5, n.o1 + 0.5, o, o, !1),
    jl(e, t, i, a, n.o0 - 0.5, n.o0 - 0.5, o, o + 0.2, o, o + 0.2, -1),
    jl(e, t, i, a, n.o1 + 0.5, n.o1 + 0.5, o, o + 0.2, o, o + 0.2, 1));
}
function tu(e, t, n) {
  if (!t.hood) return;
  let [r, i] = t.hood,
    a = t.deck.at(r),
    o = 6.25,
    s = t.edge1.at(r) - 0.05,
    c = a + 6.2;
  (e.setMaterial(0.9, 0, 0, 0),
    El(e, Tl.hood),
    jl(e, t, r, i, s, s, a, c, a, c, 1),
    jl(e, t, r, i, o, o, a, c, a, c, -1),
    Pl(e, t, r, i, o, s, c, c, !0),
    El(e, Tl.hood, 0.9),
    Fl(e, t, r, o, s, c - 1.4, c, -1),
    Fl(e, t, r, o, 6.85, a, c - 1.4, -1),
    Fl(e, t, r, s - 0.6, s, a, c - 1.4, -1),
    El(e, [16, 16, 18]),
    Fl(e, t, r + 1.5, 6.85, s - 0.6, a, c - 1.4, -1),
    n &&
      (El(e, Tl.concDark),
      Pl(e, t, r, r + 1.5, 6.85, s - 0.6, c - 1.4, c - 1.4, !1),
      jl(e, t, r, r + 1.5, 6.85, 6.85, a, c - 1.4, a, c - 1.4, 1),
      jl(e, t, r, r + 1.5, s - 0.6, s - 0.6, a, c - 1.4, a, c - 1.4, -1)),
    El(e, Tl.hood, 0.85),
    Fl(e, t, i, o, s, a, c, 1));
}
function nu(e, t) {
  if (t.kind !== `metro`) return;
  (e.setMaterial(0.8, 0.2, 0, 0), El(e, [70, 78, 86]));
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
