// tokyo/assets/region-tokyo-d-kanda-CYJun2NB 10 — setmaterial
// Lines 3196-3543 of readable/tokyo/assets/region-tokyo-d-kanda-CYJun2NB.pretty.js (statement-aligned).
function Mt(e, t, n, r, i) {
  B(e, t, n, r, i, `#6fa894`);
  for (let a = 0; a < 16; a++)
    B(e, t + (a * r) / 16, n, 2, i, `rgba(30,60,50,0.35)`);
  for (let a = 0; a < 10; a++)
    B(e, t, n + (a * i) / 10, r, 1, `rgba(255,255,255,0.12)`);
  e.globalAlpha = 0.12;
  for (let a = 0; a < 30; a++)
    ((e.fillStyle = a % 2 ? `#2a4a3a` : `#a8d8c4`),
      e.fillRect(t + ((a * 37) % r), n + ((a * 53) % i), 6, 14));
  e.globalAlpha = 1;
}
function Nt(e, t, n, r, i) {
  B(e, t, n, r, i, kt);
  for (let a of [t + r * 0.3, t + r * 0.7]) {
    let t = r * 0.15;
    ((e.fillStyle = `#141a20`),
      e.beginPath(),
      e.moveTo(a - t, n + i * 0.92),
      e.lineTo(a - t, n + i * 0.15 + t),
      e.arc(a, n + i * 0.15 + t, t, Math.PI, 0),
      e.lineTo(a + t, n + i * 0.92),
      e.fill(),
      (e.fillStyle = `#7a6a3a`),
      e.beginPath(),
      e.arc(a, n + i * 0.45, t * 0.5, 0, Math.PI),
      e.fill());
  }
}
function Pt(e, t, n, r, i) {
  B(e, t, n, r, i, kt);
  let a = t + r / 2,
    o = r * 0.32;
  ((e.fillStyle = `#a89878`),
    e.beginPath(),
    e.moveTo(a - o - 4, n + i),
    e.lineTo(a - o - 4, n + i * 0.15 + o),
    e.arc(a, n + i * 0.15 + o, o + 4, Math.PI, 0),
    e.lineTo(a + o + 4, n + i),
    e.fill(),
    (e.fillStyle = `#3a2416`),
    e.beginPath(),
    e.moveTo(a - o, n + i),
    e.lineTo(a - o, n + i * 0.15 + o),
    e.arc(a, n + i * 0.15 + o, o, Math.PI, 0),
    e.lineTo(a + o, n + i),
    e.fill(),
    B(e, a - 1, n + i * 0.4, 2, i * 0.6, `#1a1008`));
}
function Ft(e) {
  (e.need(`nik:bay`, 64, 256, At),
    e.need(`nik:drum`, 256, 64, jt),
    e.need(`nik:copper`, 128, 128, Mt),
    e.need(`nik:belfry`, 64, 128, Nt),
    e.need(`nik:door`, 64, 96, Pt),
    e.need(`nik:stucco`, 32, 32, (e, t, n, r, i) => B(e, t, n, r, i, kt)),
    e.need(`nik:stone`, 64, 32, (e, t, n, r, i) => {
      B(e, t, n, r, i, `#9a968c`);
      for (let a = 0; a < 4; a++)
        B(e, t + (a * r) / 4, n, 1.5, i, `rgba(0,0,0,0.2)`);
    }),
    e.need(`nik:hedge`, 64, 32, (e, t, n, r, i) => {
      B(e, t, n, r, i, `#3a5e30`);
      for (let a = 0; a < 60; a++)
        B(
          e,
          t + ((a * 29) % r),
          n + ((a * 17) % i),
          3,
          3,
          a % 2 ? `#4e7a3e` : `#2c4a26`,
        );
    }),
    e.need(
      `nik:board`,
      192,
      64,
      Be(`kanda.nikolai.name`, `#f4f0e6`, `#2a2a2a`, `kanda.nikolai.hours`),
    ),
    e.need(
      `nik:juyo`,
      128,
      48,
      Be(`kanda.nikolai.juyo`, `#3a3a36`, `#e8e4d8`),
    ));
}
var It = 0.035;
function Lt(e, t, n, r, i, a, o, s = ``) {
  let c = t.uv(`nik:bay`),
    l = [
      [`S`, n, a, i, a],
      [`N`, i, r, n, r],
      [`E`, i, a, i, r],
      [`W`, n, r, n, a],
    ];
  for (let [t, n, r, i, a] of l) {
    if (s.includes(t)) continue;
    let l = Math.hypot(i - n, a - r),
      u = Math.max(1, Math.round(l / 3.2));
    for (let t = 0; t < u; t++) {
      let s = t / u,
        l = (t + 1) / u;
      O(
        e,
        n + (i - n) * s,
        r + (a - r) * s,
        n + (i - n) * l,
        r + (a - r) * l,
        0,
        o,
        c,
      );
    }
  }
}
function Rt(e, t, n) {
  let r = t.white(),
    i = t.uv(`nik:copper`),
    a = t.uv(`nik:stucco`),
    o = [],
    s = n > 1 ? 24 : n > 0 ? 18 : 12,
    { x: c, z: l } = Ot;
  (e.setMaterial(0.85, 0, It, 1), D(e, 16777215));
  let u = { x0: c - 8, x1: c + 10, z0: l - 6, z1: l + 6, h: 12 },
    d = { x0: c - 4.5, x1: c + 4.5, z0: l - 10.5, z1: l + 10.5, h: 11 },
    f = { x0: c - 11, x1: c - 8, z0: l - 4.5, z1: l + 4.5, h: 9 },
    p = { x0: c - 17.5, x1: c - 11, z0: l - 3.25, z1: l + 3.25, h: 15.5 };
  (Lt(e, t, u.x0, u.z0, u.x1, u.z1, u.h),
    Lt(e, t, d.x0, d.z0, d.x1, d.z1, d.h),
    Lt(e, t, f.x0, f.z0, f.x1, f.z1, f.h));
  {
    let n = p,
      s = t.uv(`nik:belfry`),
      c = [
        [n.x0, n.z1, n.x1, n.z1],
        [n.x1, n.z0, n.x0, n.z0],
        [n.x0, n.z0, n.x0, n.z1],
        [n.x1, n.z1, n.x1, n.z0],
      ];
    for (let [r, i, o, l] of c)
      (O(e, r, i, o, l, 0, 10.5, t.uv(`nik:bay`)),
        O(e, r, i, o, l, 10.5, 14.4, s),
        O(e, r, i, o, l, 14.4, n.h, a));
    (e.setMaterial(0.7, 0, 0, 0),
      D(e, 16777215),
      O(
        e,
        n.x0 - 0.06,
        n.z0 + 1.6,
        n.x0 - 0.06,
        n.z1 - 1.6,
        0,
        5.2,
        t.uv(`nik:door`),
      ),
      D(e, 13155488),
      A(e, n.x0 - 0.25, 10.3, n.z0 - 0.25, n.x1 + 0.25, 10.6, n.z1 + 0.25, r),
      A(
        e,
        n.x0 - 0.3,
        n.h - 0.1,
        n.z0 - 0.3,
        n.x1 + 0.3,
        n.h + 0.3,
        n.z1 + 0.3,
        r,
      ),
      e.setMaterial(0.85, 0, It, 1),
      D(e, 16777215));
    let u = (n.x0 + n.x1) / 2;
    (M(e, u, l, n.h + 0.3, n.h + 2, 2, t.uv(`nik:drum`), 8, !0),
      e.setMaterial(0.45, 0.6, 0, 0),
      D(e, 16777215),
      N(
        e,
        u,
        l,
        [
          2.25,
          n.h + 2,
          2.3,
          n.h + 2.35,
          1.9,
          n.h + 3.3,
          1,
          n.h + 4.3,
          0.3,
          n.h + 4.9,
          0.05,
          n.h + 5.1,
        ],
        8,
        i,
      ),
      zt(e, u, l, n.h + 5, 2.2, r),
      o.push({ cx: u, cz: l, hx: 3.25, hz: 3.25, h: n.h }));
  }
  (D(e, 13155488),
    e.setMaterial(0.85, 0, 0, 0),
    A(e, u.x0 - 0.2, u.h - 0.3, u.z0 - 0.2, u.x1 + 0.2, u.h, u.z1 + 0.2, r),
    A(e, d.x0 - 0.2, d.h - 0.3, d.z0 - 0.2, d.x1 + 0.2, d.h, d.z1 + 0.2, r),
    e.setMaterial(0.45, 0.6, 0, 0),
    D(e, 16777215),
    F(e, u.x0, u.z0, u.x1, u.z1, u.h, 2.4, `x`, i, !1, 0.35, a),
    F(e, d.x0, d.z0, d.x1, d.z1, d.h, 2.2, `z`, i, !1, 0.35, a),
    F(e, f.x0, f.z0, f.x1, f.z1, f.h, 1.2, `z`, i, !0, 0.3),
    o.push({
      cx: (u.x0 + u.x1) / 2,
      cz: l,
      hx: (u.x1 - u.x0) / 2,
      hz: 6,
      h: u.h,
    }),
    o.push({ cx: c, cz: l, hx: 4.5, hz: 10.5, h: d.h }),
    o.push({ cx: (f.x0 + f.x1) / 2, cz: l, hx: 1.5, hz: 4.5, h: f.h }),
    e.setMaterial(0.85, 0, It, 1),
    D(e, 16777215),
    N(
      e,
      c + 10,
      l,
      [4.6, 0, 4.6, 9.5],
      s / 2,
      t.uv(`nik:bay`),
      -Math.PI / 2,
      Math.PI / 2,
    ),
    e.setMaterial(0.45, 0.6, 0, 0),
    D(e, 16777215),
    N(
      e,
      c + 10,
      l,
      [4.9, 9.5, 4.6, 10.8, 3.6, 12.3, 2, 13.3, 0.05, 13.6],
      s / 2,
      i,
      -Math.PI / 2,
      Math.PI / 2,
    ),
    o.push({ cx: c + 12.3, cz: l, hx: 2.3, hz: 4.4, h: 9.5 }),
    e.setMaterial(0.85, 0, It, 1),
    D(e, 16777215),
    A(e, c - 6, 12, l - 6, c + 6, 13.4, l + 6, a),
    M(e, c, l, 13.4, 18.4, 5.7, t.uv(`nik:drum`), s, !0),
    D(e, 13155488),
    e.setMaterial(0.85, 0, 0, 0),
    M(e, c, l, 18.4, 18.9, 6.05, r, s),
    e.setMaterial(0.45, 0.6, 0, 0),
    D(e, 16777215));
  let m = [];
  for (let e = 0; e <= 8; e++) {
    let t = (e / 8) * (Math.PI / 2);
    m.push(6.3 * Math.cos(t) + 0.02, 18.9 + 6.6 * Math.sin(t));
  }
  (N(e, c, l, m, s, i),
    e.setMaterial(0.85, 0, It, 1),
    D(e, 16777215),
    M(e, c, l, 25.3, 26.6, 0.95, t.uv(`nik:drum`), 8, !0),
    e.setMaterial(0.45, 0.6, 0, 0),
    D(e, 16777215),
    N(e, c, l, [1.15, 26.6, 1, 27.1, 0.5, 27.6, 0.05, 27.8], 8, i),
    zt(e, c, l, 27.7, 2.6, r));
  let h = se,
    g = t.uv(`nik:stone`),
    _ = t.uv(`nik:hedge`),
    v = { z0: l - 4.5, z1: l + 4.5 },
    y = [
      [h.minX + 0.4, h.minZ + 0.4, h.maxX - 0.4, h.minZ + 1.2],
      [h.minX + 0.4, h.maxZ - 1.2, h.maxX - 0.4, h.maxZ - 0.4],
      [h.maxX - 1.2, h.minZ + 0.4, h.maxX - 0.4, h.maxZ - 0.4],
      [h.minX + 0.4, h.minZ + 0.4, h.minX + 1.2, v.z0],
      [h.minX + 0.4, v.z1, h.minX + 1.2, h.maxZ - 0.4],
    ];
  for (let [t, n, r, i] of y)
    (e.setMaterial(0.9, 0, 0, 0),
      D(e, 16777215),
      A(e, t, 0, n, r, 0.65, i, g),
      D(e, 16777215),
      A(e, t + 0.1, 0.65, n + 0.1, r - 0.1, 1.75, i - 0.1, _),
      o.push({
        cx: (t + r) / 2,
        cz: (n + i) / 2,
        hx: (r - t) / 2,
        hz: (i - n) / 2,
        h: 1.75,
      }));
  if (n > 0) {
    (e.setMaterial(0.5, 0.6, 0, 0), D(e, 2105892));
    for (let t of [h.minZ + 0.8, h.maxZ - 0.8]) {
      P(e, h.minX + 0.6, 2.2, t, h.maxX - 0.6, 2.2, t, 0.025, r);
      for (let n = h.minX + 0.6; n <= h.maxX - 0.6; n += 2.4)
        P(e, n, 0.65, t, n, 2.25, t, 0.035, r);
    }
  }
  (e.setMaterial(0.9, 0, 0, 0), D(e, 16777215));
  for (let t of [v.z0 - 0.4, v.z1 + 0.4])
    (A(e, h.minX + 0.2, 0, t - 0.4, h.minX + 1, 2.6, t + 0.4, g),
      o.push({ cx: h.minX + 0.6, cz: t, hx: 0.4, hz: 0.4, h: 2.6 }));
  return (
    e.setMaterial(0.6, 0, 0, 0),
    O(
      e,
      h.minX + 0.15,
      v.z0 - 0.75,
      h.minX + 0.15,
      v.z0 - 0.05,
      1,
      2.2,
      t.uv(`nik:board`),
    ),
    O(
      e,
      h.minX + 0.15,
      v.z1 + 0.05,
      h.minX + 0.15,
      v.z1 + 0.75,
      1.3,
      1.75,
      t.uv(`nik:juyo`),
    ),
    o
  );
}
function zt(e, t, n, r, i, a) {
  (e.setMaterial(0.3, 0.9, 0.05, 0),
    D(e, 14205040),
    P(e, t, r, n, t, r + i, n, 0.06, a),
    P(e, t, r + i * 0.86, n - 0.28, t, r + i * 0.86, n + 0.28, 0.04, a),
    P(e, t, r + i * 0.7, n - 0.48, t, r + i * 0.7, n + 0.48, 0.05, a),
    P(
      e,
      t,
      r + i * 0.4 - 0.12,
      n - 0.32,
      t,
      r + i * 0.4 + 0.12,
      n + 0.32,
      0.04,
      a,
    ));
}
var Y = {
  gateZ: -664,
  court: { x0: -292, x1: -262, z0: -692.5, z1: -669 },
  hall: { x0: -286, x1: -268, z0: -690.5, z1: -680 },
  nittoku: { x: -298.5 },
  kyodan: { x: -277 },
};
