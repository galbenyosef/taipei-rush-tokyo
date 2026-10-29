// tokyo/assets/net-PtwKfaxg 03 — math
// Lines 1533-1664 of readable/tokyo/assets/net-PtwKfaxg.pretty.js (statement-aligned).
function Ge(e) {
  return [
    e.id,
    e.kind,
    R(e.x, 100),
    R(e.y, 100),
    R(e.z, 100),
    R(e.heading, 1e3),
    R(e.vx, 10),
    R(e.vz, 10),
    R(e.pitch, 1e3),
    R(e.roll, 1e3),
    R(e.health, 1),
    e.flags,
    e.look,
    e.color >>> 0,
    R(e.seed, 1e3),
    R(e.phase % (Math.PI * 2), 100),
    R(e.stride, 100),
    R(e.aim, 100),
    R(e.crouch, 100),
    e.gun,
    R(e.flinch, 100),
    R(e.reach, 100),
    R(e.ride, 100),
    R(e.fall, 100),
    e.shot,
  ];
}
function Ke(e) {
  if (
    !Array.isArray(e) ||
    e.length !== 25 ||
    typeof e[0] != `string` ||
    !/^[och]\d{1,10}(?::\d{1,10})?$/.test(e[0]) ||
    e
      .slice(1)
      .some(
        (e) =>
          typeof e != `number` || !Number.isFinite(e) || !Number.isInteger(e),
      )
  )
    return null;
  let t = e,
    n = t.slice(1);
  return n[0] < 0 ||
    n[0] > 2 ||
    t[0][0] !== [`o`, `c`, `h`][n[0]] ||
    Math.abs(n[1]) > 3e7 ||
    Math.abs(n[3]) > 3e7 ||
    Math.abs(n[2]) > 2e5 ||
    Math.abs(n[4]) > 1e7 ||
    Math.abs(n[5]) > 2e3 ||
    Math.abs(n[6]) > 2e3 ||
    n[9] < 0 ||
    n[9] > 2e3 ||
    n[10] < 0 ||
    n[10] > 31 ||
    n[11] < 0 ||
    n[11] > 31 ||
    n[12] < 0 ||
    n[12] > 16777215 ||
    n[23] < 0 ||
    n[23] > 1e9
    ? null
    : {
        id: t[0],
        kind: n[0],
        x: n[1] / 100,
        y: n[2] / 100,
        z: n[3] / 100,
        heading: n[4] / 1e3,
        vx: n[5] / 10,
        vz: n[6] / 10,
        pitch: z(n[7] / 1e3, -Math.PI, Math.PI),
        roll: z(n[8] / 1e3, -Math.PI, Math.PI),
        health: n[9],
        flags: n[10],
        look: n[11],
        color: n[12],
        seed: z(n[13] / 1e3, 0, 1),
        phase: n[14] / 100,
        stride: z(n[15] / 100, 0, 2),
        aim: z(n[16] / 100, 0, 1),
        crouch: z(n[17] / 100, 0, 1),
        gun: z(n[18], 0, 2),
        flinch: z(n[19] / 100, 0, 1),
        reach: z(n[20] / 100, 0, 1),
        ride: z(n[21] / 100, 0, 1),
        fall: z(n[22] / 100, 0, 1),
        shot: n[23],
      };
}
function qe(e, t, n) {
  let r = [],
    i = [],
    a = () => ({ t: `police-state`, owner: e, seq: t, units: i });
  for (let e of n) {
    let t = Ge(e);
    (i.push(t),
      JSON.stringify(a()).length > 1200 &&
        (i.pop(), i.length && r.push(a()), (i = [t])));
  }
  return (i.length && r.push(a()), r);
}
function B(e, t) {
  return Math.hypot(e.x - t.x, e.z - t.z, (e.y - t.y) * 0.35);
}
function Je(e, t) {
  return Math.hypot(e.x - t.x, e.y - t.y, e.z - t.z);
}
function Ye(e, t) {
  if (t === `vehicle`) return { range: 12, amount: 180, gap: 350 };
  if (t === `explosion`) return { range: 35, amount: 180, gap: 250 };
  if (t !== `player`) return null;
  switch (e) {
    case `fists`:
      return { range: 4, amount: 35, gap: 160 };
    case `bat`:
      return { range: 5, amount: 65, gap: 200 };
    case `pistol`:
      return { range: 100, amount: 65, gap: 100 };
    case `smg`:
      return { range: 140, amount: 40, gap: 45 };
    case `shotgun`:
      return { range: 65, amount: 150, gap: 400 };
    case `rifle`:
      return { range: 200, amount: 90, gap: 65 };
    default:
      return null;
  }
}
