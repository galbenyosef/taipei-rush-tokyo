// tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_ 05 — acc
// Lines 1437-1548 of readable/tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_.pretty.js (statement-aligned).
function je(e) {
  return (t, n, r, i, a) => {
    (O(t, n, r, i, a, `#c9a24a`),
      O(t, n + i * 0.08, r + a * 0.05, i * 0.84, a * 0.9, `#14140f`),
      _(
        t,
        P(e),
        n + i / 2,
        r + a * 0.1,
        r + a * 0.9,
        i * 0.62,
        `#e8c870`,
        y(),
        `900`,
      ));
  };
}
function Me(e, t, n, r, i) {
  (O(e, t, n, r, i, `#f4efe2`),
    O(e, t, n, r, i * 0.22, `#5a3a20`),
    I(
      e,
      P(`roppongi.hie.name`),
      t + r / 2,
      n + i * 0.11,
      r * 0.7,
      i * 0.15,
      `#ffffff`,
      `900`,
      y(),
    ),
    I(
      e,
      P(`roppongi.hie.hours`),
      t + r / 2,
      n + i * 0.36,
      r * 0.8,
      i * 0.1,
      `#2a2a2a`,
      `800`,
    ),
    I(
      e,
      P(`roppongi.hie.escalator-note`),
      t + r / 2,
      n + i * 0.52,
      r * 0.86,
      i * 0.08,
      `#2a2a2a`,
      `700`,
    ),
    I(
      e,
      P(`roppongi.hie.matsuri`),
      t + r / 2,
      n + i * 0.68,
      r * 0.5,
      i * 0.09,
      `#c8102e`,
      `900`,
      y(),
    ),
    I(
      e,
      P(`roppongi.hie.kinen`),
      t + r / 2,
      n + i * 0.86,
      r * 0.6,
      i * 0.08,
      `#2a2a2a`,
      `800`,
    ));
}
function Ne(e, t, n, r) {
  return (i, a, o, s, c) => {
    (D(i, a, o, s, c, t, 0.5),
      r
        ? (I(i, P(e), a + s / 2, o + c * 0.4, s * 0.86, c * 0.46, n, `900`),
          I(i, P(r), a + s / 2, o + c * 0.8, s * 0.86, c * 0.2, n, `700`))
        : I(i, P(e), a + s / 2, o + c / 2, s * 0.86, c * 0.6, n, `900`));
  };
}
var Pe = { E: [1, 0], W: [-1, 0], N: [0, -1], S: [0, 1] },
  Fe = 4.2,
  Ie = 3.3,
  Le = (e) => Fe + (e.floors - 1) * Ie + 0.9,
  Re =
    `roppongi.bar.luna,roppongi.bar.shot7,roppongi.bar.mirage,roppongi.bar.bull,roppongi.bar.goal,roppongi.bar.oasis,roppongi.bar.vino,roppongi.bar.star,roppongi.bar.shamrock,roppongi.bar.gemini,roppongi.bar.velvet,roppongi.bar.noir,roppongi.bar.orchid,roppongi.bar.harbor,roppongi.bar.eclipse,roppongi.bar.hideout,roppongi.bar.azur,roppongi.bar.mojito,roppongi.bar.kyoko,roppongi.bar.aoi,roppongi.bar.darts,roppongi.bar.girls,roppongi.bar.shotbar,roppongi.bar.karaokebar,roppongi.bar.shisha,roppongi.word.massage,roppongi.word.yakiniku,roppongi.word.korean,roppongi.word.izakaya,roppongi.word.eikaiwa,roppongi.word.clinic,roppongi.word.sushi`.split(
      `,`,
    ),
  ze = [
    `roppongi.word.korean`,
    `roppongi.food.samgyeop`,
    `roppongi.word.yakiniku`,
    `roppongi.bar.kyoko`,
    `roppongi.bar.aoi`,
    `roppongi.akasaka.club`,
    `roppongi.word.izakaya`,
    `roppongi.word.sushi`,
    `roppongi.bar.orchid`,
    `roppongi.word.massage`,
    `roppongi.bar.vino`,
    `roppongi.akasaka.koreatown`,
    `roppongi.word.clinic`,
    `roppongi.bar.shotbar`,
    `roppongi.food.shabu`,
  ],
  Be = [16727968, 4186367, 11824127, 16767050, 16734778, 5832602];
function Ve(e, t) {
  let [n, r, i] = F(e);
  return { main: `brand.${e}`, top: t, bg: n, fg: r, acc: i };
}
