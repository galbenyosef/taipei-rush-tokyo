// tokyo/assets/world-Bo9wkXrT 62 — fillstyle
// Lines 19924-20122 of readable/tokyo/assets/world-Bo9wkXrT.pretty.js (statement-aligned).
function Im(e) {
  let t = new Oe(4411);
  ((e.textAlign = `center`), (e.textBaseline = `middle`));
  for (let n = 0; n < 4; n++) {
    let r = n * 256;
    if (
      (e.save(), e.beginPath(), e.rect(r, 512, 256, 128), e.clip(), n === 0)
    ) {
      let t = e.createLinearGradient(0, 512, 0, 612);
      (t.addColorStop(0, `#7fb8e6`),
        t.addColorStop(1, `#d9eef7`),
        (e.fillStyle = t),
        e.fillRect(r, 512, 256, 128),
        (e.fillStyle = `#5f9b54`),
        e.beginPath(),
        e.moveTo(r, 592));
      for (let t = 0; t <= 256; t += 16)
        e.lineTo(
          r + t,
          574 + Math.sin(t * 0.04 + 1) * 12 + Math.sin(t * 0.11) * 5,
        );
      (e.lineTo(r + 256, 612),
        e.lineTo(r, 612),
        e.fill(),
        (e.fillStyle = `#86bf5a`),
        e.fillRect(r, 600, 256, 14));
      for (let t = 0; t < 9; t++) {
        let n = r + 14 + t * 29;
        ((e.fillStyle = `#3f7a3a`),
          e.beginPath(),
          e.arc(n, 592, 9, 0, 7),
          e.fill(),
          (e.fillStyle = `#6b4a2b`),
          e.fillRect(n - 1.5, 598, 3, 8));
      }
      ((e.fillStyle = `#ffffff`),
        e.fillRect(r, 614, 256, 26),
        (e.fillStyle = `#1d6b3a`),
        (e.font = `900 15px ${q}`),
        e.fillText(`施工中 請注意安全  UNDER CONSTRUCTION`, r + 128, 627, 244));
    } else if (n === 1) {
      let n = e.createLinearGradient(r, 0, r + 256, 0);
      (n.addColorStop(0, `#0f1c33`),
        n.addColorStop(1, `#23395d`),
        (e.fillStyle = n),
        e.fillRect(r, 512, 256, 128),
        (e.fillStyle = `#c9a45c`),
        e.fillRect(r + 180, 530, 26, 104),
        e.fillRect(r + 212, 552, 20, 82),
        (e.fillStyle = `#e8d3a2`));
      for (let n = 0; n < 12; n++)
        for (let i = 0; i < 3; i++)
          t.chance(0.55) && e.fillRect(r + 183 + i * 8, 534 + n * 8, 5, 4);
      ((e.fillStyle = `#e8c982`),
        (e.textAlign = `left`),
        (e.font = `900 34px ${q}`),
        e.fillText(`璞悅天際`, r + 14, 554),
        (e.font = `bold 13px ${q}`),
        e.fillText(`南港 · 百米水岸地標`, r + 16, 586),
        (e.fillStyle = `#ffffff`),
        (e.font = `bold 12px ${q}`),
        e.fillText(`預約賞屋 0800-168-101`, r + 16, 612),
        (e.textAlign = `center`));
    } else if (n === 2) {
      ((e.fillStyle = `#f4f4ef`),
        e.fillRect(r, 512, 256, 128),
        (e.fillStyle = `#2f8f4e`),
        e.fillRect(r, 524, 256, 16),
        e.fillRect(r, 618, 256, 8),
        (e.fillStyle = `#1b3f6b`),
        (e.font = `900 24px ${q}`),
        e.fillText(`大豐營造 工程告示`, r + 128, 562),
        (e.font = `bold 13px ${q}`),
        (e.fillStyle = `#333333`),
        e.fillText(`敦親睦鄰 施工期間造成不便 敬請見諒`, r + 128, 590),
        e.fillText(`工地主任 ☎ 02-2785-XXXX`, r + 128, 608),
        (e.strokeStyle = `#c9c9c0`),
        (e.lineWidth = 2));
      for (let t = 1; t < 4; t++)
        (e.beginPath(),
          e.moveTo(r + t * 64, 512),
          e.lineTo(r + t * 64, 524),
          e.stroke());
    } else {
      let n = e.createLinearGradient(0, 512, 0, 640);
      (n.addColorStop(0, `#2d3a78`),
        n.addColorStop(0.6, `#e27d60`),
        n.addColorStop(1, `#f6c177`),
        (e.fillStyle = n),
        e.fillRect(r, 512, 256, 128),
        (e.fillStyle = `#1f2442`));
      let i = r;
      for (; i < r + 256;) {
        let n = t.range(12, 26),
          r = t.range(20, 70);
        (e.fillRect(i, 640 - r, n - 2, r), (i += n));
      }
      e.fillStyle = `#ffd28a`;
      for (let n = 0; n < 60; n++)
        e.fillRect(r + t.range(0, 256), 512 + t.range(70, 124), 2, 2);
      ((e.fillStyle = `#ffffff`),
        (e.font = `900 22px ${q}`),
        e.fillText(`新城 · 新生活`, r + 128, 542));
    }
    ((e.globalAlpha = 0.18), (e.fillStyle = `#000`));
    for (let t = 1; t < 4; t++) e.fillRect(r + t * 64 - 1, 512, 2, 128);
    e.globalAlpha = 0.08;
    for (let n = 0; n < 14; n++)
      e.fillRect(
        r + t.range(0, 256),
        512 + t.range(60, 128),
        t.range(1, 3),
        t.range(10, 40),
      );
    ((e.globalAlpha = 1), e.restore());
  }
  let n = (t, n, r, i) => {
    (e.restore(), e.save(), e.beginPath(), e.rect(t, n, r, i), e.clip());
  };
  e.save();
  for (let r = 0; r < 2; r++) {
    let i = r * 128;
    (n(i, 640, 128, 128),
      (e.fillStyle = r === 0 ? `#8a969c` : `#2f6ea3`),
      e.fillRect(i, 640, 128, 128));
    for (let t = 0; t < 128; t += 8)
      ((e.fillStyle = `rgba(255,255,255,0.18)`),
        e.fillRect(i + t, 640, 3, 128),
        (e.fillStyle = `rgba(0,0,0,0.22)`),
        e.fillRect(i + t + 5, 640, 2, 128));
    (r === 1 && ((e.fillStyle = `#f2f2f2`), e.fillRect(i, 660, 128, 16)),
      (e.globalAlpha = 0.28),
      (e.fillStyle = `#7a4a26`));
    for (let n = 0; n < 10; n++)
      e.fillRect(
        i + t.range(0, 124),
        640 + t.range(60, 110),
        t.range(2, 5),
        t.range(10, 30),
      );
    e.globalAlpha = 1;
  }
  (n(256, 640, 256, 128),
    (e.fillStyle = `#f28c1a`),
    e.fillRect(256, 640, 256, 128),
    (e.fillStyle = `#ffffff`));
  for (let t = -4; t < 12; t++)
    (e.beginPath(),
      e.moveTo(256 + t * 24, 768),
      e.lineTo(256 + t * 24 + 12, 768),
      e.lineTo(256 + t * 24 + 40, 740),
      e.lineTo(256 + t * 24 + 28, 740),
      e.fill());
  ((e.fillStyle = `#1a1a1a`),
    e.fillRect(264, 648, 240, 88),
    (e.fillStyle = `#ffd400`),
    (e.font = `900 28px ${q}`),
    e.fillText(`道路施工 前方封閉`, 384, 680, 228),
    (e.font = `bold 13px ${q}`),
    (e.fillStyle = `#ffffff`),
    e.fillText(`ROAD WORK · ROAD CLOSED AHEAD`, 384, 716, 228),
    n(512, 640, 128, 128),
    (e.fillStyle = `#ffd21f`),
    e.fillRect(512, 640, 128, 128),
    (e.fillStyle = `#1b4f9c`),
    e.fillRect(520, 648, 112, 78),
    (e.fillStyle = `#ffffff`),
    (e.font = `900 64px Arial, sans-serif`),
    e.fillText(`P`, 576, 690),
    (e.fillStyle = `#1b1b1b`),
    (e.font = `900 18px ${q}`),
    e.fillText(`計時停車`, 576, 746),
    n(640, 640, 256, 64),
    (e.fillStyle = `#b31d1d`),
    e.fillRect(640, 640, 256, 64),
    (e.fillStyle = `#ffffff`),
    (e.font = `900 26px ${q}`),
    e.fillText(`鴻運貨運 南港站`, 768, 666),
    (e.font = `bold 11px ${q}`),
    e.fillText(`HONG-YUN FREIGHT · NANGANG YARD`, 768, 692),
    n(640, 704, 128, 64),
    (e.fillStyle = `#9aa0a4`),
    e.fillRect(640, 704, 128, 64));
  for (let t = 0; t < 64; t += 4)
    ((e.fillStyle = t % 8 == 0 ? `rgba(255,255,255,0.2)` : `rgba(0,0,0,0.18)`),
      e.fillRect(640, 704 + t, 128, 2));
  ((e.globalAlpha = 0.5),
    (e.fillStyle = `#3b3b3b`),
    (e.font = `900 16px ${q}`),
    e.fillText(`吉屋出租`, 704, 736),
    (e.globalAlpha = 1),
    e.restore());
}
var Lm = {
  uWheelCenter: { value: new U(0, 0, 0) },
  uWheelAngle: { value: 0 },
  uLitFrac: { value: 0.5 },
  uLodNear: { value: 800 },
};
