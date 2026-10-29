// tokyo/assets/engine-14d5lda2 21 — median
// Lines 7353-7622 of readable/tokyo/assets/engine-14d5lda2.pretty.js (statement-aligned).
var Bs = 3.3,
  Vs = 0.15,
  Hs = { minX: -900, maxX: 900, minZ: -960, maxZ: 560 },
  Us = -960,
  Ws = -1030,
  Gs = [
    {
      id: `riverside`,
      name: { zh: `河濱公園`, en: `Riverside Park` },
      minX: -1200,
      maxX: -900,
      minZ: -1400,
      maxZ: 1e3,
      style: { floors: [0, 0], towers: 0, neon: 0, old: 0, shops: 0 },
    },
    {
      id: `shilin`,
      name: { zh: `士林`, en: `Shilin` },
      minX: -900,
      maxX: 900,
      minZ: -1400,
      maxZ: -790,
      style: { floors: [3, 8], towers: 0.05, neon: 0.7, old: 0.6, shops: 0.95 },
    },
    {
      id: `ximending`,
      name: { zh: `西門町`, en: `Ximending` },
      minX: -900,
      maxX: -560,
      minZ: -330,
      maxZ: 70,
      style: { floors: [4, 12], towers: 0.1, neon: 1, old: 0.4, shops: 1 },
    },
    {
      id: `wanhua`,
      name: { zh: `萬華`, en: `Wanhua` },
      minX: -900,
      maxX: -560,
      minZ: 70,
      maxZ: 1e3,
      style: { floors: [2, 6], towers: 0, neon: 0.4, old: 1, shops: 0.85 },
    },
    {
      id: `zhongzheng`,
      name: { zh: `中正`, en: `Zhongzheng` },
      minX: -560,
      maxX: -130,
      minZ: -330,
      maxZ: 1e3,
      style: {
        floors: [4, 14],
        towers: 0.25,
        neon: 0.2,
        old: 0.35,
        shops: 0.6,
      },
    },
    {
      id: `zhongshan`,
      name: { zh: `中山`, en: `Zhongshan` },
      minX: -900,
      maxX: 230,
      minZ: -790,
      maxZ: -330,
      style: { floors: [5, 16], towers: 0.3, neon: 0.6, old: 0.45, shops: 0.8 },
    },
    {
      id: `songshan`,
      name: { zh: `松山`, en: `Songshan` },
      minX: 230,
      maxX: 900,
      minZ: -790,
      maxZ: -330,
      style: {
        floors: [5, 14],
        towers: 0.25,
        neon: 0.5,
        old: 0.5,
        shops: 0.75,
      },
    },
    {
      id: `xinyi`,
      name: { zh: `信義`, en: `Xinyi` },
      minX: 480,
      maxX: 1200,
      minZ: -330,
      maxZ: 1e3,
      style: {
        floors: [10, 40],
        towers: 0.8,
        neon: 0.35,
        old: 0.05,
        shops: 0.5,
      },
    },
    {
      id: `daan`,
      name: { zh: `大安`, en: `Da'an` },
      minX: -130,
      maxX: 480,
      minZ: -330,
      maxZ: 1e3,
      style: { floors: [5, 14], towers: 0.3, neon: 0.35, old: 0.4, shops: 0.8 },
    },
  ],
  Ks = [
    { id: `daan`, minX: -212, maxX: -130, minZ: 280, maxZ: 1e3 },
    { id: `zhongzheng`, minX: -700, maxX: -560, minZ: -330, maxZ: 70, gen: !1 },
    { id: `daan`, minX: -202, maxX: -62, minZ: 140, maxZ: 266, gen: !1 },
    { id: `shilin`, minX: -202, maxX: -62, minZ: -883, maxZ: -743, gen: !1 },
    { id: `songshan`, minX: 344, maxX: 464, minZ: -330, maxZ: -300, gen: !1 },
  ],
  qs = Hs;
function K(e, t, n, r, i, a, o, s = {}) {
  let c = {
    boulevard: { median: 8, sidewalk: 6, speed: 50 },
    arterial: { median: 2, sidewalk: 5, speed: 50 },
    street: { median: 0, sidewalk: 4, speed: 40 },
    lane: { median: 0, sidewalk: 2.5, speed: 30 },
  }[a];
  return {
    id: e,
    name: { zh: t, en: n },
    axis: r,
    at: i,
    kind: a,
    lanesPerDir: o,
    from: r === `x` ? qs.minX : qs.minZ,
    to: r === `x` ? qs.maxX : qs.maxZ,
    median: c.median,
    sidewalk: c.sidewalk,
    speedKmh: c.speed,
    ...s,
  };
}
var Js = -400,
  Ys = -160,
  q = 1e5;
