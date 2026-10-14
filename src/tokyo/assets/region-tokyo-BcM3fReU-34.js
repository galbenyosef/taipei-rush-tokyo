// tokyo/assets/region-tokyo-BcM3fReU 34 — next
// Lines 19061-19559 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Kd = (e, t) => {
    (Id(e, `#d8c8a8`, `#b89a70`),
      I(e, Dd, Pd(1), jd, Pd(0) - Pd(1), `#6a4a2a`),
      Bd(e, t, `izakaya`, kd + 6, 70, `#f6eedc`, `#1a1a1a`, 9),
      I(e, Dd + jd * 0.55, Pd(2.1), jd * 0.4, Pd(1) - Pd(2.1), `#2a2a2a`),
      I(e, Dd + jd * 0.55, Pd(2.1), jd * 0.4, 30, `#1c2a52`));
    for (let t = 1; t < 4; t++)
      I(e, Dd + jd * 0.55 + (jd * 0.4 * t) / 4, Pd(2.1), 2, 30, `#0c1430`);
    Gd(e, t, Dd + 8, jd * 0.4, 1.3, 2);
  },
  qd = (e, t) => {
    (Id(e, `#e8e2d0`, `#c8bea8`),
      I(e, Dd, Pd(1.05), jd, Pd(0) - Pd(1.05), `#b8bcbe`),
      I(e, Dd + 30, Pd(2.6), jd - 60, 20, `#9aa0a4`),
      Bd(e, t, `ramen`, kd + 4, 64, `#fff6d0`, `#b0161c`, 8));
    for (let t = 0; t < 4; t++)
      ((e.fillStyle = `#3a3a3a`),
        e.beginPath(),
        e.arc(Dd + 60 + t * 40, Pd(1.15), 9, 0, Math.PI * 2),
        e.fill());
    Ud(e, Od - 46, Pd(1.75), 36, 1.75 * Nd);
  },
  Jd = (e, t) => {
    (Id(e, `#eceae4`, `#d8d4cc`),
      Ld(e, t, Dd + 4, jd * 0.48, 2.1, 5),
      Ld(e, t, Dd + jd * 0.52, jd * 0.46, 2.1, 5),
      I(e, Dd, kd, jd, 22, `#f0d020`),
      Ea(
        e,
        B(`common.promo.daitokka`),
        Dd + jd / 2,
        kd + 11,
        jd * 0.5,
        16,
        `#d01010`,
      ));
  },
  Yd = (e) => {
    (Id(e, `#f4f6f6`, `#e4e8e8`),
      I(e, Dd + 20, Pd(1.1), jd - 40, Pd(0) - Pd(1.1), `#c8dce2`),
      I(e, Dd + 20, Pd(1.1), jd - 40, 4, `#a0b8c0`),
      I(e, Dd + 30, Pd(2.4), 40, 54, `#e0ecf0`),
      I(e, Dd + 34, Pd(2.35), 32, 8, `#3a8aa0`),
      (e.fillStyle = `#ffffff`),
      e.beginPath(),
      e.arc(Od - 50, Pd(2.6), 14, 0, Math.PI * 2),
      e.fill(),
      (e.strokeStyle = `#333`),
      (e.lineWidth = 1.5),
      e.stroke());
  },
  Xd = (e, t) => {
    Id(e, `#d8d0c0`, `#b8ae9c`);
    for (let n = kd; n < Ad; n += 30)
      for (let r = Dd; r < Od; r += 46)
        I(e, r + 1, n + 1, 44, 28, t.chance(0.5) ? `#cfc6b4` : `#c6bca8`);
    let n = Dd + 24,
      r = Pd(1.9);
    for (let t = 0; t < 4; t++)
      for (let i = 0; i < 6; i++)
        I(e, n + i * 22, r + t * 16, 20, 14, `#8a8e90`);
    (I(e, Od - 50, Pd(1.5), 16, 30, `#3a3e42`),
      I(e, Od - 47, Pd(1.45), 10, 8, `#7ad0ff`));
  },
  Zd = (e, t) => {
    (Id(e, `#f6f8f8`, `#e8ecee`),
      Hd(e, t, Dd + jd * 0.42, jd * 0.58, 2.1, 5),
      Ld(e, t, Dd + 4, jd * 0.38, 1.7, 4),
      I(e, Dd, kd, jd, 16, `#2a8a4a`),
      I(e, Dd, kd + 16, jd, 5, `#f08a20`),
      I(e, Dd, kd + 21, jd, 5, `#3a6ac0`),
      Ea(
        e,
        zd(`konbini`)[1] ?? ``,
        Dd + jd * 0.2,
        Pd(2.05),
        jd * 0.36,
        11,
        `#c01a1a`,
      ));
  },
  Qd = (e, t) => {
    Id(e, `#c8b48a`, `#9a8460`);
    for (let n = 0; n < 4; n++)
      for (let r = 0; r < 9; r++) {
        let i = Dd + 10 + r * 25,
          a = Pd(2.4) + n * 30;
        (I(e, i, a, 18, 24, t.chance(0.5) ? `#2a5a2a` : `#c8a040`),
          I(e, i, a + 8, 18, 6, `#f0e8d0`));
      }
  },
  $d = (e, t) => {
    Id(e, `#1a1020`, `#0a0810`);
    let n = jd / 4;
    for (let r = 0; r < 4; r++) {
      let i = Dd + r * n + 4,
        a = [`#ff4aa8`, `#40c8ff`, `#ffd040`, `#7aff7a`][r % 4];
      (I(e, i, Pd(2.3), n - 8, 2.3 * Nd - 4, a),
        I(e, i + 4, Pd(2.1), n - 16, 1.2 * Nd, `#f8f4ff`));
      for (let r = 0; r < 7; r++)
        ((e.fillStyle = Fd[Math.floor(t.next() * Fd.length)]),
          e.beginPath(),
          e.arc(
            i + 10 + t.next() * (n - 28),
            Pd(1) - t.next() * 18,
            6 + t.next() * 4,
            0,
            Math.PI * 2,
          ),
          e.fill());
      I(e, i, Pd(0.9), n - 8, 0.9 * Nd, `#2a2030`);
    }
  },
  ef = (e, t) => {
    (Id(e, `#ffffff`, `#eef2f0`),
      Ld(e, t, Dd + 2, jd - 4, 2.1, 5, [
        `#f4f0e8`,
        `#ffffff`,
        `#e85a8a`,
        `#3a7ac8`,
        `#f0c030`,
        `#3aa060`,
        `#a0d0e8`,
      ]));
    for (let n = 0; n < 5; n++)
      for (let r = Dd + 6; r < Od - 20; r += 34 + t.next() * 16)
        I(
          e,
          r,
          Pd(2.1) + ((Pd(0.1) - Pd(2.1)) / 5) * (n + 1) - 9,
          16,
          9,
          `#ffe800`,
        );
    (I(e, Dd, kd, jd, 20, `#ffe000`),
      Ea(
        e,
        zd(`drugstore`).slice(1, 3).join(`・`),
        Dd + jd / 2,
        kd + 10,
        jd * 0.9,
        14,
        `#1a3aa0`,
      ));
  },
  tf = (e, t) => {
    Id(e, `#f4ece0`, `#e0d4c0`);
    for (let t = 0; t < 6; t++) {
      let n = Dd + 8 + t * 38,
        r = kd + 8;
      (I(e, n, r, 34, 46, `#ffffff`),
        I(
          e,
          n + 3,
          r + 3,
          28,
          22,
          [`#c86a2a`, `#e8c070`, `#a04a2a`, `#d89a4a`][t % 4],
        ),
        I(e, n + 3, r + 30, 28, 4, `#d02a1a`));
    }
    (Wd(e, `#c4c8ca`, 0.9),
      Ld(e, t, Dd + 20, jd - 40, 1.8, 2, [
        `#e8c070`,
        `#c86a2a`,
        `#3aa060`,
        `#f4f0e8`,
      ]));
  },
  nf = (e) => {
    (Id(e, `#d02020`, `#a01010`),
      I(e, Dd + 20, kd + 10, jd - 40, 50, `#ffe000`),
      Ea(
        e,
        B(`buildings.room.takarakuji`),
        Dd + jd / 2,
        kd + 35,
        jd * 0.6,
        36,
        `#d01010`,
      ));
  },
  rf = (e) => {
    Id(e, `#d8d8d4`, `#b8b8b2`);
    for (let t = 0; t < 5; t++) {
      let n = Dd + 26 + t * 46,
        r = Pd(0.45);
      ((e.strokeStyle = `#2a2a2a`), (e.lineWidth = 2.5));
      for (let t of [-14, 14])
        (e.beginPath(), e.arc(n + t, r, 12, 0, Math.PI * 2), e.stroke());
      ((e.strokeStyle = [`#c02020`, `#2a6ac0`, `#f0f0f0`, `#3a8a3a`, `#e0b020`][
        t
      ]),
        e.beginPath(),
        e.moveTo(n - 14, r),
        e.lineTo(n, r - 16),
        e.lineTo(n + 14, r),
        e.lineTo(n - 2, r),
        e.closePath(),
        e.stroke());
    }
  },
  af = (e, t) => {
    Id(e, `#7a5a3a`, `#4a3420`);
    for (let n = 0; n < 4; n++) {
      let r = Pd(0.6 + n * 0.45);
      I(e, Dd, r, jd, 3, `#3a2414`);
      for (let n = Dd + 4; n < Od - 16; n += 18 + t.next() * 8)
        I(
          e,
          n,
          r - 18,
          14,
          18,
          t.chance(0.4) ? `#e8dcc0` : t.chance(0.5) ? `#8a2a1a` : `#2a3a5a`,
        );
    }
    (I(e, Dd + jd / 2 - 14, kd + 6, 28, 70, `#f0e8d4`),
      Da(
        e,
        B(`trade.wagashi.sign.wagashi`),
        Dd + jd / 2,
        kd + 12,
        kd + 70,
        16,
        `#2a1a10`,
        ca(),
      ));
  },
  of = (e) => {
    Id(e, `#f2f0ec`, `#e2ded8`);
    for (let t = 0; t < 3; t++) {
      let n = Dd + 20 + t * 76;
      (I(e, n, Pd(2.2), 50, 70, `#c8d4dc`),
        I(e, n + 3, Pd(2.15), 44, 64, `#9aaab4`),
        I(e, n + 10, Pd(0.9), 30, 0.9 * Nd, `#2a2a2e`));
    }
  },
  sf = (e, t) => {
    Id(e, `#efe6d6`, `#d8cbb4`);
    for (let n = 0; n < 4; n++) {
      let r = Dd + 12 + n * ((jd - 24) / 4),
        i = (jd - 24) / 4 - 8;
      (I(e, r, Pd(2.3), i, 1.5 * Nd, `#3a2a1e`),
        ma(e, r + 4, Pd(2.2), i - 8, 0.6 * Nd, `#fff4dc`, `#e8d4b0`),
        ma(e, r + 4, Pd(1.45), i - 8, 0.6 * Nd, `#fff4dc`, `#e8d4b0`));
      let a = Math.floor(t.next() * 3);
      for (let t of [Pd(1.85), Pd(1.1)])
        if (a === 0) {
          I(e, r + i / 2 - 6, t, 12, 16, `#2a1a30`);
          for (let n = 0; n < 7; n++)
            I(
              e,
              r + i / 2 - 8 + n * 2.4,
              t + 2 + Math.abs(n - 3) * 1.5,
              2,
              2,
              `#fffaf0`,
            );
        } else if (a === 1)
          for (let n = 0; n < 3; n++)
            ((e.fillStyle = `#c8a860`),
              e.beginPath(),
              e.arc(r + 10 + n * ((i - 20) / 2), t + 8, 4.5, 0, Math.PI * 2),
              e.fill());
        else
          for (let n = 0; n < 4; n++)
            I(e, r + 8 + n * ((i - 16) / 3) - 2, t + 6, 4, 8, `#f0e0a0`);
    }
    I(e, Dd + 10, Pd(0.95), jd - 20, 4, `#c8a860`);
  },
  cf = (e, t) => {
    (Id(e, `#6a4a30`, `#3a2818`),
      Vd(e, `kissaten`, Dd + 16, kd + 10, 96, 64, `#1e2a1e`, `#f0ead0`, 4),
      Gd(e, t, Dd + 130, jd - 140, 1.4, 2));
    for (let t = 0; t < 3; t++)
      ((e.fillStyle = `#ffd890`),
        e.beginPath(),
        e.arc(Dd + 150 + t * 30, kd + 20, 6, 0, Math.PI * 2),
        e.fill());
  },
  lf = (e, t) => {
    Id(e, `#f0ebe2`, `#ddd4c4`);
    for (let n = 0; n < 2; n++) {
      let r = Pd(1.9 - n * 0.9);
      I(e, Dd + 10, r, jd - 20, 2, `#8a8a8a`);
      for (let n = Dd + 14; n < Od - 14; n += 7)
        I(
          e,
          n,
          r + 2,
          6,
          34 + t.next() * 10,
          [`#2a2a2a`, `#e8e0d0`, `#8a3a3a`, `#3a4a6a`, `#c8b090`][
            Math.floor(t.next() * 5)
          ],
        );
    }
  },
  uf = (e, t) => {
    Id(e, `#eef0f2`, `#dde0e4`);
    for (let n = 0; n < 3; n++)
      for (let r = 0; r < 6; r++) {
        let i = Dd + 10 + r * 38,
          a = kd + 8 + n * 44;
        (I(e, i, a, 32, 40, `#fbfbf6`),
          I(e, i, a, 32, 8, t.chance(0.5) ? `#1a5a9a` : `#d02a1a`),
          I(e, i + 4, a + 12, 24, 12, `#c8d0d8`));
      }
    I(e, Dd + 20, Pd(0.8), jd - 40, 0.8 * Nd, `#d8d0c0`);
  },
  See = (e, t) => {
    Id(e, `#e8d8b8`, `#c8b088`);
    for (let n = 0; n < 4; n++) {
      let r = Pd(0.9 + n * 0.38);
      I(e, Dd + 8, r, jd - 16, 2.5, `#8a6a40`);
      for (let n = Dd + 12; n < Od - 16; n += 13)
        ((e.fillStyle = t.chance(0.5) ? `#c8843a` : `#a8642a`),
          e.beginPath(),
          e.ellipse(n + 5, r - 5, 6, 4.5, 0, 0, Math.PI * 2),
          e.fill());
    }
  },
  df = (e, t) => {
    Id(e, `#f6f8f8`, `#e8ecee`);
    for (let n = 0; n < 5; n++)
      for (let r = 0; r < 16; r++)
        I(
          e,
          Dd + 6 + r * 14,
          kd + 30 + n * 16,
          12,
          13,
          Fd[(n * 7 + r * 3 + Math.floor(t.next() * 3)) % Fd.length],
        );
    (I(e, Dd, kd, jd, 14, `#2a8a4a`), Wd(e, `#d8dde0`, 1));
  },
  ff = (e, t) => {
    Id(e, `#e8e0d0`, `#c8bca8`);
    for (let n = 0; n < 6; n++) {
      let r = Pd(0.3 + n * 0.33);
      I(e, Dd, r, jd, 2, `#6a4a30`);
      for (let n = Dd + 2; n < Od - 3; n += 3.2)
        I(e, n, r - 16, 2.6, 16, Fd[Math.floor(t.next() * Fd.length)]);
    }
  },
  pf = (e, t) => {
    Id(e, `#d8dcd8`, `#b8bcb8`);
    for (let n = 0; n < 9; n++)
      for (let r = 0; r < 14; r++) {
        let i = Dd + 4 + r * 16.5,
          a = kd + 6 + n * 23;
        (I(e, i, a, 15, 21, `#eef0ee`),
          I(e, i + 2, a + 3, 11, 4, Fd[Math.floor(t.next() * Fd.length)]),
          I(e, i + 5, a + 14, 5, 2, `#5a5a5a`));
      }
  },
  mf = (e, t) => {
    Id(e, `#8a7a5a`, `#6a5a3a`);
    for (let n = 0; n < 3; n++)
      for (let r = 0; r < 6; r++) {
        let i = Dd + 6 + r * 39,
          a = Pd(0.5 + n * 0.55);
        I(e, i, a, 35, 28, `#c8a060`);
        let o = [
          `#e04020`,
          `#f0a020`,
          `#3a9a3a`,
          `#a0c040`,
          `#8a2a6a`,
          `#f0e0a0`,
        ][Math.floor(t.next() * 6)];
        for (let n = 0; n < 8; n++)
          ((e.fillStyle = o),
            e.beginPath(),
            e.arc(
              i + 5 + t.next() * 25,
              a + 4 + t.next() * 8,
              4.5,
              0,
              Math.PI * 2,
            ),
            e.fill());
      }
  },
  hf = (e, t) => {
    (Id(e, `#4a3428`, `#2a1c14`),
      Bd(e, t, `yakitori`, kd + 4, 64, `#f4e6c4`, `#3a1a10`, 8));
    for (let t = 0; t < 3; t++) {
      let n = Dd + 30 + t * 76;
      (I(e, n, Pd(2.1), 36, 8, `#8a8e90`),
        I(e, n + 15, kd + 68, 6, Pd(2.1) - kd - 68, `#7a7e80`));
    }
  },
  gf = (e, t) => {
    Id(e, `#dfe6da`, `#bfc8b8`);
    for (let n = 0; n < 2; n++)
      for (let r = 0; r < 7; r++) {
        let i = Dd + 10 + r * 33,
          a = Pd(0.6 + n * 0.8);
        I(e, i, a, 22, 26, `#3a4a5a`);
        for (let n = 0; n < 6; n++)
          ((e.fillStyle = [
            `#e83a5a`,
            `#f8f0f4`,
            `#f0c020`,
            `#c060c0`,
            `#ff8040`,
          ][Math.floor(t.next() * 5)]),
            e.beginPath(),
            e.arc(
              i + 4 + t.next() * 14,
              a - 4 - t.next() * 14,
              4,
              0,
              Math.PI * 2,
            ),
            e.fill());
      }
  },
  _f = (e, t) => {
    (Id(e, `#2a1420`, `#140a10`),
      Gd(e, t, Dd + 10, jd - 20, 1.3, 3),
      I(e, Dd, kd + 6, jd, 3, `#ff40c0`),
      I(e, Dd + jd * 0.35, kd + 20, jd * 0.3, 26, `#1a0a14`),
      Ea(
        e,
        B(`trade.snack.sign.snack`),
        Dd + jd / 2,
        kd + 33,
        jd * 0.28,
        18,
        `#ff80e0`,
      ));
  },
  vf = (e, t) => {
    (Id(e, `#f6f5f2`, `#ebe9e4`), I(e, Dd, kd, jd, 6, `#2a2a2a`));
    for (let t = 0; t < 5; t++) I(e, Dd + 20 + t * 48, kd + 6, 3, 8, `#2a2a2a`);
    let n = 1 + Math.floor(t.next() * 3);
    for (let r = 0; r < n; r++) {
      let i = (jd - 40) / n - 14,
        a = Dd + 20 + r * ((jd - 40) / n) + 7,
        o = Math.min(1.2 * Nd, i * (0.6 + t.next() * 0.5)),
        s = Pd(1.55) - o / 2;
      (ma(
        e,
        a - 8,
        kd + 14,
        i + 16,
        s - kd - 14 + o,
        `rgba(255,248,230,0)`,
        `rgba(255,248,230,0.55)`,
      ),
        I(
          e,
          a - 3,
          s - 3,
          i + 6,
          o + 6,
          t.chance(0.5) ? `#1a1a1a` : `#b89a64`,
        ));
      let c = [
        [`#2a4a6a`, `#e8d8b0`, `#c84a2a`],
        [`#3a5a3a`, `#d8e0d0`, `#8a6a3a`],
        [`#f0c8a8`, `#6a2a4a`, `#2a2a3a`],
      ][Math.floor(t.next() * 3)];
      I(e, a, s, i, o, c[1]);
      for (let n = 0; n < 6; n++)
        I(
          e,
          a + t.next() * i * 0.8,
          s + t.next() * o * 0.8,
          i * (0.1 + t.next() * 0.3),
          o * (0.08 + t.next() * 0.3),
          c[n % 2 ? 0 : 2],
        );
    }
    (I(e, Dd + 14, Pd(2.35), 60, 5, `#8a8a8a`),
      I(e, Dd + 14, Pd(2.35) + 9, 38, 3, `#a8a8a8`));
  },
  yf = (e) => {
    Id(e, `#f0f4f6`, `#dde4e8`);
    for (let t = 0; t < 2; t++)
      for (let n = 0; n < 5; n++) {
        let r = Dd + 6 + n * 46,
          i = Pd(2.2 - t * 1.05);
        (I(e, r, i, 42, 56, `#e8ecee`),
          (e.fillStyle = `#5a6a7a`),
          e.beginPath(),
          e.arc(r + 21, i + 30, 15, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = `#a8c0d0`),
          e.beginPath(),
          e.arc(r + 21, i + 30, 11, 0, Math.PI * 2),
          e.fill(),
          I(e, r + 4, i + 4, 34, 7, `#2a3a4a`));
      }
  },
  bf = {};
