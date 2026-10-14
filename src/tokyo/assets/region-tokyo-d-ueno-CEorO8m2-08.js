// tokyo/assets/region-tokyo-d-ueno-CEorO8m2 08 — math
// Lines 2223-2564 of readable/tokyo/assets/region-tokyo-d-ueno-CEorO8m2.pretty.js (statement-aligned).
function gt(e, t, n, r, i) {
  (I(e, t, n, r, i, `#4a3a2a`),
    I(e, t + 4, n + 4, r - 8, i - 8, `#f0e8d4`),
    P(
      e,
      N(`ueno.matsu.name`),
      t + r / 2,
      n + i * 0.2,
      r * 0.6,
      i * 0.16,
      `#2a2a2a`,
      `900`,
    ),
    (e.strokeStyle = `#3a5a32`),
    (e.lineWidth = 3),
    e.beginPath(),
    e.arc(t + r / 2, n + i * 0.5, r * 0.14, 0, Math.PI * 2),
    e.stroke(),
    I(e, t + r * 0.2, n + i * 0.6, r * 0.6, i * 0.04, `#6a9ac0`),
    de(
      e,
      N(`ueno.matsu.text`),
      t + r * 0.08,
      n + i * 0.8,
      r * 0.84,
      i * 0.07,
      `#2a2a2a`,
      `600`,
    ));
}
function _t(e, t, n, r, i, a, o, s, c = 0.08) {
  let l = Math.cos(a),
    u = Math.sin(a),
    d = Math.cos(o),
    f = Math.sin(o),
    p = (e, i, a) => {
      let o = i * l - a * u,
        s = i * u + a * l,
        c = e * d - o * f,
        p = e * f + o * d;
      return [t + c, n + p, r + s];
    },
    [m, h, g] = p(0, -c * i, 0),
    _ = p(0, 1, 0),
    v = _[0] - t,
    y = _[1] - n,
    b = _[2] - r,
    x = e.vertex(m, h, g, v, y, b, (s.u0 + s.u1) / 2, (s.v0 + s.v1) / 2);
  for (let t = 0; t <= 6; t++) {
    let n = (t / 6) * Math.PI * 2,
      r = Math.cos(n),
      a = Math.sin(n),
      o = p(r * i, 0, a * i);
    e.vertex(
      o[0],
      o[1],
      o[2],
      v,
      y,
      b,
      s.u0 + (s.u1 - s.u0) * (0.5 + r * 0.5),
      s.v0 + (s.v1 - s.v0) * (0.5 + a * 0.5),
    );
  }
  for (let t = 0; t < 6; t++) e.tri(x, x + 2 + t, x + 1 + t);
}
function vt(e, t, n, r, i, a, o, s, c) {
  let l = [0, 2.094, 4.189].map((e) => [Math.cos(e) * s, Math.sin(e) * s]);
  for (let s = 0; s < 3; s++) {
    let [u, d] = l[s],
      [f, p] = l[(s + 1) % 3];
    e.quad(
      t + f,
      n,
      r + p,
      t + u,
      n,
      r + d,
      i + u,
      a,
      o + d,
      i + f,
      a,
      o + p,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
    );
  }
}
function yt(e, t, n, r, i) {
  let o = new a(s(`ueno-lotus`, r, n === `green` ? 0 : n === `brown` ? 1 : 2)),
    c = t.white(),
    l = n === `dead` ? 4 : 13 + (r % 3) * 2,
    u = n === `green` ? 1 : n === `brown` ? 4 : 2,
    d = t.uv(
      n === `green` ? `leaf-green` : n === `brown` ? `leaf-brown` : `leaf-dead`,
    ),
    f = n === `green` ? 5929530 : n === `brown` ? 8022586 : 4865580;
  if (i) {
    e.setMaterial(0.6, 0, 0.05, 0);
    for (let n = 0; n < 4; n++) {
      let n = o.next() * Math.PI * 2,
        r = o.next() * 1.8,
        i = 1.1 + o.next() * 0.6,
        a = Math.cos(n) * r,
        s = Math.sin(n) * r;
      (E(e, f),
        vt(e, a, 0, s, a, i, s, 0.012, c),
        E(e, 16777215),
        j(e, a, i + 0.1, s, 0.09, 0.13, 0.09, t.uv(`petal`), 3, 6));
    }
    return;
  }
  for (let t = 0; t < l; t++) {
    let r = o.next() * Math.PI * 2,
      i = Math.sqrt(o.next()) * 2.4,
      a = Math.cos(r) * i,
      s = Math.sin(r) * i,
      l,
      u,
      p,
      m;
    if (n === `green`)
      ((l = 0.35 + o.next() * 0.9),
        (u = (o.next() - 0.5) * 0.6),
        (p = (o.next() - 0.5) * 0.6),
        (m = 0.32 + o.next() * 0.24));
    else if (n === `brown`) {
      let e = o.next() < 0.35;
      ((l = e ? 0.12 + o.next() * 0.25 : 0.3 + o.next() * 0.7),
        (u = (o.next() - 0.5) * (e ? 2.4 : 1.1)),
        (p = (o.next() - 0.5) * (e ? 2.4 : 1.1)),
        (m = 0.3 + o.next() * 0.22));
    } else
      ((l = 0.08 + o.next() * 0.2),
        (u = (o.next() - 0.5) * 2.4),
        (p = (o.next() - 0.5) * 2.4),
        (m = 0.15 + o.next() * 0.12));
    (e.setMaterial(0.85, 0, 0, 0),
      E(e, f),
      vt(e, a, 0, s, a + p * 0.1, l, s - u * 0.1, 0.011, c),
      E(
        e,
        n === `brown`
          ? [16777215, 14213280, 13154448, 16777215][t % 4]
          : 16777215,
      ),
      e.setMaterial(n === `green` ? 0.55 : 0.9, 0, 0, 0),
      _t(
        e,
        a + p * 0.1,
        l,
        s - u * 0.1,
        m,
        u,
        p,
        d,
        n === `green` ? 0.12 : 0.05,
      ));
  }
  for (let r = 0; r < u; r++) {
    let r = o.next() * Math.PI * 2,
      i = Math.sqrt(o.next()) * 1.8,
      a = Math.cos(r) * i,
      s = Math.sin(r) * i,
      l = n === `dead` ? 0.6 + o.next() * 0.5 : 0.9 + o.next() * 0.7,
      u = n === `dead` ? 0.35 : 0.08,
      d = a + (o.next() - 0.5) * u,
      p = s + (o.next() - 0.5) * u;
    if ((e.setMaterial(0.9, 0, 0, 0), E(e, f), n === `dead`)) {
      (vt(e, a, 0, s, a, l * 0.6, s, 0.011, c),
        vt(e, a, l * 0.6, s, d, l * 0.45, p, 0.011, c));
      continue;
    }
    (vt(e, a, 0, s, d, l, p, 0.012, c),
      E(e, n === `green` ? 11581546 : 11573864));
    let m = t.uv(`pod`),
      h = 0.03,
      g = 0.09,
      _ = e.n;
    for (let t = 0; t <= 5; t++) {
      let n = (t / 5) * Math.PI * 2,
        r = Math.cos(n),
        i = Math.sin(n);
      (e.vertex(d + r * h, l, p + i * h, r, -0.5, i, m.u0, m.v0),
        e.vertex(d + r * g, l + 0.08, p + i * g, r, -0.5, i, m.u1, m.v0));
    }
    for (let t = 0; t < 5; t++) {
      let n = _ + t * 2;
      e.tri(n, n + 2, n + 1).tri(n + 1, n + 2, n + 3);
    }
    let v = e.vertex(
      d,
      l + 0.08,
      p,
      0,
      1,
      0,
      (m.u0 + m.u1) / 2,
      (m.v0 + m.v1) / 2,
    );
    for (let t = 0; t <= 5; t++) {
      let n = (t / 5) * Math.PI * 2;
      e.vertex(
        d + Math.cos(n) * g,
        l + 0.08,
        p + Math.sin(n) * g,
        0,
        1,
        0,
        m.u0 + (m.u1 - m.u0) * (0.5 + Math.cos(n) * 0.5),
        m.v0 + (m.v1 - m.v0) * (0.5 + Math.sin(n) * 0.5),
      );
    }
    for (let t = 0; t < 5; t++) e.tri(v, v + 2 + t, v + 1 + t);
  }
}
function bt(e) {
  return e.lotus >= 0.6 && e.lotusDead < 0.2
    ? `green`
    : e.m >= 9 && e.m <= 11 && e.lotusDead < 0.75
      ? `brown`
      : e.lotusDead >= 0.5
        ? `dead`
        : e.lotus > 0.15
          ? `green`
          : null;
}
var xt = (e) => {
  let t = [];
  for (let n of [`green`, `brown`, `dead`])
    for (let r = 0; r < 4; r++)
      t.push({ name: `lotus-${n}-${r}`, write: (t) => yt(t, e, n, r, !1) });
  for (let n = 0; n < 2; n++)
    t.push({
      name: `lotus-bloom-${n}`,
      write: (t) => yt(t, e, `green`, n, !0),
    });
  return (
    t.push({
      name: `boat-board`,
      write: (t) => {
        (t.setMaterial(0.6, 0.3, 0, 0), E(t, 3826352));
        for (let n of [-0.62, 0.62])
          O(t, n - 0.04, 0, -0.04, n + 0.04, 1.75, 0.04, e.white());
        (t.setMaterial(0.6, 0, 0.12, 1),
          E(t, 16777215),
          k(
            t,
            0,
            0,
            0.7,
            1.7,
            0.66,
            0.025,
            0,
            1,
            e.white(),
            e.uv(`boat-board`),
            e.uv(`boat-board`),
          ));
      },
    }),
    t.push({
      name: `hasu-board`,
      write: (t) => {
        (t.setMaterial(0.6, 0.3, 0, 0), E(t, 4868678));
        for (let n of [-0.75, 0.75])
          O(t, n - 0.04, 0, -0.04, n + 0.04, 1.4, 0.04, e.white());
        (t.setMaterial(0.7, 0, 0.1, 1),
          E(t, 16777215),
          k(
            t,
            0,
            0,
            0.5,
            1.5,
            0.8,
            0.025,
            0,
            1,
            e.white(),
            e.uv(`hasu-board`),
            e.uv(`hasu-board`),
          ));
      },
    }),
    t
  );
};
function St(e, t, n) {
  let r = t.white(),
    { x0: i, x1: a, z0: o, z1: s } = W,
    c = 0.32;
  (e.setMaterial(0.85, 0, 0, 0), E(e, 16777215));
  for (let n = o; n < s - 0.01; n += 3)
    ne(e, i, n, a, Math.min(s, n + 3), c, t.uv(`deck-wood`));
  (E(e, 11052186),
    D(e, a, s, a, o, n - 0.3, c, r),
    D(e, a, o, i, o, n - 0.3, c, r),
    D(e, i, s, a, s, n - 0.3, c, r),
    E(e, 15921902),
    e.setMaterial(0.5, 0, 0, 0));
  for (let t = o + 1; t < s; t += 2)
    O(e, a, n + 0.1, t - 0.35, a + 0.16, 0.27, t + 0.35, r);
  E(e, 4868682);
  for (let t of [o + 0.6, s - 0.6])
    A(e, a - 0.4, t, c, 0.8700000000000001, 0.12, r, 6, !0);
}
function Ct(e, t) {
  let n = t.white(),
    { x0: r, x1: i, z0: a, z1: o } = G,
    s = 0.15;
  (e.setMaterial(0.8, 0, 0, 0),
    E(e, 15921386),
    D(e, i, a, r, a, s, 2.85, n),
    D(e, r, o, i, o, s, 2.85, n),
    D(e, r, a, r, o, s, 2.85, n),
    e.setMaterial(0.5, 0, 0.35, 3),
    E(e, 16777215),
    D(e, i, o, i, a, s, 2.85, t.uv(`kiosk-front`)),
    e.setMaterial(0.8, 0, 0, 0),
    E(e, 3826352),
    O(e, r - 0.3, 2.85, a - 0.4, i + 1.1, 2.85 + 0.22, o + 0.4, n),
    e.setMaterial(0.5, 0, 0.5, 2),
    E(e, 16777215),
    D(
      e,
      i + 1.12,
      o + 0.3,
      i + 1.12,
      a - 0.3,
      2.85 + 0.22,
      3.85,
      t.uv(`boat-sign`),
    ),
    E(e, 3826352),
    e.setMaterial(0.8, 0, 0, 0),
    D(e, i + 1.08, a - 0.3, i + 1.08, o + 0.3, 2.85 + 0.22, 3.85, n));
}
