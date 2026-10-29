// tokyo/assets/region-tokyo-d-ueno-CufCWRy0 10 — setmaterial
// Lines 2906-3225 of readable/tokyo/assets/region-tokyo-d-ueno-CufCWRy0.pretty.js (statement-aligned).
function jt(e, t, n, r, i) {
  F(e, t, n, r, i, `#f7c6d6`, 0.62);
  for (let a = 0; a < 12; a++)
    L(
      e,
      t + r * (0.03 + a * 0.085),
      n + i * (a % 2 ? 0.2 : 0.8),
      i * 0.12,
      `#ffffff`,
    );
  P(
    e,
    N(`ueno.sakura.matsuri`),
    t + r * 0.5,
    n + i * 0.52,
    r * 0.6,
    i * 0.62,
    `#c0285a`,
    `900`,
  );
}
function Mt(e, t, n, r, i) {
  (F(e, t, n, r, i, `#f4f1e8`, 0.55),
    P(
      e,
      N(`ueno.zoo.name`),
      t + r * 0.42,
      n + i * 0.4,
      r * 0.5,
      i * 0.48,
      `#2a5a2a`,
      `900`,
    ),
    P(
      e,
      N(`ueno.zoo.latin`),
      t + r * 0.42,
      n + i * 0.8,
      r * 0.3,
      i * 0.2,
      `#2a5a2a`,
      `800`,
    ),
    (e.fillStyle = `#2a5a2a`),
    (e.globalAlpha = 1));
  let a = t + r * 0.76;
  (e.fillRect(a, n + i * 0.3, r * 0.012, i * 0.5),
    e.fillRect(a - r * 0.02, n + i * 0.6, r * 0.04, i * 0.14),
    L(e, a + r * 0.01, n + i * 0.28, r * 0.014, `#2a5a2a`),
    L(e, t + r * 0.85, n + i * 0.62, r * 0.035, `#2a5a2a`, i * 0.18),
    e.fillRect(t + r * 0.82, n + i * 0.62, r * 0.012, i * 0.2),
    L(e, t + r * 0.94, n + i * 0.5, r * 0.018, `#2a5a2a`, i * 0.12),
    e.fillRect(t + r * 0.945, n + i * 0.55, r * 0.006, i * 0.28),
    e.beginPath(),
    e.moveTo(t + r * 0.95, n + i * 0.42),
    e.lineTo(t + r * 0.985, n + i * 0.47),
    e.lineTo(t + r * 0.95, n + i * 0.5),
    e.fill());
}
function Nt(e) {
  return (t, n, r, i, a) => {
    e === 0
      ? (I(t, n, r, i, a, `#dfe7ea`),
        I(t, n + i * 0.2, r + a * 0.32, i * 0.6, a * 0.36, `#7f8f9a`),
        L(t, n + i * 0.5, r + a * 0.28, i * 0.24, `#8e9ea8`),
        (t.fillStyle = `#c8b68a`),
        t.beginPath(),
        t.moveTo(n + i * 0.42, r + a * 0.3),
        t.lineTo(n + i * 0.85, r + a * 0.36),
        t.lineTo(n + i * 0.42, r + a * 0.4),
        t.fill(),
        L(t, n + i * 0.45, r + a * 0.25, i * 0.04, `#f4e8a0`),
        L(t, n + i * 0.45, r + a * 0.25, i * 0.018, `#1a1a1a`),
        I(t, n + i * 0.38, r + a * 0.68, i * 0.04, a * 0.14, `#5a5a5a`),
        I(t, n + i * 0.56, r + a * 0.68, i * 0.04, a * 0.14, `#5a5a5a`),
        _(
          t,
          N(`ueno.zoo.hashibiro`),
          n + i * 0.2,
          r + a * 0.05,
          r + a * 0.95,
          i * 0.22,
          `#1a3a5a`,
          void 0,
          `900`,
        ))
      : (I(t, n, r, i, a, `#ffffff`),
        me(t, n + i * 0.5, r + a * 0.22, i * 0.26),
        me(t, n + i * 0.5, r + a * 0.5, i * 0.22),
        _(
          t,
          N(`ueno.zoo.arigato`),
          n + i * 0.5,
          r + a * 0.66,
          r + a * 0.98,
          i * 0.3,
          `#c0285a`,
          void 0,
          `900`,
        ));
  };
}
function Pt(e, t, n, r, i) {
  (I(e, t, n, r, i, `#2a5a2a`),
    P(
      e,
      N(`ueno.zoo.omotemon`),
      t + r / 2,
      n + i * 0.2,
      r * 0.4,
      i * 0.22,
      `#ffffff`,
      `900`,
    ),
    P(
      e,
      N(`ueno.zoo.hours`),
      t + r / 2,
      n + i * 0.55,
      r * 0.9,
      i * 0.14,
      `#ffffff`,
      `700`,
    ),
    P(
      e,
      N(`ueno.zoo.price`),
      t + r / 2,
      n + i * 0.8,
      r * 0.92,
      i * 0.1,
      `#ffffff`,
      `600`,
    ));
}
function Ft(e, t, n, r, i) {
  (I(e, t, n, r, i, `#e8e2d2`),
    F(e, t + r * 0.12, n + i * 0.25, r * 0.76, i * 0.42, `#d8ccb0`, 0.55),
    I(e, t + r * 0.12, n + i * 0.62, r * 0.76, i * 0.06, `#6a5a42`),
    I(e, t, n, r, i * 0.18, `#2a5a2a`),
    P(
      e,
      N(`ueno.zoo.ticket`),
      t + r / 2,
      n + i * 0.09,
      r * 0.7,
      i * 0.12,
      `#ffffff`,
      `800`,
    ),
    I(e, t, n + i * 0.82, r, i * 0.18, `#7a6a52`));
}
function It(e, t, n, r, i) {
  (I(e, t, n, r, i, `#3a3a36`), (e.strokeStyle = `#8a8a82`), (e.lineWidth = 3));
  for (let a = -8; a < 24; a++)
    (e.beginPath(),
      e.moveTo(t + (a * r) / 16, n),
      e.lineTo(t + ((a + 6) * r) / 16, n + i),
      e.moveTo(t + ((a + 6) * r) / 16, n),
      e.lineTo(t + (a * r) / 16, n + i),
      e.stroke());
  (I(e, t + r * 0.35, n + i * 0.35, r * 0.3, i * 0.3, `#f4f4f0`),
    P(
      e,
      N(`ueno.zoo.closed`),
      t + r / 2,
      n + i * 0.5,
      r * 0.26,
      i * 0.18,
      `#c01818`,
      `900`,
    ));
}
function Lt(e, t, n, r, i) {
  (I(e, t, n, r, i, `#d62020`),
    I(e, t + r * 0.2, n + i * 0.18, r * 0.6, i * 0.08, `#202020`),
    P(e, `〒`, t + r / 2, n + i * 0.42, r * 0.4, i * 0.16, `#ffffff`, `900`),
    P(
      e,
      N(`ueno.post.yubin`),
      t + r / 2,
      n + i * 0.6,
      r * 0.5,
      i * 0.12,
      `#ffffff`,
      `800`,
    ),
    I(e, t + r * 0.2, n + i * 0.72, r * 0.6, i * 0.14, `#f4f4f0`));
}
var Rt = (e) => {
  let t = [];
  for (let n = 0; n < Ot; n++)
    t.push({
      name: `bonbori-${n}`,
      write: (t) => {
        let r = e.white();
        (t.setMaterial(0.9, 0, 0, 0),
          E(t, 6966836),
          O(t, -0.045, 0, -0.045, 0.045, 2.95, 0.045, r),
          E(t, 2763306),
          O(t, -0.2, 2.93, -0.2, 0.2, 2.98, 0.2, r),
          t.setMaterial(0.8, 0, 0.55, Dt),
          E(t, 16777215),
          k(
            t,
            0,
            0,
            2.98,
            3.62,
            0.17,
            0.17,
            0,
            1,
            e.uv(`bonbori-${n}`),
            e.uv(`bonbori-${n}`),
            e.uv(`bonbori-${(n + 3) % Ot}`),
            !1,
          ),
          t.setMaterial(0.8, 0, 0, 0),
          E(t, 12068904),
          O(t, -0.2, 3.62, -0.2, 0.2, 3.7, 0.2, r));
      },
    });
  return (
    t.push({
      name: `sakura-gate`,
      write: (t) => {
        let n = e.white();
        (t.setMaterial(0.8, 0, 0, 0), E(t, 11841704));
        for (let e of [-5.8, 5.8]) A(t, e, 0, 0, 4.9, 0.08, n, 6);
        (M(t, -5.8, 4.8, 0, 5.8, 4.8, 0, 0.04, n),
          t.setMaterial(0.7, 0, 0.35, Dt),
          E(t, 16777215),
          k(
            t,
            0,
            0,
            3.75,
            4.75,
            4.2,
            0.02,
            0,
            1,
            n,
            e.uv(`sakura-banner`),
            e.uv(`sakura-banner`),
          ));
      },
    }),
    t.push({
      name: `panda-post`,
      write: (t) => {
        let n = e.white();
        (t.setMaterial(0.5, 0.1, 0, 0),
          E(t, 6974054),
          O(t, -0.3, 0, -0.3, 0.3, 0.12, 0.3, n),
          E(t, 16777215),
          A(t, 0, 0, 0.12, 1.3, 0.22, e.uv(`post-front`), 10),
          E(t, 13114396),
          re(t, 0, 1.3, 0, 0.26, n, 10),
          A(t, 0, 0, 1.3, 1.36, 0.26, n, 10, !0),
          t.setMaterial(0.7, 0, 0, 0),
          E(t, 16052972),
          j(t, 0, 1.6, 0, 0.2, 0.24, 0.18, n, 4, 8),
          j(t, 0, 1.98, 0.02, 0.17, 0.15, 0.16, n, 4, 8),
          E(t, 1973790));
        for (let e of [-1, 1])
          (j(t, e * 0.12, 1.42, 0.1, 0.08, 0.07, 0.11, n, 3, 6),
            j(t, e * 0.17, 1.66, 0.06, 0.06, 0.12, 0.06, n, 3, 6),
            j(t, e * 0.12, 2.11, 0, 0.055, 0.055, 0.04, n, 3, 6),
            j(t, e * 0.065, 2, 0.15, 0.045, 0.055, 0.02, n, 3, 6));
        j(t, 0, 1.94, 0.17, 0.025, 0.018, 0.015, n, 2, 5);
      },
    }),
    t.push({
      name: `heaven-pitch`,
      write: (t) => {
        let n = e.white();
        (t.setMaterial(0.8, 0, 0, 0),
          E(t, 4864554),
          M(t, -0.3, 0, -0.25, 0, 1.35, 0, 0.02, n),
          M(t, 0.3, 0, -0.25, 0, 1.35, 0, 0.02, n),
          M(t, 0, 0, -0.5, 0, 1.35, 0, 0.02, n),
          E(t, 16777215),
          t.setMaterial(0.7, 0, 0.1, 1),
          D(t, -0.36, 0.03, 0.36, 0.03, 0.55, 1.5, e.uv(`heaven-board`)),
          t.setMaterial(0.7, 0.1, 0, 0),
          E(t, 8006174),
          O(t, 0.6, 0, -0.3, 1.3, 0.45, 0.1, n),
          E(t, 2763306),
          A(t, -0.8, 0.5, 0, 0.12, 0.17, n, 8));
      },
    }),
    t.push({
      name: `pigeon`,
      write: (t) => {
        let n = e.uv(`pigeon`),
          r = e.white();
        (t.setMaterial(0.8, 0, 0, 0),
          E(t, 16777215),
          j(t, 0, 0.13, 0, 0.07, 0.065, 0.12, n, 3, 6),
          j(t, 0, 0.12, 0.13, 0.04, 0.04, 0.045, n, 3, 5),
          E(t, 5922406),
          O(t, -0.035, 0.1, -0.2, 0.035, 0.13, -0.09, r),
          E(t, 14183002),
          O(t, -0.01, 0, -0.01, 0.01, 0.07, 0.01, r));
      },
    }),
    t.push({
      name: `zoo-gate-shut`,
      write: (t) => {
        (t.setMaterial(0.6, 0.5, 0, 0),
          E(t, 16777215),
          D(t, -7, 0, 7, 0, 0, 2.6, e.uv(`zoo-gate`)),
          D(t, 7, -0.08, -7, -0.08, 0, 2.6, e.uv(`zoo-gate`)));
      },
    }),
    t
  );
};
