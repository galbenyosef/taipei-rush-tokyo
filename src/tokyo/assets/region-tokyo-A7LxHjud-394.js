// tokyo/assets/region-tokyo-A7LxHjud 394 — addeventlistener
// Lines 142800-142872 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
var _0 = 1024,
  v0 = (e, t, n, r) => ({
    u0: e / _0,
    u1: (e + n) / _0,
    v1: 1 - t / _0,
    v0: 1 - (t + r) / _0,
  }),
  y0 = { white: 0, green: 1, moped: 2, kei: 3 },
  b0 = {
    plateKeiBiz: v0(0, 288, 128, 56),
    andon: [
      v0(512, 64, 128, 48),
      v0(640, 64, 128, 48),
      v0(768, 64, 128, 48),
      v0(896, 64, 128, 48),
    ],
    andonKojin: v0(512, 112, 96, 64),
    taxiVacant: v0(608, 112, 112, 44),
    taxiFare: v0(720, 112, 112, 44),
    taxiDoor: [
      v0(512, 176, 320, 48),
      v0(512, 224, 320, 48),
      v0(512, 272, 320, 48),
      v0(512, 320, 320, 48),
    ],
    policeDoor: v0(832, 176, 192, 64),
    policeWord: v0(832, 240, 192, 48),
    policeBar: v0(832, 288, 192, 40),
    ambWord: v0(0, 440, 360, 64),
    ambFront: v0(360, 440, 160, 56),
    ambOrg: v0(520, 440, 248, 40),
    garbageWord: v0(0, 512, 360, 64),
    garbageNotice: v0(0, 580, 420, 40),
    courierA: v0(360, 512, 400, 64),
    courierB: v0(0, 624, 400, 64),
    contractor: v0(400, 624, 320, 56),
    keiTruckDoor: v0(0, 690, 320, 48),
    taxiCards: v0(768, 380, 256, 32),
    checker: v0(768, 416, 256, 22),
    busInterior: v0(768, 896, 128, 96),
  },
  x0 = `sans-serif`;
function _Fe(e) {
  x0 = e;
}
var S0 = `"Helvetica Neue", Helvetica, Arial, sans-serif`,
  C0 = `"Arial Black", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  vFe = `"DIN Condensed", "Arial Narrow", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  w0 = !1;
function yFe() {
  if (!w0) return;
  let e = vee(),
    [t, n] = be(1024, 1024);
  (T0(n),
    (e.image = t),
    (e.userData.freed = void 0),
    (e.onUpdate = () => {
      ((e.onUpdate = null), (t.width = 1), (t.height = 1));
    }),
    (e.needsUpdate = !0));
}
function bFe(e) {
  try {
    let t = document.fonts;
    if (!t?.addEventListener) return;
    let n = (r) => {
      (r.fontfaces ?? []).some((t) =>
        e.includes(t.family.replace(/["']/g, ``)),
      ) && (t.removeEventListener(`loadingdone`, n), yFe());
    };
    t.addEventListener(`loadingdone`, n);
  } catch {}
}
