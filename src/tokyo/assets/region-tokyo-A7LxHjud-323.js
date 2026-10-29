// tokyo/assets/region-tokyo-A7LxHjud 323 — math
// Lines 116585-116931 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Hq = 0.92,
  Uq = 0.5,
  Wq = -0.006,
  Gq = 0.205,
  Kq = 1.4,
  qq = 1.115,
  Jq = 0.012,
  Yq = 0.222,
  Xq = 0.865,
  Zq = -0.01,
  BOe = 3,
  VOe = 4,
  HOe = 5,
  UOe = 6,
  WOe = 7,
  GOe = 8,
  KOe = 9,
  qOe = 10,
  Qq = 11,
  JOe = 12;
function YOe(e) {
  let t = [];
  for (let n = 0; n < e; n++) {
    let r = (n / e) * Math.PI * 2,
      i = Math.sin(r),
      a = Math.cos(r),
      o = 0.42 * i,
      s = -0.42 * i,
      c = -(0.08 + 0.62 * Math.max(0, a) ** 1.4),
      l = -(0.08 + 0.62 * Math.max(0, -a) ** 1.4);
    t.push({
      lThigh: o,
      lShin: c,
      rThigh: s,
      rShin: l,
      lUpper: -0.34 * i,
      lFore: 0.22 + 0.16 * Math.max(0, -i),
      rUpper: 0.34 * i,
      rFore: 0.22 + 0.16 * Math.max(0, i),
      bob: 0.022 * Math.cos(2 * r) - 0.008,
    });
  }
  return t;
}
var $q = {
    lThigh: 0.03,
    lShin: -0.04,
    rThigh: -0.05,
    rShin: -0.02,
    lUpper: 0.04,
    lFore: 0.12,
    rUpper: -0.02,
    rFore: 0.3,
    bob: 0,
  },
  eJ = new E(),
  tJ = new E();
function nJ(e, t, n, r, i) {
  if (!r) return;
  let a = Math.cos(r),
    o = Math.sin(r),
    s = i ? e.y : e.y - t,
    c = i ? e.z : e.z - n,
    l = s * a - c * o,
    u = s * o + c * a;
  ((e.y = i ? l : l + t), (e.z = i ? u : u + n));
}
function rJ(e, t, n, r, i, a) {
  if (!r) return;
  let o = r * i,
    s = Math.cos(o),
    c = Math.sin(o),
    l = a ? e.x : e.x - t,
    u = a ? e.y : e.y - n,
    d = l * s - u * c,
    f = l * c + u * s;
  ((e.x = a ? d : d + t), (e.y = a ? f : f + n));
}
function iJ(e, t, n, r, i) {
  return (
    i.set(e * Yq, Xq, Zq),
    nJ(i, qq, Jq, n, !1),
    nJ(i, Kq, 0, t, !1),
    rJ(i, e * Gq, Kq, r, e, !1),
    i
  );
}
var aJ = new E(),
  XOe = new E();
function ZOe(e, t, n, r) {
  for (let [i, a] of [
    [n, !1],
    [r, !0],
  ])
    switch (e) {
      case WOe:
        nJ(i, Hq, 0, t.lThigh, a);
        break;
      case GOe:
        (nJ(i, Uq, Wq, t.lShin, a), nJ(i, Hq, 0, t.lThigh, a));
        break;
      case KOe:
        nJ(i, Hq, 0, t.rThigh, a);
        break;
      case qOe:
        (nJ(i, Uq, Wq, t.rShin, a), nJ(i, Hq, 0, t.rThigh, a));
        break;
      case BOe:
        (nJ(i, Kq, 0, t.lUpper, a), rJ(i, -0.205, Kq, t.lOut ?? 0, -1, a));
        break;
      case VOe:
        (nJ(i, qq, Jq, t.lFore, a),
          nJ(i, Kq, 0, t.lUpper, a),
          rJ(i, -0.205, Kq, t.lOut ?? 0, -1, a));
        break;
      case HOe:
        (nJ(i, Kq, 0, t.rUpper, a), rJ(i, Gq, Kq, t.rOut ?? 0, 1, a));
        break;
      case UOe:
        (nJ(i, qq, Jq, t.rFore, a),
          nJ(i, Kq, 0, t.rUpper, a),
          rJ(i, Gq, Kq, t.rOut ?? 0, 1, a));
        break;
      case Qq:
      case JOe:
        if (!a) {
          let n = e === Qq ? 1 : -1,
            r = iJ(
              n,
              n > 0 ? t.rUpper : t.lUpper,
              n > 0 ? t.rFore : t.lFore,
              n > 0 ? (t.rOut ?? 0) : (t.lOut ?? 0),
              XOe,
            );
          (aJ.set(n * Yq, Xq, Zq), i.add(r).sub(aJ));
        }
    }
}
var oJ = 0.84,
  sJ = (e) => Math.max(0, Math.min(255, Math.round(e * 255)));
