// tokyo/assets/region-tokyo-A7LxHjud 489 — math
// Lines 176920-177290 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
async function BHe(e) {
  let t = e.ctx,
    n = t.params.has(`autosolve`),
    r = Ho().length,
    i = Go(OHe[0], OHe[1], 40)?.s ?? 0,
    a = new le(de(`c1-race`, t.time?.date?.d ?? 1)),
    o = Ge(t);
  ((e.step = `c1-grid`), await e.hud.fade(1, 0.45));
  let s = [
      [i - 8, U9],
      [i - 8, W9],
      [i - 22, U9],
      [i - 22, W9],
    ],
    c = n ? 0 : 2,
    l = q9(i, 0);
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
    f = { mid: J9(G9, 1), fast: J9(U9, 1), slow: J9(W9, 1) },
    p = 0,
    m = null;
  for (let r = 0; r < s.length; r++) {
    let [i, a] = s[r],
      o = q9(i, a);
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
      ((r.scripted = { ...PHe }),
        (m = d(r, null, i)),
        n &&
          (m.drv = new Tt(t, r, f.mid, {
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
    let l = MHe[p++],
      h = e.vehicle(l.kind, o.x, o.z, o.heading, {
        driver: `ai`,
        locked: !0,
        color: l.color,
        seed: (de(`c1-rival`, p) % 1e3) / 1e3,
        y: o.y,
      });
    if (!h) continue;
    ((h.driver = `ai`), (h.controls.hold = !0));
    let g = d(h, l, i);
    ((g.drv = new Tt(t, h, p % 2 ? f.mid : a === U9 ? f.fast : f.mid, {
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
    v = { fast: J9(3, -1), slow: J9(6.6, -1) };
  for (let n = 0; n < 11; n++) {
    let o = n % 3 == 2 ? -1 : 1,
      s = o > 0 ? (a.next() < 0.7 ? W9 : U9) : a.next() < 0.6 ? 6.6 : 3,
      c = q9(i + 260 + (r / 11) * n + a.range(-40, 40), s, o),
      l = _[Math.floor(a.next() * _.length) % _.length],
      u = e.vehicle(l, c.x, c.z, c.heading, {
        driver: `ai`,
        locked: !0,
        y: c.y,
      });
    if (!u) continue;
    u.driver = `ai`;
    let d = o > 0 ? (s === W9 ? f.slow : f.fast) : s === 6.6 ? v.slow : v.fast;
    g.push({
      v: u,
      drv: new Tt(t, u, d, {
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
  let y = new RHe(t),
    b = f.mid,
    x = new J3(e, {
      path: b,
      s0: IHe(b, i),
      laps: H9,
      gates: Math.max(12, Math.round(b.length / 250)),
      gateRadius: 4.8,
      chevron: {
        spacing: 12,
        ahead: 230,
        width: 2.4,
        length: 1.8,
        height: 1.3,
      },
      gpsAhead: 1200,
      heightAt: (e, t, n) => Go(e, t, 14)?.y ?? n,
    });
  T4.paused = !0;
  let S = !1,
    C = () => {
      S ||
        ((S = !0),
        x.dispose(),
        (T4.paused = !1),
        y.remove(),
        h.v.scripted && (h.v.scripted = null));
    };
  (e.onCleanup(C), e.hud.fade(0, 0.6));
  let w = (e) => Ye(o, e),
    T = (t, n) => {
      if (!t?.rival) return;
      let r = NHe[n];
      e.queueLine(
        w(t.rival.name),
        w(r[Math.floor(a.next() * r.length) % r.length]),
      );
    };
  (e.objective({
    zh: `首都高 C1：繞內環 ${H9} 圈，贏過車隊`,
    en: `Shuto C1: ${H9} laps of the Inner Circular Route — beat the club`,
    ja: `首都高C1：都心環状線を${H9}周、クラブに勝て`,
  }),
    T(
      u.find((e) => e.rival),
      `start`,
    ),
    (e.step = `c1-countdown`));
  let E = 0,
    D = 0,
    O = { kind: `c1race`, x: l.x, z: l.z };
  (await e.until((t) => {
    ((E += t), (e.waitFor = O));
    let n = 3 - Math.floor(E);
    return (
      n !== D && n > 0 && ((D = n), y.count(String(n)), e.sfx(`beep`)),
      x.update(t, void 0, !1),
      E >= 3
    );
  }),
    y.count(`GO!`, !0),
    e.sfx(`beep_go`));
  for (let e of u) e !== h && (e.v.controls.hold = !1);
  (h.v.scripted && !n && (h.v.scripted = null), (e.step = `c1-race`));
  let k = 0,
    A = 0,
    j = 0,
    M = 0,
    ee = 0,
    te = 0,
    ne = u.length,
    re = 4,
    ie = ne,
    ae = 0,
    oe,
    se = t.params.has(`qawreck`)
      ? Math.max(0, Number(t.params.get(`qawreck`)) || 5)
      : -1,
    ce = [],
    ue = H9 * r;
  if (
    (await e.until((n) => {
      if (
        ((k += n),
        (ae += n),
        ae > 1.2 && y.count(``),
        se >= 0 && k >= se && !h.v.destroyed)
      )
        try {
          t.vehicles.explode?.(h.v);
        } catch {}
      if (zHe(h.v)) return ((oe = `wreck`), !0);
      re -= n;
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
              Math.abs(a.lat) > 10.5 ||
              Math.abs(e.v.object.position.y - a.y) > 3;
            e.stuckT = Math.abs(e.v.speed) < 2 || t ? e.stuckT + n : 0;
          }
        } else e !== h && (e.stuckT += n);
        (e !== h &&
          e.stuckT > 3 &&
          Math.hypot(e.v.body.x - h.v.body.x, e.v.body.z - h.v.body.z) > 60 &&
          ((e.stuckT = 0), FHe(t, e.v, i + (e.prog % r) + 10, G9)),
          !e.finished &&
            e.prog >= ue &&
            ((e.finished = !0), (e.finishT = k), ce.push(e)));
      }
      for (let e of g)
        if (
          ((e.stuckT = Math.abs(e.v.speed) < 1 ? e.stuckT + n : 0),
          e.stuckT > 6 &&
            Math.hypot(e.v.body.x - h.v.body.x, e.v.body.z - h.v.body.z) > 80)
        ) {
          e.stuckT = 0;
          let n = Go(e.v.body.x, e.v.body.z, 60);
          FHe(t, e.v, (n?.s ?? 0) + 30 * e.dir, e.lat, e.dir);
        }
      let a = Math.floor(Math.max(0, h.prog) / r);
      if (a > M && !h.finished) {
        let e = k - A;
        ((A = k),
          (M = a),
          (j === 0 || e < j) && (j = e),
          y.note(`${t.t({ zh: `單圈`, en: `Lap` })} ${Y9(e)}`),
          M === 1 &&
            T(
              u.find((e) => e.rival && e.prog > h.prog - 400),
              `final`,
            ));
      } else y.note(``, n);
      if (
        ((ne =
          1 +
          u.filter(
            (e) =>
              e !== h &&
              (e.finished
                ? !h.finished || e.finishT < h.finishT
                : e.prog > h.prog),
          ).length),
        re < 0 && ne !== ie)
      ) {
        re = 9;
        let e = u
          .filter((e) => e.rival)
          .sort(
            (e, t) => Math.abs(e.prog - h.prog) - Math.abs(t.prog - h.prog),
          )[0];
        T(e, ne < ie ? `passed` : `pass`);
      }
      ((ie = ne), y.set(ne, u.length, M + 1, H9, k, j));
      let o = Go(h.v.body.x, h.v.body.z, 40, h.hint),
        s =
          !o ||
          Math.abs(o.lat) > 11 ||
          Math.abs(h.v.object.position.y - o.y) > 4,
        c = t.vehicles.playerVehicle === h.v;
      ((ee = s ? ee + n : Math.max(0, ee - n * 2)), (te = c ? 0 : te + n));
      let l = !!h.v.onFire;
      if (te > 0.5 && !l) {
        let e = Math.max(1, Math.ceil(kHe - te));
        x.warn(
          t.t({
            zh: `回到車上！（${e}）`,
            en: `Get back in your car! (${e})`,
            ja: `車に戻れ！（${e}）`,
          }),
        );
      } else if (ee > 0.5 && c) {
        let e = Math.max(1, Math.ceil(AHe - ee));
        x.warn(
          t.t({
            zh: `回到 C1 上！（${e}）`,
            en: `Get back on C1! (${e})`,
            ja: `C1に戻れ！（${e}）`,
          }),
        );
      } else x.warn(``);
      return (
        (e.waitFor = { kind: `c1race`, x: h.v.body.x, z: h.v.body.z }),
        x.update(n, void 0, ae > 1.2),
        te > kHe ? (oe = `car`) : ee > AHe && (oe = `off`),
        oe
          ? !0
          : (h.prog >= ue &&
              !h.finished &&
              ((h.finished = !0), (h.finishT = k)),
            k > 900 && !h.finished && (oe = `time`),
            h.finished || !!oe)
      );
    }),
    x.warn(``),
    x.hideHud(),
    (e.waitFor = null),
    oe === `wreck`)
  )
    return (C(), { place: 0, time: k, best: j, finished: !1, dnf: oe });
  let fe = h.finished;
  fe &&
    (y.count(
      ne === 1 ? `1st!` : `${ne}${ne === 2 ? `nd` : ne === 3 ? `rd` : `th`}`,
      ne === 1,
    ),
    T(
      u.find(
        (e) =>
          e.rival && e.rival.skill === Math.max(...MHe.map((e) => e.skill)),
      ),
      ne === 1 ? `lose` : `win`,
    ));
  for (let e of u) e !== h && e.drv && (e.drv.opts.maxSpeed *= 0.5);
  return (
    await e.wait(2.5),
    C(),
    { place: ne, time: h.finishT, best: j, finished: fe, dnf: fe ? void 0 : oe }
  );
}
