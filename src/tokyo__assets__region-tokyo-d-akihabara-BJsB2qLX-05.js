// tokyo__assets__region-tokyo-d-akihabara-BJsB2qLX 05 — fillstyle
// Lines 929-1458 of readable/tokyo__assets__region-tokyo-d-akihabara-BJsB2qLX.pretty.js (statement-aligned).
function je(e, n) {
  return (i, a, o, s, c) => {
    let l = new t(r(`akiba-shop`, e, n));
    ((i.globalAlpha = 1),
      D(
        i,
        a,
        o,
        s,
        c,
        e === `drug` || e === `donco`
          ? `#f6ecb0`
          : e === `maid`
            ? `#ffe0ee`
            : e === `kebab` || e === `ramen`
              ? `#e8d8c0`
              : `#eef0f2`,
      ),
      D(i, a, o, s, c * 0.08, `#fafaf4`));
    for (let e = a + s * 0.05; e < a + s; e += s * 0.16)
      D(i, e, o + c * 0.02, s * 0.1, c * 0.03, `#ffffff`);
    D(i, a, o + c * 0.86, s, c * 0.14, `#b8b4ac`);
    let u = (e, t, n, r, i) => {
      let c = s / e,
        l = (r - n) / t;
      for (let r = 0; r < t; r++)
        for (let t = 0; t < e; t++)
          i(a + t * c, o + n + r * l, c, l, r * e + t);
    };
    switch (e) {
      case `gacha`:
        (D(i, a, o, s, c, `#2a2a30`),
          u(10, 3, c * 0.05, c * 0.95, (e, t, r, a, o) => {
            let s = [`#f4f4f6`, `#ffd6e6`, `#d6ecff`, `#fff2b0`, `#e0ffe0`][
              (o * 7 + n) % 5
            ];
            (D(i, e + r * 0.06, t + a * 0.04, r * 0.88, a * 0.92, s),
              D(i, e + r * 0.14, t + a * 0.08, r * 0.72, a * 0.38, `#cfe6f0`));
            for (let n = 0; n < 9; n++)
              ((i.fillStyle = [
                `#ff4060`,
                `#40a0ff`,
                `#ffd040`,
                `#60d060`,
                `#ffffff`,
                `#c060ff`,
              ][(n + o) % 6]),
                i.beginPath(),
                i.arc(
                  e + r * (0.22 + (n % 3) * 0.28),
                  t + a * (0.16 + Math.floor(n / 3) * 0.1),
                  r * 0.1,
                  0,
                  Math.PI * 2,
                ),
                i.fill());
            (D(
              i,
              e + r * 0.14,
              t + a * 0.5,
              r * 0.72,
              a * 0.24,
              [`#ff7a3a`, `#3a8aff`, `#ff4a9a`, `#2ab07a`, `#8a5aff`][
                (o + n * 3) % 5
              ],
            ),
              D(i, e + r * 0.3, t + a * 0.54, r * 0.4, a * 0.13, `#ffffff`),
              I(
                i,
                [`¥300`, `¥400`, `¥500`][(o + n) % 3],
                e + r / 2,
                t + a * 0.68,
                r * 0.6,
                a * 0.08,
                `#ffffff`,
                `900`,
              ),
              (i.fillStyle = `#808088`),
              i.beginPath(),
              i.arc(e + r / 2, t + a * 0.84, r * 0.12, 0, Math.PI * 2),
              i.fill());
          }));
        break;
      case `crane`:
        (D(i, a, o, s, c, `#14141c`),
          u(4, 1, c * 0.04, c * 0.98, (e, t, r, a, o) => {
            let s = [`#ff2d87`, `#1e90ff`, `#ffd400`, `#30d0a0`][(o + n) % 4];
            (D(i, e + r * 0.04, t, r * 0.92, a, s),
              D(i, e + r * 0.1, t + a * 0.12, r * 0.8, a * 0.56, `#f4fbff`));
            for (let n = 0; n < 14; n++)
              ((i.fillStyle = [
                `#ffb0c8`,
                `#ffe080`,
                `#a0d8ff`,
                `#c8a0ff`,
                `#ffffff`,
                `#ff8060`,
                `#80e0a0`,
              ][(n + o * 3) % 7]),
                i.beginPath(),
                i.arc(
                  e + r * (0.18 + l.next() * 0.64),
                  t + a * (0.5 + l.next() * 0.16),
                  r * (0.06 + l.next() * 0.05),
                  0,
                  Math.PI * 2,
                ),
                i.fill());
            (D(
              i,
              e + r * 0.36,
              t + a * 0.32,
              r * 0.28,
              a * 0.18,
              [`#2050c0`, `#c02040`, `#20a060`][(o + n) % 3],
            ),
              D(i, e + r * 0.48, t + a * 0.12, r * 0.04, a * 0.12, `#c8c8d0`),
              D(i, e + r * 0.42, t + a * 0.23, r * 0.16, a * 0.03, `#c8c8d0`),
              D(i, e + r * 0.1, t + a * 0.7, r * 0.8, a * 0.12, `#30303a`),
              I(
                i,
                `1PLAY ¥100`,
                e + r / 2,
                t + a * 0.76,
                r * 0.7,
                a * 0.07,
                `#ffffff`,
                `900`,
              ),
              D(i, e + r * 0.1, t + a * 0.84, r * 0.8, a * 0.14, s));
          }));
        break;
      case `figure`:
        u(6, 3, c * 0.1, c * 0.86, (e, t, n, r, a) => {
          D(i, e + n * 0.04, t + r * 0.04, n * 0.92, r * 0.92, `#dfe8ee`);
          for (let o = 0; o < 3; o++) {
            let s = e + n * (0.2 + o * 0.3),
              c = t + r * 0.86;
            ((i.fillStyle = [`#f0c8a8`, `#ffe0d0`, `#e0b090`][o]),
              i.fillRect(s - n * 0.04, c - r * 0.6, n * 0.08, r * 0.2),
              (i.fillStyle = [
                `#e04060`,
                `#4060e0`,
                `#40c080`,
                `#f0c040`,
                `#a040e0`,
                `#202030`,
              ][(o + a) % 6]),
              i.fillRect(s - n * 0.07, c - r * 0.42, n * 0.14, r * 0.42));
          }
        });
        break;
      case `pcparts`:
      case `electronics`:
        (u(14, 6, c * 0.1, c * 0.86, (e, t, r, a, o) => {
          let s = [
            `#202020`,
            `#c01818`,
            `#1a3a8a`,
            `#e8e8e8`,
            `#30a030`,
            `#f0a020`,
          ][(o * 5 + n) % 6];
          (D(i, e + r * 0.06, t + a * 0.1, r * 0.88, a * 0.66, s),
            D(
              i,
              e + r * 0.1,
              t + a * 0.78,
              r * 0.6,
              a * 0.16,
              o % 3 ? `#ffe000` : `#ff2020`,
            ));
        }),
          e === `electronics` &&
            I(
              i,
              N(`trade.electronics.sign.kangen`),
              a + s / 2,
              o + c * 0.05,
              s * 0.5,
              c * 0.06,
              `#c01818`,
            ));
        break;
      case `junk`:
        (D(i, a, o, s, c, `#c8c0b0`),
          u(5, 2, c * 0.18, c * 0.92, (e, t, r, a, o) => {
            D(i, e + r * 0.04, t + a * 0.3, r * 0.92, a * 0.68, `#b08850`);
            for (let n = 0; n < 8; n++)
              D(
                i,
                e + r * (0.08 + l.next() * 0.7),
                t + a * (0.12 + l.next() * 0.2),
                r * 0.2,
                a * 0.2,
                [`#202020`, `#606060`, `#e8e8e0`, `#304060`][n % 4],
              );
            (D(i, e + r * 0.2, t + a * 0.45, r * 0.6, a * 0.28, `#ffffff`),
              I(
                i,
                [`¥100`, `¥300`, `¥500`, `¥1,000`, `¥2,980`][(o + n) % 5],
                e + r / 2,
                t + a * 0.59,
                r * 0.55,
                a * 0.2,
                `#d01010`,
                `900`,
              ));
          }),
          I(
            i,
            N(`trade.junk.sign.junk`),
            a + s * 0.3,
            o + c * 0.1,
            s * 0.5,
            c * 0.1,
            `#202020`,
          ),
          I(
            i,
            N(`trade.junk.sign.henpin`),
            a + s * 0.75,
            o + c * 0.1,
            s * 0.4,
            c * 0.08,
            `#c01010`,
          ));
        break;
      case `dutyfree`:
      case `drug`:
      case `donco`:
        (u(14, 6, c * 0.1, c * 0.88, (t, r, a, o, s) => {
          for (let e = 0; e < 4; e++)
            D(
              i,
              t + a * (0.05 + e * 0.23),
              r + o * 0.15,
              a * 0.2,
              o * 0.6,
              [
                `#e04040`,
                `#4080e0`,
                `#f0f0f0`,
                `#40b060`,
                `#f0c020`,
                `#e080c0`,
              ][(e + s) % 6],
            );
          (s + n) % 3 == 0 &&
            (D(
              i,
              t + a * 0.1,
              r + o * 0.62,
              a * 0.8,
              o * 0.34,
              e === `drug` ? `#ffe100` : `#ffec00`,
            ),
            I(
              i,
              (s % 2 ? `¥` : ``) + (l.int(1, 30) * 100 - 2),
              t + a / 2,
              r + o * 0.79,
              a * 0.74,
              o * 0.24,
              `#e60012`,
              `900`,
            ));
        }),
          e === `dutyfree` &&
            I(
              i,
              N(`common.door.tax-free`),
              a + s / 2,
              o + c * 0.05,
              s * 0.6,
              c * 0.07,
              `#c01818`,
            ));
        break;
      case `maid`:
        (D(i, a, o, s, c, `#ffd0e4`), (i.fillStyle = `#ffb0d0`));
        for (let e = 0; e < 9; e++)
          i.fillRect(a + s * 0.3, o + c * (0.9 - e * 0.09), s * 0.4, c * 0.03);
        (D(i, a + s * 0.04, o + c * 0.2, s * 0.22, c * 0.6, `#ffffff`),
          I(
            i,
            N(`akiba.maid.menu`),
            a + s * 0.15,
            o + c * 0.35,
            s * 0.2,
            c * 0.08,
            `#e0407a`,
            `800`,
          ),
          I(
            i,
            P(`akiba.maid.time`, { price: `¥800` }),
            a + s * 0.15,
            o + c * 0.5,
            s * 0.2,
            c * 0.07,
            `#e0407a`,
            `800`,
          ));
        for (let e = 0; e < 6; e++)
          I(
            i,
            `♡`,
            a + s * (0.78 + l.next() * 0.18),
            o + c * (0.15 + l.next() * 0.6),
            s * 0.08,
            c * 0.1,
            `#ff4a8a`,
          );
        break;
      case `kebab`:
        (D(i, a, o, s, c, `#2a2018`),
          D(i, a, o + c * 0.55, s, c * 0.45, `#c8c0b0`),
          (i.fillStyle = `#a86030`),
          i.beginPath(),
          i.moveTo(a + s * 0.28, o + c * 0.2),
          i.lineTo(a + s * 0.38, o + c * 0.2),
          i.lineTo(a + s * 0.36, o + c * 0.56),
          i.lineTo(a + s * 0.3, o + c * 0.56),
          i.fill(),
          D(i, a + s * 0.5, o + c * 0.1, s * 0.46, c * 0.4, `#f8f0d8`),
          I(
            i,
            N(`akiba.band.kebab`),
            a + s * 0.73,
            o + c * 0.18,
            s * 0.4,
            c * 0.1,
            `#c01818`,
          ));
        for (let e = 0; e < 3; e++)
          D(
            i,
            a + s * (0.53 + e * 0.14),
            o + c * 0.3,
            s * 0.12,
            c * 0.12,
            `#d8a050`,
          );
        break;
      case `konbini`:
        (u(8, 3, c * 0.2, c * 0.86, (e, t, n, r, a) => {
          for (let o = 0; o < 5; o++)
            D(
              i,
              e + n * (0.04 + o * 0.19),
              t + r * 0.2,
              n * 0.16,
              r * 0.6,
              [`#e8e8e8`, `#e04040`, `#40a0e0`, `#f0d040`, `#60c060`][
                (o + a) % 5
              ],
            );
        }),
          D(i, a, o + c * 0.1, s, c * 0.06, `#1e5aa8`));
        break;
      case `karaoke`:
      case `cafe`:
      case `tea`:
        (D(i, a, o, s, c, e === `karaoke` ? `#301030` : `#5a3a28`),
          D(
            i,
            a + s * 0.1,
            o + c * 0.3,
            s * 0.8,
            c * 0.5,
            e === `karaoke` ? `#e04090` : `#d8b890`,
          ),
          I(
            i,
            N(
              e === `karaoke`
                ? `akiba.word.karaoke`
                : e === `tea`
                  ? `trade.tea-stand.name`
                  : `trade.cafe.name`,
            ),
            a + s / 2,
            o + c * 0.55,
            s * 0.7,
            c * 0.2,
            e === `karaoke` ? `#ffffff` : `#3a2010`,
          ));
        break;
      case `ramen`:
        (D(i, a, o, s, c, `#e8dcc4`),
          D(i, a, o + c * 0.5, s, c * 0.14, `#8a5a30`));
        for (let e = 0; e < 6; e++)
          D(
            i,
            a + s * (0.08 + e * 0.15),
            o + c * 0.66,
            s * 0.06,
            c * 0.22,
            `#c03020`,
          );
        D(i, a + s * 0.04, o + c * 0.2, s * 0.14, c * 0.4, `#d0d0d8`);
        break;
      case `card`:
      case `retro`:
        (D(i, a, o + c * 0.08, s, c * 0.6, `#3a3e48`),
          u(14, 5, c * 0.1, c * 0.66, (e, t, r, a, o) => {
            (D(
              i,
              e + r * 0.1,
              t + a * 0.06,
              r * 0.8,
              a * 0.7,
              [
                `#e8d8a8`,
                `#c8d8f0`,
                `#f0c8d0`,
                `#d0e8c8`,
                `#e8e8e8`,
                `#f0d8a0`,
              ][(o * 7 + n) % 6],
            ),
              D(
                i,
                e + r * 0.18,
                t + a * 0.14,
                r * 0.64,
                a * 0.4,
                [
                  `#c04030`,
                  `#3060b0`,
                  `#d0a020`,
                  `#40a070`,
                  `#8040b0`,
                  `#202020`,
                ][(o * 5 + n) % 6],
              ),
              D(i, e + r * 0.15, t + a * 0.8, r * 0.7, a * 0.16, `#ffffff`));
          }),
          D(i, a, o + c * 0.7, s, c * 0.2, `#c8d4dc`));
        for (let e = 0; e < 10; e++)
          D(
            i,
            a + s * (0.03 + e * 0.097),
            o + c * 0.73,
            s * 0.08,
            c * 0.12,
            [`#e0a040`, `#4080d0`, `#d04060`, `#40a070`, `#a060d0`][
              (e + n) % 5
            ],
          );
        D(i, a, o + c * 0.9, s, c * 0.1, `#8a929a`);
        break;
      case `anzen`:
        D(i, a, o, s, c, `#eeede6`);
        for (let e = o; e < o + c; e += c / 14)
          D(i, a, e, s, 1, `rgba(0,0,0,0.08)`);
        (D(i, a + s * 0.38, o + c * 0.18, s * 0.26, c * 0.82, `#8a98a0`),
          D(i, a + s * 0.4, o + c * 0.2, s * 0.22, c * 0.78, `#b8c8d0`),
          D(i, a + s * 0.42, o + c * 0.62, s * 0.18, c * 0.05, `#404448`),
          D(i, a + s * 0.06, o + c * 0.24, s * 0.24, c * 0.42, `#f8f8f4`));
        for (let e = 0; e < 4; e++)
          D(
            i,
            a + s * (0.08 + (e % 2) * 0.11),
            o + c * (0.27 + Math.floor(e / 2) * 0.18),
            s * 0.09,
            c * 0.14,
            [`#2050a0`, `#e0e0e0`, `#c02020`, `#f0c020`][e],
          );
        ((i.fillStyle = `#e01010`),
          i.beginPath(),
          i.arc(a + s * 0.82, o + c * 0.16, s * 0.04, 0, Math.PI * 2),
          i.fill());
        break;
      case `craft`:
      case `books`:
        D(i, a, o, s, c, `#6a4a30`);
        for (let e = 0; e < 4; e++)
          D(
            i,
            a + s * (0.1 + e * 0.22),
            o + c * 0.12,
            s * 0.02,
            c * 0.1,
            `#202020`,
          );
        for (let e = 0; e < 4; e++)
          ((i.fillStyle = `#ffd890`),
            i.beginPath(),
            i.arc(
              a + s * (0.11 + e * 0.22),
              o + c * 0.25,
              s * 0.04,
              0,
              Math.PI * 2,
            ),
            i.fill());
        u(5, 3, c * 0.35, c * 0.9, (t, n, r, a, o) => {
          D(i, t + r * 0.05, n + a * 0.85, r * 0.9, a * 0.1, `#a07850`);
          for (let s = 0; s < 5; s++)
            D(
              i,
              t + r * (0.08 + s * 0.17),
              n + a * (0.25 + (e === `books` ? 0 : 0.2)),
              r * 0.13,
              a * (e === `books` ? 0.6 : 0.4),
              [`#c04030`, `#e0d0b0`, `#305080`, `#40703a`, `#d0a040`][
                (s + o) % 5
              ],
            );
        });
    }
    if (e !== `gacha` && e !== `crane` && e !== `anzen`) {
      ((i.globalAlpha = 0.2),
        (i.fillStyle = `#f4f2ea`),
        i.fillRect(a, o, s, c * 0.86),
        (i.globalAlpha = 1));
      for (let e = 0; e < 3; e++) {
        let t = a + s * (0.15 + l.next() * 0.7),
          n = c * (0.4 + l.next() * 0.08);
        ((i.fillStyle = [`#2a2a34`, `#4a3a30`, `#30404a`][e]),
          i.beginPath(),
          i.arc(t, o + c - n - c * 0.03, s * 0.022, 0, Math.PI * 2),
          i.fill(),
          i.fillRect(t - s * 0.025, o + c - n, s * 0.05, n * 0.62));
      }
    }
  };
}
