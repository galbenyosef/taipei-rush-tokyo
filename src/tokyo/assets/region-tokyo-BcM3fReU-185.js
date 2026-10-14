// tokyo/assets/region-tokyo-BcM3fReU 185 — side
// Lines 77073-77302 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function JH(e, t, n) {
  let r = BH[t],
    i = UH[t],
    a = r.width / 2,
    o = n,
    s = n + 0.9;
  (e.setMaterial(0.4, 0.4, 0, 0),
    WH(e, i.face),
    GH(
      e,
      [a, 0.98, s],
      [a - 0.12, 0.98, o],
      [a - 0.16, r.side, o + 0.25],
      [a, r.side, s],
    ),
    GH(
      e,
      [-a + 0.12, 0.98, o],
      [-a, 0.98, s],
      [-a, r.side, s],
      [-a + 0.16, r.side, o + 0.25],
    ));
  let c = a - 0.12;
  (WH(e, t === `JY` ? [205, 210, 212] : i.face),
    GH(e, [c, 0.98, o], [-c, 0.98, o], [-c, 1.78, o], [c, 1.78, o]),
    i.faceBand &&
      (WH(e, i.faceBand),
      GH(
        e,
        [c, 1.58, o - 0.01],
        [-c, 1.58, o - 0.01],
        [-c, 1.74, o - 0.01],
        [c, 1.74, o - 0.01],
      )),
    e.setMaterial(0.08, 0.3, 0.05, 1),
    WH(e, [22, 26, 30]),
    GH(
      e,
      [c, 1.78, o],
      [-c, 1.78, o],
      [-a + 0.16, r.side, o + 0.25],
      [a - 0.16, r.side, o + 0.25],
    ),
    e.setMaterial(0.3, 0, 0.8, 0),
    WH(e, [255, 150, 40], 0.9),
    GH(
      e,
      [0.5, r.side - 0.24, o + 0.21],
      [-0.5, r.side - 0.24, o + 0.21],
      [-0.5, r.side - 0.06, o + 0.245],
      [0.5, r.side - 0.06, o + 0.245],
    ),
    e.setMaterial(0.6, 0.3, 0, 0),
    WH(e, i.roof),
    GH(
      e,
      [a - 0.16, r.side, o + 0.25],
      [-a + 0.16, r.side, o + 0.25],
      [-0.6, r.roof, s],
      [0.6, r.roof, s],
    ),
    GH(
      e,
      [a - 0.16, r.side, o + 0.25],
      [0.6, r.roof, s],
      [a, r.side, s],
      [a, r.side, s],
    ),
    GH(
      e,
      [-a + 0.16, r.side, o + 0.25],
      [-a, r.side, s],
      [-a, r.side, s],
      [-0.6, r.roof, s],
    ),
    e.setMaterial(0.2, 0, 1, 0),
    WH(e, [255, 252, 236]));
  for (let t of [-1, 1])
    GH(
      e,
      [t * 0.95 + 0.17, 1.2, o - 0.02],
      [t * 0.95 - 0.17, 1.2, o - 0.02],
      [t * 0.95 - 0.17, 1.38, o - 0.02],
      [t * 0.95 + 0.17, 1.38, o - 0.02],
    );
  WH(e, [255, 30, 24]);
  for (let t of [-1, 1])
    GH(
      e,
      [t * 1.22 + 0.08, 1.2, o - 0.02],
      [t * 1.22 - 0.08, 1.2, o - 0.02],
      [t * 1.22 - 0.08, 1.38, o - 0.02],
      [t * 1.22 + 0.08, 1.38, o - 0.02],
    );
  (e.setMaterial(0.8, 0.3, 0, 0),
    WH(e, [40, 40, 42]),
    e.box(0, 0.75, o - 0.25, 0.18, 0.12, 0.3));
}
function YH(e, t) {
  let n = BH.SK,
    r = UH.SK,
    i = n.width / 2,
    a = -n.len / 2,
    o = n.len / 2,
    s = t ? 10.5 : 0,
    c = [
      [i - 0.18, 0.95],
      [i, 1.3],
      [i, 1.55],
      [i, 1.72],
      [i, 1.78],
      [i, 1.84],
      [i, 2],
      [i, 2.5],
      [i, 2.62],
      [i - 0.12, 3],
      [i - 0.5, 3.4],
      [0, n.roof],
    ],
    l = [18, 70, 160],
    u = (e) => e === 2 || e === 4,
    d = (e) => {
      if (!t || e > a + s) return c;
      let n = 1 - (e - a) / s,
        r = 1 - 0.78 * n ** 1.5;
      return c.map(([e, t]) => {
        let i =
          t > 1.3 ? 1.25 + (t - 1.25) * (1 - n ** 1.25 * 0.82) : t + n * 0.15;
        return [e * r, i];
      });
    },
    f = [];
  if (t) for (let e = 0; e <= 8; e++) f.push(a + s * (e / 8) ** 0.85);
  else f.push(a);
  for (let e = Math.ceil((a + s + 0.01) / 2.5) * 2.5; e < o; e += 2.5)
    f.push(e);
  f.push(o);
  let p = [...new Set(f)].sort((e, t) => e - t),
    m = (e) => {
      let t = (((e - a) % 2.5) + 2.5) % 2.5;
      return e > a + s + 1.5 && e < o - 1.5 && t > 0.6 && t < 1.9;
    };
  for (let n = 0; n + 1 < p.length; n++) {
    let i = p[n],
      o = p[n + 1],
      f = d(i),
      h = d(o);
    for (let n = 0; n + 1 < c.length; n++) {
      let [c, d] = f[n],
        [p, g] = f[n + 1],
        [_, v] = h[n],
        [y, b] = h[n + 1],
        x = r.body,
        S = 0,
        C = (i + o) / 2;
      (t && C < a + s * 0.62 && C > a + s * 0.3 && n >= 8
        ? (x = [28, 32, 40])
        : n === 6 && !(t && C < a + s)
          ? ((x = m(C) ? r.glass : r.body), (S = m(C) ? 0.36 : 0))
          : u(n) && (x = l),
        e.setMaterial(S ? 0.12 : 0.35, S ? 0.2 : 0.1, S, +!!S),
        WH(e, x),
        GH(e, [_, v, o], [c, d, i], [p, g, i], [y, b, o]),
        GH(e, [-c, d, i], [-_, v, o], [-y, b, o], [-p, g, i]));
    }
  }
  if (t) {
    let t = d(a);
    (e.setMaterial(0.35, 0.1, 0, 0), WH(e, r.body));
    for (let n = 0; n + 1 < t.length; n++) {
      let [r, i] = t[n],
        [o, s] = t[n + 1];
      GH(e, [r, i, a], [-r, i, a], [-o, s, a], [o, s, a]);
    }
    (e.setMaterial(0.2, 0, 1, 0), WH(e, [255, 252, 236]));
    for (let t of [-1, 1])
      GH(
        e,
        [t * 0.55 + 0.2, 1.42, a + 1.2],
        [t * 0.55 - 0.2, 1.42, a + 1.2],
        [t * 0.6 - 0.2, 1.55, a + 1.5],
        [t * 0.6 + 0.2, 1.55, a + 1.5],
      );
  } else qH(e, `SK`, a, -1, !1);
  (qH(e, `SK`, o, 1, !1),
    e.setMaterial(0.8, 0.3, 0, 0),
    WH(e, [60, 62, 66]),
    e.box(0, 0.6, 0, i - 0.35, 0.3, n.len / 2 - 3.5));
  for (let t of [-n.len / 2 + 3, n.len / 2 - 3])
    e.box(0, 0.48, t, i - 0.5, 0.38, 1.4);
}
function XH(e) {
  let t = e.n,
    n = new b();
  (n.setAttribute(`position`, new x(e.pos.slice(0, t * 3), 3)),
    n.setAttribute(`normal`, new x(e.nor.slice(0, t * 3), 3)));
  let r = new Uint8Array(t * 4),
    i = new Uint8Array(t * 4);
  for (let n = 0; n < t; n++)
    ((r[n * 4] = e.ca[n * 8]),
      (r[n * 4 + 1] = e.ca[n * 8 + 1]),
      (r[n * 4 + 2] = e.ca[n * 8 + 2]),
      (r[n * 4 + 3] = 255),
      (i[n * 4] = e.ca[n * 8 + 4]),
      (i[n * 4 + 1] = e.ca[n * 8 + 5]),
      (i[n * 4 + 2] = e.ca[n * 8 + 6]),
      (i[n * 4 + 3] = e.ca[n * 8 + 7]));
  return (
    n.setAttribute(`color`, new x(r, 4, !0)),
    n.setAttribute(`aCity`, new x(i, 4, !0)),
    n.setIndex(new x(new Uint32Array(e.idx.subarray(0, e.ni)), 1)),
    n.computeBoundingBox(),
    n.computeBoundingSphere(),
    n
  );
}
function ZH(e) {
  let t = new Map(),
    n = new ce(4096, 6144);
  for (let r of e)
    for (let e of [!0, !1])
      (n.reset(),
        r === `SK` ? YH(n, e) : KH(n, r, e),
        t.set(`${r}:${e ? `head` : `mid`}`, XH(n)),
        r !== `SK` &&
          (n.reset(),
          KH(n, r, e, !0),
          t.set(`${r}:${e ? `head` : `mid`}:far`, XH(n))));
  return t;
}
