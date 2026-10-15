// tokyo/assets/region-tokyo-55J_WESF 363 — cols
// Lines 132245-132561 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function OZ(e, t, n, r, i, a, o, s, c, l, u, d, f, p = !1) {
  if (s - o < 0.2) return;
  let m = e.n;
  for (let m = 0; m <= f; m++)
    for (let h = 0; h <= f; h++) {
      let g = r - a + (2 * a * h) / f,
        _ = o + ((s - o) * m) / f,
        v = ((g - r) ** 2 + (_ - i) ** 2) / (a * a),
        y = v >= 1 ? 0 : (1 - v) * (1 - v);
      e.setMaterial(u, 0, d * y, 1).setColor(uZ(l[0]), uZ(l[1]), uZ(l[2]));
      let b = t.axis === `x` ? g : t.at + n * _,
        x = t.axis === `x` ? t.at + n * _ : g;
      p
        ? e.vertex(b, c, x, 0, 1, 0, tZ(b), tZ(x))
        : e.vertex(b, c, x, 0, 1, 0, sm.u, sm.v);
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
  e.setMaterial(0.6, 0, sZ, cZ).setColor(...dZ);
}
var kZ = 2048,
  AZ = 1280,
  jZ = (e, t, n, r) => ({ x: e, y: t, w: n, h: r }),
  MZ = {
    white: jZ(0, 0, 32, 32),
    blue: jZ(0, 32, 16, 16),
    green: jZ(16, 32, 16, 16),
    white2: jZ(0, 48, 16, 16),
    vend0: jZ(32, 0, 128, 256),
    vend1: jZ(160, 0, 128, 256),
    vend2: jZ(288, 0, 128, 256),
    vend3: jZ(416, 0, 128, 256),
    ad0: jZ(544, 0, 48, 224),
    ad1: jZ(592, 0, 48, 224),
    ad2: jZ(640, 0, 48, 224),
    ad3: jZ(688, 0, 48, 224),
    ad4: jZ(736, 0, 48, 224),
    tomare: jZ(784, 0, 128, 128),
    noParking: jZ(912, 0, 128, 128),
    noStopping: jZ(1040, 0, 128, 128),
    speed30: jZ(1168, 0, 128, 128),
    speed40: jZ(1296, 0, 128, 128),
    speed50: jZ(1424, 0, 128, 128),
    noEntry: jZ(1552, 0, 128, 128),
    crossing: jZ(1680, 0, 128, 128),
    busPlate: jZ(1808, 0, 128, 128),
    oneWay: jZ(784, 128, 128, 64),
    noBikes: jZ(912, 128, 128, 48),
    hydrant: jZ(1040, 128, 64, 64),
    parkTimes: jZ(1104, 128, 96, 40),
    timetable: jZ(1200, 128, 96, 128),
    lensG: jZ(1296, 128, 64, 64),
    lensY: jZ(1360, 128, 64, 64),
    lensR: jZ(1424, 128, 64, 64),
    arrowR: jZ(1488, 128, 64, 64),
    arrowU: jZ(1552, 128, 64, 64),
    arrowL: jZ(1616, 128, 64, 64),
    pedRed: jZ(1680, 128, 64, 64),
    pedGreen: jZ(1744, 128, 64, 64),
    waitBar: jZ(1808, 128, 32, 96),
    manholeArt: jZ(1840, 128, 64, 64),
    vendSide: jZ(1904, 128, 64, 128),
    soundWall: jZ(0, 1184, 256, 96),
    soffit: jZ(256, 1184, 256, 96),
    fascia: jZ(512, 1184, 256, 96),
  },
  NZ = {
    guide: { x: 0, y: 320, w: 384, h: 168, cols: 5, rows: 2 },
    shuto: { x: 0, y: 656, w: 384, h: 168, cols: 5, rows: 2 },
    cross: { x: 0, y: 992, w: 256, h: 64, cols: 8, rows: 2 },
    name: { x: 0, y: 256, w: 128, h: 32, cols: 16, rows: 2 },
    plate: { x: 0, y: 1120, w: 128, h: 32, cols: 16, rows: 2 },
  };
