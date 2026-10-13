// tokyo__assets__region-tokyo-BcM3fReU 215 — math
// Lines 88778-89195 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function qJ(e) {
  let t = e.plan,
    n = e.params,
    r = n.get(`tiles`) === `0`,
    i = ie(),
    a = Number(n.get(`t1r`) ?? 0) || 0,
    o = Number(n.get(`t2r`) ?? 0) || 0,
    s = () => {
      if (a > 0) return a;
      let t = e.quality.drawDistance + 180;
      return e.quality.mobile ? Math.max(i >= 2 ? 450 : 600, t) : t;
    },
    c = () => HJ[e.quality.level] ?? 260,
    l = () => (o > 0 ? o : c() * 1.2 + 110),
    u = () => {
      let r = n.get(`spawn`);
      if (r) {
        let [e, t] = r.split(`,`).map(Number);
        if (Number.isFinite(e) && Number.isFinite(t)) return { x: e, z: t };
      }
      let i = e.state.data.pos;
      return i && Number.isFinite(i.x) && Number.isFinite(i.z)
        ? { x: i.x, z: i.z }
        : t.spawns.start;
    },
    d = r ? [] : qc(t),
    f = Zu(t),
    p = () => e.quality.materials,
    m = () =>
      ge(`opaque`, { policy: p(), batched: !0, name: `tokyo-tiles-t1` }),
    h = null,
    g = () =>
      ge(`opaque`, {
        policy: p(),
        batched: !0,
        map: (h ??= VW(e.quality)),
        name: `tokyo-t1-road`,
      }),
    _ = Ih(e),
    v = new ce(8192, 12288),
    y = new ce(4096, 6144),
    b = new ce(4096, 6144),
    x = new ce(4096, 6144),
    S = 0,
    C = () => {
      let e = performance.now();
      return e - S < WJ ? !1 : ((S = e), !0);
    },
    w = (e, n) => t.terrainLift(e, n),
    T = {
      plan: t,
      spans: f,
      due: C,
      terrain: {
        cuts: ww,
        lift: (e, t) => Ew(e, t, w),
        at: w,
        key: (e, t, n, r) => Ow(w, e, t, n, r),
      },
      quay: Oq,
    },
    E = (e) => Aw(w, e.x0, e.z0, e.x1, e.z1),
    D = [],
    A = {
      dy: 0,
      addBox(t, n, r, i, a = 0, o = 1e3, s) {
        return e.statics.addBox(t, n, r, i, a + A.dy, o + A.dy, s);
      },
      addOBB(t, n, r, i, a, o = 0, s = 1e3, c) {
        return e.statics.addOBB(t, n, r, i, a, o + A.dy, s + A.dy, c);
      },
      addCircle(t, n, r, i = 0, a = 1e3, o) {
        return e.statics.addCircle(t, n, r, i + A.dy, a + A.dy, o);
      },
      addFloorRect(t, n, r, i, a, o) {
        return e.statics.addFloorRect(t, n, r, i, a + A.dy, o);
      },
    },
    j = { base: E, statics: (t) => (t ? ((A.dy = t), A) : e.statics) },
    M = new Map(),
    ee = (n) => {
      let r = M.get(n);
      return (r || M.set(n, (r = tx(t, Kc(n), e.districts ?? null))), r);
    },
    te = null,
    ne = null,
    N = null,
    re = new Map(),
    ae = new O(),
    oe = (e, t) => {
      t.makeEmpty();
      let n = e.pos,
        r = 1 / 0,
        i = 1 / 0,
        a = 1 / 0,
        o = -1 / 0,
        s = -1 / 0,
        c = -1 / 0;
      for (let t = 0; t < e.n * 3; t += 3) {
        let e = n[t],
          l = n[t + 1],
          u = n[t + 2];
        (e < r && (r = e),
          e > o && (o = e),
          l < i && (i = l),
          l > s && (s = l),
          u < a && (a = u),
          u > c && (c = u));
      }
      return (e.n && (t.min.set(r, i, a), t.max.set(o, s, c)), t);
    },
    se = (e) => ue.isBuilt(`t2`, e),
    P = {
      name: `t1`,
      radius: s,
      dropMargin: 300,
      dropAfterS: 20,
      keys: d,
      box: (e) => Kc(e),
      *build(t) {
        S = performance.now();
        let n = Kc(t),
          r = ee(t);
        (v.reset(), b.reset(), x.reset(), yield* yq(v, T, n, b, x), y.reset());
        for (let e of r) {
          let t = y.n;
          ((D[0] = e), wq(y, D));
          let n = E(e);
          n && kw(y.pos, t, y.n, n);
        }
        return !v.n && !y.n && !b.n && !x.n
          ? null
          : {
              bytes:
                (v.n + y.n + b.n) * 32 +
                x.n * 40 +
                (v.ni + y.ni + b.ni + x.ni) * 4,
              tris: (v.ni + y.ni + b.ni + x.ni) / 3,
              colliders: 0,
              upload: () => {
                let r = te && v.n ? te.write(v, oe(v, ae)) : -1,
                  i = te && b.n ? te.write(b, oe(b, ae)) : -1,
                  a = ne && y.n ? ne.write(y, oe(y, ae)) : -1,
                  o = N && x.n ? N.write(x, oe(x, ae)) : -1,
                  s = (n.minX + n.maxX) / 2,
                  c = (n.minZ + n.maxZ) / 2,
                  l = me(s, c, !1);
                re.set(t, { g: r, l: a, m: i, r: o, mOn: l, cx: s, cz: c });
                let u = [];
                ((r >= 0 || i >= 0) && te && u.push(te.mesh),
                  a >= 0 && ne && u.push(ne.mesh),
                  o >= 0 && N && u.push(N.mesh),
                  u.length && e.renderer.uploadDraw(u),
                  te?.setVisible(r, !0),
                  te?.setVisible(i, l),
                  o >= 0 && N?.setVisible(o, !0),
                  ne?.setVisible(a, !se(t)));
              },
            };
      },
      dropped(e) {
        let t = re.get(e);
        (t &&
          (te?.free(t.g),
          te?.free(t.m),
          ne?.free(t.l),
          t.r >= 0 && N?.free(t.r),
          re.delete(e)),
          se(e) || M.delete(e));
      },
    },
    le = {
      name: `t2`,
      radius: l,
      dropMargin: 150,
      dropAfterS: 10,
      lookaheadMaxSpeed: UJ,
      keys: d,
      box: (e) => Kc(e),
      *build(e) {
        return (
          (S = performance.now()),
          yield* _.build(e, Kc(e), ee(e), f, C, j)
        );
      },
      shown(e) {
        let t = re.get(e);
        t && ne?.setVisible(t.l, !1);
      },
      dropped(e, t) {
        _.dropped(e, t);
        let n = re.get(e);
        (n && ne?.setVisible(n.l, !0), re.has(e) || M.delete(e));
      },
    },
    ue = new di(e, {
      spawn: u,
      owner: `tokyo-tiles`,
      popRadius: (t) => (t.name === `t1` ? e.quality.drawDistance * 0.8 : c()),
      requestRadius: (t) =>
        t.name === `t1`
          ? Math.min(s(), e.quality.drawDistance)
          : Math.max(60, l() - 110),
    });
  (ue.addLayer(P), ue.addLayer(le));
  let de = LJ(e, {
    keys: d,
    radius: l,
    due: C,
    resetSlice: () => (S = performance.now()),
  });
  ue.addLayer(de.layer);
  let fe = Number(n.get(`markr`) ?? 0) || 0,
    pe = () => (fe > 0 ? fe : (GJ[e.quality.level] ?? 400)),
    me = (t, n, r) => {
      let i = e.camera.position,
        a = Math.max(0, Math.abs(i.x - t) - 128),
        o = Math.max(0, Math.abs(i.z - n) - 128),
        s = pe() + (r ? KJ : -16);
      return a * a + o * o < s * s;
    },
    he = 1e9,
    _e = 1e9,
    ve = () => {
      if (!te) return;
      let t = e.camera.position;
      if (!((t.x - he) ** 2 + (t.z - _e) ** 2 < 16)) {
        ((he = t.x), (_e = t.z));
        for (let e of re.values()) {
          if (e.m < 0) continue;
          let t = me(e.cx, e.cz, e.mOn);
          t !== e.mOn && ((e.mOn = t), te.setVisible(e.m, t));
        }
      }
    },
    ye = function* () {
      let t = [];
      for (let e of d) {
        ((S = performance.now()), v.reset(), b.reset(), x.reset());
        let n = yq(v, T, Kc(e), b, x);
        for (; !n.next().done;);
        (y.reset(),
          wq(y, ee(e)),
          t.push({
            gv: v.n + b.n,
            gi: v.ni + b.ni,
            lv: y.n,
            li: y.ni,
            rv: x.n,
            ri: x.ni,
          }),
          yield);
      }
      M.clear();
      let n = s() + 300 + 181.76,
        r = Math.min(d.length, Math.ceil((Math.PI * n * n) / 65536) + 4),
        i = (e) => {
          let n = t.map(e).sort((e, t) => t - e),
            i = 0;
          for (let e = 0; e < r && e < n.length; e++) i += n[e];
          return Math.ceil(i * 1.15) + 1024;
        },
        a = Math.max(1, r);
      ((te = new bi(
        `tokyo-t1-ground`,
        m(),
        a * 2,
        i((e) => e.gv),
        i((e) => e.gi),
      )),
        (ne = new bi(
          `tokyo-t1-lots`,
          m(),
          a,
          i((e) => e.lv),
          i((e) => e.li),
        )),
        (N = new Li(
          `tokyo-t1-road`,
          g(),
          a,
          i((e) => e.rv),
          i((e) => e.ri),
          !1,
        )));
      for (let t of [te, ne, N])
        ((t.mesh.userData.owner = `tokyo-tiles-t1`),
          t.attachGpu(e.renderer),
          e.scene.add(t.mesh));
    };
  e.events.on(`quality:changed`, () => {
    let e = m();
    (te && (te.mesh.material = e),
      ne && (ne.mesh.material = e),
      N && (N.mesh.material = g()),
      r || _.material());
  });
  let be = new Map(),
    xe = () => {
      let e = p(),
        t = be.get(e);
      if (!t) {
        let n = xi(m(), `tokyo-t1-proto`);
        n.receiveShadow = !0;
        let r = new Li(`tokyo-t1-road-proto`, g(), 1, 4, 6, !1),
          i = new ce(4, 6);
        (i.quad(-1, -50, 1, 1, -50, 1, 1, -50, -1, -1, -50, -1),
          r.setVisible(
            r.write(i, new O(new k(-1, -50, -1), new k(1, -50, 1))),
            !0,
          ),
          (r.mesh.frustumCulled = !1),
          be.set(e, (t = [n, r.mesh, ..._.prewarm()])));
      }
      return t;
    },
    Se = !1,
    Ce = {
      name: `tiles`,
      residency: ue,
      onPackBuilt: (e) => ue.onPackBuilt(e),
      onPackDropped: (e) => ue.onPackDropped(e),
      async init() {
        if (r) return;
        let t = performance.now();
        _.init();
        let n = ye(),
          i = 0;
        for (; !n.next().done;)
          ++i % 8 == 0 &&
            (e.loading(`tiles: plan`, (i / d.length) * 0.4),
            await e.yieldFrame());
        let a = performance.now() - t;
        await de.init();
        let o = u();
        await ue.buildNow(o.x, o.z, (t) =>
          e.loading(`tiles: near`, 0.4 + 0.6 * t),
        );
        let s = ue.stats();
        console.info(
          `[init] tiles ${Math.round(performance.now() - t)}ms (count pass ${Math.round(a)}ms over ${d.length} tiles; t1 ${s.t1.resident} tiles ${s.t1.mb} MB, t2 ${s.t2.resident} tiles ${s.t2.mb} MB ${s.t2.colliders} colliders; pools ${((te?.bytes ?? 0) / 1048576).toFixed(1)} + ${((ne?.bytes ?? 0) / 1048576).toFixed(1)} MB)`,
        );
      },
      start() {
        (typeof window < `u` &&
          (window.__tiles = {
            stats: () => ue.stats(),
            state: (e) => ue.state(e),
            anchors: () => ue.anchors(),
            pools: () => ({ ground: te?.usage(), lots: ne?.usage() }),
            log: ue.log,
            drop: (e) => {
              let t = ue.unit(e);
              return t ? (ue.dropUnit(t), !0) : `unknown`;
            },
            keyAt: (e, t) => Gc(e, t),
            buildings: () => _.stats(),
            streets: () => de.info(),
          }),
          e.events.on(`game:ready`, () => {
            Se || r || ((Se = !0), ue.start());
          }));
      },
      update(e) {
        r || (ue.update(e), ve(), _.update(), de.update(e));
      },
      prewarm: () => (r ? [] : [...xe(), ...de.prewarm()]),
    },
    we = de.api,
    Te = { home: 0.5, office: 0.25 };
  return {
    tiles: Ce,
    streets: we,
    buildings: {
      name: `buildings`,
      ready: !0,
      heightAt(e, t) {
        let n = M.get(Gc(e, t));
        if (!n) return 0;
        for (let r = 0; r < n.length; r++) {
          let i = n[r];
          if (e >= i.x0 && e <= i.x1 && t >= i.z0 && t <= i.z1)
            return i.h + E(i);
        }
        return 0;
      },
      buildings: [],
      arcades: [],
      get storefronts() {
        return _.storefronts();
      },
      storefront: (e) => _.storefront(e),
      entries: [],
      shopIdentities: () => [],
      litShare: () => Te,
      ensureResident: (e, t, n) =>
        r ? Promise.resolve() : ue.ensureResident(e, t, n),
      residency() {
        let e = ue.stats();
        return {
          on: !r,
          built: e.t2?.resident ?? 0,
          building: +!!ue.current,
          dormant: e.t2?.dormant ?? 0,
          geoMB: (e.t2?.mb ?? 0) + (e.t1?.mb ?? 0),
        };
      },
      stats() {
        let e = ue.stats(),
          t = {};
        for (let [n, r] of Object.entries(e))
          for (let [e, i] of Object.entries(r))
            typeof i == `number` && (t[`${n}.${e}`] = i);
        return t;
      },
    },
  };
}
