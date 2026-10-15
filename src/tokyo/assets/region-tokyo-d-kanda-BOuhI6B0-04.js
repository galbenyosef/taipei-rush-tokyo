// tokyo/assets/region-tokyo-d-kanda-BOuhI6B0 04 — fillstyle
// Lines 817-1258 of readable/tokyo/assets/region-tokyo-d-kanda-BOuhI6B0.pretty.js (statement-aligned).
function Pe(e, t = 0) {
  return (n, r, i, a, o) => {
    let s = be(`shop`, e, t);
    B(
      n,
      r,
      i,
      a,
      o,
      {
        guitar: `#3a2a20`,
        acoustic: `#5a4030`,
        drum: `#2a2a30`,
        wind: `#2a2018`,
        records: `#e8e0d0`,
        artsupply: `#f2f0ea`,
        kissa: `#3a2618`,
        ski: `#e8ecf0`,
        golf: `#e4ece4`,
        outdoor: `#e8e4dc`,
        books: `#5a4630`,
        curry: `#f0dca0`,
        izakaya: `#5a3a20`,
        tachinomi: `#6a4a28`,
        yakitori: `#4a3020`,
        soba: `#e8dcc0`,
        kanmi: `#e8dcc4`,
        nabe: `#d8c8a0`,
        lobby: `#c8ccd0`,
        cafe: `#e0d0b8`,
        shutter: `#9ca0a4`,
      }[e] ?? `#c0c0c0`,
    );
    let c = n.createLinearGradient(0, i, 0, i + o * 0.35);
    (c.addColorStop(0, `rgba(255,248,225,0.55)`),
      c.addColorStop(1, `rgba(255,248,225,0)`),
      (n.fillStyle = c),
      n.fillRect(r, i, a, o * 0.35));
    let l = i + o * 0.84;
    B(
      n,
      r,
      l,
      a,
      o - (l - i),
      e === `izakaya` || e === `yakitori` || e === `tachinomi` || e === `kissa`
        ? `#2a1a10`
        : `#8a8480`,
    );
    let u = [
      `#c01818`,
      `#f0f0f0`,
      `#101010`,
      `#e0a020`,
      `#2050c0`,
      `#f0d0a0`,
      `#60a0d0`,
      `#a03070`,
      `#40a050`,
      `#d06020`,
    ];
    switch (e) {
      case `guitar`:
      case `acoustic`: {
        B(
          n,
          r,
          i + o * 0.06,
          a,
          o * 0.78,
          e === `guitar` ? `#3e2e22` : `#5e4632`,
        );
        for (let e = i + o * 0.08; e < i + o * 0.84; e += o * 0.045)
          B(n, r, e, a, 1, `rgba(0,0,0,0.25)`);
        let t =
          e === `acoustic`
            ? [`#d8a860`, `#c08840`, `#8a5a2a`, `#e8c890`, `#6a3a1a`]
            : [
                `#c01818`,
                `#f2f2ee`,
                `#101010`,
                `#e0a020`,
                `#2050c0`,
                `#d07030`,
                `#60a0d0`,
                `#7a1a2a`,
                `#3a8a5a`,
                `#c8a050`,
              ];
        for (let c = 0; c < 2; c++)
          for (let l = 0; l < 13; l++) {
            let u = r + a * (0.04 + (0.92 / 12) * l) + (c ? a * 0.018 : 0),
              d = i + o * (0.08 + c * 0.38),
              f = o * 0.21,
              p = a * 0.021,
              m = t[s.int(0, t.length - 1)];
            (B(n, u - p * 0.25, d, p * 0.5, o * 0.035, `#1a1410`),
              B(n, u - p * 0.14, d + o * 0.03, p * 0.28, o * 0.12, `#6a4a2a`));
            let h = d + o * 0.15;
            ((n.fillStyle = `#0c0a08`),
              n.beginPath(),
              n.ellipse(u, h + f * 0.62, p * 1.12, f * 0.42, 0, 0, Math.PI * 2),
              n.ellipse(u, h + f * 0.22, p * 0.86, f * 0.3, 0, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = m),
              n.beginPath(),
              n.ellipse(u, h + f * 0.62, p, f * 0.38, 0, 0, Math.PI * 2),
              n.ellipse(u, h + f * 0.22, p * 0.76, f * 0.26, 0, 0, Math.PI * 2),
              n.fill(),
              e === `acoustic`
                ? ((n.fillStyle = `#140a04`),
                  n.beginPath(),
                  n.arc(u, h + f * 0.4, p * 0.3, 0, Math.PI * 2),
                  n.fill())
                : (B(
                    n,
                    u - p * 0.5,
                    h + f * 0.45,
                    p * 0.55,
                    f * 0.3,
                    m === `#f2f2ee` ? `#202020` : `#f0f0ea`,
                  ),
                  B(n, u - p * 0.3, h + f * 0.5, p * 0.6, f * 0.04, `#d0d0d0`)),
              B(n, u + p * 0.6, h + f * 0.9, p * 0.9, o * 0.035, `#ffe040`));
          }
        for (let e = 0; e < 6; e++)
          (B(
            n,
            r + a * (0.05 + e * 0.16),
            i + o * 0.7,
            a * 0.11,
            o * 0.14,
            `#141414`,
          ),
            B(
              n,
              r + a * (0.06 + e * 0.16),
              i + o * 0.715,
              a * 0.09,
              o * 0.025,
              `#c8b07a`,
            ));
        break;
      }
      case `drum`:
        for (let e = 0; e < 4; e++) {
          let i = r + a * (0.14 + e * 0.24),
            s = l;
          ((n.fillStyle = u[(e * 3 + t) % 10]),
            n.beginPath(),
            n.ellipse(i, s - o * 0.14, a * 0.06, o * 0.13, 0, 0, Math.PI * 2),
            n.fill(),
            B(n, i - a * 0.09, s - o * 0.3, a * 0.05, o * 0.08, `#d0d0d0`),
            B(n, i + a * 0.05, s - o * 0.3, a * 0.05, o * 0.08, `#d0d0d0`),
            B(n, i - a * 0.11, s - o * 0.46, a * 0.07, o * 0.015, `#e0b040`),
            B(n, i + a * 0.06, s - o * 0.5, a * 0.07, o * 0.015, `#e0b040`));
        }
        for (let e = 0; e < 14; e++)
          B(
            n,
            r + a * (0.03 + e * 0.07),
            i + o * 0.12,
            a * 0.04,
            o * 0.18,
            `#b8b0a0`,
          );
        break;
      case `wind`:
        B(n, r, i + o * 0.1, a, o * 0.7, `#1a1410`);
        for (let e = 0; e < 9; e++) {
          let t = r + a * (0.07 + e * 0.105),
            s = i + o * (0.3 + (e % 2) * 0.25);
          ((n.fillStyle = e % 3 == 2 ? `#c0c0c8` : `#e0b040`),
            n.beginPath(),
            n.arc(t, s, a * 0.03, 0, Math.PI * 2),
            n.fill(),
            B(n, t - 1.5, s - o * 0.2, 3, o * 0.2, n.fillStyle));
        }
        for (let e = 0; e < 9; e++)
          B(
            n,
            r + a * (0.05 + e * 0.105),
            i + o * 0.62,
            a * 0.08,
            o * 0.14,
            `#3a3028`,
          );
        break;
      case `records`:
        for (let e = 0; e < 6; e++)
          B(
            n,
            r + a * (0.03 + e * 0.16),
            i + o * 0.56,
            a * 0.14,
            o * 0.28,
            `#6a5a48`,
          );
        for (let e = 0; e < 24; e++)
          B(
            n,
            r + a * (0.03 + (e % 12) * 0.08),
            i + o * (0.12 + Math.floor(e / 12) * 0.2),
            a * 0.065,
            o * 0.16,
            u[s.int(0, 9)],
          );
        break;
      case `artsupply`:
        for (let e = 0; e < 4; e++)
          for (let t = 0; t < 24; t++)
            B(
              n,
              r + a * (0.02 + t * 0.04),
              i + o * (0.12 + e * 0.16),
              a * 0.03,
              o * 0.12,
              u[s.int(0, 9)],
            );
        B(n, r + a * 0.1, i + o * 0.72, a * 0.8, o * 0.12, `#c0a880`);
        break;
      case `kissa`:
      case `cafe`:
        for (let e = 0; e < 4; e++) {
          let t = r + a * (0.14 + e * 0.24);
          ((n.fillStyle = `rgba(255,200,120,0.9)`),
            n.beginPath(),
            n.arc(t, i + o * 0.2, a * 0.03, 0, Math.PI * 2),
            n.fill(),
            B(n, t - a * 0.06, i + o * 0.62, a * 0.12, o * 0.04, `#5a3a20`),
            B(n, t - a * 0.09, i + o * 0.5, a * 0.03, o * 0.3, `#7a2a20`),
            B(n, t + a * 0.06, i + o * 0.5, a * 0.03, o * 0.3, `#7a2a20`));
        }
        break;
      case `ski`:
      case `outdoor`:
      case `golf`: {
        let t = e === `golf` ? 18 : 22;
        for (let c = 0; c < t; c++) {
          let l = r + a * (0.03 + (0.94 / t) * c),
            d = e === `golf` ? (c % 2 ? `#202020` : `#e0e0e0`) : u[s.int(0, 9)];
          B(
            n,
            l,
            i + o * (e === `golf` ? 0.42 : 0.14),
            a * (e === `golf` ? 0.025 : 0.022),
            o * (e === `golf` ? 0.42 : 0.66),
            d,
          );
        }
        for (let e = 0; e < 3; e++) {
          let t = r + a * (0.2 + e * 0.3);
          (B(
            n,
            t - a * 0.035,
            i + o * 0.3,
            a * 0.07,
            o * 0.3,
            u[(e * 4 + 1) % 10],
          ),
            B(n, t - a * 0.015, i + o * 0.2, a * 0.03, o * 0.09, `#e8d0b0`),
            B(n, t - a * 0.03, i + o * 0.6, a * 0.025, o * 0.24, `#202830`),
            B(n, t + a * 0.005, i + o * 0.6, a * 0.025, o * 0.24, `#202830`));
        }
        break;
      }
      case `books`:
        for (let e = 0; e < 5; e++) {
          let t = r + a * 0.02;
          for (; t < r + a * 0.98;) {
            let r = a * (0.008 + s.next() * 0.014);
            (B(
              n,
              t,
              i + o * (0.08 + e * 0.15),
              r - 0.6,
              o * (0.12 + s.next() * 0.02),
              [
                `#6a4a2a`,
                `#8a6a40`,
                `#3a2a1a`,
                `#a08050`,
                `#5a3020`,
                `#2a3a4a`,
                `#c0a070`,
                `#7a2a1a`,
              ][s.int(0, 7)],
            ),
              (t += r));
          }
          B(n, r, i + o * (0.205 + e * 0.15), a, o * 0.012, `#2a1a0a`);
        }
        B(n, r + a * 0.4, i + o * 0.66, a * 0.2, o * 0.18, `#3a2410`);
        break;
      case `curry`:
        (B(n, r, i + o * 0.56, a, o * 0.06, `#c08040`),
          B(n, r, i + o * 0.62, a, o * 0.22, `#7a4a20`));
        for (let e = 0; e < 7; e++)
          B(
            n,
            r + a * (0.06 + e * 0.13),
            i + o * 0.46,
            a * 0.03,
            o * 0.38,
            `#3a2a1a`,
          );
        for (let e = 0; e < 6; e++)
          B(
            n,
            r + a * (0.05 + e * 0.16),
            i + o * 0.12,
            a * 0.12,
            o * 0.1,
            `#fff8e0`,
          );
        break;
      case `izakaya`:
      case `yakitori`:
      case `tachinomi`:
        for (let e = 0; e < 16; e++)
          B(
            n,
            r + a * (0.03 + e * 0.06),
            i + o * 0.1,
            a * 0.04,
            o * 0.18,
            `#f4ecd8`,
          );
        for (let e = 0; e < 16; e++)
          B(
            n,
            r + a * (0.035 + e * 0.06),
            i + o * 0.12,
            a * 0.03,
            o * 0.008,
            `#202020`,
          );
        for (let e = 0; e < 26; e++)
          B(
            n,
            r + a * (0.03 + e * 0.036),
            i + o * 0.34,
            a * 0.016,
            o * 0.12,
            [`#2a6a2a`, `#8a5a1a`, `#f0f0e0`, `#1a1a1a`, `#5a1a1a`][
              s.int(0, 4)
            ],
          );
        if (
          (B(n, r, i + o * 0.48, a, o * 0.04, `#3a2410`),
          B(
            n,
            r,
            i + o * 0.58,
            a,
            o * 0.06,
            e === `tachinomi` ? `#c09060` : `#8a5a30`,
          ),
          e === `yakitori`)
        ) {
          (B(n, r + a * 0.3, i + o * 0.5, a * 0.4, o * 0.08, `#2a2a2a`),
            (n.globalAlpha = 0.35),
            (n.fillStyle = `#e8e8e8`));
          for (let e = 0; e < 6; e++)
            (n.beginPath(),
              n.arc(
                r + a * (0.35 + e * 0.06),
                i + o * (0.38 - (e % 2) * 0.06),
                a * 0.05,
                0,
                Math.PI * 2,
              ),
              n.fill());
          n.globalAlpha = 1;
        }
        for (let e = 0; e < 4; e++) {
          let t = r + a * (0.15 + e * 0.22 + s.next() * 0.05);
          (B(
            n,
            t - a * 0.035,
            i + o * 0.56,
            a * 0.07,
            o * 0.28,
            [`#2a2e38`, `#3a3a3a`, `#1e2430`, `#4a4a50`][e],
          ),
            (n.fillStyle = `#1a1410`),
            n.beginPath(),
            n.arc(t, i + o * 0.52, a * 0.025, 0, Math.PI * 2),
            n.fill());
        }
        break;
      case `soba`:
      case `kanmi`:
      case `nabe`:
        for (let e = 0; e < 6; e++)
          B(
            n,
            r + a * (0.04 + e * 0.16),
            i + o * 0.1,
            a * 0.12,
            o * 0.16,
            `#2a1a0a`,
          );
        for (let e = 0; e < 6; e++)
          B(
            n,
            r + a * (0.05 + e * 0.16),
            i + o * 0.12,
            a * 0.1,
            o * 0.12,
            `#f0e6cc`,
          );
        B(n, r, i + o * 0.66, a * 0.45, o * 0.18, `#c8b878`);
        for (let e = 0; e < 3; e++)
          B(
            n,
            r + a * (0.52 + e * 0.16),
            i + o * 0.58,
            a * 0.12,
            o * 0.05,
            `#5a3a1a`,
          );
        break;
      case `lobby`:
        (B(n, r + a * 0.3, i + o * 0.2, a * 0.4, o * 0.64, `#8a9098`),
          B(n, r + a * 0.42, i + o * 0.3, a * 0.16, o * 0.54, `#5a6068`));
        break;
      case `shutter`:
        for (let e = i; e < i + o; e += o / 24)
          B(n, r, e, a, o * 0.012, `rgba(0,0,0,0.25)`);
    }
    ((n.globalAlpha = 0.1),
      (n.fillStyle = `#ffffff`),
      n.beginPath(),
      n.moveTo(r + a * 0.1, i),
      n.lineTo(r + a * 0.22, i),
      n.lineTo(r + a * 0.12, i + o),
      n.lineTo(r, i + o),
      n.fill(),
      (n.globalAlpha = 1));
  };
}