function PZ(e, t = 0.5) {
  return {
    u0: (e.x + t) / kZ,
    u1: (e.x + e.w - t) / kZ,
    v0: 1 - (e.y + e.h - t) / AZ,
    v1: 1 - (e.y + t) / AZ,
  };
}
var FZ = (e) => PZ(MZ[e]);
function fMe(e, t) {
  let n = NZ[e],
    r = t % n.cols,
    i = Math.floor(t / n.cols);
  return PZ(jZ(n.x + r * n.w, n.y + i * n.h, n.w, n.h), 1);
}
var IZ = (e) => NZ[e].cols * NZ[e].rows;
function LZ(e) {
  let t = e === `shuto` ? MZ.green : e === `name` ? MZ.white2 : MZ.blue,
    n = (t.x + t.w / 2) / kZ,
    r = 1 - (t.y + t.h / 2) / AZ;
  return { u0: n, u1: n, v0: r, v1: r };
}
if (sm.u !== (MZ.white.x + 16) / 2048 || sm.v !== 1 - (MZ.white.y + 16) / 1280)
  throw Error(`street atlas: WHITE out of sync`);
var RZ = {
    blue: `#1d4a9b`,
    red: `#d4202a`,
    green: `#0b6a3c`,
    white: `#ffffff`,
    yellow: `#f5c400`,
  },
  zZ = (e) => parseInt(e.replace(`#`, ``), 16) || 0,
  BZ = (e) => `#${e.toString(16).padStart(6, `0`)}`,
  VZ = [
    { body: 14100014, trim: 15921906, mark: null },
    { body: 2056127, trim: 16053492, mark: null },
    { body: 16053488, trim: 2787914, mark: null },
    { body: 2501168, trim: 15249440, mark: null },
  ];
