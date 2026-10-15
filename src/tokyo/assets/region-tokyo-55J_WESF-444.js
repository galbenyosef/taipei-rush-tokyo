// tokyo/assets/region-tokyo-55J_WESF 444 — math
// Lines 157426-157745 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
async function RRe(e, t) {
  let n = e.ctx,
    r = n.plan,
    i = n.params.has(`autosolve`),
    a = Ge(n),
    o = ht(r, t.route, !1),
    s = new rt(ut(r, o, 1, !1, 10), !1),
    c = s.length,
    l = t.riders?.length ?? 0;
  if (
    ((e.step = `kart-tour-start`),
    await e.hud.fade(1, 0.45),
    await r6(e, s),
    !e.alive)
  )
    return { score: 0, formationBreaks: 0, redLights: 0 };
  let u = e.playerVehicle,
    d;
  if (u?.kind === `kart` && e.dist(t.route[0].x, t.route[0].z) < 60)
    (s.project(u.body.x, u.body.z, Q3), (d = Q3.s));
  else {
    d = Math.min(c - 10, 7 * (l + 1) + 2);
    let n = a6(s, d, 0);
    if (
      ((u = l6(e, n.x, n.z, n.heading, t.playerColor ?? 15216682)),
      !u || !u.kart)
    )
      return (
        e.hud.fade(0, 0.4),
        e.fail({ zh: `卡丁車無法生成`, en: `The kart could not be spawned` }),
        { score: 0, formationBreaks: 0, redLights: 0 }
      );
    u6(e, u);
  }
  let f = u,
    p = f.kart;
  p.racing = !1;
  let m = (t, r, i, a) => {
      let o = a6(s, Math.max(0, Math.min(c - 2, r)), 0),
        l = (ge(`kart-tour`, i, Math.round(o.x), Math.round(o.z)) % 1e5) / 1e5,
        u = e.vehicle(`kart`, o.x, o.z, o.heading, {
          driver: `ai`,
          locked: !0,
          color: t.color,
          seed: l,
        });
      return !u || !u.kart
        ? null
        : ((u.driver = `ai`),
          (u.kart.costume = t.costume ?? 1 + (i % 4)),
          {
            v: u,
            drv: new wt(n, u, s, {
              maxSpeed: a,
              latAccel: 6.5,
              decel: 5.5,
              canReset: !0,
              avoid: !1,
              yieldToPlayer: i > 0,
            }),
            s: o ? Math.max(0, r) : 0,
            seg: 0,
            blockT: 0,
            passT: 0,
          });
    },
    h = m(t.guide, d + 8, 0, 10.5),
    g = [];
  for (let e = 0; e < l; e++) {
    let n = m(t.riders[e], d - 7 * (e + 1), e + 1, 12);
    n && g.push(n);
  }
  if (!h)
    return (
      e.hud.fade(0, 0.4),
      e.fail({
        zh: `導遊的卡丁車無法生成`,
        en: `The guide's kart could not be spawned`,
      }),
      { score: 0, formationBreaks: 0, redLights: 0 }
    );
  let _ = i
      ? new wt(n, f, s, {
          maxSpeed: 12,
          latAccel: 6.5,
          decel: 5.5,
          canReset: !0,
          avoid: !1,
        })
      : null,
    v = (t, n) => {
      let r = g6(e, t, 10 + Math.abs(t.speed) * 1.6);
      return r === 1 / 0 ? -1 : n + Math.max(0, r - 2.2);
    },
    y = (t, n, r, i) => {
      let a = t.passT > 0 ? -1 : v(t.v, t.s);
      ((t.blockT =
        a >= 0 &&
        (i < 0 || a < i - 0.5) &&
        a - t.s < 3 &&
        Math.abs(t.v.speed) < 0.5 &&
        m6(e, s, t.s, 0) < 0
          ? t.blockT + n
          : 0),
        t.blockT > 6 &&
          (T(
            `pass ${t === h ? `guide` : t.v === f ? `me` : `rider`} at ${Math.round(t.s)}`,
          ),
          (t.blockT = 0),
          (t.passT = 4),
          (t.drv.opts.avoid = !0),
          (t.drv.opts.swerve = 2.2)),
        t.passT > 0 && (t.passT -= n) <= 0 && (t.drv.opts.avoid = !1));
      let o = y6(v6(i, a), t.s);
      t.drv.update(n, r, o);
    },
    b = (t.stops ?? []).map(
      (e) => (s.project(e.x, e.z, Q3), { ...e, s: Q3.s, done: !1 }),
    ),
    x = new U3(n, `tour`),
    S = n.traffic,
    C = typeof S?.density == `number` ? S.density : null;
  C !== null && (S.density = C * 0.6);
  let w = [],
    T = (t) => {
      (w.push(`${k.toFixed(1)} ${t}`),
        w.length > 40 && w.shift(),
        (e.vars.kartLog = w));
    },
    E = !1,
    D = () => {
      E ||
        ((E = !0),
        x.remove(),
        (f.scripted &&= null),
        C !== null && (S.density = C));
    };
  (e.onCleanup(D), e.hud.fade(0, 0.6));
  let O = d6(e, t.guide.name);
  (e.queueLine(O, ze(a, t.guide.lines?.start?.[0] ?? J3.go)),
    e.objective({
      zh: `跟著導遊的卡丁車：保持隊形、靠左、紅燈停`,
      en: `Follow the guide's kart: keep in line, keep left, stop at red lights`,
    }),
    (e.step = `kart-tour`));
  let k = 0,
    A = 0,
    j = 0,
    ee = 0,
    M = 0,
    te = 0,
    ne = -1,
    re = 0,
    ie = 0,
    ae = -1,
    oe = 0,
    se = 0,
    ce = 0,
    le = -1,
    ue = !1,
    de = null,
    fe = 0,
    pe = !0,
    me = { kind: `kart`, x: f.body.x, z: f.body.z },
    he = (e) => (
      s.project(e.v.body.x, e.v.body.z, Q3, e.seg, 6),
      Q3.dist > 25 && s.project(e.v.body.x, e.v.body.z, Q3),
      (e.s = Q3.s),
      (e.seg = Q3.seg),
      Q3.dist
    ),
    _e = { v: f, s: d, seg: 0 },
    ve = _ ? { v: f, drv: _, s: d, seg: 0, blockT: 0, passT: 0 } : null,
    ye = !1;
  (e.every((i) => {
    if (E || ye) return;
    ((k += i), x.tick(i), he(h));
    for (let e of g) he(e);
    let o = he(_e),
      l = i6(s, _e.s, f.body.x, f.body.z),
      u = h.s - _e.s,
      d = Math.abs(f.speed),
      p = m6(e, s, h.s, Math.abs(h.v.speed)),
      m = b[ce];
    m &&
      !m.done &&
      (m.s - h.s < 90 && (p < 0 || m.s < p) && (p = m.s),
      le < 0 &&
        Math.abs(m.s - h.s) < 3 &&
        Math.abs(h.v.speed) < 0.5 &&
        ((le = 0),
        (ue = !!m.onStop),
        e.queueLine(O, ze(a, t.guide.lines?.final?.[0] ?? J3.stop)),
        n6(e, s),
        m.onStop &&
          e.branch(async () => {
            (await m.onStop(), (ue = !1));
          })),
      le >= 0 &&
        ((le += i),
        (p = h.s),
        le >= m.hold && !ue && ((m.done = !0), ce++, (le = -1))));
    let _ = 1;
    s.pointAt(h.s + 5, X3);
    let v = !!r.nodeAt(h.v.body.x, h.v.body.z) || !!r.nodeAt(X3.x, X3.z);
    (u > 45 && !v
      ? ((p = p < 0 ? h.s : Math.min(p, h.s)),
        re <= 0 && ((re = 14), e.queueLine(O, ze(a, J3.wait))))
      : u > 22 && (_ = 0.55),
      (re -= i),
      h.s > c - 6 && (p = c - 2),
      y(h, i, _, p));
    for (let t = 0; t < g.length; t++) {
      let n = g[t],
        r = v6(
          (t === 0 ? (o < 8 ? _e.s : h.s - 7) : g[t - 1].s) - 6.5,
          m6(e, s, n.s, Math.abs(n.v.speed)),
        );
      y(n, i, 1, r);
    }
    ve &&
      ((ve.s = _e.s),
      y(ve, i, 1, v6(Math.max(0, h.s - 7), m6(e, s, _e.s, d))),
      (f.scripted = f.controls));
    let S = e.playerVehicle === f,
      C = d < 1 && m6(e, s, _e.s, 0) >= 0;
    C ? (fe = 15) : (fe -= i);
    let w = fe > 0 && d > 1 && o < 3.5 && l > -4.5 && u > 0,
      D = le >= 0 || k < 5 || ae >= 0,
      ge = S && u >= 1.8 && u <= 30 && o < 3.5 && l > -4.5;
    if (
      ((pe = ge || C || w || D),
      D ||
        ((A += i),
        ge || C || w
          ? ((j += i), (ee = 0))
          : ((ee += i),
            ee > 2.5 &&
              ee - i <= 2.5 &&
              (M++,
              T(
                `break gap ${u.toFixed(1)} lat ${o.toFixed(1)} side ${l.toFixed(1)} inKart ${S}`,
              ),
              x.flash(
                n.t({
                  zh: `脫隊了！跟上導遊`,
                  en: `Out of formation — catch up with the guide`,
                }),
              )))),
      S)
    ) {
      se = 0;
      let t = r.nodeAt(f.body.x, f.body.z),
        i = t?.id ?? -1,
        o = Math.sin(f.heading),
        s = -Math.cos(f.heading),
        c = Math.abs(o) > Math.abs(s) ? `x` : `z`;
      for (let e of [2, 4.5, 7]) {
        let t = r.nodeAt(f.body.x + o * e, f.body.z + s * e);
        if (t && t.id !== i && n.signals.isSignalized(t.id)) {
          let e = p6(t, f.body.x, f.body.z);
          de = { id: t.id, red: n.signals.state(t.id, e) === `red` };
          break;
        }
      }
      (t &&
        i !== ne &&
        n.signals.isSignalized(i) &&
        d > 2.5 &&
        de?.id === i &&
        de.red &&
        (te++,
        T(
          `red node ${i} axis ${c} now ${n.signals.state(i, c)} spd ${d.toFixed(1)} s ${Math.round(_e.s)} guide ${Math.round(h.s)}`,
        ),
        x.flash(n.t({ zh: `闖紅燈！`, en: `Ran a red light!` })),
        ie <= 0 && ((ie = 10), e.queueLine(O, ze(a, J3.red)))),
        (ne = i));
    } else
      ((se += i),
        e.hud.prompt({ zh: `回到卡丁車上！`, en: `Get back in your kart!` }));
    ((ie -= i),
      ae < 0 &&
        h.s > c - 5 &&
        Math.abs(h.v.speed) < 0.6 &&
        ((ae = 0), e.queueLine(O, ze(a, t.guide.lines?.win?.[0] ?? J3.end))),
      ae >= 0 && ((ae += i), ((u < 25 && d < 1.5) || ae > 14) && (ye = !0)));
    let be = Math.max(
      0,
      Math.min(100, Math.round((100 * j) / Math.max(1, A)) - 15 * te),
    );
    ((oe -= i) <= 0 &&
      ((oe = 0.1), x.tour({ inFormation: pe, reds: te, score: be })),
      (e.vars.kartTour = {
        gap: Math.round(u),
        score: be,
        breaks: M,
        reds: te,
        s: Math.round(_e.s),
        L: Math.round(c),
      }),
      s.pointAt(Math.min(c, _e.s + 20), X3),
      (me.x = X3.x),
      (me.z = X3.z),
      (e.waitFor = me));
  }),
    await e.until(() => ye),
    (e.waitFor = null),
    D(),
    _ && (f.controls.hold = !0));
  let be = {
    score: Math.max(
      0,
      Math.min(100, Math.round((100 * j) / Math.max(1, A)) - 15 * te),
    ),
    formationBreaks: M,
    redLights: te,
  };
  return ((be.log = w.slice()), be);
}
