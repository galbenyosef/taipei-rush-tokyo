// tokyo__assets__charWorker-DPNUr-Eu 42 — color
// Lines 14539-14773 of readable/tokyo__assets__charWorker-DPNUr-Eu.pretty.js (statement-aligned).
function Ho(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Vo(e, 1),
    s = 0.15 * a,
    c = 0.037 * a,
    l = 0.043 * a,
    u = t.color ?? 13081194,
    d = new jt(l, c, s, i === 0 ? 12 : 6, 1, !1),
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
    skin: R.handR,
    kind: B.gloss,
    rough: 0.2,
  });
  let p = new jt(0.0055 * a, 0.0055 * a, 0.1 * a, 5);
  n.geo(
    p,
    $(o.x + 0.02 * a, f + s / 2 + 0.035 * a, o.z + 0.004, 0.12, 0, -0.1),
    { color: t.color2 ?? 3116906, skin: R.handR, kind: B.gloss, rough: 0.3 },
  );
}
function Uo(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Vo(e, -1),
    o = Fo(0.009 * i, 0.15 * i, 0.072 * i, 0.004 * i, 1);
  n.geo(o, $(a.x + 0.015 * i, a.y, a.z - 0.01 * i, 0, 0, 0), {
    color: t.color ?? 1842466,
    skin: R.handL,
    kind: B.gloss,
    rough: 0.25,
  });
  let s = new Mt(0.066 * i, 0.138 * i);
  n.geo(
    s,
    $(a.x + 0.015 * i + 0.0048 * i, a.y, a.z - 0.01 * i, 0, Math.PI / 2, 0),
    { color: 9423103, skin: R.handL, kind: B.screen, rough: 0.1, emissive: 1 },
    !0,
  );
}
function Wo(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Vo(e, 1),
    s = 0.78 * a,
    c = t.color ?? 2842526,
    l = t.color2 ?? X(c, 0.8),
    u = new jt(0.006 * a, 0.006 * a, s, 5);
  n.geo(u, $(o.x, o.y - s / 2 + 0.05 * a, o.z), {
    color: 2763310,
    skin: R.handR,
    kind: B.metal,
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
          let i = t * uo,
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
        skin: R.handR,
        kind: B.gloss,
        rough: 0.35,
      },
    );
}
function Go(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Vo(e, 1),
    o = new At(0.1 * i, 10);
  n.geo(
    o,
    $(a.x + 0.02 * i, a.y - 0.14 * i, a.z - 0.02, 0, Math.PI / 2, 0),
    { color: t.color ?? 15852228, skin: R.handR, kind: B.cloth, rough: 0.8 },
    !0,
  );
  let s = new At(0.1 * i, 10);
  n.geo(
    s,
    $(a.x + 0.018 * i, a.y - 0.14 * i, a.z - 0.02, 0, -Math.PI / 2, 0),
    { color: t.color2 ?? 12730415, skin: R.handR, kind: B.cloth, rough: 0.8 },
    !0,
  );
  let c = new jt(0.004 * i, 0.004 * i, 0.1 * i, 4);
  n.geo(c, $(a.x + 0.02 * i, a.y - 0.03 * i, a.z - 0.02), {
    color: 6965802,
    skin: R.handR,
    kind: B.gloss,
    rough: 0.5,
  });
}
function Ko(e, t) {
  let { m: n, b: r } = e,
    i = r.arms[0],
    a = r.s,
    o = i.c.clone().lerp(i.b, 0.06),
    s = new Pt(0.029 * a, 0.006 * a, 3, 10);
  n.geo(s, $(o.x, o.y, o.z, Math.PI / 2, 0, 0.05), {
    color: t.color ?? 1579034,
    skin: R.foreL,
    kind: B.gloss,
    rough: 0.3,
  });
  let c = new jt(0.014 * a, 0.014 * a, 0.006 * a, 6);
  n.geo(c, $(o.x - 0.031 * a, o.y, o.z, 0, 0, Math.PI / 2), {
    color: t.color2 ?? 14343384,
    skin: R.foreL,
    kind: B.metal,
    rough: 0.25,
  });
}
function qo(e, t) {
  let { m: n, b: r } = e,
    i = r.H,
    a = r.s,
    o = 0.72 * i,
    s = No(e, 0, o) + 0.008,
    c = new M(0, o, U(r, o) - s),
    l = t.color ?? 2777784;
  for (let t of [-1, 1])
    To(
      e,
      new M(t * 0.06 * a, 0.845 * i, U(r, 0.845 * i) - 0.03 * a),
      c.clone().add(new M(t * 0.01, 0.045 * a, 0)),
      0.012 * a,
      l,
      R.chest,
    );
  let u = Fo(0.055 * a, 0.085 * a, 0.003, 0.004 * a, 1);
  n.geo(u, $(c.x, c.y, c.z, -0.05, 0, 0), {
    color: (e, t, n, r, i, o) => o.setHex(t > c.y + 0.02 * a ? l : 16053490),
    skin: R.chest,
    kind: B.gloss,
    rough: 0.3,
  });
}
function Jo(e, t) {
  let { m: n, b: r } = e,
    i = 0.838 * r.H,
    a = new Pt(r.neckR * 1.3, 0.0018, 3, 12);
  n.geo(a, $(0, i, U(r, i) - 0.012, Math.PI / 2 - 0.35, 0, 0), {
    color: t.color ?? 14729328,
    skin: R.chest,
    kind: B.metal,
    rough: 0.2,
  });
}
function Yo(e, t) {
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
          c = fo(s, o, r),
          l =
            Math.max(c > n.torsoBottom ? No(e, a, c) + 0.01 : 0, u(a, c)) +
            0.004 +
            (1 - r) * 0.02;
        return i.set(
          Math.sin(a) * l,
          c,
          U(n, Math.max(c, n.torsoBottom)) - Math.cos(a) * l,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, s) =>
        s.setHex(a).multiplyScalar(t > o - 0.03 ? 0.85 : 1),
      skin: (e, t, r, i, a, o) => {
        V(o, R.hips, R.hips, 0);
        let c = H(n.torsoBottom, s, t);
        jn(o, i < 0.5 ? R.thighL : R.thighR, 0.4 * c);
      },
      kind: B.cloth,
      rough: 0.85,
    },
  );
}
function Xo(e) {
  let t = e.face;
  return `face3:${e.id}:${e.skin}:${e.hair.color}:${e.hair.style}:${Object.values(t).join(`,`)}:${e.age}:${e.sex}`;
}
