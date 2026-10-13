// tokyo__assets__region-tokyo-bodyWorker-CtngWad2 44 — math
// Lines 15145-15374 of readable/tokyo__assets__region-tokyo-bodyWorker-CtngWad2.pretty.js (statement-aligned).
function qo(e, t, n, r, i) {
  let { h: a, b: o, m: s, lod: c } = e,
    l = a.hh / 0.23,
    u = Io(a, Math.PI, 0.3, 0.004 * l, new M());
  o.joints.p[z.hair].copy(u);
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
        let i = e * Do,
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
              .lerp(Ho.setHex(n), U(0.3, 1, l))
              .multiplyScalar(l < 0.1 ? 0.8 : 1);
      },
      skin: (e, t, n, r, i, a) =>
        H(a, z.head, z.hair, U(0.05, 0.3, f[Math.round(i * p)])),
      kind: V.hair,
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
function Jo(e, t, n, r) {
  let { h: i, m: a, lod: o } = e,
    s = i.hh / 0.23,
    c = Io(i, Math.PI, 0.2, 0.03 * s, new M()),
    l = new Pt(0.042 * s, o === 0 ? 10 : 6, o === 0 ? 7 : 4);
  (l.scale(1, 0.85, 0.8),
    a.geo(l, new ye().makeTranslation(c.x, c.y, c.z), {
      color: (e, n, r, i, a, o) =>
        o.setHex(t).multiplyScalar(0.85 + 0.2 * U(c.y - 0.03, c.y + 0.03, n)),
      skin: z.head,
      kind: V.hair,
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
function Yo(e, t, n, r) {
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
    (Io(i, t, p, n(t, p) * 0.7, c),
      Io(i, t, p, n(t, p) * 0.7 + 0.03 * o, l),
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
    let _ = new Dt();
    (_.setAttribute(`position`, new I(g, 3)),
      a.geo(_, null, {
        color: (e, t, n, i, a, o) =>
          o.setHex(r).multiplyScalar(t > c.y + 0.01 ? 1.1 : 0.8),
        skin: z.head,
        kind: V.hair,
        rough: 0.5,
      }));
  }
}
const Xo = { x: 0, y: 0, w: 1, h: 1 };
function Zo(e) {
  let t = e.joints.p;
  for (let n of [-1, 1]) {
    let r = n < 0 ? 0 : 1,
      i = n < 0 ? z.thighL : z.thighR,
      a = n < 0 ? z.shinL : z.shinR,
      o = n < 0 ? z.footL : z.footR;
    (t[i].set(n * 0.095, 0.92, 0),
      t[a].set(n * 0.095, 0.5, -0.006),
      t[o].set(n * 0.095, 0.086, 0.012));
    let s = n < 0 ? z.armL : z.armR,
      c = n < 0 ? z.foreL : z.foreR,
      l = n < 0 ? z.handL : z.handR,
      u = n < 0 ? z.fingersL : z.fingersR;
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
function Qo(e, t, n) {
  let r = { ...e, height: 1.72 },
    i = qr(r);
  Zo(i);
  let a = Bn(r, i),
    o = Mi(r, i),
    s = new On();
  ((s.blank = pn), (s.textured = n));
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
    wr({ m: s, h: a, b: i, lod: t, skin: r.skin, faceRect: n ? Xo : null }),
    zo(l, Ca(r.acc)),
    $i(l),
    ca(l),
    go(l),
    fa(l),
    xo(l),
    Da(l),
    { m: s, b: i, h: a, desc: r }
  );
}
function $o(e) {
  let t = JSON.parse(JSON.stringify(e));
  return (
    (t.top.color = 16711680),
    (t.bottom.color = 65280),
    t.outer && (t.outer.color = 255),
    t
  );
}
const es = /* @__PURE__ */ new Float32Array(16),
  ts = new N();
function ns(e, t, n) {
  return is(rs(e, t), n);
}
function rs(e, t) {
  return { desc: e, lod: t, A: Qo(e, t, t === 0) };
}
