// tokyo/assets/region-tokyo-55J_WESF 154 — fillrect
// Lines 64452-64488 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function PS(e, t, n, r, i, a, o = !1) {
  ((e.fillStyle = `#2b2622`),
    o
      ? (e.beginPath(),
        e.moveTo(t, n + i),
        e.lineTo(t, n + r / 2),
        e.arc(t + r / 2, n + r / 2, r / 2, Math.PI, 0),
        e.lineTo(t + r, n + i),
        e.closePath(),
        e.fill())
      : e.fillRect(t, n, r, i));
  let s = t + 3,
    c = n + 3,
    l = r - 6,
    u = i - 6,
    d = e.createLinearGradient(s, c, s, c + u);
  (d.addColorStop(0, `#d8d2c2`),
    d.addColorStop(1, `#b8b0a0`),
    (e.fillStyle = d),
    o
      ? (e.beginPath(),
        e.moveTo(s, c + u),
        e.lineTo(s, c + l / 2),
        e.arc(s + l / 2, c + l / 2, l / 2, Math.PI, 0),
        e.lineTo(s + l, c + u),
        e.closePath(),
        e.fill())
      : e.fillRect(s, c, l, u),
    (e.fillStyle = `rgba(120,110,95,0.25)`));
  for (let t = 1; t < 6; t++)
    e.fillRect(s + (l * t) / 6, c + (o ? l / 2 : 0), 1.5, u - (o ? l / 2 : 0));
  ((e.fillStyle = `#efece4`),
    e.fillRect(s + l / 2 - 1.5, c, 3, u),
    e.fillRect(s, c + u * 0.55, l, 3),
    e.fillRect(s, c + u * 0.25, l, 2),
    a(s, c, l, u, 1));
}
