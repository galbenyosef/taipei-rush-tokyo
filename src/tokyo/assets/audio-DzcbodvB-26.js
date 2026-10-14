// tokyo/assets/audio-DzcbodvB 26 — bike
// Lines 12540-12573 of readable/tokyo/assets/audio-DzcbodvB.pretty.js (statement-aligned).
function Di(e, t) {
  if (e === `engine_scooter`) return t < 0.4 ? 0 : $(0.28 + t / 16, 0, 0.92);
  if (e === `engine_ev`) return $(t / 22, 0, 1);
  let n =
    e === `engine_bus`
      ? Ci
      : e === `engine_sports`
        ? wi
        : e === `engine_motorcycle`
          ? Ti
          : Ei;
  if (t < 0.4) return 0;
  for (let e = 1; e < n.length; e++)
    if (t < n[e])
      return $(0.18 + 0.72 * ((t - n[e - 1]) / (n[e] - n[e - 1])), 0, 1);
  return 0.95;
}
var Oi = {
    setPosition() {},
    setVolume() {},
    setRate() {},
    setParam() {},
    stop() {},
  },
  ki = (e) => /superbike|heavy|cruiser|sport_?bike|big_?bike/i.test(e),
  Ai = (e) => /gogoro|electric|^ev\b|_ev\b|ev_|escooter|mamachari/i.test(e),
  ji = 0;
function Mi(e) {
  try {
    e();
  } catch (e) {
    ji++ < 3 && console.warn(`[audio]`, e);
  }
}
