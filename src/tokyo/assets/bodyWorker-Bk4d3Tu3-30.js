// tokyo/assets/bodyWorker-Bk4d3Tu3 30 — math
// Lines 10699-11088 of readable/tokyo/assets/bodyWorker-Bk4d3Tu3.pretty.js (statement-aligned).
function Zi(e) {
  let { b: t, fit: n, lod: r } = e,
    i = t.H,
    a = r === 0 ? Ii : Li,
    o = e.nT,
    s = [];
  for (let e = 0; e <= o; e++) s.push(-Math.PI + (e / o) * Z);
  let { top: c, outer: l, bottom: u } = n,
    d = e.desc.skin,
    f = r === 0 ? 0.006 : 0.02,
    p = t.torsoTop;
  n.skinY0 < p - 0.005 &&
    Wi(e, {
      thetas: s,
      closed: !0,
      rows: Hi(
        a.map((e) => e * i),
        n.skinY0,
        p,
        f,
      ).map((e) => ({ p: e, k: 1 })),
      R: (e, n) => Hn(t, e, n),
      Ru: (e, n) => Hn(t, e, n),
      attrs: {
        color: (e, t, n, r, a, c) => {
          c.setHex(d);
          let l = s[Math.round(r * o)];
          c.multiplyScalar(
            1 -
              0.08 *
                Q(Math.abs(l) - Math.PI / 2, 0.35) *
                Q(t - 0.76 * i, 0.03 * i),
          );
        },
        skin: (e, n, r, i, a, c) => Wn(t, s[Math.round(i * o)], n, c),
        kind: H.skin,
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
      let p = Hi(
          a.map((e) => e * i),
          d,
          r,
          f,
        ),
        m = hi(e, u.pattern, u.color, u.patternColor),
        h = m.rect ? Si(0.15, m.tileM) : 1,
        g = Ui(p, !1, !(c && !c.tucked && r < u.waistY)),
        _ = Mi(n);
      Wi(e, {
        thetas: s,
        closed: !0,
        rows: g,
        R: (e, n) =>
          Ni(
            t,
            _,
            e,
            n,
            ji(t, e, n, u.off, 0, n > t.H * 0.54) +
              (n > u.waistY - 0.04 ? 0.002 : 0),
          ),
        Ru: (e, n) => Hn(t, e, n, !0),
        attrs: {
          color: (e, n, r, a, c, l) => {
            let f = s[Math.round(a * o)];
            l.setHex(m.vcol);
            let p =
              W(d + 0.07, d, n) * 0.28 +
              0.16 * Q(Ti(f, 0), 0.45) * W(t.H * 0.56, t.H * 0.49, n);
            (l.multiplyScalar(
              1 -
                p -
                (Math.round(c * (g.length - 1)) === g.length - 1 ? 0.2 : 0),
            ),
              u.pattern === `denim` &&
                l.multiplyScalar(
                  1 +
                    0.12 * Math.max(0, Math.cos(f)) * Q(n - 0.5 * i, 0.05 * i),
                ));
          },
          skin: (e, n, r, i, a, c) => Wn(t, s[Math.round(i * o)], n, c),
          kind: H.cloth,
          rough: u.pattern === `denim` ? 0.9 : 0.85,
          tex: Xi(m, (e, t, n) => {
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
          ta(e, u.waistY - 0.012, u.belt, u.off + 0.003),
        e.lod === 0 &&
          u.pattern === `denim` &&
          (!c || c.tucked || c.hemY > 0.53 * i))
      ) {
        let n = xi(e, u.color, 13933114, `jeans`);
        for (let r of [-1, 1])
          n &&
            $i(
              e,
              (e, n) => ji(t, e, n, u.off, 0),
              Math.PI + r * 0.62,
              0.36,
              0.495 * i,
              0.555 * i,
              n,
              H.cloth,
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
      let r = hi(e, c.pattern, c.color, c.patternColor),
        d = r.rect ? Si(0.16, r.tileM) : 1,
        p = s,
        m = !0;
      if (n === `front` && l) {
        let e = Math.min(Math.PI * 0.9, l.gap + 0.55),
          t = Math.max(4, Math.round((e * 2) / (Z / o)));
        p = [];
        for (let n = 0; n <= t; n++) p.push(-e + (n / t) * e * 2);
        m = !1;
      }
      let h = (e) => {
          let t = Math.max(0, Math.cos(e)),
            n = wi(c.neckB, c.neckF, t ** 1.5);
          return (
            c.armhole &&
              (n -=
                0.018 * i * Q(Math.abs(Ti(e, 0)), 0.5) +
                0.01 * i * Q(Math.abs(Ti(e, Math.PI)), 0.6)),
            n
          );
        },
        g = (e) =>
          c.hemY +
          (c.style === `shirt` && !c.tucked
            ? 0.012 * Q(Math.abs(e) - Math.PI / 2, 0.5)
            : 0),
        _ = Hi(
          a.map((e) => e * i),
          c.hemY,
          c.neckB,
          f,
        ),
        v = c.rib ? 0.004 : 0,
        y = Ui(_, !c.tucked, !0, v, 0),
        b = y.length - 1,
        x = y[0].p,
        S = y[b].p,
        C = X(r.vcol, 0.9);
      Wi(e, {
        thetas: p,
        closed: m,
        rows: y,
        yLo: g,
        yHi: h,
        R: (e, n) => ji(t, e, n, c.off, c.loose),
        Ru: (e, n) =>
          n > 0.7 * i ? Hn(t, e, n) - 0.001 : ji(t, e, n, u.off, 0) - 0.002,
        attrs: {
          color: (e, t, n, a, o, s) => {
            let l = p[Math.round(a * (p.length - 1))],
              u = Math.round(o * b);
            (s.setHex(u === b || u === 0 ? C : r.vcol),
              c.rib && t < c.hemY + 0.035 && s.setHex(X(r.vcol, 0.93)));
            let d = Q(Math.abs(l) - Math.PI / 2, 0.4);
            (s.multiplyScalar(
              1 -
                0.12 * d * Q(t - 0.73 * i, 0.05 * i) -
                0.05 * W(0.62 * i, 0.52 * i, t),
            ),
              c.tucked &&
                s.multiplyScalar(
                  1 - 0.12 * W(c.hemY + 0.08, c.hemY + 0.035, t),
                ));
          },
          skin: (e, n, r, i, a, o) =>
            Wn(t, p[Math.round(i * (p.length - 1))], n, o),
          kind:
            c.style === `police` || c.style === `rider`
              ? H.cloth
              : c.style === `blouse`
                ? H.satin
                : H.cloth,
          rough: c.style === `blouse` ? 0.55 : c.style === `rider` ? 0.6 : 0.88,
          tex: Xi(r, (e, t, n) => {
            let i = p[Math.round(e * (p.length - 1))];
            n[0] = ((i + Math.PI) / Z) * d;
            let a = S > x ? (y[Math.round(t * b)].p - x) / (S - x) : 0;
            n[1] = wi(g(i), h(i), a) / r.tileM;
          }),
        },
      });
      let w = (e, n) => ji(t, e, n, c.off, c.loose);
      if (c.print !== `none` && e.lod === 0 && n !== `all`) {
        let t = vi(
          e,
          c.print,
          c.color2 === c.color
            ? Qi(c.color) > 0.5
              ? 1842210
              : 16052714
            : c.color2,
          c.color,
        );
        t &&
          (c.print === `school`
            ? $i(e, w, 0.42, 0.14, 0.742 * i, 0.772 * i, t, H.cloth, 0.8, 2)
            : $i(e, w, 0, 0.52, 0.64 * i, 0.77 * i, t, H.cloth, 0.85, 2));
      }
      if (
        e.lod === 0 &&
        (c.collar === `shirt` || c.collar === `polo`) &&
        n !== `all`
      ) {
        let t = yi(e, c.color, c.style === `police` ? 13214785 : 15855592),
          n = c.collar === `polo` ? 0.745 * i : c.hemY + 0.01;
        if (
          (t && $i(e, w, 0, 0.07, n, c.neckF - 0.004, t, H.cloth, 0.85, 2),
          c.style === `uniform` || c.style === `police` || c.style === `shirt`)
        ) {
          let t = xi(e, c.color, X(c.color, 0.8), `chest`);
          t && $i(e, w, -0.48, 0.3, 0.7 * i, 0.745 * i, t, H.cloth, 0.85, 2);
        }
      }
      if (e.lod === 0 && c.style === `hoodie` && n !== `all`) {
        let t = xi(e, c.color, X(c.color, 0.75), `pouch`);
        t && $i(e, w, 0, 0.95, c.hemY + 0.04, 0.6 * i, t, H.cloth, 0.9, 2);
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
        na(e, c.collar, c, w, h, T, c.color2);
    }
  }
  if (l && l.style !== `poncho`) {
    let r = hi(e, l.pattern, l.color, l.patternColor),
      c = r.rect ? Si(0.17, r.tileM) : 1,
      d = l.gap,
      p = s,
      m;
    if (d > 0) {
      let e = o;
      ((p = [d, d]), (m = [0, 1]));
      for (let t = 1; t < e; t++)
        (p.push(d + (t / e) * (Z - 2 * d)), m.push(1));
      (p.push(Z - d, Z - d), m.push(1, 0));
    }
    let h = (e) =>
        d +
        (l.collar === `lapel` || l.collar === `v`
          ? 0.35 * W(0.66 * i, 0.83 * i, e)
          : 0.05 * W(0.78 * i, 0.84 * i, e)),
      g = Ui(
        Hi(
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
            ? ji(t, e, r, u.off + 0.004, 0)
            : Hn(t, e, r, !0);
        return n.top && r >= n.top.hemY - 0.005
          ? Math.max(i, ji(t, e, r, n.top.off, n.top.loose))
          : i;
      },
      y = (e, n) => ji(t, e, n, l.off, l.loose),
      b = (e, t) => {
        if (d <= 0) return p[e];
        let n = h(t);
        return n + ((p[e] - d) / (Z - 2 * d)) * (Z - 2 * n);
      },
      x = p.length - 1,
      S = (e) =>
        l.hemY + (l.style === `blazer` ? 0.03 * i * Q(Ti(e, 0), 0.5) * 0 : 0);
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
              d = l >= 1 ? u : wi(v(c, s) - 0.001, u, l);
            return r.set(Math.sin(c) * d, s, G(t, s) - Math.cos(c) * d);
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
              m && m[c] === 0 && s.setHex(X(r.vcol, 0.8)),
              (u === 0 || u === _) && s.setHex(X(r.vcol, 0.82)));
            let p = Q(Math.abs(Ti(d, 0)) - Math.PI / 2, 0.4);
            (s.multiplyScalar(1 - 0.14 * p * Q(t - 0.72 * i, 0.06 * i)),
              (l.style === `bomber` || l.style === `windbreaker`) &&
                s.multiplyScalar(
                  1 -
                    0.05 * Math.abs(Math.sin((t / (0.07 * i)) * Math.PI)) ** 6,
                ));
          },
          skin: (e, n, r, i, a, o) => Wn(t, b(Math.round(i * x), n), n, o),
          kind:
            l.style === `bomber` || l.style === `windbreaker`
              ? H.satin
              : H.cloth,
          rough:
            l.style === `bomber`
              ? 0.5
              : l.style === `windbreaker`
                ? 0.45
                : 0.85,
          tex: Xi(r, (e, t, n) => {
            let i = Math.round(e * x),
              a = g[Math.round(t * _)].p;
            ((n[0] = (b(i, a) / Z) * c), (n[1] = a / r.tileM));
          }),
        },
      ),
      e.lod === 0 && d === 0 && l.style !== `vest` && l.style !== `gakuran`)
    ) {
      let t = bi(e, X(l.color, 0.8), 12172482);
      t &&
        $i(e, y, 0, 0.05, l.hemY + 0.005, l.neckY - 0.006, t, H.cloth, 0.6, 2);
    }
    if (l.print !== `none` && e.lod === 0) {
      let t = vi(e, l.print, l.color2, l.color);
      t && $i(e, y, Math.PI, 1.05, 0.6 * i, 0.8 * i, t, H.cloth, 0.7, 2);
    }
    if (l.style === `vest`) {
      for (let t of [0.63 * i, 0.705 * i]) ea(e, y, t, 0.022, 14673642);
      if (e.lod === 0) {
        let t = vi(e, `police`, 15922679, l.color);
        t &&
          e.desc.top.style === `police` &&
          $i(e, y, Math.PI, 0.9, 0.735 * i, 0.8 * i, t, H.reflect, 0.5, 2);
      }
    }
    l.collar !== `none` && ia(e, l, y);
  } else l && l.style === `poncho` && aa(e, l);
}
