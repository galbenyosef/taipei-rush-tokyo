// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 34 — math
// Lines 12108-12346 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function Da(e) {
  for (let t of e.desc.acc)
    if (!(e.lod === 1 && Ta.has(t.kind)))
      switch (t.kind) {
        case `mask`:
          Oa(e, t);
          break;
        case `glasses`:
        case `sunglasses`:
          Aa(e, t, t.kind === `sunglasses`);
          break;
        case `cap`:
        case `bucket`:
        case `policeCap`:
        case `visor`:
          ja(e, t);
          break;
        case `helmet`:
          Pa(e, t);
          break;
        case `backpack`:
        case `schoolbag`:
          Ba(e, t, t.kind === `schoolbag`);
          break;
        case `deliveryBox`:
          Va(e, t);
          break;
        case `tote`:
        case `shoulderBag`:
          Ha(e, t);
          break;
        case `marketBag`:
          Wa(e, t);
          break;
        case `cup`:
          Ka(e, t);
          break;
        case `phone`:
          qa(e, t);
          break;
        case `umbrella`:
          Ja(e, t);
          break;
        case `lanyard`:
          Za(e, t);
          break;
        case `watch`:
          Xa(e, t);
          break;
        case `earbuds`:
          Ia(e);
          break;
        case `headband`:
          Fa(e, t);
          break;
        case `apron`:
          $a(e, t);
          break;
        case `necklace`:
          Qa(e, t);
          break;
        case `fan`:
          Ya(e, t);
          break;
        default:
          Ea.get(t.kind)?.(e, t);
      }
}
function Oa(e, t) {
  let { h: n, m: r, lod: i } = e,
    a = n.hh / 0.23,
    o = n.lay,
    s = t.color ?? 12573166,
    c = i === 0 ? 10 : 6,
    l = i === 0 ? 5 : 3,
    u = (o.eyeD + o.noseBaseD) * 0.5 + 0.035;
  if (
    (r.grid(
      {
        nu: c,
        nv: l,
        closed: !1,
        point: (e, t, r) => {
          let i = ga(-1.28, 1.28, e),
            s = ga(u, 1, t),
            c =
              (0.004 +
                0.014 * _a(i, 0.35) * _a(s - o.noseTipD, 0.14) +
                0.006 * _a(i, 0.7)) *
              a,
            l = Math.abs(e * 2 - 1) ** 6;
          return (
            G(n, i, Math.min(1, s), c * (1 - l) + 0.0015, r),
            s > 0.97 && (r.y -= (s - 0.97) * n.hh * 0.6),
            r
          );
        },
      },
      {
        color: (e, t, n, r, i, a) => {
          a.setHex(s);
          let o = Math.abs(Math.sin(i * Math.PI * 3.2));
          return (a.multiplyScalar(0.93 + 0.07 * o), a);
        },
        skin: (e, t, n, r, i, a) => H(a, z.head, z.jaw, U(0.55, 0.9, i) * 0.6),
        kind: V.cloth,
        rough: 0.9,
      },
    ),
    i === 0)
  ) {
    let t =
        (((s >> 16) & 255) * 0.3 + ((s >> 8) & 255) * 0.59 + (s & 255) * 0.11) /
          255 <
        0.45
          ? X(s, 0.8)
          : 14079183,
      r = [new M(), new M(), new M()];
    for (let i of [-1, 1])
      for (let [o, s, c] of [
        [0.15, 1.62, 0.5],
        [0.85, 1.7, 0.7],
      ]) {
        let l = ga(u, 1, o);
        for (let e = 0; e <= 2; e++) {
          let t = e / 2;
          G(
            n,
            i * ga(1.28, s, t),
            ga(l, c, t),
            (0.004 - 0.001 * t + 0.0015 * Math.sin(t * Math.PI)) * a,
            r[e],
          );
        }
        (ka(e, r[0], r[1], 0.0022, t, z.head),
          ka(e, r[1], r[2], 0.0022, t, z.head));
      }
  }
}
function ka(e, t, n, r, i, a) {
  let o = new M().subVectors(n, t),
    s = new Ot(r, o.length(), r * 0.6),
    c = t.clone().add(n).multiplyScalar(0.5),
    l = new j().setFromUnitVectors(new M(0, 1, 0), o.normalize());
  e.m.geo(s, new ye().compose(c, l, new M(1, 1, 1)), {
    color: i,
    skin: a,
    kind: V.cloth,
    rough: 0.8,
  });
}
function Aa(e, t, n) {
  let { h: r, m: i, lod: a } = e,
    o = r.hh / 0.23,
    s = r.lay,
    c = t.color ?? (n ? 1381655 : 2761760),
    l = s.eyeW * 1.32,
    u = (n ? 0.07 : 0.058) * (r.hh / r.hh),
    d = 0.012 * o,
    f = a === 0 ? 12 : 6;
  for (let t of [-1, 1]) {
    let p = t * s.eyeT,
      m = s.eyeD + 0.004,
      h = (e, t, i) => {
        let a = (e / f) * ha,
          o = Math.sign(Math.cos(a)) * Math.abs(Math.cos(a)) ** 0.7,
          s = Math.sign(Math.sin(a)) * Math.abs(Math.sin(a)) ** 0.7,
          c = p + o * (l + i),
          h = m + s * (u * 0.5 + i * 0.3) + (n && s > 0 ? 0.01 : 0),
          g = rr(r, p, m) + d,
          _ = r.crownY - h * r.hh;
        return t.set(
          Math.sin(c) * g,
          _,
          Kn(r, h) - Math.cos(c) * g * (1 - 0.02 * Math.abs(o)),
        );
      };
    if (
      (i.grid(
        {
          nu: f,
          nv: 1,
          closed: !0,
          point: (e, t, n) => h(Math.round(e * f), n, t < 0.5 ? 0.012 : 0),
          invert: !1,
        },
        { color: c, skin: z.head, kind: V.gloss, rough: 0.25 },
      ),
      h(0, new M(), 0),
      i.grid(
        {
          nu: f,
          nv: 1,
          closed: !0,
          point: (e, t, n) =>
            t < 0.5
              ? h(Math.round(e * f), n, 0.001)
              : n.set(
                  Math.sin(p) * (rr(r, p, m) + d),
                  r.crownY - m * r.hh,
                  Kn(r, m) - Math.cos(p) * (rr(r, p, m) + d),
                ),
          invert: !0,
        },
        n
          ? {
              color: 1184790,
              skin: z.head,
              kind: V.lens,
              rough: 0.05,
              emissive: 0.9,
              transparent: !0,
            }
          : {
              color: 14674158,
              skin: z.head,
              kind: V.lens,
              rough: 0.05,
              emissive: 0.18,
              transparent: !0,
            },
      ),
      a === 0)
    ) {
      let n = h(0, new M(), 0.012);
      t < 0 && h(f / 2, n, 0.012);
      let i = G(r, t * 1.55, 0.47, 0.004 * o, new M());
      ka(e, h(t > 0 ? 0 : f / 2, new M(), 0.01), i, 0.004, c, z.head);
    }
  }
  ka(
    e,
    G(r, -s.eyeT + s.eyeW * 1.3, s.eyeD - 0.02, 0.013 * o, new M()),
    G(r, s.eyeT - s.eyeW * 1.3, s.eyeD - 0.02, 0.013 * o, new M()),
    0.004,
    c,
    z.head,
  );
}
