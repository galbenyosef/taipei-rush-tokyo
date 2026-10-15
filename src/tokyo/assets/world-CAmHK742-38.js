// tokyo/assets/world-CAmHK742 38 — street
// Lines 12210-12433 of readable/tokyo/assets/world-CAmHK742.pretty.js (statement-aligned).
function Ml(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0,
    a = 1 / 0,
    o = -1 / 0,
    s = e[0];
  for (let c of e)
    (c.x0 < t && (t = c.x0),
      c.z0 < n && (n = c.z0),
      c.x1 > r && (r = c.x1),
      c.z1 > i && (i = c.z1),
      c.y0 < a && (a = c.y0),
      c.y1 > o && ((o = c.y1), (s = c)));
  return {
    kind: s.kind === `planter` ? `lowwall` : s.kind,
    x0: t,
    z0: n,
    x1: r,
    z1: i,
    y0: a,
    y1: o,
    site: s.site,
    v: s.v,
  };
}
var Nl = 14,
  Pl = 2,
  Fl = 1,
  Il = 12,
  Ll = 12e4,
  Rl = 4e4,
  zl = 80,
  Bl = 30,
  Vl = 600,
  Hl = 2,
  Ul = 1.2,
  Wl = 0.3;
function Gl(e, t, n = 0) {
  return (
    e.x1 > t.x0 - n && e.x0 < t.x1 + n && e.z1 > t.z0 - n && e.z0 < t.z1 + n
  );
}
function Kl() {
  return typeof performance < `u` ? performance.now() : Date.now();
}
function ql(e, t, n) {
  let r =
    2166136261 ^ Math.imul(t | 0, 2654435761) ^ Math.imul(n | 0, 2246822507);
  for (let t = 0; t < e.length; t++)
    r = Math.imul(r ^ e.charCodeAt(t), 16777619);
  return (
    (r ^= r >>> 15),
    (r = Math.imul(r, 739982445)),
    (r ^= r >>> 12),
    (r >>> 0) / 4294967296
  );
}
function Jl(e) {
  try {
    let t = jl.prototype;
    if (!t || typeof t.layoutBlock != `function`) return null;
    let n = Object.create(t),
      r = [];
    for (let t of [`police`, `hospital`]) {
      let n = e.spawns?.[t];
      n && r.push({ x0: n.x - 10, x1: n.x + 10, z0: n.z - 10, z1: n.z + 10 });
    }
    let i = new Map();
    for (let t of e.pois ?? []) {
      let e = i.get(t.blockId);
      (e || i.set(t.blockId, (e = [])), e.push(t));
    }
    ((n.plan = e),
      (n.keepOpen = r),
      (n.lots = []),
      (n.nextId = 0),
      (n.poisByBlock = i));
    let a = new Map();
    return (e) => {
      let t = a.get(e.id);
      if (t) return t;
      let r = n.lots.length;
      return (
        n.layoutBlock(e),
        (t = n.lots
          .slice(r)
          .map((e) => ({ x0: e.x0, z0: e.z0, x1: e.x1, z1: e.z1 }))),
        (n.lots.length = 0),
        a.set(e.id, t),
        t
      );
    };
  } catch (e) {
    return (
      console.warn(
        `[init] sites gaps: lot layout unavailable, using raster fallback`,
        e,
      ),
      null
    );
  }
}
function Yl(e, t, n) {
  let r = [];
  for (let i = 0; i < n; i++)
    for (let a = 0; a < t; a++) {
      if (!e[i * t + a]) continue;
      let o = a + 1;
      for (; o < t && e[i * t + o];) o++;
      let s = i + 1;
      grow: for (; s < n;) {
        for (let n = a; n < o; n++) if (!e[s * t + n]) break grow;
        s++;
      }
      for (let n = i; n < s; n++) for (let r = a; r < o; r++) e[n * t + r] = 0;
      r.push({ i0: a, j0: i, i1: o, j1: s });
    }
  return (
    r.sort(
      (e, t) => (t.i1 - t.i0) * (t.j1 - t.j0) - (e.i1 - e.i0) * (e.j1 - e.j0),
    ),
    r
  );
}
function Xl(e, t, n) {
  let r = n * 0.6,
    i = (e, t, n, r) => Math.max(0, Math.min(t, r) - Math.max(e, n));
  for (let n = t; n < e.length; n++) {
    let a = e[n];
    if (
      !(a.street[0] || a.street[1] || a.street[2] || a.street[3]) &&
      !(Math.min(a.x1 - a.x0, a.z1 - a.z0) < 2.5)
    ) {
      for (let n = t; n < e.length; n++) {
        let t = e[n];
        if (t === a || Math.min(t.x1 - t.x0, t.z1 - t.z0) >= 2.5) continue;
        let o = i(a.z0, a.z1, t.z0, t.z1) >= 0.5 * (a.z1 - a.z0),
          s = i(a.x0, a.x1, t.x0, t.x1) >= 0.5 * (a.x1 - a.x0);
        (t.street[1] && o && Math.abs(t.x0 - a.x1) <= r && (a.street[1] = !0),
          t.street[3] && o && Math.abs(a.x0 - t.x1) <= r && (a.street[3] = !0),
          t.street[0] && s && Math.abs(a.z0 - t.z1) <= r && (a.street[0] = !0),
          t.street[2] && s && Math.abs(t.z0 - a.z1) <= r && (a.street[2] = !0));
      }
      (a.street[0] || a.street[1] || a.street[2] || a.street[3]) &&
        (a.behindStrip = !0);
    }
  }
}
function Zl(e, t, n, r, i) {
  let a = e.x1 - e.x0,
    o = e.z1 - e.z0,
    s = Math.min(a, o),
    c = (e.x0 + e.x1) / 2,
    l = (e.z0 + e.z1) / 2,
    u = 0.15;
  try {
    u = n.groundHeight(c, l);
  } catch {}
  let d = ql(t, Math.round(c * 4), Math.round(l * 4) + r),
    f = e.street[0] || e.street[1] || e.street[2] || e.street[3],
    p = (e, n, r, a, o, s) => {
      a - n < 0.05 ||
        o - r < 0.05 ||
        i.push({
          kind: e,
          x0: n,
          z0: r,
          x1: a,
          z1: o,
          y0: u,
          y1: u + s,
          site: t,
          v: d,
        });
    };
  if (!f) {
    s < 2.5
      ? p(`party`, e.x0, e.z0, e.x1, e.z1, 5.5 + d * 3)
      : p(
          `shed`,
          e.x0 + 0.1,
          e.z0 + 0.1,
          e.x1 - 0.1,
          e.z1 - 0.1,
          Math.min(6.2, 2.9 + 0.25 * s + d * 0.8),
        );
    return;
  }
  if (s < 2.5) {
    p(`planter`, e.x0 + 0.1, e.z0 + 0.1, e.x1 - 0.1, e.z1 - 0.1, 0.55);
    return;
  }
  if (e.behindStrip) {
    p(`lowwall`, e.x0, e.z0, e.x1, e.z1, 0.95 + d * 0.15);
    return;
  }
  let m = 0.25,
    h = 0.95 + d * 0.15,
    g = Math.min(1.2, s * 0.3),
    [_, v, y, b] = e.street;
  (_ && p(`lowwall`, e.x0, e.z0, e.x1, e.z0 + m, h),
    y && p(`lowwall`, e.x0, e.z1 - m, e.x1, e.z1, h),
    b &&
      p(`lowwall`, e.x0, e.z0 + (_ ? m : 0), e.x0 + m, e.z1 - (y ? m : 0), h),
    v &&
      p(`lowwall`, e.x1 - m, e.z0 + (_ ? m : 0), e.x1, e.z1 - (y ? m : 0), h));
  let x = e.x0 + (b ? m : 0),
    S = e.x1 - (v ? m : 0),
    C = e.z0 + (_ ? m : 0),
    w = e.z1 - (y ? m : 0);
  if (
    (_ || p(`planter`, x, C, S, C + g, 0.6),
    y || p(`planter`, x, w - g, S, w, 0.6),
    b || p(`planter`, x, C + (_ ? 0 : g), x + g, w - (y ? 0 : g), 0.6),
    v || p(`planter`, S - g, C + (_ ? 0 : g), S, w - (y ? 0 : g), 0.6),
    s >= 6)
  ) {
    let e = (S - x) * 0.18,
      t = (w - C) * 0.18;
    p(`planter`, c - e, l - t, c + e, l + t, 0.5);
  }
}
