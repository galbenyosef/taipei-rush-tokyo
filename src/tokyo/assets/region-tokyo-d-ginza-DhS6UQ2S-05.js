// tokyo/assets/region-tokyo-d-ginza-DhS6UQ2S 05 — math
// Lines 1219-1554 of readable/tokyo/assets/region-tokyo-d-ginza-DhS6UQ2S.pretty.js (statement-aligned).
function ot(e, t, n, r, i) {
  let { body: a, sign: o, screen: s } = e,
    c = n + t.h,
    l = c - 1.1,
    d = n + t.gH,
    f = n + (t.skinTop ?? t.h - 1.6);
  i.push({ x0: t.x0, z0: t.z0, x1: t.x1, z1: t.z1, h: n + t.h });
  for (let e = 0; e < 4; e++) {
    let i = it(t, e),
      p = t.faces.includes(e),
      m = e === t.faces[0];
    if (!p) {
      (a.setTint(t.wallTint),
        W(a, j.SIDE, 3, u.RES, r + e, 0),
        K(a, i, 0, 0, i.L, 0, d, 3.2, 3.2, 0),
        W(a, t.wall, t.wall === j.CURTAIN ? 3 : 1, t.wallMode, r + e, 90),
        K(a, i, 0, 0, i.L, d, l, 3.2, t.fh, d),
        W(a, j.CONCRETE, 1, u.NONE, 0, 0),
        K(a, i, 0, 0, i.L, l, c, 3.2, 3.2, l));
      continue;
    }
    (a.setTint(9078400),
      W(a, j.STONE, 1, u.NONE, 0, 0),
      G(a, i, 0, 0, i.L, 0, n + 0.45, 0, i.L / 3.2, 0, 0.14));
    let h = Math.max(1, Math.round(i.L / 3.6)),
      g = i.L / h,
      _ = m
        ? Math.min(h - 1, Math.floor(h / 2 + (Y(r, e) > 0.5 ? 0 : -0.5)))
        : -1,
      v = t.vitrines ?? [];
    for (let e = 0; e < h; e++) {
      let s = e * g + 0.12,
        c = (e + 1) * g - 0.12;
      if (
        (a.setTint(14209734),
        W(a, j.STONE_PLAIN, 1, u.NONE, 0, 0),
        G(a, i, 0, e * g, s, n + 0.45, d, 0, 0.1, 0, 1),
        G(a, i, 0, c, (e + 1) * g, n + 0.45, d, 0, 0.1, 0, 1),
        e === _)
      ) {
        (a.setTint(16777215),
          W(
            a,
            j.GLASS_DOOR,
            1,
            u.SHOP,
            0,
            Math.min(200, (t.bright ?? 120) - 20),
          ),
          G(a, i, 0, s, c, n + 0.45, d - 0.6, 0, 1, 0, 1),
          t.canopy &&
            J(
              o.setTint(16777215).setInfo(0, 0, 0, 0),
              ...st(i, s - 0.3, c + 0.3, d - 0.55, 1.4),
            ));
        continue;
      }
      let l =
        v.length && (t.allVitrines || (e + +(Y(r, e) > 0.7)) % 2 == 0)
          ? v[(t.allVitrines ? e : e >> 1) % v.length]
          : null;
      l
        ? (o
            .setTint(16777215)
            .setInfo(
              0,
              r + e,
              Math.round(Math.min(170, (t.bright ?? 120) * 0.72)),
              0,
            ),
          q(o, i, 0.02, s, c, n + 0.45, d - 0.5, H(`vit.${l}`, 2)))
        : (a.setTint(16777215),
          W(a, t.room ?? j.BOUTIQUE, 1, u.SHOP, 0, t.bright ?? 120),
          G(a, i, 0, s, c, n + 0.45, d - 0.5, 0, 1, 0, 1));
    }
    if (
      (a.setTint(2762790),
      W(a, j.STONE_PLAIN, 1, u.NONE, 0, 0),
      G(a, i, 0, 0, i.L, d - 0.6, d, 0, i.L / 3.2, 0, 0.2),
      t.skin && (!t.skinPrimaryOnly || m))
    ) {
      let n = Math.max(1, Math.round(i.L / 3.4)),
        s = i.L / n,
        l = Math.max(1, Math.round((f - d) / t.fh)),
        p = (f - d) / l;
      o.setTint(t.skinTint ?? 16777215);
      for (let a = 0; a < l; a++)
        for (let c = 0; c < n; c++) {
          let n = +(Y(r + a * 31, c + e * 17) > 0.5);
          (o.setInfo(
            t.flicker ?? 0,
            (r + a * 23) & 255,
            Math.round(t.level * at[t.skin]),
            0,
          ),
            q(
              o,
              i,
              0.01,
              c * s,
              (c + 1) * s,
              d + a * p,
              d + (a + 1) * p,
              H(`skin.${t.skin}.${n}`, 3),
            ));
        }
      (a.setTint(t.wallTint),
        W(a, j.STONE_PLAIN, 1, u.NONE, 0, 0),
        G(a, i, 0, 0, i.L, f, c, 0, i.L / 3.2, 0, 1));
    } else
      (a.setTint(t.wallTint),
        W(a, t.wall, t.wall === j.CURTAIN ? 3 : 1, t.wallMode, r + e, 120),
        K(a, i, 0, 0, i.L, d, l, t.wall === j.DEPATO ? 2.4 : 3.2, t.fh, d),
        W(a, j.CONCRETE, 1, u.NONE, 0, 0),
        K(a, i, 0, 0, i.L, l, c, 3.2, 3.2, l));
    if (t.mark && (t.markFascia ?? m)) {
      let e = Math.min(i.L * 0.62, 9),
        n = (62 / 328) * e,
        a = i.L / 2;
      (o.setTint(16777215).setInfo(0, r, 160, 0),
        q(
          o,
          i,
          0.06,
          a - e / 2,
          a + e / 2,
          d - 0.55 + (0.5 - n) / 2,
          d - 0.55 + (0.5 + n) / 2,
          H(`mark.${t.mark}`, 2),
        ));
    }
    if (t.mark && t.markCrown && m) {
      let e = Math.min(i.L * 0.8, 16),
        n = (62 / 328) * e,
        a = i.L / 2,
        s = Math.min(c - 0.25 - n, f - 0.6 - n);
      (o.setTint(16777215).setInfo(0, r, 185, 0),
        q(o, i, 0.12, a - e / 2, a + e / 2, s, s + n, H(`mark.${t.mark}`, 2)));
    }
    if (t.vmark && m) {
      let e = Math.min(f - d - 1.2, 14),
        n = e / 4;
      (o.setTint(16777215).setInfo(0, r, 190, 0),
        q(
          o,
          i,
          0.35,
          0.5,
          0.5 + n,
          d + 0.8,
          d + 0.8 + e,
          H(`vmark.${t.vmark}`, 2),
        ));
      let a = i.px + i.tx * (0.5 + n / 2) + i.nx * 0.18,
        s = i.pz + i.tz * (0.5 + n / 2) + i.nz * 0.18;
      J(
        o.setInfo(0, 0, 0, 0),
        a - 0.06,
        d + 0.6,
        s - 0.06,
        a + 0.06,
        d + 1.2 + e,
        s + 0.06,
        `steel`,
      );
    }
    if (t.tare && t.tare.side === e) {
      let e = 1.6,
        n = Math.min(f - d - 2, 16),
        a = i.L * t.tare.s;
      (o.setTint(16777215).setInfo(0, r, 120, 0),
        q(
          o,
          i,
          0.25,
          a - e / 2,
          a + e / 2,
          f - 0.8 - n,
          f - 0.8,
          H(`tare`, 2),
        ));
    }
    if (t.screen && m) {
      let e = t.screen;
      (s.setTint(16777215).setInfo(0, r * 7, 0, 0),
        G(s, i, 0.14, i.L * e.s0, i.L * e.s1, n + e.y0, n + e.y1, 0, 1, 0, 1));
      let a = i.L * e.s0,
        c = i.L * e.s1;
      (o.setTint(16777215).setInfo(0, 0, 0, 0),
        q(
          o,
          i,
          0.1,
          a - 0.15,
          c + 0.15,
          n + e.y0 - 0.15,
          n + e.y1 + 0.15,
          ct(`black`),
        ));
    }
  }
  (a.setTint(12104876),
    W(a, j.ROOF_FLAT, 1, u.NONE, 0, 0),
    a.hrect(
      t.x0,
      t.z0,
      t.x1,
      t.z1,
      l,
      !0,
      0,
      0,
      (t.x1 - t.x0) / 6,
      (t.z1 - t.z0) / 6,
    ),
    W(a, j.CONCRETE, 1, u.NONE, 0, 0));
  let p = 0.3;
  (a.hrect(t.x0, t.z0, t.x1, t.z0 + p, c, !0, 0, 0, 1, 0.1),
    a.hrect(t.x0, t.z1 - p, t.x1, t.z1, c, !0, 0, 0, 1, 0.1),
    a.hrect(t.x0, t.z0 + p, t.x0 + p, t.z1 - p, c, !0, 0, 0, 0.1, 1),
    a.hrect(t.x1 - p, t.z0 + p, t.x1, t.z1 - p, c, !0, 0, 0, 0.1, 1));
  let m = Math.min(6, (t.x1 - t.x0) * 0.4),
    h = Math.min(5, (t.z1 - t.z0) * 0.4),
    g = (t.x0 + t.x1) / 2 + (Y(r, 9) - 0.5) * 2,
    _ = (t.z0 + t.z1) / 2 + (Y(r, 7) - 0.5) * 2;
  (W(a, j.LOUVRE, 1, u.NONE, 0, 0),
    a.box(g - m / 2, l, _ - h / 2, g + m / 2, l + 2.6, _ + h / 2, 2, 1, 1, 31));
}
function st(e, t, n, r, i) {
  let a = e.px + e.tx * t,
    o = e.pz + e.tz * t,
    s = e.px + e.tx * n + e.nx * i,
    c = e.pz + e.tz * n + e.nz * i;
  return [
    Math.min(a, s),
    r,
    Math.min(o, c),
    Math.max(a, s),
    r + 0.22,
    Math.max(o, c),
    `black`,
  ];
}
function ct(e) {
  let t = U(e);
  return { u0: t.u, u1: t.u, v0: t.v, v1: t.v };
}
function lt(e, t, n, r, i) {
  let { body: a, sign: o } = e,
    s = n + t.gH,
    c = n + t.h,
    l = Math.max(1, Math.round((c - 1.2 - s) / t.fh)),
    d = (c - 1.2 - s) / l;
  i.push({
    x0: t.cx - t.r * 0.92,
    z0: t.cz - t.r * 0.92,
    x1: t.cx + t.r * 0.92,
    z1: t.cz + t.r * 0.92,
    h: c,
  });
  for (let e = 0; e < 24; e++) {
    let i = (e / 24) * Math.PI * 2,
      f = ((e + 1) / 24) * Math.PI * 2,
      p = t.cx + Math.cos(f) * t.r,
      m = t.cz + Math.sin(f) * t.r,
      h = t.cx + Math.cos(i) * t.r,
      g = t.cz + Math.sin(i) * t.r,
      _ = Math.hypot(h - p, g - m),
      v = (h - p) / _,
      y = (g - m) / _,
      b = { px: p, pz: m, tx: v, tz: y, nx: -y, nz: v, L: _ };
    t.site ||
      (a.setTint(16777215),
      W(a, j.BOUTIQUE, 1, u.SHOP, 0, 150),
      G(a, b, 0, 0, _, n, s - 0.4, 0, 1, 0, 1),
      a.setTint(2762790),
      W(a, j.STONE_PLAIN, 1, u.NONE, 0, 0),
      G(a, b, 0, 0, _, s - 0.4, s, 0, 0.3, 0, 0.2));
    let x = Math.cos((i + f) / 2 - t.face);
    o.setTint(16777215);
    for (let n = 0; n < l; n++)
      (o.setInfo(
        0,
        r + n,
        Math.round(
          t.level * at[t.skin ?? `cylinder`] * (0.75 + 0.25 * Math.max(0, x)),
        ),
        0,
      ),
        q(
          o,
          b,
          0,
          0,
          _,
          s + n * d,
          s + (n + 1) * d,
          H(`skin.${t.skin ?? `cylinder`}.${(e + n) % 2}`, 3),
        ));
    (a.setTint(15265008),
      W(a, j.STONE_PLAIN, 1, u.NONE, 0, 0),
      G(a, b, 0, 0, _, c - 1.2, c, 0, 0.3, 0, 0.3));
  }
  (a.setTint(12104876), W(a, j.ROOF_FLAT, 1, u.NONE, 0, 0));
  for (let e = 0; e < 24; e++) {
    let n = (e / 24) * Math.PI * 2,
      r = ((e + 1) / 24) * Math.PI * 2;
    a.quad4(
      t.cx,
      c,
      t.cz,
      t.cx,
      c,
      t.cz,
      t.cx + Math.cos(r) * t.r,
      c,
      t.cz + Math.sin(r) * t.r,
      t.cx + Math.cos(n) * t.r,
      c,
      t.cz + Math.sin(n) * t.r,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
    );
  }
}
var ut = (e, t, n, r, i, a) =>
  e.setInfo(t, (n & 15) | (r << 4), i & 255, a & 255);
