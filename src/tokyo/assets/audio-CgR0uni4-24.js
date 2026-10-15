// tokyo/assets/audio-CgR0uni4 24 — test
// Lines 11614-11679 of readable/tokyo/assets/audio-CgR0uni4.pretty.js (statement-aligned).
function Oi(e, t = !1) {
  let n = typeof e == `string` ? e : String(e ?? ``),
    r = t ? n + `|2` : n,
    i = Di.get(r);
  return (i === void 0 && Di.set(r, (i = ki(n, t))), i);
}
function ki(e, t) {
  return e === `mamachari`
    ? `engine_pedal`
    : /gogoro|electric|^ev\b|_ev\b|ev_|escooter/i.test(e)
      ? `engine_ev`
      : /superbike|heavy|cruiser|sport_?bike|big_?bike/i.test(e)
        ? `engine_motorcycle`
        : e === `scooter` || /moto|bike/i.test(e) || t
          ? `engine_scooter`
          : e === `bus` || e === `garbage` || e === `truck`
            ? `engine_bus`
            : e === `sports` || e === `police`
              ? `engine_sports`
              : `engine_car`;
}
var Ai =
  /interior|indoor|store|shop|mart|hall|temple|shrine|observ|lobby|room|concourse|mall|elevator|museum|station/i;
function ji(e) {
  return /store|shop|mart/i.test(e)
    ? `store`
    : /temple|shrine/i.test(e)
      ? `temple`
      : /station|concourse/i.test(e)
        ? `station`
        : /hall|observ|lobby|mall|museum/i.test(e)
          ? `hall`
          : `room`;
}
var Mi = {
  xinyi: 1,
  ximending: 1,
  zhongshan: 0.9,
  daan: 0.85,
  songshan: 0.85,
  zhongzheng: 0.8,
  wanhua: 0.75,
  shilin: 0.85,
  riverside: 0.35,
};
function Ni(e, t, n) {
  return Si(
    Math.max(Math.abs(e - n.x) - n.w / 2, 0),
    Math.max(Math.abs(t - n.z) - n.d / 2, 0),
  );
}
function Pi(e) {
  return e < 5
    ? 0.25 + (0.1 * (5 - e)) / 5
    : e < 7
      ? 0.3 + (0.35 * (e - 5)) / 2
      : e < 9.5
        ? 1
        : e < 16.5
          ? 0.8
          : e < 20
            ? 1
            : e < 23
              ? 0.75
              : 0.45;
}
