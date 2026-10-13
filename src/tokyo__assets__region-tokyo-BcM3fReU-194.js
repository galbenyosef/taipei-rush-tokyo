// tokyo__assets__region-tokyo-BcM3fReU 194 — math
// Lines 81035-81910 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function PW(e) {
  let t = e.plan,
    n = Uu(t),
    i = e.params.get(`trains`) !== `0`,
    a = null,
    o = () => {
      let n = e.params.get(`spawn`);
      if (n) {
        let [e, t] = n.split(`,`).map(Number);
        if (Number.isFinite(e) && Number.isFinite(t)) return { x: e, z: t };
      }
      let r = e.state.data.pos;
      return r && Number.isFinite(r.x) && Number.isFinite(r.z)
        ? { x: r.x, z: r.z }
        : t.spawns.start;
    },
    s = n ? new IH(e, n, () => a, o) : null,
    c = null,
    l = e.region.signage.fonts.sans,
    u = (t) => e.t(t),
    d = new Set(
      n?.m.platforms
        .filter((e) => e.rideable && e.line === `JY`)
        .map((e) => e.id) ?? [],
    ),
    f = new mU(t.mrtStations),
    p = (e) => [`JY`, `G`, `H`, `M`].indexOf(String(e.line)),
    m = t.mrtStations
      .filter((e) =>
        e.line === `JY`
          ? d.has(e.id) && f.opOf(e.id) === `jr`
          : f.opOf(e.id) === `metro`,
      )
      .slice()
      .sort(
        (e, t) => p(e) - p(t) || String(e.code).localeCompare(String(t.code)),
      ),
    h = (n?.entrances.list ?? []).filter((e) =>
      m.some((t) => t.id === e.stationId),
    );
  for (let e = 0; e < m.length; e++) {
    let t = h.find((t) => t.stationId === m[e].id);
    t && (m[e] = { ...m[e], ex: t.x, ez: t.z, eh: t.heading + Math.PI });
  }
  let g = new Map(m.map((e) => [e.id, e])),
    _ = n?.entrances.obstacles ?? [],
    v = (e) => n?.m.platforms.find((t) => t.id === e),
    y = { track: null },
    b = { t: 0, track: ``, dir: `in`, dirKey: `` },
    x = [],
    S = [];
  n && FW(n, t.mrtStations, x, S);
  let C = [],
    w = { x: 0, z: 0 },
    T = (t, n, r, i) => {
      let a = e.player?.position;
      if (
        (t.corridor.path.pos(t.sc, (t.o0 + t.o1) / 2, w),
        !i && (!a || (a.x - w.x) ** 2 + (a.z - w.z) ** 2 > jW * jW))
      )
        return;
      let o = wH(t),
        s = {
          stationId: t.id,
          line: t.line,
          track: o[t.tracks[0] === n ? 0 : 1],
          x: w.x,
          y: t.y,
          z: w.z,
          lead: r,
          ride: i,
        };
      i &&
        setTimeout(
          () => E(`mrt_door_chime`, { ui: !0, volume: 0.45 }),
          Math.max(0, r * 1e3),
        );
      for (let e of C)
        try {
          e(s);
        } catch (e) {
          console.warn(`[transit] melody hook failed`, e);
        }
      try {
        e.events.emit(`transit:melody`, s);
      } catch {}
    },
    E = (t, n) => {
      try {
        e.audio.play(t, n ?? { ui: !0 });
      } catch {}
    },
    D = () => {
      try {
        return e.police?.level ?? 0;
      } catch {
        return 0;
      }
    },
    O = (e) => new Promise((t) => setTimeout(t, e * 1e3)),
    A = (t) => e.money.format(t, { currency: `JPY`, style: `tight` }),
    j = (e, t = 18e4) =>
      new Promise((n) => {
        let r = performance.now(),
          i = () =>
            e() || performance.now() - r > t ? n() : setTimeout(i, 50);
        i();
      }),
    M = (e) => {
      let n = g.get(e) ?? t.mrtStations.find((t) => t.id === e);
      return {
        zh: n?.name.zh ?? e,
        en: n?.name.en ?? e,
        ja: n?.name.ja ?? n?.name.zh ?? e,
        code: n?.code ?? ``,
      };
    },
    ee = new Map(),
    te = (e) => {
      let n = ee.get(e);
      if (!n) {
        let r = g.get(e) ?? t.mrtStations.find((t) => t.id === e);
        ee.set(
          e,
          (n = {
            ja: r?.name.ja ?? r?.name.zh ?? e,
            en: r?.name.en ?? e,
            code: r?.code ?? ``,
          }),
        );
      }
      return n;
    },
    ne = null,
    N = () =>
      (ne ??= {
        next: xH(`transit.lcd.next`, `次は`),
        soon: xH(`transit.lcd.soon`, `まもなく`),
        stop: xH(`transit.lcd.stopping`, `ただいま`),
      }),
    re = !1,
    ie = (t) => {
      if (t !== re) {
        re = t;
        try {
          e.ui.setExternalMenu?.(t);
        } catch {}
      }
    },
    ae = !1,
    oe = 1,
    se = (t) => {
      if (t !== ae) {
        ae = t;
        try {
          t
            ? ((oe = e.env.timeScale), (e.env.timeScale = 0))
            : e.env.timeScale === 0 && (e.env.timeScale = oe);
        } catch {}
      }
    },
    ce = (t) => {
      try {
        e.player.setControlEnabled(t);
      } catch {}
    },
    P = null,
    le = !1,
    ue = ``,
    de = 0,
    fe = !1,
    pe = new Map(),
    me = { zh: `通緝中 · 無法搭車`, en: `Wanted — can't ride` },
    he = (e) => {
      if (D() > 0) return me;
      let t = pe.get(e.stationId);
      if (!t) {
        let n = M(e.stationId);
        ((t =
          e.op === `jr`
            ? {
                zh: r.on
                  ? r.t(
                      `按 {interact} 搭乘 JR 山手線 · ${n.zh}`,
                      `{interact} で JR山手線に乗る · ${r.jz(n.zh)}`,
                    )
                  : `按 {interact} 搭乘 JR 山手線 · ${n.zh}`,
                en: `Press {interact} to ride the JR Yamanote Line · ${n.en}`,
              }
            : {
                zh: r.on
                  ? r.t(
                      `按 {interact} 搭乘 東京地下鐵 · ${n.zh}`,
                      `{interact} で 東京メトロに乗る · ${r.jz(n.zh)}`,
                    )
                  : `按 {interact} 搭乘 東京地下鐵 · ${n.zh}`,
                en: `Press {interact} to ride the Tokyo Metro · ${n.en}`,
              }),
          pe.set(e.stationId, t));
      }
      return t;
    },
    ge = (e, t, n) => {
      let r = ``,
        i = 1 / 0;
      for (let a of m) {
        if (n && f.opOf(a.id) !== n) continue;
        for (let n of h) {
          if (n.stationId !== a.id) continue;
          let o = (n.x - e) ** 2 + (n.z - t) ** 2;
          o < i && ((i = o), (r = a.id));
        }
        let o = (a.x - e) ** 2 + (a.z - t) ** 2;
        o < i && ((i = o), (r = a.id));
      }
      return r;
    },
    _e = (e) => h.find((t) => t.stationId === e) ?? null,
    ve = (t, n) => {
      if (!g.has(n)) return { zh: `沒有這個車站`, en: `Unknown station` };
      if (t === n) return { zh: `您已在此站`, en: `You're already here` };
      if (D() > 0)
        return {
          zh: `通緝中，車站有警察盯著！先甩掉警察。`,
          en: `You're wanted — cops are watching the station. Lose them first.`,
        };
      let r = f.plan(t, n);
      return r
        ? e.money.canAfford(r.fare, `JPY`)
          ? null
          : { zh: `IC卡餘額不足`, en: `Not enough money for the fare` }
        : { zh: `無法規劃路線`, en: `No route` };
    },
    ye = new EU(
      {
        t: u,
        lang: () => e.state.lang,
        money: () => e.money.balance(`JPY`),
        sfx: (e) => E(e),
        device: () => e.input.device,
        wanted: D,
        name: M,
        ride: (t) =>
          ve(ue, t) ||
          (e.input.isTouch || e.input.lockPointer(), Re(ue, t), null),
        close: () => Te(!0),
      },
      f,
      l,
    ),
    be = new DU(l),
    xe = new OU(l),
    Se = ``,
    Ce = new wW({
      ctx: e,
      fleet: () => c,
      platform: (e) => v(e),
      exit: (e) => _e(e),
      begin: () =>
        !le &&
        ((le = !0),
        ye.isOpen && Te(!1),
        ie(!0),
        se(!0),
        ce(!1),
        (Ee = _e(Se)),
        !0),
      end: () => {
        ((Ee = null),
          Le(!1),
          se(!1),
          (le = !1),
          ie(!1),
          ce(!0),
          e.input.isTouch || e.input.lockPointer());
      },
      hidePlayer: (e) => Le(e),
      lcd: be,
      nameLcd: (e) => te(e),
      lcdLabels: () => N(),
      lcdLoop: (e) => xH(e ? `transit.lcd.loop.in` : `transit.lcd.loop.out`),
      lcdDoors: () => xH(`transit.lcd.doors.right`, `右側のドアが開きます`),
      lineColor: YV.JY,
      melody: (e, t, n) => T(e, t, n, !0),
      ahead: (t, n) => {
        (e.buildings?.ensureResident?.(t, n),
          s?.residency.ensureResident(t, n));
      },
      ensureResident: (t, n) =>
        Promise.all([
          Promise.resolve(e.districts?.ensureResident?.(t, n)),
          s ? s.residency.ensureResident(t, n) : null,
        ]),
      t: u,
      refuse: () => {
        if (le || ye.isOpen)
          return { zh: `正在搭車中`, en: `Already on a trip` };
        if (D() > 0)
          return {
            zh: `通緝中，車站有警察盯著！先甩掉警察。`,
            en: `You're wanted — cops are watching the station. Lose them first.`,
          };
        let t = `foot`;
        try {
          t = e.player.mode;
        } catch {}
        return t === `vehicle`
          ? { zh: `請先下車`, en: `Get out of the vehicle first` }
          : null;
      },
      jpFont: l,
    });
  function we(t) {
    if (le || ye.isOpen) return;
    let n = e.player.position,
      r = t ?? P?.stationId ?? ge(n.x, n.z, null);
    r &&
      f.opOf(r) &&
      ((ue = r),
      ce(!1),
      ie(!0),
      se(!0),
      e.input.unlockPointer(),
      E(`ui_confirm`),
      ye.open(r),
      (de = 0.3),
      (fe = !0));
  }
  function Te(t) {
    ye.isOpen &&
      (ye.close(),
      le ||
        (se(!1),
        ce(!0),
        t && !e.input.isTouch && e.input.lockPointer(),
        ie(!1)));
  }
  let Ee = null,
    De = null,
    Oe = !1,
    ke = null,
    Ae = 0,
    F = [],
    je = new k(),
    Me = new k(),
    Ne = new k(),
    Pe = new k(),
    Fe = -1,
    Ie = !1,
    Le = (t) => {
      if (t !== Ie) {
        Ie = t;
        try {
          e.player.object.visible = !t;
        } catch {}
      }
    };
  async function Re(t, n) {
    if (le) return;
    let i = f.plan(t, n);
    if (!i) return;
    ((le = !0), ie(!0), se(!0), Te(!1), ce(!1));
    let a = 12;
    try {
      a = e.env.hour;
    } catch {}
    let o = _e(n);
    Ee = o;
    try {
      if (
        (E(`coin`, { ui: !0, volume: 0.8 }),
        !e.money.spend(i.fare, `JPY`, `transit`))
      )
        throw Error(`fare refused`);
      try {
        e.state.stat(`mrt_rides`);
      } catch {}
      let s = o
        ? Promise.resolve(e.districts?.ensureResident?.(o.x, o.z)).catch(
            () => {},
          )
        : Promise.resolve();
      if (!(
        i.op === `jr` &&
        c &&
        !e.params.has(`noride`) &&
        (await ze(t, n))
      )) {
        await Promise.resolve(e.ui.fade(1, 0.45)).catch(() => {});
        let t = i.legs.reduce((e, t) => e + t.stops.length - 1, 0),
          n = { next: xH(`transit.lcd.next`, `次は`) },
          a = u({
            zh: r.on
              ? r.t(
                  `${i.legs.map((e) => e.line.name.zh).join(` → `)} · 車資 ${A(i.fare)}`,
                  `${i.legs.map((e) => r.jz(e.line.name.zh)).join(` → `)} · 運賃 ${A(i.fare)}`,
                )
              : `${i.legs.map((e) => e.line.name.zh).join(` → `)} · 車資 ${A(i.fare)}`,
            en: `${i.legs.map((e) => e.line.name.en).join(` → `)} · Fare ${A(i.fare)}`,
          });
        (E(`mrt_door_chime`, { ui: !0, volume: 0.6 }),
          await xe.play(i, te, Math.max(3, Math.min(7, 1.5 + t * 0.8)), a, n));
      }
      try {
        let t = a + i.minutes / 60;
        e.env.setHour(((t % 24) + 24) % 24);
      } catch {}
      (o &&
        (await Promise.race([s, O(8)]),
        e.player.teleport(o.x, o.z, o.heading + Math.PI, 0.15)),
        xe.close(),
        Le(!1));
      try {
        (e.cameraRig.override(null),
          e.cameraRig.snapBehind?.(o ? o.heading + Math.PI : void 0));
      } catch {}
      try {
        e.ui.setHudVisible(!0);
      } catch {}
      (await O(0.15), Promise.resolve(e.ui.fade(0, 0.7)).catch(() => {}));
      let l = M(n);
      try {
        e.ui.notify(
          {
            zh: r.on
              ? r.t(
                  `抵達 ${l.zh} · 車資 ${A(i.fare)}`,
                  `${r.jz(l.zh)}に到着 · 運賃 ${A(i.fare)}`,
                )
              : `抵達 ${l.zh} · 車資 ${A(i.fare)}`,
            en: `Arrived at ${l.en} · Fare ${A(i.fare)}`,
          },
          { kind: `info`, duration: 3 },
        );
      } catch {}
      e.events.emit(`mrt:travel`, { from: t, to: n });
    } catch (t) {
      console.error(`[transit] travel failed`, t);
      try {
        (e.cameraRig.override(null), e.ui.setHudVisible(!0));
      } catch {}
      Promise.resolve(e.ui.fade(0, 0.3)).catch(() => {});
    } finally {
      ((Ee = null),
        Be(),
        xe.close(),
        Le(!1),
        se(!1),
        (le = !1),
        ie(!1),
        ce(!0));
    }
  }
  async function ze(t, n) {
    let r = v(t),
      i = v(n);
    if (!c || !r || !i) return !1;
    await Promise.resolve(e.ui.fade(1, 0.35)).catch(() => {});
    let a = c.startRide(r, i);
    if (!a) return !1;
    ((De = { from: t, to: n }), (Oe = !1), (Fe = -1), (Ae = 0), Le(!0));
    try {
      e.ui.setHudVisible(!1);
    } catch {}
    let o = i.sc > r.sc,
      s = o ? r.tracks[0] : r.tracks[1],
      l = [
        r,
        ...(s.dir > 0
          ? s.stops.filter((e) => e.sc > r.sc && e.sc <= i.sc)
          : [...s.stops].reverse().filter((e) => e.sc < r.sc && e.sc >= i.sc)),
      ];
    F = l.map((e) => e.id);
    let d =
      e.input.device === `gamepad`
        ? `A`
        : e.input.device === `touch`
          ? u({ zh: `點擊`, en: `Tap` })
          : `E`;
    be.open(
      YV.JY,
      `JY`,
      l.map((e) => te(e.id)),
      `<kbd>${d}</kbd>${u({ zh: `跳過`, en: `Skip` })}`,
      xH(`transit.lcd.doors.right`, `右側のドアが開きます`),
      xH(o ? `transit.lcd.loop.in` : `transit.lcd.loop.out`),
      () => {
        c?.rideState.active && c.rideState.t > 1.5 && (Oe = !0);
      },
    );
    try {
      ((ke = e.audio.loop(`mrt_train`, { volume: 0.55 }) ?? null),
        e.audio.duck(0.5, 1.5));
    } catch {}
    return (
      Ge(0),
      Promise.resolve(e.ui.fade(0, 0.6)).catch(() => {}),
      await j(() => Oe || !c.rideState.active || c.rideDone, (a + 20) * 1e3),
      await Promise.resolve(e.ui.fade(1, 0.45)).catch(() => {}),
      be.close(!0),
      Be(),
      !0
    );
  }
  function Be() {
    if (De || c?.rideState.active) {
      ((De = null), c?.endRide(), be.close(!0));
      try {
        ke?.stop();
      } catch {}
      ke = null;
    }
  }
  let Ve = null,
    He = () =>
      (Ve ??=
        typeof matchMedia == `function`
          ? matchMedia(`(max-height:560px)`)
          : null)?.matches ?? !1,
    Ue = { d: 0, v: 0, phase: 0 },
    We = { x: 0, z: 0 };
  function Ge(t) {
    if (!c || !De) return;
    let n = c.rideState,
      r = c.rideProfile;
    if (!n.active || !r) return;
    try {
      e.player.teleport(n.x, n.z, n.heading, n.deck + 0.05);
    } catch {}
    r.at(n.t, Ue);
    let i = r.track,
      a = r.dir;
    if (((Ae -= t), Ae <= 0)) {
      Ae = 1;
      for (let t of NW) {
        let n = r.s(Math.min(r.D, Ue.d + t));
        (i.corridor.path.pos(n, 0, We),
          e.buildings?.ensureResident?.(We.x, We.z),
          s?.residency.ensureResident(We.x, We.z));
      }
    }
    let o = r.s(Ue.d),
      l = n.t < MW,
      u = +!l;
    if (l && n.stopped) {
      let e = n.stopped,
        t = (e.o0 + e.o1) / 2,
        r = i.off.at(o);
      (i.corridor.path.pos(o - a * 36, t + (r < t ? -0.35 : 0.35), We),
        je.set(We.x, e.y + 1.62, We.z),
        i.corridor.path.pos(o - a * 6, r, We),
        Me.set(We.x, i.y.at(o) + 2.1, We.z));
    } else {
      (i.corridor.path.pos(o - a * 0.7, i.off.at(o), We),
        je.set(We.x, i.y.at(o) + 2.55, We.z));
      let e = r.s(Ue.d + 45);
      (i.corridor.path.pos(e, i.off.at(e), We),
        Me.set(We.x, i.y.at(e) + (He() ? 0.8 : 1.9), We.z));
    }
    u === Fe
      ? (Ne.copy(je), Pe.lerp(Me, Math.min(1, t * 6)))
      : (Ne.copy(je), Pe.copy(Me), (Fe = u));
    try {
      e.cameraRig.override(Ne, Pe);
    } catch {}
    let d = N();
    if (n.stopped) {
      let e = F.indexOf(n.stopped.id);
      e === 0
        ? be.set(`next`, te(F[1] ?? n.stopped.id), 1, d)
        : be.set(`stop`, te(n.stopped.id), Math.max(0, e), d);
    } else if (n.next) {
      let e = F.indexOf(n.next.id),
        t = i.dir > 0 ? n.next.s1 - 2 : n.next.s0 + 2;
      be.set(
        Math.abs(t - o) < 150 ? `soon` : `next`,
        te(n.next.id),
        Math.max(0, e),
        d,
      );
    }
    try {
      (ke?.setPosition(n.x, n.y + 1.5, n.z), ke?.setParam(`speed`, n.v));
    } catch {}
    n.t > 1.5 &&
      (e.input.pressed(`interact`) || e.input.pressed(`jump`)) &&
      !document.getElementById(`tk-choice`) &&
      (Oe = !0);
  }
  function Ke() {
    let t = e.params.get(`drive`);
    if (!t) return;
    let [n, r] = t.split(`:`),
      i = e.params.get(`timetable`) ?? `tutorial`,
      a = !1,
      o = () => {
        if (!a) {
          if (((a = !0), !e.params.has(`hour`)))
            try {
              e.env.setHour(
                { tutorial: 14, rush: 8.08, late: 22.67, shuden: 0.25 }[i] ??
                  14,
              );
            } catch {}
          qe.drive({
            from: n,
            to: r,
            timetable: i,
            coach: e.params.get(`coach`) === `1` || i === `tutorial`,
          }).then((e) => console.info(`[drive] result`, JSON.stringify(e)));
        }
      };
    (e.events.on(`player:spawned`, () => setTimeout(o, 1500)),
      e.events.on(`game:ready`, () => setTimeout(o, 6e3)));
  }
  let qe = {
    name: `transit`,
    stations: m,
    entrances: h,
    obstacles: _,
    mapLines: x,
    mapStations: S,
    get traveling() {
      return le;
    },
    get pickerOpen() {
      return ye.isOpen;
    },
    get nearStation() {
      return P ? (g.get(P.stationId) ?? null) : null;
    },
    get ride() {
      if (Ce.driving) return Ce.view();
      let e = c?.rideState;
      return De && e?.active
        ? { from: De.from, to: De.to, x: e.x, z: e.z, v: e.v }
        : null;
    },
    drive(e) {
      return ((Se = e.to), Ce.drive(e));
    },
    async travelTo(t) {
      if (le) return;
      let n = `foot`;
      try {
        n = e.player.mode;
      } catch {}
      if (n === `vehicle`) {
        try {
          e.ui.notify(
            {
              zh: `請先下車再搭車`,
              en: `Get out of the vehicle to ride the train`,
            },
            { kind: `bad` },
          );
        } catch {}
        return;
      }
      let r = f.opOf(t),
        i = e.player.position,
        a = P && f.opOf(P.stationId) === r ? P.stationId : ge(i.x, i.z, r),
        o = ve(a, t);
      if (o) {
        try {
          e.ui.notify(o, { kind: `bad` });
        } catch {}
        return;
      }
      await Re(a, t);
    },
    openPicker(e) {
      we(e);
    },
    closePicker() {
      Te(!0);
    },
    fare(e, t) {
      return f.plan(e, t)?.fare ?? 0;
    },
    nextTrain(e) {
      let t = v(e);
      return t && c ? c.nextTrain(t) : 1 / 0;
    },
    nextArrival(e) {
      let t = v(e);
      if (!t || !c || t.line !== `JY`) return null;
      let n = c.nextTrain(t, y);
      if (!(n < 1 / 0) || !y.track) return null;
      let r = t.tracks[0] === y.track ? 0 : 1,
        i = b;
      return (
        (i.t = n),
        (i.track = wH(t)[r]),
        (i.dir = r === 0 ? `in` : `out`),
        (i.dirKey = `transit.dir.${i.dir}.${t.id}`),
        i
      );
    },
    onMelody(e) {
      C.push(e);
    },
    onPackBuilt(e) {
      s?.onPackBuilt(e);
    },
    onPackDropped(e) {
      s?.onPackDropped(e);
    },
    unbuiltNear(e, t, n) {
      return !!s && s.residency.unbuiltNear(e, t, n);
    },
    onArrival(e) {
      s?.residency.onArrival(e);
    },
    ensureResident(e, t, n) {
      return s ? s.residency.ensureResident(e, t, n) : Promise.resolve();
    },
    residency() {
      let e = {};
      if (!s) return e;
      for (let [t, n] of Object.entries(s.residency.state())) e[t] = n;
      return e;
    },
    async init() {
      if (!n || !s) return;
      let r = performance.now(),
        l = Math.max(0.5, Math.min(1, e.quality.textureScale ?? 0.75)),
        u = e.region.signage.fontsReady;
      u && (await Promise.race([u.catch(() => !1), O(4)]));
      let d = e.quality.maxSignTextureSize ?? e.quality.maxTextureSize ?? 4096,
        f = Math.min(
          l < 0.75 ? 4 : 8,
          e.renderer.gl?.capabilities?.getMaxAnisotropy?.() ?? 4,
        ),
        p = () => {
          try {
            a = new QV(EH(t, n), e.region.signage.fonts, l, d, f);
          } catch (e) {
            console.warn(`[transit] atlas failed`, e);
          }
        };
      p();
      try {
        document.fonts?.addEventListener?.(`loadingdone`, (e) => {
          if (!(e.fontfaces ?? []).some((e) => /Tokyo Sans JP/i.test(e.family)))
            return;
          let t = a;
          (p(), s.refreshMaterials(), t?.tex.dispose());
        });
      } catch {}
      (e.loading(`transit: atlas`, 0.15),
        await e.yieldFrame(),
        i && ((c = new uU(e, n.m, T)), e.scene.add(c.mesh)));
      let m = { x: 0, z: 0 },
        g = { x: 0, z: 0, tx: 0, tz: 1 };
      e.statics.beginGroup();
      for (let t of n.m.corridors)
        if (t.id === `jr-main`)
          for (let n = t.path.s0 - 30; n <= t.path.s1 + 30; n += 12)
            (t.path.at(n, g),
              t.path.pos(n, (t.edge0.at(n) + t.edge1.at(n)) / 2, m),
              e.statics.addFloor(
                m.x,
                m.z,
                12,
                12,
                t.deck.at(n),
                t.deck.at(n),
                Math.atan2(g.tx, -g.tz),
                `viaduct`,
              ));
      (e.statics.endGroup(),
        e.loading(`transit: trains`, 0.25),
        await s.init((t) => e.loading(`transit: viaduct`, 0.25 + t * 0.35)));
      let _ = o();
      await s.buildNow(_.x, _.z, (t) =>
        e.loading(`transit: near`, 0.6 + t * 0.4),
      );
      let v = s.stats();
      console.info(
        `[init] transit ${Math.round(performance.now() - r)}ms (atlas ${a?.px.join(`×`) ?? `-`}; ${s.keys.length} rail tiles; far ${v[`rail-far`]?.resident ?? 0} / near ${v[`rail-near`]?.resident ?? 0} resident; ${h.length} entrances; ${c ? c.snapshot().services.length : 0} train services)`,
      );
    },
    start() {
      (e.events.on(`game:ready`, () => s?.residency.start()),
        e.state.onBeforeSave(() => {
          Ee &&
            (e.state.data.pos = {
              x: Ee.x,
              z: Ee.z,
              heading: Math.round((Ee.heading + Math.PI) * 100) / 100,
              y: 0.15,
            });
        }));
      let t = () => {
        ye.isOpen && Te(!1);
      };
      (e.events.on(`player:died`, t),
        e.events.on(`player:busted`, t),
        Ke(),
        typeof window < `u` &&
          (window.__transitTokyo = {
            stats: () => ({ structure: s?.stats(), trains: c?.snapshot() }),
            trains: () => c?.snapshot(),
            seek: (e, t, n) => c?.seek(e, t, n),
            state: () => s?.residency.state(),
            anchors: () => s?.residency.anchors(),
            log: s?.residency.log,
            ride: (e, t) => Re(e, t),
            drive: (e) => qe.drive(e),
            entrances: () =>
              h.map((e) => ({
                id: e.stationId,
                op: e.op,
                x: +e.x.toFixed(1),
                z: +e.z.toFixed(1),
                h: +e.heading.toFixed(2),
              })),
            scene: n,
          }));
    },
    update(t) {
      if (
        (s?.residency.update(t),
        Ce.driving && Ce.update(t),
        c && c.update(t, e.camera.position, e.camera.far),
        De && Ge(t),
        ye.isOpen)
      ) {
        let n = e.input;
        de -= t;
        let r = n.axis(`moveX`),
          i = n.axis(`moveY`),
          a = Math.abs(r) < 0.4 && Math.abs(i) < 0.4;
        (a && (fe = !1),
          a
            ? (de = Math.min(de, 0))
            : de <= 0 &&
              !fe &&
              (Math.abs(r) > Math.abs(i)
                ? ye.nav(Math.sign(r), 0)
                : ye.nav(0, -Math.sign(i)),
              (de = 0.24)),
          e.input.device === `gamepad` &&
          (n.pressed(`jump`) || n.pressed(`interact`))
            ? ye.confirm()
            : (n.pressed(`sprint`) || n.pressed(`pause`)) && ye.cancel());
      }
      if (((P = null), le || ye.isOpen)) return;
      let n = `foot`;
      try {
        n = e.player.mode;
      } catch {}
      if (n !== `foot`) return;
      let r = e.player.position,
        i = 16;
      for (let e = 0; e < h.length; e++) {
        let t = h[e],
          n = t.x - r.x,
          a = t.z - r.z,
          o = n * n + a * a;
        o < i && Math.abs(r.y - 0.15) < 3 && ((i = o), (P = t));
      }
      if (P) {
        try {
          e.ui.prompt(he(P));
        } catch {}
        e.input.pressed(`interact`) && D() === 0 && we(P.stationId);
      }
    },
    prewarm() {
      return s ? s.prewarm() : [];
    },
  };
  return qe;
}
