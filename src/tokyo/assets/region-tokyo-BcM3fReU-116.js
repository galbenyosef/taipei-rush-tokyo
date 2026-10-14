// tokyo/assets/region-tokyo-BcM3fReU 116 — math
// Lines 53613-53918 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function sD(e, t, n, r = async () => {}, a = 8) {
  let o = performance.now(),
    s = async () => {
      performance.now() - o < a || (await r(), (o = performance.now()));
    },
    c = Te(GE, e),
    l = Math.round((c * KE) / GE),
    u = c / GE,
    d = document.createElement(`canvas`);
  ((d.width = c), (d.height = l));
  let p = d.getContext(`2d`, { willReadFrequently: !0 });
  (Wi(d, p), p.scale(u, u));
  let m = YE(),
    h = [],
    g = (e, t, n, r, i) => h.push([e, t, n, r, i]);
  for (let e of Object.keys(m)) {
    let [n, r, i, a] = m[e];
    (p.save(),
      p.beginPath(),
      p.rect(n - qE, r - qE, i + 16, a + 16),
      p.clip(),
      nD[e](p, n, r, i, a, g, t),
      p.restore());
    let o = (e) => Math.round(e * u),
      c = o(n),
      l = o(r),
      f = o(i),
      h = o(a),
      _ = Math.max(1, o(qE));
    (p.save(),
      p.setTransform(1, 0, 0, 1, 0, 0),
      p.drawImage(d, c, l, 1, h, c - _, l, _, h),
      p.drawImage(d, c + f - 1, l, 1, h, c + f, l, _, h),
      p.drawImage(d, c - _, l, f + _ * 2, 1, c - _, l - _, f + _ * 2, _),
      p.drawImage(
        d,
        c - _,
        l + h - 1,
        f + _ * 2,
        1,
        c - _,
        l + h,
        f + _ * 2,
        _,
      ),
      p.restore(),
      await s());
  }
  let _ = p.getImageData(0, 0, c, l).data,
    v = new Map();
  for (let [e, t, n] of oD) v.set(e, UE(_, c, u, m[e], t, n));
  for (let e = 3; e < _.length; e += 4) _[e] = 0;
  await s();
  for (let [e, t, n, r, i] of h) {
    let a = Math.max(0, Math.floor(e * u)),
      o = Math.max(0, Math.floor(t * u)),
      s = Math.min(c, Math.ceil((e + n) * u)),
      d = Math.min(l, Math.ceil((t + r) * u)),
      f = Math.round(i * 255);
    for (let e = o; e < d; e++)
      for (let t = a; t < s; t++) _[(e * c + t) * 4 + 3] = f;
  }
  await s();
  for (let e of Object.keys(m)) {
    let [t, n, r, i] = m[e],
      a = Math.round(t * u),
      o = Math.round(n * u),
      s = Math.round(r * u),
      d = Math.round(i * u),
      f = Math.max(1, Math.round(qE * u));
    for (let e = Math.max(0, o - f); e < Math.min(l, o + d + f); e++) {
      let t = Math.min(o + d - 1, Math.max(o, e));
      for (let n = Math.max(0, a - f); n < Math.min(c, a + s + f); n++) {
        if (e >= o && e < o + d && n >= a && n < a + s) continue;
        let r = Math.min(a + s - 1, Math.max(a, n));
        _[(e * c + n) * 4 + 3] = _[(t * c + r) * 4 + 3];
      }
    }
  }
  let y = new Uint8Array(_.buffer.slice(0)),
    b = new w(y, c, l, i);
  ((b.colorSpace = f),
    (b.flipY = !1),
    (b.generateMipmaps = !0),
    (b.minFilter = S),
    (b.magFilter = E),
    (b.anisotropy = n),
    (b.name = `tokyo-landmarks-atlas`),
    (b.needsUpdate = !0),
    (d.width = d.height = 1));
  let x = 0.5 / c,
    C = 0.5 / l,
    T = (e) => {
      let [t, n, r, i] = m[e];
      return {
        u0: t / GE + x,
        v0: (n + i) / KE - C,
        u1: (t + r) / GE - x,
        v1: n / KE + C,
      };
    };
  return {
    texture: b,
    cell: T,
    sub(e, t, n, r, i) {
      let a = T(e);
      return {
        u0: a.u0 + (a.u1 - a.u0) * t,
        v0: a.v0 + (a.v1 - a.v0) * n,
        u1: a.u0 + (a.u1 - a.u0) * r,
        v1: a.v0 + (a.v1 - a.v0) * i,
      };
    },
    bytes: Math.round(c * l * 4 * 1.333),
    glyphs: (e) => v.get(e) ?? [],
  };
}
function cD(e, t, n, r, i) {
  let a = r;
  for (let r of t) {
    if (r === ` ` || r === `　`) {
      a += i * 0.5;
      continue;
    }
    (e.fillText(r, n, a + i / 2), (a += i));
  }
}
function lD(e, t, n, r, i, a) {
  ((e.fillStyle = i),
    e.beginPath(),
    e.arc(t, n, r, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = a),
    e.beginPath(),
    e.arc(t, n, r * 0.86, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = i));
  for (let i = 0; i < 3; i++) {
    let a = (i / 3) * Math.PI * 2,
      o = t + Math.cos(a) * r * 0.42,
      s = n + Math.sin(a) * r * 0.42;
    (e.beginPath(),
      e.arc(o, s, r * 0.3, 0, Math.PI * 2),
      e.fill(),
      e.beginPath(),
      e.arc(t, n, r * 0.72, a, a + 1.9),
      e.arc(t, n, r * 0.5, a + 1.9, a + 0.2, !0),
      e.closePath(),
      e.fill());
  }
}
function uD(e, t, n, r, i, a) {
  let o = XE(301);
  ((e.fillStyle = `#17191a`), e.fillRect(t, n, r, 40));
  for (let r = 0; r < 4; r++) {
    let i = t + 32 + r * 64;
    ((e.lineWidth = 5),
      (e.strokeStyle = r % 2 ? `#2a9a8e` : `#3f8f52`),
      e.beginPath(),
      e.moveTo(i - 34, n + 30),
      e.bezierCurveTo(i - 20, n + 4, i - 6, n + 36, i + 6, n + 14),
      e.bezierCurveTo(i + 16, n + 2, i + 30, n + 26, i + 34, n + 10),
      e.stroke(),
      (e.lineWidth = 3),
      (e.strokeStyle = `#3b6fb3`),
      e.beginPath(),
      e.arc(i - 18, n + 22, 7, 0.3, 4.5),
      e.stroke(),
      (e.fillStyle = `#d4577c`),
      e.beginPath(),
      e.arc(i + 14, n + 22, 9, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#f2b6c8`),
      e.beginPath(),
      e.arc(i + 13, n + 20, 4, 0, Math.PI * 2),
      e.fill());
  }
  ((e.fillStyle = `#c9a24a`),
    e.fillRect(t, n, r, 3),
    e.fillRect(t, n + 37, r, 3),
    (e.fillStyle = `#b8321e`),
    e.fillRect(t, n + 40, r, 20),
    (e.fillStyle = `#e2b84e`));
  for (let r = 0; r < 16; r++) e.fillRect(t + 3 + r * 16, n + 43, 10, 10);
  ((e.fillStyle = `#1a1412`), e.fillRect(t, n + 56, r, 4));
  for (let r = 0; r < 2; r++) {
    let i = t + r * 128,
      a = n + 60;
    if (
      ((e.fillStyle = `#d6aa48`),
      e.fillRect(i, a, 128, 64),
      (e.fillStyle = r ? `#141414` : `#1d5a44`),
      e.fillRect(i + 6, a + 6, 116, 52),
      (e.strokeStyle = `#f0cc6a`),
      (e.fillStyle = `#e5bb55`),
      r)
    ) {
      (e.beginPath(),
        e.ellipse(i + 64, a + 34, 16, 10, -0.3, 0, Math.PI * 2),
        e.fill(),
        (e.lineWidth = 4));
      for (let t = 0; t < 5; t++)
        (e.beginPath(),
          e.moveTo(i + 60, a + 30),
          e.quadraticCurveTo(
            i + 30 - t * 4,
            a + 10 + t * 3,
            i + 16 + t * 6,
            a + 16 + t * 7,
          ),
          e.stroke(),
          e.beginPath(),
          e.moveTo(i + 72, a + 38),
          e.quadraticCurveTo(
            i + 100 + t * 3,
            a + 52 - t * 2,
            i + 112 - t * 4,
            a + 40 - t * 6,
          ),
          e.stroke());
      (e.beginPath(), e.arc(i + 80, a + 24, 6, 0, Math.PI * 2), e.fill());
    } else {
      ((e.lineWidth = 7),
        e.beginPath(),
        e.moveTo(i + 14, a + 46),
        e.bezierCurveTo(i + 34, a + 8, i + 56, a + 56, i + 78, a + 24),
        e.bezierCurveTo(i + 92, a + 6, i + 104, a + 30, i + 114, a + 18),
        e.stroke(),
        e.beginPath(),
        e.arc(i + 112, a + 18, 8, 0, Math.PI * 2),
        e.fill());
      for (let t = 0; t < 9; t++)
        e.fillRect(i + 18 + t * 10, a + 30 + Math.sin(t) * 10, 4, 4);
    }
  }
  ((e.fillStyle = `#f2ede3`),
    e.fillRect(t, n + 124, r, 40),
    (e.strokeStyle = `rgba(170,70,60,0.75)`),
    (e.lineWidth = 1.5));
  for (let r = -4; r < 20; r++)
    (e.beginPath(),
      e.moveTo(t + r * 16, n + 130),
      e.lineTo(t + r * 16 + 30, n + 160),
      e.moveTo(t + r * 16 + 30, n + 130),
      e.lineTo(t + r * 16, n + 160),
      e.stroke());
  e.fillStyle = `#6c4c8c`;
  for (let r = 0; r < 8; r++)
    (e.beginPath(),
      e.arc(t + 16 + r * 32, n + 145, 5, 0, Math.PI * 2),
      e.fill());
  ((e.fillStyle = `#3a2a48`),
    e.fillRect(t, n + 124, r, 5),
    (e.fillStyle = `#e6dccb`));
  for (let r = 0; r < 16; r++)
    (e.beginPath(), e.arc(t + 8 + r * 16, n + 162, 8, 0, Math.PI), e.fill());
  ((e.fillStyle = `#16120f`), e.fillRect(t, n + 164, 96, 92));
  for (let r = 0; r < 6; r++)
    for (let i = 0; i < 6; i++) {
      let a = t + 3 + i * 15.5,
        o = n + 167 + r * 15;
      ((e.fillStyle = `#f1e2b4`),
        e.fillRect(a, o, 12, 12),
        (e.fillStyle = `#b8321e`),
        e.fillRect(a, o + 4, 12, 3),
        (e.fillStyle = `#2a201a`),
        e.fillRect(a, o, 12, 1.5));
    }
  ((e.fillStyle = `#191512`),
    e.fillRect(t + 96, n + 164, 80, 92),
    (e.strokeStyle = `#d4a640`),
    (e.lineWidth = 2.5),
    e.strokeRect(t + 100, n + 168, 72, 84),
    e.fillRect(t + 135, n + 168, 2, 84),
    (e.fillStyle = `#d9ab45`));
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 2; i++)
      (e.beginPath(),
        e.arc(t + 117 + i * 38, n + 184 + r * 28, 7, 0, Math.PI * 2),
        e.fill());
  ((e.fillStyle = `#3a2416`), e.fillRect(t + 176, n + 164, 80, 92));
  for (let r = 0; r < 4; r++) {
    ((e.fillStyle = `#c03020`), e.fillRect(t + 176, n + 168 + r * 22, 80, 3));
    for (let i = 0; i < 6; i++) {
      let a = t + 178 + i * 13 + (o() - 0.5) * 3,
        s = n + 172 + r * 22 + o() * 2;
      ((e.fillStyle = o() < 0.15 ? `#f1ece0` : `#d9bd8a`),
        e.beginPath(),
        e.moveTo(a, s + 3),
        e.lineTo(a + 5.5, s),
        e.lineTo(a + 11, s + 3),
        e.lineTo(a + 11, s + 15),
        e.lineTo(a, s + 15),
        e.closePath(),
        e.fill(),
        (e.fillStyle = o() < 0.3 ? `#d04a6a` : `#3a3530`));
      for (let t = 0; t < 3; t++)
        e.fillRect(a + 2 + o() * 6, s + 5 + t * 3, 1 + o() * 3, 1);
    }
  }
  (a(t, n, r, 164, 0.3), a(t, n + 124, r, 40, 0.55), a(t, n + 164, 96, 92, 0));
  for (let e = 0; e < 6; e++)
    for (let r = 0; r < 6; r++)
      a(t + 3 + r * 15.5, n + 167 + e * 15, 12, 12, 1);
  a(t + 96, n + 164, 160, 92, 0.15);
}
