// tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn 16 — peds
// Lines 4591-4838 of readable/tokyo__assets__region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function dn(e, t) {
  cn = [];
  let n = (e, t, n, r) =>
    cn.push({ x: e, z: t, on: !1, release: null, want: n, spawn: r });
  for (let [e, t] of [
    [385, 420],
    [385, 520],
    [g.monzeki.x0 + 1.5, 430],
    [g.higashi.x0 + 1.5, 420],
    [400, 488],
  ])
    n(
      e,
      t,
      (e, t) => t.mkt,
      (n) =>
        un(
          n,
          e,
          t,
          9,
          8,
          [`tourist`, `tourist`, `auntie`, `vendor`, `elder`, `office`],
          { mode: `mill` },
        ),
    );
  let r = t.flatMap((e) => e.units).find((e) => e.special === `horumon`);
  if (r) {
    let e = (r.z0 + r.z1) / 2,
      t = r.x1 + 2;
    n(
      t,
      e + 5,
      (e, t) => t.mkt && e >= 6.5 && e < 13.5,
      (n) =>
        un(n, t, e + 5, 1.2, 7, [`office`, `tourist`, `uncle`, `vendor`], {
          mode: `queue`,
          lookX: r.x1 + 0.9,
          lookZ: e,
        }),
    );
  }
  n(
    g.sushi.x - 2,
    g.sushi.z - 2.2,
    () => !0,
    (e) =>
      un(
        e,
        g.sushi.x - 3,
        g.sushi.z - 2.4,
        1,
        4,
        [`tourist`, `tourist`, `office`],
        { mode: `queue`, lookX: g.sushi.x - 2, lookZ: g.sushi.z + 0.4 },
      ),
  );
  let i = kt(e);
  for (let e = 0; e < i.length; e += 2) {
    let t = i[e];
    n(
      t.x,
      t.z,
      (e, t) => t.gado && (e >= 17.5 || e < 0.5),
      (e) =>
        un(e, t.x, t.z, 0.9, 3, [`office`, `office`, `uncle`], {
          mode: `watch`,
          lookX: t.x - t.fx * 2,
          lookZ: t.z - t.fz * 2,
          poses: [`chat`, `idle`, `phone`],
        }),
    );
  }
  (n(
    k.x1 + 1.2,
    (k.z0 + k.z1) / 2,
    (e, t) => t.kosho,
    (e) =>
      un(
        e,
        k.x1 + 1.3,
        (k.z0 + k.z1) / 2,
        2.5,
        7,
        [`elder`, `office`, `uncle`, `student`],
        {
          mode: `watch`,
          lookX: k.x0,
          lookZ: (k.z0 + k.z1) / 2,
          poses: [`idle`, `look_up`],
        },
      ),
  ),
    n(
      A.subject.x,
      A.subject.z,
      (e, t) => t.crew,
      (e) => fn(e),
    ));
}
function fn(e) {
  let t = e.peds.spawnScripted;
  if (!t) return null;
  let n = (e, t, n, r) => Math.atan2(n - e, -(r - t)),
    r = A.subject,
    i = A.reporter,
    a = A.camera,
    o = [];
  try {
    (o.push(
      t.call(e.peds, r.x, r.z, {
        kind: `office`,
        pose: `chat`,
        heading: n(r.x, r.z, i.x, i.z),
      }),
    ),
      o.push(
        t.call(e.peds, i.x, i.z, {
          kind: `office`,
          pose: `chat`,
          heading: n(i.x, i.z, r.x, r.z),
        }),
      ),
      o.push(
        t.call(e.peds, a.x - 0.55, a.z + 0.35, {
          kind: `delivery`,
          pose: `film`,
          heading: n(a.x, a.z, r.x, r.z),
        }),
      ),
      o.push(
        t.call(e.peds, r.x + 1.3, r.z - 0.6, {
          kind: `office`,
          pose: `idle`,
          heading: n(r.x + 1.3, r.z - 0.6, a.x, a.z),
        }),
      ),
      o.push(
        t.call(e.peds, r.x + 1.9, r.z + 0.5, {
          kind: `office`,
          pose: `phone`,
          heading: n(r.x + 1.9, r.z + 0.5, a.x, a.z),
        }),
      ));
  } catch {}
  return () => {
    for (let e of o)
      try {
        e?.release();
      } catch {}
  };
}
function pn(e) {
  ((an = -1), (on = -1));
}
function mn(e, n) {
  let r = $;
  if (!r) return;
  let i = n.camera.position;
  r.batch.regather(i.x, i.z, 1, 8);
  let a = n.time.elapsed;
  if (a - an < 1) return;
  an = a;
  let o = n.env?.hour ?? 12,
    s = ee(n);
  s.tick();
  let c = s.shop(`seafood-don`, `shimbashi`),
    l = s.shop(`yakitori`, `shimbashi`),
    d = {
      mkt: c === re.OPEN || c === re.PREP,
      gado: l === re.OPEN,
      crew: !s.state.day.off && o >= A.hours[0] && o < A.hours[1],
      kosho:
        o >= k.hours[0] &&
        o < k.hours[1] &&
        k.runs.some(
          ([e, t, n]) =>
            s.state.day.m === e && s.state.day.d >= t && s.state.day.d <= n,
        ),
    },
    f = [
      [`mktOpen`, d.mkt],
      [`mktClosed`, !d.mkt],
      [`gadoOpen`, d.gado],
      [`gadoClosed`, !d.gado],
      [`crew`, d.crew],
      [`kosho`, d.kosho],
    ];
  for (let [e, t] of f)
    if (r.state.get(e) !== t) {
      r.state.set(e, t);
      for (let n of r.groups.get(e) ?? []) r.batch.setOn(n, t);
    }
  let p = n.player.position;
  for (let e of cn) {
    let t = Math.hypot(p.x - e.x, p.z - e.z) < 130 && e.want(o, d);
    if (t && !e.on) ((e.release = e.spawn(n)), (e.on = !0));
    else if (!t && e.on) {
      try {
        e.release?.();
      } catch {}
      ((e.release = null), (e.on = !1));
    }
  }
  if (!d.mkt && (o >= 19.5 || o < 5) && Math.hypot(p.x - 385, p.z - 470) < 220)
    try {
      (n.peds.thin?.(385, 432, 34, 3), n.peds.thin?.(385, 520, 26, 3));
    } catch {}
  let m = Math.floor(o);
  if (
    on >= 0 &&
    m !== on &&
    (m === 12 || m === 15 || m === 18) &&
    Math.hypot(p.x - u.x, p.z - u.z) < 160
  ) {
    let e = b(`shim.sl.whistle`);
    n.events.emit(`subtitle`, {
      text: {
        zh: t.on
          ? t.t(`（SL汽笛）${e.zh ?? ``}`, `（SLの汽笛）${t.jz(e.zh ?? ``)}`)
          : `（SL汽笛）${e.zh ?? ``}`,
        en: `(SL whistle) ${e.en ?? ``}`,
      },
      duration: 3,
    });
  }
  on = m;
}
function hn(e) {
  rn = !0;
  for (let e of cn)
    try {
      e.release?.();
    } catch {}
  cn = [];
  let t = $;
  (($ = null),
    (an = -1),
    (on = -1),
    t &&
      (t.batch.mesh.parent?.remove(t.batch.mesh),
      t.batch.mesh.dispose(),
      t.batch.mesh.material.dispose(),
      t.tex.dispose()));
}
function gn() {
  return !1;
}
