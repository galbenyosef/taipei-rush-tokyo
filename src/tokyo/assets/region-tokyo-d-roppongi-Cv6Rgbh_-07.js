// tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_ 07 — setmaterial
// Lines 1886-2214 of readable/tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_.pretty.js (statement-aligned).
function Xe(e, t, i, a, o) {
  let s = new n(r(`rop-hero`, t.id)),
    c = Le(t),
    l = a.white(),
    u = Ue(t, t.dir),
    d = (e) => {
      if (e === t.dir || e === t.corner || e === t.lane) return 0;
      let n = Ue(t, e);
      return n.nx === -u.nx && n.nz === -u.nz
        ? (t.coverB ?? 0)
        : ((n.nx === u.tx && n.nz === u.tz ? t.coverR : t.coverL) ?? 0);
    },
    f = a.uv(`win:${i.win}`);
  for (let n of [`N`, `E`, `S`, `W`]) {
    let u = Ue(t, n),
      p = d(n);
    if (n !== t.dir && n !== t.corner && n !== t.lane) {
      if (p >= c - 0.05) continue;
      (e.setMaterial(0.9, 0, 0, 0),
        A(e, i.wall, 0.85),
        R(e, u, 0, u.L, Math.max(0, p), c, 0, l));
      continue;
    }
    Ze(e, t, i, u, a, n === t.dir, s);
    for (let n = 1; n < t.floors; n++) {
      let t = Fe + (n - 1) * Ie,
        r = t + Ie;
      if (i.closedFront !== void 0) {
        (e.setMaterial(0.7, 0, i.frontGlow ?? 0, +!!i.frontGlow),
          A(e, i.closedFront),
          R(e, u, 0, u.L, t, r, 0, l));
        continue;
      }
      (e.setMaterial(0.85, 0, 0, 0),
        A(e, i.wall),
        R(e, u, 0, u.L, t, t + 0.9, 0, l));
      let a = Math.max(1, Math.round(u.L / 3.4));
      (e.setMaterial(0.2, 0.3, 0.22, Je), A(e, 16777215));
      for (let n = 0; n < a; n++)
        R(
          e,
          u,
          (u.L * n) / a + 0.12,
          (u.L * (n + 1)) / a - 0.12,
          t + 0.9,
          r,
          0,
          f,
        );
      (e.setMaterial(0.85, 0, 0, 0), A(e, i.wall, 0.96));
      for (let n = 0; n <= a; n++) {
        let i = (u.L * n) / a;
        R(
          e,
          u,
          Math.max(0, i - 0.12),
          Math.min(u.L, i + 0.12),
          t + 0.9,
          r,
          0,
          l,
        );
      }
    }
    (e.setMaterial(0.85, 0, 0, 0),
      A(e, i.wall, 0.9),
      R(e, u, 0, u.L, c - 0.9, c, 0, l));
    let m = n === t.dir;
    if (m && i.grid) {
      let n = i.grid.length,
        r = Math.min(c - 1, Fe + n * Ie);
      (e.setMaterial(0.5, 0, 0.32, Ye),
        A(e, 16777215),
        R(
          e,
          u,
          0.25,
          u.L - (i.tower ? 1.6 : 0.25),
          4.4,
          r,
          0.15,
          a.uv(`grid:${t.id}`),
        ));
    }
    if (m && i.bands?.length && !i.grid) {
      let n = new Map(),
        r = 0,
        o = i.led && t.floors >= 6 ? 2 : -1;
      for (let s = 1; s < t.floors - 1; s++) {
        if (s === o || s === o + 1) continue;
        let t = i.bands.find((e) => e.floor === s + 1) ?? null;
        if (!t) {
          if ((s - 1) % 2) continue;
          t = i.bands[r++ % i.bands.length];
        }
        let c = Ge(t);
        if ((n.get(c) ?? 0) >= 2) continue;
        n.set(c, (n.get(c) ?? 0) + 1);
        let l = Fe + (s - 1) * Ie + 0.15,
          d = i.closedFront === void 0 ? 1.1 : Math.min(Ie * 0.7, u.L / 6);
        (e.setMaterial(0.5, 0, 0.3, Ye), A(e, 16777215));
        let f = Math.min(u.L - 0.4 - (i.tower ? 1.4 : 0), d * 8),
          p = (u.L - f) / 2;
        R(e, u, p, p + f, l, l + d, 0.12, a.uv(c));
      }
    }
    if (i.led && t.floors >= 5 && (t.ledOnCorner ? n === t.corner : m)) {
      let n = t.floors >= 6 ? 7.75 : 4.8,
        o = Math.min(u.L * 0.7, 8, (Ie * 2 - 0.4) * 2),
        s = o / 2;
      (e.setMaterial(0.3, 0, 0.34, 6),
        A(e, 16777215),
        R(
          e,
          u,
          (u.L - o) / 2,
          (u.L + o) / 2,
          n,
          n + s,
          i.grid ? 0.3 : 0.16,
          a.uv(`led:${i.led}|${r(t.id) % 4}`),
        ));
    }
    if (i.neon?.length && o >= 0) {
      let n = i.neon[0],
        r = i.neon[1] ?? n;
      (e.setMaterial(0.3, 0, 0.9, 1 | (s.next() < 0.25 ? 4 : 0)), A(e, n));
      let a = 0.18,
        d = 0.09;
      (R(e, u, 0.06, 0.15, Fe, c - 1, a, l),
        R(e, u, u.L - 0.06 - d, u.L - 0.06, Fe, c - 1, a, l),
        A(e, r),
        R(e, u, 0.06, u.L - 0.06, c - 1.12, c - 1.12 + d, a, l),
        o >= 1 && t.floors >= 4 && R(e, u, 0.06, u.L - 0.06, 4.25, 4.34, a, l));
    }
  }
  (e.setMaterial(0.9, 0, 0, 0),
    A(e, 9079430),
    M(e, t.x0, t.z0, t.x1, t.z1, c - 0.6, l));
  let p = (t, n, r, i, o, s) => {
      let [c, d] = L(u, r, 0.3 + s / 2);
      (e.setMaterial(0.5, 0, 0.32, Ye), A(e, 16777215));
      let f = a.uv(n);
      (N(e, c, d, i, o, s / 2, 0.22, u.tx, u.tz, l, f, f),
        e.setMaterial(0.6, 0.4, 0, 0),
        A(e, 3816512));
      let [p, m] = L(u, r, 0.15);
      (N(e, p, m, i + 0.2, o - 0.2, 0.15, 0.05, u.tx, u.tz, l),
        N(e, c, d, o, o + 0.25, s / 2 + 0.06, 0.26, u.tx, u.tz, l));
    },
    m = c - (i.roof ? 1 : 0.3);
  if (i.tower && t.floors >= 3) {
    let e = i.tower.length,
      n = Math.min(m, Fe + e * Ie),
      r = u.L < 7 ? 1.25 : 1.5,
      a = i.grid ? u.L - 0.85 : s.next() < 0.5 || !i.vsign ? u.L - 0.75 : 0.75;
    p(i.tower, `tower:${t.id}`, a, 4.45, n, r);
  }
  if (i.vsign && t.floors >= 3) {
    let t = Math.min(m - 4.5, 24),
      [n, r] = L(u, 0.9, 1);
    (e.setMaterial(0.5, 0, 0.32, Ye), A(e, 16777215));
    let o = a.uv(We(i.vsign));
    (N(e, n, r, m - t, m, 0.65, 0.2, u.tx, u.tz, l, o, o),
      e.setMaterial(0.6, 0.4, 0, 0),
      A(e, 5264472));
    let [s, c] = L(u, 0.9, 0.18);
    N(e, s, c, m - t + 0.3, m - 0.3, 0.17, 0.05, u.tx, u.tz, l);
  }
  if (i.roof) {
    let n = t.kind === `donco` ? 4.6 : 3.2,
      r = Math.min(u.L - 0.6, n * 2.86);
    (e.setMaterial(0.7, 0.5, 0, 0), A(e, 6317160));
    for (let t of [0.7, u.L - 0.7]) {
      let [r, i] = L(u, t, -1.2);
      N(e, r, i, c - 0.6, c + n * 0.4, 0.08, 0.6, u.nx, u.nz, l);
    }
    (e.setMaterial(0.5, 0, 0.32, Ye), A(e, 16777215));
    let [o, s] = L(u, u.L / 2, -0.6),
      d = a.uv(`roof:${Ge(i.roof)}`);
    N(e, o, s, c + 0.1, c + 0.1 + n, r / 2, 0.2, u.nx, u.nz, l, d, d);
  }
  if (t.kind === `donco`) {
    let n = t.corner ? Ue(t, t.corner) : u,
      r = Math.min(n.L * 0.6, 7),
      i = r * 1.17,
      o = t.corner ? n.L - r - 1.2 : 1.2;
    (e.setMaterial(0.5, 0, 0.34, Ye),
      A(e, 16777215),
      R(e, n, o, o + r, c - 2 - i, c - 2, 0.2, a.uv(`mascot`)));
  }
  return (
    !i.roof &&
      o > 0 &&
      s.next() < 0.5 &&
      (e.setMaterial(0.6, 0.2, 0, 0),
      A(e, 14212312),
      N(
        e,
        (t.x0 + t.x1) / 2 + (s.next() - 0.5) * 2,
        (t.z0 + t.z1) / 2,
        c - 0.6,
        c + 1.6,
        0.9,
        0.9,
        0,
        1,
        l,
      )),
    { id: t.id, h: c }
  );
}
function Ze(e, t, n, r, i, a, o) {
  let s = i.white(),
    c = a ? t.dir : r.nx > 0 ? `E` : r.nx < 0 ? `W` : r.nz > 0 ? `S` : `N`,
    l = t.poi && t.poi.dir === c ? t.poi : null,
    u = 3.1;
  (e.setMaterial(0.25, 0.2, 0.18, 17), A(e, 16053492));
  let d = Math.max(1, Math.round(r.L / 3.2));
  for (let n = 0; n < d; n++) {
    let o = (r.L * n) / d,
      s = (r.L * (n + 1)) / d,
      c = (o + s) / 2,
      f = l && Math.abs(c - l.at) <= l.width / 2 + 0.2 ? l.kind : t.shop,
      [p, m] = L(r, o + 0.1, -0.35),
      [h, g] = L(r, s - 0.1, -0.35),
      _ = ((n + +!a) % 2) / 2,
      v = _ + 1 / 2;
    re(e, p, m, h, g, 0, u, i.uv(`shop:${f}`), _, v, 0, 1);
  }
  (e.setMaterial(0.85, 0, 0, 0), A(e, n.wall, 0.8));
  {
    let [t, n] = L(r, 0, 0),
      [i, a] = L(r, 0, -0.35);
    j(e, i, a, t, n, 0, u, s);
    let [o, c] = L(r, r.L, 0),
      [l, d] = L(r, r.L, -0.35);
    j(e, o, c, l, d, 0, u, s);
  }
  (e.setMaterial(0.6, 0.4, 0, 0),
    A(e, t.kind === `kappo` || t.kind === `izakaya` ? 3810324 : 2763824));
  for (let t = 0; t <= d; t++) {
    let n = (r.L * t) / d;
    R(e, r, Math.max(0, n - 0.1), Math.min(r.L, n + 0.1), 0, u, 0, s);
  }
  (e.setMaterial(0.85, 0, 0, 0), A(e, 14211284));
  let [f, p] = L(r, 0, -0.35),
    [m, h] = L(r, r.L, 0);
  (M(
    e,
    Math.min(f, m),
    Math.min(p, h),
    Math.max(f, m),
    Math.max(p, h),
    u,
    s,
    !0,
  ),
    e.setMaterial(0.5, 0, 0.3, Ye),
    A(e, 16777215));
  let g = l ? null : Ke(t, n);
  if (
    (R(
      e,
      r,
      0,
      r.L,
      u,
      Fe,
      0.05,
      i.uv(
        g
          ? `b:${g.main}|${g.sub ?? ``}|${g.bg}|${g.fg}|${g.floor ?? ``}|${g.neon ? `n` : ``}`
          : Qe(t),
      ),
    ),
    n.awning !== void 0 && r.L < 14)
  ) {
    (e.setMaterial(0.8, 0, 0, 0), A(e, n.awning));
    let [t, i] = L(r, 0.1, 0),
      [a, o] = L(r, r.L - 0.1, 0),
      [c, l] = L(r, 0.1, 1.2),
      [u, d] = L(r, r.L - 0.1, 1.2);
    e.quad(
      c,
      2.55,
      l,
      u,
      2.55,
      d,
      a,
      3.0500000000000003,
      o,
      t,
      3.0500000000000003,
      i,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
    );
  }
  if (n.lanterns && a) {
    let t = i.uv(`lantern:${n.lanterns}`);
    (e.setMaterial(0.6, 0, 0.5, 3), A(e, 16777215));
    for (let n of [Math.min(1, r.L * 0.2), Math.max(r.L - 1, r.L * 0.8)]) {
      let [i, a] = L(r, n, 0.45);
      N(e, i, a, 1.9500000000000002, 2.85, 0.27, 0.27, r.nx, r.nz, t, t, t, !1);
    }
  }
}
function Qe(e) {
  let t = e.poi.name,
    [n, r, i] = F(t);
  return `b:brand.${t}||${n}|${r}||`;
}
function $e(e, t) {
  for (let n of t) {
    if (!n.poi) continue;
    let t = n.poi.name,
      [r, i, a] = F(t);
    e.need(
      `b:brand.${t}||${r}|${i}||`,
      384,
      48,
      _e({ main: `brand.${t}`, bg: r, fg: i, acc: a }),
    );
  }
}
