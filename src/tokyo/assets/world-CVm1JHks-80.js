// tokyo/assets/world-CVm1JHks 80 — math
// Lines 26945-27288 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function Ag(e = 4) {
  let t = document.createElement(`canvas`);
  ((t.width = Cg), (t.height = wg));
  let n = t.getContext(`2d`);
  (n.clearRect(0, 0, Cg, wg),
    (n.fillStyle = `#fff`),
    n.fillRect(496, 0, 16, 16));
  let r = new ke(986711);
  for (let e = 0; e < 3; e++) {
    let t = e === 0 ? 190 : e === 1 ? 280 : 170,
      i = e === 0 ? 74 : e === 1 ? 102 : 110;
    for (let a = 0; a < t; a++) {
      let t = r.range(0, Math.PI * 2),
        a = Math.sqrt(r.next()) * i,
        o = 120 + Math.cos(t) * a,
        s = 132 + Math.sin(t) * a * 0.9,
        c = r.range(10, 18),
        l = c * r.range(0.36, 0.5),
        u = (1 - s / 256) * 0.55 + (1 - o / 240) * 0.2,
        d =
          (e === 0 ? 0.5 : e === 1 ? 0.75 : 0.97) *
          (0.72 + u * 0.5) *
          r.range(0.85, 1.12),
        f = r.range(-12, 12);
      (n.save(),
        n.translate(o, s),
        n.rotate(r.range(0, Math.PI * 2)),
        (n.fillStyle = `rgb(${Math.round((196 + f) * d)},${Math.round(232 * d)},${Math.round((168 - f * 0.6) * d)})`),
        n.beginPath(),
        n.ellipse(0, 0, c / 2, l / 2, 0, 0, Math.PI * 2),
        n.fill(),
        (n.strokeStyle = `rgba(255,255,235,${0.1 + u * 0.12})`),
        (n.lineWidth = 1),
        n.beginPath(),
        n.moveTo(-c * 0.4, 0),
        n.lineTo(c * 0.4, 0),
        n.stroke(),
        n.restore());
    }
  }
  for (let e = 0; e < 2; e++) {
    let t = e === 0 ? 16 : 22;
    for (let i = 0; i < t; i++) {
      let t = r.range(0, Math.PI * 2),
        i = r.range(0, 40),
        a = 376 + Math.cos(t) * i,
        o = 132 + Math.sin(t) * i,
        s = t + r.range(-0.6, 0.6),
        c = r.range(50, 95),
        l = e === 0 ? 0.55 : 0.9;
      ((n.strokeStyle = `rgba(70,60,45,${e === 0 ? 0.5 : 0.8})`),
        (n.lineWidth = 1.2),
        n.beginPath(),
        n.moveTo(a, o),
        n.lineTo(a + Math.cos(s) * c, o + Math.sin(s) * c),
        n.stroke());
      let u = Math.round(c / 3.2);
      for (let e = 0; e < u; e++) {
        let t = (e + 0.5) / u,
          i = a + Math.cos(s) * c * t,
          d = o + Math.sin(s) * c * t;
        for (let e of [-1, 1]) {
          let a = s + e * r.range(0.5, 0.9),
            o = r.range(9, 15) * (1 - t * 0.35),
            c =
              l *
              (0.72 + ((1 - d / 256) * 0.5 + 0.25) * 0.5) *
              r.range(0.85, 1.1);
          (n.save(),
            n.translate(i + Math.cos(a) * o * 0.5, d + Math.sin(a) * o * 0.5),
            n.rotate(a),
            (n.fillStyle = `rgb(${Math.round(176 * c)},${Math.round(224 * c)},${Math.round(176 * c)})`),
            n.beginPath(),
            n.ellipse(0, 0, o / 2, 1.7, 0, 0, Math.PI * 2),
            n.fill(),
            n.restore());
        }
      }
    }
  }
  ((n.fillStyle = `rgb(58,74,48)`), n.fillRect(0, 258, Cg, 60));
  for (let e = 0; e < 2600; e++) {
    let e = r.range(0, Cg),
      t = r.range(259, 317),
      i = r.range(3, 6),
      a = i * r.range(0.35, 0.5),
      o = r.range(0.55, 1.05);
    (n.save(),
      n.translate(e, t),
      n.rotate(r.range(0, Math.PI * 2)),
      (n.fillStyle = `rgb(${Math.round(150 * o)},${Math.round(186 * o)},${Math.round(128 * o)})`),
      n.beginPath(),
      n.ellipse(0, 0, i / 2, a / 2, 0, 0, Math.PI * 2),
      n.fill(),
      n.restore());
  }
  let i = new W(t);
  return (
    (i.name = `env-forest-leaves`),
    (i.colorSpace = y),
    (i.premultiplyAlpha = !0),
    (i.generateMipmaps = !0),
    (i.minFilter = se),
    (i.magFilter = ce),
    (i.anisotropy = Math.min(4, e)),
    (i.needsUpdate = !0),
    i
  );
}
var jg = class {
    pos = [];
    nrm = [];
    col = [];
    uv = [];
    idx = [];
    get n() {
      return this.pos.length / 3;
    }
    build() {
      let e = new z();
      return (
        e.setAttribute(`position`, new M(this.pos, 3)),
        e.setAttribute(`normal`, new M(this.nrm, 3)),
        e.setAttribute(`color`, new M(this.col, 3)),
        e.setAttribute(`uv`, new M(this.uv, 2)),
        e.setIndex(this.idx),
        e.computeBoundingSphere(),
        e
      );
    }
  },
  Mg = (e, t, n) => {
    let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
    return r - Math.floor(r);
  },
  Ng = new U(),
  Pg = new U(),
  Fg = new U(),
  Ig = new U(),
  Lg = new U(),
  Rg = new U(),
  zg = new U(),
  Bg = new U(),
  Vg = new E();
