// tokyo/assets/region-tokyo-A7LxHjud 33 — math
// Lines 18095-18442 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function Ere(e, t, n) {
  let r = e.length,
    i = t.s.length,
    a = t.s[i - 1],
    o = t.s.map((i) => {
      for (let o = 0; o < (n ? r : r - 1); o++) {
        let s = t.cpS[o],
          c = o + 1 < r ? t.cpS[o + 1] : t.cpS[0] + a,
          l = e[o][2],
          u = e[(o + 1) % r][2];
        for (let e of n ? [i, i + a] : [i])
          if (e >= s && e <= c)
            return l + ((u - l) * (e - s)) / Math.max(1e-6, c - s);
      }
      return i <= t.cpS[0] ? e[0][2] : e[r - 1][2];
    }),
    s = (e, t) => {
      let r = Array(i),
        a = Math.round(t / Bo),
        o = i - 1;
      for (let t = 0; t < i; t++) {
        let s = 0;
        for (let r = -a; r <= a; r++)
          s += n
            ? e[(((t + r) % o) + o) % o]
            : e[Math.max(0, Math.min(i - 1, t + r))];
        r[t] = s / (2 * a + 1);
      }
      return (n && (r[i - 1] = r[0]), r);
    };
  return s(s(o, 7), 7);
}
function Vo(e, t, n = !1) {
  let r = Tre(e, t),
    i = Ere(e, r, t),
    a = r.s.length,
    o = (e) =>
      n
        ? `deck`
        : r.covered[e]
          ? `tunnel`
          : i[e] < 0.1
            ? `cut`
            : i[e] < 2.6
              ? `fill`
              : `deck`,
    s = [0],
    c = 0;
  for (let e = 1; e < a - 1; e++) {
    if (o(e) !== o(e - 1) || o(e) !== o(e + 1)) {
      (s[s.length - 1] !== e && s.push(e), (c = e));
      continue;
    }
    let t = r.s[e + 1] - r.s[c],
      n = Math.abs(r.dx[c] * r.dz[e + 1] - r.dz[c] * r.dx[e + 1]),
      a = (r.s[e] - r.s[c]) / Math.max(1e-6, r.s[e + 1] - r.s[c]),
      l = Math.abs(i[c] + (i[e + 1] - i[c]) * a - i[e]);
    (t > 24 || n > 0.07 || l > 0.04) && (s.push(e), (c = e));
  }
  s.push(a - 1);
  let l = s.length,
    u = {
      n: l,
      x: new Float64Array(l),
      z: new Float64Array(l),
      y: new Float64Array(l),
      s: new Float64Array(l),
      dx: new Float64Array(l),
      dz: new Float64Array(l),
      kind: [],
      length: r.s[a - 1],
    };
  return (
    s.forEach((e, t) => {
      ((u.x[t] = r.x[e]),
        (u.z[t] = r.z[e]),
        (u.y[t] = i[e]),
        (u.s[t] = r.s[e]),
        (u.dx[t] = r.dx[e]),
        (u.dz[t] = r.dz[e]),
        u.kind.push(o(e)));
    }),
    u
  );
}
function Ho() {
  return (wre ??= Vo(Sre, !0));
}
function Uo(e, t) {
  let n = e.kind[t],
    r = e.kind[t + 1];
  if (n === r) return n;
  let i = { tunnel: 3, cut: 2, fill: 1, deck: 0 };
  return i[n] > i[r] ? n : r;
}
function Wo(e, t = { x: 0, z: 0, y: 0, dx: 0, dz: 0, k: 0 }) {
  let n = Ho();
  e = ((e % n.length) + n.length) % n.length;
  let r = 0,
    i = n.n - 1;
  for (; i - r > 1;) {
    let t = (r + i) >> 1;
    n.s[t] <= e ? (r = t) : (i = t);
  }
  let a = (e - n.s[r]) / Math.max(1e-6, n.s[i] - n.s[r]);
  ((t.x = n.x[r] + (n.x[i] - n.x[r]) * a),
    (t.z = n.z[r] + (n.z[i] - n.z[r]) * a),
    (t.y = n.y[r] + (n.y[i] - n.y[r]) * a));
  let o = n.dx[r] + (n.dx[i] - n.dx[r]) * a,
    s = n.dz[r] + (n.dz[i] - n.dz[r]) * a,
    c = Math.hypot(o, s) || 1;
  return ((t.dx = o / c), (t.dz = s / c), (t.k = r), t);
}
function Go(e, t, n = 40, r = -1) {
  let i = Ho(),
    a = -1,
    o = n * n,
    s = 0,
    c = (n) => {
      let r = i.x[n],
        c = i.z[n],
        l = i.x[n + 1],
        u = i.z[n + 1],
        d = l - r,
        f = u - c,
        p = d * d + f * f || 1,
        m = Math.max(0, Math.min(1, ((e - r) * d + (t - c) * f) / p)),
        h = r + d * m - e,
        g = c + f * m - t,
        _ = h * h + g * g;
      _ < o && ((o = _), (a = n), (s = m));
    };
  if (r >= 0 && r < i.n - 1) {
    for (let e = -6; e <= 6; e++)
      c((((r + e) % (i.n - 1)) + (i.n - 1)) % (i.n - 1));
    if (a < 0) for (let e = 0; e < i.n - 1; e++) c(e);
  } else for (let e = 0; e < i.n - 1; e++) c(e);
  if (a < 0) return null;
  let l = a,
    u = i.x[l],
    d = i.z[l],
    f = i.x[l + 1] - u,
    p = i.z[l + 1] - d,
    m = Math.hypot(f, p) || 1,
    h = ((e - u) * -p + (t - d) * f) / m;
  return {
    s: i.s[l] + (i.s[l + 1] - i.s[l]) * s,
    lat: h,
    k: l,
    y: i.y[l] + (i.y[l + 1] - i.y[l]) * s,
  };
}
var Ko = null,
  qo = 0.6;
