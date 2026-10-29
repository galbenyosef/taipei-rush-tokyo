// tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp 09 — setmaterial
// Lines 2580-2939 of readable/tokyo/assets/region-tokyo-d-suidobashi-CZ63KPtp.pretty.js (statement-aligned).
function at(e, t, n, r) {
  let i = { x0: t.x0, x1: t.x1, z0: t.z0, z1: t.z1 },
    a = P(i, t.dir),
    c = new o(s(`street-old`, t.id)),
    l = n.white(),
    u = n.uv(`old:boards:${t.wood}`),
    d = t.skin === `mortar` ? n.uv(`old:mortar:${t.mortar ?? `#c8c0b0`}`) : u,
    f = n.uv(c.next() < 0.5 ? `old:kawara` : `old:kawara2`),
    p = et(t),
    m = parseInt(t.wood.slice(1), 16),
    h = t.kind === `house`;
  (e.setMaterial(0.9, 0, 0, 0), E(e, 16777215, 0.85));
  for (let n of [`N`, `E`, `S`, `W`]) {
    if (n === t.dir || n === t.corner) continue;
    let r = P(i, n),
      o = r.nx === a.tx && r.nz === a.tz,
      s = r.nx === -a.tx && r.nz === -a.tz,
      c = o ? (t.coverR ?? 0) : s ? (t.coverL ?? 0) : 0;
    c >= p - 0.05 || I(e, r, 0, r.L, Math.max(0, c), p, 0, d);
  }
  ((t.corner ? [a, P(i, t.corner)] : [a]).forEach((i, a) => {
    let o = a === 0;
    if (h) {
      (e.setMaterial(0.9, 0, 0, 0), E(e, 16777215));
      let t = Math.min(1.8, i.L * 0.4),
        r = o ? i.L * (0.25 + c.next() * 0.2) : -10;
      (I(e, i, 0, i.L, 0, 3.05, 0, d),
        e.setMaterial(0.35, 0.1, 0.12, tt | 48),
        E(e, 16777215),
        o && I(e, i, r, r + t, 0.12, 2.15, 0.02, n.uv(`old:glass`)));
      let a = o ? (r + t + 0.5 < i.L - 1.4 ? r + t + 0.5 : 0.4) : 0.5;
      if (
        (I(
          e,
          i,
          a,
          Math.min(i.L - 0.3, a + 1.4),
          1,
          2,
          0.02,
          n.uv(`old:glass`),
        ),
        e.setMaterial(0.8, 0, 0, 0),
        E(e, 6974052),
        o)
      ) {
        let [n, a] = F(i, r + t / 2, 0.35);
        (k(e, n, a, 2.3, 2.38, t / 2 + 0.25, 0.35, i.nx, i.nz, l),
          E(e, 15262416),
          I(e, i, r + t + 0.08, r + t + 0.3, 1.45, 1.75, 0.03, l),
          E(e, 10133664));
        let [o, s] = F(i, Math.max(0.3, r - 0.6), 0.1);
        (k(e, o, s, 0.9, 1.35, 0.2, 0.1, i.nx, i.nz, l),
          e.setMaterial(0.4, 0, 0.75, tt),
          E(e, 16773328));
        let [c, u] = F(i, r + t + 0.2, 0.09);
        k(e, c, u, 1.95, 2.18, 0.07, 0.07, i.nx, i.nz, l);
      }
    } else {
      (e.setMaterial(0.35, 0, 0.18, 17),
        E(e, 16777215),
        I(e, i, 0.25, i.L - 0.25, 0, 3.05, -0.5, n.uv(`shop:${t.kind}:0`)),
        e.setMaterial(0.7, 0, 0.25, tt | 16));
      let r = n.uv(`old:lattice`),
        a = o ? [i.L / 2 - 1, i.L / 2 + 1] : [-1, -1],
        s = Math.max(2, Math.round(i.L / 1.8));
      for (let t = 0; t < s; t++) {
        let n = (i.L * t) / s + 0.25 * (t === 0),
          o = (i.L * (t + 1)) / s - 0.25 * (t === s - 1),
          c = (n + o) / 2;
        (c > a[0] && c < a[1]) || I(e, i, n, o, 0, 3.05, -0.15, r);
      }
      (e.setMaterial(0.8, 0, 0, 0), E(e, m, 0.8));
      for (let t of [0, i.L]) {
        let [n, r] = F(i, t, 0),
          [a, o] = F(i, t, -0.5);
        t === 0
          ? e.quad(
              n,
              0,
              r,
              a,
              0,
              o,
              a,
              3.05,
              o,
              n,
              3.05,
              r,
              l.u0,
              l.v0,
              l.u1,
              l.v1,
            )
          : e.quad(
              a,
              0,
              o,
              n,
              0,
              r,
              n,
              3.05,
              r,
              a,
              3.05,
              o,
              l.u0,
              l.v0,
              l.u1,
              l.v1,
            );
      }
    }
    (E(e, 16777215, 0.9),
      e.setMaterial(0.9, 0, 0, 0),
      I(e, i, 0, i.L, 3.05, 3.4499999999999997, 0, d),
      E(e, m, 0.7));
    for (let t of [0.12, i.L - 0.12]) {
      let [n, r] = F(i, t, 0.08);
      k(e, n, r, 0, p, 0.12, 0.12, i.nx, i.nz, l);
    }
    for (let n = 0; n < t.floors - 1; n++) {
      let t = Qe + n * $e,
        r = h ? 0.6 : 1;
      (e.setMaterial(0.75, 0, 0, 0), E(e, 16777215));
      let [a, o] = F(i, -0.2, 0),
        [s, c] = F(i, i.L + 0.2, 0),
        [u, d] = F(i, i.L + 0.2, r),
        [p, g] = F(i, -0.2, r);
      (e.quad(
        p,
        t - 0.35,
        g,
        u,
        t - 0.35,
        d,
        s,
        t + 0.05,
        c,
        a,
        t + 0.05,
        o,
        f.u0,
        f.v0,
        f.u1,
        f.v1,
      ),
        E(e, m, 0.6),
        e.quad(
          a,
          t + 0.03,
          o,
          s,
          t + 0.03,
          c,
          u,
          t - 0.37,
          d,
          p,
          t - 0.37,
          g,
          l.u0,
          l.v0,
          l.u1,
          l.v1,
        ),
        E(e, 2762274));
      let [_, v] = F(i, -0.2, r),
        [y, b] = F(i, i.L + 0.2, r);
      e.quad(
        _,
        t - 0.47,
        v,
        y,
        t - 0.47,
        b,
        y,
        t - 0.33,
        b,
        _,
        t - 0.33,
        v,
        l.u0,
        l.v0,
        l.u1,
        l.v1,
      );
    }
    for (let a = 1; a < t.floors; a++) {
      let o = Qe + (a - 1) * $e,
        s = o + $e;
      (e.setMaterial(0.9, 0, 0, 0),
        E(e, 16777215),
        I(e, i, 0, i.L, o, o + 0.75, 0, d),
        I(e, i, 0, i.L, s - 0.45, s, 0, d),
        e.setMaterial(0.5, 0, 0.2, tt | 16 | (h ? 32 : 0)),
        E(e, 16777215),
        I(
          e,
          i,
          0.3,
          i.L - 0.3,
          o + 0.75,
          s - 0.45,
          -0.25,
          n.uv(h ? `old:glass` : `old:shoji`),
        ),
        e.setMaterial(0.9, 0, 0, 0),
        E(e, m, 0.85),
        I(e, i, 0, 0.3, o + 0.75, s - 0.45, 0, d),
        I(e, i, i.L - 0.3, i.L, o + 0.75, s - 0.45, 0, d));
      let c = t.rail ?? `bars`;
      if (c === `none`) continue;
      let u = h ? 0.25 : 0.4,
        f = o + 0.05,
        p = o + 0.8;
      E(e, h ? 5921368 : m, 0.75);
      let [g, _] = F(i, 0.3, u),
        [v, y] = F(i, i.L - 0.3, u);
      (M(e, g, p, _, v, p, y, 0.04, l),
        M(e, g, f + 0.12, _, v, f + 0.12, y, 0.03, l));
      let b = i.L - 0.6;
      if (c === `diamond` && r > 0) {
        let t = p - (f + 0.12);
        for (let n = -t; n < b; n += 0.32) {
          let r = Math.max(0, n),
            a = Math.min(b, n + t),
            o = f + 0.12 + (r - n),
            s = f + 0.12 + (a - n),
            [c, d] = F(i, 0.3 + r, u),
            [p, m] = F(i, 0.3 + a, u);
          M(e, c, o, d, p, s, m, 0.018, l);
          let [h, g] = F(i, 0.3 + b - r, u),
            [_, v] = F(i, 0.3 + b - a, u);
          M(e, h, o, g, _, s, v, 0.018, l);
        }
      } else {
        let t = Math.max(4, Math.round(b / (r > 0 ? 0.14 : 0.3)));
        for (let n = 0; n <= t; n++) {
          let [r, a] = F(i, 0.3 + (b * n) / t, u);
          M(e, r, f + 0.12, a, r, p, a, 0.016, l);
        }
      }
      for (let t of [0.3, i.L - 0.3]) {
        let [n, r] = F(i, t, u);
        M(e, n, f - 0.1, r, n, p + 0.02, r, 0.05, l);
      }
    }
    if (h && o && r > 0) {
      let t = 2 + Math.floor(c.next() * 4);
      for (let r = 0; r < t; r++) {
        let [t, a] = F(i, 0.3 + c.next() * (i.L - 0.6), 0.28),
          o = c.next() < 0.4;
        (e.setMaterial(0.8, 0, 0, 0),
          E(e, [10508346, 6974058, 3824250, 11563088][r % 4]),
          A(
            e,
            t,
            a,
            0,
            o ? 0.42 : 0.26,
            o ? 0.2 : 0.14,
            l,
            6,
            !1,
            o ? 0.24 : 0.17,
          ),
          E(e, 16777215),
          e.setMaterial(0.9, 0, 0, 0),
          k(
            e,
            t,
            a,
            o ? 0.4 : 0.24,
            o ? 1.05 : 0.6,
            o ? 0.24 : 0.16,
            o ? 0.22 : 0.15,
            i.nx,
            i.nz,
            n.uv(`old:leaves`),
          ));
      }
    }
  }),
    e.setMaterial(0.7, 0, 0, 0),
    E(e, 16777215));
  let g = a.nz === 0 ? `z` : `x`,
    _ = t.floors === 3 ? 2 : 2.3;
  if (t.roofKind === `gable`) {
    let t = g === `x` ? `z` : `x`;
    ae(e, i.x0, i.z0, i.x1, i.z1, p, _, t, f, !1, 0.55, u);
  } else ae(e, i.x0, i.z0, i.x1, i.z1, p, _, g, f, !0, 0.75);
  if (t.board) {
    let r = n.uv(U(t.board));
    if (
      (e.setMaterial(0.6, 0, 0, 0),
      E(e, 16777215),
      t.boardAt === `eave` && t.floors > 1)
    ) {
      let t = Math.min(a.L - 0.6, 4.6),
        n = t / 4,
        [i, o] = F(a, a.L / 2, 0.55);
      (k(
        e,
        i,
        o,
        3.4499999999999997,
        3.4499999999999997 + n,
        t / 2,
        0.06,
        a.nx,
        a.nz,
        l,
        r,
        r,
      ),
        E(e, 2762274),
        k(
          e,
          i,
          o,
          3.4499999999999997 + n,
          3.6 + n,
          t / 2 + 0.15,
          0.22,
          a.nx,
          a.nz,
          l,
        ));
    } else {
      let t = Math.min(a.L - 1, 3),
        n = t / 4;
      I(e, a, a.L / 2 - t / 2, a.L / 2 + t / 2, 3.03 - n, 3.03, 0.14, r);
    }
  }
  return (
    t.plate &&
      (e.setMaterial(0.6, 0.3, 0, 0),
      E(e, 16777215),
      I(e, a, 0.28, 0.78, 1.35, 1.55, 0.14, n.uv(`plate:${t.plate}`))),
    (t.lanterns ?? []).forEach((t, r, i) => {
      let o = i.length === 1 ? a.L - 0.9 : r === 0 ? 0.9 : a.L - 0.9,
        [s, c] = F(a, o, 0.6);
      (e.setMaterial(0.6, 0, 0.4, tt),
        E(e, 16777215),
        ie(
          e,
          s,
          c,
          2.2,
          2.9499999999999997,
          0.22,
          n.uv(`chochinw:${t.key}:${t.body}`),
        ));
    }),
    p
  );
}