function J(...e) {
  let t = [];
  for (let n = 0; n + 1 < e.length; n += 2) t.push([e[n], e[n + 1]]);
  return t;
}
var Xs = [
  K(`huanhe`, `環河南北路`, `Huanhe Rd`, `z`, -870, `arterial`, 2, {
    median: 1.2,
    sections: J(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2),
  }),
  K(`yanping`, `延平北路`, `Yanping N. Rd`, `z`, -700, `boulevard`, 3, {
    median: 6,
    to: -160,
    sections: J(-1e5, 4, -720, 3, -580, 2, -440, 1),
  }),
  K(`zhonghua`, `中華路`, `Zhonghua Rd`, `z`, -700, `boulevard`, 3, {
    median: 6,
    from: -160,
    sections: J(-1e5, 1, 120, 2),
  }),
  K(`chongqing`, `重慶南北路`, `Chongqing Rd`, `z`, -580, `arterial`, 2, {
    sections: J(-1e5, 4, -900, 3, -720, 2, -440, 1, -160, 1, 120, 2, 280, 3),
  }),
  K(`zhongshan`, `中山南北路`, `Zhongshan Rd`, `z`, -400, `boulevard`, 3, {
    median: 7,
    treeMedian: !0,
    sections: J(-1e5, 5, -790, 3, -720, 2, -440, 1, -160, 0),
  }),
  K(`xinsheng`, `新生南北路`, `Xinsheng Rd`, `z`, -220, `arterial`, 3, {
    median: 3,
    treeMedian: !0,
    sections: J(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2, 280, 3),
  }),
  K(`jianguo`, `建國南北路`, `Jianguo Rd`, `z`, -40, `boulevard`, 3, {
    median: 10,
    elevated: `expressway`,
    sections: J(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2),
  }),
  K(`fuxing`, `復興南北路`, `Fuxing Rd`, `z`, 140, `boulevard`, 3, {
    median: 9,
    elevated: `mrt`,
    sections: J(-1e5, 0, -160, 1, 120, 2),
  }),
  K(`dunhua`, `敦化南北路`, `Dunhua Rd`, `z`, 320, `boulevard`, 3, {
    median: 10,
    treeMedian: !0,
    sections: J(-1e5, 0, -160, 1, 120, 2),
  }),
  K(`guangfu`, `光復南北路`, `Guangfu Rd`, `z`, 480, `arterial`, 2),
  K(`keelung`, `基隆路`, `Keelung Rd`, `z`, 640, `boulevard`, 3, {
    median: 6,
    sections: J(-1e5, 1, 120, 2, 430, 3),
  }),
  K(`songren`, `松仁路`, `Songren Rd`, `z`, 840, `arterial`, 2, {
    median: 4,
    treeMedian: !0,
  }),
  K(`shilin-zz`, `中正路`, `Zhongzheng Rd`, `x`, -900, `arterial`, 2, {
    median: 2,
  }),
  K(`minquan`, `民權東西路`, `Minquan Rd`, `x`, -720, `boulevard`, 3, {
    median: 6,
    sections: J(-1e5, 0, -400, 1, -220, 2, -40, 3, 320, 4, 640, 5),
  }),
  K(`minsheng`, `民生東西路`, `Minsheng Rd`, `x`, -580, `arterial`, 2, {
    median: 4,
    treeMedian: !0,
    sections: J(-1e5, 0, -400, 1, -220, 2, -40, 3, 320, 4, 640, 5),
  }),
  K(`nanjing`, `南京東西路`, `Nanjing Rd`, `x`, -440, `boulevard`, 3, {
    median: 6,
    sections: J(-1e5, 0, -400, 1, -310, 2, -40, 3, 320, 4, 640, 5),
  }),
  K(`civic`, `市民大道`, `Civic Blvd`, `x`, -300, `boulevard`, 3, {
    median: 12,
    elevated: `expressway`,
    sections: J(-1e5, 1, -400, 2, -220, 3, 140, 4, 320, 5, 640, 6),
  }),
  K(`zhongxiao`, `忠孝東西路`, `Zhongxiao Rd`, `x`, -160, `boulevard`, 3, {
    median: 5,
    sections: J(-1e5, 2, -700, 1, -400, 1, -310, 2, -220, 3, 140, 4, 640, 5),
  }),
  K(`ketagalan`, `凱達格蘭大道`, `Ketagalan Blvd`, `x`, -20, `boulevard`, 3, {
    median: 14,
    treeMedian: !0,
    from: -580,
    to: -400,
  }),
  K(`renai`, `仁愛路`, `Ren'ai Rd`, `x`, -20, `boulevard`, 3, {
    median: 14,
    treeMedian: !0,
    from: -400,
    sections: J(-1e5, 1, -310, 2, -220, 3, 140, 4),
  }),
  K(`guangzhou`, `廣州街`, `Guangzhou St`, `x`, 120, `boulevard`, 3, {
    median: 6,
    to: -700,
  }),
  K(`aiguo`, `愛國西路`, `Aiguo W. Rd`, `x`, 120, `boulevard`, 3, {
    median: 6,
    from: -700,
    to: -400,
  }),
  K(`xinyi`, `信義路`, `Xinyi Rd`, `x`, 120, `boulevard`, 3, {
    median: 6,
    from: -400,
    sections: J(-1e5, 1, -310, 2, -220, 3, 140, 4, 640, 5),
  }),
  K(`heping`, `和平東西路`, `Heping Rd`, `x`, 280, `arterial`, 2, {
    median: 2,
    sections: J(-1e5, 3, -700, 2, -580, 1, -400, 1, -220, 2, 140, 3),
  }),
  K(`juguang`, `莒光路`, `Juguang Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    to: -700,
  }),
  K(`tingzhou`, `汀州路`, `Tingzhou Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    from: -700,
    to: -220,
    sections: J(-1e5, 1, -580, 2, -400, 3),
  }),
  K(`xinhai`, `辛亥路`, `Xinhai Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    from: -220,
    sections: J(-1e5, 1, -40, 2, 140, 3, 480, 4),
  }),
];
function Y(e, t, n, r, i, a, o) {
  return { axis: e, at: t, from: n, to: r, zh: i, en: a, sections: o };
}
