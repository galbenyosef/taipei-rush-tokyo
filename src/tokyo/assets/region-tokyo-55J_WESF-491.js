// tokyo/assets/region-tokyo-55J_WESF 491 — math
// Lines 176836-177039 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function mHe(e) {
  e.ui = qte(e, tLe());
  let t = VIe(e);
  ((e.audio = t.wrap(yte(e, t))), (e.env = ote(e, tFe(e))));
  let { tiles: n, streets: r, buildings: i } = JNe(e);
  ((e.streets = r), (e.buildings = i));
  let a = mOe(e);
  ((e.landmarks = a), ade());
  let o = (e.districts = Ute(e)),
    s = bAe(e);
  e.culture = s;
  let c = Uje(e);
  e.transit = c;
  let l = Iue(e, Yte),
    { player: u, cameraRig: d } = uee(e);
  ((e.player = u),
    (e.cameraRig = d),
    LFe(e.region.signage.fonts),
    (e.vehicles = cee(e)),
    e.vehicles.addParkingSpots?.(PFe),
    ELe(e),
    (e.traffic = Oee(e, DLe)),
    (Dee().keepClear = zLe(e)),
    (e.peds = gee(e, hpe(e))));
  let f = mIe(e);
  ((e.police = Pee(e)), (e.missions = Nee(e, pHe())));
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
  let g = Jte(e),
    _ = kLe(e);
  return [
    e.audio,
    t,
    e.env,
    n,
    a,
    o,
    s,
    c,
    yOe(e),
    TOe(e),
    l,
    u,
    e.vehicles,
    e.traffic,
    _,
    e.peds,
    f,
    e.police,
    e.missions,
    g,
    Gte(e),
    d,
    e.ui,
  ];
}
var hHe = {
    identity: { regionId: `tokyo`, mapVersion: Bb.mapVersion },
    name: { zh: `東京`, en: `Tokyo` },
    currency: `JPY`,
    drivingSide: `left`,
    signage: {
      lang: `ja`,
      fonts: { sans: vr, serif: yr },
      brands: vne,
      fontsReady: Tr,
    },
    ready: () => Tr,
    utcOffsetHours: 9,
    env: {
      latitudeDeg: Rb.originLat,
      longitudeDeg: Rb.originLon,
      frameBearingDeg: Rb.bearingDeg,
    },
    createPlan: () => ude(new Ne({ dataset: Bb, ...ide() })),
    createSignals: (e) => new ov(e),
    createSystems: (e) => mHe(e),
    createWorldBoundary: Nfe,
  },
  gHe = e({ armKartQa: () => vHe, registerKartQa: () => $9 }),
  Q9 = `tokyo:qa_kart`;
function _He() {
  return new Promise((e) => {
    let t = xee.prototype,
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
    i = G3[n],
    a = e.missions?.registerMission;
  if (!i || typeof a != `function`) return !1;
  let o = e.params.get(`kartmode`),
    s = o === `tour` || o === `run` ? o : `race`,
    c =
      K3[e.params.get(`kartrun`) ?? (n === `akiba` ? `escape` : `grand`)] ??
      K3.grand,
    l = Math.max(1, Math.min(7, Number(e.params.get(`kartn`) ?? 7) || 7)),
    u = Number(e.params.get(`kartlaps`) ?? 0) || i.laps,
    d = jRe[n],
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
        let t = await _He(),
          n = performance.now();
        try {
          s === `race`
            ? (p.result = await f6(t, {
                circuit: i,
                rivals: q3.slice(0, l),
                laps: u,
              }))
            : s === `run`
              ? (p.result = await w6(t, {
                  route: c.route,
                  guide: {
                    name: { zh: `轟`, en: `Todoroki`, ja: `轟` },
                    color: 13115436,
                    skill: 0.85,
                    costume: 3,
                  },
                  riders: q3.slice(0, 2),
                  stops: c.stops,
                }))
              : (p.result = await RRe(t, {
                  route: d.route,
                  guide: {
                    name: { zh: `轟`, en: `Todoroki`, ja: `轟` },
                    color: 15909913,
                    skill: 0.8,
                    costume: 3,
                  },
                  riders: q3.slice(0, 2),
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
function vHe() {
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
