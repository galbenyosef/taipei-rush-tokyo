// tokyo__assets__actors-Bnj6Q1ad 91 — math
// Lines 43795-44048 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var IS = (e, t, n) => {
    let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
    return r * r * (3 - 2 * r);
  },
  LS = (e) => Math.abs(Math.atan2(Math.sin(e), Math.cos(e))),
  RS = class {
    skirt;
    cx;
    cy;
    cz;
    rx;
    ry;
    rz;
    constructor(e, t, n) {
      this.skirt = n;
      let r = e.skull;
      ((this.rx = (r.max.x - r.min.x) / 2 + t),
        (this.rz = Math.max(this.rx * 1.08, (r.max.z - r.min.z) / 2 + t * 0.8)),
        (this.ry = this.rx * 0.98),
        (this.cx = (r.min.x + r.max.x) / 2),
        (this.cz = r.max.z - this.rz + t * 0.7),
        (this.cy = r.max.y + t + 0.001 - this.ry));
    }
    P(e, t, n, r) {
      let i = this.skirt && t > Math.PI / 2 ? t - Math.PI / 2 : 0,
        a = t - i;
      return r.set(
        this.cx + Math.sin(e) * Math.sin(a) * (this.rx + n),
        this.cy + Math.cos(a) * (this.ry + n) - i * this.ry,
        this.cz - Math.cos(e) * Math.sin(a) * (this.rz + n),
      );
    }
    strip(e, t, n, r, i, a, o, s = 0) {
      let c = [],
        l = [],
        u = [],
        d = e + 1,
        f = t + +!!s;
      for (let u = 0; u <= f; u++)
        for (let d = 0; d <= e; d++) {
          let f = n + ((r - n) * d) / e,
            p = i(f),
            m = a(f),
            h = Math.min(1, u / t),
            g = Math.max(0.02, p + (m - p) * h);
          (this.P(f, g, u > t ? o - s : o, _S),
            c.push(_S.x, _S.y, _S.z),
            l.push(1 - d / e, 1 - h));
        }
      for (let t = 0; t < f; t++)
        for (let n = 0; n < e; n++) {
          let e = t * d + n,
            r = e + 1,
            i = e + d,
            a = i + 1;
          u.push(e, r, i, r, a, i);
        }
      let p = new fe();
      return (
        p.setAttribute(`position`, new N(c, 3)),
        p.setAttribute(`uv`, new N(l, 2)),
        p.setIndex(u),
        p.computeVertexNormals(),
        p
      );
    }
  };
