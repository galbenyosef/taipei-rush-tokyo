// tokyo__assets__actors-Bnj6Q1ad 74 — pick
// Lines 35140-35329 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Qv(e) {
  let t = e.chance(0.4),
    n = Kv(`student`, e, t);
  ((n.kind = `tourist`),
    (n.height = t ? e.range(0.94, 1) : e.range(0.98, 1.06)),
    (n.width = e.range(0.9, 1)),
    (n.acc = Y(+!!t)));
  let r = e.chance(0.4);
  return (
    r && ((n.acc |= Y(3)), (n.accA = e.pick([1710618, 16053490, 15223338]))),
    (n.top = e.pick([
      12120106, 16742938, 1710620, 2788072, 15747706, 16053490, 1710620,
      10132120,
    ])),
    (n.bottom = e.pick([1710620, 2763322, 3816004])),
    (n.cloth =
      (e.chance(0.5) ? 2 : 1) + 3 + (t ? 144 : 576 * (r ? 2 : e.pick([0, 2])))),
    (n.shoes = e.pick([15921906, 16734778, 2763306, 12120106])),
    (n.walkSpeed = e.range(2.6, 3.3)),
    (n.runSpeed = e.range(5, 6)),
    (n.brave = 0.05),
    (n.umbrellaAt = 2),
    n
  );
}
var $v = [`office`, `student`, `student`, `tourist`, `office`, `uncle`];
function ey(e, t, n, r = $v) {
  let i = Yv(e.pick(r), e);
  return (
    i.acc & Y(11) &&
      ((i.acc &= ~Y(11)),
      a_(i.cloth, 18432) && (i.cloth -= i_),
      (i.bottom = e.pick(Rv))),
    (i.acc &= ~(Y(15) | Y(16) | Y(17) | Y(18) | Y(19) | Y(10))),
    a_(i.cloth, 18) && ((i.cloth -= 18), (i.shoes = e.pick(Mv))),
    a_(i.cloth, 72) && (i.cloth -= 72),
    (i.cloth += 288),
    (i.umbrellaAt = 2),
    (i.parasol = !1),
    (i.walkSpeed =
      e.range(3.4, 4.6) *
      (t === `riverside` ? 1.25 : 1) *
      (n > 22 || n < 6 ? 0.9 : 1)),
    (i.runSpeed = i.walkSpeed * 1.5),
    i
  );
}
function ty(e, t) {
  let n = Y(17) | Y(18);
  return (
    e.acc & Y(16) &&
      e.acc & n &&
      (t.chance(0.5) ? (e.acc &= ~Y(16)) : (e.acc &= ~n)),
    e
  );
}
function ny(e, t, n, r) {
  return t ? e.pick(r ?? Av) : e.pick(n ?? kv);
}
var ry = {
    office: 22,
    student: 14,
    auntie: 14,
    uncle: 12,
    elder: 8,
    tourist: 6,
    delivery: 5,
    monk: 0.4,
    worshipper: 0,
    vendor: 0,
  },
  iy = {
    ximending: {
      student: 2.4,
      tourist: 2.6,
      office: 0.55,
      elder: 0.5,
      uncle: 0.7,
      delivery: 1.2,
    },
    xinyi: { office: 2.2, tourist: 1.6, uncle: 0.45, elder: 0.5, auntie: 0.7 },
    wanhua: {
      uncle: 2.2,
      elder: 2.2,
      auntie: 1.6,
      office: 0.45,
      monk: 4,
      tourist: 1.1,
      student: 0.8,
    },
    zhongshan: { office: 1.5, tourist: 1.1 },
    zhongzheng: { office: 1.3, student: 1.2, tourist: 1.2 },
    daan: { student: 1.4, auntie: 1.1, office: 1.1 },
    songshan: { auntie: 1.2, uncle: 1.2 },
    shilin: { student: 1.5, tourist: 1.4, auntie: 1.2 },
  };
function ay(e, t) {
  let n = (e, n) => (e <= n ? t >= e && t < n : t >= e || t < n);
  switch (e) {
    case `office`:
      return n(7, 9.5) || n(17.5, 20)
        ? 2.2
        : n(11.5, 13.5)
          ? 1.6
          : n(22, 6.5)
            ? 0.2
            : 1;
    case `student`:
      return n(6.5, 8) || n(16, 18)
        ? 2.2
        : n(18, 22)
          ? 1.4
          : n(22.5, 6.5)
            ? 0.25
            : 0.9;
    case `elder`:
      return n(5, 10) ? 2.2 : n(19, 5) ? 0.3 : 1;
    case `auntie`:
      return n(6.5, 12) ? 1.7 : n(20.5, 6) ? 0.4 : 1;
    case `tourist`:
      return n(10, 22) ? 1.3 : n(23, 8) ? 0.25 : 0.8;
    case `delivery`:
      return n(11, 13.5) || n(17, 20.5) ? 2.2 : n(1, 7) ? 0.3 : 1;
    case `uncle`:
      return n(17, 23) ? 1.4 : n(1, 5.5) ? 0.4 : 1;
    default:
      return 1;
  }
}
var oy = [
    `office`,
    `student`,
    `auntie`,
    `uncle`,
    `elder`,
    `tourist`,
    `delivery`,
    `monk`,
    `vendor`,
    `worshipper`,
  ],
  sy = oy.map((e) => [e, 1]);
function cy(e, t, n, r) {
  let i = iy[t],
    a = 0;
  if (r) {
    let e = r.family ?? 0;
    for (let t = 0; t < oy.length; t++) {
      let i = oy[t],
        o =
          (r[i] ?? (i === `monk` ? 0.05 : 0)) +
          (i === `auntie` ? e * 0.6 : i === `elder` ? e * 0.4 : 0);
      ((sy[t][1] = Math.max(0, o) * ay(i, n)), (a += sy[t][1]));
    }
  }
  if (!(a > 0))
    for (let e = 0; e < oy.length; e++) {
      let t = oy[e];
      sy[e][1] = ry[t] * (i?.[t] ?? 1) * ay(t, n);
    }
  return e.weighted(sy);
}
function ly(e, t) {
  let n = ((e % 24) + 24) % 24,
    r;
  return (
    (r =
      n < 1
        ? 0.5
        : n < 5
          ? 0.16
          : n < 6.5
            ? 0.45
            : n < 9.5
              ? 1
              : n < 11.5
                ? 0.85
                : n < 14
                  ? 1
                  : n < 17
                    ? 0.9
                    : n < 21.5
                      ? 1
                      : n < 23
                        ? 0.85
                        : 0.65),
    t && (n >= 19 || n < 2) && (r = Math.min(1, r * 1.35 + 0.1)),
    r
  );
}
