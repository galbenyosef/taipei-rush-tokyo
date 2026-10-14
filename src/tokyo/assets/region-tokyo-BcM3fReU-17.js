// tokyo/assets/region-tokyo-BcM3fReU 17 — math
// Lines 14247-14419 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
for (let e of tc)
  for (let [t, n] of Object.entries(e)) (nc.has(t), nc.set(t, n));
function rc(e) {
  return nc.get(e) || { ja: `` };
}
function B(e) {
  return rc(e).ja;
}
function ic(e, t) {
  return oa(rc(e).ja, t);
}
function ac(e, t) {
  let n = rc(e),
    r = (e) => (t ? oa(e, t) : e);
  return { zh: r(n.zh ?? n.ja), en: r(n.en ?? n.ja) };
}
var oc = (e) => nc.has(e);
function sc() {
  return [...nc.keys()];
}
var cc = (e) => e.kind === `boulevard` || e.kind === `arterial`,
  lc = (e) => e.kind !== `end` && (e.signal || e.roads.some((e) => e.major));
function uc(e, t, n) {
  if (t.signal || t.kind === `end` || t.kind === `corner`) return !1;
  let r = n.road,
    i = 0,
    a = !1;
  for (let e of t.roads)
    e !== r &&
      e.axis !== r.axis &&
      ((i = Math.max(i, e.halfWidth)), e.major && (a = !0));
  return !i || r.major
    ? !1
    : a || r.halfWidth < i - 0.01
      ? !0
      : r.halfWidth > i + 0.01
        ? !1
        : (P(t.id, `giveway`) & 1) == (r.axis === `x` ? 0 : 1);
}
var dc = new Set([`chuo-ginza`, `chuo-kyobashi`, `chuo-nihonbashi`]),
  fc = (e, t) => cc(e) && P(e.id, `bikelane`) % 3 == 0 && t > 40,
  pc = {
    lat: 12.95,
    half: 1.8,
    parapet: 0.3,
    run: 143,
    merge: 45,
    lead: 8,
    clear: 5,
    slab: 0.5,
    wall: 1.05,
  },
  mc = [
    [`r1-ueno-off`, `off`, `showa-ueno`, -1, -1305],
    [`r1-ueno-on`, `on`, `showa-ueno`, 1, -1440],
  ],
  hc = new WeakMap();
function gc(e) {
  let t = hc.get(e);
  if (t) return t;
  t = [];
  for (let [n, r, i, a, o] of mc) {
    let s = vee(e, n, r, i, a, o);
    s && t.push(s);
  }
  return (hc.set(e, t), t);
}
function vee(e, t, n, r, i, a) {
  let o = e.roads.find((e) => e.id === r);
  if (!o) return null;
  let s = o.axis,
    c = (e, t) => (s === `x` ? e : t),
    l = e.nodes.find(
      (e) => e.roads.includes(o) && Math.abs(c(e.x, e.z) - a) < 1,
    );
  if (!l) return null;
  let u = (e) => (s === `x` ? e.dx : e.dz) * i > 0.9,
    d = e.links.find(
      (e) =>
        e.road === o && u(e) && (n === `off` ? e.to === l.id : e.from === l.id),
    );
  if (!d) return null;
  let f = n === `off` ? c(d.ex, d.ez) : c(d.sx, d.sz),
    p = n === `on` ? i : -i,
    m = f + p * pc.lead,
    h = m + p * pc.run,
    g = h + p * pc.merge,
    _ = yee(e, s, o.at, h);
  if (!_) return null;
  let v = s === `z` ? -i * e.side : i * e.side,
    y = {
      id: t,
      kind: n,
      road: o,
      axis: s,
      at: o.at,
      travel: i,
      u: p,
      side: v,
      junction: a,
      foot: f,
      start: m,
      top: h,
      gore: g,
      deckY: _.y,
      deckHalf: _.half,
      underLinks: [],
      piers: [],
    },
    b = m + (p * pc.clear * pc.run) / _.y,
    x = Math.min(m, b),
    S = Math.max(m, b);
  for (let t of e.links) {
    if (t.road !== o || !u(t)) continue;
    let e = c(t.sx, t.sz),
      n = c(t.ex, t.ez);
    Math.max(e, n) > x && Math.min(e, n) < S && y.underLinks.push(t.id);
  }
  let C = y.underLinks.map((t) => {
    let n = e.links[t],
      r = c(n.sx, n.sz),
      i = c(n.ex, n.ez);
    return [Math.min(r, i) + 2, Math.max(r, i) - 2];
  });
  for (let e = b + p * 6; (h - e) * p > 8; e += p * 20)
    C.some(([t, n]) => e > t && e < n) && y.piers.push(e);
  return y;
}
function yee(e, t, n, r) {
  let i = e.dataset.expressways ?? [];
  for (let e of i)
    if (e.route === `1` && e.levels.length === e.path.length)
      for (let i = 0; i + 1 < e.path.length; i++) {
        let [a, o] = e.path[i],
          [s, c] = e.path[i + 1];
        if (
          !(t === `z`
            ? Math.abs(a - n) < 0.5 && Math.abs(s - n) < 0.5
            : Math.abs(o - n) < 0.5 && Math.abs(c - n) < 0.5)
        )
          continue;
        let l = t === `z` ? o : a,
          u = t === `z` ? c : s;
        if (r < Math.min(l, u) || r > Math.max(l, u)) continue;
        let d = (r - l) / (u - l || 1);
        return {
          y: e.levels[i] + (e.levels[i + 1] - e.levels[i]) * d,
          half: e.halfWidth,
        };
      }
  return null;
}
function _c(e, t) {
  let n = (t - e.start) * e.u;
  return n <= 0 ? 0 : n >= pc.run ? e.deckY : (e.deckY * n) / pc.run;
}
function vc(e, t, n) {
  let r = e.at + e.side * n;
  return e.axis === `z` ? [r, t] : [t, r];
}
function yc(e) {
  return [Math.min(e.foot, e.gore), Math.max(e.foot, e.gore)];
}
function bc(e, t, n, r, i) {
  for (let a of gc(e)) {
    if (a.road !== t || a.side !== n) continue;
    let [e, o] = yc(a);
    if (i > e && r < o) return !0;
  }
  return !1;
}
var xc = new Uint8Array(256);
for (let e = 0; e < 256; e++) xc[e] = Math.round(255 * (e / 255) ** 2.2);
