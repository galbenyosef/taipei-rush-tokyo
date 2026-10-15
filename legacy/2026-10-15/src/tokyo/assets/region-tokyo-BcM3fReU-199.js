// tokyo/assets/region-tokyo-BcM3fReU 199 — cols
// Lines 83072-83388 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function MG(e, t, n, r, i, a, o, s, c, l, u, d, f, p = !1) {
  if (s - o < 0.2) return;
  let m = e.n;
  for (let m = 0; m <= f; m++)
    for (let h = 0; h <= f; h++) {
      let g = r - a + (2 * a * h) / f,
        _ = o + ((s - o) * m) / f,
        v = ((g - r) ** 2 + (_ - i) ** 2) / (a * a),
        y = v >= 1 ? 0 : (1 - v) * (1 - v);
      e.setMaterial(u, 0, d * y, 1).setColor(ZW(l[0]), ZW(l[1]), ZW(l[2]));
      let b = t.axis === `x` ? g : t.at + n * _,
        x = t.axis === `x` ? t.at + n * _ : g;
      p
        ? e.vertex(b, c, x, 0, 1, 0, RW(b), RW(x))
        : e.vertex(b, c, x, 0, 1, 0, Kg.u, Kg.v);
    }
  let h = e.pos,
    g = h[m * 3],
    _ = h[m * 3 + 2],
    v = h[(m + 1) * 3],
    y = h[(m + 1) * 3 + 2],
    b = h[(m + f + 1) * 3],
    x = h[(m + f + 1) * 3 + 2],
    S = (y - _) * (b - g) - (v - g) * (x - _) > 0;
  for (let t = 0; t < f; t++)
    for (let n = 0; n < f; n++) {
      let r = m + t * (f + 1) + n;
      S
        ? e.tri(r, r + 1, r + f + 1).tri(r + 1, r + f + 2, r + f + 1)
        : e.tri(r, r + f + 1, r + 1).tri(r + 1, r + f + 1, r + f + 2);
    }
  e.setMaterial(0.6, 0, JW, YW).setColor(...QW);
}
var NG = 2048,
  PG = 1280,
  FG = (e, t, n, r) => ({ x: e, y: t, w: n, h: r }),
  IG = {
    white: FG(0, 0, 32, 32),
    blue: FG(0, 32, 16, 16),
    green: FG(16, 32, 16, 16),
    white2: FG(0, 48, 16, 16),
    vend0: FG(32, 0, 128, 256),
    vend1: FG(160, 0, 128, 256),
    vend2: FG(288, 0, 128, 256),
    vend3: FG(416, 0, 128, 256),
    ad0: FG(544, 0, 48, 224),
    ad1: FG(592, 0, 48, 224),
    ad2: FG(640, 0, 48, 224),
    ad3: FG(688, 0, 48, 224),
    ad4: FG(736, 0, 48, 224),
    tomare: FG(784, 0, 128, 128),
    noParking: FG(912, 0, 128, 128),
    noStopping: FG(1040, 0, 128, 128),
    speed30: FG(1168, 0, 128, 128),
    speed40: FG(1296, 0, 128, 128),
    speed50: FG(1424, 0, 128, 128),
    noEntry: FG(1552, 0, 128, 128),
    crossing: FG(1680, 0, 128, 128),
    busPlate: FG(1808, 0, 128, 128),
    oneWay: FG(784, 128, 128, 64),
    noBikes: FG(912, 128, 128, 48),
    hydrant: FG(1040, 128, 64, 64),
    parkTimes: FG(1104, 128, 96, 40),
    timetable: FG(1200, 128, 96, 128),
    lensG: FG(1296, 128, 64, 64),
    lensY: FG(1360, 128, 64, 64),
    lensR: FG(1424, 128, 64, 64),
    arrowR: FG(1488, 128, 64, 64),
    arrowU: FG(1552, 128, 64, 64),
    arrowL: FG(1616, 128, 64, 64),
    pedRed: FG(1680, 128, 64, 64),
    pedGreen: FG(1744, 128, 64, 64),
    waitBar: FG(1808, 128, 32, 96),
    manholeArt: FG(1840, 128, 64, 64),
    vendSide: FG(1904, 128, 64, 128),
    soundWall: FG(0, 1184, 256, 96),
    soffit: FG(256, 1184, 256, 96),
    fascia: FG(512, 1184, 256, 96),
  },
  LG = {
    guide: { x: 0, y: 320, w: 384, h: 168, cols: 5, rows: 2 },
    shuto: { x: 0, y: 656, w: 384, h: 168, cols: 5, rows: 2 },
    cross: { x: 0, y: 992, w: 256, h: 64, cols: 8, rows: 2 },
    name: { x: 0, y: 256, w: 128, h: 32, cols: 16, rows: 2 },
    plate: { x: 0, y: 1120, w: 128, h: 32, cols: 16, rows: 2 },
  };
