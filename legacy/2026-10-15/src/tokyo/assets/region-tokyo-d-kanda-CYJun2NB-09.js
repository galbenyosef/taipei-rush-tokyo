// tokyo/assets/region-tokyo-d-kanda-CYJun2NB 09 — setmaterial
// Lines 2848-3195 of readable/tokyo/assets/region-tokyo-d-kanda-CYJun2NB.pretty.js (statement-aligned).
function Tt(e, t, n, r) {
  let i = { x0: gt, x1: _t, z0: t.z0, z1: t.z1 },
    a = he(i, `W`),
    o = n.white(),
    s = n.uv(`old:boards:${t.wood}`),
    c = n.uv(`old:kawara`),
    l = xt(t),
    u = parseInt(t.wood.slice(1), 16);
  (e.setMaterial(0.9, 0, 0, 0), D(e, 16777215, 0.85));
  for (let n of [`N`, `S`, `E`]) {
    if (n === `S` && t.cornerS) continue;
    let r = he(i, n);
    L(e, r, 0, r.L, 0, l, 0, s);
  }
  ((t.cornerS ? [a, he(i, `S`)] : [a]).forEach((i, a) => {
    let d = a === 0;
    (e.setMaterial(0.35, 0, 0.18, 17),
      D(e, 16777215),
      L(e, i, 0.25, i.L - 0.25, 0, 3.05, -0.5, n.uv(`shop:${t.kind}:0`)),
      e.setMaterial(0.7, 0, 0.25, wt | 16));
    let f = n.uv(`old:lattice`),
      p = d ? [i.L / 2 - 1, i.L / 2 + 1] : [-1, -1],
      m = Math.max(2, Math.round(i.L / 1.8));
    for (let t = 0; t < m; t++) {
      let n = (i.L * t) / m + 0.25 * (t === 0),
        r = (i.L * (t + 1)) / m - 0.25 * (t === m - 1),
        a = (n + r) / 2;
      (a > p[0] && a < p[1]) || L(e, i, n, r, 0, 3.05, -0.15, f);
    }
    (e.setMaterial(0.8, 0, 0, 0), D(e, u, 0.8));
    for (let t of [0, i.L]) {
      let [n, r] = I(i, t, 0),
        [a, s] = I(i, t, -0.5);
      t === 0
        ? e.quad(
            n,
            0,
            r,
            a,
            0,
            s,
            a,
            3.05,
            s,
            n,
            3.05,
            r,
            o.u0,
            o.v0,
            o.u1,
            o.v1,
          )
        : e.quad(
            a,
            0,
            s,
            n,
            0,
            r,
            n,
            3.05,
            r,
            a,
            3.05,
            s,
            o.u0,
            o.v0,
            o.u1,
            o.v1,
          );
    }
    (D(e, 16777215, 0.9),
      L(e, i, 0, i.L, 3.05, 3.4499999999999997, 0, s),
      D(e, u, 0.7));
    for (let t of [0.12, i.L - 0.12]) {
      let [n, r] = I(i, t, 0.08);
      j(e, n, r, 0, l, 0.12, 0.12, i.nx, i.nz, o);
    }
    for (let n = 0; n < t.floors; n++) {
      let r = n === 0 ? yt : yt + n * bt;
      if (n === t.floors - 1) break;
      (e.setMaterial(0.75, 0, 0, 0), D(e, 16777215));
      let [a, s] = I(i, -0.2, 0),
        [l, d] = I(i, i.L + 0.2, 0),
        [f, p] = I(i, i.L + 0.2, 1),
        [m, h] = I(i, -0.2, 1);
      (e.quad(
        m,
        r - 0.35,
        h,
        f,
        r - 0.35,
        p,
        l,
        r + 0.05,
        d,
        a,
        r + 0.05,
        s,
        c.u0,
        c.v0,
        c.u1,
        c.v1,
      ),
        D(e, u, 0.6),
        e.quad(
          a,
          r + 0.03,
          s,
          l,
          r + 0.03,
          d,
          f,
          r - 0.37,
          p,
          m,
          r - 0.37,
          h,
          o.u0,
          o.v0,
          o.u1,
          o.v1,
        ),
        D(e, 2762274));
      let [g, _] = I(i, -0.2, 1),
        [v, y] = I(i, i.L + 0.2, 1);
      e.quad(
        g,
        r - 0.47,
        _,
        v,
        r - 0.47,
        y,
        v,
        r - 0.33,
        y,
        g,
        r - 0.33,
        _,
        o.u0,
        o.v0,
        o.u1,
        o.v1,
      );
    }
    for (let a = 1; a < t.floors; a++) {
      let c = yt + (a - 1) * bt,
        l = c + bt;
      (e.setMaterial(0.9, 0, 0, 0),
        D(e, 16777215),
        L(e, i, 0, i.L, c, c + 0.75, 0, s),
        L(e, i, 0, i.L, l - 0.45, l, 0, s),
        e.setMaterial(0.5, 0, 0.2, wt | 16),
        D(e, 16777215),
        L(e, i, 0.3, i.L - 0.3, c + 0.75, l - 0.45, -0.25, n.uv(`old:shoji`)),
        e.setMaterial(0.9, 0, 0, 0),
        D(e, u, 0.85),
        L(e, i, 0, 0.3, c + 0.75, l - 0.45, 0, s),
        L(e, i, i.L - 0.3, i.L, c + 0.75, l - 0.45, 0, s));
      let d = 0.4,
        f = c + 0.05,
        p = c + 0.8;
      D(e, u, 0.75);
      let [m, h] = I(i, 0.3, d),
        [g, _] = I(i, i.L - 0.3, d);
      (P(e, m, p, h, g, p, _, 0.04, o),
        P(e, m, f + 0.12, h, g, f + 0.12, _, 0.03, o));
      let v = i.L - 0.6;
      if (t.rail === `diamond` && r > 0) {
        let t = p - (f + 0.12);
        for (let n = -t; n < v; n += 0.32) {
          let r = Math.max(0, n),
            a = Math.min(v, n + t),
            s = f + 0.12 + (r - n),
            c = f + 0.12 + (a - n),
            [l, u] = I(i, 0.3 + r, d),
            [p, m] = I(i, 0.3 + a, d);
          P(e, l, s, u, p, c, m, 0.018, o);
          let [h, g] = I(i, 0.3 + v - r, d),
            [_, y] = I(i, 0.3 + v - a, d);
          P(e, h, s, g, _, c, y, 0.018, o);
        }
      } else {
        let t = Math.max(4, Math.round(v / (r > 0 ? 0.14 : 0.3)));
        for (let n = 0; n <= t; n++) {
          let [r, a] = I(i, 0.3 + (v * n) / t, d);
          P(e, r, f + 0.12, a, r, p, a, 0.016, o);
        }
      }
      for (let t of [0.3, i.L - 0.3]) {
        let [n, r] = I(i, t, d);
        P(e, n, f - 0.1, r, n, p + 0.02, r, 0.05, o);
      }
    }
  }),
    e.setMaterial(0.7, 0, 0, 0),
    D(e, 16777215),
    F(e, i.x0, i.z0, i.x1, i.z1, l, t.floors === 3 ? 2 : 2.3, `z`, c, !0, 0.75),
    D(e, 2762790));
  {
    let n = (i.x0 + i.x1) / 2,
      r = t.floors === 3 ? 2 : 2.3,
      a = Math.min((i.x1 - i.x0 + 1.5) / 2, (i.z1 - i.z0 + 1.5) / 2 - 0.1);
    j(
      e,
      n,
      (i.z0 + i.z1) / 2,
      l + r - 0.05,
      l + r + 0.22,
      0.14,
      Math.max(0.2, (i.z1 - i.z0 + 1.5) / 2 - a),
      1,
      0,
      o,
    );
  }
  let d = n.uv(U(t.board));
  if ((e.setMaterial(0.6, 0, 0, 0), D(e, 16777215), t.boardAt === `eave`)) {
    let t = Math.min(a.L - 0.6, 4.6),
      n = t / 4,
      [r, i] = I(a, a.L / 2, 0.55);
    (j(
      e,
      r,
      i,
      3.4499999999999997,
      3.4499999999999997 + n,
      t / 2,
      0.06,
      a.nx,
      a.nz,
      o,
      d,
      d,
    ),
      D(e, 2762274),
      j(
        e,
        r,
        i,
        3.4499999999999997 + n,
        3.6 + n,
        t / 2 + 0.15,
        0.22,
        a.nx,
        a.nz,
        o,
      ));
  } else {
    let t = Math.min(a.L - 1, 3),
      n = t / 4;
    L(e, a, a.L / 2 - t / 2, a.L / 2 + t / 2, 3.03 - n, 3.03, 0.14, d);
  }
  return (
    e.setMaterial(0.6, 0.3, 0, 0),
    D(e, 16777215),
    L(e, a, 0.28, 0.78, 1.35, 1.55, 0.14, n.uv(`old:rekiken`)),
    (t.lanterns ?? []).forEach((t, r, i) => {
      let o = i.length === 1 ? a.L - 0.9 : r === 0 ? 0.9 : a.L - 0.9,
        [s, c] = I(a, o, 0.6);
      (e.setMaterial(0.6, 0, 0.4, wt),
        D(e, 16777215),
        fe(
          e,
          s,
          c,
          2.2,
          2.9499999999999997,
          0.22,
          n.uv(`chochinw:${t.key}:${t.body}`),
        ));
    }),
    l
  );
}
function Et(e, t, n) {
  let r = he({ x0: gt, x1: _t, z0: t.z0, z1: t.z1 }, `W`);
  (e.setMaterial(0.9, 0, 0, 16),
    D(e, 16777215),
    L(
      e,
      r,
      r.L / 2 - 1,
      r.L / 2 + 1,
      1.95,
      3.04,
      0.06,
      n.uv(`noren:${t.noren.key}:${t.noren.bg}`),
    ));
}
function Dt(e, t, n) {
  let r = { x0: gt, x1: _t, z0: t.z0, z1: t.z1 },
    i = t.cornerS ? [he(r, `W`), he(r, `S`)] : [he(r, `W`)];
  (e.setMaterial(0.85, 0, 0, 16), D(e, 16777215, 0.7));
  for (let r of i)
    L(e, r, 0.24, r.L - 0.24, 0, 3.04, -0.06, n.uv(`old:boards:${t.wood}`));
}
var Ot = { x: -343, z: -551 },
  kt = `#ddd2ba`;
