// tokyo/assets/region-tokyo-d-roppongi-Cde5Mv3w 03 — fillstyle
// Lines 639-1098 of readable/tokyo/assets/region-tokyo-d-roppongi-Cde5Mv3w.pretty.js (statement-aligned).
function xe(e, t) {
  return (i, a, o, s, c) => {
    let l = new n(r(`rop-shop`, e, t));
    i.globalAlpha = 1;
    let u = (e, t, n, r, i) => {
        let c = s / e,
          l = (r - n) / t;
        for (let r = 0; r < t; r++)
          for (let t = 0; t < e; t++)
            i(a + t * c, o + n + r * l, c, l, r * e + t);
      },
      d = (e, t) => {
        for (let n = 0; n < e; n++) {
          let e = a + s * (0.12 + l.next() * 0.76),
            r = c * (0.38 + l.next() * 0.1);
          ((i.fillStyle = t[n % t.length]),
            i.beginPath(),
            i.arc(e, o + c - r - c * 0.03, s * 0.022, 0, Math.PI * 2),
            i.fill(),
            i.fillRect(e - s * 0.026, o + c - r, s * 0.052, r * 0.62));
        }
      };
    switch (e) {
      case `bar`:
      case `club`: {
        O(i, a, o, s, c, e === `club` ? `#14081e` : `#1c120c`);
        let n = e === `club` ? `#3a1458` : `#3a2416`;
        O(i, a, o + c * 0.12, s, c * 0.42, n);
        for (let e = 0; e < 3; e++)
          for (let n = 0; n < 26; n++) {
            let r = a + s * (0.03 + n * 0.037),
              l = o + c * (0.16 + e * 0.12);
            ((i.fillStyle = [
              `#d8a040`,
              `#8acf6a`,
              `#e8e0c8`,
              `#c84a2a`,
              `#5aa0d8`,
            ][(n + e * 3 + t) % 5]),
              i.fillRect(r, l + c * 0.02, s * 0.012, c * 0.08));
          }
        for (let t = 0; t < 3; t++)
          O(
            i,
            a,
            o + c * (0.27 + t * 0.12),
            s,
            c * 0.008,
            e === `club` ? `#ff5ad0` : `#ffd890`,
          );
        (O(i, a, o + c * 0.6, s, c * 0.06, `#5a3a22`),
          O(i, a, o + c * 0.66, s, c * 0.22, `#2a1a10`));
        for (let e = 0; e < 7; e++)
          O(
            i,
            a + s * (0.06 + e * 0.14),
            o + c * 0.74,
            s * 0.015,
            c * 0.18,
            `#202020`,
          );
        if (e === `club`) {
          i.globalAlpha = 0.35;
          for (let e = 0; e < 5; e++)
            ((i.fillStyle = [`#ff2fd0`, `#3fe0ff`, `#7a3cff`][e % 3]),
              i.beginPath(),
              i.moveTo(a + s * (0.1 + e * 0.2), o),
              i.lineTo(a + s * (0.02 + e * 0.2), o + c),
              i.lineTo(a + s * (0.2 + e * 0.2), o + c),
              i.fill());
          ((i.globalAlpha = 1),
            (i.fillStyle = `#d8d8e8`),
            i.beginPath(),
            i.arc(a + s * 0.5, o + c * 0.08, s * 0.03, 0, Math.PI * 2),
            i.fill());
        }
        d(3, [`#0c0c10`, `#2a1a30`, `#101820`]);
        return;
      }
      case `izakaya`:
      case `yakiniku`:
      case `kappo`:
        (O(i, a, o, s, c, e === `kappo` ? `#2a2018` : `#6a4426`),
          O(
            i,
            a,
            o + c * 0.1,
            s,
            c * 0.34,
            e === `kappo` ? `#d8c8a8` : `#e8d4a8`,
          ));
        for (let e = 0; e < 16; e++)
          (O(
            i,
            a + s * (0.03 + e * 0.06),
            o + c * 0.13,
            s * 0.045,
            c * 0.26,
            `#fffaf0`,
          ),
            I(
              i,
              [`生`, `刺`, `焼`, `串`, `鍋`, `酒`, `肉`, `魚`][(e + t) % 8],
              a + s * (0.052 + e * 0.06),
              o + c * 0.24,
              s * 0.04,
              c * 0.1,
              `#202020`,
              `800`,
              y(),
            ));
        for (let e = 0; e < 5; e++)
          ((i.fillStyle = `#ffc870`),
            i.beginPath(),
            i.arc(
              a + s * (0.1 + e * 0.2),
              o + c * 0.06,
              s * 0.025,
              0,
              Math.PI * 2,
            ),
            i.fill());
        if (
          (O(i, a, o + c * 0.56, s, c * 0.08, `#8a5a30`),
          O(i, a, o + c * 0.64, s, c * 0.36, `#4a2e18`),
          e === `yakiniku`)
        )
          for (let e = 0; e < 4; e++)
            (O(
              i,
              a + s * (0.08 + e * 0.24),
              o + c * 0.42,
              s * 0.08,
              c * 0.12,
              `#888888`,
            ),
              (i.fillStyle = `#ff6020`),
              i.beginPath(),
              i.arc(
                a + s * (0.12 + e * 0.24),
                o + c * 0.6,
                s * 0.035,
                0,
                Math.PI * 2,
              ),
              i.fill());
        ((i.globalAlpha = 0.18), (i.fillStyle = `#ffffff`));
        for (let e = 0; e < 6; e++)
          i.fillRect(a + l.next() * s, o + c * 0.3, s * 0.12, c * 0.25);
        ((i.globalAlpha = 1), d(3, [`#2a2a34`, `#3a3028`, `#203040`]));
        return;
      case `ramen`:
      case `gyudon`:
        (O(i, a, o, s, c, e === `gyudon` ? `#f4e8d0` : `#ece0c8`),
          O(i, a, o, s, c * 0.08, `#ffffff`),
          O(
            i,
            a,
            o + c * 0.12,
            s,
            c * 0.22,
            e === `gyudon` ? `#f08300` : `#c8102e`,
          ));
        for (let e = 0; e < 4; e++)
          O(
            i,
            a + s * (0.05 + e * 0.24),
            o + c * 0.15,
            s * 0.18,
            c * 0.16,
            `#fff4d8`,
          );
        O(i, a, o + c * 0.5, s, c * 0.1, `#a87040`);
        for (let e = 0; e < 8; e++)
          O(
            i,
            a + s * (0.05 + e * 0.12),
            o + c * 0.66,
            s * 0.05,
            c * 0.24,
            `#c03020`,
          );
        (O(i, a + s * 0.02, o + c * 0.38, s * 0.12, c * 0.4, `#d0d0d8`),
          d(2, [`#2a2a34`, `#304a5a`]));
        return;
      case `konbini`:
        (O(i, a, o, s, c, `#f4f6f8`),
          u(8, 3, c * 0.2, c * 0.86, (e, t, n, r, a) => {
            for (let o = 0; o < 5; o++)
              O(
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
          O(i, a, o + c * 0.1, s, c * 0.06, `#1e5aa8`),
          d(2, [`#2a2a34`, `#40303a`]));
        return;
      case `drug`:
      case `donco`:
        if (
          (O(i, a, o, s, c, `#f6ecb0`),
          u(14, 6, c * 0.08, c * 0.88, (e, n, r, a, o) => {
            for (let t = 0; t < 4; t++)
              O(
                i,
                e + r * (0.05 + t * 0.23),
                n + a * 0.15,
                r * 0.2,
                a * 0.6,
                [
                  `#e04040`,
                  `#4080e0`,
                  `#f0f0f0`,
                  `#40b060`,
                  `#f0c020`,
                  `#e080c0`,
                ][(t + o) % 6],
              );
            (o + t) % 3 == 0 &&
              (O(i, e + r * 0.1, n + a * 0.62, r * 0.8, a * 0.34, `#ffec00`),
              I(
                i,
                (o % 2 ? `¥` : ``) + (l.int(1, 30) * 100 - 2),
                e + r / 2,
                n + a * 0.79,
                r * 0.74,
                a * 0.24,
                `#e60012`,
                `900`,
              ));
          }),
          e === `donco`)
        )
          for (let e = 0; e < 5; e++)
            (O(
              i,
              a + s * (0.04 + e * 0.2),
              o + c * 0.02,
              s * 0.14,
              c * 0.07,
              `#e60012`,
            ),
              I(
                i,
                P(`roppongi.donco.pop`),
                a + s * (0.11 + e * 0.2),
                o + c * 0.055,
                s * 0.12,
                c * 0.06,
                `#ffe100`,
                `900`,
              ));
        d(3, [`#2a2a34`, `#4a3a30`, `#30404a`]);
        return;
      case `karaoke`:
        (O(i, a, o, s, c, `#2a0a14`),
          O(i, a, o + c * 0.1, s, c * 0.35, `#5a1428`));
        for (let e = 0; e < 12; e++)
          (O(
            i,
            a + s * (0.05 + (e % 6) * 0.15),
            o + c * (0.14 + Math.floor(e / 6) * 0.14),
            s * 0.12,
            c * 0.1,
            e % 3 ? `#ffe100` : `#ff5a8a`,
          ),
            I(
              i,
              `${101 + e}`,
              a + s * (0.11 + (e % 6) * 0.15),
              o + c * (0.19 + Math.floor(e / 6) * 0.14),
              s * 0.1,
              c * 0.07,
              `#2a0a14`,
              `900`,
            ));
        (O(i, a + s * 0.1, o + c * 0.55, s * 0.8, c * 0.14, `#f0e0c0`),
          O(i, a, o + c * 0.86, s, c * 0.14, `#a01020`),
          d(3, [`#202028`, `#3a2a40`, `#203040`]));
        return;
      case `restaurant`:
      case `sushi`:
        (O(i, a, o, s, c, e === `sushi` ? `#e8dcc0` : `#3a2a20`),
          O(
            i,
            a,
            o + c * 0.08,
            s,
            c * 0.4,
            e === `sushi` ? `#f4ecd8` : `#5a4030`,
          ));
        for (let e = 0; e < 5; e++)
          (O(
            i,
            a + s * (0.04 + e * 0.2),
            o + c * 0.6,
            s * 0.14,
            c * 0.05,
            `#f8f4ec`,
          ),
            O(
              i,
              a + s * (0.1 + e * 0.2),
              o + c * 0.65,
              s * 0.02,
              c * 0.25,
              `#2a2018`,
            ),
            (i.fillStyle = `#ffd890`),
            i.beginPath(),
            i.arc(
              a + s * (0.11 + e * 0.2),
              o + c * 0.57,
              s * 0.01,
              0,
              Math.PI * 2,
            ),
            i.fill());
        for (let e = 0; e < 4; e++)
          ((i.fillStyle = `#ffcf80`),
            i.beginPath(),
            i.arc(
              a + s * (0.12 + e * 0.25),
              o + c * 0.12,
              s * 0.03,
              0,
              Math.PI * 2,
            ),
            i.fill());
        (e === `sushi` && O(i, a, o + c * 0.5, s, c * 0.06, `#c8a878`),
          d(3, [`#202028`, `#3a3028`, `#2a3a48`]));
        return;
      case `kebab`:
        (O(i, a, o, s, c, `#2a2018`),
          O(i, a, o + c * 0.55, s, c * 0.45, `#c8c0b0`),
          (i.fillStyle = `#a86030`),
          i.beginPath(),
          i.moveTo(a + s * 0.24, o + c * 0.2),
          i.lineTo(a + s * 0.36, o + c * 0.2),
          i.lineTo(a + s * 0.34, o + c * 0.56),
          i.lineTo(a + s * 0.26, o + c * 0.56),
          i.fill(),
          O(i, a + s * 0.48, o + c * 0.1, s * 0.48, c * 0.4, `#f8f0d8`),
          I(
            i,
            P(`roppongi.food.kebab`),
            a + s * 0.72,
            o + c * 0.18,
            s * 0.42,
            c * 0.1,
            `#c01818`,
          ),
          I(
            i,
            P(`roppongi.food.halal`),
            a + s * 0.72,
            o + c * 0.42,
            s * 0.3,
            c * 0.07,
            `#008a4a`,
          ));
        for (let e = 0; e < 3; e++)
          O(
            i,
            a + s * (0.52 + e * 0.14),
            o + c * 0.25,
            s * 0.12,
            c * 0.12,
            `#d8a050`,
          );
        return;
      case `hotel`:
      case `lobby`:
      case `office`:
        (O(i, a, o, s, c, e === `hotel` ? `#d8ccb4` : `#cfd4d8`),
          O(i, a, o, s, c * 0.06, `#f4f0e8`));
        for (let e = 0; e < 3; e++)
          O(
            i,
            a + s * (0.55 + e * 0.14),
            o + c * 0.2,
            s * 0.1,
            c * 0.62,
            `#9aa0a4`,
          );
        (O(
          i,
          a + s * 0.08,
          o + c * 0.5,
          s * 0.36,
          c * 0.2,
          e === `hotel` ? `#5a3a24` : `#8a8a8a`,
        ),
          (i.fillStyle = `#3a7a3a`),
          i.beginPath(),
          i.arc(a + s * 0.94, o + c * 0.62, s * 0.04, 0, Math.PI * 2),
          i.fill(),
          O(i, a, o + c * 0.88, s, c * 0.12, `#a8a098`),
          d(2, [`#202028`, `#2a3a48`]));
        return;
      case `cafe`:
        (O(i, a, o, s, c, `#5a3a28`),
          O(i, a + s * 0.05, o + c * 0.15, s * 0.9, c * 0.3, `#d8b890`));
        for (let e = 0; e < 4; e++)
          O(
            i,
            a + s * (0.08 + e * 0.23),
            o + c * 0.6,
            s * 0.12,
            c * 0.05,
            `#e8d8c0`,
          );
        d(2, [`#2a2a34`, `#40303a`]);
        return;
      case `arcade`:
        (O(i, a, o, s, c, `#14141c`),
          u(4, 1, c * 0.04, c * 0.98, (e, n, r, a, o) => {
            let s = [`#ff2d87`, `#1e90ff`, `#ffd400`, `#30d0a0`][(o + t) % 4];
            (O(i, e + r * 0.04, n, r * 0.92, a, s),
              O(i, e + r * 0.1, n + a * 0.12, r * 0.8, a * 0.56, `#f4fbff`));
            for (let t = 0; t < 12; t++)
              ((i.fillStyle = [
                `#ffb0c8`,
                `#ffe080`,
                `#a0d8ff`,
                `#c8a0ff`,
                `#ffffff`,
                `#ff8060`,
              ][(t + o * 3) % 6]),
                i.beginPath(),
                i.arc(
                  e + r * (0.18 + l.next() * 0.64),
                  n + a * (0.5 + l.next() * 0.16),
                  r * (0.06 + l.next() * 0.05),
                  0,
                  Math.PI * 2,
                ),
                i.fill());
            (O(i, e + r * 0.1, n + a * 0.7, r * 0.8, a * 0.12, `#30303a`),
              I(
                i,
                `1PLAY ¥100`,
                e + r / 2,
                n + a * 0.76,
                r * 0.7,
                a * 0.07,
                `#ffffff`,
                `900`,
              ));
          }));
        return;
    }
  };
}
