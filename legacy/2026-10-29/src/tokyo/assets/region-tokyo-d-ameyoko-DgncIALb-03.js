// tokyo/assets/region-tokyo-d-ameyoko-DgncIALb 03 — setmaterial
// Lines 502-840 of readable/tokyo/assets/region-tokyo-d-ameyoko-DgncIALb.pretty.js (statement-aligned).
function ie(e) {
  return (t, n, r, i, a) => {
    let o = [`#c8c4b8`, `#b8b4a8`, `#d4cdb8`][e];
    y(t, n, r, i, a, o);
    for (let e = 0; e < 32; e++)
      y(t, n + (i * e) / 32, r, i / 64, a, `#a8a498`);
    (g(
      t,
      40 + e,
      n,
      r,
      i,
      a,
      220,
      2.5,
      [`#8a6a4a`, `#7a766c`, `#a08060`],
      0.35,
    ),
      (t.globalAlpha = 0.2),
      (t.fillStyle = `#4a463e`));
    for (let e = 0; e < 18; e++)
      t.fillRect(
        n + ((e * 53) % 100) * (i / 100),
        r,
        2,
        a * (0.4 + ((e * 29) % 50) / 100),
      );
    ((t.globalAlpha = 1),
      e === 1
        ? (y(t, n + i * 0.1, r + a * 0.25, i * 0.5, a * 0.4, `#d8b8a0`),
          h(
            t,
            v(`ameyoko.pop.sen`),
            n + i * 0.35,
            r + a * 0.45,
            i * 0.44,
            a * 0.26,
            `#a83a2a`,
            `900`,
          ))
        : e === 2 &&
          (y(t, n + i * 0.55, r + a * 0.2, i * 0.38, a * 0.5, `#2a4a8a`),
          h(
            t,
            v(`ameyoko.pop.menzei`),
            n + i * 0.74,
            r + a * 0.45,
            i * 0.32,
            a * 0.25,
            `#ffffff`,
            `900`,
          )));
  };
}
function ae(e) {
  let t = [...I, ...L].find((t) => t.look === e),
    n = R.indexOf(e);
  return (e, r, i, a, o) => {
    y(e, r, i, a, o, [`#a8acae`, `#b4b0a4`, `#9ea4a8`][n % 3]);
    for (let t = 0; t < 36; t++) y(e, r, i + (o * t) / 36, a, 1.5, `#8a8e90`);
    if (
      (g(e, 70 + n, r, i, a, o, 150, 2, [`#7a7e80`, `#c0c4c6`, `#8a6a4a`], 0.3),
      h(
        e,
        v(t.name),
        r + a / 2,
        i + o * 0.3,
        a * 0.86,
        o * 0.16,
        n % 2 ? `#1d4e9e` : `#c01818`,
        `900`,
      ),
      n % 3 == 0 &&
        u(
          e,
          v(`ameyoko.sign.a`) + v(`ameyoko.sign.me`) + v(`ameyoko.sign.yoko`),
          r + a / 2,
          i + o * 0.58,
          a * 0.4,
          o * 0.16,
          `#e60012`,
          `#ffffff`,
          `900`,
        ),
      n % 4 == 1)
    ) {
      ((e.strokeStyle = [`#2a2a2a`, `#3a6ad0`][n % 2]),
        (e.lineWidth = 3),
        e.beginPath(),
        e.moveTo(r + a * 0.1, i + o * 0.8));
      for (let t = 1; t < 8; t++)
        e.lineTo(r + a * (0.1 + t * 0.05), i + o * (0.8 - (t % 2) * 0.1));
      e.stroke();
    }
    y(e, r, i + o * 0.94, a, o * 0.06, `#5a5e60`);
  };
}
function oe(e, t, n, r, i) {
  y(e, t, n, r, i, `#9c988e`);
  for (let a = 0; a < 8; a++) y(e, t, n + (i * a) / 8, r, 1, `#86827a`);
  g(e, 91, t, n, r, i, 200, 2, [`#7a766c`, `#b4b0a6`, `#6a5a4a`], 0.3);
}
function se(e, t, n, r, i) {
  b(e, t, n, r, i, `#d42a1e`, 0.66);
  for (let a = 1; a < 8; a++) y(e, t, n + (i * a) / 8, r, 1, `#a81e14`);
  (a(
    e,
    v(`ameyoko.pop.nikomi`),
    t + r / 2,
    n + i * 0.15,
    n + i * 0.85,
    r * 0.5,
    `#1a1a1a`,
    void 0,
    `900`,
  ),
    y(e, t, n, r, i * 0.06, `#1a1a1a`),
    y(e, t, n + i * 0.94, r, i * 0.06, `#1a1a1a`));
}
function B(e) {
  return (t, n, r, i, o) => {
    (b(t, n, r, i, o, e ? `#ffffff` : `#d81818`, 0.6),
      a(
        t,
        v(e ? `ameyoko.yearend.shogatsu` : `ameyoko.yearend.saimatsu`),
        n + i / 2,
        r + o * 0.06,
        r + o * 0.94,
        i * 0.7,
        e ? `#d81818` : `#ffffff`,
        void 0,
        `900`,
      ));
  };
}
function V(e, t, n) {
  return (r, i, a, o, s) => {
    (b(r, i, a, o, s, t, 0.6),
      u(
        r,
        v(e),
        i + o / 2,
        a + s / 2,
        o * 0.88,
        s * 0.72,
        n,
        t === `#ffffff` ? `#ffe100` : `#1a1a1a`,
        `900`,
      ));
  };
}
function ce(e, t) {
  return {
    name: `ut-open-${t}`,
    write: (n) => {
      let r = O / 2 - 0.2,
        i = 3.05,
        a = e.white();
      (n.setMaterial(0.5, 0, 0.42, P | 16),
        w(n, 16777215),
        l(n, -r, -1.6, r, -1.6, 0.02, i, e.uv(`ut-in-${t}`)),
        n.setMaterial(0.7, 0, 0.3, 17),
        w(n, t === `motsu` || t === `yakitori` ? 6965810 : 15262938),
        n.quad(
          -r,
          i,
          0,
          r,
          i,
          0,
          r,
          i,
          -1.6,
          -r,
          i,
          -1.6,
          a.u0,
          a.v0,
          a.u1,
          a.v1,
        ),
        n.setMaterial(0.8, 0, 0, 16),
        w(n, t === `motsu` || t === `yakitori` ? 4863012 : 12104358),
        l(n, -r, 0, -r, -1.6, 0.02, i, a),
        l(n, r, -1.6, r, 0, 0.02, i, a),
        w(n, 6973022),
        n.quad(
          -r,
          0.03,
          -1.6,
          r,
          0.03,
          -1.6,
          r,
          0.03,
          0,
          -r,
          0.03,
          0,
          a.u0,
          a.v0,
          a.u1,
          a.v1,
        ));
    },
  };
}
var le = (e) => {
  let t = R.map((t) => ce(e, t));
  for (let n of R)
    t.push({
      name: `ut-shutter-${n}`,
      write: (t) => {
        (t.setMaterial(0.6, 0.4, 0, 0),
          w(t, 16777215),
          l(
            t,
            -(O / 2 - 0.2),
            0.05,
            O / 2 - 0.2,
            0.05,
            0.02,
            3.05,
            e.uv(`ut-shutter-${n}`),
          ));
      },
    });
  t.push({
    name: `chochin`,
    write: (t) => {
      (t.setMaterial(0.8, 0, 0.6, P),
        w(t, 16777215),
        T(t, 0, -0.42, 0, 0.22, 0.32, 0.22, e.uv(`chochin`), 5, 8),
        t.setMaterial(0.6, 0, 0, 0),
        w(t, 1710618),
        f(t, -0.01, -0.1, -0.01, 0.01, 0, 0.01, e.white()));
    },
  });
  for (let n of [0, 1])
    t.push({
      name: `ut-ye-${n}`,
      write: (t) => {
        (t.setMaterial(0.8, 0, 0.3, P | 16),
          w(t, 16777215),
          l(t, -0.32, 0.02, 0.32, 0.02, -1.7, 0, e.uv(`ut-ye-${n}`)),
          l(t, 0.32, -0.02, -0.32, -0.02, -1.7, 0, e.uv(`ut-ye-${n}`)));
      },
    });
  return t;
};
function H() {
  let e = [];
  return (
    D.forEach(([t, n], r) => {
      let i = r === 0 ? I : L,
        a = Math.floor((n - t) / O),
        o = (n - t - a * O) / 2;
      for (let n = 0; n < a; n++) {
        let r = t + o + n * O;
        e.push({ z0: r, z1: r + O, d: i[Math.min(i.length - 1, n)] });
      }
    }),
    e
  );
}
function ue(e, r) {
  let i = r.white(),
    a = E.face,
    o = E.soffit,
    s = H(),
    c = new t(n(`ut-row`, 1));
  for (let t of s)
    if (
      (e.setMaterial(0.5, 0, 0.5, 18),
      w(e, 16777215),
      l(e, a - 0.25, t.z0 + 0.08, a - 0.25, t.z1 - 0.08, 3.15, 4, r.uv(z(t.d))),
      e.setMaterial(0.7, 0.2, 0, 16),
      w(e, 2763306),
      e.quad(
        a - 0.25,
        3.15,
        t.z0 + 0.08,
        a - 0.25,
        3.15,
        t.z1 - 0.08,
        a,
        3.15,
        t.z1 - 0.08,
        a,
        3.15,
        t.z0 + 0.08,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      e.setMaterial(0.85, 0, 0, 0),
      w(e, 16777215),
      l(
        e,
        a,
        t.z0,
        a,
        t.z1,
        4,
        o,
        r.uv(`ut-upper-${Math.floor(c.next() * 3)}`),
      ),
      w(e, 9209982),
      l(e, a, t.z0, a, t.z0 + 0.2, 0, 3.15, i),
      l(e, a, t.z1 - 0.2, a, t.z1, 0, 3.15, i),
      l(e, a, t.z0 + 0.2, a, t.z1 - 0.2, 3.05, 3.15, i),
      c.next() < 0.45)
    ) {
      (e.setMaterial(0.6, 0, 0.3, P | 16), w(e, 16777215));
      let n = (t.z0 + t.z1) / 2 + (c.next() - 0.5) * 1.6;
      l(
        e,
        a - 0.03,
        n - 0.7,
        a - 0.03,
        n + 0.7,
        4.3,
        5,
        r.uv(`ut-pop-${Math.floor(c.next() * 3)}`),
      );
    }
  (e.setMaterial(0.6, 0.5, 0, 0), w(e, 16777215));
  for (let t of s)
    f(e, a - 0.18, 0, t.z0 - 0.12, a + 0.05, o, t.z0 + 0.12, r.uv(`ut-post`));
  for (let [, t] of D)
    f(e, a - 0.18, 0, t - 0.12, a + 0.05, o, t + 0.12, r.uv(`ut-post`));
  e.setMaterial(0.9, 0, 0, 0);
  for (let [t, n] of D)
    (w(e, 16777215),
      d(e, E.back, t, a, t, 0, o, r.uv(`ut-back`), 4),
      d(e, a, n, E.back, n, 0, o, r.uv(`ut-back`), 4),
      d(e, E.back, n, E.back, t, 0, o, r.uv(`ut-back`), 4.5));
}
