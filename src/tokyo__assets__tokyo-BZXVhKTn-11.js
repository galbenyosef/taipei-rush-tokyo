// tokyo__assets__tokyo-BZXVhKTn 11 — math
// Lines 4826-5105 of readable/tokyo__assets__tokyo-BZXVhKTn.pretty.js (statement-aligned).
function ir(e) {
  try {
    return e.vehicles.playerVehicle;
  } catch {
    return null;
  }
}
function ar(e) {
  return e.toLowerCase().replace(/\{[^}]*\}|[^\p{L}\p{N}]+/gu, ``);
}
function or(e, t) {
  let n = ar(e),
    r = ar(t),
    i = n.length,
    a = r.length;
  if (i < 8 || a < 8) return n === r && i > 0;
  let o = 0,
    s = new Uint16Array(a + 1),
    c = new Uint16Array(a + 1);
  for (let e = 1; e <= i; e++) {
    let t = n.charCodeAt(e - 1);
    for (let e = 1; e <= a; e++) {
      let n = t === r.charCodeAt(e - 1) ? s[e - 1] + 1 : 0;
      ((c[e] = n), n > o && (o = n));
    }
    let i = s;
    ((s = c), (c = i));
  }
  return o >= 8 && o >= 0.5 * Math.min(i, a);
}
function sr(e, t, n) {
  let r = 0;
  for (let i of e)
    r += /[\u2e80-\u9fff\uff00-\uffef]/.test(i) ? t : i === ` ` ? n * 0.6 : n;
  return r;
}
function cr(e) {
  let t = Math.max(0, e),
    n = Math.floor(t / 60),
    r = t - n * 60;
  return `${n}:${r < 10 ? `0` : ``}${r.toFixed(1)}`;
}
var lr = { range: null };
function ur(e, t) {
  let n = 0.5 + 0.5 * Math.cos(((e - 14.5) / 24) * Math.PI * 2),
    r = 24.5 + 8 * n,
    i = lr.range?.();
  i && (r = i[0] + (i[1] - i[0]) * n);
  try {
    let e = Yn();
    e && e.tempC && (r = e.tempC[0] + (e.tempC[1] - e.tempC[0]) * n);
  } catch {}
  return Math.round(
    r +
      (t === `rain`
        ? -3
        : t === `storm`
          ? -4
          : t === `cloudy`
            ? -1
            : t === `fog`
              ? -2
              : 0),
  );
}
function dr() {
  let e = ``;
  for (let t = 0; t <= 12; t++) {
    let n = ((135 + t * 22.5) * Math.PI) / 180,
      r = t % 2 == 0 ? 39 : 42;
    e += `<line class="spd-tick${t >= 11 ? ` red` : ``}" x1="${(60 + Math.cos(n) * r).toFixed(2)}" y1="${(60 + Math.sin(n) * r).toFixed(2)}" x2="${(60 + Math.cos(n) * 45).toFixed(2)}" y2="${(60 + Math.sin(n) * 45).toFixed(2)}"/>`;
  }
  return e;
}
var X = {
    terrain: `#162019`,
    farCity: `#1c2029`,
    water: `#123553`,
    waterHi: `#1c4f78`,
    riverside: `#20402c`,
    bikePath: `#5e7d63`,
    sidewalk: `#2b313d`,
    lot: `#1b2029`,
    lotHi: `#222836`,
    plazaLot: `#2c2433`,
    plaza: `#6b4a5e`,
    park: `#234a31`,
    parkTree: `#2d5d3d`,
    road: `#5c6473`,
    major: `#8c94a2`,
    boulevard: `#a4abb7`,
    median: `#4c5463`,
    medianTree: `#2e6a40`,
    centerLine: `#d8b24a`,
    expressway: `rgba(214,220,232,0.30)`,
    expresswayEdge: `rgba(240,244,250,0.55)`,
    mrt: `#b07a35`,
    landmark: `#3a3456`,
    temple: `#5a2226`,
    market: `#5c3a16`,
    hospital: `#2b4658`,
    police: `#23305a`,
    station: `#35395a`,
    airfield: `#22392b`,
    apron: `#474c55`,
    runway: `#2a2e36`,
    terminal: `#40466a`,
  },
  fr = (e, t, n, r, i) =>
    n >= e.minX && t <= e.maxX && i >= e.minZ && r <= e.maxZ;
