// tokyo/assets/region-tokyo-bodyWorker-CtngWad2 36 — math
// Lines 12684-13017 of readable/tokyo/assets/region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function za(e, t, n, r, i = 2) {
  let a = new Ot(e, t, n, i, i, i),
    o = a.attributes.position,
    s = e / 2 - r,
    c = t / 2 - r,
    l = n / 2 - r,
    u = new M(),
    d = new M();
  for (let e = 0; e < o.count; e++)
    (u.fromBufferAttribute(o, e),
      d.set(
        Math.max(-s, Math.min(s, u.x)),
        Math.max(-c, Math.min(c, u.y)),
        Math.max(-l, Math.min(l, u.z)),
      ),
      u.sub(d),
      u.lengthSq() > 1e-10 && u.setLength(r),
      u.add(d),
      o.setXYZ(e, u.x, u.y, u.z));
  return (a.deleteAttribute(`normal`), a);
}
function Ba(e, t, n) {
  let { b: r, m: i } = e,
    a = r.H,
    o = r.s,
    s = t.color ?? (n ? 2306639 : 2961203),
    c = t.color2 ?? X(s, 0.75),
    l = (n ? 0.28 : 0.3) * o,
    u = (n ? 0.34 : 0.4) * o,
    d = (n ? 0.1 : 0.13) * o,
    f = 0.68 * a,
    p = q(r, f) + La(e, Math.PI, f) + d / 2 + 0.01,
    m = za(l, u, d, 0.035 * o, e.lod === 0 ? 3 : 1);
  if (
    (i.geo(m, $(0, f, p, 0.06, 0, 0), {
      color: (e, t, n, r, i, a) => (
        a.setHex(s),
        n > p + d * 0.3 && t < f && a.setHex(c),
        t < f - u * 0.46 && a.multiplyScalar(0.8),
        a
      ),
      skin: (e, t, n, r, i, a) =>
        H(a, z.chest, z.spine, U(f, f - u * 0.5, t) * 0.4),
      kind: V.cloth,
      rough: 0.75,
    }),
    e.lod === 0)
  ) {
    let e = za(l * 0.75, u * 0.38, d * 0.35, 0.02 * o, 2);
    i.geo(e, $(0, f - u * 0.2, p + d * 0.55, 0.06, 0, 0), {
      color: c,
      skin: z.chest,
      kind: V.cloth,
      rough: 0.75,
    });
  }
  Ra(e, X(s, 0.7), f - u * 0.35);
}
function Va(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = n.s,
    o = t.color ?? 15217276,
    s = 0.4 * a,
    c = 0.42 * a,
    l = 0.3 * a,
    u = 0.7 * i,
    d = q(n, u) + La(e, Math.PI, u) + l / 2 + 0.012,
    f = za(s, c, l, 0.025 * a, e.lod === 0 ? 2 : 1);
  r.geo(f, $(0, u, d), {
    color: (e, t, n, r, i, a) => a.setHex(t > u + c * 0.46 ? X(o, 0.8) : o),
    skin: z.chest,
    kind: V.gloss,
    rough: 0.45,
  });
  let p = bi(
    e,
    ((o >> 8) & 255) > ((o >> 16) & 255) ? `rider-green` : `rider-pink`,
    16777215,
    o,
  );
  if (p) {
    let e = new Nt(s * 0.8, c * 0.8);
    r.geo(
      e,
      $(0, u, d + l / 2 + 0.002),
      {
        color: 16777215,
        skin: z.chest,
        kind: V.cloth,
        rough: 0.6,
        tex: {
          rect: p,
          mode: 2,
          uv: (e, t, n, r, i, a) => ((a[0] = r), (a[1] = i)),
        },
      },
      !0,
    );
  }
  Ra(e, 2763310, u - c * 0.3);
}
function Ha(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = n.s,
    o = t.kind === `tote`,
    s = t.color ?? (o ? 15327695 : 3812388),
    c = (o ? 0.3 : 0.2) * a,
    l = (o ? 0.32 : 0.16) * a,
    u = 0.06 * a,
    d = (o ? 0.5 : 0.53) * i,
    f = 1.35,
    p = La(e, f, Math.max(d, n.torsoBottom + 0.02)) + u / 2 + 0.01,
    m = Math.sin(f) * p + 0.03 * a,
    h = q(n, d) - Math.cos(f) * p,
    g = za(u, l, c, (o ? 0.012 : 0.02) * a, e.lod === 0 ? 2 : 1);
  (r.geo(g, $(m, d, h, 0, 0, 0.04), {
    color: (e, t, n, r, i, a) =>
      a.setHex(s).multiplyScalar(t > d + l * 0.3 && !o ? 0.85 : 1),
    skin: (e, t, n, r, i, a) => {
      H(a, z.hips, z.chest, 0.5);
    },
    kind: o ? V.cloth : V.gloss,
    rough: o ? 0.9 : 0.4,
  }),
    Ua(
      e,
      o
        ? [
            [1.12, 0.585],
            [1, 0.68],
            [1.05, 0.78],
            [1.4, 0.842],
            [1.85, 0.8],
            [2.02, 0.69],
            [1.92, 0.585],
          ]
        : [
            [1.3, 0.575],
            [0.75, 0.64],
            [0.1, 0.71],
            [-0.55, 0.775],
            [-1.15, 0.83],
            [-1.57, 0.848],
            [-2.05, 0.82],
            [-2.6, 0.76],
            [Math.PI, 0.7],
            [2.55, 0.635],
            [1.85, 0.585],
          ],
      (o ? 0.03 : 0.026) * a,
      o ? X(s, 0.85) : 2760730,
    ));
}
function Ua(e, t, n, r) {
  let { b: i, m: a } = e,
    o = i.H,
    s = t.length - 1;
  for (let c of [!1, !0])
    a.grid(
      {
        nu: 1,
        nv: s,
        closed: !1,
        point: (r, a, c) => {
          let [l, u] = t[Math.round(a * s)],
            d = Math.min(i.torsoTop - 0.004, u * o + (r - 0.5) * n),
            f = U(0.8 * o, 0.845 * o, d),
            p = La(e, l, d) + 0.005 + 0.006 * f;
          return c.set(
            Math.sin(l) * p,
            d + 0.006 * f,
            q(i, d) - Math.cos(l) * p,
          );
        },
        invert: c,
      },
      {
        color: c ? X(r, 0.7) : r,
        skin: (e, n, r, a, o, c) => Yr(i, t[Math.round(o * s)][0], n, c),
        kind: V.cloth,
        rough: 0.7,
      },
    );
}
function Wa(e, t) {
  let { b: n, m: r } = e,
    i = n.s,
    a = n.joints.p[z.handL],
    o = 0.3 * i,
    s = 0.26 * i,
    c = 0.12 * i,
    l = new M(a.x - 0.02 * i, a.y - 0.09 * i - s / 2, a.z),
    u = za(c, s, o, 0.02 * i, e.lod === 0 ? 3 : 1),
    d = [t.color ?? 14168620, 15921902, t.color2 ?? 2772904, 15921902],
    f = gi(e, `marketbag:${d[0]}:${d[2]}`, 128, 128, !0, mi(d[0], d[2]));
  (r.geo(u, $(l.x, l.y, l.z), {
    color: f ? 16777215 : d[0],
    skin: z.handL,
    kind: V.gloss,
    rough: 0.5,
    part: B.lItem,
    tex: f
      ? {
          rect: f,
          mode: 1,
          uv: (e, t, n, r, i, a) => ((a[0] = r * 2), (a[1] = i * 2)),
        }
      : void 0,
  }),
    ka(
      e,
      new M(l.x, l.y + s / 2, l.z - o * 0.3),
      new M(a.x, a.y - 0.06 * i, a.z),
      0.018 * i,
      d[0],
      z.handL,
    ),
    ka(
      e,
      new M(l.x, l.y + s / 2, l.z + o * 0.3),
      new M(a.x, a.y - 0.06 * i, a.z),
      0.018 * i,
      d[0],
      z.handL,
    ));
}
function Ga(e, t) {
  let n = e.b.joints.p,
    r = n[t < 0 ? z.handL : z.handR],
    i = n[t < 0 ? z.fingersL : z.fingersR];
  return r
    .clone()
    .lerp(i, 0.85)
    .add(new M(-t * 0.012 * e.b.s, 0, -0.008 * e.b.s));
}
function Ka(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Ga(e, 1),
    s = 0.15 * a,
    c = 0.037 * a,
    l = 0.043 * a,
    u = t.color ?? 13081194,
    d = new At(l, c, s, i === 0 ? 12 : 6, 1, !1),
    f = o.y + 0.02 * a;
  n.geo(d, $(o.x + 0.012 * a, f, o.z), {
    color: (e, t, n, r, i, a) => {
      let o = (t - (f - s / 2)) / s;
      return (
        a.setHex(u),
        o < 0.22 && a.setHex(2759186),
        o > 0.86 && a.setHex(15921128),
        o > 0.4 && o < 0.62 && a.setHex(16052972),
        a
      );
    },
    skin: z.handR,
    kind: V.gloss,
    rough: 0.2,
  });
  let p = new At(0.0055 * a, 0.0055 * a, 0.1 * a, 5);
  n.geo(
    p,
    $(o.x + 0.02 * a, f + s / 2 + 0.035 * a, o.z + 0.004, 0.12, 0, -0.1),
    { color: t.color2 ?? 3116906, skin: z.handR, kind: V.gloss, rough: 0.3 },
  );
}
function qa(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Ga(e, -1),
    o = za(0.009 * i, 0.15 * i, 0.072 * i, 0.004 * i, 1);
  n.geo(o, $(a.x + 0.015 * i, a.y, a.z - 0.01 * i, 0, 0, 0), {
    color: t.color ?? 1842466,
    skin: z.handL,
    kind: V.gloss,
    rough: 0.25,
  });
  let s = new Nt(0.066 * i, 0.138 * i);
  n.geo(
    s,
    $(a.x + 0.015 * i + 0.0048 * i, a.y, a.z - 0.01 * i, 0, Math.PI / 2, 0),
    { color: 9423103, skin: z.handL, kind: V.screen, rough: 0.1, emissive: 1 },
    !0,
  );
}
function Ja(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Ga(e, 1),
    s = 0.78 * a,
    c = t.color ?? 2842526,
    l = t.color2 ?? X(c, 0.8),
    u = new At(0.006 * a, 0.006 * a, s, 5);
  n.geo(u, $(o.x, o.y - s / 2 + 0.05 * a, o.z), {
    color: 2763310,
    skin: z.handR,
    kind: V.metal,
    rough: 0.3,
  });
  let d = 0.52 * a,
    f = new M(o.x, o.y - s + 0.05 * a, o.z),
    p = i === 0 ? 16 : 8;
  for (let e of [!0, !1])
    n.grid(
      {
        nu: p,
        nv: 2,
        closed: !0,
        point: (t, n, r) => {
          let i = t * ha,
            o = Math.round(n * 2) / 2,
            s = 1 - 0.04 * Math.abs(Math.cos(i * 4)),
            c = d * o * s,
            l = 0.2 * a * o * o;
          return r.set(
            f.x + Math.cos(i) * c,
            f.y + l + (e ? 0 : 0.004),
            f.z + Math.sin(i) * c,
          );
        },
        invert: e,
      },
      {
        color: (t, n, r, i, a, o) =>
          o.setHex(Math.floor(i * 8) % 2 ? c : l).multiplyScalar(e ? 1 : 0.7),
        skin: z.handR,
        kind: V.gloss,
        rough: 0.35,
      },
    );
}
