// tokyo/assets/region-tokyo-A7LxHjud 405 — area
// Lines 146173-146377 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function nIe(e, t) {
  ((e.shadowColor = `#ff2a1a`),
    (e.shadowBlur = 10),
    (e.fillStyle = `#ff3b24`),
    (e.font = `900 58px ${t}`),
    e.fillText(n2(`police.roadblock.title`), 128, 50),
    (e.shadowColor = `#ffb21a`),
    (e.shadowBlur = 6),
    (e.fillStyle = `#ffc23a`),
    (e.font = `900 34px ${t}`),
    e.fillText(n2(`police.roadblock.stop`), 128, 104),
    (e.shadowBlur = 0),
    (e.fillStyle = `#e8e8e8`),
    (e.font = `700 17px ${t}`),
    e.fillText(n2(`police.word`), 128, 138));
}
function rIe(e) {
  return (t, n) => (
    br(n.canvas, n),
    t === `gear` ? eIe(n, e) : t === `heli` ? tIe(n, e) : nIe(n, e),
    !0
  );
}
var r2 = (e) => e.ja ?? e.zh;
function i2(e, t, n, r) {
  let i = yo(e);
  return {
    zh: t ? jr(i.zh ?? i.ja, t) : (i.zh ?? i.ja),
    en: n ? jr(i.en ?? i.ja, n) : (i.en ?? i.ja),
    ja: r ? jr(i.ja, r) : i.ja,
  };
}
function iIe(e) {
  let t = yo(e);
  return {
    ja: t.ja,
    zh: `「${t.ja}」${t.zh ?? ``}`,
    en: `「${t.ja}」 ${t.en ?? ``}`,
  };
}
var a2 = (e, t) =>
  Array.from({ length: t }, (t, n) => iIe(`police.bark.${e}.${n + 1}`));
function aIe() {
  return {
    freeze: a2(`freeze`, 4),
    dontRun: a2(`dontrun`, 3),
    getOut: a2(`getout`, 2),
    dropWeapon: a2(`dropweapon`, 2),
    shotsFired: a2(`shotsfired`, 2),
    spotted: a2(`spotted`, 2),
    officerDown: a2(`officerdown`, 1),
    arrest: a2(`arrest`, 2),
    ticket: a2(`ticket`, 2),
    pullOver: a2(`pullover`, 4),
    pullOverScooter: a2(`pullovermoto`, 2),
    backup: a2(`backup`, 1),
    onFootChase: a2(`onfoot`, 1),
  };
}
function oIe() {
  return {
    police: i2(`police.speaker.police`),
    dispatch: i2(`police.speaker.dispatch`),
    megaphone: i2(`police.speaker.police`),
  };
}
function sIe() {
  return {
    lost: i2(`police.radio.lost`),
    heli: i2(`police.radio.heli`),
    swat: i2(`police.radio.swat`),
    reported: i2(`police.radio.reported`),
    reacquired: i2(`police.radio.reacquired`),
  };
}
var cIe = {
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
  lIe = (e) => i2(`police.crime.${cIe[e] ?? `assault`}`);
function uIe(e, t) {
  let n = Math.atan2(e, -t);
  return i2(
    `police.dir.${`nesw`[((Math.round(n / (Math.PI / 2)) % 4) + 4) % 4]}`,
  );
}
function dIe(e) {
  if (!e) return i2(`police.vehicle.car`);
  let t = e.kind;
  return t === `taxi` || t === `cab`
    ? i2(`police.vehicle.taxi`)
    : t === `police`
      ? i2(`police.vehicle.police`)
      : t === `mamachari`
        ? i2(`police.vehicle.bicycle`)
        : t === `van` || t === `bus` || t === `ambulance`
          ? i2(`police.vehicle.van`)
          : t === `truck` || t === `garbage`
            ? i2(`police.vehicle.truck`)
            : e.spec?.twoWheeler
              ? i2(`police.vehicle.bike`)
              : i2(`police.vehicle.car`);
}
var o2 = (e, t, n) => {
    let r = e.roadAt(t, n),
      i = r && !r.pedestrian ? e.address(r, t, n) : null;
    if (i) return i;
    let a = e.districtAt(t, n).name,
      o = e.locationLabel(t, n);
    return o.zh === a.zh ? (Ct(e, t, n) ?? a) : o;
  },
  fIe = {
    crimeLine(e, t, n, r) {
      let i = o2(e, n, r),
        a = lIe(t);
      return i2(
        `police.radio.crime`,
        { area: i.zh, name: a.zh },
        { area: i.en, name: a.en },
        { area: r2(i), name: a.ja },
      );
    },
    fleeLine(e, t, n, r, i, a) {
      let o = Ct(e, t, n) ?? e.districtAt(t, n).name,
        s = uIe(r, i);
      if (!a)
        return i2(
          `police.radio.flee-foot`,
          { area: o.zh, town: s.zh },
          { area: o.en, town: s.en },
          { area: r2(o), town: s.ja },
        );
      let c = dIe(a);
      return i2(
        `police.radio.flee-car`,
        { area: o.zh, town: s.zh, item: c.zh },
        { area: o.en, town: s.en, item: c.en },
        { area: r2(o), town: s.ja, item: c.ja },
      );
    },
    lostLine(e, t, n) {
      let r = o2(e, t, n);
      return i2(
        `police.radio.lost-sight`,
        { area: r.zh },
        { area: r.en },
        { area: r2(r) },
      );
    },
    roadblockLine(e, t, n, r) {
      if (!t) return i2(`police.radio.roadblock-ahead`);
      let i = e.streetLabel(t, n, r).full;
      return i2(
        `police.radio.roadblock`,
        { area: i.zh },
        { area: i.en },
        { area: r2(i) },
      );
    },
    ticketLine(e) {
      let t = Se(e, ze);
      return i2(`police.ticket`, { price: t }, { price: t });
    },
  },
  pIe = [
    { cars: 0, swat: 0, heli: !1, roadblocks: 0, foot: 0 },
    { cars: 1, swat: 0, heli: !1, roadblocks: 0, foot: 3 },
    { cars: 3, swat: 0, heli: !1, roadblocks: 0, foot: 4 },
    { cars: 4, swat: 0, heli: !1, roadblocks: 1, foot: 5 },
    { cars: 5, swat: 0, heli: !0, roadblocks: 2, foot: 6 },
    { cars: 5, swat: 1, heli: !0, roadblocks: 2, foot: 6 },
  ],
  s2 = { car: 9e3, scooter: 7e3 },
  mIe = 3901128,
  c2 = { w: 3.4, d: 3, h: 3 },
  l2 = { x: 1.05, z: 2.15 },
  u2 = {
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
  d2 = 32,
  f2 = 192,
  p2 = 320,
  m2 = (e) => ({
    u0: e[0] / 512,
    v0: 1 - (e[1] + e[3]) / 512,
    u1: (e[0] + e[2]) / 512,
    v1: 1 - e[1] / 512,
  }),
  hIe = (e) => m2([e * d2 + 2, p2, 28, f2]);
