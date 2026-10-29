// tokyo/assets/region-tokyo-A7LxHjud 492 — params
// Lines 177736-177954 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function JHe(e) {
  e.ui = $te(e, gLe());
  let n = nLe(e);
  ((e.audio = n.wrap(Cte(e, n))), (e.env = gte(e, gFe(e))));
  let { tiles: r, streets: i, buildings: a } = lPe(e);
  ((e.streets = i), (e.buildings = a));
  let o = OOe(e);
  ((e.landmarks = o), _de());
  let s = (e.districts = tne(e)),
    c = PAe(e);
  e.culture = c;
  let l = iMe(e);
  e.transit = l;
  let u = Jue(e, Jte),
    { player: d, cameraRig: f } = Vee(e);
  ((e.player = d),
    (e.cameraRig = f),
    QFe(e.region.signage.fonts),
    (e.vehicles = aee(e)),
    oe &&
      Wee(e, e.vehicles, () =>
        t(
          () => import(`./heli-C2W-6EbV.js`).then((e) => e.t),
          __vite__mapDeps([
            48, 1, 3, 2, 4, 5, 6, 7, 12, 9, 13, 8, 10, 11, 14, 15, 16, 17, 18,
          ]),
        ),
      ),
    e.vehicles.addParkingSpots?.(YFe),
    VLe(e),
    (e.traffic = see(e, HLe)),
    (fee().keepClear = eRe(e)),
    (e.peds = oee(e, Dpe(e))));
  let p = kIe(e);
  ((e.police = Pee(e)), (e.missions = Nee(e, qHe())));
  let m = s.unbuiltNear.bind(s);
  s.unbuiltNear = (e, t, n) =>
    m(e, t, n) ||
    r.residency.unbuiltNear(e, t, Math.min(n ?? 150, 150)) ||
    !!l.unbuiltNear?.(e, t, Math.min(n ?? 150, 150)) ||
    o.unbuiltNear(e, t, Math.min(n ?? 150, 150));
  let h = s.onArrival.bind(s);
  s.onArrival = (e) => {
    (h(e), r.residency.onArrival(e), l.onArrival?.(e), o.onArrival(e));
  };
  let g = s.ensureResident?.bind(s);
  s.ensureResident = (e, t, n, r) =>
    Promise.all([g?.(e, t, n, r), o.ensureResident(e, t)]).then(() => void 0);
  let _ = ene(e),
    v = WLe(e);
  return [
    Yte(e),
    e.audio,
    n,
    e.env,
    r,
    o,
    s,
    c,
    l,
    NOe(e),
    zOe(e),
    u,
    d,
    e.vehicles,
    e.traffic,
    v,
    e.peds,
    p,
    e.police,
    e.missions,
    _,
    Zte(e),
    f,
    e.ui,
  ];
}
var YHe = {
    identity: { regionId: `tokyo`, mapVersion: Ub.mapVersion },
    name: { zh: `東京`, en: `Tokyo` },
    currency: `JPY`,
    drivingSide: `left`,
    signage: {
      lang: `ja`,
      fonts: { sans: vr, serif: yr },
      brands: Ene,
      fontsReady: Tr,
    },
    ready: () => Tr,
    utcOffsetHours: 9,
    env: {
      latitudeDeg: Vb.originLat,
      longitudeDeg: Vb.originLon,
      frameBearingDeg: Vb.bearingDeg,
    },
    createPlan: () => Sde(new Ce({ dataset: Ub, ...gde() })),
    createSignals: (e) => new lv(e),
    createSystems: (e) => JHe(e),
    createWorldBoundary: Gfe,
  },
  XHe = e({ armKartQa: () => QHe, registerKartQa: () => $9 }),
  Q9 = `tokyo:qa_kart`;
function ZHe() {
  return new Promise((e) => {
    let t = See.prototype,
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
    i = Y3[n],
    a = e.missions?.registerMission;
  if (!i || typeof a != `function`) return !1;
  let o = e.params.get(`kartmode`),
    s = o === `tour` || o === `run` ? o : `race`,
    c =
      X3[e.params.get(`kartrun`) ?? (n === `akiba` ? `escape` : `grand`)] ??
      X3.grand,
    l = Math.max(1, Math.min(7, Number(e.params.get(`kartn`) ?? 7) || 7)),
    u = Number(e.params.get(`kartlaps`) ?? 0) || i.laps,
    d = QRe[n],
    f = s === `tour` ? d.route[0] : s === `run` ? c.route[0] : i.start,
    p = e.params.get(`kartdate`) ?? ``;
  if (/^\d{4}-\d{2}-\d{2}$/.test(p))
    try {
      e.time.setDate?.(p);
    } catch {}
  let m = { mode: s, circuit: n, result: null, t: 0 };
  if (
    ((window.__kartQa = m),
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
        let t = await ZHe(),
          n = performance.now();
        try {
          s === `race`
            ? (m.result = await v6(t, {
                circuit: i,
                rivals: Z3.slice(0, l),
                laps: u,
              }))
            : s === `run`
              ? (m.result = await A6(t, {
                  route: c.route,
                  guide: {
                    name: { zh: `轟`, en: `Todoroki`, ja: `轟` },
                    color: 13115436,
                    skill: 0.85,
                    costume: 3,
                  },
                  riders: Z3.slice(0, 2),
                  stops: c.stops,
                }))
              : (m.result = await cze(t, {
                  route: d.route,
                  guide: {
                    name: { zh: `轟`, en: `Todoroki`, ja: `轟` },
                    color: 15909913,
                    skill: 0.8,
                    costume: 3,
                  },
                  riders: Z3.slice(0, 2),
                  stops: d.stops,
                }));
        } catch (e) {
          throw ((m.error = String(e?.stack ?? e)), e);
        }
        ((m.t = Math.round((performance.now() - n) / 100) / 10),
          (e.vars.result = m.result),
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
function QHe() {
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
