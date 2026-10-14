// tokyo/assets/actors-Bnj6Q1ad 77 — style
// Lines 36434-36767 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function Xy(e, t, n = Gy) {
  let r = [],
    i = e !== `low`,
    a = t >>> 0 || 7,
    o = () => (a = (a * 1664525 + 1013904223) >>> 0) / 4294967296;
  for (let e of n) {
    let t = i ? e.n : 1,
      n = typeof e.base == `string` ? en.find((t) => t.id === e.base) : e.base;
    if (n)
      for (let i = 0; i < t; i++) {
        let t = 1e3 + r.length * 7919 + i * 131,
          a = nn(t, n);
        (e.keepHair && (a.hair = { ...n.hair }),
          (e.keepHair || typeof e.base != `string`) &&
            (e.top || (a.top.color = n.top.color),
            e.bottom || (a.bottom.color = n.bottom.color)));
        let s =
          e.role === `uncle` ||
          e.role === `delivery` ||
          e.role === `jogger` ||
          e.role === `vendor`;
        if (
          ((a.skin = Jy(o(), s, e.skins)),
          e.hair &&
            (a.hair = {
              ...a.hair,
              style: e.hair[Math.floor(o() * e.hair.length)],
            }),
          e.hairColors &&
            (a.hair = {
              ...a.hair,
              color: e.hairColors[Math.floor(o() * e.hairColors.length)],
              color2: void 0,
            }),
          (a.acc = a.acc.filter((e) => !Yy.has(e.kind))),
          e.keepAcc)
        ) {
          r.push(Zy(r.length, e, a));
          continue;
        }
        let c = a.acc.some((e) => e.kind === `mask`),
          l = o() < (e.mask ?? 0);
        (l &&
        !c &&
        !a.acc.some((t) => t.kind === `helmet` && e.role !== `delivery`)
          ? a.acc.push({
              kind: `mask`,
              color:
                o() < 0.7
                  ? 15660022
                  : [11064562, 16107992, 2763310, 14215408][
                      Math.floor(o() * 4)
                    ],
            })
          : !l &&
            c &&
            o() < 0.5 &&
            e.role !== `rain` &&
            (a.acc = a.acc.filter((e) => e.kind !== `mask`)),
          i > 0 &&
            o() < 0.35 &&
            (a.acc = a.acc.filter((e) => e.kind !== `glasses`)),
          r.push(Zy(r.length, e, a)));
      }
  }
  return r;
}
function Zy(e, t, n) {
  let r =
      n.bottom.style === `skirt` ||
      n.bottom.style === `pencil` ||
      n.bottom.style === `longskirt` ||
      n.bottom.style === `robe`,
    i = $y(n),
    a = 0,
    o = n.top.pattern ?? `solid`;
  (o === `stripes`
    ? (a += 36)
    : o === `floral` || o === `dots`
      ? (a += t_)
      : (o === `plaid` || o === `check`) && (a += 36 + t_),
    (n.bottom.style === `longskirt` || n.bottom.style === `robe`) && (a += i_));
  let s = n.acc.some((e) => e.kind === `helmet`);
  return {
    id: e,
    role: t.role,
    desc: n,
    weight: t.weight ?? 1,
    scale: n.height / 1.72,
    female: n.sex === `f`,
    top: t.top ?? null,
    bottom: r && t.bottom && t.bottom !== Py ? Ny : (t.bottom ?? null),
    outer: n.outer ? (t.outer ?? null) : null,
    suit: !!t.suit,
    cloth: a,
    canRide: !r && n.outer?.style !== `poncho`,
    noUmbrella: s || n.outer?.style === `poncho`,
    rightBusy: n.acc.some((e) => e.kind === `fan`),
    far: i,
    ...(t.zones ? { zones: t.zones } : null),
    ...(t.lines ? { lines: t.lines } : null),
    ...(t.avatars ? { avatars: t.avatars } : null),
  };
}
var Qy = new Set([
  `buzz`,
  `fade`,
  `sidepart`,
  `twoblock`,
  `bowl`,
  `spiky`,
  `undercut`,
  `balding`,
]);
function $y(e) {
  let t = e.sex === `f`,
    n = e.age === `elder`,
    r = 0,
    i = 0,
    a = e.hair.style;
  a === `bald`
    ? (r |= 0)
    : Qy.has(a) || (a === `elder` && !t)
      ? ((r |= Y(0)),
        (i +=
          576 *
          (a === `buzz` || a === `balding`
            ? 2
            : a === `sidepart` || a === `undercut`
              ? 3
              : +(a === `twoblock`))))
      : a === `bun` || a === `perm` || a === `elder`
        ? (r |= Y(2))
        : ((r |= Y(1)),
          (i += 576 * (a === `bob` ? 1 : a === `bangs` ? 0 : 2)),
          a === `ponytail` && (i += 144));
  let o = 0,
    s = 15660022;
  for (let t of e.acc)
    switch (t.kind) {
      case `cap`:
      case `bucket`:
      case `policeCap`:
        ((r |= Y(3)),
          (o = t.color ?? (t.kind === `policeCap` ? 1844792 : 15921904)));
        break;
      case `visor`:
        ((r |= Y(4)), (o = t.color ?? 14834572));
        break;
      case `helmet`:
        ((r |= Y(5)), (o = t.color ?? 2763824));
        break;
      case `mask`:
        ((r |= Y(6)), (s = t.color ?? 15660022));
        break;
      case `glasses`:
      case `sunglasses`:
        r |= Y(7);
        break;
      case `backpack`:
      case `schoolbag`:
        ((r |= Y(8)), r & Y(6) || (s = t.color ?? 2961203));
        break;
      case `deliveryBox`:
        ((r |= Y(9)), (o ||= t.color ?? 15217276));
        break;
      case `randoseru`:
        ((r |= Y(8)), r & Y(6) || (s = t.color ?? 10688554));
        break;
      case `maidApron`:
      case `apron`:
        ((r |= Y(13)), r & Y(6) || (s = t.color ?? 2767450));
        break;
      case `shoulderBag`:
      case `tote`:
        ((r |= Y(22)), r & (Y(6) | Y(8) | Y(13)) || (s = t.color ?? 2760988));
    }
  let c = e.bottom.style;
  c === `robe`
    ? ((r |= Y(11)), (i += 3 + i_))
    : c === `skirt` || c === `pencil` || c === `longskirt`
      ? ((r |= Y(11)), (i += 3), c === `longskirt` && (i += i_))
      : c === `shorts`
        ? (i += 3)
        : c === `wide` && (i += r_);
  let l =
      e.top.sleeve ??
      {
        tee: `short`,
        polo: `short`,
        shirt: `long`,
        uniform: `short`,
        blouse: `short`,
        tank: `none`,
        hoodie: `long`,
        sweater: `long`,
        police: `long`,
        rider: `long`,
        sailor: `long`,
        yukata: `elbow`,
        none: `none`,
      }[e.top.style],
    u = e.outer
      ? (e.outer.sleeve ??
        (e.outer.style === `vest` || e.outer.style === `poncho`
          ? `none`
          : `long`))
      : `none`;
  ((i +=
    u === `long` || l === `long` ? 0 : l === `none` && u === `none` ? 2 : 1),
    (e.top.style === `shirt` ||
      e.top.style === `polo` ||
      e.top.style === `uniform` ||
      e.top.style === `police`) &&
      (i += 9),
    (e.shoes.style === `slipper` || e.shoes.style === `sandal`) && (i += 18));
  let d =
    !!e.outer &&
    (e.outer.closed ||
      e.outer.style === `poncho` ||
      e.outer.style === `vest` ||
      e.outer.style === `blazer` ||
      e.outer.style === `jacket`);
  return {
    female: +!!t,
    width: e.build === `heavy` ? 1.12 : e.build === `slim` ? 0.95 : 1,
    belly: e.build === `heavy` ? 0.55 : n && !t ? 0.3 : 0,
    stoop: e.stoop ?? (n ? 0.45 : 0),
    skin: e.skin,
    hair: e.hair.color,
    shoes: e.shoes.color,
    hat: o,
    accB: s,
    bits: r,
    cloth: i,
    torsoIsOuter: d,
  };
}
var eb = class {
  defs;
  pools = new Map();
  cum = new Map();
  zoned;
  zone = null;
  zoneCum = new Map();
  constructor(e) {
    this.defs = e;
    for (let t of e) {
      let e = this.pools.get(t.role);
      (e || this.pools.set(t.role, (e = [])), e.push(t));
    }
    let t = (e, t, n) => {
      let r = this.pools.get(t);
      if (!r) return;
      let i = this.pools.get(e);
      i || this.pools.set(e, (i = []));
      for (let e of r) i.push({ ...e, weight: e.weight * n });
    };
    (t(`worshipper`, `elder`, 0.6), t(`worshipper`, `auntie`, 0.4));
    for (let [e, t] of this.pools) {
      let n = 0;
      this.cum.set(
        e,
        t.map((e) => (n += e.weight)),
      );
    }
    this.zoned = e.some((e) => !!e.zones);
  }
  cumIn(e, t) {
    let n = this.zoneCum.get(e);
    n || this.zoneCum.set(e, (n = new Map()));
    let r = n.get(t);
    if (r === void 0) {
      let i = this.pools.get(t),
        a = 0;
      ((r = i
        ? i.map(
            (t) =>
              (a +=
                t.weight *
                (t.zones ? (t.zones[e] ?? t.zones.default ?? 1) : 1)),
          )
        : null),
        a > 0 || (r = null),
        n.set(t, r));
    }
    return r;
  }
  has(e) {
    return this.pools.has(e);
  }
  pick(e, t, n = !1) {
    let r = this.pools.get(e) ?? this.pools.get(`office`) ?? [this.defs[0]],
      i =
        (this.zoned && this.zone !== null && this.pools.has(e)
          ? this.cumIn(this.zone, e)
          : null) ??
        this.cum.get(e) ??
        this.cum.get(`office`);
    for (let e = 0; e < 6; e++) {
      let e = t.next() * i[i.length - 1],
        a = 0;
      for (; a < i.length - 1 && i[a] < e;) a++;
      let o = r[a];
      if (!n || o.canRide) return o;
    }
    return r.find((e) => !n || e.canRide) ?? this.defs[0];
  }
};
function tb(e, t, n) {
  let r = e.desc;
  return (
    (n.top = e.top ? nb(t, t.pick(e.top)) : r.top.color),
    (n.outer = r.outer
      ? e.outer
        ? nb(t, t.pick(e.outer))
        : r.outer.color
      : 0),
    (n.bottom =
      e.suit && r.outer
        ? n.outer
        : e.bottom
          ? nb(t, t.pick(e.bottom))
          : r.bottom.color),
    n
  );
}
function nb(e, t, n = 0.06) {
  let r = 1 + (e.next() * 2 - 1) * n,
    i = Math.min(255, Math.round(((t >> 16) & 255) * r)),
    a = Math.min(255, Math.round(((t >> 8) & 255) * r)),
    o = Math.min(255, Math.round((t & 255) * r));
  return (i << 16) | (a << 8) | o;
}
