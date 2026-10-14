// tokyo/assets/engine-BuS5QxN0 21 — median
// Lines 7631-7756 of readable/tokyo/assets/engine-BuS5QxN0.pretty.js (statement-aligned).
var zs = [
  q(`huanhe`, `環河南北路`, `Huanhe Rd`, `z`, -870, `arterial`, 2, {
    median: 1.2,
    sections: Y(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2),
  }),
  q(`yanping`, `延平北路`, `Yanping N. Rd`, `z`, -700, `boulevard`, 3, {
    median: 6,
    to: -160,
    sections: Y(-1e5, 4, -720, 3, -580, 2, -440, 1),
  }),
  q(`zhonghua`, `中華路`, `Zhonghua Rd`, `z`, -700, `boulevard`, 3, {
    median: 6,
    from: -160,
    sections: Y(-1e5, 1, 120, 2),
  }),
  q(`chongqing`, `重慶南北路`, `Chongqing Rd`, `z`, -580, `arterial`, 2, {
    sections: Y(-1e5, 4, -900, 3, -720, 2, -440, 1, -160, 1, 120, 2, 280, 3),
  }),
  q(`zhongshan`, `中山南北路`, `Zhongshan Rd`, `z`, -400, `boulevard`, 3, {
    median: 7,
    treeMedian: !0,
    sections: Y(-1e5, 5, -790, 3, -720, 2, -440, 1, -160, 0),
  }),
  q(`xinsheng`, `新生南北路`, `Xinsheng Rd`, `z`, -220, `arterial`, 3, {
    median: 3,
    treeMedian: !0,
    sections: Y(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2, 280, 3),
  }),
  q(`jianguo`, `建國南北路`, `Jianguo Rd`, `z`, -40, `boulevard`, 3, {
    median: 10,
    elevated: `expressway`,
    sections: Y(-1e5, 3, -720, 2, -440, 1, -160, 1, 120, 2),
  }),
  q(`fuxing`, `復興南北路`, `Fuxing Rd`, `z`, 140, `boulevard`, 3, {
    median: 9,
    elevated: `mrt`,
    sections: Y(-1e5, 0, -160, 1, 120, 2),
  }),
  q(`dunhua`, `敦化南北路`, `Dunhua Rd`, `z`, 320, `boulevard`, 3, {
    median: 10,
    treeMedian: !0,
    sections: Y(-1e5, 0, -160, 1, 120, 2),
  }),
  q(`guangfu`, `光復南北路`, `Guangfu Rd`, `z`, 480, `arterial`, 2),
  q(`keelung`, `基隆路`, `Keelung Rd`, `z`, 640, `boulevard`, 3, {
    median: 6,
    sections: Y(-1e5, 1, 120, 2, 430, 3),
  }),
  q(`songren`, `松仁路`, `Songren Rd`, `z`, 840, `arterial`, 2, {
    median: 4,
    treeMedian: !0,
  }),
  q(`shilin-zz`, `中正路`, `Zhongzheng Rd`, `x`, -900, `arterial`, 2, {
    median: 2,
  }),
  q(`minquan`, `民權東西路`, `Minquan Rd`, `x`, -720, `boulevard`, 3, {
    median: 6,
    sections: Y(-1e5, 0, -400, 1, -220, 2, -40, 3, 320, 4, 640, 5),
  }),
  q(`minsheng`, `民生東西路`, `Minsheng Rd`, `x`, -580, `arterial`, 2, {
    median: 4,
    treeMedian: !0,
    sections: Y(-1e5, 0, -400, 1, -220, 2, -40, 3, 320, 4, 640, 5),
  }),
  q(`nanjing`, `南京東西路`, `Nanjing Rd`, `x`, -440, `boulevard`, 3, {
    median: 6,
    sections: Y(-1e5, 0, -400, 1, -310, 2, -40, 3, 320, 4, 640, 5),
  }),
  q(`civic`, `市民大道`, `Civic Blvd`, `x`, -300, `boulevard`, 3, {
    median: 12,
    elevated: `expressway`,
    sections: Y(-1e5, 1, -400, 2, -220, 3, 140, 4, 320, 5, 640, 6),
  }),
  q(`zhongxiao`, `忠孝東西路`, `Zhongxiao Rd`, `x`, -160, `boulevard`, 3, {
    median: 5,
    sections: Y(-1e5, 2, -700, 1, -400, 1, -310, 2, -220, 3, 140, 4, 640, 5),
  }),
  q(`ketagalan`, `凱達格蘭大道`, `Ketagalan Blvd`, `x`, -20, `boulevard`, 3, {
    median: 14,
    treeMedian: !0,
    from: -580,
    to: -400,
  }),
  q(`renai`, `仁愛路`, `Ren'ai Rd`, `x`, -20, `boulevard`, 3, {
    median: 14,
    treeMedian: !0,
    from: -400,
    sections: Y(-1e5, 1, -310, 2, -220, 3, 140, 4),
  }),
  q(`guangzhou`, `廣州街`, `Guangzhou St`, `x`, 120, `boulevard`, 3, {
    median: 6,
    to: -700,
  }),
  q(`aiguo`, `愛國西路`, `Aiguo W. Rd`, `x`, 120, `boulevard`, 3, {
    median: 6,
    from: -700,
    to: -400,
  }),
  q(`xinyi`, `信義路`, `Xinyi Rd`, `x`, 120, `boulevard`, 3, {
    median: 6,
    from: -400,
    sections: Y(-1e5, 1, -310, 2, -220, 3, 140, 4, 640, 5),
  }),
  q(`heping`, `和平東西路`, `Heping Rd`, `x`, 280, `arterial`, 2, {
    median: 2,
    sections: Y(-1e5, 3, -700, 2, -580, 1, -400, 1, -220, 2, 140, 3),
  }),
  q(`juguang`, `莒光路`, `Juguang Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    to: -700,
  }),
  q(`tingzhou`, `汀州路`, `Tingzhou Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    from: -700,
    to: -220,
    sections: Y(-1e5, 1, -580, 2, -400, 3),
  }),
  q(`xinhai`, `辛亥路`, `Xinhai Rd`, `x`, 430, `arterial`, 2, {
    median: 2,
    from: -220,
    sections: Y(-1e5, 1, -40, 2, 140, 3, 480, 4),
  }),
];
function X(e, t, n, r, i, a, o) {
  return { axis: e, at: t, from: n, to: r, zh: i, en: a, sections: o };
}
