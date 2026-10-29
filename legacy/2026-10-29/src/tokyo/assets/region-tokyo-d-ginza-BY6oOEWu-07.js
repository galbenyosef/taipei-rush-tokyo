// tokyo/assets/region-tokyo-d-ginza-BY6oOEWu 07 — math
// Lines 1842-2170 of readable/tokyo/assets/region-tokyo-d-ginza-BY6oOEWu.pretty.js (statement-aligned).
function mt(e) {
  let t = e.sign;
  e.body;
  let n = H(`parasol`, 2);
  for (let e of y) {
    let r = 0.02;
    (t.setTint(16777215).setInfo(0, 0, 0, 0),
      J(t, e.x - 0.03, r, e.z - 0.03, e.x + 0.03, 2.42, e.z + 0.03, `white`),
      J(t, e.x - 0.4, 0.72, e.z - 0.4, e.x + 0.4, 0.76, e.z + 0.4, `white`),
      J(t, e.x - 0.05, r, e.z - 0.05, e.x + 0.05, 0.72, e.z + 0.05, `steel`));
    for (let [n, i] of [
      [0.8, 0],
      [-0.8, 0],
      [0, 0.8],
      [0, -0.8],
    ]) {
      J(
        t,
        e.x + n - 0.21,
        0.44,
        e.z + i - 0.21,
        e.x + n + 0.21,
        0.48000000000000004,
        e.z + i + 0.21,
        `chair`,
      );
      let a = e.x + n * 1.27,
        o = e.z + i * 1.27;
      J(
        t,
        a - (i ? 0.21 : 0.02),
        0.48000000000000004,
        o - (n ? 0.21 : 0.02),
        a + (i ? 0.21 : 0.02),
        0.9,
        o + (n ? 0.21 : 0.02),
        `chair`,
      );
      for (let [a, o] of [
        [-0.18, -0.18],
        [0.18, -0.18],
        [-0.18, 0.18],
        [0.18, 0.18],
      ])
        J(
          t,
          e.x + n + a - 0.015,
          r,
          e.z + i + o - 0.015,
          e.x + n + a + 0.015,
          0.44,
          e.z + i + o + 0.015,
          `steel`,
        );
    }
    let i = 1.4,
      a = 2.57,
      o = 2.12;
    for (let r = 0; r < 8; r++) {
      let s = (r / 8) * Math.PI * 2,
        c = ((r + 1) / 8) * Math.PI * 2,
        l = e.x + Math.cos(s) * i,
        u = e.z + Math.sin(s) * i,
        d = e.x + Math.cos(c) * i,
        f = e.z + Math.sin(c) * i,
        p = Math.cos((s + c) / 2),
        m = Math.sin((s + c) / 2);
      (t.quad4(
        d,
        o,
        f,
        l,
        o,
        u,
        e.x,
        a,
        e.z,
        e.x,
        a,
        e.z,
        p * 0.3,
        0.95,
        m * 0.3,
        n.u0,
        n.v0,
        n.u1,
        n.v0,
        (n.u0 + n.u1) / 2,
        n.v1,
        (n.u0 + n.u1) / 2,
        n.v1,
      ),
        t.quad4(
          l,
          2.1100000000000003,
          u,
          d,
          2.1100000000000003,
          f,
          e.x,
          2.56,
          e.z,
          e.x,
          2.56,
          e.z,
          0,
          -1,
          0,
          n.u0,
          n.v0,
          n.u1,
          n.v0,
          (n.u0 + n.u1) / 2,
          n.v1,
          (n.u0 + n.u1) / 2,
          n.v1,
        ));
    }
  }
}
function ht(e, t, n) {
  let r = e[x(C.x0, C.z0, C.x1, C.z1)].sign,
    i = H(`hoarding`, 2);
  r.setTint(16777215).setInfo(0, 0, 0, 0);
  let a = [
    { px: C.x1, pz: C.z1, tx: 0, tz: -1, nx: 1, nz: 0, L: C.z1 - C.z0 },
    { px: C.x1, pz: C.z0, tx: -1, tz: 0, nx: 0, nz: -1, L: C.x1 - C.x0 },
    { px: C.x0, pz: C.z0, tx: 0, tz: 1, nx: -1, nz: 0, L: C.z1b - C.z0 },
    { px: C.x0, pz: C.z1b, tx: 1, tz: 0, nx: 0, nz: 1, L: C.x1b - C.x0 },
    { px: C.x1b, pz: C.z1b, tx: 0, tz: 1, nx: -1, nz: 0, L: C.z1 - C.z1b },
    { px: C.x1b, pz: C.z1, tx: 1, tz: 0, nx: 0, nz: 1, L: C.x1 - C.x1b },
  ];
  for (let e of a) {
    let n = Math.max(1, Math.round(e.L / 6));
    for (let a = 0; a < n; a++)
      q(r, e, 0, (a * e.L) / n, ((a + 1) * e.L) / n, t, t + 3, i);
    q(
      r,
      {
        px: e.px + e.tx * e.L,
        pz: e.pz + e.tz * e.L,
        tx: -e.tx,
        tz: -e.tz,
        nx: -e.nx,
        nz: -e.nz,
        L: e.L,
      },
      0.02,
      0,
      e.L,
      t,
      t + 3,
      _t(`white`),
    );
  }
  (n.push({ x0: C.x0, z0: C.z0, x1: C.x1, z1: C.z1b, h: t + 3 }),
    n.push({ x0: C.x1b, z0: C.z0, x1: C.x1, z1: C.z1, h: t + 3 }));
  let o = a[0];
  (r.setInfo(0, 0, 60, 0),
    q(r, o, 0.04, 2.2, 3.2, t + 1, t + 1 + 1.375, H(`kenchiku`, 2)),
    q(r, o, 0.04, 5.2, 5.95, t + 0.9, t + 0.9 + 1.375, H(`owabi`, 2)));
  let s = a[1];
  (r.setInfo(0, 0, 0, 0),
    Q(r, s, 7.5, 0.1, 0.15, 0.15, t, t + 3.4, `steel`),
    Q(r, s, 12.5, 0.1, 0.15, 0.15, t, t + 3.4, `steel`),
    Q(r, s, 10, 0.05, 2.5, 0.05, t + 3.2, t + 3.4, `steel`),
    r.setInfo(2, 0, 200, 0),
    Q(r, s, 12.5, 0.1, 0.12, 0.12, t + 3.4, t + 3.65, `red`),
    r.setInfo(0, 0, 0, 0));
  let { craneX: c, craneZ: l, craneH: u } = C;
  (J(r, c - 0.8, t + 33.5, l - 0.8, c + 0.8, t + u, l + 0.8, `orange`),
    J(r, c - 0.9, t + u, l - 0.9, c + 0.9, t + u + 2.2, l + 0.9, `white`),
    J(r, c - 0.6, t + u + 1.6, l - 26, c + 0.6, t + u + 2.6, l + 1, `orange`),
    J(r, c - 0.8, t + u + 1.4, l + 1, c + 0.8, t + u + 2.4, l + 9, `orange`),
    J(r, c - 1.2, t + u + 0.2, l + 6, c + 1.2, t + u + 1.4, l + 9, `granite`),
    J(
      r,
      c - 0.1,
      t + u + 2.6,
      l - 0.1,
      c + 0.1,
      t + u + 5.4,
      l + 0.1,
      `orange`,
    ),
    r.setInfo(2, 7, 255, 0),
    J(r, c - 0.2, t + u + 5.4, l - 0.2, c + 0.2, t + u + 5.8, l + 0.2, `red`),
    J(r, c - 0.2, t + u + 2.6, l - 25.8, c + 0.2, t + u + 3, l - 25.4, `red`));
}
function gt(e, t, n) {
  n.push(ie(e[x(k.x - 2, k.z - 2, k.x + 2, k.z + 2)].sign, U, k, t, k.plinth));
}
function _t(e) {
  let t = U(e);
  return { u0: t.u, u1: t.u, v0: t.v, v1: t.v };
}
function vt(e, t) {
  let n = e.sign,
    r = U(`white`),
    i = n.info,
    a = t + 0.014,
    o = 4.6;
  n.setTint(6051408);
  for (let e of _) {
    let t = Math.min(200, 50 + (e.bright ?? 100) * 0.55);
    for (let s of e.faces) {
      let c = it(e, s),
        l = Math.max(2, Math.round(c.L / 2.5));
      for (let e = 0; e < 4; e++)
        for (let s = 0; s < l; s++) {
          let u = (s * c.L) / l,
            d = ((s + 1) * c.L) / l,
            f = (e * o) / 4 + 0.05,
            p = ((e + 1) * o) / 4 + 0.05,
            m = (e, t) => [
              c.px + c.tx * e + c.nx * t,
              c.pz + c.tz * e + c.nz * t,
            ],
            [h, g] = m(u, f),
            [_, v] = m(d, f),
            [y, b] = m(d, p),
            [x, S] = m(u, p);
          n.setInfo(0, 0, 0, 0);
          let C = c.tx * c.nz - c.tz * c.nx < 0;
          C
            ? n.quad4(
                h,
                a,
                g,
                _,
                a,
                v,
                y,
                a,
                b,
                x,
                a,
                S,
                0,
                1,
                0,
                r.u,
                r.v,
                r.u,
                r.v,
                r.u,
                r.v,
                r.u,
                r.v,
              )
            : n.quad4(
                h,
                a,
                g,
                x,
                a,
                S,
                y,
                a,
                b,
                _,
                a,
                v,
                0,
                1,
                0,
                r.u,
                r.v,
                r.u,
                r.v,
                r.u,
                r.v,
                r.u,
                r.v,
              );
          let w = (e, n) => {
              let r = Math.max(0, 1 - n / o),
                i = Math.min(1, e / 2.5, (c.L - e) / 2.5);
              return Math.round(t * r * r * r * (0.35 + 0.65 * Math.max(0, i)));
            },
            T = n.vc - 4,
            E = C
              ? [w(u, f), w(d, f), w(d, p), w(u, p)]
              : [w(u, f), w(u, p), w(d, p), w(d, f)];
          for (let e = 0; e < 4; e++) i[(T + e) * 4 + 3] = E[e];
        }
    }
  }
}
n.add({
  "按 E 進店試穿衣服": `E で入店して試着する`,
  "UNISHIRO 已打烊（11:00–21:00）": `UNISHIRO は閉店しました（11:00–21:00）`,
  "UNISHIRO 銀座店": `ユニシロ 銀座店`,
  "いらっしゃいませ！歡迎試穿。": `いらっしゃいませ！どうぞご試着ください。`,
});
var yt = { x: 57.6, z: 448.3, r: 2.4 },
  bt = [11, 21],
  xt = {
    zh: `按 E 進店試穿衣服`,
    en: `Press E to shop for clothes`,
    ja: `E で入店して試着する`,
  },
  St = {
    zh: `UNISHIRO 已打烊（11:00–21:00）`,
    en: `UNISHIRO is closed (11:00–21:00)`,
    ja: `UNISHIRO は閉店しました（11:00–21:00）`,
  },
  Ct = { zh: `UNISHIRO 銀座店`, en: `UNISHIRO Ginza`, ja: `ユニシロ 銀座店` },
  wt = { zh: `銀座六丁目`, en: `Ginza 6-chome`, ja: `銀座六丁目` },
  Tt = { zh: `店員`, en: `Clerk`, ja: `店員` },
  Et = {
    zh: `いらっしゃいませ！歡迎試穿。`,
    en: `Irasshaimase! Try anything on.`,
    ja: `いらっしゃいませ！どうぞご試着ください。`,
  },
  Dt = null,
  Ot = !1,
  kt = (e) => o(a(e, `TWD`), { currency: `JPY` });
function At(e) {
  let t = e.state;
  return new Proxy(t, {
    get(e, t) {
      if (t === `money`) return l(Number(e.wallet ?? e.money) || 0, `TWD`);
      if (t === `addMoney`) return (t, n) => e.addMoney(t, n, `TWD`);
      let n = Reflect.get(e, t, e);
      return typeof n == `function` ? n.bind(e) : n;
    },
  });
}
