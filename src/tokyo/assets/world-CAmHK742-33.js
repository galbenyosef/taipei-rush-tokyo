// tokyo/assets/world-CAmHK742 33 — math
// Lines 10576-10881 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function qc(e) {
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
      let i = new M(e, t);
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
          r || ((a ??= Jc()), (r = [s(a, e.city, `sites-prewarm-city`, !0)]), r)
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
          (o = Fc(n.clone(), c, `sites-prewarm-lm`)),
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
function Jc() {
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
var Yc = {
    id: `_sites`,
    name: { zh: `地標與名店`, en: `Landmarks & famous shops` },
    claims: [],
  },
  Xc = 0.05,
  Zc = 64,
  Qc = 4096,
  $c = 8192,
  el = pt.maxClaimRects,
  tl = { raw: 0, merged: 0, sites: 0, ms: 0 };
function nl() {
  return tl;
}
function rl() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function il() {
  ((Yc.claims.length = 0),
    (tl = { raw: 0, merged: 0, sites: 0, ms: 0 }),
    ul++,
    (cl = null),
    (ll = null),
    (fl.queries = 0),
    (fl.rejected = 0),
    (fl.buildMs = 0),
    (fl.rects = 0),
    (dl = !1));
}
function al(e) {
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
              r.minX <= n.minX + Xc &&
              r.maxX >= n.maxX - Xc &&
              r.minZ <= n.minZ + Xc &&
              r.maxZ >= n.maxZ - Xc
            ) {
              ((e[i] = null), (t = !0));
              continue;
            }
            let a =
                Math.abs(r.minX - n.minX) <= Xc &&
                Math.abs(r.maxX - n.maxX) <= Xc,
              o =
                Math.abs(r.minZ - n.minZ) <= Xc &&
                Math.abs(r.maxZ - n.maxZ) <= Xc,
              s = n.minZ <= r.maxZ + Xc && r.minZ <= n.maxZ + Xc,
              c = n.minX <= r.maxX + Xc && r.minX <= n.maxX + Xc;
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
  return ol(n);
}
function ol(e) {
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
function sl(e) {
  let t = rl(),
    n = [],
    r = 0;
  for (let t of e) {
    if (!t.ok) continue;
    let e = !1;
    for (let r of t.claims) (n.push(r), (e = !0));
    e && r++;
  }
  let i = al(n),
    a = Yc.claims;
  a.length = 0;
  for (let e of i) a.push(e);
  return (
    (tl = {
      raw: n.length,
      merged: a.length,
      sites: r,
      ms: Math.round((rl() - t) * 100) / 100,
    }),
    ul++,
    (cl = null),
    (ll = null),
    a.length > el &&
      console.warn(
        `[test] sites claims: ${a.length} merged rects > ${el} — every ctx.districts.claimed() call (thousands during buildings.init) walks them all; author fewer / bigger meta.claims rects`,
      ),
    a.length
  );
}
