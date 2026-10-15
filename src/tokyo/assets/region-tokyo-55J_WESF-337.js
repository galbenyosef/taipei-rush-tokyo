// tokyo/assets/region-tokyo-55J_WESF 337 — halfwidth
// Lines 121519-122040 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function aAe(e, t, n, r, i = !1) {
  let a = [],
    o = 24301,
    s = (e) => Math.max(1, Math.round(e * r)),
    c = (e, t, n, r) =>
      e.axis === `z`
        ? { ax: e.at + t, az: n, bx: e.at + t, bz: r }
        : { ax: n, az: e.at + t, bx: r, bz: e.at + t },
    l = (t) => e.roads.find((e) => e.id === t) ?? null,
    u = l(`chuo-ginza`),
    d = (e.dataset.closures ?? []).find((e) => e.road === `chuo-ginza`),
    f = d ? (e.dataset.closures ?? []).indexOf(d) : 0,
    p = d ? $d(e, d) : null;
  if (u) {
    let t = u.halfTotal - u.halfWidth;
    for (let [r, i] of EY(e, u, u.from + 4, u.to - 4)) {
      let e = i - r;
      for (let l of [-1, 1])
        a.push({
          id: `ginza-sw${l}-${Math.round(r)}`,
          kind: `ginza`,
          district: `ginza`,
          ...c(u, l * (u.halfWidth + t * 0.5), r, i),
          halfWidth: t * 0.36,
          count: s(e * 0.5),
          looks: n.sets.ginza,
          mode: `walk`,
          span: [25, 90],
          pause: [0.5, 6],
          seed: o++,
        });
      let l = p ? Math.max(r + 2, p[0] + 4) : 0,
        d = p ? Math.min(i - 2, p[1] - 4) : 0;
      if (p && d - l > 6) {
        for (let t of [-u.halfWidth * 0.6, 0, u.halfWidth * 0.6])
          a.push({
            id: `hokoten-${Math.round(t)}-${Math.round(r)}`,
            kind: `hokoten`,
            closure: f,
            ...c(u, t, l, d),
            halfWidth: u.halfWidth * 0.28,
            count: s(e * 0.85),
            looks: n.sets.ginza,
            mode: `walk`,
            span: [20, 80],
            pause: [1, 10],
            speed: [0.9, 1.35],
            hideR: [12, 22],
            seed: o++,
          });
        a.push({
          id: `hokoten-stand-${Math.round(r)}`,
          kind: `hokoten`,
          closure: f,
          ...c(u, 0, l + 1, d - 1),
          halfWidth: u.halfWidth * 0.8,
          count: s(e * 0.2),
          looks: n.sets.ginza,
          mode: `stand`,
          face: 0,
          faceJitter: Math.PI,
          hideR: [12, 22],
          seed: o++,
        });
      }
    }
  }
  let m = l(`chuo-akihabara`),
    h = (e.dataset.namedPlaces ?? []).find(
      (e) => e.id === `akihabara-denkigai`,
    ),
    g = (e.dataset.closures ?? []).find((e) => e.road === `chuo-akihabara`),
    _ = g ? (e.dataset.closures ?? []).indexOf(g) : -1,
    v = g ? $d(e, g) : null;
  if (m) {
    let t = m.halfTotal - m.halfWidth,
      r = Math.max(m.from + 4, h ? h.minZ - 10 : m.from),
      i = Math.min(m.to - 4, h ? h.maxZ + 40 : m.to);
    if (v && _ >= 0)
      for (let [t, r] of EY(e, m, v[0] + 4, v[1] - 4)) {
        let e = r - t;
        if (!(e < 6)) {
          for (let i of [-m.halfWidth * 0.55, m.halfWidth * 0.55])
            a.push({
              id: `akiba-hokoten-${Math.round(i)}-${Math.round(t)}`,
              kind: `hokoten`,
              closure: _,
              ...c(m, i, t + 2, r - 2),
              halfWidth: m.halfWidth * 0.32,
              count: s(e * 0.7),
              looks: n.sets.akiba,
              mode: `walk`,
              span: [20, 70],
              pause: [1, 10],
              speed: [0.9, 1.3],
              hideR: [12, 22],
              seed: o++,
            });
          a.push({
            id: `akiba-hokoten-stand-${Math.round(t)}`,
            kind: `hokoten`,
            closure: _,
            ...c(m, 0, t + 3, r - 3),
            halfWidth: m.halfWidth * 0.8,
            count: s(e * 0.18),
            looks: n.sets.akiba,
            mode: `stand`,
            face: 0,
            faceJitter: Math.PI,
            hideR: [12, 22],
            seed: o++,
          });
        }
      }
    for (let [l, u] of EY(e, m, r, i)) {
      let e = u - l;
      for (let r of [-1, 1])
        (a.push({
          id: `akiba-sw${r}-${Math.round(l)}`,
          kind: `akiba`,
          district: `akihabara`,
          ...c(m, r * (m.halfWidth + t * 0.5), l, u),
          halfWidth: t * 0.34,
          count: s(e * 0.6),
          looks: n.sets.akiba,
          mode: `walk`,
          span: [20, 80],
          pause: [0.5, 8],
          seed: o++,
        }),
          e > 25 &&
            a.push({
              id: `akiba-tout${r}-${Math.round(l)}`,
              kind: `akiba`,
              ...c(m, r * (m.halfWidth + 0.7), l + 4, u - 4),
              halfWidth: 0.1,
              count: s(Math.max(1, e / 22)),
              looks: n.sets.maid,
              mode: `stand`,
              face:
                m.axis === `z`
                  ? r > 0
                    ? Math.PI / 2
                    : -Math.PI / 2
                  : r > 0
                    ? Math.PI
                    : 0,
              faceJitter: 0.7,
              seed: o++,
            }));
    }
  }
  let y = l(`ameyoko`);
  if (y && t.market) {
    let e = t.market;
    a.push({
      id: `ameyoko-lane`,
      kind: `ameyoko`,
      ...c(y, 0, e.z - e.hz, e.z + e.hz),
      halfWidth: y.halfWidth * 0.62,
      count: s(e.hz * 2 * 0.95),
      looks: n.sets.ameyoko,
      mode: `walk`,
      span: [15, 70],
      pause: [1, 12],
      speed: [0.85, 1.25],
      hideR: [7, 14],
      seed: o++,
    });
    for (let e of t.stallRuns) {
      let t = Math.atan2(e.fx, -e.fz);
      (a.push({
        id: `vendor-${Math.round(e.z0)}-${e.fx}`,
        kind: `ameyoko`,
        ax: e.x0 + e.fx * 0.1,
        az: e.z0 + 0.6,
        bx: e.x1 + e.fx * 0.1,
        bz: e.z1 - 0.6,
        halfWidth: 0.05,
        count: Math.max(1, Math.ceil(e.units / 2)),
        looks: n.sets.vendor,
        mode: `stand`,
        face: t,
        faceJitter: 0.7,
        hideR: [12, 16],
        seed: o++,
      }),
        a.push({
          id: `browse-${Math.round(e.z0)}-${e.fx}`,
          kind: `ameyoko`,
          ax: e.x0 + e.fx * 0.75,
          az: e.z0 + 0.3,
          bx: e.x1 + e.fx * 0.75,
          bz: e.z1 - 0.3,
          halfWidth: 0.2,
          count: s(e.units * 0.9),
          looks: n.sets.ameyoko,
          mode: `stand`,
          face: t + Math.PI,
          faceJitter: 0.5,
          hideR: [3, 6],
          seed: o++,
        }));
    }
  }
  for (let e of t.fairs) {
    let t = Math.hypot(e.bx - e.ax, e.bz - e.az);
    if (e.kind === `oden`) {
      a.push({
        id: `fair-oden`,
        kind: `fair-oden`,
        ax: e.ax,
        az: e.az,
        bx: e.bx,
        bz: e.bz,
        halfWidth: e.hw,
        count: 3,
        looks: n.sets.office,
        mode: `stand`,
        face: Math.atan2(-1, 0),
        faceJitter: 0.3,
        y: e.y,
        hideR: [2.5, 3.5],
        seed: o++,
      });
      continue;
    }
    let r =
      e.kind === `shrine`
        ? [...n.sets.festival, ...n.sets.ameyoko]
        : [
            ...n.sets.ginza.map(([e, t]) => [e, t * 0.6]),
            ...n.sets.ameyoko,
            ...n.sets.festival.map(([e, t]) => [e, t * 0.3]),
          ];
    a.push({
      id: `fair-${e.kind}`,
      kind: e.kind === `shrine` ? `fair-shrine` : `fair-sakura`,
      ax: e.ax,
      az: e.az,
      bx: e.bx,
      bz: e.bz,
      halfWidth: e.hw,
      count: s(t * 0.9),
      looks: r,
      mode: `walk`,
      span: [10, 50],
      pause: [2, 14],
      speed: [0.7, 1.1],
      y: e.y,
      hideR: [20, 34],
      seed: o++,
    });
  }
  let b = Ox(e);
  for (let [e, t] of b.lanes.entries()) {
    let r = Math.hypot(t.bx - t.ax, t.bz - t.az);
    (a.push({
      id: `park-${e}`,
      kind: `park`,
      ax: t.ax,
      az: t.az,
      bx: t.bx,
      bz: t.bz,
      halfWidth: t.hw * 0.8,
      count: s(r * t.w * 0.5),
      looks: n.sets.park,
      mode: `walk`,
      span: t.kind === `plaza` ? [10, 40] : [25, 90],
      pause: t.kind === `plaza` ? [3, 20] : [1, 10],
      speed: [0.8, 1.25],
      y: t.y,
      hideR: [12, 20],
      farR: 180,
      seed: o++,
    }),
      t.kind === `walk` &&
        t.w >= 0.55 &&
        a.push({
          id: `park-jog-${e}`,
          kind: `park`,
          ax: t.ax,
          az: t.az,
          bx: t.bx,
          bz: t.bz,
          halfWidth: t.hw * 0.5,
          count: s(r * 0.025),
          looks: n.sets.jogger,
          mode: `walk`,
          span: [60, 160],
          pause: [0.2, 1],
          speed: [2.4, 3],
          y: t.y,
          hideR: [12, 20],
          farR: 180,
          seed: o++,
        }));
  }
  if (b.lanes.length) {
    let e = b.top;
    (a.push({
      id: `park-fountain`,
      kind: `park`,
      ax: Cx.x - 7,
      az: Cx.z + Cx.r + 1.6,
      bx: Cx.x + 7,
      bz: Cx.z + Cx.r + 1.6,
      halfWidth: 1.2,
      count: s(12),
      looks: n.sets.park,
      mode: `stand`,
      face: 0,
      faceJitter: 0.9,
      y: e,
      hideR: [10, 16],
      farR: 140,
      seed: o++,
    }),
      a.push({
        id: `park-saigo`,
        kind: `park`,
        ax: -177,
        az: -1213.4,
        bx: -159,
        bz: -1213.4,
        halfWidth: 0.9,
        count: s(9),
        looks: n.sets.park,
        mode: `stand`,
        face: 0,
        faceJitter: 0.6,
        y: e,
        hideR: [10, 16],
        farR: 140,
        seed: o++,
      }));
  }
  for (let r of t.platformLines)
    a.push({
      id: `pf-${r.pf}-${Math.round(r.ax)}-${Math.round(r.az)}`,
      kind: `platform`,
      district: e.districtAt((r.ax + r.bx) / 2, (r.az + r.bz) / 2).id,
      ax: r.ax,
      az: r.az,
      bx: r.bx,
      bz: r.bz,
      halfWidth: 0.3,
      count: s(r.at.length * r.depth),
      looks: n.sets.commute,
      mode: `stand`,
      face: r.face,
      faceJitter: 0.3,
      lines: { at: r.at, gap: 0.62, side: r.side },
      y: r.y,
      hideR: [3, 5],
      farR: 120,
      seed: o++,
    });
  for (let r of t.stationFronts) {
    if (r.wait) {
      let t = Math.hypot(r.wait.bx - r.wait.ax, r.wait.bz - r.wait.az);
      a.push({
        id: `st-wait-${r.id}`,
        kind: `station`,
        district: e.districtAt(r.wait.ax, r.wait.az).id,
        ...r.wait,
        halfWidth: r.wait.hw,
        count: s(Math.max(4, t * (1 + r.wait.hw * 0.5))),
        looks: n.sets.commute,
        mode: `stand`,
        faceJitter: Math.PI,
        y: r.y,
        hideR: [10, 18],
        farR: 170,
        seed: o++,
      });
    }
    if (r.walk) {
      let t = Math.hypot(r.walk.bx - r.walk.ax, r.walk.bz - r.walk.az);
      a.push({
        id: `st-walk-${r.id}`,
        kind: `station`,
        district: e.districtAt(r.walk.ax, r.walk.az).id,
        ...r.walk,
        halfWidth: r.walk.hw,
        count: s(Math.max(4, t * 0.8)),
        looks: n.sets.commute,
        mode: `walk`,
        span: [6, 30],
        pause: [0.3, 3],
        speed: [1.15, 1.5],
        y: r.y,
        hideR: [10, 18],
        farR: 170,
        seed: o++,
      });
    }
  }
  for (let t of [`gyoko`, `marunouchi-naka`, `otemachi-naka`, `yaesu-naka`]) {
    let r = l(t);
    if (!r) continue;
    let i = r.halfTotal - r.halfWidth;
    if (!(i < 2))
      for (let [l, u] of EY(e, r, r.from + 4, r.to - 4)) {
        let d = u - l;
        if (d < 12) continue;
        let f = r.axis === `x` ? (l + u) / 2 : r.at,
          p = r.axis === `x` ? r.at : (l + u) / 2;
        for (let m of [-1, 1])
          a.push({
            id: `commute-${t}${m}-${Math.round(l)}`,
            kind: `station`,
            district: e.districtAt(f, p).id,
            ...c(r, m * (r.halfWidth + i * 0.5), l, u),
            halfWidth: i * 0.3,
            count: s(d * 0.3),
            looks: n.sets.commute,
            mode: `walk`,
            span: [30, 120],
            pause: [0.2, 1.5],
            speed: [1.25, 1.6],
            seed: o++,
          });
      }
  }
  for (let t of (e.dataset.namedPlaces ?? []).filter((e) =>
    /-gado$/.test(e.id),
  ))
    for (let r of e.roads) {
      if (r.kind !== `lane` && r.kind !== `street`) continue;
      let i = Math.max(r.from, r.axis === `x` ? t.minX : t.minZ) + 3,
        l = Math.min(r.to, r.axis === `x` ? t.maxX : t.maxZ) - 3;
      if (l - i < 20) continue;
      let u = (i + l) / 2,
        d = r.axis === `x` ? u : r.at,
        f = r.axis === `x` ? r.at : u;
      if (!(
        d < t.minX - 8 ||
        d > t.maxX + 30 ||
        f < t.minZ - 8 ||
        f > t.maxZ + 8
      ))
        for (let [u, p] of EY(e, r, i, l))
          a.push({
            id: `gado-${t.id}-${r.id}-${Math.round(u)}`,
            kind: `gado`,
            district: e.districtAt(d, f).id,
            ...c(r, 0, u, p),
            halfWidth: r.halfTotal * 0.55,
            count: s((p - u) * 0.55),
            looks: [
              ...n.sets.office,
              ...n.sets.ameyoko.map(([e, t]) => [e, t * 0.35]),
            ],
            mode: `walk`,
            span: [10, 45],
            pause: [1, 8],
            speed: [0.9, 1.3],
            hideR: [14, 24],
            farR: 160,
            seed: o++,
          });
    }
  let x = t.route;
  for (let t = 0; t < x.length; t++) {
    let r = x[t],
      i = x[(t + 1) % x.length],
      c = e.roadAt((r.x + i.x) / 2, (r.z + i.z) / 2);
    if (!c) continue;
    let l = Math.hypot(i.x - r.x, i.z - r.z);
    if (l < 20) continue;
    let u = (i.x - r.x) / l,
      d = (i.z - r.z) / l;
    for (let e of [-1, 1]) {
      let f = e * (c.halfWidth + (c.halfTotal - c.halfWidth) * 0.4),
        p = Math.atan2(-d * -e, -(u * -e));
      a.push({
        id: `matsuri-${t}-${e}`,
        kind: `matsuri`,
        ax: r.x - d * f + u * 8,
        az: r.z + u * f + d * 8,
        bx: i.x - d * f - u * 8,
        bz: i.z + u * f - d * 8,
        halfWidth: 0.6,
        count: s(l * 0.35),
        looks: [
          ...n.sets.festival,
          ...n.sets.ameyoko.map(([e, t]) => [e, t * 0.4]),
        ],
        mode: `stand`,
        face: p,
        faceJitter: 0.4,
        seed: o++,
      });
    }
  }
  if (i)
    for (let e of a)
      e.kind === `hokoten` || e.kind === `station`
        ? ((e.hideR = [6, 12]),
          (e.count = Math.max(1, Math.round(e.count * 1.3))))
        : e.id === `ameyoko-lane` && (e.hideR = [5, 10]);
  let S = new Set([`ginza`, `akiba`, `hokoten`, `station`, `park`, `gado`]);
  if (n.sets.rainBiz?.length)
    for (let e of a) {
      let t = e.kind === `ameyoko` && e.id === `ameyoko-lane`;
      if (
        (!S.has(e.kind) && !t) ||
        e.id.startsWith(`akiba-tout`) ||
        e.id.startsWith(`park-jog`)
      )
        continue;
      let r =
        e.kind === `station` || e.kind === `gado`
          ? n.sets.rainBiz
          : e.kind === `ginza` || e.kind === `hokoten`
            ? n.sets.rainShop
            : n.sets.rainTown;
      r?.length && (e.rainLooks = r);
    }
  return a;
}
