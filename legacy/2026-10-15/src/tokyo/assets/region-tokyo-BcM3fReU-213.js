// tokyo/assets/region-tokyo-BcM3fReU 213 — math
// Lines 88235-88736 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function LJ(e, t) {
  let n = e.plan,
    r = e.params.get(`streets`) === `0`,
    i = md(n),
    a = n.dataset.labels,
    o = () => e.quality.materials,
    s = null,
    c = null,
    l = qG(void 0),
    u = null,
    d = null,
    f = null,
    p = null,
    m = { f: new Map(), l: new Map() },
    h = () =>
      ge(`opaque`, {
        policy: o(),
        map: s?.texture ?? null,
        batched: !0,
        name: `tokyo-streets`,
      }),
    g = new Map(),
    _ = new ce(16384, 32768),
    v = new ce(8192, 16384),
    y = {},
    b = {
      guideSigns: i.guides.map((e) => ({
        x: +e.px.toFixed(1),
        z: +e.pz.toFixed(1),
        heading: +Math.atan2(e.fx, -e.fz).toFixed(2),
        key: e.key,
      })),
      gantries: i.gantries.map((e) => ({
        x: +e.x.toFixed(1),
        z: +e.z.toFixed(1),
        y: +e.y.toFixed(1),
      })),
    },
    x = null,
    S = () =>
      new jJ({
        plan: n,
        city: i,
        kit: m,
        season: a_(e),
        claimed: e.districts
          ? (t, n, r, i) => e.districts.claimed(t, n, r, i, `props`)
          : void 0,
        areaAt: a.areaAt ? (e, t) => a.areaAt(e, t) : void 0,
        intersectionName: a.intersectionName
          ? (e, t, n) => a.intersectionName(e, t, n)
          : void 0,
        density: Math.max(0.4, Math.min(1, e.quality.propDensity ?? 1)),
        wireSeg:
          Number(e.params.get(`wireseg`) ?? 0) ||
          (e.quality.level === `low` ? 4 : 6),
      }),
    C = () =>
      e.quality.mobile
        ? 0.6
        : e.quality.level === `low`
          ? 0.65
          : e.quality.level === `medium`
            ? 0.82
            : e.quality.level === `ultra`
              ? 1.2
              : 1,
    w = {
      name: `st`,
      radius: t.radius,
      dropMargin: 150,
      dropAfterS: 10,
      lookaheadMaxSpeed: 40 / 3.6,
      keys: r ? [] : t.keys,
      box: (e) => Kc(e),
      *build(n) {
        (t.resetSlice(), (x ||= S()));
        let r = Kc(n),
          i = e.statics.beginGroup();
        (e.statics.endGroup(), _.reset(), v.reset());
        let a = yield* x.build(
          r,
          _,
          {
            circle(t, n, r, a, o = `pole`) {
              (e.statics.beginGroup(i),
                e.statics.addCircle(t, n, r, 0, a, o),
                e.statics.endGroup());
            },
            box(t, n, r, a, o, s = `prop`) {
              (e.statics.beginGroup(i),
                e.statics.addBox(t, n, r, a, 0, o, s),
                e.statics.endGroup());
            },
          },
          t.due,
          v,
        );
        if (!a.nInst && !a.nLamps && !_.n && !v.n && !a.colliders)
          return (e.statics.removeGroup(i), null);
        let o = (e) => {
            let t = new O();
            if (!e.n) return t;
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
            return (t.min.set(r, i, a), t.max.set(o, s, c), t);
          },
          s = o(_),
          c = o(v),
          l = _.n ? VJ(_) : null,
          m = v.n ? VJ(v) : null,
          h =
            (l ? l.n * 40 + l.ni * 4 : 0) +
            (m ? m.n * 40 + m.ni * 4 : 0) +
            (a.nInst + a.nLamps) * 80,
          y = {
            key: n,
            out: a,
            slot: -1,
            fine: -1,
            fineOn: !1,
            cx: (r.minX + r.maxX) / 2,
            cz: (r.minZ + r.maxZ) / 2,
            ids: new Int32Array(a.nInst),
            lampIds: new Int32Array(a.nLamps),
            nodeStart: new Int32Array(a.sigNodes.length + 1),
            nodeCodes: new Int16Array(a.sigNodes.length * 6).fill(-1),
          };
        {
          let e = 0;
          for (let t = 0; t < a.nLamps; t++)
            for (; a.lampNode[t] >= e;) y.nodeStart[e++] = t;
          for (; e <= a.sigNodes.length;) y.nodeStart[e++] = a.nLamps;
        }
        return {
          bytes: h,
          tris: 0,
          colliders: a.colliders,
          statics: i,
          upload: () => {
            (l && p && (y.slot = p.write(l, s)),
              m && p && (y.fine = p.write(m, c)),
              p &&
                (y.slot >= 0 || y.fine >= 0) &&
                (e.renderer.uploadDraw([p.mesh]),
                y.slot >= 0 && p.setVisible(y.slot, !0),
                (y.fineOn = D(y.cx, y.cz, !1)),
                y.fine >= 0 && p.setVisible(y.fine, y.fineOn)));
            let t = new Float32Array(16);
            if (d)
              for (let e = 0; e < a.nInst; e++) {
                let n = e * 20;
                (t.set(a.inst.subarray(n + 4, n + 20)),
                  (y.ids[e] = d.add(
                    a.inst[n],
                    t,
                    a.inst[n + 1],
                    a.inst[n + 2],
                    a.inst[n + 3],
                  )));
              }
            if (f)
              for (let e = 0; e < a.nLamps; e++) {
                let n = e * 20;
                (t.set(a.lamps.subarray(n + 4, n + 20)),
                  (y.lampIds[e] = f.add(
                    a.lamps[n],
                    t,
                    a.lamps[n + 1],
                    a.lamps[n + 2],
                    a.lamps[n + 3],
                    !1,
                  )));
              }
            (u && y.slot >= 0 && u.addTile(n, y.slot, a.signs),
              (a.inst = new Float32Array()),
              (a.lamps = new Float32Array()),
              g.set(n, y));
          },
        };
      },
      dropped(e) {
        let t = g.get(e);
        if (t) {
          if ((g.delete(e), d))
            for (let e = 0; e < t.ids.length; e++) d.remove(t.ids[e]);
          if (f)
            for (let e = 0; e < t.lampIds.length; e++) f.remove(t.lampIds[e]);
          (u?.removeTile(e), p?.free(t.slot), p?.free(t.fine));
        }
      },
    },
    T = Number(e.params.get(`finer`) ?? 0) || 0,
    E = () =>
      T > 0
        ? T
        : e.quality.level === `low`
          ? PJ.low
          : e.quality.mobile
            ? FJ
            : (PJ[e.quality.level] ?? 260),
    D = (t, n, r) => {
      let i = e.camera.position,
        a = Math.max(0, Math.abs(i.x - t) - 128),
        o = Math.max(0, Math.abs(i.z - n) - 128),
        s = E() + (r ? IJ : -12);
      return a * a + o * o < s * s;
    },
    k = 1e9,
    A = 1e9,
    j = () => {
      if (!p) return;
      let t = e.camera.position;
      if (!((t.x - k) ** 2 + (t.z - A) ** 2 < 9)) {
        ((k = t.x), (A = t.z));
        for (let e of g.values()) {
          if (e.fine < 0) continue;
          let t = D(e.cx, e.cz, e.fineOn);
          t !== e.fineOn && ((e.fineOn = t), p.setVisible(e.fine, t));
        }
      }
    },
    M = e.signals,
    ee = Math.max(1, Math.round(Number(e.params.get(`sigrr`)) || 3)),
    te = 0,
    ne = (e) => {
      if (!f) return;
      let t = Math.floor(e * 2) % 2 == 0,
        n = te++ % ee,
        r = 0;
      for (let e of g.values()) {
        if (r++ % ee !== n && e.nodeCodes[0] !== -1) continue;
        let i = e.out.sigNodes;
        for (let n = 0; n < i.length; n++) {
          let r = i[n],
            a = M.state(r, `x`),
            o = M.state(r, `z`),
            s =
              a === `green`
                ? 0
                : a === `yellow`
                  ? 1
                  : LS(M, r, `x`, NJ)
                    ? 3
                    : 2,
            c =
              o === `green`
                ? 0
                : o === `yellow`
                  ? 1
                  : LS(M, r, `z`, NJ)
                    ? 3
                    : 2,
            l = RJ(M.pedState(r, `x`), t),
            u = RJ(M.pedState(r, `z`), t),
            d = l === 0 ? N(r, `z`) : 0,
            p = u === 0 ? N(r, `x`) : 0,
            m = e.nodeCodes,
            h = n * 6;
          if (
            m[h] === s &&
            m[h + 1] === c &&
            m[h + 2] === l &&
            m[h + 3] === u &&
            m[h + 4] === d &&
            m[h + 5] === p
          )
            continue;
          ((m[h] = s),
            (m[h + 1] = c),
            (m[h + 2] = l),
            (m[h + 3] = u),
            (m[h + 4] = d),
            (m[h + 5] = p));
          let g = e.out.lampRole;
          for (let t = e.nodeStart[n]; t < e.nodeStart[n + 1]; t++)
            f.setOn(e.lampIds[t], zJ(g[t], s, c, l, u, d, p));
        }
      }
    },
    N = (e, t) => {
      let n = M.state(e, t);
      if (n === `green`) return 0;
      if (n === `yellow`) return 4;
      let r = M.remaining(e, t);
      return Math.max(1, Math.min(4, Math.ceil((4 * r) / (M.cycle(e) * 0.6))));
    },
    re = {
      name: `streets`,
      ready: !0,
      scooterBoxDepth: 4.35,
      hasScooterBox: () => !1,
      turnBoxes: [],
      busStops: i.busStops.map((e) => ({
        id: e.id,
        x: e.x,
        z: e.z,
        heading: e.heading,
        roadId: e.roadId,
        curbX: e.curbX,
        curbZ: e.curbZ,
        busHeading: e.busHeading,
      })),
      bikeStations: [],
      benches: i.busStops
        .filter((e) => e.shelter)
        .map((e) => ({ x: e.x, z: e.z, heading: e.heading })),
      crosswalks: i.crosswalks,
      expressways: [],
      overpasses: [],
      scooterBays: [],
      carBays: [],
      knock: () => 0,
      freeParkingSpot: () => null,
      releaseParkingSpot: () => {},
      lightMapShader: void 0,
      get lightMap() {
        return c;
      },
      stats: y,
      debugInfo: b,
    };
  e.events.on(`quality:changed`, () => {
    let t = h();
    for (let e of [d?.mesh, f?.mesh, p?.mesh]) e && (e.material = t);
    d && (d.mesh.castShadow = e.quality.shadows);
  });
  let ie = new Map();
  return {
    api: re,
    layer: w,
    async init() {
      if (r) return;
      let a = performance.now(),
        o = e.region.signage,
        g = e.quality.level === `low` || !!e.quality.mobile,
        b = o.fontsReady;
      (b && (await b.catch(() => !1)),
        (l = qG(o.brands)),
        tK(_m(I_(e).state.seasonDay)),
        (s = new JG(
          g ? 0.5 : 1,
          o.fonts.sans,
          o.fonts.serif,
          o.lang,
          Math.min(8, e.renderer.gl.capabilities.getMaxAnisotropy()),
          l,
        )),
        await e.yieldFrame());
      let C = e.params.get(`polefar`),
        w = yJ(l, C === `1` || (C !== `0` && e.quality.level === `low`)),
        T = xJ();
      (w.forEach((e, t) => m.f.set(e.name, t)),
        T.forEach((e, t) => m.l.set(e.name, t)),
        (x = S()));
      let E = [],
        D = { circle() {}, box() {} },
        O = 0;
      for (let n of t.keys) {
        (t.resetSlice(), _.reset(), v.reset());
        let r = x.build(Kc(n), _, D, () => !1, v),
          i = r.next();
        for (; !i.done;) i = r.next();
        let a = i.value;
        (E.push({ i: a.nInst, l: a.nLamps, v: _.n + v.n, x: _.ni + v.ni }),
          ++O % 6 == 0 && (await e.yieldFrame()));
      }
      let k = t.radius() + 150 + 181.76,
        A = Math.min(t.keys.length, Math.ceil((Math.PI * k * k) / 65536) + 4),
        j = (e) => {
          let t = E.map(e).sort((e, t) => t - e),
            n = 0;
          for (let e = 0; e < A && e < t.length; e++) n += t[e];
          return Math.ceil(n * 1.15) + 256;
        },
        M = h();
      ((d = new Ii(
        `tokyo-streets-furniture`,
        M,
        w,
        j((e) => e.i),
        e.quality.shadows,
      )),
        (f = new Ii(
          `tokyo-streets-lamps`,
          M,
          T,
          j((e) => e.l),
          !1,
        )),
        (p = new Li(
          `tokyo-streets-unique`,
          M,
          Math.max(4, A) * 2,
          j((e) => e.v),
          j((e) => e.x),
          !1,
        )),
        p.attachGpu(e.renderer),
        d.enableCulling(e.camera),
        f.enableCulling(e.camera));
      for (let [e, t] of d.models) m.f.set(e, t);
      for (let [e, t] of d.models) {
        let n = d.models.get(`${e}-far`);
        n !== void 0 && d.setLod(t, n, e.startsWith(`bike`) ? 20 : 70);
      }
      for (let [e, t] of f.models) m.l.set(e, t);
      for (let t of [d.mesh, f.mesh, p.mesh])
        ((t.userData.owner = `tokyo-streets`), e.scene.add(t));
      if (((u = new EJ(e, s, () => p)), e.params.get(`streetLm`) !== `0`)) {
        let t = CJ(n, i, e.quality.mobile || e.quality.level === `low` ? 3 : 2);
        ((c = { texture: t.texture, xf: t.xf }),
          (t.texture.userData.owner = `tokyo-streets`),
          (y.lightMapMs = Math.round(t.ms)),
          (y.lightMapKB = Math.round(
            (t.texture.image.width * t.texture.image.height * 4) / 1024,
          )));
      }
      ((x = S()),
        (y.countMs = Math.round(performance.now() - a)),
        (y.K = A),
        console.info(
          `[init] tokyo streets ${Math.round(performance.now() - a)}ms (K ${A}: furniture ${d.capacity} inst, lamps ${f.capacity}, unique ${(p.bytes / 1048576).toFixed(1)} MB; ${i.busStops.length} bus stops)`,
        ));
    },
    update() {
      if (r || !d) return;
      let t = e.camera.position,
        n = C();
      (d.regather(t.x, t.z, n, MJ),
        f?.regather(t.x, t.z, n, MJ),
        j(),
        ne(M.time),
        u?.update(t.x, t.z));
    },
    prewarm() {
      if (r || !s) return [];
      let e = o(),
        t = ie.get(e);
      if (!t) {
        let n = new Ii(`tokyo-streets-proto`, h(), [yJ(l)[0]], 2, !0),
          r = new Float32Array([
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -50, 0, 1,
          ]);
        (n.add(0, r, 0, 0, 1e9),
          n.regather(0, 0, 1, 0, !0),
          (n.mesh.frustumCulled = !1),
          ie.set(e, (t = [n.mesh])));
      }
      return t;
    },
    info() {
      let e = {};
      for (let t of g.values())
        for (let [n, r] of Object.entries(t.out.counts)) e[n] = (e[n] ?? 0) + r;
      return {
        tiles: g.size,
        counts: e,
        verify: () => ({
          furniture: d?.verifyLists() ?? null,
          lamps: f?.verifyLists() ?? null,
        }),
        furniture: d
          ? {
              count: d.count,
              cap: d.capacity,
              shown: d.shown,
              tris: d.shownTris,
              grows: d.grows,
              main: d.culledMain,
              shadow: d.culledShadow,
              rebuilds: d.rebuilds,
              rebuildMs: +d.rebuildMs.toFixed(1),
              edits: d.edits,
            }
          : null,
        lamps: f
          ? { count: f.count, cap: f.capacity, shown: f.shown, grows: f.grows }
          : null,
        unique: p?.usage(),
        signs: u?.info(),
        stats: y,
      };
    },
  };
}
