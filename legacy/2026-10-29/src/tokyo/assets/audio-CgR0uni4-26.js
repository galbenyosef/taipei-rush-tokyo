// tokyo/assets/audio-CgR0uni4 26 — bike
// Lines 12714-12747 of readable/tokyo/assets/audio-CgR0uni4.pretty.js (statement-aligned).
function Bi(e, t) {
  if (e === `engine_scooter`) return t < 0.4 ? 0 : $(0.28 + t / 16, 0, 0.92);
  if (e === `engine_ev`) return $(t / 22, 0, 1);
  let n =
    e === `engine_bus`
      ? Ii
      : e === `engine_sports`
        ? Li
        : e === `engine_motorcycle`
          ? Ri
          : zi;
  if (t < 0.4) return 0;
  for (let e = 1; e < n.length; e++)
    if (t < n[e])
      return $(0.18 + 0.72 * ((t - n[e - 1]) / (n[e] - n[e - 1])), 0, 1);
  return 0.95;
}
var Vi = {
    setPosition() {},
    setVolume() {},
    setRate() {},
    setParam() {},
    stop() {},
  },
  Hi = (e) => /superbike|heavy|cruiser|sport_?bike|big_?bike/i.test(e),
  Ui = (e) => /gogoro|electric|^ev\b|_ev\b|ev_|escooter|mamachari/i.test(e),
  Wi = 0;
function Gi(e) {
  try {
    e();
  } catch (e) {
    Wi++ < 3 && console.warn(`[audio]`, e);
  }
}
