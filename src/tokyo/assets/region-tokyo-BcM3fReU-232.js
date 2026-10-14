// tokyo/assets/region-tokyo-BcM3fReU 232 — area
// Lines 94327-94489 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function pQ() {
  return {
    freeze: fQ(`freeze`, 4),
    dontRun: fQ(`dontrun`, 3),
    getOut: fQ(`getout`, 2),
    dropWeapon: fQ(`dropweapon`, 2),
    shotsFired: fQ(`shotsfired`, 2),
    spotted: fQ(`spotted`, 2),
    officerDown: fQ(`officerdown`, 1),
    arrest: fQ(`arrest`, 2),
    ticket: fQ(`ticket`, 2),
    pullOver: fQ(`pullover`, 4),
    pullOverScooter: fQ(`pullovermoto`, 2),
    backup: fQ(`backup`, 1),
    onFootChase: fQ(`onfoot`, 1),
  };
}
function mQ() {
  return {
    police: uQ(`police.speaker.police`),
    dispatch: uQ(`police.speaker.dispatch`),
    megaphone: uQ(`police.speaker.police`),
  };
}
function hQ() {
  return {
    lost: uQ(`police.radio.lost`),
    heli: uQ(`police.radio.heli`),
    swat: uQ(`police.radio.swat`),
    reported: uQ(`police.radio.reported`),
    reacquired: uQ(`police.radio.reacquired`),
  };
}
var gQ = {
    assault: `assault`,
    assault_police: `assault-police`,
    carjack: `carjack`,
    hit_ped: `hit-ped`,
    kill: `kill`,
    kill_police: `kill-police`,
    shooting: `shooting`,
    vehicle_damage: `vehicle-damage`,
    red_light: `red-light`,
    reckless: `reckless`,
  },
  _Q = (e) => uQ(`police.crime.${gQ[e] ?? `assault`}`);
function vQ(e, t) {
  let n = Math.atan2(e, -t);
  return uQ(
    `police.dir.${`nesw`[((Math.round(n / (Math.PI / 2)) % 4) + 4) % 4]}`,
  );
}
function yQ(e) {
  if (!e) return uQ(`police.vehicle.car`);
  let t = e.kind;
  return t === `taxi` || t === `cab`
    ? uQ(`police.vehicle.taxi`)
    : t === `police`
      ? uQ(`police.vehicle.police`)
      : t === `mamachari`
        ? uQ(`police.vehicle.bicycle`)
        : t === `van` || t === `bus` || t === `ambulance`
          ? uQ(`police.vehicle.van`)
          : t === `truck` || t === `garbage`
            ? uQ(`police.vehicle.truck`)
            : e.spec?.twoWheeler
              ? uQ(`police.vehicle.bike`)
              : uQ(`police.vehicle.car`);
}
var bQ = (e, t, n) => {
    let r = e.roadAt(t, n),
      i = r && !r.pedestrian ? e.address(r, t, n) : null;
    if (i) return i;
    let a = e.districtAt(t, n).name,
      o = e.locationLabel(t, n);
    return o.zh === a.zh ? (jt(e, t, n) ?? a) : o;
  },
  xQ = {
    crimeLine(e, t, n, r) {
      let i = bQ(e, n, r),
        a = _Q(t);
      return uQ(
        `police.radio.crime`,
        { area: i.zh, name: a.zh },
        { area: i.en, name: a.en },
        { area: lQ(i), name: a.ja },
      );
    },
    fleeLine(e, t, n, r, i, a) {
      let o = jt(e, t, n) ?? e.districtAt(t, n).name,
        s = vQ(r, i);
      if (!a)
        return uQ(
          `police.radio.flee-foot`,
          { area: o.zh, town: s.zh },
          { area: o.en, town: s.en },
          { area: lQ(o), town: s.ja },
        );
      let c = yQ(a);
      return uQ(
        `police.radio.flee-car`,
        { area: o.zh, town: s.zh, item: c.zh },
        { area: o.en, town: s.en, item: c.en },
        { area: lQ(o), town: s.ja, item: c.ja },
      );
    },
    lostLine(e, t, n) {
      let r = bQ(e, t, n);
      return uQ(
        `police.radio.lost-sight`,
        { area: r.zh },
        { area: r.en },
        { area: lQ(r) },
      );
    },
    roadblockLine(e, t, n, r) {
      if (!t) return uQ(`police.radio.roadblock-ahead`);
      let i = e.streetLabel(t, n, r).full;
      return uQ(
        `police.radio.roadblock`,
        { area: i.zh },
        { area: i.en },
        { area: lQ(i) },
      );
    },
    ticketLine(e) {
      let t = he(e, be);
      return uQ(`police.ticket`, { price: t }, { price: t });
    },
  },
  SQ = [
    { cars: 0, swat: 0, heli: !1, roadblocks: 0, foot: 0 },
    { cars: 1, swat: 0, heli: !1, roadblocks: 0, foot: 3 },
    { cars: 3, swat: 0, heli: !1, roadblocks: 0, foot: 4 },
    { cars: 4, swat: 0, heli: !1, roadblocks: 1, foot: 5 },
    { cars: 5, swat: 0, heli: !0, roadblocks: 2, foot: 6 },
    { cars: 5, swat: 1, heli: !0, roadblocks: 2, foot: 6 },
  ],
  CQ = { car: 9e3, scooter: 7e3 },
  wQ = 3901128,
  TQ = { w: 3.4, d: 3, h: 3 },
  EQ = { x: 1.05, z: 2.15 },
  DQ = {
    white: [0, 0, 128, 128],
    fascia: [128, 0, 384, 80],
    door: [128, 96, 128, 192],
    board: [256, 96, 128, 160],
    window: [384, 96, 128, 96],
    stand: [384, 192, 128, 128],
    tile: [0, 128, 128, 96],
    ac: [0, 224, 128, 64],
    box: [256, 256, 128, 64],
  },
  OQ = 32,
  kQ = 192,
  AQ = 320,
  jQ = (e) => ({
    u0: e[0] / 512,
    v0: 1 - (e[1] + e[3]) / 512,
    u1: (e[0] + e[2]) / 512,
    v1: 1 - e[1] / 512,
  }),
  MQ = (e) => jQ([e * OQ + 2, AQ, 28, kQ]);
