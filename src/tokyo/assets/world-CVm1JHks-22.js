// tokyo/assets/world-CVm1JHks 22 — axis
// Lines 6721-7064 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
var zi = new WeakMap(),
  Bi = new WeakMap(),
  Vi = new WeakMap();
function Hi(e) {
  return zi.has(e);
}
function Ui(e, t) {
  return { zh: e, sec: ``, en: t, n: 0, full: { zh: e, en: t } };
}
function Wi(e, t) {
  let n = Ri(t);
  if (!n) return [];
  let r = Vi.get(e);
  r || Vi.set(e, (r = new Map()));
  let i = `${n.landmarkId}|${n.zh ?? ``}`,
    a = r.get(i);
  if (a) return a;
  let o = [],
    s = e.landmark(n.landmarkId);
  if (s) {
    let t = Ui(n.zh ?? s.name.zh, s.name.en),
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
          halfTotal: Li,
          major: !1,
        };
      (zi.set(a, t),
        Bi.set(a, Gi(e, a)),
        o.push({ road: a, s0: i.from, s1: i.to }));
    }
  }
  return (r.set(i, o), o);
}
function Gi(e, t) {
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
    let a = Ai(t, e, 0, 0),
      o = {
        id: t.index * 1e3 - r++,
        x: a.x,
        z: a.z,
        roads: [i],
        halfX: t.axis === `x` ? i.halfTotal : Li,
        halfZ: t.axis === `x` ? Li : i.halfTotal,
        signal: !1,
        out: [],
        in: [],
        kind: `tee`,
      };
    n.push({ node: o, s: e, half: t.axis === `x` ? o.halfX : o.halfZ });
  }
  return (n.sort((e, t) => e.s - t.s || e.node.id - t.node.id), n);
}
function Ki(e) {
  let t = e.lanesPerDir ?? 0;
  if (t <= 0) return 3.5;
  let n = (e.halfWidth - (e.median ?? 0) / 2) / t;
  return n > 0.5 ? n : 3.5;
}
function qi(e, t) {
  let n = Ki(e),
    r = (e.median ?? 0) / 2 + 0.5 * n;
  return Math.max(0, Math.floor(2 * (r - t) * 10) / 10);
}
function Ji(e, t, n, r) {
  let i = t - n / 2,
    a = t + n / 2,
    o = e.at - r / 2,
    s = e.at + r / 2;
  return e.axis === `x`
    ? { minX: i, maxX: a, minZ: o, maxZ: s }
    : { minX: o, maxX: s, minZ: i, maxZ: a };
}
function Yi(e) {
  let t = e.halfWidth;
  return e.axis === `x`
    ? { minX: e.from, maxX: e.to, minZ: e.at - t, maxZ: e.at + t }
    : { minX: e.at - t, maxX: e.at + t, minZ: e.from, maxZ: e.to };
}
function Xi(e, t, n) {
  let r = zi.get(t);
  if (r) return r;
  let i = Ai(t, n, 0, 0);
  return e.streetLabel(t, i.x, i.z);
}
function Zi(e, t, n) {
  let r = t.name.zh;
  if (!r.endsWith(`東西路`) && !r.endsWith(`南北路`)) return 1;
  let i = Xi(e, t, n).zh;
  return i.endsWith(`西路`) || i.endsWith(`北路`) ? -1 : 1;
}
function Qi(e, t, n) {
  let r = `${$i(t)}|${n?.lane ? `L` : ``}`,
    i = ea.get(e);
  i || ea.set(e, (i = new Map()));
  let a = i.get(r);
  if (a) return a.slice();
  let o = ta(e, t, n);
  return (i.set(r, o), o.slice());
}
function $i(e) {
  return `${e?.zh ?? ``}#${e?.sec ?? ``}`;
}
var ea = new WeakMap();
function ta(e, t, n) {
  let r = Wi(e, t);
  if (r.length || Ri(t)) return r.slice();
  let i = [];
  for (let n of ia(e, t.zh)) {
    let r = da(e, n),
      a = NaN,
      o = !1;
    for (let s = 0; s < r.length; s++) {
      let c = r[s],
        l =
          c.zh === t.zh &&
          (t.sec === void 0 || t.sec === null || c.n === t.sec);
      if (s > 0 && l !== o) {
        let u = fa(e, n, t, r[s - 1].s, c.s, o);
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
        Di(Xi(e, r.parent, n.at), t) &&
        i.push({ road: n, s0: n.from, s1: n.to, lane: !0 });
    }
  return i;
}
var na = new WeakMap(),
  ra = new WeakMap();
function ia(e, t) {
  return aa(e).get(t) ?? oa;
}
function aa(e) {
  let t = na.get(e);
  if (!t) {
    t = new Map();
    for (let n of e.roads) {
      if (n.lane || !(n.to - n.from > 0)) continue;
      let r = Xi(e, n, n.from).zh,
        i = Xi(e, n, n.to).zh;
      for (let e of r === i ? [r] : [r, i]) {
        let r = t.get(e);
        (r || t.set(e, (r = [])), r.push(n));
      }
    }
    na.set(e, t);
  }
  return t;
}
var oa = [],
  sa = [``, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`, `十`],
  ca = /^(.+?)([一二三四五六七八九十]+)段$/,
  la = {
    牯嶺街: [
      { zh: `重慶南路`, sec: 3 },
      { zh: `重慶南路`, sec: 2 },
      { zh: `重慶南路` },
    ],
  };
function ua(e, t, n = !1) {
  for (let r of t) if (Qi(e, r, { lane: n }).some((e) => !e.lane)) return [];
  let r = [],
    i = new Set(t.map($i)),
    a = (t) => {
      let a = $i(t);
      i.has(a) ||
        (i.add(a), Qi(e, t, { lane: n }).some((e) => !e.lane) && r.push(t));
    },
    o = [...aa(e).keys()];
  for (let e of t) {
    let t = e?.zh;
    if (typeof t != `string` || !t || Ri(e)) continue;
    let n = ca.exec(t)?.[1] ?? t,
      r = e.sec == null ? 0 : e.sec;
    r > 0 && sa[r] && a({ zh: `${n}${sa[r]}段` });
    let i = o
      .map((e) => {
        let t = ca.exec(e);
        return t && t[1] === n ? { zh: e, n: sa.indexOf(t[2]) } : null;
      })
      .filter((e) => !!e)
      .sort((e, t) => Math.abs(e.n - r) - Math.abs(t.n - r) || e.n - t.n);
    for (let e of i) a({ zh: e.zh });
    for (let e of la[n] ?? []) a(e);
  }
  return r;
}
function da(e, t) {
  let n = ra.get(e);
  n || ra.set(e, (n = new Map()));
  let r = n.get(t);
  if (r) return r;
  let i = t.to - t.from,
    a = Math.max(1, Math.ceil(i / 24)),
    o = [];
  for (let n = 0; n <= a; n++) {
    let r = n === a ? t.to : t.from + (i * n) / a,
      s = Xi(e, t, r);
    o.push({ s: r, zh: s.zh, n: s.n });
  }
  return (n.set(t, o), o);
}
function fa(e, t, n, r, i, a) {
  let o = r,
    s = i;
  for (; Math.abs(s - o) > 0.25;) {
    let r = (o + s) / 2;
    Di(Xi(e, t, r), n) === a ? (o = r) : (s = r);
  }
  return (o + s) / 2;
}
var pa = new WeakMap();
function ma(e, t) {
  let n = Bi.get(t);
  if (n) return n;
  let r = pa.get(e);
  if (!r) {
    r = new Map();
    for (let t of e.nodes)
      for (let e of t.roads) {
        let n = r.get(e);
        (n || r.set(e, (n = [])),
          n.push({
            node: t,
            s: ji(e, t.x, t.z),
            half: e.axis === `x` ? t.halfX : t.halfZ,
          }));
      }
    for (let e of r.values())
      e.sort((e, t) => e.s - t.s || e.node.id - t.node.id);
    pa.set(e, r);
  }
  return r.get(t) ?? [];
}
function ha(e, t, n) {
  let r = ga.get(e);
  r || ga.set(e, (r = new Map()));
  let i = $i(n);
  for (let e of t)
    i += `|${e.road.index}@${e.road.at.toFixed(1)}:${e.s0.toFixed(1)}:${e.s1.toFixed(1)}${e.lane ? `L` : ``}`;
  let a = r.get(i);
  if (a) return a.slice();
  let o = _a(e, t, n);
  return (r.set(i, o), o.slice());
}
var ga = new WeakMap();
function _a(e, t, n) {
  let r = [],
    i = new Set();
  for (let a of t) {
    let t = Hi(a.road) ? 30 : 0;
    for (let o of ma(e, a.road))
      if (
        o.node.kind !== `end` &&
        !(o.s < a.s0 - o.half - 1 - t || o.s > a.s1 + o.half + 1 + t)
      )
        for (let t of o.node.roads) {
          if (t === a.road) continue;
          let s = `${a.road.index}:${o.node.id}`;
          i.has(s) ||
            (va(e, t, o.node, n) &&
              (i.add(s), r.push({ ...o, road: a.road, crossRoad: t })));
        }
  }
  return r;
}
function va(e, t, n, r) {
  let i = ji(t, n.x, n.z),
    a = t.axis === `x` ? n.halfX : n.halfZ;
  for (let n of [0, -(a + 4), a + 4]) {
    let a = i + n;
    if (!(a < t.from - 0.01 || a > t.to + 0.01) && Di(Xi(e, t, a), r))
      return !0;
  }
  return !1;
}
function ya(e) {
  (Vi.delete(e),
    ea.delete(e),
    na.delete(e),
    ra.delete(e),
    pa.delete(e),
    ga.delete(e));
}
var ba = 0.5,
  xa = new Set([`lot`, `plaza`, `park`]),
  Sa = 1.2;
function Ca(e) {
  if (!e || !e.length) return xa;
  let t = new Set(xa);
  for (let n of e) t.add(n);
  return t;
}
var wa = new Set([
  `convenience`,
  `bubbletea`,
  `breakfast`,
  `claw`,
  `pharmacy`,
  `lottery`,
]);
