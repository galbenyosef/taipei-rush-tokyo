// tokyo/assets/actors-Bnj6Q1ad 21 — onupdate
// Lines 11475-11570 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function lc(e) {
  ((sc = e), (cc = !1));
}
function uc() {
  return sc;
}
function dc() {
  return !cc && ((cc = !0), !0);
}
var fc = 1024,
  pc = (e, t, n, r) => ({
    u0: e / fc,
    u1: (e + n) / fc,
    v1: 1 - t / fc,
    v0: 1 - (t + r) / fc,
  }),
  mc = 128 / fc,
  hc = { car: 0, commercial: 1, scooter: 2, taxi: 3 },
  gc = [
    [`307`, `往 板橋`],
    [`262`, `往 民生社區`],
    [`0東`, `往 市府`],
    [`綠1`, `往 捷運站`],
    [`紅25`, `往 劍潭`],
    [`藍5`, `往 市政府`],
    [`棕9`, `往 松山機場`],
    [`604`, `往 板橋`],
  ],
  _c = 760,
  vc = 32,
  yc = vc / 1024,
  bc = {
    plate: (e) => pc(0, 64 + e * 56, 128, 56),
    taxiRoof: pc(512, 64, 128, 44),
    taxiRoofSide: pc(640, 64, 160, 44),
    taxiVacant: pc(800, 64, 112, 44),
    taxiDoor: pc(512, 112, 320, 56),
    busFront: pc(0, _c, 320, vc),
    busSide: pc(320, _c, 320, vc),
    busRear: pc(640, _c, 128, vc),
    busLivery: pc(0, 372, 512, 60),
    busLowFloor: pc(512, 372, 256, 48),
    police: pc(0, 440, 360, 64),
    police110: pc(360, 440, 120, 64),
    policeBadge: pc(512, 176, 128, 160),
    policeUnit: pc(640, 176, 192, 152),
    policeRear: pc(832, 176, 192, 64),
    policeHood: pc(832, 248, 192, 80),
    ambulance: pc(480, 440, 300, 64),
    ambulanceFront: pc(0, 512, 360, 56),
    starOfLife: pc(360, 512, 64, 64),
    garbage: pc(430, 512, 300, 64),
    recycle: pc(0, 584, 420, 60),
    vanLogo: pc(430, 584, 330, 96),
    truckDoor: pc(0, 690, 320, 64),
    boxPink: pc(768, 512, 128, 112),
    boxGreen: pc(896, 512, 128, 112),
    scooterBrand: pc(330, 690, 160, 40),
    sportsStripe: pc(500, 690, 64, 64),
    grille: pc(580, 690, 128, 48),
    busRoute: pc(720, 690, 160, 40),
    wolfBadge: pc(64, 2, 160, 56),
    bike125: pc(224, 2, 96, 56),
    typhoon: pc(320, 2, 240, 56),
    bikeStripe: pc(560, 2, 224, 56),
    policeStripe: pc(784, 2, 240, 56),
    swat: pc(832, 760, 192, 64),
    swatRear: pc(832, 832, 192, 48),
  },
  xc = null;
function Sc() {
  if (xc) return xc;
  let [e, t] = mt(fc, fc);
  t.clearRect(0, 0, fc, fc);
  let n = uc().paintAtlas;
  return (
    n ? n(t, fc) : Cc(t),
    (xc = new Oe(e)),
    (xc.colorSpace = j),
    (xc.premultiplyAlpha = !0),
    (xc.anisotropy = 8),
    (xc.generateMipmaps = !0),
    (xc.minFilter = pe),
    (xc.magFilter = be),
    (xc.needsUpdate = !0),
    (xc.onUpdate = () => {
      if (!xc) return;
      xc.onUpdate = null;
      let e = xc.image;
      ((xc.userData.freed = `${e.width}x${e.height}`),
        (e.width = 1),
        (e.height = 1));
    }),
    xc
  );
}
