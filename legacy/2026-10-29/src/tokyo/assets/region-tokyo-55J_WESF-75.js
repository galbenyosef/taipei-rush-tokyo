// tokyo/assets/region-tokyo-55J_WESF 75 — stats
// Lines 34868-35272 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function cce(e) {
  let t = () => e.quality,
    n = null,
    r = null,
    i = null,
    a = null,
    s = Zoe(e, e.params.get(`facades`) !== `0`),
    c = new Map(),
    l = 51741,
    u = new Set(),
    d = Bf(16384),
    f = null,
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
      let o = s.texture(t),
        l = o === n ? `default` : t,
        u = `${g() ? `L` : `P`}:${l}`,
        d = c.get(u);
      if ((d && d.userData.tex !== o && (d.dispose(), (d = void 0)), !d)) {
        let t = null;
        try {
          t = e.streets?.lightMap ?? null;
        } catch {
          t = null;
        }
        ((d = rn(o, !1, g(), {
          signs: r.texture,
          ads: i,
          ticker: a,
          lightMap: t,
        })),
          (d.name = `bld-facade${g() ? `-l` : ``}:tokyo${l === "default" ? `` : `:${l}`}`),
          (d.userData.tex = o),
          c.set(u, d));
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
      for (let t of [...e.plan.pois, ...rp(e.plan)]) {
        let e = Yse[t.kind];
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
          name: Pd(t.brand),
          category: L(e.category),
          height: 3.8,
          hours: e.hours,
        });
      }
      return b;
    },
    S = {
      init() {
        let o = t().level === `low` || t().mobile === !0,
          c = performance.now(),
          u = Math.min(2048, Ie(2048, t()));
        ((n = Yoe(u, l)),
          (n.anisotropy = Math.min(
            8,
            e.renderer.gl.capabilities.getMaxAnisotropy(),
          )),
          s.init(n, u, l),
          typeof window < `u` &&
            (window.__tokyoFacades = { on: s.on, pages: () => s.debug() }),
          (r = new Hse(e.renderer.gl, o)),
          r.init());
        let d = ise(cu(e.time.date, e.params.get(`season`)).dayOfYear);
        ((i = ose(o ? 256 : 512, d)),
          (a = cse(o ? 512 : 1024, d)),
          ke(i),
          ke(a));
        for (let e of [n, i, a]) e.userData.owner = `tokyo-tiles-t2`;
        ((f = new ece(r)),
          (f.base = e.plan.sidewalkHeight),
          (op = (t, r) => {
            let o = null;
            try {
              o = e.streets?.lightMap ?? null;
            } catch {
              o = null;
            }
            let s = rn(n, !1, r, {
              signs: t.signs,
              ads: t.ads ?? i,
              ticker: t.ticker ?? a,
              lightMap: o,
            });
            return ((s.name = `bld-facade${r ? `-l` : ``}:tokyo-pack`), s);
          }));
        let p = sce([...e.plan.pois, ...rp(e.plan)]);
        f.pois = (e) => p.get(e) ?? [];
        let h = e.plan.dataset.labels;
        (h.areaAt && (f.areaAt = (e, t) => h.areaAt(e, t)),
          (f.detail = Math.max(0.35, t().propDensity)),
          (f.signDensity = o ? 0.75 : 1),
          typeof window < `u` && (window.__tokyoSigns = r),
          xr !== `loaded` &&
            Cr(() => {
              (r?.repaintAll(), (m = !0));
            }),
          console.info(
            `[init] tokyo buildings: atlas ${n.image.width}×${n.image.height}, sign pool ${r.W}×${r.H} (${Math.round(performance.now() - c)}ms)`,
          ));
      },
      *build(e, t, n, r, i, a) {
        let o = C(e, t, n, r, i, a),
          s = [0, 0, 0, 0, 0];
        for (;;) {
          let e = performance.now(),
            t = ap.indexOf(y.phase),
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
        for (let e of n.roots ?? []) u.delete(e);
        (s.detach(t), r?.release(t), e.culture?.shopDoors?.remove(t));
      },
      material() {
        let e = _();
        for (let e of u)
          ((e.material = _(e.userData.page ?? `default`)),
            (e.receiveShadow = t().shadows));
        return e;
      },
      prewarm() {
        if (!n) return [];
        let e = Bf(64).body;
        (e.setTint(16777215).setInfo(0, 1, 0, 0),
          e.wall(0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1));
        let r = e.build(),
          i = new p(r, _());
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
          n = t && Kf.get(e);
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
        return E();
      },
    };
  function* C(n, i, a, c, l, m) {
    y.phase = `start`;
    let g = e.statics.beginGroup();
    e.statics.endGroup();
    let b = { n: 0 },
      x = new k(),
      S = new j();
    for (let e of a) {
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
      E = T ? [] : null,
      D = yield* ace(f, d, a, n, e.statics, g, b, l, y, m, E),
      O = D ? s.want(a) : `default`;
    (!h &&
      O !== "default" &&
      ((y.phase = `page`),
      yield* s.ready(O, (i.minX + i.maxX) / 2, (i.minZ + i.maxZ) / 2, l)),
      T && E && T.add(n, E));
    let A = d.body.vc,
      ee = d.sign.vc;
    if (
      (C.budget(1 / 0),
      yield,
      (y.phase = `paint`),
      C.settle(),
      yield* C.paintQueued(l),
      yield,
      (y.phase = `flush+mesh`),
      r.flush(),
      e.statics.beginGroup(g),
      uae(c, i, {
        circle(t, n, r, i) {
          b.n >= 1500 || (e.statics.addCircle(t, n, r, 0, i, `pillar`), b.n++);
        },
        obb(t, n, r, i, a, o) {
          b.n >= 1500 || (e.statics.addOBB(t, n, r, i, a, 0, o, `wall`), b.n++);
        },
      }),
      e.statics.endGroup(),
      !D)
    )
      return (
        C.abortTile(),
        C.release(n),
        b.n
          ? { bytes: 0, tris: 0, colliders: b.n, statics: g }
          : (e.statics.removeGroup(g), null)
      );
    ((D.boundingBox = x), (D.boundingSphere = x.getBoundingSphere(new o())));
    let M = new p(D, _());
    ((M.name = `tokyo-t2-${n}`),
      (M.userData.page = s.attach(
        n,
        M,
        O,
        (i.minX + i.maxX) / 2,
        (i.minZ + i.maxZ) / 2,
      )),
      M.userData.page !== "default" && (M.material = _(M.userData.page)),
      (M.castShadow = !0),
      (M.receiveShadow = t().shadows),
      (M.matrixAutoUpdate = !1),
      M.updateMatrixWorld(!0),
      (M.userData.owner = `tokyo-buildings`),
      ke(M),
      C.endTile(n, A, w(D.attributes.uv, A, ee)),
      u.add(M));
    let te = D.attributes.position.count,
      ne = te * 32 + D.index.array.byteLength;
    return (
      v.tiles++,
      (v.verts = te),
      (v.mb = ne / 1048576),
      v.mb > v.maxMb && (v.maxMb = v.mb),
      b.n > v.maxColliders && (v.maxColliders = b.n),
      {
        roots: [M],
        statics: g,
        bytes: ne,
        tris: D.index.count / 3,
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
      s.update(e.camera.position.x, e.camera.position.z, h, (e, t) => {
        ((e.material = _(t)), (e.userData.page = t));
      }));
    let t = e.env?.hour ?? 20;
    (ite(((t % 24) + 24) % 24), (bn.uFakeRefl.value = +!e.scene.environment));
    let n = e.scene.fog;
    n && bn.uSkyCol.value.copy(n.color);
  }
  function E() {
    let t = r;
    return (
      t?.needStats(e.camera.position.x, e.camera.position.z),
      {
        ...s.stats(),
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
        maxStepPhase: ap.indexOf(v.maxStepPhase),
        ...Object.fromEntries(
          v.maxBuildSums.map((e, t) => [`maxBuild_${ap[t]}`, e]),
        ),
      }
    );
  }
  return S;
}
