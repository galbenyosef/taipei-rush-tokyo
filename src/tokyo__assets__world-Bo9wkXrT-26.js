// tokyo__assets__world-Bo9wkXrT 26 — math
// Lines 7729-8058 of readable/tokyo__assets__world-Bo9wkXrT.pretty.js (statement-aligned).
function go(e, t, n, r, i) {
  let { plan: a, meta: o, ref: s } = e,
    c = o.placement,
    l = t.road,
    u = c.setback ?? 0.5,
    d = Math.max(0, c.search ?? 60) * (e.relax.wide ? 2 : 1);
  if (e.mode === `undercroft`) {
    if (!l.elevated) {
      To(e, `not-elevated:${l.name.zh}`);
      return;
    }
    if (!(ji(l, 1.2) >= 2)) {
      To(e, `no-median-under:${l.name.zh}`);
      return;
    }
  }
  let f = 1,
    p = NaN,
    m = !1,
    h = po(c.cross[1]);
  if (h.length) {
    let n = e.intervals.filter((e) => e.road === l && !e.lane),
      r;
    for (let e of h)
      if (
        ((r = $i(a, n, e)
          .filter((e) => e.node !== t.node)
          .sort(
            (e, n) =>
              Math.abs(e.s - t.s) - Math.abs(n.s - t.s) ||
              e.node.id - n.node.id,
          )[0]),
        r)
      )
        break;
    r
      ? ((f = r.s > t.s ? 1 : -1), (p = r.s - f * r.half), (m = !0))
      : i.push(`cross1-not-found ${h.map(pi).join(` / `)} on ${pi(s)}`);
  }
  if (!m && Ei(l)) {
    ((f = (l.from + l.to) / 2 >= t.s ? 1 : -1), (m = !0));
    let e = Qi(a, l).filter((e) => (e.s - t.s) * f > 0.5),
      n = f > 0 ? e[0] : e[e.length - 1];
    p = n ? n.s - f * n.half : f > 0 ? l.to : l.from;
  }
  if (!m) {
    let n = Fi(a, l, t.s + t.half + 4);
    for (let e of [n, -n]) {
      let n = t.s + e * (t.half + 4);
      if (!(n < l.from || n > l.to) && fi(a, l, n, s)) {
        ((f = e), (m = !0));
        break;
      }
    }
    if (!m) {
      To(e, `no-stretch`);
      return;
    }
    let r = Qi(a, l).filter((e) => (e.s - t.s) * f > 0.5),
      i = f > 0 ? r[0] : r[r.length - 1];
    p = i ? i.s - f * i.half : f > 0 ? l.to : l.from;
  }
  let g = t.s + f * (t.half + 4),
    _ = e.intervals.find(
      (e) => e.road === l && !e.lane && g >= e.s0 - 0.5 && g <= e.s1 + 0.5,
    );
  _ && (p = f > 0 ? Math.min(p, _.s1) : Math.max(p, _.s0));
  let v = t.s + f * t.half,
    y = Math.max(0, (p - v) * f),
    b = c.along ?? Math.max(0, (y - n) / 2),
    x = v + f * (b + n / 2),
    S = [
      [1, 0],
      [-1, 0],
    ];
  if (c.side) {
    let t = gi(l, c.side);
    t
      ? (S =
          e.mode === `beyond`
            ? [[t, 0]]
            : [
                [t, 0],
                [-t, Ha],
              ])
      : (To(
          e,
          `side-${c.side}-invalid-on-${l.axis === `x` ? `EW` : `NS`}-road`,
        ),
        i.push(
          `side-ignored ${c.side} is not a side of ${l.name.zh} in this map version — placed on whichever side has room`,
        ));
  }
  let C = l.halfTotal + u,
    w = Math.max(n, o.lot.w),
    T = Math.max(r, o.lot.d),
    E = d + w + 2,
    D = e.mode === `undercroft` ? T / 2 + 2 : C + T + 2,
    O = _o(e, Eo(yi(l, x, 1, 0, 2 * E, D), yi(l, x, -1, 0, 2 * E, D)));
  for (let t = 0; t <= d && !(e.best && t >= e.best.score); t += 2)
    for (let i of t === 0 ? [0] : [t, -t]) {
      let a = x + f * i,
        o = 0;
      if (!vo(e.intervals, l, a)) {
        if (!e.relax.offFrontage || a < l.from || a > l.to) {
          To(e, `off-frontage`);
          continue;
        }
        o = 8;
      }
      for (let [i, s] of S) yo(e, O, l, a, i, C, n, r, t, !1, s + o);
    }
  if (c.lane && e.mode === `lot`) {
    let t = mi(l, x, 0, 0);
    for (let i of e.intervals) {
      if (!i.lane || !i.road.lane || i.road.lane.parent !== l) continue;
      let o = i.road,
        s = o.at,
        c = Math.abs(s - (l.axis === `x` ? t.x : t.z));
      if (c > d + n) continue;
      let f = l.at,
        p = (o.from + o.to) / 2 > f ? 1 : -1,
        m = Qi(a, o).reduce(
          (e, t) => (!e || Math.abs(t.s - f) < Math.abs(e.s - f) ? t : e),
          null,
        ),
        h = f + p * (m ? m.half : l.halfWidth),
        g = o.halfTotal + u,
        _ = _o(
          e,
          Eo(
            yi(o, h + (d / 2) * p, 1, 0, d + 2 * n + 4, g + r + 2),
            yi(o, h + (d / 2) * p, -1, 0, d + 2 * n + 4, g + r + 2),
          ),
        );
      for (let t = 0; t <= d; t += 2) {
        let i = 8 + c + t;
        if (e.best && i >= e.best.score) break;
        let a = h + p * (n / 2 + t);
        if (a < o.from || a > o.to) break;
        for (let t of [1, -1]) yo(e, _, o, a, t, g, n, r, i, !0, 0);
      }
    }
  }
}
function _o(e, t) {
  let n = `${t.minX.toFixed(2)},${t.minZ.toFixed(2)},${t.maxX.toFixed(2)},${t.maxZ.toFixed(2)}`,
    r = e.vcache.get(n);
  return (r || e.vcache.set(n, (r = Oa(e.env, t, e.placedRects))), r);
}
function vo(e, t, n) {
  for (let r of e)
    if (r.road === t && !r.lane && n >= r.s0 && n <= r.s1) return !0;
  return !1;
}
function yo(e, t, n, r, i, a, o, s, c, l, u = 0) {
  e.tried++;
  let d = e.mode === `undercroft` && !l,
    f = d ? Mi(n, r, o, s) : yi(n, r, i, a, o, s);
  e.opts.host = d ? n : null;
  let p = Pa(t, f, e.opts),
    m = 0;
  if (p === `sidewalk` && e.relax.sidewalk) {
    e.opts.allowSidewalk = !0;
    let n = Pa(t, f, e.opts);
    ((e.opts.allowSidewalk = !1), (p = n), n || (m = 8));
  }
  if (p) {
    To(e, p);
    return;
  }
  let h = (f.minX + f.maxX) / 2,
    g = (f.minZ + f.maxZ) / 2,
    _ = c + u + m + Va * si(e.targets, h, g);
  (!e.best || _ < e.best.score - 1e-9) &&
    (e.best = {
      score: _,
      road: n,
      s: r,
      sideSign: i,
      rect: f,
      w: o,
      d: s,
      lane: l,
      slide: c,
      mode: d ? `undercroft` : l ? `lot` : e.mode,
    });
}
function bo(e, t, n, r, i, a) {
  let o = t.plan,
    { road: s, s: c, sideSign: l, rect: u, w: d, d: f } = n,
    p = (u.minX + u.maxX) / 2,
    m = (u.minZ + u.maxZ) / 2,
    h = n.mode === `undercroft` ? vi(s, -l) : vi(s, l),
    g = Pi(o, s, c),
    _ = mi(s, c, l, n.mode === `undercroft` ? f / 2 : s.halfTotal),
    v = [],
    y = {
      id: e.id,
      ok: !0,
      rejections: a,
      mode: n.mode,
      x: p,
      z: m,
      y: o.groundHeight(p, m),
      facing: h,
      w: d,
      d: f,
      rect: u,
      frontage: {
        roadIndex: s.index,
        label: g,
        halfWidth: s.halfWidth,
        halfTotal: s.halfTotal,
        sidewalk: s.sidewalk,
      },
      address: Co(o, s, _, g, e.houseNo),
      claims: [],
      anchors: [],
      replaces: [],
      warnings: i,
      errors: v,
    },
    b = n.mode === `undercroft`,
    x = b ? 0 : s.sidewalk - 2,
    S = e.claims?.length
      ? e.claims
      : [
          {
            x0: -e.lot.w / 2,
            z0: -e.lot.d / 2,
            x1: e.lot.w / 2,
            z1: e.lot.d / 2,
            scope: `buildings`,
          },
        ],
    C = e.lot.w > 0 ? d / e.lot.w : 1,
    w = e.lot.d > 0 ? f / e.lot.d : 1;
  for (let t of S) {
    let n = Math.min(t.z0, t.z1) * w,
      r = Math.min(t.x0, t.x1) * C,
      a = Math.max(t.x0, t.x1) * C,
      o = Math.max(t.z0, t.z1) * w,
      c = -f / 2 - n;
    (!b &&
      t.scope === `props` &&
      c > x + 0.01 &&
      x > 0 &&
      (i.push(
        `props-claim-clipped ${c.toFixed(1)} m → ${x.toFixed(1)} m past the lot line (${s.sidewalk.toFixed(1)} m pavement keeps 2 m clear)`,
      ),
      (n = -f / 2 - x),
      (c = x)),
      c > 0.01 &&
        (b || t.scope !== `props` || c > x + 0.01) &&
        v.push(
          b
            ? `claim-blocks-lane ${t.scope} reaches ${c.toFixed(1)} m past the undercroft lot edge, into a traffic lane of ${g.full.zh}`
            : `claim-blocks-sidewalk ${t.scope} reaches ${c.toFixed(1)} m past the lot line (props only, max ${Math.max(0, x).toFixed(1)} m)`,
        ));
    let l = d / 2,
      u = f / 2;
    t.scope !== `props` &&
      (r < -l - 0.5 || a > l + 0.5 || o > u + 0.5) &&
      i.push(`claim-outside-lot ${t.scope}`);
    let p = Math.max(r, -d / 2),
      m = Math.min(a, d / 2),
      h = Math.min(o, f / 2),
      _ = t.scope === `props` ? n : Math.max(n, -f / 2);
    if (m - p < 0.5 || h - _ < 0.5) continue;
    let S = da(Za(y, p, _, m, h), Ua),
      T = b ? `props` : t.scope;
    y.claims.push({
      minX: S.minX,
      minZ: S.minZ,
      maxX: S.maxX,
      maxZ: S.maxZ,
      scope: T,
      label: `site:${e.id}`,
    });
  }
  for (let e of r) {
    let n = ai(e.ref, e.at, p, m, t.scale);
    (y.anchors.push(n), n.ok || i.push(ii(e.ref, n)));
  }
  (i.push(...za(o, u)), i.push(...ga(o, u)));
  for (let t of e.placement?.replaces ?? []) {
    let e = !!o.landmark(t.id);
    (y.replaces.push({ id: t.id, note: t.note, known: e }),
      e ||
        i.push(
          `replaces-unknown '${t.id}' is not a plan landmark id (cityData.ts LANDMARKS)`,
        ));
  }
  let T = xo(e, t, y, n, i);
  return (
    T && (y.gate = T),
    (y.warnings = Oo(i).map((t) => (t.startsWith(`[`) ? t : no(e.id, t)))),
    v.length && (y.ok = !1),
    y
  );
}
function xo(e, t, n, r, i) {
  let a = Ka(e).gate;
  if (!a) return;
  let o = t.plan,
    s = $i(
      o,
      [{ road: r.road, s0: r.road.from, s1: r.road.to }],
      a.alongFrom,
    ).sort((e, t) => e.node.id - t.node.id)[0];
  if (!s) {
    i.push(
      `gate-cross-not-found ${pi(a.alongFrom)} does not meet ${Pi(o, r.road, r.s).full.zh} — gate falls back to the lot's own frontage point`,
    );
    let e = mi(r.road, r.s, r.sideSign, r.road.halfTotal);
    return { x: e.x, z: e.z, offset: 0, from: pi(a.alongFrom) };
  }
  let c = r.s >= s.s ? 1 : -1,
    l = s.s + c * (s.half + Math.max(0, a.offset)),
    u = mi(r.road, l, r.sideSign, r.road.halfTotal),
    d = Math.hypot(u.x - n.x, u.z - n.z);
  return (
    d > r.w / 2 + 40 &&
      i.push(
        `gate is ${d.toFixed(0)} m from the lot centre — check placement.gate.offset (${a.offset} m from ${pi(a.alongFrom)})`,
      ),
    { x: u.x, z: u.z, offset: a.offset, from: pi(a.alongFrom) }
  );
}
