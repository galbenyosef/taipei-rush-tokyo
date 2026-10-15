// tokyo/assets/region-tokyo-55J_WESF 393 — push
// Lines 142380-142708 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function YPe(e, t) {
  let [n, r] = Wv.a,
    [i, a] = Wv.b,
    o = i - n,
    s = a - r,
    c = Math.hypot(o, s),
    l = Math.atan2(o, s),
    u = o / c,
    d = s / c,
    f = (e) => [n + o * e, r + s * e],
    p = [0.82, 0.82, 0.8],
    [m, h] = f(0.5);
  e.push(m, 48, h, 30, 9, c, l, 0, [0.7, 0.7, 0.69], 0.5, 0, 0);
  for (let n of [0.2, 0.8]) {
    let [r, i] = f(n);
    for (let n of [-1, 1])
      e.push(
        r + d * n * 13,
        t.height(r, i) - 2,
        i - u * n * 13,
        7,
        126,
        9,
        l,
        0,
        p,
        0.6,
        0,
        0,
      );
    e.push(r, 110, i, 30, 6, 8, l, 0, p, 0.6, 0, 0);
  }
  for (let t of [-1, 1]) {
    let n = d * t * 13,
      r = -u * t * 13,
      i = [],
      [a, o] = f(0.02),
      [s, c] = f(0.2),
      [m, h] = f(0.98),
      [g, _] = f(0.8);
    i.push([a, 57, o], [s, 126, c]);
    for (let e = 1; e < 6; e++) {
      let t = 0.2 + (0.6 * e) / 6,
        [n, r] = f(t),
        a = (t - 0.5) / 0.3;
      i.push([n, 60 + 66 * a * a, r]);
    }
    i.push([g, 126, _], [m, 57, h]);
    for (let t = 0; t + 1 < i.length; t++) {
      let [a, o, s] = i[t],
        [c, u, d] = i[t + 1],
        f = Math.hypot(c - a, u - o, d - s),
        m = Math.hypot(c - a, d - s),
        h = -Math.atan2(u - o, m);
      e.push(
        (a + c) / 2 + n,
        (o + u) / 2,
        (s + d) / 2 + r,
        1.6,
        1.6,
        f,
        l,
        h,
        p,
        0.9,
        0,
        0,
      );
    }
  }
}
function XPe() {
  let e = [],
    t = [],
    n = [],
    r = [],
    i = [],
    a = (a, o, s, c) => {
      let l = e.length / 3;
      for (let i of c)
        (e.push(i[0], i[1], i[2]),
          t.push(a, o, s),
          n.push(xn[0], xn[1]),
          r.push(1, 1, 1));
      i.push(l, l + 1, l + 2, l, l + 2, l + 3);
    },
    o = 0.5;
  (a(1, 0, 0, [
    [o, 0, o],
    [o, 0, -0.5],
    [o, 1, -0.5],
    [o, 1, o],
  ]),
    a(-1, 0, 0, [
      [-0.5, 0, -0.5],
      [-0.5, 0, o],
      [-0.5, 1, o],
      [-0.5, 1, -0.5],
    ]),
    a(0, 1, 0, [
      [-0.5, 1, o],
      [o, 1, o],
      [o, 1, -0.5],
      [-0.5, 1, -0.5],
    ]),
    a(0, 0, 1, [
      [-0.5, 0, o],
      [o, 0, o],
      [o, 1, o],
      [-0.5, 1, o],
    ]),
    a(0, 0, -1, [
      [o, 0, -0.5],
      [-0.5, 0, -0.5],
      [-0.5, 1, -0.5],
      [o, 1, -0.5],
    ]));
  let s = new y();
  return (
    s.setAttribute(`position`, new m(e, 3)),
    s.setAttribute(`normal`, new m(t, 3)),
    s.setAttribute(`uv`, new m(n, 2)),
    s.setAttribute(`color`, new m(r, 3)),
    s.setIndex(i),
    s
  );
}
function ZPe(e) {
  e.onUploadCallback = function () {
    this.array = new Float32Array();
  };
}
function QPe(e) {
  let t = e.propsMaterial(`farcity`),
    n = t.onBeforeCompile;
  return (
    (t.onBeforeCompile = (e, r) => {
      (n.call(t, e, r),
        (e.vertexShader = e.vertexShader.replace(
          `vPNrm = normalize(mat3(modelMatrix) * objectNormal);`,
          `vPNrm = normalize(mat3(modelMatrix) * objectNormal);
        #ifdef USE_INSTANCING
        vPWorld = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
        vPNrm = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);
        #endif`,
        )));
    }),
    (t.customProgramCacheKey = () => `env-props-tk6-farcity`),
    t
  );
}
var $Pe = class {
  stats = { instances: 0, towers: 0, chunks: 0, ms: 0, bytes: 0 };
  it;
  done = !1;
  placeholders = [];
  constructor(e, t, n, r) {
    let a = XPe(),
      o = QPe(e);
    for (let t of [e.scene, e.farScene]) {
      let e = new O(a, o, 1);
      (e.setMatrixAt(0, new M().makeScale(0, 0, 0)),
        (e.instanceColor = new i(new Float32Array(3), 3)),
        (e.geometry = a.clone()),
        e.geometry.setAttribute(`aEmit`, new i(new Float32Array(3), 3)),
        (e.frustumCulled = !1),
        (e.name = `tokyo-farcity-prewarm`),
        (e.raycast = () => {}),
        t.add(e),
        this.placeholders.push(e));
    }
    this.it = eFe(e, t, n, r + VPe, this.stats, a, o);
  }
  step(e) {
    if (this.done) return !0;
    let t = performance.now();
    do
      if (this.it.next().done) {
        this.done = !0;
        for (let e of this.placeholders)
          (e.removeFromParent(), e.geometry.dispose());
        this.placeholders.length = 0;
        break;
      }
    while (performance.now() - t < e);
    return ((this.stats.ms += performance.now() - t), this.done);
  }
};
function* eFe(e, t, n, r, a, o, s) {
  let c = { recs: new KPe(), towers: 0 };
  yield* qPe(e.field, t, n, c);
  let { recs: l, towers: u } = c,
    d = new Map(),
    p = new Map(),
    m = l.a,
    h = (e, t, n) => {
      let r = `${Math.floor(m[n * c0] / t)},${Math.floor(m[n * c0 + 2] / t)}`,
        i = e.get(r);
      (i || e.set(r, (i = [])), i.push(n));
    };
  for (let e = 0; e < l.n; e++)
    (h(d, BPe, e), b1(m[e * c0], m[e * c0 + 2]) < r && h(p, HPe, e));
  let g = new M(),
    _ = new A(),
    v = new f(0, 0, 0, `YXZ`),
    b = new j(),
    x = new j(),
    S = 0,
    C = (e, t, n) => {
      let r = e.length,
        a = new y();
      for (let e of [`position`, `normal`, `uv`, `color`])
        a.setAttribute(e, o.getAttribute(e));
      a.setIndex(o.getIndex());
      let c = new i(new Float32Array(r * 3), 3),
        l = new O(a, s, r),
        u = new i(new Float32Array(r * 3), 3);
      for (let t = 0; t < r; t++) {
        let n = e[t] * c0;
        (b.set(m[n], m[n + 1], m[n + 2]),
          x.set(m[n + 3], m[n + 4], m[n + 5]),
          m[n + 7] !== 0 && (b.y -= m[n + 4] / 2),
          v.set(m[n + 7], m[n + 6], 0),
          _.setFromEuler(v),
          g.compose(b, _, x),
          l.setMatrixAt(t, g),
          u.setXYZ(t, m[n + 8], m[n + 9], m[n + 10]),
          c.setXYZ(t, m[n + 11], m[n + 12], m[n + 13]));
      }
      (a.setAttribute(`aEmit`, c),
        (l.instanceColor = u),
        l.computeBoundingSphere(),
        (l.name = n),
        (l.matrixAutoUpdate = !1),
        (l.castShadow = l.receiveShadow = !1),
        (l.raycast = () => {}),
        (l.userData.noCollide = !0),
        t.add(l));
      for (let e of [l.instanceMatrix, u, c]) ZPe(e);
      S += r * 22 * 4;
    };
  yield;
  for (let [t, n] of d) (C(n, e.farScene, `tokyo-farcity-far-${t}`), yield);
  for (let [t, n] of p) (C(n, e.scene, `tokyo-farcity-main-${t}`), yield);
  ((a.instances = l.n),
    (a.towers = u),
    (a.chunks = d.size + p.size),
    (a.bytes = S));
}
function tFe(e) {
  let t = lu(e.time, e.params),
    n = new ZNe(e.region.env, e.region.utcOffsetHours, () => e.time.date),
    r = ePe(),
    i = { y: 2, fogColor: null, fogNear: 170, night: 0 },
    a = nPe(),
    o = null,
    s = null,
    c = null,
    l = { farTris: 0, farMs: 0, massing: 0, farCity: null, parts: {} };
  return {
    stats: l,
    season: t,
    atmos: n,
    sky: r,
    water: a,
    terrain: { height: Fde, forest: $v, water: Zv, waterExtent: Iv() ? dn : 0 },
    cityLod: zPe(e.plan, () => e.districts ?? null),
    props(t, n) {
      let r = performance.now(),
        i = t.triangleCount,
        a = i,
        o = (e) => {
          ((l.parts[e] = t.triangleCount - a), (a = t.triangleCount));
        };
      (wPe(t, n),
        cPe(t, n),
        o(`towers`),
        lPe(t, n),
        o(`palace`),
        pPe(t, n),
        mPe(t, n),
        o(`asakusa+ryogoku`),
        hPe(t, n),
        o(`towerGroups`),
        (l.massing = NPe(t, n, e.plan.dataset.seed)),
        o(`massing`),
        rPe(t),
        o(`plateau`),
        (l.farTris = t.triangleCount - i),
        (l.farMs = performance.now() - r));
    },
    statics() {
      (oPe(e.statics), Bce(e.statics, e.plan));
    },
    ready(r) {
      ((o = r),
        (s = new IPe(r)),
        Iv() &&
          ((c = new $Pe(
            r,
            e.plan.dataset.seed,
            !!e.quality.mobile,
            e.quality.drawDistance,
          )),
          (l.farCity = c.stats)),
        typeof window < `u` &&
          (window.__tokyoEnv = {
            stats: l,
            season: t,
            sun: n,
            get lights() {
              return s?.design;
            },
          }));
    },
    update() {
      if (!o) return;
      c && c.step(e.quality.mobile ? 3 : 6) && (c = null);
      let n = t();
      ((i.y = e.camera.position.y),
        (i.fogColor = e.env.fogColor),
        (i.fogNear = e.scene.fog?.near ?? 170),
        (i.night = o.atmos.night),
        r.update(o.atmos, o.weather, e.env.hour, n.winter, i),
        a.update(n),
        s?.update(o.atmos.night, e.env.hour, e.time.date));
    },
  };
}
