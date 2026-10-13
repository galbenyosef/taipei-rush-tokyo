// tokyo__assets__actors-Bnj6Q1ad 56 — math
// Lines 27110-27380 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Xh(e) {
  let t = e.mat,
    n = -e.heading,
    r = Math.cos(n),
    i = Math.sin(n);
  ((e.sh = -i), (e.ch = r));
  let a = e.pitch,
    o = -e.lean,
    s = Math.cos(a),
    c = Math.sin(a),
    l = Math.cos(o),
    u = Math.sin(o);
  ((t[0] = r * l + i * c * u),
    (t[1] = s * u),
    (t[2] = -i * l + r * c * u),
    (t[3] = 0),
    (t[4] = -r * u + i * c * l),
    (t[5] = s * l),
    (t[6] = i * u + r * c * l),
    (t[7] = 0),
    (t[8] = i * s),
    (t[9] = -c),
    (t[10] = r * s),
    (t[11] = 0),
    (t[12] = e.x),
    (t[13] = e.y),
    (t[14] = e.z),
    (t[15] = 1));
}
var Zh = { build: null },
  Qh = 60 / 3.6,
  $h = 40 / 3.6,
  eg = 3;
function tg(e, t, n, r, i) {
  let a = {
    links: [],
    nodes: [],
    medianHalf: [],
    curb: [],
    rampOut: new Map(),
    side: new Set(),
    profStart: [],
    profCount: [],
    prof: [],
  };
  for (let o of t) {
    let t = e.roads.find((e) => e.id === o.roadId);
    t && ng(e, t, o, a, n, r, i);
  }
  return a;
}
function ng(e, t, n, r, i, a, o) {
  let s = n.axis,
    c = e.laneWidth,
    l = (e, t) => (s === `x` ? [e, n.at + t] : [n.at + t, e]),
    u = (e, t) => (s === `x` ? e : t),
    d = (n.driveFrom ?? n.from) + 4,
    f = (n.driveTo ?? n.to) - 4;
  if (f - d < 60) return;
  let p = (e, t, n) => {
      let i = { id: a + r.nodes.length, x: e, z: t, kind: n, out: [], in: [] };
      return (r.nodes.push(i), i);
    },
    m = (n, a, u, d, f, p, m, h, g, _) => {
      let v = a > n ? 1 : -1,
        [y, b] = l(n, 0),
        [x, S] = l(a, 0),
        C = s === `x` ? v : 0,
        w = s === `x` ? 0 : v,
        T = {
          id: i + r.links.length,
          road: t,
          from: m,
          to: h,
          sx: y,
          sz: b,
          ex: x,
          ez: S,
          dx: C,
          dz: w,
          rx: -w,
          rz: C,
          heading: Math.atan2(C, -w),
          length: Math.abs(a - n),
          lanes: u,
          speed: p,
          reverse: -1,
          pedestrian: !1,
        };
      (r.links.push(T), r.medianHalf.push(d), r.curb.push(f));
      let E = Math.max(2, Math.ceil(T.length / 2) + 1),
        D = r.prof.length;
      for (let e = 0; e < E; e++) r.prof.push(_);
      let O = d + c * 0.5,
        k = (e) => Math.min(T.length, e * 2),
        A = (t, n) => {
          let r = k(t),
            i = o(
              y + C * r + ct(T, O, e.side),
              b + w * r + ze(T, O, e.side),
              n + 1.1,
              0,
            );
          return (
            (!Number.isFinite(i) || i > n + 1 || i < n - 1) && (i = n),
            i
          );
        },
        j = Math.max(0, Math.min(E - 1, Math.round(Math.abs(g - n) / 2)));
      r.prof[D + j] = A(j, _ + 0.2);
      for (let e = j + 1; e < E; e++) r.prof[D + e] = A(e, r.prof[D + e - 1]);
      for (let e = j - 1; e >= 0; e--) r.prof[D + e] = A(e, r.prof[D + e + 1]);
      return (r.profStart.push(D), r.profCount.push(E), T);
    },
    h = (d + f) / 2,
    g = (n.deckHalf - 0.9) / 3,
    _ = 0.3 + g * 0.5,
    v = 0.3 + g * 1.5,
    y = (n.ramps ?? []).map((e) => ({
      ...e,
      foot: u(e.footX, e.footZ),
      top: u(e.topX, e.topZ),
    })),
    b = y.filter((e) => !e.side);
  for (let i of [1, -1]) {
    let a = i > 0 ? d : f,
      o = i > 0 ? f : d,
      s = p(...l(a, 0), `end`),
      u = p(...l(o, 0), `end`),
      g = Zh.build
        ? y.filter((e) => e.side && (e.side.on ? e.dir === i : e.dir === -i))
        : [];
    if (g.length) {
      let d = {
        mh: v - c * 0.5,
        curb: n.deckHalf - 0.6,
        speed: Qh,
        y: n.deckTop,
      };
      Zh.build({
        d: i,
        sA: a,
        sB: o,
        nA: s,
        nB: u,
        ramps: g,
        P: l,
        node: p,
        link: m,
        junction: (n, r) => rg(e, t, n, r),
        deck: d,
        rampSpeed: $h,
        laneWidth: c,
        out: r,
      });
    } else {
      let e = m(
        a,
        o,
        2,
        v - c * 0.5,
        n.deckHalf - 0.6,
        Qh,
        s.id,
        u.id,
        h,
        n.deckTop,
      );
      (s.out.push(e.id), u.in.push(e.id));
    }
    let x = b.filter((e) => e.dir === i),
      S = b.filter((e) => e.dir === -i),
      C = [
        ...x.map((e) => ({ s: e.top, up: !0, r: e })),
        ...S.map((e) => ({ s: e.top, up: !1, r: e })),
      ];
    C.sort((e, t) => (e.s - t.s) * i);
    for (let s = 0; s < C.length; s++) {
      let u = C[s],
        d = rg(e, t, u.r.footX, u.r.footZ);
      if (!d) continue;
      let f = Math.max(0.05, u.r.half * 0.5 - c * 0.5);
      if (u.up) {
        let e = p(...l(u.r.top, 0), `thru`),
          t = m(
            u.r.foot,
            u.r.top - i * eg,
            1,
            f,
            u.r.half,
            $h,
            d,
            e.id,
            u.r.foot,
            0,
          );
        e.in.push(t.id);
        let a = r.rampOut.get(d) ?? [];
        (a.push(t.id), r.rampOut.set(d, a));
        let h = C[s + 1],
          g = h && !h.up ? h.r.top - i * eg : o;
        if ((g - (u.r.top + i * eg)) * i < 30) continue;
        let y = h && !h.up ? w(h) : p(...l(o, 0), `end`),
          b = m(
            u.r.top + i * eg,
            g,
            1,
            _ - c * 0.5,
            v - c * 0.5 - 0.1,
            Qh,
            e.id,
            y.id,
            u.r.top,
            n.deckTop,
          );
        (e.out.push(b.id), y.in.push(b.id));
      } else {
        let e = C[s - 1];
        if (!(e && e.up)) {
          let e = w(u),
            t = a;
          if ((u.r.top - i * eg - t) * i > 30) {
            let r = p(...l(t, 0), `end`),
              a = m(
                t,
                u.r.top - i * eg,
                1,
                _ - c * 0.5,
                v - c * 0.5 - 0.1,
                Qh,
                r.id,
                e.id,
                u.r.top,
                n.deckTop,
              );
            (r.out.push(a.id), e.in.push(a.id));
          }
        }
      }
    }
    function w(n) {
      let r = n.r;
      if (r._top) return r._top;
      let a = p(...l(r.top, 0), `thru`);
      r._top = a;
      let o = rg(e, t, r.footX, r.footZ);
      if (o === null) return a;
      let s = Math.max(0.05, r.half * 0.5 - c * 0.5),
        u = m(r.top + i * eg, r.foot, 1, s, r.half, $h, a.id, o, r.foot, 0);
      return (a.out.push(u.id), a);
    }
  }
}
function rg(e, t, n, r) {
  let i = null,
    a = 40;
  for (let o of e.nodes) {
    if (o.kind === `end` || !o.roads.includes(t)) continue;
    let e = Math.hypot(o.x - n, o.z - r);
    e < a && ((a = e), (i = o.id));
  }
  return i;
}
var ig = 0,
  ag = 1,
  og = 2,
  sg = 3,
  cg = 64;
function lg(e, t) {
  return e === t || (e.axis === t.axis && Math.abs(e.at - t.at) < 0.5);
}
