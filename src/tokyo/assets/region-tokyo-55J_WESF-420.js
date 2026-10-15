// tokyo/assets/region-tokyo-55J_WESF 420 — math
// Lines 150650-150967 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function g4(e) {
  let t = h4.get(e);
  if (t) return t;
  let n = [],
    r = [],
    i = e.coreBounds;
  for (let t of e.dataset.expressways ?? []) {
    if (!dLe.includes(t.route) || t.levels.length !== t.path.length) continue;
    let a = t.path.length;
    for (let o = 0; o + 1 < a; o++) {
      let [s, c] = t.path[o],
        [l, u] = t.path[o + 1],
        d = Math.abs(u - c) < 0.5 ? `x` : Math.abs(l - s) < 0.5 ? `z` : null;
      if (!d || !(Math.min(t.levels[o], t.levels[o + 1]) > 2.5)) continue;
      let f = d === `x` ? c : s,
        p = d === `x` ? s : c,
        m = d === `x` ? l : u,
        h = Math.min(p, m),
        g = Math.max(p, m),
        _ = p < m ? t.levels[o] : t.levels[o + 1],
        v = p < m ? t.levels[o + 1] : t.levels[o],
        y = (e) => {
          if (e <= 0 || e >= a - 1) return !1;
          let [n, r] = t.path[e - 1],
            [i, o] = t.path[e + 1],
            [s, c] = t.path[e],
            l = Math.abs(c - r) < 0.5 || Math.abs(s - n) < 0.5,
            u = Math.abs(o - c) < 0.5 || Math.abs(i - s) < 0.5;
          return (
            l &&
            u &&
            Math.min(t.levels[e - 1], t.levels[e], t.levels[e + 1]) > 2.5
          );
        },
        b = y(p < m ? o : o + 1),
        x = y(p < m ? o + 1 : o),
        S = d === `x` ? i.minX + 6 : i.minZ + 6,
        C = d === `x` ? i.maxX - 6 : i.maxZ - 6,
        w = b ? h : h < S ? S : h + t.halfWidth,
        T = x ? g : g > C ? C : g - t.halfWidth,
        E = fLe(e, d, f, (w + T) / 2);
      if (!E || T - w < 80) continue;
      let D = b ? h + f4 - 4 : w + 2,
        O = x ? g - f4 + 4 : T - 2,
        k = (e) => _ + ((v - _) * (e - h)) / Math.max(1, g - h);
      (n.push({
        axis: d,
        at: f,
        from: w,
        to: T,
        driveFrom: D,
        driveTo: O,
        yFrom: k(w),
        yTo: k(T),
        half: t.halfWidth,
        road: E,
      }),
        x && p < m && r.push({ x: l, z: u }),
        x && p > m && r.push({ x: s, z: c }));
    }
  }
  return ((t = { runs: n, corners: r }), h4.set(e, t), t);
}
function fLe(e, t, n, r) {
  let i = null,
    a = 1e9;
  for (let o of e.roads) {
    if (o.axis !== t || o.pedestrian) continue;
    let e =
      Math.abs(o.at - n) +
      (r < o.from ? o.from - r : r > o.to ? r - o.to : 0) * 0.1;
    e < a && ((a = e), (i = o));
  }
  return i;
}
function pLe(e) {
  let { runs: t, corners: n } = g4(e.plan);
  if (!t.length) return 0;
  let r = e.statics,
    i = (e, t, n, i, a, o, s) => {
      let c = Math.min(t, n),
        l = Math.max(t, n),
        u = Math.min(i, a),
        d = Math.max(i, a);
      e.axis === `x`
        ? r.addBox(c, e.at + u, l, e.at + d, o, s, `wall`)
        : r.addBox(e.at + u, c, e.at + d, l, o, s, `wall`);
    },
    a = (e, t) => n.some((n) => Math.abs(n.x - e) < 1 && Math.abs(n.z - t) < 1);
  for (let n of t) {
    let t = n.half,
      o = t - p4,
      s = (e) => (n.axis === `x` ? [e, n.at] : [n.at, e]),
      c = s((n.from + n.to) / 2);
    r.addFloor(
      c[0],
      c[1],
      o,
      (n.to - n.from) / 2,
      n.yFrom,
      n.yTo,
      n.axis === `x` ? -Math.PI / 2 : 0,
      `deck`,
    );
    let l = Math.min(n.yFrom, n.yTo),
      u = Math.max(n.yFrom, n.yTo);
    for (let e of [n.from, n.to]) {
      let [t, r] = s(e);
      if (!a(t, r)) {
        let [t, r] = s(e).map((e, t) => e + (t === +(n.axis === `x`) ? -o : 0)),
          [a, c] = s(e).map((e, t) => e + (t === +(n.axis === `x`) ? o : 0));
        for (let [s, d] of cQ(sQ(t, r, a, c)))
          i(
            n,
            e - 0.3,
            e + 0.3,
            -o + 2 * o * s,
            -o + 2 * o * d,
            l - 0.6,
            u + 1.2,
          );
      }
    }
    let d = a(...s(n.from)) ? n.from + t : n.from,
      f = a(...s(n.to)) ? n.to - t : n.to;
    for (let r of [-1, 1]) {
      let a = d;
      for (let [s, c] of [...gLe(e.plan, n, r), ...hLe(n, r * o, d, f)].sort(
        (e, t) => e[0] - t[0],
      ))
        (s > a && i(n, a, Math.min(s, f), r * o, r * t, l - 0.6, u + m4),
          (a = Math.max(a, c)));
      f > a && i(n, a, f, r * o, r * t, l - 0.6, u + m4);
    }
  }
  for (let n of Ao(e.plan)) _4(t, n) && vLe(e, n);
  for (let e of n) {
    let n = t.filter((t) =>
      t.axis === `x`
        ? Math.abs(t.at - e.z) < 1 &&
          (Math.abs(t.from - e.x) < 1 || Math.abs(t.to - e.x) < 1)
        : Math.abs(t.at - e.x) < 1 &&
          (Math.abs(t.from - e.z) < 1 || Math.abs(t.to - e.z) < 1),
    );
    if (n.length !== 2) continue;
    let i = Math.max(n[0].half, n[1].half),
      a = i - p4,
      o =
        n[0].axis === `x`
          ? Math.abs(n[0].from - e.x) < 1
            ? n[0].yFrom
            : n[0].yTo
          : Math.abs(n[0].from - e.z) < 1
            ? n[0].yFrom
            : n[0].yTo;
    r.addFloor(e.x, e.z, i, i, o, o, 0, `deck`);
    let s = 0,
      c = 0;
    for (let t of n) {
      let n =
        t.axis === `x`
          ? Math.abs(t.from - e.x) < 1
            ? t.to
            : t.from
          : Math.abs(t.from - e.z) < 1
            ? t.to
            : t.from;
      t.axis === `x` ? (s = Math.sign(n - e.x)) : (c = Math.sign(n - e.z));
    }
    let l = e.x - s * a,
      u = e.z - c * a;
    (r.addBox(
      Math.min(l, l - s * p4),
      e.z - i,
      Math.max(l, l - s * p4),
      e.z + i,
      o - 0.6,
      o + m4,
      `wall`,
    ),
      r.addBox(
        e.x - i,
        Math.min(u, u - c * p4),
        e.x + i,
        Math.max(u, u - c * p4),
        o - 0.6,
        o + m4,
        `wall`,
      ));
    let d = e.x + s * a,
      f = e.z + c * a;
    r.addBox(
      Math.min(d, d + s * p4),
      Math.min(f, f + c * p4),
      Math.max(d, d + s * p4),
      Math.max(f, f + c * p4),
      o - 0.6,
      o + m4,
      `wall`,
    );
  }
  let o = e.streets.expressways,
    s = [...t].sort((e, t) => t.to - t.from - (e.to - e.from));
  for (let t of s) {
    let n = Ao(e.plan)
      .filter((e) => _4([t], e))
      .map((e) => {
        let [t, n] = Mo(e, e.foot, Oo.lat),
          [r, i] = Mo(e, e.top, Oo.lat);
        return {
          footX: t,
          footZ: n,
          topX: r,
          topZ: i,
          half: Oo.half,
          dir: e.u,
          height: e.deckY,
          side: { on: e.kind === `on`, lat: Oo.lat, gore: e.gore },
        };
      });
    o.push({
      roadId: t.road.id,
      axis: t.axis,
      at: t.at,
      from: t.from,
      to: t.to,
      deckHalf: t.half,
      deckBottom: Math.min(t.yFrom, t.yTo) - 0.5,
      deckTop: (t.yFrom + t.yTo) / 2,
      driveFrom: t.driveFrom,
      driveTo: t.driveTo,
      ...(n.length ? { ramps: n } : {}),
    });
  }
  return (_Le(e.plan), (dee.build = mLe), t.length);
}
function mLe(e) {
  let { d: t, sB: n, deck: r, out: i } = e,
    a = e.nA,
    o = e.sA,
    s = [...e.ramps].sort((e, n) => (e.side.gore - n.side.gore) * t);
  for (let c of s) {
    let s = c.side.gore,
      l = e.junction(c.footX, c.footZ);
    if (l === null || (s - o) * t < 40 || (n - s) * t < 40) continue;
    let u = e.node(...e.P(s, 0), `thru`),
      d = e.link(
        o,
        s - t * 1.5,
        2,
        r.mh,
        r.curb,
        r.speed,
        a.id,
        u.id,
        (o + s) / 2,
        r.y,
      );
    (a.out.push(d.id), u.in.push(d.id));
    let f = c.side.lat,
      p = f - e.laneWidth * 0.5,
      m = f + e.laneWidth * 0.5;
    if (c.side.on) {
      let t = e.link(c.foot, c.top, 1, p, m, e.rampSpeed, l, u.id, c.foot, 0);
      (u.in.push(t.id), i.side.add(t.id));
      let n = i.rampOut.get(l) ?? [];
      (n.push(t.id), i.rampOut.set(l, n));
    } else {
      let t = e.link(c.top, c.foot, 1, p, m, e.rampSpeed, u.id, l, c.foot, 0);
      (u.out.push(t.id), i.side.add(t.id));
    }
    ((a = u), (o = s + t * 1.5));
  }
  let c = e.link(
    o,
    n,
    2,
    r.mh,
    r.curb,
    r.speed,
    a.id,
    e.nB.id,
    (o + n) / 2,
    r.y,
  );
  (a.out.push(c.id), e.nB.in.push(c.id));
}
function hLe(e, t, n, r) {
  let [i, a] = e.axis === `x` ? [n, e.at + t] : [e.at + t, n],
    [o, s] = e.axis === `x` ? [r, e.at + t] : [e.at + t, r];
  return sQ(i, a, o, s).map(([e, t]) => [n + (r - n) * e, n + (r - n) * t]);
}
function _4(e, t) {
  for (let n of e) {
    if (n.axis !== t.axis || Math.abs(n.at - t.at) > 0.5) continue;
    let e = Math.min(t.top, t.gore),
      r = Math.max(t.top, t.gore);
    if (e > n.driveFrom + 40 && r < n.driveTo - 40) return n;
  }
  return null;
}
function gLe(e, t, n) {
  let r = [];
  for (let i of Ao(e))
    i.side === n &&
      _4([t], i) &&
      r.push([Math.min(i.top, i.gore), Math.max(i.top, i.gore)]);
  return r.sort((e, t) => e[0] - t[0]);
}
var v4 = new WeakSet();
function _Le(e) {
  if (!v4.has(e)) {
    v4.add(e);
    for (let t of Ao(e))
      for (let n of t.underLinks)
        e.links[n].lanes = Math.max(1, e.links[n].lanes - 1);
  }
}
