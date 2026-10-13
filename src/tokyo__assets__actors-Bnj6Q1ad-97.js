// tokyo__assets__actors-Bnj6Q1ad 97 — math
// Lines 47093-47177 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function ZC(e, t, n, r, i, a, o, s) {
  let c = e.mesh;
  ((c.count = t),
    (c.visible = t > 0),
    t &&
      (e.sphere.center.set((n + a) / 2, (r + o) / 2 + 0.9, (i + s) / 2),
      (e.sphere.radius = 0.5 * Math.hypot(a - n, o - r, s - i) + 1.9),
      (c.instanceMatrix.needsUpdate = !0),
      (e.aA.needsUpdate = !0),
      (e.aB.needsUpdate = !0),
      (e.aC.needsUpdate = !0)));
}
var QC = 1,
  $C = class {
    v;
    swat;
    scooter;
    role;
    state = `drive`;
    crew;
    crewMax;
    officers = [];
    driver = new sS();
    route = new eS();
    siren = null;
    los = !1;
    losT = 0;
    lastSeenT = -99;
    sx = 0;
    sz = 0;
    searchT = 0;
    hornT = 0;
    barkT = 0;
    health0;
    healthT = 0;
    seed = Math.random();
    blipId = `police-car-${QC++}`;
    blipT = 0;
    born;
    destroyedAt = -1;
    alive = !0;
    leaveX = 0;
    leaveZ = 0;
    listCheckT = 0;
    curbX = 0;
    curbZ = 0;
    curbT = 0;
    sd = 1 / 0;
    hidden = !1;
    hidT = 0;
    goalX = 0;
    goalZ = 0;
    goalSrcX = NaN;
    goalSrcZ = NaN;
    goalT = 0;
    queueT = 0;
    queued = !1;
    dbgTx = 0;
    dbgTz = 0;
    dbgWant = 0;
    rider = null;
    prevHeading = 0;
    constructor(e, t, n, r, i = !1) {
      ((this.v = e),
        (this.swat = n),
        (this.scooter = i),
        (this.role = t),
        (this.crewMax = this.crew = i ? 1 : n ? 4 : 2),
        (this.health0 = e.health),
        (this.born = r),
        (this.prevHeading = e.heading));
    }
  },
  ew = { x: 0, z: 0, turn: 0, cornerDist: 0 },
  tw = { x: 0, z: 0, dist: 0 };
function nw(e, t, n, r) {
  let i = e.nearestLink(t, n, !1);
  if (!i) return !1;
  let a = i.link;
  return (
    e.lanePoint(a, a.lanes - 1, Math.max(3, Math.min(a.length - 3, i.s)), r),
    (r.dist = Math.hypot(r.x - t, r.z - n)),
    !0
  );
}
