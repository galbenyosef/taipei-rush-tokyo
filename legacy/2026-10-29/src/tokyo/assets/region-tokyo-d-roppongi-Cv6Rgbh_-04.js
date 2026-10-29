// tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_ 04 — globalalpha
// Lines 1099-1436 of readable/tokyo/assets/region-tokyo-d-roppongi-Cv6Rgbh_.pretty.js (statement-aligned).
function Se(e, t) {
  return (i, a, o, s, c) => {
    let l = new n(r(`rop-win`, e, t));
    i.clearRect(a, o, s, c);
    let u = s / 4;
    for (let n = 0; n < 4; n++) {
      let r = a + n * u + u * 0.06,
        s = o + c * 0.06,
        d = u * 0.88,
        f = c * 0.88,
        p =
          e === `dark`
            ? `#4a5a68`
            : e === `office`
              ? `#8a96a0`
              : e === `mirror`
                ? `#7c8ea0`
                : `#c8ccc8`,
        m =
          e === `dark`
            ? `#1a2028`
            : e === `office`
              ? `#3a444c`
              : e === `mirror`
                ? `#2a3848`
                : `#8a8e8c`,
        h = i.createLinearGradient(0, s, 0, s + f);
      if (
        (h.addColorStop(0, p),
        h.addColorStop(1, m),
        (i.globalAlpha = 1),
        (i.fillStyle = h),
        i.fillRect(r, s, d, f),
        e === `blind` || e === `tenant`)
      )
        for (let e = s; e < s + f; e += f / 9)
          O(i, r, e, d, f * 0.02, `rgba(0,0,0,0.25)`);
      (e === `tenant` &&
        l.next() < 0.5 &&
        O(
          i,
          r + d * 0.1,
          s + f * 0.35,
          d * 0.8,
          f * 0.24,
          [`#ff4fa3`, `#ffd400`, `#3fe0ff`, `#ffffff`, `#c77dff`][(n + t) % 5],
        ),
        (i.globalAlpha = 0.16),
        (i.fillStyle = `#ffffff`),
        i.fillRect(r + d * 0.1, s, d * 0.12, f),
        (i.globalAlpha = 1));
    }
  };
}
function Ce(e, t) {
  return (i, a, o, s, c) => {
    let l = new n(r(`rop-wall`, e, t));
    if ((O(i, a, o, s, c, t), e === `tile`))
      for (let e = o; e < o + c; e += 6) O(i, a, e, s, 1, `rgba(0,0,0,0.08)`);
    if (e === `panel`)
      for (let e = a; e < a + s; e += s / 4)
        O(i, e, o, 2, c, `rgba(0,0,0,0.12)`);
    if (e === `board`)
      for (let e = a; e < a + s; e += 5)
        O(i, e, o, 1, c, `rgba(255,255,255,0.08)`);
    if (e === `stone`)
      for (let e = o, t = 0; e < o + c; e += 12, t++) {
        O(i, a, e + 11, s, 1, `rgba(0,0,0,0.22)`);
        for (let n = a + (t % 2 ? 0 : 10); n < a + s; n += 20)
          O(i, n, e, 1, 11, `rgba(0,0,0,0.22)`);
      }
    for (let e = 0; e < 6; e++)
      ((i.globalAlpha = 0.05 + l.next() * 0.06),
        (i.fillStyle = `#302820`),
        i.fillRect(a + l.next() * s, o, s * 0.03, c * (0.3 + l.next() * 0.7)));
    i.globalAlpha = 1;
  };
}
function we(e, t, n, r, i) {
  (O(e, t, n, r, i, `#ffffff`),
    O(e, t + r * 0.04, n + i * 0.04, r * 0.92, i * 0.24, `#d7000f`),
    I(
      e,
      P(`roppongi.plate.kyakuhiki`),
      t + r / 2,
      n + i * 0.16,
      r * 0.86,
      i * 0.16,
      `#ffffff`,
      `900`,
    ),
    I(
      e,
      P(`roppongi.plate.bottakuri`),
      t + r / 2,
      n + i * 0.4,
      r * 0.88,
      i * 0.1,
      `#111111`,
      `800`,
    ),
    O(e, t + r * 0.04, n + i * 0.5, r * 0.92, i * 0.2, `#1d2088`),
    I(
      e,
      P(`roppongi.plate.latin`),
      t + r / 2,
      n + i * 0.6,
      r * 0.86,
      i * 0.1,
      `#ffffff`,
      `900`,
    ),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#d7000f`),
    (e.lineWidth = r * 0.035),
    e.beginPath(),
    e.arc(t + r * 0.16, n + i * 0.84, i * 0.1, 0, Math.PI * 2),
    e.moveTo(t + r * 0.09, n + i * 0.9),
    e.lineTo(t + r * 0.23, n + i * 0.78),
    e.stroke(),
    I(
      e,
      P(`roppongi.plate.ward`),
      t + r * 0.6,
      n + i * 0.84,
      r * 0.66,
      i * 0.1,
      `#111111`,
      `800`,
    ));
}
function Te(e) {
  return (t, n, r, i, a) => {
    (O(t, n, r, i, a, `#4a3220`),
      O(t, n + i * 0.06, r + a * 0.05, i * 0.88, a * 0.9, `#141814`));
    let o = [
      `roppongi.bar.luna`,
      `roppongi.bar.shot7`,
      `roppongi.bar.bull`,
      `roppongi.bar.goal`,
    ][e % 4];
    (le(
      t,
      P(o),
      n + i / 2,
      r + a * 0.16,
      i * 0.8,
      a * 0.11,
      [`#ff4fa3`, `#3fe0ff`, `#ffd84a`, `#8aff7a`][e % 4],
      `800`,
    ),
      I(
        t,
        P(`roppongi.aboard.nomihodai`),
        n + i / 2,
        r + a * 0.38,
        i * 0.82,
        a * 0.1,
        `#ffffff`,
        `800`,
      ),
      I(
        t,
        P(`roppongi.aboard.latin`),
        n + i / 2,
        r + a * 0.5,
        i * 0.8,
        a * 0.08,
        `#ffd84a`,
        `900`,
      ),
      I(
        t,
        P(e % 2 ? `roppongi.aboard.happy` : `roppongi.aboard.darts`),
        n + i / 2,
        r + a * 0.64,
        i * 0.82,
        a * 0.07,
        `#ffffff`,
        `700`,
      ),
      I(
        t,
        P(`roppongi.aboard.nocharge`),
        n + i / 2,
        r + a * 0.76,
        i * 0.7,
        a * 0.07,
        `#ff8a8a`,
        `800`,
      ),
      I(
        t,
        P(`roppongi.aboard.welcome`),
        n + i / 2,
        r + a * 0.88,
        i * 0.84,
        a * 0.06,
        `#c8f0ff`,
        `700`,
      ));
  };
}
function Ee(e) {
  return (t, n, r, i, a) => {
    O(t, n, r, i, a, `#e9e4d6`);
    for (let e = 0; e < 4; e++)
      O(t, n, r + a * (0.2 + e * 0.2), i, 1, `rgba(0,0,0,0.06)`);
    if (e === 0)
      (_(
        t,
        P(`roppongi.saka.name`),
        n + i / 2,
        r + a * 0.06,
        r + a * 0.62,
        i * 0.62,
        `#1a1a1a`,
        y(),
        `900`,
      ),
        I(
          t,
          P(`roppongi.saka.kana`),
          n + i / 2,
          r + a * 0.7,
          i * 0.86,
          a * 0.06,
          `#333333`,
          `700`,
        ));
    else {
      let e = P(`roppongi.saka.text`),
        o = Math.ceil(e.length / 4);
      for (let s = 0; s < 4; s++)
        _(
          t,
          e.slice(s * o, (s + 1) * o),
          n + i * (0.8 - s * 0.2),
          r + a * 0.05,
          r + a * 0.82,
          i * 0.16,
          `#2a2a2a`,
          y(),
          `700`,
        );
    }
    I(
      t,
      P(`roppongi.saka.ward`),
      n + i / 2,
      r + a * 0.92,
      i * 0.6,
      a * 0.05,
      `#2a2a2a`,
      `800`,
    );
  };
}
function De(e, t, n, r, i) {
  (D(e, t, n, r, i, `#1f4fa8`, 0.62),
    (e.globalAlpha = 1),
    (e.strokeStyle = `#ffffff`),
    (e.lineWidth = Math.max(2, i * 0.04)),
    e.strokeRect(t + i * 0.06, n + i * 0.06, r - i * 0.12, i - i * 0.12),
    I(
      e,
      P(`roppongi.crossing.name`),
      t + r / 2,
      n + i * 0.4,
      r * 0.7,
      i * 0.48,
      `#ffffff`,
      `800`,
    ),
    I(
      e,
      P(`roppongi.crossing.latin`),
      t + r / 2,
      n + i * 0.78,
      r * 0.5,
      i * 0.2,
      `#ffffff`,
      `700`,
    ));
}
function Oe(e, t, n, r, i) {
  (O(e, t, n, r, i, `#ffffff`),
    O(e, t, n, r, i * 0.5, `#00804a`),
    I(e, `TAXI`, t + r / 2, n + i * 0.25, r * 0.7, i * 0.32, `#ffffff`, `900`),
    I(
      e,
      P(`roppongi.plate.taxi`),
      t + r / 2,
      n + i * 0.74,
      r * 0.86,
      i * 0.26,
      `#00804a`,
      `900`,
    ));
}
function ke(e) {
  return (t, n, r, i, a) => {
    (D(t, n, r, i, a, [`#5b1a8a`, `#c8102e`, `#0b2a5a`][e % 3], 0.62),
      O(t, n, r, i, a * 0.05, `#ffd84a`),
      O(t, n, r + a * 0.95, i, a * 0.05, `#ffd84a`),
      _(
        t,
        P(`roppongi.lane.flag`),
        n + i / 2,
        r + a * 0.09,
        r + a * 0.91,
        i * 0.62,
        `#ffffff`,
        g(),
        `900`,
      ));
  };
}
function Ae(e, t = `#d42a1a`) {
  return (n, r, i, a, o) => {
    D(n, r, i, a, o, t, 0.7);
    for (let e = 1; e < 7; e++)
      O(n, r, i + (o * e) / 7, a, 1.5, `rgba(0,0,0,0.18)`);
    (O(n, r, i, a, o * 0.08, `#141414`),
      O(n, r, i + o * 0.92, a, o * 0.08, `#141414`),
      _(
        n,
        P(e),
        r + a / 2,
        i + o * 0.14,
        i + o * 0.86,
        a * 0.64,
        `#141414`,
        y(),
        `900`,
      ));
  };
}
