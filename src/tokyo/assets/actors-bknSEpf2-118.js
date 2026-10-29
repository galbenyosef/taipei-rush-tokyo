// tokyo/assets/actors-bknSEpf2 118 — heli
// Lines 53455-53525 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var cO = {},
  lO = [0, 1, 5, 13, 28, 50],
  uO = {
    assault: 1,
    assault_police: 3.2,
    carjack: 1.25,
    hit_ped: 1.3,
    kill: 4.5,
    kill_police: 13.5,
    shooting: 1.6,
    vehicle_damage: 0.35,
    red_light: 0.8,
    reckless: 0.8,
  },
  dO = {
    red_light: 1,
    reckless: 1,
    vehicle_damage: 2,
    carjack: 2,
    assault: 3,
    hit_ped: 3,
    shooting: 3,
    kill: 4,
    assault_police: 4,
    kill_police: 5,
  },
  fO = new Set([`red_light`, `reckless`]),
  pO = {
    shooting: 6,
    vehicle_damage: 2,
    assault: 2.5,
    reckless: 6,
    red_light: 6,
    hit_ped: 1.5,
    carjack: 4,
    kill: 1.5,
    assault_police: 2.5,
    kill_police: 2,
  },
  mO = { kill: 0.6, kill_police: 0.6 },
  hO = [0.6, 1.5],
  gO = [0.75, 1.1],
  _O = 1.35,
  vO = 0.6,
  yO = { base: 55, perStar: 22 },
  bO = {
    car: 85,
    officer: 55,
    officerStill: 68,
    heli: 150,
    nightMul: 0.8,
    hear: 11,
  },
  xO = [
    { cars: 0, swat: 0, heli: !1, roadblocks: 0, foot: 0 },
    { cars: 1, swat: 0, heli: !1, roadblocks: 0, foot: 2 },
    { cars: 2, swat: 0, heli: !1, roadblocks: 0, foot: 3 },
    { cars: 3, swat: 0, heli: !1, roadblocks: 1, foot: 4 },
    { cars: 4, swat: 0, heli: !0, roadblocks: 1, foot: 4 },
    { cars: 5, swat: 1, heli: !0, roadblocks: 2, foot: 4 },
  ];
function SO(e) {
  switch (e.level) {
    case `low`:
      return { maxCars: 3, maxOfficers: 8, patrolCar: !1, sirens: 2 };
    case `medium`:
      return { maxCars: 4, maxOfficers: 12, patrolCar: !0, sirens: 3 };
    default:
      return { maxCars: 6, maxOfficers: 15, patrolCar: !0, sirens: 3 };
  }
}
