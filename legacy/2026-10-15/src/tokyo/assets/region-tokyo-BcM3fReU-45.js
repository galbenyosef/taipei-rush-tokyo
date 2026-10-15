// tokyo/assets/region-tokyo-BcM3fReU 45 — facing
// Lines 26015-26203 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function wh(e) {
  let [t, n, r, i] = e.lot,
    a = e.side === 0 || e.side === 2 ? r - t : i - n;
  return {
    x: e.side === 1 ? r : e.side === 3 ? t : (t + r) / 2,
    z: e.side === 0 ? n : e.side === 2 ? i : (n + i) / 2,
    facing: Ch[e.side],
    width: Math.max(2.6, a * (e.share ?? 1) - 0.3),
  };
}
var Th = new WeakMap();
function Eh(e) {
  let t = Th.get(e);
  if (t) return t;
  t = [];
  for (let n of yh) {
    let r = wh(n),
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
  return (Th.set(e, t), t);
}
function Dh() {
  let e = [];
  for (let t of yh) {
    let n = wh(t),
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
      hours: Oh(t.hours),
    });
  }
  {
    let t = bh.door,
      n = Math.sin(t.facing),
      r = -Math.cos(t.facing);
    e.push({
      id: `tokyo:interiors:sento-enraiyu`,
      kind: `entrance`,
      label: bh.label,
      copyKey: bh.brand,
      x: +(t.x + n * 0.6).toFixed(1),
      z: +(t.z + r * 0.6).toFixed(1),
      heading: t.facing,
      radius: 120,
      hours: [6, 20],
    });
  }
  {
    let t = xh.door,
      n = Math.cos(t.facing),
      r = Math.sin(t.facing),
      i = Math.sin(t.facing),
      a = -Math.cos(t.facing),
      o = xh.mouthX - xh.doorX;
    e.push({
      id: `tokyo:interiors:callcentre-shimbashi`,
      kind: `entrance`,
      label: xh.label,
      copyKey: xh.brand,
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
      label: Sh.label,
      copyKey: Sh.brand,
      x: -73.1,
      z: 303.6,
      heading: -Math.PI / 2,
      radius: 150,
      hours: Oh(Sh.hours),
    }),
    e
  );
}
function Oh(e) {
  let t = /(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/.exec(e);
  if (!t) return;
  let n = +t[1] + t[2] / 60,
    r = +t[3] + t[4] / 60;
  return (r <= n && (r += 24), [n, r]);
}
var kh = [`start`, `lots`, `copies`, `paint`, `flush+mesh`],
  Ah = 1500,
  jh = (e) => e;
function* Mh(e, t, n, r, i, a, o, s, c = { phase: `` }, l, u) {
  (Zm(t), (c.phase = `lots`));
  let d = [t.body, t.sign, t.screen, t.ticker].map(jh),
    f = [0, 0, 0, 0];
  for (let c of n) {
    let n = l ? l.base(c) : 0;
    if (n) for (let e = 0; e < 4; e++) f[e] = d[e].vc;
    if (
      (i && i.beginGroup(a),
      (e.shopSink = u ? (e) => u.push(n ? { ...e } : e) : null),
      (o.n += e.lot(t, c, r, n && i && l ? l.statics(n) : i, o.n < Ah)),
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
    y = new Uint8Array(p * 4),
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
      y.set(e.info.subarray(0, e.vc * 4), S * 4),
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
  let T = new b();
  return (
    T.setAttribute(`position`, new x(h, 3)),
    T.setAttribute(`normal`, new x(g, 4, !0)),
    T.setAttribute(`uv`, new x(_, 2)),
    T.setAttribute(`aTint`, new x(v, 4, !0)),
    T.setAttribute(`aInfo`, new x(y, 4, !1)),
    T.setIndex(new x(C, 1)),
    T
  );
}
var Nh = null,
  Ph = () => Nh;
function Fh(e) {
  let t = new Map();
  for (let n of e) {
    let e = t.get(n.blockId);
    (e || t.set(n.blockId, (e = [])), e.push(n));
  }
  return t;
}
