// tokyo/assets/actors-qKVitB-C 16 — accel
// Lines 4932-4971 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Vo(e) {
  return e.replace(
    /[&<>"']/g,
    (e) =>
      ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` })[
        e
      ],
  );
}
var Ho = [
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
  Uo = (e) => e / 3.6;
function Wo(e, t, n, r, i, a, o, s, c, l, u = 4, d = !1) {
  return {
    kind: e,
    name: { zh: t, en: n },
    halfW: r,
    halfL: i,
    height: a,
    mass: o,
    maxSpeed: Uo(s),
    accel: c,
    twoWheeler: d,
    seats: u,
    colors: l,
  };
}
