// tokyo/assets/region-tokyo-d-kanda-DcnnktoK 06 — math
// Lines 1577-1915 of readable/tokyo/assets/region-tokyo-d-kanda-DcnnktoK.pretty.js (statement-aligned).
function et(e, t, i, a) {
  let o = new n(r(`kanda-shop`, t.id)),
    s = t.gh ?? 4,
    c = t.fh ?? 3.3,
    l = He(t),
    u = i.white(),
    d = i.uv(Ke(t)),
    f = $e(t, t.dir),
    p = (e) => {
      if (e === t.dir || e === t.corner) return 0;
      let n = $e(t, e);
      return n.nx === -f.nx && n.nz === -f.nz
        ? (t.coverB ?? 0)
        : ((n.nx === f.tx && n.nz === f.tz ? t.coverR : t.coverL) ?? 0);
    };
  for (let n of [`N`, `E`, `S`, `W`]) {
    let f = $e(t, n);
    if (n !== t.dir && n !== t.corner) {
      let r = p(n);
      if (r >= l - 0.05) continue;
      (e.setMaterial(0.92, 0, 0, 0),
        D(e, t.wall, 0.9),
        L(e, f, 0, f.L, Math.max(0, r), l, 0, d));
      continue;
    }
    tt(e, t, f, i, n === t.dir, o);
    for (let o = 1; o < t.floors; o++) {
      let l = s + (o - 1) * c,
        p = l + c;
      (e.setMaterial(0.88, 0, 0, 0),
        D(e, t.wall),
        L(e, f, 0, f.L, l, l + 0.9, 0, d));
      let m = Math.max(1, Math.round(f.L / 3.4)),
        h = n === t.dir ? t.winWords?.[o - 1] : void 0,
        g = Math.floor((m - 1) / 2);
      for (let n = 0; n < m; n++) {
        let a = qe(t.win);
        (h &&
          n === g &&
          (a = qe(t.win, Qe(h, o + 1), Je[r(t.id, o - 1) % Je.length])),
          e.setMaterial(0.2, 0.3, 0.2, Ue),
          D(e, 16777215),
          L(
            e,
            f,
            (f.L * n) / m + 0.14,
            (f.L * (n + 1)) / m - 0.14,
            l + 0.9,
            p,
            0,
            i.uv(a),
          ));
      }
      (e.setMaterial(0.88, 0, 0, 0), D(e, t.wall, 0.96));
      for (let t = 0; t <= m; t++) {
        let n = (f.L * t) / m;
        L(
          e,
          f,
          Math.max(0, n - 0.14),
          Math.min(f.L, n + 0.14),
          l + 0.9,
          p,
          0,
          d,
        );
      }
      if (a > 0) {
        D(e, t.wall, 0.75);
        let [n, r] = I(f, 0, 0),
          [i, a] = I(f, f.L, 0.12);
        k(
          e,
          Math.min(n, i),
          Math.min(r, a),
          Math.max(n, i),
          Math.max(r, a),
          l + 0.9,
          u,
        );
      }
    }
    if (
      (e.setMaterial(0.88, 0, 0, 0),
      D(e, t.wall, 0.92),
      L(e, f, 0, f.L, l - 0.8, l, 0, d),
      D(e, 9079430),
      L(e, f, 0, f.L, l - 0.08, l + 0.05, 0.06, u),
      n === t.dir)
    )
      for (let n of t.bands ?? []) {
        let r = n.floor ?? 2;
        if (r < 2 || r > t.floors) continue;
        let a = s + (r - 2) * c + 0.05,
          o = 0.8,
          l = Math.min(f.L - 0.4, o * 8);
        (e.setMaterial(0.5, 0, 0.3, n.style === `lit` || !n.style ? We : 0),
          D(e, 16777215),
          L(e, f, (f.L - l) / 2, (f.L + l) / 2, a, a + o, 0.1, i.uv(U(n))));
      }
  }
  (e.setMaterial(0.92, 0, 0, 0),
    D(e, 9211016),
    k(e, t.x0, t.z0, t.x1, t.z1, l - 0.5, u),
    a > 0 &&
      o.next() < 0.55 &&
      !t.roofBoard &&
      (e.setMaterial(0.6, 0.2, 0, 0),
      D(e, o.next() < 0.5 ? 14212312 : 10133668),
      j(
        e,
        (t.x0 + t.x1) / 2 + (o.next() - 0.5) * 1.5,
        (t.z0 + t.z1) / 2 + (o.next() - 0.5) * 1.5,
        l - 0.5,
        l + 1.3,
        0.8,
        0.8,
        0,
        1,
        u,
      )));
  let m = (t, n, r, a, o) => {
      let [s, c] = I(f, n, 0.35 + o / 2);
      (e.setMaterial(
        0.5,
        0,
        t.style === `wood` ? 0 : 0.3,
        t.style === `wood` ? 0 : We,
      ),
        D(e, 16777215));
      let l = i.uv(Se(t));
      (j(e, s, c, r, a, o / 2, 0.18, f.tx, f.tz, u, l, l),
        e.setMaterial(0.6, 0.4, 0, 0),
        D(e, 5264472));
      let [d, p] = I(f, n, 0.18);
      j(e, d, p, r + 0.3, a - 0.3, 0.16, 0.05, f.tx, f.tz, u);
    },
    h = l - 0.4;
  if (t.vsign && t.floors >= 2) {
    let e = Math.min(h - (s + 0.2), t.floors >= 5 ? 14 : 7.5);
    m(t.vsign, 0.8, h - e, h, t.floors >= 6 ? 1.3 : 1);
  }
  if (t.vsign2 && t.floors >= 3) {
    let e = Math.min(h - (s + 0.2), 9);
    m(t.vsign2, f.L - 0.8, h - e, h, 0.9);
  }
  if (t.roofBoard) {
    let n = 2.4,
      r = Math.min(f.L - 0.6, n * 4);
    (e.setMaterial(0.7, 0.5, 0, 0), D(e, 6317160));
    for (let t of [f.L / 2 - r / 2 + 0.3, f.L / 2 + r / 2 - 0.3]) {
      let [n, r] = I(f, t, -1);
      j(e, n, r, l - 0.5, l + 0.6, 0.06, 0.5, f.nx, f.nz, u);
    }
    (e.setMaterial(0.5, 0, 0.3, We), D(e, 16777215));
    let [a, o] = I(f, f.L / 2, -0.5),
      s = i.uv(U(t.roofBoard));
    j(e, a, o, l + 0.2, l + 0.2 + n, r / 2, 0.15, f.nx, f.nz, u, s, s);
  }
  return l;
}
function tt(e, t, n, r, i, a) {
  let o = r.white(),
    s = t.gh ?? 4,
    c = s - 0.95,
    l = t.front ?? `glass`,
    u = r.uv(Xe(t)),
    d = Math.max(1, Math.round(n.L / 3)),
    f = l === `open` ? 0.9 : 0.35;
  (e.setMaterial(0.3, 0.1, 0.17, 17), D(e, 16053492));
  for (let t = 0; t < d; t++) {
    let r = (n.L * t) / d,
      a = (n.L * (t + 1)) / d,
      [o, s] = I(n, r + 0.08, -f),
      [l, p] = I(n, a - 0.08, -f),
      m = ((t + +!i) % 2) / 2;
    de(e, o, s, l, p, 0, c, u, m, m + 0.5, 0, 1);
  }
  if (l === `lattice`) {
    (e.setMaterial(0.7, 0, 0.22, We | 16), D(e, 16777215));
    let t = r.uv(`lattice`);
    for (let r = 0; r < d; r++) {
      let i = (n.L * r) / d,
        a = (n.L * (r + 1)) / d;
      L(e, n, i + 0.06, a - 0.06, 0, c, -0.12, t);
    }
  }
  (e.setMaterial(0.85, 0, 0, 0), D(e, t.wall, 0.8));
  {
    let [t, r] = I(n, 0, 0),
      [i, a] = I(n, 0, -f);
    O(e, t, r, i, a, 0, c, o);
    let [s, l] = I(n, n.L, 0),
      [u, d] = I(n, n.L, -f);
    O(e, u, d, s, l, 0, c, o);
  }
  if (l !== `open`) {
    (e.setMaterial(0.6, 0.3, 0, 0), D(e, l === `lattice` ? 2759184 : 3816512));
    for (let t = 0; t <= d; t++) {
      let r = (n.L * t) / d;
      L(e, n, Math.max(0, r - 0.08), Math.min(n.L, r + 0.08), 0, c, 0, o);
    }
  } else {
    (e.setMaterial(0.6, 0, 0, 16), D(e, 6964260));
    let [t, r] = I(n, 0.3, -0.45),
      [i, a] = I(n, n.L - 0.3, 0.05);
    k(
      e,
      Math.min(t, i),
      Math.min(r, a),
      Math.max(t, i),
      Math.max(r, a),
      1.05,
      o,
    );
  }
  (e.setMaterial(0.85, 0, 0, 0), D(e, 14211284));
  {
    let [t, r] = I(n, 0, -f),
      [i, a] = I(n, n.L, 0);
    k(
      e,
      Math.min(t, i),
      Math.min(r, a),
      Math.max(t, i),
      Math.max(r, a),
      c,
      o,
      !0,
    );
  }
  let p = t.fascia;
  if (
    (e.setMaterial(
      0.5,
      0,
      p.style === `wood` || p.style === `enamel` ? 0 : 0.3,
      p.style === `wood` || p.style === `enamel` ? 0 : We,
    ),
    D(e, 16777215),
    L(e, n, 0, n.L, c, s, 0.05, r.uv(U(p))),
    t.awning !== void 0 && i)
  ) {
    (e.setMaterial(0.8, 0, 0, 0), D(e, t.awning));
    let [r, i] = I(n, 0.1, 0),
      [a, s] = I(n, n.L - 0.1, 0),
      [l, u] = I(n, 0.1, 1.1),
      [d, f] = I(n, n.L - 0.1, 1.1);
    e.quad(
      l,
      c - 0.5,
      u,
      d,
      c - 0.5,
      f,
      a,
      c - 0.02,
      s,
      r,
      c - 0.02,
      i,
      o.u0,
      o.v0,
      o.u1,
      o.v1,
    );
    let [p, m] = I(n, 0.1, 1.1),
      [h, g] = I(n, n.L - 0.1, 1.1);
    O(e, p, m, h, g, c - 0.75, c - 0.5, o);
  }
  if (i && t.lanterns?.length) {
    let i = t.lanterns;
    for (let t = 0; t < i.length; t++) {
      let [a, o] = I(n, (n.L * (t + 0.5)) / i.length, 0.45);
      (e.setMaterial(0.6, 0, 0.42, We), D(e, 16777215));
      let s = r.uv(`chochin:${i[t]}`);
      fe(e, a, o, c - 1.05, c - 0.1, 0.25, s);
    }
  }
}
function nt(e, t, n) {
  if (!t.hours) return !1;
  let r = $e(t, t.dir),
    i = (t.gh ?? 4) - 0.95;
  if (
    (e.setMaterial(0.7, 0.4, 0, 0),
    D(e, 16777215),
    L(e, r, 0.05, r.L - 0.05, 0, i, 0.04, n.uv(`shutter`)),
    t.corner)
  ) {
    let r = $e(t, t.corner);
    L(e, r, 0.05, r.L - 0.05, 0, i, 0.04, n.uv(`shutter`));
  }
  return !0;
}
function rt(e, t, n) {
  if (!t.noren) return !1;
  let r = $e(t, t.dir),
    i = (t.gh ?? 4) - 0.95,
    a = Math.min(2.4, r.L * 0.45);
  return (
    e.setMaterial(0.9, 0, 0, 16),
    D(e, 16777215),
    L(
      e,
      r,
      r.L / 2 - a / 2,
      r.L / 2 + a / 2,
      i - 1.15,
      i - 0.05,
      0.12,
      n.uv(`noren:${t.noren.key}:${t.noren.bg}`),
    ),
    !0
  );
}
function it(e, t, n) {
  let r = n.map(({ a: n, b: r, ...i }) => {
      let a = e === `N` || e === `S`;
      return {
        ...i,
        dir: e,
        x0: a ? n : t[0],
        x1: a ? r : t[1],
        z0: a ? t[0] : n,
        z1: a ? t[1] : r,
      };
    }),
    i = (e) => (e.gh ?? 4) + (e.floors - 1) * (e.fh ?? 3.3) + 0.8;
  for (let t = 0; t < r.length; t++) {
    let n = r[t - 1],
      a = r[t + 1],
      o = e === `S` || e === `W`,
      s = n ? i(n) : 0,
      c = a ? i(a) : 0;
    ((r[t].coverL ??= o ? s : c), (r[t].coverR ??= o ? c : s));
  }
  return r;
}
