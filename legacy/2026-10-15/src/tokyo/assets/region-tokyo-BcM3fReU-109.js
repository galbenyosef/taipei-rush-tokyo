// tokyo/assets/region-tokyo-BcM3fReU 109 — math
// Lines 50976-51142 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function yE(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var bE = (e) => rc(`landmark.akiba-gateways.${e}`).ja,
  xE = (e) => rc(`landmark.akiba-gateways.${e}`).en ?? ``;
function SE(e, t, n, r, i, a, o, s, c = 1, l = `center`) {
  (e.save(), e.translate(n, r), e.scale(c, 1));
  let u = a.indexOf(` `);
  ((e.font = `${a.slice(0, u)} ${i}px ${a.slice(u + 1)}`),
    (e.fillStyle = o),
    (e.textAlign = l),
    (e.textBaseline = `middle`),
    e.fillText(t, 0, 0, s / c),
    e.restore());
}
var CE = (e, t) => `${e} ${t}`;
function wE(e, t, n, r, i, a, o, s) {
  let c = e.getTransform(),
    l = c.a,
    u = c.d,
    d = Math.round(t * l + c.e),
    f = Math.round(n * u + c.f),
    p = Math.max(1, Math.round(r * l)),
    m = Math.max(1, Math.round(i * u)),
    h;
  try {
    h = e.getImageData(d, f, p, m).data;
  } catch {
    return a(t, n, r, i, o);
  }
  for (let e = 0; e < i; e++) {
    let i = Math.min(m - 1, Math.floor((e + 0.5) * u)),
      c = -1;
    for (let u = 0; u <= r; u++) {
      let d = !1;
      if (u < r) {
        let e = Math.min(p - 1, Math.floor((u + 0.5) * l)),
          t = (i * p + e) * 4;
        d = s(h[t], h[t + 1], h[t + 2]);
      }
      d && c < 0
        ? (c = u)
        : !d && c >= 0 && (a(t + c, n + e, u - c, 1, o), (c = -1));
    }
  }
}
function TE(e, t, n, r, i, a, o = 0, s) {
  (e.save(),
    (e.fillStyle = i),
    e.beginPath(),
    e.ellipse(t, n + r * 0.25, r * 1.25, r * 1.45, 0, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#ffe6d8`),
    e.beginPath(),
    e.ellipse(
      t + o * r * 0.08,
      n + r * 0.12,
      r * 0.86,
      r * 0.95,
      0,
      0,
      Math.PI * 2,
    ),
    e.fill(),
    (e.fillStyle = i),
    e.beginPath(),
    e.moveTo(t - r * 1.05, n + r * 0.1));
  for (let i = 0; i <= 6; i++) {
    let a = i / 6;
    e.lineTo(t - r * 1 + a * r * 2, n - r * (i % 2 ? 0.05 : 0.35));
  }
  (e.lineTo(t + r * 1.05, n - r * 0.6),
    e.quadraticCurveTo(t, n - r * 1.45, t - r * 1.05, n - r * 0.6),
    e.closePath(),
    e.fill());
  for (let i of [-1, 1]) {
    let s = t + i * r * 0.36 + o * r * 0.12,
      c = n + r * 0.22;
    ((e.fillStyle = `#ffffff`),
      e.beginPath(),
      e.ellipse(s, c, r * 0.2, r * 0.27, 0, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = a),
      e.beginPath(),
      e.ellipse(
        s + o * r * 0.04,
        c + r * 0.03,
        r * 0.15,
        r * 0.23,
        0,
        0,
        Math.PI * 2,
      ),
      e.fill(),
      (e.fillStyle = `#1a1420`),
      e.beginPath(),
      e.ellipse(
        s + o * r * 0.05,
        c + r * 0.06,
        r * 0.07,
        r * 0.12,
        0,
        0,
        Math.PI * 2,
      ),
      e.fill(),
      (e.fillStyle = `#ffffff`),
      e.beginPath(),
      e.arc(s - r * 0.05, c - r * 0.07, r * 0.055, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#2a1a1a`),
      e.fillRect(s - r * 0.22, c - r * 0.3, r * 0.44, r * 0.05));
  }
  ((e.fillStyle = `#d0505a`),
    e.fillRect(t - r * 0.07 + o * r * 0.1, n + r * 0.66, r * 0.14, r * 0.04),
    (e.fillStyle = `rgba(255,120,140,0.35)`));
  for (let i of [-1, 1])
    e.fillRect(t + i * r * 0.5 - r * 0.1, n + r * 0.48, r * 0.2, r * 0.07);
  (s &&
    ((e.fillStyle = s),
    e.beginPath(),
    e.moveTo(t + r * 0.6, n - r * 0.95),
    e.lineTo(t + r * 1.15, n - r * 1.25),
    e.lineTo(t + r * 1.05, n - r * 0.7),
    e.closePath(),
    e.fill()),
    e.restore());
}
function EE(e, t, n, r, i, a) {
  ((e.fillStyle = i),
    e.beginPath(),
    e.moveTo(t - r * 0.5, n + r * 1),
    e.lineTo(t - r * 1.5, n + r * 1.7),
    e.lineTo(t - r * 1.7, n + r * 3.2),
    e.lineTo(t + r * 1.7, n + r * 3.2),
    e.lineTo(t + r * 1.5, n + r * 1.7),
    e.lineTo(t + r * 0.5, n + r * 1),
    e.closePath(),
    e.fill(),
    (e.fillStyle = a),
    e.beginPath(),
    e.moveTo(t - r * 0.55, n + r * 1.05),
    e.lineTo(t, n + r * 1.75),
    e.lineTo(t + r * 0.55, n + r * 1.05),
    e.closePath(),
    e.fill());
}
function DE(e, t, n, r, i, a, o) {
  let s = yE(a);
  for (let a = 0; a < o; a++) {
    let a = t + s() * r,
      o = n + s() * i,
      c = 1 + s() * 2.5;
    ((e.fillStyle = `rgba(255,255,255,${(0.5 + s() * 0.5).toFixed(2)})`),
      e.fillRect(a - c, o - 0.5, c * 2, 1),
      e.fillRect(a - 0.5, o - c, 1, c * 2));
  }
}
