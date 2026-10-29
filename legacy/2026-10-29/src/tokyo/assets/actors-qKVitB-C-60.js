// tokyo/assets/actors-qKVitB-C 60 — body
// Lines 26646-26844 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var Xg = class {
    idx;
    body;
    active = !1;
    freedAt = 0;
    kind = 0;
    halfW = 0.9;
    halfL = 2.3;
    height = 1.5;
    mass = 1300;
    two = !1;
    heavy = !1;
    color = 16777215;
    cr = 1;
    cg = 1;
    cb = 1;
    T = 1.2;
    s0 = 2;
    a = 2.4;
    b = 3;
    vf = 1;
    latSpeed = 1.2;
    aLat = 3;
    reaction = 0.6;
    jumpy = !1;
    latPref = 0;
    midLane = !1;
    seed = 0;
    mode = 0;
    link = -1;
    lane = 0;
    s = 0;
    lat = 0;
    latTarget = 0;
    latVel = 0;
    next = -1;
    nextLane = 0;
    nextLat = 0;
    turn = 0;
    two2 = !1;
    stage = 0;
    jEst = 20;
    jNode = -1;
    jFrom = -1;
    jAxis = 0;
    js = 0;
    jLen = 1;
    jOff = 0;
    jOffT = 0;
    jHoldS = -1;
    boxHold = -1;
    p0x = 0;
    p0z = 0;
    p1x = 0;
    p1z = 0;
    p2x = 0;
    p2z = 0;
    p3x = 0;
    p3z = 0;
    vTurn = 99;
    lut = new Float32Array(9);
    v = 0;
    acc = 0;
    x = 0;
    y = 0;
    z = 0;
    heading = 0;
    prevHeading = 0;
    yawRate = 0;
    lean = 0;
    pitch = 0;
    hOff = 0;
    committed = !1;
    sawRed = !1;
    greenT = 0;
    slot = -1;
    slotS = 0;
    wslot = -1;
    wFeeder = -1;
    waitT = 0;
    blinker = 0;
    blinkT = 0;
    braking = !1;
    hazard = !1;
    panic = 0;
    stuck = 0;
    idle = 0;
    blocked = 0;
    hornCd = 0;
    ghost = 0;
    dwellS = -1;
    dwellT = 0;
    bypass = 0;
    laneCd = 0;
    scootCd = 0;
    yieldSiren = 0;
    why = 0;
    pullOut = 0;
    hurry = 0;
    lead = -1;
    obsGap = 1e9;
    obsV = 0;
    obsPlayer = !1;
    obsStatic = !1;
    obsLat = 0;
    obsExt = 0;
    obsExtF = 0;
    obsVeh = !1;
    obsOncoming = !1;
    obsStill = 0;
    dodge = 0;
    dodgeLat = 0;
    back = 0;
    backed = 0;
    pathCd = 0;
    pathHold = !1;
    bypassS = -1;
    bypassR = -1;
    sideL = !1;
    sideR = !1;
    hitCd = 0;
    svx = 0;
    svz = 0;
    spin = 0;
    rest = 0;
    wrecked = !1;
    burnt = !1;
    abandoned = !1;
    health = 100;
    fireT = 0;
    burnT = 0;
    alert = 0;
    crimeCd = 0;
    hitT = -10;
    hitDv = 0;
    far = !1;
    lod = 0;
    lodAcc = 0;
    visible = !1;
    camDist = 0;
    plDist = 0;
    mat = new Float32Array(16);
    sh = 0;
    ch = 1;
    dirty = !0;
    riderJ = 2236962;
    riderH = 16777215;
    riderAlt = 3108822;
    passenger = !1;
    box = 0;
    ponchoWearer = !1;
    mask = !1;
    ud;
    constructor(e, t) {
      ((this.idx = e),
        (this.body = t),
        (this.ud = {
          kind: `sedan`,
          car: this,
          crossing: !1,
          police: !1,
          noJack: !1,
        }),
        (t.userData = this.ud),
        Qg(this, Zg));
    }
  },
  Zg =
    `halfW.halfL.height.cr.cg.cb.T.s0.a.b.vf.latSpeed.aLat.reaction.latPref.seed.s.lat.latTarget.latVel.nextLat.jEst.js.jLen.jOff.jOffT.jHoldS.boxHold.p0x.p0z.p1x.p1z.p2x.p2z.p3x.p3z.vTurn.v.acc.x.y.z.heading.prevHeading.yawRate.lean.pitch.hOff.greenT.slotS.waitT.blinkT.panic.stuck.idle.blocked.hornCd.ghost.dwellS.dwellT.bypass.laneCd.scootCd.yieldSiren.pullOut.hurry.obsGap.obsV.obsLat.obsExt.obsExtF.obsStill.dodge.dodgeLat.back.backed.pathCd.bypassS.bypassR.hitCd.svx.svz.spin.rest.health.fireT.burnT.alert.crimeCd.hitT.hitDv.lodAcc.camDist.plDist.sh.ch`.split(
      `.`,
    );
function Qg(e, t) {
  let n = e;
  for (let e = 0; e < t.length; e++) {
    let r = t[e],
      i = n[r];
    typeof i == `number` && ((n[r] = 0.5), (n[r] = i));
  }
}
var $g = [
    `scooter`,
    `taxi`,
    `sedan`,
    `suv`,
    `van`,
    `truck`,
    `bus`,
    `police`,
    `motorcycle`,
    `superbike`,
  ],
  e_ = [...$g],
  t_ = e_.length,
  n_ = -1,
  r_ = -1,
  i_ = (e) => e === 0 || e === 8 || e === 9 || e === r_;
function a_(e, t, n, r) {
  (e_.push(...e), o_.push(...t), (t_ = e_.length), (n_ = n), (r_ = r));
}
