// tokyo__assets__actors-Bnj6Q1ad 72 — pick
// Lines 34713-34812 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Wv(e, t, n = 0.06) {
  let r = 1 + (e.next() * 2 - 1) * n,
    i = Math.min(255, Math.round(((t >> 16) & 255) * r)),
    a = Math.min(255, Math.round(((t >> 8) & 255) * r)),
    o = Math.min(255, Math.round((t & 255) * r));
  return (i << 16) | (a << 8) | o;
}
var Gv = (e) => Wv(e, e.chance(0.68) ? e.pick(Pv) : e.pick(Fv));
function Kv(e, t, n) {
  return {
    kind: e,
    female: +!!n,
    height: n ? t.range(0.93, 0.99) : t.range(0.98, 1.06),
    width: t.range(0.94, 1.06),
    belly: 0,
    stoop: 0,
    skin: t.pick(Sv),
    hair: t.pick(wv),
    top: 16777215,
    bottom: 3355443,
    shoes: t.pick(Mv),
    accA: t.pick(kv),
    accB: t.pick(Ov),
    acc: Y(n ? +!!t.chance(0.75) : 0),
    cloth: 0,
    walkSpeed: t.range(1.25, 1.5),
    runSpeed: t.range(4.4, 5.4),
    brave: 0,
    umbrellaAt: t.range(0.12, 0.45),
    parasol: !1,
    hp: 65,
  };
}
var qv = (e, t, n) => {
  e.chance(n) && (t.acc |= Y(6));
};
function Jv(e, t, n) {
  let r = e.next();
  r < 0.26
    ? ((t.acc |= Y(11)), (t.cloth += 3), (t.bottom = Wv(e, e.pick(Hv))))
    : r < 0.46
      ? ((t.acc |= Y(11)), (t.cloth += 3 + i_), (t.bottom = Wv(e, e.pick(Hv))))
      : r < 0.7
        ? ((t.cloth += r_), (t.bottom = Wv(e, e.pick(n ? zv : Bv))))
        : (t.bottom = Wv(e, n ? e.pick(zv) : e.pick(Rv)));
}
function Yv(e, t) {
  let n = ty(Xv(e, t), t),
    r = n.cloth % 3,
    i = a_(n.cloth, 9),
    a = e === `student` || e === `tourist`;
  (!a_(n.cloth, 36) &&
    !a_(n.cloth, 2304) &&
    r !== 2 &&
    (i &&
    !n.female &&
    (e === `office` || e === `uncle` || e === `elder` || e === `tourist`) &&
    t.chance(e === `office` ? 0.12 : 0.28)
      ? ((n.cloth += 36 + t_),
        (n.top = Wv(t, t.pick([3820138, 6961722, 3824202, 5921386, 9071178]))))
      : (a || e === `uncle`) && !i && t.chance(0.16)
        ? (n.cloth += 36)
        : (((e === `auntie` || (e === `elder` && n.female)) &&
            t.chance(0.45)) ||
            (n.female && a && t.chance(0.08))) &&
          (n.cloth += t_)),
    (e === `student` || e === `tourist` || e === `office` || e === `uncle`) &&
      !n.female &&
      t.chance(0.14) &&
      (n.cloth += 72));
  let o = n.acc & (Y(3) | Y(5));
  if (n.acc & Y(0)) {
    let r;
    ((r = o
      ? 2
      : e === `office`
        ? t.pick([3, 3, 0, 2])
        : e === `uncle` || e === `elder`
          ? t.pick([2, 2, 3, 0])
          : a
            ? t.pick([0, 1, 1, 0, 2])
            : t.pick([0, 1, 2, 3])),
      n.female && (r = r === 2 ? 0 : r),
      (n.cloth += 576 * r));
  } else if (n.acc & Y(1)) {
    let r = t.pick([0, 0, 1, 2, 2, 3]);
    ((n.cloth += 576 * r),
      r !== 1 &&
        (e === `student` ||
          e === `office` ||
          e === `tourist` ||
          e === `vendor`) &&
        t.chance(0.38) &&
        ((n.cloth += 144),
        !(n.acc & Y(6)) &&
          !(n.acc & Y(8)) &&
          (n.accB = t.pick([1710618, 13650538, 15777856, 3828416, 6965818]))));
  }
  return n;
}
