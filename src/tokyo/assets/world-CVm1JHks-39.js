// tokyo/assets/world-CVm1JHks 39 — math
// Lines 12501-12832 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function au(e, t) {
  let n = $l(),
    r = {
      bySite: new Map(),
      items: [],
      stats: {
        ms: 0,
        sites: 0,
        rects: 0,
        items: 0,
        cells: 0,
        method: `none`,
        blocks: 0,
        skipped: 0,
        truncated: !1,
        msLayout: 0,
        probes: 0,
        trimmed: 0,
        merged: 0,
      },
    },
    i = new Map(),
    a = e?.plan;
  if (!a || !Array.isArray(a.blocks)) return r;
  let o = e.districts,
    s = null;
  try {
    s = xl(o?.packs);
  } catch {
    s = null;
  }
  let c = s
      ? (e, t, n, r) => s.claimed(e, t, n, r, `buildings`)
      : (e, t, n, r) => {
          try {
            return !!o?.claimed(e, t, n, r, `buildings`);
          } catch {
            return !1;
          }
        },
    l = (e, t) => {
      r.stats.probes++;
      try {
        return a.surfaceAt(e, t) === `lot`;
      } catch {
        return !1;
      }
    },
    u = tu(a);
  r.stats.method = u ? `layout` : `raster`;
  let d = e.buildings?.buildings ?? [],
    f = new Map(),
    p = (e, t) => (e + 4096) * 8192 + (t + 4096);
  for (let e of d) {
    let t = Math.floor(e.x0 / 64),
      n = Math.floor(e.x1 / 64),
      r = Math.floor(e.z0 / 64),
      i = Math.floor(e.z1 / 64);
    if (!((n - t + 1) * (i - r + 1) > 64))
      for (let a = r; a <= i; a++)
        for (let r = t; r <= n; r++) {
          let t = p(r, a),
            n = f.get(t);
          (n || f.set(t, (n = [])), n.push(e));
        }
  }
  let m = new Set(),
    h = (e, t, n) => {
      ((n.length = 0), m.clear());
      let r = Math.floor((e.x0 - t) / 64),
        i = Math.floor((e.x1 + t) / 64),
        a = Math.floor((e.z0 - t) / 64),
        o = Math.floor((e.z1 + t) / 64);
      for (let s = a; s <= o; s++)
        for (let a = r; a <= i; a++) {
          let r = f.get(p(a, s));
          if (r)
            for (let i of r) m.has(i) || (m.add(i), Ql(i, e, t) && n.push(i));
        }
      return n;
    },
    g = [],
    _ = new Map();
  for (let e of a.blocks) {
    let t = Math.floor(e.minX / 64),
      n = Math.floor(e.maxX / 64),
      r = Math.floor(e.minZ / 64),
      i = Math.floor(e.maxZ / 64);
    if (!((n - t + 1) * (i - r + 1) > 256))
      for (let a = r; a <= i; a++)
        for (let r = t; r <= n; r++) {
          let t = p(r, a),
            n = _.get(t);
          (n || _.set(t, (n = [])), n.push(e));
        }
  }
  let v = new Set(),
    y = (e) => {
      v.clear();
      let t = [];
      for (let n of e) {
        let e = Math.floor(n.x0 / 64),
          r = Math.floor(n.x1 / 64),
          i = Math.floor(n.z0 / 64),
          a = Math.floor(n.z1 / 64);
        for (let n = i; n <= a; n++)
          for (let i = e; i <= r; i++) {
            let e = _.get(p(i, n));
            if (e) for (let n of e) v.has(n) || (v.add(n), t.push(n));
          }
      }
      return t;
    },
    b = new Set(),
    x = new Set(),
    S = 0;
  for (let e of t)
    if (e.ok) {
      if (S > Wl || $l() - n > Kl) {
        (r.stats.skipped++, (r.stats.truncated = !0));
        continue;
      }
      try {
        let t = e.claims.filter(
          (e) => e.scope === `buildings` || e.scope === `all`,
        );
        if (!t.length) continue;
        let n = t.map((e) => ({
            x0: e.minX,
            z0: e.minZ,
            x1: e.maxX,
            z1: e.maxZ,
          })),
          o = [];
        for (let e of y(n)) {
          let t = { x0: e.minX, z0: e.minZ, x1: e.maxX, z1: e.maxZ };
          if (n.some((e) => Ql(e, t))) {
            if (u) {
              let t = [];
              try {
                x.has(e.id) || (x.add(e.id), r.stats.blocks++);
                let n = $l();
                ((t = u(e)), (r.stats.msLayout += $l() - n));
              } catch (n) {
                (console.warn(
                  `[init] sites gaps: layout failed for block ${e.id}`,
                  n,
                ),
                  (t = []));
              }
              for (let r of t) {
                if (!n.some((e) => Ql(e, r))) continue;
                let t = `${r.x0.toFixed(1)},${r.z0.toFixed(1)},${r.x1.toFixed(1)},${r.z1.toFixed(1)}`;
                b.has(t) || (b.add(t), o.push({ r, b: e }));
              }
            } else
              for (let t of n) {
                let n = {
                  x0: Math.max(e.minX, t.x0 - Ul),
                  z0: Math.max(e.minZ, t.z0 - Ul),
                  x1: Math.min(e.maxX, t.x1 + Ul),
                  z1: Math.min(e.maxZ, t.z1 + Ul),
                };
                n.x1 - n.x0 > 1 && n.z1 - n.z0 > 1 && o.push({ r: n, b: e });
              }
          }
        }
        if (!o.length) continue;
        let s = { id: e.id, rects: [], items: [] },
          d = [];
        for (let { r: e, b: t } of o) {
          let n = e.x0,
            i = e.z0,
            a = e.x1 - e.x0,
            o = e.z1 - e.z0,
            s = a * o > Jl ? Yl : 1,
            f = Math.max(0, Math.floor(a / s + 1e-6)),
            p = Math.max(0, Math.floor(o / s + 1e-6));
          if (f < 1 || p < 1 || f * p > Gl) continue;
          if (S + f * p > Wl) {
            r.stats.truncated = !0;
            break;
          }
          S += f * p;
          let m = a / f,
            _ = o / p,
            v = h(e, 1, g),
            y = new Uint8Array(f * p),
            b = 0,
            x = Math.max(1, Math.ceil(Xl / m)),
            C = Math.max(1, Math.ceil(Xl / _)),
            w = !u || e.x0 - t.minX < 1.7,
            T = !u || t.maxX - e.x1 < 1.7,
            E = !u || e.z0 - t.minZ < 1.7,
            D = !u || t.maxZ - e.z1 < 1.7,
            O = !u;
          for (let e = 0; e < p; e++) {
            let t = i + e * _,
              r = t + _,
              a = (E && e < C) || (D && e >= p - C);
            for (let i = 0; i < f; i++) {
              let o = n + i * m,
                s = o + m,
                u = (o + s) / 2,
                d = (t + r) / 2;
              if (
                !((O || a || (w && i < x) || (T && i >= f - x)) && !l(u, d)) &&
                !c(o + Zl, t + Zl, s - Zl, r - Zl)
              ) {
                if (v.length) {
                  let e = !1;
                  for (let t of v)
                    u > t.x0 - 0.5 &&
                      u < t.x1 + 0.5 &&
                      d > t.z0 - 0.5 &&
                      d < t.z1 + 0.5 &&
                      (e = !0);
                  if (e) continue;
                }
                ((y[e * f + i] = 1), b++);
              }
            }
          }
          if (((r.stats.cells += b), !b)) continue;
          let k = d.length;
          for (let e of nu(y, f, p)) {
            let r = {
                x0: n + e.i0 * m,
                z0: i + e.j0 * _,
                x1: n + e.i1 * m,
                z1: i + e.j1 * _,
                street: [!1, !1, !1, !1],
                a: 0,
              },
              a = r.x1 - r.x0,
              o = r.z1 - r.z0;
            if (((r.a = a * o), r.a < Vl || Math.min(a, o) < Hl)) continue;
            let s = 0.6;
            ((r.street = [
              r.z0 - t.minZ < s,
              t.maxX - r.x1 < s,
              t.maxZ - r.z1 < s,
              r.x0 - t.minX < s,
            ]),
              d.push(r));
          }
          ru(d, k, Math.max(m, _));
        }
        d.sort((e, t) => t.a - e.a);
        let f = [];
        for (let t = 0; t < d.length && s.rects.length < 6; t++) {
          let { a: n, ...r } = d[t],
            i = [];
          if ((iu(r, e.id, a, t, i), i.length)) {
            if (s.rects.length && s.items.length + i.length > Bl) break;
            (s.rects.push(r), f.push(i));
            for (let e of i) s.items.push(e);
          }
        }
        if (!s.rects.length) continue;
        (r.bySite.set(e.id, s),
          i.set(e.id, f),
          r.stats.sites++,
          (r.stats.rects += s.rects.length));
      } catch (t) {
        console.warn(`[init] sites gaps failed for ${e.id}`, t);
      }
    }
  let C = 0;
  for (let e of r.bySite.values()) C += e.items.length;
  for (let e = 0; C > 240 && e < 4e3; e++) {
    let e = null,
      t = -1;
    for (let n of r.bySite.values()) {
      if (e && n.items.length <= e.items.length) continue;
      let r = i.get(n.id);
      if (!r) continue;
      let a = -1,
        o = 1;
      for (let e = 0; e < r.length; e++)
        r[e].length > o && ((o = r[e].length), (a = e));
      a < 0 || ((e = n), (t = a));
    }
    if (!e || t < 0) break;
    let n = i.get(e.id),
      a = zl(n[t]);
    ((C -= n[t].length - 1),
      (r.stats.merged += n[t].length - 1),
      (n[t] = [a]),
      (e.items.length = 0));
    for (let t of n) for (let n of t) e.items.push(n);
  }
  for (let e = 0; e < 2 && C > 240; e++) {
    let t = +(e === 0);
    for (let e = 0; C > 240 && e < 4e3; e++) {
      let e = null;
      for (let n of r.bySite.values())
        n.rects.length > t &&
          (!e || n.items.length > e.items.length) &&
          (e = n);
      if (!e) break;
      let n = i.get(e.id)?.pop();
      if ((e.rects.pop(), !n)) break;
      ((e.items.length -= n.length),
        (C -= n.length),
        r.stats.rects--,
        (r.stats.trimmed += n.length));
    }
  }
  for (let [e, t] of [...r.bySite])
    if (!t.items.length) r.bySite.delete(e);
    else for (let e of t.items) r.items.push(e);
  ((r.stats.sites = r.bySite.size),
    (r.stats.items = r.items.length),
    (r.stats.ms = Math.round(($l() - n) * 100) / 100));
  let w = r.stats;
  return (
    (w.trimmed || w.merged) &&
      console.info(
        `[init] sites gaps: ${w.items} fillers kept, ${w.merged} folded into coarse massing, ${w.trimmed} trimmed to the 240-item far-layer budget`,
      ),
    w.truncated
      ? console.warn(
          `[test] sites gaps: budget ran out after ${w.ms} ms — ${w.skipped} sites got no fillers (their dropped lots stay bare ground)`,
        )
      : w.ms > ql &&
        console.info(
          `[init] sites gaps ${w.ms} ms (${w.sites} sites, ${w.blocks} block layouts ${w.msLayout.toFixed(1)} ms, ${w.probes} surface probes) — above the ${ql} ms soft target`,
        ),
    r
  );
}
