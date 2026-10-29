// tokyo/assets/region-tokyo-d-asakusa-fcwB9s1B 11 — math
// Lines 2949-3250 of readable/tokyo/assets/region-tokyo-d-asakusa-fcwB9s1B.pretty.js (statement-aligned).
function Lt(e, t, n, r) {
  let i = Mt(),
    a = [],
    o = [];
  t.white();
  let s = e.begin();
  Ft(s, t, n);
  for (let e = m.z0 + 6, r = 0; e < m.z1 - 4; e += 9.5, r++) It(s, t, e, n, r);
  e.end(`hoppy-alley`, (m.x0 + m.x1) / 2, (m.z0 + m.z1) / 2, 360);
  let c = new Map();
  for (let e of i) {
    let t = `${e.face}${Math.floor((e.z0 - m.z0) / 30)}`,
      n = c.get(t);
    (n || c.set(t, (n = [])), n.push(e));
  }
  for (let [i, l] of c) {
    let c = (l[0].z0 + l[l.length - 1].z1) / 2,
      u = (l[0].x0 + l[0].x1) / 2;
    s = e.begin();
    for (let e of l) Rt(s, t, e, n);
    (e.end(`hoppy-${i}`, u, c, 420), (s = e.begin()));
    for (let e of l) zt(s, t, e, n, r, a, o);
    (e.end(`hoppy-${i}-open`, u, c, 160, `barOpen`), (s = e.begin()));
    for (let e of l) {
      let r = lt(e);
      (s.setMaterial(0.6, 0.3, 0, 0),
        L(s, 16777215),
        q(s, r, 0.04, 0.96, 0.02, n, n + 2.62, t.uv(`iza:shut:${e.i}`)));
    }
    e.end(`hoppy-${i}-shut`, u, c, 160, `barShut`);
    for (let t of l) e.box(t.x0, t.z0, t.x1, t.z1, n, n + t.h);
  }
  return { units: i.length, seats: a, tables: o };
}
function Rt(e, t, n, r) {
  let i = t.white(),
    a = lt(n),
    o = r + n.h,
    s = [14209732, 13222578, 12171440, 11052186, 13617340][n.i % 5],
    [c, l] = K(a, 0, -a.depth),
    [u, d] = K(a, 1, -a.depth),
    [f, p] = K(a, 0, 0),
    [m, h] = K(a, 1, 0);
  (e.setMaterial(0.9, 0, 0, 0),
    L(e, n.floors === 1 ? 6974062 : 9078656),
    xe(e, Math.min(n.x0, n.x1), n.z0, Math.max(n.x0, n.x1), n.z1, o, i),
    L(e, s, 0.82),
    R(e, u, d, c, l, r, o, i),
    R(e, c, l, f, p, r, o, i),
    R(e, m, h, u, d, r, o, i));
  let g = n.face === `W`;
  for (let [i, a, o, _, v] of [
    [g ? n.endMin : n.endMax, c, l, f, p],
    [g ? n.endMax : n.endMin, m, h, u, d],
  ]) {
    if (!i) continue;
    let c = -(v - o),
      l = _ - a,
      u = Math.hypot(c, l) || 1,
      d = (c / u) * 0.03,
      f = (l / u) * 0.03,
      p = Math.hypot(_ - a, v - o),
      m = Math.max(1, Math.round(p / 6));
    (e.setMaterial(0.85, 0, 0.3, 33), L(e, 16777215));
    let h = t.uv(`fac:${(n.fac + 2) % 12}`);
    for (let t = 1; t < n.floors; t++) {
      let n = r + W + (t - 1) * 3;
      for (let t = 0; t < m; t++)
        R(
          e,
          a + ((_ - a) * t) / m + d,
          o + ((v - o) * t) / m + f,
          a + ((_ - a) * (t + 1)) / m + d,
          o + ((v - o) * (t + 1)) / m + f,
          n,
          n + 3,
          h,
        );
    }
    e.setMaterial(0.35, 0.1, 0.4, 3);
    let g = 0.45,
      y = 0.92;
    (R(
      e,
      a + (_ - a) * g + d,
      o + (v - o) * g + f,
      a + (_ - a) * y + d,
      o + (v - o) * y + f,
      r + 0.9,
      r + 2.3,
      t.uv(`iza:front:${(n.i + 3) % 12}`),
    ),
      e.setMaterial(0.6, 0, 0.38, 3),
      R(
        e,
        a + (_ - a) * 0.08 + d * 3,
        o + (v - o) * 0.08 + f * 3,
        a + (_ - a) * 0.9 + d * 3,
        o + (v - o) * 0.9 + f * 3,
        r + 2.7,
        r + 3.25,
        t.uv(`iza:board:${n.i}`),
      ),
      e.setMaterial(0.9, 0, 0, 0),
      L(e, s, 0.82));
  }
  (e.setMaterial(0.85, 0, 0.3, 33), L(e, 16777215));
  let _ = t.uv(`fac:${n.fac % 12}`),
    v = Math.max(1, Math.round(a.wid / 6));
  for (let t = 1; t < n.floors; t++) {
    let n = r + W + (t - 1) * 3;
    for (let t = 0; t < v; t++) q(e, a, t / v, (t + 1) / v, 0, n, n + 3, _);
  }
  if (
    (e.setMaterial(0.9, 0, 0, 0),
    L(e, s),
    q(e, a, 0, 1, 0, o - at, o, i),
    q(e, a, 0.04, 0.96, 0, r + 2.6, r + W, i),
    q(e, a, 0, 0.04, 0, r, r + W, i),
    q(e, a, 0.96, 1, 0, r, r + W, i),
    e.setMaterial(0.7, 0, 0, 0),
    L(e, 2762274),
    q(e, a, 0.02, 0.98, 0.06, r + 2.95, r + 3.55, i),
    e.setMaterial(0.6, 0, 0.38, 3),
    L(e, 16777215),
    q(e, a, 0.03, 0.97, 0.12, r + 2.98, r + 3.52, t.uv(`iza:board:${n.i}`)),
    n.tent < 3)
  ) {
    let [t, o] = Pt[n.tent];
    e.setMaterial(0.85, 0, 0, 0);
    let s = t === o ? 1 : 6;
    for (let n = 0; n < s; n++)
      (L(e, n % 2 ? o : t),
        J(e, a, n / s, (n + 1) / s, 0, r + 2.92, jt, r + 2.5, i),
        L(e, n % 2 ? o : t, 0.6),
        J(e, a, n / s, (n + 1) / s, 0, r + 2.91, jt, r + 2.49, i, !0));
    (L(e, t),
      q(e, a, 0, 1, jt, r + 2.24, r + 2.5, i),
      e.setMaterial(0.5, 0.6, 0, 0),
      L(e, 9080466));
    for (let t of [0.02, 0.98]) {
      let [n, o] = K(a, t, 1.7);
      B(e, n, r, o, n, r + 2.5, o, 0.025, i);
    }
  } else
    (e.setMaterial(0.55, 0.15, 0, 0),
      L(e, 5132888),
      J(e, a, -0.02, 1.02, 0, r + 2.92, 0.85, r + 2.6, i),
      L(e, 2762790),
      J(e, a, -0.02, 1.02, 0, r + 2.91, 0.85, r + 2.59, i, !0));
  let y = n.tent < 3 ? 1.65 : 0.6,
    b = a.wid > 5.6 ? 3 : 2;
  for (let o = 0; o < b; o++) {
    let [s, c] = K(a, 0.18 + (0.64 * o) / Math.max(1, b - 1), y);
    dt(
      e,
      s,
      r + (n.tent < 3 ? 1.82 : 2.06),
      c,
      t.uv(`lantern:${At[(n.i + o) % At.length]}`),
      i,
      0.18,
      0.46,
    );
  }
}
function zt(e, t, n, r, i, a, o) {
  let s = t.white(),
    c = lt(n);
  (e.setMaterial(0.35, 0.1, 0.3, 3),
    L(e, 16777215),
    q(e, c, 0.04, 0.96, 0.03, r, r + 2.62, t.uv(`iza:front:${n.i}`)));
  let l = (c.rx - c.lx) / c.wid,
    u = (c.rz - c.lz) / c.wid;
  for (let t = 0; t < n.tables; t++) {
    let [i, d] = K(c, n.tables === 1 ? 0.5 : 0.28 + t * 0.44, 1);
    e.setMaterial(0.7, 0, 0, 0);
    let f = (n.i + t) % 3;
    if (f < 2)
      (L(e, f ? 14197783 : 2775728),
        z(e, i - 0.22, r, d - 0.22, i + 0.22, r + 0.33, d + 0.22, s),
        z(e, i - 0.22, r + 0.33, d - 0.22, i + 0.22, r + 0.66, d + 0.22, s),
        L(e, 12094040),
        z(
          e,
          i - 0.36 * Math.abs(u) - 0.3 * Math.abs(l),
          r + 0.66,
          d - 0.36 * Math.abs(l) - 0.3 * Math.abs(u),
          i + 0.36 * Math.abs(u) + 0.3 * Math.abs(l),
          r + 0.69,
          d + 0.36 * Math.abs(l) + 0.3 * Math.abs(u),
          s,
        ));
    else {
      (L(e, 15262940),
        z(
          e,
          i - 0.32 * Math.abs(u) - 0.55 * Math.abs(l),
          r + 0.68,
          d - 0.32 * Math.abs(l) - 0.55 * Math.abs(u),
          i + 0.32 * Math.abs(u) + 0.55 * Math.abs(l),
          r + 0.71,
          d + 0.32 * Math.abs(l) + 0.55 * Math.abs(u),
          s,
        ),
        L(e, 9080466));
      for (let [t, n] of [
        [-0.5, -0.27],
        [0.5, -0.27],
        [0.5, 0.27],
        [-0.5, 0.27],
      ]) {
        let a = i + l * t + c.nx * n,
          o = d + u * t + c.nz * n;
        B(e, a, r, o, a, r + 0.68, o, 0.015, s);
      }
    }
    (e.setMaterial(0.4, 0.1, 0, 0),
      L(e, 16052456),
      z(e, i - 0.1, r + 0.71, d - 0.1, i + 0.1, r + 0.75, d + 0.1, s),
      L(e, 15253616),
      z(
        e,
        i + l * 0.18 - 0.04,
        r + 0.71,
        d + u * 0.18 - 0.04,
        i + l * 0.18 + 0.04,
        r + 0.86,
        d + u * 0.18 + 0.04,
        s,
      ),
      e.setMaterial(0.7, 0, 0, 0));
    for (let o of [-1, 1]) {
      let c = i + l * o * 0.7,
        f = d + u * o * 0.7;
      (L(e, (n.i + t + o) % 2 ? 13112860 : 2775728),
        z(e, c - 0.17, r, f - 0.17, c + 0.17, r + 0.42, f + 0.17, s),
        a.push({ x: c, z: f, h: Math.atan2(i - c, -(d - f)) }));
    }
    o.push({ x: i, z: d });
  }
  if (i >= 1 && n.i % 2 == 0) {
    let [i, a] = K(c, 0.04, 1.55),
      o = t.uv(`aboard:hoppy:${(n.i >> 1) % 2 ? 2 : 1}`);
    (e.setMaterial(0.7, 0, 0.08, 1), L(e, 16777215));
    let d = l * 0.27,
      f = u * 0.27;
    (e.quad(
      i - d + c.nx * 0.15,
      r,
      a - f + c.nz * 0.15,
      i + d + c.nx * 0.15,
      r,
      a + f + c.nz * 0.15,
      i + d + c.nx * 0.02,
      r + 0.92,
      a + f + c.nz * 0.02,
      i - d + c.nx * 0.02,
      r + 0.92,
      a - f + c.nz * 0.02,
      o.u0,
      o.v0,
      o.u1,
      o.v1,
    ),
      L(e, 6965802),
      e.quad(
        i + d - c.nx * 0.15,
        r,
        a + f - c.nz * 0.15,
        i - d - c.nx * 0.15,
        r,
        a - f - c.nz * 0.15,
        i - d - c.nx * 0.02,
        r + 0.92,
        a - f - c.nz * 0.02,
        i + d - c.nx * 0.02,
        r + 0.92,
        a + f - c.nz * 0.02,
        s.u0,
        s.v0,
        s.u1,
        s.v1,
      ));
  }
}
function Bt(e) {
  (e.need(`rick:name`, 128, 48, it),
    e.need(
      `flag:kaminarimon`,
      64,
      192,
      We(`asa.flag.kaminarimon`, `#9a1a14`, `#f8f0dc`),
    ),
    e.need(
      `flag:asakusa`,
      64,
      192,
      We(`asa.flag.asakusa`, `#1d2b5a`, `#f4f0e0`),
    ),
    e.need(`last`, 64, 96, Ke));
}
