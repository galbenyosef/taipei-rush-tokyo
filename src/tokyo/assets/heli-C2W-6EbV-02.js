// tokyo/assets/heli-C2W-6EbV 02 — fillrect
// Lines 147-466 of readable/tokyo/assets/heli-C2W-6EbV.pretty.js (statement-aligned).
function _e(e) {
  let t = me.get(e);
  if (t) return t;
  let [n, r] = ee(ue, 512);
  r.clearRect(0, 0, ue, 512);
  let i = ce[e];
  (j.w,
    e === `private`
      ? ((r.fillStyle = `#163a7a`),
        r.beginPath(),
        r.moveTo(P(-4), F(0.92)),
        r.lineTo(P(-3.2), F(0.98)),
        r.bezierCurveTo(P(-1), F(1.02), P(1.2), F(1.06), P(3), F(1.62)),
        r.lineTo(P(3), F(1.32)),
        r.bezierCurveTo(P(1.2), F(0.8), P(-1), F(0.74), P(-3.2), F(0.72)),
        r.lineTo(P(-4), F(0.7)),
        r.closePath(),
        r.fill(),
        (r.strokeStyle = `#4fb3ff`),
        (r.lineWidth = 7),
        r.beginPath(),
        r.moveTo(P(-3.4), F(1.07)),
        r.bezierCurveTo(P(-1), F(1.12), P(1.2), F(1.18), P(3), F(1.74)),
        r.stroke(),
        I(
          r,
          k[0],
          P(-0.98),
          F(0.98) - 2,
          P(0.22) - P(-0.98),
          26,
          `#ffffff`,
          800,
        ),
        I(
          r,
          k[1],
          P(-0.98),
          F(0.86) - 2,
          P(0.22) - P(-0.98),
          15,
          `#cfe6ff`,
          700,
        ))
      : e === `news`
        ? ((r.fillStyle = `#ffffff`),
          r.beginPath(),
          r.moveTo(P(-4), F(1.05)),
          r.bezierCurveTo(P(-1.5), F(1.1), P(1), F(1.18), P(3), F(1.72)),
          r.lineTo(P(3), F(1.56)),
          r.bezierCurveTo(P(1), F(1), P(-1.5), F(0.94), P(-4), F(0.9)),
          r.closePath(),
          r.fill(),
          (r.fillStyle = `#ff7a1a`),
          r.beginPath(),
          r.moveTo(P(-3.6), F(0.86)),
          r.bezierCurveTo(P(-1.5), F(0.88), P(1), F(0.95), P(3), F(1.48)),
          r.lineTo(P(3), F(1.3)),
          r.bezierCurveTo(P(1), F(0.78), P(-1.5), F(0.7), P(-3.6), F(0.69)),
          r.closePath(),
          r.fill(),
          I(
            r,
            `狂飆新聞`,
            P(-1.1),
            F(1.9),
            P(0.3) - P(-1.1),
            52,
            `#ffffff`,
            900,
          ),
          I(
            r,
            `RUSH NEWS 24`,
            P(-1.1),
            F(1.42),
            P(0.3) - P(-1.1),
            26,
            `#ffd14a`,
            900,
            `Arial Black, Helvetica, sans-serif`,
          ),
          I(
            r,
            `LIVE`,
            P(0.5),
            F(0.9) - 6,
            P(1.4) - P(0.5),
            24,
            `#ffffff`,
            900,
            `Arial Black, Helvetica, sans-serif`,
          ))
        : ((r.fillStyle = `#d4202a`),
          r.beginPath(),
          r.moveTo(P(-4), F(0.8)),
          r.bezierCurveTo(P(-1.5), F(0.8), P(1), F(0.86), P(3), F(1.3)),
          r.lineTo(P(3), F(0.5)),
          r.lineTo(P(-4), F(0.5)),
          r.closePath(),
          r.fill(),
          r.fillRect(P(-2.6), F(2.07), P(3) - P(-2.6), F(1.99) - F(2.07)),
          I(
            r,
            `空中救護`,
            P(-1.08),
            F(1.12),
            P(0.22) - P(-1.08),
            F(0.86) - F(1.12),
            `#d4202a`,
            900,
          ),
          I(
            r,
            `AIR AMBULANCE`,
            P(-1.6),
            F(0.79),
            P(0.4) - P(-1.6),
            F(0.62) - F(0.79),
            `#ffffff`,
            800,
            `Arial Black, Helvetica, sans-serif`,
          ),
          ge(r, P(0.95), F(1.45), 34)),
    he(r, e === `news` ? `#06122e` : `#3b4148`));
  {
    let { x: t, y: n, w: a, h: o } = fe,
      s = (e) => t + ((e - M.z0) / (M.z1 - M.z0)) * a;
    e === `private`
      ? ((r.fillStyle = `#163a7a`),
        r.fillRect(t, n + o * 0.55, a, o * 0.22),
        (r.fillStyle = `#4fb3ff`),
        r.fillRect(t, n + o * 0.45, a, o * 0.05),
        I(
          r,
          i.reg,
          s(3.2),
          n + o * 0.12,
          s(5.6) - s(3.2),
          o * 0.3,
          `#163a7a`,
          900,
          `Arial Black, Helvetica, sans-serif`,
        ))
      : e === `news`
        ? ((r.fillStyle = `#ff7a1a`),
          r.fillRect(t, n + o * 0.4, a, o * 0.16),
          I(
            r,
            `RUSH NEWS`,
            s(3),
            n + o * 0.08,
            s(5.8) - s(3),
            o * 0.3,
            `#ffffff`,
            900,
            `Arial Black, Helvetica, sans-serif`,
          ),
          I(
            r,
            i.reg,
            s(3.4),
            n + o * 0.62,
            s(5.4) - s(3.4),
            o * 0.22,
            `#ffd14a`,
            800,
            `Arial Black, Helvetica, sans-serif`,
          ))
        : ((r.fillStyle = `#d4202a`),
          r.fillRect(t, n + o * 0.5, a, o * 0.3),
          I(
            r,
            i.reg,
            s(3.2),
            n + o * 0.12,
            s(5.6) - s(3.2),
            o * 0.3,
            `#2b2f36`,
            900,
            `Arial Black, Helvetica, sans-serif`,
          ));
  }
  {
    let { x: t, y: n, w: i, h: a } = pe;
    e === `private`
      ? ((r.fillStyle = `#163a7a`),
        r.fillRect(t, n + a * 0.62, i, a * 0.38),
        (r.fillStyle = `#4fb3ff`),
        r.fillRect(t, n + a * 0.54, i, a * 0.06))
      : e === `news`
        ? ((r.fillStyle = `#ff7a1a`),
          r.fillRect(t, n, i, a * 0.3),
          I(
            r,
            `24`,
            t + i * 0.25,
            n + a * 0.36,
            i * 0.5,
            a * 0.5,
            `#ffffff`,
            900,
            `Arial Black, Helvetica, sans-serif`,
          ))
        : ((r.fillStyle = `#d4202a`),
          r.fillRect(t, n + a * 0.66, i, a * 0.34),
          (r.fillStyle = `#d4202a`),
          r.fillRect(t + i * 0.5 - 7, n + a * 0.12, 14, 38),
          r.fillRect(t + i * 0.5 - 19, n + a * 0.12 + 12, 38, 14));
  }
  return ((t = be(n)), me.set(e, t), t);
}
var L = null,
  ve = { u0: 64 / 512, v0: 1 - 448 / 512, u1: 448 / 512, v1: 1 - 64 / 512 };
