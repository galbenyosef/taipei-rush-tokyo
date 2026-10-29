// tokyo/assets/region-tokyo-A7LxHjud 86 — day
// Lines 38749-38908 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var Rm = new WeakMap(),
  mle = {
    sakura: [3, 31],
    hanafubuki: [4, 5],
    summer: [7, 25],
    ginkgo: [11, 30],
    momiji: [12, 2],
    winter: [1, 20],
  };
function zm(e) {
  let t = Rm.get(e);
  return (t || Rm.set(e, (t = hle(e))), t);
}
function hle(e) {
  let t = e.params?.get(`lifeday`),
    n = t && /^\d{4}-\d{2}-\d{2}$/.test(t) ? t.split(`-`).map(Number) : null,
    r = e.params?.get(`season`) ?? null,
    i = {
      day: mf(2026, 10, 1),
      hour: 12,
      rain: 0,
      season: { hotDrinks: !1, summerFestival: !1, hanami: 0, ginkgoLeaves: 0 },
      seasonDay: { m: 10, d: 1 },
      chime: 0,
      children: 0,
      students: 0,
      lunch: 0,
      lastTrain: 0,
      rainK: { umbrellaBags: !1, plazaWait: 1, openAir: 1 },
      rev: 0,
    },
    a = [],
    o = [],
    s = new Map(),
    c = (e) => {
      let t = s.get(e);
      if (t) for (let e of t) e(i);
    },
    l = -1e9,
    u = -1,
    d = !1,
    f = !1,
    p = !1,
    m = -1,
    h = -1,
    g = () => {
      let t = e.time,
        o = n ? n[0] : (t?.date?.y ?? 2026),
        s = n ? n[1] : (t?.date?.m ?? 10),
        l = n ? n[2] : (t?.date?.d ?? 1),
        g = o * 400 + s * 32 + l;
      if (g !== u) {
        if (
          (mf(o, s, l, n ? void 0 : (t?.weekday ?? void 0), i.day), h !== g)
        ) {
          h = g;
          let e = r ? mle[r] : void 0;
          ((i.seasonDay.m = e ? e[0] : s),
            (i.seasonDay.d = e ? e[1] : l),
            Jse(
              e ? mf(o, e[0], e[1]) : i.day,
              cu({ y: o, m: s, d: l }, r),
              i.season,
            ));
        }
        u >= 0 ? ((u = g), c(`day`)) : (u = g);
      }
      let _ = e.env?.hour ?? 12;
      ((i.hour = _),
        (i.rain = e.env?.rain ?? 0),
        (i.chime = Wse(_)),
        (i.children = Gse(i.day, _)),
        (i.students = Df(i.day, _)),
        (i.lunch = Of(i.day, _)),
        (i.lastTrain = Use(i.day, _)));
      let y = Yse(i.rain);
      ((i.rainK.umbrellaBags = y.umbrellaBags),
        (i.rainK.plazaWait = y.plazaWait),
        (i.rainK.openAir = y.openAir),
        i.rev++,
        ple(i.day, _));
      let b = i.chime > 0;
      (b && !d && c(`chime`), (d = b));
      let x = i.rain > 0.15;
      (x !== f && c(`rain`), (f = x));
      let S = i.lastTrain > 0.3;
      (S && !p && c(`lastTrain`), (p = S));
      let C = +!!Af(`ginza`, i.day, _) | (Af(`akihabara`, i.day, _) ? 2 : 0);
      (m >= 0 && C !== m && c(`hokoten`), (m = C));
      for (let e of a)
        try {
          e.update(i, v);
        } catch (t) {
          console.warn(`[life] behaviour ${e.id} failed`, t);
        }
    },
    _ = () => {
      let t = e.time?.elapsed ?? 0,
        n = e.env?.hour ?? 12;
      return (
        (t - l >= 0.5 || t < l || Math.abs(n - i.hour) > 0.25) &&
          ((l = t), g()),
        i
      );
    },
    v = {
      get state() {
        return _();
      },
      activity: (e) => Ise(e, _().day, i.hour),
      commute: (e) => Vse(e, _().day, i.hour),
      flow: (e) => Hse(e, _().day, i.hour),
      drinkers: (e) => kf(e, _().day, i.hour),
      shop: (e, t) => Cf(yf(e) ?? bf(t ?? ``), _().day, i.hour),
      hours: (e, t) => yf(e) ?? bf(t ?? ``),
      hokoten: (e) => Af(e, _().day, i.hour),
      pedMix: (e, t) => Fm(e, t),
      behaviour(e) {
        return (
          a.push(e),
          () => {
            let t = a.indexOf(e);
            (t >= 0 && a.splice(t, 1), e.dispose?.());
          }
        );
      },
      addSpots(e) {
        o.push(...e);
      },
      spots: o,
      on(e, t) {
        let n = s.get(e);
        return (
          n || s.set(e, (n = [])),
          n.push(t),
          () => {
            let e = n.indexOf(t);
            e >= 0 && n.splice(e, 1);
          }
        );
      },
      tick: _,
    };
  return (
    typeof window < `u` &&
      (window.__life = {
        state: () => JSON.parse(JSON.stringify(_())),
        shop: (e, t) => v.shop(e, t),
        at: (e) => ({
          activity: v.activity(e),
          commute: v.commute(e),
          flow: v.flow(e),
          drinkers: v.drinkers(e),
          hokoten: v.hokoten(e),
        }),
        spots: () => o.length,
      }),
    v
  );
}
