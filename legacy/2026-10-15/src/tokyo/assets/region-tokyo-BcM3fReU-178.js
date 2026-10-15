// tokyo/assets/region-tokyo-BcM3fReU 178 — math
// Lines 74235-75156 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function JV(e) {
  let t = e.plan,
    n = e.params,
    r = n.get(`culture`) === `0`,
    i = n.get(`crowd`),
    a = i === `0`,
    s = i && i !== `0` ? Math.max(0, Math.min(2, Number(i) || 1)) : 1,
    c = n.get(`matsuri`) === `1`,
    l = n.get(`life`) === `0`,
    d = null,
    f = {
      hour: 12,
      rain: 0,
      weekend: !1,
      hokoten: 0,
      park: 0,
      commute: 0,
      hokotenK: new Float32Array(8),
      commuteOf: (e) => p.commute(e),
    },
    p = I_(e),
    m = () => e.quality.materials,
    h = ie(),
    g = null,
    _ = null,
    v = null,
    y = null,
    b = 0,
    x = () => {
      if (!y) {
        let n = performance.now();
        ((y = bV(t, e.transit?.entrances ?? [], T)),
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
      ge(`opaque`, {
        policy: m(),
        map: g?.texture ?? null,
        batched: !0,
        name: `tokyo-culture`,
      }),
    k = () =>
      ge(`opaque`, { policy: m(), batched: !0, name: `tokyo-tiles-t1` }),
    A = new Map(),
    j = new WV(
      t,
      () => _,
      (e) => A.get(e) ?? -1,
    ),
    ee = new Map(),
    te = new Uint8Array(4096),
    ne = {},
    N = () => KV[e.quality.level] ?? 260,
    re = Number(n.get(`t2r`) ?? 0) || 0,
    ae = () => (re > 0 ? re : N() * 1.2 + 110),
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
    P = () => {
      let t = e.time;
      return (
        (ce.y = t.date?.y ?? 2026),
        (ce.m = t.date?.m ?? 10),
        (ce.d = t.date?.d ?? 1),
        (ce.wd = t.weekday ?? 4),
        ce
      );
    },
    le = () => e.env?.hour ?? 12,
    ue = (t.dataset.closures ?? [])
      .map((e, t) => ({ c: e, i: t }))
      .filter((e) => /hokoten/.test(e.c.id)),
    de = new Float32Array(8),
    fe = new Float32Array(8),
    pe = {
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
    me = (e, t) => {
      switch (e) {
        case vV.MARKET_OPEN:
          return pe.stalls;
        case vV.MARKET_CLOSED:
          return !pe.stalls;
        case vV.GOMI_OUT:
          return te[t] === 1;
        case vV.GOMI_IN:
          return te[t] !== 1;
        case vV.HOKOTEN:
          return de[t] > 0;
        case vV.MATSURI:
          return pe.matsuriDress;
        case vV.SAKURA:
          return pe.sakura;
        case vV.NIGHT_YATAI:
          return pe.nightYatai;
        case vV.FESTIVAL_STALLS:
          return pe.festStalls;
        case vV.RAIN:
          return pe.rainBags;
        case vV.LEAVES:
          return pe.leaves;
        case vV.SUMMER:
          return pe.summer;
        case vV.HANAMI:
          return pe.hanami;
        default:
          return !0;
      }
    },
    he = -1,
    _e = new Uint8Array(4096),
    ve = -1,
    ye = () => {
      let e = P(),
        t = le();
      ((pe.hokoten = 0), (pe.hokotenCrowd = 0));
      let n = 0;
      for (let { c: r, i } of ue)
        i >= de.length ||
          ((de[i] = Cee(r, e, t)),
          (fe[i] = Bp(r, e, t)),
          (pe.hokoten = Math.max(pe.hokoten, de[i])),
          (pe.hokotenCrowd = Math.max(pe.hokotenCrowd, fe[i])),
          de[i] > 0 && (n |= 1 << i));
      ((pe.matsuriDress = c || wee(e)),
        (pe.matsuriDay = c ? t >= 10 && t < 17 : Tee(e, t)),
        (pe.sakura = Dee(e) && t >= 9 && t < 21),
        (pe.nightYatai = (t >= 18.5 || t < 1) && e.wd >= 1 && e.wd <= 5),
        (pe.festStalls =
          ((pe.matsuriDress || Eee(e)) && t >= 9 && t < 21) || !1),
        (pe.market = Aee(t)),
        (pe.stalls = Oee(t)),
        (pe.offDay = e.wd === 0 || e.wd === 6 || Lp(e)));
      let r = e.y * 400 + e.m * 32 + e.d;
      r !== ve && ((ve = r), _e.fill(0));
      let i = p.state;
      ((pe.rainBags = i.rainK.umbrellaBags && t >= 7 && t < 23),
        (pe.leaves = i.season.ginkgoLeaves > 0.3),
        (pe.summer = i.season.summerFestival),
        (pe.hanami = i.season.hanami > 0 && t >= 6 && t < 22));
      let a =
        (n << 8) |
        (pe.matsuriDress ? 2 : 0) |
        (pe.sakura ? 4 : 0) |
        (pe.nightYatai ? 8 : 0) |
        (pe.festStalls ? 16 : 0) |
        (pe.stalls ? 32 : 0) |
        (pe.rainBags ? 64 : 0) |
        (pe.leaves ? 128 : 0) |
        (pe.summer ? 65536 : 0) |
        (pe.hanami ? 1 << 17 : 0);
      if (y)
        for (let n = 0; n < y.gomi.length; n++) {
          let r = y.gomi[n],
            i = !_e[n] && Up(r.group, r.pickup, e, t) ? 1 : 0;
          ((te[n] = i), (a = (Math.imul(a, 31) + i * (n + 7)) | 0));
        }
      if ((j.refresh(i.day, t), a !== he && ((he = a), _)))
        for (let e of ee.values())
          for (let t = 0; t < e.ids.length; t++) {
            let n = me(e.groups[t], e.params[t]);
            if (qV.has(e.groups[t])) {
              if (n && e.ids[t] < 0) {
                let n = e.src[t],
                  r = A.get(n.model) ?? -1;
                r >= 0 && (e.ids[t] = _.add(r, n.m, n.x, n.z, n.range, !0));
              } else
                !n && e.ids[t] >= 0 && (_.remove(e.ids[t]), (e.ids[t] = -1));
              continue;
            }
            _.setOn(e.ids[t], n);
          }
    },
    be = (e, t, n) => {
      let r = p.state,
        i = e.rainLooks ? 1 - 0.35 * Math.min(1, n * 1.5) : r.rainK.openAir,
        a;
      switch (e.kind) {
        case `hokoten`:
          a = fe[e.closure ?? 0] ?? 0;
          break;
        case `ginza`:
        case `akiba`:
          a = p.activity(
            e.district ?? (e.kind === `ginza` ? `ginza` : `akihabara`),
          );
          break;
        case `ameyoko`:
          ((a = Math.max(0.06, pe.market)),
            (e.id.startsWith(`vendor`) || e.id.startsWith(`browse`)) &&
              (a = +!!pe.stalls));
          break;
        case `park`: {
          let e = Math.min(1, n * 1.5);
          return Math.max(
            0,
            Math.min(1, Gp(t, pe.offDay) * Math.max(0.15, 1 - 0.8 * e) * s),
          );
        }
        case `platform`:
          return Math.max(
            0,
            Math.min(
              1,
              (0.6 * p.commute(`marunouchi`) +
                0.4 * p.commute(e.district ?? ``)) *
                s,
            ),
          );
        case `station`:
          if (((a = p.commute(e.district ?? ``)), e.mode === `stand`))
            return Math.max(
              0,
              Math.min(1, a * Math.max(0.3, r.rainK.plazaWait) * s),
            );
          break;
        case `gado`:
          a = Math.max(
            0.2 * p.activity(e.district ?? `kanda`),
            p.drinkers(e.district ?? `kanda`),
          );
          break;
        case `matsuri`:
          a =
            pe.matsuriDay || (Ne.active && Ne.templeId === `kanda-myojin`)
              ? 1
              : 0;
          break;
        case `fair-shrine`:
          a = +!!pe.festStalls;
          break;
        case `fair-sakura`:
          a = +!!pe.sakura;
          break;
        case `fair-oden`:
          return pe.nightYatai && n < 0.2 ? 1 : 0;
      }
      return Math.max(0, Math.min(1, a * i * s));
    },
    xe = [],
    Se = [],
    Ce = 0,
    we = new o(),
    Te = new M(),
    Ee = new u(),
    De = (t, n, r) => (
      Te.multiplyMatrices(
        e.camera.projectionMatrix,
        e.camera.matrixWorldInverse,
      ),
      we.setFromProjectionMatrix(
        Te,
        e.camera.coordinateSystem,
        e.camera.reversedDepth,
      ),
      Ee.center.set(t, 1.5, n),
      (Ee.radius = r),
      we.intersectsSphere(Ee)
    ),
    Oe = (n) => {
      if (((Ce -= n), Ce > 0 || !y || !e.vehicles?.spawn)) return;
      Ce = 2;
      let r = e.player?.position;
      if (!r) return;
      for (let t = xe.length - 1; t >= 0; t--) {
        let n = xe[t];
        ((n.t += 2),
          n.t >= 75 && !_e[n.point] && ((_e[n.point] = 1), (Be = 0)));
        let i = n.v,
          a = i.object.position,
          o = Math.hypot(a.x - r.x, a.z - r.z) > 70 && !De(a.x, a.z, 4);
        if (e.vehicles.playerVehicle === i) {
          xe.splice(t, 1);
          continue;
        }
        if ((n.t >= 75 && o) || Math.hypot(a.x - r.x, a.z - r.z) > 220) {
          try {
            e.vehicles.despawn(i);
          } catch {}
          (_e[n.point] || (_e[n.point] = 1), xe.splice(t, 1), (Be = 0));
        }
      }
      Se.length = 0;
      for (let e of xe)
        Se.push({
          x: e.v.object.position.x,
          z: e.v.object.position.z,
          heading: e.v.heading ?? 0,
          playing: !1,
        });
      if (xe.length >= 1) return;
      let i = le();
      if (i < 7.5 || i > 11.2) return;
      let a = -1,
        o = 1 / 0;
      for (let e = 0; e < y.gomi.length; e++) {
        if (!te[e]) continue;
        let t = y.gomi[e],
          n = Math.hypot(t.x - r.x, t.z - r.z);
        n < 45 || n > 150 || n >= o || De(t.x, t.z, 6) || ((a = e), (o = n));
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
      if (!De(g, _, 4))
        try {
          let t = e.vehicles.spawn(`garbage`, g, _, d, { driver: `none` });
          xe.push({ v: t, point: a, t: 0 });
        } catch {}
    },
    ke = [],
    Ae = 0,
    F = (e) => {
      try {
        ke[e].h.release();
      } catch {}
      ke.splice(e, 1);
    },
    je = (t) => {
      if (((Ae -= t), Ae > 0 || !y || !e.peds?.spawnScripted)) return;
      Ae = 1;
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
      for (let e = ke.length - 1; e >= 0; e--) {
        let t = ke[e];
        (!pe.stalls || !t.h.alive || Math.hypot(t.x - n.x, t.z - n.z) > 24) &&
          F(e);
      }
      if (pe.stalls)
        for (let t = 0; t < y.stallRuns.length && ke.length < 6; t++) {
          if (ke.some((e) => e.run === t)) continue;
          let i = r(t);
          if (Math.hypot(i.x - n.x, i.z - n.z) > 17) continue;
          let a = e.peds.spawnScripted(i.x, i.z, {
            heading: i.h,
            kind: `vendor`,
            pose: `idle`,
          });
          if (!a) break;
          (a.stop(`idle`, i.h), ke.push({ run: t, x: i.x, z: i.z, h: a }));
        }
    },
    Me = { bearer: [0], follower: [0], leader: 0 },
    Ne = new RV(
      e,
      () => v,
      () => Me,
      () => (v ? v.frames - TV.length : 0),
    ),
    Pe = !1,
    Fe = {
      name: `cu`,
      radius: ae,
      dropMargin: 150,
      dropAfterS: 10,
      lookaheadMaxSpeed: 40 / 3.6,
      keys: [],
      box: (e) => Kc(e),
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
                let r = A.get(t.model) ?? -1;
                ((e.groups[n] = t.group), (e.params[n] = t.param));
                let i = me(t.group, t.param);
                if (r < 0 || (!i && qV.has(t.group))) {
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
    Ie = new di(e, {
      spawn: oe,
      owner: `tokyo-culture`,
      popRadius: () => N(),
      requestRadius: () => Math.max(60, ae() - 110),
    }),
    Le = { market: 0, festival: 0, hokoten: 0, crowd: 0 },
    Re = () => {
      let n = e.player?.position ?? e.camera.position,
        r = y?.market;
      if (r) {
        let e = Math.max(0, Math.abs(n.x - r.x) - r.hx),
          t = Math.max(0, Math.abs(n.z - r.z) - r.hz);
        Le.market = pe.market * Math.max(0, 1 - Math.hypot(e, t) / 45);
      }
      Le.festival = Ne.active
        ? Math.max(0, 1 - Math.hypot(n.x - Ne.x, n.z - Ne.z) / 120)
        : 0;
      let i = 0;
      for (let { c: e, i: r } of ue) {
        if (!(de[r] > 0)) continue;
        let a = t.roads.find((t) => t.id === e.road);
        if (!a) continue;
        let o = a.axis === `z` ? n.z : n.x,
          s = Math.abs((a.axis === `z` ? n.x : n.z) - a.at),
          c = Math.min(e.from, e.to),
          l = Math.max(e.from, e.to),
          u = Math.max(0, c - o, o - l) + Math.max(0, s - a.halfTotal);
        i = Math.max(i, de[r] * Math.max(0, 1 - u / 60));
      }
      ((Le.hokoten = i),
        (Le.crowd = v ? v.shown / Math.max(1, v.capacity) : 0));
    };
  e.events.on(`quality:changed`, () => {
    (_ && ((_.mesh.material = O()), (_.mesh.castShadow = e.quality.shadows)),
      v && (v.mesh.material = k()));
  });
  let ze = new Map(),
    Be = 0,
    Ve = 0,
    He = 0,
    Ue = {
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
    garbageTrucks: Se,
    get marketsOpen() {
      return pe.market > 0.5;
    },
    startProcession(e, t) {
      if (!y || (e && !/^kanda/.test(e))) return !1;
      let n = t?.route && t.route.length > 1 ? t.route : y.route;
      return (
        (Pe = !1),
        Ne.start(n, !t?.route, {
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
      return Ne.active
        ? {
            active: !0,
            x: Ne.x,
            z: Ne.z,
            templeId: Ne.templeId,
            theme: `mikoshi`,
          }
        : null;
    },
    stopProcession() {
      ((Pe = !1), Ne.stop());
    },
    driveProcession(e) {
      Ne.drive(e);
    },
    setProcessionHead(e, t) {
      Ne.setHead(e, t);
    },
    get garbageService() {
      let e = P();
      return {
        today: Hp(0, e) !== null || Hp(1, e) !== null || Hp(2, e) !== null,
        weekday: e.wd,
      };
    },
    get gomi() {
      return y?.gomi ?? [];
    },
    gomiAt(e) {
      let t = y?.gomi[e];
      if (!t) return { today: null, out: !1 };
      let n = P();
      return { today: Hp(t.group, n), out: Up(t.group, t.pickup, n, le()) };
    },
    get hokoten() {
      return pe.hokoten;
    },
    hokotenAt(e) {
      return de[e] ?? 0;
    },
    get lifeSites() {
      return y?.life ?? null;
    },
    shopDoors: r
      ? void 0
      : { add: (e, t) => j.add(e, t), remove: (e) => j.remove(e) },
    ambience: Le,
    get matsuri() {
      return { dressing: pe.matsuriDress, procession: pe.matsuriDay };
    },
    get debugStats() {
      return (
        (Ue.figures = v?.shown ?? 0),
        (Ue.tris = (_?.shownTris ?? 0) + (v?.shownTris ?? 0)),
        (Ue.drawCalls = (_ && _.shown ? 1 : 0) + (v && v.shown ? 1 : 0)),
        Ue
      );
    },
    onPackBuilt: (e) => Ie.onPackBuilt(e),
    onPackDropped: (e) => Ie.onPackDropped(e),
    ensureResident: (e, t, n) =>
      r ? Promise.resolve() : Ie.ensureResident(e, t, n),
    residency() {
      let e = {};
      for (let [t, n] of Object.entries(Ie.state(!0)))
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
        u = x(),
        f = b || performance.now() - c,
        p = [...u.tiles.keys()].sort((e, t) => e - t);
      ((Fe.keys = p), Ie.addLayer(Fe));
      let m = (() => {
        let e = u.market;
        return (e ? t.dataset.labels.areaAt?.(e.x, e.z) : null)?.ward.ja ?? ``;
      })();
      ((g = new xz(
        o ? 0.5 : 1,
        i.fonts.sans,
        i.fonts.serif,
        i.lang,
        Math.min(8, e.renderer.gl.capabilities.getMaxAnisotropy()),
        m,
      )),
        await e.yieldFrame());
      let y = t.roads.find((e) => e.id === `ameyoko`),
        S = gV(y ? y.halfTotal - 0.15 : 5),
        C = 0;
      for (let e of u.tiles.values()) C += e.inst.length;
      ((_ = new Ii(
        `tokyo-culture`,
        O(),
        S,
        C + 64 + (e.quality.mobile || e.quality.level === `low` ? 3e3 : 6e3),
        e.quality.shadows,
      )),
        _.enableCulling(e.camera));
      for (let [e, t] of _.models) A.set(e, t);
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
      let w = GV(_.mesh) / 1048576;
      if (
        (nz(_.mesh),
        (ne.kitMB = +w.toFixed(2)),
        e.scene.add(_.mesh),
        await e.yieldFrame(),
        !a)
      ) {
        let n = !e.quality.mobile && e.quality.level !== `low`,
          r = wV(n),
          i = e.quality.mobile
            ? 0.45
            : e.quality.level === `low`
              ? 0.5
              : e.quality.level === `medium`
                ? 0.75
                : e.quality.level === `ultra`
                  ? 1.15
                  : 1;
        E = DV(
          t,
          u,
          r,
          i * (h >= 2 ? 0.7 : 1),
          !!e.quality.mobile || e.quality.level === `low`,
        );
        let a = 0;
        for (let e of E) a += e.count;
        let o = 0;
        v = await ez.create({
          name: `tokyo-crowd`,
          material: k(),
          looks: r.looks,
          walkFrames: n ? 8 : 6,
          extraPoses: TV,
          props: [OV()],
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
          capacity: a + 64,
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
          (ne.crowdMB = +(GV(v.mesh) / 1048576).toFixed(2)),
          e.scene.add(v.mesh),
          (Me = {
            bearer: r.sets.festival
              .filter(([e]) => /happi/.test(r.looks[e].id))
              .map(([e]) => e),
            follower: r.sets.festival.map(([e]) => e),
            leader: r.sets.festival[0]?.[0] ?? 0,
          }),
          Me.bearer.length || (Me.bearer = Me.follower),
          (ne.looks = r.looks.length),
          (ne.zones = E.length),
          (ne.members = a));
      }
      (l || (d = zV(e, u)), ye());
      let T = oe();
      (await Ie.buildNow(T.x, T.z, (t) => e.loading(`culture: near`, t)),
        (ne.sitesMs = Math.round(f)),
        (ne.initMs = Math.round(performance.now() - n)),
        Object.assign(ne, u.counts),
        console.info(
          `[init] tokyo culture ${ne.initMs}ms (sites ${ne.sitesMs}ms: ${u.tiles.size} tiles, ${C} instances, ${u.shrines.length} shrines, ${u.gomi.length} ゴミ points, ${u.stallRuns.length} stall runs; crowd ${ne.members ?? 0} members in ${ne.zones ?? 0} zones, ${ne.looks ?? 0} looks)`,
        ));
    },
    start() {
      r ||
        (typeof window < `u` &&
          (window.__culture = {
            life: () => d?.stats() ?? null,
            doors: () => ({ ...j.counts, pending: j.pending }),
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
              state: { ...pe },
            }),
            zones: () => (v ? D.map((e) => v.zoneInfo(e)) : []),
            sites: () => y,
            state: () => Ie.state(!0),
            procession: () => ({ active: Ne.active, x: Ne.x, z: Ne.z }),
            residency: Ie,
          }),
        e.events.on(`game:ready`, () => Ie.start()));
    },
    update(t) {
      if (r) return;
      let n = performance.now();
      (p.tick(), Ie.update(t));
      let i = e.camera.position;
      if ((_?.regather(i.x, i.z, se(), 8), (Be -= t), Be <= 0)) {
        if (
          ((Be = 0.5), ye(), pe.matsuriDay && !Ne.active && y?.route.length)
        ) {
          let t = e.player?.position,
            n = y.route[0];
          t &&
            Math.hypot(t.x - n.x, t.z - n.z) < 900 &&
            (Ne.start(y.route, !0, { templeId: `kanda-myojin` }), (Pe = !0));
        } else !pe.matsuriDay && Pe && Ne.active && (Ne.stop(), (Pe = !1));
      }
      if (v) {
        if (((He -= t), He <= 0)) {
          He = 1;
          let t = le(),
            n = e.env?.rain ?? 0;
          v.rain = n > 0.15;
          for (let e = 0; e < E.length; e++)
            v.setZone(D[e], !0, be(E[e], t, n));
        }
        (Ne.update(t),
          v.update(e.camera, e.time.elapsed, (e.quality.mobile, 1)));
      }
      if ((Oe(t), je(t), j.update(24), d)) {
        if (Be === 0.5) {
          let t = le();
          ((f.hour = t),
            (f.rain = e.env?.rain ?? 0),
            (f.weekend = pe.offDay),
            (f.hokoten = pe.hokotenCrowd),
            f.hokotenK.set(fe),
            (f.children = p.state.children),
            (f.chime = p.state.chime),
            (f.park = Gp(t, pe.offDay)),
            (f.commute = kee(t, pe.offDay)),
            (f.market = pe.market));
        }
        d.update(t, f);
      }
      ((Ve -= t), Ve <= 0 && ((Ve = 0.25), Re()));
      let a = performance.now() - n;
      ((Ue.ms += (a - Ue.ms) * 0.05),
        (Ue.msPeak = Math.max(a, Ue.msPeak * 0.995)));
    },
    prewarm() {
      if (r || !g) return [];
      let e = m(),
        t = ze.get(e);
      if (!t) {
        let n = new Ii(`tokyo-culture-proto`, O(), [gV(5)[0]], 2, !0),
          r = new Float32Array([
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -50, 0, 1,
          ]);
        (n.add(0, r, 0, 0, 1e9),
          n.regather(0, 0, 1, 0, !0),
          (n.mesh.frustumCulled = !1),
          ze.set(e, (t = [n.mesh])));
      }
      return t;
    },
  };
}
