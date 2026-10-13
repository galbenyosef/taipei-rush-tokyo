// tokyo__assets__bodyWorker-Bk4d3Tu3 39 — math
// Lines 13395-13735 of readable/tokyo__assets__bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
function qa(e, t, n, r, i) {
  let { h: a, b: o, m: s, lod: c } = e,
    l = a.hh / 0.23,
    u = Ia(a, Math.PI, 0.3, 0.004 * l, new M());
  o.joints.p[B.hair].copy(u);
  let d = 0.3 * l,
    f = c === 0 ? [0, 0.03, 0.08, 0.25, 0.5, 0.75, 1] : [0, 0.1, 0.5, 1],
    p = f.length - 1,
    m = c === 0 ? 7 : 5,
    h = (e, t) =>
      t.set(
        0.008 * l * Math.sin(e * 3),
        u.y + 0.012 * l * Math.sin(e * 3) - d * e ** 1.1,
        u.z +
          0.018 * l +
          0.03 * l * Math.sin(Math.min(1, e * 1.6) * Math.PI * 0.5) -
          0.018 * l * e * e,
      ),
    g = new M(),
    _ = new M(),
    v = new M(),
    y = new M(1, 0, 0),
    b = new M(),
    x = (e) =>
      (e < 0.03
        ? 0.02
        : e < 0.08
          ? 0.016
          : 0.022 * (1 - e) +
            0.006 +
            0.012 * Math.sin(Math.min(1, e * 1.4) * Math.PI)) * l;
  s.grid(
    {
      nu: m,
      nv: p,
      closed: !0,
      cap0: !0,
      cap1: !0,
      point: (e, t, n) => {
        let r = f[Math.round(t * p)];
        (h(r, g),
          h(Math.min(1, r + 0.02), _),
          v.subVectors(_, g).normalize(),
          b.crossVectors(v, y).normalize());
        let i = e * Da,
          a = x(r);
        return n
          .copy(g)
          .addScaledVector(y, Math.cos(i) * a)
          .addScaledVector(b, Math.sin(i) * a * 0.95);
      },
    },
    {
      color: (r, i, a, o, s, c) => {
        let l = f[Math.round(s * p)];
        return l > 0.02 && l < 0.07
          ? c.setHex(e.desc.hair.color2 === void 0 ? 2763312 : 12597320)
          : c
              .setHex(t)
              .lerp(Ha.setHex(n), W(0.3, 1, l))
              .multiplyScalar(l < 0.1 ? 0.8 : 1);
      },
      skin: (e, t, n, r, i, a) =>
        U(a, B.head, B.hair, W(0.05, 0.3, f[Math.round(i * p)])),
      kind: H.hair,
      rough: 0.55,
      bump: (e, t, n, r, i) =>
        f[Math.round(i * p)] >= 1 ? 0.8 : f[Math.round(i * p)] >= 0.8 ? 0.3 : 0,
      tex: i
        ? {
            rect: i,
            mode: 3,
            uv: (e, t, n, r, i, a) => ((a[0] = r * 3), (a[1] = i * 3)),
          }
        : void 0,
    },
  );
}
function Ja(e, t, n, r) {
  let { h: i, m: a, lod: o } = e,
    s = i.hh / 0.23,
    c = Ia(i, Math.PI, 0.2, 0.03 * s, new M()),
    l = new jt(0.042 * s, o === 0 ? 10 : 6, o === 0 ? 7 : 4);
  (l.scale(1, 0.85, 0.8),
    a.geo(l, new ye().makeTranslation(c.x, c.y, c.z), {
      color: (e, n, r, i, a, o) =>
        o.setHex(t).multiplyScalar(0.85 + 0.2 * W(c.y - 0.03, c.y + 0.03, n)),
      skin: B.head,
      kind: H.hair,
      rough: 0.55,
      tex: r
        ? {
            rect: r,
            mode: 3,
            uv: (e, t, n, r, i, a) => ((a[0] = r * 4), (a[1] = i * 2)),
          }
        : void 0,
    }));
}
function Ya(e, t, n, r) {
  let { h: i, m: a } = e,
    o = i.hh / 0.23,
    s = (t) => {
      let n = Math.sin(t * 91.7 + e.desc.seed) * 43758.5453;
      return n - Math.floor(n);
    },
    c = new M(),
    l = new M(),
    u = new M(),
    d = new M(),
    f = new M();
  for (let e = 0; e < t; e++) {
    let t = (s(e) * 2 - 1) * Math.PI * 0.9,
      p = 0.04 + s(e + 50) * 0.26;
    (Ia(i, t, p, n(t, p) * 0.7, c),
      Ia(i, t, p, n(t, p) * 0.7 + 0.03 * o, l),
      u.subVectors(l, c).normalize(),
      l
        .copy(c)
        .addScaledVector(u, (0.022 + 0.018 * s(e + 9)) * o)
        .add(new M(0, 0.006 * o, 0.012 * o)),
      d.set(0, 1, 0).cross(u).normalize(),
      d.lengthSq() < 0.1 && d.set(1, 0, 0),
      f.crossVectors(u, d).normalize());
    let m = 0.011 * o,
      h = [0, 1, 2, 3].map((e) =>
        c
          .clone()
          .addScaledVector(d, Math.cos((e * Math.PI) / 2) * m)
          .addScaledVector(f, Math.sin((e * Math.PI) / 2) * m),
      ),
      g = [];
    for (let e = 0; e < 4; e++) {
      let t = h[e],
        n = h[(e + 1) % 4];
      g.push(t.x, t.y, t.z, n.x, n.y, n.z, l.x, l.y, l.z);
    }
    let _ = new Et();
    (_.setAttribute(`position`, new L(g, 3)),
      a.geo(_, null, {
        color: (e, t, n, i, a, o) =>
          o.setHex(r).multiplyScalar(t > c.y + 0.01 ? 1.1 : 0.8),
        skin: B.head,
        kind: H.hair,
        rough: 0.5,
      }));
  }
}
const Xa = Math.PI * 2,
  Za = (e, t, n) => e + (t - e) * n,
  Qa = (e, t) => Math.exp(-(e * e) / (t * t)),
  $a = new ye(),
  eo = new j(),
  to = new ke(),
  no = new M(),
  ro = new M(1, 1, 1);
