// tokyo/assets/charWorker-DPNUr-Eu 41 — math
// Lines 14210-14538 of readable/tokyo/assets/charWorker-DPNUr-Eu.pretty.js (statement-aligned).
function jo(e, t) {
  let { h: n, m: r } = e,
    i = bo(e);
  r.grid(
    {
      nu: e.lod === 0 ? 18 : 8,
      nv: 1,
      closed: !0,
      point: (e, t, r) =>
        G(
          n,
          -Math.PI + e * uo,
          0.2 + (t - 0.5) * 0.06 + 0.08 * Math.max(0, -Math.cos(e * uo)),
          i + 0.002,
          r,
          !1,
        ),
    },
    { color: t.color ?? 14826074, skin: R.head, kind: B.satin, rough: 0.5 },
  );
}
function Mo(e) {
  let { h: t, m: n } = e,
    r = t.hh / 0.23;
  for (let e of [-1, 1]) {
    let i = G(t, e * 1.57, 0.585, 0.005 * r, new M(), !1),
      a = new Nt(0.0055 * r, 5, 3);
    n.geo(a, $(i.x, i.y, i.z), {
      color: 16185078,
      skin: R.head,
      kind: B.gloss,
      rough: 0.2,
    });
    let o = new jt(0.0022 * r, 0.0022 * r, 0.02 * r, 5, 1, !0);
    n.geo(o, $(i.x, i.y - 0.012 * r, i.z + 0.002), {
      color: 16185078,
      skin: R.head,
      kind: B.gloss,
      rough: 0.2,
    });
  }
}
function No(e, t, n) {
  let r = e.fit,
    i = r.outer ? r.outer.off : r.top ? r.top.off : 0,
    a = r.outer ? r.outer.loose : r.top ? r.top.loose : 0;
  return Hi(e.b, t, n, i, a);
}
function Po(e, t, n) {
  let { b: r, m: i } = e,
    a = r.H;
  for (let o of [-1, 1]) {
    let s = o * 0.3,
      c = [
        { t: o * (Math.PI - 0.45), y: 0.79 * a },
        { t: o * (Math.PI / 2 + 0.25), y: 0.835 * a },
        { t: o * 0.9, y: 0.83 * a },
        { t: o * 0.55, y: 0.78 * a },
        { t: o * 0.45, y: 0.7 * a },
        { t: o * 0.55, y: n },
      ],
      l = c.length - 1;
    i.grid(
      {
        nu: 1,
        nv: l,
        closed: !1,
        point: (t, n, i) => {
          let o = c[Math.round(n * l)],
            s = o.t + (t - 0.5) * 0.34 * (o.y > 0.82 * a ? 0.45 : 1),
            u = o.y,
            d =
              No(e, s, Math.min(u, r.torsoTop - 0.01)) +
              0.006 +
              (u > 0.82 * a ? 0.008 : 0);
          return i.set(
            Math.sin(s) * d,
            u + (o.y > 0.82 * a ? 0.012 : 0),
            U(r, Math.min(u, r.torsoTop)) - Math.cos(s) * d,
          );
        },
        invert: o < 0,
      },
      {
        color: t,
        skin: (e, t, n, i, a, o) => qn(r, s, t, o),
        kind: B.cloth,
        rough: 0.8,
      },
    );
  }
}
function Fo(e, t, n, r, i = 2) {
  let a = new kt(e, t, n, i, i, i),
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
function Io(e, t, n) {
  let { b: r, m: i } = e,
    a = r.H,
    o = r.s,
    s = t.color ?? (n ? 2306639 : 2961203),
    c = t.color2 ?? X(s, 0.75),
    l = (n ? 0.28 : 0.3) * o,
    u = (n ? 0.34 : 0.4) * o,
    d = (n ? 0.1 : 0.13) * o,
    f = 0.68 * a,
    p = U(r, f) + No(e, Math.PI, f) + d / 2 + 0.01,
    m = Fo(l, u, d, 0.035 * o, e.lod === 0 ? 3 : 1);
  if (
    (i.geo(m, $(0, f, p, 0.06, 0, 0), {
      color: (e, t, n, r, i, a) => (
        a.setHex(s),
        n > p + d * 0.3 && t < f && a.setHex(c),
        t < f - u * 0.46 && a.multiplyScalar(0.8),
        a
      ),
      skin: (e, t, n, r, i, a) =>
        V(a, R.chest, R.spine, H(f, f - u * 0.5, t) * 0.4),
      kind: B.cloth,
      rough: 0.75,
    }),
    e.lod === 0)
  ) {
    let e = Fo(l * 0.75, u * 0.38, d * 0.35, 0.02 * o, 2);
    i.geo(e, $(0, f - u * 0.2, p + d * 0.55, 0.06, 0, 0), {
      color: c,
      skin: R.chest,
      kind: B.cloth,
      rough: 0.75,
    });
  }
  Po(e, X(s, 0.7), f - u * 0.35);
}
function Lo(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = n.s,
    o = t.color ?? 15217276,
    s = 0.4 * a,
    c = 0.42 * a,
    l = 0.3 * a,
    u = 0.7 * i,
    d = U(n, u) + No(e, Math.PI, u) + l / 2 + 0.012,
    f = Fo(s, c, l, 0.025 * a, e.lod === 0 ? 2 : 1);
  r.geo(f, $(0, u, d), {
    color: (e, t, n, r, i, a) => a.setHex(t > u + c * 0.46 ? X(o, 0.8) : o),
    skin: R.chest,
    kind: B.gloss,
    rough: 0.45,
  });
  let p = ki(
    e,
    ((o >> 8) & 255) > ((o >> 16) & 255) ? `rider-green` : `rider-pink`,
    16777215,
    o,
  );
  if (p) {
    let e = new Mt(s * 0.8, c * 0.8);
    r.geo(
      e,
      $(0, u, d + l / 2 + 0.002),
      {
        color: 16777215,
        skin: R.chest,
        kind: B.cloth,
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
  Po(e, 2763310, u - c * 0.3);
}
function Ro(e, t) {
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
    p = No(e, f, Math.max(d, n.torsoBottom + 0.02)) + u / 2 + 0.01,
    m = Math.sin(f) * p + 0.03 * a,
    h = U(n, d) - Math.cos(f) * p,
    g = Fo(u, l, c, (o ? 0.012 : 0.02) * a, e.lod === 0 ? 2 : 1);
  (r.geo(g, $(m, d, h, 0, 0, 0.04), {
    color: (e, t, n, r, i, a) =>
      a.setHex(s).multiplyScalar(t > d + l * 0.3 && !o ? 0.85 : 1),
    skin: (e, t, n, r, i, a) => {
      V(a, R.hips, R.chest, 0.5);
    },
    kind: o ? B.cloth : B.gloss,
    rough: o ? 0.9 : 0.4,
  }),
    zo(
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
function zo(e, t, n, r) {
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
            f = H(0.8 * o, 0.845 * o, d),
            p = No(e, l, d) + 0.005 + 0.006 * f;
          return c.set(
            Math.sin(l) * p,
            d + 0.006 * f,
            U(i, d) - Math.cos(l) * p,
          );
        },
        invert: c,
      },
      {
        color: c ? X(r, 0.7) : r,
        skin: (e, n, r, a, o, c) => qn(i, t[Math.round(o * s)][0], n, c),
        kind: B.cloth,
        rough: 0.7,
      },
    );
}
function Bo(e, t) {
  let { b: n, m: r } = e,
    i = n.s,
    a = n.joints.p[R.handL],
    o = 0.3 * i,
    s = 0.26 * i,
    c = 0.12 * i,
    l = new M(a.x - 0.02 * i, a.y - 0.09 * i - s / 2, a.z),
    u = Fo(c, s, o, 0.02 * i, e.lod === 0 ? 3 : 1),
    d = [t.color ?? 14168620, 15921902, t.color2 ?? 2772904, 15921902],
    f = Ti(e, `marketbag:${d[0]}:${d[2]}`, 128, 128, !0, Ci(d[0], d[2]));
  (r.geo(u, $(l.x, l.y, l.z), {
    color: f ? 16777215 : d[0],
    skin: R.handL,
    kind: B.gloss,
    rough: 0.5,
    part: z.lItem,
    tex: f
      ? {
          rect: f,
          mode: 1,
          uv: (e, t, n, r, i, a) => ((a[0] = r * 2), (a[1] = i * 2)),
        }
      : void 0,
  }),
    To(
      e,
      new M(l.x, l.y + s / 2, l.z - o * 0.3),
      new M(a.x, a.y - 0.06 * i, a.z),
      0.018 * i,
      d[0],
      R.handL,
    ),
    To(
      e,
      new M(l.x, l.y + s / 2, l.z + o * 0.3),
      new M(a.x, a.y - 0.06 * i, a.z),
      0.018 * i,
      d[0],
      R.handL,
    ));
}
function Vo(e, t) {
  let n = e.b.joints.p,
    r = n[t < 0 ? R.handL : R.handR],
    i = n[t < 0 ? R.fingersL : R.fingersR];
  return r
    .clone()
    .lerp(i, 0.85)
    .add(new M(-t * 0.012 * e.b.s, 0, -0.008 * e.b.s));
}
