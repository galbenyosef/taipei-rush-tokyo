// tokyo/assets/region-tokyo-d-kanda-CYJun2NB 05 — math
// Lines 1259-1576 of readable/tokyo/assets/region-tokyo-d-kanda-CYJun2NB.pretty.js (statement-aligned).
function Fe(e = `#a8acb0`) {
  return (t, n, r, i, a) => {
    B(t, n, r, i, a, e);
    for (let e = r; e < r + a; e += a / 16)
      B(t, n, e, i, a * 0.02, `rgba(0,0,0,0.25)`);
    B(t, n, r + a * 0.94, i, a * 0.06, `#606468`);
  };
}
function Ie(e) {
  return (t, n, r, i, a) => {
    let o = be(`wagon`, e);
    B(t, n, r, i, a, `#5a3a1a`);
    for (let e = 0; e < 3; e++) {
      let s = n + 2;
      for (; s < n + i - 2;) {
        let n = 2 + o.next() * 4;
        (B(
          t,
          s,
          r + 3 + (a / 3) * e,
          n - 0.6,
          a / 3 - 5,
          [
            `#d8c8a0`,
            `#a06030`,
            `#304060`,
            `#e8e0d0`,
            `#6a2a1a`,
            `#c09050`,
            `#f0f0f0`,
          ][o.int(0, 6)],
        ),
          (s += n));
      }
    }
  };
}
function Le(e) {
  return (t, n, r, i, a) => {
    (B(t, n, r, i, a, `#fffef6`),
      (t.strokeStyle = `#c01818`),
      (t.lineWidth = 2),
      t.strokeRect(n + 2, r + 2, i - 4, a - 4),
      H(t, z(e), n + i / 2, r + a / 2, i * 0.88, a * 0.6, `#c01818`, `900`));
  };
}
function Re(e, t) {
  return (n, r, i, a, o) => {
    B(n, r, i, a, o, e);
    for (let e = 0; e < 4; e++)
      B(
        n,
        r + (a * (e + 0.2)) / 4,
        i + o * 0.15,
        a * 0.12,
        o * 0.25,
        `rgba(0,0,0,0.25)`,
      );
    H(n, z(`brand.yuhi`), r + a / 2, i + o * 0.68, a * 0.7, o * 0.36, t, `900`);
  };
}
function ze(e, t = `#3e6a34`) {
  return (n, r, i, a, o) => {
    let s = be(`leaves`, e);
    B(n, r, i, a, o, t);
    for (let e = 0; e < 260; e++)
      ((n.fillStyle = [`#2a4a24`, `#4e7e3e`, `#5e8e48`, `#345a2c`, `#6a9a50`][
        s.int(0, 4)
      ]),
        n.beginPath(),
        n.arc(
          r + s.next() * a,
          i + s.next() * o,
          2 + s.next() * 5,
          0,
          Math.PI * 2,
        ),
        n.fill());
  };
}
function Be(e, t, n, r, i = !1) {
  return (a, o, s, c, l) => {
    (B(a, o, s, c, l, t),
      (a.strokeStyle = n),
      (a.lineWidth = Math.max(1.5, l * 0.05)),
      a.strokeRect(o + l * 0.08, s + l * 0.08, c - l * 0.16, l - l * 0.16),
      r
        ? (H(
            a,
            z(e),
            o + c / 2,
            s + l * 0.4,
            c * 0.84,
            l * 0.42,
            n,
            `900`,
            i ? f() : d(),
          ),
          H(a, z(r), o + c / 2, s + l * 0.74, c * 0.8, l * 0.2, n, `700`))
        : H(
            a,
            z(e),
            o + c / 2,
            s + l * 0.5,
            c * 0.84,
            l * 0.56,
            n,
            `900`,
            i ? f() : d(),
          ));
  };
}
function Ve(e) {
  return (t, n, r, i, a) => {
    let o = be(`ema`, e);
    B(t, n, r, i, a, `#3a1a10`);
    let s = i / 12,
      c = a / 5,
      l = [
        `#f08a3a`,
        `#e84a6a`,
        `#3a6ae0`,
        `#f4d040`,
        `#a050d0`,
        `#30a070`,
        `#2a2a2a`,
        `#e0e0f0`,
        `#7a4020`,
      ],
      u = [
        `kanda.ema.1`,
        `kanda.ema.2`,
        `kanda.ema.3`,
        `kanda.ema.4`,
        `kanda.ema.5`,
        `kanda.ema.6`,
        `kanda.ema.7`,
        `kanda.ema.8`,
      ];
    for (let e = 0; e < 5; e++)
      for (let i = 0; i < 13; i++) {
        let a = n + i * s - (e % 2) * s * 0.5 + (o.next() - 0.5) * 3,
          f = r + e * c + (o.next() - 0.5) * 3,
          p = s * 1.08,
          m = c * 0.98;
        ((t.fillStyle = [`#e8d2a8`, `#ecd8b0`, `#e0c898`][o.int(0, 2)]),
          t.beginPath(),
          t.moveTo(a, f + m * 0.3),
          t.lineTo(a + p / 2, f),
          t.lineTo(a + p, f + m * 0.3),
          t.lineTo(a + p, f + m),
          t.lineTo(a, f + m),
          t.closePath(),
          t.fill(),
          (t.strokeStyle = `rgba(80,40,10,0.6)`),
          (t.lineWidth = 1),
          t.stroke(),
          B(t, a + p * 0.47, f + m * 0.06, p * 0.06, m * 0.06, `#c01818`));
        let h = o.next();
        if (h < 0.38) {
          let e = a + p / 2,
            n = f + m * 0.62,
            r = Math.min(p, m) * 0.3,
            i = l[o.int(0, l.length - 1)];
          ((t.fillStyle = i),
            t.beginPath(),
            t.ellipse(e, n - r * 0.15, r * 1.15, r * 1.1, 0, 0, Math.PI * 2),
            t.fill(),
            o.next() < 0.5 &&
              (t.beginPath(),
              t.ellipse(
                e - r * 1.25,
                n + r * 0.3,
                r * 0.35,
                r * 0.8,
                0.3,
                0,
                Math.PI * 2,
              ),
              t.ellipse(
                e + r * 1.25,
                n + r * 0.3,
                r * 0.35,
                r * 0.8,
                -0.3,
                0,
                Math.PI * 2,
              ),
              t.fill()),
            (t.fillStyle = `#fbe4d2`),
            t.beginPath(),
            t.ellipse(e, n + r * 0.15, r * 0.8, r * 0.82, 0, 0, Math.PI * 2),
            t.fill(),
            (t.fillStyle = i),
            t.beginPath(),
            t.ellipse(e, n - r * 0.45, r * 0.85, r * 0.42, 0, 0, Math.PI),
            t.fill());
          let s = [`#3a6ae0`, `#30a070`, `#a050d0`, `#c03030`, `#7a4020`][
            o.int(0, 4)
          ];
          for (let i of [-1, 1])
            ((t.fillStyle = s),
              t.beginPath(),
              t.ellipse(
                e + i * r * 0.32,
                n + r * 0.12,
                r * 0.17,
                r * 0.24,
                0,
                0,
                Math.PI * 2,
              ),
              t.fill(),
              (t.fillStyle = `#ffffff`),
              t.beginPath(),
              t.arc(
                e + i * r * 0.32 - r * 0.05,
                n + r * 0.04,
                r * 0.06,
                0,
                Math.PI * 2,
              ),
              t.fill(),
              (t.fillStyle = `rgba(255,120,140,0.5)`),
              t.beginPath(),
              t.ellipse(
                e + i * r * 0.5,
                n + r * 0.42,
                r * 0.14,
                r * 0.07,
                0,
                0,
                Math.PI * 2,
              ),
              t.fill());
          (B(t, e - r * 0.08, n + r * 0.52, r * 0.16, r * 0.04, `#c04050`),
            o.next() < 0.5 &&
              H(
                t,
                o.next() < 0.5 ? `♡` : `☆`,
                a + p * 0.16,
                f + m * 0.4,
                p * 0.2,
                m * 0.2,
                `#e8406a`,
                `900`,
              ));
        } else if (h < 0.85) {
          let e = u[o.int(0, u.length - 1)];
          ye(
            t,
            z(e),
            a + p * 0.5,
            f + m * 0.3,
            f + m * 0.96,
            p * 0.3,
            [`#1a1a1a`, `#1a3aa0`, `#c01818`][o.int(0, 2)],
            d(),
            `700`,
          );
        } else
          ((t.fillStyle = `#8a2a1a`),
            t.beginPath(),
            t.arc(
              a + p / 2,
              f + m * 0.6,
              Math.min(p, m) * 0.22,
              0,
              Math.PI * 2,
            ),
            t.fill());
      }
  };
}
var He = (e) => (e.gh ?? 4) + (e.floors - 1) * (e.fh ?? 3.3) + 0.8,
  Ue = 35,
  We = 3,
  Ge = (e) => `#` + (e & 16777215).toString(16).padStart(6, `0`),
  Ke = (e) => `wall:${e.wallKind ?? `tile`}:${Ge(e.wall)}`,
  qe = (e, t, n) => `win:${e}:${t ?? ``}:${n ?? ``}`,
  Je = [`#ffffff`, `#ffe14a`, `#ff6a8a`, `#7ad0ff`],
  Ye = (e) =>
    e.shop === `guitar` || e.shop === `acoustic`
      ? i(`kanda-shopvar`, e.id) % 3
      : 0,
  Xe = (e) => `shop:${e.shop}:${Ye(e)}`;
