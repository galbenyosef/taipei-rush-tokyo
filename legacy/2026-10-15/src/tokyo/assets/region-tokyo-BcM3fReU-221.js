// tokyo/assets/region-tokyo-BcM3fReU 221 — inset
// Lines 90805-91020 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function PX(e, t) {
  return (n, r) => {
    let i = 0,
      a = (e, t, a, o, s, c, l) => {
        let u = (e + a) / 2,
          d = (t + o) / 2,
          f = a - e,
          p = o - t;
        if (f < 2 || p < 2 || s < 2) return;
        let m = r(u, d),
          h = NX[c % NX.length],
          g = 0.9 + ((c >>> 5) % 20) / 100;
        (n.setOwnerBox(u, m + s / 2, d, f / 2, s / 2, p / 2),
          l
            ? n.setColor(0.36 * g, 0.42 * g, 0.47 * g)
            : n.setColor(h[0] * g, h[1] * g, h[2] * g),
          n.setEmit(0, 0, 1 + (c % 998)));
        let _ = dr(i, 4);
        (n.box(
          u,
          m + 0.1,
          d,
          f - 2 * _.inset,
          s + _.dh,
          p - 2 * _.inset,
          0,
          55,
        ),
          n.noEmit(),
          i++);
      },
      o = [],
      s = e.blocks.map((n) => Yb(e, n, t())),
      c = 0;
    for (let e of s) for (let t of e) t.h > AX && c++;
    let l = c > MX ? jX : AX;
    for (let e of s) {
      if (!e.length) continue;
      let t = 1 / 0,
        n = 1 / 0,
        r = -1 / 0,
        i = -1 / 0,
        s = 0;
      o.length = 0;
      for (let c of e) {
        if (c.h > l) {
          a(c.x0, c.z0, c.x1, c.z1, c.h, c.seed, c.h > 60);
          continue;
        }
        (o.push(c.h),
          c.x0 < t && (t = c.x0),
          c.z0 < n && (n = c.z0),
          c.x1 > r && (r = c.x1),
          c.z1 > i && (i = c.z1),
          (s = c.seed));
      }
      o.length &&
        (o.sort((e, t) => e - t), a(t, n, r, i, o[o.length >> 1], s, !1));
    }
    for (let t of XL(e)) {
      let e = (t.x0 + t.x1) / 2,
        r = (t.z0 + t.z1) / 2,
        a = Math.abs(t.x1 - t.x0),
        o = Math.abs(t.z1 - t.z0),
        s = t.y1 - t.y0;
      if (a < 1 || o < 1 || s < 1) continue;
      (n.setOwnerBox(e, t.y0 + s / 2, r, a / 2, s / 2, o / 2),
        n.setColor(t.rgb[0], t.rgb[1], t.rgb[2]),
        t.lit &&
          n.setEmit(0, 0, 1 + ((Math.round(e * 7 + r * 13) >>> 0) % 998)));
      let c = dr(i, 5);
      (n.box(e, t.y0, r, a - 2 * c.inset, s + c.dh, o - 2 * c.inset, 0, 55),
        n.noEmit(),
        i++);
    }
    return i;
  };
}
function FX(e) {
  let t = Ed(e.time, e.params),
    n = new $J(e.region.env, e.region.utcOffsetHours, () => e.time.date),
    r = tY(),
    i = iY(),
    a = null,
    o = null,
    s = { farTris: 0, farMs: 0, massing: 0, parts: {} };
  return {
    stats: s,
    season: t,
    atmos: n,
    sky: r,
    water: i,
    terrain: { height: hY, forest: gY, water: fY },
    cityLod: PX(e.plan, () => e.districts ?? null),
    props(t, n) {
      let r = performance.now(),
        i = t.triangleCount,
        a = i,
        o = (e) => {
          ((s.parts[e] = t.triangleCount - a), (a = t.triangleCount));
        };
      (nX(t, n),
        bY(t, n),
        o(`towers`),
        OY(t, n),
        o(`palace`),
        kY(t, n),
        AY(t, n),
        o(`asakusa+ryogoku`),
        jY(t, n),
        o(`towerGroups`),
        (s.massing = dX(t, n, e.plan.dataset.seed)),
        o(`massing`),
        SX(t),
        o(`plateau`),
        (s.farTris = t.triangleCount - i),
        (s.farMs = performance.now() - r));
    },
    statics() {
      (TX(e.statics), Gg(e.statics, e.plan));
    },
    ready(e) {
      ((a = e),
        (o = new kX(e)),
        typeof window < `u` &&
          (window.__tokyoEnv = {
            stats: s,
            season: t,
            sun: n,
            get lights() {
              return o?.design;
            },
          }));
    },
    update() {
      if (!a) return;
      let n = t();
      (r.update(a.atmos, a.weather, e.env.hour, n.winter),
        i.update(n),
        o?.update(a.atmos.night, e.env.hour, e.time.date));
    },
  };
}
var IX = 1024,
  LX = (e, t, n, r) => ({
    u0: e / IX,
    u1: (e + n) / IX,
    v1: 1 - t / IX,
    v0: 1 - (t + r) / IX,
  }),
  RX = { white: 0, green: 1, moped: 2, kei: 3 },
  zX = {
    plateKeiBiz: LX(0, 288, 128, 56),
    andon: [
      LX(512, 64, 128, 48),
      LX(640, 64, 128, 48),
      LX(768, 64, 128, 48),
      LX(896, 64, 128, 48),
    ],
    andonKojin: LX(512, 112, 96, 64),
    taxiVacant: LX(608, 112, 112, 44),
    taxiFare: LX(720, 112, 112, 44),
    taxiDoor: [
      LX(512, 176, 320, 48),
      LX(512, 224, 320, 48),
      LX(512, 272, 320, 48),
      LX(512, 320, 320, 48),
    ],
    policeDoor: LX(832, 176, 192, 64),
    policeWord: LX(832, 240, 192, 48),
    policeBar: LX(832, 288, 192, 40),
    ambWord: LX(0, 440, 360, 64),
    ambFront: LX(360, 440, 160, 56),
    ambOrg: LX(520, 440, 248, 40),
    garbageWord: LX(0, 512, 360, 64),
    garbageNotice: LX(0, 580, 420, 40),
    courierA: LX(360, 512, 400, 64),
    courierB: LX(0, 624, 400, 64),
    contractor: LX(400, 624, 320, 56),
    keiTruckDoor: LX(0, 690, 320, 48),
    taxiCards: LX(768, 380, 256, 32),
    checker: LX(768, 416, 256, 22),
    busInterior: LX(768, 896, 128, 96),
  },
  BX = `sans-serif`;
function VX(e) {
  BX = e;
}
var HX = `"Helvetica Neue", Helvetica, Arial, sans-serif`,
  UX = `"Arial Black", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  WX = `"DIN Condensed", "Arial Narrow", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  GX = !1;
function KX() {
  if (!GX) return;
  let e = ree(),
    [t, n] = ye(1024, 1024);
  (JX(n),
    (e.image = t),
    (e.userData.freed = void 0),
    (e.onUpdate = () => {
      ((e.onUpdate = null), (t.width = 1), (t.height = 1));
    }),
    (e.needsUpdate = !0));
}
function qX(e) {
  try {
    let t = document.fonts;
    if (!t?.addEventListener) return;
    let n = (r) => {
      (r.fontfaces ?? []).some((t) =>
        e.includes(t.family.replace(/["']/g, ``)),
      ) && (t.removeEventListener(`loadingdone`, n), KX());
    };
    t.addEventListener(`loadingdone`, n);
  } catch {}
}
