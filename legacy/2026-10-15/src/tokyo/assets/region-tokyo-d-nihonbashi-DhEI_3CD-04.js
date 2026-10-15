// tokyo/assets/region-tokyo-d-nihonbashi-DhEI_3CD 04 — math
// Lines 1567-1964 of readable/tokyo/assets/region-tokyo-d-nihonbashi-DhEI_3CD.pretty.js (statement-aligned).
function vt(e, t, n, r, i, a) {
  let { body: o, sign: l } = e,
    u = r + n.h,
    d = u - 1.1,
    f = r + n.gH,
    p = r + (n.skinTop ?? n.h - 1.6),
    m = n.hours ? c(n.hours) : 0;
  a.push({ x0: n.x0, z0: n.z0, x1: n.x1, z1: n.z1, h: r + n.h });
  for (let a = 0; a < 4; a++) {
    let c = F(n, a),
      h = n.faces.includes(a),
      g = a === n.faces[0];
    if (!h) {
      (o.setTint(n.wallTint),
        R(o, x.SIDE, 3, s.RES, i + a, 0),
        pt(o, c, 0, 0, c.L, 0, f, 3.2, 3.2, 0),
        R(o, n.wall, n.wall === x.CURTAIN ? 3 : 1, n.wallMode, i + a, 90),
        pt(o, c, 0, 0, c.L, f, d, 3.2, n.fh, f),
        R(o, x.CONCRETE, 1, s.NONE, 0, 0),
        pt(o, c, 0, 0, c.L, d, u, 3.2, 3.2, d));
      continue;
    }
    (r + (n.rustic && g ? Math.min(n.rustic, n.gH) : 0.45),
      o.setTint(n.rustic ? 12103842 : 9078400),
      R(o, x.STONE, 1, s.NONE, 0, 0),
      n.rustic && g
        ? z(o, c, 0, 0, c.L, 0, r + 0.6, 0, c.L / 3.2, 0, 0.2)
        : z(o, c, 0, 0, c.L, 0, r + 0.45, 0, c.L / 3.2, 0, 0.14));
    let _ = Math.max(1, Math.round(c.L / 3.6)),
      v = c.L / _,
      y = g
        ? Math.min(
            _ - 1,
            n.door == null
              ? Math.floor(_ / 2 + (gt(i, a) > 0.5 ? 0 : -0.5))
              : Math.floor(n.door * _),
          )
        : -1,
      b = n.vitrines ?? [],
      S = (e) =>
        g
          ? n.shops?.find((t) => Math.min(_ - 1, Math.floor(t.s * _)) === e)
          : void 0,
      C = r + (n.rustic && g ? 0.6 : 0.45),
      w = Math.min(f - 0.5, C + 3.3);
    for (let e = 0; e < _; e++) {
      let r = e * v + (n.oldFront ? 0.08 : 0.16),
        a = (e + 1) * v - (n.oldFront ? 0.08 : 0.16);
      if (
        (o.setTint(n.oldFront ? 3811868 : n.rustic ? 13156012 : 14209734),
        R(o, n.oldFront ? x.BOARDS : x.STONE_PLAIN, 1, s.NONE, 0, 0),
        z(o, c, 0, e * v, r, C, f, 0, 0.1, 0, 1),
        z(o, c, 0, a, (e + 1) * v, C, f, 0, 0.1, 0, 1),
        n.closed && g)
      ) {
        (o.setTint(16777215),
          R(o, x.SHUTTER, 1, s.NONE, 0, 0),
          z(o, c, 0, r, a, C, w, 0, 1, 0, 1),
          e === y &&
            (l.setTint(16777215).setInfo(0, 0, 30, 0),
            B(
              l,
              c,
              0.03,
              (r + a) / 2 - 0.42,
              (r + a) / 2 + 0.42,
              C + 1,
              C + 1 + 1.155,
              P(n.closed, 2),
            )));
        continue;
      }
      let u = S(e);
      if (u && e !== y) {
        if (
          (u.vit
            ? (l
                .setTint(16777215)
                .setInfo(
                  0,
                  i + e,
                  Math.round(Math.min(170, (n.bright ?? 120) * 0.72)),
                  0,
                ),
              B(l, c, 0.02, r, a, C, w, P(`vit.${u.vit}`, 2)))
            : (o.setTint(16777215),
              R(
                o,
                u.room ?? n.room ?? x.BOUTIQUE,
                1,
                s.SHOP,
                m,
                n.bright ?? 120,
              ),
              z(o, c, 0, r, a, C, w, 0, 1, 0, 1)),
          u.noren && t && Tt(t, c, r, a, w - 0.02, u.noren),
          u.mark)
        ) {
          let t = Math.min(a - r + 0.2, 3.6),
            n = (62 / 328) * t;
          (l.setTint(16777215).setInfo(0, i + e, 140, 0),
            B(
              l,
              c,
              0.07,
              (r + a) / 2 - t / 2,
              (r + a) / 2 + t / 2,
              f - 0.3 - n / 2,
              f - 0.3 + n / 2,
              P(`mark.${u.mark}`, 2),
            ));
        }
        continue;
      }
      if (e === y) {
        (o.setTint(16777215),
          n.oldFront
            ? R(o, x.LATTICE_DOOR, 1, s.SHOP, m, Math.min(200, n.bright ?? 120))
            : R(
                o,
                x.GLASS_DOOR,
                1,
                s.SHOP,
                m,
                Math.min(200, (n.bright ?? 120) - 20),
              ),
          z(o, c, 0, r, a, C, w, 0, 1, 0, 1),
          n.canopy &&
            V(
              l.setTint(16777215).setInfo(0, 0, 0, 0),
              ...xt(c, r - 0.3, a + 0.3, w + 0.05, 1.4, n.canopy),
            ),
          n.noren && t && Tt(t, c, r, a, w - 0.02, n.noren));
        continue;
      }
      let d =
        b.length && (n.allVitrines || (e + +(gt(i, e) > 0.7)) % 2 == 0)
          ? b[(n.allVitrines ? e : e >> 1) % b.length]
          : null;
      d
        ? (l
            .setTint(16777215)
            .setInfo(
              0,
              i + e,
              Math.round(Math.min(170, (n.bright ?? 120) * 0.72)),
              0,
            ),
          B(l, c, 0.02, r, a, C, w, P(`vit.${d}`, 2)))
        : (o.setTint(16777215),
          R(
            o,
            n.oldFront && e % 2 ? x.LATTICE_WIN : (n.room ?? x.BOUTIQUE),
            1,
            s.SHOP,
            m,
            n.bright ?? 120,
          ),
          z(o, c, 0, r, a, C, w, 0, 1, 0, 1));
    }
    if (
      (w < f - 0.65 &&
        (o.setTint(n.rustic ? 13156012 : 13617340),
        R(o, x.STONE_PLAIN, 1, s.NONE, 0, 0),
        z(
          o,
          c,
          0.01,
          0,
          c.L,
          w,
          f - 0.6,
          0,
          c.L / 3.2,
          0,
          (f - 0.6 - w) / 3.2,
        )),
      n.oldFront
        ? (o.setTint(2760728),
          R(o, x.BOARDS, 1, s.NONE, 0, 0),
          z(o, c, 0, 0, c.L, f - 0.6, f, 0, c.L / 3.2, 0, 0.2),
          wt(o, c, f + 0.05, 0.9))
        : (o.setTint(n.rustic ? 10130052 : 2762790),
          R(o, x.STONE_PLAIN, 1, s.NONE, 0, 0),
          z(o, c, 0, 0, c.L, f - 0.6, f, 0, c.L / 3.2, 0, 0.2)),
      n.belt && Ct(l, c, f, 0.35, n.corniceTint ?? 14208180),
      n.colonnade && g && Dt(e, c, n, r, i),
      n.skin && (!n.skinPrimaryOnly || g))
    ) {
      let e = Math.max(1, Math.round(c.L / 3.4)),
        t = c.L / e,
        r = Math.max(1, Math.round((p - f) / n.fh)),
        d = (p - f) / r;
      l.setTint(n.skinTint ?? 16777215);
      for (let o = 0; o < r; o++)
        for (let s = 0; s < e; s++) {
          let e = +(gt(i + o * 31, s + a * 17) > 0.5),
            u = o === r - 1 && bt(n.skin),
            p = o === 0 && n.skin === `taka` && g;
          (l.setInfo(
            0,
            (i + o * 23) & 255,
            Math.round(n.level * _t[n.skin]),
            0,
          ),
            B(
              l,
              c,
              0.01,
              s * t,
              (s + 1) * t,
              f + o * d,
              f + (o + 1) * d,
              P(
                u
                  ? `skin.${n.skin}.arch`
                  : p
                    ? `skin.taka.first`
                    : `skin.${n.skin}.${e}`,
                3,
              ),
            ));
        }
      (o.setTint(n.wallTint),
        R(o, x.STONE_PLAIN, 1, s.NONE, 0, 0),
        z(o, c, 0, 0, c.L, p, u, 0, c.L / 3.2, 0, 1));
    } else
      (o.setTint(n.wallTint),
        R(o, n.wall, n.wall === x.CURTAIN ? 3 : 1, n.wallMode, i + a, 120),
        pt(o, c, 0, 0, c.L, f, d, n.wall === x.DEPATO ? 2.4 : 3.2, n.fh, f),
        R(o, x.CONCRETE, 1, s.NONE, 0, 0),
        pt(o, c, 0, 0, c.L, d, u, 3.2, 3.2, d));
    if (
      (n.cornice && St(l, c, p, n.cornice, n.corniceTint ?? 14208180),
      n.mark && (n.markFascia ?? g))
    ) {
      let e = Math.min(c.L * 0.62, n.oldFront ? 4.6 : 9),
        t = (62 / 328) * e,
        r = c.L / 2;
      (l.setTint(16777215).setInfo(0, i, 150, 0),
        B(
          l,
          c,
          0.06,
          r - e / 2,
          r + e / 2,
          f - 0.55 + (0.5 - t) / 2,
          f - 0.55 + (0.5 + t) / 2,
          P(`mark.${n.mark}`, 2),
        ));
    }
    if (n.mark && n.markCrown && g) {
      let e = Math.min(c.L * 0.7, 14),
        t = (62 / 328) * e,
        r = c.L / 2,
        a = Math.min(u - 0.25 - t, p - 0.6 - t);
      (l.setTint(16777215).setInfo(0, i, 175, 0),
        B(
          l,
          c,
          (n.cornice ?? 0) + 0.12,
          r - e / 2,
          r + e / 2,
          a,
          a + t,
          P(`mark.${n.mark}`, 2),
        ));
    }
    if (n.vmark && g) {
      let e = Math.min(p - f - 1.2, n.oldFront ? 8 : 10),
        t = e / 4,
        r = (n.vmarkAt ?? 0) * c.L + 0.5;
      (l.setTint(16777215).setInfo(0, i, 180, 0),
        B(
          l,
          c,
          0.35,
          r,
          r + t,
          f + 0.8,
          f + 0.8 + e,
          P(`vmark.${n.vmark}`, 2),
        ));
      let [a, o] = L(c, r + t / 2, 0.18);
      V(
        l.setInfo(0, 0, 0, 0),
        a - 0.06,
        f + 0.6,
        o - 0.06,
        a + 0.06,
        f + 1.2 + e,
        o + 0.06,
        `steel`,
      );
    }
    if (n.tare && n.tare.side === a) {
      let e = 1.6,
        t = Math.min(p - f - 2, 16),
        r = c.L * n.tare.s;
      (l.setTint(16777215).setInfo(0, i, 110, 0),
        B(
          l,
          c,
          (n.cornice ? 0.05 : 0) + 0.25,
          r - e / 2,
          r + e / 2,
          p - 0.8 - t,
          p - 0.8,
          P(`tare.${n.tare.id}`, 2),
        ));
    }
    n.flags &&
      g &&
      Et(l, c, f, n.flags.id, n.flags.n, y >= 0 ? (y + 0.5) * v : c.L / 2);
  }
  if (
    (n.tower && Ot(e, n.tower, u, i + 101, r, a),
    o.setTint(12104876),
    R(o, x.ROOF_FLAT, 1, s.NONE, 0, 0),
    o.hrect(
      n.x0,
      n.z0,
      n.x1,
      n.z1,
      d,
      !0,
      0,
      0,
      (n.x1 - n.x0) / 6,
      (n.z1 - n.z0) / 6,
    ),
    R(o, x.CONCRETE, 1, s.NONE, 0, 0),
    yt(o, n, u),
    n.pavilion)
  ) {
    let e = n.pavilion,
      t = F(n, n.faces[0]),
      [r, a] = L(t, t.L / 2, -e.d / 2 - 1.5),
      c = (Math.abs(t.tx) * e.w) / 2 + (Math.abs(t.nx) * e.d) / 2,
      u = (Math.abs(t.tz) * e.w) / 2 + (Math.abs(t.nz) * e.d) / 2;
    (o.setTint(e.tint),
      R(o, x.STONE_WIN, 1, s.OFFICE, i, 60),
      o.box(
        r - c,
        d,
        a - u,
        r + c,
        d + e.h,
        a + u,
        Math.max(1, Math.round(e.w / 3.2)),
        Math.max(1, Math.round(e.h / 3.4)),
        1,
        15,
      ),
      R(o, x.KAWARA, 1, s.NONE, 0, 0),
      o.setTint(6978156),
      o.hrect(
        r - c - 0.4,
        a - u - 0.4,
        r + c + 0.4,
        a + u + 0.4,
        d + e.h,
        !0,
        0,
        0,
        1,
        1,
      ),
      V(
        l.setTint(6982260).setInfo(0, 0, 0, 0),
        r - 0.12,
        d + e.h,
        a - 0.12,
        r + 0.12,
        d + e.h + 3.2,
        a + 0.12,
        `copper`,
      ));
  } else if (!n.tower) {
    let e = Math.min(6, (n.x1 - n.x0) * 0.4),
      t = Math.min(5, (n.z1 - n.z0) * 0.4),
      r = (n.x0 + n.x1) / 2 + (gt(i, 9) - 0.5) * 2,
      a = (n.z0 + n.z1) / 2 + (gt(i, 7) - 0.5) * 2;
    (R(o, x.LOUVRE, 1, s.NONE, 0, 0),
      o.box(
        r - e / 2,
        d,
        a - t / 2,
        r + e / 2,
        d + 2.6,
        a + t / 2,
        2,
        1,
        1,
        31,
      ));
  }
}