function Hg(e, t) {
  let [n, r, i] = t.centre,
    a = 1 / 0,
    o = -1 / 0;
  for (let e of t.lobes)
    ((a = Math.min(a, e.c[1] - e.r[1])), (o = Math.max(o, e.c[1] + e.r[1])));
  let s = 0.12 * (o - a),
    c = (e, a, o, c) => c.set(e - n, (a - r) * t.ny + s, o - i).normalize();
  for (let n = 0; n < t.lobes.length; n++) {
    let r = t.lobes[n],
      i = new S(1, 0);
    (i.rotateY(Mg(t.seed, n, 9) * 6.28),
      i.scale(r.r[0] * 0.56, r.r[1] * 0.52, r.r[2] * 0.56),
      i.translate(r.c[0], r.c[1] - r.r[1] * 0.05, r.c[2]));
    let s = i.toNonIndexed().attributes.position,
      l = e.n;
    for (let r = 0; r < s.count; r++) {
      let i = s.getX(r),
        u = s.getY(r),
        d = s.getZ(r);
      (e.pos.push(i, u, d), c(i, u, d, Pg), e.nrm.push(Pg.x, Pg.y, Pg.z));
      let f = (u - a) / Math.max(0.01, o - a);
      (Vg.copy(t.bottom)
        .lerp(t.top, 0.25 + 0.75 * f)
        .multiplyScalar(0.8 / kg),
        e.col.push(Vg.r, Vg.g, Vg.b));
      let p = Math.floor(r / 3),
        m = r % 3,
        h = 0.02 + Mg(t.seed, n * 131 + p, 10) * 0.8,
        g = Og[0],
        _ = Og[1] - Og[0];
      (e.uv.push(
        m === 0 ? h : m === 1 ? h + 0.16 : h + 0.08,
        m === 2 ? g + _ : g,
      ),
        e.idx.push(l + r));
    }
  }
  let [l, u, d, f] = t.uv,
    p = [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ];
  for (let s = 0; s < t.lobes.length; s++) {
    let m = t.lobes[s];
    for (let h = 0; h < m.cards; h++) {
      let g = Mg(t.seed, s * 97 + h, 1),
        _ = Mg(t.seed, s * 97 + h, 2),
        v = Mg(t.seed, s * 97 + h, 3),
        y = g * Math.PI * 2,
        b = Math.acos(1 - 1.85 * _),
        x = 0.62 + v * 0.4;
      (Ng.set(
        m.c[0] + Math.sin(b) * Math.cos(y) * m.r[0] * x,
        m.c[1] + Math.cos(b) * m.r[1] * x,
        m.c[2] + Math.sin(b) * Math.sin(y) * m.r[2] * x,
      ),
        Pg.set(
          Ng.x - n + (Mg(t.seed, s * 97 + h, 11) - 0.5) * 1.4 * m.r[0],
          (Ng.y - r) * 0.45 * t.ny,
          Ng.z - i + (Mg(t.seed, s * 97 + h, 12) - 0.5) * 1.4 * m.r[2],
        ).normalize(),
        Lg.set(Mg(t.seed, h, 4) - 0.5, 1, Mg(t.seed, h, 5) - 0.5).normalize(),
        Fg.crossVectors(Lg, Pg),
        Fg.lengthSq() < 1e-6 && Fg.set(1, 0, 0),
        Fg.normalize(),
        Ig.crossVectors(Pg, Fg).normalize());
      let S = Mg(t.seed, s * 97 + h, 6) * Math.PI * 2,
        C = Math.cos(S),
        w = Math.sin(S);
      (Rg.copy(Fg).multiplyScalar(C).addScaledVector(Ig, w),
        zg.copy(Ig).multiplyScalar(C).addScaledVector(Fg, -w));
      let T = (Mg(t.seed, h, 7) - 0.5) * 0.7;
      zg.addScaledVector(Pg, T).normalize();
      let E = m.size * (0.8 + Mg(t.seed, s * 97 + h, 8) * 0.45),
        D = (Ng.y - a) / Math.max(0.01, o - a),
        O =
          (0.62 + 0.38 * Math.min(1, D * 1.15)) *
          (0.74 + 0.26 * ((x - 0.62) / 0.4)),
        k = 0.9 + Mg(t.seed, h, 9) * 0.2;
      Vg.copy(t.bottom)
        .lerp(t.top, Math.min(1, D * 0.7 + 0.3))
        .multiplyScalar((O * k) / kg);
      let A = e.n;
      for (let [t, n] of p) {
        let r = Ng.x + (Rg.x * t + zg.x * n) * E * 0.5,
          i = Ng.y + (Rg.y * t + zg.y * n) * E * 0.5,
          a = Ng.z + (Rg.z * t + zg.z * n) * E * 0.5;
        (e.pos.push(r, i, a),
          c(r, i, a, Bg),
          e.nrm.push(Bg.x, Bg.y, Bg.z),
          e.col.push(Vg.r, Vg.g, Vg.b),
          e.uv.push(l + ((t + 1) / 2) * (d - l), u + ((n + 1) / 2) * (f - u)));
      }
      e.idx.push(A, A + 1, A + 2, A, A + 2, A + 3);
    }
  }
}
function Ug(e, t, n, r, i, a, o, s, c, l, d, f) {
  let p = new U(t, n, r),
    m = new U(i, a, o),
    h = p.distanceTo(m),
    g = new le(c, s, h, l, 1, !0);
  (g.applyQuaternion(
    new u().setFromUnitVectors(new U(0, 1, 0), m.clone().sub(p).normalize()),
  ),
    g.translate((t + i) / 2, (n + a) / 2, (r + o) / 2));
  let _ = g.attributes.position,
    v = g.attributes.normal,
    y = e.n;
  for (let t = 0; t < _.count; t++) {
    (e.pos.push(_.getX(t), _.getY(t), _.getZ(t)),
      e.nrm.push(v.getX(t), v.getY(t), v.getZ(t)));
    let r = Math.min(
      1,
      Math.max(
        0,
        (_.getY(t) - Math.min(n, a)) / Math.max(0.01, Math.abs(a - n)),
      ),
    );
    (Vg.copy(f).lerp(d, r),
      e.col.push(Vg.r, Vg.g, Vg.b),
      e.uv.push(Tg[0], Tg[1]));
  }
  let b = g.index.array;
  for (let t = 0; t < b.length; t++) e.idx.push(y + b[t]);
}
var Wg = new E(0.25, 0.19, 0.13),
  Gg = new E(0.16, 0.12, 0.085);
