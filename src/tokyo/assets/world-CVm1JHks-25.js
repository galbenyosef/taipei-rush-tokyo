// tokyo/assets/world-CVm1JHks 25 — push
// Lines 7597-7855 of readable/tokyo/assets/world-CVm1JHks.pretty.js (statement-aligned).
function wo(e, t, n, r) {
  let i = t.plan,
    a = [],
    o = Ei(i);
  if (o) return Bo(e, [o], a);
  let s = e.placement,
    c = Oo(e);
  if (c.length) return Bo(e, c, a);
  let l = Si(s.anchors, t, r, a),
    u = n
      .filter((t) => t.ok && t.id !== e.id)
      .map((e) => ({ id: e.id, rect: e.rect })),
    d = [s.frontage, ...(s.alt ?? [])],
    f = [...d, ...ua(i, d, !!s.lane)],
    p = ko(s.cross[0]),
    m = [],
    h = null,
    g = [],
    _ = [],
    v = null;
  for (let e of f) {
    let t = Qi(i, e, { lane: !!s.lane }),
      n = t.filter((e) => !e.lane);
    if (!n.length) {
      m.push(`frontage-not-found ${ki(e)}`);
      continue;
    }
    let r = [];
    for (let t of p)
      if (((r = ha(i, n, t)), r.length)) {
        t !== p[0] &&
          a.push(`cross-alt ${ki(t)} (${ki(p[0])} does not meet ${ki(e)})`);
        break;
      }
    if (!r.length) {
      if (
        (m.push(`cross-not-found ${p.map(ki).join(` / `)} on ${ki(e)}`), !v)
      ) {
        let r = Ao(i, n);
        r.length && (v = { ref: e, iv: t, cn: r });
      }
      continue;
    }
    ((h = e),
      (g = t),
      (_ = r.sort(
        (e, t) => e.road.index - t.road.index || e.node.id - t.node.id,
      )));
    break;
  }
  if (
    (!h &&
      v &&
      ((h = v.ref),
      (g = v.iv),
      (_ = v.cn),
      a.push(
        `cross-fallback-midblock ${m.join(`; `)} — placed from the nearest node on ${ki(h)} instead of dropping the site; add a cross street this map version really has (placement.cross[0] accepts a list of alternatives)`,
      )),
    !h)
  )
    return Bo(e, m, a);
  h !== s.frontage && a.push(`frontage-alt ${ki(h)} (${m.join(`; `)})`);
  let y = To(e, a),
    b = 0,
    x = (n, r = bo) => {
      let o = jo(e, n === `undercroft` ? _[0]?.road : void 0, t.forceMinLot),
        s = {
          meta: e,
          env: t,
          plan: i,
          ref: h,
          intervals: g,
          targets: l,
          placedRects: u,
          reasons: new Map(),
          tried: 0,
          best: null,
          mode: n,
          vcache: new Map(),
          relax: r,
          opts: {
            requireBlock: n === `lot` && !r.offBlock,
            surfaces: Ca(
              n === `undercroft`
                ? [...(co(e).surfaces ?? []), `road`, `crosswalk`]
                : co(e).surfaces,
            ),
          },
        };
      b = 0;
      for (let e = 0; e < o.length && !s.best; e++) {
        b = e;
        let [t, n] = o[e];
        for (let e of _) Mo(s, e, t, n, a);
      }
      return s;
    },
    S = x(y);
  !S.best &&
    y === `undercroft` &&
    !Eo(S) &&
    (a.push(
      `undercroft-fallback ${ki(h)} is not elevated in this map version — placed as a normal kerbside lot (add a placement.alt frontage that IS elevated here if the undercroft reading matters)`,
    ),
    (y = `lot`),
    (S = x(y)));
  let C = ``;
  if (!S.best && y === `lot`) {
    let e = bo;
    for (let t of xo) {
      if (!So(t.relax, e, S.reasons)) continue;
      e = t.relax;
      let n = x(y, t.relax);
      if (((C = C ? `${C}, ${t.id}` : t.id), (S = n), n.best)) {
        (a.push(`${t.id} ${ki(h)} — ${t.why}`), (C = ``));
        break;
      }
    }
  }
  let w = S.best,
    T = Do(S);
  if (!w) {
    let t = y === `lot` ? `` : ` [mode ${y}]`;
    return C
      ? Bo(
          e,
          [
            `no-valid-lot unplaceable ${ki(h)} — nothing fits on this map version even after the relaxation ladder (rungs spent: ${C}); ${S.tried} candidates, rejected ${eo(T)}. MAP: this plan carries no lot on that frontage — make room there, or give the meta an alt frontage ref (placement.alt) that this plan really has.`,
          ],
          Wo(a),
          T,
        )
      : Bo(
          e,
          [`no-valid-lot${t} (${S.tried} tried; rejected ${eo(T)})`],
          Wo(a),
          T,
        );
  }
  return (
    b > 0 &&
      a.push(
        `shrunk ${e.lot.w}×${e.lot.d} → ${w.w}×${w.d} (the full lot did not fit anywhere on the stretch)`,
      ),
    y === `undercroft` &&
      a.push(
        `undercroft lot sits in the ${w.road.median.toFixed(0)} m median under the elevated ${Xi(i, w.road, w.s).full.zh}; entrance faces ${Ni(w.road, w.sideSign)}`,
      ),
    y === `beyond`
      ? a.push(
          `beyond lot sits past the ${Ni(w.road, w.sideSign)} curb of ${Xi(i, w.road, w.s).full.zh}, outside the block grid`,
        )
      : s.side &&
        Ni(w.road, w.sideSign) !== s.side &&
        a.push(
          `side-flipped ${s.side} → ${Ni(w.road, w.sideSign)} (no lot on the ${s.side} side of ${Xi(i, w.road, w.s).full.zh})`,
        ),
    Ri(h) &&
      a.push(
        `lot-edge-frontage ${Xi(i, w.road, w.s).full.zh} (${Ni(w.road, w.sideSign)} edge of ${Ri(h)?.landmarkId})`,
      ),
    w.lane &&
      a.push(
        `lane-frontage ${Xi(i, w.road, w.s).full.zh} (no room on the named street, so the lot fronts its generated 巷)`,
      ),
    w.slide > 0 &&
      !w.lane &&
      a.push(
        `slid ${w.slide} m along ${Xi(i, w.road, w.s).full.zh} (${Ni(w.road, w.sideSign)} side) to find room`,
      ),
    T.total && (w.slide > 0 || b > 0 || w.lane) && a.push(`rejected ${eo(T)}`),
    Io(e, t, w, l, a, T)
  );
}
function To(e, t) {
  let n = co(e).mode;
  return !n || n === `lot`
    ? `lot`
    : n === `undercroft` || n === `beyond`
      ? n
      : (t.push(
          `unknown placement.mode '${String(n)}' — falling back to 'lot'`,
        ),
        `lot`);
}
function Eo(e) {
  let t = 0,
    n = 0;
  for (let [r, i] of e.reasons)
    ((n += i),
      (r.startsWith(`not-elevated:`) || r.startsWith(`no-median-under:`)) &&
        (t += i));
  return n === 0 || t < n;
}
function Do(e) {
  return $a(e.reasons, 3);
}
function Oo(e) {
  let t = [],
    n = e.placement;
  ((!n || !n.frontage || !n.frontage.zh) &&
    t.push(`placement.frontage missing`),
    (!n ||
      !Array.isArray(n.cross) ||
      n.cross.length < 1 ||
      n.cross.length > 2) &&
      t.push(`placement.cross must list 1–2 roads`),
    (!e.lot || !(e.lot.w > 0) || !(e.lot.d > 0)) &&
      t.push(`lot.w/lot.d must be > 0`),
    Array.isArray(e.proxy) &&
      e.proxy.length > 8 &&
      t.push(`proxy has ${e.proxy.length} boxes (max 8)`));
  let r = co(e);
  return (
    r.mode === `beyond` &&
      !n?.side &&
      t.push(
        `placement.mode 'beyond' needs an explicit side (which bank of the frontage the lot is on)`,
      ),
    r.gate &&
      (!r.gate.alongFrom?.zh || !Number.isFinite(r.gate.offset)) &&
      t.push(`placement.gate needs {alongFrom:{zh}, offset:number}`),
    t
  );
}
function ko(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function Ao(e, t) {
  let n = [];
  for (let r of t)
    for (let t of ma(e, r.road))
      t.s < r.s0 - t.half - 1 ||
        t.s > r.s1 + t.half + 1 ||
        n.push({ ...t, road: r.road, crossRoad: r.road });
  return n.sort((e, t) => e.road.index - t.road.index || e.node.id - t.node.id);
}
function jo(e, t, n = !1) {
  let r = t ? qi(t, Sa) : 1 / 0,
    i = e.lot.w,
    a = Math.min(e.lot.d, r),
    o = Math.min(i, e.lot.minW ?? i),
    s = Math.min(a, e.lot.minD ?? a),
    c = [],
    l = n
      ? [[o, s]]
      : [
          [i, a],
          [o, a],
          [i, s],
          [o, s],
        ];
  for (let e of l)
    e[0] > 0 &&
      e[1] > 0 &&
      (c.some((t) => t[0] === e[0] && t[1] === e[1]) || c.push(e));
  return c.length ? c : [[e.lot.w, e.lot.d]];
}
