// tokyo__assets__world-Bo9wkXrT 33 — math
// Lines 10516-10821 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function Rc(e) {
  let t = new V();
  (t.setAttribute(
    `position`,
    new H(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
  ),
    t.setAttribute(
      `normal`,
      new H(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    t.setAttribute(`uv`, new H(new Float32Array(6), 2)),
    t.setAttribute(`color`, new H(new Float32Array(12).fill(1), 4)));
  let n = new V();
  (n.setAttribute(
    `position`,
    new H(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
  ),
    n.setAttribute(
      `normal`,
      new H(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    n.setAttribute(`uv`, new H(new Float32Array(6), 2)),
    n.setAttribute(`aCol`, new H(new Uint8Array(12).fill(255), 4, !0)),
    n.setAttribute(`aMat`, new H(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aLight`, new H(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aInfo`, new H(new Uint8Array(12), 4, !1)),
    n.setIndex(new H(new Uint16Array([0, 1, 2]), 1)));
  let r = null,
    i = null,
    a = null,
    o = null,
    s = (e, t, n, r = !1) => {
      let i = new P(e, t);
      return (
        (i.name = n),
        (i.frustumCulled = !1),
        (i.castShadow = r),
        (i.receiveShadow = r),
        i
      );
    };
  return {
    protos() {
      if (e.city)
        return (
          r || ((a ??= zc()), (r = [s(a, e.city, `sites-prewarm-city`, !0)]), r)
        );
      let c = e.lmFallback ? null : e.lm;
      if (r && i === c) return r;
      i = c;
      let l = [
        s(t, e.ext, `sites-prewarm-ext`),
        s(t, e.room, `sites-prewarm-room`),
      ];
      return (
        e.glass && l.push(s(t, e.glass, `sites-prewarm-glass`)),
        c &&
          (o?.dispose(),
          (o = Ec(n.clone(), c, `sites-prewarm-lm`)),
          (o.frustumCulled = !1),
          (o.castShadow = !0),
          (o.receiveShadow = !0),
          l.push(o)),
        (r = l),
        l
      );
    },
    dispose() {
      ((r = null),
        o?.dispose(),
        (o = null),
        t.dispose(),
        n.dispose(),
        a?.dispose());
    },
  };
}
function zc() {
  let e = new V();
  return (
    e.setAttribute(
      `position`,
      new H(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
    ),
    e.setAttribute(
      `normal`,
      new H(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    e.setAttribute(`uv`, new H(new Float32Array(6), 2)),
    e.setAttribute(`color`, new H(new Float32Array(9).fill(1), 3)),
    e.setAttribute(`aCity`, new H(new Uint8Array(12), 4, !0)),
    e.setIndex(new H(new Uint16Array([0, 1, 2]), 1)),
    e
  );
}
var Bc = {
    id: `_sites`,
    name: { zh: `地標與名店`, en: `Landmarks & famous shops` },
    claims: [],
  },
  Vc = 0.05,
  Hc = 64,
  Uc = 4096,
  Wc = 8192,
  Gc = Ur.maxClaimRects,
  Kc = { raw: 0, merged: 0, sites: 0, ms: 0 };
function qc() {
  return Kc;
}
function Jc() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function Yc() {
  ((Bc.claims.length = 0),
    (Kc = { raw: 0, merged: 0, sites: 0, ms: 0 }),
    tl++,
    ($c = null),
    (el = null),
    (rl.queries = 0),
    (rl.rejected = 0),
    (rl.buildMs = 0),
    (rl.rects = 0),
    (nl = !1));
}
function Xc(e) {
  let t = new Map();
  for (let n of e) {
    let e = Math.min(n.minX, n.maxX),
      r = Math.max(n.minX, n.maxX),
      i = Math.min(n.minZ, n.maxZ),
      a = Math.max(n.minZ, n.maxZ);
    if (!(r - e > 1e-4) || !(a - i > 1e-4) || !Number.isFinite(e + r + i + a))
      continue;
    let o = t.get(n.scope);
    (o || t.set(n.scope, (o = [])),
      o.push({
        minX: e,
        minZ: i,
        maxX: r,
        maxZ: a,
        scope: n.scope,
        label: n.label,
      }));
  }
  let n = [];
  for (let e of t.values()) {
    e.sort(
      (e, t) =>
        (t.maxX - t.minX) * (t.maxZ - t.minZ) -
        (e.maxX - e.minX) * (e.maxZ - e.minZ),
    );
    for (let t = 0; t < 4; t++) {
      let t = !1;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (r)
          for (let i = n + 1; i < e.length; i++) {
            let n = e[i];
            if (!n) continue;
            if (
              r.minX <= n.minX + Vc &&
              r.maxX >= n.maxX - Vc &&
              r.minZ <= n.minZ + Vc &&
              r.maxZ >= n.maxZ - Vc
            ) {
              ((e[i] = null), (t = !0));
              continue;
            }
            let a =
                Math.abs(r.minX - n.minX) <= Vc &&
                Math.abs(r.maxX - n.maxX) <= Vc,
              o =
                Math.abs(r.minZ - n.minZ) <= Vc &&
                Math.abs(r.maxZ - n.maxZ) <= Vc,
              s = n.minZ <= r.maxZ + Vc && r.minZ <= n.maxZ + Vc,
              c = n.minX <= r.maxX + Vc && r.minX <= n.maxX + Vc;
            ((a && s) || (o && c)) &&
              ((r.minX = Math.min(r.minX, n.minX)),
              (r.maxX = Math.max(r.maxX, n.maxX)),
              (r.minZ = Math.min(r.minZ, n.minZ)),
              (r.maxZ = Math.max(r.maxZ, n.maxZ)),
              (r.label = r.label === n.label ? r.label : `${r.label}+`),
              (e[i] = null),
              (t = !0));
          }
      }
      if (!t) break;
    }
    for (let t = 0; t < 3; t++) {
      let t = !1;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (r)
          for (let i = n + 1; i < e.length; i++) {
            let n = e[i];
            if (!n) continue;
            let a = Math.min(r.minX, n.minX),
              o = Math.max(r.maxX, n.maxX),
              s = Math.min(r.minZ, n.minZ),
              c = Math.max(r.maxZ, n.maxZ),
              l = (o - a) * (c - s),
              u = (r.maxX - r.minX) * (r.maxZ - r.minZ),
              d = (n.maxX - n.minX) * (n.maxZ - n.minZ),
              f = Math.max(
                0,
                Math.min(r.maxX, n.maxX) - Math.max(r.minX, n.minX),
              ),
              p = Math.max(
                0,
                Math.min(r.maxZ, n.maxZ) - Math.max(r.minZ, n.minZ),
              );
            l - (u + d - f * p) > Math.max(0.75, l * 0.02) ||
              ((r.minX = a),
              (r.maxX = o),
              (r.minZ = s),
              (r.maxZ = c),
              (r.label = r.label === n.label ? r.label : `${r.label}+`),
              (e[i] = null),
              (t = !0));
          }
      }
      if (!t) break;
    }
    for (let t of e) t && n.push(t);
  }
  return Zc(n);
}
function Zc(e) {
  let t = [],
    n = new Map();
  for (let t of e) {
    let e = n.get(t.label);
    (e || n.set(t.label, (e = [])), e.push(t));
  }
  for (let e of n.values()) {
    if (e.length > 1)
      for (let t = 0; t < 3; t++) {
        let t = !1;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          if (r)
            for (let i = n + 1; i < e.length; i++) {
              let n = e[i];
              if (!n) continue;
              let a = Math.min(r.minX, n.minX),
                o = Math.max(r.maxX, n.maxX),
                s = Math.min(r.minZ, n.minZ),
                c = Math.max(r.maxZ, n.maxZ),
                l = Math.max(
                  0,
                  Math.min(r.maxX, n.maxX) - Math.max(r.minX, n.minX),
                ),
                u = Math.max(
                  0,
                  Math.min(r.maxZ, n.maxZ) - Math.max(r.minZ, n.minZ),
                ),
                d = (r.maxX - r.minX) * (r.maxZ - r.minZ),
                f = (n.maxX - n.minX) * (n.maxZ - n.minZ);
              (o - a) * (c - s) - (d + f - l * u) >
                Math.max(0.75, (d + f) * 0.02) ||
                ((r.minX = a),
                (r.maxX = o),
                (r.minZ = s),
                (r.maxZ = c),
                (r.scope = r.scope === n.scope ? r.scope : `all`),
                (e[i] = null),
                (t = !0));
            }
        }
        if (!t) break;
      }
    for (let n of e) n && t.push(n);
  }
  return t;
}
function Qc(e) {
  let t = Jc(),
    n = [],
    r = 0;
  for (let t of e) {
    if (!t.ok) continue;
    let e = !1;
    for (let r of t.claims) (n.push(r), (e = !0));
    e && r++;
  }
  let i = Xc(n),
    a = Bc.claims;
  a.length = 0;
  for (let e of i) a.push(e);
  return (
    (Kc = {
      raw: n.length,
      merged: a.length,
      sites: r,
      ms: Math.round((Jc() - t) * 100) / 100,
    }),
    tl++,
    ($c = null),
    (el = null),
    a.length > Gc &&
      console.warn(
        `[test] sites claims: ${a.length} merged rects > ${Gc} — every ctx.districts.claimed() call (thousands during buildings.init) walks them all; author fewer / bigger meta.claims rects`,
      ),
    a.length
  );
}