function Jo() {
  if (Ko) return Ko;
  let e = Ho();
  Ko = [];
  let t = 0;
  for (; t < e.n - 1;) {
    if (Uo(e, t) !== `cut`) {
      t++;
      continue;
    }
    let n = t;
    for (; n < e.n - 1 && Uo(e, n) === `cut`;) n++;
    let r = 1 / 0,
      i = 1 / 0,
      a = -1 / 0,
      o = -1 / 0,
      s = Ro.half + qo;
    for (let c = t; c <= n; c++) {
      let t = -e.dz[c],
        n = e.dx[c];
      for (let l of [-1, 1]) {
        let u = e.x[c] + t * s * l,
          d = e.z[c] + n * s * l;
        ((r = Math.min(r, u)),
          (a = Math.max(a, u)),
          (i = Math.min(i, d)),
          (o = Math.max(o, d)));
      }
    }
    (Ko.push({
      minX: r,
      minZ: i,
      maxX: a,
      maxZ: o,
      axis: a - r > o - i ? `x` : `z`,
    }),
      (t = n));
  }
  for (let e of Zo()) Ko.push({ ...e.rect, axis: e.axis, walk: !0 });
  return Ko;
}
var Dre = [
    {
      id: `takaracho-on`,
      ja: `宝町入口`,
      en: `Takaracho Entrance`,
      kind: `on`,
      axis: `z`,
      at: 290,
      side: 1,
      street: 132.25,
      walk: 5,
      end: 210,
    },
    {
      id: `kyobashi-off`,
      ja: `京橋出口`,
      en: `Kyobashi Exit`,
      kind: `off`,
      axis: `z`,
      at: 290,
      side: -1,
      street: 132.25,
      walk: 5,
      end: 210,
    },
    {
      id: `kasumigaseki-on`,
      ja: `霞が関入口`,
      en: `Kasumigaseki Entrance`,
      kind: `on`,
      axis: `z`,
      at: -748,
      side: -1,
      street: 829.25,
      walk: 3,
      end: 753,
    },
    {
      id: `kasumigaseki-off`,
      ja: `霞が関出口`,
      en: `Kasumigaseki Exit`,
      kind: `off`,
      axis: `z`,
      at: -748,
      side: 1,
      street: 829.25,
      walk: 3,
      end: 753,
    },
  ],
  Yo = { half: 2.2, off: Ro.half + 2.2, wall: 0.6 },
  Xo = null;
