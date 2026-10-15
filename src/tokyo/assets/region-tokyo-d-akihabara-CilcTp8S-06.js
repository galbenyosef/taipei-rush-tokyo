// tokyo/assets/region-tokyo-d-akihabara-CilcTp8S 06 — globalalpha
// Lines 1459-1587 of readable/tokyo/assets/region-tokyo-d-akihabara-CilcTp8S.pretty.js (statement-aligned).
function Me(e, r) {
  return (i, a, o, s, c) => {
    let l = new t(n(`akiba-win`, e, r));
    i.clearRect(a, o, s, c);
    let u = s / 4;
    for (let t = 0; t < 4; t++) {
      let n = a + t * u + u * 0.06,
        s = o + c * 0.06,
        d = u * 0.88,
        f = c * 0.88,
        p = e === `dark` ? `#5a6a78` : e === `office` ? `#8a96a0` : `#c8ccc8`,
        m = e === `dark` ? `#202830` : e === `office` ? `#3a444c` : `#8a8e8c`,
        h = i.createLinearGradient(0, s, 0, s + f);
      if (
        (h.addColorStop(0, p),
        h.addColorStop(1, m),
        (i.globalAlpha = 1),
        (i.fillStyle = h),
        i.fillRect(n, s, d, f),
        e === `blind` || e === `tenant`)
      )
        for (let e = s; e < s + f; e += f / 9)
          D(i, n, e, d, f * 0.02, `rgba(0,0,0,0.25)`);
      (e === `tenant` &&
        l.next() < 0.5 &&
        D(
          i,
          n + d * 0.1,
          s + f * 0.35,
          d * 0.8,
          f * 0.24,
          [`#ff4a8a`, `#ffd400`, `#40c0ff`, `#ffffff`][(t + r) % 4],
        ),
        (i.globalAlpha = 0.16),
        (i.fillStyle = `#ffffff`),
        i.fillRect(n + d * 0.1, s, d * 0.12, f),
        (i.globalAlpha = 1));
    }
  };
}
function Ne(e, r) {
  return (i, a, o, s, c) => {
    let l = new t(n(`akiba-wall`, e, r));
    if ((D(i, a, o, s, c, r), e === `tile`))
      for (let e = o; e < o + c; e += 6) D(i, a, e, s, 1, `rgba(0,0,0,0.08)`);
    if (e === `panel`)
      for (let e = a; e < a + s; e += s / 4)
        D(i, e, o, 2, c, `rgba(0,0,0,0.12)`);
    if (e === `brick`)
      for (let e = o, t = 0; e < o + c; e += 8, t++) {
        D(i, a, e + 7, s, 1, `#c8bca8`);
        for (let n = a + (t % 2 ? 0 : 9); n < a + s; n += 18)
          D(i, n, e, 1, 7, `#c8bca8`);
      }
    for (let e = 0; e < 6; e++)
      ((i.globalAlpha = 0.06 + l.next() * 0.06),
        (i.fillStyle = `#302820`),
        i.fillRect(a + l.next() * s, o, s * 0.03, c * (0.3 + l.next() * 0.7)));
    i.globalAlpha = 1;
  };
}
function Pe(e, t, n) {
  let r = ke(e, t, n);
  return (i, a, o, s, c) => {
    let l = Math.min(s * 0.42, c * 0.66);
    (i.save(),
      i.beginPath(),
      i.rect(a, o, l, c),
      i.clip(),
      r(i, a, o - c * 0.08, l, c * 1.5),
      i.restore());
    let u = [`#1b2a6b`, `#3a0d4f`, `#0d3b2e`, `#4a0e0e`, `#101820`];
    (D(i, a + l, o, s - l, c, u[e % u.length]),
      we(
        i,
        N(t),
        a + l + (s - l) / 2,
        o + c * 0.38,
        (s - l) * 0.9,
        c * 0.26,
        `#ffffff`,
        `#000000`,
      ),
      D(
        i,
        a + l + (s - l) * 0.2,
        o + c * 0.66,
        (s - l) * 0.6,
        c * 0.16,
        `#ffd400`,
      ),
      I(
        i,
        N(n),
        a + l + (s - l) / 2,
        o + c * 0.74,
        (s - l) * 0.56,
        c * 0.12,
        `#101010`,
        `900`,
      ),
      D(i, a, o, s, c * 0.03, `#ffffff`),
      D(i, a, o + c * 0.97, s, c * 0.03, `#ffffff`));
  };
}
var Fe = { E: [1, 0], W: [-1, 0], N: [0, -1], S: [0, 1] },
  L = 4.3,
  R = 3.45,
  Ie = (e) => L + (e.floors - 1) * R + 0.9,
  Le = [
    `akiba.floor.keitai`,
    `akiba.floor.pc`,
    `akiba.floor.parts`,
    `akiba.floor.camera`,
    `akiba.floor.game`,
    `akiba.floor.hobby`,
    `akiba.floor.toreka`,
    `akiba.floor.kaitori`,
    `akiba.floor.audio`,
    `akiba.floor.menzei`,
  ];
function z(e, t) {
  let [n, r, i] = F(e);
  return { main: `brand.${e}`, top: t, bg: n, fg: r, acc: i };
}
function B(e, t, n) {
  let [r, i, a] = F(e);
  return { main: `brand.${e}`, bg: r, fg: i, acc: a, floor: t, sub: n };
}
