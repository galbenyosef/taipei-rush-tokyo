// tokyo__assets__region-tokyo-d-ameyoko-MDbcAvKx 04 — need
// Lines 841-1124 of readable/tokyo__assets__region-tokyo-d-ameyoko-MDbcAvKx.pretty.js (statement-aligned).
function de(e, t) {
  t.uniques.push({
    name: `undertrack-row`,
    write: (t) => ue(t, e),
    cx: E.face,
    cz: (D[0][0] + D[1][1]) / 2,
    range: 600,
  });
  let n = E.face,
    r = 0;
  for (let e of H()) {
    let i = (e.z0 + e.z1) / 2,
      [a, o] = e.d.hours,
      s = (e) => e.h >= a && e.h < o;
    if (
      (t.instances.push({
        model: `ut-open-${e.d.look}`,
        x: n,
        y: 0.15,
        z: i,
        fx: -1,
        fz: 0,
        range: 220,
        when: s,
      }),
      t.instances.push({
        model: `ut-shutter-${e.d.look}`,
        x: n,
        y: 0.15,
        z: i,
        fx: -1,
        fz: 0,
        range: 220,
        when: (e) => !s(e),
      }),
      e.d.lanterns)
    )
      for (let e of [-1.3, 1.3])
        t.instances.push({
          model: `chochin`,
          x: n - 0.45,
          y: 3.1,
          z: i + e,
          fx: -1,
          fz: 0,
          range: 160,
        });
    (t.instances.push({
      model: `ut-ye-${+(r % 3 == 2)}`,
      x: n - 0.4,
      y: 3.12,
      z: e.z0 + 0.6,
      fx: -1,
      fz: 0,
      range: 180,
      when: (e) => e.yearEnd,
    }),
      r++);
  }
  for (let [e, r] of D)
    t.boxes.push({
      minX: n,
      minZ: e,
      maxX: E.back,
      maxZ: r,
      y0: 0,
      y1: E.soffit,
    });
}
var U = 3;
function fe(e) {
  for (let t of [`a`, `me`, `yoko`]) e.need(`sign-${t}`, 96, 96, pe(t));
  (e.need(`sign-clock`, 96, 96, me),
    e.need(`sign-banner`, 512, 48, (e, t, n, r, i) => {
      (b(e, t, n, r, i, `#ffffff`, 0.55),
        h(
          e,
          v(`ameyoko.sign.banner`),
          t + r / 2,
          n + i * 0.52,
          r * 0.9,
          i * 0.7,
          `#1d4e9e`,
          `900`,
        ));
    }),
    e.need(`granite`, 128, 128, (e, t, n, r, i) => {
      y(e, t, n, r, i, `#9b9a96`);
      for (let a = 0; a < 4; a++)
        for (let o = 0; o < 4; o++)
          y(
            e,
            t + (a * r) / 4 + 1,
            n + (o * i) / 4 + 1,
            r / 4 - 2,
            i / 4 - 2,
            [`#a7a6a1`, `#9f9e99`, `#ababa5`, `#a2a19c`][(a + o * 3) % 4],
          );
      g(e, 71, t, n, r, i, 260, 1.4, [`#7a7a76`, `#c6c5c0`, `#8a8986`], 0.4);
    }),
    e.need(`bamboo`, 128, 64, (e, t, n, r, i) => {
      y(e, t, n, r, i, `#e8e0c8`);
      for (let a = 0; a < 10; a++)
        y(
          e,
          t + r * (0.05 + a * 0.095),
          n,
          r * 0.035,
          i,
          [`#5a8a3a`, `#6e9a46`, `#4a7a32`][a % 3],
        );
      for (let a = 1; a < 4; a++) y(e, t, n + (i * a) / 4, r, 1.5, `#3e5e2a`);
    }),
    e.need(`panda-sign`, 256, 128, he),
    e.need(`panda-plate`, 96, 48, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#2a2a2a`),
        h(
          e,
          v(`ameyoko.panda.teppanda`),
          t + r / 2,
          n + i * 0.35,
          r * 0.8,
          i * 0.36,
          `#e8d8a0`,
          `900`,
        ),
        h(
          e,
          v(`ameyoko.panda.plate`),
          t + r / 2,
          n + i * 0.75,
          r * 0.9,
          i * 0.22,
          `#e8d8a0`,
          `700`,
        ));
    }),
    e.need(`iron`, 64, 64, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#3a3a3c`),
        g(e, 15, t, n, r, i, 120, 2, [`#2a2a2c`, `#5a5a5e`, `#6a4a3a`], 0.4));
    }),
    e.need(`iron-face`, 64, 64, (e, t, n, r, i) => {
      (y(e, t, n, r, i, `#4a4a4e`),
        p(e, t + r / 2, n + i * 0.3, r * 0.22, `#b8a888`),
        p(e, t + r * 0.32, n + i * 0.55, r * 0.12, `#1a1a1c`),
        p(e, t + r * 0.68, n + i * 0.55, r * 0.12, `#1a1a1c`));
    }));
  for (let t of [0, 1]) e.need(`jewel-flag-${t}`, 64, 192, ge(t));
  e.need(`kaitori`, 96, 128, (e, t, n, r, i) => {
    (y(e, t, n, r, i, `#1a1a1a`),
      y(e, t + r * 0.06, n + i * 0.04, r * 0.88, i * 0.3, `#d4a82a`),
      o(
        e,
        v(`ameyoko.jewel.kaitori`),
        t + r / 2,
        n + i * 0.38,
        n + i * 0.96,
        r * 0.42,
        `#f0d060`,
        void 0,
        `900`,
      ),
      h(e, `¥`, t + r / 2, n + i * 0.19, r * 0.5, i * 0.22, `#1a1a1a`, `900`));
  });
}
function pe(e) {
  return (t, n, r, i, a) => {
    (b(t, n, r, i, a, `#ffffff`, 0.6),
      (t.strokeStyle = `#d0d0d0`),
      (t.lineWidth = 3),
      t.beginPath(),
      t.arc(n + i / 2, r + a / 2, i * 0.46, 0, Math.PI * 2),
      t.stroke(),
      h(
        t,
        v(`ameyoko.sign.${e}`),
        n + i / 2,
        r + a / 2,
        i * 0.7,
        a * 0.7,
        `#d81818`,
        `900`,
      ));
  };
}
function me(e, t, n, r, i) {
  (y(e, t, n, r, i, `#1d5aa8`),
    p(e, t + r / 2, n + i / 2, r * 0.4, `#ffffff`),
    (e.fillStyle = `#1a1a1a`));
  for (let a = 0; a < 12; a++) {
    let o = (a / 12) * Math.PI * 2;
    e.fillRect(
      t + r / 2 + Math.cos(o) * r * 0.34 - 1.5,
      n + i / 2 + Math.sin(o) * i * 0.34 - 1.5,
      3,
      3,
    );
  }
  ((e.strokeStyle = `#1a1a1a`),
    (e.lineWidth = 3),
    e.beginPath(),
    e.moveTo(t + r / 2, n + i / 2),
    e.lineTo(t + r * 0.38, n + i * 0.36),
    e.moveTo(t + r / 2, n + i / 2),
    e.lineTo(t + r * 0.66, n + i * 0.34),
    e.stroke());
}
function he(e, t, n, r, i) {
  (y(e, t, n, r, i, `#ffffff`),
    y(e, t, n, r, i * 0.08, `#2e8a3a`),
    y(e, t, n + i * 0.92, r, i * 0.08, `#2e8a3a`),
    m(e, t + r * 0.16, n + i * 0.48, i * 0.26),
    h(
      e,
      v(`ameyoko.panda.hiroba`),
      t + r * 0.63,
      n + i * 0.4,
      r * 0.6,
      i * 0.24,
      `#1a1a1a`,
      `900`,
    ),
    h(
      e,
      v(`ameyoko.panda.michi`),
      t + r * 0.63,
      n + i * 0.72,
      r * 0.6,
      i * 0.14,
      `#2e8a3a`,
      `700`,
    ));
}
function ge(e) {
  return (t, n, r, i, a) => {
    (b(t, n, r, i, a, e ? `#1a2a5a` : `#ffffff`, 0.6),
      y(t, n, r, i, a * 0.05, `#c8a040`),
      y(t, n, r + a * 0.95, i, a * 0.05, `#c8a040`),
      (t.fillStyle = e ? `#a8d8f8` : `#4a7ad0`),
      t.beginPath(),
      t.moveTo(n + i * 0.3, r + a * 0.1),
      t.lineTo(n + i * 0.7, r + a * 0.1),
      t.lineTo(n + i * 0.82, r + a * 0.15),
      t.lineTo(n + i * 0.5, r + a * 0.24),
      t.lineTo(n + i * 0.18, r + a * 0.15),
      t.fill(),
      o(
        t,
        v(`ameyoko.jewel.town`),
        n + i * 0.42,
        r + a * 0.28,
        r + a * 0.92,
        i * 0.5,
        e ? `#ffffff` : `#1a2a5a`,
        void 0,
        `900`,
      ),
      t.save(),
      t.translate(n + i * 0.84, r + a * 0.6),
      t.rotate(Math.PI / 2),
      h(t, v(`ameyoko.jewel.latin`), 0, 0, a * 0.6, i * 0.16, `#c8a040`, `800`),
      t.restore());
  };
}
function W(e, t, n, r, i, a, o, s = 14) {
  let c = e.vertex(t, n, r, 0, 0, o, (a.u0 + a.u1) / 2, (a.v0 + a.v1) / 2);
  for (let c = 0; c <= s; c++) {
    let l = (c / s) * Math.PI * 2,
      u = Math.cos(l),
      d = Math.sin(l);
    e.vertex(
      t + u * i,
      n + d * i,
      r,
      0,
      0,
      o,
      a.u0 + (a.u1 - a.u0) * (0.5 + o * u * 0.5),
      a.v0 + (a.v1 - a.v0) * (0.5 + d * 0.5),
    );
  }
  for (let t = 0; t < s; t++)
    o > 0 ? e.tri(c, c + 1 + t, c + 2 + t) : e.tri(c, c + 2 + t, c + 1 + t);
}
