// tokyo/assets/characters-BvEb7Acx 11 — math
// Lines 3084-3358 of readable/tokyo/assets/characters-BvEb7Acx.pretty.js (statement-aligned).
function $n(e) {
  let { m: t, h: n, b: r } = e,
    i = n.lay,
    a = n.s,
    o = Gn.setHex(e.skin).multiplyScalar(0.9).getHex(),
    s = e.lashColor ?? 1182472,
    c = e.lashLen ?? 0.3;
  for (let l of n.eyes) {
    let u = l.side,
      d = u < 0 ? R.eyeL : R.eyeR,
      f = u < 0 ? R.lidL : R.lidR;
    r.joints.p[d].copy(l.c);
    let p = (Math.PI / 180) * 75,
      m = (Math.PI / 180) * 44,
      h = Math.cos(0.62),
      g = (e, t, n) => {
        let r = (e * 2 - 1) * p,
          i = (t * 2 - 1) * m;
        return n.set(
          Math.sin(r) * Math.cos(i),
          Math.sin(i),
          -Math.cos(r) * Math.cos(i),
        );
      },
      _ = t.grid(
        {
          nu: 6,
          nv: 3,
          closed: !1,
          point: (e, t, n) => {
            g(e, t, K);
            let r = -K.z,
              i = r > h ? ((r - h) / (1 - h)) ** 1.4 * 7e-4 * a : 0;
            return n.copy(l.c).addScaledVector(K, l.r + i);
          },
          invert: !0,
        },
        {
          color: (e, t, n, r, i, a) => {
            g(r, i, K);
            let o = 1 - Math.max(0, -K.z) ** 0.8;
            return (
              a
                .setRGB(1, 1, 1)
                .multiplyScalar(1 - 0.5 * o - 0.22 * H(0.1, 0.55, K.y)),
              a
            );
          },
          skin: d,
          kind: B.eye,
          rough: 0.05,
          tex: e.eyeRect
            ? {
                rect: e.eyeRect,
                mode: 2,
                uv: (e, t, n, r, i, a) => {
                  let o = (r * 2 - 1) * p,
                    s = (i * 2 - 1) * m;
                  ((a[0] = 0.5 + o / Math.PI),
                    (a[1] = 0.5 + s / (Math.PI / 2)));
                },
              }
            : void 0,
        },
      );
    for (let e = 0; e <= 3; e++)
      for (let n = 0; n <= 6; n++) {
        g(n / 6, e / 3, K);
        let r = (_ + e * 7 + n) * 3;
        ((t.nor[r] = K.x), (t.nor[r + 1] = K.y), (t.nor[r + 2] = K.z));
      }
    let v = [-1, -0.5, 0.05, 0.55, 1],
      y = (e) => u * (i.eyeT + e * i.eyeW);
    if (
      (fn(n, l, y(0), qt(i, 0) - 0.001, 0.0012 * a, r.joints.p[f]),
      t.grid(
        {
          nu: v.length - 1,
          nv: 2,
          closed: !1,
          point: (e, t, r) => {
            let o = v[Math.round(e * (v.length - 1))],
              s = Gt(qt(i, o) - 0.002, Jt(i, o) + 0.001, t);
            return fn(
              n,
              l,
              y(o),
              s,
              8e-4 * a + 4e-4 * a * Math.sin(t * Math.PI),
              r,
            );
          },
          invert: u < 0,
        },
        {
          color: (e, t, n, r, i, a) => a.setHex(i > 0.9 ? er(o, s, 0.6) : o),
          skin: f,
          kind: B.skin,
          rough: 0.5,
        },
      ),
      e.lashRect)
    ) {
      let r = [-0.8, -0.35, 0.1, 0.55, 1.02],
        o = (0.0042 + 0.0048 * c) * a,
        d = new k(),
        f = new k(),
        p = new k();
      t.grid(
        {
          nu: r.length - 1,
          nv: 2,
          closed: !1,
          point: (e, t, s) => {
            let c = r[Math.round(e * (r.length - 1))],
              m = Kt(c, -1, 1),
              h = qt(i, m) - 0.0028;
            (fn(n, l, y(m), h, n.lidTm + 2e-4 * a, d),
              f.subVectors(d, l.c).normalize(),
              p.set(0, 1, 0).addScaledVector(f, -f.y).normalize());
            let g = t,
              _ =
                o *
                (0.55 + 0.45 * Math.sin(((m + 1) / 2) * Math.PI * 0.9)) *
                (c > 1 ? 0.85 : 1);
            return (
              s
                .copy(d)
                .addScaledVector(f, _ * (0.55 * g - 0.1 * g * g))
                .addScaledVector(p, _ * (0.3 * g + 0.55 * g * g)),
              (s.x += u * _ * 0.35 * g * Math.max(0, m)),
              s
            );
          },
          invert: u > 0,
        },
        {
          color: s,
          skin: R.head,
          kind: B.hair,
          rough: 0.6,
          tex: {
            rect: e.lashRect,
            mode: 2,
            uv: (e, t, n, r, i, a) => ((a[0] = r), (a[1] = i)),
          },
        },
      );
    }
  }
}
function er(e, t, n) {
  return Gn.setHex(e).lerp(tr.setHex(t), n).getHex();
}
var tr = new M();
function nr(e) {
  let { m: t, h: n, lod: r, faceRect: i } = e,
    a = n.lay,
    o = n.face,
    s = n.s,
    c = o.bridge,
    l = 0.85 + 0.35 * o.noseW,
    u = 0.9 + 0.2 * o.noseL,
    d = (0.0125 + 0.004 * c) * s * u,
    f = [
      [0.46, 0.085, 3e-4 * s, 0, 0],
      [0.515, 0.11, (0.0016 + 0.0018 * c) * s, 0, 0],
      [0.567, 0.13, (0.0034 + 0.0032 * c) * s, 0, 0],
      [0.617, 0.15, (0.0058 + 0.004 * c) * s * u, 0, 0],
      [a.noseTipD - 0.022, 0.172 * l, d * 0.84, 1, 0],
      [a.noseTipD, 0.185 * l, d, 1, -0.004],
      [a.noseTipD + 0.013, 0.19 * l, d * 0.9, 1, -0.008],
      [a.noseBaseD - 0.009, 0.188 * l, d * 0.55, 2, -0.014],
      [a.noseBaseD + 0.004, 0.182 * l, 0, 3, -0.024],
    ],
    p = r === 0 ? f : [f[0], f[2], f[4], f[5], f[8]],
    m =
      r === 0
        ? [-1, -0.76, -0.5, -0.24, 0, 0.24, 0.5, 0.76, 1]
        : [-1, -0.4, 0, 0.4, 1],
    h = m.length - 1,
    g = p.length - 1,
    _ = [0, 0],
    v = (e, t, n) => {
      let r = Math.max(0, Math.min(1, 0.5 + (0.5 * (e - t)) / n));
      return t + (e - t) * r + n * r * (1 - r);
    },
    y = (e, t) => {
      let n = Math.abs(e);
      if (n >= 1) return 0;
      let r = (1 - n * n) * (1 - n * n),
        i = t[2];
      if (t[3] === 0) return i * (0.55 * W(e, 0.3) + 0.45 * r);
      if (t[3] === 1) {
        let t = i * Math.max(0, 1 - (e / 0.5) * (e / 0.5)) ** 0.6,
          a = i * 0.95 * W(n - 0.55, 0.2);
        return v(t, a, i * 0.18) * r;
      }
      if (t[3] === 2) {
        let t = i * W(e, 0.14),
          a = i * 1.05 * W(n - 0.55, 0.18),
          o = i * 0.35 * W(n - 0.3, 0.11);
        return Math.max(0, (Math.max(t, a) - o) * r);
      }
      return 0;
    },
    b = (e, t) => e[0] + e[4] * t * t,
    x = (e) => {
      let t = Math.abs(e);
      return 45e-5 * s * (1 - H(0.62, 0.95, t)) - 5e-4 * s * H(0.8, 1, t);
    },
    S = (e, t, r) => {
      let i = Math.round(t * g),
        a = Math.round(e * h),
        o = p[i],
        c = m[a];
      return G(n, c * o[1], b(o, c), y(c, o) + (i === 0 ? -4e-4 * s : x(c)), r);
    },
    C = t.vertexCount;
  t.grid(
    { nu: h, nv: g, closed: !1, point: S },
    {
      color: (t, r, i, a, o, s) => {
        let c = Math.round(o * g),
          l = Math.round(a * h),
          u = m[l],
          d = Math.abs(u);
        qn(n, e.skin, u * p[c][1], b(p[c], u), s);
        let f = p[c][3];
        return (
          f >= 2 &&
            s.multiplyScalar(1 - (f === 3 ? 0.55 : 0.4) * W(d - 0.3, 0.12)),
          f >= 1 && c >= g - 3 && s.multiplyScalar(1 - 0.1 * W(d - 0.78, 0.1)),
          f === 1 &&
            d < 0.5 &&
            ((s.r = Math.min(1, s.r * 1.04)), (s.g *= 0.985)),
          s
        );
      },
      skin: R.head,
      kind: B.skin,
      rough: (e, t, n, r, i) =>
        p[Math.round(i * g)][3] >= 2
          ? 0.55
          : 0.38 + 0.12 * Math.abs(m[Math.round(r * h)]),
      bump: 0.8,
      tex: i
        ? {
            rect: i,
            mode: 0,
            uv: (e, t, r, i, a, o) => {
              let s = Math.round(a * g),
                c = Math.round(i * h);
              (vn(n.lay, m[c] * p[s][1], b(p[s], m[c]), _),
                (o[0] = _[0]),
                (o[1] = _[1]));
            },
          }
        : void 0,
    },
  );
  let w = t.nor;
  for (let e = 0; e <= g; e++)
    for (let t = 0; t <= h; t++) {
      let r = H(0.95, 0.45, Math.abs(m[t])) * (e === 0 ? 0 : e === 1 ? 0.6 : 1);
      if (r >= 0.999) continue;
      let i = (C + e * (h + 1) + t) * 3;
      (Cn(n, m[t] * p[e][1], b(p[e], m[t]), K),
        Wn.set(w[i], w[i + 1], w[i + 2]),
        K.lerp(Wn, r).normalize(),
        (w[i] = K.x),
        (w[i + 1] = K.y),
        (w[i + 2] = K.z));
    }
}
