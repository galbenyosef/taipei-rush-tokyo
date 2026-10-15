// tokyo/assets/region-tokyo-BcM3fReU 243 — minx
// Lines 97700-97813 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var n1 = { minX: -900, maxX: 1200, minZ: -1750, maxZ: 1050 },
  r1 = {
    ground: `#1c2029`,
    water: `#123553`,
    waterEdge: `rgba(120,180,240,0.35)`,
    forest: [35, 74, 49],
    plateau: `rgba(170,190,120,0.13)`,
    cliff: `rgba(214,226,170,0.75)`,
    deck: `rgba(196,204,218,0.55)`,
    deckCase: `rgba(10,12,18,0.6)`,
    trench: `rgba(54,60,74,0.75)`,
    edge: `rgba(255,214,120,0.5)`,
  },
  i1 = (e) => [
    parseInt(e.slice(1, 3), 16),
    parseInt(e.slice(3, 5), 16),
    parseInt(e.slice(5, 7), 16),
  ];
function a1(e) {
  let t = n1,
    n = Math.ceil((t.maxX - t.minX) / 10),
    r = Math.ceil((t.maxZ - t.minZ) / 10),
    i = document.createElement(`canvas`);
  ((i.width = n), (i.height = r));
  let a = i.getContext(`2d`),
    o = a.createImageData(n, r),
    s = o.data,
    c = i1(r1.ground),
    l = i1(r1.water),
    u = r1.forest,
    d = e.dataset.water.at;
  for (let e = 0; e < r; e++) {
    let r = t.minZ + (e + 0.5) * 10;
    for (let i = 0; i < n; i++) {
      let a = t.minX + (i + 0.5) * 10,
        o = (e * n + i) * 4,
        f = c[0],
        p = c[1],
        m = c[2];
      if (fY(a, r) || (d && d(a, r))) ((f = l[0]), (p = l[1]), (m = l[2]));
      else {
        let e = gY(a, r);
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
function o1(e, t) {
  e.moveTo(t[0][0], t[0][1]);
  for (let n = 1; n < t.length; n++) e.lineTo(t[n][0], t[n][1]);
  e.closePath();
}
function s1() {
  let e = Ww(),
    t = e[0][2],
    n = e[0][1],
    r = e[0][3],
    i = e[1][2],
    a = e[2][0],
    o = e[2][1],
    s = e[3][0],
    c = e[4][3],
    l = e[5][1];
  return [
    [i, c],
    [s, c],
    [s, o],
    [a, o],
    [a, l],
    [i, l],
    [i, r],
    [t, r],
    [t, n],
    [i, n],
  ];
}
var c1 = {
    sumida: { zh: `隅田川`, en: `Sumida River` },
    kanda: { zh: `神 田 川`, en: `Kanda River` },
    nihonbashi: { zh: `日 本 橋 川`, en: `Nihonbashi River` },
    moat: { zh: `皇居護城河`, en: `Palace Moat` },
    pond: { zh: `不忍池`, en: `Shinobazu Pond` },
    bay: { zh: `東 京 灣`, en: `TOKYO BAY` },
  },
  l1 = [
    { name: { zh: `皇居`, en: `IMPERIAL PALACE` }, x: -740, z: 0 },
    {
      name: { zh: `東京晴空塔`, en: `Tokyo Skytree` },
      x: _Y.x,
      z: _Y.z,
      mark: !0,
    },
    { name: { zh: `東京鐵塔`, en: `Tokyo Tower` }, x: vY.x, z: vY.z, mark: !0 },
    { name: { zh: `淺草寺`, en: `Senso-ji` }, x: 624, z: -1400, mark: !0 },
    { name: { zh: `兩國`, en: `RYOGOKU` }, x: 800, z: -560 },
    { name: { zh: `月島`, en: `TSUKISHIMA` }, x: 860, z: 560 },
    { name: { zh: `谷中`, en: `YANAKA` }, x: -420, z: -1640 },
  ],
  u1 = {
    "tokyo-east-generic": { x: 450, z: -260 },
    kanda: { x: -300, z: -470 },
  };
