// tokyo/assets/actors-qKVitB-C 33 — onupdate
// Lines 15269-15389 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function Bu(e, t, n, r, i) {
  let a = (e, t, n, r) => {
    if (!isFinite(n)) return e;
    let i = [],
      a = (e) => (r ? e[t] >= n : e[t] <= n);
    for (let r = 0; r < e.length; r++) {
      let o = e[r],
        s = e[(r + 1) % e.length],
        c = a(o),
        l = a(s);
      if ((c && i.push(o), c !== l)) {
        let e = (n - o[t]) / (s[t] - o[t]);
        i.push(
          t === 0
            ? [n, o[1] + (s[1] - o[1]) * e]
            : [o[0] + (s[0] - o[0]) * e, n],
        );
      }
    }
    return i;
  };
  return a(a(a(a(e, 0, t, !0), 0, n, !1), 1, r, !0), 1, i, !1);
}
var Vu = {},
  Hu = !1;
function Uu(e) {
  ((Vu = e), (Hu = !1));
}
function Wu() {
  return Vu;
}
function Gu() {
  return !Hu && ((Hu = !0), !0);
}
var Ku = 1024,
  qu = (e, t, n, r) => ({
    u0: e / Ku,
    u1: (e + n) / Ku,
    v1: 1 - t / Ku,
    v0: 1 - (t + r) / Ku,
  }),
  Ju = 128 / Ku,
  Yu = { car: 0, commercial: 1, scooter: 2, taxi: 3 },
  Xu = [
    [`307`, `往 板橋`],
    [`262`, `往 民生社區`],
    [`0東`, `往 市府`],
    [`綠1`, `往 捷運站`],
    [`紅25`, `往 劍潭`],
    [`藍5`, `往 市政府`],
    [`棕9`, `往 松山機場`],
    [`604`, `往 板橋`],
  ],
  Zu = 760,
  Qu = 32,
  $u = Qu / 1024,
  ed = {
    plate: (e) => qu(0, 64 + e * 56, 128, 56),
    taxiRoof: qu(512, 64, 128, 44),
    taxiRoofSide: qu(640, 64, 160, 44),
    taxiVacant: qu(800, 64, 112, 44),
    taxiDoor: qu(512, 112, 320, 56),
    busFront: qu(0, Zu, 320, Qu),
    busSide: qu(320, Zu, 320, Qu),
    busRear: qu(640, Zu, 128, Qu),
    busLivery: qu(0, 372, 512, 60),
    busLowFloor: qu(512, 372, 256, 48),
    police: qu(0, 440, 360, 64),
    police110: qu(360, 440, 120, 64),
    policeBadge: qu(512, 176, 128, 160),
    policeUnit: qu(640, 176, 192, 152),
    policeRear: qu(832, 176, 192, 64),
    policeHood: qu(832, 248, 192, 80),
    ambulance: qu(480, 440, 300, 64),
    ambulanceFront: qu(0, 512, 360, 56),
    starOfLife: qu(360, 512, 64, 64),
    garbage: qu(430, 512, 300, 64),
    recycle: qu(0, 584, 420, 60),
    vanLogo: qu(430, 584, 330, 96),
    truckDoor: qu(0, 690, 320, 64),
    boxPink: qu(768, 512, 128, 112),
    boxGreen: qu(896, 512, 128, 112),
    scooterBrand: qu(330, 690, 160, 40),
    sportsStripe: qu(500, 690, 64, 64),
    grille: qu(580, 690, 128, 48),
    busRoute: qu(720, 690, 160, 40),
    wolfBadge: qu(64, 2, 160, 56),
    bike125: qu(224, 2, 96, 56),
    typhoon: qu(320, 2, 240, 56),
    bikeStripe: qu(560, 2, 224, 56),
    policeStripe: qu(784, 2, 240, 56),
    swat: qu(832, 760, 192, 64),
    swatRear: qu(832, 832, 192, 48),
  },
  td = null;
function nd() {
  if (td) return td;
  let [e, t] = ut(Ku, Ku);
  t.clearRect(0, 0, Ku, Ku);
  let n = Wu().paintAtlas;
  return (
    n ? n(t, Ku) : rd(t),
    (td = new je(e)),
    (td.colorSpace = f),
    (td.premultiplyAlpha = !0),
    (td.anisotropy = 8),
    (td.generateMipmaps = !0),
    (td.minFilter = me),
    (td.magFilter = Se),
    (td.needsUpdate = !0),
    (td.onUpdate = () => {
      if (!td) return;
      td.onUpdate = null;
      let e = td.image;
      ((td.userData.freed = `${e.width}x${e.height}`),
        (e.width = 1),
        (e.height = 1));
    }),
    td
  );
}
