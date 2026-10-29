// tokyo/assets/region-tokyo-55J_WESF 378 — math
// Lines 136977-137188 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function U$(
  e = [
    { body: 14100014 },
    { body: 2056127 },
    { body: 15856110 },
    { body: 2501168 },
  ],
  t = !1,
) {
  let n = [
    y$(`signalPole`, (e) => {
      (b$(e, m$.poleH, 0.13),
        e.setMaterial(0.6, 0.2, 0, 0),
        um(e, 15122970),
        fm(e, 0, 1.15, 0.15, 0.08, 0.13, 0.05));
    }),
    y$(`pedPole`, (e) => {
      (b$(e, m$.pedPoleH, 0.085),
        um(e, 15122970),
        fm(e, 0, 1.15, 0.1, 0.08, 0.13, 0.05));
    }),
    y$(`arm`, (e) => H$(e, 0.085)),
    y$(`armThin`, (e) => H$(e, 0.05)),
    y$(`vehHead`, gNe),
    y$(`arrowBox`, _Ne),
    y$(`pedHead`, (e) => x$(e, !1)),
    y$(`pedHeadBar`, (e) => x$(e, !0)),
    y$(`controller`, vNe),
    y$(`upole`, (e) => w$(e, !1), 4096),
    y$(`upoleT`, (e) => w$(e, !0), 4096),
    y$(`streetLight`, yNe),
    y$(`lantern`, bNe),
    y$(`vend0`, (t) => E$(t, 0, e[0].body)),
    y$(`vend1`, (t) => E$(t, 1, e[1].body)),
    y$(`vend2`, (t) => E$(t, 2, e[2].body)),
    y$(`vend3`, (t) => E$(t, 3, e[3].body)),
    y$(`recycle`, xNe),
    y$(`rail`, (e) => D$(e, !1)),
    y$(`railDark`, (e) => D$(e, !0)),
    y$(`railPost`, (e) => O$(e, !1)),
    y$(`railPostDark`, (e) => O$(e, !0)),
    y$(`bollard`, SNe),
    y$(`bikeRack`, DNe),
    y$(`busPole`, ONe),
    y$(`busShelter`, kNe),
    y$(`signPost`, (e) => B$(e, 2.9)),
    y$(`signPostShort`, (e) => B$(e, 2.2)),
    y$(`tomare`, (e) => V$(e, `tri`, FZ(`tomare`), 0.45)),
    y$(`noParking`, (e) => V$(e, `round`, FZ(`noParking`), 0.3)),
    y$(`noStopping`, (e) => V$(e, `round`, FZ(`noStopping`), 0.3)),
    y$(`speed30`, (e) => V$(e, `round`, FZ(`speed30`), 0.3)),
    y$(`speed40`, (e) => V$(e, `round`, FZ(`speed40`), 0.3)),
    y$(`speed50`, (e) => V$(e, `round`, FZ(`speed50`), 0.3)),
    y$(`noEntry`, (e) => V$(e, `round`, FZ(`noEntry`), 0.3)),
    y$(`crossing`, (e) => V$(e, `square`, FZ(`crossing`), 0.3)),
    y$(`oneWay`, (e) => V$(e, `rect`, FZ(`oneWay`), 0.3, 0.4, 0.2)),
    y$(`noBikes`, (e) => V$(e, `rect`, FZ(`noBikes`), 0.3, 0.3, 0.11)),
    y$(`hydrant`, (e) => V$(e, `rect`, FZ(`hydrant`), 0.2, 0.2, 0.2)),
    y$(`parkTimes`, (e) => V$(e, `rect`, FZ(`parkTimes`), 0.2, 0.24, 0.1)),
    y$(`guidePost`, ANe),
  ];
  for (let e = 0; e < 5; e++)
    n.push(
      y$(`poleAd${e}`, (t) => {
        let n = FZ(`ad${e}`);
        (t.setMaterial(0.6, 0, 0.02, 0),
          t.setColor(255, 255, 255),
          _m(t, 0, 0, 0.215, 0, 1, 0.33, 1.5, n),
          _m(t, 0, 0, -0.215, 0, -1, 0.33, 1.5, n));
      }),
    );
  for (let e of [2780597, 12105912, 9051940, 2039583, 15262416, 3111494])
    (n.push(y$(`bike${e.toString(16)}`, (t) => z$(t, e, !0))),
      n.push(y$(`bike${e.toString(16)}-far`, (t) => z$(t, e, !1))));
  for (let e of [`ginkgo`, `zelkova`, `sakura`])
    for (let t of [`green`, `autumn`, `bloom`, `bare`])
      if (e !== `ginkgo` || t !== `bloom`)
        for (let r = 0; r < (t === `bare` ? 1 : F$.length); r++) {
          let i = I$(e, t, r),
            a = F$[r];
          (n.push(y$(i, (n) => L$(n, e, t, !0, a), 1024)),
            n.push(y$(`${i}-far`, (n) => L$(n, e, t, !1, a), 1024)));
        }
  return (
    t &&
      n.push(
        y$(`upole-far`, (e) => T$(e, !1)),
        y$(`upoleT-far`, (e) => T$(e, !0)),
      ),
    n
  );
}
var W$ = [2780597, 12105912, 9051940, 2039583, 15262416, 3111494].map(
  (e) => `bike${e.toString(16)}`,
);
function jNe() {
  let e = 0.032;
  return [
    y$(`litG`, (t) => S$(t, m$.lampX[0], 0, e, 0.15, FZ(`lensG`))),
    y$(`litY`, (t) => S$(t, m$.lampX[1], 0, e, 0.15, FZ(`lensY`))),
    y$(`litR`, (t) => S$(t, m$.lampX[2], 0, e, 0.15, FZ(`lensR`))),
    y$(`litArrow`, (e) => C$(e, 0, 0, 0.024, 0.15, 0.13, FZ(`arrowR`))),
    y$(`litPedRed`, (e) =>
      C$(e, 0, m$.pedRedY, 0.024, 0.16, 0.16, FZ(`pedRed`)),
    ),
    y$(`litPedGreen`, (e) =>
      C$(e, 0, m$.pedGreenY, 0.024, 0.16, 0.16, FZ(`pedGreen`)),
    ),
    ...[0, 1, 2, 3].map((e) =>
      y$(`litWait${e}`, (t) =>
        C$(t, 0.3, -0.3 + e * 0.2, 0.008, 0.04, 0.08, FZ(`waitBar`), 0.3),
      ),
    ),
  ];
}
var MNe = 3;
function NNe(e, t, n) {
  let r = performance.now(),
    i = e.bounds,
    a = i.minX - 40,
    o = i.minZ - 40,
    s = i.maxX + 120,
    l = i.maxZ + 40;
  n >= 3 && (n = Math.max(n, Math.sqrt(((s - a) * (l - o)) / 7e5)));
  let u = Math.ceil((s - a) / n),
    d = Math.ceil((l - o) / n),
    f = [];
  for (let n of e.roads) {
    if (n.pedestrian) continue;
    let e = t.nodesOf(n);
    for (let r = 0; r + 1 < e.length; r++)
      for (let i of [-1, 1]) {
        let a = t.primaryLights(n, e[r], e[r + 1], i);
        if (!a) continue;
        let o = a.kind === `tall`,
          s = o ? n.halfWidth - 1.6 : n.halfWidth + 0.55,
          c = o ? 14 : 8,
          l = o ? 10 : 7,
          [u, d, p] = o ? [0.52, 0.5, 0.44] : [0.5, 0.42, 0.3];
        for (let e of a.ts) {
          let t = n.axis === `x` ? e : n.at + i * s,
            r = n.axis === `x` ? n.at + i * s : e;
          f.push({
            x: t,
            z: r,
            ax: n.axis === `x` ? c : l,
            az: n.axis === `x` ? l : c,
            r: u,
            g: d,
            b: p,
            deck: !1,
          });
        }
      }
  }
  for (let e of t.deckLamps)
    f.push({
      x: e.x,
      z: e.z,
      ax: 16,
      az: 16,
      r: 0.6,
      g: 0.6,
      b: 0.6,
      deck: !0,
    });
  let p = new Uint8Array(u * d * 4),
    m = new Float32Array(u * 32 * 4);
  for (let e = 0; e < d; e += 32) {
    m.fill(0);
    let t = Math.min(d, e + 32),
      r = o + e * n,
      i = o + t * n;
    for (let s of f) {
      if (s.z + s.az < r || s.z - s.az > i) continue;
      let c = Math.max(0, Math.floor((s.x - s.ax - a) / n)),
        l = Math.min(u - 1, Math.ceil((s.x + s.ax - a) / n)),
        d = Math.max(e, Math.floor((s.z - s.az - o) / n)),
        f = Math.min(t - 1, Math.ceil((s.z + s.az - o) / n));
      for (let t = d; t <= f; t++) {
        let r = (o + (t + 0.5) * n - s.z) / s.az;
        for (let i = c; i <= l; i++) {
          let o = (a + (i + 0.5) * n - s.x) / s.ax,
            c = o * o + r * r;
          if (c >= 1) continue;
          let l = (1 - c) * (1 - c),
            d = ((t - e) * u + i) * 4;
          s.deck
            ? (m[d + 3] += l * s.r)
            : ((m[d] += l * s.r), (m[d + 1] += l * s.g), (m[d + 2] += l * s.b));
        }
      }
    }
    for (let n = 0, r = (t - e) * u * 4; n < r; n++)
      p[e * u * 4 + n] = Math.min(255, Math.round((m[n] / MNe) * 255));
  }
  let h = new w(p, u, d, v, c);
  return (
    (h.minFilter = E),
    (h.magFilter = E),
    (h.generateMipmaps = !1),
    (h.wrapS = h.wrapT = g),
    (h.name = `tokyo-street-lightmap`),
    (h.needsUpdate = !0),
    ke(h),
    {
      texture: h,
      xf: new S(a, o, 1 / (u * n), 1 / (d * n)),
      ms: performance.now() - r,
    }
  );
}
