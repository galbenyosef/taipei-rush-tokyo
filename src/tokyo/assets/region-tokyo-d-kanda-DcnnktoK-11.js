// tokyo/assets/region-tokyo-d-kanda-DcnnktoK 11 — need
// Lines 3544-3712 of readable/tokyo/assets/region-tokyo-d-kanda-DcnnktoK.pretty.js (statement-aligned).
function Bt(e, t, n, r, i) {
  B(e, t, n, r, i, `#222226`);
  for (let a = 0; a < 8; a++)
    B(e, t + (a * r) / 8, n, 1.5, i, `rgba(255,255,255,0.05)`);
}
function Vt(e, t, n, r, i) {
  (B(e, t, n, r, i, `#16161a`),
    B(e, t + r * 0.1, n + i * 0.2, r * 0.8, i * 0.5, `#3a2a1a`));
  for (let a = 0; a < 12; a++)
    B(
      e,
      t + r * 0.1 + (a * r * 0.8) / 12,
      n + i * 0.2,
      r * 0.03,
      i * 0.5,
      `#101012`,
    );
  B(e, t, n + i * 0.85, r, i * 0.15, `#2a2a2e`);
}
function Ht(e, t, n, r, i) {
  B(e, t, n, r, i, `#141416`);
  for (let a of [t + r * 0.25, t + r * 0.75]) {
    B(e, a - r * 0.21, n + i * 0.06, r * 0.42, i * 0.5, `#26262a`);
    for (let t = 1; t < 6; t++)
      B(
        e,
        a - r * 0.21 + (t * r * 0.42) / 6,
        n + i * 0.06,
        1.5,
        i * 0.5,
        `#0e0e10`,
      );
    for (let t = 1; t < 8; t++)
      B(
        e,
        a - r * 0.21,
        n + i * 0.06 + (t * i * 0.5) / 8,
        r * 0.42,
        1.5,
        `#0e0e10`,
      );
    B(e, a - r * 0.21, n + i * 0.62, r * 0.42, i * 0.3, `#1c1c20`);
    for (let t of [0.1, 0.5, 0.86])
      B(e, a - r * 0.235, n + i * t, r * 0.05, i * 0.03, `#a88a40`);
  }
}
function Ut(e) {
  return (t, n, r, i, a) => {
    (B(t, n, r, i, a, `#b89a4a`),
      B(t, n + i * 0.08, r + a * 0.05, i * 0.84, a * 0.9, `#121214`),
      ye(
        t,
        z(e),
        n + i / 2,
        r + a * 0.1,
        r + a * 0.9,
        i * 0.62,
        `#d8b860`,
        x(),
      ));
  };
}
function Wt(e) {
  return (t, n, r, i, a) => {
    B(t, n, r, i, a, `#8e8c86`);
    for (let e = 0; e < 40; e++)
      B(
        t,
        n + ((e * 23) % i),
        r + ((e * 41) % a),
        2,
        2,
        e % 2 ? `#9e9c96` : `#7e7c76`,
      );
    ye(
      t,
      z(e),
      n + i / 2,
      r + a * 0.06,
      r + a * 0.94,
      i * 0.66,
      `#1a1a1a`,
      x(),
    );
  };
}
function Gt(e) {
  (e.need(`sei:black`, 64, 64, Bt),
    e.need(`sei:renji`, 96, 64, Vt),
    e.need(`sei:door`, 96, 128, Ht),
    e.need(`sei:kawara`, 128, 64, je(`#4a4e52`)),
    e.need(`sei:wall`, 64, 64, (e, t, n, r, i) => {
      (B(e, t, n, r, i, `#4a4a4e`),
        B(e, t, n + i * 0.8, r, i * 0.2, `#3a3a3c`));
      for (let a = 0; a < 6; a++)
        B(e, t + (a * r) / 6, n, 1.5, i * 0.8, `rgba(0,0,0,0.18)`);
    }),
    e.need(`sei:pave`, 64, 64, (e, t, n, r, i) => {
      B(e, t, n, r, i, `#b8b2a4`);
      for (let a = 0; a < 4; a++)
        B(e, t, n + (a * i) / 4, r, 1.5, `rgba(0,0,0,0.18)`);
      for (let a = 0; a < 4; a++)
        for (let o = 0; o < 4; o++)
          B(
            e,
            t + (a * r) / 4 + (o % 2) * r * 0.125,
            n + (o * i) / 4,
            1.5,
            i / 4,
            `rgba(0,0,0,0.15)`,
          );
    }),
    e.need(`sei:gaku-nittoku`, 48, 128, Ut(`kanda.seido.nittokumon`)),
    e.need(`sei:gaku-taisei`, 48, 128, Ut(`kanda.seido.taiseiden`)),
    e.need(`sei:stone`, 48, 192, Wt(`kanda.seido.name`)),
    e.need(
      `sei:hours`,
      192,
      48,
      Be(`kanda.seido.hours`, `#f2efe6`, `#2a2a2a`),
    ));
}
function Kt(e, t, n, r, i, a, o, s, c, l) {
  let u = t.white(),
    d = t.uv(`sei:black`),
    f = t.uv(`sei:kawara`);
  (e.setMaterial(0.35, 0.1, 0, 0), D(e, 16777215));
  let p = i / 2,
    m = a / 2;
  for (let t of [-1, 1])
    for (let i of [-1, 1]) {
      let a = s === `z` ? n + i * m : n + t * p,
        l = s === `z` ? r + t * p : r + i * m;
      (A(e, a - 0.18, 0, l - 0.18, a + 0.18, o, l + 0.18, d),
        c.push({ cx: a, cz: l, hx: 0.2, hz: 0.2, h: o }));
    }
  if (
    (s === `z`
      ? A(e, n - m - 0.2, o - 0.5, r - p - 0.2, n + m + 0.2, o, r + p + 0.2, d)
      : A(e, n - p - 0.2, o - 0.5, r - m - 0.2, n + p + 0.2, o, r + m + 0.2, d),
    e.setMaterial(0.7, 0, 0, 0),
    s === `z`
      ? F(e, n - m, r - p, n + m, r + p, o, 1.6, `z`, f, !1, 0.9, d)
      : F(e, n - p, r - m, n + p, r + m, o, 1.6, `x`, f, !1, 0.9, d),
    l)
  ) {
    let i = t.uv(l);
    (e.setMaterial(0.4, 0.3, 0, 0),
      D(e, 16777215),
      s === `z`
        ? (j(e, n - m - 0.05, r, o - 1.6, o - 0.55, 0.32, 0.04, -1, 0, u, i, i),
          j(e, n + m + 0.05, r, o - 1.6, o - 0.55, 0.32, 0.04, 1, 0, u, i, i))
        : (j(e, n, r + m + 0.05, o - 1.6, o - 0.55, 0.32, 0.04, 0, 1, u, i, i),
          j(
            e,
            n,
            r - m - 0.05,
            o - 1.6,
            o - 0.55,
            0.32,
            0.04,
            0,
            -1,
            u,
            i,
            i,
          )));
  }
}
