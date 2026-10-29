// tokyo/assets/region-tokyo-55J_WESF 416 — mark
// Lines 149514-149670 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var Z2 = { minX: -2650, maxX: 1200, minZ: -1750, maxZ: 1700 },
  Q2 = {
    ground: `#1c2029`,
    water: `#123553`,
    waterEdge: `rgba(120,180,240,0.35)`,
    forest: [35, 74, 49],
    plateau: `rgba(170,190,120,0.13)`,
    cliff: `rgba(214,226,170,0.75)`,
    deck: `rgba(196,204,218,0.55)`,
    deckCase: `rgba(10,12,18,0.6)`,
    trench: `rgba(54,60,74,0.75)`,
    ramp: `rgba(120,214,150,0.9)`,
    edge: `rgba(255,214,120,0.5)`,
  },
  $2 = (e) => [
    parseInt(e.slice(1, 3), 16),
    parseInt(e.slice(3, 5), 16),
    parseInt(e.slice(5, 7), 16),
  ];
function HIe(e) {
  let t = Z2,
    n = Math.ceil((t.maxX - t.minX) / 10),
    r = Math.ceil((t.maxZ - t.minZ) / 10),
    i = document.createElement(`canvas`);
  ((i.width = n), (i.height = r));
  let a = i.getContext(`2d`),
    o = a.createImageData(n, r),
    s = o.data,
    c = $2(Q2.ground),
    l = $2(Q2.water),
    u = Q2.forest,
    d = e.dataset.water.at;
  for (let e = 0; e < r; e++) {
    let r = t.minZ + (e + 0.5) * 10;
    for (let i = 0; i < n; i++) {
      let a = t.minX + (i + 0.5) * 10,
        o = (e * n + i) * 4,
        f = c[0],
        p = c[1],
        m = c[2];
      if (Zv(a, r) || (d && d(a, r))) ((f = l[0]), (p = l[1]), (m = l[2]));
      else {
        let e = $v(a, r);
        e > 0 &&
          ((f += (u[0] - f) * e), (p += (u[1] - p) * e), (m += (u[2] - m) * e));
      }
      ((s[o] = f), (s[o + 1] = p), (s[o + 2] = m), (s[o + 3] = 255));
    }
  }
  return (
    a.putImageData(o, 0, 0),
    {
      canvas: i,
      minX: t.minX,
      minZ: t.minZ,
      maxX: t.minX + n * 10,
      maxZ: t.minZ + r * 10,
    }
  );
}
function e4(e, t) {
  e.moveTo(t[0][0], t[0][1]);
  for (let n = 1; n < t.length; n++) e.lineTo(t[n][0], t[n][1]);
  e.closePath();
}
function UIe() {
  return Kb()[0] ?? [];
}
function WIe() {
  return Kb().slice(1);
}
var t4 = {
    sumida: { zh: `隅田川`, en: `Sumida River` },
    kanda: { zh: `神 田 川`, en: `Kanda River` },
    nihonbashi: { zh: `日 本 橋 川`, en: `Nihonbashi River` },
    moat: { zh: `皇居護城河`, en: `Palace Moat` },
    pond: { zh: `不忍池`, en: `Shinobazu Pond` },
    bay: { zh: `東 京 灣`, en: `TOKYO BAY` },
  },
  GIe = [
    { name: { zh: `皇居`, en: `IMPERIAL PALACE` }, x: -710, z: 30 },
    {
      name: { zh: `東京晴空塔`, en: `Tokyo Skytree` },
      x: S1.x,
      z: S1.z,
      mark: !0,
    },
    { name: { zh: `東京鐵塔`, en: `Tokyo Tower` }, x: C1.x, z: C1.z, mark: !0 },
    { name: { zh: `淺草寺`, en: `Senso-ji` }, x: 662, z: -1395, mark: !0 },
    { name: { zh: `東京巨蛋`, en: `Tokyo Dome` }, x: -905, z: -719, mark: !0 },
    {
      name: { zh: `東京大學`, en: `Univ. of Tokyo` },
      x: -605,
      z: -1005,
      mark: !0,
    },
    {
      name: { zh: `六本木新城`, en: `Roppongi Hills` },
      x: -1045,
      z: 1040,
      mark: !0,
    },
    {
      name: { zh: `虎之門之丘`, en: `Toranomon Hills` },
      x: -553,
      z: 700,
      mark: !0,
    },
    {
      name: { zh: `澀谷十字路口`, en: `Shibuya Crossing` },
      x: -1845,
      z: 1330,
      mark: !0,
    },
    {
      name: { zh: `東京都廳`, en: `Tokyo Met. Gov.` },
      x: -2368,
      z: 360,
      mark: !0,
    },
    { name: { zh: `明治神宮`, en: `Meiji Jingu` }, x: -2118, z: 790, mark: !0 },
    { name: { zh: `中野`, en: `NAKANO` }, x: -2700, z: 300 },
    { name: { zh: `惠比壽`, en: `EBISU` }, x: -1400, z: 1680 },
    { name: { zh: `兩國`, en: `RYOGOKU` }, x: 800, z: -560 },
    { name: { zh: `月島`, en: `TSUKISHIMA` }, x: 860, z: 560 },
    { name: { zh: `谷中`, en: `YANAKA` }, x: -420, z: -1640 },
  ],
  n4 = {
    "tokyo-east-generic": { x: 450, z: -260 },
    kanda: { x: -300, z: -470 },
  };
function KIe() {
  let e = [];
  for (let t of Zo()) {
    let n = t.at + t.side * (Yo.off + 16),
      r = t.street + Math.sign(t.end - t.street) * 14;
    e.push({
      x: t.axis === `z` ? n : r,
      z: t.axis === `z` ? r : n,
      ja: t.ja,
      en: t.en,
      on: t.kind === `on`,
    });
  }
  for (let t of r4 ? Ao(r4) : []) {
    let [n, r] = Mo(t, t.foot, Oo.lat);
    e.push({
      x: n,
      z: r,
      ja: t.kind === `on` ? `上野入口` : `上野出口`,
      en: t.kind === `on` ? `Ueno Entrance` : `Ueno Exit`,
      on: t.kind === `on`,
    });
  }
  return e;
}
var r4 = null;
