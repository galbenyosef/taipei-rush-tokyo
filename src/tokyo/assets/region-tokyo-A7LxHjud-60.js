// tokyo/assets/region-tokyo-A7LxHjud 60 — next
// Lines 27232-27730 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var poe = (e, t) => {
    (Qu(e, `#d8c8a8`, `#b89a70`),
      P(e, Uu, Xu(1), qu, Xu(0) - Xu(1), `#6a4a2a`),
      nd(e, t, `izakaya`, Gu + 6, 70, `#f6eedc`, `#1a1a1a`, 9),
      P(e, Uu + qu * 0.55, Xu(2.1), qu * 0.4, Xu(1) - Xu(2.1), `#2a2a2a`),
      P(e, Uu + qu * 0.55, Xu(2.1), qu * 0.4, 30, `#1c2a52`));
    for (let t = 1; t < 4; t++)
      P(e, Uu + qu * 0.55 + (qu * 0.4 * t) / 4, Xu(2.1), 2, 30, `#0c1430`);
    id(e, t, Uu + 8, qu * 0.4, 1.3, 2);
  },
  moe = (e, t) => {
    (Qu(e, `#e8e2d0`, `#c8bea8`),
      P(e, Uu, Xu(1.05), qu, Xu(0) - Xu(1.05), `#b8bcbe`),
      P(e, Uu + 30, Xu(2.6), qu - 60, 20, `#9aa0a4`),
      nd(e, t, `ramen`, Gu + 4, 64, `#fff6d0`, `#b0161c`, 8));
    for (let t = 0; t < 4; t++)
      ((e.fillStyle = `#3a3a3a`),
        e.beginPath(),
        e.arc(Uu + 60 + t * 40, Xu(1.15), 9, 0, Math.PI * 2),
        e.fill());
    foe(e, Wu - 46, Xu(1.75), 36, 1.75 * Yu);
  },
  hoe = (e, t) => {
    (Qu(e, `#eceae4`, `#d8d4cc`),
      $u(e, t, Uu + 4, qu * 0.48, 2.1, 5),
      $u(e, t, Uu + qu * 0.52, qu * 0.46, 2.1, 5),
      P(e, Uu, Gu, qu, 22, `#f0d020`),
      Yr(
        e,
        L(`common.promo.daitokka`),
        Uu + qu / 2,
        Gu + 11,
        qu * 0.5,
        16,
        `#d01010`,
      ));
  },
  goe = (e) => {
    (Qu(e, `#f4f6f6`, `#e4e8e8`),
      P(e, Uu + 20, Xu(1.1), qu - 40, Xu(0) - Xu(1.1), `#c8dce2`),
      P(e, Uu + 20, Xu(1.1), qu - 40, 4, `#a0b8c0`),
      P(e, Uu + 30, Xu(2.4), 40, 54, `#e0ecf0`),
      P(e, Uu + 34, Xu(2.35), 32, 8, `#3a8aa0`),
      (e.fillStyle = `#ffffff`),
      e.beginPath(),
      e.arc(Wu - 50, Xu(2.6), 14, 0, Math.PI * 2),
      e.fill(),
      (e.strokeStyle = `#333`),
      (e.lineWidth = 1.5),
      e.stroke());
  },
  _oe = (e, t) => {
    Qu(e, `#d8d0c0`, `#b8ae9c`);
    for (let n = Gu; n < Ku; n += 30)
      for (let r = Uu; r < Wu; r += 46)
        P(e, r + 1, n + 1, 44, 28, t.chance(0.5) ? `#cfc6b4` : `#c6bca8`);
    let n = Uu + 24,
      r = Xu(1.9);
    for (let t = 0; t < 4; t++)
      for (let i = 0; i < 6; i++)
        P(e, n + i * 22, r + t * 16, 20, 14, `#8a8e90`);
    (P(e, Wu - 50, Xu(1.5), 16, 30, `#3a3e42`),
      P(e, Wu - 47, Xu(1.45), 10, 8, `#7ad0ff`));
  },
  voe = (e, t) => {
    (Qu(e, `#f6f8f8`, `#e8ecee`),
      doe(e, t, Uu + qu * 0.42, qu * 0.58, 2.1, 5),
      $u(e, t, Uu + 4, qu * 0.38, 1.7, 4),
      P(e, Uu, Gu, qu, 16, `#2a8a4a`),
      P(e, Uu, Gu + 16, qu, 5, `#f08a20`),
      P(e, Uu, Gu + 21, qu, 5, `#3a6ac0`),
      Yr(
        e,
        td(`konbini`)[1] ?? ``,
        Uu + qu * 0.2,
        Xu(2.05),
        qu * 0.36,
        11,
        `#c01a1a`,
      ));
  },
  yoe = (e, t) => {
    Qu(e, `#c8b48a`, `#9a8460`);
    for (let n = 0; n < 4; n++)
      for (let r = 0; r < 9; r++) {
        let i = Uu + 10 + r * 25,
          a = Xu(2.4) + n * 30;
        (P(e, i, a, 18, 24, t.chance(0.5) ? `#2a5a2a` : `#c8a040`),
          P(e, i, a + 8, 18, 6, `#f0e8d0`));
      }
  },
  boe = (e, t) => {
    Qu(e, `#1a1020`, `#0a0810`);
    let n = qu / 4;
    for (let r = 0; r < 4; r++) {
      let i = Uu + r * n + 4,
        a = [`#ff4aa8`, `#40c8ff`, `#ffd040`, `#7aff7a`][r % 4];
      (P(e, i, Xu(2.3), n - 8, 2.3 * Yu - 4, a),
        P(e, i + 4, Xu(2.1), n - 16, 1.2 * Yu, `#f8f4ff`));
      for (let r = 0; r < 7; r++)
        ((e.fillStyle = Zu[Math.floor(t.next() * Zu.length)]),
          e.beginPath(),
          e.arc(
            i + 10 + t.next() * (n - 28),
            Xu(1) - t.next() * 18,
            6 + t.next() * 4,
            0,
            Math.PI * 2,
          ),
          e.fill());
      P(e, i, Xu(0.9), n - 8, 0.9 * Yu, `#2a2030`);
    }
  },
  xoe = (e, t) => {
    (Qu(e, `#ffffff`, `#eef2f0`),
      $u(e, t, Uu + 2, qu - 4, 2.1, 5, [
        `#f4f0e8`,
        `#ffffff`,
        `#e85a8a`,
        `#3a7ac8`,
        `#f0c030`,
        `#3aa060`,
        `#a0d0e8`,
      ]));
    for (let n = 0; n < 5; n++)
      for (let r = Uu + 6; r < Wu - 20; r += 34 + t.next() * 16)
        P(
          e,
          r,
          Xu(2.1) + ((Xu(0.1) - Xu(2.1)) / 5) * (n + 1) - 9,
          16,
          9,
          `#ffe800`,
        );
    (P(e, Uu, Gu, qu, 20, `#ffe000`),
      Yr(
        e,
        td(`drugstore`).slice(1, 3).join(`・`),
        Uu + qu / 2,
        Gu + 10,
        qu * 0.9,
        14,
        `#1a3aa0`,
      ));
  },
  Soe = (e, t) => {
    Qu(e, `#f4ece0`, `#e0d4c0`);
    for (let t = 0; t < 6; t++) {
      let n = Uu + 8 + t * 38,
        r = Gu + 8;
      (P(e, n, r, 34, 46, `#ffffff`),
        P(
          e,
          n + 3,
          r + 3,
          28,
          22,
          [`#c86a2a`, `#e8c070`, `#a04a2a`, `#d89a4a`][t % 4],
        ),
        P(e, n + 3, r + 30, 28, 4, `#d02a1a`));
    }
    (rd(e, `#c4c8ca`, 0.9),
      $u(e, t, Uu + 20, qu - 40, 1.8, 2, [
        `#e8c070`,
        `#c86a2a`,
        `#3aa060`,
        `#f4f0e8`,
      ]));
  },
  Coe = (e) => {
    (Qu(e, `#d02020`, `#a01010`),
      P(e, Uu + 20, Gu + 10, qu - 40, 50, `#ffe000`),
      Yr(
        e,
        L(`buildings.room.takarakuji`),
        Uu + qu / 2,
        Gu + 35,
        qu * 0.6,
        36,
        `#d01010`,
      ));
  },
  woe = (e) => {
    Qu(e, `#d8d8d4`, `#b8b8b2`);
    for (let t = 0; t < 5; t++) {
      let n = Uu + 26 + t * 46,
        r = Xu(0.45);
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
  Toe = (e, t) => {
    Qu(e, `#7a5a3a`, `#4a3420`);
    for (let n = 0; n < 4; n++) {
      let r = Xu(0.6 + n * 0.45);
      P(e, Uu, r, qu, 3, `#3a2414`);
      for (let n = Uu + 4; n < Wu - 16; n += 18 + t.next() * 8)
        P(
          e,
          n,
          r - 18,
          14,
          18,
          t.chance(0.4) ? `#e8dcc0` : t.chance(0.5) ? `#8a2a1a` : `#2a3a5a`,
        );
    }
    (P(e, Uu + qu / 2 - 14, Gu + 6, 28, 70, `#f0e8d4`),
      Xr(
        e,
        L(`trade.wagashi.sign.wagashi`),
        Uu + qu / 2,
        Gu + 12,
        Gu + 70,
        16,
        `#2a1a10`,
        Nr(),
      ));
  },
  Eoe = (e) => {
    Qu(e, `#f2f0ec`, `#e2ded8`);
    for (let t = 0; t < 3; t++) {
      let n = Uu + 20 + t * 76;
      (P(e, n, Xu(2.2), 50, 70, `#c8d4dc`),
        P(e, n + 3, Xu(2.15), 44, 64, `#9aaab4`),
        P(e, n + 10, Xu(0.9), 30, 0.9 * Yu, `#2a2a2e`));
    }
  },
  Doe = (e, t) => {
    Qu(e, `#efe6d6`, `#d8cbb4`);
    for (let n = 0; n < 4; n++) {
      let r = Uu + 12 + n * ((qu - 24) / 4),
        i = (qu - 24) / 4 - 8;
      (P(e, r, Xu(2.3), i, 1.5 * Yu, `#3a2a1e`),
        zr(e, r + 4, Xu(2.2), i - 8, 0.6 * Yu, `#fff4dc`, `#e8d4b0`),
        zr(e, r + 4, Xu(1.45), i - 8, 0.6 * Yu, `#fff4dc`, `#e8d4b0`));
      let a = Math.floor(t.next() * 3);
      for (let t of [Xu(1.85), Xu(1.1)])
        if (a === 0) {
          P(e, r + i / 2 - 6, t, 12, 16, `#2a1a30`);
          for (let n = 0; n < 7; n++)
            P(
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
            P(e, r + 8 + n * ((i - 16) / 3) - 2, t + 6, 4, 8, `#f0e0a0`);
    }
    P(e, Uu + 10, Xu(0.95), qu - 20, 4, `#c8a860`);
  },
  Ooe = (e, t) => {
    (Qu(e, `#6a4a30`, `#3a2818`),
      uoe(e, `kissaten`, Uu + 16, Gu + 10, 96, 64, `#1e2a1e`, `#f0ead0`, 4),
      id(e, t, Uu + 130, qu - 140, 1.4, 2));
    for (let t = 0; t < 3; t++)
      ((e.fillStyle = `#ffd890`),
        e.beginPath(),
        e.arc(Uu + 150 + t * 30, Gu + 20, 6, 0, Math.PI * 2),
        e.fill());
  },
  koe = (e, t) => {
    Qu(e, `#f0ebe2`, `#ddd4c4`);
    for (let n = 0; n < 2; n++) {
      let r = Xu(1.9 - n * 0.9);
      P(e, Uu + 10, r, qu - 20, 2, `#8a8a8a`);
      for (let n = Uu + 14; n < Wu - 14; n += 7)
        P(
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
  Aoe = (e, t) => {
    Qu(e, `#eef0f2`, `#dde0e4`);
    for (let n = 0; n < 3; n++)
      for (let r = 0; r < 6; r++) {
        let i = Uu + 10 + r * 38,
          a = Gu + 8 + n * 44;
        (P(e, i, a, 32, 40, `#fbfbf6`),
          P(e, i, a, 32, 8, t.chance(0.5) ? `#1a5a9a` : `#d02a1a`),
          P(e, i + 4, a + 12, 24, 12, `#c8d0d8`));
      }
    P(e, Uu + 20, Xu(0.8), qu - 40, 0.8 * Yu, `#d8d0c0`);
  },
  joe = (e, t) => {
    Qu(e, `#e8d8b8`, `#c8b088`);
    for (let n = 0; n < 4; n++) {
      let r = Xu(0.9 + n * 0.38);
      P(e, Uu + 8, r, qu - 16, 2.5, `#8a6a40`);
      for (let n = Uu + 12; n < Wu - 16; n += 13)
        ((e.fillStyle = t.chance(0.5) ? `#c8843a` : `#a8642a`),
          e.beginPath(),
          e.ellipse(n + 5, r - 5, 6, 4.5, 0, 0, Math.PI * 2),
          e.fill());
    }
  },
  Moe = (e, t) => {
    Qu(e, `#f6f8f8`, `#e8ecee`);
    for (let n = 0; n < 5; n++)
      for (let r = 0; r < 16; r++)
        P(
          e,
          Uu + 6 + r * 14,
          Gu + 30 + n * 16,
          12,
          13,
          Zu[(n * 7 + r * 3 + Math.floor(t.next() * 3)) % Zu.length],
        );
    (P(e, Uu, Gu, qu, 14, `#2a8a4a`), rd(e, `#d8dde0`, 1));
  },
  Noe = (e, t) => {
    Qu(e, `#e8e0d0`, `#c8bca8`);
    for (let n = 0; n < 6; n++) {
      let r = Xu(0.3 + n * 0.33);
      P(e, Uu, r, qu, 2, `#6a4a30`);
      for (let n = Uu + 2; n < Wu - 3; n += 3.2)
        P(e, n, r - 16, 2.6, 16, Zu[Math.floor(t.next() * Zu.length)]);
    }
  },
  Poe = (e, t) => {
    Qu(e, `#d8dcd8`, `#b8bcb8`);
    for (let n = 0; n < 9; n++)
      for (let r = 0; r < 14; r++) {
        let i = Uu + 4 + r * 16.5,
          a = Gu + 6 + n * 23;
        (P(e, i, a, 15, 21, `#eef0ee`),
          P(e, i + 2, a + 3, 11, 4, Zu[Math.floor(t.next() * Zu.length)]),
          P(e, i + 5, a + 14, 5, 2, `#5a5a5a`));
      }
  },
  Foe = (e, t) => {
    Qu(e, `#8a7a5a`, `#6a5a3a`);
    for (let n = 0; n < 3; n++)
      for (let r = 0; r < 6; r++) {
        let i = Uu + 6 + r * 39,
          a = Xu(0.5 + n * 0.55);
        P(e, i, a, 35, 28, `#c8a060`);
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
  Ioe = (e, t) => {
    (Qu(e, `#4a3428`, `#2a1c14`),
      nd(e, t, `yakitori`, Gu + 4, 64, `#f4e6c4`, `#3a1a10`, 8));
    for (let t = 0; t < 3; t++) {
      let n = Uu + 30 + t * 76;
      (P(e, n, Xu(2.1), 36, 8, `#8a8e90`),
        P(e, n + 15, Gu + 68, 6, Xu(2.1) - Gu - 68, `#7a7e80`));
    }
  },
  Loe = (e, t) => {
    Qu(e, `#dfe6da`, `#bfc8b8`);
    for (let n = 0; n < 2; n++)
      for (let r = 0; r < 7; r++) {
        let i = Uu + 10 + r * 33,
          a = Xu(0.6 + n * 0.8);
        P(e, i, a, 22, 26, `#3a4a5a`);
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
  Roe = (e, t) => {
    (Qu(e, `#2a1420`, `#140a10`),
      id(e, t, Uu + 10, qu - 20, 1.3, 3),
      P(e, Uu, Gu + 6, qu, 3, `#ff40c0`),
      P(e, Uu + qu * 0.35, Gu + 20, qu * 0.3, 26, `#1a0a14`),
      Yr(
        e,
        L(`trade.snack.sign.snack`),
        Uu + qu / 2,
        Gu + 33,
        qu * 0.28,
        18,
        `#ff80e0`,
      ));
  },
  zoe = (e, t) => {
    (Qu(e, `#f6f5f2`, `#ebe9e4`), P(e, Uu, Gu, qu, 6, `#2a2a2a`));
    for (let t = 0; t < 5; t++) P(e, Uu + 20 + t * 48, Gu + 6, 3, 8, `#2a2a2a`);
    let n = 1 + Math.floor(t.next() * 3);
    for (let r = 0; r < n; r++) {
      let i = (qu - 40) / n - 14,
        a = Uu + 20 + r * ((qu - 40) / n) + 7,
        o = Math.min(1.2 * Yu, i * (0.6 + t.next() * 0.5)),
        s = Xu(1.55) - o / 2;
      (zr(
        e,
        a - 8,
        Gu + 14,
        i + 16,
        s - Gu - 14 + o,
        `rgba(255,248,230,0)`,
        `rgba(255,248,230,0.55)`,
      ),
        P(
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
      P(e, a, s, i, o, c[1]);
      for (let n = 0; n < 6; n++)
        P(
          e,
          a + t.next() * i * 0.8,
          s + t.next() * o * 0.8,
          i * (0.1 + t.next() * 0.3),
          o * (0.08 + t.next() * 0.3),
          c[n % 2 ? 0 : 2],
        );
    }
    (P(e, Uu + 14, Xu(2.35), 60, 5, `#8a8a8a`),
      P(e, Uu + 14, Xu(2.35) + 9, 38, 3, `#a8a8a8`));
  },
  Boe = (e) => {
    Qu(e, `#f0f4f6`, `#dde4e8`);
    for (let t = 0; t < 2; t++)
      for (let n = 0; n < 5; n++) {
        let r = Uu + 6 + n * 46,
          i = Xu(2.2 - t * 1.05);
        (P(e, r, i, 42, 56, `#e8ecee`),
          (e.fillStyle = `#5a6a7a`),
          e.beginPath(),
          e.arc(r + 21, i + 30, 15, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = `#a8c0d0`),
          e.beginPath(),
          e.arc(r + 21, i + 30, 11, 0, Math.PI * 2),
          e.fill(),
          P(e, r + 4, i + 4, 34, 7, `#2a3a4a`));
      }
  },
  ad = {};
