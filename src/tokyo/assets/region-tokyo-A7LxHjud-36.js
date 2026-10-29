// tokyo/assets/region-tokyo-A7LxHjud 36 — path
// Lines 19063-19469 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function eie(e) {
  let t = e.dataset,
    n = Array.isArray(t.rail) ? t.rail : [],
    r = n.find((e) => e.id === `jr-main`);
  if (!r) return null;
  let i = Array.isArray(t.stations) ? t.stations : [],
    a = [],
    o = (e, t, n, r, i) => {
      let o = new tc(i ?? e.path, Ks, e.closedAt && !i ? 0 : 420),
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
      e.closedAt &&
        !i &&
        ((s.loopLen = new tc(e.path.slice(0, e.closedAt + 1), Ks, 0).len),
        (s.draw1 = s.loopLen),
        (o.projLimit = s.loopLen));
      for (let t of e.arches ?? []) {
        if (t.style !== `brick`) continue;
        let n = ic(e.path, t.from),
          r = ic(e.path, t.to),
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
    l = (e) => ({ at: (t) => e.at(t) + qs }),
    u = (e, t) => e.deck.at(t) + qs + Zre,
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
    p = new tc(r.path, Ks, r.closedAt ? 0 : 420),
    m = r.closedAt ? new tc(r.path.slice(0, r.closedAt + 1), Ks, 0).len : 0;
  m && (p.projLimit = m);
  let h = m ? p.project(-582, -1616).s : p.len,
    g = s(`jy-tokyo`),
    _ = g ? p.project(g.x, g.z).s : -1e9,
    v = s(`jy-akihabara`),
    y = (v ? p.project(v.x, v.z).s : -1e9) + 64 + 34,
    b = y + 70,
    x = _ - 64 - 8,
    S = _ + 64 + 8,
    C = new Qs([x - 70, f.sks, x, f.skTokyo, S, f.skTokyo, S + 70, f.sks]),
    w = m ? $re(p, m, r.deck ?? 8) : Qs.c(r.deck ?? 8),
    T =
      g && Js[`jy-tokyo`] ? Js[`jy-tokyo`].map((e) => p.project(g.x, e).s) : [],
    E = Math.min(x - 4, ...T),
    D = Math.max(S + 4, ...T),
    O = [
      E - 70 - 2,
      14.5,
      E,
      20,
      D,
      20,
      D + 70 + 2,
      14.5,
      b + 1,
      14.5,
      b + 2,
      6,
    ],
    k = [0, -14.5];
  m &&
    (O.push(h, 6, h + 80, 4.6, m - 80, 4.6, m, 14.5),
    k.push(h, -14.5, h + 80, -12.6, m - 80, -12.6, m, -14.5));
  let A = new Qs(O),
    j = o(r, new Qs(k), A, w);
  j.hood = [y, b];
  let M = l(w),
    ee = m || j.path.len,
    te = d(`jy-in`, `JY`, j, 1, Qs.c(f.jyi), M, 0, ee),
    ne = d(`jy-out`, `JY`, j, -1, Qs.c(f.jyo), M, 0, ee);
  (d(`jk-n`, `JK`, j, 1, Qs.c(f.ktn), M, 0, h),
    d(`jk-s`, `JK`, j, -1, Qs.c(f.kts), M, 0, h));
  let re = d(`sk-n`, `SK`, j, 1, Qs.c(f.skn), M, 0, b - 6),
    ie = d(`sk-s`, `SK`, j, -1, C, M, 0, b - 6);
  re.hideAfter = ie.hideAfter = y - 1;
  for (let e of i) {
    if (e.line !== `JY`) continue;
    let t = j.path.project(e.x, e.z);
    t.d > 40 ||
      j.platforms.push({
        id: e.id,
        code: e.code ?? ``,
        name: c(e, e.name.zh, e.name.zh, e.name.en),
        line: `JY`,
        corridor: j,
        sc: t.s,
        s0: t.s - 64,
        s1: t.s + 64,
        o0: f.jyi + Ys,
        o1: f.jyo - Ys,
        y: u(j, t.s),
        tracks: [te, ne],
        rideable: !0,
      });
  }
  g &&
    j.platforms.push({
      id: `sk-tokyo`,
      code: ``,
      name: c(g, `東京`, `東京`, `Tokyo`),
      line: `SK`,
      corridor: j,
      sc: _,
      s0: _ - 64,
      s1: _ + 64,
      o0: f.skn + Ys + 0.05,
      o1: f.skTokyo - Ys - 0.05,
      y: u(j, _),
      tracks: [re, ie],
      rideable: !1,
    });
  let ae = n.find((e) => e.id === `jr-chuo`),
    oe = -1 / 0,
    se = -1 / 0;
  if (ae && ae.path.length >= 3) {
    let t = ae.halfWidth ?? 7,
      n = ae.path,
      r = n[n.length - 1],
      i = n[n.length - 2],
      a = { x: 0, z: 0, tx: 0, tz: 1 },
      f = (e) => {
        let t = r[0],
          n = 1 / 0;
        for (let r = 0; r < h; r += 2)
          (j.path.at(r, a),
            Math.abs(a.z - e) < n && ((n = Math.abs(a.z - e)), (t = a.x)));
        return t;
      },
      p = -10.45,
      m = f(r[1] + 30) + p,
      _ = Math.max(0.3, Math.min(0.9, (m - 16 - i[0]) / (r[0] - i[0] || 1))),
      v = [i[0] + (r[0] - i[0]) * _, i[1] + (r[1] - i[1]) * _],
      y = (g ? g.z : 0) + 64 + 10,
      b = [];
    {
      let e = { x: 0, z: 0 },
        t = j.path.project(m, v[1] + 48).s,
        n = j.path.project(f(y) + p, y).s,
        r = n < t ? -1 : 1;
      for (let i = t; (i - n) * r < 0; i += 8 * r)
        b.push([j.path.pos(i, p, e).x, e.z]);
      b.push([j.path.pos(n, p, e).x, e.z]);
    }
    let x = b[b.length - 1][0],
      S = [...n.slice(0, -1).map((e) => [e[0], e[1]]), v, ...b],
      C = new tc(S),
      w = C.project(i[0], i[1]).s,
      T = C.project(v[0], v[1]).s,
      E = C.project(x, y).s,
      D = (e, t) => C.project(e, t).s,
      O = e.landmarks.find((e) => e.id === `ochanomizu-station`),
      k = O ? D(O.x, n[0][1]) : -1e9,
      A = s(`jy-kanda`),
      M = A ? D(m, A.z) : -1e9,
      ee = E - 64 - 6,
      te = new Qs([w, ae.deck ?? 9, T + 10, 15.5]),
      ne = [];
    for (let [e, n] of [
      [T, t],
      [T + 30, 5],
      ...[M, ee].flatMap((e) => [
        [e - 64 - 50, 5],
        [e - 64 - 4, 7.2],
        [e + 64 + 4, 7.2],
        [e + 64 + 50, 5],
      ]),
    ].sort((e, t) => e[0] - t[0]))
      ne.push(e, n);
    let re = new Qs(ne),
      ie = o(ae, ec(re), re, te, S);
    ((ie.draw0 = 0), (ie.draw1 = E + 1));
    let ce = l(te),
      le = [],
      ue = [];
    for (let e of [k, M])
      (le.push(
        e - 64 - 60,
        -2.2,
        e - 64 - 4,
        -4.65,
        e + 64 + 4,
        -4.65,
        e + 64 + 60,
        -2.2,
      ),
        ue.push(
          e - 64 - 60,
          2.2,
          e - 64 - 4,
          4.65,
          e + 64 + 4,
          4.65,
          e + 64 + 60,
          2.2,
        ));
    (le.push(ee - 64 - 60, -2.2, ee - 64 - 4, -4.65),
      ue.push(ee - 64 - 110, 2.2, ee - 64 - 12, -4.65));
    let de = (e) => {
        let t = [];
        for (let n = 0; n < e.length; n += 2) t.push([e[n], e[n + 1]]);
        return (t.sort((e, t) => e[0] - t[0]), new Qs(t.flat()));
      },
      fe = d(`jc-e`, `JC`, ie, 1, de(le), ce, 0, E - 2),
      pe = d(`jc-w`, `JC`, ie, -1, de(ue), ce, 0, E - 2),
      me = d(`jc-x`, `JC`, ie, 1, Qs.c(4.65), ce, ee - 64 - 30, E - 2),
      he = (e, t, n, r, i) =>
        ie.platforms.push({
          id: e,
          code: t,
          name: r,
          line: `JC`,
          corridor: ie,
          sc: n,
          s0: n - 64,
          s1: n + 64,
          o0: -3.0000000000000004,
          o1: 3.0000000000000004,
          y: u(ie, n),
          tracks: i,
          rideable: !1,
        });
    (O &&
      he(
        `jc-ochanomizu`,
        `JC03`,
        k,
        { ja: `御茶ノ水`, zh: `御茶之水`, en: `Ochanomizu` },
        [fe, pe],
      ),
      A && he(`jc-kanda`, `JC02`, M, c(A, `神田`, `神田`, `Kanda`), [fe, pe]),
      g && he(`jc-tokyo`, `JC01`, ee, c(g, `東京`, `東京`, `Tokyo`), [fe, me]),
      (ie.upper = { lower: j, colOnGround: 5.9, colOnDeck: -6.3 }));
    let ge = j.path.project(m, v[1] + 40).s,
      _e = j.path.project(x, y).s;
    j.under = [Math.min(ge, _e), Math.max(ge, _e)];
    let ve = n[0],
      ye = n[1];
    Math.abs(ve[1] - ye[1]) < 1 &&
      ((oe = ve[1] - t), (se = Math.max(ve[0], ye[0])));
  }
  let ce = n.find((e) => e.id === `jr-sobu`);
  if (ce) {
    let t = new tc(ce.path),
      n = ce.path[0][1],
      r = -35;
    {
      let e = { x: 0, z: 0, tx: 0, tz: 1 },
        t = 1 / 0;
      for (let i = 0; i < h; i += 1) {
        j.path.at(i, e);
        let a = Math.abs(e.z - n);
        a < t && ((t = a), (r = e.x));
      }
    }
    let i = t.project(r, n).s,
      a = e.landmarks.find((e) => e.id === `ochanomizu-station`),
      s = a && Math.abs(a.z - n) < 40 ? t.project(a.x + 10, n).s : null,
      f = s === null ? [i] : [s, i],
      p = [
        {
          id: `jb-suidobashi`,
          code: `JB17`,
          name: { ja: `水道橋`, zh: `水道橋`, en: `Suidobashi` },
          x: -760,
        },
        {
          id: `jb-iidabashi`,
          code: `JB16`,
          name: { ja: `飯田橋`, zh: `飯田橋`, en: `Iidabashi` },
          x: -1110,
        },
      ].filter((e) => ce.path[0][0] < e.x - 64 - 70),
      m = new Map();
    for (let e of p) {
      let r = t.project(e.x, n).s;
      (f.unshift(r), m.set(r, e));
    }
    let g = [],
      _ = [];
    for (let e of f)
      (g.push(
        e - 64 - 60,
        2.2,
        e - 64 - 4,
        4.65,
        e + 64 + 4,
        4.65,
        e + 64 + 60,
        2.2,
      ),
        _.push(e - 64 - 64, 6, e - 64 - 2, 7, e + 64 + 2, 7, e + 64 + 64, 6));
    let y = n + 7,
      b = Qs.c(0);
    if (Number.isFinite(oe) && y > oe - 0.5) {
      let e = y - oe + 0.6,
        r = t.project(se, n).s;
      b = new Qs([r - 40, -e, r + 50, 0]);
    }
    let x = new Qs(g),
      S = new Qs(_),
      C = Qs.c(Math.max(16, ce.deck ?? 15)),
      w = o(ce, $s(b, ec(S)), $s(b, S), C),
      T = l(C),
      E = d(`jb-e`, `JB`, w, 1, $s(b, ec(x)), T),
      D = d(`jb-w`, `JB`, w, -1, $s(b, x), T);
    for (let e of f) {
      let t = e === i,
        n = b.at(e),
        r = m.get(e);
      w.platforms.push({
        id: r ? r.id : t ? `jb-akihabara` : `jb-ochanomizu`,
        code: r ? r.code : t ? `JB19` : `JB18`,
        name: r
          ? r.name
          : t
            ? c(v, `秋葉原`, `秋葉原`, `Akihabara`)
            : { ja: `御茶ノ水`, zh: `御茶之水`, en: `Ochanomizu` },
        line: `JB`,
        corridor: w,
        sc: e,
        s0: e - 64,
        s1: e + 64,
        o0: n - 4.65 + Ys,
        o1: n + 4.65 - Ys,
        y: u(w, e),
        tracks: [E, D],
        rideable: !1,
      });
    }
  }
  let le = [],
    ue = [];
  for (let e of a) {
    for (let t of e.tracks)
      ((t.stops = e.platforms
        .filter((e) => e.tracks.includes(t))
        .sort((e, t) => e.sc - t.sc)),
        le.push(t));
    ue.push(...e.platforms);
  }
  for (let t of a) tie(e, t, a);
  let de = [],
    fe = 0,
    pe = { x: 0, z: 0 };
  for (let e of a) {
    let t = Math.max(e.draw0, e.path.s0 - 40),
      n = Math.min(e.draw1, e.path.s1 + 40);
    for (let r = t; r <= n; r += 4) {
      let t = e.edge0.at(r),
        n = e.edge1.at(r),
        i = (t + n) / 2,
        a = (n - t) / 2 + 2;
      (e.path.pos(r, i, pe), de.push(pe.x, pe.z, a), (fe = Math.max(fe, a)));
    }
  }
  return {
    corridors: a,
    byId: new Map(a.map((e) => [e.id, e])),
    tracks: le,
    platforms: ue,
    clearance: new Float32Array(de),
    maxR: fe,
  };
}