function Ze(e, t) {
  e.need(`shutter`, 64, 64, Fe());
  for (let n of t) {
    (e.need(Ke(n), 64, 64, Me(n.wallKind ?? `tile`, Ge(n.wall))),
      e.need(qe(n.win), 160, 60, Ne(n.win)),
      (n.winWords ?? []).forEach((t, r) => {
        if (!t) return;
        let a = Je[i(n.id, r) % Je.length],
          o = Qe(t, r + 2);
        e.need(qe(n.win, o, a), 160, 60, Ne(n.win, o, a));
      }),
      e.need(Xe(n), 400, 160, Pe(n.shop, Ye(n))),
      n.front === `lattice` && e.need(`lattice`, 128, 96, Ae(`#2a1a10`)),
      e.need(U(n.fascia), 384, 48, xe(n.fascia)));
    for (let t of n.bands ?? []) e.need(U(t), 384, 48, xe(t));
    (n.roofBoard && e.need(U(n.roofBoard), 384, 96, xe(n.roofBoard)),
      n.vsign && e.need(Se(n.vsign), 52, 364, Ce(n.vsign)),
      n.vsign2 && e.need(Se(n.vsign2), 52, 364, Ce(n.vsign2)),
      n.noren &&
        e.need(
          `noren:${n.noren.key}:${n.noren.bg}`,
          128,
          80,
          Ee(n.noren.key, n.noren.bg, n.noren.fg),
        ));
    for (let t of n.lanterns ?? []) e.need(`chochin:${t}`, 64, 96, Te(t));
  }
}
function Qe(e, t) {
  return v(e, { n: t });
}
var $e = (e, t) => he(e, t);
