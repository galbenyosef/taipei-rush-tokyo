// tokyo__assets__world-Bo9wkXrT 22 — axis
// Lines 6534-6882 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function fi(e, t, n, r) {
  return Ei(t) ? n >= t.from - 0.5 && n <= t.to + 0.5 : di(Pi(e, t, n), r);
}
function pi(e) {
  return e.sec ? `${e.zh} sec${e.sec}` : e.zh;
}
function mi(e, t, n, r) {
  return e.axis === `x` ? { x: t, z: e.at + n * r } : { x: e.at + n * r, z: t };
}
function hi(e, t, n) {
  return e.axis === `x` ? t : n;
}
function gi(e, t) {
  return e.axis === `x`
    ? t === `N`
      ? -1
      : +(t === `S`)
    : t === `E`
      ? 1
      : t === `W`
        ? -1
        : 0;
}
function _i(e, t) {
  return e.axis === `x` ? (t < 0 ? `N` : `S`) : t < 0 ? `W` : `E`;
}
function vi(e, t) {
  return e.axis === `x`
    ? t > 0
      ? 0
      : Math.PI
    : t > 0
      ? -Math.PI / 2
      : Math.PI / 2;
}
function yi(e, t, n, r, i, a) {
  let o = t - i / 2,
    s = t + i / 2,
    c = e.at + n * r,
    l = e.at + n * (r + a),
    u = Math.min(c, l),
    d = Math.max(c, l);
  return e.axis === `x`
    ? { minX: o, maxX: s, minZ: u, maxZ: d }
    : { minX: u, maxX: d, minZ: o, maxZ: s };
}
function bi(e, t = 0) {
  let n = e.halfTotal + t;
  return e.axis === `x`
    ? { minX: e.from - t, maxX: e.to + t, minZ: e.at - n, maxZ: e.at + n }
    : { minX: e.at - n, maxX: e.at + n, minZ: e.from - t, maxZ: e.to + t };
}
var xi = 2.5;
function Si(e) {
  let t = e?.zh;
  if (typeof t != `string` || !t.startsWith(`lot:`)) return null;
  let [n, r] = t.slice(4).split(`|`),
    i = (n ?? ``).trim();
  return i ? { landmarkId: i, zh: r?.trim() || void 0 } : null;
}
var Ci = new WeakMap(),
  wi = new WeakMap(),
  Ti = new WeakMap();
