// tokyo/assets/region-tokyo-55J_WESF 371 — parapet
// Lines 134882-135209 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function QQ(e, t, n, r, i, a) {
  let o = Ro;
  if (
    (e.setMaterial(0.88, 0, 0, 0),
    RQ(e, 190, 188, 180),
    KQ(
      e,
      t,
      n,
      r < 0 ? -i : i - 0.4,
      r < 0 ? -i + 0.4 : i,
      o.parapet,
      o.parapet,
      1,
    ),
    qQ(e, t, n, r * (i - 0.4), t.y, t.y + o.parapet, n.y, n.y + o.parapet, -r),
    !a)
  )
    return;
  (e.setMaterial(0.35, 0.1, 0, 0), RQ(e, 170, 186, 190));
  let s = r < 0 ? -i : i - 0.12,
    c = r < 0 ? -i + 0.12 : i;
  (qQ(
    e,
    t,
    n,
    s,
    t.y + o.parapet,
    t.y + o.parapet + o.wall,
    n.y + o.parapet,
    n.y + o.parapet + o.wall,
    -1,
  ),
    qQ(
      e,
      t,
      n,
      c,
      t.y + o.parapet,
      t.y + o.parapet + o.wall,
      n.y + o.parapet,
      n.y + o.parapet + o.wall,
      1,
    ),
    KQ(e, t, n, s, c, o.parapet + o.wall, o.parapet + o.wall, 1));
}
function eNe(e, t, n) {
  let r = Ro.half,
    i = Ro;
  (e.setMaterial(0.9, 0, 0, 0),
    RQ(e, 168, 166, 158),
    qQ(
      e,
      t,
      n,
      -r,
      -0.05000000000000002,
      t.y + i.parapet,
      -0.05000000000000002,
      n.y + i.parapet,
      -1,
    ),
    qQ(
      e,
      t,
      n,
      r,
      -0.05000000000000002,
      t.y + i.parapet,
      -0.05000000000000002,
      n.y + i.parapet,
      1,
    ),
    QQ(e, t, n, -1, r, !1),
    QQ(e, t, n, 1, r, !1));
}
function tNe(e, t, n) {
  let r = Ho();
  for (let i = 0; i < r.n - 1; i++)
    Uo(r, i) !== `deck` ||
      Math.min(r.y[i], r.y[i + 1]) < Ro.slab + Ro.girder + 4.2 ||
      (BQ(n, (r.x[i] + r.x[i + 1]) / 2, (r.z[i] + r.z[i + 1]) / 2) &&
        WMe(e, t, {
          ax: r.x[i],
          az: r.z[i],
          bx: r.x[i + 1],
          bz: r.z[i + 1],
          half: Ro.half,
          ya: r.y[i],
          yb: r.y[i + 1],
          kind: `expressway`,
          solid: !1,
          pier: !1,
        }));
}
function nNe(e, t, n) {
  let r = rQ,
    i = r - Ro.edge;
  for (let { L: t } of aQ())
    for (let a = 0; a < t.n - 1; a++) {
      if (!BQ(n, (t.x[a] + t.x[a + 1]) / 2, (t.z[a] + t.z[a + 1]) / 2))
        continue;
      let o = UQ(t, a),
        s = UQ(t, a + 1),
        c = GQ(o, s, 0.5),
        l = [];
      for (let e = -r; e < r - 1e-6; e += 1) {
        let t = Math.min(r, e + 1),
          n = WQ(c, (e + t) / 2, 0);
        if (oQ(n[0], n[2])) continue;
        let i = l[l.length - 1];
        i && Math.abs(i[1] - e) < 1e-6 ? (i[1] = t) : l.push([e, t]);
      }
      for (let [t, n] of l) {
        (e.setMaterial(0.88, 0, 0, 0),
          RQ(e, 70, 70, 74),
          KQ(e, o, s, Math.max(t, -i), Math.min(n, i), 0, 0, 1),
          t < -i && KQ(e, o, s, t, -i, 0, 0, 1),
          n > i && KQ(e, o, s, i, n, 0, 0, 1),
          RQ(e, 168, 166, 158),
          KQ(e, o, s, t, n, -Ro.slab, -Ro.slab, -1),
          e.setMaterial(0.6, 0.3, 0, 0),
          RQ(e, 150, 160, 152));
        let r = (t + n) / 2,
          a = zo(o.y),
          c = zo(s.y);
        n - t > 2.5 &&
          (KQ(e, o, s, r - 1, r + 1, -Ro.slab - a, -Ro.slab - c, -1),
          qQ(
            e,
            o,
            s,
            r - 1,
            o.y - Ro.slab - a,
            o.y - Ro.slab,
            s.y - Ro.slab - c,
            s.y - Ro.slab,
            -1,
          ),
          qQ(
            e,
            o,
            s,
            r + 1,
            o.y - Ro.slab - a,
            o.y - Ro.slab,
            s.y - Ro.slab - c,
            s.y - Ro.slab,
            1,
          ));
      }
      for (let t of [-1, 1]) {
        let n = WQ(c, t * (r - 0.2), 0);
        if (oQ(n[0], n[2], -0.5)) continue;
        let i = zo(o.y),
          a = zo(s.y);
        (e.setMaterial(0.88, 0, 0, 0),
          RQ(e, 150, 156, 148),
          qQ(
            e,
            o,
            s,
            t * r,
            o.y - Ro.slab - i,
            o.y + Ro.parapet,
            s.y - Ro.slab - a,
            s.y + Ro.parapet,
            t,
          ),
          QQ(e, o, s, t, r, !0),
          e.setMaterial(0.6, 0, 0, 16),
          RQ(e, 226, 226, 220));
        let l = t * (r - 1.1);
        KQ(e, o, s, l - 0.08, l + 0.08, 0.02, 0.02, 1);
      }
    }
  for (let r of e$(t)) BQ(n, r.x, r.z) && i$(e, r);
}
var $Q = new WeakMap();
function e$(e) {
  let t = $Q.get(e);
  if (t) return t;
  t = [];
  let n = Wl(e).rail;
  for (let { L: r } of aQ())
    for (let i = 14; i < r.length - 6; i += 28) {
      let a = 0;
      for (; a < r.n - 2 && r.s[a + 1] < i;) a++;
      let o = GQ(
        UQ(r, a),
        UQ(r, a + 1),
        (i - r.s[a]) / Math.max(1e-6, r.s[a + 1] - r.s[a]),
      );
      if (oQ(o.x, o.z, 3)) continue;
      let s = e.surfaceAt(o.x, o.z);
      if (s === `water` || (n.length && Bl(n, o.x, o.z, 2.5))) continue;
      if (s === `road` || s === `crosswalk`) {
        let t = e.roadAt(o.x, o.z);
        if (
          !t ||
          Math.abs((t.axis === `x` ? o.z : o.x) - t.at) > t.median / 2 - 1.6
        )
          continue;
      }
      let c = o.y - Ro.slab - zo(o.y) - 1.4;
      t.push({
        x: o.x,
        z: o.z,
        y0: e.groundHeight(o.x, o.z),
        top: c,
        rx: o.rx,
        rz: o.rz,
        deckY: o.y,
        half: rQ,
      });
    }
  return ($Q.set(e, t), t);
}
function t$(e, t, n) {
  let r = JMe({ x: (t.x + n.x) / 2, z: (t.z + n.z) / 2 }),
    i = r ? [...(ZQ(e).get(r) ?? [])] : [];
  if (r)
    for (let e of es)
      e.maxX < r.minX ||
        e.minX > r.maxX ||
        e.maxZ < r.minZ ||
        e.minZ > r.maxZ ||
        i.push(
          r.axis === `x`
            ? { a0: e.minX, a1: e.maxX }
            : { a0: e.minZ, a1: e.maxZ },
        );
  let a = (e) => (r?.axis === `x` ? e.x : e.z),
    o = a(t),
    s = a(n),
    c = [0, 1];
  for (let e of i)
    for (let t of [e.a0, e.a1]) {
      let e = (t - o) / (s - o || 1);
      e > 0 && e < 1 && c.push(e);
    }
  c.sort((e, t) => e - t);
  let l = [];
  for (let e = 0; e + 1 < c.length; e++) {
    let t = o + (s - o) * ((c[e] + c[e + 1]) / 2);
    l.push([c[e], c[e + 1], i.some((e) => t > e.a0 && t < e.a1)]);
  }
  return l;
}
function rNe(e, t, n, r) {
  let i = Ro.half,
    a = Ro,
    o = i + qo,
    s = zQ + a.coping,
    c = t$(t, n, r);
  for (let [t, a, l] of c) {
    let c = GQ(n, r, t),
      u = GQ(n, r, a),
      d = l ? -0.6 : s,
      f = c.s !== void 0 && u.s !== void 0 ? (c.s + u.s) / 2 : -1;
    for (let t of [-1, 1]) {
      if (f >= 0 && $o(f, t)) {
        (e.setMaterial(0.88, 0, 0, 0),
          RQ(e, 70, 70, 74),
          KQ(
            e,
            c,
            u,
            t < 0 ? -i : i - Ro.edge,
            t < 0 ? -i + Ro.edge : i,
            0,
            0,
            1,
          ));
        continue;
      }
      if (
        (e.setMaterial(0.92, 0, 0, 0),
        RQ(e, 150, 148, 140),
        qQ(e, c, u, t * i, c.y, d, u.y, d, -t),
        RQ(e, 186, 184, 176),
        KQ(e, c, u, t < 0 ? -i : i - 0.45, t < 0 ? -i + 0.45 : i, 0.8, 0.8, 1),
        qQ(e, c, u, t * (i - 0.45), c.y, c.y + 0.8, u.y, u.y + 0.8, -t),
        l)
      )
        continue;
      (RQ(e, 176, 174, 166),
        t < 0
          ? VQ(
              e,
              WQ(c, -o, s),
              WQ(c, -i, s),
              WQ(u, -i, s),
              WQ(u, -o, s),
              0,
              1,
              0,
            )
          : VQ(e, WQ(c, i, s), WQ(c, o, s), WQ(u, o, s), WQ(u, i, s), 0, 1, 0),
        qQ(e, c, u, t * o, 0.09999999999999999, s, 0.09999999999999999, s, t),
        e.setMaterial(0.5, 0.4, 0, 0),
        RQ(e, 92, 104, 98));
      let n = t * (i + qo / 2);
      (qQ(e, c, u, n, s, s + 1.2, s, s + 1.2, 1),
        qQ(e, c, u, n, s, s + 1.2, s, s + 1.2, -1));
    }
  }
}
function n$(e) {
  let t = Math.sign(e.end - e.street),
    n = e.at + e.side * Yo.off,
    r = e.axis === `x` ? t : 0,
    i = e.axis === `z` ? t : 0,
    a = new Set([e.street, e.street + t * e.walk, e.end, e.grade]);
  for (let n = e.street; (e.end - n) * t > 0; n += t * 4) a.add(n);
  return [...a]
    .sort((e, n) => (e - n) * t)
    .map((t) => ({
      x: e.axis === `x` ? t : n,
      z: e.axis === `z` ? t : n,
      y: e.yAt(t),
      rx: -i,
      rz: r,
      ux: r,
      uz: i,
      s: t,
    }));
}
