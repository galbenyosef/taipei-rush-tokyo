// tokyo/assets/region-tokyo-A7LxHjud 37 — math
// Lines 19470-19664 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function tie(e, t, n) {
  let r = t.kinds,
    i = { x: 0, z: 0 },
    a = r.length,
    o = new Uint8Array(a),
    s = new Uint8Array(a),
    c = [];
  for (let e of n) {
    if (e === t) continue;
    let n = [],
      r = { x: 0, z: 0, tx: 0, tz: 1 };
    for (let t = e.draw0; t <= e.draw1; t += 2)
      (e.path.at(t, r),
        n.push(
          r.x,
          r.z,
          Math.max(-e.edge0.at(t), e.edge1.at(t)),
          e.deck.at(t),
        ));
    c.push(new Float32Array(n));
  }
  let l = { x: 0, z: 0, tx: 0, tz: 1 };
  for (let n = 0; n < a; n++) {
    let a = n;
    if (a < t.draw0 || a > t.draw1) {
      r[n] = Zs.None;
      continue;
    }
    let u = t.edge0.at(a),
      d = t.edge1.at(a),
      f = t.deck.at(a);
    if (t.id === `jr-main` && (t.path.pos(a, (u + d) / 2, i), Gs(i.x, i.z))) {
      r[n] = Zs.Cut;
      continue;
    }
    if (f < 7.9 && t.id === `jr-main`) {
      t.path.pos(a, (u + d) / 2, i);
      let o = f - e.groundHeight(i.x, i.z);
      if (o < 1) {
        r[n] = Zs.Cut;
        continue;
      }
      if (o < 4.6) {
        r[n] = Zs.Bank;
        continue;
      }
    }
    let p = !1,
      m = !1,
      h = 0;
    for (let n = 1; n <= 7; n++) {
      t.path.pos(a, u + ((d - u) * n) / 8, i);
      let r = e.surfaceAt(i.x, i.z);
      r === `road` || r === `crosswalk`
        ? (p = !0)
        : r === `sidewalk`
          ? h++
          : r === `water` && (m = !0);
    }
    (h >= 2 && (p = !0), t.path.at(a, l));
    let g = (d - u) / 2,
      _ = !1,
      v = t.deck.at(a);
    for (let e of c) {
      for (let t = 0; t < e.length; t += 4) {
        if (e[t + 3] > v - 3) continue;
        let n = e[t] - l.x,
          r = e[t + 1] - l.z,
          i = e[t + 2] + g * 0.2 + 3;
        if (n * n + r * r < i * i) {
          _ = !0;
          break;
        }
      }
      if (_) break;
    }
    let y = 0;
    for (let n = 1; n <= 7; n++) {
      t.path.pos(a, u + ((d - u) * n) / 8, i);
      let r = e.surfaceAt(i.x, i.z);
      r !== `road` &&
        r !== `crosswalk` &&
        r !== `sidewalk` &&
        r !== `water` &&
        y++;
    }
    ((o[n] = +!!m),
      (s[n] = +(!_ && y >= 3)),
      (r[n] = _ && t.upper ? Zs.Upper : p || m || _ ? Zs.Girder : Zs.Frame));
  }
  let u = 0;
  for (; u < a;)
    if (r[u] !== Zs.Girder) {
      let e = u;
      for (; e < a && r[e] !== Zs.Girder;) e++;
      if (u > 0 && e < a && e - u < 8 && r[u - 1] === Zs.Girder)
        for (let t = u; t < e; t++) r[t] = Zs.Girder;
      u = e;
    } else u++;
  let d = r.slice();
  for (let e = 0; e < a; e++)
    if (d[e] === Zs.Girder)
      for (let t of [-2, -1, 1, 2])
        e + t >= 0 &&
          e + t < a &&
          d[e + t] === Zs.Frame &&
          (r[e + t] = Zs.Girder);
  let f = [];
  for (u = 0; u < a;) {
    if (r[u] !== Zs.Girder) {
      u++;
      continue;
    }
    let e = u,
      t = !1;
    for (; e < a && r[e] === Zs.Girder;) ((t ||= o[e] === 1), e++);
    let n = u;
    for (; e - n > Xs;) {
      let r = -1,
        i = 1 / 0;
      for (let t = n + 10; t < e - 10; t++) {
        if (!s[t]) continue;
        let e = Math.abs(t - (n + Xs * 0.85));
        e < i && ((i = e), (r = t));
      }
      if (r < 0 || r - n > Xs * 1.6) break;
      (f.push({ s0: n, s1: r, water: t }), (n = r));
    }
    (f.push({ s0: n, s1: e, water: t }), (u = e));
  }
  t.girders = f;
  for (let [e, n] of t.brick)
    for (
      let t = Math.max(0, Math.floor(e));
      t <= Math.min(a - 1, Math.ceil(n));
      t++
    )
      r[t] === Zs.Frame && (r[t] = Zs.Brick);
}
var oc = -2560,
  sc = -2560,
  cc = (e) => Math.floor((e - oc) / 256),
  lc = (e) => Math.floor((e - sc) / 256),
  uc = (e, t) => t * 32 + e,
  dc = (e, t) => uc(cc(e), lc(t));
function fc(e) {
  let t = e % 32,
    n = Math.floor(e / 32),
    r = oc + t * 256,
    i = sc + n * 256;
  return {
    key: e,
    ix: t,
    iz: n,
    minX: r,
    minZ: i,
    maxX: r + 256,
    maxZ: i + 256,
  };
}
function nie(e, t = 32) {
  let n = e.bounds,
    r = Math.max(0, cc(n.minX - t)),
    i = Math.min(31, cc(n.maxX + t)),
    a = Math.max(0, lc(n.minZ - t)),
    o = lc(n.maxZ + t),
    s = [];
  for (let e = a; e <= o; e++) for (let t = r; t <= i; t++) s.push(uc(t, e));
  return s;
}
var rie = (e, t, n) => t >= e.minX && t < e.maxX && n >= e.minZ && n < e.maxZ,
  iie = {
    boulevard: { lanes: 3, median: 2, sidewalk: 6, speed: 50 },
    arterial: { lanes: 2, median: 1.5, sidewalk: 5, speed: 40 },
    street: { lanes: 1, median: 0, sidewalk: 3, speed: 30 },
    lane: { lanes: 1, median: 0, sidewalk: 2, speed: 20 },
  };
function pc(e, t, n, r, i, a, o, s = {}) {
  let c = iie[o];
  return {
    id: e,
    name: t ?? { ja: ``, zh: ``, en: `` },
    axis: n,
    at: r,
    from: i,
    to: a,
    kind: o,
    lanesPerDir: c.lanes,
    median: c.median,
    sidewalk: c.sidewalk,
    speedKmh: c.speed,
    ...(t ? {} : { unnamed: !0 }),
    ...s,
  };
}
