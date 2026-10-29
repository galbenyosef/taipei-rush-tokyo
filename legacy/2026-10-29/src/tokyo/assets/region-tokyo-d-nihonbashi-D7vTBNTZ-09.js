// tokyo/assets/region-tokyo-d-nihonbashi-D7vTBNTZ 09 — setinfo
// Lines 3509-3827 of readable/tokyo/assets/region-tokyo-d-nihonbashi-D7vTBNTZ.pretty.js (statement-aligned).
function un(e, t, n) {
  let r = e[U(220, 90, 232, 108)].sign;
  for (let e of Bt)
    (r.setTint(16777215).setInfo(0, 0, 0, 0),
      e.kind === `taisho`
        ? (V(
            r,
            e.x - 0.75,
            t,
            e.z - 0.75,
            e.x + 0.75,
            t + 0.4,
            e.z + 0.75,
            `granite`,
          ),
          V(
            r,
            e.x - 0.48,
            t + 0.4,
            e.z - 0.48,
            e.x + 0.48,
            t + 3,
            e.z + 0.48,
            `stonedark`,
          ),
          V(
            r,
            e.x - 0.6,
            t + 3,
            e.z - 0.6,
            e.x + 0.6,
            t + 3.3,
            e.z + 0.6,
            `granite`,
          ),
          V(
            r,
            e.x - 0.4,
            t + 3.3,
            e.z - 0.4,
            e.x + 0.4,
            t + 3.6,
            e.z + 0.4,
            `stonedark`,
          ),
          B(
            r,
            I(e.x + 0.485, e.z, Q / 2, 0.6),
            0,
            0,
            0.6,
            t + 0.9,
            t + 2.7,
            P(`pillar.kanji`, 2),
          ),
          B(
            r,
            I(e.x, e.z + 0.485, Q, 0.6),
            0,
            0,
            0.6,
            t + 0.9,
            t + 2.7,
            P(`pillar.kana`, 2),
          ),
          r.setInfo(0, 0, 0, 0),
          V(
            r,
            e.x - 0.08,
            t + 3.6,
            e.z - 0.08,
            e.x + 0.08,
            t + 4.3,
            e.z + 0.08,
            `bronze`,
          ),
          r.setInfo(0, 0, 200, 0),
          V(
            r,
            e.x - 0.28,
            t + 4.3,
            e.z - 0.28,
            e.x + 0.28,
            t + 4.95,
            e.z + 0.28,
            `warm`,
          ),
          r.setInfo(0, 0, 0, 0),
          V(
            r,
            e.x - 0.33,
            t + 4.95,
            e.z - 0.33,
            e.x + 0.33,
            t + 5.05,
            e.z + 0.33,
            `bronze`,
          ),
          n.push({
            x0: e.x - 0.75,
            z0: e.z - 0.75,
            x1: e.x + 0.75,
            z1: e.z + 0.75,
            h: t + 4,
          }))
        : (V(
            r,
            e.x - 0.42,
            t,
            e.z - 0.42,
            e.x + 0.42,
            t + 1.75,
            e.z + 0.42,
            `granite`,
          ),
          V(
            r,
            e.x - 0.48,
            t + 1.75,
            e.z - 0.48,
            e.x + 0.48,
            t + 1.9,
            e.z + 0.48,
            `stonedark`,
          ),
          Xt(r, e.x, t + 2.15, e.z, 0.36, 0.28, 0.36, `granite`),
          Xt(r, e.x, t + 2.48, e.z, 0.12, 0.2, 0.12, `granite`),
          B(
            r,
            I(e.x + 0.425, e.z, Q / 2, 0.5),
            0,
            0,
            0.5,
            t + 0.3,
            t + 1.6,
            P(`pillar.kanji`, 2),
          ),
          n.push({
            x0: e.x - 0.5,
            z0: e.z - 0.5,
            x1: e.x + 0.5,
            z1: e.z + 0.5,
            h: t + 2.4,
          })));
  for (let e of Vt)
    (r.setTint(16777215).setInfo(0, 0, 0, 0),
      V(r, e.x - 0.7, t, e.z - 0.45, e.x + 0.7, t + 0.3, e.z + 0.45, `granite`),
      V(
        r,
        e.x - 0.38,
        t + 0.3,
        e.z - 0.18,
        e.x + 0.38,
        t + 2.1,
        e.z + 0.18,
        `granite`,
      ),
      r.setInfo(0, 0, 20, 0),
      B(
        r,
        I(e.x + 0.385, e.z, e.heading, 0.6),
        0,
        0,
        0.6,
        t + 0.4,
        t + 2,
        P(e.cell, 2),
      ),
      n.push({
        x0: e.x - 0.7,
        z0: e.z - 0.45,
        x1: e.x + 0.7,
        z1: e.z + 0.45,
        h: t + 2.1,
      }));
  (r.setTint(16777215).setInfo(0, 0, 0, 0),
    V(r, 221.9, t - 0.08, 91.8, 231.2, t + 0.02, 108.2, `stonedark`),
    V(r, 221.9, t, 91.8, 231.2, t + 0.45, 92.4, `granite`),
    hn(r, 223.2, 100.4, t, 2.6, !1));
}
function dn(e, t, n) {
  for (let r of Ht) {
    let i = e[U(r.x - 3, r.z - 3, r.x + 3, r.z + 3)].sign,
      a = I(r.x, r.z, r.heading, 2.4);
    (i.setTint(16777215).setInfo(0, 0, 0, 0),
      H(i, a, 1.2, -2.3, 1.45, 2.6, t + 2.6, t + 2.85, `glass`),
      i.setInfo(0, 0, 150, 0),
      B(
        i,
        a,
        0.31,
        -0.25,
        2.65,
        t + 2.6,
        t + 2.6 + (72 / 256) * 2.9,
        P(`chikagai`, 2),
      ),
      i.setInfo(0, 0, 0, 0));
    for (let e of [-0.22, 2.62]) {
      (H(i, a, e, -2.3, 0.03, 2.55, t, t + 1.1, `glass`),
        H(i, a, e, -2.3, 0.04, 2.55, t + 1.1, t + 1.16, `steel`));
      for (let n of [0.25, -4.8])
        H(i, a, e, n, 0.05, 0.05, t, t + 2.6, `steel`);
    }
    (H(i, a, 1.2, -4.85, 1.45, 0.03, t, t + 1.1, `glass`),
      H(i, a, 1.2, -2.2, 1.15, 2.2, t - 0.02, t + 0.012, `black`));
    for (let e of [0.1, 2.3])
      H(i, a, e, -2.2, 0.03, 2.2, t + 0.9, t + 0.95, `steel`);
    let [o, s] = L(a, -0.3, 0.3),
      [c, l] = L(a, 2.7, -4.9),
      u = Math.min(o, c),
      d = Math.max(o, c),
      f = Math.min(s, l),
      p = Math.max(s, l),
      m = 0.12,
      h = t + 1.16;
    Math.abs(a.nx) > 0.5
      ? (n.push(
          { x0: u, z0: f, x1: d, z1: f + m, h },
          { x0: u, z0: p - m, x1: d, z1: p, h },
        ),
        n.push(
          a.nx > 0
            ? { x0: u, z0: f, x1: u + m, z1: p, h }
            : { x0: d - m, z0: f, x1: d, z1: p, h },
        ))
      : (n.push(
          { x0: u, z0: f, x1: u + m, z1: p, h },
          { x0: d - m, z0: f, x1: d, z1: p, h },
        ),
        n.push(
          a.nz > 0
            ? { x0: u, z0: f, x1: d, z1: f + m, h }
            : { x0: u, z0: p - m, x1: d, z1: p, h },
        ));
  }
}
function fn(e, t, n) {
  for (let r of Ut) {
    let i = e[U(r.x - 2, r.z - 2, r.x + 2, r.z + 2)].sign,
      a = 2.6,
      o = (80 / 320) * a,
      s = I(r.x, r.z, r.heading, a);
    i.setTint(16777215).setInfo(0, 0, 0, 0);
    for (let e of [0.15, 2.45])
      H(i, s, e, 0, 0.05, 0.05, t, t + 2.2 + o, `steel`);
    (i.setInfo(0, 0, 150, 0),
      B(i, s, 0.04, 0, a, t + 2.2, t + 2.2 + o, P(`busterm`, 2)),
      B(i, Jt(s), 0.04, 0, a, t + 2.2, t + 2.2 + o, P(`busterm`, 2)));
    let [c, l] = L(s, 0, 0),
      [u, d] = L(s, a, 0);
    n.push({
      x0: Math.min(c, u) - 0.08,
      z0: Math.min(l, d) - 0.08,
      x1: Math.max(c, u) + 0.08,
      z1: Math.max(l, d) + 0.08,
      h: t + 0.9,
    });
  }
}
function pn(e, t, n) {
  let r = Wt,
    i = e[U(r.x - 1, r.z - 1, r.x + 1, r.z + 1)].sign;
  (i.setTint(16777215).setInfo(0, 0, 0, 0),
    V(i, r.x - 0.9, t, r.z - 0.4, r.x + 0.9, t + 1.2, r.z + 0.4, `granite`),
    i.setInfo(0, 0, 25, 0),
    B(
      i,
      I(r.x, r.z - 0.405, 0, 1.4),
      0,
      0,
      1.4,
      t + 0.15,
      t + 0.15 + (96 / 128) * 1.4,
      P(`joosten`, 2),
    ),
    B(
      i,
      I(r.x, r.z + 0.405, Q, 1.4),
      0,
      0,
      1.4,
      t + 0.15,
      t + 0.15 + (96 / 128) * 1.4,
      P(`joosten`, 2),
    ),
    n.push({
      x0: r.x - 0.9,
      z0: r.z - 0.4,
      x1: r.x + 0.9,
      z1: r.z + 0.4,
      h: t + 1.2,
    }));
}
function mn(e, t) {
  for (let n of Gt) {
    let r = e[U(n.x - 1, n.z0, n.x + 1, n.z1)].sign;
    for (let e = n.z0; e <= n.z1; e += 2.6) {
      (r.setTint(16777215).setInfo(0, 0, 0, 0),
        V(
          r,
          n.x - 0.05,
          t + n.y + 0.75,
          e - 0.02,
          n.x + 0.75,
          t + n.y + 0.8,
          e + 0.02,
          `black`,
        ),
        r.setInfo(0, (e * 3) & 255, 120, 0));
      let i = I(n.x - 0.05, e, -Q / 2, 0.38);
      (B(r, i, 0, 0, 0.38, t + n.y, t + n.y + 0.72, P(`chochin`, 2)),
        B(r, Jt(i), 0, 0, 0.38, t + n.y, t + n.y + 0.72, P(`chochin`, 2)));
      let a = I(n.x - 0.05, e, 0, 0.38);
      (B(r, a, 0, 0, 0.38, t + n.y, t + n.y + 0.72, P(`chochin`, 2)),
        B(r, Jt(a), 0, 0, 0.38, t + n.y, t + n.y + 0.72, P(`chochin`, 2)));
    }
  }
}