function Kg() {
  let e = new E(0.19, 0.29, 0.075),
    t = new E(0.045, 0.08, 0.03),
    n = new E(0.12, 0.22, 0.07),
    r = new E(0.03, 0.062, 0.026),
    i = new jg();
  (Ug(i, 0, -0.1, 0, 0, 4.5, 0, 0.42, 0.26, 6, Wg, Gg),
    Ug(i, 0, 3.6, 0, 2.3, 5, 1.1, 0.2, 0.1, 5, Wg, Gg),
    Ug(i, 0, 3.9, 0, -1.9, 5.3, -1.4, 0.18, 0.09, 5, Wg, Gg),
    Hg(i, {
      centre: [0.2, 5.6, -0.1],
      ny: 1.1,
      top: e,
      bottom: t,
      uv: Eg,
      seed: 11,
      lobes: [
        { c: [0, 6.3, 0], r: [4.4, 3.7, 4.4], cards: 36, size: 2.7 },
        { c: [3, 4.6, 1.5], r: [3.2, 2.7, 3.2], cards: 18, size: 2.3 },
        { c: [-2.4, 5, -1.9], r: [2.9, 2.5, 2.9], cards: 17, size: 2.2 },
      ],
    }),
    Hg(i, {
      centre: [1.6, 0.8, -2.6],
      ny: 1.2,
      top: n,
      bottom: r,
      uv: Eg,
      seed: 23,
      lobes: [{ c: [1.6, 1, -2.6], r: [1.7, 1.2, 1.7], cards: 9, size: 1.35 }],
    }));
  let a = new jg();
  return (
    Ug(a, 0, -0.1, 0, 0, 7.6, 0, 0.34, 0.18, 6, Wg, Gg),
    Hg(a, {
      centre: [0.1, 7.6, 0],
      ny: 0.55,
      top: n,
      bottom: r,
      uv: Dg,
      seed: 37,
      lobes: [
        { c: [0, 9, 0], r: [2.3, 4.6, 2.3], cards: 22, size: 2 },
        { c: [0.3, 5.6, -0.2], r: [2.9, 3.2, 2.9], cards: 18, size: 2.2 },
      ],
    }),
    [i.build(), a.build()]
  );
}
function qg() {
  let e = new E(0.15, 0.25, 0.07),
    t = new E(0.035, 0.07, 0.028),
    n = new jg();
  return (
    Hg(n, {
      centre: [0, 0.6, 0],
      ny: 1.2,
      top: e,
      bottom: t,
      uv: Eg,
      seed: 53,
      lobes: [
        { c: [0, 0.85, 0], r: [1.5, 1, 1.5], cards: 11, size: 1.35 },
        { c: [0.9, 0.55, 0.6], r: [0.9, 0.65, 0.9], cards: 5, size: 1.05 },
      ],
    }),
    n.build()
  );
}
