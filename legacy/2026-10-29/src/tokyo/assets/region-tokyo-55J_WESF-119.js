// tokyo/assets/region-tokyo-55J_WESF 119 — math
// Lines 52760-53032 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function Eue(e, t, n, r, i) {
  let a = e.at.face,
    o = e.at.game?.x ?? e.at.x,
    s = e.at.game?.z ?? e.at.z,
    c = [],
    l = Sue(t, o, s, a);
  if (!l)
    return f_(
      e,
      `no block has a ${a} frontage at (${o.toFixed(0)}, ${s.toFixed(0)})`,
    );
  let u = c_(l, a),
    d = u.road,
    f = e.lot.w,
    p = e.lot.minW ?? f * 0.7,
    m = e.lot.maxW ?? f * 1.45,
    h = u.alongX ? o : s,
    g,
    _,
    v,
    y = 0;
  if ((e.at.mode ?? `lots`) === `lots`) {
    let t = i(l),
      r = wue(t, l, a);
    if (!r.length)
      return f_(
        e,
        `block ${l.id} has no ${a} frontage lots (mode 'free' for a lot-less place)`,
      );
    let o = r.map((e) => !n.claimed?.(e.x0, e.z0, e.x1, e.z1, `buildings`)),
      s = 0,
      d = 1 / 0;
    for (let e = 0; e < r.length; e++) {
      let t = u_(r[e], u.alongX),
        n = d_(r[e], u.alongX),
        i = h < t ? t - h : h > n ? h - n : 0;
      i < d && ((d = i), (s = e));
    }
    d > 12 &&
      c.push(`point is ${d.toFixed(1)} m from the nearest frontage lot`);
    let b = null,
      x = 1 / 0;
    for (let e = Math.max(0, s - 6); e <= Math.min(r.length - 1, s + 6); e++)
      for (let t = e; t < Math.min(r.length, e + 7); t++) {
        let n = !0;
        for (let i = e; i <= t && n; i++)
          (o[i] || (n = !1),
            i > e &&
              u_(r[i], u.alongX) - d_(r[i - 1], u.alongX) > bue &&
              (n = !1));
        if (!n) continue;
        let i = u_(r[e], u.alongX),
          a = d_(r[t], u.alongX),
          s = a - i;
        if (s < p || s > m) continue;
        let c = h < i ? i - h : h > a ? h - a : 0,
          l = Math.abs(s - f) + 0.5 * Math.abs((i + a) / 2 - h) + 2 * c;
        l < x && ((x = l), (b = [e, t]));
      }
    if (!b)
      return f_(
        e,
        `no run of ${a} frontage lots near the point fits ${p.toFixed(1)}–${m.toFixed(1)} m (lot ${r[s].x0.toFixed(0)},${r[s].z0.toFixed(0)} is ${(d_(r[s], u.alongX) - u_(r[s], u.alongX)).toFixed(1)} m)`,
        c,
      );
    let [S, C] = b;
    for (let e = S; e <= C; e++) y |= r[e].street;
    ((g = u_(r[S], u.alongX)), (_ = d_(r[C], u.alongX)), (v = 0));
    let w = new Set(r.slice(S, C + 1)),
      T = (e) =>
        a === `N`
          ? e.z0 - l.minZ
          : a === `S`
            ? l.maxZ - e.z1
            : a === `E`
              ? l.maxX - e.x1
              : e.x0 - l.minX,
      E = (e) =>
        a === `N`
          ? e.z1 - l.minZ
          : a === `S`
            ? l.maxZ - e.z0
            : a === `E`
              ? l.maxX - e.x0
              : e.x1 - l.minX;
    for (let e of w) v = Math.max(v, E(e));
    let D = e.lot.maxD ?? Math.max(e.lot.d * 1.8, v),
      O = t
        .filter(
          (e) =>
            !w.has(e) &&
            d_(e, u.alongX) > g + 0.05 &&
            u_(e, u.alongX) < _ - 0.05,
        )
        .sort((e, t) => T(e) - T(t)),
      k = 0;
    for (let e of O)
      T(e) >= v - 0.05 ||
        (u_(e, u.alongX) >= g - 0.35 &&
        d_(e, u.alongX) <= _ + 0.35 &&
        E(e) <= D &&
        o.length &&
        !n.claimed?.(e.x0, e.z0, e.x1, e.z1, `buildings`)
          ? ((v = Math.max(v, E(e))), k++)
          : (v = Math.max(3, T(e) - 0.3)));
    (k &&
      c.push(
        `absorbs ${k} lot(s) behind its frontage (depth ${v.toFixed(1)} m)`,
      ),
      e.lot.maxD &&
        v > e.lot.maxD &&
        (c.push(
          `lot depth ${v.toFixed(1)} m capped at maxD ${e.lot.maxD} m (the generic lot behind is dropped: a back strip stays empty)`,
        ),
        (v = e.lot.maxD)));
  } else {
    ((g = h - f / 2), (_ = h + f / 2), (v = e.lot.d));
    let t = u.alongX
        ? {
            x0: g,
            x1: _,
            z0: Math.min(u.line, u.line - u.out * v),
            z1: Math.max(u.line, u.line - u.out * v),
          }
        : {
            z0: g,
            z1: _,
            x0: Math.min(u.line, u.line - u.out * v),
            x1: Math.max(u.line, u.line - u.out * v),
          },
      n = i(l).filter(
        (e) =>
          e.x1 > t.x0 + o_ &&
          e.x0 < t.x1 - o_ &&
          e.z1 > t.z0 + o_ &&
          e.z0 < t.z1 - o_,
      );
    n.length &&
      c.push(
        `free lot drops ${n.length} generic lot(s) whole: ${n.map((e) => `[${e.x0.toFixed(0)},${e.z0.toFixed(0)}]-[${e.x1.toFixed(0)},${e.z1.toFixed(0)}]`).join(` `)}`,
      );
  }
  let b = _ - g,
    x = v;
  if (x < 1.2) return f_(e, `lot only ${x.toFixed(1)} m deep`, c);
  let S = (g + _) / 2,
    C = u.line - u.out * (x / 2),
    w = u.alongX ? S : C,
    T = u.alongX ? C : S,
    E = qg[a],
    D = l_(w, T, E, -b / 2, -x / 2, b / 2, x / 2);
  for (let t of r)
    if (xue(D, t, 0.3)) return f_(e, `lot overlaps another site`, c);
  if (
    n.claimed?.(D.minX + o_, D.minZ + o_, D.maxX - o_, D.maxZ - o_, `buildings`)
  )
    return f_(e, `lot overlaps a district pack's claim`, c);
  for (let t of n.entrances ?? []) {
    let n = Math.max(t.hw, t.hl);
    if (
      D.maxX > t.cx - n &&
      D.minX < t.cx + n &&
      D.maxZ > t.cz - n &&
      D.minZ < t.cz + n
    )
      return f_(e, `lot overlaps a transit entrance`, c);
  }
  r.push(D);
  let O = Math.min(_ - 0.5, Math.max(g + 0.5, h)),
    k = u.alongX ? O : u.line + u.out * 0.5,
    A = u.alongX ? u.line + u.out * 0.5 : O,
    j = t.streetLabel(d, k, A),
    ee = { zh: ``, en: `` };
  try {
    let e = t.address(d, k, A),
      n = e.ja;
    ee = n ? { zh: e.zh, en: e.en, ja: n } : { zh: e.zh, en: e.en };
  } catch {}
  let M = e.shape(b, x),
    te = [],
    ne = M.claims?.length
      ? M.claims
      : [{ x0: -b / 2, z0: -x / 2, x1: b / 2, z1: x / 2, scope: `buildings` }],
    re = [];
  for (let t of ne) {
    let n = Math.min(t.z0, t.z1),
      r = Math.max(Math.min(t.x0, t.x1), -b / 2),
      i = Math.min(Math.max(t.x0, t.x1), b / 2),
      a = Math.min(Math.max(t.z0, t.z1), x / 2),
      o = -x / 2 - n;
    if (t.scope === `props`) {
      let e = Math.max(0, d.sidewalk - s_);
      o > e + 0.01 &&
        (c.push(
          `props strip clipped ${o.toFixed(1)} → ${e.toFixed(1)} m past the lot line (${d.sidewalk} m pavement keeps ${s_} m clear)`,
        ),
        (n = -x / 2 - e));
    } else n = Math.max(n, -x / 2);
    if (i - r < 0.5 || a - n < 0.5) continue;
    let s = l_(w, T, E, r, n, i, a),
      l = t.scope === `props` ? 0 : o_;
    te.push({
      minX: s.minX + l,
      minZ: s.minZ + l,
      maxX: s.maxX - l,
      maxZ: s.maxZ - l,
      scope: t.scope,
      label: `site:${e.id}`,
    });
  }
  let ie = {
      id: e.id,
      ok: re.length === 0,
      x: w,
      z: T,
      y: t.groundHeight(w, T),
      facing: E,
      w: b,
      d: x,
      rect: D,
      frontage: {
        roadIndex: d.index,
        label: j,
        halfWidth: d.halfWidth,
        halfTotal: d.halfTotal,
        sidewalk: d.sidewalk,
      },
      address: ee,
      claims: te,
      anchors: [],
      replaces: [],
      warnings: c.map((t) => `${e.id}: ${t}`),
      errors: re,
    },
    ae = (e, t) =>
      Math.abs(e) > Math.abs(t) ? (e > 0 ? 2 : 8) : t > 0 ? 4 : 1,
    oe = Math.cos(E),
    se = Math.sin(E);
  return (
    (ie.tokyo = {
      exposed: {
        negX: !!(y & ae(-oe, -se)),
        posX: !!(y & ae(oe, se)),
        back: !!(y & ae(-se, oe)),
      },
    }),
    { def: e, site: ie, w: b, d: x }
  );
}
function p_(e, t, n, r) {
  let i = e.shape(t, n),
    a = r ?? {};
  return (
    (a.id = e.id),
    (a.name = { zh: e.name.zh, en: e.name.en, ja: e.name.ja }),
    (a.blurb = e.blurb),
    (a.category = e.category),
    (a.district = e.district),
    e.brandReal && (a.brandReal = e.brandReal),
    (a.placement = { frontage: { zh: e.name.zh }, cross: [] }),
    (a.lot = { w: t, d: n }),
    (a.claims = i.claims),
    (a.proxy = i.proxy),
    (a.solids = i.solids),
    (a.map = e.map),
    (a.interior = `none`),
    (a.atlas = { slots: 1 }),
    e.cluster && (a.cluster = e.cluster),
    e.hero && (a.hero = e.hero),
    (a.priority = e.priority ?? 0),
    a
  );
}