function ye() {
  if (L) return L;
  let [e, t] = ee(512, 512);
  (t.clearRect(0, 0, 512, 512),
    (t.strokeStyle = `#f4f4f0`),
    (t.lineWidth = 10),
    t.strokeRect(74, 74, 364, 364),
    t.setLineDash([22, 16]),
    (t.lineWidth = 4),
    t.strokeRect(92, 92, 328, 328),
    t.setLineDash([]),
    (t.strokeStyle = `#f2c200`),
    (t.lineWidth = 18),
    t.beginPath(),
    t.arc(256, 256, 138.24, 0, Math.PI * 2),
    t.stroke(),
    (t.fillStyle = `#f4f4f0`));
  let n = 99.84,
    r = 138.24,
    i = 384 * 0.075;
  return (
    t.fillRect(256 - n / 2, 256 - r / 2, i, r),
    t.fillRect(277.12, 256 - r / 2, i, r),
    t.fillRect(256 - n / 2, 256 - i / 2, n, i),
    (L = be(e)),
    L
  );
}
function be(e) {
  let t = new _(e);
  return (
    (t.colorSpace = s),
    (t.premultiplyAlpha = !0),
    (t.anisotropy = 8),
    (t.generateMipmaps = !0),
    (t.minFilter = p),
    (t.magFilter = m),
    (t.needsUpdate = !0),
    (t.name = `vehicle-heli-atlas`),
    (t.onUpdate = () => {
      t.onUpdate = null;
      let e = t.image;
      ((e.width = 1), (e.height = 1));
    }),
    t
  );
}
var xe = new h(0, 3.12, 0),
  Se = new h(-0.36, 2.38, 6.95),
  Ce = 5.35,
  we = new h(0.42, 0.98, -1.8),
  Te = { halfW: 1.2, front: -3.98, back: 2.9, height: 2.75 },
  R = [0, 0, 0],
  z = [0, 0, 0],
  B = [0, 0, 0],
  V = [0, 0, 0],
  H = [0, 0, 0],
  U = [0, 0, 0],
  W = [0, 0, 0],
  G = [0, 0, 0],
  Ee = [0, 0, 0, 0, 0, 0, 0, 0],
  K = (e, t, n, r) => ((e[0] = t), (e[1] = n), (e[2] = r), e),
  De = { color: 16777215, paint: 1, rough: 0.3, metal: 0.05 },
  Oe = { color: 1450027, rough: 0.04, metal: 0.25 },
  ke = { color: 2369323, rough: 0.55, metal: 0.25 },
  Ae = { color: 9212825, rough: 0.35, metal: 0.8 },
  je = { color: 10133927, rough: 0.4, metal: 0.7 },
  Me = { color: 2763823, rough: 0.5, metal: 0.2 },
  Ne = { color: 15909376, rough: 0.5 },
  Pe = { color: 1579291, rough: 0.85 };
function Fe(e, t, n) {
  let r = e.length;
  if (n <= e[0][0]) return e[0][t];
  if (n >= e[r - 1][0]) return e[r - 1][t];
  let i = 0;
  for (; i < r - 2 && e[i + 1][0] < n;) i++;
  let a = e[Math.max(0, i - 1)],
    o = e[i],
    s = e[i + 1],
    c = e[Math.min(r - 1, i + 2)],
    l = (n - o[0]) / (s[0] - o[0]),
    u = a[t],
    d = o[t],
    f = s[t],
    p = c[t],
    m = l * l,
    h = m * l;
  return (
    0.5 *
    (2 * d +
      (-u + f) * l +
      (2 * u - 5 * d + 4 * f - p) * m +
      (-u + 3 * d - 3 * f + p) * h)
  );
}
function Ie(e, t, n, r, i, a, o, s) {
  let c = Math.sin(a),
    l = -Math.cos(a),
    u = 2 / (l > 0 ? o : s);
  return K(
    e,
    n * Math.sign(c) * Math.abs(c) ** +u,
    (r + i) / 2 + ((i - r) / 2) * Math.sign(l) * Math.abs(l) ** +u,
    t,
  );
}
