// tokyo/assets/region-tokyo-BcM3fReU 314 — math
// Lines 123744-123943 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function rie(e) {
  e.ui = Qr(e, x1());
  let t = t1(e);
  ((e.audio = t.wrap(Nr(e, t))), (e.env = Zn(e, FX(e))));
  let { tiles: n, streets: r, buildings: i } = qJ(e);
  ((e.streets = r), (e.buildings = i));
  let a = cR(e);
  ((e.landmarks = a), MS());
  let o = (e.districts = pee(e)),
    s = JV(e);
  e.culture = s;
  let c = PW(e);
  e.transit = c;
  let l = Mx(e, Zr),
    { player: u, cameraRig: d } = _t(e);
  ((e.player = u),
    (e.cameraRig = d),
    XZ(e.region.signage.fonts),
    (e.vehicles = eee(e)),
    e.vehicles.addParkingSpots?.(qZ),
    a0(e),
    (e.traffic = nee(e, o0)),
    (Zt().keepClear = _0(e)),
    (e.peds = St(e, mE(e))));
  let f = i$(e);
  ((e.police = on(e)), (e.missions = iee(e, nie())));
  let p = o.unbuiltNear.bind(o);
  o.unbuiltNear = (e, t, r) =>
    p(e, t, r) ||
    n.residency.unbuiltNear(e, t, Math.min(r ?? 150, 150)) ||
    !!c.unbuiltNear?.(e, t, Math.min(r ?? 150, 150)) ||
    a.unbuiltNear(e, t, Math.min(r ?? 150, 150));
  let m = o.onArrival.bind(o);
  o.onArrival = (e) => {
    (m(e), n.residency.onArrival(e), c.onArrival?.(e), a.onArrival(e));
  };
  let h = o.ensureResident?.bind(o);
  o.ensureResident = (e, t, n, r) =>
    Promise.all([h?.(e, t, n, r), a.ensureResident(e, t)]).then(() => void 0);
  let g = ri(e);
  return [
    e.audio,
    t,
    e.env,
    n,
    a,
    o,
    s,
    c,
    l,
    u,
    e.vehicles,
    e.traffic,
    e.peds,
    f,
    e.police,
    e.missions,
    g,
    ti(e),
    d,
    e.ui,
  ];
}
var iie = {
    identity: { regionId: `tokyo`, mapVersion: Iw.mapVersion },
    name: { zh: `東京`, en: `Tokyo` },
    currency: `JPY`,
    drivingSide: `left`,
    signage: {
      lang: `ja`,
      fonts: { sans: Hi, serif: Ui },
      brands: Ga,
      fontsReady: Qi,
    },
    ready: () => Qi,
    utcOffsetHours: 9,
    env: {
      latitudeDeg: jw.originLat,
      longitudeDeg: jw.originLon,
      frameBearingDeg: jw.bearingDeg,
    },
    createPlan: () => JS(new ue({ dataset: Iw, ...jS() })),
    createSignals: (e) => new IS(e),
    createSystems: (e) => rie(e),
    createWorldBoundary: Kw,
  },
  aie = e({ armKartQa: () => sie, registerKartQa: () => $9 }),
  Q9 = `tokyo:qa_kart`;
function oie() {
  return new Promise((e) => {
    let t = Lt.prototype,
      n = t.update;
    t.update = function (r) {
      return ((t.update = n), e(this), n.call(this, r));
    };
  });
}
function $9(e) {
  let t = window;
  if (t.__kartQaDone) return !1;
  let n = e.params.get(`kart`) ?? ``,
    i = w4[n],
    a = e.missions?.registerMission;
  if (!i || typeof a != `function`) return !1;
  let o = e.params.get(`kartmode`),
    s = o === `tour` || o === `run` ? o : `race`,
    c =
      E4[e.params.get(`kartrun`) ?? (n === `akiba` ? `escape` : `grand`)] ??
      E4.grand,
    l = Math.max(1, Math.min(7, Number(e.params.get(`kartn`) ?? 7) || 7)),
    u = Number(e.params.get(`kartlaps`) ?? 0) || i.laps,
    d = T4[n],
    f = s === `tour` ? d.route[0] : s === `run` ? c.route[0] : i.start,
    p = { mode: s, circuit: n, result: null, t: 0 };
  if (
    ((window.__kartQa = p),
    !a.call(e.missions, {
      id: Q9,
      title: {
        zh: r.on
          ? r.t(`卡丁車測試：${i.name.zh}`, `カートテスト：${r.jz(i.name.zh)}`)
          : `卡丁車測試：${i.name.zh}`,
        en: `Kart QA: ${i.name.en}`,
      },
      description: {
        zh: `卡丁車比賽／導覽的測試任務（?kart=）。`,
        en: `QA mission for the kart race / tour runtime (?kart=).`,
      },
      category: `race`,
      reward: 0,
      start: { x: f.x, z: f.z },
      steps: [],
      noGiver: !0,
      noPolice: !0,
      repeatable: !0,
      source: `karts-qa`,
      async script(e) {
        let t = await oie(),
          n = performance.now();
        try {
          s === `race`
            ? (p.result = await Z4(t, {
                circuit: i,
                rivals: D4.slice(0, l),
                laps: u,
              }))
            : s === `run`
              ? (p.result = await g3(t, {
                  route: c.route,
                  guide: {
                    name: { zh: `轟`, en: `Todoroki`, ja: `轟` },
                    color: 13115436,
                    skill: 0.85,
                    costume: 3,
                  },
                  riders: D4.slice(0, 2),
                  stops: c.stops,
                }))
              : (p.result = await o3(t, {
                  route: d.route,
                  guide: {
                    name: { zh: `轟`, en: `Todoroki`, ja: `轟` },
                    color: 15909913,
                    skill: 0.8,
                    costume: 3,
                  },
                  riders: D4.slice(0, 2),
                  stops: d.stops,
                }));
        } catch (e) {
          throw ((p.error = String(e?.stack ?? e)), e);
        }
        ((p.t = Math.round((performance.now() - n) / 100) / 10),
          (e.vars.result = p.result),
          t.pass({ note: { zh: `測試完成`, en: `QA run complete` } }));
      },
    }))
  )
    return !1;
  if (((t.__kartQaDone = !0), e.params.get(`mission`) !== Q9)) {
    let t = 0,
      n = () => {
        e.missions.debug?.start?.(Q9) || (++t < 60 && setTimeout(n, 500));
      };
    setTimeout(n, 1500);
  }
  return !0;
}
function sie() {
  let e = 0,
    t = () => {
      let n = window.__game;
      if (n?.missions?.registerMission && n.time && n.time.frame > 2) {
        $9(n);
        return;
      }
      ++e < 600 && setTimeout(t, 250);
    };
  t();
}
