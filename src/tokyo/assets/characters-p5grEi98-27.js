// tokyo/assets/characters-p5grEi98 27 — color
// Lines 7973-8207 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function Oa(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Da(e, 1),
    s = 0.15 * a,
    c = 0.037 * a,
    l = 0.043 * a,
    u = t.color ?? 13081194,
    d = new C(l, c, s, i === 0 ? 12 : 6, 1, !1),
    f = o.y + 0.02 * a;
  n.geo(d, J(o.x + 0.012 * a, f, o.z), {
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
    skin: L.handR,
    kind: z.gloss,
    rough: 0.2,
  });
  let p = new C(0.0055 * a, 0.0055 * a, 0.1 * a, 5);
  n.geo(
    p,
    J(o.x + 0.02 * a, f + s / 2 + 0.035 * a, o.z + 0.004, 0.12, 0, -0.1),
    { color: t.color2 ?? 3116906, skin: L.handR, kind: z.gloss, rough: 0.3 },
  );
}
function ka(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Da(e, -1),
    o = xa(0.009 * i, 0.15 * i, 0.072 * i, 0.004 * i, 1);
  n.geo(o, J(a.x + 0.015 * i, a.y, a.z - 0.01 * i, 0, 0, 0), {
    color: t.color ?? 1842466,
    skin: L.handL,
    kind: z.gloss,
    rough: 0.25,
  });
  let s = new f(0.066 * i, 0.138 * i);
  n.geo(
    s,
    J(a.x + 0.015 * i + 0.0048 * i, a.y, a.z - 0.01 * i, 0, Math.PI / 2, 0),
    { color: 9423103, skin: L.handL, kind: z.screen, rough: 0.1, emissive: 1 },
    !0,
  );
}
function Aa(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Da(e, 1),
    s = 0.78 * a,
    c = t.color ?? 2842526,
    l = t.color2 ?? K(c, 0.8),
    u = new C(0.006 * a, 0.006 * a, s, 5);
  n.geo(u, J(o.x, o.y - s / 2 + 0.05 * a, o.z), {
    color: 2763310,
    skin: L.handR,
    kind: z.metal,
    rough: 0.3,
  });
  let d = 0.52 * a,
    f = new D(o.x, o.y - s + 0.05 * a, o.z),
    p = i === 0 ? 16 : 8;
  for (let e of [!0, !1])
    n.grid(
      {
        nu: p,
        nv: 2,
        closed: !0,
        point: (t, n, r) => {
          let i = t * Zi,
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
        skin: L.handR,
        kind: z.gloss,
        rough: 0.35,
      },
    );
}
function ja(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Da(e, 1),
    o = new g(0.1 * i, 10);
  n.geo(
    o,
    J(a.x + 0.02 * i, a.y - 0.14 * i, a.z - 0.02, 0, Math.PI / 2, 0),
    { color: t.color ?? 15852228, skin: L.handR, kind: z.cloth, rough: 0.8 },
    !0,
  );
  let s = new g(0.1 * i, 10);
  n.geo(
    s,
    J(a.x + 0.018 * i, a.y - 0.14 * i, a.z - 0.02, 0, -Math.PI / 2, 0),
    { color: t.color2 ?? 12730415, skin: L.handR, kind: z.cloth, rough: 0.8 },
    !0,
  );
  let c = new C(0.004 * i, 0.004 * i, 0.1 * i, 4);
  n.geo(c, J(a.x + 0.02 * i, a.y - 0.03 * i, a.z - 0.02), {
    color: 6965802,
    skin: L.handR,
    kind: z.gloss,
    rough: 0.5,
  });
}
function Ma(e, t) {
  let { m: n, b: i } = e,
    a = i.arms[0],
    o = i.s,
    s = a.c.clone().lerp(a.b, 0.06),
    c = new r(0.029 * o, 0.006 * o, 3, 10);
  n.geo(c, J(s.x, s.y, s.z, Math.PI / 2, 0, 0.05), {
    color: t.color ?? 1579034,
    skin: L.foreL,
    kind: z.gloss,
    rough: 0.3,
  });
  let l = new C(0.014 * o, 0.014 * o, 0.006 * o, 6);
  n.geo(l, J(s.x - 0.031 * o, s.y, s.z, 0, 0, Math.PI / 2), {
    color: t.color2 ?? 14343384,
    skin: L.foreL,
    kind: z.metal,
    rough: 0.25,
  });
}
function Na(e, t) {
  let { m: n, b: r } = e,
    i = r.H,
    a = r.s,
    o = 0.72 * i,
    s = ya(e, 0, o) + 0.008,
    c = new D(0, o, H(r, o) - s),
    l = t.color ?? 2777784;
  for (let t of [-1, 1])
    da(
      e,
      new D(t * 0.06 * a, 0.845 * i, H(r, 0.845 * i) - 0.03 * a),
      c.clone().add(new D(t * 0.01, 0.045 * a, 0)),
      0.012 * a,
      l,
      L.chest,
    );
  let u = xa(0.055 * a, 0.085 * a, 0.003, 0.004 * a, 1);
  n.geo(u, J(c.x, c.y, c.z, -0.05, 0, 0), {
    color: (e, t, n, r, i, o) => o.setHex(t > c.y + 0.02 * a ? l : 16053490),
    skin: L.chest,
    kind: z.gloss,
    rough: 0.3,
  });
}
function Pa(e, t) {
  let { m: n, b: i } = e,
    a = 0.838 * i.H,
    o = new r(i.neckR * 1.3, 0.0018, 3, 12);
  n.geo(o, J(0, a, H(i, a) - 0.012, Math.PI / 2 - 0.35, 0, 0), {
    color: t.color ?? 14729328,
    skin: L.chest,
    kind: z.metal,
    rough: 0.2,
  });
}
function Fa(e, t) {
  let { b: n, m: r } = e,
    i = n.H,
    a = t.color ?? 2767450,
    o = 0.6 * i,
    s = 0.33 * i,
    c = e.lod === 0 ? 8 : 4,
    l = e.lod === 0 ? 6 : 3,
    u = (e, t) => {
      let r = n.legs[1].a.x,
        i = 0.095 * n.s,
        a = r + i,
        o = i * 1.15;
      return (
        1 / Math.sqrt((Math.sin(e) / a) ** 2 + (Math.cos(e) / o) ** 2) +
        0.02 +
        0 * t
      );
    };
  r.grid(
    {
      nu: c,
      nv: l,
      closed: !1,
      point: (t, r, i) => {
        let a = -1.05 + t * 1.05 * 2,
          c = Qi(s, o, r),
          l =
            Math.max(c > n.torsoBottom ? ya(e, a, c) + 0.01 : 0, u(a, c)) +
            0.004 +
            (1 - r) * 0.02;
        return i.set(
          Math.sin(a) * l,
          c,
          H(n, Math.max(c, n.torsoBottom)) - Math.cos(a) * l,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, s) =>
        s.setHex(a).multiplyScalar(t > o - 0.03 ? 0.85 : 1),
      skin: (e, t, r, i, a, o) => {
        B(o, L.hips, L.hips, 0);
        let c = V(n.torsoBottom, s, t);
        Ct(o, i < 0.5 ? L.thighL : L.thighR, 0.4 * c);
      },
      kind: z.cloth,
      rough: 0.85,
    },
  );
}
function Ia(e) {
  let t = e.face;
  return `face3:${e.id}:${e.skin}:${e.hair.color}:${e.hair.style}:${Object.values(t).join(`,`)}:${e.age}:${e.sex}`;
}
