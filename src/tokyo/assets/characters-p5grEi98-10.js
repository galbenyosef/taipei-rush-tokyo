// tokyo/assets/characters-p5grEi98 10 — math
// Lines 2872-3083 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
function* Qn(e) {
  let { m: t, h: n, faceRect: r, cover: i } = e,
    a = n.lay,
    { th: o, eyeCol: s } = Wn(n),
    c = o.length - 1,
    l = o.map((e) => Un(n, e)),
    u = zn.length - 1,
    d = (e) => (e < 0 ? n.eyes[0] : n.eyes[1]),
    f = [];
  for (let e = 0; e <= c; e++) {
    let t = o[e],
      r = [];
    for (let i = 0; i <= u; i++) {
      let a = l[e][i],
        o = new D();
      if (s[e] && i >= kn && i <= Mn) {
        let e =
          i === An || i === jn
            ? 35e-5 * n.s
            : i === kn
              ? n.lidTm
              : n.lidTm * 0.9;
        pn(n, d(t), t, a, e, o);
      } else gn(n, t, a, o);
      r.push(o);
    }
    f.push(r);
  }
  let p = o.findIndex((e) => e > a.eyeT + a.eyeW + 0.1),
    m = c - p,
    h = zn.map((e, t) => t),
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
            (s[m[e]] && s[m[e + 1]] && d[t] === An && d[t + 1] === jn) ||
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
              if ((Jn(n, e.skin, v, y, f), _ === In || _ === Ln)) {
                let e = Math.abs(v) / a.mouthW;
                e < 1 && f.lerp(Kn.setHex(5905954), 0.55 * (1 - e * e));
              }
              if (s[g] && (_ === An || _ === jn)) {
                let e = (Math.abs(v) - a.eyeT) / a.eyeW;
                (f.multiplyScalar(_ === An ? 0.55 : 0.85),
                  _ === jn && f.lerp(Kn.setHex(14191238), 0.35),
                  e < -0.9 && f.lerp(Kn.setHex(13662840), 0.6));
              }
              return (s[g] && _ === kn && f.multiplyScalar(0.8), f);
            },
            skin: (e, t, r, i, a, s) => {
              let [c, u] = C(i, a),
                f = d[u];
              qn(
                n,
                o[m[c]],
                l[m[c]][f],
                s,
                f >= Ln && f <= Rn,
                f >= Fn && f <= In,
              );
            },
            kind: z.skin,
            rough: (e, t, r, i, a) => {
              let [c, u] = C(i, a),
                f = m[c],
                p = d[u];
              return s[f] && (p === jn || p === Mn)
                ? 0.16
                : Yn(n, o[f], l[f][p]);
            },
            bump: 1,
            tex: r
              ? {
                  rect: r,
                  mode: 0,
                  uv: (e, t, n, r, i, s) => {
                    let [c, u] = C(r, i);
                    (yn(a, o[m[c]], l[m[c]][d[u]], S),
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
          if (s[r] && i >= kn && i <= Mn) continue;
          let a = (w + e * (_ + 1) + t) * 3,
            c = l[r][i];
          (c < 0.02
            ? G.set(0, 1, 0)
            : (wn(n, o[r], Math.min(0.995, c), G, i === In ? -1 : +(i === Ln)),
              c > 0.97 &&
                G.lerp(
                  Gn.set(0, -1, 0.3).normalize(),
                  V(0.97, 1, c),
                ).normalize()),
            (T[a] = G.x),
            (T[a + 1] = G.y),
            (T[a + 2] = G.z));
        }
    };
  (yield,
    _(m, p, h, [
      [m, Bn],
      [p, Bn],
    ]),
    yield,
    _(0, m, Bn, [[0, Vn]]),
    _(p, c, Bn, [[c, Vn]]),
    $n(e, l[0]),
    yield,
    er(e),
    rr(e),
    yield,
    ir(e),
    sr(e));
}
function $n(e, t) {
  let { m: n, h: r, cover: i } = e,
    a = (e) => Hn + e * (Gt - 2 * Hn),
    o = Vn.map((e) => t[e]),
    s = o.length - 1,
    c = (e, t) => !!i && i(a(e), o[Math.round(t * s)]),
    l = n.grid(
      {
        nu: 6,
        nv: s,
        closed: !1,
        point: (e, t, n) => gn(r, a(e), o[Math.round(t * s)], n),
        skip: (e, t) =>
          c(e / 6, t / s) &&
          c((e + 1) / 6, t / s) &&
          c(e / 6, (t + 1) / s) &&
          c((e + 1) / 6, (t + 1) / s),
      },
      {
        color: (t, n, i, c, l, u) =>
          Jn(r, e.skin, a(c), o[Math.round(l * s)], u),
        skin: L.head,
        kind: z.skin,
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
        ? G.set(0, 1, 0)
        : (wn(r, a(t / 6), Math.min(0.995, i), G),
          i > 0.97 &&
            G.lerp(Gn.set(0, -1, 0.3).normalize(), V(0.97, 1, i)).normalize()),
        (u[n] = G.x),
        (u[n + 1] = G.y),
        (u[n + 2] = G.z));
    }
}
