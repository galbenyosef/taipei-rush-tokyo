// tokyo/assets/characters-p5grEi98 37 — head
// Lines 11272-11391 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
var ys = {
    HIPS: 0,
    SPINE: 1,
    CHEST: 2,
    NECK: 3,
    HEAD: 4,
    ARM_L: 5,
    FORE_L: 6,
    HAND_L: 7,
    ARM_R: 8,
    FORE_R: 9,
    HAND_R: 10,
    THIGH_L: 11,
    SHIN_L: 12,
    FOOT_L: 13,
    THIGH_R: 14,
    SHIN_R: 15,
    FOOT_R: 16,
    HAIR: 17,
    W_BAT: 18,
    W_PISTOL: 19,
    W_SMG: 20,
    W_PHONE: 21,
    FING_L: 22,
    FING_R: 23,
    HELMET: 24,
    CAP: 25,
    W_TEA: 26,
    W_UMB: 27,
    LID_L: 28,
    LID_R: 29,
  },
  bs = [
    L.hips,
    L.spine,
    L.chest,
    L.neck,
    L.head,
    L.armL,
    L.foreL,
    L.handL,
    L.armR,
    L.foreR,
    L.handR,
    L.thighL,
    L.shinL,
    L.footL,
    L.thighR,
    L.shinR,
    L.footR,
    L.hair,
    -1,
    -1,
    -1,
    -1,
    L.fingersL,
    L.fingersR,
    -1,
    -1,
    -1,
    -1,
    L.lidL,
    L.lidR,
  ],
  xs = [
    [ys.W_BAT, L.handR],
    [ys.W_PISTOL, L.handR],
    [ys.W_SMG, L.handR],
    [ys.W_PHONE, L.handL],
    [ys.HELMET, L.head],
    [ys.CAP, L.head],
    [ys.W_TEA, L.handL],
    [ys.W_UMB, L.handL],
  ];
function Ss(e) {
  let t = [],
    n = [];
  for (let r = 0; r < 30; r++) {
    let i = bs[r];
    i >= 0 && ((t[r] = e.bones[i]), (n[r] = e.joints[i].clone()));
  }
  let r = e.joints,
    i = (e, t) => r[e].clone().lerp(r[t], 0.6);
  for (let [a, o] of xs) {
    let s = new v();
    s.name = `socket-${a}`;
    let c;
    ((c =
      o === L.head
        ? new D(0, r[L.hair].y, r[L.head].z)
        : i(o, o === L.handR ? L.fingersR : L.fingersL)),
      (n[a] = c.clone()),
      s.position.copy(c).sub(r[o]),
      e.bones[o].add(s),
      (t[a] = s));
  }
  return {
    bones: t,
    rest: t.map((e) => e.position.clone()),
    joints: n,
    thighLen: e.thighLen,
    shinLen: e.shinLen,
    hipHeight: r[L.hips].y,
  };
}
var Cs = null,
  ws = {
    id: `_charlab`,
    name: { zh: `角色實驗室`, en: `Character Lab` },
    async init(e) {
      (ye({
        renderer: e.params.get(`charseal`) === `0` ? null : e.renderer.gl,
        textureScale: e.quality.textureScale,
      }),
        e.params.get(`charlab`) && (Cs = await hs(e)));
    },
    update(e) {
      Cs?.update(e);
    },
  };
