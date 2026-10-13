// tokyo__assets__region-tokyo-BcM3fReU 270 — math
// Lines 105028-105347 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function o3(e, t) {
  let n = e.ctx,
    r = n.plan,
    i = n.params.has(`autosolve`),
    a = Ie(n),
    o = Je(r, t.route, !1),
    s = new lt(En(r, o, 1, !1, 10), !1),
    c = s.length,
    l = t.riders?.length ?? 0;
  if (
    ((e.step = `kart-tour-start`),
    await e.hud.fade(1, 0.45),
    await z4(e, s),
    !e.alive)
  )
    return { score: 0, formationBreaks: 0, redLights: 0 };
  let u = e.playerVehicle,
    d;
  if (u?.kind === `kart` && e.dist(t.route[0].x, t.route[0].z) < 60)
    (s.project(u.body.x, u.body.z, N4), (d = N4.s));
  else {
    d = Math.min(c - 10, 7 * (l + 1) + 2);
    let n = V4(s, d, 0);
    if (
      ((u = K4(e, n.x, n.z, n.heading, t.playerColor ?? 15216682)),
      !u || !u.kart)
    )
      return (
        e.hud.fade(0, 0.4),
        e.fail({ zh: `卡丁車無法生成`, en: `The kart could not be spawned` }),
        { score: 0, formationBreaks: 0, redLights: 0 }
      );
    J4(e, u);
  }
  let f = u,
    p = f.kart;
  p.racing = !1;
  let m = (t, r, i, a) => {
      let o = V4(s, Math.max(0, Math.min(c - 2, r)), 0),
        l = (P(`kart-tour`, i, Math.round(o.x), Math.round(o.z)) % 1e5) / 1e5,
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
            drv: new Nt(n, u, s, {
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
      ? new Nt(n, f, s, {
          maxSpeed: 12,
          latAccel: 6.5,
          decel: 5.5,
          canReset: !0,
          avoid: !1,
        })
      : null,
    v = (t, n) => {
      let r = n3(e, t, 10 + Math.abs(t.speed) * 1.6);
      return r === 1 / 0 ? -1 : n + Math.max(0, r - 2.2);
    },
    y = (t, n, r, i) => {
      let a = t.passT > 0 ? -1 : v(t.v, t.s);
      ((t.blockT =
        a >= 0 &&
        (i < 0 || a < i - 0.5) &&
        a - t.s < 3 &&
        Math.abs(t.v.speed) < 0.5 &&
        e3(e, s, t.s, 0) < 0
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
      let o = a3(i3(i, a), t.s);
      t.drv.update(n, r, o);
    },
    b = (t.stops ?? []).map(
      (e) => (s.project(e.x, e.z, N4), { ...e, s: N4.s, done: !1 }),
    ),
    x = new x4(n, `tour`),
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
  let O = Y4(e, t.guide.name);
  (e.queueLine(O, Ae(a, t.guide.lines?.start?.[0] ?? k4.go)),
    e.objective({
      zh: `跟著導遊的卡丁車：保持隊形、靠左、紅燈停`,
      en: `Follow the guide's kart: keep in line, keep left, stop at red lights`,
    }),
    (e.step = `kart-tour`));
  let k = 0,
    A = 0,
    j = 0,
    M = 0,
    ee = 0,
    te = 0,
    ne = -1,
    N = 0,
    re = 0,
    ie = -1,
    ae = 0,
    oe = 0,
    se = 0,
    ce = -1,
    le = !1,
    ue = null,
    de = 0,
    fe = !0,
    pe = { kind: `kart`, x: f.body.x, z: f.body.z },
    me = (e) => (
      s.project(e.v.body.x, e.v.body.z, N4, e.seg, 6),
      N4.dist > 25 && s.project(e.v.body.x, e.v.body.z, N4),
      (e.s = N4.s),
      (e.seg = N4.seg),
      N4.dist
    ),
    he = { v: f, s: d, seg: 0 },
    ge = _ ? { v: f, drv: _, s: d, seg: 0, blockT: 0, passT: 0 } : null,
    _e = !1;
  (e.every((i) => {
    if (E || _e) return;
    ((k += i), x.tick(i), me(h));
    for (let e of g) me(e);
    let o = me(he),
      l = B4(s, he.s, f.body.x, f.body.z),
      u = h.s - he.s,
      d = Math.abs(f.speed),
      p = e3(e, s, h.s, Math.abs(h.v.speed)),
      m = b[se];
    m &&
      !m.done &&
      (m.s - h.s < 90 && (p < 0 || m.s < p) && (p = m.s),
      ce < 0 &&
        Math.abs(m.s - h.s) < 3 &&
        Math.abs(h.v.speed) < 0.5 &&
        ((ce = 0),
        (le = !!m.onStop),
        e.queueLine(O, Ae(a, t.guide.lines?.final?.[0] ?? k4.stop)),
        R4(e, s),
        m.onStop &&
          e.branch(async () => {
            (await m.onStop(), (le = !1));
          })),
      ce >= 0 &&
        ((ce += i),
        (p = h.s),
        ce >= m.hold && !le && ((m.done = !0), se++, (ce = -1))));
    let _ = 1;
    s.pointAt(h.s + 5, j4);
    let v = !!r.nodeAt(h.v.body.x, h.v.body.z) || !!r.nodeAt(j4.x, j4.z);
    (u > 45 && !v
      ? ((p = p < 0 ? h.s : Math.min(p, h.s)),
        N <= 0 && ((N = 14), e.queueLine(O, Ae(a, k4.wait))))
      : u > 22 && (_ = 0.55),
      (N -= i),
      h.s > c - 6 && (p = c - 2),
      y(h, i, _, p));
    for (let t = 0; t < g.length; t++) {
      let n = g[t],
        r = i3(
          (t === 0 ? (o < 8 ? he.s : h.s - 7) : g[t - 1].s) - 6.5,
          e3(e, s, n.s, Math.abs(n.v.speed)),
        );
      y(n, i, 1, r);
    }
    ge &&
      ((ge.s = he.s),
      y(ge, i, 1, i3(Math.max(0, h.s - 7), e3(e, s, he.s, d))),
      (f.scripted = f.controls));
    let S = e.playerVehicle === f,
      C = d < 1 && e3(e, s, he.s, 0) >= 0;
    C ? (de = 15) : (de -= i);
    let w = de > 0 && d > 1 && o < 3.5 && l > -4.5 && u > 0,
      D = ce >= 0 || k < 5 || ie >= 0,
      P = S && u >= 1.8 && u <= 30 && o < 3.5 && l > -4.5;
    if (
      ((fe = P || C || w || D),
      D ||
        ((A += i),
        P || C || w
          ? ((j += i), (M = 0))
          : ((M += i),
            M > 2.5 &&
              M - i <= 2.5 &&
              (ee++,
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
      oe = 0;
      let t = r.nodeAt(f.body.x, f.body.z),
        i = t?.id ?? -1,
        o = Math.sin(f.heading),
        s = -Math.cos(f.heading),
        c = Math.abs(o) > Math.abs(s) ? `x` : `z`;
      for (let e of [2, 4.5, 7]) {
        let t = r.nodeAt(f.body.x + o * e, f.body.z + s * e);
        if (t && t.id !== i && n.signals.isSignalized(t.id)) {
          let e = $4(t, f.body.x, f.body.z);
          ue = { id: t.id, red: n.signals.state(t.id, e) === `red` };
          break;
        }
      }
      (t &&
        i !== ne &&
        n.signals.isSignalized(i) &&
        d > 2.5 &&
        ue?.id === i &&
        ue.red &&
        (te++,
        T(
          `red node ${i} axis ${c} now ${n.signals.state(i, c)} spd ${d.toFixed(1)} s ${Math.round(he.s)} guide ${Math.round(h.s)}`,
        ),
        x.flash(n.t({ zh: `闖紅燈！`, en: `Ran a red light!` })),
        re <= 0 && ((re = 10), e.queueLine(O, Ae(a, k4.red)))),
        (ne = i));
    } else
      ((oe += i),
        e.hud.prompt({ zh: `回到卡丁車上！`, en: `Get back in your kart!` }));
    ((re -= i),
      ie < 0 &&
        h.s > c - 5 &&
        Math.abs(h.v.speed) < 0.6 &&
        ((ie = 0), e.queueLine(O, Ae(a, t.guide.lines?.win?.[0] ?? k4.end))),
      ie >= 0 && ((ie += i), ((u < 25 && d < 1.5) || ie > 14) && (_e = !0)));
    let ve = Math.max(
      0,
      Math.min(100, Math.round((100 * j) / Math.max(1, A)) - 15 * te),
    );
    ((ae -= i) <= 0 &&
      ((ae = 0.1), x.tour({ inFormation: fe, reds: te, score: ve })),
      (e.vars.kartTour = {
        gap: Math.round(u),
        score: ve,
        breaks: ee,
        reds: te,
        s: Math.round(he.s),
        L: Math.round(c),
      }),
      s.pointAt(Math.min(c, he.s + 20), j4),
      (pe.x = j4.x),
      (pe.z = j4.z),
      (e.waitFor = pe));
  }),
    await e.until(() => _e),
    (e.waitFor = null),
    D(),
    _ && (f.controls.hold = !0));
  let ve = {
    score: Math.max(
      0,
      Math.min(100, Math.round((100 * j) / Math.max(1, A)) - 15 * te),
    ),
    formationBreaks: ee,
    redLights: te,
  };
  return ((ve.log = w.slice()), ve);
}
