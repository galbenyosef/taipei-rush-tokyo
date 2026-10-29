// tokyo/assets/region-tokyo-A7LxHjud 415 — math
// Lines 148796-149604 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function nLe(e) {
  let t = e.params.get(`audio`) === `0`,
    n = !!e.quality?.mobile,
    r = e.quality?.level === `low`,
    i = null,
    a = null,
    o = null,
    s = null,
    c = {
      spoken: 0,
      skipped: 0,
      melodies: 0,
      pa: 0,
      passes: 0,
      ms: 0,
      maxMs: 0,
      frames: 0,
      avgMs: 0,
    },
    l = lu(e.time, e.params),
    u = ``,
    d = 0,
    f = 0,
    m = (n, r = {}) => {
      let a = i,
        s = o;
      if (!a || !s || !n || t || !s.ja) return (c.skipped++, !1);
      if (e.paused || (typeof document < `u` && document.hidden)) return !1;
      let l = e.state?.settings,
        u = (r.volume ?? 1) * (l ? l.masterVolume * l.sfxVolume : 0.7);
      if (r.x !== void 0 && r.z !== void 0 && Number.isFinite(r.x + r.z)) {
        let e = Math.hypot(r.x - a.lx, (r.y ?? a.ly) - a.ly, r.z - a.lz),
          t = r.maxDist ?? 60;
        if (e > t) return !1;
        u *= Math.min(1, 1.15 * (1 - e / t));
      }
      if (u < 0.04) return !1;
      let d = r.priority ?? 5,
        f = s.speak(
          n.replace(/（.*?）|\(.*?\)/g, ``).trim(),
          {
            lang: `ja`,
            priority: d,
            volume: Math.min(1, u),
            rate: r.rate ?? 1,
            pitch: r.pitch ?? 1,
            channel: r.channel ?? `game`,
            minGap: r.minGap ?? 0,
          },
          r.duck ?? (d >= 7 ? 0.35 : 0),
        );
      return (f ? c.spoken++ : c.skipped++, f);
    },
    h = (t, n) => {
      let r = o,
        i = e.state?.settings;
      return !r || !t || e.paused
        ? !1
        : r.speak(
            t,
            {
              lang: `en`,
              priority: n.priority,
              volume: Math.min(
                1,
                n.volume * (i ? i.masterVolume * i.sfxVolume : 0.7),
              ),
              rate: 1,
              pitch: 1,
              channel: n.channel,
              minGap: 0,
            },
            0.3,
          );
    },
    g = (e, t) => a?.schedule(e, t),
    _ = (e) => e.length / 7.5 + 0.6,
    v = Math.random,
    y = 0,
    b = (e, t) => {
      let n = a?.hour ?? 12;
      switch (e) {
        case `passby_scooter`:
          return v() < 0.12
            ? e
            : ((t.volume = (t.volume ?? 1) * 0.75), `passby_car`);
        case `passby_car`:
          return ((t.volume = (t.volume ?? 1) * 0.8), e);
        case `horn_scooter`:
        case `horn_car`:
          return v() < 0.18 ? e : null;
        case `bird_chirp`:
          return v() < (n < 8 || (n > 15.5 && n < 19) ? 0.45 : 0.12)
            ? ((t.y = (t.y ?? 1) + 10), (t.volume = 0.7 + 0.3 * v()), `tk_crow`)
            : e;
        case `distant_siren`:
          return `tk_siren_far`;
        case `temple_bell`:
        case `temple_drum`:
          return `tk_suzu`;
        case `vendor_call`:
          return o?.ja
            ? ((y = (y + 1 + Math.floor(v() * 3)) % 6),
              m(yo(`audio.town.market.${y + 1}`).ja, {
                x: t.x,
                y: t.y,
                z: t.z,
                maxDist: 32,
                priority: 2,
                volume: 0.6,
                rate: 1.12,
                pitch: v() < 0.5 ? 0.8 : 1.1,
                channel: `market`,
                minGap: 11,
              }),
              null)
            : e;
        case `wood_fish`:
        case `firecracker`:
        case `mahjong`:
        case `loudspeaker_vendor`:
          return null;
      }
      return e;
    },
    x = e.plan.dataset.water.at,
    S = [
      [25, 1],
      [60, 0.75],
      [110, 0.45],
    ],
    C = (e, t) => {
      if (!x) return 0;
      if (x(e, t)) return 1;
      let n = 0;
      for (let [r, i] of S) {
        let a = 0;
        for (let n = 0; n < 8; n++)
          x(
            e + Math.cos((n * Math.PI) / 4) * r,
            t + Math.sin((n * Math.PI) / 4) * r,
          ) && a++;
        n = Math.max(n, Math.min(1, (a / 3) * i));
      }
      return n;
    },
    w = null,
    T = () => {
      let e = i;
      e &&
        (e.play(`tk_yuyake`, { volume: 1 }, void 0, !1),
        c.melodies++,
        g(30, () =>
          m(yo(`audio.town.five`).ja, {
            priority: 3,
            volume: 0.45,
            rate: 0.9,
            pitch: 1.05,
            channel: `town`,
            minGap: 60,
          }),
        ));
    },
    E = (e) => {
      if ((e === 17 && T(), (e === 6 || e === 12 || e === 18) && w && i)) {
        let e = w;
        if (Math.hypot(e.x - i.lx, e.z - i.lz) > 900) return;
        for (let t = 0; t < 3; t++)
          g(t * 6, () =>
            i?.play(
              `temple_bell`,
              { x: e.x, y: 14, z: e.z, volume: 0.9 },
              void 0,
              !1,
            ),
          );
      }
    },
    D = () => e.transit,
    O = [],
    k = (e) => {
      let t = parseInt(String(e.code ?? ``).replace(/\D/g, ``), 10) || 0;
      return t >= 20 ? t - 31 : t;
    },
    A = new Map(),
    j = (e) => {
      let t = i;
      if (!t) return;
      let n = Y2(e.stationId, e.track);
      if (e.ride) {
        let t = (e) => {
          i?.running
            ? i.play(`dept_melody`, { ui: !0, volume: 0.3 }, n, !1, 0, 1)
            : e > 0 && g(0.25, () => t(e - 1));
        };
        (t(8),
          g(Math.max(0.2, e.lead) + 0.4, () =>
            m(yo(`audio.ann.doors-train`).ja, {
              priority: 6,
              volume: 0.7,
              channel: `train`,
            }),
          ));
        return;
      }
      if (!t.running) return;
      let r = Math.hypot(e.x - t.lx, e.z - t.lz);
      r > 220 ||
        (c.melodies++,
        t.play(
          `dept_melody`,
          { x: e.x, y: e.y + 3.5, z: e.z, volume: 0.95 },
          n,
          !1,
        ),
        t.play(
          `mrt_door_chime`,
          { x: e.x, y: e.y + 3, z: e.z, volume: 0.9 },
          void 0,
          !1,
          Math.max(0, e.lead),
        ),
        r < 90 &&
          g(Math.max(0, e.lead) + 1.6, () =>
            m(bo(`audio.ann.doors`, { n: e.track }), {
              x: e.x,
              y: e.y + 3,
              z: e.z,
              maxDist: 100,
              priority: 4,
              volume: 0.6,
              channel: `station`,
              minGap: 8,
            }),
          ));
    },
    M = { on: !1, from: ``, to: ``, seq: [], idx: 0, moving: !1, done: !1 },
    ee = () => {
      let e = D()?.ride ?? null;
      if (!e) {
        M.on &&= !1;
        return;
      }
      if (!M.on || M.from !== e.from || M.to !== e.to) {
        let t = O.find((t) => t.id === e.from),
          n = O.find((t) => t.id === e.to);
        if (
          ((M.on = !0),
          (M.from = e.from),
          (M.to = e.to),
          (M.idx = 0),
          (M.moving = !1),
          (M.done = !1),
          (M.seq = []),
          t && n)
        ) {
          let e = k(t),
            r = k(n),
            i = r > e ? 1 : -1;
          M.seq = O.filter(
            (t) => (k(t) - e) * i >= 0 && (r - k(t)) * i >= 0,
          ).sort((e, t) => (k(e) - k(t)) * i);
        }
      }
      if (M.seq.length && !M.done) {
        if (!M.moving && e.v > 3) {
          M.moving = !0;
          let e = M.seq[M.idx + 1];
          if (!e) return;
          let t = bo(`transit.ann.next`, { name: e.name.ja ?? e.name.zh });
          m(t, { priority: 7, volume: 0.8, channel: `train`, duck: 0.3 });
          let n = xo(`transit.ann.next`, { name: e.name.en }).en;
          g(_(t), () => h(n, { priority: 6, volume: 0.75, channel: `train` }));
        } else if (
          M.moving &&
          e.v < 0.3 &&
          e.atStation !== null &&
          ((M.moving = !1), M.idx++, M.idx >= M.seq.length - 1)
        ) {
          M.done = !0;
          let e = M.seq[M.seq.length - 1],
            t = bo(`transit.ann.arrive`, { name: e.name.ja ?? e.name.zh });
          (m(t, { priority: 7, volume: 0.8, channel: `train`, duck: 0.3 }),
            g(_(t), () =>
              h(xo(`transit.ann.arrive`, { name: e.name.en }).en, {
                priority: 6,
                volume: 0.75,
                channel: `train`,
              }),
            ));
        }
      }
    },
    te = { to: ``, at: -1e9 },
    ne = ({ to: t }) => {
      if (M.to === t && e.time.real - te.at < 30) return;
      let n =
        D()?.stations?.find((e) => e.id === t) ??
        e.plan.mrtStations.find((e) => e.id === t);
      n &&
        g(0.4, () => {
          let e = bo(`transit.ann.arrive`, { name: n.name.ja ?? n.name.zh });
          (m(e, { priority: 7, volume: 0.8, channel: `train`, duck: 0.3 }),
            g(_(e), () =>
              h(xo(`transit.ann.arrive`, { name: n.name.en }).en, {
                priority: 6,
                volume: 0.75,
                channel: `train`,
              }),
            ));
        });
    },
    re = null,
    ie = new p(),
    ae = [0, 1].map(() => ({
      loop: null,
      x: 0,
      y: 0,
      z: 0,
      inst: -1,
      cx: 0,
      cz: 0,
      speed: 0,
      on: !1,
    })),
    oe = 0,
    se = (e) => {
      let t = i,
        n = re;
      if (!n || D()?.ride) {
        for (let e of ae) e.on = !1;
        return;
      }
      let r = t.lx,
        a = t.lz,
        o = ie.elements,
        s = n.instanceCount,
        c = -1,
        l = 25600;
      for (let e = 0; e < s; e++) {
        try {
          if (!n.getVisibleAt(e)) continue;
          n.getMatrixAt(e, ie);
        } catch {
          continue;
        }
        let t = (o[12] - r) ** 2 + (o[14] - a) ** 2;
        t < l && ((c = e), (l = t));
      }
      let u = -1;
      if (c >= 0) {
        n.getMatrixAt(c, ie);
        let e = o[12],
          t = o[14],
          i = Math.hypot(o[8], o[10]) || 1,
          l = o[8] / i,
          d = o[10] / i,
          f = 25600;
        for (let i = 0; i < s; i++) {
          if (i === c) continue;
          try {
            if (!n.getVisibleAt(i)) continue;
            n.getMatrixAt(i, ie);
          } catch {
            continue;
          }
          let s = o[12],
            p = o[14],
            m = (s - r) ** 2 + (p - a) ** 2;
          m >= f ||
            (Math.abs((s - e) * d - (p - t) * l) > 3 && ((u = i), (f = m)));
        }
      }
      (ce(ae[0], c, e), ce(ae[1], u, e));
    },
    ce = (e, t, n) => {
      let r = re,
        a = i;
      if (t < 0) {
        e.on = !1;
        return;
      }
      r.getMatrixAt(t, ie);
      let o = ie.elements,
        s = o[12],
        l = o[13],
        u = o[14],
        d = o[8],
        f = o[10],
        p = Math.hypot(d, f) || 1;
      ((d /= p), (f /= p));
      let m = ZIe((a.lx - s) * d + (a.lz - u) * f, -9.5, 9.5),
        h = s + d * m,
        g = u + f * m;
      (e.inst === t &&
        n > 0 &&
        (e.speed +=
          (Math.min(40, Math.hypot(s - e.cx, u - e.cz) / n) - e.speed) * 0.5),
        (e.inst = t),
        (e.cx = s),
        (e.cz = u),
        (e.x = h),
        (e.y = l + 1.2),
        (e.z = g),
        e.on || c.passes++,
        (e.on = !0));
    },
    le = (e) => {
      for (let t of ae) {
        if (!t.on) {
          t.loop &&
            (t.loop.setVolume(Math.max(0, t.loop.state.vol - e * 1.2)),
            t.loop.state.vol <= 0 && (t.loop.stop(), (t.loop = null)));
          continue;
        }
        (t.loop ||
          ((t.loop = i.loop(`mrt_train`, { x: t.x, y: t.y, z: t.z }, !0)),
          t.loop.setVolume(0)),
          t.loop.setPosition(t.x, t.y, t.z),
          t.loop.setParam(`speed`, t.speed),
          t.loop.setVolume(
            Math.min(0.85, t.loop.state.vol + e * 1.5) *
              (t.speed < 0.5 ? 0.35 : 1),
          ));
      }
    },
    ue = 0,
    de = 0,
    fe = [],
    pe = -1e9,
    me = new Map(),
    he = (t) => {
      let n = i,
        r = e.time.real,
        s = a?.hour ?? 12;
      if (t === 0) {
        O2.quiet = s >= 21 || s < 7;
        let t = l();
        ((M2.day = t.cicadas ? `amb/amb_park_day` : `amb/tk_park_day`),
          (M2.night = t.mushi
            ? `amb/tk_mushi`
            : t.frogs
              ? `amb/amb_park_night`
              : `amb/tk_shrine`),
          s >= 16.75 && s < 17.1 && n.bank.wantSfx(`tk_yuyake`),
          w &&
            (s % 6 > 5.85 || s % 6 < 0.05) &&
            Math.hypot(w.x - n.lx, w.z - n.lz) < 900 &&
            n.bank.wantSfx(`temple_bell`),
          e.player?.mode === `foot` &&
            (n.bank.wantSfx(`tk_piyo`), n.bank.wantSfx(`tk_kakko`)));
      } else if (t === 1) {
        let e = D();
        for (let t of O) {
          let i = Math.hypot(t.x - n.lx, t.z - n.lz);
          if (
            i > 320 ||
            (n.bank.wantSfx(Y2(t.id, `1`)),
            n.bank.wantSfx(Y2(t.id, `2`)),
            n.bank.wantSfx(`tk_door`),
            n.bank.wantSfx(`tk_pa`),
            i > 110 || e?.ride || !e?.nextTrain)
          )
            continue;
          let a = e.nextArrival?.(t.id) ?? null,
            o = a ? a.t : e.nextTrain(t.id);
          if (o > 22 || o < 6 || r - (A.get(t.id) ?? -1e9) < 75) continue;
          (A.set(t.id, r), c.pa++);
          let s =
            a && So(a.dirKey)
              ? bo(`transit.ann.mamonaku`, { n: a.track, to: yo(a.dirKey).ja })
              : yo(`audio.ann.mamonaku`).ja;
          ((u = s),
            n.play(`tk_pa`, { x: t.x, y: 10, z: t.z, volume: 0.8 }, void 0, !1),
            g(1.7, () =>
              m(s, {
                x: t.x,
                y: 10,
                z: t.z,
                maxDist: 120,
                priority: 4,
                volume: 0.55,
                channel: `station`,
                minGap: 20,
              }),
            ));
        }
      } else if (t === 2) (ee(), M.on && (te = { to: M.to, at: r }));
      else if (t === 3) {
        let t = e.player;
        if (!t || t.mode !== `foot` || !o?.ja) return;
        r - pe > 10 &&
          ((pe = r),
          (fe = e.plan.pois.filter((e) => e.kind === `convenience`)));
        let n = t.position.x,
          i = t.position.z;
        for (let e of fe)
          (e.x - n) ** 2 + (e.z - i) ** 2 > 12 ||
            r < (me.get(e.id) ?? 0) ||
            (me.set(e.id, r + 45),
            g(0.6, () =>
              m(yo(`audio.town.irasshai`).ja, {
                x: e.x,
                y: 1.6,
                z: e.z,
                maxDist: 14,
                priority: 2,
                volume: 0.55,
                pitch: 1.15,
                rate: 1.1,
                channel: `shop`,
                minGap: 6,
              }),
            ));
      } else t === 4 && Se(r, s);
    },
    ge = null,
    _e = 30,
    ve = new Set([`ginza`, `marunouchi`]),
    ye = new Set([`ginza`, `nihonbashi`, `ueno`, `ameyoko`]),
    be = new Set(),
    xe = (t, n) => {
      try {
        return e.plan.districtAt(t, n).id;
      } catch {
        return ``;
      }
    },
    Se = (t, n) => {
      let r = i,
        a = l(),
        s =
          e.player?.mode === `foot` ||
          e.vehicles?.playerVehicle?.kind === `mamachari`,
        c = xe(r.lx, r.lz);
      a.hinoyojin && n > 19.2 && n < 22 && r.bank.wantSfx(`tk_hyoshigi`);
      let u = ge;
      if (u) {
        let e = Math.min(1, t - u.last);
        u.last = t;
        let n = t - u.t0;
        if (u.kind === `watch` || n % 40 < 28) {
          let t = u.kind === `yakiimo` ? 2.2 : 1.1;
          ((u.x += u.dx * t * e), (u.z += u.dz * t * e));
        }
        if (t >= u.next) {
          let e = (u.line++ % 2) + 1,
            n = u.x,
            i = u.z;
          u.kind === `yakiimo`
            ? (m(yo(`audio.town.yakiimo.${e}`).ja, {
                x: n,
                y: 2.4,
                z: i,
                maxDist: 170,
                priority: 3,
                volume: 0.85,
                rate: 0.62,
                pitch: 0.8,
                channel: `seller`,
                minGap: 6,
              }),
              (u.next = t + 9 + 4 * v()))
            : (r.play(
                `tk_hyoshigi`,
                { x: n, y: 1.4, z: i, volume: 1 },
                void 0,
                !1,
              ),
              g(1.3, () =>
                m(yo(`audio.town.hinoyojin.${e}`).ja, {
                  x: n,
                  y: 1.6,
                  z: i,
                  maxDist: 90,
                  priority: 2,
                  volume: 0.75,
                  rate: 0.75,
                  pitch: 0.9,
                  channel: `seller`,
                  minGap: 4,
                }),
              ),
              (u.next = t + 7 + 3 * v()));
        }
        (n > 120 || Math.hypot(u.x - r.lx, u.z - r.lz) > 260) &&
          ((ge = null), (_e = t + 180 + 240 * v()));
      } else if (
        t >= _e &&
        s &&
        o?.ja &&
        !ve.has(c) &&
        (Number(e.env?.rain) || 0) < 0.4
      ) {
        let i =
          a.yakiimo && n >= 15 && n < 20.5
            ? `yakiimo`
            : a.hinoyojin && n >= 19.5 && n < 22
              ? `watch`
              : null;
        if (((_e = t + 30), i)) {
          let n = v() * Math.PI * 2,
            a = e.plan.nearestLink(
              r.lx + Math.cos(n) * 110,
              r.lz + Math.sin(n) * 110,
            );
          if (a) {
            let e = v() < 0.5 ? 1 : -1;
            ge = {
              kind: i,
              x: a.link.sx + a.link.dx * a.s,
              z: a.link.sz + a.link.dz * a.s,
              dx: a.link.dx * e,
              dz: a.link.dz * e,
              t0: t,
              last: t,
              next: t + 1,
              line: 0,
            };
          }
        }
      }
      if (!ye.has(c) || n < 19.6 || n >= 20) return;
      r.bank.wantSfx(`tk_hotaru`);
      let d = `${e.time.date.m}/${e.time.date.d}:${c}`;
      if (n < 19.8 || !s || be.has(d)) return;
      be.add(d);
      let f = v() * Math.PI * 2,
        p = r.lx + Math.cos(f) * 22,
        h = r.lz + Math.sin(f) * 22;
      (r.play(`tk_hotaru`, { x: p, y: 3, z: h, volume: 0.9 }, void 0, !1),
        g(25, () =>
          m(yo(`audio.town.closing`).ja, {
            x: p,
            y: 3,
            z: h,
            maxDist: 50,
            priority: 3,
            volume: 0.6,
            rate: 0.95,
            pitch: 1.15,
            channel: `store`,
            minGap: 60,
          }),
        ));
    },
    Ce = {
      name: `audio-tokyo`,
      alwaysUpdate: !0,
      stations: XIe($Ie),
      attach(t) {
        ((i = t.eng),
          (a = t.director),
          (o = t.speech),
          eLe(),
          (s = new FIe(t.eng.bank, n, r)),
          (t.eng.bank.ext = s.take),
          (t.eng.bank.requestRadio = s.needs),
          HIe(t.speech));
        let c = t.director;
        ((c.remap = b), (c.riverAt = C), (c.busyD = tLe));
        let l = c.timers;
        ((l.mahjong = l.cracker = l.vendorTruck = l.truckCool = 1 / 0),
          (c.marketsOpen = () => c.hour >= 9.5 && c.hour < 20),
          (c.onHour = E),
          (w =
            e.plan.landmarks.find((e) => e.id === `bentendo`) ??
            e.plan.landmarks.find((e) => e.kind === `temple`) ??
            null));
      },
      wrap(e) {
        if (t) return e;
        let n = e.play.bind(e);
        e.play = (e, t) => {
          (e === `horn_scooter` &&
            t &&
            t.x !== void 0 &&
            t.z !== void 0 &&
            Ee(t.x, t.z) &&
            (e = `bike_bell`),
            n(e, t));
        };
        let r = e.say?.bind(e);
        return (
          (e.say = (e, t) => {
            if (t?.lang === `ja`) {
              let n = typeof e == `string` ? e : e.ja;
              return n ? m(n, t) : !1;
            }
            return t?.lang === `zh` ? !1 : r ? r(e, t) : !1;
          }),
          (e.canSay = (e) => (e === `ja` ? !!o?.ja : e !== `zh` && !!r)),
          e
        );
      },
      start() {
        if (t) return;
        let n = D();
        ((O = (n?.stations ?? [])
          .filter((e) => e.line === `JY`)
          .slice()
          .sort((e, t) => k(e) - k(t))),
          n?.onMelody ? n.onMelody(j) : e.events.on(`transit:melody`, j),
          e.events.on(`mrt:travel`, ne),
          (re = e.scene.getObjectByName(`transit-trains`) ?? null),
          De(),
          typeof window < `u` &&
            (window.__audioTokyo = {
              stats: () => ({
                ...c,
                lastPa: u,
                synth: s?.stats,
                ja: o?.ja ? `${o.ja.name} (${o.ja.lang})` : null,
                passes: ae.map((e) =>
                  e.on ? `${e.speed.toFixed(1)} m/s` : `-`,
                ),
                quiet: O2.quiet,
                park: { ...M2 },
                rover: ge
                  ? { kind: ge.kind, x: Math.round(ge.x), z: Math.round(ge.z) }
                  : null,
                closed: [...be],
              }),
              say: (e) => m(e, { priority: 8 }),
              play: (e, t = 0) => i?.play(e, { ui: !0 }, void 0, !1, 0, t),
              melody: (e, t = 0) =>
                i?.play(`dept_melody`, { ui: !0 }, D2[e] ?? D2[0], !1, 0, t),
              chime: T,
              voices: () =>
                typeof speechSynthesis < `u`
                  ? speechSynthesis
                      .getVoices()
                      .filter((e) => /^ja/i.test(e.lang))
                      .map((e) => `${e.name} (${e.lang})`)
                  : [],
            }));
      },
      update(e) {
        let n = i;
        if (t || !n || !n.created) return;
        if (!n.running) {
          if (((de += e), de >= 0.25)) {
            de = 0;
            try {
              ee();
            } catch (e) {
              Te(e);
            }
          }
          return;
        }
        let r = performance.now();
        if (((de += e), de >= 0.05)) {
          de = 0;
          try {
            he(ue);
          } catch (e) {
            Te(e);
          }
          ue = (ue + 1) % 5;
        }
        if (((oe += e), oe >= 0.25)) {
          try {
            se(oe);
          } catch (e) {
            Te(e);
          }
          oe = 0;
        }
        n.tickB && le(n.tickDtB);
        let a = performance.now() - r;
        (a > c.maxMs && (c.maxMs = a),
          (d += a),
          ++f >= 120 && ((c.avgMs = +(d / f).toFixed(4)), (d = 0), (f = 0)),
          c.frames++);
      },
    },
    we = !1,
    Te = (e) => {
      we || ((we = !0), console.warn(`[audio:tokyo]`, e));
    },
    Ee = (t, n) => {
      let r = e.vehicles?.playerVehicle;
      return r && Math.hypot(r.body.x - t, r.body.z - n) < 4
        ? r.kind === `mamachari`
        : i?.findBody?.(t, n)?.userData?.kind === `mamachari`;
    },
    De = () => {
      e.events.on(`ped:line`, (e) => {
        if (!o?.ja || !So(`peds.bubble.${e.id}`)) return;
        let t = yo(`peds.bubble.${e.id}`),
          n = t.ja.includes(`！`),
          r = e.seed;
        m(t.ja, {
          x: e.x,
          y: e.y,
          z: e.z,
          maxDist: n ? 26 : 16,
          priority: n ? 3 : 2,
          volume: n ? 0.8 : 0.55,
          pitch: e.female ? 1.25 + r * 0.15 : 0.8 + r * 0.15,
          rate: n ? 1.2 : 1.05,
          channel: `peds`,
          minGap: 7,
        });
      });
    };
  return Ce;
}
