// tokyo/assets/region-tokyo-d-kanda-DcnnktoK 14 — push
// Lines 4182-4509 of readable/tokyo/assets/region-tokyo-d-kanda-DcnnktoK.pretty.js (statement-aligned).
function sn(e) {
  let t = [],
    n = [],
    r = { fx: 0, fz: -1 },
    i = { fx: 0, fz: 1 },
    a = { fx: -1, fz: 0 },
    o = Yt(11, 20),
    s = Yt(11, 20),
    c = Yt(10, 18.5),
    l = Yt(11, 21),
    u = Yt(16, 24);
  for (let [e, n] of [
    [-476, `chuko`],
    [-469, `chuko`],
    [-461, `guitar`],
    [-447, `guitar`],
    [-445, `kaitori`],
    [-438.5, `chuko`],
    [-431, `guitar`],
    [-427, `kaitori`],
    [-420.5, `guitar`],
    [-413, `drum`],
    [-405, `wind`],
    [-398, `chuko`],
    [-394, `guitar`],
  ])
    t.push({
      model: `nobori:${n}`,
      x: e,
      y: 0,
      z: -574.5,
      ...r,
      range: 160,
      when: (e) => o(e),
    });
  (t.push({
    model: `aboard:gakki`,
    x: -437,
    y: 0,
    z: -574.6,
    ...r,
    range: 120,
    when: (e) => o(e),
  }),
    t.push({
      model: `aboard:gakki`,
      x: -429,
      y: 0,
      z: -574.6,
      ...r,
      range: 120,
      when: (e) => o(e),
    }));
  for (let [e, n] of [
    [-457, `ski`],
    [-451, `new`],
    [-445, `board`],
    [-439, `ski`],
    [-433, `board`],
    [-418, `ski`],
    [-410, `new`],
    [-463, `curry`],
  ])
    t.push({
      model: `nobori:${n}`,
      x: e,
      y: 0,
      z: -525,
      ...i,
      range: 170,
      when: (e) => s(e),
    });
  for (let [e, n] of [
    [-476, `kosho`],
    [-462.5, `kosho`],
    [-456, `curry`],
    [-454, `gp`],
    [-441, `ski`],
    [-435, `board`],
    [-404, `board`],
    [-398, `new`],
  ])
    t.push({
      model: `nobori:${n}`,
      x: e,
      y: 0,
      z: -494.9,
      ...r,
      range: 170,
      when: (e) =>
        n === `curry` || n === `gp` ? l(e) : n === `kosho` ? c(e) : s(e),
    });
  for (let [e, i] of [
    [-477.8, 0],
    [-475, 2],
    [-469.5, 1],
    [-462.7, 0],
  ])
    (t.push({
      model: `wagon:${i}`,
      x: e,
      y: 0,
      z: -495.6,
      ...r,
      range: 110,
      when: (e) => c(e),
    }),
      n.push({ x: e, z: -495.6, r: 0.6, h: 0.9 }));
  t.push({
    model: `aboard:curry`,
    x: -457.3,
    y: 0,
    z: -495,
    ...r,
    range: 110,
    when: (e) => l(e),
  });
  for (let e of [-345.2, -337, -319, -287, -270.2])
    (t.push({
      model: `barrel`,
      x: -11,
      y: 0,
      z: e,
      ...a,
      range: 120,
      when: (e) => u(e),
    }),
      n.push({ x: -11, z: e, r: 0.45, h: 1 }));
  (t.push({
    model: `aboard:gado`,
    x: -10.3,
    y: 0,
    z: -351.5,
    ...a,
    range: 100,
    when: (e) => u(e) || (e >= 11.5 && e < 14),
  }),
    t.push({
      model: `aboard:gado2`,
      x: -10.3,
      y: 0,
      z: -326,
      ...a,
      range: 100,
      when: (e) => u(e),
    }),
    t.push({
      model: `aboard:gado`,
      x: -10.3,
      y: 0,
      z: -293.5,
      ...a,
      range: 100,
      when: (e) => u(e),
    }),
    t.push({
      model: `aboard:gado2`,
      x: -10.3,
      y: 0,
      z: -279,
      ...a,
      range: 100,
      when: (e) => u(e),
    }),
    t.push({
      model: `aboard:soba`,
      x: -184.5,
      y: 0,
      z: -529,
      ...a,
      range: 90,
      when: (e) => e >= 11 && e < 20.5,
    }),
    [
      [-364.5, -568.5, 1.1],
      [-364.5, -531.5, 1],
      [-350, -568, 0.95],
      [-336, -568.5, 1.05],
      [-325, -569, 1],
      [-325, -531, 1.1],
      [-350, -532, 1],
      [-337, -532.5, 0.9],
    ].forEach(([e, r, a], o) => {
      (t.push({
        model: `tree:${o % 2}`,
        x: e,
        y: 0,
        z: r,
        ...i,
        s: a,
        range: 360,
      }),
        n.push({ x: e, z: r, r: 0.35, h: 3 }));
    }),
    Jt.forEach(([e, r, a], o) => {
      (t.push({
        model: `tree:${(o + 1) % 2}`,
        x: e,
        y: 0,
        z: r,
        ...i,
        s: a,
        range: 360,
      }),
        n.push({ x: e, z: r, r: 0.35, h: 3 }));
    }),
    t.push({
      model: `plate`,
      x: -391.2,
      y: 0,
      z: -574.8,
      fx: -0.7071,
      fz: -0.7071,
      range: 120,
    }),
    n.push({ x: -391.2, z: -574.8, r: 0.1, h: 2.9 }),
    t.push({
      model: `ema`,
      x: -284,
      y: 0,
      z: -737.3,
      fx: 0,
      fz: 1,
      range: 90,
      world: !0,
    }));
  let d = 0,
    f = new Map(
      e.map((e) => [e.name, e.geo.index ? e.geo.index.count / 3 : 0]),
    );
  for (let e of t) d += f.get(e.model) ?? 0;
  return { instances: t, circles: n, models: e, tris: d };
}
var cn = { level: -8.5, top: -599.7, bottom: -586.3 },
  X = cn.level,
  Z = { sx: -322, sz: cn.bottom, nx: -341, nz: cn.top, rail: X + 2.7 },
  ln = Z.nx - Z.sx,
  un = Z.nz - Z.sz,
  dn = Math.hypot(ln, un),
  Q = { x: ln / dn, z: un / dn };