function RG(e, t = 0.5) {
  return {
    u0: (e.x + t) / NG,
    u1: (e.x + e.w - t) / NG,
    v0: 1 - (e.y + e.h - t) / PG,
    v1: 1 - (e.y + t) / PG,
  };
}
var zG = (e) => RG(IG[e]);
function BG(e, t) {
  let n = LG[e],
    r = t % n.cols,
    i = Math.floor(t / n.cols);
  return RG(FG(n.x + r * n.w, n.y + i * n.h, n.w, n.h), 1);
}
var VG = (e) => LG[e].cols * LG[e].rows;
function HG(e) {
  let t = e === `shuto` ? IG.green : e === `name` ? IG.white2 : IG.blue,
    n = (t.x + t.w / 2) / NG,
    r = 1 - (t.y + t.h / 2) / PG;
  return { u0: n, u1: n, v0: r, v1: r };
}
if (Kg.u !== (IG.white.x + 16) / 2048 || Kg.v !== 1 - (IG.white.y + 16) / 1280)
  throw Error(`street atlas: WHITE out of sync`);
var UG = {
    blue: `#1d4a9b`,
    red: `#d4202a`,
    green: `#0b6a3c`,
    white: `#ffffff`,
    yellow: `#f5c400`,
  },
  WG = (e) => parseInt(e.replace(`#`, ``), 16) || 0,
  GG = (e) => `#${e.toString(16).padStart(6, `0`)}`,
  KG = [
    { body: 14100014, trim: 15921906, mark: null },
    { body: 2056127, trim: 16053492, mark: null },
    { body: 16053488, trim: 2787914, mark: null },
    { body: 2501168, trim: 15249440, mark: null },
  ];