function cJ(e, t, n = 0.85, r = 2) {
  let i;
  try {
    i = nee(e, { lod: r });
  } catch (e) {
    return (console.warn(`[crowd] character library unavailable`, e), null);
  }
  let a = i.attributes.position.count,
    o = i.attributes.position.array,
    s = i.attributes.normal.array,
    c = i.attributes.color.array,
    l = i.attributes.part?.array ?? new Float32Array(a),
    u = i.index.array,
    d = (e.height || 1.72) / 1.72,
    f = new Uint8Array(a * 4),
    p = new Uint8Array(a * 4);
  for (let e = 0; e < a; e++) {
    let t = o[e * 3 + 1] / 1.72,
      r = oJ * (0.74 + 0.26 * Math.min(1, Math.max(0, (t - 0.05) / 0.75)));
    ((f[e * 4] = sJ(c[e * 3] * r)),
      (f[e * 4 + 1] = sJ(c[e * 3 + 1] * r)),
      (f[e * 4 + 2] = sJ(c[e * 3 + 2] * r)),
      (f[e * 4 + 3] = 255),
      (p[e * 4] = sJ(n)));
  }
  let m = a > 65535 ? new Uint32Array(u.length) : new Uint16Array(u.length);
  for (let e = 0; e < u.length; e++) m[e] = u[e];
  let h = [];
  for (let e of t) {
    let t = new Float32Array(a * 3),
      n = new Float32Array(a * 3),
      r = e.bob ?? 0;
    for (let i = 0; i < a; i++) {
      let a = i * 3;
      (eJ.set(o[a], o[a + 1], o[a + 2]),
        tJ.set(s[a], s[a + 1], s[a + 2]),
        ZOe(Math.round(l[i]), e, eJ, tJ),
        (t[a] = eJ.x * d),
        (t[a + 1] = (eJ.y + r) * d),
        (t[a + 2] = eJ.z * d),
        (n[a] = tJ.x),
        (n[a + 1] = tJ.y),
        (n[a + 2] = tJ.z));
    }
    h.push({ pos: t, nor: n, col: f, city: p, idx: m });
  }
  return (i.dispose(), h);
}
function QOe(e) {
  return { ...e, rUpper: 0.42, rFore: 1.3, rOut: 0.05 };
}
var $Oe = new E();
function eke(e, t, n, r) {
  let i = e.pos.length / 3,
    a = [],
    o = [],
    s = [],
    c = [];
  uJ.setHex(n);
  let l = [sJ(uJ.r), sJ(uJ.g), sJ(uJ.b)];
  uJ.multiplyScalar(0.55);
  let u = [sJ(uJ.r), sJ(uJ.g), sJ(uJ.b)],
    d = (e, t, n, c, l, u, d) => (
      a.push(e * r, t * r, n * r),
      o.push(c, l, u),
      s.push(d[0], d[1], d[2], 255),
      i + a.length / 3 - 1
    ),
    f = 0.06,
    p = -0.06,
    m = 2.02,
    h = 0.53,
    g = iJ(1, t.rUpper, t.rFore, t.rOut ?? 0, $Oe),
    _ = [40, 40, 44];
  for (let [e, t] of [
    [0.012, 0],
    [0, 0.012],
  ]) {
    let n = d(g.x - e, g.y, g.z - t, +!!t, 0, +!!e, _),
      r = d(g.x + e, g.y, g.z + t, +!!t, 0, +!!e, _),
      i = d(f + e, m, p + t, +!!t, 0, +!!e, _),
      a = d(f - e, m, p - t, +!!t, 0, +!!e, _);
    c.push(n, r, i, n, i, a, n, i, r, n, a, i);
  }
  let v = d(f, 2.08, p, 0, 1, 0, l),
    y = [],
    b = [];
  for (let e = 0; e < 8; e++) {
    let t = (e / 8) * Math.PI * 2,
      n = f + Math.cos(t) * h,
      r = p + Math.sin(t) * h,
      i = Math.cos(t) * 0.4,
      a = Math.sin(t) * 0.4;
    (y.push(d(n, 1.86, r, i, 0.9, a, l)), b.push(d(n, 1.86, r, 0, -1, 0, u)));
  }
  let x = d(f, 2, p, 0, -1, 0, u);
  for (let e = 0; e < 8; e++) {
    let t = (e + 1) % 8;
    (c.push(v, y[t], y[e]), c.push(x, b[e], b[t]));
  }
  let S = i + a.length / 3,
    C = new Float32Array(S * 3),
    w = new Float32Array(S * 3),
    T = new Uint8Array(S * 4),
    E = new Uint8Array(S * 4);
  (C.set(e.pos),
    C.set(a, i * 3),
    w.set(e.nor),
    w.set(o, i * 3),
    T.set(e.col),
    T.set(s, i * 4),
    E.set(e.city));
  for (let e = i; e < S; e++) E[e * 4] = 140;
  let D =
    S > 65535
      ? new Uint32Array(e.idx.length + c.length)
      : new Uint16Array(e.idx.length + c.length);
  return (
    D.set(e.idx),
    D.set(c, e.idx.length),
    { pos: C, nor: w, col: T, city: E, idx: D }
  );
}
function lJ(e) {
  let t = e.outer?.color ?? e.top?.color ?? e.skin,
    n = e.bottom?.style,
    r = n === `robe` || n === `skirt` || n === `pencil` || n === `longskirt`;
  return {
    top: t,
    bottom: e.bottom?.color ?? 3355443,
    skin: e.skin,
    hair: e.hair?.style === `bald` ? e.skin : (e.hair?.color ?? 1446930),
    shoes: e.shoes?.color ?? 2236962,
    skirt: r,
  };
}
var uJ = new f();
function dJ(e, t, n = null) {
  let r = t / 1.72,
    i = [];
  for (let t of [0, 1]) {
    let a = [],
      o = [],
      s = [],
      c = [],
      l = (e) => (uJ.setHex(e), [sJ(uJ.r * oJ), sJ(uJ.g * oJ), sJ(uJ.b * oJ)]),
      u = (e, t, n, i, u, d, f, p = 0, m = 0) => {
        let [h, g, _] = l(f),
          v = e - u,
          y = e + u,
          b = i - d + m,
          x = i + d + m,
          S = i - d + p,
          C = i + d + p,
          w = (e, t, n, i, l, u, d) => {
            let f = a.length / 3;
            for (let c of [e, t, n, i])
              (a.push(c[0] * r, c[1] * r, c[2] * r),
                o.push(l, u, d),
                s.push(h, g, _, 255));
            c.push(f, f + 1, f + 2, f, f + 2, f + 3);
          };
        (w([v, t, x], [y, t, x], [y, n, C], [v, n, C], 0, 0, 1),
          w([y, t, b], [v, t, b], [v, n, S], [y, n, S], 0, 0, -1),
          w([y, t, x], [y, t, b], [y, n, S], [y, n, C], 1, 0, 0),
          w([v, t, b], [v, t, x], [v, n, C], [v, n, S], -1, 0, 0),
          w([v, n, C], [y, n, C], [y, n, S], [v, n, S], 0, 1, 0));
      },
      d = t ? 0.2 : 0.02;
    (e.skirt
      ? (u(0, 0.08, 0.95, 0, 0.17, 0.12, e.bottom),
        u(0, 0, 0.1, 0, 0.13, 0.12, e.shoes))
      : (u(-0.095, 0.08, 0.95, 0, 0.075, 0.08, e.bottom, 0, -d),
        u(0.095, 0.08, 0.95, 0, 0.075, 0.08, e.bottom, 0, d),
        u(-0.095, 0, 0.08, -d, 0.07, 0.11, e.shoes),
        u(0.095, 0, 0.08, d, 0.07, 0.11, e.shoes)),
      u(0, 0.9, 1.45, 0, 0.24, 0.12, e.top),
      u(0, 1.45, 1.56, 0, 0.06, 0.06, e.skin),
      u(0, 1.5, 1.7, 0, 0.09, 0.1, e.skin),
      u(0, 1.66, 1.76, 0.015, 0.1, 0.11, e.hair),
      n !== null && u(0.04, 1.86, 1.96, -0.05, 0.5, 0.5, n));
    let f = a.length / 3,
      p = new Uint8Array(f * 4);
    for (let e = 0; e < f; e++) p[e * 4] = 220;
    i.push({
      pos: new Float32Array(a),
      nor: new Float32Array(o),
      col: new Uint8Array(s),
      city: p,
      idx: new Uint16Array(c),
    });
  }
  return i;
}
function tke(e) {
  let t = new S();
  return (
    t.setAttribute(`position`, new w(e.pos, 3)),
    t.setAttribute(`normal`, new w(e.nor, 3)),
    t.setAttribute(`color`, new w(e.col, 4, !0)),
    t.setAttribute(`aCity`, new w(e.city, 4, !0)),
    t.setIndex(new w(e.idx, 1)),
    t.computeBoundingBox(),
    t.computeBoundingSphere(),
    t
  );
}
