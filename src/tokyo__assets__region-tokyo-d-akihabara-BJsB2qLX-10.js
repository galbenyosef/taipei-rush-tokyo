// tokyo__assets__region-tokyo-d-akihabara-BJsB2qLX 10 — price
// Lines 2668-2899 of readable/tokyo__assets__region-tokyo-d-akihabara-BJsB2qLX.pretty.js (statement-aligned).
function $e(e) {
  return (t, n, r, i, a) => {
    if (e === `maid`) {
      (D(t, n, r, i, a, `#ffe0f0`),
        D(t, n + i * 0.06, r + a * 0.04, i * 0.88, a * 0.2, `#ff5aa0`),
        I(
          t,
          N(`akiba.maid.name.1`),
          n + i / 2,
          r + a * 0.14,
          i * 0.8,
          a * 0.14,
          `#ffffff`,
          `900`,
        ),
        I(
          t,
          P(`akiba.maid.aboard`, { n: 3 }),
          n + i / 2,
          r + a * 0.36,
          i * 0.86,
          a * 0.1,
          `#e0407a`,
          `900`,
        ),
        I(
          t,
          N(`akiba.maid.menu`),
          n + i / 2,
          r + a * 0.52,
          i * 0.86,
          a * 0.08,
          `#e0407a`,
          `800`,
        ),
        I(
          t,
          P(`akiba.maid.time`, { price: `¥800` }),
          n + i / 2,
          r + a * 0.66,
          i * 0.8,
          a * 0.09,
          `#e0407a`,
          `900`,
        ));
      for (let e = 0; e < 5; e++)
        I(
          t,
          `♡`,
          n + i * (0.15 + e * 0.17),
          r + a * 0.86,
          i * 0.14,
          a * 0.12,
          `#ff4a8a`,
        );
    } else
      (D(t, n, r, i, a, `#101010`),
        D(t, n + i * 0.05, r + a * 0.04, i * 0.9, a * 0.92, `#1e3a1e`),
        I(
          t,
          N(`trade.junk.sign.junk`),
          n + i / 2,
          r + a * 0.13,
          i * 0.8,
          a * 0.14,
          `#ffe100`,
          `900`,
        ),
        I(
          t,
          P(`akiba.junk.note`, { price: `¥3,980` }),
          n + i / 2,
          r + a * 0.34,
          i * 0.86,
          a * 0.09,
          `#ffffff`,
          `800`,
        ),
        I(
          t,
          N(`akiba.junk.hdd`),
          n + i / 2,
          r + a * 0.48,
          i * 0.86,
          a * 0.09,
          `#ffffff`,
          `800`,
        ),
        I(
          t,
          N(`akiba.junk.mother`),
          n + i / 2,
          r + a * 0.62,
          i * 0.86,
          a * 0.09,
          `#ffffff`,
          `800`,
        ),
        I(
          t,
          N(`trade.junk.sign.henpin`),
          n + i / 2,
          r + a * 0.82,
          i * 0.7,
          a * 0.1,
          `#ff6060`,
          `900`,
        ));
  };
}
function et(e, t, n, r, i) {
  D(e, t, n, r, i, `#b48a52`);
  for (let a = 0; a < 3; a++) {
    let o = t + (a * r) / 3;
    (D(e, o + 2, n + 2, r / 3 - 4, i - 4, [`#c49a62`, `#a87e48`, `#bc9258`][a]),
      D(e, o + r * 0.04, n + i * 0.3, r / 3 - r * 0.08, i * 0.38, `#ffffff`),
      I(
        e,
        [
          P(`akiba.junk.bin`, { price: `¥100` }),
          P(`akiba.junk.cable`, { price: `¥200` }),
          N(`akiba.junk.hdd`),
        ][a],
        o + r / 6,
        n + i * 0.49,
        r / 3 - r * 0.1,
        i * 0.3,
        `#c00000`,
        `900`,
      ));
  }
}
function tt(e, t, n, r, i) {
  (D(e, t, n, r, i, `#f0f0f0`),
    D(e, t, n, r, i * 0.16, `#c01818`),
    I(
      e,
      N(`akiba.shop.oden`),
      t + r / 2,
      n + i * 0.08,
      r * 0.86,
      i * 0.1,
      `#ffffff`,
      `900`,
    ));
  for (let a = 0; a < 3; a++)
    for (let o = 0; o < 4; o++) {
      let s = t + r * (0.08 + o * 0.22),
        c = n + i * (0.2 + a * 0.14);
      (D(
        e,
        s,
        c,
        r * 0.18,
        i * 0.1,
        [`#e8c060`, `#c04020`, `#f0f0e0`, `#4060a0`][(a + o) % 4],
      ),
        D(e, s, c + i * 0.105, r * 0.18, i * 0.02, `#202020`));
    }
  (D(e, t + r * 0.1, n + i * 0.66, r * 0.8, i * 0.1, `#303038`),
    D(e, t + r * 0.2, n + i * 0.84, r * 0.6, i * 0.1, `#202024`));
}
function nt(e, t, n, r, i) {
  (D(e, t, n, r, i, `#ffffff`),
    D(e, t, n, r, i * 0.32, `#1d5aa8`),
    I(
      e,
      N(`akiba.street.hokoten-board`),
      t + r / 2,
      n + i * 0.16,
      r * 0.9,
      i * 0.22,
      `#ffffff`,
      `900`,
    ),
    I(
      e,
      N(`akiba.street.hokoten-hours`),
      t + r / 2,
      n + i * 0.48,
      r * 0.92,
      i * 0.12,
      `#1a1a1a`,
      `800`,
    ),
    I(
      e,
      N(`akiba.street.hokoten-rule`),
      t + r / 2,
      n + i * 0.66,
      r * 0.92,
      i * 0.1,
      `#c01818`,
      `800`,
    ),
    I(
      e,
      N(`akiba.street.satsuei`),
      t + r / 2,
      n + i * 0.82,
      r * 0.92,
      i * 0.09,
      `#1a1a1a`,
      `700`,
    ));
}
function rt(e, t, n, r, i) {
  (D(e, t, n, r, i, `#5a4a32`),
    D(e, t + 3, n + 3, r - 6, i - 6, `#2c241a`),
    I(
      e,
      N(`akiba.bridge.plate`),
      t + r * 0.32,
      n + i / 2,
      r * 0.5,
      i * 0.66,
      `#d8c8a0`,
      `800`,
      p(),
    ),
    I(
      e,
      N(`akiba.bridge.plate-kana`),
      t + r * 0.76,
      n + i / 2,
      r * 0.4,
      i * 0.36,
      `#d8c8a0`,
      `700`,
      p(),
    ));
}