function qG(e) {
  let t = [...(e?.drinks ?? [])].sort(
      (e, t) => (t.weight ?? 1) - (e.weight ?? 1),
    ),
    n = [];
  for (let e of t) {
    if (n.length >= 4) break;
    let t = e.colors ?? [];
    if (t.length < 2) continue;
    let r = e.ja ?? e.en ?? null;
    n.push({ body: WG(t[0]), trim: WG(t[1]), mark: r });
  }
  for (let e = n.length; e < 4; e++) n.push(KG[e]);
  return n;
}
var JG = class {
  scale;
  sans;
  serif;
  lang;
  liveries;
  canvas;
  g;
  texture;
  s;
  constructor(e, t, n, r, i, a = KG) {
    ((this.scale = e),
      (this.sans = t),
      (this.serif = n),
      (this.lang = r),
      (this.liveries = a),
      (this.s = e));
    let [o, s] = ye(Math.round(NG * e), Math.round(PG * e));
    (o.setAttribute(`lang`, r),
      (this.canvas = o),
      (this.g = s),
      (s.fillStyle = `#808080`),
      s.fillRect(0, 0, o.width, o.height),
      this.paintStatic());
    let c = (this.texture = new A(o));
    ((c.colorSpace = f),
      (c.anisotropy = i),
      (c.generateMipmaps = !0),
      (c.minFilter = S),
      (c.magFilter = E),
      (c.name = `tokyo-street-atlas`));
  }
  paintSign(e, t) {
    let n = LG[t.kind];
    (e.save(), e.scale(this.s, this.s), CK(e, this, t, n.w, n.h), e.restore());
  }
  paintStatic() {
    let e = this.g;
    (e.save(), e.scale(this.s, this.s));
    let t = (t, n) => {
        (e.save(),
          e.beginPath(),
          e.rect(t.x, t.y, t.w, t.h),
          e.clip(),
          e.translate(t.x, t.y),
          n(e, t.w, t.h),
          e.restore());
      },
      n = (e, n) =>
        t(e, (e, t, r) => ((e.fillStyle = n), e.fillRect(0, 0, t, r)));
    (n(IG.white, `#ffffff`),
      n(IG.blue, UG.blue),
      n(IG.green, UG.green),
      n(IG.white2, `#f6f6f2`),
      this.liveries.forEach((e, n) =>
        t(IG[`vend${n}`], (t, r, i) =>
          nK(t, r, i, GG(e.body), GG(e.trim), n, this, e.mark),
        ),
      ),
      [`dental`, `seikotsu`, `vet`, `realestate`, `clinic`].forEach((e, n) =>
        t(IG[`ad${n}`], (t, r, i) =>
          iK(
            t,
            r,
            i,
            B(`streets.pole-ad.${e}`),
            B(`streets.pole-ad.${e}-dir`),
            n,
            this,
          ),
        ),
      ),
      t(IG.tomare, (e, t, n) => aK(e, t, n, this)),
      t(IG.noParking, (e, t, n) => sK(e, t, n, 1)),
      t(IG.noStopping, (e, t, n) => sK(e, t, n, 2)),
      t(IG.speed30, (e, t, n) => cK(e, t, n, `30`, this)),
      t(IG.speed40, (e, t, n) => cK(e, t, n, `40`, this)),
      t(IG.speed50, (e, t, n) => cK(e, t, n, `50`, this)),
      t(IG.noEntry, (e, t, n) => lK(e, t, n)),
      t(IG.crossing, (e, t, n) => uK(e, t, n)),
      t(IG.busPlate, (e, t, n) => dK(e, t, n, this)),
      t(IG.oneWay, (e, t, n) => fK(e, t, n, this)),
      t(IG.noBikes, (e, t, n) =>
        pK(
          e,
          t,
          n,
          YG(`common.safety.churin-kinshi`, `駐輪禁止`),
          `#ffffff`,
          UG.red,
          this,
        ),
      ),
      t(IG.hydrant, (e, t, n) =>
        pK(
          e,
          t,
          n,
          YG(`common.safety.shokasen`, `消火栓`),
          UG.red,
          `#ffffff`,
          this,
          !0,
        ),
      ),
      t(IG.parkTimes, (e, t, n) =>
        pK(
          e,
          t,
          n,
          B(`streets.sign.no-parking-times`),
          `#ffffff`,
          `#202020`,
          this,
        ),
      ),
      t(IG.timetable, (e, t, n) => mK(e, t, n, this)),
      t(IG.lensG, (e, t, n) => hK(e, t, n, `#19d2b4`, `#b8fff0`)),
      t(IG.lensY, (e, t, n) => hK(e, t, n, `#ffae12`, `#fff0b8`)),
      t(IG.lensR, (e, t, n) => hK(e, t, n, `#ff2d1f`, `#ffc2b8`)),
      t(IG.arrowR, (e, t, n) => gK(e, t, n, 0)),
      t(IG.arrowU, (e, t, n) => gK(e, t, n, -Math.PI / 2)),
      t(IG.arrowL, (e, t, n) => gK(e, t, n, Math.PI)),
      t(IG.pedRed, (e, t, n) => _K(e, t, n, !1)),
      t(IG.pedGreen, (e, t, n) => _K(e, t, n, !0)),
      t(IG.waitBar, (e, t, n) => vK(e, t, n)),
      t(IG.manholeArt, (e, t, n) => SK(e, t, n)),
      t(IG.vendSide, (e, t, n) => rK(e, t, n)),
      t(IG.soundWall, (e, t, n) => yK(e, t, n)),
      t(IG.soffit, (e, t, n) => bK(e, t, n)),
      t(IG.fascia, (e, t, n) => xK(e, t, n)),
      e.restore());
  }
};
function YG(e, t) {
  try {
    return B(e) || t;
  } catch {
    return t;
  }
}
function XG(e, t, n = 700) {
  return `${n} ${t}px ${e.sans}`;
}
function ZG(e, t, n, r, i) {
  let a = e.measureText(t).width;
  if (a <= i || a === 0) {
    e.fillText(t, n, r);
    return;
  }
  (e.save(),
    e.translate(n, r),
    e.scale(i / a, 1),
    e.fillText(t, 0, 0),
    e.restore());
}
function QG(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.quadraticCurveTo(t + r, n, t + r, n + a),
    e.lineTo(t + r, n + i - a),
    e.quadraticCurveTo(t + r, n + i, t + r - a, n + i),
    e.lineTo(t + a, n + i),
    e.quadraticCurveTo(t, n + i, t, n + i - a),
    e.lineTo(t, n + a),
    e.quadraticCurveTo(t, n, t + a, n),
    e.closePath());
}
function $G(e) {
  let t = e >>> 0 || 1;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
var eK = 1;
function tK(e) {
  eK = Math.max(0, Math.min(2, Math.round(e)));
}