function zS(e, t, n, r, i) {
  e.P(n, r, i, _S);
  let a = Math.PI / 2 - Math.min(r, Math.PI / 2);
  return (
    xS.set(a, -n, 0, `YXZ`),
    bS.setFromEuler(xS),
    yS.compose(_S, bS, SS),
    t.applyMatrix4(yS),
    t
  );
}
function BS(e, t) {
  let n = e.lod === 0,
    r = new RS(e, 0.017, !1),
    i = (e) => {
      let t = LS(e);
      return (
        Math.PI *
        (0.49 +
          0.15 * IS(0.55, 2.7, t) -
          0.09 * Math.exp(-((t - 1.5) ** 2) / 0.12))
      );
    },
    a = e.lod === 2,
    o = n ? 28 : a ? 8 : 12,
    s = n ? 7 : a ? 3 : 4;
  if (
    (t.add(
      r.strip(o, s, 0, Math.PI * 2, () => 0, i, 0, a ? 0 : 0.012),
      `head`,
      { color: Z.helmet, kind: hS.gloss, rough: 0.48 },
    ),
    a)
  )
    return;
  let c = { color: Z.helmetRail, kind: hS.gloss, rough: 0.5 };
  for (let e of [-1, 1]) {
    let a = e * 1.52,
      o = Q(0.012, 0.02, n ? 0.1 : 0.09);
    (o.rotateX(-0.12),
      o.rotateY((Math.PI / 2) * e),
      t.add(zS(r, o, a, i(a) - 0.09, 0.006), `head`, c));
  }
  let l = (e) => Math.PI * (0.3 + 0.12 * IS(0.5, 2.7, LS(e)));
  t.add(
    r.strip(
      n ? 28 : 12,
      1,
      0,
      Math.PI * 2,
      (e) => l(e) - 0.04,
      (e) => l(e) + 0.04,
      0.0035,
    ),
    `head`,
    { color: Z.goggleStrap, kind: hS.cloth, rough: 0.85 },
  );
  let u = { color: Z.goggleLens, kind: hS.gloss, rough: 0.08 };
  if (n) {
    for (let e of [-1, 1])
      (t.add(
        zS(r, Q(0.056, 0.038, 0.016), e * 0.3, l(0) + 0.005, 0.012),
        `head`,
        { color: Z.goggleFrame, kind: hS.gloss, rough: 0.5 },
      ),
        t.add(
          zS(r, Q(0.046, 0.028, 0.006), e * 0.3, l(0) + 0.005, 0.021),
          `head`,
          u,
        ));
    t.add(zS(r, Q(0.02, 0.018, 0.012), 0, l(0) + 0.01, 0.011), `head`, {
      color: Z.goggleFrame,
      kind: hS.gloss,
      rough: 0.5,
    });
  } else t.add(zS(r, Q(0.13, 0.036, 0.02), 0, l(0) + 0.005, 0.012), `head`, u);
  if (
    (t.add(zS(r, Q(0.07, 0.04, 0.008), Math.PI, 0.95, 0.003), `head`, {
      color: Z.helmetPatch,
      kind: hS.cloth,
      rough: 0.9,
    }),
    n)
  ) {
    t.add(
      zS(r, Q(0.08, 0.045, 0.022), Math.PI, i(Math.PI) - 0.2, 0.012),
      `head`,
      { color: Z.swatPouch, kind: hS.cloth, rough: 0.85 },
    );
    for (let e of [-1, 1])
      for (let n of [-0.42, 0.38]) {
        let a = e * (1.55 + n * e);
        r.P(a, i(a) + 0.02, -0.004, _S);
        let o = Q(0.01, 0.07, 0.016);
        (o.rotateZ(e * 0.12 * Math.sign(n)),
          o.rotateY(-a),
          o.translate(_S.x, _S.y - 0.032, _S.z),
          t.add(o, `head`, { color: Z.swatBelt, kind: hS.cloth, rough: 0.8 }));
      }
  }
}
function VS(e, t, n) {
  let r = e.lod === 0,
    i = new RS(e, 0.02, !0),
    a = (e) => {
      let t = LS(e);
      return (
        Math.PI * (0.45 + 0.29 * IS(0.45, 1.35, t) - 0.04 * IS(1.7, 2.9, t))
      );
    },
    o = 0.1,
    s = e.lod === 2,
    c = r ? 32 : s ? 8 : 14,
    l = r ? 7 : s ? 3 : 4;
  (t.add(
    i.strip(
      c,
      l,
      0,
      Math.PI * 2,
      () => 0,
      (e) => a(e) - o,
      0,
    ),
    `head`,
    { color: Z.motoHelmet, kind: hS.gloss, rough: 0.2 },
  ),
    t.add(
      i.strip(c, 1, 0, Math.PI * 2, (e) => a(e) - o, a, 0.0015, 0.014),
      `head`,
      { color: Z.motoTrim, kind: hS.gloss, rough: 0.35 },
    ));
  {
    let e = r ? 12 : s ? 4 : 6,
      n = [];
    for (let t = 0; t <= e; t++) {
      let r = -0.95 + (1.9 * t) / e,
        s = a(r) - o * 0.6;
      (i.P(r, s, 0.004, _S), n.push(_S.x, _S.y, _S.z));
      let c = Math.cos((r / 0.95) * (Math.PI / 2)),
        l = 0.012 + 0.05 * c;
      n.push(
        _S.x + Math.sin(r) * l,
        _S.y - 0.004 - 0.012 * c,
        _S.z - Math.cos(r) * l,
      );
    }
    let c = [];
    for (let t = 0; t < e; t++) {
      let e = t * 2,
        n = e + 1,
        r = e + 2,
        i = e + 3;
      (c.push(e, r, n, n, r, i), c.push(e, n, r, n, i, r));
    }
    let l = new fe();
    (l.setAttribute(`position`, new N(n, 3)),
      l.setIndex(c),
      l.computeVertexNormals(),
      t.add(l, `head`, { color: Z.motoVisor, kind: hS.gloss, rough: 0.12 }));
  }
  if (r && n) {
    t.add(
      i.strip(
        8,
        3,
        -0.62,
        0.62,
        () => 0.19 * Math.PI,
        () => 0.39 * Math.PI,
        0.0012,
      ),
      `head`,
      { color: Z.motoHelmet, kind: hS.gloss, rough: 0.2, decal: n },
    );
    for (let e of [-1, 1])
      t.add(zS(i, Q(0.03, 0.012, 0.004), e * 1.9, 0.62, 0.001), `head`, {
        color: 2764600,
        kind: hS.gloss,
        rough: 0.4,
      });
  } else
    s ||
      t.add(zS(i, Q(0.06, 0.022, 0.004), 0, 0.3 * Math.PI, 0.001), `head`, {
        color: Z.motoTrim,
      });
}
