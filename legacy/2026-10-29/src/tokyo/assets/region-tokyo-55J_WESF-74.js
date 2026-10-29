// tokyo/assets/region-tokyo-55J_WESF 74 — facing
// Lines 34679-34867 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function tp(e) {
  let [t, n, r, i] = e.lot,
    a = e.side === 0 || e.side === 2 ? r - t : i - n;
  return {
    x: e.side === 1 ? r : e.side === 3 ? t : (t + r) / 2,
    z: e.side === 0 ? n : e.side === 2 ? i : (n + i) / 2,
    facing: tce[e.side],
    width: Math.max(2.6, a * (e.share ?? 1) - 0.3),
  };
}
var np = new WeakMap();
function rp(e) {
  let t = np.get(e);
  if (t) return t;
  t = [];
  for (let n of Zf) {
    let r = tp(n),
      i = (n.lot[0] + n.lot[2]) / 2,
      a = (n.lot[1] + n.lot[3]) / 2,
      o = e.blocks.find(
        (e) => i >= e.minX && i <= e.maxX && a >= e.minZ && a <= e.maxZ,
      );
    o &&
      t.push({
        id: n.id,
        kind: n.paint ?? n.kind,
        brand: n.brand,
        x: r.x,
        z: r.z,
        facing: r.facing,
        blockId: o.id,
        width: r.width,
      });
  }
  return (np.set(e, t), t);
}
function nce() {
  let e = [];
  for (let t of Zf) {
    let n = tp(t),
      r = Math.sin(n.facing),
      i = -Math.cos(n.facing);
    e.push({
      id: `tokyo:interiors:${t.id.replace(/^walkin-/, ``)}`,
      kind: `entrance`,
      label: t.label,
      copyKey:
        t.brand.startsWith(`interior.`) || t.brand.startsWith(`walkin.`)
          ? t.brand
          : void 0,
      x: +(n.x + r * 0.6).toFixed(1),
      z: +(n.z + i * 0.6).toFixed(1),
      heading: n.facing,
      radius: 120,
      hours: ip(t.hours),
    });
  }
  {
    let t = Qf.door,
      n = Math.sin(t.facing),
      r = -Math.cos(t.facing);
    e.push({
      id: `tokyo:interiors:sento-enraiyu`,
      kind: `entrance`,
      label: Qf.label,
      copyKey: Qf.brand,
      x: +(t.x + n * 0.6).toFixed(1),
      z: +(t.z + r * 0.6).toFixed(1),
      heading: t.facing,
      radius: 120,
      hours: [6, 20],
    });
  }
  {
    let t = $f.door,
      n = Math.cos(t.facing),
      r = Math.sin(t.facing),
      i = Math.sin(t.facing),
      a = -Math.cos(t.facing),
      o = $f.mouthX - $f.doorX;
    e.push({
      id: `tokyo:interiors:callcentre-shimbashi`,
      kind: `entrance`,
      label: $f.label,
      copyKey: $f.brand,
      x: +(t.x + n * o + i * 0.2).toFixed(1),
      z: +(t.z + r * o + a * 0.2).toFixed(1),
      heading: t.facing,
      radius: 120,
    });
  }
  return (
    e.push({
      id: `tokyo:interiors:izakaya-yurakucho`,
      kind: `entrance`,
      label: ep.label,
      copyKey: ep.brand,
      x: -73.1,
      z: 303.6,
      heading: -Math.PI / 2,
      radius: 150,
      hours: ip(ep.hours),
    }),
    e
  );
}
function ip(e) {
  let t = /(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/.exec(e);
  if (!t) return;
  let n = +t[1] + t[2] / 60,
    r = +t[3] + t[4] / 60;
  return (r <= n && (r += 24), [n, r]);
}
var ap = [`start`, `lots`, `copies`, `paint`, `flush+mesh`, `page`],
  rce = 1500,
  ice = (e) => e;
function* ace(e, t, n, r, i, a, o, s, c = { phase: `` }, l, u) {
  (Use(t), (c.phase = `lots`));
  let d = [t.body, t.sign, t.screen, t.ticker].map(ice),
    f = [0, 0, 0, 0];
  for (let c of n) {
    let n = l ? l.base(c) : 0;
    if (n) for (let e = 0; e < 4; e++) f[e] = d[e].vc;
    if (
      (i && i.beginGroup(a),
      (e.shopSink = u ? (e) => u.push(n ? { ...e } : e) : null),
      (o.n += e.lot(t, c, r, n && i && l ? l.statics(n) : i, o.n < rce)),
      (e.shopSink = null),
      i && i.endGroup(),
      n)
    )
      for (let e = 0; e < 4; e++) {
        let t = d[e].pos;
        for (let r = f[e]; r < d[e].vc; r++) t[r * 3 + 1] += n;
      }
    s() && (yield);
  }
  let p = 0,
    m = 0;
  for (let e of d) ((p += e.vc), (m += e.ic));
  if (!m) return null;
  (s() && (yield), (c.phase = `copies`));
  let h = new Float32Array(p * 3),
    g = new Int8Array(p * 4),
    _ = new Float32Array(p * 2),
    v = new Uint8Array(p * 4),
    x = new Uint8Array(p * 4),
    S = 0;
  for (let e of d) (h.set(e.pos.subarray(0, e.vc * 3), S * 3), (S += e.vc));
  (yield, (S = 0));
  for (let e of d)
    (g.set(e.nrm.subarray(0, e.vc * 4), S * 4),
      _.set(e.uv.subarray(0, e.vc * 2), S * 2),
      (S += e.vc));
  (yield, (S = 0));
  for (let e of d)
    (v.set(e.tint.subarray(0, e.vc * 4), S * 4),
      x.set(e.info.subarray(0, e.vc * 4), S * 4),
      (S += e.vc));
  yield;
  let C = p > 65535 ? new Uint32Array(m) : new Uint16Array(m);
  S = 0;
  let w = 0;
  for (let e of d) {
    let t = e.idx;
    for (let n = 0; n < e.ic; n++) C[w + n] = t[n] + S;
    ((S += e.vc), (w += e.ic));
  }
  let T = new y();
  return (
    T.setAttribute(`position`, new b(h, 3)),
    T.setAttribute(`normal`, new b(g, 4, !0)),
    T.setAttribute(`uv`, new b(_, 2)),
    T.setAttribute(`aTint`, new b(v, 4, !0)),
    T.setAttribute(`aInfo`, new b(x, 4, !1)),
    T.setIndex(new b(C, 1)),
    T
  );
}
var op = null,
  oce = () => op;
function sce(e) {
  let t = new Map();
  for (let n of e) {
    let e = t.get(n.blockId);
    (e || t.set(n.blockId, (e = [])), e.push(n));
  }
  return t;
}