function fn(e, t = 0) {
  return [Z.sx + Q.x * e - Q.z * t, Z.sz + Q.z * e + Q.x * t];
}
var pn = { half: 4.6, y0: Z.rail - 0.45, y1: Z.rail + 4.2 },
  mn = `#d8202c`;
function hn(e) {
  return (t, n, r, i, a) => {
    B(t, n, r, i, a, mn);
    let o = (e) => n + ((e + 9) / 18) * i,
      s = (e) => r + a - ((e - 0.95) / 2.5) * a;
    ((t.strokeStyle = `#ffffff`), (t.lineWidth = a * 0.022), t.beginPath());
    for (let e = 0; e <= 180; e++) {
      let n = -9 + (18 * e) / 180,
        r = 3.2 + 0.07 * Math.sin((n / 1.15) * Math.PI);
      e ? t.lineTo(o(n), s(r)) : t.moveTo(o(n), s(r));
    }
    (t.stroke(), (t.lineWidth = a * 0.012));
    for (let e of [3.33, 3.07])
      (t.beginPath(), t.moveTo(n, s(e)), t.lineTo(n + i, s(e)), t.stroke());
    B(t, n, s(1.1), i, s(0.95) - s(1.1), `#9a1420`);
    for (let e of xn) {
      ((t.strokeStyle = `#7a0e18`),
        (t.lineWidth = Math.max(1, i * 0.002)),
        t.strokeRect(o(e - 0.65), s(3), o(e + 0.65) - o(e - 0.65), s(1) - s(3)),
        t.beginPath(),
        t.moveTo(o(e), s(3)),
        t.lineTo(o(e), s(1)),
        t.stroke());
      for (let n of [-1, 1])
        gn(
          t,
          o(e + n * 0.33 - 0.22),
          s(2.75),
          o(e + n * 0.33 + 0.22) - o(e + n * 0.33 - 0.22),
          s(1.75) - s(2.75),
          a * 0.03,
        );
    }
    for (let [n, r] of wn(e))
      gn(t, o(n), s(2.78), o(r) - o(n), s(1.72) - s(2.78), a * 0.06);
  };
}
function gn(e, t, n, r, i, a) {
  ((e.fillStyle = `#4a5560`),
    e.beginPath(),
    e.roundRect(t, n, r, i, a),
    e.fill(),
    (e.fillStyle = `rgba(230,236,240,0.35)`),
    e.fillRect(t + r * 0.04, n + i * 0.06, r * 0.92, i * 0.07),
    (e.fillStyle = `rgba(40,52,70,0.6)`),
    e.fillRect(t, n + i * 0.72, r, i * 0.28));
}
function _n(e) {
  return (t, n, r, i, a) => {
    B(t, n, r, i, a, mn);
    let o = (e) => n + ((e + 1.39) / 2.78) * i,
      s = (e) => r + a - ((e - 0.95) / 2.5) * a;
    ((t.fillStyle = `#20262c`),
      t.beginPath(),
      t.roundRect(
        o(-1.12),
        s(3.12),
        o(1.12) - o(-1.12),
        s(1.85) - s(3.12),
        i * 0.08,
      ),
      t.fill(),
      B(t, o(-0.62), s(3), o(0.62) - o(-0.62), s(2.82) - s(3), `#0c0c0c`),
      (t.fillStyle = `#ffb030`));
    for (let e = 0; e < 9; e++)
      (e * 7) % 3 &&
        t.fillRect(o(-0.52 + e * 0.11), s(2.96), i * 0.018, a * 0.035);
    for (let n of [-1, 1])
      (B(
        t,
        o(n * 1.22 - 0.2),
        s(1.62),
        o(n * 1.22 + 0.2) - o(n * 1.22 - 0.2),
        s(1.28) - s(1.62),
        `#141414`,
      ),
        (t.fillStyle = e ? `#ff3020` : `#fff6dc`),
        t.fillRect(o(n * 1.22 - 0.16), s(1.58), i * 0.1, a * 0.03),
        t.fillRect(o(n > 0 ? 1.32 : -1.38), s(1.58), i * 0.022, a * 0.1));
    (B(t, n, s(1.1), i, s(0.95) - s(1.1), `#3a3a3c`),
      B(t, o(-0.25), s(1.25), o(0.25) - o(-0.25), s(1) - s(1.25), `#202022`));
  };
}
