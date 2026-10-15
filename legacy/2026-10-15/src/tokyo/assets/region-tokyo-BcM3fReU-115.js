// tokyo/assets/region-tokyo-BcM3fReU 115 — fillstyle
// Lines 53325-53612 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function rD() {
  return {
    lcMidGlass: (e, t, n, r, i, a) => {
      let o = XE(611),
        s = r / 2,
        c = s / 4,
        l = i / 3;
      for (let r = 0; r < 3; r++) {
        let i = n + r * l,
          u = e.createLinearGradient(t, i, t, i + l);
        (u.addColorStop(0, `#b4cfe6`),
          u.addColorStop(0.55, `#86abcc`),
          u.addColorStop(1, `#94b7d4`),
          (e.fillStyle = u),
          e.fillRect(t, i, s, l));
        for (let n = 0; n < 4; n++)
          ((e.fillStyle = `rgba(230,240,250,${(0.05 + o() * 0.14).toFixed(3)})`),
            e.fillRect(t + n * c + c * 0.1, i + l * 0.05, c * 0.3, l * 0.75),
            o() < 0.25 &&
              ((e.fillStyle = `rgba(40,70,100,0.18)`),
              e.fillRect(t + n * c, i, c, l * 0.86)));
        (a(t, i, s, l * 0.86, 0.85),
          (e.fillStyle = `#7698b8`),
          e.fillRect(t, i + l * 0.88, s, l * 0.12),
          a(t, i + l * 0.88, s, l * 0.12, 0),
          (e.fillStyle = `rgba(210,225,238,0.8)`),
          e.fillRect(t, i + l * 0.86 - 1, s, 1.5));
      }
      e.fillStyle = `#d6e2ec`;
      for (let r = 0; r <= 4; r++) e.fillRect(t + r * c - 1.5, n, 3, i);
      e.fillStyle = `rgba(214,226,236,0.6)`;
      for (let r = 0; r < 4; r++) e.fillRect(t + r * c + c / 2 - 0.5, n, 1, i);
      ((e.fillStyle = `#5d7891`), e.fillRect(t + s, n, s, i));
      for (let r = 0; r < 16; r++) {
        let a = t + s + (r * s) / 16;
        ((e.fillStyle = `#b8c8d6`),
          e.fillRect(a, n, (s / 16) * 0.38, i),
          (e.fillStyle = `rgba(20,30,40,0.35)`),
          e.fillRect(a + (s / 16) * 0.38, n, 1, i));
      }
      e.fillStyle = `rgba(30,45,60,0.5)`;
      for (let r = 0; r < 3; r++) e.fillRect(t + s, n + (r + 0.86) * l, s, 2);
      a(t + s, n, s, i, 0);
    },
    lcTkGrid: (e, t, n, r, i, a) => {
      let o = XE(612),
        s = r / 2,
        c = s / 4,
        l = i / 3;
      ((e.fillStyle = `#4e483f`), e.fillRect(t, n, s, i));
      for (let r = 0; r < 3; r++)
        for (let i = 0; i < 4; i++) {
          let s = t + i * c + c * 0.16,
            u = n + r * l + l * 0.12,
            d = c * 0.68,
            f = l * 0.68,
            p = e.createLinearGradient(s, u, s, u + f),
            m = 0.9 + o() * 0.2;
          (p.addColorStop(0, ZE(168 * m, 186 * m, 182 * m)),
            p.addColorStop(1, ZE(112 * m, 130 * m, 126 * m)),
            (e.fillStyle = p),
            e.fillRect(s, u, d, f),
            (e.fillStyle = `rgba(220,232,230,0.12)`),
            e.fillRect(s + d * 0.1, u, d * 0.25, f),
            a(s, u, d, f, 0.9));
        }
      e.fillStyle = `#7a7064`;
      for (let r = 0; r <= 4; r++) e.fillRect(t + r * c - 1.5, n, 3, i);
      ((e.fillStyle = `#5a5248`), e.fillRect(t + s, n, s, i));
      let u = t + s + s * 0.05,
        d = s * 0.9;
      for (let [t, r] of [
        [n + i * 0.06, i * 0.4],
        [n + i * 0.52, i * 0.42],
      ]) {
        let n = e.createLinearGradient(u, t, u, t + r);
        (n.addColorStop(0, `#b4c0bc`),
          n.addColorStop(0.6, `#8e8f84`),
          n.addColorStop(1, `#a29478`),
          (e.fillStyle = n),
          e.fillRect(u, t, d, r),
          a(u, t, d, r, 1));
      }
      ((e.fillStyle = `#6a6156`), e.fillRect(u + d / 2 - 1, n, 2, i));
    },
    lcNet: (e, t, n, r, i, a) => {
      let o = XE(613),
        s = i / 2;
      for (let i = 0; i < 2; i++) {
        let a = n + (s / 2) * i,
          o = e.createLinearGradient(t, a, t, a + s / 2);
        (o.addColorStop(0, `#5aa6d6`),
          o.addColorStop(0.7, `#3f8fc4`),
          o.addColorStop(1, `#337db0`),
          (e.fillStyle = o),
          e.fillRect(t, a, r, s / 2));
      }
      ((e.strokeStyle = `rgba(225,232,238,0.75)`),
        (e.lineWidth = 7),
        e.beginPath(),
        e.moveTo(t, n),
        e.lineTo(t + r, n + s),
        e.moveTo(t + r, n),
        e.lineTo(t, n + s),
        e.stroke(),
        (e.fillStyle = `rgba(215,224,230,0.7)`));
      for (let i = 0; i <= 3; i++) e.fillRect(t + (i * r) / 3 - 3, n, 6, s);
      for (let i = 0; i <= 2; i++) e.fillRect(t, n + (i * s) / 2 - 2.5, r, 5);
      e.fillStyle = `rgba(255,255,255,0.07)`;
      for (let i = 0; i < r; i += 3) e.fillRect(t + i, n, 1, s);
      e.fillStyle = `rgba(10,40,70,0.22)`;
      for (let i = 0; i < 6; i++) e.fillRect(t + o() * r, n, 2, s);
      a(t, n, r, s, 0);
      let c = n + s,
        l = s / 2,
        u = r / 2;
      for (let n = 0; n < 2; n++) {
        let r = c + n * l;
        ((e.fillStyle = `#4b4f54`), e.fillRect(t, r, u, l * 0.42));
        let i = e.createLinearGradient(t, r + l * 0.42, t, r + l);
        (i.addColorStop(0, `#8aa2b2`),
          i.addColorStop(1, `#58707f`),
          (e.fillStyle = i),
          e.fillRect(t, r + l * 0.42, u, l * 0.58),
          a(t, r + l * 0.42, u, l * 0.58, 0.6),
          (e.fillStyle = `#e0e2e4`),
          e.fillRect(t, r + l * 0.4, u, 3),
          (e.fillStyle = `#3a3e42`));
        for (let n = 0; n <= 4; n++)
          e.fillRect(t + (n * u) / 4 - 1, r + l * 0.42, 2, l * 0.58);
      }
      for (let n = 0; n < 2; n++) {
        let r = c + n * l,
          i = e.createLinearGradient(t + u, r, t + u, r + l);
        (i.addColorStop(0, `#c4cacf`),
          i.addColorStop(0.75, `#9aa3aa`),
          i.addColorStop(1, `#a8b0b6`),
          (e.fillStyle = i),
          e.fillRect(t + u, r, u, l),
          (e.fillStyle = `#4c5258`),
          e.fillRect(t + u, r + l * 0.8, u, l * 0.2),
          (e.fillStyle = `#e4e8ea`));
        for (let n = 0; n <= 4; n++)
          e.fillRect(t + u + (n * u) / 4 - 1, r, 2, l);
      }
      a(t + u, c, u, s, 0);
    },
    lcSigns: (e, t, n, r, i, a, o) => {
      ((e.textAlign = `center`),
        (e.textBaseline = `middle`),
        (e.fillStyle = `#f4f4f0`),
        e.fillRect(t, n, 144, 64),
        (e.fillStyle = `#1d2c4a`),
        e.fillRect(t, n + 54, 144, 10),
        (e.font = `700 21px ${o.sans}`),
        (e.fillStyle = `#1d2c4a`),
        e.fillText(rc(`landmark.lc.beacon.logo`).ja, t + 72, n + 26, 128),
        (e.fillStyle = `#e8732c`),
        e.beginPath(),
        e.arc(t + 72, n + 9, 4, 0, Math.PI * 2),
        e.fill(),
        a(t, n, 144, 64, 0.2),
        (e.fillStyle = `#ffffff`),
        e.fillRect(t + 144, n, 144, 64),
        (e.fillStyle = `#f2c200`),
        e.fillRect(t + 144, n, 144, 6),
        (e.fillStyle = `#1a1a1a`),
        e.fillRect(t + 144, n + 58, 144, 6),
        (e.fillStyle = `#f2c200`),
        e.beginPath(),
        e.arc(t + 164, n + 24, 6, Math.PI, 0),
        e.fill(),
        (e.fillStyle = `#2a4f8a`),
        e.save(),
        e.translate(t + 164, n + 30),
        e.rotate(0.6),
        e.fillRect(-4, 0, 8, 16),
        e.restore(),
        e.fillRect(t + 160, n + 44, 4, 12),
        e.fillRect(t + 166, n + 44, 4, 12),
        (e.fillStyle = `#1a1a1a`),
        (e.font = `700 13px ${o.sans}`),
        e.fillText(rc(`landmark.lc.beacon.notice`).ja, t + 228, n + 32, 106),
        a(t + 144, n, 144, 64, 0.2),
        (e.fillStyle = `#26292c`),
        e.fillRect(t, n + 64, 288, 48));
      let s = rc(`landmark.lc.nakamachi.name`);
      ((e.fillStyle = `#ece6da`),
        (e.font = `500 22px ${o.sans}`),
        e.fillText(s.ja, t + 144, n + 82, 270),
        (e.font = `500 10px ${o.sans}`),
        e.fillText((s.en ?? ``).toUpperCase(), t + 144, n + 102, 270),
        a(t, n + 64, 288, 48, 0.15),
        a(t + 10, n + 70, 268, 38, 0.9),
        (e.fillStyle = `#3a342d`),
        e.fillRect(t, n + 112, 176, 40));
      let c = rc(`landmark.lc.beacon.tower`);
      ((e.fillStyle = `#e6dcc6`),
        (e.font = `500 15px ${o.sans}`),
        e.fillText(c.ja, t + 88, n + 126, 164),
        (e.font = `500 9px ${o.sans}`),
        e.fillText(c.en ?? ``, t + 88, n + 143, 164),
        a(t, n + 112, 176, 40, 0.2),
        a(t + 6, n + 116, 164, 32, 0.8),
        (e.fillStyle = `#ffffff`),
        e.fillRect(t + 176, n + 112, 112, 40),
        (e.strokeStyle = `#1d2c4a`),
        (e.lineWidth = 2),
        e.strokeRect(t + 178, n + 114, 108, 36),
        (e.fillStyle = `#1d2c4a`),
        (e.font = `700 12px ${o.sans}`),
        e.fillText(rc(`landmark.lc.beacon.site`).ja, t + 232, n + 132, 100),
        a(t + 176, n + 112, 112, 40, 0.2),
        (e.fillStyle = `#1e1e22`),
        e.fillRect(t, n + 152, 288, 40),
        (e.fillStyle = `#e8e4dc`),
        (e.font = `600 20px ${o.sans}`),
        e.fillText(
          rc(`nihonbashi.mark.soredo-nihonbashi`).ja,
          t + 144,
          n + 172,
          260,
        ),
        a(t, n + 152, 288, 40, 0.2),
        a(t + 20, n + 158, 248, 28, 0.9),
        (e.fillStyle = `#f6f0e2`),
        e.fillRect(t + 288, n, 32, 192),
        (e.fillStyle = `#1e1e22`),
        e.fillRect(t + 288, n, 32, 8),
        e.fillRect(t + 288, n + 184, 32, 8));
      let l = rc(`nihonbashi.ad.closing`).ja.match(/[0-9]+|\S/g) ?? [],
        u = Math.min(20, 170 / l.length);
      ((e.fillStyle = `#1a1a1a`),
        (e.font = `600 ${Math.round(u * 0.86)}px ${o.serif}`),
        l.forEach((r, i) => e.fillText(r, t + 304, n + 12 + u * (i + 0.5), 26)),
        a(t + 288, n, 32, 192, 0.35));
    },
  };
}
function iD(e, t, n, r, i, a, o, s, c) {
  ((e.fillStyle = `#1d2a44`),
    e.fillRect(t, n, r, i),
    (e.fillStyle = c),
    e.fillRect(t + 8, n + 10, i - 20, i - 20));
  let l = rc(s);
  ((e.fillStyle = `#ffffff`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  let u = t + (r + i - 12) / 2,
    d = r - i - 4;
  ((e.font = `600 38px ${o.sans}`),
    e.fillText(l.ja, u, n + i * 0.38, d),
    (e.font = `500 18px ${o.sans}`),
    e.fillText(l.en ?? ``, u, n + i * 0.76, d),
    a(t, n, r, i, 0.3),
    a(t + 6, n + 6, r - 12, i - 12, 0.9));
}
function aD(e, t, n, r, i, a) {
  let o = (o) => {
    let s = a,
      c = t + o,
      l = n + o,
      u = t + r - o,
      d = n + i - o;
    (e.beginPath(),
      e.moveTo(c + s, l),
      e.lineTo(u - s, l),
      e.lineTo(u, l + s),
      e.lineTo(u, d - s),
      e.lineTo(u - s, d),
      e.lineTo(c + s, d),
      e.lineTo(c, d - s),
      e.lineTo(c, l + s),
      e.closePath());
  };
  ((e.fillStyle = `#6f8d7b`),
    o(0),
    e.fill(),
    (e.fillStyle = `#3c5245`),
    o(5),
    e.fill(),
    (e.fillStyle = `#4a6455`),
    o(8),
    e.fill(),
    QE(e, t, n, r, i, 177 + (r | 0), (r * i) / 22, 0.22),
    QE(e, t, n, r, i, 178 + (i | 0), (r * i) / 60, 0.1, !1));
}
var oD = [[`uenoSign`, 1, WE]];
