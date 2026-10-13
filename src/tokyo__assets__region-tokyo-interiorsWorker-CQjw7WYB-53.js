// tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB 53 — math
// Lines 21753-21904 of readable/tokyo__assets__region-tokyo-interiorsWorker-CQjw7WYB.pretty.js (statement-aligned).
function Lc(e, t, n, r, i) {
  let { h: a, b: o, m: s, lod: c } = e,
    l = a.hh / 0.23,
    u = Cc(a, Math.PI, 0.3, 0.004 * l, new N());
  o.joints.p[R.hair].copy(u);
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
    g = new N(),
    _ = new N(),
    v = new N(),
    y = new N(1, 0, 0),
    b = new N(),
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
        let i = e * mc,
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
              .lerp(Mc.setHex(n), V(0.3, 1, l))
              .multiplyScalar(l < 0.1 ? 0.8 : 1);
      },
      skin: (e, t, n, r, i, a) =>
        Zr(a, R.head, R.hair, V(0.05, 0.3, f[Math.round(i * p)])),
      kind: B.hair,
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
function Rc(e, t, n, r) {
  let { h: i, m: a, lod: o } = e,
    s = i.hh / 0.23,
    c = Cc(i, Math.PI, 0.2, 0.03 * s, new N()),
    l = new Kn(0.042 * s, o === 0 ? 10 : 6, o === 0 ? 7 : 4);
  (l.scale(1, 0.85, 0.8),
    a.geo(l, new Ce().makeTranslation(c.x, c.y, c.z), {
      color: (e, n, r, i, a, o) =>
        o.setHex(t).multiplyScalar(0.85 + 0.2 * V(c.y - 0.03, c.y + 0.03, n)),
      skin: R.head,
      kind: B.hair,
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
function zc(e, t, n, r) {
  let { h: i, m: a } = e,
    o = i.hh / 0.23,
    s = (t) => {
      let n = Math.sin(t * 91.7 + e.desc.seed) * 43758.5453;
      return n - Math.floor(n);
    },
    c = new N(),
    l = new N(),
    u = new N(),
    d = new N(),
    f = new N();
  for (let e = 0; e < t; e++) {
    let t = (s(e) * 2 - 1) * Math.PI * 0.9,
      p = 0.04 + s(e + 50) * 0.26;
    (Cc(i, t, p, n(t, p) * 0.7, c),
      Cc(i, t, p, n(t, p) * 0.7 + 0.03 * o, l),
      u.subVectors(l, c).normalize(),
      l
        .copy(c)
        .addScaledVector(u, (0.022 + 0.018 * s(e + 9)) * o)
        .add(new N(0, 0.006 * o, 0.012 * o)),
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
    let _ = new Xt();
    (_.setAttribute(`position`, new Rt(g, 3)),
      a.geo(_, null, {
        color: (e, t, n, i, a, o) =>
          o.setHex(r).multiplyScalar(t > c.y + 0.01 ? 1.1 : 0.8),
        skin: R.head,
        kind: B.hair,
        rough: 0.5,
      }));
  }
}
function Bc(e) {
  let t = e.face;
  return `face3:${e.id}:${e.skin}:${e.hair.color}:${e.hair.style}:${Object.values(t).join(`,`)}:${e.age}:${e.sex}`;
}
