// tokyo/assets/region-tokyo-d-ginza-DhS6UQ2S 02 — addcolorstop
// Lines 126-411 of readable/tokyo/assets/region-tokyo-d-ginza-DhS6UQ2S.pretty.js (statement-aligned).
var ue = (e, t, n, r) => {
    A(e, 0, 0, t, n, `#a8b4b4`);
    let i = t / 6,
      a = n / 7;
    for (let t = 0; t < 7; t++)
      for (let n = 0; n < 6; n++) {
        let o = 0.86 + r.next() * 0.14,
          s = n * i + 2,
          c = t * a + 2,
          l = e.createLinearGradient(s, c, s + i, c + a);
        (l.addColorStop(0, g(232 * o, 242 * o, 244 * o)),
          l.addColorStop(0.5, g(206 * o, 224 * o, 228 * o)),
          l.addColorStop(1, g(238 * o, 240 * o, 236 * o)),
          (e.fillStyle = l),
          e.fillRect(s + 1, c + 1, i - 6, a - 6),
          (e.strokeStyle = g(255, 255, 250, 0.35)),
          (e.lineWidth = 1.5),
          e.strokeRect(s + i * 0.18, c + a * 0.18, i * 0.64 - 4, a * 0.64 - 4));
      }
  },
  de = (e, t, n, r) => {
    A(e, 0, 0, t, n, `#0b0b0d`);
    for (let i = 4; i < n; i += 8)
      for (let n = 4; n < t; n += 8) {
        let t = Math.abs(((n + i) % 64) - 32) / 32,
          a = Math.abs(((n - i + 512) % 64) - 32) / 32,
          o =
            0.22 + 0.55 * Math.max(0, 1 - Math.min(t, a) * 3) + r.next() * 0.08;
        I(e, n, i, 2.1, g(235 * o + 20, 235 * o + 20, 240 * o + 20));
      }
    L(e, t, n, `#050506`, 4);
  },
  fe = (e, t, n, r) => {
    b(e, 0, 0, t, n, `#f4f1ea`, `#e6e1d6`);
    for (let i = 0; i < 9; i++) {
      let i = 10 + r.next() * 26,
        a = i + r.next() * (t - 2 * i),
        o = i + r.next() * (n - 2 * i);
      (I(e, a, o, i + 3, `#cfc8b8`),
        se(e, a, o, i, `#fff6dc`, `#f1d8a0`),
        I(e, a, o, i * 0.2, `rgba(255,255,255,0.4)`));
    }
  },
  pe = (e, t, n) => {
    (b(e, 0, 0, t, n, `#fff1d0`, `#f7dca8`), (e.fillStyle = `#f6f6f2`));
    let r = t / 8;
    for (let t = 0; t < 8; t++)
      for (let n = 0; n < 8; n++) {
        let i = n * r,
          a = t * r;
        (e.save(),
          e.translate(i + r / 2, a + r / 2),
          e.rotate((((n + t) % 2 ? 1 : -1) * Math.PI) / 12),
          e.fillRect(-r / 2 - 1, -r / 2 - 1, r + 2, r * 0.24),
          e.fillRect(-r / 2 - 1, r / 4, r + 2, r * 0.28),
          e.fillRect(-r / 2 - 1, -r / 2, r * 0.24, r),
          e.restore());
      }
  },
  me = (e, t, n) => {
    b(e, 0, 0, t, n, `#1e1a16`, `#2c241a`);
    for (let r = 0; r < t; r += 32) {
      let t = e.createLinearGradient(0, 0, 0, n);
      (t.addColorStop(0, `#f8dc96`),
        t.addColorStop(1, `#a87830`),
        (e.fillStyle = t),
        e.fillRect(r + 12, 0, 8, n));
    }
    ((e.fillStyle = `rgba(255,220,160,0.18)`),
      e.fillRect(0, n * 0.58, t, 3),
      L(e, t, n, `#14110d`, 5));
  },
  he = (e, t, n) => {
    A(e, 0, 0, t, n, `#9aa0a6`);
    for (let r = -16; r < n + 16; r += 16) {
      let n = e.createLinearGradient(0, r, 0, r + 16);
      (n.addColorStop(0, `#f2f4f6`),
        n.addColorStop(0.5, `#b8bec4`),
        n.addColorStop(1, `#eef0f2`),
        (e.fillStyle = n),
        e.beginPath());
      for (let n = 0; n <= t; n += 8)
        e.lineTo(n, r + Math.sin((n / t) * oe * 2 + r * 0.05) * 5);
      for (let n = t; n >= 0; n -= 8)
        e.lineTo(n, r + 13 + Math.sin((n / t) * oe * 2 + r * 0.05) * 5);
      (e.closePath(), e.fill());
    }
  },
  ge = (e, t, n) => {
    b(e, 0, 0, t, n, `#c8f0ea`, `#9ed8d0`);
    for (let r = 16; r < n; r += 32) A(e, 0, r, t, 2, `rgba(255,255,255,0.7)`);
    for (let r = 0; r < t; r += 64) A(e, r, 0, 3, n, `rgba(60,110,110,0.45)`);
    L(e, t, n, `#6fa8a2`, 5);
  },
  _e = (e, t, n, r) => {
    A(e, 0, 0, t, n, `#8a8e90`);
    let i = t / 4;
    for (let t = 0; t < 4; t++)
      for (let n = 0; n < 4; n++) {
        let a = 0.78 + r.next() * 0.22,
          o = n * i + 3,
          s = t * i + 3;
        b(
          e,
          o,
          s,
          i - 6,
          i - 6,
          g(250 * a, 250 * a, 246 * a),
          g(214 * a, 218 * a, 216 * a),
        );
        for (let t = s + 4; t < s + i - 8; t += 6)
          for (let n = o + 4; n < o + i - 8; n += 6)
            A(e, n, t, 2, 2, `rgba(255,255,255,0.45)`);
      }
  },
  ve = (e, t, n) => {
    b(e, 0, 0, t, n, `#fbfbf8`, `#f0f0ec`);
    for (let r = 0; r < t; r += 64) A(e, r, 0, 2, n, `#d4d4d0`);
    (A(e, 0, n / 2, t, 2, `#d4d4d0`), L(e, t, n, `#c8c8c4`, 4));
  },
  ye = (e, t, n, r) => {
    A(e, 0, 0, t, n, `#7a2e22`);
    for (let i = 0; i < n; i += 8)
      for (let n = (i / 8) % 2 ? -12 : 0; n < t; n += 24) {
        let t = 0.85 + r.next() * 0.25;
        A(e, n + 1, i + 1, 22, 6, g(170 * t, 70 * t, 50 * t));
      }
    let i = e.createLinearGradient(0, n, 0, 0);
    (i.addColorStop(0, `rgba(255,214,150,0.55)`),
      i.addColorStop(0.7, `rgba(255,214,150,0.08)`),
      i.addColorStop(1, `rgba(255,214,150,0)`),
      (e.fillStyle = i),
      e.fillRect(0, 0, t, n),
      (e.fillStyle = `#f0c27a`),
      e.beginPath(),
      e.moveTo(t * 0.3, n * 0.92),
      e.lineTo(t * 0.3, n * 0.36),
      e.arc(t * 0.5, n * 0.36, t * 0.2, Math.PI, 0),
      e.lineTo(t * 0.7, n * 0.92),
      e.closePath(),
      e.fill(),
      A(e, t * 0.495, n * 0.2, 3, n * 0.72, `#5a2a1a`),
      A(e, t * 0.3, n * 0.6, t * 0.4, 3, `#5a2a1a`));
  },
  be = (e, t, n, r) => {
    A(e, 0, 0, t, n, `#d6c9b0`);
    for (let r = 0; r < n; r += 32) {
      A(e, 0, r, t, 1.5, `rgba(90,70,50,0.25)`);
      for (let n = (r / 32) % 2 ? 32 : 0; n < t; n += 64)
        A(e, n, r, 1.5, 32, `rgba(90,70,50,0.18)`);
    }
    let i = 0.9 + r.next() * 0.1;
    A(e, t * 0.22, n * 0.14, t * 0.56, n * 0.7, g(250 * i, 214 * i, 150 * i));
    for (let r = 1; r < 3; r++)
      A(e, t * 0.22 + (t * 0.56 * r) / 3 - 1, n * 0.14, 3, n * 0.7, `#6a5a44`);
    (A(e, t * 0.22, n * 0.4, t * 0.56, 3, `#6a5a44`),
      A(e, t * 0.18, n * 0.84, t * 0.64, 8, `#c4b498`));
    let a = e.createLinearGradient(0, n, 0, 0);
    (a.addColorStop(0, `rgba(255,226,170,0.45)`),
      a.addColorStop(1, `rgba(255,226,170,0)`),
      (e.fillStyle = a),
      e.fillRect(0, 0, t, n));
  },
  xe = (e, t, n, r) => {
    (b(e, 0, 0, t, n, `#e8e4da`, `#c8c0b0`), A(e, 0, 0, t, 18, `#f4f2ec`));
    for (let t = 0; t < 4; t++) A(e, 10 + t * 64, 22, 44, 4, `#fffef8`);
    for (let t = 0; t < 2; t++) {
      let i = 24 + t * 120 + r.next() * 16;
      (A(e, i, n * 0.7, 80, 6, `#b89a70`),
        A(e, i + 6, n * 0.73, 4, n * 0.2, `#8a7050`),
        A(e, i + 70, n * 0.73, 4, n * 0.2, `#8a7050`));
      for (let t = 0; t < 5; t++)
        A(e, i + 6 + t * 15, n * 0.7 - 5, 9, 5, `#3a3a3a`);
    }
    for (let i = 0; i < 2; i++) {
      let i = 40 + r.next() * (t - 80),
        a = n * 0.55;
      (A(e, i - 4, a, 8, n * 0.38, `rgba(60,60,70,0.55)`),
        I(e, i, a - 5, 5, `rgba(200,170,150,0.7)`));
    }
    for (let r = 0; r < t; r += 128) A(e, r, 0, 4, n, `#7a7a76`);
    L(e, t, n, `#5a5a56`, 10);
  },
  Se = (e, t, n) => {
    A(e, 0, 0, t, n, `#2a2620`);
    for (let r = 0; r < n; r += 64)
      (b(e, 0, r, t, 18, `#fbfaf6`, `#e8e4dc`),
        b(e, 0, r + 18, t, 12, `#fff2cc`, `rgba(255,230,170,0.25)`),
        b(
          e,
          0,
          r + 30,
          t,
          34,
          `rgba(255,214,150,0.55)`,
          `rgba(120,90,60,0.6)`,
        ));
  },
  Ce = (e, t, n, r) => {
    b(e, 0, 0, t, n, `#cfe2ee`, `#a8c4d6`);
    for (let r = 0; r < n; r += 64)
      (A(e, 0, r, t, 10, `#f8fbff`),
        A(e, 0, r + 10, t, 3, `rgba(255,255,255,0.6)`));
    for (let r = 0; r < t; r += 32) A(e, r, 0, 2, n, `rgba(70,100,120,0.35)`);
    for (let n = 0; n < 6; n++) {
      let n = r.next() * t,
        i = 20 + Math.floor(r.next() * 3) * 64 + 20;
      A(e, n, i, 8, 30, `rgba(60,60,70,0.5)`);
    }
  },
  we = (e, t, n, r) => {
    A(e, 0, 0, t, n, `#b8ae9c`);
    for (let r = 0; r < n; r += 16) A(e, 0, r, t, 1, `rgba(70,60,50,0.22)`);
    for (let t = 0; t < 2; t++) {
      let n = 30 + t * 118,
        i = 0.9 + r.next() * 0.1;
      (A(e, n - 4, 36, 86, 160, `#6a6050`),
        b(
          e,
          n,
          40,
          78,
          152,
          g(255 * i, 238 * i, 200 * i),
          g(250 * i, 206 * i, 140 * i),
        ),
        A(e, n + 37, 40, 4, 152, `#6a6050`),
        A(e, n, 112, 78, 3, `#6a6050`));
    }
    L(e, t, n, `#9a917f`, 10);
  },
  Te = (e, t, n) => {
    b(e, 0, 0, t, n, `#ffe2a8`, `#f2c27a`);
    for (let r = 0, i = -16; i < n + 32; r++, i += 16)
      for (let n = r % 2 ? -32 : 0; n < t + 32; n += 64)
        for (let t = 0; t < 4; t++)
          ((e.fillStyle = t % 2 ? `#e8e2d6` : `#f8f4ec`),
            e.beginPath(),
            e.arc(n, i + 32, 32 - t * 7, Math.PI, 0),
            e.fill());
  },
  Ee = (e, t, n, r) => {
    A(e, 0, 0, t, n, `#7c807c`);
    let i = t / 4;
    for (let t = 0; t < 4; t++) {
      let a = 0.9 + r.next() * 0.1;
      b(
        e,
        t * i + 2,
        2,
        i - 4,
        n - 4,
        g(214 * a, 218 * a, 214 * a),
        g(192 * a, 196 * a, 192 * a),
      );
    }
    for (let r = 0; r < n; r += 5) A(e, 0, r, t, 1, `rgba(0,0,0,0.06)`);
    (A(e, 0, n * 0.45, t, 4, `rgba(60,64,60,0.5)`),
      A(e, 0, n - 10, t, 6, `rgba(60,64,60,0.6)`),
      r.next() < 0.5 &&
        se(
          e,
          t * 0.3,
          n * 0.35,
          34,
          `rgba(255,244,214,0.7)`,
          `rgba(255,244,214,0)`,
        ));
  };
function R(e, t, n, r, i) {
  (b(e, 0, 0, t, n * 0.78, r, r),
    b(e, 0, n * 0.78, t, n * 0.22, i, `#000000`),
    (e.strokeStyle = `#141414`),
    (e.lineWidth = 8),
    e.strokeRect(4, 4, t - 8, n - 8));
}
function z(e, t, n) {
  let r = e.createLinearGradient(0, 0, t, n);
  (r.addColorStop(0, `rgba(210,225,235,0.22)`),
    r.addColorStop(0.35, `rgba(210,225,235,0.05)`),
    r.addColorStop(0.55, `rgba(210,225,235,0.16)`),
    r.addColorStop(1, `rgba(210,225,235,0.02)`),
    (e.fillStyle = r),
    e.fillRect(8, 8, t - 16, n - 16));
}
