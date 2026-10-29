// tokyo/assets/actors-bknSEpf2 40 — onupdate
// Lines 13904-13999 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Rd(e) {
  ((Id = e), (Ld = !1));
}
function zd() {
  return Id;
}
function Bd() {
  return !Ld && ((Ld = !0), !0);
}
var Vd = 1024,
  Hd = (e, t, n, r) => ({
    u0: e / Vd,
    u1: (e + n) / Vd,
    v1: 1 - t / Vd,
    v0: 1 - (t + r) / Vd,
  }),
  Ud = 128 / Vd,
  Wd = { car: 0, commercial: 1, scooter: 2, taxi: 3 },
  Gd = [
    [`307`, `往 板橋`],
    [`262`, `往 民生社區`],
    [`0東`, `往 市府`],
    [`綠1`, `往 捷運站`],
    [`紅25`, `往 劍潭`],
    [`藍5`, `往 市政府`],
    [`棕9`, `往 松山機場`],
    [`604`, `往 板橋`],
  ],
  Kd = 760,
  qd = 32,
  Jd = qd / 1024,
  Yd = {
    plate: (e) => Hd(0, 64 + e * 56, 128, 56),
    taxiRoof: Hd(512, 64, 128, 44),
    taxiRoofSide: Hd(640, 64, 160, 44),
    taxiVacant: Hd(800, 64, 112, 44),
    taxiDoor: Hd(512, 112, 320, 56),
    busFront: Hd(0, Kd, 320, qd),
    busSide: Hd(320, Kd, 320, qd),
    busRear: Hd(640, Kd, 128, qd),
    busLivery: Hd(0, 372, 512, 60),
    busLowFloor: Hd(512, 372, 256, 48),
    police: Hd(0, 440, 360, 64),
    police110: Hd(360, 440, 120, 64),
    policeBadge: Hd(512, 176, 128, 160),
    policeUnit: Hd(640, 176, 192, 152),
    policeRear: Hd(832, 176, 192, 64),
    policeHood: Hd(832, 248, 192, 80),
    ambulance: Hd(480, 440, 300, 64),
    ambulanceFront: Hd(0, 512, 360, 56),
    starOfLife: Hd(360, 512, 64, 64),
    garbage: Hd(430, 512, 300, 64),
    recycle: Hd(0, 584, 420, 60),
    vanLogo: Hd(430, 584, 330, 96),
    truckDoor: Hd(0, 690, 320, 64),
    boxPink: Hd(768, 512, 128, 112),
    boxGreen: Hd(896, 512, 128, 112),
    scooterBrand: Hd(330, 690, 160, 40),
    sportsStripe: Hd(500, 690, 64, 64),
    grille: Hd(580, 690, 128, 48),
    busRoute: Hd(720, 690, 160, 40),
    wolfBadge: Hd(64, 2, 160, 56),
    bike125: Hd(224, 2, 96, 56),
    typhoon: Hd(320, 2, 240, 56),
    bikeStripe: Hd(560, 2, 224, 56),
    policeStripe: Hd(784, 2, 240, 56),
    swat: Hd(832, 760, 192, 64),
    swatRear: Hd(832, 832, 192, 48),
  },
  Xd = null;
function Zd() {
  if (Xd) return Xd;
  let [e, t] = ht(Vd, Vd);
  t.clearRect(0, 0, Vd, Vd);
  let n = zd().paintAtlas;
  return (
    n ? n(t, Vd) : Qd(t),
    (Xd = new ke(e)),
    (Xd.colorSpace = T),
    (Xd.premultiplyAlpha = !0),
    (Xd.anisotropy = 8),
    (Xd.generateMipmaps = !0),
    (Xd.minFilter = ue),
    (Xd.magFilter = de),
    (Xd.needsUpdate = !0),
    (Xd.onUpdate = () => {
      if (!Xd) return;
      Xd.onUpdate = null;
      let e = Xd.image;
      ((Xd.userData.freed = `${e.width}x${e.height}`),
        (e.width = 1),
        (e.height = 1));
    }),
    Xd
  );
}
