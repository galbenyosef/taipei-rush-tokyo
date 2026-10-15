// tokyo/assets/characters-BvEb7Acx 04 — fillrect
// Lines 1015-1337 of readable/tokyo/assets/characters-BvEb7Acx.pretty.js (statement-aligned).
function Ge(e, t, n, r, i) {
  return (a, o, s, c, l) => {
    let u = Ne(e.length * 31 + (t & 255)),
      d = (e) => s + e * l,
      f = (e) => o + e * c,
      p = e === `sneaker` || e === `boot`,
      m = e === `dress` || e === `loafer` || e === `heel` || e === `flat`;
    (a.clearRect(o, s, c, l), (a.fillStyle = F(t)), a.fillRect(o, s, c, l));
    for (let e = 0; e < 40; e++)
      ((a.fillStyle = m
        ? `rgba(255,255,255,${(0.03 + u() * 0.05).toFixed(3)})`
        : `rgba(0,0,0,${(0.02 + u() * 0.03).toFixed(3)})`),
        a.fillRect(f(u()), d(u()), c * (0.05 + u() * 0.2), 1));
    let h = p ? 0.2 : e === `rainboot` ? 0.13 : 0.11;
    if (
      ((a.fillStyle = F(r)),
      a.fillRect(o, d(0), c, h * l),
      a.fillRect(o, d(1 - h), c, h * l),
      (a.fillStyle = F(L(r, 0.72))),
      a.fillRect(o, d(h) - 1.5, c, 2),
      a.fillRect(o, d(1 - h) - 0.5, c, 2),
      p)
    ) {
      a.fillStyle = F(L(r, 0.85));
      for (let e = 0; e < 18; e++)
        (a.fillRect(f(e / 18), d(0), 1, h * l * 0.5),
          a.fillRect(f(e / 18), d(1 - h * 0.5), 1, h * l * 0.5));
      ((a.fillStyle = F(L(r, 0.9))),
        a.fillRect(o, d(h * 0.6), c, 1.5),
        a.fillRect(o, d(1 - h * 0.6), c, 1.5));
    }
    if (p) {
      ((a.fillStyle = F(L(t, 0.94))),
        a.fillRect(f(0.84), d(h), c * 0.16, l * (1 - 2 * h)),
        (a.strokeStyle = F(L(t, 0.75))),
        a.setLineDash([3, 2]),
        (a.lineWidth = 1),
        a.beginPath(),
        a.moveTo(f(0.84), d(h)),
        a.lineTo(f(0.84), d(1 - h)),
        a.stroke(),
        a.setLineDash([]),
        (a.fillStyle = F(n)),
        a.fillRect(o, d(0.36), c * 0.1, l * 0.28));
      for (let e of [0.27, 0.73])
        ((a.fillStyle = F(n)),
          a.beginPath(),
          a.moveTo(f(0.18), d(e + 0.1 * (e < 0.5 ? -1 : 1) * 0)),
          a.bezierCurveTo(
            f(0.35),
            d(e + 0.07),
            f(0.55),
            d(e + 0.02),
            f(0.72),
            d(e - 0.1),
          ),
          a.lineTo(f(0.7), d(e - 0.04)),
          a.bezierCurveTo(
            f(0.52),
            d(e + 0.07),
            f(0.34),
            d(e + 0.12),
            f(0.18),
            d(e + 0.08),
          ),
          a.closePath(),
          a.fill());
      ((a.fillStyle = F(L(t, 0.9))),
        a.fillRect(f(0.34), d(0.42), c * 0.34, l * 0.16),
        (a.strokeStyle = F(e === `boot` ? 3811866 : 16185074)),
        (a.lineWidth = 2.2));
      for (let e = 0; e < 6; e++) {
        let t = 0.36 + e * 0.05;
        (a.beginPath(),
          a.moveTo(f(t), d(0.43)),
          a.lineTo(f(t + 0.035), d(0.57)),
          a.moveTo(f(t), d(0.57)),
          a.lineTo(f(t + 0.035), d(0.43)),
          a.stroke());
      }
      a.fillStyle = F(L(t, 0.6));
      for (let e = 0; e < 7; e++)
        (a.fillRect(f(0.355 + e * 0.05), d(0.425), 2, 2),
          a.fillRect(f(0.355 + e * 0.05), d(0.565), 2, 2));
      ((a.fillStyle = `rgba(20,18,16,0.95)`),
        a.fillRect(o, d(0.46), c * 0.28, l * 0.08));
    } else if (m) {
      if (
        ((a.strokeStyle = F(L(t, 0.6))),
        (a.lineWidth = 1.2),
        a.beginPath(),
        a.ellipse(
          f(0.83),
          d(0.5),
          c * 0.1,
          l * 0.22,
          0,
          Math.PI * 0.5,
          Math.PI * 1.5,
        ),
        a.stroke(),
        e === `loafer` &&
          ((a.fillStyle = F(L(t, 0.82))),
          a.fillRect(f(0.52), d(0.4), c * 0.06, l * 0.2)),
        e === `dress`)
      ) {
        ((a.strokeStyle = F(L(t, 0.45))), (a.lineWidth = 1.5));
        for (let e = 0; e < 4; e++)
          (a.beginPath(),
            a.moveTo(f(0.46 + e * 0.045), d(0.46)),
            a.lineTo(f(0.46 + e * 0.045), d(0.54)),
            a.stroke());
      }
      ((a.fillStyle = `rgba(16,14,12,0.95)`),
        a.fillRect(o, d(0.47), c * 0.26, l * 0.06),
        i && a.clearRect(f(0.18), d(0.36), c * 0.55, l * 0.28));
    } else
      e === `rainboot` &&
        ((a.fillStyle = `rgba(255,255,255,0.12)`),
        a.fillRect(o, d(0.3), c, l * 0.05),
        (a.fillStyle = `rgba(16,14,12,0.9)`),
        a.fillRect(o, d(0.46), c * 0.2, l * 0.08));
  };
}
function Ke(e, t) {
  return (n, r, i, a, o) => {
    let s = [e, 16052974, t, 16052974, e, 16052974],
      c = a / s.length;
    s.forEach((e, t) => {
      ((n.fillStyle = F(e)), n.fillRect(r + t * c, i, c + 1, o));
    });
    for (let e = 0; e < o; e += 4)
      for (let t = 0; t < a; t += 4)
        ((n.fillStyle =
          ((t + e) / 4) % 2 ? `rgba(0,0,0,0.12)` : `rgba(255,255,255,0.1)`),
          n.fillRect(r + t, i + e, 4, 2));
  };
}
var R = {
    hips: 0,
    spine: 1,
    chest: 2,
    neck: 3,
    head: 4,
    armL: 5,
    foreL: 6,
    handL: 7,
    armR: 8,
    foreR: 9,
    handR: 10,
    thighL: 11,
    shinL: 12,
    footL: 13,
    thighR: 14,
    shinR: 15,
    footR: 16,
    shoulderL: 17,
    shoulderR: 18,
    fingersL: 19,
    fingersR: 20,
    hair: 21,
    lidL: 22,
    lidR: 23,
    jaw: 24,
    eyeL: 25,
    eyeR: 26,
  },
  qe = Object.keys(R).sort((e, t) => R[e] - R[t]),
  Je = [
    -1,
    R.hips,
    R.spine,
    R.chest,
    R.neck,
    R.shoulderL,
    R.armL,
    R.foreL,
    R.shoulderR,
    R.armR,
    R.foreR,
    R.hips,
    R.thighL,
    R.shinL,
    R.hips,
    R.thighR,
    R.shinR,
    R.chest,
    R.chest,
    R.handL,
    R.handR,
    R.head,
    R.head,
    R.head,
    R.head,
    R.head,
    R.head,
  ],
  z = {
    pelvis: 0,
    torso: 1,
    head: 2,
    lUpper: 3,
    lFore: 4,
    rUpper: 5,
    rFore: 6,
    lThigh: 7,
    lShin: 8,
    rThigh: 9,
    rShin: 10,
    rItem: 11,
    lItem: 12,
    static: 13,
  },
  Ye = [
    z.pelvis,
    z.torso,
    z.torso,
    z.head,
    z.head,
    z.lUpper,
    z.lFore,
    z.lFore,
    z.rUpper,
    z.rFore,
    z.rFore,
    z.lThigh,
    z.lShin,
    z.lShin,
    z.rThigh,
    z.rShin,
    z.rShin,
    z.torso,
    z.torso,
    z.lFore,
    z.rFore,
    z.head,
    z.head,
    z.head,
    z.head,
    z.head,
    z.head,
  ];
