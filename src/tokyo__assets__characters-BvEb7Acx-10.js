// tokyo__assets__characters-BvEb7Acx 10 — math
// Lines 2872-3083 of readable/tokyo__assets__characters-BvEb7Acx.pretty.js (statement-aligned).
function* Zn(e) {
  let { m: t, h: n, faceRect: r, cover: i } = e,
    a = n.lay,
    { th: o, eyeCol: s } = Un(n),
    c = o.length - 1,
    l = o.map((e) => Hn(n, e)),
    u = Rn.length - 1,
    d = (e) => (e < 0 ? n.eyes[0] : n.eyes[1]),
    f = [];
  for (let e = 0; e <= c; e++) {
    let t = o[e],
      r = [];
    for (let i = 0; i <= u; i++) {
      let a = l[e][i],
        o = new k();
      if (s[e] && i >= On && i <= jn) {
        let e =
          i === kn || i === An
            ? 35e-5 * n.s
            : i === On
              ? n.lidTm
              : n.lidTm * 0.9;
        fn(n, d(t), t, a, e, o);
      } else hn(n, t, a, o);
      r.push(o);
    }
    f.push(r);
  }
  let p = o.findIndex((e) => e > a.eyeT + a.eyeW + 0.1),
    m = c - p,
    h = Rn.map((e, t) => t),
    g = (e) => (e < 0.52 || e > a.noseBaseD - 0.012 ? -1 : 0.09),
    _ = (c, u, d, p) => {
      let m = [];
      for (let e = c; e <= u; e++) m.push(e);
      let h = m.map((e) => d.map((t) => f[e][t].clone()));
      for (let [e, t] of p) {
        let n = m.indexOf(e);
        if (!(n < 0))
          for (let r = 0; r < d.length; r++) {
            if (t.includes(d[r])) continue;
            let i = r,
              a = r;
            for (; i > 0 && !t.includes(d[i]);) i--;
            for (; a < d.length - 1 && !t.includes(d[a]);) a++;
            let o = l[e][d[i]],
              s = l[e][d[a]],
              c = (l[e][d[r]] - o) / Math.max(1e-6, s - o);
            h[n][r].lerpVectors(h[n][i], h[n][a], c);
          }
      }
      let _ = m.length - 1,
        v = d.length - 1,
        y = (e, t) => !!i && i(o[m[e]], l[m[e]][d[t]]),
        b = (e, t) => {
          let n = l[m[e]][d[t]],
            r = g(n);
          return r > 0 && Math.abs(o[m[e]]) < r - 0.012;
        },
        x = (e, t) =>
          !!(
            (s[m[e]] && s[m[e + 1]] && d[t] === kn && d[t + 1] === An) ||
            (y(e, t) && y(e + 1, t) && y(e, t + 1) && y(e + 1, t + 1)) ||
            (b(e, t) && b(e + 1, t) && b(e, t + 1) && b(e + 1, t + 1))
          ),
        S = [0, 0],
        C = (e, t) => [Math.round(e * _), Math.round(t * v)],
        w = t.grid(
          {
            nu: _,
            nv: v,
            closed: !1,
            point: (e, t, n) => {
              let [r, i] = C(e, t);
              return n.copy(h[r][i]);
            },
            skip: x,
          },
          {
            color: (t, r, i, c, u, f) => {
              let [p, h] = C(c, u),
                g = m[p],
                _ = d[h],
                v = o[g],
                y = l[g][_];
              if ((qn(n, e.skin, v, y, f), _ === Fn || _ === In)) {
                let e = Math.abs(v) / a.mouthW;
                e < 1 && f.lerp(Gn.setHex(5905954), 0.55 * (1 - e * e));
              }
              if (s[g] && (_ === kn || _ === An)) {
                let e = (Math.abs(v) - a.eyeT) / a.eyeW;
                (f.multiplyScalar(_ === kn ? 0.55 : 0.85),
                  _ === An && f.lerp(Gn.setHex(14191238), 0.35),
                  e < -0.9 && f.lerp(Gn.setHex(13662840), 0.6));
              }
              return (s[g] && _ === On && f.multiplyScalar(0.8), f);
            },
            skin: (e, t, r, i, a, s) => {
              let [c, u] = C(i, a),
                f = d[u];
              Kn(
                n,
                o[m[c]],
                l[m[c]][f],
                s,
                f >= In && f <= Ln,
                f >= Pn && f <= Fn,
              );
            },
            kind: B.skin,
            rough: (e, t, r, i, a) => {
              let [c, u] = C(i, a),
                f = m[c],
                p = d[u];
              return s[f] && (p === An || p === jn)
                ? 0.16
                : Jn(n, o[f], l[f][p]);
            },
            bump: 1,
            tex: r
              ? {
                  rect: r,
                  mode: 0,
                  uv: (e, t, n, r, i, s) => {
                    let [c, u] = C(r, i);
                    (vn(a, o[m[c]], l[m[c]][d[u]], S),
                      (s[0] = S[0]),
                      (s[1] = S[1]));
                  },
                }
              : void 0,
          },
        ),
        T = t.nor;
      for (let e = 0; e <= v; e++)
        for (let t = 0; t <= _; t++) {
          let r = m[t],
            i = d[e];
          if (s[r] && i >= On && i <= jn) continue;
          let a = (w + e * (_ + 1) + t) * 3,
            c = l[r][i];
          (c < 0.02
            ? K.set(0, 1, 0)
            : (Cn(n, o[r], Math.min(0.995, c), K, i === Fn ? -1 : +(i === In)),
              c > 0.97 &&
                K.lerp(
                  Wn.set(0, -1, 0.3).normalize(),
                  H(0.97, 1, c),
                ).normalize()),
            (T[a] = K.x),
            (T[a + 1] = K.y),
            (T[a + 2] = K.z));
        }
    };
  (yield,
    _(m, p, h, [
      [m, zn],
      [p, zn],
    ]),
    yield,
    _(0, m, zn, [[0, Bn]]),
    _(p, c, zn, [[c, Bn]]),
    Qn(e, l[0]),
    yield,
    $n(e),
    nr(e),
    yield,
    rr(e),
    or(e));
}
function Qn(e, t) {
  let { m: n, h: r, cover: i } = e,
    a = (e) => Vn + e * (Wt - 2 * Vn),
    o = Bn.map((e) => t[e]),
    s = o.length - 1,
    c = (e, t) => !!i && i(a(e), o[Math.round(t * s)]),
    l = n.grid(
      {
        nu: 6,
        nv: s,
        closed: !1,
        point: (e, t, n) => hn(r, a(e), o[Math.round(t * s)], n),
        skip: (e, t) =>
          c(e / 6, t / s) &&
          c((e + 1) / 6, t / s) &&
          c(e / 6, (t + 1) / s) &&
          c((e + 1) / 6, (t + 1) / s),
      },
      {
        color: (t, n, i, c, l, u) =>
          qn(r, e.skin, a(c), o[Math.round(l * s)], u),
        skin: R.head,
        kind: B.skin,
        rough: 0.55,
        bump: 0.6,
      },
    ),
    u = n.nor;
  for (let e = 0; e <= s; e++)
    for (let t = 0; t <= 6; t++) {
      let n = (l + e * 7 + t) * 3,
        i = o[e];
      (i < 0.02
        ? K.set(0, 1, 0)
        : (Cn(r, a(t / 6), Math.min(0.995, i), K),
          i > 0.97 &&
            K.lerp(Wn.set(0, -1, 0.3).normalize(), H(0.97, 1, i)).normalize()),
        (u[n] = K.x),
        (u[n + 1] = K.y),
        (u[n + 2] = K.z));
    }
}