function $(e, t, n, r = 0, i = 0, a = 0, o = 1, s = 1, c = 1) {
  return $a
    .compose(no.set(e, t, n), eo.setFromEuler(to.set(r, i, a)), ro.set(o, s, c))
    .clone();
}
function io(e) {
  for (let t of e) {
    if (t.kind === `helmet`) return { d: 0.5, squash: 0.25 };
    if (t.kind === `cap` || t.kind === `policeCap`)
      return { d: 0.3, squash: 0.35 };
    if (t.kind === `bucket`) return { d: 0.34, squash: 0.35 };
  }
  return { d: 0, squash: 1 };
}
function ao(e) {
  let t = e.desc.hair.style,
    n = e.h.hh / 0.23;
  return (
    ({
      bald: 0,
      buzz: 0.003,
      balding: 0.006,
      elder: 0.008,
      perm: 0.012,
      bowl: 0.008,
      undercut: 0.01,
      spiky: 0.008,
    }[t] ?? 0.007) *
      n +
    0.006 * n
  );
}
const oo = /* @__PURE__ */ new Set([`lanyard`, `watch`, `earbuds`, `necklace`]),
  so = /* @__PURE__ */ new Map();
function co(e) {
  for (let t of e.desc.acc)
    if (!(e.lod === 1 && oo.has(t.kind)))
      switch (t.kind) {
        case `mask`:
          lo(e, t);
          break;
        case `glasses`:
        case `sunglasses`:
          fo(e, t, t.kind === `sunglasses`);
          break;
        case `cap`:
        case `bucket`:
        case `policeCap`:
        case `visor`:
          po(e, t);
          break;
        case `helmet`:
          go(e, t);
          break;
        case `backpack`:
        case `schoolbag`:
          So(e, t, t.kind === `schoolbag`);
          break;
        case `deliveryBox`:
          Co(e, t);
          break;
        case `tote`:
        case `shoulderBag`:
          wo(e, t);
          break;
        case `marketBag`:
          Eo(e, t);
          break;
        case `cup`:
          Oo(e, t);
          break;
        case `phone`:
          ko(e, t);
          break;
        case `umbrella`:
          Ao(e, t);
          break;
        case `lanyard`:
          No(e, t);
          break;
        case `watch`:
          Mo(e, t);
          break;
        case `earbuds`:
          vo(e);
          break;
        case `headband`:
          _o(e, t);
          break;
        case `apron`:
          Fo(e, t);
          break;
        case `necklace`:
          Po(e, t);
          break;
        case `fan`:
          jo(e, t);
          break;
        default:
          so.get(t.kind)?.(e, t);
      }
}
function lo(e, t) {
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
          let i = Za(-1.28, 1.28, e),
            s = Za(u, 1, t),
            c =
              (0.004 +
                0.014 * Qa(i, 0.35) * Qa(s - o.noseTipD, 0.14) +
                0.006 * Qa(i, 0.7)) *
              a,
            l = Math.abs(e * 2 - 1) ** 6;
          return (
            q(n, i, Math.min(1, s), c * (1 - l) + 0.0015, r),
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
        skin: (e, t, n, r, i, a) => U(a, B.head, B.jaw, W(0.55, 0.9, i) * 0.6),
        kind: H.cloth,
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
        let l = Za(u, 1, o);
        for (let e = 0; e <= 2; e++) {
          let t = e / 2;
          q(
            n,
            i * Za(1.28, s, t),
            Za(l, c, t),
            (0.004 - 0.001 * t + 0.0015 * Math.sin(t * Math.PI)) * a,
            r[e],
          );
        }
        (uo(e, r[0], r[1], 0.0022, t, B.head),
          uo(e, r[1], r[2], 0.0022, t, B.head));
      }
  }
}
function uo(e, t, n, r, i, a) {
  let o = new M().subVectors(n, t),
    s = new Dt(r, o.length(), r * 0.6),
    c = t.clone().add(n).multiplyScalar(0.5),
    l = new j().setFromUnitVectors(new M(0, 1, 0), o.normalize());
  e.m.geo(s, new ye().compose(c, l, new M(1, 1, 1)), {
    color: i,
    skin: a,
    kind: H.cloth,
    rough: 0.8,
  });
}
