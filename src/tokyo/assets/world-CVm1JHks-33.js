// tokyo/assets/world-CVm1JHks 33 — math
// Lines 10643-10948 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function el(e) {
  let t = new z();
  (t.setAttribute(
    `position`,
    new B(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
  ),
    t.setAttribute(
      `normal`,
      new B(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    t.setAttribute(`uv`, new B(new Float32Array(6), 2)),
    t.setAttribute(`color`, new B(new Float32Array(12).fill(1), 4)));
  let n = new z();
  (n.setAttribute(
    `position`,
    new B(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
  ),
    n.setAttribute(
      `normal`,
      new B(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    n.setAttribute(`uv`, new B(new Float32Array(6), 2)),
    n.setAttribute(`aCol`, new B(new Uint8Array(12).fill(255), 4, !0)),
    n.setAttribute(`aMat`, new B(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aLight`, new B(new Uint8Array(12), 4, !0)),
    n.setAttribute(`aInfo`, new B(new Uint8Array(12), 4, !1)),
    n.setIndex(new B(new Uint16Array([0, 1, 2]), 1)));
  let r = null,
    i = null,
    a = null,
    s = null,
    c = (e, t, n, r = !1) => {
      let i = new o(e, t);
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
          r || ((a ??= tl()), (r = [c(a, e.city, `sites-prewarm-city`, !0)]), r)
        );
      let o = e.lmFallback ? null : e.lm;
      if (r && i === o) return r;
      i = o;
      let l = [
        c(t, e.ext, `sites-prewarm-ext`),
        c(t, e.room, `sites-prewarm-room`),
      ];
      return (
        e.glass && l.push(c(t, e.glass, `sites-prewarm-glass`)),
        o &&
          (s?.dispose(),
          (s = Hc(n.clone(), o, `sites-prewarm-lm`)),
          (s.frustumCulled = !1),
          (s.castShadow = !0),
          (s.receiveShadow = !0),
          l.push(s)),
        (r = l),
        l
      );
    },
    dispose() {
      ((r = null),
        s?.dispose(),
        (s = null),
        t.dispose(),
        n.dispose(),
        a?.dispose());
    },
  };
}
function tl() {
  let e = new z();
  return (
    e.setAttribute(
      `position`,
      new B(new Float32Array([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0]), 3),
    ),
    e.setAttribute(
      `normal`,
      new B(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3),
    ),
    e.setAttribute(`uv`, new B(new Float32Array(6), 2)),
    e.setAttribute(`color`, new B(new Float32Array(9).fill(1), 3)),
    e.setAttribute(`aCity`, new B(new Uint8Array(12), 4, !0)),
    e.setIndex(new B(new Uint16Array([0, 1, 2]), 1)),
    e
  );
}
var nl = {
    id: `_sites`,
    name: { zh: `地標與名店`, en: `Landmarks & famous shops` },
    claims: [],
  },
  rl = 0.05,
  il = 64,
  al = 4096,
  ol = 8192,
  sl = bt.maxClaimRects,
  cl = { raw: 0, merged: 0, sites: 0, ms: 0 };
function ll() {
  return cl;
}
function ul() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function dl() {
  ((nl.claims.length = 0),
    (cl = { raw: 0, merged: 0, sites: 0, ms: 0 }),
    _l++,
    (hl = null),
    (gl = null),
    (yl.queries = 0),
    (yl.rejected = 0),
    (yl.buildMs = 0),
    (yl.rects = 0),
    (vl = !1));
}
function fl(e) {
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
              r.minX <= n.minX + rl &&
              r.maxX >= n.maxX - rl &&
              r.minZ <= n.minZ + rl &&
              r.maxZ >= n.maxZ - rl
            ) {
              ((e[i] = null), (t = !0));
              continue;
            }
            let a =
                Math.abs(r.minX - n.minX) <= rl &&
                Math.abs(r.maxX - n.maxX) <= rl,
              o =
                Math.abs(r.minZ - n.minZ) <= rl &&
                Math.abs(r.maxZ - n.maxZ) <= rl,
              s = n.minZ <= r.maxZ + rl && r.minZ <= n.maxZ + rl,
              c = n.minX <= r.maxX + rl && r.minX <= n.maxX + rl;
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
  return pl(n);
}
function pl(e) {
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
function ml(e) {
  let t = ul(),
    n = [],
    r = 0;
  for (let t of e) {
    if (!t.ok) continue;
    let e = !1;
    for (let r of t.claims) (n.push(r), (e = !0));
    e && r++;
  }
  let i = fl(n),
    a = nl.claims;
  a.length = 0;
  for (let e of i) a.push(e);
  return (
    (cl = {
      raw: n.length,
      merged: a.length,
      sites: r,
      ms: Math.round((ul() - t) * 100) / 100,
    }),
    _l++,
    (hl = null),
    (gl = null),
    a.length > sl &&
      console.warn(
        `[test] sites claims: ${a.length} merged rects > ${sl} — every ctx.districts.claimed() call (thousands during buildings.init) walks them all; author fewer / bigger meta.claims rects`,
      ),
    a.length
  );
}
