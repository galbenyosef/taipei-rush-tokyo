// tokyo/assets/region-tokyo-A7LxHjud 342 — math
// Lines 123380-124324 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function PAe(e) {
  let t = e.plan,
    n = e.params,
    r = n.get(`culture`) === `0`,
    i = n.get(`crowd`),
    a = i === `0`,
    o = i && i !== `0` ? Math.max(0, Math.min(2, Number(i) || 1)) : 1,
    c = n.get(`matsuri`) === `1`,
    l = n.get(`life`) === `0`,
    u = null,
    d = {
      hour: 12,
      rain: 0,
      weekend: !1,
      hokoten: 0,
      park: 0,
      commute: 0,
      hokotenK: new Float32Array(8),
      commuteOf: (e) => f.commute(e),
    },
    f = zm(e),
    m = () => e.quality.materials,
    h = ve(),
    g = null,
    _ = null,
    v = null,
    y = null,
    b = 0,
    x = () => {
      if (!y) {
        let n = performance.now();
        ((y = hAe(t, e.transit?.entrances ?? [], T)),
          (b = performance.now() - n));
        for (let e = 0; e < y.claims.length; e++) {
          let t = y.claims[e];
          for (let n = Math.floor(t.x0 / 16); n <= Math.floor(t.x1 / 16); n++)
            for (
              let r = Math.floor(t.z0 / 16);
              r <= Math.floor(t.z1 / 16);
              r++
            ) {
              let t = n * 65536 + r,
                i = S.get(t);
              (i || S.set(t, (i = [])), i.push(e));
            }
        }
      }
      return y;
    },
    S = new Map(),
    C = { asked: 0, hit: 0 },
    w = (e, t, n, r) => {
      C.asked++;
      let i = x().claims;
      for (let a = Math.floor(e / 16); a <= Math.floor(n / 16); a++)
        for (let o = Math.floor(t / 16); o <= Math.floor(r / 16); o++) {
          let s = S.get(a * 65536 + o);
          if (s)
            for (let a of s) {
              let o = i[a];
              if (o.x0 < n && o.x1 > e && o.z0 < r && o.z1 > t)
                return (C.hit++, !0);
            }
        }
      return !1;
    },
    T = e.districts ?? null;
  if (T && !r) {
    let e = T.claimed.bind(T);
    T.claimed = (t, n, r, i, a) =>
      e(t, n, r, i, a) || (a === `props` && w(t, n, r, i));
  }
  let E = [],
    D = [],
    O = () =>
      ke(`opaque`, {
        policy: m(),
        map: g?.texture ?? null,
        batched: !0,
        name: `tokyo-culture`,
      }),
    A = () =>
      ke(`opaque`, { policy: m(), batched: !0, name: `tokyo-tiles-t1` }),
    j = new Map(),
    M = new MAe(
      t,
      () => _,
      (e) => j.get(e) ?? -1,
    ),
    ee = new Map(),
    te = new Uint8Array(4096),
    ne = {},
    re = () => NAe[e.quality.level] ?? 260,
    ie = Number(n.get(`t2r`) ?? 0) || 0,
    ae = () => (ie > 0 ? ie : re() * 1.2 + 110),
    oe = () => {
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
    se = () =>
      e.quality.mobile
        ? 0.6
        : e.quality.level === `low`
          ? 0.65
          : e.quality.level === `medium`
            ? 0.82
            : e.quality.level === `ultra`
              ? 1.2
              : 1,
    ce = { y: 2026, m: 10, d: 1, wd: 4 },
    le = () => {
      let t = e.time;
      return (
        (ce.y = t.date?.y ?? 2026),
        (ce.m = t.date?.m ?? 10),
        (ce.d = t.date?.d ?? 1),
        (ce.wd = t.weekday ?? 4),
        ce
      );
    },
    ue = () => e.env?.hour ?? 12,
    de = (t.dataset.closures ?? [])
      .map((e, t) => ({ c: e, i: t }))
      .filter((e) => /hokoten/.test(e.c.id)),
    fe = new Float32Array(8),
    pe = new Float32Array(8),
    me = {
      hokoten: 0,
      hokotenCrowd: 0,
      matsuriDress: !1,
      matsuriDay: !1,
      sakura: !1,
      nightYatai: !1,
      festStalls: !1,
      market: 0,
      stalls: !1,
      offDay: !1,
      rainBags: !1,
      leaves: !1,
      summer: !1,
      hanami: !1,
    },
    he = (e, t) => {
      switch (e) {
        case CY.MARKET_OPEN:
          return me.stalls;
        case CY.MARKET_CLOSED:
          return !me.stalls;
        case CY.GOMI_OUT:
          return te[t] === 1;
        case CY.GOMI_IN:
          return te[t] !== 1;
        case CY.HOKOTEN:
          return fe[t] > 0;
        case CY.MATSURI:
          return me.matsuriDress;
        case CY.SAKURA:
          return me.sakura;
        case CY.NIGHT_YATAI:
          return me.nightYatai;
        case CY.FESTIVAL_STALLS:
          return me.festStalls;
        case CY.RAIN:
          return me.rainBags;
        case CY.LEAVES:
          return me.leaves;
        case CY.SUMMER:
          return me.summer;
        case CY.HANAMI:
          return me.hanami;
        default:
          return !0;
      }
    },
    ge = -1,
    _e = new Uint8Array(4096),
    ye = -1,
    be = () => {
      let e = le(),
        t = ue();
      ((me.hokoten = 0), (me.hokotenCrowd = 0));
      let n = 0;
      for (let { c: r, i } of de)
        i >= fe.length ||
          ((fe[i] = bse(r, e, t)),
          (pe[i] = cf(r, e, t)),
          (me.hokoten = Math.max(me.hokoten, fe[i])),
          (me.hokotenCrowd = Math.max(me.hokotenCrowd, pe[i])),
          fe[i] > 0 && (n |= 1 << i));
      ((me.matsuriDress = c || xse(e)),
        (me.matsuriDay = c ? t >= 10 && t < 17 : Sse(e, t)),
        (me.sakura = wse(e) && t >= 9 && t < 21),
        (me.nightYatai = (t >= 18.5 || t < 1) && e.wd >= 1 && e.wd <= 5),
        (me.festStalls =
          ((me.matsuriDress || Cse(e)) && t >= 9 && t < 21) || !1),
        (me.market = Dse(t)),
        (me.stalls = Tse(t)),
        (me.offDay = e.wd === 0 || e.wd === 6 || af(e)));
      let r = e.y * 400 + e.m * 32 + e.d;
      r !== ye && ((ye = r), _e.fill(0));
      let i = f.state;
      ((me.rainBags = i.rainK.umbrellaBags && t >= 7 && t < 23),
        (me.leaves = i.season.ginkgoLeaves > 0.3),
        (me.summer = i.season.summerFestival),
        (me.hanami = i.season.hanami > 0 && t >= 6 && t < 22));
      let a =
        (n << 8) |
        (me.matsuriDress ? 2 : 0) |
        (me.sakura ? 4 : 0) |
        (me.nightYatai ? 8 : 0) |
        (me.festStalls ? 16 : 0) |
        (me.stalls ? 32 : 0) |
        (me.rainBags ? 64 : 0) |
        (me.leaves ? 128 : 0) |
        (me.summer ? 65536 : 0) |
        (me.hanami ? 1 << 17 : 0);
      if (y)
        for (let n = 0; n < y.gomi.length; n++) {
          let r = y.gomi[n],
            i = !_e[n] && df(r.group, r.pickup, e, t) ? 1 : 0;
          ((te[n] = i), (a = (Math.imul(a, 31) + i * (n + 7)) | 0));
        }
      if ((M.refresh(i.day, t), a !== ge && ((ge = a), _)))
        for (let e of ee.values())
          for (let t = 0; t < e.ids.length; t++) {
            let n = he(e.groups[t], e.params[t]);
            if (IY.has(e.groups[t])) {
              if (n && e.ids[t] < 0) {
                let n = e.src[t],
                  r = j.get(n.model) ?? -1;
                r >= 0 && (e.ids[t] = _.add(r, n.m, n.x, n.z, n.range, !0));
              } else
                !n && e.ids[t] >= 0 && (_.remove(e.ids[t]), (e.ids[t] = -1));
              continue;
            }
            _.setOn(e.ids[t], n);
          }
    },
    xe = (e, t, n) => {
      let r = f.state,
        i = e.rainLooks ? 1 - 0.35 * Math.min(1, n * 1.5) : r.rainK.openAir,
        a;
      switch (e.kind) {
        case `hokoten`:
          a = pe[e.closure ?? 0] ?? 0;
          break;
        case `ginza`:
        case `akiba`:
          a = f.activity(
            e.district ?? (e.kind === `ginza` ? `ginza` : `akihabara`),
          );
          break;
        case `ameyoko`:
          ((a = Math.max(0.06, me.market)),
            (e.id.startsWith(`vendor`) || e.id.startsWith(`browse`)) &&
              (a = +!!me.stalls));
          break;
        case `park`: {
          let e = Math.min(1, n * 1.5);
          return Math.max(
            0,
            Math.min(1, pf(t, me.offDay) * Math.max(0.15, 1 - 0.8 * e) * o),
          );
        }
        case `platform`:
          return Math.max(
            0,
            Math.min(
              1,
              (0.6 * f.commute(`marunouchi`) +
                0.4 * f.commute(e.district ?? ``)) *
                o,
            ),
          );
        case `station`:
          if (((a = f.commute(e.district ?? ``)), e.mode === `stand`))
            return Math.max(
              0,
              Math.min(1, a * Math.max(0.3, r.rainK.plazaWait) * o),
            );
          break;
        case `gado`:
          a = Math.max(
            0.2 * f.activity(e.district ?? `kanda`),
            f.drinkers(e.district ?? `kanda`),
          );
          break;
        case `matsuri`:
          a =
            me.matsuriDay || (Ie.active && Ie.templeId === `kanda-myojin`)
              ? 1
              : 0;
          break;
        case `fair-shrine`:
          a = +!!me.festStalls;
          break;
        case `fair-sakura`:
          a = +!!me.sakura;
          break;
        case `fair-oden`:
          return me.nightYatai && n < 0.2 ? 1 : 0;
      }
      return Math.max(0, Math.min(1, a * i * o));
    },
    Se = [],
    Ce = [],
    we = 0,
    Te = new k(),
    Ee = new p(),
    De = new s(),
    Oe = (t, n, r) => (
      Ee.multiplyMatrices(
        e.camera.projectionMatrix,
        e.camera.matrixWorldInverse,
      ),
      Te.setFromProjectionMatrix(
        Ee,
        e.camera.coordinateSystem,
        e.camera.reversedDepth,
      ),
      De.center.set(t, 1.5, n),
      (De.radius = r),
      Te.intersectsSphere(De)
    ),
    Ae = (n) => {
      if (((we -= n), we > 0 || !y || !e.vehicles?.spawn)) return;
      we = 2;
      let r = e.player?.position;
      if (!r) return;
      for (let t = Se.length - 1; t >= 0; t--) {
        let n = Se[t];
        ((n.t += 2),
          n.t >= 75 && !_e[n.point] && ((_e[n.point] = 1), (We = 0)));
        let i = n.v,
          a = i.object.position,
          o = Math.hypot(a.x - r.x, a.z - r.z) > 70 && !Oe(a.x, a.z, 4);
        if (e.vehicles.playerVehicle === i) {
          Se.splice(t, 1);
          continue;
        }
        if ((n.t >= 75 && o) || Math.hypot(a.x - r.x, a.z - r.z) > 220) {
          try {
            e.vehicles.despawn(i);
          } catch {}
          (_e[n.point] || (_e[n.point] = 1), Se.splice(t, 1), (We = 0));
        }
      }
      Ce.length = 0;
      for (let e of Se)
        Ce.push({
          x: e.v.object.position.x,
          z: e.v.object.position.z,
          heading: e.v.heading ?? 0,
          playing: !1,
        });
      if (Se.length >= 1) return;
      let i = ue();
      if (i < 7.5 || i > 11.2) return;
      let a = -1,
        o = 1 / 0;
      for (let e = 0; e < y.gomi.length; e++) {
        if (!te[e]) continue;
        let t = y.gomi[e],
          n = Math.hypot(t.x - r.x, t.z - r.z);
        n < 45 || n > 150 || n >= o || Oe(t.x, t.z, 6) || ((a = e), (o = n));
      }
      if (a < 0) return;
      let s = y.gomi[a],
        c = t.roadAt(s.x + s.fx * 1.5, s.z + s.fz * 1.5);
      if (!c || c.pedestrian) return;
      let l = Math.sign((c.axis === `z` ? s.x : s.z) - c.at) || 1,
        u = t.side,
        d =
          c.axis === `z`
            ? u === l
              ? 0
              : Math.PI
            : u === l
              ? Math.PI / 2
              : -Math.PI / 2,
        f = Math.sin(d),
        p = -Math.cos(d),
        m = c.at + l * (c.halfWidth - 1.35),
        h = c.axis === `z` ? s.z : s.x,
        g = (c.axis === `z` ? m : h) + f * 3,
        _ = (c.axis === `z` ? h : m) + p * 3;
      if (!Oe(g, _, 4))
        try {
          let t = e.vehicles.spawn(`garbage`, g, _, d, { driver: `none` });
          Se.push({ v: t, point: a, t: 0 });
        } catch {}
    },
    je = [],
    Me = 0,
    Ne = (e) => {
      try {
        je[e].h.release();
      } catch {}
      je.splice(e, 1);
    },
    Pe = (t) => {
      if (((Me -= t), Me > 0 || !y || !e.peds?.spawnScripted)) return;
      Me = 1;
      let n = e.player?.position;
      if (!n) return;
      let r = (e) => {
        let t = y.stallRuns[e],
          r = Math.max(1, t.units),
          i = (t.z1 - t.z0) / r,
          a = Math.max(0, Math.min(r - 1, Math.floor((n.z - t.z0) / i)));
        return {
          x: t.x0 + t.fx * 0.25,
          z: t.z0 + (a + 0.5) * i,
          h: Math.atan2(t.fx, -t.fz),
        };
      };
      for (let e = je.length - 1; e >= 0; e--) {
        let t = je[e];
        (!me.stalls || !t.h.alive || Math.hypot(t.x - n.x, t.z - n.z) > 24) &&
          Ne(e);
      }
      if (me.stalls)
        for (let t = 0; t < y.stallRuns.length && je.length < 6; t++) {
          if (je.some((e) => e.run === t)) continue;
          let i = r(t);
          if (Math.hypot(i.x - n.x, i.z - n.z) > 17) continue;
          let a = e.peds.spawnScripted(i.x, i.z, {
            heading: i.h,
            kind: `vendor`,
            pose: `idle`,
          });
          if (!a) break;
          (a.stop(`idle`, i.h), je.push({ run: t, x: i.x, z: i.z, h: a }));
        }
    },
    Fe = { bearer: [0], follower: [0], leader: 0 },
    Ie = new TAe(
      e,
      () => v,
      () => Fe,
      () => (v ? v.frames - EY.length : 0),
    ),
    Le = !e.quality.mobile && e.quality.level !== `low` ? 8 : 6,
    Re = new DAe(
      e,
      () => v,
      () => Le,
      e.quality.mobile
        ? 56
        : e.quality.level === `low`
          ? 64
          : e.quality.level === `ultra`
            ? 150
            : 120,
    ),
    ze = !1,
    Be = {
      name: `cu`,
      radius: ae,
      dropMargin: 150,
      dropAfterS: 10,
      lookaheadMaxSpeed: 40 / 3.6,
      keys: [],
      box: (e) => fc(e),
      *build(n) {
        let r = y?.tiles.get(n);
        if (!r || (!r.inst.length && !r.boxes.length)) return null;
        yield;
        let i = e.statics.beginGroup();
        for (let n of r.boxes) {
          let r = t.groundHeight((n.x0 + n.x1) / 2, (n.z0 + n.z1) / 2);
          e.statics.addBox(n.x0, n.z0, n.x1, n.z1, r - 0.2, r + n.y1, `prop`);
        }
        return (
          e.statics.endGroup(),
          {
            bytes: r.inst.length * 80,
            tris: 0,
            colliders: r.boxes.length,
            statics: i,
            upload: () => {
              if (!_) return;
              let e = {
                ids: new Int32Array(r.inst.length),
                groups: new Uint8Array(r.inst.length),
                params: new Uint16Array(r.inst.length),
                src: r.inst,
              };
              (r.inst.forEach((t, n) => {
                let r = j.get(t.model) ?? -1;
                ((e.groups[n] = t.group), (e.params[n] = t.param));
                let i = he(t.group, t.param);
                if (r < 0 || (!i && IY.has(t.group))) {
                  e.ids[n] = -1;
                  return;
                }
                e.ids[n] = _.add(r, t.m, t.x, t.z, t.range, i);
              }),
                ee.set(n, e));
            },
          }
        );
      },
      dropped(e) {
        let t = ee.get(e);
        if (t && (ee.delete(e), _))
          for (let e = 0; e < t.ids.length; e++)
            t.ids[e] >= 0 && _.remove(t.ids[e]);
      },
    },
    Ve = new Zn(e, {
      spawn: oe,
      owner: `tokyo-culture`,
      popRadius: () => re(),
      requestRadius: () => Math.max(60, ae() - 110),
    }),
    He = { market: 0, festival: 0, hokoten: 0, crowd: 0 },
    N = () => {
      let n = e.player?.position ?? e.camera.position,
        r = y?.market;
      if (r) {
        let e = Math.max(0, Math.abs(n.x - r.x) - r.hx),
          t = Math.max(0, Math.abs(n.z - r.z) - r.hz);
        He.market = me.market * Math.max(0, 1 - Math.hypot(e, t) / 45);
      }
      He.festival = Ie.active
        ? Math.max(0, 1 - Math.hypot(n.x - Ie.x, n.z - Ie.z) / 120)
        : 0;
      let i = 0;
      for (let { c: e, i: r } of de) {
        if (!(fe[r] > 0)) continue;
        let a = t.roads.find((t) => t.id === e.road);
        if (!a) continue;
        let o = a.axis === `z` ? n.z : n.x,
          s = Math.abs((a.axis === `z` ? n.x : n.z) - a.at),
          c = Math.min(e.from, e.to),
          l = Math.max(e.from, e.to),
          u = Math.max(0, c - o, o - l) + Math.max(0, s - a.halfTotal);
        i = Math.max(i, fe[r] * Math.max(0, 1 - u / 60));
      }
      ((He.hokoten = i),
        (He.crowd = v ? v.shown / Math.max(1, v.capacity) : 0));
    };
  e.events.on(`quality:changed`, () => {
    (_ && ((_.mesh.material = O()), (_.mesh.castShadow = e.quality.shadows)),
      v && (v.mesh.material = A()));
  });
  let Ue = new Map(),
    We = 0,
    Ge = 0,
    Ke = 0,
    qe = {
      ms: 0,
      msPeak: 0,
      particles: 0,
      emitters: 0,
      figures: 0,
      tris: 0,
      glows: 0,
      drawCalls: 0,
    };
  return {
    name: `culture`,
    garbageTrucks: Ce,
    get marketsOpen() {
      return me.market > 0.5;
    },
    startProcession(e, t) {
      if (!y || (e && !/^kanda/.test(e))) return !1;
      let n = t?.route && t.route.length > 1 ? t.route : y.route;
      return (
        (ze = !1),
        Ie.start(n, !t?.route, {
          speed: t?.speed,
          external: t?.external,
          templeId: `kanda-myojin`,
        })
      );
    },
    firecrackers() {},
    get nightMarkets() {
      let e = y?.market;
      return e
        ? [
            {
              id: `ameyoko`,
              name: { zh: `阿美橫`, en: `Ameyoko` },
              x: e.x,
              z: e.z,
              hx: e.hx,
              hz: e.hz,
            },
          ]
        : [];
    },
    get temples() {
      let e = t.landmark(`kanda-myojin`);
      if (!e || !y?.route.length) return [];
      let n = y.route[0];
      return [
        {
          id: `kanda-myojin`,
          name: { zh: `神田明神`, en: `Kanda Myojin` },
          x: e.x,
          z: e.z,
          frontX: n.x,
          frontZ: n.z,
          burnerX: e.x,
          burnerZ: e.z + e.d / 2 - 6,
        },
      ];
    },
    get shrines() {
      return y ? y.shrines.map((e) => ({ x: e.frontX, z: e.frontZ })) : [];
    },
    get procession() {
      return Ie.active
        ? {
            active: !0,
            x: Ie.x,
            z: Ie.z,
            templeId: Ie.templeId,
            theme: `mikoshi`,
          }
        : null;
    },
    stopProcession() {
      ((ze = !1), Ie.stop());
    },
    driveProcession(e) {
      Ie.drive(e);
    },
    setProcessionHead(e, t) {
      Ie.setHead(e, t);
    },
    get garbageService() {
      let e = le();
      return {
        today: uf(0, e) !== null || uf(1, e) !== null || uf(2, e) !== null,
        weekday: e.wd,
      };
    },
    get gomi() {
      return y?.gomi ?? [];
    },
    gomiAt(e) {
      let t = y?.gomi[e];
      if (!t) return { today: null, out: !1 };
      let n = le();
      return { today: uf(t.group, n), out: df(t.group, t.pickup, n, ue()) };
    },
    get hokoten() {
      return me.hokoten;
    },
    hokotenAt(e) {
      return fe[e] ?? 0;
    },
    get lifeSites() {
      return y?.life ?? null;
    },
    shopDoors: r
      ? void 0
      : { add: (e, t) => M.add(e, t), remove: (e) => M.remove(e) },
    ambience: He,
    get matsuri() {
      return { dressing: me.matsuriDress, procession: me.matsuriDay };
    },
    get debugStats() {
      return (
        (qe.figures = v?.shown ?? 0),
        (qe.tris = (_?.shownTris ?? 0) + (v?.shownTris ?? 0)),
        (qe.drawCalls = (_ && _.shown ? 1 : 0) + (v && v.shown ? 1 : 0)),
        qe
      );
    },
    onPackBuilt: (e) => Ve.onPackBuilt(e),
    onPackDropped: (e) => Ve.onPackDropped(e),
    ensureResident: (e, t, n) =>
      r ? Promise.resolve() : Ve.ensureResident(e, t, n),
    residency() {
      let e = {};
      for (let [t, n] of Object.entries(Ve.state(!0)))
        e[t] = n === `dropping` ? `built` : n;
      return e;
    },
    async init() {
      if (r) return;
      let n = performance.now(),
        i = e.region.signage,
        o = e.quality.level === `low` || !!e.quality.mobile,
        s = i.fontsReady;
      s && (await s.catch(() => !1));
      let c = performance.now(),
        d = x(),
        f = b || performance.now() - c,
        p = [...d.tiles.keys()].sort((e, t) => e - t);
      ((Be.keys = p), Ve.addLayer(Be));
      let m = (() => {
        let e = d.market;
        return (e ? t.dataset.labels.areaAt?.(e.x, e.z) : null)?.ward.ja ?? ``;
      })();
      ((g = new lke(
        o ? 0.5 : 1,
        i.fonts.sans,
        i.fonts.serif,
        i.lang,
        Math.min(8, e.renderer.gl.capabilities.getMaxAnisotropy()),
        m,
      )),
        await e.yieldFrame());
      let y = t.roads.find((e) => e.id === `ameyoko`),
        S = xY(y ? y.halfTotal - 0.15 : 5),
        C = 0;
      for (let e of d.tiles.values()) C += e.inst.length;
      ((_ = new hr(
        `tokyo-culture`,
        O(),
        S,
        C + 64 + (e.quality.mobile || e.quality.level === `low` ? 3e3 : 6e3),
        e.quality.shadows,
      )),
        _.enableCulling(e.camera));
      for (let [e, t] of _.models) j.set(e, t);
      for (let [e, t] of [
        ...Array.from({ length: 3 }, (e, t) => [
          `festoon-red-${t}`,
          `festoon-red-far`,
        ]),
        [`festoon-matsuri`, `festoon-matsuri-far`],
      ]) {
        let n = _.models.get(e),
          r = _.models.get(t);
        n !== void 0 && r !== void 0 && _.setLod(n, r, 35);
      }
      _.mesh.userData.owner = `tokyo-culture`;
      let w = FY(_.mesh) / 1048576;
      if (
        (gJ(_.mesh),
        (ne.kitMB = +w.toFixed(2)),
        e.scene.add(_.mesh),
        await e.yieldFrame(),
        !a)
      ) {
        let n = !e.quality.mobile && e.quality.level !== `low`,
          r = vAe(n),
          i = e.quality.mobile
            ? 0.45
            : e.quality.level === `low`
              ? 0.5
              : e.quality.level === `medium`
                ? 0.75
                : e.quality.level === `ultra`
                  ? 1.15
                  : 1;
        E = yAe(
          t,
          d,
          r,
          i * (h >= 2 ? 0.7 : 1),
          !!e.quality.mobile || e.quality.level === `low`,
        );
        let a = 0;
        for (let e of E) a += e.count;
        let o = 0;
        v = await ike.create({
          name: `tokyo-crowd`,
          material: A(),
          looks: r.looks,
          walkFrames: Le,
          extraPoses: EY,
          props: [bAe()],
          heroLooks:
            n || !e.quality.mobile
              ? [
                  ...new Set(
                    [
                      ...r.sets.vendor,
                      ...r.sets.festival,
                      ...r.sets.office,
                      ...r.sets.commute,
                      ...r.sets.ameyoko,
                    ].map(([e]) => e),
                  ),
                ]
              : r.sets.festival.map(([e]) => e),
          heroR: 22,
          extraFor: (e) => r.sets.festival.some(([t]) => t === e),
          umbrellaOf: (e) => r.umbrella[e] ?? null,
          capacity: a + 64 + Re.max,
          hideR: e.quality.mobile ? [24, 36] : [30, 44],
          farR: e.quality.mobile ? 160 : e.quality.level === `low` ? 190 : 230,
          lodR: e.quality.mobile ? 55 : 80,
          slowR: e.quality.mobile ? 80 : 110,
          yieldEvery: async () => {
            ++o % 3 == 0 &&
              (e.loading(`culture: crowd`, Math.min(0.9, o / r.looks.length)),
              await e.yieldFrame());
          },
        });
        for (let e of E) D.push(v.addZone(e));
        ((v.mesh.userData.owner = `tokyo-crowd`),
          (ne.crowdMB = +(FY(v.mesh) / 1048576).toFixed(2)),
          e.scene.add(v.mesh),
          (Fe = {
            bearer: r.sets.festival
              .filter(([e]) => /happi/.test(r.looks[e].id))
              .map(([e]) => e),
            follower: r.sets.festival.map(([e]) => e),
            leader: r.sets.festival[0]?.[0] ?? 0,
          }),
          Fe.bearer.length || (Fe.bearer = Fe.follower),
          Re.setLooks({
            dry: [...r.sets.ginza, ...r.sets.akiba, ...r.sets.commute],
            rain: [...(r.sets.rainShop ?? []), ...(r.sets.rainTown ?? [])],
          }),
          (ne.looks = r.looks.length),
          (ne.zones = E.length),
          (ne.members = a));
      }
      (l || (u = OAe(e, d)), be());
      let T = oe();
      (await Ve.buildNow(T.x, T.z, (t) => e.loading(`culture: near`, t)),
        (ne.sitesMs = Math.round(f)),
        (ne.initMs = Math.round(performance.now() - n)),
        Object.assign(ne, d.counts),
        console.info(
          `[init] tokyo culture ${ne.initMs}ms (sites ${ne.sitesMs}ms: ${d.tiles.size} tiles, ${C} instances, ${d.shrines.length} shrines, ${d.gomi.length} ゴミ points, ${d.stallRuns.length} stall runs; crowd ${ne.members ?? 0} members in ${ne.zones ?? 0} zones, ${ne.looks ?? 0} looks)`,
        ));
    },
    start() {
      r ||
        (typeof window < `u` &&
          (window.__culture = {
            life: () => u?.stats() ?? null,
            doors: () => ({ ...M.counts, pending: M.pending }),
            stats: () => ({
              ...ne,
              claims: { ...C },
              batch: _
                ? {
                    count: _.count,
                    cap: _.capacity,
                    shown: _.shown,
                    tris: _.shownTris,
                  }
                : null,
              crowd: v
                ? {
                    members: v.members,
                    cap: v.capacity,
                    shown: v.shown,
                    tris: v.shownTris,
                  }
                : null,
              tiles: ee.size,
              state: { ...me },
            }),
            zones: () => (v ? D.map((e) => v.zoneInfo(e)) : []),
            sites: () => y,
            state: () => Ve.state(!0),
            procession: () => ({ active: Ie.active, x: Ie.x, z: Ie.z }),
            scramble: (e) => ({
              people: Re.count,
              crossing: Re.crossing,
              ...(e ? { walkers: Re.dump() } : {}),
            }),
            residency: Ve,
          }),
        e.events.on(`game:ready`, () => Ve.start()));
    },
    update(t) {
      if (r) return;
      let n = performance.now();
      (f.tick(), Ve.update(t));
      let i = e.camera.position;
      if ((_?.regather(i.x, i.z, se(), 8), (We -= t), We <= 0)) {
        if (
          ((We = 0.5), be(), me.matsuriDay && !Ie.active && y?.route.length)
        ) {
          let t = e.player?.position,
            n = y.route[0];
          t &&
            Math.hypot(t.x - n.x, t.z - n.z) < 900 &&
            (Ie.start(y.route, !0, { templeId: `kanda-myojin` }), (ze = !0));
        } else !me.matsuriDay && ze && Ie.active && (Ie.stop(), (ze = !1));
      }
      if (v) {
        if (((Ke -= t), Ke <= 0)) {
          Ke = 1;
          let t = ue(),
            n = e.env?.rain ?? 0;
          v.rain = n > 0.15;
          for (let e = 0; e < E.length; e++)
            v.setZone(D[e], !0, xe(E[e], t, n));
        }
        (Ie.update(t),
          Re.update(t, ue(), e.env?.rain ?? 0),
          v.update(e.camera, e.time.elapsed, (e.quality.mobile, 1)));
      }
      if ((Ae(t), Pe(t), M.update(24), u)) {
        if (We === 0.5) {
          let t = ue();
          ((d.hour = t),
            (d.rain = e.env?.rain ?? 0),
            (d.weekend = me.offDay),
            (d.hokoten = me.hokotenCrowd),
            d.hokotenK.set(pe),
            (d.children = f.state.children),
            (d.chime = f.state.chime),
            (d.park = pf(t, me.offDay)),
            (d.commute = Ese(t, me.offDay)),
            (d.market = me.market));
        }
        u.update(t, d);
      }
      ((Ge -= t), Ge <= 0 && ((Ge = 0.25), N()));
      let a = performance.now() - n;
      ((qe.ms += (a - qe.ms) * 0.05),
        (qe.msPeak = Math.max(a, qe.msPeak * 0.995)));
    },
    prewarm() {
      if (r || !g) return [];
      let e = m(),
        t = Ue.get(e);
      if (!t) {
        let n = new hr(`tokyo-culture-proto`, O(), [xY(5)[0]], 2, !0),
          r = new Float32Array([
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -50, 0, 1,
          ]);
        (n.add(0, r, 0, 0, 1e9),
          n.regather(0, 0, 1, 0, !0),
          (n.mesh.frustumCulled = !1),
          Ue.set(e, (t = [n.mesh])));
      }
      return t;
    },
  };
}
