// tokyo/assets/region-tokyo-A7LxHjud 320 — math
// Lines 115283-115492 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var xOe = [
    iOe,
    {
      id: `sj-kaleido`,
      site: UK,
      name: { ja: `新宿大ガード`, zh: `新宿大Guard`, en: `Shinjuku Ogado` },
      near: 240,
      build: bOe,
      far: (e, t) => {
        (e.col(15330799).mat(0.5, 0.2, 0.06, G | 32),
          Oj(
            e,
            Dq.x0,
            Dq.z0,
            Dq.x1,
            Dq.z1,
            -3,
            Dq.h,
            t.c(`office`),
            8,
            8,
            10132636,
          ),
          e.col(9326405).mat(0.8, 0, 0.06, G | 32),
          Oj(
            e,
            Oq.x0,
            Oq.z0,
            Oq.x1,
            Oq.z1,
            -3,
            Oq.h,
            t.c(`office`),
            8,
            8,
            7293508,
          ));
      },
      bounds: () => [Dq.x0, Oq.z0, Oq.x1, Dq.z1],
      farBoxes: () => [
        cq(Oq.x0, Oq.z0 + 6, Oq.x1, Oq.z1 - 4, 0, Oq.h, [0.55, 0.32, 0.28]),
        cq(Dq.x0, Dq.z0, Dq.x1, Dq.z1, 0, Dq.h, [0.9, 0.92, 0.93]),
      ],
    },
    oOe,
    cOe,
    dOe,
    pOe,
    hOe,
    _Oe,
    yOe,
  ],
  kq = [
    kme,
    Nhe,
    Uhe,
    ...Khe,
    Wme,
    che,
    vhe,
    Ehe,
    khe,
    hge,
    Sge,
    Nge,
    r_e,
    m_e,
    w_e,
    Z_e,
    ave,
    dve,
    _ve,
    vve,
    yve,
    xve,
    Sve,
    Cve,
    Lve,
    Bve,
    Yve,
    nye,
    ...xye,
    Aye,
    pbe,
    hbe,
    Obe,
    jbe,
    exe,
    rxe,
    Ube,
    _xe,
    jxe,
    Uxe,
    rSe,
    wSe,
    BSe,
    USe,
    YSe,
    ...Zye,
    ...cCe,
    ...RCe,
    VCe,
    HCe,
    ...vwe,
    ...Bwe,
    ...Gwe,
    ...QTe,
    ...jEe,
    LEe,
    ...ZEe,
    oDe,
    pDe,
    vDe,
    CDe,
    DDe,
    MDe,
    ...xOe,
  ];
function Aq(e, t) {
  if (t.site) return t.site(e);
  let n = e.landmark(t.lot ?? t.id);
  return n
    ? { x: n.x, z: n.z, gy: e.groundHeight(n.x, n.z), facing: n.facing }
    : null;
}
function SOe(e, t, n) {
  if (t.bounds) return t.bounds(e, n);
  let r = 1 / 0,
    i = 1 / 0,
    a = -1 / 0,
    o = -1 / 0;
  for (let s of t.farBoxes(e, n))
    ((r = Math.min(r, s.x0, s.x1)),
      (a = Math.max(a, s.x0, s.x1)),
      (i = Math.min(i, s.z0, s.z1)),
      (o = Math.max(o, s.z0, s.z1)));
  return Number.isFinite(r)
    ? [r - 15, i - 15, a + 15, o + 15]
    : [n.x - 30, n.z - 30, n.x + 30, n.z + 30];
}
function COe(e) {
  let t = [];
  for (let n of kq) {
    let r = Aq(e, n);
    if (r) for (let i of n.farBoxes(e, r)) t.push(i);
  }
  return t;
}
var wOe = 9080983,
  TOe = {
    id: `kit-sample`,
    site: (e) => ({
      x: -425,
      z: 40,
      gy: e.groundHeight(-425, 40),
      facing: Math.PI / 2,
    }),
    near: 400,
    build(e, t) {
      let n = { cell: t.c(`kawara`), color: wOe, ridgeColor: 5198938 },
        r = (n, r, i, a) => {
          e.col(15723748)
            .mat(0.85, 0, 0, 0)
            .box(n - r, 0, -i, n + r, a, i, t.c(`plaster`), 2, 2);
        };
      (r(-60, 6, 4, 4),
        sC(e, -60, 0, 4, 7.5, 5.5, { ...n, rise: 3.2 }),
        r(-40, 6, 4, 4),
        cC(e, -40, 0, 4, 7.2, 5.2, { ...n, rise: 2.8, wallY: 4 }),
        r(-20, 6, 4, 4),
        lC(e, -20, 0, 4, 7.5, 5.5, { ...n, rise: 4 }),
        r(0, 6, 4, 4),
        lC(e, 0, 0, 4, 7.5, 5.5, {
          cell: t.c(`copper`),
          color: 16777215,
          band: 6265476,
          ridgeColor: 5212786,
          rise: 4.2,
          sori: 0.9,
        }),
        r(20, 5, 3, 3.5),
        uC(e, 20, 0, 3.6, 4, -6, -2, 2.2, { ...n, rise: 0 }),
        dC(e, 40, 0, 0, 5, 6.5, { type: `myojin`, plaque: t.c(`shoji`) }),
        dC(e, 55, 0, 0, 4, 5.5, { type: `shinmei` }));
    },
    far() {},
    farBoxes: () => [],
  },
  jq = 230,
  EOe = 150,
  Mq = { low: 0.6, medium: 0.8, high: 1, ultra: 1.3 },
  Nq = {
    low: { vertices: 290400, indices: 465600 },
    high: { vertices: 38e4, indices: 61e4 },
  },
  DOe = 160,
  Pq = {
    coarsePad: 40,
    coarseDrop: 100,
    nearRange: 260,
    nearPad: 40,
    nearDrop: 80,
    interiorRange: 70,
    interiorDrop: 40,
    farPad: 150,
    farDrop: 150,
  },
  Fq = new p(),
  Iq = new p(),
  Lq = [0, 0, 0, 0];