function pr(e, t, n) {
  let r = n.look,
    i = r.city,
    a = 1 / n.pxPerM;
  if (
    ((e.fillStyle = r.ground),
    e.fillRect(
      n.minX - 10,
      n.minZ - 10,
      n.maxX - n.minX + 20,
      n.maxZ - n.minZ + 20,
    ),
    n.hills)
  ) {
    let t = n.hills;
    ((e.imageSmoothingEnabled = !0),
      e.drawImage(t.canvas, t.minX, t.minZ, t.maxX - t.minX, t.maxZ - t.minZ));
  }
  (r.backdrop(e, n),
    r.under?.(e, n),
    (e.fillStyle = X.sidewalk),
    e.fillRect(i.minX, i.minZ, i.maxX - i.minX, i.maxZ - i.minZ));
  for (let r of t.blocks) {
    if (!fr(n, r.minX, r.maxX, r.minZ, r.maxZ)) continue;
    let t = r.zones.length > 0;
    if (
      ((e.fillStyle = t ? X.plazaLot : X.lot),
      e.fillRect(r.minX, r.minZ, r.maxX - r.minX, r.maxZ - r.minZ),
      n.pxPerM > 0.45)
    ) {
      let n = Math.min(6, (r.maxX - r.minX) * 0.08, (r.maxZ - r.minZ) * 0.08);
      ((e.fillStyle = t ? `#33293b` : X.lotHi),
        e.fillRect(
          r.minX + n,
          r.minZ + n,
          r.maxX - r.minX - n * 2,
          r.maxZ - r.minZ - n * 2,
        ));
    }
  }
  for (let r of t.landmarks) {
    if (r.zone) continue;
    let t = r.x - r.w / 2,
      i = r.z - r.d / 2;
    if (fr(n, t, t + r.w, i, i + r.d)) {
      if (
        ((e.fillStyle =
          r.kind === `park`
            ? X.park
            : r.kind === `temple`
              ? X.temple
              : r.kind === `market`
                ? X.market
                : r.kind === `hospital`
                  ? X.hospital
                  : r.kind === `police`
                    ? X.police
                    : r.kind === `station`
                      ? X.station
                      : X.landmark),
        e.fillRect(t, i, r.w, r.d),
        r.kind === `park` && n.detail)
      ) {
        e.fillStyle = X.parkTree;
        let n = 0;
        for (let a = i + 5; a < i + r.d - 3; a += 9)
          for (let i = t + 5 + ((n++ % 2) * 9) / 2; i < t + r.w - 3; i += 9)
            (e.beginPath(), e.arc(i, a, 3.2, 0, Math.PI * 2), e.fill());
      }
      ((e.strokeStyle = `rgba(255,255,255,0.10)`),
        (e.lineWidth = Math.max(a, 1)),
        e.strokeRect(t, i, r.w, r.d));
    }
  }
  r.over?.(e, t, n);
  for (let r of t.roads) {
    let [i, o, s, c] = t.roadRect(r, r.halfWidth);
    if (!fr(n, i, o, s, c)) continue;
    e.fillStyle = r.pedestrian
      ? X.plaza
      : r.kind === `boulevard`
        ? X.boulevard
        : r.major
          ? X.major
          : X.road;
    let l = r.major ? 2.2 * a : 1.4 * a;
    if (r.axis === `x`) {
      let t = Math.max(r.halfWidth, l / 2);
      e.fillRect(i, r.at - t, o - i, t * 2);
    } else {
      let t = Math.max(r.halfWidth, l / 2);
      e.fillRect(r.at - t, s, t * 2, c - s);
    }
  }
  for (let r of t.links) {
    if (r.id > r.reverse) continue;
    let t = r.road,
      i = Math.min(r.sx, r.ex),
      o = Math.max(r.sx, r.ex),
      s = Math.min(r.sz, r.ez),
      c = Math.max(r.sz, r.ez);
    if (fr(n, i - 20, o + 20, s - 20, c + 20)) {
      if (t.median > 0) {
        let n = Math.max(t.median / 2, 0.6 * a);
        ((e.fillStyle = t.treeMedian ? X.medianTree : X.median),
          t.axis === `x`
            ? e.fillRect(i, t.at - n, o - i, n * 2)
            : e.fillRect(t.at - n, s, n * 2, c - s));
      } else
        n.detail &&
          !t.pedestrian &&
          n.pxPerM > 1.2 &&
          ((e.strokeStyle = X.centerLine),
          (e.lineWidth = Math.max(0.3, a * 0.9)),
          e.setLineDash([3, 3]),
          e.beginPath(),
          t.axis === `x`
            ? (e.moveTo(i, t.at), e.lineTo(o, t.at))
            : (e.moveTo(t.at, s), e.lineTo(t.at, c)),
          e.stroke(),
          e.setLineDash([]));
    }
  }
  for (let i of t.roads) {
    if (!i.elevated) continue;
    let [o, s, c, l] = t.roadRect(i, i.halfWidth);
    if (fr(n, o, s, c, l)) {
      if (i.elevated === `expressway`) {
        if (r.ownExpressways) continue;
        ((e.fillStyle = X.expressway),
          (e.strokeStyle = X.expresswayEdge),
          (e.lineWidth = Math.max(a, 0.8)),
          i.axis === `x`
            ? (e.fillRect(o, i.at - 8, s - o, 16),
              e.strokeRect(o, i.at - 8, s - o, 16))
            : (e.fillRect(i.at - 8, c, 16, l - c),
              e.strokeRect(i.at - 8, c, 16, l - c)));
      } else {
        let t = Math.max(2.5, 1.2 * a);
        ((e.fillStyle = X.mrt),
          i.axis === `x`
            ? e.fillRect(o, i.at - t, s - o, t * 2)
            : e.fillRect(i.at - t, c, t * 2, l - c));
      }
    }
  }
  if (n.stations)
    for (let t of n.stations)
      !t.elevated ||
        t.hw <= 0 ||
        (fr(n, t.x - t.hw, t.x + t.hw, t.z - t.hl, t.z + t.hl) &&
          ((e.fillStyle = X.mrt),
          e.fillRect(t.x - t.hw, t.z - t.hl, t.hw * 2, t.hl * 2)));
  r.top?.(e, t, n);
}
function mr(e, t, n, r) {
  ((e.fillStyle = r.ground),
    e.fillRect(
      t.minX - 10,
      t.minZ - 10,
      t.maxX - t.minX + 20,
      t.maxZ - t.minZ + 20,
    ),
    n &&
      e.drawImage(n.canvas, n.minX, n.minZ, n.maxX - n.minX, n.maxZ - n.minZ),
    r.backdrop(e, t));
}
var hr = new WeakMap(),
  gr = { minX: -1100, maxX: 1060, minZ: -1130, maxZ: 740 },
  _r = { minX: -1130, maxX: 1010, minZ: -1120, maxZ: 660 };
