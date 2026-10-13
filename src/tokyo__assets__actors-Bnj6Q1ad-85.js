// tokyo__assets__actors-Bnj6Q1ad 85 — heli
// Lines 42150-42220 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var ux = {},
  dx = [0, 1, 5, 13, 28, 50],
  fx = {
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
  px = {
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
  mx = new Set([`red_light`, `reckless`]),
  hx = {
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
  gx = { kill: 0.6, kill_police: 0.6 },
  _x = [0.6, 1.5],
  vx = [0.75, 1.1],
  yx = 1.35,
  bx = 0.6,
  xx = { base: 55, perStar: 22 },
  Sx = {
    car: 85,
    officer: 55,
    officerStill: 68,
    heli: 150,
    nightMul: 0.8,
    hear: 11,
  },
  Cx = [
    { cars: 0, swat: 0, heli: !1, roadblocks: 0, foot: 0 },
    { cars: 1, swat: 0, heli: !1, roadblocks: 0, foot: 2 },
    { cars: 2, swat: 0, heli: !1, roadblocks: 0, foot: 3 },
    { cars: 3, swat: 0, heli: !1, roadblocks: 1, foot: 4 },
    { cars: 4, swat: 0, heli: !0, roadblocks: 1, foot: 4 },
    { cars: 5, swat: 1, heli: !0, roadblocks: 2, foot: 4 },
  ];
function wx(e) {
  switch (e.level) {
    case `low`:
      return { maxCars: 3, maxOfficers: 8, patrolCar: !1, sirens: 2 };
    case `medium`:
      return { maxCars: 4, maxOfficers: 12, patrolCar: !0, sirens: 3 };
    default:
      return { maxCars: 6, maxOfficers: 15, patrolCar: !0, sirens: 3 };
  }
}
