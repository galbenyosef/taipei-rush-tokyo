// tokyo__assets__bodyWorker-Bk4d3Tu3 42 — color
// Lines 14398-14710 of readable/tokyo__assets__bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
function Oo(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Do(e, 1),
    s = 0.15 * a,
    c = 0.037 * a,
    l = 0.043 * a,
    u = t.color ?? 13081194,
    d = new kt(l, c, s, i === 0 ? 12 : 6, 1, !1),
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
    skin: B.handR,
    kind: H.gloss,
    rough: 0.2,
  });
  let p = new kt(0.0055 * a, 0.0055 * a, 0.1 * a, 5);
  n.geo(
    p,
    $(o.x + 0.02 * a, f + s / 2 + 0.035 * a, o.z + 0.004, 0.12, 0, -0.1),
    { color: t.color2 ?? 3116906, skin: B.handR, kind: H.gloss, rough: 0.3 },
  );
}
function ko(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Do(e, -1),
    o = xo(0.009 * i, 0.15 * i, 0.072 * i, 0.004 * i, 1);
  n.geo(o, $(a.x + 0.015 * i, a.y, a.z - 0.01 * i, 0, 0, 0), {
    color: t.color ?? 1842466,
    skin: B.handL,
    kind: H.gloss,
    rough: 0.25,
  });
  let s = new At(0.066 * i, 0.138 * i);
  n.geo(
    s,
    $(a.x + 0.015 * i + 0.0048 * i, a.y, a.z - 0.01 * i, 0, Math.PI / 2, 0),
    { color: 9423103, skin: B.handL, kind: H.screen, rough: 0.1, emissive: 1 },
    !0,
  );
}
function Ao(e, t) {
  let { m: n, b: r, lod: i } = e,
    a = r.s,
    o = Do(e, 1),
    s = 0.78 * a,
    c = t.color ?? 2842526,
    l = t.color2 ?? X(c, 0.8),
    u = new kt(0.006 * a, 0.006 * a, s, 5);
  n.geo(u, $(o.x, o.y - s / 2 + 0.05 * a, o.z), {
    color: 2763310,
    skin: B.handR,
    kind: H.metal,
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
          let i = t * Xa,
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
        skin: B.handR,
        kind: H.gloss,
        rough: 0.35,
      },
    );
}
function jo(e, t) {
  let { m: n, b: r } = e,
    i = r.s,
    a = Do(e, 1),
    o = new Ot(0.1 * i, 10);
  n.geo(
    o,
    $(a.x + 0.02 * i, a.y - 0.14 * i, a.z - 0.02, 0, Math.PI / 2, 0),
    { color: t.color ?? 15852228, skin: B.handR, kind: H.cloth, rough: 0.8 },
    !0,
  );
  let s = new Ot(0.1 * i, 10);
  n.geo(
    s,
    $(a.x + 0.018 * i, a.y - 0.14 * i, a.z - 0.02, 0, -Math.PI / 2, 0),
    { color: t.color2 ?? 12730415, skin: B.handR, kind: H.cloth, rough: 0.8 },
    !0,
  );
  let c = new kt(0.004 * i, 0.004 * i, 0.1 * i, 4);
  n.geo(c, $(a.x + 0.02 * i, a.y - 0.03 * i, a.z - 0.02), {
    color: 6965802,
    skin: B.handR,
    kind: H.gloss,
    rough: 0.5,
  });
}
function Mo(e, t) {
  let { m: n, b: r } = e,
    i = r.arms[0],
    a = r.s,
    o = i.c.clone().lerp(i.b, 0.06),
    s = new Mt(0.029 * a, 0.006 * a, 3, 10);
  n.geo(s, $(o.x, o.y, o.z, Math.PI / 2, 0, 0.05), {
    color: t.color ?? 1579034,
    skin: B.foreL,
    kind: H.gloss,
    rough: 0.3,
  });
  let c = new kt(0.014 * a, 0.014 * a, 0.006 * a, 6);
  n.geo(c, $(o.x - 0.031 * a, o.y, o.z, 0, 0, Math.PI / 2), {
    color: t.color2 ?? 14343384,
    skin: B.foreL,
    kind: H.metal,
    rough: 0.25,
  });
}
function No(e, t) {
  let { m: n, b: r } = e,
    i = r.H,
    a = r.s,
    o = 0.72 * i,
    s = yo(e, 0, o) + 0.008,
    c = new M(0, o, G(r, o) - s),
    l = t.color ?? 2777784;
  for (let t of [-1, 1])
    uo(
      e,
      new M(t * 0.06 * a, 0.845 * i, G(r, 0.845 * i) - 0.03 * a),
      c.clone().add(new M(t * 0.01, 0.045 * a, 0)),
      0.012 * a,
      l,
      B.chest,
    );
  let u = xo(0.055 * a, 0.085 * a, 0.003, 0.004 * a, 1);
  n.geo(u, $(c.x, c.y, c.z, -0.05, 0, 0), {
    color: (e, t, n, r, i, o) => o.setHex(t > c.y + 0.02 * a ? l : 16053490),
    skin: B.chest,
    kind: H.gloss,
    rough: 0.3,
  });
}
function Po(e, t) {
  let { m: n, b: r } = e,
    i = 0.838 * r.H,
    a = new Mt(r.neckR * 1.3, 0.0018, 3, 12);
  n.geo(a, $(0, i, G(r, i) - 0.012, Math.PI / 2 - 0.35, 0, 0), {
    color: t.color ?? 14729328,
    skin: B.chest,
    kind: H.metal,
    rough: 0.2,
  });
}
function Fo(e, t) {
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
          c = Za(s, o, r),
          l =
            Math.max(c > n.torsoBottom ? yo(e, a, c) + 0.01 : 0, u(a, c)) +
            0.004 +
            (1 - r) * 0.02;
        return i.set(
          Math.sin(a) * l,
          c,
          G(n, Math.max(c, n.torsoBottom)) - Math.cos(a) * l,
        );
      },
      invert: !0,
    },
    {
      color: (e, t, n, r, i, s) =>
        s.setHex(a).multiplyScalar(t > o - 0.03 ? 0.85 : 1),
      skin: (e, t, r, i, a, o) => {
        U(o, B.hips, B.hips, 0);
        let c = W(n.torsoBottom, s, t);
        On(o, i < 0.5 ? B.thighL : B.thighR, 0.4 * c);
      },
      kind: H.cloth,
      rough: 0.85,
    },
  );
}
const Io = { x: 0, y: 0, w: 1, h: 1 };
function Lo(e) {
  let t = e.joints.p;
  for (let n of [-1, 1]) {
    let r = n < 0 ? 0 : 1,
      i = n < 0 ? B.thighL : B.thighR,
      a = n < 0 ? B.shinL : B.shinR,
      o = n < 0 ? B.footL : B.footR;
    (t[i].set(n * 0.095, 0.92, 0),
      t[a].set(n * 0.095, 0.5, -0.006),
      t[o].set(n * 0.095, 0.086, 0.012));
    let s = n < 0 ? B.armL : B.armR,
      c = n < 0 ? B.foreL : B.foreR,
      l = n < 0 ? B.handL : B.handR,
      u = n < 0 ? B.fingersL : B.fingersR;
    (t[s].set(n * 0.205, 1.4, 0),
      t[c].set(n * 0.215, 1.115, 0.012),
      t[l].set(n * 0.222, 0.865, -0.01),
      t[u]
        .copy(t[l])
        .add(new M(n * 0.004, -0.098 * (e.female ? 0.93 : 1), -0.004)));
    let d = e.arms[r],
      f = e.legs[r];
    (d.a.copy(t[s]),
      d.b.copy(t[c]),
      d.c.copy(t[l]),
      f.a.copy(t[i]),
      f.b.copy(t[a]),
      f.c.copy(t[o]));
  }
}
function Ro(e, t, n) {
  let r = { ...e, height: 1.72 },
    i = Vn(r);
  Lo(i);
  let a = er(r, i),
    o = Ai(r, i),
    s = new Tn();
  ((s.blank = un), (s.textured = n));
  let c = r.seed >>> 0 || 1,
    l = {
      desc: r,
      b: i,
      h: a,
      m: s,
      lod: t,
      atlas: null,
      page: null,
      rnd: () => ((c = (c * 1664525 + 1013904223) >>> 0), c / 4294967296),
      nT: t === 0 ? 16 : 8,
      nL: t === 0 ? 10 : 6,
      fit: o,
    };
  return (
    Rr({ m: s, h: a, b: i, lod: t, skin: r.skin, faceRect: n ? Io : null }),
    za(l, io(r.acc)),
    Zi(l),
    oa(l),
    ga(l),
    ua(l),
    xa(l),
    co(l),
    { m: s, b: i, h: a, desc: r }
  );
}
function zo(e) {
  let t = JSON.parse(JSON.stringify(e));
  return (
    (t.top.color = 16711680),
    (t.bottom.color = 65280),
    t.outer && (t.outer.color = 255),
    t
  );
}
const Bo = /* @__PURE__ */ new Float32Array(16),
  Vo = new N();
function Ho(e, t, n) {
  return Wo(Uo(e, t), n);
}
function Uo(e, t) {
  return { desc: e, lod: t, A: Ro(e, t, t === 0) };
}
