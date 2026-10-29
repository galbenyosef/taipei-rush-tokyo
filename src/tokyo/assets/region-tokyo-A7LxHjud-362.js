// tokyo/assets/region-tokyo-A7LxHjud 362 — math
// Lines 131994-132335 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function gMe(e, t, n, r, i, a, o, s, c) {
  let l = o * (s.halfWidth - 0.5 - 0.6);
  if (Do(s, n.length)) {
    let i = o * (s.halfWidth - 1.7),
      c = o * (s.halfWidth - 0.55);
    for (let o = -n.length; o < -2; o += 10) {
      let n = Math.min(-2, o + 10);
      if (
        a((o + n) / 2, (i + c) / 2) &&
        Math.round(o / 10) % 6 == 0 &&
        !EZ(t, s, r, o, n, (i + c) / 2) &&
        TZ((o + n) / 2, 1)
      ) {
        e.setMaterial(0.6, 0, sZ, cZ).setColor(...dZ);
        {
          let t = e.n;
          (yMe(e, r, (i + c) / 2, (o + n) / 2, iZ),
            oZ(`bikelane-mark`, e.n - t));
        }
      }
    }
  } else if (
    (s.kind === `street` || wo(s)) &&
    n.length > 30 &&
    de(s.id, `navi`) % 2 == 0
  ) {
    for (let i = -n.length + 12; i < -10; i += 55)
      if (a(i, l) && !EZ(t, s, r, i - 1, i + 1, l) && TZ(i, 1)) {
        let t = e.n;
        (bMe(e, r, l, i), oZ(`navi`, e.n - t));
      }
  }
  let u = de(n.id, `manhole`),
    d = u % 3 == 0 ? 0 : 1 + (u % 2) * Math.min(1, Math.floor(n.length / 60));
  for (let t = 0; t < d; t++) {
    let s = de(n.id, `mh`, t),
      l = -n.length * (0.15 + ((s % 1e3) / 1e3) * 0.7),
      u = i((s >> 10) % c) + o * (((s >> 14) % 5) - 2) * 0.35;
    if (a(l, u)) {
      let t = e.n;
      (xMe(e, r, u, l, (s >> 18) % 5 == 0), oZ(`manhole`, e.n - t));
    }
  }
}
function EZ(e, t, n, r, i, a) {
  let o = n.ox + n.qx * a + n.dx * r,
    s = n.oz + n.qz * a + n.dz * r,
    c = n.ox + n.qx * a + n.dx * i,
    l = n.oz + n.qz * a + n.dz * i,
    u = (t.axis === `x` ? s : o) - t.at,
    d = t.axis === `x` ? o : s,
    f = t.axis === `x` ? c : l;
  return Po(e, t, u >= 0 ? 1 : -1, Math.min(d, f), Math.max(d, f));
}
function _Me(e, t, n, r, i, a) {
  let o = 0.2,
    s = [
      [n, r + a],
      [n + i, r],
      [n, r - a],
      [n - i, r],
    ];
  for (let n = 0; n < 4; n++) {
    let [r, i] = s[n],
      [a, c] = s[(n + 1) % 4],
      l = a - r,
      u = c - i,
      d = Math.hypot(l, u) || 1,
      f = (u / d) * o * 0.5,
      p = (-l / d) * o * 0.5;
    gZ(
      e,
      t,
      [r - f, i - p, a - f, c - p, a + f, c + p, r + f, i + p],
      [0, 1, 2, 0, 2, 3],
      iZ,
    );
  }
}
function vMe(e, t, n, r, i, a) {
  let o = 0.15,
    s = 0.45;
  if (
    (_Z(e, t, n - o, r - 2.5, n + o, r + 1, iZ),
    gZ(e, t, [n - s, r + 1, n + s, r + 1, n, r + 2.5], [0, 1, 2], iZ),
    i === `straight`)
  )
    return;
  let c = (i === `curb` ? 1 : -1) * a,
    l = r - 0.6;
  gZ(
    e,
    t,
    [
      n,
      l - o,
      n + c * 0.75,
      l + 0.35 - o,
      n + c * 0.75,
      l + 0.35 + o,
      n,
      l + o,
    ],
    [0, 1, 2, 0, 2, 3],
    iZ,
  );
  let u = n + c * 0.75,
    d = l + 0.35;
  gZ(e, t, [u, d - 0.45, u + c * 0.6, d + 0.1, u, d + 0.55], [0, 1, 2], iZ);
}
function yMe(e, t, n, r, i) {
  for (let a of [-0.55, 0.55]) DZ(e, t, n, r + a, 0.32, 0.07, i, 8);
  let a = (n, r, a, o) => {
    let s = a - n,
      c = o - r,
      l = Math.hypot(s, c) || 1,
      u = (c / l) * 0.035,
      d = (-s / l) * 0.035;
    gZ(
      e,
      t,
      [n - u, r - d, a - u, o - d, a + u, o + d, n + u, r + d],
      [0, 1, 2, 0, 2, 3],
      i,
    );
  };
  (a(n, r - 0.55, n, r),
    a(n, r, n + 0.25, r + 0.35),
    a(n + 0.25, r + 0.35, n, r + 0.55),
    a(n, r, n + 0.25, r - 0.2));
}
function DZ(e, t, n, r, i, a, o, s = 12) {
  let c = [],
    l = [];
  for (let e = 0; e < s; e++) {
    let t = (e / s) * Math.PI * 2;
    c.push(
      n + Math.cos(t) * i,
      r + Math.sin(t) * i,
      n + Math.cos(t) * (i - a),
      r + Math.sin(t) * (i - a),
    );
    let o = e * 2,
      u = ((e + 1) % s) * 2;
    l.push(o, u, o + 1, o + 1, u, u + 1);
  }
  gZ(e, t, c, l, o);
}
function bMe(e, t, n, r) {
  e.setMaterial(0.75, 0, sZ, cZ).setColor(...pZ);
  let i = 0.38;
  (gZ(
    e,
    t,
    [
      n - i,
      r - 0.9,
      n + i,
      r - 0.9,
      n + i,
      r + 0.4,
      n,
      r + 0.95,
      n - i,
      r + 0.4,
    ],
    [0, 1, 2, 0, 2, 4, 2, 3, 4],
    0.034,
  ),
    e.setColor(...dZ));
  for (let i of [-0.45, 0.05]) DZ(e, t, n, r + i, 0.14, 0.04, iZ, 5);
  e.setMaterial(0.6, 0, sZ, cZ).setColor(...dZ);
}
function xMe(e, t, n, r, i) {
  let a = (i, a) => {
    let o = [n, r],
      s = [];
    for (let e = 0; e < 8; e++) {
      let t = (e / 8) * Math.PI * 2;
      (o.push(n + Math.cos(t) * i, r + Math.sin(t) * i),
        s.push(0, 1 + e, 1 + ((e + 1) % 8)));
    }
    gZ(e, t, o, s, a);
  };
  (e.setMaterial(0.5, 0.5, 0, 0).setColor(uZ(76), uZ(75), uZ(71)),
    a(0.32, lMe),
    i && (e.setColor(uZ(214), uZ(140), uZ(166)), a(0.17, 0.032)),
    e.setMaterial(0.6, 0, sZ, cZ).setColor(...dZ));
}
function SMe(e, t, n) {
  e.setMaterial(0.6, 0, sZ, cZ).setColor(uZ(232), uZ(232), uZ(226));
  let r = 0.5;
  for (let i of t.roads) {
    if (i.pedestrian) continue;
    let a = i.axis === `x` ? t.x : t.z,
      o = i.axis === `x` ? t.halfX : t.halfZ;
    for (let t of [-1, 1]) {
      if (t < 0 ? !(a > i.from + r) : !(a < i.to - r)) continue;
      let s = a + t * (o + $l);
      if (!SZ(n, i.axis === `x` ? s : i.at, i.axis === `x` ? i.at : s))
        continue;
      let c = i.halfWidth - 0.6;
      for (let t = -c; t + 0.45 <= c; t += 0.9)
        i.axis === `x`
          ? vZ(e, s - Ql, i.at + t, s + Ql, i.at + t + 0.45, iZ)
          : vZ(e, i.at + t, s - Ql, i.at + t + 0.45, s + Ql, iZ);
    }
  }
}
function* CMe(e, t, n, r, i, a = e) {
  for (let r of t.nodes) {
    if (
      r.kind === `end` ||
      !To(r) ||
      r.x < n.minX - 40 ||
      r.x > n.maxX + 40 ||
      r.z < n.minZ - 40 ||
      r.z > n.maxZ + 40
    )
      continue;
    let t = e.n;
    (SMe(e, r, n), oZ(`zebra`, e.n - t));
  }
  i() && (yield);
  for (let o of r)
    if (!o.pedestrian) {
      for (let r of t.links) {
        if (r.road !== o || r.id > r.reverse) continue;
        let i = e.n;
        (mMe(e, t, r, n, a), oZ(`link`, e.n - i));
      }
      i() && (yield);
    }
}
function wMe(e, t, n, r = e) {
  let i = t.roads.filter((e) => {
    let [t, r, i, a] =
      e.axis === `x`
        ? [
            e.from - e.halfTotal,
            e.to + e.halfTotal,
            e.at - e.halfTotal,
            e.at + e.halfTotal,
          ]
        : [
            e.at - e.halfTotal,
            e.at + e.halfTotal,
            e.from - e.halfTotal,
            e.to + e.halfTotal,
          ];
    return (
      !e.pedestrian && !(r < n.minX || t > n.maxX || a < n.minZ || i > n.maxZ)
    );
  });
  rZ = !0;
  try {
    for (let r of i)
      for (let i of t.links) {
        if (i.road !== r || i.id > i.reverse) continue;
        wZ(e, t, i, n);
        let a = t.links[i.reverse];
        a && wZ(e, t, a, n);
      }
  } finally {
    rZ = !1;
  }
}
function TMe(e, t, n, r, i) {
  let a = e.n + t.n;
  (EMe(e, t, n, r, i), oZ(`pools`, e.n + t.n - a));
}
function EMe(e, t, n, r, i) {
  let a = ru(n),
    o = n.sidewalkHeight;
  for (let n of i) {
    if (n.pedestrian) continue;
    let i = a.nodesOf(n);
    for (let s = 0; s + 1 < i.length; s++)
      for (let c of [-1, 1]) {
        let l = a.primaryLights(n, i[s], i[s + 1], c);
        if (!l || l.kind === `slim`) continue;
        let u = l.kind === `tall` ? 3 : 2,
          d = l.kind === `tall` ? 10 : 6.5,
          f = l.kind === `tall` ? n.halfWidth - 1.6 : n.halfWidth + 0.55,
          p = l.kind === `tall` ? 0.45 : 0.4;
        for (let i of l.ts)
          SZ(
            r,
            n.axis === `x` ? i : n.at + c * f,
            n.axis === `x` ? n.at + c * f : i,
          ) &&
            (OZ(
              t,
              n,
              c,
              i,
              f,
              d,
              Math.max(n.median / 2, f - d),
              n.halfWidth,
              0.006 + (c > 0 ? 0.003 : 0),
              $X,
              0.92,
              p,
              u,
              !0,
            ),
            n.flush
              ? OZ(
                  t,
                  n,
                  c,
                  i,
                  f,
                  d,
                  n.halfWidth,
                  Math.min(n.halfTotal, f + d),
                  0.009,
                  eZ,
                  0.92,
                  p,
                  u,
                  !0,
                )
              : OZ(
                  e,
                  n,
                  c,
                  i,
                  f,
                  d,
                  n.halfWidth,
                  Math.min(n.halfTotal, f + d),
                  o + 0.006,
                  [152, 150, 145],
                  0.88,
                  p,
                  u,
                ));
      }
  }
}
