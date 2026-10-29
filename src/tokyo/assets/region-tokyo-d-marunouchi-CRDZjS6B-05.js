// tokyo/assets/region-tokyo-d-marunouchi-CRDZjS6B 05 — need
// Lines 1337-1683 of readable/tokyo/assets/region-tokyo-d-marunouchi-CRDZjS6B.pretty.js (statement-aligned).
function $e(e) {
  return (t, n, r, i, a) => {
    R(t, n, r, i, a, `#f2f2ee`);
    for (let e = 0; e < 4; e++)
      R(t, n + (e * i) / 4, r, 1.5, a, `rgba(0,0,0,0.12)`);
    if (
      (R(t, n, r + a * 0.84, i, a * 0.16, `#3c7a4a`),
      R(t, n, r, i, a * 0.04, `#3c7a4a`),
      e)
    )
      (V(
        t,
        N(`maru.site.wood`),
        n + i / 2,
        r + a * 0.32,
        i * 0.86,
        a * 0.2,
        `#5a4028`,
        F(),
        `700`,
      ),
        V(
          t,
          N(`maru.site.title`),
          n + i / 2,
          r + a * 0.56,
          i * 0.92,
          a * 0.1,
          `#2a2a28`,
          j(),
          `600`,
        ),
        V(
          t,
          N(`maru.site.period`),
          n + i / 2,
          r + a * 0.7,
          i * 0.6,
          a * 0.08,
          `#2a2a28`,
          j(),
          `500`,
        ));
    else
      for (let e = 0; e < 26; e++)
        R(
          t,
          n,
          r + a * (0.24 + e * 0.018),
          i,
          a * 0.012,
          e % 3 ? `#c89a64` : `#b08050`,
        );
  };
}
function et(e) {
  return (t, n, r, i, a) => {
    if ((R(t, n, r, i, a, `#ffffff`), e === `plan`)) {
      (R(t, n, r, i, a * 0.16, `#1e4a8a`),
        V(
          t,
          N(`ginza.site.notice`),
          n + i / 2,
          r + a * 0.08,
          i * 0.9,
          a * 0.1,
          `#ffffff`,
          j(),
          `700`,
        ));
      for (let e = 0; e < 9; e++)
        (R(t, n + i * 0.06, r + a * (0.22 + e * 0.08), i * 0.88, 1, `#9aa0a8`),
          R(
            t,
            n + i * 0.08,
            r + a * (0.24 + e * 0.08),
            i * 0.3,
            a * 0.025,
            `rgba(30,30,30,0.6)`,
          ));
    } else
      ((t.fillStyle = `#ffd400`),
        t.beginPath(),
        t.arc(n + i * 0.5, r + a * 0.22, i * 0.12, Math.PI, 0),
        t.fill(),
        R(t, n + i * 0.4, r + a * 0.25, i * 0.2, a * 0.08, `#f2c8a0`),
        R(t, n + i * 0.32, r + a * 0.33, i * 0.36, a * 0.25, `#3a6abf`),
        V(
          t,
          N(`common.safety.koji-owabi`),
          n + i / 2,
          r + a * 0.72,
          i * 0.92,
          a * 0.1,
          `#c0302a`,
          j(),
          `800`,
        ),
        V(
          t,
          N(`common.safety.koji-chu`),
          n + i / 2,
          r + a * 0.88,
          i * 0.6,
          a * 0.1,
          `#1a1a1a`,
          j(),
          `700`,
        ));
  };
}
function tt(e, t, n, r, i) {
  R(e, t, n, r, i, `#d8dadc`);
  for (let a = 0; a < 8; a++)
    R(e, t + (a * r) / 8, n, r / 16, i, `rgba(0,0,0,0.05)`);
  for (let a = n; a < n + i; a += 3)
    R(e, t, a, r, 0.7, `rgba(255,255,255,0.25)`);
}
function nt(e, r, i, a, o) {
  let s = new t(n(`maru-pave-gyoko`));
  R(e, r, i, a, o, `#b8b6b0`);
  for (let t = 0; t < 4; t++)
    for (let n = -1; n < 4; n++) {
      let c = r + (a / 4) * n + (t % 2 ? a / 8 : 0),
        l = i + (t * o) / 4,
        u = 0.94 + s.next() * 0.08;
      ((e.fillStyle = `rgb(${(214 * u) | 0},${(212 * u) | 0},${(206 * u) | 0})`),
        e.fillRect(c + 1, l + 1, a / 4 - 2, o / 4 - 2));
      for (let t = 0; t < 30; t++)
        ((e.fillStyle = `rgba(60,60,60,${0.05 + s.next() * 0.08})`),
          e.fillRect(c + s.next() * (a / 4), l + s.next() * (o / 4), 1.2, 1.2));
    }
}
function rt(e, r, i, a, o) {
  let s = new t(n(`maru-pave-naka`));
  R(e, r, i, a, o, `#8c8478`);
  let c = [`#b4aa9a`, `#a89c8a`, `#c2b8a6`, `#9c9486`, `#b8ae9c`, `#aca290`];
  for (let t = 0; t < 6; t++) {
    let n = r - s.next() * 20,
      l = i + (t * o) / 6;
    for (; n < r + a;) {
      let t = (a / 6) * (0.6 + s.next() * 0.9);
      ((e.fillStyle = c[Math.floor(s.next() * c.length)]),
        e.fillRect(n + 1, l + 1, t - 2, o / 6 - 2),
        (n += t));
    }
  }
}
function it(e, r, i, a, o) {
  let s = new t(n(`maru-pave-garden`));
  R(e, r, i, a, o, `#8a7060`);
  for (let t = i, n = 0; t < i + o; t += 8, n++)
    for (let i = r - (n % 2) * 8; i < r + a; i += 16) {
      let n = 0.85 + s.next() * 0.25;
      ((e.fillStyle = `rgb(${(170 * n) | 0},${(110 * n) | 0},${(84 * n) | 0})`),
        e.fillRect(i + 0.8, t + 0.8, 14.4, 6.4));
    }
}
function at(e, r, i, a, o) {
  let s = new t(n(`maru-gravel`));
  R(e, r, i, a, o, `#c8c6be`);
  for (let t = 0; t < 900; t++) {
    let t = 0.75 + s.next() * 0.35;
    ((e.fillStyle = `rgb(${(210 * t) | 0},${(208 * t) | 0},${(200 * t) | 0})`),
      e.fillRect(r + s.next() * a, i + s.next() * o, 1.6, 1.6));
  }
  for (let t = i + 4; t < i + o; t += 8) R(e, r, t, a, 1, `rgba(0,0,0,0.08)`);
}
function ot(e, r, i, a, o) {
  let s = new t(n(`maru-forest`));
  R(e, r, i, a, o, `#4c5a32`);
  for (let t = 0; t < 700; t++)
    ((e.fillStyle = [`#5e6c3a`, `#6a5a38`, `#3e4a28`, `#7a6a42`, `#566a34`][
      Math.floor(s.next() * 5)
    ]),
      e.fillRect(
        r + s.next() * a,
        i + s.next() * o,
        2 + s.next() * 3,
        1.5 + s.next() * 2,
      ));
}
function st(e) {
  return (r, i, a, o, s) =>
    P(
      r,
      new t(n(`maru-stone`, e)),
      i,
      a,
      o,
      s,
      H(e === `komatsu` ? 9343620 : 14605010),
      48,
      30,
    );
}
function ct(e, r, i, a, o) {
  let s = new t(n(`maru-flowers`));
  R(e, r, i, a, o, `#3e5a2a`);
  for (let t = 0; t < 300; t++)
    ((e.fillStyle = [
      `#f4f0f0`,
      `#e8b4c8`,
      `#f0d040`,
      `#c86a9a`,
      `#6a8a3a`,
      `#4e7a30`,
    ][Math.floor(s.next() * 6)]),
      e.fillRect(r + s.next() * a, i + s.next() * o, 2.5, 2.5));
}
function lt(e, r, i, a, o) {
  let s = new t(n(`maru-roof`));
  R(e, r, i, a, o, `#8e8e8a`);
  for (let t = i; t < i + o; t += 16)
    for (let n = r; n < r + a; n += 16)
      R(
        e,
        n + 0.5,
        t + 0.5,
        15,
        15,
        `rgba(${120 + s.next() * 30},${120 + s.next() * 30},${118 + s.next() * 30},1)`,
      );
}
var W = 35,
  G = 3;
