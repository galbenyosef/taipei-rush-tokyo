// tokyo/assets/actors-bknSEpf2 106 — chance
// Lines 46120-46446 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function JT(e, t) {
  switch (e) {
    case `office`: {
      let n = t.chance(0.45),
        r = WT(e, t, n);
      return (
        t.chance(0.18) && (r.hair = t.pick(CT)),
        (r.top = HT(t, t.pick(n ? FT : PT), 0.04)),
        (r.bottom = HT(t, t.pick(LT))),
        (r.shoes = t.pick(kT)),
        (r.cloth =
          +!!t.chance(n ? 0.45 : 0.4) + (t.chance(n ? 0.45 : 0.85) ? 9 : 0)),
        n
          ? (KT(t, r, !0),
            (r.shoes = t.pick([1710618, 5909034, 14208964, 15724527, 2760988])))
          : t.chance(0.2) && (r.cloth += ew),
        t.chance(0.28) && (r.acc |= Q(7)),
        (n ? t.chance(0.55) : t.chance(0.2))
          ? ((r.acc |= Q(22)),
            (r.accB = t.pick([2760988, 7031347, 1842206, 12094058, 14208960])))
          : t.chance(0.3) && (r.acc |= Q(18)),
        GT(t, r, 0.3),
        t.chance(0.35) ? (r.acc |= Q(16)) : t.chance(0.14) && (r.acc |= Q(15)),
        (r.walkSpeed = t.range(1.35, 1.6)),
        (r.brave = n ? 0.02 : 0.08),
        (r.parasol = n && t.chance(0.25)),
        r
      );
    }
    case `student`: {
      let n = t.chance(0.5),
        r = WT(e, t, n);
      ((r.height = t.range(0.88, 0.97)),
        (r.width = t.range(0.88, 0.97)),
        n && t.chance(0.5) && (r.acc = Q(1)));
      let i = t.next();
      if (i < 0.25) {
        let e = t.pick([2906784, 3112271, 8004659, 2042436, 5913226]);
        ((r.top = e), (r.bottom = e), (r.cloth = +!!t.chance(0.5)));
      } else
        i < 0.62
          ? ((r.top = t.pick([16053490, 16053490, 15265524, 15855590])),
            (r.bottom = t.pick([2042436, 1710620, 11049080, 2968122, 3813194])),
            (r.cloth = 10),
            n && t.chance(0.6) && ((r.acc |= Q(11)), (r.cloth = 13)))
          : ((r.top = UT(t)),
            (r.cloth = 1),
            t.chance(0.2) && (r.hair = t.pick(CT)),
            n
              ? KT(t, r, !1)
              : t.chance(0.35)
                ? ((r.bottom = HT(t, t.pick(zT))), (r.cloth += 3))
                : ((r.bottom = HT(t, t.chance(0.55) ? t.pick(IT) : t.pick(RT))),
                  t.chance(0.45) && (r.cloth += ew)));
      return (
        (r.shoes = t.pick([15921906, 1710618, 15724527, 2763306, 15261904])),
        t.chance(0.8) &&
          ((r.acc |= Q(8)),
          (r.accB = t.pick([
            1908e3, 2767450, 5909034, 3824186, 14209216, 9054794, 14711354,
            1908e3,
          ]))),
        t.chance(0.4) ? (r.acc |= Q(15)) : t.chance(0.4) && (r.acc |= Q(16)),
        t.chance(0.3) && (r.acc |= Q(7)),
        GT(t, r, 0.2),
        (r.walkSpeed = t.range(1.3, 1.55)),
        (r.runSpeed = t.range(5, 5.8)),
        (r.brave = n ? 0.02 : 0.12),
        r
      );
    }
    case `auntie`: {
      let n = WT(e, t, !0);
      return (
        (n.height = t.range(0.87, 0.94)),
        (n.width = t.range(1.06, 1.18)),
        (n.belly = t.range(0.25, 0.6)),
        (n.acc = Q(t.chance(0.8) ? 2 : 0)),
        (n.hair = t.pick(TT)),
        (n.top = HT(t, t.chance(0.75) ? t.pick(VT) : t.pick(NT), 0.08)),
        (n.bottom = t.pick([
          2039583, 2435130, 3816e3, 4862032, 2763306, 5918792,
        ])),
        (n.shoes = t.pick([1710618, 4864560, 14209224, 6965850])),
        (n.cloth = +!!t.chance(0.6)),
        t.chance(0.3) && (n.cloth += ew),
        t.chance(0.18) && ((n.shoes = t.pick(jT)), (n.cloth += 18)),
        t.chance(0.55) &&
          ((n.acc |= Q(4)),
          (n.accA = t.pick([
            16744366, 7321599, 11111423, 1842204, 16765551, 8380608,
          ]))),
        t.chance(0.65) && (n.acc |= Q(17)),
        GT(t, n, 0.45),
        (n.walkSpeed = t.range(1.05, 1.3)),
        (n.runSpeed = t.range(3.2, 4)),
        (n.brave = 0.05),
        (n.parasol = t.chance(0.5)),
        n
      );
    }
    case `uncle`: {
      let n = WT(e, t, !1);
      ((n.height = t.range(0.94, 1.01)),
        (n.width = t.range(1.04, 1.14)),
        (n.belly = t.range(0.4, 1)),
        (n.skin = t.pick(xT)),
        (n.hair = t.chance(0.4) ? t.pick(wT) : t.pick(ST)));
      let r = t.next();
      r < 0.4
        ? ((n.top = t.pick([15921386, 15921386, 15262936])), (n.cloth = 2))
        : r < 0.7
          ? ((n.top = HT(
              t,
              t.pick([
                2765638, 6957610, 8026746, 3824202, 14209216, 4868714, 10123850,
                15921386,
              ]),
            )),
            (n.cloth = 10))
          : ((n.top = HT(
              t,
              t.pick([5921372, 3815996, 8022608, 2765638, 10132120, 6957610]),
            )),
            (n.cloth = t.chance(0.4) ? 9 : 1));
      let i = t.chance(0.6);
      return (
        (n.bottom = i
          ? t.pick(zT)
          : t.pick([3092791, 3814704, 4868672, 5988198])),
        i && (n.cloth += 3),
        t.chance(0.6)
          ? ((n.shoes = t.pick(jT)), (n.cloth += 18))
          : (n.shoes = t.pick(kT)),
        t.chance(0.3) &&
          ((n.acc |= Q(3)),
          (n.accA = t.pick([2765638, 15262936, 6957610, 3824186, 1710618]))),
        t.chance(0.2) && (n.acc |= Q(7)),
        GT(t, n, 0.15),
        (n.walkSpeed = t.range(1.1, 1.35)),
        (n.runSpeed = t.range(3.4, 4.2)),
        (n.brave = 0.4),
        (n.umbrellaAt = t.range(0.35, 0.9)),
        n
      );
    }
    case `elder`: {
      let n = t.chance(0.5),
        r = WT(e, t, n);
      return (
        (r.height = t.range(0.85, 0.93)),
        (r.stoop = t.range(0.35, 0.75)),
        (r.hair = t.pick(wT)),
        (r.acc = Q(n ? 2 : 0)),
        (r.top = HT(
          t,
          t.pick([
            7829626, 7034438, 13352351, 3818584, 9071194, 5925466, 10128026,
            15262420,
          ]),
        )),
        (r.bottom = t.pick([3815996, 4866616, 2764344, 5918792, 6972504])),
        (r.shoes = t.pick([1710618, 3812904, 4866104])),
        (r.cloth = +!!t.chance(0.4) + (t.chance(0.45) ? 9 : 0)),
        n && t.chance(0.35) && (r.cloth += ew),
        t.chance(0.2) && ((r.shoes = t.pick(jT)), (r.cloth += 18)),
        t.chance(0.35)
          ? (r.acc |= Q(19))
          : n && t.chance(0.35) && (r.acc |= Q(17)),
        t.chance(0.35) &&
          ((r.acc |= Q(n ? 4 : 3)),
          (r.accA = t.pick([13154458, 3816e3, 8030874, 15261904]))),
        t.chance(0.4) && (r.acc |= Q(7)),
        GT(t, r, 0.5),
        (r.walkSpeed = t.range(0.7, 0.95)),
        (r.runSpeed = t.range(1.8, 2.4)),
        (r.brave = 0.05),
        (r.parasol = n && t.chance(0.3)),
        r
      );
    }
    case `tourist`: {
      let n = t.chance(0.5),
        r = WT(e, t, n);
      return (
        t.chance(0.3) && (r.hair = t.pick(CT)),
        t.chance(0.12) &&
          (r.skin = t.pick([16113878, 15717058, 9067068, 6964272])),
        (r.top = t.chance(0.3)
          ? HT(
              t,
              t.pick([
                13777980, 15909424, 2072222, 15759914, 4881096, 9095242,
                15231642,
              ]),
            )
          : UT(t)),
        (r.cloth = 1),
        n && t.chance(0.5)
          ? KT(t, r, !1)
          : t.chance(0.5)
            ? ((r.bottom = t.pick(zT)), (r.cloth += 3))
            : (r.bottom = t.chance(0.6) ? t.pick(IT) : t.pick(RT)),
        t.chance(0.6)
          ? ((r.acc |= Q(8)),
            (r.accB = t.pick([
              2763310, 3824266, 13126202, 4876858, 14721072, 1908e3,
            ])))
          : t.chance(0.5) &&
            ((r.acc |= Q(22)),
            (r.accB = t.pick([1842206, 14208960, 7031347, 3824266]))),
        t.chance(0.45) && (r.acc |= Q(10)),
        t.chance(0.4) &&
          ((r.acc |= Q(3)),
          (r.accA = t.pick([16053490, 2765638, 13777980, 15259816, 1776413]))),
        t.chance(0.3) ? (r.acc |= Q(15)) : t.chance(0.3) && (r.acc |= Q(16)),
        t.chance(0.3) && (r.acc |= Q(7)),
        (r.walkSpeed = t.range(1, 1.25)),
        (r.brave = 0.05),
        r
      );
    }
    case `vendor`: {
      let n = t.chance(0.5),
        r = WT(e, t, n);
      return (
        n && (r.acc = Q(t.chance(0.5) ? 2 : 1)),
        (r.top = HT(
          t,
          t.pick([15921386, 3816e3, 9054762, 2771562, 15259816, 1776413]),
        )),
        (r.bottom = t.pick([3092791, 3814704, 1710620])),
        (r.cloth = 1),
        (r.acc |= Q(13)),
        (r.accB = t.pick([2832981, 11546672, 4025157, 15262936, 1710620])),
        (r.shoes = t.pick([1710618, 2974392, 15790320])),
        t.chance(0.5) &&
          ((r.acc |= Q(n ? 4 : 3)),
          (r.accA = t.pick([16053490, 1710618, 12595248]))),
        GT(t, r, 0.4),
        (r.brave = 0.2),
        (r.walkSpeed = t.range(1, 1.3)),
        r
      );
    }
    case `delivery`: {
      let n = WT(e, t, t.chance(0.15)),
        r = t.chance(0.55) ? 14168698 : 2073434;
      return (
        (n.top = r),
        (n.bottom = t.pick([1710620, 3092791, 2765638])),
        (n.shoes = t.pick([1710618, 15724527, 2974392])),
        (n.acc = Q(5) | Q(9) | (n.female ? Q(1) : Q(0))),
        (n.accA = r),
        (n.cloth = +!!t.chance(0.3)),
        t.chance(0.4) && (n.acc |= Q(16)),
        GT(t, n, 0.35),
        (n.walkSpeed = t.range(1.55, 1.8)),
        (n.runSpeed = t.range(5, 5.6)),
        (n.brave = 0.2),
        (n.umbrellaAt = 2),
        n
      );
    }
    case `monk`: {
      let n = WT(e, t, t.chance(0.4));
      return (
        (n.acc = Q(12)),
        (n.hair = n.skin),
        (n.top = t.pick([9077362, 10185530, 5918788, 8022602])),
        (n.bottom = n.top),
        (n.shoes = t.pick([3815994, 5917242])),
        (n.cloth = 0),
        (n.walkSpeed = t.range(0.9, 1.1)),
        (n.runSpeed = 3.5),
        (n.brave = 0),
        (n.umbrellaAt = t.range(0.25, 0.5)),
        (n.accA = t.pick([5918788, 2763310, 10185530])),
        n
      );
    }
    case `worshipper`: {
      let n = t.chance(0.65),
        r = WT(e, t, n);
      return (
        t.chance(0.4) &&
          ((r.stoop = t.range(0.2, 0.45)),
          (r.hair = t.pick(wT)),
          (r.height = t.range(0.87, 0.95))),
        n && (r.acc = Q(t.chance(0.5) ? 2 : 1)),
        (r.top = HT(
          t,
          t.pick([15262936, 9079436, 3818584, 12081754, 7034438, 15921386]),
        )),
        (r.bottom = t.pick([2763310, 3814704, 4866616])),
        (r.shoes = t.pick(kT)),
        (r.cloth = +!!t.chance(0.5)),
        (r.acc |= Q(21)),
        GT(t, r, 0.3),
        (r.walkSpeed = t.range(0.95, 1.2)),
        (r.brave = 0.02),
        r
      );
    }
  }
}
function YT(e) {
  let t = e.chance(0.5),
    n = WT(`student`, e, t);
  ((n.height = e.range(0.6, 0.7)), (n.width = e.range(0.84, 0.92)));
  let r = t && e.chance(0.6);
  return (
    (n.acc = Q(+!!r) | Q(8)),
    e.chance(0.75) && ((n.acc |= Q(3)), (n.accA = 16172054)),
    (n.top = e.pick([16053490, 16053490, 3828400, 15919312])),
    (n.bottom = e.pick([2042436, 2767466, 1710620])),
    (n.cloth = 4 + 576 * (r ? e.pick([0, 1]) : n.acc & Q(3) ? 2 : 0)),
    (n.accB = e.pick([14696490, 2781392, 15769632, 13650570, 3186784])),
    (n.shoes = e.pick([15921906, 14700624, 3829952])),
    (n.walkSpeed = e.range(1.1, 1.3)),
    (n.runSpeed = e.range(3.6, 4.2)),
    (n.brave = 0),
    (n.umbrellaAt = e.range(0.2, 0.5)),
    (n.hp = 45),
    n
  );
}
