// tokyo/assets/world-CAmHK742 22 — axis
// Lines 6654-6997 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
var Mi = new WeakMap(),
  Ni = new WeakMap(),
  Pi = new WeakMap();
function Fi(e) {
  return Mi.has(e);
}
function Ii(e, t) {
  return { zh: e, sec: ``, en: t, n: 0, full: { zh: e, en: t } };
}
function Li(e, t) {
  let n = ji(t);
  if (!n) return [];
  let r = Pi.get(e);
  r || Pi.set(e, (r = new Map()));
  let i = `${n.landmarkId}|${n.zh ?? ``}`,
    a = r.get(i);
  if (a) return a;
  let o = [],
    s = e.landmark(n.landmarkId);
  if (s) {
    let t = Ii(n.zh ?? s.name.zh, s.name.en),
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
          halfTotal: Ai,
          major: !1,
        };
      (Mi.set(a, t),
        Ni.set(a, Ri(e, a)),
        o.push({ road: a, s0: i.from, s1: i.to }));
    }
  }
  return (r.set(i, o), o);
}
function Ri(e, t) {
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
    let a = Ci(t, e, 0, 0),
      o = {
        id: t.index * 1e3 - r++,
        x: a.x,
        z: a.z,
        roads: [i],
        halfX: t.axis === `x` ? i.halfTotal : Ai,
        halfZ: t.axis === `x` ? Ai : i.halfTotal,
        signal: !1,
        out: [],
        in: [],
        kind: `tee`,
      };
    n.push({ node: o, s: e, half: t.axis === `x` ? o.halfX : o.halfZ });
  }
  return (n.sort((e, t) => e.s - t.s || e.node.id - t.node.id), n);
}
function zi(e) {
  let t = e.lanesPerDir ?? 0;
  if (t <= 0) return 3.5;
  let n = (e.halfWidth - (e.median ?? 0) / 2) / t;
  return n > 0.5 ? n : 3.5;
}
function Bi(e, t) {
  let n = zi(e),
    r = (e.median ?? 0) / 2 + 0.5 * n;
  return Math.max(0, Math.floor(2 * (r - t) * 10) / 10);
}
function Vi(e, t, n, r) {
  let i = t - n / 2,
    a = t + n / 2,
    o = e.at - r / 2,
    s = e.at + r / 2;
  return e.axis === `x`
    ? { minX: i, maxX: a, minZ: o, maxZ: s }
    : { minX: o, maxX: s, minZ: i, maxZ: a };
}
function Hi(e) {
  let t = e.halfWidth;
  return e.axis === `x`
    ? { minX: e.from, maxX: e.to, minZ: e.at - t, maxZ: e.at + t }
    : { minX: e.at - t, maxX: e.at + t, minZ: e.from, maxZ: e.to };
}
function Ui(e, t, n) {
  let r = Mi.get(t);
  if (r) return r;
  let i = Ci(t, n, 0, 0);
  return e.streetLabel(t, i.x, i.z);
}
function Wi(e, t, n) {
  let r = t.name.zh;
  if (!r.endsWith(`東西路`) && !r.endsWith(`南北路`)) return 1;
  let i = Ui(e, t, n).zh;
  return i.endsWith(`西路`) || i.endsWith(`北路`) ? -1 : 1;
}
function Gi(e, t, n) {
  let r = `${Ki(t)}|${n?.lane ? `L` : ``}`,
    i = qi.get(e);
  i || qi.set(e, (i = new Map()));
  let a = i.get(r);
  if (a) return a.slice();
  let o = Ji(e, t, n);
  return (i.set(r, o), o.slice());
}
function Ki(e) {
  return `${e?.zh ?? ``}#${e?.sec ?? ``}`;
}
var qi = new WeakMap();
function Ji(e, t, n) {
  let r = Li(e, t);
  if (r.length || ji(t)) return r.slice();
  let i = [];
  for (let n of Zi(e, t.zh)) {
    let r = ia(e, n),
      a = NaN,
      o = !1;
    for (let s = 0; s < r.length; s++) {
      let c = r[s],
        l =
          c.zh === t.zh &&
          (t.sec === void 0 || t.sec === null || c.n === t.sec);
      if (s > 0 && l !== o) {
        let u = aa(e, n, t, r[s - 1].s, c.s, o);
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
        bi(Ui(e, r.parent, n.at), t) &&
        i.push({ road: n, s0: n.from, s1: n.to, lane: !0 });
    }
  return i;
}
var Yi = new WeakMap(),
  Xi = new WeakMap();
function Zi(e, t) {
  return Qi(e).get(t) ?? $i;
}
function Qi(e) {
  let t = Yi.get(e);
  if (!t) {
    t = new Map();
    for (let n of e.roads) {
      if (n.lane || !(n.to - n.from > 0)) continue;
      let r = Ui(e, n, n.from).zh,
        i = Ui(e, n, n.to).zh;
      for (let e of r === i ? [r] : [r, i]) {
        let r = t.get(e);
        (r || t.set(e, (r = [])), r.push(n));
      }
    }
    Yi.set(e, t);
  }
  return t;
}
var $i = [],
  ea = [``, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`, `十`],
  ta = /^(.+?)([一二三四五六七八九十]+)段$/,
  na = {
    牯嶺街: [
      { zh: `重慶南路`, sec: 3 },
      { zh: `重慶南路`, sec: 2 },
      { zh: `重慶南路` },
    ],
  };
function ra(e, t, n = !1) {
  for (let r of t) if (Gi(e, r, { lane: n }).some((e) => !e.lane)) return [];
  let r = [],
    i = new Set(t.map(Ki)),
    a = (t) => {
      let a = Ki(t);
      i.has(a) ||
        (i.add(a), Gi(e, t, { lane: n }).some((e) => !e.lane) && r.push(t));
    },
    o = [...Qi(e).keys()];
  for (let e of t) {
    let t = e?.zh;
    if (typeof t != `string` || !t || ji(e)) continue;
    let n = ta.exec(t)?.[1] ?? t,
      r = e.sec == null ? 0 : e.sec;
    r > 0 && ea[r] && a({ zh: `${n}${ea[r]}段` });
    let i = o
      .map((e) => {
        let t = ta.exec(e);
        return t && t[1] === n ? { zh: e, n: ea.indexOf(t[2]) } : null;
      })
      .filter((e) => !!e)
      .sort((e, t) => Math.abs(e.n - r) - Math.abs(t.n - r) || e.n - t.n);
    for (let e of i) a({ zh: e.zh });
    for (let e of na[n] ?? []) a(e);
  }
  return r;
}
function ia(e, t) {
  let n = Xi.get(e);
  n || Xi.set(e, (n = new Map()));
  let r = n.get(t);
  if (r) return r;
  let i = t.to - t.from,
    a = Math.max(1, Math.ceil(i / 24)),
    o = [];
  for (let n = 0; n <= a; n++) {
    let r = n === a ? t.to : t.from + (i * n) / a,
      s = Ui(e, t, r);
    o.push({ s: r, zh: s.zh, n: s.n });
  }
  return (n.set(t, o), o);
}
function aa(e, t, n, r, i, a) {
  let o = r,
    s = i;
  for (; Math.abs(s - o) > 0.25;) {
    let r = (o + s) / 2;
    bi(Ui(e, t, r), n) === a ? (o = r) : (s = r);
  }
  return (o + s) / 2;
}
var oa = new WeakMap();
function sa(e, t) {
  let n = Ni.get(t);
  if (n) return n;
  let r = oa.get(e);
  if (!r) {
    r = new Map();
    for (let t of e.nodes)
      for (let e of t.roads) {
        let n = r.get(e);
        (n || r.set(e, (n = [])),
          n.push({
            node: t,
            s: wi(e, t.x, t.z),
            half: e.axis === `x` ? t.halfX : t.halfZ,
          }));
      }
    for (let e of r.values())
      e.sort((e, t) => e.s - t.s || e.node.id - t.node.id);
    oa.set(e, r);
  }
  return r.get(t) ?? [];
}
function ca(e, t, n) {
  let r = la.get(e);
  r || la.set(e, (r = new Map()));
  let i = Ki(n);
  for (let e of t)
    i += `|${e.road.index}@${e.road.at.toFixed(1)}:${e.s0.toFixed(1)}:${e.s1.toFixed(1)}${e.lane ? `L` : ``}`;
  let a = r.get(i);
  if (a) return a.slice();
  let o = ua(e, t, n);
  return (r.set(i, o), o.slice());
}
var la = new WeakMap();
function ua(e, t, n) {
  let r = [],
    i = new Set();
  for (let a of t) {
    let t = Fi(a.road) ? 30 : 0;
    for (let o of sa(e, a.road))
      if (
        o.node.kind !== `end` &&
        !(o.s < a.s0 - o.half - 1 - t || o.s > a.s1 + o.half + 1 + t)
      )
        for (let t of o.node.roads) {
          if (t === a.road) continue;
          let s = `${a.road.index}:${o.node.id}`;
          i.has(s) ||
            (da(e, t, o.node, n) &&
              (i.add(s), r.push({ ...o, road: a.road, crossRoad: t })));
        }
  }
  return r;
}
function da(e, t, n, r) {
  let i = wi(t, n.x, n.z),
    a = t.axis === `x` ? n.halfX : n.halfZ;
  for (let n of [0, -(a + 4), a + 4]) {
    let a = i + n;
    if (!(a < t.from - 0.01 || a > t.to + 0.01) && bi(Ui(e, t, a), r))
      return !0;
  }
  return !1;
}
function fa(e) {
  (Pi.delete(e),
    qi.delete(e),
    Yi.delete(e),
    Xi.delete(e),
    oa.delete(e),
    la.delete(e));
}
var pa = 0.5,
  ma = new Set([`lot`, `plaza`, `park`]),
  ha = 1.2;
function ga(e) {
  if (!e || !e.length) return ma;
  let t = new Set(ma);
  for (let n of e) t.add(n);
  return t;
}
var _a = new Set([
  `convenience`,
  `bubbletea`,
  `breakfast`,
  `claw`,
  `pharmacy`,
  `lottery`,
]);
