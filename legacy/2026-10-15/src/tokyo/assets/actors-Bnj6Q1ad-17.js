// tokyo/assets/actors-Bnj6Q1ad 17 — accel
// Lines 10129-10164 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Fs(e) {
  let t = new ua(e),
    n = new Ps(e, t);
  return ((t.host = n), { player: n, cameraRig: t });
}
var Is = [
    `scooter`,
    `motorcycle`,
    `superbike`,
    `sedan`,
    `taxi`,
    `suv`,
    `van`,
    `bus`,
    `police`,
    `ambulance`,
    `garbage`,
    `sports`,
    `truck`,
  ],
  Ls = (e) => e / 3.6;
function Rs(e, t, n, r, i, a, o, s, c, l, u = 4, d = !1) {
  return {
    kind: e,
    name: { zh: t, en: n },
    halfW: r,
    halfL: i,
    height: a,
    mass: o,
    maxSpeed: Ls(s),
    accel: c,
    twoWheeler: d,
    seats: u,
    colors: l,
  };
}
