// tokyo/assets/region-tokyo-BcM3fReU 46 — stats
// Lines 26204-26577 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Ih(e) {
  let t = () => e.quality,
    n = null,
    r = null,
    i = null,
    a = null,
    o = new Map(),
    s = new Set(),
    c = Xm(16384),
    l = null,
    d = !1,
    f = !1;
  e.events.on(`game:ready`, () => {
    ((f = !0),
      (g.maxStep = g.maxBuild = 0),
      (g.maxStepPhase = ``),
      (g.maxBuildSums = []),
      r && (r.stats.maxPaintMs = 0));
  });
  let m = () => t().materials === `lambert` || t().level === `low`,
    h = () => {
      let t = m() ? `L` : `P`,
        s = o.get(t);
      if (!s) {
        let c = null;
        try {
          c = e.streets?.lightMap ?? null;
        } catch {
          c = null;
        }
        ((s = Fn(n, !1, m(), {
          signs: r.texture,
          ads: i,
          ticker: a,
          lightMap: c,
        })),
          (s.name = `bld-facade${m() ? `-l` : ``}:tokyo`),
          o.set(t, s));
      }
      return s;
    },
    g = {
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
    _ = { phase: `` },
    v = null,
    y = () => {
      if (v) return v;
      v = new Map();
      for (let t of [...e.plan.pois, ...Eh(e.plan)]) {
        let e = lh[t.kind];
        if (!e) continue;
        let n = Math.sin(t.facing),
          r = -Math.cos(t.facing);
        v.set(t.id, {
          poiId: t.id,
          kind: t.kind,
          brand: t.brand,
          x: t.x + n * 0.6,
          z: t.z + r * 0.6,
          facing: t.facing,
          width: t.width,
          name: ap(t.brand),
          category: B(e.category),
          height: 3.8,
          hours: e.hours,
        });
      }
      return v;
    },
    b = {
      init() {
        let o = t().level === `low` || t().mobile === !0,
          s = performance.now();
        ((n = np(Math.min(2048, Te(2048, t())), 51741)),
          (n.anisotropy = Math.min(
            8,
            e.renderer.gl.capabilities.getMaxAnisotropy(),
          )),
          (r = new Mm(e.renderer.gl, o)),
          r.init());
        let c = wp(Td(e.time.date, e.params.get(`season`)).dayOfYear);
        ((i = Ep(o ? 256 : 512, c)), (a = Op(o ? 512 : 1024, c)), de(i), de(a));
        for (let e of [n, i, a]) e.userData.owner = `tokyo-tiles-t2`;
        ((l = new vh(r)),
          (l.base = e.plan.sidewalkHeight),
          (Nh = (t, r) => {
            let o = null;
            try {
              o = e.streets?.lightMap ?? null;
            } catch {
              o = null;
            }
            let s = Fn(n, !1, r, {
              signs: t.signs,
              ads: t.ads ?? i,
              ticker: t.ticker ?? a,
              lightMap: o,
            });
            return ((s.name = `bld-facade${r ? `-l` : ``}:tokyo-pack`), s);
          }));
        let u = Fh([...e.plan.pois, ...Eh(e.plan)]);
        l.pois = (e) => u.get(e) ?? [];
        let f = e.plan.dataset.labels;
        (f.areaAt && (l.areaAt = (e, t) => f.areaAt(e, t)),
          (l.detail = Math.max(0.35, t().propDensity)),
          (l.signDensity = o ? 0.75 : 1),
          typeof window < `u` && (window.__tokyoSigns = r),
          qi !== `loaded` &&
            Yi(() => {
              (r?.repaintAll(), (d = !0));
            }),
          console.info(
            `[init] tokyo buildings: atlas ${n.image.width}×${n.image.height}, sign pool ${r.W}×${r.H} (${Math.round(performance.now() - s)}ms)`,
          ));
      },
      *build(e, t, n, r, i, a) {
        let o = x(e, t, n, r, i, a),
          s = [0, 0, 0, 0, 0];
        for (;;) {
          let e = performance.now(),
            t = kh.indexOf(_.phase),
            n = o.next(),
            r = performance.now() - e;
          if (
            ((s[Math.max(0, t)] += r),
            r > g.maxStep && ((g.maxStep = r), (g.maxStepPhase = _.phase)),
            n.done)
          ) {
            let e = s.reduce((e, t) => e + t, 0);
            return (
              e > g.maxBuild &&
                ((g.maxBuild = e),
                (g.maxBuildSums = s.map((e) => +e.toFixed(1)))),
              n.value
            );
          }
          yield;
        }
      },
      dropped(t, n) {
        for (let e of n.roots ?? []) s.delete(e);
        (r?.release(t), e.culture?.shopDoors?.remove(t));
      },
      material() {
        let e = h();
        for (let n of s) ((n.material = e), (n.receiveShadow = t().shadows));
        return e;
      },
      prewarm() {
        if (!n) return [];
        let e = Xm(64).body;
        (e.setTint(16777215).setInfo(0, 1, 0, 0),
          e.wall(0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1));
        let r = e.build(),
          i = new p(r, h());
        return (
          (i.name = `tokyo-t2-proto`),
          (i.castShadow = !0),
          (i.receiveShadow = t().shadows),
          (i.frustumCulled = !1),
          [i]
        );
      },
      update() {
        C();
      },
      storefront(e) {
        let t = y().get(e),
          n = t && oh.get(e);
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
        return [...y().values()];
      },
      stats() {
        return w();
      },
    };
  function* x(n, i, a, o, d, m) {
    _.phase = `start`;
    let v = e.statics.beginGroup();
    e.statics.endGroup();
    let y = { n: 0 },
      b = new O(),
      x = new k();
    for (let e of a) {
      let t = m ? m.base(e) : 0;
      b.expandByPoint(x.set(e.x0 - 2.5, t, e.z0 - 2.5)).expandByPoint(
        x.set(e.x1 + 2.5, t + e.h + 6, e.z1 + 2.5),
      );
    }
    let C = r;
    (C.budget(f ? 24 : 28),
      C.view(e.camera.position.x, e.camera.position.z),
      C.beginTile(n));
    let w = e.culture?.shopDoors ?? null,
      T = w ? [] : null,
      E = yield* Mh(l, c, a, n, e.statics, v, y, d, _, m, T);
    w && T && w.add(n, T);
    let D = c.body.vc,
      A = c.sign.vc;
    if (
      (C.budget(1 / 0),
      yield,
      (_.phase = `paint`),
      C.settle(),
      yield* C.paintQueued(d),
      yield,
      (_.phase = `flush+mesh`),
      r.flush(),
      e.statics.beginGroup(v),
      rd(o, i, {
        circle(t, n, r, i) {
          y.n >= 1500 || (e.statics.addCircle(t, n, r, 0, i, `pillar`), y.n++);
        },
        obb(t, n, r, i, a, o) {
          y.n >= 1500 || (e.statics.addOBB(t, n, r, i, a, 0, o, `wall`), y.n++);
        },
      }),
      e.statics.endGroup(),
      !E)
    )
      return (
        C.abortTile(),
        C.release(n),
        y.n
          ? { bytes: 0, tris: 0, colliders: y.n, statics: v }
          : (e.statics.removeGroup(v), null)
      );
    ((E.boundingBox = b), (E.boundingSphere = b.getBoundingSphere(new u())));
    let j = new p(E, h());
    ((j.name = `tokyo-t2-${n}`),
      (j.castShadow = !0),
      (j.receiveShadow = t().shadows),
      (j.matrixAutoUpdate = !1),
      j.updateMatrixWorld(!0),
      (j.userData.owner = `tokyo-buildings`),
      de(j),
      C.endTile(n, D, S(E.attributes.uv, D, A)),
      s.add(j));
    let M = E.attributes.position.count,
      ee = M * 32 + E.index.array.byteLength;
    return (
      g.tiles++,
      (g.verts = M),
      (g.mb = ee / 1048576),
      g.mb > g.maxMb && (g.maxMb = g.mb),
      y.n > g.maxColliders && (g.maxColliders = y.n),
      {
        roots: [j],
        statics: v,
        bytes: ee,
        tris: E.index.count / 3,
        colliders: y.n,
      }
    );
  }
  function S(t, n, r) {
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
  function C() {
    (d && r && (r.pump(1.5), r.pending() || (d = !1)),
      r && f && r.update(e.camera.position.x, e.camera.position.z, e.work));
    let t = e.env?.hour ?? 20;
    (ur(((t % 24) + 24) % 24), (Nn.uFakeRefl.value = +!e.scene.environment));
    let n = e.scene.fog;
    n && Nn.uSkyCol.value.copy(n.color);
  }
  function w() {
    let t = r;
    return (
      t?.needStats(e.camera.position.x, e.camera.position.z),
      {
        tiles: g.tiles,
        lastMB: +g.mb.toFixed(2),
        maxMB: +g.maxMb.toFixed(2),
        maxColliders: g.maxColliders,
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
        maxStepMs: +g.maxStep.toFixed(2),
        maxStepPhase: kh.indexOf(g.maxStepPhase),
        ...Object.fromEntries(
          g.maxBuildSums.map((e, t) => [`maxBuild_${kh[t]}`, e]),
        ),
      }
    );
  }
  return b;
}