function At(e, t, n, r, i) {
  B(e, t, n, r, i, kt);
  for (let a = n + i * 0.82; a < n + i; a += i * 0.03)
    B(e, t, a, r, 1, `rgba(0,0,0,0.12)`);
  (B(e, t, n + i * 0.88, r, i * 0.12, `#8a7c6a`),
    B(e, t, n, r, i * 0.04, `#b8aa90`),
    B(e, t, n + i * 0.46, r, i * 0.025, `#b8aa90`));
  let a = (n, i, a) => {
    let o = t + r / 2,
      s = a / 2;
    ((e.fillStyle = `#a89878`),
      e.beginPath(),
      e.moveTo(o - s - 3, i),
      e.lineTo(o - s - 3, n + s),
      e.arc(o, n + s, s + 3, Math.PI, 0),
      e.lineTo(o + s + 3, i),
      e.fill());
    let c = e.createLinearGradient(0, n, 0, i);
    (c.addColorStop(0, `#3a4450`),
      c.addColorStop(1, `#1a2028`),
      (e.fillStyle = c),
      e.beginPath(),
      e.moveTo(o - s, i),
      e.lineTo(o - s, n + s),
      e.arc(o, n + s, s, Math.PI, 0),
      e.lineTo(o + s, i),
      e.fill(),
      B(e, o - 1, n + s, 2, i - n - s, `#c8bca0`));
  };
  (a(n + i * 0.1, n + i * 0.42, r * 0.42),
    a(n + i * 0.52, n + i * 0.8, r * 0.46));
}
function jt(e, t, n, r, i) {
  (B(e, t, n, r, i, kt),
    B(e, t, n, r, i * 0.1, `#b8aa90`),
    B(e, t, n + i * 0.9, r, i * 0.1, `#b8aa90`));
  for (let a = 0; a < 12; a++) {
    let o = t + ((a + 0.5) * r) / 12,
      s = r / 12 / 4;
    ((e.fillStyle = `#26303a`),
      e.beginPath(),
      e.moveTo(o - s, n + i * 0.82),
      e.lineTo(o - s, n + i * 0.22 + s),
      e.arc(o, n + i * 0.22 + s, s, Math.PI, 0),
      e.lineTo(o + s, n + i * 0.82),
      e.fill(),
      B(e, t + (a * r) / 12, n, 2, i, `rgba(0,0,0,0.12)`));
  }
}
