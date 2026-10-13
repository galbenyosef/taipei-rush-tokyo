// tokyo__assets__charWorker-DPNUr-Eu 37 — math
// Lines 12928-13239 of readable/tokyo__assets__charWorker-DPNUr-Eu.pretty.js (statement-aligned).
function $a(e, t) {
  let { desc: n, h: r, b: i, m: a, lod: o } = e,
    s = Ka(n.hair.style, i.female);
  if (!s) return;
  let c = r.hh / 0.23,
    l = n.hair.color,
    u = n.hair.color2 ?? l,
    d = X(l, 0.62),
    f = n.skin,
    p = Di(e),
    m = B.hair,
    h = 0.55,
    g = s.bangs,
    _ = Ya(s),
    v = (e) => t.d > 0 && e < t.d,
    y = s.bangs || n.hair.style === `bowl` || n.hair.style === `bob`,
    b = [
      `twoblock`,
      `sidepart`,
      `fade`,
      `undercut`,
      `spiky`,
      `bowl`,
      `elder`,
    ].includes(n.hair.style),
    x = !!s.curtain || s.tail !== void 0,
    S = (e) =>
      (s.th(0, e) +
        s.th(Math.PI / 2, e) +
        s.th(Math.PI, e) +
        s.th(-Math.PI / 2, e)) *
      0.25,
    C = (e, n) => {
      let r = (n < 0.16 ? za(S(n), s.th(e, n), H(0, 0.16, n)) : s.th(e, n)) * c;
      return (
        b &&
          (r *=
            1 +
            0.32 *
              Math.sin(e * 12 + 2.2 * Math.sin(n * 9)) *
              H(0.04, 0.2, n) *
              H(0.004 * c, 0.012 * c, r)),
        (!y || Ga(e) > (s.bangs?.span ?? 0) + 0.1) &&
          (r *= 0.22 + 0.78 * H(_(e), _(e) - 0.16, n)),
        b && (r *= 1 - 0.45 * H(0.22, 0.42, n) * H(0.7, 1.3, Ga(e))),
        g &&
          Ga(e) < g.span &&
          n > 0.24 &&
          (r = za(r, g.th * c, H(0.24, 0.3, n))),
        s.curls &&
          (r +=
            s.curls *
            0.005 *
            c *
            (0.5 +
              0.5 * Math.sin(e * 9 + n * 21) * Math.sin(n * 27 - e * 6.5))),
        v(n) && (r *= t.squash),
        r
      );
    },
    w = s.crown ?? 0,
    T = [];
  if (s.crown) {
    let e = o === 0 ? 20 : 10;
    for (let t = 0; t <= e; t++) T.push(1 + (t / e) * (Ra - 2));
  } else if (o === 0) {
    for (let e = 0; e < 5; e++) T.push(-Math.PI + (e / 5) * (Math.PI - 1.25));
    for (let e = -1.25; e < 1.249999; e += 1.25 / 7) T.push(e);
    for (let e = 0; e <= 5; e++) T.push(1.25 + (e / 5) * (Math.PI - 1.25));
  } else for (let e = 0, t = 10; e <= 10; e++) T.push(-Math.PI + (e / 10) * Ra);
  let E = T.length - 1,
    D = (
      o === 0
        ? s.curls
          ? [0, 0.14, 0.3, 0.46, 0.62, 0.8, 1]
          : [0, 0.22, 0.48, 0.74, 1]
        : [0, 0.45, 1]
    ).map((e) => ({ f: e, band: -1, k: 1, cut: 0 }));
  (s.crown && o === 0 && (D[0].cut = 0.6),
    o === 0 && D.push({ f: 1, band: 0.02, k: 1, cut: 0.3 }),
    D.push({ f: 1, band: 0, k: 1, cut: o === 0 ? 0.62 : 0 }),
    D.push({ f: 1, band: 0, k: 0, cut: o === 0 ? 0.85 : 0 }));
  let O = D.length - 1,
    k = (e, t) => {
      let n = _(e);
      return t.band >= 0 ? n - t.band : za(w, n - (o === 0 ? 0.045 : 0), t.f);
    },
    A = x ? 9 : 12,
    j = (e, t, n, r, i, a) => {
      let o = T[Math.round(r * E)];
      ((a[0] = ((o + Math.PI) / Ra) * A),
        (a[1] = k(o, D[Math.round(i * O)]) * 2.4));
    },
    M = (e, t, n, r, i) => {
      i.setHex(l);
      let a = 1.08 - 0.28 * H(0.3, 0.75, t);
      (i.multiplyScalar(a), r && i.setHex(d));
      let o =
        (s.shave
          ? Math.min(1, s.shave * 1.6) * H(0.007 * c, 0.0025 * c, n)
          : 0) + (b ? 0.25 * H(0.35, 0.55, t) * H(0.9, 1.4, Ga(e)) : 0);
      return (o > 0 && i.lerp(no.setHex(f), o * 0.62), i);
    };
  a.grid(
    {
      nu: E,
      nv: O,
      closed: !1,
      point: (e, t, n) => {
        let i = T[Math.round(e * E)],
          a = D[Math.round(t * O)],
          o = k(i, a);
        return qa(r, i, o, a.k > 0 ? C(i, o) : 6e-4, n);
      },
    },
    {
      color: (e, t, n, r, i, a) => {
        let o = T[Math.round(r * E)],
          s = D[Math.round(i * O)],
          c = k(o, s);
        return M(o, c, C(o, c), s.k === 0, a);
      },
      skin: R.head,
      kind: m,
      rough: h,
      bump: (e, t, n, r, i) => (p ? D[Math.round(i * O)].cut : 0),
      tex: p ? { rect: p, mode: 3, uv: j } : void 0,
    },
  );
  let ee = e.trim ?? 0;
  if (
    o === 0 &&
    ee < 2 &&
    p &&
    !s.crown &&
    !v(0.2) &&
    S(0.2) * c > 0.0045 * c
  ) {
    let e = T.filter((e, t) => t % 2 == 0 || t === E),
      t = e.length - 1,
      n = [0, 0.3, 0.62, 0.9],
      i = n.length - 1,
      o = (0.0022 + 0.0014 * !!x) * c,
      s = (e, t) => za(0, _(e) - (x ? 0.02 : 0.055), t);
    a.grid(
      {
        nu: t,
        nv: i,
        closed: !1,
        point: (a, c, l) => {
          let u = e[Math.round(a * t)],
            d = s(u, n[Math.round(c * i)]);
          return qa(r, u, d, C(u, d) + o * (1 - 0.5 * n[Math.round(c * i)]), l);
        },
      },
      {
        color: (r, a, o, c, l, d) => {
          let f = e[Math.round(c * t)],
            p = s(f, n[Math.round(l * i)]);
          return M(f, p, C(f, p), !1, d)
            .multiplyScalar(1.06)
            .lerp(no.setHex(u), 0.25);
        },
        skin: R.head,
        kind: m,
        rough: h,
        bump: (e, t, n, r, a) =>
          Math.round(a * i) === i ? 0.8 : Math.round(a * i) === 0 ? 0.55 : 0.46,
        tex: {
          rect: p,
          mode: 3,
          uv: (r, a, o, c, l, u) => {
            let d = e[Math.round(c * t)];
            ((u[0] = ((d + Math.PI) / Ra) * A * 1.15 + 0.37),
              (u[1] = s(d, n[Math.round(l * i)]) * 2.4 + 0.21));
          },
        },
      },
    );
  }
  (s.curtain && io(e, s, _, C, l, u, d, p, t),
    o === 0 &&
      !v(0.1) &&
      (s.tufts && ao(e, s.tufts, _, C, l, u, p),
      s.bangs &&
        s.bangs.jag > 0.01 &&
        ao(e, `fringe`, _, C, l, u, p, s.bangs.span),
      s.locks && oo(e, _, C, l, u, p),
      p && (eo(e, s, _, C, l, u, p), ee < 2 && to(e, s, _, C, l, u, p))),
    s.tail === `pony` && so(e, l, u, d, p),
    s.tail === `bun` && co(e, l, d, p),
    s.spikes && o === 0 && lo(e, s.spikes, C, l));
}
function eo(e, t, n, r, i, a, o) {
  let { h: s, m: c } = e,
    l = s.hh / 0.23,
    u = (e.desc.seed * 13 + 5) >>> 0,
    d = () => (u = (u * 1664525 + 1013904223) >>> 0) / 4294967296,
    f = t.bangs && t.bangs.jag <= 0.01 ? t.bangs.span : (t.bangs, 0),
    p = t.curtain ? t.curtain.span0 : 99,
    m = [],
    h = (e.trim ?? 0) >= 3 ? 0.28 : 0.19;
  for (let e = -Math.PI + 0.08; e < Math.PI; e += h * (Ga(e) > 2.2 ? 1.6 : 1)) {
    let n = Ga(e);
    n < f ||
      n > p - 0.05 ||
      (t.crown !== void 0 && n < 1.05) ||
      m.push(e + (d() - 0.5) * 0.05);
  }
  let g = new M(),
    _ = new Ze(),
    v = new Ze();
  for (let t of m) {
    let u = Ga(t),
      f = n(t),
      p = (u < 0.9 ? 0.06 : u < 1.7 ? 0.07 : 0.065) * (0.8 + 0.4 * d()),
      m = f - p * 0.8,
      h = f + p * 0.22,
      y = (u < 1 ? 0.06 : 0.02) * Math.sign(t) * (0.5 + d()),
      b = 0.1 + 0.05 * d();
    (_.setHex(i).multiplyScalar(0.92),
      v.setHex(i).lerp(no.setHex(a), 0.3).lerp(no.setHex(e.desc.skin), 0.12));
    let x = [0, 0.55, 1];
    c.grid(
      {
        nu: 1,
        nv: 2,
        closed: !1,
        point: (e, n, i) => {
          let a = x[Math.round(n * 2)],
            o = za(m, h, a),
            c = t + (e - 0.5) * b * (1 - 0.35 * a) + y * a * a,
            u = r(c, Math.min(o, f)) * (o < f ? 0.95 : 0.15),
            d = Math.max(u, 8e-4 * l) + 4e-4 * l * Math.sin(a * Math.PI);
          return (qa(s, c, Math.min(o, 0.99), d, g), i.copy(g));
        },
        invert: !1,
      },
      {
        color: (e, t, n, r, i, a) => a.copy(_).lerp(v, i),
        skin: R.head,
        kind: B.hair,
        rough: 0.55,
        bump: (e, t, n, r, i) => 0.12 + 0.72 * i * i,
        tex: {
          rect: o,
          mode: 3,
          uv: (e, n, r, i, a, o) => (
            (o[0] = i * 0.9 + t * 3.1),
            (o[1] = a * 0.5 + t)
          ),
        },
      },
    );
  }
}
function to(e, t, n, r, i, a, o) {
  let { h: s, m: c } = e,
    l = s.hh / 0.23,
    u = (e.desc.seed * 29 + 11) >>> 0,
    d = () => (u = (u * 1664525 + 1013904223) >>> 0) / 4294967296,
    f = t.curtain || t.tail ? 6 : 4,
    p = new M(),
    m = new M(),
    h = new M(),
    g = ro.setHex(i).lerp(no.setHex(a), 0.4).getHex();
  for (let e = 0; e < f; e++) {
    let i = (d() * 2 - 1) * Math.PI,
      a = 0.05 + d() * Math.max(0.05, Math.min(0.5, n(i) - 0.12));
    if (t.crown !== void 0 && a < t.crown + 0.05) continue;
    let u = r(i, a) * 0.85;
    (qa(s, i, a, u, p), qa(s, i, a, u + 0.01, m), m.sub(p).normalize());
    let f = (0.03 + 0.03 * d()) * l,
      _ = new M(Math.cos(i), 0, Math.sin(i)),
      v = new M(0, -1, 0).addScaledVector(m, 0.9).normalize();
    c.grid(
      {
        nu: 1,
        nv: 2,
        closed: !1,
        point: (e, t, n) => {
          let r = t;
          return (
            h
              .copy(p)
              .addScaledVector(m, f * (0.35 * r + 0.25 * r * r))
              .addScaledVector(v, f * 0.8 * r * r)
              .addScaledVector(_, (e - 0.5) * 0.009 * l * (1 - 0.5 * r)),
            n.copy(h)
          );
        },
      },
      {
        color: (e, t, n, r, i, a) => a.setHex(g).multiplyScalar(0.85 + 0.2 * i),
        skin: R.head,
        kind: B.hair,
        rough: 0.55,
        bump: (e, t, n, r, i) => 0.55 + 0.3 * i,
        tex: {
          rect: o,
          mode: 3,
          uv: (t, n, r, i, a, o) => (
            (o[0] = i * 0.3 + e * 0.29),
            (o[1] = a * 0.4 + e * 0.13)
          ),
        },
      },
    );
  }
}
const no = new Ze(),
  ro = new Ze();