function HZ(e) {
  let t = [...(e?.drinks ?? [])].sort(
      (e, t) => (t.weight ?? 1) - (e.weight ?? 1),
    ),
    n = [];
  for (let e of t) {
    if (n.length >= 4) break;
    let t = e.colors ?? [];
    if (t.length < 2) continue;
    let r = e.ja ?? e.en ?? null;
    n.push({ body: zZ(t[0]), trim: zZ(t[1]), mark: r });
  }
  for (let e = n.length; e < 4; e++) n.push(VZ[e]);
  return n;
}
var pMe = class {
  scale;
  sans;
  serif;
  lang;
  liveries;
  canvas;
  g;
  texture;
  s;
  constructor(e, t, n, r, i, o = VZ) {
    ((this.scale = e),
      (this.sans = t),
      (this.serif = n),
      (this.lang = r),
      (this.liveries = o),
      (this.s = e));
    let [s, c] = xe(Math.round(kZ * e), Math.round(AZ * e));
    (s.setAttribute(`lang`, r),
      (this.canvas = s),
      (this.g = c),
      (c.fillStyle = `#808080`),
      c.fillRect(0, 0, s.width, s.height),
      this.paintStatic());
    let l = (this.texture = new ee(s));
    ((l.colorSpace = a),
      (l.anisotropy = i),
      (l.generateMipmaps = !0),
      (l.minFilter = x),
      (l.magFilter = E),
      (l.name = `tokyo-street-atlas`));
  }
  paintSign(e, t) {
    let n = NZ[t.kind];
    (e.save(), e.scale(this.s, this.s), kMe(e, this, t, n.w, n.h), e.restore());
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
    (n(MZ.white, `#ffffff`),
      n(MZ.blue, RZ.blue),
      n(MZ.green, RZ.green),
      n(MZ.white2, `#f6f6f2`),
      this.liveries.forEach((e, n) =>
        t(MZ[`vend${n}`], (t, r, i) =>
          hMe(t, r, i, BZ(e.body), BZ(e.trim), n, this, e.mark),
        ),
      ),
      [`dental`, `seikotsu`, `vet`, `realestate`, `clinic`].forEach((e, n) =>
        t(MZ[`ad${n}`], (t, r, i) =>
          _Me(
            t,
            r,
            i,
            L(`streets.pole-ad.${e}`),
            L(`streets.pole-ad.${e}-dir`),
            n,
            this,
          ),
        ),
      ),
      t(MZ.tomare, (e, t, n) => vMe(e, t, n, this)),
      t(MZ.noParking, (e, t, n) => XZ(e, t, n, 1)),
      t(MZ.noStopping, (e, t, n) => XZ(e, t, n, 2)),
      t(MZ.speed30, (e, t, n) => ZZ(e, t, n, `30`, this)),
      t(MZ.speed40, (e, t, n) => ZZ(e, t, n, `40`, this)),
      t(MZ.speed50, (e, t, n) => ZZ(e, t, n, `50`, this)),
      t(MZ.noEntry, (e, t, n) => yMe(e, t, n)),
      t(MZ.crossing, (e, t, n) => bMe(e, t, n)),
      t(MZ.busPlate, (e, t, n) => xMe(e, t, n, this)),
      t(MZ.oneWay, (e, t, n) => SMe(e, t, n, this)),
      t(MZ.noBikes, (e, t, n) =>
        QZ(
          e,
          t,
          n,
          UZ(`common.safety.churin-kinshi`, `駐輪禁止`),
          `#ffffff`,
          RZ.red,
          this,
        ),
      ),
      t(MZ.hydrant, (e, t, n) =>
        QZ(
          e,
          t,
          n,
          UZ(`common.safety.shokasen`, `消火栓`),
          RZ.red,
          `#ffffff`,
          this,
          !0,
        ),
      ),
      t(MZ.parkTimes, (e, t, n) =>
        QZ(
          e,
          t,
          n,
          L(`streets.sign.no-parking-times`),
          `#ffffff`,
          `#202020`,
          this,
        ),
      ),
      t(MZ.timetable, (e, t, n) => CMe(e, t, n, this)),
      t(MZ.lensG, (e, t, n) => $Z(e, t, n, `#19d2b4`, `#b8fff0`)),
      t(MZ.lensY, (e, t, n) => $Z(e, t, n, `#ffae12`, `#fff0b8`)),
      t(MZ.lensR, (e, t, n) => $Z(e, t, n, `#ff2d1f`, `#ffc2b8`)),
      t(MZ.arrowR, (e, t, n) => eQ(e, t, n, 0)),
      t(MZ.arrowU, (e, t, n) => eQ(e, t, n, -Math.PI / 2)),
      t(MZ.arrowL, (e, t, n) => eQ(e, t, n, Math.PI)),
      t(MZ.pedRed, (e, t, n) => tQ(e, t, n, !1)),
      t(MZ.pedGreen, (e, t, n) => tQ(e, t, n, !0)),
      t(MZ.waitBar, (e, t, n) => wMe(e, t, n)),
      t(MZ.manholeArt, (e, t, n) => OMe(e, t, n)),
      t(MZ.vendSide, (e, t, n) => gMe(e, t, n)),
      t(MZ.soundWall, (e, t, n) => TMe(e, t, n)),
      t(MZ.soffit, (e, t, n) => EMe(e, t, n)),
      t(MZ.fascia, (e, t, n) => DMe(e, t, n)),
      e.restore());
  }
};
function UZ(e, t) {
  try {
    return L(e) || t;
  } catch {
    return t;
  }
}
function WZ(e, t, n = 700) {
  return `${n} ${t}px ${e.sans}`;
}
function GZ(e, t, n, r, i) {
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
function KZ(e, t, n, r, i, a) {
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
function qZ(e) {
  let t = e >>> 0 || 1;
  return () => (t = (t * 1664525 + 1013904223) >>> 0) / 4294967296;
}
var JZ = 1;
function mMe(e) {
  JZ = Math.max(0, Math.min(2, Math.round(e)));
}
