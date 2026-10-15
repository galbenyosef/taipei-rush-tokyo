// tokyo/assets/region-tokyo-55J_WESF 488 — math
// Lines 176089-176410 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
async function sHe(e) {
  let t = e.ctx,
    n = t.params.has(`autosolve`),
    r = Ho().length,
    i = Go(R9[0], R9[1], 40)?.s ?? 0,
    a = new ie(ge(`c1-race`, t.time?.date?.d ?? 1)),
    o = Ge(t);
  ((e.step = `c1-grid`), await e.hud.fade(1, 0.45));
  let s = [
      [i - 8, z9],
      [i - 8, B9],
      [i - 22, z9],
      [i - 22, B9],
    ],
    c = n ? 0 : 2,
    l = G9(i, 0);
  if (
    (await Promise.resolve(t.districts?.ensureResident?.(l.x, l.z)).catch(
      () => {},
    ),
    !e.alive)
  )
    return { place: 0, time: 0, best: 0, finished: !1 };
  let u = [],
    d = (e, t, n) => ({
      v: e,
      rival: t,
      drv: null,
      prog: n - i,
      lastS: n,
      hint: -1,
      finished: !1,
      finishT: 0,
      stuckT: 0,
    }),
    f = { mid: K9(V9, 1), fast: K9(z9, 1), slow: K9(B9, 1) },
    p = 0,
    m = null;
  for (let r = 0; r < s.length; r++) {
    let [i, a] = s[r],
      o = G9(i, a);
    if (r === c) {
      let r = e.vehicle(`sports`, o.x, o.z, o.heading, {
        color: 14166058,
        seed: 0.37,
        y: o.y,
      });
      if (!r)
        return (
          e.hud.fade(0, 0.4),
          e.fail({
            zh: `車輛無法生成`,
            en: `The car could not be spawned`,
            ja: `車を用意できなかった`,
          }),
          { place: 0, time: 0, best: 0, finished: !1 }
        );
      try {
        t.vehicles.putPlayerIn(r);
      } catch {}
      try {
        t.cameraRig?.snapBehind?.();
      } catch {}
      ((r.scripted = { ...iHe }),
        (m = d(r, null, i)),
        n &&
          (m.drv = new wt(t, r, f.mid, {
            maxSpeed: 60,
            latAccel: 11,
            decel: 8,
            canReset: !1,
            avoid: !0,
            swerve: 2.2,
          })),
        u.push(m));
      continue;
    }
    let l = W9[p++],
      h = e.vehicle(l.kind, o.x, o.z, o.heading, {
        driver: `ai`,
        locked: !0,
        color: l.color,
        seed: (ge(`c1-rival`, p) % 1e3) / 1e3,
        y: o.y,
      });
    if (!h) continue;
    ((h.driver = `ai`), (h.controls.hold = !0));
    let g = d(h, l, i);
    ((g.drv = new wt(t, h, p % 2 ? f.mid : a === z9 ? f.fast : f.mid, {
      maxSpeed: h.spec.maxSpeed * (0.78 + 0.16 * l.skill),
      latAccel: 8.5 + 3 * l.skill,
      decel: 8,
      canReset: !1,
      avoid: !0,
      swerve: 2.2,
    })),
      u.push(g));
  }
  let h = m,
    g = [],
    _ = [`sedan`, `taxi`, `van`, `kei`, `truck`, `cab`],
    v = { fast: K9(3, -1), slow: K9(6.6, -1) };
  for (let n = 0; n < 11; n++) {
    let o = n % 3 == 2 ? -1 : 1,
      s = o > 0 ? (a.next() < 0.7 ? B9 : z9) : a.next() < 0.6 ? 6.6 : 3,
      c = G9(i + 260 + (r / 11) * n + a.range(-40, 40), s, o),
      l = _[Math.floor(a.next() * _.length) % _.length],
      u = e.vehicle(l, c.x, c.z, c.heading, {
        driver: `ai`,
        locked: !0,
        y: c.y,
      });
    if (!u) continue;
    u.driver = `ai`;
    let d = o > 0 ? (s === B9 ? f.slow : f.fast) : s === 6.6 ? v.slow : v.fast;
    g.push({
      v: u,
      drv: new wt(t, u, d, {
        maxSpeed: a.range(15, 22),
        latAccel: 4,
        decel: 5,
        canReset: !1,
        avoid: !0,
      }),
      dir: o,
      lat: s,
      stuckT: 0,
    });
  }
  let y = new oHe(t);
  T4.paused = !0;
  let b = !1,
    x = () => {
      b ||
        ((b = !0),
        (T4.paused = !1),
        y.remove(),
        h.v.scripted && (h.v.scripted = null));
    };
  (e.onCleanup(x), e.hud.fade(0, 0.6));
  let S = (e) => ze(o, e),
    C = (t, n) => {
      if (!t?.rival) return;
      let r = rHe[n];
      e.queueLine(
        S(t.rival.name),
        S(r[Math.floor(a.next() * r.length) % r.length]),
      );
    };
  (e.objective({
    zh: `首都高 C1：繞內環 ${L9} 圈，贏過車隊`,
    en: `Shuto C1: ${L9} laps of the Inner Circular Route — beat the club`,
    ja: `首都高C1：都心環状線を${L9}周、クラブに勝て`,
  }),
    C(
      u.find((e) => e.rival),
      `start`,
    ),
    (e.step = `c1-countdown`));
  let w = 0,
    T = 0,
    E = { kind: `c1race`, x: l.x, z: l.z };
  (await e.until((t) => {
    ((w += t), (e.waitFor = E));
    let n = 3 - Math.floor(w);
    return (
      n !== T && n > 0 && ((T = n), y.count(String(n)), e.sfx(`beep`)),
      w >= 3
    );
  }),
    y.count(`GO!`, !0),
    e.sfx(`beep_go`));
  for (let e of u) e !== h && (e.v.controls.hold = !1);
  (h.v.scripted && !n && (h.v.scripted = null), (e.step = `c1-race`));
  let D = 0,
    O = 0,
    k = 0,
    A = 0,
    j = 0,
    ee = 0,
    M = u.length,
    te = 4,
    ne = M,
    re = 0,
    ae = [],
    oe = L9 * r;
  (await e.until((n) => {
    ((D += n), (re += n), re > 1.2 && y.count(``), (te -= n));
    for (let e of u) {
      if (!e.drv) continue;
      if (e === h) {
        ((e.v.controls.hold = !1),
          e.drv.update(n),
          (h.v.scripted = { ...h.v.controls }));
        continue;
      }
      let t = e.prog - h.prog,
        r = Math.max(0.88, Math.min(1.12, 1 - t / 1500));
      e.drv.update(n, e.finished ? 0.45 : r);
    }
    for (let e of g) e.drv.update(n);
    for (let e of u) {
      let a = Go(e.v.body.x, e.v.body.z, 40, e.hint);
      if (a) {
        e.hint = a.k;
        let t = a.s - e.lastS;
        if (
          (t < -r / 2 && (t += r),
          t > r / 2 && (t -= r),
          (e.prog += t),
          (e.lastS = a.s),
          e !== h)
        ) {
          let t =
            Math.abs(a.lat) > 10.5 || Math.abs(e.v.object.position.y - a.y) > 3;
          e.stuckT = Math.abs(e.v.speed) < 2 || t ? e.stuckT + n : 0;
        }
      } else e !== h && (e.stuckT += n);
      (e !== h &&
        e.stuckT > 3 &&
        Math.hypot(e.v.body.x - h.v.body.x, e.v.body.z - h.v.body.z) > 60 &&
        ((e.stuckT = 0), q9(t, e.v, i + (e.prog % r) + 10, V9)),
        !e.finished &&
          e.prog >= oe &&
          ((e.finished = !0), (e.finishT = D), ae.push(e)));
    }
    for (let e of g)
      if (
        ((e.stuckT = Math.abs(e.v.speed) < 1 ? e.stuckT + n : 0),
        e.stuckT > 6 &&
          Math.hypot(e.v.body.x - h.v.body.x, e.v.body.z - h.v.body.z) > 80)
      ) {
        e.stuckT = 0;
        let n = Go(e.v.body.x, e.v.body.z, 60);
        q9(t, e.v, (n?.s ?? 0) + 30 * e.dir, e.lat, e.dir);
      }
    let a = Math.floor(Math.max(0, h.prog) / r);
    if (a > A && !h.finished) {
      let e = D - O;
      ((O = D),
        (A = a),
        (k === 0 || e < k) && (k = e),
        y.note(`${t.t({ zh: `單圈`, en: `Lap` })} ${J9(e)}`),
        A === 1 &&
          C(
            u.find((e) => e.rival && e.prog > h.prog - 400),
            `final`,
          ));
    } else y.note(``, n);
    if (
      ((M =
        1 +
        u.filter(
          (e) =>
            e !== h &&
            (e.finished
              ? !h.finished || e.finishT < h.finishT
              : e.prog > h.prog),
        ).length),
      te < 0 && M !== ne)
    ) {
      te = 9;
      let e = u
        .filter((e) => e.rival)
        .sort(
          (e, t) => Math.abs(e.prog - h.prog) - Math.abs(t.prog - h.prog),
        )[0];
      C(e, M < ne ? `passed` : `pass`);
    }
    ((ne = M), y.set(M, u.length, A + 1, L9, D, k));
    let o = Go(h.v.body.x, h.v.body.z, 40, h.hint),
      s =
        !o || Math.abs(o.lat) > 11 || Math.abs(h.v.object.position.y - o.y) > 4,
      c = t.vehicles.playerVehicle === h.v;
    return (
      (j = s ? j + n : Math.max(0, j - n * 2)),
      (ee = c ? 0 : ee + n),
      ee > 0.5
        ? y.warning(
            t.t({
              zh: `回到車上！`,
              en: `Get back in your car!`,
              ja: `車に戻れ！`,
            }),
          )
        : j > 0.5
          ? y.warning(
              t.t({
                zh: `回到 C1 上！`,
                en: `Get back on C1!`,
                ja: `C1に戻れ！`,
              }),
            )
          : y.warning(``),
      (e.waitFor = { kind: `c1race`, x: h.v.body.x, z: h.v.body.z }),
      ee > 12 ||
        j > 10 ||
        (h.prog >= oe && !h.finished && ((h.finished = !0), (h.finishT = D)),
        h.finished || D > 900)
    );
  }),
    y.warning(``),
    (e.waitFor = null));
  let se = h.finished;
  se &&
    (y.count(
      M === 1 ? `1st!` : `${M}${M === 2 ? `nd` : M === 3 ? `rd` : `th`}`,
      M === 1,
    ),
    C(
      u.find(
        (e) => e.rival && e.rival.skill === Math.max(...W9.map((e) => e.skill)),
      ),
      M === 1 ? `lose` : `win`,
    ));
  for (let e of u) e !== h && e.drv && (e.drv.opts.maxSpeed *= 0.5);
  return (
    await e.wait(2.5),
    x(),
    { place: M, time: h.finishT, best: k, finished: se }
  );
}
