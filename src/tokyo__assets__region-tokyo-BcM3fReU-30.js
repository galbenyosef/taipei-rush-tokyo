// tokyo__assets__region-tokyo-BcM3fReU 30 — math
// Lines 18026-18330 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Zu(e) {
  let t = Ju.get(e);
  if (t) return t;
  let n = [],
    r = [],
    i = [],
    a = [],
    o,
    s = 0,
    c = [],
    l = e.sidewalkHeight + 0.04,
    u = (t, c, u, d, f, p, m, h) => {
      for (let g = 0; g + 1 < t.length; g++) {
        let [_, v] = t[g],
          [y, b] = t[g + 1],
          x = Math.hypot(y - _, b - v);
        if (!(x > 0.01)) continue;
        let S = c(g),
          C = c(g + 1),
          w = Math.max(1, Math.ceil(x / qu));
        for (let t = 0; t < w; t++) {
          let r = t / w,
            i = (t + 1) / w,
            a = S + (C - S) * r,
            s = S + (C - S) * i,
            c = _ + (y - _) * r,
            m = v + (b - v) * r,
            x = _ + (y - _) * i,
            T = v + (b - v) * i;
          p && Math.min(a, s) > 2.5
            ? n.push({
                ax: c,
                az: m,
                bx: x,
                bz: T,
                half: u,
                ya: a,
                yb: s,
                kind: d,
                solid: f,
                pier: !f && Xu(e, c, m, 1.2, d === `expressway` ? o : void 0),
              })
            : p &&
              h?.(g) &&
              Math.max(a, s) > 0.05 &&
              n.push({
                ax: c,
                az: m,
                bx: x,
                bz: T,
                half: u,
                ya: Math.max(l, a),
                yb: Math.max(l, s),
                kind: d,
                solid: !0,
                pier: !1,
              });
        }
        if (m >= 0) {
          for (let e = 0; e <= x; e += 4) {
            let t = _ + ((y - _) * e) / x,
              n = v + ((b - v) * e) / x;
            (r.push(t, n, u + m),
              p && S + ((C - S) * e) / x > 2.5 && i.push(t, n, u + 2),
              d === `rail` && a.push(t, n, u + 2));
          }
          s = Math.max(s, u + m);
        }
      }
    },
    d = e.dataset,
    f = Lc(e);
  if (f) {
    let e = f.clearance;
    for (let t = 0; t < e.length; t++)
      (r.push(e[t]), i.push(e[t]), a.push(e[t]));
    s = Math.max(s, f.maxR);
  }
  let p = f ? [] : Array.isArray(d.rail) ? d.rail : [];
  for (let e of p) {
    if (
      !e ||
      !Yu(e.path) ||
      !Number.isFinite(e.halfWidth) ||
      e.structure === `underground`
    )
      continue;
    let t = Number.isFinite(e.deck) ? e.deck : 8;
    u(
      e.path,
      () => t,
      e.halfWidth,
      `rail`,
      e.structure === `embankment`,
      e.structure === `viaduct` || e.structure === `embankment`,
      2,
    );
  }
  o = new Float32Array(a);
  let m = Array.isArray(d.expressways) ? d.expressways : null;
  if (m)
    for (let e of m) {
      if (!e || !Yu(e.path) || !Number.isFinite(e.halfWidth)) continue;
      let t =
          Array.isArray(e.levels) && e.levels.length === e.path.length
            ? e.levels
            : null,
        n = e.path,
        r = n.length,
        i =
          t && Array.isArray(e.portals)
            ? e.portals.filter((e) => Number.isInteger(e) && e > 0 && e < r - 1)
            : [];
      u(
        n,
        (e) => (t ? t[e] : 10),
        e.halfWidth,
        `expressway`,
        !1,
        !0,
        1.5,
        i.length ? (e) => i.includes(e) || i.includes(e + 1) : void 0,
      );
      for (let r of i) {
        let i = t[r + 1] < 0 ? r + 1 : t[r - 1] < 0 ? r - 1 : -1;
        if (i < 0) continue;
        let [a, o] = n[r],
          [s, u] = n[i],
          d = Math.hypot(s - a, u - o);
        d > Gu.len &&
          c.push({
            x: a,
            z: o,
            ux: (s - a) / d,
            uz: (u - o) / d,
            half: e.halfWidth,
            y: l,
          });
      }
    }
  for (let t of e.roads) {
    let e =
      t.axis === `x`
        ? [
            [t.from, t.at],
            [t.to, t.at],
          ]
        : [
            [t.at, t.from],
            [t.at, t.to],
          ];
    t.elevated === `expressway` && !m
      ? u(e, () => 9.4, 8.6, `expressway`, !1, !0, -1)
      : t.elevated === `mrt` && u(e, () => 9.2, 5.2, `rail`, !1, !0, -1);
  }
  return (
    (t = {
      pieces: n,
      portals: c,
      samples: new Float32Array(r),
      maxR: s,
      decks: new Float32Array(i),
      rail: new Float32Array(a),
    }),
    f && (t.railColliders = (t, n) => Wu(e, t, n)),
    Ju.set(e, t),
    t
  );
}
function Qu(e, t, n, r, i, a) {
  a.length = 0;
  let o = e.samples,
    s = e.maxR;
  for (let e = 0; e < o.length; e += 3) {
    let c = o[e],
      l = o[e + 1];
    c < t - s || c > r + s || l < n - s || l > i + s || a.push(c, l, o[e + 2]);
  }
  return a;
}
function $u(e, t, n, r, i) {
  for (let a = 0; a < e.length; a += 3) {
    let o = e[a],
      s = e[a + 1],
      c = e[a + 2],
      l = Math.max(t - o, 0, o - r),
      u = Math.max(n - s, 0, s - i);
    if (l * l + u * u < c * c) return !0;
  }
  return !1;
}
var ed = (e, t, n) => t >= e.minX && t < e.maxX && n >= e.minZ && n < e.maxZ;
function td(e, t, n, r, i, a, o, s, c) {
  let l = r - t,
    u = i - n,
    d = Math.hypot(l, u) || 1,
    f = (-u / d) * a,
    p = (l / d) * a,
    m = t - f,
    h = n - p,
    g = t + f,
    _ = n + p,
    v = r - f,
    y = i - p,
    b = r + f,
    x = i + p,
    S = o - c,
    C = s - c;
  (g - m) * (y - h) - (_ - h) * (v - m) < 0
    ? (e.quad(m, o, h, g, o, _, b, s, x, v, s, y),
      e.quad(v, C, y, b, C, x, g, S, _, m, S, h),
      e.quad(g, S, _, b, C, x, b, s, x, g, o, _),
      e.quad(v, C, y, m, S, h, m, o, h, v, s, y))
    : (e.quad(v, s, y, b, s, x, g, o, _, m, o, h),
      e.quad(m, S, h, g, S, _, b, C, x, v, C, y),
      e.quad(g, o, _, b, s, x, b, C, x, g, S, _),
      e.quad(v, s, y, m, o, h, m, S, h, v, C, y));
}
function nd(e, t, n) {
  for (let r of t.pieces) {
    if (!ed(n, (r.ax + r.bx) / 2, (r.az + r.bz) / 2) || r.kind === `expressway`)
      continue;
    let t = r.kind === `rail`;
    (e
      .setMaterial(0.85, 0, 0, 0)
      .setColor(V(t ? 158 : 168), V(t ? 152 : 168), V(t ? 144 : 162)),
      td(
        e,
        r.ax,
        r.az,
        r.bx,
        r.bz,
        r.half,
        r.ya,
        r.yb,
        r.solid ? Math.min(r.ya, r.yb) : 1.5,
      ));
    let i = t ? 0.9 : 1.3;
    e.setColor(V(t ? 130 : 186), V(t ? 124 : 186), V(t ? 118 : 180));
    let a = r.bx - r.ax,
      o = r.bz - r.az,
      s = Math.hypot(a, o) || 1;
    for (let t of [-1, 1]) {
      let n = (-o / s) * (r.half - 0.25) * t,
        c = (a / s) * (r.half - 0.25) * t;
      td(
        e,
        r.ax + n,
        r.az + c,
        r.bx + n,
        r.bz + c,
        0.25,
        r.ya + i,
        r.yb + i,
        i,
      );
    }
    if (r.pier) {
      e.setColor(V(146), V(146), V(140));
      let t = r.ya - 1.5;
      if (r.half > 8)
        for (let n of [-1, 1]) {
          let i = (-o / s) * (r.half - 4) * n,
            c = (a / s) * (r.half - 4) * n;
          e.box(r.ax + i, t / 2, r.az + c, 1.2, t / 2, 1.2);
        }
      else e.box(r.ax, t / 2, r.az, 1.1, t / 2, 1.1);
    }
  }
}
function rd(e, t, n) {
  for (let r of e.pieces) {
    let e = (r.ax + r.bx) / 2,
      i = (r.az + r.bz) / 2;
    if (!ed(t, e, i)) continue;
    let a = r.bx - r.ax,
      o = r.bz - r.az,
      s = Math.hypot(a, o) || 1;
    if (r.solid) {
      n.obb(e, i, r.half, s / 2, Math.atan2(a, -o), Math.max(r.ya, r.yb));
      continue;
    }
    if (!r.pier) continue;
    let c = r.ya - 1.5;
    if (r.kind === `expressway`) n.circle(r.ax, r.az, 1.45, c);
    else if (r.half > 8)
      for (let e of [-1, 1]) {
        let t = (-o / s) * (r.half - 4) * e,
          i = (a / s) * (r.half - 4) * e;
        n.circle(r.ax + t, r.az + i, 1.4, c);
      }
    else n.circle(r.ax, r.az, 1.3, c);
  }
  for (let r of e.portals)
    ed(t, r.x, r.z) &&
      n.obb(
        r.x + (r.ux * Gu.len) / 2,
        r.z + (r.uz * Gu.len) / 2,
        r.half + Gu.wall,
        Gu.len / 2,
        Math.atan2(r.ux, -r.uz),
        Gu.h,
      );
  e.railColliders?.(t, n);
}
