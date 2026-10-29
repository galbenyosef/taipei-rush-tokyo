// tokyo/assets/region-tokyo-A7LxHjud 52 — math
// Lines 24750-25052 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Rl(e) {
  if (Ll.has(e)) return Ll.get(e);
  let t = ac(e),
    n = null;
  if (t) {
    let r = dae(e, t);
    n = {
      m: t,
      entrances: r,
      geo: {
        m: t,
        plan: e,
        atlas: null,
        due: () => !1,
        entrances: r.list.map((e) => e.geo),
        walls: r.walls,
      },
    };
  }
  return (Ll.set(e, n), n);
}
function pae(e, t, n) {
  let r = Rl(e);
  r && lae(r.geo, t, n);
}
var zl = { len: 12, h: 6.2, wall: 0.7, roof: 1 };
function Bl(e, t, n, r) {
  for (let i = 0; i < e.length; i += 3) {
    let a = t - e[i],
      o = n - e[i + 1],
      s = e[i + 2] - 2 + r;
    if (s > 0 && a * a + o * o < s * s) return !0;
  }
  return !1;
}
var mae = 24,
  Vl = new WeakMap(),
  Hl = (e) =>
    Array.isArray(e) &&
    e.length >= 2 &&
    e.every(
      (e) => Array.isArray(e) && Number.isFinite(e[0]) && Number.isFinite(e[1]),
    ),
  Ul = 1.6;
function hae(e, t, n, r, i, a, o) {
  let s = Math.hypot(r - t, i - n) || 1,
    c = (r - t) / s,
    l = (i - n) / s,
    u = -l,
    d = c,
    f = 0;
  for (let r of o === `rail` && a > 8 ? [-1, 1] : [0]) {
    let i = t + u * (a - 4) * r,
      o = n + d * (a - 4) * r;
    for (let t = -3; t <= 3; t++)
      for (let n = -3; n <= 3; n++) {
        let r = (t / 3) * Ul,
          a = (n / 3) * Ul,
          s = i + c * r + u * a,
          p = o + l * r + d * a;
        e.surfaceAt(s, p) === `water` &&
          (f = Math.min(f, e.waterLevelAt(s, p) - 0.3));
      }
  }
  return f;
}
function gae(e, t, n, r, i) {
  if (i && Bl(i, t, n, r + 1)) return !1;
  let a = e.surfaceAt(t, n);
  if (a === `water`) return !1;
  if (a !== `road` && a !== `plaza`) return !0;
  let o = e.roadAt(t, n);
  return o ? Math.abs((o.axis === `x` ? n : t) - o.at) <= o.median / 2 - r : !1;
}
function Wl(e) {
  let t = Vl.get(e);
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
          w = Math.max(1, Math.ceil(x / mae));
        for (let t = 0; t < w; t++) {
          let r = t / w,
            i = (t + 1) / w,
            a = S + (C - S) * r,
            s = S + (C - S) * i,
            c = _ + (y - _) * r,
            m = v + (b - v) * r,
            x = _ + (y - _) * i,
            T = v + (b - v) * i;
          if (p && Math.min(a, s) > 2.5) {
            let t = !f && gae(e, c, m, 1.2, d === `expressway` ? o : void 0);
            n.push({
              ax: c,
              az: m,
              bx: x,
              bz: T,
              half: u,
              ya: a,
              yb: s,
              kind: d,
              solid: f,
              pier: t,
              foot: t ? hae(e, c, m, x, T, u, d) : 0,
            });
          } else
            p &&
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
    f = ac(e);
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
      !Hl(e.path) ||
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
      if (!e || !Hl(e.path) || !Number.isFinite(e.halfWidth)) continue;
      if (e.loop) {
        let e = kre(1.5),
          t = jre();
        for (let t = 0; t < e.length; t++) r.push(e[t]);
        for (let e = 0; e < t.length; e++) i.push(t[e]);
        s = Math.max(s, Ro.half + 1.5);
        continue;
      }
      let t =
          Array.isArray(e.levels) && e.levels.length === e.path.length
            ? e.levels
            : null,
        n = e.path,
        a = n.length,
        o =
          t && Array.isArray(e.portals)
            ? e.portals.filter((e) => Number.isInteger(e) && e > 0 && e < a - 1)
            : [];
      u(
        n,
        (e) => (t ? t[e] : 10),
        e.halfWidth,
        `expressway`,
        !1,
        !0,
        1.5,
        o.length ? (e) => o.includes(e) || o.includes(e + 1) : void 0,
      );
      for (let r of o) {
        let i = t[r + 1] < 0 ? r + 1 : t[r - 1] < 0 ? r - 1 : -1;
        if (i < 0) continue;
        let [a, o] = n[r],
          [s, u] = n[i],
          d = Math.hypot(s - a, u - o);
        d > zl.len &&
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
    f && (t.railColliders = (t, n) => pae(e, t, n)),
    Vl.set(e, t),
    t
  );
}
function Gl(e, t, n, r, i, a) {
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
function Kl(e, t, n, r, i) {
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
var ql = (e, t, n) => t >= e.minX && t < e.maxX && n >= e.minZ && n < e.maxZ;
function Jl(e, t, n, r, i, a, o, s, c) {
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