function ut(e) {
  for (let t of [`en`, `shinen`, `hagaki`, `park`, `ote`, `one`, `meiji`])
    e.need(`cw:${t}`, 256, 256, De(t));
  (e.need(`pod:en`, 256, 176, Oe),
    e.need(`pod:shinen`, 256, 176, ke),
    e.need(`post`, 192, 156, Ae),
    e.need(`clock`, 96, 96, je),
    e.need(`brick:bay`, 96, 128, Ne),
    e.need(`brick`, 128, 128, Pe),
    e.need(`slate`, 128, 128, Fe),
    e.need(`granite`, 128, 128, Ie),
    e.need(`colwin`, 96, 160, Le));
  for (let [t, n, r] of [
    [`shop:boutique0`, `boutique`, 0],
    [`shop:boutique1`, `boutique`, 1],
    [`shop:boutique2`, `boutique`, 2],
    [`shop:cafe`, `cafe`, 0],
    [`shop:lobby`, `lobby`, 0],
    [`shop:mall`, `mall`, 0],
    [`shop:mall1`, `mall`, 1],
  ])
    e.need(t, 256, 112, Re(n, r));
  (e.need(
    `name:en`,
    256,
    72,
    ze(`maru.en.name`, `#3a2e24`, `#f4e6c8`, { sub: `maru.en.latin` }),
  ),
    e.need(
      `name:shinen`,
      256,
      64,
      ze(`maru.shinen.name`, `#2a2e32`, `#f2f2ee`),
    ),
    e.need(
      `name:hagaki`,
      256,
      64,
      ze(`maru.hagaki.name`, `#f2f0ea`, `#c0302a`, {
        sub: `maru.hagaki.sub`,
        lit: 0.45,
      }),
    ),
    e.need(
      `name:terrace`,
      160,
      40,
      ze(`maru.shinen.terrace`, `#2a2e32`, `#f2e2c0`),
    ),
    e.need(
      `name:museum`,
      192,
      40,
      ze(`maru.museum.name`, `#2a2420`, `#e8d8b8`, { serif: !0 }),
    ),
    e.need(`post:sign`, 160, 64, Be),
    e.need(`museum:banner`, 56, 240, Ve),
    e.need(`hoard`, 256, 96, $e(!1)),
    e.need(`hoard:banner`, 512, 96, $e(!0)),
    e.need(`notice:plan`, 96, 128, et(`plan`)),
    e.need(`notice:owabi`, 96, 128, et(`owabi`)),
    e.need(`sheet`, 128, 128, tt),
    e.need(`pave:gyoko`, 256, 256, nt),
    e.need(`pave:garden`, 128, 128, it),
    e.need(`gravel`, 128, 128, at),
    e.need(`forest`, 128, 128, ot),
    e.need(`stone:komatsu`, 128, 128, st(`komatsu`)),
    e.need(`stone:inada`, 128, 128, st(`inada`)),
    e.need(`masakado:stone`, 48, 176, He),
    e.need(`masakado:board`, 160, 128, Ue),
    e.need(`kuyo`, 96, 128, We),
    e.need(`hinoki`, 128, 128, Ge),
    e.need(`flowers`, 128, 64, ct),
    e.need(`roof`, 128, 128, lt),
    e.need(`sign:forest`, 160, 48, Ye(`maru.forest.name`)),
    e.need(`sign:square`, 160, 48, Ye(`maru.square.name`)));
}
var dt = (e, t, n, r, i) => {
  let a = e.u1 - e.u0,
    o = e.v1 - e.v0;
  return {
    u0: e.u0 + a * t,
    u1: e.u0 + a * n,
    v0: e.v0 + o * r,
    v1: e.v0 + o * i,
  };
};
function K(e, t, n, r, i, a, o, s) {
  e.quad(t, a, n, r, a, i, r, o, i, t, o, n, s.u0, s.v0, s.u1, s.v1);
}
function q(e, t, n, r, i, a, o, s, c, l) {
  let u = Math.hypot(r - t, i - n);
  if (u < 0.01 || o - a < 0.01) return;
  let d = (r - t) / u,
    f = (i - n) / u,
    p = Array.isArray(s) ? s : [s];
  for (let r = 0, i = 0; r < u - 0.01; r += c, i++) {
    let s = Math.min(u, r + c),
      m = (s - r) / c,
      h = p[i % p.length];
    for (let i = a; i < o - 0.01; i += l) {
      let a = Math.min(o, i + l),
        c = (a - i) / l;
      K(e, t + d * r, n + f * r, t + d * s, n + f * s, i, a, dt(h, 0, m, 0, c));
    }
  }
}
function J(e, t, n, r, i, a, o, s) {
  for (let c = t; c < r - 0.01; c += s) {
    let t = Math.min(r, c + s),
      l = (t - c) / s;
    for (let r = n; r < i - 0.01; r += s) {
      let n = Math.min(i, r + s),
        u = dt(o, 0, l, 0, (n - r) / s);
      e.quad(c, a, n, t, a, n, t, a, r, c, a, r, u.u0, u.v0, u.u1, u.v1);
    }
  }
}
function ft(e, t, n, r) {
  return { N: [n, t, e, t], E: [n, r, n, t], S: [e, r, n, r], W: [e, t, e, r] };
}
