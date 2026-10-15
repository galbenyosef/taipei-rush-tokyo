// tokyo/assets/region-tokyo-d-suidobashi-BBv4Djc2 06 — beginpath
// Lines 1353-2020 of readable/tokyo/assets/region-tokyo-d-suidobashi-BBv4Djc2.pretty.js (statement-aligned).
function Ae(e, t, n, r, i, a, o, s, c) {
  let l = (t, n, r) => {
    (z(e, t - i * 0.03, n, i * 0.06, o - n, r),
      (e.fillStyle = `#1a1410`),
      e.beginPath(),
      e.arc(t, n - a * 0.04, i * 0.022, 0, Math.PI * 2),
      e.fill());
  };
  switch (t) {
    case `ramen`:
    case `gyudon`:
    case `chinese`:
      for (let t = 0; t < 9; t++)
        z(
          e,
          n + i * (0.04 + t * 0.105),
          r + a * 0.1,
          i * 0.09,
          a * 0.12,
          t % 3 == 0 ? `#c01818` : `#f6eed8`,
        );
      for (let t = 0; t < 9; t++)
        z(
          e,
          n + i * (0.05 + t * 0.105),
          r + a * 0.13,
          i * 0.07,
          a * 0.06,
          [`#c8742a`, `#e0b060`, `#9a5a20`][t % 3],
        );
      (z(
        e,
        n,
        r + a * 0.5,
        i,
        a * 0.05,
        t === `chinese` ? `#a02018` : `#5a3a1a`,
      ),
        z(
          e,
          n,
          r + a * 0.55,
          i,
          a * 0.12,
          t === `gyudon` ? `#e8a020` : `#c8b088`,
        ));
      for (let t = 0; t < 7; t++)
        z(
          e,
          n + i * (0.12 + t * 0.12),
          r + a * 0.7,
          i * 0.04,
          a * 0.14,
          `#2a2a2a`,
        );
      for (let e = 0; e < 3; e++)
        l(
          n + i * (0.2 + e * 0.25 + s.next() * 0.05),
          r + a * 0.42,
          [`#2a2e38`, `#3a3a3a`, `#1e2430`][e],
        );
      z(e, n + i * 0.88, r + a * 0.28, i * 0.09, a * 0.56, `#d8dcdc`);
      for (let t = 0; t < 12; t++)
        z(
          e,
          n + i * (0.895 + (t % 3) * 0.025),
          r + a * (0.33 + Math.floor(t / 3) * 0.06),
          i * 0.02,
          a * 0.04,
          [`#ffe066`, `#ff8a6a`, `#9adfff`][t % 3],
        );
      ((e.globalAlpha = 0.3), (e.fillStyle = `#ffffff`));
      for (let t = 0; t < 5; t++)
        (e.beginPath(),
          e.arc(
            n + i * (0.4 + t * 0.05),
            r + a * (0.32 - (t % 2) * 0.05),
            i * 0.04,
            0,
            Math.PI * 2,
          ),
          e.fill());
      e.globalAlpha = 1;
      break;
    case `teishoku`:
      for (let t = 0; t < 14; t++)
        z(
          e,
          n + i * (0.03 + t * 0.068),
          r + a * 0.1,
          i * 0.05,
          a * 0.2,
          `#fffbe8`,
        );
      for (let t = 0; t < 14; t++)
        z(
          e,
          n + i * (0.045 + t * 0.068),
          r + a * 0.13,
          i * 0.02,
          a * 0.13,
          `#202020`,
        );
      (z(e, n + i * 0.82, r + a * 0.08, i * 0.14, a * 0.12, `#1a1a1a`),
        z(e, n + i * 0.83, r + a * 0.09, i * 0.12, a * 0.1, `#5a8ac0`));
      for (let t = 0; t < 4; t++)
        (z(
          e,
          n + i * (0.08 + t * 0.23),
          r + a * 0.6,
          i * 0.16,
          a * 0.04,
          `#8a5a30`,
        ),
          z(
            e,
            n + i * (0.1 + t * 0.23),
            r + a * 0.64,
            i * 0.02,
            a * 0.2,
            `#4a3020`,
          ),
          z(
            e,
            n + i * (0.2 + t * 0.23),
            r + a * 0.64,
            i * 0.02,
            a * 0.2,
            `#4a3020`,
          ));
      (l(n + i * 0.3, r + a * 0.48, `#3a4a6a`),
        l(n + i * 0.62, r + a * 0.5, `#5a3a3a`));
      break;
    case `ticket`:
      z(e, n, r, i, a, `#f6f6f2`);
      for (let t = 0; t < 6; t++) {
        let o = r + a * (0.06 + t * 0.085);
        z(e, n + i * 0.02, o + a * 0.072, i * 0.96, a * 0.006, `#c8c8c4`);
        for (let r = 0; r < 22; r++) {
          let s = n + i * (0.025 + r * 0.043);
          (z(e, s, o, i * 0.036, a * 0.066, `#ffffff`),
            z(
              e,
              s,
              o,
              i * 0.036,
              a * 0.016,
              [`#d01818`, `#1a4aa8`, `#1a8a3a`, `#e07a10`][(t + (r >> 2)) % 4],
            ),
            z(e, s + i * 0.004, o + a * 0.03, i * 0.026, a * 0.008, `#303030`),
            z(
              e,
              s + i * 0.004,
              o + a * 0.046,
              i * 0.018,
              a * 0.008,
              `#c01818`,
            ));
        }
      }
      z(e, n + i * 0.05, r + a * 0.62, i * 0.9, a * 0.22, `#d8e4e8`);
      for (let t = 0; t < 14; t++)
        z(
          e,
          n + i * (0.07 + t * 0.062),
          r + a * 0.66,
          i * 0.05,
          a * 0.1,
          [`#f0d0d0`, `#d0e0f0`, `#f4ecc0`][t % 3],
        );
      (z(e, n + i * 0.05, r + a * 0.61, i * 0.9, a * 0.015, `#9aa0a4`),
        l(n + i * 0.62, r + a * 0.42, `#2a3a5a`));
      break;
    case `sportsbar`:
      for (let t = 0; t < 3; t++) {
        let o = n + i * (0.06 + t * 0.32);
        (z(e, o, r + a * 0.08, i * 0.26, a * 0.26, `#101010`),
          z(e, o + i * 0.01, r + a * 0.095, i * 0.24, a * 0.23, `#2e8a3a`),
          (e.fillStyle = `#c8a070`),
          e.beginPath(),
          e.moveTo(o + i * 0.13, r + a * 0.15),
          e.lineTo(o + i * 0.19, r + a * 0.22),
          e.lineTo(o + i * 0.13, r + a * 0.3),
          e.lineTo(o + i * 0.07, r + a * 0.22),
          e.fill(),
          z(e, o + i * 0.02, r + a * 0.1, i * 0.07, a * 0.03, `#ffffff`));
      }
      for (let t = 0; t < 22; t++)
        z(
          e,
          n + i * (0.04 + t * 0.042),
          r + a * 0.38,
          i * 0.016,
          a * 0.1,
          [`#2a6a2a`, `#8a5a1a`, `#f0f0e0`, `#c01818`][s.int(0, 3)],
        );
      z(e, n, r + a * 0.56, i, a * 0.06, `#6a4424`);
      for (let e = 0; e < 5; e++)
        l(
          n + i * (0.12 + e * 0.18 + s.next() * 0.04),
          r + a * 0.5,
          [`#f0f0f0`, `#1a2a6a`, `#e86a10`, `#f0f0f0`, `#c01818`][e],
        );
      break;
    case `copyshop`:
      for (let t = 0; t < 5; t++)
        (z(
          e,
          n + i * (0.05 + t * 0.18),
          r + a * 0.5,
          i * 0.13,
          a * 0.34,
          `#e4e6e8`,
        ),
          z(
            e,
            n + i * (0.05 + t * 0.18),
            r + a * 0.46,
            i * 0.13,
            a * 0.05,
            `#9aa0a8`,
          ),
          z(
            e,
            n + i * (0.08 + t * 0.18),
            r + a * 0.52,
            i * 0.05,
            a * 0.03,
            `#40a0ff`,
          ));
      for (let t = 0; t < 6; t++)
        z(
          e,
          n + i * (0.04 + t * 0.16),
          r + a * 0.12,
          i * 0.12,
          a * 0.18,
          [`#ffe14a`, `#ffffff`, `#7ad0ff`][t % 3],
        );
      l(n + i * 0.3, r + a * 0.44, `#4a4a6a`);
      break;
    case `bigbooks`:
      for (let t = 0; t < 4; t++) {
        let o = n + i * 0.02;
        for (; o < n + i * 0.98;) {
          let n = i * (0.006 + s.next() * 0.01);
          (z(e, o, r + a * (0.1 + t * 0.12), n - 0.5, a * 0.1, c[s.int(0, 9)]),
            (o += n));
        }
        z(e, n, r + a * (0.2 + t * 0.12), i, a * 0.01, `#d8d0c0`);
      }
      for (let t = 0; t < 5; t++) {
        z(
          e,
          n + i * (0.05 + t * 0.19),
          r + a * 0.66,
          i * 0.15,
          a * 0.06,
          `#c8b898`,
        );
        for (let o = 0; o < 4; o++)
          z(
            e,
            n + i * (0.055 + t * 0.19 + o * 0.037),
            r + a * 0.6,
            i * 0.032,
            a * 0.06,
            c[s.int(0, 9)],
          );
      }
      (l(n + i * 0.42, r + a * 0.48, `#3a3a50`),
        l(n + i * 0.7, r + a * 0.5, `#6a4a3a`));
      break;
    case `goods`:
      (z(e, n, r, i, a, `#eceeef`),
        z(e, n, r + a * 0.1, i, a * 0.01, `#8a8e92`));
      for (let t = 0; t < 11; t++) {
        let o = n + i * (0.03 + t * 0.088),
          s = [
            `#f4f4f4`,
            `#1a2a6a`,
            `#e86a10`,
            `#101010`,
            `#c01818`,
            `#f4f4f4`,
            `#2a7a3a`,
          ][t % 7];
        ((e.fillStyle = s),
          e.beginPath(),
          e.moveTo(o, r + a * 0.13),
          e.lineTo(o + i * 0.072, r + a * 0.13),
          e.lineTo(o + i * 0.08, r + a * 0.2),
          e.lineTo(o + i * 0.066, r + a * 0.2),
          e.lineTo(o + i * 0.066, r + a * 0.38),
          e.lineTo(o + i * 0.006, r + a * 0.38),
          e.lineTo(o + i * 0.006, r + a * 0.2),
          e.lineTo(o - i * 0.008, r + a * 0.2),
          e.closePath(),
          e.fill(),
          V(
            e,
            String((t * 7 + 1) % 60),
            o + i * 0.036,
            r + a * 0.28,
            i * 0.04,
            a * 0.08,
            s === `#f4f4f4` ? `#1a2a6a` : `#ffffff`,
            `900`,
          ));
      }
      z(e, n + i * 0.02, r + a * 0.44, i * 0.5, a * 0.2, `#d8cbb0`);
      for (let t = 0; t < 2; t++)
        for (let o = 0; o < 9; o++)
          ((e.fillStyle = c[(o * 3 + t) % 10]),
            e.beginPath(),
            e.ellipse(
              n + i * (0.05 + o * 0.054),
              r + a * (0.5 + t * 0.08),
              i * 0.02,
              a * 0.025,
              0,
              Math.PI,
              0,
            ),
            e.fill());
      z(e, n + i * 0.58, r + a * 0.66, i * 0.12, a * 0.18, `#5a3a20`);
      for (let t = 0; t < 7; t++)
        je(
          e,
          n + i * (0.59 + t * 0.016),
          r + a * 0.68,
          n + i * (0.6 + t * 0.012),
          r + a * 0.36,
          i * 0.006,
          t % 2 ? `#d8b070` : `#202020`,
        );
      z(e, n + i * 0.74, r + a * 0.62, i * 0.24, a * 0.02, `#6a4a2a`);
      for (let t = 0; t < 5; t++)
        ((e.fillStyle = [`#a0582a`, `#3a2a1a`, `#c08040`][t % 3]),
          e.beginPath(),
          e.arc(
            n + i * (0.77 + t * 0.045),
            r + a * 0.58,
            i * 0.018,
            0,
            Math.PI * 2,
          ),
          e.fill());
      break;
    case `stationery`:
    case `drug`:
    case `konbini`: {
      z(e, n, r, i, a, t === `konbini` ? `#f6f8f8` : `#f8f6f0`);
      let o = t === `konbini` ? 4 : 5,
        c =
          t === `drug`
            ? [
                `#f4f4f4`,
                `#e8a0b8`,
                `#a0c8e8`,
                `#ffe080`,
                `#d0e8c0`,
                `#ffffff`,
                `#c8d0f0`,
                `#f0c0a0`,
              ]
            : t === `stationery`
              ? [
                  `#2a4a8a`,
                  `#b83a30`,
                  `#e8e0c8`,
                  `#3a7a4a`,
                  `#2a2a2a`,
                  `#d8b060`,
                  `#f0f0f0`,
                  `#8a5a9a`,
                ]
              : [
                  `#d8402a`,
                  `#f4f0e0`,
                  `#3a6ab0`,
                  `#e8c040`,
                  `#4a8a4a`,
                  `#f0f0f0`,
                  `#a0522d`,
                  `#202020`,
                ];
      for (let t = 0; t < o; t++) {
        let l = r + a * (0.1 + (0.56 / o) * t),
          u = n + i * 0.02;
        for (; u < n + i * 0.6;) {
          let t = i * (0.03 + s.next() * 0.05),
            n = c[s.int(0, c.length - 1)];
          for (let r = u; r < u + t - i * 0.006; r += i * 0.012)
            z(e, r, l, i * 0.0095, a * (0.06 + s.next() * 0.025), n);
          u += t;
        }
        (z(e, n + i * 0.02, l + a * 0.088, i * 0.58, a * 0.012, `#e0e0dc`),
          z(e, n + i * 0.02, l + a * 0.1, i * 0.58, a * 0.006, `#e86a4a`));
      }
      (z(
        e,
        n + i * 0.63,
        r + a * 0.16,
        i * 0.08,
        a * 0.6,
        t === `drug` ? `#ffe14a` : `#e8f0f8`,
      ),
        z(e, n + i * 0.64, r + a * 0.2, i * 0.06, a * 0.1, `#e60012`),
        z(
          e,
          n + i * 0.74,
          r + a * 0.62,
          i * 0.24,
          a * 0.22,
          t === `konbini` ? `#e8e8e8` : `#d0c8b8`,
        ),
        z(e, n + i * 0.76, r + a * 0.56, i * 0.05, a * 0.06, `#2a2a2a`),
        l(
          n + i * 0.86,
          r + a * 0.46,
          t === `drug` ? `#ffffff` : t === `konbini` ? `#3a6aa0` : `#5a4a3a`,
        ));
      break;
    }
    case `gates`:
      (z(e, n, r + a * 0.12, i, a * 0.03, `#ffd400`),
        z(e, n + i * 0.3, r + a * 0.18, i * 0.4, a * 0.1, `#101010`));
      for (let t = 0; t < 3; t++)
        z(
          e,
          n + i * (0.32 + t * 0.13),
          r + a * 0.2,
          i * 0.1,
          a * 0.025,
          t === 1 ? `#ff8a3a` : `#7af07a`,
        );
      for (let t = 0; t < 6; t++) {
        let o = n + i * (0.3 + t * 0.075);
        (z(e, o, r + a * 0.54, i * 0.035, a * 0.3, `#b8bcc0`),
          z(
            e,
            o,
            r + a * 0.52,
            i * 0.035,
            a * 0.03,
            t % 3 == 0 ? `#1a6ac0` : `#4a4e52`,
          ),
          z(e, o + i * 0.006, r + a * 0.53, i * 0.02, a * 0.012, `#9adfff`));
      }
      for (let t = 0; t < 4; t++)
        (z(
          e,
          n + i * (0.03 + t * 0.06),
          r + a * 0.36,
          i * 0.05,
          a * 0.48,
          `#3a6a4a`,
        ),
          z(
            e,
            n + i * (0.035 + t * 0.06),
            r + a * 0.42,
            i * 0.04,
            a * 0.1,
            `#9adfff`,
          ));
      for (let e = 0; e < 3; e++)
        l(
          n + i * (0.4 + e * 0.12 + s.next() * 0.04),
          r + a * 0.5,
          [`#2a2e38`, `#5a3a3a`, `#1e3040`][e],
        );
      z(e, n + i * 0.8, r + a * 0.3, i * 0.16, a * 0.14, `#1a3a6a`);
      break;
    case `fruit`:
      z(e, n + i * 0.04, r + a * 0.5, i * 0.4, a * 0.2, `#e8f4f0`);
      for (let t = 0; t < 8; t++)
        ((e.fillStyle = [`#a8d070`, `#e83a3a`, `#f0c020`, `#f08a3a`][t % 4]),
          e.beginPath(),
          e.arc(
            n + i * (0.08 + t * 0.045),
            r + a * 0.6,
            i * 0.018,
            0,
            Math.PI * 2,
          ),
          e.fill());
      for (let t = 0; t < 3; t++)
        z(
          e,
          n + i * (0.52 + t * 0.15),
          r + a * 0.6,
          i * 0.1,
          a * 0.03,
          `#ffffff`,
        );
      (z(e, n + i * 0.6, r + a * 0.1, i * 0.2, a * 0.3, `#fff0f4`),
        z(e, n + i * 0.66, r + a * 0.14, i * 0.08, a * 0.22, `#e85a8a`));
      break;
    case `taiyaki`:
    case `senbei`:
      if ((z(e, n, r + a * 0.5, i, a * 0.34, `#6a4a2a`), t === `taiyaki`))
        for (let t = 0; t < 10; t++)
          ((e.fillStyle = `#b8742a`),
            e.beginPath(),
            e.ellipse(
              n + i * (0.08 + t * 0.09),
              r + a * 0.45,
              i * 0.035,
              a * 0.04,
              0,
              0,
              Math.PI * 2,
            ),
            e.fill());
      else
        for (let t = 0; t < 8; t++)
          (z(
            e,
            n + i * (0.05 + t * 0.115),
            r + a * 0.3,
            i * 0.09,
            a * 0.2,
            `rgba(220,235,240,0.8)`,
          ),
            (e.fillStyle = `#a06a30`),
            e.beginPath(),
            e.arc(
              n + i * (0.095 + t * 0.115),
              r + a * 0.42,
              i * 0.03,
              0,
              Math.PI * 2,
            ),
            e.fill());
      l(n + i * 0.55, r + a * 0.22, `#e8e0d0`);
      break;
    case `sakaya`:
      for (let t = 0; t < 3; t++)
        for (let o = 0; o < 20; o++)
          z(
            e,
            n + i * (0.03 + o * 0.048),
            r + a * (0.08 + t * 0.18),
            i * 0.02,
            a * 0.15,
            [`#2a5a2a`, `#5a2a1a`, `#e8e8e0`, `#1a1a1a`, `#8a6a2a`][
              s.int(0, 4)
            ],
          );
      for (let t = 0; t < 6; t++)
        z(
          e,
          n + i * (0.05 + t * 0.15),
          r + a * 0.66,
          i * 0.12,
          a * 0.18,
          t % 2 ? `#f0c000` : `#c81818`,
        );
      break;
    case `realestate`:
      for (let t = 0; t < 4; t++)
        for (let o = 0; o < 10; o++) {
          let s = n + i * (0.03 + o * 0.096),
            c = r + a * (0.06 + t * 0.19);
          (z(e, s, c, i * 0.085, a * 0.17, `#ffffff`),
            z(
              e,
              s + i * 0.008,
              c + a * 0.02,
              i * 0.07,
              a * 0.03,
              o % 3 ? `#1a6ac0` : `#e60012`,
            ),
            (e.strokeStyle = `#606060`),
            (e.lineWidth = 1),
            e.strokeRect(s + i * 0.015, c + a * 0.07, i * 0.05, a * 0.07));
        }
      break;
    case `beerhall`:
      for (let t = 0; t < 6; t++)
        (z(
          e,
          n + i * (0.06 + t * 0.16),
          r + a * 0.6,
          i * 0.12,
          a * 0.04,
          `#f4f0e6`,
        ),
          (e.fillStyle = `rgba(255,210,140,0.9)`),
          e.beginPath(),
          e.arc(
            n + i * (0.12 + t * 0.16),
            r + a * 0.18,
            i * 0.02,
            0,
            Math.PI * 2,
          ),
          e.fill());
      for (let t = 0; t < 8; t++)
        z(
          e,
          n + i * (0.3 + t * 0.05),
          r + a * 0.36,
          i * 0.012,
          a * 0.1,
          `#d8b060`,
        );
      (l(n + i * 0.25, r + a * 0.5, `#2a2a2a`),
        l(n + i * 0.7, r + a * 0.48, `#4a3a2a`));
      break;
    case `ukiyoe`:
      for (let t = 0; t < 7; t++) {
        let o = n + i * (0.04 + t * 0.137);
        (z(e, o, r + a * 0.1, i * 0.11, a * 0.3, `#1a120a`),
          z(
            e,
            o + i * 0.008,
            r + a * 0.115,
            i * 0.094,
            a * 0.27,
            [`#e8d8b0`, `#d8e0e8`, `#f0d8c0`][t % 3],
          ),
          z(
            e,
            o + i * 0.02,
            r + a * 0.25,
            i * 0.07,
            a * 0.08,
            [`#2a4a8a`, `#c04030`, `#3a6a3a`][t % 3],
          ));
      }
      for (let t = 0; t < 6; t++)
        z(
          e,
          n + i * (0.05 + t * 0.16),
          r + a * 0.56,
          i * 0.14,
          a * 0.28,
          `#5a3a20`,
        );
      break;
    case `pawn`:
      z(e, n, r + a * 0.5, i, a * 0.34, `#4a3020`);
      for (let t = 0; t < 16; t++)
        z(
          e,
          n + i * (0.05 + t * 0.058),
          r + a * 0.08,
          i * 0.02,
          a * 0.4,
          `#2a1a10`,
        );
      z(e, n + i * 0.4, r + a * 0.1, i * 0.2, a * 0.4, `#e8e4d8`);
      break;
    default:
      for (let t = 0; t < 6; t++)
        z(
          e,
          n + i * (0.05 + t * 0.16),
          r + a * 0.3,
          i * 0.12,
          a * 0.5,
          c[s.int(0, 9)],
        );
  }
}
