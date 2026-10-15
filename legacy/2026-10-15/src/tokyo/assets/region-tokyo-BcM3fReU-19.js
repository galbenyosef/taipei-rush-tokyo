// tokyo/assets/region-tokyo-BcM3fReU 19 — path
// Lines 14623-14993 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Rc(e) {
  let t = e.dataset,
    n = Array.isArray(t.rail) ? t.rail : [],
    r = n.find((e) => e.id === `jr-main`);
  if (!r) return null;
  let i = Array.isArray(t.stations) ? t.stations : [],
    a = [],
    o = (e, t, n, r, i) => {
      let o = new Mc(i ?? e.path),
        s = {
          id: e.id,
          path: o,
          deck: r,
          edge0: t,
          edge1: n,
          kinds: new Uint8Array(Math.ceil(o.len) + 2),
          draw0: 0,
          draw1: o.len,
          tracks: [],
          platforms: [],
          hood: null,
          under: null,
          upper: null,
          brick: [],
          girders: [],
        };
      for (let t of e.arches ?? []) {
        if (t.style !== `brick`) continue;
        let n = Ic(e.path, t.from),
          r = Ic(e.path, t.to),
          i = o.project(n[0], n[1]).s,
          a = o.project(r[0], r[1]).s;
        s.brick.push([Math.min(i, a), Math.max(i, a)]);
      }
      return (a.push(s), s);
    },
    s = (e) => i.find((t) => t.id === e),
    c = (e, t, n, r) =>
      e
        ? { ja: e.name.ja ?? t, zh: e.name.zh, en: e.name.en }
        : { ja: t, zh: n, en: r },
    l = (e) => ({ at: (t) => e.at(t) + Cc }),
    u = (e, t) => e.deck.at(t) + Cc + wc,
    d = (e, t, n, r, i, a, o = 0, s = n.path.len) => {
      let c = {
        id: e,
        line: t,
        corridor: n,
        dir: r,
        off: i,
        y: a,
        s0: o,
        s1: s,
        stops: [],
      };
      return (n.tracks.push(c), c);
    },
    f = {
      ktn: -12.3,
      jyi: -8.6,
      jyo: 0.3,
      kts: 4,
      skn: 8.3,
      sks: 12.3,
      skTokyo: 17.65,
    },
    p = new Mc(r.path),
    m = s(`jy-tokyo`),
    h = m ? p.project(m.x, m.z).s : -1e9,
    g = s(`jy-akihabara`),
    _ = (g ? p.project(g.x, g.z).s : -1e9) + 64 + 34,
    v = _ + 70,
    y = h - 64 - 8,
    b = h + 64 + 8,
    x = new kc([y - 70, f.sks, y, f.skTokyo, b, f.skTokyo, b + 70, f.sks]),
    S = kc.c(r.deck ?? 8),
    C =
      m && Tc[`jy-tokyo`] ? Tc[`jy-tokyo`].map((e) => p.project(m.x, e).s) : [],
    w = Math.min(y - 4, ...C),
    T = Math.max(b + 4, ...C),
    E = new kc([
      w - 70 - 2,
      14.5,
      w,
      20,
      T,
      20,
      T + 70 + 2,
      14.5,
      v + 1,
      14.5,
      v + 2,
      6,
    ]),
    D = o(r, kc.c(-14.5), E, S);
  D.hood = [_, v];
  let O = l(S),
    k = d(`jy-in`, `JY`, D, 1, kc.c(f.jyi), O),
    A = d(`jy-out`, `JY`, D, -1, kc.c(f.jyo), O);
  (d(`jk-n`, `JK`, D, 1, kc.c(f.ktn), O),
    d(`jk-s`, `JK`, D, -1, kc.c(f.kts), O));
  let j = d(`sk-n`, `SK`, D, 1, kc.c(f.skn), O, 0, v - 6),
    M = d(`sk-s`, `SK`, D, -1, x, O, 0, v - 6);
  j.hideAfter = M.hideAfter = _ - 1;
  for (let e of i) {
    if (e.line !== `JY`) continue;
    let t = D.path.project(e.x, e.z);
    t.d > 40 ||
      D.platforms.push({
        id: e.id,
        code: e.code ?? ``,
        name: c(e, e.name.zh, e.name.zh, e.name.en),
        line: `JY`,
        corridor: D,
        sc: t.s,
        s0: t.s - 64,
        s1: t.s + 64,
        o0: f.jyi + Ec,
        o1: f.jyo - Ec,
        y: u(D, t.s),
        tracks: [k, A],
        rideable: !0,
      });
  }
  m &&
    D.platforms.push({
      id: `sk-tokyo`,
      code: ``,
      name: c(m, `東京`, `東京`, `Tokyo`),
      line: `SK`,
      corridor: D,
      sc: h,
      s0: h - 64,
      s1: h + 64,
      o0: f.skn + Ec + 0.05,
      o1: f.skTokyo - Ec - 0.05,
      y: u(D, h),
      tracks: [j, M],
      rideable: !1,
    });
  let ee = n.find((e) => e.id === `jr-chuo`),
    te = -1 / 0,
    ne = -1 / 0;
  if (ee && ee.path.length >= 3) {
    let t = ee.halfWidth ?? 7,
      n = ee.path,
      r = n[n.length - 1],
      i = n[n.length - 2],
      a = { x: 0, z: 0, tx: 0, tz: 1 },
      f = (e) => {
        let t = r[0],
          n = 1 / 0;
        for (let r = 0; r < D.path.len; r += 2)
          (D.path.at(r, a),
            Math.abs(a.z - e) < n && ((n = Math.abs(a.z - e)), (t = a.x)));
        return t;
      },
      p = -10.45,
      h = f(r[1] + 30) + p,
      g = Math.max(0.3, Math.min(0.9, (h - 16 - i[0]) / (r[0] - i[0] || 1))),
      _ = [i[0] + (r[0] - i[0]) * g, i[1] + (r[1] - i[1]) * g],
      v = (m ? m.z : 0) + 64 + 10,
      y = [];
    {
      let e = { x: 0, z: 0 },
        t = D.path.project(h, _[1] + 48).s,
        n = D.path.project(f(v) + p, v).s,
        r = n < t ? -1 : 1;
      for (let i = t; (i - n) * r < 0; i += 8 * r)
        y.push([D.path.pos(i, p, e).x, e.z]);
      y.push([D.path.pos(n, p, e).x, e.z]);
    }
    let b = y[y.length - 1][0],
      x = [...n.slice(0, -1).map((e) => [e[0], e[1]]), _, ...y],
      S = new Mc(x),
      C = S.project(i[0], i[1]).s,
      w = S.project(_[0], _[1]).s,
      T = S.project(b, v).s,
      E = (e, t) => S.project(e, t).s,
      O = e.landmarks.find((e) => e.id === `ochanomizu-station`),
      k = O ? E(O.x, n[0][1]) : -1e9,
      A = s(`jy-kanda`),
      j = A ? E(h, A.z) : -1e9,
      M = T - 64 - 6,
      N = new kc([C, ee.deck ?? 9, w + 10, 15.5]),
      re = [];
    for (let [e, n] of [
      [w, t],
      [w + 30, 5],
      ...[j, M].flatMap((e) => [
        [e - 64 - 50, 5],
        [e - 64 - 4, 7.2],
        [e + 64 + 4, 7.2],
        [e + 64 + 50, 5],
      ]),
    ].sort((e, t) => e[0] - t[0]))
      re.push(e, n);
    let ie = new kc(re),
      ae = o(ee, jc(ie), ie, N, x);
    ((ae.draw0 = 0), (ae.draw1 = T + 1));
    let oe = l(N),
      se = [],
      ce = [];
    for (let e of [k, j])
      (se.push(
        e - 64 - 60,
        -2.2,
        e - 64 - 4,
        -4.65,
        e + 64 + 4,
        -4.65,
        e + 64 + 60,
        -2.2,
      ),
        ce.push(
          e - 64 - 60,
          2.2,
          e - 64 - 4,
          4.65,
          e + 64 + 4,
          4.65,
          e + 64 + 60,
          2.2,
        ));
    (se.push(M - 64 - 60, -2.2, M - 64 - 4, -4.65),
      ce.push(M - 64 - 110, 2.2, M - 64 - 12, -4.65));
    let P = (e) => {
        let t = [];
        for (let n = 0; n < e.length; n += 2) t.push([e[n], e[n + 1]]);
        return (t.sort((e, t) => e[0] - t[0]), new kc(t.flat()));
      },
      le = d(`jc-e`, `JC`, ae, 1, P(se), oe, 0, T - 2),
      ue = d(`jc-w`, `JC`, ae, -1, P(ce), oe, 0, T - 2),
      de = d(`jc-x`, `JC`, ae, 1, kc.c(4.65), oe, M - 64 - 30, T - 2),
      fe = (e, t, n, r, i) =>
        ae.platforms.push({
          id: e,
          code: t,
          name: r,
          line: `JC`,
          corridor: ae,
          sc: n,
          s0: n - 64,
          s1: n + 64,
          o0: -3.0000000000000004,
          o1: 3.0000000000000004,
          y: u(ae, n),
          tracks: i,
          rideable: !1,
        });
    (O &&
      fe(
        `jc-ochanomizu`,
        `JC03`,
        k,
        { ja: `御茶ノ水`, zh: `御茶之水`, en: `Ochanomizu` },
        [le, ue],
      ),
      A && fe(`jc-kanda`, `JC02`, j, c(A, `神田`, `神田`, `Kanda`), [le, ue]),
      m && fe(`jc-tokyo`, `JC01`, M, c(m, `東京`, `東京`, `Tokyo`), [le, de]),
      (ae.upper = { lower: D, colOnGround: 5.9, colOnDeck: -6.3 }));
    let pe = D.path.project(h, _[1] + 40).s,
      me = D.path.project(b, v).s;
    D.under = [Math.min(pe, me), Math.max(pe, me)];
    let he = n[0],
      ge = n[1];
    Math.abs(he[1] - ge[1]) < 1 &&
      ((te = he[1] - t), (ne = Math.max(he[0], ge[0])));
  }
  let N = n.find((e) => e.id === `jr-sobu`);
  if (N) {
    let t = new Mc(N.path),
      n = N.path[0][1],
      r = -35;
    {
      let e = { x: 0, z: 0, tx: 0, tz: 1 },
        t = 1 / 0;
      for (let i = 0; i < D.path.len; i += 1) {
        D.path.at(i, e);
        let a = Math.abs(e.z - n);
        a < t && ((t = a), (r = e.x));
      }
    }
    let i = t.project(r, n).s,
      a = e.landmarks.find((e) => e.id === `ochanomizu-station`),
      s = a && Math.abs(a.z - n) < 40 ? t.project(a.x + 10, n).s : null,
      f = s === null ? [i] : [s, i],
      p = [],
      m = [];
    for (let e of f)
      (p.push(
        e - 64 - 60,
        2.2,
        e - 64 - 4,
        4.65,
        e + 64 + 4,
        4.65,
        e + 64 + 60,
        2.2,
      ),
        m.push(e - 64 - 64, 6, e - 64 - 2, 7, e + 64 + 2, 7, e + 64 + 64, 6));
    let h = n + 7,
      _ = kc.c(0);
    if (Number.isFinite(te) && h > te - 0.5) {
      let e = h - te + 0.6,
        r = t.project(ne, n).s;
      _ = new kc([r - 40, -e, r + 50, 0]);
    }
    let v = new kc(p),
      y = new kc(m),
      b = kc.c(Math.max(16, N.deck ?? 15)),
      x = o(N, Ac(_, jc(y)), Ac(_, y), b),
      S = l(b),
      C = d(`jb-e`, `JB`, x, 1, Ac(_, jc(v)), S),
      w = d(`jb-w`, `JB`, x, -1, Ac(_, v), S);
    for (let e of f) {
      let t = e === i,
        n = _.at(e);
      x.platforms.push({
        id: t ? `jb-akihabara` : `jb-ochanomizu`,
        code: t ? `JB19` : `JB18`,
        name: t
          ? c(g, `秋葉原`, `秋葉原`, `Akihabara`)
          : { ja: `御茶ノ水`, zh: `御茶之水`, en: `Ochanomizu` },
        line: `JB`,
        corridor: x,
        sc: e,
        s0: e - 64,
        s1: e + 64,
        o0: n - 4.65 + Ec,
        o1: n + 4.65 - Ec,
        y: u(x, e),
        tracks: [C, w],
        rideable: !1,
      });
    }
  }
  let re = [],
    ie = [];
  for (let e of a) {
    for (let t of e.tracks)
      ((t.stops = e.platforms
        .filter((e) => e.tracks.includes(t))
        .sort((e, t) => e.sc - t.sc)),
        re.push(t));
    ie.push(...e.platforms);
  }
  for (let t of a) zc(e, t, a);
  let ae = [],
    oe = 0,
    se = { x: 0, z: 0 };
  for (let e of a) {
    let t = Math.max(e.draw0, e.path.s0 - 40),
      n = Math.min(e.draw1, e.path.s1 + 40);
    for (let r = t; r <= n; r += 4) {
      let t = e.edge0.at(r),
        n = e.edge1.at(r),
        i = (t + n) / 2,
        a = (n - t) / 2 + 2;
      (e.path.pos(r, i, se), ae.push(se.x, se.z, a), (oe = Math.max(oe, a)));
    }
  }
  return {
    corridors: a,
    byId: new Map(a.map((e) => [e.id, e])),
    tracks: re,
    platforms: ie,
    clearance: new Float32Array(ae),
    maxR: oe,
  };
}