function Xe(e) {
  let t = [];
  for (let e = 0; e < 27; e++) {
    let n = new _();
    ((n.name = qe[e]), t.push(n));
  }
  for (let n = 0; n < 27; n++) {
    let r = Je[n],
      i = e.p[n].clone();
    (r >= 0 && (i.sub(e.p[r]), t[r].add(t[n])), t[n].position.copy(i));
  }
  return t;
}
var B = {
    cloth: 0,
    skin: 1,
    hair: 2,
    eye: 3,
    gloss: 4,
    metal: 5,
    screen: 6,
    reflect: 7,
    lens: 8,
    satin: 9,
  },
  Ze = new M(),
  Qe = new k(),
  $e = new k(),
  et = new t(),
  tt = [0, 0],
  nt = { i: [0, 0, 0, 0], w: [1, 0, 0, 0] },
  rt = { x: 0, y: 0, w: 0, h: 0 },
  it = new Float64Array(3072),
  at = new Float64Array(64),
  ot = new Float64Array(64),
  st = new Int32Array(6144),
  ct = new Float64Array(3072),
  lt = new Int32Array(1024),
  ut = new Int32Array(3072),
  dt = new Int32Array(2048);
function ft(e, t) {
  return e.length >= t ? e : new Float64Array(Math.max(t, e.length * 2));
}
function pt(e, t) {
  return e.length >= t ? e : new Int32Array(Math.max(t, e.length * 2));
}
var mt = -1,
  ht = 0,
  gt = 0,
  _t = 0;
function vt(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = 1 / 0,
    i = -1 / 0,
    a = -1 / 0,
    o = -1 / 0;
  for (let s = 0; s < e.length; s += 3) {
    let c = e[s],
      l = e[s + 1],
      u = e[s + 2];
    (c < t && (t = c),
      l < n && (n = l),
      u < r && (r = u),
      c > i && (i = c),
      l > a && (a = l),
      u > o && (o = u));
  }
  let s = (t + i) / 2,
    c = (n + a) / 2,
    l = (r + o) / 2,
    u = 0;
  for (let t = 0; t < e.length; t += 3) {
    let n = e[t] - s,
      r = e[t + 1] - c,
      i = e[t + 2] - l,
      a = n * n + r * r + i * i;
    a > u && (u = a);
  }
  return new Float32Array([s, c, l, Math.sqrt(u), t, n, r, i, a, o]);
}