function Ei(e) {
  return Ci.has(e);
}
function Di(e, t) {
  return { zh: e, sec: ``, en: t, n: 0, full: { zh: e, en: t } };
}
function Oi(e, t) {
  let n = Si(t);
  if (!n) return [];
  let r = Ti.get(e);
  r || Ti.set(e, (r = new Map()));
  let i = `${n.landmarkId}|${n.zh ?? ``}`,
    a = r.get(i);
  if (a) return a;
  let o = [],
    s = e.landmark(n.landmarkId);
  if (s) {
    let t = Di(n.zh ?? s.name.zh, s.name.en),
      r = s.x - s.w / 2,
      i = s.x + s.w / 2,
      a = s.z - s.d / 2,
      c = s.z + s.d / 2,
      l = [
        { axis: `x`, at: a, from: r, to: i },
        { axis: `x`, at: c, from: r, to: i },
        { axis: `z`, at: i, from: a, to: c },
        { axis: `z`, at: r, from: a, to: c },
      ];
    for (let r = 0; r < l.length; r++) {
      let i = l[r],
        a = {
          id: `site-lot-edge:${n.landmarkId}:${`NSEW`[r]}`,
          name: { zh: t.zh, en: t.en },
          axis: i.axis,
          at: i.at,
          from: i.from,
          to: i.to,
          kind: `minor`,
          lanesPerDir: 0,
          median: 0,
          sidewalk: 3,
          speedKmh: 0,
          pedestrian: !0,
          index: -1 - r,
          halfWidth: 0,
          halfTotal: xi,
          major: !1,
        };
      (Ci.set(a, t),
        wi.set(a, ki(e, a)),
        o.push({ road: a, s0: i.from, s1: i.to }));
    }
  }
  return (r.set(i, o), o);
}
function ki(e, t) {
  let n = [],
    r = 0;
  for (let i of e.roads) {
    if (i.axis === t.axis) continue;
    let e = i.at;
    if (
      e < t.from - i.halfTotal - 30 ||
      e > t.to + i.halfTotal + 30 ||
      t.at < i.from - i.halfTotal ||
      t.at > i.to + i.halfTotal
    )
      continue;
    let a = mi(t, e, 0, 0),
      o = {
        id: t.index * 1e3 - r++,
        x: a.x,
        z: a.z,
        roads: [i],
        halfX: t.axis === `x` ? i.halfTotal : xi,
        halfZ: t.axis === `x` ? xi : i.halfTotal,
        signal: !1,
        out: [],
        in: [],
        kind: `tee`,
      };
    n.push({ node: o, s: e, half: t.axis === `x` ? o.halfX : o.halfZ });
  }
  return (n.sort((e, t) => e.s - t.s || e.node.id - t.node.id), n);
}
function Ai(e) {
  let t = e.lanesPerDir ?? 0;
  if (t <= 0) return 3.5;
  let n = (e.halfWidth - (e.median ?? 0) / 2) / t;
  return n > 0.5 ? n : 3.5;
}
function ji(e, t) {
  let n = Ai(e),
    r = (e.median ?? 0) / 2 + 0.5 * n;
  return Math.max(0, Math.floor(2 * (r - t) * 10) / 10);
}
function Mi(e, t, n, r) {
  let i = t - n / 2,
    a = t + n / 2,
    o = e.at - r / 2,
    s = e.at + r / 2;
  return e.axis === `x`
    ? { minX: i, maxX: a, minZ: o, maxZ: s }
    : { minX: o, maxX: s, minZ: i, maxZ: a };
}
function Ni(e) {
  let t = e.halfWidth;
  return e.axis === `x`
    ? { minX: e.from, maxX: e.to, minZ: e.at - t, maxZ: e.at + t }
    : { minX: e.at - t, maxX: e.at + t, minZ: e.from, maxZ: e.to };
}
function Pi(e, t, n) {
  let r = Ci.get(t);
  if (r) return r;
  let i = mi(t, n, 0, 0);
  return e.streetLabel(t, i.x, i.z);
}
function Fi(e, t, n) {
  let r = t.name.zh;
  if (!r.endsWith(`東西路`) && !r.endsWith(`南北路`)) return 1;
  let i = Pi(e, t, n).zh;
  return i.endsWith(`西路`) || i.endsWith(`北路`) ? -1 : 1;
}
function Ii(e, t, n) {
  let r = `${Li(t)}|${n?.lane ? `L` : ``}`,
    i = Ri.get(e);
  i || Ri.set(e, (i = new Map()));
  let a = i.get(r);
  if (a) return a.slice();
  let o = zi(e, t, n);
  return (i.set(r, o), o.slice());
}
function Li(e) {
  return `${e?.zh ?? ``}#${e?.sec ?? ``}`;
}
var Ri = new WeakMap();
function zi(e, t, n) {
  let r = Oi(e, t);
  if (r.length || Si(t)) return r.slice();
  let i = [];
  for (let n of Hi(e, t.zh)) {
    let r = Yi(e, n),
      a = NaN,
      o = !1;
    for (let s = 0; s < r.length; s++) {
      let c = r[s],
        l =
          c.zh === t.zh &&
          (t.sec === void 0 || t.sec === null || c.n === t.sec);
      if (s > 0 && l !== o) {
        let u = Xi(e, n, t, r[s - 1].s, c.s, o);
        l ? (a = u) : i.push({ road: n, s0: a, s1: u });
      } else s === 0 && l && (a = c.s);
      o = l;
    }
    o && i.push({ road: n, s0: a, s1: n.to });
  }
  if (n?.lane)
    for (let n of e.roads) {
      let r = n.lane;
      r &&
        r.parent.axis !== n.axis &&
        di(Pi(e, r.parent, n.at), t) &&
        i.push({ road: n, s0: n.from, s1: n.to, lane: !0 });
    }
  return i;
}
var Bi = new WeakMap(),
  Vi = new WeakMap();