function Zo() {
  if (Xo) return Xo;
  Xo = [];
  for (let e of Dre) {
    let t = (t) => (e.axis === `z` ? [e.at, t] : [t, e.at]),
      n = (e) => {
        let [n, r] = t(e);
        return Go(n, r, 4)?.y ?? 0;
      },
      r = e.end,
      i = Math.sign(e.end - e.street);
    for (let t = e.street; (e.end - t) * i > 0; t += i * 0.5)
      if (n(t) < Qo) {
        r = t;
        break;
      }
    let a = (t) =>
        (t - e.street) * i < e.walk
          ? (Qo * (t - e.street) * i) / e.walk
          : (t - r) * i <= 0
            ? Qo
            : Math.min(Qo, n(t)),
      o = e.at + e.side * Ro.half,
      s = e.at + e.side * (Yo.off + Yo.half + Yo.wall),
      c = Math.min(e.street, e.end),
      l = Math.max(e.street, e.end),
      u =
        e.axis === `z`
          ? { minX: Math.min(o, s), maxX: Math.max(o, s), minZ: c, maxZ: l }
          : { minX: c, maxX: l, minZ: Math.min(o, s), maxZ: Math.max(o, s) },
      d = Go(...t(r), 4)?.s ?? 0,
      f = Go(...t(e.end), 4)?.s ?? 0;
    Xo.push({
      ...e,
      grade: r,
      rect: u,
      yAt: a,
      s0: Math.min(d, f),
      s1: Math.max(d, f),
    });
  }
  return Xo;
}
function Ore(e, t, n, r) {
  for (let i of Zo()) {
    let a = i.rect;
    if (
      n > a.minX - 0.5 &&
      e < a.maxX + 0.5 &&
      r > a.minZ - 0.5 &&
      t < a.maxZ + 0.5
    )
      return !0;
  }
  return !1;
}
var Qo = 0.15;
function $o(e, t) {
  for (let n of Zo()) {
    if (e < n.s0 || e > n.s1) continue;
    let r = Wo(e),
      [i, a] =
        n.axis === `z` ? [n.at + n.side * 5, r.z] : [r.x, n.at + n.side * 5];
    if (Math.sign((i - r.x) * -r.dz + (a - r.z) * r.dx) === Math.sign(t))
      return !0;
  }
  return !1;
}
var es = [{ minX: -840.2, maxX: -835.8, minZ: -232.8, maxZ: -211.2, y: 0.15 }];
function ts(e, t) {
  for (let n of Jo())
    if (e > n.minX && e < n.maxX && t > n.minZ && t < n.maxZ) return n;
  return null;
}
function kre(e) {
  let t = Ho(),
    n = [];
  for (let r = 0; r < t.n - 1; r++) {
    if (Uo(t, r) === `tunnel`) continue;
    let i = t.s[r + 1] - t.s[r],
      a = Math.max(1, Math.ceil(i / 6));
    for (let i = 0; i < a; i++) {
      let o = i / a;
      n.push(
        t.x[r] + (t.x[r + 1] - t.x[r]) * o,
        t.z[r] + (t.z[r + 1] - t.z[r]) * o,
        Ro.half + e,
      );
    }
  }
  return (Are(n), n);
}
function Are(e) {
  for (let t of Zo()) {
    let n = Math.min(t.street, t.end),
      r = Math.max(t.street, t.end),
      i = t.at + t.side * Yo.off;
    for (let a = n; a <= r; a += 4)
      e.push(...(t.axis === `z` ? [i, a] : [a, i]), Yo.half + Yo.wall + 1);
  }
}
