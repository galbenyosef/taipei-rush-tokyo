// tokyo/assets/region-tokyo-BcM3fReU 210 — math
// Lines 86524-86734 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function yJ(
  e = [
    { body: 14100014 },
    { body: 2056127 },
    { body: 15856110 },
    { body: 2501168 },
  ],
  t = !1,
) {
  let n = [
    Pq(`signalPole`, (e) => {
      (Fq(e, kq.poleH, 0.13),
        e.setMaterial(0.6, 0.2, 0, 0),
        K(e, 15122970),
        Xg(e, 0, 1.15, 0.15, 0.08, 0.13, 0.05));
    }),
    Pq(`pedPole`, (e) => {
      (Fq(e, kq.pedPoleH, 0.085),
        K(e, 15122970),
        Xg(e, 0, 1.15, 0.1, 0.08, 0.13, 0.05));
    }),
    Pq(`arm`, (e) => vJ(e, 0.085)),
    Pq(`armThin`, (e) => vJ(e, 0.05)),
    Pq(`vehHead`, Iq),
    Pq(`arrowBox`, Lq),
    Pq(`pedHead`, (e) => Rq(e, !1)),
    Pq(`pedHeadBar`, (e) => Rq(e, !0)),
    Pq(`controller`, Vq),
    Pq(`upole`, (e) => Hq(e, !1), 4096),
    Pq(`upoleT`, (e) => Hq(e, !0), 4096),
    Pq(`streetLight`, Wq),
    Pq(`lantern`, Gq),
    Pq(`vend0`, (t) => Kq(t, 0, e[0].body)),
    Pq(`vend1`, (t) => Kq(t, 1, e[1].body)),
    Pq(`vend2`, (t) => Kq(t, 2, e[2].body)),
    Pq(`vend3`, (t) => Kq(t, 3, e[3].body)),
    Pq(`recycle`, qq),
    Pq(`rail`, (e) => Jq(e, !1)),
    Pq(`railDark`, (e) => Jq(e, !0)),
    Pq(`railPost`, (e) => Yq(e, !1)),
    Pq(`railPostDark`, (e) => Yq(e, !0)),
    Pq(`bollard`, Xq),
    Pq(`bikeRack`, fJ),
    Pq(`busPole`, pJ),
    Pq(`busShelter`, mJ),
    Pq(`signPost`, (e) => hJ(e, 2.9)),
    Pq(`signPostShort`, (e) => hJ(e, 2.2)),
    Pq(`tomare`, (e) => gJ(e, `tri`, zG(`tomare`), 0.45)),
    Pq(`noParking`, (e) => gJ(e, `round`, zG(`noParking`), 0.3)),
    Pq(`noStopping`, (e) => gJ(e, `round`, zG(`noStopping`), 0.3)),
    Pq(`speed30`, (e) => gJ(e, `round`, zG(`speed30`), 0.3)),
    Pq(`speed40`, (e) => gJ(e, `round`, zG(`speed40`), 0.3)),
    Pq(`speed50`, (e) => gJ(e, `round`, zG(`speed50`), 0.3)),
    Pq(`noEntry`, (e) => gJ(e, `round`, zG(`noEntry`), 0.3)),
    Pq(`crossing`, (e) => gJ(e, `square`, zG(`crossing`), 0.3)),
    Pq(`oneWay`, (e) => gJ(e, `rect`, zG(`oneWay`), 0.3, 0.4, 0.2)),
    Pq(`noBikes`, (e) => gJ(e, `rect`, zG(`noBikes`), 0.3, 0.3, 0.11)),
    Pq(`hydrant`, (e) => gJ(e, `rect`, zG(`hydrant`), 0.2, 0.2, 0.2)),
    Pq(`parkTimes`, (e) => gJ(e, `rect`, zG(`parkTimes`), 0.2, 0.24, 0.1)),
    Pq(`guidePost`, _J),
  ];
  for (let e = 0; e < 5; e++)
    n.push(
      Pq(`poleAd${e}`, (t) => {
        let n = zG(`ad${e}`);
        (t.setMaterial(0.6, 0, 0.02, 0),
          t.setColor(255, 255, 255),
          t_(t, 0, 0, 0.215, 0, 1, 0.33, 1.5, n),
          t_(t, 0, 0, -0.215, 0, -1, 0.33, 1.5, n));
      }),
    );
  for (let e of [2780597, 12105912, 9051940, 2039583, 15262416, 3111494])
    (n.push(Pq(`bike${e.toString(16)}`, (t) => dJ(t, e, !0))),
      n.push(Pq(`bike${e.toString(16)}-far`, (t) => dJ(t, e, !1))));
  for (let e of [`ginkgo`, `zelkova`, `sakura`])
    for (let t of [`green`, `autumn`, `bloom`, `bare`])
      if (e !== `ginkgo` || t !== `bloom`)
        for (let r = 0; r < (t === `bare` ? 1 : sJ.length); r++) {
          let i = cJ(e, t, r),
            a = sJ[r];
          (n.push(Pq(i, (n) => lJ(n, e, t, !0, a), 1024)),
            n.push(Pq(`${i}-far`, (n) => lJ(n, e, t, !1, a), 1024)));
        }
  return (
    t &&
      n.push(
        Pq(`upole-far`, (e) => Uq(e, !1)),
        Pq(`upoleT-far`, (e) => Uq(e, !0)),
      ),
    n
  );
}
var bJ = [2780597, 12105912, 9051940, 2039583, 15262416, 3111494].map(
  (e) => `bike${e.toString(16)}`,
);
function xJ() {
  let e = 0.032;
  return [
    Pq(`litG`, (t) => zq(t, kq.lampX[0], 0, e, 0.15, zG(`lensG`))),
    Pq(`litY`, (t) => zq(t, kq.lampX[1], 0, e, 0.15, zG(`lensY`))),
    Pq(`litR`, (t) => zq(t, kq.lampX[2], 0, e, 0.15, zG(`lensR`))),
    Pq(`litArrow`, (e) => Bq(e, 0, 0, 0.024, 0.15, 0.13, zG(`arrowR`))),
    Pq(`litPedRed`, (e) =>
      Bq(e, 0, kq.pedRedY, 0.024, 0.16, 0.16, zG(`pedRed`)),
    ),
    Pq(`litPedGreen`, (e) =>
      Bq(e, 0, kq.pedGreenY, 0.024, 0.16, 0.16, zG(`pedGreen`)),
    ),
    ...[0, 1, 2, 3].map((e) =>
      Pq(`litWait${e}`, (t) =>
        Bq(t, 0.3, -0.3 + e * 0.2, 0.008, 0.04, 0.08, zG(`waitBar`), 0.3),
      ),
    ),
  ];
}
var SJ = 3;
function CJ(e, t, n) {
  let r = performance.now(),
    a = e.bounds,
    o = a.minX - 40,
    c = a.minZ - 40,
    l = a.maxX + 120,
    u = a.maxZ + 40,
    d = Math.ceil((l - o) / n),
    f = Math.ceil((u - c) / n),
    p = [];
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
          [u, d, f] = o ? [0.52, 0.5, 0.44] : [0.5, 0.42, 0.3];
        for (let e of a.ts) {
          let t = n.axis === `x` ? e : n.at + i * s,
            r = n.axis === `x` ? n.at + i * s : e;
          p.push({
            x: t,
            z: r,
            ax: n.axis === `x` ? c : l,
            az: n.axis === `x` ? l : c,
            r: u,
            g: d,
            b: f,
            deck: !1,
          });
        }
      }
  }
  for (let e of t.deckLamps)
    p.push({
      x: e.x,
      z: e.z,
      ax: 16,
      az: 16,
      r: 0.6,
      g: 0.6,
      b: 0.6,
      deck: !0,
    });
  let m = new Uint8Array(d * f * 4),
    h = new Float32Array(d * 32 * 4);
  for (let e = 0; e < f; e += 32) {
    h.fill(0);
    let t = Math.min(f, e + 32),
      r = c + e * n,
      i = c + t * n;
    for (let a of p) {
      if (a.z + a.az < r || a.z - a.az > i) continue;
      let s = Math.max(0, Math.floor((a.x - a.ax - o) / n)),
        l = Math.min(d - 1, Math.ceil((a.x + a.ax - o) / n)),
        u = Math.max(e, Math.floor((a.z - a.az - c) / n)),
        f = Math.min(t - 1, Math.ceil((a.z + a.az - c) / n));
      for (let t = u; t <= f; t++) {
        let r = (c + (t + 0.5) * n - a.z) / a.az;
        for (let i = s; i <= l; i++) {
          let s = (o + (i + 0.5) * n - a.x) / a.ax,
            c = s * s + r * r;
          if (c >= 1) continue;
          let l = (1 - c) * (1 - c),
            u = ((t - e) * d + i) * 4;
          a.deck
            ? (h[u + 3] += l * a.r)
            : ((h[u] += l * a.r), (h[u + 1] += l * a.g), (h[u + 2] += l * a.b));
        }
      }
    }
    for (let n = 0, r = (t - e) * d * 4; n < r; n++)
      m[e * d * 4 + n] = Math.min(255, Math.round((h[n] / SJ) * 255));
  }
  let g = new w(m, d, f, i, s);
  return (
    (g.minFilter = E),
    (g.magFilter = E),
    (g.generateMipmaps = !1),
    (g.wrapS = g.wrapT = _),
    (g.name = `tokyo-street-lightmap`),
    (g.needsUpdate = !0),
    de(g),
    {
      texture: g,
      xf: new D(o, c, 1 / (d * n), 1 / (f * n)),
      ms: performance.now() - r,
    }
  );
}
