// tokyo/assets/region-tokyo-d-shimbashi-CU0USnvn 05 — math
// Lines 1305-1606 of readable/tokyo/assets/region-tokyo-d-shimbashi-CU0USnvn.pretty.js (statement-aligned).
function Ye(e) {
  return (t, r, a, o, s) => {
    let c = new n(i(`shim-goods`, e)),
      l = (e, n, r) => {
        (N(t, e - o * 0.11, n - s * 0.08, o * 0.22, s * 0.16, `#ffffff`),
          U(t, H(r), e, n, o * 0.2, s * 0.12, `#c8161c`, `800`));
      },
      u = (e, n, r, i) => {
        (N(t, e, n, r, i, `#f4f4f2`),
          N(t, e + 3, n + 3, r - 6, i - 6, `#dfe8ec`));
      };
    switch (e) {
      case `fish`:
      case `kai`:
        N(t, r, a, o, s, `#d6dde0`);
        for (let n = 0; n < 6; n++) {
          let i = r + (n % 3) * (o / 3) + 3,
            c = a + Math.floor(n / 3) * (s / 2) + 3;
          u(i, c, o / 3 - 6, s / 2 - 6);
          for (let r = 0; r < 4; r++)
            ((t.fillStyle =
              e === `kai`
                ? [`#8a6a4a`, `#e8d8c0`, `#5a4a3a`][r % 3]
                : [`#8aa0b0`, `#c04030`, `#b0b8c0`, `#e08a50`][(n + r) % 4]),
              t.beginPath(),
              t.ellipse(
                i + (o / 3 - 6) * (0.25 + (r % 2) * 0.5),
                c + (s / 2 - 6) * (0.3 + 0.4 * Math.floor(r / 2)),
                o * (e === `kai` ? 0.03 : 0.06),
                s * (e === `kai` ? 0.05 : 0.04),
                0.3,
                0,
                Math.PI * 2,
              ),
              t.fill());
        }
        (l(
          r + o * 0.2,
          a + s * 0.88,
          e === `kai` ? `shim.mkt.card.hotate` : `shim.mkt.card.sake`,
        ),
          l(
            r + o * 0.75,
            a + s * 0.88,
            e === `kai` ? `shim.mkt.card.uni` : `shim.mkt.card.himono`,
          ));
        break;
      case `maguro`:
        N(t, r, a, o, s, `#e8eef0`);
        for (let e = 0; e < 8; e++) {
          let n = r + (e % 4) * (o / 4) + 4,
            i = a + Math.floor(e / 4) * (s / 2) + 6;
          (N(t, n, i, o / 4 - 8, s / 2 - 14, `#ffffff`),
            N(
              t,
              n + 6,
              i + 6,
              o / 4 - 20,
              s / 2 - 26,
              e % 3 == 0 ? `#e7a0a0` : `#b0202a`,
            ));
        }
        (l(r + o * 0.25, a + s * 0.9, `shim.mkt.card.chutoro`),
          l(r + o * 0.72, a + s * 0.9, `shim.mkt.card.akami`));
        break;
      case `kanbutsu`:
      case `katsuo`:
        N(t, r, a, o, s, `#7a5a3a`);
        for (let n = 0; n < 8; n++) {
          let i = r + (n % 4) * (o / 4) + o / 8,
            c = a + Math.floor(n / 4) * (s / 2) + s / 4;
          (W(t, i, c, o * 0.1, `#c8a060`),
            W(
              t,
              i,
              c,
              o * 0.085,
              e === `katsuo`
                ? [`#8a5a2a`, `#c09060`][n % 2]
                : [`#2a3a1a`, `#d8c8a0`, `#6a4a2a`, `#e8e0c8`][n % 4],
            ));
        }
        l(
          r + o * 0.5,
          a + s * 0.9,
          e === `katsuo` ? `shim.mkt.cat.katsuo` : `shim.mkt.card.kombu`,
        );
        break;
      case `knife`:
        (N(t, r, a, o, s, `#2a2a2c`),
          N(t, r + 4, a + 4, o - 8, s - 8, `#3a4048`));
        for (let e = 0; e < 10; e++) {
          let n = r + o * (0.08 + e * 0.088);
          (N(t, n, a + s * 0.12, o * 0.03, s * 0.48, `#d8dde2`),
            N(t, n, a + s * 0.6, o * 0.03, s * 0.22, `#5a3a1e`));
        }
        l(r + o * 0.5, a + s * 0.9, `shim.mkt.card.togi`);
        break;
      case `nori`:
      case `tea`:
        N(t, r, a, o, s, `#e8e2d2`);
        for (let n = 0; n < 12; n++) {
          let i = r + (n % 6) * (o / 6) + 3,
            c = a + Math.floor(n / 6) * (s / 2) + 4;
          (N(
            t,
            i,
            c,
            o / 6 - 6,
            s / 2 - 12,
            e === `nori`
              ? [`#1a2a1a`, `#2a3a2a`, `#c8161c`][n % 3]
              : [`#4a6a2a`, `#c8b07a`, `#2a4a1a`][n % 3],
          ),
            N(t, i + 4, c + 6, o / 6 - 14, s * 0.08, `#f4ecd4`));
        }
        break;
      case `tamago`:
        N(t, r, a, o, s, `#f4f0e6`);
        for (let e = 0; e < 10; e++) {
          let n = r + (e % 5) * (o / 5) + 6,
            i = a + Math.floor(e / 5) * (s / 2.4) + 8;
          (N(t, n, i, o / 5 - 12, s / 3 - 6, `#f2c73a`),
            N(t, n, i + s / 3 - 12, o / 5 - 12, 5, `#c89020`));
        }
        l(r + o * 0.5, a + s * 0.9, `shim.mkt.card.tamago`);
        break;
      case `tsukemono`:
        N(t, r, a, o, s, `#6a4a2a`);
        for (let e = 0; e < 8; e++) {
          let n = r + (e % 4) * (o / 4) + o / 8,
            i = a + Math.floor(e / 4) * (s / 2) + s / 4;
          (W(t, n, i, o * 0.1, `#e8e0d0`),
            W(
              t,
              n,
              i,
              o * 0.085,
              [`#e8c840`, `#8a2040`, `#6a8a2a`, `#c86a2a`][e % 4],
            ));
        }
        break;
      case `kitchen`:
      case `utsuwa`:
        N(t, r, a, o, s, `#d8d4cc`);
        for (let n = 0; n < 14; n++) {
          let i = r + c.next() * o,
            l = a + c.next() * s * 0.8;
          e === `kitchen`
            ? (W(t, i, l, o * 0.05, [`#b0b4b8`, `#c88a3a`, `#2a2a2a`][n % 3]),
              W(t, i, l, o * 0.035, `#8a8e92`))
            : (W(
                t,
                i,
                l,
                o * 0.045,
                [`#f4f0e8`, `#2a3a5a`, `#8a5a3a`, `#c8c0a8`][n % 4],
              ),
              ve(t, i, l, o * 0.03, `#6a7a8a`, 1.5));
        }
        l(
          r + o * 0.5,
          a + s * 0.9,
          e === `kitchen` ? `shim.mkt.card.naire` : `shim.mkt.card.taxfree`,
        );
        break;
      case `yasai`:
        N(t, r, a, o, s, `#4a3a2a`);
        for (let e = 0; e < 8; e++) {
          let n = r + (e % 4) * (o / 4) + 4,
            i = a + Math.floor(e / 4) * (s / 2) + 4;
          N(t, n, i, o / 4 - 8, s / 2 - 8, `#3a7ad0`);
          for (let r = 0; r < 6; r++)
            W(
              t,
              n + (o / 4 - 8) * ((r % 3) / 3 + 0.17),
              i + (s / 2 - 8) * (Math.floor(r / 3) * 0.5 + 0.25),
              o * 0.025,
              [`#e84a2a`, `#f2c040`, `#4a9a2a`, `#f08a2a`][e % 4],
            );
        }
        break;
      case `taiyaki`:
        N(t, r, a, o, s, `#3a3a3a`);
        for (let e = 0; e < 10; e++)
          ((t.fillStyle = `#c88a3a`),
            t.beginPath(),
            t.ellipse(
              r + (e % 5) * (o / 5) + o / 10,
              a + Math.floor(e / 5) * (s / 2) + s / 4,
              o * 0.075,
              s * 0.14,
              0,
              0,
              Math.PI * 2,
            ),
            t.fill());
        break;
      default:
        N(t, r, a, o, s, `#f6f4ee`);
        for (let n = 0; n < 8; n++) {
          let i = r + (n % 4) * (o / 4) + o / 8,
            c = a + Math.floor(n / 4) * (s / 2) + s / 4;
          if (
            (W(t, i, c, o * 0.09, e === `coffee` ? `#f4f0e8` : `#1a1a1a`),
            e === `ramen`)
          )
            W(t, i, c, o * 0.07, `#d8a050`);
          else if (e === `coffee`) W(t, i, c, o * 0.05, `#5a3a1e`);
          else {
            W(t, i, c, o * 0.07, `#f4f0e8`);
            for (let e = 0; e < 5; e++)
              W(
                t,
                i + Math.cos(e * 1.3) * o * 0.035,
                c + Math.sin(e * 1.3) * o * 0.035,
                o * 0.022,
                [`#c8202a`, `#f08a2a`, `#f2c73a`, `#e8a0a0`, `#3a6a2a`][e],
              );
          }
          N(t, i - o * 0.06, c + s * 0.17, o * 0.12, s * 0.06, `#ffffff`);
        }
        (e === `don` || e === `sushi`) &&
          l(r + o * 0.5, a + s * 0.92, `shim.mkt.card.don`);
    }
  };
}
function Xe(e) {
  return (t, r, a, o, s) => {
    let c = new n(i(`shim-interior`, e.id));
    if ((N(t, r, a, o, s, e.eat ? `#e2cfa8` : `#d4ccbc`), e.eat)) {
      for (let e = 0; e < 8; e++)
        (N(
          t,
          r + o * (0.06 + e * 0.11),
          a + s * 0.06,
          o * 0.09,
          s * 0.32,
          `#fffaf0`,
        ),
          N(
            t,
            r + o * (0.07 + e * 0.11),
            a + s * 0.1,
            o * 0.07,
            s * 0.04,
            `#1a1a1a`,
          ));
      (N(t, r, a + s * 0.58, o, s * 0.08, `#c8a070`),
        N(t, r, a + s * 0.66, o, s * 0.34, `#7a5030`));
      for (let e = 0; e < 6; e++)
        W(t, r + o * (0.1 + e * 0.16), a + s * 0.78, o * 0.035, `#b5121b`);
      return;
    }
    let l = {
      fish: [`#f4f4f2`, `#dfe8ec`, `#8aa0b0`, `#c04030`],
      maguro: [`#f4f4f2`, `#b0202a`, `#e7a0a0`, `#ffffff`],
      kai: [`#f4f4f2`, `#8a6a4a`, `#e8d8c0`, `#3a7ad0`],
      kanbutsu: [`#c8a060`, `#2a3a1a`, `#e8e0c8`, `#6a4a2a`],
      katsuo: [`#8a5a2a`, `#c09060`, `#f6ead0`, `#5a2a0a`],
      nori: [`#1a2a1a`, `#c8161c`, `#f4ecd4`, `#2a3a2a`],
      tea: [`#4a6a2a`, `#c8b07a`, `#2a4a1a`, `#f4f0e0`],
      knife: [`#d8dde2`, `#5a3a1e`, `#2a2a2c`, `#c8ccd0`],
      kitchen: [`#b0b4b8`, `#c88a3a`, `#2a2a2a`, `#ffcc00`],
      utsuwa: [`#f4f0e8`, `#2a3a5a`, `#8a5a3a`, `#c8c0a8`],
      tsukemono: [`#e8c840`, `#8a2040`, `#6a8a2a`, `#c86a2a`],
      yasai: [`#e84a2a`, `#f2c040`, `#4a9a2a`, `#3a7ad0`],
    }[e.id] ?? [
      `#f4f4f2`,
      `#3a5a8a`,
      `#c8161c`,
      `#e8d8b0`,
      `#2a4a2a`,
      `#d8a050`,
    ];
    for (let e = 0; e < 4; e++) {
      N(t, r, a + s * (0.2 + e * 0.19), o, s * 0.025, `#5a5048`);
      for (let n = 0; n < 12; n++)
        N(
          t,
          r + o * (0.01 + n * 0.083),
          a + s * (0.03 + e * 0.19),
          o * 0.075,
          s * 0.17,
          l[Math.floor(c.next() * l.length)],
        );
    }
    (N(t, r + o * 0.04, a + s * 0.04, o * 0.14, s * 0.12, `#ffffff`),
      N(t, r + o * 0.84, a + s * 0.03, o * 0.12, s * 0.15, `#ffffff`),
      N(t, r + o * 0.84, a + s * 0.03, o * 0.12, s * 0.04, `#c8161c`));
    for (let e = 0; e < 6; e++)
      N(
        t,
        r + o * (0.05 + e * 0.15),
        a + s * 0.78,
        o * 0.13,
        s * 0.2,
        `#f4f4f2`,
      );
    N(t, r + o * 0.62, a + s * 0.62, o * 0.3, s * 0.16, `#8a8e92`);
  };
}