function Hi(e, t) {
  return Ui(e).get(t) ?? Wi;
}
function Ui(e) {
  let t = Bi.get(e);
  if (!t) {
    t = new Map();
    for (let n of e.roads) {
      if (n.lane || !(n.to - n.from > 0)) continue;
      let r = Pi(e, n, n.from).zh,
        i = Pi(e, n, n.to).zh;
      for (let e of r === i ? [r] : [r, i]) {
        let r = t.get(e);
        (r || t.set(e, (r = [])), r.push(n));
      }
    }
    Bi.set(e, t);
  }
  return t;
}
var Wi = [],
  Gi = [``, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`, `十`],
  Ki = /^(.+?)([一二三四五六七八九十]+)段$/,
  qi = {
    牯嶺街: [
      { zh: `重慶南路`, sec: 3 },
      { zh: `重慶南路`, sec: 2 },
      { zh: `重慶南路` },
    ],
  };
function Ji(e, t, n = !1) {
  for (let r of t) if (Ii(e, r, { lane: n }).some((e) => !e.lane)) return [];
  let r = [],
    i = new Set(t.map(Li)),
    a = (t) => {
      let a = Li(t);
      i.has(a) ||
        (i.add(a), Ii(e, t, { lane: n }).some((e) => !e.lane) && r.push(t));
    },
    o = [...Ui(e).keys()];
  for (let e of t) {
    let t = e?.zh;
    if (typeof t != `string` || !t || Si(e)) continue;
    let n = Ki.exec(t)?.[1] ?? t,
      r = e.sec == null ? 0 : e.sec;
    r > 0 && Gi[r] && a({ zh: `${n}${Gi[r]}段` });
    let i = o
      .map((e) => {
        let t = Ki.exec(e);
        return t && t[1] === n ? { zh: e, n: Gi.indexOf(t[2]) } : null;
      })
      .filter((e) => !!e)
      .sort((e, t) => Math.abs(e.n - r) - Math.abs(t.n - r) || e.n - t.n);
    for (let e of i) a({ zh: e.zh });
    for (let e of qi[n] ?? []) a(e);
  }
  return r;
}
function Yi(e, t) {
  let n = Vi.get(e);
  n || Vi.set(e, (n = new Map()));
  let r = n.get(t);
  if (r) return r;
  let i = t.to - t.from,
    a = Math.max(1, Math.ceil(i / 24)),
    o = [];
  for (let n = 0; n <= a; n++) {
    let r = n === a ? t.to : t.from + (i * n) / a,
      s = Pi(e, t, r);
    o.push({ s: r, zh: s.zh, n: s.n });
  }
  return (n.set(t, o), o);
}
function Xi(e, t, n, r, i, a) {
  let o = r,
    s = i;
  for (; Math.abs(s - o) > 0.25;) {
    let r = (o + s) / 2;
    di(Pi(e, t, r), n) === a ? (o = r) : (s = r);
  }
  return (o + s) / 2;
}
var Zi = new WeakMap();
function Qi(e, t) {
  let n = wi.get(t);
  if (n) return n;
  let r = Zi.get(e);
  if (!r) {
    r = new Map();
    for (let t of e.nodes)
      for (let e of t.roads) {
        let n = r.get(e);
        (n || r.set(e, (n = [])),
          n.push({
            node: t,
            s: hi(e, t.x, t.z),
            half: e.axis === `x` ? t.halfX : t.halfZ,
          }));
      }
    for (let e of r.values())
      e.sort((e, t) => e.s - t.s || e.node.id - t.node.id);
    Zi.set(e, r);
  }
  return r.get(t) ?? [];
}
function $i(e, t, n) {
  let r = ea.get(e);
  r || ea.set(e, (r = new Map()));
  let i = Li(n);
  for (let e of t)
    i += `|${e.road.index}@${e.road.at.toFixed(1)}:${e.s0.toFixed(1)}:${e.s1.toFixed(1)}${e.lane ? `L` : ``}`;
  let a = r.get(i);
  if (a) return a.slice();
  let o = ta(e, t, n);
  return (r.set(i, o), o.slice());
}
var ea = new WeakMap();
