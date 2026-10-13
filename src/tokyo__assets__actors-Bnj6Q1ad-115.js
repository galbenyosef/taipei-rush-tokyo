// tokyo__assets__actors-Bnj6Q1ad 115 — frame
// Lines 55099-55184 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Ck(e, t) {
  if (hk(e)) return WO.ready && !!XO(BO(t).avatar);
  let n = typeof t == `string` ? ($k(t) ?? Zk.uncle) : t;
  return gk.has(`${n.id}|${vk(e)}`);
}
var wk = () => _k,
  Tk = [
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
  Ek = Tk.length,
  Dk = {};
Tk.forEach((e, t) => (Dk[e] = t));
var Ok = new Set([
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
  kk = {
    wave: [`wave`, 0.4, 1.4],
    cheer: [`cheer`, 0.05, 0.5],
    clap: [`clap`, 0.1, 0.6],
    pray: [`pray`, 1.5, 3],
  },
  Ak = [`dance_twist`, `dance_macarena`, `dance_chicken`],
  jk = new Set([
    `wave`,
    `cheer`,
    `point`,
    `clap`,
    `jab`,
    `cross`,
    `hook`,
    `uppercut`,
  ]),
  Mk = new Set([`sit`, `dance`, `fight`, `bow`, `pray`, `phone`]),
  Nk = {
    punch: `jab`,
    knockdown: `knockdown_back`,
    getup: `getup_back`,
    dance: `dance_twist`,
    guard: `fight_idle`,
    stretch: `idle_stretch`,
    sitDown: `sit_down`,
    standUp: `stand_up`,
  },
  Pk = bt(),
  Fk = { x: 0, y: 0, z: 0 },
  Ik = new v(),
  Lk = new ke(),
  Rk = new C(),
  zk = -1;
function Bk(e) {
  let t = e.time?.frame ?? 0;
  if (t !== zk) {
    zk = t;
    let n = e.camera;
    (Lk.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      Ik.setFromProjectionMatrix(Lk, n.coordinateSystem, n.reversedDepth));
  }
  return Ik;
}
var Vk = 0,
  Hk = -1,
  Uk = 0;
function Wk(e) {
  let t = e.time?.frame ?? 0;
  return (t !== Hk && ((Hk = t), (Uk = 0)), Uk >= 1 ? !1 : (Uk++, !0));
}
