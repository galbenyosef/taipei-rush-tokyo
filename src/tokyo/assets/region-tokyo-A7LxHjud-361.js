// tokyo/assets/region-tokyo-A7LxHjud 361 — math
// Lines 131678-131993 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function gZ(e, t, n, r, i) {
  let a = (r) => {
    let a = n[r * 2],
      o = n[r * 2 + 1];
    return e.vertex(
      t.ox + t.qx * a + t.dx * o,
      i,
      t.oz + t.qz * a + t.dz * o,
      0,
      1,
      0,
      um.u,
      um.v,
    );
  };
  for (let t = 0; t < r.length; t += 3) {
    let i = r[t],
      o = r[t + 1],
      s = r[t + 2],
      c = n[i * 2],
      l = n[i * 2 + 1],
      [u, d] =
        (n[o * 2] - c) * (n[s * 2 + 1] - l) -
          (n[o * 2 + 1] - l) * (n[s * 2] - c) >
        0
          ? [o, s]
          : [s, o],
      f = a(i);
    (a(u), a(d), a(d), e.tri(f, f + 1, f + 2));
  }
}
function _Z(e, t, n, r, i, a, o) {
  gZ(e, t, [n, r, i, r, i, a, n, a], [0, 1, 2, 0, 2, 3], o);
}
function vZ(e, t, n, r, i, a) {
  e.quad(t, a, i, r, a, i, r, a, n, t, a, n);
}
function yZ(e, t, n, r, i, a, o) {
  t === `x` ? vZ(e, n, i - a, r, i + a, o) : vZ(e, i - a, n, i + a, r, o);
}
function bZ(e, t, n, r, i, a, o) {
  o > 0
    ? e.quad(t, i, r, t, i, n, t, a, n, t, a, r)
    : e.quad(t, i, n, t, i, r, t, a, r, t, a, n);
}
function xZ(e, t, n, r, i, a, o) {
  o > 0
    ? e.quad(n, i, t, r, i, t, r, a, t, n, a, t)
    : e.quad(r, i, t, n, i, t, n, a, t, r, a, t);
}
function fMe(e, t, n, r, i, a, o, s) {
  let c = [...n],
    l = 0.15,
    u = (a - l * (c.length - 1)) / c.length;
  c.forEach((n, c) => {
    let d = hZ(n);
    if (!d) return;
    let f = Math.min(u, o * d.aspect * 0.55),
      p = r - a / 2 + u * (c + 0.5) + l * c,
      m = new Float32Array(d.uv.length);
    for (let e = 0; e < d.uv.length; e += 2)
      ((m[e] = p + (d.uv[e] - 0.5) * f),
        (m[e + 1] = i + o / 2 - d.uv[e + 1] * o));
    gZ(e, t, m, d.idx, s);
  });
}
function pMe(e, t, n, r, i, a, o, s, c) {
  let l = [...n],
    u = i + (l.length * o + (l.length - 1) * s) / 2;
  for (let n of l) {
    let i = hZ(n);
    if (i) {
      let n = Math.min(a, o * i.aspect * 1.8),
        s = new Float32Array(i.uv.length);
      for (let e = 0; e < i.uv.length; e += 2)
        ((s[e] = r + (i.uv[e] - 0.5) * n), (s[e + 1] = u - i.uv[e + 1] * o));
      gZ(e, t, s, i.idx, c);
    }
    u -= o + s;
  }
}
var SZ = (e, t, n) => t >= e.minX && t < e.maxX && n >= e.minZ && n < e.maxZ;
function CZ(e, t, n, r) {
  let i = e.axis === `x` ? t.minX : t.minZ,
    a = e.axis === `x` ? t.maxX : t.maxZ,
    o = Math.max(Math.min(n, r), i),
    s = Math.min(Math.max(n, r), a);
  return s > o ? [o, s] : null;
}
function mMe(e, t, n, r, i = e) {
  let a = n.road,
    o = a.axis,
    s =
      o === `x`
        ? a.at >= r.minZ && a.at < r.maxZ
        : a.at >= r.minX && a.at < r.maxX,
    c = o === `x` ? n.sx : n.sz,
    l = o === `x` ? n.ex : n.ez,
    u = Math.min(c, l),
    d = Math.max(c, l),
    f = t.laneWidth,
    p = a.median / 2,
    m = t.nodes[n.from],
    h = t.nodes[n.to],
    g = t.links[n.reverse] ?? null,
    _ = a.kind;
  if (!rZ && s && d - u > 1) {
    let n = CZ(a, r, u, d);
    if (n) {
      let [s, g] = n;
      if ((e.setMaterial(0.6, 0, sZ, cZ).setColor(...dZ), vre.has(a.id)))
        (e.setColor(...fZ), yZ(e, o, s, g, a.at, 0.08, iZ), e.setColor(...dZ));
      else if (a.median >= 1.5) {
        let n = Math.max(s, u + 1.5),
          r = Math.min(g, d - 1.5);
        if (r > n) {
          let s = p - 0.3,
            c = t.sidewalkHeight,
            l = i;
          (l
            .setMaterial(0.9, 0, 0, 0)
            .setColor(
              uZ(a.treeMedian ? 74 : 150),
              uZ(a.treeMedian ? 100 : 148),
              uZ(a.treeMedian ? 60 : 142),
            ),
            yZ(l, o, n, r, a.at, s, c),
            l.setColor(uZ(140), uZ(138), uZ(134)),
            o === `x`
              ? (xZ(l, a.at - s, n, r, 0, c, -1),
                xZ(l, a.at + s, n, r, 0, c, 1))
              : (bZ(l, a.at - s, n, r, 0, c, -1),
                bZ(l, a.at + s, n, r, 0, c, 1)),
            e.setMaterial(0.6, 0, sZ, cZ).setColor(...dZ));
        }
      } else if (a.median > 0)
        (e.setColor(...(wo(a) ? fZ : dZ)),
          yZ(e, o, s, g, a.at - p, 0.08, iZ),
          yZ(e, o, s, g, a.at + p, 0.08, iZ),
          e.setColor(...dZ));
      else if (_ === `street` || _ === `arterial` || _ === `boulevard`)
        for (let t = u + 1; t + 5 <= d - 1; t += 10) {
          let n = t + 2.5;
          n < s || n >= g || yZ(e, o, t, t + 5, a.at, 0.075, iZ);
        }
      e.setColor(...dZ);
      let v = a.flush ? a.halfWidth - 0.08 : a.halfWidth - 0.5;
      for (let t of [-1, 1]) yZ(e, o, s, g, a.at + t * v, 0.075, iZ);
      for (let n = 1; n < a.lanesPerDir; n++)
        for (let i of [-1, 1]) {
          let _ = a.at + i * (p + n * f),
            v = (o === `x` ? i : -i) * t.side > 0,
            y = v ? (l > c ? h : m) : l > c ? m : h,
            b = v ? d : u,
            x = y.signal && wo(a);
          for (let t = u + 2; t + 5 <= d - 2; t += 10) {
            let n = t + 2.5;
            n < s ||
              n >= g ||
              (Math.abs(n - b) < 30 && x) ||
              yZ(e, o, t, t + 5, _, 0.07, iZ);
          }
          if (x) {
            let t = CZ(
              a,
              r,
              v ? Math.max(u, d - 30) : u,
              v ? d : Math.min(d, u + 30),
            );
            t &&
              (e.setColor(...fZ),
              yZ(e, o, t[0], t[1], _, 0.08, 0.051000000000000004),
              e.setColor(...dZ));
          }
        }
      if (a.flush && de(a.id, `gbelt`) % 3 == 0) {
        let n = t.districtAt(
          o === `x` ? (s + g) / 2 : a.at,
          o === `x` ? a.at : (s + g) / 2,
        ).id;
        if (
          n === `ueno` ||
          n === `ameyoko` ||
          n === `kanda` ||
          n === `tokyo-east-generic` ||
          n === `akihabara`
        ) {
          let t = (e) => {
              let t = 0;
              for (let n of e.roads)
                n.axis !== o && (t = Math.max(t, n.sidewalk));
              return t + 0.6;
            },
            n = CZ(a, r, u + t(l > c ? m : h), d - t(l > c ? h : m));
          if (n) {
            let t = Math.min(1.2, a.sidewalk - 0.3) / 2;
            e.setMaterial(0.8, 0, sZ, cZ).setColor(...uMe);
            for (let r of [-1, 1])
              yZ(e, o, n[0], n[1], a.at + r * (a.halfWidth + t), t, 0.046);
          }
        }
      }
    }
  }
  (wZ(e, t, n, r), g && wZ(e, t, g, r));
}
function wZ(e, t, n, r) {
  let i = n.road,
    a = t.nodes[n.to],
    o = t.laneWidth,
    s = i.median / 2,
    c = i.lanesPerDir,
    l = t.side,
    u = dMe(
      i.axis === `x` ? n.ex : i.at,
      i.axis === `x` ? i.at : n.ez,
      n.dx,
      n.dz,
    ),
    d = (e) => l * (s + (e + 0.5) * o),
    f = l * s,
    p = l * i.halfWidth,
    m = (e, t) => [u.ox + u.qx * t + u.dx * e, u.oz + u.qz * t + u.dz * e],
    h = (e, t) => {
      let [n, i] = m(e, t);
      return SZ(r, n, i);
    },
    g = a.kind !== `end`,
    _ = g && To(a),
    v = g && Eo(t, a, n);
  (e.setMaterial(0.6, 0, sZ, cZ).setColor(...dZ),
    rZ ? gMe(e, t, n, u, d, h, l, i, c) : hMe(e, t, n, u, d, h, f, p, a, _, v));
}
function hMe(e, t, n, r, i, a, o, s, c, l, u) {
  let d = n.road,
    f = t.laneWidth,
    p = d.lanesPerDir,
    m = t.side;
  if (
    ((c.signal || u) &&
      a(-0.3, (o + s) / 2) &&
      _Z(e, r, Math.min(o, s), -0.52, Math.max(o, s), -0.08, iZ),
    u && n.length > 14)
  ) {
    let t = i(0);
    if (a(-5.4, t)) {
      let n = e.n;
      (pMe(e, r, `止まれ`, t, -5.4, Math.min(f - 0.9, 1.9), 2, 0.45, iZ),
        oZ(`tomare`, e.n - n));
    }
  }
  if (l && n.length > 56 && (!c.signal || !wo(d)))
    for (let t of [30, 50])
      for (let n = 0; n < p; n++) {
        let o = i(n),
          s = -t;
        if (a(s, o)) {
          let t = e.n;
          (_Me(e, r, o, s, 0.75, 2.6), oZ(`diamond`, e.n - t));
        }
      }
  if (c.signal && p >= 2 && n.length > 30)
    for (let t = 0; t < p; t++) {
      let n = i(t);
      if (!a(-14, n)) continue;
      let o = t === 0 ? `cross` : t === p - 1 ? `curb` : `straight`;
      {
        let t = e.n;
        (vMe(e, r, n, -14, o, m), oZ(`arrow`, e.n - t));
      }
    }
  let h = Do(d, n.length);
  if (wo(d) && n.length > 110 && de(n.id, `spdmark`) % 2 == 0) {
    let o = String(d.speedKmh);
    for (let s = 0; s < p; s++) {
      let c = i(s),
        l = Math.min(f - 1, 1.9);
      if (h && s === p - 1) {
        let e = d.halfWidth - f,
          t = d.halfWidth - 1.7;
        ((c = (m * (e + t)) / 2), (l = Math.min(l, t - e - 0.3)));
      }
      let u = -n.length * 0.5;
      if (a(u, c) && !(s === p - 1 && EZ(t, d, r, u - 2, u + 2, c))) {
        let t = e.n;
        (fMe(e, r, o, c, u, l, 4, iZ), oZ(`numerals`, e.n - t));
      }
    }
  }
  if (h) {
    let i = m * (d.halfWidth - 1.7),
      o = m * (d.halfWidth - 0.55),
      s = NaN;
    for (let c = -n.length; ; c += 10) {
      let n = Math.min(-2, c + 10),
        l =
          c < -2 &&
          a((c + n) / 2, (i + o) / 2) &&
          !EZ(t, d, r, c, n, (i + o) / 2);
      if (
        (l && Number.isNaN(s) && (s = c),
        !l &&
          !Number.isNaN(s) &&
          (e.setMaterial(0.75, 0, sZ, cZ).setColor(...pZ),
          _Z(e, r, Math.min(i, o), s, Math.max(i, o), Math.min(-2, c), 0.034),
          (s = NaN)),
        c >= -2)
      )
        break;
    }
  }
}
var TZ = (e, t) =>
  !(e + t > -53.2 && e - t < -46.8) &&
  !(e + t > -33.2 && e - t < -26.8) &&
  e + t < -17;
