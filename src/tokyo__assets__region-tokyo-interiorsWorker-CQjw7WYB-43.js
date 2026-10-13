// tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB 43 — math
// Lines 18698-18936 of readable/tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
function hs(e) {
  for (let t of e.desc.acc)
    if (!(e.lod === 1 && ps.has(t.kind)))
      switch (t.kind) {
        case `mask`:
          gs(e, t);
          break;
        case `glasses`:
        case `sunglasses`:
          vs(e, t, t.kind === `sunglasses`);
          break;
        case `cap`:
        case `bucket`:
        case `policeCap`:
        case `visor`:
          ys(e, t);
          break;
        case `helmet`:
          Ss(e, t);
          break;
        case `backpack`:
        case `schoolbag`:
          Os(e, t, t.kind === `schoolbag`);
          break;
        case `deliveryBox`:
          ks(e, t);
          break;
        case `tote`:
        case `shoulderBag`:
          As(e, t);
          break;
        case `marketBag`:
          Ms(e, t);
          break;
        case `cup`:
          Ps(e, t);
          break;
        case `phone`:
          Fs(e, t);
          break;
        case `umbrella`:
          Is(e, t);
          break;
        case `lanyard`:
          zs(e, t);
          break;
        case `watch`:
          Rs(e, t);
          break;
        case `earbuds`:
          ws(e);
          break;
        case `headband`:
          Cs(e, t);
          break;
        case `apron`:
          Vs(e, t);
          break;
        case `necklace`:
          Bs(e, t);
          break;
        case `fan`:
          Ls(e, t);
          break;
        default:
          ms.get(t.kind)?.(e, t);
      }
}
function gs(e, t) {
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
          let i = is(-1.28, 1.28, e),
            s = is(u, 1, t),
            c =
              (0.004 +
                0.014 * as(i, 0.35) * as(s - o.noseTipD, 0.14) +
                0.006 * as(i, 0.7)) *
              a,
            l = Math.abs(e * 2 - 1) ** 6;
          return (
            U(n, i, Math.min(1, s), c * (1 - l) + 0.0015, r),
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
        skin: (e, t, n, r, i, a) => Zr(a, R.head, R.jaw, V(0.55, 0.9, i) * 0.6),
        kind: B.cloth,
        rough: 0.9,
      },
    ),
    i === 0)
  ) {
    let t =
        (((s >> 16) & 255) * 0.3 + ((s >> 8) & 255) * 0.59 + (s & 255) * 0.11) /
          255 <
        0.45
          ? Y(s, 0.8)
          : 14079183,
      r = [new N(), new N(), new N()];
    for (let i of [-1, 1])
      for (let [o, s, c] of [
        [0.15, 1.62, 0.5],
        [0.85, 1.7, 0.7],
      ]) {
        let l = is(u, 1, o);
        for (let e = 0; e <= 2; e++) {
          let t = e / 2;
          U(
            n,
            i * is(1.28, s, t),
            is(l, c, t),
            (0.004 - 0.001 * t + 0.0015 * Math.sin(t * Math.PI)) * a,
            r[e],
          );
        }
        (_s(e, r[0], r[1], 0.0022, t, R.head),
          _s(e, r[1], r[2], 0.0022, t, R.head));
      }
  }
}
function _s(e, t, n, r, i, a) {
  let o = new N().subVectors(n, t),
    s = new Bn(r, o.length(), r * 0.6),
    c = t.clone().add(n).multiplyScalar(0.5),
    l = new ie().setFromUnitVectors(new N(0, 1, 0), o.normalize());
  e.m.geo(s, new Ce().compose(c, l, new N(1, 1, 1)), {
    color: i,
    skin: a,
    kind: B.cloth,
    rough: 0.8,
  });
}
function vs(e, t, n) {
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
        let a = (e / f) * rs,
          o = Math.sign(Math.cos(a)) * Math.abs(Math.cos(a)) ** 0.7,
          s = Math.sign(Math.sin(a)) * Math.abs(Math.sin(a)) ** 0.7,
          c = p + o * (l + i),
          h = m + s * (u * 0.5 + i * 0.3) + (n && s > 0 ? 0.01 : 0),
          g = Ti(r, p, m) + d,
          _ = r.crownY - h * r.hh;
        return t.set(
          Math.sin(c) * g,
          _,
          mi(r, h) - Math.cos(c) * g * (1 - 0.02 * Math.abs(o)),
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
        { color: c, skin: R.head, kind: B.gloss, rough: 0.25 },
      ),
      h(0, new N(), 0),
      i.grid(
        {
          nu: f,
          nv: 1,
          closed: !0,
          point: (e, t, n) =>
            t < 0.5
              ? h(Math.round(e * f), n, 0.001)
              : n.set(
                  Math.sin(p) * (Ti(r, p, m) + d),
                  r.crownY - m * r.hh,
                  mi(r, m) - Math.cos(p) * (Ti(r, p, m) + d),
                ),
          invert: !0,
        },
        n
          ? {
              color: 1184790,
              skin: R.head,
              kind: B.lens,
              rough: 0.05,
              emissive: 0.9,
              transparent: !0,
            }
          : {
              color: 14674158,
              skin: R.head,
              kind: B.lens,
              rough: 0.05,
              emissive: 0.18,
              transparent: !0,
            },
      ),
      a === 0)
    ) {
      let n = h(0, new N(), 0.012);
      t < 0 && h(f / 2, n, 0.012);
      let i = U(r, t * 1.55, 0.47, 0.004 * o, new N());
      _s(e, h(t > 0 ? 0 : f / 2, new N(), 0.01), i, 0.004, c, R.head);
    }
  }
  _s(
    e,
    U(r, -s.eyeT + s.eyeW * 1.3, s.eyeD - 0.02, 0.013 * o, new N()),
    U(r, s.eyeT - s.eyeW * 1.3, s.eyeD - 0.02, 0.013 * o, new N()),
    0.004,
    c,
    R.head,
  );
}
