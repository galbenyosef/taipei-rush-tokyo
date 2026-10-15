// tokyo/assets/actors-qKVitB-C 127 — frame
// Lines 59002-59087 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function sM(e, t) {
  if ($j(e)) return Oj.ready && !!Pj(wj(t).avatar);
  let n = typeof t == `string` ? (LM(t) ?? FM.uncle) : t;
  return eM.has(`${n.id}|${nM(e)}`);
}
var cM = () => tM,
  lM = [
    H.spine,
    H.chest,
    H.head,
    H.armL,
    H.foreL,
    H.armR,
    H.foreR,
    H.thighL,
    H.shinL,
    H.thighR,
    H.shinR,
  ],
  uM = lM.length,
  dM = {};
lM.forEach((e, t) => (dM[e] = t));
var fM = new Set([
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
  pM = {
    wave: [`wave`, 0.4, 1.4],
    cheer: [`cheer`, 0.05, 0.5],
    clap: [`clap`, 0.1, 0.6],
    pray: [`pray`, 1.5, 3],
  },
  mM = [`dance_twist`, `dance_macarena`, `dance_chicken`],
  hM = new Set([
    `wave`,
    `cheer`,
    `point`,
    `clap`,
    `jab`,
    `cross`,
    `hook`,
    `uppercut`,
  ]),
  gM = new Set([`sit`, `dance`, `fight`, `bow`, `pray`, `phone`]),
  _M = {
    punch: `jab`,
    knockdown: `knockdown_back`,
    getup: `getup_back`,
    dance: `dance_twist`,
    guard: `fight_idle`,
    stretch: `idle_stretch`,
    sitDown: `sit_down`,
    standUp: `stand_up`,
  },
  vM = ot(),
  yM = { x: 0, y: 0, z: 0 },
  bM = new y(),
  xM = new R(),
  SM = new m(),
  CM = -1;
function wM(e) {
  let t = e.time?.frame ?? 0;
  if (t !== CM) {
    CM = t;
    let n = e.camera;
    (xM.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      bM.setFromProjectionMatrix(xM, n.coordinateSystem, n.reversedDepth));
  }
  return bM;
}
var TM = 0,
  EM = -1,
  DM = 0;
function OM(e) {
  let t = e.time?.frame ?? 0;
  return (t !== EM && ((EM = t), (DM = 0)), DM >= 1 ? !1 : (DM++, !0));
}
