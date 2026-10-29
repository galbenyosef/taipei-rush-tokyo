// tokyo/assets/region-tokyo-sites-kit-DAwzVR8Q 03 — fillstyle
// Lines 634-981 of readable/tokyo/assets/region-tokyo-sites-kit-DAwzVR8Q.pretty.js (statement-aligned).
function O(e, t, n, r, i) {
  u(e);
  let a = r.kind;
  if (
    ((e.fillStyle =
      a === `guitar`
        ? `#2a2420`
        : a === `jewel`
          ? `#14121a`
          : a === `fish`
            ? `#dfe7ea`
            : a === `parts`
              ? `#cfd3d6`
              : `#efe7d6`),
    e.fillRect(0, 0, t, n),
    a === `choco`)
  ) {
    let r = [
      `#5a2c14`,
      `#c8261c`,
      `#f2c63a`,
      `#2a7a4a`,
      `#2a4aa8`,
      `#f4f0e6`,
      `#8a2a8a`,
    ];
    for (let a = 0; a < 6; a++)
      for (let o = 0; o < 8; o++)
        ((e.fillStyle =
          r[(o * 3 + a * 5 + Math.floor(i.next() * 3)) % r.length]),
          e.fillRect((o / 8) * t + 2, (a / 6) * n + 2, t / 8 - 4, n / 6 - 5),
          (e.fillStyle = `rgba(255,255,255,0.5)`),
          e.fillRect(
            (o / 8) * t + 4,
            (a / 6) * n + n / 12,
            t / 8 - 8,
            Math.max(1, n / 60),
          ));
  } else if (a === `panda` || a === `souvenir`)
    for (let r = 0; r < 22; r++) {
      let o = (0.06 + (r % 6) * 0.17 + (i.next() - 0.5) * 0.03) * t,
        s = (0.14 + Math.floor(r / 6) * 0.23) * n,
        c = t * (0.045 + i.next() * 0.025);
      if (a === `panda` || r % 3) {
        ((e.fillStyle = `#fafafa`),
          e.beginPath(),
          e.arc(o, s, c, 0, Math.PI * 2),
          e.fill(),
          (e.fillStyle = `#121212`));
        for (let t of [-1, 1])
          (e.beginPath(),
            e.arc(o + t * c * 0.75, s - c * 0.75, c * 0.32, 0, Math.PI * 2),
            e.fill(),
            e.beginPath(),
            e.ellipse(
              o + t * c * 0.38,
              s - c * 0.05,
              c * 0.2,
              c * 0.27,
              t * 0.5,
              0,
              Math.PI * 2,
            ),
            e.fill());
      } else
        ((e.fillStyle = [`#c8261c`, `#2a4aa8`, `#f2c63a`, `#e85a9a`][r % 4]),
          e.fillRect(o - c, s - c, c * 2, c * 2));
    }
  else if (a === `guitar`)
    for (let r = 0; r < 7; r++) {
      let i = ((r + 0.5) / 7) * t,
        a = n * 0.05,
        o = [
          `#c8261c`,
          `#f2e2b8`,
          `#1a1a1a`,
          `#2a5aa8`,
          `#e2a24a`,
          `#f4f4f4`,
          `#7a2a1a`,
        ][r];
      ((e.fillStyle = `#3a2a1a`),
        e.fillRect(i - t * 0.006, a, t * 0.012, n * 0.45),
        (e.fillStyle = o),
        e.beginPath(),
        e.ellipse(i, n * 0.6, t * 0.05, n * 0.12, 0, 0, Math.PI * 2),
        e.ellipse(i, n * 0.78, t * 0.06, n * 0.14, 0, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#111`),
        e.beginPath(),
        e.arc(i, n * 0.66, t * 0.015, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#ffffff`),
        e.fillRect(i - t * 0.03, n * 0.93, t * 0.06, n * 0.05));
    }
  else if (a === `parts`)
    for (let r = 0; r < 8; r++)
      for (let i = 0; i < 10; i++)
        ((e.fillStyle = (i + r) % 3 ? `#e9ecef` : `#f7e3a0`),
          e.fillRect((i / 10) * t + 1, (r / 8) * n + 1, t / 10 - 2, n / 8 - 2),
          (e.fillStyle = [
            `#c8261c`,
            `#2a5aa8`,
            `#3a8a3a`,
            `#7a5a2a`,
            `#1a1a1a`,
          ][(i * 7 + r * 3) % 5]),
          e.fillRect(
            (i / 10) * t + t / 40,
            (r / 8) * n + n / 32,
            t / 20,
            n / 32,
          ));
  else if (a === `jewel`)
    for (let r = 0; r < 3; r++)
      for (let i = 0; i < 5; i++) {
        let a = ((i + 0.5) / 5) * t,
          o = ((r + 0.5) / 3) * n;
        ((e.fillStyle = `#2a2236`),
          e.fillRect(a - t * 0.08, o - n * 0.13, t * 0.16, n * 0.26),
          (e.strokeStyle = [`#f2c63a`, `#e6e6ee`, `#f2c63a`][r]),
          (e.lineWidth = Math.max(1, t / 160)));
        for (let n = 0; n < 3; n++)
          (e.beginPath(),
            e.arc(a + (n - 1) * t * 0.045, o, t * 0.018, 0, Math.PI * 2),
            e.stroke());
      }
  else if (a === `fish`)
    for (let i = 0; i < 6; i++) {
      let a = (((i % 3) + 0.5) / 3) * t,
        o = ((Math.floor(i / 3) + 0.5) / 2) * n;
      ((e.fillStyle = i % 2 ? `#a8142a` : `#c8384a`),
        e.fillRect(a - t * 0.13, o - n * 0.15, t * 0.26, n * 0.26),
        (e.fillStyle = `rgba(255,255,255,0.35)`));
      for (let r = 0; r < 4; r++)
        e.fillRect(
          a - t * 0.13,
          o - n * 0.12 + r * n * 0.06,
          t * 0.26,
          Math.max(1, n / 120),
        );
      ((e.fillStyle = `#ffffff`),
        e.fillRect(a - t * 0.08, o + n * 0.13, t * 0.16, n * 0.08),
        (e.fillStyle = `#b3241b`),
        f(e, r.price ?? ``, a, o + n * 0.17, t * 0.15, n * 0.06, 800));
    }
  else if (a === `tamago`)
    for (let r = 0; r < 3; r++)
      for (let i = 0; i < 4; i++) {
        ((e.fillStyle = `#f2c63a`),
          e.fillRect(
            (i / 4) * t + t * 0.02,
            (r / 3) * n + n * 0.06,
            t / 4 - t * 0.04,
            n / 3 - n * 0.14,
          ),
          (e.fillStyle = `rgba(150,80,10,0.4)`));
        for (let a = 0; a < 4; a++)
          e.fillRect(
            (i / 4) * t + t * 0.02,
            (r / 3) * n + n * 0.08 + a * n * 0.05,
            t / 4 - t * 0.04,
            Math.max(1, n / 150),
          );
      }
  else if (a === `books`)
    for (let r = 0; r < 4; r++) {
      let a = 0;
      for (; a < t;) {
        let o = t * (0.02 + i.next() * 0.03);
        ((e.fillStyle = [
          `#7a2a1a`,
          `#2a3a6a`,
          `#d8c8a0`,
          `#3a5a3a`,
          `#e8e0d0`,
          `#5a4a3a`,
        ][Math.floor(i.next() * 6)]),
          e.fillRect(a, (r / 4) * n + n * 0.03, o - 1, n / 4 - n * 0.05),
          (a += o));
      }
    }
  else if (a === `knives`) {
    ((e.fillStyle = `#2a2420`), e.fillRect(0, 0, t, n));
    for (let r = 0; r < 9; r++) {
      let i = ((r + 0.5) / 9) * n;
      ((e.fillStyle = `#d8dde2`),
        e.fillRect(t * 0.15, i - n * 0.02, t * 0.55, n * 0.04),
        (e.fillStyle = `#6a4a2a`),
        e.fillRect(t * 0.7, i - n * 0.018, t * 0.18, n * 0.036),
        (e.fillStyle = `#ffffff`),
        e.fillRect(t * 0.05, i - n * 0.02, t * 0.08, n * 0.04));
    }
  } else if (a === `dry`) {
    let r = [
      `#c89a5a`,
      `#7a4a22`,
      `#b8321c`,
      `#5a7a2a`,
      `#e8d29a`,
      `#3a2a1a`,
      `#d8a83a`,
    ];
    for (let a = 0; a < 4; a++) {
      ((e.fillStyle = `#8a6a44`),
        e.fillRect(0, ((a + 1) / 4) * n - n * 0.03, t, n * 0.03));
      for (let o = 0; o < 9; o++) {
        let s = (o / 9) * t + t * 0.008,
          c = (a / 4) * n + n * 0.04,
          l = t / 9 - t * 0.016,
          u = n / 4 - n * 0.09;
        ((e.fillStyle =
          r[(o * 5 + a * 3 + Math.floor(i.next() * 2)) % r.length]),
          e.fillRect(s, c + u * 0.15, l, u * 0.85),
          (e.fillStyle = `rgba(255,255,255,0.35)`),
          e.fillRect(s, c + u * 0.15, l * 0.2, u * 0.85),
          (e.fillStyle = `#ffffff`),
          e.fillRect(s + l * 0.2, c + u * 0.55, l * 0.6, u * 0.25),
          (e.fillStyle = `#c8161c`),
          e.fillRect(s + l * 0.3, c + u * 0.62, l * 0.4, u * 0.1));
      }
    }
  } else if (a === `window`) {
    let r = e.createLinearGradient(0, 0, 0, n);
    (r.addColorStop(0, `#fff6e2`),
      r.addColorStop(1, `#e8d8bc`),
      (e.fillStyle = r),
      e.fillRect(0, 0, t, n),
      (e.fillStyle = `#5a5048`),
      e.fillRect(0, n * 0.18, t, n * 0.02));
    for (let r = 0; r < 6; r++)
      ((e.fillStyle = [
        `#2a3a5a`,
        `#c8b89a`,
        `#7a2a2a`,
        `#3a5a4a`,
        `#e8e4dc`,
        `#4a4a52`,
      ][r]),
        e.fillRect(t * (0.05 + r * 0.08), n * 0.2, t * 0.065, n * 0.42));
    ((e.fillStyle = `#8a6a44`),
      e.fillRect(t * 0.58, n * 0.6, t * 0.36, n * 0.08),
      (e.fillStyle = `#d8c8a8`),
      e.fillRect(t * 0.6, n * 0.68, t * 0.04, n * 0.3),
      e.fillRect(t * 0.88, n * 0.68, t * 0.04, n * 0.3),
      (e.fillStyle = `#c8161c`),
      e.fillRect(t * 0.66, n * 0.15, t * 0.22, n * 0.36),
      (e.fillStyle = `#ffffff`),
      e.fillRect(t * 0.69, n * 0.2, t * 0.16, n * 0.04));
  } else if (a === `katsuobushi`)
    for (let r = 0; r < 12; r++) {
      let i = (((r % 4) + 0.5) / 4) * t,
        a = ((Math.floor(r / 4) + 0.5) / 3) * n;
      ((e.fillStyle = `#5a3a1e`),
        e.beginPath(),
        e.ellipse(i, a, t * 0.1, n * 0.06, 0.2, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#f4ecd8`),
        e.fillRect(i - t * 0.09, a + n * 0.08, t * 0.18, n * 0.08));
    }
  r.label &&
    ((e.fillStyle = `#ffffff`),
    e.fillRect(t * 0.02, n * 0.86, t * 0.5, n * 0.12),
    (e.fillStyle = `#b3241b`),
    f(e, r.label, t * 0.27, n * 0.92, t * 0.46, n * 0.08, 900));
}
function k(e, t, n, r, i) {
  u(e);
  let a = t / r.cols,
    o = n / r.rows;
  for (let t = 0; t < r.cols * r.rows; t++) {
    let n = r.cells[t % r.cells.length],
      s = (t % r.cols) * a,
      c = Math.floor(t / r.cols) * o;
    (e.save(),
      e.translate(s, c),
      e.beginPath(),
      e.rect(0, 0, a, o),
      e.clip(),
      n.v
        ? b(
            e,
            a,
            o,
            {
              bg: n.bg,
              fg: n.fg,
              text: n.text,
              sub: n.sub,
              serif: n.serif,
              style: n.style,
            },
            i,
          )
        : y(
            e,
            a,
            o,
            {
              bg: n.bg,
              fg: n.fg,
              text: n.text,
              sub: n.sub,
              serif: n.serif,
              style: n.style,
            },
            i,
          ),
      e.restore());
  }
}
function A(e, t, n) {
  let r = e % t,
    i = Math.floor(e / t) % n,
    a = 0.004;
  return [r / t + a, 1 - (i + 1) / n + a, (r + 1) / t - a, 1 - i / n - a];
}
function j(e, t, n, r, i) {
  let a = r.items.length,
    o = t / a;
  for (let t = 0; t < a; t++)
    (e.save(),
      e.translate(t * o, 0),
      e.beginPath(),
      e.rect(0, 0, o, n),
      e.clip(),
      x(e, o, n, r.items[t], i),
      e.restore());
}
function M(e, t, n, r, i) {
  let a = [`#ffffff`, `#ffe066`, `#7ad8ff`, `#ff9a9a`];
  k(
    e,
    t,
    n,
    {
      cols: 4,
      rows: 2,
      cells: r.map((e, t) => ({
        bg: `#2c3a44`,
        fg: a[t % a.length],
        text: e,
        style: `plain`,
      })),
    },
    i,
  );
}
