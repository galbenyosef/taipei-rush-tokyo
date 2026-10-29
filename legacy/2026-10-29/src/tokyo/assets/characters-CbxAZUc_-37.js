// tokyo/assets/characters-CbxAZUc_ 37 — head
// Lines 11272-11391 of readable/tokyo/assets/characters-CbxAZUc_.pretty.js (statement-aligned).
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
    R.hips,
    R.spine,
    R.chest,
    R.neck,
    R.head,
    R.armL,
    R.foreL,
    R.handL,
    R.armR,
    R.foreR,
    R.handR,
    R.thighL,
    R.shinL,
    R.footL,
    R.thighR,
    R.shinR,
    R.footR,
    R.hair,
    -1,
    -1,
    -1,
    -1,
    R.fingersL,
    R.fingersR,
    -1,
    -1,
    -1,
    -1,
    R.lidL,
    R.lidR,
  ],
  xs = [
    [ys.W_BAT, R.handR],
    [ys.W_PISTOL, R.handR],
    [ys.W_SMG, R.handR],
    [ys.W_PHONE, R.handL],
    [ys.HELMET, R.head],
    [ys.CAP, R.head],
    [ys.W_TEA, R.handL],
    [ys.W_UMB, R.handL],
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
    let s = new g();
    s.name = `socket-${a}`;
    let c;
    ((c =
      o === R.head
        ? new k(0, r[R.hair].y, r[R.head].z)
        : i(o, o === R.handR ? R.fingersR : R.fingersL)),
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
    hipHeight: r[R.hips].y,
  };
}
var Cs = null,
  ws = {
    id: `_charlab`,
    name: { zh: `角色實驗室`, en: `Character Lab` },
    async init(e) {
      (ve({
        renderer: e.params.get(`charseal`) === `0` ? null : e.renderer.gl,
        textureScale: e.quality.textureScale,
      }),
        e.params.get(`charlab`) && (Cs = await hs(e)));
    },
    update(e) {
      Cs?.update(e);
    },
  };
