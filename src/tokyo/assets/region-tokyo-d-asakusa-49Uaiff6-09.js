// tokyo/assets/region-tokyo-d-asakusa-49Uaiff6 09 — rise
// Lines 2332-2630 of readable/tokyo/assets/region-tokyo-d-asakusa-49Uaiff6.pretty.js (statement-aligned).
var Y = [
    { h: 5.9, rise: 0.9, ridge: 0.5 },
    { h: 4.1, rise: 1.9, ridge: 0.38 },
    { h: 4.1, rise: 1.2, ridge: 0.62 },
    { h: 4.3, rise: 2.1, ridge: 0.47 },
    { h: 3.9, rise: 1.4, ridge: 0.3 },
    { h: 4.6, rise: 1.7, ridge: 0.58 },
    { h: 4.1, rise: 1.2, ridge: 0.44 },
    { h: 5.2, rise: 2.6, ridge: 0.52 },
  ],
  yt = 0.5,
  X = 0.14,
  Z = 0.2;
function bt(e) {
  (e.need(`bunka:slats`, 512, 224, Je),
    e.need(`bunka:lobby`, 512, 192, Ye),
    e.need(`bunka:sign`, 512, 96, Xe),
    e.need(`bunka:plate`, 160, 128, Ze));
}
function xt(e, t, n) {
  if (e < 0) return n[0];
  let r = Y[e],
    i = k,
    a = i.x0 + (i.x1 - i.x0) * r.ridge,
    o = t <= a ? (t - i.x0) / (a - i.x0 || 1) : (i.x1 - t) / (i.x1 - a || 1);
  return n[e + 1] + r.rise * Math.max(0, Math.min(1, o));
}
function St(e, t, n) {
  let r = k,
    i = t.white(),
    a = t.uv(`bunka:slats`),
    o = t.uv(`bunka:lobby`),
    s = [n];
  for (let e of Y) s.push(s[s.length - 1] + e.h);
  let c = e.begin();
  for (let e = 0; e < Y.length; e++) {
    let t = Y[e],
      n = [r.x0, r.x1, r.x0 + (r.x1 - r.x0) * t.ridge];
    (e > 0 && n.push(r.x0 + (r.x1 - r.x0) * Y[e - 1].ridge),
      n.sort((e, t) => e - t));
    let l = n.map((t) => xt(e - 1, t, s) + (e ? X : 0)),
      u = n.map((t) => xt(e, t, s) - Z),
      d = Math.min(...l),
      f = Math.max(...u),
      p = e === 0 ? o : a;
    (c.setMaterial(0.55, 0.1, e === 0 ? 0.4 : 0.32, 3),
      L(c, 16777215),
      De(
        c,
        n.map((e) => [e, r.z0]).reverse(),
        [...l].reverse(),
        [...u].reverse(),
        p,
        d,
        f,
      ),
      De(
        c,
        n.map((e) => [e, r.z1]),
        l,
        u,
        p,
        d,
        f,
      ));
    let m = l[0],
      h = u[0],
      g = l[l.length - 1],
      _ = u[u.length - 1];
    if (
      (R(c, r.x0, r.z0, r.x0, r.z1, m, h, p),
      R(c, r.x1, r.z1, r.x1, r.z0, g, _, p),
      e > 0)
    ) {
      (c.setMaterial(0.85, 0, 0, 0), L(c, 8016948));
      for (let t = r.x0 + 0.45; t < r.x1 - 0.2; t += 0.9) {
        let n = xt(e - 1, t, s) + X,
          a = xt(e, t, s) - Z;
        z(c, t - 0.035, n, r.z0 - 0.22, t + 0.035, a, r.z0, i);
      }
      for (let e = r.z0 + 0.45; e < r.z1 - 0.2; e += 0.9)
        z(c, r.x0 - 0.22, m, e - 0.035, r.x0, h, e + 0.035, i);
    }
    let v = r.x0 + (r.x1 - r.x0) * t.ridge,
      y = r.x0 - yt,
      b = r.x1 + yt,
      x = r.z0 - yt,
      S = r.z1 + yt,
      C = s[e + 1],
      w = C + t.rise,
      ee = t.rise / (v - r.x0 || 1),
      T = t.rise / (r.x1 - v || 1),
      E = C - ee * yt,
      D = C - T * yt;
    (c.setMaterial(0.6, 0.35, 0, 0),
      L(c, e === Y.length - 1 ? 4869198 : 4078650),
      c.quad(
        y,
        E + X,
        S,
        v,
        w + X,
        S,
        v,
        w + X,
        x,
        y,
        E + X,
        x,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      c.quad(
        v,
        w + X,
        S,
        b,
        D + X,
        S,
        b,
        D + X,
        x,
        v,
        w + X,
        x,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      L(c, 5917242),
      c.quad(
        y,
        E - Z,
        x,
        v,
        w - Z,
        x,
        v,
        w - Z,
        S,
        y,
        E - Z,
        S,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      c.quad(
        v,
        w - Z,
        x,
        b,
        D - Z,
        x,
        b,
        D - Z,
        S,
        v,
        w - Z,
        S,
        i.u0,
        i.v0,
        i.u1,
        i.v1,
      ),
      L(c, 3025962));
    let O = [y, v, b],
      k = [E, w, D];
    (De(
      c,
      O.map((e) => [e, x]).reverse(),
      k.map((e) => e - Z).reverse(),
      k.map((e) => e + X).reverse(),
      i,
      0,
      1,
    ),
      De(
        c,
        O.map((e) => [e, S]),
        k.map((e) => e - Z),
        k.map((e) => e + X),
        i,
        0,
        1,
      ),
      R(c, y, x, y, S, E - Z, E + X, i),
      R(c, b, S, b, x, D - Z, D + X, i));
  }
  (c.setMaterial(0.4, 0.6, 0, 0), L(c, 2763308));
  for (let e of [r.x0 + 4.2, r.x0 + 7, r.x0 + 9.8])
    z(c, e - 0.05, n, r.z0 - 0.08, e + 0.05, n + 3.2, r.z0 + 0.02, i);
  return (
    z(
      c,
      r.x0 + 4.2,
      n + 3.15,
      r.z0 - 0.08,
      r.x0 + 9.8,
      n + 3.3,
      r.z0 + 0.02,
      i,
    ),
    c.setMaterial(0.6, 0, 0.4, 3),
    L(c, 16777215),
    R(
      c,
      r.x1 - 1,
      r.z0 - 0.06,
      r.x0 + 1,
      r.z0 - 0.06,
      n + 4.25,
      n + 5.2,
      t.uv(`bunka:sign`),
    ),
    R(
      c,
      r.x0 + 3.6,
      r.z0 - 0.04,
      r.x0 + 2.4,
      r.z0 - 0.04,
      n + 1.2,
      n + 2.15,
      t.uv(`bunka:plate`),
    ),
    R(
      c,
      r.x0 - 0.06,
      r.z0 + 2,
      r.x0 - 0.06,
      r.z0 + 11,
      n + 4.25,
      n + 5.2,
      t.uv(`bunka:sign`),
    ),
    e.end(`bunka`, (r.x0 + r.x1) / 2, (r.z0 + r.z1) / 2, 900),
    e.box(r.x0, r.z0, r.x1, r.z1, n, s[s.length - 1] + Y[Y.length - 1].rise),
    s[s.length - 1] + Y[Y.length - 1].rise - n
  );
}
var Ct = 8,
  wt = 5.5;
function Tt(e) {
  (e.need(`arc:panel`, 256, 128, Qe),
    e.need(
      `arc:gate`,
      512,
      128,
      $e(
        `asa.arcade.name`,
        `asa.arcade.latin`,
        `#f4efe2`,
        `#9a1a14`,
        `#3a3a3a`,
      ),
    ),
    e.need(
      `arc:banner:1`,
      64,
      192,
      We(`asa.arcade.banner`, `#9a1a14`, `#f8f0dc`),
    ),
    e.need(
      `arc:banner:2`,
      64,
      192,
      We(`asa.arcade.autumn`, `#c8641e`, `#fff4dc`),
    ),
    e.need(
      `orange:gate`,
      512,
      112,
      $e(`asa.orange.name`, `asa.orange.sub`, `#f08a1e`, `#ffffff`, `#5a2a0a`),
    ),
    e.need(
      `orange:flag`,
      64,
      192,
      We(`asa.orange.name`, `#f08a1e`, `#ffffff`),
    ));
}
function Et(e) {
  let t = O,
    n = (t.zn + t.zs) / 2,
    r = (t.zs - t.zn) / 2,
    i = [];
  for (let a = 0; a <= Ct; a++) {
    let o = -1 + (2 * a) / Ct;
    i.push([
      n + o * r,
      e + t.spring + (t.crown - t.spring) * Math.sqrt(Math.max(0, 1 - o * o)),
    ]);
  }
  return i;
}
