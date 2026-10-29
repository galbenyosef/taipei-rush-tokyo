// tokyo/assets/region-tokyo-A7LxHjud 75 — stats
// Lines 34941-35345 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function bce(e) {
  let t = () => e.quality,
    n = null,
    r = null,
    i = null,
    o = null,
    c = ose(e, e.params.get(`facades`) !== `0`),
    l = new Map(),
    u = 51741,
    d = new Set(),
    f = Uf(16384),
    p = null,
    m = !1,
    h = !1;
  e.events.on(`game:ready`, () => {
    ((h = !0),
      (v.maxStep = v.maxBuild = 0),
      (v.maxStepPhase = ``),
      (v.maxBuildSums = []),
      r && (r.stats.maxPaintMs = 0));
  });
  let g = () => t().materials === `lambert` || t().level === `low`,
    _ = (t = `default`) => {
      let a = c.texture(t),
        s = a === n ? `default` : t,
        u = `${g() ? `L` : `P`}:${s}`,
        d = l.get(u);
      if ((d && d.userData.tex !== a && (d.dispose(), (d = void 0)), !d)) {
        let t = null;
        try {
          t = e.streets?.lightMap ?? null;
        } catch {
          t = null;
        }
        ((d = ln(a, !1, g(), {
          signs: r.texture,
          ads: i,
          ticker: o,
          lightMap: t,
        })),
          (d.name = `bld-facade${g() ? `-l` : ``}:tokyo${s === "default" ? `` : `:${s}`}`),
          (d.userData.tex = a),
          l.set(u, d));
      }
      return d;
    },
    v = {
      tiles: 0,
      verts: 0,
      mb: 0,
      maxMb: 0,
      maxColliders: 0,
      maxStep: 0,
      maxStepPhase: ``,
      maxBuild: 0,
      maxBuildSums: [],
    },
    y = { phase: `` },
    b = null,
    x = () => {
      if (b) return b;
      b = new Map();
      for (let t of [...e.plan.pois, ...op(e.plan)]) {
        let e = sce[t.kind];
        if (!e) continue;
        let n = Math.sin(t.facing),
          r = -Math.cos(t.facing);
        b.set(t.id, {
          poiId: t.id,
          kind: t.kind,
          brand: t.brand,
          x: t.x + n * 0.6,
          z: t.z + r * 0.6,
          facing: t.facing,
          width: t.width,
          name: Nd(t.brand),
          category: L(e.category),
          height: 3.8,
          hours: e.hours,
        });
      }
      return b;
    },
    S = {
      init() {
        let a = t().level === `low` || t().mobile === !0,
          s = performance.now(),
          l = Math.min(2048, pe(2048, t()));
        ((n = ise(l, u)),
          (n.anisotropy = Math.min(
            8,
            e.renderer.gl.capabilities.getMaxAnisotropy(),
          )),
          c.init(n, l, u),
          typeof window < `u` &&
            (window.__tokyoFacades = { on: c.on, pages: () => c.debug() }),
          (r = new $se(e.renderer.gl, a)),
          r.init());
        let d = pse(cu(e.time.date, e.params.get(`season`)).dayOfYear);
        ((i = hse(a ? 256 : 512, d)),
          (o = _se(a ? 512 : 1024, d)),
          Te(i),
          Te(o));
        for (let e of [n, i, o]) e.userData.owner = `tokyo-tiles-t2`;
        ((p = new fce(r)),
          (p.base = e.plan.sidewalkHeight),
          (lp = (t, r) => {
            let a = null;
            try {
              a = e.streets?.lightMap ?? null;
            } catch {
              a = null;
            }
            let s = ln(n, !1, r, {
              signs: t.signs,
              ads: t.ads ?? i,
              ticker: t.ticker ?? o,
              lightMap: a,
            });
            return ((s.name = `bld-facade${r ? `-l` : ``}:tokyo-pack`), s);
          }));
        let f = yce([...e.plan.pois, ...op(e.plan)]);
        p.pois = (e) => f.get(e) ?? [];
        let h = e.plan.dataset.labels;
        (h.areaAt && (p.areaAt = (e, t) => h.areaAt(e, t)),
          (p.detail = Math.max(0.35, t().propDensity)),
          (p.signDensity = a ? 0.75 : 1),
          typeof window < `u` && (window.__tokyoSigns = r),
          xr !== `loaded` &&
            Cr(() => {
              (r?.repaintAll(), (m = !0));
            }),
          console.info(
            `[init] tokyo buildings: atlas ${n.image.width}×${n.image.height}, sign pool ${r.W}×${r.H} (${Math.round(performance.now() - s)}ms)`,
          ));
      },
      *build(e, t, n, r, i, a) {
        let o = C(e, t, n, r, i, a),
          s = [0, 0, 0, 0, 0];
        for (;;) {
          let e = performance.now(),
            t = cp.indexOf(y.phase),
            n = o.next(),
            r = performance.now() - e;
          if (
            ((s[Math.max(0, t)] += r),
            r > v.maxStep && ((v.maxStep = r), (v.maxStepPhase = y.phase)),
            n.done)
          ) {
            let e = s.reduce((e, t) => e + t, 0);
            return (
              e > v.maxBuild &&
                ((v.maxBuild = e),
                (v.maxBuildSums = s.map((e) => +e.toFixed(1)))),
              n.value
            );
          }
          yield;
        }
      },
      dropped(t, n) {
        for (let e of n.roots ?? []) d.delete(e);
        (c.detach(t), r?.release(t), e.culture?.shopDoors?.remove(t));
      },
      material() {
        let e = _();
        for (let e of d)
          ((e.material = _(e.userData.page ?? `default`)),
            (e.receiveShadow = t().shadows));
        return e;
      },
      prewarm() {
        if (!n) return [];
        let e = Uf(64).body;
        (e.setTint(16777215).setInfo(0, 1, 0, 0),
          e.wall(0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1));
        let r = e.build(),
          i = new a(r, _());
        return (
          (i.name = `tokyo-t2-proto`),
          (i.castShadow = !0),
          (i.receiveShadow = t().shadows),
          (i.frustumCulled = !1),
          [i]
        );
      },
      update() {
        T();
      },
      storefront(e) {
        let t = x().get(e),
          n = t && ice.get(e);
        if (!t || !n) return t;
        let r = Math.sin(n.facing),
          i = -Math.cos(n.facing);
        return {
          ...t,
          x: n.x + r * 0.6,
          z: n.z + i * 0.6,
          facing: n.facing,
          width: n.width,
          height: n.gH,
          signY: n.signY,
          painted: !0,
        };
      },
      storefronts() {
        return [...x().values()];
      },
      stats() {
        return D();
      },
    };
  function* C(n, i, o, l, u, m) {
    y.phase = `start`;
    let g = e.statics.beginGroup();
    e.statics.endGroup();
    let b = { n: 0 },
      x = new O(),
      S = new E();
    for (let e of o) {
      let t = m ? m.base(e) : 0;
      x.expandByPoint(S.set(e.x0 - 2.5, t, e.z0 - 2.5)).expandByPoint(
        S.set(e.x1 + 2.5, t + e.h + 6, e.z1 + 2.5),
      );
    }
    let C = r;
    (C.budget(h ? 24 : 28),
      C.view(e.camera.position.x, e.camera.position.z),
      C.beginTile(n));
    let T = e.culture?.shopDoors ?? null,
      D = T ? [] : null,
      k = yield* _ce(p, f, o, n, e.statics, g, b, u, y, m, D),
      A = k ? c.want(o) : `default`;
    (!h &&
      A !== "default" &&
      ((y.phase = `page`),
      yield* c.ready(A, (i.minX + i.maxX) / 2, (i.minZ + i.maxZ) / 2, u)),
      T && D && T.add(n, D));
    let j = f.body.vc,
      M = f.sign.vc;
    if (
      (C.budget(1 / 0),
      yield,
      (y.phase = `paint`),
      C.settle(),
      yield* C.paintQueued(u),
      yield,
      (y.phase = `flush+mesh`),
      r.flush(),
      e.statics.beginGroup(g),
      vae(l, i, {
        circle(t, n, r, i) {
          b.n >= 1500 || (e.statics.addCircle(t, n, r, 0, i, `pillar`), b.n++);
        },
        obb(t, n, r, i, a, o) {
          b.n >= 1500 || (e.statics.addOBB(t, n, r, i, a, 0, o, `wall`), b.n++);
        },
      }),
      e.statics.endGroup(),
      !k)
    )
      return (
        C.abortTile(),
        C.release(n),
        b.n
          ? { bytes: 0, tris: 0, colliders: b.n, statics: g }
          : (e.statics.removeGroup(g), null)
      );
    ((k.boundingBox = x), (k.boundingSphere = x.getBoundingSphere(new s())));
    let ee = new a(k, _());
    ((ee.name = `tokyo-t2-${n}`),
      (ee.userData.page = c.attach(
        n,
        ee,
        A,
        (i.minX + i.maxX) / 2,
        (i.minZ + i.maxZ) / 2,
      )),
      ee.userData.page !== "default" && (ee.material = _(ee.userData.page)),
      (ee.castShadow = !0),
      (ee.receiveShadow = t().shadows),
      (ee.matrixAutoUpdate = !1),
      ee.updateMatrixWorld(!0),
      (ee.userData.owner = `tokyo-buildings`),
      Te(ee),
      C.endTile(n, j, w(k.attributes.uv, j, M)),
      d.add(ee));
    let te = k.attributes.position.count,
      ne = te * 32 + k.index.array.byteLength;
    return (
      v.tiles++,
      (v.verts = te),
      (v.mb = ne / 1048576),
      v.mb > v.maxMb && (v.maxMb = v.mb),
      b.n > v.maxColliders && (v.maxColliders = b.n),
      {
        roots: [ee],
        statics: g,
        bytes: ne,
        tris: k.index.count / 3,
        colliders: b.n,
      }
    );
  }
  function w(t, n, r) {
    let i = e.renderer.gl.getContext(),
      a = null,
      o = t.onUploadCallback;
    t.onUploadCallback = function () {
      ((a = i.getParameter(i.ARRAY_BUFFER_BINDING)), o.call(this));
    };
    let s = t.array.slice(n * 2, (n + r) * 2),
      c = 1 / 0,
      l = -1;
    return {
      set(e, r, i, o, u, d) {
        let f = (e - n) * 2;
        if (f < 0 || f + 8 > s.length) return !1;
        let p = t.array,
          m = p.length >= (e + 4) * 2;
        if (!m && !a) return !1;
        if (
          (d
            ? ((s[f] = o),
              (s[f + 1] = u),
              (s[f + 2] = o),
              (s[f + 3] = i),
              (s[f + 4] = r),
              (s[f + 5] = i),
              (s[f + 6] = r),
              (s[f + 7] = u))
            : ((s[f] = r),
              (s[f + 1] = u),
              (s[f + 2] = o),
              (s[f + 3] = u),
              (s[f + 4] = o),
              (s[f + 5] = i),
              (s[f + 6] = r),
              (s[f + 7] = i)),
          m)
        )
          for (let t = 0; t < 8; t++) p[e * 2 + t] = s[f + t];
        return (f < c && (c = f), f + 8 > l && (l = f + 8), !0);
      },
      flush() {
        l < 0 ||
          (a &&
            (i.bindBuffer(i.ARRAY_BUFFER, a),
            i.bufferSubData(i.ARRAY_BUFFER, (n * 2 + c) * 4, s, c, l - c)),
          (c = 1 / 0),
          (l = -1));
      },
    };
  }
  function T() {
    (m && r && (r.pump(1.5), r.pending() || (m = !1)),
      r && h && r.update(e.camera.position.x, e.camera.position.z, e.work),
      c.update(e.camera.position.x, e.camera.position.z, h, (e, t) => {
        ((e.material = _(t)), (e.userData.page = t));
      }));
    let t = e.env?.hour ?? 20;
    (Qee(((t % 24) + 24) % 24), (sn.uFakeRefl.value = +!e.scene.environment));
    let n = e.scene.fog;
    n && sn.uSkyCol.value.copy(n.color);
  }
  function D() {
    let t = r;
    return (
      t?.needStats(e.camera.position.x, e.camera.position.z),
      {
        ...c.stats(),
        tiles: v.tiles,
        lastMB: +v.mb.toFixed(2),
        maxMB: +v.maxMb.toFixed(2),
        maxColliders: v.maxColliders,
        signsPainted: t?.stats.painted ?? 0,
        signsReused: t?.stats.reused ?? 0,
        signsStarved: t?.stats.starved ?? 0,
        signsAlt: t?.stats.alt ?? 0,
        signsEvicted: t?.stats.evicted ?? 0,
        signsLod: t?.stats.lod ?? 0,
        signsPumped: t?.stats.pumped ?? 0,
        signsPatched: t?.stats.patched ?? 0,
        signsUpgraded: t?.stats.upgraded ?? 0,
        signsUnpatched: t?.stats.unpatched ?? 0,
        signsFaces: t?.stats.faces ?? 0,
        signsNeedFaces: t?.stats.needFaces ?? 0,
        signsNeedFallback: t?.stats.needFallback ?? 0,
        signPumpMs: +(t?.stats.pumpMs ?? 0).toFixed(1),
        signMaxPumpMs: +(t?.stats.maxPumpMs ?? 0).toFixed(2),
        signScanMs: +(t?.stats.scanMs ?? 0).toFixed(1),
        signsResident: t?.residentCount() ?? 0,
        signPaintMs: +(t?.stats.paintMs ?? 0).toFixed(1),
        signMaxPaintMs: +(t?.stats.maxPaintMs ?? 0).toFixed(2),
        maxStepMs: +v.maxStep.toFixed(2),
        maxStepPhase: cp.indexOf(v.maxStepPhase),
        ...Object.fromEntries(
          v.maxBuildSums.map((e, t) => [`maxBuild_${cp[t]}`, e]),
        ),
      }
    );
  }
  return S;
}
