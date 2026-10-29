// tokyo/assets/actors-bknSEpf2 142 — frame
// Lines 64923-65008 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function OF(e, t) {
  if (bF(e)) return YP.ready && !!tF(GP(t).avatar);
  let n = typeof t == `string` ? (iI(t) ?? nI.uncle) : t;
  return xF.has(`${n.id}|${CF(e)}`);
}
var kF = () => SF,
  AF = [
    W.spine,
    W.chest,
    W.head,
    W.armL,
    W.foreL,
    W.armR,
    W.foreR,
    W.thighL,
    W.shinL,
    W.thighR,
    W.shinR,
  ],
  jF = AF.length,
  MF = {};
AF.forEach((e, t) => (MF[e] = t));
var NF = new Set([
    `wave`,
    `cheer`,
    `point`,
    `clap`,
    `bow`,
    `pray`,
    `dance`,
    `fight`,
    `phone`,
    `sit`,
    `fallen`,
  ]),
  PF = {
    wave: [`wave`, 0.4, 1.4],
    cheer: [`cheer`, 0.05, 0.5],
    clap: [`clap`, 0.1, 0.6],
    pray: [`pray`, 1.5, 3],
  },
  FF = [`dance_twist`, `dance_macarena`, `dance_chicken`],
  IF = new Set([
    `wave`,
    `cheer`,
    `point`,
    `clap`,
    `jab`,
    `cross`,
    `hook`,
    `uppercut`,
  ]),
  LF = new Set([`sit`, `dance`, `fight`, `bow`, `pray`, `phone`]),
  RF = {
    punch: `jab`,
    knockdown: `knockdown_back`,
    getup: `getup_back`,
    dance: `dance_twist`,
    guard: `fight_idle`,
    stretch: `idle_stretch`,
    sitDown: `sit_down`,
    standUp: `stand_up`,
  },
  zF = $e(),
  BF = { x: 0, y: 0, z: 0 },
  VF = new be(),
  HF = new N(),
  UF = new b(),
  WF = -1;
function GF(e) {
  let t = e.time?.frame ?? 0;
  if (t !== WF) {
    WF = t;
    let n = e.camera;
    (HF.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      VF.setFromProjectionMatrix(HF, n.coordinateSystem, n.reversedDepth));
  }
  return VF;
}
var KF = 0,
  qF = -1,
  JF = 0;
function YF(e) {
  let t = e.time?.frame ?? 0;
  return (t !== qF && ((qF = t), (JF = 0)), JF >= 1 ? !1 : (JF++, !0));
}
