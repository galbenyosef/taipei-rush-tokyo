// tokyo/assets/characters-p5grEi98 15 — math
// Lines 4262-4651 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function Yr(e) {
  let { b: t, fit: n, lod: r } = e,
    i = t.H,
    a = r === 0 ? Pr : Fr,
    o = e.nT,
    s = [];
  for (let e = 0; e <= o; e++) s.push(-Math.PI + (e / o) * q);
  let { top: c, outer: l, bottom: u } = n,
    d = e.desc.skin,
    f = r === 0 ? 0.006 : 0.02,
    p = t.torsoTop;
  n.skinY0 < p - 0.005 &&
    Hr(e, {
      thetas: s,
      closed: !0,
      rows: Br(
        a.map((e) => e * i),
        n.skinY0,
        p,
        f,
      ).map((e) => ({ p: e, k: 1 })),
      R: (e, n) => Vt(t, e, n),
      Ru: (e, n) => Vt(t, e, n),
      attrs: {
        color: (e, t, n, r, a, c) => {
          c.setHex(d);
          let l = s[Math.round(r * o)];
          c.multiplyScalar(
            1 -
              0.08 *
                Sr(Math.abs(l) - Math.PI / 2, 0.35) *
                Sr(t - 0.76 * i, 0.03 * i),
          );
        },
        skin: (e, n, r, i, a, c) => Ut(t, s[Math.round(i * o)], n, c),
        kind: z.skin,
        rough: 0.62,
      },
    });
  {
    let r =
        c && !c.tucked
          ? Math.min(u.waistY, c.hemY + 0.025)
          : l && l.hemY < u.waistY && l.gap === 0
            ? l.hemY + 0.025
            : u.waistY,
      d = u.skirt ? Math.max(t.torsoBottom, u.skirt.hemY) : t.torsoBottom;
    if ((!u.skirt || (u.skirt.hemY, t.torsoBottom), !u.skirt)) {
      let p = Br(
          a.map((e) => e * i),
          d,
          r,
          f,
        ),
        m = fr(e, u.pattern, u.color, u.patternColor),
        h = m.rect ? yr(0.15, m.tileM) : 1,
        g = Vr(p, !1, !(c && !c.tucked && r < u.waistY)),
        _ = Ar(n);
      Hr(e, {
        thetas: s,
        closed: !0,
        rows: g,
        R: (e, n) =>
          jr(
            t,
            _,
            e,
            n,
            kr(t, e, n, u.off, 0, n > t.H * 0.54) +
              (n > u.waistY - 0.04 ? 0.002 : 0),
          ),
        Ru: (e, n) => Vt(t, e, n, !0),
        attrs: {
          color: (e, n, r, a, c, l) => {
            let f = s[Math.round(a * o)];
            l.setHex(m.vcol);
            let p =
              V(d + 0.07, d, n) * 0.28 +
              0.16 * Sr(Cr(f, 0), 0.45) * V(t.H * 0.56, t.H * 0.49, n);
            (l.multiplyScalar(
              1 -
                p -
                (Math.round(c * (g.length - 1)) === g.length - 1 ? 0.2 : 0),
            ),
              u.pattern === `denim` &&
                l.multiplyScalar(
                  1 +
                    0.12 * Math.max(0, Math.cos(f)) * Sr(n - 0.5 * i, 0.05 * i),
                ));
          },
          skin: (e, n, r, i, a, c) => Ut(t, s[Math.round(i * o)], n, c),
          kind: z.cloth,
          rough: u.pattern === `denim` ? 0.9 : 0.85,
          tex: Jr(m, (e, t, n) => {
            ((n[0] = (e - 0.5) * h),
              (n[1] = g[Math.round(t * (g.length - 1))].p / m.tileM));
          }),
        },
      });
      let v = !!l && l.gap === 0 && l.hemY < u.waistY - 0.02;
      if (
        (u.belt &&
          (!c || c.tucked) &&
          !v &&
          $r(e, u.waistY - 0.012, u.belt, u.off + 0.003),
        e.lod === 0 &&
          u.pattern === `denim` &&
          (!c || c.tucked || c.hemY > 0.53 * i))
      ) {
        let n = vr(e, u.color, 13933114, `jeans`);
        for (let r of [-1, 1])
          n &&
            Zr(
              e,
              (e, n) => kr(t, e, n, u.off, 0),
              Math.PI + r * 0.62,
              0.36,
              0.495 * i,
              0.555 * i,
              n,
              z.cloth,
              0.9,
              2,
            );
      }
    }
  }
  if (c) {
    let n =
      l && l.gap === 0 && l.sleeveT > 0
        ? `all`
        : l && l.gap > 0
          ? `front`
          : `none`;
    if (n !== `all` || l?.style === `vest`) {
      let r = fr(e, c.pattern, c.color, c.patternColor),
        d = r.rect ? yr(0.16, r.tileM) : 1,
        p = s,
        m = !0;
      if (n === `front` && l) {
        let e = Math.min(Math.PI * 0.9, l.gap + 0.55),
          t = Math.max(4, Math.round((e * 2) / (q / o)));
        p = [];
        for (let n = 0; n <= t; n++) p.push(-e + (n / t) * e * 2);
        m = !1;
      }
      let h = (e) => {
          let t = Math.max(0, Math.cos(e)),
            n = xr(c.neckB, c.neckF, t ** 1.5);
          return (
            c.armhole &&
              (n -=
                0.018 * i * Sr(Math.abs(Cr(e, 0)), 0.5) +
                0.01 * i * Sr(Math.abs(Cr(e, Math.PI)), 0.6)),
            n
          );
        },
        g = (e) =>
          c.hemY +
          (c.style === `shirt` && !c.tucked
            ? 0.012 * Sr(Math.abs(e) - Math.PI / 2, 0.5)
            : 0),
        _ = Br(
          a.map((e) => e * i),
          c.hemY,
          c.neckB,
          f,
        ),
        v = c.rib ? 0.004 : 0,
        y = Vr(_, !c.tucked, !0, v, 0),
        b = y.length - 1,
        x = y[0].p,
        S = y[b].p,
        C = K(r.vcol, 0.9);
      Hr(e, {
        thetas: p,
        closed: m,
        rows: y,
        yLo: g,
        yHi: h,
        R: (e, n) => kr(t, e, n, c.off, c.loose),
        Ru: (e, n) =>
          n > 0.7 * i ? Vt(t, e, n) - 0.001 : kr(t, e, n, u.off, 0) - 0.002,
        attrs: {
          color: (e, t, n, a, o, s) => {
            let l = p[Math.round(a * (p.length - 1))],
              u = Math.round(o * b);
            (s.setHex(u === b || u === 0 ? C : r.vcol),
              c.rib && t < c.hemY + 0.035 && s.setHex(K(r.vcol, 0.93)));
            let d = Sr(Math.abs(l) - Math.PI / 2, 0.4);
            (s.multiplyScalar(
              1 -
                0.12 * d * Sr(t - 0.73 * i, 0.05 * i) -
                0.05 * V(0.62 * i, 0.52 * i, t),
            ),
              c.tucked &&
                s.multiplyScalar(
                  1 - 0.12 * V(c.hemY + 0.08, c.hemY + 0.035, t),
                ));
          },
          skin: (e, n, r, i, a, o) =>
            Ut(t, p[Math.round(i * (p.length - 1))], n, o),
          kind:
            c.style === `police` || c.style === `rider`
              ? z.cloth
              : c.style === `blouse`
                ? z.satin
                : z.cloth,
          rough: c.style === `blouse` ? 0.55 : c.style === `rider` ? 0.6 : 0.88,
          tex: Jr(r, (e, t, n) => {
            let i = p[Math.round(e * (p.length - 1))];
            n[0] = ((i + Math.PI) / q) * d;
            let a = S > x ? (y[Math.round(t * b)].p - x) / (S - x) : 0;
            n[1] = xr(g(i), h(i), a) / r.tileM;
          }),
        },
      });
      let w = (e, n) => kr(t, e, n, c.off, c.loose);
      if (c.print !== `none` && e.lod === 0 && n !== `all`) {
        let t = hr(
          e,
          c.print,
          c.color2 === c.color
            ? Xr(c.color) > 0.5
              ? 1842210
              : 16052714
            : c.color2,
          c.color,
        );
        t &&
          (c.print === `school`
            ? Zr(e, w, 0.42, 0.14, 0.742 * i, 0.772 * i, t, z.cloth, 0.8, 2)
            : Zr(e, w, 0, 0.52, 0.64 * i, 0.77 * i, t, z.cloth, 0.85, 2));
      }
      if (
        e.lod === 0 &&
        (c.collar === `shirt` || c.collar === `polo`) &&
        n !== `all`
      ) {
        let t = gr(e, c.color, c.style === `police` ? 13214785 : 15855592),
          n = c.collar === `polo` ? 0.745 * i : c.hemY + 0.01;
        if (
          (t && Zr(e, w, 0, 0.07, n, c.neckF - 0.004, t, z.cloth, 0.85, 2),
          c.style === `uniform` || c.style === `police` || c.style === `shirt`)
        ) {
          let t = vr(e, c.color, K(c.color, 0.8), `chest`);
          t && Zr(e, w, -0.48, 0.3, 0.7 * i, 0.745 * i, t, z.cloth, 0.85, 2);
        }
      }
      if (e.lod === 0 && c.style === `hoodie` && n !== `all`) {
        let t = vr(e, c.color, K(c.color, 0.75), `pouch`);
        t && Zr(e, w, 0, 0.95, c.hemY + 0.04, 0.6 * i, t, z.cloth, 0.9, 2);
      }
      let T =
        r.rect &&
        c.pattern &&
        c.pattern !== `solid` &&
        c.pattern !== `knit` &&
        c.pattern !== `denim`
          ? c.color
          : r.vcol;
      (n !== `all` || c.collar === `hood`) &&
        ei(e, c.collar, c, w, h, T, c.color2);
    }
  }
  if (l && l.style !== `poncho`) {
    let r = fr(e, l.pattern, l.color, l.patternColor),
      c = r.rect ? yr(0.17, r.tileM) : 1,
      d = l.gap,
      p = s,
      m;
    if (d > 0) {
      let e = o;
      ((p = [d, d]), (m = [0, 1]));
      for (let t = 1; t < e; t++)
        (p.push(d + (t / e) * (q - 2 * d)), m.push(1));
      (p.push(q - d, q - d), m.push(1, 0));
    }
    let h = (e) =>
        d +
        (l.collar === `lapel` || l.collar === `v`
          ? 0.35 * V(0.66 * i, 0.83 * i, e)
          : 0.05 * V(0.78 * i, 0.84 * i, e)),
      g = Vr(
        Br(
          a.map((e) => e * i),
          l.hemY,
          l.neckY,
          f,
        ),
        !0,
        !0,
        l.ribHem ? 0.008 : 0,
        0,
      ),
      _ = g.length - 1,
      v = (e, r) => {
        let i =
          r < u.waistY + 0.01 && !u.skirt
            ? kr(t, e, r, u.off + 0.004, 0)
            : Vt(t, e, r, !0);
        return n.top && r >= n.top.hemY - 0.005
          ? Math.max(i, kr(t, e, r, n.top.off, n.top.loose))
          : i;
      },
      y = (e, n) => kr(t, e, n, l.off, l.loose),
      b = (e, t) => {
        if (d <= 0) return p[e];
        let n = h(t);
        return n + ((p[e] - d) / (q - 2 * d)) * (q - 2 * n);
      },
      x = p.length - 1,
      S = (e) =>
        l.hemY + (l.style === `blazer` ? 0.03 * i * Sr(Cr(e, 0), 0.5) * 0 : 0);
    if (
      (e.m.grid(
        {
          nu: x,
          nv: _,
          closed: !1,
          point: (e, n, r) => {
            let i = Math.round(e * x),
              a = Math.round(n * _),
              o = g[a],
              s = o.p === g[0].p ? S(p[i]) : o.p,
              c = b(i, s),
              l = o.k * (m ? m[i] : 1),
              u = y(c, s) - (o.tight ?? 0),
              d = l >= 1 ? u : xr(v(c, s) - 0.001, u, l);
            return r.set(Math.sin(c) * d, s, H(t, s) - Math.cos(c) * d);
          },
          invert: !0,
        },
        {
          color: (e, t, n, a, o, s) => {
            let c = Math.round(a * x),
              u = Math.round(o * _),
              d = b(c, t),
              f = l.ribHem && t < l.hemY + 0.05;
            (s.setHex(f ? l.color2 : r.vcol),
              m && m[c] === 0 && s.setHex(K(r.vcol, 0.8)),
              (u === 0 || u === _) && s.setHex(K(r.vcol, 0.82)));
            let p = Sr(Math.abs(Cr(d, 0)) - Math.PI / 2, 0.4);
            (s.multiplyScalar(1 - 0.14 * p * Sr(t - 0.72 * i, 0.06 * i)),
              (l.style === `bomber` || l.style === `windbreaker`) &&
                s.multiplyScalar(
                  1 -
                    0.05 * Math.abs(Math.sin((t / (0.07 * i)) * Math.PI)) ** 6,
                ));
          },
          skin: (e, n, r, i, a, o) => Ut(t, b(Math.round(i * x), n), n, o),
          kind:
            l.style === `bomber` || l.style === `windbreaker`
              ? z.satin
              : z.cloth,
          rough:
            l.style === `bomber`
              ? 0.5
              : l.style === `windbreaker`
                ? 0.45
                : 0.85,
          tex: Jr(r, (e, t, n) => {
            let i = Math.round(e * x),
              a = g[Math.round(t * _)].p;
            ((n[0] = (b(i, a) / q) * c), (n[1] = a / r.tileM));
          }),
        },
      ),
      e.lod === 0 && d === 0 && l.style !== `vest` && l.style !== `gakuran`)
    ) {
      let t = _r(e, K(l.color, 0.8), 12172482);
      t &&
        Zr(e, y, 0, 0.05, l.hemY + 0.005, l.neckY - 0.006, t, z.cloth, 0.6, 2);
    }
    if (l.print !== `none` && e.lod === 0) {
      let t = hr(e, l.print, l.color2, l.color);
      t && Zr(e, y, Math.PI, 1.05, 0.6 * i, 0.8 * i, t, z.cloth, 0.7, 2);
    }
    if (l.style === `vest`) {
      for (let t of [0.63 * i, 0.705 * i]) Qr(e, y, t, 0.022, 14673642);
      if (e.lod === 0) {
        let t = hr(e, `police`, 15922679, l.color);
        t &&
          e.desc.top.style === `police` &&
          Zr(e, y, Math.PI, 0.9, 0.735 * i, 0.8 * i, t, z.reflect, 0.5, 2);
      }
    }
    l.collar !== `none` && ni(e, l, y);
  } else l && l.style === `poncho` && ri(e, l);
}
