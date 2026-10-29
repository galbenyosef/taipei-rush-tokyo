// tokyo/assets/region-tokyo-d-ameyoko-DgncIALb 02 — lineto
// Lines 173-501 of readable/tokyo/assets/region-tokyo-d-ameyoko-DgncIALb.pretty.js (statement-aligned).
function ne(e) {
  return (r, i, o, s, c) => {
    let l = new t(n(`ut-in`, e)),
      u = () => l.next(),
      [d, f] = {
        fish: [
          `#e8eef0`,
          [`#c0c8d0`, `#d84a3a`, `#e8e8f0`, `#8a98a8`, `#f08a5a`],
        ],
        dried: [
          `#e8dcc0`,
          [`#a87a4a`, `#6a8a3a`, `#c8a060`, `#8a5a2a`, `#e0c890`],
        ],
        sweets: [
          `#f4ead8`,
          [`#e60012`, `#ffcc00`, `#2a6ad0`, `#f080a0`, `#5a3a1a`, `#ffffff`],
        ],
        kebab: [`#f4d8a0`, [`#8a4a1a`, `#c8102e`, `#f0c060`, `#ffffff`]],
        motsu: [`#5a3a22`, [`#d8c8a8`, `#2a5ab0`, `#f0c020`, `#b81c1c`]],
        niku: [`#f0eae0`, [`#c88a3a`, `#d8a050`, `#b87030`, `#ffffff`]],
        cosme: [
          `#ffffff`,
          [`#f080b0`, `#a0d0f0`, `#f0d060`, `#d0a0e0`, `#e0e0e0`],
        ],
        bag: [
          `#e8e0d4`,
          [`#3a2a1e`, `#8a5a3a`, `#c8a070`, `#1a1a1a`, `#a03a2a`],
        ],
        sneaker: [
          `#f0f0f0`,
          [`#ffffff`, `#1a1a1a`, `#e03030`, `#3060d0`, `#f0c020`],
        ],
        military: [`#c8c0a8`, [`#4a5230`, `#6a6a48`, `#3a3a2a`, `#8a8060`]],
        asia: [
          `#f0e4c8`,
          [`#e02020`, `#f0c020`, `#2a8a3a`, `#f08a20`, `#ffffff`],
        ],
        don: [`#f4ecd8`, [`#d83a3a`, `#f0a030`, `#ffffff`, `#3a7a3a`]],
        tea: [`#e8e0c8`, [`#2a5a2a`, `#3a7a3a`, `#1a1a1a`, `#c8a050`]],
        fruit: [
          `#f4f0e0`,
          [`#f0c020`, `#e04030`, `#80c040`, `#f08a20`, `#f8e060`],
        ],
        jeans: [`#e8e8ea`, [`#2a3a5a`, `#3a4a7a`, `#5a6a9a`, `#1a2440`]],
        yakitori: [`#4a2a18`, [`#f0a040`, `#d8c8a8`, `#2a2a2a`, `#b81c1c`]],
        watch: [`#f4f4f6`, [`#c8c8d0`, `#e8c860`, `#1a1a1a`, `#a0a0a8`]],
        plaza: [`#3a3a3e`, [`#f0e0b0`, `#e04030`, `#30a0e0`, `#f0c020`]],
      }[e];
    (b(r, i, o, s, c, d, 0.55),
      x(
        r,
        i,
        o + c * 0.88,
        s,
        c * 0.12,
        e === `motsu` || e === `yakitori` ? `#3a2416` : `#8a8478`,
        0.5,
      ));
    for (let e = 0; e < 4; e++)
      y(
        r,
        i + s * (0.08 + e * 0.24),
        o + c * 0.03,
        s * 0.16,
        c * 0.02,
        `#fffbe8`,
      );
    if (e === `plaza`) {
      ((r.fillStyle = `#26262a`),
        r.beginPath(),
        r.moveTo(i, o),
        r.lineTo(i + s * 0.38, o + c * 0.36),
        r.lineTo(i + s * 0.38, o + c * 0.7),
        r.lineTo(i, o + c),
        r.fill(),
        r.beginPath(),
        r.moveTo(i + s, o),
        r.lineTo(i + s * 0.62, o + c * 0.36),
        r.lineTo(i + s * 0.62, o + c * 0.7),
        r.lineTo(i + s, o + c),
        r.fill());
      for (let e = 0; e < 4; e++) {
        let t = e / 4,
          n = 1 - t * 0.7,
          a = f[e % f.length];
        (b(
          r,
          i + s * (0.04 + t * 0.32),
          o + c * (0.2 + t * 0.17),
          s * 0.08 * n,
          c * 0.42 * n,
          a,
          0.6,
        ),
          b(
            r,
            i + s * (0.88 - t * 0.32),
            o + c * (0.2 + t * 0.17),
            s * 0.08 * n,
            c * 0.42 * n,
            f[(e + 2) % f.length],
            0.6,
          ));
      }
      b(r, i + s * 0.42, o + c * 0.4, s * 0.16, c * 0.26, `#f8f0d8`, 0.6);
      return;
    }
    if (e === `motsu` || e === `yakitori`) {
      for (let e = 0; e < 12; e++)
        y(
          r,
          i + s * (0.06 + e * 0.075),
          o + c * 0.1,
          s * 0.055,
          c * 0.3,
          `#f4ecd8`,
        );
      let t = v(`ameyoko.motsu.menu`).split(`・`);
      for (let e = 0; e < 12; e++)
        a(
          r,
          t[e % t.length],
          i + s * (0.087 + e * 0.075),
          o + c * 0.12,
          o + c * 0.38,
          s * 0.04,
          `#1a1a1a`,
          void 0,
          `800`,
        );
      y(r, i, o + c * 0.55, s, c * 0.08, `#8a5a2a`);
      for (let e = 0; e < 5; e++) {
        let t = i + s * (0.1 + e * 0.18);
        (y(
          r,
          t,
          o + c * 0.36,
          s * 0.06,
          c * 0.22,
          [`#3a3a42`, `#5a4a3a`, `#2a3a4a`][e % 3],
        ),
          p(r, t + s * 0.03, o + c * 0.33, s * 0.025, `#e0b890`),
          y(
            r,
            t - s * 0.01,
            o + c * 0.7,
            s * 0.08,
            c * 0.16,
            e % 2 ? `#2a5ab0` : `#f0c020`,
          ));
      }
      if (e === `yakitori`) {
        (y(r, i + s * 0.66, o + c * 0.46, s * 0.28, c * 0.08, `#2a2a2a`),
          (r.globalAlpha = 0.35),
          (r.fillStyle = `#d0d0d0`));
        for (let e = 0; e < 5; e++)
          r.fillRect(
            i + s * (0.68 + e * 0.05),
            o + c * 0.15,
            s * 0.03,
            c * 0.3,
          );
        r.globalAlpha = 1;
      }
      return;
    }
    if (e === `kebab`) {
      (y(r, i + s * 0.12, o + c * 0.2, s * 0.16, c * 0.5, `#d84a1a`),
        (r.fillStyle = `#7a3a12`),
        r.beginPath(),
        r.moveTo(i + s * 0.4, o + c * 0.18),
        r.lineTo(i + s * 0.5, o + c * 0.18),
        r.lineTo(i + s * 0.48, o + c * 0.66),
        r.lineTo(i + s * 0.42, o + c * 0.66),
        r.fill(),
        y(r, i + s * 0.445, o + c * 0.1, s * 0.01, c * 0.62, `#c0c0c0`));
      for (let e = 0; e < 4; e++)
        y(
          r,
          i + s * (0.58 + (e % 2) * 0.18),
          o + c * (0.12 + Math.floor(e / 2) * 0.2),
          s * 0.15,
          c * 0.16,
          [`#f0c060`, `#c84a2a`, `#80b040`, `#f4e0b0`][e],
        );
      (y(r, i, o + c * 0.66, s, c * 0.22, `#c8102e`),
        h(
          r,
          v(`ameyoko.shop.kebab.latin`),
          i + s / 2,
          o + c * 0.77,
          s * 0.7,
          c * 0.12,
          `#ffffff`,
          `900`,
        ));
      return;
    }
    if (e === `jeans` || e === `bag` || e === `military`) {
      for (let t = 0; t < 2; t++)
        for (let n = 0; n < 9; n++) {
          let a = f[Math.floor(u() * f.length)],
            l = i + s * (0.04 + n * 0.107),
            d = o + c * (0.12 + t * 0.38);
          (y(r, l, d, s * 0.085, c * (e === `bag` ? 0.18 : 0.32), a),
            e === `bag` &&
              y(r, l + s * 0.02, d - c * 0.04, s * 0.045, c * 0.04, `#2a2a2a`));
        }
      if (e === `military`)
        for (let e = 0; e < 4; e++)
          p(
            r,
            i + s * (0.15 + e * 0.22),
            o + c * 0.8,
            s * 0.05,
            `#4a5230`,
            c * 0.04,
          );
      return;
    }
    if (e === `sneaker`) {
      for (let e = 0; e < 5; e++)
        for (let t = 0; t < 10; t++) {
          let n = i + s * (0.04 + t * 0.096),
            a = o + c * (0.1 + e * 0.15);
          (y(
            r,
            n,
            a + c * 0.04,
            s * 0.08,
            c * 0.05,
            f[Math.floor(u() * f.length)],
          ),
            y(r, n, a + c * 0.085, s * 0.08, c * 0.012, `#ffffff`));
        }
      return;
    }
    let m = e === `cosme` || e === `watch` ? 4 : 3;
    for (let e = 0; e < m; e++) {
      y(r, i, o + c * (0.32 + e * 0.16), s, c * 0.012, `#6a6258`);
      for (let t = 0; t < 16; t++) {
        let n = f[Math.floor(u() * f.length)];
        y(
          r,
          i + s * (0.02 + t * 0.061),
          o + c * (0.32 + e * 0.16) - c * (0.06 + u() * 0.06),
          s * 0.05,
          c * 0.1,
          n,
        );
      }
    }
    if (
      e === `fish` ||
      e === `fruit` ||
      e === `niku` ||
      e === `watch` ||
      e === `don`
    ) {
      y(r, i, o + c * 0.66, s, c * 0.2, e === `fish` ? `#f4f8fa` : `#d8e4e8`);
      for (let t = 0; t < 12; t++) {
        let n = i + s * (0.04 + t * 0.08);
        e === `fish`
          ? ((r.fillStyle = f[t % f.length]),
            r.beginPath(),
            r.ellipse(
              n + s * 0.03,
              o + c * 0.74,
              s * 0.035,
              c * 0.025,
              0.2,
              0,
              Math.PI * 2,
            ),
            r.fill())
          : y(r, n, o + c * 0.7, s * 0.05, c * 0.06, f[t % f.length]);
      }
      for (let e = 0; e < 5; e++)
        y(
          r,
          i + s * (0.08 + e * 0.19),
          o + c * 0.62,
          s * 0.07,
          c * 0.05,
          `#ff8a1a`,
        );
      if (e === `fish`)
        for (let e = 0; e < 3; e++)
          p(r, i + s * (0.2 + e * 0.3), o + c * 0.08, s * 0.05, `#ff5030`);
    }
  };
}
function re(e) {
  return (t, n, r, i, a) => {
    (b(t, n, r, i, a, e.bg, 0.62),
      e.sub
        ? (h(
            t,
            v(e.name),
            n + i * 0.4,
            r + a * 0.5,
            i * 0.62,
            a * 0.68,
            e.fg,
            `900`,
          ),
          h(
            t,
            v(e.sub),
            n + i * 0.84,
            r + a * 0.52,
            i * 0.26,
            a * 0.3,
            e.fg,
            `700`,
          ))
        : h(
            t,
            v(e.name),
            n + i / 2,
            r + a * 0.52,
            i * 0.86,
            a * 0.68,
            e.fg,
            `900`,
          ),
      y(t, n, r + a * 0.92, i, a * 0.08, `#2a2a2a`));
  };
}
